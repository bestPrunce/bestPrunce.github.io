_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [17], {
        Bm7v: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return O
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                i = n("q1tI"),
                o = n("J8E0"),
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

            function O(e) {
                var t = e.title,
                    n = e.noPadding,
                    a = e.className,
                    u = e.children,
                    d = e.titleClassName,
                    O = e.matchContentPadding,
                    m = Object(c.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    j = Object(i.useContext)(s.b)[0];
                return Object(r.jsxs)("header", b(b({
                    className: Object(l.a)([g.a.PageHeader, g.a["PageHeader--".concat(j)], n && g.a["PageHeader--no-padding"], O && g.a["PageHeader--match-content-padding"], a])
                }, m), {}, {
                    children: [t && Object(r.jsx)(o.a, {
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
        J9yn: function (e, t, n) {
            "use strict";
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("Ff2n"),
                i = n("q1tI"),
                o = n("Y5Yy"),
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
            var b = Object(i.forwardRef)((function (e, t) {
                var n = e.tag,
                    a = void 0 === n ? "a" : n,
                    i = e.className,
                    l = e.children,
                    g = e.small,
                    b = Object(c.a)(e, ["tag", "className", "children", "small"]),
                    O = a;
                return Object(r.jsxs)(O, d(d({
                    ref: t,
                    className: Object(s.a)([u.a.TextLink, g && u.a["TextLink--small"], i])
                }, b), {}, {
                    children: [l, " ", Object(r.jsx)(o.a, {
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
                return O
            }));
            var a = n("rePB"),
                r = n("nKUr"),
                c = n("ODXe"),
                i = n("Ff2n"),
                o = n("l7NP"),
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

            function O(e) {
                var t = e.className,
                    n = e.children,
                    a = e.directionFrom,
                    u = void 0 === a ? "bottom" : a,
                    d = e.threshold,
                    O = void 0 === d ? .1 : d,
                    m = e.tag,
                    j = void 0 === m ? "div" : m,
                    p = e.delay,
                    f = void 0 === p ? 0 : p,
                    h = Object(i.a)(e, ["className", "children", "directionFrom", "threshold", "tag", "delay"]),
                    _ = Object(s.a)()[0],
                    P = Object(o.a)(O),
                    v = Object(c.a)(P, 2),
                    y = v[0],
                    w = v[1],
                    x = j;
                return Object(r.jsx)(x, b(b({
                    ref: y,
                    className: Object(l.a)([g.a.Animate, g.a["Animate--".concat(u)], w && g.a["Animate--inview"], _ && g.a["Animate--rm"], t]),
                    style: {
                        transitionDelay: "".concat(f, "s")
                    }
                }, h), {}, {
                    children: n
                }))
            }
        },
        YcUj: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/insights", function () {
                return n("vQBj")
            }])
        },
        hdTg: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return u
            }));
            var a = n("nKUr"),
                r = n("q1tI"),
                c = n("rCDY"),
                i = n("z1CN"),
                o = n("cNOD"),
                s = n("8oZb"),
                l = n("yKaS");

            function u(e) {
                var t = e.a11yTitle,
                    n = void 0 === t || t,
                    u = e.title,
                    g = e.description,
                    d = e.children,
                    b = e.className,
                    O = e.theme,
                    m = void 0 === O ? "dark" : O,
                    j = e.ogImage,
                    p = e.twImage,
                    f = Object(r.useContext)(o.b)[1];
                return Object(r.useEffect)((function () {
                    f(m)
                }), [m]), Object(a.jsxs)(a.Fragment, {
                    children: [Object(a.jsx)(s.a, {
                        title: u,
                        description: g,
                        ogImage: j,
                        twImage: p
                    }), Object(a.jsx)(i.a, {}), Object(a.jsxs)("main", {
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
                    i = n[1],
                    o = Object(r.useState)(null),
                    s = o[0],
                    l = o[1],
                    u = Object(r.useRef)(),
                    g = Object(r.useRef)();
                return Object(r.useEffect)((function () {
                    var n = g.current,
                        r = u.current;
                    if (n && r && r.unobserve(n), s) {
                        var c = !1;
                        return n = s, (r = new IntersectionObserver((function (e) {
                                var o = Object(a.a)(e, 1)[0];
                                c || (i(o.isIntersecting), t && o.isIntersecting && r.unobserve(n))
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
        vQBj: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSG", (function () {
                return O
            })), n.d(t, "default", (function () {
                return m
            }));
            var a = n("nKUr"),
                r = n("YFqc"),
                c = n.n(r),
                i = n("q1tI"),
                o = n("OpfK"),
                s = n("TuJg"),
                l = n("hdTg"),
                u = n("xlEm"),
                g = n("Bm7v"),
                d = n("J9yn"),
                b = n("yKaS"),
                O = !0;

            function m(e) {
                var t = e.insights,
                    n = Object(i.useState)(1),
                    r = n[0],
                    O = n[1],
                    m = Object(i.useRef)();
                Object(i.useEffect)((function () {
                    r <= 1 || m.current.children[Math.min(8 * (r - 1), t.length)].querySelector("a").focus()
                }), [r]);
                var j = t.slice(0, 8 * r),
                    p = t.length,
                    f = Math.ceil(p / 8);
                return Object(a.jsxs)(l.a, {
                    title: "技术服务",
                    children: [Object(a.jsx)(g.a, {
                        title: "我们为最新的平台规则研发配套技术，让线上运营变得更简单流畅"
                    }), Object(a.jsx)(u.a, {
                        overlap: !0,
                        children: Object(a.jsxs)("div", {
                            className: "u-margin-top--4 u-margin-medium-top--8",
                            children: [Object(a.jsx)("ul", {
                                className: "row u-list-clean",
                                ref: m,
                                children: j.map((function (e, n) {
                                    var r = e.title,
                                        i = e.coverImage,
                                        s = e.thumbnail,
                                        l = e.slug;
                                    return Object(a.jsx)("li", {
                                        className: Object(b.a)(["column", "column--5", n < t.length - 2 && "u-margin-bottom-4 u-margin-medium-bottom-8 u-margin-large-bottom-10"]),
                                        children: Object(a.jsx)(o.a, {
                                            delay: n % 2 / 10,
                                            children: Object(a.jsx)(c.a, {
                                                as: "/insights/".concat(l),
                                                href: "/insights/[slug]",
                                                passHref: !0,
                                                children: Object(a.jsxs)(d.a, {
                                                    className: "u-display-block",
                                                    children: [Object(a.jsx)("img", {
                                                        src: s || i,
                                                        alt: "",
                                                        className: "u-margin-bottom-2 u-margin-medium-bottom-3"
                                                    }), r]
                                                })
                                            })
                                        })
                                    }, "insight-".concat(l))
                                }))
                            }), Object(a.jsx)(o.a, {
                                style: {
                                    textAlign: "center"
                                },
                                children: f > r && Object(a.jsxs)(s.a, {
                                    onClick: function () {
                                        O((function (e) {
                                            return e + 1
                                        }))
                                    },
                                    children: ["了解", "更多"]
                                })
                            })]
                        })
                    })]
                })
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
                i = n("yKaS"),
                o = n("qu2t"),
                s = n.n(o);

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
                    o = e.children,
                    l = e.noPadding,
                    g = e.smallPaddingTop,
                    d = e.overlap,
                    b = e.tight,
                    O = Object(c.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    m = t || "div";
                return Object(r.jsx)(m, u(u({
                    className: Object(i.a)([s.a.PageContent, n && s.a["PageContent--".concat(n)], l && s.a["PageContent--nopadding"], g && s.a["PageContent--small-padding-top"], b && s.a["PageContent--tight"], d && s.a["PageContent--overlap"], a])
                }, O), {}, {
                    children: o
                }))
            }
        }
    },
    [
        ["YcUj", 0, 2, 1, 3, 4]
    ]
]);