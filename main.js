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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Masochistle Feedback",
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
    var guessList = "aback:abase:abate:abbey:abbot:abhor:abide:abyss:abode:abort:about:above:abuse:acorn:acrid:actor:acute:adage:adapt:adept:admin:admit:adobe:adopt:adore:adorn:adult:affix:afire:afoot:afoul:after:again:agape:agate:agent:agile:aging:aglow:agony:agree:ahead:aider:aisle:alarm:album:alert:algae:alibi:alien:align:alike:alive:allay:alley:alloy:allot:allow:aloft:alone:along:aloof:aloud:alpha:altar:alter:amass:amaze:amber:amble:amend:amiss:amity:among:ample:amply:amuse:angel:anger:angle:angry:angst:anime:ankle:annex:annoy:annul:anode:antic:anvil:aorta:apart:aphid:aping:apnea:apple:apply:apron:aptly:arbor:ardor:arena:argue:arise:armor:aroma:arose:array:arrow:arson:artsy:ascot:ashen:aside:askew:assay:asset:atoll:atone:attic:audio:audit:augur:aunty:avail:avert:avian:avoid:await:awake:award:aware:awash:awful:awoke:axial:axiom:axion:azure:bacon:badge:badly:bagel:baggy:bayou:baker:baler:balmy:banal:banjo:barge:baron:basal:basic:basil:basin:basis:baste:batch:bathe:baton:batty:bawdy:beach:beady:beard:beast:beech:beefy:befit:began:begat:beget:begin:begun:being:belch:belie:belle:belly:below:bench:beret:berry:berth:beset:betel:bevel:bezel:bible:bicep:biddy:bigot:bylaw:bilge:billy:binge:bingo:biome:birch:birth:bison:bitty:black:blade:blame:bland:blank:blare:blast:blaze:bleak:bleat:bleed:bleep:blend:bless:blimp:blind:blink:bliss:blitz:bloat:block:bloke:blond:blood:bloom:blown:bluer:bluff:blunt:blurb:blurt:blush:board:boast:bobby:boney:bongo:bonus:booby:boost:booth:booty:booze:boozy:borax:borne:bosom:bossy:botch:bough:boule:bound:bowel:boxer:brace:braid:brain:brake:brand:brash:brass:brave:bravo:brawl:brawn:bread:break:breed:briar:bribe:brick:bride:brief:brine:bring:briny:brink:brisk:broad:broil:broke:brood:brook:broom:broth:brown:brunt:brush:brute:buddy:budge:buggy:bugle:buyer:build:built:bulge:bulky:bully:bunch:bunny:burly:burnt:burst:bused:bushy:butch:butte:buxom:cabal:cabby:cabin:cable:cacao:cache:cacti:caddy:cadet:cagey:cairn:camel:cameo:canal:candy:canny:canoe:canon:caper:caput:carat:cargo:carol:carry:carve:caste:catch:cater:catty:caulk:cause:cavil:cease:cedar:cello:chafe:chaff:chain:chair:chalk:champ:chant:chaos:chard:charm:chart:chase:chasm:cheap:cheat:check:cheek:cheer:chess:chest:chick:chide:chief:child:chili:chill:chime:china:chirp:chock:choir:choke:chord:chore:chose:chuck:chump:chunk:churn:chute:cycle:cider:cigar:cinch:cynic:circa:civic:civil:clack:claim:clamp:clang:clank:clash:clasp:class:clean:clear:cleat:cleft:clerk:click:cliff:climb:cling:clink:cloak:clock:clone:close:cloth:cloud:clout:clove:clown:cluck:clued:clump:clung:coach:coast:cobra:cocoa:coyly:colon:color:comet:comfy:comic:comma:conch:condo:conic:copse:coral:corer:corny:couch:cough:could:count:coupe:court:covey:coven:cover:covet:cower:crack:craft:cramp:crane:crank:crash:crass:crate:crave:crawl:craze:crazy:creak:cream:credo:creed:creek:creep:creme:crepe:crept:cress:crest:crick:cried:crier:crime:crimp:crypt:crisp:croak:crock:crone:crony:crook:cross:croup:crowd:crown:crude:cruel:crumb:crump:crush:crust:cubic:cumin:curio:curly:curry:curse:curve:curvy:cutie:daddy:daily:dairy:daisy:dally:dance:dandy:datum:daunt:dealt:death:debar:debit:debug:debut:decay:decal:decoy:decor:decry:defer:deign:deity:delay:delta:delve:demon:demur:denim:dense:depot:depth:derby:deter:deuce:devil:diary:dicey:digit:dying:dilly:dimly:diner:dingy:dingo:diode:dirge:dirty:disco:ditch:ditty:ditto:diver:dizzy:dodge:dodgy:dogma:doing:dolly:donor:donut:dopey:doubt:dough:dowdy:dowel:downy:dowry:dozen:draft:drain:drake:drama:drank:drape:drawl:drawn:dread:dream:dress:dried:drier:dryer:drift:dryly:drill:drink:drive:droit:droll:drone:drool:droop:dross:drove:drown:druid:drunk:duchy:dully:dummy:dumpy:dunce:dusky:dusty:dutch:duvet:dwarf:dwell:dwelt:eager:eagle:early:earth:easel:eaten:eater:ebony:eclat:edict:edify:eerie:egret:eight:eying:eject:eking:elate:elbow:elder:elect:elegy:elfin:elide:elite:elope:elude:email:embed:ember:emcee:empty:enact:endow:enema:enemy:enjoy:ennui:ensue:enter:entry:envoy:epoch:epoxy:equal:equip:erase:erect:erode:error:erupt:essay:ester:ether:ethic:ethos:etude:evade:event:every:evict:evoke:exact:exalt:excel:exert:exile:exist:expel:extol:extra:exult:fable:facet:faint:fairy:faith:false:fancy:fanny:farce:fatal:fatty:fault:fauna:favor:feast:fecal:feign:fella:felon:femme:femur:fence:feral:ferry:fetal:fetch:fetid:fetus:fever:fewer:fiber:ficus:field:fiend:fiery:fifth:fifty:fight:filer:filet:filly:filmy:filth:final:finch:finer:first:fishy:fixer:fizzy:fjord:flack:flail:flair:flake:flaky:flame:flank:flare:flash:flask:fleck:fleet:flesh:flick:flier:flyer:fling:flint:flirt:float:flock:flood:floor:flora:floss:flour:flout:flown:fluff:fluid:fluke:flume:flung:flunk:flush:flute:foamy:focal:focus:foggy:foyer:foist:folio:folly:foray:force:forge:forgo:forte:forth:forty:forum:found:frail:frame:frank:fraud:freak:freed:freer:fresh:friar:fried:frill:frisk:fritz:frock:frond:front:frost:froth:frown:froze:fruit:fudge:fugue:fully:fungi:funky:funny:furor:furry:fussy:fuzzy:gaffe:gayer:gaily:gayly:gamer:gamma:gamut:gassy:gaudy:gauge:gaunt:gauze:gavel:gawky:gazer:gecko:geese:genie:genre:ghost:ghoul:giant:giddy:gipsy:gypsy:girly:girth:given:giver:glade:gland:glare:glass:glaze:gleam:glean:glide:glint:glyph:gloat:globe:gloom:glory:gloss:glove:gnash:gnome:godly:going:golem:golly:gonad:goner:goody:gooey:goofy:goose:gorge:gouge:gourd:grace:grade:graft:grail:grain:grand:grant:grape:graph:grasp:grass:grate:grave:gravy:graze:great:greed:green:greet:grief:grill:grime:grimy:grind:gripe:groan:groin:groom:grope:gross:group:grout:grove:growl:grown:gruel:gruff:grunt:guard:guava:guess:guest:guide:guild:guile:guilt:guise:gulch:gully:gumbo:gummy:guppy:gusty:gusto:habit:hairy:halve:handy:happy:hardy:harem:harpy:harry:harsh:haste:hasty:hatch:hater:haunt:haute:haven:havoc:hazel:heady:heard:heart:heath:heave:heavy:hedge:hefty:heist:helix:hello:hence:heron:hydro:hyena:hilly:hymen:hinge:hyper:hippy:hippo:hitch:hoard:hobby:hoist:holly:homer:honey:honor:horde:horny:horse:hotel:hotly:hound:house:hovel:hover:howdy:human:humid:humor:humph:humus:hunch:hunky:hurry:husky:hussy:hutch:yacht:icily:icing:ideal:idyll:idiom:idiot:idler:yearn:yeast:igloo:yield:iliac:image:imbue:impel:imply:inane:incur:index:inept:inert:infer:ingot:inlay:inlet:inner:input:inter:intro:ionic:young:youth:irate:irony:islet:issue:itchy:ivory:jaunt:jazzy:jelly:jerky:jetty:jewel:jiffy:joint:joist:joker:jolly:joust:judge:juice:juicy:jumbo:jumpy:junta:junto:juror:kayak:kappa:karma:kebab:khaki:kinky:kiosk:kitty:knack:knave:knead:kneed:kneel:knelt:knife:knock:knoll:known:koala:krill:label:labor:laden:ladle:lager:layer:lance:lanky:lapel:lapse:large:larva:lasso:latch:later:lathe:laugh:leach:leafy:leaky:leant:leapt:learn:lease:leash:least:leave:ledge:leech:leery:lefty:legal:leggy:lemon:lemur:leper:level:lever:libel:liege:light:lying:liken:lilac:limbo:limit:lymph:linen:liner:lingo:lipid:lyric:lithe:liver:livid:llama:loamy:loath:lobby:local:locus:lodge:lofty:logic:login:loyal:loopy:loose:lorry:loser:louse:lousy:lover:lower:lowly:lucid:lucky:lumen:lumpy:lunar:lunch:lunge:lupus:lurch:lurid:lusty:macaw:macho:macro:madam:madly:mafia:magic:magma:maybe:mayor:maize:major:maker:mambo:mamma:mammy:manga:mange:mangy:mango:mania:manic:manly:manor:maple:march:marry:marsh:mason:masse:match:matey:mauve:maxim:mealy:meant:meaty:mecca:medal:media:medic:melee:melon:mercy:merge:merit:merry:metal:meter:metro:micro:midge:midst:might:milky:mimic:mince:miner:minim:minor:minty:minus:myrrh:mirth:miser:missy:mocha:modal:model:modem:mogul:moist:molar:moldy:money:month:moody:moose:moral:moron:morph:mossy:motel:motif:motor:motto:moult:mound:mount:mourn:mouse:mouth:mover:movie:mower:mucky:mucus:muddy:mulch:mummy:munch:mural:murky:mushy:music:musky:musty:nadir:naive:nanny:nasal:nasty:natal:naval:navel:needy:neigh:nerve:never:newer:newly:nicer:niche:niece:night:nylon:nymph:ninja:ninny:ninth:noble:nobly:noise:noisy:nomad:noose:north:nosey:notch:novel:nudge:nurse:nutty:oaken:obese:occur:ocean:octal:octet:odder:oddly:offal:offer:often:olden:older:olive:ombre:omega:onion:onset:opera:opine:opium:optic:orbit:order:organ:other:otter:ought:ounce:outdo:outer:outgo:ovary:ovate:overt:ovine:ovoid:owing:owner:oxide:ozone:paddy:pagan:payee:payer:paint:paler:palsy:panel:panic:pansy:papal:paper:parer:parka:parry:parse:party:pasta:paste:pasty:patch:patio:patsy:patty:pause:peace:peach:pearl:pecan:pedal:penal:pence:penny:perch:peril:perky:pesky:petal:petty:phase:phone:phony:photo:piano:picky:piece:piety:piggy:pygmy:pilot:pinch:piney:pinky:pinto:piper:pique:pitch:pithy:pivot:pixel:pixie:pizza:place:plaid:plain:plait:plane:plank:plant:plate:plaza:plead:pleat:plied:plier:pluck:plumb:plume:plump:plunk:plush:poesy:point:poise:poker:polar:polyp:polka:pooch:poppy:porch:poser:posit:posse:pouch:pound:pouty:power:prank:prawn:preen:press:price:prick:pride:pried:prime:primo:print:prior:prism:privy:prize:probe:prone:prong:proof:prose:proud:prove:prowl:proxy:prude:prune:psalm:pubic:pudgy:puffy:pulpy:pulse:punch:pupil:puppy:puree:purer:purge:purse:pushy:putty:quack:quail:quake:qualm:quark:quart:quash:quasi:queen:queer:quell:query:quest:queue:quick:quiet:quill:quilt:quirk:quite:quota:quote:quoth:rabbi:rabid:racer:radar:radii:radio:rainy:rayon:raise:rajah:rally:ralph:ranch:randy:range:rapid:rarer:raspy:ratio:ratty:raven:razor:reach:react:ready:realm:rearm:rebar:rebel:rebus:rebut:recap:recur:recut:reedy:refer:refit:regal:reign:relay:relax:relic:remit:renal:renew:repay:repel:reply:rerun:reset:resin:retch:retry:retro:reuse:revel:revue:rhyme:rhino:rider:ridge:rifle:right:rigid:rigor:rinse:ripen:riper:risen:riser:risky:rival:river:rivet:roach:roast:robin:robot:rocky:rodeo:roger:rogue:royal:roomy:roost:rotor:rouge:rough:round:rouse:route:rover:rowdy:rower:ruddy:ruder:rugby:ruler:rumba:rumor:rupee:rural:rusty:sadly:safer:saint:salad:sally:salon:salsa:salty:salve:salvo:sandy:saner:sappy:sassy:satin:satyr:sauce:saucy:sauna:saute:savoy:savor:savvy:scald:scale:scaly:scalp:scamp:scant:scare:scarf:scary:scene:scent:scion:scoff:scold:scone:scoop:scope:score:scorn:scour:scout:scowl:scram:scrap:scree:screw:scrub:scrum:scuba:sedan:seedy:segue:seize:semen:sense:sepia:serif:serum:serve:setup:seven:sever:sewer:shack:shade:shady:shaft:shake:shaky:shale:shall:shalt:shame:shank:shape:shard:share:shark:sharp:shave:shawl:shear:sheen:sheep:sheer:sheet:sheik:shelf:shell:shied:shift:shyly:shine:shiny:shire:shirk:shirt:shoal:shock:shone:shook:shoot:shore:shorn:short:shout:shove:showy:shown:shrew:shrub:shrug:shuck:shunt:shush:siege:sieve:sight:sigma:silky:silly:since:sinew:singe:synod:siren:syrup:sissy:sixth:sixty:skate:skier:skiff:skill:skimp:skirt:skulk:skull:skunk:slack:slain:slang:slant:slash:slate:sleek:sleep:sleet:slept:slice:slick:slide:slyly:slime:slimy:sling:slink:sloop:slope:slosh:sloth:slump:slung:slunk:slurp:slush:smack:small:smart:smash:smear:smell:smelt:smile:smirk:smite:smith:smock:smoke:smoky:smote:snack:snail:snake:snaky:snare:snarl:sneak:sneer:snide:sniff:snipe:snoop:snore:snort:snout:snowy:snuck:snuff:soapy:sober:soggy:solar:solid:solve:sonar:sonic:sooth:sooty:sorry:sound:south:sower:space:spade:spank:spare:spark:spasm:spawn:speak:spear:speck:speed:spell:spelt:spend:spent:sperm:spice:spicy:spied:spiel:spike:spiky:spill:spilt:spine:spiny:spire:spite:splat:split:spoil:spoke:spoof:spook:spool:spoon:spore:sport:spout:spray:spree:sprig:spunk:spurn:spurt:squad:squat:squib:stack:staff:stage:staid:stain:stair:stake:stale:stalk:stall:stamp:stand:stank:stare:stark:start:stash:state:stave:stead:steak:steal:steam:steed:steel:steep:steer:stein:stern:stick:stiff:style:still:stilt:sting:stink:stint:stock:stoic:stoke:stole:stomp:stone:stony:stood:stool:stoop:store:story:stork:storm:stout:stove:stray:strap:straw:strip:strut:stuck:study:stuff:stump:stung:stunk:stunt:suave:sugar:suing:suite:sulky:sully:sumac:sunny:super:surer:surge:surly:sushi:swami:swamp:swarm:swash:swath:swear:sweat:sweep:sweet:swell:swept:swift:swill:swine:swing:swirl:swish:swoon:swoop:sword:swore:sworn:swung:tabby:table:taboo:tacit:tacky:taffy:taint:taken:taker:tally:talon:tamer:tangy:tango:taper:tapir:tardy:tarot:taste:tasty:tatty:taunt:tawny:teach:teary:tease:teddy:teeth:tempo:tenet:tenor:tense:tenth:tepee:tepid:terra:terse:testy:thank:theft:their:theme:there:these:theta:thick:thief:thigh:thyme:thing:think:third:thong:thorn:those:three:threw:throb:throw:thrum:thumb:thump:tiara:tibia:tidal:tiger:tight:tying:tilde:timer:timid:tipsy:titan:tithe:title:toast:today:toddy:token:tonal:tonga:tonic:tooth:topaz:topic:torch:torso:torus:total:totem:touch:tough:towel:tower:toxic:toxin:trace:track:tract:trade:trail:train:trait:tramp:trash:trawl:tread:treat:trend:triad:trial:tribe:trice:trick:tried:tripe:tryst:trite:troll:troop:trope:trout:trove:truce:truck:truer:truly:trump:trunk:truss:trust:truth:tubal:tuber:tulip:tulle:tumor:tunic:turbo:tutor:twang:tweak:tweed:tweet:twice:twine:twirl:twist:twixt:udder:ulcer:ultra:umbra:uncle:uncut:under:undid:undue:unfed:unfit:unify:union:unite:unity:unlit:unmet:unset:untie:until:unwed:unzip:upper:upset:urban:urine:usage:usher:using:usual:usurp:utile:utter:vague:valet:valid:valor:value:valve:vapid:vapor:vault:vaunt:vegan:venom:venue:verge:verse:verso:verve:vicar:video:vigil:vigor:vying:villa:vinyl:viola:viper:viral:virus:visit:visor:vista:vital:vivid:vixen:vocal:vodka:vogue:voice:voila:vomit:voter:vouch:vowel:wacky:wafer:wager:wagon:waist:waive:waltz:warty:waste:watch:water:waver:waxen:weary:weave:wedge:weedy:weigh:weird:welch:welsh:whack:whale:wharf:wheat:wheel:whelp:where:which:whiff:while:whine:whiny:whirl:whisk:white:whole:whoop:whose:widen:wider:widow:width:wield:wight:willy:wince:winch:windy:wiser:wispy:witch:witty:woken:woman:women:woody:wooer:wooly:woozy:wordy:world:worry:worse:worst:worth:would:wound:woven:wrack:wrath:wreak:wreck:wrest:wryly:wring:wrist:write:wrong:wrote:wrung:zebra:zesty:zonal:aahed:aalii:aargh:aaron:abaca:abaci:abada:abaff:abaft:abaka:abama:abamp:aband:abash:abask:abaue:abave:abaze:abbas:abbes:abbie:abdal:abdat:abdom:abeam:abear:abede:abele:abend:aberr:abets:abidi:abies:abyes:abilo:abime:abysm:abkar:abler:ables:ablet:ablow:abmho:abner:abnet:abody:abohm:aboil:aboma:aboon:abord:abote:abray:abram:abret:abrim:abrin:abris:abrus:absee:absey:absis:absit:abstr:abuna:abune:abura:abush:abuta:abuts:abuzz:abwab:acale:acana:acapu:acara:acari:acast:acate:accel:accoy:accra:accts:accum:accur:accus:acedy:acerb:aceta:achar:ached:achen:acher:aches:achoo:achor:acidy:acids:acier:acies:acyls:acing:acini:ackee:ackey:acker:aclys:acmes:acmic:acned:acnes:acock:acoin:acold:acoma:acone:acool:acost:acoup:acrab:acred:acres:acryl:acroa:acron:acrux:acted:actin:acton:actos:actus:acuan:adagy:adays:adams:adapa:adati:adaty:adawe:adawn:adcon:addax:addda:added:adder:addie:addio:addis:addle:addnl:adead:adeem:adeep:adela:adeps:adfix:adiel:adieu:adion:adios:adyta:adits:adjag:adlai:adlay:adlet:adman:admen:admix:admov:admrx:adnex:adobo:adolf:adown:adoxa:adoxy:adoze:adpao:adrad:adret:adrip:adrop:adrue:adsum:adunc:adure:adusk:adust:adzer:adzes:aecia:aedes:aeger:aegir:aegis:aegle:aeons:aequi:aeric:aerie:aeron:aesir:aesop:aetat:aevia:aevum:aface:afara:afars:afear:afgod:afifi:aflat:afley:aflow:afoam:afore:afray:afret:afric:afrit:afros:agada:agade:agama:agami:agamy:agars:agasp:agast:agata:agaty:agave:agaze:agena:agend:agene:agers:agete:agger:aggie:aggry:aggro:aggur:aghan:aghas:agiel:agios:agism:agist:aglee:agley:aglet:agmas:agnat:agnel:agnes:agnus:agoge:agoho:agone:agons:agora:agrah:agral:agria:agric:agrin:agrom:agron:agsam:aguey:agues:agura:agush:agust:aheap:ahems:ahind:ahint:ahmed:ahmet:ahold:aholt:ahong:ahsan:ahull:ahunt:ahura:ahush:ahwal:ayahs:aided:aides:ayelp:ayens:aiery:aiger:aigre:ayins:ailed:aylet:ailie:aillt:ayllu:aimak:aimed:aimee:aimer:ainee:ainoi:ainus:aioli:ayond:ayont:ayous:airan:aired:airer:airns:airth:airts:aitch:aitis:ayuyu:aiver:aiwan:aizle:ajaja:ajari:ajava:ajhar:ajiva:ajuga:akala:akali:akasa:akebi:akees:akeki:akela:akene:aking:akkad:aknee:aknow:akpek:akron:akule:akund:alack:alada:alain:alaki:alala:alamo:aland:alane:alang:alani:alans:alant:alapa:alary:alate:alawi:alban:albas:albee:albin:albyn:albus:alcae:alces:alcid:alcor:alday:aldea:alden:alder:aldim:aldol:aldus:aleak:aleck:alecs:alefs:aleft:alenu:aleph:aleut:alfas:alfet:alfin:alfur:algal:algas:algic:algid:algin:algol:algor:algum:alhet:alias:alice:alick:alida:alids:aliet:alife:alifs:aliya:alima:aline:alish:aliso:alisp:alist:alite:ality:alkes:alkyd:alkyl:alkin:allah:allan:allen:aller:allez:allie:allyl:allis:allod:alloo:almah:alman:almas:almeh:almes:almon:almud:almug:alnus:alody:aloed:aloes:alogy:aloha:aloid:aloin:alois:aloma:alosa:alose:alout:alowe:alpax:alpen:alpid:altho:altin:altos:altun:altus:aluco:alula:alums:alure:aluta:alvah:alvan:alvar:alvia:alvin:alvus:alway:amaas:amadi:amaga:amahs:amain:amala:amalg:amang:amani:amant:amapa:amara:amate:amati:amaut:ambay:amban:ambar:ambas:ambit:ambon:ambos:ambry:ameba:ameed:ameen:ameer:amelu:amene:amens:ament:amess:amhar:amias:amice:amici:amide:amido:amids:amies:amiga:amigo:amylo:amyls:amine:amini:amino:amins:amire:amirs:amish:amita:amlet:amman:ammer:ammos:amnia:amnic:amoke:amoks:amole:amora:amort:amour:amove:amowt:amper:amphi:ampyx:ampul:amrit:amsel:amuck:amula:amuze:amvis:amzel:anabo:anack:anama:anana:anasa:ancha:ancle:ancon:ancor:ancre:andes:andia:andor:andre:anear:anele:anend:anent:angas:angia:angie:angka:anglo:angor:angus:anhyd:aniba:anice:anigh:anile:anils:anima:animi:animo:anion:anise:anita:anjan:anjou:ankee:anker:ankhs:ankou:ankus:anlas:anlet:anlia:anmia:annal:annam:annas:annat:annet:annie:anniv:annot:annum:annus:anoas:anoia:anoil:anole:anoli:anomy:anorn:anour:anous:anova:ansae:ansar:ansel:anser:antae:antal:antar:antas:anted:antes:antiq:antis:anton:antra:antre:antsy:antum:anura:anury:anzac:aoife:aotea:aotes:aotus:aouad:apace:apaid:apair:apama:apass:apast:apeak:apeek:apery:apers:apert:aperu:aphis:aphra:apian:apiin:apili:apina:apiol:apios:apish:apism:apium:apoda:apods:apoop:aport:apout:appay:appal:appar:appel:appet:appmt:appro:apptd:appui:apres:april:apses:apsid:apsis:aptal:apter:aquae:aquas:araba:araby:arabs:araca:arace:arach:arado:arage:arain:arake:araks:aramu:arank:arara:araru:arase:arati:araua:arawa:arber:arcae:arced:arces:archd:arche:archy:archt:arcos:arcus:ardea:ardeb:arder:ardri:aread:areae:areal:arean:arear:areas:areca:areek:areel:arefy:areic:arend:areng:arent:arere:arest:arete:argal:argan:argas:argel:argid:argil:argin:argle:argol:argon:argos:argot:argus:arhar:arhat:arian:aryan:arias:ariel:aries:ariki:arils:aryls:arioi:arion:ariot:arish:arist:arite:arith:arius:arjun:arkab:arkie:arles:armed:armer:armet:armil:armit:arneb:arnee:arnut:aroar:arock:aroid:aroon:aroph:arpen:arrah:arras:arrau:arret:arrgt:arrha:arrie:arris:arroz:arses:arsyl:arsis:arsle:artal:artar:artel:arter:artha:artic:artie:artly:artou:artus:aruac:aruke:arulo:arums:arupa:arusa:arval:arvel:arvos:arzan:arzun:asale:asana:asaph:asarh:ascan:ascii:ascon:ascry:ascus:asdic:asgmt:ashed:asher:ashes:ashet:ashir:ashot:ashur:asian:asyla:asyle:async:askar:asked:asker:askip:askoi:askos:aslop:asoak:asoka:aspca:aspen:asper:aspic:aspis:assai:assam:asses:assis:assoc:assot:astay:astel:aster:astir:astor:astre:astur:asuri:asway:aswim:atake:atame:atavi:ataxy:ateba:atees:ately:atelo:athar:athel:atilt:atimy:ating:atypy:atlas:atlee:atman:atmas:atmid:atmos:atnah:atoke:atole:atomy:atoms:atony:atopy:atour:atren:atria:atrip:attal:attar:atter:attid:attle:attry:atule:atune:atwin:aubin:aucan:aucht:audad:aueto:augen:auger:auget:aught:aulae:aulas:aulic:auloi:aulos:aumil:aunts:aurae:aural:aurar:auras:aurei:aures:auric:auryl:aurin:aurir:auris:aurum:autem:autor:autos:autre:auxil:auxin:avahi:avale:avant:avars:avast:avell:avena:aveny:avens:avera:avery:avern:avers:avgas:avick:aview:avile:avine:avion:aviso:avoir:avoke:avoue:avour:avowe:avows:awabi:awacs:awaft:aways:awald:awalt:awane:awarn:awave:awber:aweek:aweel:awest:aweto:awhet:awhir:awide:awing:awink:awiwi:awkly:awned:awner:awols:awork:axels:axers:axile:axils:axine:axing:axite:axled:axles:axman:axmen:axoid:axone:axons:azans:azide:azido:azyme:azine:azlon:azoch:azofy:azoic:azole:azons:azote:azoth:azoxy:aztec:azury:baaed:baals:babai:babas:babby:babel:babes:babis:babka:bable:baboo:babua:babul:babus:bacao:bacca:baccy:bache:bacin:bacis:backy:backs:badan:baddy:badju:badon:baffy:baffs:bafta:bagdi:bagge:bagie:bagio:bagle:bagne:bagre:bahai:bahay:baham:bahan:bahar:bahoe:bahoo:bahts:bahur:bahut:bayal:bayed:baign:baile:bailo:bails:baioc:bayok:bairn:baith:baits:baiza:baize:bajan:bajau:bajra:bajri:bakal:baked:baken:bakes:bakie:bakli:bakra:balai:balak:balan:balao:balas:balat:balau:baldy:balds:baled:balei:bales:balky:balks:balli:bally:ballo:balls:balms:balon:baloo:balor:balow:balsa:balti:balun:balut:balza:bamah:banak:banat:banba:banca:banco:banda:bande:bandh:bandi:bandy:bando:bands:baned:banes:banff:banga:bange:bangy:bangs:bania:banya:banig:banky:banks:banns:banty:bantu:banus:barad:barat:barba:barbe:barbs:barbu:barde:bardy:bardo:bards:bared:barer:bares:baret:barff:barfy:barfs:bargh:baria:baric:barid:barie:barye:barih:baris:barit:barky:barks:barly:barmy:barms:barny:barns:baroi:barra:barre:barry:barse:barth:basad:basan:basat:based:baser:bases:basyl:baske:basks:bason:basos:bassa:bassi:bassy:basso:basta:basti:basto:basts:batad:batak:batan:batea:bated:batel:bater:bates:baths:batik:batis:batta:batts:battu:batwa:baubo:bauch:bauds:bauge:bauld:baulk:baume:bauno:baure:bauta:bavin:bawds:bawke:bawly:bawls:bawra:bawty:bazar:bazoo:beads:beaky:beaks:beala:beamy:beams:beany:beano:beans:beant:bearm:bears:beata:beath:beati:beats:beaus:beaut:beaux:bebay:bebar:bebat:bebed:bebog:bebop:becap:becco:beche:becky:becks:becry:becut:bedad:beday:bedel:beden:bedew:bedye:bedim:bedin:bedip:bedog:bedot:bedub:bedur:beedi:beefs:beele:beent:beeps:beery:beers:beest:beeth:beety:beets:beeve:befan:befog:befop:befur:begad:begay:begar:begem:begob:begod:begot:begum:begut:behap:behav:behen:behew:beice:beige:beigy:beild:beira:beisa:bejan:bejel:bejig:bekah:bekko:belah:belay:belam:belap:belar:belat:belee:belga:belis:bella:belli:bello:bells:belts:belue:belve:bemad:beman:bemar:bemas:bemat:bemba:bemix:bemol:bemud:benab:benda:bendy:bends:benes:benet:benic:benim:benin:benjy:benne:benni:benny:bensh:benty:bents:benzo:beode:bepat:bepaw:bepen:bepun:beray:berat:bergh:bergy:bergs:beryl:beryx:berme:berms:berne:berob:beroe:berri:berun:besan:besee:besew:besin:besit:besom:besot:bespy:besra:bessi:bessy:bests:betag:betas:betes:beths:betis:beton:betsy:betso:betta:betty:bever:bevil:bevor:bevue:bevvy:bewet:bewig:bewit:bewry:bezan:bezil:bezzi:bezzo:bhaga:bhalu:bhang:bhara:bhava:bhili:bhima:bhoot:bhuts:biabo:biali:bialy:byard:bibby:bibbs:bibio:bices:bichy:bidar:bided:bider:bides:bidet:bidri:bidry:bield:biens:biers:bifer:biffy:biffs:bifid:bigae:bigam:bigas:biggy:bigha:bight:bigly:bihai:biham:bijou:biked:biker:bikes:bikie:bikol:bilbi:bilby:bilbo:bilch:biles:bilgy:bilic:bilin:bilio:bilks:billa:bills:bilos:bilsh:bimah:bimas:bimbo:binal:bindi:binds:bines:bingy:bynin:binit:binna:binny:bints:biont:biose:biota:byous:biped:bipod:birde:birdy:birds:byres:birky:birks:birle:birls:byrls:birma:birne:birny:biron:byron:birri:byrri:birrs:birse:birsy:bysen:bises:biset:bisie:bisks:bisme:byssi:bisso:bisti:bitch:bited:biter:bites:bytes:bitis:bitsy:bitte:bitts:biune:bivvy:byway:bixin:bizel:bizen:bizes:bizet:blabs:blady:blaff:blahs:blayk:blain:blair:blake:blams:blanc:blart:blase:blash:blate:blats:blawn:blaws:blazy:blear:blebs:bleck:blenk:blens:blent:blere:blest:blets:blibe:blick:blier:blimy:blini:bliny:blype:blips:blirt:blist:blite:blizz:blobs:blocs:bloop:blore:blote:blots:blout:blowy:blows:blued:bluey:blues:bluet:blume:blunk:blurs:boars:boart:boats:bobac:bobet:bobol:bocal:bocca:bocce:bocci:boche:bocks:bocoy:boded:boden:boder:bodes:bodge:bodhi:bodle:boers:boffo:boffs:bogan:bogey:boget:boggy:bogie:bogle:bogue:bogum:bogus:bohea:bohor:boyar:boyau:boyce:boyer:boiko:boyla:boily:boils:boing:boyos:boise:boist:boite:bokom:bokos:bolag:bolar:bolas:boldo:boldu:boled:boles:bolis:bolly:bolls:bolos:bolti:bolty:bolts:bolus:bombe:bombo:bombs:bomos:bonav:bonbo:bonce:bonds:boned:boner:bones:bongs:bonks:bonne:bonny:bonos:bonum:bonze:boobs:boodh:boody:booed:booky:books:booly:boomy:booms:boone:boong:boonk:boons:boors:boort:boose:boosy:boots:borak:boral:boran:boras:bored:boree:borel:borer:bores:borgh:boric:borid:boryl:boris:boron:borty:borts:bortz:bosch:bosey:boser:bosky:bosks:boson:bossa:bosun:botan:botas:botel:bothy:botry:botte:botts:bottu:bouch:boucl:bouet:bouge:boult:bourd:bourg:bourn:bourr:bouse:bousy:bouto:bouts:bovey:bovid:bovld:bowed:bower:bowet:bowge:bowie:bowla:bowle:bowly:bowls:bowne:bowse:boxed:boxen:boxes:boxty:bozal:bozos:bozze:braca:brach:brack:bract:brads:braes:bragi:brags:brahm:braye:brail:brays:braky:brame:brank:brans:brant:brast:brats:brava:bravi:braws:braxy:braza:braze:bream:breba:breck:brede:bredi:breek:brees:breme:brens:brent:brerd:brere:brest:breth:brett:breva:breve:brevi:brews:brian:bryan:bryce:brier:bries:brigs:brike:brill:brims:brins:bryon:brios:brisa:brise:briss:brist:brite:brith:brits:britt:bryum:briza:brizz:broch:brock:brogh:broid:broll:broma:brome:bromo:bronc:bronk:bronx:brool:broon:broos:brose:brosy:brott:browd:brows:brubu:bruce:bruet:brugh:bruin:bruit:bruja:brujo:bruke:brule:brume:brune:bruno:brusk:bruta:bruzz:btise:buaze:bubal:bubas:bubba:bubby:bubos:bucca:bucco:buchu:bucky:bucko:bucks:bucku:buddh:budgy:bueno:buffa:buffe:buffi:buffy:buffo:buffs:bugan:bught:bugre:buhls:buhrs:buick:buist:bukat:bulak:bulby:bulbs:bulgy:bulks:bulla:bulls:bulse:bumbo:bumfs:bumph:bumpy:bumps:bunce:bunco:bunda:bundh:bundy:bunds:bundt:bundu:bunga:bungy:bungo:bungs:bunya:bunko:bunks:bunns:bunty:bunts:buoys:buran:burao:buras:burbs:burds:burel:buret:burez:burga:burge:burgh:burgs:burin:burys:burka:burke:burls:burma:burny:burns:buroo:burps:burry:burro:burrs:bursa:burse:burut:busby:buses:bushi:busky:busks:bussy:bussu:busti:busty:busto:busts:butat:butea:buteo:butic:butyl:butin:butyn:butyr:butle:butsu:butty:butts:butut:buxus:buzzy:bwana:caaba:caama:cabaa:caban:cabas:cabda:caber:cabio:cabob:cabot:cabre:cacam:cacan:cacas:cacei:cacks:cacur:caddo:cadee:cader:cades:cadew:cadge:cadgy:cadie:cadis:cados:cadre:cadua:cadus:caeca:cafes:caffa:cafiz:cafoy:caged:cager:cages:caggy:cagit:cagot:cagui:cahiz:cahot:cahow:cahuy:caids:cains:cayos:caird:cairo:caite:cajan:cajon:cajou:cajun:caked:cakey:caker:cakes:cakra:calas:calci:caleb:calef:calfs:calic:calid:calif:calin:calix:calyx:calks:calla:calli:callo:calls:calmy:calms:calor:calve:camay:caman:camas:cames:camis:camla:campa:campe:campi:campy:campo:camps:camus:canap:canch:caned:canel:caner:canes:cangy:canid:canis:canli:canna:canos:canso:canst:canty:canto:cants:canun:canzo:caoba:capax:caped:capel:capes:caphs:capoc:capon:capos:capot:cappy:capra:capri:capsa:caque:carap:carby:carbo:cardo:cards:cared:carey:carer:cares:caret:carex:carga:carya:carib:carid:caryl:carks:carle:carli:carlo:carls:carne:carny:carns:caroa:carob:carom:carot:carpe:carpi:carps:carri:carrs:carse:carte:carty:carts:carua:carum:carus:carvy:casal:casas:casco:cased:casey:casel:caser:cases:casha:casky:casks:casse:cassy:casts:casus:catan:catel:cates:catha:cathy:catso:catti:catur:cauch:cauda:cauld:cauli:cauls:cauma:caupo:causa:cavae:caval:cavea:caved:cavey:cavel:caver:caves:cavia:cavie:cavin:cavum:cavus:cawed:cawky:cawny:caxon:ccitt:ccoya:cebid:cebil:cebur:cebus:cecal:cecca:cecil:cecum:ceded:ceder:cedes:cedis:cedre:cedry:ceiba:ceibo:ceile:ceils:ceint:celeb:celia:cella:celli:cells:celom:celts:cense:centi:cento:cents:ceorl:cepes:cequi:ceral:ceras:cerat:cerci:cered:cerer:ceres:ceria:ceric:ceryl:cerin:ceros:certy:cesar:cesta:ceste:cesti:cetes:cetic:cetid:cetyl:cetin:cetus:chace:chack:chaco:chads:chaft:chaga:chaya:chais:chays:chait:chaja:chaka:chama:chamm:chams:chane:chang:chank:chape:chaps:chapt:chara:chare:chary:chark:charr:chars:chass:chati:chats:chaui:chauk:chaum:chaus:chave:chawk:chawl:chawn:chaws:chazy:cheep:cheet:chefs:chego:cheir:cheka:cheke:cheki:chela:chelp:chena:cheng:chera:chere:chert:chese:cheth:cheve:chevy:chewy:chews:chyak:chiam:chian:chiao:chias:chiba:chica:chich:chico:chics:chiel:chien:chile:chyle:chimb:chyme:chimp:chimu:chine:ching:chink:chino:chins:chint:chiot:chips:chirk:chirl:chirm:chiro:chirr:chirt:chiru:chita:chits:chive:chivy:chivw:chizz:chloe:chlor:choak:choca:choco:choel:choes:choga:choya:choil:choky:choko:chola:chold:choli:cholo:chomp:chonk:chook:choom:choop:chopa:chops:chora:chort:chott:choup:chous:chout:choux:chowk:chows:chria:chris:chron:chubb:chubs:chude:chuet:chufa:chuff:chugs:chuje:chums:chung:churl:churm:churr:chuse:chwas:cyano:cyans:cyath:cibol:cicad:cycad:cycas:cicer:cyclo:cyder:cydon:cigua:cilia:cylix:cymae:cymar:cymas:cymba:cymes:cimex:cymol:cymry:cinct:cindy:cinel:cines:cions:cippi:cypre:circe:circs:cires:cyril:cirri:cyrus:cisco:cissy:cista:cists:cysts:cital:cited:citee:citer:cites:cytol:cyton:citua:civet:civie:civvy:cizar:clach:clade:clads:claes:clags:claye:claik:clair:clays:clake:clamb:clame:clams:clans:clape:claps:clapt:clara:clare:clary:clark:claro:clart:clast:claus:claut:clava:clave:clavi:clavy:clawk:claws:clead:cleam:cleck:cleek:clefs:clepe:clept:cleuk:cleve:clews:clich:clyde:clyer:clift:clima:clime:cline:clint:clype:clips:clipt:clite:clive:cloam:clods:cloes:cloff:clogs:cloys:cloit:cloke:cloky:clomb:clomp:clong:clonk:clons:cloof:cloop:cloot:clops:closh:clote:clots:clour:cloze:clubs:clues:cluff:clunk:cnida:coact:coaid:coala:coaly:coals:coapt:coarb:coart:coati:coats:coaxy:cobby:cobbs:cobia:coble:cobol:cobus:cocao:cocas:cocci:cocco:cocin:cocky:cocks:cocle:cocos:cocus:codal:codas:coddy:codec:coded:coden:coder:codes:codex:codol:codon:coeds:coeff:coeno:coffs:cogie:cogit:cogon:cogue:cohen:cohob:cohog:cohol:cohos:cohow:cohue:coyan:coyed:coyer:coifs:coign:coils:coing:coiny:coins:coyol:coyos:coypu:coirs:coked:cokey:coker:cokes:cokie:colan:colas:colat:colds:coley:colen:coles:colet:colic:colin:colla:colly:colob:colog:colts:colza:comae:comal:coman:comas:combe:comby:combo:combs:comdg:comdr:comdt:comer:comes:comid:comme:commy:commo:comox:compd:compo:comps:compt:comte:comus:conal:concn:coned:coney:coner:cones:confr:conga:conge:congo:conia:conin:conky:conks:conli:conny:conns:connu:conoy:conor:consy:const:contd:conte:contg:conto:contr:conus:cooba:cooch:cooed:cooee:cooey:cooer:coofs:cooja:cooky:cooks:cooly:cools:coomb:coomy:coony:coons:coops:coopt:coorg:coost:cooth:cooty:coots:copal:coped:copei:copen:coper:copes:copia:copis:coppa:coppy:copps:copra:copsy:copus:coque:corah:coram:coran:corbe:corby:cordy:cords:cored:coree:corey:cores:corge:corgi:coria:coryl:corin:corke:corky:corks:corms:corno:corns:cornu:coroa:corol:corpl:corpn:corps:corse:corsy:corso:corta:corve:corvo:cosec:cosed:cosey:cosen:coses:coset:cosie:cosin:cosmo:cosse:costa:costs:cotan:cotch:coted:cotes:cothe:cothy:cotys:cotta:cotte:cotty:couac:coude:couma:coups:courb:cours:couth:couve:coved:coves:covid:covin:cowal:cowan:cowed:cowle:cowls:cowry:coxae:coxal:coxed:coxes:cozed:cozey:cozen:cozes:cozie:craal:crabs:crags:craie:craye:craig:craik:crain:crake:crams:crang:crany:crape:crapy:craps:crare:cravo:crawm:craws:crcao:crche:cread:creat:creda:creel:creem:creen:crees:crena:crepy:cresc:creta:crete:crewe:crews:cryal:cribo:cribs:criey:cries:crile:crine:crink:crips:criss:cryst:crith:croat:croci:croft:croyl:crois:crome:cronk:crood:crool:croon:crops:crore:crosa:crose:crost:crout:crowl:crows:croze:cruce:cruck:crudy:cruds:cruet:crull:crunk:crunt:cruor:crura:cruse:cruth:crwth:csect:csnet:ctene:ctimo:cuban:cubas:cubby:cubeb:cubed:cuber:cubes:cubit:cubla:cubti:cucuy:cuddy:cueca:cueva:cuffy:cuffs:cufic:cuyas:cuifs:cuing:cuish:cujam:cukes:culch:culet:culex:culla:cully:culls:culmy:culms:culot:culpa:culti:cults:cumay:cumal:cumar:cumbu:cumic:cumyl:cumly:cumol:cunan:cunas:cundy:cunea:cunei:cunye:cunit:cunni:cunny:cunts:cunza:cupay:cupel:cupid:cuppa:cuppy:curat:curby:curbs:curch:curdy:curds:cured:curer:cures:curet:curfs:curia:curie:curin:curls:curns:currs:cursa:curst:curua:cusec:cushy:cusie:cusks:cusps:cusso:cutch:cutey:cuter:cutes:cutin:cutis:cutty:cutup:cuvee:czars:czech:dabba:dabby:dabih:dabuh:daces:dacha:dachs:dacus:dadap:dadas:dados:daeva:daffy:daffs:dafla:dagga:daggy:dagon:dagos:dahms:dayak:dayal:dayan:daijo:daint:daira:dairi:dairt:daiva:daker:dakir:dalai:dalan:dalar:dalea:daler:dales:dalis:dalle:daman:damar:damas:dames:damia:damie:damme:damns:damon:dampy:damps:danae:danai:dancy:danda:danes:dangs:danic:danio:danke:danli:danny:dansy:dansk:danta:dante:darac:daraf:darat:darby:darbs:darci:darcy:dared:daren:darer:dares:dargo:darya:daric:darii:daryl:darin:darky:darks:darns:daroo:darst:darts:dashy:dasht:dasya:dasnt:dassy:datch:dated:dater:dates:datil:datos:datsw:datto:daube:dauby:daubs:dauke:dault:dauri:dauts:daven:daver:david:davis:davit:dawdy:dawed:dawen:dawks:dawny:dawns:dawts:dawut:dazed:dazes:deady:deads:deair:deals:deans:deare:deary:dearn:dears:deash:deave:debag:debat:debby:debel:deben:debye:debts:debus:decad:decan:decap:decem:decil:decyl:decke:decks:decus:dedal:dedan:deddy:dedit:deedy:deeds:deems:deeny:deeps:deers:deess:defat:defet:defis:defix:defog:degas:degum:deice:deify:deils:deink:deino:deynt:deism:deist:deked:dekes:dekko:dekle:delaw:deled:deles:delfs:delft:delhi:delia:delim:delis:delit:della:delly:dells:deloo:delph:demal:demes:demit:demob:demos:demot:denay:denar:denat:denda:deneb:denes:denis:denom:denty:dents:deota:depas:depel:depit:depoh:derah:deray:derat:derek:deric:deriv:derma:derms:derog:derri:derry:derth:derve:desex:desyl:desks:desma:dessa:desto:detar:detat:detax:detin:dette:detur:deval:devas:devel:devex:devon:devot:devow:dewal:dewan:dewar:dewax:dewed:dewey:dewer:dexes:dhabb:dhaks:dhava:dheri:dhyal:dhikr:dhobi:dhoby:dhole:dhoni:dhoon:dhoti:dhoty:dhoul:dhows:dhuti:diact:dyads:diaka:dials:diamb:diana:diane:dyaus:diazo:diced:dicer:dices:dicht:dicky:dicks:dicot:dicta:dicty:didal:diddy:didie:didym:didle:didna:didnt:didos:didst:didus:diego:diene:dieri:dyers:diety:diets:difda:dight:digne:digor:digue:diked:dyked:diker:dyker:dikes:dykes:dylan:dildo:dilis:dilli:dills:dilos:dimer:dimes:dimin:dimit:dimmy:dimna:dimps:dinah:dynam:dinar:dined:dynel:dines:dynes:dinge:dings:dinic:dinka:dinky:dinks:dinos:dints:dinus:diols:dione:dioon:diose:diota:dioti:dioxy:diple:dippy:dipsy:dipso:dipus:dirca:direr:direx:dirgy:dirks:dirls:dirts:disci:discs:dishy:disks:disli:disme:disna:disty:distn:distr:dital:ditas:diter:dites:diurn:divan:divas:dived:divel:dives:divet:divia:divid:divot:divus:divvy:diwan:dixie:dixit:dizen:djave:djinn:djins:djuka:doand:doaty:doats:dobby:dobie:dobla:dobos:dobra:docks:doddy:dodos:doers:doesn:doest:doeth:doffs:dogal:dogey:doges:doggy:doggo:dogie:dogly:dogra:doyen:doigt:doyle:doily:doyly:doylt:doina:doyst:doits:dojos:dolce:dolci:doled:doley:doles:dolia:dolls:dolor:dolos:dolph:dolts:dolus:domal:domba:domed:domer:domes:domic:dompt:domus:donal:donar:donas:donat:donax:doncy:donec:donee:doney:donet:donga:dongs:donia:donis:donna:donne:donny:donsy:donum:dooja:dooli:dooly:dooms:doors:doozy:dopas:doped:doper:dopes:dorab:dorad:doray:doree:dorey:doria:doric:doris:dorje:dormy:dorms:dorps:dorrs:dorsa:dorse:dorsi:dorty:dorts:dosed:doser:doses:dosis:dossy:dotal:doted:doter:dotes:dotty:douar:douce:dougl:douma:doura:douse:dovey:doven:dover:doves:dowed:dower:dowie:dowly:downs:dowse:dowve:doxie:dozed:dozer:dozes:draba:drabs:draco:draff:drago:drags:drail:drays:drame:dramm:drams:drang:drant:drate:drats:drave:drawk:draws:drear:dreck:dreed:dreep:drees:dregs:dreks:dreng:drent:drest:dryad:drias:dryas:dribs:dries:drily:drinn:drips:dript:drisk:dryth:drogh:droil:droyl:drome:drona:drony:droob:drops:dropt:droud:drouk:drovy:drubs:drugs:drums:drung:drunt:drupa:drupe:drury:druse:drusy:druxy:druze:dsect:dtset:duads:duala:duali:duals:duane:duant:dubba:dubby:dubhe:dubio:ducal:ducat:duces:ducky:ducks:ducts:duddy:dudes:duels:duets:duffy:duffs:dugal:duhat:duits:dujan:dukes:dukhn:dulat:dulce:duler:dulia:dulls:dulse:dumas:dumba:dumby:dumbs:dumka:dumky:dumps:dunal:dunch:dunes:dungy:dungs:dunks:dunne:dunny:dunno:dunst:dunts:duole:duomi:duomo:duped:duper:dupes:dupla:duple:duply:duppa:duppy:dural:duras:durax:dured:duree:dures:duret:duryl:durio:durns:duroc:duroy:duros:durra:durry:durrs:durst:durum:durzi:dusio:dusks:dusts:dusun:dutra:duxes:dvigu:dwale:dwalm:dwang:dwyka:dwine:eably:eagre:eared:earle:earls:earns:earsh:eased:easer:eases:easts:eaved:eaver:eaves:ebbed:ebbet:eblis:ebons:ecart:echar:echea:eched:eches:echis:echos:ecize:ecoid:ecole:ecrus:ectad:ectal:edana:edder:eddic:eddie:edema:edgar:edged:edger:edges:ediya:edile:edith:edits:edoni:educe:educt:edwin:eeler:eemis:eeten:effet:effie:egads:egall:egers:egest:eggar:egged:egger:egypt:egrid:eyass:eider:eidos:eyers:eyess:eyght:eigne:eikon:eimak:eimer:eyoty:eyrar:eyras:eyren:eyrer:eyres:eyrie:eyrir:ejido:ejusd:ekaha:ekron:elaic:elayl:elain:elamp:eland:elans:elaps:eldin:elean:eleme:elemi:eleut:eleve:elfic:elian:elias:elihu:elymi:eliot:eliza:ellan:ellen:elmer:eloah:eloge:elogy:eloin:elong:elops:elric:elses:elsin:elute:elvan:elver:elves:elvet:elvis:emane:embay:embar:embog:embow:embox:embue:embus:emden:emeer:emend:emery:emesa:emeus:emyde:emyds:emigr:emily:emirs:emits:emlen:emmer:emmet:emmew:emong:emony:emory:emote:emove:empeo:emule:emuls:enage:enami:enapt:enarm:enate:encia:encyc:encup:ended:ender:endew:endia:endue:eneas:eneid:enent:enfin:engem:engin:engle:enhat:eniac:enlay:enmew:ennew:ennia:ennoy:enoch:enode:enoil:enols:enorm:enorn:enows:enpia:enray:enrib:enrol:enrut:ensky:entad:ental:entea:entia:entom:entre:entte:enure:envoi:enweb:enzym:eoith:eosin:epact:epees:epeus:ephah:ephas:ephod:ephoi:ephor:epics:epiky:epist:eplot:epode:epopt:eppes:eppie:epris:epsom:epulo:eques:equid:equiv:equus:erade:erato:erava:erbia:erept:ergal:ergon:ergot:erian:erica:erick:erika:eryon:erizo:ermit:ernes:ernie:ernst:erose:erred:erron:ersar:erses:eruca:eruct:erugo:erump:ervil:ervum:erwin:esbay:escar:escot:escry:esere:eshin:eskar:esker:espec:esrog:essed:essee:esses:essex:essie:estab:estoc:estop:estre:estus:etang:etape:ethal:ethan:ethel:ethid:ethyl:etiam:etyma:etnas:etrog:ettle:etuis:etuve:etwas:etwee:eucre:eucti:euler:eupad:euros:eurus:eusol:evang:evans:evase:eveck:evene:evens:evert:evese:evils:evite:ewder:ewery:ewers:ewest:ewhow:ewing:exams:exaun:excud:excur:exdie:exeat:execs:exect:exede:exhbn:exies:exine:exing:exion:exite:exits:exlex:exode:exody:exopt:expdt:expos:exptl:expwy:exsec:exter:exude:exurb:exust:exxon:faade:fabes:faced:facer:faces:facia:facie:facit:facks:facty:facto:facts:faddy:faded:faden:fader:fades:fadge:fadme:fados:faena:faery:faffy:fager:faggy:fagin:fagot:fagus:faham:fayal:fayed:fails:fains:faire:fairm:fairs:faits:faked:faker:fakes:fakir:falco:falda:falla:fally:falls:falun:falus:famed:fames:fanal:fanam:fanes:fanga:fangy:fango:fangs:fanit:fanon:fanos:fanti:fanum:fanwe:faqir:farad:farci:farcy:farde:fardh:fardo:fards:fared:farer:fares:fario:farle:farls:farmy:farms:faros:farse:farsi:farth:farts:fasti:fasts:fated:fates:fatil:fatly:fator:fatso:fatwa:faugh:fauld:faulx:fauns:faurd:fause:faust:faute:fauve:favel:favus:fawny:fawns:faxed:faxes:fazed:fazes:fchar:fcomp:fconv:fdubs:fears:fease:featy:feats:feaze:feces:fecit:fecks:fedia:feedy:feeds:feely:feels:feere:feest:feeze:feyer:feint:feist:felid:felis:felix:felly:fells:felty:felts:felup:femes:femic:fendy:fends:fenks:fenny:feods:feoff:ferae:feres:feria:ferie:ferio:ferly:ferme:fermi:ferny:ferns:ferox:ferri:ferth:fesse:festa:feste:festy:fetas:feted:fetes:fetis:fetor:fetwa:feuar:feuds:feued:feute:fezes:fezzy:fgrid:fhrer:fiant:fiard:fiars:fiats:fibra:fibre:fibry:fibro:fices:fyces:fiche:fichu:ficin:fidac:fidel:fides:fidge:fidia:fidos:fiefs:fient:fieri:fifed:fifer:fifes:fifie:figgy:fiked:fikey:fykes:fikie:filao:filar:filch:filea:filed:files:filii:filix:filla:fille:fills:films:filum:finca:findy:finds:fined:fines:finew:fingu:finis:finks:finny:finns:fiord:fique:firca:fired:firer:fires:firma:firms:firns:firry:firth:fiscs:fisty:fists:fitch:fitly:fytte:fitty:fiver:fives:fixed:fixes:fixup:fjeld:flabs:flaff:flags:flain:flays:flamb:flamy:flams:flane:flang:flans:flaps:flary:flats:flavo:flawy:flawn:flaws:flaxy:flche:fldxt:fleay:fleak:fleam:flear:fleas:flect:fleer:flees:flegm:fleys:fleme:fleta:fleur:flews:flexo:flyby:flics:flied:flies:flimp:flipe:flype:flips:flisk:flite:flyte:flits:fload:flocs:floey:floes:flogs:floyd:floit:floyt:flong:flook:flops:flory:flosh:flota:flote:flots:flowe:flowk:flows:flrie:flubs:flued:fluey:fluer:flues:fluyt:fluky:flump:fluor:flurn:flurr:flurt:flusk:fluty:fname:fnese:foaly:foals:foams:fodda:foder:fodge:foehn:foeti:fogas:fogey:fogie:fogle:fogon:fogou:fogus:fohat:fohns:foils:foins:foism:foldy:folds:folia:folic:folie:folky:folks:fomes:fonds:fondu:fonly:fonts:foody:foods:fools:footy:foots:foppy:foram:forby:forbs:forcy:fordy:fordo:fords:forel:fores:foret:forex:forky:forks:forma:forme:formy:forms:forra:forst:forts:fosie:fossa:fosse:fotch:fotui:fouls:fount:fourb:fours:foute:fouth:fouty:fovea:fowls:foxed:foxer:foxes:foxie:foxly:fplot:fpsps:frack:fract:frags:fraid:fraik:frayn:frays:franc:franz:frape:frapp:fraps:frary:frase:frass:frate:frats:fraus:frawn:fraze:frden:fream:freck:freen:frees:freet:freya:freir:freyr:freit:fremd:fremt:frena:freon:frere:fress:frets:frett:freud:frier:fryer:fries:frigs:frija:frike:frise:friss:frist:frith:frits:fritt:frize:frizz:froes:frogs:frons:froom:frore:frory:frosh:frosk:frowy:frowl:frows:frugs:frump:frush:frust:fuage:fubby:fubsy:fuchi:fucks:fucus:fuder:fudgy:fuels:fuffy:fugal:fuggy:fugie:fugio:fugit:fugle:fujis:fulah:fulls:fulth:fultz:fulup:fulwa:fumed:fumer:fumes:fumet:fumid:fundi:funds:funge:fungo:funic:funis:funje:funks:funli:fural:furan:furca:furil:furyl:furls:furud:furze:furzy:fused:fusee:fusel:fuses:fusht:fusil:fusty:fusus:futwa:fuzed:fuzee:fuzes:fuzil:gabby:gable:gabon:gaddi:gader:gades:gadge:gadid:gadis:gadso:gadus:gaels:gaffs:gaged:gagee:gager:gages:gagor:gayal:gaine:gains:gaist:gaits:gaitt:gaius:gaize:galah:galas:galax:galbe:galea:galee:galei:galey:galen:gales:galet:galga:galik:galla:galli:gally:galls:galop:galut:galvo:gamba:gambe:gambs:gamed:gamey:games:gamic:gamin:gammy:gamps:ganam:ganch:ganda:ganef:ganev:ganga:gange:gangs:ganja:ganof:gansa:gansy:ganta:ganza:gaols:gaped:gaper:gapes:gappy:garad:garau:garbo:garbs:garce:garde:gardy:gareh:garle:garni:garon:garoo:garse:garth:garua:garum:gasan:gases:gashy:gaspy:gasps:gasts:gatch:gated:gater:gates:gatha:gator:gauby:gaucy:gauds:gauls:gault:gaumy:gaums:gaura:gaure:gaurs:gauss:gauzy:gavia:gavot:gawby:gawks:gawsy:gazed:gazee:gazel:gazes:gazet:gazon:gazoz:gconv:gears:gease:geast:gebur:gecks:gedds:geeks:geest:gehey:geyan:geira:geisa:geist:gekko:gelds:gelee:gelid:gelly:gelts:gemel:gemma:gemmy:gemot:gemse:gemul:genae:genal:genep:genes:genet:genic:genii:genin:genio:genip:genys:genit:genny:genoa:genom:genos:genro:genty:gents:genua:genus:geode:geoff:geoid:geoty:gerah:gerbe:gerbo:gerim:gerip:germy:germs:gesan:gesso:geste:gests:getae:getah:getas:getfd:getic:getid:getup:geums:ghain:ghana:ghast:ghats:ghaut:ghazi:ghbor:ghees:ghent:ghess:ghyll:ghole:ghoom:gibbi:gibby:gibed:gybed:gibel:giber:gibes:gybes:gibli:gibus:gifts:gigas:gyges:gigge:gighe:gygis:gigot:gigue:giher:gilds:giles:gilet:gilia:gilim:gilly:gills:gilpy:gilse:gilty:gilts:gimel:gymel:gimme:gimpy:gimps:ginep:gynic:ginks:ginny:ginzo:gipon:gippy:gippo:gyppo:gyral:girba:girds:gyred:gyres:gyric:girja:girls:girny:girns:giron:gyron:giros:gyros:girse:girsh:girts:gyrus:gisel:gisla:gismo:gists:gitim:giust:gyved:givey:gives:gyves:givin:gizmo:glace:glack:glady:glads:glaga:glaik:glair:glaky:glali:glans:glary:glaum:glaur:glaux:glave:glazy:glead:gleba:glebe:gleby:glede:gledy:gleds:gleed:gleek:gleen:glees:gleet:gleir:gleys:gleit:glene:glenn:glens:glent:glial:glick:gliff:glike:glime:glims:glink:glynn:glisk:gliss:glist:gloam:globy:globs:gloea:glogg:glome:glomi:gloms:glood:glops:glore:glost:glout:glows:gloze:gluck:glued:gluey:gluer:glues:gluma:glume:glump:gluon:gluts:gnarl:gnarr:gnars:gnast:gnats:gnawn:gnaws:gnide:gnoff:goads:goala:goals:goaty:goats:goave:goban:gobbe:gobby:gobet:gobia:gobio:gobos:godet:goers:goety:gofer:gogga:gogos:goyim:goyin:goyle:goldi:goldy:golds:golee:goles:golet:golfs:golgi:goloe:golpe:gombo:gomer:gonal:gondi:goney:gongs:gonia:gonid:gonif:gonys:gonna:gonne:gonof:gonzo:goods:goofs:gooky:gooks:gools:gooma:goony:goons:goopy:goops:goosy:gopak:goral:goran:gorce:gored:gorer:gores:goric:gorki:gorra:gorry:gorse:gorsy:gorst:gossy:gotch:goter:gotha:goths:gotos:gotra:gotta:gouda:goudy:goumi:goura:goury:gouty:gouts:gowan:gowdy:gowds:gowks:gowns:goxes:graal:grabs:gracy:grads:graff:graip:grays:grama:grame:gramy:gramp:grams:grana:grane:grank:grano:grapy:grata:grebe:grebo:grece:greco:greek:grees:grege:gregg:grego:grein:greys:greit:grene:greta:grete:grewt:grice:gride:gryde:grids:griff:grift:grigs:grike:grimm:grimp:grins:grint:griot:grype:griph:gryph:gripy:grips:gript:grise:grist:grith:grits:groat:groff:grogs:groma:grond:gront:groof:groop:groot:groow:grosz:grote:grots:grouf:grovy:grows:grubs:grues:gruft:gruis:gruys:grume:grump:grush:gruss:gteau:guaba:guaco:guaka:guama:guana:guano:guans:guara:guary:guars:guasa:guato:guaza:gubat:gubbo:gucki:gucks:gudes:gudge:gudok:guelf:guffy:guffs:gugal:guiac:guiba:guido:guids:guyed:guyer:guige:guijo:guily:guyot:guiro:gujar:gulae:gular:gulas:gules:gulfy:gulfs:gulix:gulls:gulph:gulpy:gulps:gumby:gumly:gumma:gunda:gundi:gundy:gunge:gunja:gunky:gunks:gunne:gunny:guran:gurdy:gurge:guric:gurle:gurly:gurry:gursh:gurts:gurus:guser:gushy:gusla:gusle:gussy:gusts:gutsy:gutta:gutte:gutti:gutty:guzul:gweed:gwely:gwine:haafs:haars:habab:habbe:habet:hable:habub:habus:hacek:hache:hacht:hacky:hacks:hadal:haddo:haded:hades:hadit:hadji:hadnt:hadst:haems:haets:hafis:hafiz:hafts:hagar:haggy:hagia:hague:haick:haida:haydn:hayed:hayey:hayer:hayes:haika:haikh:haiks:haiku:haily:hails:haine:hayne:haire:hairs:haiti:hajes:hajib:hajis:hajji:hakam:hakea:hakes:hakim:hakka:halal:halas:halch:haldu:haled:haler:hales:halfa:halfy:halid:halke:hallo:halls:halma:halms:haloa:halos:halse:halte:halts:halva:halwe:hamal:haman:hamel:hames:hamli:hammy:hamsa:hamus:hamza:hanap:hance:hanch:hands:hange:hangs:hanif:hanky:hanks:hankt:hanna:hanoi:hansa:hanse:hants:haole:haoma:haori:hapax:haply:haram:haras:harbi:hards:hared:hares:harim:harka:harks:harle:harls:harms:harns:harpa:harps:harre:harst:harts:hasan:hashy:hasht:hasid:hasky:hasnt:hasps:hasta:hated:hatel:hates:hathi:hatte:hatti:hatty:haugh:hauld:haulm:hauls:hault:hausa:hause:haust:havel:haver:haves:hawed:hawer:hawky:hawks:hawok:hawse:hazan:hazed:hazen:hazer:hazes:hazle:hdqrs:heads:heald:heals:heapy:heaps:hears:heats:heazy:heben:hecco:hecht:hecks:hecte:heder:hedgy:heedy:heeds:heels:heeze:heezy:hefts:heiau:heidi:heigh:heygh:heild:heily:heils:heinz:heirs:heize:helas:helco:helen:helge:helio:helly:hells:helms:heloe:helot:helps:helve:hemad:hemal:heman:hemen:hemes:hemic:hemin:hemol:hempy:hemps:henad:hendy:henen:henge:henna:henny:henry:hents:hepar:herat:herba:herby:herbs:herds:herem:heres:herls:herma:hermi:hermo:herms:herne:herns:heros:herry:herse:hertz:herve:hests:heths:hetty:heuau:heuch:heugh:hevea:heved:hewed:hewel:hewer:hewgh:hexad:hexed:hexer:hexes:hexyl:hexis:hiant:hiate:hibla:hybla:hicht:hichu:hicky:hicks:hided:hidel:hider:hides:hydra:hield:hiems:hienz:hiera:highs:hight:higra:hying:hijra:hiked:hiker:hikes:hilar:hylas:hilch:hilda:hyleg:hylic:hillo:hills:hilsa:hilts:hilum:hilus:himne:hymns:hinau:hinch:hynde:hindi:hinds:hindu:hiney:hinny:hints:hyoid:hyped:hiper:hypes:hypha:hypho:hipmi:hypos:hippa:hippi:hiram:hyrax:hired:hiren:hirer:hires:hirse:hyrse:hirst:hyrst:hisis:hyson:hispa:hissy:hists:hithe:hived:hiver:hives:hoagy:hoary:hoars:hoast:hoboe:hobos:hocco:hocky:hocks:hocus:hodad:hoddy:hodge:hoers:hogan:hogen:hoggy:hoggs:hogni:hoick:hoyle:hoise:hokan:hoked:hokey:hoker:hokes:hokku:hokum:holds:holed:holey:holer:holes:holia:holks:holla:hollo:holms:holts:homam:homed:homey:homes:homme:homos:honan:honda:hondo:honed:honer:hones:hongs:honky:honks:honzo:hooch:hoody:hoods:hooey:hoofy:hoofs:hooye:hooka:hooky:hooks:hooly:hoops:hoose:hoosh:hoots:hoove:hopak:hoped:hoper:hopes:hopis:hoppy:hoppo:horae:horah:horal:horas:horim:horla:horme:horns:horol:horry:horsy:horst:hosea:hosed:hosel:hosen:hoses:hosta:hosts:hotch:hotta:hough:hoult:houri:hours:housy:houss:houve:hoven:howea:howel:howes:howff:howfs:howks:howls:howso:hsien:hsuan:huaca:huaco:huari:huave:hubba:hubby:hucho:hucks:huffy:huffs:huger:huile:hulas:hulch:hulky:hulks:hullo:hulls:humbo:humet:humic:humin:humit:humpy:humps:hundi:hunks:hunts:hurds:hurly:hurls:huron:hurri:hurst:hurty:hurts:husho:husht:husks:hutia:hutre:huzza:huzzy:yabbi:yabby:yaboo:yacal:yacca:yacks:yadim:yaffs:yager:yagis:yagua:yahan:yahoo:yaird:yajna:yakan:yakin:yakka:yakut:yalla:iambe:iambi:iambs:yamel:yamen:yameo:yampa:yamph:yamun:yanan:yangs:yanky:yanks:ianus:yaply:yapok:yapon:yappy:yaqui:yaray:yarak:yards:yarer:yarke:yarly:yarns:yarry:yarth:yasht:yasna:yauds:yauld:yaups:yawed:yawey:yawls:yawny:yawns:yawps:yazoo:iberi:ibota:icaco:icasm:iceni:ichor:ichth:icica:icier:icker:ickle:yclad:icons:iconv:ictic:ictus:idaho:idaic:idant:idcue:iddat:iddhi:iddio:idean:ideas:ident:idest:ideta:idgah:idyls:idion:idism:idist:idite:idled:idles:idola:idols:idose:idryl:yeans:yeara:yeard:years:yecch:yechy:yechs:yeech:yeggs:yelek:yelks:yells:yelps:yemen:yenta:yente:yeply:yerba:yerga:yerks:ierne:yerth:yerva:yeses:yesso:yesty:yetis:yetts:yeuky:yeuks:yeven:yezdi:yezzy:yfere:ifint:ifree:ifrit:ygapo:igara:igdyr:ighly:iglus:ignaw:ignis:ihlat:ihram:iiasa:yikes:yills:yince:yinst:yipes:yirds:yirrs:yirth:ijmaa:ijore:ikary:ikona:ikons:ilama:ileac:ileal:ylems:ileon:ileum:ileus:iliad:ilial:ilian:iliau:ilima:ilion:ilium:iller:illth:illus:iloko:imago:imams:imaum:imban:imbat:imbed:imber:imcnt:imide:imido:imids:imine:imino:immew:immis:immit:immix:immov:immun:impar:imped:impen:imper:impis:impot:imput:imshi:imvia:inact:inaja:inapt:inark:inarm:inbye:inbow:incan:incas:incle:incog:incor:incra:incus:incut:indan:indef:indew:india:indic:indii:indyl:indin:indiv:indol:indow:indra:indri:induc:indue:indus:ineye:ineri:inerm:infin:infit:infix:infos:infra:ingan:ingem:inger:ingle:inglu:inial:inigo:inion:injun:inked:inken:inker:inket:inkie:inkle:inkos:inkra:inlaw:inmew:inned:innet:inoma:inone:inorb:inorg:inrol:inrub:inrun:insea:insee:insep:inset:insol:instr:insue:intel:intil:intnl:intra:intsv:intue:inula:inure:inurn:inust:invar:invoy:inwit:yobbo:yocco:yocks:iodal:yodel:yodhs:iodic:iodid:iodin:yodle:iodol:yogas:yogee:yoghs:yogic:yogin:yogis:yoick:yojan:yoked:yokel:yoker:yokes:yolky:yolks:yomer:yomim:yomin:yomud:yonic:yonis:yores:iortn:iotas:youff:youre:yourn:yours:yourt:youse:youve:youze:yoven:iowan:yowed:yowes:yowie:yowls:iphis:yquem:irade:irani:iraqi:irbis:irena:irene:ireos:irfan:irgun:irian:irido:iring:irish:irked:iroha:iroko:irone:irons:irous:irpex:irred:irreg:irvin:irwin:isaac:isawa:isbas:iseum:isiac:ising:isize:islay:islam:isled:isles:islot:ismal:isnad:isoln:isort:issei:isthm:istle:itala:itali:italy:itcze:itemy:items:iters:ither:ytter:yuans:yucca:yucch:yuchi:yucky:yucks:yugas:yukon:yulan:yules:iulus:yuman:yummy:yunca:yupon:yurak:yurok:yurta:yurts:yuruk:ivied:ivies:ivray:ixias:ixion:ixora:ixtle:izard:izars:izing:izote:iztle:izumi:izzat:jabia:jabot:jabul:jacal:jacht:jacky:jacko:jacks:jacob:jaded:jades:jagat:jager:jaggy:jaggs:jagir:jagla:jagra:jagua:jahve:jails:jaime:jaina:jakey:jakes:jakob:jakos:jakun:jalap:jalee:jalet:jalop:jalor:jalur:jaman:jambe:jambo:jambs:james:jamie:jammy:janes:janet:janos:janty:jantu:janua:janus:japan:japed:japer:japes:japyx:jarde:jared:jarls:jarmo:jarra:jarry:jarvy:jasey:jason:jaspe:jatha:jatki:jatni:jatos:jauks:jaups:javan:javas:javel:javer:jawab:jawan:jawed:jazey:jeany:jeans:jebat:jebel:jebus:jeeps:jeery:jeers:jefes:jehad:jehup:jehus:jelab:jelib:jello:jells:jembe:jemez:jemmy:jenna:jenny:jerez:jerib:jerid:jerks:jerry:jesse:jests:jesus:jetes:jeton:jewed:jewis:jewry:jheel:jhool:jibba:jibby:jibbs:jibed:jiber:jibes:jiboa:jiffs:jiggy:jihad:jills:jilts:jimbo:jimmy:jimpy:jingo:jingu:jinja:jinks:jinni:jinny:jinns:jiqui:jirga:jisms:jitro:jived:jives:jixie:jizya:jnana:jocko:jocks:jocum:jodel:joeys:johan:johns:joyce:joyed:joins:joked:jokey:jokes:jokul:joles:jolty:jolts:jomon:jonah:jonas:jones:joola:joram:joree:jorge:jorum:josey:joshi:josie:josip:jotas:jotty:joual:jough:jougs:jouks:joule:journ:jours:jowar:jowed:jowel:jower:jowly:jowls:jowpy:juang:juans:jubas:jubbe:jubes:jubus:judah:judas:judex:judos:jufti:jufts:jugal:juger:jugum:juyas:juise:jujus:juked:jukes:julep:jules:julia:julid:julie:julio:julus:jumba:jumby:jumma:jumps:junco:jundy:junky:junks:jupes:jupon:jural:jurat:jurel:juris:jussi:justo:justs:jutes:jutic:jutka:jutty:juvia:juxta:kaaba:kaama:kabab:kabar:kabel:kabob:kacha:kadis:kadmi:kados:kafir:kafiz:kafka:kafta:kagos:kagus:kahar:kahau:kaiak:kayan:kaifs:kails:kaimo:kains:kayos:kaiwi:kajar:kakan:kakar:kakas:kakis:kakke:kalam:kalan:kales:kalif:kalis:kalon:kalpa:kamao:kamas:kamba:kamel:kames:kamik:kamis:kanae:kanap:kanas:kanat:kande:kaneh:kanes:kanga:kanji:kannu:kansa:kanzu:kaons:kapai:kapas:kaphs:kapok:kappe:kapur:kaput:karat:karbi:karch:karel:karen:karez:karns:karoo:karos:karou:karri:karst:karts:kaser:kasha:kashi:kaska:kassu:katar:katat:katha:kathy:katie:katik:katun:kauch:kauri:kaury:kavas:kaver:kazak:kazoo:keach:kearn:keats:keawe:kebar:kebby:kebob:kecky:kecks:kedar:kedge:kedgy:keech:keefs:keeks:keels:keena:keens:keeps:keest:keets:keeve:kefir:kefti:keyed:keirs:keist:keita:keith:keywd:keleh:kelek:kelep:kelia:kella:kelly:kelpy:kelps:kelty:kelts:kemal:kempy:kemps:kempt:kenaf:kenai:kench:kendy:kendo:kenya:kenny:kenno:kenos:kente:keout:kepis:kerat:kerbs:kerch:kerel:keres:kerfs:keryx:kerne:kerns:keros:kerri:kerry:kerve:kesar:kesse:ketal:ketch:keten:ketyl:ketol:kette:ketty:kevan:kevel:kever:kevil:kevin:kevyn:kexes:khadi:khaya:khair:khaja:khami:khans:khasa:khasi:khass:khats:kheda:khila:khmer:khoja:khoka:khond:khuai:khula:khuzi:khvat:kiaat:kiack:kyack:kiaki:kiang:kyang:kyars:kyats:kibei:kibes:kibla:kicky:kicks:kiddy:kiddo:kiefs:kieye:kiers:kiyas:kikar:kikes:kikki:kikoi:kilah:kilan:kileh:kiley:kylie:kilij:kilim:kylin:kylix:killy:kills:kilns:kyloe:kilom:kilos:kilty:kilts:kimbo:kimmo:kinah:kinch:kinds:kines:kings:kingu:kinic:kinin:kinks:kinoo:kinos:kinot:kioea:kioko:kyoto:kiowa:kippy:kirby:kyrie:kirks:kirns:kirve:kisan:kishy:kisra:kissy:kists:kiswa:kitab:kitan:kitar:kited:kiter:kites:kytes:kithe:kythe:kiths:kyung:kivas:kiver:kiwai:kiwis:kizil:klans:klaus:kleig:klick:klieg:kling:klino:klong:kloof:klops:klosh:kluck:klunk:klutz:kmole:knape:knaps:knark:knarl:knars:knees:knell:knezi:kniaz:knyaz:knick:knish:knits:knive:knobs:knoit:knops:knorr:knosp:knots:knout:knowe:knows:knurl:knurs:knute:knuth:koali:koans:koban:kobus:kodak:kodro:koels:koeri:kofta:kogai:kogia:kohen:kohls:kohua:koyan:koila:koine:kokam:kokan:kokia:kokil:kokio:kokos:kokra:kokum:kolas:kolea:kolis:kolos:kombu:konak:konde:kondo:kongo:kongu:konia:kooka:kooky:kooks:koorg:kopec:kopek:kophs:kopis:kopje:koppa:korah:korai:koran:korea:korec:korin:korma:koroa:korun:korwa:kosha:kosin:kosos:kotal:kotar:kotos:kotow:kouza:kovil:kraal:kraft:krait:krama:krang:krans:kraut:krebs:kreil:kreis:krems:kreng:krepi:krina:kriss:krivu:krome:krona:krone:kroon:krosa:krubi:kubba:kudos:kudus:kudzu:kufic:kugel:kukri:kukui:kulah:kulak:kulan:kuman:kumbi:kumyk:kumis:kumys:kumni:kunai:kunbi:kurku:kurmi:kurta:kurus:kusam:kusan:kusha:kusso:kusti:kusum:kutch:kutta:kvass:kvint:kwapa:kwela:laang:laban:labba:labby:labia:labis:labra:lacca:laced:lacey:lacer:laces:lacet:lache:lacis:lacks:lacto:laded:lader:lades:ladik:ladin:laeti:laevo:lagan:lagen:lagly:lagna:lahar:laich:laics:layed:laigh:layia:laine:layne:laird:lairy:lairs:laith:laity:layup:laius:laked:lakey:laker:lakes:lakhs:lakie:lakin:lakke:laksa:lally:lalls:lamas:lamba:lamby:lambs:lamda:lamed:lamel:lamer:lames:lamia:lamin:lammy:lamna:lampf:lamps:lamus:lamut:lanai:lanao:lanas:lanaz:lanch:lande:lands:laney:lanes:langi:lango:lanny:lansa:lanum:lapin:lapis:lapon:lappa:lapps:lapsi:larch:lardy:lards:lares:largy:largo:laria:larid:larin:larix:larky:larks:laron:larry:larum:larus:larve:lased:laser:lases:lassu:lasty:lasts:latah:latax:lated:laten:latex:lathi:lathy:laths:latin:latke:laton:latro:latus:lauan:laude:lauds:lauia:laund:laura:laure:laury:lautu:lavas:laved:laver:laves:lavic:lawed:lawks:lawny:lawns:lawzy:laxer:laxly:lazar:lazed:lazes:leady:leads:leafs:leaks:leany:leans:leaps:leary:lears:leath:leavy:leban:leben:lebes:leche:leden:ledgy:ledol:ledum:leeds:leeky:leeks:leers:leese:leets:lefts:leger:leges:legge:legis:legit:legoa:legua:lehay:lehrs:lehua:leigh:leila:leiss:leith:lekha:lelia:leman:lemel:lemma:lemna:lenad:lenca:lench:lends:lendu:lenes:lenin:lenis:lenny:lenos:lense:lenth:lento:leone:leora:lepal:lepas:lepid:leppy:lepra:lepre:lepry:lepta:lepus:lerot:lerwa:lesed:lesgh:lesya:lesiy:lessn:leste:letch:lethe:lethy:letty:letup:leuch:leuco:leuds:leuma:leung:levee:leven:levet:levin:levir:levis:lewie:lewis:lewth:lewty:lexia:lexic:lexis:lhota:liana:liane:liang:liard:lyard:liars:lyart:lyase:libby:liber:libya:libra:libre:libri:licca:lycea:lycee:licet:lichi:licht:lycid:licit:licks:lycus:lidar:lidia:lydia:lidos:liens:lyery:liers:liesh:liest:lieue:lieus:lieut:lieve:lifey:lifen:lifer:lifts:ligan:ligas:liger:ligge:ligne:lygus:liked:lyken:liker:likes:likin:lilas:liles:lilly:lilts:liman:limas:limax:limba:limbi:limby:limbs:limbu:limed:limey:limen:limer:limes:limli:limma:limmu:limns:limos:limpy:limps:limsy:linac:linch:lynch:linda:lindy:lindo:linea:lined:liney:lines:linet:linga:linge:lingy:lings:linha:linie:linin:linja:linje:linky:links:linne:lynne:linns:linon:linos:linty:lints:linum:linus:lions:lipan:lipic:lipin:lippy:lipse:liras:lyres:lyrid:lirot:lysed:lyses:lysin:lysis:lisle:lysol:lisps:lyssa:listy:lists:liszt:litai:litas:litch:liter:lites:lythe:lithi:lithy:litho:lytic:litra:litre:lytta:litui:litus:lived:liven:lives:livor:livre:liwan:llano:lloyd:lludd:loach:loads:loafs:loams:loans:loasa:loave:lobal:lobar:lobed:lobes:lobos:lobus:loche:lochi:lochy:lochs:locky:locks:locos:locum:loden:lodes:lodha:lodur:loeil:loess:lofts:logan:loges:loggy:logia:logie:logis:logoi:logos:lohan:lohar:loins:lokao:loket:lolly:lolls:lomta:loner:longa:longe:longs:looby:looch:looed:looey:loofa:loofs:looie:looky:looks:looms:loony:loons:loope:loops:loord:loory:loots:loped:loper:lopes:loppy:loral:loran:lordy:lords:lored:lorel:loren:lores:loric:loris:loros:lorum:losel:loses:lossy:lotah:lotan:lotas:lotic:lotor:lotos:lotta:lotte:lotto:lotus:louch:louey:lough:louie:louis:loulu:loupe:loups:lourd:loury:lours:louty:louts:lovat:loved:lovee:lovey:loves:lowan:lowed:lowes:lowry:lowse:lowth:loxed:loxes:loxia:loxic:lrecl:luaus:lubes:lubra:lucan:luces:lucet:lucia:lucks:lucre:luddy:luffa:luffs:luger:luges:luian:luigi:luite:lukan:lukas:luket:lulab:lulav:lully:lulls:lulus:lumme:lummy:lumps:lumut:lunas:lunda:lunel:lunes:lunet:lungi:lungy:lungs:lunka:lunks:lunts:lupid:lupin:lupis:lural:lured:lurer:lures:lurky:lurks:lurry:luser:lushy:lusky:lusts:lusus:lutao:lutea:luted:luteo:luter:lutes:lutra:luxes:luxus:maana:maars:mabel:macan:macao:macco:maced:macer:maces:machi:machs:macks:macle:macon:madge:madia:madid:madoc:madre:mafey:mafic:mafoo:magas:mages:maggy:maghi:magna:magog:magot:magus:mahal:mahar:mahat:mahdi:mahoe:mahra:mahri:mahua:mahwa:mayan:mayas:maida:mayda:maidy:maids:maidu:mayed:mayey:mayer:maiid:maile:maill:mails:maims:maine:mains:maint:maynt:maire:mairs:maist:mayst:maius:majas:majos:makah:makar:makes:makos:makua:makuk:malay:malam:malar:malax:malee:maleo:males:malgr:malic:malie:malik:malls:malmy:malms:malta:malty:malto:malts:malum:malus:malva:malwa:mamas:mamba:mambu:mamey:mamie:mamry:manak:manal:manas:manba:mande:mandi:mands:maned:maneh:manei:maney:manes:manet:mangi:manid:manie:manis:manit:maniu:manky:manks:manna:manny:manoc:manos:manqu:manse:manso:manta:manty:manto:manuf:manul:manus:maori:mapau:mappy:maqui:marae:marah:maray:maral:maras:marci:marco:marcs:mardi:mardy:marek:mares:marga:marge:maria:marid:marie:mario:maris:marys:marka:marko:marks:marla:marli:marly:marls:marok:maror:maros:marse:marsi:marty:marts:martu:marvy:masai:maser:masha:mashy:masks:massa:massy:masty:masts:matai:matar:matax:mated:mater:mates:matha:mathe:maths:matie:matin:matka:matlo:matra:matsu:matta:matte:matti:matty:matts:matza:matzo:mauby:maugh:mauls:maund:mauri:mauts:maven:mavie:mavin:mavis:mawed:mawky:mawks:maxis:mazda:mazed:mazel:mazer:mazes:mazic:mazur:mazut:mbaya:mbira:mbori:mbuba:mccoy:mckay:meach:meads:meals:meany:means:mease:meath:meats:meaul:mebos:mecon:mecum:medea:medii:medio:medle:medoc:meece:meech:meeds:meeks:meese:meeth:meets:meggy:meiji:meile:meiny:meith:melam:melas:melba:melch:melds:meles:melia:melic:melis:mells:meloe:melos:melts:memos:menad:menat:mende:mendi:mendy:mends:menic:menow:mensa:mense:mensk:menta:menus:meows:merak:merat:merce:merch:merci:mered:merel:merer:meres:mergh:meril:merks:merle:merls:merop:meros:merse:mesad:mesal:mesas:mesel:mesem:meshy:mesic:mesne:meson:messe:messy:mesua:metad:metae:metas:meted:metel:metes:metho:meths:metic:metif:metin:metis:metol:metra:metre:metus:metze:meuni:meuse:meute:mewed:mewer:mewls:mezzo:mhorr:myall:miami:miaou:miaow:miasm:miaul:miauw:micah:micas:miche:micht:micky:micks:mycol:micra:midas:middy:mider:midgy:midis:miens:miffy:miffs:miggs:miked:mikey:mikes:mikie:mikir:mikra:milan:mylar:milch:miler:miles:milha:milia:milit:milko:milks:milla:mille:milly:mills:milor:milos:milpa:milty:milts:mymar:mimed:mimeo:mimer:mimes:mimir:mimly:mimsy:mimus:mimzy:minae:minah:mynah:minar:minas:mynas:minbu:mincy:minds:mined:mines:minge:mingy:mingo:minie:minis:minks:minny:minos:minot:minow:mints:minum:myoid:myoma:myope:myopy:myops:miqra:mirac:mirak:mired:mires:mirex:mirid:mirky:mirks:mirly:myron:mirvs:mirza:misce:misdo:mysel:mises:misgo:mysid:mysis:misky:misly:misos:missa:misty:mists:mitch:miter:mites:myths:mitis:mitra:mitre:mitty:mitts:mitua:mixed:mixen:mixer:mixes:mixup:mizar:mizen:mizzy:mnage:mneme:mnium:moans:moats:mobby:mobed:mobil:moble:moche:mochy:mocks:mocoa:moder:modes:modge:modif:modoc:modus:moeck:moggy:mogos:mohar:mohel:mohos:mohur:mohwa:moyen:moier:moile:moyle:moils:moira:moire:moise:moism:moity:mojos:mokes:mokum:molal:molas:molds:moler:moles:molet:molge:molka:molla:molle:molly:molls:molpe:molto:molts:molvi:momes:momma:momme:mommy:momus:monad:monal:monas:monax:monde:mondo:monel:moner:mongo:monic:monie:monks:monny:monos:monte:monty:montu:mooch:moods:mooed:moola:mools:moong:moony:moons:moore:moory:moorn:moors:moosa:moost:mooth:moots:mopan:moped:mopey:moper:mopes:mopla:moppy:mopsy:mopus:moqui:morae:moray:moran:moras:morat:mordu:mordv:morel:mores:morga:moric:morin:mormo:morne:morns:moroc:moror:morra:morro:morse:morth:morts:morus:mosan:mosey:mosel:moses:mosgu:mosks:mossi:mosso:moste:mosts:mosul:mosur:moted:motey:moter:motes:motet:mothy:moths:moton:motte:motty:motts:mouch:moudy:moues:mould:moule:mouly:mouls:mousy:moved:moves:mowch:mowed:mowha:mowie:mowra:mowse:mowth:moxas:moxie:mozos:mphps:mpret:msink:mster:mtier:muang:mucic:mucid:mucin:mucks:mucor:mucro:mudar:mudde:mudee:mudir:mudra:muffy:muffs:mufti:mufty:muggy:muggs:mugho:mugil:muhly:muist:mujik:mukri:mukti:mulct:muled:muley:mules:mulet:mulga:mulla:mulls:mulse:multi:multo:mumbo:mumms:mumps:mumsy:munda:munga:munge:mungy:mungo:munia:munic:muntz:muong:muons:muran:muras:murat:mured:mures:murex:murga:murid:murks:murly:murmi:murph:murra:murre:murry:murrs:murut:murva:murza:musal:musar:musca:musci:mused:muser:muses:muset:musgu:musha:musie:musit:musks:mussy:musth:musts:mutch:muted:muter:mutes:mutic:mutts:mutus:muzzy:nabak:nabal:nabby:nabis:nabla:nable:nabob:nache:nacho:nacre:nacry:naevi:nagel:naggy:naght:nagor:nahor:nahua:nahum:naiad:nayar:naias:naifs:naily:nails:naira:nairy:naish:naked:naker:nakir:nakoo:naled:namaz:nambe:namby:namda:named:namer:names:namma:nammo:nanas:nance:nancy:nanda:nandi:nandu:nanes:nanga:nanmu:nants:nantz:naomi:naoto:napal:napes:napoo:nappa:nappe:nappy:narco:narcs:nards:nardu:naren:nares:naric:naris:narky:narks:narra:nasab:nasat:nasch:nassa:nasua:nasus:natch:nates:nathe:natty:natus:nauch:naumk:naunt:navar:naves:navet:navew:navig:navis:navvy:nawab:nawle:nawob:nazim:nazir:nazis:neaps:nears:neath:neats:nebby:nebel:necia:necks:necro:neddy:needn:needs:neela:neeld:neele:neems:neeps:neese:neeze:nefas:neffy:neger:negro:negus:nehru:neifs:neist:nejdi:nelly:nemas:nemos:nenes:nenta:neons:neoza:nepal:neper:nepit:neral:nerds:nerka:nerol:nerts:nertz:nervy:nesty:nests:neter:netop:netty:netts:neuma:neume:neums:nevat:nevel:neven:neves:nevoy:nevus:newar:newel:newsy:newts:nexal:nexum:nexus:ngaio:ngapi:ngoko:ngoma:ngwee:nyaya:niais:nyala:niall:niata:nibby:nicht:nicky:nicks:nicol:nidal:nided:nides:nidge:nydia:nidor:nidus:niels:niepa:nieve:nific:nifle:nifty:nigel:nighs:nigre:nigua:nihal:nihil:nikau:nikko:nikon:nills:nilot:nimbi:nymil:nymss:nines:ninon:ninos:ninox:nintu:ninut:niobe:nyoro:niota:nipas:nippy:niris:nirls:nisan:nisei:nyssa:nisse:nisus:nitch:niter:nitid:niton:nitos:nitre:nitro:nitta:nitty:niuan:nival:nixed:nixer:nixes:nixie:nyxis:nixon:nizam:nizey:njave:nobby:nobel:nobis:nobut:nocht:nocks:nodal:noddi:noddy:noded:nodes:nodus:noels:noemi:nogai:nogal:noggs:nohex:nohow:noyau:noily:noils:noint:noire:nokta:nolle:nolos:nomap:nomas:nomen:nomes:nomic:nomoi:nomos:nonas:nonce:nonda:nondo:nones:nonet:nonya:nonic:nonyl:nonly:nonny:nooky:nooks:noons:nopal:norah:noria:noric:norie:norit:norma:norms:norna:norry:norse:norsk:nosed:noser:noses:nosig:notal:notan:noted:noter:notes:notre:notum:notus:nould:nouns:novae:novas:novem:novum:novus:noway:nowch:nowed:nowel:nowts:noxal:npeel:nuadu:nubby:nubia:nucal:nucha:nucin:nuddy:nuder:nudes:nudie:nudum:nudzh:nugae:nukes:nullo:nulls:numac:numbs:numda:numen:numis:nummi:numps:numud:nunce:nunch:nunki:nunky:nunks:nunni:nunry:nuque:nurly:nurls:nurry:nursy:nutsy:oadal:oakum:oared:oaric:oasal:oases:oasis:oasts:oaten:oater:oaths:oaves:obeah:obeys:obeli:obias:obiit:obits:objet:oblat:obley:obmit:oboes:obole:oboli:obols:occas:ocher:ochna:ochre:ochry:ochro:ocyte:ocker:ocote:ocque:ocrea:octad:octan:octic:octyl:ocuby:oculi:odell:odeon:odeum:odyle:odyls:odist:odium:odoom:odors:odour:oecus:oelet:oenin:ofays:offed:offic:ofter:oftly:ogams:ogeed:ogees:ogham:oghuz:ogive:ogled:ogler:ogles:ogmic:ogres:ohare:ohelo:ohias:ohing:ohmic:ohone:oyana:oicks:oidia:oyers:oiled:oiler:oylet:oinks:oisin:okays:okapi:okehs:okras:okrug:olcha:olchi:oldie:oleic:olein:olena:olent:oleos:olepy:oleum:olios:oliva:ollas:ollav:ollie:ology:olona:olpae:olpes:olson:omaha:omani:omasa:omber:omens:omers:omina:omits:omlah:omnes:omrah:oncer:onces:oncet:oncia:oncin:onery:onymy:onium:onker:onkos:onlay:onlap:onmun:ontal:ontic:oobit:oohed:oolak:oolly:oomph:oopak:oopod:oorie:ootid:oozed:oozes:oozoa:opahs:opals:opata:opelu:opens:ophic:ophir:ophis:oping:opsin:opted:orach:oracy:orage:orale:orals:orang:orans:orant:oraon:orary:orate:orbed:orbic:orcas:orcin:ordos:oread:oreas:orgal:orgia:orgic:orgue:orias:oribi:oriel:oriya:orion:oryza:orkey:orles:orlet:orlon:orlop:orlos:ormer:ornes:ornis:oromo:orpin:orpit:orris:orrow:orsel:orson:ortet:ortho:ortyx:ortol:orvet:osage:osaka:oscan:oscar:oscin:osela:oshac:oshea:oside:osier:oskar:osmic:osmin:osmol:osone:ossal:ossea:osset:ossia:ostia:ostic:otary:otate:othin:otyak:otium:otkon:otomi:ottar:ottos:ouabe:ouija:oukia:oulap:oundy:ounds:ouphe:ouphs:ourie:ousel:ousia:ousts:outas:outby:outed:outen:outly:outre:ouvre:ouzel:ouzos:ovals:ovant:ovens:overs:ovest:ovile:ovism:ovist:ovoli:ovolo:ovula:ovule:owght:owler:owlet:owned:owsen:owser:oxane:oxboy:oxbow:oxeye:oxfly:oxids:oxime:oxims:oxlip:oxman:oxter:ozark:ozena:ozias:paauw:pablo:pacay:pacas:paced:pacer:paces:pacha:pacht:packs:pacos:pacta:pacts:padda:padge:padle:padou:padre:padri:padus:paean:paeon:paged:pager:pages:pagne:pagod:pagus:pahmi:pahos:payed:payen:paiks:pails:paine:payni:pains:payor:pairs:pairt:paisa:paise:palay:palar:palas:palau:palch:palea:paled:pales:palet:palew:palis:palki:palla:palli:pally:palls:pallu:palma:palmy:palmo:palms:palpi:palps:palta:palus:pamhy:pamir:pampa:panak:panax:panda:pandy:paned:panes:panga:pangi:pangs:panna:panne:panos:panse:panty:panto:pants:panus:paola:paolo:papas:papaw:papey:papio:papyr:pappi:pappy:papua:paque:parah:param:parao:paras:parch:parde:pardi:pardy:pardo:pards:pared:parel:paren:pares:pareu:parge:pargo:paris:parky:parks:parle:parli:parly:parma:parol:parra:parrs:parsi:parte:parti:parto:parts:parus:parve:pasan:pasch:paseo:pases:pasha:pashm:pasis:pasmo:passe:passo:passu:pasts:pasul:patao:patas:pated:patee:patel:paten:pater:pates:pathy:paths:patia:patin:patly:patta:patte:pattu:pauky:paula:pauxi:pavan:paved:paven:paver:paves:pavia:pavid:pavin:pavis:pawaw:pawed:pawer:pawky:pawls:pawns:paxes:pbxes:peage:peags:peaky:peaks:peals:peans:pears:peart:pease:peasy:peaty:peats:peavy:peban:pechs:pecht:pecky:pecks:pecos:pedee:pedes:pedro:pedum:peeke:peeks:peele:peels:peens:peeoy:peepy:peeps:peery:peers:peert:peeve:peggy:pegma:peine:peins:peise:peize:pekan:pekes:pekin:pekoe:peles:pelew:pelfs:pelon:pelta:pelts:penda:pendn:pends:penes:pengo:penis:penna:penni:pense:pensy:penta:penup:peony:peons:pepla:pepos:peppy:pepsi:perai:perau:perca:percy:perdy:perdu:peres:peris:perit:perks:perla:perle:perms:perry:perse:perty:perun:pesah:pesos:peste:pests:peter:petit:petos:petre:petri:petro:petti:petto:petum:peuhl:pewee:pewit:pflag:pfund:pgntt:phaca:phaet:phage:phane:phano:phare:pharm:pharo:phasm:pheal:phebe:phene:pheny:pheon:phial:phies:phyla:phyle:phill:phyma:physa:phlox:phoby:phoca:phoma:phono:phons:phora:phose:phoss:phots:phpht:phren:piaba:piala:pians:piast:pibal:picae:pical:picas:picea:pyche:pichi:picks:picot:picra:picry:picul:picus:pidan:piend:piers:piert:piest:pieta:piete:piezo:pygal:pight:pigly:pigmy:piing:pyins:pikas:piked:pikey:pikel:piker:pikes:pikle:pilaf:pilar:pylar:pilau:pilaw:pilch:pilea:piled:pilei:piler:piles:pylic:pilin:pilis:pills:pilmy:pilon:pylon:pilum:pilus:piman:pimas:pimps:pinal:pinas:pinax:pinda:pindy:pined:piner:pines:pinge:pingo:pings:pinic:pinyl:pinko:pinks:pinna:pinny:pinon:pinot:pynot:pinta:pinte:pints:pinup:pinus:pyoid:pions:piotr:pious:pioxe:pipal:piped:pipey:pipes:pipet:pipid:pipil:pipit:pippy:pipra:pyral:pyran:pyres:pyrex:pyric:pirny:pirns:pirog:pirol:pirot:pyrus:pisay:pisan:pisco:pishu:pisky:piste:pisum:pitas:pitau:piths:piton:pitta:piuri:piute:piwut:pixes:pyxes:pyxie:pyxis:plack:plaga:plage:playa:plays:plang:plans:plash:plasm:plass:platy:plato:plats:platt:plaud:pleas:plebe:plebs:pleck:pleis:plena:pleny:pleon:plica:plyer:plies:pliny:plink:pliss:ploat:ploce:plock:plods:ploys:plomb:plonk:plook:plops:plote:plots:plott:plotx:plouk:plout:plows:pluff:plugs:pluma:plumy:plums:plupf:pluto:pneum:poach:pobby:pocan:poche:pocky:pocks:pocul:pocus:podal:poddy:podex:podge:podgy:podia:podos:poems:poets:pogey:pogge:poggy:pohna:poilu:poind:poyou:poire:pokan:poked:pokey:pokes:pokie:pokom:polab:poled:poley:poler:poles:polio:polis:polys:polit:polje:polki:polly:polls:poloi:polos:pomak:pombe:pombo:pomey:pomel:pomes:pomme:pommy:pompa:pomps:ponca:ponce:pondy:pondo:ponds:poney:pones:ponga:pongo:ponja:ponos:ponto:poods:poohs:pooka:pooli:pooly:pools:poons:poops:poori:poort:pooty:poove:popal:popes:popie:poppa:popsy:poral:pored:porer:pores:poret:porge:porgy:porgo:poria:porky:porks:porno:porns:poros:porry:porta:porte:porty:porto:ports:porus:posca:posed:posey:poses:posho:possy:posts:potch:poter:potoo:potsy:potti:potty:potto:potus:pouce:poucy:pouff:poufs:poule:poulp:poult:pours:pousy:pouts:powan:powny:poxed:poxes:pozzy:praam:prado:prahm:prahu:praya:prays:prams:prana:prand:prang:praos:prase:prate:prats:pratt:praus:predy:preed:prees:preys:prela:prepd:prepg:prepn:preps:presa:prese:prest:preta:preux:preve:prexy:priam:prich:pricy:pridy:prier:pryer:pries:prigs:prill:prima:primi:primy:primp:prims:prine:prink:prion:prise:pryse:priss:prius:proal:proas:prodd:prods:proem:profs:progs:proke:prole:promo:proms:propr:props:prore:prosy:proso:pross:prost:prote:proto:prows:prudy:prunt:pruta:psend:pseud:pshav:pshaw:psych:psize:psoae:psoai:psoas:psora:pubal:pubes:pubis:puces:pucka:pucks:pudda:puddy:pudge:pudic:pudsy:puffs:puget:puggi:puggy:pugil:puist:puked:puker:pukes:pukka:pulas:puled:puler:pules:pulex:pulik:pulis:pulka:pulli:pulls:pulps:pumas:pumex:pumps:punan:punas:punce:punct:punga:pungi:pungy:pungs:punic:punka:punky:punks:punkt:punny:punta:punti:punty:punto:punts:pupae:pupal:pupas:purau:purda:purdy:pured:purey:purga:purim:purin:puris:purls:purre:purry:purrs:pursy:purty:puses:pussy:putid:puton:putti:putto:putts:qaids:qanat:qatar:qiana:qibla:qiyas:qophs:quadi:quads:quaff:quags:quais:quays:quaky:quale:quant:quare:quarl:quass:quata:quate:quauk:quave:quawk:qubba:queak:queal:quean:queet:quegh:queys:quelt:queme:quent:querl:quern:quica:quids:quiff:quila:quina:quink:quins:quint:quipo:quips:quipu:quira:quire:quirl:quirt:quist:quito:quits:quitu:quoad:quods:quoin:quoit:quott:qursh:qurti:raash:rabal:rabat:rabic:rabin:rabot:raced:races:rache:racks:racon:radek:radix:radly:radon:raffe:raffs:rafik:rafty:rafts:ragas:raged:ragee:rager:rages:raggy:raghu:ragis:rahul:raiae:rayah:rayan:raias:rayas:rayat:raids:rayed:rails:rains:rajab:rajas:rajes:rajiv:rakan:raked:rakee:raker:rakes:rakis:rakit:rales:ramal:raman:rambo:ramed:ramee:ramet:ramex:ramie:rammi:rammy:ramon:ramps:ramta:ramus:ranal:rance:randn:rands:ranee:rangy:ranid:ranis:ranks:ranli:ranny:ranty:rants:raped:raper:rapes:raphe:rapic:rappe:rased:rasen:raser:rases:rason:rasps:rasse:rasty:ratal:ratan:ratch:rated:ratel:rater:rates:ratha:rathe:ratos:ratti:ratwa:rauli:raupo:raved:ravel:raver:raves:ravin:rawer:rawin:rawky:rawly:raxed:raxes:razed:razee:razer:razes:razoo:reaal:readd:readl:reads:reaks:reals:reamy:reams:reaps:rears:reasy:reask:reast:reata:reave:rebab:rebag:reban:rebbe:rebec:rebed:rebeg:rebia:rebid:rebob:rebop:rebox:rebud:rebuy:recce:reccy:recco:recip:recit:recks:recon:recpt:recta:recti:recto:redan:reddy:redds:reded:redes:redia:redid:redye:redig:redip:redly:redos:redox:redry:redub:redue:redug:redux:reeds:reefy:reefs:reeky:reeks:reels:reese:reesk:reest:reeve:refan:refed:refel:reffo:refix:refly:refry:regel:reges:reget:regga:regia:regie:regin:regle:regma:regna:regur:rehem:rehid:rehoe:reice:reich:reify:reifs:reina:reink:reins:reist:reive:rejig:rekey:relap:reles:relet:relig:relit:relot:reman:remap:remen:remet:remex:remix:remop:remue:remus:renay:rends:rendu:reneg:renes:renet:renga:renig:renin:renky:renne:rente:rents:reoil:reown:repad:repas:repeg:repen:repew:repic:repin:repot:repps:repry:repro:reran:reree:rerig:rerob:rerow:rerub:resay:resat:resaw:resee:resew:resex:resid:resit:resow:resty:restr:rests:resue:resun:resup:retag:retal:retan:retar:retax:retem:rethe:retia:retie:retin:retip:reuel:reune:revay:rever:revet:revie:rewan:rewax:rewed:rewet:rewin:rewon:rexen:rexes:rfree:rhamn:rheae:rheas:rheda:rheen:rheic:rhein:rhema:rheme:rheum:rhila:rhymy:rhina:rhine:rhyta:rhoda:rhoeo:rhomb:rhumb:rials:riant:riata:ribat:rybat:ribby:ribes:riced:ricey:ricer:rices:riche:richt:ricin:ricky:ricks:riden:ryder:rides:ridgy:riels:rifer:riffi:riffs:rifty:rifts:rigel:rigol:riyal:ryked:rykes:riled:riley:riles:rille:rilly:rills:rimal:rimas:rimed:rimer:rimes:rimpi:rinch:rinde:rindy:rinds:rynds:ringe:ringy:rings:rinka:rinks:riots:ryots:ripal:riped:ripes:ripup:rises:rishi:risks:risqu:risus:rites:rithe:ritsu:ritus:ritzy:rived:rivel:riven:rives:rizar:roads:roams:roans:roars:robed:rober:robes:roble:robur:roche:rocks:rocta:rodge:rogan:roguy:rohan:rohob:rohun:royet:roily:roils:royou:roist:rojak:rokee:rokey:roker:roleo:roles:rolfe:rollo:rolls:romal:roman:romeo:romic:rompy:romps:rompu:ronco:ronde:rondo:ronga:ronin:ronni:roods:rooed:roofy:roofs:rooky:rooks:rooms:roosa:roose:rooti:rooty:roots:roove:roped:ropey:roper:ropes:roque:roral:roric:rorid:rorty:rosal:rosed:rosel:roses:roset:roshi:rosin:rotal:rotan:rotas:rotch:roter:rotes:rotge:rotls:rotos:rotse:rotta:rotte:rouen:roues:rougy:rouky:roupy:roups:roust:routh:routs:roved:roven:roves:rovet:rowan:rowed:rowel:rowen:rowet:rowte:rowth:rowty:roxie:rozum:ruach:ruana:rubby:rubes:rubia:rubin:ruble:rubor:rubus:ruche:rucky:rucks:rudas:rudds:rudge:ruely:ruers:ruffe:ruffs:rufus:rugae:rugal:ruggy:ruing:ruins:ruled:rules:rumal:ruman:rumbo:rumen:rumex:rumly:rummy:rumpy:rumps:runby:runch:rundi:runed:runer:runes:rungs:runic:runny:runsy:runty:runts:rupia:rupie:ruses:rushy:rusin:rusky:rusks:rusma:rusot:russe:rusts:rutch:ruths:rutic:rutyl:rutin:rutty:ruvid:sabal:saban:sabby:sabed:saber:sabes:sabia:sabik:sabin:sabir:sable:sably:sabot:sabra:sabre:sabzi:sacae:sacks:sacra:sacre:sacry:sacro:sades:sadhe:sadhu:sadic:sadie:sadis:saeta:safar:safen:safes:sagai:sagan:sagas:sager:sages:saggy:sagos:sagra:sagum:sahib:sahme:sayal:saice:saidi:saids:sayee:sayer:saify:saiga:saiid:sayid:saily:sails:saimy:sains:saiph:sairy:sayst:saite:saith:saiva:sajou:sakai:sakel:saker:sakes:sakha:sakis:sakti:salay:salal:salar:salat:salem:salep:sales:salet:salic:salix:salle:salma:salmi:salmo:salol:salpa:salps:salse:salta:salts:salud:salue:salus:salva:salvy:samaj:samal:saman:samas:samba:sambo:samek:samel:samen:samir:sammy:samoa:sampi:samps:sanai:sancy:sanct:sands:saned:sanes:sanga:sangh:sangu:sanit:sanka:sansi:santa:santy:santo:sapan:sapek:sapid:sapin:sapit:saple:sapor:saqib:saraf:sarah:saran:sards:saree:sarge:sargo:sarif:sarin:sarip:saris:sarky:sarks:sarna:sarod:saron:saros:sarpo:sarra:sarsa:sarsi:saruk:sarum:sarus:sasan:sasin:sasse:satai:satan:sated:satem:sates:satis:sauba:sauch:saudi:saugh:sauld:sauls:sault:saunt:saura:saury:sauty:sauve:saved:savey:saver:saves:savin:sawah:sawan:sawed:sawer:sawny:saxes:saxon:sazen:scabs:scads:scaff:scags:scala:scalf:scall:scalt:scalx:scalz:scams:scans:scape:scarn:scarp:scars:scart:scase:scats:scatt:scaul:scaum:scaup:scaur:scaut:scawd:scawl:sceat:scelp:scena:scend:schav:schiz:schmo:schuh:schul:schwa:scian:scyld:scind:sciot:scyth:sclat:sclav:sclaw:scler:sclim:scoad:scobs:scoke:scolb:scomm:scoon:scoot:scopa:scops:scote:scots:scott:scouk:scoup:scove:scovy:scows:scrab:scrae:scrag:scray:scran:scrat:scraw:scrim:scrin:scrip:scrit:scrob:scrod:scrog:scroo:scrow:scruf:scudi:scudo:scuds:scuff:scuft:sculk:scull:sculp:scult:scums:scups:scurf:scuse:scuta:scute:scuts:sdump:sealy:seals:seamy:seams:seary:sears:seats:seave:seavy:sebat:sebum:secco:secno:secos:secre:sects:secus:sedat:seder:sedge:sedgy:sedum:seech:seeds:seege:seeks:seely:seels:seems:seenu:seepy:seeps:seers:segar:seggy:segni:segno:segol:segos:segou:sehyo:seige:seine:seise:seism:seity:sekar:seker:sekos:selah:selfs:sella:selle:selli:selly:sells:selva:semee:semel:semes:semic:semih:semis:senal:senam:sence:senci:sends:senex:sengi:senit:senna:senor:sensa:senso:sensu:senti:sents:senvy:senza:seora:seoul:sepad:sepal:sepic:sepoy:seppa:septa:septi:septs:seqed:sequa:seqwl:serab:serac:serai:seral:serau:seraw:sered:sereh:serer:seres:serfs:serge:sergt:seric:serin:serio:sermo:seron:serow:serra:serry:serta:serut:servo:sesia:sesma:sessa:sesti:setae:setal:seton:seugh:sevum:sewan:sewar:sewed:sewen:sewin:sexed:sexes:sexly:sexto:sexts:sfoot:sfree:shado:shads:shags:shahi:shahs:shays:shaka:shako:shaku:shaly:shama:shams:shane:shang:shant:shapy:shaps:shari:sharn:shaul:shaup:shawy:shawm:shawn:shaws:sheaf:sheal:shean:sheas:sheat:sheds:shedu:sheel:shela:sheld:shema:shemu:shend:sheng:shent:sheol:sherd:sheth:sheva:shewa:shewn:shews:shiah:shiai:shyam:shice:shick:shide:shiel:shier:shyer:shies:shiko:shilf:shilh:shily:shill:shims:shina:shins:ships:shipt:shirl:shirr:shish:shisn:shist:shita:shits:shiva:shive:shivy:shivs:shlep:shluh:shoad:shoat:shode:shoed:shoer:shoes:shogi:shogs:shoya:shoyu:shoji:shojo:shola:shole:shona:shood:shooi:shool:shoon:shoop:shoor:shoos:shope:shops:shorl:shote:shots:shott:showd:shows:shrab:shraf:shrag:shram:shrap:shred:shree:shrip:shris:shrog:shuba:shuff:shuln:shuls:shune:shuns:shure:shurf:shute:shuts:siafu:sials:sibby:sibbs:sibyl:sybil:sybow:sicca:sycee:sicel:sicer:sices:syces:sicht:sicks:sicle:sycon:sided:sider:sides:sidhe:sidia:sidle:sidth:siena:siest:sieur:sieva:sievy:sifac:syftn:sifts:sighs:sigil:sigla:signa:signs:sikar:siker:sikes:sykes:siket:sikhs:sikra:silas:silds:silen:silex:sylid:silyl:silks:sills:silos:sylph:silty:silts:silva:sylva:simal:simar:simas:simba:simia:simon:simps:simul:sinae:sinal:synch:syncs:sines:singh:sings:sinhs:sinic:sinky:sinks:sinon:synop:sinto:sintu:sinus:sioux:siped:siper:sipes:sipid:sippy:sired:siree:syren:sires:sirex:syria:sirih:siris:sirki:sirky:syrma:siroc:sirop:siros:sirra:sirup:syrus:sisal:sisel:sises:sysin:sissu:sitao:sitar:sitch:sited:sites:sithe:sitio:sitka:sitta:situp:situs:siums:siusi:sivan:siver:siwan:sixer:sixes:sixmo:sixte:sizal:sizar:sized:sizer:sizes:sjaak:skaff:skags:skail:skair:skald:skart:skats:skean:skeat:skeed:skeeg:skeel:skeen:skeer:skees:skeet:skegs:skeif:skein:skelf:skell:skelp:skemp:skene:skeps:skere:skers:skete:skewy:skewl:skews:skice:skidi:skids:skied:skyed:skiey:skyey:skies:skift:skiis:skime:skimo:skims:skink:skins:skint:skips:skyre:skirl:skirp:skirr:skite:skyte:skits:skive:skivy:skiwy:skoal:skoot:skout:skuas:skulp:skuse:slabs:slade:slags:slays:slait:slake:slaky:slamp:slams:slane:slank:slape:slaps:slare:slart:slask:slath:slaty:slats:slaum:slave:slavi:slavs:slaws:sleck:sleds:sleer:sleys:slent:slete:slews:slich:slier:slyer:slily:slims:sline:slipe:slype:slips:slipt:slirt:slish:slite:slits:slive:sloan:sloat:slobs:slock:sloes:slogs:sloid:sloyd:slojd:sloka:sloke:slone:slonk:sloom:sloot:slopy:slops:slorp:slote:slots:slour:slows:slubs:slued:sluer:slues:sluff:slugs:sluig:sluit:slums:slurb:slurs:sluts:smaik:smalm:smalt:smarm:smaze:smeek:smeer:smerk:smeth:smews:smich:smift:smily:smyth:smogs:smoko:smolt:smook:smoos:smoot:smore:smous:smout:smrgs:smurr:smuse:smush:smuts:snaff:snafu:snags:snape:snapy:snaps:snary:snark:snash:snast:snath:snaws:snead:sneap:sneck:sneds:snell:snerp:snibs:snick:snyed:snies:snyes:snift:snigs:snipy:snips:snirl:snirt:snite:snits:snitz:snivy:snobs:snock:snoek:snoga:snoke:snood:snook:snool:snoot:snork:snots:snowk:snowl:snows:snubs:snugs:snurl:snurp:snurt:soaky:soaks:soapi:soaps:soary:soars:soave:sobby:socht:socii:socky:socko:socks:socle:sodas:soddy:sodic:sodio:sodom:sofar:sofas:sofer:sofia:softa:softy:softs:soger:soget:soyas:soign:soily:soils:soyot:sojas:soken:sokes:solay:solan:soldi:soldo:solea:soled:solen:soler:soles:solfa:solio:solod:solon:solos:solum:solus:somal:somas:somet:somma:somne:soncy:sonde:sones:songy:songo:songs:sonja:sonly:sonny:sonsy:sooey:sooke:sooky:soony:soord:soots:sophy:sophs:sopor:soppy:soral:soras:sorbs:sorda:sordo:sords:soree:sorel:sorer:sores:sorex:sorgo:sorns:sorra:sorty:sorts:sorus:sorva:sosia:sosie:soter:sotho:soths:sotie:sotik:sotol:sough:souly:souls:soulx:soulz:soupy:soups:sourd:soury:sours:souse:sowan:sowar:sowed:sowel:sowle:sowse:sowte:sozin:sozly:spaad:spacy:spack:spado:spaed:spaer:spaes:spahi:spaid:spaik:spail:spain:spair:spays:spait:spake:spald:spale:spall:spalt:spane:spang:spann:spans:spary:sparm:spars:spart:spass:spate:spath:spats:spave:spawl:speal:spean:spece:specs:spect:speel:speen:speer:speil:speir:spekt:spelk:speos:spere:spete:spewy:spews:sphex:spial:spica:spick:spics:spier:spyer:spies:spiff:spiks:spile:spina:spink:spins:spira:spiry:spiro:spirt:spise:spiss:spits:spitz:spivs:splad:splay:splet:spock:spode:spoky:spole:spong:spoom:spoor:spoot:sposh:spots:sprad:sprag:sprat:spret:sprew:sprit:sprod:sprot:sprue:sprug:spuds:spued:spues:spuke:spume:spumy:spung:spurl:spurs:sputa:spute:squab:squam:squaw:squeg:squet:squid:squin:squit:squiz:sruti:ssing:ssort:sstor:staab:stabs:stacc:stacy:stade:stagy:stags:staia:staig:stail:staio:stays:stane:stang:staph:stary:starn:starr:stars:starw:stats:stauk:staun:staup:stawn:stchi:stean:stech:steek:steem:steen:stegh:steid:stela:stele:stell:stema:stems:stend:steng:steno:stent:steps:stept:stere:steri:sterk:stero:stert:stets:steve:stewy:stews:styan:styca:stich:stied:styed:sties:styes:stife:stilb:stile:styli:stylo:stime:stimy:stymy:stine:stion:stipa:stipe:stipo:stire:stirk:stirp:stirs:stite:stith:stive:stivy:stoae:stoai:stoas:stoat:stobs:stoep:stoff:stoga:stogy:stoit:stola:stold:stoma:stond:stong:stonk:stoof:stook:stoon:stoot:stopa:stope:stops:stopt:stosh:stoss:stott:stoun:stoup:stour:stowp:stows:strad:strae:strag:stram:stree:strey:strep:stret:strew:stria:strid:strig:strit:strix:stroy:strom:strop:strow:strub:strue:strum:struv:stubb:stube:stubs:stude:studs:stull:stulm:stums:stuns:stupa:stupe:stupp:sturk:sturt:stuss:suade:suant:subah:subas:subch:suber:subet:subra:subst:succi:sucks:sucre:sudan:suddy:sudds:sudes:sudic:sudor:sudra:sudsy:suede:suent:suers:suety:suets:sueve:suevi:sugan:sugat:sughs:sugih:sugis:suina:suine:suint:suyog:suist:suity:suits:sukey:sulci:sulea:sulfa:sulfo:sulka:sulks:sulla:sumak:sumen:summa:sumos:sumph:sumps:sumpt:sunil:sunna:sunni:sunns:sunup:suomi:supai:supes:suppl:supra:supvr:surah:sural:suras:surat:surds:sured:sures:surfy:surfs:surgy:surya:surma:surra:susan:susie:sussy:susso:sutor:sutra:sutta:suzan:svelt:swabs:swack:swage:swags:swail:swain:sways:swale:swamy:swang:swank:swans:swape:swaps:sward:sware:swarf:swart:swati:swats:swazi:sweal:swede:sweer:swego:swelp:swelt:swerd:swick:swigs:swile:swimy:swims:swink:swipe:swipy:swird:swire:swiss:swith:swive:swizz:swobs:swoln:swonk:swops:swosh:swots:swoun:swure:taata:tabac:tabel:taber:tabes:tabet:tabic:tabid:tabis:tabla:tabog:tabor:tabus:tabut:tacan:tacca:taces:tacet:tache:tachi:tachs:tacks:tacos:tacso:tacts:taels:tafia:tagal:tagel:taggy:tagua:tagus:tahar:tahil:tahin:tahrs:tahua:taich:tayer:taiga:tayir:taily:tails:taino:tains:taipi:taipo:tayra:tairn:taise:taish:tajes:tajik:takao:takar:taked:takes:takin:takyr:talak:talao:talar:talas:talck:talcs:taled:taler:tales:talio:talis:talky:talks:talli:talma:talpa:taluk:talus:tamal:tamas:tambo:tamed:tames:tamil:tamis:tammy:tampa:tamps:tamul:tamus:tanak:tanan:tandy:tanga:tangi:tangs:tanha:tania:tanya:tanka:tanks:tanna:tanny:tanoa:tansy:tanti:tanto:tanzy:tapas:taped:tapen:tapes:tapet:tapia:tapis:tapit:tapoa:tappa:tapul:taqua:taraf:tarai:tarau:tarde:tardo:tarea:tared:tareq:tares:tarfa:targe:tarie:tarin:tarmi:tarns:taroc:tarok:taros:tarps:tarre:tarri:tarry:tarse:tarsi:tarte:tarts:tarve:tasco:tasks:tasse:tatar:tater:tates:tatie:tatoo:tatou:tatta:taube:taula:tauli:taupe:taupo:tauri:tauts:taver:tavoy:tawed:tawer:tawgi:tawie:tawpi:tawpy:tawse:taxed:taxer:taxes:taxin:taxir:taxis:taxon:taxor:taxus:tazia:tazza:tazze:tcawi:tchai:tchwi:teaey:teaer:teaks:teals:teams:tears:teart:teasy:teaty:teats:teave:teaze:tebet:techy:tecla:tecon:tecta:tecum:tedge:teems:teeny:teens:teest:teety:teffs:tegua:tehee:teian:teiid:teind:teise:tejon:tekya:tekke:telae:telar:teleg:telei:teles:telex:telia:telic:telyn:telly:tells:tellt:teloi:telos:teman:tembe:tembu:temin:temne:tempe:tempi:temps:tempt:temse:tenai:tench:tendo:tends:tenez:tengu:tenia:tenio:tenla:tenne:tenno:tennu:tenon:tenso:tenty:tents:tenue:tepal:tepas:tepor:terai:terap:teras:terce:terek:teres:tereu:terga:terma:terms:terna:terne:terns:terre:terri:terry:terzo:tesla:testa:teste:tests:tetch:tetel:teths:teton:tetra:tetty:tetum:teuch:teugh:tewed:tewel:tewer:tewit:tewly:texan:texas:texts:thack:thais:thala:thana:thane:tharf:tharm:thatd:thatn:thats:thave:thawy:thawn:thaws:theah:theat:theca:theek:theer:theet:thegn:theyd:thein:thema:thens:theol:theor:theos:theow:therm:thete:thewy:thews:thilk:thill:thymi:thymy:thyms:thine:thins:thiol:thirl:thirt:thisn:thoft:thoke:thole:tholi:thone:thoom:thore:thoro:thorp:thort:thous:thowt:thram:thrap:thraw:thrax:thrip:throe:throu:thruv:thuan:thuds:thugs:thuya:thuja:thule:thulr:thund:thung:thuoc:thurl:thurm:thurt:tiang:tibby:tibbu:tibey:tiber:tibet:tical:ticca:ticer:tyche:ticky:ticks:ticul:tiddy:tided:tides:tydie:tyees:tiens:tiers:tiffy:tiffs:tigon:tigre:tigua:tyigh:tyken:tikes:tykes:tikis:tikka:tikor:tikur:tilak:tilda:tiled:tiler:tyler:tiles:tilia:tilly:tills:tilth:tilty:tilts:tylus:timar:timbe:timbo:timed:times:timet:timne:timon:timor:tinct:tinea:tined:tyned:tines:tynes:tinge:tingi:tings:tinne:tinni:tinny:tinsy:tinta:tinty:tints:typal:typed:typey:typer:types:typha:typic:tipis:tipit:tiple:typos:tippy:typps:tipup:tiraz:tired:tyred:tirer:tires:tyres:tirls:tirma:tiros:tyros:tirve:tisar:tisic:tissu:tyste:titar:titer:tythe:titis:titre:titty:titus:tiver:tiwaz:tizzy:tlaco:tmema:toady:toads:todea:todus:toffy:toffs:tofts:tofus:togae:togas:toged:togue:toher:toyed:toyer:toile:toils:toyon:toyos:toise:toist:toity:toits:tokay:toked:tokes:tokyo:tolan:tolas:toldo:toled:toles:tolyl:tolly:tolls:tolus:toman:tomas:tombe:tombs:tomes:tomia:tomin:tommy:tondi:tondo:toned:toner:tones:tongs:tonka:tonna:tonne:tonto:tonus:tools:toona:toons:toosh:toots:topas:topau:toped:topee:toper:topes:tophe:tophi:tophs:topia:topis:topog:topoi:topos:toppy:topsy:topsl:toque:torah:toral:toran:toras:torcs:tored:tores:toret:toric:torii:torma:toros:torse:torsi:torsk:torta:torte:torts:torve:tosca:toshy:tossy:toted:toter:totes:totty:totum:tould:tourn:tours:tourt:touse:tousy:toust:touts:tovah:tovar:tovet:towai:towan:towed:towie:towny:towns:towsy:toxon:tozee:tozer:trabu:tracy:trady:tragi:traik:trays:trama:trame:trams:trank:trans:trant:trapa:traps:trapt:trasy:trass:trave:treas:treed:treey:treen:trees:trefa:treys:treks:trema:trent:tress:trest:trets:trews:triac:trias:trica:trier:tries:trifa:triga:trigo:trigs:trike:trill:tryma:trims:tryms:trina:trine:trink:triol:trior:trios:trypa:tripy:tripl:trips:tript:trist:trixy:troad:troak:troat:troca:troch:trock:troco:trode:troft:trogs:troic:trois:troys:troke:tromp:trona:tronc:trone:tronk:troot:trooz:troth:trots:troue:trouv:trows:trubu:trudy:trued:trues:truff:trull:trush:tsade:tsadi:tsars:tsere:tsine:tsked:tsuba:tsubo:tsuga:tsuma:tuant:tuarn:tuart:tuath:tubae:tubar:tubas:tubba:tubby:tubed:tubes:tubig:tubik:tucky:tucks:tucum:tudel:tudor:tufan:tufas:tuffs:tufty:tufts:tugui:tuyer:tuism:tukra:tules:tulsa:tulsi:tumid:tumli:tummy:tumps:tunal:tunas:tunca:tuned:tuner:tunes:tunga:tungo:tungs:tunis:tunka:tunna:tunny:tupek:tupik:tuple:tuque:turco:turds:turfy:turfs:turgy:turio:turki:turks:turma:turns:turps:turse:turus:turvy:tushy:tushs:tusky:tusks:tutee:tutin:tutly:tutti:tutty:tutto:tutus:tuxes:tuzla:twaes:twain:twait:twale:twalt:twana:twank:twant:twats:tweag:tweeg:tweel:tween:tweil:twere:twerp:twick:twier:twyer:twigs:twill:twilt:twiny:twink:twins:twint:twire:twirk:twirp:twite:twits:twoes:tzaam:tzars:uayeb:ualis:uaupe:uchee:uckia:udasi:udell:udish:ugali:uglis:ugric:uhlan:uhllo:uhuru:uigur:uinal:uinta:ukase:ulama:ulans:ulcus:ulema:uller:ulmic:ulmin:ulmus:ulnad:ulnae:ulnar:ulnas:uloid:ulpan:uluhi:ululu:ulvan:ulvas:umaua:umbel:umber:umble:umbos:umbre:umest:umiac:umiak:umiaq:umiri:umist:ummps:umped:umpty:umset:unact:unadd:unais:unami:unamo:unapt:unary:unark:unarm:unaus:unbag:unbay:unbar:unbed:unbet:unbid:unbit:unbog:unboy:unbow:unbox:unbud:uncap:uncia:uncoy:uncos:uncow:uncus:undam:undee:unden:undye:undig:undim:undog:undon:undry:undub:undug:uneye:unfar:unfew:unfix:unfur:ungag:unget:ungka:ungod:ungot:ungum:unhad:unhap:unhat:unhex:unhid:unhip:unhit:unhot:uniat:unice:uninn:unism:unist:units:unius:unjam:unked:unkey:unken:unket:unkid:unkin:unlay:unlap:unlaw:unlax:unled:unlet:unlid:unlie:unmad:unman:unmew:unmix:unnet:unnew:unode:unoil:unold:unona:unorn:unown:unpay:unpeg:unpen:unpin:unpot:unput:unray:unram:unred:unrid:unrig:unrip:unrow:unrra:unrun:unsad:unsay:unsee:unsew:unsex:unshy:unsin:unsly:unson:unsty:unsun:untap:untar:untax:untin:untop:unurn:unuse:unwan:unwax:unweb:unwet:unwig:unwit:unwon:unwry:unzen:upaya:uparm:upbay:upbar:upbid:upbye:upbuy:upcry:upcut:updos:updry:upeat:upend:upfly:upget:upher:upjet:uplay:upleg:uplit:upmix:upped:uppop:uprid:uprip:uprun:upsey:upsit:upsun:upsup:uptie:upupa:upway:upwax:uraei:urali:urare:urari:urase:urate:urbic:urdee:ureal:ureas:uredo:ureic:ureid:urena:urent:urged:urger:urges:uriah:urial:urian:uriel:urite:urlar:urled:urman:urnae:urnal:ursae:ursal:ursid:urson:ursuk:ursus:urubu:urucu:urutu:usant:usara:usent:users:ushak:ushas:usine:uskok:usnea:usnic:usnin:usque:uster:usure:usury:utchy:utees:utend:uteri:utero:uther:utick:utrum:utsuk:uvala:uvate:uveal:uveas:uviol:uvito:uvres:uvrou:uvula:uvver:uzara:uzbak:uzbeg:uzbek:vache:vacoa:vacua:vacuo:vadim:vadis:vagal:vagas:vagus:vails:vaire:vairy:vairs:vajra:vakia:vakil:vales:valew:valyl:valmy:valsa:valse:valva:vamos:vamps:vance:vanda:vaned:vanes:vangs:vanir:vappa:varan:varas:varda:vardy:varec:varia:vario:varix:varna:varus:varve:vasal:vases:vasty:vasts:vates:vatic:vaudy:vealy:veals:vedda:vedet:vedic:vedro:veena:veeps:veery:veers:vefry:vegas:vehme:veily:veils:veiny:veins:vejoz:velal:velar:velds:veldt:velic:velte:velum:venae:venal:vends:vened:venge:venie:venin:venta:vents:venus:vepse:veray:verby:verbs:verde:verdi:verey:verek:vergi:verpa:verre:verry:versa:verst:verty:verts:vertu:verus:vespa:vesta:vests:vetch:veter:vetus:veuve:vexed:vexer:vexes:vexil:viage:vials:viand:vyase:vibes:vibex:vibix:viced:vices:vichy:vicia:vicki:vicky:vicua:vicus:vidya:vidry:vidua:viers:viewy:views:vifda:vigas:vigia:vijay:vijao:viler:ville:villi:vills:vimen:vimpa:vinal:vinas:vinca:vince:vinci:vinea:vined:viner:vines:vinet:vinew:vingt:vinic:vinny:vinod:vinos:vinta:vinum:viols:vireo:vires:virga:virge:virgo:virid:virls:viron:virtu:visas:vised:vises:visie:visne:vison:visto:vitae:vitis:vitra:vitry:vitro:vitta:viuva:vivas:vivat:vivax:vivda:vivek:viver:vives:vivos:vivre:vizir:vizor:vizzy:vlach:vobis:vocab:vocat:voces:voder:vodum:vodun:vogie:vogul:voids:voile:volar:voled:voles:volet:volga:volow:volta:volte:volti:volto:volts:volva:vomer:voraz:votal:voted:votes:vouge:vouli:voust:vowed:vower:vraic:vroom:vrouw:vrows:vucom:vuggy:vuggs:vughs:vulgo:vulva:waapa:waasi:wabby:wacke:wacks:waddy:waded:wader:wades:wadge:wadis:wadna:waefu:waffs:wafty:wafts:waged:wages:waget:wagga:waggy:wahoo:wayao:waifs:waily:wails:wayne:wains:waird:wairs:waise:waits:wakan:wakas:waked:waken:waker:wakes:wakhi:wakif:wakon:waled:waler:wales:walks:walla:wally:walls:walsh:walth:walty:wamel:wames:wamus:wandy:wands:waned:waney:wanes:wanga:wanky:wanle:wanly:wanna:wanny:wanty:wants:wanze:wappo:warch:wards:wared:wares:warks:warly:warms:warns:warnt:warps:warri:warse:warst:warth:warts:warua:warve:wasat:wasco:wasel:washy:washo:wasir:wasnt:waspy:wasps:wasty:wasts:watap:watts:wauch:waugh:wauks:wauls:wauns:waura:wauve:waved:wavey:waves:wawah:wawls:waxed:waxer:waxes:wazir:weaky:weald:weals:weans:wears:webby:weber:wecht:wedel:wedgy:weeda:weeds:weeks:weeny:weens:weent:weepy:weeps:weesh:weest:weety:weets:weeze:wefty:wefts:wehee:weirs:weism:wekas:wekau:welds:welly:wells:welts:wemmy:wench:wende:wendi:wendy:wends:wenny:weren:wersh:weste:westy:wests:wetly:wevet:wezen:whaly:whalm:whalp:whame:whamp:whams:whand:whang:whank:whaps:whare:wharl:wharp:whart:whase:whata:whatd:whats:whauk:whaup:whaur:wheal:wheam:wheem:wheen:wheep:wheer:wheft:whein:wheys:wheki:whelk:whelm:whens:whets:whewl:whews:whewt:whiba:whick:whids:whift:whigs:whilk:whill:whils:whims:whing:whins:whips:whipt:whirr:whirs:whish:whisp:whiss:whist:whity:whits:whizz:wholl:whomp:whone:whoof:whoot:whops:whore:whory:whorl:whort:whoso:whsle:whuff:whulk:whump:whush:whute:wicca:wicht:wicky:wicks:widdy:wides:wierd:wifed:wifes:wifie:wigan:wiggy:wiyat:wiyot:wilco:wilds:wiled:wyled:wiles:wyles:wilga:willi:wills:wilts:winds:wynds:windz:wined:winey:winer:wines:wingy:wings:winks:winly:winna:wynne:wynns:winos:winze:wiped:wiper:wipes:wired:wirer:wires:wiros:wirra:wised:wisen:wises:wisha:wishy:wisht:wyson:wisps:wisse:wiste:wysty:wists:witan:wited:wyted:witen:wites:wytes:withe:withy:wived:wiver:wyver:wives:wizen:wizes:wlity:wloka:woady:woads:woald:wocas:woden:wodge:wodgy:woful:wogul:woibe:wokas:woldy:wolds:wolfs:wolly:wolof:wolve:womby:wombs:wonga:wonky:wonna:wonts:woods:wooed:woofy:woofs:woold:woolf:wools:woomp:woons:woops:woosh:wootz:wopsy:words:worky:works:wormy:worms:worts:wouch:wough:wowed:wramp:wrang:wraps:wrapt:wrast:wrawl:wreat:wrens:wrick:wride:wried:wrier:wryer:wries:writh:writs:wrive:wroke:wroot:wroth:wudge:wunna:wurly:wurst:wuzzy:xebec:xenia:xenic:xenyl:xenon:xenos:xeres:xeric:xerox:xerus:xicak:xylan:xylem:xylia:xylic:xylyl:xylol:xylon:xinca:xyrid:xyris:xysti:xysts:xoana:xurel:xviii:xxiii:zabra:zabti:zayat:zayin:zaire:zakah:zakat:zaman:zambo:zamia:zande:zante:zanza:zanze:zapas:zapus:zaque:zarfs:zaxes:zazen:zeals:zebec:zebub:zebus:zeins:zeism:zeiss:zeist:zemmi:zemni:zendo:zerda:zerma:zeros:zests:zetas:zhmud:ziara:zibet:ziega:ziffs:zygal:zigan:zygon:zihar:zilch:zilla:zills:zimbi:zymes:zymic:zymin:zimme:zimmi:zimmy:zincy:zinco:zincs:zineb:zingy:zings:zinke:zinky:zippy:zirai:zirak:ziram:zitis:zizel:zizia:zizit:zlote:zloty:zmudz:zoaea:zocco:zoeae:zoeal:zoeas:zogan:zohak:zoism:zoist:zokor:zolle:zombi:zonar:zonda:zoned:zoner:zones:zonic:zonta:zooid:zooks:zooms:zoona:zoons:zooty:zoque:zoril:zoris:zorro:zosma:zowie:zucco:zudda:zulus:zunis:qajaq:ayaya:pzazz:zhuzh:queyu:yukky:kukus:quouk:iiwis:zezes:kuzus:riqqs:jeeze:jukus:susus:wizzo:aggag:zuzim:abaya:mezze:fuffs:jaffa:kibbi:phizz:piqui:scuzz:azygy:sukuk:tuktu:yuzus:bizzy:nonno:pfftt:birzz:faffs:hyphy:ozzie:zexes:afizz:hukou:jeffs:maqam:pyuff:wawas:zoppo:bizzo:kirri:lezzy:ryijy:yobby:akkas:bezzy:glugg:guggl:gyppy:huhus:lollo:nazzy:nunus:queek:ryiji:spazz:wushu:yeeek:bikky:exeme:gynny:jooks:oojah:popup:sezes:skyfs:waqfs:wikis:yoyos:bappu:bubus:exeem:koiwi:lazzi:nanna:skogs:wudus:wuffs:yuppy:zanja:aflaj:ajwan:annan:bubbe:hogoh:hoogo:hudud:nunny:ozeki:puppa:queyn:quoys:yayas:yippy:zhomo:zhush:akoja:asada:dykey:fifis:hikoi:jetee:jitis:jokol:jollo:khazi:koffs:lezzo:mokky:mumus:oppos:puttu:quaws:queem:quoll:skegg:skoff:wauff:wirri:wowee:yonny:zouks:bibis:ekkas:gabba:jafas:kikay:kyaks:lazzo:leeze:mivvy:mutum:muvva:nonna:puffa:quonk:sojus:viffs:yabba:yoppo:agogo:ajupa:akara:grrrl:haham:hooha:ibrik:jewie:kojis:lills:luvvy:mezza:phooo:pupus:quayd:skugs:skyrs:sooks:vozhd:zacks:zamak:zuppa:abjad:accha:azuki:effed:fixie:goodo:janns:jasps:kaika:kauru:kawau:kutus:lezza:mazak:mimis:nonan:obbos:pavvy:peepe:queck:quoif:quork:skeez:skofs:wazoo:wuxia:yohah:zippo:accas:didis:dukun:dzhos:emmys:hijab:jessy:jomos:mukim:mzees:nuffs:pequi:phooh:pipis:pukus:sijos:sists:skeds:sowff:upful:veves:wojus:zonks:zoomy:aapas:azyms:bhaji:cuffo:dadah:dukka:googs:jaaps:jagas:jhala:jolls:kacks:kazis:kerky:meffs:memes:mixis:mmkay:naffs:pakka:pirri:puuko:vodou:voulu:wokka:yadda:yesks:yexes:zikrs:zooey:addas:adzed:akoya:bwazi:falaj:gazoo:gobbo:goffs:hygge:jambu:jocky:kajal:khaph:kokas:konks:makaf:mamak:mazas:mekka:mezes:momos:niqab:nyaff:ooaas:orzos:oseys:reeze:skaws:unkut:weeke:yummo:zimbs:zoppa:zowee:akker:audax:biffo:cezve:ciggy:dexys:fiqhs:fuddy:jaxie:jocos:juves:kilig:kipps:meeja:nduja:omovs:pooja:poopy:pubby:quops:rakki:ruffy:simis:suses:takky:tithi:upbow:wuddy:xolos:yaass:yexed:yowza:zappy:zobos:bobos:deeve:duded:dufus:effer:gobbi:hahas:hejab:houff:koker:kvell:kwink:mazac:pikis:popos:quank:skens:skosh:sulus:sweys:tyiyn:wawes:xrays:yohay:zamac:zawns:zooea:ammas:appam:bamma:biggs:boppy:coqui:cwtch:dawds:deffo:emoji:fabby:femmy:fixit:fugus:fusks:hoghs:huggy:jakie:kaiks:mundu:muzak:ngana:nyuze:oozie:opihi:pakki:rikka:sinsi:skeos:sowfs:tatts:unsub:wexes:whows:wussy:yacka:yampy:zaida:zitty:zobus:ahuru:assez:bazas:bball:bezes:buppy:exome:fabbo:janny:jawns:kapha:kippa:mebbe:mixie:modom:muruk:mythy:niffs:nisin:nyung:phynx:poofy:pudus:qapik:quabs:queso:quibs:rurus:sadza:scogs:shash:skrik:snebs:sowms:sukhs:sybbe:tomoz:towzy:umami:vakas:vieux:voddy:vutty:wadds:zerks:abjud:alaap:bippy:bivia:briki:cucks:dibbs:diffs:dohyo:doody:dubbo:ebene:filmi:fisks:gummi:hifis:iddah:jeels:jeely:karks:keaki:kheth:kitke:knurr:kobos:ksars:mokos:mumph:offie:ponzu:pujas:quich:quyte:razai:sabji:sekts:shchi:skios:sooms:soops:soyuz:sposo:ugged:wigga:yoofs:zupas:anata:avyze:bambi:boofy:caffs:dowds:fyked:gubba:haffs:haggs:janky:jarks:jitty:judgy:kombi:koori:kwaai:kyudo:makai:munjs:najib:nanua:nouja:nummy:ooses:poovy:punji:quete:quino:quois:sazes:skols:souks:soxes:sukis:ummas:weize:wilja:yukos:zurfs:affly:divis:dooky:favas:fedex:feyly:gojis:hatha:hushy:innit:ishes:jhils:jirds:juvie:kembs:kieve:kliks:krunk:lavvy:lemme:lezes:maggs:majat:mbube:myxos:nakfa:nevvy:nyong:ofuro:ongon:oozle:psyop:pujah:qualy:quran:saags:sayas:scaws:scifi:serrs:sikas:skeev:skets:spaza:spods:squee:stots:sunks:swees:ummah:veggo:vughy:wahay:wasms:zarda:geeky:adaws:aggri:allel:basas:basij:bobak:boutu:cinqs:cooze:dawah:dhaba:doxed:ebook:esnes:ewked:fromm:gungy:guqin:gyoza:innie:irids:jaker:jivey:karzy:kawas:kests:kibbe:knoop:macca:michi:naans:nemns:niffy:opepe:phutu:pikau:poopa:ragga:reiki:scugs:scyes:sechs:slubb:smugs:sowps:spifs:steez:stumm:subby:synds:wagyu:wilis:yokeg:youks:yucko:addra:agidi:bajus:benji:bunjy:cacky:dadla:duked:evegs:feese:gajos:gucky:hasks:jirre:kynds:layby:masas:mofos:mooks:msasa:muntu:neemb:ngaka:nongs:noone:omiai:ooyah:pakua:papad:pyxed:qipao:quena:quorl:robbo:rosso:snabs:sools:steys:sulls:swads:teggs:tikia:vacay:wakfs:wembs:wexed:woopy:wulls:yakow:ydrad:yuked:zamis:zupan:adhan:afanc:arars:attas:boysy:dooks:eejit:ezine:froyo:gowfs:grrls:hakas:happi:hodja:hohed:hythe:igged:jedis:jeune:jings:jinne:jongs:jucos:kadai:kamme:kehua:khoum:kydst:laddu:liwaa:mieux:mihis:mikva:nazar:ngege:noggy:oafos:pakay:pollo:povos:quims:riffy:smees:spaws:speks:spugs:syeds:syphs:talaq:ummed:usens:vaxes:voici:weete:winns:wowse:ydred:yoops:yopos:yukes:aflap:agbas:aiyah:ansas:appts:appuy:bawks:biccy:bidis:boyey:burqa:coxib:cusum:dsobo:eeven:eever:fehme:firni:flamm:gadjo:iddut:idlis:jobes:kalua:katti:knubs:konbu:kranz:lisks:lolog:lolos:maums:meses:minxy:mompe:mvuli:ngoni:njirl:nujol:nurtz:ownio:poofs:ptype:pumpy:quair:rasas:rikwa:rymme:sedes:skank:stogs:sujee:tassa:vacas:waacs:wuses:yandy:yarra:yeves:yokul:zedas:akoia:akses:alata:attap:bacha:bantz:beses:boyly:bykes:comms:deoxy:eiked:euked:evohe:fogos:gadgy:gisms:glugs:hiois:ippon:kaugh:khuds:kybos:laval:lexes:lusks:maddy:maumy:mauzy:mawla:mazar:meums:miltz:modii:nexin:nexts:nkosi:nouny:ojime:ommin:oxeas:pawas:puzta:quats:raffy:rezes:rokos:runup:setts:shwas:sigri:snogs:spads:staws:tawaf:touzy:unban:urupa:wimps:yabas:yitie:zeera:wimpy:abacs:ahigh:aiyoo:baaps:blubs:byded:byked:cesse:desse:dexie:donko:dsomo:ebike:emmas:evhoe:flexi:fyrds:gazar:gings:gugas:hamba:jeera:jiaos:kahal:keeno:kembo:keyer:koros:koses:mahem:mamee:mawps:mindi:mingi:mollo:oleyl:oyama:pipas:putza:rafiq:riggs:sesey:skeef:skody:skroo:snods:steds:tawai:texes:tokos:tratt:vadas:vatha:vatje:wadas:zaidy:zayde:zinos:aduki:advts:aidoi:ajies:akita:apays:aymag:bammy:cobza:cudda:cuzes:ennog:exier:feebs:gesse:glitz:gymps:hykes:imlis:ixnay:jarta:jobed:kapus:kaval:kievs:klett:kuyas:lahal:mozed:mozes:muxed:muxes:nakas:nimbs:nurrs:nying:omdda:opgaf:oxies:pavas:pawks:plexi:poboy:pogos:pooks:qadis:sahab:serks:shaya:sibia:sowls:spags:syens:takht:titin:tizes:tozes:udyog:vampy:voxes:yapps:yeeds:yiked:penne:abaht:aiyee:azurn:baozi:bibes:booai:cumec:dauds:evets:exuls:fusts:gawds:gouks:hakus:hench:howto:hwyls:jaune:kapow:karai:keema:kells:kiasu:kight:linux:marma:maxes:meves:mizes:munja:namak:nebek:newbs:oking:paddo:piccy:pocho:pulus:quies:rarks:regex:rejas:rojis:rukhs:slebs:snees:srsly:suhur:synes:takas:tiyin:typto:umphs:weems:yewen:inbox:abeys:aguna:bayas:bdays:becke:blonx:bonza:capiz:cavas:dappy:dawgs:disas:ditzy:dosas:douks:dowfs:doxes:dukas:elpee:exons:flava:gadje:gawcy:gawps:halwa:hogos:hoxes:imari:intis:jarps:katas:kufis:kunds:leses:memic:mieve:mokus:moobs:moops:nalla:nazes:nikab:noobs:odahs:osars:oxers:papri:peeky:pekau:phish:pizes:psias:qilas:qubit:reede:salas:scoog:seaze:senes:sidas:skool:smurs:sokol:soums:sugos:tavah:titir:towze:vells:volve:yarfa:yonks:zatis:zilas:abbed:bicky:bobas:cawks:ceaze:darzi:doofs:drook:dykon:epene:feyed:gooby:hawms:hizen:hoach:jarul:jatis:jeons:khana:kipah:krewe:kulfi:kurre:kypes:mauka:migma:mobos:mocky:moove:mudim:mugga:nabam:nigga:niopo:nioza:noops:occam:okole:onkus:ooids:othyl:pittu:plotz:qorma:raggs:rakhi:rakia:ridic:rioja:ripps:saddo:sakia:sansa:scurs:sinds:solds:stedd:sypes:sysop:tavas:texta:tozed:tuffe:urbex:vaded:whups:whyda:yaars:yedes:yowsa:zines:afald:aixes:apayd:atigi:avize:binky:boabs:bodoh:bomoh:boogy:boyfs:bukos:chiti:chivs:convo:deevs:desis:dikas:doved:dwams:dweeb:enews:enfix:fests:fonio:gokes:gonks:gopik:gryke:havan:hesps:hokis:hoxed:hully:humfs:husos:jamun:jigot:kohas:kutai:kynde:leccy:macka:majoe:makee:manzo:marms:musos:neefs:nolls:nonis:omees:opzit:otaku:pepon:plups:poohy:poufy:rizas:sabha:saddy:samfu:seppo:snush:sotto:stens:stucs:suids:sumis:vatas:volks:wheek:winky:ylkes:ympes:yomps:alays:awari:bagua:barby:basha:biris:blook:bohos:bunje:caboc:caffe:canns:chava:cowks:dacks:ebena:gazal:girrs:kalas:kangs:karas:khyal:knowd:krump:laggy:leggo:makan:mapou:masus:mauvy:murri:nimps:noncy:noxas:noxes:oggin:ommel:oopsy:peece:peple:pipul:pirai:pomos:pukas:pulut:rawks:reses:sados:sangs:seles:seths:skatt:sobas:spams:spims:sylis:takhi:tawas:veges:vendu:welke:wocks:yests:yirks:yumps:acais:adhoc:adraw:agood:aimag:allus:bewdy:binks:bokeh:boohs:bouks:choof:choss:debud:dholl:doomy:dowps:eevns:fanks:fidus:forza:gamas:ganks:gloop:gulag:gumps:hafta:halsh:hejra:hooty:howbe:ikats:jiver:jotun:jumar:ketes:khafs:kuias:laddy:meved:mvula:nabks:natya:neebs:nimby:nulla:nully:oktas:oligo:ombus:oskin:oulks:paaho:pacai:peevo:risps:ryugi:stims:swits:tawts:teene:towts:tranq:tymps:vezir:vulns:wanks:yorks:zaris:advew:agloo:apsos:aroha:awato:awkin:boxla:ceili:chocs:dadis:dbags:decko:deere:ditts:doobs:dowak:dwaum:exfil:fnarr:forze:fulla:furrs:gamay:gauje:godso:hebes:heyed:imshy:juste:kingy:kipas:kitul:knags:knoud:lacka:luxed:makis:mawns:maxed:meeps:miais:mirin:moloi:mooli:mooni:motza:mutti:nanti:novio:nuevo:nuses:oaked:odums:oflag:okies:pasag:paska:peaze:pekea:piais:pissy:pooay:prook:pukey:purps:quine:ranns:reggo:reked:rosps:rozes:schif:sculs:shans:smaak:tifts:triff:valli:vitex:wases:weamb:wefte:wonks:yeesh:yrivd:detox:anyon:bacco:bamas:boked:bolix:booay:botty:bruvs:bufos:bufty:cheeb:cowps:dered:doeks:dwamy:ferer:garba:goomy:gurks:gypos:hokas:idees:jeats:joled:jonty:jorts:katal:khads:kheer:kutis:kyles:labda:lapje:lazos:linny:liwas:lokum:mecks:mokey:mokis:mowas:mucko:naams:nahal:nawal:nikah:noois:noove:ooped:orixa:owche:paips:pauas:perps:pized:pleep:poeps:proll:pubco:purpy:rakus:rekes:rully:sabos:sease:seifs:staps:stonn:tahas:tetes:towno:tozie:vacui:vanga:womyn:yarrs:yokan:zaide:agals:ammon:assed:asura:ataps:bapus:boygs:breer:buiks:comix:deids:docos:doppe:dwaal:enurn:facta:fillo:fitts:garri:himbo:iches:imbos:jaleo:krays:kwirl:lassi:leaze:meake:mocos:mudif:nadas:newie:oldly:pamby:panni:parps:patka:peghs:pheme:piani:pikul:pisos:plips:poaka:pooey:prowk:reerd:rejon:resus:rusas:segas:seiza:sensi:shirs:skobe:slomo:smirr:smize:snars:socas:spesh:spets:sposa:stans:stush:sucky:sused:swies:syker:tocky:tombo:ulzie:vygie:wacko:washi:weeis:welks:yagna:yarks:ytost:yucas:yufts:actas:adats:adyts:atuas:badam:bafts:baghs:bleys:brers:chynd:coyau:crocs:danks:debes:dorks:egmas:faves:fetts:fikes:firie:flowy:fouds:frorn:ginga:hapas:hoons:hotty:jolie:kaids:koaps:koris:kreef:kuris:kutas:laccy:laxed:laxes:macas:mamil:mazey:meism:meteg:misls:mochi:momie:naats:nanos:neuks:niess:obang:padas:padma:papes:paspy:pouks:poupt:raddi:samfi:semas:sexer:siens:smirs:smits:statu:sunts:swoll:tenny:thawt:touks:urvas:vibey:vinho:zonae:abcee:addin:aigas:baisa:bauks:bawns:boeuf:bokes:buded:chaap:cills:dumbo:emerg:enoki:eughs:fakey:fands:firks:fundy:gamme:geeps:globi:gooly:hevel:holon:howay:jures:kaims:kawed:kindy:korus:lesos:lurex:luxer:maban:mafts:marri:mawrs:mirrs:mooey:napas:nasis:natak:ninta:nokes:nuked:oxmen:pekid:phubs:pirrs:poupe:powis:praps:puzel:rymer:sames:scapa:sicky:soces:styte:sunis:taths:teets:thanx:touze:veney:vlogs:waurs:agita:aidas:aiyoh:arbah:bawrs:bings:braai:bukes:burfi:capex:combi:cooms:craic:dictu:eleet:erevs:feens:fisho:fowth:fungs:goory:gowls:groks:haith:hibas:holos:kades:kents:kipsy:knuts:laarf:laika:lappy:lumbi:mases:mbuga:mikos:milfs:mirrl:molos:moufs:neafe:neche:ondol:origo:ovels:padam:panny:pecke:ponks:pubsy:pully:raddy:rahui:rists:roopy:rosco:rozit:rurps:saims:sants:sklim:souts:tadah:titch:titup:tomme:ubacs:unply:uptak:voxel:warez:waulk:wifty:womas:woxen:adred:baiks:barfi:bolks:breys:dashi:dikey:drere:ekdam:flobs:fundo:ginge:glatt:gnows:gosse:gypes:hinky:hoiks:hoors:iched:igapo:ikans:kaing:katis:kbars:khirs:khors:kilps:ladoo:lilty:lises:lowps:maiks:malas:marra:mbari:mixte:moaky:mythi:nagas:namad:nanto:nmoli:noeme:noshi:nowls:oches:oxine:packy:pahus:penks:pewed:pivos:popia:raads:reorg:roops:rossa:rotto:ryper:saics:seans:senas:sevak:sexor:shiso:sicko:sizel:smowt:tagma:tikas:tocks:tways:ubity:udons:wanta:whamo:wifts:wunga:yatra:yeuch:ylike:abeng:achey:amari:bedes:botos:buyin:bydes:chibs:cided:cohoe:colls:daals:daiko:dinna:dosha:dreys:ebank:elfed:ethne:gambo:glowy:goors:grews:gytes:houfs:indie:jacet:jamon:kandy:kelim:kidge:krabs:kunas:laldy:lavra:lests:lilos:malai:mazet:mechs:mikan:mobee:mooly:moruk:mtepe:mungi:musse:nains:nanty:nowds:omdas:onned:onsen:oonts:oupas:owari:pakul:pells:pilow:plung:preop:revow:rosts:rouks:scody:skyer:smeke:toaze:tocos:todde:todos:tohos:tosas:vants:vauch:venti:wadts:wifey:ycled:yelms:ylids:abeat:agila:aglus:aleye:amlas:bachs:bahus:barca:bowes:capas:cotts:cutto:devos:diyas:dowts:ecigs:ensew:eruvs:faiks:funda:funsy:geasa:geyer:goafs:guimp:gynos:haufs:hefte:herye:hurra:kotch:kubie:lemes:lozen:menes:mihas:mirkn:mitie:mucho:nalas:ngram:norks:noups:odism:omdeh:omuls:outro:panks:persp:plaps:pongs:pooed:potts:powns:reeaf:scowp:shlub:sokah:tasca:tirrs:tooms:toses:tweep:twonk:undos:vegie:wangs:welkt:yeahs:yerds:apage:apgar:archi:blays:burks:chana:chiks:cryer:darga:deshi:doums:dreer:figos:filks:fleek:foids:frabs:garda:glums:gobis:gryce:grypt:gyver:hapus:haugo:hoord:kants:kluge:koura:kreen:kreep:laari:leves:lokey:maiko:melik:mivey:moana:mochs:molys:nairu:nason:nefie:neski:noahs:nrtya:oller:pendu:perfs:phobe:pioys:pises:poalo:podus:polks:puhas:raake:rello:ruchy:sairs:seils:selky:shets:solas:sorbo:subha:syver:takis:tatus:tinks:titas:tomos:tonks:unagi:unsaw:vatus:vegos:veles:vints:vrils:warbs:wongi:wythe:yarta:ymolt:aarti:abius:adoon:aguti:aksed:ancho:atoks:avels:biogs:birze:blatt:blogs:boeps:boink:bools:borgo:bowrs:brize:calpa:celly:chiva:chogs:cives:clows:cobot:cohab:conex:cuspy:dahls:damna:daych:dazer:dooce:dorky:dosai:doups:droog:drows:empts:expat:fakie:fyles:gaths:gitch:glibs:gnapi:gothy:goves:imagy:kideo:kulas:lacky:lassy:marua:maula:mesyl:mifty:miyas:mohua:munds:mungs:mvule:nashi:nempt:nerks:nmols:nowty:paipe:palak:piuma:pizer:posol:pownd:powsy:puyas:raksi:ralli:ryoti:sdayn:shmek:sidha:sista:smick:swayl:tarka:tasso:tichy:torot:treyf:tryke:udals:vapes:vitas:voema:voips:walds:warby:zorse:allee:arbas:arpas:awdls:bomor:briks:budos:burra:caaed:ceroc:chavs:chiko:confs:dahis:dervs:devis:dicts:divos:ducti:dynos:elven:ferms:ficos:fribs:fugis:fugly:funts:gordo:goved:haats:halfs:heame:heles:hings:hoves:huias:impro:klang:lirks:logon:lowns:ludos:madal:makie:mangs:mengs:mitta:moups:namus:nerfs:newed:nrtta:nudgy:nurds:nyams:octli:ouche:paans:pegos:phang:pitot:piyut:plong:probs:pulks:raree:ratas:reems:rieve:ritts:rolly:ronuk:rozet:rumpo:saheb:satay:sauts:splog:tarzy:thebe:vauts:vibed:vrous:weels:wenge:werfs:woose:ycond:alcea:aloos:arnas:awmry:basse:bayts:bitou:cauks:deaws:degus:dimbo:doabs:docht:dools:doona:duett:eensy:emure:fasci:flims:fonda:gaups:grize:hongi:hoved:humas:hydel:kinas:kinda:kipes:knaur:lanks:lapas:litie:lymes:maedi:meiko:mgals:mings:miraa:naeve:naras:nitto:oaker:omdah:oncus:oueds:owies:peake:plavs:plews:pshut:pungo:raiah:rawdy:rawns:renks:retox:roers:roons:salis:scoug:seirs:siles:skelm:spayd:tases:tendu:tryer:tumpy:tunds:twocs:ulmos:upsee:ustad:vades:vaids:volke:wahey:withs:yeads:abeer:berks:bhuna:bodgy:bruck:budis:deawy:deens:diebs:drock:droid:elchi:elmen:gouch:gravs:hangi:homas:hovea:hyles:kanal:kcals:khets:klaps:lokes:lowts:ludic:maaed:mauds:milds:mongs:mosto:murgi:naiks:nante:nasho:ngati:niner:olehs:oumas:outta:parki:pedos:peyse:pirks:pitsu:piums:pligs:plowt:pluds:ponor:powin:proby:prora:ranga:razet:rolfs:rorts:roufs:sagar:saola:semie:shtik:smorg:subak:syboe:syped:talls:tanas:temes:timps:trayf:turrs:vawte:venas:verra:woker:yites:yolps:aftos:ainga:amaro:bigos:bilal:borks:cangs:cytes:deets:dobro:docus:dorbs:epena:erven:etats:fauch:flegs:flitt:foyne:gaita:gauch:gived:goold:hoyas:kaies:karee:kerma:ketas:larga:limpa:lolas:lweis:mados:mahis:malky:mbars:meaks:menge:moker:neant:nivas:nsima:nyuse:paals:pagri:pands:phwat:pinds:pouke:powie:pulmo:ranas:remou:roked:rokes:saunf:sewel:skerm:smeik:sorbi:styme:taals:taxol:thots:tolts:tutes:vobla:yages:ylide:yrneh:agrum:alaps:alkos:aroba:bagsy:besaw:bihon:bling:boaks:boeti:botew:bruhs:budas:decos:dowls:etage:etens:feers:fents:flyin:gapos:golps:gompa:gorbs:greve:horks:hudna:hyens:karsy:knawe:kogal:krais:kriol:laiks:ledes:lemed:linds:madar:manat:moyas:myons:naibs:neive:nooit:nougs:nouls:noyes:odals:oucht:panko:pervs:pokit:powlt:rasta:rimus:slaes:sprog:steme:sweed:taiko:targa:tauty:unica:untag:vaped:vleis:yorps:ysame:aight:barps:basho:bisom:bludy:bolds:chedi:conne:cromb:dargs:datal:dempt:dhols:divey:dobes:doucs:dunsh:efits:ehing:erhus:farro:fitte:galia:garam:gyals:haldi:handi:hauds:hella:imbar:inspo:koras:laufs:lawsy:lefte:maneb:mayos:mbila:mecha:mersk:mrads:mugos:muids:natto:nurdy:orful:ourey:pelog:perve:pling:pongy:preke:pynes:rafee:raiks:rhyne:rivas:rotty:rubai:rypin:sanko:scaud:serir:serre:seyen:smoor:sonne:sonse:swerf:terza:thunk:tifos:torrs:tosyl:traga:tryps:twerk:ulyie:umrah:umras:uneth:unsod:waldo:walis:wamed:wents:whios:ybore:rehab:adlib:allin:bants:beted:bhais:blech:breem:chems:choon:colle:deely:demoi:ecads:fedai:fetta:fiere:ghusl:ginch:gosht:gulab:guyse:gyans:heled:hetes:honds:kimet:liths:loled:lynes:mards:meers:mence:mened:mobes:mulai:musee:mysie:napoh:nemic:niefs:octas:paoli:pebas:plaas:pohed:pokal:poots:poyas:pulao:roded:ronne:rorie:rowts:rythe:sanad:sarir:scapi:selfy:shiok:shonk:skran:sownd:sythe:taras:techs:thagi:topek:tropo:unces:weids:yorga:cyber:arepa:bancs:bhels:biach:blags:blees:blins:blive:bluds:bouns:boyed:brung:bunas:carta:cheba:chimo:crays:crogs:daled:decaf:demic:dhals:dited:downa:eyots:fecht:finos:flaks:fubar:gusli:gyeld:hoyed:hundo:kasme:lawin:leeps:louns:lyams:lyted:metta:micos:moyls:nevis:nodum:obied:orfes:owers:pavon:pioye:ploot:pomas:proyn:pucan:punim:rasam:recep:rowme:scobe:shoud:stown:tanky:thelf:tinto:tirth:tynde:unios:urbia:verba:wayed:weise:ahing:alews:arvee:aspro:balus:berko:bevan:bomas:boord:borms:bowat:brahs:braks:brogs:caups:centu:clegs:colby:cursi:daurs:duars:esile:foyle:fuero:glamp:gonch:hauns:hoing:inros:larfs:lengs:lesbo:lownd:lytes:mahrs:manoa:mants:methi:minke:mocus:murgh:netta:ouped:peely:pervo:pervy:potro:pronk:recue:reely:roaky:romer:roums:rowie:rowns:runds:skort:speug:stede:steik:sweel:tanty:tasto:tenes:tragu:useta:vadge:visna:yates:yelts:aburn:acral:alumy:aredd:chaat:cloye:dants:dench:deoch:dioch:dolee:drack:draps:durgy:eathe:ettin:ficta:gaids:greps:groms:kores:lagar:lipas:louma:merds:moeni:mohrs:munis:munts:nagar:netes:ouens:owrie:parvo:pasar:paysd:pedis:pened:pouis:pyets:reiks:rhody:roary:rosha:safed:sehri:sluse:snarf:spork:tapus:tinds:tiyns:turnt:umpie:vatos:acene:agros:arame:aruhe:bayes:bions:breds:cauri:cerge:copha:crims:crusy:deres:derro:detag:doseh:duing:eales:emics:faver:fayne:girlf:goaft:gorms:gorps:hiply:hiree:iftar:ioras:kiore:knule:leugh:lumas:lurgi:lycra:mabes:malae:margs:meids:meous:misch:mobey:mocap:mogas:moree:morgy:myals:narre:negri:nifes:nurts:oslin:parev:pesch:pirre:ploye:preif:pring:pwned:pyots:raita:rares:rohus:rores:rubli:saist:saser:sefer:syned:synth:tacho:tasar:tegus:tenge:tetri:thees:thowl:toges:trats:tulps:verte:agued:aitus:alurk:arked:astun:besti:bhats:boets:caums:dicto:divna:douts:felch:filos:flors:foley:fones:furos:futon:gandy:geres:glams:gynie:hends:hosey:loids:mandy:mapes:maran:ments:merde:methy:muiry:murti:mutha:naved:nutso:oints:ondes:plims:poete:pogue:potai:poynt:prags:preem:prems:putas:putos:pyned:reech:reens:refis:rhabd:roneo:rudis:saick:scand:shtum:skarn:soote:sowce:swaly:symar:taits:tansu:terfe:thigs:toidy:unleg:uraos:vardo:veale:vlies:waift:warre:winge:adorb:afion:aidos:alkie:apols:atocs:barro:benga:bitos:bords:buena:caese:capul:chemo:crins:culty:ditsy:droke:duans:eisel:etics:fenis:filon:gants:garms:grisy:gurns:hamed:heids:hipes:liefs:lifes:lipos:meane:mensh:meynt:migod:mudge:mutis:nabes:noema:noyed:oarer:onely:palsa:pavie:pelau:penie:phese:pinga:pluke:pluty:poncy:pyats:pyros:raths:regar:reird:robug:ryals:soole:spyal:styre:tanhs:temed:theed:upran:wetas:abers:amped:baons:baurs:beres:blads:blits:budes:cardi:coady:cupro:curli:daynt:decim:dente:doole:dunam:glift:glits:goeth:grese:gunas:haere:hiped:homie:hotis:huies:icers:kidel:levas:lomas:lurve:mache:mausy:mosed:motus:novia:opery:osetr:owres:padis:patus:pects:pieds:pneus:prads:ragus:raird:rared:ratoo:rauns:ravey:relie:reney:rubio:seame:shrow:skear:stoor:toker:trugs:tulpa:twals:vaute:viold:voars:waide:aleem:amnio:andic:asity:brods:cleik:clous:copay:coths:dirke:eilds:facey:falsy:fauts:garre:gonef:grody:grufe:gurls:helos:hules:inver:kayle:larns:maare:mirch:mutas:naids:neosa:nirly:panim:pedon:pelch:perog:pheer:photy:plaig:proot:pryan:rangs:redif:roids:rosti:rouls:sarvo:shtup:slove:sowth:swopt:tyers:yrapt:alods:auges:avise:ayres:ayrie:cides:cleep:clems:creds:cruve:cryne:darls:delts:derns:doorn:dovie:eaned:easle:emacs:ergos:fitna:gites:goels:gormy:guyle:holme:hotte:leres:mitas:muils:muirs:mulsh:nages:nicey:noris:nused:owled:paedo:panch:pelus:phuts:ponts:pruny:pudor:purao:reard:ribas:seeld:strak:tabun:taira:teels:terfs:terts:thang:tiefs:upled:valis:yales:yrent:beins:benis:bento:borek:botes:buats:bunia:butoh:cando:canti:cluey:curny:denet:dorba:furol:goris:grens:horis:korat:ladee:laids:lered:locis:lound:mirah:mirls:moais:monpe:muton:netas:nicad:nilas:noias:notam:ornee:oubit:pahit:parms:pauls:plene:plish:rangi:rengs:roake:sayed:scorp:shmoe:slorm:sneed:tabls:talik:tarty:teend:tiges:vlast:whies:yarco:nerdy:alims:apode:bidon:carbs:chado:chode:crems:dalts:darre:delos:donah:dowar:femal:fouer:furth:gilas:hains:herps:lepak:lurgy:malis:meins:mercs:mesca:mogue:murls:naped:niced:noirs:pents:picey:picon:pirls:premy:psion:radgy:radif:rayls:reame:recte:repos:repun:rigmo:roton:rueda:rugas:rumes:shalm:shura:spaul:strim:suete:suona:suped:syrah:tices:touns:turms:tyran:baloi:calle:calps:clits:cruft:cuits:dalek:deros:ealed:eards:ering:estro:fayer:flirs:ghest:heare:hoaed:huers:isnae:lenti:lerps:maunt:mobie:pecia:peent:phota:ponty:powre:proul:rahed:ratus:regos:reups:rhime:rohes:shand:shiur:soman:sulph:talea:tards:tehrs:trabs:trags:treck:trems:weils:wiels:yealm:algos:aunes:belon:birdo:biros:bleah:breis:chons:chuts:crits:debur:derig:dolma:dules:erned:fayre:feare:fraim:galis:geare:gerle:gynae:hayle:lawer:layin:loirs:lomes:lowne:luach:ludes:mailo:mased:masur:mbret:moals:moany:motis:naieo:oners:planh:pleno:poake:poyse:pruno:raike:rapee:resod:rewth:ruban:rudes:sango:spard:spred:swapt:teade:tepoy:thali:vaper:walie:alcos:arede:aspie:betid:bitey:blaud:bluid:cardy:couta:crudo:daris:derpy:dogan:drapy:fiers:fouat:gairs:genas:grats:halon:hoied:legno:lomed:melty:mesia:misal:naios:opsat:opsit:orped:perns:pilao:planc:prief:ptish:pumie:puros:rabis:ramis:ranke:rioty:rolag:shakt:sidey:socia:sohur:spyre:talcy:theic:tinas:tosed:towse:trods:tugra:tweer:urped:weros:abled:adbot:bruts:butes:camos:corni:doula:eagly:ecash:eorls:fales:feals:foule:gleis:glias:goras:grund:howre:lants:lauch:leear:leish:losed:lowen:mitry:modin:moits:musta:nelis:noule:orval:outie:oware:pinol:piony:polts:relos:riems:roins:royne:runos:samey:sevir:snive:soyle:speld:stoln:sweir:taigs:teers:toeas:trads:trugo:tuans:vares:vilde:yarto:latte:acros:alios:arene:boteh:chota:coits:crios:diels:dinlo:garis:glode:goary:goest:grans:houts:ictal:incel:libor:meare:meils:miros:nitry:nivel:noles:pacey:pelsh:perls:permy:piets:poted:potes:rheid:riads:rodes:shere:solei:spide:tante:toing:upter:vired:arnis:batos:boaty:cirls:crons:dowle:fouet:geits:gerne:lipes:luged:masut:medin:mento:murth:neato:nelia:parae:parmo:puers:putin:rodny:ronts:sdein:tabos:teaed:telco:thrid:ahole:arsey:aygre:bacne:baels:beare:borna:bosie:chals:diram:dwile:eolid:erics:frais:geans:leams:leirs:lotsa:loued:menil:molue:natis:nites:percs:perne:pluot:poena:resol:rownd:sayon:sente:sopra:sowne:thaim:trins:volae:abore:aborn:arett:beaty:bunde:dores:frati:geals:gobar:goray:haros:lovie:lubed:mesto:misto:mitey:moley:neals:neram:nosir:perea:pesty:porny:porth:rames:ramsh:rayne:reing:roady:sayne:pesto:acoel:aeros:andro:cerne:crans:crias:geats:heaty:laree:margo:pitso:plues:preak:reine:rotis:seare:snoep:solah:thans:thesp:tuina:whear:apted:corda:flore:grued:laers:larnt:locie:loipe:moers:moled:moust:noust:parcs:peisy:peola:rapso:rayle:reput:rimae:rimon:royst:swole:tauon:urned:acers:bayer:brond:ciels:creps:ecard:eiron:garbe:glute:laris:meris:moars:perae:perce:plaur:plesh:porey:porin:scail:scath:solde:trapo:trons:twoer:albid:blaes:blude:calos:clats:coled:crues:faine:gares:lotes:macte:nital:peare:pelma:perts:piley:ramin:rapin:realo:resam:rubel:tauld:waite:artis:basen:bayle:breid:certs:derny:leare:litem:loure:maril:narod:nipet:proin:regot:repla:rhone:roany:sield:souce:ticed:treif:ahent:cimar:deman:laide:mogra:molie:morah:niger:oiran:pagle:parid:plets:ploit:praty:pucer:reais:reans:renos:resto:rhies:rifte:salop:seter:shero:shtar:shule:sored:teads:teils:teins:thars:amore:arsed:beals:biner:coste:courd:gulet:minse:moria:mulie:pince:prian:puter:reate:roule:spuer:tiars:trild:biled:brust:clipe:doble:doilt:feard:frita:goier:haint:hoten:morna:olate:opter:pesta:prial:pures:pusle:raits:riato:salto:slaid:tased:tians:toney:besat:clies:danse:maise:mante:meint:naice:ordie:plein:plute:potae:radge:rando:ranes:rines:scire:seria:steil:turme:belit:blert:bonie:crema:hoser:orbat:pelas:potin:ruice:ruote:sared:siled:souct:tamin:fiest:galed:labne:lited:maerl:oilet:pance:panir:plore:poset:poste:retam:rudie:spule:tomen:turon:bilat:bolet:borde:caneh:crise:grone:laned:mogar:preon:ramse:rebit:redon:rosit:runce:salut:arets:drole:eliad:enlit:moten:prent:ragde:rione:rones:sorta:balot:clied:liart:loast:losen:pilae:porae:rince:sieth:snied:sture:ramen:coate:cripe:dolie:siler:sined:arled:elint:maron:pareo:raith:roted:rouet:stear:blaer:leats:ronte:tuile:coure:crein:eatin:marle:recal:roate:brane:frite:ranse:soare:sonce:caple:raile:speat:tolar:tride:wrate:crame:daine:doner:raine:shart:sient:earnt:plast:drice:petar:raned:repat:heast:paire:perst:sater:caron:taser:thale:trape:saine:shite:feart:thrae:tiare:earst"
    var ansList = "aaron:abada:abaff:abama:abaue:abave:abaze:abbie:abdal:abdat:abdom:abede:abend:aberr:abidi:abilo:abime:abkar:abner:abnet:abody:abote:abret:abrus:absee:absis:abstr:abura:abush:abuta:abwab:acale:acana:acapu:acara:acast:acate:accel:accra:accts:accum:accur:accus:acedy:achen:acher:achor:acier:acies:ackey:aclys:acoin:acoma:acone:acool:acost:acoup:acrab:acryl:acroa:acron:acrux:actos:actus:acuan:adagy:adams:adapa:adati:adaty:adawe:adawn:adcon:addda:addie:addis:addnl:adead:adeep:adela:adeps:adfix:adiel:adion:adjag:adlai:adlay:adlet:admov:admrx:adnex:adolf:adoxa:adoxy:adpao:adret:adrip:adrop:adrue:adure:adusk:adzer:aeger:aegir:aegle:aequi:aeric:aeron:aesop:aetat:aevia:aevum:aface:afgod:afifi:aflat:afley:aflow:afoam:afray:afret:afric:agada:agade:agamy:agasp:agata:agaty:agena:agend:agete:aggur:aghan:agiel:agnat:agnel:agnes:agnus:agoho:agrah:agral:agric:agrom:agron:agsam:aguey:agura:agush:agust:ahems:ahmed:ahmet:aholt:ahong:ahsan:ahunt:ahura:ahush:ahwal:ayens:aiger:aigre:aylet:ailie:aillt:ayllu:aimak:aimee:ainoi:ainus:ayond:ayous:airan:aitis:ayuyu:aiwan:ajaja:ajari:ajava:ajhar:akala:akali:akasa:akebi:akeki:akkad:aknee:aknow:akpek:akron:akule:akund:alada:alain:alaki:alala:alani:alawi:alban:albin:albyn:albus:alcae:alces:alcor:alday:alden:aldim:aldus:aleak:alenu:aleut:alfet:alfin:alfur:algic:algol:alhet:alice:alick:alida:alids:aliet:alife:alima:alish:aliso:alisp:alite:ality:alkes:alkin:allah:allan:allen:aller:allez:allie:alloo:alman:almon:alnus:alody:alogy:aloid:alois:aloma:alosa:alose:alout:alpax:alpen:alpid:altin:altun:altus:aluco:aluta:alvah:alvan:alvia:alvin:alvus:amaas:amadi:amaga:amala:amalg:amang:amani:amant:amapa:amara:amati:ambay:ambar:ambas:ambon:ameed:ameen:amelu:amess:amhar:amylo:amini:amire:amish:amita:amlet:ammer:amoke:amora:amper:amphi:ampyx:amsel:amula:amuze:amvis:amzel:anabo:anack:anama:anasa:ancha:ancor:ancre:andes:andia:andor:andre:anend:angia:angie:angka:angor:angus:anhyd:aniba:anice:animo:anita:anjan:anjou:ankee:ankou:anlet:anlia:anmia:annam:annet:annie:anniv:annot:annum:annus:anoia:anoil:anoli:anorn:anour:anous:anova:ansar:ansel:anser:antal:antiq:anton:antum:anury:anzac:aoife:aotea:aotes:aotus:aouad:apair:apama:apass:apast:aperu:aphra:apiin:apili:apina:apios:apium:apoda:apout:appar:appet:appmt:apptd:april:apsid:aptal:araby:arabs:araca:arace:arach:arado:arage:arain:arake:aramu:arank:arara:araru:arase:arati:araua:arawa:arber:arcae:arces:archd:arche:archy:archt:ardea:arder:arean:areek:areel:arend:areng:arent:arest:argas:argel:argid:argin:argos:arhar:arian:aryan:aries:arioi:arion:arist:arite:arith:arius:arjun:arkab:arkie:armit:arneb:arnee:aroar:arock:aroon:aroph:arrau:arrgt:arrha:arrie:arsyl:arsle:artar:arter:artha:artie:artly:artou:artus:aruac:aruke:arulo:arupa:arusa:arvel:arzan:arzun:asale:asaph:asarh:ascan:ascii:ascry:asgmt:asher:ashir:ashot:ashur:asian:asyle:async:askar:askip:aslop:asoak:asoka:aspca:assis:assoc:astay:astel:astor:astre:astur:asuri:atake:atame:atavi:ateba:atees:ately:atelo:athar:athel:ating:atypy:atlee:atmid:atnah:atole:atour:atren:attal:atter:attid:attle:attry:atule:atune:atwin:aubin:aucan:aucht:aueto:augen:auget:aulae:auryl:aurin:aurir:autem:autor:autre:auxil:avahi:avars:avell:avena:aveny:avera:avery:avern:avick:aview:avile:avoir:avoke:avoue:avour:avowe:awabi:awacs:awaft:awald:awalt:awane:awber:aweek:awest:awhet:awhir:awide:awink:awiwi:awkly:axers:axine:azoch:azofy:azoxy:aztec:babai:babby:babis:bable:babua:bacao:bache:bacin:bacis:backy:badan:badju:badon:bafta:bagdi:bagge:bagio:bagle:bagne:bagre:bahai:bahay:baham:bahan:bahar:bahoe:bahoo:bahur:bayal:baign:baile:bailo:baioc:bayok:bajau:bakal:bakie:bakli:balai:balak:balan:balao:balat:balau:balei:balli:ballo:balon:balor:balow:balut:balza:bamah:banat:banba:banca:bande:bandi:bando:banff:banga:bange:bangy:banig:banky:banus:barad:barat:barba:barbu:baret:barff:barfy:bargh:baria:barid:barie:barih:baris:barit:barly:baroi:barse:barth:basad:basat:basyl:baske:basos:bassa:batad:batak:batan:batea:batel:bater:batis:batwa:baubo:bauch:bauge:bauld:baume:bauno:baure:bauta:bawke:bawly:bawra:beala:beant:bearm:beata:beati:bebay:bebar:bebat:bebed:bebog:becco:beche:becky:becry:becut:beday:beden:bedin:bedip:bedog:bedot:bedub:bedur:beele:beent:beest:beeth:beety:beeve:befan:befop:befur:begay:begob:begod:begut:behap:behav:behen:behew:beice:beild:beira:beisa:bejan:bejel:bejig:bekko:belam:belap:belat:belis:bella:belli:bello:belue:belve:beman:bemar:bemat:bemba:bemol:benab:benda:benic:benim:benin:benjy:bensh:benzo:beode:bepaw:bepen:bepun:berat:bergh:bergy:beryx:berne:beroe:berri:berun:besan:besew:besin:bespy:besra:bessi:bessy:betag:betis:betsy:betso:bevil:bewit:bewry:bezan:bezzi:bezzo:bhaga:bhalu:bhara:bhava:bhili:bhima:biabo:byard:bibby:bibio:bichy:bidar:bidri:bidry:biens:bifer:bigam:bigas:bihai:biham:bikol:bilbi:bilch:bilic:bilin:bilio:billa:bilos:bilsh:bynin:binna:binny:biose:byous:birde:birdy:birky:birma:birne:birny:biron:byron:birri:byrri:bysen:biset:bisie:bisme:bisso:bisti:bited:bitis:biune:bixin:bizel:bizen:bizet:blayk:blair:blake:blanc:blazy:bleck:blenk:blens:blere:blibe:blick:blier:blirt:blizz:blote:blout:bobet:bocal:bocoy:boden:boder:boers:boget:bogum:bohor:boyce:boyer:boiko:boily:boise:boist:bokom:bolag:boldo:boldu:boled:bolis:bolly:bolti:bolty:bomos:bonav:bonbo:bonos:bonum:boodh:booly:boone:boonk:boort:boosy:boran:borgh:borid:boryl:boris:bosch:bosey:boser:bossa:botan:botry:bottu:bouch:boucl:bouet:bourr:bouto:bovey:bovld:bowge:bowla:bowle:bowly:bozal:bozze:braca:bragi:brahm:braye:breba:breck:bredi:breek:brerd:brest:breth:brett:breva:brevi:brian:bryan:bryce:brike:bryon:brisa:brist:brite:bryum:briza:brizz:broid:broll:broma:bronk:bronx:broon:brott:browd:brubu:bruce:bruet:bruja:brujo:bruke:brune:bruno:bruta:bruzz:btise:bubos:bucca:bucco:bucky:buddh:budgy:bueno:bugan:bught:bugre:buick:bukat:bulak:bulby:bunda:bunga:bungo:burao:burel:burez:burga:burge:burys:burma:burny:burut:bushi:bussy:busto:butat:butea:butic:butin:butyn:butyr:butsu:buxus:caaba:caama:cabaa:caban:cabda:cabio:cabot:cacam:cacan:cacei:cacur:caddo:cader:cadew:cados:cadua:cadus:caffa:cafiz:cafoy:caggy:cagit:cagui:cahiz:cahot:cahuy:cayos:cairo:caite:cajan:cajou:caker:cakra:calas:calci:caleb:calef:calic:calin:calli:callo:calor:camay:camla:campa:campe:canap:canch:canel:cangy:canis:canli:canos:canun:canzo:caoba:capax:capel:capoc:cappy:capra:capsa:caque:cardo:carey:carga:carya:carib:carid:caryl:carli:carlo:carne:caroa:carot:carpe:carri:carty:carua:carum:carus:casal:casey:casel:caser:casha:casse:cassy:catan:catel:catha:cathy:catso:catti:catur:cauch:cauli:cauma:caupo:cavae:caval:cavea:cavey:cavia:cavin:cavum:cavus:cawky:cawny:ccitt:ccoya:cebil:cebur:cebus:cecca:cecil:cedre:cedry:ceibo:ceile:ceint:celia:centi:cequi:ceral:ceras:cerat:cerer:ceryl:cerin:cesar:ceste:cetic:cetid:cetin:cetus:chaga:chait:chaja:chaka:chama:chamm:chane:chass:chati:chaui:chauk:chaum:chaus:chawl:chawn:chazy:cheet:chego:cheir:cheke:cheki:chena:cheng:chera:chese:cheve:chyak:chiam:chian:chiba:chien:chimu:chint:chiot:chita:chivw:chloe:chlor:choak:choca:choel:choes:choga:choya:chold:chonk:choop:chopa:chora:chort:choup:chous:chria:chris:chron:chubb:chude:chuet:chuje:chung:churm:chwas:cyath:cicad:cicer:cydon:cigua:cymba:cymry:cindy:cinel:cypre:circe:cyril:cyrus:cista:citee:cytol:citua:cizar:claye:claik:clair:clake:clamb:clape:clara:clare:clark:claus:clava:clavy:clawk:clead:cleam:cleuk:clich:clyde:clyer:clima:clite:clive:cloes:cloit:cloky:clong:cloof:closh:cluff:coaid:coart:coaxy:cobol:cobus:cocao:cocin:cocle:cocus:codal:coddy:codol:coeff:coeno:cogit:cohob:cohol:cohow:cohue:coyan:coing:coiny:coyol:coyos:cokey:coker:cokie:colan:colat:colen:colet:colla:colob:coman:comdg:comdr:comdt:comid:comme:comox:compd:conal:concn:coner:confr:conli:conny:connu:conoy:conor:consy:const:contd:contg:contr:cooba:cooja:coony:coorg:cooth:cooty:copei:copia:copis:coppa:copps:copus:coque:corah:coran:cordy:coree:corge:coryl:corin:corke:coroa:corol:corpl:corpn:corsy:corta:corve:corvo:cosen:cosin:cosmo:cosse:cotch:cothe:cothy:cotys:cotte:cotty:couac:couma:couve:covid:cowle:craie:craye:craik:crain:crang:crany:cravo:crawm:crcao:crche:cread:creat:creda:creem:creen:cresc:creta:crete:cryal:cribo:criey:crile:crink:criss:cryst:croat:croyl:crois:crood:crosa:crose:crowl:cruce:crull:crunt:cruth:csect:csnet:ctimo:cuban:cubas:cubla:cubti:cucuy:cueca:cueva:cuffy:cufic:cuyas:cujam:culla:culmy:culot:cumay:cumal:cumar:cumbu:cumic:cumyl:cumly:cumol:cunan:cunas:cunea:cunye:cunni:cunny:cunza:cupay:curby:curin:cursa:curua:cusie:czech:dabby:dabih:dabuh:dachs:dacus:dadap:daeva:dafla:dagon:dahms:dayak:dayal:daijo:daira:dairi:dairt:daiva:dakir:dalai:dalan:dalar:dalea:daler:damas:damia:damie:damon:danae:danai:danda:danes:danic:danke:danli:dansy:dansk:danta:dante:darac:darat:darby:darci:daren:dargo:darya:darii:daryl:darin:daroo:darst:dasht:dasya:dasnt:dassy:datch:datil:datsw:dauke:dauri:daver:david:davis:dawdy:dawny:dawut:deady:debat:deben:decap:decem:decil:decyl:decke:decus:dedan:deddy:dedit:deeny:deess:defet:defix:deink:deino:deynt:dekle:delaw:delhi:delia:delim:delit:della:deloo:demal:demot:denat:denda:deneb:denom:denty:deota:depas:depel:depit:depoh:derah:derek:deric:deriv:derog:derri:derve:desyl:desma:dessa:desto:detar:detat:detax:detin:dette:detur:deval:devex:devow:dewal:dewey:dewer:dhabb:dhava:dheri:dhyal:dhoby:dhoni:dhoon:dhoty:dhoul:diaka:diamb:diana:dyaus:didal:didym:didle:didna:didnt:didus:diego:dieri:diety:difda:digne:digor:digue:dyker:dylan:dilis:dilos:dimin:dimit:dimmy:dimna:dinah:dynam:dinka:dinus:dione:dioon:diose:dioti:dioxy:diple:dipsy:dipus:dirca:direx:dirgy:disli:disna:disty:distn:distr:diter:diurn:divel:divet:divia:divid:divus:djave:djuka:doand:doaty:dobos:doesn:dogal:dogly:dogra:doigt:doyle:doylt:doina:doyst:doley:dolph:dolus:domba:domer:dompt:domus:donal:donar:donat:donax:doncy:donec:doney:donet:donia:donis:donum:dooja:dooli:dorab:doray:dorey:doria:dorje:dorsi:dosis:dossy:dougl:dovey:dowve:draba:drago:drame:dramm:drang:drate:drawk:dreep:dreng:drias:drinn:drisk:dryth:drogh:droyl:drona:droud:drovy:drung:drunt:drupa:drury:druze:dsect:dtset:duala:duali:duane:duant:dubba:dubby:dubhe:dubio:duffy:dugal:duhat:dujan:dukhn:dulat:duler:dumba:dumby:dunal:dunne:dunst:duole:dupla:duppa:durax:duree:duret:duryl:durio:dusio:dusun:dutra:dvigu:dwyka:eably:earle:earsh:eaver:eblis:ecart:echar:echea:echis:ecize:ecoid:ecole:ectad:ectal:edana:edder:eddic:eddie:edgar:ediya:edith:edoni:edwin:eeler:eemis:eeten:effet:effie:egall:egypt:egrid:eyess:eyght:eimak:eimer:eyoty:eyrar:eyren:eyrer:ejusd:ekaha:ekron:elaic:elayl:elamp:elaps:elean:eleme:eleut:eleve:elfic:elian:elias:elihu:elymi:eliot:eliza:ellan:ellen:elmer:eloah:elong:elric:elses:elvet:elvis:emane:embue:emden:emesa:emigr:emily:emlen:emony:emory:empeo:emuls:enage:enami:enapt:encia:encyc:encup:endia:eneas:eneid:enent:enfin:engem:engin:engle:enhat:enlay:ennew:ennia:ennoy:enoch:enode:enoil:enorn:enpia:enray:enrib:enrut:entad:ental:entea:entom:entre:entte:enweb:eoith:epeus:ephoi:epiky:epist:eplot:eppes:eppie:epsom:epulo:equiv:equus:erade:erato:erava:erept:ergal:erian:erika:eryon:erizo:ermit:ernie:ernst:erron:ersar:eruca:erump:ervum:erwin:esbay:escry:esere:eshin:espec:esrog:essed:essee:essex:essie:estab:estre:estus:etang:ethan:ethel:ethid:etiam:etrog:etuve:etwas:eucre:eucti:euler:eurus:evang:evans:evase:eveck:evene:evese:ewder:ewery:ewing:exaun:excud:excur:exdie:exect:exede:exhbn:exion:exite:exlex:exody:exopt:expdt:exptl:expwy:exsec:exter:exust:exxon:faade:fabes:facie:facit:facks:facty:facto:faden:fadme:fager:fagus:faham:fayal:faire:fairm:faits:falco:falda:falla:fally:falun:falus:fanam:fangy:fanit:fanti:fanwe:farde:fardh:fardo:fario:farmy:farsi:farth:fatil:fator:faulx:fause:faust:faute:fchar:fcomp:fconv:fdubs:featy:fedia:feedy:feely:feere:feest:felis:felix:felup:femic:ferae:ferie:ferio:ferme:ferox:ferri:ferth:feste:fetis:feute:fgrid:fhrer:fiant:fiard:fibra:fibry:fidac:fidel:fidia:fieri:fifie:fikey:fikie:filao:filea:filix:filla:findy:finew:fingu:finns:firca:firma:fitty:fixup:flain:flamb:flang:flavo:flche:fldxt:fleay:fleak:flear:flect:flegm:fleta:flipe:fload:floey:floyd:floit:floyt:flook:flots:flowe:flowk:flrie:fluer:flurn:flurt:flusk:fname:fnese:foaly:fodda:foder:fodge:foeti:fogas:fogon:fogus:fohat:foism:foldy:foppy:forcy:fordy:foret:forma:formy:forra:forst:fosie:fotch:fotui:fourb:foute:fouty:foxer:foxly:fplot:fpsps:fraid:fraik:frayn:franz:frapp:frary:frase:frawn:fraze:frden:fream:freck:freen:freya:freir:freyr:fremt:fress:frett:freud:frija:frike:friss:froom:frosk:frowl:fuage:fuchi:fuder:fugit:fulah:fulth:fultz:fulup:fulwa:fumid:funge:funic:funis:funje:funli:furil:furyl:furud:fusht:fusus:futwa:gabon:gader:gadus:gaels:gagee:gagor:gaine:gaist:gaius:gaize:galbe:galee:galei:galey:galen:galet:galga:galik:galla:galli:ganam:ganda:ganga:gange:gansa:gansy:ganta:ganza:garad:garau:garce:garde:gardy:gareh:garle:garon:garoo:garse:garua:gasan:gashy:gatha:gauby:gauls:gaura:gaure:gavia:gawby:gazee:gazel:gazet:gazoz:gconv:gease:geast:gedds:gehey:geira:geisa:gekko:gemse:gemul:genae:genep:genin:genio:genys:genit:genos:geoff:geoty:gerbo:gerim:gerip:gesan:getae:getah:getfd:getic:getid:ghain:ghana:ghbor:ghent:ghess:ghole:ghoom:gibbi:gibby:gyges:gigge:gygis:giher:giles:gilia:gilim:gilse:gilty:gymel:ginep:gynic:girba:gyric:girja:girny:girse:gisel:gisla:gitim:givey:givin:glack:glaga:glaky:glali:glaux:glave:glead:gledy:gleen:gleir:gleit:glene:glenn:glick:glink:glynn:gliss:glist:gloea:glome:glomi:glood:glore:gluck:gluma:glump:gnast:gnide:gnoff:goala:goave:gobbe:gobet:gobia:gobio:goyin:goldi:golee:golet:golgi:goloe:gonal:gondi:goney:gonid:gonne:gooma:goran:gorce:gorer:goric:gorki:gorra:gorry:gorst:gossy:goter:gotha:gotos:gotra:gouda:goudy:goumi:goury:gowdy:gracy:gramy:grane:grank:grano:grata:greco:gregg:greit:grene:greta:grete:grewt:grimm:grimp:grint:griph:gryph:groff:grond:gront:groop:groot:groow:grote:gruft:gruis:gruys:grush:gruss:gteau:guaba:guaka:guama:guara:guary:guasa:guato:guaza:gubat:gubbo:gucki:gudge:gudok:guelf:guffy:gugal:guiac:guiba:guido:guyer:guige:guijo:guily:gujar:gulae:gulix:gumby:gumly:gunda:gundi:gunja:gunne:guran:guric:gurle:gurts:guser:gutte:gutti:guzul:gweed:gwely:habab:habbe:habet:habub:hache:hacht:hacky:haddo:hadit:hadnt:hafis:hagar:haggy:hagia:hague:haida:haydn:hayes:haikh:haine:hayne:haire:haiti:hajib:hakka:halas:halch:haldu:halfy:halke:haloa:halte:halwe:haman:hamel:hamli:hamsa:hamus:hange:hanif:hankt:hanna:hanoi:haori:haras:harbi:harka:harle:harpa:harre:harst:hasan:hasht:hasid:hasky:hasnt:hatel:hathi:hatte:hatti:hatty:hausa:haust:havel:hawer:hawky:hawok:hazen:hazle:hdqrs:heazy:hecco:hecte:heezy:heiau:heidi:heygh:heild:heily:heinz:heize:helas:helco:helen:helge:helly:heloe:hemad:heman:hemen:hemol:henad:hendy:henen:herat:herba:herem:hermi:hermo:herne:herve:hetty:heuau:heved:hewel:hexis:hiate:hibla:hybla:hicht:hichu:hicky:hidel:hield:hienz:hiera:higra:hilda:hilsa:himne:hinch:hindi:hindu:hiney:hiper:hypho:hipmi:hippa:hippi:hiram:hiren:hirse:hyrse:hirst:hyrst:hisis:hispa:hoboe:hocco:hocky:hoddy:hodge:hoggy:hogni:hokan:hoker:holer:holia:homam:hondo:honzo:hoofy:hooye:hoose:hopis:hoppo:horae:horim:horla:horol:horry:hosea:hotta:hoult:housy:houss:houve:howea:howel:hsien:hsuan:huaca:huaco:huari:huave:hubba:hucho:huile:hulch:humbo:humet:humin:humit:hundi:huron:hurri:hurty:husho:husht:hutre:yabbi:yaboo:yacal:yadim:yagua:yahan:yajna:yakan:yakin:yakut:yalla:iambe:yamel:yameo:yampa:yamph:yanan:yanky:ianus:yaply:yaqui:yaray:yarke:yarly:yarry:yarth:yasht:yasna:yazoo:iberi:ibota:icaco:icasm:iceni:ichth:icica:iconv:idaho:idaic:idcue:iddat:iddhi:iddio:idean:idest:ideta:idgah:idion:idism:idist:idite:idose:idryl:yeara:yeech:yelek:yemen:yeply:yerga:ierne:yerth:yerva:yesso:yezdi:yezzy:ifint:ifree:ifrit:ygapo:igara:igdyr:ighly:ignaw:ignis:ihlat:iiasa:yinst:ijmaa:ijore:ikary:ikona:ilama:ileon:ilian:iliau:ilima:ilion:illus:iloko:imban:imbat:imber:imcnt:immis:immov:immun:impar:impen:imper:imput:imvia:inact:inaja:inark:inbow:incan:incas:incor:incra:indan:indef:indic:indii:indyl:indin:indiv:indra:induc:indus:ineye:ineri:infin:infit:ingem:inger:inglu:inial:inigo:injun:inken:inket:inkie:inkos:inkra:inlaw:inmew:innet:inoma:inone:inorg:inrol:inrub:insea:insee:insep:insol:instr:insue:intnl:intsv:intue:invoy:yocco:iodal:iodol:yomer:yomin:yomud:iortn:youff:youre:youve:youze:yoven:iowan:iphis:yquem:irani:iraqi:irbis:irena:irene:ireos:irfan:irgun:irian:irido:irish:iroha:irous:irpex:irred:irreg:irvin:irwin:isaac:isawa:iseum:isiac:ising:isize:islay:islam:islot:ismal:isnad:isoln:isort:isthm:itala:itali:italy:itcze:itemy:iters:ytter:yuchi:yukon:iulus:yuman:yunca:yurak:yurok:yuruk:ivray:ixion:izing:izote:iztle:izumi:jabia:jabul:jacht:jacko:jacob:jagat:jagla:jagua:jahve:jaime:jaina:jakob:jakos:jakun:jalee:jalet:jalor:jalur:jaman:jamie:janet:janos:jantu:janua:janus:japyx:jarde:jared:jarmo:jarra:jarry:jarvy:jason:jatha:jatki:jatni:javan:javer:jawab:jazey:jeany:jebat:jebus:jeery:jehup:jelib:jemez:jenna:jerez:jerib:jewis:jewry:jheel:jhool:jibby:jiboa:jimbo:jingu:jinja:jinny:jiqui:jitro:jixie:jizya:jocum:johan:joyce:jokul:jonah:jonas:joola:joree:jorge:josey:joshi:josie:josip:jough:journ:jowel:jower:jowpy:juang:juans:jubbe:jubus:judah:judex:jufti:jufts:juger:juyas:juise:jules:julia:julid:julie:julio:julus:jumba:jumma:jundy:juris:jussi:justo:jutic:jutka:juvia:juxta:kaaba:kabel:kadmi:kados:kafiz:kafka:kafta:kahar:kahau:kayan:kaimo:kaiwi:kajar:kakan:kakar:kakke:kalan:kalon:kamao:kamba:kamel:kanap:kanat:kande:kannu:kansa:kapai:kappe:kapur:karbi:karch:karel:karen:karez:karou:kaser:kashi:kaska:kassu:katar:katat:katha:kathy:katie:katik:katun:kauch:kaver:kazak:keach:kearn:keats:keawe:kebby:kecky:kedar:keena:keest:kefti:keist:keita:keith:keywd:keleh:kelek:kelia:kella:kemal:kenai:kendy:kenya:kenny:kenno:keout:kerat:kerch:keres:keryx:kerri:kesse:ketal:keten:ketyl:kette:ketty:kevan:kever:kevin:kevyn:khair:khaja:khami:khasa:khasi:khass:khila:khmer:khoka:khond:khuai:khula:khuzi:khvat:kiaki:kieye:kiyas:kikar:kikki:kilah:kilan:kileh:kilij:killy:kilom:kimmo:kinah:kinch:kingu:kinic:kinoo:kinot:kioea:kioko:kyoto:kiowa:kippy:kirve:kishy:kisra:kiswa:kitab:kitan:kitar:kyung:kiver:kiwai:kizil:klans:klaus:kleig:kling:klino:klops:klosh:kluck:klunk:kmole:knape:knark:knezi:kniaz:knyaz:knick:knoit:knorr:knute:knuth:koali:kobus:kodak:kodro:koeri:kogai:kogia:kohua:koyan:koila:kokan:kokia:kokil:kokio:kokos:kolea:kolis:konak:konde:kongo:kongu:konia:kooka:koorg:kopec:kopis:korah:korea:korec:korin:koroa:korwa:kosha:kosin:kosos:kotal:kotar:kouza:kovil:krama:krebs:kreil:kreis:krems:krepi:krina:kriss:krivu:krome:krosa:kubba:kufic:kukui:kulah:kuman:kumbi:kumyk:kumni:kunai:kunbi:kurku:kurmi:kusam:kusan:kusha:kusti:kusum:kutta:kvint:kwapa:laang:laban:labba:labby:lacca:lache:lacis:lacto:ladik:ladin:laeti:lagen:lagly:lagna:layia:laine:layne:laius:lakey:lakie:lakke:lally:lamba:lamda:lamel:lamin:lamna:lampf:lamus:lamut:lanao:lanaz:laney:langi:lango:lanny:lansa:lanum:lapon:lappa:lapps:lapsi:largy:laria:larid:larin:larix:laron:larry:larus:larve:lasty:latax:latin:laton:latro:laude:lauia:laure:laury:lautu:lavic:lawzy:leath:leban:lebes:leche:leden:ledol:leeds:leeky:legis:legoa:legua:lehay:leigh:leila:leiss:leith:lekha:lelia:lemna:lenad:lenca:lench:lendu:lenin:lenny:lenth:leora:lepal:lepas:leppy:lepre:lepry:lepus:lerot:lerwa:lesed:lesgh:lesya:lesiy:lessn:leste:lethy:letty:leuma:leung:leven:levet:levir:lewie:lewth:lewty:lexia:lexic:lhota:libby:libya:libre:licca:licet:lycid:lycus:lidia:lydia:lyery:liesh:liest:lieue:lieut:lifey:lifen:ligas:lygus:lyken:lilas:liles:lilly:limbu:limer:limli:limmu:limpy:limsy:linda:lindo:linea:linet:linge:linha:linie:linja:linje:linne:lynne:linon:linus:lipan:lipic:lipse:lyrid:listy:liszt:litch:lithi:lithy:litra:litui:litus:liwan:lloyd:lludd:loasa:lobal:lochi:lochy:locky:lodha:lodur:loeil:logis:lohar:lokao:loket:lomta:looch:loope:loory:lored:loren:loros:lorum:lotan:lotor:louch:louey:loulu:lourd:louty:lovee:lowth:loxia:loxic:lrecl:lucan:lucet:lucia:luddy:luian:luigi:luite:lukan:lukas:luket:lulab:lulav:lully:lumut:lunda:lunel:lungy:lunka:lupid:lupis:lural:lurky:lusky:lutao:luteo:lutra:luxus:maana:mabel:macan:macao:macco:madia:madoc:mafey:mafoo:magas:maggy:maghi:magna:magog:mahal:mahar:mahat:mahdi:mahra:mahri:maida:mayda:maidy:maidu:mayey:mayer:maiid:maine:maint:maynt:maius:majas:majos:makah:makua:makuk:malay:malee:maleo:malgr:malie:malta:malto:malum:mambu:mamry:manak:manal:manba:mande:mands:manei:maney:mangi:manid:manie:manit:maniu:manks:manny:manoc:manqu:manso:manuf:maori:mappy:maray:maral:marci:marco:mardi:marek:marga:marie:mario:maris:marys:marko:marla:marli:marok:maros:marsi:marty:martu:masai:masha:matar:matax:matha:mathe:matie:matka:matra:matsu:matta:matti:matty:maugh:mazda:mazel:mazic:mazur:mbaya:mbori:mbuba:mccoy:mckay:meach:meaul:mecon:mecum:medea:medio:medoc:meece:meech:meeks:meese:meeth:meggy:meiji:meile:melam:melch:meles:melia:melis:meloe:melos:menat:mende:mendi:mendy:menic:menow:mensk:merak:merat:merce:merci:mergh:merop:meros:mesad:mesem:messe:mesua:metad:metae:metas:metel:metin:metra:metus:metze:meuni:meute:mewer:miami:miauw:micah:mycol:midas:mider:mikey:mikie:mikir:milan:milha:milit:milla:milly:mymar:mimir:mimly:mimus:mimzy:minah:minbu:mingo:minie:minot:minow:minum:miqra:mirac:mirak:myron:misce:mysel:mysis:misky:misly:mitra:mitty:mitua:mizar:mnage:mnium:mobed:mobil:moche:mocoa:modif:modoc:moeck:mogos:mohar:mohwa:moyen:moier:moise:moism:moity:mokum:moler:molet:molge:molka:molle:molpe:molvi:momme:monax:monel:monny:montu:moore:moorn:moosa:moost:mooth:mopan:mopla:moqui:moran:mordu:mordv:morga:moric:morin:mormo:moroc:moror:morth:morus:mosan:mosel:mosgu:mossi:mosul:mosur:moter:moton:moudy:moule:mouly:mowch:mowha:mowie:mowse:mowth:mphps:msink:mster:mtier:muang:mudar:mudde:mudee:muffy:mufty:mugho:mugil:mukri:mukti:mulet:multi:multo:mumbo:munda:mungy:munia:munic:muntz:muong:muran:murat:murga:murmi:murph:murut:murza:musal:musci:musgu:musie:mutic:mutus:nabak:nabal:nabby:nable:nacry:nagel:naght:nahor:nahua:nahum:nayar:naias:naily:nairy:naish:nakir:nakoo:namaz:nambe:namby:namda:nammo:nanda:nandi:nanes:nanga:nanmu:nants:nantz:naomi:naoto:napal:nardu:naren:narra:nasab:nasat:nasch:nassa:nasua:nasus:nathe:natus:naumk:navet:navig:navis:nawle:nawob:nazim:nebby:necia:necro:needn:neela:nefas:neffy:neger:nehru:nejdi:nemos:nenta:neoza:nepal:nesty:neter:neuma:nevat:neven:nevoy:newar:nexal:nexum:ngapi:ngoko:nyaya:niais:niall:niata:nibby:nicky:nidge:nydia:niels:niepa:nific:nifle:nigel:nigre:nigua:nihal:nikko:nikon:nilot:nymil:nymss:ninos:ninox:nintu:ninut:niobe:nyoro:niota:niris:nisan:nitch:nitos:nitta:niuan:nyxis:nixon:nizey:njave:nobel:nobis:nobut:nocht:noddi:noded:noemi:nogai:nogal:nohex:noire:nokta:nolle:nomap:nonda:nondo:nonya:nonic:nonly:norah:noric:norie:norit:norna:norry:norse:norsk:nosig:notan:notre:notus:novem:novus:nowch:nowel:npeel:nuadu:nucal:nucin:nudum:nullo:numac:numda:numis:nummi:numps:numud:nunce:nunch:nunki:nunky:nunks:nunni:nunry:nuque:nurly:nurry:nursy:oadal:oaric:oasal:oblat:obley:obmit:occas:ochna:ochro:ocyte:ocote:ocque:octic:ocuby:odell:odoom:oecus:oelet:oenin:offic:oftly:oghuz:ohare:ohelo:oyana:oicks:oylet:oisin:okrug:olcha:olchi:olena:olepy:oliva:olona:olson:omaha:omani:omina:omnes:oncia:oncin:onymy:onker:onkos:onlap:onmun:ontal:oolak:oolly:oopak:oopod:oozoa:opata:opelu:ophic:ophir:ophis:orage:orale:orans:oraon:orary:orbic:oreas:orgal:orias:oriya:orion:oryza:orkey:orlet:orlos:ornes:oromo:orpit:orrow:orsel:orson:ortet:ortyx:ortol:orvet:osage:osaka:oscan:oscin:osela:oshea:oside:oskar:osmin:osone:ossal:ossea:osset:ostic:otate:othin:otyak:otium:otkon:otomi:ouabe:oukia:oulap:ounds:ousia:outas:outen:outly:ouvre:ovant:ovest:ovile:ovism:ovula:owght:owser:oxane:oxboy:oxfly:oxman:ozark:ozena:ozias:paauw:pablo:pacay:pacht:padda:padge:padou:padus:pagne:pagus:pahmi:pahos:payen:paine:payni:pairt:palar:palau:palch:palew:palli:pallu:palma:palmo:palta:palus:pamhy:pamir:panak:pangi:panna:panos:panse:panus:paola:papey:papio:papyr:papua:paque:parah:param:parao:parde:pardo:parel:parli:parsi:parte:parto:parus:pasan:pasch:pasis:pasmo:passo:passu:pasul:patao:patas:patee:patel:pathy:patia:patta:pattu:pauky:paula:pauxi:pavia:pbxes:peasy:peban:pecht:pecos:pedee:pedum:peeke:peele:peepy:peert:pegma:peine:pelew:penda:pendn:pense:pensy:penta:penup:perau:perca:percy:perit:perla:perle:perty:perun:pesah:peste:petos:petro:petum:peuhl:pflag:pfund:pgntt:phaca:phaet:phane:phano:pharo:phasm:pheal:phebe:pheny:phies:phill:phyma:physa:phoby:phoma:phora:phose:phoss:phren:piaba:piala:piast:picae:picea:pyche:pichi:picry:picus:pidan:piest:piete:pigly:pikel:pikle:pylar:pylic:pilin:pilmy:pilon:piman:pinal:pinax:pinda:pindy:piner:pinge:pinic:pinyl:pynot:pinte:pinus:piotr:pioxe:pipey:pipid:pipil:pipra:pirny:pirol:pirot:pyrus:pisay:pisan:pishu:pisum:pitau:piuri:piute:piwut:plaga:plang:plass:plato:plaud:pleck:pleis:pleny:pliny:pliss:ploce:plock:plomb:plote:plott:plotx:plout:pluma:plupf:pneum:pobby:pocan:poche:pocul:pocus:podos:poggy:pohna:poire:pokan:pokom:polab:polit:polki:poloi:pomak:pombo:pomey:pomel:pomme:pompa:ponca:pondy:pondo:ponja:ponos:ponto:pooli:pooly:pooty:popal:popie:poret:porgo:poria:poros:porry:porte:porto:porus:posca:possy:poter:potti:potus:pouce:poucy:pousy:prado:prahm:praya:prand:prela:prepd:prepg:prepn:preta:preux:priam:prich:pridy:prine:prius:proal:prodd:propr:prote:prudy:psend:pshav:psize:pubal:pudda:puget:puggi:puist:pulex:pumex:punan:punct:pungi:pungy:punic:punkt:punta:punti:purau:purdy:purey:purga:purim:purre:purry:qatar:qiana:qiyas:quadi:quarl:quata:quauk:quave:quawk:qubba:queak:queal:queet:quegh:quelt:quent:querl:quica:quila:quink:quira:quirl:quito:quitu:quott:qurti:raash:rabal:rabin:rabot:radek:radly:raffe:rafik:rafty:raghu:rahul:raiae:rayan:rayat:rajab:rajiv:rakan:rakit:raman:rambo:ramed:ramex:rammi:ramon:ramta:ranal:randn:ranli:ranny:ranty:rapic:rasen:rason:rasty:ratti:ratwa:rauli:rawky:reaal:readl:reasy:reask:rebab:rebag:reban:rebed:rebeg:rebia:rebob:rebox:rebud:recip:recpt:redig:redue:redug:reese:reesk:refan:regel:reget:regga:regia:regin:regle:rehid:rehoe:reice:reich:reina:relap:reles:relig:relot:remop:remue:remus:rendu:reneg:renes:renet:renky:reown:repad:repas:repen:repew:repic:repry:reree:rerob:rerow:rerub:resex:restr:resue:resun:resup:retal:retan:retar:rethe:retin:retip:reuel:reune:revay:rever:rexen:rfree:rhamn:rheae:rheda:rheen:rheic:rhein:rhema:rhila:rhymy:rhina:rhoda:rhoeo:ribat:riche:ricky:riden:ryder:riffi:rigel:rilly:rimal:rimas:rimpi:rinch:rinde:ringe:ringy:rinka:ripal:ripup:risqu:rithe:ritsu:ritus:rizar:rober:robur:roche:rocta:rodge:rogan:rohan:rohob:rohun:royet:royou:rokee:rokey:roleo:rolfe:rollo:romic:rompy:rompu:ronco:ronga:ronni:rooed:rooti:roove:rosal:rosel:roter:rotge:rotse:rotta:rougy:rouky:rovet:rowet:rowte:rowty:roxie:rozum:ruach:rubia:rubor:rucky:rudge:ruely:rufus:ruman:rumex:runby:rundi:runer:runsy:rupie:rusin:rusky:rusot:rutch:rutic:rutyl:ruvid:saban:sabby:sabia:sabik:sably:sabzi:sacae:sacre:sacry:sacro:sadic:sadie:saeta:safar:safen:sagai:sagan:sagra:sahme:sayal:saidi:sayee:saify:saiid:saily:saimy:saiph:sairy:saite:saiva:sakel:sakha:salay:salar:salem:salma:salmo:salta:salud:salus:salva:salvy:samaj:samal:samir:samoa:sanai:sancy:sanct:sangu:sanit:sanka:sansi:santa:santy:sapek:sapin:sapit:saple:saqib:saraf:sarah:sarif:sarip:sarna:saron:sarpo:sarra:sarsa:sarsi:saruk:sarum:sasan:satan:saudi:sauld:saura:sauty:sauve:sawan:sawny:saxon:sazen:scalf:scalt:scalx:scalz:scarn:scase:scaul:scaum:scaut:scawd:scawl:scelp:schiz:schuh:scian:scyld:scind:sciot:scyth:sclat:sclav:sclaw:scler:scoad:scobs:scoke:scolb:scomm:scoon:scote:scott:scouk:scove:scovy:scrin:scrit:scroo:scruf:scult:sdump:sealy:seary:seave:seavy:sebat:secno:secos:secre:secus:sedat:seech:seege:seenu:seggy:segou:sehyo:seige:sekar:seker:selli:selly:semel:semic:semih:senal:senam:sence:senci:senex:senit:senso:sensu:seora:seoul:seppa:septi:seqed:sequa:seqwl:serab:serau:seraw:sereh:sergt:serio:sermo:serta:serut:sesia:sesma:sesti:seugh:sevum:sexly:sfoot:sfree:shado:shahi:shaka:shaku:shane:shang:shant:shapy:shari:shaup:shawy:shean:sheat:shedu:shela:sheld:shema:shemu:sheng:sheth:shewa:shiah:shyam:shice:shick:shide:shiko:shilf:shilh:shina:shipt:shirl:shisn:shita:shivy:shluh:shoad:shode:shoya:shole:shona:shood:shooi:shoop:shoor:shrab:shraf:shrag:shram:shrap:shree:shrip:shrog:shuba:shuff:shune:shure:shurf:siafu:sibby:sicca:sicel:sicer:sicle:sidia:sidth:siena:siest:sieva:sievy:sifac:syftn:sikar:siket:sikhs:sikra:silas:sylid:silyl:simal:simia:simon:sinae:sinal:singh:sinic:sinon:synop:sinto:sintu:sioux:siper:sipid:sirex:syria:sirki:sirky:syrma:sirop:siros:syrus:sisel:sysin:sissu:sitao:sitch:sitio:sitta:siums:siusi:sivan:siwan:sizal:sjaak:skaff:skair:skeat:skeeg:skeel:skeif:skemp:skere:skete:skewy:skewl:skice:skidi:skift:skiis:skime:skirp:skiwy:skoot:skout:skulp:skuse:slait:slaky:slamp:slape:slare:slask:slath:slaum:slavi:slavs:sleck:slent:slete:slich:sline:slirt:slite:sloat:slock:sloka:sloke:slone:slonk:slorp:slote:slour:sluer:sluig:smeer:smeth:smich:smift:smily:smyth:smook:smoos:smous:smrgs:smurr:smuse:snaff:snape:snapy:snast:snerp:snyed:snirl:snite:snitz:snivy:snock:snoga:snork:snowl:snurl:snurp:snurt:soaky:soapi:soary:sobby:socht:socii:socky:sodio:sofer:sofia:soget:soign:soyot:solay:solea:solen:solfa:solio:solod:somal:somet:somma:somne:soncy:songy:songo:sonja:sooke:soony:soord:sorty:sorva:sosia:sosie:soter:sotho:sotie:sotik:souly:soulx:soulz:sourd:soury:sowan:sowel:sowte:sozly:spaad:spack:spaid:spaik:spair:spann:spary:sparm:spass:spath:spave:spece:speen:spekt:spere:spete:sphex:spyer:spira:spiro:spise:spiss:splad:splet:spock:spoky:spole:spong:spret:sprot:spuke:spung:spurl:spute:squam:squet:squin:sruti:ssing:ssort:sstor:staab:stacc:stacy:staia:stail:staio:stary:starw:stauk:staup:stawn:stchi:stech:stegh:steid:stema:steng:steri:sterk:stero:stert:steve:styan:styca:stife:stine:stion:stipo:stite:stith:stoff:stoga:stola:stold:stoof:stoon:stoot:stopa:stosh:stram:stree:strey:stret:strid:strit:strix:strom:strub:strue:struv:stubb:stube:stupp:sturk:stuss:suade:suant:subch:subet:subra:subst:sudan:suddy:sudes:sudic:sudra:sueve:suevi:sugat:sugih:sugis:suina:suine:suyog:suist:suity:sukey:sulea:sulka:sulla:sumak:sumen:sumpt:sunil:sunni:suomi:supai:suppl:supvr:surya:surma:susan:susie:sussy:susso:suzan:svelt:swape:swati:swazi:swego:swelp:swerd:swick:swimy:swipy:swird:swonk:swosh:swure:tabac:tabel:tabet:tabic:tabog:tabut:tacca:tachi:tacso:tagal:tagel:tagua:tagus:tahar:tahil:tahin:tahua:taich:tayer:tayir:taily:taino:taipi:taipo:tairn:taise:tajik:takao:takar:taked:takyr:talao:talck:taled:talio:talis:talli:tamas:tambo:tamil:tampa:tamul:tamus:tanak:tanan:tandy:tanha:tania:tanya:tanny:tanoa:tanzy:tapia:tapit:tapoa:tapul:taqua:taraf:tarai:tarau:tarde:tarea:tareq:tarfa:tarie:tarin:tarmi:tarri:tarse:tarte:tarve:tasco:tatoo:tatta:taula:tauli:taupo:tauri:tavoy:tawgi:tawpi:tawpy:taxin:taxir:tazia:tcawi:tchai:tchwi:teaey:teaer:teart:teasy:teaty:teave:tebet:tecla:tecon:tecum:tedge:teest:teety:tehee:teian:teise:tejon:tekya:tekke:telar:teleg:telei:telyn:tellt:teman:tembe:tembu:temin:temne:tempe:tenai:tendo:tenez:tengu:tenio:tenla:tennu:tenso:tepor:terap:tereu:terma:terna:terre:terri:terzo:tetch:tetel:teton:tetty:tetum:tewer:tewly:texan:thais:thala:tharf:thatd:thatn:thats:thave:thawn:theah:theat:theer:theet:theyd:theol:theor:theos:thyms:thirt:thisn:thoke:thone:thoom:thore:thort:thowt:thram:thrap:thrax:throu:thruv:thuan:thule:thulr:thund:thung:thuoc:thurm:thurt:tiang:tibby:tibbu:tibey:tiber:tibet:ticer:tyche:ticul:tydie:tiens:tiffy:tigre:tigua:tyigh:tyken:tikor:tikur:tilda:tilia:tilty:tylus:timar:timbe:timet:timne:timor:tingi:tinne:tinni:tinsy:tinta:typer:typha:tipit:tiple:tipup:tiraz:tirer:tirma:tirve:tisar:tisic:tissu:tyste:titar:titus:tiver:tiwaz:tlaco:tmema:todea:todus:toher:toist:toity:tokyo:toldo:tomas:tombe:tomin:tonna:tonto:toona:toosh:topas:topau:topia:topog:topsy:topsl:toral:tored:toret:torma:torve:tosca:totum:tould:tourn:tourt:toust:tovah:tovar:tovet:towai:towan:toxon:tozee:tozer:trabu:tracy:trady:trama:trame:trapa:trasy:treas:treey:trent:trias:trica:trifa:triga:tryms:trina:trink:trypa:tripl:tript:trixy:troca:troch:troco:troft:troic:troot:troue:trouv:trubu:trudy:truff:trush:tsere:tsine:tsuga:tsuma:tuant:tuarn:tubba:tubig:tubik:tucky:tucum:tudel:tudor:tufan:tugui:tukra:tulsa:tumli:tunal:tunca:tunga:tungo:tunis:tunka:tunna:turco:turgy:turio:turki:turma:turse:turus:turvy:tushs:tutin:tutly:tutto:tuzla:twait:twale:twalt:twana:twant:tweag:tweeg:tweil:twere:twick:twint:twirk:twoes:tzaam:uayeb:ualis:uaupe:uchee:uckia:udasi:udell:udish:uglis:ugric:uhllo:uigur:uinal:uinta:ulcus:uller:ulmic:ulmus:uloid:uluhi:ululu:ulvan:umaua:umest:umiri:umist:ummps:umset:unact:unadd:unami:unamo:unark:unbay:unbet:unbit:unbog:unboy:unbow:unbud:uncow:unden:undye:undig:undim:undog:undon:undry:undub:uneye:unfar:unfew:unfur:ungka:unhad:unhap:unhex:unhid:unhit:unhot:uniat:unice:uninn:unism:unist:unius:unkey:unken:unkin:unlap:unlax:unlie:unmad:unnet:unnew:unode:unoil:unold:unona:unorn:unown:unpot:unput:unray:unram:unrow:unrra:unrun:unsad:unshy:unsin:unsly:unson:unsty:unsun:untap:untar:untop:unurn:unuse:unwan:unwax:unweb:unwig:unwry:unzen:upaya:uparm:upbay:upbar:upbid:upbuy:upcry:upcut:upeat:upfly:upget:upher:upleg:upmix:uppop:uprid:uprip:upsit:upsun:upsup:upupa:upway:upwax:urbic:ureid:uriah:urian:uriel:urlar:urled:urnae:ursal:ursuk:ursus:urucu:urutu:usant:usara:usent:ushak:ushas:usine:uskok:usnic:usnin:uster:utchy:utees:utend:utero:uther:utick:utrum:utsuk:uvala:uvate:uviol:uvito:uvres:uvrou:uvver:uzara:uzbak:uzbeg:uzbek:vache:vacoa:vacuo:vadim:vadis:vagas:vajra:vakia:valew:valyl:valmy:valsa:valva:vamos:vance:vanir:vappa:varda:vario:vates:vaudy:vedda:vedet:vedic:vedro:vefry:vejoz:velal:velic:velte:vened:venie:venta:vepse:veray:verby:verde:verdi:verey:verek:vergi:verpa:verre:versa:verty:verus:veter:vetus:veuve:viage:vyase:vibix:vicia:vicki:vicky:vicua:vicus:vidya:vidry:vidua:vijay:vijao:ville:vimpa:vince:vinci:vinea:vinet:vingt:vinny:vinod:vinta:vinum:virgo:viron:vitis:vitra:vitry:viuva:vivax:vivek:vivos:vivre:vizzy:vlach:vobis:vocat:voder:vodum:vogul:volga:volow:volto:voraz:votal:vouli:voust:vucom:waapa:waasi:wabby:wadna:waefu:wafty:waget:waggy:wayao:waily:wayne:waird:waise:wakan:wakhi:wakif:wakon:walsh:walth:wamel:wandy:wanga:wanny:wappo:warch:warly:warnt:warri:warse:warth:warua:warve:wasat:wasco:wasel:washo:wasir:wasnt:wasty:wauch:wauns:waura:wauve:wawah:weaky:weeda:weent:weesh:weety:weeze:wefty:wehee:weism:wekau:wemmy:wende:wendi:wendy:weren:weste:westy:wevet:wezen:whaly:whalm:whalp:whame:whamp:whand:whank:wharl:wharp:whart:whase:whatd:whauk:wheam:wheem:wheer:whein:wheki:whewl:whewt:whiba:whick:whill:whils:whing:whisp:wholl:whone:whory:whsle:whuff:whulk:whush:whute:wicht:wierd:wiyat:wiyot:willi:windz:winer:winly:wynne:wiros:wisen:wishy:wyson:wisse:wiste:wysty:witen:wyver:wlity:wloka:woady:wocas:woden:wodgy:wogul:woibe:wokas:woldy:wolof:wonna:woolf:woomp:wopsy:worky:wouch:wough:wramp:wreat:wride:writh:wrive:wudge:wunna:wurly:wuzzy:xenyl:xenos:xeres:xicak:xylia:xylon:xinca:xyrid:xyris:xurel:xviii:xxiii:zabti:zayat:zakah:zande:zapas:zapus:zaque:zeism:zeiss:zeist:zemmi:zemni:zerma:zhmud:ziara:ziega:zihar:zymin:zimme:zimmi:zimmy:zirai:zirak:zizia:zmudz:zogan:zohak:zokor:zolle:zonar:zonic:zonta:zoona:zoque:zosma:zucco:zudda:zunis:zhuzh:queyu:quouk:iiwis:riqqs:wizzo:aggag:piqui:nonno:pfftt:birzz:afizz:hukou:maqam:pyuff:ryijy:glugg:guggl:lollo:nazzy:nunus:queek:ryiji:yeeek:bikky:oojah:popup:sezes:yoyos:bappu:koiwi:wuffs:annan:hogoh:hoogo:puppa:quoys:yayas:zhush:akoja:asada:jetee:jitis:jollo:lezzo:mokky:puttu:quaws:queem:wirri:yonny:bibis:kikay:mivvy:mutum:muvva:nonna:yoppo:agogo:ajupa:akara:haham:hooha:mezza:phooo:zamak:abjad:accha:fixie:goodo:mazak:mimis:nonan:obbos:pavvy:queck:quork:skeez:skofs:yohah:didis:dukun:jessy:mukim:pequi:phooh:upful:veves:zoomy:aapas:mixis:mmkay:pirri:puuko:yadda:zikrs:addas:akoya:kajal:makaf:mamak:mazas:momos:ooaas:oseys:reeze:unkut:akker:audax:dexys:kilig:meeja:pubby:rakki:ruffy:tithi:xolos:yaass:effer:kwink:mazac:popos:quank:yohay:zamac:zawns:ammas:appam:bamma:jakie:mundu:nyuze:oozie:opihi:pakki:rikka:sinsi:unsub:zitty:bazas:bball:fabbo:jawns:kapha:mebbe:mixie:modom:muruk:nisin:nyung:phynx:quabs:queso:quibs:tomoz:vieux:abjud:bippy:cucks:ebene:hifis:iddah:keaki:kitke:mumph:razai:sabji:sposo:gubba:janky:jitty:kombi:kwaai:kyudo:makai:munjs:najib:nouja:quete:quois:soxes:sukis:affly:dooky:jhils:majat:mbube:nevvy:nyong:ofuro:ongon:oozle:qualy:sayas:scifi:skeev:squee:veggo:wahay:zarda:basas:boutu:fromm:innie:knoop:macca:michi:phutu:poopa:steez:yokeg:addra:agidi:benji:dadla:evegs:layby:msasa:ngaka:noone:omiai:ooyah:pakua:papad:qipao:quorl:robbo:rosso:sulls:tikia:vacay:zamis:afanc:attas:froyo:jings:laddu:liwaa:mieux:nazar:ngege:noggy:oafos:pakay:pollo:povos:riffy:syeds:usens:voici:wowse:yopos:aflap:agbas:aiyah:ansas:appts:boyey:eever:firni:iddut:idlis:kalua:lolos:maums:minxy:mompe:mvuli:ngoni:njirl:nujol:nurtz:ownio:ptype:pumpy:rasas:rikwa:stogs:vacas:yandy:yarra:akoia:akses:alata:bantz:boyly:fogos:gadgy:maddy:maumy:mawla:mazar:meums:nexin:ommin:oxeas:puzta:raffy:rokos:runup:sigri:spads:tawaf:urupa:zeera:aiyoo:baaps:ebike:jeera:mahem:mawps:mindi:mingi:mollo:oleyl:oyama:putza:rafiq:skroo:vadas:vatha:vatje:wadas:zayde:zinos:advts:aymag:bammy:cudda:exier:imlis:kuyas:nakas:omdda:opgaf:pavas:plexi:sahab:sibia:takht:titin:udyog:voxes:abaht:baozi:howto:jaune:karai:kiasu:marma:mizes:munja:namak:oking:paddo:pocho:quies:regex:rejas:srsly:abeys:bayas:bdays:blonx:dappy:dawgs:dowfs:hogos:kunds:memic:mokus:osars:papri:peeky:pekau:psias:qilas:salas:titir:bicky:doofs:epene:hoach:jatis:khana:kipah:mauka:migma:mobos:mocky:mudim:nabam:nigga:niopo:nioza:okole:ooids:othyl:pittu:rakhi:texta:yowsa:aixes:binky:bodoh:bomoh:bukos:chiti:fonio:gokes:havan:jamun:kutai:macka:majoe:makee:manzo:neefs:omees:opzit:pepon:plups:poohy:poufy:saddy:seppo:sotto:stucs:vatas:wheek:winky:awari:bagua:basha:biris:caffe:chava:ebena:kalas:khyal:knowd:krump:laggy:makan:mapou:mauvy:noncy:noxas:ommel:oopsy:peple:pulut:rawks:seths:adhoc:adraw:aimag:allus:bewdy:choss:fidus:ganks:hafta:halsh:mvula:natya:neebs:nimby:nully:oligo:oskin:paaho:pacai:peevo:ryugi:awkin:dadis:dbags:dowak:fnarr:fulla:juste:kingy:kipas:knoud:lacka:meeps:miais:moloi:mooni:mutti:nanti:novio:nuevo:nuses:odums:okies:pasag:pekea:piais:pooay:prook:purps:ranns:rosps:rozes:schif:valli:bamas:bruvs:cheeb:dwamy:garba:goomy:gurks:jorts:khads:kheer:liwas:lokum:mokey:mucko:nawal:noois:noove:paips:pleep:rully:sabos:towno:vacui:vanga:yokan:zaide:agals:assed:doppe:garri:imbos:jaleo:kwirl:meake:mocos:mudif:oldly:pamby:pheme:plips:pooey:prowk:reerd:segas:skobe:smize:spesh:sposa:stans:stush:tombo:vygie:washi:weeis:yagna:actas:adats:adyts:badam:flowy:ginga:hapas:jolie:koris:kreef:laccy:mamil:meism:meteg:misls:momie:naats:niess:padas:raddi:samfi:semas:statu:sunts:swoll:thawt:vinho:addin:buded:chaap:hevel:howay:lesos:maban:mafts:mirrs:mooey:nasis:natak:ninta:nokes:oxmen:pekid:phubs:pirrs:powis:praps:rymer:teets:aiyoh:arbah:dictu:eleet:fisho:hibas:kipsy:laarf:lappy:mbuga:mikos:mirrl:molos:moufs:neche:ondol:origo:padam:panny:pubsy:raddy:rists:rosco:tadah:tomme:ubacs:unply:womas:baiks:bolks:ekdam:fundo:glatt:gypes:khirs:ladoo:lilty:lises:mbari:moaky:namad:nanto:nmoli:noeme:noshi:oxine:packy:pahus:pewed:pivos:popia:raads:rossa:rotto:sevak:sexor:ubity:wanta:wifts:wunga:yatra:yeuch:abeng:achey:amari:botos:buyin:ebank:glowy:jacet:kunas:malai:mazet:mikan:mobee:moruk:mtepe:mungi:nains:nanty:nowds:omdas:onsen:owari:pakul:plung:revow:rouks:todos:venti:ylids:abeat:ecigs:funda:funsy:geasa:mirkn:mitie:ngram:omdeh:omuls:panks:persp:reeaf:tasca:twonk:gyver:haugo:kreen:lokey:mivey:moana:nason:nefie:neski:nrtya:perfs:phobe:poalo:podus:raake:ruchy:selky:titas:unagi:wythe:abius:adoon:aksed:birze:celly:chiva:cobot:conex:damna:gnapi:goves:imagy:kideo:lacky:marua:maula:mesyl:miyas:munds:nmols:paipe:palak:piuma:pizer:posol:powsy:puyas:raksi:ralli:ryoti:smick:tarka:zorse:bomor:burra:chiko:dahis:ducti:dynos:fugis:funts:gordo:goved:haats:madal:makie:mitta:nerfs:nrtta:nudgy:nyams:octli:ouche:pegos:piyut:reems:rolly:ronuk:tarzy:vibed:werfs:alcea:hydel:lapas:litie:maedi:meiko:mgals:miraa:nitto:omdah:oueds:peake:plavs:pshut:pungo:raiah:rawdy:renks:roers:salis:twocs:ulmos:ustad:vaids:volke:wahey:abeer:bodgy:bruck:drock:kanal:kcals:mosto:murgi:nante:nasho:olehs:pedos:pirks:pitsu:pligs:plowt:pluds:ponor:proby:prora:razet:roufs:sagar:subak:venas:yolps:aftos:amaro:bilal:epena:fauch:karee:larga:lolas:mados:mahis:malky:mbars:meaks:moker:neant:nivas:nsima:nyuse:phwat:pinds:powie:remou:saunf:skerm:sorbi:thots:tutes:vobla:ylide:agrum:bagsy:bihon:boeti:botew:bruhs:flyin:gorbs:kriol:madar:myons:naibs:nougs:pokit:powlt:tauty:untag:chedi:divey:efits:galia:garam:haldi:handi:hella:lawsy:mbila:mecha:mersk:mrads:mugos:natto:orful:ourey:pelog:preke:rafee:rotty:rypin:serir:terza:tosyl:traga:adlib:allin:colle:fedai:ghusl:gulab:kimet:loled:mards:mence:mulai:musee:mysie:napoh:nemic:poyas:rythe:sanad:sarir:selfy:shiok:shonk:tropo:yorga:cheba:hundo:metta:nevis:nodum:owers:pavon:ploot:pomas:punim:rasam:recep:scobe:shoud:tinto:tirth:unios:verba:bevan:brahs:glamp:inros:larfs:mahrs:manoa:mants:methi:mocus:murgh:netta:peely:potro:recue:reely:roaky:romer:rowns:steik:tasto:tragu:useta:vadge:visna:aburn:acral:alumy:chaat:deoch:dioch:dolee:ficta:greps:groms:lagar:merds:moeni:nagar:pasar:pouis:rosha:vatos:acene:bions:copha:detag:girlf:goaft:ioras:knule:malae:meids:mocap:mogas:moree:morgy:myals:negri:nurts:oslin:pesch:pirre:pring:rohus:tulps:verte:alurk:dicto:furos:mandy:mapes:maran:ments:methy:muiry:naved:ondes:poete:pogue:potai:prags:preem:putas:putos:rhabd:skarn:tansu:toidy:unleg:vardo:adorb:afion:apols:buena:crins:filon:hipes:migod:noema:oarer:pavie:pinga:pluke:pluty:robug:baons:budes:cupro:decim:dente:gunas:haere:hiped:hotis:huies:novia:opery:osetr:pects:pieds:pneus:rubio:aleem:andic:asity:facey:falsy:inver:mirch:mutas:naids:neosa:pedon:pelch:photy:plaig:proot:pryan:redif:sarvo:auges:cryne:darls:hotte:mitas:nages:nicey:nused:panch:pelus:pruny:purao:reard:tiefs:borek:cando:canti:ladee:mirah:mirls:moais:monpe:netas:nilas:noias:notam:ornee:pahit:parms:plene:plish:rengs:roake:scorp:tabls:talik:vlast:whies:alims:herps:lepak:mesca:mogue:niced:picey:picon:radgy:radif:rayls:recte:repun:rigmo:rugas:suona:suped:baloi:calle:dalek:maunt:pecia:peent:phota:reups:tards:trags:algos:birdo:bleah:galis:mailo:masur:mbret:moals:moany:naieo:planh:pleno:pruno:raike:rapee:ruban:bitey:derpy:drapy:grats:legno:mesia:misal:naios:opsat:opsit:orped:planc:ptish:puros:rioty:sidey:socia:eagly:ecash:fales:lowen:mitry:modin:musta:outie:oware:pinol:relos:runos:sevir:snive:alios:boteh:dinlo:libor:meils:nivel:pelsh:perls:permy:rheid:tante:arnis:batos:boaty:masut:medin:murth:neato:nelia:parmo:putin:rodny:tabos:ahole:bacne:eolid:frais:menil:molue:perne:poena:resol:aborn:goray:misto:mitey:moley:neram:nosir:porth:rames:ramsh:reing:roady:acoel:heaty:margo:pitso:preak:reine:corda:flore:noust:parcs:peisy:peola:rapso:reput:rimon:ecard:eiron:moars:perae:plaur:porey:trapo:albid:macte:nital:piley:rapin:resam:litem:maril:narod:nipet:regot:roany:laide:mogra:molie:morah:oiran:parid:plets:ploit:seter:shtar:amore:minse:pince:prian:puter:doble:feard:frita:morna:olate:pesta:riato:danse:mante:naice:ordie:plein:plute:rando:ranes:scire:seria:belit:crema:orbat:ruice:ruote:labne:oilet:panir:plore:poset:poste:retam:tomen:turon:bilat:bolet:laned:mogar:ramse:runce:rione:balot:rince:snied:dolie:raith:rouet:crein:eatin:frite:ranse:shart:raned:repat:sater:tiare"
    var Oa = guessList.split(":"),
        Ma = ansList.split(":"),
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
    rs.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: calc(100% - var(--header-height));\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-family: \'nyt-karnakcondensed\';\n    font-weight: 700;\n    font-size: 37px;\n    line-height: 100%;\n    letter-spacing: 0.01em;\n    text-align: center;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n  menu-left {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    align-items: center;\n  }\n  menu-right {\n    display: inline-block;\n  }\n  #nav-button {\n    padding-top: 2px;\n  }\n\n  @media (min-width: 415px) {\n    header {\n      padding: 0px 16px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n  <header>\n  <div class="menu-left" style="display: flex;">\n    <button id="nav-button" class="icon" aria-label="Navigation menu. Click for links to other NYT Games and our Privacy Policy." tabindex="-1">\n      <nav-icon></nav-icon>\n    </button>\n    <button id="help-button" class="icon" aria-label="Help" tabindex="-1">\n      <game-icon icon="help"></game-icon>\n    </button>\n  </div>\n  <div class="title">\n    Masochistle\n  </div>\n  <div class="menu-right">\n    <button id="statistics-button" class="icon" aria-label="Statistics" tabindex="-1">\n      <game-icon icon="statistics"></game-icon>\n    </button>\n    <button id="settings-button" class="icon" aria-label="Settings" tabindex="-1">\n      <game-icon icon="settings"></game-icon>\n    </button>\n  </div>\n</header>\n    <div id="game">\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-nav-modal></game-nav-modal>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
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
    Bs.innerHTML = '\n  <div class="countdown">\n    <h1>Next MASOCHISTLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
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
                                    l = "MASOCHISTLE ".concat(s);
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
    Ks.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>MASOCHISTLE</strong> in six tries and have multiple mental breakdowns which eventually leads to counts of mass murder.</p>\n      <p>Each guess must be a valid five-letter word. Hit the enter button to submit your soul to this game which eventually will lead into spiralling insanity and into mass murder.</p>\n      <p>After each guess, the color of the tiles will change to show how mass murder is the correct option.</p>\n <p>This makes anything that resembles a word a possible answer. In all seriousness, the answers are exclusively the NYT thousand word expansion and words_alpha, both of which have extremely obscure words which will eventually lead to committing mass murder.</p>\n   <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new MASOCHISTLE will be available whenever!<strong></p>\n    </div>\n  </section>\n';
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
