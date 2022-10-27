_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [13], {
        "+0RG": function (e, t, c) {
            "use strict";
            c.r(t), c.d(t, "__N_SSG", (function () {
                return k
            })), c.d(t, "default", (function () {
                return w
            }));
            var a = c("nKUr"),
                r = c("o0o1"),
                n = c.n(r),
                s = c("HaE+"),
                i = c("ODXe"),
                o = c("q1tI"),
                l = c("eomm"),
                d = c.n(l),
                h = c("hdTg"),
                m = c("xlEm"),
                g = c("3ca1"),
                j = c("TuJg"),
                u = c("Bm7v"),
                x = c("DwZZ"),
                b = c("l7NP"),
                f = c("jZJi"),
                O = c("vdCP"),
                p = c("yKaS"),
                _ = c("7iIF"),
                y = c.n(_),
                k = !0;

            function w(e) {
                var t = e.items,
                    c = Object(o.useState)("idle"),
                    r = c[0],
                    l = c[1],
                    _ = Object(o.useState)(null),
                    k = _[0],
                    w = _[1],
                    v = Object(o.useState)(""),
                    N = v[0],
                    I = v[1],
                    P = Object(o.useRef)(),
                    M = Object(b.a)(.2),
                    C = Object(i.a)(M, 2),
                    S = C[0],
                    E = C[1],
                    D = Object(b.a)(.2),
                    H = Object(i.a)(D, 2),
                    W = H[0],
                    B = H[1],
                    R = Object(b.a)(.2),
                    F = Object(i.a)(R, 2),
                    T = F[0],
                    K = F[1],
                    q = Object(b.a)(.2),
                    G = Object(i.a)(q, 2),
                    J = G[0],
                    z = G[1],
                    U = Object(b.a)(.2),
                    Z = Object(i.a)(U, 2),
                    A = Z[0],
                    L = Z[1],
                    V = function () {
                        var e = Object(s.a)(n.a.mark((function e(t) {
                            var c, a;
                            return n.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), c = "Case Study Request - ".concat(k.title), (a = P.current).style.minWidth = a.offsetWidth, l("sending"), e.prev = 5, e.next = 8, Object(f.a)({
                                            endpoint: "/send-email/case-study-lock",
                                            method: "POST",
                                            body: {
                                                to: N,
                                                title: k.title
                                            }
                                        });
                                    case 8:
                                        a.style = null, l("submitted"), e.next = 16;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(5), console.log("Error sending email: ".concat(e.t0.message)), l("error");
                                    case 16:
                                        try {
                                            Object(f.b)({
                                                email: N
                                            }, c)
                                        } catch (r) {
                                            console.log("Error while tracking ".concat(r.message))
                                        }
                                        try {
                                            Object(O.a)({
                                                action: "submit_form",
                                                category: "content_upgrade",
                                                label: c
                                            })
                                        } catch (r) {
                                            console.log("Error while tracking form submission with gtag: ".concat(r.message))
                                        }
                                        case 18:
                                        case "end":
                                            return e.stop()
                                }
                            }), e, null, [
                                [5, 12]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();
                if (Object(o.useEffect)((function () {
                        var e = new URLSearchParams(window.location.search).get("slug"),
                            c = t.find((function (t) {
                                return t.slug === e
                            }));
                        w(c || 404)
                    }), []), 404 === k) return Object(a.jsx)(d.a, {
                    statusCode: 404
                });
                var X = "submitted" === r;
                return Object(a.jsxs)(h.a, {
                    title: "".concat(k ? k.title : "Locked", " | Case Study"),
                    className: y.a.Page,
                    children: [Object(a.jsxs)(u.a, {
                        noPadding: !0,
                        className: y.a.PageHeader,
                        children: [Object(a.jsx)("div", {
                            className: "small-only",
                            children: Object(a.jsxs)("svg", {
                                ref: S,
                                className: Object(p.a)([y.a.MockImg, E && y.a["MockImg--in"]]),
                                "aria-hidden": "true",
                                viewBox: "0 0 320 290",
                                children: [Object(a.jsx)("mask", {
                                    id: "header-small-a",
                                    fill: "#fff",
                                    children: Object(a.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "m0 0h320v250h-320z"
                                    })
                                }), Object(a.jsx)("mask", {
                                    id: "header-small-b",
                                    fill: "#fff",
                                    children: Object(a.jsx)("rect", {
                                        width: "331",
                                        height: "222",
                                        y: ".5",
                                        fillRule: "evenodd",
                                        rx: "14"
                                    })
                                }), Object(a.jsxs)("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    children: [Object(a.jsx)("g", {
                                        mask: "url(#header-small-a)",
                                        children: Object(a.jsxs)("g", {
                                            transform: "translate(-61 38.5)",
                                            children: [Object(a.jsx)("rect", {
                                                width: "328",
                                                height: "219",
                                                x: "1.5",
                                                y: "2",
                                                stroke: "#fff",
                                                strokeWidth: "3",
                                                rx: "14"
                                            }), Object(a.jsx)("g", {
                                                mask: "url(#header-small-b)",
                                                children: Object(a.jsxs)("g", {
                                                    transform: "translate(46 17.5)",
                                                    children: [Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "36.956",
                                                        height: "7.979",
                                                        x: "56.048",
                                                        rx: "3.989"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "36.956",
                                                        height: "7.979",
                                                        x: "145.94",
                                                        rx: "3.989"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "36.956",
                                                        height: "7.979",
                                                        x: "100.994",
                                                        rx: "3.989"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "115.861",
                                                        height: "115.695",
                                                        y: "21.942",
                                                        rx: "6"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "48.941",
                                                        height: "7.979",
                                                        x: "123.851",
                                                        y: "45.879",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "66.92",
                                                        height: "3.989",
                                                        x: "123.851",
                                                        y: "56.85",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "74.411",
                                                        height: "3.989",
                                                        x: "123.851",
                                                        y: "62.834",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "37.455",
                                                        height: "3.989",
                                                        x: "123.851",
                                                        y: "68.819",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "46.941",
                                                        height: "9.968",
                                                        x: "124.851",
                                                        y: "80.291",
                                                        stroke: "#394046",
                                                        strokeWidth: "2",
                                                        rx: "2"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "48.941",
                                                        height: "7.979",
                                                        x: "67.186",
                                                        y: "156.781",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "66.92",
                                                        height: "3.989",
                                                        x: "49.222",
                                                        y: "167.544",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "74.411",
                                                        height: "3.989",
                                                        x: "41.677",
                                                        y: "173.643",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "37.455",
                                                        height: "3.989",
                                                        x: "78.683",
                                                        y: "179.742",
                                                        rx: "1"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "46.941",
                                                        height: "9.968",
                                                        x: "68.186",
                                                        y: "191.146",
                                                        stroke: "#394046",
                                                        strokeWidth: "2",
                                                        rx: "2",
                                                        style: {
                                                            fill: "none"
                                                        }
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "115.861",
                                                        height: "115.523",
                                                        x: "123.851",
                                                        y: "105.223",
                                                        rx: "6"
                                                    })]
                                                })
                                            })]
                                        })
                                    }), Object(a.jsxs)("g", {
                                        transform: "matrix(-1 0 0 1 295 70.5)",
                                        children: [Object(a.jsx)("rect", {
                                            width: "120",
                                            height: "215",
                                            x: "1.5",
                                            y: "2",
                                            fill: "#1d252c",
                                            stroke: "#fff",
                                            strokeWidth: "3",
                                            rx: "14"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "28.667",
                                            height: "6.24",
                                            x: "79.189",
                                            y: "16.5",
                                            rx: "3.12"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "29.29",
                                            height: "6.24",
                                            x: "46.783",
                                            y: "16.5",
                                            rx: "3.12"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "28.667",
                                            height: "6.24",
                                            x: "15",
                                            y: "16.5",
                                            rx: "3.12"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "92.856",
                                            height: "92.976",
                                            x: "15",
                                            y: "36.564",
                                            rx: "6"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "61.073",
                                            height: "9.984",
                                            x: "15",
                                            y: "139.524",
                                            rx: "1"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "83.508",
                                            height: "4.992",
                                            x: "15",
                                            y: "153.252",
                                            rx: "1"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "92.856",
                                            height: "4.992",
                                            x: "15",
                                            y: "160.74",
                                            rx: "1"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "46.74",
                                            height: "4.992",
                                            x: "15",
                                            y: "168.228",
                                            rx: "1"
                                        }), Object(a.jsx)("rect", {
                                            className: y.a.MockImg__element,
                                            width: "59.073",
                                            height: "12.976",
                                            x: "16",
                                            y: "182.332",
                                            stroke: "#394046",
                                            strokeWidth: "2",
                                            rx: "2",
                                            style: {
                                                fill: "none"
                                            }
                                        })]
                                    })]
                                })]
                            })
                        }), Object(a.jsx)("div", {
                            className: "medium-up",
                            children: Object(a.jsxs)("svg", {
                                ref: W,
                                className: Object(p.a)([y.a.HeaderImg, y.a.MockImg, B && y.a["MockImg--in"]]),
                                "aria-hidden": "true",
                                viewBox: "0 0 1440 714",
                                children: [Object(a.jsxs)("defs", {
                                    children: [Object(a.jsx)("rect", {
                                        id: "headerImg-c",
                                        width: "921.57",
                                        height: "618.55",
                                        x: "0",
                                        y: "0",
                                        rx: "22.24"
                                    }), Object(a.jsx)("path", {
                                        id: "headerImg-a",
                                        d: "M0 0h1440v682H0z"
                                    })]
                                }), Object(a.jsxs)("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    children: [Object(a.jsx)("mask", {
                                        id: "headerImg-b",
                                        fill: "#fff",
                                        children: Object(a.jsx)("use", {
                                            xlinkHref: "#headerImg-a"
                                        })
                                    }), Object(a.jsx)("use", {
                                        fill: "#1D252C",
                                        xlinkHref: "#headerImg-a"
                                    }), Object(a.jsx)("g", {
                                        mask: "url(#headerImg-b)",
                                        children: Object(a.jsxs)("g", {
                                            transform: "translate(142 87)",
                                            children: [Object(a.jsx)("mask", {
                                                id: "headerImg-d",
                                                fill: "#fff",
                                                children: Object(a.jsx)("use", {
                                                    xlinkHref: "#headerImg-c"
                                                })
                                            }), Object(a.jsx)("rect", {
                                                width: "918.57",
                                                height: "615.55",
                                                x: "1.5",
                                                y: "1.5",
                                                stroke: "#FFF",
                                                strokeWidth: "3",
                                                rx: "22.24"
                                            }), Object(a.jsx)("g", {
                                                mask: "url(#headerImg-d)",
                                                children: Object(a.jsxs)("g", {
                                                    transform: "translate(128.22 45.87)",
                                                    children: [Object(a.jsxs)("g", {
                                                        transform: "translate(156)",
                                                        fill: "#394046",
                                                        children: [Object(a.jsx)("rect", {
                                                            className: y.a.MockImg__element,
                                                            width: "102.86",
                                                            height: "22.24",
                                                            rx: "11.12"
                                                        }), Object(a.jsx)("rect", {
                                                            className: y.a.MockImg__element,
                                                            width: "102.86",
                                                            height: "22.24",
                                                            x: "125.1",
                                                            rx: "11.12"
                                                        }), Object(a.jsx)("rect", {
                                                            className: y.a.MockImg__element,
                                                            width: "102.86",
                                                            height: "22.24",
                                                            x: "250.2",
                                                            rx: "11.12"
                                                        })]
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "322.48",
                                                        height: "322.48",
                                                        y: "61.16",
                                                        fill: "#394046",
                                                        rx: "11.12"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "136.22",
                                                        height: "22.24",
                                                        x: "344.72",
                                                        y: "127.88",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "186.26",
                                                        height: "11.12",
                                                        x: "344.72",
                                                        y: "158.46",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "207.11",
                                                        height: "11.12",
                                                        x: "344.72",
                                                        y: "175.14",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "104.25",
                                                        height: "11.12",
                                                        x: "344.72",
                                                        y: "191.82",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "133.44",
                                                        height: "30.58",
                                                        x: "346.11",
                                                        y: "222.4",
                                                        stroke: "#394046",
                                                        strokeWidth: "2.78",
                                                        rx: "5.56"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "136.22",
                                                        height: "22.24",
                                                        x: "187",
                                                        y: "437",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "186.26",
                                                        height: "11.12",
                                                        x: "137",
                                                        y: "467",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "207.11",
                                                        height: "11.12",
                                                        x: "116",
                                                        y: "484",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "104.25",
                                                        height: "11.12",
                                                        x: "219",
                                                        y: "501",
                                                        fill: "#394046",
                                                        rx: "2.78"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "133.44",
                                                        height: "30.58",
                                                        x: "188.39",
                                                        y: "531.39",
                                                        stroke: "#394046",
                                                        strokeWidth: "2.78",
                                                        rx: "5.56"
                                                    }), Object(a.jsx)("rect", {
                                                        className: y.a.MockImg__element,
                                                        width: "322.48",
                                                        height: "322",
                                                        x: "344.72",
                                                        y: "293.29",
                                                        fill: "#394046",
                                                        rx: "11.12"
                                                    })]
                                                })
                                            })]
                                        })
                                    }), Object(a.jsxs)("g", {
                                        transform: "translate(1041 259)",
                                        children: [Object(a.jsx)("rect", {
                                            width: "253.1",
                                            height: "452",
                                            x: "1.5",
                                            y: "1.5",
                                            fill: "#1D252C",
                                            stroke: "#FFF",
                                            strokeWidth: "3",
                                            rx: "20.8"
                                        }), Object(a.jsxs)("g", {
                                            transform: "translate(31 33)",
                                            children: [Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "59.8",
                                                height: "13",
                                                fill: "#394046",
                                                rx: "6.5"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "61.1",
                                                height: "13",
                                                x: "66.3",
                                                fill: "#394046",
                                                rx: "6.5"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "59.8",
                                                height: "13",
                                                x: "133.9",
                                                fill: "#394046",
                                                rx: "6.5"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "193.7",
                                                height: "193.7",
                                                y: "41.8",
                                                fill: "#394046",
                                                rx: "10.4"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "127.4",
                                                height: "20.8",
                                                y: "256.3",
                                                fill: "#394046",
                                                rx: "2.6"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "174.2",
                                                height: "10.4",
                                                y: "284.9",
                                                fill: "#394046",
                                                rx: "2.6"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "193.7",
                                                height: "10.4",
                                                y: "300.5",
                                                fill: "#394046",
                                                rx: "2.6"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "97.5",
                                                height: "10.4",
                                                y: "316.1",
                                                fill: "#394046",
                                                rx: "2.6"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "124.8",
                                                height: "28.6",
                                                x: "1.3",
                                                y: "344.7",
                                                stroke: "#394046",
                                                strokeWidth: "2.6",
                                                rx: "5.2"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), Object(a.jsxs)(m.a, {
                        className: y.a.PageContent,
                        color: "black",
                        noPadding: !0,
                        children: [Object(a.jsx)("div", {
                            className: "row",
                            children: Object(a.jsxs)("div", {
                                className: "column column-large--10",
                                children: [Object(a.jsx)("div", {
                                    className: "small-only",
                                    children: Object(a.jsxs)("svg", {
                                        ref: J,
                                        className: Object(p.a)([y.a.MockImg, z && y.a["MockImg--in"]]),
                                        "aria-hidden": "true",
                                        viewBox: "0 0 272 646",
                                        children: [Object(a.jsxs)("linearGradient", {
                                            id: "body-shapes-a",
                                            x1: "50%",
                                            x2: "50%",
                                            y1: "0%",
                                            y2: "100%",
                                            children: [Object(a.jsx)("stop", {
                                                offset: "0",
                                                stopColor: "#101820",
                                                stopOpacity: "0"
                                            }), Object(a.jsx)("stop", {
                                                offset: "1",
                                                stopColor: "#101820"
                                            })]
                                        }), Object(a.jsxs)("g", {
                                            fillRule: "evenodd",
                                            transform: "translate(0 .5)",
                                            children: [Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "80",
                                                height: "20",
                                                x: "2",
                                                y: "1.5",
                                                stroke: "#394046",
                                                strokeWidth: "2",
                                                rx: "4",
                                                style: {
                                                    fill: "none"
                                                }
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "128",
                                                height: "22",
                                                x: "1",
                                                y: "45.5",
                                                fill: "#394046",
                                                rx: "4"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "271",
                                                height: "41",
                                                y: "78.5",
                                                rx: "2"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "222",
                                                height: "40",
                                                y: "130.5",
                                                rx: "2"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "170.22",
                                                height: "54.22",
                                                x: "1.39",
                                                y: "204.39",
                                                stroke: "#394046",
                                                strokeWidth: "2.78",
                                                rx: "4",
                                                style: {
                                                    fill: "none"
                                                }
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "136.22",
                                                height: "22.24",
                                                y: "321.5",
                                                rx: "2.78"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "244",
                                                height: "11.12",
                                                y: "360.08",
                                                rx: "2.78"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "271",
                                                height: "11.12",
                                                y: "376.76",
                                                rx: "2.78"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "253",
                                                height: "11.12",
                                                y: "393.44",
                                                rx: "2.78"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "244",
                                                height: "11.12",
                                                y: "410.08",
                                                rx: "2.78"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                width: "117",
                                                height: "11.12",
                                                y: "426.76",
                                                rx: "2.78"
                                            }), Object(a.jsx)("path", {
                                                className: y.a.MockImg__element,
                                                d: "m8 494.5h255c4.418278 0 8 3.581722 8 8v142h-271v-142c0-4.418278 3.581722-8 8-8z"
                                            }), Object(a.jsx)("path", {
                                                fill: "url(#body-shapes-a)",
                                                d: "m0 320.5h272v324h-272z"
                                            })]
                                        })]
                                    })
                                }), Object(a.jsx)("div", {
                                    className: "medium-up",
                                    children: Object(a.jsxs)("svg", {
                                        ref: T,
                                        className: Object(p.a)([y.a.MockImg, K && y.a["MockImg--in"]]),
                                        "aria-hidden": "true",
                                        viewBox: "0 0 1158 584",
                                        children: [Object(a.jsxs)("linearGradient", {
                                            id: "case-study-a",
                                            x1: "50%",
                                            x2: "50%",
                                            y1: "0%",
                                            y2: "100%",
                                            children: [Object(a.jsx)("stop", {
                                                offset: "0",
                                                stopColor: "#101820",
                                                stopOpacity: "0"
                                            }), Object(a.jsx)("stop", {
                                                offset: "1",
                                                stopColor: "#101820"
                                            })]
                                        }), Object(a.jsxs)("g", {
                                            fill: "none",
                                            fillRule: "evenodd",
                                            children: [Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                height: "30",
                                                rx: "8",
                                                stroke: "#394046",
                                                strokeWidth: "2",
                                                width: "120",
                                                x: "2",
                                                y: "1"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                fill: "#394046",
                                                height: "32",
                                                rx: "8",
                                                width: "190",
                                                x: "139"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                fill: "#394046",
                                                height: "61",
                                                rx: "4",
                                                width: "803",
                                                y: "48"
                                            }), Object(a.jsx)("rect", {
                                                className: y.a.MockImg__element,
                                                height: "57.22",
                                                rx: "5.56",
                                                stroke: "#394046",
                                                strokeWidth: "2.78",
                                                width: "209.22",
                                                x: "946.61",
                                                y: "49.39"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "60",
                                                rx: "4",
                                                width: "480",
                                                y: "125"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "22.24",
                                                rx: "2.78",
                                                width: "136.22",
                                                x: "118.94",
                                                y: "259.75"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "11.12",
                                                rx: "2.78",
                                                width: "615",
                                                x: "118.94",
                                                y: "298.33"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "11.12",
                                                rx: "2.78",
                                                width: "684",
                                                x: "118.94",
                                                y: "315.01"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "11.12",
                                                rx: "2.78",
                                                width: "638",
                                                x: "118.94",
                                                y: "331.69"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "11.12",
                                                rx: "2.78",
                                                width: "615",
                                                x: "118.94",
                                                y: "348.33"
                                            }), Object(a.jsx)("rect", {
                                                fill: "#394046",
                                                className: y.a.MockImg__element,
                                                height: "11.12",
                                                rx: "2.78",
                                                width: "296",
                                                x: "118.94",
                                                y: "365.01"
                                            }), Object(a.jsx)("path", {
                                                fill: "#394046",
                                                d: "m130.12 434h897.76c6.14141 0 11.12 4.978594 11.12 11.12v138.88h-920v-138.88c0-6.141406 4.978594-11.12 11.12-11.12z",
                                                className: y.a.MockImg__element
                                            }), Object(a.jsx)("path", {
                                                d: "m0 260h1158v324h-1158z",
                                                fill: "url(#case-study-a)"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), k && Object(a.jsx)("div", {
                            className: Object(p.a)(["row", y.a.BoxWrapper]),
                            ref: A,
                            children: Object(a.jsx)("div", {
                                className: "column column-large--8",
                                children: Object(a.jsxs)("div", {
                                    className: Object(p.a)(["u-box", "u-background-black", y.a.Box, L && y.a["Box--in"]]),
                                    children: [Object(a.jsx)("p", {
                                        className: "title-4 u-margin-top-0",
                                        children: X ? "Thank you!" : "1232?"
                                    }), Object(a.jsx)("p", {
                                        className: "u-margin-bottom-0",
                                        children: X ? "We'll be in touch shortly to discuss this case study with you." : "You didn\u2019t miss anything, this content is just extra special and by-request only. Contact us for full access to this case study."
                                    }), !X && Object(a.jsx)(a.Fragment, {
                                        children: Object(a.jsx)("form", {
                                            onSubmit: V,
                                            children: Object(a.jsxs)("div", {
                                                className: y.a.FormButtons,
                                                children: [Object(a.jsx)(g.a, {
                                                    theme: "dark",
                                                    value: N,
                                                    type: "email",
                                                    onChange: function (e) {
                                                        var t = e.target.value;
                                                        return I(t)
                                                    },
                                                    required: !0,
                                                    placeholder: "Enter your email address"
                                                }), Object(a.jsxs)(j.a, {
                                                    theme: "light",
                                                    ref: P,
                                                    disabled: "idle" !== r,
                                                    type: "submit",
                                                    children: ["idle" === r && "Submit", "sending" === r && Object(a.jsx)(x.a, {})]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        "/a9y": function (e, t, c) {
            "use strict";
            var a = c("lwsE"),
                r = c("W8MJ"),
                n = c("7W2i"),
                s = c("a1gu"),
                i = c("Nsbk");

            function o(e) {
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
                    var c, a = i(e);
                    if (t) {
                        var r = i(this).constructor;
                        c = Reflect.construct(a, arguments, r)
                    } else c = a.apply(this, arguments);
                    return s(this, c)
                }
            }
            var l = c("TqRt");
            t.__esModule = !0, t.default = void 0;
            var d = l(c("q1tI")),
                h = l(c("8Kt/")),
                m = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function g(e) {
                var t = e.res,
                    c = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : c ? c.statusCode : 404
                }
            }
            var j = function (e) {
                n(c, e);
                var t = o(c);

                function c() {
                    return a(this, c), t.apply(this, arguments)
                }
                return r(c, [{
                    key: "render",
                    value: function () {
                        var e = this.props.statusCode,
                            t = this.props.title || m[e] || "An unexpected error has occurred";
                        return d.default.createElement("div", {
                            style: u.error
                        }, d.default.createElement(h.default, null, d.default.createElement("title", null, e, ": ", t)), d.default.createElement("div", null, d.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body { margin: 0 }"
                            }
                        }), e ? d.default.createElement("h1", {
                            style: u.h1
                        }, e) : null, d.default.createElement("div", {
                            style: u.desc
                        }, d.default.createElement("h2", {
                            style: u.h2
                        }, t, "."))))
                    }
                }]), c
            }(d.default.Component);
            t.default = j, j.displayName = "ErrorPage", j.getInitialProps = g, j.origGetInitialProps = g;
            var u = {
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
        "3ca1": function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return h
            }));
            var a = c("rePB"),
                r = c("nKUr"),
                n = c("Ff2n"),
                s = c("yKaS"),
                i = c("sl8y"),
                o = c.n(i);

            function l(e, t) {
                var c = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), c.push.apply(c, a)
                }
                return c
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(c), !0).forEach((function (t) {
                        Object(a.a)(e, t, c[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : l(Object(c)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                    }))
                }
                return e
            }

            function h(e) {
                var t = e.className,
                    c = e.children,
                    a = e.theme,
                    i = Object(n.a)(e, ["className", "children", "theme"]);
                return Object(r.jsx)("input", d(d({
                    className: Object(s.a)([o.a.Input, a && o.a["Input--".concat(a)], t])
                }, i), {}, {
                    children: c
                }))
            }
        },
        "77b6": function (e, t, c) {
            e.exports = {
                Spinner: "spinner_Spinner__3SDZp",
                load3: "spinner_load3__34jC_"
            }
        },
        "7iIF": function (e, t, c) {
            e.exports = {
                Page: "case-study-locked-page_Page__1okyA",
                PageHeader: "case-study-locked-page_PageHeader__2VL1P",
                MockImg: "case-study-locked-page_MockImg__2KAZ6",
                MockImg__element: "case-study-locked-page_MockImg__element__RESoF",
                "MockImg--in": "case-study-locked-page_MockImg--in__GuFu0",
                HeaderImg: "case-study-locked-page_HeaderImg__2lamJ",
                PageContent: "case-study-locked-page_PageContent__31Viq",
                BoxWrapper: "case-study-locked-page_BoxWrapper__117Hj",
                Box: "case-study-locked-page_Box__3IBKx",
                "Box--in": "case-study-locked-page_Box--in__Cty03",
                FormButtons: "case-study-locked-page_FormButtons__VHW2V"
            }
        },
        Bm7v: function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return j
            }));
            var a = c("rePB"),
                r = c("nKUr"),
                n = c("Ff2n"),
                s = c("q1tI"),
                i = c("J8E0"),
                o = c("cNOD"),
                l = c("yKaS"),
                d = c("rgco"),
                h = c.n(d);

            function m(e, t) {
                var c = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), c.push.apply(c, a)
                }
                return c
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(c), !0).forEach((function (t) {
                        Object(a.a)(e, t, c[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : m(Object(c)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                    }))
                }
                return e
            }

            function j(e) {
                var t = e.title,
                    c = e.noPadding,
                    a = e.className,
                    d = e.children,
                    m = e.titleClassName,
                    j = e.matchContentPadding,
                    u = Object(n.a)(e, ["title", "noPadding", "className", "children", "titleClassName", "matchContentPadding"]),
                    x = Object(s.useContext)(o.b)[0];
                return Object(r.jsxs)("header", g(g({
                    className: Object(l.a)([h.a.PageHeader, h.a["PageHeader--".concat(x)], c && h.a["PageHeader--no-padding"], j && h.a["PageHeader--match-content-padding"], a])
                }, u), {}, {
                    children: [t && Object(r.jsx)(i.a, {
                        level: 2,
                        asLevel: 1,
                        tag: "div",
                        className: Object(l.a)([m]),
                        children: t
                    }), d]
                }))
            }
        },
        DwZZ: function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return h
            }));
            var a = c("rePB"),
                r = c("nKUr"),
                n = c("Ff2n"),
                s = c("yKaS"),
                i = c("77b6"),
                o = c.n(i);

            function l(e, t) {
                var c = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), c.push.apply(c, a)
                }
                return c
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(c), !0).forEach((function (t) {
                        Object(a.a)(e, t, c[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : l(Object(c)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                    }))
                }
                return e
            }

            function h(e) {
                var t = e.size,
                    c = void 0 === t ? 25 : t,
                    a = e.color,
                    i = void 0 === a ? "yellow" : a,
                    l = e.backgroundColor,
                    h = void 0 === l ? "black" : l,
                    m = e.className,
                    g = Object(n.a)(e, ["size", "color", "backgroundColor", "className"]),
                    j = "".concat(c, "px");
                return Object(r.jsx)("div", d(d({
                    className: Object(s.a)([o.a.Spinner, m]),
                    style: {
                        width: j,
                        height: j,
                        "--color": "var(--color-".concat(i, ")"),
                        backgroundColor: "var(--color-".concat(h, ")")
                    }
                }, g), {}, {
                    children: Object(r.jsx)("p", {
                        className: "visually-hidden",
                        children: "Loading"
                    })
                }))
            }
        },
        "HaE+": function (e, t, c) {
            "use strict";

            function a(e, t, c, a, r, n, s) {
                try {
                    var i = e[n](s),
                        o = i.value
                } catch (l) {
                    return void c(l)
                }
                i.done ? t(o) : Promise.resolve(o).then(a, r)
            }

            function r(e) {
                return function () {
                    var t = this,
                        c = arguments;
                    return new Promise((function (r, n) {
                        var s = e.apply(t, c);

                        function i(e) {
                            a(s, r, n, i, o, "next", e)
                        }

                        function o(e) {
                            a(s, r, n, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            c.d(t, "a", (function () {
                return r
            }))
        },
        e8eN: function (e, t, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/case-studies/locked", function () {
                return c("+0RG")
            }])
        },
        eomm: function (e, t, c) {
            e.exports = c("/a9y")
        },
        hdTg: function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return d
            }));
            var a = c("nKUr"),
                r = c("q1tI"),
                n = c("rCDY"),
                s = c("z1CN"),
                i = c("cNOD"),
                o = c("8oZb"),
                l = c("yKaS");

            function d(e) {
                var t = e.a11yTitle,
                    c = void 0 === t || t,
                    d = e.title,
                    h = e.description,
                    m = e.children,
                    g = e.className,
                    j = e.theme,
                    u = void 0 === j ? "dark" : j,
                    x = e.ogImage,
                    b = e.twImage,
                    f = Object(r.useContext)(i.b)[1];
                return Object(r.useEffect)((function () {
                    f(u)
                }), [u]), Object(a.jsxs)(a.Fragment, {
                    children: [Object(a.jsx)(o.a, {
                        title: d,
                        description: h,
                        ogImage: x,
                        twImage: b
                    }), Object(a.jsx)(s.a, {}), Object(a.jsxs)("main", {
                        id: "main",
                        className: Object(l.a)(["u-overflow-hidden", g]),
                        children: [!1 !== c && Object(a.jsx)("h1", {
                            className: "visually-hidden",
                            children: "string" === typeof c ? c : d
                        }), m]
                    }), Object(a.jsx)(n.a, {})]
                })
            }
        },
        jZJi: function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return g
            })), c.d(t, "b", (function () {
                return u
            }));
            var a = c("o0o1"),
                r = c.n(a),
                n = c("rePB"),
                s = c("HaE+"),
                i = c("ZTVd");

            function o(e, t) {
                var c = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), c.push.apply(c, a)
                }
                return c
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(c), !0).forEach((function (t) {
                        Object(n.a)(e, t, c[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : o(Object(c)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                    }))
                }
                return e
            }
            var d = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nf_807d9",
                        t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
                    return t ? t[2] : null
                },
                h = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "nf_807d9",
                        c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3650,
                        a = "";
                    if (c) {
                        var r = new Date;
                        r.setTime(r.getTime() + 24 * c * 60 * 60 * 1e3), a = "; expires=" + r.toGMTString()
                    }
                    document.cookie = escape(t) + "=" + escape(e) + a + "; path=/"
                },
                m = function (e) {
                    return new URLSearchParams(window.location.search).get(e) || ""
                };

            function g(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = Object(s.a)(r.a.mark((function e(t) {
                    var c, a, n, s, o;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return c = t.endpoint, a = t.method, n = void 0 === a ? "GET" : a, s = t.body, e.next = 3, fetch("".concat(i.c).concat(c), l({
                                    method: n,
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }, s && {
                                    body: JSON.stringify(s)
                                }));
                            case 3:
                                return o = e.sent, e.next = 6, o.json();
                            case 6:
                                return o = e.sent, e.abrupt("return", o);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function u(e, t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = Object(s.a)(r.a.mark((function e(t, c) {
                    var a, n;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.email) {
                                    e.next = 2;
                                    break
                                }
                                throw Error("Missing email from the fields");
                            case 2:
                                if (c) {
                                    e.next = 4;
                                    break
                                }
                                throw Error("Missing conversion description");
                            case 4:
                                return a = {
                                    sessionid: d(),
                                    pagelink: window.location.href,
                                    pagetitle: document.title || "No Title",
                                    firstname: t.name || "",
                                    lastname: "",
                                    email: t.email,
                                    conversiondesc: c,
                                    fields: JSON.stringify(t),
                                    utm_campaign: m("utm_campaign"),
                                    utm_content: m("utm_content"),
                                    utm_source: m("utm_source"),
                                    utm_medium: m("utm_medium"),
                                    formtype: 1234,
                                    contentid: ""
                                }, e.prev = 5, e.next = 8, g({
                                    endpoint: "/tracking/form",
                                    method: "POST",
                                    body: a
                                });
                            case 8:
                                (n = e.sent).success ? h(n.data) : console.log("Failed to track form ".concat(n.error)), e.next = 15;
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
        l7NP: function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return n
            }));
            var a = c("ODXe"),
                r = c("q1tI");

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .3,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    c = Object(r.useState)(!1),
                    n = c[0],
                    s = c[1],
                    i = Object(r.useState)(null),
                    o = i[0],
                    l = i[1],
                    d = Object(r.useRef)(),
                    h = Object(r.useRef)();
                return Object(r.useEffect)((function () {
                    var c = h.current,
                        r = d.current;
                    if (c && r && r.unobserve(c), o) {
                        var n = !1;
                        return c = o, (r = new IntersectionObserver((function (e) {
                                var i = Object(a.a)(e, 1)[0];
                                n || (s(i.isIntersecting), t && i.isIntersecting && r.unobserve(c))
                            }), {
                                threshold: e
                            })).observe(c),
                            function () {
                                n = !0, r.unobserve(c), r = null, c = null
                            }
                    }
                }), [o, t, e]), [l, n]
            }
        },
        qu2t: function (e, t, c) {
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
        rgco: function (e, t, c) {
            e.exports = {
                PageHeader: "page-header_PageHeader__2LuS_",
                "PageHeader--no-padding": "page-header_PageHeader--no-padding__10nON",
                "PageHeader--match-content-padding": "page-header_PageHeader--match-content-padding__2JfCx",
                "PageHeader--light": "page-header_PageHeader--light__Gjq-f"
            }
        },
        sl8y: function (e, t, c) {
            e.exports = {
                Input: "input_Input__2T_ng",
                "Input--dark": "input_Input--dark__3cXva"
            }
        },
        vdCP: function (e, t, c) {
            "use strict";
            c.d(t, "b", (function () {
                return a
            })), c.d(t, "a", (function () {
                return r
            }));
            var a = function (e) {
                    window.gtag && window.gtag("config", "GTM-5QD2946", {
                        page_path: e
                    })
                },
                r = function (e) {
                    var t = e.action,
                        c = e.category,
                        a = e.label,
                        r = e.value;
                    window.gtag("event", t, {
                        event_category: c,
                        event_label: a,
                        value: r
                    })
                }
        },
        xlEm: function (e, t, c) {
            "use strict";
            c.d(t, "a", (function () {
                return h
            }));
            var a = c("rePB"),
                r = c("nKUr"),
                n = c("Ff2n"),
                s = c("yKaS"),
                i = c("qu2t"),
                o = c.n(i);

            function l(e, t) {
                var c = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), c.push.apply(c, a)
                }
                return c
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(c), !0).forEach((function (t) {
                        Object(a.a)(e, t, c[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : l(Object(c)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                    }))
                }
                return e
            }

            function h(e) {
                var t = e.tag,
                    c = e.color,
                    a = e.className,
                    i = e.children,
                    l = e.noPadding,
                    h = e.smallPaddingTop,
                    m = e.overlap,
                    g = e.tight,
                    j = Object(n.a)(e, ["tag", "color", "className", "children", "noPadding", "smallPaddingTop", "overlap", "tight"]),
                    u = t || "div";
                return Object(r.jsx)(u, d(d({
                    className: Object(s.a)([o.a.PageContent, c && o.a["PageContent--".concat(c)], l && o.a["PageContent--nopadding"], h && o.a["PageContent--small-padding-top"], g && o.a["PageContent--tight"], m && o.a["PageContent--overlap"], a])
                }, j), {}, {
                    children: i
                }))
            }
        }
    },
    [
        ["e8eN", 0, 2, 1, 3, 4]
    ]
]);