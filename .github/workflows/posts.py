import os
import re
import time

from bs4 import BeautifulSoup
from playwright.sync_api import (
    Page,
    Error as PlaywrightError,
    TimeoutError as PlaywrightTimeoutError,
)


def test_diff(page: Page):
    """Scrape LibGuides blog posts to track changes."""
    page.goto(f'{os.environ.get("SITE_BASE_URL").rstrip("/")}/blog')
    # click OK for cookies
    page.click("#s-ui-cc-close-btn")
    links = []
    while True:
        # NOTE easier to wait 1 second than solve the issues that arose
        # waiting for the elements with playwright methods
        time.sleep(1)
        blog = BeautifulSoup(page.content(), "html.parser")
        links.extend(blog.select(".s-lg-blog-header a"))
        if blog.find(class_="next"):
            if blog.find("a", string="Older Posts"):
                page.click(".next a:text('Older Posts')")
            else:
                break
        else:
            break
    for link in links:
        filename = f'content/posts/{link["href"].split("/blog/")[-1].replace("/", "_")}.html'
        # catch any timeouts and continue the loop
        try:
            # open the page in a browser
            page.goto(link["href"])
            page.wait_for_load_state("networkidle")
            soup = BeautifulSoup(page.content(), "html.parser")
            # select blogpost content only
            blogpost = soup.find(id=re.compile(r"^comment-\d+$"))
        except PlaywrightTimeoutError as e:
            try:
                # try again to open the page in a browser
                page.goto(link["href"])
                page.wait_for_load_state("networkidle")
                soup = BeautifulSoup(page.content(), "html.parser")
                # select blogpost content only
                blogpost = soup.find(id=re.compile(r"^comment-\d+$"))
            except PlaywrightTimeoutError as e:
                # write error to file
                with open(filename, "w") as file:
                    file.write(str(e))
                continue
        except PlaywrightError as error:
            # NS_ERROR_ABORT seems like a browser issue of some kind
            if error.message == "NS_ERROR_ABORT":
                # write error to file
                with open(filename, "w") as file:
                    file.write(str(error))
                continue
            else:
                raise error
        # write prettified html to file
        with open(filename, "w") as file:
            file.write(blogpost.prettify())
