var s_Loader = function () {
    function y(a, b) { a = a.push ? a : [a]; var d = [], g = a.length, c = g, f, k; for (f = function (a, g) { g.length && d.push(a); c--; c || b(d) }; g--;) { var h = a[g]; (k = n[h]) ? f(h, k) : (h = l[h] = l[h] || [], h.push(f)) } } function w(a, b) { if (a) { var d = l[a]; n[a] = b; if (d) for (; d.length;)d[0](a, b), d.splice(0, 1) } } function p(a, b) { a.call && (a = { success: a }); b.length ? (a.error || q)(b) : (a.success || q)(a) } function x(a, b, d, g) {
        var c = document, f = d.async, k = (d.numRetries || 0) + 1, h = d.before || q, u = a.replace(/[\?|#].*$/, ""), v = a.replace(/^(css|img)!/,
            ""), r; g = g || 0; if (t.includes(a)) b(a, 1, !1); else {
                if (/(^css!|\.css$)/.test(u)) { var e = c.createElement("link"); e.rel = "stylesheet"; e.href = v; (r = "hideFocus" in e) && e.relList && (r = 0, e.rel = "preload", e.as = "style") } else /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(u) ? (e = c.createElement("img"), e.src = v) : (e = c.createElement("script"), e.src = a, e.async = void 0 === f ? !0 : f); e.onload = e.onerror = e.onbeforeload = function (c) {
                    var f = c.type[0]; if (r) try { e.sheet.cssText.length || (f = "e") } catch (z) { 18 != z.code && (f = "e") } if ("e" == f) {
                        if (g += 1, g < k) return x(a,
                            b, d, g)
                    } else if ("preload" == e.rel && "style" == e.as) return e.rel = "stylesheet"; b(a, f, c.defaultPrevented)
                }; !1 !== h(a, e) && (t.push(a), c.head.appendChild(e))
            }
    } function A(a, b, d) { a = a.push ? a : [a]; var g = a.length, c = g, f = [], k; var h = function (a, c, d) { "e" == c && f.push(a); if ("b" == c) if (d) f.push(a); else return; g--; g || b(f) }; for (k = 0; k < c; k++)x(a[k], h, d) } var t = [], q = function () { }, m = {}, n = {}, l = {}; return {
        loadjs: function (a, b, d) {
            function g(b, d) { A(a, function (a) { p(f, a); b && p({ success: b, error: d }, a); w(c, a) }, f) } var c; b && b.trim && (c = b); var f =
                (c ? d : b) || {}; if (c) { if (c in m) throw "LoadJS"; m[c] = !0 } if (f.returnPromise) return new Promise(g); g()
        }, _addDeps: function (a) { var b; for (b = 0; b < a.length; b++)t.push(a[b]) }, ready: function (a, b) { y(a, function (a) { p(b, a) }); return this.loadjs }, done: function (a) { w(a, []) }, reset: function () { m = {}; n = {}; l = {} }, isDefined: function (a) { return a in m }
    }
};