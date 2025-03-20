! function(c) {
    c.notification = function(e, t) {
        if ("" !== e && null != e) {
            t = c.extend(!0, {
                className: "jquery-notification",
                duration: 2e3,
                freezeOnHover: !0,
                hideSpeed: 200,
                position: "center",
                showSpeed: 150,
                zIndex: 99999
            }, t), 0 < c("#jquery-notification").length && (t.showSpeed = 0), c("#jquery-notification").remove();
            var n, i, r, a, s, o = c(window).width(),
                l = c(window).height(),
                u = c('<div id="jquery-notification" />');
            switch (u.appendTo(c("BODY")).addClass(t.className).html(e).css({
                    position: "fixed",
                    display: "none",
                    zIndex: t.zIndex
                }).mouseover(function() {
                    t.freezeOnHover && clearTimeout(s), c(this).addClass(t.className + "-hover")
                }).mouseout(function() {
                    c(this).removeClass(t.className + "-hover"), t.freezeOnHover && (s = setTimeout(d, t.duration))
                }).click(d).wrapInner('<div id="jquery-notification-message" />'), n = u.outerWidth(), i = u.outerHeight(), t.position) {
                case "top":
                    r = 0, a = o / 2 - n / 2;
                    break;
                case "top-left":
                    a = r = 0;
                    break;
                case "top-right":
                    r = 0, a = o - n;
                    break;
                case "bottom":
                    r = l - i, a = o / 2 - n / 2;
                    break;
                case "bottom-left":
                    r = l - i, a = 0;
                    break;
                case "bottom-right":
                    r = l - i, a = o - n;
                    break;
                case "left":
                    r = l / 2 - i / 2, a = 0;
                    break;
                case "right":
                    r = l / 2 - i / 2, a = o - n;
                    break;
                default:
                    r = l / 2 - i / 2, a = o / 2 - n / 2
            }
            u.css({
                top: r,
                left: a
            }).fadeIn(t.showSpeed, function() {
                s = setTimeout(d, t.duration)
            })
        }

        function d() {
            clearTimeout(s), u.fadeOut(t.hideSpeed, function() {
                c(this).remove()
            })
        }
    }
}(jQuery),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var U;

    function p() {
        return U.apply(null, arguments)
    }

    function g(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function L(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function h(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function $(e) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
        for (var t in e)
            if (h(e, t)) return;
        return 1
    }

    function y(e) {
        return void 0 === e
    }

    function _(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function A(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function R(e, t) {
        for (var n = [], i = e.length, r = 0; r < i; ++r) n.push(t(e[r], r));
        return n
    }

    function W(e, t) {
        for (var n in t) h(t, n) && (e[n] = t[n]);
        return h(t, "toString") && (e.toString = t.toString), h(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function u(e, t, n, i) {
        return jt(e, t, n, i, !0).utc()
    }

    function v(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function I(e) {
        var t, n, i = e._d && !isNaN(e._d.getTime());
        return i && (t = v(e), n = Q.call(t.parsedDateParts, function(e) {
            return null != e
        }), i = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict) && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e) ? i : (e._isValid = i, e._isValid)
    }

    function H(e) {
        var t = u(NaN);
        return null != e ? W(v(t), e) : v(t).userInvalidated = !0, t
    }
    var Q = Array.prototype.some || function(e) {
            for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
                if (i in t && e.call(this, t[i], i, t)) return !0;
            return !1
        },
        z = p.momentProperties = [],
        V = !1;

    function G(e, t) {
        var n, i, r, a = z.length;
        if (y(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), y(t._i) || (e._i = t._i), y(t._f) || (e._f = t._f), y(t._l) || (e._l = t._l), y(t._strict) || (e._strict = t._strict), y(t._tzm) || (e._tzm = t._tzm), y(t._isUTC) || (e._isUTC = t._isUTC), y(t._offset) || (e._offset = t._offset), y(t._pf) || (e._pf = v(t)), y(t._locale) || (e._locale = t._locale), 0 < a)
            for (n = 0; n < a; n++) y(r = t[i = z[n]]) || (e[i] = r);
        return e
    }

    function B(e) {
        G(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === V && (V = !0, p.updateOffset(this), V = !1)
    }

    function w(e) {
        return e instanceof B || null != e && null != e._isAMomentObject
    }

    function q(e) {
        !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function e(a, s) {
        var o = !0;
        return W(function() {
            if (null != p.deprecationHandler && p.deprecationHandler(null, a), o) {
                for (var e, t, n = [], i = arguments.length, r = 0; r < i; r++) {
                    if (e = "", "object" == typeof arguments[r]) {
                        for (t in e += "\n[" + r + "] ", arguments[0]) h(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", ");
                        e = e.slice(0, -2)
                    } else e = arguments[r];
                    n.push(e)
                }
                q(a + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + (new Error).stack), o = !1
            }
            return s.apply(this, arguments)
        }, s)
    }
    var Z = {};

    function J(e, t) {
        null != p.deprecationHandler && p.deprecationHandler(e, t), Z[e] || (q(t), Z[e] = !0)
    }

    function s(e) {
        return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function X(e, t) {
        var n, i = W({}, e);
        for (n in t) h(t, n) && (L(e[n]) && L(t[n]) ? (i[n] = {}, W(i[n], e[n]), W(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e) h(e, n) && !h(t, n) && L(e[n]) && (i[n] = W({}, i[n]));
        return i
    }

    function K(e) {
        null != e && this.set(e)
    }
    p.suppressDeprecationWarnings = !1, p.deprecationHandler = null;
    var ee = Object.keys || function(e) {
        var t, n = [];
        for (t in e) h(e, t) && n.push(t);
        return n
    };

    function a(e, t, n) {
        var i = "" + Math.abs(e);
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - i.length)).toString().substr(1) + i
    }
    var te = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        ie = {},
        re = {};

    function i(e, t, n, i) {
        var r = "string" == typeof i ? function() {
            return this[i]()
        } : i;
        e && (re[e] = r), t && (re[t[0]] = function() {
            return a(r.apply(this, arguments), t[1], t[2])
        }), n && (re[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        })
    }

    function ae(e, t) {
        return e.isValid() ? (t = se(t, e.localeData()), ie[t] = ie[t] || function(i) {
            for (var e, r = i.match(te), t = 0, a = r.length; t < a; t++) re[r[t]] ? r[t] = re[r[t]] : r[t] = (e = r[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function(e) {
                for (var t = "", n = 0; n < a; n++) t += s(r[n]) ? r[n].call(e, i) : r[n];
                return t
            }
        }(t), ie[t](e)) : e.localeData().invalidDate()
    }

    function se(e, t) {
        var n = 5;

        function i(e) {
            return t.longDateFormat(e) || e
        }
        for (ne.lastIndex = 0; 0 <= n && ne.test(e);) e = e.replace(ne, i), ne.lastIndex = 0, --n;
        return e
    }
    var oe = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
    };

    function o(e) {
        return "string" == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0
    }

    function le(e) {
        var t, n, i = {};
        for (n in e) h(e, n) && (t = o(n)) && (i[t] = e[n]);
        return i
    }
    var ue = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
    };
    var de = /\d/,
        t = /\d\d/,
        ce = /\d{3}/,
        he = /\d{4}/,
        fe = /[+-]?\d{6}/,
        n = /\d\d?/,
        me = /\d\d\d\d?/,
        pe = /\d\d\d\d\d\d?/,
        ge = /\d{1,3}/,
        ye = /\d{1,4}/,
        _e = /[+-]?\d{1,6}/,
        ve = /\d+/,
        we = /[+-]?\d+/,
        be = /Z|[+-]\d\d:?\d\d/gi,
        ke = /Z|[+-]\d\d(?::?\d\d)?/gi,
        r = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        l = /^[1-9]\d?/,
        d = /^([1-9]\d|\d)/;

    function c(e, n, i) {
        De[e] = s(n) ? n : function(e, t) {
            return e && i ? i : n
        }
    }

    function Se(e, t) {
        return h(De, e) ? De[e](t._strict, t._locale) : new RegExp(f(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
            return t || n || i || r
        })))
    }

    function f(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function m(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function b(e) {
        var e = +e,
            t = 0;
        return t = 0 != e && isFinite(e) ? m(e) : t
    }
    var De = {},
        Me = {};

    function k(e, n) {
        var t, i, r = n;
        for ("string" == typeof e && (e = [e]), _(n) && (r = function(e, t) {
                t[n] = b(e)
            }), i = e.length, t = 0; t < i; t++) Me[e[t]] = r
    }

    function xe(e, r) {
        k(e, function(e, t, n, i) {
            n._w = n._w || {}, r(e, n._w, n, i)
        })
    }

    function Te(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    var S = 0,
        D = 1,
        M = 2,
        x = 3,
        T = 4,
        Y = 5,
        Ye = 6,
        Ce = 7,
        Oe = 8;

    function je(e) {
        return Te(e) ? 366 : 365
    }
    i("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? a(e, 4) : "+" + e
    }), i(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), i(0, ["YYYY", 4], 0, "year"), i(0, ["YYYYY", 5], 0, "year"), i(0, ["YYYYYY", 6, !0], 0, "year"), c("Y", we), c("YY", n, t), c("YYYY", ye, he), c("YYYYY", _e, fe), c("YYYYYY", _e, fe), k(["YYYYY", "YYYYYY"], S), k("YYYY", function(e, t) {
        t[S] = 2 === e.length ? p.parseTwoDigitYear(e) : b(e)
    }), k("YY", function(e, t) {
        t[S] = p.parseTwoDigitYear(e)
    }), k("Y", function(e, t) {
        t[S] = parseInt(e, 10)
    }), p.parseTwoDigitYear = function(e) {
        return b(e) + (68 < b(e) ? 1900 : 2e3)
    };
    var C, Fe = Pe("FullYear", !0);

    function Pe(t, n) {
        return function(e) {
            return null != e ? (Ee(this, t, e), p.updateOffset(this, n), this) : Ne(this, t)
        }
    }

    function Ne(e, t) {
        if (!e.isValid()) return NaN;
        var n = e._d,
            i = e._isUTC;
        switch (t) {
            case "Milliseconds":
                return i ? n.getUTCMilliseconds() : n.getMilliseconds();
            case "Seconds":
                return i ? n.getUTCSeconds() : n.getSeconds();
            case "Minutes":
                return i ? n.getUTCMinutes() : n.getMinutes();
            case "Hours":
                return i ? n.getUTCHours() : n.getHours();
            case "Date":
                return i ? n.getUTCDate() : n.getDate();
            case "Day":
                return i ? n.getUTCDay() : n.getDay();
            case "Month":
                return i ? n.getUTCMonth() : n.getMonth();
            case "FullYear":
                return i ? n.getUTCFullYear() : n.getFullYear();
            default:
                return NaN
        }
    }

    function Ee(e, t, n) {
        var i, r, a;
        if (e.isValid() && !isNaN(n)) {
            switch (i = e._d, r = e._isUTC, t) {
                case "Milliseconds":
                    return r ? i.setUTCMilliseconds(n) : i.setMilliseconds(n);
                case "Seconds":
                    return r ? i.setUTCSeconds(n) : i.setSeconds(n);
                case "Minutes":
                    return r ? i.setUTCMinutes(n) : i.setMinutes(n);
                case "Hours":
                    return r ? i.setUTCHours(n) : i.setHours(n);
                case "Date":
                    return r ? i.setUTCDate(n) : i.setDate(n);
                case "FullYear":
                    break;
                default:
                    return
            }
            t = n, a = e.month(), e = 29 !== (e = e.date()) || 1 !== a || Te(t) ? e : 28, r ? i.setUTCFullYear(t, a, e) : i.setFullYear(t, a, e)
        }
    }

    function Ue(e, t) {
        var n;
        return isNaN(e) || isNaN(t) ? NaN : (n = (t % (n = 12) + n) % n, e += (t - n) / 12, 1 == n ? Te(e) ? 29 : 28 : 31 - n % 7 % 2)
    }
    C = Array.prototype.indexOf || function(e) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1
    }, i("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), i("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), i("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), c("M", n, l), c("MM", n, t), c("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }), c("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }), k(["M", "MM"], function(e, t) {
        t[D] = b(e) - 1
    }), k(["MMM", "MMMM"], function(e, t, n, i) {
        i = n._locale.monthsParse(e, i, n._strict);
        null != i ? t[D] = i : v(n).invalidMonth = e
    });
    var Le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        $e = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Re = r,
        We = r;

    function Ie(e, t) {
        if (e.isValid()) {
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = b(t);
                else if (!_(t = e.localeData().monthsParse(t))) return;
            var n = (n = e.date()) < 29 ? n : Math.min(n, Ue(e.year(), t));
            e._isUTC ? e._d.setUTCMonth(t, n) : e._d.setMonth(t, n)
        }
    }

    function He(e) {
        return null != e ? (Ie(this, e), p.updateOffset(this, !0), this) : Ne(this, "Month")
    }

    function Qe() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, n, i = [], r = [], a = [], s = 0; s < 12; s++) n = u([2e3, s]), t = f(this.monthsShort(n, "")), n = f(this.months(n, "")), i.push(t), r.push(n), a.push(n), a.push(t);
        i.sort(e), r.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function ze(e, t, n, i, r, a, s) {
        var o;
        return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, i, r, a, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, i, r, a, s), o
    }

    function Ve(e) {
        var t;
        return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function Ge(e, t, n) {
        n = 7 + t - n;
        return n - (7 + Ve(e, 0, n).getUTCDay() - t) % 7 - 1
    }

    function Be(e, t, n, i, r) {
        var a, t = 1 + 7 * (t - 1) + (7 + n - i) % 7 + Ge(e, i, r),
            n = t <= 0 ? je(a = e - 1) + t : t > je(e) ? (a = e + 1, t - je(e)) : (a = e, t);
        return {
            year: a,
            dayOfYear: n
        }
    }

    function qe(e, t, n) {
        var i, r, a = Ge(e.year(), t, n),
            a = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
        return a < 1 ? i = a + O(r = e.year() - 1, t, n) : a > O(e.year(), t, n) ? (i = a - O(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = a), {
            week: i,
            year: r
        }
    }

    function O(e, t, n) {
        var i = Ge(e, t, n),
            t = Ge(e + 1, t, n);
        return (je(e) - i + t) / 7
    }
    i("w", ["ww", 2], "wo", "week"), i("W", ["WW", 2], "Wo", "isoWeek"), c("w", n, l), c("ww", n, t), c("W", n, l), c("WW", n, t), xe(["w", "ww", "W", "WW"], function(e, t, n, i) {
        t[i.substr(0, 1)] = b(e)
    });

    function Ze(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    i("d", 0, "do", "day"), i("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), i("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), i("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), i("e", 0, 0, "weekday"), i("E", 0, 0, "isoWeekday"), c("d", n), c("e", n), c("E", n), c("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }), c("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }), c("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }), xe(["dd", "ddd", "dddd"], function(e, t, n, i) {
        i = n._locale.weekdaysParse(e, i, n._strict);
        null != i ? t.d = i : v(n).invalidWeekday = e
    }), xe(["d", "e", "E"], function(e, t, n, i) {
        t[i] = b(e)
    });
    var Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Xe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        et = r,
        tt = r,
        nt = r;

    function it() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, n, i, r = [], a = [], s = [], o = [], l = 0; l < 7; l++) i = u([2e3, 1]).day(l), t = f(this.weekdaysMin(i, "")), n = f(this.weekdaysShort(i, "")), i = f(this.weekdays(i, "")), r.push(t), a.push(n), s.push(i), o.push(t), o.push(n), o.push(i);
        r.sort(e), a.sort(e), s.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function rt() {
        return this.hours() % 12 || 12
    }

    function at(e, t) {
        i(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function st(e, t) {
        return t._meridiemParse
    }
    i("H", ["HH", 2], 0, "hour"), i("h", ["hh", 2], 0, rt), i("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }), i("hmm", 0, 0, function() {
        return "" + rt.apply(this) + a(this.minutes(), 2)
    }), i("hmmss", 0, 0, function() {
        return "" + rt.apply(this) + a(this.minutes(), 2) + a(this.seconds(), 2)
    }), i("Hmm", 0, 0, function() {
        return "" + this.hours() + a(this.minutes(), 2)
    }), i("Hmmss", 0, 0, function() {
        return "" + this.hours() + a(this.minutes(), 2) + a(this.seconds(), 2)
    }), at("a", !0), at("A", !1), c("a", st), c("A", st), c("H", n, d), c("h", n, l), c("k", n, l), c("HH", n, t), c("hh", n, t), c("kk", n, t), c("hmm", me), c("hmmss", pe), c("Hmm", me), c("Hmmss", pe), k(["H", "HH"], x), k(["k", "kk"], function(e, t, n) {
        e = b(e);
        t[x] = 24 === e ? 0 : e
    }), k(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), k(["h", "hh"], function(e, t, n) {
        t[x] = b(e), v(n).bigHour = !0
    }), k("hmm", function(e, t, n) {
        var i = e.length - 2;
        t[x] = b(e.substr(0, i)), t[T] = b(e.substr(i)), v(n).bigHour = !0
    }), k("hmmss", function(e, t, n) {
        var i = e.length - 4,
            r = e.length - 2;
        t[x] = b(e.substr(0, i)), t[T] = b(e.substr(i, 2)), t[Y] = b(e.substr(r)), v(n).bigHour = !0
    }), k("Hmm", function(e, t, n) {
        var i = e.length - 2;
        t[x] = b(e.substr(0, i)), t[T] = b(e.substr(i))
    }), k("Hmmss", function(e, t, n) {
        var i = e.length - 4,
            r = e.length - 2;
        t[x] = b(e.substr(0, i)), t[T] = b(e.substr(i, 2)), t[Y] = b(e.substr(r))
    });
    r = Pe("Hours", !0);
    var ot, lt = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Le,
            monthsShort: $e,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Je,
            weekdaysMin: Ke,
            weekdaysShort: Xe,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        j = {},
        ut = {};

    function dt(e) {
        return e && e.toLowerCase().replace("_", "-")
    }

    function ct(e) {
        for (var t, n, i, r, a = 0; a < e.length;) {
            for (t = (r = dt(e[a]).split("-")).length, n = (n = dt(e[a + 1])) ? n.split("-") : null; 0 < t;) {
                if (i = ht(r.slice(0, t).join("-"))) return i;
                if (n && n.length >= t && function(e, t) {
                        for (var n = Math.min(e.length, t.length), i = 0; i < n; i += 1)
                            if (e[i] !== t[i]) return i;
                        return n
                    }(r, n) >= t - 1) break;
                t--
            }
            a++
        }
        return ot
    }

    function ht(t) {
        var e, n;
        if (void 0 === j[t] && "undefined" != typeof module && module && module.exports && (n = t) && n.match("^[^/\\\\]*$")) try {
            e = ot._abbr, require("./locale/" + t), ft(e)
        } catch (e) {
            j[t] = null
        }
        return j[t]
    }

    function ft(e, t) {
        return e && ((t = y(t) ? F(e) : mt(e, t)) ? ot = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ot._abbr
    }

    function mt(e, t) {
        if (null === t) return delete j[e], null;
        var n, i = lt;
        if (t.abbr = e, null != j[e]) J("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = j[e]._config;
        else if (null != t.parentLocale)
            if (null != j[t.parentLocale]) i = j[t.parentLocale]._config;
            else {
                if (null == (n = ht(t.parentLocale))) return ut[t.parentLocale] || (ut[t.parentLocale] = []), ut[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                i = n._config
            } return j[e] = new K(X(i, t)), ut[e] && ut[e].forEach(function(e) {
            mt(e.name, e.config)
        }), ft(e), j[e]
    }

    function F(e) {
        var t;
        if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return ot;
        if (!g(e)) {
            if (t = ht(e)) return t;
            e = [e]
        }
        return ct(e)
    }

    function pt(e) {
        var t = e._a;
        return t && -2 === v(e).overflow && (t = t[D] < 0 || 11 < t[D] ? D : t[M] < 1 || t[M] > Ue(t[S], t[D]) ? M : t[x] < 0 || 24 < t[x] || 24 === t[x] && (0 !== t[T] || 0 !== t[Y] || 0 !== t[Ye]) ? x : t[T] < 0 || 59 < t[T] ? T : t[Y] < 0 || 59 < t[Y] ? Y : t[Ye] < 0 || 999 < t[Ye] ? Ye : -1, v(e)._overflowDayOfYear && (t < S || M < t) && (t = M), v(e)._overflowWeeks && -1 === t && (t = Ce), v(e)._overflowWeekday && -1 === t && (t = Oe), v(e).overflow = t), e
    }
    var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        _t = /Z|[+-]\d\d(?::?\d\d)?/,
        vt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1]
        ],
        wt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        bt = /^\/?Date\((-?\d+)/i,
        kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        St = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };

    function Dt(e) {
        var t, n, i, r, a, s, o = e._i,
            l = gt.exec(o) || yt.exec(o),
            o = vt.length,
            u = wt.length;
        if (l) {
            for (v(e).iso = !0, t = 0, n = o; t < n; t++)
                if (vt[t][1].exec(l[1])) {
                    r = vt[t][0], i = !1 !== vt[t][2];
                    break
                } if (null == r) e._isValid = !1;
            else {
                if (l[3]) {
                    for (t = 0, n = u; t < n; t++)
                        if (wt[t][1].exec(l[3])) {
                            a = (l[2] || " ") + wt[t][0];
                            break
                        } if (null == a) return void(e._isValid = !1)
                }
                if (i || null == a) {
                    if (l[4]) {
                        if (!_t.exec(l[4])) return void(e._isValid = !1);
                        s = "Z"
                    }
                    e._f = r + (a || "") + (s || ""), Ct(e)
                } else e._isValid = !1
            }
        } else e._isValid = !1
    }

    function Mt(e, t, n, i, r, a) {
        e = [function(e) {
            e = parseInt(e, 10);
            {
                if (e <= 49) return 2e3 + e;
                if (e <= 999) return 1900 + e
            }
            return e
        }(e), $e.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
        return a && e.push(parseInt(a, 10)), e
    }

    function xt(e) {
        var t, n, i = kt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        i ? (t = Mt(i[4], i[3], i[2], i[5], i[6], i[7]), function(e, t, n) {
            if (!e || Xe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay()) return 1;
            v(n).weekdayMismatch = !0, n._isValid = !1
        }(i[1], t, e) && (e._a = t, e._tzm = (t = i[8], n = i[9], i = i[10], t ? St[t] : n ? 0 : 60 * (((t = parseInt(i, 10)) - (n = t % 100)) / 100) + n), e._d = Ve.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), v(e).rfc2822 = !0)) : e._isValid = !1
    }

    function Tt(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function Yt(e) {
        var t, n, i, r, a, s, o, l, u, d, c, h = [];
        if (!e._d) {
            for (i = e, r = new Date(p.now()), n = i._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()], e._w && null == e._a[M] && null == e._a[D] && (null != (r = (i = e)._w).GG || null != r.W || null != r.E ? (l = 1, u = 4, a = Tt(r.GG, i._a[S], qe(P(), 1, 4).year), s = Tt(r.W, 1), ((o = Tt(r.E, 1)) < 1 || 7 < o) && (d = !0)) : (l = i._locale._week.dow, u = i._locale._week.doy, c = qe(P(), l, u), a = Tt(r.gg, i._a[S], c.year), s = Tt(r.w, c.week), null != r.d ? ((o = r.d) < 0 || 6 < o) && (d = !0) : null != r.e ? (o = r.e + l, (r.e < 0 || 6 < r.e) && (d = !0)) : o = l), s < 1 || s > O(a, l, u) ? v(i)._overflowWeeks = !0 : null != d ? v(i)._overflowWeekday = !0 : (c = Be(a, s, o, l, u), i._a[S] = c.year, i._dayOfYear = c.dayOfYear)), null != e._dayOfYear && (r = Tt(e._a[S], n[S]), (e._dayOfYear > je(r) || 0 === e._dayOfYear) && (v(e)._overflowDayOfYear = !0), d = Ve(r, 0, e._dayOfYear), e._a[D] = d.getUTCMonth(), e._a[M] = d.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = h[t] = n[t];
            for (; t < 7; t++) e._a[t] = h[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[x] && 0 === e._a[T] && 0 === e._a[Y] && 0 === e._a[Ye] && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? Ve : ze).apply(null, h), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (v(e).weekdayMismatch = !0)
        }
    }

    function Ct(e) {
        if (e._f === p.ISO_8601) Dt(e);
        else if (e._f === p.RFC_2822) xt(e);
        else {
            e._a = [], v(e).empty = !0;
            for (var t, n, i, r, a, s = "" + e._i, o = s.length, l = 0, u = se(e._f, e._locale).match(te) || [], d = u.length, c = 0; c < d; c++) n = u[c], (t = (s.match(Se(n, e)) || [])[0]) && (0 < (i = s.substr(0, s.indexOf(t))).length && v(e).unusedInput.push(i), s = s.slice(s.indexOf(t) + t.length), l += t.length), re[n] ? (t ? v(e).empty = !1 : v(e).unusedTokens.push(n), i = n, a = e, null != (r = t) && h(Me, i) && Me[i](r, a._a, a, i)) : e._strict && !t && v(e).unusedTokens.push(n);
            v(e).charsLeftOver = o - l, 0 < s.length && v(e).unusedInput.push(s), e._a[x] <= 12 && !0 === v(e).bigHour && 0 < e._a[x] && (v(e).bigHour = void 0), v(e).parsedDateParts = e._a.slice(0), v(e).meridiem = e._meridiem, e._a[x] = function(e, t, n) {
                if (null == n) return t;
                return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((e = e.isPM(n)) && t < 12 && (t += 12), t = e || 12 !== t ? t : 0) : t
            }(e._locale, e._a[x], e._meridiem), null !== (o = v(e).era) && (e._a[S] = e._locale.erasConvertYear(o, e._a[S])), Yt(e), pt(e)
        }
    }

    function Ot(e) {
        var t, n, i, r = e._i,
            a = e._f;
        if (e._locale = e._locale || F(e._l), null === r || void 0 === a && "" === r) return H({
            nullInput: !0
        });
        if ("string" == typeof r && (e._i = r = e._locale.preparse(r)), w(r)) return new B(pt(r));
        if (A(r)) e._d = r;
        else if (g(a)) {
            var s, o, l, u, d, c, h = e,
                f = !1,
                m = h._f.length;
            if (0 === m) v(h).invalidFormat = !0, h._d = new Date(NaN);
            else {
                for (u = 0; u < m; u++) d = 0, c = !1, s = G({}, h), null != h._useUTC && (s._useUTC = h._useUTC), s._f = h._f[u], Ct(s), I(s) && (c = !0), d = (d += v(s).charsLeftOver) + 10 * v(s).unusedTokens.length, v(s).score = d, f ? d < l && (l = d, o = s) : (null == l || d < l || c) && (l = d, o = s, c) && (f = !0);
                W(h, o || s)
            }
        } else if (a) Ct(e);
        else if (y(a = (r = e)._i)) r._d = new Date(p.now());
        else A(a) ? r._d = new Date(a.valueOf()) : "string" == typeof a ? (n = r, null !== (t = bt.exec(n._i)) ? n._d = new Date(+t[1]) : (Dt(n), !1 === n._isValid && (delete n._isValid, xt(n), !1 === n._isValid) && (delete n._isValid, n._strict ? n._isValid = !1 : p.createFromInputFallback(n)))) : g(a) ? (r._a = R(a.slice(0), function(e) {
            return parseInt(e, 10)
        }), Yt(r)) : L(a) ? (t = r)._d || (i = void 0 === (n = le(t._i)).day ? n.date : n.day, t._a = R([n.year, n.month, i, n.hour, n.minute, n.second, n.millisecond], function(e) {
            return e && parseInt(e, 10)
        }), Yt(t)) : _(a) ? r._d = new Date(a) : p.createFromInputFallback(r);
        return I(e) || (e._d = null), e
    }

    function jt(e, t, n, i, r) {
        var a = {};
        return !0 !== t && !1 !== t || (i = t, t = void 0), !0 !== n && !1 !== n || (i = n, n = void 0), (L(e) && $(e) || g(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = n, a._i = e, a._f = t, a._strict = i, (r = new B(pt(Ot(r = a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
    }

    function P(e, t, n, i) {
        return jt(e, t, n, i, !1)
    }
    p.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), p.ISO_8601 = function() {}, p.RFC_2822 = function() {};
    me = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = P.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : H()
    }), pe = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = P.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : H()
    });

    function Ft(e, t) {
        var n, i;
        if (!(t = 1 === t.length && g(t[0]) ? t[0] : t).length) return P();
        for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Nt(e) {
        var e = le(e),
            t = e.year || 0,
            n = e.quarter || 0,
            i = e.month || 0,
            r = e.week || e.isoWeek || 0,
            a = e.day || 0,
            s = e.hour || 0,
            o = e.minute || 0,
            l = e.second || 0,
            u = e.millisecond || 0;
        this._isValid = function(e) {
            var t, n, i = !1,
                r = Pt.length;
            for (t in e)
                if (h(e, t) && (-1 === C.call(Pt, t) || null != e[t] && isNaN(e[t]))) return !1;
            for (n = 0; n < r; ++n)
                if (e[Pt[n]]) {
                    if (i) return !1;
                    parseFloat(e[Pt[n]]) !== b(e[Pt[n]]) && (i = !0)
                } return !0
        }(e), this._milliseconds = +u + 1e3 * l + 6e4 * o + 1e3 * s * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * n + 12 * t, this._data = {}, this._locale = F(), this._bubble()
    }

    function Et(e) {
        return e instanceof Nt
    }

    function Ut(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function Lt(e, n) {
        i(e, 0, 0, function() {
            var e = this.utcOffset(),
                t = "+";
            return e < 0 && (e = -e, t = "-"), t + a(~~(e / 60), 2) + n + a(~~e % 60, 2)
        })
    }
    Lt("Z", ":"), Lt("ZZ", ""), c("Z", ke), c("ZZ", ke), k(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0, n._tzm = At(ke, e)
    });
    var $t = /([\+\-]|\d\d)/gi;

    function At(e, t) {
        var t = (t || "").match(e);
        return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match($t) || ["-", 0, 0])[1] + b(e[2])) ? 0 : "+" === e[0] ? t : -t
    }

    function Rt(e, t) {
        var n;
        return t._isUTC ? (t = t.clone(), n = (w(e) || A(e) ? e : P(e)).valueOf() - t.valueOf(), t._d.setTime(t._d.valueOf() + n), p.updateOffset(t, !1), t) : P(e).local()
    }

    function Wt(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }

    function It() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    p.updateOffset = function() {};
    var Ht = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Qt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function N(e, t) {
        var n, i = e;
        return Et(e) ? i = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : _(e) || !isNaN(+e) ? (i = {}, t ? i[t] = +e : i.milliseconds = +e) : (t = Ht.exec(e)) ? (n = "-" === t[1] ? -1 : 1, i = {
            y: 0,
            d: b(t[M]) * n,
            h: b(t[x]) * n,
            m: b(t[T]) * n,
            s: b(t[Y]) * n,
            ms: b(Ut(1e3 * t[Ye])) * n
        }) : (t = Qt.exec(e)) ? (n = "-" === t[1] ? -1 : 1, i = {
            y: zt(t[2], n),
            M: zt(t[3], n),
            w: zt(t[4], n),
            d: zt(t[5], n),
            h: zt(t[6], n),
            m: zt(t[7], n),
            s: zt(t[8], n)
        }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (t = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            t = Rt(t, e), e.isBefore(t) ? n = Vt(e, t) : ((n = Vt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(P(i.from), P(i.to)), (i = {}).ms = t.milliseconds, i.M = t.months), n = new Nt(i), Et(e) && h(e, "_locale") && (n._locale = e._locale), Et(e) && h(e, "_isValid") && (n._isValid = e._isValid), n
    }

    function zt(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t
    }

    function Vt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function Gt(i, r) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (J(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Bt(this, N(e, t), i), this
        }
    }

    function Bt(e, t, n, i) {
        var r = t._milliseconds,
            a = Ut(t._days),
            t = Ut(t._months);
        e.isValid() && (i = null == i || i, t && Ie(e, Ne(e, "Month") + t * n), a && Ee(e, "Date", Ne(e, "Date") + a * n), r && e._d.setTime(e._d.valueOf() + r * n), i) && p.updateOffset(e, a || t)
    }
    N.fn = Nt.prototype, N.invalid = function() {
        return N(NaN)
    };
    Le = Gt(1, "add"), Je = Gt(-1, "subtract");

    function qt(e) {
        return "string" == typeof e || e instanceof String
    }

    function Zt(e) {
        return w(e) || A(e) || qt(e) || _(e) || function(t) {
            var e = g(t),
                n = !1;
            e && (n = 0 === t.filter(function(e) {
                return !_(e) && qt(t)
            }).length);
            return e && n
        }(e) || function(e) {
            var t, n, i = L(e) && !$(e),
                r = !1,
                a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                s = a.length;
            for (t = 0; t < s; t += 1) n = a[t], r = r || h(e, n);
            return i && r
        }(e) || null == e
    }

    function Jt(e, t) {
        var n, i;
        return e.date() < t.date() ? -Jt(t, e) : -((n = 12 * (t.year() - e.year()) + (t.month() - e.month())) + (t - (i = e.clone().add(n, "months")) < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(1 + n, "months") - i))) || 0
    }

    function Xt(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = F(e)) && (this._locale = e), this)
    }
    p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    Ke = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function Kt() {
        return this._locale
    }
    var en = 126227808e5;

    function tn(e, t) {
        return (e % t + t) % t
    }

    function nn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en : new Date(e, t, n).valueOf()
    }

    function rn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n)
    }

    function an(e, t) {
        return t.erasAbbrRegex(e)
    }

    function sn() {
        for (var e, t, n, i = [], r = [], a = [], s = [], o = this.eras(), l = 0, u = o.length; l < u; ++l) e = f(o[l].name), t = f(o[l].abbr), n = f(o[l].narrow), r.push(e), i.push(t), a.push(n), s.push(e), s.push(t), s.push(n);
        this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function on(e, t) {
        i(0, [e, e.length], 0, t)
    }

    function ln(e, t, n, i, r) {
        var a;
        return null == e ? qe(this, i, r).year : (a = O(e, i, r), function(e, t, n, i, r) {
            e = Be(e, t, n, i, r), t = Ve(e.year, 0, e.dayOfYear);
            return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this
        }.call(this, e, t = a < t ? a : t, n, i, r))
    }
    i("N", 0, 0, "eraAbbr"), i("NN", 0, 0, "eraAbbr"), i("NNN", 0, 0, "eraAbbr"), i("NNNN", 0, 0, "eraName"), i("NNNNN", 0, 0, "eraNarrow"), i("y", ["y", 1], "yo", "eraYear"), i("y", ["yy", 2], 0, "eraYear"), i("y", ["yyy", 3], 0, "eraYear"), i("y", ["yyyy", 4], 0, "eraYear"), c("N", an), c("NN", an), c("NNN", an), c("NNNN", function(e, t) {
        return t.erasNameRegex(e)
    }), c("NNNNN", function(e, t) {
        return t.erasNarrowRegex(e)
    }), k(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, i) {
        i = n._locale.erasParse(e, i, n._strict);
        i ? v(n).era = i : v(n).invalidEra = e
    }), c("y", ve), c("yy", ve), c("yyy", ve), c("yyyy", ve), c("yo", function(e, t) {
        return t._eraYearOrdinalRegex || ve
    }), k(["y", "yy", "yyy", "yyyy"], S), k(["yo"], function(e, t, n, i) {
        var r;
        n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[S] = n._locale.eraYearOrdinalParse(e, r) : t[S] = parseInt(e, 10)
    }), i(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), i(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), on("GGGGG", "isoWeekYear"), c("G", we), c("g", we), c("GG", n, t), c("gg", n, t), c("GGGG", ye, he), c("gggg", ye, he), c("GGGGG", _e, fe), c("ggggg", _e, fe), xe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
        t[i.substr(0, 2)] = b(e)
    }), xe(["gg", "GG"], function(e, t, n, i) {
        t[i] = p.parseTwoDigitYear(e)
    }), i("Q", 0, "Qo", "quarter"), c("Q", de), k("Q", function(e, t) {
        t[D] = 3 * (b(e) - 1)
    }), i("D", ["DD", 2], "Do", "date"), c("D", n, l), c("DD", n, t), c("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), k(["D", "DD"], M), k("Do", function(e, t) {
        t[M] = b(e.match(n)[0])
    });
    ye = Pe("Date", !0);
    i("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), c("DDD", ge), c("DDDD", ce), k(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = b(e)
    }), i("m", ["mm", 2], 0, "minute"), c("m", n, d), c("mm", n, t), k(["m", "mm"], T);
    var un, he = Pe("Minutes", !1),
        _e = (i("s", ["ss", 2], 0, "second"), c("s", n, d), c("ss", n, t), k(["s", "ss"], Y), Pe("Seconds", !1));
    for (i("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), i(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), i(0, ["SSS", 3], 0, "millisecond"), i(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), i(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), i(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), i(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), i(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), i(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), c("S", ge, de), c("SS", ge, t), c("SSS", ge, ce), un = "SSSS"; un.length <= 9; un += "S") c(un, ve);

    function dn(e, t) {
        t[Ye] = b(1e3 * ("0." + e))
    }
    for (un = "S"; un.length <= 9; un += "S") k(un, dn);
    fe = Pe("Milliseconds", !1), i("z", 0, 0, "zoneAbbr"), i("zz", 0, 0, "zoneName");
    l = B.prototype;

    function cn(e) {
        return e
    }
    l.add = Le, l.calendar = function(e, t) {
        1 === arguments.length && (arguments[0] ? Zt(arguments[0]) ? (e = arguments[0], t = void 0) : function(e) {
            for (var t = L(e) && !$(e), n = !1, i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], r = 0; r < i.length; r += 1) n = n || h(e, i[r]);
            return t && n
        }(arguments[0]) && (t = arguments[0], e = void 0) : t = e = void 0);
        var e = e || P(),
            n = Rt(e, this).startOf("day"),
            n = p.calendarFormat(this, n) || "sameElse",
            t = t && (s(t[n]) ? t[n].call(this, e) : t[n]);
        return this.format(t || this.localeData().calendar(n, this, P(e)))
    }, l.clone = function() {
        return new B(this)
    }, l.diff = function(e, t, n) {
        var i, r, a;
        if (!this.isValid()) return NaN;
        if (!(i = Rt(e, this)).isValid()) return NaN;
        switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = o(t)) {
            case "year":
                a = Jt(this, i) / 12;
                break;
            case "month":
                a = Jt(this, i);
                break;
            case "quarter":
                a = Jt(this, i) / 3;
                break;
            case "second":
                a = (this - i) / 1e3;
                break;
            case "minute":
                a = (this - i) / 6e4;
                break;
            case "hour":
                a = (this - i) / 36e5;
                break;
            case "day":
                a = (this - i - r) / 864e5;
                break;
            case "week":
                a = (this - i - r) / 6048e5;
                break;
            default:
                a = this - i
        }
        return n ? a : m(a)
    }, l.endOf = function(e) {
        var t, n;
        if (void 0 !== (e = o(e)) && "millisecond" !== e && this.isValid()) {
            switch (n = this._isUTC ? rn : nn, e) {
                case "year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    t = this._d.valueOf(), t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                    break;
                case "minute":
                    t = this._d.valueOf(), t += 6e4 - tn(t, 6e4) - 1;
                    break;
                case "second":
                    t = this._d.valueOf(), t += 1e3 - tn(t, 1e3) - 1
            }
            this._d.setTime(t), p.updateOffset(this, !0)
        }
        return this
    }, l.format = function(e) {
        return e = e || (this.isUtc() ? p.defaultFormatUtc : p.defaultFormat), e = ae(this, e), this.localeData().postformat(e)
    }, l.from = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || P(e).isValid()) ? N({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, l.fromNow = function(e) {
        return this.from(P(), e)
    }, l.to = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || P(e).isValid()) ? N({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, l.toNow = function(e) {
        return this.to(P(), e)
    }, l.get = function(e) {
        return s(this[e = o(e)]) ? this[e]() : this
    }, l.invalidAt = function() {
        return v(this).overflow
    }, l.isAfter = function(e, t) {
        return e = w(e) ? e : P(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = o(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
    }, l.isBefore = function(e, t) {
        return e = w(e) ? e : P(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = o(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
    }, l.isBetween = function(e, t, n, i) {
        return e = w(e) ? e : P(e), t = w(t) ? t : P(t), !!(this.isValid() && e.isValid() && t.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }, l.isSame = function(e, t) {
        var e = w(e) ? e : P(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = o(t) || "millisecond") ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
    }, l.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, l.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, l.isValid = function() {
        return I(this)
    }, l.lang = Ke, l.locale = Xt, l.localeData = Kt, l.max = pe, l.min = me, l.parsingFlags = function() {
        return W({}, v(this))
    }, l.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                    var t, n = [];
                    for (t in e) h(e, t) && n.push({
                        unit: t,
                        priority: ue[t]
                    });
                    return n.sort(function(e, t) {
                        return e.priority - t.priority
                    }), n
                }(e = le(e)), i = n.length, r = 0; r < i; r++) this[n[r].unit](e[n[r].unit]);
        else if (s(this[e = o(e)])) return this[e](t);
        return this
    }, l.startOf = function(e) {
        var t, n;
        if (void 0 !== (e = o(e)) && "millisecond" !== e && this.isValid()) {
            switch (n = this._isUTC ? rn : nn, e) {
                case "year":
                    t = n(this.year(), 0, 1);
                    break;
                case "quarter":
                    t = n(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    t = n(this.year(), this.month(), 1);
                    break;
                case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    t = n(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    t = this._d.valueOf(), t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                    break;
                case "minute":
                    t = this._d.valueOf(), t -= tn(t, 6e4);
                    break;
                case "second":
                    t = this._d.valueOf(), t -= tn(t, 1e3)
            }
            this._d.setTime(t), p.updateOffset(this, !0)
        }
        return this
    }, l.subtract = Je, l.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, l.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, l.toDate = function() {
        return new Date(this.valueOf())
    }, l.toISOString = function(e) {
        var t;
        return this.isValid() ? (t = (e = !0 !== e) ? this.clone().utc() : this).year() < 0 || 9999 < t.year() ? ae(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : s(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", ae(t, "Z")) : ae(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") : null
    }, l.inspect = function() {
        var e, t, n;
        return this.isValid() ? (t = "moment", e = "", this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z"), t = "[" + t + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(t + n + "-MM-DD[T]HH:mm:ss.SSS" + (e + '[")]'))) : "moment.invalid(/* " + this._i + " */)"
    }, "undefined" != typeof Symbol && null != Symbol.for && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }), l.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, l.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, l.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, l.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, l.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }, l.eraName = function() {
        for (var e, t = this.localeData().eras(), n = 0, i = t.length; n < i; ++n) {
            if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].name;
            if (t[n].until <= e && e <= t[n].since) return t[n].name
        }
        return ""
    }, l.eraNarrow = function() {
        for (var e, t = this.localeData().eras(), n = 0, i = t.length; n < i; ++n) {
            if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].narrow;
            if (t[n].until <= e && e <= t[n].since) return t[n].narrow
        }
        return ""
    }, l.eraAbbr = function() {
        for (var e, t = this.localeData().eras(), n = 0, i = t.length; n < i; ++n) {
            if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].abbr;
            if (t[n].until <= e && e <= t[n].since) return t[n].abbr
        }
        return ""
    }, l.eraYear = function() {
        for (var e, t, n = this.localeData().eras(), i = 0, r = n.length; i < r; ++i)
            if (e = n[i].since <= n[i].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), n[i].since <= t && t <= n[i].until || n[i].until <= t && t <= n[i].since) return (this.year() - p(n[i].since).year()) * e + n[i].offset;
        return this.year()
    }, l.year = Fe, l.isLeapYear = function() {
        return Te(this.year())
    }, l.weekYear = function(e) {
        return ln.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }, l.isoWeekYear = function(e) {
        return ln.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, l.quarter = l.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, l.month = He, l.daysInMonth = function() {
        return Ue(this.year(), this.month())
    }, l.week = l.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, l.isoWeek = l.isoWeeks = function(e) {
        var t = qe(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, l.weeksInYear = function() {
        var e = this.localeData()._week;
        return O(this.year(), e.dow, e.doy)
    }, l.weeksInWeekYear = function() {
        var e = this.localeData()._week;
        return O(this.weekYear(), e.dow, e.doy)
    }, l.isoWeeksInYear = function() {
        return O(this.year(), 1, 4)
    }, l.isoWeeksInISOWeekYear = function() {
        return O(this.isoWeekYear(), 1, 4)
    }, l.date = ye, l.day = l.days = function(e) {
        var t, n, i;
        return this.isValid() ? (t = Ne(this, "Day"), null != e ? (n = e, i = this.localeData(), e = "string" != typeof n ? n : isNaN(n) ? "number" == typeof(n = i.weekdaysParse(n)) ? n : null : parseInt(n, 10), this.add(e - t, "d")) : t) : null != e ? this : NaN
    }, l.weekday = function(e) {
        var t;
        return this.isValid() ? (t = (this.day() + 7 - this.localeData()._week.dow) % 7, null == e ? t : this.add(e - t, "d")) : null != e ? this : NaN
    }, l.isoWeekday = function(e) {
        var t, n;
        return this.isValid() ? null != e ? (t = e, n = this.localeData(), n = "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t, this.day(this.day() % 7 ? n : n - 7)) : this.day() || 7 : null != e ? this : NaN
    }, l.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, l.hour = l.hours = r, l.minute = l.minutes = he, l.second = l.seconds = _e, l.millisecond = l.milliseconds = fe, l.utcOffset = function(e, t, n) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? r : Wt(this);
        if ("string" == typeof e) {
            if (null === (e = At(ke, e))) return this
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (i = Wt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Bt(this, N(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this
    }, l.utc = function(e) {
        return this.utcOffset(0, e)
    }, l.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e) && this.subtract(Wt(this), "m"), this
    }, l.parseZone = function() {
        var e;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = At(be, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
    }, l.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? P(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, l.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, l.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }, l.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }, l.isUtc = It, l.isUTC = It, l.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }, l.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, l.dates = e("dates accessor is deprecated. Use date instead.", ye), l.months = e("months accessor is deprecated. Use month instead", He), l.years = e("years accessor is deprecated. Use year instead", Fe), l.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset()
    }), l.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        var e, t;
        return y(this._isDSTShifted) && (G(e = {}, this), (e = Ot(e))._a ? (t = (e._isUTC ? u : P)(e._a), this._isDSTShifted = this.isValid() && 0 < function(e, t, n) {
            for (var i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0, s = 0; s < i; s++)(n && e[s] !== t[s] || !n && b(e[s]) !== b(t[s])) && a++;
            return a + r
        }(e._a, t.toArray())) : this._isDSTShifted = !1), this._isDSTShifted
    });
    d = K.prototype;

    function hn(e, t, n, i) {
        var r = F(),
            i = u().set(i, t);
        return r[n](i, e)
    }

    function fn(e, t, n) {
        if (_(e) && (t = e, e = void 0), e = e || "", null != t) return hn(e, t, n, "month");
        for (var i = [], r = 0; r < 12; r++) i[r] = hn(e, r, n, "month");
        return i
    }

    function mn(e, t, n, i) {
        t = ("boolean" == typeof e ? _(t) && (n = t, t = void 0) : (t = e, e = !1, _(n = t) && (n = t, t = void 0)), t || "");
        var r, a = F(),
            s = e ? a._week.dow : 0,
            o = [];
        if (null != n) return hn(t, (n + s) % 7, i, "day");
        for (r = 0; r < 7; r++) o[r] = hn(t, (r + s) % 7, i, "day");
        return o
    }
    d.calendar = function(e, t, n) {
        return s(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e
    }, d.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.match(te).map(function(e) {
            return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
        }).join(""), this._longDateFormat[e])
    }, d.invalidDate = function() {
        return this._invalidDate
    }, d.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }, d.preparse = cn, d.postformat = cn, d.relativeTime = function(e, t, n, i) {
        var r = this._relativeTime[n];
        return s(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
    }, d.pastFuture = function(e, t) {
        return s(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t)
    }, d.set = function(e) {
        var t, n;
        for (n in e) h(e, n) && (s(t = e[n]) ? this[n] = t : this["_" + n] = t);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, d.eras = function(e, t) {
        for (var n, i = this._eras || F("en")._eras, r = 0, a = i.length; r < a; ++r) switch ("string" == typeof i[r].since && (n = p(i[r].since).startOf("day"), i[r].since = n.valueOf()), typeof i[r].until) {
            case "undefined":
                i[r].until = 1 / 0;
                break;
            case "string":
                n = p(i[r].until).startOf("day").valueOf(), i[r].until = n.valueOf()
        }
        return i
    }, d.erasParse = function(e, t, n) {
        var i, r, a, s, o, l = this.eras();
        for (e = e.toUpperCase(), i = 0, r = l.length; i < r; ++i)
            if (a = l[i].name.toUpperCase(), s = l[i].abbr.toUpperCase(), o = l[i].narrow.toUpperCase(), n) switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (s === e) return l[i];
                    break;
                case "NNNN":
                    if (a === e) return l[i];
                    break;
                case "NNNNN":
                    if (o === e) return l[i]
            } else if (0 <= [a, s, o].indexOf(e)) return l[i]
    }, d.erasConvertYear = function(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t ? p(e.since).year() : p(e.since).year() + (t - e.offset) * n
    }, d.erasAbbrRegex = function(e) {
        return h(this, "_erasAbbrRegex") || sn.call(this), e ? this._erasAbbrRegex : this._erasRegex
    }, d.erasNameRegex = function(e) {
        return h(this, "_erasNameRegex") || sn.call(this), e ? this._erasNameRegex : this._erasRegex
    }, d.erasNarrowRegex = function(e) {
        return h(this, "_erasNarrowRegex") || sn.call(this), e ? this._erasNarrowRegex : this._erasRegex
    }, d.months = function(e, t) {
        return e ? (g(this._months) ? this._months : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"])[e.month()] : g(this._months) ? this._months : this._months.standalone
    }, d.monthsShort = function(e, t) {
        return e ? (g(this._monthsShort) ? this._monthsShort : this._monthsShort[Ae.test(t) ? "format" : "standalone"])[e.month()] : g(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, d.monthsParse = function(e, t, n) {
        var i, r;
        if (this._monthsParseExact) return function(e, t, n) {
            var i, r, a, e = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) a = u([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(a, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (r = C.call(this._shortMonthsParse, e)) ? r : null : -1 !== (r = C.call(this._longMonthsParse, e)) ? r : null : "MMM" === t ? -1 !== (r = C.call(this._shortMonthsParse, e)) || -1 !== (r = C.call(this._longMonthsParse, e)) ? r : null : -1 !== (r = C.call(this._longMonthsParse, e)) || -1 !== (r = C.call(this._shortMonthsParse, e)) ? r : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
            if (r = u([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
            if (!n && this._monthsParse[i].test(e)) return i
        }
    }, d.monthsRegex = function(e) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || Qe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, d.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || Qe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Re), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, d.week = function(e) {
        return qe(e, this._week.dow, this._week.doy).week
    }, d.firstDayOfYear = function() {
        return this._week.doy
    }, d.firstDayOfWeek = function() {
        return this._week.dow
    }, d.weekdays = function(e, t) {
        return t = g(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"], !0 === e ? Ze(t, this._week.dow) : e ? t[e.day()] : t
    }, d.weekdaysMin = function(e) {
        return !0 === e ? Ze(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, d.weekdaysShort = function(e) {
        return !0 === e ? Ze(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, d.weekdaysParse = function(e, t, n) {
        var i, r;
        if (this._weekdaysParseExact) return function(e, t, n) {
            var i, r, a, e = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) a = u([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(a, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (r = C.call(this._weekdaysParse, e)) ? r : null : "ddd" === t ? -1 !== (r = C.call(this._shortWeekdaysParse, e)) ? r : null : -1 !== (r = C.call(this._minWeekdaysParse, e)) ? r : null : "dddd" === t ? -1 !== (r = C.call(this._weekdaysParse, e)) || -1 !== (r = C.call(this._shortWeekdaysParse, e)) || -1 !== (r = C.call(this._minWeekdaysParse, e)) ? r : null : "ddd" === t ? -1 !== (r = C.call(this._shortWeekdaysParse, e)) || -1 !== (r = C.call(this._weekdaysParse, e)) || -1 !== (r = C.call(this._minWeekdaysParse, e)) ? r : null : -1 !== (r = C.call(this._minWeekdaysParse, e)) || -1 !== (r = C.call(this._weekdaysParse, e)) || -1 !== (r = C.call(this._shortWeekdaysParse, e)) ? r : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
            if (r = u([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
            if (!n && this._weekdaysParse[i].test(e)) return i
        }
    }, d.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || it.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = et), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, d.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || it.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, d.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || it.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = nt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, d.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, d.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, ft("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === b(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }), p.lang = e("moment.lang is deprecated. Use moment.locale instead.", ft), p.langData = e("moment.langData is deprecated. Use moment.localeData instead.", F);
    var pn = Math.abs;

    function gn(e, t, n, i) {
        t = N(t, n);
        return e._milliseconds += i * t._milliseconds, e._days += i * t._days, e._months += i * t._months, e._bubble()
    }

    function yn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function _n(e) {
        return 4800 * e / 146097
    }

    function vn(e) {
        return 146097 * e / 4800
    }

    function wn(e) {
        return function() {
            return this.as(e)
        }
    }
    de = wn("ms"), t = wn("s"), ge = wn("m"), ce = wn("h"), Le = wn("d"), pe = wn("w"), me = wn("M"), Je = wn("Q"), r = wn("y"), he = de;

    function bn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var _e = bn("milliseconds"),
        fe = bn("seconds"),
        ye = bn("minutes"),
        Fe = bn("hours"),
        d = bn("days"),
        kn = bn("months"),
        Sn = bn("years");
    var Dn = Math.round,
        Mn = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };

    function xn(e, t, n, i) {
        var r = N(e).abs(),
            a = Dn(r.as("s")),
            s = Dn(r.as("m")),
            o = Dn(r.as("h")),
            l = Dn(r.as("d")),
            u = Dn(r.as("M")),
            d = Dn(r.as("w")),
            r = Dn(r.as("y")),
            a = (a <= n.ss ? ["s", a] : a < n.s && ["ss", a]) || (s <= 1 ? ["m"] : s < n.m && ["mm", s]) || (o <= 1 ? ["h"] : o < n.h && ["hh", o]) || (l <= 1 ? ["d"] : l < n.d && ["dd", l]);
        return (a = (a = null != n.w ? a || (d <= 1 ? ["w"] : d < n.w && ["ww", d]) : a) || (u <= 1 ? ["M"] : u < n.M && ["MM", u]) || (r <= 1 ? ["y"] : ["yy", r]))[2] = t, a[3] = 0 < +e, a[4] = i,
            function(e, t, n, i, r) {
                return r.relativeTime(t || 1, !!n, e, i)
            }.apply(null, a)
    }
    var Tn = Math.abs;

    function Yn(e) {
        return (0 < e) - (e < 0) || +e
    }

    function Cn() {
        var e, t, n, i, r, a, s, o, l, u, d;
        return this.isValid() ? (e = Tn(this._milliseconds) / 1e3, t = Tn(this._days), n = Tn(this._months), (o = this.asSeconds()) ? (i = m(e / 60), r = m(i / 60), e %= 60, i %= 60, a = m(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = Yn(this._months) !== Yn(o) ? "-" : "", u = Yn(this._days) !== Yn(o) ? "-" : "", d = Yn(this._milliseconds) !== Yn(o) ? "-" : "", (o < 0 ? "-" : "") + "P" + (a ? l + a + "Y" : "") + (n ? l + n + "M" : "") + (t ? u + t + "D" : "") + (r || i || e ? "T" : "") + (r ? d + r + "H" : "") + (i ? d + i + "M" : "") + (e ? d + s + "S" : "")) : "P0D") : this.localeData().invalidDate()
    }
    var E = Nt.prototype;
    return E.isValid = function() {
        return this._isValid
    }, E.abs = function() {
        var e = this._data;
        return this._milliseconds = pn(this._milliseconds), this._days = pn(this._days), this._months = pn(this._months), e.milliseconds = pn(e.milliseconds), e.seconds = pn(e.seconds), e.minutes = pn(e.minutes), e.hours = pn(e.hours), e.months = pn(e.months), e.years = pn(e.years), this
    }, E.add = function(e, t) {
        return gn(this, e, t, 1)
    }, E.subtract = function(e, t) {
        return gn(this, e, t, -1)
    }, E.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, i = this._milliseconds;
        if ("month" === (e = o(e)) || "quarter" === e || "year" === e) switch (t = this._days + i / 864e5, n = this._months + _n(t), e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
        } else switch (t = this._days + Math.round(vn(this._months)), e) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return 24 * t + i / 36e5;
            case "minute":
                return 1440 * t + i / 6e4;
            case "second":
                return 86400 * t + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, E.asMilliseconds = de, E.asSeconds = t, E.asMinutes = ge, E.asHours = ce, E.asDays = Le, E.asWeeks = pe, E.asMonths = me, E.asQuarters = Je, E.asYears = r, E.valueOf = he, E._bubble = function() {
        var e = this._milliseconds,
            t = this._days,
            n = this._months,
            i = this._data;
        return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * yn(vn(n) + t), n = t = 0), i.milliseconds = e % 1e3, e = m(e / 1e3), i.seconds = e % 60, e = m(e / 60), i.minutes = e % 60, e = m(e / 60), i.hours = e % 24, t += m(e / 24), n += e = m(_n(t)), t -= yn(vn(e)), e = m(n / 12), n %= 12, i.days = t, i.months = n, i.years = e, this
    }, E.clone = function() {
        return N(this)
    }, E.get = function(e) {
        return e = o(e), this.isValid() ? this[e + "s"]() : NaN
    }, E.milliseconds = _e, E.seconds = fe, E.minutes = ye, E.hours = Fe, E.days = d, E.weeks = function() {
        return m(this.days() / 7)
    }, E.months = kn, E.years = Sn, E.humanize = function(e, t) {
        var n, i;
        return this.isValid() ? (n = !1, i = Mn, "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (n = e), "object" == typeof t && (i = Object.assign({}, Mn, t), null != t.s) && null == t.ss && (i.ss = t.s - 1), e = this.localeData(), t = xn(this, !n, i, e), n && (t = e.pastFuture(+this, t)), e.postformat(t)) : this.localeData().invalidDate()
    }, E.toISOString = Cn, E.toString = Cn, E.toJSON = Cn, E.locale = Xt, E.localeData = Kt, E.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Cn), E.lang = Ke, i("X", 0, 0, "unix"), i("x", 0, 0, "valueOf"), c("x", we), c("X", /[+-]?\d+(\.\d{1,3})?/), k("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e))
    }), k("x", function(e, t, n) {
        n._d = new Date(b(e))
    }), p.version = "2.30.1", U = P, p.fn = l, p.min = function() {
        return Ft("isBefore", [].slice.call(arguments, 0))
    }, p.max = function() {
        return Ft("isAfter", [].slice.call(arguments, 0))
    }, p.now = function() {
        return Date.now ? Date.now() : +new Date
    }, p.utc = u, p.unix = function(e) {
        return P(1e3 * e)
    }, p.months = function(e, t) {
        return fn(e, t, "months")
    }, p.isDate = A, p.locale = ft, p.invalid = H, p.duration = N, p.isMoment = w, p.weekdays = function(e, t, n) {
        return mn(e, t, n, "weekdays")
    }, p.parseZone = function() {
        return P.apply(null, arguments).parseZone()
    }, p.localeData = F, p.isDuration = Et, p.monthsShort = function(e, t) {
        return fn(e, t, "monthsShort")
    }, p.weekdaysMin = function(e, t, n) {
        return mn(e, t, n, "weekdaysMin")
    }, p.defineLocale = mt, p.updateLocale = function(e, t) {
        var n, i;
        return null != t ? (i = lt, null != j[e] && null != j[e].parentLocale ? j[e].set(X(j[e]._config, t)) : (t = X(i = null != (n = ht(e)) ? n._config : i, t), null == n && (t.abbr = e), (i = new K(t)).parentLocale = j[e], j[e] = i), ft(e)) : null != j[e] && (null != j[e].parentLocale ? (j[e] = j[e].parentLocale, e === ft() && ft(e)) : null != j[e] && delete j[e]), j[e]
    }, p.locales = function() {
        return ee(j)
    }, p.weekdaysShort = function(e, t, n) {
        return mn(e, t, n, "weekdaysShort")
    }, p.normalizeUnits = o, p.relativeTimeRounding = function(e) {
        return void 0 === e ? Dn : "function" == typeof e && (Dn = e, !0)
    }, p.relativeTimeThreshold = function(e, t) {
        return void 0 !== Mn[e] && (void 0 === t ? Mn[e] : (Mn[e] = t, "s" === e && (Mn.ss = t - 1), !0))
    }, p.calendarFormat = function(e, t) {
        return (e = e.diff(t, "days", !0)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse"
    }, p.prototype = l, p.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, p
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Mustache = t()
}(this, function() {
    "use strict";
    var t = Object.prototype.toString,
        j = Array.isArray || function(e) {
            return "[object Array]" === t.call(e)
        };

    function d(e) {
        return "function" == typeof e
    }

    function F(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function c(e, t) {
        return null != e && "object" == typeof e && t in e
    }
    var n = RegExp.prototype.test;
    var i = /\S/;

    function P(e) {
        return !n.call(i, e)
    }
    var r = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };
    var N = /\s*/,
        E = /\s+/,
        U = /\s*=/,
        L = /\s*\}/,
        $ = /#|\^|\/|>|\{|&|=|!/;

    function s(e, t) {
        if (!e) return [];
        var n, i, r, a = !1,
            s = [],
            o = [],
            l = [],
            u = !1,
            d = !1,
            c = "",
            h = 0;

        function f() {
            if (u && !d)
                for (; l.length;) delete o[l.pop()];
            else l = [];
            d = u = !1
        }

        function m(e) {
            if ("string" == typeof e && (e = e.split(E, 2)), !j(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
            n = new RegExp(F(e[0]) + "\\s*"), i = new RegExp("\\s*" + F(e[1])), r = new RegExp("\\s*" + F("}" + e[1]))
        }
        m(t || R.tags);
        for (var p, g, y, _, v, w, b = new A(e); !b.eos();) {
            if (p = b.pos, y = b.scanUntil(n))
                for (var k = 0, S = y.length; k < S; ++k) P(_ = y.charAt(k)) ? (l.push(o.length), c += _) : (a = d = !0, c += " "), o.push(["text", _, p, p + 1]), p += 1, "\n" === _ && (f(), c = "", h = 0, a = !1);
            if (!b.scan(n)) break;
            if (u = !0, g = b.scan($) || "name", b.scan(N), "=" === g ? (y = b.scanUntil(U), b.scan(U), b.scanUntil(i)) : "{" === g ? (y = b.scanUntil(r), b.scan(L), b.scanUntil(i), g = "&") : y = b.scanUntil(i), !b.scan(i)) throw new Error("Unclosed tag at " + b.pos);
            if (v = ">" == g ? [g, y, p, b.pos, c, h, a] : [g, y, p, b.pos], h++, o.push(v), "#" === g || "^" === g) s.push(v);
            else if ("/" === g) {
                if (!(w = s.pop())) throw new Error('Unopened section "' + y + '" at ' + p);
                if (w[1] !== y) throw new Error('Unclosed section "' + w[1] + '" at ' + p)
            } else "name" === g || "{" === g || "&" === g ? d = !0 : "=" === g && m(y)
        }
        if (f(), w = s.pop()) throw new Error('Unclosed section "' + w[1] + '" at ' + b.pos);
        for (var D, M = function(e) {
                for (var t, n, i = [], r = 0, a = e.length; r < a; ++r)(t = e[r]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (i.push(t), n = t));
                return i
            }(o), x = [], T = x, Y = [], C = 0, O = M.length; C < O; ++C) switch ((D = M[C])[0]) {
            case "#":
            case "^":
                T.push(D), Y.push(D), T = D[4] = [];
                break;
            case "/":
                Y.pop()[5] = D[2], T = 0 < Y.length ? Y[Y.length - 1][4] : x;
                break;
            default:
                T.push(D)
        }
        return x
    }

    function A(e) {
        this.string = e, this.tail = e, this.pos = 0
    }

    function a(e, t) {
        this.view = e, this.cache = {
            ".": this.view
        }, this.parent = t
    }

    function e() {
        this.templateCache = {
            _cache: {},
            set: function(e, t) {
                this._cache[e] = t
            },
            get: function(e) {
                return this._cache[e]
            },
            clear: function() {
                this._cache = {}
            }
        }
    }
    A.prototype.eos = function() {
        return "" === this.tail
    }, A.prototype.scan = function(e) {
        var e = this.tail.match(e);
        return e && 0 === e.index ? (e = e[0], this.tail = this.tail.substring(e.length), this.pos += e.length, e) : ""
    }, A.prototype.scanUntil = function(e) {
        var t, n = this.tail.search(e);
        switch (n) {
            case -1:
                t = this.tail, this.tail = "";
                break;
            case 0:
                t = "";
                break;
            default:
                t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
        }
        return this.pos += t.length, t
    }, a.prototype.push = function(e) {
        return new a(e, this)
    }, a.prototype.lookup = function(e) {
        var t, n, i, r = this.cache;
        if (r.hasOwnProperty(e)) t = r[e];
        else {
            for (var a, s, o, l = this, u = !1; l;) {
                if (0 < e.indexOf("."))
                    for (a = l.view, s = e.split("."), o = 0; null != a && o < s.length;) o === s.length - 1 && (u = c(a, s[o]) || (n = a, i = s[o], null != n && "object" != typeof n && n.hasOwnProperty && n.hasOwnProperty(i))), a = a[s[o++]];
                else a = l.view[e], u = c(l.view, e);
                if (u) {
                    t = a;
                    break
                }
                l = l.parent
            }
            r[e] = t
        }
        return t = d(t) ? t.call(this.view) : t
    }, e.prototype.clearCache = function() {
        void 0 !== this.templateCache && this.templateCache.clear()
    }, e.prototype.parse = function(e, t) {
        var n = this.templateCache,
            i = e + ":" + (t || R.tags).join(":"),
            r = void 0 !== n,
            a = r ? n.get(i) : void 0;
        return null == a && (a = s(e, t), r) && n.set(i, a), a
    }, e.prototype.render = function(e, t, n, i) {
        var r = this.getConfigTags(i),
            r = this.parse(e, r),
            t = t instanceof a ? t : new a(t, void 0);
        return this.renderTokens(r, t, n, e, i)
    }, e.prototype.renderTokens = function(e, t, n, i, r) {
        for (var a, s, o, l = "", u = 0, d = e.length; u < d; ++u) o = void 0, "#" === (s = (a = e[u])[0]) ? o = this.renderSection(a, t, n, i, r) : "^" === s ? o = this.renderInverted(a, t, n, i, r) : ">" === s ? o = this.renderPartial(a, t, n, r) : "&" === s ? o = this.unescapedValue(a, t) : "name" === s ? o = this.escapedValue(a, t, r) : "text" === s && (o = this.rawValue(a)), void 0 !== o && (l += o);
        return l
    }, e.prototype.renderSection = function(e, t, n, i, r) {
        var a = this,
            s = "",
            o = t.lookup(e[1]);
        if (o) {
            if (j(o))
                for (var l = 0, u = o.length; l < u; ++l) s += this.renderTokens(e[4], t.push(o[l]), n, i, r);
            else if ("object" == typeof o || "string" == typeof o || "number" == typeof o) s += this.renderTokens(e[4], t.push(o), n, i, r);
            else if (d(o)) {
                if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");
                null != (o = o.call(t.view, i.slice(e[3], e[5]), function(e) {
                    return a.render(e, t, n, r)
                })) && (s += o)
            } else s += this.renderTokens(e[4], t, n, i, r);
            return s
        }
    }, e.prototype.renderInverted = function(e, t, n, i, r) {
        var a = t.lookup(e[1]);
        if (!a || j(a) && 0 === a.length) return this.renderTokens(e[4], t, n, i, r)
    }, e.prototype.indentPartial = function(e, t, n) {
        for (var i = t.replace(/[^ \t]/g, ""), r = e.split("\n"), a = 0; a < r.length; a++) r[a].length && (0 < a || !n) && (r[a] = i + r[a]);
        return r.join("\n")
    }, e.prototype.renderPartial = function(e, t, n, i) {
        var r, a, s, o, l;
        if (n) return r = this.getConfigTags(i), null != (a = d(n) ? n(e[1]) : n[e[1]]) ? (s = e[6], l = e[5], e = e[4], o = a, 0 == l && e && (o = this.indentPartial(a, e, s)), l = this.parse(o, r), this.renderTokens(l, t, n, o, i)) : void 0
    }, e.prototype.unescapedValue = function(e, t) {
        t = t.lookup(e[1]);
        if (null != t) return t
    }, e.prototype.escapedValue = function(e, t, n) {
        n = this.getConfigEscape(n) || R.escape, t = t.lookup(e[1]);
        if (null != t) return ("number" == typeof t && n === R.escape ? String : n)(t)
    }, e.prototype.rawValue = function(e) {
        return e[1]
    }, e.prototype.getConfigTags = function(e) {
        return j(e) ? e : e && "object" == typeof e ? e.tags : void 0
    }, e.prototype.getConfigEscape = function(e) {
        if (e && "object" == typeof e && !j(e)) return e.escape
    };
    var R = {
            name: "mustache.js",
            version: "4.2.0",
            tags: ["{{", "}}"],
            clearCache: void 0,
            escape: void 0,
            parse: void 0,
            render: void 0,
            Scanner: void 0,
            Context: void 0,
            Writer: void 0,
            set templateCache(e) {
                o.templateCache = e
            },
            get templateCache() {
                return o.templateCache
            }
        },
        o = new e;
    return R.clearCache = function() {
        return o.clearCache()
    }, R.parse = function(e, t) {
        return o.parse(e, t)
    }, R.render = function(e, t, n, i) {
        if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (j(r = e) ? "array" : typeof r) + '" was given as the first argument for mustache#render(template, view, partials)');
        var r;
        return o.render(e, t, n, i)
    }, R.escape = function(e) {
        return String(e).replace(/[&<>"'`=\/]/g, function(e) {
            return r[e]
        })
    }, R.Scanner = A, R.Context = a, R.Writer = e, R
});
var $tablist = $(".nav-tabs, .nav-pills"),
    $lis = $tablist.children("li"),
    $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]'),
    tabactivate = ($tabs && ($tablist.attr("role", "tablist"), $lis.attr("role", "presentation"), $tabs.attr("role", "tab")), $tabs.each(function(e) {
        var t = $($(this).attr("href")),
            n = $(this),
            i = n.attr("id") || uniqueId("ui-tab");
        n.attr("id", i), n.parent().hasClass("active") ? (n.attr({
            tabIndex: "0",
            "aria-selected": "true",
            "aria-controls": n.attr("href").substr(1)
        }), t.attr({
            role: "tabpanel",
            tabIndex: "0",
            "aria-hidden": "false",
            "aria-labelledby": i
        })) : (n.attr({
            tabIndex: "-1",
            "aria-selected": "false",
            "aria-controls": n.attr("href").substr(1)
        }), t.attr({
            role: "tabpanel",
            tabIndex: "-1",
            "aria-hidden": "true",
            "aria-labelledby": i
        }))
    }), $.fn.tab.Constructor.prototype.keydown = function(e) {
        var t, n = $(this).closest("ul[role=tablist] "),
            i = e.which || e.keyCode;
        $(this);
        /(37|38|39|40)/.test(i) && (t = (n = n.find("[role=tab]:visible")).index(n.filter(":focus")), 38 != i && 37 != i || t--, 39 != i && 40 != i || t++, (t = t < 0 ? n.length - 1 : t) == n.length && (t = 0), "tab" === (i = n.eq(t)).attr("role") && i.tab("show").focus(), e.preventDefault(), e.stopPropagation())
    }, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown), $.fn.tab.Constructor.prototype.activate),
    springSpace = ($.fn.tab.Constructor.prototype.activate = function(e, t, n) {
        var i = t.find("> .active");
        i.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "-1",
            "aria-selected": !1
        }), i.filter(".tab-pane").attr({
            "aria-hidden": !0,
            tabIndex: "-1"
        }), tabactivate.apply(this, arguments), e.addClass("active"), e.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "0",
            "aria-selected": !0
        }), e.filter(".tab-pane").attr({
            "aria-hidden": !1,
            tabIndex: "0"
        })
    }, {
        timeFormat: "h:mma",
        dateFormat: "dddd MMM Do",
        dateShortFormat: "ddd MMM Do YYYY",
        locale: "en-us",
        language: "en",
        currency: "USD",
        currencySymbol: "$",
        defaultTimeFormat: "h:mm A",
        nativeTimeFormat: "HH:mm",
        phpDateFormat: "YYYY-MM-DD",
        phpTimeFormat: "HH:mm",
        phpDateTimeFormat: "YYYY-MM-DD HH:mm",
        googleDateFormat: "YYYY/MM/DD",
        smallScreenSize: 480,
        modalSizeSmall: 700,
        modalSizeMedium: 880,
        modalSizeLarge: 1100,
        fadeOutDuration: 3e3,
        nbspRegex: new RegExp(String.fromCharCode(160), "g"),
        getDateTimeFormat: function() {
            return this.timeFormat + " " + this.dateFormat
        },
        getShortDateTimeFormat: function() {
            return this.timeFormat + " " + this.dateShortFormat
        },
        formatNumber: function(e, t) {
            var n = {
                style: "currency",
                currency: this.currency,
                currencyDisplay: "code"
            };
            return !1 === t && (n.minimumFractionDigits = 0, n.maximumFractionDigits = 0), Number(e).toLocaleString(this.locale, n).replace(this.nbspRegex, "").replace(this.currency, "")
        },
        formatCurrency: function(e) {
            return this.currencySymbol + this.formatNumber(e)
        },
        formatDateTimePair: function(e, t) {
            var n = springSpace.getDateTimeFormat();
            return e.isSame(t, "day") ? e.format(springSpace.timeFormat) + " - " + t.format(n) : e.format(n) + " - " + t.format(n)
        },
        formatDateTime: function(e, t) {
            t = void 0 !== t ? t : null;
            e = moment(e);
            return e.isValid() ? e.format(this.getDateTimeFormat()) : t
        },
        formatTime: function(e, t) {
            t = void 0 !== t ? t : null;
            var n = (new moment).format(springSpace.phpDateFormat),
                n = moment(n + " " + e);
            return n.isValid() ? n.format(springSpace.timeFormat) : t
        },
        formatDate: function(e, t) {
            e = moment(e);
            return e.isValid() ? e.format(this.dateFormat) : void 0 !== t ? t : null
        },
        createDateTimeMoment: function(e, t) {
            void 0 !== t && "" !== t || (t = moment().startOf("day").format(springSpace.timeFormat));
            var n = springSpace.dateFormat + " " + springSpace.timeFormat;
            return moment(e + " " + t, n)
        },
        createLocalMomentFromUtcDate: function(e) {
            return moment.utc(e).tz(springSpace.timezone)
        },
        setupLanguage: function() {
            moment.locale(springSpace.locale), setupDatePickerLanguage()
        }
    });

function disableButton(e, t) {
    ("" == (t = void 0 === t ? "" : t) ? jQuery("#" + e) : jQuery("#" + e).html(t)).prop("disabled", !0)
}

function enableButton(e, t) {
    ("" == (t = void 0 === t ? "" : t) ? jQuery("#" + e) : jQuery("#" + e).html(t)).prop("disabled", !1)
}

function ajaxDialog(e, t, n, i, r) {
    r = void 0 !== r ? r : "Save", jQuery("#dialog").remove();
    var a = "s-lc-ajax-modal";
    return jQuery('<div class="modal fade" id="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog"' + (0 == i ? "" : ' style="width:' + i + 'px"') + '><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button><h4 class="modal-title" id="myModalLabel">' + n + '</h4></div><div class="modal-body" id="' + a + '"></div><div class="modal-footer"><button type="button" id="modalbtn" class="btn btn-primary pull-left">' + r + '</button> <button type="button" id="modalbtnc" class="btn btn-default pull-left" data-dismiss="modal">Close</button></div></div></div></div>').appendTo("body"), springyPublic.setLastFocusElement(), jQuery("#" + a).load(e + "?" + t, function() {
        jQuery("#dialog").modal(), jQuery("#dialog").on("hidden.bs.modal", function() {
            springyPublic.restoreLastFocusElement()
        })
    }), !1
}

function ajaxModal(e, t) {
    jQuery("#dialog").remove();
    var n = 0 == t ? "" : ' style="width:' + t + 'px"';
    return workingAlert(), jQuery.ajax({
        url: e,
        type: "get",
        dataType: "html"
    }).always(stopAlert).done(function(e) {
        springyPublic.createModal(e, n)
    }).fail(ajaxErrorHandler), !1
}

function closeDialog(e) {
    void 0 === e && (e = "dialog");
    try {
        jQuery("#" + e).dialog("close")
    } catch (e) {}
    return jQuery("#" + e).remove(), jQuery(".modal-backdrop").remove(), jQuery("body").removeClass("modal-open"), !1
}

function hit(e, t, n) {
    return jQuery.post("/recordhit.php?id=" + e + "&table=" + t + "&src=" + n, function() {}), !1
}

function loadBrowse(e, t) {
    return jQuery("#" + t + "-cont").html('<br/><p class="text-center"><i class="fa fa-spinner fa-spin fa-lg"></i></p>'), jQuery.get("/ajax/calendar/list/" + e + "?id=" + t, function(e) {
        jQuery("#" + t + "-cont").hide().html(e).fadeIn("fast")
    }), !1
}

function datePickerAccessibilityFix(e) {
    e.find(".datepicker-title").remove(), e.find("th.dow, th.next, th.prev, th.datepicker-switch").attr("scope", "col"), e.find("table").attr("aria-label", "Date Picker")
}

function addslashes(e) {
    return e.replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0")
}

function setupLanguageDropdown() {
    jQuery("#s-lc-language-selector").on("change", function() {
        window.location.href = window.location.origin + "/language/change?lang=" + jQuery(this).val() + "&url=" + encodeURIComponent(window.location.href)
    })
}(springSpace = springSpace || {}).cookieConsent = springSpace.cookieConsent || {}, springSpace.cookieConsent.alert = function(e) {
    this.setConfig = function(e) {
        var t = (e = void 0 === e ? {} : e).okay || "OK";
        this.placement_opts = ["bottom", "top"], this.placement = -1 !== this.placement_opts.indexOf(e.placement) ? e.placement : "bottom", this.cookie_name = "springy_cookie_consent", this.cookie_notice_accepted = "ok", this.cookie_exp_days = e.cookie_exp_days || 180, this.read_more_callback = e.read_more_callback || function() {}, this.aria_label = e.aria_label || "User Privacy Alert", this.fade_in = 500, this.fade_out = 200, this.container_id = "s-ui-cc-container", this.close_button_id = "s-ui-cc-close-btn", this.read_more_elt_id = "s-ui-cc-read-more-link", this.consent_message = e.consent_message || "By using our website you are consenting to our use of cookies in accordance with our cookie policy.", this.content = '<div id="' + this.container_id + '" class="container" style="display: none;">    <aside class="navbar navbar-default navbar-fixed-' + this.placement + " fixed-" + this.placement + '" id="s-ui-cc-navbar" aria-label="' + this.aria_label + '">        <div id="s-ui-cc-main" class="container">            <div class="navbar-inner navbar-content-center" id="s-ui-cc-msg-container">                <div id="s-ui-cc-msg">' + this.consent_message + '<button id="' + this.close_button_id + '" type="button" class="btn btn-sm btn-default btn-light" data-dismiss="alert" aria-label="Close">' + t + "</button></div>            </div>        </div>    </aside></div>"
    }, this.consentCookieAccepted = function() {
        return this.getCookie(this.cookie_name) === this.cookie_notice_accepted
    }, this.setCookie = function(e, t, n) {
        var i = new Date,
            t = (i.setDate(i.getDate() + n), encodeURI(t) + (null === n ? "" : "; expires=" + i.toUTCString())),
            n = "https:" === location.protocol ? "; secure" : "";
        document.cookie = e + "=" + t + "; path=/; samesite=lax;" + n, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(e) {
        for (var t, n = document.cookie.split(";"), i = 0; i < n.length; i++)
            if (t = n[i].indexOf("="), n[i].substr(0, t).replace(/^\s+|\s+$/g, "") === e) return t = n[i].substr(t + 1), decodeURI(t);
        return null
    }, this.handleClose = function() {
        this.setCookie(this.cookie_name, this.cookie_notice_accepted, this.cookie_exp_days), jQuery("#" + this.container_id).fadeOut(this.fade_out)
    }, this.handleAlert = function() {
        this.consentCookieAccepted() || (jQuery("body").prepend(this.content), jQuery("#" + this.container_id).fadeIn(this.fade_in), jQuery("#" + this.close_button_id).on("click", this.handleClose.bind(this)), jQuery("#" + this.read_more_elt_id).attr("href", "#"), jQuery("#" + this.read_more_elt_id).on("click", this.read_more_callback.bind(this)))
    }, this.setConfig(e), jQuery(document).ready(this.handleAlert.bind(this))
}, (springSpace = springSpace || {}).sui = springSpace.sui || {}, springSpace.sui.filedrop = function(e) {
    if (void 0 === e) return !1;
    if (!e.selector || "" === e.selector) return !1;
    if (this.callback = e.callback || function() {}, this.error_callback = e.error_callback || function() {}, this.validate = e.validate || function() {
            return !0
        }, this.max_files = e.max_files ? parseInt(e.max_files, 10) : 0, this.max_upload_size = e.max_upload_size ? parseInt(e.max_upload_size, 10) : 0, this.max_file_size = e.max_file_size ? parseInt(e.max_file_size, 10) : 0, this.batch_files = void 0 !== e.batch_files && !!e.batch_files, this.autoupload = void 0 === e.autoupload || !!e.autoupload, this.translations = e.translations || {
            max_file_size: "Maximum file size"
        }, this.allowedMimeTypes = e.allowedMimeTypes || [], this.isAdvancedUpload = ("draggable" in (t = document.createElement("div")) || "ondragstart" in t && "ondrop" in t) && "FormData" in window && "FileReader" in window, this.$form = jQuery(e.selector), 0 === this.$form.length) return !1;
    this.$droparea = this.$form.find(".s-ui-filedrop"), this.droppedFiles = [], this.batchedFiles = [], this.batch = {
        current: 0,
        total: 0
    };
    var t, o = this;
    this.$input = this.$droparea.find('input[type="file"]'), this.$label = this.$droparea.find("label"), this.$submitbutton = this.$form.find('button[type="submit"]'), this.$progress = null, this.showFiles = function() {
        var t, n, i, e;
        0 !== this.$input.length && (e = this.$droparea[0].querySelector(".s-ui-filedrop-filenames"), t = e.querySelector("ul"), this.isAdvancedUpload ? (n = [], i = 0, this.droppedFiles.forEach(function(e) {
            var t = document.createElement("li");
            t.innerText = e.name, n.push(t), i += e.size
        }), t.innerHTML = "", 0 === n.length ? e.classList.add("hidden") : (e.classList.remove("hidden"), n.forEach(function(e) {
            t.appendChild(e)
        })), 0 < this.max_files && n.length > this.max_files && this.showError(o.max_files + " file uploads maximum."), !1 === this.batch_files && 0 < this.max_upload_size && i > this.max_upload_size && this.showError("Files total " + o.bytesToMB(i) + " MB which exceeds the maximum of " + o.bytesToMB(this.max_upload_size) + " MB at a time.")) : "" === this.$input.val() ? (e.classList.add("hidden"), t.innerHTML = "") : (e.classList.remove("hidden"), (e = document.createElement("li")).innerText = this.$input.val().split("\\").slice(-1).pop(), t.appendChild(e), this.$label.find(".filetext").addClass("hidden")))
    }, this.reset = function() {
        o.$form[0].reset(), o.removeError(), o.droppedFiles = [], o.batch.current = 0, o.batch.total = 0, o.stopProgress(), o.showFiles(), o.$input.removeClass("has-focus")
    }, this.clearFiles = function() {
        o.resetFileInput(), o.droppedFiles = [], o.batch.current = 0, o.batch.total = 0, o.showFiles()
    }, this.resetFileInput = function() {
        var e, t;
        0 !== this.$input.length && (e = jQuery("<form>"), t = this.$input.clone(!0).appendTo(e), e[0].reset(), this.$input.replaceWith(t), this.$input = t)
    }, this.showError = function(e) {
        var t;
        0 !== this.$droparea.length && ((t = document.createElement("p")).innerText = e, 0 < this.$form.find("div.s-ui-filedrop-error").length ? this.$form.find("div.s-ui-filedrop-error").append(t) : ((e = document.createElement("div")).classList.add("alert"), e.classList.add("alert-danger"), e.classList.add("s-ui-filedrop-error"), e.setAttribute("role", "alert"), e.appendChild(t), this.$droparea.prepend(e)))
    }, this.removeError = function() {
        this.$form.find("div.s-ui-filedrop-error").empty()
    }, this.countFiles = function() {
        return 0 === this.$input.length ? 0 : this.isAdvancedUpload ? this.droppedFiles.length : "" !== this.$input.val() ? 1 : 0
    }, this.startProgress = function() {
        var e, t, n;
        (null === this.$progress || 1 === this.$progress.length && "" === this.$progress.html()) && (e = !0, this.$progress = this.$form.find("div.s-ui-filedrop-progress"), 0 === this.$progress.length && (e = !1, this.$progress = jQuery("<div></div>").addClass("s-ui-filedrop-progress")), t = jQuery("<div></div>").attr({
            id: "s-ui-filedrop-progresslabel"
        }).text("Uploading files"), (n = jQuery("<div></div>").addClass("s-ui-filedrop-progbar").attr({
            role: "progressbar",
            "aria-valuenow": "0",
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-labelledby": "s-ui-filedrop-progresslabel"
        })).append(document.createElement("span")), this.$progress.append([t, n]), e || this.$droparea.prepend(this.$progress))
    }, this.updateProgress = function(e, t) {
        e = Math.round(e / t * 100);
        this.$progress.find("span:first").css("width", e + "%"), this.$progress.find(".s-ui-filedrop-progbar").attr("aria-valuenow", e), 1 < this.batch.total && e < 50 && this.$progress.find("div:first").html("Uploading file batch (" + this.batch.current + "/" + this.batch.total + ")")
    }, this.stopProgress = function() {
        null !== this.$progress && this.$progress.empty()
    }, this.bytesToMB = function(e) {
        return (parseInt(e, 10) / 1048576).toFixed(1)
    }, this.addFiles = function(e) {
        if (0 < o.max_files && o.countFiles() + e.length > o.max_files) return o.showError(o.max_files + " file uploads maximum."), !1;
        for (var t = 0, n = (o.droppedFiles.forEach(function(e) {
                t += e.size
            }), []), i = 0; i < e.length; i++) {
            var r = e[i];
            if (0 < o.droppedFiles.length) {
                var a = !1;
                if (o.droppedFiles.forEach(function(e) {
                        e.name === r.name && (a = !0)
                    }), a) {
                    n.push(i);
                    continue
                }
            }
            0 < this.allowedMimeTypes.length && -1 === this.allowedMimeTypes.indexOf(r.type) ? (o.showError("File: " + r.name + " is not an allowed file type."), n.push(i)) : 0 < o.max_file_size && r.size > o.max_file_size ? (o.showError("File: " + r.name + " is greater than allowed file size of " + o.bytesToMB(o.max_file_size) + " MB."), n.push(i)) : !1 === o.batch_files && t + r.size > o.max_upload_size ? (o.showError("File: " + r.name + " causes files to go over maximum upload size of " + o.bytesToMB(o.max_upload_size) + " MB at a time."), n.push(i)) : t += r.size
        }
        if (!1 === o.batch_files && 0 < o.max_upload_size && t > o.max_upload_size) return o.showError("Files total " + t + " bytes which exceeds the maximum of " + o.bytesToMB(o.max_upload_size) + " MB at a time."), !1;
        for (var s = 0; s < e.length; s++) - 1 === n.indexOf(s) && o.droppedFiles.push(e[s]);
        return 0 !== o.droppedFiles.length
    }, this.batchFiles = function() {
        var t, r = [],
            a = [];
        return this.batch_files ? (t = 1, r.push([]), a.push(0), this.droppedFiles.forEach(function(n) {
            var e, i = !1;
            a.forEach(function(e, t) {
                !i && e + n.size < o.max_upload_size && (a[t] = e + n.size, r[t].push(n), i = !0)
            }), i || (a.push(0), t++, r.push([]), a[e = t - 1] = n.size, r[e].push(n))
        })) : r.push(this.droppedFiles), r
    }, this.isLastBatch = function() {
        return this.batch.current >= this.batch.total
    }, this.ajaxUpload = function() {
        o.$form.find('input[name="batch_current"]').val(o.batch.current);
        var t = new FormData(o.$form[0]);
        "function" == typeof t.delete && t.delete(o.$input.attr("name")), o.batchedFiles[o.batch.current - 1].forEach(function(e) {
            t.append(o.$input.attr("name"), e)
        }), jQuery.ajax({
            url: o.$form.attr("action"),
            type: o.$form.attr("method"),
            data: t,
            dataType: "json",
            cache: !1,
            crossDomain: !0,
            contentType: !1,
            processData: !1,
            beforeSend: function() {
                0 < o.countFiles() && o.startProgress()
            },
            complete: function() {
                o.isLastBatch() ? (o.$form.removeClass("is-uploading"), o.$submitbutton.prop("disabled", !1), o.stopProgress()) : (o.batch.current++, o.ajaxUpload())
            },
            success: function(e) {
                o.callback(e, o)
            },
            xhr: function() {
                var e = jQuery.ajaxSettings.xhr();
                return 0 < o.countFiles() && (e.upload.onprogress = function(e) {
                    o.updateProgress(e.loaded, e.total)
                }), e
            }
        }).fail(function(e) {
            o.error_callback(e, o)
        })
    }, this.isAdvancedUpload && 0 < this.$input.length && (this.$droparea.addClass("has-advanced-upload"), this.batch_files && (t = jQuery("<input />").attr({
        type: "hidden",
        name: "batch_current"
    }).val("0"), e = jQuery("<input />").attr({
        type: "hidden",
        name: "batch_total"
    }).val("0"), this.$form.prepend([t, e])), this.$droparea.on("drag dragstart dragend dragover dragenter dragleave drop", function(e) {
        e.preventDefault(), e.stopPropagation()
    }).on("dragover dragenter", function() {
        o.$droparea.addClass("is-dragover")
    }).on("dragleave dragend drop", function() {
        o.$droparea.removeClass("is-dragover")
    }).on("drop", function(e) {
        e = o.addFiles(e.originalEvent.dataTransfer.files);
        o.showFiles(), !0 === e && o.autoupload && o.$form.submit()
    }).on("click", function(e) {
        var t = e.target.tagName; - 1 !== ["A", "I", "SPAN", "B", "STRONG", "BUTTON"].indexOf(t) && jQuery(e.target).closest("a, button").hasClass("s-ui-filedrop-clear") && (o.clearFiles(), o.removeError())
    })), this.isAdvancedUpload || (this.$input.remove(), this.$droparea.remove()), 0 < this.$input.length && (this.$input.on("change", function(e) {
        e.target.files && (o.isAdvancedUpload && (e = o.addFiles(e.target.files), o.resetFileInput(), !0 === e) && o.autoupload && o.$form.submit(), o.$input.removeClass("has-focus"), o.showFiles())
    }).on("focus", function(e) {
        e.target.classList.add("has-focus")
    }).on("blur", function(e) {
        e.target.classList.remove("has-focus")
    }), this.translations.max_file_size) && ((t = document.createElement("p")).innerHTML = this.translations.max_file_size + ": " + this.bytesToMB(this.max_file_size) + " MB", this.$label.append(t)), this.$form.on("submit", function(e) {
        o.$form.hasClass("is-uploading") ? e.preventDefault() : (o.$form.removeClass("is-error"), o.removeError(), 0 < o.max_files && o.countFiles() > o.max_files ? (o.showError(o.max_files + " file uploads maximum."), e.preventDefault()) : !1 === o.validate(o) ? (o.$form.addClass("is-error"), e.preventDefault()) : (o.$form.addClass("is-uploading"), o.$submitbutton.prop("disabled", !0), o.isAdvancedUpload ? (e.preventDefault(), o.batch.current = 1, o.batchedFiles = o.batchFiles(), o.batch.total = o.batchedFiles.length, o.$form.find('input[name="batch_total"]').val(o.batch.total), o.ajaxUpload()) : (e.preventDefault(), jQuery.ajax({
            url: o.$form.attr("action"),
            type: o.$form.attr("method"),
            data: o.$form.serialize(),
            dataType: "json",
            complete: function() {
                o.$form.removeClass("is-uploading"), o.$submitbutton.prop("disabled", !1)
            },
            success: function(e) {
                o.callback(e, o)
            }
        }).fail(function(e) {
            o.error_callback(e, o)
        }))))
    })
};
var springyPublic = {
    lastFocusElement: null,
    showTimezoneModal: function() {
        return ajaxModal("/timezone/list", 0)
    },
    createModal: function(e, t) {
        springyPublic.setLastFocusElement(), jQuery("#dialog").remove(), jQuery('<div class="modal fade" id="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog"' + t + '><div class="modal-content s-lc-public-modal-content">' + e + "</div></div></div>").appendTo("body").modal().on("hidden.bs.modal", function() {
            springyPublic.restoreLastFocusElement()
        })
    },
    getFutureEventDates: function(t) {
        return 0 < jQuery("#future_" + t).html().trim().length || (jQuery("#future_loading_" + t).show(), jQuery.ajax({
            url: "/ajax/event/future/" + t,
            type: "get",
            dataType: "html"
        }).always(function() {
            jQuery("#future_loading_" + t).hide()
        }).done(function(e) {
            jQuery("#future_" + t).html(e).show()
        }).fail(ajaxErrorHandler)), !1
    },
    registerClearBackForwardCache: function() {
        window.addEventListener("unload", function() {})
    },
    setLastFocusElement: function() {
        springyPublic.lastFocusElement = document.activeElement
    },
    restoreLastFocusElement: function() {
        null !== springyPublic.lastFocusElement && springyPublic.lastFocusElement.focus(), springyPublic.lastFocusElement = null
    },
    goToSelectedUrl: function() {
        var e = jQuery(this).val();
        return window.location = e + "#s-lc-public-pt", !1
    }
};

function getCurrentTimelineInstance(e) {
    return "undefined" != typeof timelineInstance ? timelineInstance : "undefined" != typeof timelineInFocus && null !== timelineInFocus ? timelineInFocus : timelineLocationMap[e]
}

function tgSetupDateManipulationVisuals() {
    springyDatepicker.setupBasic(".fc-goToDate-button", {
        startDate: new Date
    }), jQuery(".fc-goToNextAvailable-button").hide(), jQuery(".fc-button").prop("disabled", !0)
}

function tgSetupDateManipulationChangeHandler(e, t, n) {
    jQuery("#" + t).find(".fc-goToDate-button").on("changeDate", function() {
        var e = getCurrentTimelineInstance(n),
            t = springyDatepicker.getDate(this);
        springyFullCalendar.goToDate(e, t)
    }), e && jQuery(".fc-goToNextAvailable-button").on("click", function() {
        return timeGridOnClickGoToNextAvailable(jQuery(this), springyPage.locationId, springyPage.groupId, springyPage.itemId, !0)
    })
}

function timeGridOnClickGoToNextAvailable(e, n, t, i, r) {
    e.prop("disabled", !0);
    var a = jQuery("#s-lc-timegrid-loading");
    return a.show(), jQuery.ajax({
        type: "get",
        url: "/equipment/availability/nextdate",
        data: {
            lid: n,
            gid: t,
            eid: i,
            seatId: springyPage.seatId,
            zone: springyPage.zoneId,
            capacity: springyCommon.parseInt(jQuery("#capacity").val()),
            accessible: springyPage.isAccessible,
            powered: springyPage.isPowered,
            isEquipment: r,
            isSeatBooking: springyPage.isSeatBooking,
            pageIndex: springyPage.pageIndex,
            pageSize: springyPage.pageSize
        },
        dataType: "json"
    }).always(function() {
        e.prop("disabled", !1), a.hide()
    }).done(function(e) {
        var t = 0 < jQuery("#s-lc-timegrid-loading").length;
        r || springySpaces.setPageIndex(e.page), getCurrentTimelineInstance(n).gotoDate(e.date), tgSetupDateManipulationVisuals(), t && springySpaces.createLoadingIndicator(), tgSetupDateManipulationChangeHandler(r, "eq-time-grid")
    }).fail(ajaxErrorHandler), !1
}

function getTimelineCustomButtons(e, t, n) {
    return {
        goToNextAvailable: {
            click: function() {
                return timeGridOnClickGoToNextAvailable(jQuery(this), e, t, n, !1)
            }
        },
        goToDate: {}
    }
}

function timelineLoading(e) {
    !e && springyPage.wantAlternatingBackground && timegridAlternateHeaderBackgrounds(), jQuery("#s-lc-timegrid-loading").toggle(e), jQuery(".fc-button").prop("disabled", e)
}

function getFixedSlotWidth() {
    return jQuery(window).width() < 768 ? 70 : null
}

function errorAlert(e) {
    void 0 !== e && 0 !== e.length || (e = "undefined" == typeof springyText ? "Error: Please try again." : springyText.messages.errorDefault), jQuery.notification(e, {
        className: "jquery-notification-error",
        duration: 1e4
    });
    e = $("#jquery-notification");
    return e.attr("role", "alert"), e.attr("aria-live", "assertive"), !1
}

function successAlert(e) {
    void 0 !== e && 0 !== e.length || (e = "undefined" == typeof springyText ? "Success." : springyText.messages.success), jQuery.notification(e);
    e = $("#jquery-notification");
    e.attr("role", "alert"), e.attr("aria-live", "assertive")
}

function workingAlert(e) {
    void 0 !== e && "" != e || (e = ' <i class="fa fa-spinner fa-pulse fa-4x"></i> '), jQuery.notification(e, {
        duration: 6e4
    })
}

function stopAlert() {
    jQuery("#jquery-notification").hide()
}

function getAccessibleLabel(e) {
    var t = e.find(".icon-label.sr-only").html() || "";
    return 0 < t.length ? t : e.attr("aria-label") || ""
}

function createAccessibleTooltip(e) {
    var t = getAccessibleLabel(e);
    0 !== t.length && e.tooltip({
        title: t,
        html: !0,
        container: "body",
        trigger: "hover"
    })
}

function accessibleIcons() {
    jQuery("a > .fa").each(function(e, t) {
        createAccessibleTooltip(jQuery(t).parent("a"))
    }), jQuery("button > .fa").each(function(e, t) {
        createAccessibleTooltip(jQuery(t).parent("button"))
    }), jQuery('[data-toggle="tooltip"]').tooltip({
        trigger: "hover"
    }), jQuery('[data-toggle="popover"]').popover(), jQuery(".selectpicker").on("loaded.bs.select", function() {
        var e = jQuery(this),
            t = e.parent(),
            e = jQuery('label[for="' + e.attr("id") + '"]'),
            e = e.contents().not(e.children()).text().trim(),
            n = t.find(".inner").attr("id");
        t.append('<label class="sr-only" for="' + n + '">' + e + "</label>"), t.find('[role="combobox"]').each(function() {
            var e = jQuery(this),
                t = e.attr("aria-owns");
            e.attr("aria-controls", t)
        })
    })
}

function accessibleTables(e) {
    e = jQuery(e);
    e.find("th, td").attr("tabindex", 0), e.find("th").attr("scope", "col"), e.find("tr").attr("scope", "row")
}

function timegridAlternateHeaderBackgrounds() {
    var e = jQuery(".fc-time-area.fc-widget-header .fc-content > table > tbody > tr").first()[0];
    if (e)
        for (var t = 0; t < e.children.length; t++) jQuery(e.children[t]).addClass(t % 2 == 1 ? "s-lc-eq-timegrid-even" : "s-lc-eq-timegrid-odd")
}

function validateEmailAddress(e) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}

function escapeHtml(e) {
    var t = document.createElement("textarea");
    return t.textContent = e, t.innerHTML
}

function unEscapeHtml(e) {
    var t = document.createElement("textarea");
    return t.innerHTML = e, t.textContent
}

function pageBusyBegin(e) {
    workingAlert(), jQuery(e).prop("disabled", !0)
}

function pageBusyEnd(e) {
    stopAlert(), jQuery(e).prop("disabled", !1)
}

function ajaxErrorGetText(e) {
    return null !== e.responseText && 0 < e.responseText.length ? e.responseText : 403 === e.status ? "undefined" == typeof springyText ? "Permission denied." : springyText.messages.permissionDenied : "undefined" == typeof springyText ? "Error: Please try again." : springyText.messages.errorDefault
}

function ajaxErrorHandler(e) {
    errorAlert(ajaxErrorGetText(e))
}

function setupBrowserDefaults() {
    !window.MSInputMethodContext || !document.documentMode || jQuery.ajaxSetup({
        cache: !1
    })
}

function setupDatePickerLanguage() {
    void 0 !== $.fn.datepicker && void 0 !== $.fn.datepicker.defaults && ($.fn.datepicker.defaults.language = springSpace.language), void 0 !== jQuery.datepicker && (springSpace.language in jQuery.datepicker.regional ? jQuery.datepicker.setDefaults(jQuery.datepicker.regional[springSpace.language]) : jQuery.datepicker.setDefaults(jQuery.datepicker.regional[springSpace.locale]))
}

function createHiddenInput(e, t) {
    var n = document.createElement("input");
    return n.setAttribute("type", "hidden"), n.setAttribute("name", e), n.setAttribute("value", t), n
}

function decodeEscapedJavascriptString(e) {
    return e.replace(/&#(\d+);/g, function(e, t) {
        return String.fromCharCode(t)
    })
}

function convertStringToFloat(e) {
    e = parseFloat(e);
    return isNaN(e) ? 0 : e
}

function compareStringIgnoreCase(e, t) {
    e = e.toUpperCase(), t = t.toUpperCase();
    return e < t ? -1 : t < e ? 1 : 0
}

function scrollAndFocusOnElement(e) {
    e = document.querySelector(e);
    return e.scrollIntoView(), e.focus(), e
}
jQuery(function() {
        springSpace.setupLanguage(), setupBrowserDefaults(), setupLanguageDropdown()
    }),
    function(c) {
        c.fn.LibCalMySched = function(r) {
            var n, e = c('script[src*="libcal"][src*="myscheduler"]').attr("src"),
                t = document.createElement("a"),
                i = (t.href = e, (r = c.extend({
                    animationEffect: "fadeIn",
                    animationSpeed: 400,
                    moveModalSpeed: "slow",
                    background: "000",
                    opacity: .5,
                    openOnLoad: !1,
                    docClose: !1,
                    closeByEscape: !0,
                    moveOnScroll: !1,
                    resizeWindow: !1,
                    uid: 0,
                    iid: 0,
                    lid: 0,
                    gid: 0,
                    height: 450,
                    width: 400,
                    title: "Make an Appointment",
                    domain: "https://" + t.hostname,
                    redirectMobile: !1,
                    redirectViewport: 330,
                    skip_first: 0
                }, r)).triggerid = c(this).attr("id"), r.trigger = "#" + r.triggerid, r.olay = r.trigger + "-s-lc-ms-overlay", r.modals = r.trigger + "-s-lc-ms-modal", r.close = r.trigger + "-s-lc-ms-close", c("body").append('<div id="' + r.triggerid + '-s-lc-ms-overlay"></div>'), c(r.olay).css({
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    "z-index": "2000",
                    display: "none"
                }), c("body").append('<div id="' + r.triggerid + '-s-lc-ms-modal" style="box-sizing: content-box!important; display: none;" role="dialog" aria-live="assertive" aria-atomic="true" tabindex="-1"><a href="#" id="' + r.triggerid + '-s-lc-ms-close" aria-label="close" tabindex="0"><span class="sr-only">Close</span></a></div>'), c(r.olay)),
                a = c(r.modals),
                s = !1,
                o = !1;

            function l() {
                a.hide();
                var e = c(window).height() / 2 - n.outerHeight() / 2 + c(window).scrollTop(),
                    t = c(window).width() / 2 - n.outerWidth() / 2 + c(window).scrollLeft();
                n.css({
                    top: e = e < 0 ? 5 : e,
                    left: t = t < 0 ? 5 : t
                }), !1 === s ? (i.css({
                    opacity: r.opacity,
                    backgroundColor: "#" + r.background
                }), i[r.animationEffect](r.animationSpeed), n.delay(r.animationSpeed)[r.animationEffect](r.animationSpeed)) : n.show(), s = !0, setTimeout(function() {
                    c("#" + r.triggerid + "-s-lc-ms-modal").focus()
                }, 700)
            }

            function u() {
                a.stop(!0).animate({
                    top: c(window).height() / 2 - a.outerHeight() / 2 + c(window).scrollTop(),
                    left: c(window).width() / 2 - a.outerWidth() / 2 + c(window).scrollLeft()
                }, r.moveModalSpeed)
            }

            function d() {
                return o = s = !1, c("#" + r.triggerid + "-iframe").remove(), a.fadeOut(100, function() {
                    "slideDown" === r.animationEffect ? i.slideUp() : "fadeIn" === r.animationEffect && i.fadeOut()
                }), c(r.trigger).trigger("focus"), !1
            }
            return "fadein" === r.animationEffect && (r.animationEffect = "fadeIn"), "slidedown" === r.animationEffect && (r.animationEffect = "slideDown"), i.css({
                opacity: 0
            }), r.openOnLoad ? l() : (i.hide(), a.hide()), c(r.trigger).bind("click", function(e) {
                e.preventDefault(), !1 === o && function() {
                    o = !0;
                    var e = c(window).width(),
                        t = c(window).height(),
                        n = (new Date).getTime(),
                        i = r.domain + "/widget/appointments?u=" + r.uid + "&lid=" + r.lid + "&gid=" + r.gid + "&iid=" + r.iid + "&t=" + encodeURIComponent(r.title);
                    0 === r.uid && r.skip_first;
                    if (r.redirectMobile && e <= r.redirectViewport) return window.location.href = i, !1;
                    r.width > e && (r.width = e - 30, r.width < 0 || r.width < 250) && (r.width = r.redirectViewport);
                    r.height > t && (r.height = t - 30, r.height < 0 || r.height < 250) && (r.height = 250);
                    c(r.close).after('<iframe id="' + r.triggerid + '-iframe" src="' + i + "&ncache=" + n + '" height="' + r.height + '" width="' + r.width + '" style="padding:0; margin:0; border:0; overflow-x: hidden; overflow-y: scroll;" title="' + r.title + '"><a href="' + i + '">Go to scheduling widget.</a></iframe>'), c(r.close).css({
                        background: "url(//d68g328n4ug0e.cloudfront.net/ms-x.png) no-repeat",
                        width: "25px",
                        height: "29px",
                        "z-index": "2002",
                        display: "inline",
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        cursor: "pointer",
                        margin: "0",
                        padding: "0"
                    }), c(r.close + " .sr-only").css({
                        width: "1px",
                        height: "1px",
                        padding: "0",
                        position: "absolute",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0,0,0,0)",
                        border: "0"
                    });
                    e = r.width + 6, t = r.height + 10;
                    return c(r.modals).css({
                        background: "#fff",
                        padding: "30px 0px 0px 10px",
                        margin: "0px",
                        border: "2px solid #ddd",
                        "border-radius": "4px",
                        overflow: "auto",
                        "z-index": "2001",
                        position: "absolute",
                        width: e + "px",
                        height: t + "px",
                        "-webkit-overflow-scrolling": "touch"
                    }), !0
                }() && (n = c(r.modals), l())
            }), r.closeByEscape && c(window).bind("keyup", function(e) {
                if (27 === e.which) {
                    e = c("#" + r.triggerid + "-iframe");
                    if (0 !== e.length) return d()
                }
            }), c(r.close).bind("click", d), r.docClose && i.bind("click", d), !!r.resizeWindow && (c(window).bind("resize", u), !!r.moveOnScroll) && void c(window).bind("scroll", u)
        }
    }(jQuery), $.fn.tooltip.Constructor.DEFAULTS.whiteList.dl = [], $.fn.tooltip.Constructor.DEFAULTS.whiteList.dt = [], $.fn.tooltip.Constructor.DEFAULTS.whiteList.dd = [], $.fn.tooltip.Constructor.DEFAULTS.whiteList.span = ["style"];
var springyCommon = {
    wrapText: function(e, n) {
        var i = 0,
            r = "";
        for (e.split(" ").forEach(function(e) {
                var t = e.length;
                0 !== t && (0 === r.length ? (r = e, i = t) : void 0 === n || n < i + t ? (r += "<br>" + e, i = t) : (r += e, i += t))
            }); 0 <= e.indexOf("  ");) e = e.replace("  ", " ");
        return e.replace(" ", "<br>").replace("\n", "<br>")
    },
    bindAccessibleKeyPress: function(e, t) {
        var n = [13, 32];
        e.off("keypress"), e.on("keypress", function(e) {
            e = e.keyCode || e.which; - 1 !== n.indexOf(e) && t()
        })
    },
    parseInt: function(e, t) {
        e = parseInt(e);
        return isNaN(e) ? void 0 === t ? 0 : t : e
    },
    getElement: function(e) {
        e = document.querySelectorAll(e);
        return 0 === e.length ? null : e[0]
    },
    getValue: function(e) {
        e = springyCommon.getElement(e);
        return null === e ? null : e.value
    },
    getIntValue: function(e) {
        return springyCommon.parseInt(springyCommon.getValue(e))
    },
    addEventListener: function(e, t, n) {
        for (var i = document.querySelectorAll(e), r = 0; r < i.length; r++) i[r].addEventListener(t, n)
    },
    addIdNameModelsToSelect: function(e, t, n) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i],
                a = r.id === n;
            e.append('<option value="' + r.id + '"' + (a ? ' selected="selected"' : "") + ">" + r.name + "</option>")
        }
    },
    safeGet: function(e, t, n) {
        for (var i = e, r = 0; r < t.length; r++) {
            var a = t[r];
            if (!(a in i)) return n;
            i = i[a]
        }
        return i
    },
    getDateTimePickerMoment: function(e) {
        var e = e.data("DateTimePicker");
        return (e = e && e.date()) ? moment(e) : null
    },
    getDateTimePickerValue: function(e) {
        e = springyCommon.getDateTimePickerMoment(e);
        return null === e ? null : e.format(springSpace.phpDateTimeFormat)
    },
    sanitizeDateTimeValues: function(e, t, n, i) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r],
                s = e.get(a);
            null !== s && "" !== s && (s = n("#" + a).format(i), e.set(a, s))
        }
    },
    getFormSearchParams: function(e, t) {
        e = jQuery(e);
        if (0 === e.length) return new URLSearchParams;
        "undefined" != typeof springyCkEditor && springyCkEditor.updateParentElements();
        e = new URLSearchParams(new FormData(e[0]));
        return void 0 !== t && (void 0 !== t.dates && springyCommon.sanitizeDateTimeValues(e, t.dates, springyDatepicker.getMoment, springSpace.phpDateFormat), void 0 !== t.times) && springyCommon.sanitizeDateTimeValues(e, t.times, springyTimepicker.getMoment, springSpace.nativeTimeFormat), e
    },
    createArrayFromSearchParams: function(e) {
        var t, n, i = {};
        for ([t, n] of e.entries()) {
            var r = t.endsWith("[]"),
                a = t.replace("[]", "");
            i.hasOwnProperty(a) ? Array.isArray(i[a]) ? i[a].push(n) : i[a] = [i[a], n] : i[a] = r ? [n] : n
        }
        return i
    },
    serializeFormAsArray: function(e, t) {
        e = springyCommon.getFormSearchParams(e, t);
        return springyCommon.createArrayFromSearchParams(e)
    },
    serializeForm: function(e, t) {
        return springyCommon.getFormSearchParams(e, t).toString()
    },
    closeAllPopups: function() {
        jQuery(".tooltip, .popover").hide()
    },
    removeAllPopups: function() {
        jQuery(".popover").remove()
    },
    appendHiddenInput: function(e, t, n) {
        jQuery("<input />").attr("type", "hidden").attr("name", e).attr("value", t).appendTo(n)
    },
    isArraysEqual: function(e, n) {
        return e.length === n.length && e.every((e, t) => e === n[t])
    },
    getTrimmedValue: function(e) {
        return (jQuery(e).val() || "").trim()
    }
};