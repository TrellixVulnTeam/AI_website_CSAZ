! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t, n) {
    (function (t, n) {
        ! function () {
            "use strict";

            function r(e, t, n, r, i, o) {
                return {
                    tag: e,
                    key: t,
                    attrs: n,
                    children: r,
                    text: i,
                    dom: o,
                    domSize: void 0,
                    state: void 0,
                    _state: void 0,
                    events: void 0,
                    instance: void 0,
                    skip: !1
                }
            }
            r.normalize = function (e) {
                return Array.isArray(e) ? r("[", void 0, void 0, r.normalizeChildren(e), void 0, void 0) : null != e && "object" != typeof e ? r("#", void 0, void 0, !1 === e ? "" : e, void 0, void 0) : e
            }, r.normalizeChildren = function (e) {
                for (var t = 0; t < e.length; t++) e[t] = r.normalize(e[t]);
                return e
            };
            var i = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
                o = {},
                a = {}.hasOwnProperty;

            function u(e) {
                for (var t in e)
                    if (a.call(e, t)) return !1;
                return !0
            }

            function l(e) {
                var t, n = arguments[1],
                    l = 2;
                if (null == e || "string" != typeof e && "function" != typeof e && "function" != typeof e.view) throw Error("The selector must be either a string or a component.");
                if ("string" == typeof e) var c = o[e] || function (e) {
                    for (var t, n = "div", r = [], a = {}; t = i.exec(e);) {
                        var u = t[1],
                            l = t[2];
                        if ("" === u && "" !== l) n = l;
                        else if ("#" === u) a.id = l;
                        else if ("." === u) r.push(l);
                        else if ("[" === t[3][0]) {
                            var c = t[6];
                            c && (c = c.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), "class" === t[4] ? r.push(c) : a[t[4]] = "" === c ? c : c || !0
                        }
                    }
                    return r.length > 0 && (a.className = r.join(" ")), o[e] = {
                        tag: n,
                        attrs: a
                    }
                }(e);
                if (null == n ? n = {} : ("object" != typeof n || null != n.tag || Array.isArray(n)) && (n = {}, l = 1), arguments.length === l + 1) t = arguments[l], Array.isArray(t) || (t = [t]);
                else
                    for (t = []; l < arguments.length;) t.push(arguments[l++]);
                var s = r.normalizeChildren(t);
                return "string" == typeof e ? function (e, t, n) {
                    var i, o, l = !1,
                        c = t.className || t.class;
                    if (!u(e.attrs) && !u(t)) {
                        var s = {};
                        for (var f in t) a.call(t, f) && (s[f] = t[f]);
                        t = s
                    }
                    for (var f in e.attrs) a.call(e.attrs, f) && (t[f] = e.attrs[f]);
                    for (var f in void 0 !== c && (void 0 !== t.class && (t.class = void 0, t.className = c), null != e.attrs.className && (t.className = e.attrs.className + " " + c)), t)
                        if (a.call(t, f) && "key" !== f) {
                            l = !0;
                            break
                        } return Array.isArray(n) && 1 === n.length && null != n[0] && "#" === n[0].tag ? o = n[0].children : i = n, r(e.tag, t.key, l ? t : void 0, i, o)
                }(c, n, s) : r(e, n.key, n, s)
            }
            l.trust = function (e) {
                return null == e && (e = ""), r("<", void 0, void 0, e, void 0, void 0)
            }, l.fragment = function (e, t) {
                return r("[", e.key, e, r.normalizeChildren(t), void 0, void 0)
            };
            var c = l;
            if ((s = function (e) {
                if (!(this instanceof s)) throw new Error("Promise must be called with `new`");
                if ("function" != typeof e) throw new TypeError("executor must be a function");
                var n = this,
                    r = [],
                    i = [],
                    o = c(r, !0),
                    a = c(i, !1),
                    u = n._instance = {
                        resolvers: r,
                        rejectors: i
                    },
                    l = "function" == typeof t ? t : setTimeout;

                function c(e, t) {
                    return function o(c) {
                        var s;
                        try {
                            if (!t || null == c || "object" != typeof c && "function" != typeof c || "function" != typeof (s = c.then)) l(function () {
                                t || 0 !== e.length || console.error("Possible unhandled promise rejection:", c);
                                for (var n = 0; n < e.length; n++) e[n](c);
                                r.length = 0, i.length = 0, u.state = t, u.retry = function () {
                                    o(c)
                                }
                            });
                            else {
                                if (c === n) throw new TypeError("Promise can't be resolved w/ itself");
                                f(s.bind(c))
                            }
                        } catch (e) {
                            a(e)
                        }
                    }
                }

                function f(e) {
                    var t = 0;

                    function n(e) {
                        return function (n) {
                            t++ > 0 || e(n)
                        }
                    }
                    var r = n(a);
                    try {
                        e(n(o), r)
                    } catch (e) {
                        r(e)
                    }
                }
                f(e)
            }).prototype.then = function (e, t) {
                var n, r, i = this._instance;

                function o(e, t, o, a) {
                    t.push(function (t) {
                        if ("function" != typeof e) o(t);
                        else try {
                            n(e(t))
                        } catch (e) {
                            r && r(e)
                        }
                    }), "function" == typeof i.retry && a === i.state && i.retry()
                }
                var a = new s(function (e, t) {
                    n = e, r = t
                });
                return o(e, i.resolvers, n, !0), o(t, i.rejectors, r, !1), a
            }, s.prototype.catch = function (e) {
                return this.then(null, e)
            }, s.resolve = function (e) {
                return e instanceof s ? e : new s(function (t) {
                    t(e)
                })
            }, s.reject = function (e) {
                return new s(function (t, n) {
                    n(e)
                })
            }, s.all = function (e) {
                return new s(function (t, n) {
                    var r = e.length,
                        i = 0,
                        o = [];
                    if (0 === e.length) t([]);
                    else
                        for (var a = 0; a < e.length; a++) ! function (a) {
                            function u(e) {
                                i++, o[a] = e, i === r && t(o)
                            }
                            null == e[a] || "object" != typeof e[a] && "function" != typeof e[a] || "function" != typeof e[a].then ? u(e[a]) : e[a].then(u, n)
                        }(a)
                })
            }, s.race = function (e) {
                return new s(function (t, n) {
                    for (var r = 0; r < e.length; r++) e[r].then(t, n)
                })
            }, "undefined" != typeof window) {
                void 0 === window.Promise && (window.Promise = s);
                var s = window.Promise
            } else if (void 0 !== n) {
                void 0 === n.Promise && (n.Promise = s);
                s = n.Promise
            }
            var f = function (e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return "";
                var t = [];
                for (var n in e) r(n, e[n]);
                return t.join("&");

                function r(e, n) {
                    if (Array.isArray(n))
                        for (var i = 0; i < n.length; i++) r(e + "[" + i + "]", n[i]);
                    else if ("[object Object]" === Object.prototype.toString.call(n))
                        for (var i in n) r(e + "[" + i + "]", n[i]);
                    else t.push(encodeURIComponent(e) + (null != n && "" !== n ? "=" + encodeURIComponent(n) : ""))
                }
            },
                d = new RegExp("^file://", "i"),
                g = function (e, t) {
                    var n, r = 0;

                    function i() {
                        var e = 0;

                        function t() {
                            0 == --e && "function" == typeof n && n()
                        }
                        return function n(r) {
                            var i = r.then;
                            return r.then = function () {
                                e++;
                                var o = i.apply(r, arguments);
                                return o.then(t, function (n) {
                                    if (t(), 0 === e) throw n
                                }), n(o)
                            }, r
                        }
                    }

                    function o(e, t) {
                        if ("string" == typeof e) {
                            var n = e;
                            null == (e = t || {}).url && (e.url = n)
                        }
                        return e
                    }

                    function a(e, t) {
                        if (null == t) return e;
                        for (var n = e.match(/:[^\/]+/gi) || [], r = 0; r < n.length; r++) {
                            var i = n[r].slice(1);
                            null != t[i] && (e = e.replace(n[r], t[i]))
                        }
                        return e
                    }

                    function u(e, t) {
                        var n = f(t);
                        return "" !== n && (e += (e.indexOf("?") < 0 ? "?" : "&") + n), e
                    }

                    function l(e) {
                        try {
                            return "" !== e ? JSON.parse(e) : null
                        } catch (t) {
                            throw new Error(e)
                        }
                    }

                    function c(e) {
                        return e.responseText
                    }

                    function s(e, t) {
                        if ("function" == typeof e) {
                            if (!Array.isArray(t)) return new e(t);
                            for (var n = 0; n < t.length; n++) t[n] = new e(t[n])
                        }
                        return t
                    }
                    return {
                        request: function (n, r) {
                            var f = i();
                            n = o(n, r);
                            var g = new t(function (t, r) {
                                null == n.method && (n.method = "GET"), n.method = n.method.toUpperCase();
                                var i = "GET" !== n.method && "TRACE" !== n.method && ("boolean" != typeof n.useBody || n.useBody);
                                "function" != typeof n.serialize && (n.serialize = "undefined" != typeof FormData && n.data instanceof FormData ? function (e) {
                                    return e
                                } : JSON.stringify), "function" != typeof n.deserialize && (n.deserialize = l), "function" != typeof n.extract && (n.extract = c), n.url = a(n.url, n.data), i ? n.data = n.serialize(n.data) : n.url = u(n.url, n.data);
                                var o = new e.XMLHttpRequest,
                                    f = !1,
                                    g = o.abort;
                                for (var m in o.abort = function () {
                                    f = !0, g.call(o)
                                }, o.open(n.method, n.url, "boolean" != typeof n.async || n.async, "string" == typeof n.user ? n.user : void 0, "string" == typeof n.password ? n.password : void 0), n.serialize !== JSON.stringify || !i || n.headers && n.headers.hasOwnProperty("Content-Type") || o.setRequestHeader("Content-Type", "application/json; charset=utf-8"), n.deserialize !== l || n.headers && n.headers.hasOwnProperty("Accept") || o.setRequestHeader("Accept", "application/json, text/*"), n.withCredentials && (o.withCredentials = n.withCredentials), n.headers) ({}).hasOwnProperty.call(n.headers, m) && o.setRequestHeader(m, n.headers[m]);
                                "function" == typeof n.config && (o = n.config(o, n) || o), o.onreadystatechange = function () {
                                    if (!f && 4 === o.readyState) try {
                                        var e = n.extract !== c ? n.extract(o, n) : n.deserialize(n.extract(o, n));
                                        if (o.status >= 200 && o.status < 300 || 304 === o.status || d.test(n.url)) t(s(n.type, e));
                                        else {
                                            var i = new Error(o.responseText);
                                            for (var a in e) i[a] = e[a];
                                            r(i)
                                        }
                                    } catch (e) {
                                        r(e)
                                    }
                                }, i && null != n.data ? o.send(n.data) : o.send()
                            });
                            return !0 === n.background ? g : f(g)
                        },
                        jsonp: function (n, l) {
                            var c = i();
                            n = o(n, l);
                            var f = new t(function (t, i) {
                                var o = n.callbackName || "_mithril_" + Math.round(1e16 * Math.random()) + "_" + r++,
                                    l = e.document.createElement("script");
                                e[o] = function (r) {
                                    l.parentNode.removeChild(l), t(s(n.type, r)), delete e[o]
                                }, l.onerror = function () {
                                    l.parentNode.removeChild(l), i(new Error("JSONP request failed")), delete e[o]
                                }, null == n.data && (n.data = {}), n.url = a(n.url, n.data), n.data[n.callbackKey || "callback"] = o, l.src = u(n.url, n.data), e.document.documentElement.appendChild(l)
                            });
                            return !0 === n.background ? f : c(f)
                        },
                        setCompletionCallback: function (e) {
                            n = e
                        }
                    }
                }(window, s),
                m = function (e) {
                    var t, n = e.document,
                        i = n.createDocumentFragment(),
                        o = {
                            svg: "http://www.w3.org/2000/svg",
                            math: "http://www.w3.org/1998/Math/MathML"
                        };

                    function a(e) {
                        return e.attrs && e.attrs.xmlns || o[e.tag]
                    }

                    function u(e, t, n, r, i, o, a) {
                        for (var u = n; u < r; u++) {
                            var c = t[u];
                            null != c && l(e, c, i, a, o)
                        }
                    }

                    function l(e, t, o, f, d) {
                        var g = t.tag;
                        if ("string" != typeof g) return function (e, t, n, r, o) {
                            if (s(t, n), null != t.instance) {
                                var a = l(e, t.instance, n, r, o);
                                return t.dom = t.instance.dom, t.domSize = null != t.dom ? t.instance.domSize : 0, p(e, a, o), a
                            }
                            return t.domSize = 0, i
                        }(e, t, o, f, d);
                        switch (t.state = {}, null != t.attrs && b(t.attrs, t, o), g) {
                            case "#":
                                return function (e, t, r) {
                                    return t.dom = n.createTextNode(t.children), p(e, t.dom, r), t.dom
                                }(e, t, d);
                            case "<":
                                return c(e, t, d);
                            case "[":
                                return function (e, t, r, i, o) {
                                    var a = n.createDocumentFragment();
                                    if (null != t.children) {
                                        var l = t.children;
                                        u(a, l, 0, l.length, r, null, i)
                                    }
                                    return t.dom = a.firstChild, t.domSize = a.childNodes.length, p(e, a, o), a
                                }(e, t, o, f, d);
                            default:
                                return function (e, t, i, o, l) {
                                    var c = t.tag,
                                        s = t.attrs,
                                        f = s && s.is,
                                        d = (o = a(t) || o) ? f ? n.createElementNS(o, c, {
                                            is: f
                                        }) : n.createElementNS(o, c) : f ? n.createElement(c, {
                                            is: f
                                        }) : n.createElement(c);
                                    t.dom = d, null != s && function (e, t, n) {
                                        for (var r in t) x(e, r, null, t[r], n)
                                    }(t, s, o);
                                    if (p(e, d, l), null != t.attrs && null != t.attrs.contenteditable) h(t);
                                    else if (null != t.text && ("" !== t.text ? d.textContent = t.text : t.children = [r("#", void 0, void 0, t.text, void 0, void 0)]), null != t.children) {
                                        var g = t.children;
                                        u(d, g, 0, g.length, i, null, o),
                                            function (e) {
                                                var t = e.attrs;
                                                "select" === e.tag && null != t && ("value" in t && x(e, "value", null, t.value, void 0), "selectedIndex" in t && x(e, "selectedIndex", null, t.selectedIndex, void 0))
                                            }(t)
                                    }
                                    return d
                                }(e, t, o, f, d)
                        }
                    }

                    function c(e, t, r) {
                        var i = {
                            caption: "table",
                            thead: "table",
                            tbody: "table",
                            tfoot: "table",
                            tr: "tbody",
                            th: "tr",
                            td: "tr",
                            colgroup: "table",
                            col: "colgroup"
                        }[(t.children.match(/^\s*?<(\w+)/im) || [])[1]] || "div",
                            o = n.createElement(i);
                        o.innerHTML = t.children, t.dom = o.firstChild, t.domSize = o.childNodes.length;
                        for (var a, u = n.createDocumentFragment(); a = o.firstChild;) u.appendChild(a);
                        return p(e, u, r), u
                    }

                    function s(e, t) {
                        var n;
                        if ("function" == typeof e.tag.view) {
                            if (e.state = Object.create(e.tag), null != (n = e.state.view).$$reentrantLock$$) return i;
                            n.$$reentrantLock$$ = !0
                        } else {
                            if (e.state = void 0, null != (n = e.tag).$$reentrantLock$$) return i;
                            n.$$reentrantLock$$ = !0, e.state = null != e.tag.prototype && "function" == typeof e.tag.prototype.view ? new e.tag(e) : e.tag(e)
                        }
                        if (e._state = e.state, null != e.attrs && b(e.attrs, e, t), b(e._state, e, t), e.instance = r.normalize(e._state.view.call(e.state, e)), e.instance === e) throw Error("A view cannot return the vnode it received as argument");
                        n.$$reentrantLock$$ = null
                    }

                    function f(e, t, n, r, i, o, a) {
                        if (t !== n && (null != t || null != n))
                            if (null == t) u(e, n, 0, n.length, i, o, a);
                            else if (null == n) v(t, 0, t.length, n);
                            else {
                                if (t.length === n.length) {
                                    for (var c = !1, s = 0; s < n.length; s++)
                                        if (null != n[s] && null != t[s]) {
                                            c = null == n[s].key && null == t[s].key;
                                            break
                                        } if (c) {
                                            for (s = 0; s < t.length; s++) t[s] !== n[s] && (null == t[s] && null != n[s] ? l(e, n[s], i, a, M(t, s + 1, o)) : null == n[s] ? v(t, s, s + 1, n) : d(e, t[s], n[s], i, M(t, s + 1, o), r, a));
                                            return
                                        }
                                }
                                if (r = r || function (e, t) {
                                    if (null != e.pool && Math.abs(e.pool.length - t.length) <= Math.abs(e.length - t.length)) {
                                        var n = e[0] && e[0].children && e[0].children.length || 0,
                                            r = e.pool[0] && e.pool[0].children && e.pool[0].children.length || 0,
                                            i = t[0] && t[0].children && t[0].children.length || 0;
                                        if (Math.abs(r - i) <= Math.abs(n - i)) return !0
                                    }
                                    return !1
                                }(t, n)) {
                                    var f = t.pool;
                                    t = t.concat(t.pool)
                                }
                                for (var h, w = 0, y = 0, x = t.length - 1, N = n.length - 1; x >= w && N >= y;) {
                                    if ((b = t[w]) !== (I = n[y]) || r)
                                        if (null == b) w++;
                                        else if (null == I) y++;
                                        else if (b.key === I.key) {
                                            var D = null != f && w >= t.length - f.length || null == f && r;
                                            y++, d(e, b, I, i, M(t, ++w, o), D, a), r && b.tag === I.tag && p(e, m(b), o)
                                        } else {
                                            if ((b = t[x]) !== I || r)
                                                if (null == b) x--;
                                                else if (null == I) y++;
                                                else {
                                                    if (b.key !== I.key) break;
                                                    D = null != f && x >= t.length - f.length || null == f && r;
                                                    d(e, b, I, i, M(t, x + 1, o), D, a), (r || y < N) && p(e, m(b), M(t, w, o)), x--, y++
                                                } else x--, y++
                                        } else w++, y++
                                }
                                for (; x >= w && N >= y;) {
                                    var b, I;
                                    if ((b = t[x]) !== (I = n[N]) || r)
                                        if (null == b) x--;
                                        else if (null == I) N--;
                                        else if (b.key === I.key) {
                                            D = null != f && x >= t.length - f.length || null == f && r;
                                            d(e, b, I, i, M(t, x + 1, o), D, a), r && b.tag === I.tag && p(e, m(b), o), null != b.dom && (o = b.dom), x--, N--
                                        } else {
                                            if (h || (h = g(t, x)), null != I) {
                                                var T = h[I.key];
                                                if (null != T) {
                                                    var j = t[T];
                                                    D = null != f && T >= t.length - f.length || null == f && r;
                                                    d(e, j, I, i, M(t, x + 1, o), r, a), p(e, m(j), o), t[T].skip = !0, null != j.dom && (o = j.dom)
                                                } else {
                                                    o = l(e, I, i, a, o)
                                                }
                                            }
                                            N--
                                        } else x--, N--;
                                    if (N < y) break
                                }
                                u(e, n, y, N + 1, i, o, a), v(t, w, x + 1, n)
                            }
                    }

                    function d(e, t, n, i, o, u, g) {
                        var M = t.tag;
                        if (M === n.tag) {
                            if (n.state = t.state, n._state = t._state, n.events = t.events, !u && function (e, t) {
                                var n, r;
                                null != e.attrs && "function" == typeof e.attrs.onbeforeupdate && (n = e.attrs.onbeforeupdate.call(e.state, e, t));
                                "string" != typeof e.tag && "function" == typeof e._state.onbeforeupdate && (r = e._state.onbeforeupdate.call(e.state, e, t));
                                if (!(void 0 === n && void 0 === r || n || r)) return e.dom = t.dom, e.domSize = t.domSize, e.instance = t.instance, !0;
                                return !1
                            }(n, t)) return;
                            if ("string" == typeof M) switch (null != n.attrs && (u ? (n.state = {}, b(n.attrs, n, i)) : I(n.attrs, n, i)), M) {
                                case "#":
                                    ! function (e, t) {
                                        e.children.toString() !== t.children.toString() && (e.dom.nodeValue = t.children);
                                        t.dom = e.dom
                                    }(t, n);
                                    break;
                                case "<":
                                    ! function (e, t, n, r) {
                                        t.children !== n.children ? (m(t), c(e, n, r)) : (n.dom = t.dom, n.domSize = t.domSize)
                                    }(e, t, n, o);
                                    break;
                                case "[":
                                    ! function (e, t, n, r, i, o, a) {
                                        f(e, t.children, n.children, r, i, o, a);
                                        var u = 0,
                                            l = n.children;
                                        if (n.dom = null, null != l) {
                                            for (var c = 0; c < l.length; c++) {
                                                var s = l[c];
                                                null != s && null != s.dom && (null == n.dom && (n.dom = s.dom), u += s.domSize || 1)
                                            }
                                            1 !== u && (n.domSize = u)
                                        }
                                    }(e, t, n, u, i, o, g);
                                    break;
                                default:
                                    ! function (e, t, n, i, o) {
                                        var u = t.dom = e.dom;
                                        o = a(t) || o, "textarea" === t.tag && (null == t.attrs && (t.attrs = {}), null != t.text && (t.attrs.value = t.text, t.text = void 0));
                                        (function (e, t, n, r) {
                                            if (null != n)
                                                for (var i in n) x(e, i, t && t[i], n[i], r);
                                            if (null != t)
                                                for (var i in t) null != n && i in n || ("className" === i && (i = "class"), "o" !== i[0] || "n" !== i[1] || N(i) ? "key" !== i && e.dom.removeAttribute(i) : D(e, i, void 0))
                                        })(t, e.attrs, t.attrs, o), null != t.attrs && null != t.attrs.contenteditable ? h(t) : null != e.text && null != t.text && "" !== t.text ? e.text.toString() !== t.text.toString() && (e.dom.firstChild.nodeValue = t.text) : (null != e.text && (e.children = [r("#", void 0, void 0, e.text, void 0, e.dom.firstChild)]), null != t.text && (t.children = [r("#", void 0, void 0, t.text, void 0, void 0)]), f(u, e.children, t.children, n, i, null, o))
                                    }(t, n, u, i, g)
                            } else ! function (e, t, n, i, o, a, u) {
                                if (a) s(n, i);
                                else {
                                    if (n.instance = r.normalize(n._state.view.call(n.state, n)), n.instance === n) throw Error("A view cannot return the vnode it received as argument");
                                    null != n.attrs && I(n.attrs, n, i), I(n._state, n, i)
                                }
                                null != n.instance ? (null == t.instance ? l(e, n.instance, i, u, o) : d(e, t.instance, n.instance, i, o, a, u), n.dom = n.instance.dom, n.domSize = n.instance.domSize) : null != t.instance ? (w(t.instance, null), n.dom = void 0, n.domSize = 0) : (n.dom = t.dom, n.domSize = t.domSize)
                            }(e, t, n, i, o, u, g)
                        } else w(t, null), l(e, n, i, g, o)
                    }

                    function g(e, t) {
                        var n = {},
                            r = 0;
                        for (r = 0; r < t; r++) {
                            var i = e[r];
                            if (null != i) {
                                var o = i.key;
                                null != o && (n[o] = r)
                            }
                        }
                        return n
                    }

                    function m(e) {
                        var t = e.domSize;
                        if (null != t || null == e.dom) {
                            var r = n.createDocumentFragment();
                            if (t > 0) {
                                for (var i = e.dom; --t;) r.appendChild(i.nextSibling);
                                r.insertBefore(i, r.firstChild)
                            }
                            return r
                        }
                        return e.dom
                    }

                    function M(e, t, n) {
                        for (; t < e.length; t++)
                            if (null != e[t] && null != e[t].dom) return e[t].dom;
                        return n
                    }

                    function p(e, t, n) {
                        n && n.parentNode ? e.insertBefore(t, n) : e.appendChild(t)
                    }

                    function h(e) {
                        var t = e.children;
                        if (null != t && 1 === t.length && "<" === t[0].tag) {
                            var n = t[0].children;
                            e.dom.innerHTML !== n && (e.dom.innerHTML = n)
                        } else if (null != e.text || null != t && 0 !== t.length) throw new Error("Child node of a contenteditable must be trusted")
                    }

                    function v(e, t, n, r) {
                        for (var i = t; i < n; i++) {
                            var o = e[i];
                            null != o && (o.skip ? o.skip = !1 : w(o, r))
                        }
                    }

                    function w(e, t) {
                        var n, r = 1,
                            i = 0;
                        e.attrs && "function" == typeof e.attrs.onbeforeremove && (null != (n = e.attrs.onbeforeremove.call(e.state, e)) && "function" == typeof n.then && (r++, n.then(o, o)));
                        "string" != typeof e.tag && "function" == typeof e._state.onbeforeremove && (null != (n = e._state.onbeforeremove.call(e.state, e)) && "function" == typeof n.then && (r++, n.then(o, o)));

                        function o() {
                            if (++i === r && (function e(t) {
                                t.attrs && "function" == typeof t.attrs.onremove && t.attrs.onremove.call(t.state, t);
                                if ("string" != typeof t.tag) "function" == typeof t._state.onremove && t._state.onremove.call(t.state, t), null != t.instance && e(t.instance);
                                else {
                                    var n = t.children;
                                    if (Array.isArray(n))
                                        for (var r = 0; r < n.length; r++) {
                                            var i = n[r];
                                            null != i && e(i)
                                        }
                                }
                            }(e), e.dom)) {
                                var n = e.domSize || 1;
                                if (n > 1)
                                    for (var o = e.dom; --n;) y(o.nextSibling);
                                y(e.dom), null == t || null != e.domSize || function (e) {
                                    return null != e && (e.oncreate || e.onupdate || e.onbeforeremove || e.onremove)
                                }(e.attrs) || "string" != typeof e.tag || (t.pool ? t.pool.push(e) : t.pool = [e])
                            }
                        }
                        o()
                    }

                    function y(e) {
                        var t = e.parentNode;
                        null != t && t.removeChild(e)
                    }

                    function x(e, t, r, i, o) {
                        var a = e.dom;
                        if ("key" !== t && "is" !== t && (r !== i || function (e, t) {
                            return "value" === t || "checked" === t || "selectedIndex" === t || "selected" === t && e.dom === n.activeElement
                        }(e, t) || "object" == typeof i) && void 0 !== i && !N(t)) {
                            var u = t.indexOf(":");
                            if (u > -1 && "xlink" === t.substr(0, u)) a.setAttributeNS("http://www.w3.org/1999/xlink", t.slice(u + 1), i);
                            else if ("o" === t[0] && "n" === t[1] && "function" == typeof i) D(e, t, i);
                            else if ("style" === t) ! function (e, t, n) {
                                t === n && (e.style.cssText = "", t = null);
                                if (null == n) e.style.cssText = "";
                                else if ("string" == typeof n) e.style.cssText = n;
                                else {
                                    for (var r in "string" == typeof t && (e.style.cssText = ""), n) e.style[r] = n[r];
                                    if (null != t && "string" != typeof t)
                                        for (var r in t) r in n || (e.style[r] = "")
                                }
                            }(a, r, i);
                            else if (t in a && ! function (e) {
                                return "href" === e || "list" === e || "form" === e || "width" === e || "height" === e
                            }(t) && void 0 === o && ! function (e) {
                                return e.attrs.is || e.tag.indexOf("-") > -1
                            }(e)) {
                                if ("value" === t) {
                                    var l = "" + i;
                                    if (("input" === e.tag || "textarea" === e.tag) && e.dom.value === l && e.dom === n.activeElement) return;
                                    if ("select" === e.tag)
                                        if (null === i) {
                                            if (-1 === e.dom.selectedIndex && e.dom === n.activeElement) return
                                        } else if (null !== r && e.dom.value === l && e.dom === n.activeElement) return;
                                    if ("option" === e.tag && null != r && e.dom.value === l) return
                                }
                                if ("input" === e.tag && "type" === t) return void a.setAttribute(t, i);
                                a[t] = i
                            } else "boolean" == typeof i ? i ? a.setAttribute(t, "") : a.removeAttribute(t) : a.setAttribute("className" === t ? "class" : t, i)
                        }
                    }

                    function N(e) {
                        return "oninit" === e || "oncreate" === e || "onupdate" === e || "onremove" === e || "onbeforeremove" === e || "onbeforeupdate" === e
                    }

                    function D(e, n, r) {
                        var i = e.dom,
                            o = "function" != typeof t ? r : function (e) {
                                var n = r.call(i, e);
                                return t.call(i, e), n
                            };
                        if (n in i) i[n] = "function" == typeof r ? o : null;
                        else {
                            var a = n.slice(2);
                            if (void 0 === e.events && (e.events = {}), e.events[n] === o) return;
                            null != e.events[n] && i.removeEventListener(a, e.events[n], !1), "function" == typeof r && (e.events[n] = o, i.addEventListener(a, e.events[n], !1))
                        }
                    }

                    function b(e, t, n) {
                        "function" == typeof e.oninit && e.oninit.call(t.state, t), "function" == typeof e.oncreate && n.push(e.oncreate.bind(t.state, t))
                    }

                    function I(e, t, n) {
                        "function" == typeof e.onupdate && n.push(e.onupdate.bind(t.state, t))
                    }
                    return {
                        render: function (e, t) {
                            if (!e) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
                            var i = [],
                                o = n.activeElement,
                                a = e.namespaceURI;
                            null == e.vnodes && (e.textContent = ""), Array.isArray(t) || (t = [t]), f(e, e.vnodes, r.normalizeChildren(t), !1, i, null, "http://www.w3.org/1999/xhtml" === a ? void 0 : a), e.vnodes = t, null != o && n.activeElement !== o && o.focus();
                            for (var u = 0; u < i.length; u++) i[u]()
                        },
                        setEventCallback: function (e) {
                            return t = e
                        }
                    }
                };
            var M = function (e) {
                var t = m(e);
                t.setEventCallback(function (e) {
                    !1 === e.redraw ? e.redraw = void 0 : i()
                });
                var n = [];

                function r(e) {
                    var t = n.indexOf(e);
                    t > -1 && n.splice(t, 2)
                }

                function i() {
                    for (var e = 1; e < n.length; e += 2) n[e]()
                }
                return {
                    subscribe: function (e, t) {
                        r(e), n.push(e, function (e) {
                            var t = 0,
                                n = null,
                                r = "function" == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
                            return function () {
                                var i = Date.now();
                                0 === t || i - t >= 16 ? (t = i, e()) : null === n && (n = r(function () {
                                    n = null, e(), t = Date.now()
                                }, 16 - (i - t)))
                            }
                        }(t))
                    },
                    unsubscribe: r,
                    redraw: i,
                    render: t.render
                }
            }(window);
            g.setCompletionCallback(M.redraw);
            c.mount = function (e) {
                return function (t, n) {
                    if (null === n) return e.render(t, []), void e.unsubscribe(t);
                    if (null == n.view && "function" != typeof n) throw new Error("m.mount(element, component) expects a component, not a vnode");
                    e.subscribe(t, function () {
                        e.render(t, r(n))
                    }), e.redraw()
                }
            }(M);
            var p = s,
                h = function (e) {
                    if ("" === e || null == e) return {};
                    "?" === e.charAt(0) && (e = e.slice(1));
                    for (var t = e.split("&"), n = {}, r = {}, i = 0; i < t.length; i++) {
                        var o = t[i].split("="),
                            a = decodeURIComponent(o[0]),
                            u = 2 === o.length ? decodeURIComponent(o[1]) : "";
                        "true" === u ? u = !0 : "false" === u && (u = !1);
                        var l = a.split(/\]\[?|\[/),
                            c = n;
                        a.indexOf("[") > -1 && l.pop();
                        for (var s = 0; s < l.length; s++) {
                            var f = l[s],
                                d = l[s + 1],
                                g = "" == d || !isNaN(parseInt(d, 10)),
                                m = s === l.length - 1;
                            if ("" === f) null == r[a = l.slice(0, s).join()] && (r[a] = 0), f = r[a]++;
                            null == c[f] && (c[f] = m ? u : g ? [] : {}), c = c[f]
                        }
                    }
                    return n
                },
                v = function (e) {
                    var n, r = "function" == typeof e.history.pushState,
                        i = "function" == typeof t ? t : setTimeout;

                    function o(t) {
                        var n = e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
                        return "pathname" === t && "/" !== n[0] && (n = "/" + n), n
                    }

                    function a(e, t, n) {
                        var r = e.indexOf("?"),
                            i = e.indexOf("#"),
                            o = r > -1 ? r : i > -1 ? i : e.length;
                        if (r > -1) {
                            var a = i > -1 ? i : e.length,
                                u = h(e.slice(r + 1, a));
                            for (var l in u) t[l] = u[l]
                        }
                        if (i > -1) {
                            var c = h(e.slice(i + 1));
                            for (var l in c) n[l] = c[l]
                        }
                        return e.slice(0, o)
                    }
                    var u = {
                        prefix: "#!",
                        getPath: function () {
                            switch (u.prefix.charAt(0)) {
                                case "#":
                                    return o("hash").slice(u.prefix.length);
                                case "?":
                                    return o("search").slice(u.prefix.length) + o("hash");
                                default:
                                    return o("pathname").slice(u.prefix.length) + o("search") + o("hash")
                            }
                        },
                        setPath: function (t, n, i) {
                            var o = {},
                                l = {};
                            if (t = a(t, o, l), null != n) {
                                for (var c in n) o[c] = n[c];
                                t = t.replace(/:([^\/]+)/g, function (e, t) {
                                    return delete o[t], n[t]
                                })
                            }
                            var s = f(o);
                            s && (t += "?" + s);
                            var d = f(l);
                            if (d && (t += "#" + d), r) {
                                var g = i ? i.state : null,
                                    m = i ? i.title : null;
                                e.onpopstate(), i && i.replace ? e.history.replaceState(g, m, u.prefix + t) : e.history.pushState(g, m, u.prefix + t)
                            } else e.location.href = u.prefix + t
                        }
                    };
                    return u.defineRoutes = function (t, o, l) {
                        function c() {
                            var n = u.getPath(),
                                r = {},
                                i = a(n, r, r),
                                c = e.history.state;
                            if (null != c)
                                for (var s in c) r[s] = c[s];
                            for (var f in t) {
                                var d = new RegExp("^" + f.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "/?$");
                                if (d.test(i)) return void i.replace(d, function () {
                                    for (var e = f.match(/:[^\/]+/g) || [], i = [].slice.call(arguments, 1, -2), a = 0; a < e.length; a++) r[e[a].replace(/:|\./g, "")] = decodeURIComponent(i[a]);
                                    o(t[f], r, n, f)
                                })
                            }
                            l(n, r)
                        }
                        r ? e.onpopstate = function (e) {
                            return function () {
                                null == n && (n = i(function () {
                                    n = null, e()
                                }))
                            }
                        }(c) : "#" === u.prefix.charAt(0) && (e.onhashchange = c), c()
                    }, u
                };
            c.route = function (e, t) {
                var n, i, o, a, u, l = v(e),
                    c = function (e, c, s) {
                        if (null == e) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
                        var f = function () {
                            null != n && t.render(e, n(r(i, o.key, o)))
                        },
                            d = function (e) {
                                if (e === c) throw new Error("Could not resolve default route " + c);
                                l.setPath(c, null, {
                                    replace: !0
                                })
                            };
                        l.defineRoutes(s, function (e, t, r) {
                            var l = u = function (e, c) {
                                l === u && (i = null == c || "function" != typeof c.view && "function" != typeof c ? "div" : c, o = t, a = r, u = null, n = (e.render || function (e) {
                                    return e
                                }).bind(e), f())
                            };
                            e.view || "function" == typeof e ? l({}, e) : e.onmatch ? p.resolve(e.onmatch(t, r)).then(function (t) {
                                l(e, t)
                            }, d) : l(e, "div")
                        }, d), t.subscribe(e, f)
                    };
                return c.set = function (e, t, n) {
                    null != u && ((n = n || {}).replace = !0), u = null, l.setPath(e, t, n)
                }, c.get = function () {
                    return a
                }, c.prefix = function (e) {
                    l.prefix = e
                }, c.link = function (e) {
                    e.dom.setAttribute("href", l.prefix + e.attrs.href), e.dom.onclick = function (e) {
                        if (!(e.ctrlKey || e.metaKey || e.shiftKey || 2 === e.which)) {
                            e.preventDefault(), e.redraw = !1;
                            var t = this.getAttribute("href");
                            0 === t.indexOf(l.prefix) && (t = t.slice(l.prefix.length)), c.set(t, void 0, void 0)
                        }
                    }
                }, c.param = function (e) {
                    return void 0 !== o && void 0 !== e ? o[e] : o
                }, c
            }(window, M), c.withAttr = function (e, t, n) {
                return function (r) {
                    t.call(n || this, e in r.currentTarget ? r.currentTarget[e] : r.currentTarget.getAttribute(e))
                }
            };
            var w = m(window);
            c.render = w.render, c.redraw = M.redraw, c.request = g.request, c.jsonp = g.jsonp, c.parseQueryString = h, c.buildQueryString = f, c.version = "1.1.6", c.vnode = r, e.exports = c
        }()
    }).call(this, n(4).setImmediate, n(1))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {};
    t.default = {
        update: function (e) {
            r = Object.assign({}, {
                ratio: "landscape"
            }, e)
        },
        data: function () {
            return r
        }
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t = i(n(7)),
            r = i(n(2));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        window.MediumWidget = {
            Init: function (n) {
                var i = document.body.querySelector("" + (n.renderTo || "#medium-widget"));
                return r.default.update(n.params), window.MediumWidget.unmount = function () {
                    e.mount(i, null)
                }, e.mount(i, t.default), e
            }
        }
    }).call(this, n(0))
}, function (e, t, n) {
    (function (e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function o(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function () {
            return new o(i.call(setTimeout, r, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new o(i.call(setInterval, r, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e && e.close()
        }, o.prototype.unref = o.prototype.ref = function () { }, o.prototype.close = function () {
            this._clearFn.call(r, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(5), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(1))
}, function (e, t, n) {
    (function (e, t) {
        ! function (e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, i = 1,
                    o = {},
                    a = !1,
                    u = e.document,
                    l = Object.getPrototypeOf && Object.getPrototypeOf(e);
                l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
                    t.nextTick(function () {
                        s(e)
                    })
                } : function () {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function () {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? function () {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function (n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && s(+n.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), r = function (n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function () {
                    var e = new MessageChannel;
                    e.port1.onmessage = function (e) {
                        s(e.data)
                    }, r = function (t) {
                        e.port2.postMessage(t)
                    }
                }() : u && "onreadystatechange" in u.createElement("script") ? function () {
                    var e = u.documentElement;
                    r = function (t) {
                        var n = u.createElement("script");
                        n.onreadystatechange = function () {
                            s(t), n.onreadystatechange = null, e.removeChild(n), n = null
                        }, e.appendChild(n)
                    }
                }() : r = function (e) {
                    setTimeout(s, 0, e)
                }, l.setImmediate = function (e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var a = {
                        callback: e,
                        args: t
                    };
                    return o[i] = a, r(i), i++
                }, l.clearImmediate = c
            }

            function c(e) {
                delete o[e]
            }

            function s(e) {
                if (a) setTimeout(s, 0, e);
                else {
                    var t = o[e];
                    if (t) {
                        a = !0;
                        try {
                            ! function (e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            c(e), a = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(1), n(6))
}, function (e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    } ! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var l, c = [],
        s = !1,
        f = -1;

    function d() {
        s && l && (s = !1, l.length ? c = l.concat(c) : f = -1, c.length && g())
    }

    function g() {
        if (!s) {
            var e = u(d);
            s = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++f < t;) l && l[f].run();
                f = -1, t = c.length
            }
            l = null, s = !1,
                function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function m(e, t) {
        this.fun = e, this.array = t
    }

    function M() { }
    i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new m(e, t)), 1 !== c.length || s || u(g)
    }, m.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = M, i.addListener = M, i.once = M, i.off = M, i.removeListener = M, i.removeAllListeners = M, i.emit = M, i.prependListener = M, i.prependOnceListener = M, i.listeners = function (e) {
        return []
    }, i.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n(8);
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(13));
        t.default = function () {
            return {
                view: function () {
                    return e("section.medium-widget", [e(".medium-widget__wrapper", [e(r.default)])])
                }
            }
        }
    }).call(this, n(0))
}, function (e, t, n) {
    var r = n(9);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(11)(r, i);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(10)(!1)).push([e.i, ".medium-widget {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  /* Article */ }\n  .medium-widget__loader {\n    margin: 0 auto;\n    border: 4px solid #f3f3f3;\n    border-top: 4px solid #03a87c;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    -webkit-animation: loader-spin 0.8s linear infinite;\n            animation: loader-spin 0.8s linear infinite; }\n  .medium-widget-article__item {\n    font-size: 14px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .medium-widget-article__row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin-left: -15px;\n    margin-right: -15px; }\n    .medium-widget-article__row .medium-widget-article__item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1;\n              flex: 1 1; }\n  .medium-widget-article__title {\n    display: inline-block;\n    font-weight: 700;\n    cursor: pointer;\n    font-size: 18px;\n    color: rgba(255, 255, 255, 1);\n    border: none;\n    text-decoration: none; }\n    .medium-widget-article__title:after, .medium-widget-article__title:before {\n      display: none; }\n  .medium-widget-article__info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 5px;\n    margin-left: -5px;\n    margin-right: -5px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-widget-article__info > div {\n      padding: 0 5px;\n      position: relative;\n      height: 30px; }\n  .medium-widget-article__column {\n    width: 100%; }\n    .medium-widget-article__column .medium-widget-article__image img {\n      width: 100%;\n      margin-bottom: 10px; border:5px solid #ffffff ; padding: 5px;}\n  .medium-widget-article__grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%; }\n  .medium-widget-article__content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .medium-widget-article__description {\n    color: rgba(255,255,255, 0.7);\n    margin-top: 5px;\n    line-height: 1.3em; }\n  .medium-widget-article__image {\n    -webkit-box-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n    display: block;\n    cursor: pointer;\n    border: none;\n    text-decoration: none; }\n    .medium-widget-article__image:after, .medium-widget-article__image:before {\n      display: none; }\n    .medium-widget-article__image img {\n      width: 150px;\n      margin-right: 15px; }\n  .medium-widget-article__author-name {\n    margin: 0px 0px 0px 10px;\n    color: rgba(255,255,255,1);\n    line-height: 1em; }\n  .medium-widget-article__author {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .medium-widget-article__avatar-picture {\n    max-width: 30px;\n    border-radius: 50%; }\n  .medium-widget-article__date {\n    color: rgba(0, 0, 0, 0.5);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    line-height: 1em; }\n  .medium-widget-article__clap {\n    color: rgba(255,255,255, 0.7);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .medium-widget-article__clap:before {\n      content: '';\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNHB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAxNCAxNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5jbGFwPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkxhbmRpbmciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImNsYXAiIGZpbGw9IiMwMDAwMDAiPiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEiIHBvaW50cz0iNi4zMTg5IDAgNi43NjI5IDEuNzI5IDcuMjA2OSAwIj48L3BvbHlnb24+ICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMiIgcG9pbnRzPSI4LjEwMDkgMi4yMDIzIDkuMTczOSAwLjcxMzMgOC4zMzg5IDAuNDQwMyI+PC9wb2x5Z29uPiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTMiIHBvaW50cz0iNC4zNDg4IDAuNzEzNyA1LjQyMDggMi4yMDI3IDUuMTgyOCAwLjQzOTciPjwvcG9seWdvbj4gICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTc3NCw3Ljc1ODYgTDEwLjgxNDQsNC42NTY2IEMxMC42NDc0LDQuNDA4NiAxMC40MTM0LDQuMjQ1NiAxMC4xNjA0LDQuMjA0NiBDOS45NzM0LDQuMTcwNiA5Ljc4MDQsNC4yMTc2IDkuNjI4NCw0LjMzMzYgQzkuNDU1NCw0LjQ2ODYgOS4zNTI0LDQuNjMzNiA5LjMxNzQsNC44MjI2IEM5LjMyNzQsNC44MzU2IDkuMzM4NCw0Ljg0NjYgOS4zNDg0LDQuODYwNiBMMTEuMDA1NCw3Ljc3NjYgQzEyLjE0MjQsOS44NTQ2IDExLjc4MDQsMTEuODQxNiA5LjkzMTQsMTMuNjkwNiBDOS44Mjg0LDEzLjc5MjYgOS43MjI0LDEzLjg5MDYgOS42MTA0LDEzLjk4MzYgQzEwLjMxMzQsMTMuODkxNiAxMC45Njg0LDEzLjU1MzYgMTEuNTY0NCwxMi45NTY2IEMxMy40NzA0LDExLjA1MTYgMTMuMzM4NCw5LjAyMTYgMTIuNTc3NCw3Ljc1ODYiIGlkPSJGaWxsLTQiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNNi44MDk4LDUuNzY0NCBDNi43MTg4LDUuMjgxNCA2Ljg2NTgsNC44NTA0IDcuMjEyOCw0LjUxNjQgTDUuNzU5OCwzLjA2MjQgQzUuNDY4OCwyLjc2ODQgNC45NTY4LDIuNzY4NCA0LjY2NDgsMy4wNjI0IEM0LjU2MDgsMy4xNjc0IDQuNTA1OCwzLjI5NTQgNC40NzI4LDMuNDI5NCBMNi44MDk4LDUuNzY0NCBaIiBpZD0iRmlsbC03Ij48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTguNjk0MSw1LjI3MTMgQzguNTY3MSw1LjA4MzMgOC4zODAxLDQuOTUwMyA4LjE4MTEsNC45MTczIEM4LjA0OTEsNC44OTMzIDcuOTEyMSw0LjkyNTMgNy44MDUxLDUuMDA2MyBDNy43MDMxLDUuMDg2MyA3LjM5MDEsNS4zMjkzIDcuNjY2MSw1LjkxOTMgTDguNDk5MSw3LjY4MzMgQzguNjIyMSw3LjgwNjMgOC42MjIxLDguMDA1MyA4LjUwMDEsOC4xMjgzIEM4LjM3NzEsOC4yNTAzIDguMTc4MSw4LjI1MTMgOC4wNTUxLDguMTI4MyBDOC4wMzAxLDguMTAzMyA4LjAwOTEsOC4wNzMzIDcuOTkzMSw4LjA0MTMgTDMuNjczMSwzLjcxODMgQzMuNDQ4MSwzLjQ5NDMgMy4wODQxLDMuNDk0MyAyLjg1OTEsMy43MTgzIEMyLjYzNDEsMy45NDMzIDIuNjM0MSw0LjMwNzMgMi44NTkxLDQuNTMyMyBMNS40MjUxLDcuMDk5MyBDNS41NDgxLDcuMjIyMyA1LjU0ODEsNy40MjEzIDUuNDI1MSw3LjU0MzMgQzUuMzAzMSw3LjY2NzMgNS4xMDQxLDcuNjY3MyA0Ljk4MTEsNy41NDMzIEwyLjQxNzEsNC45NzkzIEwxLjY5MjEsNC4yNTMzIEMxLjQ2NjEsNC4wMzAzIDEuMTAzMSw0LjAzMDMgMC44NzgxLDQuMjUzMyBDMC42NTMxLDQuNDc2MyAwLjY1MTEsNC44MzczIDAuODc0MSw1LjA2MjMgQzAuODc1MSw1LjA2NDMgMC44NzYxLDUuMDY1MyAwLjg3ODEsNS4wNjYzIEwxLjYwMTEsNS43OTAzIEw0LjE2ODEsOC4zNTczIEM0LjI5MDEsOC40NzkzIDQuMjkxMSw4LjY3NzMgNC4xNjkxLDguNzk5MyBDNC4xNjgxLDguODAwMyA0LjE2ODEsOC44MDAzIDQuMTY4MSw4LjgwMDMgQzQuMDQ3MSw4LjkyMzMgMy44NDkxLDguOTI1MyAzLjcyNzEsOC44MDQzIEMzLjcyNTEsOC44MDMzIDMuNzI0MSw4LjgwMjMgMy43MjMxLDguODAwMyBMMS4xNjAxLDYuMjM3MyBDMC45MzQxLDYuMDExMyAwLjU3MDEsNi4wMTAzIDAuMzQ0MSw2LjIzNTMgQzAuMTE5MSw2LjQ1ODMgMC4xMTgxLDYuODIxMyAwLjM0MTEsNy4wNDUzIEwwLjM0NDEsNy4wNDgzIEwxLjQyNTEsOC4xMjkzIEwzLjAzNjEsOS43NDIzIEMzLjE1NTEsOS44NjgzIDMuMTUwMSwxMC4wNjYzIDMuMDI0MSwxMC4xODUzIEMyLjkwMjEsMTAuMjk4MyAyLjcxNDEsMTAuMjk4MyAyLjU5MzEsMTAuMTg1MyBMMC45ODExLDguNTc0MyBDMC43NTgxLDguMzQ5MyAwLjM5NjEsOC4zNDczIDAuMTcyMSw4LjU3MDMgQzAuMTcwMSw4LjU3MTMgMC4xNjkxLDguNTcyMyAwLjE2ODEsOC41NzQzIEMtMC4wNTU5LDguNzk4MyAtMC4wNTU5LDkuMTYyMyAwLjE2ODEsOS4zODYzIEwzLjI3MDEsMTIuNDg5MyBDNS4yMzYxLDE0LjQ1NTMgNy4xNDExLDE1LjM5MTMgOS4zODYxLDEzLjE0NTMgQzEwLjk4NTEsMTEuNTQ0MyAxMS4yOTQxLDkuOTEyMyAxMC4zMzExLDguMTUyMyBMOC42OTQxLDUuMjcxMyBaIiBpZD0iRmlsbC05Ij48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);\n      display: block;\n      width: 14px;\n      height: 15px;\n      background-repeat: no-repeat;\n      background-position: center;\n      opacity: 0.3;\n      margin-right: 5px;\n      margin-top: -3px; }\n  .medium-widget-article__like {\n    color: rgba(0, 0, 0, 0.9);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .medium-widget-article__like:before {\n      content: '';\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMnB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCAxMiAxMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT51cDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJMYW5kaW5nIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJ1cCIgZmlsbD0iIzAwMDAwMCI+ICAgICAgICAgICAgPHBhdGggZD0iTTEyLDYuODc1MzEyNTEgQzEyLDYuNTc0Nzk4ODUgMTEuODc0OTgyNiw2LjI5NDc4NjEzIDExLjY1OTk5NDQsNi4wODc3NzY3MiBDMTEuOTA0Mjc1Myw1LjgzMjI2NTEgMTIuMDI4NzY5Nyw1LjQ4OTI0OTUxIDExLjk5NDI0NjEsNS4xMzMyMzMzMyBDMTEuOTMzMDQ1MSw0LjQ5NzcwNDQ0IDExLjMzMzU4OSw0LjAwMDE4MTgzIDEwLjYzMDAzOSw0LjAwMDE4MTgzIEw3LjM5OTQ2MjY5LDQuMDAwMTgxODMgQzcuNTU5MDAzNzgsMy41MzU2NjA3MSA3LjgxNTMxNTY5LDIuNjg0MTIyMDEgNy44MTUzMTU2OSwyLjAwMDA5MDkxIEM3LjgxNTMxNTY5LDAuOTE1NTQxNjE2IDYuODUxMjY5MDQsMCA2LjI0NjA1OTA4LDAgQzUuNzAyNTczMiwwIDUuMzE0NDQzNzMsMC4yOTIwMTMyNzMgNS4yOTc3MDUsMC4zMDQ1MTM4NDIgQzUuMjM1NDU3ODIsMC4zNTIwMTYwMDEgNS4xOTk4ODgsMC40MjQwMTkyNzQgNS4xOTk4ODgsMC41MDAwMjI3MjggTDUuMTk5ODg4LDIuMTk1MDk5NzggTDQuMDIzOTkxNzEsNC42MzAyMTA0NiBDMy45ODc4OTg4MSw0LjcwNTcxMzkgMy45OTI2MDY1OCw0Ljc5MzIxNzg3IDQuMDM3NTkxOTMsNC44NjQyMjExIEM0LjExNDQ4NTUxLDQuOTg1NzI2NjIgNC4xNTM3MTY5Miw1LjExNTczMjUzIDQuMTUzNzE2OTIsNS4yNDk3Mzg2MiBMNC4xNTM3MTY5MiwxMC4yNDk5NjU5IEM0LjE1MzcxNjkyLDEwLjM3MDQ3MTQgNC4xMzkwNzA1MywxMC40OTI5NzcgNC4xMDg3MzE1NywxMC42MjU0ODMgQzQuMDc3ODY5NTIsMTAuNzU5OTg5MSA0LjE2NjI3MDk4LDEwLjg5Mjk5NTEgNC4zMDY0NTc5LDEwLjkyMjk5NjUgQzQuNTM2MDkyNDUsMTAuOTcyNDk4NyA0Ljc2MTAxOTIzLDExIDQuOTM4MzQ1MjMsMTEgTDkuNzM5NzQ3MzksMTEgQzEwLjMwOTM4NzUsMTEgMTAuODA3ODg4MSwxMC42MzI5ODMzIDEwLjkyNDUzNjEsMTAuMTI2NDYwMyBDMTAuOTg0NjkxLDkuODY1OTQ4NDUgMTAuOTQ5MTIxMiw5LjYwMjkzNjUgMTAuODMwMzgwNyw5LjM3NTQyNjE2IEMxMS4yMTY5NDA5LDkuMTg5NDE3NyAxMS40NzY5MTQ1LDguODA4NDAwMzggMTEuNDc2OTE0NSw4LjM3NDg4MDY4IEMxMS40NzY5MTQ1LDguMTk4MzcyNjUgMTEuNDM0NTQ0NSw4LjAyODM2NDkzIDExLjM1Mzk4OTQsNy44NzQ4NTc5NSBDMTEuNzQwMDI2NSw3LjY4OTM0OTUyIDEyLDcuMzA4ODMyMjIgMTIsNi44NzUzMTI1MSBNMS4yNSw1IEMwLjU2MSw1IDAsNS42MDQxNTM4NSAwLDYuMzQ2MTUzODUgTDAsMTAuNjUzODQ2MiBDMCwxMS4zOTU4NDYyIDAuNTYxLDEyIDEuMjUsMTIgTDEuNzUsMTIgQzIuNDM5LDEyIDMsMTEuMzk1ODQ2MiAzLDEwLjY1Mzg0NjIgTDMsNS4yNjkyMzA3NyBDMyw1LjEyMDYxNTM4IDIuODg4LDUgMi43NSw1IEwxLjI1LDUgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n      display: block;\n      width: 12px;\n      height: 12px;\n      background-repeat: no-repeat;\n      background-position: center;\n      opacity: 0.3;\n      margin-right: 5px;\n      margin-top: -3px; }\n  .medium-widget-article__error {\n    font-size: 1.2rem;\n    color: #fd7272;\n    font-weight: bold;\n    text-align: center; }\n  .medium-widget-article__empty {\n    font-size: 1.2rem;\n    color: #03a87c;\n    font-weight: bold;\n    text-align: center; }\n\n@-webkit-keyframes loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""])
}, function (e, t) {
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var i = function (e) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                        }(r),
                            o = r.sources.map(function (e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    var r = {},
        i = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        }(function () {
            return window && document && document.all && !window.atob
        }),
        o = function (e) {
            var t = {};
            return function (e) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var n = function (e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        a = null,
        u = 0,
        l = [],
        c = n(12);

    function s(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                o = r[i.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) o.parts.push(p(i.parts[a], t))
            } else {
                var u = [];
                for (a = 0; a < i.parts.length; a++) u.push(p(i.parts[a], t));
                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: u
                }
            }
        }
    }

    function f(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                a = t.base ? o[0] + t.base : o[0],
                u = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                id: a,
                parts: [u]
            })
        }
        return n
    }

    function d(e, t) {
        var n = o(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = l[l.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = o(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function g(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1)
    }

    function m(e) {
        var t = document.createElement("style");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), M(t, e.attrs), d(e, t), t
    }

    function M(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function p(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function () { };
            e.css = o
        }
        if (t.singleton) {
            var l = u++;
            n = a || (a = m(t)), r = v.bind(null, n, l, !1), i = v.bind(null, n, l, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", M(t, e.attrs), d(e, t), t
        }(t), r = function (e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = c(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                type: "text/css"
            }),
                u = e.href;
            e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
        }.bind(null, n, t), i = function () {
            g(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = m(t), r = function (e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function () {
            g(n)
        });
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = f(e, t);
        return s(n, t),
            function (e) {
                for (var i = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (u = r[a.id]).refs--, i.push(u)
                }
                e && s(f(e, t), t);
                for (o = 0; o < i.length; o++) {
                    var u;
                    if (0 === (u = i[o]).refs) {
                        for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                        delete r[u.id]
                    }
                }
            }
    };
    var h = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }();

    function v(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = h(t, i);
        else {
            var o = document.createTextNode(i),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var i, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(n(14)),
            i = a(n(2)),
            o = n(18);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function () {
            return {
                data: {
                    config: i.default.data(),
                    articles: []
                },
                postsPerLine: function () {
                    return parseInt(this.data.config.postsPerLine) || 1
                },
                requestQuery: function () {
                    var e = this.data.config,
                        t = e.fields || [];
                    return -1 !== t.indexOf("author") && t.push("avatar"), {
                        fields: t,
                        resource: e.resource,
                        limit: e.limit,
                        picture: e.picture
                    }
                },
                loadArticles: function () {
                    var t = this;
                    this.isLoading = !0;
                    var n = new Event("medium-widget:loading"),
                        r = new Event("medium-widget:loaded"),
                        i = new Event("medium-widget:failed");
                    document.dispatchEvent(n), e.request({
                        method: "GET",
                        url: "https://medium-widget-api.pixelpoint.io/api/v1/articles",
                        extract: function (e) {
                            return {
                                xhr: e
                            }
                        },
                        data: this.requestQuery()
                    }).then(function (e) {
                        try {
                            t.data.articles = JSON.parse(e.xhr.responseText)
                        } catch (e) {
                            console.error("Invalid server response.")
                        } !1 === Array.isArray(t.data.articles) && (console.error("Invalid server response."), t.data.articles = []), 0 === t.data.articles.length && console.error("There is no data available for this resource."), t.isLoading = !1, document.dispatchEvent(r)
                    }, function (e) {
                        e.xhr.status >= 400 ? console.error("Error #" + e.xhr.status + " " + e.xhr.statusText) : console.error(e.message), t.isLoading = !1, document.dispatchEvent(i)
                    })
                },
                oninit: function () {
                    this.isLoading = !1, this.loadArticles()
                },
                view: function () {
                    var t = this.data.config,
                        n = this.data.articles.slice();
                    return (0, o.chunk)(n, this.postsPerLine()).map(function (n) {
                        return e(".medium-widget-article__row", n.map(function (n) {
                            return e(r.default, {
                                article: n,
                                config: t
                            })
                        }))
                    })
                }
            }
        }
    }).call(this, n(0))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(15),
            i = n(16),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(17));
        t.default = function () {
            return {
                date: function (e) {
                    if (e) return (0, r.fancyDate)(e)
                },
                like: function (e) {
                    if (e) return (0, i.fancyNumber)(e)
                },
                clap: function (e) {
                    if (e) return (0, i.fancyNumber)(e)
                },
                rwc: function (e, t) {
                    if (-1 !== this.config.fields.indexOf(e)) return t
                },
                ri: function (e) {
                    var t = this.config.fields;
                    if (["likes", "claps", "author", "publishAt"].some(function (e) {
                        return -1 !== t.indexOf(e)
                    })) return e
                },
                view: function (t) {
                    var n = t.attrs,
                        r = n.article,
                        i = n.config;
                    this.config = i;
                    var a = ".medium-widget-article__grid";
                    return "big" == i.picture && (a = ".medium-widget-article__column"), e(".medium-widget-article__item", [e(a, [e(o.default, {
                        pictureId: r.pictureId,
                        config: i,
                        url: r.url
                    }), e(".medium-widget-article__content", [e("a.medium-widget-article__title", {
                        href: r.url,
                        target: "_blank"
                    }, r.title), this.rwc("description", e(".medium-widget-article__description", r.description)), this.ri(e(".medium-widget-article__info", [this.rwc("author", e(".medium-widget-article__author", [e("img.medium-widget-article__avatar-picture", {
                        src: r.avatar
                    }), e(".medium-widget-article__author-name", r.author)])), this.rwc("likes", e(".medium-widget-article__like", this.like(r.likes))), this.rwc("claps", e(".medium-widget-article__clap", this.clap(r.claps))), this.rwc("publishAt", e(".medium-widget-article__date", this.date(r.publishAt)))]))])])])
                }
            }
        }
    }).call(this, n(0))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fancyDate = function (e) {
        var t = new Date(e);
        return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fancyNumber = function (e) {
        var t = "" + e;
        if (t.length > 3) {
            var n = t.slice(0, -3),
                r = t.split("").slice(-3)[0];
            return "0" == r ? n + "K" : n + "." + r + "K"
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function () {
            return {
                data: {
                    rendered: !1
                },
                oninit: function (e) {
                    this.picture = e.attrs.config.picture, this.pictureId = e.attrs.pictureId, this.ratio = e.attrs.config.ratio
                },
                oncreate: function (t) {
                    this.data.rendered = !0, e.redraw()
                },
                calculateWidthSize: function () {
                    var e = void 0;
                    e = "small" == this.picture ? 150 : document.getElementsByClassName("medium-widget-article__column")[0].clientWidth;
                    var t = window.devicePixelRatio || 1;
                    return parseInt(t * e)
                },
                getPictureUrl: function () {
                    var e = void 0,
                        t = void 0;
                    switch (this.ratio) {
                        case "original":
                            t = "https://cdn-images-1.medium.com/max/" + (e = this.calculateWidthSize());
                            break;
                        case "landscape":
                            t = "https://cdn-images-1.medium.com/fit/" + (e = this.calculateWidthSize()) + "/" + parseInt(9 * e / 16);
                            break;
                        case "square":
                            t = "https://cdn-images-1.medium.com/fit/" + (e = this.calculateWidthSize()) + "/" + e
                    }
                    return t + "/" + this.pictureId
                },
                view: function (t) {
                    if (this.pictureId && "none" !== this.picture && this.data.rendered) return e("a.medium-widget-article__image", {
                        href: t.attrs.url,
                        target: "_blank"
                    }, e("img", {
                        src: this.getPictureUrl()
                    }))
                }
            }
        }
    }).call(this, n(0))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.chunk = function (e, t) {
        var n, r = [],
            i = 0;
        for (n = e.length / t; i < n;) r[i] = e.splice(0, t), i++;
        return r
    }
}]);
//# sourceMappingURL=widget.js.map