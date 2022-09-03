this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
    "use strict";

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function n(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e
    }

    function o(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s, e
    }

    function r(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), a && l(e, a)
    }

    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a, e
        })(e, a)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function c(e, a, s) {
        return (c = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var n = new(Function.bind.apply(e, t));
            return s && l(n, s.prototype), n
        }).apply(null, arguments)
    }

    function u(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (u = function(e) {
            if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
            var s;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e)) return a.get(e);
                a.set(e, t)
            }

            function t() {
                return c(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(t, e)
        })(e)
    }

    function m(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? m(e) : a
    }

    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var n = i(this).constructor;
                s = Reflect.construct(t, arguments, n)
            } else s = t.apply(this, arguments);
            return p(this, s)
        }
    }

    function y(e, a) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s) return;
            var t, n, o = [],
                r = !0,
                i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (o.push(t.value), !a || o.length !== a); r = !0);
            } catch (e) {
                i = !0, n = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw n
                }
            }
            return o
        }(e, a) || b(e, a) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, a) {
        if (e) {
            if ("string" == typeof e) return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }

    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "_letter", ""), o(m(e), "_state", "empty"), o(m(e), "_animation", "idle"), o(m(e), "_last", !1), o(m(e), "_reveal", !1), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                        bubbles: !0,
                        composed: !0
                    }))), e._render()
                })), this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letter":
                        if (s === a) break;
                        var t = "null" === s ? "" : s;
                        this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                        break;
                    case "evaluation":
                        if (!s) break;
                        this._state = s;
                        break;
                    case "reveal":
                        this._animation = "flip-in", this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e._letters = "", e._evaluation = [], e._length, e
        }
        return n(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }), 300 * s)
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                        var s = document.createElement("game-tile"),
                            t = e._letters[a];
                        (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                            s.setAttribute("reveal", "")
                        }), 100 * a));
                        a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                    }, s = 0; s < this._length; s++) a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letters":
                        this._letters = s || "";
                        break;
                    case "length":
                        this._length = parseInt(s, 10);
                        break;
                    case "win":
                        if (null === s) {
                            this.$tiles.forEach((function(e) {
                                e.classList.remove("win")
                            }));
                            break
                        }
                        this.$tiles.forEach((function(e, a) {
                            e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                        }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "nyt-wordle-darkmode",
        S = "nyt-wordle-cbmode",
        C = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), o(m(e = a.call(this)), "isDarkTheme", !1), o(m(e), "isColorBlindTheme", !1), e.attachShadow({
                    mode: "open"
                });
                var n = JSON.parse(window.localStorage.getItem(j)),
                    r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                    i = JSON.parse(window.localStorage.getItem(S));
                return !0 === n || !1 === n ? e.setDarkTheme(n) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), window.themeManager = m(e), e
            }
            return n(t, [{
                key: "setDarkTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            n = s.checked;
                        switch (t) {
                            case "dark-theme":
                                return void e.setDarkTheme(n);
                            case "color-blind-theme":
                                return void e.setColorBlindTheme(n)
                        }
                    }))
                }
            }]), t
        }(u(HTMLElement));

    function E(e, a) {
        return e === a || e != e && a != a
    }

    function _(e, a) {
        for (var s = e.length; s--;)
            if (E(e[s][0], a)) return s;
        return -1
    }
    customElements.define("game-theme-manager", C);
    var q = Array.prototype.splice;

    function L(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    L.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, L.prototype.delete = function(e) {
        var a = this.__data__,
            s = _(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : q.call(a, s, 1), --this.size, !0)
    }, L.prototype.get = function(e) {
        var a = this.__data__,
            s = _(a, e);
        return s < 0 ? void 0 : a[s][1]
    }, L.prototype.has = function(e) {
        return _(this.__data__, e) > -1
    }, L.prototype.set = function(e, a) {
        var s = this.__data__,
            t = _(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
    };
    var T = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
        A = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
        I = T || A || Function("return this")(),
        M = I.Symbol,
        O = Object.prototype,
        R = O.hasOwnProperty,
        H = O.toString,
        N = M ? M.toStringTag : void 0;
    var P = Object.prototype.toString;
    var $ = M ? M.toStringTag : void 0;

    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : $ && $ in Object(e) ? function(e) {
            var a = R.call(e, N),
                s = e[N];
            try {
                e[N] = void 0;
                var t = !0
            } catch (e) {}
            var n = H.call(e);
            return t && (a ? e[N] = s : delete e[N]), n
        }(e) : function(e) {
            return P.call(e)
        }(e)
    }

    function B(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }

    function G(e) {
        if (!B(e)) return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var V, F = I["__core-js_shared__"],
        W = (V = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + V : "";
    var Y = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
        J = Function.prototype,
        X = Object.prototype,
        Z = J.toString,
        K = X.hasOwnProperty,
        Q = RegExp("^" + Z.call(K).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ee(e) {
        return !(!B(e) || (a = e, W && W in a)) && (G(e) ? Q : U).test(function(e) {
            if (null != e) {
                try {
                    return Y.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var a
    }

    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map"),
        te = ae(Object, "create");
    var ne = Object.prototype.hasOwnProperty;
    var oe = Object.prototype.hasOwnProperty;

    function re(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    function ie(e, s) {
        var t, n, o = e.__data__;
        return ("string" == (n = a(t = s)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? o["string" == typeof s ? "string" : "hash"] : o.map
    }

    function le(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {}, this.size = 0
    }, re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0, a
    }, re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return ne.call(a, e) ? a[e] : void 0
    }, re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : oe.call(a, e)
    }, re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
    }, le.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new re,
            map: new(se || L),
            string: new re
        }
    }, le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0, a
    }, le.prototype.get = function(e) {
        return ie(this, e).get(e)
    }, le.prototype.has = function(e) {
        return ie(this, e).has(e)
    }, le.prototype.set = function(e, a) {
        var s = ie(this, e),
            t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };

    function de(e) {
        var a = this.__data__ = new L(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new L, this.size = 0
    }, de.prototype.delete = function(e) {
        var a = this.__data__,
            s = a.delete(e);
        return this.size = a.size, s
    }, de.prototype.get = function(e) {
        return this.__data__.get(e)
    }, de.prototype.has = function(e) {
        return this.__data__.has(e)
    }, de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof L) {
            var t = s.__data__;
            if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ce = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }();

    function ue(e, a, s) {
        "__proto__" == a && ce ? ce(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }

    function me(e, a, s) {
        (void 0 !== s && !E(e[a], s) || void 0 === s && !(a in e)) && ue(e, a, s)
    }
    var pe, he = function(e, a, s) {
            for (var t = -1, n = Object(e), o = s(e), r = o.length; r--;) {
                var i = o[pe ? r : ++t];
                if (!1 === a(n[i], i, n)) break
            }
            return e
        },
        ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) {
        var s, t, n = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var we = Object.create,
        xe = function() {
            function e() {}
            return function(a) {
                if (!B(a)) return {};
                if (we) return we(a);
                e.prototype = a;
                var s = new e;
                return e.prototype = void 0, s
            }
        }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
            return ze(je(e))
        }),
        Ce = Object.prototype;

    function Ee(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || Ce)
    }

    function _e(e) {
        return null != e && "object" == a(e)
    }

    function qe(e) {
        return _e(e) && "[object Arguments]" == D(e)
    }
    var Le = Object.prototype,
        Te = Le.hasOwnProperty,
        Ae = Le.propertyIsEnumerable,
        Ie = qe(function() {
            return arguments
        }()) ? qe : function(e) {
            return _e(e) && Te.call(e, "callee") && !Ae.call(e, "callee")
        },
        Me = Array.isArray;

    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }

    function Re(e) {
        return null != e && Oe(e.length) && !G(e)
    }
    var He = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ne = He && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Pe = Ne && Ne.exports === He ? I.Buffer : void 0,
        $e = (Pe ? Pe.isBuffer : void 0) || function() {
            return !1
        },
        De = Function.prototype,
        Be = Object.prototype,
        Ge = De.toString,
        Ve = Be.hasOwnProperty,
        Fe = Ge.call(Object);
    var We = {};
    We["[object Float32Array]"] = We["[object Float64Array]"] = We["[object Int8Array]"] = We["[object Int16Array]"] = We["[object Int32Array]"] = We["[object Uint8Array]"] = We["[object Uint8ClampedArray]"] = We["[object Uint16Array]"] = We["[object Uint32Array]"] = !0, We["[object Arguments]"] = We["[object Array]"] = We["[object ArrayBuffer]"] = We["[object Boolean]"] = We["[object DataView]"] = We["[object Date]"] = We["[object Error]"] = We["[object Function]"] = We["[object Map]"] = We["[object Number]"] = We["[object Object]"] = We["[object RegExp]"] = We["[object Set]"] = We["[object String]"] = We["[object WeakMap]"] = !1;
    var Ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ue = Ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Je = Ue && Ue.exports === Ye && T.process,
        Xe = function() {
            try {
                var e = Ue && Ue.require && Ue.require("util").types;
                return e || Je && Je.binding && Je.binding("util")
            } catch (e) {}
        }(),
        Ze = Xe && Xe.isTypedArray,
        Ke = Ze ? function(e) {
            return function(a) {
                return e(a)
            }
        }(Ze) : function(e) {
            return _e(e) && Oe(e.length) && !!We[D(e)]
        };

    function Qe(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && E(t, s) && (void 0 !== s || a in e) || ue(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;

    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var na = Object.prototype.hasOwnProperty;

    function oa(e, a) {
        var s = Me(e),
            t = !s && Ie(e),
            n = !s && !t && $e(e),
            o = !s && !t && !n && Ke(e),
            r = s || t || n || o,
            i = r ? function(e, a) {
                for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
                return t
            }(e.length, String) : [],
            l = i.length;
        for (var d in e) !a && !na.call(e, d) || r && ("length" == d || n && ("offset" == d || "parent" == d) || o && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
        if (!B(e)) return function(e) {
            var a = [];
            if (null != e)
                for (var s in Object(e)) a.push(s);
            return a
        }(e);
        var a = Ee(e),
            s = [];
        for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }

    function la(e) {
        return Re(e) ? oa(e, !0) : ia(e)
    }

    function da(e) {
        return function(e, a, s, t) {
            var n = !s;
            s || (s = {});
            for (var o = -1, r = a.length; ++o < r;) {
                var i = a[o],
                    l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]), n ? ue(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }

    function ca(e, a, s, t, n, o, r) {
        var i = Qe(e, s),
            l = Qe(a, s),
            d = r.get(l);
        if (d) me(e, s, d);
        else {
            var c, u = o ? o(i, l, s + "", e, a, r) : void 0,
                m = void 0 === u;
            if (m) {
                var p = Me(l),
                    h = !p && $e(l),
                    y = !p && !h && Ke(l);
                u = l, p || h || y ? Me(i) ? u = i : _e(c = i) && Re(c) ? u = function(e, a) {
                    var s = -1,
                        t = e.length;
                    for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                    return a
                }(i) : h ? (m = !1, u = function(e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                        t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (m = !1, u = ve(l, !0)) : u = [] : function(e) {
                    if (!_e(e) || "[object Object]" != D(e)) return !1;
                    var a = Se(e);
                    if (null === a) return !0;
                    var s = Ve.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Ge.call(s) == Fe
                }(l) || Ie(l) ? (u = i, Ie(i) ? u = da(i) : B(i) && !G(i) || (u = function(e) {
                    return "function" != typeof e.constructor || Ee(e) ? {} : xe(Se(e))
                }(l))) : m = !1
            }
            m && (r.set(l, u), n(u, l, t, o, r), r.delete(l)), me(e, s, u)
        }
    }

    function ua(e, a, s, t, n) {
        e !== a && he(a, (function(o, r) {
            if (n || (n = new de), B(o)) ca(e, a, r, s, ua, t, n);
            else {
                var i = t ? t(Qe(e, r), o, r + "", e, a, n) : void 0;
                void 0 === i && (i = o), me(e, r, i)
            }
        }), la)
    }

    function ma(e) {
        return e
    }

    function pa(e, a, s) {
        switch (s.length) {
            case 0:
                return e.call(a);
            case 1:
                return e.call(a, s[0]);
            case 2:
                return e.call(a, s[0], s[1]);
            case 3:
                return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ce ? function(e, a) {
            return ce(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: (s = a, function() {
                    return s
                }),
                writable: !0
            });
            var s
        } : ma,
        ga = Date.now;
    var ba = function(e) {
        var a = 0,
            s = 0;
        return function() {
            var t = ga(),
                n = 16 - (t - s);
            if (s = t, n > 0) {
                if (++a >= 800) return arguments[0]
            } else a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);

    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
                function() {
                    for (var t = arguments, n = -1, o = ha(t.length - a, 0), r = Array(o); ++n < o;) r[n] = t[a + n];
                    n = -1;
                    for (var i = Array(a + 1); ++n < a;) i[n] = t[n];
                    return i[a] = s(r), pa(e, this, i)
                }
        }(e, a, ma), e + "")
    }
    var ka, va = (ka = function(e, a, s) {
            ua(e, a, s)
        }, fa((function(e, s) {
            var t = -1,
                n = s.length,
                o = n > 1 ? s[n - 1] : void 0,
                r = n > 2 ? s[2] : void 0;
            for (o = ka.length > 3 && "function" == typeof o ? (n--, o) : void 0, r && function(e, s, t) {
                    if (!B(t)) return !1;
                    var n = a(s);
                    return !!("number" == n ? Re(t) && ta(s, t.length) : "string" == n && s in t) && E(t[s], e)
                }(s[0], s[1], r) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++t < n;) {
                var i = s[t];
                i && ka(e, i, t, o)
            }
            return e
        }))),
        wa = "nyt-wordle-state",
        xa = {
            boardState: null,
            evaluations: null,
            rowIndex: null,
            solution: null,
            gameStatus: null,
            lastPlayedTs: null,
            lastCompletedTs: null,
            restoringFromLocalStorage: null,
            hardMode: !1
        };

    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }

    function ja(e) {
        var a = za();
        ! function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }

    function Sa() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }

    function Ca() {
        var e = navigator.userAgent;
        return e.match(/chrome|chromium|crios/i) ? "chrome" : e.match(/firefox|fxios/i) ? "firefox" : e.match(/safari/i) ? "safari" : e.match(/opr\//i) ? "opera" : e.match(/edg/i) ? "edge" : "No browser detection"
    }
    var Ea = "mailto:nytgames@nytimes.com";

    function _a(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var qa = function(e) {
            var a = [];
            return Object.keys(e).forEach((function(s) {
                a.push("".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(e[s])))
            })), "?".concat(a.join("&"))
        },
        La = document.createElement("template");
    La.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">High Contrast Mode</div>\n          <div class="description">For improved color vision</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="'.concat(function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Obscordle Feedback",
            a = (new Date).getTimezoneOffset(),
            s = "\r\n\r\n\n--\nDevice summary:\nPage: /games/wordle\nPlatform: ".concat(Sa() ? "Web (Mobile)" : "Web (Desktop)", " \nBrowser: ").concat(_a(Ca()), "\nScreen Resolution: ").concat(window.screen.width, " x ").concat(window.screen.height, "\nViewport Size: ").concat(document.documentElement.clientWidth, " x ").concat(document.documentElement.clientHeight, "\nTimezone: ", "UTC".concat(a > 0 ? "" : "+").concat(a / -60), "\n  ");
        return Ea + qa({
            subject: e,
            body: s
        })
    }(), '" title="nytgames@nytimes.com">Email</a>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Community</div>\n        </div>\n        <div class="control">\n          <a href="https://twitter.com/NYTimesWordplay" target="blank" title="@NYTimesWordplay">Twitter</a>\n        </div>\n      </div>\n      <div class="setting">\n      <div class="text">\n        <div class="title">Questions?</div>\n      </div>\n      <div class="control">\n        <a href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB" target="blank">FAQ</a>\n      </div>\n    </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">&#169; ').concat((new Date).getFullYear(), ' The New York Times Company</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n');
    var Ta = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e, a = this;
                this.shadowRoot.appendChild(La.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail,
                        t = s.name,
                        n = s.checked,
                        o = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: n,
                            disabled: o
                        }
                    })), a.render()
                })), this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-settings", Ta);
    var Aa = document.createElement("template");
    Aa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ia = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "_duration", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Aa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                    a.classList.add("fade")
                }), this._duration), a.addEventListener("transitionend", (function(a) {
                    e.parentNode.removeChild(e)
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-toast", Ia);
    var TotallyGoodText = "aahed\naalii\naapas\naargh\naarti\nabaca\nabaci\naback\nabacs\nabaft\nabaht\nabaka\nabamp\naband\nabase\nabash\nabask\nabate\nabaya\nabbas\nabbed\nabbes\nabbey\nabbot\nabcee\nabeam\nabear\nabeat\nabeer\nabele\nabeng\nabers\nabets\nabeys\nabhor\nabide\nabies\nabius\nabjad\nabjud\nabled\nabler\nables\nablet\nablow\nabmho\nabnet\nabode\nabohm\naboil\naboma\naboon\nabord\nabore\naborn\nabort\nabout\nabove\nabram\nabray\nabrim\nabrin\nabris\nabsey\nabsit\nabuna\nabune\nabura\naburn\nabuse\nabuts\nabuzz\nabyes\nabysm\nabyss\nacais\nacara\nacari\naccas\naccha\naccoy\naccra\nacedy\nacene\nacerb\nacers\naceta\nachar\nached\nacher\naches\nachey\nachoo\nacids\nacidy\nacies\nacing\nacini\nackee\nacker\nacmes\nacmic\nacned\nacnes\nacock\nacoel\nacold\nacone\nacorn\nacral\nacred\nacres\nacrid\nacron\nacros\nacryl\nactas\nacted\nactin\nacton\nactor\nactus\nacute\nacyls\nadage\nadapt\nadats\nadawn\nadaws\nadays\nadbot\naddas\naddax\nadded\nadder\naddin\naddio\naddle\naddra\nadead\nadeem\nadept\nadhan\nadhoc\nadieu\nadios\nadits\nadlib\nadman\nadmen\nadmin\nadmit\nadmix\nadnex\nadobe\nadobo\nadoon\nadopt\nadorb\nadore\nadorn\nadown\nadoze\nadrad\nadraw\nadred\nadret\nadrip\nadsum\naduki\nadult\nadunc\nadust\nadvew\nadvts\nadyta\nadyts\nadzed\nadzes\naecia\naedes\naeger\naegis\naeons\naerie\naeros\naesir\naevum\nafald\nafanc\nafara\nafars\nafear\naffix\naffly\nafion\nafire\nafizz\naflaj\naflap\naflow\nafoam\nafoot\nafore\nafoul\nafret\nafrit\nafros\nafter\naftos\nagain\nagals\nagama\nagami\nagamy\nagape\nagars\nagasp\nagast\nagate\nagaty\nagave\nagaze\nagbas\nagene\nagent\nagers\naggag\nagger\naggie\naggri\naggro\naggry\naghas\nagidi\nagila\nagile\naging\nagios\nagism\nagist\nagita\naglee\naglet\nagley\nagloo\naglow\naglus\nagmas\nagoge\nagogo\nagone\nagons\nagony\nagood\nagora\nagree\nagria\nagrin\nagros\nagrum\nagued\nagues\naguey\naguna\nagush\naguti\nahead\naheap\nahent\nahigh\nahind\nahing\nahint\nahold\nahole\nahull\nahuru\naidas\naided\naider\naides\naidoi\naidos\naiery\naigas\naight\nailed\naimag\naimak\naimed\naimer\nainee\nainga\naioli\naired\nairer\nairns\nairth\nairts\naisle\naitch\naitus\naiver\naixes\naiyah\naiyee\naiyoh\naiyoo\naizle\najies\najiva\najuga\najupa\najwan\nakara\nakees\nakela\nakene\naking\nakita\nakkas\nakker\nakoia\nakoja\nakoya\naksed\nakses\nalaap\nalack\nalala\nalamo\naland\nalane\nalang\nalans\nalant\nalapa\nalaps\nalarm\nalary\nalata\nalate\nalays\nalbas\nalbee\nalbid\nalbum\nalcea\nalces\nalcid\nalcos\naldea\nalder\naldol\naleak\naleck\nalecs\naleem\nalefs\naleft\naleph\nalert\nalews\naleye\nalfas\nalgae\nalgal\nalgas\nalgid\nalgin\nalgor\nalgos\nalgum\nalias\nalibi\nalick\nalien\nalifs\nalign\nalike\nalims\naline\nalios\nalist\nalive\naliya\nalkie\nalkin\nalkos\nalkyd\nalkyl\nallan\nallay\nallee\nallel\nallen\naller\nalley\nallin\nallis\nallod\nallot\nallow\nalloy\nallus\nallyl\nalmah\nalmas\nalmeh\nalmes\nalmud\nalmug\nalods\naloed\naloes\naloft\naloha\naloin\nalone\nalong\naloof\naloos\nalose\naloud\nalowe\nalpha\naltar\nalter\naltho\naltos\nalula\nalums\nalumy\nalure\nalurk\nalvar\nalway\namahs\namain\namari\namaro\namass\namate\namaut\namaze\namban\namber\nambit\namble\nambos\nambry\nameba\nameer\namend\namene\namens\nament\namias\namice\namici\namide\namido\namids\namies\namiga\namigo\namine\namino\namins\namirs\namiss\namity\namlas\namman\nammas\nammon\nammos\namnia\namnic\namnio\namoks\namole\namong\namore\namort\namour\namove\namowt\namped\nample\namply\nampul\namrit\namuck\namuse\namyls\nanana\nanata\nancho\nancle\nancon\nandic\nandro\nanear\nanele\nanent\nangas\nangel\nanger\nangle\nanglo\nangry\nangst\nanigh\nanile\nanils\nanima\nanime\nanimi\nanion\nanise\nanker\nankhs\nankle\nankus\nanlas\nannal\nannan\nannas\nannat\nannex\nannoy\nannul\nannum\nannus\nanoas\nanode\nanole\nanomy\nansae\nansas\nantae\nantar\nantas\nanted\nantes\nantic\nantis\nantra\nantre\nantsy\nanura\nanvil\nanyon\naorta\napace\napage\napaid\napart\napayd\napays\napeak\napeek\napers\napert\napery\napgar\naphid\naphis\napian\naping\napiol\napish\napism\napnea\napode\napods\napols\napoop\naport\nappal\nappam\nappay\nappel\napple\napply\nappro\nappts\nappui\nappuy\napres\napron\napses\napsis\napsos\napted\napter\naptly\naquae\naquas\naraba\naraks\narame\narars\narbah\narbas\narbor\narced\narchi\narcos\narcus\nardeb\nardor\nardri\naread\nareae\nareal\narear\nareas\nareca\naredd\narede\narefy\nareic\narena\narene\narepa\narere\narete\narets\narett\nargal\nargan\nargil\nargle\nargol\nargon\nargot\nargue\nargus\narhat\narias\nariel\nariki\narils\nariot\narise\narish\narith\narked\narled\narles\narmed\narmer\narmet\narmil\narmor\narnas\narnis\narnut\naroba\naroha\naroid\naroma\narose\narpas\narpen\narrah\narras\narray\narret\narris\narrow\narroz\narsed\narses\narsey\narsis\narson\nartal\nartel\narter\nartic\nartis\nartly\nartsy\naruhe\narums\narval\narvee\narvos\naryls\nasada\nasana\nascon\nascot\nascus\nasdic\nashed\nashen\nashes\nashet\naside\nasity\naskar\nasked\nasker\naskew\naskoi\naskos\naspen\nasper\naspic\naspie\naspis\naspro\nassai\nassam\nassay\nassed\nasses\nasset\nassez\nassot\naster\nastir\nastun\nasura\nasway\naswim\nasyla\nataps\nataxy\natigi\natilt\natimy\natlas\natman\natmas\natmos\natocs\natoke\natoks\natoll\natoms\natomy\natone\natony\natopy\natria\natrip\nattap\nattar\nattas\natter\nattic\natuas\naucht\naudad\naudax\naudio\naudit\naugen\nauger\nauges\naught\naugur\naulas\naulic\nauloi\naulos\naumil\naunes\naunts\naunty\naurae\naural\naurar\nauras\naurei\naures\nauric\nauris\naurum\nautos\nauxin\navail\navale\navant\navast\navels\navens\navers\navert\navgas\navian\navine\navion\navise\naviso\navize\navoid\navows\navyze\nawait\nawake\naward\naware\nawari\nawarn\nawash\nawato\nawave\naways\nawdls\naweel\naweto\nawful\nawing\nawkin\nawmry\nawned\nawner\nawoke\nawols\nawork\naxels\naxial\naxile\naxils\naxing\naxiom\naxion\naxite\naxled\naxles\naxman\naxmen\naxoid\naxone\naxons\nayahs\nayaya\nayelp\naygre\nayins\naymag\nayont\nayres\nayrie\nazans\nazide\nazido\nazine\nazlon\nazoic\nazole\nazons\nazote\nazoth\nazuki\nazure\nazurn\nazury\nazygy\nazyme\nazyms\nbaaed\nbaals\nbaaps\nbabas\nbabby\nbabel\nbabes\nbabka\nbaboo\nbabul\nbabus\nbacca\nbacco\nbaccy\nbacha\nbachs\nbacks\nbacky\nbacne\nbacon\nbadam\nbaddy\nbadge\nbadly\nbaels\nbaffs\nbaffy\nbafta\nbafts\nbagel\nbaggy\nbaghs\nbagie\nbagsy\nbagua\nbahts\nbahus\nbahut\nbaiks\nbaile\nbails\nbairn\nbaisa\nbaith\nbaits\nbaiza\nbaize\nbajan\nbajra\nbajri\nbajus\nbaked\nbaken\nbaker\nbakes\nbakra\nbalas\nbalds\nbaldy\nbaled\nbaler\nbales\nbalks\nbalky\nballo\nballs\nbally\nbalms\nbalmy\nbaloi\nbalon\nbaloo\nbalot\nbalsa\nbalti\nbalun\nbalus\nbalut\nbamas\nbambi\nbamma\nbammy\nbanak\nbanal\nbanco\nbancs\nbanda\nbandh\nbands\nbandy\nbaned\nbanes\nbangs\nbania\nbanjo\nbanks\nbanky\nbanns\nbants\nbantu\nbanty\nbantz\nbanya\nbaons\nbaozi\nbappu\nbapus\nbarbe\nbarbs\nbarby\nbarca\nbarde\nbardo\nbards\nbardy\nbared\nbarer\nbares\nbarfi\nbarfs\nbarfy\nbarge\nbaric\nbarks\nbarky\nbarms\nbarmy\nbarns\nbarny\nbaron\nbarps\nbarra\nbarre\nbarro\nbarry\nbarye\nbasal\nbasan\nbasas\nbased\nbasen\nbaser\nbases\nbasha\nbasho\nbasic\nbasij\nbasil\nbasin\nbasis\nbasks\nbason\nbasse\nbassi\nbasso\nbassy\nbasta\nbaste\nbasti\nbasto\nbasts\nbatch\nbated\nbates\nbathe\nbaths\nbatik\nbaton\nbatos\nbatta\nbatts\nbattu\nbatty\nbauds\nbauks\nbaulk\nbaurs\nbavin\nbawds\nbawdy\nbawks\nbawls\nbawns\nbawrs\nbawty\nbayas\nbayed\nbayer\nbayes\nbayle\nbayou\nbayts\nbazar\nbazas\nbazoo\nbball\nbdays\nbeach\nbeads\nbeady\nbeaks\nbeaky\nbeals\nbeams\nbeamy\nbeano\nbeans\nbeany\nbeard\nbeare\nbears\nbeast\nbeath\nbeats\nbeaty\nbeaus\nbeaut\nbeaux\nbebop\nbecap\nbecke\nbecks\nbedad\nbedel\nbedes\nbedew\nbedim\nbedye\nbeech\nbeedi\nbeefs\nbeefy\nbeeps\nbeers\nbeery\nbeets\nbefit\nbefog\nbegad\nbegan\nbegar\nbegat\nbegem\nbeget\nbegin\nbegob\nbegot\nbegum\nbegun\nbeige\nbeigy\nbeing\nbeins\nbeira\nbeisa\nbekah\nbelah\nbelar\nbelay\nbelch\nbelee\nbelga\nbelie\nbelit\nbelle\nbelli\nbello\nbells\nbelly\nbelon\nbelow\nbelts\nbelve\nbemad\nbemas\nbemix\nbemud\nbench\nbends\nbendy\nbenes\nbenet\nbenga\nbenis\nbenji\nbenne\nbenni\nbenny\nbento\nbents\nbenty\nbepat\nberay\nberes\nberet\nbergs\nberko\nberks\nberme\nberms\nberob\nberry\nberth\nberyl\nbesat\nbesaw\nbesee\nbeses\nbeset\nbesit\nbesom\nbesot\nbesti\nbests\nbetas\nbeted\nbetel\nbetes\nbeths\nbetid\nbeton\nbetta\nbetty\nbevan\nbevel\nbever\nbevor\nbevue\nbevvy\nbewdy\nbewet\nbewig\nbezel\nbezes\nbezil\nbezzy\nbhais\nbhaji\nbhang\nbhats\nbhava\nbhels\nbhoot\nbhuna\nbhuts\nbiach\nbiali\nbialy\nbibbs\nbibes\nbibis\nbible\nbiccy\nbicep\nbices\nbicky\nbiddy\nbided\nbider\nbides\nbidet\nbidis\nbidon\nbidri\nbield\nbiers\nbiffo\nbiffs\nbiffy\nbifid\nbigae\nbiggs\nbiggy\nbigha\nbight\nbigly\nbigos\nbigot\nbihon\nbijou\nbiked\nbiker\nbikes\nbikie\nbikky\nbilal\nbilat\nbilbo\nbilby\nbiled\nbiles\nbilge\nbilgy\nbilks\nbills\nbilly\nbimah\nbimas\nbimbo\nbinal\nbindi\nbinds\nbiner\nbines\nbinge\nbingo\nbings\nbingy\nbinit\nbinks\nbinky\nbints\nbiogs\nbiome\nbions\nbiont\nbiose\nbiota\nbiped\nbipod\nbippy\nbirch\nbirdo\nbirds\nbiris\nbirks\nbirle\nbirls\nbiros\nbirrs\nbirse\nbirsy\nbirth\nbirze\nbirzz\nbises\nbisks\nbisom\nbison\nbitch\nbiter\nbites\nbitey\nbitos\nbitou\nbitsy\nbitte\nbitts\nbitty\nbivia\nbivvy\nbizes\nbizzo\nbizzy\nblabs\nblack\nblade\nblads\nblady\nblaer\nblaes\nblaff\nblags\nblahs\nblain\nblame\nblams\nblanc\nbland\nblank\nblare\nblart\nblase\nblash\nblast\nblate\nblats\nblatt\nblaud\nblawn\nblaws\nblays\nblaze\nbleah\nbleak\nblear\nbleat\nblebs\nblech\nbleed\nbleep\nblees\nblend\nblent\nblert\nbless\nblest\nblets\nbleys\nblimp\nblimy\nblind\nbling\nblini\nblink\nblins\nbliny\nblips\nbliss\nblist\nblite\nblits\nblitz\nblive\nbloat\nblobs\nblock\nblocs\nblogs\nbloke\nblond\nblonx\nblood\nblook\nbloom\nbloop\nblore\nblots\nblown\nblows\nblowy\nblubs\nblude\nbluds\nbludy\nblued\nbluer\nblues\nbluet\nbluey\nbluff\nbluid\nblume\nblunk\nblunt\nblurb\nblurs\nblurt\nblush\nblype\nboabs\nboaks\nboard\nboars\nboart\nboast\nboats\nboaty\nbobac\nbobak\nbobas\nbobby\nbobol\nbobos\nbocca\nbocce\nbocci\nboche\nbocks\nboded\nbodes\nbodge\nbodgy\nbodhi\nbodle\nbodoh\nboeps\nboers\nboeti\nboets\nboeuf\nboffo\nboffs\nbogan\nbogey\nboggy\nbogie\nbogle\nbogue\nbogus\nbohea\nbohos\nboils\nboing\nboink\nboite\nboked\nbokeh\nbokes\nbokos\nbolar\nbolas\nboldo\nbolds\nboles\nbolet\nbolix\nbolks\nbolls\nbolos\nbolts\nbolus\nbomas\nbombe\nbombo\nbombs\nbomoh\nbomor\nbonce\nbonds\nboned\nboner\nbones\nboney\nbongo\nbongs\nbonie\nbonks\nbonne\nbonny\nbonum\nbonus\nbonza\nbonze\nbooai\nbooay\nboobs\nbooby\nboody\nbooed\nboofy\nboogy\nboohs\nbooks\nbooky\nbools\nbooms\nboomy\nboong\nboons\nboord\nboors\nboose\nboost\nbooth\nboots\nbooty\nbooze\nboozy\nboppy\nborak\nboral\nboras\nborax\nborde\nbords\nbored\nboree\nborek\nborel\nborer\nbores\nborgo\nboric\nborks\nborms\nborna\nborne\nboron\nborts\nborty\nbortz\nbosey\nbosie\nbosks\nbosky\nbosom\nboson\nbossa\nbossy\nbosun\nbotas\nbotch\nboteh\nbotel\nbotes\nbotew\nbothy\nbotos\nbotte\nbotts\nbotty\nbouge\nbough\nbouks\nboule\nboult\nbound\nbouns\nbourd\nbourg\nbourn\nbouse\nbousy\nbouts\nboutu\nbovid\nbowat\nbowed\nbowel\nbower\nbowes\nbowet\nbowie\nbowls\nbowne\nbowrs\nbowse\nboxed\nboxen\nboxer\nboxes\nboxla\nboxty\nboyar\nboyau\nboyed\nboyey\nboyfs\nboygs\nboyla\nboyly\nboyos\nboysy\nbozos\nbraai\nbrace\nbrach\nbrack\nbract\nbrads\nbraes\nbrags\nbrahs\nbraid\nbrail\nbrain\nbrake\nbraks\nbraky\nbrame\nbrand\nbrane\nbrank\nbrans\nbrant\nbrash\nbrass\nbrast\nbrats\nbrava\nbrave\nbravi\nbravo\nbrawl\nbrawn\nbraws\nbraxy\nbrays\nbraza\nbraze\nbread\nbreak\nbream\nbrede\nbreds\nbreed\nbreem\nbreer\nbrees\nbreid\nbreis\nbreme\nbrens\nbrent\nbrere\nbrers\nbreve\nbrews\nbreys\nbriar\nbribe\nbrick\nbride\nbrief\nbrier\nbries\nbrigs\nbriki\nbriks\nbrill\nbrims\nbrine\nbring\nbrink\nbrins\nbriny\nbrios\nbrise\nbrisk\nbriss\nbrith\nbrits\nbritt\nbrize\nbroad\nbroch\nbrock\nbrods\nbrogh\nbrogs\nbroil\nbroke\nbrome\nbromo\nbronc\nbrond\nbrood\nbrook\nbrool\nbroom\nbroos\nbrose\nbrosy\nbroth\nbrown\nbrows\nbruck\nbrugh\nbruhs\nbruin\nbruit\nbruja\nbrujo\nbrule\nbrume\nbrung\nbrunt\nbrush\nbrusk\nbrust\nbrute\nbruts\nbruvs\nbuats\nbuaze\nbubal\nbubas\nbubba\nbubbe\nbubby\nbubus\nbuchu\nbucko\nbucks\nbucku\nbudas\nbuddy\nbuded\nbudes\nbudge\nbudis\nbudos\nbuena\nbuffa\nbuffe\nbuffi\nbuffo\nbuffs\nbuffy\nbufos\nbufty\nbugan\nbuggy\nbugle\nbuhls\nbuhrs\nbuiks\nbuild\nbuilt\nbuist\nbukes\nbukos\nbulbs\nbulge\nbulgy\nbulks\nbulky\nbulla\nbulls\nbully\nbulse\nbumbo\nbumfs\nbumph\nbumps\nbumpy\nbunas\nbunce\nbunch\nbunco\nbunde\nbundh\nbunds\nbundt\nbundu\nbundy\nbungs\nbungy\nbunia\nbunje\nbunjy\nbunko\nbunks\nbunns\nbunny\nbunts\nbunty\nbunya\nbuoys\nbuppy\nburan\nburas\nburbs\nburds\nburet\nburfi\nburgh\nburgs\nburin\nburka\nburke\nburks\nburls\nburly\nburns\nburnt\nburoo\nburps\nburqa\nburra\nburro\nburrs\nburry\nbursa\nburse\nburst\nbusby\nbused\nbuses\nbushy\nbusks\nbusky\nbussu\nbusti\nbusts\nbusty\nbutch\nbuteo\nbutes\nbutle\nbutoh\nbutte\nbutts\nbutty\nbutut\nbutyl\nbuxom\nbuyer\nbuyin\nbuzzy\nbwana\nbwazi\nbyded\nbydes\nbyked\nbykes\nbylaw\nbyres\nbyrls\nbyssi\nbytes\nbyway\ncaaed\ncabal\ncabas\ncabby\ncaber\ncabin\ncable\ncabob\ncaboc\ncabre\ncacao\ncacas\ncache\ncacks\ncacky\ncacti\ncaddy\ncadee\ncades\ncadet\ncadge\ncadgy\ncadie\ncadis\ncadre\ncaeca\ncaese\ncafes\ncaffe\ncaffs\ncaged\ncager\ncages\ncagey\ncagot\ncahow\ncaids\ncains\ncaird\ncairn\ncajon\ncajun\ncaked\ncakes\ncakey\ncalfs\ncalid\ncalif\ncalix\ncalks\ncalla\ncalle\ncalls\ncalms\ncalmy\ncalos\ncalpa\ncalps\ncalve\ncalyx\ncaman\ncamas\ncamel\ncameo\ncames\ncamis\ncamos\ncampi\ncampo\ncamps\ncampy\ncamus\ncanal\ncando\ncandy\ncaned\ncaneh\ncaner\ncanes\ncangs\ncanid\ncanna\ncanns\ncanny\ncanoe\ncanon\ncanso\ncanst\ncanti\ncanto\ncants\ncanty\ncapas\ncapax\ncaped\ncaper\ncapes\ncapex\ncaphs\ncapiz\ncaple\ncapon\ncapos\ncapot\ncapri\ncapul\ncaput\ncarap\ncarat\ncarbo\ncarbs\ncarby\ncardi\ncards\ncardy\ncared\ncarer\ncares\ncaret\ncarex\ncargo\ncarks\ncarle\ncarls\ncarne\ncarns\ncarny\ncarob\ncarol\ncarom\ncaron\ncarpe\ncarpi\ncarps\ncarrs\ncarry\ncarse\ncarta\ncarte\ncarts\ncarve\ncarvy\ncasas\ncasco\ncased\ncaser\ncases\ncasks\ncasky\ncaste\ncasts\ncasus\ncatch\ncater\ncates\ncatty\ncauda\ncauks\ncauld\ncaulk\ncauls\ncaums\ncaups\ncauri\ncausa\ncause\ncavas\ncaved\ncavel\ncaver\ncaves\ncavie\ncavil\ncavus\ncawed\ncawks\ncaxon\ncease\nceaze\ncebid\ncecal\ncecum\ncedar\nceded\nceder\ncedes\ncedis\nceiba\nceili\nceils\nceleb\ncella\ncelli\ncello\ncells\ncelly\ncelom\ncelts\ncense\ncento\ncents\ncentu\nceorl\ncepes\ncerci\ncered\nceres\ncerge\nceria\nceric\ncerne\nceroc\nceros\ncerts\ncerty\ncesse\ncesta\ncesti\ncetes\ncetyl\ncezve\nchaap\nchaat\nchace\nchack\nchaco\nchado\nchads\nchafe\nchaff\nchaft\nchain\nchair\nchais\nchalk\nchals\nchamp\nchams\nchana\nchang\nchank\nchant\nchaos\nchape\nchaps\nchapt\nchara\nchard\nchare\nchark\ncharm\ncharr\nchars\nchart\nchary\nchase\nchasm\nchats\nchava\nchave\nchavs\nchawk\nchawl\nchaws\nchaya\nchays\ncheap\ncheat\ncheba\ncheck\nchedi\ncheeb\ncheek\ncheep\ncheer\ncheet\nchefs\ncheka\nchela\nchelp\nchemo\nchems\nchere\nchert\nchess\nchest\ncheth\nchevy\nchews\nchewy\nchiao\nchias\nchiba\nchibs\nchica\nchich\nchick\nchico\nchics\nchide\nchief\nchiel\nchiko\nchiks\nchild\nchile\nchili\nchill\nchimb\nchime\nchimo\nchimp\nchina\nchine\nching\nchink\nchino\nchins\nchips\nchirk\nchirl\nchirm\nchiro\nchirp\nchirr\nchirt\nchiru\nchiti\nchits\nchiva\nchive\nchivs\nchivy\nchizz\nchock\nchoco\nchocs\nchode\nchogs\nchoil\nchoir\nchoke\nchoko\nchoky\nchola\ncholi\ncholo\nchomp\nchons\nchoof\nchook\nchoom\nchoon\nchops\nchord\nchore\nchose\nchoss\nchota\nchott\nchout\nchoux\nchowk\nchows\nchubs\nchuck\nchufa\nchuff\nchugs\nchump\nchums\nchunk\nchurl\nchurn\nchurr\nchuse\nchute\nchuts\nchyle\nchyme\nchynd\ncibol\ncided\ncider\ncides\nciels\ncigar\nciggy\ncilia\ncills\ncimar\ncimex\ncinch\ncinct\ncines\ncinqs\ncions\ncippi\ncirca\ncircs\ncires\ncirls\ncirri\ncisco\ncissy\ncists\ncital\ncited\ncitee\nciter\ncites\ncives\ncivet\ncivic\ncivie\ncivil\ncivvy\nclach\nclack\nclade\nclads\nclaes\nclags\nclaim\nclair\nclame\nclamp\nclams\nclang\nclank\nclans\nclaps\nclapt\nclaro\nclart\nclary\nclash\nclasp\nclass\nclast\nclats\nclaut\nclave\nclavi\nclaws\nclays\nclean\nclear\ncleat\ncleck\ncleek\ncleep\nclefs\ncleft\nclegs\ncleik\nclems\nclepe\nclept\nclerk\ncleve\nclews\nclick\nclied\nclies\ncliff\nclift\nclimb\nclime\ncline\ncling\nclink\nclint\nclipe\nclips\nclipt\nclits\ncloak\ncloam\nclock\nclods\ncloff\nclogs\ncloke\nclomb\nclomp\nclone\nclonk\nclons\ncloop\ncloot\nclops\nclose\nclote\ncloth\nclots\ncloud\nclour\nclous\nclout\nclove\nclown\nclows\ncloye\ncloys\ncloze\nclubs\ncluck\nclued\nclues\ncluey\nclump\nclung\nclunk\nclype\ncnida\ncoach\ncoact\ncoady\ncoala\ncoals\ncoaly\ncoapt\ncoarb\ncoast\ncoate\ncoati\ncoats\ncobbs\ncobby\ncobia\ncoble\ncobot\ncobra\ncobza\ncocas\ncocci\ncocco\ncocks\ncocky\ncocoa\ncocos\ncocus\ncodas\ncodec\ncoded\ncoden\ncoder\ncodes\ncodex\ncodon\ncoeds\ncoffs\ncogie\ncogon\ncogue\ncohab\ncohen\ncohoe\ncohog\ncohos\ncoifs\ncoign\ncoils\ncoins\ncoirs\ncoits\ncoked\ncokes\ncokey\ncolas\ncolby\ncolds\ncoled\ncoles\ncoley\ncolic\ncolin\ncolle\ncolls\ncolly\ncolog\ncolon\ncolor\ncolts\ncolza\ncomae\ncomal\ncomas\ncombe\ncombi\ncombo\ncombs\ncomby\ncomer\ncomes\ncomet\ncomfy\ncomic\ncomix\ncomma\ncomme\ncommo\ncomms\ncommy\ncompo\ncomps\ncompt\ncomte\ncomus\nconch\ncondo\nconed\ncones\nconex\nconey\nconfs\nconga\nconge\ncongo\nconia\nconic\nconin\nconks\nconky\nconne\nconns\nconte\nconto\nconus\nconvo\ncooch\ncooed\ncooee\ncooer\ncooey\ncoofs\ncooks\ncooky\ncools\ncooly\ncoomb\ncooms\ncoomy\ncoons\ncoops\ncoopt\ncoost\ncoots\ncooty\ncooze\ncopal\ncopay\ncoped\ncopen\ncoper\ncopes\ncopha\ncoppy\ncopra\ncopse\ncopsy\ncoqui\ncoral\ncoram\ncorbe\ncorby\ncorda\ncords\ncored\ncorer\ncores\ncorey\ncorgi\ncoria\ncorks\ncorky\ncorms\ncorni\ncorno\ncorns\ncornu\ncorny\ncorps\ncorse\ncorso\ncosec\ncosed\ncoses\ncoset\ncosey\ncosie\ncosta\ncoste\ncosts\ncotan\ncotch\ncoted\ncotes\ncoths\ncotta\ncotts\ncouch\ncoude\ncough\ncould\ncount\ncoupe\ncoups\ncourb\ncourd\ncoure\ncours\ncourt\ncouta\ncouth\ncoved\ncoven\ncover\ncoves\ncovet\ncovey\ncovin\ncowal\ncowan\ncowed\ncower\ncowks\ncowls\ncowps\ncowry\ncoxae\ncoxal\ncoxed\ncoxes\ncoxib\ncoyau\ncoyed\ncoyer\ncoyly\ncoypu\ncozed\ncozen\ncozes\ncozey\ncozie\ncraal\ncrabs\ncrack\ncraft\ncrags\ncraic\ncraig\ncrake\ncrame\ncramp\ncrams\ncrane\ncrank\ncrans\ncrape\ncraps\ncrapy\ncrare\ncrash\ncrass\ncrate\ncrave\ncrawl\ncraws\ncrays\ncraze\ncrazy\ncreak\ncream\ncredo\ncreds\ncreed\ncreek\ncreel\ncreep\ncrees\ncrein\ncrema\ncreme\ncrems\ncrena\ncrepe\ncreps\ncrept\ncrepy\ncress\ncrest\ncrewe\ncrews\ncrias\ncribo\ncribs\ncrick\ncried\ncrier\ncries\ncrime\ncrimp\ncrims\ncrine\ncrink\ncrins\ncrios\ncripe\ncrips\ncrise\ncrisp\ncriss\ncrith\ncrits\ncroak\ncroci\ncrock\ncrocs\ncroft\ncrogs\ncromb\ncrome\ncrone\ncronk\ncrons\ncrony\ncrook\ncrool\ncroon\ncrops\ncrore\ncross\ncrost\ncroup\ncrout\ncrowd\ncrowl\ncrown\ncrows\ncroze\ncruck\ncrude\ncrudo\ncruds\ncrudy\ncruel\ncrues\ncruet\ncruft\ncrumb\ncrump\ncrunk\ncruor\ncrura\ncruse\ncrush\ncrust\ncrusy\ncruve\ncrwth\ncryer\ncryne\ncrypt\nctene\ncubby\ncubeb\ncubed\ncuber\ncubes\ncubic\ncubit\ncucks\ncudda\ncuddy\ncueca\ncuffo\ncuffs\ncuifs\ncuing\ncuish\ncuits\ncukes\nculch\nculet\nculex\nculls\ncully\nculms\nculpa\nculti\ncults\nculty\ncumec\ncumin\ncundy\ncunei\ncunit\ncunny\ncunts\ncupel\ncupid\ncuppa\ncuppy\ncupro\ncurat\ncurbs\ncurch\ncurds\ncurdy\ncured\ncurer\ncures\ncuret\ncurfs\ncuria\ncurie\ncurio\ncurli\ncurls\ncurly\ncurns\ncurny\ncurrs\ncurry\ncurse\ncursi\ncurst\ncurve\ncurvy\ncusec\ncushy\ncusks\ncusps\ncuspy\ncusso\ncusum\ncutch\ncuter\ncutes\ncutey\ncutie\ncutin\ncutis\ncutto\ncutty\ncutup\ncuvee\ncuzes\ncwtch\ncyano\ncyans\ncyber\ncycad\ncycas\ncycle\ncyclo\ncyder\ncylix\ncymae\ncymar\ncymas\ncymes\ncymol\ncynic\ncysts\ncytes\ncyton\nczars\ndaals\ndabba\ndaces\ndacha\ndacks\ndadah\ndadas\ndaddy\ndadis\ndadla\ndados\ndaffs\ndaffy\ndagga\ndaggy\ndagos\ndahis\ndahls\ndaiko\ndaily\ndaine\ndaint\ndairy\ndaisy\ndaker\ndaled\ndalek\ndales\ndalis\ndalle\ndally\ndalts\ndaman\ndamar\ndames\ndamme\ndamna\ndamns\ndamps\ndampy\ndance\ndancy\ndanda\ndandy\ndangs\ndanio\ndanks\ndanny\ndanse\ndants\ndappy\ndaraf\ndarbs\ndarcy\ndared\ndarer\ndares\ndarga\ndargs\ndaric\ndaris\ndarks\ndarky\ndarls\ndarns\ndarre\ndarts\ndarzi\ndashi\ndashy\ndatal\ndated\ndater\ndates\ndatil\ndatos\ndatto\ndatum\ndaube\ndaubs\ndauby\ndauds\ndault\ndaunt\ndaurs\ndauts\ndaven\ndavit\ndawah\ndawds\ndawed\ndawen\ndawgs\ndawks\ndawns\ndawts\ndayal\ndayan\ndaych\ndaynt\ndazed\ndazer\ndazes\ndbags\ndeads\ndeair\ndeals\ndealt\ndeans\ndeare\ndearn\ndears\ndeary\ndeash\ndeath\ndeave\ndeaws\ndeawy\ndebag\ndebar\ndebby\ndebel\ndebes\ndebit\ndebts\ndebud\ndebug\ndebur\ndebus\ndebut\ndebye\ndecad\ndecaf\ndecal\ndecan\ndecay\ndecim\ndecko\ndecks\ndecor\ndecos\ndecoy\ndecry\ndecyl\ndedal\ndeeds\ndeedy\ndeely\ndeems\ndeens\ndeeps\ndeere\ndeers\ndeets\ndeeve\ndeevs\ndefat\ndefer\ndeffo\ndefis\ndefog\ndegas\ndegum\ndegus\ndeice\ndeids\ndeify\ndeign\ndeils\ndeink\ndeism\ndeist\ndeity\ndeked\ndekes\ndekko\ndelay\ndeled\ndeles\ndelfs\ndelft\ndelis\ndella\ndells\ndelly\ndelos\ndelph\ndelta\ndelts\ndelve\ndeman\ndemes\ndemic\ndemit\ndemob\ndemoi\ndemon\ndemos\ndemot\ndempt\ndemur\ndenar\ndenay\ndench\ndenes\ndenet\ndenim\ndenis\ndense\ndente\ndents\ndeoch\ndeoxy\ndepot\ndepth\nderat\nderay\nderby\ndered\nderes\nderig\nderma\nderms\nderns\nderny\nderos\nderpy\nderro\nderry\nderth\ndervs\ndesex\ndeshi\ndesis\ndesks\ndesse\ndetag\ndeter\ndetox\ndeuce\ndevas\ndevel\ndevil\ndevis\ndevon\ndevos\ndevot\ndewan\ndewar\ndewax\ndewed\ndexes\ndexie\ndexys\ndhaba\ndhaks\ndhals\ndhikr\ndhobi\ndhole\ndholl\ndhols\ndhoni\ndhoti\ndhows\ndhuti\ndiact\ndials\ndiana\ndiane\ndiary\ndiazo\ndibbs\ndiced\ndicer\ndices\ndicey\ndicht\ndicks\ndicky\ndicot\ndicta\ndicto\ndicts\ndictu\ndicty\ndiddy\ndidie\ndidis\ndidos\ndidst\ndiebs\ndiels\ndiene\ndiets\ndiffs\ndight\ndigit\ndikas\ndiked\ndiker\ndikes\ndikey\ndildo\ndilli\ndills\ndilly\ndimbo\ndimer\ndimes\ndimly\ndimps\ndinar\ndined\ndiner\ndines\ndinge\ndingo\ndings\ndingy\ndinic\ndinks\ndinky\ndinlo\ndinna\ndinos\ndints\ndioch\ndiode\ndiols\ndiota\ndippy\ndipso\ndiram\ndirer\ndirge\ndirke\ndirks\ndirls\ndirts\ndirty\ndisas\ndisci\ndisco\ndiscs\ndishy\ndisks\ndisme\ndital\nditas\nditch\ndited\ndites\nditsy\nditto\nditts\nditty\nditzy\ndivan\ndivas\ndived\ndiver\ndives\ndivey\ndivis\ndivna\ndivos\ndivot\ndivvy\ndiwan\ndixie\ndixit\ndiyas\ndizen\ndizzy\ndjinn\ndjins\ndoabs\ndoats\ndobby\ndobes\ndobie\ndobla\ndoble\ndobra\ndobro\ndocht\ndocks\ndocos\ndocus\ndoddy\ndodge\ndodgy\ndodos\ndoeks\ndoers\ndoest\ndoeth\ndoffs\ndogal\ndogan\ndoges\ndogey\ndoggo\ndoggy\ndogie\ndogly\ndogma\ndohyo\ndoilt\ndoily\ndoing\ndoits\ndojos\ndolce\ndolci\ndoled\ndolee\ndoles\ndoley\ndolia\ndolie\ndolls\ndolly\ndolma\ndolor\ndolos\ndolts\ndomal\ndomed\ndomes\ndomic\ndonah\ndonas\ndonee\ndoner\ndonga\ndongs\ndonko\ndonna\ndonne\ndonny\ndonor\ndonsy\ndonut\ndoobs\ndooce\ndoody\ndoofs\ndooks\ndooky\ndoole\ndools\ndooly\ndooms\ndoomy\ndoona\ndoorn\ndoors\ndoozy\ndopas\ndoped\ndoper\ndopes\ndopey\ndoppe\ndorad\ndorba\ndorbs\ndoree\ndores\ndoric\ndoris\ndorje\ndorks\ndorky\ndorms\ndormy\ndorps\ndorrs\ndorsa\ndorse\ndorts\ndorty\ndosai\ndosas\ndosed\ndoseh\ndoser\ndoses\ndosha\ndotal\ndoted\ndoter\ndotes\ndotty\ndouar\ndoubt\ndouce\ndoucs\ndough\ndouks\ndoula\ndouma\ndoums\ndoups\ndoura\ndouse\ndouts\ndoved\ndoven\ndover\ndoves\ndovie\ndowak\ndowar\ndowds\ndowdy\ndowed\ndowel\ndower\ndowfs\ndowie\ndowle\ndowls\ndowly\ndowna\ndowns\ndowny\ndowps\ndowry\ndowse\ndowts\ndoxed\ndoxes\ndoxie\ndoyen\ndoyly\ndozed\ndozen\ndozer\ndozes\ndrabs\ndrack\ndraco\ndraff\ndraft\ndrags\ndrail\ndrain\ndrake\ndrama\ndrams\ndrank\ndrant\ndrape\ndraps\ndrapy\ndrats\ndrave\ndrawl\ndrawn\ndraws\ndrays\ndread\ndream\ndrear\ndreck\ndreed\ndreer\ndrees\ndregs\ndreks\ndrent\ndrere\ndress\ndrest\ndreys\ndribs\ndrice\ndried\ndrier\ndries\ndrift\ndrill\ndrily\ndrink\ndrips\ndript\ndrive\ndrock\ndroid\ndroil\ndroit\ndroke\ndrole\ndroll\ndrome\ndrone\ndrony\ndroob\ndroog\ndrook\ndrool\ndroop\ndrops\ndropt\ndross\ndrouk\ndrove\ndrown\ndrows\ndrubs\ndrugs\ndruid\ndrums\ndrunk\ndrupe\ndruse\ndrusy\ndruxy\ndryad\ndryas\ndryer\ndryly\ndsobo\ndsomo\nduads\nduals\nduans\nduars\ndubbo\ndubby\nducal\nducat\nduces\nduchy\nducks\nducky\nducti\nducts\nduddy\nduded\ndudes\nduels\nduets\nduett\nduffs\ndufus\nduing\nduits\ndukas\nduked\ndukes\ndukka\ndukun\ndulce\ndules\ndulia\ndulls\ndully\ndulse\ndumas\ndumbo\ndumbs\ndumka\ndumky\ndummy\ndumps\ndumpy\ndunam\ndunce\ndunch\ndunes\ndungs\ndungy\ndunks\ndunno\ndunny\ndunsh\ndunts\nduomi\nduomo\nduped\nduper\ndupes\nduple\nduply\nduppy\ndural\nduras\ndured\ndures\ndurgy\ndurns\nduroc\nduros\nduroy\ndurra\ndurrs\ndurry\ndurst\ndurum\ndurzi\ndusks\ndusky\ndusts\ndusty\ndutch\nduvet\nduxes\ndwaal\ndwale\ndwalm\ndwams\ndwamy\ndwang\ndwarf\ndwaum\ndweeb\ndwell\ndwelt\ndwile\ndwine\ndyads\ndyers\ndying\ndyked\ndykes\ndykey\ndykon\ndynel\ndynes\ndynos\ndzhos\neager\neagle\neagly\neagre\nealed\neales\neaned\neards\neared\nearls\nearly\nearns\nearnt\nearst\nearth\neased\neasel\neaser\neases\neasle\neasts\neaten\neater\neathe\neatin\neaved\neaver\neaves\nebank\nebbed\nebbet\nebena\nebene\nebike\nebons\nebony\nebook\necads\necard\necash\neched\neches\nechos\necigs\neclat\necole\necrus\nedema\nedged\nedger\nedges\nedict\nedify\nedile\nedits\neduce\neduct\neejit\neensy\neerie\neeven\neever\neevns\neffed\neffer\nefits\negads\negers\negest\neggar\negged\negger\negmas\negret\nehing\neider\neidos\neight\neigne\neiked\neikon\neilds\neiron\neisel\neject\nejido\nekdam\neking\nekkas\nelain\neland\nelans\nelate\nelbow\nelchi\nelder\neldin\nelect\neleet\nelegy\nelemi\nelfed\nelfin\neliad\nelide\nelint\nelite\nelmen\neloge\nelogy\neloin\nelope\nelops\nelpee\nelsin\nelude\nelute\nelvan\nelven\nelver\nelves\nemacs\nemail\nembar\nembay\nembed\nember\nembog\nembow\nembox\nembus\nemcee\nemeer\nemend\nemerg\nemery\nemeus\nemics\nemirs\nemits\nemmas\nemmer\nemmet\nemmew\nemmys\nemoji\nemong\nemote\nemove\nempts\nempty\nemule\nemure\nemyde\nemyds\nenact\nenarm\nenate\nended\nender\nendew\nendow\nendue\nenema\nenemy\nenews\nenfix\neniac\nenjoy\nenlit\nenmew\nennog\nennui\nenoki\nenols\nenorm\nenows\nenrol\nensew\nensky\nensue\nenter\nentia\nentre\nentry\nenure\nenurn\nenvoi\nenvoy\nenzym\neolid\neorls\neosin\nepact\nepees\nepena\nepene\nephah\nephas\nephod\nephor\nepics\nepoch\nepode\nepopt\nepoxy\neppie\nepris\nequal\neques\nequid\nequip\nerase\nerbia\nerect\nerevs\nergon\nergos\nergot\nerhus\nerica\nerick\nerics\nering\nerned\nernes\nerode\nerose\nerred\nerror\nerses\neruct\nerugo\nerupt\neruvs\nerven\nervil\nescar\nescot\nesile\neskar\nesker\nesnes\nesrog\nessay\nesses\nester\nestoc\nestop\nestro\netage\netape\netats\netens\nethal\nether\nethic\nethne\nethos\nethyl\netics\netnas\netrog\nettin\nettle\netude\netuis\netwee\netyma\neughs\neuked\neupad\neuros\neusol\nevade\nevegs\nevens\nevent\nevert\nevery\nevets\nevhoe\nevict\nevils\nevite\nevohe\nevoke\newers\newest\newhow\newked\nexact\nexalt\nexams\nexcel\nexeat\nexecs\nexeem\nexeme\nexert\nexfil\nexier\nexies\nexile\nexine\nexing\nexist\nexite\nexits\nexode\nexome\nexons\nexpat\nexpel\nexpos\nextol\nextra\nexude\nexuls\nexult\nexurb\neyass\neyers\neying\neyots\neyras\neyres\neyrie\neyrir\nezine\nfabbo\nfabby\nfable\nfaced\nfacer\nfaces\nfacet\nfacey\nfacia\nfacie\nfacta\nfacto\nfacts\nfacty\nfaddy\nfaded\nfader\nfades\nfadge\nfados\nfaena\nfaery\nfaffs\nfaffy\nfaggy\nfagin\nfagot\nfaiks\nfails\nfaine\nfains\nfaint\nfaire\nfairs\nfairy\nfaith\nfaked\nfaker\nfakes\nfakey\nfakie\nfakir\nfalaj\nfales\nfalls\nfalse\nfalsy\nfamed\nfames\nfanal\nfancy\nfands\nfanes\nfanga\nfango\nfangs\nfanks\nfanny\nfanon\nfanos\nfanum\nfaqir\nfarad\nfarce\nfarci\nfarcy\nfards\nfared\nfarer\nfares\nfarle\nfarls\nfarms\nfaros\nfarro\nfarse\nfarts\nfasci\nfasti\nfasts\nfatal\nfated\nfates\nfatly\nfatso\nfatty\nfatwa\nfauch\nfaugh\nfauld\nfault\nfauna\nfauns\nfaurd\nfaute\nfauts\nfauve\nfavas\nfavel\nfaver\nfaves\nfavor\nfavus\nfawns\nfawny\nfaxed\nfaxes\nfayed\nfayer\nfayne\nfayre\nfazed\nfazes\nfeals\nfeard\nfeare\nfears\nfeart\nfease\nfeast\nfeats\nfeaze\nfecal\nfeces\nfecht\nfecit\nfecks\nfedai\nfedex\nfeebs\nfeeds\nfeels\nfeely\nfeens\nfeers\nfeese\nfeeze\nfehme\nfeign\nfeint\nfeist\nfelch\nfelid\nfelix\nfella\nfells\nfelly\nfelon\nfelts\nfelty\nfemal\nfemes\nfemic\nfemme\nfemmy\nfemur\nfence\nfends\nfendy\nfenis\nfenks\nfenny\nfents\nfeods\nfeoff\nferal\nferer\nferes\nferia\nferly\nfermi\nferms\nferns\nferny\nferox\nferry\nfesse\nfesta\nfests\nfesty\nfetal\nfetas\nfetch\nfeted\nfetes\nfetid\nfetor\nfetta\nfetts\nfetus\nfetwa\nfeuar\nfeuds\nfeued\nfever\nfewer\nfeyed\nfeyer\nfeyly\nfezes\nfezzy\nfiars\nfiats\nfiber\nfibre\nfibro\nfices\nfiche\nfichu\nficin\nficos\nficta\nficus\nfides\nfidge\nfidos\nfidus\nfiefs\nfield\nfiend\nfient\nfiere\nfieri\nfiers\nfiery\nfiest\nfifed\nfifer\nfifes\nfifis\nfifth\nfifty\nfiggy\nfight\nfigos\nfiked\nfikes\nfilar\nfilch\nfiled\nfiler\nfiles\nfilet\nfilii\nfilks\nfille\nfillo\nfills\nfilly\nfilmi\nfilms\nfilmy\nfilon\nfilos\nfilth\nfilum\nfinal\nfinca\nfinch\nfinds\nfined\nfiner\nfines\nfinis\nfinks\nfinny\nfinos\nfiord\nfiqhs\nfique\nfired\nfirer\nfires\nfirie\nfirks\nfirma\nfirms\nfirni\nfirns\nfirry\nfirst\nfirth\nfiscs\nfisho\nfishy\nfisks\nfists\nfisty\nfitch\nfitly\nfitna\nfitte\nfitts\nfiver\nfives\nfixed\nfixer\nfixes\nfixie\nfixit\nfizzy\nfjeld\nfjord\nflabs\nflack\nflaff\nflags\nflail\nflair\nflake\nflaks\nflaky\nflame\nflamm\nflams\nflamy\nflane\nflank\nflans\nflaps\nflare\nflary\nflash\nflask\nflats\nflava\nflawn\nflaws\nflawy\nflaxy\nflays\nfleam\nfleas\nfleck\nfleek\nfleer\nflees\nfleet\nflegs\nfleme\nflesh\nfleur\nflews\nflexi\nflexo\nfleys\nflick\nflics\nflied\nflier\nflies\nflimp\nflims\nfling\nflint\nflips\nflirs\nflirt\nflisk\nflite\nflits\nflitt\nfloat\nflobs\nflock\nflocs\nfloes\nflogs\nflong\nflood\nfloor\nflops\nflora\nflore\nflors\nflory\nflosh\nfloss\nflota\nflote\nflour\nflout\nflown\nflows\nflowy\nflubs\nflued\nflues\nfluey\nfluff\nfluid\nfluke\nfluky\nflume\nflump\nflung\nflunk\nfluor\nflurr\nflush\nflute\nfluty\nfluyt\nflyby\nflyer\nflyin\nflype\nflyte\nfnarr\nfoals\nfoams\nfoamy\nfocal\nfocus\nfoehn\nfogey\nfoggy\nfogie\nfogle\nfogos\nfogou\nfohns\nfoids\nfoils\nfoins\nfoist\nfolds\nfoley\nfolia\nfolic\nfolie\nfolio\nfolks\nfolky\nfolly\nfomes\nfonda\nfonds\nfondu\nfones\nfonio\nfonly\nfonts\nfoods\nfoody\nfools\nfoots\nfooty\nforam\nforay\nforbs\nforby\nforce\nfordo\nfords\nforel\nfores\nforex\nforge\nforgo\nforks\nforky\nforma\nforme\nforms\nforte\nforth\nforts\nforty\nforum\nforza\nforze\nfossa\nfosse\nfouat\nfouds\nfouer\nfouet\nfoule\nfouls\nfound\nfount\nfours\nfouth\nfovea\nfowls\nfowth\nfoxed\nfoxes\nfoxie\nfoyer\nfoyle\nfoyne\nfrabs\nfrack\nfract\nfrags\nfrail\nfraim\nfrais\nframe\nfranc\nfrank\nfrape\nfraps\nfrass\nfrate\nfrati\nfrats\nfraud\nfraus\nfrays\nfreak\nfreed\nfreer\nfrees\nfreet\nfreit\nfremd\nfrena\nfreon\nfrere\nfresh\nfrets\nfriar\nfribs\nfried\nfrier\nfries\nfrigs\nfrill\nfrise\nfrisk\nfrist\nfrita\nfrite\nfrith\nfrits\nfritt\nfritz\nfrize\nfrizz\nfrock\nfroes\nfrogs\nfromm\nfrond\nfrons\nfront\nfroom\nfrore\nfrorn\nfrory\nfrosh\nfrost\nfroth\nfrown\nfrows\nfrowy\nfroyo\nfroze\nfrugs\nfruit\nfrump\nfrush\nfrust\nfryer\nfubar\nfubby\nfubsy\nfucks\nfucus\nfuddy\nfudge\nfudgy\nfuels\nfuero\nfuffs\nfuffy\nfugal\nfuggy\nfugie\nfugio\nfugis\nfugle\nfugly\nfugue\nfugus\nfujis\nfulla\nfulls\nfully\nfulth\nfulwa\nfumed\nfumer\nfumes\nfumet\nfunda\nfundi\nfundo\nfunds\nfundy\nfungi\nfungo\nfungs\nfunic\nfunis\nfunks\nfunky\nfunny\nfunsy\nfunts\nfural\nfuran\nfurca\nfurls\nfurol\nfuror\nfuros\nfurrs\nfurry\nfurth\nfurze\nfurzy\nfused\nfusee\nfusel\nfuses\nfusil\nfusks\nfussy\nfusts\nfusty\nfuton\nfuzed\nfuzee\nfuzes\nfuzil\nfuzzy\nfyces\nfyked\nfykes\nfyles\nfyrds\nfytte\ngabba\ngabby\ngable\ngaddi\ngades\ngadge\ngadgy\ngadid\ngadis\ngadje\ngadjo\ngadso\ngaffe\ngaffs\ngaged\ngager\ngages\ngaids\ngaily\ngains\ngairs\ngaita\ngaits\ngaitt\ngajos\ngalah\ngalas\ngalax\ngalea\ngaled\ngales\ngalia\ngalis\ngalls\ngally\ngalop\ngalut\ngalvo\ngamas\ngamay\ngamba\ngambe\ngambo\ngambs\ngamed\ngamer\ngames\ngamey\ngamic\ngamin\ngamma\ngamme\ngammy\ngamps\ngamut\nganch\ngandy\nganef\nganev\ngangs\nganja\nganks\nganof\ngants\ngaols\ngaped\ngaper\ngapes\ngapos\ngappy\ngaram\ngarba\ngarbe\ngarbo\ngarbs\ngarda\ngarde\ngares\ngaris\ngarms\ngarni\ngarre\ngarri\ngarth\ngarum\ngases\ngashy\ngasps\ngaspy\ngassy\ngasts\ngatch\ngated\ngater\ngates\ngaths\ngator\ngauch\ngaucy\ngauds\ngaudy\ngauge\ngauje\ngault\ngaums\ngaumy\ngaunt\ngaups\ngaurs\ngauss\ngauze\ngauzy\ngavel\ngavot\ngawcy\ngawds\ngawks\ngawky\ngawps\ngawsy\ngayal\ngayer\ngayly\ngazal\ngazar\ngazed\ngazer\ngazes\ngazon\ngazoo\ngeals\ngeans\ngeare\ngears\ngeasa\ngeats\ngebur\ngecko\ngecks\ngeeks\ngeeky\ngeeps\ngeese\ngeest\ngeist\ngeits\ngelds\ngelee\ngelid\ngelly\ngelts\ngemel\ngemma\ngemmy\ngemot\ngenae\ngenal\ngenas\ngenes\ngenet\ngenic\ngenie\ngenii\ngenin\ngenio\ngenip\ngenny\ngenoa\ngenom\ngenre\ngenro\ngents\ngenty\ngenua\ngenus\ngeode\ngeoid\ngerah\ngerbe\ngeres\ngerle\ngerms\ngermy\ngerne\ngesse\ngesso\ngeste\ngests\ngetas\ngetup\ngeums\ngeyan\ngeyer\nghast\nghats\nghaut\nghazi\nghees\nghest\nghost\nghoul\nghusl\nghyll\ngiant\ngibed\ngibel\ngiber\ngibes\ngibli\ngibus\ngiddy\ngifts\ngigas\ngighe\ngigot\ngigue\ngilas\ngilds\ngilet\ngilia\ngills\ngilly\ngilpy\ngilts\ngimel\ngimme\ngimps\ngimpy\nginch\nginga\nginge\ngings\nginks\nginny\nginzo\ngipon\ngippo\ngippy\ngipsy\ngirds\ngirlf\ngirls\ngirly\ngirns\ngiron\ngiros\ngirrs\ngirsh\ngirth\ngirts\ngismo\ngisms\ngists\ngitch\ngites\ngiust\ngived\ngiven\ngiver\ngives\ngizmo\nglace\nglade\nglads\nglady\nglaik\nglair\nglamp\nglams\ngland\nglans\nglare\nglary\nglass\nglatt\nglaum\nglaur\nglaze\nglazy\ngleam\nglean\ngleba\nglebe\ngleby\nglede\ngleds\ngleed\ngleek\nglees\ngleet\ngleis\nglens\nglent\ngleys\nglial\nglias\nglibs\nglide\ngliff\nglift\nglike\nglime\nglims\nglint\nglisk\nglits\nglitz\ngloam\ngloat\nglobe\nglobi\nglobs\ngloby\nglode\nglogg\ngloms\ngloom\ngloop\nglops\nglory\ngloss\nglost\nglout\nglove\nglows\nglowy\ngloze\nglued\ngluer\nglues\ngluey\nglugg\nglugs\nglume\nglums\ngluon\nglute\ngluts\nglyph\ngnapi\ngnarl\ngnarr\ngnars\ngnash\ngnats\ngnawn\ngnaws\ngnome\ngnows\ngoads\ngoafs\ngoaft\ngoals\ngoary\ngoats\ngoaty\ngoave\ngoban\ngobar\ngobbe\ngobbi\ngobbo\ngobby\ngobis\ngobos\ngodet\ngodly\ngodso\ngoels\ngoers\ngoest\ngoeth\ngoety\ngofer\ngoffs\ngogga\ngogos\ngoier\ngoing\ngojis\ngokes\ngolds\ngoldy\ngolem\ngoles\ngolfs\ngolly\ngolpe\ngolps\ngombo\ngomer\ngompa\ngonad\ngonch\ngonef\ngoner\ngongs\ngonia\ngonif\ngonks\ngonna\ngonof\ngonys\ngonzo\ngooby\ngoodo\ngoods\ngoody\ngooey\ngoofs\ngoofy\ngoogs\ngooks\ngooky\ngoold\ngools\ngooly\ngoomy\ngoons\ngoony\ngoops\ngoopy\ngoors\ngoory\ngoose\ngoosy\ngopak\ngopik\ngoral\ngoras\ngoray\ngorbs\ngordo\ngored\ngores\ngorge\ngoris\ngorms\ngormy\ngorps\ngorse\ngorsy\ngosht\ngosse\ngotch\ngoths\ngothy\ngotta\ngouch\ngouge\ngouks\ngoura\ngourd\ngouts\ngouty\ngoved\ngoves\ngowan\ngowds\ngowfs\ngowks\ngowls\ngowns\ngoxes\ngoyim\ngoyle\ngraal\ngrabs\ngrace\ngrade\ngrads\ngraff\ngraft\ngrail\ngrain\ngraip\ngrama\ngrame\ngramp\ngrams\ngrana\ngrand\ngrano\ngrans\ngrant\ngrape\ngraph\ngrapy\ngrasp\ngrass\ngrata\ngrate\ngrats\ngrave\ngravs\ngravy\ngrays\ngraze\ngreat\ngrebe\ngrebo\ngrece\ngreed\ngreek\ngreen\ngrees\ngreet\ngrege\ngrego\ngrein\ngrens\ngreps\ngrese\ngreve\ngrews\ngreys\ngrice\ngride\ngrids\ngrief\ngriff\ngrift\ngrigs\ngrike\ngrill\ngrime\ngrimy\ngrind\ngrins\ngriot\ngripe\ngrips\ngript\ngripy\ngrise\ngrist\ngrisy\ngrith\ngrits\ngrize\ngroan\ngroat\ngrody\ngrogs\ngroin\ngroks\ngroma\ngroms\ngrone\ngroof\ngroom\ngrope\ngross\ngrosz\ngrots\ngrouf\ngroup\ngrout\ngrove\ngrovy\ngrowl\ngrown\ngrows\ngrrls\ngrrrl\ngrubs\ngrued\ngruel\ngrues\ngrufe\ngruff\ngrume\ngrump\ngrund\ngrunt\ngryce\ngryde\ngryke\ngrype\ngrypt\nguaco\nguana\nguano\nguans\nguard\nguars\nguava\ngubba\ngucks\ngucky\ngudes\nguess\nguest\nguffs\ngugas\nguggl\nguide\nguido\nguids\nguild\nguile\nguilt\nguimp\nguiro\nguise\ngulab\ngulag\ngular\ngulas\ngulch\ngules\ngulet\ngulfs\ngulfy\ngulls\ngully\ngulph\ngulps\ngulpy\ngumbo\ngumma\ngummi\ngummy\ngumps\ngunas\ngundi\ngundy\ngunge\ngungy\ngunks\ngunky\ngunny\nguppy\nguqin\ngurdy\ngurge\ngurks\ngurls\ngurly\ngurns\ngurry\ngursh\ngurus\ngushy\ngusla\ngusle\ngusli\ngussy\ngusto\ngusts\ngusty\ngutsy\ngutta\ngutty\nguyed\nguyle\nguyot\nguyse\ngwine\ngyals\ngyans\ngybed\ngybes\ngyeld\ngymps\ngynae\ngynie\ngynny\ngynos\ngyoza\ngypes\ngypos\ngyppo\ngyppy\ngypsy\ngyral\ngyred\ngyres\ngyron\ngyros\ngyrus\ngytes\ngyved\ngyver\ngyves\nhaafs\nhaars\nhaats\nhabit\nhable\nhabus\nhacek\nhacks\nhacky\nhadal\nhaded\nhades\nhadji\nhadst\nhaems\nhaere\nhaets\nhaffs\nhafiz\nhafta\nhafts\nhaggs\nhaham\nhahas\nhaick\nhaika\nhaiks\nhaiku\nhails\nhaily\nhains\nhaint\nhairs\nhairy\nhaith\nhajes\nhajis\nhajji\nhakam\nhakas\nhakea\nhakes\nhakim\nhakus\nhalal\nhaldi\nhaled\nhaler\nhales\nhalfa\nhalfs\nhalid\nhallo\nhalls\nhalma\nhalms\nhalon\nhalos\nhalse\nhalsh\nhalts\nhalva\nhalve\nhalwa\nhamal\nhamba\nhamed\nhamel\nhames\nhammy\nhamza\nhanap\nhance\nhanch\nhandi\nhands\nhandy\nhangi\nhangs\nhanks\nhanky\nhansa\nhanse\nhants\nhaole\nhaoma\nhapas\nhapax\nhaply\nhappi\nhappy\nhapus\nharam\nhards\nhardy\nhared\nharem\nhares\nharim\nharks\nharls\nharms\nharns\nharos\nharps\nharpy\nharry\nharsh\nharts\nhashy\nhasks\nhasps\nhasta\nhaste\nhasty\nhatch\nhated\nhater\nhates\nhatha\nhathi\nhatty\nhauds\nhaufs\nhaugh\nhaugo\nhauld\nhaulm\nhauls\nhault\nhauns\nhaunt\nhause\nhaute\nhavan\nhavel\nhaven\nhaver\nhaves\nhavoc\nhawed\nhawks\nhawms\nhawse\nhayed\nhayer\nhayey\nhayle\nhazan\nhazed\nhazel\nhazer\nhazes\nhazle\nheads\nheady\nheald\nheals\nheame\nheaps\nheapy\nheard\nheare\nhears\nheart\nheast\nheath\nheats\nheaty\nheave\nheavy\nheben\nhebes\nhecht\nhecks\nheder\nhedge\nhedgy\nheeds\nheedy\nheels\nheeze\nhefte\nhefts\nhefty\nheiau\nheids\nheigh\nheils\nheirs\nheist\nhejab\nhejra\nheled\nheles\nhelio\nhelix\nhella\nhello\nhells\nhelly\nhelms\nhelos\nhelot\nhelps\nhelve\nhemal\nhemes\nhemic\nhemin\nhemps\nhempy\nhence\nhench\nhends\nhenge\nhenna\nhenny\nhenry\nhents\nhepar\nherbs\nherby\nherds\nheres\nherls\nherma\nherms\nherns\nheron\nheros\nherps\nherry\nherse\nhertz\nherye\nhesps\nhests\nhetes\nheths\nheuch\nheugh\nhevea\nhevel\nhewed\nhewer\nhewgh\nhexad\nhexed\nhexer\nhexes\nhexyl\nheyed\nhiant\nhibas\nhicks\nhided\nhider\nhides\nhiems\nhifis\nhighs\nhight\nhijab\nhijra\nhiked\nhiker\nhikes\nhikoi\nhilar\nhilch\nhillo\nhills\nhilly\nhilsa\nhilts\nhilum\nhilus\nhimbo\nhinau\nhinds\nhinge\nhings\nhinky\nhinny\nhints\nhiois\nhiped\nhiper\nhipes\nhiply\nhippo\nhippy\nhired\nhiree\nhirer\nhires\nhissy\nhists\nhitch\nhithe\nhived\nhiver\nhives\nhizen\nhoach\nhoaed\nhoagy\nhoard\nhoars\nhoary\nhoast\nhobby\nhobos\nhocks\nhocus\nhodad\nhodja\nhoers\nhogan\nhogen\nhoggs\nhoghs\nhogoh\nhogos\nhohed\nhoick\nhoied\nhoiks\nhoing\nhoise\nhoist\nhokas\nhoked\nhokes\nhokey\nhokis\nhokku\nhokum\nholds\nholed\nholes\nholey\nholks\nholla\nhollo\nholly\nholme\nholms\nholon\nholos\nholts\nhomas\nhomed\nhomer\nhomes\nhomey\nhomie\nhomme\nhomos\nhonan\nhonda\nhonds\nhoned\nhoner\nhones\nhoney\nhongi\nhongs\nhonks\nhonky\nhonor\nhooch\nhoods\nhoody\nhooey\nhoofs\nhoogo\nhooha\nhooka\nhooks\nhooky\nhooly\nhoons\nhoops\nhoord\nhoors\nhoosh\nhoots\nhooty\nhoove\nhopak\nhoped\nhoper\nhopes\nhoppy\nhorah\nhoral\nhoras\nhorde\nhoris\nhorks\nhorme\nhorns\nhorny\nhorse\nhorst\nhorsy\nhosed\nhosel\nhosen\nhoser\nhoses\nhosey\nhosta\nhosts\nhotch\nhotel\nhoten\nhotis\nhotly\nhotte\nhotty\nhouff\nhoufs\nhough\nhound\nhouri\nhours\nhouse\nhouts\nhovea\nhoved\nhovel\nhoven\nhover\nhoves\nhoway\nhowbe\nhowdy\nhowes\nhowff\nhowfs\nhowks\nhowls\nhowre\nhowso\nhowto\nhoxed\nhoxes\nhoyas\nhoyed\nhoyle\nhubba\nhubby\nhucks\nhudna\nhudud\nhuers\nhuffs\nhuffy\nhuger\nhuggy\nhuhus\nhuias\nhuies\nhukou\nhulas\nhules\nhulks\nhulky\nhullo\nhulls\nhully\nhuman\nhumas\nhumfs\nhumic\nhumid\nhumor\nhumph\nhumps\nhumpy\nhumus\nhunch\nhundo\nhunks\nhunky\nhunts\nhurds\nhurls\nhurly\nhurra\nhurry\nhurst\nhurts\nhurty\nhushy\nhusks\nhusky\nhusos\nhussy\nhutch\nhutia\nhuzza\nhuzzy\nhwyls\nhydel\nhydra\nhydro\nhyena\nhyens\nhygge\nhying\nhykes\nhylas\nhyleg\nhyles\nhylic\nhymen\nhymns\nhynde\nhyoid\nhyped\nhyper\nhypes\nhypha\nhyphy\nhypos\nhyrax\nhyson\nhythe\niambi\niambs\nibrik\nicers\niched\niches\nichor\nicier\nicily\nicing\nicker\nickle\nicons\nictal\nictic\nictus\nidant\niddah\niddat\niddut\nideal\nideas\nidees\nident\nidiom\nidiot\nidled\nidler\nidles\nidlis\nidola\nidols\nidyll\nidyls\niftar\nigapo\nigged\nigloo\niglus\nignis\nihram\niiwis\nikans\nikats\nikons\nileac\nileal\nileum\nileus\niliac\niliad\nilial\nilium\niller\nillth\nimage\nimago\nimagy\nimams\nimari\nimaum\nimbar\nimbed\nimbos\nimbue\nimide\nimido\nimids\nimine\nimino\nimlis\nimmew\nimmit\nimmix\nimped\nimpel\nimpis\nimply\nimpot\nimpro\nimshi\nimshy\ninane\ninapt\ninarm\ninbox\ninbye\nincas\nincel\nincle\nincog\nincur\nincus\nincut\nindew\nindex\nindia\nindie\nindol\nindow\nindri\nindue\ninept\ninerm\ninert\ninfer\ninfix\ninfos\ninfra\ningan\ningle\ningot\ninion\ninked\ninker\ninkle\ninlay\ninlet\ninned\ninner\ninnie\ninnit\ninorb\ninput\ninros\ninrun\ninsee\ninset\ninspo\nintel\ninter\nintil\nintis\nintra\nintro\ninula\ninure\ninurn\ninust\ninvar\ninver\ninwit\niodic\niodid\niodin\nionic\nioras\niotas\nippon\nirade\nirate\nirids\niring\nirked\niroko\nirone\nirons\nirony\nisbas\nishes\nisled\nisles\nislet\nisnae\nissei\nissue\nistle\nitchy\nitems\nither\nivied\nivies\nivory\nixias\nixnay\nixora\nixtle\nizard\nizars\nizzat\njaaps\njabot\njacal\njacet\njacks\njacky\njaded\njades\njafas\njaffa\njagas\njager\njaggs\njaggy\njagir\njagra\njails\njaker\njakes\njakey\njakie\njalap\njaleo\njalop\njambe\njambo\njambs\njambu\njames\njammy\njamon\njamun\njanes\njanky\njanns\njanny\njanty\njapan\njaped\njaper\njapes\njarks\njarls\njarps\njarta\njarul\njasey\njaspe\njasps\njatha\njatis\njatos\njauks\njaune\njaunt\njaups\njavas\njavel\njawan\njawed\njawns\njaxie\njazzy\njeans\njeats\njebel\njedis\njeels\njeely\njeeps\njeera\njeers\njeeze\njefes\njeffs\njehad\njehus\njelab\njello\njells\njelly\njembe\njemmy\njenny\njeons\njerid\njerks\njerky\njerry\njesse\njessy\njests\njesus\njetee\njetes\njeton\njetty\njeune\njewed\njewel\njewie\njhala\njheel\njhils\njiaos\njibba\njibbs\njibed\njiber\njibes\njiffs\njiffy\njiggy\njigot\njihad\njills\njilts\njimmy\njimpy\njingo\njings\njinks\njinne\njinni\njinns\njirds\njirga\njirre\njisms\njitis\njitty\njived\njiver\njives\njivey\njnana\njobed\njobes\njocko\njocks\njocky\njocos\njodel\njoeys\njohns\njoins\njoint\njoist\njoked\njoker\njokes\njokey\njokol\njoled\njoles\njolie\njollo\njolls\njolly\njolts\njolty\njomon\njomos\njones\njongs\njonty\njooks\njoram\njorts\njorum\njotas\njotty\njotun\njoual\njougs\njouks\njoule\njours\njoust\njowar\njowed\njowls\njowly\njoyed\njubas\njubes\njucos\njudas\njudge\njudgy\njudos\njugal\njugum\njuice\njuicy\njujus\njuked\njukes\njukus\njulep\njulia\njumar\njumbo\njumby\njumps\njumpy\njunco\njunks\njunky\njunta\njunto\njupes\njupon\njural\njurat\njurel\njures\njuris\njuror\njuste\njusts\njutes\njutty\njuves\njuvie\nkaama\nkabab\nkabar\nkabob\nkacha\nkacks\nkadai\nkades\nkadis\nkafir\nkagos\nkagus\nkahal\nkaiak\nkaids\nkaies\nkaifs\nkaika\nkaiks\nkails\nkaims\nkaing\nkains\nkajal\nkakas\nkakis\nkalam\nkalas\nkales\nkalif\nkalis\nkalpa\nkalua\nkamas\nkames\nkamik\nkamis\nkamme\nkanae\nkanal\nkanas\nkanat\nkandy\nkaneh\nkanes\nkanga\nkangs\nkanji\nkants\nkanzu\nkaons\nkapai\nkapas\nkapha\nkaphs\nkapok\nkapow\nkappa\nkapur\nkapus\nkaput\nkarai\nkaras\nkarat\nkaree\nkarez\nkarks\nkarma\nkarns\nkaroo\nkaros\nkarri\nkarst\nkarsy\nkarts\nkarzy\nkasha\nkasme\nkatal\nkatas\nkatis\nkatti\nkaugh\nkauri\nkauru\nkaury\nkaval\nkavas\nkawas\nkawau\nkawed\nkayak\nkayle\nkayos\nkazis\nkazoo\nkbars\nkcals\nkeaki\nkebab\nkebar\nkebob\nkecks\nkedge\nkedgy\nkeech\nkeefs\nkeeks\nkeels\nkeema\nkeeno\nkeens\nkeeps\nkeets\nkeeve\nkefir\nkehua\nkeirs\nkelep\nkelim\nkells\nkelly\nkelps\nkelpy\nkelts\nkelty\nkembo\nkembs\nkemps\nkempt\nkempy\nkenaf\nkench\nkendo\nkenos\nkente\nkents\nkepis\nkerbs\nkerel\nkerfs\nkerky\nkerma\nkerne\nkerns\nkeros\nkerry\nkerve\nkesar\nkests\nketas\nketch\nketes\nketol\nkevel\nkevil\nkexes\nkeyed\nkeyer\nkhadi\nkhads\nkhafs\nkhaki\nkhana\nkhans\nkhaph\nkhats\nkhaya\nkhazi\nkheda\nkheer\nkheth\nkhets\nkhirs\nkhoja\nkhors\nkhoum\nkhuds\nkhula\nkhyal\nkiaat\nkiack\nkiaki\nkiang\nkiasu\nkibbe\nkibbi\nkibei\nkibes\nkibla\nkicks\nkicky\nkiddo\nkiddy\nkidel\nkideo\nkidge\nkiefs\nkiers\nkieve\nkievs\nkight\nkikay\nkikes\nkikoi\nkiley\nkilig\nkilim\nkills\nkilns\nkilos\nkilps\nkilts\nkilty\nkimbo\nkimet\nkinas\nkinda\nkinds\nkindy\nkines\nkings\nkingy\nkinin\nkinks\nkinky\nkinos\nkiore\nkiosk\nkipah\nkipas\nkipes\nkippa\nkipps\nkipsy\nkirby\nkirks\nkirns\nkirri\nkisan\nkissy\nkists\nkitab\nkited\nkiter\nkites\nkithe\nkiths\nkitke\nkitty\nkitul\nkivas\nkiwis\nklang\nklaps\nklett\nklick\nklieg\nkliks\nklong\nkloof\nkluge\nklutz\nknack\nknags\nknaps\nknarl\nknars\nknaur\nknave\nknawe\nknead\nkneed\nkneel\nknees\nknell\nknelt\nknick\nknife\nknish\nknits\nknive\nknobs\nknock\nknoll\nknoop\nknops\nknosp\nknots\nknoud\nknout\nknowd\nknowe\nknown\nknows\nknubs\nknule\nknurl\nknurr\nknurs\nknuts\nkoala\nkoans\nkoaps\nkoban\nkobos\nkoels\nkoffs\nkofta\nkogal\nkohas\nkohen\nkohls\nkoine\nkoiwi\nkojis\nkokam\nkokas\nkoker\nkokra\nkokum\nkolas\nkolos\nkombi\nkombu\nkonbu\nkondo\nkonks\nkooks\nkooky\nkoori\nkopek\nkophs\nkopje\nkoppa\nkorai\nkoran\nkoras\nkorat\nkores\nkoris\nkorma\nkoros\nkorun\nkorus\nkoses\nkotch\nkotos\nkotow\nkoura\nkraal\nkrabs\nkraft\nkrais\nkrait\nkrang\nkrans\nkranz\nkraut\nkrays\nkreef\nkreen\nkreep\nkreng\nkrewe\nkrill\nkriol\nkrona\nkrone\nkroon\nkrubi\nkrump\nkrunk\nksars\nkubie\nkudos\nkudus\nkudzu\nkufis\nkugel\nkuias\nkukri\nkukus\nkulak\nkulan\nkulas\nkulfi\nkumis\nkumys\nkunas\nkunds\nkuris\nkurre\nkurta\nkurus\nkusso\nkusti\nkutai\nkutas\nkutch\nkutis\nkutus\nkuyas\nkuzus\nkvass\nkvell\nkwaai\nkwela\nkwink\nkwirl\nkyack\nkyaks\nkyang\nkyars\nkyats\nkybos\nkydst\nkyles\nkylie\nkylin\nkylix\nkyloe\nkynde\nkynds\nkypes\nkyrie\nkytes\nkythe\nkyudo\nlaarf\nlaari\nlabda\nlabel\nlabia\nlabis\nlabne\nlabor\nlabra\nlaccy\nlaced\nlacer\nlaces\nlacet\nlacey\nlacis\nlacka\nlacks\nlacky\nladdu\nladdy\nladed\nladee\nladen\nlader\nlades\nladle\nladoo\nlaers\nlaevo\nlagan\nlagar\nlager\nlaggy\nlahal\nlahar\nlaich\nlaics\nlaide\nlaids\nlaigh\nlaika\nlaiks\nlaird\nlairs\nlairy\nlaith\nlaity\nlaked\nlaker\nlakes\nlakhs\nlakin\nlaksa\nlaldy\nlalls\nlamas\nlambs\nlamby\nlamed\nlamer\nlames\nlamia\nlammy\nlamps\nlanai\nlanas\nlance\nlanch\nlande\nlands\nlaned\nlanes\nlanks\nlanky\nlants\nlapas\nlapel\nlapin\nlapis\nlapje\nlappa\nlappy\nlapse\nlarch\nlards\nlardy\nlaree\nlares\nlarfs\nlarga\nlarge\nlargo\nlaris\nlarks\nlarky\nlarns\nlarnt\nlarum\nlarva\nlased\nlaser\nlases\nlassi\nlasso\nlassu\nlassy\nlasts\nlatah\nlatch\nlated\nlaten\nlater\nlatex\nlathe\nlathi\nlaths\nlathy\nlatke\nlatte\nlatus\nlauan\nlauch\nlaude\nlauds\nlaufs\nlaugh\nlaund\nlaura\nlaval\nlavas\nlaved\nlaver\nlaves\nlavra\nlavvy\nlawed\nlawer\nlawin\nlawks\nlawns\nlawny\nlawsy\nlaxed\nlaxer\nlaxes\nlaxly\nlayby\nlayed\nlayer\nlayin\nlayup\nlazar\nlazed\nlazes\nlazos\nlazzi\nlazzo\nleach\nleads\nleady\nleafs\nleafy\nleaks\nleaky\nleams\nleans\nleant\nleany\nleaps\nleapt\nleare\nlearn\nlears\nleary\nlease\nleash\nleast\nleats\nleave\nleavy\nleaze\nleben\nleccy\nleche\nledes\nledge\nledgy\nledum\nleear\nleech\nleeks\nleeps\nleers\nleery\nleese\nleets\nleeze\nlefte\nlefts\nlefty\nlegal\nleger\nleges\nlegge\nleggo\nleggy\nlegit\nlegno\nlehrs\nlehua\nleirs\nleish\nleman\nlemed\nlemel\nlemes\nlemma\nlemme\nlemon\nlemur\nlends\nlenes\nlengs\nlenis\nlenos\nlense\nlenti\nlento\nleone\nlepak\nleper\nlepid\nlepra\nlepta\nlered\nleres\nlerps\nlesbo\nleses\nlesos\nlests\nletch\nlethe\nletty\nletup\nleuch\nleuco\nleuds\nleugh\nlevas\nlevee\nlevel\nlever\nleves\nlevin\nlevis\nlewis\nlexes\nlexis\nlezes\nlezza\nlezzo\nlezzy\nliana\nliane\nliang\nliard\nliars\nliart\nlibel\nliber\nlibor\nlibra\nlibre\nlibri\nlicet\nlichi\nlicht\nlicit\nlicks\nlidar\nlidos\nliefs\nliege\nliens\nliers\nlieus\nlieve\nlifer\nlifes\nlifey\nlifts\nligan\nliger\nligge\nlight\nligne\nliked\nliken\nliker\nlikes\nlikin\nlilac\nlills\nlilos\nlilts\nlilty\nliman\nlimas\nlimax\nlimba\nlimbi\nlimbo\nlimbs\nlimby\nlimed\nlimen\nlimes\nlimey\nlimit\nlimma\nlimns\nlimos\nlimpa\nlimps\nlinac\nlinch\nlinds\nlindy\nlined\nlinen\nliner\nlines\nliney\nlinga\nlingo\nlings\nlingy\nlinin\nlinks\nlinky\nlinns\nlinny\nlinos\nlints\nlinty\nlinum\nlinux\nlions\nlipas\nlipes\nlipid\nlipin\nlipos\nlippy\nliras\nlirks\nlirot\nlises\nlisks\nlisle\nlisps\nlists\nlitai\nlitas\nlited\nlitem\nliter\nlites\nlithe\nlitho\nliths\nlitie\nlitre\nlived\nliven\nliver\nlives\nlivid\nlivor\nlivre\nliwaa\nliwas\nllama\nllano\nloach\nloads\nloafs\nloams\nloamy\nloans\nloast\nloath\nloave\nlobar\nlobby\nlobed\nlobes\nlobos\nlobus\nlocal\nloche\nlochs\nlochy\nlocie\nlocis\nlocks\nlocky\nlocos\nlocum\nlocus\nloden\nlodes\nlodge\nloess\nlofts\nlofty\nlogan\nloges\nloggy\nlogia\nlogic\nlogie\nlogin\nlogoi\nlogon\nlogos\nlohan\nloids\nloins\nloipe\nloirs\nlokes\nlokey\nlokum\nlolas\nloled\nlollo\nlolls\nlolly\nlolog\nlolos\nlomas\nlomed\nlomes\nloner\nlonga\nlonge\nlongs\nlooby\nlooed\nlooey\nloofa\nloofs\nlooie\nlooks\nlooky\nlooms\nloons\nloony\nloops\nloopy\nloord\nloose\nloots\nloped\nloper\nlopes\nloppy\nloral\nloran\nlords\nlordy\nlorel\nlores\nloric\nloris\nlorry\nlosed\nlosel\nlosen\nloser\nloses\nlossy\nlotah\nlotas\nlotes\nlotic\nlotos\nlotsa\nlotta\nlotte\nlotto\nlotus\nloued\nlough\nlouie\nlouis\nlouma\nlound\nlouns\nloupe\nloups\nloure\nlours\nloury\nlouse\nlousy\nlouts\nlovat\nloved\nlovee\nlover\nloves\nlovey\nlovie\nlowan\nlowed\nlowen\nlower\nlowes\nlowly\nlownd\nlowne\nlowns\nlowps\nlowry\nlowse\nlowth\nlowts\nloxed\nloxes\nloyal\nlozen\nluach\nluaus\nlubed\nlubes\nlubra\nluces\nlucid\nlucks\nlucky\nlucre\nludes\nludic\nludos\nluffa\nluffs\nluged\nluger\nluges\nlulls\nlulus\nlumas\nlumbi\nlumen\nlumme\nlummy\nlumps\nlumpy\nlunar\nlunas\nlunch\nlunes\nlunet\nlunge\nlungi\nlungs\nlunks\nlunts\nlupin\nlupus\nlurch\nlured\nlurer\nlures\nlurex\nlurgi\nlurgy\nlurid\nlurks\nlurry\nlurve\nluser\nlushy\nlusks\nlusts\nlusty\nlusus\nlutea\nluted\nluter\nlutes\nluvvy\nluxed\nluxer\nluxes\nlweis\nlyams\nlyard\nlyart\nlyase\nlycea\nlycee\nlycra\nlying\nlymes\nlymph\nlynch\nlynes\nlyres\nlyric\nlysed\nlyses\nlysin\nlysis\nlysol\nlyssa\nlyted\nlytes\nlythe\nlytic\nlytta\nmaaed\nmaare\nmaars\nmaban\nmabes\nmacas\nmacaw\nmacca\nmaced\nmacer\nmaces\nmache\nmachi\nmacho\nmachs\nmacka\nmacks\nmacle\nmacon\nmacro\nmacte\nmadal\nmadam\nmadar\nmaddy\nmadge\nmadid\nmadly\nmados\nmadre\nmaedi\nmaerl\nmafia\nmafic\nmafts\nmagas\nmages\nmaggs\nmagic\nmagma\nmagna\nmagot\nmagus\nmahal\nmahem\nmahis\nmahoe\nmahrs\nmahua\nmahwa\nmaids\nmaiko\nmaiks\nmaile\nmaill\nmailo\nmails\nmaims\nmains\nmaire\nmairs\nmaise\nmaist\nmaize\nmajas\nmajat\nmajoe\nmajor\nmajos\nmakaf\nmakai\nmakan\nmakar\nmakee\nmaker\nmakes\nmakie\nmakis\nmakos\nmalae\nmalai\nmalam\nmalar\nmalas\nmalax\nmaleo\nmales\nmalic\nmalik\nmalis\nmalky\nmalls\nmalms\nmalmy\nmalts\nmalty\nmalus\nmalva\nmalwa\nmamak\nmamas\nmamba\nmambo\nmambu\nmamee\nmamey\nmamie\nmamil\nmamma\nmammy\nmanas\nmanat\nmandi\nmands\nmandy\nmaneb\nmaned\nmaneh\nmanes\nmanet\nmanga\nmange\nmangi\nmango\nmangs\nmangy\nmania\nmanic\nmanie\nmanis\nmanks\nmanky\nmanly\nmanna\nmanny\nmanoa\nmanor\nmanos\nmanse\nmanso\nmanta\nmante\nmanto\nmants\nmanty\nmanul\nmanus\nmanzo\nmapau\nmapes\nmaple\nmapou\nmappy\nmaqam\nmaqui\nmarae\nmarah\nmaral\nmaran\nmaras\nmaray\nmarch\nmarcs\nmards\nmardy\nmares\nmarga\nmarge\nmargo\nmargs\nmaria\nmarid\nmaril\nmarka\nmarks\nmarle\nmarls\nmarly\nmarma\nmarms\nmaron\nmaror\nmarra\nmarri\nmarry\nmarse\nmarsh\nmarts\nmarua\nmarvy\nmasas\nmased\nmaser\nmases\nmasha\nmashy\nmasks\nmason\nmassa\nmasse\nmassy\nmasts\nmasty\nmasur\nmasus\nmasut\nmatai\nmatch\nmated\nmater\nmates\nmatey\nmathe\nmaths\nmatin\nmatlo\nmatra\nmatsu\nmatte\nmatts\nmatty\nmatza\nmatzo\nmauby\nmauds\nmauka\nmaula\nmauls\nmaums\nmaumy\nmaund\nmaunt\nmauri\nmausy\nmauts\nmauve\nmauvy\nmauzy\nmaven\nmavie\nmavin\nmavis\nmawed\nmawks\nmawky\nmawla\nmawns\nmawps\nmawrs\nmaxed\nmaxes\nmaxim\nmaxis\nmayan\nmayas\nmaybe\nmayed\nmayor\nmayos\nmayst\nmazac\nmazak\nmazar\nmazas\nmazed\nmazel\nmazer\nmazes\nmazet\nmazey\nmazut\nmbari\nmbars\nmbila\nmbira\nmbret\nmbube\nmbuga\nmeads\nmeake\nmeaks\nmeals\nmealy\nmeane\nmeans\nmeant\nmeany\nmeare\nmease\nmeath\nmeats\nmeaty\nmebbe\nmebos\nmecca\nmecha\nmechs\nmecks\nmecum\nmedal\nmedia\nmedic\nmedii\nmedin\nmedle\nmeech\nmeeds\nmeeja\nmeeps\nmeers\nmeets\nmeffs\nmeids\nmeiko\nmeils\nmeins\nmeint\nmeiny\nmeism\nmeith\nmekka\nmelam\nmelas\nmelba\nmelch\nmelds\nmelee\nmeles\nmelic\nmelik\nmells\nmeloe\nmelon\nmelos\nmelts\nmelty\nmemes\nmemic\nmemos\nmenad\nmence\nmends\nmened\nmenes\nmenge\nmengs\nmenil\nmensa\nmense\nmensh\nmenta\nmento\nments\nmenus\nmeous\nmeows\nmerch\nmercs\nmercy\nmerde\nmerds\nmered\nmerel\nmerer\nmeres\nmerge\nmeril\nmeris\nmerit\nmerks\nmerle\nmerls\nmerry\nmerse\nmersk\nmesad\nmesal\nmesas\nmesca\nmesel\nmesem\nmeses\nmeshy\nmesia\nmesic\nmesne\nmeson\nmessy\nmesto\nmesyl\nmetal\nmetas\nmeted\nmeteg\nmetel\nmeter\nmetes\nmethi\nmetho\nmeths\nmethy\nmetic\nmetif\nmetis\nmetol\nmetre\nmetro\nmetta\nmeums\nmeuse\nmeved\nmeves\nmewed\nmewls\nmeynt\nmezes\nmezza\nmezze\nmezzo\nmgals\nmhorr\nmiais\nmiaou\nmiaow\nmiasm\nmiaul\nmicas\nmiche\nmichi\nmicht\nmicks\nmicky\nmicos\nmicra\nmicro\nmiddy\nmidge\nmidgy\nmidis\nmidst\nmiens\nmieux\nmieve\nmiffs\nmiffy\nmifty\nmiggs\nmight\nmigma\nmigod\nmihas\nmihis\nmikan\nmiked\nmikes\nmikos\nmikra\nmikva\nmilch\nmilds\nmiler\nmiles\nmilfs\nmilia\nmilko\nmilks\nmilky\nmille\nmills\nmilly\nmilor\nmilos\nmilpa\nmilts\nmilty\nmiltz\nmimed\nmimeo\nmimer\nmimes\nmimic\nmimis\nmimsy\nminae\nminar\nminas\nmince\nmincy\nmindi\nminds\nmined\nminer\nmines\nminge\nmingi\nmings\nmingy\nminim\nminis\nminke\nminks\nminny\nminor\nminos\nminse\nmints\nminty\nminus\nminxy\nmiraa\nmirah\nmirch\nmired\nmires\nmirex\nmirid\nmirin\nmirkn\nmirks\nmirky\nmirls\nmirly\nmiros\nmirrl\nmirrs\nmirth\nmirvs\nmirza\nmisal\nmisch\nmisdo\nmiser\nmises\nmisgo\nmisky\nmisls\nmisos\nmissa\nmissy\nmisto\nmists\nmisty\nmitas\nmitch\nmiter\nmites\nmitey\nmitie\nmitis\nmitre\nmitry\nmitta\nmitts\nmivey\nmivvy\nmixed\nmixen\nmixer\nmixes\nmixie\nmixis\nmixte\nmixup\nmiyas\nmizen\nmizes\nmizzy\nmmkay\nmneme\nmoais\nmoaky\nmoals\nmoana\nmoans\nmoany\nmoars\nmoats\nmobby\nmobed\nmobee\nmobes\nmobey\nmobie\nmoble\nmobos\nmocap\nmocha\nmochi\nmochs\nmochy\nmocks\nmocky\nmocos\nmocus\nmodal\nmodel\nmodem\nmoder\nmodes\nmodge\nmodii\nmodin\nmodoc\nmodom\nmodus\nmoeni\nmoers\nmofos\nmogar\nmogas\nmoggy\nmogos\nmogra\nmogue\nmogul\nmohar\nmohel\nmohos\nmohrs\nmohua\nmohur\nmoile\nmoils\nmoira\nmoire\nmoist\nmoits\nmoity\nmojos\nmoker\nmokes\nmokey\nmokis\nmokky\nmokos\nmokus\nmolal\nmolar\nmolas\nmolds\nmoldy\nmoled\nmoler\nmoles\nmoley\nmolie\nmolla\nmolle\nmollo\nmolls\nmolly\nmoloi\nmolos\nmolto\nmolts\nmolue\nmolvi\nmolys\nmomes\nmomie\nmomma\nmomme\nmommy\nmomos\nmompe\nmomus\nmonad\nmonal\nmonas\nmonde\nmondo\nmoner\nmoney\nmongo\nmongs\nmonic\nmonie\nmonks\nmonos\nmonpe\nmonte\nmonth\nmonty\nmoobs\nmooch\nmoods\nmoody\nmooed\nmooey\nmooks\nmoola\nmooli\nmools\nmooly\nmoong\nmooni\nmoons\nmoony\nmoops\nmoors\nmoory\nmoose\nmooth\nmoots\nmoove\nmoped\nmoper\nmopes\nmopey\nmoppy\nmopsy\nmopus\nmorae\nmorah\nmoral\nmoran\nmoras\nmorat\nmoray\nmoree\nmorel\nmores\nmorgy\nmoria\nmorin\nmormo\nmorna\nmorne\nmorns\nmoron\nmoror\nmorph\nmorra\nmorro\nmorse\nmorts\nmoruk\nmosed\nmoses\nmosey\nmosks\nmosso\nmossy\nmoste\nmosto\nmosts\nmoted\nmotel\nmoten\nmotes\nmotet\nmotey\nmoths\nmothy\nmotif\nmotis\nmoton\nmotor\nmotte\nmotto\nmotts\nmotty\nmotus\nmotza\nmouch\nmoues\nmoufs\nmould\nmoule\nmouls\nmoult\nmouly\nmound\nmount\nmoups\nmourn\nmouse\nmoust\nmousy\nmouth\nmoved\nmover\nmoves\nmovie\nmowas\nmowed\nmower\nmowie\nmowra\nmoxas\nmoxie\nmoyas\nmoyle\nmoyls\nmozed\nmozes\nmozos\nmpret\nmrads\nmsasa\nmtepe\nmucho\nmucic\nmucid\nmucin\nmucko\nmucks\nmucky\nmucor\nmucro\nmucus\nmudar\nmuddy\nmudge\nmudif\nmudim\nmudir\nmudra\nmuffs\nmuffy\nmufti\nmugga\nmuggs\nmuggy\nmugho\nmugil\nmugos\nmuhly\nmuids\nmuils\nmuirs\nmuiry\nmuist\nmujik\nmukim\nmukti\nmulai\nmulch\nmulct\nmuled\nmules\nmuley\nmulga\nmulie\nmulla\nmulls\nmulse\nmulsh\nmumbo\nmumms\nmummy\nmumph\nmumps\nmumsy\nmumus\nmunch\nmunds\nmundu\nmunga\nmunge\nmungi\nmungo\nmungs\nmungy\nmunia\nmunis\nmunja\nmunjs\nmunts\nmuntu\nmuons\nmural\nmuras\nmured\nmures\nmurex\nmurgh\nmurgi\nmurid\nmurks\nmurky\nmurls\nmurly\nmurra\nmurre\nmurri\nmurrs\nmurry\nmurth\nmurti\nmuruk\nmurva\nmusar\nmusca\nmused\nmusee\nmuser\nmuses\nmuset\nmusha\nmushy\nmusic\nmusit\nmusks\nmusky\nmusos\nmusse\nmussy\nmusta\nmusth\nmusts\nmusty\nmutas\nmutch\nmuted\nmuter\nmutes\nmutha\nmutic\nmutis\nmuton\nmutti\nmutts\nmutum\nmuvva\nmuxed\nmuxes\nmuzak\nmuzzy\nmvula\nmvule\nmvuli\nmyall\nmyals\nmylar\nmynah\nmynas\nmyoid\nmyoma\nmyons\nmyope\nmyops\nmyopy\nmyrrh\nmysid\nmysie\nmythi\nmyths\nmythy\nmyxos\nmzees\nnaams\nnaans\nnaats\nnabam\nnabby\nnabes\nnabis\nnabks\nnabla\nnabob\nnache\nnacho\nnacre\nnadas\nnadir\nnaeve\nnaevi\nnaffs\nnagar\nnagas\nnages\nnaggy\nnagor\nnahal\nnaiad\nnaibs\nnaice\nnaids\nnaieo\nnaifs\nnaiks\nnails\nnaily\nnains\nnaios\nnaira\nnairu\nnaive\nnajib\nnakas\nnaked\nnaker\nnakfa\nnalas\nnaled\nnalla\nnamad\nnamak\nnamaz\nnamed\nnamer\nnames\nnamma\nnamus\nnanas\nnance\nnancy\nnandu\nnanna\nnanny\nnanos\nnante\nnanti\nnanto\nnants\nnanty\nnanua\nnapas\nnaped\nnapes\nnapoh\nnapoo\nnappa\nnappe\nnappy\nnaras\nnarco\nnarcs\nnards\nnares\nnaric\nnaris\nnarks\nnarky\nnarod\nnarra\nnarre\nnasal\nnashi\nnasho\nnasis\nnason\nnasty\nnasus\nnatak\nnatal\nnatch\nnates\nnatis\nnatto\nnatty\nnatya\nnauch\nnaunt\nnaval\nnavar\nnaved\nnavel\nnaves\nnavew\nnavvy\nnawab\nnawal\nnazar\nnazes\nnazir\nnazis\nnazzy\nnduja\nneafe\nneals\nneant\nneaps\nnears\nneath\nneato\nneats\nnebby\nnebek\nnebel\nneche\nnecks\nneddy\nneebs\nneeds\nneedy\nneefs\nneeld\nneele\nneemb\nneems\nneeps\nneese\nneeze\nnefie\nnegri\nnegro\nnegus\nneifs\nneigh\nneist\nneive\nnelia\nnelis\nnelly\nnemas\nnemic\nnemns\nnempt\nnenes\nnenta\nneons\nneosa\nneoza\nneper\nnepit\nneral\nneram\nnerds\nnerdy\nnerfs\nnerka\nnerks\nnerol\nnerts\nnertz\nnerve\nnervy\nneski\nnests\nnesty\nnetas\nnetes\nnetop\nnetta\nnetts\nnetty\nneuks\nneume\nneums\nnevel\nnever\nneves\nnevis\nnevus\nnevvy\nnewbs\nnewed\nnewel\nnewer\nnewie\nnewly\nnewsy\nnewts\nnexal\nnexin\nnexts\nnexum\nnexus\nngaio\nngaka\nngana\nngapi\nngati\nngege\nngoma\nngoni\nngram\nngwee\nnibby\nnicad\nniced\nnicer\nnicey\nniche\nnicht\nnicks\nnicky\nnicol\nnidal\nnided\nnides\nnidor\nnidus\nniece\nniefs\nniess\nnieve\nnifes\nniffs\nniffy\nnifle\nnifty\nniger\nnighs\nnight\nnigre\nnigua\nnihil\nnikab\nnikah\nnikau\nnilas\nnills\nnimbi\nnimbs\nnimby\nnimps\nniner\nnines\nninja\nninny\nninon\nninta\nninth\nniopo\nnioza\nnipas\nnipet\nnippy\nniqab\nnirls\nnirly\nnisei\nnisin\nnisse\nnisus\nnital\nniter\nnites\nnitid\nniton\nnitre\nnitro\nnitry\nnitta\nnitto\nnitty\nnival\nnivas\nnivel\nnixed\nnixer\nnixes\nnixie\nnizam\nnjirl\nnkosi\nnmoli\nnmols\nnoahs\nnobby\nnoble\nnobly\nnocks\nnodal\nnoddy\nnoded\nnodes\nnodum\nnodus\nnoels\nnoema\nnoeme\nnogal\nnoggs\nnoggy\nnohow\nnoias\nnoils\nnoily\nnoint\nnoire\nnoirs\nnoise\nnoisy\nnokes\nnoles\nnolle\nnolls\nnolos\nnomad\nnomas\nnomen\nnomes\nnomic\nnomoi\nnomos\nnonan\nnonas\nnonce\nnoncy\nnonda\nnondo\nnones\nnonet\nnongs\nnonic\nnonis\nnonna\nnonno\nnonny\nnonyl\nnoobs\nnoois\nnooit\nnooks\nnooky\nnoone\nnoons\nnoops\nnoose\nnoove\nnopal\nnoria\nnorie\nnoris\nnorks\nnorma\nnorms\nnorth\nnosed\nnoser\nnoses\nnosey\nnoshi\nnosir\nnotal\nnotam\nnotch\nnoted\nnoter\nnotes\nnotum\nnougs\nnouja\nnould\nnoule\nnouls\nnouns\nnouny\nnoups\nnoust\nnovae\nnovas\nnovel\nnovia\nnovio\nnovum\nnoway\nnowds\nnowed\nnowls\nnowts\nnowty\nnoxal\nnoxas\nnoxes\nnoyau\nnoyed\nnoyes\nnrtta\nnrtya\nnsima\nnubby\nnubia\nnucha\nnucin\nnuddy\nnuder\nnudes\nnudge\nnudgy\nnudie\nnudzh\nnuevo\nnuffs\nnugae\nnujol\nnuked\nnukes\nnulla\nnullo\nnulls\nnully\nnumbs\nnumen\nnummy\nnumps\nnunks\nnunky\nnunny\nnunus\nnuque\nnurds\nnurdy\nnurls\nnurrs\nnurse\nnurts\nnurtz\nnused\nnuses\nnutso\nnutsy\nnutty\nnyaff\nnyala\nnyams\nnying\nnylon\nnymph\nnyong\nnyssa\nnyung\nnyuse\nnyuze\noafos\noaked\noaken\noaker\noakum\noared\noarer\noasal\noases\noasis\noasts\noaten\noater\noaths\noaves\nobang\nobbos\nobeah\nobeli\nobese\nobeys\nobias\nobied\nobiit\nobits\nobjet\noboes\nobole\noboli\nobols\noccam\noccur\nocean\nocher\noches\nochre\nochry\nocker\nocote\nocrea\noctad\noctal\noctan\noctas\noctet\noctic\noctli\noctyl\noculi\nodahs\nodals\nodder\noddly\nodeon\nodeum\nodism\nodist\nodium\nodoom\nodors\nodour\nodums\nodyle\nodyls\nofays\noffal\noffed\noffer\noffie\noflag\noften\nofter\nofuro\nogams\nogeed\nogees\noggin\nogham\nogive\nogled\nogler\nogles\nogmic\nogres\nohelo\nohias\nohing\nohmic\nohone\noicks\noidia\noiled\noiler\noilet\noinks\noints\noiran\nojime\nokapi\nokays\nokehs\nokies\noking\nokole\nokras\nokrug\noktas\nolate\nolden\nolder\noldie\noldly\nolehs\noleic\nolein\nolent\noleos\noleum\noleyl\noligo\nolios\noliva\nolive\nollas\nollav\noller\nollie\nology\nolona\nolpae\nolpes\nomasa\nomber\nombre\nombus\nomdah\nomdas\nomdda\nomdeh\nomees\nomega\nomens\nomers\nomiai\nomits\nomlah\nommel\nommin\nomnes\nomovs\nomrah\nomuls\noncer\nonces\noncet\noncus\nondes\nondol\nonely\noners\nonery\nongon\nonion\nonium\nonkus\nonlap\nonlay\nonmun\nonned\nonsen\nonset\nontal\nontic\nooaas\noobit\noohed\nooids\noojah\noomph\noonts\noopak\nooped\noopsy\noorie\nooses\nootid\nooyah\noozed\noozes\noozie\noozle\nopahs\nopals\nopens\nopepe\nopera\nopery\nopgaf\nopihi\nopine\noping\nopium\noppos\nopsat\nopsin\nopsit\nopted\nopter\noptic\nopzit\norach\noracy\norals\norang\norans\norant\norate\norbat\norbed\norbic\norbit\norcas\norcin\norder\nordie\nordos\noread\norfes\norful\norgan\norgia\norgic\norgue\noribi\noriel\norigo\norixa\norles\norlon\norlop\normer\nornee\nornis\norped\norpin\norris\nortet\northo\norval\norzos\nosars\noscar\nosetr\noseys\noshac\nosier\noskin\noslin\nosmic\nosmol\nosone\nossia\nostia\notaku\notary\nother\nothyl\notium\nottar\notter\nottos\noubit\nouche\noucht\noueds\nouens\nought\nouija\noulks\noumas\nounce\noundy\noupas\nouped\nouphe\nouphs\nourey\nourie\nousel\nousia\nousts\noutby\noutdo\nouted\nouten\nouter\noutgo\noutie\noutre\noutro\noutta\nouzel\nouzos\novals\novary\novate\novels\novens\novers\novert\novine\novism\novist\novoid\novoli\novolo\novule\noware\nowari\nowche\nowers\nowies\nowing\nowled\nowler\nowlet\nowned\nowner\nownio\nowres\nowrie\nowsen\noxbow\noxeas\noxers\noxeye\noxide\noxids\noxies\noxime\noxims\noxine\noxlip\noxman\noxmen\noxter\noyama\noyers\nozeki\nozena\nozone\nozzie\npaaho\npaals\npaans\npacai\npacas\npacay\npaced\npacer\npaces\npacey\npacha\npacks\npacky\npacos\npacta\npacts\npadam\npadas\npaddo\npaddy\npadis\npadle\npadma\npadou\npadre\npadri\npaean\npaedo\npaeon\npagan\npaged\npager\npages\npagle\npagne\npagod\npagri\npahit\npahos\npahus\npaiks\npails\npains\npaint\npaipe\npaips\npaire\npairs\npaisa\npaise\npakay\npakka\npakki\npakua\npakul\npalak\npalar\npalas\npalay\npalea\npaled\npaler\npales\npalet\npalis\npalki\npalla\npalls\npallu\npally\npalms\npalmy\npalpi\npalps\npalsa\npalsy\npalus\npamby\npampa\npanax\npance\npanch\npanda\npands\npandy\npaned\npanel\npanes\npanga\npangs\npanic\npanim\npanir\npanko\npanks\npanna\npanne\npanni\npanny\npansy\npanto\npants\npanty\npaoli\npaolo\npapad\npapal\npapas\npapaw\npaper\npapes\npapey\npappi\npappy\npapri\nparae\nparas\nparch\nparcs\npardi\npards\npardy\npared\nparen\npareo\nparer\npares\npareu\nparev\nparge\npargo\nparid\nparis\nparka\nparki\nparks\nparky\nparle\nparly\nparma\nparmo\nparms\nparol\nparps\nparra\nparrs\nparry\nparse\nparte\nparti\nparts\nparty\nparve\nparvo\npasag\npasar\npasch\npaseo\npases\npasha\npashm\npaska\npasmo\npaspy\npasse\npassu\npasta\npaste\npasts\npasty\npatas\npatch\npated\npatee\npatel\npaten\npater\npates\npaths\npatia\npatin\npatio\npatka\npatly\npatsy\npatta\npatte\npattu\npatty\npatus\npauas\npauls\npause\npauxi\npavan\npavas\npaved\npaven\npaver\npaves\npavid\npavie\npavin\npavis\npavon\npavvy\npawas\npawaw\npawed\npawer\npawks\npawky\npawls\npawns\npaxes\npayed\npayee\npayer\npayor\npaysd\npeace\npeach\npeage\npeags\npeake\npeaks\npeaky\npeals\npeans\npeare\npearl\npears\npeart\npease\npeasy\npeats\npeaty\npeavy\npeaze\npebas\npecan\npechs\npecia\npecke\npecks\npecky\npects\npedal\npedes\npedis\npedon\npedos\npedro\npeece\npeeks\npeeky\npeels\npeely\npeens\npeent\npeeoy\npeepe\npeeps\npeepy\npeers\npeery\npeeve\npeevo\npeggy\npeghs\npegma\npegos\npeine\npeins\npeise\npeisy\npeize\npekan\npekau\npekea\npekes\npekid\npekin\npekoe\npelas\npelau\npelch\npeles\npelfs\npells\npelma\npelog\npelon\npelsh\npelta\npelts\npelus\npenal\npence\npends\npendu\npened\npenes\npengo\npenie\npenis\npenks\npenna\npenne\npenni\npenny\npense\npensy\npents\npeola\npeons\npeony\npepla\npeple\npepon\npepos\npeppy\npepsi\npequi\nperae\nperai\nperce\nperch\npercs\nperdu\nperdy\nperea\nperes\nperfs\nperil\nperis\nperks\nperky\nperle\nperls\nperms\npermy\nperne\nperns\nperog\nperps\nperry\nperse\npersp\nperst\nperts\nperve\npervo\npervs\npervy\npesch\npesky\npesos\npesta\npesto\npests\npesty\npetal\npetar\npeter\npetit\npetos\npetre\npetri\npetti\npetto\npetty\npewed\npewee\npewit\npeyse\npfftt\nphage\nphang\nphare\npharm\nphase\nphasm\npheer\npheme\nphene\npheon\nphese\nphial\nphies\nphish\nphizz\nphlox\nphobe\nphoca\nphone\nphono\nphons\nphony\nphooh\nphooo\nphota\nphoto\nphots\nphoty\nphpht\nphubs\nphuts\nphutu\nphwat\nphyla\nphyle\nphyma\nphynx\nphysa\npiais\npiani\npiano\npians\npibal\npical\npicas\npiccy\npicey\npichi\npicks\npicky\npicon\npicot\npicra\npicul\npiece\npieds\npiend\npiers\npiert\npieta\npiets\npiety\npiezo\npiggy\npight\npigly\npigmy\npiing\npikas\npikau\npiked\npikel\npiker\npikes\npikey\npikis\npikul\npilae\npilaf\npilao\npilar\npilau\npilaw\npilch\npilea\npiled\npilei\npiler\npiles\npiley\npilin\npilis\npills\npilon\npilot\npilow\npilum\npilus\npimas\npimps\npinas\npinax\npince\npinch\npinda\npinds\npined\npiner\npines\npiney\npinga\npinge\npingo\npings\npinko\npinks\npinky\npinna\npinny\npinol\npinon\npinot\npinta\npinto\npints\npinup\npions\npiony\npious\npioye\npioys\npipal\npipas\npiped\npiper\npipes\npipet\npipid\npipis\npipit\npippy\npipul\npique\npiqui\npirai\npirks\npirls\npirns\npirog\npirre\npirri\npirrs\npisco\npises\npisky\npisos\npissy\npiste\npitas\npitch\npiths\npithy\npiton\npitot\npitso\npitsu\npitta\npittu\npiuma\npiums\npivos\npivot\npixel\npixes\npixie\npiyut\npized\npizer\npizes\npizza\nplaas\nplace\nplack\nplaga\nplage\nplaid\nplaig\nplain\nplait\nplanc\nplane\nplanh\nplank\nplans\nplant\nplaps\nplash\nplasm\nplast\nplate\nplats\nplatt\nplaty\nplaud\nplaur\nplavs\nplaya\nplays\nplaza\nplead\npleas\npleat\nplebe\nplebs\npleck\npleep\nplein\nplena\nplene\npleno\npleon\nplesh\nplets\nplews\nplexi\nplica\nplied\nplier\nplies\npligs\nplims\npling\nplink\nplips\nplish\nploat\nploce\nplock\nplods\nploit\nplomb\nplong\nplonk\nplook\nploot\nplops\nplore\nplots\nplotz\nplouk\nplout\nplows\nplowt\nploye\nploys\npluck\npluds\nplues\npluff\nplugs\npluke\nplumb\nplume\nplump\nplums\nplumy\nplung\nplunk\npluot\nplups\nplush\nplute\npluto\npluty\nplyer\npneus\npoach\npoaka\npoake\npoalo\npobby\npoboy\npocan\npoche\npocho\npocks\npocky\npodal\npoddy\npodex\npodge\npodgy\npodia\npodos\npodus\npoems\npoena\npoeps\npoesy\npoete\npoets\npogey\npogge\npoggy\npogos\npogue\npohed\npoilu\npoind\npoint\npoire\npoise\npokal\npoked\npoker\npokes\npokey\npokie\npokit\npolar\npoled\npoler\npoles\npoley\npolio\npolis\npolje\npolka\npolks\npollo\npolls\npolly\npolos\npolts\npolyp\npolys\npomas\npombe\npomes\npomme\npommy\npomos\npompa\npomps\nponce\nponcy\nponds\npondy\npones\nponey\nponga\npongo\npongs\npongy\nponks\nponor\nponto\nponts\nponty\nponzu\npooay\npooch\npoods\npooed\npooey\npoofs\npoofy\npoohs\npoohy\npooja\npooka\npooks\npools\npooly\npoons\npoopa\npoops\npoopy\npoori\npoort\npoots\npooty\npoove\npoovy\npopes\npopia\npopos\npoppa\npoppy\npopsy\npopup\nporae\nporal\nporch\npored\nporer\npores\nporey\nporge\nporgy\nporin\nporks\nporky\nporno\nporns\nporny\nporta\nporte\nporth\nports\nporty\nporus\nposca\nposed\nposer\nposes\nposet\nposey\nposho\nposit\nposol\nposse\nposte\nposts\npotae\npotai\npotch\npoted\npotes\npotin\npotoo\npotro\npotsy\npotto\npotts\npotty\npouce\npouch\npouff\npoufs\npoufy\npouis\npouke\npouks\npoule\npoulp\npoult\npound\npoupe\npoupt\npours\npousy\npouts\npouty\npovos\npowan\npower\npowie\npowin\npowis\npowlt\npownd\npowns\npowny\npowre\npowsy\npoxed\npoxes\npoyas\npoynt\npoyou\npoyse\npozzy\npraam\nprads\nprags\nprahu\nprams\nprana\nprang\nprank\npraos\npraps\nprase\nprate\nprats\npratt\npraty\npraus\nprawn\nprays\npreak\npredy\npreed\npreem\npreen\nprees\npreif\npreke\nprems\npremy\nprent\npreon\npreop\npreps\npresa\nprese\npress\nprest\npreta\npreux\npreve\nprexy\npreys\nprial\nprian\nprice\nprick\npricy\npride\npridy\npried\nprief\nprier\npries\nprigs\nprill\nprima\nprime\nprimi\nprimo\nprimp\nprims\nprimy\npring\nprink\nprint\nprion\nprior\nprise\nprism\npriss\nprius\nprivy\nprize\nproal\nproas\nprobe\nprobs\nproby\nprodd\nprods\nproem\nprofs\nprogs\nproin\nproke\nprole\nproll\npromo\nproms\nprone\nprong\npronk\nproof\nprook\nproot\nprops\nprora\nprore\nprose\nproso\npross\nprost\nprosy\nproto\nproud\nproul\nprove\nprowk\nprowl\nprows\nproxy\nproyn\nprude\nprune\npruno\nprunt\npruny\npruta\npryan\npryer\npryse\npsalm\npseud\npshaw\npshut\npsias\npsion\npsoae\npsoai\npsoas\npsora\npsych\npsyop\nptish\nptype\npubby\npubco\npubes\npubic\npubis\npubsy\npucan\npucer\npuces\npucka\npucks\npuddy\npudge\npudgy\npudic\npudor\npudsy\npudus\npuers\npuffa\npuffs\npuffy\npuggy\npugil\npuhas\npujah\npujas\npukas\npuked\npuker\npukes\npukey\npukka\npukus\npulao\npulas\npuled\npuler\npules\npulik\npulis\npulka\npulks\npulli\npulls\npully\npulmo\npulps\npulpy\npulse\npulus\npulut\npumas\npumie\npumps\npumpy\npunas\npunce\npunch\npunga\npungi\npungo\npungs\npungy\npunim\npunji\npunka\npunks\npunky\npunny\npunto\npunts\npunty\npupae\npupal\npupas\npupil\npuppa\npuppy\npupus\npurao\npurau\npurda\npurdy\npured\npuree\npurer\npures\npurga\npurge\npurin\npuris\npurls\npuros\npurps\npurpy\npurre\npurrs\npurry\npurse\npursy\npurty\npuses\npushy\npusle\npussy\nputas\nputer\nputid\nputin\nputon\nputos\nputti\nputto\nputts\nputtu\nputty\nputza\npuuko\npuyas\npuzel\npuzta\npwned\npyats\npyets\npygal\npygmy\npyins\npylon\npyned\npynes\npyoid\npyots\npyral\npyran\npyres\npyrex\npyric\npyros\npyrus\npyuff\npyxed\npyxes\npyxie\npyxis\npzazz\nqadis\nqaids\nqajaq\nqanat\nqapik\nqibla\nqilas\nqipao\nqophs\nqorma\nquabs\nquack\nquads\nquaff\nquags\nquail\nquair\nquais\nquake\nquaky\nquale\nqualm\nqualy\nquank\nquant\nquare\nquark\nquarl\nquart\nquash\nquasi\nquass\nquate\nquats\nquawk\nquaws\nquayd\nquays\nqubit\nquean\nqueck\nqueek\nqueem\nqueen\nqueer\nquell\nqueme\nquena\nquern\nquery\nqueso\nquest\nquete\nqueue\nqueyn\nqueys\nqueyu\nquibs\nquich\nquick\nquids\nquies\nquiet\nquiff\nquila\nquill\nquilt\nquims\nquina\nquine\nquink\nquino\nquins\nquint\nquipo\nquips\nquipu\nquire\nquirk\nquirl\nquirt\nquist\nquite\nquits\nquoad\nquods\nquoif\nquoin\nquois\nquoit\nquoll\nquonk\nquops\nquork\nquorl\nquota\nquote\nquoth\nquouk\nquoys\nquran\nqursh\nquyte\nraads\nraake\nrabat\nrabbi\nrabic\nrabid\nrabis\nraced\nracer\nraces\nrache\nracks\nracon\nradar\nraddi\nraddy\nradge\nradgy\nradif\nradii\nradio\nradix\nradon\nrafee\nraffs\nraffy\nrafik\nrafiq\nrafts\nrafty\nragas\nragde\nraged\nragee\nrager\nrages\nragga\nraggs\nraggy\nragis\nragus\nrahed\nrahui\nraiah\nraias\nraids\nraike\nraiks\nraile\nrails\nraine\nrains\nrainy\nraird\nraise\nraita\nraith\nraits\nrajah\nrajas\nrajes\nraked\nrakee\nraker\nrakes\nrakhi\nrakia\nrakis\nrakki\nraksi\nrakus\nrales\nralli\nrally\nralph\nramal\nramee\nramen\nrames\nramet\nramie\nramin\nramis\nrammy\nramon\nramps\nramse\nramsh\nramus\nranas\nrance\nranch\nrando\nrands\nrandy\nraned\nranee\nranes\nranga\nrange\nrangi\nrangs\nrangy\nranid\nranis\nranke\nranks\nranns\nranny\nranse\nrants\nranty\nraped\nrapee\nraper\nrapes\nraphe\nrapid\nrapin\nrappe\nrapso\nrared\nraree\nrarer\nrares\nrarks\nrasam\nrasas\nrased\nraser\nrases\nrasps\nraspy\nrasse\nrasta\nratal\nratan\nratas\nratch\nrated\nratel\nrater\nrates\nratha\nrathe\nraths\nratio\nratoo\nratos\nratti\nratty\nratus\nrauli\nrauns\nraupo\nraved\nravel\nraven\nraver\nraves\nravey\nravin\nrawdy\nrawer\nrawin\nrawks\nrawly\nrawns\nraxed\nraxes\nrayah\nrayas\nrayed\nrayle\nrayls\nrayne\nrayon\nrazai\nrazed\nrazee\nrazer\nrazes\nrazet\nrazoo\nrazor\nreach\nreact\nreadd\nreads\nready\nreais\nreaks\nrealm\nrealo\nreals\nreame\nreams\nreamy\nreans\nreaps\nreard\nrearm\nrears\nreast\nreata\nreate\nreave\nrebab\nrebar\nrebbe\nrebec\nrebel\nrebid\nrebit\nrebop\nrebud\nrebus\nrebut\nrebuy\nrecal\nrecap\nrecce\nrecco\nreccy\nrecep\nrecit\nrecks\nrecon\nrecta\nrecte\nrecti\nrecto\nrecue\nrecur\nrecut\nredan\nredds\nreddy\nreded\nredes\nredia\nredid\nredif\nredig\nredip\nredly\nredon\nredos\nredox\nredry\nredub\nredug\nredux\nredye\nreeaf\nreech\nreede\nreeds\nreedy\nreefs\nreefy\nreeks\nreeky\nreels\nreely\nreems\nreens\nreerd\nreest\nreeve\nreeze\nrefan\nrefed\nrefel\nrefer\nreffo\nrefis\nrefit\nrefix\nrefly\nrefry\nregal\nregar\nreges\nreget\nregex\nreggo\nregia\nregie\nregle\nregma\nregna\nregos\nregot\nregur\nrehab\nrehem\nreifs\nreify\nreign\nreiki\nreiks\nreine\nreing\nreink\nreins\nreird\nreist\nreive\nrejas\nrejig\nrejon\nreked\nrekes\nrekey\nrelax\nrelay\nrelet\nrelic\nrelie\nrelit\nrello\nrelos\nreman\nremap\nremen\nremet\nremex\nremit\nremix\nremou\nrenal\nrenay\nrends\nrendu\nrenew\nreney\nrenga\nrengs\nrenig\nrenin\nrenks\nrenne\nrenos\nrente\nrents\nreoil\nreorg\nrepas\nrepat\nrepay\nrepeg\nrepel\nrepen\nrepin\nrepla\nreply\nrepos\nrepot\nrepps\nrepro\nrepun\nreput\nreran\nrerig\nrerun\nresam\nresat\nresaw\nresay\nresee\nreses\nreset\nresew\nresid\nresin\nresit\nresod\nresol\nresow\nresto\nrests\nresty\nresue\nresus\nretag\nretam\nretax\nretch\nretem\nretia\nretie\nretin\nretip\nretox\nretro\nretry\nreune\nreups\nreuse\nrevel\nrevet\nrevie\nrevow\nrevue\nrewan\nrewax\nrewed\nrewet\nrewin\nrewon\nrewth\nrexes\nrezes\nrhabd\nrheas\nrheid\nrheme\nrheum\nrhies\nrhime\nrhine\nrhino\nrhody\nrhomb\nrhone\nrhumb\nrhyme\nrhymy\nrhyne\nrhyta\nriads\nrials\nriant\nriata\nriato\nribas\nribby\nribes\nriced\nricer\nrices\nricey\nriche\nricht\nricin\nricks\nrider\nrides\nridge\nridgy\nridic\nriels\nriems\nrieve\nrifer\nriffs\nriffy\nrifle\nrifte\nrifts\nrifty\nriggs\nright\nrigid\nrigmo\nrigol\nrigor\nrikka\nrikwa\nriled\nriles\nriley\nrille\nrills\nrilly\nrimae\nrimed\nrimer\nrimes\nrimon\nrimus\nrince\nrinds\nrindy\nrines\nringe\nrings\nringy\nrinks\nrinse\nrioja\nrione\nriots\nrioty\nriped\nripen\nriper\nripes\nripps\nriqqs\nrisen\nriser\nrises\nrishi\nrisks\nrisky\nrisps\nrists\nrisus\nrites\nrithe\nritts\nritzy\nrival\nrivas\nrived\nrivel\nriven\nriver\nrives\nrivet\nriyal\nrizas\nroach\nroads\nroady\nroake\nroaky\nroams\nroans\nroany\nroars\nroary\nroast\nroate\nrobbo\nrobed\nrober\nrobes\nrobin\nroble\nrobot\nrobug\nrobur\nroche\nrocks\nrocky\nroded\nrodeo\nrodes\nrodny\nroers\nrogan\nroger\nrogue\nroguy\nrohan\nrohes\nrohun\nrohus\nroids\nroils\nroily\nroins\nroist\nrojak\nrojis\nroked\nroker\nrokes\nrokey\nrokos\nrolag\nroleo\nroles\nrolfs\nrolls\nrolly\nromal\nroman\nromeo\nromer\nromps\nrompu\nrompy\nronde\nrondo\nroneo\nrones\nronin\nronne\nronte\nronts\nronuk\nroods\nroofs\nroofy\nrooks\nrooky\nrooms\nroomy\nroons\nroops\nroopy\nroosa\nroose\nroost\nroots\nrooty\nroped\nroper\nropes\nropey\nroque\nroral\nrores\nroric\nrorid\nrorie\nrorts\nrorty\nrosal\nrosco\nrosed\nroses\nroset\nrosha\nroshi\nrosin\nrosit\nrosps\nrossa\nrosso\nrosti\nrosts\nrotal\nrotan\nrotas\nrotch\nroted\nrotes\nrotis\nrotls\nroton\nrotor\nrotos\nrotta\nrotte\nrotto\nrotty\nrouen\nroues\nrouet\nroufs\nrouge\nrough\nrougy\nrouks\nrouky\nroule\nrouls\nroums\nround\nroups\nroupy\nrouse\nroust\nroute\nrouth\nrouts\nroved\nroven\nrover\nroves\nrowan\nrowdy\nrowed\nrowel\nrowen\nrower\nrowet\nrowie\nrowme\nrownd\nrowns\nrowth\nrowts\nroyal\nroyet\nroyne\nroyst\nrozes\nrozet\nrozit\nruach\nruana\nrubai\nruban\nrubby\nrubel\nrubes\nrubin\nrubio\nruble\nrubli\nrubor\nrubus\nruche\nruchy\nrucks\nrudas\nrudds\nruddy\nruder\nrudes\nrudie\nrudis\nrueda\nruers\nruffe\nruffs\nruffy\nrufus\nrugae\nrugal\nrugas\nrugby\nruggy\nruice\nruing\nruins\nrukhs\nruled\nruler\nrules\nrully\nrumal\nrumba\nrumbo\nrumen\nrumes\nrumly\nrummy\nrumor\nrumpo\nrumps\nrumpy\nrunce\nrunch\nrunds\nruned\nruner\nrunes\nrungs\nrunic\nrunny\nrunos\nrunts\nrunty\nrunup\nruote\nrupee\nrupia\nrural\nrurps\nrurus\nrusas\nruses\nrushy\nrusks\nrusky\nrusma\nrusse\nrusts\nrusty\nruths\nrutin\nrutty\nruvid\nryals\nrybat\nryiji\nryijy\nryked\nrykes\nrymer\nrymme\nrynds\nryoti\nryots\nryper\nrypin\nrythe\nryugi\nsaags\nsabal\nsabed\nsaber\nsabes\nsabha\nsabin\nsabir\nsabji\nsable\nsabos\nsabot\nsabra\nsabre\nsabzi\nsacks\nsacra\nsacre\nsaddo\nsaddy\nsades\nsadhe\nsadhu\nsadic\nsadis\nsadly\nsados\nsadza\nsaeta\nsafed\nsafer\nsafes\nsagar\nsagas\nsager\nsages\nsaggy\nsagos\nsagum\nsahab\nsaheb\nsahib\nsaice\nsaick\nsaics\nsaids\nsaiga\nsails\nsaims\nsaine\nsains\nsaint\nsairs\nsaist\nsaith\nsajou\nsakai\nsaker\nsakes\nsakia\nsakis\nsakti\nsalad\nsalal\nsalas\nsalat\nsalep\nsales\nsalet\nsalic\nsalis\nsalix\nsalle\nsally\nsalmi\nsalol\nsalon\nsalop\nsalpa\nsalps\nsalsa\nsalse\nsalto\nsalts\nsalty\nsalud\nsalue\nsalut\nsalve\nsalvo\nsaman\nsamas\nsamba\nsambo\nsamek\nsamel\nsamen\nsames\nsamey\nsamfi\nsamfu\nsammy\nsampi\nsamps\nsanad\nsands\nsandy\nsaned\nsaner\nsanes\nsanga\nsangh\nsango\nsangs\nsanko\nsansa\nsanto\nsants\nsaola\nsapan\nsapid\nsapor\nsappy\nsaran\nsards\nsared\nsaree\nsarge\nsargo\nsarin\nsarir\nsaris\nsarks\nsarky\nsarod\nsaros\nsarus\nsarvo\nsaser\nsasin\nsasse\nsassy\nsatai\nsatay\nsated\nsatem\nsater\nsates\nsatin\nsatis\nsatyr\nsauba\nsauce\nsauch\nsaucy\nsaugh\nsauls\nsault\nsauna\nsaunf\nsaunt\nsaury\nsaute\nsauts\nsauve\nsaved\nsaver\nsaves\nsavey\nsavin\nsavor\nsavoy\nsavvy\nsawah\nsawed\nsawer\nsaxes\nsayas\nsayed\nsayee\nsayer\nsayid\nsayne\nsayon\nsayst\nsazes\nscabs\nscads\nscaff\nscags\nscail\nscala\nscald\nscale\nscall\nscalp\nscaly\nscamp\nscams\nscand\nscans\nscant\nscapa\nscape\nscapi\nscare\nscarf\nscarp\nscars\nscart\nscary\nscath\nscats\nscatt\nscaud\nscaup\nscaur\nscaws\nsceat\nscena\nscend\nscene\nscent\nschav\nschif\nschmo\nschul\nschwa\nscifi\nscind\nscion\nscire\nsclim\nscobe\nscody\nscoff\nscogs\nscold\nscone\nscoog\nscoop\nscoot\nscopa\nscope\nscops\nscore\nscorn\nscorp\nscote\nscots\nscoug\nscoup\nscour\nscout\nscowl\nscowp\nscows\nscrab\nscrae\nscrag\nscram\nscran\nscrap\nscrat\nscraw\nscray\nscree\nscrew\nscrim\nscrip\nscrob\nscrod\nscrog\nscroo\nscrow\nscrub\nscrum\nscuba\nscudi\nscudo\nscuds\nscuff\nscuft\nscugs\nsculk\nscull\nsculp\nsculs\nscums\nscups\nscurf\nscurs\nscuse\nscuta\nscute\nscuts\nscuzz\nscyes\nsdayn\nsdein\nseals\nseame\nseams\nseamy\nseans\nseare\nsears\nsease\nseats\nseaze\nsebum\nsecco\nsechs\nsects\nsedan\nseder\nsedes\nsedge\nsedgy\nsedum\nseeds\nseedy\nseeks\nseeld\nseels\nseely\nseems\nseeps\nseepy\nseers\nsefer\nsegar\nsegas\nsegni\nsegno\nsegol\nsegos\nsegue\nsehri\nseifs\nseils\nseine\nseirs\nseise\nseism\nseity\nseiza\nseize\nsekos\nsekts\nselah\nseles\nselfs\nselfy\nselky\nsella\nselle\nsells\nselva\nsemas\nsemee\nsemen\nsemes\nsemie\nsemis\nsenas\nsends\nsenes\nsenex\nsengi\nsenna\nsenor\nsensa\nsense\nsensi\nsensu\nsente\nsenti\nsents\nsenvy\nsenza\nsepad\nsepal\nsepia\nsepic\nsepoy\nseppo\nsepta\nsepts\nserac\nserai\nseral\nsered\nserer\nseres\nserfs\nserge\nseria\nseric\nserif\nserin\nserir\nserks\nseron\nserow\nserra\nserre\nserrs\nserry\nserum\nserve\nservo\nsesey\nsessa\nsetae\nsetal\nseter\nseths\nseton\nsetts\nsetup\nsevak\nseven\nsever\nsevir\nsewan\nsewar\nsewed\nsewel\nsewen\nsewer\nsewin\nsexed\nsexer\nsexes\nsexor\nsexto\nsexts\nseyen\nsezes\nshack\nshade\nshads\nshady\nshaft\nshags\nshahs\nshaka\nshake\nshako\nshakt\nshaky\nshale\nshall\nshalm\nshalt\nshaly\nshama\nshame\nshams\nshand\nshank\nshans\nshape\nshaps\nshard\nshare\nshark\nsharn\nsharp\nshart\nshash\nshaul\nshave\nshawl\nshawm\nshawn\nshaws\nshaya\nshays\nshchi\nsheaf\nsheal\nshear\nsheas\nsheds\nsheel\nsheen\nsheep\nsheer\nsheet\nsheik\nshelf\nshell\nshend\nsheng\nshent\nsheol\nsherd\nshere\nshero\nshets\nsheva\nshewn\nshews\nshiai\nshied\nshiel\nshier\nshies\nshift\nshill\nshily\nshims\nshine\nshins\nshiny\nshiok\nships\nshire\nshirk\nshirr\nshirs\nshirt\nshish\nshiso\nshist\nshite\nshits\nshiur\nshiva\nshive\nshivs\nshlep\nshlub\nshmek\nshmoe\nshoal\nshoat\nshock\nshoed\nshoer\nshoes\nshogi\nshogs\nshoji\nshojo\nshola\nshone\nshonk\nshook\nshool\nshoon\nshoos\nshoot\nshope\nshops\nshore\nshorl\nshorn\nshort\nshote\nshots\nshott\nshoud\nshout\nshove\nshowd\nshown\nshows\nshowy\nshoyu\nshred\nshrew\nshris\nshrow\nshrub\nshrug\nshtar\nshtik\nshtum\nshtup\nshuba\nshuck\nshule\nshuln\nshuls\nshuns\nshunt\nshura\nshush\nshute\nshuts\nshwas\nshyer\nshyly\nsials\nsibbs\nsibia\nsibyl\nsices\nsicht\nsicko\nsicks\nsicky\nsidas\nsided\nsider\nsides\nsidey\nsidha\nsidhe\nsidle\nsiege\nsield\nsiens\nsient\nsieth\nsieur\nsieve\nsifts\nsighs\nsight\nsigil\nsigla\nsigma\nsigna\nsigns\nsigri\nsijos\nsikas\nsiker\nsikes\nsilds\nsiled\nsilen\nsiler\nsiles\nsilex\nsilks\nsilky\nsills\nsilly\nsilos\nsilts\nsilty\nsilva\nsimar\nsimas\nsimba\nsimis\nsimps\nsimul\nsince\nsinds\nsined\nsines\nsinew\nsinge\nsings\nsinhs\nsinks\nsinky\nsinsi\nsinus\nsiped\nsipes\nsippy\nsired\nsiree\nsiren\nsires\nsirih\nsiris\nsiroc\nsirra\nsirup\nsisal\nsises\nsissy\nsista\nsists\nsitar\nsitch\nsited\nsites\nsithe\nsitka\nsitup\nsitus\nsiver\nsixer\nsixes\nsixmo\nsixte\nsixth\nsixty\nsizar\nsized\nsizel\nsizer\nsizes\nskags\nskail\nskald\nskank\nskarn\nskart\nskate\nskats\nskatt\nskaws\nskean\nskear\nskeds\nskeed\nskeef\nskeen\nskeer\nskees\nskeet\nskeev\nskeez\nskegg\nskegs\nskein\nskelf\nskell\nskelm\nskelp\nskene\nskens\nskeos\nskeps\nskerm\nskers\nskets\nskews\nskids\nskied\nskier\nskies\nskiey\nskiff\nskill\nskimo\nskimp\nskims\nskink\nskins\nskint\nskios\nskips\nskirl\nskirr\nskirt\nskite\nskits\nskive\nskivy\nsklim\nskoal\nskobe\nskody\nskoff\nskofs\nskogs\nskols\nskool\nskort\nskosh\nskran\nskrik\nskroo\nskuas\nskugs\nskulk\nskull\nskunk\nskyed\nskyer\nskyey\nskyfs\nskyre\nskyrs\nskyte\nslabs\nslack\nslade\nslaes\nslags\nslaid\nslain\nslake\nslams\nslane\nslang\nslank\nslant\nslaps\nslart\nslash\nslate\nslats\nslaty\nslave\nslaws\nslays\nslebs\nsleds\nsleek\nsleep\nsleer\nsleet\nslept\nslews\nsleys\nslice\nslick\nslide\nslier\nslily\nslime\nslims\nslimy\nsling\nslink\nslipe\nslips\nslipt\nslish\nslits\nslive\nsloan\nslobs\nsloes\nslogs\nsloid\nslojd\nsloka\nslomo\nsloom\nsloop\nsloot\nslope\nslops\nslopy\nslorm\nslosh\nsloth\nslots\nslove\nslows\nsloyd\nslubb\nslubs\nslued\nslues\nsluff\nslugs\nsluit\nslump\nslums\nslung\nslunk\nslurb\nslurp\nslurs\nsluse\nslush\nsluts\nslyer\nslyly\nslype\nsmaak\nsmack\nsmaik\nsmall\nsmalm\nsmalt\nsmarm\nsmart\nsmash\nsmaze\nsmear\nsmeek\nsmees\nsmeik\nsmeke\nsmell\nsmelt\nsmerk\nsmews\nsmick\nsmile\nsmily\nsmirk\nsmirr\nsmirs\nsmite\nsmith\nsmits\nsmize\nsmock\nsmogs\nsmoke\nsmoko\nsmoky\nsmolt\nsmoor\nsmoot\nsmore\nsmorg\nsmote\nsmout\nsmowt\nsmugs\nsmurs\nsmush\nsmuts\nsnabs\nsnack\nsnafu\nsnags\nsnail\nsnake\nsnaky\nsnaps\nsnare\nsnarf\nsnark\nsnarl\nsnars\nsnary\nsnash\nsnath\nsnaws\nsnead\nsneak\nsneap\nsnebs\nsneck\nsneds\nsneed\nsneer\nsnees\nsnell\nsnibs\nsnick\nsnide\nsnied\nsnies\nsniff\nsnift\nsnigs\nsnipe\nsnips\nsnipy\nsnirt\nsnits\nsnive\nsnobs\nsnods\nsnoek\nsnoep\nsnogs\nsnoke\nsnood\nsnook\nsnool\nsnoop\nsnoot\nsnore\nsnort\nsnots\nsnout\nsnowk\nsnows\nsnowy\nsnubs\nsnuck\nsnuff\nsnugs\nsnush\nsnyes\nsoaks\nsoaps\nsoapy\nsoare\nsoars\nsoave\nsobas\nsober\nsocas\nsoces\nsocia\nsocko\nsocks\nsocle\nsodas\nsoddy\nsodic\nsodom\nsofar\nsofas\nsofta\nsofts\nsofty\nsoger\nsoggy\nsohur\nsoils\nsoily\nsojas\nsojus\nsokah\nsoken\nsokes\nsokol\nsolah\nsolan\nsolar\nsolas\nsolde\nsoldi\nsoldo\nsolds\nsoled\nsolei\nsoler\nsoles\nsolid\nsolon\nsolos\nsolum\nsolus\nsolve\nsoman\nsomas\nsonar\nsonce\nsonde\nsones\nsongo\nsongs\nsongy\nsonic\nsonly\nsonne\nsonny\nsonse\nsonsy\nsooey\nsooks\nsooky\nsoole\nsools\nsooms\nsoops\nsoote\nsooth\nsoots\nsooty\nsophs\nsophy\nsopor\nsoppy\nsopra\nsoral\nsoras\nsorbi\nsorbo\nsorbs\nsorda\nsordo\nsords\nsored\nsoree\nsorel\nsorer\nsores\nsorex\nsorgo\nsorns\nsorra\nsorry\nsorta\nsorts\nsorus\nsoths\nsotol\nsotto\nsouce\nsouct\nsough\nsouks\nsouls\nsouly\nsoums\nsound\nsoups\nsoupy\nsours\nsouse\nsouth\nsouts\nsowar\nsowce\nsowed\nsower\nsowff\nsowfs\nsowle\nsowls\nsowms\nsownd\nsowne\nsowps\nsowse\nsowth\nsoxes\nsoyas\nsoyle\nsoyuz\nsozin\nspace\nspack\nspacy\nspade\nspado\nspads\nspaed\nspaer\nspaes\nspags\nspahi\nspail\nspain\nspait\nspake\nspald\nspale\nspall\nspalt\nspams\nspane\nspang\nspank\nspans\nspard\nspare\nspark\nspars\nspart\nspasm\nspate\nspats\nspaul\nspawl\nspawn\nspaws\nspayd\nspays\nspaza\nspazz\nspeak\nspeal\nspean\nspear\nspeat\nspeck\nspecs\nspect\nspeed\nspeel\nspeer\nspeil\nspeir\nspeks\nspeld\nspelk\nspell\nspelt\nspend\nspent\nspeos\nsperm\nspesh\nspets\nspeug\nspews\nspewy\nspial\nspica\nspice\nspick\nspics\nspicy\nspide\nspied\nspiel\nspier\nspies\nspiff\nspifs\nspike\nspiks\nspiky\nspile\nspill\nspilt\nspims\nspina\nspine\nspink\nspins\nspiny\nspire\nspirt\nspiry\nspite\nspits\nspitz\nspivs\nsplat\nsplay\nsplit\nsplog\nspode\nspods\nspoil\nspoke\nspoof\nspook\nspool\nspoom\nspoon\nspoor\nspoot\nspore\nspork\nsport\nsposa\nsposh\nsposo\nspots\nspout\nsprad\nsprag\nsprat\nspray\nspred\nspree\nsprew\nsprig\nsprit\nsprod\nsprog\nsprue\nsprug\nspuds\nspued\nspuer\nspues\nspugs\nspule\nspume\nspumy\nspunk\nspurn\nspurs\nspurt\nsputa\nspyal\nspyre\nsquab\nsquad\nsquat\nsquaw\nsquee\nsqueg\nsquib\nsquid\nsquit\nsquiz\nsrsly\nstabs\nstack\nstade\nstaff\nstage\nstags\nstagy\nstaid\nstaig\nstain\nstair\nstake\nstale\nstalk\nstall\nstamp\nstand\nstane\nstang\nstank\nstans\nstaph\nstaps\nstare\nstark\nstarn\nstarr\nstars\nstart\nstary\nstash\nstate\nstats\nstatu\nstaun\nstave\nstaws\nstays\nstead\nsteak\nsteal\nsteam\nstean\nstear\nstedd\nstede\nsteds\nsteed\nsteek\nsteel\nsteem\nsteen\nsteep\nsteer\nsteez\nsteik\nsteil\nstein\nstela\nstele\nstell\nsteme\nstems\nstend\nsteno\nstens\nstent\nsteps\nstept\nstere\nstern\nstets\nstews\nstewy\nsteys\nstich\nstick\nstied\nsties\nstiff\nstilb\nstile\nstill\nstilt\nstime\nstims\nstimy\nsting\nstink\nstint\nstipa\nstipe\nstire\nstirk\nstirp\nstirs\nstive\nstivy\nstoae\nstoai\nstoas\nstoat\nstobs\nstock\nstoep\nstogs\nstogy\nstoic\nstoit\nstoke\nstole\nstoln\nstoma\nstomp\nstond\nstone\nstong\nstonk\nstonn\nstony\nstood\nstook\nstool\nstoop\nstoor\nstope\nstops\nstopt\nstore\nstork\nstorm\nstory\nstoss\nstots\nstott\nstoun\nstoup\nstour\nstout\nstove\nstown\nstowp\nstows\nstrad\nstrae\nstrag\nstrak\nstrap\nstraw\nstray\nstrep\nstrew\nstria\nstrig\nstrim\nstrip\nstrop\nstrow\nstroy\nstrum\nstrut\nstubs\nstuck\nstucs\nstude\nstuds\nstudy\nstuff\nstull\nstulm\nstumm\nstump\nstums\nstung\nstunk\nstuns\nstunt\nstupa\nstupe\nsture\nsturt\nstush\nstyed\nstyes\nstyle\nstyli\nstylo\nstyme\nstymy\nstyre\nstyte\nsuave\nsubah\nsubak\nsubas\nsubby\nsuber\nsubha\nsucci\nsucks\nsucky\nsucre\nsudan\nsudds\nsudor\nsudsy\nsuede\nsuent\nsuers\nsuete\nsuets\nsuety\nsugan\nsugar\nsughs\nsugos\nsuhur\nsuids\nsuing\nsuint\nsuite\nsuits\nsujee\nsukhs\nsukis\nsukuk\nsulci\nsulfa\nsulfo\nsulks\nsulky\nsulls\nsully\nsulph\nsulus\nsumac\nsumis\nsumma\nsumos\nsumph\nsumps\nsunis\nsunks\nsunna\nsunns\nsunny\nsunts\nsunup\nsuona\nsuped\nsuper\nsupes\nsupra\nsurah\nsural\nsuras\nsurat\nsurds\nsured\nsurer\nsures\nsurfs\nsurfy\nsurge\nsurgy\nsurly\nsurra\nsused\nsuses\nsushi\nsusus\nsutor\nsutra\nsutta\nswabs\nswack\nswads\nswage\nswags\nswail\nswain\nswale\nswaly\nswami\nswamp\nswamy\nswang\nswank\nswans\nswaps\nswapt\nsward\nsware\nswarf\nswarm\nswart\nswash\nswath\nswats\nswayl\nsways\nsweal\nswear\nsweat\nswede\nsweed\nsweel\nsweep\nsweer\nswees\nsweet\nsweir\nswell\nswelt\nswept\nswerf\nsweys\nswies\nswift\nswigs\nswile\nswill\nswims\nswine\nswing\nswink\nswipe\nswire\nswirl\nswish\nswiss\nswith\nswits\nswive\nswizz\nswobs\nswole\nswoll\nswoln\nswoon\nswoop\nswops\nswopt\nsword\nswore\nsworn\nswots\nswoun\nswung\nsybbe\nsybil\nsyboe\nsybow\nsycee\nsyces\nsycon\nsyeds\nsyens\nsyker\nsykes\nsylis\nsylph\nsylva\nsymar\nsynch\nsyncs\nsynds\nsyned\nsynes\nsynod\nsynth\nsyped\nsypes\nsyphs\nsyrah\nsyren\nsyrup\nsysop\nsythe\nsyver\ntaals\ntaata\ntabac\ntabby\ntaber\ntabes\ntabid\ntabis\ntabla\ntable\ntabls\ntaboo\ntabor\ntabos\ntabun\ntabus\ntacan\ntaces\ntacet\ntache\ntachi\ntacho\ntachs\ntacit\ntacks\ntacky\ntacos\ntacts\ntadah\ntaels\ntaffy\ntafia\ntaggy\ntagma\ntagua\ntahas\ntahrs\ntaiga\ntaigs\ntaiko\ntails\ntains\ntaint\ntaira\ntaish\ntaits\ntajes\ntakas\ntaken\ntaker\ntakes\ntakhi\ntakht\ntakin\ntakis\ntakky\ntalak\ntalaq\ntalar\ntalas\ntalcs\ntalcy\ntalea\ntaler\ntales\ntalik\ntalks\ntalky\ntalls\ntally\ntalma\ntalon\ntalpa\ntaluk\ntalus\ntamal\ntamas\ntamed\ntamer\ntames\ntamin\ntamis\ntammy\ntamps\ntanas\ntanga\ntangi\ntango\ntangs\ntangy\ntanhs\ntania\ntanka\ntanks\ntanky\ntanna\ntansu\ntansy\ntante\ntanti\ntanto\ntanty\ntapas\ntaped\ntapen\ntaper\ntapes\ntapet\ntapir\ntapis\ntappa\ntapus\ntaras\ntardo\ntards\ntardy\ntared\ntares\ntarga\ntarge\ntarka\ntarns\ntaroc\ntarok\ntaros\ntarot\ntarps\ntarre\ntarry\ntarse\ntarsi\ntarte\ntarts\ntarty\ntarzy\ntasar\ntasca\ntased\ntaser\ntases\ntasks\ntassa\ntasse\ntasso\ntaste\ntasto\ntasty\ntatar\ntater\ntates\ntaths\ntatie\ntatou\ntatts\ntatty\ntatus\ntaube\ntauld\ntaunt\ntauon\ntaupe\ntauts\ntauty\ntavah\ntavas\ntaver\ntawaf\ntawai\ntawas\ntawed\ntawer\ntawie\ntawny\ntawse\ntawts\ntaxed\ntaxer\ntaxes\ntaxis\ntaxol\ntaxon\ntaxor\ntaxus\ntayra\ntazza\ntazze\nteach\nteade\nteads\nteaed\nteaks\nteals\nteams\ntears\nteary\ntease\nteats\nteaze\ntechs\ntechy\ntecta\ntecum\nteddy\nteels\nteems\nteend\nteene\nteens\nteeny\nteers\nteeth\nteets\nteffs\nteggs\ntegua\ntegus\ntehee\ntehrs\nteiid\nteils\nteind\nteins\ntekke\ntelae\ntelco\nteles\ntelex\ntelia\ntelic\ntells\ntelly\nteloi\ntelos\ntemed\ntemes\ntempi\ntempo\ntemps\ntempt\ntemse\ntench\ntends\ntendu\ntenes\ntenet\ntenge\ntenia\ntenne\ntenno\ntenny\ntenon\ntenor\ntense\ntenth\ntents\ntenty\ntenue\ntepal\ntepas\ntepee\ntepid\ntepoy\nterai\nteras\nterce\nterek\nteres\nterfe\nterfs\nterga\nterms\nterne\nterns\nterra\nterre\nterry\nterse\nterts\nterza\ntesla\ntesta\nteste\ntests\ntesty\ntetes\nteths\ntetra\ntetri\nteuch\nteugh\ntewed\ntewel\ntewit\ntexas\ntexes\ntexta\ntexts\nthack\nthagi\nthaim\nthale\nthali\nthana\nthane\nthang\nthank\nthans\nthanx\ntharm\nthars\nthaws\nthawt\nthawy\nthebe\ntheca\ntheed\ntheek\nthees\ntheft\nthegn\ntheic\nthein\ntheir\nthelf\nthema\ntheme\nthens\ntheor\ntheow\nthere\ntherm\nthese\nthesp\ntheta\nthete\nthews\nthewy\nthick\nthief\nthigh\nthigs\nthilk\nthill\nthine\nthing\nthink\nthins\nthiol\nthird\nthirl\nthoft\nthole\ntholi\nthong\nthorn\nthoro\nthorp\nthose\nthots\nthous\nthowl\nthrae\nthraw\nthree\nthrew\nthrid\nthrip\nthrob\nthroe\nthrow\nthrum\nthuds\nthugs\nthuja\nthumb\nthump\nthunk\nthurl\nthuya\nthyme\nthymi\nthymy\ntians\ntiara\ntiare\ntiars\ntibia\ntical\nticca\nticed\ntices\ntichy\nticks\nticky\ntidal\ntiddy\ntided\ntides\ntiefs\ntiers\ntiffs\ntifos\ntifts\ntiger\ntiges\ntight\ntigon\ntikas\ntikes\ntikia\ntikis\ntikka\ntilak\ntilde\ntiled\ntiler\ntiles\ntills\ntilly\ntilth\ntilts\ntimbo\ntimed\ntimer\ntimes\ntimid\ntimon\ntimps\ntinas\ntinct\ntinds\ntinea\ntined\ntines\ntinge\ntings\ntinks\ntinny\ntinto\ntints\ntinty\ntipis\ntippy\ntipsy\ntipup\ntired\ntires\ntirls\ntiros\ntirrs\ntirth\ntitan\ntitar\ntitas\ntitch\ntiter\ntithe\ntithi\ntitin\ntitir\ntitis\ntitle\ntitre\ntitty\ntitup\ntiyin\ntiyns\ntizes\ntizzy\ntoads\ntoady\ntoast\ntoaze\ntocks\ntocky\ntocos\ntoday\ntodde\ntoddy\ntodea\ntodos\ntoeas\ntoffs\ntoffy\ntofts\ntofus\ntogae\ntogas\ntoged\ntoges\ntogue\ntohos\ntoidy\ntoile\ntoils\ntoing\ntoise\ntoits\ntoity\ntokay\ntoked\ntoken\ntoker\ntokes\ntokos\ntolan\ntolar\ntolas\ntoled\ntoles\ntolls\ntolly\ntolts\ntolus\ntolyl\ntoman\ntombo\ntombs\ntomen\ntomes\ntomia\ntomin\ntomme\ntommy\ntomos\ntomoz\ntonal\ntondi\ntondo\ntoned\ntoner\ntones\ntoney\ntonga\ntongs\ntonic\ntonka\ntonks\ntonne\ntonus\ntools\ntooms\ntoons\ntooth\ntoots\ntopaz\ntoped\ntopee\ntopek\ntoper\ntopes\ntophe\ntophi\ntophs\ntopic\ntopis\ntopoi\ntopos\ntoppy\ntoque\ntorah\ntoran\ntoras\ntorch\ntorcs\ntores\ntoric\ntorii\ntoros\ntorot\ntorrs\ntorse\ntorsi\ntorsk\ntorso\ntorta\ntorte\ntorts\ntorus\ntosas\ntosed\ntoses\ntoshy\ntossy\ntosyl\ntotal\ntoted\ntotem\ntoter\ntotes\ntotty\ntouch\ntough\ntouks\ntouns\ntours\ntouse\ntousy\ntouts\ntouze\ntouzy\ntowai\ntowed\ntowel\ntower\ntowie\ntowno\ntowns\ntowny\ntowse\ntowsy\ntowts\ntowze\ntowzy\ntoxic\ntoxin\ntoyed\ntoyer\ntoyon\ntoyos\ntozed\ntozes\ntozie\ntrabs\ntrace\ntrack\ntract\ntrade\ntrads\ntrady\ntraga\ntragi\ntrags\ntragu\ntraik\ntrail\ntrain\ntrait\ntramp\ntrams\ntrank\ntranq\ntrans\ntrant\ntrape\ntrapo\ntraps\ntrapt\ntrash\ntrass\ntrats\ntratt\ntrave\ntrawl\ntrayf\ntrays\ntread\ntreat\ntreck\ntreed\ntreen\ntrees\ntrefa\ntreif\ntreks\ntrema\ntrems\ntrend\ntress\ntrest\ntrets\ntrews\ntreyf\ntreys\ntriac\ntriad\ntrial\ntribe\ntrice\ntrick\ntride\ntried\ntrier\ntries\ntrifa\ntriff\ntrigo\ntrigs\ntrike\ntrild\ntrill\ntrims\ntrine\ntrins\ntriol\ntrior\ntrios\ntripe\ntrips\ntripy\ntrist\ntrite\ntroad\ntroak\ntroat\ntrock\ntrode\ntrods\ntrogs\ntrois\ntroke\ntroll\ntromp\ntrona\ntronc\ntrone\ntronk\ntrons\ntroop\ntrooz\ntrope\ntropo\ntroth\ntrots\ntrout\ntrove\ntrows\ntroys\ntruce\ntruck\ntrued\ntruer\ntrues\ntrugo\ntrugs\ntrull\ntruly\ntrump\ntrunk\ntruss\ntrust\ntruth\ntryer\ntryke\ntryma\ntryps\ntryst\ntsade\ntsadi\ntsars\ntsked\ntsuba\ntsubo\ntuans\ntuart\ntuath\ntubae\ntubal\ntubar\ntubas\ntubby\ntubed\ntuber\ntubes\ntucks\ntufas\ntuffe\ntuffs\ntufts\ntufty\ntugra\ntuile\ntuina\ntuism\ntuktu\ntules\ntulip\ntulle\ntulpa\ntulps\ntulsi\ntumid\ntummy\ntumor\ntumps\ntumpy\ntunas\ntunds\ntuned\ntuner\ntunes\ntungs\ntunic\ntunny\ntupek\ntupik\ntuple\ntuque\nturbo\nturds\nturfs\nturfy\nturks\nturme\nturms\nturns\nturnt\nturon\nturps\nturrs\ntushy\ntusks\ntusky\ntutee\ntutes\ntutor\ntutti\ntutty\ntutus\ntuxes\ntuyer\ntwaes\ntwain\ntwals\ntwang\ntwank\ntwats\ntways\ntweak\ntweed\ntweel\ntween\ntweep\ntweer\ntweet\ntwerk\ntwerp\ntwice\ntwier\ntwigs\ntwill\ntwilt\ntwine\ntwink\ntwins\ntwiny\ntwire\ntwirk\ntwirl\ntwirp\ntwist\ntwite\ntwits\ntwixt\ntwocs\ntwoer\ntwonk\ntwyer\ntyees\ntyers\ntying\ntyiyn\ntykes\ntyler\ntymps\ntynde\ntyned\ntynes\ntypal\ntyped\ntypes\ntypey\ntypic\ntypos\ntypps\ntypto\ntyran\ntyred\ntyres\ntyros\ntythe\ntzars\nubacs\nubity\nudals\nudder\nudons\nudyog\nugali\nugged\nuhlan\nuhuru\nukase\nulama\nulans\nulcer\nulema\nulmin\nulmos\nulnad\nulnae\nulnar\nulnas\nulpan\nultra\nulvas\nulyie\nulzie\numami\numbel\number\numble\numbos\numbra\numbre\numiac\numiak\numiaq\nummah\nummas\nummed\numped\numphs\numpie\numpty\numrah\numras\nunagi\nunais\nunapt\nunarm\nunary\nunaus\nunbag\nunban\nunbar\nunbed\nunbid\nunbox\nuncap\nunces\nuncia\nuncle\nuncos\nuncoy\nuncus\nuncut\nundam\nundee\nunder\nundid\nundos\nundue\nundug\nuneth\nunfed\nunfit\nunfix\nungag\nunget\nungod\nungot\nungum\nunhat\nunhip\nunica\nunify\nunion\nunios\nunite\nunits\nunity\nunjam\nunked\nunket\nunkey\nunkid\nunkut\nunlap\nunlaw\nunlay\nunled\nunleg\nunlet\nunlid\nunlit\nunmad\nunman\nunmet\nunmew\nunmix\nunode\nunold\nunown\nunpay\nunpeg\nunpen\nunpin\nunply\nunpot\nunput\nunred\nunrid\nunrig\nunrip\nunsaw\nunsay\nunsee\nunset\nunsew\nunsex\nunsod\nunsub\nuntag\nuntax\nuntie\nuntil\nuntin\nunwed\nunwet\nunwit\nunwon\nunzip\nupbow\nupbye\nupdos\nupdry\nupend\nupful\nupjet\nuplay\nupled\nuplit\nupped\nupper\nupran\nuprun\nupsee\nupset\nupsey\nuptak\nupter\nuptie\nuraei\nurali\nuraos\nurare\nurari\nurase\nurate\nurban\nurbex\nurbia\nurdee\nureal\nureas\nuredo\nureic\nureid\nurena\nurent\nurged\nurger\nurges\nurial\nurine\nurite\nurman\nurnal\nurned\nurped\nursae\nursid\nurson\nurubu\nurupa\nurvas\nusage\nusens\nusers\nuseta\nusher\nusing\nusnea\nusnic\nusque\nustad\nuster\nusual\nusure\nusurp\nusury\nuteri\nutero\nutile\nutter\nuveal\nuveas\nuvula\nvacas\nvacay\nvacua\nvacui\nvacuo\nvadas\nvaded\nvades\nvadge\nvagal\nvague\nvagus\nvaids\nvails\nvaire\nvairs\nvairy\nvajra\nvakas\nvakil\nvales\nvalet\nvalid\nvalis\nvalli\nvalor\nvalse\nvalue\nvalve\nvamps\nvampy\nvanda\nvaned\nvanes\nvanga\nvangs\nvants\nvaped\nvaper\nvapes\nvapid\nvapor\nvaran\nvaras\nvarda\nvardo\nvardy\nvarec\nvares\nvaria\nvarix\nvarna\nvarus\nvarve\nvasal\nvases\nvasts\nvasty\nvatas\nvatha\nvatic\nvatje\nvatos\nvatus\nvauch\nvault\nvaunt\nvaute\nvauts\nvawte\nvaxes\nveale\nveals\nvealy\nveena\nveeps\nveers\nveery\nvegan\nvegas\nveges\nveggo\nvegie\nvegos\nvehme\nveils\nveily\nveins\nveiny\nvelar\nvelds\nveldt\nveles\nvells\nvelum\nvenae\nvenal\nvenas\nvends\nvendu\nveney\nvenge\nvenin\nvenom\nventi\nvents\nvenue\nvenus\nverba\nverbs\nverde\nverge\nverra\nverre\nverry\nversa\nverse\nverso\nverst\nverte\nverts\nvertu\nverve\nvespa\nvesta\nvests\nvetch\nveuve\nveves\nvexed\nvexer\nvexes\nvexil\nvezir\nvials\nviand\nvibed\nvibes\nvibex\nvibey\nvicar\nviced\nvices\nvichy\nvicus\nvideo\nviers\nvieux\nviews\nviewy\nvifda\nviffs\nvigas\nvigia\nvigil\nvigor\nvilde\nviler\nvilla\nville\nvilli\nvills\nvimen\nvinal\nvinas\nvinca\nvined\nviner\nvines\nvinew\nvinho\nvinic\nvinny\nvinos\nvints\nvinyl\nviola\nviold\nviols\nviper\nviral\nvired\nvireo\nvires\nvirga\nvirge\nvirgo\nvirid\nvirls\nvirtu\nvirus\nvisas\nvised\nvises\nvisie\nvisit\nvisna\nvisne\nvison\nvisor\nvista\nvisto\nvitae\nvital\nvitas\nvitex\nvitro\nvitta\nvivas\nvivat\nvivda\nviver\nvives\nvivid\nvivos\nvivre\nvixen\nvizir\nvizor\nvlast\nvleis\nvlies\nvlogs\nvoars\nvobla\nvocab\nvocal\nvoces\nvoddy\nvodka\nvodou\nvodun\nvoema\nvogie\nvogue\nvoice\nvoici\nvoids\nvoila\nvoile\nvoips\nvolae\nvolar\nvoled\nvoles\nvolet\nvolke\nvolks\nvolta\nvolte\nvolti\nvolts\nvolva\nvolve\nvomer\nvomit\nvoted\nvoter\nvotes\nvouch\nvouge\nvoulu\nvowed\nvowel\nvower\nvoxel\nvoxes\nvozhd\nvraic\nvrils\nvroom\nvrous\nvrouw\nvrows\nvuggs\nvuggy\nvughs\nvughy\nvulgo\nvulns\nvulva\nvutty\nvygie\nvying\nwaacs\nwacke\nwacko\nwacks\nwacky\nwadas\nwadds\nwaddy\nwaded\nwader\nwades\nwadge\nwadis\nwadts\nwafer\nwaffs\nwafts\nwaged\nwager\nwages\nwagga\nwagon\nwagyu\nwahay\nwahey\nwahoo\nwaide\nwaifs\nwaift\nwails\nwains\nwairs\nwaist\nwaite\nwaits\nwaive\nwakas\nwaked\nwaken\nwaker\nwakes\nwakfs\nwaldo\nwalds\nwaled\nwaler\nwales\nwalie\nwalis\nwalks\nwalla\nwalls\nwally\nwalty\nwaltz\nwamed\nwames\nwamus\nwands\nwaned\nwanes\nwaney\nwangs\nwanks\nwanky\nwanle\nwanly\nwanna\nwanta\nwants\nwanty\nwanze\nwaqfs\nwarbs\nwarby\nwards\nwared\nwares\nwarez\nwarks\nwarms\nwarns\nwarps\nwarre\nwarst\nwarts\nwarty\nwases\nwashi\nwashy\nwasms\nwasps\nwaspy\nwaste\nwasts\nwatap\nwatch\nwater\nwatts\nwauff\nwaugh\nwauks\nwaulk\nwauls\nwaurs\nwaved\nwaver\nwaves\nwavey\nwawas\nwawes\nwawls\nwaxed\nwaxen\nwaxer\nwaxes\nwayed\nwazir\nwazoo\nweald\nweals\nweamb\nweans\nwears\nweary\nweave\nwebby\nweber\nwecht\nwedel\nwedge\nwedgy\nweeds\nweedy\nweeis\nweeke\nweeks\nweels\nweems\nweens\nweeny\nweeps\nweepy\nweest\nweete\nweets\nwefte\nwefts\nweids\nweigh\nweils\nweird\nweirs\nweise\nweize\nwekas\nwelch\nwelds\nwelke\nwelks\nwelkt\nwells\nwelly\nwelsh\nwelts\nwembs\nwench\nwends\nwenge\nwenny\nwents\nwerfs\nweros\nwersh\nwests\nwetas\nwetly\nwexed\nwexes\nwhack\nwhale\nwhamo\nwhams\nwhang\nwhaps\nwhare\nwharf\nwhata\nwhats\nwhaup\nwhaur\nwheal\nwhear\nwheat\nwheek\nwheel\nwheen\nwheep\nwheft\nwhelk\nwhelm\nwhelp\nwhens\nwhere\nwhets\nwhews\nwheys\nwhich\nwhids\nwhies\nwhiff\nwhift\nwhigs\nwhile\nwhilk\nwhims\nwhine\nwhins\nwhiny\nwhios\nwhips\nwhipt\nwhirl\nwhirr\nwhirs\nwhish\nwhisk\nwhiss\nwhist\nwhite\nwhits\nwhity\nwhizz\nwhole\nwhomp\nwhoof\nwhoop\nwhoot\nwhops\nwhore\nwhorl\nwhort\nwhose\nwhoso\nwhows\nwhump\nwhups\nwhyda\nwicca\nwicks\nwicky\nwiddy\nwiden\nwider\nwides\nwidow\nwidth\nwield\nwiels\nwifed\nwifes\nwifey\nwifie\nwifts\nwifty\nwigan\nwigga\nwiggy\nwight\nwikis\nwilco\nwilds\nwiled\nwiles\nwilga\nwilis\nwilja\nwills\nwilly\nwilts\nwimps\nwimpy\nwince\nwinch\nwinds\nwindy\nwined\nwines\nwiney\nwinge\nwings\nwingy\nwinks\nwinky\nwinna\nwinns\nwinos\nwinze\nwiped\nwiper\nwipes\nwired\nwirer\nwires\nwirra\nwirri\nwised\nwiser\nwises\nwisha\nwisht\nwisps\nwispy\nwists\nwitan\nwitch\nwited\nwites\nwithe\nwiths\nwithy\nwitty\nwived\nwiver\nwives\nwizen\nwizes\nwizzo\nwoads\nwoady\nwoald\nwocks\nwodge\nwodgy\nwoful\nwojus\nwoken\nwoker\nwokka\nwolds\nwolfs\nwolly\nwolve\nwoman\nwomas\nwombs\nwomby\nwomen\nwomyn\nwonga\nwongi\nwonks\nwonky\nwonts\nwoods\nwoody\nwooed\nwooer\nwoofs\nwoofy\nwoold\nwools\nwooly\nwoons\nwoops\nwoopy\nwoose\nwoosh\nwootz\nwoozy\nwords\nwordy\nworks\nworky\nworld\nworms\nwormy\nworry\nworse\nworst\nworth\nworts\nwould\nwound\nwoven\nwowed\nwowee\nwowse\nwoxen\nwrack\nwrang\nwraps\nwrapt\nwrast\nwrate\nwrath\nwrawl\nwreak\nwreck\nwrens\nwrest\nwrick\nwried\nwrier\nwries\nwring\nwrist\nwrite\nwrits\nwroke\nwrong\nwroot\nwrote\nwroth\nwrung\nwryer\nwryly\nwuddy\nwudus\nwuffs\nwulls\nwunga\nwurst\nwuses\nwushu\nwussy\nwuxia\nwyled\nwyles\nwynds\nwynns\nwyted\nwytes\nwythe\nxebec\nxenia\nxenic\nxenon\nxeric\nxerox\nxerus\nxoana\nxolos\nxrays\nxviii\nxylan\nxylem\nxylic\nxylol\nxylyl\nxysti\nxysts\nyaars\nyaass\nyabas\nyabba\nyabby\nyacca\nyacht\nyacka\nyacks\nyadda\nyaffs\nyager\nyages\nyagis\nyagna\nyahoo\nyaird\nyajna\nyakka\nyakow\nyales\nyamen\nyampa\nyampy\nyamun\nyandy\nyangs\nyanks\nyapok\nyapon\nyapps\nyappy\nyarak\nyarco\nyards\nyarer\nyarfa\nyarks\nyarns\nyarra\nyarrs\nyarta\nyarto\nyates\nyatra\nyauds\nyauld\nyaups\nyawed\nyawey\nyawls\nyawns\nyawny\nyawps\nyayas\nybore\nyclad\nycled\nycond\nydrad\nydred\nyeads\nyeahs\nyealm\nyeans\nyeard\nyearn\nyears\nyeast\nyecch\nyechs\nyechy\nyedes\nyeeds\nyeeek\nyeesh\nyeggs\nyelks\nyells\nyelms\nyelps\nyelts\nyenta\nyente\nyerba\nyerds\nyerks\nyeses\nyesks\nyests\nyesty\nyetis\nyetts\nyeuch\nyeuks\nyeuky\nyeven\nyeves\nyewen\nyexed\nyexes\nyfere\nyield\nyiked\nyikes\nyills\nyince\nyipes\nyippy\nyirds\nyirks\nyirrs\nyirth\nyites\nyitie\nylems\nylide\nylids\nylike\nylkes\nymolt\nympes\nyobbo\nyobby\nyocks\nyodel\nyodhs\nyodle\nyogas\nyogee\nyoghs\nyogic\nyogin\nyogis\nyohah\nyohay\nyoick\nyojan\nyokan\nyoked\nyokeg\nyokel\nyoker\nyokes\nyokul\nyolks\nyolky\nyolps\nyomim\nyomps\nyonic\nyonis\nyonks\nyonny\nyoofs\nyoops\nyopos\nyoppo\nyores\nyorga\nyorks\nyorps\nyouks\nyoung\nyourn\nyours\nyourt\nyouse\nyouth\nyowed\nyowes\nyowie\nyowls\nyowsa\nyowza\nyoyos\nyrapt\nyrent\nyrivd\nyrneh\nysame\nytost\nyuans\nyucas\nyucca\nyucch\nyucko\nyucks\nyucky\nyufts\nyugas\nyuked\nyukes\nyukky\nyukos\nyulan\nyules\nyummo\nyummy\nyumps\nyupon\nyuppy\nyurta\nyurts\nyuzus\nzabra\nzacks\nzaida\nzaide\nzaidy\nzaire\nzakat\nzamac\nzamak\nzaman\nzambo\nzamia\nzamis\nzanja\nzante\nzanza\nzanze\nzappy\nzarda\nzarfs\nzaris\nzatis\nzawns\nzaxes\nzayde\nzayin\nzazen\nzeals\nzebec\nzebra\nzebub\nzebus\nzedas\nzeera\nzeins\nzendo\nzerda\nzerks\nzeros\nzests\nzesty\nzetas\nzexes\nzezes\nzhomo\nzhush\nzhuzh\nzibet\nziffs\nzigan\nzikrs\nzilas\nzilch\nzilla\nzills\nzimbi\nzimbs\nzinco\nzincs\nzincy\nzineb\nzines\nzings\nzingy\nzinke\nzinky\nzinos\nzippo\nzippy\nziram\nzitis\nzitty\nzizel\nzizit\nzlote\nzloty\nzoaea\nzobos\nzobus\nzocco\nzoeae\nzoeal\nzoeas\nzoism\nzoist\nzokor\nzolle\nzombi\nzonae\nzonal\nzonda\nzoned\nzoner\nzones\nzonks\nzooea\nzooey\nzooid\nzooks\nzooms\nzoomy\nzoons\nzooty\nzoppa\nzoppo\nzoril\nzoris\nzorro\nzorse\nzouks\nzowee\nzowie\nzulus\nzupan\nzupas\nzuppa\nzurfs\nzuzim\nzygal\nzygon\nzymes\nzymic"
    var Oa = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"],
        Ma = TotallyGoodText.split(/\r?\n/),
        Ra = "present",
        Ha = "correct",
        Na = "absent";
    var Pa = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };

    function $a(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = a[t][n],
                        i = s[o] || "unknown";
                    Pa[r] > Pa[i] && (s[o] = r)
                }
        })), s
    }

    function Da(e) {
        var a = ["th", "st", "nd", "rd"],
            s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ba = new Date(2021, 5, 19, 0, 0, 0, 0);

    function Ga(e, a) {
        return Math.floor(Math.random() * Ma.length)
    }

    function Va(e) {
        var a, s = Fa(e);
        return a = s % Ma.length, Ma[a]
    }

    function Fa(e) {
        return Ga(Ba, e)
    }
    var Wa = "abcdefghijklmnopqrstuvwxyz";
    var Ya = "nyt-wordle-statistics",
        Ua = "fail",
        Ja = {
            currentStreak: 0,
            maxStreak: 0,
            guesses: o({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }, Ua, 0),
            winPercentage: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            averageGuesses: 0
        };

    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ja);
        return JSON.parse(e)
    }

    function Za(e) {
        var a = e.isWin,
            s = e.isStreak,
            t = e.numGuesses,
            n = Xa();
        window.willFixStreak && (1 === n.currentStreak && n.currentStreak < n.maxStreak && (n.currentStreak += n.maxStreak, n.maxStreak += 1), window.willFixStreak = !1), a ? (n.guesses[t] += 1, s ? n.currentStreak += 1 : n.currentStreak = 1) : (n.currentStreak = 0, n.guesses.fail += 1), n.maxStreak = Math.max(n.currentStreak, n.maxStreak), n.gamesPlayed += 1, n.gamesWon += a ? 1 : 0, n.winPercentage = Math.round(n.gamesWon / n.gamesPlayed * 100), n.averageGuesses = Math.round(Object.entries(n.guesses).reduce((function(e, a) {
                var s = y(a, 2),
                    t = s[0],
                    n = s[1];
                return t !== Ua ? e += t * n : e
            }), 0) / n.gamesWon),
            function(e) {
                window.localStorage.setItem(Ya, JSON.stringify(e))
            }(n)
    }
    var Ka, Qa = "nyt-wordle-refresh",
        es = window.localStorage;

    function as() {
        return Ka || (Ka = setInterval((function() {
            es.getItem(Qa) && (es.removeItem(Qa), window.location.href.match(/.*\.nytimes\.com/g) ? window.location.reload(!0) : window.location.replace("https://www.nytimes.com/games/wordle"))
        }), 432e5))
    }
    var ss = "nyt-wordle-statistics",
        ts = window.localStorage;

    function ns(e, a) {
        if (!e.gamesPlayed) return !1;
        var s = function() {
            var e = {
                gamesPlayed: 0
            };
            try {
                var a = JSON.parse(ts.getItem(ss));
                if (a && a.gamesPlayed) return a
            } catch (a) {
                return e
            }
            return e
        }();
        return !(s.gamesPlayed && !a) || e.gamesPlayed > s.gamesPlayed
    }

    function os() {
        if (ts) {
            try {
                var e = new Proxy(new URLSearchParams(window.location.search), {
                    get: function(e, a) {
                        return e.get(a)
                    }
                });
                if (e.data) ! function(e) {
                    if (!e.statistics) throw new Error("User local data does not contain statistics. Aborting transfer.");
                    if (ns(e.statistics, e.force)) {
                        ts.setItem(ss, JSON.stringify(e.statistics));
                        var a = e.darkTheme;
                        window.themeManager.setDarkTheme(a);
                        var s = !!e.colorBlindTheme;
                        window.themeManager.setColorBlindTheme(s)
                    }
                }(JSON.parse(e.data))
            } catch (e) {}
            window.history.replaceState({}, document.title, new URL(location.pathname, location.href).href)
        }
    }
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: calc(100% - var(--header-height));\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-family: \'nyt-karnakcondensed\';\n    font-weight: 700;\n    font-size: 37px;\n    line-height: 100%;\n    letter-spacing: 0.01em;\n    text-align: center;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n  menu-left {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    align-items: center;\n  }\n  menu-right {\n    display: inline-block;\n  }\n  #nav-button {\n    padding-top: 2px;\n  }\n\n  @media (min-width: 415px) {\n    header {\n      padding: 0px 16px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n  <header>\n  <div class="menu-left" style="display: flex;">\n    <button id="nav-button" class="icon" aria-label="Navigation menu. Click for links to other NYT Games and our Privacy Policy." tabindex="-1">\n      <nav-icon></nav-icon>\n    </button>\n    <button id="help-button" class="icon" aria-label="Help" tabindex="-1">\n      <game-icon icon="help"></game-icon>\n    </button>\n  </div>\n  <div class="title">\n    Obscordle\n  </div>\n  <div class="menu-right">\n    <button id="statistics-button" class="icon" aria-label="Statistics" tabindex="-1">\n      <game-icon icon="statistics"></game-icon>\n    </button>\n    <button id="settings-button" class="icon" aria-label="Settings" tabindex="-1">\n      <game-icon icon="settings"></game-icon>\n    </button>\n  </div>\n</header>\n    <div id="game">\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-nav-modal></game-nav-modal>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var is = document.createElement("template");
    is.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var ls = "IN_PROGRESS",
        ds = "WIN",
        cs = "FAIL",
        us = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"],
        ms = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), o(m(e = a.call(this)), "tileIndex", 0), o(m(e), "rowIndex", 0), o(m(e), "solution", void 0), o(m(e), "boardState", void 0), o(m(e), "evaluations", void 0), o(m(e), "canInput", !0), o(m(e), "gameStatus", ls), o(m(e), "letterEvaluations", {}), o(m(e), "$board", void 0), o(m(e), "$keyboard", void 0), o(m(e), "$game", void 0), o(m(e), "today", void 0), o(m(e), "lastPlayedTs", void 0), o(m(e), "lastCompletedTs", void 0), o(m(e), "hardMode", void 0), o(m(e), "dayOffset", void 0), e.attachShadow({
                    mode: "open"
                }), e.today = new Date, e.refreshTimer = as();
                var n = za();
                e.lastPlayedTs = n.lastPlayedTs, e.lastCompletedTs = n.lastCompletedTs;
                var r = new Date("02/10/2022 19:00:00 EST");
                return window.willFixStreak = !!e.lastCompletedTs && new Date(e.lastCompletedTs) < new Date(r), !e.lastPlayedTs || Ga(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Va(e.today), e.dayOffset = Fa(e.today), e.lastCompletedTs = n.lastCompletedTs, e.hardMode = n.hardMode, e.restoringFromLocalStorage = !1, ja({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                })) : (e.boardState = n.boardState, e.evaluations = n.evaluations, e.rowIndex = n.rowIndex, e.solution = n.solution, e.dayOffset = Fa(e.today), e.letterEvaluations = $a(e.boardState, e.evaluations), e.gameStatus = n.gameStatus, e.lastCompletedTs = n.lastCompletedTs, e.hardMode = n.hardMode, e.gameStatus !== ls && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }
            return n(t, [{
                key: "evaluateRow",
                value: function() {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                        if (e = s, !Oa.includes(e) && !Ma.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
                        if (this.hardMode) {
                            var t = function(e, a, s) {
                                    if (!e || !a || !s) return {
                                        validGuess: !0
                                    };
                                    for (var t = 0; t < s.length; t++)
                                        if (s[t] === Ha && e[t] !== a[t]) return {
                                            validGuess: !1,
                                            errorMessage: "".concat(Da(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                        };
                                    for (var n = {}, o = 0; o < s.length; o++)[Ha, Ra].includes(s[o]) && (n[a[o]] ? n[a[o]] += 1 : n[a[o]] = 1);
                                    var r = e.split("").reduce((function(e, a) {
                                        return e[a] ? e[a] += 1 : e[a] = 1, e
                                    }), {});
                                    for (var i in n)
                                        if ((r[i] || 0) < n[i]) return {
                                            validGuess: !1,
                                            errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                        };
                                    return {
                                        validGuess: !0
                                    }
                                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                n = t.validGuess,
                                o = t.errorMessage;
                            if (!n) return a.setAttribute("invalid", ""), void this.addToast(o || "Not valid in hard mode")
                        }
                        var r = function(e, a) {
                            for (var s = Array(a.length).fill(Na), t = Array(a.length).fill(!0), n = Array(a.length).fill(!0), o = 0; o < e.length; o++) e[o] === a[o] && n[o] && (s[o] = Ha, t[o] = !1, n[o] = !1);
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (t[r])
                                    for (var l = 0; l < a.length; l++) {
                                        var d = a[l];
                                        if (n[l] && i === d) {
                                            s[r] = Ra, n[l] = !1;
                                            break
                                        }
                                    }
                            }
                            return s
                        }(s, this.solution);
                        this.evaluations[this.rowIndex] = r, this.letterEvaluations = $a(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                        var i = this.rowIndex >= 6,
                            l = r.every((function(e) {
                                return "correct" === e
                            }));
                        if (i || l) {
                            Za({
                                isWin: l,
                                isStreak: !0,
                                numGuesses: this.rowIndex
                            }), ja({
                                lastCompletedTs: Date.now()
                            }), this.gameStatus = l ? ds : cs, es.setItem(Qa, !0)
                        }
                        this.tileIndex = 0, this.canInput = !1, ja({
                            rowIndex: this.rowIndex,
                            boardState: this.boardState,
                            evaluations: this.evaluations,
                            solution: this.solution,
                            gameStatus: this.gameStatus,
                            lastPlayedTs: Date.now()
                        })
                    }
                }
            }, {
                key: "addLetter",
                value: function(e) {
                    this.gameStatus === ls && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
                }
            }, {
                key: "removeLetter",
                value: function() {
                    if (this.gameStatus === ls && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess",
                value: function() {
                    if (this.gameStatus === ls && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "addToast",
                value: function(e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function() {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal"),
                        a = document.createElement("game-stats");
                    this.gameStatus === ds && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showNavModal",
                value: function() {
                    var e = this.$game.querySelector("game-nav-modal"),
                        a = document.createElement("game-nav");
                    a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e, a, s, t, n, o, r, i, l, d = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                        return d.showHelpModal()
                    }), 100);
                    for (var c = 0; c < 6; c++) {
                        var u = document.createElement("game-row");
                        u.setAttribute("letters", this.boardState[c]), u.setAttribute("length", 5), this.evaluations[c] && (u.evaluation = this.evaluations[c]), this.$board.appendChild(u)
                    }
                    this.$game.addEventListener("game-key-press", (function(e) {
                            var a = e.detail.key;
                            "←" === a || "Backspace" === a ? d.removeLetter() : "↵" === a || "Enter" === a ? d.submitGuess() : Wa.includes(a.toLowerCase()) && d.addLetter(a.toLowerCase())
                        })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(e) {
                            d.$keyboard.letterEvaluations = d.letterEvaluations, d.rowIndex < 6 && (d.canInput = !0);
                            var a = d.$board.querySelectorAll("game-row")[d.rowIndex - 1];
                            (e.path || e.composedPath && e.composedPath()).includes(a) && ([ds, cs].includes(d.gameStatus) && (d.restoringFromLocalStorage ? d.showStatsModal() : (d.gameStatus === ds && (a.setAttribute("win", ""), d.addToast(us[d.rowIndex - 1], 2e3)), d.gameStatus === cs && d.addToast(d.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                                d.showStatsModal()
                            }), 2500))), d.restoringFromLocalStorage = !1)
                        })), this.shadowRoot.addEventListener("game-setting-change", (function(e) {
                            var a = e.detail,
                                s = a.name,
                                t = a.checked,
                                n = a.disabled;
                            switch (s) {
                                case "hard-mode":
                                    return void(n ? d.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (d.hardMode = t, ja({
                                        hardMode: t
                                    })))
                            }
                        })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(e) {
                            var a = d.$game.querySelector("game-page"),
                                s = document.createTextNode("Settings");
                            a.appendChild(s);
                            var t = document.createElement("game-settings");
                            t.setAttribute("slot", "content"), t.gameApp = d, a.appendChild(t), a.setAttribute("open", "")
                        })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(e) {
                            var a = d.$game.querySelector("game-page"),
                                s = document.createTextNode("How to play");
                            a.appendChild(s);
                            var t = document.createElement("game-help");
                            t.setAttribute("page", ""), t.setAttribute("slot", "content"), a.appendChild(t), a.setAttribute("open", "")
                        })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(e) {
                            d.showStatsModal()
                        })), this.shadowRoot.getElementById("nav-button").addEventListener("click", (function(e) {
                            d.showNavModal()
                        })), window.addEventListener("resize", this.sizeBoard.bind(this)), os(), i = {
                            container: "GTM-P528B3",
                            prdstring: "&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130",
                            devstring: "&gtm_auth=WiJyA7zv1sohHCWSZ3mF1Q&gtm_preview=env-8",
                            stgstring: "&gtm_auth=FOuAsPhG-4kWeLk6Kq5AzQ&gtm_preview=env-7",
                            dataLayer: "",
                            modifier: "",
                            env: document.location.host.indexOf(".dev.") > -1 ? "dev" : document.location.host.indexOf(".stg.") > -1 || document.location.host.indexOf(".stage.") > -1 ? "stg" : "prod"
                        }, l = {
                            event: "pageDataReady",
                            application: {
                                name: "games-crosswords",
                                environment: i.env
                            }
                        }, i.modifier = i.prdstring, "dev" === i.env ? i.modifier = i.devstring : "stg" === i.env && (i.modifier = i.stgstring),
                        function(e, a, s, t, n, o) {
                            e[t] = e[t] || [], e[t].push({
                                "gtm.start": (new Date).getTime(),
                                event: "gtm.js"
                            });
                            var r = a.getElementsByTagName(s)[0],
                                i = a.createElement(s);
                            i.async = !0, i.src = "https://www.googletagmanager.com/gtm.js?id=" + n + o + "&gtm_cookies_win=x" /*,r.parentNode.insertBefore(i,r)*/
                        }(window, document, "script", "dataLayer", i.container, i.modifier), e = l, a = i.env, t = a && "prod" === a ? "a.nytimes.com" : "a.dev.nytimes.com", n = encodeURIComponent(document.referrer), o = encodeURIComponent((s = document.querySelector("link[rel=canonical]")) ? s.href : document.location.href), (r = new XMLHttpRequest).withCredentials = !0, r.open("GET", "https://" + t + "/svc/nyt/data-layer?sourceApp=" + e.application.name + "&referrer=" + n + "&assetUrl=" + o, !0), r.onload = function() {
                            var a = JSON.parse(r.responseText);
                            a.event = "userDataReady", window.dataLayer.push(a), window.dataLayer.push(e)
                        }, r.addEventListener("error", (function() {
                            window.dataLayer.push(e)
                        })) /*,r.send()*/
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    clearInterval(this.refreshTimer)
                }
            }, {
                key: "debugTools",
                value: function() {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(is.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                        e.addToast("hello world")
                    })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz", s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                        e.evaluateRow()
                    })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                    })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                    }))
                }
            }]), t
        }(u(HTMLElement));
    customElements.define("game-app", ms);
    var ps = document.createElement("template");
    ps.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var hs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(ps.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-modal", hs);
    var ys = document.createElement("template");
    ys.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var gs = document.createElement("template");
    gs.innerHTML = "\n  <button>key</button>\n";
    var bs = document.createElement("template");
    bs.innerHTML = '\n  <div class="spacer"></div>\n';
    var fs = [
            ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
            ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
        ],
        ks = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), o(m(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                    mode: "open"
                }), e
            }
            return n(t, [{
                key: "letterEvaluations",
                set: function(e) {
                    this._letterEvaluations = e, this._render()
                }
            }, {
                key: "dispatchKeyPressEvent",
                value: function(e) {
                    this.dispatchEvent(new CustomEvent("game-key-press", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            key: e
                        }
                    }))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(ys.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })), window.addEventListener("keydown", (function(a) {
                        if (!0 !== a.repeat) {
                            var s = a.key,
                                t = a.metaKey,
                                n = a.ctrlKey;
                            t || n || (Wa.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })), fs.forEach((function(a) {
                        var s = document.createElement("div");
                        s.classList.add("row"), a.forEach((function(e) {
                            var a;
                            if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                                if ((a = gs.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                                }
                                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                            } else(a = bs.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })), e.$keyboard.appendChild(s)
                    })), this._render()
                }
            }, {
                key: "_render",
                value: function() {
                    for (var e in this._letterEvaluations) {
                        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                    }
                }
            }]), t
        }(u(HTMLElement));
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function vs(e, a, s, t) {
        return new(s || (s = Promise))((function(n, o) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var a;
                e.done ? n(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
                    e(a)
                }))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }))
    }

    function ws(e, a) {
        var s, t, n, o, r = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function i(o) {
            return function(i) {
                return function(o) {
                    if (s) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (s = 1, t && (n = 2 & o[0] ? t.return : o[0] ? t.throw || ((n = t.return) && n.call(t), 0) : t.next) && !(n = n.call(t, o[1])).done) return n;
                        switch (t = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return r.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, t = o[1], o = [0];
                                continue;
                            case 7:
                                o = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!((n = (n = r.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    r.label = o[1];
                                    break
                                }
                                if (6 === o[0] && r.label < n[1]) {
                                    r.label = n[1], n = o;
                                    break
                                }
                                if (n && r.label < n[2]) {
                                    r.label = n[2], r.ops.push(o);
                                    break
                                }
                                n[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        o = a.call(e, r)
                    } catch (e) {
                        o = [6, e], t = 0
                    } finally {
                        s = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, i])
            }
        }
    }
    customElements.define("game-keyboard", ks),
        function() {
            (console.warn || console.log).apply(console, arguments)
        }.bind("[clipboard-polyfill]");
    var xs, zs, js, Ss, Cs = "undefined" == typeof navigator ? void 0 : navigator,
        Es = null == Cs ? void 0 : Cs.clipboard;
    null === (xs = null == Es ? void 0 : Es.read) || void 0 === xs || xs.bind(Es), null === (zs = null == Es ? void 0 : Es.readText) || void 0 === zs || zs.bind(Es);
    var _s = (null === (js = null == Es ? void 0 : Es.write) || void 0 === js || js.bind(Es), null === (Ss = null == Es ? void 0 : Es.writeText) || void 0 === Ss ? void 0 : Ss.bind(Es)),
        qs = "undefined" == typeof window ? void 0 : window,
        Ls = (null == qs || qs.ClipboardItem, qs);
    var Ts = function() {
        this.success = !1
    };

    function As(e, a, s) {
        for (var t in e.success = !0, a) {
            var n = a[t],
                o = s.clipboardData;
            o.setData(t, n), "text/plain" === t && o.getData(t) !== n && (e.success = !1)
        }
        s.preventDefault()
    }

    function Is(e) {
        var a = new Ts,
            s = As.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }

    function Ms(e, a) {
        Os(e);
        var s = Is(a);
        return Rs(), s
    }

    function Os(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
        }
    }

    function Rs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }

    function Hs(e) {
        return vs(this, void 0, void 0, (function() {
            var a;
            return ws(this, (function(s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== Ls.clipboardData && void 0 !== Ls.clipboardData.setData) {
                    if (!a) throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"], Ls.clipboardData.setData("Text", t)) return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return Is(e) || navigator.userAgent.indexOf("Edge") > -1 || Ms(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                    var s = Ms(a, e);
                    return document.body.removeChild(a), s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e, s.appendChild(t), document.body.appendChild(a), Os(t);
                    var n = document.execCommand("copy");
                    return Rs(), document.body.removeChild(a), n
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }))
        }))
    }

    function Ns(e, a, s) {
        try {
            Sa() && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e) ? navigator.share(e) : function(e) {
                return vs(this, void 0, void 0, (function() {
                    return ws(this, (function(a) {
                        if (_s) return [2, _s(e)];
                        if (!Hs(function(e) {
                                var a = {};
                                return a["text/plain"] = e, a
                            }(e))) throw new Error("writeText() failed");
                        return [2]
                    }))
                }))
            }(e.text).then(a, s)
        } catch (e) {
            s()
        }
    }
    var Ps = document.createElement("template");
    Ps.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var $s = document.createElement("template");
    $s.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ds = document.createElement("template");
    Ds.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Bs = document.createElement("template");
    Bs.innerHTML = '\n  <div class="countdown">\n    <h1>Next OBSCORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Gs = {
            currentStreak: "Current Streak",
            maxStreak: "Max Streak",
            winPercentage: "Win %",
            gamesPlayed: "Played",
            gamesWon: "Won",
            averageGuesses: "Av. Guesses"
        },
        Vs = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), o(m(e = a.call(this)), "stats", {}), o(m(e), "gameApp", void 0), e.attachShadow({
                    mode: "open"
                }), e.stats = Xa(), e
            }
            return n(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
                    var a = this.shadowRoot.getElementById("statistics"),
                        s = this.shadowRoot.getElementById("guess-distribution"),
                        t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                    if (Object.values(this.stats.guesses).every((function(e) {
                            return 0 === e
                        }))) {
                        var n = document.createElement("div");
                        n.classList.add("no-data"), n.innerText = "No Data", s.appendChild(n)
                    } else
                        for (var o = 1; o < Object.keys(this.stats.guesses).length; o++) {
                            var r = o,
                                i = this.stats.guesses[o],
                                l = Ds.content.cloneNode(!0),
                                d = Math.max(7, Math.round(i / t * 100));
                            l.querySelector(".guess").textContent = r;
                            var c = l.querySelector(".graph-bar");
                            if (c.style.width = "".concat(d, "%"), "number" == typeof i) {
                                l.querySelector(".num-guesses").textContent = i, i > 0 && c.classList.add("align-right");
                                var u = parseInt(this.getAttribute("highlight-guess"), 10);
                                u && o === u && c.classList.add("highlight")
                            }
                            s.appendChild(l)
                        }
                    if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                            var t = Gs[s],
                                n = e.stats[s],
                                o = $s.content.cloneNode(!0);
                            o.querySelector(".label").textContent = t, o.querySelector(".statistic").textContent = n, a.appendChild(o)
                        })), this.gameApp.gameStatus !== ls) {
                        var m = this.shadowRoot.querySelector(".footer"),
                            p = Bs.content.cloneNode(!0);
                        m.appendChild(p), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                            a.preventDefault(), a.stopPropagation();
                            Ns(function(e) {
                                var a = e.evaluations,
                                    s = e.dayOffset,
                                    t = e.rowIndex,
                                    n = e.isHardMode,
                                    o = e.isWin,
                                    r = JSON.parse(window.localStorage.getItem(j)),
                                    i = JSON.parse(window.localStorage.getItem(S)),
                                    l = "OBSCORDLE ".concat(s);
                                l += " ".concat(o ? t : "X", "/").concat(6), n && (l += "*");
                                var d = "";
                                return a.forEach((function(e) {
                                    e && (e.forEach((function(e) {
                                        if (e) {
                                            var a = "";
                                            switch (e) {
                                                case Ha:
                                                    a = function(e) {
                                                        return e ? "🟧" : "🟩"
                                                    }(i);
                                                    break;
                                                case Ra:
                                                    a = function(e) {
                                                        return e ? "🟦" : "🟨"
                                                    }(i);
                                                    break;
                                                case Na:
                                                    a = function(e) {
                                                        return e ? "⬛" : "⬜"
                                                    }(r)
                                            }
                                            d += a
                                        }
                                    })), d += "\n")
                                })), {
                                    text: "".concat(l, "\n\n").concat(d.trimEnd())
                                }
                            }({
                                evaluations: e.gameApp.evaluations,
                                dayOffset: e.gameApp.dayOffset,
                                rowIndex: e.gameApp.rowIndex,
                                isHardMode: e.gameApp.hardMode,
                                isWin: e.gameApp.gameStatus === ds
                            }), (function() {
                                e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                            }), (function() {
                                e.gameApp.addToast("Share failed", 2e3, !0)
                            }))
                        }))
                    }
                }
            }]), t
        }(u(HTMLElement));
    customElements.define("game-stats", Vs);
    var Fs = document.createElement("template"),
        Ws = [{
            id: "spelling-bee",
            name: "Spelling Bee",
            url: "/puzzles/spelling-bee",
            backgroundImage: "var(--spelling-bee)"
        }, {
            id: "crossword",
            name: "The Crossword",
            url: "/crosswords/game/daily",
            backgroundImage: "var(--daily)"
        }, {
            id: "mini",
            name: "The Mini",
            url: "/crosswords/game/mini",
            backgroundImage: "var(--mini)"
        }, {
            id: "tiles",
            name: "Tiles",
            url: "/puzzles/tiles",
            backgroundImage: "var(--tiles)"
        }, {
            id: "sudoku",
            name: "Sudoku",
            url: "/puzzles/sudoku",
            backgroundImage: "var(--sudoku)"
        }, {
            id: "vertex",
            name: "Vertex",
            url: "/puzzles/vertex",
            backgroundImage: "var(--vertex)"
        }, {
            id: "letter-boxed",
            name: "Letter Boxed",
            url: "/puzzles/letter-boxed",
            backgroundImage: "var(--letter-boxed)"
        }, {
            id: "all-games",
            name: "All Games",
            url: "/puzzles"
        }].map((function(e) {
            return "\n    <a href=".concat(e.url, " id=").concat(e.id, '>\n      <div class="nav-item" style="--hover-color: var(--color-nav-hover)">\n        <span style="background-image: ').concat(e.backgroundImage, '; background-size: 20px;"class="nav-icon"></span>\n          ').concat(e.name, " \n      </div>\n    </a>\n    ")
        })).join("");
    Fs.innerHTML = "\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: left;\n      justify-content: center;\n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    .nav-container {\n      flex: 1;\n    }\n\n    .nav-container .nav {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .nav-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    .nav-list {\n        list-style: none;\n        color: var(--color-tone-1);\n        padding: unset;\n        margin: unset;\n    }\n\n    .nav-item {\n        display: flex;\n        justify-content: left;\n        align-items: center;\n        height: 40px;\n        font-weight: 500;\n        font-family: 'nyt-franklin';\n        font-size: 16px;\n        line-height: 16px;\n        padding-left: 18px;\n    }\n\n    .nav-item:hover {\n        background-color: var(--hover-color);\n    }\n\n    .nav-icon {\n        padding-bottom: 2px;\n        content: '';\n        height: 20px;\n        width: 28px;\n        padding-right: 8px;\n        display: inline-block;\n        vertical-align: middle;\n        background-repeat: no-repeat;\n    }\n\n    #nav {\n      padding-bottom: 10px;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    .more-text {\n        font-family: 'nyt-franklin-700';\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 12px;\n        line-height: 12px;\n        margin: 32px 0px 24px 0px;\n        padding-left: 18px;\n    }\n\n    .nav-header {\n        padding-top: 18px;\n        padding-left: 18px;\n    }\n\n    .privacy {\n      letter-spacing: .5px;\n      font-family: 'nyt-franklin';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 0px 25px 0px 17px;\n      padding: 12px 0px;\n      border-top: 1px solid #DCDCDC;\n      color: var(--color-tone-1);\n      font-size: 15px;\n      text-align: right;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end;\n    }\n  </style>\n\n  <div class=\"container\">\n    <span class=\"nav-header\">\n        <nyt-icon></nyt-icon>\n    </span>\n    <span class=\"more-text\">More New York Times Games</span>\n    <div class=\"nav-list\">".concat(Ws, '</div>\n    <div class="privacy">\n      <a href="https://www.nytimes.com/privacy/privacy-policy" onmouseover="this.style.textDecoration=\'underline\';" \n      onmouseout="this.style.textDecoration=\'none\';">\n        Privacy Policy\n      </a>\n    </div>\n  </div>\n');
    var Ys = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Fs.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-nav", Ys);
    var Us = document.createElement("template");
    Us.innerHTML = "\n  <style>\n    .overlay-nav {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: ".concat(3e3, ';\n      background-color: transparent;\n      justify-content: left;\n      align-items: unset;\n    }\n\n    :host([open]) .overlay-nav {\n      display: flex;\n    }\n\n    .content-nav {\n      position: relative;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      overflow-y: auto;\n      animation: SlideRight 200ms;\n      max-width: var(--game-max-width);\n      box-sizing: border-box;\n      width: 100%;\n      border-radius: 0px;\n      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.15);\n      max-height: calc(100% - var(--header-height) - 1px);\n      margin-top: calc(var(--header-height) + 1px);\n      padding: 0px;\n    }\n\n    @media (min-width: 415px) {\n      .content-nav {\n        width: 375px;\n      }\n    }\n\n    .content-nav.closing-nav {\n      animation: SlideLeft 200ms;\n    }\n\n    .close-icon-nav {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideRight {\n      0% {\n        transform: translateX(-100px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideLeft {\n      0% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateX(-200px);\n      }\n    }\n  </style>\n  <div class="overlay-nav">\n    <div class="content-nav">\n      <slot></slot>\n      <div class="close-icon-nav">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var Js = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Us.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content-nav").classList.add("closing-nav")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideLeft" === a.animationName && (e.shadowRoot.querySelector(".content-nav").classList.remove("closing-nav"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-nav-modal", Js);
    var Xs = document.createElement("template");
    Xs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Zs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Xs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-switch", Zs);
    var Ks = document.createElement("template");
    Ks.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>OBSCORDLE</strong> in six tries.</p>\n      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n  <p>Wordle has two lists, a list for possible answers and a list for possible guesses.</p>\n <p>This makes any guess list words also valid answer list words, making anything you can guess also a possible answer.</p>\n   <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new OBSCORDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Qs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Ks.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-help", Qs);
    var et = document.createElement("template");
    et.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var at = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(et.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    })), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-page", at);
    var st = document.createElement("template");
    st.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-1) />\n  </svg>\n';
    var tt = {
            help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
            settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
            backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
            close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
            share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
            statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
        },
        nt = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({
                    mode: "open"
                }), e
            }
            return n(t, [{
                key: "connectedCallback",
                value: function() {
                    this.shadowRoot.appendChild(st.content.cloneNode(!0));
                    var e = this.getAttribute("icon");
                    this.shadowRoot.querySelector("path").setAttribute("d", tt[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                }
            }]), t
        }(u(HTMLElement));
    customElements.define("game-icon", nt);
    var ot = document.createElement("template");
    ot.innerHTML = '\n  <a href="https://nytimes.com/puzzles">\n  <svg\n    className="pz-nav__logo"\n    width="95"\n    height="18"\n    viewBox="0 0 138 25"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-label="New York Times Games Logo. Click for more puzzles"\n  >\n    <rect width="138" height="25" fill="none" />\n    <path\n      d="M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z"\n      fill=var(--color-tone-1)\n    />\n  </svg>\n  </a>\n';
    var rt = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(ot.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("nyt-icon", rt);
    var it = document.createElement("template");
    it.innerHTML = '\n<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <rect x="0.172974" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n</svg>\n';
    var lt = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(it.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("nav-icon", lt);
    var dt = document.createElement("template");
    dt.innerHTML = '\n  <div id="timer"></div>\n';
    var ct = 6e4,
        ut = 36e5,
        mt = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), o(m(e = a.call(this)), "targetEpochMS", void 0), o(m(e), "intervalId", void 0), o(m(e), "$timer", void 0), e.attachShadow({
                    mode: "open"
                });
                var n = new Date;
                return n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0), e.targetEpochMS = n.getTime(), e
            }
            return n(t, [{
                key: "padDigit",
                value: function(e) {
                    return e.toString().padStart(2, "0")
                }
            }, {
                key: "updateTimer",
                value: function() {
                    var e, a = (new Date).getTime(),
                        s = Math.floor(this.targetEpochMS - a);
                    if (s <= 0) e = "00:00:00";
                    else {
                        var t = Math.floor(s % 864e5 / ut),
                            n = Math.floor(s % ut / ct),
                            o = Math.floor(s % ct / 1e3);
                        e = "".concat(this.padDigit(t), ":").concat(this.padDigit(n), ":").concat(this.padDigit(o))
                    }
                    this.$timer.textContent = e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(dt.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                        e.updateTimer()
                    }), 200)
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }]), t
        }(u(HTMLElement));
    return customElements.define("countdown-timer", mt), e.CountdownTimer = mt, e.GameApp = ms, e.GameHelp = Qs, e.GameIcon = nt, e.GameKeyboard = ks, e.GameModal = hs, e.GameNav = Ys, e.GamePage = at, e.GameRow = x, e.GameSettings = Ta, e.GameStats = Vs, e.GameSwitch = Zs, e.GameThemeManager = C, e.GameTile = v, e.GameToast = Ia, e.NYTIcon = rt, e.NavIcon = lt, e.NavModal = Js, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
