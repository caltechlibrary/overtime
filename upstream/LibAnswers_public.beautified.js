/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
 */
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2024 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.4.1", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        var n = t(this),
            s = n.attr("data-target");
        s || (s = (s = n.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), s = "#" === s ? [] : s;
        var a = t(document).find(s);

        function r() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r())
    };
    var n = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.alert");
            s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        }))
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]',
        i = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

    function n(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = "#" !== i ? t(document).find(i) : null;
        return n && n.length ? n : e.parent()
    }

    function s(i) {
        i && 3 === i.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
            var e = t(this),
                s = n(e),
                a = {
                    relatedTarget: this
                };
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", a)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
        })))
    }
    i.VERSION = "3.4.1", i.prototype.toggle = function(e) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var a = n(i),
                r = a.hasClass("open");
            if (s(), !r) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", s);
                var o = {
                    relatedTarget: this
                };
                if (a.trigger(e = t.Event("show.bs.dropdown", o)), e.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", o))
            }
            return !1
        }
    }, i.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var s = t(this);
            if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
                var a = n(s),
                    r = a.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && a.find(e).trigger("focus"), s.trigger("click");
                var o = a.find(".dropdown-menu li:not(.disabled):visible a");
                if (o.length) {
                    var l = o.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.dropdown");
            s || n.data("bs.dropdown", s = new i(this)), "string" == typeof e && s[e].call(n)
        }))
    }, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        t.stopPropagation()
    })).on("click.bs.dropdown.data-api", e, i.prototype.toggle).on("keydown.bs.dropdown.data-api", e, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
            this.$element.trigger("loaded.bs.modal")
        }), this))
    };

    function i(i, n) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.modal"),
                r = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
            a || s.data("bs.modal", a = new e(this, r)), "string" == typeof i ? a[i](n) : r.show && a.show(n)
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(i) {
        var n = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
            n.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            }))
        })), this.backdrop((function() {
            var s = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var a = t.Event("shown.bs.modal", {
                relatedTarget: i
            });
            s ? n.$dialog.one("bsTransitionEnd", (function() {
                n.$element.trigger("focus").trigger(a)
            })).emulateTransitionEnd(e.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(a)
        })))
    }, e.prototype.hide = function(i) {
        i && i.preventDefault(), i = t.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }), this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
            27 == t.which && this.hide()
        }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop((function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        }))
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(i) {
        var n = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }), this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            a ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), i && i()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r()
        } else i && i()
    }, e.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, e.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var i = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + i), t(this.fixedContent).each((function(e, n) {
            var s = n.style.paddingRight,
                a = t(n).css("padding-right");
            t(n).data("padding-right", s).css("padding-right", parseFloat(a) + i + "px")
        })))
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function(e, i) {
            var n = t(i).data("padding-right");
            t(i).removeData("padding-right"), i.style.paddingRight = n || ""
        }))
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = i, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var n = t(this),
            s = n.attr("href"),
            a = n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, ""),
            r = t(document).find(a),
            o = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, r.data(), n.data());
        n.is("a") && e.preventDefault(), r.one("show.bs.modal", (function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", (function() {
                n.is(":visible") && n.trigger("focus")
            }))
        })), i.call(r, o, this)
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"],
        i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        n = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function r(e, n) {
        var r = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(r, n)) return -1 === t.inArray(r, i) || Boolean(e.nodeValue.match(s) || e.nodeValue.match(a));
        for (var o = t(n).filter((function(t, e) {
                return e instanceof RegExp
            })), l = 0, c = o.length; l < c; l++)
            if (r.match(o[l])) return !0;
        return !1
    }

    function o(e, i, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
        var s = document.implementation.createHTMLDocument("sanitization");
        s.body.innerHTML = e;
        for (var a = t.map(i, (function(t, e) {
                return e
            })), o = t(s.body).find("*"), l = 0, c = o.length; l < c; l++) {
            var d = o[l],
                h = d.nodeName.toLowerCase();
            if (-1 !== t.inArray(h, a))
                for (var u = t.map(d.attributes, (function(t) {
                        return t
                    })), p = [].concat(i["*"] || [], i[h] || []), f = 0, m = u.length; f < m; f++) r(u[f], p) || d.removeAttribute(u[f].nodeName);
            else d.parentNode.removeChild(d)
        }
        return s.body.innerHTML
    }
    var l = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    l.VERSION = "3.4.1", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: n
    }, l.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), a = s.length; a--;) {
            var r = s[a];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var o = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, l.prototype.getDefaults = function() {
        return l.DEFAULTS
    }, l.prototype.getOptions = function(i) {
        var n = this.$element.data();
        for (var s in n) n.hasOwnProperty(s) && -1 !== t.inArray(s, e) && delete n[s];
        return (i = t.extend({}, this.getDefaults(), n, i)).delay && "number" == typeof i.delay && (i.delay = {
            show: i.delay,
            hide: i.delay
        }), i.sanitize && (i.template = o(i.template, i.whiteList, i.sanitizeFn)), i
    }, l.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, (function(t, n) {
            i[t] != n && (e[t] = n)
        })), e
    }, l.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout((function() {
                "in" == i.hoverState && i.show()
            }), i.options.delay.show)
        }
    }, l.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, l.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout((function() {
                "out" == i.hoverState && i.hide()
            }), i.options.delay.hide)
        }
    }, l.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                c = o.test(r);
            c && (r = r.replace(o, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(t(document).find(this.options.container)) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                h = s[0].offsetWidth,
                u = s[0].offsetHeight;
            if (c) {
                var p = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + u > f.bottom ? "top" : "top" == r && d.top - u < f.top ? "bottom" : "right" == r && d.right + h > f.width ? "left" : "left" == r && d.left - h < f.left ? "right" : r, s.removeClass(p).addClass(r)
            }
            var m = this.getCalculatedOffset(r, d, h, u);
            this.applyPlacement(m, r);
            var g = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(l.TRANSITION_DURATION) : g()
        }
    }, l.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            s = n[0].offsetWidth,
            a = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            o = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(o) && (o = 0), e.top += r, e.left += o, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != a && (e.top = e.top + a - c);
        var d = this.getViewportAdjustedDelta(i, e, l, c);
        d.left ? e.left += d.left : e.top += d.top;
        var h = /top|bottom/.test(i),
            u = h ? 2 * d.left - s + l : 2 * d.top - a + c,
            p = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(u, n[0][p], h)
    }, l.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, l.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = o(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, l.prototype.hide = function(e) {
        var i = this,
            n = t(this.$tip),
            s = t.Event("hide.bs." + this.type);

        function a() {
            "in" != i.hoverState && n.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", a).emulateTransitionEnd(l.TRANSITION_DURATION) : a(), this.hoverState = null, this
    }, l.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, l.prototype.hasContent = function() {
        return this.getTitle()
    }, l.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            n = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var a = window.SVGElement && i instanceof window.SVGElement,
            r = n ? {
                top: 0,
                left: 0
            } : a ? null : e.offset(),
            o = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, s, o, l, r)
    }, l.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, l.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var a = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var o = e.top - a - r.scroll,
                l = e.top + a - r.scroll + n;
            o < r.top ? s.top = r.top - o : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var c = e.left - a,
                d = e.left + a + i;
            c < r.left ? s.left = r.left - c : d > r.right && (s.left = r.left + r.width - d)
        }
        return s
    }, l.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, l.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, l.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, l.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, l.prototype.enable = function() {
        this.enabled = !0
    }, l.prototype.disable = function() {
        this.enabled = !1
    }, l.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, l.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, l.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide((function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        }))
    }, l.prototype.sanitizeHtml = function(t) {
        return o(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var c = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each((function() {
            var i = t(this),
                n = i.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || i.data("bs.tooltip", n = new l(this, s)), "string" == typeof e && n[e]())
        }))
    }, t.fn.tooltip.Constructor = l, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = c, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        if (this.options.html) {
            var n = typeof i;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === n && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === n ? "html" : "append"](i)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.popover"),
                a = "object" == typeof i && i;
            !s && /destroy|hide/.test(i) || (s || n.data("bs.popover", s = new e(this, a)), "string" == typeof i && s[i]())
        }))
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };

    function i(i) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new e(this)), "string" == typeof i && s[i]()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                a = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(a), e.trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
                var o = t(document).find(n);
                this.activate(e.closest("li"), i), this.activate(o, o.parent(), (function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                }))
            }
        }
    }, e.prototype.activate = function(i, n, s) {
        var a = n.find("> .active"),
            r = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);

        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = i, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var s = function(e) {
        e.preventDefault(), i.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, n) {
        this.options = t.extend({}, e.DEFAULTS, n);
        var s = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = s.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function i(i) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.affix"),
                a = "object" == typeof i && i;
            s || n.data("bs.affix", s = new e(this, a)), "string" == typeof i && s[i]()
        }))
    }
    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function(t, e, i, n) {
        var s = this.$target.scrollTop(),
            a = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return s < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= a.top) && "bottom" : !(s + r <= t - n) && "bottom";
        var o = null == this.affixed,
            l = o ? s : a.top;
        return null != i && s <= i ? "top" : null != n && l + (o ? r : e) >= t - n && "bottom"
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var i = this.$element.height(),
                n = this.options.offset,
                s = n.top,
                a = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (a = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof a && (a = n.bottom(this.$element));
            var o = this.getState(r, i, s, a);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (o ? "-" + o : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: r - i - a
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = i, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", (function() {
        t('[data-spy="affix"]').each((function() {
            var e = t(this),
                n = e.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), i.call(e, n)
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, n) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function i(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(n)
    }

    function n(i) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.collapse"),
                a = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
            !s && a.toggle && /show|hide/.test(i) && (a.toggle = !1), s || n.data("bs.collapse", s = new e(this, a)), "string" == typeof i && s[i]()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var i, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (i = s.data("bs.collapse")) && i.transitioning)) {
                var a = t.Event("show.bs.collapse");
                if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                    s && s.length && (n.call(s, "hide"), i || s.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return o.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var i = t.Event("hide.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return s.call(this);
                this.$element[n](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, e.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, n) {
            var s = t(n);
            this.addAriaAndCollapsedClass(i(s), s)
        }), this)).end()
    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
        var s = t(this);
        s.attr("data-target") || e.preventDefault();
        var a = i(s),
            r = a.data("bs.collapse") ? "toggle" : s.data();
        n.call(a, r)
    }))
}(jQuery),
function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(i).is(document.body) ? t(window) : t(i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each((function() {
            var n = t(this),
                s = n.data("bs.scrollspy"),
                a = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, a)), "string" == typeof i && s[i]()
        }))
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                a = /^#./.test(s) && t(s);
            return a && a.length && a.is(":visible") && [
                [a[i]().top + n, s]
            ] || null
        })).sort((function(t, e) {
            return t[0] - e[0]
        })).each((function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        }))
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            a = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = a[a.length - 1]) && this.activate(t);
        if (r && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) r != a[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(a[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", (function() {
        t('[data-spy="scroll"]').each((function() {
            var e = t(this);
            i.call(e, e.data())
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", (function() {
            i = !0
        }));
        return setTimeout((function() {
            i || t(n).trigger(t.support.transition.end)
        }), e), this
    }, t((function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    }))
}(jQuery),
function(t) {
    const e = {
            input: null,
            list: null,
            listLabel: "Suggested results",
            instructions: null,
            throttle: null,
            xhrSearch: null,
            queryName: "",
            queryProcessor: null,
            dataProcessor: null,
            selectCallback: null,
            typedQuery: "",
            resultLimit: 10,
            queryData: {},
            staticData: [],
            preventSubmit: !1,
            instructionsText: "{{count}} options available. Use up and down arrows to browse available options and enter to select one.",
            showAllOnFocus: !1,
            allowEmptySearch: !1,
            selectNext: function() {
                const t = this.list.querySelector("li[aria-selected=true]");
                let e = null;
                if (null === t) {
                    if (e = this.list.querySelector("li:first-of-type"), null === e) return
                } else {
                    if (e = t.nextElementSibling, null === e) return;
                    t.setAttribute("aria-selected", !1)
                }
                e.setAttribute("aria-selected", !0), this.input.value = e.textContent
            },
            selectPrevious: function() {
                const t = this.list.querySelector("li[aria-selected=true]");
                if (null === t) return;
                const e = t.previousElementSibling;
                null === e ? this.input.value = this.typedQuery : (e.setAttribute("aria-selected", !0), this.input.value = e.textContent), t.setAttribute("aria-selected", !1)
            },
            selectByClick: function(t) {
                const e = this.list.querySelector("li[aria-selected=true]");
                null !== e && e.setAttribute("aria-selected", !1), t.setAttribute("aria-selected", !0), this.selectOption(), this.showAllOnFocus || this.input.focus()
            },
            escapeRegExp: function(t) {
                return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            },
            formatOption: function(t) {
                let e = "";
                if (t.display) e = t.display;
                else {
                    const i = new RegExp(`(${this.escapeRegExp(this.typedQuery)})`, "ig");
                    e = t.label.replace(i, "<strong>$1</strong>")
                }
                if (!e) return null;
                const i = document.createElement("li");
                return i.setAttribute("aria-selected", !1), i.setAttribute("role", "option"), Object.keys(t).forEach((e => {
                    "label" !== e && "display" !== e && (i.dataset[e] = t[e])
                })), i.innerHTML = e, i
            },
            displayResults: function(t) {
                if (0 === t.length) return void this.closeList();
                let e = t.map(this.formatOption, this);
                e.length > this.resultLimit && !this.allowEmptySearch && (e = e.slice(0, this.resultLimit)), this.list.innerHTML = "";
                const i = document.createDocumentFragment();
                e.forEach((t => {
                    t && i.appendChild(t)
                })), this.list.appendChild(i), this.updateInstructions(e.length), this.openList()
            },
            isListOpen: function() {
                return !this.list.classList.contains("hidden")
            },
            isOptionSelected: function() {
                return null !== this.list.querySelector("li[aria-selected=true]")
            },
            openList: function() {
                this.list.style.left = `${this.input.offsetLeft}px`, this.list.style.top = `${this.input.offsetTop+this.input.offsetHeight}px`, this.list.style.minWidth = `${this.input.offsetWidth}px`, this.list.classList.remove("hidden"), this.input.setAttribute("aria-expanded", !0)
            },
            closeList: function() {
                this.list.classList.add("hidden"), this.list.innerHTML = "", this.input.setAttribute("aria-expanded", !1), this.updateInstructions(0)
            },
            selectOption: function() {
                const t = this.list.querySelector("li[aria-selected=true]");
                this.input.dataset.oldvalue = this.input.value, this.input.value = t.textContent, null !== this.selectCallback && this.selectCallback(t), this.closeList()
            },
            processData: function(t) {
                return null !== this.dataProcessor ? this.dataProcessor(t) : t
            },
            buildQueryString: function() {
                const t = this.input.value,
                    e = null !== this.queryProcessor ? this.queryProcessor(t) : t,
                    i = new URLSearchParams;
                i.append(this.queryName, e), i.append("limit", this.resultLimit);
                return Object.keys(this.queryData).forEach((function(t) {
                    const e = this.queryData[t];
                    "function" != typeof e ? i.append(t, e) : i.append(t, e())
                }), this), `?${i.toString()}`
            },
            xhrOnLoad: function() {
                if (this.xhrSearch.status >= 200 && this.xhrSearch.status < 400) {
                    const t = JSON.parse(this.xhrSearch.responseText),
                        e = this.processData(t);
                    this.displayResults(e)
                } else console.log(this.xhrSearch.statusText)
            },
            xhrOnError: function() {
                console.log(this.xhrSearch.statusText)
            },
            makeRequest: function() {
                const t = this.buildQueryString();
                this.xhrSearch = new XMLHttpRequest, this.xhrSearch.open("GET", this.queryUrl + t, !0), this.xhrSearch.setRequestHeader("Accept", "application/json"), this.xhrSearch.onload = this.xhrOnLoad.bind(this), this.xhrSearch.onerror = this.xhrOnError.bind(this), this.xhrSearch.send()
            },
            searchData: function() {
                const t = this.input.value;
                if ("" === t && !this.allowEmptySearch) return void this.closeList();
                let e = null !== this.queryProcessor ? this.queryProcessor(t) : t;
                if (e = e.toLowerCase(), "" === e) return void this.displayResults(this.staticData);
                const i = this.staticData.filter((t => -1 !== t.label.toLowerCase().indexOf(e)));
                this.displayResults(i)
            },
            getExactMatch: function() {
                const t = this.input.value.trim().toLowerCase();
                if ("" === t) return null;
                const e = this.staticData.find((e => e.label.toLowerCase() === t));
                return e || null
            },
            query: function() {
                this.staticData.length > 0 ? this.searchData() : (this.throttle && clearTimeout(this.throttle), this.xhrSearch && this.xhrSearch.abort(), "" !== this.input.value || this.allowEmptySearch ? this.throttle = setTimeout(this.makeRequest.bind(this), 500) : this.closeList())
            },
            disable: function() {
                this.list.parentNode.removeChild(this.list)
            },
            createList: function() {
                this.list = document.createElement("ul"), this.list.id = this.getListId(), this.list.setAttribute("role", "listbox"), this.list.setAttribute("aria-label", this.listLabel), this.list.classList.add("s-ui-autocomplete-list"), this.list.classList.add("hidden"), this.input.parentNode.insertBefore(this.list, this.input.nextSibling)
            },
            getListId: function() {
                return `${this.input.id}_list`
            },
            getInstructionsId: function() {
                return `${this.input.id}_instructions`
            },
            formatInput: function() {
                this.input.setAttribute("role", "combobox"), this.input.setAttribute("aria-autocomplete", "list"), this.input.setAttribute("aria-expanded", "false"), this.input.setAttribute("aria-controls", this.getListId()), this.input.setAttribute("aria-describedby", this.getInstructionsId()), this.input.setAttribute("autocomplete", "off"), this.queryName = this.input.getAttribute("name")
            },
            updateInstructions: function(t) {
                this.instructions.innerHTML = this.instructionsText.replace("{{count}}", t)
            },
            handleTypingDown: function(t) {
                const e = this.isListOpen();
                switch (t.key) {
                    case "Escape":
                        e && this.closeList();
                        break;
                    case "ArrowDown":
                        e ? (t.preventDefault(), this.selectNext()) : this.showAllOnFocus && "" === this.input.value && this.query();
                        break;
                    case "ArrowUp":
                        e && (t.preventDefault(), this.selectPrevious());
                        break;
                    case "Enter":
                        e && this.isOptionSelected() ? (t.preventDefault(), this.selectOption()) : this.preventSubmit && t.preventDefault();
                        break;
                    case "Tab":
                        e && this.isOptionSelected() ? this.selectOption() : e && this.closeList()
                }
            },
            handleTypingUp: function(t) {
                switch (t.key) {
                    case "Escape":
                    case "ArrowDown":
                    case "ArrowUp":
                    case "ArrowLeft":
                    case "ArrowRight":
                    case "Enter":
                    case "Tab":
                        break;
                    default:
                        this.typedQuery = this.input.value, this.query()
                }
            },
            handleClick: function(t) {
                const e = t.target.closest("li[aria-selected=false]");
                null !== e && this.selectByClick(e)
            },
            handleOutsideClick: function(t) {
                const e = t.target;
                null !== e.closest(`#${this.list.id}`) || null !== e.closest(`#${this.input.id}`) || this.closeList()
            },
            attachEvents: function() {
                this.input.addEventListener("keydown", this.handleTypingDown.bind(this)), this.input.addEventListener("keyup", this.handleTypingUp.bind(this)), this.list.addEventListener("click", this.handleClick.bind(this)), document.body.addEventListener("click", this.handleOutsideClick.bind(this)), this.showAllOnFocus && this.input.addEventListener("focus", (() => {
                    "" === this.input.value && this.query()
                }))
            },
            addInstructions: function() {
                this.instructions = document.createElement("div"), this.instructions.id = this.getInstructionsId(), this.instructions.setAttribute("aria-live", "polite"), this.instructions.classList.add("sr-only"), this.instructions.innerHTML = this.instructionsText.replace("{{count}}", 0), this.list.parentNode.insertBefore(this.instructions, this.list.nextSibling)
            },
            validateConfig: function(t) {
                if (!t.inputSelector) throw new Error("Must set inputSelector.");
                if (null === this.input) throw new Error(`${t.inputSelector} not found in the DOM.`);
                if (!this.queryUrl && 0 === this.staticData.length) throw new Error("Must set queryUrl or staticData.")
            },
            setConfig: function(t) {
                this.input = document.querySelector(t.inputSelector);
                const e = ["queryUrl", "staticData", "queryProcessor", "dataProcessor", "selectCallback", "resultLimit", "queryData", "instructionsText", "preventSubmit", "listLabel", "showAllOnFocus", "allowEmptySearch"];
                Object.keys(t).forEach((function(i) {
                    -1 !== e.indexOf(i) && (this[i] = t[i])
                }), this), this.showAllOnFocus && (this.allowEmptySearch = !0)
            },
            init: function(t) {
                this.setConfig(t), this.validateConfig(t), this.formatInput(), this.createList(), this.addInstructions(), this.attachEvents()
            }
        },
        i = function(t) {
            const i = Object.create(e);
            return i.init(t), i
        };
    "undefined" != typeof module ? module.exports = e : (t.springSpace = t.springSpace || {}, t.springSpace.sui = t.springSpace.sui || {}, t.springSpace.sui.initAutocomplete = t.springSpace.sui.initAutocomplete || i)
}(this);
{
    class t {
        #t = null;
        #e = "s-ui-notifyarea";
        #i = "s-ui-notify";
        #n = "s-ui-notify";
        #s = {
            msg: '<i class="fa fa-spinner fa-pulse mg-right" aria-hidden="true"></i> <span>Working...</span>',
            className: "s-ui-notify-working"
        };
        #a = {
            msg: "Success.",
            className: "s-ui-notify-success"
        };
        #r = {
            msg: "Error: Please try again.",
            className: "s-ui-notify-error"
        };
        #o = 0;
        #l = null;
        constructor({
            parent_id: t = null
        }) {
            t && (this.#e = t)
        }
        #c() {
            let t = document.getElementById(this.#e);
            return t || (t = document.createElement("DIV"), t.id = this.#e, t.setAttribute("role", "alert"), t.setAttribute("aria-atomic", "true"), document.body.appendChild(t)), t
        }
        #d() {
            return this.#t || (this.#t = this.#c()), this.#t
        }
        error(t = "", e = null) {
            const i = {
                ...this.#r
            };
            t && (i.msg = t), i.msg = `<i class="fa fa-exclamation-triangle mg-right" aria-hidden="true"></i> ${i.msg}`, i.id = e, this.show(i)
        }
        success(t = "", e = null, i = 0) {
            const n = {
                ...this.#a
            };
            t && (n.msg = t), i > 0 && (n.ms = i), n.msg = `<i class="fa fa-check-circle mg-right" aria-hidden="true"></i> ${n.msg}`, n.id = e, this.show(n)
        }
        working(t = "", e = null) {
            const i = {
                ...this.#s
            };
            t && (i.msg = t), i.id = e, this.show(i)
        }
        show({
            msg: t = "",
            className: e = null,
            id: i = null,
            ms: n = 0
        }) {
            if (!t) return null;
            let s = null;
            i ? (s = document.getElementById(i), s && s.remove()) : (this.#o++, i = `${this.#i}-${this.#o}`), s = document.createElement("DIV"), s.id = i, s.classList.add(this.#n), e && s.classList.add(e), s.innerHTML = `<div class="s-ui-notification-message">${t}</div><button class="btn" aria-label="${window?.springyText?.modal?.close||"Close"}">&times;</button>`;
            return this.#d().appendChild(s), s.addEventListener("click", (t => {
                t.preventDefault(), this.hide(t.currentTarget)
            })), n > 0 && setTimeout((() => {
                this.hide(s)
            }), n), null === this.#l && (this.#l = this.keyboardEvents.bind(this), document.addEventListener("keydown", this.#l, !0)), i
        }
        hide(t = null) {
            t ? t.remove() : this.#t && (this.#t.innerHTML = ""), this.#h()
        }
        hideWorking() {
            this.#t && (this.#t.querySelectorAll(`.${this.#s.className}`).forEach((t => {
                t.remove()
            })), this.#h())
        }
        #h() {
            null === this.#l || !this.#t || this.#t.children.length > 0 || (document.removeEventListener("keydown", this.#l, !0), this.#l = null)
        }
        keyboardEvents(t) {
            if ("Escape" !== t.key) return;
            const e = this.#t.querySelector(`.${this.#n}`);
            e && e.remove(), this.#h()
        }
    }
    window.suiNotify = new t({})
}! function(t) {
    var e = function(t) {
        if (void 0 === t && (t = {}), this.setConfig = function(t) {
                this.id = t.id ? t.id : "s-sui-modal", this.title = t.title ? t.title : "", this.content = t.content ? t.content : "", this.url = t.url ? t.url : null, this.fade = !!t.fade, this.callback = t.callback ? t.callback : null, this.closeCallback = t.closeCallback ? t.closeCallback : null, this.footer = !0 === t.footer && t.footer, this.size = t.size ? t.size : "", this.modal_buttons = t.buttons ? t.buttons : [], this.returnfocus = !1 !== t.returnfocus, this.opener = document.activeElement, this.btn_callbacks = {}, this.backdrop = void 0 === t.backdrop || ("static" === t.backdrop ? "static" : !!t.backdrop), this.keyboard = !1 !== t.keyboard;
                var e = void 0 !== t.transText;
                this.transText = {
                    close: e && t.transText.close ? t.transText.close : "Close",
                    error: e && t.transText.error ? t.transText.error : "Error",
                    unknown: e && t.transText.unknown ? t.transText.unknown : "Unknown",
                    invalidResponse: e && t.transText.invalidResponse ? t.transText.invalidResponse : "Invalid response received",
                    toggle: e && t.transText.toggle ? t.transText.toggle : "Toggle Dropdown"
                }
            }, this.setConfig(t), this.$el = jQuery("#" + this.id), 0 === jQuery("#" + this.id).length)
            if (this.$el = jQuery('<div class="modal ' + (this.fade ? "fade" : "") + '" tabindex="-1" role="dialog" aria-labelledby="s-sui-modal-header"></div>').attr("id", this.id).html('<div class="modal-dialog"><div class="modal-content"></div></div>'), "s-sui-modal" === this.id) jQuery("body").prepend(this.$el);
            else {
                var e = jQuery("div.modal");
                e.length > 0 ? e.filter(":last").after(this.$el) : jQuery("body").prepend(this.$el)
            }
        "large" === this.size && this.$el.find(".modal-dialog").addClass("modal-lg"), this.retrieveSuccess = function(t) {
            t.title && (this.title = t.title), t.content && (this.content = t.content), t.buttons && (this.modal_buttons = t.buttons), this.footer = !(!t.footer || !0 !== t.footer), this.draw()
        }, this.retrieveFail = function(t) {
            var e = this.transText.unknown;
            if (t.responseText) try {
                var i = JSON.parse(t.responseText);
                i.error && (e = i.error)
            } catch (t) {
                e = this.transText.invalidResponse
            }
            this.content = this.transText.error + ": " + e, this.footer = !0, this.draw()
        }, this.retrieve = function() {
            jQuery.ajax({
                url: this.url,
                cache: !1,
                method: "GET",
                dataType: "json"
            }).done(this.retrieveSuccess.bind(this)).fail(this.retrieveFail.bind(this))
        }, this.handleShowEvent = function() {
            null !== this.callback && this.callback(this)
        }, this.handleHideEvent = function() {
            this.returnfocus && void 0 !== this.opener && null !== this.opener && this.opener.focus(), null !== this.closeCallback && this.closeCallback(this), this.$el.off().removeData("bs.modal").find(".modal-content").html(""), jQuery("#" + this.id + " .modal-dialog").removeClass("modal-lg"), this.callback = null, this.closeCallback = null
        }, this.draw = function() {
            var t = '<div class="modal-content">';
            "" !== this.title && (t += '<div class="modal-header"><button id="s-sui-modal-close" type="button" class="close" data-dismiss="modal" aria-label="&times; ' + this.transText.close + '">&times;</button><h2 class="modal-title" id="s-sui-modal-header">' + this.title + "</h2></div>");
            var e = "";
            "string" == typeof this.content && (e = this.content), t += '<div class="modal-body">' + e + "</div>", (this.footer || this.modal_buttons.length > 0) && (this.btn_callbacks = {}, t += '<div class="modal-footer">', 0 === this.modal_buttons.length ? t += '<button type="button" class="btn btn-default" data-dismiss="modal">' + this.transText.close + "</button>" : this.modal_buttons.forEach((function(e, i) {
                e.links && e.links.length > 0 ? (e.gclass = e.gclass ? e.gclass : "", t += '<div class="btn-group ' + e.gclass + '">', e.bclass = e.bclass ? e.bclass : "btn-default", e.label = e.label ? e.label : "", "" !== e.label && (t += '<button type="button" class="btn ' + e.bclass + " btn-modal-" + i + '" >' + e.label + "</button>", e.callback && (this.btn_callbacks["btn-modal-" + i] = e.callback)), t += '<button type="button" class="btn ' + e.bclass + ' dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span><span class="sr-only">' + this.transText.toggle + "</span></button>", t += '<ul class="dropdown-menu">', e.links.forEach((function(e, i) {
                    if (e.label = e.label ? e.label : "", "" !== e.label) {
                        var n = e.url ? e.url : "#";
                        t += '<li><a href="' + n + '" class="link-modal-' + i + '">' + e.label + "</a></li>", e.callback && (this.btn_callbacks["link-modal-" + i] = e.callback)
                    }
                }), this), t += "</ul>", t += "</div>") : (e.bclass = e.bclass ? e.bclass : "btn-default", e.label = e.label ? e.label : "", "" !== e.label && (t += '<button type="button" class="btn ' + e.bclass + " btn-modal-" + i + '" >' + e.label + "</button>", e.callback && (this.btn_callbacks["btn-modal-" + i] = e.callback)))
            }), this), t += "</div>"), t += "</div>";
            var i = jQuery(t);
            if ("string" != typeof this.content && i.find(".modal-body").html(this.content), this.$el.find(".modal-content").replaceWith(i), this.modal_buttons.length > 0)
                for (var n in this.btn_callbacks) this.btn_callbacks.hasOwnProperty(n) && "function" == typeof this.btn_callbacks[n] && this.$el.find("." + n).on("click", {
                    modal: this
                }, this.btn_callbacks[n]);
            this.$el.on("show.bs.modal", this.handleShowEvent.bind(this)), this.$el.modal({
                backdrop: this.backdrop,
                keyboard: this.keyboard
            }, "show"), this.$el.on("hidden.bs.modal", this.handleHideEvent.bind(this))
        }, this.close = function() {
            jQuery("#" + this.id).modal("hide")
        }, this.redraw = function(t) {
            this.$el.unbind("show.bs.modal").unbind("hidden.bs.modal"), this.setConfig(t), null !== this.url ? this.retrieve() : this.draw()
        }, null !== this.url ? this.retrieve() : this.draw()
    };
    "undefined" != typeof module ? module.exports = e : (t.springSpace = t.springSpace || {}, t.springSpace.sui = t.springSpace.sui || {}, t.springSpace.sui.modal = t.springSpace.sui.modal || e)
}(this);
var springSpace = springSpace || {};
springSpace.sui = springSpace.sui || {}, springSpace.sui.helptip = function(t) {
    void 0 === t && (t = {});
    if (this.parent = t.parent ? t.parent : "", this.selector = t.selector ? t.selector : "button.btn-help-popover", "" != this.selector) {
        this.placement = t.placement ? t.placement : "bottom", -1 == ["bottom", "top", "right", "left"].indexOf(this.placement) && (this.placement = "bottom"), this.$el = null, "" !== this.parent ? this.$el = jQuery(this.parent + " " + this.selector) : this.$el = jQuery(this.selector), this.ajcontent = {};
        var e = this;
        this.$el.popover({
            placement: this.placement,
            html: !0,
            content: function() {
                var t = $(this).attr("data-ajload");
                if (t) {
                    if (void 0 === $(this).attr("data-loaded")) {
                        $(this).attr("data-loaded", "true");
                        return jQuery.ajax({
                            url: t,
                            type: "get",
                            dataType: "json",
                            async: !1,
                            success: function(i) {
                                i.data && i.data.content ? e.ajcontent[t] = i.data.content : i.content && (e.ajcontent[t] = i.content)
                            }
                        }).fail((function() {
                            e.ajcontent[t] = "Sorry, an error occurred."
                        })), e.ajcontent[t]
                    }
                    return e.ajcontent[t]
                }
                var i = $(this).attr("data-popover-text") ? "<p>" + $(this).attr("data-popover-text") + "</p>" : $("#" + $(this).attr("data-popover-id")).html();
                return i += '<button type="button" class="btn btn-xs btn-link btn-close pull-right">close</button>'
            },
            title: function() {
                var t = $(this).attr("data-title");
                return t ? t += '<button type="button" class="btn btn-link btn-close pull-right" aria-label="Close"><i class="fa fa-close"></i></button>' : ""
            }
        }).on("shown.bs.popover", (function(t) {
            var e = jQuery(this);
            jQuery(this).attr("aria-pressed", !0).parent().find("div.popover button.btn-close").on("click keydown", (function(t) {
                ("click" === t.type || "keydown" === t.type && 27 === t.which) && e.popover("hide")
            })).attr("aria-controls", e.parent().find("div.popover").attr("id"))
        })).on("hidden.bs.popover", (function(t) {
            void 0 !== $(t.target).data("bs.popover").inState && ($(t.target).data("bs.popover").inState.click = !1), jQuery(this).attr("aria-pressed", !1)
        })).on("keydown.dismiss.bs.popover", (function(t) {
            27 == t.which && jQuery(this).popover("hide")
        }))
    }
};
var springSpace = springSpace || {};
springSpace.sui = springSpace.sui || {}, springSpace.sui.filedrop = function(t) {
    if (void 0 === t) return !1;
    if (!t.selector || "" === t.selector) return !1;
    var e;
    if (this.callback = t.callback ? t.callback : function() {}, this.error_callback = t.error_callback ? t.error_callback : function() {}, this.validate = t.validate ? t.validate : function() {
            return !0
        }, this.max_files = t.max_files ? parseInt(t.max_files, 10) : 0, this.max_upload_size = t.max_upload_size ? parseInt(t.max_upload_size, 10) : 0, this.max_file_size = t.max_file_size ? parseInt(t.max_file_size, 10) : 0, this.batch_files = void 0 !== t.batch_files && !!t.batch_files, this.autoupload = void 0 === t.autoupload || !!t.autoupload, this.translations = t.translations ? t.translations : {
            max_file_size: "Maximum file size"
        }, this.allowedMimeTypes = t.allowedMimeTypes ? t.allowedMimeTypes : [], this.isAdvancedUpload = ("draggable" in (e = document.createElement("div")) || "ondragstart" in e && "ondrop" in e) && "FormData" in window && "FileReader" in window, this.$form = jQuery(t.selector), 0 === this.$form.length) return !1;
    this.$droparea = this.$form.find(".s-ui-filedrop"), this.droppedFiles = [], this.batchedFiles = [], this.batch = {
        current: 0,
        total: 0
    };
    var i = this;
    if (this.$input = this.$droparea.find('input[type="file"]'), this.$label = this.$droparea.find("label"), this.$submitbutton = this.$form.find('button[type="submit"]'), this.$progress = null, this.showFiles = function() {
            if (0 !== this.$input.length) {
                var t = this.$droparea[0].querySelector(".s-ui-filedrop-filenames"),
                    e = t.querySelector("ul");
                if (this.isAdvancedUpload) {
                    var n = [],
                        s = 0;
                    this.droppedFiles.forEach((function(t) {
                        var e = document.createElement("li");
                        e.innerText = t.name, n.push(e), s += t.size
                    })), e.innerHTML = "", 0 === n.length ? t.classList.add("hidden") : (t.classList.remove("hidden"), n.forEach((function(t) {
                        e.appendChild(t)
                    }))), this.max_files > 0 && n.length > this.max_files && this.showError(i.max_files + " file uploads maximum."), !1 === this.batch_files && this.max_upload_size > 0 && s > this.max_upload_size && this.showError("Files total " + i.bytesToMB(s) + " MB which exceeds the maximum of " + i.bytesToMB(this.max_upload_size) + " MB at a time.")
                } else {
                    if ("" === this.$input.val()) return t.classList.add("hidden"), void(e.innerHTML = "");
                    t.classList.remove("hidden");
                    var a = document.createElement("li");
                    a.innerText = this.$input.val().split("\\").slice(-1).pop(), e.appendChild(a), this.$label.find(".filetext").addClass("hidden")
                }
            }
        }, this.reset = function() {
            i.$form[0].reset(), i.removeError(), i.droppedFiles = [], i.batch.current = 0, i.batch.total = 0, i.stopProgress(), i.showFiles(), i.$input.removeClass("has-focus")
        }, this.clearFiles = function() {
            i.resetFileInput(), i.droppedFiles = [], i.batch.current = 0, i.batch.total = 0, i.showFiles()
        }, this.resetFileInput = function() {
            if (0 !== this.$input.length) {
                var t = jQuery("<form>"),
                    e = this.$input.clone(!0).appendTo(t);
                t[0].reset(), this.$input.replaceWith(e), this.$input = e
            }
        }, this.showError = function(t) {
            if (0 !== this.$droparea.length) {
                var e = document.createElement("p");
                if (e.innerText = t, this.$form.find("div.s-ui-filedrop-error").length > 0) this.$form.find("div.s-ui-filedrop-error").append(e);
                else {
                    var i = document.createElement("div");
                    i.classList.add("alert"), i.classList.add("alert-danger"), i.classList.add("s-ui-filedrop-error"), i.setAttribute("role", "alert"), i.appendChild(e), this.$droparea.prepend(i)
                }
            }
        }, this.removeError = function() {
            this.$form.find("div.s-ui-filedrop-error").empty()
        }, this.countFiles = function() {
            return 0 === this.$input.length ? 0 : this.isAdvancedUpload ? this.droppedFiles.length : "" !== this.$input.val() ? 1 : 0
        }, this.startProgress = function() {
            if (null === this.$progress || 1 === this.$progress.length && "" === this.$progress.html()) {
                var t = !0;
                this.$progress = this.$form.find("div.s-ui-filedrop-progress"), 0 === this.$progress.length && (t = !1, this.$progress = jQuery("<div></div>").addClass("s-ui-filedrop-progress"));
                var e = jQuery("<div></div>").attr({
                        id: "s-ui-filedrop-progresslabel"
                    }).text("Uploading files"),
                    i = jQuery("<div></div>").addClass("s-ui-filedrop-progbar").attr({
                        role: "progressbar",
                        "aria-valuenow": "0",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-labelledby": "s-ui-filedrop-progresslabel"
                    });
                i.append(document.createElement("span")), this.$progress.append([e, i]), t || this.$droparea.prepend(this.$progress)
            }
        }, this.updateProgress = function(t, e) {
            var i = Math.round(t / e * 100);
            (this.$progress.find("span:first").css("width", i + "%"), this.$progress.find(".s-ui-filedrop-progbar").attr("aria-valuenow", i), this.batch.total > 1 && i < 50) && this.$progress.find("div:first").html("Uploading file batch (" + this.batch.current + "/" + this.batch.total + ")")
        }, this.stopProgress = function() {
            null !== this.$progress && this.$progress.empty()
        }, this.bytesToMB = function(t) {
            return (parseInt(t, 10) / 1048576).toFixed(1)
        }, this.addFiles = function(t) {
            if (i.max_files > 0 && i.countFiles() + t.length > i.max_files) return i.showError(i.max_files + " file uploads maximum."), !1;
            var e = 0;
            i.droppedFiles.forEach((function(t) {
                e += t.size
            }));
            for (var n = [], s = 0; s < t.length; s++) {
                var a = t[s];
                if (i.droppedFiles.length > 0) {
                    var r = !1;
                    if (i.droppedFiles.forEach((function(t) {
                            t.name === a.name && (r = !0)
                        })), r) {
                        n.push(s);
                        continue
                    }
                }
                this.allowedMimeTypes.length > 0 && -1 === this.allowedMimeTypes.indexOf(a.type) ? (i.showError("File: " + a.name + " is not an allowed file type."), n.push(s)) : i.max_file_size > 0 && a.size > i.max_file_size ? (i.showError("File: " + a.name + " is greater than allowed file size of " + i.bytesToMB(i.max_file_size) + " MB."), n.push(s)) : !1 === i.batch_files && e + a.size > i.max_upload_size ? (i.showError("File: " + a.name + " causes files to go over maximum upload size of " + i.bytesToMB(i.max_upload_size) + " MB at a time."), n.push(s)) : e += a.size
            }
            if (!1 === i.batch_files && i.max_upload_size > 0 && e > i.max_upload_size) return i.showError("Files total " + e + " bytes which exceeds the maximum of " + i.bytesToMB(i.max_upload_size) + " MB at a time."), !1;
            for (var o = 0; o < t.length; o++) - 1 === n.indexOf(o) && i.droppedFiles.push(t[o]);
            return 0 !== i.droppedFiles.length
        }, this.batchFiles = function() {
            var t = [],
                e = [];
            if (!this.batch_files) return t.push(this.droppedFiles), t;
            var n = 1;
            return t.push([]), e.push(0), this.droppedFiles.forEach((function(s) {
                var a = !1;
                if (e.forEach((function(n, r) {
                        !a && n + s.size < i.max_upload_size && (e[r] = n + s.size, t[r].push(s), a = !0)
                    })), !a) {
                    e.push(0), n++, t.push([]);
                    var r = n - 1;
                    e[r] = s.size, t[r].push(s)
                }
            })), t
        }, this.isLastBatch = function() {
            return this.batch.current >= this.batch.total
        }, this.ajaxUpload = function() {
            i.$form.find('input[name="batch_current"]').val(i.batch.current);
            var t = new FormData(i.$form[0]);
            "function" == typeof t.delete && t.delete(i.$input.attr("name")), i.batchedFiles[i.batch.current - 1].forEach((function(e) {
                t.append(i.$input.attr("name"), e)
            })), jQuery.ajax({
                url: i.$form.attr("action"),
                type: i.$form.attr("method"),
                data: t,
                dataType: "json",
                cache: !1,
                crossDomain: !0,
                contentType: !1,
                processData: !1,
                beforeSend: function() {
                    i.countFiles() > 0 && i.startProgress()
                },
                complete: function() {
                    i.isLastBatch() ? (i.$form.removeClass("is-uploading"), i.$submitbutton.prop("disabled", !1), i.stopProgress()) : (i.batch.current++, i.ajaxUpload())
                },
                success: function(t) {
                    i.callback(t, i)
                },
                xhr: function() {
                    var t = jQuery.ajaxSettings.xhr();
                    return i.countFiles() > 0 && (t.upload.onprogress = function(t) {
                        i.updateProgress(t.loaded, t.total)
                    }), t
                }
            }).fail((function(t) {
                i.error_callback(t, i)
            }))
        }, this.isAdvancedUpload && this.$input.length > 0) {
        if (this.$droparea.addClass("has-advanced-upload"), this.batch_files) {
            var n = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_current"
                }).val("0"),
                s = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_total"
                }).val("0");
            this.$form.prepend([n, s])
        }
        this.$droparea.on("drag dragstart dragend dragover dragenter dragleave drop", (function(t) {
            t.preventDefault(), t.stopPropagation()
        })).on("dragover dragenter", (function() {
            i.$droparea.addClass("is-dragover")
        })).on("dragleave dragend drop", (function() {
            i.$droparea.removeClass("is-dragover")
        })).on("drop", (function(t) {
            var e = i.addFiles(t.originalEvent.dataTransfer.files);
            i.showFiles(), !0 === e && i.autoupload && i.$form.submit()
        })).on("click", (function(t) {
            var e = t.target.tagName; - 1 !== ["A", "I", "SPAN", "B", "STRONG", "BUTTON"].indexOf(e) && (jQuery(t.target).closest("a, button").hasClass("s-ui-filedrop-clear") && (i.clearFiles(), i.removeError()))
        }))
    }
    if (this.isAdvancedUpload || (this.$input.remove(), this.$droparea.remove()), this.$input.length > 0 && (this.$input.on("change", (function(t) {
            if (t.target.files) {
                if (i.isAdvancedUpload) {
                    var e = i.addFiles(t.target.files);
                    i.resetFileInput(), !0 === e && i.autoupload && i.$form.submit()
                }
                i.$input.removeClass("has-focus"), i.showFiles()
            }
        })).on("focus", (function(t) {
            t.target.classList.add("has-focus")
        })).on("blur", (function(t) {
            t.target.classList.remove("has-focus")
        })), this.translations.max_file_size)) {
        var a = document.createElement("p");
        a.innerHTML = this.translations.max_file_size + ": " + this.bytesToMB(this.max_file_size) + " MB", this.$label.append(a)
    }
    this.$form.on("submit", (function(t) {
        if (i.$form.hasClass("is-uploading")) t.preventDefault();
        else {
            if (i.$form.removeClass("is-error"), i.removeError(), i.max_files > 0 && i.countFiles() > i.max_files) return i.showError(i.max_files + " file uploads maximum."), void t.preventDefault();
            if (!1 === i.validate(i)) return i.$form.addClass("is-error"), void t.preventDefault();
            i.$form.addClass("is-uploading"), i.$submitbutton.prop("disabled", !0), i.isAdvancedUpload ? (t.preventDefault(), i.batch.current = 1, i.batchedFiles = i.batchFiles(), i.batch.total = i.batchedFiles.length, i.$form.find('input[name="batch_total"]').val(i.batch.total), i.ajaxUpload()) : (t.preventDefault(), jQuery.ajax({
                url: i.$form.attr("action"),
                type: i.$form.attr("method"),
                data: i.$form.serialize(),
                dataType: "json",
                complete: function() {
                    i.$form.removeClass("is-uploading"), i.$submitbutton.prop("disabled", !1)
                },
                success: function(t) {
                    i.callback(t, i)
                }
            }).fail((function(t) {
                i.error_callback(t, i)
            })))
        }
    }))
};
var springSpace = springSpace || {};
springSpace.cookieConsent = springSpace.cookieConsent || {}, springSpace.cookieConsent.alert = function(t) {
    this.setConfig = function(t) {
        void 0 === t && (t = {});
        var e = t.okay ? t.okay : "OK";
        this.placement_opts = ["bottom", "top"], this.placement = -1 !== this.placement_opts.indexOf(t.placement) ? t.placement : "bottom", this.cookie_name = "springy_cookie_consent", this.cookie_notice_accepted = "ok", this.cookie_exp_days = t.cookie_exp_days ? t.cookie_exp_days : 180, this.read_more_callback = t.read_more_callback ? t.read_more_callback : function() {}, this.aria_label = t.aria_label || "User Privacy Alert", this.fade_in = 500, this.fade_out = 200, this.container_id = "s-ui-cc-container", this.close_button_id = "s-ui-cc-close-btn", this.read_more_elt_id = "s-ui-cc-read-more-link", this.consent_message = t.consent_message ? t.consent_message : "By using our website you are consenting to our use of cookies in accordance with our cookie policy.", this.content = '<div id="' + this.container_id + '" class="container" style="display: none;">    <aside class="navbar navbar-default navbar-fixed-' + this.placement + " fixed-" + this.placement + '" id="s-ui-cc-navbar" aria-label="' + this.aria_label + '">        <div id="s-ui-cc-main" class="container">            <div class="navbar-inner navbar-content-center" id="s-ui-cc-msg-container">                <div id="s-ui-cc-msg">' + this.consent_message + '<button id="' + this.close_button_id + '" type="button" class="btn btn-sm btn-default btn-light" data-dismiss="alert" aria-label="Close">' + e + "</button></div>            </div>        </div>    </aside></div>"
    }, this.consentCookieAccepted = function() {
        return this.getCookie(this.cookie_name) === this.cookie_notice_accepted
    }, this.setCookie = function(t, e, i) {
        var n = new Date;
        n.setDate(n.getDate() + i);
        var s = encodeURI(e) + (null === i ? "" : "; expires=" + n.toUTCString()),
            a = "https:" === location.protocol ? "; secure" : "";
        document.cookie = t + "=" + s + "; path=/; samesite=lax;" + a, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(t) {
        var e, i, n, s = document.cookie.split(";");
        for (e = 0; e < s.length; e++)
            if (i = s[e].indexOf("="), s[e].substr(0, i).replace(/^\s+|\s+$/g, "") === t) return n = s[e].substr(i + 1), decodeURI(n);
        return null
    }, this.handleClose = function() {
        this.setCookie(this.cookie_name, this.cookie_notice_accepted, this.cookie_exp_days), jQuery("#" + this.container_id).fadeOut(this.fade_out)
    }, this.handleAlert = function() {
        this.consentCookieAccepted() || (jQuery("body").prepend(this.content), jQuery("#" + this.container_id).fadeIn(this.fade_in), jQuery("#" + this.close_button_id).on("click", this.handleClose.bind(this)), jQuery("#" + this.read_more_elt_id).attr("href", "#"), jQuery("#" + this.read_more_elt_id).on("click", this.read_more_callback.bind(this)))
    }, this.setConfig(t), jQuery(document).ready(this.handleAlert.bind(this))
};
var springSpace = springSpace || {};

function closeModal(t) {
    var e = null;
    void 0 === t ? jQuery(".modal").each((function(t, i) {
        "none" !== jQuery(i).css("display") && (e = jQuery(i))
    })) : e = jQuery("#" + t), null !== e && e.modal("hide").removeData("bs.modal").find(".modal-content").html("")
}

function disableButton(t) {
    t && (-1 === ["#", "."].indexOf(t.charAt(0)) && (t = "#" + t), jQuery(t).prop("disabled", !0))
}

function enableButton(t) {
    t && (-1 === ["#", "."].indexOf(t.charAt(0)) && (t = "#" + t), jQuery(t).prop("disabled", !1))
}
springSpace.la = springSpace.la || {}, springSpace.util = {}, springSpace.ui = {}, springSpace.util._construct = function() {
    function t() {}
    t.prototype.stringFormat = function(t, e) {
        return t.replace(/%(\d+)/g, (function(t, i) {
            return e[--i]
        }))
    }, t.prototype.selectText = function(t) {
        var e, i, n = t;
        document.body.createTextRange ? ((e = document.body.createTextRange()).moveToElementText(n), e.select()) : window.getSelection && (i = window.getSelection(), (e = document.createRange()).selectNodeContents(n), i.removeAllRanges(), i.addRange(e))
    }, t.prototype.rePopForm = function(t, e) {
        t = t.replace(/^\?/, "");
        for (var i = (t = decodeURIComponent(t)).split("&"), n = jQuery("#" + e), s = 0; s < i.length; s++) {
            var a = decodeURIComponent(i[s]).split("="),
                r = a[0],
                o = a[1];
            if (void 0 !== o)
                if (o = o.replace(/\+/g, " "), r.match(/\[.*?\]/)) {
                    var l = r.replace(/\[.*?\]/, "[]"),
                        c = n.find('select[name="' + l + '"]');
                    void 0 === c.data("multiselect") ? c.find("option[value=" + o + "]").prop("selected", !0) : c.multiselect("select", o)
                } else {
                    var d = n.find('*[name="' + r + '"]');
                    void 0 === d.data("multiselect") ? d.val(o) : d.multiselect("select", o)
                }
        }
    }, this.Util = t
}, springSpace.util._construct(), springSpace.Util = new springSpace.util.Util;
var errorAlert = function(t = "") {
        window.suiNotify.hideWorking(), window.suiNotify.error(t)
    },
    successAlert = function(t = "", e = 0) {
        window.suiNotify.hideWorking(), "" === t && (e = 5e3), window.suiNotify.success(t, null, e)
    },
    workingAlert = function(t = "") {
        window.suiNotify.working(t)
    },
    stopAlert = function() {
        window.suiNotify.hideWorking()
    },
    jqGetAjaxError = function(t) {
        let e = "";
        if (t.responseText) try {
            const i = JSON.parse(t.responseText);
            i.error && (e = i.error)
        } catch (t) {
            e = "Invalid response received"
        }
        return e
    },
    jqAjaxFailCallback = function(t) {
        const e = jqGetAjaxError(t);
        errorAlert(e)
    },
    createDismissableErrorAlert = function(t = "", e = "") {
        return t || (t = "Error"), createDismissableAlert(t, "danger", e)
    },
    createDismissableSuccessAlert = function(t = "", e = "") {
        return t || (t = "Success"), createDismissableAlert(t, "success", e)
    },
    createDismissableJQAjaxFailAlert = function(t) {
        const e = jqGetAjaxError(t);
        return createDismissableErrorAlert(e)
    },
    createDismissableAlert = function(t, e, i = "") {
        var n = document.createElement("div");
        "" !== i && (n.id = i), n.classList.add("alert", "alert-" + e, "alert-dismissable", "mg-top"), n.setAttribute("role", "alert"), n.setAttribute("aria-atomic", "true");
        var s = document.createElement("button");
        return s.type = "button", s.classList.add("close"), s.setAttribute("aria-label", "close"), s.setAttribute("data-dismiss", "alert"), s.innerHTML = '<span aria-hidden="true">&times;</span>', n.appendChild(s), n.insertAdjacentHTML("beforeend", t), n
    },
    enableMultiSelect = function(t, e) {
        if (0 !== t.length) {
            var i = {};
            springyText && springyText.bsMultiselect && Object.keys(springyText.bsMultiselect).forEach((function(t) {
                i[t] = springyText.bsMultiselect[t]
            })), Object.keys(e).forEach((function(t) {
                i[t] = e[t]
            })), t.multiselect(i)
        }
    };
const resetMultiSelect = function(t, e) {
    const i = jQuery(t);
    i.multiselect("deselectAll"), i.multiselect("select", e), i.multiselect("refresh")
};
var springSpace = springSpace || {};
springSpace.regex = {
        email: /^<?(['a-zA-Z0-9_=\.\-\+&!#\$%\*\?\^\|\{\}\~])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+>?$/i,
        url: /^((mailto|https?):)*\/\/.+/i,
        phone: /^\+?[0-9]{10,}$/,
        date: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        datetime: /^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?$/,
        color: /^#([a-f0-9A-F]{6}|[a-f0-9A-F]{3})$/
    },
    function(t) {
        t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
        t.springSpace.la.FormAutoReply = class {
            constructor({
                type: t = 0,
                start: e = null,
                end: i = null,
                offhours: n = null,
                captchaAlwaysOn: s = !1,
                libauth_enabled: a = !1
            }) {
                this.type = t, this.start = e, this.end = i, this.offhours = n, this.captchaAlwaysOn = s, this.libauth_enabled = a
            }
            isCaptchaEnabled() {
                return !this.libauth_enabled && (!!this.captchaAlwaysOn || this.isAutoReplyEnabled())
            }
            isAutoReplyEnabled() {
                return 0 !== this.type && (1 === this.type || (3 === this.type ? this._isBetweenDates() : 2 === this.type && this._isNowOffHours()))
            }
            getAutoReplyType() {
                return this.type
            }
            _isBetweenDates() {
                if (!this.end || !this.start) return !1;
                const t = Math.floor(Date.now() / 1e3);
                return t >= this.start && t <= this.end
            }
            _isNowOffHours() {
                return !0
            }
        }
    }(window),
    function(t) {
        t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
        const e = Object.freeze({
            RULE_OPERATOR_EQUALS: 0,
            RULE_OPERATOR_NOTEQUALS: 1,
            RULE_OPERATOR_INCLUDES: 2,
            RULE_OPERATOR_INCLUDES_ALL: 3,
            RULE_ACTION_SHOW: 0,
            RULE_ACTION_HIDE: 1,
            RULE_ACTION_NONE: -1
        });
        t.springSpace.la.FormFieldRule = class {
            constructor({
                field1: t = 0,
                operator: i = e.RULE_OPERATOR_EQUALS,
                value: n = [],
                field2: s = 0,
                action: a = e.RULE_ACTION_SHOW
            }) {
                this.field1 = t, this.operator = i, this.value = Array.isArray(n) ? n : [], this.field2 = s, this.action = a
            }
            get oppositeAction() {
                return this.action === e.RULE_ACTION_SHOW ? e.RULE_ACTION_HIDE : e.RULE_ACTION_SHOW
            }
            getFieldAction(t) {
                if (0 === t || 0 === t.length) return e.RULE_ACTION_HIDE;
                switch (this.operator) {
                    case e.RULE_OPERATOR_EQUALS:
                        return this.value.includes(t) ? this.action : this.oppositeAction;
                    case e.RULE_OPERATOR_NOTEQUALS:
                        return this.value.includes(t) ? this.oppositeAction : this.action;
                    case e.RULE_OPERATOR_INCLUDES:
                        return Array.isArray(t) ? t.filter((t => this.value.includes(t))).length > 0 ? this.action : this.oppositeAction : e.RULE_ACTION_NONE;
                    case e.RULE_OPERATOR_INCLUDES_ALL:
                        return Array.isArray(t) ? t.filter((t => this.value.includes(t))).length === this.value.length ? this.action : this.oppositeAction : e.RULE_ACTION_NONE
                }
                return e.RULE_ACTION_NONE
            }
        }
    }(window),
    //!Idea Form
    springSpace.la.ideaform = function(t) {
        this.$form = jQuery("#ideaform"), this.errormsg = t.errormsg;
        var e = this;
        this.$form.on("submit", (function(t) {
            t.preventDefault(), e.$form.find("label .error-message").remove(), e.$form.find(".form-group").removeClass("has-error"), e.$form.find(".form-control").attr("aria-invalid", !1);
            var i = e.$form.find("input[name=title]");
            "" == i.val() && e.markError(i, e.errormsg.reqfields);
            var n = e.$form.find("textarea[name=body]");
            "" == n.val() && e.markError(n, e.errormsg.reqfields);
            var s = e.$form.find("input[name=email]");
            if (s.val().trim().match(springSpace.regex.email) || e.markError(s, e.errormsg.emailaddress), e.$form.find(".has-error").length > 0) return errorAlert(), e.$form.find("*[aria-invalid=true]:first").focus(), !1;
            jQuery.ajax({
                url: e.$form.attr("action"),
                method: e.$form.attr("method"),
                data: e.$form.serialize()
            }).done((function() {
                successAlert()
            })).fail(jqAjaxFailCallback).always((function() {
                closeModal()
            }))
        })), this.markError = function(t, e) {
            var i = jQuery('<div class="error-message"></div>').html(e);
            t.attr("aria-invalid", !0).parent().addClass("has-error").find("label").append(i)
        }
    }
    //!Idea Comment Form
    , springSpace.la.ideacommentform = function(t) {
        this.$form = jQuery("#ideacommentform"), this.errormsg = t.errormsg;
        var e = this;
        this.$form.on("submit", (function(t) {
            t.preventDefault(), e.$form.find("label .error-message").remove(), e.$form.find(".form-group").removeClass("has-error"), e.$form.find(".form-control").attr("aria-invalid", !1);
            var i = e.$form.find("input[name=email]");
            if (jQuery.trim(i.val()).match(springSpace.regex.email) || e.markError(i, e.errormsg.emailaddress), e.$form.find(".has-error").length > 0) return errorAlert(), e.$form.find("*[aria-invalid=true]:first").focus(), !1;
            jQuery.ajax({
                url: e.$form.attr("action"),
                data: e.$form.serialize(),
                method: e.$form.attr("method")
            }).done((function(t) {
                if (successAlert(), 1 == t.upvote) {
                    var e = jQuery("#product_idea_" + t.idea_id + " .s-la-idea-upvotes"),
                        i = parseInt(e.text(), 10) + 1;
                    e.text(i)
                } else if (1 == t.downvote) {
                    e = jQuery("#product_idea_" + t.idea_id + " .s-la-idea-downvotes"), i = parseInt(e.text(), 10) + 1;
                    e.text(i)
                }
                closeModal()
            })).fail(jqAjaxFailCallback)
        })), this.markError = function(t, e) {
            var i = jQuery('<div class="error-message"></div>').html(e);
            t.attr("aria-invalid", !0).parent().addClass("has-error").find("label").append(i)
        }, this.$form.find(".btn-cancel").on("click", (function(t) {
            closeModal()
        }))
    };
const faqHit = function(t, e, i) {
        jQuery.ajax({
            method: "POST",
            url: `/faq/${t}/view`,
            data: {
                type: i
            },
            dataType: "json"
        })
    },
    faqVote = function(t, e) {
        t && jQuery.ajax({
            method: "POST",
            url: `/faq/${t}/vote`,
            data: {
                v: e
            },
            dataType: "json"
        }).done((t => {
            if (!t.success) return;
            let e = null;
            1 === t.vote ? (e = jQuery("#s-la-vote-yes-ct"), e.html(parseInt(e.text()) + 1), jQuery("#s-la-vote-yes").addClass("voted")) : 0 === t.vote && (e = jQuery("#s-la-vote-no-ct"), e.html(parseInt(e.text()) + 1), jQuery("s-la-vote-no").addClass("voted")), jQuery("#s-la-vote button").attr("disabled", "true")
        })).fail(jqAjaxFailCallback)
    },
    loadRelatedFAQs = function(t) {
        const e = document.getElementById("s-la-faq-relatedfaqs");
        e && $.ajax({
            method: "GET",
            url: `/faq/${t}/related`,
            dataType: "json"
        }).done((t => {
            t.content && (e.innerHTML = t.content)
        })).fail((() => {}))
    },
    fixMediaZindex = function() {
        document.querySelectorAll(".s-la-faq-media-wrapper iframe").forEach((t => {
            const e = t.getAttribute("src"),
                i = "wmode=transparent"; - 1 !== e.indexOf("?") ? t.setAttribute("src", `${e}&${i}`) : t.setAttribute("src", `${e}?${i}`)
        }))
    },
    faqVoteButtons = function(t) {
        document.querySelectorAll("#s-la-vote-no, #s-la-vote-yes").forEach((e => {
            e.addEventListener("click", (e => {
                e.preventDefault();
                const i = e.currentTarget,
                    n = i.dataset.warn;
                if ("" !== n) return void alert(n);
                const s = parseInt(i.dataset.vote, 10);
                faqVote(t, s)
            }))
        }))
    },
    setUpAnswerPage = function(t, e, i) {
        t <= 0 || (i || faqHit(t, e, 1), loadRelatedFAQs(t), fixMediaZindex(), faqVoteButtons(t))
    },
    setUpPublicPage = function() {
        const t = new URL(window.location);
        t.searchParams.has("token") && (t.searchParams.delete("token"), history.replaceState({}, "", t.toString())), document.body.addEventListener("click", (t => {
            const e = t.target.tagName;
            if (-1 === ["A", "I", "SPAN", "B", "STRONG"].indexOf(e)) return;
            const i = t.target.closest("a");
            if (!i) return;
            let n = null;
            i.classList.contains("imagepreviewlink") ? (t.preventDefault(), n = new springSpace.sui.modal({
                url: i.getAttribute("href"),
                size: "large"
            })) : i.classList.contains("modallink") && (t.preventDefault(), n = new springSpace.sui.modal({
                url: i.getAttribute("href")
            }))
        }))
    },
    getDocHeight = function() {
        return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
    };
(() => {
    "use strict";
    class t extends HTMLElement {
        static get props() {
            return {}
        }
        static get observedAttributes() {
            return Object.keys(this.props).map((t => this.attributeName(t)))
        }
        static attributeName(t) {
            return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase()
        }
        constructor() {
            super(), this.$ = {}, this.attrToProp = {}, this.propToAttr = {}, Object.keys(this.constructor.props).forEach((t => {
                const e = this.constructor.attributeName(t);
                this.attrToProp[e] = t, this.propToAttr[t] = e
            })), this.attachShadow({
                mode: "open"
            }), this._renderPromise = null, this._isConnected = !1, this._triggers = {}, this._props = {}
        }
        connectedCallback() {
            if (this._isConnected) return;
            const t = Object.keys(this.constructor.props).reduce(((t, e) => ({
                ...t,
                [e]: this[e]
            })), {});
            Object.keys(this.constructor.props).forEach((e => {
                const i = this.constructor.props[e],
                    n = this.propToAttr[e];
                let s = this[e];
                if (this.hasAttribute(n)) {
                    if (s = this.getAttribute(n), [Array, Object].includes(i.type)) try {
                        s = JSON.parse(s)
                    } catch (t) {}
                } else void 0 !== t[e] && (s = t[e]);
                Object.defineProperty(this, e, {
                    set: this.setter(e),
                    get: this.getter(e)
                }), this[e] = s
            })), this._isConnected = !0, this._render(!0, !0)
        }
        disconnectedCallback() {
            this._isConnected = !1
        }
        _requestRender() {
            this._renderPromise || (this._renderPromise = Promise.resolve().then((() => {
                this._render()
            })))
        }
        _render(t = !1, e = !1) {
            (t || Object.keys(this._triggers).length) && (this._renderPromise = Promise.resolve().then((() => {
                e && (this.firstRender(this.shadowRoot, this._triggers), this.$ = [...this.shadowRoot.querySelectorAll("[id]")].reduce(((t, e) => ({
                    ...t,
                    [e.id]: e
                })), {}), this.firstRendered(this.shadowRoot, this._triggers)), this.render(this.shadowRoot, this._triggers), this.rendered(this.shadowRoot, this._triggers), this._renderPromise = null, this._triggers = {}
            })))
        }
        forceRender() {
            this._render(!0)
        }
        firstRender() {}
        render() {}
        firstRendered() {}
        rendered() {}
        setter(t) {
            const e = this.propToAttr[t];
            return i => {
                if (this._props[t] === i) return;
                t in this._triggers || (this._triggers[t] = this._props[t]), this._props[t] = i;
                const n = this.constructor.props[t];
                if (this._isConnected && this.constructor.observedAttributes.includes(e)) {
                    let t = i;
                    n.type === Boolean ? (t = t || "" === t, t ? this.setAttribute(e, "") : this.removeAttribute(e)) : ([Array, Object].includes(n.type) && (t = JSON.stringify(t)), this.getAttribute(e) !== t && ([null, void 0].includes(t) ? this.removeAttribute(e) : this.setAttribute(e, t)))
                }
                this._isConnected && this._requestRender()
            }
        }
        getter(t) {
            return () => this._props[t]
        }
        attributeChangedCallback(t, e, i) {
            const n = this.attrToProp[t];
            let s = i;
            switch (this.constructor.props[n].type) {
                case Boolean:
                    s = "" === s;
                    break;
                case Number:
                    s = Number(s);
                    break;
                case Array:
                case Object:
                    try {
                        s = JSON.parse(s)
                    } catch (t) {}
            }
            this[n] !== s && (this[n] = s)
        }
    }
    const e = t;
    const i = class extends e {
        static get props() {
            return {
                date: {
                    type: String
                },
                time: {
                    type: String
                },
                value: {
                    type: Object
                },
                showTime: {
                    type: Boolean
                },
                confirmOnDate: {
                    type: Boolean
                },
                locale: {
                    type: String
                },
                dateStyle: {
                    type: Object
                },
                startYear: {
                    type: Number
                },
                endYear: {
                    type: Number
                },
                startDay: {
                    type: Number
                },
                defaultDate: {
                    type: String
                },
                defaultTime: {
                    type: String
                },
                hasNative: {
                    type: Boolean
                },
                useNative: {
                    type: Boolean
                },
                alignTop: {
                    type: Boolean
                },
                alignRight: {
                    type: Boolean
                }
            }
        }
        constructor() {
            super();
            const t = new Date;
            this.showTime = !1, this.confirmOnDate = !1, this.alignTop = !1, this.alignRight = !1, this.dateStyle = {}, this.startYear = t.getFullYear() - 100, this.endYear = t.getFullYear() + 5, this.startDay = 1;
            try {
                const t = document.createElement("input");
                t.type = "date", this.hasNative = "date" === t.type
            } catch (t) {
                this.hasNative = !1
            }
            this.onLabelClick = this.onLabelClick.bind(this), this.onClickOutside = this.onClickOutside.bind(this)
        }
        connectedCallback() {
            super.connectedCallback(), document.addEventListener("click", this.onClickOutside)
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this._dateInput && [...this._dateInput.labels || []].forEach((t => {
                t.removeEventListener("click", this.onLabelClick)
            })), document.removeEventListener("click", this.onClickOutside)
        }
        firstRender(t) {
            const e = document.createElement("template");
            e.innerHTML = '\n      <style>\n        :host {\n          position: relative;\n\n          --rgb: var(--aeon-rgb, 0, 0, 0);\n          --bgRgb: var(--aeon-bgRgb, 255, 255, 255);\n          --color: rgb(var(--rgb));\n          --hintColor: rgba(var(--rgb), 0.2);\n          --bgColor: rgb(var(--bgRgb));\n\n          color: var(--color);\n        }\n\n        ::slotted(input[type=date]),\n        ::slotted(input[type=time]) {\n          display: none;\n        }\n\n        :host([has-native][use-native]) ::slotted(input[type=date]),\n        :host([has-native][use-native]) ::slotted(input[type=time]) {\n          display: inline-flex;\n        }\n\n        :host([has-native][use-native]) slot[name=output] {\n          display: none;\n        }\n\n        aeon-calendar {\n            position: absolute;\n            top: 100%;\n            left: 0;\n            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n            border: 1px solid rgba(0, 0, 0, 0.15);\n            border-radius: 4px;\n            background-clip: padding-box;\n            padding: 12px;\n        }\n\n        :host([align-top]) aeon-calendar {\n          top: auto;\n          bottom: 100%;\n        }\n\n        :host([align-right]) aeon-calendar {\n          left: auto;\n          right: 0;\n        }\n\n        @media (max-width: 640px) {\n          aeon-calendar,\n          :host([align-top]) aeon-calendar,\n          :host([align-right]) aeon-calendar {\n            position: fixed;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            right: 0;\n          }\n        }\n      </style>\n\n      <slot></slot>\n      <slot name="output"></slot>\n\n      <aeon-calendar id="calendar"></aeon-calendar>\n    ', t.appendChild(e.content.cloneNode(!0))
        }
        firstRendered(t) {
            const e = t.querySelector("slot");
            e.addEventListener("slotchange", (() => {
                const t = e.assignedNodes().filter((t => t.nodeType !== Node.TEXT_NODE));
                this._dateInput = t.find((t => "date" === t.getAttribute("type"))), this._dateInput && (this._output.placeholder = this._dateInput.placeholder, (this._dateInput.labels || []).forEach((t => {
                    t.addEventListener("click", this.onLabelClick)
                })), this.date = this._dateInput.value), this._timeInput = t.find((t => "time" === t.getAttribute("type"))), this._timeInput && (this.showTime = !0, this.time = this._timeInput.value)
            })), this._output = document.createElement("input"), this._output.slot = "output", this._output.readOnly = !0, this._output.addEventListener("click", (() => {
                this.openCalendar()
            })), this.appendChild(this._output), this.addEventListener("keyup", (t => {
                if (t.stopPropagation(), "Enter" === t.key) this.$.calendar.open || this.openCalendar()
            })), this.$.calendar.addEventListener("change", (t => {
                this.date = t.target.value.date, this.time = t.target.value.time, this.closeCalendar()
            })), this.$.calendar.addEventListener("clear", (() => {
                this.date = ""
            })), this.$.calendar.addEventListener("close", (() => {
                this._dontFocus || this._output.focus(), this._dontFocus = !1
            }))
        }
        render(t, e) {
            ("date" in e || "time" in e) && (this.value = {
                date: this.date,
                time: this.time
            }, this.updateFromString(this.date, this.time), this.dispatchEvent(new Event("change", {
                bubbles: !0
            }))), ("locale" in e || "startYear" in e || "endYear" in e || "startDay" in e || "showTime" in e || "confirmOnDate" in e) && this.updateFromString(this.date, this.time)
        }
        update(t = null) {
            const e = t && !isNaN(t);
            let i = t;
            if (!e) {
                t = this.defaultDate;
                const e = this.defaultTime;
                i = this.parseDate(t, e)
            }
            const n = this.$.calendar;
            if (n.year = i.getFullYear(), n.month = i.getMonth(), n.day = i.getDate(), n.hours = i.getHours(), n.minutes = i.getMinutes(), n.locale = this.locale, n.startYear = this.startYear, n.endYear = this.endYear, n.startDay = this.startDay, n.showTime = this.showTime, n.confirmOnDate = this.confirmOnDate, e) {
                const e = new Intl.DateTimeFormat(this.locale || void 0, {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    ...this.showTime ? {
                        hour: "numeric",
                        minute: "numeric"
                    } : {},
                    ...this.dateStyle
                }).format(t);
                this._output.value = e, this._dateInput && (this._dateInput.value = this.date), this._timeInput && (this._timeInput.value = this.time)
            } else this._output.value = "", this._dateInput && (this._dateInput.value = ""), this._timeInput && (this._timeInput.value = "")
        }
        openCalendar() {
            const t = this.getBoundingClientRect(),
                e = t.top,
                i = window.innerHeight - t.bottom;
            this.alignTop = i < e, this.$.calendar.open = !0
        }
        closeCalendar(t = !1) {
            this.$.calendar.open = !1, this._dontFocus = t
        }
        parseDate(t, e) {
            try {
                const i = t.split("-"),
                    n = (e || this.defaultTime || "00:00").split(":");
                return new Date(i[0], parseInt(i[1], 10) - 1, i[2], n[0], n[1])
            } catch (t) {
                return new Date
            }
        }
        updateFromString(t, e) {
            this.update(this.parseDate(t, e))
        }
        onLabelClick(t) {
            this.useNative && this.hasNative || (t.preventDefault(), this._output.focus())
        }
        onClickOutside(t) {
            if (this.$.calendar.open) {
                !t.composedPath().some((t => t === this)) && this.closeCalendar(!0)
            }
        }
    };
    const n = class extends e {
        static get props() {
            return {
                value: {
                    type: Number
                },
                items: {
                    type: Array
                }
            }
        }
        constructor() {
            super(), this.items = []
        }
        firstRender(t) {
            const e = document.createElement("template");
            e.innerHTML = '\n      <style>\n        select {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          padding: 0.5rem;\n          padding-right: 1.5rem;\n          font-family: inherit;\n          font-size: inherit;\n          border-radius: 0;\n          border: 1px solid var(--hintColor);\n          background-color: transparent;\n          color: var(--color);\n          width: 100%;\n        }\n\n        select::-ms-expand {\n          display: none;\n        }\n\n        .select {\n          position: relative;\n        }\n\n        .select .indicator {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          right: 0.2rem;\n          pointer-events: none;\n          display: flex;\n          align-items: center;\n        }\n      </style>\n\n      <div class="select">\n        <select id="select">\n        </select>\n        <span class="indicator">\n          <svg width="24" height="24">\n            <g><path fill="currentColor" d="M7 10l5 5 5-5z"></path></g>\n          </svg>\n        </span>\n      </div>\n    ', t.appendChild(e.content.cloneNode(!0))
        }
        focus() {
            this.$.select.focus()
        }
        firstRendered() {
            this.$.select.addEventListener("change", (t => {
                this.value = t.target.value
            }))
        }
        render(t, e) {
            "value" in e && this.dispatchEvent(new Event("change", {
                bubbles: !0
            })), this.$.select.innerHTML = this.items.map((t => `<option value="${t.value}">${t.name}</option>`)).join(""), this.$.select.value = this.value
        }
    };
    const s = class extends e {
        static get props() {
            return {
                date: {
                    type: String
                },
                time: {
                    type: String
                },
                value: {
                    type: Object
                },
                showTime: {
                    type: Boolean
                },
                confirmOnDate: {
                    type: Boolean
                },
                locale: {
                    type: String
                },
                startYear: {
                    type: Number
                },
                endYear: {
                    type: Number
                },
                startDay: {
                    type: Number
                },
                year: {
                    type: Number
                },
                month: {
                    type: Number
                },
                day: {
                    type: Number
                },
                hours: {
                    type: Number
                },
                minutes: {
                    type: Number
                },
                open: {
                    type: Boolean
                }
            }
        }
        constructor() {
            super(), this.showTime = !1, this.confirmOnDate = !1, this.open = !1
        }
        connectedCallback() {
            super.connectedCallback(), this.addEventListener("keydown", this.onKeyDown.bind(this))
        }
        firstRender(t) {
            const e = document.createElement("template");
            e.innerHTML = '\n      <style>\n        :host {\n          display: none;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          position: relative;\n          z-index: 3;\n          padding: 0.2rem;\n          background-color: var(--bgColor);\n        }\n\n        :host([open]) {\n          display: flex;\n        }\n\n        .week {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .day, .date, button {\n          color: var(--color);\n          background-color: transparent;\n          border: 0;\n          box-sizing: border-box;\n          width: 33px;\n          height: 33px;\n          padding: 0;\n          font-family: inherit;\n          font-size: calc(2.8em / 3);\n\n          text-transform: uppercase;\n\n          flex-grow: 0;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          cursor: pointer;\n        }\n\n        .date {\n          border: 1px solid var(--hintColor);\n          border-width: 0 0 1px 1px;\n        }\n\n        .date:last-child {\n          border-right-width: 1px;\n        }\n\n        .date.last + .spacer {\n          border-left-width: 1px;\n        }\n\n        .week:nth-child(2) .date:not(.spacer) {\n          border-top-width: 1px;\n        }\n\n        .week:last-child .spacer {\n          border-right-width: 0;\n          border-bottom-width: 0;\n        }\n\n        .date.today {\n            font-weight: bold;\n            background-image: linear-gradient(to bottom, #0088cc, #0044cc);\n            background-repeat: repeat-x;\n            border-color: #0044cc #0044cc #002a80;\n            color: #fff;\n            font-size: 1.3rem;\n        }\n\n        .date.spacer {\n          border-left-width: 0;\n          pointer-events: none;\n        }\n\n        #buttons {\n          width: 100%;\n          display: flex;\n          justify-content: space-between;\n          margin-top: 0.5em;\n          padding-top: 0.5em;\n          border-top: 1px solid var(--hintColor);\n        }\n\n        #year-month, #hours-minutes {\n          display: flex;\n          width: 100%;\n        }\n\n        #year-month aeon-select {\n          width: 50%;\n        }\n\n        #year-month aeon-select + aeon-select {\n          margin-left: 0.5em;\n        }\n\n        #hours-minutes {\n          padding-top: 0.5em;\n          margin-top: 0.5em;\n          border-top: 1px solid var(--hintColor);\n          display: none;\n          justify-content: center;\n          align-items: center;\n        }\n\n        #hours-minutes aeon-select {\n          width: 3.5em;\n        }\n\n        #hours-minutes aeon-select#hours {\n          margin-right: 0.2em;\n        }\n\n        #hours-minutes aeon-select#minutes {\n          margin-left: 0.2em;\n        }\n\n        :host([show-time]) #hours-minutes {\n          display: flex;\n        }\n      </style>\n\n      <div id="container">\n        <div id="year-month">\n          <aeon-select id="month"></aeon-select>\n          <aeon-select id="year"></aeon-select>\n        </div>\n        <div id="calendar"></div>\n        <div id="hours-minutes">\n          <aeon-select id="hours"></aeon-select>:<aeon-select id="minutes"></aeon-select>\n        </div>\n        <div id="buttons">\n          <button id="confirm" title="Confirm">\n            <svg width="24" height="24">\n              <g><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n            </svg>\n          </button>\n          <button id="clear" title=\'Clear\'>\n            Clear\n          </button>\n          <button id="cancel" title="Cancel">\n            <svg width="24" height="24">\n              <g><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n            </svg>\n          </button>\n        </div>\n      </div>\n    ', t.appendChild(e.content.cloneNode(!0))
        }
        firstRendered() {
            this.addEventListener("keyup", (t => {
                if (t.stopPropagation(), "Escape" === t.key) this.open = !1
            })), this.$.year.addEventListener("change", (t => {
                this.year = t.target.value
            })), this.$.month.addEventListener("change", (t => {
                this.month = t.target.value
            })), this.$.hours.items = [];
            for (let t = 0; t < 24; t++) this.$.hours.items.push({
                name: `${t}`.padStart(2, "0"),
                value: t
            });
            this.$.hours.addEventListener("change", (t => {
                this.hours = t.target.value
            })), this.$.minutes.items = [];
            for (let t = 0; t < 60; t++) this.$.minutes.items.push({
                name: `${t}`.padStart(2, "0"),
                value: t
            });
            this.$.minutes.addEventListener("change", (t => {
                this.minutes = t.target.value
            })), this.$.calendar.addEventListener("click", this.onDateClick.bind(this)), this.$.cancel.addEventListener("click", (() => {
                this.open = !1
            })), this.$.confirm.addEventListener("click", (() => {
                this.confirm()
            })), this.$.clear.addEventListener("click", (() => {
                this.dispatchEvent(new Event("clear", {
                    bubbles: !0
                })), this.open = !1
            }))
        }
        render(t, e) {
            "open" in e && !1 === this.open && !0 === e.open && this.dispatchEvent(new Event("close", {
                bubbles: !0
            })), ("year" in e || "month" in e || "day" in e) && (this.date = this.formatAsDate(this.year, this.month, this.day)), ("hours" in e || "minutes" in e) && (this.time = this.formatAsTime(this.hours, this.minutes));
            const i = new Date;
            i.setMonth(0), i.setDate(1), this.$.year.value = this.year, this.$.year.items = [];
            for (let t = this.startYear; t <= this.endYear; t++) this.$.year.items.push({
                value: t,
                name: t
            });
            this.$.month.value = this.month, this.$.month.items = [];
            for (let t = 0; t < 12; t++) {
                const e = i.getMonth();
                this.$.month.items.push({
                    value: e,
                    name: i.toLocaleString(this.locale || void 0, {
                        month: "short"
                    })
                }), i.setMonth(t + 1)
            }
            this.$.month.items.sort(((t, e) => t.num - e.num)), i.setMonth(0), i.setDate(1);
            const n = [];
            for (let t = 0; t < 7; t++) {
                const e = i.getDay();
                n.push({
                    num: e,
                    name: i.toLocaleString(this.locale || void 0, {
                        weekday: "short"
                    })
                }), i.setDate(t + 2)
            }
            const s = 7 - this.startDay;
            n.sort(((t, e) => (t.num + s) % 7 - (e.num + s) % 7)), this.$.hours.value = this.hours, this.$.minutes.value = this.minutes;
            let a = new Date(this.year, this.month, 1, 12);
            const r = a.getDay();
            a.setMonth(a.getMonth() + 1), a.setDate(0);
            const o = a.getDate();
            a = new Date(this.year, this.month, 1, 12);
            let l = !1,
                c = !1,
                d = 0;
            this.$.calendar.innerHTML = `\n      <div class="week">\n        ${n.map((t=>`<div class="day">${t.name}</div>`)).join("")}\n      </div>\n\n      ${[0,1,2,3,4,5].map((()=>d>=o?null:`\n          <div class="week">\n            ${n.map((t=>{t.num%7===r&&(l=!0);let e="";l&&(d+=1,d<=o?(e=d,a.setDate(e)):c=!0);return`\n                  <button class="date ${d===this.day?"today":""} ${!l||c?"spacer":""} ${d===o?"last":""}" data-day="${d}" ${!l||c?'tabindex="-1" disabled':""}>${e}</button>\n              `})).join("")}\n          </div>\n         `)).join("")}\n    `;
            const h = t.querySelectorAll("button:not([disabled]), aeon-select");
            this._firstFocusableEl = h[0], this._lastFocusableEl = h[h.length - 1]
        }
        rendered(t, e) {
            !0 === this.open && ("open" in e && !1 === e.open || "day" in e) && t.querySelector(".today").focus()
        }
        confirm() {
            this.date = this.formatAsDate(this.year, this.month, this.day), this.time = this.formatAsTime(this.hours, this.minutes), this.value = {
                date: this.date,
                time: this.time
            }, this.dispatchEvent(new Event("change", {
                bubbles: !0
            }))
        }
        handleTabKey(t) {
            const e = this.shadowRoot.activeElement;
            t.shiftKey && e === this._firstFocusableEl ? (this._lastFocusableEl.focus(), t.preventDefault()) : t.shiftKey || e !== this._lastFocusableEl || (this._firstFocusableEl.focus(), t.preventDefault())
        }
        handleArrowKeys(t) {
            let e = 0;
            switch (t.key) {
                case "ArrowUp":
                    e = -7;
                    break;
                case "ArrowRight":
                    e = 1;
                    break;
                case "ArrowLeft":
                    e = -1;
                    break;
                case "ArrowDown":
                    e = 7
            }
            const i = new Date(this.year, this.month, this.day);
            i.setDate(this.day + e), this.year = i.getFullYear(), this.month = i.getMonth(), this.day = i.getDate()
        }
        onKeyDown(t) {
            "Enter" === t.key ? this.confirm() : "Tab" === t.key ? this.handleTabKey(t) : ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(t.key) && this.handleArrowKeys(t)
        }
        onDateClick(t) {
            if (t.target.classList.contains("date")) {
                const e = t.target;
                this.day = parseInt(e.dataset.day, 10), this.confirmOnDate && !this.showTime && this.confirm()
            }
        }
        formatAsDate(t, e, i) {
            return `${t}-${`${e+1}`.padStart(2,"0")}-${`${i}`.padStart(2,"0")}`
        }
        formatAsTime(t, e) {
            return `${`${t}`.padStart(2,"0")}:${`${e}`.padStart(2,"0")}`
        }
    };
    customElements.get("aeon-select") || customElements.define("aeon-select", n), customElements.get("aeon-calendar") || customElements.define("aeon-calendar", s), customElements.get("aeon-datepicker") || customElements.define("aeon-datepicker", i)
})(),
function(t) {
    t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
    t.springSpace.la.askform = function(e) {
        this.id = e.content_id, this.queue_id = e.queue_id, this.errormsg = e.errormsg, this.divselector = `#s-la-askform-${this.id}`, this.$form = jQuery(`${this.divselector} form`), this.translations = e.translations, this.form_action = e.form_action, this.libauth_enabled = e.libauth_enabled || !1, this.libauth_authed = e.libauth_authed || !1, this.autoReplySettings = new t.springSpace.la.FormAutoReply(e.autoReplySettings || {}), this.captcha_enabled = this.autoReplySettings.isCaptchaEnabled(), this.autoreply_enabled = this.autoReplySettings.isAutoReplyEnabled(), this.captchaDiv = this.$form[0].querySelector(".formlibcpt"), this.confirmEmailDiv = this.$form[0].querySelector(".confem_wrap"), this.autoreply_type = this.autoReplySettings.getAutoReplyType(), this.captcha_enabled && this.captchaDiv.classList.remove("hidden"), Array.isArray(e.rules) ? this.rules = e.rules.map((e => new t.springSpace.la.FormFieldRule(e))) : this.rules = [], this.handleRequiredCheckBoxes = function(t) {
            const e = t.target.name;
            if (!0 === t.target.checked) {
                const t = this.$form[0].querySelectorAll(`input[type=checkbox][name="${e}"]`);
                return void(t.length > 0 && Array.prototype.forEach.call(t, (t => {
                    t.removeAttribute("required")
                }), this))
            }
            const i = t.target.closest("fieldset");
            if (null === i) return;
            i.querySelectorAll("input[type=checkbox]:checked").length > 0 || Array.prototype.forEach.call(i.querySelectorAll("input[type=checkbox]"), (t => {
                t.setAttribute("required", "")
            }), this)
        }, this.markError = function(t, e) {
            if (!t) return;
            const i = document.createElement("div");
            i.classList.add("error-message"), i.innerHTML = e;
            const n = t.closest("div.form-group");
            if (null === n) return;
            t.setAttribute("aria-invalid", "true"), n.classList.add("has-error");
            const s = n.querySelector("label");
            s && s.appendChild(i)
        }, this.loadCaptcha = function() {
            const t = new URL(this.form_action);
            jQuery.ajax({
                context: this,
                type: "GET",
                url: `https://${t.hostname}/form/libcpt`,
                data: {
                    queue_id: this.queue_id,
                    auto_type: this.autoReplySettings.type
                },
                dataType: "json"
            }).done((({
                html: t = "",
                isNowOffHours: e = !1,
                isCaptchaAlwaysOn: i = !1
            }) => {
                if (2 === this.autoreply_type && (e || (this.autoreply_enabled = !1, this.confirmEmailDiv && (this.confirmEmailDiv.querySelector('input[type="checkbox"]').disabled = !1, this.confirmEmailDiv.classList.remove("hidden"))), !t || !i && !this.autoreply_enabled)) return void this.captchaDiv.classList.add("hidden");
                this.captchaDiv.innerHTML = t, this.captchaDiv.classList.add("active"), this.captchaDiv.classList.remove("hidden");
                const n = this.captchaDiv.querySelector(".btn-cptreload");
                n && n.addEventListener("click", this.loadCaptcha.bind(this))
            })).fail((() => {
                this.captchaDiv.classList.add("hidden")
            }))
        }, this.validateField = function(t) {
            if (!t || t.disabled) return;
            if ("SELECT" === t.tagName) {
                const e = t.options[t.selectedIndex] || null;
                if (!e) return;
                const i = e.value;
                return void("" !== i && "0" !== i || this.markError(t, this.errormsg.reqfields))
            }
            if ("TEXTAREA" === t.tagName) return void("" === t.value.trim() && this.markError(t, this.errormsg.reqfields));
            if ("INPUT" !== t.tagName) return;
            const e = t.type;
            if ("radio" !== e && "checkbox" !== e)
                if ("email" !== e) "" === t.value.trim() && this.markError(t, this.errormsg.reqfields);
                else if (t.checkValidity() || this.markError(t, this.errormsg.emailaddress), "confirm_pemail" === t.name) {
                const e = this.$form[0].querySelector('input[name="pemail"]');
                t.value.trim() !== e.value.trim() && this.markError(t, this.errormsg.emailnotmatch)
            }
        }, this.validateFieldSet = function(t) {
            const e = t.querySelectorAll("input");
            let i = !0;
            if (e.forEach((t => {
                    t.checkValidity() || (i = !1, t.setAttribute("aria-invalid", "true"))
                })), i) return;
            const n = document.createElement("div");
            n.classList.add("error-message"), n.innerHTML = this.errormsg.reqfields, t.classList.add("has-error");
            const s = t.querySelector("legend");
            s && s.appendChild(n)
        }, this.validate = function() {
            if (this.libauth_enabled && !this.libauth_authed) return !1;
            if (this.$form.attr("action", this.form_action), this.$form.find("label .error-message, legend .error-message").remove(), this.$form.find(".form-group").removeClass("has-error"), this.$form.find(".form-control, input[type=radio], input[type=checkbox]").attr("aria-invalid", !1), Array.from(this.$form[0].querySelectorAll("[required]")).forEach((t => {
                    this.validateField(t)
                })), Array.from(this.$form[0].querySelectorAll("fieldset[data-required]")).forEach((t => {
                    this.validateFieldSet(t)
                })), this.$form.find(".has-error").length > 0) return this.$form.find("*[aria-invalid=true]:first").trigger("focus"), !1;
            let e = 0;
            return t.springSpace.queryAnalyzer ? e = t.springSpace.queryAnalyzer.qlog_id || 0 : t.springSpace.la.Page && t.springSpace.la.Page.qlog_id && (e = t.springSpace.la.Page.qlog_id), e > 0 && this.$form.find("input[name=qlog]").val(e), t.suiNotify.working(), !0
        }, this.createDismissableAlert = function(t, e) {
            const i = document.createElement("div");
            i.classList.add("alert", `alert-${e}`, "alert-dismissable"), i.setAttribute("role", "alert"), i.setAttribute("aria-atomic", "true");
            const n = document.createElement("button");
            return n.type = "button", n.classList.add("close"), n.setAttribute("aria-label", "close"), n.innerHTML = '<span aria-hidden="true">&times;</span>', i.appendChild(n), i.insertAdjacentHTML("beforeend", t), n.addEventListener("click", (t => {
                t.preventDefault(), i.remove()
            })), i
        }, this.resetRules = function() {
            this.rules.forEach((t => {
                this.$form[0].querySelectorAll(`*[name="${t.field1}"], *[name="${t.field1}[]"]`).forEach((t => {
                    t.dispatchEvent(new Event("change"))
                }))
            }))
        }, this.questionform = new t.springSpace.sui.filedrop({
            selector: `${this.divselector} form`,
            max_files: 5,
            max_upload_size: 20971520,
            max_file_size: 20971520,
            batch_files: !1,
            autoupload: !1,
            supportie9: !1,
            translations: this.translations,
            callback: e => {
                t.suiNotify.hide();
                const i = this.createDismissableAlert(e.message, "success");
                this.$form[0].querySelector("#s-la-askform-buttons").insertAdjacentElement("beforebegin", i), this.questionform.reset(), this.resetRules(), this.captcha_enabled && this.loadCaptcha(), this.autoreply_enabled && this.confirmEmailDiv && (this.confirmEmailDiv.querySelector('input[type="checkbox"]').disabled = !0, this.confirmEmailDiv.classList.add("hidden"))
            },
            error_callback: e => {
                let i = "Error";
                const n = 449 === e.status;
                if (e.responseText) try {
                    const t = JSON.parse(e.responseText);
                    t.error && (i = t.error)
                } catch (t) {
                    i = "Invalid response received"
                }
                t.suiNotify.hide();
                const s = this.createDismissableAlert(i, "danger");
                let a = null,
                    r = "beforebegin";
                n && (a = this.$form[0].querySelector(".formlibcpt"), a && (r = "afterbegin")), a || (a = this.$form[0].querySelector("#s-la-askform-buttons")), a.insertAdjacentElement(r, s)
            },
            validate: this.validate.bind(this)
        }), this.showField = function(t) {
            t.classList.remove("hidden"), t.querySelectorAll("select, input, textarea").forEach((t => {
                t.disabled = !1
            }))
        }, this.hideField = function(t) {
            t.classList.add("hidden"), t.querySelectorAll("select, input, textarea").forEach((t => {
                ["checkbox", "radio"].includes(t.type) ? t.checked = !1 : t.value = "", t.dispatchEvent(new Event("change")), t.disabled = !0
            }))
        }, this.getMultiCheckValue = function(t) {
            const e = new FormData(this.$form[0]);
            return Array.from(e.getAll(t)).map((t => Number(t)))
        }, this.getRadioValue = function(t) {
            const e = new FormData(this.$form[0]);
            return Number(e.get(t))
        }, this.setUpRules = function() {
            this.rules.forEach((t => {
                this.$form[0].querySelectorAll(`*[name="${t.field1}"], *[name="${t.field1}[]"]`).forEach((e => {
                    const i = this.$form[0].querySelector(`.${t.field2}_wrap`);
                    i && e.addEventListener("change", (e => {
                        let n = Number(e.target.value);
                        "checkbox" === e.target.type ? n = this.getMultiCheckValue(e.target.name) : "radio" === e.target.type && (n = this.getRadioValue(e.target.name));
                        const s = t.getFieldAction(n);
                        0 === s ? this.showField(i) : 1 === s && this.hideField(i)
                    }))
                }))
            }))
        }, this.setUp = function() {
            if (this.libauth_enabled && !this.libauth_authed) {
                if (this.questionform.$form[0].querySelectorAll("input,select,button,textarea").forEach((t => {
                        t.disabled = !0
                    })), this.questionform.$form[0].querySelectorAll('[tabindex="0"],a').forEach((t => {
                        t.setAttribute("tabindex", "-1")
                    })), this.questionform.$form[0].setAttribute("aria-hidden", "true"), window !== window.top) {
                    const t = document.querySelector(`${this.divselector} .btn-libauth`);
                    t && t.setAttribute("target", "_blank")
                }
                return
            }
            this.setUpRules();
            const t = this.questionform.$form[0].querySelectorAll("input[type=checkbox][required]");
            t.length > 0 && Array.prototype.forEach.call(t, (function(t) {
                t.addEventListener("change", this.handleRequiredCheckBoxes.bind(this))
            }), this), this.captcha_enabled && this.loadCaptcha(), this.autoreply_enabled && this.confirmEmailDiv && (this.confirmEmailDiv.querySelector('input[type="checkbox"]').disabled = !0, this.confirmEmailDiv.classList.add("hidden"))
        }, this.setUp()
    }
}(window);
class QueryLog {
    constructor({
        qlog_id: t = 0,
        group_id: e = 0,
        query: i = ""
    }) {
        this.qlog_id = t, this.group_id = e, this.first_search_saved = this.qlog_id > 0, this.query = i
    }
    record({
        query: t = "",
        refer: e = ""
    }) {
        this.first_search_saved && (this.first_search_saved = !1, this.query === t) || t && this.query !== t && (e || (e = location.href), jQuery.ajax({
            method: "POST",
            url: "/search/log",
            data: {
                qlog: this.qlog_id,
                refer: e,
                group_id: this.group_id,
                query: t
            },
            dataType: "json"
        }).done((t => {
            t.qlog_id && (this.qlog_id = t.qlog_id)
        })))
    }
    gotoFAQ({
        faqid: t = 0
    }) {
        t <= 0 || jQuery.ajax({
            method: "POST",
            url: "/search/log/clicked",
            data: {
                faqid: t,
                qlog: this.qlog_id
            }
        })
    }
}! function(t) {
    var e = t.springSpace.sui.initAutocomplete,
        i = {
            id: 0,
            iid: 0,
            apiDomain: "",
            groupId: 0,
            form: null,
            limit: 10,
            autocomplete: null,
            autcompleteDataFormatCb: function(t) {
                var e = [];
                return t.results.forEach((function(t) {
                    t.label = t.question, e.push(t)
                })), e
            },
            autocompleteSelectCb: function(t) {
                let e = this.form.querySelector("input[name=originalq]");
                null === e && (e = document.createElement("input"), e.setAttribute("type", "hidden"), e.setAttribute("name", "originalq"), this.form.insertBefore(e, this.form.firstChild));
                const i = this.form.querySelector("#s-la-content-search-query-" + this.id);
                e.value = i.dataset.oldvalue || "";
                var n = this.form.querySelector("input[name=faqid]");
                null === n && ((n = document.createElement("input")).setAttribute("type", "hidden"), n.setAttribute("name", "faqid"), this.form.insertBefore(n, this.form.firstChild)), n.value = t.getAttribute("data-faqid"), this.form.submit()
            },
            enableAutocomplete: function() {
                try {
                    this.autocomplete = e({
                        inputSelector: "#s-la-content-search-query-" + this.id,
                        queryUrl: "https://" + this.apiDomain + "/faq/searchpublic",
                        dataProcessor: this.autcompleteDataFormatCb.bind(this),
                        selectCallback: this.autocompleteSelectCb.bind(this),
                        queryData: {
                            rows: this.limit,
                            iid: this.iid,
                            group_ids: this.groupId
                        }
                    })
                } catch (t) {
                    console.log(t.message)
                }
            },
            init: function(t) {
                this.id = t.contentId, this.iid = t.iid, this.apiDomain = t.apiDomain, this.groupId = JSON.stringify(t.groupId), this.form = document.querySelector("#s-la-content-search-" + this.id + " form"), this.limit = t.limit ? t.limit : 10, this.enableAutocomplete()
            }
        },
        n = function(t) {
            var e = Object.create(i);
            return e.init(t), e
        };
    "undefined" != typeof module ? module.exports = n : (t.springSpace = this.springSpace || {}, t.springSpace.la = this.springSpace.la || {}, t.springSpace.la.initFaqSearchForm = n)
}(this), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return t < 10 ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, (function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var i, n, s, a, r, o = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (a = l.length, i = 0; i < a; i += 1) r[i] = str(i, l) || "null";
                        return s = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + o + "]" : "[" + r.join(",") + "]", gap = o, s
                    }
                    if (rep && "object" == typeof rep)
                        for (a = rep.length, i = 0; i < a; i += 1) "string" == typeof rep[i] && ((s = str(n = rep[i], l)) && r.push(quote(n) + (gap ? ": " : ":") + s));
                    else
                        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && ((s = str(n, l)) && r.push(quote(n) + (gap ? ": " : ":") + s));
                    return s = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + o + "}" : "{" + r.join(",") + "}", gap = o, s
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
            var n;
            if (gap = "", indent = "", "number" == typeof i)
                for (n = 0; n < i; n += 1) indent += " ";
            else "string" == typeof i && (indent = i);
            if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
                "": t
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var i, n, s = t[e];
                if (s && "object" == typeof s)
                    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (void 0 !== (n = walk(s, i)) ? s[i] = n : delete s[i]);
                return reviver.call(t, e, s)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(t, e) {
        "use strict";
        var i = t.History = t.History || {},
            n = t.jQuery;
        if (void 0 !== i.Adapter) throw new Error("History.js Adapter has already been loaded...");
        i.Adapter = {
            bind: function(t, e, i) {
                n(t).bind(e, i)
            },
            trigger: function(t, e, i) {
                n(t).trigger(e, i)
            },
            extractEventData: function(t, e, i) {
                return e && e.originalEvent && e.originalEvent[t] || i && i[t] || undefined
            },
            onDomLoad: function(t) {
                n(t)
            }
        }, void 0 !== i.init && i.init()
    }(window),
    function(t, e) {
        "use strict";
        var i = t.document,
            n = t.setTimeout || n,
            s = t.clearTimeout || s,
            a = t.setInterval || a,
            r = t.History = t.History || {};
        if (void 0 !== r.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        r.initHtml4 = function() {
            if (void 0 !== r.initHtml4.initialized) return !1;
            r.initHtml4.initialized = !0, r.enabled = !0, r.savedHashes = [], r.isLastHash = function(t) {
                return t === r.getHashByIndex()
            }, r.isHashEqual = function(t, e) {
                return (t = encodeURIComponent(t).replace(/%25/g, "%")) === (e = encodeURIComponent(e).replace(/%25/g, "%"))
            }, r.saveHash = function(t) {
                return !r.isLastHash(t) && (r.savedHashes.push(t), !0)
            }, r.getHashByIndex = function(t) {
                return void 0 === t ? r.savedHashes[r.savedHashes.length - 1] : t < 0 ? r.savedHashes[r.savedHashes.length + t] : r.savedHashes[t]
            }, r.discardedHashes = {}, r.discardedStates = {}, r.discardState = function(t, e, i) {
                var n, s = r.getHashByState(t);
                return n = {
                    discardedState: t,
                    backState: i,
                    forwardState: e
                }, r.discardedStates[s] = n, !0
            }, r.discardHash = function(t, e, i) {
                var n = {
                    discardedHash: t,
                    backState: i,
                    forwardState: e
                };
                return r.discardedHashes[t] = n, !0
            }, r.discardedState = function(t) {
                var e = r.getHashByState(t);
                return r.discardedStates[e] || !1
            }, r.discardedHash = function(t) {
                return r.discardedHashes[t] || !1
            }, r.recycleState = function(t) {
                var e = r.getHashByState(t);
                return r.discardedState(t) && delete r.discardedStates[e], !0
            }, r.emulated.hashChange && (r.hashChangeInit = function() {
                r.checkerFunction = null;
                var e, n, s, o = "",
                    l = Boolean(r.getHash());
                return r.isInternetExplorer() ? ((e = i.createElement("iframe")).setAttribute("id", "historyjs-iframe"), e.setAttribute("src", "#"), e.style.display = "none", i.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), n = "", s = !1, r.checkerFunction = function() {
                    if (s) return !1;
                    s = !0;
                    var i = r.getHash(),
                        a = r.getHash(e.contentWindow.document);
                    return i !== o ? (o = i, a !== i && (n = a = i, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = r.escapeHash(i)), r.Adapter.trigger(t, "hashchange")) : a !== n && (n = a, l && "" === a ? r.back() : r.setHash(a, !1)), s = !1, !0
                }) : r.checkerFunction = function() {
                    var e = r.getHash() || "";
                    return e !== o && (o = e, r.Adapter.trigger(t, "hashchange")), !0
                }, r.intervalList.push(a(r.checkerFunction, r.options.hashChangeInterval)), !0
            }, r.Adapter.onDomLoad(r.hashChangeInit)), r.emulated.pushState && (r.onHashChange = function(e) {
                var i, n = e && e.newURL || r.getLocationHref(),
                    s = r.getHashByUrl(n),
                    a = null;
                return r.isLastHash(s) ? (r.busy(!1), !1) : (r.doubleCheckComplete(), r.saveHash(s), s && r.isTraditionalAnchor(s) ? (r.Adapter.trigger(t, "anchorchange"), r.busy(!1), !1) : (a = r.extractState(r.getFullUrl(s || r.getLocationHref()), !0), r.isLastSavedState(a) ? (r.busy(!1), !1) : (r.getHashByState(a), (i = r.discardedState(a)) ? (r.getHashByIndex(-2) === r.getHashByState(i.forwardState) ? r.back(!1) : r.forward(!1), !1) : (r.pushState(a.data, a.title, encodeURI(a.url), !1), !0))))
            }, r.Adapter.bind(t, "hashchange", r.onHashChange), r.pushState = function(e, i, n, s) {
                if (n = encodeURI(n).replace(/%25/g, "%"), r.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== s && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.pushState,
                    args: arguments,
                    queue: s
                }), !1;
                r.busy(!0);
                var a = r.createStateObject(e, i, n),
                    o = r.getHashByState(a),
                    l = r.getState(!1),
                    c = r.getHashByState(l),
                    d = r.getHash(),
                    h = r.expectedStateId == a.id;
                return r.storeState(a), r.expectedStateId = a.id, r.recycleState(a), r.setTitle(a), o === c ? (r.busy(!1), !1) : (r.saveState(a), h || r.Adapter.trigger(t, "statechange"), !r.isHashEqual(o, d) && !r.isHashEqual(o, r.getShortUrl(r.getLocationHref())) && r.setHash(o, !1), r.busy(!1), !0)
            }, r.replaceState = function(e, i, n, s) {
                if (n = encodeURI(n).replace(/%25/g, "%"), r.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== s && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.replaceState,
                    args: arguments,
                    queue: s
                }), !1;
                r.busy(!0);
                var a = r.createStateObject(e, i, n),
                    o = r.getHashByState(a),
                    l = r.getState(!1),
                    c = r.getHashByState(l),
                    d = r.getStateByIndex(-2);
                return r.discardState(l, a, d), o === c ? (r.storeState(a), r.expectedStateId = a.id, r.recycleState(a), r.setTitle(a), r.saveState(a), r.Adapter.trigger(t, "statechange"), r.busy(!1)) : r.pushState(a.data, a.title, a.url, !1), !0
            }), r.emulated.pushState && r.getHash() && !r.emulated.hashChange && r.Adapter.onDomLoad((function() {
                r.Adapter.trigger(t, "hashchange")
            }))
        }, void 0 !== r.init && r.init()
    }(window),
    function(t, e) {
        "use strict";
        var i = t.console || e,
            n = t.document,
            s = t.navigator,
            a = t.sessionStorage || !1,
            r = t.setTimeout,
            o = t.clearTimeout,
            l = t.setInterval,
            c = t.clearInterval,
            d = t.JSON,
            h = t.alert,
            u = t.History = t.History || {},
            p = t.history;
        try {
            a.setItem("TEST", "1"), a.removeItem("TEST")
        } catch (t) {
            a = !1
        }
        if (d.stringify = d.stringify || d.encode, d.parse = d.parse || d.decode, void 0 !== u.init) throw new Error("History.js Core has already been loaded...");
        u.init = function(t) {
            return void 0 !== u.Adapter && (void 0 !== u.initCore && u.initCore(), void 0 !== u.initHtml4 && u.initHtml4(), !0)
        }, u.initCore = function(f) {
            if (void 0 !== u.initCore.initialized) return !1;
            if (u.initCore.initialized = !0, u.options = u.options || {}, u.options.hashChangeInterval = u.options.hashChangeInterval || 100, u.options.safariPollInterval = u.options.safariPollInterval || 500, u.options.doubleCheckInterval = u.options.doubleCheckInterval || 500, u.options.disableSuid = u.options.disableSuid || !1, u.options.storeInterval = u.options.storeInterval || 1e3, u.options.busyDelay = u.options.busyDelay || 250, u.options.debug = u.options.debug || !1, u.options.initialTitle = u.options.initialTitle || n.title, u.options.html4Mode = u.options.html4Mode || !1, u.options.delayInit = u.options.delayInit || !1, u.intervalList = [], u.clearAllIntervals = function() {
                    var t, e = u.intervalList;
                    if (null != e) {
                        for (t = 0; t < e.length; t++) c(e[t]);
                        u.intervalList = null
                    }
                }, u.debug = function() {
                    u.options.debug && u.log.apply(u, arguments)
                }, u.log = function() {
                    var t, e, s, a, r, o = void 0 !== i && void 0 !== i.log && void 0 !== i.log.apply,
                        l = n.getElementById("log");
                    for (o ? (t = (a = Array.prototype.slice.call(arguments)).shift(), void 0 !== i.debug ? i.debug.apply(i, [t, a]) : i.log.apply(i, [t, a])) : t = "\n" + arguments[0] + "\n", e = 1, s = arguments.length; e < s; ++e) {
                        if ("object" == typeof(r = arguments[e]) && void 0 !== d) try {
                            r = d.stringify(r)
                        } catch (t) {}
                        t += "\n" + r + "\n"
                    }
                    return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : o || h(t), !0
                }, u.getInternetExplorerMajorVersion = function() {
                    var t = u.getInternetExplorerMajorVersion.cached = void 0 !== u.getInternetExplorerMajorVersion.cached ? u.getInternetExplorerMajorVersion.cached : function() {
                        for (var t = 3, e = n.createElement("div"), i = e.getElementsByTagName("i");
                            (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && i[0];);
                        return t > 4 && t
                    }();
                    return t
                }, u.isInternetExplorer = function() {
                    return u.isInternetExplorer.cached = void 0 !== u.isInternetExplorer.cached ? u.isInternetExplorer.cached : Boolean(u.getInternetExplorerMajorVersion())
                }, u.options.html4Mode ? u.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : u.emulated = {
                    pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent)),
                    hashChange: Boolean(!("onhashchange" in t || "onhashchange" in n) || u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8)
                }, u.enabled = !u.emulated.pushState, u.bugs = {
                    setHash: Boolean(!u.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),
                    safariPoll: Boolean(!u.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),
                    ieDoubleCheck: Boolean(u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 7)
                }, u.isEmptyObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }, u.cloneObject = function(t) {
                    var e, i;
                    return t ? (e = d.stringify(t), i = d.parse(e)) : i = {}, i
                }, u.getRootUrl = function() {
                    var t = n.location.protocol + "//" + (n.location.hostname || n.location.host);
                    return n.location.port && (t += ":" + n.location.port), t += "/"
                }, u.getBaseHref = function() {
                    var t = n.getElementsByTagName("base"),
                        e = "";
                    return 1 === t.length && (e = t[0].href.replace(/[^\/]+$/, "")), (e = e.replace(/\/+$/, "")) && (e += "/"), e
                }, u.getBaseUrl = function() {
                    return u.getBaseHref() || u.getBasePageUrl() || u.getRootUrl()
                }, u.getPageUrl = function() {
                    var t;
                    return t = ((u.getState(!1, !1) || {}).url || u.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, (function(t, e, i) {
                        return /\./.test(t) ? t : t + "/"
                    })), t
                }, u.getBasePageUrl = function() {
                    return u.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, (function(t, e, i) {
                        return /[^\/]$/.test(t) ? "" : t
                    })).replace(/\/+$/, "") + "/"
                }, u.getFullUrl = function(t, e) {
                    var i = t,
                        n = t.substring(0, 1);
                    return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (i = "/" === n ? u.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? u.getPageUrl().replace(/#.*/, "") + t : "?" === n ? u.getPageUrl().replace(/[\?#].*/, "") + t : e ? u.getBaseUrl() + t.replace(/^(\.\/)+/, "") : u.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "")
                }, u.getShortUrl = function(t) {
                    var e = t,
                        i = u.getBaseUrl(),
                        n = u.getRootUrl();
                    return u.emulated.pushState && (e = e.replace(i, "")), e = e.replace(n, "/"), u.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, u.getLocationHref = function(t) {
                    return (t = t || n).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash || -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
                }, u.store = {}, u.idToState = u.idToState || {}, u.stateToId = u.stateToId || {}, u.urlToId = u.urlToId || {}, u.storedStates = u.storedStates || [], u.savedStates = u.savedStates || [], u.normalizeStore = function() {
                    u.store.idToState = u.store.idToState || {}, u.store.urlToId = u.store.urlToId || {}, u.store.stateToId = u.store.stateToId || {}
                }, u.getState = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var i = u.getLastSavedState();
                    return !i && e && (i = u.createStateObject()), t && ((i = u.cloneObject(i)).url = i.cleanUrl || i.url), i
                }, u.getIdByState = function(t) {
                    var e, i = u.extractId(t.url);
                    if (!i)
                        if (e = u.getStateString(t), void 0 !== u.stateToId[e]) i = u.stateToId[e];
                        else if (void 0 !== u.store.stateToId[e]) i = u.store.stateToId[e];
                    else {
                        for (; i = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== u.idToState[i] || void 0 !== u.store.idToState[i];);
                        u.stateToId[e] = i, u.idToState[i] = t
                    }
                    return i
                }, u.normalizeState = function(t) {
                    var e, i;
                    return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = {}).normalized = !0, e.title = t.title || "", e.url = u.getFullUrl(t.url ? t.url : u.getLocationHref()), e.hash = u.getShortUrl(e.url), e.data = u.cloneObject(t.data), e.id = u.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !u.isEmptyObject(e.data), (e.title || i) && !0 !== u.options.disableSuid && (e.hash = u.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = u.getFullUrl(e.hash), (u.emulated.pushState || u.bugs.safariPoll) && u.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                }, u.createStateObject = function(t, e, i) {
                    var n = {
                        data: t,
                        title: e,
                        url: i
                    };
                    return n = u.normalizeState(n)
                }, u.getStateById = function(t) {
                    return t = String(t), u.idToState[t] || u.store.idToState[t] || e
                }, u.getStateString = function(t) {
                    var e;
                    return e = {
                        data: u.normalizeState(t).data,
                        title: t.title,
                        url: t.url
                    }, d.stringify(e)
                }, u.getStateId = function(t) {
                    return u.normalizeState(t).id
                }, u.getHashByState = function(t) {
                    return u.normalizeState(t).hash
                }, u.extractId = function(t) {
                    var e, i;
                    return i = -1 != t.indexOf("#") ? t.split("#")[0] : t, (e = /(.*)\&_suid=([0-9]+)$/.exec(i)) && e[1] || t, (e ? String(e[2] || "") : "") || !1
                }, u.isTraditionalAnchor = function(t) {
                    return !/[\/\?\.]/.test(t)
                }, u.extractState = function(t, e) {
                    var i, n, s = null;
                    return e = e || !1, (i = u.extractId(t)) && (s = u.getStateById(i)), s || (n = u.getFullUrl(t), (i = u.getIdByUrl(n) || !1) && (s = u.getStateById(i)), !s && e && !u.isTraditionalAnchor(t) && (s = u.createStateObject(null, null, n))), s
                }, u.getIdByUrl = function(t) {
                    return u.urlToId[t] || u.store.urlToId[t] || e
                }, u.getLastSavedState = function() {
                    return u.savedStates[u.savedStates.length - 1] || e
                }, u.getLastStoredState = function() {
                    return u.storedStates[u.storedStates.length - 1] || e
                }, u.hasUrlDuplicate = function(t) {
                    var e;
                    return (e = u.extractState(t.url)) && e.id !== t.id
                }, u.storeState = function(t) {
                    return u.urlToId[t.url] = t.id, u.storedStates.push(u.cloneObject(t)), t
                }, u.isLastSavedState = function(t) {
                    var e = !1;
                    return u.savedStates.length && (e = t.id === u.getLastSavedState().id), e
                }, u.saveState = function(t) {
                    return !u.isLastSavedState(t) && (u.savedStates.push(u.cloneObject(t)), !0)
                }, u.getStateByIndex = function(t) {
                    return void 0 === t ? u.savedStates[u.savedStates.length - 1] : t < 0 ? u.savedStates[u.savedStates.length + t] : u.savedStates[t]
                }, u.getCurrentIndex = function() {
                    return u.savedStates.length < 1 ? 0 : u.savedStates.length - 1
                }, u.getHash = function(t) {
                    var e = u.getLocationHref(t);
                    return u.getHashByUrl(e)
                }, u.unescapeHash = function(t) {
                    var e = u.normalizeHash(t);
                    return e = decodeURIComponent(e)
                }, u.normalizeHash = function(t) {
                    return t.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, u.setHash = function(t, e) {
                    var i, s;
                    return !1 !== e && u.busy() ? (u.pushQueue({
                        scope: u,
                        callback: u.setHash,
                        args: arguments,
                        queue: e
                    }), !1) : (u.busy(!0), (i = u.extractState(t, !0)) && !u.emulated.pushState ? u.pushState(i.data, i.title, i.url, !1) : u.getHash() !== t && (u.bugs.setHash ? (s = u.getPageUrl(), u.pushState(null, null, s + "#" + t, !1)) : n.location.hash = t), u)
                }, u.escapeHash = function(e) {
                    var i = u.normalizeHash(e);
                    return i = t.encodeURIComponent(i), u.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i
                }, u.getHashByUrl = function(t) {
                    var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return e = u.unescapeHash(e)
                }, u.setTitle = function(t) {
                    var e, i = t.title;
                    i || (e = u.getStateByIndex(0)) && e.url === t.url && (i = e.title || u.options.initialTitle);
                    try {
                        n.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (t) {}
                    return n.title = i, u
                }, u.queues = [], u.busy = function(t) {
                    if (void 0 !== t ? u.busy.flag = t : void 0 === u.busy.flag && (u.busy.flag = !1), !u.busy.flag) {
                        o(u.busy.timeout);
                        var e = function() {
                            var t, i, n;
                            if (!u.busy.flag)
                                for (t = u.queues.length - 1; t >= 0; --t) 0 !== (i = u.queues[t]).length && (n = i.shift(), u.fireQueueItem(n), u.busy.timeout = r(e, u.options.busyDelay))
                        };
                        u.busy.timeout = r(e, u.options.busyDelay)
                    }
                    return u.busy.flag
                }, u.busy.flag = !1, u.fireQueueItem = function(t) {
                    return t.callback.apply(t.scope || u, t.args || [])
                }, u.pushQueue = function(t) {
                    return u.queues[t.queue || 0] = u.queues[t.queue || 0] || [], u.queues[t.queue || 0].push(t), u
                }, u.queue = function(t, e) {
                    return "function" == typeof t && (t = {
                        callback: t
                    }), void 0 !== e && (t.queue = e), u.busy() ? u.pushQueue(t) : u.fireQueueItem(t), u
                }, u.clearQueue = function() {
                    return u.busy.flag = !1, u.queues = [], u
                }, u.stateChanged = !1, u.doubleChecker = !1, u.doubleCheckComplete = function() {
                    return u.stateChanged = !0, u.doubleCheckClear(), u
                }, u.doubleCheckClear = function() {
                    return u.doubleChecker && (o(u.doubleChecker), u.doubleChecker = !1), u
                }, u.doubleCheck = function(t) {
                    return u.stateChanged = !1, u.doubleCheckClear(), u.bugs.ieDoubleCheck && (u.doubleChecker = r((function() {
                        return u.doubleCheckClear(), u.stateChanged || t(), !0
                    }), u.options.doubleCheckInterval)), u
                }, u.safariStatePoll = function() {
                    var e = u.extractState(u.getLocationHref());
                    if (!u.isLastSavedState(e)) return e || u.createStateObject(), u.Adapter.trigger(t, "popstate"), u
                }, u.back = function(t) {
                    return !1 !== t && u.busy() ? (u.pushQueue({
                        scope: u,
                        callback: u.back,
                        args: arguments,
                        queue: t
                    }), !1) : (u.busy(!0), u.doubleCheck((function() {
                        u.back(!1)
                    })), p.go(-1), !0)
                }, u.forward = function(t) {
                    return !1 !== t && u.busy() ? (u.pushQueue({
                        scope: u,
                        callback: u.forward,
                        args: arguments,
                        queue: t
                    }), !1) : (u.busy(!0), u.doubleCheck((function() {
                        u.forward(!1)
                    })), p.go(1), !0)
                }, u.go = function(t, e) {
                    var i;
                    if (t > 0)
                        for (i = 1; i <= t; ++i) u.forward(e);
                    else {
                        if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (i = -1; i >= t; --i) u.back(e)
                    }
                    return u
                }, u.emulated.pushState) {
                var m = function() {};
                u.pushState = u.pushState || m, u.replaceState = u.replaceState || m
            } else u.onPopState = function(e, i) {
                var n, s, a = !1,
                    r = !1;
                return u.doubleCheckComplete(), (n = u.getHash()) ? ((s = u.extractState(n || u.getLocationHref(), !0)) ? u.replaceState(s.data, s.title, s.url, !1) : (u.Adapter.trigger(t, "anchorchange"), u.busy(!1)), u.expectedStateId = !1, !1) : ((r = (a = u.Adapter.extractEventData("state", e, i) || !1) ? u.getStateById(a) : u.expectedStateId ? u.getStateById(u.expectedStateId) : u.extractState(u.getLocationHref())) || (r = u.createStateObject(null, null, u.getLocationHref())), u.expectedStateId = !1, u.isLastSavedState(r) ? (u.busy(!1), !1) : (u.storeState(r), u.saveState(r), u.setTitle(r), u.Adapter.trigger(t, "statechange"), u.busy(!1), !0))
            }, u.Adapter.bind(t, "popstate", u.onPopState), u.pushState = function(e, i, n, s) {
                if (u.getHashByUrl(n) && u.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== s && u.busy()) return u.pushQueue({
                    scope: u,
                    callback: u.pushState,
                    args: arguments,
                    queue: s
                }), !1;
                u.busy(!0);
                var a = u.createStateObject(e, i, n);
                return u.isLastSavedState(a) ? u.busy(!1) : (u.storeState(a), u.expectedStateId = a.id, p.pushState(a.id, a.title, a.url), u.Adapter.trigger(t, "popstate")), !0
            }, u.replaceState = function(e, i, n, s) {
                if (u.getHashByUrl(n) && u.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== s && u.busy()) return u.pushQueue({
                    scope: u,
                    callback: u.replaceState,
                    args: arguments,
                    queue: s
                }), !1;
                u.busy(!0);
                var a = u.createStateObject(e, i, n);
                return u.isLastSavedState(a) ? u.busy(!1) : (u.storeState(a), u.expectedStateId = a.id, p.replaceState(a.id, a.title, a.url), u.Adapter.trigger(t, "popstate")), !0
            };
            if (a) {
                try {
                    u.store = d.parse(a.getItem("History.store")) || {}
                } catch (t) {
                    u.store = {}
                }
                u.normalizeStore()
            } else u.store = {}, u.normalizeStore();
            u.Adapter.bind(t, "unload", u.clearAllIntervals), u.saveState(u.storeState(u.extractState(u.getLocationHref(), !0))), a && (u.onUnload = function() {
                var t, e, i;
                try {
                    t = d.parse(a.getItem("History.store")) || {}
                } catch (e) {
                    t = {}
                }
                for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, u.idToState) u.idToState.hasOwnProperty(e) && (t.idToState[e] = u.idToState[e]);
                for (e in u.urlToId) u.urlToId.hasOwnProperty(e) && (t.urlToId[e] = u.urlToId[e]);
                for (e in u.stateToId) u.stateToId.hasOwnProperty(e) && (t.stateToId[e] = u.stateToId[e]);
                u.store = t, u.normalizeStore(), i = d.stringify(t);
                try {
                    a.setItem("History.store", i)
                } catch (t) {
                    if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                    a.length && (a.removeItem("History.store"), a.setItem("History.store", i))
                }
            }, u.intervalList.push(l(u.onUnload, u.options.storeInterval)), u.Adapter.bind(t, "beforeunload", u.onUnload), u.Adapter.bind(t, "unload", u.onUnload)), u.emulated.pushState || (u.bugs.safariPoll && u.intervalList.push(l(u.safariStatePoll, u.options.safariPollInterval)), "Apple Computer, Inc." !== s.vendor && "Mozilla" !== (s.appCodeName || "") || (u.Adapter.bind(t, "hashchange", (function() {
                u.Adapter.trigger(t, "popstate")
            })), u.getHash() && u.Adapter.onDomLoad((function() {
                u.Adapter.trigger(t, "hashchange")
            }))))
        }, (!u.options || !u.options.delayInit) && u.init()
    }(window);
var springSpace = springSpace || {};

function accessibleIcons(t, e) {
    void 0 === e && (e = {}), void 0 !== t && (e.parent = t), springSpace.sui.icontip(e)
}
springSpace.sui = springSpace.sui || {}, springSpace.sui.icontip = function(t) {
    if (void 0 === t && (t = {}), t.parent) e = $(t.parent);
    else var e = $("body");
    t.placement = t.placement ? t.placement : "top", e.find(".fa + .icon-label").each((function(e, i) {
        var n = $(i),
            s = n.html();
        if ("" !== s) {
            if (0 == (a = n.parent("button, a")).length) var a = n.prev(".fa");
            if (1 == a.length) {
                if (a.data && a.data("bs.tooltip")) return;
                a.tooltip({
                    title: s,
                    html: !0,
                    placement: t.placement
                })
            }
        }
    }))
}, jQuery(document).ready((function() {
    var t, e = "[data-toggle=dropdown]";
    $(e).parent().find("ul").attr("role", "menu").find("li").attr("role", "presentation").find("a").attr({
        role: "menuitem",
        tabIndex: "-1"
    }), $(e).attr({
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }), $(e).parent().on("shown.bs.dropdown", (function(i) {
        (t = $(this)).find(e).attr("aria-expanded", "true"), t.children("ul").attr("aria-hidden", !1)
    })), $(e).parent().on("hidden.bs.dropdown", (function(i) {
        (t = $(this)).find(e).attr("aria-expanded", "false"), t.children("ul").attr("aria-hidden", !0)
    })), $.fn.dropdown.Constructor.prototype.keydown = function(t) {
        /(32)/.test(t.keyCode) && ($(this).parent(), $(this).trigger("click"), t.preventDefault() && t.stopPropagation())
    }, $(document).on("focusout.dropdown.data-api", ".dropdown-menu", (function(t) {
        var e = $(this),
            i = this;
        e.hasClass("multiselect-container") || setTimeout((function() {
            $.contains(i, document.activeElement) || (e.parent().removeClass("open"), e.parent().find("[data-toggle=dropdown]").attr("aria-expanded", "false"))
        }), 150)
    })).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", $.fn.dropdown.Constructor.prototype.keydown);
    var i = $(".nav-tabs"),
        n = i.children("li"),
        s = i.find('[data-toggle="tab"], [data-toggle="pill"]');
    s.length > 0 && (i.attr("role", "tablist"), n.attr("role", "presentation"), s.attr("role", "tab")), s.each((function(t) {
        var e = $(this).attr("href"),
            i = "#" === e ? null : $(e),
            n = $(this),
            s = n.attr("id") || ("ui-tab" || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1);
        n.attr("id", s), n.parent().hasClass("active") ? (n.attr({
            tabIndex: "0",
            "aria-selected": "true",
            "aria-controls": n.attr("href").substring(1)
        }), null !== i && i.attr({
            role: "tabpanel",
            tabIndex: "0",
            "aria-hidden": "false",
            "aria-labelledby": s
        })) : (n.attr({
            tabIndex: "-1",
            "aria-selected": "false",
            "aria-controls": n.attr("href").substring(1)
        }), null !== i && i.attr({
            role: "tabpanel",
            tabIndex: "-1",
            "aria-hidden": "true",
            "aria-labelledby": s
        }))
    })), $.fn.tab.Constructor.prototype.keydown = function(t) {
        var e, i, n = $(this),
            s = n.closest("ul[role=tablist] "),
            a = t.which || t.keyCode;
        if (n = $(this), /(37|38|39|40)/.test(a)) {
            i = (e = s.find("[role=tab]:visible")).index(e.filter(":focus")), 38 != a && 37 != a || i--, 39 != a && 40 != a || i++, i < 0 && (i = e.length - 1), i == e.length && (i = 0);
            var r = e.eq(i);
            "tab" === r.attr("role") && r.tab("show").focus(), t.preventDefault(), t.stopPropagation()
        }
    }, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
    var a = $.fn.tab.Constructor.prototype.activate;
    if ($.fn.tab.Constructor.prototype.activate = function(t, e, i) {
            var n = e.find("> .active");
            n.find("[data-toggle=tab]").attr({
                tabIndex: "-1",
                "aria-selected": !1
            }), n.filter(".tab-pane").attr({
                "aria-hidden": !0,
                tabIndex: "-1"
            }), a.apply(this, arguments), t.addClass("active"), t.find("[data-toggle=tab]").attr({
                tabIndex: "0",
                "aria-selected": !0
            }), t.filter(".tab-pane").attr({
                "aria-hidden": !1,
                tabIndex: "0"
            })
        }, springSpace.sui.icontip(), document.location.hash) {
        var r = document.location.hash;
        try {
            $(r).attr("tabindex", -1).on("blur focusout", (function() {
                $(this).removeAttr("tabindex")
            })).focus()
        } catch (t) {}
    }
    $(window).bind("hashchange", (function() {
        var t = "#" + window.location.hash.replace(/^#/, "");
        "#" != t ? $(t).attr("tabindex", -1).on("blur focusout", (function() {
            $(this).removeAttr("tabindex")
        })).focus() : $("body").attr("tabindex", -1).on("blur focusout", (function() {
            $(this).removeAttr("tabindex")
        })).focus()
    })), $.fn.modal.Constructor.prototype.enforceFocus = function() {
        modal_this = this, $(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(t) {
            modal_this.$element[0] === t.target || modal_this.$element.has(t.target).length || $(t.target).closest(".cke_dialog, .cke").length || modal_this.$element.focus()
        }))
    }
}));
//# sourceMappingURL=maps/LibAnswers_public.min.js.map