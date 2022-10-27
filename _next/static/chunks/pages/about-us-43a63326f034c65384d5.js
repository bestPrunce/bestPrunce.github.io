_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [8], {
        Bm7v: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return u
            }));
            var s = a("rePB"),
                n = a("nKUr"),
                c = a("Ff2n"),
                r = a("q1tI"),
                o = a("J8E0"),
                i = a("cNOD"),
                l = a("yKaS"),
                j = a("rgco"),
                d = a.n(j);

            function m(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(a), !0).forEach((function (t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function u(e) {
                var t = e.title,
                    a = e.noPadding,
                    s = e.className,
                    j = e.children,
                    m = e.titleClassName,
                    u = e.matchContentPadding,
                    b = Object(c.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    g = Object(r.useContext)(i.b)[0];
                return Object(n.jsxs)("header", h(h({
                    className: Object(l.a)([d.a.PageHeader, d.a["PageHeader--".concat(g)], a && d.a["PageHeader--no-padding"], u && d.a["PageHeader--match-content-padding"], s])
                }, b), {}, {
                    children: [t && Object(n.jsx)(o.a, {
                        level: 2,
                        asLevel: 1,
                        tag: "div",
                        className: Object(l.a)([m]),
                        children: t
                    }), j]
                }))
            }
        },
        DHtF: function (e, t, a) {
            e.exports = {
                TextLink: "text-link_TextLink__Nkw07",
                TextLink__icon: "text-link_TextLink__icon__3SpE9",
                "TextLink--small": "text-link_TextLink--small__2F828"
            }
        },
        DN2A: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return d
            }));
            var s = a("rePB"),
                n = a("nKUr"),
                c = a("Ff2n"),
                r = a("yKaS"),
                o = a("pzGH"),
                i = a.n(o);

            function l(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(a), !0).forEach((function (t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.className,
                    a = e.children,
                    s = Object(c.a)(e, ["className", "children"]);
                return Object(n.jsx)("ul", j(j({
                    className: Object(r.a)(["u-list-clean", i.a.ImageList, t])
                }, s), {}, {
                    children: a
                }))
            }
        },
        J9yn: function (e, t, a) {
            "use strict";
            var s = a("rePB"),
                n = a("nKUr"),
                c = a("Ff2n"),
                r = a("q1tI"),
                o = a("Y5Yy"),
                i = a("yKaS"),
                l = a("DHtF"),
                j = a.n(l);

            function d(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(a), !0).forEach((function (t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var h = Object(r.forwardRef)((function (e, t) {
                var a = e.tag,
                    s = void 0 === a ? "a" : a,
                    r = e.className,
                    l = e.children,
                    d = e.small,
                    h = Object(c.a)(e, ["tag", "className", "children", "small"]),
                    u = s;
                return Object(n.jsxs)(u, m(m({
                    ref: t,
                    className: Object(i.a)([j.a.TextLink, d && j.a["TextLink--small"], r])
                }, h), {}, {
                    children: [l, " ", Object(n.jsx)(o.a, {
                        id: "arrow",
                        className: j.a.TextLink__icon
                    })]
                }))
            }));
            t.a = h
        },
        MTsT: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us", function () {
                return a("OjcB")
            }])
        },
        OjcB: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function () {
                return I
            }));
            var s = a("nKUr"),
                n = a("ODXe"),
                c = a("hdTg"),
                r = a("xlEm"),
                o = a("Bm7v"),
                i = a("J9yn"),
                l = a("DN2A"),
                j = a("e/IC"),
                d = a("OpfK"),
                m = a("q1tI"),
                h = a("l7NP"),
                u = a("yKaS"),
                b = a("rcdh"),
                g = a.n(b);

            function p(e) {
                var t = e.className,
                    a = Object(h.a)(.8),
                    c = Object(n.a)(a, 2),
                    r = c[0],
                    o = c[1],
                    i = Object(m.useState)("doers"),
                    l = i[0],
                    j = i[1];
                return Object(m.useEffect)((function () {
                    if (o) {
                        var e = ["doers", "quality", "ethical", "curious", "collaborative"],
                            t = setInterval((function () {
                                j((function (t) {
                                    var a = e.indexOf(t) + 1;
                                    return a >= e.length && (a = 0), e[a]
                                }))
                            }), 4e3);
                        return function () {
                            clearInterval(t)
                        }
                    }
                }), [o]), Object(s.jsxs)("svg", {
                    ref: r,
                    "aria-hidden": "true",
                    className: Object(u.a)([g.a.ValueIcon, t]),
                    viewBox: "0 0 330 310",
                    children: [Object(s.jsxs)("defs", {
                        children: [Object(s.jsxs)("linearGradient", {
                            id: "value-icon-b",
                            x1: "50%",
                            x2: "75.772%",
                            y1: "0%",
                            y2: "87.891%",
                            children: [Object(s.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#FDF665"
                            }), Object(s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#F9EA35"
                            })]
                        }), Object(s.jsxs)("linearGradient", {
                            id: "value-icon-c",
                            x1: "24.626%",
                            x2: "78.332%",
                            y1: "9.299%",
                            y2: "89.12%",
                            children: [Object(s.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#F4F4F4"
                            }), Object(s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#EBEBEB"
                            })]
                        }), Object(s.jsxs)("linearGradient", {
                            id: "value-icon-d",
                            x1: "50%",
                            x2: "50%",
                            y1: "0%",
                            y2: "100%",
                            children: [Object(s.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#F57D98"
                            }), Object(s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#F36279"
                            })]
                        }), Object(s.jsxs)("linearGradient", {
                            id: "value-icon-e",
                            x1: "50%",
                            x2: "100%",
                            y1: "11.774%",
                            y2: "88.226%",
                            children: [Object(s.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#BBF1AE"
                            }), Object(s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#85DE76"
                            })]
                        }), Object(s.jsxs)("linearGradient", {
                            id: "value-icon-f",
                            x1: "30.433%",
                            x2: "72.049%",
                            y1: "0%",
                            y2: "100%",
                            children: [Object(s.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#B8E9F2"
                            }), Object(s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#96DAEA"
                            })]
                        }), Object(s.jsx)("filter", {
                            id: "value-icon-a",
                            children: Object(s.jsx)("feColorMatrix", {
                                in: "SourceGraphic",
                                values: "0 0 0 0 0.850289 0 0 0 0 0.850289 0 0 0 0 0.850289 0 0 0 1.000000 0"
                            })
                        })]
                    }), Object(s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [Object(s.jsx)("g", {
                            filter: "url(#value-icon-a)",
                            transform: "translate(18)",
                            children: Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M0 2.069a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.28 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0M-.001 38.346a1.51 1.51 0 113.02 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.28 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0M-.001 74.623a1.51 1.51 0 113.02 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.28 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0M-.001 110.9a1.51 1.51 0 113.02.001 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.28 0a1.509 1.509 0 113.017-.001 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0M-.001 147.178a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.278 0a1.508 1.508 0 113.019 0 1.51 1.51 0 01-3.019 0m36.277 0a1.508 1.508 0 113.019 0 1.509 1.509 0 11-3.019 0m36.278 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0M-.001 183.455a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.278 0a1.508 1.508 0 113.019 0 1.51 1.51 0 01-3.019 0m36.277 0a1.508 1.508 0 113.019 0 1.509 1.509 0 11-3.019 0m36.278 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0M-.001 219.732a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.278 0a1.508 1.508 0 113.019 0 1.51 1.51 0 01-3.019 0m36.277 0a1.508 1.508 0 113.019 0 1.509 1.509 0 11-3.019 0m36.278 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0m36.277 0a1.508 1.508 0 113.018 0 1.509 1.509 0 11-3.018 0M-.001 256.01a1.51 1.51 0 113.02.001 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.28 0a1.509 1.509 0 113.017-.001 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0M-.001 292.287a1.51 1.51 0 113.02 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.278 0a1.51 1.51 0 113.019 0 1.51 1.51 0 01-3.02 0m36.28 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.278 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.017 0 1.509 1.509 0 01-3.017 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0m36.277 0a1.509 1.509 0 113.018 0 1.509 1.509 0 01-3.018 0"
                            })
                        }), Object(s.jsxs)("g", {
                            className: Object(u.a)([g.a.ValueIcon__group, "doers" === l && g.a.ValueIcon__active]),
                            children: [Object(s.jsxs)("g", {
                                className: g.a.ValueIcon__name,
                                children: [Object(s.jsx)("path", {
                                    fill: "#101820",
                                    d: "M259 277h71v33h-71z"
                                }), Object(s.jsx)("text", {
                                    fill: "#FFF",
                                    fontFamily: "Gilroy-Extrabold, Gilroy",
                                    fontSize: "20",
                                    fontWeight: "600",
                                    transform: "translate(259 277)",
                                    children: Object(s.jsx)("tspan", {
                                        x: "8.94",
                                        y: "23",
                                        children: "实干"
                                    })
                                })]
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__shape,
                                fill: "url(#value-icon-b)",
                                d: "M68.439 0l-.605 1.033L1.822 113.657 0 116.764h64.465l-17.258 66.015L45.319 190l5.383-5.226L179.347 59.858 183 56.312h-63.78l31.183-53.204L152.226 0z",
                                transform: "translate(66 43.719)"
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__path,
                                pathLength: "1",
                                stroke: "#101820",
                                strokeWidth: "2",
                                d: "M142.439 51.719l-.605 1.033-66.012 112.624L74 168.483h64.465l-17.258 66.015-1.888 7.221 5.383-5.226 128.645-124.916 3.653-3.546h-63.78l31.183-53.204 1.823-3.108z"
                            })]
                        }), Object(s.jsxs)("g", {
                            className: Object(u.a)([g.a.ValueIcon__group, "quality" === l && g.a.ValueIcon__active]),
                            children: [Object(s.jsxs)("g", {
                                className: g.a.ValueIcon__name,
                                children: [Object(s.jsx)("path", {
                                    fill: "#101820",
                                    d: "M244 277h86v33h-86z"
                                }), Object(s.jsx)("text", {
                                    fill: "#FFF",
                                    fontFamily: "Gilroy-Extrabold, Gilroy",
                                    fontSize: "20",
                                    fontWeight: "600",
                                    transform: "translate(260 277)",
                                    children: Object(s.jsx)("tspan", {
                                        x: "8.94",
                                        y: "23",
                                        children: "创新"
                                    })
                                })]
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__shape,
                                fill: "url(#value-icon-c)",
                                d: "M93.5 0C145.14 0 187 41.637 187 93c0 51.361-41.861 93-93.5 93S0 144.361 0 93C0 41.636 41.861 0 93.5 0",
                                transform: "translate(64 46)"
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__path,
                                pathLength: "1",
                                stroke: "#101820",
                                strokeWidth: "2",
                                d: "M165.5 54c51.639 0 93.5 41.637 93.5 93 0 51.361-41.861 93-93.5 93S72 198.361 72 147c0-51.363 41.861-93 93.5-93"
                            })]
                        }), Object(s.jsxs)("g", {
                            className: Object(u.a)([g.a.ValueIcon__group, "ethical" === l && g.a.ValueIcon__active]),
                            children: [Object(s.jsxs)("g", {
                                className: g.a.ValueIcon__name,
                                children: [Object(s.jsx)("path", {
                                    fill: "#101820",
                                    d: "M250 277h80v33h-80z"
                                }), Object(s.jsx)("text", {
                                    fill: "#FFF",
                                    fontFamily: "Gilroy-Extrabold, Gilroy",
                                    fontSize: "20",
                                    fontWeight: "600",
                                    transform: "translate(250 277)",
                                    children: Object(s.jsx)("tspan", {
                                        x: "9",
                                        y: "23",
                                        children: "可靠"
                                    })
                                })]
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__shape,
                                fill: "url(#value-icon-d)",
                                d: "M162.15 0L225 63.089 112.517 176l-.016-.016-.017.016L0 63.089 62.85 0l49.651 49.838z",
                                transform: "translate(45 51)"
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__path,
                                pathLength: "1",
                                stroke: "#101820",
                                strokeWidth: "2",
                                d: "M215.15 59L278 122.089 165.517 235l-.016-.016-.017.016L53 122.089 115.85 59l49.651 49.838z"
                            })]
                        }), Object(s.jsxs)("g", {
                            className: Object(u.a)([g.a.ValueIcon__group, "curious" === l && g.a.ValueIcon__active]),
                            children: [Object(s.jsxs)("g", {
                                className: g.a.ValueIcon__name,
                                children: [Object(s.jsx)("path", {
                                    fill: "#101820",
                                    d: "M243 277h87v33h-87z"
                                }), Object(s.jsx)("text", {
                                    fill: "#FFF",
                                    fontFamily: "Gilroy-Extrabold, Gilroy",
                                    fontSize: "20",
                                    fontWeight: "600",
                                    transform: "translate(243 277)",
                                    children: Object(s.jsx)("tspan", {
                                        x: "7.64",
                                        y: "23",
                                        children: "高质高效"
                                    })
                                })]
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__shape,
                                fill: "url(#value-icon-e)",
                                d: "M99.501 0l-1.985 3.468L1.982 170.533 0 174h199l-1.982-3.467L101.484 3.468z",
                                transform: "translate(58 51.719)"
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__path,
                                pathLength: "1",
                                stroke: "#101820",
                                strokeWidth: "2",
                                d: "M165.501 59.719l-1.985 3.468-95.534 167.065L66 233.719h199l-1.982-3.467-95.534-167.065z"
                            })]
                        }), Object(s.jsxs)("g", {
                            className: Object(u.a)([g.a.ValueIcon__group, "collaborative" === l && g.a.ValueIcon__active]),
                            children: [Object(s.jsxs)("g", {
                                className: g.a.ValueIcon__name,
                                children: [Object(s.jsx)("path", {
                                    fill: "#101820",
                                    d: "M186 277h144v33H186z"
                                }), Object(s.jsx)("text", {
                                    fill: "#FFF",
                                    fontFamily: "Gilroy-Extrabold, Gilroy",
                                    fontSize: "20",
                                    fontWeight: "600",
                                    transform: "translate(186 277)",
                                    children: Object(s.jsx)("tspan", {
                                        x: "8.48",
                                        y: "23",
                                        children: "洞察力"
                                    })
                                })]
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__shape,
                                fill: "url(#value-icon-f)",
                                d: "M52.227 0v52.522H0v81.017h52.257V186h80.516v-52.522H185V52.461h-52.255V0z",
                                transform: "translate(65 46)"
                            }), Object(s.jsx)("path", {
                                className: g.a.ValueIcon__path,
                                pathLength: "1",
                                stroke: "#101820",
                                strokeWidth: "2",
                                d: "M125.227 54v52.522H73v81.017h52.257V240h80.516v-52.522H258v-81.017h-52.255V54z"
                            })]
                        })]
                    })]
                })
            }
            var O = a("k20r"),
                f = a.n(O),
                x = a("RF0t"),
                _ = a.n(x);

            function v(e) {
                var t = e.icon,
                    a = e.className,
                    c = Object(h.a)(.8),
                    r = Object(n.a)(c, 2),
                    o = r[0],
                    i = r[1];
                return Object(s.jsxs)("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 94 94",
                    ref: o,
                    className: Object(u.a)([i && _.a["ServiceIcon--inview"], a]),
                    children: ["discover" === t && Object(s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [Object(s.jsxs)("g", {
                            className: _.a.ServiceIcon__group,
                            children: [Object(s.jsx)("path", {
                                fill: "#F4647A",
                                d: "M47 11L5 83.745h84z"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M47 69.062c-10.366 0-25.834-4.794-35.5-18.281C21.165 37.294 36.634 32.5 47 32.5s25.835 4.794 35.5 18.28C72.835 64.269 57.366 69.063 47 69.063"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M47 32c-11.918 0-26.898 5.795-36 18.724 9.102 12.93 24.082 18.724 36 18.724 11.919 0 26.898-5.795 36-18.724C73.898 37.794 58.919 32 47 32m0 1.007c10.137 0 25.226 4.655 34.761 17.717-9.535 13.062-24.624 17.717-34.76 17.717-10.137 0-25.226-4.655-34.761-17.717C21.775 37.662 36.864 33.007 47 33.007"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M61.5 51c0 8.009-6.492 14.5-14.5 14.5S32.5 59.01 32.5 51c0-8.008 6.492-14.5 14.5-14.5S61.5 42.992 61.5 51"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M45.245 45.709a3.883 3.883 0 11-7.766-.001 3.883 3.883 0 017.766 0"
                            })]
                        }), Object(s.jsx)("path", {
                            className: _.a.ServiceIcon__path,
                            pathLength: "1",
                            stroke: "#101820",
                            strokeWidth: "2",
                            d: "M46.999 11l42 72.746h-84z"
                        })]
                    }), "define" === t && Object(s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        transform: "translate(9 9)",
                        children: [Object(s.jsxs)("g", {
                            className: _.a.ServiceIcon__group,
                            children: [Object(s.jsx)("path", {
                                fill: "#75A4C6",
                                d: "M76 38c0 20.987-17.013 38-38 38S0 58.987 0 38 17.013 0 38 0s38 17.013 38 38"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M38 63c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M38 12c-14.36 0-26 11.64-26 26s11.64 26 26 26 26-11.64 26-26-11.64-26-26-26m0 1.01c13.78 0 24.99 11.21 24.99 24.99 0 13.78-11.21 24.99-24.99 24.99-13.78 0-24.99-11.21-24.99-24.99 0-13.78 11.21-24.99 24.99-24.99"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M38 53c-8.27 0-15-6.73-15-15 0-8.271 6.73-15 15-15 8.271 0 15 6.729 15 15 0 8.27-6.729 15-15 15"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M38 21c-9.39 0-17 7.61-17 17 0 9.389 7.61 17 17 17s17-7.611 17-17c0-9.39-7.61-17-17-17m0 3.574c7.403 0 13.426 6.023 13.426 13.426 0 7.403-6.023 13.426-13.426 13.426-7.403 0-13.426-6.023-13.426-13.426 0-7.403 6.023-13.426 13.426-13.426"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M45 38a7 7 0 11-14 0 7 7 0 0114 0"
                            })]
                        }), Object(s.jsx)("circle", {
                            className: _.a.ServiceIcon__path,
                            pathLength: "1",
                            cx: "38",
                            cy: "38",
                            r: "38",
                            stroke: "#101820",
                            strokeWidth: "2"
                        })]
                    }), "develop" === t && Object(s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [Object(s.jsxs)("g", {
                            className: _.a.ServiceIcon__group,
                            children: [Object(s.jsx)("path", {
                                fill: "#85DE76",
                                d: "M30.455 9v21.444H9v33.077h21.467v21.418h33.077V63.496H85V30.418H63.532V9z"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M18.7 66.825V51.428l14.121-8.312 14.122 8.312v15.397l-14.122 8.283z"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M32.822 42.536L18.2 51.142v15.97l14.621 8.575 14.622-8.576v-15.97l-14.621-8.605zm0 1.16l13.621 8.018v14.824l-13.621 7.99-13.622-7.99V51.714l13.622-8.018z"
                            }), Object(s.jsx)("path", {
                                stroke: "#101820",
                                d: "M32.821 59.718v15.245M46.836 51.499l-14.014 8.249M32.821 59.748l-14.014-8.249"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M47.049 66.825V51.428l14.122-8.312 14.121 8.312v15.397l-14.121 8.283z"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M61.17 42.536l-14.62 8.606v15.97l14.62 8.575 14.622-8.576v-15.97l-14.621-8.605zm0 1.16l13.622 8.018v14.824l-13.621 7.99-13.622-7.99V51.714l13.622-8.018z"
                            }), Object(s.jsx)("path", {
                                stroke: "#101820",
                                d: "M61.171 59.718v15.245M75.186 51.499l-14.015 8.249M61.171 59.748l-14.015-8.249"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M32.875 43.001V27.604l14.121-8.312 14.122 8.312v15.397l-14.122 8.282z"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M46.996 18.712l-14.621 8.606v15.969l14.62 8.576 14.623-8.576V27.318l-14.622-8.606zm0 1.16l13.622 8.017v14.825l-13.622 7.99-13.621-7.99V27.89l13.62-8.018z"
                            }), Object(s.jsx)("path", {
                                stroke: "#101820",
                                d: "M46.996 35.894v15.244M61.011 27.675l-14.015 8.249M46.996 35.924l-14.015-8.249"
                            })]
                        }), Object(s.jsx)("path", {
                            className: _.a.ServiceIcon__path,
                            pathLength: "1",
                            stroke: "#101820",
                            strokeWidth: "2",
                            d: "M30 9h34v21h21v34H64v21H30V64H9V30h21z"
                        })]
                    }), "deliver" === t && Object(s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [Object(s.jsxs)("g", {
                            className: _.a.ServiceIcon__group,
                            children: [Object(s.jsx)("path", {
                                fill: "#96DAEA",
                                d: "M66.86 12L47 31.86 27.14 12 2 37.14l44.994 44.993.006-.007.007.007L92 37.14z"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M22.646 49.312l-.044-5.372 24.442-18.685 24.35 18.688.044 5.372L47.044 73.71z"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M47.044 24.625L22.1 43.695l.048 5.826 24.896 24.896L71.94 49.52l-.049-5.826-24.847-19.07zm-.001 1.26l23.852 18.306.042 4.92-23.893 23.891-23.899-23.898-.041-4.918 23.939-18.3z"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M22.807 43.695l24.189-24.189 24.189 24.189-24.189 24.188z"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M46.996 18.799L22.1 43.695 46.996 68.59l24.896-24.895-24.896-24.896zm0 1.414l23.481 23.482-23.481 23.481-23.482-23.481 23.482-23.482z"
                            }), Object(s.jsx)("path", {
                                fill: "#101820",
                                d: "M69.418 32.437l-5.084-5.083L46.678 45.01l-5.282-5.282-5.084 5.083 10.366 10.366z"
                            }), Object(s.jsx)("path", {
                                fill: "#FFF",
                                d: "M46.93 73.25l.099-5.691-.1 5.69z"
                            }), Object(s.jsx)("path", {
                                stroke: "#101820",
                                d: "M47.029 67.559l-.1 5.691"
                            })]
                        }), Object(s.jsx)("path", {
                            className: _.a.ServiceIcon__path,
                            pathLength: "1",
                            stroke: "#101820",
                            strokeWidth: "2",
                            d: "M66.86 12L47 31.86 27.14 12 2 37.14l44.994 44.993.006-.007.007.007L92 37.14z"
                        })]
                    })]
                })
            }
            var y = [{
                    title: "具洞察力的运营指导",
                    description: "关于渠道建设、品牌建设、优化经营等细节，我们都会为你考虑并量身打造。哪些关键词会增加图书曝光率；直通车到底需要多少花费，什么情况下增加投入可获得有效产出；不同渠道对宣传的偏好……全都不再是烦恼。"
                }, {
                    title: "内容齐备的产品素材库",
                    description: "来自图书生产源头的最完善图书内容数据库，作为标杆规范着全平台基础信息的准确度；即时提供与单品相关的全网销售信息；各主流宣传平台带动销售的关联话题等营销信息。"
                }, {
                    title: "无微不至的技术支持",
                    description: "技术的更新速度不会拉低我们的服务品质。素材高效采集自动流转、数据同步、订单处理、打包发货、账务结算等功能，只要你想要，我们都支持。"
                }],
                w = [{
                    title: "分销采购",
                    items: [ "在线签约","品种多样","一件代发", "零成本换高利润"]
                }, {
                    title: "电商运营",
                    items: ["图书上架铺货", "素材高效采集", "一次生成多次复用", "平台竞店比价高效", "营销推广方案定制", "订单高速处理"]
                }, {
                    title: "仓储物流",
                    items: ["客服快速响应","专业分拣包装避免破损","发货速度快", "订单信息实时同步","流程化管理", "满足不同类型客户需求"]
                }, {
                    title: "财务结算",
                    items: [ "实时财务报表与管理分析", "实时反馈业务系统", ]
                }],
                P = [{
                    name: "电商运营",
                    title: "天猫/京东/抖音/拼多多等各平台电商运营"
                }, {
                    name: "营销推广",
                    title: "在抖音、天猫、微博、微信、小红书等平台品牌自播+知识主播，推广计划定制，为技术赋能"
                }, {
                    name: "技术研发",
                    title: "以服务出版业为本，在行业内深耕细作，程序技术与时俱进"
                }, {
                    name: "资源综合",
                    title: "资源整合，确保项目顺畅推进"
                }, {
                    name: "创意设计",
                    title: "以艺术结合技术的形式打造独属于每个的形象宣传"
                }],
                N = [{
                    title: "我们是实干家",
                    desc: "在充分沟通的基础上，我们切实保证每个想法的可行。求实效而不做虚功，踏实肯干。"
                }, {
                    title: "我们鼓励创新",
                    desc: "我们总是提问，可以让过程再简单一些吗？通过对传统方式的深入解析，我们才能够研究和开发出更有效率的解决方案。"
                }, {
                    title: "我们很可靠",
                    desc: "我们的声誉建立在负责任和可信赖的基础上，我们严格执行相互尊重的原则，使合作伙伴与团队都对于达成目标充满信心。"
                }, {
                    title: "我们高质且高效",
                    desc: "我们对项目的执行有规划有条理，一旦确定目标就雷厉风行；对于工作的责任心和进取心，让我们对每个细节都不放过。"
                }, {
                    title: "我们的洞察力",
                    desc: "我们既有深耕行业20年的经验，又有平台大数据支持，面对日新月异的行业变化，我们始终胸有成竹。"
                }, {
                    placeholder: !0
                }];

            function I() {
                var e = Object(h.a)(.8),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    m = t[1],
                    b = Object(h.a)(.8),
                    g = Object(n.a)(b, 2),
                    O = g[0],
                    x = g[1];
                return Object(s.jsxs)(c.a, {
                    title: "关于「我」",
                    children: [Object(s.jsxs)(o.a, {
                        title: "我们的目标很简单：让图书销售变得更容易",
                        matchContentPadding: !0,
                        children: [Object(s.jsx)("div", {
                            className: "row row--horizontal-uncenter",
                            children: Object(s.jsxs)("div", {
                                className: "column column--10 column-large--8 column-push-1 column-push-large-2",
                                children: [Object(s.jsx)("p", {
                                    className: "body-larger",
                                    children: "我们的核心业务主要由图书线上运营和技术服务两大板块组成。"
                                }), Object(s.jsx)("p", {
                                    className: "body-larger u-margin-bottom-0",
                                    children: "通过策划、设计和开发，我们帮助你推演前进的道路，构建专属与你的解决方案，并保证你的技术运营效率最佳。"
                                })]
                            })
                        }), Object(s.jsx)("ul", {
                            className: "row row--horizontal-uncenter u-list-clean u-margin-top-5 u-margin-medium-top-8 u-margin-medium-top-11",
                            children: y.map((function (e, t) {
                                var a = e.title,
                                    n = e.description,
                                    c = "/assets/images/about-us/gallery-".concat(t + 1);
                                return Object(s.jsxs)(d.a, {
                                    tag: "li",
                                    className: Object(u.a)(["column", "column--4", "column-large--3", "u-margin-bottom-7", "u-margin-medium-bottom-0", 0 === t && "column-push-large-2"]),
                                    delay: t / 10,
                                    children: [Object(s.jsxs)("div", {
                                        className: "u-animated-content  u-margin-bottom-4 u-margin-large-bottom-5",
                                        children: [Object(s.jsx)("img", {
                                            src: "".concat(c, ".gif"),
                                            alt: "",
                                            className: "u-full-width"
                                        }), Object(s.jsx)("img", {
                                            src: "".concat(c, ".jpg"),
                                            srcSet: "".concat(c, ".jpg 1x, ").concat(c, "-2x.jpg 2x"),
                                            alt: "",
                                            loading: "lazy",
                                            height: "330",
                                            width: "330",
                                            className: "u-full-width"
                                        })]
                                    }), Object(s.jsx)("h3", {
                                        className: "u-margin-bottom-4 u-margin-large-bottom-5",
                                        children: a
                                    }), Object(s.jsx)("p", {
                                        className: "u-margin-bottom-0",
                                        children: n
                                    })]
                                }, "image-gal-".concat(t))
                            }))
                        })]
                    }), Object(s.jsxs)(r.a, {
                        tag: "article",
                        noPadding: !0,
                        "aria-labelledby": "process-title",
                        children: [Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10",
                                children: Object(s.jsx)("h2", {
                                    className: "title-1 u-margin-top-0",
                                    id: "process-title",
                                    children: "我们的工作方式"
                                })
                            })
                        }), Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10 column-large--8",
                                children: Object(s.jsx)("p", {
                                    className: "body-larger",
                                    children: "我们剖析你现在的盲区与将来可能面对的问题，并将它转化成切实可行的解决方案。我们始终专注于图书，通过对分销采购、电商运营、仓储运输、账务结算四个阶段的打磨，让每一个细节都落到实处。"
                                })
                            })
                        }), Object(s.jsx)("div", {
                            className: "row u-margin-top-10",
                            children: Object(s.jsxs)("div", {
                                className: "column column--10 column-large--8",
                                children: [Object(s.jsx)("div", {
                                    ref: a,
                                    className: Object(u.a)([f.a.ProcessImg, f.a["ProcessImg--small"], m && f.a["ProcessImg--inview"]]),
                                    children: Object(s.jsxs)("svg", {
                                        role: "img",
                                        "aria-label": "Illustration of the double diamond process",
                                        viewBox: "0 0 461 1014",
                                        className: "u-full-width u-display-block",
                                        children: [Object(s.jsx)("defs", {
                                            children: Object(s.jsxs)("linearGradient", {
                                                id: "process-img-double-diamond-vert-a",
                                                x1: "50%",
                                                x2: "50%",
                                                y1: "100%",
                                                y2: "0%",
                                                children: [Object(s.jsx)("stop", {
                                                    offset: "0%",
                                                    stopColor: "#85DE76"
                                                }), Object(s.jsx)("stop", {
                                                    offset: "51.145%",
                                                    stopColor: "#43ADC6"
                                                }), Object(s.jsx)("stop", {
                                                    offset: "100%",
                                                    stopColor: "#F36279"
                                                })]
                                            })
                                        }), Object(s.jsxs)("g", {
                                            fill: "none",
                                            fillRule: "evenodd",
                                            children: [Object(s.jsxs)("g", {
                                                transform: "translate(1 6)",
                                                children: [Object(s.jsxs)("g", {
                                                    transform: "translate(0 42)",
                                                    children: [Object(s.jsx)("path", {
                                                        className: f.a["ProcessImg__colored-diamond"],
                                                        fill: "url(#process-img-double-diamond-vert-a)",
                                                        fillRule: "nonzero",
                                                        d: "M451.703409,709.797384 L250.177976,911.322816 C239.048034,922.452759 221.002832,922.452759 209.872889,911.322816 L8.34745674,709.797384 C-2.78248558,698.667441 -2.78248558,680.622239 8.34745674,669.492297 L218.004865,459.835 L8.34745674,250.177976 C-2.67118616,239.159333 -2.78137258,221.363044 8.01689745,210.208848 L8.34745674,209.872889 L209.872889,8.34745674 C220.891532,-2.67118616 238.687821,-2.78137258 249.842017,8.01689745 L250.177976,8.34745674 L451.703409,209.872889 C462.722051,220.891532 462.832238,238.687821 452.033968,249.842017 L451.703409,250.177976 L242.045865,459.835 L451.703409,669.492297 C462.833351,680.622239 462.833351,698.667441 451.703409,709.797384 Z M439.682593,238.157161 C444.02829,233.811464 444.16892,226.853075 440.104483,222.338281 L439.886683,222.102944 L439.682593,221.893705 L238.157161,20.368272 C233.743563,15.9546742 226.634987,15.8785777 222.128459,20.1399825 L221.893705,20.368272 L20.368272,221.893705 C15.9546742,226.307302 15.8785777,233.415878 20.1399825,237.922406 L20.368272,238.157161 L230.025433,447.814321 L439.682593,238.157161 Z M439.682593,681.513112 L230.025433,471.855952 L20.368272,681.513112 C15.8772427,686.004142 15.8772427,693.285539 20.368272,697.776568 L221.893705,899.302001 C226.384734,903.79303 233.666131,903.79303 238.157161,899.302001 L439.682593,697.776568 L439.886683,697.567329 C444.17256,693.062156 444.10453,685.935049 439.682593,681.513112 Z"
                                                    }), Object(s.jsx)("line", {
                                                        className: f.a["ProcessImg__colored-dashes"],
                                                        x1: "430.025",
                                                        x2: "30.025",
                                                        y1: "230.025",
                                                        y2: "230.025",
                                                        stroke: "#D5C0CF",
                                                        strokeDasharray: "10 20",
                                                        strokeLinecap: "round",
                                                        strokeWidth: "6"
                                                    }), Object(s.jsx)("line", {
                                                        className: f.a["ProcessImg__colored-dashes"],
                                                        x1: "430.025",
                                                        x2: "30.025",
                                                        y1: "689.025",
                                                        y2: "689.025",
                                                        stroke: "#B0E3D4",
                                                        strokeDasharray: "10 20",
                                                        strokeLinecap: "round",
                                                        strokeWidth: "6",
                                                        transform: "rotate(180 230.025 689.025)"
                                                    })]
                                                }), Object(s.jsxs)("g", {
                                                    className: f.a["ProcessImg__area-label"],
                                                    transform: "translate(107)",
                                                    children: [Object(s.jsxs)("g", {
                                                        transform: "translate(0 258)",
                                                        children: [Object(s.jsx)("rect", {
                                                            width: "245",
                                                            height: "30",
                                                            fill: "#FFF"
                                                        }), Object(s.jsx)("text", {
                                                            children: Object(s.jsx)("tspan", {
                                                                x: "4.03",
                                                                y: "21",
                                                                children: "Designing the right thing"
                                                            })
                                                        })]
                                                    }), Object(s.jsx)("text", {
                                                        children: Object(s.jsx)("tspan", {
                                                            x: "41.34",
                                                            y: "15",
                                                            children: "General problem"
                                                        })
                                                    }), Object(s.jsxs)("g", {
                                                        transform: "translate(38 487)",
                                                        children: [Object(s.jsx)("rect", {
                                                            width: "169",
                                                            height: "30",
                                                            fill: "#FFF"
                                                        }), Object(s.jsx)("text", {
                                                            children: Object(s.jsx)("tspan", {
                                                                x: "4.03",
                                                                y: "21",
                                                                children: "Specific problem"
                                                            })
                                                        })]
                                                    }), Object(s.jsx)("text", {
                                                        children: Object(s.jsx)("tspan", {
                                                            x: "44.24",
                                                            y: "1002",
                                                            children: "Specific solution"
                                                        })
                                                    }), Object(s.jsxs)("g", {
                                                        transform: "translate(0 717)",
                                                        children: [Object(s.jsx)("rect", {
                                                            width: "245",
                                                            height: "30",
                                                            fill: "#FFF"
                                                        }), Object(s.jsx)("text", {
                                                            children: Object(s.jsx)("tspan", {
                                                                x: "4.03",
                                                                y: "22",
                                                                children: "Designing the thing right"
                                                            })
                                                        })]
                                                    })]
                                                }), Object(s.jsxs)("g", {
                                                    className: f.a["ProcessImg__process-label"],
                                                    transform: "translate(173 183)",
                                                    children: [Object(s.jsx)("text", {
                                                        children: Object(s.jsx)("tspan", {
                                                            x: ".294",
                                                            y: "22",
                                                            children: "Discover"
                                                        })
                                                    }), Object(s.jsx)("text", {
                                                        children: Object(s.jsx)("tspan", {
                                                            x: "14.388",
                                                            y: "175",
                                                            children: "Define"
                                                        })
                                                    }), Object(s.jsx)("text", {
                                                        children: Object(s.jsx)("tspan", {
                                                            x: "2.198",
                                                            y: "484",
                                                            children: "Develop"
                                                        })
                                                    }), Object(s.jsx)("text", {
                                                        children: Object(s.jsx)("tspan", {
                                                            x: "10.08",
                                                            y: "644",
                                                            children: "Deliver"
                                                        })
                                                    })]
                                                })]
                                            }), Object(s.jsxs)("g", {
                                                stroke: "#101820",
                                                strokeWidth: "2",
                                                transform: "translate(10 57)",
                                                children: [Object(s.jsx)("path", {
                                                    pathLength: "1",
                                                    d: "M235.667568 5.85786438L437.193001 207.383297C445.003487 215.193783 445.003487 227.857082 437.193001 235.667568L221.525433 451.335137 5.85786438 235.667568C-1.95262146 227.857082-1.95262146 215.193783 5.85786438 207.383297L207.383297 5.85786438C215.193783-1.95262146 227.857082-1.95262146 235.667568 5.85786438zM235.667568 896.812409L437.193001 695.286976C445.003487 687.47649 445.003487 674.813191 437.193001 667.002705L221.525433 451.335137 5.85786438 667.002705C-1.95262146 674.813191-1.95262146 687.47649 5.85786438 695.286976L207.383297 896.812409C215.193783 904.622895 227.857082 904.622895 235.667568 896.812409z",
                                                    className: f.a.ProcessImg__diamond
                                                }), Object(s.jsx)("line", {
                                                    pathLength: "1",
                                                    className: f.a.ProcessImg__dashes,
                                                    x1: "421.025",
                                                    x2: "21.025",
                                                    y1: "221.525",
                                                    y2: "221.525",
                                                    strokeDasharray: "10 20",
                                                    strokeLinecap: "round",
                                                    transform: "rotate(180 221.025 221.525)"
                                                }), Object(s.jsx)("line", {
                                                    pathLength: "1",
                                                    className: f.a.ProcessImg__dashes,
                                                    x1: "421.025",
                                                    x2: "21.025",
                                                    y1: "680.525",
                                                    y2: "680.525",
                                                    strokeDasharray: "10 20",
                                                    strokeLinecap: "round",
                                                    transform: "rotate(180 221.025 680.525)"
                                                })]
                                            })]
                                        })]
                                    })
                                }), Object(s.jsx)("div", {
                                    ref: O,
                                    className: Object(u.a)([f.a.ProcessImg, f.a["ProcessImg--large"], x && f.a["ProcessImg--inview"]]),
                                    children: Object(s.jsxs)("svg", {
                                        role: "img",
                                        "aria-label": "Illustration of the double diamond process",
                                        className: "u-full-width u-display-block",
                                        viewBox: "0 0 921 545",
                                        children: [Object(s.jsx)("defs", {
                                            children: Object(s.jsxs)("linearGradient", {
                                                id: "process-img-a",
                                                x1: "100%",
                                                x2: "0%",
                                                y1: "50%",
                                                y2: "50%",
                                                children: [Object(s.jsx)("stop", {
                                                    offset: "0%",
                                                    stopColor: "#85DE76"
                                                }), Object(s.jsx)("stop", {
                                                    offset: "50.112%",
                                                    stopColor: "#43ADC6"
                                                }), Object(s.jsx)("stop", {
                                                    offset: "100%",
                                                    stopColor: "#F36279"
                                                })]
                                            })
                                        }), Object(s.jsxs)("g", {
                                            fill: "none",
                                            fillRule: "evenodd",
                                            children: [Object(s.jsx)("path", {
                                                className: f.a["ProcessImg__colored-diamond"],
                                                fill: "url(#process-img-a)",
                                                fillRule: "nonzero",
                                                d: "M709.797 8.347l201.526 201.526c11.13 11.13 11.13 29.175 0 40.305L709.797 451.703c-11.13 11.13-29.175 11.13-40.305 0L459.835 242.046 250.178 451.703c-11.019 11.02-28.815 11.13-39.97.331l-.335-.33L8.347 250.177c-11.13-11.13-11.13-29.175 0-40.305L209.873 8.347c11.13-11.13 29.175-11.13 40.305 0l209.657 209.658L669.492 8.347c11.13-11.13 29.175-11.13 40.305 0zm-471.64 12.021c-4.422-4.422-11.549-4.49-16.054-.204l-.21.204L20.369 221.894c-4.49 4.49-4.49 11.772 0 16.263l201.526 201.526c4.49 4.49 11.772 4.49 16.263 0l209.657-209.658zm443.356 0L471.856 230.025l209.657 209.658c4.491 4.49 11.773 4.49 16.264 0l201.525-201.526c4.491-4.49 4.491-11.772 0-16.263L697.777 20.368l-.21-.204c-4.505-4.286-11.632-4.218-16.054.204z",
                                                transform: "translate(1.475 84.475)"
                                            }), Object(s.jsx)("path", {
                                                className: f.a["ProcessImg__colored-dashes"],
                                                stroke: "#D5C0CF",
                                                strokeDasharray: "10 20",
                                                strokeLinecap: "round",
                                                strokeWidth: "6",
                                                d: "M231.5 114.5v400"
                                            }), Object(s.jsx)("path", {
                                                className: f.a["ProcessImg__colored-dashes"],
                                                stroke: "#B0E3D4",
                                                strokeDasharray: "10 20",
                                                strokeLinecap: "round",
                                                strokeWidth: "6",
                                                d: "M690.5 114.5v400"
                                            }), Object(s.jsxs)("g", {
                                                className: f.a["ProcessImg__area-label"],
                                                children: [Object(s.jsxs)("text", {
                                                    transform: "translate(33)",
                                                    children: [Object(s.jsx)("tspan", {
                                                        x: "1.84",
                                                        y: "490",
                                                        children: "General"
                                                    }), " ", Object(s.jsx)("tspan", {
                                                        x: ".25",
                                                        y: "514",
                                                        children: "problem"
                                                    })]
                                                }), Object(s.jsxs)("text", {
                                                    transform: "translate(33)",
                                                    children: [Object(s.jsx)("tspan", {
                                                        x: "132.25",
                                                        y: "15",
                                                        children: "Designing the"
                                                    }), " ", Object(s.jsx)("tspan", {
                                                        x: "149.03",
                                                        y: "39",
                                                        children: "right thing"
                                                    })]
                                                }), Object(s.jsxs)("text", {
                                                    transform: "translate(33)",
                                                    children: [Object(s.jsx)("tspan", {
                                                        x: "390.03",
                                                        y: "490",
                                                        children: "Specific"
                                                    }), " ", Object(s.jsx)("tspan", {
                                                        x: "388.25",
                                                        y: "514",
                                                        children: "problem"
                                                    })]
                                                }), Object(s.jsxs)("text", {
                                                    transform: "translate(33)",
                                                    children: [Object(s.jsx)("tspan", {
                                                        x: "591.25",
                                                        y: "15",
                                                        children: "Designing the"
                                                    }), " ", Object(s.jsx)("tspan", {
                                                        x: "608.03",
                                                        y: "39",
                                                        children: "thing right"
                                                    })]
                                                }), Object(s.jsxs)("text", {
                                                    transform: "translate(33)",
                                                    children: [Object(s.jsx)("tspan", {
                                                        x: "779.03",
                                                        y: "490",
                                                        children: "Specific"
                                                    }), " ", Object(s.jsx)("tspan", {
                                                        x: "777.99",
                                                        y: "514",
                                                        children: "Solution"
                                                    })]
                                                })]
                                            }), Object(s.jsxs)("g", {
                                                className: f.a["ProcessImg__process-label"],
                                                children: [Object(s.jsx)("text", {
                                                    transform: "translate(74 305)",
                                                    children: Object(s.jsx)("tspan", {
                                                        x: ".294",
                                                        y: "22.8",
                                                        children: "Discover"
                                                    })
                                                }), Object(s.jsx)("text", {
                                                    transform: "translate(74 305)",
                                                    children: Object(s.jsx)("tspan", {
                                                        x: "210.888",
                                                        y: "22.8",
                                                        children: "Define"
                                                    })
                                                }), Object(s.jsx)("text", {
                                                    transform: "translate(74 305)",
                                                    children: Object(s.jsx)("tspan", {
                                                        x: "461.198",
                                                        y: "22.8",
                                                        children: "Develop"
                                                    })
                                                }), Object(s.jsx)("text", {
                                                    transform: "translate(74 305)",
                                                    children: Object(s.jsx)("tspan", {
                                                        x: "669.08",
                                                        y: "22.8",
                                                        children: "Deliver"
                                                    })
                                                })]
                                            }), Object(s.jsxs)("g", {
                                                stroke: "#101820",
                                                strokeWidth: "2",
                                                children: [Object(s.jsx)("path", {
                                                    pathLength: "1",
                                                    className: f.a.ProcessImg__diamond,
                                                    d: "M15.832 300.358L217.358 98.832c7.81-7.81 20.474-7.81 28.284 0L461.31 314.5 245.642 530.168c-7.81 7.81-20.474 7.81-28.284 0L15.832 328.642c-7.81-7.81-7.81-20.474 0-28.284zm890.955 0L705.262 98.832c-7.81-7.81-20.474-7.81-28.285 0L461.31 314.5l215.667 215.668c7.81 7.81 20.474 7.81 28.285 0l201.525-201.526c7.81-7.81 7.81-20.474 0-28.284z"
                                                }), Object(s.jsx)("path", {
                                                    pathLength: "1",
                                                    className: f.a.ProcessImg__dashes,
                                                    strokeDasharray: "10 20",
                                                    strokeLinecap: "round",
                                                    d: "M231.5 115v400M690.5 115v400"
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), Object(s.jsxs)(r.a, {
                        tag: "article",
                        "aria-labelledby": "services-title",
                        children: [Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10",
                                children: Object(s.jsx)("h2", {
                                    className: "title-1  u-margin-top-0",
                                    id: "services-title",
                                    children: "我们的服务"
                                })
                            })
                        }), Object(s.jsx)("ul", {
                            className: "row row--horizontal-uncenter u-list-clean",
                            children: w.map((function (e, t) {
                                var a = e.title,
                                    n = e.items,
                                    c = (e.icon, a.toLowerCase());
                                return Object(s.jsxs)("li", {
                                    className: Object(u.a)(["column", "column--6", "column-large--4", "u-margin-bottom-5", "u-margin-medium-bottom-10", "u-margin-large-bottom-15", t % 2 === 0 && "column-push-large-2", (t === w.length - 1 || t === w.length - 2) && "u-margin-large-bottom-0", f.a.Service]),
                                    children: [Object(s.jsx)(v, {
                                        icon: a.toLowerCase(),
                                        className: f.a.Service__icon
                                    }), Object(s.jsx)("h3", {
                                        className: Object(u.a)([f.a.Service__title, "h4"]),
                                        children: a
                                    }), Object(s.jsx)("ul", {
                                        className: Object(u.a)([f.a.Service__list, "u-list-clean"]),
                                        children: n.map((function (e, t) {
                                            return Object(s.jsx)("li", {
                                                className: Object(u.a)([t < n.length - 1 && "u-margin-bottom-2"]),
                                                children: e
                                            }, "service-".concat(c, "-item-").concat(t))
                                        }))
                                    })]
                                }, "service-".concat(c, "-").concat(t))
                            }))
                        })]
                    }), Object(s.jsxs)(r.a, {
                        color: "black",
                        tag: "article",
                        "aria-labelledby": "leadership-title",
                        children: [Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10",
                                children: Object(s.jsx)("h2", {
                                    className: "title-1  u-margin-top-0",
                                    id: "leadership-title",
                                    children: "我们的团队"
                                })
                            })
                        }), Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10 column-large--8",
                                children: Object(s.jsx)("p", {
                                    className: "body-larger",
                                    children: "我们的团队以的专业运营的洞察力和爱书之人的热情参与到工作中，确保我们的经验能为你所用。我们一直思考是什么在推动我们的事业，是对知识的热爱，希望每一本书都能找到它的欣赏者；是对传播知识的责任，为了守住出版行业的本真。"
                                })
                            })
                        }), Object(s.jsx)(l.a, {
                            className: Object(u.a)(["row", "u-list-clean", "row--force-fill", f.a.LeadersList]),
                            children: P.map((function (e, t) {
                                var a = e.name,
                                    n = e.title,
                                    c = "/assets/images/about-us/leadership-".concat(t + 1);
                                return Object(s.jsx)(j.a, {
                                    className: Object(u.a)(["column", "column--3", "column-large--2", t < P.length - 1 && "u-margin-bottom-3", "u-margin-large-bottom-0", t < P.length - 2 && "u-margin-medium-bottom-8"]),
                                    animate: t % 2 !== 0,
                                    children: Object(s.jsxs)(d.a, {
                                        delay: t / 10,
                                        children: [Object(s.jsx)("img", {
                                            src: "".concat(c, ".jpg"),
                                            srcSet: "".concat(c, ".jpg 1x, ").concat(c, "-2x.jpg 2x"),
                                            alt: "",
                                            loading: "lazy",
                                            height: "330",
                                            width: "330",
                                            className: Object(u.a)(["u-display-block", "u-full-width", "u-margin-bottom-3"])
                                        }), Object(s.jsx)("h4", {
                                            className: "title-5 u-margin-bottom-1",
                                            children: a
                                        }), Object(s.jsx)("p", {
                                            className: "u-margin-bottom-0",
                                            children: n
                                        })]
                                    })
                                }, "leader-".concat(t))
                            }))
                        })]
                    }), Object(s.jsxs)(r.a, {
                        children: [Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10",
                                children: Object(s.jsx)("h2", {
                                    className: "title-1 u-margin-top-0",
                                    children: "我们的价值观念"
                                })
                            })
                        }), Object(s.jsx)("div", {
                            className: "row",
                            children: Object(s.jsx)("div", {
                                className: "column column--10 column-large--8",
                                children: Object(s.jsx)("p", {
                                    className: "body-larger",
                                    children: "我们是高标准严要求的实干者，我们是胸怀星辰大海的先行者，我们挑战传统勇敢创新，同时尊重每个细节的落地。"
                                })
                            })
                        }), Object(s.jsx)("ul", {
                            className: "row row--horizontal-uncenter u-list-clean u-margin-top-10",
                            children: N.map((function (e, t) {
                                var a = e.title,
                                    n = e.desc,
                                    c = e.placeholder,
                                    r = t % 3 === 0;
                                return Object(s.jsxs)("li", {
                                    className: Object(u.a)(["column", "column--4", "column-large--3", t < N.length - 1 && "u-margin-bottom-10", t >= N.length - 3 && "u-margin-medium-bottom-0", r && "column-push-large-2"]),
                                    children: [c && Object(s.jsx)(p, {}), !c && Object(s.jsxs)(s.Fragment, {
                                        children: [Object(s.jsx)("h3", {
                                            children: a
                                        }), Object(s.jsx)("p", {
                                            className: "u-margin-bottom-0",
                                            children: n
                                        })]
                                    })]
                                }, "values-item-".concat(t))
                            }))
                        }), Object(s.jsx)("div", {
                            className: "row row--horizontal-uncenter u-margin-top-8 u-margin-medium-top-9 u-margin-large-top-10",
                            children: Object(s.jsx)("div", {
                                className: "column column--10 column-push-large-2",
                                children: Object(s.jsx)(i.a, {
                                    href: "/about-you",
                                    children: "对我们的了解已足够深入，接下来开始审视关于你的业务痛点吧"
                                })
                            })
                        })]
                    })]
                })
            }
        },
        OpfK: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return u
            }));
            var s = a("rePB"),
                n = a("nKUr"),
                c = a("ODXe"),
                r = a("Ff2n"),
                o = a("l7NP"),
                i = a("rmG7"),
                l = a("yKaS"),
                j = a("m0d9"),
                d = a.n(j);

            function m(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(a), !0).forEach((function (t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function u(e) {
                var t = e.className,
                    a = e.children,
                    s = e.directionFrom,
                    j = void 0 === s ? "bottom" : s,
                    m = e.threshold,
                    u = void 0 === m ? .1 : m,
                    b = e.tag,
                    g = void 0 === b ? "div" : b,
                    p = e.delay,
                    O = void 0 === p ? 0 : p,
                    f = Object(r.a)(e, ["className", "children", "directionFrom", "threshold", "tag", "delay"]),
                    x = Object(i.a)()[0],
                    _ = Object(o.a)(u),
                    v = Object(c.a)(_, 2),
                    y = v[0],
                    w = v[1],
                    P = g;
                return Object(n.jsx)(P, h(h({
                    ref: y,
                    className: Object(l.a)([d.a.Animate, d.a["Animate--".concat(j)], w && d.a["Animate--inview"], x && d.a["Animate--rm"], t]),
                    style: {
                        transitionDelay: "".concat(O, "s")
                    }
                }, f), {}, {
                    children: a
                }))
            }
        },
        RF0t: function (e, t, a) {
            e.exports = {
                ServiceIcon__group: "service-icon_ServiceIcon__group__3Ik3g",
                ServiceIcon__path: "service-icon_ServiceIcon__path__2gnH4",
                "ServiceIcon--inview": "service-icon_ServiceIcon--inview__3n3i_"
            }
        },
        "e/IC": function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return m
            }));
            var s = a("rePB"),
                n = a("nKUr"),
                c = a("Ff2n"),
                r = a("q1tI"),
                o = a("yKaS"),
                i = a("qBzA"),
                l = a.n(i);

            function j(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(a), !0).forEach((function (t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function m(e) {
                var t = e.className,
                    a = e.children,
                    s = e.animate,
                    i = Object(c.a)(e, ["className", "children", "animate"]),
                    j = Object(r.useRef)(),
                    m = Object(r.useRef)(),
                    h = Object(r.useRef)((Math.floor(3 * Math.random()) + 1) / 10);
                return Object(r.useEffect)((function () {
                    if (s) {
                        var e, t = j.current,
                            a = m.current,
                            n = function () {
                                var e = t.parentNode.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2,
                                    s = a.offsetTop,
                                    n = window.scrollY * s / e * h.current,
                                    c = Math.min(s, n);
                                t.style.transform = "translateY(-".concat(c, "px)")
                            },
                            c = function () {
                                e || (window.requestAnimationFrame((function () {
                                    n(), e = !1
                                })), e = !0)
                            };
                        return n(), window.addEventListener("scroll", c),
                            function () {
                                window.removeEventListener("scroll", c)
                            }
                    }
                }), [s]), Object(n.jsx)("li", d(d({
                    ref: j,
                    className: Object(o.a)([l.a.ImageListItem, s && l.a["ImageListItem--offset"], t])
                }, i), {}, {
                    children: Object(n.jsx)("div", {
                        ref: m,
                        className: l.a.ImageListItem__img,
                        children: a
                    })
                }))
            }
        },
        hdTg: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return j
            }));
            var s = a("nKUr"),
                n = a("q1tI"),
                c = a("rCDY"),
                r = a("z1CN"),
                o = a("cNOD"),
                i = a("8oZb"),
                l = a("yKaS");

            function j(e) {
                var t = e.a11yTitle,
                    a = void 0 === t || t,
                    j = e.title,
                    d = e.description,
                    m = e.children,
                    h = e.className,
                    u = e.theme,
                    b = void 0 === u ? "dark" : u,
                    g = e.ogImage,
                    p = e.twImage,
                    O = Object(n.useContext)(o.b)[1];
                return Object(n.useEffect)((function () {
                    O(b)
                }), [b]), Object(s.jsxs)(s.Fragment, {
                    children: [Object(s.jsx)(i.a, {
                        title: j,
                        description: d,
                        ogImage: g,
                        twImage: p
                    }), Object(s.jsx)(r.a, {}), Object(s.jsxs)("main", {
                        id: "main",
                        className: Object(l.a)(["u-overflow-hidden", h]),
                        children: [!1 !== a && Object(s.jsx)("h1", {
                            className: "visually-hidden",
                            children: "string" === typeof a ? a : j
                        }), m]
                    }), Object(s.jsx)(c.a, {})]
                })
            }
        },
        k20r: function (e, t, a) {
            e.exports = {
                GoalsList: "about-us_GoalsList__-BRlj",
                Service: "about-us_Service__34tu_",
                Service__title: "about-us_Service__title__39rBK",
                Service__list: "about-us_Service__list__RwuOh",
                Service__icon: "about-us_Service__icon__14MHA",
                LeadersList: "about-us_LeadersList__hR2p0",
                "ProcessImg--small": "about-us_ProcessImg--small__pvFqx",
                "ProcessImg--large": "about-us_ProcessImg--large__3Gl9d",
                "ProcessImg__area-label": "about-us_ProcessImg__area-label__2v8gH",
                "ProcessImg__process-label": "about-us_ProcessImg__process-label__1MQ8b",
                "ProcessImg__colored-diamond": "about-us_ProcessImg__colored-diamond__2TfSH",
                "ProcessImg__colored-dashes": "about-us_ProcessImg__colored-dashes__2uq0b",
                ProcessImg__diamond: "about-us_ProcessImg__diamond__23OAP",
                ProcessImg__dashes: "about-us_ProcessImg__dashes__1q_Tb",
                "ProcessImg--inview": "about-us_ProcessImg--inview__3Xegk"
            }
        },
        l7NP: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return c
            }));
            var s = a("ODXe"),
                n = a("q1tI");

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    a = Object(n.useState)(!1),
                    c = a[0],
                    r = a[1],
                    o = Object(n.useState)(null),
                    i = o[0],
                    l = o[1],
                    j = Object(n.useRef)(),
                    d = Object(n.useRef)();
                return Object(n.useEffect)((function () {
                    var a = d.current,
                        n = j.current;
                    if (a && n && n.unobserve(a), i) {
                        var c = !1;
                        return a = i, (n = new IntersectionObserver((function (e) {
                                var o = Object(s.a)(e, 1)[0];
                                c || (r(o.isIntersecting), t && o.isIntersecting && n.unobserve(a))
                            }), {
                                threshold: e
                            })).observe(a),
                            function () {
                                c = !0, n.unobserve(a), n = null, a = null
                            }
                    }
                }), [i, t, e]), [l, c]
            }
        },
        m0d9: function (e, t, a) {
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
        pzGH: function (e, t, a) {
            e.exports = {
                ImageList: "image-list_ImageList__1jHr5"
            }
        },
        qBzA: function (e, t, a) {
            e.exports = {
                ImageListItem__img: "image-list-item_ImageListItem__img__2eVyk",
                "ImageListItem--offset": "image-list-item_ImageListItem--offset__1O6Lo"
            }
        },
        qu2t: function (e, t, a) {
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
        rcdh: function (e, t, a) {
            e.exports = {
                ValueIcon: "values-icons_ValueIcon__26nSy",
                ValueIcon__path: "values-icons_ValueIcon__path__j9hjg",
                ValueIcon__group: "values-icons_ValueIcon__group__2RvjF",
                ValueIcon__name: "values-icons_ValueIcon__name__1p_PI",
                ValueIcon__active: "values-icons_ValueIcon__active__4_-oh"
            }
        },
        rgco: function (e, t, a) {
            e.exports = {
                PageHeader: "page-header_PageHeader__2LuS_",
                "PageHeader--no-padding": "page-header_PageHeader--no-padding__10nON",
                "PageHeader--match-content-padding": "page-header_PageHeader--match-content-padding__2JfCx",
                "PageHeader--light": "page-header_PageHeader--light__Gjq-f"
            }
        },
        xlEm: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return d
            }));
            var s = a("rePB"),
                n = a("nKUr"),
                c = a("Ff2n"),
                r = a("yKaS"),
                o = a("qu2t"),
                i = a.n(o);

            function l(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(a), !0).forEach((function (t) {
                        Object(s.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.tag,
                    a = e.color,
                    s = e.className,
                    o = e.children,
                    l = e.noPadding,
                    d = e.smallPaddingTop,
                    m = e.overlap,
                    h = e.tight,
                    u = Object(c.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    b = t || "div";
                return Object(n.jsx)(b, j(j({
                    className: Object(r.a)([i.a.PageContent, a && i.a["PageContent--".concat(a)], l && i.a["PageContent--nopadding"], d && i.a["PageContent--small-padding-top"], h && i.a["PageContent--tight"], m && i.a["PageContent--overlap"], s])
                }, u), {}, {
                    children: o
                }))
            }
        }
    },
    [
        ["MTsT", 0, 2, 1, 3, 4]
    ]
]);