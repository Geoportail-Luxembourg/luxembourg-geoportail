var o_ = Object.defineProperty;
var l_ = (t, e, n) => e in t ? o_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var at = (t, e, n) => (l_(t, typeof e != "symbol" ? e + "" : e, n), n);
import { get as sl, transformExtent as u_, getTransform as c_, transform as Hh } from "ol/proj";
import { register as f_ } from "ol/proj/proj4";
import h_ from "ol/Map";
import d_ from "ol/View";
import m_ from "ol/layer/Image";
import Up from "ol/source/ImageWMS";
import p_ from "ol/layer/Tile";
import Bp from "ol/source/WMTS";
import g_ from "ol/tilegrid/WMTS";
import { getTopLeft as y_ } from "ol/extent";
import v_ from "ol/layer/Layer";
import { toDegrees as __ } from "ol/math";
import { toLonLat as b_ } from "ol/proj.js";
import zh from "mapbox-gl";
import * as Yh from "ol/events";
import E_ from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as qp, CLASS_CONTROL as Wp } from "ol/css";
import Hp from "ol/control/Control";
import w_ from "ol/control/FullScreen";
import x_ from "ol/control/Zoom";
import S_ from "ol/control/ZoomToExtent";
import O_ from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as Mo } from "ol/render";
import { unByKey as M_ } from "ol/Observable";
import Xh from "ol/render/EventType";
import T_ from "ol/layer/Group.js";
function N_(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(t, i, s.get ? s : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function bi(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function Ei(t) {
  if (fe(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = st(r) ? A_(r) : Ei(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else {
    if (st(t))
      return t;
    if (We(t))
      return t;
  }
}
const C_ = /;(?![^(]*\))/g, L_ = /:([^]+)/, P_ = /\/\*.*?\*\//gs;
function A_(t) {
  const e = {};
  return t.replace(P_, "").split(C_).forEach((n) => {
    if (n) {
      const r = n.split(L_);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Ce(t) {
  let e = "";
  if (st(t))
    e = t;
  else if (fe(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ce(t[n]);
      r && (e += r + " ");
    }
  else if (We(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const k_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", D_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", I_ = /* @__PURE__ */ bi(k_), R_ = /* @__PURE__ */ bi(D_), $_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", F_ = /* @__PURE__ */ bi($_);
function zp(t) {
  return !!t || t === "";
}
const ue = (t) => st(t) ? t : t == null ? "" : fe(t) || We(t) && (t.toString === Zp || !be(t.toString)) ? JSON.stringify(t, Yp, 2) : String(t), Yp = (t, e) => e && e.__v_isRef ? Yp(t, e.value) : Yi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, i]) => (n[`${r} =>`] = i, n), {})
} : Kp(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : We(e) && !fe(e) && !Jp(e) ? String(e) : e, Ke = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, As = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], At = () => {
}, Xp = () => !1, V_ = /^on[^a-z]/, no = (t) => V_.test(t), Nl = (t) => t.startsWith("onUpdate:"), it = Object.assign, qf = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, j_ = Object.prototype.hasOwnProperty, Le = (t, e) => j_.call(t, e), fe = Array.isArray, Yi = (t) => _u(t) === "[object Map]", Kp = (t) => _u(t) === "[object Set]", be = (t) => typeof t == "function", st = (t) => typeof t == "string", Wf = (t) => typeof t == "symbol", We = (t) => t !== null && typeof t == "object", Hf = (t) => We(t) && be(t.then) && be(t.catch), Zp = Object.prototype.toString, _u = (t) => Zp.call(t), zf = (t) => _u(t).slice(8, -1), Jp = (t) => _u(t) === "[object Object]", Yf = (t) => st(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, al = /* @__PURE__ */ bi(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), G_ = /* @__PURE__ */ bi("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), bu = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, U_ = /-(\w)/g, yn = bu((t) => t.replace(U_, (e, n) => n ? n.toUpperCase() : "")), B_ = /\B([A-Z])/g, ln = bu((t) => t.replace(B_, "-$1").toLowerCase()), ts = bu((t) => t.charAt(0).toUpperCase() + t.slice(1)), Vi = bu((t) => t ? `on${ts(t)}` : ""), ja = (t, e) => !Object.is(t, e), ra = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Cl = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, q_ = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, qc = (t) => {
  const e = st(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Kh;
const Qp = () => Kh || (Kh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ll(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let mn;
class eg {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mn, !e && mn && (this.index = (mn.scopes || (mn.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = mn;
      try {
        return mn = this, e();
      } finally {
        mn = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Ll("cannot run an inactive effect scope.");
  }
  on() {
    mn = this;
  }
  off() {
    mn = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function tg(t) {
  return new eg(t);
}
function W_(t, e = mn) {
  e && e.active && e.effects.push(t);
}
function ng() {
  return mn;
}
function H_(t) {
  mn ? mn.cleanups.push(t) : process.env.NODE_ENV !== "production" && Ll("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
const Ga = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, rg = (t) => (t.w & mi) > 0, ig = (t) => (t.n & mi) > 0, z_ = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= mi;
}, Y_ = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      rg(i) && !ig(i) ? i.delete(t) : e[n++] = i, i.w &= ~mi, i.n &= ~mi;
    }
    e.length = n;
  }
}, Pl = /* @__PURE__ */ new WeakMap();
let da = 0, mi = 1;
const Wc = 30;
let zt;
const Xi = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Hc = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Xf {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, W_(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = zt, n = li;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = zt, zt = this, li = !0, mi = 1 << ++da, da <= Wc ? z_(this) : Zh(this), this.fn();
    } finally {
      da <= Wc && Y_(this), mi = 1 << --da, zt = this.parent, li = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    zt === this ? this.deferStop = !0 : this.active && (Zh(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Zh(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let li = !0;
const sg = [];
function as() {
  sg.push(li), li = !1;
}
function os() {
  const t = sg.pop();
  li = t === void 0 ? !0 : t;
}
function Zt(t, e, n) {
  if (li && zt) {
    let r = Pl.get(t);
    r || Pl.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Ga());
    const s = process.env.NODE_ENV !== "production" ? { effect: zt, target: t, type: e, key: n } : void 0;
    zc(i, s);
  }
}
function zc(t, e) {
  let n = !1;
  da <= Wc ? ig(t) || (t.n |= mi, n = !rg(t)) : n = !t.has(zt), n && (t.add(zt), zt.deps.push(t), process.env.NODE_ENV !== "production" && zt.onTrack && zt.onTrack(Object.assign({ effect: zt }, e)));
}
function Fr(t, e, n, r, i, s) {
  const a = Pl.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (n === "length" && fe(t)) {
    const u = Number(r);
    a.forEach((f, c) => {
      (c === "length" || c >= u) && o.push(f);
    });
  } else
    switch (n !== void 0 && o.push(a.get(n)), e) {
      case "add":
        fe(t) ? Yf(n) && o.push(a.get("length")) : (o.push(a.get(Xi)), Yi(t) && o.push(a.get(Hc)));
        break;
      case "delete":
        fe(t) || (o.push(a.get(Xi)), Yi(t) && o.push(a.get(Hc)));
        break;
      case "set":
        Yi(t) && o.push(a.get(Xi));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: i, oldTarget: s } : void 0;
  if (o.length === 1)
    o[0] && (process.env.NODE_ENV !== "production" ? Ss(o[0], l) : Ss(o[0]));
  else {
    const u = [];
    for (const f of o)
      f && u.push(...f);
    process.env.NODE_ENV !== "production" ? Ss(Ga(u), l) : Ss(Ga(u));
  }
}
function Ss(t, e) {
  const n = fe(t) ? t : [...t];
  for (const r of n)
    r.computed && Jh(r, e);
  for (const r of n)
    r.computed || Jh(r, e);
}
function Jh(t, e) {
  (t !== zt || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(it({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
function X_(t, e) {
  var n;
  return (n = Pl.get(t)) === null || n === void 0 ? void 0 : n.get(e);
}
const K_ = /* @__PURE__ */ bi("__proto__,__v_isRef,__isVue"), ag = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Wf)
), Z_ = /* @__PURE__ */ Eu(), J_ = /* @__PURE__ */ Eu(!1, !0), Q_ = /* @__PURE__ */ Eu(!0), eb = /* @__PURE__ */ Eu(!0, !0), Qh = /* @__PURE__ */ tb();
function tb() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = ve(this);
      for (let s = 0, a = this.length; s < a; s++)
        Zt(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(ve)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      as();
      const r = ve(this)[e].apply(this, n);
      return os(), r;
    };
  }), t;
}
function nb(t) {
  const e = ve(this);
  return Zt(e, "has", t), e.hasOwnProperty(t);
}
function Eu(t = !1, e = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive")
      return !t;
    if (i === "__v_isReadonly")
      return t;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && s === (t ? e ? mg : dg : e ? hg : fg).get(r))
      return r;
    const a = fe(r);
    if (!t) {
      if (a && Le(Qh, i))
        return Reflect.get(Qh, i, s);
      if (i === "hasOwnProperty")
        return nb;
    }
    const o = Reflect.get(r, i, s);
    return (Wf(i) ? ag.has(i) : K_(i)) || (t || Zt(r, "get", i), e) ? o : qe(o) ? a && Yf(i) ? o : o.value : We(o) ? t ? pg(o) : Su(o) : o;
  };
}
const rb = /* @__PURE__ */ og(), ib = /* @__PURE__ */ og(!0);
function og(t = !1) {
  return function(n, r, i, s) {
    let a = n[r];
    if (pi(a) && qe(a) && !qe(i))
      return !1;
    if (!t && (!Al(i) && !pi(i) && (a = ve(a), i = ve(i)), !fe(n) && qe(a) && !qe(i)))
      return a.value = i, !0;
    const o = fe(n) && Yf(r) ? Number(r) < n.length : Le(n, r), l = Reflect.set(n, r, i, s);
    return n === ve(s) && (o ? ja(i, a) && Fr(n, "set", r, i, a) : Fr(n, "add", r, i)), l;
  };
}
function sb(t, e) {
  const n = Le(t, e), r = t[e], i = Reflect.deleteProperty(t, e);
  return i && n && Fr(t, "delete", e, void 0, r), i;
}
function ab(t, e) {
  const n = Reflect.has(t, e);
  return (!Wf(e) || !ag.has(e)) && Zt(t, "has", e), n;
}
function ob(t) {
  return Zt(t, "iterate", fe(t) ? "length" : Xi), Reflect.ownKeys(t);
}
const lg = {
  get: Z_,
  set: rb,
  deleteProperty: sb,
  has: ab,
  ownKeys: ob
}, ug = {
  get: Q_,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Ll(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Ll(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, lb = /* @__PURE__ */ it({}, lg, {
  get: J_,
  set: ib
}), ub = /* @__PURE__ */ it({}, ug, {
  get: eb
}), Kf = (t) => t, wu = (t) => Reflect.getPrototypeOf(t);
function To(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = ve(t), s = ve(e);
  n || (e !== s && Zt(i, "get", e), Zt(i, "get", s));
  const { has: a } = wu(i), o = r ? Kf : n ? Zf : Ua;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function No(t, e = !1) {
  const n = this.__v_raw, r = ve(n), i = ve(t);
  return e || (t !== i && Zt(r, "has", t), Zt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Co(t, e = !1) {
  return t = t.__v_raw, !e && Zt(ve(t), "iterate", Xi), Reflect.get(t, "size", t);
}
function ed(t) {
  t = ve(t);
  const e = ve(this);
  return wu(e).has.call(e, t) || (e.add(t), Fr(e, "add", t, t)), this;
}
function td(t, e) {
  e = ve(e);
  const n = ve(this), { has: r, get: i } = wu(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && cg(n, r, t) : (t = ve(t), s = r.call(n, t));
  const a = i.call(n, t);
  return n.set(t, e), s ? ja(e, a) && Fr(n, "set", t, e, a) : Fr(n, "add", t, e), this;
}
function nd(t) {
  const e = ve(this), { has: n, get: r } = wu(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && cg(e, n, t) : (t = ve(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, a = e.delete(t);
  return i && Fr(e, "delete", t, void 0, s), a;
}
function rd() {
  const t = ve(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? Yi(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && Fr(t, "clear", void 0, void 0, n), r;
}
function Lo(t, e) {
  return function(r, i) {
    const s = this, a = s.__v_raw, o = ve(a), l = e ? Kf : t ? Zf : Ua;
    return !t && Zt(o, "iterate", Xi), a.forEach((u, f) => r.call(i, l(u), l(f), s));
  };
}
function Po(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = ve(i), a = Yi(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...r), f = n ? Kf : e ? Zf : Ua;
    return !e && Zt(s, "iterate", l ? Hc : Xi), {
      next() {
        const { value: c, done: h } = u.next();
        return h ? { value: c, done: h } : {
          value: o ? [f(c[0]), f(c[1])] : f(c),
          done: h
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Hr(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${ts(t)} operation ${n}failed: target is readonly.`, ve(this));
    }
    return t === "delete" ? !1 : this;
  };
}
function cb() {
  const t = {
    get(s) {
      return To(this, s);
    },
    get size() {
      return Co(this);
    },
    has: No,
    add: ed,
    set: td,
    delete: nd,
    clear: rd,
    forEach: Lo(!1, !1)
  }, e = {
    get(s) {
      return To(this, s, !1, !0);
    },
    get size() {
      return Co(this);
    },
    has: No,
    add: ed,
    set: td,
    delete: nd,
    clear: rd,
    forEach: Lo(!1, !0)
  }, n = {
    get(s) {
      return To(this, s, !0);
    },
    get size() {
      return Co(this, !0);
    },
    has(s) {
      return No.call(this, s, !0);
    },
    add: Hr("add"),
    set: Hr("set"),
    delete: Hr("delete"),
    clear: Hr("clear"),
    forEach: Lo(!0, !1)
  }, r = {
    get(s) {
      return To(this, s, !0, !0);
    },
    get size() {
      return Co(this, !0);
    },
    has(s) {
      return No.call(this, s, !0);
    },
    add: Hr("add"),
    set: Hr("set"),
    delete: Hr("delete"),
    clear: Hr("clear"),
    forEach: Lo(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Po(s, !1, !1), n[s] = Po(s, !0, !1), e[s] = Po(s, !1, !0), r[s] = Po(s, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [fb, hb, db, mb] = /* @__PURE__ */ cb();
function xu(t, e) {
  const n = e ? t ? mb : db : t ? hb : fb;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(Le(n, i) && i in r ? n : r, i, s);
}
const pb = {
  get: /* @__PURE__ */ xu(!1, !1)
}, gb = {
  get: /* @__PURE__ */ xu(!1, !0)
}, yb = {
  get: /* @__PURE__ */ xu(!0, !1)
}, vb = {
  get: /* @__PURE__ */ xu(!0, !0)
};
function cg(t, e, n) {
  const r = ve(n);
  if (r !== n && e.call(t, r)) {
    const i = zf(t);
    console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const fg = /* @__PURE__ */ new WeakMap(), hg = /* @__PURE__ */ new WeakMap(), dg = /* @__PURE__ */ new WeakMap(), mg = /* @__PURE__ */ new WeakMap();
function _b(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function bb(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : _b(zf(t));
}
function Su(t) {
  return pi(t) ? t : Ou(t, !1, lg, pb, fg);
}
function Eb(t) {
  return Ou(t, !1, lb, gb, hg);
}
function pg(t) {
  return Ou(t, !0, ug, yb, dg);
}
function Os(t) {
  return Ou(t, !0, ub, vb, mg);
}
function Ou(t, e, n, r, i) {
  if (!We(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = bb(t);
  if (a === 0)
    return t;
  const o = new Proxy(t, a === 2 ? r : n);
  return i.set(t, o), o;
}
function zn(t) {
  return pi(t) ? zn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function pi(t) {
  return !!(t && t.__v_isReadonly);
}
function Al(t) {
  return !!(t && t.__v_isShallow);
}
function kl(t) {
  return zn(t) || pi(t);
}
function ve(t) {
  const e = t && t.__v_raw;
  return e ? ve(e) : t;
}
function Gn(t) {
  return Cl(t, "__v_skip", !0), t;
}
const Ua = (t) => We(t) ? Su(t) : t, Zf = (t) => We(t) ? pg(t) : t;
function gg(t) {
  li && zt && (t = ve(t), process.env.NODE_ENV !== "production" ? zc(t.dep || (t.dep = Ga()), {
    target: t,
    type: "get",
    key: "value"
  }) : zc(t.dep || (t.dep = Ga())));
}
function yg(t, e) {
  t = ve(t);
  const n = t.dep;
  n && (process.env.NODE_ENV !== "production" ? Ss(n, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : Ss(n));
}
function qe(t) {
  return !!(t && t.__v_isRef === !0);
}
function Se(t) {
  return vg(t, !1);
}
function et(t) {
  return vg(t, !0);
}
function vg(t, e) {
  return qe(t) ? t : new wb(t, e);
}
class wb {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ve(e), this._value = n ? e : Ua(e);
  }
  get value() {
    return gg(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Al(e) || pi(e);
    e = n ? e : ve(e), ja(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Ua(e), yg(this, e));
  }
}
function b(t) {
  return qe(t) ? t.value : t;
}
const xb = {
  get: (t, e, n) => b(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return qe(i) && !qe(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function _g(t) {
  return zn(t) ? t : new Proxy(t, xb);
}
function id(t) {
  process.env.NODE_ENV !== "production" && !kl(t) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const e = fe(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = Oa(t, n);
  return e;
}
class Sb {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return X_(ve(this._object), this._key);
  }
}
function Oa(t, e, n) {
  const r = t[e];
  return qe(r) ? r : new Sb(t, e, n);
}
var bg;
class Ob {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[bg] = !1, this._dirty = !0, this.effect = new Xf(e, () => {
      this._dirty || (this._dirty = !0, yg(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = ve(this);
    return gg(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
bg = "__v_isReadonly";
function Mb(t, e, n = !1) {
  let r, i;
  const s = be(t);
  s ? (r = t, i = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : At) : (r = t.get, i = t.set);
  const a = new Ob(r, i, s || !i, n);
  return process.env.NODE_ENV !== "production" && e && !n && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
const Ki = [];
function ol(t) {
  Ki.push(t);
}
function ll() {
  Ki.pop();
}
function B(t, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  as();
  const n = Ki.length ? Ki[Ki.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Tb();
  if (r)
    Dr(r, n, 11, [
      t + e.join(""),
      n && n.proxy,
      i.map(({ vnode: s }) => `at <${ku(n, s.type)}>`).join(`
`),
      i
    ]);
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...Nb(i)), console.warn(...s);
  }
  os();
}
function Tb() {
  let t = Ki[Ki.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function Nb(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Cb(n));
  }), e;
}
function Cb({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${ku(t.component, t.type, r)}`, s = ">" + n;
  return t.props ? [i, ...Lb(t.props), s] : [i + s];
}
function Lb(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...Eg(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Eg(t, e, n) {
  return st(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : qe(e) ? (e = Eg(t, ve(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : be(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ve(e), n ? e : [`${t}=`, e]);
}
function Pb(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? B(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && B(`${e} is NaN - the duration expression might be incorrect.`));
}
const Jf = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Dr(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    Mu(s, e, n);
  }
  return i;
}
function Cn(t, e, n, r) {
  if (be(t)) {
    const s = Dr(t, e, n, r);
    return s && Hf(s) && s.catch((a) => {
      Mu(a, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Cn(t[s], e, n, r));
  return i;
}
function Mu(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? Jf[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](t, a, o) === !1)
            return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Dr(l, null, 10, [t, a, o]);
      return;
    }
  }
  Ab(t, n, i, r);
}
function Ab(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = Jf[e];
    if (n && ol(n), B(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ll(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Ba = !1, Yc = !1;
const $t = [];
let ir = 0;
const ks = [];
let nr = null, Qr = 0;
const wg = /* @__PURE__ */ Promise.resolve();
let Qf = null;
const kb = 100;
function Dl(t) {
  const e = Qf || wg;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Db(t) {
  let e = ir + 1, n = $t.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    qa($t[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function Tu(t) {
  (!$t.length || !$t.includes(t, Ba && t.allowRecurse ? ir + 1 : ir)) && (t.id == null ? $t.push(t) : $t.splice(Db(t.id), 0, t), xg());
}
function xg() {
  !Ba && !Yc && (Yc = !0, Qf = wg.then(Mg));
}
function Ib(t) {
  const e = $t.indexOf(t);
  e > ir && $t.splice(e, 1);
}
function Sg(t) {
  fe(t) ? ks.push(...t) : (!nr || !nr.includes(t, t.allowRecurse ? Qr + 1 : Qr)) && ks.push(t), xg();
}
function sd(t, e = Ba ? ir + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); e < $t.length; e++) {
    const n = $t[e];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && eh(t, n))
        continue;
      $t.splice(e, 1), e--, n();
    }
  }
}
function Og(t) {
  if (ks.length) {
    const e = [...new Set(ks)];
    if (ks.length = 0, nr) {
      nr.push(...e);
      return;
    }
    for (nr = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), nr.sort((n, r) => qa(n) - qa(r)), Qr = 0; Qr < nr.length; Qr++)
      process.env.NODE_ENV !== "production" && eh(t, nr[Qr]) || nr[Qr]();
    nr = null, Qr = 0;
  }
}
const qa = (t) => t.id == null ? 1 / 0 : t.id, Rb = (t, e) => {
  const n = qa(t) - qa(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function Mg(t) {
  Yc = !1, Ba = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), $t.sort(Rb);
  const e = process.env.NODE_ENV !== "production" ? (n) => eh(t, n) : At;
  try {
    for (ir = 0; ir < $t.length; ir++) {
      const n = $t[ir];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        Dr(n, null, 14);
      }
    }
  } finally {
    ir = 0, $t.length = 0, Og(t), Ba = !1, Qf = null, ($t.length || ks.length) && Mg(t);
  }
}
function eh(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > kb) {
      const r = e.ownerInstance, i = r && lh(r.type);
      return B(`Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      t.set(e, n + 1);
  }
}
let ui = !1;
const Es = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Qp().__VUE_HMR_RUNTIME__ = {
  createRecord: Ju(Tg),
  rerender: Ju(Vb),
  reload: Ju(jb)
});
const ns = /* @__PURE__ */ new Map();
function $b(t) {
  const e = t.type.__hmrId;
  let n = ns.get(e);
  n || (Tg(e, t.type), n = ns.get(e)), n.instances.add(t);
}
function Fb(t) {
  ns.get(t.type.__hmrId).instances.delete(t);
}
function Tg(t, e) {
  return ns.has(t) ? !1 : (ns.set(t, {
    initialDef: Ma(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ma(t) {
  return ly(t) ? t.__vccOpts : t;
}
function Vb(t, e) {
  const n = ns.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, Ma(r.type).render = e), r.renderCache = [], ui = !0, r.update(), ui = !1;
  }));
}
function jb(t, e) {
  const n = ns.get(t);
  if (!n)
    return;
  e = Ma(e), ad(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = Ma(i.type);
    Es.has(s) || (s !== n.initialDef && ad(s, e), Es.add(s)), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Es.add(s), i.ceReload(e.styles), Es.delete(s)) : i.parent ? Tu(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Sg(() => {
    for (const i of r)
      Es.delete(Ma(i.type));
  });
}
function ad(t, e) {
  it(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Ju(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let sr, ma = [], Xc = !1;
function ro(t, ...e) {
  sr ? sr.emit(t, ...e) : Xc || ma.push({ event: t, args: e });
}
function Ng(t, e) {
  var n, r;
  sr = t, sr ? (sr.enabled = !0, ma.forEach(({ event: i, args: s }) => sr.emit(i, ...s)), ma = []) : typeof window < "u" && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Ng(s, e);
  }), setTimeout(() => {
    sr || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xc = !0, ma = []);
  }, 3e3)) : (Xc = !0, ma = []);
}
function Gb(t, e) {
  ro("app:init", t, e, {
    Fragment: Ve,
    Text: so,
    Comment: Mt,
    Static: ul
  });
}
function Ub(t) {
  ro("app:unmount", t);
}
const Bb = /* @__PURE__ */ th("component:added"), Cg = /* @__PURE__ */ th("component:updated"), qb = /* @__PURE__ */ th("component:removed"), Wb = (t) => {
  sr && typeof sr.cleanupBuffer == "function" && !sr.cleanupBuffer(t) && qb(t);
};
function th(t) {
  return (e) => {
    ro(t, e.appContext.app, e.uid, e.parent ? e.parent.uid : void 0, e);
  };
}
const Hb = /* @__PURE__ */ Lg("perf:start"), zb = /* @__PURE__ */ Lg("perf:end");
function Lg(t) {
  return (e, n, r) => {
    ro(t, e.appContext.app, e.uid, e, n, r);
  };
}
function Yb(t, e, n) {
  ro("component:emit", t.appContext.app, t, e, n);
}
function Xb(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Ke;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: f, propsOptions: [c] } = t;
    if (f)
      if (!(e in f))
        (!c || !(Vi(e) in c)) && B(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Vi(e)}" prop.`);
      else {
        const h = f[e];
        be(h) && (h(...n) || B(`Invalid event arguments: event validation failed for event "${e}".`));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = r[f] || Ke;
    h && (i = n.map((d) => st(d) ? d.trim() : d)), c && (i = n.map(q_));
  }
  if (process.env.NODE_ENV !== "production" && Yb(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && r[Vi(f)] && B(`Event "${f}" is emitted in component ${ku(t, t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ln(e)}" instead of "${e}".`);
  }
  let o, l = r[o = Vi(e)] || r[o = Vi(yn(e))];
  !l && s && (l = r[o = Vi(ln(e))]), l && Cn(l, t, 6, i);
  const u = r[o + "Once"];
  if (u) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[o])
      return;
    t.emitted[o] = !0, Cn(u, t, 6, i);
  }
}
function Pg(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!be(t)) {
    const l = (u) => {
      const f = Pg(u, e, !0);
      f && (o = !0, it(a, f));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (We(t) && r.set(t, null), null) : (fe(s) ? s.forEach((l) => a[l] = null) : it(a, s), We(t) && r.set(t, a), a);
}
function Nu(t, e) {
  return !t || !no(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Le(t, e[0].toLowerCase() + e.slice(1)) || Le(t, ln(e)) || Le(t, e));
}
let wt = null, Ag = null;
function Il(t) {
  const e = wt;
  return wt = t, Ag = t && t.type.__scopeId || null, e;
}
function ci(t, e = wt, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && _d(-1);
    const s = Il(e);
    let a;
    try {
      a = t(...i);
    } finally {
      Il(s), r._d && _d(1);
    }
    return process.env.NODE_ENV !== "production" && Cg(e), a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Kc = !1;
function Rl() {
  Kc = !0;
}
function Qu(t) {
  const { type: e, vnode: n, proxy: r, withProxy: i, props: s, propsOptions: [a], slots: o, attrs: l, emit: u, render: f, renderCache: c, data: h, setupState: d, ctx: m, inheritAttrs: p } = t;
  let g, v;
  const y = Il(t);
  process.env.NODE_ENV !== "production" && (Kc = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = i || r;
      g = Un(f.call(S, S, c, s, d, h, m)), v = l;
    } else {
      const S = e;
      process.env.NODE_ENV !== "production" && l === s && Rl(), g = Un(S.length > 1 ? S(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Rl(), l;
        },
        slots: o,
        emit: u
      } : { attrs: l, slots: o, emit: u }) : S(s, null)), v = e.props ? l : Zb(l);
    }
  } catch (S) {
    Ca.length = 0, Mu(S, t, 1), g = ne(Mt);
  }
  let E = g, w;
  if (process.env.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && ([E, w] = Kb(g)), v && p !== !1) {
    const S = Object.keys(v), { shapeFlag: P } = E;
    if (S.length) {
      if (P & 7)
        a && S.some(Nl) && (v = Jb(v, a)), E = gr(E, v);
      else if (process.env.NODE_ENV !== "production" && !Kc && E.type !== Mt) {
        const k = Object.keys(l), C = [], T = [];
        for (let N = 0, U = k.length; N < U; N++) {
          const R = k[N];
          no(R) ? Nl(R) || C.push(R[2].toLowerCase() + R.slice(3)) : T.push(R);
        }
        T.length && B(`Extraneous non-props attributes (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), C.length && B(`Extraneous non-emits event listeners (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !od(E) && B("Runtime directive used on component with non-element root node. The directives will not function as intended."), E = gr(E), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !od(E) && B("Component inside <Transition> renders non-element root node that cannot be animated."), E.transition = n.transition), process.env.NODE_ENV !== "production" && w ? w(E) : g = E, Il(y), g;
}
const Kb = (t) => {
  const e = t.children, n = t.dynamicChildren, r = kg(e);
  if (!r)
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, a = (o) => {
    e[i] = o, n && (s > -1 ? n[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...n, o]));
  };
  return [Un(r), a];
};
function kg(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Bs(r)) {
      if (r.type !== Mt || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const Zb = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || no(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Jb = (t, e) => {
  const n = {};
  for (const r in t)
    (!Nl(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, od = (t) => t.shapeFlag & 7 || t.type === Mt;
function Qb(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && ui || e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? ld(r, a, u) : !!a;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const h = f[c];
        if (a[h] !== r[h] && !Nu(u, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? ld(r, a, u) : !0 : !!a;
  return !1;
}
function ld(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Nu(n, s))
      return !0;
  }
  return !1;
}
function e1({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const t1 = (t) => t.__isSuspense;
function n1(t, e) {
  e && e.pendingBranch ? fe(t) ? e.effects.push(...t) : e.effects.push(t) : Sg(t);
}
function Dg(t, e) {
  if (!ht)
    process.env.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = ht.provides;
    const r = ht.parent && ht.parent.provides;
    r === n && (n = ht.provides = Object.create(r)), n[t] = e;
  }
}
function Ds(t, e, n = !1) {
  const r = ht || wt;
  if (r) {
    const i = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && be(e) ? e.call(r.proxy) : e;
    process.env.NODE_ENV !== "production" && B(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function _n(t, e) {
  return nh(t, null, e);
}
const Ao = {};
function Je(t, e, n) {
  return process.env.NODE_ENV !== "production" && !be(e) && B("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), nh(t, e, n);
}
function nh(t, e, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: a } = Ke) {
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && B('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && B('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const o = (w) => {
    B("Invalid watch source: ", w, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = ng() === (ht == null ? void 0 : ht.scope) ? ht : null;
  let u, f = !1, c = !1;
  if (qe(t) ? (u = () => t.value, f = Al(t)) : zn(t) ? (u = () => t, r = !0) : fe(t) ? (c = !0, f = t.some((w) => zn(w) || Al(w)), u = () => t.map((w) => {
    if (qe(w))
      return w.value;
    if (zn(w))
      return zi(w);
    if (be(w))
      return Dr(w, l, 2);
    process.env.NODE_ENV !== "production" && o(w);
  })) : be(t) ? e ? u = () => Dr(t, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return h && h(), Cn(t, l, 3, [d]);
  } : (u = At, process.env.NODE_ENV !== "production" && o(t)), e && r) {
    const w = u;
    u = () => zi(w());
  }
  let h, d = (w) => {
    h = y.onStop = () => {
      Dr(w, l, 4);
    };
  }, m;
  if (Ha)
    if (d = At, e ? n && Cn(e, l, 3, [
      u(),
      c ? [] : void 0,
      d
    ]) : u(), i === "sync") {
      const w = uE();
      m = w.__watcherHandles || (w.__watcherHandles = []);
    } else
      return At;
  let p = c ? new Array(t.length).fill(Ao) : Ao;
  const g = () => {
    if (!!y.active)
      if (e) {
        const w = y.run();
        (r || f || (c ? w.some((S, P) => ja(S, p[P])) : ja(w, p))) && (h && h(), Cn(e, l, 3, [
          w,
          p === Ao ? void 0 : c && p[0] === Ao ? [] : p,
          d
        ]), p = w);
      } else
        y.run();
  };
  g.allowRecurse = !!e;
  let v;
  i === "sync" ? v = g : i === "post" ? v = () => on(g, l && l.suspense) : (g.pre = !0, l && (g.id = l.uid), v = () => Tu(g));
  const y = new Xf(u, v);
  process.env.NODE_ENV !== "production" && (y.onTrack = s, y.onTrigger = a), e ? n ? g() : p = y.run() : i === "post" ? on(y.run.bind(y), l && l.suspense) : y.run();
  const E = () => {
    y.stop(), l && l.scope && qf(l.scope.effects, y);
  };
  return m && m.push(E), E;
}
function r1(t, e, n) {
  const r = this.proxy, i = st(t) ? t.includes(".") ? Ig(r, t) : () => r[t] : t.bind(r, r);
  let s;
  be(e) ? s = e : (s = e.handler, n = e);
  const a = ht;
  qs(this);
  const o = nh(i, s.bind(r), n);
  return a ? qs(a) : Ji(), o;
}
function Ig(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function zi(t, e) {
  if (!We(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), qe(t))
    zi(t.value, e);
  else if (fe(t))
    for (let n = 0; n < t.length; n++)
      zi(t[n], e);
  else if (Kp(t) || Yi(t))
    t.forEach((n) => {
      zi(n, e);
    });
  else if (Jp(t))
    for (const n in t)
      zi(t[n], e);
  return t;
}
function i1() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return bn(() => {
    t.isMounted = !0;
  }), jg(() => {
    t.isUnmounting = !0;
  }), t;
}
const wn = [Function, Array], s1 = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: wn,
    onEnter: wn,
    onAfterEnter: wn,
    onEnterCancelled: wn,
    onBeforeLeave: wn,
    onLeave: wn,
    onAfterLeave: wn,
    onLeaveCancelled: wn,
    onBeforeAppear: wn,
    onAppear: wn,
    onAfterAppear: wn,
    onAppearCancelled: wn
  },
  setup(t, { slots: e }) {
    const n = Pu(), r = i1();
    let i;
    return () => {
      const s = e.default && Fg(e.default(), !0);
      if (!s || !s.length)
        return;
      let a = s[0];
      if (s.length > 1) {
        let p = !1;
        for (const g of s)
          if (g.type !== Mt) {
            if (process.env.NODE_ENV !== "production" && p) {
              B("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (a = g, p = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const o = ve(t), { mode: l } = o;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), r.isLeaving)
        return ec(a);
      const u = ud(a);
      if (!u)
        return ec(a);
      const f = Zc(u, o, r, n);
      Jc(u, f);
      const c = n.subTree, h = c && ud(c);
      let d = !1;
      const { getTransitionKey: m } = u.type;
      if (m) {
        const p = m();
        i === void 0 ? i = p : p !== i && (i = p, d = !0);
      }
      if (h && h.type !== Mt && (!qi(u, h) || d)) {
        const p = Zc(h, o, r, n);
        if (Jc(h, p), l === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, ec(a);
        l === "in-out" && u.type !== Mt && (p.delayLeave = (g, v, y) => {
          const E = $g(r, h);
          E[String(h.key)] = h, g._leaveCb = () => {
            v(), g._leaveCb = void 0, delete f.delayedLeave;
          }, f.delayedLeave = y;
        });
      }
      return a;
    };
  }
}, Rg = s1;
function $g(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function Zc(t, e, n, r) {
  const { appear: i, mode: s, persisted: a = !1, onBeforeEnter: o, onEnter: l, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: c, onLeave: h, onAfterLeave: d, onLeaveCancelled: m, onBeforeAppear: p, onAppear: g, onAfterAppear: v, onAppearCancelled: y } = e, E = String(t.key), w = $g(n, t), S = (C, T) => {
    C && Cn(C, r, 9, T);
  }, P = (C, T) => {
    const N = T[1];
    S(C, T), fe(C) ? C.every((U) => U.length <= 1) && N() : C.length <= 1 && N();
  }, k = {
    mode: s,
    persisted: a,
    beforeEnter(C) {
      let T = o;
      if (!n.isMounted)
        if (i)
          T = p || o;
        else
          return;
      C._leaveCb && C._leaveCb(!0);
      const N = w[E];
      N && qi(t, N) && N.el._leaveCb && N.el._leaveCb(), S(T, [C]);
    },
    enter(C) {
      let T = l, N = u, U = f;
      if (!n.isMounted)
        if (i)
          T = g || l, N = v || u, U = y || f;
        else
          return;
      let R = !1;
      const re = C._enterCb = (M) => {
        R || (R = !0, M ? S(U, [C]) : S(N, [C]), k.delayedLeave && k.delayedLeave(), C._enterCb = void 0);
      };
      T ? P(T, [C, re]) : re();
    },
    leave(C, T) {
      const N = String(t.key);
      if (C._enterCb && C._enterCb(!0), n.isUnmounting)
        return T();
      S(c, [C]);
      let U = !1;
      const R = C._leaveCb = (re) => {
        U || (U = !0, T(), re ? S(m, [C]) : S(d, [C]), C._leaveCb = void 0, w[N] === t && delete w[N]);
      };
      w[N] = t, h ? P(h, [C, R]) : R();
    },
    clone(C) {
      return Zc(C, e, n, r);
    }
  };
  return k;
}
function ec(t) {
  if (io(t))
    return t = gr(t), t.children = null, t;
}
function ud(t) {
  return io(t) ? t.children ? t.children[0] : void 0 : t;
}
function Jc(t, e) {
  t.shapeFlag & 6 && t.component ? Jc(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Fg(t, e = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === Ve ? (a.patchFlag & 128 && i++, r = r.concat(Fg(a.children, e, o))) : (e || a.type !== Mt) && r.push(o != null ? gr(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
function he(t) {
  return be(t) ? { setup: t, name: t.name } : t;
}
const Ta = (t) => !!t.type.__asyncLoader, io = (t) => t.type.__isKeepAlive;
function a1(t, e) {
  Vg(t, "a", e);
}
function o1(t, e) {
  Vg(t, "da", e);
}
function Vg(t, e, n = ht) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (Cu(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      io(i.parent.vnode) && l1(r, e, n, i), i = i.parent;
  }
}
function l1(t, e, n, r) {
  const i = Cu(e, t, r, !0);
  wi(() => {
    qf(r[e], i);
  }, n);
}
function Cu(t, e, n = ht, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      as(), qs(n);
      const o = Cn(e, n, t, a);
      return Ji(), os(), o;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Vi(Jf[t].replace(/ hook$/, ""));
    B(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ur = (t) => (e, n = ht) => (!Ha || t === "sp") && Cu(t, (...r) => e(...r), n), u1 = Ur("bm"), bn = Ur("m"), c1 = Ur("bu"), f1 = Ur("u"), jg = Ur("bum"), wi = Ur("um"), h1 = Ur("sp"), d1 = Ur("rtg"), m1 = Ur("rtc");
function p1(t, e = ht) {
  Cu("ec", t, e);
}
function Gg(t) {
  G_(t) && B("Do not use built-in directive ids as custom directive id: " + t);
}
function $l(t, e) {
  const n = wt;
  if (n === null)
    return process.env.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), t;
  const r = Au(n) || n.proxy, i = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [a, o, l, u = Ke] = e[s];
    a && (be(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && zi(o), i.push({
      dir: a,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return t;
}
function Ci(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[r];
    l && (as(), Cn(l, n, 8, [
      t.el,
      o,
      t,
      e
    ]), os());
  }
}
const Qc = "components", g1 = "directives";
function y1(t, e) {
  return Ug(Qc, t, !0, e) || t;
}
const v1 = Symbol();
function rh(t) {
  return Ug(g1, t);
}
function Ug(t, e, n = !0, r = !1) {
  const i = wt || ht;
  if (i) {
    const s = i.type;
    if (t === Qc) {
      const o = lh(s, !1);
      if (o && (o === e || o === yn(e) || o === ts(yn(e))))
        return s;
    }
    const a = cd(i[t] || s[t], e) || cd(i.appContext[t], e);
    if (!a && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !a) {
      const o = t === Qc ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${t.slice(0, -1)}: ${e}${o}`);
    }
    return a;
  } else
    process.env.NODE_ENV !== "production" && B(`resolve${ts(t.slice(0, -1))} can only be used in render() or setup().`);
}
function cd(t, e) {
  return t && (t[e] || t[yn(e)] || t[ts(yn(e))]);
}
function Pn(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (fe(t) || st(t)) {
    i = new Array(t.length);
    for (let a = 0, o = t.length; a < o; a++)
      i[a] = e(t[a], a, void 0, s && s[a]);
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && B(`The v-for range expect an integer value but got ${t}.`), i = new Array(t);
    for (let a = 0; a < t; a++)
      i[a] = e(a + 1, a, void 0, s && s[a]);
  } else if (We(t))
    if (t[Symbol.iterator])
      i = Array.from(t, (a, o) => e(a, o, void 0, s && s[o]));
    else {
      const a = Object.keys(t);
      i = new Array(a.length);
      for (let o = 0, l = a.length; o < l; o++) {
        const u = a[o];
        i[o] = e(t[u], u, o, s && s[o]);
      }
    }
  else
    i = [];
  return n && (n[r] = i), i;
}
function Bg(t, e, n = {}, r, i) {
  if (wt.isCE || wt.parent && Ta(wt.parent) && wt.parent.isCE)
    return e !== "default" && (n.name = e), ne("slot", n, r && r());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (B("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), A();
  const a = s && qg(s(n)), o = je(Ve, {
    key: n.key || a && a.key || `_${e}`
  }, a || (r ? r() : []), a && t._ === 1 ? 64 : -2);
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function qg(t) {
  return t.some((e) => Bs(e) ? !(e.type === Mt || e.type === Ve && !qg(e.children)) : !0) ? t : null;
}
const ef = (t) => t ? ay(t) ? Au(t) || t.proxy : ef(t.parent) : null, Zi = /* @__PURE__ */ it(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Os(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Os(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Os(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Os(t.refs) : t.refs,
  $parent: (t) => ef(t.parent),
  $root: (t) => ef(t.root),
  $emit: (t) => t.emit,
  $options: (t) => sh(t),
  $forceUpdate: (t) => t.f || (t.f = () => Tu(t.update)),
  $nextTick: (t) => t.n || (t.n = Dl.bind(t.proxy)),
  $watch: (t) => r1.bind(t)
}), ih = (t) => t === "_" || t === "$", tc = (t, e) => t !== Ke && !t.__isScriptSetup && Le(t, e), Wg = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: a, type: o, appContext: l } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let u;
    if (e[0] !== "$") {
      const d = a[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (tc(r, e))
          return a[e] = 1, r[e];
        if (i !== Ke && Le(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && Le(u, e))
          return a[e] = 3, s[e];
        if (n !== Ke && Le(n, e))
          return a[e] = 4, n[e];
        tf && (a[e] = 0);
      }
    }
    const f = Zi[e];
    let c, h;
    if (f)
      return e === "$attrs" && (Zt(t, "get", e), process.env.NODE_ENV !== "production" && Rl()), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (n !== Ke && Le(n, e))
      return a[e] = 4, n[e];
    if (h = l.config.globalProperties, Le(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && wt && (!st(e) || e.indexOf("__v") !== 0) && (i !== Ke && ih(e[0]) && Le(i, e) ? B(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === wt && B(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return tc(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && Le(i, e) ? (B(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Ke && Le(r, e) ? (r[e] = n, !0) : Le(t.props, e) ? (process.env.NODE_ENV !== "production" && B(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && B(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s } }, a) {
    let o;
    return !!n[a] || t !== Ke && Le(t, a) || tc(e, a) || (o = s[0]) && Le(o, a) || Le(r, a) || Le(Zi, a) || Le(i.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Le(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Wg.ownKeys = (t) => (B("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
function _1(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Zi).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Zi[n](t),
      set: At
    });
  }), e;
}
function b1(t) {
  const { ctx: e, propsOptions: [n] } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: At
    });
  });
}
function E1(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(ve(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (ih(r[0])) {
        B(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: At
      });
    }
  });
}
function w1() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? B(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let tf = !0;
function x1(t) {
  const e = sh(t), n = t.proxy, r = t.ctx;
  tf = !1, e.beforeCreate && fd(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: a,
    watch: o,
    provide: l,
    inject: u,
    created: f,
    beforeMount: c,
    mounted: h,
    beforeUpdate: d,
    updated: m,
    activated: p,
    deactivated: g,
    beforeDestroy: v,
    beforeUnmount: y,
    destroyed: E,
    unmounted: w,
    render: S,
    renderTracked: P,
    renderTriggered: k,
    errorCaptured: C,
    serverPrefetch: T,
    expose: N,
    inheritAttrs: U,
    components: R,
    directives: re,
    filters: M
  } = e, j = process.env.NODE_ENV !== "production" ? w1() : null;
  if (process.env.NODE_ENV !== "production") {
    const [J] = t.propsOptions;
    if (J)
      for (const ae in J)
        j("Props", ae);
  }
  if (u && S1(u, r, j, t.appContext.config.unwrapInjectedRef), a)
    for (const J in a) {
      const ae = a[J];
      be(ae) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, J, {
        value: ae.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[J] = ae.bind(n), process.env.NODE_ENV !== "production" && j("Methods", J)) : process.env.NODE_ENV !== "production" && B(`Method "${J}" has type "${typeof ae}" in the component definition. Did you reference the function correctly?`);
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !be(i) && B("The data option must be a function. Plain object usage is no longer supported.");
    const J = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && Hf(J) && B("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !We(J))
      process.env.NODE_ENV !== "production" && B("data() should return an object.");
    else if (t.data = Su(J), process.env.NODE_ENV !== "production")
      for (const ae in J)
        j("Data", ae), ih(ae[0]) || Object.defineProperty(r, ae, {
          configurable: !0,
          enumerable: !0,
          get: () => J[ae],
          set: At
        });
  }
  if (tf = !0, s)
    for (const J in s) {
      const ae = s[J], _e = be(ae) ? ae.bind(n, n) : be(ae.get) ? ae.get.bind(n, n) : At;
      process.env.NODE_ENV !== "production" && _e === At && B(`Computed property "${J}" has no getter.`);
      const Qt = !be(ae) && be(ae.set) ? ae.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        B(`Write operation failed: computed property "${J}" is readonly.`);
      } : At, tt = me({
        get: _e,
        set: Qt
      });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (Ae) => tt.value = Ae
      }), process.env.NODE_ENV !== "production" && j("Computed", J);
    }
  if (o)
    for (const J in o)
      Hg(o[J], r, n, J);
  if (l) {
    const J = be(l) ? l.call(n) : l;
    Reflect.ownKeys(J).forEach((ae) => {
      Dg(ae, J[ae]);
    });
  }
  f && fd(f, t, "c");
  function Z(J, ae) {
    fe(ae) ? ae.forEach((_e) => J(_e.bind(n))) : ae && J(ae.bind(n));
  }
  if (Z(u1, c), Z(bn, h), Z(c1, d), Z(f1, m), Z(a1, p), Z(o1, g), Z(p1, C), Z(m1, P), Z(d1, k), Z(jg, y), Z(wi, w), Z(h1, T), fe(N))
    if (N.length) {
      const J = t.exposed || (t.exposed = {});
      N.forEach((ae) => {
        Object.defineProperty(J, ae, {
          get: () => n[ae],
          set: (_e) => n[ae] = _e
        });
      });
    } else
      t.exposed || (t.exposed = {});
  S && t.render === At && (t.render = S), U != null && (t.inheritAttrs = U), R && (t.components = R), re && (t.directives = re);
}
function S1(t, e, n = At, r = !1) {
  fe(t) && (t = nf(t));
  for (const i in t) {
    const s = t[i];
    let a;
    We(s) ? "default" in s ? a = Ds(s.from || i, s.default, !0) : a = Ds(s.from || i) : a = Ds(s), qe(a) ? r ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : (process.env.NODE_ENV !== "production" && B(`injected property "${i}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), e[i] = a) : e[i] = a, process.env.NODE_ENV !== "production" && n("Inject", i);
  }
}
function fd(t, e, n) {
  Cn(fe(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Hg(t, e, n, r) {
  const i = r.includes(".") ? Ig(n, r) : () => n[r];
  if (st(t)) {
    const s = e[t];
    be(s) ? Je(i, s) : process.env.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${t}"`, s);
  } else if (be(t))
    Je(i, t.bind(n));
  else if (We(t))
    if (fe(t))
      t.forEach((s) => Hg(s, e, n, r));
    else {
      const s = be(t.handler) ? t.handler.bind(n) : e[t.handler];
      be(s) ? Je(i, s, t) : process.env.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && B(`Invalid watch option: "${r}"`, t);
}
function sh(t) {
  const e = t.type, { mixins: n, extends: r } = e, { mixins: i, optionsCache: s, config: { optionMergeStrategies: a } } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach((u) => Fl(l, u, a, !0)), Fl(l, e, a)), We(e) && s.set(e, l), l;
}
function Fl(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Fl(t, s, n, !0), i && i.forEach((a) => Fl(t, a, n, !0));
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && B('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const o = O1[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const O1 = {
  data: hd,
  props: ji,
  emits: ji,
  methods: ji,
  computed: ji,
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  components: ji,
  directives: ji,
  watch: T1,
  provide: hd,
  inject: M1
};
function hd(t, e) {
  return e ? t ? function() {
    return it(be(t) ? t.call(this, this) : t, be(e) ? e.call(this, this) : e);
  } : e : t;
}
function M1(t, e) {
  return ji(nf(t), nf(e));
}
function nf(t) {
  if (fe(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function qt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ji(t, e) {
  return t ? it(it(/* @__PURE__ */ Object.create(null), t), e) : e;
}
function T1(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = it(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = qt(t[r], e[r]);
  return n;
}
function N1(t, e, n, r = !1) {
  const i = {}, s = {};
  Cl(s, Lu, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), zg(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && Xg(e || {}, i, t), n ? t.props = r ? i : Eb(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function C1(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function L1(t, e, n, r) {
  const { props: i, attrs: s, vnode: { patchFlag: a } } = t, o = ve(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && C1(t)) && (r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (Nu(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (Le(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const m = yn(h);
            i[m] = rf(l, o, m, d, t, !1);
          }
        else
          d !== s[h] && (s[h] = d, u = !0);
      }
    }
  } else {
    zg(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !Le(e, c) && ((f = ln(c)) === c || !Le(e, f))) && (l ? n && (n[c] !== void 0 || n[f] !== void 0) && (i[c] = rf(l, o, c, void 0, t, !0)) : delete i[c]);
    if (s !== o)
      for (const c in s)
        (!e || !Le(e, c) && !0) && (delete s[c], u = !0);
  }
  u && Fr(t, "set", "$attrs"), process.env.NODE_ENV !== "production" && Xg(e || {}, i, t);
}
function zg(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (al(l))
        continue;
      const u = e[l];
      let f;
      i && Le(i, f = yn(l)) ? !s || !s.includes(f) ? n[f] = u : (o || (o = {}))[f] = u : Nu(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = ve(n), u = o || Ke;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = rf(i, l, c, u[c], t, !Le(u, c));
    }
  }
  return a;
}
function rf(t, e, n, r, i, s) {
  const a = t[n];
  if (a != null) {
    const o = Le(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && be(l)) {
        const { propsDefaults: u } = i;
        n in u ? r = u[n] : (qs(i), r = u[n] = l.call(null, e), Ji());
      } else
        r = l;
    }
    a[0] && (s && !o ? r = !1 : a[1] && (r === "" || r === ln(n)) && (r = !0));
  }
  return r;
}
function Yg(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!be(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = Yg(c, e, !0);
      it(a, h), d && o.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return We(t) && r.set(t, As), As;
  if (fe(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !st(s[f]) && B("props must be strings when using array syntax.", s[f]);
      const c = yn(s[f]);
      dd(c) && (a[c] = Ke);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !We(s) && B("invalid props options", s);
    for (const f in s) {
      const c = yn(f);
      if (dd(c)) {
        const h = s[f], d = a[c] = fe(h) || be(h) ? { type: h } : Object.assign({}, h);
        if (d) {
          const m = pd(Boolean, d.type), p = pd(String, d.type);
          d[0] = m > -1, d[1] = p < 0 || m < p, (m > -1 || Le(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return We(t) && r.set(t, u), u;
}
function dd(t) {
  return t[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && B(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function sf(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function md(t, e) {
  return sf(t) === sf(e);
}
function pd(t, e) {
  return fe(e) ? e.findIndex((n) => md(n, t)) : be(e) && md(e, t) ? 0 : -1;
}
function Xg(t, e, n) {
  const r = ve(e), i = n.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && P1(s, r[s], a, !Le(t, s) && !Le(t, ln(s)));
  }
}
function P1(t, e, n, r) {
  const { type: i, required: s, validator: a } = n;
  if (s && r) {
    B('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !n.required)) {
    if (i != null && i !== !0) {
      let o = !1;
      const l = fe(i) ? i : [i], u = [];
      for (let f = 0; f < l.length && !o; f++) {
        const { valid: c, expectedType: h } = k1(e, l[f]);
        u.push(h || ""), o = c;
      }
      if (!o) {
        B(D1(t, e, u));
        return;
      }
    }
    a && !a(e) && B('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const A1 = /* @__PURE__ */ bi("String,Number,Boolean,Function,Symbol,BigInt");
function k1(t, e) {
  let n;
  const r = sf(e);
  if (A1(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = We(t) : r === "Array" ? n = fe(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function D1(t, e, n) {
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(ts).join(" | ")}`;
  const i = n[0], s = zf(e), a = gd(e, i), o = gd(e, s);
  return n.length === 1 && yd(i) && !I1(i, s) && (r += ` with value ${a}`), r += `, got ${s} `, yd(s) && (r += `with value ${o}.`), r;
}
function gd(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function yd(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function I1(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Kg = (t) => t[0] === "_" || t === "$stable", ah = (t) => fe(t) ? t.map(Un) : [Un(t)], R1 = (t, e, n) => {
  if (e._n)
    return e;
  const r = ci((...i) => (process.env.NODE_ENV !== "production" && ht && B(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), ah(e(...i))), n);
  return r._c = !1, r;
}, Zg = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Kg(i))
      continue;
    const s = t[i];
    if (be(s))
      e[i] = R1(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && B(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);
      const a = ah(s);
      e[i] = () => a;
    }
  }
}, Jg = (t, e) => {
  process.env.NODE_ENV !== "production" && !io(t.vnode) && B("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = ah(e);
  t.slots.default = () => n;
}, $1 = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = ve(e), Cl(e, "_", n)) : Zg(e, t.slots = {});
  } else
    t.slots = {}, e && Jg(t, e);
  Cl(t.slots, Lu, 1);
}, F1 = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, a = Ke;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && ui ? it(i, e) : n && o === 1 ? s = !1 : (it(i, e), !n && o === 1 && delete i._) : (s = !e.$stable, Zg(e, i)), a = e;
  } else
    e && (Jg(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !Kg(o) && !(o in a) && delete i[o];
};
function Qg() {
  return {
    app: null,
    config: {
      isNativeTag: Xp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let V1 = 0;
function j1(t, e) {
  return function(r, i = null) {
    be(r) || (r = Object.assign({}, r)), i != null && !We(i) && (process.env.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), i = null);
    const s = Qg(), a = /* @__PURE__ */ new Set();
    let o = !1;
    const l = s.app = {
      _uid: V1++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: wd,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && B("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...f) {
        return a.has(u) ? process.env.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : u && be(u.install) ? (a.add(u), u.install(l, ...f)) : be(u) ? (a.add(u), u(l, ...f)) : process.env.NODE_ENV !== "production" && B('A plugin must either be a function or an object with an "install" function.'), l;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && B("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : s.mixins.push(u), l;
      },
      component(u, f) {
        return process.env.NODE_ENV !== "production" && lf(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && B(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && Gg(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && B(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
      },
      mount(u, f, c) {
        if (o)
          process.env.NODE_ENV !== "production" && B("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && B("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const h = ne(r, i);
          return h.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            t(gr(h), u, c);
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, Gb(l, wd)), Au(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, Ub(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in s.provides && B(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), s.provides[u] = f, l;
      }
    };
    return l;
  };
}
function af(t, e, n, r, i = !1) {
  if (fe(t)) {
    t.forEach((h, d) => af(h, e && (fe(e) ? e[d] : e), n, r, i));
    return;
  }
  if (Ta(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Au(r.component) || r.component.proxy : r.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    B("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = e && e.r, f = o.refs === Ke ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (st(u) ? (f[u] = null, Le(c, u) && (c[u] = null)) : qe(u) && (u.value = null)), be(l))
    Dr(l, o, 12, [a, f]);
  else {
    const h = st(l), d = qe(l);
    if (h || d) {
      const m = () => {
        if (t.f) {
          const p = h ? Le(c, l) ? c[l] : f[l] : l.value;
          i ? fe(p) && qf(p, s) : fe(p) ? p.includes(s) || p.push(s) : h ? (f[l] = [s], Le(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, Le(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (m.id = -1, on(m, n)) : m();
    } else
      process.env.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let ia, ri;
function Cr(t, e) {
  t.appContext.config.performance && Vl() && ri.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && Hb(t, e, Vl() ? ri.now() : Date.now());
}
function Lr(t, e) {
  if (t.appContext.config.performance && Vl()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    ri.mark(r), ri.measure(`<${ku(t, t.type)}> ${e}`, n, r), ri.clearMarks(n), ri.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && zb(t, e, Vl() ? ri.now() : Date.now());
}
function Vl() {
  return ia !== void 0 || (typeof window < "u" && window.performance ? (ia = !0, ri = window.performance) : ia = !1), ia;
}
function G1() {
  const t = [];
  if (process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(`Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const on = n1;
function U1(t) {
  return B1(t);
}
function B1(t, e) {
  G1();
  const n = Qp();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ng(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: r, remove: i, patchProp: s, createElement: a, createText: o, createComment: l, setText: u, setElementText: f, parentNode: c, nextSibling: h, setScopeId: d = At, insertStaticContent: m } = t, p = (_, x, D, F = null, I = null, H = null, K = !1, q = null, Y = process.env.NODE_ENV !== "production" && ui ? !1 : !!x.dynamicChildren) => {
    if (_ === x)
      return;
    _ && !qi(_, x) && (F = En(_), cn(_, I, H, !0), _ = null), x.patchFlag === -2 && (Y = !1, x.dynamicChildren = null);
    const { type: G, ref: oe, shapeFlag: ie } = x;
    switch (G) {
      case so:
        g(_, x, D, F);
        break;
      case Mt:
        v(_, x, D, F);
        break;
      case ul:
        _ == null ? y(x, D, F, K) : process.env.NODE_ENV !== "production" && E(_, x, D, K);
        break;
      case Ve:
        re(_, x, D, F, I, H, K, q, Y);
        break;
      default:
        ie & 1 ? P(_, x, D, F, I, H, K, q, Y) : ie & 6 ? M(_, x, D, F, I, H, K, q, Y) : ie & 64 || ie & 128 ? G.process(_, x, D, F, I, H, K, q, Y, en) : process.env.NODE_ENV !== "production" && B("Invalid VNode type:", G, `(${typeof G})`);
    }
    oe != null && I && af(oe, _ && _.ref, H, x || _, !x);
  }, g = (_, x, D, F) => {
    if (_ == null)
      r(x.el = o(x.children), D, F);
    else {
      const I = x.el = _.el;
      x.children !== _.children && u(I, x.children);
    }
  }, v = (_, x, D, F) => {
    _ == null ? r(x.el = l(x.children || ""), D, F) : x.el = _.el;
  }, y = (_, x, D, F) => {
    [_.el, _.anchor] = m(_.children, x, D, F, _.el, _.anchor);
  }, E = (_, x, D, F) => {
    if (x.children !== _.children) {
      const I = h(_.anchor);
      S(_), [x.el, x.anchor] = m(x.children, D, I, F);
    } else
      x.el = _.el, x.anchor = _.anchor;
  }, w = ({ el: _, anchor: x }, D, F) => {
    let I;
    for (; _ && _ !== x; )
      I = h(_), r(_, D, F), _ = I;
    r(x, D, F);
  }, S = ({ el: _, anchor: x }) => {
    let D;
    for (; _ && _ !== x; )
      D = h(_), i(_), _ = D;
    i(x);
  }, P = (_, x, D, F, I, H, K, q, Y) => {
    K = K || x.type === "svg", _ == null ? k(x, D, F, I, H, K, q, Y) : N(_, x, I, H, K, q, Y);
  }, k = (_, x, D, F, I, H, K, q) => {
    let Y, G;
    const { type: oe, props: ie, shapeFlag: le, transition: de, dirs: Ne } = _;
    if (Y = _.el = a(_.type, H, ie && ie.is, ie), le & 8 ? f(Y, _.children) : le & 16 && T(_.children, Y, null, F, I, H && oe !== "foreignObject", K, q), Ne && Ci(_, null, F, "created"), C(Y, _, _.scopeId, K, F), ie) {
      for (const Ie in ie)
        Ie !== "value" && !al(Ie) && s(Y, Ie, null, ie[Ie], H, _.children, F, I, pt);
      "value" in ie && s(Y, "value", null, ie.value), (G = ie.onVnodeBeforeMount) && er(G, F, _);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(Y, "__vnode", {
      value: _,
      enumerable: !1
    }), Object.defineProperty(Y, "__vueParentComponent", {
      value: F,
      enumerable: !1
    })), Ne && Ci(_, null, F, "beforeMount");
    const Ge = (!I || I && !I.pendingBranch) && de && !de.persisted;
    Ge && de.beforeEnter(Y), r(Y, x, D), ((G = ie && ie.onVnodeMounted) || Ge || Ne) && on(() => {
      G && er(G, F, _), Ge && de.enter(Y), Ne && Ci(_, null, F, "mounted");
    }, I);
  }, C = (_, x, D, F, I) => {
    if (D && d(_, D), F)
      for (let H = 0; H < F.length; H++)
        d(_, F[H]);
    if (I) {
      let H = I.subTree;
      if (process.env.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && (H = kg(H.children) || H), x === H) {
        const K = I.vnode;
        C(_, K, K.scopeId, K.slotScopeIds, I.parent);
      }
    }
  }, T = (_, x, D, F, I, H, K, q, Y = 0) => {
    for (let G = Y; G < _.length; G++) {
      const oe = _[G] = q ? ei(_[G]) : Un(_[G]);
      p(null, oe, x, D, F, I, H, K, q);
    }
  }, N = (_, x, D, F, I, H, K) => {
    const q = x.el = _.el;
    let { patchFlag: Y, dynamicChildren: G, dirs: oe } = x;
    Y |= _.patchFlag & 16;
    const ie = _.props || Ke, le = x.props || Ke;
    let de;
    D && Li(D, !1), (de = le.onVnodeBeforeUpdate) && er(de, D, x, _), oe && Ci(x, _, D, "beforeUpdate"), D && Li(D, !0), process.env.NODE_ENV !== "production" && ui && (Y = 0, K = !1, G = null);
    const Ne = I && x.type !== "foreignObject";
    if (G ? (U(_.dynamicChildren, G, q, D, F, Ne, H), process.env.NODE_ENV !== "production" && D && D.type.__hmrId && Na(_, x)) : K || _e(_, x, q, null, D, F, Ne, H, !1), Y > 0) {
      if (Y & 16)
        R(q, x, ie, le, D, F, I);
      else if (Y & 2 && ie.class !== le.class && s(q, "class", null, le.class, I), Y & 4 && s(q, "style", ie.style, le.style, I), Y & 8) {
        const Ge = x.dynamicProps;
        for (let Ie = 0; Ie < Ge.length; Ie++) {
          const nt = Ge[Ie], tn = ie[nt], kn = le[nt];
          (kn !== tn || nt === "value") && s(q, nt, tn, kn, I, _.children, D, F, pt);
        }
      }
      Y & 1 && _.children !== x.children && f(q, x.children);
    } else
      !K && G == null && R(q, x, ie, le, D, F, I);
    ((de = le.onVnodeUpdated) || oe) && on(() => {
      de && er(de, D, x, _), oe && Ci(x, _, D, "updated");
    }, F);
  }, U = (_, x, D, F, I, H, K) => {
    for (let q = 0; q < x.length; q++) {
      const Y = _[q], G = x[q], oe = Y.el && (Y.type === Ve || !qi(Y, G) || Y.shapeFlag & 70) ? c(Y.el) : D;
      p(Y, G, oe, null, F, I, H, K, !0);
    }
  }, R = (_, x, D, F, I, H, K) => {
    if (D !== F) {
      if (D !== Ke)
        for (const q in D)
          !al(q) && !(q in F) && s(_, q, D[q], null, K, x.children, I, H, pt);
      for (const q in F) {
        if (al(q))
          continue;
        const Y = F[q], G = D[q];
        Y !== G && q !== "value" && s(_, q, G, Y, K, x.children, I, H, pt);
      }
      "value" in F && s(_, "value", D.value, F.value);
    }
  }, re = (_, x, D, F, I, H, K, q, Y) => {
    const G = x.el = _ ? _.el : o(""), oe = x.anchor = _ ? _.anchor : o("");
    let { patchFlag: ie, dynamicChildren: le, slotScopeIds: de } = x;
    process.env.NODE_ENV !== "production" && (ui || ie & 2048) && (ie = 0, Y = !1, le = null), de && (q = q ? q.concat(de) : de), _ == null ? (r(G, D, F), r(oe, D, F), T(x.children, D, oe, I, H, K, q, Y)) : ie > 0 && ie & 64 && le && _.dynamicChildren ? (U(_.dynamicChildren, le, D, I, H, K, q), process.env.NODE_ENV !== "production" && I && I.type.__hmrId ? Na(_, x) : (x.key != null || I && x === I.subTree) && Na(_, x, !0)) : _e(_, x, D, oe, I, H, K, q, Y);
  }, M = (_, x, D, F, I, H, K, q, Y) => {
    x.slotScopeIds = q, _ == null ? x.shapeFlag & 512 ? I.ctx.activate(x, D, F, K, Y) : j(x, D, F, I, H, K, Y) : Z(_, x, Y);
  }, j = (_, x, D, F, I, H, K) => {
    const q = _.component = eE(_, F, I);
    if (process.env.NODE_ENV !== "production" && q.type.__hmrId && $b(q), process.env.NODE_ENV !== "production" && (ol(_), Cr(q, "mount")), io(_) && (q.ctx.renderer = en), process.env.NODE_ENV !== "production" && Cr(q, "init"), nE(q), process.env.NODE_ENV !== "production" && Lr(q, "init"), q.asyncDep) {
      if (I && I.registerDep(q, J), !_.el) {
        const Y = q.subTree = ne(Mt);
        v(null, Y, x, D);
      }
      return;
    }
    J(q, _, x, D, I, H, K), process.env.NODE_ENV !== "production" && (ll(), Lr(q, "mount"));
  }, Z = (_, x, D) => {
    const F = x.component = _.component;
    if (Qb(_, x, D))
      if (F.asyncDep && !F.asyncResolved) {
        process.env.NODE_ENV !== "production" && ol(x), ae(F, x, D), process.env.NODE_ENV !== "production" && ll();
        return;
      } else
        F.next = x, Ib(F.update), F.update();
    else
      x.el = _.el, F.vnode = x;
  }, J = (_, x, D, F, I, H, K) => {
    const q = () => {
      if (_.isMounted) {
        let { next: oe, bu: ie, u: le, parent: de, vnode: Ne } = _, Ge = oe, Ie;
        process.env.NODE_ENV !== "production" && ol(oe || _.vnode), Li(_, !1), oe ? (oe.el = Ne.el, ae(_, oe, K)) : oe = Ne, ie && ra(ie), (Ie = oe.props && oe.props.onVnodeBeforeUpdate) && er(Ie, de, oe, Ne), Li(_, !0), process.env.NODE_ENV !== "production" && Cr(_, "render");
        const nt = Qu(_);
        process.env.NODE_ENV !== "production" && Lr(_, "render");
        const tn = _.subTree;
        _.subTree = nt, process.env.NODE_ENV !== "production" && Cr(_, "patch"), p(
          tn,
          nt,
          c(tn.el),
          En(tn),
          _,
          I,
          H
        ), process.env.NODE_ENV !== "production" && Lr(_, "patch"), oe.el = nt.el, Ge === null && e1(_, nt.el), le && on(le, I), (Ie = oe.props && oe.props.onVnodeUpdated) && on(() => er(Ie, de, oe, Ne), I), process.env.NODE_ENV !== "production" && Cg(_), process.env.NODE_ENV !== "production" && ll();
      } else {
        let oe;
        const { el: ie, props: le } = x, { bm: de, m: Ne, parent: Ge } = _, Ie = Ta(x);
        if (Li(_, !1), de && ra(de), !Ie && (oe = le && le.onVnodeBeforeMount) && er(oe, Ge, x), Li(_, !0), ie && Qn) {
          const nt = () => {
            process.env.NODE_ENV !== "production" && Cr(_, "render"), _.subTree = Qu(_), process.env.NODE_ENV !== "production" && Lr(_, "render"), process.env.NODE_ENV !== "production" && Cr(_, "hydrate"), Qn(ie, _.subTree, _, I, null), process.env.NODE_ENV !== "production" && Lr(_, "hydrate");
          };
          Ie ? x.type.__asyncLoader().then(
            () => !_.isUnmounted && nt()
          ) : nt();
        } else {
          process.env.NODE_ENV !== "production" && Cr(_, "render");
          const nt = _.subTree = Qu(_);
          process.env.NODE_ENV !== "production" && Lr(_, "render"), process.env.NODE_ENV !== "production" && Cr(_, "patch"), p(null, nt, D, F, _, I, H), process.env.NODE_ENV !== "production" && Lr(_, "patch"), x.el = nt.el;
        }
        if (Ne && on(Ne, I), !Ie && (oe = le && le.onVnodeMounted)) {
          const nt = x;
          on(() => er(oe, Ge, nt), I);
        }
        (x.shapeFlag & 256 || Ge && Ta(Ge.vnode) && Ge.vnode.shapeFlag & 256) && _.a && on(_.a, I), _.isMounted = !0, process.env.NODE_ENV !== "production" && Bb(_), x = D = F = null;
      }
    }, Y = _.effect = new Xf(
      q,
      () => Tu(G),
      _.scope
    ), G = _.update = () => Y.run();
    G.id = _.uid, Li(_, !0), process.env.NODE_ENV !== "production" && (Y.onTrack = _.rtc ? (oe) => ra(_.rtc, oe) : void 0, Y.onTrigger = _.rtg ? (oe) => ra(_.rtg, oe) : void 0, G.ownerInstance = _), G();
  }, ae = (_, x, D) => {
    x.component = _;
    const F = _.vnode.props;
    _.vnode = x, _.next = null, L1(_, x.props, F, D), F1(_, x.children, D), as(), sd(), os();
  }, _e = (_, x, D, F, I, H, K, q, Y = !1) => {
    const G = _ && _.children, oe = _ ? _.shapeFlag : 0, ie = x.children, { patchFlag: le, shapeFlag: de } = x;
    if (le > 0) {
      if (le & 128) {
        tt(G, ie, D, F, I, H, K, q, Y);
        return;
      } else if (le & 256) {
        Qt(G, ie, D, F, I, H, K, q, Y);
        return;
      }
    }
    de & 8 ? (oe & 16 && pt(G, I, H), ie !== G && f(D, ie)) : oe & 16 ? de & 16 ? tt(G, ie, D, F, I, H, K, q, Y) : pt(G, I, H, !0) : (oe & 8 && f(D, ""), de & 16 && T(ie, D, F, I, H, K, q, Y));
  }, Qt = (_, x, D, F, I, H, K, q, Y) => {
    _ = _ || As, x = x || As;
    const G = _.length, oe = x.length, ie = Math.min(G, oe);
    let le;
    for (le = 0; le < ie; le++) {
      const de = x[le] = Y ? ei(x[le]) : Un(x[le]);
      p(_[le], de, D, null, I, H, K, q, Y);
    }
    G > oe ? pt(_, I, H, !0, !1, ie) : T(x, D, F, I, H, K, q, Y, ie);
  }, tt = (_, x, D, F, I, H, K, q, Y) => {
    let G = 0;
    const oe = x.length;
    let ie = _.length - 1, le = oe - 1;
    for (; G <= ie && G <= le; ) {
      const de = _[G], Ne = x[G] = Y ? ei(x[G]) : Un(x[G]);
      if (qi(de, Ne))
        p(de, Ne, D, null, I, H, K, q, Y);
      else
        break;
      G++;
    }
    for (; G <= ie && G <= le; ) {
      const de = _[ie], Ne = x[le] = Y ? ei(x[le]) : Un(x[le]);
      if (qi(de, Ne))
        p(de, Ne, D, null, I, H, K, q, Y);
      else
        break;
      ie--, le--;
    }
    if (G > ie) {
      if (G <= le) {
        const de = le + 1, Ne = de < oe ? x[de].el : F;
        for (; G <= le; )
          p(null, x[G] = Y ? ei(x[G]) : Un(x[G]), D, Ne, I, H, K, q, Y), G++;
      }
    } else if (G > le)
      for (; G <= ie; )
        cn(_[G], I, H, !0), G++;
    else {
      const de = G, Ne = G, Ge = /* @__PURE__ */ new Map();
      for (G = Ne; G <= le; G++) {
        const bt = x[G] = Y ? ei(x[G]) : Un(x[G]);
        bt.key != null && (process.env.NODE_ENV !== "production" && Ge.has(bt.key) && B("Duplicate keys found during update:", JSON.stringify(bt.key), "Make sure keys are unique."), Ge.set(bt.key, G));
      }
      let Ie, nt = 0;
      const tn = le - Ne + 1;
      let kn = !1, Ti = 0;
      const Gt = new Array(tn);
      for (G = 0; G < tn; G++)
        Gt[G] = 0;
      for (G = de; G <= ie; G++) {
        const bt = _[G];
        if (nt >= tn) {
          cn(bt, I, H, !0);
          continue;
        }
        let nn;
        if (bt.key != null)
          nn = Ge.get(bt.key);
        else
          for (Ie = Ne; Ie <= le; Ie++)
            if (Gt[Ie - Ne] === 0 && qi(bt, x[Ie])) {
              nn = Ie;
              break;
            }
        nn === void 0 ? cn(bt, I, H, !0) : (Gt[nn - Ne] = G + 1, nn >= Ti ? Ti = nn : kn = !0, p(bt, x[nn], D, null, I, H, K, q, Y), nt++);
      }
      const wr = kn ? q1(Gt) : As;
      for (Ie = wr.length - 1, G = tn - 1; G >= 0; G--) {
        const bt = Ne + G, nn = x[bt], xo = bt + 1 < oe ? x[bt + 1].el : F;
        Gt[G] === 0 ? p(null, nn, D, xo, I, H, K, q, Y) : kn && (Ie < 0 || G !== wr[Ie] ? Ae(nn, D, xo, 2) : Ie--);
      }
    }
  }, Ae = (_, x, D, F, I = null) => {
    const { el: H, type: K, transition: q, children: Y, shapeFlag: G } = _;
    if (G & 6) {
      Ae(_.component.subTree, x, D, F);
      return;
    }
    if (G & 128) {
      _.suspense.move(x, D, F);
      return;
    }
    if (G & 64) {
      K.move(_, x, D, en);
      return;
    }
    if (K === Ve) {
      r(H, x, D);
      for (let ie = 0; ie < Y.length; ie++)
        Ae(Y[ie], x, D, F);
      r(_.anchor, x, D);
      return;
    }
    if (K === ul) {
      w(_, x, D);
      return;
    }
    if (F !== 2 && G & 1 && q)
      if (F === 0)
        q.beforeEnter(H), r(H, x, D), on(() => q.enter(H), I);
      else {
        const { leave: ie, delayLeave: le, afterLeave: de } = q, Ne = () => r(H, x, D), Ge = () => {
          ie(H, () => {
            Ne(), de && de();
          });
        };
        le ? le(H, Ne, Ge) : Ge();
      }
    else
      r(H, x, D);
  }, cn = (_, x, D, F = !1, I = !1) => {
    const { type: H, props: K, ref: q, children: Y, dynamicChildren: G, shapeFlag: oe, patchFlag: ie, dirs: le } = _;
    if (q != null && af(q, null, D, _, !0), oe & 256) {
      x.ctx.deactivate(_);
      return;
    }
    const de = oe & 1 && le, Ne = !Ta(_);
    let Ge;
    if (Ne && (Ge = K && K.onVnodeBeforeUnmount) && er(Ge, x, _), oe & 6)
      ze(_.component, D, F);
    else {
      if (oe & 128) {
        _.suspense.unmount(D, F);
        return;
      }
      de && Ci(_, null, x, "beforeUnmount"), oe & 64 ? _.type.remove(_, x, D, I, en, F) : G && (H !== Ve || ie > 0 && ie & 64) ? pt(G, x, D, !1, !0) : (H === Ve && ie & 384 || !I && oe & 16) && pt(Y, x, D), F && Xe(_);
    }
    (Ne && (Ge = K && K.onVnodeUnmounted) || de) && on(() => {
      Ge && er(Ge, x, _), de && Ci(_, null, x, "unmounted");
    }, D);
  }, Xe = (_) => {
    const { type: x, el: D, anchor: F, transition: I } = _;
    if (x === Ve) {
      process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && I && !I.persisted ? _.children.forEach((K) => {
        K.type === Mt ? i(K.el) : Xe(K);
      }) : Mi(D, F);
      return;
    }
    if (x === ul) {
      S(_);
      return;
    }
    const H = () => {
      i(D), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (_.shapeFlag & 1 && I && !I.persisted) {
      const { leave: K, delayLeave: q } = I, Y = () => K(D, H);
      q ? q(_.el, H, Y) : Y();
    } else
      H();
  }, Mi = (_, x) => {
    let D;
    for (; _ !== x; )
      D = h(_), i(_), _ = D;
    i(x);
  }, ze = (_, x, D) => {
    process.env.NODE_ENV !== "production" && _.type.__hmrId && Fb(_);
    const { bum: F, scope: I, update: H, subTree: K, um: q } = _;
    F && ra(F), I.stop(), H && (H.active = !1, cn(K, _, x, D)), q && on(q, x), on(() => {
      _.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve()), process.env.NODE_ENV !== "production" && Wb(_);
  }, pt = (_, x, D, F = !1, I = !1, H = 0) => {
    for (let K = H; K < _.length; K++)
      cn(_[K], x, D, F, I);
  }, En = (_) => _.shapeFlag & 6 ? En(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : h(_.anchor || _.el), Wr = (_, x, D) => {
    _ == null ? x._vnode && cn(x._vnode, null, null, !0) : p(x._vnode || null, _, x, null, null, null, D), sd(), Og(), x._vnode = _;
  }, en = {
    p,
    um: cn,
    m: Ae,
    r: Xe,
    mt: j,
    mc: T,
    pc: _e,
    pbc: U,
    n: En,
    o: t
  };
  let fn, Qn;
  return e && ([fn, Qn] = e(en)), {
    render: Wr,
    hydrate: fn,
    createApp: j1(Wr, fn)
  };
}
function Li({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Na(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (fe(r) && fe(i))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = ei(i[s]), o.el = a.el), n || Na(a, o)), o.type === so && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Mt && !o.el && (o.el = a.el);
    }
}
function q1(t) {
  const e = t.slice(), n = [0];
  let r, i, s, a, o;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const u = t[r];
    if (u !== 0) {
      if (i = n[n.length - 1], t[i] < u) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, a = n.length - 1; s < a; )
        o = s + a >> 1, t[n[o]] < u ? s = o + 1 : a = o;
      u < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, a = n[s - 1]; s-- > 0; )
    n[s] = a, a = e[a];
  return n;
}
const W1 = (t) => t.__isTeleport, Is = (t) => t && (t.disabled || t.disabled === ""), vd = (t) => typeof SVGElement < "u" && t instanceof SVGElement, of = (t, e) => {
  const n = t && t.to;
  if (st(n))
    if (e) {
      const r = e(n);
      return r || process.env.NODE_ENV !== "production" && B(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), r;
    } else
      return process.env.NODE_ENV !== "production" && B("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !Is(t) && B(`Invalid Teleport target: ${n}`), n;
}, H1 = {
  __isTeleport: !0,
  process(t, e, n, r, i, s, a, o, l, u) {
    const { mc: f, pc: c, pbc: h, o: { insert: d, querySelector: m, createText: p, createComment: g } } = u, v = Is(e.props);
    let { shapeFlag: y, children: E, dynamicChildren: w } = e;
    if (process.env.NODE_ENV !== "production" && ui && (l = !1, w = null), t == null) {
      const S = e.el = process.env.NODE_ENV !== "production" ? g("teleport start") : p(""), P = e.anchor = process.env.NODE_ENV !== "production" ? g("teleport end") : p("");
      d(S, n, r), d(P, n, r);
      const k = e.target = of(e.props, m), C = e.targetAnchor = p("");
      k ? (d(C, k), a = a || vd(k)) : process.env.NODE_ENV !== "production" && !v && B("Invalid Teleport target on mount:", k, `(${typeof k})`);
      const T = (N, U) => {
        y & 16 && f(E, N, U, i, s, a, o, l);
      };
      v ? T(n, P) : k && T(k, C);
    } else {
      e.el = t.el;
      const S = e.anchor = t.anchor, P = e.target = t.target, k = e.targetAnchor = t.targetAnchor, C = Is(t.props), T = C ? n : P, N = C ? S : k;
      if (a = a || vd(P), w ? (h(t.dynamicChildren, w, T, i, s, a, o), Na(t, e, !0)) : l || c(t, e, T, N, i, s, a, o, !1), v)
        C || ko(e, n, S, u, 1);
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const U = e.target = of(e.props, m);
        U ? ko(e, U, null, u, 0) : process.env.NODE_ENV !== "production" && B("Invalid Teleport target on update:", P, `(${typeof P})`);
      } else
        C && ko(e, P, k, u, 1);
    }
    ty(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), (a || !Is(h)) && (s(u), o & 16))
      for (let d = 0; d < l.length; d++) {
        const m = l[d];
        i(m, e, n, !0, !!m.dynamicChildren);
      }
  },
  move: ko,
  hydrate: z1
};
function ko(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: f } = t, c = s === 2;
  if (c && r(a, e, n), (!c || Is(f)) && l & 16)
    for (let h = 0; h < u.length; h++)
      i(u[h], e, n, 2);
  c && r(o, e, n);
}
function z1(t, e, n, r, i, s, { o: { nextSibling: a, parentNode: o, querySelector: l } }, u) {
  const f = e.target = of(e.props, l);
  if (f) {
    const c = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (Is(e.props))
        e.anchor = u(a(t), e, o(t), n, r, i, s), e.targetAnchor = c;
      else {
        e.anchor = a(t);
        let h = c;
        for (; h; )
          if (h = a(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
            e.targetAnchor = h, f._lpa = e.targetAnchor && a(e.targetAnchor);
            break;
          }
        u(c, e, f, n, r, i, s);
      }
    ty(e);
  }
  return e.anchor && a(e.anchor);
}
const ey = H1;
function ty(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const Ve = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), so = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Mt = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), ul = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Ca = [];
let qn = null;
function A(t = !1) {
  Ca.push(qn = t ? null : []);
}
function Y1() {
  Ca.pop(), qn = Ca[Ca.length - 1] || null;
}
let Wa = 1;
function _d(t) {
  Wa += t;
}
function ny(t) {
  return t.dynamicChildren = Wa > 0 ? qn || As : null, Y1(), Wa > 0 && qn && qn.push(t), t;
}
function V(t, e, n, r, i, s) {
  return ny(L(t, e, n, r, i, s, !0));
}
function je(t, e, n, r, i) {
  return ny(ne(t, e, n, r, i, !0));
}
function Bs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function qi(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && Es.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const X1 = (...t) => iy(...t), Lu = "__vInternal", ry = ({ key: t }) => t != null ? t : null, cl = ({ ref: t, ref_key: e, ref_for: n }) => t != null ? st(t) || qe(t) || be(t) ? { i: wt, r: t, k: e, f: !!n } : t : null;
function L(t, e = null, n = null, r = 0, i = null, s = t === Ve ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ry(e),
    ref: e && cl(e),
    scopeId: Ag,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: wt
  };
  return o ? (oh(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= st(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && B("VNode created with invalid key (NaN). VNode type:", l.type), Wa > 0 && !a && qn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && qn.push(l), l;
}
const ne = process.env.NODE_ENV !== "production" ? X1 : iy;
function iy(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === v1) && (process.env.NODE_ENV !== "production" && !t && B(`Invalid vnode type when creating vnode: ${t}.`), t = Mt), Bs(t)) {
    const o = gr(t, e, !0);
    return n && oh(o, n), Wa > 0 && !s && qn && (o.shapeFlag & 6 ? qn[qn.indexOf(t)] = o : qn.push(o)), o.patchFlag |= -2, o;
  }
  if (ly(t) && (t = t.__vccOpts), e) {
    e = K1(e);
    let { class: o, style: l } = e;
    o && !st(o) && (e.class = Ce(o)), We(l) && (kl(l) && !fe(l) && (l = it({}, l)), e.style = Ei(l));
  }
  const a = st(t) ? 1 : t1(t) ? 128 : W1(t) ? 64 : We(t) ? 4 : be(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && kl(t) && (t = ve(t), B("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), L(t, e, n, r, i, a, s, !0);
}
function K1(t) {
  return t ? kl(t) || Lu in t ? it({}, t) : t : null;
}
function gr(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: a } = t, o = e ? Z1(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && ry(o),
    ref: e && e.ref ? n && i ? fe(i) ? i.concat(cl(e)) : [i, cl(e)] : cl(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && fe(a) ? a.map(sy) : a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Ve ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && gr(t.ssContent),
    ssFallback: t.ssFallback && gr(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function sy(t) {
  const e = gr(t);
  return fe(t.children) && (e.children = t.children.map(sy)), e;
}
function jl(t = " ", e = 0) {
  return ne(so, null, t, e);
}
function $(t = "", e = !1) {
  return e ? (A(), je(Mt, null, t)) : ne(Mt, null, t);
}
function Un(t) {
  return t == null || typeof t == "boolean" ? ne(Mt) : fe(t) ? ne(
    Ve,
    null,
    t.slice()
  ) : typeof t == "object" ? ei(t) : ne(so, null, String(t));
}
function ei(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : gr(t);
}
function oh(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (fe(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), oh(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(Lu in e) ? e._ctx = wt : i === 3 && wt && (wt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    be(e) ? (e = { default: e, _ctx: wt }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [jl(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Z1(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Ce([e.class, r.class]));
      else if (i === "style")
        e.style = Ei([e.style, r.style]);
      else if (no(i)) {
        const s = e[i], a = r[i];
        a && s !== a && !(fe(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function er(t, e, n, r = null) {
  Cn(t, e, 7, [
    n,
    r
  ]);
}
const J1 = Qg();
let Q1 = 0;
function eE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || J1, s = {
    uid: Q1++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new eg(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Yg(r, i),
    emitsOptions: Pg(r, i),
    emit: null,
    emitted: null,
    propsDefaults: Ke,
    inheritAttrs: r.inheritAttrs,
    ctx: Ke,
    data: Ke,
    props: Ke,
    attrs: Ke,
    slots: Ke,
    refs: Ke,
    setupState: Ke,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = _1(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Xb.bind(null, s), t.ce && t.ce(s), s;
}
let ht = null;
const Pu = () => ht || wt, qs = (t) => {
  ht = t, t.scope.on();
}, Ji = () => {
  ht && ht.scope.off(), ht = null;
}, tE = /* @__PURE__ */ bi("slot,component");
function lf(t, e) {
  const n = e.isNativeTag || Xp;
  (tE(t) || n(t)) && B("Do not use built-in or reserved HTML elements as component id: " + t);
}
function ay(t) {
  return t.vnode.shapeFlag & 4;
}
let Ha = !1;
function nE(t, e = !1) {
  Ha = e;
  const { props: n, children: r } = t.vnode, i = ay(t);
  N1(t, n, i, e), $1(t, r);
  const s = i ? rE(t, e) : void 0;
  return Ha = !1, s;
}
function rE(t, e) {
  var n;
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && lf(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let a = 0; a < s.length; a++)
        lf(s[a], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let a = 0; a < s.length; a++)
        Gg(s[a]);
    }
    r.compilerOptions && iE() && B('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Gn(new Proxy(t.ctx, Wg)), process.env.NODE_ENV !== "production" && b1(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? sE(t) : null;
    qs(t), as();
    const a = Dr(i, t, 0, [process.env.NODE_ENV !== "production" ? Os(t.props) : t.props, s]);
    if (os(), Ji(), Hf(a)) {
      if (a.then(Ji, Ji), e)
        return a.then((o) => {
          bd(t, o, e);
        }).catch((o) => {
          Mu(o, t, 0);
        });
      if (t.asyncDep = a, process.env.NODE_ENV !== "production" && !t.suspense) {
        const o = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
        B(`Component <${o}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      bd(t, a, e);
  } else
    oy(t, e);
}
function bd(t, e, n) {
  be(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : We(e) ? (process.env.NODE_ENV !== "production" && Bs(e) && B("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = _g(e), process.env.NODE_ENV !== "production" && E1(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && B(`setup() should return an object. Received: ${e === null ? "null" : typeof e}`), oy(t, n);
}
let uf;
const iE = () => !uf;
function oy(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && uf && !r.render) {
      const i = r.template || sh(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Cr(t, "compile");
        const { isCustomElement: s, compilerOptions: a } = t.appContext.config, { delimiters: o, compilerOptions: l } = r, u = it(it({
          isCustomElement: s,
          delimiters: o
        }, a), l);
        r.render = uf(i, u), process.env.NODE_ENV !== "production" && Lr(t, "compile");
      }
    }
    t.render = r.render || At;
  }
  qs(t), as(), x1(t), os(), Ji(), process.env.NODE_ENV !== "production" && !r.render && t.render === At && !e && (r.template ? B('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : B("Component is missing template or render function."));
}
function Ed(t) {
  return new Proxy(t.attrs, process.env.NODE_ENV !== "production" ? {
    get(e, n) {
      return Rl(), Zt(t, "get", "$attrs"), e[n];
    },
    set() {
      return B("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return B("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(e, n) {
      return Zt(t, "get", "$attrs"), e[n];
    }
  });
}
function sE(t) {
  const e = (r) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && B("expose() should be called only once per setup()."), r != null)) {
      let i = typeof r;
      i === "object" && (fe(r) ? i = "array" : qe(r) && (i = "ref")), i !== "object" && B(`expose() should be passed a plain object, received ${i}.`);
    }
    t.exposed = r || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Ed(t));
    },
    get slots() {
      return Os(t.slots);
    },
    get emit() {
      return (r, ...i) => t.emit(r, ...i);
    },
    expose: e
  }) : {
    get attrs() {
      return n || (n = Ed(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Au(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(_g(Gn(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Zi)
          return Zi[n](t);
      },
      has(e, n) {
        return n in e || n in Zi;
      }
    }));
}
const aE = /(?:^|[-_])(\w)/g, oE = (t) => t.replace(aE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function lh(t, e = !0) {
  return be(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ku(t, e, n = !1) {
  let r = lh(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const a in s)
        if (s[a] === e)
          return a;
    };
    r = i(t.components || t.parent.type.components) || i(t.appContext.components);
  }
  return r ? oE(r) : n ? "App" : "Anonymous";
}
function ly(t) {
  return be(t) && "__vccOpts" in t;
}
const me = (t, e) => Mb(t, e, Ha);
function uy(t, e, n) {
  const r = arguments.length;
  return r === 2 ? We(e) && !fe(e) ? Bs(e) ? ne(t, null, [e]) : ne(t, e) : ne(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Bs(n) && (n = [n]), ne(t, e, n));
}
const lE = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), uE = () => {
  {
    const t = Ds(lE);
    return t || process.env.NODE_ENV !== "production" && B("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), t;
  }
};
function nc(t) {
  return !!(t && t.__v_isShallow);
}
function cE() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(c) {
      return We(c) ? c.__isVue ? ["div", t, "VueInstance"] : qe(c) ? [
        "div",
        {},
        ["span", t, f(c)],
        "<",
        o(c.value),
        ">"
      ] : zn(c) ? [
        "div",
        {},
        ["span", t, nc(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${pi(c) ? " (readonly)" : ""}`
      ] : pi(c) ? [
        "div",
        {},
        ["span", t, nc(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        o(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const h = [];
    c.type.props && c.props && h.push(a("props", ve(c.props))), c.setupState !== Ke && h.push(a("setup", c.setupState)), c.data !== Ke && h.push(a("data", ve(c.data)));
    const d = l(c, "computed");
    d && h.push(a("computed", d));
    const m = l(c, "inject");
    return m && h.push(a("injected", m)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), h;
  }
  function a(c, h) {
    return h = it({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((d) => [
          "div",
          {},
          ["span", r, d + ": "],
          o(h[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function o(c, h = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : We(c) ? ["object", { object: h ? ve(c) : c }] : ["span", n, String(c)];
  }
  function l(c, h) {
    const d = c.type;
    if (be(d))
      return;
    const m = {};
    for (const p in c.ctx)
      u(d, p, h) && (m[p] = c.ctx[p]);
    return m;
  }
  function u(c, h, d) {
    const m = c[d];
    if (fe(m) && m.includes(h) || We(m) && h in m || c.extends && u(c.extends, h, d) || c.mixins && c.mixins.some((p) => u(p, h, d)))
      return !0;
  }
  function f(c) {
    return nc(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const wd = "3.2.47", fE = "http://www.w3.org/2000/svg", Wi = typeof document < "u" ? document : null, xd = Wi && /* @__PURE__ */ Wi.createElement("template"), hE = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e ? Wi.createElementNS(fE, t) : Wi.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => Wi.createTextNode(t),
  createComment: (t) => Wi.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Wi.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  insertStaticContent(t, e, n, r, i, s) {
    const a = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      xd.innerHTML = r ? `<svg>${t}</svg>` : t;
      const o = xd.content;
      if (r) {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      e.insertBefore(o, n);
    }
    return [
      a ? a.nextSibling : e.firstChild,
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function dE(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function mE(t, e, n) {
  const r = t.style, i = st(n);
  if (n && !i) {
    if (e && !st(e))
      for (const s in e)
        n[s] == null && cf(r, s, "");
    for (const s in n)
      cf(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s);
  }
}
const pE = /[^\\];\s*$/, Sd = /\s*!important$/;
function cf(t, e, n) {
  if (fe(n))
    n.forEach((r) => cf(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && pE.test(n) && B(`Unexpected semicolon at the end of '${e}' style value: '${n}'`), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = gE(t, e);
    Sd.test(n) ? t.setProperty(ln(r), n.replace(Sd, ""), "important") : t[r] = n;
  }
}
const Od = ["Webkit", "Moz", "ms"], rc = {};
function gE(t, e) {
  const n = rc[e];
  if (n)
    return n;
  let r = yn(e);
  if (r !== "filter" && r in t)
    return rc[e] = r;
  r = ts(r);
  for (let i = 0; i < Od.length; i++) {
    const s = Od[i] + r;
    if (s in t)
      return rc[e] = s;
  }
  return e;
}
const Md = "http://www.w3.org/1999/xlink";
function yE(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Md, e.slice(6, e.length)) : t.setAttributeNS(Md, e, n);
  else {
    const s = F_(e);
    n == null || s && !zp(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function vE(t, e, n, r, i, s, a) {
  if (e === "innerHTML" || e === "textContent") {
    r && a(r, i, s), t[e] = n == null ? "" : n;
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = n;
    const l = n == null ? "" : n;
    (t.value !== l || t.tagName === "OPTION") && (t.value = l), n == null && t.removeAttribute(e);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof t[e];
    l === "boolean" ? n = zp(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    t[e] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !o && B(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
  }
  o && t.removeAttribute(e);
}
function _E(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function bE(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function EE(t, e, n, r, i = null) {
  const s = t._vei || (t._vei = {}), a = s[e];
  if (r && a)
    a.value = r;
  else {
    const [o, l] = wE(e);
    if (r) {
      const u = s[e] = OE(r, i);
      _E(t, o, u, l);
    } else
      a && (bE(t, o, a, l), s[e] = void 0);
  }
}
const Td = /(?:Once|Passive|Capture)$/;
function wE(t) {
  let e;
  if (Td.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Td); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : ln(t.slice(2)), e];
}
let ic = 0;
const xE = /* @__PURE__ */ Promise.resolve(), SE = () => ic || (xE.then(() => ic = 0), ic = Date.now());
function OE(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Cn(ME(r, n.value), e, 5, [r]);
  };
  return n.value = t, n.attached = SE(), n;
}
function ME(t, e) {
  if (fe(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const Nd = /^on[a-z]/, TE = (t, e, n, r, i = !1, s, a, o, l) => {
  e === "class" ? dE(t, r, i) : e === "style" ? mE(t, n, r) : no(e) ? Nl(e) || EE(t, e, n, r, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : NE(t, e, r, i)) ? vE(t, e, r, s, a, o, l) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), yE(t, e, r, i));
};
function NE(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && Nd.test(e) && be(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Nd.test(e) && st(n) ? !1 : e in t;
}
const zr = "transition", sa = "animation", Du = (t, { slots: e }) => uy(Rg, CE(t), e);
Du.displayName = "Transition";
const cy = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Du.props = /* @__PURE__ */ it({}, Rg.props, cy);
const Pi = (t, e = []) => {
  fe(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, Cd = (t) => t ? fe(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function CE(t) {
  const e = {};
  for (const R in t)
    R in cy || (e[R] = t[R]);
  if (t.css === !1)
    return e;
  const { name: n = "v", type: r, duration: i, enterFromClass: s = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: o = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = a, appearToClass: f = o, leaveFromClass: c = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = t, m = LE(i), p = m && m[0], g = m && m[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: E, onLeave: w, onLeaveCancelled: S, onBeforeAppear: P = v, onAppear: k = y, onAppearCancelled: C = E } = e, T = (R, re, M) => {
    Ai(R, re ? f : o), Ai(R, re ? u : a), M && M();
  }, N = (R, re) => {
    R._isLeaving = !1, Ai(R, c), Ai(R, d), Ai(R, h), re && re();
  }, U = (R) => (re, M) => {
    const j = R ? k : y, Z = () => T(re, R, M);
    Pi(j, [re, Z]), Ld(() => {
      Ai(re, R ? l : s), Yr(re, R ? f : o), Cd(j) || Pd(re, r, p, Z);
    });
  };
  return it(e, {
    onBeforeEnter(R) {
      Pi(v, [R]), Yr(R, s), Yr(R, a);
    },
    onBeforeAppear(R) {
      Pi(P, [R]), Yr(R, l), Yr(R, u);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(R, re) {
      R._isLeaving = !0;
      const M = () => N(R, re);
      Yr(R, c), kE(), Yr(R, h), Ld(() => {
        !R._isLeaving || (Ai(R, c), Yr(R, d), Cd(w) || Pd(R, r, g, M));
      }), Pi(w, [R, M]);
    },
    onEnterCancelled(R) {
      T(R, !1), Pi(E, [R]);
    },
    onAppearCancelled(R) {
      T(R, !0), Pi(C, [R]);
    },
    onLeaveCancelled(R) {
      N(R), Pi(S, [R]);
    }
  });
}
function LE(t) {
  if (t == null)
    return null;
  if (We(t))
    return [sc(t.enter), sc(t.leave)];
  {
    const e = sc(t);
    return [e, e];
  }
}
function sc(t) {
  const e = qc(t);
  return process.env.NODE_ENV !== "production" && Pb(e, "<transition> explicit duration"), e;
}
function Yr(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t._vtc || (t._vtc = /* @__PURE__ */ new Set())).add(e);
}
function Ai(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function Ld(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let PE = 0;
function Pd(t, e, n, r) {
  const i = t._endId = ++PE, s = () => {
    i === t._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: o, propCount: l } = AE(t, e);
  if (!a)
    return r();
  const u = a + "end";
  let f = 0;
  const c = () => {
    t.removeEventListener(u, h), s();
  }, h = (d) => {
    d.target === t && ++f >= l && c();
  };
  setTimeout(() => {
    f < l && c();
  }, o + 1), t.addEventListener(u, h);
}
function AE(t, e) {
  const n = window.getComputedStyle(t), r = (m) => (n[m] || "").split(", "), i = r(`${zr}Delay`), s = r(`${zr}Duration`), a = Ad(i, s), o = r(`${sa}Delay`), l = r(`${sa}Duration`), u = Ad(o, l);
  let f = null, c = 0, h = 0;
  e === zr ? a > 0 && (f = zr, c = a, h = s.length) : e === sa ? u > 0 && (f = sa, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? zr : sa : null, h = f ? f === zr ? s.length : l.length : 0);
  const d = f === zr && /\b(transform|all)(,|$)/.test(r(`${zr}Property`).toString());
  return {
    type: f,
    timeout: c,
    propCount: h,
    hasTransform: d
  };
}
function Ad(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => kd(n) + kd(t[r])));
}
function kd(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function kE() {
  return document.body.offsetHeight;
}
const DE = ["ctrl", "shift", "alt", "meta"], IE = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => DE.some((n) => t[`${n}Key`] && !e.includes(n))
}, ar = (t, e) => (n, ...r) => {
  for (let i = 0; i < e.length; i++) {
    const s = IE[e[i]];
    if (s && s(n, e))
      return;
  }
  return t(n, ...r);
}, RE = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, or = (t, e) => (n) => {
  if (!("key" in n))
    return;
  const r = ln(n.key);
  if (e.some((i) => i === r || RE[i] === r))
    return t(n);
}, $E = /* @__PURE__ */ it({ patchProp: TE }, hE);
let Dd;
function fy() {
  return Dd || (Dd = U1($E));
}
const Id = (...t) => {
  fy().render(...t);
}, FE = (...t) => {
  const e = fy().createApp(...t);
  process.env.NODE_ENV !== "production" && (VE(e), jE(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = GE(r);
    if (!i)
      return;
    const s = e._component;
    !be(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const a = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function VE(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => I_(e) || R_(e),
    writable: !1
  });
}
function jE(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        B("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return B(r), n;
      },
      set() {
        B(r);
      }
    });
  }
}
function GE(t) {
  if (st(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && B(`Failed to mount app: mount target selector "${t}" returned null.`), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && B('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), t;
}
function UE() {
  cE();
}
process.env.NODE_ENV !== "production" && UE();
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function ii(t) {
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ii(t);
}
function ff(t, e) {
  return ff = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, ff(t, e);
}
function BE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fl(t, e, n) {
  return BE() ? fl = Reflect.construct : fl = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && ff(u, a.prototype), u;
  }, fl.apply(null, arguments);
}
function Vn(t) {
  return qE(t) || WE(t) || HE(t) || zE();
}
function qE(t) {
  if (Array.isArray(t))
    return hf(t);
}
function WE(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function HE(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return hf(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hf(t, e);
  }
}
function hf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function zE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var YE = Object.hasOwnProperty, Rd = Object.setPrototypeOf, XE = Object.isFrozen, KE = Object.getPrototypeOf, ZE = Object.getOwnPropertyDescriptor, Jt = Object.freeze, Zn = Object.seal, JE = Object.create, hy = typeof Reflect < "u" && Reflect, Gl = hy.apply, df = hy.construct;
Gl || (Gl = function(e, n, r) {
  return e.apply(n, r);
});
Jt || (Jt = function(e) {
  return e;
});
Zn || (Zn = function(e) {
  return e;
});
df || (df = function(e, n) {
  return fl(e, Vn(n));
});
var QE = An(Array.prototype.forEach), $d = An(Array.prototype.pop), aa = An(Array.prototype.push), hl = An(String.prototype.toLowerCase), ac = An(String.prototype.toString), ew = An(String.prototype.match), Dn = An(String.prototype.replace), tw = An(String.prototype.indexOf), nw = An(String.prototype.trim), Ut = An(RegExp.prototype.test), oc = rw(TypeError);
function An(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Gl(t, e, r);
  };
}
function rw(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return df(t, n);
  };
}
function Te(t, e, n) {
  n = n || hl, Rd && Rd(t, null);
  for (var r = e.length; r--; ) {
    var i = e[r];
    if (typeof i == "string") {
      var s = n(i);
      s !== i && (XE(e) || (e[r] = s), i = s);
    }
    t[i] = !0;
  }
  return t;
}
function ki(t) {
  var e = JE(null), n;
  for (n in t)
    Gl(YE, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function Do(t, e) {
  for (; t !== null; ) {
    var n = ZE(t, e);
    if (n) {
      if (n.get)
        return An(n.get);
      if (typeof n.value == "function")
        return An(n.value);
    }
    t = KE(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var Fd = Jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), lc = Jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), uc = Jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), iw = Jt(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cc = Jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), sw = Jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vd = Jt(["#text"]), jd = Jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), fc = Jt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gd = Jt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Io = Jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), aw = Zn(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ow = Zn(/<%[\w\W]*|[\w\W]*%>/gm), lw = Zn(/\${[\w\W]*}/gm), uw = Zn(/^data-[\-\w.\u00B7-\uFFFF]/), cw = Zn(/^aria-[\-\w]+$/), fw = Zn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), hw = Zn(/^(?:\w+script|data):/i), dw = Zn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), mw = Zn(/^html$/i), pw = function() {
  return typeof window > "u" ? null : window;
}, gw = function(e, n) {
  if (ii(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, i = "data-tt-policy-suffix";
  n.currentScript && n.currentScript.hasAttribute(i) && (r = n.currentScript.getAttribute(i));
  var s = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(s, {
      createHTML: function(o) {
        return o;
      },
      createScriptURL: function(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function dy() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pw(), e = function(O) {
    return dy(O);
  };
  if (e.version = "2.4.5", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, m = o.prototype, p = Do(m, "cloneNode"), g = Do(m, "nextSibling"), v = Do(m, "childNodes"), y = Do(m, "parentNode");
  if (typeof s == "function") {
    var E = r.createElement("template");
    E.content && E.content.ownerDocument && (r = E.content.ownerDocument);
  }
  var w = gw(d, n), S = w ? w.createHTML("") : "", P = r, k = P.implementation, C = P.createNodeIterator, T = P.createDocumentFragment, N = P.getElementsByTagName, U = n.importNode, R = {};
  try {
    R = ki(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var re = {};
  e.isSupported = typeof y == "function" && k && typeof k.createHTMLDocument < "u" && R !== 9;
  var M = aw, j = ow, Z = lw, J = uw, ae = cw, _e = hw, Qt = dw, tt = fw, Ae = null, cn = Te({}, [].concat(Vn(Fd), Vn(lc), Vn(uc), Vn(cc), Vn(Vd))), Xe = null, Mi = Te({}, [].concat(Vn(jd), Vn(fc), Vn(Gd), Vn(Io))), ze = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), pt = null, En = null, Wr = !0, en = !0, fn = !1, Qn = !0, _ = !1, x = !1, D = !1, F = !1, I = !1, H = !1, K = !1, q = !0, Y = !1, G = "user-content-", oe = !0, ie = !1, le = {}, de = null, Ne = Te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Ge = null, Ie = Te({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, tn = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), kn = "http://www.w3.org/1998/Math/MathML", Ti = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml", wr = Gt, bt = !1, nn = null, xo = Te({}, [kn, Ti, Gt], ac), Ni, e_ = ["application/xhtml+xml", "text/html"], t_ = "text/html", xt, hs = null, n_ = r.createElement("form"), Rh = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, Yu = function(O) {
    hs && hs === O || ((!O || ii(O) !== "object") && (O = {}), O = ki(O), Ni = e_.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? Ni = t_ : Ni = O.PARSER_MEDIA_TYPE, xt = Ni === "application/xhtml+xml" ? ac : hl, Ae = "ALLOWED_TAGS" in O ? Te({}, O.ALLOWED_TAGS, xt) : cn, Xe = "ALLOWED_ATTR" in O ? Te({}, O.ALLOWED_ATTR, xt) : Mi, nn = "ALLOWED_NAMESPACES" in O ? Te({}, O.ALLOWED_NAMESPACES, ac) : xo, nt = "ADD_URI_SAFE_ATTR" in O ? Te(
      ki(tn),
      O.ADD_URI_SAFE_ATTR,
      xt
    ) : tn, Ge = "ADD_DATA_URI_TAGS" in O ? Te(
      ki(Ie),
      O.ADD_DATA_URI_TAGS,
      xt
    ) : Ie, de = "FORBID_CONTENTS" in O ? Te({}, O.FORBID_CONTENTS, xt) : Ne, pt = "FORBID_TAGS" in O ? Te({}, O.FORBID_TAGS, xt) : {}, En = "FORBID_ATTR" in O ? Te({}, O.FORBID_ATTR, xt) : {}, le = "USE_PROFILES" in O ? O.USE_PROFILES : !1, Wr = O.ALLOW_ARIA_ATTR !== !1, en = O.ALLOW_DATA_ATTR !== !1, fn = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Qn = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _ = O.SAFE_FOR_TEMPLATES || !1, x = O.WHOLE_DOCUMENT || !1, I = O.RETURN_DOM || !1, H = O.RETURN_DOM_FRAGMENT || !1, K = O.RETURN_TRUSTED_TYPE || !1, F = O.FORCE_BODY || !1, q = O.SANITIZE_DOM !== !1, Y = O.SANITIZE_NAMED_PROPS || !1, oe = O.KEEP_CONTENT !== !1, ie = O.IN_PLACE || !1, tt = O.ALLOWED_URI_REGEXP || tt, wr = O.NAMESPACE || Gt, ze = O.CUSTOM_ELEMENT_HANDLING || {}, O.CUSTOM_ELEMENT_HANDLING && Rh(O.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ze.tagNameCheck = O.CUSTOM_ELEMENT_HANDLING.tagNameCheck), O.CUSTOM_ELEMENT_HANDLING && Rh(O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ze.attributeNameCheck = O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), O.CUSTOM_ELEMENT_HANDLING && typeof O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ze.allowCustomizedBuiltInElements = O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _ && (en = !1), H && (I = !0), le && (Ae = Te({}, Vn(Vd)), Xe = [], le.html === !0 && (Te(Ae, Fd), Te(Xe, jd)), le.svg === !0 && (Te(Ae, lc), Te(Xe, fc), Te(Xe, Io)), le.svgFilters === !0 && (Te(Ae, uc), Te(Xe, fc), Te(Xe, Io)), le.mathMl === !0 && (Te(Ae, cc), Te(Xe, Gd), Te(Xe, Io))), O.ADD_TAGS && (Ae === cn && (Ae = ki(Ae)), Te(Ae, O.ADD_TAGS, xt)), O.ADD_ATTR && (Xe === Mi && (Xe = ki(Xe)), Te(Xe, O.ADD_ATTR, xt)), O.ADD_URI_SAFE_ATTR && Te(nt, O.ADD_URI_SAFE_ATTR, xt), O.FORBID_CONTENTS && (de === Ne && (de = ki(de)), Te(de, O.FORBID_CONTENTS, xt)), oe && (Ae["#text"] = !0), x && Te(Ae, ["html", "head", "body"]), Ae.table && (Te(Ae, ["tbody"]), delete pt.tbody), Jt && Jt(O), hs = O);
  }, $h = Te({}, ["mi", "mo", "mn", "ms", "mtext"]), Fh = Te({}, ["foreignobject", "desc", "title", "annotation-xml"]), r_ = Te({}, ["title", "style", "font", "a", "script"]), So = Te({}, lc);
  Te(So, uc), Te(So, iw);
  var Xu = Te({}, cc);
  Te(Xu, sw);
  var i_ = function(O) {
    var z = y(O);
    (!z || !z.tagName) && (z = {
      namespaceURI: wr,
      tagName: "template"
    });
    var te = hl(O.tagName), Re = hl(z.tagName);
    return nn[O.namespaceURI] ? O.namespaceURI === Ti ? z.namespaceURI === Gt ? te === "svg" : z.namespaceURI === kn ? te === "svg" && (Re === "annotation-xml" || $h[Re]) : Boolean(So[te]) : O.namespaceURI === kn ? z.namespaceURI === Gt ? te === "math" : z.namespaceURI === Ti ? te === "math" && Fh[Re] : Boolean(Xu[te]) : O.namespaceURI === Gt ? z.namespaceURI === Ti && !Fh[Re] || z.namespaceURI === kn && !$h[Re] ? !1 : !Xu[te] && (r_[te] || !So[te]) : !!(Ni === "application/xhtml+xml" && nn[O.namespaceURI]) : !1;
  }, xr = function(O) {
    aa(e.removed, {
      element: O
    });
    try {
      O.parentNode.removeChild(O);
    } catch {
      try {
        O.outerHTML = S;
      } catch {
        O.remove();
      }
    }
  }, Ku = function(O, z) {
    try {
      aa(e.removed, {
        attribute: z.getAttributeNode(O),
        from: z
      });
    } catch {
      aa(e.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(O), O === "is" && !Xe[O])
      if (I || H)
        try {
          xr(z);
        } catch {
        }
      else
        try {
          z.setAttribute(O, "");
        } catch {
        }
  }, Vh = function(O) {
    var z, te;
    if (F)
      O = "<remove></remove>" + O;
    else {
      var Re = ew(O, /^[\r\n\t ]+/);
      te = Re && Re[0];
    }
    Ni === "application/xhtml+xml" && wr === Gt && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    var rn = w ? w.createHTML(O) : O;
    if (wr === Gt)
      try {
        z = new h().parseFromString(rn, Ni);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = k.createDocument(wr, "template", null);
      try {
        z.documentElement.innerHTML = bt ? S : rn;
      } catch {
      }
    }
    var kt = z.body || z.documentElement;
    return O && te && kt.insertBefore(r.createTextNode(te), kt.childNodes[0] || null), wr === Gt ? N.call(z, x ? "html" : "body")[0] : x ? z.documentElement : kt;
  }, jh = function(O) {
    return C.call(
      O.ownerDocument || O,
      O,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT,
      null,
      !1
    );
  }, s_ = function(O) {
    return O instanceof c && (typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || !(O.attributes instanceof f) || typeof O.removeAttribute != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function");
  }, na = function(O) {
    return ii(a) === "object" ? O instanceof a : O && ii(O) === "object" && typeof O.nodeType == "number" && typeof O.nodeName == "string";
  }, Sr = function(O, z, te) {
    !re[O] || QE(re[O], function(Re) {
      Re.call(e, z, te, hs);
    });
  }, Gh = function(O) {
    var z;
    if (Sr("beforeSanitizeElements", O, null), s_(O) || Ut(/[\u0080-\uFFFF]/, O.nodeName))
      return xr(O), !0;
    var te = xt(O.nodeName);
    if (Sr("uponSanitizeElement", O, {
      tagName: te,
      allowedTags: Ae
    }), O.hasChildNodes() && !na(O.firstElementChild) && (!na(O.content) || !na(O.content.firstElementChild)) && Ut(/<[/\w]/g, O.innerHTML) && Ut(/<[/\w]/g, O.textContent) || te === "select" && Ut(/<template/i, O.innerHTML))
      return xr(O), !0;
    if (!Ae[te] || pt[te]) {
      if (!pt[te] && Bh(te) && (ze.tagNameCheck instanceof RegExp && Ut(ze.tagNameCheck, te) || ze.tagNameCheck instanceof Function && ze.tagNameCheck(te)))
        return !1;
      if (oe && !de[te]) {
        var Re = y(O) || O.parentNode, rn = v(O) || O.childNodes;
        if (rn && Re)
          for (var kt = rn.length, Nt = kt - 1; Nt >= 0; --Nt)
            Re.insertBefore(p(rn[Nt], !0), g(O));
      }
      return xr(O), !0;
    }
    return O instanceof o && !i_(O) || (te === "noscript" || te === "noembed") && Ut(/<\/no(script|embed)/i, O.innerHTML) ? (xr(O), !0) : (_ && O.nodeType === 3 && (z = O.textContent, z = Dn(z, M, " "), z = Dn(z, j, " "), z = Dn(z, Z, " "), O.textContent !== z && (aa(e.removed, {
      element: O.cloneNode()
    }), O.textContent = z)), Sr("afterSanitizeElements", O, null), !1);
  }, Uh = function(O, z, te) {
    if (q && (z === "id" || z === "name") && (te in r || te in n_))
      return !1;
    if (!(en && !En[z] && Ut(J, z))) {
      if (!(Wr && Ut(ae, z))) {
        if (!Xe[z] || En[z]) {
          if (!(Bh(O) && (ze.tagNameCheck instanceof RegExp && Ut(ze.tagNameCheck, O) || ze.tagNameCheck instanceof Function && ze.tagNameCheck(O)) && (ze.attributeNameCheck instanceof RegExp && Ut(ze.attributeNameCheck, z) || ze.attributeNameCheck instanceof Function && ze.attributeNameCheck(z)) || z === "is" && ze.allowCustomizedBuiltInElements && (ze.tagNameCheck instanceof RegExp && Ut(ze.tagNameCheck, te) || ze.tagNameCheck instanceof Function && ze.tagNameCheck(te))))
            return !1;
        } else if (!nt[z]) {
          if (!Ut(tt, Dn(te, Qt, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && O !== "script" && tw(te, "data:") === 0 && Ge[O])) {
              if (!(fn && !Ut(_e, Dn(te, Qt, "")))) {
                if (te)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Bh = function(O) {
    return O.indexOf("-") > 0;
  }, qh = function(O) {
    var z, te, Re, rn;
    Sr("beforeSanitizeAttributes", O, null);
    var kt = O.attributes;
    if (!!kt) {
      var Nt = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: Xe
      };
      for (rn = kt.length; rn--; ) {
        z = kt[rn];
        var Oo = z, St = Oo.name, Zu = Oo.namespaceURI;
        if (te = St === "value" ? z.value : nw(z.value), Re = xt(St), Nt.attrName = Re, Nt.attrValue = te, Nt.keepAttr = !0, Nt.forceKeepAttr = void 0, Sr("uponSanitizeAttribute", O, Nt), te = Nt.attrValue, !Nt.forceKeepAttr && (Ku(St, O), !!Nt.keepAttr)) {
          if (!Qn && Ut(/\/>/i, te)) {
            Ku(St, O);
            continue;
          }
          _ && (te = Dn(te, M, " "), te = Dn(te, j, " "), te = Dn(te, Z, " "));
          var Wh = xt(O.nodeName);
          if (!!Uh(Wh, Re, te)) {
            if (Y && (Re === "id" || Re === "name") && (Ku(St, O), te = G + te), w && ii(d) === "object" && typeof d.getAttributeType == "function" && !Zu)
              switch (d.getAttributeType(Wh, Re)) {
                case "TrustedHTML":
                  te = w.createHTML(te);
                  break;
                case "TrustedScriptURL":
                  te = w.createScriptURL(te);
                  break;
              }
            try {
              Zu ? O.setAttributeNS(Zu, St, te) : O.setAttribute(St, te), $d(e.removed);
            } catch {
            }
          }
        }
      }
      Sr("afterSanitizeAttributes", O, null);
    }
  }, a_ = function ce(O) {
    var z, te = jh(O);
    for (Sr("beforeSanitizeShadowDOM", O, null); z = te.nextNode(); )
      Sr("uponSanitizeShadowNode", z, null), !Gh(z) && (z.content instanceof i && ce(z.content), qh(z));
    Sr("afterSanitizeShadowDOM", O, null);
  };
  return e.sanitize = function(ce) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z, te, Re, rn, kt;
    if (bt = !ce, bt && (ce = "<!-->"), typeof ce != "string" && !na(ce)) {
      if (typeof ce.toString != "function")
        throw oc("toString is not a function");
      if (ce = ce.toString(), typeof ce != "string")
        throw oc("dirty is not a string, aborting");
    }
    if (!e.isSupported) {
      if (ii(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (na(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (D || Yu(O), e.removed = [], typeof ce == "string" && (ie = !1), ie) {
      if (ce.nodeName) {
        var Nt = xt(ce.nodeName);
        if (!Ae[Nt] || pt[Nt])
          throw oc("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      z = Vh("<!---->"), te = z.ownerDocument.importNode(ce, !0), te.nodeType === 1 && te.nodeName === "BODY" || te.nodeName === "HTML" ? z = te : z.appendChild(te);
    else {
      if (!I && !_ && !x && ce.indexOf("<") === -1)
        return w && K ? w.createHTML(ce) : ce;
      if (z = Vh(ce), !z)
        return I ? null : K ? S : "";
    }
    z && F && xr(z.firstChild);
    for (var Oo = jh(ie ? ce : z); Re = Oo.nextNode(); )
      Re.nodeType === 3 && Re === rn || Gh(Re) || (Re.content instanceof i && a_(Re.content), qh(Re), rn = Re);
    if (rn = null, ie)
      return ce;
    if (I) {
      if (H)
        for (kt = T.call(z.ownerDocument); z.firstChild; )
          kt.appendChild(z.firstChild);
      else
        kt = z;
      return (Xe.shadowroot || Xe.shadowrootmod) && (kt = U.call(n, kt, !0)), kt;
    }
    var St = x ? z.outerHTML : z.innerHTML;
    return x && Ae["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Ut(mw, z.ownerDocument.doctype.name) && (St = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + St), _ && (St = Dn(St, M, " "), St = Dn(St, j, " "), St = Dn(St, Z, " ")), w && K ? w.createHTML(St) : St;
  }, e.setConfig = function(ce) {
    Yu(ce), D = !0;
  }, e.clearConfig = function() {
    hs = null, D = !1;
  }, e.isValidAttribute = function(ce, O, z) {
    hs || Yu({});
    var te = xt(ce), Re = xt(O);
    return Uh(te, Re, z);
  }, e.addHook = function(ce, O) {
    typeof O == "function" && (re[ce] = re[ce] || [], aa(re[ce], O));
  }, e.removeHook = function(ce) {
    if (re[ce])
      return $d(re[ce]);
  }, e.removeHooks = function(ce) {
    re[ce] && (re[ce] = []);
  }, e.removeAllHooks = function() {
    re = {};
  }, e;
}
var yw = dy(), my = !1;
function Ro(t, e, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), n) : (t[e] = n, n);
}
function hc(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function vw(t, e) {
  var i;
  const n = (i = t.hooks) != null ? i : {};
  let r;
  for (r in n) {
    const s = n[r];
    s !== void 0 && e.addHook(r, s);
  }
}
function py() {
  return yw();
}
function _w(t = {}, e = py) {
  const n = e();
  vw(t, n);
  const r = function(i, s) {
    var c, h;
    const a = s.value;
    if (s.oldValue === a)
      return;
    const o = `${a}`, l = s.arg, u = t.namedConfigurations, f = (c = t.default) != null ? c : {};
    if (u && l !== void 0) {
      i.innerHTML = n.sanitize(
        o,
        (h = u[l]) != null ? h : f
      );
      return;
    }
    i.innerHTML = n.sanitize(
      o,
      f
    );
  };
  return {
    mounted: r,
    updated: r
  };
}
const bw = {
  install(t, e = {}, n = py) {
    t.directive(
      "dompurify-html",
      _w(e, n)
    );
  }
};
function Ew() {
  return gy().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gy() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ww = typeof Proxy == "function", xw = "devtools-plugin:setup", Sw = "plugin:settings:set";
let ds, mf;
function Ow() {
  var t;
  return ds !== void 0 || (typeof window < "u" && window.performance ? (ds = !0, mf = window.performance) : typeof global < "u" && ((t = global.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (ds = !0, mf = global.perf_hooks.performance) : ds = !1), ds;
}
function Mw() {
  return Ow() ? mf.now() : Date.now();
}
class Tw {
  constructor(e, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = n;
    const r = {};
    if (e.settings)
      for (const a in e.settings) {
        const o = e.settings[a];
        r[a] = o.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let s = Object.assign({}, r);
    try {
      const a = localStorage.getItem(i), o = JSON.parse(a);
      Object.assign(s, o);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(a) {
        try {
          localStorage.setItem(i, JSON.stringify(a));
        } catch {
        }
        s = a;
      },
      now() {
        return Mw();
      }
    }, n && n.on(Sw, (a, o) => {
      a === this.plugin.id && this.fallbacks.setSettings(o);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, o) => this.target ? this.target.on[o] : (...l) => {
        this.onQueue.push({
          method: o,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, o) => this.target ? this.target[o] : o === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(o) ? (...l) => (this.targetQueue.push({
        method: o,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[o](...l)) : (...l) => new Promise((u) => {
        this.targetQueue.push({
          method: o,
          args: l,
          resolve: u
        });
      })
    });
  }
  async setRealTarget(e) {
    this.target = e;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function yy(t, e) {
  const n = t, r = gy(), i = Ew(), s = ww && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(xw, t, e);
  else {
    const a = s ? new Tw(n, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: e,
      proxy: a
    }), a && e(a.proxiedTarget);
  }
}
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let pa;
const za = (t) => pa = t, vy = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function rs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var cr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(cr || (cr = {}));
const Iu = typeof window < "u", La = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Iu, Ud = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Nw(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function uh(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    Ey(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function _y(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function dl(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const ml = typeof navigator == "object" ? navigator : { userAgent: "" }, by = /* @__PURE__ */ (() => /Macintosh/.test(ml.userAgent) && /AppleWebKit/.test(ml.userAgent) && !/Safari/.test(ml.userAgent))(), Ey = Iu ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !by ? Cw : "msSaveOrOpenBlob" in ml ? Lw : Pw : () => {
};
function Cw(t, e = "download", n) {
  const r = document.createElement("a");
  r.download = e, r.rel = "noopener", typeof t == "string" ? (r.href = t, r.origin !== location.origin ? _y(r.href) ? uh(t, e, n) : (r.target = "_blank", dl(r)) : dl(r)) : (r.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    dl(r);
  }, 0));
}
function Lw(t, e = "download", n) {
  if (typeof t == "string")
    if (_y(t))
      uh(t, e, n);
    else {
      const r = document.createElement("a");
      r.href = t, r.target = "_blank", setTimeout(function() {
        dl(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Nw(t, n), e);
}
function Pw(t, e, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
    return uh(t, e, n);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(Ud.HTMLElement)) || "safari" in Ud, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || by) && typeof FileReader < "u") {
    const o = new FileReader();
    o.onloadend = function() {
      let l = o.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = a ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, o.readAsDataURL(t);
  } else {
    const o = URL.createObjectURL(t);
    r ? r.location.assign(o) : location.href = o, r = null, setTimeout(function() {
      URL.revokeObjectURL(o);
    }, 4e4);
  }
}
function Ot(t, e) {
  const n = "\u{1F34D} " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, e) : e === "error" ? console.error(n) : e === "warn" ? console.warn(n) : console.log(n);
}
function ch(t) {
  return "_a" in t && "install" in t;
}
function wy() {
  if (!("clipboard" in navigator))
    return Ot("Your browser doesn't support the Clipboard API", "error"), !0;
}
function xy(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Ot('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Aw(t) {
  if (!wy())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Ot("Global state copied to clipboard.");
    } catch (e) {
      if (xy(e))
        return;
      Ot("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function kw(t) {
  if (!wy())
    try {
      t.state.value = JSON.parse(await navigator.clipboard.readText()), Ot("Global state pasted from clipboard.");
    } catch (e) {
      if (xy(e))
        return;
      Ot("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function Dw(t) {
  try {
    Ey(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Ot("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Or;
function Iw() {
  Or || (Or = document.createElement("input"), Or.type = "file", Or.accept = ".json");
  function t() {
    return new Promise((e, n) => {
      Or.onchange = async () => {
        const r = Or.files;
        if (!r)
          return e(null);
        const i = r.item(0);
        return e(i ? { text: await i.text(), file: i } : null);
      }, Or.oncancel = () => e(null), Or.onerror = n, Or.click();
    });
  }
  return t;
}
async function Rw(t) {
  try {
    const n = await (await Iw())();
    if (!n)
      return;
    const { text: r, file: i } = n;
    t.state.value = JSON.parse(r), Ot(`Global state imported from "${i.name}".`);
  } catch (e) {
    Ot("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function jn(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const Sy = "\u{1F34D} Pinia (root)", pf = "_root";
function $w(t) {
  return ch(t) ? {
    id: pf,
    label: Sy
  } : {
    id: t.$id,
    label: t.$id
  };
}
function Fw(t) {
  if (ch(t)) {
    const n = Array.from(t._s.keys()), r = t._s;
    return {
      state: n.map((s) => ({
        editable: !0,
        key: s,
        value: t.state.value[s]
      })),
      getters: n.filter((s) => r.get(s)._getters).map((s) => {
        const a = r.get(s);
        return {
          editable: !1,
          key: s,
          value: a._getters.reduce((o, l) => (o[l] = a[l], o), {})
        };
      })
    };
  }
  const e = {
    state: Object.keys(t.$state).map((n) => ({
      editable: !0,
      key: n,
      value: t.$state[n]
    }))
  };
  return t._getters && t._getters.length && (e.getters = t._getters.map((n) => ({
    editable: !1,
    key: n,
    value: t[n]
  }))), t._customProperties.size && (e.customProperties = Array.from(t._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: t[n]
  }))), e;
}
function Vw(t) {
  return t ? Array.isArray(t) ? t.reduce((e, n) => (e.keys.push(n.key), e.operations.push(n.type), e.oldValue[n.key] = n.oldValue, e.newValue[n.key] = n.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: jn(t.type),
    key: jn(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function jw(t) {
  switch (t) {
    case cr.direct:
      return "mutation";
    case cr.patchFunction:
      return "$patch";
    case cr.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ms = !0;
const pl = [], Gi = "pinia:mutations", It = "pinia", { assign: Gw } = Object, Ul = (t) => "\u{1F34D} " + t;
function Uw(t, e) {
  yy({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: pl,
    app: t
  }, (n) => {
    typeof n.now != "function" && Ot("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Gi,
      label: "Pinia \u{1F34D}",
      color: 15064968
    }), n.addInspector({
      id: It,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Aw(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await kw(e), n.sendInspectorTree(It), n.sendInspectorState(It);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Dw(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Rw(e), n.sendInspectorTree(It), n.sendInspectorState(It);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (r) => {
            const i = e._s.get(r);
            i ? i._isOptionsAPI ? (i.$reset(), Ot(`Store "${r}" reset.`)) : Ot(`Cannot reset "${r}" store because it's a setup store.`, "warn") : Ot(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, i) => {
      const s = r.componentInstance && r.componentInstance.proxy;
      if (s && s._pStores) {
        const a = r.componentInstance.proxy._pStores;
        Object.values(a).forEach((o) => {
          r.instanceData.state.push({
            type: Ul(o.$id),
            key: "state",
            editable: !0,
            value: o._isOptionsAPI ? {
              _custom: {
                value: ve(o.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => o.$reset()
                  }
                ]
              }
            } : Object.keys(o.$state).reduce((l, u) => (l[u] = o.$state[u], l), {})
          }), o._getters && o._getters.length && r.instanceData.state.push({
            type: Ul(o.$id),
            key: "getters",
            editable: !1,
            value: o._getters.reduce((l, u) => {
              try {
                l[u] = o[u];
              } catch (f) {
                l[u] = f;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === t && r.inspectorId === It) {
        let i = [e];
        i = i.concat(Array.from(e._s.values())), r.rootNodes = (r.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(r.filter.toLowerCase()) : Sy.toLowerCase().includes(r.filter.toLowerCase())) : i).map($w);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === t && r.inspectorId === It) {
        const i = r.nodeId === pf ? e : e._s.get(r.nodeId);
        if (!i)
          return;
        i && (r.state = Fw(i));
      }
    }), n.on.editInspectorState((r, i) => {
      if (r.app === t && r.inspectorId === It) {
        const s = r.nodeId === pf ? e : e._s.get(r.nodeId);
        if (!s)
          return Ot(`store "${r.nodeId}" not found`, "error");
        const { path: a } = r;
        ch(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), Ms = !1, r.set(s, a, r.state.value), Ms = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("\u{1F34D}")) {
        const i = r.type.replace(/^🍍\s*/, ""), s = e._s.get(i);
        if (!s)
          return Ot(`store "${i}" not found`, "error");
        const { path: a } = r;
        if (a[0] !== "state")
          return Ot(`Invalid path for store "${i}":
${a}
Only state can be modified.`);
        a[0] = "$state", Ms = !1, r.set(s, a, r.state.value), Ms = !0;
      }
    });
  });
}
function Bw(t, e) {
  pl.includes(Ul(e.$id)) || pl.push(Ul(e.$id)), yy({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: pl,
    app: t,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    e.$onAction(({ after: a, onError: o, name: l, args: u }) => {
      const f = Oy++;
      n.addTimelineEvent({
        layerId: Gi,
        event: {
          time: r(),
          title: "\u{1F6EB} " + l,
          subtitle: "start",
          data: {
            store: jn(e.$id),
            action: jn(l),
            args: u
          },
          groupId: f
        }
      }), a((c) => {
        Hi = void 0, n.addTimelineEvent({
          layerId: Gi,
          event: {
            time: r(),
            title: "\u{1F6EC} " + l,
            subtitle: "end",
            data: {
              store: jn(e.$id),
              action: jn(l),
              args: u,
              result: c
            },
            groupId: f
          }
        });
      }), o((c) => {
        Hi = void 0, n.addTimelineEvent({
          layerId: Gi,
          event: {
            time: r(),
            logType: "error",
            title: "\u{1F4A5} " + l,
            subtitle: "end",
            data: {
              store: jn(e.$id),
              action: jn(l),
              args: u,
              error: c
            },
            groupId: f
          }
        });
      });
    }, !0), e._customProperties.forEach((a) => {
      Je(() => b(e[a]), (o, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(It), Ms && n.addTimelineEvent({
          layerId: Gi,
          event: {
            time: r(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: o,
              oldValue: l
            },
            groupId: Hi
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: a, type: o }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(It), !Ms)
        return;
      const u = {
        time: r(),
        title: jw(o),
        data: Gw({ store: jn(e.$id) }, Vw(a)),
        groupId: Hi
      };
      Hi = void 0, o === cr.patchFunction ? u.subtitle = "\u2935\uFE0F" : o === cr.patchObject ? u.subtitle = "\u{1F9E9}" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Gi,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = Gn((a) => {
      i(a), n.addTimelineEvent({
        layerId: Gi,
        event: {
          time: r(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: jn(e.$id),
            info: jn("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(It), n.sendInspectorState(It);
    });
    const { $dispose: s } = e;
    e.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(It), n.sendInspectorState(It), n.getSettings().logStoreChanges && Ot(`Disposed "${e.$id}" store \u{1F5D1}`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(It), n.sendInspectorState(It), n.getSettings().logStoreChanges && Ot(`"${e.$id}" store installed \u{1F195}`);
  });
}
let Oy = 0, Hi;
function Bd(t, e) {
  const n = e.reduce((r, i) => (r[i] = ve(t)[i], r), {});
  for (const r in n)
    t[r] = function() {
      const i = Oy, s = new Proxy(t, {
        get(...a) {
          return Hi = i, Reflect.get(...a);
        },
        set(...a) {
          return Hi = i, Reflect.set(...a);
        }
      });
      return n[r].apply(s, arguments);
    };
}
function qw({ app: t, store: e, options: n }) {
  if (!e.$id.startsWith("__hot:")) {
    if (n.state && (e._isOptionsAPI = !0), typeof n.state == "function") {
      Bd(
        e,
        Object.keys(n.actions)
      );
      const r = e._hotUpdate;
      ve(e)._hotUpdate = function(i) {
        r.apply(this, arguments), Bd(e, Object.keys(i._hmrPayload.actions));
      };
    }
    Bw(
      t,
      e
    );
  }
}
function Ww() {
  const t = tg(!0), e = t.run(() => Se({}));
  let n = [], r = [];
  const i = Gn({
    install(s) {
      za(i), i._a = s, s.provide(vy, i), s.config.globalProperties.$pinia = i, La && Uw(s, i), r.forEach((a) => n.push(a)), r = [];
    },
    use(s) {
      return !this._a && !my ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return La && typeof Proxy < "u" && i.use(qw), i;
}
function My(t, e) {
  for (const n in e) {
    const r = e[n];
    if (!(n in t))
      continue;
    const i = t[n];
    rs(i) && rs(r) && !qe(r) && !zn(r) ? t[n] = My(i, r) : t[n] = r;
  }
  return t;
}
const Ty = () => {
};
function qd(t, e, n, r = Ty) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && ng() && H_(i), i;
}
function ms(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
function gf(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    rs(i) && rs(r) && t.hasOwnProperty(n) && !qe(r) && !zn(r) ? t[n] = gf(i, r) : t[n] = r;
  }
  return t;
}
const Hw = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function zw(t) {
  return !rs(t) || !t.hasOwnProperty(Hw);
}
const { assign: Sn } = Object;
function Wd(t) {
  return !!(qe(t) && t.effect);
}
function Hd(t, e, n, r) {
  const { state: i, actions: s, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && r ? id(Se(i ? i() : {}).value) : id(n.state.value[t]);
    return Sn(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = Gn(me(() => {
      za(n);
      const d = n._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = yf(t, u, e, n, r, !0), l;
}
function yf(t, e, n = {}, r, i, s) {
  let a;
  const o = Sn({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !my && (l.onTrigger = (T) => {
    u ? d = T : u == !1 && !k._hotUpdating && (Array.isArray(d) ? d.push(T) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, c = Gn([]), h = Gn([]), d;
  const m = r.state.value[t];
  !s && !m && (process.env.NODE_ENV === "production" || !i) && (r.state.value[t] = {});
  const p = Se({});
  let g;
  function v(T) {
    let N;
    u = f = !1, process.env.NODE_ENV !== "production" && (d = []), typeof T == "function" ? (T(r.state.value[t]), N = {
      type: cr.patchFunction,
      storeId: t,
      events: d
    }) : (gf(r.state.value[t], T), N = {
      type: cr.patchObject,
      payload: T,
      storeId: t,
      events: d
    });
    const U = g = Symbol();
    Dl().then(() => {
      g === U && (u = !0);
    }), f = !0, ms(c, N, r.state.value[t]);
  }
  const y = s ? function() {
    const { state: N } = n, U = N ? N() : {};
    this.$patch((R) => {
      Sn(R, U);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : Ty;
  function E() {
    a.stop(), c = [], h = [], r._s.delete(t);
  }
  function w(T, N) {
    return function() {
      za(r);
      const U = Array.from(arguments), R = [], re = [];
      function M(J) {
        R.push(J);
      }
      function j(J) {
        re.push(J);
      }
      ms(h, {
        args: U,
        name: T,
        store: k,
        after: M,
        onError: j
      });
      let Z;
      try {
        Z = N.apply(this && this.$id === t ? this : k, U);
      } catch (J) {
        throw ms(re, J), J;
      }
      return Z instanceof Promise ? Z.then((J) => (ms(R, J), J)).catch((J) => (ms(re, J), Promise.reject(J))) : (ms(R, Z), Z);
    };
  }
  const S = /* @__PURE__ */ Gn({
    actions: {},
    getters: {},
    state: [],
    hotState: p
  }), P = {
    _p: r,
    $id: t,
    $onAction: qd.bind(null, h),
    $patch: v,
    $reset: y,
    $subscribe(T, N = {}) {
      const U = qd(c, T, N.detached, () => R()), R = a.run(() => Je(() => r.state.value[t], (re) => {
        (N.flush === "sync" ? f : u) && T({
          storeId: t,
          type: cr.direct,
          events: d
        }, re);
      }, Sn({}, l, N)));
      return U;
    },
    $dispose: E
  }, k = Su(process.env.NODE_ENV !== "production" || La ? Sn(
    {
      _hmrPayload: S,
      _customProperties: Gn(/* @__PURE__ */ new Set())
    },
    P
  ) : P);
  r._s.set(t, k);
  const C = r._e.run(() => (a = tg(), a.run(() => e())));
  for (const T in C) {
    const N = C[T];
    if (qe(N) && !Wd(N) || zn(N))
      process.env.NODE_ENV !== "production" && i ? Ro(p.value, T, Oa(C, T)) : s || (m && zw(N) && (qe(N) ? N.value = m[T] : gf(N, m[T])), r.state.value[t][T] = N), process.env.NODE_ENV !== "production" && S.state.push(T);
    else if (typeof N == "function") {
      const U = process.env.NODE_ENV !== "production" && i ? N : w(T, N);
      C[T] = U, process.env.NODE_ENV !== "production" && (S.actions[T] = N), o.actions[T] = N;
    } else
      process.env.NODE_ENV !== "production" && Wd(N) && (S.getters[T] = s ? n.getters[T] : N, Iu && (C._getters || (C._getters = Gn([]))).push(T));
  }
  if (Sn(k, C), Sn(ve(k), C), Object.defineProperty(k, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? p.value : r.state.value[t],
    set: (T) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      v((N) => {
        Sn(N, T);
      });
    }
  }), process.env.NODE_ENV !== "production" && (k._hotUpdate = Gn((T) => {
    k._hotUpdating = !0, T._hmrPayload.state.forEach((N) => {
      if (N in k.$state) {
        const U = T.$state[N], R = k.$state[N];
        typeof U == "object" && rs(U) && rs(R) ? My(U, R) : T.$state[N] = R;
      }
      Ro(k, N, Oa(T.$state, N));
    }), Object.keys(k.$state).forEach((N) => {
      N in T.$state || hc(k, N);
    }), u = !1, f = !1, r.state.value[t] = Oa(T._hmrPayload, "hotState"), f = !0, Dl().then(() => {
      u = !0;
    });
    for (const N in T._hmrPayload.actions) {
      const U = T[N];
      Ro(k, N, w(N, U));
    }
    for (const N in T._hmrPayload.getters) {
      const U = T._hmrPayload.getters[N], R = s ? me(() => (za(r), U.call(k, k))) : U;
      Ro(k, N, R);
    }
    Object.keys(k._hmrPayload.getters).forEach((N) => {
      N in T._hmrPayload.getters || hc(k, N);
    }), Object.keys(k._hmrPayload.actions).forEach((N) => {
      N in T._hmrPayload.actions || hc(k, N);
    }), k._hmrPayload = T._hmrPayload, k._getters = T._getters, k._hotUpdating = !1;
  })), La) {
    const T = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((N) => {
      Object.defineProperty(k, N, Sn({ value: k[N] }, T));
    });
  }
  return r._p.forEach((T) => {
    if (La) {
      const N = a.run(() => T({
        store: k,
        app: r._a,
        pinia: r,
        options: o
      }));
      Object.keys(N || {}).forEach((U) => k._customProperties.add(U)), Sn(k, N);
    } else
      Sn(k, a.run(() => T({
        store: k,
        app: r._a,
        pinia: r,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && k.$state && typeof k.$state == "object" && typeof k.$state.constructor == "function" && !k.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${k.$id}".`), m && s && n.hydrate && n.hydrate(k.$state, m), u = !0, f = !0, k;
}
function ls(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  typeof t == "string" ? (r = t, i = s ? n : e) : (i = t, r = t.id);
  function a(o, l) {
    const u = Pu();
    if (o = (process.env.NODE_ENV === "test" && pa && pa._testing ? null : o) || u && Ds(vy, null), o && za(o), process.env.NODE_ENV !== "production" && !pa)
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    o = pa, o._s.has(r) || (s ? yf(r, e, i, o) : Hd(r, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + r, h = s ? yf(c, e, i, o, !0) : Hd(c, Sn({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && Iu && u && u.proxy && !l) {
      const c = u.proxy, h = "_pStores" in c ? c._pStores : c._pStores = {};
      h[r] = f;
    }
    return f;
  }
  return a.$id = r, a;
}
function He(t) {
  {
    t = ve(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (qe(r) || zn(r)) && (e[n] = Oa(t, n));
    }
    return e;
  }
}
function Yw(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var is = 1, ss = 2, Rs = 3, Xw = 4, vf = 5, zd = 6378137, Kw = 6356752314e-3, Yd = 0.0066943799901413165, Pa = 484813681109536e-20, W = Math.PI / 2, Zw = 0.16666666666666666, Jw = 0.04722222222222222, Qw = 0.022156084656084655, ee = 1e-10, Lt = 0.017453292519943295, lr = 57.29577951308232, Ue = Math.PI / 4, Ya = Math.PI * 2, dt = 3.14159265359, un = {};
un.greenwich = 0;
un.lisbon = -9.131906111111;
un.paris = 2.337229166667;
un.bogota = -74.080916666667;
un.madrid = -3.687938888889;
un.rome = 12.452333333333;
un.bern = 7.439583333333;
un.jakarta = 106.807719444444;
un.ferro = -17.666666666667;
un.brussels = 4.367975;
un.stockholm = 18.058277777778;
un.athens = 23.7163375;
un.oslo = 10.722916666667;
const ex = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var Xd = /[\s_\-\/\(\)]/g;
function gi(t, e) {
  if (t[e])
    return t[e];
  for (var n = Object.keys(t), r = e.toLowerCase().replace(Xd, ""), i = -1, s, a; ++i < n.length; )
    if (s = n[i], a = s.toLowerCase().replace(Xd, ""), a === r)
      return t[s];
}
function _f(t) {
  var e = {}, n = t.split("+").map(function(o) {
    return o.trim();
  }).filter(function(o) {
    return o;
  }).reduce(function(o, l) {
    var u = l.split("=");
    return u.push(!0), o[u[0].toLowerCase()] = u[1], o;
  }, {}), r, i, s, a = {
    proj: "projName",
    datum: "datumCode",
    rf: function(o) {
      e.rf = parseFloat(o);
    },
    lat_0: function(o) {
      e.lat0 = o * Lt;
    },
    lat_1: function(o) {
      e.lat1 = o * Lt;
    },
    lat_2: function(o) {
      e.lat2 = o * Lt;
    },
    lat_ts: function(o) {
      e.lat_ts = o * Lt;
    },
    lon_0: function(o) {
      e.long0 = o * Lt;
    },
    lon_1: function(o) {
      e.long1 = o * Lt;
    },
    lon_2: function(o) {
      e.long2 = o * Lt;
    },
    alpha: function(o) {
      e.alpha = parseFloat(o) * Lt;
    },
    gamma: function(o) {
      e.rectified_grid_angle = parseFloat(o);
    },
    lonc: function(o) {
      e.longc = o * Lt;
    },
    x_0: function(o) {
      e.x0 = parseFloat(o);
    },
    y_0: function(o) {
      e.y0 = parseFloat(o);
    },
    k_0: function(o) {
      e.k0 = parseFloat(o);
    },
    k: function(o) {
      e.k0 = parseFloat(o);
    },
    a: function(o) {
      e.a = parseFloat(o);
    },
    b: function(o) {
      e.b = parseFloat(o);
    },
    r_a: function() {
      e.R_A = !0;
    },
    zone: function(o) {
      e.zone = parseInt(o, 10);
    },
    south: function() {
      e.utmSouth = !0;
    },
    towgs84: function(o) {
      e.datum_params = o.split(",").map(function(l) {
        return parseFloat(l);
      });
    },
    to_meter: function(o) {
      e.to_meter = parseFloat(o);
    },
    units: function(o) {
      e.units = o;
      var l = gi(ex, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * Lt;
    },
    pm: function(o) {
      var l = gi(un, o);
      e.from_greenwich = (l || parseFloat(o)) * Lt;
    },
    nadgrids: function(o) {
      o === "@null" ? e.datumCode = "none" : e.nadgrids = o;
    },
    axis: function(o) {
      var l = "ewnsud";
      o.length === 3 && l.indexOf(o.substr(0, 1)) !== -1 && l.indexOf(o.substr(1, 1)) !== -1 && l.indexOf(o.substr(2, 1)) !== -1 && (e.axis = o);
    },
    approx: function() {
      e.approx = !0;
    }
  };
  for (r in n)
    i = n[r], r in a ? (s = a[r], typeof s == "function" ? s(i) : e[s] = i) : e[r] = i;
  return typeof e.datumCode == "string" && e.datumCode !== "WGS84" && (e.datumCode = e.datumCode.toLowerCase()), e;
}
var Xa = 1, Ny = 2, Cy = 3, Bl = 4, Ly = 5, fh = -1, tx = /\s/, nx = /[A-Za-z]/, rx = /[A-Za-z84_]/, Ru = /[,\]]/, Py = /[\d\.E\-\+]/;
function Br(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = Xa;
}
Br.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== Bl)
    for (; tx.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case Xa:
      return this.neutral(t);
    case Ny:
      return this.keyword(t);
    case Bl:
      return this.quoted(t);
    case Ly:
      return this.afterquote(t);
    case Cy:
      return this.number(t);
    case fh:
      return;
  }
};
Br.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = Bl;
    return;
  }
  if (Ru.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
Br.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = Xa;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = Xa, this.currentObject = this.stack.pop(), this.currentObject || (this.state = fh);
    return;
  }
};
Br.prototype.number = function(t) {
  if (Py.test(t)) {
    this.word += t;
    return;
  }
  if (Ru.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
Br.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = Ly;
    return;
  }
  this.word += t;
};
Br.prototype.keyword = function(t) {
  if (rx.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = Xa;
    return;
  }
  if (Ru.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
Br.prototype.neutral = function(t) {
  if (nx.test(t)) {
    this.word = t, this.state = Ny;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = Bl;
    return;
  }
  if (Py.test(t)) {
    this.word = t, this.state = Cy;
    return;
  }
  if (Ru.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
Br.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === fh)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function ix(t) {
  var e = new Br(t);
  return e.output();
}
function Kd(t, e, n) {
  Array.isArray(e) && (n.unshift(e), e = null);
  var r = e ? {} : t, i = n.reduce(function(s, a) {
    return Ts(a, s), s;
  }, r);
  e && (t[e] = i);
}
function Ts(t, e) {
  if (!Array.isArray(t)) {
    e[t] = !0;
    return;
  }
  var n = t.shift();
  if (n === "PARAMETER" && (n = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      e[n] = {}, Ts(t[0], e[n]);
      return;
    }
    e[n] = t[0];
    return;
  }
  if (!t.length) {
    e[n] = !0;
    return;
  }
  if (n === "TOWGS84") {
    e[n] = t;
    return;
  }
  if (n === "AXIS") {
    n in e || (e[n] = []), e[n].push(t);
    return;
  }
  Array.isArray(n) || (e[n] = {});
  var r;
  switch (n) {
    case "UNIT":
    case "PRIMEM":
    case "VERT_DATUM":
      e[n] = {
        name: t[0].toLowerCase(),
        convert: t[1]
      }, t.length === 3 && Ts(t[2], e[n]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      e[n] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && Ts(t[3], e[n]);
      return;
    case "PROJECTEDCRS":
    case "PROJCRS":
    case "GEOGCS":
    case "GEOCCS":
    case "PROJCS":
    case "LOCAL_CS":
    case "GEODCRS":
    case "GEODETICCRS":
    case "GEODETICDATUM":
    case "EDATUM":
    case "ENGINEERINGDATUM":
    case "VERT_CS":
    case "VERTCRS":
    case "VERTICALCRS":
    case "COMPD_CS":
    case "COMPOUNDCRS":
    case "ENGINEERINGCRS":
    case "ENGCRS":
    case "FITTED_CS":
    case "LOCAL_DATUM":
    case "DATUM":
      t[0] = ["name", t[0]], Kd(e, n, t);
      return;
    default:
      for (r = -1; ++r < t.length; )
        if (!Array.isArray(t[r]))
          return Ts(t, e[n]);
      return Kd(e, n, t);
  }
}
var sx = 0.017453292519943295;
function ax(t, e) {
  var n = e[0], r = e[1];
  !(n in t) && r in t && (t[n] = t[r], e.length === 3 && (t[n] = e[2](t[n])));
}
function Mr(t) {
  return t * sx;
}
function ox(t) {
  if (t.type === "GEOGCS" ? t.projName = "longlat" : t.type === "LOCAL_CS" ? (t.projName = "identity", t.local = !0) : typeof t.PROJECTION == "object" ? t.projName = Object.keys(t.PROJECTION)[0] : t.projName = t.PROJECTION, t.AXIS) {
    for (var e = "", n = 0, r = t.AXIS.length; n < r; ++n) {
      var i = [t.AXIS[n][0].toLowerCase(), t.AXIS[n][1].toLowerCase()];
      i[0].indexOf("north") !== -1 || (i[0] === "y" || i[0] === "lat") && i[1] === "north" ? e += "n" : i[0].indexOf("south") !== -1 || (i[0] === "y" || i[0] === "lat") && i[1] === "south" ? e += "s" : i[0].indexOf("east") !== -1 || (i[0] === "x" || i[0] === "lon") && i[1] === "east" ? e += "e" : (i[0].indexOf("west") !== -1 || (i[0] === "x" || i[0] === "lon") && i[1] === "west") && (e += "w");
    }
    e.length === 2 && (e += "u"), e.length === 3 && (t.axis = e);
  }
  t.UNIT && (t.units = t.UNIT.name.toLowerCase(), t.units === "metre" && (t.units = "meter"), t.UNIT.convert && (t.type === "GEOGCS" ? t.DATUM && t.DATUM.SPHEROID && (t.to_meter = t.UNIT.convert * t.DATUM.SPHEROID.a) : t.to_meter = t.UNIT.convert));
  var s = t.GEOGCS;
  t.type === "GEOGCS" && (s = t), s && (s.DATUM ? t.datumCode = s.DATUM.name.toLowerCase() : t.datumCode = s.name.toLowerCase(), t.datumCode.slice(0, 2) === "d_" && (t.datumCode = t.datumCode.slice(2)), (t.datumCode === "new_zealand_geodetic_datum_1949" || t.datumCode === "new_zealand_1949") && (t.datumCode = "nzgd49"), (t.datumCode === "wgs_1984" || t.datumCode === "world_geodetic_system_1984") && (t.PROJECTION === "Mercator_Auxiliary_Sphere" && (t.sphere = !0), t.datumCode = "wgs84"), t.datumCode.slice(-6) === "_ferro" && (t.datumCode = t.datumCode.slice(0, -6)), t.datumCode.slice(-8) === "_jakarta" && (t.datumCode = t.datumCode.slice(0, -8)), ~t.datumCode.indexOf("belge") && (t.datumCode = "rnb72"), s.DATUM && s.DATUM.SPHEROID && (t.ellps = s.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), t.ellps.toLowerCase().slice(0, 13) === "international" && (t.ellps = "intl"), t.a = s.DATUM.SPHEROID.a, t.rf = parseFloat(s.DATUM.SPHEROID.rf, 10)), s.DATUM && s.DATUM.TOWGS84 && (t.datum_params = s.DATUM.TOWGS84), ~t.datumCode.indexOf("osgb_1936") && (t.datumCode = "osgb36"), ~t.datumCode.indexOf("osni_1952") && (t.datumCode = "osni52"), (~t.datumCode.indexOf("tm65") || ~t.datumCode.indexOf("geodetic_datum_of_1965")) && (t.datumCode = "ire65"), t.datumCode === "ch1903+" && (t.datumCode = "ch1903"), ~t.datumCode.indexOf("israel") && (t.datumCode = "isr93")), t.b && !isFinite(t.b) && (t.b = t.a);
  function a(u) {
    var f = t.to_meter || 1;
    return u * f;
  }
  var o = function(u) {
    return ax(t, u);
  }, l = [
    ["standard_parallel_1", "Standard_Parallel_1"],
    ["standard_parallel_1", "Latitude of 1st standard parallel"],
    ["standard_parallel_2", "Standard_Parallel_2"],
    ["standard_parallel_2", "Latitude of 2nd standard parallel"],
    ["false_easting", "False_Easting"],
    ["false_easting", "False easting"],
    ["false-easting", "Easting at false origin"],
    ["false_northing", "False_Northing"],
    ["false_northing", "False northing"],
    ["false_northing", "Northing at false origin"],
    ["central_meridian", "Central_Meridian"],
    ["central_meridian", "Longitude of natural origin"],
    ["central_meridian", "Longitude of false origin"],
    ["latitude_of_origin", "Latitude_Of_Origin"],
    ["latitude_of_origin", "Central_Parallel"],
    ["latitude_of_origin", "Latitude of natural origin"],
    ["latitude_of_origin", "Latitude of false origin"],
    ["scale_factor", "Scale_Factor"],
    ["k0", "scale_factor"],
    ["latitude_of_center", "Latitude_Of_Center"],
    ["latitude_of_center", "Latitude_of_center"],
    ["lat0", "latitude_of_center", Mr],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", Mr],
    ["x0", "false_easting", a],
    ["y0", "false_northing", a],
    ["long0", "central_meridian", Mr],
    ["lat0", "latitude_of_origin", Mr],
    ["lat0", "standard_parallel_1", Mr],
    ["lat1", "standard_parallel_1", Mr],
    ["lat2", "standard_parallel_2", Mr],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", Mr],
    ["srsCode", "name"]
  ];
  l.forEach(o), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") && (t.lat0 = Mr(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1);
}
function Ay(t) {
  var e = ix(t), n = e.shift(), r = e.shift();
  e.unshift(["name", r]), e.unshift(["type", n]);
  var i = {};
  return Ts(e, i), ox(i), i;
}
function Ht(t) {
  var e = this;
  if (arguments.length === 2) {
    var n = arguments[1];
    typeof n == "string" ? n.charAt(0) === "+" ? Ht[t] = _f(arguments[1]) : Ht[t] = Ay(arguments[1]) : Ht[t] = n;
  } else if (arguments.length === 1) {
    if (Array.isArray(t))
      return t.map(function(r) {
        Array.isArray(r) ? Ht.apply(e, r) : Ht(r);
      });
    if (typeof t == "string") {
      if (t in Ht)
        return Ht[t];
    } else
      "EPSG" in t ? Ht["EPSG:" + t.EPSG] = t : "ESRI" in t ? Ht["ESRI:" + t.ESRI] = t : "IAU2000" in t ? Ht["IAU2000:" + t.IAU2000] = t : console.log(t);
    return;
  }
}
Yw(Ht);
function lx(t) {
  return typeof t == "string";
}
function ux(t) {
  return t in Ht;
}
var cx = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function fx(t) {
  return cx.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var hx = ["3857", "900913", "3785", "102113"];
function dx(t) {
  var e = gi(t, "authority");
  if (!!e) {
    var n = gi(e, "epsg");
    return n && hx.indexOf(n) > -1;
  }
}
function mx(t) {
  var e = gi(t, "extension");
  if (!!e)
    return gi(e, "proj4");
}
function px(t) {
  return t[0] === "+";
}
function gx(t) {
  if (lx(t)) {
    if (ux(t))
      return Ht[t];
    if (fx(t)) {
      var e = Ay(t);
      if (dx(e))
        return Ht["EPSG:3857"];
      var n = mx(e);
      return n ? _f(n) : e;
    }
    if (px(t))
      return _f(t);
  } else
    return t;
}
function Zd(t, e) {
  t = t || {};
  var n, r;
  if (!e)
    return t;
  for (r in e)
    n = e[r], n !== void 0 && (t[r] = n);
  return t;
}
function yr(t, e, n) {
  var r = t * e;
  return n / Math.sqrt(1 - r * r);
}
function ao(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= dt ? t : t - ao(t) * Ya;
}
function Yn(t, e, n) {
  var r = t * n, i = 0.5 * t;
  return r = Math.pow((1 - r) / (1 + r), i), Math.tan(0.5 * (W - e)) / r;
}
function Ka(t, e) {
  for (var n = 0.5 * t, r, i, s = W - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (r = t * Math.sin(s), i = W - 2 * Math.atan(e * Math.pow((1 - r) / (1 + r), n)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function yx() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = yr(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function vx(t) {
  var e = t.x, n = t.y;
  if (n * lr > 90 && n * lr < -90 && e * lr > 180 && e * lr < -180)
    return null;
  var r, i;
  if (Math.abs(Math.abs(n) - W) <= ee)
    return null;
  if (this.sphere)
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(Ue + 0.5 * n));
  else {
    var s = Math.sin(n), a = Yn(this.e, n, s);
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 - this.a * this.k0 * Math.log(a);
  }
  return t.x = r, t.y = i, t;
}
function _x(t) {
  var e = t.x - this.x0, n = t.y - this.y0, r, i;
  if (this.sphere)
    i = W - 2 * Math.atan(Math.exp(-n / (this.a * this.k0)));
  else {
    var s = Math.exp(-n / (this.a * this.k0));
    if (i = Ka(this.e, s), i === -9999)
      return null;
  }
  return r = se(this.long0 + e / (this.a * this.k0)), t.x = r, t.y = i, t;
}
var bx = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const Ex = {
  init: yx,
  forward: vx,
  inverse: _x,
  names: bx
};
function wx() {
}
function Jd(t) {
  return t;
}
var xx = ["longlat", "identity"];
const Sx = {
  init: wx,
  forward: Jd,
  inverse: Jd,
  names: xx
};
var Ox = [Ex, Sx], gl = {}, ql = [];
function ky(t, e) {
  var n = ql.length;
  return t.names ? (ql[n] = t, t.names.forEach(function(r) {
    gl[r.toLowerCase()] = n;
  }), this) : (console.log(e), !0);
}
function Mx(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof gl[e] < "u" && ql[gl[e]])
    return ql[gl[e]];
}
function Tx() {
  Ox.forEach(ky);
}
const Nx = {
  start: Tx,
  add: ky,
  get: Mx
};
var Ee = {};
Ee.MERIT = {
  a: 6378137,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
Ee.SGS85 = {
  a: 6378136,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
Ee.GRS80 = {
  a: 6378137,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
Ee.IAU76 = {
  a: 6378140,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
Ee.airy = {
  a: 6377563396e-3,
  b: 635625691e-2,
  ellipseName: "Airy 1830"
};
Ee.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
Ee.NWL9D = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
Ee.mod_airy = {
  a: 6377340189e-3,
  b: 6356034446e-3,
  ellipseName: "Modified Airy"
};
Ee.andrae = {
  a: 637710443e-2,
  rf: 300,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
Ee.aust_SA = {
  a: 6378160,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
Ee.GRS67 = {
  a: 6378160,
  rf: 298.247167427,
  ellipseName: "GRS 67(IUGG 1967)"
};
Ee.bessel = {
  a: 6377397155e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
Ee.bess_nam = {
  a: 6377483865e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
Ee.clrk66 = {
  a: 63782064e-1,
  b: 63565838e-1,
  ellipseName: "Clarke 1866"
};
Ee.clrk80 = {
  a: 6378249145e-3,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
Ee.clrk58 = {
  a: 6378293645208759e-9,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
Ee.CPM = {
  a: 63757387e-1,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
Ee.delmbr = {
  a: 6376428,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
Ee.engelis = {
  a: 637813605e-2,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
Ee.evrst30 = {
  a: 6377276345e-3,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
Ee.evrst48 = {
  a: 6377304063e-3,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
Ee.evrst56 = {
  a: 6377301243e-3,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
Ee.evrst69 = {
  a: 6377295664e-3,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
Ee.evrstSS = {
  a: 6377298556e-3,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
Ee.fschr60 = {
  a: 6378166,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
Ee.fschr60m = {
  a: 6378155,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
Ee.fschr68 = {
  a: 6378150,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
Ee.helmert = {
  a: 6378200,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
Ee.hough = {
  a: 6378270,
  rf: 297,
  ellipseName: "Hough"
};
Ee.intl = {
  a: 6378388,
  rf: 297,
  ellipseName: "International 1909 (Hayford)"
};
Ee.kaula = {
  a: 6378163,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
Ee.lerch = {
  a: 6378139,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
Ee.mprts = {
  a: 6397300,
  rf: 191,
  ellipseName: "Maupertius 1738"
};
Ee.new_intl = {
  a: 63781575e-1,
  b: 63567722e-1,
  ellipseName: "New International 1967"
};
Ee.plessis = {
  a: 6376523,
  rf: 6355863,
  ellipseName: "Plessis 1817 (France)"
};
Ee.krass = {
  a: 6378245,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
Ee.SEasia = {
  a: 6378155,
  b: 63567733205e-4,
  ellipseName: "Southeast Asia"
};
Ee.walbeck = {
  a: 6376896,
  b: 63558348467e-4,
  ellipseName: "Walbeck"
};
Ee.WGS60 = {
  a: 6378165,
  rf: 298.3,
  ellipseName: "WGS 60"
};
Ee.WGS66 = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "WGS 66"
};
Ee.WGS7 = {
  a: 6378135,
  rf: 298.26,
  ellipseName: "WGS 72"
};
var Cx = Ee.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
Ee.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function Lx(t, e, n, r) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  r ? (t *= 1 - a * (Zw + a * (Jw + a * Qw)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function Px(t, e, n, r, i) {
  if (!t) {
    var s = gi(Ee, r);
    s || (s = Cx), t = s.a, e = s.b, n = s.rf;
  }
  return n && !e && (e = (1 - 1 / n) * t), (n === 0 || Math.abs(t - e) < ee) && (i = !0, e = t), {
    a: t,
    b: e,
    rf: n,
    sphere: i
  };
}
var Tt = {};
Tt.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
Tt.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
Tt.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
Tt.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
Tt.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
Tt.potsdam = {
  towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
Tt.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
Tt.hermannskogel = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
Tt.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};
Tt.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
Tt.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
Tt.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
Tt.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
Tt.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: "bessel",
  datumName: "S-JTSK (Ferro)"
};
Tt.beduaram = {
  towgs84: "-106,-87,188",
  ellipse: "clrk80",
  datumName: "Beduaram"
};
Tt.gunung_segara = {
  towgs84: "-403,684,41",
  ellipse: "bessel",
  datumName: "Gunung Segara Jakarta"
};
Tt.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};
function Ax(t, e, n, r, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = vf : o.datum_type = Xw, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = is), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = ss, o.datum_params[3] *= Pa, o.datum_params[4] *= Pa, o.datum_params[5] *= Pa, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = Rs, o.grids = a), o.a = n, o.b = r, o.es = i, o.ep2 = s, o;
}
var Dy = {};
function kx(t, e) {
  var n = new DataView(e), r = Rx(n), i = $x(n, r);
  i.nSubgrids > 1 && console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");
  var s = Fx(n, i, r), a = { header: i, subgrids: s };
  return Dy[t] = a, a;
}
function Dx(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(Ix);
}
function Ix(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: Dy[t] || null,
    isNull: !1
  };
}
function Ns(t) {
  return t / 3600 * Math.PI / 180;
}
function Rx(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function $x(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: bf(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function bf(t, e, n) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, n)));
}
function Fx(t, e, n) {
  for (var r = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = jx(t, r, n), o = Gx(t, r, a, n), l = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), u = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    i.push({
      ll: [Ns(a.lowerLongitude), Ns(a.lowerLatitude)],
      del: [Ns(a.longitudeInterval), Ns(a.latitudeInterval)],
      lim: [l, u],
      count: a.gridNodeCount,
      cvs: Vx(o)
    });
  }
  return i;
}
function Vx(t) {
  return t.map(function(e) {
    return [Ns(e.longitudeShift), Ns(e.latitudeShift)];
  });
}
function jx(t, e, n) {
  return {
    name: bf(t, e + 8, e + 16).trim(),
    parent: bf(t, e + 24, e + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(e + 72, n),
    upperLatitude: t.getFloat64(e + 88, n),
    lowerLongitude: t.getFloat64(e + 104, n),
    upperLongitude: t.getFloat64(e + 120, n),
    latitudeInterval: t.getFloat64(e + 136, n),
    longitudeInterval: t.getFloat64(e + 152, n),
    gridNodeCount: t.getInt32(e + 168, n)
  };
}
function Gx(t, e, n, r) {
  for (var i = e + 176, s = 16, a = [], o = 0; o < n.gridNodeCount; o++) {
    var l = {
      latitudeShift: t.getFloat32(i + o * s, r),
      longitudeShift: t.getFloat32(i + o * s + 4, r),
      latitudeAccuracy: t.getFloat32(i + o * s + 8, r),
      longitudeAccuracy: t.getFloat32(i + o * s + 12, r)
    };
    a.push(l);
  }
  return a;
}
function fr(t, e) {
  if (!(this instanceof fr))
    return new fr(t);
  e = e || function(u) {
    if (u)
      throw u;
  };
  var n = gx(t);
  if (typeof n != "object") {
    e(t);
    return;
  }
  var r = fr.projections.get(n.projName);
  if (!r) {
    e(t);
    return;
  }
  if (n.datumCode && n.datumCode !== "none") {
    var i = gi(Tt, n.datumCode);
    i && (n.datum_params = n.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), n.ellps = i.ellipse, n.datumName = i.datumName ? i.datumName : n.datumCode);
  }
  n.k0 = n.k0 || 1, n.axis = n.axis || "enu", n.ellps = n.ellps || "wgs84", n.lat1 = n.lat1 || n.lat0;
  var s = Px(n.a, n.b, n.rf, n.ellps, n.sphere), a = Lx(s.a, s.b, s.rf, n.R_A), o = Dx(n.nadgrids), l = n.datum || Ax(
    n.datumCode,
    n.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  Zd(this, n), Zd(this, r), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
fr.projections = Nx;
fr.projections.start();
function Ux(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === is ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === ss ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function Iy(t, e, n) {
  var r = t.x, i = t.y, s = t.z ? t.z : 0, a, o, l, u;
  if (i < -W && i > -1.001 * W)
    i = -W;
  else if (i > W && i < 1.001 * W)
    i = W;
  else {
    if (i < -W)
      return { x: -1 / 0, y: -1 / 0, z: t.z };
    if (i > W)
      return { x: 1 / 0, y: 1 / 0, z: t.z };
  }
  return r > Math.PI && (r -= 2 * Math.PI), o = Math.sin(i), u = Math.cos(i), l = o * o, a = n / Math.sqrt(1 - e * l), {
    x: (a + s) * u * Math.cos(r),
    y: (a + s) * u * Math.sin(r),
    z: (a * (1 - e) + s) * o
  };
}
function Ry(t, e, n, r) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, m, p, g, v, y, E, w = t.x, S = t.y, P = t.z ? t.z : 0, k, C, T;
  if (o = Math.sqrt(w * w + S * S), l = Math.sqrt(w * w + S * S + P * P), o / n < i) {
    if (k = 0, l / n < i)
      return C = W, T = -r, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    k = Math.atan2(S, w);
  u = P / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), m = f * (1 - e) * c, p = u * c, E = 0;
  do
    E++, d = n / Math.sqrt(1 - e * p * p), T = o * m + P * p - d * (1 - e * p * p), h = e * d / (d + T), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), g = f * (1 - h) * c, v = u * c, y = v * m - g * p, m = g, p = v;
  while (y * y > s && E < a);
  return C = Math.atan(v / Math.abs(g)), {
    x: k,
    y: C,
    z: T
  };
}
function Bx(t, e, n) {
  if (e === is)
    return {
      x: t.x + n[0],
      y: t.y + n[1],
      z: t.z + n[2]
    };
  if (e === ss) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + r,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function qx(t, e, n) {
  if (e === is)
    return {
      x: t.x - n[0],
      y: t.y - n[1],
      z: t.z - n[2]
    };
  if (e === ss) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6], f = (t.x - r) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function $o(t) {
  return t === is || t === ss;
}
function Wx(t, e, n) {
  if (Ux(t, e) || t.datum_type === vf || e.datum_type === vf)
    return n;
  var r = t.a, i = t.es;
  if (t.datum_type === Rs) {
    var s = Qd(t, !1, n);
    if (s !== 0)
      return;
    r = zd, i = Yd;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === Rs && (a = zd, o = Kw, l = Yd), i === l && r === a && !$o(t.datum_type) && !$o(e.datum_type))
    return n;
  if (n = Iy(n, i, r), $o(t.datum_type) && (n = Bx(n, t.datum_type, t.datum_params)), $o(e.datum_type) && (n = qx(n, e.datum_type, e.datum_params)), n = Ry(n, l, a, o), e.datum_type === Rs) {
    var u = Qd(e, !0, n);
    if (u !== 0)
      return;
  }
  return n;
}
function Qd(t, e, n) {
  if (t.grids === null || t.grids.length === 0)
    return console.log("Grid shift grids not found"), -1;
  for (var r = { x: -n.x, y: n.y }, i = { x: Number.NaN, y: Number.NaN }, s = [], a = 0; a < t.grids.length; a++) {
    var o = t.grids[a];
    if (s.push(o.name), o.isNull) {
      i = r;
      break;
    }
    if (o.mandatory, o.grid === null) {
      if (o.mandatory)
        return console.log("Unable to find mandatory grid '" + o.name + "'"), -1;
      continue;
    }
    var l = o.grid.subgrids[0], u = (Math.abs(l.del[1]) + Math.abs(l.del[0])) / 1e4, f = l.ll[0] - u, c = l.ll[1] - u, h = l.ll[0] + (l.lim[0] - 1) * l.del[0] + u, d = l.ll[1] + (l.lim[1] - 1) * l.del[1] + u;
    if (!(c > r.y || f > r.x || d < r.y || h < r.x) && (i = Hx(r, e, l), !isNaN(i.x)))
      break;
  }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -r.x * lr + " " + r.y * lr + " tried: '" + s + "'"), -1) : (n.x = -i.x, n.y = i.y, 0);
}
function Hx(t, e, n) {
  var r = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return r;
  var i = { x: t.x, y: t.y };
  i.x -= n.ll[0], i.y -= n.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = em(i, n);
  if (e) {
    if (isNaN(s.x))
      return r;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = em(s, n), isNaN(u.x)) {
        console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
        break;
      }
      l = { x: i.x - (u.x + s.x), y: i.y - (u.y + s.y) }, s.x += l.x, s.y += l.y;
    } while (a-- && Math.abs(l.x) > o && Math.abs(l.y) > o);
    if (a < 0)
      return console.log("Inverse grid shift iterator failed to converge."), r;
    r.x = se(s.x + n.ll[0]), r.y = s.y + n.ll[1];
  } else
    isNaN(s.x) || (r.x = t.x + s.x, r.y = t.y + s.y);
  return r;
}
function em(t, e) {
  var n = { x: t.x / e.del[0], y: t.y / e.del[1] }, r = { x: Math.floor(n.x), y: Math.floor(n.y) }, i = { x: n.x - 1 * r.x, y: n.y - 1 * r.y }, s = { x: Number.NaN, y: Number.NaN }, a;
  if (r.x < 0 || r.x >= e.lim[0] || r.y < 0 || r.y >= e.lim[1])
    return s;
  a = r.y * e.lim[0] + r.x;
  var o = { x: e.cvs[a][0], y: e.cvs[a][1] };
  a++;
  var l = { x: e.cvs[a][0], y: e.cvs[a][1] };
  a += e.lim[0];
  var u = { x: e.cvs[a][0], y: e.cvs[a][1] };
  a--;
  var f = { x: e.cvs[a][0], y: e.cvs[a][1] }, c = i.x * i.y, h = i.x * (1 - i.y), d = (1 - i.x) * (1 - i.y), m = (1 - i.x) * i.y;
  return s.x = d * o.x + h * l.x + m * f.x + c * u.x, s.y = d * o.y + h * l.y + m * f.y + c * u.y, s;
}
function tm(t, e, n) {
  var r = n.x, i = n.y, s = n.z || 0, a, o, l, u = {};
  for (l = 0; l < 3; l++)
    if (!(e && l === 2 && n.z === void 0))
      switch (l === 0 ? (a = r, "ew".indexOf(t.axis[l]) !== -1 ? o = "x" : o = "y") : l === 1 ? (a = i, "ns".indexOf(t.axis[l]) !== -1 ? o = "y" : o = "x") : (a = s, o = "z"), t.axis[l]) {
        case "e":
          u[o] = a;
          break;
        case "w":
          u[o] = -a;
          break;
        case "n":
          u[o] = a;
          break;
        case "s":
          u[o] = -a;
          break;
        case "u":
          n[o] !== void 0 && (u.z = a);
          break;
        case "d":
          n[o] !== void 0 && (u.z = -a);
          break;
        default:
          return null;
      }
  return u;
}
function $y(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function zx(t) {
  nm(t.x), nm(t.y);
}
function nm(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function Yx(t, e) {
  return (t.datum.datum_type === is || t.datum.datum_type === ss || t.datum.datum_type === Rs) && e.datumCode !== "WGS84" || (e.datum.datum_type === is || e.datum.datum_type === ss || e.datum.datum_type === Rs) && t.datumCode !== "WGS84";
}
function Wl(t, e, n, r) {
  var i;
  Array.isArray(n) ? n = $y(n) : n = {
    x: n.x,
    y: n.y,
    z: n.z,
    m: n.m
  };
  var s = n.z !== void 0;
  if (zx(n), t.datum && e.datum && Yx(t, e) && (i = new fr("WGS84"), n = Wl(t, i, n, r), t = i), r && t.axis !== "enu" && (n = tm(t, !1, n)), t.projName === "longlat")
    n = {
      x: n.x * Lt,
      y: n.y * Lt,
      z: n.z || 0
    };
  else if (t.to_meter && (n = {
    x: n.x * t.to_meter,
    y: n.y * t.to_meter,
    z: n.z || 0
  }), n = t.inverse(n), !n)
    return;
  if (t.from_greenwich && (n.x += t.from_greenwich), n = Wx(t.datum, e.datum, n), !!n)
    return e.from_greenwich && (n = {
      x: n.x - e.from_greenwich,
      y: n.y,
      z: n.z || 0
    }), e.projName === "longlat" ? n = {
      x: n.x * lr,
      y: n.y * lr,
      z: n.z || 0
    } : (n = e.forward(n), e.to_meter && (n = {
      x: n.x / e.to_meter,
      y: n.y / e.to_meter,
      z: n.z || 0
    })), r && e.axis !== "enu" ? tm(e, !0, n) : (s || delete n.z, n);
}
var rm = fr("WGS84");
function dc(t, e, n, r) {
  var i, s, a;
  return Array.isArray(n) ? (i = Wl(t, e, n, r) || { x: NaN, y: NaN }, n.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(n.splice(3)) : [i.x, i.y, n[2]].concat(n.splice(3)) : [i.x, i.y].concat(n.splice(2)) : [i.x, i.y]) : (s = Wl(t, e, n, r), a = Object.keys(n), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = n[o];
  }), s);
}
function im(t) {
  return t instanceof fr ? t : t.oProj ? t.oProj : fr(t);
}
function Vt(t, e, n) {
  t = im(t);
  var r = !1, i;
  return typeof e > "u" ? (e = t, t = rm, r = !0) : (typeof e.x < "u" || Array.isArray(e)) && (n = e, e = t, t = rm, r = !0), e = im(e), n ? dc(t, e, n) : (i = {
    forward: function(s, a) {
      return dc(t, e, s, a);
    },
    inverse: function(s, a) {
      return dc(e, t, s, a);
    }
  }, r && (i.oProj = e), i);
}
var sm = 6, Fy = "AJSAJS", Vy = "AFAFAF", Cs = 65, an = 73, On = 79, ga = 86, ya = 90;
const Xx = {
  forward: jy,
  inverse: Kx,
  toPoint: Gy
};
function jy(t, e) {
  return e = e || 5, Qx(Zx({
    lat: t[1],
    lon: t[0]
  }), e);
}
function Kx(t) {
  var e = hh(By(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function Gy(t) {
  var e = hh(By(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function mc(t) {
  return t * (Math.PI / 180);
}
function am(t) {
  return 180 * (t / Math.PI);
}
function Zx(t) {
  var e = t.lat, n = t.lon, r = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = mc(e), m = mc(n), p, g;
  g = Math.floor((n + 180) / 6) + 1, n === 180 && (g = 60), e >= 56 && e < 64 && n >= 3 && n < 12 && (g = 32), e >= 72 && e < 84 && (n >= 0 && n < 9 ? g = 31 : n >= 9 && n < 21 ? g = 33 : n >= 21 && n < 33 ? g = 35 : n >= 33 && n < 42 && (g = 37)), a = (g - 1) * 6 - 180 + 3, p = mc(a), o = i / (1 - i), l = r / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (m - p), h = r * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var v = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, y = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (y += 1e7), {
    northing: Math.round(y),
    easting: Math.round(v),
    zoneNumber: g,
    zoneLetter: Jx(e)
  };
}
function hh(t) {
  var e = t.northing, n = t.easting, r = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, m, p, g, v, y, E = n - 5e5, w = e;
  r < "N" && (w -= 1e7), g = (i - 1) * 6 - 180 + 3, l = o / (1 - o), p = w / s, v = p / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), y = v + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * v) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * v) + 151 * u * u * u / 96 * Math.sin(6 * v), f = a / Math.sqrt(1 - o * Math.sin(y) * Math.sin(y)), c = Math.tan(y) * Math.tan(y), h = l * Math.cos(y) * Math.cos(y), d = a * (1 - o) / Math.pow(1 - o * Math.sin(y) * Math.sin(y), 1.5), m = E / (f * s);
  var S = y - f * Math.tan(y) / d * (m * m / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * m * m * m * m / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * m * m * m * m * m * m / 720);
  S = am(S);
  var P = (m - (1 + 2 * c + h) * m * m * m / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * m * m * m * m * m / 120) / Math.cos(y);
  P = g + am(P);
  var k;
  if (t.accuracy) {
    var C = hh({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    k = {
      top: C.lat,
      right: C.lon,
      bottom: S,
      left: P
    };
  } else
    k = {
      lat: S,
      lon: P
    };
  return k;
}
function Jx(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function Qx(t, e) {
  var n = "00000" + t.easting, r = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + eS(t.easting, t.northing, t.zoneNumber) + n.substr(n.length - 5, e) + r.substr(r.length - 5, e);
}
function eS(t, e, n) {
  var r = Uy(n), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return tS(i, s, r);
}
function Uy(t) {
  var e = t % sm;
  return e === 0 && (e = sm), e;
}
function tS(t, e, n) {
  var r = n - 1, i = Fy.charCodeAt(r), s = Vy.charCodeAt(r), a = i + t - 1, o = s + e, l = !1;
  a > ya && (a = a - ya + Cs - 1, l = !0), (a === an || i < an && a > an || (a > an || i < an) && l) && a++, (a === On || i < On && a > On || (a > On || i < On) && l) && (a++, a === an && a++), a > ya && (a = a - ya + Cs - 1), o > ga ? (o = o - ga + Cs - 1, l = !0) : l = !1, (o === an || s < an && o > an || (o > an || s < an) && l) && o++, (o === On || s < On && o > On || (o > On || s < On) && l) && (o++, o === an && o++), o > ga && (o = o - ga + Cs - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function By(t) {
  if (t && t.length === 0)
    throw "MGRSPoint coverting from nothing";
  for (var e = t.length, n = null, r = "", i, s = 0; !/[A-Z]/.test(i = t.charAt(s)); ) {
    if (s >= 2)
      throw "MGRSPoint bad conversion from: " + t;
    r += i, s++;
  }
  var a = parseInt(r, 10);
  if (s === 0 || s + 3 > e)
    throw "MGRSPoint bad conversion from: " + t;
  var o = t.charAt(s++);
  if (o <= "A" || o === "B" || o === "Y" || o >= "Z" || o === "I" || o === "O")
    throw "MGRSPoint zone letter " + o + " not handled: " + t;
  n = t.substring(s, s += 2);
  for (var l = Uy(a), u = nS(n.charAt(0), l), f = rS(n.charAt(1), l); f < iS(o); )
    f += 2e6;
  var c = e - s;
  if (c % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var h = c / 2, d = 0, m = 0, p, g, v, y, E;
  return h > 0 && (p = 1e5 / Math.pow(10, h), g = t.substring(s, s + h), d = parseFloat(g) * p, v = t.substring(s + h), m = parseFloat(v) * p), y = d + u, E = m + f, {
    easting: y,
    northing: E,
    zoneLetter: o,
    zoneNumber: a,
    accuracy: p
  };
}
function nS(t, e) {
  for (var n = Fy.charCodeAt(e - 1), r = 1e5, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === On && n++, n > ya) {
      if (i)
        throw "Bad character: " + t;
      n = Cs, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function rS(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var n = Vy.charCodeAt(e - 1), r = 0, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === On && n++, n > ga) {
      if (i)
        throw "Bad character: " + t;
      n = Cs, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function iS(t) {
  var e;
  switch (t) {
    case "C":
      e = 11e5;
      break;
    case "D":
      e = 2e6;
      break;
    case "E":
      e = 28e5;
      break;
    case "F":
      e = 37e5;
      break;
    case "G":
      e = 46e5;
      break;
    case "H":
      e = 55e5;
      break;
    case "J":
      e = 64e5;
      break;
    case "K":
      e = 73e5;
      break;
    case "L":
      e = 82e5;
      break;
    case "M":
      e = 91e5;
      break;
    case "N":
      e = 0;
      break;
    case "P":
      e = 8e5;
      break;
    case "Q":
      e = 17e5;
      break;
    case "R":
      e = 26e5;
      break;
    case "S":
      e = 35e5;
      break;
    case "T":
      e = 44e5;
      break;
    case "U":
      e = 53e5;
      break;
    case "V":
      e = 62e5;
      break;
    case "W":
      e = 7e6;
      break;
    case "X":
      e = 79e5;
      break;
    default:
      e = -1;
  }
  if (e >= 0)
    return e;
  throw "Invalid zone letter: " + t;
}
function Ws(t, e, n) {
  if (!(this instanceof Ws))
    return new Ws(t, e, n);
  if (Array.isArray(t))
    this.x = t[0], this.y = t[1], this.z = t[2] || 0;
  else if (typeof t == "object")
    this.x = t.x, this.y = t.y, this.z = t.z || 0;
  else if (typeof t == "string" && typeof e > "u") {
    var r = t.split(",");
    this.x = parseFloat(r[0], 10), this.y = parseFloat(r[1], 10), this.z = parseFloat(r[2], 10) || 0;
  } else
    this.x = t, this.y = e, this.z = n || 0;
  console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
}
Ws.fromMGRS = function(t) {
  return new Ws(Gy(t));
};
Ws.prototype.toMGRS = function(t) {
  return jy([this.x, this.y], t);
};
var sS = 1, aS = 0.25, om = 0.046875, lm = 0.01953125, um = 0.01068115234375, oS = 0.75, lS = 0.46875, uS = 0.013020833333333334, cS = 0.007120768229166667, fS = 0.3645833333333333, hS = 0.005696614583333333, dS = 0.3076171875;
function qy(t) {
  var e = [];
  e[0] = sS - t * (aS + t * (om + t * (lm + t * um))), e[1] = t * (oS - t * (om + t * (lm + t * um)));
  var n = t * t;
  return e[2] = n * (lS - t * (uS + t * cS)), n *= t, e[3] = n * (fS - t * hS), e[4] = n * t * dS, e;
}
function $u(t, e, n, r) {
  return n *= e, e *= e, r[0] * t - n * (r[1] + e * (r[2] + e * (r[3] + e * r[4])));
}
var mS = 20;
function Wy(t, e, n) {
  for (var r = 1 / (1 - e), i = t, s = mS; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = ($u(i, a, Math.cos(i), n) - t) * (o * Math.sqrt(o)) * r, i -= o, Math.abs(o) < ee)
      return i;
  }
  return i;
}
function pS() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = qy(this.es), this.ml0 = $u(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function gS(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s, a, o = Math.sin(n), l = Math.cos(n);
  if (this.es) {
    var f = l * r, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), m = Math.abs(l) > ee ? Math.tan(n) : 0, p = Math.pow(m, 2), g = Math.pow(p, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var v = $u(n, o, l, this.en);
    s = this.a * (this.k0 * f * (1 + c / 6 * (1 - p + h + c / 20 * (5 - 18 * p + g + 14 * h - 58 * p * h + c / 42 * (61 + 179 * g - g * p - 479 * p))))) + this.x0, a = this.a * (this.k0 * (v - this.ml0 + o * r * f / 2 * (1 + c / 12 * (5 - p + 9 * h + 4 * d + c / 30 * (61 + g - 58 * p + 270 * h - 330 * p * h + c / 56 * (1385 + 543 * g - g * p - 3111 * p)))))) + this.y0;
  } else {
    var u = l * Math.sin(r);
    if (Math.abs(Math.abs(u) - 1) < ee)
      return 93;
    if (s = 0.5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)) + this.x0, a = l * Math.cos(r) / Math.sqrt(1 - Math.pow(u, 2)), u = Math.abs(a), u >= 1) {
      if (u - 1 > ee)
        return 93;
      a = 0;
    } else
      a = Math.acos(a);
    n < 0 && (a = -a), a = this.a * this.k0 * (a - this.lat0) + this.y0;
  }
  return t.x = s, t.y = a, t;
}
function yS(t) {
  var e, n, r, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, n = Wy(e, this.es, this.en), Math.abs(n) < W) {
      var c = Math.sin(n), h = Math.cos(n), d = Math.abs(h) > ee ? Math.tan(n) : 0, m = this.ep2 * Math.pow(h, 2), p = Math.pow(m, 2), g = Math.pow(d, 2), v = Math.pow(g, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var y = s * Math.sqrt(e) / this.k0, E = Math.pow(y, 2);
      e = e * d, r = n - e * E / (1 - this.es) * 0.5 * (1 - E / 12 * (5 + 3 * g - 9 * m * g + m - 4 * p - E / 30 * (61 + 90 * g - 252 * m * g + 45 * v + 46 * m - E / 56 * (1385 + 3633 * g + 4095 * v + 1574 * v * g)))), i = se(this.long0 + y * (1 - E / 6 * (1 + 2 * g + m - E / 20 * (5 + 28 * g + 24 * v + 8 * m * g + 6 * m - E / 42 * (61 + 662 * g + 1320 * v + 720 * v * g)))) / h);
    } else
      r = W * ao(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), r = Math.asin(e), a < 0 && (r = -r), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = r, t;
}
var vS = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const yl = {
  init: pS,
  forward: gS,
  inverse: yS,
  names: vS
};
function Hy(t) {
  var e = Math.exp(t);
  return e = (e - 1 / e) / 2, e;
}
function Bn(t, e) {
  t = Math.abs(t), e = Math.abs(e);
  var n = Math.max(t, e), r = Math.min(t, e) / (n || 1);
  return n * Math.sqrt(1 + Math.pow(r, 2));
}
function _S(t) {
  var e = 1 + t, n = e - 1;
  return n === 0 ? t : t * Math.log(e) / n;
}
function bS(t) {
  var e = Math.abs(t);
  return e = _S(e * (1 + e / (Bn(1, e) + 1))), t < 0 ? -e : e;
}
function dh(t, e) {
  for (var n = 2 * Math.cos(2 * e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function ES(t, e) {
  for (var n = 2 * Math.cos(e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return Math.sin(e) * a;
}
function wS(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function zy(t, e, n) {
  for (var r = Math.sin(e), i = Math.cos(e), s = Hy(n), a = wS(n), o = 2 * i * a, l = -2 * r * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, m, p; --u >= 0; )
    m = h, p = c, h = f, c = d, f = -m + o * h - l * c + t[u], d = -p + l * h + o * c;
  return o = r * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function xS() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (yl.init.apply(this), this.forward = yl.forward, this.inverse = yl.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), n = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), n = n * e, this.cgb[1] = n * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = n * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), n = n * e, this.cgb[2] = n * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = n * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), n = n * e, this.cgb[3] = n * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = n * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), n = n * e, this.cgb[4] = n * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = n * (-734 / 315 + e * (109598 / 31185)), n = n * e, this.cgb[5] = n * (601676 / 22275), this.cbg[5] = n * (444337 / 155925), n = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + n * (1 / 4 + n * (1 / 64 + n / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = n * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = n * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), n = n * e, this.utg[2] = n * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = n * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), n = n * e, this.utg[3] = n * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = n * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), n = n * e, this.utg[4] = n * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = n * (34729 / 80640 + e * (-3418889 / 1995840)), n = n * e, this.utg[5] = n * (-20648693 / 638668800), this.gtu[5] = n * (212378941 / 319334400);
  var r = dh(this.cbg, this.lat0);
  this.Zb = -this.Qn * (r + ES(this.gtu, 2 * r));
}
function SS(t) {
  var e = se(t.x - this.long0), n = t.y;
  n = dh(this.cbg, n);
  var r = Math.sin(n), i = Math.cos(n), s = Math.sin(e), a = Math.cos(e);
  n = Math.atan2(r, a * i), e = Math.atan2(s * i, Bn(r, i * a)), e = bS(Math.tan(e));
  var o = zy(this.gtu, 2 * n, 2 * e);
  n = n + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * n + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function OS(t) {
  var e = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  n = (n - this.Zb) / this.Qn, e = e / this.Qn;
  var r, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = zy(this.utg, 2 * n, 2 * e);
    n = n + s[0], e = e + s[1], e = Math.atan(Hy(e));
    var a = Math.sin(n), o = Math.cos(n), l = Math.sin(e), u = Math.cos(e);
    n = Math.atan2(a * u, Bn(l, u * o)), e = Math.atan2(l, u * o), r = se(e + this.long0), i = dh(this.cgb, n);
  } else
    r = 1 / 0, i = 1 / 0;
  return t.x = r, t.y = i, t;
}
var MS = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "tmerc"];
const vl = {
  init: xS,
  forward: SS,
  inverse: OS,
  names: MS
};
function TS(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var NS = "etmerc";
function CS() {
  var t = TS(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * Lt, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, vl.init.apply(this), this.forward = vl.forward, this.inverse = vl.inverse;
}
var LS = ["Universal Transverse Mercator System", "utm"];
const PS = {
  init: CS,
  names: LS,
  dependsOn: NS
};
function mh(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var AS = 20;
function kS() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + Ue) / (Math.pow(Math.tan(0.5 * this.lat0 + Ue), this.C) * mh(this.e * t, this.ratexp));
}
function DS(t) {
  var e = t.x, n = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * n + Ue), this.C) * mh(this.e * Math.sin(n), this.ratexp)) - W, t.x = this.C * e, t;
}
function IS(t) {
  for (var e = 1e-14, n = t.x / this.C, r = t.y, i = Math.pow(Math.tan(0.5 * r + Ue) / this.K, 1 / this.C), s = AS; s > 0 && (r = 2 * Math.atan(i * mh(this.e * Math.sin(t.y), -0.5 * this.e)) - W, !(Math.abs(r - t.y) < e)); --s)
    t.y = r;
  return s ? (t.x = n, t.y = r, t) : null;
}
var RS = ["gauss"];
const ph = {
  init: kS,
  forward: DS,
  inverse: IS,
  names: RS
};
function $S() {
  ph.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function FS(t) {
  var e, n, r, i;
  return t.x = se(t.x - this.long0), ph.forward.apply(this, [t]), e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * n * r), t.x = i * n * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * n * r), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function VS(t) {
  var e, n, r, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Math.sqrt(t.x * t.x + t.y * t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), n = Math.cos(a), i = Math.asin(n * this.sinc0 + t.y * e * this.cosc0 / s), r = Math.atan2(t.x * e, s * this.cosc0 * n - t.y * this.sinc0 * e);
  } else
    i = this.phic0, r = 0;
  return t.x = r, t.y = i, ph.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var jS = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const GS = {
  init: $S,
  forward: FS,
  inverse: VS,
  names: jS
};
function US(t, e, n) {
  return e *= n, Math.tan(0.5 * (W + t)) * Math.pow((1 - e) / (1 + e), 0.5 * n);
}
function BS() {
  this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= ee && (this.k0 = 0.5 * (1 + ao(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= ee && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= ee && (this.k0 = 0.5 * this.cons * yr(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Yn(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = yr(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - W, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function qS(t) {
  var e = t.x, n = t.y, r = Math.sin(n), i = Math.cos(n), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= ee && Math.abs(n + this.lat0) <= ee ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * r + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * r - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(n, r, this.e)) - W, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= ee ? (u = Yn(this.e, n * this.con, this.con * r), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < ee ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function WS(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, n = this.lat0, a <= ee ? (t.x = e, t.y = n, t) : (n = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < ee ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = n, t);
  } else if (Math.abs(this.coslat0) <= ee) {
    if (a <= ee)
      return n = this.lat0, e = this.long0, t.x = e, t.y = n, t;
    t.x *= this.con, t.y *= this.con, r = a * this.cons / (2 * this.a * this.k0), n = this.con * Ka(this.e, r), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= ee ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), n = -1 * Ka(this.e, Math.tan(0.5 * (W + s)));
  return t.x = e, t.y = n, t;
}
var HS = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
const zS = {
  init: BS,
  forward: qS,
  inverse: WS,
  names: HS,
  ssfn_: US
};
function YS() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), n = this.a, r = this.rf, i = 1 / r, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * n * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function XS(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), n = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), r = -this.alpha * (e + n) + this.K, i = 2 * (Math.atan(Math.exp(r)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function KS(t) {
  for (var e = t.x - this.x0, n = t.y - this.y0, r = e / this.R, i = 2 * (Math.atan(Math.exp(n / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(r)), a = Math.atan(Math.sin(r) / (Math.cos(this.b0) * Math.cos(r) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var ZS = ["somerc"];
const JS = {
  init: YS,
  forward: XS,
  inverse: KS,
  names: ZS
};
var ws = 1e-7;
function QS(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], n = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(n) !== -1;
}
function eO() {
  var t, e, n, r, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, m = 0, p = 0, g = 0, v = 0;
  this.no_off = QS(this), this.no_rot = "no_rot" in this;
  var y = !1;
  "alpha" in this && (y = !0);
  var E = !1;
  if ("rectified_grid_angle" in this && (E = !0), y && (v = this.alpha), E && (f = this.rectified_grid_angle * Lt), y || E)
    h = this.longc;
  else if (d = this.long1, p = this.lat1, m = this.long2, g = this.lat2, Math.abs(p - g) <= ws || (t = Math.abs(p)) <= ws || Math.abs(t - W) <= ws || Math.abs(Math.abs(this.lat0) - W) <= ws || Math.abs(Math.abs(g) - W) <= ws)
    throw new Error();
  var w = 1 - this.es;
  e = Math.sqrt(w), Math.abs(this.lat0) > ee ? (o = Math.sin(this.lat0), n = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = n * n, this.B = Math.sqrt(1 + this.es * this.B * this.B / w), this.A = this.B * this.k0 * e / t, r = this.B * e / (n * Math.sqrt(t)), i = r * r - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += r, this.E *= Math.pow(Yn(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = r = i = 1), y || E ? (y ? (c = Math.asin(Math.sin(v) / r), E || (f = v)) : (c = f, v = Math.asin(r * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(Yn(this.e, p, Math.sin(p)), this.B), a = Math.pow(Yn(this.e, g, Math.sin(g)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - m, t < -Math.pi ? m -= Ya : t > Math.pi && (m += Ya), this.lam0 = se(0.5 * (d + m) - Math.atan(u * Math.tan(0.5 * this.B * (d - m)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = v = Math.asin(r * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(r * r - 1) / Math.cos(v))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(Ue - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(Ue + i));
}
function tO(t) {
  var e = {}, n, r, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - W) > ee) {
    if (a = this.E / Math.pow(Yn(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, n = 0.5 * (a - o), r = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (n * this.singam - s * this.cosgam) / r, Math.abs(Math.abs(i) - 1) < ee)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < ws ? l = this.A * t.x : l = this.ArB * Math.atan2(n * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function nO(t) {
  var e, n, r, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (n = t.y, e = t.x) : (n = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), r = Math.exp(-this.BrA * n), i = 0.5 * (r - 1 / r), s = 0.5 * (r + 1 / r), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < ee)
    l.x = 0, l.y = o < 0 ? -W : W;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = Ka(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var rO = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const iO = {
  init: eO,
  forward: tO,
  inverse: nO,
  names: rO
};
function sO() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < ee)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), n = Math.cos(this.lat1), r = yr(this.e, e, n), i = Yn(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = yr(this.e, s, a), l = Yn(this.e, this.lat2, s), u = Yn(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > ee ? this.ns = Math.log(r / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = r / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function aO(t) {
  var e = t.x, n = t.y;
  Math.abs(2 * Math.abs(n) - Math.PI) <= ee && (n = ao(n) * (W - 2 * ee));
  var r = Math.abs(Math.abs(n) - W), i, s;
  if (r > ee)
    i = Yn(this.e, n, Math.sin(n)), s = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (r = n * this.ns, r <= 0)
      return null;
    s = 0;
  }
  var a = this.ns * se(e - this.long0);
  return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t;
}
function oO(t) {
  var e, n, r, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), n = 1) : (e = -Math.sqrt(a * a + o * o), n = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(n * a, n * o)), e !== 0 || this.ns > 0) {
    if (n = 1 / this.ns, r = Math.pow(e / (this.a * this.f0), n), i = Ka(this.e, r), i === -9999)
      return null;
  } else
    i = -W;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var lO = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const uO = {
  init: sO,
  forward: aO,
  inverse: oO,
  names: lO
};
function cO() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function fO(t) {
  var e, n, r, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), n = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), r = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(n) + Math.sin(this.ad) * Math.cos(n) * Math.cos(r)), s = Math.asin(Math.cos(n) * Math.sin(r) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function hO(t) {
  var e, n, r, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), r = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(r) - Math.sin(this.ad) * Math.cos(r) * Math.cos(i)), n = Math.asin(Math.cos(r) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - n / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var dO = ["Krovak", "krovak"];
const mO = {
  init: cO,
  forward: fO,
  inverse: hO,
  names: dO
};
function Xt(t, e, n, r, i) {
  return t * i - e * Math.sin(2 * i) + n * Math.sin(4 * i) - r * Math.sin(6 * i);
}
function oo(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function lo(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function uo(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function co(t) {
  return t * t * t * (35 / 3072);
}
function Hs(t, e, n) {
  var r = e * n;
  return t / Math.sqrt(1 - r * r);
}
function Ks(t) {
  return Math.abs(t) < W ? t : t - ao(t) * Math.PI;
}
function Hl(t, e, n, r, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - n * Math.sin(2 * s) + r * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * n * Math.cos(2 * s) + 4 * r * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function pO() {
  this.sphere || (this.e0 = oo(this.es), this.e1 = lo(this.es), this.e2 = uo(this.es), this.e3 = co(this.es), this.ml0 = this.a * Xt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function gO(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(r)), n = this.a * (Math.atan2(Math.tan(i), Math.cos(r)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = Hs(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = r * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Xt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), n = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = n + this.y0, t;
}
function yO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i;
  if (this.sphere) {
    var s = n + this.lat0;
    r = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + n, o = Hl(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - W) <= ee)
      return t.x = this.long0, t.y = W, n < 0 && (t.y *= -1), t;
    var l = Hs(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    r = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = Ks(r), t;
}
var vO = ["Cassini", "Cassini_Soldner", "cass"];
const _O = {
  init: pO,
  forward: gO,
  inverse: yO,
  names: vO
};
function fi(t, e) {
  var n;
  return t > 1e-7 ? (n = t * e, (1 - t * t) * (e / (1 - n * n) - 0.5 / t * Math.log((1 - n) / (1 + n)))) : 2 * e;
}
var bO = 1, EO = 2, wO = 3, xO = 4;
function SO() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - W) < ee ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < ee ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = fi(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = kO(this.es), this.mode) {
      case this.N_POLE:
        this.dd = 1;
        break;
      case this.S_POLE:
        this.dd = 1;
        break;
      case this.EQUIT:
        this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
        break;
      case this.OBLIQ:
        this.rq = Math.sqrt(0.5 * this.qp), e = Math.sin(this.lat0), this.sinb1 = fi(this.e, e) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * e * e) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function OO(t) {
  var e, n, r, i, s, a, o, l, u, f, c = t.x, h = t.y;
  if (c = se(c - this.long0), this.sphere) {
    if (s = Math.sin(h), f = Math.cos(h), r = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (n = this.mode === this.EQUIT ? 1 + f * r : 1 + this.sinph0 * s + this.cosph0 * f * r, n <= ee)
        return null;
      n = Math.sqrt(2 / n), e = n * f * Math.sin(c), n *= this.mode === this.EQUIT ? s : this.cosph0 * s - this.sinph0 * f * r;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (r = -r), Math.abs(h + this.lat0) < ee)
        return null;
      n = Ue - h * 0.5, n = 2 * (this.mode === this.S_POLE ? Math.cos(n) : Math.sin(n)), e = n * Math.sin(c), n *= r;
    }
  } else {
    switch (o = 0, l = 0, u = 0, r = Math.cos(c), i = Math.sin(c), s = Math.sin(h), a = fi(this.e, s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = a / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
      case this.OBLIQ:
        u = 1 + this.sinb1 * o + this.cosb1 * l * r;
        break;
      case this.EQUIT:
        u = 1 + l * r;
        break;
      case this.N_POLE:
        u = W + h, a = this.qp - a;
        break;
      case this.S_POLE:
        u = h - W, a = this.qp + a;
        break;
    }
    if (Math.abs(u) < ee)
      return null;
    switch (this.mode) {
      case this.OBLIQ:
      case this.EQUIT:
        u = Math.sqrt(2 / u), this.mode === this.OBLIQ ? n = this.ymf * u * (this.cosb1 * o - this.sinb1 * l * r) : n = (u = Math.sqrt(2 / (1 + l * r))) * o * this.ymf, e = this.xmf * u * l * i;
        break;
      case this.N_POLE:
      case this.S_POLE:
        a >= 0 ? (e = (u = Math.sqrt(a)) * i, n = r * (this.mode === this.S_POLE ? u : -u)) : e = n = 0;
        break;
    }
  }
  return t.x = this.a * e + this.x0, t.y = this.a * n + this.y0, t;
}
function MO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i, s, a, o, l, u;
  if (this.sphere) {
    var f = 0, c, h = 0;
    if (c = Math.sqrt(e * e + n * n), i = c * 0.5, i > 1)
      return null;
    switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (h = Math.sin(i), f = Math.cos(i)), this.mode) {
      case this.EQUIT:
        i = Math.abs(c) <= ee ? 0 : Math.asin(n * h / c), e *= h, n = f * c;
        break;
      case this.OBLIQ:
        i = Math.abs(c) <= ee ? this.lat0 : Math.asin(f * this.sinph0 + n * h * this.cosph0 / c), e *= h * this.cosph0, n = (f - Math.sin(i) * this.sinph0) * c;
        break;
      case this.N_POLE:
        n = -n, i = W - i;
        break;
      case this.S_POLE:
        i -= W;
        break;
    }
    r = n === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(e, n);
  } else {
    if (u = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (e /= this.dd, n *= this.dd, l = Math.sqrt(e * e + n * n), l < ee)
        return t.x = this.long0, t.y = this.lat0, t;
      a = 2 * Math.asin(0.5 * l / this.rq), s = Math.cos(a), e *= a = Math.sin(a), this.mode === this.OBLIQ ? (u = s * this.sinb1 + n * a * this.cosb1 / l, o = this.qp * u, n = l * this.cosb1 * s - n * this.sinb1 * a) : (u = n * a / l, o = this.qp * u, n = l * s);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (n = -n), o = e * e + n * n, !o)
        return t.x = this.long0, t.y = this.lat0, t;
      u = 1 - o / this.qp, this.mode === this.S_POLE && (u = -u);
    }
    r = Math.atan2(e, n), i = DO(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + r), t.y = i, t;
}
var TO = 0.3333333333333333, NO = 0.17222222222222222, CO = 0.10257936507936508, LO = 0.06388888888888888, PO = 0.0664021164021164, AO = 0.016415012942191543;
function kO(t) {
  var e, n = [];
  return n[0] = t * TO, e = t * t, n[0] += e * NO, n[1] = e * LO, e *= t, n[0] += e * CO, n[1] += e * PO, n[2] = e * AO, n;
}
function DO(t, e) {
  var n = t + t;
  return t + e[0] * Math.sin(n) + e[1] * Math.sin(n + n) + e[2] * Math.sin(n + n + n);
}
var IO = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const RO = {
  init: SO,
  forward: OO,
  inverse: MO,
  names: IO,
  S_POLE: bO,
  N_POLE: EO,
  EQUIT: wO,
  OBLIQ: xO
};
function yi(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function $O() {
  Math.abs(this.lat1 + this.lat2) < ee || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = yr(this.e3, this.sin_po, this.cos_po), this.qs1 = fi(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = yr(this.e3, this.sin_po, this.cos_po), this.qs2 = fi(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = fi(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > ee ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function FO(t) {
  var e = t.x, n = t.y;
  this.sin_phi = Math.sin(n), this.cos_phi = Math.cos(n);
  var r = fi(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function VO(t) {
  var e, n, r, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), r = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), r = -1), i = 0, e !== 0 && (i = Math.atan2(r * t.x, r * t.y)), r = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - r * r) / (2 * this.ns0)) : (n = (this.c - r * r) / this.ns0, a = this.phi1z(this.e3, n)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function jO(t, e) {
  var n, r, i, s, a, o = yi(0.5 * e);
  if (t < ee)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (n = Math.sin(o), r = Math.cos(o), i = t * n, s = 1 - i * i, a = 0.5 * s * s / r * (e / (1 - l) - n / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var GO = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const UO = {
  init: $O,
  forward: FO,
  inverse: VO,
  names: GO,
  phi1z: jO
};
function BO() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function qO(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, a > 0 || Math.abs(a) <= ee ? (o = this.x0 + this.a * s * n * Math.sin(r) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i) / a) : (o = this.x0 + this.infinity_dist * n * Math.sin(r), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function WO(t) {
  var e, n, r, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), n = Math.sin(i), r = Math.cos(i), a = yi(r * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.atan2(t.x * n, e * this.cos_p14 * r - t.y * this.sin_p14 * n), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var HO = ["gnom"];
const zO = {
  init: BO,
  forward: qO,
  inverse: WO,
  names: HO
};
function YO(t, e) {
  var n = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(e) - n) < 1e-6)
    return e < 0 ? -1 * W : W;
  for (var r = Math.asin(0.5 * e), i, s, a, o, l = 0; l < 30; l++)
    if (s = Math.sin(r), a = Math.cos(r), o = t * s, i = Math.pow(1 - o * o, 2) / (2 * a) * (e / (1 - t * t) - s / (1 - o * o) + 0.5 / t * Math.log((1 - o) / (1 + o))), r += i, Math.abs(i) <= 1e-10)
      return r;
  return NaN;
}
function XO() {
  this.sphere || (this.k0 = yr(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function KO(t) {
  var e = t.x, n = t.y, r, i, s = se(e - this.long0);
  if (this.sphere)
    r = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(n) / Math.cos(this.lat_ts);
  else {
    var a = fi(this.e, Math.sin(n));
    r = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = r, t.y = i, t;
}
function ZO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), n = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (n = YO(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = n, t;
}
var JO = ["cea"];
const QO = {
  init: XO,
  forward: KO,
  inverse: ZO,
  names: JO
};
function eM() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function tM(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = Ks(n - this.lat0);
  return t.x = this.x0 + this.a * r * this.rc, t.y = this.y0 + this.a * i, t;
}
function nM(t) {
  var e = t.x, n = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = Ks(this.lat0 + (n - this.y0) / this.a), t;
}
var rM = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const iM = {
  init: eM,
  forward: tM,
  inverse: nM,
  names: rM
};
var cm = 20;
function sM() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = oo(this.es), this.e1 = lo(this.es), this.e2 = uo(this.es), this.e3 = co(this.es), this.ml0 = this.a * Xt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function aM(t) {
  var e = t.x, n = t.y, r, i, s, a = se(e - this.long0);
  if (s = a * Math.sin(n), this.sphere)
    Math.abs(n) <= ee ? (r = this.a * a, i = -1 * this.a * this.lat0) : (r = this.a * Math.sin(s) / Math.tan(n), i = this.a * (Ks(n - this.lat0) + (1 - Math.cos(s)) / Math.tan(n)));
  else if (Math.abs(n) <= ee)
    r = this.a * a, i = -1 * this.ml0;
  else {
    var o = Hs(this.a, this.e, Math.sin(n)) / Math.tan(n);
    r = o * Math.sin(s), i = this.a * Xt(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(s));
  }
  return t.x = r + this.x0, t.y = i + this.y0, t;
}
function oM(t) {
  var e, n, r, i, s, a, o, l, u;
  if (r = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= ee)
      e = se(r / this.a + this.long0), n = 0;
    else {
      a = this.lat0 + i / this.a, o = r * r / this.a / this.a + a * a, l = a;
      var f;
      for (s = cm; s; --s)
        if (f = Math.tan(l), u = -1 * (a * (l * f + 1) - l - 0.5 * (l * l + o) * f) / ((l - a) / f - 1), l += u, Math.abs(u) <= ee) {
          n = l;
          break;
        }
      e = se(this.long0 + Math.asin(r * Math.tan(l) / this.a) / Math.sin(n));
    }
  else if (Math.abs(i + this.ml0) <= ee)
    n = 0, e = se(this.long0 + r / this.a);
  else {
    a = (this.ml0 + i) / this.a, o = r * r / this.a / this.a + a * a, l = a;
    var c, h, d, m, p;
    for (s = cm; s; --s)
      if (p = this.e * Math.sin(l), c = Math.sqrt(1 - p * p) * Math.tan(l), h = this.a * Xt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), m = h / this.a, u = (a * (c * m + 1) - m - 0.5 * c * (m * m + o)) / (this.es * Math.sin(2 * l) * (m * m + o - 2 * a * m) / (4 * c) + (a - m) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= ee) {
        n = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(n), 2)) * Math.tan(n), e = se(this.long0 + Math.asin(r * c / this.a) / Math.sin(n));
  }
  return t.x = e, t.y = n, t;
}
var lM = ["Polyconic", "poly"];
const uM = {
  init: sM,
  forward: aM,
  inverse: oM,
  names: lM
};
function cM() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function fM(t) {
  var e, n = t.x, r = t.y, i = r - this.lat0, s = n - this.long0, a = i / Pa * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, m, p, g = 0, v = 0;
  for (e = 1; e <= 6; e++)
    m = h * f - d * c, p = d * f + h * c, h = m, d = p, g = g + this.B_re[e] * h - this.B_im[e] * d, v = v + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = v * this.a + this.x0, t.y = g * this.a + this.y0, t;
}
function hM(t) {
  var e, n = t.x, r = t.y, i = n - this.x0, s = r - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var m = 0; m < this.iterations; m++) {
    var p = h, g = d, v, y, E = a, w = o;
    for (e = 2; e <= 6; e++)
      v = p * h - g * d, y = g * h + p * d, p = v, g = y, E = E + (e - 1) * (this.B_re[e] * p - this.B_im[e] * g), w = w + (e - 1) * (this.B_im[e] * p + this.B_re[e] * g);
    p = 1, g = 0;
    var S = this.B_re[1], P = this.B_im[1];
    for (e = 2; e <= 6; e++)
      v = p * h - g * d, y = g * h + p * d, p = v, g = y, S = S + e * (this.B_re[e] * p - this.B_im[e] * g), P = P + e * (this.B_im[e] * p + this.B_re[e] * g);
    var k = S * S + P * P;
    h = (E * S + w * P) / k, d = (w * S - E * P) / k;
  }
  var C = h, T = d, N = 1, U = 0;
  for (e = 1; e <= 9; e++)
    N = N * C, U = U + this.D[e] * N;
  var R = this.lat0 + U * Pa * 1e5, re = this.long0 + T;
  return t.x = re, t.y = R, t;
}
var dM = ["New_Zealand_Map_Grid", "nzmg"];
const mM = {
  init: cM,
  forward: fM,
  inverse: hM,
  names: dM
};
function pM() {
}
function gM(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = this.x0 + this.a * r, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + n / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function yM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), n = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = n, t;
}
var vM = ["Miller_Cylindrical", "mill"];
const _M = {
  init: pM,
  forward: gM,
  inverse: yM,
  names: vM
};
var bM = 20;
function EM() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = qy(this.es);
}
function wM(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = bM; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < ee)
          break;
      }
    e = this.a * this.C_x * r * (this.m + Math.cos(i)), n = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    n = this.a * $u(i, l, u, this.en), e = this.a * r * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = n, t;
}
function xM(t) {
  var e, n, r, i;
  return t.x -= this.x0, r = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, r = r / (this.C_x * (this.m + Math.cos(e))), this.m ? e = yi((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = yi(Math.sin(e) / this.n)), r = se(r + this.long0), e = Ks(e)) : (e = Wy(t.y / this.a, this.es, this.en), i = Math.abs(e), i < W ? (i = Math.sin(e), n = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), r = se(n)) : i - ee < W && (r = this.long0)), t.x = r, t.y = e, t;
}
var SM = ["Sinusoidal", "sinu"];
const OM = {
  init: EM,
  forward: wM,
  inverse: xM,
  names: SM
};
function MM() {
}
function TM(t) {
  for (var e = t.x, n = t.y, r = se(e - this.long0), i = n, s = Math.PI * Math.sin(n); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < ee)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(n) < ee && (r = 0);
  var o = 0.900316316158 * this.a * r * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function NM(t) {
  var e, n;
  t.x -= this.x0, t.y -= this.y0, n = t.y / (1.4142135623731 * this.a), Math.abs(n) > 0.999999999999 && (n = 0.999999999999), e = Math.asin(n);
  var r = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  r < -Math.PI && (r = -Math.PI), r > Math.PI && (r = Math.PI), n = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(n) > 1 && (n = 1);
  var i = Math.asin(n);
  return t.x = r, t.y = i, t;
}
var CM = ["Mollweide", "moll"];
const LM = {
  init: MM,
  forward: TM,
  inverse: NM,
  names: CM
};
function PM() {
  Math.abs(this.lat1 + this.lat2) < ee || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = oo(this.es), this.e1 = lo(this.es), this.e2 = uo(this.es), this.e3 = co(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = yr(this.e, this.sinphi, this.cosphi), this.ml1 = Xt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < ee ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = yr(this.e, this.sinphi, this.cosphi), this.ml2 = Xt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Xt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function AM(t) {
  var e = t.x, n = t.y, r;
  if (this.sphere)
    r = this.a * (this.g - n);
  else {
    var i = Xt(this.e0, this.e1, this.e2, this.e3, n);
    r = this.a * (this.g - i);
  }
  var s = this.ns * se(e - this.long0), a = this.x0 + r * Math.sin(s), o = this.y0 + this.rh - r * Math.cos(s);
  return t.x = a, t.y = o, t;
}
function kM(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, n, r, i;
  this.ns >= 0 ? (n = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (n = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (n !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), r = Ks(this.g - n / this.a), t.x = i, t.y = r, t;
  var a = this.g - n / this.a;
  return r = Hl(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = r, t;
}
var DM = ["Equidistant_Conic", "eqdc"];
const IM = {
  init: PM,
  forward: AM,
  inverse: kM,
  names: DM
};
function RM() {
  this.R = this.a;
}
function $M(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s;
  Math.abs(n) <= ee && (i = this.x0 + this.R * r, s = this.y0);
  var a = yi(2 * Math.abs(n / Math.PI));
  (Math.abs(r) <= ee || Math.abs(Math.abs(n) - W) <= ee) && (i = this.x0, n >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / r - r / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), m = d * d, p = Math.PI * this.R * (o * (c - m) + Math.sqrt(l * (c - m) * (c - m) - (m + l) * (h - m))) / (m + l);
  r < 0 && (p = -p), i = this.x0 + p;
  var g = l + c;
  return p = Math.PI * this.R * (d * g - o * Math.sqrt((m + l) * (l + 1) - g * g)) / (m + l), n >= 0 ? s = this.y0 + p : s = this.y0 - p, t.x = i, t.y = s, t;
}
function FM(t) {
  var e, n, r, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, r = t.x / c, i = t.y / c, s = r * r + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + r * r, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? n = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : n = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(r) < ee ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (r * r - i * i) + s * s)) / 2 / r), t.x = e, t.y = n, t;
}
var VM = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const jM = {
  init: RM,
  forward: $M,
  inverse: FM,
  names: VM
};
function GM() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function UM(t) {
  var e = t.x, n = t.y, r = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, m, p, g, v, y, E, w, S, P, k, C, T, N, U, R;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= ee ? (t.x = this.x0 + this.a * (W - n) * Math.sin(s), t.y = this.y0 - this.a * (W - n) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= ee ? (t.x = this.x0 + this.a * (W + n) * Math.sin(s), t.y = this.y0 + this.a * (W + n) * Math.cos(s), t) : (k = this.sin_p12 * r + this.cos_p12 * i * Math.cos(s), S = Math.acos(k), P = S ? S / Math.sin(S) : 1, t.x = this.x0 + this.a * P * i * Math.sin(s), t.y = this.y0 + this.a * P * (this.cos_p12 * r - this.sin_p12 * i * Math.cos(s)), t) : (a = oo(this.es), o = lo(this.es), l = uo(this.es), u = co(this.es), Math.abs(this.sin_p12 - 1) <= ee ? (f = this.a * Xt(a, o, l, u, W), c = this.a * Xt(a, o, l, u, n), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= ee ? (f = this.a * Xt(a, o, l, u, W), c = this.a * Xt(a, o, l, u, n), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = r / i, d = Hs(this.a, this.e, this.sin_p12), m = Hs(this.a, this.e, r), p = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (m * i)), g = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(p) - this.sin_p12 * Math.cos(s)), g === 0 ? C = Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : Math.abs(Math.abs(g) - Math.PI) <= ee ? C = -Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : C = Math.asin(Math.sin(s) * Math.cos(p) / Math.sin(g)), v = this.e * this.sin_p12 / Math.sqrt(1 - this.es), y = this.e * this.cos_p12 * Math.cos(g) / Math.sqrt(1 - this.es), E = v * y, w = y * y, T = C * C, N = T * C, U = N * C, R = U * C, S = d * C * (1 - T * w * (1 - w) / 6 + N / 8 * E * (1 - 2 * w) + U / 120 * (w * (4 - 7 * w) - 3 * v * v * (1 - 7 * w)) - R / 48 * E), t.x = this.x0 + S * Math.sin(g), t.y = this.y0 + S * Math.cos(g), t));
}
function BM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a, o, l, u, f, c, h, d, m, p, g, v, y, E, w, S, P, k, C;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * W * this.a ? void 0 : (n = e / this.a, r = Math.sin(n), i = Math.cos(n), s = this.long0, Math.abs(e) <= ee ? a = this.lat0 : (a = yi(i * this.sin_p12 + t.y * r * this.cos_p12 / e), o = Math.abs(this.lat0) - W, Math.abs(o) <= ee ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p12 * i - t.y * this.sin_p12 * r))), t.x = s, t.y = a, t)) : (l = oo(this.es), u = lo(this.es), f = uo(this.es), c = co(this.es), Math.abs(this.sin_p12 - 1) <= ee ? (h = this.a * Xt(l, u, f, c, W), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = Hl(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= ee ? (h = this.a * Xt(l, u, f, c, W), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = Hl(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), g = Math.atan2(t.x, t.y), m = Hs(this.a, this.e, this.sin_p12), v = Math.cos(g), y = this.e * this.cos_p12 * v, E = -y * y / (1 - this.es), w = 3 * this.es * (1 - E) * this.sin_p12 * this.cos_p12 * v / (1 - this.es), S = e / m, P = S - E * (1 + E) * Math.pow(S, 3) / 6 - w * (1 + 3 * E) * Math.pow(S, 4) / 24, k = 1 - E * P * P / 2 - S * P * P * P / 6, p = Math.asin(this.sin_p12 * Math.cos(P) + this.cos_p12 * Math.sin(P) * v), s = se(this.long0 + Math.asin(Math.sin(g) * Math.sin(P) / Math.cos(p))), C = Math.sin(p), a = Math.atan2((C - this.es * k * this.sin_p12) * Math.tan(p), C * (1 - this.es)), t.x = s, t.y = a, t));
}
var qM = ["Azimuthal_Equidistant", "aeqd"];
const WM = {
  init: GM,
  forward: UM,
  inverse: BM,
  names: qM
};
function HM() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function zM(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, (a > 0 || Math.abs(a) <= ee) && (o = this.a * s * n * Math.sin(r), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function YM(t) {
  var e, n, r, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), n = yi(e / this.a), r = Math.sin(n), i = Math.cos(n), a = this.long0, Math.abs(e) <= ee ? (o = this.lat0, t.x = a, t.y = o, t) : (o = yi(i * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.abs(this.lat0) - W, Math.abs(s) <= ee ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p14 * i - t.y * this.sin_p14 * r)), t.x = a, t.y = o, t));
}
var XM = ["ortho"];
const KM = {
  init: HM,
  forward: zM,
  inverse: YM,
  names: XM
};
var lt = {
  FRONT: 1,
  RIGHT: 2,
  BACK: 3,
  LEFT: 4,
  TOP: 5,
  BOTTOM: 6
}, Be = {
  AREA_0: 1,
  AREA_1: 2,
  AREA_2: 3,
  AREA_3: 4
};
function ZM() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= W - Ue / 2 ? this.face = lt.TOP : this.lat0 <= -(W - Ue / 2) ? this.face = lt.BOTTOM : Math.abs(this.long0) <= Ue ? this.face = lt.FRONT : Math.abs(this.long0) <= W + Ue ? this.face = this.long0 > 0 ? lt.RIGHT : lt.LEFT : this.face = lt.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function JM(t) {
  var e = { x: 0, y: 0 }, n, r, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? n = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : n = t.y, r = t.x, this.face === lt.TOP)
    s = W - n, r >= Ue && r <= W + Ue ? (l.value = Be.AREA_0, i = r - W) : r > W + Ue || r <= -(W + Ue) ? (l.value = Be.AREA_1, i = r > 0 ? r - dt : r + dt) : r > -(W + Ue) && r <= -Ue ? (l.value = Be.AREA_2, i = r + W) : (l.value = Be.AREA_3, i = r);
  else if (this.face === lt.BOTTOM)
    s = W + n, r >= Ue && r <= W + Ue ? (l.value = Be.AREA_0, i = -r + W) : r < Ue && r >= -Ue ? (l.value = Be.AREA_1, i = -r) : r < -Ue && r >= -(W + Ue) ? (l.value = Be.AREA_2, i = -r - W) : (l.value = Be.AREA_3, i = r > 0 ? -r + dt : -r - dt);
  else {
    var u, f, c, h, d, m, p;
    this.face === lt.RIGHT ? r = $s(r, +W) : this.face === lt.BACK ? r = $s(r, +dt) : this.face === lt.LEFT && (r = $s(r, -W)), h = Math.sin(n), d = Math.cos(n), m = Math.sin(r), p = Math.cos(r), u = d * p, f = d * m, c = h, this.face === lt.FRONT ? (s = Math.acos(u), i = Fo(s, c, f, l)) : this.face === lt.RIGHT ? (s = Math.acos(f), i = Fo(s, c, -u, l)) : this.face === lt.BACK ? (s = Math.acos(-u), i = Fo(s, c, -f, l)) : this.face === lt.LEFT ? (s = Math.acos(-f), i = Fo(s, c, u, l)) : (s = i = 0, l.value = Be.AREA_0);
  }
  return o = Math.atan(12 / dt * (i + Math.acos(Math.sin(i) * Math.cos(Ue)) - W)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === Be.AREA_1 ? o += W : l.value === Be.AREA_2 ? o += dt : l.value === Be.AREA_3 && (o += 1.5 * dt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function QM(t) {
  var e = { lam: 0, phi: 0 }, n, r, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, r = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), n = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = Be.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = Be.AREA_1, n -= W) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = Be.AREA_2, n = n < 0 ? n + dt : n - dt) : (c.value = Be.AREA_3, n += W), f = dt / 12 * Math.tan(n), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(n), s = Math.tan(r), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === lt.TOP)
    u = Math.acos(l), e.phi = W - u, c.value === Be.AREA_0 ? e.lam = o + W : c.value === Be.AREA_1 ? e.lam = o < 0 ? o + dt : o - dt : c.value === Be.AREA_2 ? e.lam = o - W : e.lam = o;
  else if (this.face === lt.BOTTOM)
    u = Math.acos(l), e.phi = u - W, c.value === Be.AREA_0 ? e.lam = -o + W : c.value === Be.AREA_1 ? e.lam = -o : c.value === Be.AREA_2 ? e.lam = -o - W : e.lam = o < 0 ? -o - dt : -o + dt;
  else {
    var h, d, m;
    h = l, f = h * h, f >= 1 ? m = 0 : m = Math.sqrt(1 - f) * Math.sin(o), f += m * m, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === Be.AREA_1 ? (f = d, d = -m, m = f) : c.value === Be.AREA_2 ? (d = -d, m = -m) : c.value === Be.AREA_3 && (f = d, d = m, m = -f), this.face === lt.RIGHT ? (f = h, h = -d, d = f) : this.face === lt.BACK ? (h = -h, d = -d) : this.face === lt.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-m) - W, e.lam = Math.atan2(d, h), this.face === lt.RIGHT ? e.lam = $s(e.lam, -W) : this.face === lt.BACK ? e.lam = $s(e.lam, -dt) : this.face === lt.LEFT && (e.lam = $s(e.lam, +W));
  }
  if (this.es !== 0) {
    var p, g, v;
    p = e.phi < 0 ? 1 : 0, g = Math.tan(e.phi), v = this.b / Math.sqrt(g * g + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - v * v) / (this.one_minus_f * v)), p && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function Fo(t, e, n, r) {
  var i;
  return t < ee ? (r.value = Be.AREA_0, i = 0) : (i = Math.atan2(e, n), Math.abs(i) <= Ue ? r.value = Be.AREA_0 : i > Ue && i <= W + Ue ? (r.value = Be.AREA_1, i -= W) : i > W + Ue || i <= -(W + Ue) ? (r.value = Be.AREA_2, i = i >= 0 ? i - dt : i + dt) : (r.value = Be.AREA_3, i += W)), i;
}
function $s(t, e) {
  var n = t + e;
  return n < -dt ? n += Ya : n > +dt && (n -= Ya), n;
}
var e2 = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const t2 = {
  init: ZM,
  forward: JM,
  inverse: QM,
  names: e2
};
var Ef = [
  [1, 22199e-21, -715515e-10, 31103e-10],
  [0.9986, -482243e-9, -24897e-9, -13309e-10],
  [0.9954, -83103e-8, -448605e-10, -986701e-12],
  [0.99, -135364e-8, -59661e-9, 36777e-10],
  [0.9822, -167442e-8, -449547e-11, -572411e-11],
  [0.973, -214868e-8, -903571e-10, 18736e-12],
  [0.96, -305085e-8, -900761e-10, 164917e-11],
  [0.9427, -382792e-8, -653386e-10, -26154e-10],
  [0.9216, -467746e-8, -10457e-8, 481243e-11],
  [0.8962, -536223e-8, -323831e-10, -543432e-11],
  [0.8679, -609363e-8, -113898e-9, 332484e-11],
  [0.835, -698325e-8, -640253e-10, 934959e-12],
  [0.7986, -755338e-8, -500009e-10, 935324e-12],
  [0.7597, -798324e-8, -35971e-9, -227626e-11],
  [0.7186, -851367e-8, -701149e-10, -86303e-10],
  [0.6732, -986209e-8, -199569e-9, 191974e-10],
  [0.6213, -0.010418, 883923e-10, 624051e-11],
  [0.5722, -906601e-8, 182e-6, 624051e-11],
  [0.5322, -677797e-8, 275608e-9, 624051e-11]
], va = [
  [-520417e-23, 0.0124, 121431e-23, -845284e-16],
  [0.062, 0.0124, -126793e-14, 422642e-15],
  [0.124, 0.0124, 507171e-14, -160604e-14],
  [0.186, 0.0123999, -190189e-13, 600152e-14],
  [0.248, 0.0124002, 710039e-13, -224e-10],
  [0.31, 0.0123992, -264997e-12, 835986e-13],
  [0.372, 0.0124029, 988983e-12, -311994e-12],
  [0.434, 0.0123893, -369093e-11, -435621e-12],
  [0.4958, 0.0123198, -102252e-10, -345523e-12],
  [0.5571, 0.0121916, -154081e-10, -582288e-12],
  [0.6176, 0.0119938, -241424e-10, -525327e-12],
  [0.6769, 0.011713, -320223e-10, -516405e-12],
  [0.7346, 0.0113541, -397684e-10, -609052e-12],
  [0.7903, 0.0109107, -489042e-10, -104739e-11],
  [0.8435, 0.0103431, -64615e-9, -140374e-14],
  [0.8936, 969686e-8, -64636e-9, -8547e-9],
  [0.9394, 840947e-8, -192841e-9, -42106e-10],
  [0.9761, 616527e-8, -256e-6, -42106e-10],
  [1, 328947e-8, -319159e-9, -42106e-10]
], Yy = 0.8487, Xy = 1.3523, Ky = lr / 5, n2 = 1 / Ky, Ls = 18, zl = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, r2 = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function i2(t, e, n, r) {
  for (var i = e; r; --r) {
    var s = t(i);
    if (i -= s, Math.abs(s) < n)
      break;
  }
  return i;
}
function s2() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function a2(t) {
  var e = se(t.x - this.long0), n = Math.abs(t.y), r = Math.floor(n * Ky);
  r < 0 ? r = 0 : r >= Ls && (r = Ls - 1), n = lr * (n - n2 * r);
  var i = {
    x: zl(Ef[r], n) * e,
    y: zl(va[r], n)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Yy + this.x0, i.y = i.y * this.a * Xy + this.y0, i;
}
function o2(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * Yy),
    y: Math.abs(t.y - this.y0) / (this.a * Xy)
  };
  if (e.y >= 1)
    e.x /= Ef[Ls][0], e.y = t.y < 0 ? -W : W;
  else {
    var n = Math.floor(e.y * Ls);
    for (n < 0 ? n = 0 : n >= Ls && (n = Ls - 1); ; )
      if (va[n][0] > e.y)
        --n;
      else if (va[n + 1][0] <= e.y)
        ++n;
      else
        break;
    var r = va[n], i = 5 * (e.y - r[0]) / (va[n + 1][0] - r[0]);
    i = i2(function(s) {
      return (zl(r, s) - e.y) / r2(r, s);
    }, i, ee, 100), e.x /= zl(Ef[n], i), e.y = (5 * n + i) * Lt, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var l2 = ["Robinson", "robin"];
const u2 = {
  init: s2,
  forward: a2,
  inverse: o2,
  names: l2
};
function c2() {
  this.name = "geocent";
}
function f2(t) {
  var e = Iy(t, this.es, this.a);
  return e;
}
function h2(t) {
  var e = Ry(t, this.es, this.a, this.b);
  return e;
}
var d2 = ["Geocentric", "geocentric", "geocent", "Geocent"];
const m2 = {
  init: c2,
  forward: f2,
  inverse: h2,
  names: d2
};
var Rt = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, oa = {
  h: { def: 1e5, num: !0 },
  azi: { def: 0, num: !0, degrees: !0 },
  tilt: { def: 0, num: !0, degrees: !0 },
  long0: { def: 0, num: !0 },
  lat0: { def: 0, num: !0 }
};
function p2() {
  if (Object.keys(oa).forEach(function(n) {
    if (typeof this[n] > "u")
      this[n] = oa[n].def;
    else {
      if (oa[n].num && isNaN(this[n]))
        throw new Error("Invalid parameter value, must be numeric " + n + " = " + this[n]);
      oa[n].num && (this[n] = parseFloat(this[n]));
    }
    oa[n].degrees && (this[n] = this[n] * Lt);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - W) < ee ? this.mode = this.lat0 < 0 ? Rt.S_POLE : Rt.N_POLE : Math.abs(this.lat0) < ee ? this.mode = Rt.EQUIT : (this.mode = Rt.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function g2(t) {
  t.x -= this.long0;
  var e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i, s;
  switch (this.mode) {
    case Rt.OBLIQ:
      s = this.sinph0 * e + this.cosph0 * n * r;
      break;
    case Rt.EQUIT:
      s = n * r;
      break;
    case Rt.S_POLE:
      s = -e;
      break;
    case Rt.N_POLE:
      s = e;
      break;
  }
  switch (s = this.pn1 / (this.p - s), i = s * n * Math.sin(t.x), this.mode) {
    case Rt.OBLIQ:
      s *= this.cosph0 * e - this.sinph0 * n * r;
      break;
    case Rt.EQUIT:
      s *= e;
      break;
    case Rt.N_POLE:
      s *= -(n * r);
      break;
    case Rt.S_POLE:
      s *= n * r;
      break;
  }
  var a, o;
  return a = s * this.cg + i * this.sg, o = 1 / (a * this.sw * this.h1 + this.cw), i = (i * this.cg - s * this.sg) * this.cw * o, s = a * o, t.x = i * this.a, t.y = s * this.a, t;
}
function y2(t) {
  t.x /= this.a, t.y /= this.a;
  var e = { x: t.x, y: t.y }, n, r, i;
  i = 1 / (this.pn1 - t.y * this.sw), n = this.pn1 * t.x * i, r = this.pn1 * t.y * this.cw * i, t.x = n * this.cg + r * this.sg, t.y = r * this.cg - n * this.sg;
  var s = Bn(t.x, t.y);
  if (Math.abs(s) < ee)
    e.x = 0, e.y = t.y;
  else {
    var a, o;
    switch (o = 1 - s * s * this.pfact, o = (this.p - Math.sqrt(o)) / (this.pn1 / s + s / this.pn1), a = Math.sqrt(1 - o * o), this.mode) {
      case Rt.OBLIQ:
        e.y = Math.asin(a * this.sinph0 + t.y * o * this.cosph0 / s), t.y = (a - this.sinph0 * Math.sin(e.y)) * s, t.x *= o * this.cosph0;
        break;
      case Rt.EQUIT:
        e.y = Math.asin(t.y * o / s), t.y = a * s, t.x *= o;
        break;
      case Rt.N_POLE:
        e.y = Math.asin(a), t.y = -t.y;
        break;
      case Rt.S_POLE:
        e.y = -Math.asin(a);
        break;
    }
    e.x = Math.atan2(t.x, t.y);
  }
  return t.x = e.x + this.long0, t.y = e.y, t;
}
var v2 = ["Tilted_Perspective", "tpers"];
const _2 = {
  init: p2,
  forward: g2,
  inverse: y2,
  names: v2
};
function b2() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, e = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = e, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function E2(t) {
  var e = t.x, n = t.y, r, i, s, a;
  if (e = e - this.long0, this.shape === "ellipse") {
    n = Math.atan(this.radius_p2 * Math.tan(n));
    var o = this.radius_p / Bn(this.radius_p * Math.cos(n), Math.sin(n));
    if (i = o * Math.cos(e) * Math.cos(n), s = o * Math.sin(e) * Math.cos(n), a = o * Math.sin(n), (this.radius_g - i) * i - s * s - a * a * this.radius_p_inv2 < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    r = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Bn(a, r)), t.y = this.radius_g_1 * Math.atan(a / r)) : (t.x = this.radius_g_1 * Math.atan(s / r), t.y = this.radius_g_1 * Math.atan(a / Bn(s, r)));
  } else
    this.shape === "sphere" && (r = Math.cos(n), i = Math.cos(e) * r, s = Math.sin(e) * r, a = Math.sin(n), r = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Bn(a, r)), t.y = this.radius_g_1 * Math.atan(a / r)) : (t.x = this.radius_g_1 * Math.atan(s / r), t.y = this.radius_g_1 * Math.atan(a / Bn(s, r))));
  return t.x = t.x * this.a, t.y = t.y * this.a, t;
}
function w2(t) {
  var e = -1, n = 0, r = 0, i, s, a, o;
  if (t.x = t.x / this.a, t.y = t.y / this.a, this.shape === "ellipse") {
    this.flip_axis ? (r = Math.tan(t.y / this.radius_g_1), n = Math.tan(t.x / this.radius_g_1) * Bn(1, r)) : (n = Math.tan(t.x / this.radius_g_1), r = Math.tan(t.y / this.radius_g_1) * Bn(1, n));
    var l = r / this.radius_p;
    if (i = n * n + l * l + e * e, s = 2 * this.radius_g * e, a = s * s - 4 * i * this.C, a < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    o = (-s - Math.sqrt(a)) / (2 * i), e = this.radius_g + o * e, n *= o, r *= o, t.x = Math.atan2(n, e), t.y = Math.atan(r * Math.cos(t.x) / e), t.y = Math.atan(this.radius_p_inv2 * Math.tan(t.y));
  } else if (this.shape === "sphere") {
    if (this.flip_axis ? (r = Math.tan(t.y / this.radius_g_1), n = Math.tan(t.x / this.radius_g_1) * Math.sqrt(1 + r * r)) : (n = Math.tan(t.x / this.radius_g_1), r = Math.tan(t.y / this.radius_g_1) * Math.sqrt(1 + n * n)), i = n * n + r * r + e * e, s = 2 * this.radius_g * e, a = s * s - 4 * i * this.C, a < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    o = (-s - Math.sqrt(a)) / (2 * i), e = this.radius_g + o * e, n *= o, r *= o, t.x = Math.atan2(n, e), t.y = Math.atan(r * Math.cos(t.x) / e);
  }
  return t.x = t.x + this.long0, t;
}
var x2 = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const S2 = {
  init: b2,
  forward: E2,
  inverse: w2,
  names: x2
};
function O2(t) {
  t.Proj.projections.add(yl), t.Proj.projections.add(vl), t.Proj.projections.add(PS), t.Proj.projections.add(GS), t.Proj.projections.add(zS), t.Proj.projections.add(JS), t.Proj.projections.add(iO), t.Proj.projections.add(uO), t.Proj.projections.add(mO), t.Proj.projections.add(_O), t.Proj.projections.add(RO), t.Proj.projections.add(UO), t.Proj.projections.add(zO), t.Proj.projections.add(QO), t.Proj.projections.add(iM), t.Proj.projections.add(uM), t.Proj.projections.add(mM), t.Proj.projections.add(_M), t.Proj.projections.add(OM), t.Proj.projections.add(LM), t.Proj.projections.add(IM), t.Proj.projections.add(jM), t.Proj.projections.add(WM), t.Proj.projections.add(KM), t.Proj.projections.add(t2), t.Proj.projections.add(u2), t.Proj.projections.add(m2), t.Proj.projections.add(_2), t.Proj.projections.add(S2);
}
Vt.defaultDatum = "WGS84";
Vt.Proj = fr;
Vt.WGS84 = new Vt.Proj("WGS84");
Vt.Point = Ws;
Vt.toPoint = $y;
Vt.defs = Ht;
Vt.nadgrid = kx;
Vt.transform = Wl;
Vt.mgrs = Xx;
Vt.version = "__VERSION__";
O2(Vt);
function M2() {
  var t, e, n;
  Vt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), Vt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), Vt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), f_(Vt), (t = sl("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = sl("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (n = sl("EPSG:2169")) == null || n.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function T2(t, e, n) {
  const r = he(t);
  class i extends gh {
    constructor(a) {
      super(r, a, e, n);
    }
  }
  return at(i, "def", r), i;
}
const N2 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class gh extends N2 {
  constructor(n, r = {}, i = {}, s) {
    super();
    at(this, "_instance", null);
    at(this, "_connected", !1);
    at(this, "_resolved", !1);
    at(this, "_numberProps", null);
    at(this, "_styles");
    at(this, "_slots");
    this._def = n, this._props = r, this._config = i, this._config = it(
      {
        shadowRoot: !0
      },
      this._config
    ), this._config.shadowRoot ? this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def)) : s && s(this._createVNode(), this._root);
  }
  get _root() {
    return this._config.shadowRoot ? this.shadowRoot : this;
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Dl(() => {
      this._connected || (Id(null, this._root), this._instance = null);
    });
  }
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const s of i)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const n = (i, s = !1) => {
      const { props: a, styles: o } = i;
      let l;
      if (a && !fe(a))
        for (const u in a) {
          const f = a[u];
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = qc(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[yn(u)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((i) => n(i, !0)) : n(this._def);
  }
  _resolveProps(n) {
    const { props: r } = n, i = fe(r) ? r : Object.keys(r || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(yn))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(a) {
          this._setProp(s, a);
        }
      });
  }
  _setAttr(n) {
    let r = this.getAttribute(n);
    const i = yn(n);
    this._numberProps && this._numberProps[i] && (r = qc(r)), this._setProp(i, r, !1);
  }
  _getProp(n) {
    return this._props[n];
  }
  _setProp(n, r, i = !0, s = !0) {
    r !== this._props[n] && (this._props[n] = r, s && this._instance && this._update(), i && (r === !0 ? this.setAttribute(ln(n), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(ln(n), r + "") : r || this.removeAttribute(ln(n))));
  }
  _update() {
    Id(this._createVNode(), this._root);
  }
  _createVNode() {
    const n = ne(this._def, it({}, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.isCE = !0;
      const i = (a, o) => {
        this.dispatchEvent(
          new CustomEvent(a, {
            detail: o
          })
        );
      };
      r.emit = (a, ...o) => {
        i(a, o), ln(a) !== a && i(ln(a), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof gh) {
          r.parent = s._instance, r.provides = s._instance.provides;
          break;
        }
    }), n;
  }
  _applyStyles(n) {
    n && n.forEach((r) => {
      const i = document.createElement("style");
      i.textContent = r, this._root.appendChild(i);
    });
  }
}
var Za = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(Za || {});
const C2 = Za.INFO, L2 = 7e3, P2 = 4e3, Yl = ls(
  "alert-notifications",
  () => {
    const t = Se([]);
    function e(r, i = C2, s) {
      const a = {
        message: r,
        type: i,
        duration: s != null ? s : i === Za.WARNING ? P2 : L2
      };
      t.value.push(a);
    }
    function n(r) {
      t.value.splice(r, 1);
    }
    return {
      notifications: t,
      addNotification: e,
      removeNotification: n
    };
  },
  {}
), A2 = /* @__PURE__ */ he({
  __name: "notification-item",
  props: {
    notification: { type: null, required: !0 }
  },
  emits: ["close"],
  setup(t) {
    const e = t, n = et(!0);
    function r(i, s) {
      setTimeout(() => {
        n.value = !1;
      }, e.notification.duration), s();
    }
    return (i, s) => {
      const a = rh("dompurify-html");
      return A(), je(Du, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: r,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: ci(() => [
          b(n) ? $l((A(), V("div", {
            key: 0,
            class: Ce(["lux-alert", `lux-${e.notification.type}`]),
            role: "alert"
          }, null, 2)), [
            [a, e.notification.message]
          ]) : $("v-if", !0)
        ]),
        _: 1
      });
    };
  }
}), pe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, k2 = /* @__PURE__ */ pe(A2, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/alert-notifications/notification-item.vue"]]), D2 = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, I2 = /* @__PURE__ */ he({
  __name: "alert-notifications",
  setup(t) {
    const e = Yl(), { notifications: n } = He(e);
    function r(i) {
      e.removeNotification(i);
    }
    return (i, s) => (A(), je(ey, { to: "body" }, [
      b(n).length ? (A(), V("div", D2, [
        (A(!0), V(Ve, null, Pn(b(n), (a, o) => (A(), je(k2, {
          key: o,
          notification: a,
          onClose: () => r(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : $("v-if", !0)
    ]));
  }
}), R2 = /* @__PURE__ */ pe(I2, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/alert-notifications/alert-notifications.vue"]]), $2 = { class: "lux-dropdown" }, F2 = { class: "h-full" }, V2 = ["aria-expanded"], j2 = /* @__PURE__ */ L("span", { class: "lux-caret" }, null, -1), G2 = { class: "lux-dropdown-wrapper" }, U2 = ["aria-label", "data-value"], B2 = /* @__PURE__ */ he({
  __name: "dropdown-list",
  props: {
    placeholder: { type: String, required: !0 },
    options: { type: Array, required: !0, default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = et(!1), i = et();
    function s(u) {
      r.value = u === void 0 ? !r.value : u;
    }
    function a(u) {
      u.stopImmediatePropagation(), s();
    }
    function o(u) {
      i.value = u.target.dataset.value, e("change", i.value);
    }
    function l() {
      s(!1);
    }
    return bn(() => document.addEventListener("click", l)), wi(() => document.removeEventListener("click", l)), (u, f) => {
      var c, h;
      return A(), V("div", $2, [
        L("div", F2, [
          L("button", {
            type: "button",
            class: Ce(["lux-btn lux-dropdown-btn", b(r) ? "expanded" : ""]),
            "aria-expanded": b(r),
            "aria-haspopup": "true",
            onClick: a
          }, [
            L("span", null, ue((h = n.placeholder) != null ? h : (c = n.options[0]) == null ? void 0 : c.label), 1),
            j2
          ], 10, V2)
        ]),
        L("div", G2, [
          L("ul", {
            class: Ce(["lux-dropdown-list", b(r) ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (A(!0), V(Ve, null, Pn(n.options, (d) => (A(), V("li", {
              key: d.value,
              class: Ce(t.modelValue === d.value ? "selected" : "")
            }, [
              L("button", {
                class: "lux-dropdown-list-item",
                "aria-label": d.ariaLabel,
                "data-value": d.value,
                onClick: o
              }, ue(d.label), 9, U2)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), Zy = /* @__PURE__ */ pe(B2, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/dropdown-list.vue"]]), Aa = "EPSG:3857", Jy = "EPSG:4326", q2 = "EPSG:2169";
let pc;
const fm = et();
function Ir() {
  function t() {
    return pc;
  }
  function e() {
    return fm.value = pc = new h_({
      view: new d_({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), pc;
  }
  function n(f, c) {
    return f.id === c.id;
  }
  function r(f, c) {
    return f === c;
  }
  function i(f, c) {
    var h;
    return (h = f.layers) == null ? void 0 : h.some((d) => n(d, c));
  }
  function s(f, c) {
    var d;
    const h = (d = f == null ? void 0 : f.layers) == null ? void 0 : d.find((m) => n(m, c));
    return !r(h, c);
  }
  function a(f, c) {
    return !(c === null || !("layers" in f) || !("layers" in c) || typeof c.layers > "u" || typeof f.layers > "u" || f.layers === c.layers);
  }
  function o(f, c) {
    return !("layers" in f) || typeof f.layers > "u" ? [] : c === null || !("layers" in c) ? f.layers.map((h, d) => ({ layer: h, position: d })) : f.layers === c.layers ? [] : f.layers.reduce(
      (h, d, m) => i(c, d) ? h : [
        ...h,
        {
          layer: d,
          position: m
        }
      ],
      []
    );
  }
  function l(f, c) {
    return a(f, c) ? c.layers.reduce(
      (h, d) => i(f, d) ? h : [...h, d],
      []
    ) : [];
  }
  function u(f, c) {
    return a(f, c) ? f.layers.reduce(
      (h, d) => s(c, d) ? [...h, d] : h,
      []
    ) : [];
  }
  return {
    olMap: fm,
    getOlMap: t,
    createMap: e,
    equalsLayer: n,
    hasLayer: i,
    layerHasChanged: s,
    contextHasChanged: a,
    getAddedLayers: o,
    getRemovedLayers: l,
    getMutatedLayers: u
  };
}
const la = /* @__PURE__ */ new Map();
function Xn(t) {
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xn(t);
}
function br(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function W2(t, e) {
  if (Xn(t) !== "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Xn(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Qy(t) {
  var e = W2(t, "string");
  return Xn(e) === "symbol" ? e : String(e);
}
function hm(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Qy(r.key), r);
  }
}
function Er(t, e, n) {
  return e && hm(t.prototype, e), n && hm(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function hi(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function wf(t, e) {
  return wf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, wf(t, e);
}
function Fu(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && wf(t, e);
}
function fo(t, e) {
  if (e && (Xn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hi(t);
}
function vr(t) {
  return vr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vr(t);
}
function xi(t, e, n) {
  return e = Qy(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function H2(t) {
  if (Array.isArray(t))
    return t;
}
function z2(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function dm(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Y2(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return dm(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return dm(t, e);
  }
}
function X2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K2(t) {
  return H2(t) || z2(t) || Y2(t) || X2();
}
function mm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mm(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Z2 = {
  type: "logger",
  log: function(e) {
    this.output("log", e);
  },
  warn: function(e) {
    this.output("warn", e);
  },
  error: function(e) {
    this.output("error", e);
  },
  output: function(e, n) {
    console && console[e] && console[e].apply(console, n);
  }
}, J2 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    br(this, t), this.init(e, n);
  }
  return Er(t, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = n || Z2, this.options = r, this.debug = r.debug;
    }
  }, {
    key: "setDebug",
    value: function(n) {
      this.debug = n;
    }
  }, {
    key: "log",
    value: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return this.forward(r, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return this.forward(r, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return this.forward(r, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(n, r, i, s) {
      return s && !this.debug ? null : (typeof n[0] == "string" && (n[0] = "".concat(i).concat(this.prefix, " ").concat(n[0])), this.logger[r](n));
    }
  }, {
    key: "create",
    value: function(n) {
      return new t(this.logger, pm(pm({}, {
        prefix: "".concat(this.prefix, ":").concat(n, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(n) {
      return n = n || this.options, n.prefix = n.prefix || this.prefix, new t(this.logger, n);
    }
  }]), t;
}(), ur = new J2(), vi = function() {
  function t() {
    br(this, t), this.observers = {};
  }
  return Er(t, [{
    key: "on",
    value: function(n, r) {
      var i = this;
      return n.split(" ").forEach(function(s) {
        i.observers[s] = i.observers[s] || [], i.observers[s].push(r);
      }), this;
    }
  }, {
    key: "off",
    value: function(n, r) {
      if (!!this.observers[n]) {
        if (!r) {
          delete this.observers[n];
          return;
        }
        this.observers[n] = this.observers[n].filter(function(i) {
          return i !== r;
        });
      }
    }
  }, {
    key: "emit",
    value: function(n) {
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
        i[s - 1] = arguments[s];
      if (this.observers[n]) {
        var a = [].concat(this.observers[n]);
        a.forEach(function(l) {
          l.apply(void 0, i);
        });
      }
      if (this.observers["*"]) {
        var o = [].concat(this.observers["*"]);
        o.forEach(function(l) {
          l.apply(l, [n].concat(i));
        });
      }
    }
  }]), t;
}();
function ua() {
  var t, e, n = new Promise(function(r, i) {
    t = r, e = i;
  });
  return n.resolve = t, n.reject = e, n;
}
function gm(t) {
  return t == null ? "" : "" + t;
}
function Q2(t, e, n) {
  t.forEach(function(r) {
    e[r] && (n[r] = e[r]);
  });
}
function yh(t, e, n) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function i() {
    return !t || typeof t == "string";
  }
  for (var s = typeof e != "string" ? [].concat(e) : e.split("."); s.length > 1; ) {
    if (i())
      return {};
    var a = r(s.shift());
    !t[a] && n && (t[a] = new n()), Object.prototype.hasOwnProperty.call(t, a) ? t = t[a] : t = {};
  }
  return i() ? {} : {
    obj: t,
    k: r(s.shift())
  };
}
function ym(t, e, n) {
  var r = yh(t, e, Object), i = r.obj, s = r.k;
  i[s] = n;
}
function eT(t, e, n, r) {
  var i = yh(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], r && (s[a] = s[a].concat(n)), r || s[a].push(n);
}
function Xl(t, e) {
  var n = yh(t, e), r = n.obj, i = n.k;
  if (!!r)
    return r[i];
}
function vm(t, e, n) {
  var r = Xl(t, n);
  return r !== void 0 ? r : Xl(e, n);
}
function ev(t, e, n) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? typeof t[r] == "string" || t[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? n && (t[r] = e[r]) : ev(t[r], e[r], n) : t[r] = e[r]);
  return t;
}
function ps(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var tT = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function nT(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return tT[e];
  }) : t;
}
var Vu = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, rT = [" ", ",", "?", "!", ";"];
function iT(t, e, n) {
  e = e || "", n = n || "";
  var r = rT.filter(function(o) {
    return e.indexOf(o) < 0 && n.indexOf(o) < 0;
  });
  if (r.length === 0)
    return !0;
  var i = new RegExp("(".concat(r.map(function(o) {
    return o === "?" ? "\\?" : o;
  }).join("|"), ")")), s = !i.test(t);
  if (!s) {
    var a = t.indexOf(n);
    a > 0 && !i.test(t.substring(0, a)) && (s = !0);
  }
  return s;
}
function _m(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _m(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _m(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function sT(t) {
  var e = aT();
  return function() {
    var r = vr(t), i;
    if (e) {
      var s = vr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return fo(this, i);
  };
}
function aT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function tv(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!!t) {
    if (t[e])
      return t[e];
    for (var r = e.split(n), i = t, s = 0; s < r.length; ++s) {
      if (!i || typeof i[r[s]] == "string" && s + 1 < r.length)
        return;
      if (i[r[s]] === void 0) {
        for (var a = 2, o = r.slice(s, s + a).join(n), l = i[o]; l === void 0 && r.length > s + a; )
          a++, o = r.slice(s, s + a).join(n), l = i[o];
        if (l === void 0)
          return;
        if (l === null)
          return null;
        if (e.endsWith(o)) {
          if (typeof l == "string")
            return l;
          if (o && typeof l[o] == "string")
            return l[o];
        }
        var u = r.slice(s + a).join(n);
        return u ? tv(l, u, n) : void 0;
      }
      i = i[r[s]];
    }
    return i;
  }
}
var oT = function(t) {
  Fu(n, t);
  var e = sT(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return br(this, n), i = e.call(this), Vu && vi.call(hi(i)), i.data = r || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return Er(n, [{
    key: "addNamespaces",
    value: function(i) {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }
  }, {
    key: "removeNamespaces",
    value: function(i) {
      var s = this.options.ns.indexOf(i);
      s > -1 && this.options.ns.splice(s, 1);
    }
  }, {
    key: "getResource",
    value: function(i, s, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, u = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure, f = [i, s];
      a && typeof a != "string" && (f = f.concat(a)), a && typeof a == "string" && (f = f.concat(l ? a.split(l) : a)), i.indexOf(".") > -1 && (f = i.split("."));
      var c = Xl(this.data, f);
      return c || !u || typeof a != "string" ? c : tv(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = this.options.keySeparator;
      u === void 0 && (u = ".");
      var f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), ym(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
    }
  }, {
    key: "addResources",
    value: function(i, s, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var l in a)
        (typeof a[l] == "string" || Object.prototype.toString.apply(a[l]) === "[object Array]") && this.addResource(i, s, l, a[l], {
          silent: !0
        });
      o.silent || this.emit("added", i, s, a);
    }
  }, {
    key: "addResourceBundle",
    value: function(i, s, a, o, l) {
      var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, f = [i, s];
      i.indexOf(".") > -1 && (f = i.split("."), o = a, a = s, s = f[1]), this.addNamespaces(s);
      var c = Xl(this.data, f) || {};
      o ? ev(c, a, l) : c = Vo(Vo({}, c), a), ym(this.data, f, c), u.silent || this.emit("added", i, s, a);
    }
  }, {
    key: "removeResourceBundle",
    value: function(i, s) {
      this.hasResourceBundle(i, s) && delete this.data[i][s], this.removeNamespaces(s), this.emit("removed", i, s);
    }
  }, {
    key: "hasResourceBundle",
    value: function(i, s) {
      return this.getResource(i, s) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(i, s) {
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Vo(Vo({}, {}), this.getResource(i, s)) : this.getResource(i, s);
    }
  }, {
    key: "getDataByLanguage",
    value: function(i) {
      return this.data[i];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(i) {
      var s = this.getDataByLanguage(i), a = s && Object.keys(s) || [];
      return !!a.find(function(o) {
        return s[o] && Object.keys(s[o]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), n;
}(vi), nv = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, n, r, i, s) {
    var a = this;
    return e.forEach(function(o) {
      a.processors[o] && (n = a.processors[o].process(n, r, i, s));
    }), n;
  }
};
function bm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bm(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function lT(t) {
  var e = uT();
  return function() {
    var r = vr(t), i;
    if (e) {
      var s = vr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return fo(this, i);
  };
}
function uT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Em = {}, wm = function(t) {
  Fu(n, t);
  var e = lT(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return br(this, n), i = e.call(this), Vu && vi.call(hi(i)), Q2(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, hi(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = ur.create("translator"), i;
  }
  return Er(n, [{
    key: "changeLanguage",
    value: function(i) {
      i && (this.language = i);
    }
  }, {
    key: "exists",
    value: function(i) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (i == null)
        return !1;
      var a = this.resolve(i, s);
      return a && a.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(i, s) {
      var a = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
      a === void 0 && (a = ":");
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !iT(i, a, o);
      if (u && !f) {
        var c = i.match(this.interpolator.nestingRegexp);
        if (c && c.length > 0)
          return {
            key: i,
            namespaces: l
          };
        var h = i.split(a);
        (a !== o || a === o && this.options.ns.indexOf(h[0]) > -1) && (l = h.shift()), i = h.join(o);
      }
      return typeof l == "string" && (l = [l]), {
        key: i,
        namespaces: l
      };
    }
  }, {
    key: "translate",
    value: function(i, s, a) {
      var o = this;
      if (Xn(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), s || (s = {}), i == null)
        return "";
      Array.isArray(i) || (i = [String(i)]);
      var l = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, f = this.extractFromKey(i[i.length - 1], s), c = f.key, h = f.namespaces, d = h[h.length - 1], m = s.lng || this.language, p = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (m && m.toLowerCase() === "cimode") {
        if (p) {
          var g = s.nsSeparator || this.options.nsSeparator;
          return l ? {
            res: "".concat(d).concat(g).concat(c),
            usedKey: c,
            exactUsedKey: c,
            usedLng: m,
            usedNS: d
          } : "".concat(d).concat(g).concat(c);
        }
        return l ? {
          res: c,
          usedKey: c,
          exactUsedKey: c,
          usedLng: m,
          usedNS: d
        } : c;
      }
      var v = this.resolve(i, s), y = v && v.res, E = v && v.usedKey || c, w = v && v.exactUsedKey || c, S = Object.prototype.toString.apply(y), P = ["[object Number]", "[object Function]", "[object RegExp]"], k = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, T = typeof y != "string" && typeof y != "boolean" && typeof y != "number";
      if (C && y && T && P.indexOf(S) < 0 && !(typeof k == "string" && S === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var N = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, y, Bt(Bt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (v.res = N, v) : N;
        }
        if (u) {
          var U = S === "[object Array]", R = U ? [] : {}, re = U ? w : E;
          for (var M in y)
            if (Object.prototype.hasOwnProperty.call(y, M)) {
              var j = "".concat(re).concat(u).concat(M);
              R[M] = this.translate(j, Bt(Bt({}, s), {
                joinArrays: !1,
                ns: h
              })), R[M] === j && (R[M] = y[M]);
            }
          y = R;
        }
      } else if (C && typeof k == "string" && S === "[object Array]")
        y = y.join(k), y && (y = this.extendTranslation(y, i, s, a));
      else {
        var Z = !1, J = !1, ae = s.count !== void 0 && typeof s.count != "string", _e = n.hasDefaultValue(s), Qt = ae ? this.pluralResolver.getSuffix(m, s.count, s) : "", tt = s["defaultValue".concat(Qt)] || s.defaultValue;
        !this.isValidLookup(y) && _e && (Z = !0, y = tt), this.isValidLookup(y) || (J = !0, y = c);
        var Ae = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, cn = Ae && J ? void 0 : y, Xe = _e && tt !== y && this.options.updateMissing;
        if (J || Z || Xe) {
          if (this.logger.log(Xe ? "updateKey" : "missingKey", m, d, c, Xe ? tt : y), u) {
            var Mi = this.resolve(c, Bt(Bt({}, s), {}, {
              keySeparator: !1
            }));
            Mi && Mi.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var ze = [], pt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && pt && pt[0])
            for (var En = 0; En < pt.length; En++)
              ze.push(pt[En]);
          else
            this.options.saveMissingTo === "all" ? ze = this.languageUtils.toResolveHierarchy(s.lng || this.language) : ze.push(s.lng || this.language);
          var Wr = function(fn, Qn, _) {
            var x = _e && _ !== y ? _ : cn;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(fn, d, Qn, x, Xe, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(fn, d, Qn, x, Xe, s), o.emit("missingKey", fn, d, Qn, y);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && ae ? ze.forEach(function(en) {
            o.pluralResolver.getSuffixes(en, s).forEach(function(fn) {
              Wr([en], c + fn, s["defaultValue".concat(fn)] || tt);
            });
          }) : Wr(ze, c, tt));
        }
        y = this.extendTranslation(y, i, s, v, a), J && y === c && this.options.appendNamespaceToMissingKey && (y = "".concat(d, ":").concat(c)), (J || Z) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? y = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(d, ":").concat(c) : c, Z ? y : void 0) : y = this.options.parseMissingKeyHandler(y));
      }
      return l ? (v.res = y, v) : y;
    }
  }, {
    key: "extendTranslation",
    value: function(i, s, a, o, l) {
      var u = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        i = this.i18nFormat.parse(i, Bt(Bt({}, this.options.interpolation.defaultVariables), a), o.usedLng, o.usedNS, o.usedKey, {
          resolved: o
        });
      else if (!a.skipInterpolation) {
        a.interpolation && this.interpolator.init(Bt(Bt({}, a), {
          interpolation: Bt(Bt({}, this.options.interpolation), a.interpolation)
        }));
        var f = typeof i == "string" && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), c;
        if (f) {
          var h = i.match(this.interpolator.nestingRegexp);
          c = h && h.length;
        }
        var d = a.replace && typeof a.replace != "string" ? a.replace : a;
        if (this.options.interpolation.defaultVariables && (d = Bt(Bt({}, this.options.interpolation.defaultVariables), d)), i = this.interpolator.interpolate(i, d, a.lng || this.language, a), f) {
          var m = i.match(this.interpolator.nestingRegexp), p = m && m.length;
          c < p && (a.nest = !1);
        }
        a.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var y = arguments.length, E = new Array(y), w = 0; w < y; w++)
            E[w] = arguments[w];
          return l && l[0] === E[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(E[0], " in key: ").concat(s[0])), null) : u.translate.apply(u, E.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var g = a.postProcess || this.options.postProcess, v = typeof g == "string" ? [g] : g;
      return i != null && v && v.length && a.applyPostProcessor !== !1 && (i = nv.handle(v, i, s, this.options && this.options.postProcessPassResolved ? Bt({
        i18nResolved: o
      }, a) : a, this)), i;
    }
  }, {
    key: "resolve",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, l, u, f, c;
      return typeof i == "string" && (i = [i]), i.forEach(function(h) {
        if (!s.isValidLookup(o)) {
          var d = s.extractFromKey(h, a), m = d.key;
          l = m;
          var p = d.namespaces;
          s.options.fallbackNS && (p = p.concat(s.options.fallbackNS));
          var g = a.count !== void 0 && typeof a.count != "string", v = g && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), y = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", E = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          p.forEach(function(w) {
            s.isValidLookup(o) || (c = w, !Em["".concat(E[0], "-").concat(w)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (Em["".concat(E[0], "-").concat(w)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(E.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach(function(S) {
              if (!s.isValidLookup(o)) {
                f = S;
                var P = [m];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(P, m, S, w, a);
                else {
                  var k;
                  g && (k = s.pluralResolver.getSuffix(S, a.count, a));
                  var C = "".concat(s.options.pluralSeparator, "zero");
                  if (g && (P.push(m + k), v && P.push(m + C)), y) {
                    var T = "".concat(m).concat(s.options.contextSeparator).concat(a.context);
                    P.push(T), g && (P.push(T + k), v && P.push(T + C));
                  }
                }
                for (var N; N = P.pop(); )
                  s.isValidLookup(o) || (u = N, o = s.getResource(S, w, N, a));
              }
            }));
          });
        }
      }), {
        res: o,
        usedKey: l,
        exactUsedKey: u,
        usedLng: f,
        usedNS: c
      };
    }
  }, {
    key: "isValidLookup",
    value: function(i) {
      return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "");
    }
  }, {
    key: "getResource",
    value: function(i, s, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(i, s, a, o) : this.resourceStore.getResource(i, s, a, o);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(i) {
      var s = "defaultValue";
      for (var a in i)
        if (Object.prototype.hasOwnProperty.call(i, a) && s === a.substring(0, s.length) && i[a] !== void 0)
          return !0;
      return !1;
    }
  }]), n;
}(vi);
function gc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var xm = function() {
  function t(e) {
    br(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ur.create("languageUtils");
  }
  return Er(t, [{
    key: "getScriptPartFromCode",
    value: function(n) {
      if (!n || n.indexOf("-") < 0)
        return null;
      var r = n.split("-");
      return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(n) {
      if (!n || n.indexOf("-") < 0)
        return n;
      var r = n.split("-");
      return this.formatLanguageCode(r[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(n) {
      if (typeof n == "string" && n.indexOf("-") > -1) {
        var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], i = n.split("-");
        return this.options.lowerCaseLng ? i = i.map(function(s) {
          return s.toLowerCase();
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = gc(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = gc(i[1].toLowerCase())), r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = gc(i[2].toLowerCase()))), i.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
    }
  }, {
    key: "isSupportedCode",
    value: function(n) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (n = this.getLanguagePartFromCode(n)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function(n) {
      var r = this;
      if (!n)
        return null;
      var i;
      return n.forEach(function(s) {
        if (!i) {
          var a = r.formatLanguageCode(s);
          (!r.options.supportedLngs || r.isSupportedCode(a)) && (i = a);
        }
      }), !i && this.options.supportedLngs && n.forEach(function(s) {
        if (!i) {
          var a = r.getLanguagePartFromCode(s);
          if (r.isSupportedCode(a))
            return i = a;
          i = r.options.supportedLngs.find(function(o) {
            if (o.indexOf(a) === 0)
              return o;
          });
        }
      }), i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]), i;
    }
  }, {
    key: "getFallbackCodes",
    value: function(n, r) {
      if (!n)
        return [];
      if (typeof n == "function" && (n = n(r)), typeof n == "string" && (n = [n]), Object.prototype.toString.apply(n) === "[object Array]")
        return n;
      if (!r)
        return n.default || [];
      var i = n[r];
      return i || (i = n[this.getScriptPartFromCode(r)]), i || (i = n[this.formatLanguageCode(r)]), i || (i = n[this.getLanguagePartFromCode(r)]), i || (i = n.default), i || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(n, r) {
      var i = this, s = this.getFallbackCodes(r || this.options.fallbackLng || [], n), a = [], o = function(u) {
        !u || (i.isSupportedCode(u) ? a.push(u) : i.logger.warn("rejecting language code not found in supportedLngs: ".concat(u)));
      };
      return typeof n == "string" && n.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(n)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(n)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(n))) : typeof n == "string" && o(this.formatLanguageCode(n)), s.forEach(function(l) {
        a.indexOf(l) < 0 && o(i.formatLanguageCode(l));
      }), a;
    }
  }]), t;
}(), cT = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], fT = {
  1: function(e) {
    return Number(e > 1);
  },
  2: function(e) {
    return Number(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
  },
  5: function(e) {
    return Number(e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
  },
  6: function(e) {
    return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2);
  },
  7: function(e) {
    return Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
  },
  8: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3);
  },
  9: function(e) {
    return Number(e >= 2);
  },
  10: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
  },
  11: function(e) {
    return Number(e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3);
  },
  12: function(e) {
    return Number(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return Number(e !== 0);
  },
  14: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3);
  },
  15: function(e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
  },
  16: function(e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2);
  },
  17: function(e) {
    return Number(e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1);
  },
  18: function(e) {
    return Number(e == 0 ? 0 : e == 1 ? 1 : 2);
  },
  19: function(e) {
    return Number(e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
  },
  20: function(e) {
    return Number(e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2);
  },
  21: function(e) {
    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
  },
  22: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
  }
}, hT = ["v1", "v2", "v3"], Sm = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function dT() {
  var t = {};
  return cT.forEach(function(e) {
    e.lngs.forEach(function(n) {
      t[n] = {
        numbers: e.nr,
        plurals: fT[e.fc]
      };
    });
  }), t;
}
var mT = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    br(this, t), this.languageUtils = e, this.options = n, this.logger = ur.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = dT();
  }
  return Er(t, [{
    key: "addRule",
    value: function(n, r) {
      this.rules[n] = r;
    }
  }, {
    key: "getRule",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(n, {
            type: r.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)];
    }
  }, {
    key: "needsPlural",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(n, r);
      return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(n, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(n, i).map(function(s) {
        return "".concat(r).concat(s);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(n, i);
      return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort(function(a, o) {
        return Sm[a] - Sm[o];
      }).map(function(a) {
        return "".concat(r.options.prepend).concat(a);
      }) : s.numbers.map(function(a) {
        return r.getSuffix(n, a, i);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(n, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = this.getRule(n, i);
      return s ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(s.select(r)) : this.getSuffixRetroCompatible(s, r) : (this.logger.warn("no plural rule found for: ".concat(n)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(n, r) {
      var i = this, s = n.noAbs ? n.plurals(r) : n.plurals(Math.abs(r)), a = n.numbers[s];
      this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
      var o = function() {
        return i.options.prepend && a.toString() ? i.options.prepend + a.toString() : a.toString();
      };
      return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? "_plural_".concat(a.toString()) : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1 ? o() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !hT.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function Om(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function In(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Om(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Om(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var pT = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    br(this, t), this.logger = ur.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(n) {
      return n;
    }, this.init(e);
  }
  return Er(t, [{
    key: "init",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      n.interpolation || (n.interpolation = {
        escapeValue: !0
      });
      var r = n.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : nT, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? ps(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? ps(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? ps(r.nestingPrefix) : r.nestingPrefixEscaped || ps("$t("), this.nestingSuffix = r.nestingSuffix ? ps(r.nestingSuffix) : r.nestingSuffixEscaped || ps(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function() {
      this.options && this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function() {
      var n = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(n, "g");
      var r = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(r, "g");
      var i = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(i, "g");
    }
  }, {
    key: "interpolate",
    value: function(n, r, i, s) {
      var a = this, o, l, u, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c(g) {
        return g.replace(/\$/g, "$$$$");
      }
      var h = function(v) {
        if (v.indexOf(a.formatSeparator) < 0) {
          var y = vm(r, f, v);
          return a.alwaysFormat ? a.format(y, void 0, i, In(In(In({}, s), r), {}, {
            interpolationkey: v
          })) : y;
        }
        var E = v.split(a.formatSeparator), w = E.shift().trim(), S = E.join(a.formatSeparator).trim();
        return a.format(vm(r, f, w), S, i, In(In(In({}, s), r), {}, {
          interpolationkey: w
        }));
      };
      this.resetRegExp();
      var d = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, m = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, p = [{
        regex: this.regexpUnescape,
        safeValue: function(v) {
          return c(v);
        }
      }, {
        regex: this.regexp,
        safeValue: function(v) {
          return a.escapeValue ? c(a.escape(v)) : c(v);
        }
      }];
      return p.forEach(function(g) {
        for (u = 0; o = g.regex.exec(n); ) {
          var v = o[1].trim();
          if (l = h(v), l === void 0)
            if (typeof d == "function") {
              var y = d(n, o, s);
              l = typeof y == "string" ? y : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, v))
              l = "";
            else if (m) {
              l = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(v, " for interpolating ").concat(n)), l = "";
          else
            typeof l != "string" && !a.useRawValueToEscape && (l = gm(l));
          var E = g.safeValue(l);
          if (n = n.replace(o[0], E), m ? (g.regex.lastIndex += l.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, u++, u >= a.maxReplaces)
            break;
        }
      }), n;
    }
  }, {
    key: "nest",
    value: function(n, r) {
      var i = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, l;
      function u(d, m) {
        var p = this.nestingOptionsSeparator;
        if (d.indexOf(p) < 0)
          return d;
        var g = d.split(new RegExp("".concat(p, "[ ]*{"))), v = "{".concat(g[1]);
        d = g[0], v = this.interpolate(v, l);
        var y = v.match(/'/g), E = v.match(/"/g);
        (y && y.length % 2 === 0 && !E || E.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
        try {
          l = JSON.parse(v), m && (l = In(In({}, m), l));
        } catch (w) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(d), w), "".concat(d).concat(p).concat(v);
        }
        return delete l.defaultValue, d;
      }
      for (; a = this.nestingRegexp.exec(n); ) {
        var f = [];
        l = In({}, s), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
        var c = !1;
        if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
          var h = a[1].split(this.formatSeparator).map(function(d) {
            return d.trim();
          });
          a[1] = h.shift(), f = h, c = !0;
        }
        if (o = r(u.call(this, a[1].trim(), l), l), o && a[0] === n && typeof o != "string")
          return o;
        typeof o != "string" && (o = gm(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(n)), o = ""), c && (o = f.reduce(function(d, m) {
          return i.format(d, m, s.lng, In(In({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), n = n.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return n;
    }
  }]), t;
}();
function Mm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mm(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function gT(t) {
  var e = t.toLowerCase().trim(), n = {};
  if (t.indexOf("(") > -1) {
    var r = t.split("(");
    e = r[0].toLowerCase().trim();
    var i = r[1].substring(0, r[1].length - 1);
    if (e === "currency" && i.indexOf(":") < 0)
      n.currency || (n.currency = i.trim());
    else if (e === "relativetime" && i.indexOf(":") < 0)
      n.range || (n.range = i.trim());
    else {
      var s = i.split(";");
      s.forEach(function(a) {
        if (!!a) {
          var o = a.split(":"), l = K2(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
          n[u.trim()] || (n[u.trim()] = c), c === "false" && (n[u.trim()] = !1), c === "true" && (n[u.trim()] = !0), isNaN(c) || (n[u.trim()] = parseInt(c, 10));
        }
      });
    }
  }
  return {
    formatName: e,
    formatOptions: n
  };
}
function gs(t) {
  var e = {};
  return function(r, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = t(i, s), e[a] = o), o(r);
  };
}
var yT = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    br(this, t), this.logger = ur.create("formatter"), this.options = e, this.formats = {
      number: gs(function(n, r) {
        var i = new Intl.NumberFormat(n, Tr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: gs(function(n, r) {
        var i = new Intl.NumberFormat(n, Tr(Tr({}, r), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: gs(function(n, r) {
        var i = new Intl.DateTimeFormat(n, Tr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: gs(function(n, r) {
        var i = new Intl.RelativeTimeFormat(n, Tr({}, r));
        return function(s) {
          return i.format(s, r.range || "day");
        };
      }),
      list: gs(function(n, r) {
        var i = new Intl.ListFormat(n, Tr({}, r));
        return function(s) {
          return i.format(s);
        };
      })
    }, this.init(e);
  }
  return Er(t, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, i = r.interpolation;
      this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(n, r) {
      this.formats[n.toLowerCase().trim()] = r;
    }
  }, {
    key: "addCached",
    value: function(n, r) {
      this.formats[n.toLowerCase().trim()] = gs(r);
    }
  }, {
    key: "format",
    value: function(n, r, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = gT(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var m = u;
          try {
            var p = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = p.locale || p.lng || a.locale || a.lng || i;
            m = s.formats[h](u, g, Tr(Tr(Tr({}, d), a), p));
          } catch (v) {
            s.logger.warn(v);
          }
          return m;
        } else
          s.logger.warn("there was no format function for ".concat(h));
        return u;
      }, n);
      return l;
    }
  }]), t;
}();
function Tm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Tm(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function vT(t) {
  var e = _T();
  return function() {
    var r = vr(t), i;
    if (e) {
      var s = vr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return fo(this, i);
  };
}
function _T() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function bT(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var ET = function(t) {
  Fu(n, t);
  var e = vT(n);
  function n(r, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return br(this, n), a = e.call(this), Vu && vi.call(hi(a)), a.backend = r, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = ur.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return Er(n, [{
    key: "queueLoad",
    value: function(i, s, a, o) {
      var l = this, u = {}, f = {}, c = {}, h = {};
      return i.forEach(function(d) {
        var m = !0;
        s.forEach(function(p) {
          var g = "".concat(d, "|").concat(p);
          !a.reload && l.store.hasResourceBundle(d, p) ? l.state[g] = 2 : l.state[g] < 0 || (l.state[g] === 1 ? f[g] === void 0 && (f[g] = !0) : (l.state[g] = 1, m = !1, f[g] === void 0 && (f[g] = !0), u[g] === void 0 && (u[g] = !0), h[p] === void 0 && (h[p] = !0)));
        }), m || (c[d] = !0);
      }), (Object.keys(u).length || Object.keys(f).length) && this.queue.push({
        pending: f,
        pendingCount: Object.keys(f).length,
        loaded: {},
        errors: [],
        callback: o
      }), {
        toLoad: Object.keys(u),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(c),
        toLoadNamespaces: Object.keys(h)
      };
    }
  }, {
    key: "loaded",
    value: function(i, s, a) {
      var o = i.split("|"), l = o[0], u = o[1];
      s && this.emit("failedLoading", l, u, s), a && this.store.addResourceBundle(l, u, a), this.state[i] = s ? -1 : 2;
      var f = {};
      this.queue.forEach(function(c) {
        eT(c.loaded, [l], u), bT(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
          f[h] || (f[h] = {});
          var d = c.loaded[h];
          d.length && d.forEach(function(m) {
            f[h][m] === void 0 && (f[h][m] = !0);
          });
        }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
      }), this.emit("loaded", f), this.queue = this.queue.filter(function(c) {
        return !c.done;
      });
    }
  }, {
    key: "read",
    value: function(i, s, a) {
      var o = this, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
      if (!i.length)
        return f(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: i,
          ns: s,
          fcName: a,
          tried: l,
          wait: u,
          callback: f
        });
        return;
      }
      this.readingCalls++;
      var c = function(p, g) {
        if (o.readingCalls--, o.waitingReads.length > 0) {
          var v = o.waitingReads.shift();
          o.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (p && g && l < o.maxRetries) {
          setTimeout(function() {
            o.read.call(o, i, s, a, l + 1, u * 2, f);
          }, u);
          return;
        }
        f(p, g);
      }, h = this.backend[a].bind(this.backend);
      if (h.length === 2) {
        try {
          var d = h(i, s);
          d && typeof d.then == "function" ? d.then(function(m) {
            return c(null, m);
          }).catch(c) : c(null, d);
        } catch (m) {
          c(m);
        }
        return;
      }
      return h(i, s, c);
    }
  }, {
    key: "prepareLoading",
    value: function(i, s) {
      var a = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), l && l();
      typeof i == "string" && (i = this.languageUtils.toResolveHierarchy(i)), typeof s == "string" && (s = [s]);
      var u = this.queueLoad(i, s, o, l);
      if (!u.toLoad.length)
        return u.pending.length || l(), null;
      u.toLoad.forEach(function(f) {
        a.loadOne(f);
      });
    }
  }, {
    key: "load",
    value: function(i, s, a) {
      this.prepareLoading(i, s, {}, a);
    }
  }, {
    key: "reload",
    value: function(i, s, a) {
      this.prepareLoading(i, s, {
        reload: !0
      }, a);
    }
  }, {
    key: "loadOne",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = i.split("|"), l = o[0], u = o[1];
      this.read(l, u, "read", void 0, void 0, function(f, c) {
        f && s.logger.warn("".concat(a, "loading namespace ").concat(u, " for language ").concat(l, " failed"), f), !f && c && s.logger.log("".concat(a, "loaded namespace ").concat(u, " for language ").concat(l), c), s.loaded(i, f, c);
      });
    }
  }, {
    key: "saveMissing",
    value: function(i, s, a, o, l) {
      var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s)) {
        this.logger.warn('did not save key "'.concat(a, '" as the namespace "').concat(s, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (!(a == null || a === "")) {
        if (this.backend && this.backend.create) {
          var c = Nm(Nm({}, u), {}, {
            isUpdate: l
          }), h = this.backend.create.bind(this.backend);
          if (h.length < 6)
            try {
              var d;
              h.length === 5 ? d = h(i, s, a, o, c) : d = h(i, s, a, o), d && typeof d.then == "function" ? d.then(function(m) {
                return f(null, m);
              }).catch(f) : f(null, d);
            } catch (m) {
              f(m);
            }
          else
            h(i, s, a, o, f, c);
        }
        !i || !i[0] || this.store.addResource(i[0], s, a, o);
      }
    }
  }]), n;
}(vi);
function Cm() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(e) {
      var n = {};
      if (Xn(e[1]) === "object" && (n = e[1]), typeof e[1] == "string" && (n.defaultValue = e[1]), typeof e[2] == "string" && (n.tDescription = e[2]), Xn(e[2]) === "object" || Xn(e[3]) === "object") {
        var r = e[3] || e[2];
        Object.keys(r).forEach(function(i) {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: function(e, n, r, i) {
        return e;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Lm(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function Pm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pm(Object(n), !0).forEach(function(r) {
      xi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function wT(t) {
  var e = xT();
  return function() {
    var r = vr(t), i;
    if (e) {
      var s = vr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return fo(this, i);
  };
}
function xT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jo() {
}
function ST(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var Kl = function(t) {
  Fu(n, t);
  var e = wT(n);
  function n() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (br(this, n), r = e.call(this), Vu && vi.call(hi(r)), r.options = Lm(i), r.services = {}, r.logger = ur, r.modules = {
      external: []
    }, ST(hi(r)), s && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, s), fo(r, hi(r));
      setTimeout(function() {
        r.init(i, s);
      }, 0);
    }
    return r;
  }
  return Er(n, [{
    key: "init",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
      typeof s == "function" && (a = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
      var o = Cm();
      this.options = tr(tr(tr({}, o), this.options), Lm(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = tr(tr({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(v) {
        return v ? typeof v == "function" ? new v() : v : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? ur.init(l(this.modules.logger), this.options) : ur.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = yT);
        var f = new xm(this.options);
        this.store = new oT(this.options.resources, this.options);
        var c = this.services;
        c.logger = ur, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new mT(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new pT(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new ET(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(v) {
          for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
            E[w - 1] = arguments[w];
          i.emit.apply(i, [v].concat(E));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new wm(this.services, this.options), this.translator.on("*", function(v) {
          for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
            E[w - 1] = arguments[w];
          i.emit.apply(i, [v].concat(E));
        }), this.modules.external.forEach(function(v) {
          v.init && v.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = jo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var d = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      d.forEach(function(v) {
        i[v] = function() {
          var y;
          return (y = i.store)[v].apply(y, arguments);
        };
      });
      var m = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      m.forEach(function(v) {
        i[v] = function() {
          var y;
          return (y = i.store)[v].apply(y, arguments), i;
        };
      });
      var p = ua(), g = function() {
        var y = function(w, S) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), p.resolve(S), a(w, S);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return y(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, y);
      };
      return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), p;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jo, o = a, l = typeof i == "string" ? i : this.language;
      if (typeof i == "function" && (o = i), !this.options.resources || this.options.partialBundledLanguages) {
        if (l && l.toLowerCase() === "cimode")
          return o();
        var u = [], f = function(d) {
          if (!!d) {
            var m = s.services.languageUtils.toResolveHierarchy(d);
            m.forEach(function(p) {
              u.indexOf(p) < 0 && u.push(p);
            });
          }
        };
        if (l)
          f(l);
        else {
          var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          c.forEach(function(h) {
            return f(h);
          });
        }
        this.options.preload && this.options.preload.forEach(function(h) {
          return f(h);
        }), this.services.backendConnector.load(u, this.options.ns, function(h) {
          !h && !s.resolvedLanguage && s.language && s.setResolvedLanguage(s.language), o(h);
        });
      } else
        o(null);
    }
  }, {
    key: "reloadResources",
    value: function(i, s, a) {
      var o = ua();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = jo), this.services.backendConnector.reload(i, s, function(l) {
        o.resolve(), a(l);
      }), o;
    }
  }, {
    key: "use",
    value: function(i) {
      if (!i)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!i.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && nv.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(i) {
      if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1))
        for (var s = 0; s < this.languages.length; s++) {
          var a = this.languages[s];
          if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
            this.resolvedLanguage = a;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(i, s) {
      var a = this;
      this.isLanguageChangingTo = i;
      var o = ua();
      this.emit("languageChanging", i);
      var l = function(h) {
        a.language = h, a.languages = a.services.languageUtils.toResolveHierarchy(h), a.resolvedLanguage = void 0, a.setResolvedLanguage(h);
      }, u = function(h, d) {
        d ? (l(d), a.translator.changeLanguage(d), a.isLanguageChangingTo = void 0, a.emit("languageChanged", d), a.logger.log("languageChanged", d)) : a.isLanguageChangingTo = void 0, o.resolve(function() {
          return a.t.apply(a, arguments);
        }), s && s(h, function() {
          return a.t.apply(a, arguments);
        });
      }, f = function(h) {
        !i && !h && a.services.languageDetector && (h = []);
        var d = typeof h == "string" ? h : a.services.languageUtils.getBestMatchFromCodes(h);
        d && (a.language || l(d), a.translator.language || a.translator.changeLanguage(d), a.services.languageDetector && a.services.languageDetector.cacheUserLanguage && a.services.languageDetector.cacheUserLanguage(d)), a.loadResources(d, function(m) {
          u(m, d);
        });
      };
      return !i && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(i), o;
    }
  }, {
    key: "getFixedT",
    value: function(i, s, a) {
      var o = this, l = function u(f, c) {
        var h;
        if (Xn(c) !== "object") {
          for (var d = arguments.length, m = new Array(d > 2 ? d - 2 : 0), p = 2; p < d; p++)
            m[p - 2] = arguments[p];
          h = o.options.overloadTranslationOptionHandler([f, c].concat(m));
        } else
          h = tr({}, c);
        h.lng = h.lng || u.lng, h.lngs = h.lngs || u.lngs, h.ns = h.ns || u.ns, h.keyPrefix = h.keyPrefix || a || u.keyPrefix;
        var g = o.options.keySeparator || ".", v;
        return h.keyPrefix && Array.isArray(f) ? v = f.map(function(y) {
          return "".concat(h.keyPrefix).concat(g).concat(y);
        }) : v = h.keyPrefix ? "".concat(h.keyPrefix).concat(g).concat(f) : f, o.t(v, h);
      };
      return typeof i == "string" ? l.lng = i : l.lngs = i, l.ns = s, l.keyPrefix = a, l;
    }
  }, {
    key: "t",
    value: function() {
      var i;
      return this.translator && (i = this.translator).translate.apply(i, arguments);
    }
  }, {
    key: "exists",
    value: function() {
      var i;
      return this.translator && (i = this.translator).exists.apply(i, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function(i) {
      this.options.defaultNS = i;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var o = this.resolvedLanguage || this.languages[0], l = this.options ? this.options.fallbackLng : !1, u = this.languages[this.languages.length - 1];
      if (o.toLowerCase() === "cimode")
        return !0;
      var f = function(d, m) {
        var p = s.services.backendConnector.state["".concat(d, "|").concat(m)];
        return p === -1 || p === 2;
      };
      if (a.precheck) {
        var c = a.precheck(this, f);
        if (c !== void 0)
          return c;
      }
      return !!(this.hasResourceBundle(o, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(o, i) && (!l || f(u, i)));
    }
  }, {
    key: "loadNamespaces",
    value: function(i, s) {
      var a = this, o = ua();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(l) {
        a.options.ns.indexOf(l) < 0 && a.options.ns.push(l);
      }), this.loadResources(function(l) {
        o.resolve(), s && s(l);
      }), o) : (s && s(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, s) {
      var a = ua();
      typeof i == "string" && (i = [i]);
      var o = this.options.preload || [], l = i.filter(function(u) {
        return o.indexOf(u) < 0;
      });
      return l.length ? (this.options.preload = o.concat(l), this.loadResources(function(u) {
        a.resolve(), s && s(u);
      }), a) : (s && s(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(i) {
      if (i || (i = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !i)
        return "rtl";
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new xm(Cm());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jo, o = tr(tr(tr({}, this.options), s), {
        isClone: !0
      }), l = new n(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = tr({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new wm(l.services, l.options), l.translator.on("*", function(f) {
        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
          h[d - 1] = arguments[d];
        l.emit.apply(l, [f].concat(h));
      }), l.init(o, a), l.translator.options = l.options, l.translator.backendConnector.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l;
    }
  }, {
    key: "toJSON",
    value: function() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]), n;
}(vi);
xi(Kl, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new Kl(t, e);
});
var ut = Kl.createInstance();
ut.createInstance = Kl.createInstance;
ut.createInstance;
ut.dir;
ut.init;
ut.loadResources;
ut.reloadResources;
ut.use;
ut.changeLanguage;
ut.getFixedT;
ut.t;
ut.exists;
ut.setDefaultNamespace;
ut.hasLoadedNamespace;
ut.loadNamespaces;
ut.loadLanguages;
const OT = "/";
var rv = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(rv || {}), Pr = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(Pr || {}), _l = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(_l || {});
function MT(t, {
  i18next: e,
  rerenderOn: n = ["languageChanged", "loaded", "added", "removed"]
}) {
  const r = e.t.bind(e), i = Se(new Date()), s = () => i.value = new Date(), a = () => i.value;
  n.forEach((f) => {
    var c;
    switch (f) {
      case "added":
      case "removed":
        (c = e.store) == null || c.on(f, s);
        break;
      default:
        e.on(f, s);
        break;
    }
  }), t.component("i18next", TT), t.mixin({
    beforeCreate() {
      var f, c;
      const h = this.$options;
      if (!h.__i18n && !h.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const d = this.$options.name, m = (Math.random() * 10 ** 8 | 0).toString(), p = [d, m].filter((S) => !!S).join("-");
      this.__bundles = [];
      const g = (S) => {
        Object.entries(S).forEach(([P, k]) => {
          e.addResourceBundle(P, p, k, !0, !1), this.__bundles.push([P, p]);
        });
      };
      (f = h.__i18n) == null || f.forEach((S) => {
        g(JSON.parse(S));
      });
      let { lng: v, ns: y, keyPrefix: E } = u(h, g);
      (c = this.__bundles) != null && c.length && (y = [p].concat(y != null ? y : []));
      const w = o(v, y);
      this.__translate = (S, P) => !E || l(S) ? w(S, P) : w(E + "." + S, P);
    },
    unmounted() {
      var f;
      (f = this.__bundles) == null || f.forEach(([c, h]) => e.removeResourceBundle(c, h));
    }
  }), t.config.globalProperties.$t = function(f, c) {
    var h;
    return a(), e.isInitialized ? ((h = this == null ? void 0 : this.__translate) != null ? h : r)(f, c) : f;
  }, t.config.globalProperties.$i18next = new Proxy(e, {
    get(f, c) {
      return a(), Reflect.get(f, c);
    }
  });
  function o(f, c) {
    return f ? e.getFixedT(f, c) : c ? e.getFixedT(null, c) : r;
  }
  function l(f) {
    const c = e.options.nsSeparator;
    return typeof c == "string" && f.includes(c);
  }
  function u(f, c) {
    let h, d, m;
    if (f.i18nOptions) {
      let p, g;
      ({
        lng: h,
        namespaces: g = e.options.defaultNS,
        keyPrefix: m,
        messages: p
      } = f.i18nOptions), p && c(p), d = typeof g == "string" ? [g] : g, d && e.loadNamespaces(d);
    }
    return { lng: h, ns: d, keyPrefix: m };
  }
}
function Ze() {
  const t = Pu();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  const e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
var Am = new RegExp("{\\s*([a-z0-9\\-]+)\\s*}", "gi"), TT = he({
  props: {
    translation: {
      type: String,
      required: !0
    }
  },
  setup(t, { slots: e }) {
    return () => {
      const n = t.translation, r = [];
      let i, s = 0;
      for (; (i = Am.exec(n)) !== null; ) {
        r.push(n.substring(s, i.index));
        const a = e[i[1]];
        a ? r.push(...a()) : r.push(i[0]), s = Am.lastIndex;
      }
      return r.push(n.substring(s)), r;
    };
  }
});
class us extends Error {
}
class NT extends us {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class CT extends us {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class LT extends us {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class _a extends us {
}
class iv extends us {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class Tn extends us {
}
class Xr extends us {
  constructor() {
    super("Zone is an abstract class");
  }
}
const Q = "numeric", Jn = "short", vn = "long", Zl = {
  year: Q,
  month: Q,
  day: Q
}, sv = {
  year: Q,
  month: Jn,
  day: Q
}, PT = {
  year: Q,
  month: Jn,
  day: Q,
  weekday: Jn
}, av = {
  year: Q,
  month: vn,
  day: Q
}, ov = {
  year: Q,
  month: vn,
  day: Q,
  weekday: vn
}, lv = {
  hour: Q,
  minute: Q
}, uv = {
  hour: Q,
  minute: Q,
  second: Q
}, cv = {
  hour: Q,
  minute: Q,
  second: Q,
  timeZoneName: Jn
}, fv = {
  hour: Q,
  minute: Q,
  second: Q,
  timeZoneName: vn
}, hv = {
  hour: Q,
  minute: Q,
  hourCycle: "h23"
}, dv = {
  hour: Q,
  minute: Q,
  second: Q,
  hourCycle: "h23"
}, mv = {
  hour: Q,
  minute: Q,
  second: Q,
  hourCycle: "h23",
  timeZoneName: Jn
}, pv = {
  hour: Q,
  minute: Q,
  second: Q,
  hourCycle: "h23",
  timeZoneName: vn
}, gv = {
  year: Q,
  month: Q,
  day: Q,
  hour: Q,
  minute: Q
}, yv = {
  year: Q,
  month: Q,
  day: Q,
  hour: Q,
  minute: Q,
  second: Q
}, vv = {
  year: Q,
  month: Jn,
  day: Q,
  hour: Q,
  minute: Q
}, _v = {
  year: Q,
  month: Jn,
  day: Q,
  hour: Q,
  minute: Q,
  second: Q
}, AT = {
  year: Q,
  month: Jn,
  day: Q,
  weekday: Jn,
  hour: Q,
  minute: Q
}, bv = {
  year: Q,
  month: vn,
  day: Q,
  hour: Q,
  minute: Q,
  timeZoneName: Jn
}, Ev = {
  year: Q,
  month: vn,
  day: Q,
  hour: Q,
  minute: Q,
  second: Q,
  timeZoneName: Jn
}, wv = {
  year: Q,
  month: vn,
  day: Q,
  weekday: vn,
  hour: Q,
  minute: Q,
  timeZoneName: vn
}, xv = {
  year: Q,
  month: vn,
  day: Q,
  weekday: vn,
  hour: Q,
  minute: Q,
  second: Q,
  timeZoneName: vn
};
class ho {
  get type() {
    throw new Xr();
  }
  get name() {
    throw new Xr();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new Xr();
  }
  offsetName(e, n) {
    throw new Xr();
  }
  formatOffset(e, n) {
    throw new Xr();
  }
  offset(e) {
    throw new Xr();
  }
  equals(e) {
    throw new Xr();
  }
  get isValid() {
    throw new Xr();
  }
}
let yc = null;
class ju extends ho {
  static get instance() {
    return yc === null && (yc = new ju()), yc;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: n, locale: r }) {
    return Ov(e, n, r);
  }
  formatOffset(e, n) {
    return Da(this.offset(e), n);
  }
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  equals(e) {
    return e.type === "system";
  }
  get isValid() {
    return !0;
  }
}
let bl = {};
function kT(t) {
  return bl[t] || (bl[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), bl[t];
}
const DT = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function IT(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, a, o, l, u, f] = r;
  return [a, i, s, o, l, u, f];
}
function RT(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: a } = n[i], o = DT[s];
    s === "era" ? r[o] = a : Pe(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let Go = {};
class Vr extends ho {
  static create(e) {
    return Go[e] || (Go[e] = new Vr(e)), Go[e];
  }
  static resetCache() {
    Go = {}, bl = {};
  }
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = Vr.isValidZone(e);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: n, locale: r }) {
    return Ov(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return Da(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = kT(this.name);
    let [i, s, a, o, l, u, f] = r.formatToParts ? RT(r, n) : IT(r, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = Uu({
      year: i,
      month: s,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: f,
      millisecond: 0
    });
    let d = +n;
    const m = d % 1e3;
    return d -= m >= 0 ? m : 1e3 + m, (h - d) / (60 * 1e3);
  }
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let km = {};
function $T(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = km[n];
  return r || (r = new Intl.ListFormat(t, e), km[n] = r), r;
}
let xf = {};
function Sf(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = xf[n];
  return r || (r = new Intl.DateTimeFormat(t, e), xf[n] = r), r;
}
let Of = {};
function FT(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Of[n];
  return r || (r = new Intl.NumberFormat(t, e), Of[n] = r), r;
}
let Mf = {};
function VT(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = Mf[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Mf[i] = s), s;
}
let ba = null;
function jT() {
  return ba || (ba = new Intl.DateTimeFormat().resolvedOptions().locale, ba);
}
function GT(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = Sf(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      r = Sf(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = r;
    return [i, s, a];
  }
}
function UT(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function BT(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = we.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function qT(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = we.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function Uo(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function WT(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class HT {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = FT(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : _h(e, 3);
      return vt(n, this.padTo);
    }
  }
}
class zT {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Vr.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = Sf(n, s);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((n) => {
      if (n.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: r
        };
      } else
        return n;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class YT {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && Sv() && (this.rtf = VT(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : hN(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
class Qe {
  static fromOpts(e) {
    return Qe.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, n, r, i = !1) {
    const s = e || yt.defaultLocale, a = s || (i ? "en-US" : jT()), o = n || yt.defaultNumberingSystem, l = r || yt.defaultOutputCalendar;
    return new Qe(a, o, l, s);
  }
  static resetCache() {
    ba = null, xf = {}, Of = {}, Mf = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    return Qe.create(e, n, r);
  }
  constructor(e, n, r, i) {
    const [s, a, o] = GT(e);
    this.locale = s, this.numberingSystem = n || a || null, this.outputCalendar = r || o || null, this.intl = UT(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = WT(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Qe.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1) {
    return Uo(this, e, Nv, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = BT((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return Uo(this, e, Pv, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = qT(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Uo(
      this,
      void 0,
      () => Av,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [we.utc(2016, 11, 13, 9), we.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Uo(this, e, kv, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [we.utc(-40, 1, 1), we.utc(2017, 1, 1)].map(
        (r) => this.extract(r, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, r) {
    const i = this.dtFormatter(e, n), s = i.formatToParts(), a = s.find((o) => o.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new HT(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new zT(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new YT(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return $T(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let vc = null;
class Kt extends ho {
  static get utcInstance() {
    return vc === null && (vc = new Kt(0)), vc;
  }
  static instance(e) {
    return e === 0 ? Kt.utcInstance : new Kt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Kt(Bu(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Da(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Da(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return Da(this.fixed, n);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class XT extends ho {
  constructor(e) {
    super(), this.zoneName = e;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function si(t, e) {
  if (Pe(t) || t === null)
    return e;
  if (t instanceof ho)
    return t;
  if (KT(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? ju.instance : n === "utc" || n === "gmt" ? Kt.utcInstance : Kt.parseSpecifier(n) || Vr.create(t);
  } else
    return Qi(t) ? Kt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new XT(t);
}
let Dm = () => Date.now(), Im = "system", Rm = null, $m = null, Fm = null, Vm = 60, jm;
class yt {
  static get now() {
    return Dm;
  }
  static set now(e) {
    Dm = e;
  }
  static set defaultZone(e) {
    Im = e;
  }
  static get defaultZone() {
    return si(Im, ju.instance);
  }
  static get defaultLocale() {
    return Rm;
  }
  static set defaultLocale(e) {
    Rm = e;
  }
  static get defaultNumberingSystem() {
    return $m;
  }
  static set defaultNumberingSystem(e) {
    $m = e;
  }
  static get defaultOutputCalendar() {
    return Fm;
  }
  static set defaultOutputCalendar(e) {
    Fm = e;
  }
  static get twoDigitCutoffYear() {
    return Vm;
  }
  static set twoDigitCutoffYear(e) {
    Vm = e % 100;
  }
  static get throwOnInvalid() {
    return jm;
  }
  static set throwOnInvalid(e) {
    jm = e;
  }
  static resetCaches() {
    Qe.resetCache(), Vr.resetCache();
  }
}
function Pe(t) {
  return typeof t > "u";
}
function Qi(t) {
  return typeof t == "number";
}
function Gu(t) {
  return typeof t == "number" && t % 1 === 0;
}
function KT(t) {
  return typeof t == "string";
}
function ZT(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Sv() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function JT(t) {
  return Array.isArray(t) ? t : [t];
}
function Gm(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function QT(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function zs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function kr(t, e, n) {
  return Gu(t) && t >= e && t <= n;
}
function eN(t, e) {
  return t - e * Math.floor(t / e);
}
function vt(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function ti(t) {
  if (!(Pe(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Di(t) {
  if (!(Pe(t) || t === null || t === ""))
    return parseFloat(t);
}
function vh(t) {
  if (!(Pe(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function tN(t) {
  return t > 0 ? Math.floor(t) : Math.ceil(t);
}
function _h(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function mo(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function ka(t) {
  return mo(t) ? 366 : 365;
}
function Jl(t, e) {
  const n = eN(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? mo(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Uu(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function Ql(t) {
  const e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7, n = t - 1, r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return e === 4 || r === 3 ? 53 : 52;
}
function Tf(t) {
  return t > 99 ? t : t > yt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Ov(t, e, n, r = null) {
  const i = new Date(t), s = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (s.timeZone = r);
  const a = { timeZoneName: e, ...s }, o = new Intl.DateTimeFormat(n, a).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Bu(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function Mv(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new Tn(`Invalid unit value ${t}`);
  return e;
}
function eu(t, e) {
  const n = {};
  for (const r in t)
    if (zs(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = Mv(i);
    }
  return n;
}
function Da(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${vt(n, 2)}:${vt(r, 2)}`;
    case "narrow":
      return `${i}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${i}${vt(n, 2)}${vt(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function qu(t) {
  return QT(t, ["hour", "minute", "second", "millisecond"]);
}
const nN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Tv = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], rN = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Nv(t) {
  switch (t) {
    case "narrow":
      return [...rN];
    case "short":
      return [...Tv];
    case "long":
      return [...nN];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Cv = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Lv = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], iN = ["M", "T", "W", "T", "F", "S", "S"];
function Pv(t) {
  switch (t) {
    case "narrow":
      return [...iN];
    case "short":
      return [...Lv];
    case "long":
      return [...Cv];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Av = ["AM", "PM"], sN = ["Before Christ", "Anno Domini"], aN = ["BC", "AD"], oN = ["B", "A"];
function kv(t) {
  switch (t) {
    case "narrow":
      return [...oN];
    case "short":
      return [...aN];
    case "long":
      return [...sN];
    default:
      return null;
  }
}
function lN(t) {
  return Av[t.hour < 12 ? 0 : 1];
}
function uN(t, e) {
  return Pv(e)[t.weekday - 1];
}
function cN(t, e) {
  return Nv(e)[t.month - 1];
}
function fN(t, e) {
  return kv(e)[t.year < 0 ? 0 : 1];
}
function hN(t, e, n = "always", r = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, s = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && s) {
    const c = t === "days";
    switch (e) {
      case 1:
        return c ? "tomorrow" : `next ${i[t][0]}`;
      case -1:
        return c ? "yesterday" : `last ${i[t][0]}`;
      case 0:
        return c ? "today" : `this ${i[t][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, u = i[t], f = r ? l ? u[1] : u[2] || u[1] : l ? i[t][0] : t;
  return a ? `${o} ${f} ago` : `in ${o} ${f}`;
}
function Um(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const dN = {
  D: Zl,
  DD: sv,
  DDD: av,
  DDDD: ov,
  t: lv,
  tt: uv,
  ttt: cv,
  tttt: fv,
  T: hv,
  TT: dv,
  TTT: mv,
  TTTT: pv,
  f: gv,
  ff: vv,
  fff: bv,
  ffff: wv,
  F: yv,
  FF: _v,
  FFF: Ev,
  FFFF: xv
};
class Ft {
  static create(e, n = {}) {
    return new Ft(e, n);
  }
  static parseFormat(e) {
    let n = null, r = "", i = !1;
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? (r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), n = null, r = "", i = !i) : i || o === n ? r += o : (r.length > 0 && s.push({ literal: /^\s+$/.test(r), val: r }), r = o, n = o);
    }
    return r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), s;
  }
  static macroTokenToFormatOpts(e) {
    return dN[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  dtFormatter(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n });
  }
  formatDateTime(e, n) {
    return this.dtFormatter(e, n).format();
  }
  formatDateTimeParts(e, n) {
    return this.dtFormatter(e, n).formatToParts();
  }
  formatInterval(e, n) {
    return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, n) {
    return this.dtFormatter(e, n).resolvedOptions();
  }
  num(e, n = 0) {
    if (this.opts.forceSimple)
      return vt(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, m) => this.loc.extract(e, d, m), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? lN(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, m) => r ? cN(e, d) : s(m ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, m) => r ? uN(e, d) : s(
      m ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const m = Ft.macroTokenToFormatOpts(d);
      return m ? this.formatWithSystemDefault(e, m) : d;
    }, c = (d) => r ? fN(e, d) : s({ era: d }, "era"), h = (d) => {
      switch (d) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return o();
        case "d":
          return i ? s({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return i ? s({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return i ? s({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return i ? s({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return i ? s({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? s({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return i ? s({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return c("short");
        case "GG":
          return c("long");
        case "GGGGG":
          return c("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return f(d);
      }
    };
    return Um(Ft.parseFormat(n), h);
  }
  formatDurationFromString(e, n) {
    const r = (l) => {
      switch (l[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (l) => (u) => {
      const f = r(u);
      return f ? this.num(l.get(f), u.length) : u;
    }, s = Ft.parseFormat(n), a = s.reduce(
      (l, { literal: u, val: f }) => u ? l : l.concat(f),
      []
    ), o = e.shiftTo(...a.map(r).filter((l) => l));
    return Um(s, i(o));
  }
}
class Wn {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Dv = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Zs(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function Js(...t) {
  return (e) => t.reduce(
    ([n, r, i], s) => {
      const [a, o, l] = s(e, i);
      return [{ ...n, ...a }, o || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Qs(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const i = n.exec(t);
    if (i)
      return r(i);
  }
  return [null, null];
}
function Iv(...t) {
  return (e, n) => {
    const r = {};
    let i;
    for (i = 0; i < t.length; i++)
      r[t[i]] = ti(e[n + i]);
    return [r, null, n + i];
  };
}
const Rv = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, mN = `(?:${Rv.source}?(?:\\[(${Dv.source})\\])?)?`, bh = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, $v = RegExp(`${bh.source}${mN}`), Eh = RegExp(`(?:T${$v.source})?`), pN = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, gN = /(\d{4})-?W(\d\d)(?:-?(\d))?/, yN = /(\d{4})-?(\d{3})/, vN = Iv("weekYear", "weekNumber", "weekDay"), _N = Iv("year", "ordinal"), bN = /(\d{4})-(\d\d)-(\d\d)/, Fv = RegExp(
  `${bh.source} ?(?:${Rv.source}|(${Dv.source}))?`
), EN = RegExp(`(?: ${Fv.source})?`);
function Fs(t, e, n) {
  const r = t[e];
  return Pe(r) ? n : ti(r);
}
function wN(t, e) {
  return [{
    year: Fs(t, e),
    month: Fs(t, e + 1, 1),
    day: Fs(t, e + 2, 1)
  }, null, e + 3];
}
function ea(t, e) {
  return [{
    hours: Fs(t, e, 0),
    minutes: Fs(t, e + 1, 0),
    seconds: Fs(t, e + 2, 0),
    milliseconds: vh(t[e + 3])
  }, null, e + 4];
}
function po(t, e) {
  const n = !t[e] && !t[e + 1], r = Bu(t[e + 1], t[e + 2]), i = n ? null : Kt.instance(r);
  return [{}, i, e + 3];
}
function go(t, e) {
  const n = t[e] ? Vr.create(t[e]) : null;
  return [{}, n, e + 1];
}
const xN = RegExp(`^T?${bh.source}$`), SN = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function ON(t) {
  const [e, n, r, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, m = !1) => d !== void 0 && (m || d && f) ? -d : d;
  return [
    {
      years: h(Di(n)),
      months: h(Di(r)),
      weeks: h(Di(i)),
      days: h(Di(s)),
      hours: h(Di(a)),
      minutes: h(Di(o)),
      seconds: h(Di(l), l === "-0"),
      milliseconds: h(vh(u), c)
    }
  ];
}
const MN = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function wh(t, e, n, r, i, s, a) {
  const o = {
    year: e.length === 2 ? Tf(ti(e)) : ti(e),
    month: Tv.indexOf(n) + 1,
    day: ti(r),
    hour: ti(i),
    minute: ti(s)
  };
  return a && (o.second = ti(a)), t && (o.weekday = t.length > 3 ? Cv.indexOf(t) + 1 : Lv.indexOf(t) + 1), o;
}
const TN = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function NN(t) {
  const [
    ,
    e,
    n,
    r,
    i,
    s,
    a,
    o,
    l,
    u,
    f,
    c
  ] = t, h = wh(e, i, r, n, s, a, o);
  let d;
  return l ? d = MN[l] : u ? d = 0 : d = Bu(f, c), [h, new Kt(d)];
}
function CN(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const LN = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, PN = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, AN = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Bm(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [wh(e, i, r, n, s, a, o), Kt.utcInstance];
}
function kN(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [wh(e, o, n, r, i, s, a), Kt.utcInstance];
}
const DN = Zs(pN, Eh), IN = Zs(gN, Eh), RN = Zs(yN, Eh), $N = Zs($v), Vv = Js(
  wN,
  ea,
  po,
  go
), FN = Js(
  vN,
  ea,
  po,
  go
), VN = Js(
  _N,
  ea,
  po,
  go
), jN = Js(
  ea,
  po,
  go
);
function GN(t) {
  return Qs(
    t,
    [DN, Vv],
    [IN, FN],
    [RN, VN],
    [$N, jN]
  );
}
function UN(t) {
  return Qs(CN(t), [TN, NN]);
}
function BN(t) {
  return Qs(
    t,
    [LN, Bm],
    [PN, Bm],
    [AN, kN]
  );
}
function qN(t) {
  return Qs(t, [SN, ON]);
}
const WN = Js(ea);
function HN(t) {
  return Qs(t, [xN, WN]);
}
const zN = Zs(bN, EN), YN = Zs(Fv), XN = Js(
  ea,
  po,
  go
);
function KN(t) {
  return Qs(
    t,
    [zN, Vv],
    [YN, XN]
  );
}
const qm = "Invalid Duration", jv = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, ZN = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...jv
}, xn = 146097 / 400, ys = 146097 / 4800, JN = {
  years: {
    quarters: 4,
    months: 12,
    weeks: xn / 7,
    days: xn,
    hours: xn * 24,
    minutes: xn * 24 * 60,
    seconds: xn * 24 * 60 * 60,
    milliseconds: xn * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: xn / 28,
    days: xn / 4,
    hours: xn * 24 / 4,
    minutes: xn * 24 * 60 / 4,
    seconds: xn * 24 * 60 * 60 / 4,
    milliseconds: xn * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: ys / 7,
    days: ys,
    hours: ys * 24,
    minutes: ys * 24 * 60,
    seconds: ys * 24 * 60 * 60,
    milliseconds: ys * 24 * 60 * 60 * 1e3
  },
  ...jv
}, Ui = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Gv = Ui.slice(0).reverse();
function Kr(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new De(r);
}
function Wm(t) {
  return Math.trunc(t * 1e3) / 1e3;
}
function Uv(t, e, n, r, i) {
  const s = t[i][n], a = e[n] / s, o = tN(a);
  r[i] = Wm(r[i] + o), e[n] = Wm(e[n] - o * s);
}
function QN(t, e) {
  Gv.reduce((n, r) => Pe(e[r]) ? n : (n && Uv(t, e, n, e, r), r), null);
}
function eC(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class De {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? JN : ZN;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || Qe.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  static fromMillis(e, n) {
    return De.fromObject({ milliseconds: e }, n);
  }
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new Tn(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new De({
      values: eu(e, De.normalizeUnit),
      loc: Qe.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  static fromDurationLike(e) {
    if (Qi(e))
      return De.fromMillis(e);
    if (De.isDuration(e))
      return e;
    if (typeof e == "object")
      return De.fromObject(e);
    throw new Tn(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  static fromISO(e, n) {
    const [r] = qN(e);
    return r ? De.fromObject(r, n) : De.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = HN(e);
    return r ? De.fromObject(r, n) : De.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new Tn("need to specify a reason the Duration is invalid");
    const r = e instanceof Wn ? e : new Wn(e, n);
    if (yt.throwOnInvalid)
      throw new LT(r);
    return new De({ invalid: r });
  }
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n)
      throw new iv(e);
    return n;
  }
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(e, n = {}) {
    const r = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? Ft.create(this.loc, r).formatDurationFromString(this, e) : qm;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return qm;
    const n = Ui.map((r) => {
      const i = this.values[r];
      return Pe(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(i);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(n);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += _h(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, we.fromMillis(n, { zone: "UTC" }).toISOTime(e));
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    var n;
    if (!this.isValid)
      return NaN;
    let e = (n = this.values.milliseconds) != null ? n : 0;
    for (let r of Gv.slice(1))
      this.values[r] && (e += this.values[r] * this.matrix[r].milliseconds);
    return e;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = De.fromDurationLike(e), r = {};
    for (const i of Ui)
      (zs(n.values, i) || zs(this.values, i)) && (r[i] = n.get(i) + this.get(i));
    return Kr(this, { values: r }, !0);
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = De.fromDurationLike(e);
    return this.plus(n.negate());
  }
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const r of Object.keys(this.values))
      n[r] = Mv(e(this.values[r], r));
    return Kr(this, { values: n }, !0);
  }
  get(e) {
    return this[De.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...eu(e, De.normalizeUnit) };
    return Kr(this, { values: n });
  }
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: r };
    return Kr(this, a);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return this.valueOf() >= 0 ? (QN(this.matrix, e), Kr(this, { values: e }, !0)) : this.negate().normalize().negate();
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = eC(this.normalize().shiftToAll().toObject());
    return Kr(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => De.normalizeUnit(a));
    const n = {}, r = {}, i = this.toObject();
    let s;
    for (const a of Ui)
      if (e.indexOf(a) >= 0) {
        s = a;
        let o = 0;
        for (const u in r)
          o += this.matrix[u][a] * r[u], r[u] = 0;
        Qi(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
        for (const u in i)
          Ui.indexOf(u) > Ui.indexOf(a) && Uv(this.matrix, i, u, n, a);
      } else
        Qi(i[a]) && (r[a] = i[a]);
    for (const a in r)
      r[a] !== 0 && (n[s] += a === s ? r[a] : r[a] / this.matrix[s][a]);
    return Kr(this, { values: n }, !0).normalize();
  }
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return Kr(this, { values: e }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(r, i) {
      return r === void 0 || r === 0 ? i === void 0 || i === 0 : r === i;
    }
    for (const r of Ui)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const vs = "Invalid Interval";
function tC(t, e) {
  return !t || !t.isValid ? ft.invalid("missing or invalid start") : !e || !e.isValid ? ft.invalid("missing or invalid end") : e < t ? ft.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class ft {
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(e, n = null) {
    if (!e)
      throw new Tn("need to specify a reason the Interval is invalid");
    const r = e instanceof Wn ? e : new Wn(e, n);
    if (yt.throwOnInvalid)
      throw new CT(r);
    return new ft({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = fa(e), i = fa(n), s = tC(r, i);
    return s == null ? new ft({
      start: r,
      end: i
    }) : s;
  }
  static after(e, n) {
    const r = De.fromDurationLike(n), i = fa(e);
    return ft.fromDateTimes(i, i.plus(r));
  }
  static before(e, n) {
    const r = De.fromDurationLike(n), i = fa(e);
    return ft.fromDateTimes(i.minus(r), i);
  }
  static fromISO(e, n) {
    const [r, i] = (e || "").split("/", 2);
    if (r && i) {
      let s, a;
      try {
        s = we.fromISO(r, n), a = s.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = we.fromISO(i, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return ft.fromDateTimes(s, o);
      if (a) {
        const u = De.fromISO(i, n);
        if (u.isValid)
          return ft.after(s, u);
      } else if (l) {
        const u = De.fromISO(r, n);
        if (u.isValid)
          return ft.before(o, u);
      }
    }
    return ft.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  count(e = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(e), r = this.end.startOf(e);
    return Math.floor(r.diff(n, e).get(e)) + (r.valueOf() !== this.end.valueOf());
  }
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  set({ start: e, end: n } = {}) {
    return this.isValid ? ft.fromDateTimes(e || this.s, n || this.e) : this;
  }
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const n = e.map(fa).filter((a) => this.contains(a)).sort(), r = [];
    let { s: i } = this, s = 0;
    for (; i < this.e; ) {
      const a = n[s] || this.e, o = +a > +this.e ? this.e : a;
      r.push(ft.fromDateTimes(i, o)), i = o, s += 1;
    }
    return r;
  }
  splitBy(e) {
    const n = De.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: r } = this, i = 1, s;
    const a = [];
    for (; r < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * i));
      s = +o > +this.e ? this.e : o, a.push(ft.fromDateTimes(r, s)), r = s, i += 1;
    }
    return a;
  }
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  intersection(e) {
    if (!this.isValid)
      return this;
    const n = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return n >= r ? null : ft.fromDateTimes(n, r);
  }
  union(e) {
    if (!this.isValid)
      return this;
    const n = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return ft.fromDateTimes(n, r);
  }
  static merge(e) {
    const [n, r] = e.sort((i, s) => i.s - s.s).reduce(
      ([i, s], a) => s ? s.overlaps(a) || s.abutsStart(a) ? [i, s.union(a)] : [i.concat([s]), a] : [i, a],
      [[], null]
    );
    return r && n.push(r), n;
  }
  static xor(e) {
    let n = null, r = 0;
    const i = [], s = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...s), o = a.sort((l, u) => l.time - u.time);
    for (const l of o)
      r += l.type === "s" ? 1 : -1, r === 1 ? n = l.time : (n && +n != +l.time && i.push(ft.fromDateTimes(n, l.time)), n = null);
    return ft.merge(i);
  }
  difference(...e) {
    return ft.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : vs;
  }
  toLocaleString(e = Zl, n = {}) {
    return this.isValid ? Ft.create(this.s.loc.clone(n), e).formatInterval(this) : vs;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : vs;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : vs;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : vs;
  }
  toFormat(e, { separator: n = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : vs;
  }
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : De.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return ft.fromDateTimes(e(this.s), e(this.e));
  }
}
class Bo {
  static hasDST(e = yt.defaultZone) {
    const n = we.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Vr.isValidZone(e);
  }
  static normalizeZone(e) {
    return si(e, yt.defaultZone);
  }
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Qe.create(n, r, s)).months(e);
  }
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Qe.create(n, r, s)).months(e, !0);
  }
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Qe.create(n, r, null)).weekdays(e);
  }
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Qe.create(n, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return Qe.create(e).meridiems();
  }
  static eras(e = "short", { locale: n = null } = {}) {
    return Qe.create(n, null, "gregory").eras(e);
  }
  static features() {
    return { relative: Sv() };
  }
}
function Hm(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(De.fromMillis(r).as("days"));
}
function nC(t, e, n) {
  const r = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = Hm(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Hm]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of r)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function rC(t, e, n, r) {
  let [i, s, a, o] = nC(t, e, n);
  const l = e - i, u = n.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = De.fromObject(s, r);
  return u.length > 0 ? De.fromMillis(l, r).shiftTo(...u).plus(f) : f;
}
const xh = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
}, zm = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, iC = xh.hanidec.replace(/[\[|\]]/g, "").split("");
function sC(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(xh.hanidec) !== -1)
        e += iC.indexOf(t[n]);
      else
        for (const i in zm) {
          const [s, a] = zm[i];
          r >= s && r <= a && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Rn({ numberingSystem: t }, e = "") {
  return new RegExp(`${xh[t || "latn"]}${e}`);
}
const aC = "missing Intl.DateTimeFormat.formatToParts support";
function $e(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(sC(n)) };
}
const oC = String.fromCharCode(160), Bv = `[ ${oC}]`, qv = new RegExp(Bv, "g");
function lC(t) {
  return t.replace(/\./g, "\\.?").replace(qv, Bv);
}
function Ym(t) {
  return t.replace(/\./g, "").replace(qv, " ").toLowerCase();
}
function $n(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(lC).join("|")),
    deser: ([n]) => t.findIndex((r) => Ym(n) === Ym(r)) + e
  };
}
function Xm(t, e) {
  return { regex: t, deser: ([, n, r]) => Bu(n, r), groups: e };
}
function qo(t) {
  return { regex: t, deser: ([e]) => e };
}
function uC(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function cC(t, e) {
  const n = Rn(e), r = Rn(e, "{2}"), i = Rn(e, "{3}"), s = Rn(e, "{4}"), a = Rn(e, "{6}"), o = Rn(e, "{1,2}"), l = Rn(e, "{1,3}"), u = Rn(e, "{1,6}"), f = Rn(e, "{1,9}"), c = Rn(e, "{2,4}"), h = Rn(e, "{4,6}"), d = (g) => ({ regex: RegExp(uC(g.val)), deser: ([v]) => v, literal: !0 }), p = ((g) => {
    if (t.literal)
      return d(g);
    switch (g.val) {
      case "G":
        return $n(e.eras("short"), 0);
      case "GG":
        return $n(e.eras("long"), 0);
      case "y":
        return $e(u);
      case "yy":
        return $e(c, Tf);
      case "yyyy":
        return $e(s);
      case "yyyyy":
        return $e(h);
      case "yyyyyy":
        return $e(a);
      case "M":
        return $e(o);
      case "MM":
        return $e(r);
      case "MMM":
        return $n(e.months("short", !0), 1);
      case "MMMM":
        return $n(e.months("long", !0), 1);
      case "L":
        return $e(o);
      case "LL":
        return $e(r);
      case "LLL":
        return $n(e.months("short", !1), 1);
      case "LLLL":
        return $n(e.months("long", !1), 1);
      case "d":
        return $e(o);
      case "dd":
        return $e(r);
      case "o":
        return $e(l);
      case "ooo":
        return $e(i);
      case "HH":
        return $e(r);
      case "H":
        return $e(o);
      case "hh":
        return $e(r);
      case "h":
        return $e(o);
      case "mm":
        return $e(r);
      case "m":
        return $e(o);
      case "q":
        return $e(o);
      case "qq":
        return $e(r);
      case "s":
        return $e(o);
      case "ss":
        return $e(r);
      case "S":
        return $e(l);
      case "SSS":
        return $e(i);
      case "u":
        return qo(f);
      case "uu":
        return qo(o);
      case "uuu":
        return $e(n);
      case "a":
        return $n(e.meridiems(), 0);
      case "kkkk":
        return $e(s);
      case "kk":
        return $e(c, Tf);
      case "W":
        return $e(o);
      case "WW":
        return $e(r);
      case "E":
      case "c":
        return $e(n);
      case "EEE":
        return $n(e.weekdays("short", !1), 1);
      case "EEEE":
        return $n(e.weekdays("long", !1), 1);
      case "ccc":
        return $n(e.weekdays("short", !0), 1);
      case "cccc":
        return $n(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return Xm(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Xm(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return qo(/[a-z_+-/]{1,256}?/i);
      case " ":
        return qo(/[^\S\n\r]/);
      default:
        return d(g);
    }
  })(t) || {
    invalidReason: aC
  };
  return p.token = t, p;
}
const fC = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function hC(t, e, n) {
  const { type: r, value: i } = t;
  if (r === "literal") {
    const l = /^\s+$/.test(i);
    return {
      literal: !l,
      val: l ? " " : i
    };
  }
  const s = e[r];
  let a = r;
  r === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = n.hour12 ? "hour12" : "hour24");
  let o = fC[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function dC(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function mC(t, e, n) {
  const r = t.match(e);
  if (r) {
    const i = {};
    let s = 1;
    for (const a in n)
      if (zs(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(r.slice(s, s + l))), s += l;
      }
    return [r, i];
  } else
    return [r, {}];
}
function pC(t) {
  const e = (s) => {
    switch (s) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, r;
  return Pe(t.z) || (n = Vr.create(t.z)), Pe(t.Z) || (n || (n = new Kt(t.Z)), r = t.Z), Pe(t.q) || (t.M = (t.q - 1) * 3 + 1), Pe(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), Pe(t.u) || (t.S = vh(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), n, r];
}
let _c = null;
function gC() {
  return _c || (_c = we.fromMillis(1555555555555)), _c;
}
function yC(t, e) {
  if (t.literal)
    return t;
  const n = Ft.macroTokenToFormatOpts(t.val), r = zv(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function Wv(t, e) {
  return Array.prototype.concat(...t.map((n) => yC(n, e)));
}
function Hv(t, e, n) {
  const r = Wv(Ft.parseFormat(n), t), i = r.map((a) => cC(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [a, o] = dC(i), l = RegExp(a, "i"), [u, f] = mC(e, l, o), [c, h, d] = f ? pC(f) : [null, null, void 0];
    if (zs(f, "a") && zs(f, "H"))
      throw new _a(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function vC(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: a } = Hv(t, e, n);
  return [r, i, s, a];
}
function zv(t, e) {
  if (!t)
    return null;
  const r = Ft.create(e, t).dtFormatter(gC()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((a) => hC(a, t, s));
}
const Yv = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Xv = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Nn(t, e) {
  return new Wn(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Kv(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function Zv(t, e, n) {
  return n + (mo(t) ? Xv : Yv)[e - 1];
}
function Jv(t, e) {
  const n = mo(t) ? Xv : Yv, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function Nf(t) {
  const { year: e, month: n, day: r } = t, i = Zv(e, n, r), s = Kv(e, n, r);
  let a = Math.floor((i - s + 10) / 7), o;
  return a < 1 ? (o = e - 1, a = Ql(o)) : a > Ql(e) ? (o = e + 1, a = 1) : o = e, { weekYear: o, weekNumber: a, weekday: s, ...qu(t) };
}
function Km(t) {
  const { weekYear: e, weekNumber: n, weekday: r } = t, i = Kv(e, 1, 4), s = ka(e);
  let a = n * 7 + r - i - 3, o;
  a < 1 ? (o = e - 1, a += ka(o)) : a > s ? (o = e + 1, a -= ka(e)) : o = e;
  const { month: l, day: u } = Jv(o, a);
  return { year: o, month: l, day: u, ...qu(t) };
}
function bc(t) {
  const { year: e, month: n, day: r } = t, i = Zv(e, n, r);
  return { year: e, ordinal: i, ...qu(t) };
}
function Zm(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = Jv(e, n);
  return { year: e, month: r, day: i, ...qu(t) };
}
function _C(t) {
  const e = Gu(t.weekYear), n = kr(t.weekNumber, 1, Ql(t.weekYear)), r = kr(t.weekday, 1, 7);
  return e ? n ? r ? !1 : Nn("weekday", t.weekday) : Nn("week", t.week) : Nn("weekYear", t.weekYear);
}
function bC(t) {
  const e = Gu(t.year), n = kr(t.ordinal, 1, ka(t.year));
  return e ? n ? !1 : Nn("ordinal", t.ordinal) : Nn("year", t.year);
}
function Qv(t) {
  const e = Gu(t.year), n = kr(t.month, 1, 12), r = kr(t.day, 1, Jl(t.year, t.month));
  return e ? n ? r ? !1 : Nn("day", t.day) : Nn("month", t.month) : Nn("year", t.year);
}
function e0(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = kr(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, a = kr(n, 0, 59), o = kr(r, 0, 59), l = kr(i, 0, 999);
  return s ? a ? o ? l ? !1 : Nn("millisecond", i) : Nn("second", r) : Nn("minute", n) : Nn("hour", e);
}
const Ec = "Invalid DateTime", Jm = 864e13;
function Wo(t) {
  return new Wn("unsupported zone", `the zone "${t.name}" is not supported`);
}
function wc(t) {
  return t.weekData === null && (t.weekData = Nf(t.c)), t.weekData;
}
function Ii(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new we({ ...n, ...e, old: n });
}
function t0(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function Ho(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function El(t, e, n) {
  return t0(Uu(t), e, n);
}
function Qm(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, Jl(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = De.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Uu(s);
  let [l, u] = t0(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function ca(t, e, n, r, i, s) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = we.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: s
    });
    return a ? u : u.setZone(o);
  } else
    return we.invalid(
      new Wn("unparsable", `the input "${i}" can't be parsed as ${r}`)
    );
}
function zo(t, e, n = !0) {
  return t.isValid ? Ft.create(Qe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function xc(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += vt(t.c.year, n ? 6 : 4), e ? (r += "-", r += vt(t.c.month), r += "-", r += vt(t.c.day)) : (r += vt(t.c.month), r += vt(t.c.day)), r;
}
function ep(t, e, n, r, i, s) {
  let a = vt(t.c.hour);
  return e ? (a += ":", a += vt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += ":")) : a += vt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += vt(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += vt(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += vt(Math.trunc(-t.o / 60)), a += ":", a += vt(Math.trunc(-t.o % 60))) : (a += "+", a += vt(Math.trunc(t.o / 60)), a += ":", a += vt(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const n0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, EC = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, wC = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, r0 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], xC = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], SC = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function tp(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new iv(t);
  return e;
}
function np(t, e) {
  const n = si(e.zone, yt.defaultZone), r = Qe.fromObject(e), i = yt.now();
  let s, a;
  if (Pe(t.year))
    s = i;
  else {
    for (const u of r0)
      Pe(t[u]) && (t[u] = n0[u]);
    const o = Qv(t) || e0(t);
    if (o)
      return we.invalid(o);
    const l = n.offset(i);
    [s, a] = El(t, l, n);
  }
  return new we({ ts: s, zone: n, loc: r, o: a });
}
function rp(t, e, n) {
  const r = Pe(n.round) ? !0 : n.round, i = (a, o) => (a = _h(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), s = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const a of n.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function ip(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class we {
  constructor(e) {
    const n = e.zone || yt.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new Wn("invalid input") : null) || (n.isValid ? null : Wo(n));
    this.ts = Pe(e.ts) ? yt.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        i = Ho(this.ts, o), r = Number.isNaN(i.year) ? new Wn("invalid input") : null, i = r ? null : i, s = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || Qe.create(), this.invalid = r, this.weekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new we({});
  }
  static local() {
    const [e, n] = ip(arguments), [r, i, s, a, o, l, u] = n;
    return np({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, n] = ip(arguments), [r, i, s, a, o, l, u] = n;
    return e.zone = Kt.utcInstance, np({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = ZT(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return we.invalid("invalid input");
    const i = si(n.zone, yt.defaultZone);
    return i.isValid ? new we({
      ts: r,
      zone: i,
      loc: Qe.fromObject(n)
    }) : we.invalid(Wo(i));
  }
  static fromMillis(e, n = {}) {
    if (Qi(e))
      return e < -Jm || e > Jm ? we.invalid("Timestamp out of range") : new we({
        ts: e,
        zone: si(n.zone, yt.defaultZone),
        loc: Qe.fromObject(n)
      });
    throw new Tn(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (Qi(e))
      return new we({
        ts: e * 1e3,
        zone: si(n.zone, yt.defaultZone),
        loc: Qe.fromObject(n)
      });
    throw new Tn("fromSeconds requires a numerical input");
  }
  static fromObject(e, n = {}) {
    e = e || {};
    const r = si(n.zone, yt.defaultZone);
    if (!r.isValid)
      return we.invalid(Wo(r));
    const i = yt.now(), s = Pe(n.specificOffset) ? r.offset(i) : n.specificOffset, a = eu(e, tp), o = !Pe(a.ordinal), l = !Pe(a.year), u = !Pe(a.month) || !Pe(a.day), f = l || u, c = a.weekYear || a.weekNumber, h = Qe.fromObject(n);
    if ((f || o) && c)
      throw new _a(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && o)
      throw new _a("Can't mix ordinal dates with month/day");
    const d = c || a.weekday && !f;
    let m, p, g = Ho(i, s);
    d ? (m = xC, p = EC, g = Nf(g)) : o ? (m = SC, p = wC, g = bc(g)) : (m = r0, p = n0);
    let v = !1;
    for (const C of m) {
      const T = a[C];
      Pe(T) ? v ? a[C] = p[C] : a[C] = g[C] : v = !0;
    }
    const y = d ? _C(a) : o ? bC(a) : Qv(a), E = y || e0(a);
    if (E)
      return we.invalid(E);
    const w = d ? Km(a) : o ? Zm(a) : a, [S, P] = El(w, s, r), k = new we({
      ts: S,
      zone: r,
      o: P,
      loc: h
    });
    return a.weekday && f && e.weekday !== k.weekday ? we.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${k.toISO()}`
    ) : k;
  }
  static fromISO(e, n = {}) {
    const [r, i] = GN(e);
    return ca(r, i, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, i] = UN(e);
    return ca(r, i, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, i] = BN(e);
    return ca(r, i, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (Pe(e) || Pe(n))
      throw new Tn("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, a = Qe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = vC(a, e, n);
    return f ? we.invalid(f) : ca(o, l, r, `format ${n}`, e, u);
  }
  static fromString(e, n, r = {}) {
    return we.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, i] = KN(e);
    return ca(r, i, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new Tn("need to specify a reason the DateTime is invalid");
    const r = e instanceof Wn ? e : new Wn(e, n);
    if (yt.throwOnInvalid)
      throw new NT(r);
    return new we({ invalid: r });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, n = {}) {
    const r = zv(e, Qe.fromObject(n));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(e, n = {}) {
    return Wv(Ft.parseFormat(e), Qe.fromObject(n)).map((i) => i.val).join("");
  }
  get(e) {
    return this[e];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? wc(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? wc(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? wc(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? bc(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? Bo.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? Bo.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? Bo.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? Bo.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, n = 6e4, r = Uu(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), a = this.zone.offset(r - i * n), o = this.zone.offset(r - s * n);
    if (a === o)
      return [this];
    const l = r - a * n, u = r - o * n, f = Ho(l, a), c = Ho(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Ii(this, { ts: l }), Ii(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return mo(this.year);
  }
  get daysInMonth() {
    return Jl(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? ka(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? Ql(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: r, calendar: i } = Ft.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: i };
  }
  toUTC(e = 0, n = {}) {
    return this.setZone(Kt.instance(e), n);
  }
  toLocal() {
    return this.setZone(yt.defaultZone);
  }
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = si(e, yt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || r) {
        const s = e.offset(this.ts), a = this.toObject();
        [i] = El(a, s, e);
      }
      return Ii(this, { ts: i, zone: e });
    } else
      return we.invalid(Wo(e));
  }
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return Ii(this, { loc: i });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = eu(e, tp), r = !Pe(n.weekYear) || !Pe(n.weekNumber) || !Pe(n.weekday), i = !Pe(n.ordinal), s = !Pe(n.year), a = !Pe(n.month) || !Pe(n.day), o = s || a, l = n.weekYear || n.weekNumber;
    if ((o || i) && l)
      throw new _a(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && i)
      throw new _a("Can't mix ordinal dates with month/day");
    let u;
    r ? u = Km({ ...Nf(this.c), ...n }) : Pe(n.ordinal) ? (u = { ...this.toObject(), ...n }, Pe(n.day) && (u.day = Math.min(Jl(u.year, u.month), u.day))) : u = Zm({ ...bc(this.c), ...n });
    const [f, c] = El(u, this.o, this.zone);
    return Ii(this, { ts: f, o: c });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = De.fromDurationLike(e);
    return Ii(this, Qm(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = De.fromDurationLike(e).negate();
    return Ii(this, Qm(this, n));
  }
  startOf(e) {
    if (!this.isValid)
      return this;
    const n = {}, r = De.normalizeUnit(e);
    switch (r) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (r === "weeks" && (n.weekday = 1), r === "quarters") {
      const i = Math.ceil(this.month / 3);
      n.month = (i - 1) * 3 + 1;
    }
    return this.set(n);
  }
  endOf(e) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this;
  }
  toFormat(e, n = {}) {
    return this.isValid ? Ft.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ec;
  }
  toLocaleString(e = Zl, n = {}) {
    return this.isValid ? Ft.create(this.loc.clone(n), e).formatDateTime(this) : Ec;
  }
  toLocaleParts(e = {}) {
    return this.isValid ? Ft.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: i = !0,
    extendedZone: s = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    let o = xc(this, a);
    return o += "T", o += ep(this, a, n, r, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? xc(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return zo(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + ep(
      this,
      a === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  toRFC2822() {
    return zo(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return zo(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? xc(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), zo(this, i, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Ec;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, n = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return De.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = JT(n).map(De.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = rC(o, l, s, i);
    return a ? u.negate() : u;
  }
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(we.now(), e, n);
  }
  until(e) {
    return this.isValid ? ft.fromDateTimes(this, e) : this;
  }
  hasSame(e, n) {
    if (!this.isValid)
      return !1;
    const r = e.valueOf(), i = this.setZone(e.zone, { keepLocalTime: !0 });
    return i.startOf(n) <= r && r <= i.endOf(n);
  }
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const n = e.base || we.fromObject({}, { zone: this.zone }), r = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), rp(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? rp(e.base || we.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(we.isDateTime))
      throw new Tn("min requires all arguments be DateTimes");
    return Gm(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(we.isDateTime))
      throw new Tn("max requires all arguments be DateTimes");
    return Gm(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, a = Qe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return Hv(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return we.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return Zl;
  }
  static get DATE_MED() {
    return sv;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return PT;
  }
  static get DATE_FULL() {
    return av;
  }
  static get DATE_HUGE() {
    return ov;
  }
  static get TIME_SIMPLE() {
    return lv;
  }
  static get TIME_WITH_SECONDS() {
    return uv;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return cv;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return fv;
  }
  static get TIME_24_SIMPLE() {
    return hv;
  }
  static get TIME_24_WITH_SECONDS() {
    return dv;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return mv;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return pv;
  }
  static get DATETIME_SHORT() {
    return gv;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return yv;
  }
  static get DATETIME_MED() {
    return vv;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return _v;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return AT;
  }
  static get DATETIME_FULL() {
    return bv;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return Ev;
  }
  static get DATETIME_HUGE() {
    return wv;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return xv;
  }
}
function fa(t) {
  if (we.isDateTime(t))
    return t;
  if (t && t.valueOf && Qi(t.valueOf()))
    return we.fromJSDate(t);
  if (t && typeof t == "object")
    return we.fromObject(t);
  throw new Tn(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const i0 = [0, 1, 0, 0];
function sp(t, e = "second", n, r) {
  const { t: i } = Ze(), s = new Date(t).toISOString(), a = {
    year: i("yyyy"),
    month: i("M/yyyy"),
    day: i("M/d/yyyy"),
    second: i("M/d/yyyy HH:mm:ss")
  }, l = (n ? {
    year: "yyyy",
    month: "yyyy-MM",
    day: "yyyy-MM-dd",
    second: void 0
  } : a)[e];
  return l ? we.fromISO(s).toFormat(
    `${r ? "UTC:" : ""}${l}`
  ) : s.replace(/\.\d{3}/, "");
}
function Cf(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function Sc(t) {
  return we.fromISO(t).toFormat("yyyy-MM-dd");
}
function OC(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? MC(t, e) : TC(t, e);
}
function MC(t, e) {
  var l;
  const n = (l = e.timeValueList) != null ? l : [];
  let r, i = 0, s = n.length - 1;
  for (; s - i > 1; )
    r = Math.floor((i + s) / 2), n[r] >= t ? s = r : i = r;
  const a = Math.abs(n[i] - t), o = Math.abs(n[s] - t);
  return n[a < o ? i : s];
}
function TC(t, e) {
  var l;
  const n = (l = e.timeInterval) != null ? l : i0, r = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
  let a = e.minValue, o = Math.abs(r - a);
  for (let u = 1; ; u++) {
    const f = new Date(i.getTime());
    if (f.setFullYear(i.getFullYear() + u * n[0]), f.setMonth(
      i.getMonth() + u * n[1],
      i.getDate() + u * n[2]
    ), f.setSeconds(i.getSeconds() + u * n[3]), f.getTime() > s)
      break;
    const c = Math.abs(r - f.getTime());
    if (c <= o)
      a = f.getTime(), o = c;
    else
      break;
  }
  return a;
}
const mt = ls("map", () => {
  const t = Kn(), e = Se({}), n = et([]), r = et([]), i = Se(!1), s = Se(!1), a = Se(void 0);
  function o(y) {
    a.value = y;
  }
  function l(...y) {
    n.value = [.../* @__PURE__ */ new Set([...n.value, ...y])];
  }
  function u(...y) {
    r.value = [.../* @__PURE__ */ new Set([...r.value, ...y])];
  }
  function f(...y) {
    n.value = n.value.filter(
      (E) => y.indexOf(E.id) === -1
    ), r.value = r.value.filter(
      (E) => y.indexOf(E.id) === -1
    );
  }
  function c() {
    n.value = [];
  }
  function h(y) {
    var E;
    return !!((E = n.value) != null && E.find((w) => w.id === y));
  }
  function d(y, E = !1) {
    var S;
    const w = E ? r : n;
    w.value = [
      ...((S = w.value) == null ? void 0 : S.sort(
        (P, k) => y.indexOf(P.id) - y.indexOf(k.id)
      )) || []
    ];
  }
  function m(y, E) {
    n.value = n.value.map((w) => w.id === y ? { ...w, opacity: E, previousOpacity: w.opacity } : w);
  }
  function p(y, E, w) {
    n.value = n.value.map((S) => {
      if (S.id === y) {
        const P = {
          ...S,
          currentTimeMinValue: E ? Cf(E) : void 0,
          currentTimeMaxValue: w ? Cf(w) : void 0
        };
        return P.type === "WMTS" && (P.name = t.getLayerCurrentLabel(P)), P;
      }
      return S;
    });
  }
  function g(y) {
    i.value = y;
  }
  function v(y) {
    s.value = y;
  }
  return {
    map: e,
    layers: n,
    layers3d: r,
    is3dActive: i,
    is3dMesh: s,
    bgLayer: a,
    addLayers: l,
    add3dLayers: u,
    removeLayers: f,
    removeAllLayers: c,
    reorderLayers: d,
    setLayerOpacity: m,
    setLayerTime: p,
    setBgLayer: o,
    setIs3dActive: g,
    setIs3dMesh: v,
    hasLayer: h
  };
}), NC = "root_3d", CC = -222, Yt = ls(
  "config",
  () => {
    const t = et(), e = Se("main"), n = me(() => {
      var l;
      return (l = t.value) == null ? void 0 : l.themes;
    }), r = me(
      () => {
        var l;
        return (l = n.value) == null ? void 0 : l.find((u) => u.name === e.value);
      }
    ), i = me(() => {
      var l;
      return ((l = t.value) == null ? void 0 : l.background_layers) || [];
    }), s = me(() => {
      var u;
      const l = (u = n.value) == null ? void 0 : u.filter(
        (f) => {
          var c;
          return ((c = f.metadata) == null ? void 0 : c.ol3d_type) !== void 0;
        }
      );
      if (!!l)
        return {
          name: NC,
          id: CC,
          children: l.flatMap(
            (f) => f != null && f.children ? f.children : f
          ),
          metadata: {}
        };
    });
    function a(l) {
      t.value = l;
    }
    function o(l) {
      e.value = l;
    }
    return {
      config: t,
      themes: n,
      themeName: e,
      theme: r,
      bgLayers: i,
      layerTrees_3d: s,
      setTheme: o,
      setThemes: a
    };
  },
  {}
);
function es() {
  function t(o, l) {
    return n(o, void 0, l);
  }
  function e(o, l) {
    return n(void 0, o, l);
  }
  function n(o, l, u) {
    const { themes: f } = Yt();
    if (u = u || (f == null ? void 0 : f.find((c) => n(o, l, c))), o && (u == null ? void 0 : u.id) === o || l && (u == null ? void 0 : u.name) === l)
      return u;
    if (u != null && u.children)
      for (const c of u.children) {
        const h = n(o, l, c);
        if (h)
          return h;
      }
  }
  function r(o) {
    const { layerTrees_3d: l } = Yt();
    return n(o, void 0, l);
  }
  function i(o) {
    const { bgLayers: l } = Yt();
    return l.find((u) => u.id === o);
  }
  function s(o) {
    const { bgLayers: l } = Yt();
    return l.find((u) => u.name === o);
  }
  function a(o) {
    const { setTheme: l } = Yt();
    l(o);
  }
  return {
    findById: t,
    findByName: e,
    find3dLayerById: r,
    findBgLayerById: i,
    findBgLayerByName: s,
    setTheme: a
  };
}
const ap = es();
function Kn() {
  function t(l, u) {
    try {
      const f = JSON.parse(l).concat(JSON.parse(u));
      return new Set(f).size < f.length;
    } catch {
      return !1;
    }
  }
  function e(l) {
    var u, f;
    return l.opacity = l.previousOpacity = (f = (u = l.metadata) == null ? void 0 : u.start_opacity) != null ? f : 1, n(l), l;
  }
  function n(l) {
    var f, c, h, d, m, p, g;
    l.currentTimeMinValue || (l.currentTimeMinValue = (h = (f = l.time) == null ? void 0 : f.minDefValue) != null ? h : (c = l.time) == null ? void 0 : c.minValue);
    const u = ((d = l.time) == null ? void 0 : d.mode) === Pr.RANGE;
    !l.currentTimeMaxValue && u && (l.currentTimeMaxValue = (g = (m = l.time) == null ? void 0 : m.maxDefValue) != null ? g : (p = l.time) == null ? void 0 : p.maxValue);
  }
  function r(l) {
    var c, h, d;
    const u = i(l);
    let f = l.name;
    return u && (f = (d = (h = (c = l.metadata) == null ? void 0 : c.time_layers) == null ? void 0 : h[u]) != null ? d : f), f;
  }
  function i(l) {
    return [
      l.currentTimeMinValue,
      ...l.currentTimeMaxValue ? [l.currentTimeMaxValue] : []
    ].join(OT);
  }
  function s(l) {
    var h, d;
    const u = Yl();
    if (!((h = l.metadata) != null && h.exclusion))
      return;
    const f = mt(), c = f.layers.filter(
      (m) => {
        var p, g;
        return t(
          (p = l == null ? void 0 : l.metadata) == null ? void 0 : p.exclusion,
          (g = m == null ? void 0 : m.metadata) == null ? void 0 : g.exclusion
        );
      }
    );
    c.length > 0 && (f.removeLayers(...c.map((m) => m.id)), u.addNotification(
      ut.t(
        "The layer <b>{{layersToRemove}}</b> has been removed because it cannot be displayed while the layer <b>{{layer}}</b> is displayed",
        {
          count: c.length,
          layersToRemove: c.map((m) => ut.t(m.name, { ns: "client" })).join(", "),
          layer: ut.t(l.name, { ns: "client" }),
          ns: "client"
        }
      ),
      Za.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = mt(), f = Yl();
    t(
      (c = l.metadata) == null ? void 0 : c.exclusion,
      (d = (h = u.bgLayer) == null ? void 0 : h.metadata) == null ? void 0 : d.exclusion
    ) && (u.setBgLayer(null), f.addNotification(
      ut.t(
        "Background has been deactivated because the layer {{layer}} cannot be displayed on top of it.",
        {
          layer: ut.t(l.name, { ns: "client" }),
          ns: "client"
        }
      ),
      Za.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var p;
    const c = Yt(), h = mt(), d = f ? c.layerTrees_3d : c.theme, m = ap.findById(l, d);
    if (m) {
      const g = ((p = m.metadata) == null ? void 0 : p.linked_layers) || [];
      u === !1 ? h.removeLayers(m.id, ...g) : (s(m), (f ? h.add3dLayers : h.addLayers)(
        e(m),
        ...g.map(
          (y) => e(
            ap.findById(parseInt(y, 10))
          )
        )
      ));
    }
  }
  return {
    initLayer: e,
    getLayerCurrentLabel: r,
    getLayerCurrentTime: i,
    handleExclusionLayers: s,
    toggleLayer: o
  };
}
class LC {
  styleSerialToStyle(e) {
    return e ? JSON.parse(decodeURIComponent(e)) || [] : [];
  }
  styleLocalStorageToStyle(e) {
    return e ? JSON.parse(e).medium || [] : [];
  }
  styleToSerial(e) {
    return e && e.length > 0 ? JSON.stringify(e) : "";
  }
  styleToLocalStorage(e) {
    return e && e.length > 0 ? JSON.stringify({ medium: e }) : "";
  }
}
const Yo = new LC();
function op(t, e) {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(r);
    }, e);
  };
}
function Vs(t) {
  return (t == null ? void 0 : t.trim()) && !isNaN(Number(t)) ? Number(t) : void 0;
}
function PC(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (n) => n !== null && !isNaN(Number(n)) ? parseFloat(n) : void 0
  )) || [];
}
function AC(t, e) {
  return (t == null ? void 0 : t.split(e).map(Sh)) || [];
}
function Sh(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function s0() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function hr(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
const kC = hr(/firefox/i);
hr(/safari/i) && !hr(/chrome/i) && hr(/android/i);
hr(/iP(ad|od|hone)/i);
hr(/chrome/i) && hr(/android/i);
hr(/chrome/i);
hr(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
hr(/Edge/i);
const yo = "ipv6", vo = "applogin", _o = "localforage", js = "debug", tu = "fid", di = "lang", nu = "layersOpen", ru = "address", Lf = "version", DC = "map_id", lp = "layers", up = "bgLayer", cp = "opacities", Ja = "theme", fp = "time", hp = "zoom", IC = "SRS", dp = "X", mp = "Y", iu = "serial", a0 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Pf = "lc", Af = "sliderRatio", o0 = "bgOpacity", RC = "layers_indices", pp = "layers_opacity", gp = "layers_visibility";
var Pt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(Pt || {});
class l0 {
}
class su extends l0 {
  static processRules(e) {
    return su.ruleUseLocalStorage(e) ? Pt.localStorage : Pt.permalink;
  }
  static processRulesForKey(e, n) {
    if (e === Ja && {}.VITE_DEPLOY_GHPAGES !== "true")
      return Pt.permalinkAsPath;
    if (a0.includes(e))
      return Pt.localStorage;
    if (e === iu)
      return Pt.permalink;
    if (e === nu)
      return Pt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [$C, FC, VC].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const $C = (t) => Object.keys(t).length === 0, FC = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(yo) || t.hasOwnProperty(vo) || t.hasOwnProperty(_o)), VC = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(yo) && t.hasOwnProperty(vo) && t.hasOwnProperty(_o);
class au extends l0 {
  static processRules() {
    return Pt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, n) {
    if (au.ruleUsePermalink(e))
      return Pt.permalink;
    if (e === nu || a0.includes(e))
      return Pt.localStorage;
    if (e === iu)
      return Pt.permalink;
    if (e === Ja)
      return Pt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      jC,
      GC,
      UC
    ].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const jC = (t) => t === Pf || t === Af, GC = (t) => t === Lf, UC = (t) => t === Ja && {}.VITE_DEPLOY_GHPAGES === "true";
class u0 {
  constructor() {
    at(this, "snappedUrl");
    this.snappedUrl = new URL(window.location.toString());
  }
  get length() {
    throw new Error("Method not implemented.");
  }
  clear() {
    throw new Error("Method not implemented.");
  }
  key(e) {
    throw new Error("Method key() not implemented. " + e);
  }
  getSnappedUrl() {
    return this.snappedUrl;
  }
  getSnappedParamsAsObj() {
    return this.getSnappedParams().reduce(
      (e, n) => {
        const [r, i] = n.split("=");
        return { ...e, [r]: i };
      },
      {}
    );
  }
  getSnappedParams() {
    return this.getSnappedUrl().search.replace("?", "").split("&").filter((e) => e.split("=")[1]);
  }
  setItem(e, n) {
    const r = new URLSearchParams(
      new URL(window.location.toString()).search
    );
    r.set(encodeURIComponent(e), encodeURIComponent(n));
    try {
      window.history.replaceState(null, "", "?" + r.toString());
    } catch {
    }
  }
  getItem(e) {
    const n = this.getSnappedUrl().searchParams.get(e);
    return n !== null ? decodeURIComponent(n) : n;
  }
  removeItem(e) {
    const n = new URLSearchParams(
      new URL(window.location.toString()).search
    );
    n.delete(e);
    try {
      window.history.replaceState(null, "", "?" + n.toString());
    } catch {
    }
  }
  encodeQueryParam(e, n) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(n)}`;
  }
}
const Oc = new u0();
class BC extends u0 {
  getItem(e) {
    const n = this.getSnappedUrl().pathname.split("/"), r = n.findIndex((i) => i === e);
    return n[r + 1];
  }
  setItem(e, n) {
    const r = new URL(window.location.toString()).search, i = `/${e}/${n}${r}`;
    try {
      window.history.replaceState(null, "", i);
    } catch {
    }
  }
}
const qC = new BC();
class WC {
  get length() {
    throw new Error("Method not implemented.");
  }
  clear() {
    throw new Error("Method not implemented.");
  }
  key(e) {
    throw new Error("Method key() not implemented. " + e);
  }
  removeItem(e) {
    const n = this.getWriteStorages(e);
    n == null || n.map(
      (r) => r.removeItem(e)
    );
  }
  setItem(e, n) {
    this.setValue(e, n);
  }
  getItem(e) {
    return this.getValue(e);
  }
  get paramKeys() {
    return Oc.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const n = (i = this.correspondingStorages(
      su.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), r = this.storageForKey(e, su, n);
    return r ? r.getItem(e) : null;
  }
  setValue(e, n) {
    const r = this.getWriteStorages(e);
    r == null || r.map(
      (i) => i.setItem(e, n)
    );
  }
  getWriteStorages(e) {
    const n = this.correspondingStorages(
      au.processRules()
    ), r = this.storageForKey(e, au);
    return r ? [r] : n;
  }
  storageForKey(e, n, r) {
    var s;
    const i = (s = this.correspondingStorages(
      n.processRulesForKey(e, this.paramKeys)
    )) == null ? void 0 : s.pop();
    return i != null ? i : r;
  }
  correspondingStorages(e) {
    if (e === Pt.permalinkAndLocalStorage)
      return [Oc, localStorage];
    if (e === Pt.localStorage)
      return [localStorage];
    if (e === Pt.permalink)
      return [Oc];
    if (e === Pt.permalinkAsPath)
      return [qC];
  }
}
const Xo = new WC();
function HC(t) {
  return zC(t) || YC(t) || XC(t) || KC(t);
}
const zC = (t) => Object.keys(t).length === 0, YC = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    yo,
    vo,
    _o,
    tu,
    di,
    ru,
    js
  ].some((n) => e.indexOf(n) !== -1);
}, XC = (t) => {
  const e = Object.keys(t), n = (i) => e.indexOf(i) !== -1, r = [
    [vo, _o],
    [js, tu],
    [di, tu],
    [js, di],
    [js, ru],
    [di, ru]
  ];
  return Object.keys(t).length === 2 && r.reduce(
    (i, s) => i || s.every(n),
    !1
  );
}, KC = (t) => {
  const e = Object.keys(t), n = (a) => e.indexOf(a) !== -1, r = [yo, vo, _o].every(
    n
  ), i = [js, tu, di].every(n), s = [js, ru, di].every(n);
  return Object.keys(t).length === 3 && (r || i || s);
};
class ZC {
  constructor() {
    at(this, "intialVersion");
    const e = Xo.paramKeys, n = this.getValue(Lf, Vs);
    this.intialVersion = n ? Math.max(2, Math.min(n, 3)) : HC(e) ? 3 : 2, this.setValue(Lf, 3);
  }
  getInitialVersion() {
    return this.intialVersion;
  }
  mapToEntity(e, n) {
    return n ? n(e) : e;
  }
  mapToStorage(e, n) {
    return n ? n(e) : String(e);
  }
  getValue(e, n) {
    return this.mapToEntity(Xo.getValue(e), n);
  }
  setValue(e, n, r) {
    Xo.setValue(e, this.mapToStorage(n, r));
  }
  removeItem(e) {
    Xo.removeItem(e);
  }
}
const Me = new ZC(), JC = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], Hn = () => ({
  bg_layers: [
    {
      icon_id: "route",
      vector_id: "roadmap",
      simple_style_class: "road",
      medium_style_class: "road",
      expert_style_class: "maputnik",
      id: 556,
      is_default: !0
    },
    {
      icon_id: "topo",
      vector_id: "topomap",
      medium_style_class: "topo",
      expert_style_class: "maputnik",
      id: 529
    },
    {
      icon_id: "topo_bw",
      vector_id: "topomap_gray",
      medium_style_class: "topo",
      expert_style_class: "maputnik",
      id: 502
    },
    {
      icon_id: "ortho",
      id: 530
    },
    {
      icon_id: "hybrid",
      id: 501
    },
    {
      icon_id: "blank",
      id: 0
    }
  ],
  bg_layer_theme_defaults: {
    tourisme: 502
  },
  simple_styles: {
    road: [
      {
        unlocalized_label: "Light grey",
        hillshade: !1,
        colors: [
          "#ffffff",
          "#ffffff",
          "#d6e0d7",
          "#e1e1e1",
          "#cccccc",
          "#f2f2f2"
        ],
        selected: !1
      },
      {
        unlocalized_label: "Dark grey",
        hillshade: !1,
        colors: [
          "#808080",
          "#808080",
          "#494b4a",
          "#505052",
          "#232426",
          "#454545"
        ],
        selected: !1
      },
      {
        unlocalized_label: "Dark sand",
        hillshade: !1,
        colors: [
          "#9e9375",
          "#9e9375",
          "#6b6249",
          "#403928",
          "#b8aa84",
          "#1a1814"
        ],
        selected: !1
      },
      {
        unlocalized_label: "Kids",
        hillshade: !1,
        colors: [
          "#f9c50d",
          "#ffffff",
          "#839836",
          "#d6d3ce",
          "#2a5ba8",
          "#eeeeee"
        ],
        selected: !1
      },
      {
        unlocalized_label: "Light mauve",
        hillshade: !1,
        colors: [
          "#f3edf5",
          "#f3edf5",
          "#9d7da8",
          "#caa9d1",
          "#613b5c",
          "#e5d3e6"
        ],
        selected: !1
      },
      {
        unlocalized_label: "Light Blue",
        hillshade: !1,
        colors: [
          "#dceaf5",
          "#dceaf5",
          "#5598cf",
          "#81b7e3",
          "#3b576e",
          "#b6cde0"
        ],
        selected: !1
      }
    ]
  },
  medium_default_styles: {
    road: [
      {
        label: "Roads primary",
        color: "#f7f7f7",
        lines: [
          "lu_road_trunk_primary",
          "lu_bridge_major",
          "lu_tunnel_major",
          "lu_road_major_motorway"
        ],
        visible: !0
      },
      {
        label: "Roads secondary",
        color: "#f7f7f7",
        lines: [
          "lu_road_minor",
          "lu_road_secondary_tertiary",
          "lu_bridge_minor",
          "lu_road_path",
          "lu_bridge_path",
          "lu_bridge_railway case",
          "lu_bridge_path case"
        ],
        visible: !0
      },
      {
        label: "Vegetation",
        color: "#B8D293",
        opacity: "1",
        fills: [
          "lu_landcover_wood",
          "lu_landcover_grass",
          "lu_landuse_stadium",
          "lu_landuse_cemetery"
        ],
        visible: !0
      },
      {
        label: "Buildings",
        color: "#D6AA85",
        opacity: "1",
        fillExtrusions: ["lu_building-3d_public", "lu_building-3d"],
        fills: ["lu_building", "lu_building_public"],
        lines: ["lu_bridge_railway", "lu_railway", "lu_tunnel_railway"],
        visible: !0
      },
      {
        label: "Water",
        color: "#94c1e1",
        lines: [
          "lu_waterway",
          "lu_waterway_tunnel",
          "lu_waterway_intermittent"
        ],
        fills: ["lu_water"],
        visible: !0
      },
      {
        label: "Background",
        color: "#e7e7e7",
        backgrounds: ["background"],
        visible: !0
      },
      {
        label: "Hillshade",
        hillshades: ["hillshade"],
        visible: !0
      }
    ],
    topo: [
      {
        label: "Primary Names",
        symbols: [
          "lu_place-label_other",
          "lu_place-label_city",
          "lu_place-label_canton",
          "lu_country-label-other",
          "lu_country-label",
          "place_label_other",
          "place_label_city",
          "country_label-other",
          "country_label"
        ],
        visible: !0
      },
      {
        label: "Secondary Names",
        symbols: [
          "lu_place-label_isolated",
          "lu_place-label_locality_forest",
          "lu_place-label_locality_lieudit"
        ],
        visible: !0
      },
      {
        label: "Transport",
        lines: [
          "lu_tunnel_track-casing",
          "lu_tunnel_major_motorway-casing",
          "lu_tunnel_railway_transit",
          "lu_tunnel_railway",
          "lu_tunnel_railway-hatching",
          "lu_tunnel_path",
          "lu_tunnel_track",
          "lu_tunnel_minor",
          "lu_tunnel_major_motorway",
          "lu_tunnel_secondary_tertiary",
          "lu_tunnel_trunk_primary",
          "lu_road_track-casing",
          "lu_road_minor-casing",
          "lu_road_major_motorway-casing",
          "lu_road_secondary_tertiary-casing",
          "lu_road_trunk_primary-casing",
          "lu_road_pier",
          "lu_road_path",
          "lu_road_track",
          "lu_road_minor",
          "lu_road_major_motorway",
          "lu_road_secondary_tertiary",
          "lu_road_trunk_primary",
          "lu_tram",
          "lu_tram-hatching",
          "lu_railway_transit",
          "lu_railway",
          "lu_railway-hatching",
          "lu_bridge_railway-casing",
          "lu_bridge_track-casing",
          "lu_bridge_path-casing",
          "lu_bridge_minor-casing",
          "lu_bridge_major_motorway-casing",
          "lu_bridge_secondary_tertiary-casing",
          "lu_bridge_trunk_primary-casing",
          "lu_bridge_railway",
          "lu_bridge_path",
          "lu_bridge_track",
          "lu_bridge_minor",
          "lu_bridge_major_motorway",
          "lu_bridge_secondary_tertiary",
          "lu_bridge_trunk_primary",
          "tunnel_track-casing",
          "tunnel_major_motorway-casing",
          "tunnel_railway_transit",
          "tunnel_railway_transit-hatching",
          "tunnel_railway",
          "tunnel_railway-hatching",
          "tunnel_path",
          "tunnel_track",
          "tunnel_minor",
          "tunnel_major_motorway",
          "tunnel_secondary_tertiary",
          "tunnel_trunk_primary",
          "road_track-casing",
          "road_minor-casing",
          "road_major_motorway-casing",
          "road_secondary_tertiary-casing",
          "road_trunk_primary-casing",
          "road_pier",
          "road_path",
          "road_track",
          "road_minor",
          "road_major_motorway",
          "road_secondary_tertiary",
          "road_trunk_primary",
          "railway-transit",
          "railway-transit-hatching",
          "railway",
          "railway-hatching",
          "bridge_railway-casing",
          "bridge_path-casing",
          "bridge_track_casing",
          "bridge_minor-casing",
          "bridge_major_motorway-casing",
          "bridge_secondary_tertiary-casing",
          "bridge_trunk_primary-casing",
          "bridge_railway",
          "bridge_path",
          "bridge_track",
          "bridge_minor",
          "bridge_major_motorway",
          "bridge_secondary_tertiary",
          "bridge_trunk_primary"
        ],
        symbols: [
          "lu_road_major-label",
          "lu_motorway-shield",
          "lu_road-shield"
        ],
        visible: !0
      },
      {
        label: "Vegetation",
        fills: [
          "lu_landuse_stadium",
          "lu_landuse_cemetery",
          "lu_landuse_gras",
          "lu_landuse_park",
          "lu_landuse_park-outline",
          "lu_landuse_vineyard",
          "lu_landuse_orchard",
          "lu_landuse_wood",
          "landcover_grass",
          "landcover_wood"
        ],
        visible: !0
      },
      {
        label: "Electricity",
        fills: ["lu_power_station", "lu_power_pylone"],
        lines: ["lu_power_line", "lu_power_station-outline"],
        symbols: ["lu_power_station-label", "lu_eolienne"],
        visible: !0
      },
      {
        label: "Contours and Height Points",
        lines: [
          "lu_contour-100",
          "lu_contour-50",
          "lu_contour-20",
          "lu_contour-10",
          "lu_contour"
        ],
        symbols: [
          "lu_contour-label-100",
          "lu_contour-label-20",
          "lu_apex-label"
        ],
        visible: !0
      },
      {
        label: "Hillshade",
        hillshades: ["lu_hillshade"],
        visible: !0
      }
    ]
  },
  http_bg_server: "wmts{1-2}",
  https_bg_server: "wmts{3-4}",
  bg_wmts_server_path: "mapproxy_4_v3/wmts/{Layer}",
  bg_wmts_tile_template: "{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}",
  bg_layer_projection: "EPSG:3857",
  olcs_extent: [5.31, 49.38, 6.64, 50.21],
  olcs_extent_projection: "EPSG:3857",
  bg_layer_resolutions: [
    156543.033928,
    78271.516964,
    39135.758482,
    19567.879241,
    9783.9396205,
    4891.96981025,
    2445.98490513,
    1222.99245256,
    611.496226281,
    305.748113141,
    152.87405657,
    76.4370282852,
    38.2185141426,
    19.1092570713,
    9.55462853565,
    4.77731426782,
    2.38865713391,
    1.19432856696,
    0.597164283478,
    0.298582141739,
    0.1492910708695,
    0.07464553543475
  ],
  bg_matrix_ids: [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21"
  ]
});
function ta() {
  function t(p) {
    const g = new URLSearchParams(document.location.search), v = g.get("embeddedserver"), y = g.get("embeddedserverprotocol") || "http";
    return (v ? `${y}://${v}` : "https://vectortiles.geoportail.lu") + `/styles/${p}/style.json`;
  }
  function e(p) {
    return `https://vectortiles.geoportail.lu/styles/${p}/{z}/{x}/{y}.png`;
  }
  function n(p) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(p);
  }
  const r = dr();
  function i(p, g) {
    if (p == null)
      return;
    const v = /* @__PURE__ */ new Map();
    r.bgVectorSources.forEach((y, E) => {
      if (E === p.id) {
        const w = { ...y, xyz_custom: g };
        v.set(E, w);
      } else
        v.set(E, y);
    }), r.setBgVectorSources(v);
  }
  function s(p, g, v = !1) {
    const y = "", E = t(g), w = e(g), S = {
      label: p,
      defaultMapBoxStyle: E,
      defaultMapBoxStyleXYZ: w,
      xyz: w,
      xyz_custom: y,
      style: E
    }, P = new URLSearchParams(window.location.search).get("serial"), k = new URLSearchParams(window.location.search).get(
      "serialLayer"
    );
    if (P)
      n(P) && console.log(k);
    else if (!v)
      return Promise.resolve(S);
    return Promise.resolve(S);
  }
  function a(p) {
    const g = Hn().medium_default_styles.road;
    if (p) {
      p.colors.forEach((y, E) => {
        g[E].color = y;
      });
      const v = g.findIndex(
        (y) => y.label === "Hillshade"
      );
      g[v].visible = p.hillshade;
    }
    return g;
  }
  function o(p, g, v) {
    if (!p || !g.get(p.id))
      return;
    const y = JSON.parse(
      JSON.stringify(g.get(p.id))
    );
    if (!!y && !(!y || !y.layers))
      return v && v.forEach((E) => {
        y == null || y.layers.forEach((w, S) => {
          for (const P of JC)
            if ((E[`${P}s`] || []).includes(w.id)) {
              const C = Object.assign(
                {},
                y.layers[S].paint
              );
              E.color && (C[`${P}-color`] = E.color, C[`${P}-opacity`] = 1, y.layers[S].paint = C), y.layers[S].layout = Object.assign(
                {},
                y.layers[S].layout,
                { visibility: E.visible ? "visible" : "none" }
              );
            }
        });
      }), y;
  }
  function l(p, g) {
    if (p === null)
      return Promise.resolve();
    {
      const v = `${g.get("delete")}?id=${p}`;
      return fetch(v).catch(() => "");
    }
  }
  function u(p, g, v) {
    return l(g, v).then(() => {
      const y = new FormData(), E = JSON.stringify(p), w = new Blob([E], { type: "application/json" });
      y.append("style", w, "style.json");
      const S = {
        method: "POST",
        body: y
      };
      return fetch(v.get("upload") || "", S).then((P) => P.json()).then((P) => P.id).catch((P) => console.warn(P));
    });
  }
  function f(p, g) {
    if (!g)
      return;
    const v = p.maplibreMap;
    !v || (v.loaded() ? v.setStyle(g) : new Promise((y) => v.once("data", y)).then(
      () => v.setStyle(g)
    ));
  }
  function c(p) {
    const g = Hn().bg_layers.find(
      (v) => v.id == (p == null ? void 0 : p.id)
    );
    return g == null ? void 0 : g.vector_id;
  }
  function h(p) {
    const g = Hn().bg_layers.find(
      (v) => v.id == (p == null ? void 0 : p.id)
    );
    return (g == null ? void 0 : g.vector_id) !== void 0;
  }
  function d(p) {
    const g = Hn().bg_layers.find(
      (v) => v.id == (p == null ? void 0 : p.id)
    );
    return {
      isEditable: (g == null ? void 0 : g.vector_id) !== void 0,
      hasSimpleStyle: (g == null ? void 0 : g.simple_style_class) !== void 0,
      hasAdvancedStyle: (g == null ? void 0 : g.medium_style_class) !== void 0,
      hasExpertStyle: (g == null ? void 0 : g.expert_style_class) !== void 0
    };
  }
  function m(p, g) {
    return g.map(
      (v) => Object.assign(v, {
        selected: v.colors.every(
          (y, E) => {
            var w;
            return ((w = p[E]) == null ? void 0 : w.color) === y;
          }
        )
      })
    );
  }
  return {
    getDefaultMapBoxStyleUrl: t,
    getDefaultMapBoxStyleXYZ: e,
    setConfigForLayer: s,
    getRoadStyleFromSimpleStyle: a,
    applyDefaultStyle: o,
    applyConsolidatedStyle: f,
    getVectorId: c,
    setCustomStyleSerial: i,
    unregisterStyle: l,
    registerStyle: u,
    checkSelection: m,
    isLayerStyleEditable: h,
    getStyleCapabilitiesFromLayer: d
  };
}
const dr = ls(
  "style",
  () => {
    const t = ta(), e = et(), n = et(/* @__PURE__ */ new Map()), r = et(
      /* @__PURE__ */ new Map()
    ), i = et(!1), s = et(null), a = et(), o = et(
      /* @__PURE__ */ new Map([
        ["get", "/getvtstyle"],
        ["upload", "/uploadvtstyle"],
        ["delete", "/deletevtstyle"]
      ])
    ), l = [];
    Hn().bg_layers.forEach((v) => {
      if (v.vector_id) {
        const y = t.setConfigForLayer(
          v.icon_id,
          v.vector_id
        );
        l.push(
          y.then((E) => ({ id: v.id, config: E }))
        );
      }
    }), Promise.all(l).then((v) => {
      const y = /* @__PURE__ */ new Map();
      v.forEach((E) => y.set(E.id, E.config)), n.value = y;
    });
    function u(v, y) {
      o.value.set(v, y);
    }
    function f(v) {
      n.value = v;
    }
    function c(v) {
      const y = /* @__PURE__ */ new Map();
      r.value.forEach((E, w) => {
        w !== v && y.set(w, E);
      }), r.value = y;
    }
    function h(v, y) {
      const E = /* @__PURE__ */ new Map();
      r.value.forEach(
        (w, S) => E.set(S, w)
      ), E.set(v, y), r.value = E;
    }
    function d(v) {
      e.value = t.getRoadStyleFromSimpleStyle(v), p();
    }
    function m(v) {
      e.value = v, p();
    }
    function p() {
      i.value = !1;
    }
    function g() {
      i.value = !0;
    }
    return {
      bgStyle: e,
      bgVectorSources: n,
      bgVectorBaseStyles: r,
      isExpertStyleActive: i,
      appliedStyle: a,
      removeBaseStyle: c,
      setBaseStyle: h,
      setBgVectorSources: f,
      setRegisterUrl: u,
      setSimpleStyle: d,
      setStyle: m,
      disableExpertStyle: p,
      enableExpertStyle: g,
      styleSerial: s,
      registerUrls: o
    };
  },
  {}
);
class QC {
  constructor() {
    at(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = dr();
    let n, r = !1;
    n = _n(() => {
      e.bgVectorSources && (this.restoreStyle(!1), r && this.persistStyle(), r = !0, n && n());
    });
  }
  persistStyle() {
    const e = dr(), { bgStyle: n } = He(e);
    this.styleWatcher || (this.styleWatcher = Je(
      n,
      (r, i) => {
        if (i !== r) {
          const s = mt();
          s.bgLayer && (Me.setValue(
            s.bgLayer.name,
            r || [],
            Yo.styleToLocalStorage
          ), Me.setValue(
            iu,
            r || [],
            Yo.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const n = dr();
    n.setStyle(null);
    const i = mt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Me.getValue(
        iu,
        Yo.styleSerialToStyle
      )), s.length === 0 && (s = Me.getValue(
        i.name,
        Yo.styleLocalStorageToStyle
      )), s && s.length > 0 && n.setStyle(s);
    }
  }
}
const c0 = new QC(), eL = "https://map.geoportail.lu/ogcproxywms", tL = "https://map.geoportail.lu/httpsproxy";
class nL {
  constructor() {
    at(this, "_wmsProxyUrl", eL);
    at(this, "_remoteProxyUrl", tL);
  }
  get wmsProxyUrl() {
    return this._wmsProxyUrl === void 0 && console.warn("Warning: proxyWmsUrl is not set."), this._wmsProxyUrl;
  }
  get remoteProxyUrl() {
    return this._remoteProxyUrl === void 0 && console.warn("Warning: remoteProxy is not set."), this._remoteProxyUrl;
  }
  getProxyfiedUrl(e) {
    return e.indexOf("httpsproxy") > 0 ? e : this.remoteProxyUrl + "?url=" + encodeURIComponent(e);
  }
  init_v3(e, n) {
    e && (this._wmsProxyUrl = e), n && (this._remoteProxyUrl = n);
  }
}
const Ys = new nL();
function f0() {
  return u_(
    [5.31, 49.38, 6.64, 50.21],
    Jy,
    Aa
  );
}
function h0(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && s0();
}
function rL(t, e = "https") {
  const n = t.imageType.split("/")[1], r = Me.getValue(yo, Sh) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${r}/mapproxy_4_v3/wmts/{Layer}${h0(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${n}`;
}
class iL {
  createOlLayer(e) {
    const { name: n, layers: r, imageType: i, url: s, id: a } = e, o = new Up({
      url: s || Ys.wmsProxyUrl,
      hidpi: s0(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: r
      },
      ...s != null || Ys.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new m_({
      properties: {
        "olcs.extent": f0(),
        label: n,
        id: a
      },
      source: o
    });
  }
  setLayerTime(e, n) {
    const r = e.getParams();
    r.TIME = n, e.updateParams(r);
  }
}
const d0 = new iL(), sL = [
  156543.033928,
  78271.516964,
  39135.758482,
  19567.879241,
  9783.9396205,
  4891.96981025,
  2445.98490513,
  1222.99245256,
  611.496226281,
  305.748113141,
  152.87405657,
  76.4370282852,
  38.2185141426,
  19.1092570713,
  9.55462853565,
  4.77731426782,
  2.38865713391,
  1.19432856696,
  0.597164283478,
  0.298582141739,
  0.1492910708695,
  0.07464553543475
], aL = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21"
];
class oL {
  createOlLayer(e) {
    const { name: n, imageType: r, id: i } = e, s = h0(e), a = sl(Aa), o = a.getExtent(), l = new Bp({
      url: rL(e),
      tilePixelRatio: s ? 2 : 1,
      layer: n,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: r,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new g_({
        origin: y_(o),
        extent: o,
        resolutions: sL,
        matrixIds: aL
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new p_({
      source: l,
      properties: {
        "olcs.extent": f0(),
        label: n,
        id: i
      }
    });
  }
  setLayerTime(e, n, r) {
    const i = e.get("metadata").time_layers[r], s = n.getUrls();
    if (s) {
      const a = this.transformUrls(s, i);
      n.setUrls(a), e.set("label", i), e.set("layer_name", i);
    }
  }
  transformUrls(e, n) {
    return e.map(
      (r) => r.replace(
        /[/][^/]*[/]{TileMatrixSet}/,
        `/${n}/{TileMatrixSet}`
      )
    );
  }
}
const m0 = new oL();
class p0 extends v_ {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.accessToken, delete n.style, delete n.container, delete n.xyz, super(n), this.set("xyz", e.maplibreOptions.xyz), this.set("xyz_custom", e.maplibreOptions.xyz_custom), this.xyz_ = e.xyz, e.accessToken && (zh.accessToken = e.accessToken), this.map_ = new zh.Map({
      container: e.maplibreOptions.container,
      style: e.maplibreOptions.style,
      attributionControl: !1,
      interactive: !1
    }), this.maplibreMap = this.map_;
  }
  getMapBoxMap() {
    return this.map_;
  }
  getMapLibreMap() {
    return this.map_;
  }
  render(e) {
    const n = this.map_.getCanvas(), r = e.viewState;
    n.style.position = "absolute";
    const i = this.getVisible();
    n.style.display = i ? "block" : "none";
    const s = this.getOpacity().toString();
    s !== n.style.opacity && (n.style.opacity = s);
    const a = r.rotation;
    return a && this.map_.rotateTo(__(-a), {
      animate: !1
    }), this.map_.jumpTo({
      center: b_(r.center),
      zoom: r.zoom - 1,
      animate: !1
    }), this.map_._frame && (this.map_._frame.cancel(), this.map_._frame = null), this.map_._render(), n;
  }
  setLayerVisibility(e, n) {
    this.map_.setLayoutProperty(
      e,
      "visibility",
      n ? "visible" : "none"
    );
  }
  getStyle() {
    return this.map_.getStyle();
  }
  getXYZ() {
    return this.get("xyz");
  }
}
class lL {
  createOlLayer(e, n) {
    const r = Ir(), { id: i, metadata: s, name: a } = e, o = n.get(i);
    if (!o)
      return;
    const l = {
      container: r.getOlMap().getTarget(),
      ...o
    }, u = new p0({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = dr();
    return u != null && u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u == null ? void 0 : u.getMapLibreMap().getStyle()) : new Promise(
      (c) => u == null ? void 0 : u.getMapLibreMap().once("data", c)
    ).then(
      () => f.setBaseStyle(i, u == null ? void 0 : u.getMapLibreMap().getStyle())
    ), u;
  }
}
const uL = new lL();
class cL {
  createOlLayer(e, n) {
    let r;
    if (n && (r = uL.createOlLayer(e, n)), !r)
      switch (e.type) {
        case "WMS":
          r = d0.createOlLayer(e);
          break;
        case "WMTS":
        case "BG WMTS":
          r = m0.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return r.set("id", e.id), r.set("label", e.name), r.set("layer_name", e.name), r.set("metadata", e.metadata), r.set("queryable_id", e.id), r.set("current_time", Kn().getLayerCurrentTime(e)), r.set("time", e.time), r.setOpacity(e.opacity), r;
  }
}
const yp = new cL();
class fL {
  setLayerTime(e, n) {
    const r = e.getSource();
    r instanceof Up && d0.setLayerTime(r, n), r instanceof Bp && m0.setLayerTime(e, r, n);
  }
}
const hL = new fL(), Ko = -200;
function g0() {
  function t(d, m) {
    if (!m)
      return;
    const p = u(m);
    d.addLayer(p);
  }
  function e(d, m) {
    return d.getLayers().getArray().find((p) => p.get("id") === m);
  }
  function n(d, m) {
    const p = e(d, m);
    p && d.removeLayer(p);
  }
  function r(d, m) {
    const p = d.getLayers().getArray();
    m.forEach((g, v) => {
      const y = p.find(
        (E) => E.get("id") === g.id
      );
      y == null || y.setZIndex(v + 1);
    });
  }
  function i(d, m, p) {
    const g = d.getLayers().getArray().find((v) => v.get("id") === m);
    g && g.setOpacity(p);
  }
  function s(d, m) {
    const p = Kn(), g = e(d, m.id), v = p.getLayerCurrentTime(m);
    v && g && hL.setLayerTime(g, v);
  }
  function a(d) {
    la.delete(d);
  }
  function o(d) {
    return la.has(d.id);
  }
  function l(d, m) {
    la.set(d, m);
  }
  function u(d) {
    const m = d.id, p = la.get(m);
    if (p)
      return p;
    {
      const g = yp.createOlLayer(d);
      return l(m, g), g;
    }
  }
  function f(d) {
    return d && la.get(d.id) || null;
  }
  function c(d, m) {
    const g = d.getLayers().getArray().find((v) => v.getZIndex() === Ko);
    g && m(g);
  }
  function h(d, m, p) {
    var w;
    const g = d.getLayers(), v = g.getArray().findIndex((S) => S.getZIndex() === Ko), y = (w = g.getArray()[v]) == null ? void 0 : w.get("id");
    let E;
    m && (o(m) ? E = f(m) : (E = yp.createOlLayer(
      m,
      p
    ), l(m.id, E))), v >= 0 ? E ? (E.setZIndex(Ko), g.setAt(v, E)) : g.removeAt(v) : E && (E.setZIndex(Ko), d.addLayer(E)), y && y !== (m == null ? void 0 : m.id) && c0.restoreStyle(!0);
  }
  return {
    addLayer: t,
    findLayer: e,
    removeLayer: n,
    removeFromCache: a,
    reorderLayers: r,
    setLayerOpacity: i,
    setLayerTime: s,
    getLayerFromCache: f,
    setBgLayer: h,
    applyOnBgLayer: c
  };
}
class dL {
  constructor(e) {
    at(this, "previousLayers");
    at(this, "previousVectorSources");
    const n = mt(), r = dr(), i = Ir(), s = ta(), a = g0(), { appliedStyle: o } = He(r);
    Je(
      () => n.layers,
      (l) => {
        const u = {
          layers: this.previousLayers
        }, f = {
          layers: l
        }, c = i.getRemovedLayers(
          f,
          u
        ), h = i.getAddedLayers(
          f,
          u
        ), d = i.getMutatedLayers(
          f,
          u
        );
        c.forEach((m) => a.removeLayer(e, m.id)), h.forEach((m) => {
          a.addLayer(e, m.layer), a.setLayerTime(e, m.layer);
        }), d.forEach((m) => {
          a.setLayerOpacity(e, m.id, m.opacity), a.setLayerTime(e, m);
        }), f.layers && a.reorderLayers(e, f.layers), this.previousLayers = l;
      }
    ), Je(
      () => n.bgLayer,
      (l) => l !== void 0 && a.setBgLayer(e, l, r.bgVectorSources)
    ), _n(() => {
      r.isExpertStyleActive || (o.value = s.applyDefaultStyle(
        n.bgLayer,
        r.bgVectorBaseStyles,
        r.bgStyle
      ));
    }), Je(o, (l) => {
      r.bgStyle === null && !r.isExpertStyleActive ? s.unregisterStyle(r.styleSerial, r.registerUrls).then(r.styleSerial = null) : s.registerStyle(l, r.styleSerial, r.registerUrls).then((u) => {
        var c;
        r.styleSerial = u;
        const f = (c = n == null ? void 0 : n.bgLayer) == null ? void 0 : c.id;
        (n == null ? void 0 : n.bgLayer) && f !== void 0 && u !== void 0 && (a.applyOnBgLayer(e, (h) => {
          h.set(
            "xyz_custom",
            s.getDefaultMapBoxStyleXYZ(u)
          );
        }), a.setBgLayer(
          e,
          n == null ? void 0 : n.bgLayer,
          r.bgVectorSources
        ));
      }), a.applyOnBgLayer(
        e,
        (u) => s.applyConsolidatedStyle(u, l)
      );
    }), Je(
      () => r.bgVectorSources,
      (l) => {
        var u;
        for (const f of l.keys())
          (!this.previousVectorSources || this.previousVectorSources.get(f) !== l.get(f)) && (a.removeFromCache(f), f === ((u = n == null ? void 0 : n.bgLayer) == null ? void 0 : u.id) && a.setBgLayer(e, n == null ? void 0 : n.bgLayer, l));
        this.previousVectorSources = l;
      }
    );
  }
}
const mL = {
  0: 8,
  1: 9,
  2: 9,
  3: 10,
  4: 11,
  5: 12,
  6: 13,
  7: 14,
  8: 16,
  9: 17,
  10: 18,
  11: 19,
  12: 20,
  13: 21
};
class pL {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = Ir().getOlMap().getView(), n = () => {
      const r = e.getZoom();
      Me.setValue(hp, r ? Math.ceil(r) : null);
    };
    n(), Yh.listen(
      e,
      "change:resolution",
      op(n, 300)
    );
  }
  persistXY() {
    const e = Ir().getOlMap().getView(), n = () => {
      const r = e.getCenter();
      Me.setValue(dp, r ? Math.round(r[0]) : null), Me.setValue(mp, r ? Math.round(r[1]) : null);
    };
    n(), Yh.listen(
      e,
      E_.PROPERTYCHANGE,
      op(n, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = Ir().getOlMap().getView(), n = Me.getValue(hp, Vs), r = Me.getInitialVersion(), i = Me.getValue(dp, Vs), s = Me.getValue(mp, Vs), a = Me.getValue(IC), o = c_(
      q2,
      Aa
    );
    let l, u;
    n !== void 0 ? u = r === 3 ? Number(n) : mL[n] : u = 8, i != null && s != null ? r === 3 && a != null ? l = Hh([i, s], a, Aa) : l = r === 3 ? [i, s] : o([s, i], void 0, 2) : l = Hh(
      [6, 49.7],
      Jy,
      Aa
    ), e.setCenter(l), e.setZoom(u);
  }
}
const gL = new pL(), yL = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, vL = /* @__PURE__ */ he({
  __name: "attribution-control",
  setup(t) {
    const e = mt(), n = Se("");
    return _n(() => {
      var r, i;
      n.value = ((i = (r = e.bgLayer) == null ? void 0 : r.metadata) == null ? void 0 : i.attribution) || "";
    }), (r, i) => {
      const s = rh("dompurify-html");
      return n.value ? $l((A(), V("div", yL, null, 512)), [
        [s, n.value]
      ]) : $("v-if", !0);
    };
  }
}), _L = /* @__PURE__ */ pe(vL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/attribution-control.vue"]]);
function bo(t, e) {
  const n = new t(e), r = Ir(), i = Ds("olMap");
  return bn(() => {
    i.addControl(n), i.changed();
  }), wi(() => {
    const s = r.getOlMap();
    s.removeControl(n), s.changed();
  }), {
    control: n
  };
}
const bL = ["title"], EL = /* @__PURE__ */ he({
  __name: "location-control",
  props: {
    className: { type: String, required: !1, default: "location-button" },
    label: { type: String, required: !1, default: "\uE800" },
    tipLabel: { type: String, required: !1, default: "Location" }
  },
  setup(t) {
    const e = t, { t: n } = Ze(), r = Se(null);
    function i() {
    }
    return bn(
      () => bo(Hp, { ...e, target: r })
    ), (s, a) => (A(), V("div", {
      ref_key: "controlElement",
      ref: r,
      class: Ce(`tracker-off ${e.className} ${b(qp)} ${b(Wp)}`)
    }, [
      L("button", {
        title: b(n)(e.tipLabel),
        onClick: i
      }, ue(e.label), 9, bL)
    ], 2));
  }
}), wL = /* @__PURE__ */ pe(EL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/location-control.vue"]]), xL = ["title"], SL = /* @__PURE__ */ he({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = t, n = mt(), { t: r } = Ze(), i = Se(null);
    bn(
      () => bo(Hp, { ...e, target: i })
    );
    const s = () => {
      n.setIs3dActive(!n.is3dActive);
    };
    return (a, o) => (A(), V("div", {
      ref_key: "controlElement",
      ref: i,
      class: Ce(`${e.className} ${b(qp)} ${b(Wp)} ${b(n).is3dActive ? "active" : ""}`)
    }, [
      L("button", {
        title: b(r)(e.tipLabel),
        onClick: s
      }, ue(e.label), 9, xL)
    ], 2));
  }
}), OL = /* @__PURE__ */ pe(SL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/map-3d.vue"]]), ML = /* @__PURE__ */ he({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return bo(w_, t), (n, r) => $("v-if", !0);
  }
}), TL = /* @__PURE__ */ pe(ML, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/fullscreen-control.vue"]]), NL = /* @__PURE__ */ he({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return bo(x_, t), (n, r) => $("v-if", !0);
  }
}), CL = /* @__PURE__ */ pe(NL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/zoom-control.vue"]]);
class LL extends S_ {
  constructor(n) {
    super(n);
    at(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const PL = /* @__PURE__ */ he({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: null, required: !0 }
  },
  setup(t) {
    return bo(LL, t), (n, r) => $("v-if", !0);
  }
}), AL = /* @__PURE__ */ pe(PL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/zoom-to-extent-control.vue"]]), kL = /* @__PURE__ */ he({
  __name: "map-container",
  props: {
    v4_standalone: { type: Boolean, required: !1, default: !1 }
  },
  setup(t) {
    const e = Ir(), n = Se(null), r = e.createMap(), i = [
      425152.9429259216,
      632446599999133e-8,
      914349.9239510496,
      6507914867875754e-9
    ];
    return bn(() => {
      n.value && (new dL(r), gL.bootstrap(), r.setTarget(n.value), window.olMap = r);
    }), Dg("olMap", r), (s, a) => (A(), V("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: n,
      class: "h-full w-full bg-white relative"
    }, [
      ne(CL),
      ne(AL, { extent: i }),
      ne(TL),
      ne(_L),
      t.v4_standalone ? (A(), je(OL, { key: 0 })) : $("v-if", !0),
      ne(wL)
    ], 512));
  }
}), DL = /* @__PURE__ */ pe(kL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map/map-container.vue"]]), IL = "fr", RL = !0, $L = !1, FL = !1, _t = ls(
  "app",
  () => {
    const t = Se(IL), e = Se(RL), n = Se($L), r = Se(FL), i = Se(), s = Se(), a = Se(!1);
    function o(p) {
      t.value = p;
    }
    function l(p) {
      e.value = p, p || (r.value = !1, n.value = !1);
    }
    function u(p) {
      n.value = p, p && (r.value = !1);
    }
    function f(p) {
      r.value = p;
    }
    function c(p) {
      s.value = p;
    }
    function h(p) {
      i.value = p;
    }
    function d() {
      a.value = !0;
    }
    function m() {
      a.value = !1;
    }
    return {
      lang: t,
      layersOpen: e,
      myLayersTabOpen: n,
      themeGridOpen: r,
      mapId: i,
      styleEditorOpen: a,
      remoteLayersOpen: s,
      setLang: o,
      setLayersOpen: l,
      setMyLayersTabOpen: u,
      setThemeGridOpen: f,
      setRemoteLayersOpen: c,
      setMapId: h,
      openStyleEditorPanel: d,
      closeStyleEditorPanel: m
    };
  },
  {}
), ou = {
  name: "blank",
  id: 0
};
function y0() {
  const t = _t(), { mapId: e } = He(t), n = es(), r = mt(), i = Kn(), s = me(() => {
    var c;
    if (!e.value) {
      const h = (c = Yt().theme) == null ? void 0 : c.name;
      if (h)
        return Hn().bg_layer_theme_defaults[h] || l();
    }
    return l();
  });
  function a(c) {
    const h = n.findBgLayerById(c);
    o(h || null);
  }
  function o(c) {
    if (c) {
      if (c.type === "WMTS" || c.type === "BG WMTS")
        c.type = "BG WMTS";
      else if (c.type === "BG MVT")
        console.log(`passed through MVT layer ${c.name}`);
      else
        throw new Error(
          `Only WMTS and MVT BG layers are currently implemented (not ${c.type} for ${c.name})`
        );
      i.handleExclusionLayers(c), r.setBgLayer(i.initLayer(c));
    } else
      r.setBgLayer(null);
  }
  function l() {
    var c;
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || ou.id;
  }
  function u() {
    return ou.id;
  }
  function f() {
    return Hn().bg_layers;
  }
  return {
    setBgLayer: a,
    setMapBackground: o,
    getBgLayersFromConfig: f,
    getNullId: u,
    getDefaultSelectedId: l,
    defaultSelectedBgId: s
  };
}
const VL = ["title"], jL = /* @__PURE__ */ he({
  __name: "background-selector-item",
  props: {
    bgTitle: {
      type: String,
      default: ""
    },
    bgName: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, { t: n } = Ze(), r = me(() => {
      const s = n(e.bgTitle), a = e.bgTitle.length > 0, o = `${n("Background layer:")} ${n(e.bgName)}`;
      return `${s}${a ? " - " : ""}${o}`;
    }), i = me(
      () => `h-full w-full rounded-sm lux-bg-sel-icon
        lux-bg-sel-${e.bgName}
        bg-${e.bgName}_sm
        md:bg-${e.bgName}
        hd:bg-${e.bgName}_sm_hi
        hd_md:bg-${e.bgName}_hi`
    );
    return (s, a) => (A(), V("button", {
      title: b(r),
      class: Ce(b(i))
    }, null, 10, VL));
  }
}), vp = /* @__PURE__ */ pe(jL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/background-selector/background-selector-item.vue"]]), GL = {
  key: 0,
  class: "flex flex-row-reverse"
}, UL = /* @__PURE__ */ he({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, { t: n } = Ze(), r = y0(), i = mt(), s = Yt(), { bgLayer: a, is3dMesh: o } = He(i), l = Se(e.isOpen), u = Se([]), f = me(
      () => {
        var m, p;
        return (p = (m = a.value) == null ? void 0 : m.id) != null ? p : r.getNullId();
      }
    ), c = me(
      () => {
        var m, p;
        return (p = (m = u.value) == null ? void 0 : m.find((g) => g.id === f.value)) == null ? void 0 : p.name;
      }
    );
    Je(
      () => s.bgLayers,
      (m) => {
        u.value = Hn().bg_layers.map(
          (p) => Object.assign(
            {
              id: p.id
            },
            m.find((g) => p.id === g.id),
            {
              name: p.icon_id
            }
          )
        );
      },
      { immediate: !0 }
    ), Je(
      () => i.bgLayer,
      (m, p) => {
        const g = i.layers;
        p === void 0 && m === null && (g == null ? void 0 : g.length) === 0 && (r.setBgLayer(r.defaultSelectedBgId.value), m === null && Yl().addNotification(
          n(
            "Aucune couche n'\xE9tant d\xE9finie pour cette carte, une couche de fond a automatiquement \xE9t\xE9 ajout\xE9e.",
            { ns: "client" }
          )
        ));
      }
    );
    function h(m) {
      r.setBgLayer(m.id), l.value = !1;
    }
    function d() {
      l.value = !l.value;
    }
    return (m, p) => b(o) ? $("v-if", !0) : (A(), V("div", GL, [
      L("div", {
        class: Ce(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ne(vp, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": b(c),
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      L("div", {
        class: Ce(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (A(!0), V(Ve, null, Pn(u.value, (g) => (A(), V("div", {
          key: g.id,
          class: Ce([
            "lux-bg-sel hover:bg-cyan-600",
            g.id === b(f) ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ne(vp, {
            "bg-name": g.name,
            onClick: (v) => h(g)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), BL = /* @__PURE__ */ pe(UL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/background-selector/background-selector.vue"]]), qL = /* @__PURE__ */ L("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), WL = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, HL = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, zL = { class: "text-xl" }, YL = /* @__PURE__ */ L("span", { "aria-hidden": "true" }, "\xD7", -1), XL = [
  YL
], KL = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, ZL = { class: "flex flex-row justify-end" }, JL = /* @__PURE__ */ he({
  __name: "modal-dialog",
  props: {
    footer: {
      type: Boolean,
      default: !0
    },
    maxHeight: {
      type: Boolean,
      default: !1
    },
    title: String
  },
  emits: ["close"],
  setup(t) {
    const { t: e } = Ze(), n = Se();
    bn(() => {
      n.value.focus();
    });
    const r = et(!0);
    function i() {
      r.value = !1;
    }
    return (s, a) => (A(), je(ey, { to: "body" }, [
      $(" backdrop "),
      qL,
      $(" modal "),
      ne(Du, {
        appear: "",
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "transform opacity-0 -translate-y-60",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "transform opacity-0 -translate-y-60",
        onAfterLeave: a[3] || (a[3] = (o) => s.$emit("close"))
      }, {
        default: ci(() => [
          b(r) ? (A(), V("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: n,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = or(ar((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            L("div", WL, [
              $(" header (title)"),
              L("div", HL, [
                L("h4", zL, ue(t.title), 1),
                L("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, XL)
              ]),
              $(" content slot "),
              L("div", {
                class: Ce(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                Bg(s.$slots, "content")
              ], 2),
              $(" footer (optional)"),
              t.footer ? (A(), V("div", KL, [
                L("div", ZL, [
                  L("button", {
                    type: "button",
                    class: "lux-btn",
                    "data-dismiss": "modal",
                    onClick: a[1] || (a[1] = (o) => i())
                  }, ue(b(e)("Close", { ns: "client" })), 1)
                ])
              ])) : $("v-if", !0)
            ])
          ], 544)) : $("v-if", !0)
        ]),
        _: 3
      })
    ]));
  }
}), v0 = /* @__PURE__ */ pe(JL, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/modal-dialog.vue"]]), Oh = ls(
  "metadata",
  () => {
    const t = Se();
    function e(r) {
      t.value = r;
    }
    function n() {
      t.value = void 0;
    }
    return {
      metadataId: t,
      setMetadataId: e,
      clearMetadataId: n
    };
  },
  {}
), QL = ["aria-expanded"], eP = { class: "leading-6" }, tP = /* @__PURE__ */ he({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, n) => (A(), V(Ve, null, [
      L("button", {
        onClick: n[0] || (n[0] = (r) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": t.expanded
      }, [
        L("div", {
          class: Ce(["grow", t.expanded ? "text-white" : "text-secondary"])
        }, ue(t.title), 3),
        L("div", eP, [
          L("div", {
            class: Ce(["fa fa-sharp fa-solid group-hover:text-white text-primary", t.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, QL),
      L("div", {
        class: Ce(t.expanded ? "" : "hidden")
      }, [
        Bg(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), wl = /* @__PURE__ */ pe(tP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/expandable-panel.vue"]]), nP = {
  class: "mb-px",
  key: "node.id"
}, rP = ["data-cy"], iP = ["aria-expanded", "data-cy"], sP = { class: "grow" }, aP = { class: "leading-6" }, oP = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, lP = ["data-cy"], uP = { class: "ml-1 hover:underline" }, cP = /* @__PURE__ */ he({
  __name: "layer-tree-node",
  props: {
    node: { type: null, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const n = t, { t: r } = Ze(), { setMetadataId: i } = Oh(), s = !!n.node.children, a = n.node.depth === 0, o = n.node.depth >= 10, l = me(() => r(n.node.name, { ns: "client" }));
    function u(c) {
      e("toggleLayer", c);
    }
    function f(c) {
      e("toggleParent", c);
    }
    return (c, h) => {
      const d = y1("layer-tree-node", !0);
      return s ? (A(), V("div", nP, [
        $("    First level parents"),
        t.node.depth === 1 ? (A(), V("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${t.node.id}`
        }, [
          ne(wl, {
            title: b(l),
            expanded: t.node.expanded,
            onTogglePanel: h[0] || (h[0] = (m) => f(t.node))
          }, null, 8, ["title", "expanded"])
        ], 8, rP)) : t.node.depth > 1 && !o ? (A(), V(Ve, { key: 1 }, [
          $("    Other parents (with custom panel style)"),
          L("button", {
            class: Ce(["w-full text-left flex px-2 py-1.5 pl-2", t.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": t.node.expanded,
            onClick: h[1] || (h[1] = (m) => f(t.node)),
            "data-cy": `parentLayerLabel-${t.node.id}`
          }, [
            L("div", sP, ue(b(l)), 1),
            L("div", aP, [
              L("div", {
                class: Ce(["fa-sharp fa-solid", t.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, iP)
        ], 2112)) : $("v-if", !0),
        $("    Children"),
        o ? $("v-if", !0) : (A(), V("div", {
          key: 2,
          class: Ce(["bg-secondary", [
            { "pl-2": t.node.depth > 1 },
            { "lux-collapse": !a },
            { expanded: !a && t.node.expanded }
          ]])
        }, [
          (A(!0), V(Ve, null, Pn(t.node.children, (m) => (A(), je(d, {
            key: m.id,
            node: m,
            onToggleParent: h[2] || (h[2] = (p) => f(p)),
            onToggleLayer: h[3] || (h[3] = (p) => u(p))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (A(), V("div", oP, [
        L("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: h[4] || (h[4] = (m) => b(i)(t.node.id))
        }),
        L("button", {
          class: Ce(["w-full text-left", { "font-bold": t.node.checked }]),
          onClick: h[5] || (h[5] = (m) => u(t.node)),
          "data-cy": `layerLabel-${t.node.id}`
        }, [
          L("i", {
            class: Ce(["fa-solid", t.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          L("span", uP, ue(b(l)), 1)
        ], 10, lP)
      ]));
    };
  }
}), kf = /* @__PURE__ */ pe(cP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-tree/layer-tree-node.vue"]]);
class fP {
  toggleNode(e, n, r) {
    var i;
    return (n == null ? void 0 : n.id) === e ? {
      ...n,
      [r]: !n[r]
    } : {
      ...n,
      children: (i = n.children) == null ? void 0 : i.map(
        (s) => this.toggleNode(e, s, r)
      )
    };
  }
  updateLayers(e, n) {
    const { id: r } = e;
    if (e.children)
      return {
        ...e,
        children: e.children.map((i) => this.updateLayers(i, n))
      };
    {
      const i = !!(n != null && n.find((s) => s.id === r));
      return {
        ...e,
        checked: i
      };
    }
  }
}
const Gs = new fP();
var Ln = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Ln || {});
function hP(t, e) {
  var n, r;
  return t.children && !e.children || ((n = e.children) == null ? void 0 : n.length) === 0 ? 1 : e.children && !t.children || ((r = t.children) == null ? void 0 : r.length) === 0 ? -1 : 0;
}
function _0(t, e, n = 0) {
  const { name: r = "", type: i = Ln.WMS, children: s } = t, a = `${i}||${e}||${r}`.split("-").join("%2D"), o = mt();
  return {
    id: a,
    name: r,
    depth: n,
    children: s == null ? void 0 : s.sort(hP).map((l) => _0(l, e, n + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function dP(t) {
  const e = decodeURIComponent(t), [n, r, i] = e.split("||");
  return b0({
    id: e,
    url: Ys.getProxyfiedUrl(r),
    remoteLayer: { name: i, type: n }
  });
}
function b0({
  id: t,
  url: e,
  remoteLayer: n
}) {
  const { name: r = "", type: i = Ln.WMS } = n;
  return {
    id: t,
    name: r,
    layers: r,
    url: e,
    type: i,
    imageType: rv.PNG
  };
}
class Mc {
  constructor(e, n = 0, r = !1) {
    this.message = e, this.httpStatus = n, this.isCrossOriginRelated = r;
  }
}
let mP = 0;
function pP() {
  return mP++;
}
function gP(t, e, n) {
  return new Promise((r, i) => {
    const s = pP(), a = {
      requestId: s,
      taskName: t,
      params: n
    };
    e === null ? window.dispatchEvent(
      new CustomEvent("ogc-client.request", {
        detail: a
      })
    ) : e.postMessage(a);
    const o = ({ detail: l, data: u }) => {
      const f = l || u;
      f.requestId === s && (e === null ? window.removeEventListener("message", o) : e.removeEventListener("message", o), "error" in f ? i(f.error) : r(f.response));
    };
    e === null ? window.addEventListener("ogc-client.response", o) : e.addEventListener("message", o);
  });
}
function Mh(t, e, n) {
  const r = typeof WorkerGlobalScope < "u", i = async ({ detail: s, data: a }) => {
    const o = s || a;
    if (o.taskName === t) {
      let l, u;
      try {
        l = await n(o.params);
      } catch (c) {
        u = c;
      }
      const f = {
        taskName: t,
        requestId: o.requestId,
        ...l && { response: l },
        ...u && { error: u }
      };
      r ? e.postMessage(f) : e.dispatchEvent(
        new CustomEvent("ogc-client.response", {
          detail: f
        })
      );
    }
  };
  r ? e.addEventListener("message", i) : e.addEventListener("ogc-client.request", i);
}
let Tc;
function yP() {
  return Tc || (Tc = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), Tc;
}
function vP(t) {
  return gP("parseWmsCapabilities", yP(), {
    url: t
  });
}
var Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const Zr = "";
class _P {
  constructor(e) {
    this.chars = [...e], this.charCount = this.chars.length, this.charIndex = 0, this.charsToBytes = new Array(this.charCount), this.multiByteMode = !1, this.string = e;
    let { chars: n, charCount: r, charsToBytes: i } = this;
    if (r === e.length)
      for (let s = 0; s < r; ++s)
        i[s] = s;
    else {
      for (let s = 0, a = 0; a < r; ++a)
        i[a] = s, s += n[a].length;
      this.multiByteMode = !0;
    }
  }
  get isEnd() {
    return this.charIndex >= this.charCount;
  }
  _charLength(e) {
    let { length: n } = e;
    return n < 2 || !this.multiByteMode ? n : e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
  }
  advance(e = 1) {
    this.charIndex = Math.min(this.charCount, this.charIndex + e);
  }
  consume(e = 1) {
    let n = this.peek(e);
    return this.advance(e), n;
  }
  consumeMatch(e) {
    if (!e.sticky)
      throw new Error('`regex` must have a sticky flag ("y")');
    e.lastIndex = this.charsToBytes[this.charIndex];
    let n = e.exec(this.string);
    if (n === null)
      return Zr;
    let r = n[0];
    return this.advance(this._charLength(r)), r;
  }
  consumeMatchFn(e) {
    let n = this.charIndex;
    for (; !this.isEnd && e(this.peek()); )
      this.advance();
    return this.charIndex > n ? this.string.slice(this.charsToBytes[n], this.charsToBytes[this.charIndex]) : Zr;
  }
  consumeString(e) {
    if (this.consumeStringFast(e))
      return e;
    if (!this.multiByteMode)
      return Zr;
    let { length: n } = e, r = this._charLength(e);
    return r !== n && e === this.peek(r) ? (this.advance(r), e) : Zr;
  }
  consumeStringFast(e) {
    if (this.peek() === e[0]) {
      let { length: n } = e;
      if (n === 1)
        return this.advance(), e;
      if (this.peek(n) === e)
        return this.advance(n), e;
    }
    return Zr;
  }
  consumeUntilMatch(e) {
    if (!e.global)
      throw new Error('`regex` must have a global flag ("g")');
    let n = this.charsToBytes[this.charIndex];
    e.lastIndex = n;
    let r = e.exec(this.string);
    if (r === null || r.index === n)
      return Zr;
    let i = this.string.slice(n, r.index);
    return this.advance(this._charLength(i)), i;
  }
  consumeUntilString(e) {
    let { charIndex: n, charsToBytes: r, string: i } = this, s = r[n], a = i.indexOf(e, s);
    if (a <= 0)
      return Zr;
    let o = i.slice(s, a);
    return this.advance(this._charLength(o)), o;
  }
  peek(e = 1) {
    if (this.charIndex >= this.charCount)
      return Zr;
    if (e === 1)
      return this.chars[this.charIndex];
    let { charsToBytes: n, charIndex: r } = this;
    return this.string.slice(n[r], n[r + e]);
  }
  reset(e = 0) {
    this.charIndex = e >= 0 ? Math.min(this.charCount, e) : Math.max(0, this.charIndex + e);
  }
}
var bP = _P, Si = {};
const EP = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
Si.predefinedEntities = EP;
function E0(t) {
  if (w0(t))
    return !0;
  let e = Wu(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
Si.isNameChar = E0;
function w0(t) {
  let e = Wu(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
Si.isNameStartChar = w0;
function wP(t) {
  return !x0(t);
}
Si.isNotXmlChar = wP;
function xP(t) {
  return t === "#" || E0(t);
}
Si.isReferenceChar = xP;
function SP(t) {
  let e = Wu(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
Si.isWhitespace = SP;
function x0(t) {
  let e = Wu(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
Si.isXmlChar = x0;
function Wu(t) {
  return t.codePointAt(0) || -1;
}
class cs {
  constructor() {
    this.parent = null;
  }
  get document() {
    return this.parent ? this.parent.document : null;
  }
  get isRootNode() {
    return this.parent ? this.parent === this.document : !1;
  }
  get preserveWhitespace() {
    return Boolean(this.parent && this.parent.preserveWhitespace);
  }
  get type() {
    return "";
  }
  toJSON() {
    let e = {
      type: this.type
    };
    return this.isRootNode && (e.isRootNode = !0), this.preserveWhitespace && (e.preserveWhitespace = !0), e;
  }
}
cs.TYPE_CDATA = "cdata";
cs.TYPE_COMMENT = "comment";
cs.TYPE_DOCUMENT = "document";
cs.TYPE_ELEMENT = "element";
cs.TYPE_PROCESSING_INSTRUCTION = "pi";
cs.TYPE_TEXT = "text";
var fs = cs;
const Nc = fs;
class OP extends Nc {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return Nc.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(Nc.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var Th = OP;
const MP = fs, TP = Th;
class NP extends TP {
  get type() {
    return MP.TYPE_CDATA;
  }
}
var S0 = NP;
const Cc = fs;
class CP extends Cc {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return Cc.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(Cc.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var O0 = CP;
const Lc = fs;
class Nh extends Lc {
  constructor(e, n = /* @__PURE__ */ Object.create(null), r = []) {
    super(), this.name = e, this.attributes = n, this.children = r;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof Nh; ) {
      if ("xml:space" in e.attributes)
        return e.attributes["xml:space"] === "preserve";
      e = e.parent;
    }
    return !1;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return Lc.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(Lc.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var Ch = Nh;
const LP = Ch, Pc = fs;
class PP extends Pc {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof LP) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return Pc.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(Pc.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var M0 = PP;
const Ac = fs;
class AP extends Ac {
  constructor(e, n = "") {
    super(), this.name = e, this.content = n;
  }
  get type() {
    return Ac.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(Ac.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var T0 = AP;
const kP = bP, Ri = Si, DP = S0, IP = O0, RP = M0, $P = Ch, _p = T0, bp = Th, kc = "";
class FP {
  constructor(e, n = {}) {
    for (this.document = new RP(), this.currentNode = this.document, this.options = n, this.scanner = new kP(jP(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
      ;
    this.scanner.isEnd || this.error("Extra content at the end of the document");
  }
  addNode(e) {
    e.parent = this.currentNode, this.currentNode.children.push(e);
  }
  addText(e) {
    let { children: n } = this.currentNode;
    if (n.length > 0) {
      let r = n[n.length - 1];
      if (r instanceof bp) {
        r.text += e;
        return;
      }
    }
    this.addNode(new bp(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, n = e.peek();
    if (n !== '"' && n !== "'")
      return !1;
    e.advance();
    let r, i = !1, s = kc, a = n === '"' ? /[^"&<]+/y : /[^'&<]+/y;
    e:
      for (; !e.isEnd; )
        switch (r = e.consumeMatch(a), r && (this.validateChars(r), s += r.replace(/[\t\r\n]/g, " ")), e.peek()) {
          case n:
            i = !0;
            break e;
          case "&":
            s += this.consumeReference();
            continue;
          case "<":
            this.error("Unescaped `<` is not allowed in an attribute value");
            break;
          case kc:
            this.error("Unclosed attribute");
            break;
        }
    return i || this.error("Unclosed attribute"), e.advance(), s;
  }
  consumeCdataSection() {
    let { scanner: e } = this;
    if (!e.consumeStringFast("<![CDATA["))
      return !1;
    let n = e.consumeUntilString("]]>");
    return this.validateChars(n), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new DP(n)) : this.addText(n), !0;
  }
  consumeCharData() {
    let { scanner: e } = this, n = e.consumeUntilMatch(/<|&|]]>/g);
    return n ? (this.validateChars(n), e.peek() === "]" && e.peek(3) === "]]>" && this.error("Element content may not contain the CDATA section close delimiter `]]>`"), this.addText(n), !0) : !1;
  }
  consumeComment() {
    let { scanner: e } = this;
    if (!e.consumeStringFast("<!--"))
      return !1;
    let n = e.consumeUntilString("--");
    return this.validateChars(n), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new IP(n.trim())), !0;
  }
  consumeContentReference() {
    let e = this.consumeReference();
    return e ? (this.addText(e), !0) : !1;
  }
  consumeDoctypeDeclaration() {
    let { scanner: e } = this;
    return !e.consumeStringFast("<!DOCTYPE") || !this.consumeWhitespace() ? !1 : (e.consumeMatch(/[^[>]+/y), e.consumeMatch(/\[[\s\S]+?\][\x20\t\r\n]*>/y) || e.consumeStringFast(">") || this.error("Unclosed doctype declaration"), !0);
  }
  consumeElement() {
    let { scanner: e } = this, n = e.charIndex;
    if (e.peek() !== "<")
      return !1;
    e.advance();
    let r = this.consumeName();
    if (!r)
      return e.reset(n), !1;
    let i = /* @__PURE__ */ Object.create(null);
    for (; this.consumeWhitespace(); ) {
      let o = this.consumeName();
      if (!o)
        continue;
      let l = this.consumeEqual() && this.consumeAttributeValue();
      l === !1 && this.error("Attribute value expected"), o in i && this.error(`Duplicate attribute: ${o}`), o === "xml:space" && l !== "default" && l !== "preserve" && this.error('Value of the `xml:space` attribute must be "default" or "preserve"'), i[o] = l;
    }
    if (this.options.sortAttributes) {
      let o = Object.keys(i).sort(), l = /* @__PURE__ */ Object.create(null);
      for (let u = 0; u < o.length; ++u) {
        let f = o[u];
        l[f] = i[f];
      }
      i = l;
    }
    let s = Boolean(e.consumeStringFast("/>")), a = new $P(r, i);
    if (a.parent = this.currentNode, !s) {
      for (e.consumeStringFast(">") || this.error(`Unclosed start tag for element \`${r}\``), this.currentNode = a, this.consumeCharData(); this.consumeElement() || this.consumeContentReference() || this.consumeCdataSection() || this.consumeProcessingInstruction() || this.consumeComment(); )
        this.consumeCharData();
      let o = e.charIndex, l;
      (!e.consumeStringFast("</") || !(l = this.consumeName()) || l !== r) && (e.reset(o), this.error(`Missing end tag for element ${r}`)), this.consumeWhitespace(), e.consumeStringFast(">") || this.error(`Unclosed end tag for element ${r}`), this.currentNode = a.parent;
    }
    return this.addNode(a), !0;
  }
  consumeEqual() {
    return this.consumeWhitespace(), this.scanner.consumeStringFast("=") ? (this.consumeWhitespace(), !0) : !1;
  }
  consumeMisc() {
    return this.consumeComment() || this.consumeProcessingInstruction() || this.consumeWhitespace();
  }
  consumeName() {
    return Ri.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(Ri.isNameChar) : kc;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, n = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let r = this.consumeName();
    if (r ? r.toLowerCase() === "xml" && (e.reset(n), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new _p(r)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new _p(r, i)), !0;
  }
  consumeProlog() {
    let { scanner: e } = this, n = e.charIndex;
    for (this.consumeXmlDeclaration(); this.consumeMisc(); )
      ;
    if (this.consumeDoctypeDeclaration())
      for (; this.consumeMisc(); )
        ;
    return n < e.charIndex;
  }
  consumeReference() {
    let { scanner: e } = this;
    if (e.peek() !== "&")
      return !1;
    e.advance();
    let n = e.consumeMatchFn(Ri.isReferenceChar);
    e.consume() !== ";" && this.error("Unterminated reference (a reference must end with `;`)");
    let r;
    if (n[0] === "#") {
      let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
      isNaN(i) && this.error("Invalid character reference"), r = String.fromCodePoint(i), Ri.isXmlChar(r) || this.error("Character reference resolves to an invalid character");
    } else if (r = Ri.predefinedEntities[n], r === void 0) {
      let {
        ignoreUndefinedEntities: i,
        resolveUndefinedEntity: s
      } = this.options, a = `&${n};`;
      if (s) {
        let o = s(a);
        if (o != null) {
          let l = typeof o;
          if (l !== "string")
            throw new TypeError(`\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ${l}`);
          return o;
        }
      }
      if (i)
        return a;
      e.reset(-a.length), this.error(`Named entity isn't defined: ${a}`);
    }
    return r;
  }
  consumeSystemLiteral() {
    let { scanner: e } = this, n = e.consumeStringFast('"') || e.consumeStringFast("'");
    if (!n)
      return !1;
    let r = e.consumeUntilString(n);
    return this.validateChars(r), e.consumeStringFast(n) || this.error("Missing end quote"), r;
  }
  consumeWhitespace() {
    return Boolean(this.scanner.consumeMatchFn(Ri.isWhitespace));
  }
  consumeXmlDeclaration() {
    let { scanner: e } = this;
    if (!e.consumeStringFast("<?xml"))
      return !1;
    this.consumeWhitespace() || this.error("Invalid XML declaration");
    let n = Boolean(e.consumeStringFast("version")) && this.consumeEqual() && this.consumeSystemLiteral();
    if (n === !1 ? this.error("XML version is missing or invalid") : /^1\.[0-9]+$/.test(n) || this.error("Invalid character in version number"), this.consumeWhitespace()) {
      Boolean(e.consumeStringFast("encoding")) && this.consumeEqual() && this.consumeSystemLiteral() && this.consumeWhitespace();
      let i = Boolean(e.consumeStringFast("standalone")) && this.consumeEqual() && this.consumeSystemLiteral();
      i && (i !== "yes" && i !== "no" && this.error('Only "yes" and "no" are permitted as values of `standalone`'), this.consumeWhitespace());
    }
    return e.consumeStringFast("?>") || this.error("Invalid or unclosed XML declaration"), !0;
  }
  error(e) {
    let { charIndex: n, string: r } = this.scanner, i = 1, s = "", a = 1;
    for (let f = 0; f < n; ++f) {
      let c = r[f];
      c === `
` ? (i = 1, s = "", a += 1) : (i += 1, s += c);
    }
    let o = r.indexOf(`
`, n);
    s += o === -1 ? r.slice(n) : r.slice(n, o);
    let l = 0;
    s.length > 50 && (i < 40 ? s = s.slice(0, 50) : (l = i - 20, s = s.slice(l, i + 30)));
    let u = new Error(
      `${e} (line ${a}, column ${i})
  ${s}
` + " ".repeat(i - l + 1) + `^
`
    );
    throw Object.assign(u, {
      column: i,
      excerpt: s,
      line: a,
      pos: n
    }), u;
  }
  validateChars(e) {
    let n = 0;
    for (let r of e)
      Ri.isNotXmlChar(r) && (this.scanner.reset(-([...e].length - n)), this.error("Invalid character")), n += 1;
  }
}
var VP = FP;
function jP(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const GP = VP, UP = S0, BP = O0, qP = M0, WP = Ch, HP = fs, zP = T0, YP = Th;
function Oi(t, e) {
  return new GP(t, e).document;
}
Oi.XmlCdata = UP;
Oi.XmlComment = BP;
Oi.XmlDocument = qP;
Oi.XmlElement = WP;
Oi.XmlNode = HP;
Oi.XmlProcessingInstruction = zP;
Oi.XmlText = YP;
var XP = Oi;
class KP extends Error {
  constructor(e) {
    super(e);
  }
}
function ZP(t) {
  let e = null;
  try {
    e = XP(t);
  } catch (n) {
    throw new KP(n.message);
  }
  return e;
}
function jr(t) {
  return t.children[0];
}
function lu(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function uu(t) {
  return t.name || "";
}
function jt(t, e, n) {
  const r = lu(e);
  function i(s, a) {
    return lu(uu(a)) === r && s.push(a), n && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
  }
  return t && Array.isArray(t.children) ? t.children.reduce(i, []) : [];
}
function xe(t, e, n) {
  return jt(t, e, n)[0] || null;
}
function Ea(t) {
  return t && Array.isArray(t.children) ? [...t.children.filter((e) => e.constructor.name === "XmlElement")] : [];
}
function Ye(t) {
  const e = t && Array.isArray(t.children) ? t.children.find((n) => n.type === "text") : null;
  return e ? e.text : "";
}
function mr(t, e) {
  return t && t.attributes[e] || "";
}
const Ep = ["utf-8", "utf-16", "iso-8859-1"], wp = "utf-8";
function JP(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function QP(t, e) {
  const n = e ? JP(e) : null, r = n ? [n, ...Ep] : Ep;
  for (const i of r)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${wp}.`
  ), new TextDecoder(wp).decode(t);
}
const Zo = /* @__PURE__ */ new Map();
function eA(t) {
  if (Zo.has(t))
    return Zo.get(t);
  const e = fetch(t);
  return e.finally(() => Zo.delete(t)), Zo.set(t, e), e;
}
function Lh(t) {
  return eA(t).catch(
    () => fetch(t, { method: "HEAD", mode: "no-cors" }).catch((e) => {
      throw new Mc(
        `Fetching the document failed either due to network errors or unreachable host, error is: ${e.message}`,
        0,
        !1
      );
    }).then(() => {
      throw new Mc(
        "The document could not be fetched due to CORS limitations",
        0,
        !0
      );
    })
  ).then(async (e) => {
    if (!e.ok) {
      const i = await e.text();
      throw new Mc(
        `Received an error with code ${e.status}: ${i}`,
        e.status,
        !1
      );
    }
    const n = await e.arrayBuffer(), r = e.headers.get("Content-Type");
    return QP(n, r);
  }).then((e) => ZP(e));
}
function Ph(t, e) {
  const n = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (n) {
    const o = n[1], l = Ph(decodeURIComponent(o), e);
    return t.replace(o, encodeURIComponent(l));
  }
  const r = new URL(t), i = Object.keys(e), s = i.map((o) => o.toLowerCase()), a = [];
  for (const o of r.searchParams.keys())
    s.indexOf(o.toLowerCase()) > -1 && a.push(o);
  return a.map((o) => r.searchParams.delete(o)), i.forEach(
    (o) => r.searchParams.set(o, e[o] === !0 ? "" : e[o])
  ), r.toString();
}
let tA = 1e3 * 60 * 60;
function nA() {
  return tA;
}
const _i = "caches" in self ? caches.open("ogc-client") : null;
async function rA(t, ...e) {
  if (!_i)
    return;
  const n = "https://cache/" + e.join("/");
  await (await _i).put(
    n,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + nA()).toString(10)
      }
    })
  );
}
async function iA(...t) {
  if (!_i)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await _i).match(e).then((r) => !!r && parseInt(r.headers.get("x-expiry")) > Date.now());
}
async function sA(...t) {
  if (!_i)
    return null;
  const e = "https://cache/" + t.join("/"), r = await (await _i).match(e);
  return r ? r.clone().json() : null;
}
const Jo = /* @__PURE__ */ new Map();
async function aA(t, ...e) {
  if (await oA(), await iA(...e))
    return sA(...e);
  const n = e.join("#");
  if (Jo.has(n))
    return Jo.get(n);
  const r = t();
  r instanceof Promise && (r.then(() => Jo.delete(n)), Jo.set(n, r));
  const i = await r;
  return await rA(i, ...e), i;
}
async function oA() {
  if (!_i)
    return;
  const t = await _i, e = await t.keys();
  for (let n of e) {
    const r = await t.match(n);
    parseInt(r.headers.get("x-expiry")) <= Date.now() && await t.delete(n);
  }
}
function lA(t, e, n, r, i, s, a, o, l, u) {
  const f = e === "2.0.0" ? "TYPENAMES" : "TYPENAME", c = e === "2.0.0" ? "COUNT" : "MAXFEATURES", h = {
    SERVICE: "WFS",
    REQUEST: "GetFeature",
    VERSION: e,
    [f]: n
  };
  if (r !== void 0 && (h.OUTPUTFORMAT = r), s !== void 0 && (h.PROPERTYNAME = s.join(",")), a ? (h.RESULTTYPE = "hits", h[c] = "1") : i !== void 0 && (h[c] = i.toString(10)), o && (h.SRSNAME = o), l) {
    const d = l.join(",");
    h.BBOX = u ? `${d},${u}` : d;
  }
  return Ph(t, h);
}
class uA {
  constructor(e) {
    const n = Ph(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = aA(
      () => vP(n),
      "WMS",
      "CAPABILITIES",
      n
    ).then(({ info: r, layers: i, version: s }) => {
      this._info = r, this._layers = i, this._version = s;
    }), this._info = null, this._layers = null, this._version = null;
  }
  isReady() {
    return this._capabilitiesPromise.then(() => this);
  }
  getServiceInfo() {
    return this._info;
  }
  getLayers() {
    function e(n) {
      return {
        title: n.title,
        name: n.name,
        abstract: n.abstract,
        ..."children" in n && {
          children: n.children.map(e)
        }
      };
    }
    return this._layers.map(e);
  }
  getLayerByName(e) {
    let n = null;
    function r(i) {
      if (n === null) {
        if (i.name === e) {
          n = i;
          return;
        }
        "children" in i && i.children.map(r);
      }
    }
    return this._layers.map(r), n;
  }
  getVersion() {
    return this._version;
  }
}
const cA = [
  "EPSG:4046",
  "EPSG:4075",
  "EPSG:4120",
  "EPSG:4122",
  "EPSG:4124",
  "EPSG:4126",
  "EPSG:4149",
  "EPSG:4151",
  "EPSG:4153",
  "EPSG:4155",
  "EPSG:4157",
  "EPSG:4159",
  "EPSG:4161",
  "EPSG:4163",
  "EPSG:4165",
  "EPSG:4167",
  "EPSG:4169",
  "EPSG:4171",
  "EPSG:4173",
  "EPSG:4175",
  "EPSG:4178",
  "EPSG:4180",
  "EPSG:4182",
  "EPSG:4184",
  "EPSG:4188",
  "EPSG:4190",
  "EPSG:4191",
  "EPSG:4196",
  "EPSG:4198",
  "EPSG:4202",
  "EPSG:4210",
  "EPSG:4211",
  "EPSG:4214",
  "EPSG:4226",
  "EPSG:4229",
  "EPSG:4231",
  "EPSG:4233",
  "EPSG:4236",
  "EPSG:4238",
  "EPSG:4240",
  "EPSG:4242",
  "EPSG:4244",
  "EPSG:4246",
  "EPSG:4248",
  "EPSG:4250",
  "EPSG:4252",
  "EPSG:4255",
  "EPSG:4258",
  "EPSG:4261",
  "EPSG:4264",
  "EPSG:4267",
  "EPSG:4270",
  "EPSG:4273",
  "EPSG:4276",
  "EPSG:4279",
  "EPSG:4281",
  "EPSG:4284",
  "EPSG:4286",
  "EPSG:4288",
  "EPSG:4292",
  "EPSG:4295",
  "EPSG:4297",
  "EPSG:4299",
  "EPSG:4302",
  "EPSG:4324",
  "EPSG:4326"
];
function fA(t) {
  return cA.indexOf(Df(t)) > -1;
}
function Df(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function N0(t) {
  return jr(t).attributes.version;
}
function hA(t) {
  const e = N0(t), n = xe(
    jr(t),
    "Capability"
  );
  return jt(n, "Layer").map(
    (r) => C0(r, e)
  );
}
function dA(t) {
  const e = xe(jr(t), "Service"), n = jt(
    xe(e, "KeywordList"),
    "Keyword"
  ).map(Ye).filter((r, i, s) => s.indexOf(r) === i);
  return {
    title: Ye(xe(e, "Title")),
    name: Ye(xe(e, "Name")),
    abstract: Ye(xe(e, "Abstract")),
    fees: Ye(xe(e, "Fees")),
    constraints: Ye(xe(e, "AccessConstraints")),
    keywords: n
  };
}
function C0(t, e, n = [], r = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = jt(t, s).map(Ye), o = a.length > 0 ? a : n, l = jt(t, "Style").map(
    mA
  ), u = l.length > 0 ? l : r;
  function f(m) {
    const p = mr(m, s);
    return (fA(p) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((v) => mr(m, v));
  }
  const c = xe(t, "Attribution"), h = c !== null ? pA(c) : i, d = jt(t, "Layer").map(
    (m) => C0(m, e, o, u, h)
  );
  return {
    name: Ye(xe(t, "Name")),
    title: Ye(xe(t, "Title")),
    abstract: Ye(xe(t, "Abstract")),
    availableCrs: o,
    styles: u,
    attribution: h,
    boundingBoxes: jt(t, "BoundingBox").reduce(
      (m, p) => ({
        ...m,
        [mr(p, s)]: f(p)
      }),
      {}
    ),
    ...d.length && { children: d }
  };
}
function mA(t) {
  const e = mr(
    xe(xe(t, "LegendURL"), "OnlineResource"),
    "xlink:href"
  );
  return {
    name: Ye(xe(t, "Name")),
    title: Ye(xe(t, "Title")),
    ...e && { legendUrl: e }
  };
}
function pA(t) {
  const e = mr(
    xe(
      xe(t, "LogoURL"),
      "OnlineResource"
    ),
    "xlink:href"
  ), n = mr(
    xe(t, "OnlineResource"),
    "xlink:href"
  ), r = Ye(xe(t, "Title"));
  return {
    ...r && { title: r },
    ...n && { url: n },
    ...e && { logoUrl: e }
  };
}
function Hu(t) {
  return jr(t).attributes.version;
}
function L0(t) {
  const e = Hu(t);
  let n;
  if (e.startsWith("1.0")) {
    const r = xe(
      xe(
        xe(jr(t), "Capability"),
        "Request"
      ),
      "GetFeature"
    );
    n = Ea(
      xe(r, "ResultFormat")
    ).map(uu);
  } else {
    const r = xe(
      jr(t),
      "OperationsMetadata"
    ), i = jt(r, "Operation").find(
      (a) => mr(a, "name") === "GetFeature"
    ), s = jt(i, "Parameter").find(
      (a) => mr(a, "name") === "outputFormat"
    );
    n = jt(s, "Value", !0).map(
      Ye
    );
  }
  return n;
}
function gA(t) {
  const e = Hu(t), n = e.startsWith("1.0") ? "Service" : "ServiceIdentification", r = e.startsWith("1.0") ? "Name" : "ServiceType", i = xe(jr(t), n);
  let s;
  return e.startsWith("1.0") ? s = Ye(xe(i, "Keywords")).split(",").map((a) => a.trim()) : s = jt(
    xe(i, "Keywords"),
    "Keyword"
  ).map(Ye), {
    title: Ye(xe(i, "Title")),
    name: Ye(xe(i, r)),
    abstract: Ye(xe(i, "Abstract")),
    fees: Ye(xe(i, "Fees")),
    constraints: Ye(xe(i, "AccessConstraints")),
    keywords: s,
    outputFormats: L0(t)
  };
}
function yA(t) {
  const e = Hu(t), n = L0(t), r = xe(
    jr(t),
    "FeatureTypeList"
  );
  return jt(r, "FeatureType").map(
    (i) => vA(i, e, n)
  );
}
function vA(t, e, n) {
  const r = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${r}`;
  function s() {
    const u = xe(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => mr(u, f)).map(parseFloat);
  }
  function a() {
    const u = xe(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => xe(u, f)).map((f) => Ye(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : jt(t, `Other${r}`).map(Ye).map(Df), l = e.startsWith("1.0") ? [] : jt(
    xe(t, "OutputFormats"),
    "Format"
  ).map(Ye);
  return {
    name: Ye(xe(t, "Name")),
    title: Ye(xe(t, "Title")),
    abstract: Ye(xe(t, "Abstract")),
    defaultCrs: Df(
      Ye(xe(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : n,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function _A(t, e, n) {
  const r = jr(t);
  let i;
  if (n.startsWith("2.0"))
    i = jt(r, "member").map(
      (u) => Ea(u)[0]
    );
  else {
    const u = xe(r, "featureMembers");
    i = u ? Ea(u) : jt(r, "featureMember").map(
      (f) => Ea(f)[0]
    );
  }
  const s = n === "1.0.0" ? "fid" : "gml:id";
  function a(u) {
    return u in e.properties;
  }
  function o(u, f) {
    switch (e.properties[u]) {
      case "integer":
        return parseInt(f);
      case "float":
        return parseFloat(f);
      case "boolean":
        return f === "true";
      default:
        return f;
    }
  }
  function l(u) {
    return Ea(u).filter((f) => a(lu(uu(f)))).reduce((f, c) => {
      const h = lu(uu(c));
      return {
        ...f,
        [h]: o(h, Ye(c))
      };
    }, {});
  }
  return i.map((u) => ({
    id: mr(u, s),
    properties: l(u)
  }));
}
function bA(t) {
  return t.reduce((e, n) => {
    for (const r in n.properties) {
      const i = n.properties[r];
      r in e || (e[r] = { uniqueValues: [] });
      const s = e[r].uniqueValues.find(
        (a) => a.value === i
      );
      s ? s.count++ : e[r].uniqueValues.push({ value: i, count: 1 });
    }
    return e;
  }, {});
}
Mh(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => Lh(t).then((e) => ({
    info: dA(e),
    layers: hA(e),
    version: N0(e)
  }))
);
Mh(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => Lh(t).then((e) => ({
    info: gA(e),
    featureTypes: yA(e),
    version: Hu(e)
  }))
);
Mh(
  "queryWfsFeatureTypeDetails",
  self,
  ({ url: t, serviceVersion: e, featureTypeFull: n }) => {
    const r = lA(
      t,
      e,
      n.name,
      void 0,
      void 0,
      Object.keys(n.properties)
    );
    return Lh(r).then((i) => ({
      props: bA(
        _A(i, n, e)
      )
    }));
  }
);
const EA = () => [
  {
    url: "http://wmts1.geoportail.lu/opendata/service",
    label: "Open Data Webservices WMS"
  },
  {
    url: "http://ows.terrestris.de/osm-gray/service",
    label: "OpenStreetMap by Terrestris (Grey)"
  },
  {
    url: "http://ows.terrestris.de/osm/service",
    label: "OpenStreetMap by Terrestris (Color)"
  }
];
class wA {
  constructor(e) {
    at(this, "capabilitiesPromise");
    at(this, "serviceInfo");
    at(this, "layers");
    const n = new O_();
    let r = "&";
    e.indexOf("?") === -1 && (r = "?"), e.indexOf("Capabilities") === -1 && (e = e + r + "SERVICE=WMTS&REQUEST=GetCapabilities"), this.capabilitiesPromise = fetch(e).then((i) => i.text()).then((i) => {
      var a;
      const s = n.read(i);
      this.serviceInfo = this.mapServiceInfo(s.ServiceIdentification), this.layers = this.mapToRemoteLayers((a = s.Contents) == null ? void 0 : a.Layer);
    });
  }
  mapToRemoteLayers(e) {
    return [
      {
        type: Ln.WMTS,
        children: e.map(
          (n) => ({
            type: Ln.WMTS,
            abstract: n.Abstract,
            format: n.Format,
            name: n.Identifier,
            title: n.Title,
            tileMatrixSetLink: n.TileMatrixSetLink,
            wgs84BoundingBox: n.WGS84BoundingBox
          })
        )
      }
    ];
  }
  mapServiceInfo(e) {
    return {
      type: Ln.WMTS,
      title: e.Title,
      abstract: e.Abstract,
      fees: e.Fees,
      constraints: e.AccessConstraints,
      serviceTypeVersion: e.ServiceTypeVersion
    };
  }
  isReady() {
    return this.capabilitiesPromise.then(() => this);
  }
  getLayerByName(e) {
    return this.layers[0].children.filter((n) => n.name === e)[0];
  }
  getLayers() {
    return this.layers;
  }
  getServiceInfo() {
    return this.serviceInfo;
  }
}
class xA {
  async getRemoteEndpoint(e) {
    let n;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      n = await this.getWmtsEndpoint(e).isReady();
    }) || n;
  }
  getWmsEndpoint(e) {
    return new uA(Ys.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new wA(Ys.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(EA()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Ln.WMS) === 0 || e.indexOf(Ln.WMTS) === 0);
  }
}
const Qa = new xA(), SA = { class: "relative text-center" }, OA = ["placeholder", "value"], MA = {
  key: 0,
  class: "text-center"
}, TA = { class: "lux-label" }, NA = {
  key: 1,
  class: "text-center"
}, CA = { class: "lux-label" }, LA = {
  key: 2,
  class: "text-center"
}, PA = /* @__PURE__ */ L("div", { class: "fa fa-refresh fa-spin" }, null, -1), AA = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, kA = /* @__PURE__ */ he({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Ze(), n = mt(), r = Kn(), i = et([]), s = et(), { remoteLayersOpen: a } = He(_t()), { setRemoteLayersOpen: o } = _t();
    let l = !1, u, f, c;
    _n(h);
    function h() {
      s.value = s.value ? Gs.updateLayers(
        s.value,
        n.layers
      ) : void 0;
    }
    Qa.fetchRemoteWmsEndpoint().then((w) => {
      i.value = w.map(({ url: S, label: P }) => ({
        label: P,
        value: S
      }));
    });
    async function d(w) {
      l = !0, c = await Qa.getRemoteEndpoint(w).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = w, l = !1;
    }
    async function m() {
      const w = c, S = w == null ? void 0 : w.getLayers();
      if (S && S[0]) {
        const P = _0(
          S[0],
          f
        );
        s.value = Gs.updateLayers(P, n.layers);
      }
    }
    async function p(w) {
      f = u = w, await d(f), m();
    }
    function g(w) {
      u = w.target.value;
    }
    async function v() {
      await d(u), m();
    }
    function y(w) {
      s.value = Gs.toggleNode(
        w.id,
        s.value,
        "expanded"
      );
    }
    function E(w) {
      const { id: S, name: P } = w, k = c;
      if (w.checked === !0)
        n.removeLayers(S);
      else {
        const C = k == null ? void 0 : k.getLayerByName(P);
        if (C) {
          const T = r.initLayer(
            b0({
              id: S,
              url: Ys.getProxyfiedUrl(f),
              remoteLayer: C
            })
          );
          n.addLayers(T);
        }
      }
    }
    return (w, S) => b(a) ? (A(), je(v0, {
      key: 0,
      title: b(e)("Add external data", { ns: "client" }),
      onClose: S[0] || (S[0] = (P) => b(o)(!1))
    }, {
      content: ci(() => {
        var P, k;
        return [
          L("div", SA, [
            ne(Zy, {
              class: "lux-remote-services-dropdown",
              options: b(i),
              placeholder: b(e)("Predefined wms", { ns: "client" }),
              onChange: p
            }, null, 8, ["options", "placeholder"]),
            L("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: b(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: b(f) || "",
              onChange: g
            }, null, 40, OA),
            L("button", {
              type: "button",
              class: "lux-btn",
              onClick: v
            }, ue(b(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !b(l) && b(c) ? (A(), V("div", MA, [
            L("span", TA, ue(b(e)("Description du service :", {
              ns: "client"
            })), 1),
            jl(" " + ue((P = b(c).getServiceInfo()) == null ? void 0 : P.abstract), 1)
          ])) : $("v-if", !0),
          !b(l) && b(c) ? (A(), V("div", NA, [
            L("span", CA, ue(b(e)("Access constraints :", {
              ns: "client"
            })), 1),
            jl(" " + ue((k = b(c).getServiceInfo()) == null ? void 0 : k.constraints), 1)
          ])) : $("v-if", !0),
          b(l) ? (A(), V("div", LA, [
            PA,
            L("span", null, ue(b(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : $("v-if", !0),
          b(l) ? $("v-if", !0) : (A(), V("div", AA, [
            b(s) ? (A(), je(kf, {
              key: 0,
              class: "block p-[10px] mb-[11px]",
              node: b(s),
              onToggleParent: y,
              onToggleLayer: E
            }, null, 8, ["node"])) : $("v-if", !0)
          ]))
        ];
      }),
      _: 1
    }, 8, ["title"])) : $("v-if", !0);
  }
}), DA = /* @__PURE__ */ pe(kA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/remote-layers/remote-layers.vue"]]);
function IA(t, e = "fr-FR") {
  const n = new Date(t);
  return new Intl.DateTimeFormat(e).format(n);
}
const RA = { class: "font-bold" }, $A = { class: "col-span-2" }, FA = /* @__PURE__ */ he({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), V(Ve, null, [
      L("span", RA, ue(e.label), 1),
      L("span", $A, ue(e.value), 1)
    ], 64));
  }
}), ha = /* @__PURE__ */ pe(FA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-metadata/layer-metadata-item.vue"]]);
function VA(t) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[t.toLowerCase()];
}
function jA(t) {
  return new DOMParser().parseFromString(t, "text/html").body;
}
function GA(t) {
  const e = [];
  function n(r) {
    const i = r.split("|");
    i[3] === "WWW:LINK-1.0-http--link" && e.indexOf(i[2]) === -1 && e.push(i[2]);
  }
  return Array.isArray(t) ? t.forEach(n, t) : n(t), e;
}
function UA(t) {
  const n = (Array.isArray(t) ? t : [t]).filter((r) => r.split("|")[1] === "metadata");
  return {
    organisaton: n[0].split("|")[2],
    name: n[0].split("|")[5],
    unknown: n[0].split("|")[6],
    address: n[0].split("|")[7],
    email: n[0].split("|")[4]
  };
}
class P0 {
}
class BA extends P0 {
  async getMetadata(e, n, r) {
    console.assert(e === Ln.WMS);
    const i = Qa.getWmsEndpoint(n);
    await i.isReady();
    const s = i == null ? void 0 : i.getServiceInfo(), a = i == null ? void 0 : i.getLayerByName(r);
    return {
      title: a.title,
      description: a.abstract,
      keywords: s.keywords,
      accessConstraints: s.constraints,
      serviceDescription: s.abstract
    };
  }
}
const qA = new BA();
class WA extends P0 {
  async getMetadata(e, n, r) {
    console.assert(e === Ln.WMTS);
    const i = Qa.getWmtsEndpoint(n);
    await i.isReady();
    const s = i == null ? void 0 : i.getServiceInfo(), a = i == null ? void 0 : i.getLayerByName(r);
    return {
      title: a.title,
      description: a.abstract,
      accessConstraints: s.constraints,
      serviceDescription: s.abstract
    };
  }
}
const HA = new WA();
class zA {
  async getMetadata(e, n, r) {
    if (e === Ln.WMS)
      return qA.getMetadata(e, n, r);
    if (e === Ln.WMTS)
      return HA.getMetadata(e, n, r);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const YA = new zA();
class XA {
  constructor() {
    at(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    at(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    at(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, n) {
    const r = es(), i = r.findBgLayerById(+e) || r.findById(+e) || r.find3dLayerById(+e);
    if (i) {
      const s = i.metadata, a = s == null ? void 0 : s.metadata_id, o = a && await this.getLocalMetadata(
        this.localMetadataBaseUrl,
        a,
        n
      ), l = i.name, u = (s == null ? void 0 : s.legend_name) || "", f = i == null ? void 0 : i.id, c = u && await this.getLegendHtml(
        this.legendBaseUrl,
        u,
        f,
        n
      );
      return {
        ...o,
        title: l,
        hasLegend: !!c,
        ...c && { legendHtml: c }
      };
    } else {
      const [s, a, o] = String(e).split("%2D").join("-").split("||");
      return YA.getMetadata(
        s,
        a,
        o
      );
    }
  }
  getLocalMetadata(e, n, r) {
    return fetch(`${e}?lang=${r}&uid=${n}`).then(async (i) => {
      const s = (await i.json()).metadata;
      return {
        name: s.title,
        serviceDescription: s.serviceDescription,
        description: s.abstract,
        legalConstraints: s.legalConstraints,
        link: GA(s.link),
        revisionDate: s.revisionDate,
        keyword: s.keyword,
        responsibleParty: s.responsibleParty ? UA(s.responsibleParty) : void 0,
        metadataLink: `${this.geonetworkBaseUrl}/${VA(
          r
        )}/catalog.search#/metadata/${n}`,
        isError: !1
      };
    }).catch(() => ({ isError: !0 }));
  }
  getLegendHtml(e, n, r, i) {
    const s = {
      lang: i,
      ...n && { name: n },
      ...r && { id: r.toString() }
    };
    if (s.name && s.lang) {
      window.devicePixelRatio > 1 && (s.dpi = (window.devicePixelRatio * 96).toString());
      const a = `${e}?${new URLSearchParams(
        s
      ).toString()}`;
      return fetch(a).then(async (o) => {
        if (o.status >= 400 && o.status < 600)
          throw new Error("Server responded with error code");
        const l = await o.text();
        return l ? jA(l) : void 0;
      }).catch(() => {
      });
    }
  }
}
const xp = new XA(), KA = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, ZA = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, JA = { class: "font-bold" }, QA = { class: "col-span-2" }, ek = ["title"], tk = ["title"], nk = {
  key: 4,
  class: "col-span-3"
}, rk = { class: "font-bold" }, ik = { class: "col-span-2" }, sk = ["href"], ak = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, ok = { class: "font-bold" }, lk = { class: "col-span-2" }, uk = { key: 0 }, ck = { key: 1 }, fk = { key: 2 }, hk = { key: 3 }, dk = { key: 4 }, mk = ["href"], pk = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, gk = { class: "font-bold" }, yk = { class: "col-span-2" }, vk = ["href"], _k = {
  key: 9,
  class: "col-span-3"
}, bk = { key: 10 }, Ek = { class: "text-xl" }, wk = {
  key: 11,
  class: "col-span-3"
}, xk = /* @__PURE__ */ he({
  __name: "layer-metadata",
  setup(t) {
    const e = Oh(), { metadataId: n } = He(e), { t: r, i18next: i } = Ze(), s = Se(), a = Se(!0), o = 220;
    Je(n, async (h) => {
      var d, m;
      s.value = h ? await xp.getLayerMetadata(h, i.language) : void 0, a.value = (((m = (d = s.value) == null ? void 0 : d.description) == null ? void 0 : m.length) || 0) < o;
    }), bn(() => {
      i.on("languageChanged", async () => {
        n.value && (s.value = await xp.getLayerMetadata(
          n.value,
          i.language
        ));
      });
    });
    const l = me(
      () => {
        var h, d, m;
        return a.value ? (h = s.value) == null ? void 0 : h.description : (m = (d = s.value) == null ? void 0 : d.description) == null ? void 0 : m.slice(0, o);
      }
    );
    function u() {
      a.value = !0;
    }
    function f() {
      a.value = !1;
    }
    function c() {
      e.clearMetadataId();
    }
    return (h, d) => {
      const m = rh("dompurify-html");
      return s.value ? (A(), je(v0, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: b(r)(`${s.value.title}`, { ns: "client" }),
        onClose: c
      }, {
        content: ci(() => {
          var p, g, v, y, E, w, S, P, k, C, T, N, U, R, re;
          return [
            L("div", KA, [
              s.value.name ? (A(), je(ha, {
                key: 0,
                label: b(r)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : $("v-if", !0),
              s.value.serviceDescription ? (A(), je(ha, {
                key: 1,
                label: b(r)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : $("v-if", !0),
              s.value.description ? (A(), V("div", ZA, [
                L("span", JA, ue(b(r)("Description")), 1),
                L("span", QA, [
                  $l(L("span", null, null, 512), [
                    [m, b(l)]
                  ]),
                  a.value ? $("v-if", !0) : (A(), V("button", {
                    key: 0,
                    title: b(r)("Display full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, ek)),
                  a.value && (((p = b(l)) == null ? void 0 : p.length) || 0) > o ? (A(), V("button", {
                    key: 1,
                    title: b(r)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: f,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, tk)) : $("v-if", !0)
                ])
              ])) : $("v-if", !0),
              s.value.legalConstraints ? (A(), je(ha, {
                key: 3,
                label: b(r)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : $("v-if", !0),
              ((g = s.value.link) == null ? void 0 : g.length) !== 0 ? (A(), V("div", nk, [
                (A(!0), V(Ve, null, Pn(s.value.link, (M) => (A(), V("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: M
                }, [
                  L("span", rk, ue(b(r)("Url vers la resource")), 1),
                  L("span", ik, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: M
                    }, ue(M), 9, sk)
                  ])
                ]))), 128))
              ])) : $("v-if", !0),
              s.value.revisionDate ? (A(), je(ha, {
                key: 5,
                label: b(r)("Revision date"),
                value: b(IA)(s.value.revisionDate, b(i).language)
              }, null, 8, ["label", "value"])) : $("v-if", !0),
              s.value.keyword ? (A(), je(ha, {
                key: 6,
                label: b(r)("Keywords"),
                value: (v = s.value.keyword) == null ? void 0 : v.join(",")
              }, null, 8, ["label", "value"])) : $("v-if", !0),
              s.value.responsibleParty ? (A(), V("div", ak, [
                L("div", ok, ue(b(r)("Contact")), 1),
                L("div", lk, [
                  (y = s.value.responsibleParty) != null && y.organisaton ? (A(), V("p", uk, ue((E = s.value.responsibleParty) == null ? void 0 : E.organisaton), 1)) : $("v-if", !0),
                  (w = s.value.responsibleParty) != null && w.name ? (A(), V("p", ck, ue((S = s.value.responsibleParty) == null ? void 0 : S.name), 1)) : $("v-if", !0),
                  (P = s.value.responsibleParty) != null && P.unknown ? (A(), V("p", fk, ue((k = s.value.responsibleParty) == null ? void 0 : k.unknown), 1)) : $("v-if", !0),
                  (C = s.value.responsibleParty) != null && C.address ? (A(), V("p", hk, ue((T = s.value.responsibleParty) == null ? void 0 : T.address), 1)) : $("v-if", !0),
                  (N = s.value.responsibleParty) != null && N.email ? (A(), V("p", dk, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((U = s.value.responsibleParty) == null ? void 0 : U.email)
                    }, ue((R = s.value.responsibleParty) == null ? void 0 : R.email), 9, mk)
                  ])) : $("v-if", !0)
                ])
              ])) : $("v-if", !0),
              s.value.metadataLink ? (A(), V("div", pk, [
                L("span", gk, ue(b(r)("Link to the metadata")), 1),
                L("span", yk, [
                  L("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, ue(b(r)("link")), 9, vk)
                ])
              ])) : $("v-if", !0),
              s.value.isError ? (A(), V("div", _k, ue(b(r)("The metadata is right now not available")), 1)) : $("v-if", !0),
              s.value.legendHtml ? (A(), V("div", bk, [
                L("h4", Ek, ue(b(r)("Legend")), 1),
                $l(L("span", null, null, 512), [
                  [m, (re = s.value.legendHtml) == null ? void 0 : re.innerHTML]
                ])
              ])) : $("v-if", !0),
              s.value.hasLegend ? $("v-if", !0) : (A(), V("div", wk, ue(b(r)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : $("v-if", !0);
    };
  }
}), Sk = /* @__PURE__ */ pe(xk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-metadata/layer-metadata.vue"]]), Ok = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class Mk {
  bootstrap() {
    this.restore();
    let e;
    e = _n(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = _t(), { lang: n } = He(e);
    Je(
      n,
      (r, i) => {
        i !== r && (Me.setValue(di, r), document.documentElement.setAttribute("lang", r));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Me.getValue(di);
    if (e) {
      const { setLang: n } = _t(), { i18next: r } = Ze();
      r.changeLanguage(e), n(e);
    }
  }
}
const Tk = new Mk(), Nk = /* @__PURE__ */ he({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: n } = Ze(), { setLang: r } = _t(), { lang: i } = He(_t()), s = me(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: n(l),
        value: l,
        ariaLabel: n("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = n("Changer de langue");
    Tk.bootstrap();
    function o(l) {
      e.changeLanguage(l), r(l);
    }
    return (l, u) => (A(), V("div", null, [
      ne(Zy, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: b(s),
        placeholder: b(a),
        modelValue: b(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => qe(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), Ck = /* @__PURE__ */ pe(Nk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/nav-bars/language-selector.vue"]]);
class Lk {
  setCurrentThemeColors(e) {
    const n = document.querySelector(":root");
    ["primary", "secondary", "tertiary"].forEach((i) => {
      const s = getComputedStyle(n).getPropertyValue(
        `--${e}-${i}`
      );
      n.style.setProperty(`--color-${i}`, s);
    });
  }
}
const Pk = new Lk(), Ak = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, kk = /* @__PURE__ */ L("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ L("img", { src: Ok })
], -1), Dk = /* @__PURE__ */ L("div", { class: "grow text-center" }, "search", -1), Ik = { class: "h-full flex" }, Rk = { class: "hidden lg:inline-block" }, $k = { class: "border-l-[1px] border-stone-300 h-full" }, Fk = /* @__PURE__ */ he({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Ze(), n = _t(), { layersOpen: r, myLayersTabOpen: i, themeGridOpen: s } = He(n), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = n, u = Yt(), { theme: f } = He(u);
    Je(
      f,
      (h) => {
        h && Pk.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      r.value ? r.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var m, p;
      return A(), V("header", Ak, [
        kk,
        Dk,
        L("div", null, [
          L("ul", Ik, [
            L("li", null, [
              L("button", {
                class: Ce(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(m = b(f)) == null ? void 0 : m.name}`]),
                onClick: c
              }, [
                L("span", Rk, ue(b(e)(`${(p = b(f)) == null ? void 0 : p.name}`)), 1)
              ], 2)
            ]),
            L("li", $k, [
              ne(Ck, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), Vk = /* @__PURE__ */ pe(Fk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/header/header-bar.vue"]]), jk = { class: "block text-[13px] sm:text-base uppercase" }, Gk = /* @__PURE__ */ he({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), V("button", {
      class: Ce(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      L("span", {
        class: Ce(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      L("span", jk, ue(e.label), 1)
    ], 2));
  }
}), Nr = /* @__PURE__ */ pe(Gk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/button-icon.vue"]]), Uk = ["href"], Bk = /* @__PURE__ */ he({
  __name: "button-link",
  props: {
    label: { type: String, required: !0 },
    link: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), V("a", {
      class: "h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary",
      href: `${e.link}`,
      target: "_blank"
    }, ue(n.$props.label), 9, Uk));
  }
}), Jr = /* @__PURE__ */ pe(Bk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/button-link.vue"]]), qk = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, Wk = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, Hk = { class: "flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, zk = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, Yk = /* @__PURE__ */ he({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: n } = Ze(), { setLayersOpen: r } = _t(), { layersOpen: i } = He(_t());
    return (s, a) => (A(), V("footer", qk, [
      $(" left buttons "),
      L("ul", Wk, [
        L("li", null, [
          ne(Nr, {
            label: b(e)("Layers", { ns: "client" }),
            icon: "layers",
            active: b(i),
            onClick: a[0] || (a[0] = () => b(r)(!b(i)))
          }, null, 8, ["label", "active"])
        ]),
        $(`TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      `),
        L("li", null, [
          ne(Nr, {
            class: "text-gray-300",
            label: b(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ne(Nr, {
            class: "text-gray-300",
            label: b(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ne(Nr, {
            class: "text-gray-300",
            label: b(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ne(Nr, {
            class: "text-gray-300",
            label: b(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      $(" center buttons "),
      L("div", Hk, [
        ne(Nr, {
          class: "text-gray-300",
          label: b(e)("Dessin", { ns: "client" }),
          icon: "draw"
        }, null, 8, ["label"]),
        ne(Nr, {
          class: "text-gray-300 hidden sm:block",
          label: b(e)("Mesurer", { ns: "client" }),
          icon: "measure"
        }, null, 8, ["label"]),
        ne(Nr, {
          class: "text-gray-300 hidden sm:block",
          label: b(e)("Imprimer", { ns: "client" }),
          icon: "print"
        }, null, 8, ["label"]),
        ne(Nr, {
          class: "text-gray-300",
          label: b(e)("Partager", { ns: "client" }),
          icon: "share"
        }, null, 8, ["label"])
      ]),
      $(" right buttons "),
      L("div", zk, [
        ne(Jr, {
          class: "hidden lg:flex text-gray-500",
          label: b(e)("What's new", { ns: "client" }),
          link: `https://geoportail.lu/${b(n).language}/questions/whats-new/`
        }, null, 8, ["label", "link"]),
        $("TODO get geonetworkBaseUrl from config"),
        ne(Jr, {
          class: "hidden lg:flex text-gray-500",
          label: b(e)("Geocatalogue", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        $("TODO handle feedback links (for different portals?)"),
        ne(Jr, {
          class: "hidden lg:flex text-gray-500",
          label: b(e)("Feedback", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        ne(Jr, {
          class: "hidden lg:flex text-gray-500",
          label: b(e)("A Propos", { ns: "client" }),
          link: `https://www.geoportail.lu/${b(n).language}/propos/`
        }, null, 8, ["label", "link"]),
        ne(Jr, {
          class: "hidden lg:flex text-gray-500",
          label: b(e)("Aide", { ns: "client" }),
          link: `https://www.geoportail.lu/${b(n).language}/documentation/`
        }, null, 8, ["label", "link"]),
        ne(Jr, {
          class: "hidden lg:flex text-gray-500",
          label: b(e)("Contact", { ns: "client" }),
          link: `https://www.geoportail.lu/${b(n).language}/propos/contactez-nous/`
        }, null, 8, ["label", "link"]),
        ne(Jr, {
          class: "text-gray-500",
          label: b(e)("Legalites", { ns: "client" }),
          link: `https://www.geoportail.lu/${b(n).language}/propos/mentions-legales/`
        }, null, 8, ["label", "link"]),
        ne(Jr, {
          class: "text-gray-500",
          label: b(e)("ACT", { ns: "client" }),
          link: "http://www.act.public.lu/"
        }, null, 8, ["label", "link"])
      ])
    ]));
  }
}), Xk = /* @__PURE__ */ pe(Yk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/footer-bar.vue"]]), Kk = { class: "flex flex-row flex-wrap pl-2.5" }, Zk = ["onClick"], Jk = { class: "text-2xl absolute top-5" }, Qk = /* @__PURE__ */ he({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t, { t: n } = Ze();
    return (r, i) => (A(), V("div", Kk, [
      (A(!0), V(Ve, null, Pn(e.themes, (s) => (A(), V("button", {
        class: Ce(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => r.$emit("setTheme", s.name)
      }, [
        L("div", Jk, ue(b(n)(`${s.name}`)), 1),
        L("div", {
          class: Ce(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, Zk))), 128))
    ]));
  }
}), eD = /* @__PURE__ */ pe(Qk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-grid.vue"]]), tD = ["aria-expanded"], nD = { class: "py-0.5" }, rD = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, iD = { class: "py-[3px]" }, sD = { class: "flex flex-row flex-wrap ml-1 w-12" }, aD = /* @__PURE__ */ he({
  __name: "theme-selector-button",
  props: {
    themes: { type: Array, required: !0 },
    currentTheme: { type: null, required: !1 },
    isOpen: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t, { t: n } = Ze(), r = me(() => {
      var i;
      return ((i = e.themes) == null ? void 0 : i.slice(0, 8)) || [];
    });
    return (i, s) => {
      var a;
      return A(), V("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": e.isOpen
      }, [
        L("span", nD, ue(b(n)("Theme")) + ": " + ue(b(n)(`${(a = e.currentTheme) == null ? void 0 : a.name}`)), 1),
        L("span", rD, [
          L("span", iD, ue(b(n)("Changer")), 1),
          L("span", sD, [
            (A(!0), V(Ve, null, Pn(b(r), (o) => (A(), V("div", {
              class: Ce(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, tD);
    };
  }
}), oD = /* @__PURE__ */ pe(aD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-selector-button.vue"]]), lD = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, uD = /* @__PURE__ */ he({
  __name: "theme-selector",
  setup(t) {
    const e = _t(), { setThemeGridOpen: n } = e, { themeGridOpen: r } = He(e), i = Yt(), s = es(), { theme: a, themes: o } = He(i), l = me(
      () => {
        var c;
        return ((c = o.value) == null ? void 0 : c.filter(
          (h) => {
            var d;
            return ((d = h.metadata) == null ? void 0 : d.display_in_switcher) === !0;
          }
        )) || [];
      }
    );
    function u() {
      n(!r.value);
    }
    function f(c) {
      s.setTheme(c), u();
    }
    return (c, h) => (A(), V(Ve, null, [
      ne(oD, {
        onClick: u,
        themes: b(l),
        currentTheme: b(a),
        isOpen: b(r)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      b(r) ? (A(), V("div", lD, [
        ne(eD, {
          onSetTheme: f,
          themes: b(l)
        }, null, 8, ["themes"])
      ])) : $("v-if", !0)
    ], 64));
  }
}), cD = /* @__PURE__ */ pe(uD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-selector.vue"]]);
function If(t, e = 0) {
  const { name: n, id: r, children: i, metadata: s } = t;
  return {
    name: n,
    id: r,
    depth: e,
    children: i == null ? void 0 : i.map((a) => If(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const fD = {
  key: 0,
  class: "mb-7"
}, hD = /* @__PURE__ */ he({
  __name: "catalog-tree",
  setup(t) {
    const e = mt(), n = Yt(), r = Kn(), i = et(), s = et(), a = me(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = He(n);
    _n(l);
    function l() {
      var c;
      if (n.theme && e.layers) {
        const h = i.value && i.value.id === ((c = n.theme) == null ? void 0 : c.id) ? i.value : If(n.theme);
        i.value = Gs.updateLayers(
          h,
          e.layers
        );
      }
    }
    _n(() => {
      if (o.value) {
        const c = s.value ? s.value : If(o.value);
        s.value = Gs.updateLayers(
          c,
          e.layers3d
        );
      }
    });
    function u(c, h) {
      const d = h ? s : i;
      d.value = Gs.toggleNode(
        c.id,
        d.value,
        "expanded"
      );
    }
    function f(c, h) {
      r.toggleLayer(+c.id, !c.checked, h);
    }
    return (c, h) => (A(), V("div", null, [
      $(" 3D layers catalog, only displayed when 3D is active "),
      b(s) && b(e).is3dActive ? (A(), V("div", fD, [
        (A(), je(kf, {
          node: b(s),
          key: b(s).id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : $("v-if", !0),
      $(" Main catalog, displays by default and 3D terrain active "),
      b(i) && b(a) ? (A(), je(kf, {
        node: b(i),
        key: b(i).id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : $("v-if", !0)
    ]));
  }
}), dD = /* @__PURE__ */ pe(hD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/catalog/catalog-tree.vue"]]), mD = /* @__PURE__ */ he({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = He(_t());
    return (n, r) => (A(), V(Ve, null, [
      ne(cD),
      b(e) === !1 ? (A(), je(dD, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : $("v-if", !0)
    ], 64));
  }
}), pD = /* @__PURE__ */ pe(mD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Sp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _r(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sp(Object(n), !0).forEach(function(r) {
      gD(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xl(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xl = function(e) {
    return typeof e;
  } : xl = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xl(t);
}
function gD(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Gr() {
  return Gr = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Gr.apply(this, arguments);
}
function yD(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function vD(t, e) {
  if (t == null)
    return {};
  var n = yD(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
var _D = "1.15.0";
function Rr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var qr = Rr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Eo = Rr(/Edge/i), Op = Rr(/firefox/i), Ia = Rr(/safari/i) && !Rr(/chrome/i) && !Rr(/android/i), A0 = Rr(/iP(ad|od|hone)/i), k0 = Rr(/chrome/i) && Rr(/android/i), D0 = {
  capture: !1,
  passive: !1
};
function Fe(t, e, n) {
  t.addEventListener(e, n, !qr && D0);
}
function ke(t, e, n) {
  t.removeEventListener(e, n, !qr && D0);
}
function cu(t, e) {
  if (!!e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function bD(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function rr(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && cu(t, e) : cu(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = bD(t));
  }
  return null;
}
var Mp = /\s+/g;
function hn(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(Mp, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(Mp, " ");
    }
}
function ye(t, e, n) {
  var r = t && t.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function Us(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var r = ye(t, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function I0(t, e, n) {
  if (t) {
    var r = t.getElementsByTagName(e), i = 0, s = r.length;
    if (n)
      for (; i < s; i++)
        n(r[i], i);
    return r;
  }
  return [];
}
function pr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Et(t, e, n, r, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var s, a, o, l, u, f, c;
    if (t !== window && t.parentNode && t !== pr() ? (s = t.getBoundingClientRect(), a = s.top, o = s.left, l = s.bottom, u = s.right, f = s.height, c = s.width) : (a = 0, o = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, c = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !qr))
      do
        if (i && i.getBoundingClientRect && (ye(i, "transform") !== "none" || n && ye(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          a -= h.top + parseInt(ye(i, "border-top-width")), o -= h.left + parseInt(ye(i, "border-left-width")), l = a + s.height, u = o + s.width;
          break;
        }
      while (i = i.parentNode);
    if (r && t !== window) {
      var d = Us(i || t), m = d && d.a, p = d && d.d;
      d && (a /= p, o /= m, c /= m, f /= p, l = a + f, u = o + c);
    }
    return {
      top: a,
      left: o,
      bottom: l,
      right: u,
      width: c,
      height: f
    };
  }
}
function Tp(t, e, n) {
  for (var r = oi(t, !0), i = Et(t)[e]; r; ) {
    var s = Et(r)[n], a = void 0;
    if (n === "top" || n === "left" ? a = i >= s : a = i <= s, !a)
      return r;
    if (r === pr())
      break;
    r = oi(r, !1);
  }
  return !1;
}
function Xs(t, e, n, r) {
  for (var i = 0, s = 0, a = t.children; s < a.length; ) {
    if (a[s].style.display !== "none" && a[s] !== ge.ghost && (r || a[s] !== ge.dragged) && rr(a[s], n.draggable, t, !1)) {
      if (i === e)
        return a[s];
      i++;
    }
    s++;
  }
  return null;
}
function Ah(t, e) {
  for (var n = t.lastElementChild; n && (n === ge.ghost || ye(n, "display") === "none" || e && !cu(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function Mn(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ge.clone && (!e || cu(t, e)) && n++;
  return n;
}
function Np(t) {
  var e = 0, n = 0, r = pr();
  if (t)
    do {
      var i = Us(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, n += t.scrollTop * a;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function ED(t, e) {
  for (var n in t)
    if (!!t.hasOwnProperty(n)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === t[n][r])
          return Number(n);
    }
  return -1;
}
function oi(t, e) {
  if (!t || !t.getBoundingClientRect)
    return pr();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = ye(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return pr();
        if (r || e)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return pr();
}
function wD(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Dc(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Ra;
function R0(t, e) {
  return function() {
    if (!Ra) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), Ra = setTimeout(function() {
        Ra = void 0;
      }, e);
    }
  };
}
function xD() {
  clearTimeout(Ra), Ra = void 0;
}
function $0(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function F0(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
var gn = "Sortable" + new Date().getTime();
function SD() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(ye(i, "display") === "none" || i === ge.ghost)) {
            t.push({
              target: i,
              rect: Et(i)
            });
            var s = _r({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = Us(i, !0);
              a && (s.top -= a.f, s.left -= a.e);
            }
            i.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(r) {
      t.push(r);
    },
    removeAnimationState: function(r) {
      t.splice(ED(t, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof r == "function" && r();
        return;
      }
      var s = !1, a = 0;
      t.forEach(function(o) {
        var l = 0, u = o.target, f = u.fromRect, c = Et(u), h = u.prevFromRect, d = u.prevToRect, m = o.rect, p = Us(u, !0);
        p && (c.top -= p.f, c.left -= p.e), u.toRect = c, u.thisAnimationDuration && Dc(h, c) && !Dc(f, c) && (m.top - c.top) / (m.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = MD(m, h, d, i.options)), Dc(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, m, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(e), s ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, i, s, a) {
      if (a) {
        ye(r, "transition", ""), ye(r, "transform", "");
        var o = Us(this.el), l = o && o.a, u = o && o.d, f = (i.left - s.left) / (l || 1), c = (i.top - s.top) / (u || 1);
        r.animatingX = !!f, r.animatingY = !!c, ye(r, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = OD(r), ye(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ye(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ye(r, "transition", ""), ye(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function OD(t) {
  return t.offsetWidth;
}
function MD(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var _s = [], Ic = {
  initializeByDefault: !0
}, wo = {
  mount: function(e) {
    for (var n in Ic)
      Ic.hasOwnProperty(n) && !(n in e) && (e[n] = Ic[n]);
    _s.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), _s.push(e);
  },
  pluginEvent: function(e, n, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var s = e + "Global";
    _s.forEach(function(a) {
      !n[a.pluginName] || (n[a.pluginName][s] && n[a.pluginName][s](_r({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](_r({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, i) {
    _s.forEach(function(o) {
      var l = o.pluginName;
      if (!(!e.options[l] && !o.initializeByDefault)) {
        var u = new o(e, n, e.options);
        u.sortable = e, u.options = e.options, e[l] = u, Gr(r, u.defaults);
      }
    });
    for (var s in e.options)
      if (!!e.options.hasOwnProperty(s)) {
        var a = this.modifyOption(e, s, e.options[s]);
        typeof a < "u" && (e.options[s] = a);
      }
  },
  getEventProperties: function(e, n) {
    var r = {};
    return _s.forEach(function(i) {
      typeof i.eventProperties == "function" && Gr(r, i.eventProperties.call(n[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var i;
    return _s.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[n] == "function" && (i = s.optionListeners[n].call(e[s.pluginName], r));
    }), i;
  }
};
function TD(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, m = t.extraEventProperties;
  if (e = e || n && n[gn], !!e) {
    var p, g = e.options, v = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !qr && !Eo ? p = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (p = document.createEvent("Event"), p.initEvent(r, !0, !0)), p.to = a || n, p.from = o || n, p.item = i || n, p.clone = s, p.oldIndex = l, p.newIndex = u, p.oldDraggableIndex = f, p.newDraggableIndex = c, p.originalEvent = h, p.pullMode = d ? d.lastPutMode : void 0;
    var y = _r(_r({}, m), wo.getEventProperties(r, e));
    for (var E in y)
      p[E] = y[E];
    n && n.dispatchEvent(p), g[v] && g[v].call(e, p);
  }
}
var ND = ["evt"], sn = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, s = vD(r, ND);
  wo.pluginEvent.bind(ge)(e, n, _r({
    dragEl: X,
    parentEl: ct,
    ghostEl: Oe,
    rootEl: rt,
    nextEl: Bi,
    lastDownEl: Sl,
    cloneEl: ot,
    cloneHidden: ai,
    dragStarted: wa,
    putSortable: Ct,
    activeSortable: ge.active,
    originalEvent: i,
    oldIndex: Ps,
    oldDraggableIndex: $a,
    newIndex: dn,
    newDraggableIndex: ni,
    hideGhostForTarget: U0,
    unhideGhostForTarget: B0,
    cloneNowHidden: function() {
      ai = !0;
    },
    cloneNowShown: function() {
      ai = !1;
    },
    dispatchSortableEvent: function(o) {
      Wt({
        sortable: n,
        name: o,
        originalEvent: i
      });
    }
  }, s));
};
function Wt(t) {
  TD(_r({
    putSortable: Ct,
    cloneEl: ot,
    targetEl: X,
    rootEl: rt,
    oldIndex: Ps,
    oldDraggableIndex: $a,
    newIndex: dn,
    newDraggableIndex: ni
  }, t));
}
var X, ct, Oe, rt, Bi, Sl, ot, ai, Ps, dn, $a, ni, Qo, Ct, xs = !1, fu = !1, hu = [], $i, Fn, Rc, $c, Cp, Lp, wa, bs, Fa, Va = !1, el = !1, Ol, Dt, Fc = [], Rf = !1, du = [], zu = typeof document < "u", tl = A0, Pp = Eo || qr ? "cssFloat" : "float", CD = zu && !k0 && !A0 && "draggable" in document.createElement("div"), V0 = function() {
  if (!!zu) {
    if (qr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), j0 = function(e, n) {
  var r = ye(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = Xs(e, 0, n), a = Xs(e, 1, n), o = s && ye(s), l = a && ye(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Et(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && r[Pp] === "none" || a && r[Pp] === "none" && u + f > i) ? "vertical" : "horizontal";
}, LD = function(e, n, r) {
  var i = r ? e.left : e.top, s = r ? e.right : e.bottom, a = r ? e.width : e.height, o = r ? n.left : n.top, l = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, PD = function(e, n) {
  var r;
  return hu.some(function(i) {
    var s = i[gn].options.emptyInsertThreshold;
    if (!(!s || Ah(i))) {
      var a = Et(i), o = e >= a.left - s && e <= a.right + s, l = n >= a.top - s && n <= a.bottom + s;
      if (o && l)
        return r = i;
    }
  }), r;
}, G0 = function(e) {
  function n(s, a) {
    return function(o, l, u, f) {
      var c = o.options.group.name && l.options.group.name && o.options.group.name === l.options.group.name;
      if (s == null && (a || c))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (a && s === "clone")
        return s;
      if (typeof s == "function")
        return n(s(o, l, u, f), a)(o, l, u, f);
      var h = (a ? o : l).options.group.name;
      return s === !0 || typeof s == "string" && s === h || s.join && s.indexOf(h) > -1;
    };
  }
  var r = {}, i = e.group;
  (!i || xl(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, e.group = r;
}, U0 = function() {
  !V0 && Oe && ye(Oe, "display", "none");
}, B0 = function() {
  !V0 && Oe && ye(Oe, "display", "");
};
zu && !k0 && document.addEventListener("click", function(t) {
  if (fu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), fu = !1, !1;
}, !0);
var Fi = function(e) {
  if (X) {
    e = e.touches ? e.touches[0] : e;
    var n = PD(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[gn]._onDragOver(r);
    }
  }
}, AD = function(e) {
  X && X.parentNode[gn]._isOutsideThisEl(e.target);
};
function ge(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Gr({}, e), t[gn] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return j0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, o) {
      a.setData("Text", o.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: ge.supportPointer !== !1 && "PointerEvent" in window && !Ia,
    emptyInsertThreshold: 5
  };
  wo.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  G0(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : CD, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Fe(t, "pointerdown", this._onTapStart) : (Fe(t, "mousedown", this._onTapStart), Fe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Fe(t, "dragover", this), Fe(t, "dragenter", this)), hu.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Gr(this, SD());
}
ge.prototype = {
  constructor: ge,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (bs = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, X) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var n = this, r = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (jD(r), !X && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ia && l && l.tagName.toUpperCase() === "SELECT") && (l = rr(l, i.draggable, r, !1), !(l && l.animated) && Sl !== l)) {
        if (Ps = Mn(l), $a = Mn(l, i.draggable), typeof f == "function") {
          if (f.call(this, e, l, this)) {
            Wt({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: l,
              toEl: r,
              fromEl: r
            }), sn("filter", n, {
              evt: e
            }), s && e.cancelable && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(c) {
          if (c = rr(u, c.trim(), r, !1), c)
            return Wt({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: l,
              fromEl: r,
              toEl: r
            }), sn("filter", n, {
              evt: e
            }), !0;
        }), f)) {
          s && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !rr(u, i.handle, r, !1) || this._prepareDragStart(e, o, l);
      }
    }
  },
  _prepareDragStart: function(e, n, r) {
    var i = this, s = i.el, a = i.options, o = s.ownerDocument, l;
    if (r && !X && r.parentNode === s) {
      var u = Et(r);
      if (rt = s, X = r, ct = X.parentNode, Bi = X.nextSibling, Sl = r, Qo = a.group, ge.dragged = X, $i = {
        target: X,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Cp = $i.clientX - u.left, Lp = $i.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, X.style["will-change"] = "all", l = function() {
        if (sn("delayEnded", i, {
          evt: e
        }), ge.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Op && i.nativeDraggable && (X.draggable = !0), i._triggerDragStart(e, n), Wt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), hn(X, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        I0(X, f.trim(), Vc);
      }), Fe(o, "dragover", Fi), Fe(o, "mousemove", Fi), Fe(o, "touchmove", Fi), Fe(o, "mouseup", i._onDrop), Fe(o, "touchend", i._onDrop), Fe(o, "touchcancel", i._onDrop), Op && this.nativeDraggable && (this.options.touchStartThreshold = 4, X.draggable = !0), sn("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Eo || qr))) {
        if (ge.eventCanceled) {
          this._onDrop();
          return;
        }
        Fe(o, "mouseup", i._disableDelayedDrag), Fe(o, "touchend", i._disableDelayedDrag), Fe(o, "touchcancel", i._disableDelayedDrag), Fe(o, "mousemove", i._delayedDragTouchMoveHandler), Fe(o, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && Fe(o, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    X && Vc(X), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    ke(e, "mouseup", this._disableDelayedDrag), ke(e, "touchend", this._disableDelayedDrag), ke(e, "touchcancel", this._disableDelayedDrag), ke(e, "mousemove", this._delayedDragTouchMoveHandler), ke(e, "touchmove", this._delayedDragTouchMoveHandler), ke(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Fe(document, "pointermove", this._onTouchMove) : n ? Fe(document, "touchmove", this._onTouchMove) : Fe(document, "mousemove", this._onTouchMove) : (Fe(X, "dragend", this), Fe(rt, "dragstart", this._onDragStart));
    try {
      document.selection ? Ml(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (xs = !1, rt && X) {
      sn("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Fe(document, "dragover", AD);
      var r = this.options;
      !e && hn(X, r.dragClass, !1), hn(X, r.ghostClass, !0), ge.active = this, e && this._appendGhost(), Wt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Fn) {
      this._lastX = Fn.clientX, this._lastY = Fn.clientY, U0();
      for (var e = document.elementFromPoint(Fn.clientX, Fn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Fn.clientX, Fn.clientY), e !== n); )
        n = e;
      if (X.parentNode[gn]._isOutsideThisEl(e), n)
        do {
          if (n[gn]) {
            var r = void 0;
            if (r = n[gn]._onDragOver({
              clientX: Fn.clientX,
              clientY: Fn.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      B0();
    }
  },
  _onTouchMove: function(e) {
    if ($i) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Oe && Us(Oe, !0), o = Oe && a && a.a, l = Oe && a && a.d, u = tl && Dt && Np(Dt), f = (s.clientX - $i.clientX + i.x) / (o || 1) + (u ? u[0] - Fc[0] : 0) / (o || 1), c = (s.clientY - $i.clientY + i.y) / (l || 1) + (u ? u[1] - Fc[1] : 0) / (l || 1);
      if (!ge.active && !xs) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (Oe) {
        a ? (a.e += f - (Rc || 0), a.f += c - ($c || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ye(Oe, "webkitTransform", h), ye(Oe, "mozTransform", h), ye(Oe, "msTransform", h), ye(Oe, "transform", h), Rc = f, $c = c, Fn = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Oe) {
      var e = this.options.fallbackOnBody ? document.body : rt, n = Et(X, !0, tl, !0, e), r = this.options;
      if (tl) {
        for (Dt = e; ye(Dt, "position") === "static" && ye(Dt, "transform") === "none" && Dt !== document; )
          Dt = Dt.parentNode;
        Dt !== document.body && Dt !== document.documentElement ? (Dt === document && (Dt = pr()), n.top += Dt.scrollTop, n.left += Dt.scrollLeft) : Dt = pr(), Fc = Np(Dt);
      }
      Oe = X.cloneNode(!0), hn(Oe, r.ghostClass, !1), hn(Oe, r.fallbackClass, !0), hn(Oe, r.dragClass, !0), ye(Oe, "transition", ""), ye(Oe, "transform", ""), ye(Oe, "box-sizing", "border-box"), ye(Oe, "margin", 0), ye(Oe, "top", n.top), ye(Oe, "left", n.left), ye(Oe, "width", n.width), ye(Oe, "height", n.height), ye(Oe, "opacity", "0.8"), ye(Oe, "position", tl ? "absolute" : "fixed"), ye(Oe, "zIndex", "100000"), ye(Oe, "pointerEvents", "none"), ge.ghost = Oe, e.appendChild(Oe), ye(Oe, "transform-origin", Cp / parseInt(Oe.style.width) * 100 + "% " + Lp / parseInt(Oe.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var r = this, i = e.dataTransfer, s = r.options;
    if (sn("dragStart", this, {
      evt: e
    }), ge.eventCanceled) {
      this._onDrop();
      return;
    }
    sn("setupClone", this), ge.eventCanceled || (ot = F0(X), ot.removeAttribute("id"), ot.draggable = !1, ot.style["will-change"] = "", this._hideClone(), hn(ot, this.options.chosenClass, !1), ge.clone = ot), r.cloneId = Ml(function() {
      sn("clone", r), !ge.eventCanceled && (r.options.removeCloneOnHide || rt.insertBefore(ot, X), r._hideClone(), Wt({
        sortable: r,
        name: "clone"
      }));
    }), !n && hn(X, s.dragClass, !0), n ? (fu = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (ke(document, "mouseup", r._onDrop), ke(document, "touchend", r._onDrop), ke(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(r, i, X)), Fe(document, "drop", r), ye(X, "transform", "translateZ(0)")), xs = !0, r._dragStartId = Ml(r._dragStarted.bind(r, n, e)), Fe(document, "selectstart", r), wa = !0, Ia && ye(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var n = this.el, r = e.target, i, s, a, o = this.options, l = o.group, u = ge.active, f = Qo === l, c = o.sort, h = Ct || u, d, m = this, p = !1;
    if (Rf)
      return;
    function g(ae, _e) {
      sn(ae, m, _r({
        evt: e,
        isOwner: f,
        axis: d ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: s,
        canSort: c,
        fromSortable: h,
        target: r,
        completed: y,
        onMove: function(tt, Ae) {
          return nl(rt, n, X, i, tt, Et(tt), e, Ae);
        },
        changed: E
      }, _e));
    }
    function v() {
      g("dragOverAnimationCapture"), m.captureAnimationState(), m !== h && h.captureAnimationState();
    }
    function y(ae) {
      return g("dragOverCompleted", {
        insertion: ae
      }), ae && (f ? u._hideClone() : u._showClone(m), m !== h && (hn(X, Ct ? Ct.options.ghostClass : u.options.ghostClass, !1), hn(X, o.ghostClass, !0)), Ct !== m && m !== ge.active ? Ct = m : m === ge.active && Ct && (Ct = null), h === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        g("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (r === X && !X.animated || r === n && !r.animated) && (bs = null), !o.dragoverBubble && !e.rootEl && r !== document && (X.parentNode[gn]._isOutsideThisEl(e.target), !ae && Fi(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), p = !0;
    }
    function E() {
      dn = Mn(X), ni = Mn(X, o.draggable), Wt({
        sortable: m,
        name: "change",
        toEl: n,
        newIndex: dn,
        newDraggableIndex: ni,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = rr(r, o.draggable, n, !0), g("dragOver"), ge.eventCanceled)
      return p;
    if (X.contains(e.target) || r.animated && r.animatingX && r.animatingY || m._ignoreWhileAnimating === r)
      return y(!1);
    if (fu = !1, u && !o.disabled && (f ? c || (a = ct !== rt) : Ct === this || (this.lastPutMode = Qo.checkPull(this, u, X, e)) && l.checkPut(this, u, X, e))) {
      if (d = this._getDirection(e, r) === "vertical", i = Et(X), g("dragOverValid"), ge.eventCanceled)
        return p;
      if (a)
        return ct = rt, v(), this._hideClone(), g("revert"), ge.eventCanceled || (Bi ? rt.insertBefore(X, Bi) : rt.appendChild(X)), y(!0);
      var w = Ah(n, o.draggable);
      if (!w || RD(e, d, this) && !w.animated) {
        if (w === X)
          return y(!1);
        if (w && n === e.target && (r = w), r && (s = Et(r)), nl(rt, n, X, i, r, s, e, !!r) !== !1)
          return v(), w && w.nextSibling ? n.insertBefore(X, w.nextSibling) : n.appendChild(X), ct = n, E(), y(!0);
      } else if (w && ID(e, d, this)) {
        var S = Xs(n, 0, o, !0);
        if (S === X)
          return y(!1);
        if (r = S, s = Et(r), nl(rt, n, X, i, r, s, e, !1) !== !1)
          return v(), n.insertBefore(X, S), ct = n, E(), y(!0);
      } else if (r.parentNode === n) {
        s = Et(r);
        var P = 0, k, C = X.parentNode !== n, T = !LD(X.animated && X.toRect || i, r.animated && r.toRect || s, d), N = d ? "top" : "left", U = Tp(r, "top", "top") || Tp(X, "top", "top"), R = U ? U.scrollTop : void 0;
        bs !== r && (k = s[N], Va = !1, el = !T && o.invertSwap || C), P = $D(e, r, s, d, T ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, el, bs === r);
        var re;
        if (P !== 0) {
          var M = Mn(X);
          do
            M -= P, re = ct.children[M];
          while (re && (ye(re, "display") === "none" || re === Oe));
        }
        if (P === 0 || re === r)
          return y(!1);
        bs = r, Fa = P;
        var j = r.nextElementSibling, Z = !1;
        Z = P === 1;
        var J = nl(rt, n, X, i, r, s, e, Z);
        if (J !== !1)
          return (J === 1 || J === -1) && (Z = J === 1), Rf = !0, setTimeout(DD, 30), v(), Z && !j ? n.appendChild(X) : r.parentNode.insertBefore(X, Z ? j : r), U && $0(U, 0, R - U.scrollTop), ct = X.parentNode, k !== void 0 && !el && (Ol = Math.abs(k - Et(r)[N])), E(), y(!0);
      }
      if (n.contains(X))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ke(document, "mousemove", this._onTouchMove), ke(document, "touchmove", this._onTouchMove), ke(document, "pointermove", this._onTouchMove), ke(document, "dragover", Fi), ke(document, "mousemove", Fi), ke(document, "touchmove", Fi);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    ke(e, "mouseup", this._onDrop), ke(e, "touchend", this._onDrop), ke(e, "pointerup", this._onDrop), ke(e, "touchcancel", this._onDrop), ke(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (dn = Mn(X), ni = Mn(X, r.draggable), sn("drop", this, {
      evt: e
    }), ct = X && X.parentNode, dn = Mn(X), ni = Mn(X, r.draggable), ge.eventCanceled) {
      this._nulling();
      return;
    }
    xs = !1, el = !1, Va = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), $f(this.cloneId), $f(this._dragStartId), this.nativeDraggable && (ke(document, "drop", this), ke(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ia && ye(document.body, "user-select", ""), ye(X, "transform", ""), e && (wa && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), Oe && Oe.parentNode && Oe.parentNode.removeChild(Oe), (rt === ct || Ct && Ct.lastPutMode !== "clone") && ot && ot.parentNode && ot.parentNode.removeChild(ot), X && (this.nativeDraggable && ke(X, "dragend", this), Vc(X), X.style["will-change"] = "", wa && !xs && hn(X, Ct ? Ct.options.ghostClass : this.options.ghostClass, !1), hn(X, this.options.chosenClass, !1), Wt({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), rt !== ct ? (dn >= 0 && (Wt({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: rt,
      originalEvent: e
    }), Wt({
      sortable: this,
      name: "remove",
      toEl: ct,
      originalEvent: e
    }), Wt({
      rootEl: ct,
      name: "sort",
      toEl: ct,
      fromEl: rt,
      originalEvent: e
    }), Wt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), Ct && Ct.save()) : dn !== Ps && dn >= 0 && (Wt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Wt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ge.active && ((dn == null || dn === -1) && (dn = Ps, ni = $a), Wt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), rt = X = ct = Oe = Bi = ot = Sl = ai = $i = Fn = wa = dn = ni = Ps = $a = bs = Fa = Ct = Qo = ge.dragged = ge.ghost = ge.clone = ge.active = null, du.forEach(function(e) {
      e.checked = !0;
    }), du.length = Rc = $c = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        X && (this._onDragOver(e), kD(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], n, r = this.el.children, i = 0, s = r.length, a = this.options; i < s; i++)
      n = r[i], rr(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || VD(n));
    return e;
  },
  sort: function(e, n) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(s, a) {
      var o = i.children[a];
      rr(o, this.options.draggable, i, !1) && (r[s] = o);
    }, this), n && this.captureAnimationState(), e.forEach(function(s) {
      r[s] && (i.removeChild(r[s]), i.appendChild(r[s]));
    }), n && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, n) {
    return rr(e, n || this.options.draggable, this.el, !1);
  },
  option: function(e, n) {
    var r = this.options;
    if (n === void 0)
      return r[e];
    var i = wo.modifyOption(this, e, n);
    typeof i < "u" ? r[e] = i : r[e] = n, e === "group" && G0(r);
  },
  destroy: function() {
    sn("destroy", this);
    var e = this.el;
    e[gn] = null, ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart), ke(e, "pointerdown", this._onTapStart), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), hu.splice(hu.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ai) {
      if (sn("hideClone", this), ge.eventCanceled)
        return;
      ye(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), ai = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ai) {
      if (sn("showClone", this), ge.eventCanceled)
        return;
      X.parentNode == rt && !this.options.group.revertClone ? rt.insertBefore(ot, X) : Bi ? rt.insertBefore(ot, Bi) : rt.appendChild(ot), this.options.group.revertClone && this.animate(X, ot), ye(ot, "display", ""), ai = !1;
    }
  }
};
function kD(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function nl(t, e, n, r, i, s, a, o) {
  var l, u = t[gn], f = u.options.onMove, c;
  return window.CustomEvent && !qr && !Eo ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = i || e, l.relatedRect = s || Et(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function Vc(t) {
  t.draggable = !1;
}
function DD() {
  Rf = !1;
}
function ID(t, e, n) {
  var r = Et(Xs(n.el, 0, n.options, !0)), i = 10;
  return e ? t.clientX < r.left - i || t.clientY < r.top && t.clientX < r.right : t.clientY < r.top - i || t.clientY < r.bottom && t.clientX < r.left;
}
function RD(t, e, n) {
  var r = Et(Ah(n.el, n.options.draggable)), i = 10;
  return e ? t.clientX > r.right + i || t.clientX <= r.right && t.clientY > r.bottom && t.clientX >= r.left : t.clientX > r.right && t.clientY > r.top || t.clientX <= r.right && t.clientY > r.bottom + i;
}
function $D(t, e, n, r, i, s, a, o) {
  var l = r ? t.clientY : t.clientX, u = r ? n.height : n.width, f = r ? n.top : n.left, c = r ? n.bottom : n.right, h = !1;
  if (!a) {
    if (o && Ol < u * i) {
      if (!Va && (Fa === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (Va = !0), Va)
        h = !0;
      else if (Fa === 1 ? l < f + Ol : l > c - Ol)
        return -Fa;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return FD(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function FD(t) {
  return Mn(X) < Mn(t) ? 1 : -1;
}
function VD(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function jD(t) {
  du.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && du.push(r);
  }
}
function Ml(t) {
  return setTimeout(t, 0);
}
function $f(t) {
  return clearTimeout(t);
}
zu && Fe(document, "touchmove", function(t) {
  (ge.active || xs) && t.cancelable && t.preventDefault();
});
ge.utils = {
  on: Fe,
  off: ke,
  css: ye,
  find: I0,
  is: function(e, n) {
    return !!rr(e, n, e, !1);
  },
  extend: wD,
  throttle: R0,
  closest: rr,
  toggleClass: hn,
  clone: F0,
  index: Mn,
  nextTick: Ml,
  cancelNextTick: $f,
  detectDirection: j0,
  getChild: Xs
};
ge.get = function(t) {
  return t[gn];
};
ge.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ge.utils = _r(_r({}, ge.utils), r.utils)), wo.mount(r);
  });
};
ge.create = function(t, e) {
  return new ge(t, e);
};
ge.version = _D;
var gt = [], xa, Ff, Vf = !1, jc, Gc, mu, Sa;
function GD() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? Fe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Fe(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Fe(document, "touchmove", this._handleFallbackAutoScroll) : Fe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : (ke(document, "pointermove", this._handleFallbackAutoScroll), ke(document, "touchmove", this._handleFallbackAutoScroll), ke(document, "mousemove", this._handleFallbackAutoScroll)), Ap(), Tl(), xD();
    },
    nulling: function() {
      mu = Ff = xa = Vf = Sa = jc = Gc = null, gt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, s = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, o = document.elementFromPoint(s, a);
      if (mu = n, r || this.options.forceAutoScrollFallback || Eo || qr || Ia) {
        Uc(n, this.options, o, r);
        var l = oi(o, !0);
        Vf && (!Sa || s !== jc || a !== Gc) && (Sa && Ap(), Sa = setInterval(function() {
          var u = oi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, Tl()), Uc(n, i.options, u, r);
        }, 10), jc = s, Gc = a);
      } else {
        if (!this.options.bubbleScroll || oi(o, !0) === pr()) {
          Tl();
          return;
        }
        Uc(n, this.options, oi(o, !1), !1);
      }
    }
  }, Gr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Tl() {
  gt.forEach(function(t) {
    clearInterval(t.pid);
  }), gt = [];
}
function Ap() {
  clearInterval(Sa);
}
var Uc = R0(function(t, e, n, r) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = pr(), u = !1, f;
    Ff !== n && (Ff = n, Tl(), xa = e.scroll, f = e.scrollFn, xa === !0 && (xa = oi(n, !0)));
    var c = 0, h = xa;
    do {
      var d = h, m = Et(d), p = m.top, g = m.bottom, v = m.left, y = m.right, E = m.width, w = m.height, S = void 0, P = void 0, k = d.scrollWidth, C = d.scrollHeight, T = ye(d), N = d.scrollLeft, U = d.scrollTop;
      d === l ? (S = E < k && (T.overflowX === "auto" || T.overflowX === "scroll" || T.overflowX === "visible"), P = w < C && (T.overflowY === "auto" || T.overflowY === "scroll" || T.overflowY === "visible")) : (S = E < k && (T.overflowX === "auto" || T.overflowX === "scroll"), P = w < C && (T.overflowY === "auto" || T.overflowY === "scroll"));
      var R = S && (Math.abs(y - i) <= a && N + E < k) - (Math.abs(v - i) <= a && !!N), re = P && (Math.abs(g - s) <= a && U + w < C) - (Math.abs(p - s) <= a && !!U);
      if (!gt[c])
        for (var M = 0; M <= c; M++)
          gt[M] || (gt[M] = {});
      (gt[c].vx != R || gt[c].vy != re || gt[c].el !== d) && (gt[c].el = d, gt[c].vx = R, gt[c].vy = re, clearInterval(gt[c].pid), (R != 0 || re != 0) && (u = !0, gt[c].pid = setInterval(function() {
        r && this.layer === 0 && ge.active._onTouchMove(mu);
        var j = gt[this.layer].vy ? gt[this.layer].vy * o : 0, Z = gt[this.layer].vx ? gt[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ge.dragged.parentNode[gn], Z, j, t, mu, gt[this.layer].el) !== "continue" || $0(gt[this.layer].el, Z, j);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = oi(h, !1)));
    Vf = u;
  }
}, 30), q0 = function(e) {
  var n = e.originalEvent, r = e.putSortable, i = e.dragEl, s = e.activeSortable, a = e.dispatchSortableEvent, o = e.hideGhostForTarget, l = e.unhideGhostForTarget;
  if (!!n) {
    var u = r || s;
    o();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, c = document.elementFromPoint(f.clientX, f.clientY);
    l(), u && !u.el.contains(c) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: r
    }));
  }
};
function kh() {
}
kh.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = Xs(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: q0
};
Gr(kh, {
  pluginName: "revertOnSpill"
});
function Dh() {
}
Dh.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: q0
};
Gr(Dh, {
  pluginName: "removeOnSpill"
});
ge.mount(new GD());
ge.mount(Dh, kh);
const W0 = 0.5, UD = !1, pu = ls(
  "slider",
  () => {
    const t = mt(), e = Se(W0), n = Se(UD), r = me(
      () => [...t.layers].reverse()[0]
    );
    function i(a) {
      let o = a;
      a < 0.1 ? o = 0.1 : a > 0.9 && (o = 0.9), e.value = o;
    }
    function s(a) {
      n.value = a != null ? a : !n.value;
    }
    return {
      sliderActive: n,
      sliderRatio: e,
      sliderTopLayer: r,
      setRatio: i,
      toggleSlider: s
    };
  },
  {}
);
function H0(t, e) {
  const { t: n } = Ze();
  function r() {
    e == null || e.emit("clickInfo", t);
  }
  return {
    t: n,
    onClickInfo: r
  };
}
const BD = { class: "lux-layer-manager-item mt-2.5" }, qD = ["title"], WD = { class: "flex-1 text-left cursor-default" }, HD = ["aria-label", "title"], zD = /* @__PURE__ */ he({
  __name: "layer-item-background",
  props: {
    showEditButton: { type: Boolean, required: !0 },
    layer: { type: null, required: !0 }
  },
  emits: ["clickEdit", "clickInfo"],
  setup(t, { emit: e }) {
    const n = t, { t: r, onClickInfo: i } = H0(n.layer, { emit: e }), s = me(
      () => r('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: a()
      })
    );
    function a() {
      return r(n.layer.name, { ns: "client" });
    }
    return (o, l) => (A(), V("div", BD, [
      L("button", {
        class: "fa fa-info w-3",
        title: b(s),
        onClick: l[0] || (l[0] = (...u) => b(i) && b(i)(...u))
      }, null, 8, qD),
      L("span", WD, ue(a()), 1),
      t.showEditButton ? (A(), V("button", {
        key: 0,
        class: "fa fa-pencil",
        "aria-label": b(r)("Open editor panel", { ns: "client" }),
        title: b(r)("Open editor panel", { ns: "client" }),
        onClick: l[1] || (l[1] = (u) => o.$emit("clickEdit"))
      }, null, 8, HD)) : $("v-if", !0)
    ]));
  }
}), YD = /* @__PURE__ */ pe(zD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item-background.vue"]]), XD = ["id"], KD = ["aria-checked", "title"], ZD = ["id", "value", "aria-label"], JD = ["aria-checked", "aria-label"], QD = /* @__PURE__ */ he({
  __name: "layer-item-sub",
  props: {
    layer: { type: null, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    isLayerComparatorOpen: { type: Boolean, required: !0 },
    displayLayerComparatorOpen: { type: Boolean, required: !0 }
  },
  emits: ["changeOpacity", "clickToggleLayerComparator"],
  setup(t, { emit: e }) {
    var h, d, m, p;
    const n = t, { t: r } = Ze(), i = Kn(), s = me(
      () => r(i.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), a = et(
      ((d = (h = n.layer) == null ? void 0 : h.opacity) != null ? d : 1) * 100
    ), o = et(
      ((p = (m = n.layer) == null ? void 0 : m.previousOpacity) != null ? p : a.value) * 100
    );
    function l() {
      a.value === 0 ? a.value = o.value : (o.value = a.value, a.value = 0), c();
    }
    function u(g) {
      g.target && (a.value = parseInt(g.target.value), c());
    }
    function f() {
      e("clickToggleLayerComparator", n.layer);
    }
    function c() {
      e("changeOpacity", n.layer, a.value);
    }
    return (g, v) => (A(), V("div", {
      class: Ce(["lux-layer-manager-item-content", t.isOpen ? "h-6" : "h-0"]),
      id: `layer-manager-item-content-${t.layer.id}`
    }, [
      L("button", {
        class: Ce(["w-5 fa-solid", b(a) === 0 ? "fa-eye-slash" : "fa-eye"]),
        role: "switch",
        "aria-checked": b(a) === 0,
        title: b(r)("Toggle layer opacity for {{layerName}}", {
          layerName: b(s)
        }),
        onClick: l
      }, null, 10, KD),
      L("input", {
        id: `${t.layer.id}-steps-range`,
        type: "range",
        min: "0",
        max: "100",
        value: b(a),
        step: "25",
        onChange: u,
        class: "m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer",
        "aria-label": b(r)("Change opacity for {{ layerName }}", { layerName: b(s) })
      }, null, 40, ZD),
      t.displayLayerComparatorOpen ? (A(), V("button", {
        key: 0,
        role: "switch",
        class: Ce(["fa ml-auto text-sm cursor-pointer", t.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": t.isLayerComparatorOpen,
        "aria-label": b(r)("Toggle layer comparator for {{ layerName }}", {
          layerName: b(s)
        }),
        onClick: f
      }, null, 10, JD)) : $("v-if", !0)
    ], 10, XD));
  }
}), eI = /* @__PURE__ */ pe(QD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), tI = ["min", "max", "value"], nI = /* @__PURE__ */ he({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = me(() => Sc(n.minDateAllowed)), i = me(() => Sc(n.maxDateAllowed));
    function s(a) {
      e("change", a.target.value);
    }
    return (a, o) => (A(), V("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: b(r),
      max: b(i),
      value: t.dateValue ? b(Sc)(t.dateValue) : "",
      onChange: s
    }, null, 40, tI));
  }
}), jf = /* @__PURE__ */ pe(nI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), rI = { class: "lux-time-slider w-full" }, iI = ["for"], sI = /* @__PURE__ */ he({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: null, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const e = t, { t: n } = Ze(), r = et(
      e.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return A(), V("div", rI, [
        L("div", null, [
          L("label", {
            for: `${t.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, ue(b(n)("Date:")), 9, iI),
          ne(jf, {
            id: `${t.layer.id}-time-slider-start`,
            "date-value": b(r),
            "min-date-allowed": (a = e.layer.time) == null ? void 0 : a.minValue,
            "max-date-allowed": (o = e.layer.time) == null ? void 0 : o.maxValue,
            onChange: s[0] || (s[0] = (l) => i.$emit("changeTime", l))
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), aI = /* @__PURE__ */ pe(sI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), oI = { class: "lux-time-slider w-full" }, lI = ["for"], uI = ["for"], cI = /* @__PURE__ */ he({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: null, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const n = t, { t: r } = Ze(), i = et(
      n.layer.currentTimeMinValue
    ), s = et(
      n.layer.currentTimeMaxValue
    );
    function a(l) {
      e("changeTime", l, n.layer.currentTimeMaxValue);
    }
    function o(l) {
      e("changeTime", n.layer.currentTimeMinValue, l);
    }
    return (l, u) => {
      var f, c, h, d;
      return A(), V("div", oI, [
        $(" Date START datepicker input "),
        L("div", null, [
          L("label", {
            for: `${t.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, ue(b(r)("From:")), 9, lI),
          ne(jf, {
            id: `${t.layer.id}-time-slider-start`,
            "date-value": b(i),
            "min-date-allowed": (f = n.layer.time) == null ? void 0 : f.minValue,
            "max-date-allowed": (c = n.layer.time) == null ? void 0 : c.maxValue,
            onChange: a
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ]),
        $(" Date END datepicker input "),
        L("div", null, [
          L("label", {
            for: `${t.layer.id}-time-slider-end`,
            class: "lux-time-slider-label"
          }, ue(b(r)("To:")), 9, uI),
          ne(jf, {
            id: `${t.layer.id}-time-slider-end`,
            "date-value": b(s),
            "min-date-allowed": (h = n.layer.time) == null ? void 0 : h.minValue,
            "max-date-allowed": (d = n.layer.time) == null ? void 0 : d.maxValue,
            onChange: o
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), fI = /* @__PURE__ */ pe(cI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), hI = ["onKeydown", "aria-label", "title"], dI = /* @__PURE__ */ he({
  __name: "slider-range-thumb",
  props: {
    ariaLabel: { type: String, required: !1 },
    maxLimit: { type: Number, required: !1, default: 100 },
    minLimit: { type: Number, required: !1, default: 0 },
    selectedValue: { type: Number, required: !0 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = Se(!1), i = Se(), s = Se(), a = me(() => {
      var y;
      return ((y = i.value) == null ? void 0 : y.offsetWidth) || 0;
    }), o = me(() => {
      var y;
      return ((y = s.value) == null ? void 0 : y.offsetWidth) || 40;
    }), l = Se(n.selectedValue), u = me(() => a.value * l.value / 100 - o.value / 2), f = me(() => ({ left: `${u.value}px` }));
    wi(() => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", g);
    }), Je(
      () => n.selectedValue,
      (y) => {
        l.value = y;
      }
    );
    function c(y) {
      l.value = Math.max(Math.min(y, 100), 0), e("change", l.value, r.value);
    }
    function h() {
      c(l.value - 1);
    }
    function d() {
      c(l.value + 1);
    }
    function m() {
      r.value = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", g);
    }
    function p(y) {
      !r.value || c(v(y));
    }
    function g(y) {
      r.value = !1, c(v(y)), document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", g);
    }
    function v(y) {
      var w, S;
      const E = (w = i.value) != null && w.offsetWidth ? (y.clientX - o.value * 2) * 100 / ((S = i.value) == null ? void 0 : S.offsetWidth) : 0;
      return Math.round(Math.max(Math.min(E, n.maxLimit), n.minLimit));
    }
    return (y, E) => (A(), V("div", {
      class: "w-full",
      role: "slider",
      ref_key: "elRefTrack",
      ref: i
    }, [
      L("button", {
        class: Ce(["lux-slidebar-thumb", r.value ? "dragging" : ""]),
        ref_key: "elRefThumb",
        ref: s,
        style: Ei(b(f)),
        onKeydown: [
          or(ar(d, ["stop"]), ["space"]),
          or(ar(d, ["stop"]), ["right"]),
          or(ar(h, ["stop"]), ["left"]),
          or(ar(h, ["stop"]), ["delete"])
        ],
        onMousedown: m,
        onMousemove: p,
        onMouseup: g,
        "aria-label": t.ariaLabel,
        title: t.ariaLabel
      }, null, 46, hI)
    ], 512));
  }
}), kp = /* @__PURE__ */ pe(dI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range-thumb.vue"]]), mI = /* @__PURE__ */ he({
  __name: "slider-range-active-track",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = Se(), i = Se(), s = me(
      () => r.value ? Math.round(
        r.value.offsetWidth * n.selectedMinValue / 100
      ) : 0
    ), a = me(() => {
      var f, c;
      let u = 0;
      return n.selectedMaxValue !== void 0 && ((f = r.value) == null ? void 0 : f.offsetWidth) && (u = ((c = r.value) == null ? void 0 : c.offsetWidth) * n.selectedMaxValue / 100 - s.value), Math.round(u);
    }), o = me(() => ({
      left: `${s.value}px`,
      width: `${a.value}px`
    }));
    function l(u) {
      if (r.value) {
        const f = r.value.getBoundingClientRect().x, c = (u.clientX - f) * 100 / r.value.offsetWidth;
        e("change", c);
      }
    }
    return (u, f) => (A(), V("div", {
      ref_key: "elRefFullTrack",
      ref: r,
      class: "lux-slidebar-track"
    }, [
      t.selectedMaxValue !== void 0 ? (A(), V("div", {
        key: 0,
        ref_key: "elRefSelectionTrack",
        ref: i,
        class: "lux-slidebar-track-selection",
        style: Ei(b(o)),
        onClick: l
      }, null, 4)) : $("v-if", !0),
      L("div", {
        class: "lux-slidebar-track-full",
        onClick: l
      })
    ], 512));
  }
}), pI = /* @__PURE__ */ pe(mI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range-active-track.vue"]]), gI = { class: "lux-slidebar-fake" }, yI = /* @__PURE__ */ he({
  __name: "slider-range",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 },
    ariaLabelMin: { type: String, required: !1 },
    ariaLabelMax: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = Se(n.selectedMinValue), i = Se(n.selectedMaxValue);
    function s(l, u) {
      e("change", l, n.selectedMaxValue, u);
    }
    function a(l, u) {
      e("change", n.selectedMinValue, l, u);
    }
    function o(l) {
      i.value === void 0 ? r.value = l : l >= i.value ? i.value = l : l <= n.selectedMinValue ? r.value = l : Math.abs(i.value - l) < Math.abs(r.value - l) ? i.value = l : r.value = l, e("change", r.value, i.value, !1);
    }
    return (l, u) => (A(), V("div", gI, [
      $(" Draggable Max thumb button "),
      i.value !== void 0 ? (A(), je(kp, {
        key: 0,
        ariaLabel: t.ariaLabelMax,
        minLimit: t.selectedMinValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : $("v-if", !0),
      $(" Draggable Min thumb button "),
      $(" put Min value after Max value, this is just for z-index grabbing "),
      ne(kp, {
        ariaLabel: t.ariaLabelMin,
        maxLimit: t.selectedMaxValue,
        selectedValue: r.value,
        onChange: s
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      $(" Selection highlight "),
      ne(pI, {
        selectedMinValue: t.selectedMinValue,
        selectedMaxValue: t.selectedMaxValue,
        onChange: o
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), Dp = /* @__PURE__ */ pe(yI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range.vue"]]), vI = { class: "lux-time-slider w-full" }, _I = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, bI = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, EI = { class: "lux-time-displayed-dates" }, wI = {
  key: 0,
  class: "lux-time-start-date grow"
}, xI = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, SI = /* @__PURE__ */ he({
  __name: "layer-time-slider",
  props: {
    layer: { type: null, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const n = t, { t: r } = Ze(), i = me(p), s = me(
      () => {
        var E, w;
        return (E = n.layer.time) != null && E.minValue ? new Date((w = n.layer.time) == null ? void 0 : w.minValue).getTime() : 0;
      }
    ), a = me(
      () => {
        var E, w;
        return (E = n.layer.time) != null && E.maxValue ? new Date((w = n.layer.time) == null ? void 0 : w.maxValue).getTime() : 0;
      }
    ), o = me(() => a.value - s.value), l = Se(n.layer.currentTimeMaxValue), u = Se(n.layer.currentTimeMinValue), f = me(
      () => u.value ? new Date(u.value).getTime() : void 0
    ), c = me(
      () => l.value ? new Date(l.value).getTime() : void 0
    ), h = me(
      () => m(f.value)
    ), d = me(
      () => m(c.value)
    );
    function m(E) {
      return E ? (E - s.value) / o.value * 100 : 0;
    }
    function p() {
      var N, U;
      const E = n.layer.time, w = [];
      if (!E)
        return;
      if (E.values)
        return E.values.map((R) => new Date(R).getTime());
      const S = new Date(E.minValue), P = new Date((N = E.maxValue) != null ? N : Date.now()), k = 1024, C = new Date(S.getTime()), T = (U = E.interval) != null ? U : i0;
      if (C.setFullYear(
        S.getFullYear() + k * T[0]
      ), C.setMonth(
        S.getMonth() + k * T[1],
        S.getDate() + k * T[2]
      ), C.setSeconds(S.getSeconds() + k * T[3]), C > P)
        for (let R = 0; ; R++) {
          const re = new Date(S.getTime());
          if (re.setFullYear(S.getFullYear() + R * T[0]), re.setMonth(
            S.getMonth() + R * T[1],
            S.getDate() + R * T[2]
          ), re.setSeconds(S.getSeconds() + R * T[3]), re <= P)
            w.push(re.getTime());
          else
            break;
        }
      return w;
    }
    function g(E) {
      var P;
      const w = E / 100 * (a.value - s.value) + s.value, S = OC(w, {
        minValue: s.value,
        maxValue: a.value,
        timeValueList: i.value,
        timeInterval: (P = n.layer.time) == null ? void 0 : P.interval
      });
      return Cf(S);
    }
    function v(E, w) {
      const S = g(E);
      if (u.value = S, w) {
        const P = g(w);
        l.value = P;
      }
    }
    function y(E, w, S) {
      v(E, w), S || e("changeTime", u.value, l.value);
    }
    return (E, w) => {
      var S, P, k, C, T, N, U;
      return A(), V("div", vI, [
        $(" Slider LayerTimeMode.VALUE "),
        ((S = t.layer.time) == null ? void 0 : S.mode) === b(Pr).VALUE ? (A(), V("div", _I, [
          ne(Dp, {
            ariaLabelMin: `${b(r)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: b(h),
            onChange: y
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : $("v-if", !0),
        $(" Slider LayerTimeMode.RANGE "),
        ((P = t.layer.time) == null ? void 0 : P.mode) === b(Pr).RANGE ? (A(), V("div", bI, [
          ne(Dp, {
            ariaLabelMin: `${b(r)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${b(r)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: b(h),
            selectedMaxValue: b(d),
            onChange: y
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : $("v-if", !0),
        $(" Display localized time values "),
        L("div", EI, [
          $(" Display localized time values Min value "),
          ((k = t.layer.time) == null ? void 0 : k.mode) === b(Pr).RANGE || ((C = t.layer.time) == null ? void 0 : C.mode) === b(Pr).VALUE ? (A(), V("div", wI, [
            L("span", null, ue(u.value ? b(sp)(u.value, (T = t.layer.time) == null ? void 0 : T.resolution) : "-"), 1)
          ])) : $("v-if", !0),
          $(" Display localized time values Max value "),
          ((N = t.layer.time) == null ? void 0 : N.mode) === b(Pr).RANGE ? (A(), V("div", xI, [
            L("span", null, ue(l.value ? b(sp)(l.value, (U = t.layer.time) == null ? void 0 : U.resolution) : "-"), 1)
          ])) : $("v-if", !0)
        ])
      ]);
    };
  }
}), OI = /* @__PURE__ */ pe(SI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), MI = /* @__PURE__ */ he({
  __name: "layer-time",
  props: {
    layer: { type: null, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    function n(r, i) {
      e("changeTime", r, i);
    }
    return (r, i) => {
      var s, a, o, l, u;
      return A(), V(Ve, null, [
        $(" Layer time: slider widget "),
        ((s = t.layer.time) == null ? void 0 : s.widget) === b(_l).SLIDER ? (A(), je(OI, {
          key: 0,
          layer: t.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : $("v-if", !0),
        $(" Layer time: datepicker VALUE (one date) widget "),
        ((a = t.layer.time) == null ? void 0 : a.widget) === b(_l).DATEPICKER && ((o = t.layer.time) == null ? void 0 : o.mode) === b(Pr).VALUE ? (A(), je(aI, {
          key: 1,
          layer: t.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : $("v-if", !0),
        $(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((l = t.layer.time) == null ? void 0 : l.widget) === b(_l).DATEPICKER && ((u = t.layer.time) == null ? void 0 : u.mode) === b(Pr).RANGE ? (A(), je(fI, {
          key: 2,
          layer: t.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : $("v-if", !0)
      ], 64);
    };
  }
}), TI = /* @__PURE__ */ pe(MI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time.vue"]]), NI = { class: "lux-layer-manager-item relative" }, CI = { class: "w-full flex flex-nowrap items-start gap-x-2" }, LI = ["title"], PI = ["aria-label", "title"], AI = ["aria-expanded", "aria-controls", "data-cy"], kI = { class: "grow" }, DI = ["title", "aria-label"], II = /* @__PURE__ */ he({
  __name: "layer-item",
  props: {
    is3d: { type: Boolean, required: !0 },
    layer: { type: null, required: !0 },
    dragHandleClassName: { type: String, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    isLayerComparatorOpen: { type: Boolean, required: !0 },
    displayLayerComparatorOpen: { type: Boolean, required: !0 }
  },
  emits: ["clickInfo", "clickToggle", "clickToggleLayerComparator", "clickRemove", "changeOpacity", "changeTime"],
  setup(t, { emit: e }) {
    const n = t, { t: r, onClickInfo: i } = H0(n.layer, { emit: e }), s = Kn(), a = me(
      () => r(s.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), o = me(
      () => r('Sort "{{layerName}}" in the list', {
        ns: "client",
        layerName: a.value
      })
    ), l = me(
      () => r('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: a.value
      })
    ), u = me(
      () => r('Remove layer "{{layerName}}"', {
        ns: "client",
        layerName: a.value
      })
    );
    function f(c, h) {
      e("changeTime", c, h);
    }
    return (c, h) => (A(), V("div", NI, [
      L("div", CI, [
        L("button", {
          class: Ce(["fa-solid fa-bars cursor-move mt-1", t.dragHandleClassName]),
          title: b(o)
        }, null, 10, LI),
        L("button", {
          class: "fa-solid fa-info mt-1",
          "aria-label": b(l),
          title: b(l),
          onClick: h[0] || (h[0] = (...d) => b(i) && b(i)(...d))
        }, null, 8, PI),
        L("button", {
          "aria-expanded": t.isOpen,
          "aria-controls": `layer-manager-item-content-${t.layer.id}`,
          "data-cy": `myLayerItemLabel-${t.layer.id}`,
          class: Ce([t.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: h[1] || (h[1] = (d) => c.$emit("clickToggle", t.layer))
        }, [
          L("span", kI, ue(b(a)), 1),
          t.is3d ? $("v-if", !0) : (A(), V("span", {
            key: 0,
            class: Ce(["w-3.5 fa-solid", t.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, AI),
        L("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: b(u),
          "aria-label": b(u),
          onClick: h[2] || (h[2] = (d) => c.$emit("clickRemove", t.layer))
        }, null, 8, DI)
      ]),
      $(" Layer item sub content (opacity and toggle comparator) "),
      t.is3d ? $("v-if", !0) : (A(), je(eI, {
        key: 0,
        layer: t.layer,
        isOpen: t.isOpen,
        isLayerComparatorOpen: t.isLayerComparatorOpen,
        displayLayerComparatorOpen: t.displayLayerComparatorOpen,
        onClickToggleLayerComparator: h[3] || (h[3] = (d) => c.$emit("clickToggleLayerComparator", d)),
        onChangeOpacity: h[4] || (h[4] = (d, m) => c.$emit("changeOpacity", d, m))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      $(" Layer time: slider OR datepicker widgets "),
      t.layer.time ? (A(), je(TI, {
        key: 1,
        layer: t.layer,
        onChangeTime: f
      }, null, 8, ["layer"])) : $("v-if", !0)
    ]));
  }
}), Ip = /* @__PURE__ */ pe(II, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item.vue"]]), RI = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, $I = ["id"], FI = { class: "sortable-layers" }, VI = ["id"], jI = { class: "flex flex-row justify-center space-x-1 my-2" }, GI = /* @__PURE__ */ he({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), { setMetadataId: r } = Oh(), i = mt(), s = _t(), a = ta(), o = pu(), { bgLayer: l } = He(i), { sliderActive: u } = He(o), f = me(() => [...i.layers].reverse()), c = me(() => [...i.layers3d].reverse()), h = et(), d = "drag-handle", m = me(
      () => a.isLayerStyleEditable(l.value)
    ), { setRemoteLayersOpen: p } = _t();
    bn(() => {
      const C = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${d}`,
        forceFallback: kC
      }, T = document.querySelector(".sortable-layers"), N = document.querySelector(".sortable-layers-3d");
      T && ge.create(T, {
        ...C,
        onSort: g
      }), N && ge.create(N, {
        ...C,
        onSort: v
      });
    });
    function g(C, T) {
      const N = [...C.to.children].map((U) => Number(U.id)).reverse();
      i.reorderLayers(N, T);
    }
    function v(C) {
      g(C, !0);
    }
    function y(C, T) {
      i.setLayerOpacity(C.id, T / 100);
    }
    function E(C, T, N) {
      i.setLayerTime(C.id, T, N);
    }
    function w(C) {
      i.removeLayers(C.id);
    }
    function S(C) {
      h.value = h.value !== C.id ? C.id : void 0;
    }
    function P() {
      s.openStyleEditorPanel();
    }
    function k() {
      o.toggleSlider();
    }
    return (C, T) => (A(), V("div", null, [
      b(c).length > 0 ? (A(), V("ul", RI, [
        (A(!0), V(Ve, null, Pn(b(c), (N, U) => (A(), V("li", {
          key: N.id,
          id: N.id
        }, [
          ne(Ip, {
            is3d: !0,
            dragHandleClassName: d,
            layer: N,
            isOpen: b(h) === N.id,
            isLayerComparatorOpen: b(u),
            displayLayerComparatorOpen: U === 0,
            onClickRemove: w,
            onClickToggle: S,
            onClickToggleLayerComparator: k,
            onClickInfo: (R) => b(r)(N.id),
            onChangeOpacity: y,
            onChangeTime: (R, re) => E(N, R, re)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, $I))), 128))
      ])) : $("v-if", !0),
      L("ul", FI, [
        (A(!0), V(Ve, null, Pn(b(f), (N, U) => (A(), V("li", {
          key: N.id,
          id: N.id
        }, [
          ne(Ip, {
            is3d: !1,
            dragHandleClassName: d,
            layer: N,
            isOpen: b(h) === N.id,
            isLayerComparatorOpen: b(u),
            displayLayerComparatorOpen: U === 0,
            onClickRemove: w,
            onClickToggle: S,
            onClickToggleLayerComparator: k,
            onClickInfo: (R) => b(r)(N.id),
            onChangeOpacity: y,
            onChangeTime: (R, re) => E(N, R, re)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, VI))), 128))
      ]),
      ne(YD, {
        layer: b(l) || b(ou),
        showEditButton: b(m),
        onClickInfo: T[0] || (T[0] = () => b(l) && b(r)(b(l).id)),
        onClickEdit: P
      }, null, 8, ["layer", "showEditButton"]),
      L("div", jI, [
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: T[1] || (T[1] = (N) => e("displayCatalog"))
        }, ue(b(n)("+ Add layers", { ns: "client" })), 1),
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: T[2] || (T[2] = (N) => b(p)(!0))
        }, ue(b(n)("+ Add external Wms", { ns: "client" })), 1)
      ])
    ]));
  }
}), UI = /* @__PURE__ */ pe(GI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-manager.vue"]]), BI = { class: "flex flex-col h-full pt-1.5" }, qI = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, WI = ["aria-label"], HI = { class: "flex flex-row gap-2 h-10 text-2xl" }, zI = ["aria-expanded"], YI = { key: 0 }, XI = ["aria-expanded"], KI = { class: "relative grow p-2.5 bg-primary overflow-auto" }, ZI = /* @__PURE__ */ he({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Ze(), n = _t(), { setLayersOpen: r } = n, { myLayersTabOpen: i } = He(n), { layers: s } = He(mt());
    function a() {
      n.setMyLayersTabOpen(!0);
    }
    function o() {
      n.setMyLayersTabOpen(!1);
    }
    return (l, u) => (A(), V("div", BI, [
      $(" Panel title and close button "),
      L("div", qI, [
        L("h1", null, ue(b(e)("layers", { ns: "client" })), 1),
        L("span", null, [
          L("button", {
            onClick: u[0] || (u[0] = () => b(r)(!1)),
            "aria-label": b(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, WI)
        ])
      ]),
      $(" My Layers and Catalog tab labels "),
      L("div", HI, [
        L("button", {
          onClick: a,
          class: Ce(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", b(i) ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": b(i)
        }, [
          jl(ue(b(e)("my_layers", { ns: "client" })) + " ", 1),
          b(s).length ? (A(), V("span", YI, "(" + ue(b(s).length) + ")", 1)) : $("v-if", !0)
        ], 10, zI),
        L("button", {
          onClick: o,
          class: Ce(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", b(i) ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !b(i)
        }, ue(b(e)("Catalog", { ns: "client" })), 11, XI)
      ]),
      $(" Panel content (MyLayers and Catalog) "),
      L("div", KI, [
        b(i) ? (A(), je(UI, {
          key: 0,
          onDisplayCatalog: o
        })) : $("v-if", !0),
        b(i) ? $("v-if", !0) : (A(), je(pD, { key: 1 }))
      ])
    ]));
  }
}), JI = /* @__PURE__ */ pe(ZI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-panel/layer-panel.vue"]]);
class QI {
  bootstrap() {
    let e;
    e = _n(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = pu();
    Je(
      [() => e.sliderActive, () => e.sliderRatio],
      ([n, r], [i]) => {
        n !== i && Me.setValue(Pf, n), Me.setValue(
          Af,
          r
        );
      }
    );
  }
  restore() {
    const e = Me.getValue(Pf, Sh), n = Me.getValue(Af, Vs), { toggleSlider: r, setRatio: i } = pu();
    typeof e < "u" && e !== null && (r(e), typeof n !== void 0 && n !== null && i(n != null ? n : W0));
  }
}
const e3 = new QI(), t3 = ["onKeydown"], n3 = /* @__PURE__ */ L("span", { class: "lux-slider-line" }, null, -1), r3 = /* @__PURE__ */ L("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ L("span"),
  /* @__PURE__ */ L("span")
], -1), i3 = {
  key: 0,
  class: "lux-slider-layer-label"
}, s3 = /* @__PURE__ */ L("i", { class: "fa fa-arrow-left mr-2" }, null, -1), a3 = /* @__PURE__ */ he({
  __name: "splitter-element",
  props: {
    sliderActive: { type: Boolean, required: !0 },
    sliderRatio: { type: Number, required: !0 },
    sliderTopLayer: { type: null, required: !0 },
    sliderOffset: { type: Number, required: !0 },
    containerOffset: { type: Number, required: !0 }
  },
  emits: ["moveSplitBar", "escSplitBar"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = 30, { t: s } = Ze(), a = Se(null), o = me(() => ({ left: `${r.sliderOffset}px` }));
    let l = !1;
    e({
      sliderElement: a
    });
    function u(g) {
      n("moveSplitBar", g + a.value.offsetWidth / 2);
    }
    function f() {
      l = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", h);
    }
    function c(g) {
      !l || u(g.clientX);
    }
    function h() {
      l = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }
    function d() {
      const g = r.containerOffset + a.value.offsetLeft;
      u(g + i);
    }
    function m() {
      const g = r.containerOffset + a.value.offsetLeft;
      u(g - i);
    }
    function p() {
      n("escSplitBar");
    }
    return bn(() => {
      var g;
      (g = a.value) == null || g.focus({ focusVisible: !0 });
    }), wi(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (g, v) => (A(), V("button", {
      ref_key: "sliderElement",
      ref: a,
      onMousedown: f,
      onMousemove: c,
      onMouseup: h,
      onKeydown: [
        or(ar(d, ["stop"]), ["space"]),
        or(ar(d, ["stop"]), ["right"]),
        or(ar(m, ["stop"]), ["left"]),
        or(ar(m, ["stop"]), ["delete"]),
        or(ar(p, ["stop"]), ["esc"])
      ],
      class: "left-[20px] absolute h-full w-[32px] block",
      style: Ei(b(o)),
      role: "seperator",
      "aria-controls": "map-container"
    }, [
      n3,
      r3,
      t.sliderTopLayer ? (A(), V("span", i3, [
        s3,
        L("span", null, ue(b(s)(t.sliderTopLayer.name)), 1)
      ])) : $("v-if", !0)
    ], 44, t3));
  }
}), o3 = /* @__PURE__ */ pe(a3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/slider/splitter-element.vue"]]), l3 = /* @__PURE__ */ he({
  __name: "slider-comparator",
  setup(t) {
    const e = pu(), n = g0(), r = Ir().olMap, i = Se(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = He(e), l = me(
      () => {
        var y, E;
        return ((E = (y = i.value) == null ? void 0 : y.sliderElement) == null ? void 0 : E.offsetWidth) || 0;
      }
    ), u = function() {
      var E, w, S;
      let y = (S = (w = (E = r.value) == null ? void 0 : E.getViewport()) == null ? void 0 : w.parentElement) == null ? void 0 : S.offsetLeft;
      return (y === void 0 || y === 0) && (y = d == null ? void 0 : d.offsetLeft), y !== void 0 ? y : 0;
    }, f = me(() => {
      var y, E;
      return r.value && i.value ? a.value * r.value.getSize()[0] - ((E = (y = i.value) == null ? void 0 : y.sliderElement) == null ? void 0 : E.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    e3.bootstrap(), Je([o, s], ([y, E], [w]) => {
      var S;
      y && E ? (y !== w && p(), m()) : p(), (S = r.value) == null || S.render();
    }), Je(f, () => {
      var y;
      (y = r.value) == null || y.render();
    });
    function m() {
      const y = n.getLayerFromCache(o.value);
      !y || (c = y.on(
        Xh.PRERENDER,
        function(E) {
          var U;
          const w = E.context, S = (U = r.value) == null ? void 0 : U.getSize(), P = f.value + l.value / 2, k = Mo(E, [0, 0]), C = Mo(E, [P, 0]), T = Mo(E, [0, S[1]]), N = Mo(E, [P, S[0]]);
          w.save(), w.beginPath(), w.moveTo(k[0], k[1]), w.lineTo(T[0], T[1]), w.lineTo(N[0], N[1]), w.lineTo(C[0], C[1]), w.closePath(), w.clip();
        }
      ), h = y.on(
        Xh.POSTRENDER,
        function(E) {
          E.context.restore();
        }
      ));
    }
    function p() {
      M_([c, h]);
    }
    function g(y) {
      var S;
      const E = (S = r.value) == null ? void 0 : S.getSize(), w = (y - u()) / E[0];
      e.setRatio(w);
    }
    function v() {
      e.toggleSlider();
    }
    return bn(() => {
      var y, E;
      d = (E = (y = r.value) == null ? void 0 : y.getTargetElement()) == null ? void 0 : E.closest(".map-wrapper");
    }), wi(() => {
      p();
    }), (y, E) => b(o) && b(s) ? (A(), je(o3, {
      key: 0,
      ref_key: "splitterElement",
      ref: i,
      sliderActive: b(s),
      sliderRatio: b(a),
      sliderTopLayer: b(o),
      sliderOffset: b(f),
      containerOffset: u(),
      onMoveSplitBar: g,
      onEscSplitBar: v
    }, null, 8, ["sliderActive", "sliderRatio", "sliderTopLayer", "sliderOffset", "containerOffset"])) : $("v-if", !0);
  }
}), u3 = /* @__PURE__ */ pe(l3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/slider/slider-comparator.vue"]]), rl = "-", Bc = ",", Rp = "--";
class c3 {
  constructor() {
    at(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, Bc));
  }
  layerTimesToStrings(e) {
    return e ? e.split(Rp) : [];
  }
  layerIdsToLayers(e) {
    const n = es(), r = Kn();
    return (e ? e.split(rl) : []).map((s) => {
      const a = Qa.isRemoteLayer(s) ? dP(s) : n.findById(parseInt(s, 10));
      return a ? r.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const n = es(), r = Kn();
    return (e ? e.split(Bc) : []).map((s) => {
      const a = n.findByName(s);
      return a ? r.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, n = rl) {
    return PC(e, n);
  }
  layersVisibilitiesToBooleansV2(e) {
    return AC(e, Bc);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((n) => n.id).join(rl)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = n.opacity) != null ? r : 1;
    }).join(rl)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = Kn().getLayerCurrentTime(n)) != null ? r : "";
    }).join(Rp)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const n = es();
    return e ? n.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || ou.name;
  }
}
const pn = new c3(), f3 = "basemap_2015_global", h3 = "orthogr_2013_global", d3 = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class m3 {
  bootstrap() {
    const e = Yt();
    let n;
    n = _n(() => {
      e.bgLayers.length > 0 && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = mt(), { bgLayer: n } = He(e);
    Je(
      n,
      (r, i) => {
        i !== r && Me.setValue(
          up,
          r,
          pn.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = y0(), n = this.getBgLayerFromStorage();
    e(n);
  }
  getBgLayerFromStorage() {
    const e = Me.getInitialVersion(), n = Me.getValue(up);
    return n ? e === 2 ? this.getBgLayerFromStorageV2(n) : pn.bgLayerNameToBgLayer(n) : pn.bgLayerNameToBgLayer(f3);
  }
  getBgLayerFromStorageV2(e) {
    const n = Me.getValue(
      o0,
      Vs
    );
    let r = "";
    return e ? r = d3[e] : n === 0 && (r = h3), pn.bgLayerNameToBgLayer(r);
  }
}
const p3 = new m3();
class g3 {
  bootstrap() {
    const e = Yt();
    let n;
    n = _n(() => {
      e.themes && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = mt(), { layers: n } = He(e);
    Je(
      n,
      (r, i) => {
        i !== r && (Me.setValue(
          lp,
          r,
          pn.layersToLayerIds
        ), Me.setValue(
          cp,
          r,
          pn.layersToLayerOpacities
        ), Me.setValue(
          fp,
          r,
          pn.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Me.getInitialVersion(), n = mt(), r = Me.getValue(
      lp,
      e === 2 ? pn.layerNamesToLayersV2 : pn.layerIdsToLayers
    );
    this.restoreLayersOpacities(r, e), this.restoreLayersTimes(r), e === 2 && (Me.removeItem(o0), Me.removeItem(RC), Me.removeItem(pp), Me.removeItem(gp)), n.addLayers(...(r == null ? void 0 : r.filter((i) => i)) || []);
  }
  restoreLayersOpacities(e, n) {
    const r = n === 2 ? this.getOpacitiesFromStorageV2() : this.getOpacitiesFromStorage();
    r.length && (e == null || e.forEach(
      (i, s) => {
        var a;
        return i && (i.opacity = (a = r[s]) != null ? a : 1);
      }
    ));
  }
  restoreLayersTimes(e) {
    const n = Me.getValue(
      fp,
      pn.layerTimesToStrings
    );
    n.length && (e == null || e.forEach(
      (r, i) => r && n[i] && this.restoreLayerTime(r, n[i])
    ));
  }
  restoreLayerTime(e, n) {
    const r = n.split("/");
    e.currentTimeMinValue = r[0], e.currentTimeMaxValue = r[1];
  }
  getOpacitiesFromStorage() {
    return Me.getValue(
      cp,
      pn.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Me.getValue(
      pp,
      pn.layersOpacitiesToNumbersV2
    ), n = Me.getValue(
      gp,
      pn.layersVisibilitiesToBooleansV2
    );
    return e.map((r, i) => n[i] ? r : 0);
  }
}
const y3 = new g3();
class v3 {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const _3 = new v3();
class b3 {
  bootstrap() {
    this.restore();
    let e;
    e = _n(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = Yt();
    Je(
      () => e.theme,
      (n, r) => {
        r !== n && n && Me.setValue(
          Ja,
          n,
          _3.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Me.getValue(Ja);
    if (e) {
      const { setTheme: n } = Yt();
      n(e);
    }
  }
}
const E3 = new b3();
class w3 {
  bootstrapLayersOpen() {
    this.restoreLayersOpen();
    let e;
    e = _n(() => {
      this.persistLayersOpen(), e && e();
    });
  }
  persistLayersOpen() {
    const e = _t(), { layersOpen: n } = He(e);
    Je(
      n,
      (r, i) => {
        i !== r && Me.setValue(nu, r);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Me.getValue(nu) !== "false", { setLayersOpen: n } = _t();
    n(e);
  }
}
const x3 = new w3();
class S3 {
  bootstrap() {
    this.restore();
    let e;
    e = _n(() => {
      this.persist(), e && e();
    });
  }
  persist() {
  }
  restore() {
    const e = Me.getValue(DC);
    _t().setMapId(e);
  }
}
const O3 = new S3(), M3 = /* @__PURE__ */ he({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(!0), V(Ve, null, Pn(e.colors, (i, s) => (A(), V("span", {
      key: `${t.styleName}-${s}`,
      class: "grow m-px",
      style: Ei(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), T3 = /* @__PURE__ */ pe(M3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/simple-style-item.vue"]]), N3 = { class: "text-white border-2 p-[10px] m-[10px]" }, C3 = { class: "text-center mb-3" }, L3 = ["title"], P3 = { class: "text-white" }, A3 = ["title", "onClick"], k3 = { class: "flex" }, D3 = /* @__PURE__ */ he({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Ze(), n = dr(), r = ta(), { bgStyle: i } = He(n), s = Hn().simple_styles.road, a = Se(s);
    Je(
      i,
      (l) => a.value = r.checkSelection(
        l || [],
        s
      ),
      { immediate: !0 }
    );
    function o(l) {
      n.setSimpleStyle(l);
    }
    return (l, u) => (A(), V("div", N3, [
      $(" TODO: create clean container for simple and advanced style editors "),
      L("h5", C3, ue(b(e)("Select a style", { ns: "client" })), 1),
      (A(!0), V(Ve, null, Pn(a.value, (f) => (A(), V("div", {
        key: f.unlocalized_label,
        title: b(e)(f.unlocalized_label, { ns: "client" }),
        class: Ce(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        L("span", P3, ue(b(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        L("button", {
          title: b(e)("Select style: {{styleName}}", {
            styleName: b(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          L("span", k3, [
            ne(T3, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, A3)
      ], 10, L3))), 128))
    ]));
  }
}), I3 = /* @__PURE__ */ pe(D3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/simple-style-selector.vue"]]);
function R3(t) {
  const e = $3(t);
  return !e || !e.medium_style_class ? [] : Hn().medium_default_styles[e.medium_style_class];
}
function $3(t) {
  return Hn().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const F3 = { class: "flex w-full items-center" }, V3 = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, j3 = { class: "grow" }, G3 = ["value"], U3 = ["checked", "aria-label"], B3 = /* @__PURE__ */ he({
  __name: "medium-style-item",
  props: {
    style: { type: null, required: !0 },
    colorEditable: { type: Boolean, required: !0 }
  },
  emits: ["changeStyle"],
  setup(t, { emit: e }) {
    const n = t, { t: r } = Ze();
    function i(a) {
      if (a.target) {
        const o = {
          ...n.style,
          color: a.target.value
        };
        e("changeStyle", o);
      }
    }
    function s(a) {
      if (a) {
        const o = {
          ...n.style,
          visible: a.target.checked
        };
        e("changeStyle", o);
      }
    }
    return (a, o) => (A(), V("div", F3, [
      L("label", V3, ue(b(r)(t.style.label)), 1),
      L("div", j3, [
        t.colorEditable && n.style.color ? (A(), V("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: n.style.color,
          onInput: i
        }, null, 40, G3)) : $("v-if", !0)
      ]),
      L("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: n.style.visible,
        onChange: s,
        "aria-label": b(r)("Show or hide {{ thematicName }}", {
          thematicName: n.style.label
        })
      }, null, 40, U3)
    ]));
  }
}), q3 = /* @__PURE__ */ pe(B3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/medium-style-item.vue"]]), W3 = { class: "text-white border-2 p-[10px] m-[10px]" }, H3 = { class: "text-center mb-3" }, z3 = /* @__PURE__ */ he({
  __name: "medium-style-selector",
  props: {
    layer: { type: null, required: !0 }
  },
  setup(t) {
    const e = t, n = ["basemap_2015_global"], r = dr(), { bgStyle: i } = He(r), { t: s } = Ze(), a = me(
      () => n.includes(e.layer.name)
    ), o = me(
      () => i.value || R3(e.layer)
    );
    function l(u, f) {
      i.value = o.value.map(
        (c, h) => h === u ? f : c
      ), r.disableExpertStyle();
    }
    return (u, f) => (A(), V("div", W3, [
      L("h5", H3, ue(b(a) ? b(s)("Select a colour for every theme") : b(s)("Activate categories")), 1),
      (A(!0), V(Ve, null, Pn(b(o), (c, h) => (A(), je(q3, {
        key: c.label,
        style: Ei(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: b(a)
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), Y3 = /* @__PURE__ */ pe(z3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/medium-style-selector.vue"]]);
var z0 = { exports: {} };
(function(t, e) {
  (function(n, r) {
    r();
  })(Ar, function() {
    function n(u, f) {
      return typeof f > "u" ? f = { autoBom: !1 } : typeof f != "object" && (console.warn("Deprecated: Expected third argument to be a object"), f = { autoBom: !f }), f.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type) ? new Blob(["\uFEFF", u], { type: u.type }) : u;
    }
    function r(u, f, c) {
      var h = new XMLHttpRequest();
      h.open("GET", u), h.responseType = "blob", h.onload = function() {
        l(h.response, f, c);
      }, h.onerror = function() {
        console.error("could not download file");
      }, h.send();
    }
    function i(u) {
      var f = new XMLHttpRequest();
      f.open("HEAD", u, !1);
      try {
        f.send();
      } catch {
      }
      return 200 <= f.status && 299 >= f.status;
    }
    function s(u) {
      try {
        u.dispatchEvent(new MouseEvent("click"));
      } catch {
        var f = document.createEvent("MouseEvents");
        f.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), u.dispatchEvent(f);
      }
    }
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Ar == "object" && Ar.global === Ar ? Ar : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !o ? function(u, f, c) {
      var h = a.URL || a.webkitURL, d = document.createElement("a");
      f = f || u.name || "download", d.download = f, d.rel = "noopener", typeof u == "string" ? (d.href = u, d.origin === location.origin ? s(d) : i(d.href) ? r(u, f, c) : s(d, d.target = "_blank")) : (d.href = h.createObjectURL(u), setTimeout(function() {
        h.revokeObjectURL(d.href);
      }, 4e4), setTimeout(function() {
        s(d);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(u, f, c) {
      if (f = f || u.name || "download", typeof u != "string")
        navigator.msSaveOrOpenBlob(n(u, c), f);
      else if (i(u))
        r(u, f, c);
      else {
        var h = document.createElement("a");
        h.href = u, h.target = "_blank", setTimeout(function() {
          s(h);
        });
      }
    } : function(u, f, c, h) {
      if (h = h || open("", "_blank"), h && (h.document.title = h.document.body.innerText = "downloading..."), typeof u == "string")
        return r(u, f, c);
      var d = u.type === "application/octet-stream", m = /constructor/i.test(a.HTMLElement) || a.safari, p = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((p || d && m || o) && typeof FileReader < "u") {
        var g = new FileReader();
        g.onloadend = function() {
          var E = g.result;
          E = p ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = E : location = E, h = null;
        }, g.readAsDataURL(u);
      } else {
        var v = a.URL || a.webkitURL, y = v.createObjectURL(u);
        h ? h.location = y : location.href = y, h = null, setTimeout(function() {
          v.revokeObjectURL(y);
        }, 4e4);
      }
    });
    a.saveAs = l.saveAs = l, t.exports = l;
  });
})(z0);
const X3 = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, K3 = { class: "text-center mb-3" }, Z3 = { class: "flex flex-row justify-center" }, J3 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, Q3 = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, eR = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, tR = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, nR = ["href"], rR = /* @__PURE__ */ he({
  __name: "expert-style-selector",
  setup(t) {
    const e = mt(), n = dr(), r = ta(), { appliedStyle: i } = He(n), { t: s } = Ze();
    function a() {
      const u = i.value, f = JSON.stringify(u), c = new Blob([f], { type: "text/plain;charset=utf-8" }), h = "styles.json";
      z0.exports.saveAs(c, h);
    }
    function o(u) {
      const f = u.target.files;
      if ((f == null ? void 0 : f.length) !== 1)
        return;
      const c = f[0];
      new File([], "./text.txt").text().then((d) => console.log(d)), c.type === "application/json" && (c.text().then((d) => {
        n.enableExpertStyle(), i.value = JSON.parse(d);
      }), u.target.value = "");
    }
    function l() {
      return n.styleSerial === null ? r.getDefaultMapBoxStyleUrl(
        r.getVectorId(e.bgLayer)
      ) : `${n.registerUrls.get("get")}?id=${n.styleSerial}`;
    }
    return (u, f) => (A(), V("div", X3, [
      L("h5", K3, ue(b(s)("Lancer \xE9diteur externe ou importer json")), 1),
      L("div", Z3, [
        L("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          L("span", J3, ue(b(s)("Download style")), 1)
        ]),
        L("div", Q3, [
          L("label", eR, [
            L("span", tR, ue(b(s)("Upload style")), 1)
          ]),
          L("input", {
            class: "invisible",
            type: "file",
            name: "uploadMvtStyle",
            id: "uploadMvtStyle",
            onChange: o
          }, null, 32)
        ])
      ]),
      L("a", {
        href: `https://maputnik.github.io/editor/?style=${l()}`,
        target: "_blank",
        class: "lux-btn text-center"
      }, ue(b(s)("Open Maputnik editor")), 9, nR)
    ]));
  }
}), iR = /* @__PURE__ */ pe(rR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/expert-style-selector.vue"]]), sR = { key: 0 }, aR = {
  key: 0,
  class: "mb-px"
}, oR = {
  key: 1,
  class: "mb-px"
}, lR = {
  key: 2,
  class: "mb-px"
}, uR = /* @__PURE__ */ he({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Ze(), n = mt(), r = _t(), i = dr(), { bgStyle: s, isExpertStyleActive: a } = He(i), { bgLayer: o } = He(n), l = ta(), u = me(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    Je(o, (h) => {
      l.isLayerStyleEditable(h) || r.closeStyleEditorPanel();
    });
    let f = Se(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => b(u).isEditable ? (A(), V("div", sR, [
      b(u).hasSimpleStyle ? (A(), V("div", aR, [
        ne(wl, {
          title: b(e)("Simple"),
          expanded: b(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => qe(f) ? f.value = b(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = b(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: ci(() => [
            ne(I3)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : $("v-if", !0),
      b(u).hasAdvancedStyle ? (A(), V("div", oR, [
        ne(wl, {
          title: b(e)("Medium"),
          expanded: b(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => qe(f) ? f.value = b(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = b(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: ci(() => [
            b(o) ? (A(), je(Y3, {
              key: 0,
              layer: b(o)
            }, null, 8, ["layer"])) : $("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : $("v-if", !0),
      b(u).hasExpertStyle ? (A(), V("div", lR, [
        ne(wl, {
          title: b(e)("Expert (style.json)"),
          expanded: b(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => qe(f) ? f.value = b(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = b(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: ci(() => [
            b(o) ? (A(), je(iR, {
              key: 0,
              layer: b(o)
            }, null, 8, ["layer"])) : $("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : $("v-if", !0),
      b(s) || b(a) ? (A(), V("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, ue(b(e)("Reset style", { ns: "client" })), 1)) : $("v-if", !0)
    ])) : $("v-if", !0);
  }
}), cR = /* @__PURE__ */ pe(uR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/style-selector.vue"]]);
function Gf(t) {
  return Gf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gf(t);
}
var Y0 = [], fR = Y0.forEach, hR = Y0.slice;
function Uf(t) {
  return fR.call(hR.call(arguments, 1), function(e) {
    if (e)
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function X0() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Gf(XMLHttpRequest)) === "object";
}
function dR(t) {
  return !!t && typeof t.then == "function";
}
function mR(t) {
  return dR(t) ? t : Promise.resolve(t);
}
function pR(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var gu = { exports: {} }, il = { exports: {} }, $p;
function gR() {
  return $p || ($p = 1, function(t, e) {
    var n = typeof self < "u" ? self : Ar, r = function() {
      function s() {
        this.fetch = !1, this.DOMException = n.DOMException;
      }
      return s.prototype = n, new s();
    }();
    (function(s) {
      (function(a) {
        var o = {
          searchParams: "URLSearchParams" in s,
          iterable: "Symbol" in s && "iterator" in Symbol,
          blob: "FileReader" in s && "Blob" in s && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in s,
          arrayBuffer: "ArrayBuffer" in s
        };
        function l(M) {
          return M && DataView.prototype.isPrototypeOf(M);
        }
        if (o.arrayBuffer)
          var u = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], f = ArrayBuffer.isView || function(M) {
            return M && u.indexOf(Object.prototype.toString.call(M)) > -1;
          };
        function c(M) {
          if (typeof M != "string" && (M = String(M)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(M))
            throw new TypeError("Invalid character in header field name");
          return M.toLowerCase();
        }
        function h(M) {
          return typeof M != "string" && (M = String(M)), M;
        }
        function d(M) {
          var j = {
            next: function() {
              var Z = M.shift();
              return { done: Z === void 0, value: Z };
            }
          };
          return o.iterable && (j[Symbol.iterator] = function() {
            return j;
          }), j;
        }
        function m(M) {
          this.map = {}, M instanceof m ? M.forEach(function(j, Z) {
            this.append(Z, j);
          }, this) : Array.isArray(M) ? M.forEach(function(j) {
            this.append(j[0], j[1]);
          }, this) : M && Object.getOwnPropertyNames(M).forEach(function(j) {
            this.append(j, M[j]);
          }, this);
        }
        m.prototype.append = function(M, j) {
          M = c(M), j = h(j);
          var Z = this.map[M];
          this.map[M] = Z ? Z + ", " + j : j;
        }, m.prototype.delete = function(M) {
          delete this.map[c(M)];
        }, m.prototype.get = function(M) {
          return M = c(M), this.has(M) ? this.map[M] : null;
        }, m.prototype.has = function(M) {
          return this.map.hasOwnProperty(c(M));
        }, m.prototype.set = function(M, j) {
          this.map[c(M)] = h(j);
        }, m.prototype.forEach = function(M, j) {
          for (var Z in this.map)
            this.map.hasOwnProperty(Z) && M.call(j, this.map[Z], Z, this);
        }, m.prototype.keys = function() {
          var M = [];
          return this.forEach(function(j, Z) {
            M.push(Z);
          }), d(M);
        }, m.prototype.values = function() {
          var M = [];
          return this.forEach(function(j) {
            M.push(j);
          }), d(M);
        }, m.prototype.entries = function() {
          var M = [];
          return this.forEach(function(j, Z) {
            M.push([Z, j]);
          }), d(M);
        }, o.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries);
        function p(M) {
          if (M.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          M.bodyUsed = !0;
        }
        function g(M) {
          return new Promise(function(j, Z) {
            M.onload = function() {
              j(M.result);
            }, M.onerror = function() {
              Z(M.error);
            };
          });
        }
        function v(M) {
          var j = new FileReader(), Z = g(j);
          return j.readAsArrayBuffer(M), Z;
        }
        function y(M) {
          var j = new FileReader(), Z = g(j);
          return j.readAsText(M), Z;
        }
        function E(M) {
          for (var j = new Uint8Array(M), Z = new Array(j.length), J = 0; J < j.length; J++)
            Z[J] = String.fromCharCode(j[J]);
          return Z.join("");
        }
        function w(M) {
          if (M.slice)
            return M.slice(0);
          var j = new Uint8Array(M.byteLength);
          return j.set(new Uint8Array(M)), j.buffer;
        }
        function S() {
          return this.bodyUsed = !1, this._initBody = function(M) {
            this._bodyInit = M, M ? typeof M == "string" ? this._bodyText = M : o.blob && Blob.prototype.isPrototypeOf(M) ? this._bodyBlob = M : o.formData && FormData.prototype.isPrototypeOf(M) ? this._bodyFormData = M : o.searchParams && URLSearchParams.prototype.isPrototypeOf(M) ? this._bodyText = M.toString() : o.arrayBuffer && o.blob && l(M) ? (this._bodyArrayBuffer = w(M.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(M) || f(M)) ? this._bodyArrayBuffer = w(M) : this._bodyText = M = Object.prototype.toString.call(M) : this._bodyText = "", this.headers.get("content-type") || (typeof M == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(M) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, o.blob && (this.blob = function() {
            var M = p(this);
            if (M)
              return M;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v);
          }), this.text = function() {
            var M = p(this);
            if (M)
              return M;
            if (this._bodyBlob)
              return y(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(E(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, o.formData && (this.formData = function() {
            return this.text().then(T);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function k(M) {
          var j = M.toUpperCase();
          return P.indexOf(j) > -1 ? j : M;
        }
        function C(M, j) {
          j = j || {};
          var Z = j.body;
          if (M instanceof C) {
            if (M.bodyUsed)
              throw new TypeError("Already read");
            this.url = M.url, this.credentials = M.credentials, j.headers || (this.headers = new m(M.headers)), this.method = M.method, this.mode = M.mode, this.signal = M.signal, !Z && M._bodyInit != null && (Z = M._bodyInit, M.bodyUsed = !0);
          } else
            this.url = String(M);
          if (this.credentials = j.credentials || this.credentials || "same-origin", (j.headers || !this.headers) && (this.headers = new m(j.headers)), this.method = k(j.method || this.method || "GET"), this.mode = j.mode || this.mode || null, this.signal = j.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Z)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(Z);
        }
        C.prototype.clone = function() {
          return new C(this, { body: this._bodyInit });
        };
        function T(M) {
          var j = new FormData();
          return M.trim().split("&").forEach(function(Z) {
            if (Z) {
              var J = Z.split("="), ae = J.shift().replace(/\+/g, " "), _e = J.join("=").replace(/\+/g, " ");
              j.append(decodeURIComponent(ae), decodeURIComponent(_e));
            }
          }), j;
        }
        function N(M) {
          var j = new m(), Z = M.replace(/\r?\n[\t ]+/g, " ");
          return Z.split(/\r?\n/).forEach(function(J) {
            var ae = J.split(":"), _e = ae.shift().trim();
            if (_e) {
              var Qt = ae.join(":").trim();
              j.append(_e, Qt);
            }
          }), j;
        }
        S.call(C.prototype);
        function U(M, j) {
          j || (j = {}), this.type = "default", this.status = j.status === void 0 ? 200 : j.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in j ? j.statusText : "OK", this.headers = new m(j.headers), this.url = j.url || "", this._initBody(M);
        }
        S.call(U.prototype), U.prototype.clone = function() {
          return new U(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, U.error = function() {
          var M = new U(null, { status: 0, statusText: "" });
          return M.type = "error", M;
        };
        var R = [301, 302, 303, 307, 308];
        U.redirect = function(M, j) {
          if (R.indexOf(j) === -1)
            throw new RangeError("Invalid status code");
          return new U(null, { status: j, headers: { location: M } });
        }, a.DOMException = s.DOMException;
        try {
          new a.DOMException();
        } catch {
          a.DOMException = function(j, Z) {
            this.message = j, this.name = Z;
            var J = Error(j);
            this.stack = J.stack;
          }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException;
        }
        function re(M, j) {
          return new Promise(function(Z, J) {
            var ae = new C(M, j);
            if (ae.signal && ae.signal.aborted)
              return J(new a.DOMException("Aborted", "AbortError"));
            var _e = new XMLHttpRequest();
            function Qt() {
              _e.abort();
            }
            _e.onload = function() {
              var tt = {
                status: _e.status,
                statusText: _e.statusText,
                headers: N(_e.getAllResponseHeaders() || "")
              };
              tt.url = "responseURL" in _e ? _e.responseURL : tt.headers.get("X-Request-URL");
              var Ae = "response" in _e ? _e.response : _e.responseText;
              Z(new U(Ae, tt));
            }, _e.onerror = function() {
              J(new TypeError("Network request failed"));
            }, _e.ontimeout = function() {
              J(new TypeError("Network request failed"));
            }, _e.onabort = function() {
              J(new a.DOMException("Aborted", "AbortError"));
            }, _e.open(ae.method, ae.url, !0), ae.credentials === "include" ? _e.withCredentials = !0 : ae.credentials === "omit" && (_e.withCredentials = !1), "responseType" in _e && o.blob && (_e.responseType = "blob"), ae.headers.forEach(function(tt, Ae) {
              _e.setRequestHeader(Ae, tt);
            }), ae.signal && (ae.signal.addEventListener("abort", Qt), _e.onreadystatechange = function() {
              _e.readyState === 4 && ae.signal.removeEventListener("abort", Qt);
            }), _e.send(typeof ae._bodyInit > "u" ? null : ae._bodyInit);
          });
        }
        return re.polyfill = !0, s.fetch || (s.fetch = re, s.Headers = m, s.Request = C, s.Response = U), a.Headers = m, a.Request = C, a.Response = U, a.fetch = re, Object.defineProperty(a, "__esModule", { value: !0 }), a;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(il, il.exports)), il.exports;
}
(function(t, e) {
  var n;
  if (typeof fetch == "function" && (typeof Ar < "u" && Ar.fetch ? n = Ar.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof pR < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = n || gR();
    r.default && (r = r.default), e.default = r, t.exports = e.default;
  }
})(gu, gu.exports);
const K0 = gu.exports, Fp = /* @__PURE__ */ N_({
  __proto__: null,
  default: K0
}, [gu.exports]);
function yu(t) {
  return yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yu(t);
}
var $r;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? $r = global.fetch : typeof window < "u" && window.fetch ? $r = window.fetch : $r = fetch);
var eo;
X0() && (typeof global < "u" && global.XMLHttpRequest ? eo = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (eo = window.XMLHttpRequest));
var vu;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? vu = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (vu = window.ActiveXObject));
!$r && Fp && !eo && !vu && ($r = K0 || Fp);
typeof $r != "function" && ($r = void 0);
var Bf = function(e, n) {
  if (n && yu(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, Vp = function(e, n, r) {
  $r(e, n).then(function(i) {
    if (!i.ok)
      return r(i.statusText || "Error", {
        status: i.status
      });
    i.text().then(function(s) {
      r(null, {
        status: i.status,
        data: s
      });
    }).catch(r);
  }).catch(r);
}, jp = !1, yR = function(e, n, r, i) {
  e.queryStringParams && (n = Bf(n, e.queryStringParams));
  var s = Uf({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  r && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = Uf({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: s
  }, jp ? {} : a);
  try {
    Vp(n, o, i);
  } catch (l) {
    if (!a || Object.keys(a).length === 0 || !l.message || l.message.indexOf("not implemented") < 0)
      return i(l);
    try {
      Object.keys(a).forEach(function(u) {
        delete o[u];
      }), Vp(n, o, i), jp = !0;
    } catch (u) {
      i(u);
    }
  }
}, vR = function(e, n, r, i) {
  r && yu(r) === "object" && (r = Bf("", r).slice(1)), e.queryStringParams && (n = Bf(n, e.queryStringParams));
  try {
    var s;
    eo ? s = new eo() : s = new vu("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", n, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
    var a = e.customHeaders;
    if (a = typeof a == "function" ? a() : a, a)
      for (var o in a)
        s.setRequestHeader(o, a[o]);
    s.onreadystatechange = function() {
      s.readyState > 3 && i(s.status >= 400 ? s.statusText : null, {
        status: s.status,
        data: s.responseText
      });
    }, s.send(r);
  } catch (l) {
    console && console.log(l);
  }
}, _R = function(e, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, $r && n.indexOf("file:") !== 0)
    return yR(e, n, r, i);
  if (X0() || typeof ActiveXObject == "function")
    return vR(e, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function to(t) {
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, to(t);
}
function bR(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Gp(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Z0(r.key), r);
  }
}
function ER(t, e, n) {
  return e && Gp(t.prototype, e), n && Gp(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function wR(t, e, n) {
  return e = Z0(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Z0(t) {
  var e = xR(t, "string");
  return to(e) === "symbol" ? e : String(e);
}
function xR(t, e) {
  if (to(t) !== "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (to(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var SR = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return wR({}, r, i || "");
    },
    request: _R,
    reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, J0 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    bR(this, t), this.services = e, this.options = n, this.allOptions = r, this.type = "backend", this.init(e, n, r);
  }
  return ER(t, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = Uf(i, this.options || {}, SR()), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(n, r, i) {
      this._readAny(n, n, r, r, i);
    }
  }, {
    key: "read",
    value: function(n, r, i) {
      this._readAny([n], n, [r], r, i);
    }
  }, {
    key: "_readAny",
    value: function(n, r, i, s, a) {
      var o = this, l = this.options.loadPath;
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, i)), l = mR(l), l.then(function(u) {
        if (!u)
          return a(null, {});
        var f = o.services.interpolator.interpolate(u, {
          lng: n.join("+"),
          ns: i.join("+")
        });
        o.loadUrl(f, a, r, s);
      });
    }
  }, {
    key: "loadUrl",
    value: function(n, r, i, s) {
      var a = this;
      this.options.request(this.options, n, void 0, function(o, l) {
        if (l && (l.status >= 500 && l.status < 600 || !l.status))
          return r("failed loading " + n + "; status code: " + l.status, !0);
        if (l && l.status >= 400 && l.status < 500)
          return r("failed loading " + n + "; status code: " + l.status, !1);
        if (!l && o && o.message && o.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + n + ": " + o.message, !0);
        if (o)
          return r(o, !1);
        var u, f;
        try {
          typeof l.data == "string" ? u = a.options.parse(l.data, i, s) : u = l.data;
        } catch {
          f = "failed parsing " + n + " to json";
        }
        if (f)
          return r(f, !1);
        r(null, u);
      });
    }
  }, {
    key: "create",
    value: function(n, r, i, s, a) {
      var o = this;
      if (!!this.options.addPath) {
        typeof n == "string" && (n = [n]);
        var l = this.options.parsePayload(r, i, s), u = 0, f = [], c = [];
        n.forEach(function(h) {
          var d = o.options.addPath;
          typeof o.options.addPath == "function" && (d = o.options.addPath(h, r));
          var m = o.services.interpolator.interpolate(d, {
            lng: h,
            ns: r
          });
          o.options.request(o.options, m, l, function(p, g) {
            u += 1, f.push(p), c.push(g), u === n.length && typeof a == "function" && a(f, c);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var n = this, r = this.services, i = r.backendConnector, s = r.languageUtils, a = r.logger, o = i.language;
      if (!(o && o.toLowerCase() === "cimode")) {
        var l = [], u = function(c) {
          var h = s.toResolveHierarchy(c);
          h.forEach(function(d) {
            l.indexOf(d) < 0 && l.push(d);
          });
        };
        u(o), this.allOptions.preload && this.allOptions.preload.forEach(function(f) {
          return u(f);
        }), l.forEach(function(f) {
          n.allOptions.ns.forEach(function(c) {
            i.read(f, c, "read", null, null, function(h, d) {
              h && a.warn("loading namespace ".concat(c, " for language ").concat(f, " failed"), h), !h && d && a.log("loaded namespace ".concat(c, " for language ").concat(f), d), i.loaded("".concat(f, "|").concat(c), h, d);
            });
          });
        });
      }
    }
  }]), t;
}();
J0.type = "backend";
function Q0(t, e, n) {
  n(t, e) && t instanceof T_ && t.getLayers().forEach((i) => {
    Q0(i, [...e, t], n);
  });
}
const OR = { class: "h-screen flex flex-col overflow-hidden" }, MR = { class: "flex grow" }, TR = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, NR = {
  key: 1,
  class: "w-80 bg-primary"
}, CR = { class: "map-wrapper grow bg-blue-100 relative" }, LR = { class: "absolute right-1 top-16" }, PR = /* @__PURE__ */ he({
  __name: "App",
  setup(t) {
    const e = _t();
    O3.bootstrap(), y3.bootstrap(), E3.bootstrap(), x3.bootstrapLayersOpen(), c0.bootstrapStyle(), p3.bootstrap();
    const { layersOpen: n, styleEditorOpen: r } = He(e);
    Je(
      n,
      () => setTimeout(() => {
        i();
      }, 50)
    ), bn(() => window.addEventListener("resize", i)), wi(() => window.removeEventListener("resize", i));
    function i() {
      const s = Ir().getOlMap();
      s.updateSize(), Q0(s.getLayerGroup(), [], (a) => (a instanceof p0 && a.getMapLibreMap().resize(), !0));
    }
    return (s, a) => (A(), V("div", OR, [
      ne(Vk),
      L("main", MR, [
        $(" Layer panel "),
        b(n) ? (A(), V("div", TR, [
          ne(JI)
        ])) : $("v-if", !0),
        $(" Style editor "),
        b(r) ? (A(), V("div", NR, [
          ne(cR)
        ])) : $("v-if", !0),
        $(" Map container and slider comparator "),
        L("div", CR, [
          ne(DL, { v4_standalone: !0 }),
          ne(u3, { class: "absolute top-0" }),
          ne(DA),
          ne(Sk)
        ]),
        $(" Background selector "),
        L("div", LR, [
          ne(BL)
        ])
      ]),
      ne(Xk, { class: "fixed bottom-5 sm:static z-20" }),
      ne(R2)
    ]));
  }
}), AR = /* @__PURE__ */ pe(PR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/App.vue"]]);
M2();
ut.use(J0);
ut.init({
  lng: "fr",
  debug: !1,
  defaultNS: "client",
  supportedLngs: ["de", "en", "fr", "lb"],
  ns: ["client", "legends", "server", "tooltips"],
  fallbackLng: "fr",
  backend: {
    loadPath: "/static-ngeo/web-components/assets/locales/{{ns}}.{{lng}}.json"
  },
  nsSeparator: "|"
});
const Ih = FE(AR);
Ih.use(Ww());
Ih.use(MT, { i18next: ut });
Ih.use(bw);
const a4 = (t = {}, e = null) => T2(
  {
    setup: () => {
      const n = Pu();
      Object.assign(n.appContext, e._context), Object.assign(n.provides, e._context.provides);
    },
    render: () => uy(t)
  },
  { shadowRoot: !1 }
);
export {
  R2 as AlertNotifications,
  AR as App,
  BL as BackgroundSelector,
  Zy as DropdownList,
  Xk as FooterBar,
  Vk as HeaderBar,
  MT as I18NextVue,
  Sk as LayerMetadata,
  JI as LayerPanel,
  DL as MapContainer,
  p0 as MapLibreLayer,
  DA as RemoteLayers,
  u3 as SliderComparator,
  cR as StyleSelector,
  bw as VueDOMPurifyHTML,
  Ih as app,
  J0 as backend,
  a4 as createElementInstance,
  Ww as createPinia,
  T2 as defineCustomElement,
  ut as i18next,
  Ys as proxyUrlHelper,
  p3 as statePersistorBgLayerService,
  x3 as statePersistorLayersOpenService,
  y3 as statePersistorLayersService,
  O3 as statePersistorMyMapService,
  c0 as statePersistorStyleService,
  E3 as statePersistorThemeService,
  He as storeToRefs,
  Pk as themeSelectorService,
  _t as useAppStore,
  y0 as useBackgroundLayer,
  Kn as useLayers,
  Ir as useMap,
  mt as useMapStore,
  ta as useMvtStyles,
  g0 as useOpenLayers,
  dr as useStyleStore,
  Yt as useThemeStore,
  es as useThemes,
  Je as watch
};
