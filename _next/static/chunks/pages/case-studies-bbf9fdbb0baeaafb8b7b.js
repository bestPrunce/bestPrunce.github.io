_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [12], {
        "4no+": function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function () {
                return m
            })), n.d(t, "default", (function () {
                return O
            }));
            var a = n("nKUr"),
                r = n("YFqc"),
                c = n.n(r),
                o = n("OpfK"),
                i = n("TuJg"),
                s = n("hdTg"),
                l = n("xlEm"),
                u = n("I2ma"),
                g = n("Bm7v"),
                d = n("J9yn"),
                b = n("yKaS"),
                m = !0;

            function O(e) {
                var t = e.items,
                    n = 0;
                return Object(a.jsxs)(s.a, {
                    title: "运营服务",
                    children: [Object(a.jsx)(g.a, {
                        title: "我们探索了多个平台的运营，具有低成本高效率管理的成熟经验。",
                        MarchContentPadding: !0,
                         titleClassName: "u-margin-bottom-2"
                         
                    }), Object(a.jsx)(l.a, {
                        color: "black",
                        smallPaddingTop: !0,
                        children: [
                            Object(a.jsx)("div", {
                                className: "u-list-clean row",
                                children: Object(a.jsx)("p", {
                                    className: "u-margin-bottom-6 u-margin-medium-bottom-6 column column-push-large-1 column-pull-1",
                                    children: "多平台多渠道布局，为我们的图书吸引不同的客户群体并沉淀出更好的运营策略。面对渠道的增多，平台规则日新月异的变化，我们自有一套低成本高效率运营管理的秘籍。"
                                })
                            }),
                            Object(a.jsx)("ul", {
                            className: "u-list-clean row",
                            children: t.map((function (e, r) {
                                var i = e.slug,
                                    s = e.title,
                                    l = e.locked,
                                    u = e.coming_soon,
                                    g = e.thumbnail;
                                return l && (n = n + 1 > 3 ? 1 : n + 1), Object(a.jsx)("li", {
                                    className: Object(b.a)(["column", "column--6", "column-large--5", "u-margin-bottom-4", r < t.length - 2 ? "u-margin-medium-bottom-8 u-margin-large-bottom-10" : "u-margin-medium-bottom-0"]),
                                    children: Object(a.jsxs)(o.a, {
                                        delay: r % 2 / 10,
                                        children: [l && Object(a.jsx)(c.a, {
                                            href: "/case-studies/locked?slug=".concat(i),
                                            passHref: !0,
                                            children: Object(a.jsxs)(d.a, {
                                                className: "u-display-block",
                                                children: [Object(a.jsx)("img", {
                                                    src: "/assets/images/case-studies/locked/case-study-placeholder-img-".concat(n, ".svg"),
                                                    alt: "",
                                                    className: "u-margin-bottom-2 u-margin-medium-bottom-3"
                                                }), s]
                                            })
                                        }), u && Object(a.jsxs)(a.Fragment, {
                                            children: [Object(a.jsx)("img", {
                                                src: g.thumbnail_regular,
                                                srcSet: "".concat(g.thumbnail_regular, " 1x, ").concat(g.thumbnail_retina, " 2x"),
                                                alt: "",
                                                className: "u-margin-bottom-2 u-margin-medium-bottom-3"
                                            }), Object(a.jsx)("p", {
                                                style: {
                                                    opacity: .8
                                                },
                                                className: "u-margin-top-0 u-margin-bottom-0 title-4",
                                                children: s
                                            })]
                                        }), !u && !l && Object(a.jsx)(c.a, {
                                            href: "/case-studies/".concat(i),
                                            passHref: !0,
                                            children: Object(a.jsxs)(d.a, {
                                                className: "u-display-block",
                                                children: [Object(a.jsx)("img", {
                                                    src: g.thumbnail_regular,
                                                    srcSet: "".concat(g.thumbnail_regular, " 1x, ").concat(g.thumbnail_retina, " 2x"),
                                                    alt: "",
                                                    className: "u-margin-bottom-2 u-margin-medium-bottom-3"
                                                }), s]
                                            })
                                        })]
                                    })
                                }, "case-".concat(r, "-").concat(i))
                            }))
                        })]
                    }), Object(a.jsx)(u.a, {
                        color: "blue",
                        title: "谈谈我们的合作",
                        children: Object(a.jsx)(c.a, {
                            href: "/contact",
                            passHref: !0,
                            children: Object(a.jsx)(i.a, {
                                tag: "a",
                                children: " 联系我们 "
                            })
                        })
                    })]
                })
            }
        },
        Bm7v: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return m
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                o = n("q1tI"),
                i = n("J8E0"),
                s = n("cNOD"),
                l = n("yKaS"),
                u = n("rgco"),
                g = n.n(u);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m(e) {
                var t = e.title,
                    n = e.noPadding,
                    a = e.className,
                    u = e.children,
                    d = e.titleClassName,
                    m = e.matchContentPadding,
                    O = Object(c.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    j = Object(o.useContext)(s.b)[0];
                return Object(r.jsxs)("header", b(b({
                    className: Object(l.a)([g.a.PageHeader, g.a["PageHeader--".concat(j)], n && g.a["PageHeader--no-padding"], m && g.a["PageHeader--match-content-padding"], a])
                }, O), {}, {
                    children: [t && Object(r.jsx)(i.a, {
                        level: 2,
                        asLevel: 1,
                        tag: "div",
                        className: Object(l.a)([d]),
                        children: t
                    }), u]
                }))
            }
        },
        DHtF: function (e, t, n) {
            e.exports = {
                TextLink: "text-link_TextLink__Nkw07",
                TextLink__icon: "text-link_TextLink__icon__3SpE9",
                "TextLink--small": "text-link_TextLink--small__2F828"
            }
        },
        HcMP: function (e, t, n) {
            e.exports = {
                PageFooter: "page-footer_PageFooter__3OouD"
            }
        },
        I2ma: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return g
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                o = n("yKaS"),
                i = n("HcMP"),
                s = n.n(i);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e) {
                var t = e.title,
                    n = e.tag,
                    a = void 0 === n ? "article" : n,
                    i = e.color,
                    l = void 0 === i ? "red" : i,
                    g = e.className,
                    d = e.children,
                    b = Object(c.a)(e, ["title", "tag", "color", "className", "children"]),
                    m = a;
                return Object(r.jsx)(m, u(u({
                    className: Object(o.a)([s.a.PageFooter, "u-background-".concat(l), g])
                }, b), {}, {
                    children: Object(r.jsx)("div", {
                        className: "row",
                        children: Object(r.jsxs)("div", {
                            className: "column column--10",
                            children: [Object(r.jsx)("h2", {
                                className: "u-margin-top-0 u-margin-bottom-3",
                                children: t
                            }), d]
                        })
                    })
                }))
            }
        },
        J9yn: function (e, t, n) {
            "use strict";
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                o = n("q1tI"),
                i = n("Y5Yy"),
                s = n("yKaS"),
                l = n("DHtF"),
                u = n.n(l);

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

            function d(e) {
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
            var b = Object(o.forwardRef)((function (e, t) {
                var n = e.tag,
                    a = void 0 === n ? "a" : n,
                    o = e.className,
                    l = e.children,
                    g = e.small,
                    b = Object(c.a)(e, ["tag", "className", "children", "small"]),
                    m = a;
                return Object(r.jsxs)(m, d(d({
                    ref: t,
                    className: Object(s.a)([u.a.TextLink, g && u.a["TextLink--small"], o])
                }, b), {}, {
                    children: [l, " ", Object(r.jsx)(i.a, {
                        id: "arrow",
                        className: u.a.TextLink__icon
                    })]
                }))
            }));
            t.a = b
        },
        OpfK: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return m
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("ODXe"),
                o = n("Ff2n"),
                i = n("l7NP"),
                s = n("rmG7"),
                l = n("yKaS"),
                u = n("m0d9"),
                g = n.n(u);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m(e) {
                var t = e.className,
                    n = e.children,
                    a = e.directionFrom,
                    u = void 0 === a ? "bottom" : a,
                    d = e.threshold,
                    m = void 0 === d ? .1 : d,
                    O = e.tag,
                    j = void 0 === O ? "div" : O,
                    p = e.delay,
                    f = void 0 === p ? 0 : p,
                    h = Object(o.a)(e, ["className", "children", "directionFrom", "threshold", "tag", "delay"]),
                    P = Object(s.a)()[0],
                    _ = Object(i.a)(m),
                    y = Object(c.a)(_, 2),
                    v = y[0],
                    x = y[1],
                    w = j;
                return Object(r.jsx)(w, b(b({
                    ref: v,
                    className: Object(l.a)([g.a.Animate, g.a["Animate--".concat(u)], x && g.a["Animate--inview"], P && g.a["Animate--rm"], t]),
                    style: {
                        transitionDelay: "".concat(f, "s")
                    }
                }, h), {}, {
                    children: n
                }))
            }
        },
        hdTg: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return u
            }));
            var a = n("nKUr"),
                r = n("q1tI"),
                c = n("rCDY"),
                o = n("z1CN"),
                i = n("cNOD"),
                s = n("8oZb"),
                l = n("yKaS");

            function u(e) {
                var t = e.a11yTitle,
                    n = void 0 === t || t,
                    u = e.title,
                    g = e.description,
                    d = e.children,
                    b = e.className,
                    m = e.theme,
                    O = void 0 === m ? "dark" : m,
                    j = e.ogImage,
                    p = e.twImage,
                    f = Object(r.useContext)(i.b)[1];
                return Object(r.useEffect)((function () {
                    f(O)
                }), [O]), Object(a.jsxs)(a.Fragment, {
                    children: [Object(a.jsx)(s.a, {
                        title: u,
                        description: g,
                        ogImage: j,
                        twImage: p
                    }), Object(a.jsx)(o.a, {}), Object(a.jsxs)("main", {
                        id: "main",
                        className: Object(l.a)(["u-overflow-hidden", b]),
                        children: [!1 !== n && Object(a.jsx)("h1", {
                            className: "visually-hidden",
                            children: "string" === typeof n ? n : u
                        }), d]
                    }), Object(a.jsx)(c.a, {})]
                })
            }
        },
        l7NP: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return c
            }));
            var a = n("ODXe"),
                r = n("q1tI");

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = Object(r.useState)(!1),
                    c = n[0],
                    o = n[1],
                    i = Object(r.useState)(null),
                    s = i[0],
                    l = i[1],
                    u = Object(r.useRef)(),
                    g = Object(r.useRef)();
                return Object(r.useEffect)((function () {
                    var n = g.current,
                        r = u.current;
                    if (n && r && r.unobserve(n), s) {
                        var c = !1;
                        return n = s, (r = new IntersectionObserver((function (e) {
                                var i = Object(a.a)(e, 1)[0];
                                c || (o(i.isIntersecting), t && i.isIntersecting && r.unobserve(n))
                            }), {
                                threshold: e
                            })).observe(n),
                            function () {
                                c = !0, r.unobserve(n), r = null, n = null
                            }
                    }
                }), [s, t, e]), [l, c]
            }
        },
        m0d9: function (e, t, n) {
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
        "q/7s": function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/case-studies", function () {
                return n("4no+")
            }])
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
                return g
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                o = n("yKaS"),
                i = n("qu2t"),
                s = n.n(i);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e) {
                var t = e.tag,
                    n = e.color,
                    a = e.className,
                    i = e.children,
                    l = e.noPadding,
                    g = e.smallPaddingTop,
                    d = e.overlap,
                    b = e.tight,
                    m = Object(c.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    O = t || "div";
                return Object(r.jsx)(O, u(u({
                    className: Object(o.a)([s.a.PageContent, n && s.a["PageContent--".concat(n)], l && s.a["PageContent--nopadding"], g && s.a["PageContent--small-padding-top"], b && s.a["PageContent--tight"], d && s.a["PageContent--overlap"], a])
                }, m), {}, {
                    children: i
                }))
            }
        }
    },
    [
        ["q/7s", 0, 2, 1, 3, 4]
    ]
]);