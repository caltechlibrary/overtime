import json
import os
import re

import requests

from bs4 import BeautifulSoup
from playwright.sync_api import (
    Page,
    Error as PlaywrightError,
    TimeoutError as PlaywrightTimeoutError,
)


def test_diff(page: Page):
    """Save and track changes in LibGuides content."""
    api_params = {
        "site_id": os.environ.get("API_SITE_ID"),
        "key": os.environ.get("API_KEY"),
        "expand": "pages",
        # retrieve published guides only
        "status": "1",
    }
    guides_retrieved = requests.get(
        "/".join(
            [
                os.environ.get("API_BASE_URL").rstrip("/"),
                os.environ.get("API_ENDPOINT"),
            ]
        ),
        params=api_params,
    ).json()
    for guide in guides_retrieved:
        # count_hit increases overwhelm the diff
        guide.pop("count_hit", None)
        # cache busting parameters bust the diff
        if "thumbnail_url" in guide:
            guide["thumbnail_url"] = guide["thumbnail_url"].rsplit("&cb=")[0]
    with open(f"content/pages.json", "w") as f:
        f.write(json.dumps(guides_retrieved, indent=4, sort_keys=True))
    # click OK for cookies
    page.goto(os.environ.get("SITE_BASE_URL"))
    page.click("#s-ui-cc-close-btn")
    for guide in guides_retrieved:
        if guide["redirect_url"]:
            continue
        for guide_page in guide["pages"]:
            # skip pages that are actually redirects to elsewhere
            if guide_page["redirect_url"]:
                continue
            # skip pages that are hidden
            if guide_page["enable_display"] == "0":
                continue
            # replace all non-word characters with hyphens
            # example:
            # “Scientific Researches!—New Discoveries in PNEUMATICKS!”
            # -Scientific-Researches--New-Discoveries-in-PNEUMATICKS--
            filename_name = re.sub("[^a-zA-Z0-9-]", "-", guide_page["name"])
            # replace all consecutive hyphens with single hyphen
            # example:
            # -Scientific-Researches--New-Discoveries-in-PNEUMATICKS--
            # -Scientific-Researches-New-Discoveries-in-PNEUMATICKS-
            filename_name = re.sub("--+", "-", filename_name)
            # remove all start and end hyphens
            # example:
            # -Scientific-Researches-New-Discoveries-in-PNEUMATICKS-
            # Scientific-Researches-New-Discoveries-in-PNEUMATICKS
            filename_name = filename_name.strip("-")
            # replace all slash characters with underscores
            # example:
            # about/policies
            # about_policies
            if guide_page["friendly_url"]:
                filename_friendly_url = f'{re.sub("/", "_", guide_page["friendly_url"].split(os.environ.get("SITE_BASE_URL"))[-1])}--'
            else:
                filename_friendly_url = ""
            # construct filename
            filename = f'{filename_name}--{filename_friendly_url}g-{guide["id"]}-p-{guide_page["id"]}.html'
            # catch any timeouts and continue the loop
            try:
                # open the page in a browser
                page.goto(guide_page["url"])
                page.wait_for_load_state("networkidle")
            except PlaywrightTimeoutError as e:
                try:
                    # try again to open the page in a browser
                    page.goto(guide_page["url"])
                    page.wait_for_load_state("networkidle")
                except PlaywrightTimeoutError as e:
                    # write error to file
                    with open(f"content/pages/{filename}", "w") as file:
                        file.write(str(e))
                    continue
            except PlaywrightError as error:
                # NS_ERROR_ABORT seems like a browser issue of some kind
                if error.message == "NS_ERROR_ABORT":
                    # write error to file
                    with open(f"content/pages/{filename}", "w") as file:
                        file.write(str(error))
                    continue
                else:
                    raise error
            soup = BeautifulSoup(page.content(), "html.parser")
            # select page main content only
            pagemain = soup.find(id="s-lg-guide-main")
            # remove dynamic content
            if pagemain.find(id="s-lg-page-prevnext"):
                pagemain.find(id="s-lg-page-prevnext").decompose()
            if pagemain.find(class_="s-lc-whw"):
                pagemain.find(class_="s-lc-whw").clear()
            if pagemain.find_all(id=re.compile("^libchat_")):
                for libchat in pagemain.find_all(id=re.compile("^libchat_")):
                    libchat.decompose()
            if pagemain.select(".s-la-content-faqlist"):
                for faqlist in pagemain.select(".s-la-content-faqlist"):
                    faqlist.clear()
            if pagemain.select(".s-lg-system-list .s-lg-guide-info-updated"):
                for updated in pagemain.select(
                    ".s-lg-system-list .s-lg-guide-info-updated"
                ):
                    updated.clear()
            if pagemain.select(".s-lg-system-list .s-lg-guide-info-views"):
                for views in pagemain.select(
                    ".s-lg-system-list .s-lg-guide-info-views"
                ):
                    views.clear()
            if pagemain.select(".ep_view_timestamp strong"):
                for timestamp in pagemain.select(".ep_view_timestamp strong"):
                    timestamp.clear()
            if pagemain.select(".s-lg-rss .s-lg-rss-list"):
                for rss in pagemain.select(".s-lg-rss .s-lg-rss-list"):
                    rss.clear()
            if pagemain.select(".hours-today .hours-col-time"):
                for time in pagemain.select(".hours-today .hours-col-time"):
                    time.clear()
            if pagemain.select(".resize-sensor"):
                for expand in pagemain.select(".resize-sensor"):
                    expand.decompose()
            # write html to file
            with open(f"content/pages/{filename}", "w") as file:
                file.write(pagemain.prettify())
