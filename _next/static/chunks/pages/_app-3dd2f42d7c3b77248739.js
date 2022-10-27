_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [6], {
        0: function (e, t, n) {
            n("GcxT"), e.exports = n("nOHt")
        },
        "1TCz": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("rePB"),
                o = n("nKUr"),
                c = n("KQm4"),
                a = n("q1tI"),
                i = n("vdCP"),
                u = n("Ff2n"),
                s = n("rmG7"),
                f = n("cNOD"),
                l = n("yKaS"),
                d = n("jksR"),
                p = n.n(d);

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function (t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function O(e) {
                var t = e.path,
                    n = e.className,
                    r = e.children,
                    c = e.duration,
                    i = void 0 === c ? 600 : c,
                    d = Object(u.a)(e, ["path", "className", "children", "duration"]),
                    b = Object(a.useContext)(f.b)[2],
                    O = Object(a.useState)("changing"),
                    m = O[0],
                    v = O[1],
                    w = Object(a.useState)(!1),
                    j = w[0],
                    y = w[1],
                    h = Object(a.useState)(r),
                    _ = h[0],
                    P = h[1],
                    S = Object(a.useRef)(),
                    C = Object(a.useRef)(),
                    x = Object(s.a)()[0];
                return Object(a.useEffect)((function () {
                    var e = S.current;
                    return clearTimeout(e), x ? (C.current.focus(), void P(r)) : (v("changing"), e = setTimeout((function () {
                        C.current.focus(), P(r), v("completed"), e = setTimeout((function () {
                            v("idle")
                        }), i)
                    }), i), function () {
                        clearTimeout(e)
                    })
                }), [t, i]), Object(a.useEffect)((function () {
                    "idle" === m && y((function (e) {
                        return !e
                    }))
                }), [m]), Object(o.jsxs)("div", g(g({
                    className: Object(l.a)([p.a.PageSwiper, p.a["PageSwiper--".concat(m)], j && p.a["PageSwiper--horizontal"], n]),
                    style: {
                        "--duration": "".concat(i, "ms")
                    },
                    ref: C,
                    tabIndex: "-1"
                }, d), {}, {
                    children: [_, Object(o.jsx)("div", {
                        className: p.a.PageSwiper__overlay,
                        children: Object(o.jsx)("div", {
                            className: Object(l.a)(["u-background-".concat(b), p.a.PageSwiper__blade])
                        })
                    })]
                }))
            }
            var m = n("w4nZ");
            n("gWIg");

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function (t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function (e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return y(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function (e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, a = !0,
                    i = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]()
                    },
                    n: function () {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function (e) {
                        i = !0, c = e
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (i) throw c
                        }
                    }
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.default = function (e) {
                var t = e.Component,
                    n = e.pageProps,
                    r = e.router;
                return Object(a.useEffect)((function () {
                    var e = function (e) {
                            setTimeout((function () {
                                Object(i.b)(e), window.NF.recordPageView()
                            }), 600)
                        },
                        t = function () {
                            var e, t = document.querySelectorAll("link[rel=stylesheet], style:not([media=x])"),
                                n = Object(c.a)(t).map((function (e) {
                                    return e.cloneNode(!0)
                                })),
                                o = j(n);
                            try {
                                for (o.s(); !(e = o.n()).done;) {
                                    var a = e.value;
                                    a.removeAttribute("data-n-p"), a.removeAttribute("data-n-href"), document.head.appendChild(a)
                                }
                            } catch (i) {
                                o.e(i)
                            } finally {
                                o.f()
                            }
                            r.events.on("routeChangeComplete", (function e() {
                                r.events.off("routeChangeComplete", e), window.setTimeout((function () {
                                    var e, t = j(n);
                                    try {
                                        for (t.s(); !(e = t.n()).done;) {
                                            var r = e.value;
                                            document.head.removeChild(r)
                                        }
                                    } catch (i) {
                                        t.e(i)
                                    } finally {
                                        t.f()
                                    }
                                }), 600)
                            }))
                        };
                    return r.events.on("beforeHistoryChange", t), r.events.on("routeChangeComplete", e),
                        function () {
                            r.events.off("beforeHistoryChange", t), r.events.off("routeChangeComplete", e)
                        }
                }), []), Object(o.jsx)(m.a, {
                    children: Object(o.jsx)(f.a, {
                        children: Object(o.jsx)(O, {
                            duration: 600,
                            path: r.asPath,
                            children: Object(o.jsx)(t, w({}, n))
                        })
                    })
                })
            }
        },
        "20a2": function (e, t, n) {
            e.exports = n("nOHt")
        },
        "8+3m": function (e) {
            e.exports = JSON.parse('{"meta_title":"HIWI","meta_description":"让图书销售更容易"}')
        },
        BsWD: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return o
            }));
            var r = n("a3WO");

            function o(e, t) {
                if (e) {
                    if ("string" === typeof e) return Object(r.a)(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r.a)(e, t) : void 0
                }
            }
        },
        Ff2n: function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            n.d(t, "a", (function () {
                return r
            }))
        },
        GcxT: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n("1TCz")
            }])
        },
        KQm4: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return c
            }));
            var r = n("a3WO");
            var o = n("BsWD");

            function c(e) {
                return function (e) {
                    if (Array.isArray(e)) return Object(r.a)(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Object(o.a)(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        ZTVd: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return r
            })), n.d(t, "c", (function () {
                return o
            })), n.d(t, "d", (function () {
                return c
            })), n.d(t, "a", (function () {
                return a
            }));
            var r = n("8+3m"),
                o = {
                    aws_project_region: "us-west-2",
                    aws_cloud_logic_custom: [{
                        name: "wtcApi",
                        endpoint: "https://n0runnef1d.execute-api.us-west-2.amazonaws.com/main",
                        region: "us-west-2"
                    }]
                }.aws_cloud_logic_custom[0].endpoint,
                c = !1,
                a = ["yellow", "green", "blue", "red"]
        },
        a3WO: function (e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, "a", (function () {
                return r
            }))
        },
        cNOD: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return i
            })), n.d(t, "a", (function () {
                return s
            }));
            var r = n("nKUr"),
                o = n("q1tI"),
                c = n("20a2"),
                a = n("ZTVd"),
                i = Object(o.createContext)(),
                u = ["dark", "light"],
                s = function (e) {
                    var t = e.children,
                        n = Object(o.useState)("dark"),
                        s = n[0],
                        f = n[1],
                        l = Object(o.useState)(0),
                        d = l[0],
                        p = l[1],
                        b = Object(c.useRouter)();
                    return Object(o.useEffect)((function () {
                        var e = function (e) {
                            p((function (e) {
                                var t = e + 1;
                                return t >= a.a.length && (t = 0), t
                            }))
                        };
                        return b.events.on("routeChangeComplete", e),
                            function () {
                                b.events.off("routeChangeComplete", e)
                            }
                    }), []), Object(r.jsx)(i.Provider, {
                        value: [s, function (e) {
                            if (!u.includes(e)) throw Error("The theme ".concat(e, " ins't valid. Use one of the following: ").concat(u.join(",")));
                            f(e)
                        }, a.a[d]],
                        children: t
                    })
                }
        },
        gWIg: function (e, t, n) {},
        jksR: function (e, t, n) {
            e.exports = {
                PageSwiper: "page-swiper_PageSwiper__Q4HxM",
                PageSwiper__overlay: "page-swiper_PageSwiper__overlay__2sgUy",
                PageSwiper__blade: "page-swiper_PageSwiper__blade__2fFdb",
                "PageSwiper--horizontal": "page-swiper_PageSwiper--horizontal__3F3qr",
                "PageSwiper--completed": "page-swiper_PageSwiper--completed__17hMI",
                "PageSwiper--changing": "page-swiper_PageSwiper--changing__2hjaa"
            }
        },
        rePB: function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function () {
                return r
            }))
        },
        rmG7: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return c
            }));
            var r = n("q1tI"),
                o = n("w4nZ");

            function c() {
                var e = Object(r.useContext)(o.b),
                    t = e[0],
                    n = e[1];
                return [t, function () {
                    n({
                        type: "on"
                    })
                }, function () {
                    n({
                        type: "off"
                    })
                }, e[2]]
            }
        },
        vdCP: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return r
            })), n.d(t, "a", (function () {
                return o
            }));
            var r = function (e) {
                    window.gtag && window.gtag("config", "GTM-5QD2946", {
                        page_path: e
                    })
                },
                o = function (e) {
                    var t = e.action,
                        n = e.category,
                        r = e.label,
                        o = e.value;
                    window.gtag("event", t, {
                        event_category: n,
                        event_label: r,
                        value: o
                    })
                }
        },
        w4nZ: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return u
            })), n.d(t, "a", (function () {
                return d
            }));
            var r = n("nKUr"),
                o = n("q1tI"),
                c = n("ZTVd"),
                a = {
                    setItem: function (e, t) {
                        return c.d ? null : localStorage.setItem(e, t)
                    },
                    getItem: function (e) {
                        return c.d ? null : localStorage.getItem(e)
                    }
                },
                i = "wtc-prefersReducedMotion",
                u = Object(o.createContext)(),
                s = function (e) {
                    if (!c.d) {
                        var t = "is-reduced-motion",
                            n = document.querySelector("html");
                        1 === e ? n.classList.add(t) : n.classList.remove(t)
                    }
                },
                f = function (e, t) {
                    switch (t.type) {
                        case "on":
                            return s(1), a.setItem(i, 1), 1;
                        case "off":
                            return s(0), a.setItem(i, 0), 0;
                        default:
                            return e
                    }
                },
                l = function () {
                    var e = c.d ? null : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    return parseInt(e ? 1 : a.getItem(i) || 0)
                },
                d = function (e) {
                    var t = e.children,
                        n = Object(o.useReducer)(f, 0),
                        c = n[0],
                        a = n[1];
                    return Object(o.useEffect)((function () {
                        var e = l();
                        a(1 === e ? {
                            type: "on"
                        } : {
                            type: "off"
                        })
                    }), []), Object(r.jsx)(u.Provider, {
                        value: [c, a, l],
                        children: t
                    })
                }
        },
        yKaS: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return o
            }));
            var r = n("KQm4");

            function o(e) {
                var t;
                return (t = []).concat.apply(t, Object(r.a)(e)).filter(Boolean).join(" ").trim()
            }
        }
    },
    [
        [0, 0, 2, 1]
    ]
]);