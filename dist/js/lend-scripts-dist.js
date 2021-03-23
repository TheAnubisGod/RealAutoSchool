/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
!function () {
    "use strict";
    var t = {
        d: function (n, e) {
            for (var i in e) t.o(e, i) && !t.o(n, i) && Object.defineProperty(n, i, {enumerable: !0, get: e[i]})
        }, o: function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r: function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    }, n = {};
    t.r(n), t.d(n, {
        CREATED: function () {
            return R
        }, DESTROYED: function () {
            return X
        }, IDLE: function () {
            return F
        }, MOUNTED: function () {
            return B
        }, MOVING: function () {
            return G
        }
    });

    function e() {
        return (e = Object.assign || function (t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            return t
        }).apply(this, arguments)
    }

    var i = Object.keys;

    function o(t, n) {
        i(t).some((function (e, i) {
            return n(t[e], e, i)
        }))
    }

    function r(t) {
        return i(t).map((function (n) {
            return t[n]
        }))
    }

    function s(t) {
        return "object" == typeof t
    }

    function a(t, n) {
        var i = e({}, t);
        return o(n, (function (t, n) {
            s(t) ? (s(i[n]) || (i[n] = {}), i[n] = a(i[n], t)) : i[n] = t
        })), i
    }

    function u(t) {
        return Array.isArray(t) ? t : [t]
    }

    function c(t, n, e) {
        return Math.min(Math.max(t, n > e ? e : n), n > e ? n : e)
    }

    function d(t, n) {
        var e = 0;
        return t.replace(/%s/g, (function () {
            return u(n)[e++]
        }))
    }

    function f(t) {
        var n = typeof t;
        return "number" === n && t > 0 ? parseFloat(t) + "px" : "string" === n ? t : ""
    }

    function l(t) {
        return t < 10 ? "0" + t : t
    }

    function h(t, n) {
        if ("string" == typeof n) {
            var e = m("div", {});
            E(e, {position: "absolute", width: n}), w(t, e), n = e.clientWidth, b(e)
        }
        return +n || 0
    }

    function p(t, n) {
        return t ? t.querySelector(n.split(" ")[0]) : null
    }

    function g(t, n) {
        return v(t, n)[0]
    }

    function v(t, n) {
        return t ? r(t.children).filter((function (t) {
            return P(t, n.split(" ")[0]) || t.tagName === n
        })) : []
    }

    function m(t, n) {
        var e = document.createElement(t);
        return o(n, (function (t, n) {
            return C(e, n, t)
        })), e
    }

    function y(t) {
        var n = m("div", {});
        return n.innerHTML = t, n.firstChild
    }

    function b(t) {
        u(t).forEach((function (t) {
            if (t) {
                var n = t.parentElement;
                n && n.removeChild(t)
            }
        }))
    }

    function w(t, n) {
        t && t.appendChild(n)
    }

    function x(t, n) {
        if (t && n) {
            var e = n.parentElement;
            e && e.insertBefore(t, n)
        }
    }

    function E(t, n) {
        t && o(n, (function (n, e) {
            null !== n && (t.style[e] = n)
        }))
    }

    function _(t, n, e) {
        t && u(n).forEach((function (n) {
            n && t.classList[e ? "remove" : "add"](n)
        }))
    }

    function k(t, n) {
        _(t, n, !1)
    }

    function S(t, n) {
        _(t, n, !0)
    }

    function P(t, n) {
        return !!t && t.classList.contains(n)
    }

    function C(t, n, e) {
        t && t.setAttribute(n, e)
    }

    function z(t, n) {
        return t ? t.getAttribute(n) : ""
    }

    function I(t, n) {
        u(n).forEach((function (n) {
            u(t).forEach((function (t) {
                return t && t.removeAttribute(n)
            }))
        }))
    }

    function M(t) {
        return t.getBoundingClientRect()
    }

    var T = "slide", A = "loop", O = "fade", L = function (t, n) {
        var e, i;
        return {
            mount: function () {
                e = n.Elements.list, t.on("transitionend", (function (t) {
                    t.target === e && i && i()
                }), e)
            }, start: function (o, r, s, a, u) {
                var c = t.options, d = n.Controller.edgeIndex, f = c.speed;
                i = u, t.is(T) && (0 === s && r >= d || s >= d && 0 === r) && (f = c.rewindSpeed || f), E(e, {
                    transition: "transform " + f + "ms " + c.easing,
                    transform: "translate(" + a.x + "px," + a.y + "px)"
                })
            }
        }
    }, W = function (t, n) {
        function e(e) {
            var i = t.options;
            E(n.Elements.slides[e], {transition: "opacity " + i.speed + "ms " + i.easing})
        }

        return {
            mount: function () {
                e(t.index)
            }, start: function (t, i, o, r, s) {
                var a = n.Elements.track;
                E(a, {height: f(a.clientHeight)}), e(i), setTimeout((function () {
                    s(), E(a, {height: ""})
                }))
            }
        }
    };

    function H(t) {
        console.error("[SPLIDE] " + t)
    }

    function j(t, n) {
        if (!t) throw new Error(n)
    }

    var q = "splide", D = {active: "is-active", visible: "is-visible", loading: "is-loading"}, N = {
        type: "slide",
        rewind: !1,
        speed: 400,
        rewindSpeed: 0,
        waitForTransition: !0,
        width: 0,
        height: 0,
        fixedWidth: 0,
        fixedHeight: 0,
        heightRatio: 0,
        autoWidth: !1,
        autoHeight: !1,
        perPage: 1,
        perMove: 0,
        clones: 0,
        start: 0,
        focus: !1,
        gap: 0,
        padding: 0,
        arrows: !0,
        arrowPath: "",
        pagination: !0,
        autoplay: !1,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        lazyLoad: !1,
        preloadPages: 1,
        easing: "cubic-bezier(.42,.65,.27,.99)",
        keyboard: "global",
        drag: !0,
        dragAngleThreshold: 30,
        swipeDistanceThreshold: 150,
        flickVelocityThreshold: .6,
        flickPower: 600,
        flickMaxPages: 1,
        direction: "ltr",
        cover: !1,
        accessibility: !0,
        slideFocus: !0,
        isNavigation: !1,
        trimSpace: !0,
        updateOnMove: !1,
        throttle: 100,
        destroy: !1,
        breakpoints: !1,
        classes: {
            root: q,
            slider: q + "__slider",
            track: q + "__track",
            list: q + "__list",
            slide: q + "__slide",
            container: q + "__slide__container",
            arrows: q + "__arrows",
            arrow: q + "__arrow",
            prev: q + "__arrow--prev",
            next: q + "__arrow--next",
            pagination: q + "__pagination",
            page: q + "__pagination__page",
            clone: q + "__slide--clone",
            progress: q + "__progress",
            bar: q + "__progress__bar",
            autoplay: q + "__autoplay",
            play: q + "__play",
            pause: q + "__pause",
            spinner: q + "__spinner",
            sr: q + "__sr"
        },
        i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay"
        }
    }, R = 1, B = 2, F = 3, G = 4, X = 5;

    function V(t, n) {
        for (var e = 0; e < n.length; e++) {
            var i = n[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    var U = function () {
        function t(t, e, i) {
            var o;
            void 0 === e && (e = {}), void 0 === i && (i = {}), this.root = t instanceof Element ? t : document.querySelector(t), j(this.root, "An invalid element/selector was given."), this.Components = null, this.Event = function () {
                var t = [];

                function n(t) {
                    t.elm && t.elm.removeEventListener(t.event, t.handler, t.options)
                }

                return {
                    on: function (n, e, i, o) {
                        void 0 === i && (i = null), void 0 === o && (o = {}), n.split(" ").forEach((function (n) {
                            i && i.addEventListener(n, e, o), t.push({event: n, handler: e, elm: i, options: o})
                        }))
                    }, off: function (e, i) {
                        void 0 === i && (i = null), e.split(" ").forEach((function (e) {
                            t = t.filter((function (t) {
                                return !t || t.event !== e || t.elm !== i || (n(t), !1)
                            }))
                        }))
                    }, emit: function (n) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                        t.forEach((function (t) {
                            t.elm || t.event.split(".")[0] !== n || t.handler.apply(t, i)
                        }))
                    }, destroy: function () {
                        t.forEach(n), t = []
                    }
                }
            }(), this.State = (o = R, {
                set: function (t) {
                    o = t
                }, is: function (t) {
                    return t === o
                }
            }), this.STATES = n, this._o = a(N, e), this._i = 0, this._c = i, this._e = {}, this._t = null
        }

        var e, i, s, u = t.prototype;
        return u.mount = function (t, n) {
            var e = this;
            void 0 === t && (t = this._e), void 0 === n && (n = this._t), this.State.set(R), this._e = t, this._t = n, this.Components = function (t, n, e) {
                var i = {};
                return o(n, (function (n, e) {
                    i[e] = n(t, i, e.toLowerCase())
                })), e || (e = t.is(O) ? W : L), i.Transition = e(t, i), i
            }(this, a(this._c, t), n);
            try {
                o(this.Components, (function (t, n) {
                    var i = t.required;
                    void 0 === i || i ? t.mount && t.mount() : delete e.Components[n]
                }))
            } catch (t) {
                return void H(t.message)
            }
            var i = this.State;
            return i.set(B), o(this.Components, (function (t) {
                t.mounted && t.mounted()
            })), this.emit("mounted"), i.set(F), this.emit("ready"), E(this.root, {visibility: "visible"}), this.on("move drag", (function () {
                return i.set(G)
            })).on("moved dragged", (function () {
                return i.set(F)
            })), this
        }, u.sync = function (t) {
            return this.sibling = t, this
        }, u.on = function (t, n, e, i) {
            return void 0 === e && (e = null), void 0 === i && (i = {}), this.Event.on(t, n, e, i), this
        }, u.off = function (t, n) {
            return void 0 === n && (n = null), this.Event.off(t, n), this
        }, u.emit = function (t) {
            for (var n, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
            return (n = this.Event).emit.apply(n, [t].concat(i)), this
        }, u.go = function (t, n) {
            return void 0 === n && (n = this.options.waitForTransition), (this.State.is(F) || this.State.is(G) && !n) && this.Components.Controller.go(t, !1), this
        }, u.is = function (t) {
            return t === this._o.type
        }, u.add = function (t, n) {
            return void 0 === n && (n = -1), this.Components.Elements.add(t, n, this.refresh.bind(this)), this
        }, u.remove = function (t) {
            return this.Components.Elements.remove(t), this.refresh(), this
        }, u.refresh = function () {
            return this.emit("refresh:before").emit("refresh").emit("resize"), this
        }, u.destroy = function (t) {
            var n = this;
            if (void 0 === t && (t = !0), !this.State.is(R)) return r(this.Components).reverse().forEach((function (n) {
                n.destroy && n.destroy(t)
            })), this.emit("destroy", t), this.Event.destroy(), this.State.set(X), this;
            this.on("ready", (function () {
                return n.destroy(t)
            }))
        }, e = t, (i = [{
            key: "index", get: function () {
                return this._i
            }, set: function (t) {
                this._i = parseInt(t)
            }
        }, {
            key: "length", get: function () {
                return this.Components.Elements.length
            }
        }, {
            key: "options", get: function () {
                return this._o
            }, set: function (t) {
                var n = this.State.is(R);
                n || this.emit("update"), this._o = a(this._o, t), n || this.emit("updated", this._o)
            }
        }, {
            key: "classes", get: function () {
                return this._o.classes
            }
        }, {
            key: "i18n", get: function () {
                return this._o.i18n
            }
        }]) && V(e.prototype, i), s && V(e, s), t
    }(), Y = function (t) {
        var n = z(t.root, "data-splide");
        if (n) try {
            t.options = JSON.parse(n)
        } catch (t) {
            H(t.message)
        }
        return {
            mount: function () {
                t.State.is(R) && (t.index = t.options.start)
            }
        }
    }, J = "rtl", K = "ttb", Q = "update.slide", Z = function (t, n) {
        var e = t.root, i = t.classes, s = [];
        if (!e.id) {
            window.splide = window.splide || {};
            var a = window.splide.uid || 0;
            window.splide.uid = ++a, e.id = "splide" + l(a)
        }
        var u = {
            mount: function () {
                var n = this;
                this.init(), t.on("refresh", (function () {
                    n.destroy(), n.init()
                })).on("updated", (function () {
                    S(e, c()), k(e, c())
                }))
            }, destroy: function () {
                s.forEach((function (t) {
                    t.destroy()
                })), s = [], S(e, c())
            }, init: function () {
                var t = this;
                !function () {
                    u.slider = g(e, i.slider), u.track = p(e, "." + i.track), u.list = g(u.track, i.list), j(u.track && u.list, "Track or list was not found."), u.slides = v(u.list, i.slide);
                    var t = d(i.arrows);
                    u.arrows = {prev: p(t, "." + i.prev), next: p(t, "." + i.next)};
                    var n = d(i.autoplay);
                    u.bar = p(d(i.progress), "." + i.bar), u.play = p(n, "." + i.play), u.pause = p(n, "." + i.pause), u.track.id = u.track.id || e.id + "-track", u.list.id = u.list.id || e.id + "-list"
                }(), k(e, c()), this.slides.forEach((function (n, e) {
                    t.register(n, e, -1)
                }))
            }, register: function (n, e, i) {
                var o = function (t, n, e, i) {
                    var o = t.options.updateOnMove,
                        s = "ready.slide updated.slide resized.slide moved.slide" + (o ? " move.slide" : ""), a = {
                            slide: i,
                            index: n,
                            realIndex: e,
                            container: g(i, t.classes.container),
                            isClone: e > -1,
                            mount: function () {
                                var r = this;
                                this.isClone || (i.id = t.root.id + "-slide" + l(n + 1)), t.on(s, (function () {
                                    return r.update()
                                })).on(Q, c).on("click", (function () {
                                    return t.emit("click", r)
                                }), i), o && t.on("move.slide", (function (t) {
                                    t === e && u(!0, !1)
                                })), E(i, {display: ""}), this.styles = z(i, "style") || ""
                            },
                            destroy: function () {
                                t.off(s).off(Q).off("click", i), S(i, r(D)), c(), I(this.container, "style")
                            },
                            update: function () {
                                u(this.isActive(), !1), u(this.isVisible(), !0)
                            },
                            isActive: function () {
                                return t.index === n
                            },
                            isVisible: function () {
                                var n = this.isActive();
                                if (t.is(O) || n) return n;
                                var e = Math.ceil, o = M(t.Components.Elements.track), r = M(i);
                                return t.options.direction === K ? o.top <= r.top && r.bottom <= e(o.bottom) : o.left <= r.left && r.right <= e(o.right)
                            },
                            isWithin: function (e, i) {
                                var o = Math.abs(e - n);
                                return t.is(T) || this.isClone || (o = Math.min(o, t.length - o)), o < i
                            }
                        };

                    function u(n, e) {
                        var o = e ? "visible" : "active", r = D[o];
                        n ? (k(i, r), t.emit("" + o, a)) : P(i, r) && (S(i, r), t.emit(e ? "hidden" : "inactive", a))
                    }

                    function c() {
                        C(i, "style", a.styles)
                    }

                    return a
                }(t, e, i, n);
                o.mount(), s.push(o)
            }, getSlide: function (t) {
                return s.filter((function (n) {
                    return n.index === t
                }))[0]
            }, getSlides: function (t) {
                return t ? s : s.filter((function (t) {
                    return !t.isClone
                }))
            }, getSlidesByPage: function (e) {
                var i = n.Controller.toIndex(e), o = t.options, r = !1 !== o.focus ? 1 : o.perPage;
                return s.filter((function (t) {
                    var n = t.index;
                    return i <= n && n < i + r
                }))
            }, add: function (t, n, e) {
                if ("string" == typeof t && (t = y(t)), t instanceof Element) {
                    var i = this.slides[n];
                    E(t, {display: "none"}), i ? (x(t, i), this.slides.splice(n, 0, t)) : (w(this.list, t), this.slides.push(t)), function (t, n) {
                        var e = t.querySelectorAll("img"), i = e.length;
                        if (i) {
                            var r = 0;
                            o(e, (function (t) {
                                t.onload = t.onerror = function () {
                                    ++r === i && n()
                                }
                            }))
                        } else n()
                    }(t, (function () {
                        e && e(t)
                    }))
                }
            }, remove: function (t) {
                b(this.slides.splice(t, 1)[0])
            }, each: function (t) {
                s.forEach(t)
            }, get length() {
                return this.slides.length
            }, get total() {
                return s.length
            }
        };

        function c() {
            var n = i.root, e = t.options;
            return [n + "--" + e.type, n + "--" + e.direction, e.drag ? n + "--draggable" : "", e.isNavigation ? n + "--nav" : "", D.active]
        }

        function d(t) {
            return g(e, t) || g(u.slider, t)
        }

        return u
    }, $ = Math.floor, tt = function (t, n) {
        var e, i, o = {
            mount: function () {
                e = t.options, i = t.is(A), t.on("move", (function (n) {
                    t.index = n
                })).on("updated refresh", (function (n) {
                    e = n || e, t.index = c(t.index, 0, o.edgeIndex)
                }))
            }, go: function (t, e) {
                var i = this.trim(this.parse(t));
                n.Track.go(i, this.rewind(i), e)
            }, parse: function (n) {
                var i = t.index, r = String(n).match(/([+\-<>]+)(\d+)?/), s = r ? r[1] : "", a = r ? parseInt(r[2]) : 0;
                switch (s) {
                    case"+":
                        i += a || 1;
                        break;
                    case"-":
                        i -= a || 1;
                        break;
                    case">":
                    case"<":
                        i = function (t, n, i) {
                            if (t > -1) return o.toIndex(t);
                            var r = e.perMove, s = i ? -1 : 1;
                            if (r) return n + r * s;
                            return o.toIndex(o.toPage(n) + s)
                        }(a, i, "<" === s);
                        break;
                    default:
                        i = parseInt(n)
                }
                return i
            }, toIndex: function (n) {
                if (r()) return n;
                var i = t.length, o = e.perPage, s = n * o;
                return i - o <= (s -= (this.pageLength * o - i) * $(s / i)) && s < i && (s = i - o), s
            }, toPage: function (n) {
                if (r()) return n;
                var i = t.length, o = e.perPage;
                return $(i - o <= n && n < i ? (i - 1) / o : n / o)
            }, trim: function (t) {
                return i || (t = e.rewind ? this.rewind(t) : c(t, 0, this.edgeIndex)), t
            }, rewind: function (t) {
                var n = this.edgeIndex;
                if (i) {
                    for (; t > n;) t -= n + 1;
                    for (; t < 0;) t += n + 1
                } else t > n ? t = 0 : t < 0 && (t = n);
                return t
            }, isRtl: function () {
                return e.direction === J
            }, get pageLength() {
                var n = t.length;
                return r() ? n : Math.ceil(n / e.perPage)
            }, get edgeIndex() {
                var n = t.length;
                return n ? r() || e.isNavigation || i ? n - 1 : n - e.perPage : 0
            }, get prevIndex() {
                var n = t.index - 1;
                return (i || e.rewind) && (n = this.rewind(n)), n > -1 ? n : -1
            }, get nextIndex() {
                var n = t.index + 1;
                return (i || e.rewind) && (n = this.rewind(n)), t.index < n && n <= this.edgeIndex || 0 === n ? n : -1
            }
        };

        function r() {
            return !1 !== e.focus
        }

        return o
    }, nt = Math.abs, et = function (t, n) {
        var e, i, o, r = t.options.direction === K, s = t.is(O), a = t.options.direction === J, u = !1, d = a ? 1 : -1,
            f = {
                sign: d, mount: function () {
                    i = n.Elements, e = n.Layout, o = i.list
                }, mounted: function () {
                    var n = this;
                    s || (this.jump(0), t.on("mounted resize updated", (function () {
                        n.jump(t.index)
                    })))
                }, go: function (e, i, o) {
                    var r = h(e), a = t.index;
                    t.State.is(G) && u || (u = e !== i, o || t.emit("move", i, a, e), Math.abs(r - this.position) >= 1 || s ? n.Transition.start(e, i, a, this.toCoord(r), (function () {
                        l(e, i, a, o)
                    })) : e !== a && "move" === t.options.trimSpace ? n.Controller.go(e + e - a, o) : l(e, i, a, o))
                }, jump: function (t) {
                    this.translate(h(t))
                }, translate: function (t) {
                    E(o, {transform: "translate" + (r ? "Y" : "X") + "(" + t + "px)"})
                }, cancel: function () {
                    t.is(A) ? this.shift() : this.translate(this.position), E(o, {transition: ""})
                }, shift: function () {
                    var n = nt(this.position), e = nt(this.toPosition(0)), i = nt(this.toPosition(t.length)), o = i - e;
                    n < e ? n += o : n > i && (n -= o), this.translate(d * n)
                }, trim: function (n) {
                    return !t.options.trimSpace || t.is(A) ? n : c(n, d * (e.totalSize() - e.size - e.gap), 0)
                }, toIndex: function (t) {
                    var n = this, e = 0, o = 1 / 0;
                    return i.getSlides(!0).forEach((function (i) {
                        var r = i.index, s = nt(n.toPosition(r) - t);
                        s < o && (o = s, e = r)
                    })), e
                }, toCoord: function (t) {
                    return {x: r ? 0 : t, y: r ? t : 0}
                }, toPosition: function (t) {
                    var n = e.totalSize(t) - e.slideSize(t) - e.gap;
                    return d * (n + this.offset(t))
                }, offset: function (n) {
                    var i = t.options.focus, o = e.slideSize(n);
                    return "center" === i ? -(e.size - o) / 2 : -(parseInt(i) || 0) * (o + e.gap)
                }, get position() {
                    var t = r ? "top" : a ? "right" : "left";
                    return M(o)[t] - (M(i.track)[t] - e.padding[t] * d)
                }
            };

        function l(n, e, i, r) {
            E(o, {transition: ""}), u = !1, s || f.jump(e), r || t.emit("moved", e, i, n)
        }

        function h(t) {
            return f.trim(f.toPosition(t))
        }

        return f
    }, it = function (t, n) {
        var e = [], i = 0, o = n.Elements, r = {
            mount: function () {
                var n = this;
                t.is(A) && (s(), t.on("refresh:before", (function () {
                    n.destroy()
                })).on("refresh", s).on("resize", (function () {
                    i !== a() && (n.destroy(), t.refresh())
                })))
            }, destroy: function () {
                b(e), e = []
            }, get clones() {
                return e
            }, get length() {
                return e.length
            }
        };

        function s() {
            r.destroy(), function (t) {
                var n = o.length, i = o.register;
                if (n) {
                    for (var r = o.slides; r.length < t;) r = r.concat(r);
                    r.slice(0, t).forEach((function (t, r) {
                        var s = u(t);
                        w(o.list, s), e.push(s), i(s, r + n, r % n)
                    })), r.slice(-t).forEach((function (o, s) {
                        var a = u(o);
                        x(a, r[0]), e.push(a), i(a, s - t, (n + s - t % n) % n)
                    }))
                }
            }(i = a())
        }

        function a() {
            var n = t.options;
            if (n.clones) return n.clones;
            var e = n.autoWidth || n.autoHeight ? o.length : n.perPage, i = n.direction === K ? "Height" : "Width",
                r = h(t.root, n["fixed" + i]);
            return r && (e = Math.ceil(o.track["client" + i] / r)), e * (n.drag ? n.flickMaxPages + 1 : 1)
        }

        function u(n) {
            var e = n.cloneNode(!0);
            return k(e, t.classes.clone), I(e, "id"), e
        }

        return r
    };

    function ot(t, n) {
        var e;
        return function () {
            e || (e = setTimeout((function () {
                t(), e = null
            }), n))
        }
    }

    var rt = function (t, n) {
            var e, o, r = n.Elements, s = t.options.direction === K, a = (e = {
                mount: function () {
                    t.on("resize load", ot((function () {
                        t.emit("resize")
                    }), t.options.throttle), window).on("resize", c).on("updated refresh", u), u(), this.totalSize = s ? this.totalHeight : this.totalWidth, this.slideSize = s ? this.slideHeight : this.slideWidth
                }, destroy: function () {
                    I([r.list, r.track], "style")
                }, get size() {
                    return s ? this.height : this.width
                }
            }, o = s ? function (t, n) {
                var e, i, o = n.Elements, r = t.root;
                return {
                    margin: "marginBottom", init: function () {
                        this.resize()
                    }, resize: function () {
                        i = t.options, e = o.track, this.gap = h(r, i.gap);
                        var n = i.padding, s = h(r, n.top || n), a = h(r, n.bottom || n);
                        this.padding = {top: s, bottom: a}, E(e, {paddingTop: f(s), paddingBottom: f(a)})
                    }, totalHeight: function (n) {
                        void 0 === n && (n = t.length - 1);
                        var e = o.getSlide(n);
                        return e ? M(e.slide).bottom - M(o.list).top + this.gap : 0
                    }, slideWidth: function () {
                        return h(r, i.fixedWidth || this.width)
                    }, slideHeight: function (t) {
                        if (i.autoHeight) {
                            var n = o.getSlide(t);
                            return n ? n.slide.offsetHeight : 0
                        }
                        var e = i.fixedHeight || (this.height + this.gap) / i.perPage - this.gap;
                        return h(r, e)
                    }, get width() {
                        return e.clientWidth
                    }, get height() {
                        var t = i.height || this.width * i.heightRatio;
                        return j(t, '"height" or "heightRatio" is missing.'), h(r, t) - this.padding.top - this.padding.bottom
                    }
                }
            }(t, n) : function (t, n) {
                var e, i = n.Elements, o = t.root, r = t.options;
                return {
                    margin: "margin" + (r.direction === J ? "Left" : "Right"), height: 0, init: function () {
                        this.resize()
                    }, resize: function () {
                        r = t.options, e = i.track, this.gap = h(o, r.gap);
                        var n = r.padding, s = h(o, n.left || n), a = h(o, n.right || n);
                        this.padding = {left: s, right: a}, E(e, {paddingLeft: f(s), paddingRight: f(a)})
                    }, totalWidth: function (n) {
                        void 0 === n && (n = t.length - 1);
                        var e = i.getSlide(n), o = 0;
                        if (e) {
                            var s = M(e.slide), a = M(i.list);
                            o = r.direction === J ? a.right - s.left : s.right - a.left, o += this.gap
                        }
                        return o
                    }, slideWidth: function (t) {
                        if (r.autoWidth) {
                            var n = i.getSlide(t);
                            return n ? n.slide.offsetWidth : 0
                        }
                        var e = r.fixedWidth || (this.width + this.gap) / r.perPage - this.gap;
                        return h(o, e)
                    }, slideHeight: function () {
                        var t = r.height || r.fixedHeight || this.width * r.heightRatio;
                        return h(o, t)
                    }, get width() {
                        return e.clientWidth - this.padding.left - this.padding.right
                    }
                }
            }(t, n), i(o).forEach((function (t) {
                e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            })), e);

            function u() {
                a.init(), E(t.root, {maxWidth: f(t.options.width)}), r.each((function (t) {
                    t.slide.style[a.margin] = f(a.gap)
                })), c()
            }

            function c() {
                var n = t.options;
                a.resize(), E(r.track, {height: f(a.height)});
                var e = n.autoHeight ? null : f(a.slideHeight());
                r.each((function (t) {
                    E(t.container, {height: e}), E(t.slide, {
                        width: n.autoWidth ? null : f(a.slideWidth(t.index)),
                        height: t.container ? null : e
                    })
                })), t.emit("resized")
            }

            return a
        }, st = Math.abs, at = function (t, n) {
            var e, i, r, s, a = n.Track, u = n.Controller, d = t.options.direction === K, f = d ? "y" : "x", l = {
                disabled: !1, mount: function () {
                    var e = this, i = n.Elements, r = i.track;
                    t.on("touchstart mousedown", h, r).on("touchmove mousemove", g, r, {passive: !1}).on("touchend touchcancel mouseleave mouseup dragend", v, r).on("mounted refresh", (function () {
                        o(i.list.querySelectorAll("img, a"), (function (n) {
                            t.off("dragstart", n).on("dragstart", (function (t) {
                                t.preventDefault()
                            }), n, {passive: !1})
                        }))
                    })).on("mounted updated", (function () {
                        e.disabled = !t.options.drag
                    }))
                }
            };

            function h(t) {
                l.disabled || s || p(t)
            }

            function p(t) {
                e = a.toCoord(a.position), i = m(t, {}), r = i
            }

            function g(n) {
                if (i) if (r = m(n, i), s) {
                    if (n.cancelable && n.preventDefault(), !t.is(O)) {
                        var o = e[f] + r.offset[f];
                        a.translate(function (n) {
                            if (t.is(T)) {
                                var e = a.sign, i = e * a.trim(a.toPosition(0)), o = e * a.trim(a.toPosition(u.edgeIndex));
                                (n *= e) < i ? n = i - 7 * Math.log(i - n) : n > o && (n = o + 7 * Math.log(n - o)), n *= e
                            }
                            return n
                        }(o))
                    }
                } else (function (n) {
                    var e = n.offset;
                    if (t.State.is(G) && t.options.waitForTransition) return !1;
                    var i = 180 * Math.atan(st(e.y) / st(e.x)) / Math.PI;
                    d && (i = 90 - i);
                    return i < t.options.dragAngleThreshold
                })(r) && (t.emit("drag", i), s = !0, a.cancel(), p(n))
            }

            function v() {
                i = null, s && (t.emit("dragged", r), function (e) {
                    var i = e.velocity[f], o = st(i);
                    if (o > 0) {
                        var r = t.options, s = t.index, d = i < 0 ? -1 : 1, l = s;
                        if (!t.is(O)) {
                            var h = a.position;
                            o > r.flickVelocityThreshold && st(e.offset[f]) < r.swipeDistanceThreshold && (h += d * Math.min(o * r.flickPower, n.Layout.size * (r.flickMaxPages || 1))), l = a.toIndex(h)
                        }
                        l === s && o > .1 && (l = s + d * a.sign), t.is(T) && (l = c(l, 0, u.edgeIndex)), u.go(l, r.isNavigation)
                    }
                }(r), s = !1)
            }

            function m(t, n) {
                var e = t.timeStamp, i = t.touches, o = i ? i[0] : t, r = o.clientX, s = o.clientY, a = n.to || {}, u = a.x,
                    c = void 0 === u ? r : u, d = a.y, f = {x: r - c, y: s - (void 0 === d ? s : d)}, l = e - (n.time || 0);
                return {to: {x: r, y: s}, offset: f, time: e, velocity: {x: f.x / l, y: f.y / l}}
            }

            return l
        }, ut = function (t, n) {
            var e = !1;

            function i(t) {
                e && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
            }

            return {
                required: t.options.drag, mount: function () {
                    t.on("click", i, n.Elements.track, {capture: !0}).on("drag", (function () {
                        e = !0
                    })).on("dragged", (function () {
                        setTimeout((function () {
                            e = !1
                        }))
                    }))
                }
            }
        }, ct = 1, dt = 2, ft = 3, lt = function (t, n, e) {
            var i, o, r, s = t.classes, a = t.root, u = n.Elements;

            function c() {
                var r = n.Controller, s = r.prevIndex, a = r.nextIndex, u = t.length > t.options.perPage || t.is(A);
                i.disabled = s < 0 || !u, o.disabled = a < 0 || !u, t.emit(e + ":updated", i, o, s, a)
            }

            function d(n) {
                return y('<button class="' + s.arrow + " " + (n ? s.prev : s.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg"\tviewBox="0 0 40 40"\twidth="40"\theight="40"><path d="' + (t.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
            }

            return {
                required: t.options.arrows, mount: function () {
                    i = u.arrows.prev, o = u.arrows.next, i && o || !t.options.arrows || (i = d(!0), o = d(!1), r = !0, function () {
                        var n = m("div", {class: s.arrows});
                        w(n, i), w(n, o);
                        var e = u.slider, r = "slider" === t.options.arrows && e ? e : a;
                        x(n, r.firstElementChild)
                    }()), i && o && t.on("click", (function () {
                        t.go("<")
                    }), i).on("click", (function () {
                        t.go(">")
                    }), o).on("mounted move updated refresh", c), this.arrows = {prev: i, next: o}
                }, mounted: function () {
                    t.emit(e + ":mounted", i, o)
                }, destroy: function () {
                    I([i, o], "disabled"), r && b(i.parentElement)
                }
            }
        }, ht = "move.page", pt = "updated.page refresh.page", gt = function (t, n, e) {
            var i = {}, o = n.Elements, r = {
                mount: function () {
                    var n = t.options.pagination;
                    if (n) {
                        i = function () {
                            var n = t.options, e = t.classes, i = m("ul", {class: e.pagination}),
                                r = o.getSlides(!1).filter((function (t) {
                                    return !1 !== n.focus || t.index % n.perPage == 0
                                })).map((function (n, r) {
                                    var s = m("li", {}), a = m("button", {class: e.page, type: "button"});
                                    return w(s, a), w(i, s), t.on("click", (function () {
                                        t.go(">" + r)
                                    }), a), {li: s, button: a, page: r, Slides: o.getSlidesByPage(r)}
                                }));
                            return {list: i, items: r}
                        }();
                        var e = o.slider;
                        w("slider" === n && e ? e : t.root, i.list), t.on(ht, s)
                    }
                    t.off(pt).on(pt, (function () {
                        r.destroy(), t.options.pagination && (r.mount(), r.mounted())
                    }))
                }, mounted: function () {
                    if (t.options.pagination) {
                        var n = t.index;
                        t.emit(e + ":mounted", i, this.getItem(n)), s(n, -1)
                    }
                }, destroy: function () {
                    b(i.list), i.items && i.items.forEach((function (n) {
                        t.off("click", n.button)
                    })), t.off(ht), i = {}
                }, getItem: function (t) {
                    return i.items[n.Controller.toPage(t)]
                }, get data() {
                    return i
                }
            };

            function s(n, o) {
                var s = r.getItem(o), a = r.getItem(n), u = D.active;
                s && S(s.button, u), a && k(a.button, u), t.emit(e + ":updated", i, s, a)
            }

            return r
        }, vt = "data-splide-lazy", mt = "data-splide-lazy-srcset", yt = "aria-current", bt = "aria-controls",
        wt = "aria-label", xt = "aria-hidden", Et = "tabindex", _t = {
            ltr: {ArrowLeft: "<", ArrowRight: ">", Left: "<", Right: ">"},
            rtl: {ArrowLeft: ">", ArrowRight: "<", Left: ">", Right: "<"},
            ttb: {ArrowUp: "<", ArrowDown: ">", Up: "<", Down: ">"}
        }, kt = function (t, n) {
            var e = t.i18n, i = n.Elements, o = [xt, Et, bt, wt, yt, "role"];

            function r(n, e) {
                C(n, xt, !e), t.options.slideFocus && C(n, Et, e ? 0 : -1)
            }

            function s(t, n) {
                var e = i.track.id;
                C(t, bt, e), C(n, bt, e)
            }

            function a(n, i, o, r) {
                var s = t.index, a = o > -1 && s < o ? e.last : e.prev, u = r > -1 && s > r ? e.first : e.next;
                C(n, wt, a), C(i, wt, u)
            }

            function u(n, i) {
                i && C(i.button, yt, !0), n.items.forEach((function (n) {
                    var i = t.options, o = d(!1 === i.focus && i.perPage > 1 ? e.pageX : e.slideX, n.page + 1),
                        r = n.button, s = n.Slides.map((function (t) {
                            return t.slide.id
                        }));
                    C(r, bt, s.join(" ")), C(r, wt, o)
                }))
            }

            function c(t, n, e) {
                n && I(n.button, yt), e && C(e.button, yt, !0)
            }

            function f(t) {
                i.each((function (n) {
                    var i = n.slide, o = n.realIndex;
                    h(i) || C(i, "role", "button");
                    var r = o > -1 ? o : n.index, s = d(e.slideX, r + 1), a = t.Components.Elements.getSlide(r);
                    C(i, wt, s), a && C(i, bt, a.slide.id)
                }))
            }

            function l(t, n) {
                var e = t.slide;
                n ? C(e, yt, !0) : I(e, yt)
            }

            function h(t) {
                return "BUTTON" === t.tagName
            }

            return {
                required: t.options.accessibility, mount: function () {
                    t.on("visible", (function (t) {
                        r(t.slide, !0)
                    })).on("hidden", (function (t) {
                        r(t.slide, !1)
                    })).on("arrows:mounted", s).on("arrows:updated", a).on("pagination:mounted", u).on("pagination:updated", c).on("refresh", (function () {
                        I(n.Clones.clones, o)
                    })), t.options.isNavigation && t.on("navigation:mounted navigation:updated", f).on("active", (function (t) {
                        l(t, !0)
                    })).on("inactive", (function (t) {
                        l(t, !1)
                    })), ["play", "pause"].forEach((function (t) {
                        var n = i[t];
                        n && (h(n) || C(n, "role", "button"), C(n, bt, i.track.id), C(n, wt, e[t]))
                    }))
                }, destroy: function () {
                    var t = n.Arrows, e = t ? t.arrows : {};
                    I(i.slides.concat([e.prev, e.next, i.play, i.pause]), o)
                }
            }
        }, St = "move.sync", Pt = "mouseup touchend", Ct = [" ", "Enter", "Spacebar"], zt = {
            Options: Y,
            Breakpoints: function (t) {
                var n, e, i = t.options.breakpoints, o = ot(s, 50), r = [];

                function s() {
                    var o, s = (o = r.filter((function (t) {
                        return t.mql.matches
                    }))[0]) ? o.point : -1;
                    if (s !== e) {
                        e = s;
                        var a = t.State, u = i[s] || n, c = u.destroy;
                        c ? (t.options = n, t.destroy("completely" === c)) : (a.is(X) && t.mount(), t.options = u)
                    }
                }

                return {
                    required: i && matchMedia, mount: function () {
                        r = Object.keys(i).sort((function (t, n) {
                            return +t - +n
                        })).map((function (t) {
                            return {point: t, mql: matchMedia("(max-width:" + t + "px)")}
                        })), this.destroy(!0), addEventListener("resize", o), n = t.options, s()
                    }, destroy: function (t) {
                        t && removeEventListener("resize", o)
                    }
                }
            },
            Controller: tt,
            Elements: Z,
            Track: et,
            Clones: it,
            Layout: rt,
            Drag: at,
            Click: ut,
            Autoplay: function (t, n, e) {
                var i, o = [], r = n.Elements, s = {
                    required: t.options.autoplay, mount: function () {
                        var n = t.options;
                        r.slides.length > n.perPage && (i = function (t, n, e) {
                            var i, o, r, s = window.requestAnimationFrame, a = !0, u = function u(c) {
                                a || (i || (i = c, r && r < 1 && (i -= r * n)), r = (o = c - i) / n, o >= n && (i = 0, r = 1, t()), e && e(r), s(u))
                            };
                            return {
                                pause: function () {
                                    a = !0, i = 0
                                }, play: function (t) {
                                    i = 0, t && (r = 0), a && (a = !1, s(u))
                                }
                            }
                        }((function () {
                            t.go(">")
                        }), n.interval, (function (n) {
                            t.emit(e + ":playing", n), r.bar && E(r.bar, {width: 100 * n + "%"})
                        })), function () {
                            var n = t.options, e = t.sibling, i = [t.root, e ? e.root : null];
                            n.pauseOnHover && (a(i, "mouseleave", ct, !0), a(i, "mouseenter", ct, !1));
                            n.pauseOnFocus && (a(i, "focusout", dt, !0), a(i, "focusin", dt, !1));
                            r.play && t.on("click", (function () {
                                s.play(dt), s.play(ft)
                            }), r.play);
                            r.pause && a([r.pause], "click", ft, !1);
                            t.on("move refresh", (function () {
                                s.play()
                            })).on("destroy", (function () {
                                s.pause()
                            }))
                        }(), this.play())
                    }, play: function (n) {
                        void 0 === n && (n = 0), (o = o.filter((function (t) {
                            return t !== n
                        }))).length || (t.emit(e + ":play"), i.play(t.options.resetProgress))
                    }, pause: function (n) {
                        void 0 === n && (n = 0), i.pause(), -1 === o.indexOf(n) && o.push(n), 1 === o.length && t.emit(e + ":pause")
                    }
                };

                function a(n, e, i, o) {
                    n.forEach((function (n) {
                        t.on(e, (function () {
                            s[o ? "play" : "pause"](i)
                        }), n)
                    }))
                }

                return s
            },
            Cover: function (t, n) {
                function e(t) {
                    n.Elements.each((function (n) {
                        var e = g(n.slide, "IMG") || g(n.container, "IMG");
                        e && e.src && i(e, t)
                    }))
                }

                function i(t, n) {
                    E(t.parentElement, {background: n ? "" : 'center/cover no-repeat url("' + t.src + '")'}), E(t, {display: n ? "" : "none"})
                }

                return {
                    required: t.options.cover, mount: function () {
                        t.on("lazyload:loaded", (function (t) {
                            i(t, !1)
                        })), t.on("mounted updated refresh", (function () {
                            return e(!1)
                        }))
                    }, destroy: function () {
                        e(!0)
                    }
                }
            },
            Arrows: lt,
            Pagination: gt,
            LazyLoad: function (t, n, e) {
                var i, r, s = t.options, a = "sequential" === s.lazyLoad;

                function u() {
                    r = [], i = 0
                }

                function c(n) {
                    n = isNaN(n) ? t.index : n, (r = r.filter((function (t) {
                        return !t.Slide.isWithin(n, s.perPage * (s.preloadPages + 1)) || (d(t.img, t.Slide), !1)
                    })))[0] || t.off("moved." + e)
                }

                function d(n, e) {
                    k(e.slide, D.loading);
                    var i = m("span", {class: t.classes.spinner});
                    w(n.parentElement, i), n.onload = function () {
                        l(n, i, e, !1)
                    }, n.onerror = function () {
                        l(n, i, e, !0)
                    }, C(n, "srcset", z(n, mt) || ""), C(n, "src", z(n, vt) || "")
                }

                function f() {
                    if (i < r.length) {
                        var t = r[i];
                        d(t.img, t.Slide)
                    }
                    i++
                }

                function l(n, i, o, r) {
                    S(o.slide, D.loading), r || (b(i), E(n, {display: ""}), t.emit(e + ":loaded", n).emit("resize")), a && f()
                }

                return {
                    required: s.lazyLoad, mount: function () {
                        t.on("mounted refresh", (function () {
                            u(), n.Elements.each((function (t) {
                                o(t.slide.querySelectorAll("[data-splide-lazy], [" + mt + "]"), (function (n) {
                                    n.src || n.srcset || (r.push({img: n, Slide: t}), E(n, {display: "none"}))
                                }))
                            })), a && f()
                        })), a || t.on("mounted refresh moved." + e, c)
                    }, destroy: u
                }
            },
            Keyboard: function (t) {
                var n;
                return {
                    mount: function () {
                        t.on("mounted updated", (function () {
                            var e = t.options, i = t.root, o = _t[e.direction], r = e.keyboard;
                            n && (t.off("keydown", n), I(i, Et)), r && ("focused" === r ? (n = i, C(i, Et, 0)) : n = document, t.on("keydown", (function (n) {
                                o[n.key] && t.go(o[n.key])
                            }), n))
                        }))
                    }
                }
            },
            Sync: function (t) {
                var n = t.sibling, e = n && n.options.isNavigation;

                function i() {
                    t.on(St, (function (t, e, i) {
                        n.off(St).go(n.is(A) ? i : t, !1), o()
                    }))
                }

                function o() {
                    n.on(St, (function (n, e, o) {
                        t.off(St).go(t.is(A) ? o : n, !1), i()
                    }))
                }

                function r() {
                    n.Components.Elements.each((function (n) {
                        var e = n.slide, i = n.index;
                        t.off(Pt, e).on(Pt, (function (t) {
                            t.button && 0 !== t.button || s(i)
                        }), e), t.off("keyup", e).on("keyup", (function (t) {
                            Ct.indexOf(t.key) > -1 && (t.preventDefault(), s(i))
                        }), e, {passive: !1})
                    }))
                }

                function s(e) {
                    t.State.is(F) && n.go(e)
                }

                return {
                    required: !!n, mount: function () {
                        i(), o(), e && (r(), t.on("refresh", (function () {
                            setTimeout((function () {
                                r(), n.emit("navigation:updated", t)
                            }))
                        })))
                    }, mounted: function () {
                        e && n.emit("navigation:mounted", t)
                    }
                }
            },
            A11y: kt
        };
    var It = function (t) {
        var n, e;

        function i(n, e) {
            return t.call(this, n, e, zt) || this
        }

        return e = t, (n = i).prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e, i
    }(U);
    window.Splide = It
}();

(() => {
    "use strict";
    var e = {};

    function t(e, t) {
        Object.keys(e).some((function (n, i) {
            return t(e[n], n, i)
        }))
    }

    e.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    var n = function () {
        function e(e, t) {
            this.Splide = e, this.Components = t, this.players = []
        }

        var n = e.prototype;
        return n.createPlayers = function (e, n) {
            var i = this;
            this.Components.Elements.getSlides(!0).forEach((function (o) {
                i.Components.Grid && t(o.slide.querySelectorAll("." + i.Components.Grid.colClass), (function (t) {
                    i.createPlayer(t, e, n)
                })), i.createPlayer(o.slide, e, n)
            }))
        }, n.createPlayer = function (e, t, n) {
            e.getAttribute(n) && this.players.push(new t(this.Splide, this.Components, e))
        }, n.destroy = function () {
            this.players.forEach((function (e) {
                e.destroy()
            }))
        }, e
    }();
    const i = function (e, t) {
        function n(e) {
            return document.createElement(e)
        }

        function i(e) {
            var t = e.parentElement;
            t && t.removeChild(e)
        }

        return {
            init: function () {
                this.initElements(), this.toggleWrapper(!1), this.togglePlayButton(!1)
            }, initElements: function () {
                var i = function (t) {
                    return n = t, i = e.classes.container.split(" ")[0] || "", Object.keys(n.children).map((function (e) {
                        return n.children[e]
                    })).filter((function (e) {
                        return e.classList.contains(i)
                    }))[0] || null;
                    var n, i
                }(t);
                this.parent = i || t, this.className = e.classes[i ? "container" : "slide"].split(" ")[0] + "--has-video", this.parent.classList.add(this.className), this.wrapper = n("div"), this.iframe = n("div"), this.playButton = n("button"), this.wrapper.classList.add("splide__video"), this.playButton.classList.add("splide__video__play"), this.wrapper.appendChild(this.iframe), this.parent.appendChild(this.wrapper), this.parent.appendChild(this.playButton)
            }, destroy: function () {
                this.parent.classList.remove(this.className), i(this.wrapper), i(this.playButton)
            }, togglePlayButton: function (e) {
                this.playButton.style.display = e ? "flex" : "none"
            }, toggleWrapper: function (e) {
                this.wrapper.style.display = e ? "block" : "none"
            }, hide: function () {
                this.togglePlayButton(!1), this.toggleWrapper(!0)
            }, show: function () {
                this.togglePlayButton(!0), this.toggleWrapper(!1)
            }
        }
    }, o = function (e) {
        var t = e;
        return {
            set: function (e) {
                t = e
            }, is: function () {
                for (var e = 0; e < arguments.length; e++) if ((e < 0 || arguments.length <= e ? void 0 : arguments[e]) === t) return !0;
                return !1
            }
        }
    };
    var r = function () {
        function e(e, t, n) {
            this.Splide = e, this.Components = t, this.slide = n, this.player = null, this.elements = null, this.state = new o(1), this.videoId = this.findVideoId(), this.videoId && (this.init(), this.bind(), this.handleClick())
        }

        var t = e.prototype;
        return t.init = function () {
            this.elements = new i(this.Splide, this.slide), this.elements.init(), this.toggleRootClass(!0), this.elements.togglePlayButton(!this.Splide.options.video.disableOverlayUI), this.isAutoplay() && this.isActive() && this.play()
        }, t.setup = function () {
            var e = this;
            this.state.set(2), this.player = this.createPlayer((function () {
                var t = e.state.is(3);
                e.state.set(4), t && e.play()
            }))
        }, t.bind = function () {
            var e = this;
            this.Splide.on("active", (function (t) {
                e.isAutoplay() && (t.slide === e.slide ? e.play() : e.pause())
            })).on("move", (function () {
                e.pause()
            })).on("video:click", (function (t) {
                t.slide !== e.slide && e.pause()
            }))
        }, t.handleClick = function () {
            var e = this;
            this.slide.addEventListener("mousedown", this.onMouseDown.bind(this)), this.slide.addEventListener("touchstart", this.onMouseDown.bind(this)), this.slide.addEventListener("mouseup", this.onMouseUp.bind(this)), this.slide.addEventListener("touchend", this.onMouseUp.bind(this)), this.Splide.on("drag", (function () {
                e.shouldHandleClick = !1
            }))
        }, t.createPlayer = function (e) {
            return void 0 === e && (e = null), null
        }, t.play = function () {
            var e = this;
            this.state.is(1) && this.setup(), this.state.is(7, 3) || (setTimeout((function () {
                e.elements.hide()
            })), this.state.is(2) ? this.state.set(3) : (this.state.is(6) || this.playVideo(), this.state.set(5)))
        }, t.pause = function () {
            this.Splide.options.video.disableOverlayUI || this.elements.show(), this.state.is(3) ? this.state.set(2) : this.state.is(5) ? this.state.set(6) : this.state.is(7) && (this.state.set(4), this.pauseVideo())
        }, t.playVideo = function () {
            this.player.play()
        }, t.pauseVideo = function () {
            this.player.pause()
        }, t.isActive = function () {
            return this.slide.classList.contains("is-active")
        }, t.isAutoplay = function () {
            return this.Splide.options.video.autoplay
        }, t.findVideoId = function () {
            return ""
        }, t.toggleRootClass = function (e) {
            this.Splide.root.classList[e ? "add" : "remove"](this.Splide.classes.root.split(" ")[0] + "--has-video")
        }, t.onMouseDown = function () {
            this.shouldHandleClick = !0
        }, t.onMouseUp = function () {
            this.shouldHandleClick && (this.Splide.emit("video:click", this), this.play())
        }, t.onPlay = function () {
            this.state.is(6) ? (this.state.set(7), this.pause()) : (this.Splide.emit("video:play", this), this.state.set(7))
        }, t.onPause = function () {
            this.Splide.emit("video:pause", this), this.state.set(4)
        }, t.onEnded = function () {
            this.Splide.emit("video:ended", this), this.state.set(4)
        }, t.destroy = function () {
            this.player && (this.player.destroy(), this.player = null), this.toggleRootClass(!1), this.elements.destroy(), this.slide.removeEventListener("mousedown", this.onMouseDown.bind(this)), this.slide.removeEventListener("touchstart", this.onMouseDown.bind(this)), this.slide.removeEventListener("mouseup", this.onMouseUp.bind(this)), this.slide.removeEventListener("touchend", this.onMouseUp.bind(this))
        }, e
    }();
    var a = ["autoplay", "autoPictureInPicture", "controls", "controlslist", "crossorigin", "currentTime", "disablePictureInPicture", "disableRemotePlayback", "height", "intrinsicsize", "loop", "muted", "playsinline", "poster", "preload", "width"],
        s = function (e) {
            var n, i;

            function o() {
                return e.apply(this, arguments) || this
            }

            i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var r = o.prototype;
            return r.createPlayer = function (e) {
                void 0 === e && (e = null);
                var n = this.Splide.options.video, i = n.playerOptions.htmlVideo, o = void 0 === i ? {} : i,
                    r = document.createElement("video");
                return r.src = this.videoId, this.elements.iframe.appendChild(r), r.controls = !n.hideControls, r.loop = n.loop, r.volume = Math.max(Math.min(n.volume, 1), 0), r.muted = n.mute, t(o, (function (e, t) {
                    a.indexOf(t) > -1 && (r[t] = e)
                })), r.addEventListener("play", this.onPlay.bind(this)), r.addEventListener("pause", this.onPause.bind(this)), r.addEventListener("ended", this.onEnded.bind(this)), e && r.addEventListener("loadeddata", e), r
            }, r.findVideoId = function () {
                return this.slide.getAttribute("data-splide-html-video")
            }, r.destroy = function () {
                this.player && (this.player.pause(), this.player.removeAttribute("src"), this.player.load(), this.elements.iframe.removeChild(this.player), this.player = null), this.elements.destroy()
            }, o
        }(r);
    var u = function (e) {
        var t, n;

        function i(t, n) {
            var i;
            return (i = e.call(this, t, n) || this).createPlayers(s, "data-splide-html-video"), i
        }

        return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i
    }(n);

    function l() {
        return (l = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    var c = function (e) {
        var t, n;

        function i() {
            return e.apply(this, arguments) || this
        }

        n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        var o = i.prototype;
        return o.createPlayer = function (e) {
            var t = this;
            void 0 === e && (e = null);
            var n = this.Splide.options.video, i = n.playerOptions.youtube, o = void 0 === i ? {} : i;
            return new YT.Player(this.elements.iframe, {
                videoId: this.videoId,
                playerVars: l({
                    controls: n.hideControls ? 0 : 1,
                    iv_load_policy: 3,
                    loop: n.loop,
                    playlist: n.loop ? this.videoId : "",
                    rel: 0,
                    autoplay: !1
                }, o),
                events: {
                    onReady: function (n) {
                        t.onPlayerReady(n), e && e()
                    }, onStateChange: this.onPlayerStateChange.bind(this)
                }
            })
        }, o.onPlayerReady = function (e) {
            var t = e.target, n = this.Splide.options.video;
            n.mute && t.mute(), t.setVolume(Math.max(Math.min(100 * n.volume, 100), 0))
        }, o.onPlayerStateChange = function (e) {
            var t = YT.PlayerState, n = t.PLAYING, i = t.PAUSED, o = t.ENDED;
            switch (!0) {
                case e.data === n:
                    this.onPlay();
                    break;
                case e.data === i:
                    this.onPause();
                    break;
                case e.data === o:
                    this.onEnded()
            }
        }, o.playVideo = function () {
            this.player.playVideo()
        }, o.pauseVideo = function () {
            this.player.pauseVideo()
        }, o.findVideoId = function () {
            var e = this.slide.getAttribute("data-splide-youtube").match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
            return e && 11 === e[7].length ? e[7] : ""
        }, i
    }(r);
    var d = "https://www.youtube.com/player_api", h = function (e) {
        var t, n;

        function i(t, n) {
            var i;
            return (i = e.call(this, t, n) || this).oldCallback = void 0, i.bindAPICallback(), i.loadAPI(), i
        }

        n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        var o = i.prototype;
        return o.loadAPI = function () {
            var e = window.YT;
            if (this.shouldLoadAPI()) {
                var t = document.createElement("script"), n = document.getElementsByTagName("script")[0];
                t.src = d, n.parentNode.insertBefore(t, n)
            } else e && e.loaded && this.onReady()
        }, o.shouldLoadAPI = function () {
            for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) if (e[t].getAttribute("src") === d) return !1;
            return !0
        }, o.bindAPICallback = function () {
            void 0 !== window.onYouTubeIframeAPIReady && (this.oldCallback = window.onYouTubeIframeAPIReady), window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this)
        }, o.onYouTubeIframeAPIReady = function () {
            this.oldCallback && this.oldCallback(), this.onReady()
        }, o.onReady = function () {
            this.createPlayers(c, "data-splide-youtube")
        }, i
    }(n);

    /*! @vimeo/player v2.14.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
    function f(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    var v = void 0 !== e.g && "[object global]" === {}.toString.call(e.g);

    function y(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
    }

    function m(e) {
        return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView)
    }

    function g(e) {
        return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
    }

    function w(e) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
    }

    function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.id, n = e.url, i = t || n;
        if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (g(i)) return "https://vimeo.com/".concat(i);
        if (w(i)) return i.replace("http:", "https:");
        if (t) throw new TypeError("“".concat(t, "” is not a valid video id."));
        throw new TypeError("“".concat(i, "” is not a vimeo.com url."))
    }

    var E = void 0 !== Array.prototype.indexOf, k = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(v || E && k)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e.g ? e.g : "undefined" != typeof self ? self : {};
    /*!
     * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
     * https://github.com/polygonplanet/weakmap-polyfill
     * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
     * @license MIT
     */
    !function (e) {
        if (!e.WeakMap) {
            var t = Object.prototype.hasOwnProperty, n = function (e, t, n) {
                Object.defineProperty ? Object.defineProperty(e, t, {
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n
            };
            e.WeakMap = function () {
                function e() {
                    if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                    if (n(this, "_id", r("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                }

                function o(e, n) {
                    if (!i(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e)
                }

                function r(e) {
                    return e + "_" + a() + "." + a()
                }

                function a() {
                    return Math.random().toString().substring(2)
                }

                return n(e.prototype, "delete", (function (e) {
                    if (o(this, "delete"), !i(e)) return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e) && (delete e[this._id], !0)
                })), n(e.prototype, "get", (function (e) {
                    if (o(this, "get"), i(e)) {
                        var t = e[this._id];
                        return t && t[0] === e ? t[1] : void 0
                    }
                })), n(e.prototype, "has", (function (e) {
                    if (o(this, "has"), !i(e)) return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e)
                })), n(e.prototype, "set", (function (e, t) {
                    if (o(this, "set"), !i(e)) throw new TypeError("Invalid value used as weak map key");
                    var r = e[this._id];
                    return r && r[0] === e ? (r[1] = t, this) : (n(e, this._id, [e, t]), this)
                })), n(e, "_polyfill", !0), e
            }()
        }

        function i(e) {
            return Object(e) === e
        }
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : P);
    var _, T = (function (e) {
        /*! Native Promise Only
            v0.8.1 (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
        var t, n, i;
        i = function () {
            var e, t, n, i = Object.prototype.toString, o = "undefined" != typeof setImmediate ? function (e) {
                return setImmediate(e)
            } : setTimeout;
            try {
                Object.defineProperty({}, "x", {}), e = function (e, t, n, i) {
                    return Object.defineProperty(e, t, {value: n, writable: !0, configurable: !1 !== i})
                }
            } catch (t) {
                e = function (e, t, n) {
                    return e[t] = n, e
                }
            }

            function r(e, i) {
                n.add(e, i), t || (t = o(n.drain))
            }

            function a(e) {
                var t, n = typeof e;
                return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
            }

            function s() {
                for (var e = 0; e < this.chain.length; e++) u(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                this.chain.length = 0
            }

            function u(e, t, n) {
                var i, o;
                try {
                    !1 === t ? n.reject(e.msg) : (i = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = a(i)) ? o.call(i, n.resolve, n.reject) : n.resolve(i)
                } catch (e) {
                    n.reject(e)
                }
            }

            function l(e) {
                var t, n = this;
                if (!n.triggered) {
                    n.triggered = !0, n.def && (n = n.def);
                    try {
                        (t = a(e)) ? r((function () {
                            var i = new h(n);
                            try {
                                t.call(e, (function () {
                                    l.apply(i, arguments)
                                }), (function () {
                                    c.apply(i, arguments)
                                }))
                            } catch (e) {
                                c.call(i, e)
                            }
                        })) : (n.msg = e, n.state = 1, n.chain.length > 0 && r(s, n))
                    } catch (e) {
                        c.call(new h(n), e)
                    }
                }
            }

            function c(e) {
                var t = this;
                t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && r(s, t))
            }

            function d(e, t, n, i) {
                for (var o = 0; o < t.length; o++) !function (o) {
                    e.resolve(t[o]).then((function (e) {
                        n(o, e)
                    }), i)
                }(o)
            }

            function h(e) {
                this.def = e, this.triggered = !1
            }

            function f(e) {
                this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
            }

            function p(e) {
                if ("function" != typeof e) throw TypeError("Not a function");
                if (0 !== this.__NPO__) throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var t = new f(this);
                this.then = function (e, n) {
                    var i = {success: "function" != typeof e || e, failure: "function" == typeof n && n};
                    return i.promise = new this.constructor((function (e, t) {
                        if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                        i.resolve = e, i.reject = t
                    })), t.chain.push(i), 0 !== t.state && r(s, t), i.promise
                }, this.catch = function (e) {
                    return this.then(void 0, e)
                };
                try {
                    e.call(void 0, (function (e) {
                        l.call(t, e)
                    }), (function (e) {
                        c.call(t, e)
                    }))
                } catch (e) {
                    c.call(t, e)
                }
            }

            n = function () {
                var e, n, i;

                function o(e, t) {
                    this.fn = e, this.self = t, this.next = void 0
                }

                return {
                    add: function (t, r) {
                        i = new o(t, r), n ? n.next = i : e = i, n = i, i = void 0
                    }, drain: function () {
                        var i = e;
                        for (e = n = t = void 0; i;) i.fn.call(i.self), i = i.next
                    }
                }
            }();
            var v = e({}, "constructor", p, !1);
            return p.prototype = v, e(v, "__NPO__", 0, !1), e(p, "resolve", (function (e) {
                return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function (t, n) {
                    if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                    t(e)
                }))
            })), e(p, "reject", (function (e) {
                return new this((function (t, n) {
                    if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                    n(e)
                }))
            })), e(p, "all", (function (e) {
                var t = this;
                return "[object Array]" != i.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function (n, i) {
                    if ("function" != typeof n || "function" != typeof i) throw TypeError("Not a function");
                    var o = e.length, r = Array(o), a = 0;
                    d(t, e, (function (e, t) {
                        r[e] = t, ++a === o && n(r)
                    }), i)
                }))
            })), e(p, "race", (function (e) {
                var t = this;
                return "[object Array]" != i.call(e) ? t.reject(TypeError("Not an array")) : new t((function (n, i) {
                    if ("function" != typeof n || "function" != typeof i) throw TypeError("Not a function");
                    d(t, e, (function (e, t) {
                        n(t)
                    }), i)
                }))
            })), p
        }, (n = P)[t = "Promise"] = n[t] || i(), e.exports && (e.exports = n[t])
    }(_ = {exports: {}}, _.exports), _.exports), C = new WeakMap;

    function M(e, t, n) {
        var i = C.get(e.element) || {};
        t in i || (i[t] = []), i[t].push(n), C.set(e.element, i)
    }

    function A(e, t) {
        return (C.get(e.element) || {})[t] || []
    }

    function S(e, t, n) {
        var i = C.get(e.element) || {};
        if (!i[t]) return !0;
        if (!n) return i[t] = [], C.set(e.element, i), !0;
        var o = i[t].indexOf(n);
        return -1 !== o && i[t].splice(o, 1), C.set(e.element, i), i[t] && 0 === i[t].length
    }

    function j(e, t) {
        var n = C.get(e);
        C.set(t, n), C.delete(e)
    }

    var I = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return I.reduce((function (t, n) {
            var i = e.getAttribute("data-vimeo-".concat(n));
            return (i || "" === i) && (t[n] = "" === i ? 1 : i), t
        }), t)
    }

    function F(e, t) {
        var n = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
        var i = document.createElement("div");
        return i.innerHTML = n, t.appendChild(i.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
    }

    function x(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        return new Promise((function (i, o) {
            if (!w(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
            var r = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
            for (var a in t) t.hasOwnProperty(a) && (r += "&".concat(a, "=").concat(encodeURIComponent(t[a])));
            var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            s.open("GET", r, !0), s.onload = function () {
                if (404 !== s.status) if (403 !== s.status) try {
                    var t = JSON.parse(s.responseText);
                    if (403 === t.domain_status_code) return F(t, n), void o(new Error("“".concat(e, "” is not embeddable.")));
                    i(t)
                } catch (e) {
                    o(e)
                } else o(new Error("“".concat(e, "” is not embeddable."))); else o(new Error("“".concat(e, "” was not found.")))
            }, s.onerror = function () {
                var e = s.status ? " (".concat(s.status, ")") : "";
                o(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
            }, s.send()
        }))
    }

    function N(e) {
        if ("string" == typeof e) try {
            e = JSON.parse(e)
        } catch (e) {
            return console.warn(e), {}
        }
        return e
    }

    function V(e, t, n) {
        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
            var i = {method: t};
            void 0 !== n && (i.value = n);
            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            o >= 8 && o < 10 && (i = JSON.stringify(i)), e.element.contentWindow.postMessage(i, e.origin)
        }
    }

    function L(e, t) {
        var n, i = [];
        if ((t = N(t)).event) {
            if ("error" === t.event) A(e, t.data.method).forEach((function (n) {
                var i = new Error(t.data.message);
                i.name = t.data.name, n.reject(i), S(e, t.data.method, n)
            }));
            i = A(e, "event:".concat(t.event)), n = t.data
        } else if (t.method) {
            var o = function (e, t) {
                var n = A(e, t);
                if (n.length < 1) return !1;
                var i = n.shift();
                return S(e, t, i), i
            }(e, t.method);
            o && (i.push(o), n = t.value)
        }
        i.forEach((function (t) {
            try {
                if ("function" == typeof t) return void t.call(e, n);
                t.resolve(n)
            } catch (e) {
            }
        }))
    }

    var R = new WeakMap, q = new WeakMap, B = {}, W = function () {
        function e(t) {
            var n = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (f(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "undefined" != typeof document && "string" == typeof t && (t = document.getElementById(t)), !m(t)) throw new TypeError("You must pass either a valid element or a valid id.");
            if ("IFRAME" !== t.nodeName) {
                var o = t.querySelector("iframe");
                o && (t = o)
            }
            if ("IFRAME" === t.nodeName && !w(t.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
            if (R.has(t)) return R.get(t);
            this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*";
            var r = new T((function (e, o) {
                if (n._onMessage = function (t) {
                    if (w(t.origin) && n.element.contentWindow === t.source) {
                        "*" === n.origin && (n.origin = t.origin);
                        var i = N(t.data);
                        if (i && "error" === i.event && i.data && "ready" === i.data.method) {
                            var r = new Error(i.data.message);
                            return r.name = i.data.name, void o(r)
                        }
                        var a = i && "ready" === i.event, s = i && "ping" === i.method;
                        if (a || s) return n.element.setAttribute("data-ready", "true"), void e();
                        L(n, i)
                    }
                }, n._window.addEventListener("message", n._onMessage), "IFRAME" !== n.element.nodeName) {
                    var r = O(t, i);
                    x(b(r), r, t).then((function (e) {
                        var i = F(e, t);
                        return n.element = i, n._originalElement = t, j(t, i), R.set(n.element, n), e
                    })).catch(o)
                }
            }));
            if (q.set(this, r), R.set(this.element, this), "IFRAME" === this.element.nodeName && V(this, "ping"), B.isEnabled) {
                var a = function () {
                    return B.exit()
                };
                B.on("fullscreenchange", (function () {
                    B.isFullscreen ? M(n, "event:exitFullscreen", a) : S(n, "event:exitFullscreen", a), n.ready().then((function () {
                        V(n, "fullscreenchange", B.isFullscreen)
                    }))
                }))
            }
            return this
        }

        var t, n, i;
        return t = e, (n = [{
            key: "callMethod", value: function (e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new T((function (i, o) {
                    return t.ready().then((function () {
                        M(t, e, {resolve: i, reject: o}), V(t, e, n)
                    })).catch(o)
                }))
            }
        }, {
            key: "get", value: function (e) {
                var t = this;
                return new T((function (n, i) {
                    return e = y(e, "get"), t.ready().then((function () {
                        M(t, e, {resolve: n, reject: i}), V(t, e)
                    })).catch(i)
                }))
            }
        }, {
            key: "set", value: function (e, t) {
                var n = this;
                return new T((function (i, o) {
                    if (e = y(e, "set"), null == t) throw new TypeError("There must be a value to set.");
                    return n.ready().then((function () {
                        M(n, e, {resolve: i, reject: o}), V(n, e, t)
                    })).catch(o)
                }))
            }
        }, {
            key: "on", value: function (e, t) {
                if (!e) throw new TypeError("You must pass an event name.");
                if (!t) throw new TypeError("You must pass a callback function.");
                if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                0 === A(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function () {
                })), M(this, "event:".concat(e), t)
            }
        }, {
            key: "off", value: function (e, t) {
                if (!e) throw new TypeError("You must pass an event name.");
                if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                S(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function (e) {
                }))
            }
        }, {
            key: "loadVideo", value: function (e) {
                return this.callMethod("loadVideo", e)
            }
        }, {
            key: "ready", value: function () {
                var e = q.get(this) || new T((function (e, t) {
                    t(new Error("Unknown player. Probably unloaded."))
                }));
                return T.resolve(e)
            }
        }, {
            key: "addCuePoint", value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.callMethod("addCuePoint", {time: e, data: t})
            }
        }, {
            key: "removeCuePoint", value: function (e) {
                return this.callMethod("removeCuePoint", e)
            }
        }, {
            key: "enableTextTrack", value: function (e, t) {
                if (!e) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {language: e, kind: t})
            }
        }, {
            key: "disableTextTrack", value: function () {
                return this.callMethod("disableTextTrack")
            }
        }, {
            key: "pause", value: function () {
                return this.callMethod("pause")
            }
        }, {
            key: "play", value: function () {
                return this.callMethod("play")
            }
        }, {
            key: "requestFullscreen", value: function () {
                return B.isEnabled ? B.request(this.element) : this.callMethod("requestFullscreen")
            }
        }, {
            key: "exitFullscreen", value: function () {
                return B.isEnabled ? B.exit() : this.callMethod("exitFullscreen")
            }
        }, {
            key: "getFullscreen", value: function () {
                return B.isEnabled ? T.resolve(B.isFullscreen) : this.get("fullscreen")
            }
        }, {
            key: "unload", value: function () {
                return this.callMethod("unload")
            }
        }, {
            key: "destroy", value: function () {
                var e = this;
                return new T((function (t) {
                    if (q.delete(e), R.delete(e.element), e._originalElement && (R.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), e.element && "DIV" === e.element.nodeName && e.element.parentNode) {
                        e.element.removeAttribute("data-vimeo-initialized");
                        var n = e.element.querySelector("iframe");
                        n && n.parentNode && n.parentNode.removeChild(n)
                    }
                    e._window.removeEventListener("message", e._onMessage), t()
                }))
            }
        }, {
            key: "getAutopause", value: function () {
                return this.get("autopause")
            }
        }, {
            key: "setAutopause", value: function (e) {
                return this.set("autopause", e)
            }
        }, {
            key: "getBuffered", value: function () {
                return this.get("buffered")
            }
        }, {
            key: "getCameraProps", value: function () {
                return this.get("cameraProps")
            }
        }, {
            key: "setCameraProps", value: function (e) {
                return this.set("cameraProps", e)
            }
        }, {
            key: "getChapters", value: function () {
                return this.get("chapters")
            }
        }, {
            key: "getCurrentChapter", value: function () {
                return this.get("currentChapter")
            }
        }, {
            key: "getColor", value: function () {
                return this.get("color")
            }
        }, {
            key: "setColor", value: function (e) {
                return this.set("color", e)
            }
        }, {
            key: "getCuePoints", value: function () {
                return this.get("cuePoints")
            }
        }, {
            key: "getCurrentTime", value: function () {
                return this.get("currentTime")
            }
        }, {
            key: "setCurrentTime", value: function (e) {
                return this.set("currentTime", e)
            }
        }, {
            key: "getDuration", value: function () {
                return this.get("duration")
            }
        }, {
            key: "getEnded", value: function () {
                return this.get("ended")
            }
        }, {
            key: "getLoop", value: function () {
                return this.get("loop")
            }
        }, {
            key: "setLoop", value: function (e) {
                return this.set("loop", e)
            }
        }, {
            key: "setMuted", value: function (e) {
                return this.set("muted", e)
            }
        }, {
            key: "getMuted", value: function () {
                return this.get("muted")
            }
        }, {
            key: "getPaused", value: function () {
                return this.get("paused")
            }
        }, {
            key: "getPlaybackRate", value: function () {
                return this.get("playbackRate")
            }
        }, {
            key: "setPlaybackRate", value: function (e) {
                return this.set("playbackRate", e)
            }
        }, {
            key: "getPlayed", value: function () {
                return this.get("played")
            }
        }, {
            key: "getQualities", value: function () {
                return this.get("qualities")
            }
        }, {
            key: "getQuality", value: function () {
                return this.get("quality")
            }
        }, {
            key: "setQuality", value: function (e) {
                return this.set("quality", e)
            }
        }, {
            key: "getSeekable", value: function () {
                return this.get("seekable")
            }
        }, {
            key: "getSeeking", value: function () {
                return this.get("seeking")
            }
        }, {
            key: "getTextTracks", value: function () {
                return this.get("textTracks")
            }
        }, {
            key: "getVideoEmbedCode", value: function () {
                return this.get("videoEmbedCode")
            }
        }, {
            key: "getVideoId", value: function () {
                return this.get("videoId")
            }
        }, {
            key: "getVideoTitle", value: function () {
                return this.get("videoTitle")
            }
        }, {
            key: "getVideoWidth", value: function () {
                return this.get("videoWidth")
            }
        }, {
            key: "getVideoHeight", value: function () {
                return this.get("videoHeight")
            }
        }, {
            key: "getVideoUrl", value: function () {
                return this.get("videoUrl")
            }
        }, {
            key: "getVolume", value: function () {
                return this.get("volume")
            }
        }, {
            key: "setVolume", value: function (e) {
                return this.set("volume", e)
            }
        }]) && p(t.prototype, n), i && p(t, i), e
    }();
    v || (B = function () {
        var e = function () {
            for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, i = t.length, o = {}; n < i; n++) if ((e = t[n]) && e[1] in document) {
                for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                return o
            }
            return !1
        }(), t = {fullscreenchange: e.fullscreenchange, fullscreenerror: e.fullscreenerror}, n = {
            request: function (t) {
                return new Promise((function (i, o) {
                    var r = function e() {
                        n.off("fullscreenchange", e), i()
                    };
                    n.on("fullscreenchange", r);
                    var a = (t = t || document.documentElement)[e.requestFullscreen]();
                    a instanceof Promise && a.then(r).catch(o)
                }))
            }, exit: function () {
                return new Promise((function (t, i) {
                    if (n.isFullscreen) {
                        var o = function e() {
                            n.off("fullscreenchange", e), t()
                        };
                        n.on("fullscreenchange", o);
                        var r = document[e.exitFullscreen]();
                        r instanceof Promise && r.then(o).catch(i)
                    } else t()
                }))
            }, on: function (e, n) {
                var i = t[e];
                i && document.addEventListener(i, n)
            }, off: function (e, n) {
                var i = t[e];
                i && document.removeEventListener(i, n)
            }
        };
        return Object.defineProperties(n, {
            isFullscreen: {
                get: function () {
                    return Boolean(document[e.fullscreenElement])
                }
            }, element: {
                enumerable: !0, get: function () {
                    return document[e.fullscreenElement]
                }
            }, isEnabled: {
                enumerable: !0, get: function () {
                    return Boolean(document[e.fullscreenEnabled])
                }
            }
        }), n
    }(), function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), n = function (e) {
                "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
            };
        t.forEach((function (e) {
            try {
                if (null !== e.getAttribute("data-vimeo-defer")) return;
                var t = O(e);
                x(b(t), t, e).then((function (t) {
                    return F(t, e)
                })).catch(n)
            } catch (e) {
                n(e)
            }
        }))
    }(), function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
        if (!window.VimeoPlayerResizeEmbeds_) {
            window.VimeoPlayerResizeEmbeds_ = !0;
            var t = function (t) {
                if (w(t.origin) && t.data && "spacechange" === t.data.event) for (var n = e.querySelectorAll("iframe"), i = 0; i < n.length; i++) if (n[i].contentWindow === t.source) {
                    n[i].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                    break
                }
            };
            window.addEventListener("message", t)
        }
    }());
    const D = W;

    function U() {
        return (U = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    var Y = function (e) {
        var t, n;

        function i() {
            return e.apply(this, arguments) || this
        }

        n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        var o = i.prototype;
        return o.createPlayer = function (e) {
            void 0 === e && (e = null);
            var t = this.Splide.options.video, n = t.playerOptions.vimeo, i = void 0 === n ? {} : n,
                o = new D(this.elements.iframe, U({id: this.videoId, controls: !t.hideControls, loop: t.loop}, i));
            return o.on("play", this.onPlay.bind(this)), o.on("pause", this.onPause.bind(this)), o.on("ended", this.onEnded.bind(this)), o.setVolume(Math.max(Math.min(t.volume, 1), 0)), o.setMuted(i.muted || t.mute), e && o.ready().then(e), o
        }, o.findVideoId = function () {
            var e = this.slide.getAttribute("data-splide-vimeo").match(/vimeo.com\/(\d+)/);
            return e && e[1] ? e[1] : ""
        }, o.onPlay = function () {
            this.state.is(6) && !this.isActive() ? (this.player.destroy(), this.elements.show(), this.state.set(1)) : (this.Splide.emit("video:play", this), this.state.set(7))
        }, i
    }(r);
    var z = {
        HtmlVideo: u, YouTube: h, Vimeo: function (e) {
            var t, n;

            function i(t, n) {
                var i;
                return (i = e.call(this, t, n) || this).createPlayers(Y, "data-splide-vimeo"), i
            }

            return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i
        }(n)
    }, H = {autoplay: !1, disableOverlayUI: !1, hideControls: !1, loop: !1, mute: !1, volume: .2, playerOptions: {}};

    function Q() {
        return (Q = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }

    var G = "is-playing";
    window.splide = window.splide || {}, window.splide.Extensions = window.splide.Extensions || {}, window.splide.Extensions.Video = function (e, n) {
        var i, o = [];
        return {
            mount: function () {
                var r;
                "object" != typeof e.options.video && (e.options.video = {}), e.options.video = Q({}, H, e.options.video), t(z, (function (t) {
                    o.push(new t(e, n))
                })), r = e.root.classList, e.on("video:play", (function (e) {
                    i = e.slide, r.add(G)
                })).on("video:pause video:ended", (function (e) {
                    e.slide === i && (i = null, r.remove(G))
                })).on("destroy", (function () {
                    r.remove(G)
                }))
            }, destroy: function () {
                o.forEach((function (e) {
                    e.destroy()
                }))
            }
        }
    }
})();

function fadeIn(el) {
    var opacity = 0.01;
    document.querySelector(el).classList.add("visible");
    var timer = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        document.querySelector(el).style.opacity = opacity;
        opacity += opacity * 0.1;
    }, 10);
}

function fadeOut(el) {
    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            document.querySelector(el).classList.remove("visible");
        }
        document.querySelector(el).style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 10);
}

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#price-slider', {
        perPage: 3,
        gap: 0,
        pagination: false,
        autoplay: true,
        breakpoints: {
            992: {
                perPage: 2,
                arrows: false,
            },
            768: {
                autoplay: false,
                perPage: 1,
                arrows: false,
                pagination: true,
            }
        }
    }).mount();

    let current_instructor = 0
    let instructor_entities = document.querySelectorAll(".instructor-entity");
    let thumbs = document.querySelectorAll(".thumb")
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", function (e) {
            thumbs[current_instructor].classList.remove("thumb-active")
            instructor_entities[current_instructor].classList.remove("instructor-active")
            thumbs[i].classList.add("thumb-active")
            instructor_entities[i].classList.add("instructor-active")
            current_instructor = i
        })
    }

    new Splide('#lessons-slider', {
        cover: true,
        heightRatio: 0.5,
        height: 400,
        gap: 10,
        pagination: false,
        breakpoints: {
            992: {
                pagination: true
            },
            767: {
                height: 300,
                pagination: true
            },
            480: {
                height: 250,
                pagination: true
            }
        },
        classes: {
            prev: "splide__arrow--prev-1",
            next: "splide__arrow--next-1"
        }
    }).mount(window.splide.Extensions);

    new Splide('#tech-slider', {
        perPage: 4,
        autoplay: true,
        gap: 20,
        pagination: false,
        breakpoints: {
            992: {
                perPage: 3,
            },
            768: {
                perPage: 2,
                arrows: false,
                pagination: true,
                autoplay: false,
            },
            480: {
                perPage: 1,
                arrows: false,
                pagination: true
            }
        }
    }).mount();

    new Splide('#review-slider', {
        perPage: 4,
        gap: 20,
        pagination: false,
        autoplay: true,
        breakpoints: {
            992: {
                perPage: 2,
            },
            768: {
                autoplay: false,
                perPage: 2,
                arrows: false,
                pagination: true,
            },
            576: {
                perPage: 1,
                pagination: true
            }
        }
    }).mount(window.splide.Extensions);

    // Instructor Modal
    let modal_activated = false
    let modal = document.querySelector(".instructor-modal")

    function openModal(instructor_id) {
        console.log(instructor_id)
        if (!modal_activated) {
            document.getElementById("instructor-name").innerText = instructors[instructor_id].name
            document.getElementById("instructor-desc").innerText = instructors[instructor_id].description
            document.getElementById("instructor-image").src = instructors[instructor_id].image
            fadeIn(".instructor-modal")
            modal_activated = true
            document.body.style.overflow = "hidden"
        }
    }

    function closeModal() {
        fadeOut(".instructor-modal")
        modal_activated = false
        document.body.style.overflow = "auto"
    }

    modal.addEventListener("click", function (e) {
        if (e.target === modal || e.target === document.querySelector(".close-inst-modal")) {
            closeModal()
        }

    })

    for (let i = 0; i < instructor_entities.length; i++) {
        instructor_entities[i].addEventListener("click", function (e) {
            openModal(instructor_entities[i].dataset.instructorId)
        })
    }

    // Form
    let form_activated = false
    let form = document.querySelector(".modal-form")

    function openForm() {
        if (!form_activated) {
            fadeIn(".modal-form")
            form_activated = true
            document.body.style.overflow = "hidden"
        }
    }

    function closeForm() {
        fadeOut(".modal-form")
        form_activated = false
        document.body.style.overflow = "auto"
    }

    let activators = document.querySelectorAll(".form-activate")
    for (let i = 0; i < activators.length; i++) {
        activators[i].addEventListener("click", function (e) {
            openForm()
        })
    }
    form.addEventListener("click", function (e) {
        if (e.target === form || e.target === document.querySelector(".close-form")) {
            closeForm()
        }
    })

    document.querySelector(".geo-btn").addEventListener("click", function (e) {
        e.preventDefault()
        window.open('https://yandex.ru/maps/20523/elektrostal/?from=api-maps&ll=38.516557%2C55.761604&mode=usermaps&origin=jsapi_2_1_78&um=constructor%3A0b22c640aafb792ed0bf16a7a22ecfe69157072454cdbcee857036feb4c0ff28&z=9');
    })

    let tech_modal_active = false
    document.querySelectorAll(".tech-img").forEach(function (el) {
        el.addEventListener("click", function (e) {
            if (!tech_modal_active) {
                document.getElementById("tech-scaled").src = el.dataset.img
                fadeIn(".tech-modal")
                tech_modal_active = true
            }
        })

    })

    document.querySelector(".tech-modal").addEventListener("click", function (e) {
        fadeOut(".tech-modal")
        tech_modal_active = false
    })

});

