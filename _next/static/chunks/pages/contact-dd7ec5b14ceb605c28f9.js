_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [15], {
        "+8Ne": function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function () {
                return r("UqWo")
            }])
        },
        "2mql": function (e, t, r) {
            "use strict";
            var n = r("TOwV"),
                a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                c = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {};

            function s(e) {
                return n.isMemo(e) ? c : i[e.$$typeof] || a
            }
            i[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, i[n.Memo] = c;
            var l = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                b = Object.getPrototypeOf,
                f = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" !== typeof r) {
                    if (f) {
                        var a = b(r);
                        a && a !== f && e(t, a, n)
                    }
                    var c = u(r);
                    d && (c = c.concat(d(r)));
                    for (var i = s(t), m = s(r), h = 0; h < c.length; ++h) {
                        var g = c[h];
                        if (!o[g] && (!n || !n[g]) && (!m || !m[g]) && (!i || !i[g])) {
                            var O = p(r, g);
                            try {
                                l(t, g, O)
                            } catch (j) {}
                        }
                    }
                }
                return t
            }
        },
        "3ca1": function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return d
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("yKaS"),
                i = r("sl8y"),
                s = r.n(i);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.className,
                    r = e.children,
                    n = e.theme,
                    i = Object(o.a)(e, ["className", "children", "theme"]);
                return Object(a.jsx)("input", u(u({
                    className: Object(c.a)([s.a.Input, n && s.a["Input--".concat(n)], t])
                }, i), {}, {
                    children: r
                }))
            }
        },
        "77b6": function (e, t, r) {
            e.exports = {
                Spinner: "spinner_Spinner__3SDZp",
                load3: "spinner_load3__34jC_"
            }
        },
        Bm7v: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return f
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("q1tI"),
                i = r("J8E0"),
                s = r("cNOD"),
                l = r("yKaS"),
                u = r("rgco"),
                d = r.n(u);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e) {
                var t = e.title,
                    r = e.noPadding,
                    n = e.className,
                    u = e.children,
                    p = e.titleClassName,
                    f = e.matchContentPadding,
                    m = Object(o.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    h = Object(c.useContext)(s.b)[0];
                return Object(a.jsxs)("header", b(b({
                    className: Object(l.a)([d.a.PageHeader, d.a["PageHeader--".concat(h)], r && d.a["PageHeader--no-padding"], f && d.a["PageHeader--match-content-padding"], n])
                }, m), {}, {
                    children: [t && Object(a.jsx)(i.a, {
                        level: 2,
                        asLevel: 1,
                        tag: "div",
                        className: Object(l.a)([p]),
                        children: t
                    }), u]
                }))
            }
        },
        DHtF: function (e, t, r) {
            e.exports = {
                TextLink: "text-link_TextLink__Nkw07",
                TextLink__icon: "text-link_TextLink__icon__3SpE9",
                "TextLink--small": "text-link_TextLink--small__2F828"
            }
        },
        DwZZ: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return d
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("yKaS"),
                i = r("77b6"),
                s = r.n(i);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.size,
                    r = void 0 === t ? 25 : t,
                    n = e.color,
                    i = void 0 === n ? "yellow" : n,
                    l = e.backgroundColor,
                    d = void 0 === l ? "black" : l,
                    p = e.className,
                    b = Object(o.a)(e, ["size", "color", "backgroundColor", "className"]),
                    f = "".concat(r, "px");
                return Object(a.jsx)("div", u(u({
                    className: Object(c.a)([s.a.Spinner, p]),
                    style: {
                        width: f,
                        height: f,
                        "--color": "var(--color-".concat(i, ")"),
                        backgroundColor: "var(--color-".concat(d, ")")
                    }
                }, b), {}, {
                    children: Object(a.jsx)("p", {
                        className: "visually-hidden",
                        children: "Loading"
                    })
                }))
            }
        },
        "HaE+": function (e, t, r) {
            "use strict";

            function n(e, t, r, n, a, o, c) {
                try {
                    var i = e[o](c),
                        s = i.value
                } catch (l) {
                    return void r(l)
                }
                i.done ? t(s) : Promise.resolve(s).then(n, a)
            }

            function a(e) {
                return function () {
                    var t = this,
                        r = arguments;
                    return new Promise((function (a, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            n(c, a, o, i, s, "next", e)
                        }

                        function s(e) {
                            n(c, a, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            r.d(t, "a", (function () {
                return a
            }))
        },
        I5cV: function (e, t, r) {
            e.exports = {
                ContentLabel: "content-label_ContentLabel__1xXJv",
                "ContentLabel--light": "content-label_ContentLabel--light__33TTD",
                "ContentLabel--dark": "content-label_ContentLabel--dark__2DPGx"
            }
        },
        J9yn: function (e, t, r) {
            "use strict";
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("q1tI"),
                i = r("Y5Yy"),
                s = r("yKaS"),
                l = r("DHtF"),
                u = r.n(l);

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var b = Object(c.forwardRef)((function (e, t) {
                var r = e.tag,
                    n = void 0 === r ? "a" : r,
                    c = e.className,
                    l = e.children,
                    d = e.small,
                    b = Object(o.a)(e, ["tag", "className", "children", "small"]),
                    f = n;
                return Object(a.jsxs)(f, p(p({
                    ref: t,
                    className: Object(s.a)([u.a.TextLink, d && u.a["TextLink--small"], c])
                }, b), {}, {
                    children: [l, " ", Object(a.jsx)(i.a, {
                        id: "arrow",
                        className: u.a.TextLink__icon
                    })]
                }))
            }));
            t.a = b
        },
        OpfK: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return f
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("ODXe"),
                c = r("Ff2n"),
                i = r("l7NP"),
                s = r("rmG7"),
                l = r("yKaS"),
                u = r("m0d9"),
                d = r.n(u);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e) {
                var t = e.className,
                    r = e.children,
                    n = e.directionFrom,
                    u = void 0 === n ? "bottom" : n,
                    p = e.threshold,
                    f = void 0 === p ? .1 : p,
                    m = e.tag,
                    h = void 0 === m ? "div" : m,
                    g = e.delay,
                    O = void 0 === g ? 0 : g,
                    j = Object(c.a)(e, ["className", "children", "directionFrom", "threshold", "tag", "delay"]),
                    y = Object(s.a)()[0],
                    v = Object(i.a)(f),
                    _ = Object(o.a)(v, 2),
                    w = _[0],
                    x = _[1],
                    P = h;
                return Object(a.jsx)(P, b(b({
                    ref: w,
                    className: Object(l.a)([d.a.Animate, d.a["Animate--".concat(u)], x && d.a["Animate--inview"], y && d.a["Animate--rm"], t]),
                    style: {
                        transitionDelay: "".concat(O, "s")
                    }
                }, j), {}, {
                    children: r
                }))
            }
        },
        QmcG: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return d
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("yKaS"),
                i = r("I5cV"),
                s = r.n(i);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.tag,
                    r = void 0 === t ? "span" : t,
                    n = e.theme,
                    i = void 0 === n ? "light" : n,
                    l = e.children,
                    d = e.className,
                    p = Object(o.a)(e, ["tag", "theme", "children", "className"]),
                    b = r;
                return Object(a.jsx)(b, u(u({
                    className: Object(c.a)([s.a.ContentLabel, s.a["ContentLabel--".concat(i)], d])
                }, p), {}, {
                    children: l
                }))
            }
        },
        TOwV: function (e, t, r) {
            "use strict";
            e.exports = r("qT12")
        },
        TUVZ: function (e, t, r) {
            e.exports = {
                Textarea: "textarea_Textarea__1sQQh"
            }
        },
        UqWo: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, "__N_SSG", (function () {
                return Z
            })), r.d(t, "default", (function () {
                return G
            }));
            var n = r("nKUr"),
                a = r("o0o1"),
                o = r.n(a),
                c = r("HaE+"),
                i = r("rePB"),
                s = r("q1tI"),
                l = r.n(s),
                u = r("17x9"),
                d = r.n(u);

            function p() {
                return (p = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var f = function (e) {
                var t, r;

                function n() {
                    var t;
                    return (t = e.call(this) || this).handleExpired = t.handleExpired.bind(b(t)), t.handleErrored = t.handleErrored.bind(b(t)), t.handleChange = t.handleChange.bind(b(t)), t.handleRecaptchaRef = t.handleRecaptchaRef.bind(b(t)), t
                }
                r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                var a = n.prototype;
                return a.getValue = function () {
                    return this.props.grecaptcha && void 0 !== this._widgetId ? this.props.grecaptcha.getResponse(this._widgetId) : null
                }, a.getWidgetId = function () {
                    return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
                }, a.execute = function () {
                    var e = this.props.grecaptcha;
                    if (e && void 0 !== this._widgetId) return e.execute(this._widgetId);
                    this._executeRequested = !0
                }, a.executeAsync = function () {
                    var e = this;
                    return new Promise((function (t, r) {
                        e.executionResolve = t, e.executionReject = r, e.execute()
                    }))
                }, a.reset = function () {
                    this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
                }, a.handleExpired = function () {
                    this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
                }, a.handleErrored = function () {
                    this.props.onErrored && this.props.onErrored(), this.executionReject && (this.executionReject(), delete this.executionResolve, delete this.executionReject)
                }, a.handleChange = function (e) {
                    this.props.onChange && this.props.onChange(e), this.executionResolve && (this.executionResolve(e), delete this.executionReject, delete this.executionResolve)
                }, a.explicitRender = function () {
                    if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
                        var e = document.createElement("div");
                        this._widgetId = this.props.grecaptcha.render(e, {
                            sitekey: this.props.sitekey,
                            callback: this.handleChange,
                            theme: this.props.theme,
                            type: this.props.type,
                            tabindex: this.props.tabindex,
                            "expired-callback": this.handleExpired,
                            "error-callback": this.handleErrored,
                            size: this.props.size,
                            stoken: this.props.stoken,
                            hl: this.props.hl,
                            badge: this.props.badge
                        }), this.captcha.appendChild(e)
                    }
                    this._executeRequested && this.props.grecaptcha && void 0 !== this._widgetId && (this._executeRequested = !1, this.execute())
                }, a.componentDidMount = function () {
                    this.explicitRender()
                }, a.componentDidUpdate = function () {
                    this.explicitRender()
                }, a.componentWillUnmount = function () {
                    void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
                }, a.delayOfCaptchaIframeRemoving = function () {
                    var e = document.createElement("div");
                    for (document.body.appendChild(e), e.style.display = "none"; this.captcha.firstChild;) e.appendChild(this.captcha.firstChild);
                    setTimeout((function () {
                        document.body.removeChild(e)
                    }), 5e3)
                }, a.handleRecaptchaRef = function (e) {
                    this.captcha = e
                }, a.render = function () {
                    var e = this.props,
                        t = (e.sitekey, e.onChange, e.theme, e.type, e.tabindex, e.onExpired, e.onErrored, e.size, e.stoken, e.grecaptcha, e.badge, e.hl, function (e, t) {
                            if (null == e) return {};
                            var r, n, a = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(e, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]));
                    return l.a.createElement("div", p({}, t, {
                        ref: this.handleRecaptchaRef
                    }))
                }, n
            }(l.a.Component);
            f.displayName = "ReCAPTCHA", f.propTypes = {
                sitekey: d.a.string.isRequired,
                onChange: d.a.func,
                grecaptcha: d.a.object,
                theme: d.a.oneOf(["dark", "light"]),
                type: d.a.oneOf(["image", "audio"]),
                tabindex: d.a.number,
                onExpired: d.a.func,
                onErrored: d.a.func,
                size: d.a.oneOf(["compact", "normal", "invisible"]),
                stoken: d.a.string,
                hl: d.a.string,
                badge: d.a.oneOf(["bottomright", "bottomleft", "inline"])
            }, f.defaultProps = {
                onChange: function () {},
                theme: "light",
                type: "image",
                tabindex: 0,
                size: "normal",
                badge: "bottomright"
            };
            var m = r("2mql"),
                h = r.n(m);

            function g() {
                return (g = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var O = {},
                j = 0;
            var y = "onloadcallback";
            var v, _, w = (v = function () {
                    return "https://" + (("undefined" !== typeof window && window.recaptchaOptions || {}).useRecaptchaNet ? "recaptcha.net" : "www.google.com") + "/recaptcha/api.js?onload=" + y + "&render=explicit"
                }, _ = (_ = {
                    callbackName: y,
                    globalName: "grecaptcha"
                }) || {}, function (e) {
                    var t = e.displayName || e.name || "Component",
                        r = function (t) {
                            var r, n;

                            function a(e, r) {
                                var n;
                                return (n = t.call(this, e, r) || this).state = {}, n.__scriptURL = "", n
                            }
                            n = t, (r = a).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
                            var o = a.prototype;
                            return o.asyncScriptLoaderGetScriptLoaderID = function () {
                                return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + j++), this.__scriptLoaderID
                            }, o.setupScriptURL = function () {
                                return this.__scriptURL = "function" === typeof v ? v() : v, this.__scriptURL
                            }, o.asyncScriptLoaderHandleLoad = function (e) {
                                var t = this;
                                this.setState(e, (function () {
                                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                                }))
                            }, o.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                                var e = O[this.__scriptURL];
                                if (!e || !e.loaded) throw new Error("Script is not loaded.");
                                for (var t in e.observers) e.observers[t](e);
                                delete window[_.callbackName]
                            }, o.componentDidMount = function () {
                                var e = this,
                                    t = this.setupScriptURL(),
                                    r = this.asyncScriptLoaderGetScriptLoaderID(),
                                    n = _,
                                    a = n.globalName,
                                    o = n.callbackName,
                                    c = n.scriptId;
                                if (a && "undefined" !== typeof window[a] && (O[t] = {
                                        loaded: !0,
                                        observers: {}
                                    }), O[t]) {
                                    var i = O[t];
                                    return i && (i.loaded || i.errored) ? void this.asyncScriptLoaderHandleLoad(i) : void(i.observers[r] = function (t) {
                                        return e.asyncScriptLoaderHandleLoad(t)
                                    })
                                }
                                var s = {};
                                s[r] = function (t) {
                                    return e.asyncScriptLoaderHandleLoad(t)
                                }, O[t] = {
                                    loaded: !1,
                                    observers: s
                                };
                                var l = document.createElement("script");
                                for (var u in l.src = t, l.async = !0, _.attributes) l.setAttribute(u, _.attributes[u]);
                                c && (l.id = c);
                                var d = function (e) {
                                    if (O[t]) {
                                        var r = O[t].observers;
                                        for (var n in r) e(r[n]) && delete r[n]
                                    }
                                };
                                o && "undefined" !== typeof window && (window[o] = function () {
                                    return e.asyncScriptLoaderTriggerOnScriptLoaded()
                                }), l.onload = function () {
                                    var e = O[t];
                                    e && (e.loaded = !0, d((function (t) {
                                        return !o && (t(e), !0)
                                    })))
                                }, l.onerror = function () {
                                    var e = O[t];
                                    e && (e.errored = !0, d((function (t) {
                                        return t(e), !0
                                    })))
                                }, document.body.appendChild(l)
                            }, o.componentWillUnmount = function () {
                                var e = this.__scriptURL;
                                if (!0 === _.removeOnUnmount)
                                    for (var t = document.getElementsByTagName("script"), r = 0; r < t.length; r += 1) t[r].src.indexOf(e) > -1 && t[r].parentNode && t[r].parentNode.removeChild(t[r]);
                                var n = O[e];
                                n && (delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()], !0 === _.removeOnUnmount && delete O[e])
                            }, o.render = function () {
                                var t = _.globalName,
                                    r = this.props,
                                    n = (r.asyncScriptOnLoad, r.forwardedRef),
                                    a = function (e, t) {
                                        if (null == e) return {};
                                        var r, n, a = {},
                                            o = Object.keys(e);
                                        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                                        return a
                                    }(r, ["asyncScriptOnLoad", "forwardedRef"]);
                                return t && "undefined" !== typeof window && (a[t] = "undefined" !== typeof window[t] ? window[t] : void 0), a.ref = n, Object(s.createElement)(e, a)
                            }, a
                        }(s.Component),
                        n = Object(s.forwardRef)((function (e, t) {
                            return Object(s.createElement)(r, g({}, e, {
                                forwardedRef: t
                            }))
                        }));
                    return n.displayName = "AsyncScriptLoader(" + t + ")", n.propTypes = {
                        asyncScriptOnLoad: d.a.func
                    }, h()(n, e)
                })(f),
                x = r("TuJg"),
                P = r("3ca1"),
                S = r("hdTg"),
                N = r("xlEm"),
                k = r("Bm7v"),
                C = r("DwZZ"),
                D = r("Ff2n"),
                E = r("yKaS"),
                F = r("TUVZ"),
                L = r.n(F);

            function T(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function (t) {
                        Object(i.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function I(e) {
                var t = e.className,
                    r = e.children,
                    a = e.rows,
                    o = Object(D.a)(e, ["className", "children", "rows"]);
                return Object(n.jsx)("textarea", R(R({
                    className: Object(E.a)([L.a.Textarea, t]),
                    rows: a || 7
                }, o), {}, {
                    children: r
                }))
            }
            var A = r("WHft"),
                H = r("f9hQ"),
                $ = r("jZJi"),
                U = r("vdCP"),
                q = r("gNu6"),
                K = r.n(q),
                z = r("OpfK");

            function M(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(r), !0).forEach((function (t) {
                        Object(i.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var J = {
                    name: "",
                    jobTitle: "",
                    company: "",
                    email: "",
                    message: ""
                },
                Z = !0;

            function G(e) {
                var t = e.featuredInsight,
                    r = e.featuredCaseStudy,
                    a = Object(s.useState)(B({}, J)),
                    l = a[0],
                    u = a[1],
                    d = Object(s.useState)("ready"),
                    p = d[0],
                    b = d[1],
                    f = Object(s.useRef)(),
                    m = function () {
                        var e = Object(c.a)(o.a.mark((function e(t) {
                            return o.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), b("sending"), e.next = 4, f.current.executeAsync();
                                    case 4:
                                        if (e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 7:
                                        return e.prev = 7, e.next = 10, Object($.a)({
                                            endpoint: "/send-email/contact",
                                            method: "POST",
                                            body: l
                                        });
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(7), console.log("Error while sending email: ".concat(e.t0.message));
                                    case 15:
                                        b("done");
                                        try {
                                            Object($.b)(l, "Contact Form")
                                        } catch (r) {
                                            console.log("Error while tracking form submission: ".concat(r.message))
                                        }
                                        try {
                                            Object(U.a)({
                                                action: "submit_form",
                                                category: "contact",
                                                label: "Contact Form"
                                            })
                                        } catch (r) {
                                            console.log("Error while tracking form submission with gtag: ".concat(r.message))
                                        }
                                        case 18:
                                        case "end":
                                            return e.stop()
                                }
                            }), e, null, [
                                [7, 12]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    h = function (e) {
                        var t = e.target,
                            r = t.name,
                            n = t.value;
                        u((function (e) {
                            return B(B({}, e), {}, Object(i.a)({}, r, n))
                        }))
                    };
                return Object(n.jsxs)(S.a, {
                    theme: "light",
                    title: "联系我们",
                    children: [Object(n.jsx)(k.a, {
                        title: "想要畅快的新体验吗？等你很久了，让我们开始合作吧！",
                        children: Object(n.jsxs)("div", {
                            className: "row row--horizontal-uncenter",
                            children: [Object(n.jsx)("div", {
                                className: "column column-push-1 column-push-large-2 column--5 column-large--4",
                                children: Object(n.jsxs)("p", {
                                    className: "body-larger u-margin-medium-bottom-0",
                                    children: [Object(n.jsx)("strong", {
                                        children: "新的项目"
                                    }), " ", Object(n.jsx)("br", {}), Object(n.jsx)("a", {
                                        className: "u-anchor-dark",
                                        href: "mailto:business@wethecollective.com",
                                        children: "让我们谈谈合作细节吧！"
                                    })]
                                })
                            }), Object(n.jsx)("div", {
                                className: "column column--5 column-large--4",
                                children: Object(n.jsxs)("p", {
                                    className: "body-larger u-margin-medium-bottom-0",
                                    children: [Object(n.jsx)("strong", {
                                        children: "新的职位"
                                    }), " ", Object(n.jsx)("br", {}), Object(n.jsx)("a", {
                                        className: "u-anchor-dark",
                                        href: "mailto:work@wethecollective.com",
                                        children: "给我们发简历吧！"
                                    })]
                                })
                            })]
                        })
                    }), Object(n.jsxs)(N.a, {
                        smallPaddingTop: !0,
                        children: [Object(n.jsx)("div", {
                            className: "row row--horizontal-uncenter",
                            children: Object(n.jsxs)("div", {
                                className: "column column-push-1 column-push-large-2 column--10 column-large--8 u-margin-bottom-11",
                                children: ["done" === p && Object(n.jsxs)(n.Fragment, {
                                    children: [Object(n.jsx)(z.a, {
                                        tag: "h3",
                                        className: "title-2 u-margin-top-0 u-margin-bottom-2",
                                        children: "Thanks for your message!"
                                    }), Object(n.jsx)(z.a, {
                                        tag: "p",
                                        delay: .1,
                                        className: "u-margin-bottom-0",
                                        children: "We\u2019ll be in touch soon. Meanwhile, take a peek into our collective brain by browsing our most recent insight or case study."
                                    }), Object(n.jsxs)("div", {
                                        className: Object(E.a)(["row", "row--on-small", "row--horizontal-uncenter", "u-margin-top-4", "u-margin-medium-top-6"]),
                                        children: [Object(n.jsx)(z.a, {
                                            delay: .2,
                                            className: "column column--5 column-large--3",
                                            children: Object(n.jsx)(A.a, {
                                                title: r.title,
                                                slug: r.slug,
                                                image: r.featured_thumbnail,
                                                theme: "dark"
                                            })
                                        }), Object(n.jsx)(z.a, {
                                            delay: .3,
                                            className: "column column--5 column-large--3",
                                            children: Object(n.jsx)(H.a, {
                                                title: t.title,
                                                slug: t.slug,
                                                image: t.feature_image,
                                                theme: "dark"
                                            })
                                        })]
                                    })]
                                }), "done" !== p && Object(n.jsxs)(n.Fragment, {
                                    children: [Object(n.jsx)("h3", {
                                        className: "title-2 u-margin-top-0",
                                        children: "让我们简单聊聊， 填写以下空白，告别寒暄："
                                    }), Object(n.jsxs)("form", {
                                        className: Object(E.a)([K.a.Form, "ready" !== p && K.a["Form--disabled"]]),
                                        onSubmit: m,
                                        children: [Object(n.jsxs)("label", {
                                            className: Object(E.a)([K.a.Form__label, K.a.Form__name, "u-text-bold", "title-4"]),
                                            children: ["你好，我的名字是", " ", Object(n.jsx)(P.a, {
                                                disabled: "ready" !== p,
                                                required: !0,
                                                type: "text",
                                                name: "name",
                                                placeholder: "name",
                                                value: l.name,
                                                onChange: h
                                            })]
                                        }), Object(n.jsxs)("label", {
                                            className: Object(E.a)([K.a.Form__label, K.a.Form__job, "u-text-bold", "title-4"]),
                                            children: ["我目前就职于", " ", Object(n.jsx)(P.a, {
                                                disabled: "ready" !== p,
                                                required: !0,
                                                type: "text",
                                                name: "jobTitle",
                                                placeholder: "公司名",
                                                value: l.jobTitle,
                                                onChange: h
                                            })]
                                        }), Object(n.jsxs)("label", {
                                            className: Object(E.a)([K.a.Form__label, "u-text-bold", "title-4"]),
                                            children: ["从事", " ", Object(n.jsx)(P.a, {
                                                disabled: "ready" !== p,
                                                required: !0,
                                                type: "text",
                                                name: "company",
                                                placeholder: "company",
                                                value: l.company,
                                                onChange: h
                                            }), " ", "."]
                                        }), Object(n.jsxs)("label", {
                                            className: Object(E.a)([K.a.Form__label, "u-text-bold", "title-4"]),
                                            children: ["这是我的联系方式", " ", Object(n.jsx)(P.a, {
                                                disabled: "ready" !== p,
                                                required: !0,
                                                type: "email",
                                                name: "email",
                                                placeholder: "     ",
                                                value: l.email,
                                                onChange: h
                                            }), " ", "."]
                                        }), Object(n.jsxs)("label", {
                                            className: Object(E.a)([K.a.Form__label, K.a.Form__message, "title-4"]),
                                            children: [Object(n.jsx)("span", {
                                                children: "我有一些好点子关于:"
                                            }), Object(n.jsx)(I, {
                                                disabled: "ready" !== p,
                                                required: !0,
                                                value: l.message,
                                                onChange: h,
                                                name: "message",
                                                placeholder: "my project or idea"
                                            })]
                                        }), Object(n.jsx)("div", {
                                            className: K.a.Form__btn,
                                            children: Object(n.jsxs)(x.a, {
                                                disabled: "ready" !== p,
                                                type: "submit",
                                                children: ["sending" === p && Object(n.jsx)(C.a, {}), "ready" === p && "发 送 邮 件", "done" === p && "Sent!"]
                                            })
                                        }), Object(n.jsx)(w, {
                                            ref: f,
                                            size: "invisible",
                                            sitekey: "6Lc4nN4ZAAAAAFZPZjK_H9fFg1xv6c7edJx6AJxz"
                                        })]
                                    })]
                                })]
                            })
                        }), Object(n.jsx)("div", {
                            className: "row row--horizontal-uncenter",
                            children: Object(n.jsxs)("div", {
                                className: "column column--5 column-large--4 column-push-1 column-push-large-2",
                                children: [Object(n.jsx)("h3", {
                                    children: "我们的业务遍布全球，我们的根在此处："
                                }), Object(n.jsxs)("address", {
                                    className: "body-larger u-text-normal",
                                    children: [Object(n.jsxs)("p", {
                                        children: ["上海市长宁区", Object(n.jsx)("br", {}), "仙霞路350号", Object(n.jsx)("br", {}), "科创大楼323室"]
                                    }), Object(n.jsx)("p", {
                                        className: "u-text-bold u-margin-bottom-0",
                                        children: Object(n.jsx)("a", {
                                            className: "u-anchor-dark",
                                            href: "#",
                                            children: "tel:+8613585203373"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        WHft: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return b
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("YFqc"),
                i = r.n(c),
                s = r("J9yn"),
                l = r("QmcG"),
                u = r("yKaS");

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function b(e) {
                var t = e.slug,
                    r = e.title,
                    n = e.image,
                    c = e.theme,
                    d = void 0 === c ? "light" : c,
                    b = e.className,
                    f = Object(o.a)(e, ["slug", "title", "image", "theme", "className"]);
                return t ? Object(a.jsx)(i.a, {
                    href: "/case-studies/".concat(t),
                    passHref: !0,
                    children: Object(a.jsxs)(s.a, p(p({
                        small: !0,
                        className: Object(u.a)(["u-display-block", "light" === d && "u-color-white", "dark" === d && "u-color-black", b])
                    }, f), {}, {
                        children: [n && Object(a.jsx)("img", {
                            className: "u-display-block u-full-width",
                            src: n.featured_thumbnail_regular,
                            srcSet: "".concat(n.featured_thumbnail_regular, " 1x,").concat(n.featured_thumbnail_retina, " 2x"),
                            alt: ""
                        }), Object(a.jsx)(l.a, {
                            theme: d,
                            children: "Case Study"
                        }), Object(a.jsx)("br", {}), r && r]
                    }))
                }) : null
            }
        },
        f9hQ: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return b
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("YFqc"),
                i = r.n(c),
                s = r("yKaS"),
                l = r("QmcG"),
                u = r("J9yn");

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function b(e) {
                var t = e.slug,
                    r = e.title,
                    n = e.image,
                    c = e.className,
                    d = e.theme,
                    b = Object(o.a)(e, ["slug", "title", "image", "className", "theme"]);
                return t ? Object(a.jsx)(i.a, {
                    as: "/insights/".concat(t),
                    href: "/insights/[slug]",
                    passHref: !0,
                    children: Object(a.jsxs)(u.a, p(p({
                        className: Object(s.a)(["u-display-block", "light" === d && "u-color-white", "dark" === d && "u-color-black", c]),
                        small: !0
                    }, b), {}, {
                        children: [n && Object(a.jsx)("img", {
                            className: "u-display-block u-full-width",
                            src: n,
                            alt: ""
                        }), Object(a.jsx)(l.a, {
                            theme: d,
                            children: "Insight"
                        }), Object(a.jsx)("br", {}), r && r]
                    }))
                }) : null
            }
        },
        gNu6: function (e, t, r) {
            e.exports = {
                Form: "contact-page_Form__2SAFy",
                Form__label: "contact-page_Form__label__1UIET",
                Form__message: "contact-page_Form__message__3pcxY",
                Form__name: "contact-page_Form__name__34wPL",
                Form__job: "contact-page_Form__job__1Y48H",
                Form__btn: "contact-page_Form__btn__2qz9T",
                "Form--disabled": "contact-page_Form--disabled__3GLoL",
                FeedBackItems: "contact-page_FeedBackItems__1hjrQ"
            }
        },
        hdTg: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return u
            }));
            var n = r("nKUr"),
                a = r("q1tI"),
                o = r("rCDY"),
                c = r("z1CN"),
                i = r("cNOD"),
                s = r("8oZb"),
                l = r("yKaS");

            function u(e) {
                var t = e.a11yTitle,
                    r = void 0 === t || t,
                    u = e.title,
                    d = e.description,
                    p = e.children,
                    b = e.className,
                    f = e.theme,
                    m = void 0 === f ? "dark" : f,
                    h = e.ogImage,
                    g = e.twImage,
                    O = Object(a.useContext)(i.b)[1];
                return Object(a.useEffect)((function () {
                    O(m)
                }), [m]), Object(n.jsxs)(n.Fragment, {
                    children: [Object(n.jsx)(s.a, {
                        title: u,
                        description: d,
                        ogImage: h,
                        twImage: g
                    }), Object(n.jsx)(c.a, {}), Object(n.jsxs)("main", {
                        id: "main",
                        className: Object(l.a)(["u-overflow-hidden", b]),
                        children: [!1 !== r && Object(n.jsx)("h1", {
                            className: "visually-hidden",
                            children: "string" === typeof r ? r : u
                        }), p]
                    }), Object(n.jsx)(o.a, {})]
                })
            }
        },
        jZJi: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return b
            })), r.d(t, "b", (function () {
                return m
            }));
            var n = r("o0o1"),
                a = r.n(n),
                o = r("rePB"),
                c = r("HaE+"),
                i = r("ZTVd");

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function (t) {
                        Object(o.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var u = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nf_807d9",
                        t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
                    return t ? t[2] : null
                },
                d = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "nf_807d9",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3650,
                        n = "";
                    if (r) {
                        var a = new Date;
                        a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + a.toGMTString()
                    }
                    document.cookie = escape(t) + "=" + escape(e) + n + "; path=/"
                },
                p = function (e) {
                    return new URLSearchParams(window.location.search).get(e) || ""
                };

            function b(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = Object(c.a)(a.a.mark((function e(t) {
                    var r, n, o, c, s;
                    return a.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.endpoint, n = t.method, o = void 0 === n ? "GET" : n, c = t.body, e.next = 3, fetch("".concat(i.c).concat(r), l({
                                    method: o,
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }, c && {
                                    body: JSON.stringify(c)
                                }));
                            case 3:
                                return s = e.sent, e.next = 6, s.json();
                            case 6:
                                return s = e.sent, e.abrupt("return", s);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m(e, t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = Object(c.a)(a.a.mark((function e(t, r) {
                    var n, o;
                    return a.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.email) {
                                    e.next = 2;
                                    break
                                }
                                throw Error("Missing email from the fields");
                            case 2:
                                if (r) {
                                    e.next = 4;
                                    break
                                }
                                throw Error("Missing conversion description");
                            case 4:
                                return n = {
                                    sessionid: u(),
                                    pagelink: window.location.href,
                                    pagetitle: document.title || "No Title",
                                    firstname: t.name || "",
                                    lastname: "",
                                    email: t.email,
                                    conversiondesc: r,
                                    fields: JSON.stringify(t),
                                    utm_campaign: p("utm_campaign"),
                                    utm_content: p("utm_content"),
                                    utm_source: p("utm_source"),
                                    utm_medium: p("utm_medium"),
                                    formtype: 1234,
                                    contentid: ""
                                }, e.prev = 5, e.next = 8, b({
                                    endpoint: "/tracking/form",
                                    method: "POST",
                                    body: n
                                });
                            case 8:
                                (o = e.sent).success ? d(o.data) : console.log("Failed to track form ".concat(o.error)), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(5), console.log("Failed to track form ".concat(e.t0.message));
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [5, 12]
                    ])
                })))).apply(this, arguments)
            }
        },
        l7NP: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return o
            }));
            var n = r("ODXe"),
                a = r("q1tI");

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = Object(a.useState)(!1),
                    o = r[0],
                    c = r[1],
                    i = Object(a.useState)(null),
                    s = i[0],
                    l = i[1],
                    u = Object(a.useRef)(),
                    d = Object(a.useRef)();
                return Object(a.useEffect)((function () {
                    var r = d.current,
                        a = u.current;
                    if (r && a && a.unobserve(r), s) {
                        var o = !1;
                        return r = s, (a = new IntersectionObserver((function (e) {
                                var i = Object(n.a)(e, 1)[0];
                                o || (c(i.isIntersecting), t && i.isIntersecting && a.unobserve(r))
                            }), {
                                threshold: e
                            })).observe(r),
                            function () {
                                o = !0, a.unobserve(r), a = null, r = null
                            }
                    }
                }), [s, t, e]), [l, o]
            }
        },
        m0d9: function (e, t, r) {
            e.exports = {
                Animate: "animate_Animate__2ERE1",
                "Animate--bottom": "animate_Animate--bottom__pfVA6",
                "Animate--top": "animate_Animate--top__1Ql7z",
                "Animate--left": "animate_Animate--left__2mF7n",
                "Animate--right": "animate_Animate--right__26MAK",
                "Animate--inview": "animate_Animate--inview__3C2Y0",
                "Animate--rm": "animate_Animate--rm__2ZY2H"
            }
        },
        qT12: function (e, t, r) {
            "use strict";
            var n = "function" === typeof Symbol && Symbol.for,
                a = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                c = n ? Symbol.for("react.fragment") : 60107,
                i = n ? Symbol.for("react.strict_mode") : 60108,
                s = n ? Symbol.for("react.profiler") : 60114,
                l = n ? Symbol.for("react.provider") : 60109,
                u = n ? Symbol.for("react.context") : 60110,
                d = n ? Symbol.for("react.async_mode") : 60111,
                p = n ? Symbol.for("react.concurrent_mode") : 60111,
                b = n ? Symbol.for("react.forward_ref") : 60112,
                f = n ? Symbol.for("react.suspense") : 60113,
                m = n ? Symbol.for("react.suspense_list") : 60120,
                h = n ? Symbol.for("react.memo") : 60115,
                g = n ? Symbol.for("react.lazy") : 60116,
                O = n ? Symbol.for("react.block") : 60121,
                j = n ? Symbol.for("react.fundamental") : 60117,
                y = n ? Symbol.for("react.responder") : 60118,
                v = n ? Symbol.for("react.scope") : 60119;

            function _(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case a:
                            switch (e = e.type) {
                                case d:
                                case p:
                                case c:
                                case s:
                                case i:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case b:
                                        case g:
                                        case h:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                            case o:
                                return t
                    }
                }
            }

            function w(e) {
                return _(e) === p
            }
            t.AsyncMode = d, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = l, t.Element = a, t.ForwardRef = b, t.Fragment = c, t.Lazy = g, t.Memo = h, t.Portal = o, t.Profiler = s, t.StrictMode = i, t.Suspense = f, t.isAsyncMode = function (e) {
                return w(e) || _(e) === d
            }, t.isConcurrentMode = w, t.isContextConsumer = function (e) {
                return _(e) === u
            }, t.isContextProvider = function (e) {
                return _(e) === l
            }, t.isElement = function (e) {
                return "object" === typeof e && null !== e && e.$$typeof === a
            }, t.isForwardRef = function (e) {
                return _(e) === b
            }, t.isFragment = function (e) {
                return _(e) === c
            }, t.isLazy = function (e) {
                return _(e) === g
            }, t.isMemo = function (e) {
                return _(e) === h
            }, t.isPortal = function (e) {
                return _(e) === o
            }, t.isProfiler = function (e) {
                return _(e) === s
            }, t.isStrictMode = function (e) {
                return _(e) === i
            }, t.isSuspense = function (e) {
                return _(e) === f
            }, t.isValidElementType = function (e) {
                return "string" === typeof e || "function" === typeof e || e === c || e === p || e === s || e === i || e === f || e === m || "object" === typeof e && null !== e && (e.$$typeof === g || e.$$typeof === h || e.$$typeof === l || e.$$typeof === u || e.$$typeof === b || e.$$typeof === j || e.$$typeof === y || e.$$typeof === v || e.$$typeof === O)
            }, t.typeOf = _
        },
        qu2t: function (e, t, r) {
            e.exports = {
                PageContent: "page-content_PageContent__S6RKn",
                "PageContent--overlap": "page-content_PageContent--overlap__2hNw4",
                "PageContent--small-padding-top": "page-content_PageContent--small-padding-top__3u4Dn",
                "PageContent--nopadding": "page-content_PageContent--nopadding__aSJsE",
                "PageContent--tight": "page-content_PageContent--tight__1Q3WT",
                "PageContent--gray": "page-content_PageContent--gray__2UPmN",
                "PageContent--black": "page-content_PageContent--black__6qtDy",
                "PageContent--yellow": "page-content_PageContent--yellow__1chDx",
                "PageContent--last": "page-content_PageContent--last__1wCPc"
            }
        },
        rgco: function (e, t, r) {
            e.exports = {
                PageHeader: "page-header_PageHeader__2LuS_",
                "PageHeader--no-padding": "page-header_PageHeader--no-padding__10nON",
                "PageHeader--match-content-padding": "page-header_PageHeader--match-content-padding__2JfCx",
                "PageHeader--light": "page-header_PageHeader--light__Gjq-f"
            }
        },
        sl8y: function (e, t, r) {
            e.exports = {
                Input: "input_Input__2T_ng",
                "Input--dark": "input_Input--dark__3cXva"
            }
        },
        vdCP: function (e, t, r) {
            "use strict";
            r.d(t, "b", (function () {
                return n
            })), r.d(t, "a", (function () {
                return a
            }));
            var n = function (e) {
                    window.gtag && window.gtag("config", "GTM-5QD2946", {
                        page_path: e
                    })
                },
                a = function (e) {
                    var t = e.action,
                        r = e.category,
                        n = e.label,
                        a = e.value;
                    window.gtag("event", t, {
                        event_category: r,
                        event_label: n,
                        value: a
                    })
                }
        },
        xlEm: function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return d
            }));
            var n = r("rePB"),
                a = r("nKUr"),
                o = r("Ff2n"),
                c = r("yKaS"),
                i = r("qu2t"),
                s = r.n(i);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function (t) {
                        Object(n.a)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.tag,
                    r = e.color,
                    n = e.className,
                    i = e.children,
                    l = e.noPadding,
                    d = e.smallPaddingTop,
                    p = e.overlap,
                    b = e.tight,
                    f = Object(o.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    m = t || "div";
                return Object(a.jsx)(m, u(u({
                    className: Object(c.a)([s.a.PageContent, r && s.a["PageContent--".concat(r)], l && s.a["PageContent--nopadding"], d && s.a["PageContent--small-padding-top"], b && s.a["PageContent--tight"], p && s.a["PageContent--overlap"], n])
                }, f), {}, {
                    children: i
                }))
            }
        }
    },
    [
        ["+8Ne", 0, 2, 1, 3, 4]
    ]
]);