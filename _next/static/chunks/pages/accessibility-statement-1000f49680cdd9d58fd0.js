_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [10], {
        "8kg2": function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/accessibility-statement", function () {
                return n("LdJj")
            }])
        },
        Bm7v: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return j
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                o = n("q1tI"),
                i = n("J8E0"),
                s = n("cNOD"),
                g = n("yKaS"),
                l = n("rgco"),
                d = n.n(l);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e) {
                var t = e.title,
                    n = e.noPadding,
                    a = e.className,
                    l = e.children,
                    u = e.titleClassName,
                    j = e.matchContentPadding,
                    O = Object(c.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    b = Object(o.useContext)(s.b)[0];
                return Object(r.jsxs)("header", p(p({
                    className: Object(g.a)([d.a.PageHeader, d.a["PageHeader--".concat(b)], n && d.a["PageHeader--no-padding"], j && d.a["PageHeader--match-content-padding"], a])
                }, O), {}, {
                    children: [t && Object(r.jsx)(i.a, {
                        level: 2,
                        asLevel: 1,
                        tag: "div",
                        className: Object(g.a)([u]),
                        children: t
                    }), l]
                }))
            }
        },
        LdJj: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function () {
                return i
            })), n.d(t, "default", (function () {
                return s
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("LeBX");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var i = !0;

            function s(e) {
                return Object(r.jsx)(c.a, function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach((function (t) {
                            Object(a.a)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e))
            }
        },
        LeBX: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return i
            }));
            var a = n("nKUr"),
                r = n("hdTg"),
                c = n("xlEm"),
                o = n("Bm7v");

            function i(e) {
                var t = e.meta_title,
                    n = e.title,
                    i = e.introduction,
                    s = e.meta_description,
                    g = e.outro,
                    l = e.content;
                return Object(a.jsxs)(r.a, {
                    title: t,
                    description: s,
                    theme: "light",
                    children: [Object(a.jsx)(o.a, {
                        title: n,
                        children: i && Object(a.jsx)("div", {
                            className: "row",
                            children: Object(a.jsx)("div", {
                                className: "column column--10 column-large--8 body-larger cms-markup",
                                dangerouslySetInnerHTML: {
                                    __html: i
                                }
                            })
                        })
                    }), Object(a.jsx)(c.a, {
                        smallPaddingTop: !0,
                        children: (l || g) && Object(a.jsxs)("div", {
                            className: "row",
                            children: [l && Object(a.jsx)("div", {
                                className: "column column--10 column-large--8 cms-markup",
                                dangerouslySetInnerHTML: {
                                    __html: l
                                }
                            }), g && Object(a.jsx)("div", {
                                className: "column column--10 column-large--8 u-margin-medium-top-6 u-margin-bottom-0 cms-markup body-larger",
                                dangerouslySetInnerHTML: {
                                    __html: g
                                }
                            })]
                        })
                    })]
                })
            }
        },
        hdTg: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return l
            }));
            var a = n("nKUr"),
                r = n("q1tI"),
                c = n("rCDY"),
                o = n("z1CN"),
                i = n("cNOD"),
                s = n("8oZb"),
                g = n("yKaS");

            function l(e) {
                var t = e.a11yTitle,
                    n = void 0 === t || t,
                    l = e.title,
                    d = e.description,
                    u = e.children,
                    p = e.className,
                    j = e.theme,
                    O = void 0 === j ? "dark" : j,
                    b = e.ogImage,
                    m = e.twImage,
                    P = Object(r.useContext)(i.b)[1];
                return Object(r.useEffect)((function () {
                    P(O)
                }), [O]), Object(a.jsxs)(a.Fragment, {
                    children: [Object(a.jsx)(s.a, {
                        title: l,
                        description: d,
                        ogImage: b,
                        twImage: m
                    }), Object(a.jsx)(o.a, {}), Object(a.jsxs)("main", {
                        id: "main",
                        className: Object(g.a)(["u-overflow-hidden", p]),
                        children: [!1 !== n && Object(a.jsx)("h1", {
                            className: "visually-hidden",
                            children: "string" === typeof n ? n : l
                        }), u]
                    }), Object(a.jsx)(c.a, {})]
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
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                o = n("yKaS"),
                i = n("qu2t"),
                s = n.n(i);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.tag,
                    n = e.color,
                    a = e.className,
                    i = e.children,
                    g = e.noPadding,
                    d = e.smallPaddingTop,
                    u = e.overlap,
                    p = e.tight,
                    j = Object(c.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    O = t || "div";
                return Object(r.jsx)(O, l(l({
                    className: Object(o.a)([s.a.PageContent, n && s.a["PageContent--".concat(n)], g && s.a["PageContent--nopadding"], d && s.a["PageContent--small-padding-top"], p && s.a["PageContent--tight"], u && s.a["PageContent--overlap"], a])
                }, j), {}, {
                    children: i
                }))
            }
        }
    },
    [
        ["8kg2", 0, 2, 1, 3, 4]
    ]
]);