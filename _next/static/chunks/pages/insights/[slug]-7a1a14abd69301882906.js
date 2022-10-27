_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [18], {
        "/a9y": function (e, t, n) {
            "use strict";
            var r = n("lwsE"),
                a = n("W8MJ"),
                c = n("7W2i"),
                o = n("a1gu"),
                i = n("Nsbk");

            function s(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = i(e);
                    if (t) {
                        var a = i(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
                }
            }
            var l = n("TqRt");
            t.__esModule = !0, t.default = void 0;
            var u = l(n("q1tI")),
                d = l(n("8Kt/")),
                g = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function p(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
                }
            }
            var m = function (e) {
                c(n, e);
                var t = s(n);

                function n() {
                    return r(this, n), t.apply(this, arguments)
                }
                return a(n, [{
                    key: "render",
                    value: function () {
                        var e = this.props.statusCode,
                            t = this.props.title || g[e] || "An unexpected error has occurred";
                        return u.default.createElement("div", {
                            style: b.error
                        }, u.default.createElement(d.default, null, u.default.createElement("title", null, e, ": ", t)), u.default.createElement("div", null, u.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body { margin: 0 }"
                            }
                        }), e ? u.default.createElement("h1", {
                            style: b.h1
                        }, e) : null, u.default.createElement("div", {
                            style: b.desc
                        }, u.default.createElement("h2", {
                            style: b.h2
                        }, t, "."))))
                    }
                }]), n
            }(u.default.Component);
            t.default = m, m.displayName = "ErrorPage", m.getInitialProps = p, m.origGetInitialProps = p;
            var b = {
                error: {
                    color: "#000",
                    background: "#fff",
                    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    display: "inline-block",
                    textAlign: "left",
                    lineHeight: "49px",
                    height: "49px",
                    verticalAlign: "middle"
                },
                h1: {
                    display: "inline-block",
                    borderRight: "1px solid rgba(0, 0, 0,.3)",
                    margin: 0,
                    marginRight: "20px",
                    padding: "10px 23px 10px 0",
                    fontSize: "24px",
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }
            }
        },
        Bm7v: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return m
            }));
            var r = n("rePB"),
                a = n("nKUr"),
                c = n("Ff2n"),
                o = n("q1tI"),
                i = n("J8E0"),
                s = n("cNOD"),
                l = n("yKaS"),
                u = n("rgco"),
                d = n.n(u);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function (t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m(e) {
                var t = e.title,
                    n = e.noPadding,
                    r = e.className,
                    u = e.children,
                    g = e.titleClassName,
                    m = e.matchContentPadding,
                    b = Object(c.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    f = Object(o.useContext)(s.b)[0];
                return Object(a.jsxs)("header", p(p({
                    className: Object(l.a)([d.a.PageHeader, d.a["PageHeader--".concat(f)], n && d.a["PageHeader--no-padding"], m && d.a["PageHeader--match-content-padding"], r])
                }, b), {}, {
                    children: [t && Object(a.jsx)(i.a, {
                        level: 2,
                        asLevel: 1,
                        tag: "div",
                        className: Object(l.a)([g]),
                        children: t
                    }), u]
                }))
            }
        },
        CiGP: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/insights/[slug]", function () {
                return n("hRwy")
            }])
        },
        "HaE+": function (e, t, n) {
            "use strict";

            function r(e, t, n, r, a, c, o) {
                try {
                    var i = e[c](o),
                        s = i.value
                } catch (l) {
                    return void n(l)
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function a(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (a, c) {
                        var o = e.apply(t, n);

                        function i(e) {
                            r(o, a, c, i, s, "next", e)
                        }

                        function s(e) {
                            r(o, a, c, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            n.d(t, "a", (function () {
                return a
            }))
        },
        HcMP: function (e, t, n) {
            e.exports = {
                PageFooter: "page-footer_PageFooter__3OouD"
            }
        },
        I2ma: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return d
            }));
            var r = n("rePB"),
                a = n("nKUr"),
                c = n("Ff2n"),
                o = n("yKaS"),
                i = n("HcMP"),
                s = n.n(i);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.title,
                    n = e.tag,
                    r = void 0 === n ? "article" : n,
                    i = e.color,
                    l = void 0 === i ? "red" : i,
                    d = e.className,
                    g = e.children,
                    p = Object(c.a)(e, ["title", "tag", "color", "className", "children"]),
                    m = r;
                return Object(a.jsx)(m, u(u({
                    className: Object(o.a)([s.a.PageFooter, "u-background-".concat(l), d])
                }, p), {}, {
                    children: Object(a.jsx)("div", {
                        className: "row",
                        children: Object(a.jsxs)("div", {
                            className: "column column--10",
                            children: [Object(a.jsx)("h2", {
                                className: "u-margin-top-0 u-margin-bottom-3",
                                children: t
                            }), g]
                        })
                    })
                }))
            }
        },
        Wkxu: function (e, t, n) {
            e.exports = {
                Authors: "insight-page_Authors__39h1T"
            }
        },
        eomm: function (e, t, n) {
            e.exports = n("/a9y")
        },
        hRwy: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function () {
                return w
            })), n.d(t, "default", (function () {
                return C
            }));
            var r = n("nKUr"),
                a = n("rePB"),
                c = n("o0o1"),
                o = n.n(c),
                i = n("HaE+"),
                s = n("q1tI"),
                l = n("20a2"),
                u = n("eomm"),
                d = n.n(u),
                g = n("YFqc"),
                p = n.n(g),
                m = n("hdTg"),
                b = n("TuJg"),
                f = n("I2ma"),
                j = n("Bm7v"),
                h = n("xlEm"),
                O = n("yKaS"),
                P = n("Wkxu"),
                v = n.n(P);

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function x(e) {
                var t = e.parsedContent,
                    n = e.regularContent,
                    a = e.slug,
                    c = Object(O.a)(["column", "column--10", "column-large--8", "column-xlarge--6", "u-margin-top-4", "u-margin-medium-top-6", "u-margin-large-top-7", "u-margin-xlarge-top-8", "cms-markup"]),
                    o = "".concat(a, "-").concat(t ? "parsed" : "regular", "-content");
                return t ? Object(r.jsx)("div", {
                    className: c,
                    children: t
                }, o) : Object(r.jsx)("div", {
                    className: c,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }, o)
            }
            var w = !0;

            function C(e) {
                var t = e.insight,
                    a = e.nextInsight,
                    c = Object(l.useRouter)(),
                    u = Object(s.useState)(null),
                    g = u[0],
                    O = u[1];
                if (Object(s.useEffect)((function () {
                        var e = t.upgrade,
                            a = t.content;
                        e && a ? function () {
                            var c = Object(i.a)(o.a.mark((function c() {
                                var i, s;
                                return o.a.wrap((function (c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            return c.next = 2, n.e(24).then(n.bind(null, "4a3J")).then((function (e) {
                                                return e.default
                                            }));
                                        case 2:
                                            return i = c.sent, c.next = 5, n.e(25).then(n.bind(null, "FEYk")).then((function (e) {
                                                return e.default
                                            }));
                                        case 5:
                                            s = c.sent, O(i(a, {
                                                replace: function (n) {
                                                    var a = n.attribs;
                                                    if (a && a.class && "insight-upgrade" === a.class) {
                                                        var c = e.title,
                                                            o = e.description,
                                                            i = e.tracking_title,
                                                            l = e.email_subject,
                                                            u = e.email_message,
                                                            d = e.feedback_title,
                                                            g = e.feedback_message,
                                                            p = e.download,
                                                            m = e.upgrade_type,
                                                            b = e.page_slug;
                                                        return Object(r.jsx)("div", {
                                                            className: "u-bleed-grid u-margin-top-5 u-margin-bottom-5",
                                                            children: Object(r.jsx)(s, {
                                                                title: c,
                                                                description: o,
                                                                trackingTitle: i,
                                                                emailSubject: l,
                                                                emailMessage: u,
                                                                feedbackTitle: d,
                                                                feedbackMessage: g,
                                                                download: p,
                                                                type: m,
                                                                pageHref: b && "/insights/".concat(t.slug, "/").concat(b)
                                                            })
                                                        })
                                                    }
                                                }
                                            }));
                                        case 8:
                                        case "end":
                                            return c.stop()
                                    }
                                }), c)
                            })));
                            return function () {
                                return c.apply(this, arguments)
                            }
                        }()() : O(null)
                    }), [t.upgrade, t.content, t.slug]), !c.isFallback && (null === t || void 0 === t || !t.slug)) return Object(r.jsx)(d.a, {
                    statusCode: 404
                });
                var P = t.slug,
                    y = t.meta_title,
                    w = t.title,
                    C = t.meta_description,
                    N = t.coverImage,
                    E = t.date,
                    k = t.authors,
                    S = t.content,
                    D = t.next_article_blade_color,
                    H = t.animated_cover,
                    I = t.animated_cover_image,
                    T = {
                        width: 1156,
                        height: 578,
                        loading: "lazy",
                        alt: ""
                    };
                return Object(r.jsx)(m.a, {
                    theme: "light",
                    title: "".concat(y || w, " | Insights"),
                    description: C,
                    ogImage: H ? I : N,
                    twImage: H ? I : N,
                    children: c.isFallback ? Object(r.jsx)("p", {
                        children: "Loading\u2026"
                    }) : Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)("article", {
                            children: [Object(r.jsxs)(j.a, {
                                title: w,
                                noPadding: !0,
                                children: [Object(r.jsxs)("div", {
                                    className: "row ",
                                    children: [Object(r.jsxs)("p", {
                                        className: "column column--3 column-push-large-1 body-smaller u-margin-bottom-3 u-margin-large-bottom-4",
                                        children: [Object(r.jsx)("strong", {
                                            children: "Published: "
                                        }), Object(r.jsx)("br", {}), new Date(E).toLocaleDateString("en-CA", {
                                            year: "numeric",
                                            month: "long"
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        className: "column body-smaller u-margin-bottom-3 u-margin-large-bottom-4",
                                        children: [Object(r.jsx)("p", {
                                            className: "u-margin-bottom-0",
                                            children: Object(r.jsxs)("strong", {
                                                children: ["Author", k.length > 1 && "s", ": "]
                                            })
                                        }), Object(r.jsx)("ul", {
                                            className: v.a.Authors,
                                            children: k.map((function (e, t) {
                                                return Object(r.jsx)("li", {
                                                    children: e
                                                }, "authors-".concat(t))
                                            }))
                                        })]
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: "row",
                                    children: Object(r.jsx)("div", {
                                        className: "column column--12 column-large--10",
                                        children: H ? Object(r.jsxs)("div", {
                                            className: "u-animated-content u-margin-bottom--8",
                                            children: [Object(r.jsx)("img", _({
                                                src: I
                                            }, T)), Object(r.jsx)("img", _({
                                                src: N
                                            }, T))]
                                        }) : Object(r.jsx)("img", _({
                                            className: "u-display-block u-full-width u-margin-bottom--8",
                                            src: N
                                        }, T))
                                    })
                                })]
                            }), Object(r.jsx)(h.a, {
                                overlap: !0,
                                children: Object(r.jsx)("div", {
                                    className: "row u-padding-top-8",
                                    children: Object(r.jsx)(x, {
                                        parsedContent: g,
                                        regularContent: S,
                                        slug: P
                                    })
                                })
                            })]
                        }), a && Object(r.jsx)(f.a, {
                            color: D && D.toLowerCase(),
                            title: a.title,
                            children: Object(r.jsx)(p.a, {
                                as: "/insights/".concat(a.slug),
                                href: "/insights/[slug]",
                                passHref: !0,
                                children: Object(r.jsx)(b.a, {
                                    tag: "a",
                                    children: "Read"
                                })
                            })
                        })]
                    })
                })
            }
        },
        hdTg: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return u
            }));
            var r = n("nKUr"),
                a = n("q1tI"),
                c = n("rCDY"),
                o = n("z1CN"),
                i = n("cNOD"),
                s = n("8oZb"),
                l = n("yKaS");

            function u(e) {
                var t = e.a11yTitle,
                    n = void 0 === t || t,
                    u = e.title,
                    d = e.description,
                    g = e.children,
                    p = e.className,
                    m = e.theme,
                    b = void 0 === m ? "dark" : m,
                    f = e.ogImage,
                    j = e.twImage,
                    h = Object(a.useContext)(i.b)[1];
                return Object(a.useEffect)((function () {
                    h(b)
                }), [b]), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(s.a, {
                        title: u,
                        description: d,
                        ogImage: f,
                        twImage: j
                    }), Object(r.jsx)(o.a, {}), Object(r.jsxs)("main", {
                        id: "main",
                        className: Object(l.a)(["u-overflow-hidden", p]),
                        children: [!1 !== n && Object(r.jsx)("h1", {
                            className: "visually-hidden",
                            children: "string" === typeof n ? n : u
                        }), g]
                    }), Object(r.jsx)(c.a, {})]
                })
            }
        },
        qu2t: function (e, t, n) {
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
        rgco: function (e, t, n) {
            e.exports = {
                PageHeader: "page-header_PageHeader__2LuS_",
                "PageHeader--no-padding": "page-header_PageHeader--no-padding__10nON",
                "PageHeader--match-content-padding": "page-header_PageHeader--match-content-padding__2JfCx",
                "PageHeader--light": "page-header_PageHeader--light__Gjq-f"
            }
        },
        xlEm: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return d
            }));
            var r = n("rePB"),
                a = n("nKUr"),
                c = n("Ff2n"),
                o = n("yKaS"),
                i = n("qu2t"),
                s = n.n(i);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.tag,
                    n = e.color,
                    r = e.className,
                    i = e.children,
                    l = e.noPadding,
                    d = e.smallPaddingTop,
                    g = e.overlap,
                    p = e.tight,
                    m = Object(c.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    b = t || "div";
                return Object(a.jsx)(b, u(u({
                    className: Object(o.a)([s.a.PageContent, n && s.a["PageContent--".concat(n)], l && s.a["PageContent--nopadding"], d && s.a["PageContent--small-padding-top"], p && s.a["PageContent--tight"], g && s.a["PageContent--overlap"], r])
                }, m), {}, {
                    children: i
                }))
            }
        }
    },
    [
        ["CiGP", 0, 2, 1, 3, 4]
    ]
]);