var XE = Object.defineProperty;
var ZE = (t, e, r) => e in t ? XE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var st = (t, e, r) => (ZE(t, typeof e != "symbol" ? e + "" : e, r), r);
import { get as jl, transformExtent as JE, getTransform as QE, transform as Up } from "ol/proj";
import { register as eS } from "ol/proj/proj4";
import tS from "ol/Map";
import rS from "ol/View";
import nS from "ol/layer/Image";
import $v from "ol/source/ImageWMS";
import iS from "ol/layer/Tile";
import Fv from "ol/source/WMTS";
import sS from "ol/tilegrid/WMTS";
import { getTopLeft as aS } from "ol/extent";
import oS from "ol/layer/Layer";
import { toDegrees as lS } from "ol/math";
import { toLonLat as uS } from "ol/proj.js";
import Bp from "mapbox-gl";
import * as Wp from "ol/events";
import cS from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as Vv, CLASS_CONTROL as jv } from "ol/css";
import Gv from "ol/control/Control";
import fS from "ol/control/FullScreen";
import hS from "ol/control/Zoom";
import dS from "ol/control/ZoomToExtent";
import pS from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as rl } from "ol/render";
import { unByKey as mS } from "ol/Observable";
import qp from "ol/render/EventType";
import gS from "ol/layer/Group.js";
function yS(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s && Object.defineProperty(t, i, s.get ? s : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Zn(t, e) {
  const r = new Set(t.split(","));
  return e ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const Xe = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Zs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], yt = () => {
}, vS = () => !1, No = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), du = (t) => t.startsWith("onUpdate:"), Qe = Object.assign, pd = (t, e) => {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}, bS = Object.prototype.hasOwnProperty, Ie = (t, e) => bS.call(t, e), le = Array.isArray, os = (t) => oc(t) === "[object Map]", Uv = (t) => oc(t) === "[object Set]", pe = (t) => typeof t == "function", nt = (t) => typeof t == "string", Ss = (t) => typeof t == "symbol", Be = (t) => t !== null && typeof t == "object", md = (t) => (Be(t) || pe(t)) && pe(t.then) && pe(t.catch), Bv = Object.prototype.toString, oc = (t) => Bv.call(t), gd = (t) => oc(t).slice(8, -1), Wv = (t) => oc(t) === "[object Object]", yd = (t) => nt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, za = /* @__PURE__ */ Zn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _S = /* @__PURE__ */ Zn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), lc = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => e[r] || (e[r] = t(r));
}, ES = /-(\w)/g, vr = lc((t) => t.replace(ES, (e, r) => r ? r.toUpperCase() : "")), SS = /\B([A-Z])/g, lr = lc(
  (t) => t.replace(SS, "-$1").toLowerCase()
), ms = lc((t) => t.charAt(0).toUpperCase() + t.slice(1)), ts = lc((t) => t ? `on${ms(t)}` : ""), Ai = (t, e) => !Object.is(t, e), Oa = (t, e) => {
  for (let r = 0; r < t.length; r++)
    t[r](e);
}, qv = (t, e, r) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, wS = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, ah = (t) => {
  const e = nt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Hp;
const uc = () => Hp || (Hp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $i(t) {
  if (le(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = nt(n) ? TS(n) : $i(n);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (nt(t) || Be(t))
    return t;
}
const OS = /;(?![^(]*\))/g, xS = /:([^]+)/, MS = /\/\*[^]*?\*\//g;
function TS(t) {
  const e = {};
  return t.replace(MS, "").split(OS).forEach((r) => {
    if (r) {
      const n = r.split(xS);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function Ae(t) {
  let e = "";
  if (nt(t))
    e = t;
  else if (le(t))
    for (let r = 0; r < t.length; r++) {
      const n = Ae(t[r]);
      n && (e += n + " ");
    }
  else if (Be(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
const NS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", CS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", PS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", LS = /* @__PURE__ */ Zn(NS), AS = /* @__PURE__ */ Zn(CS), IS = /* @__PURE__ */ Zn(PS), kS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", DS = /* @__PURE__ */ Zn(kS);
function Hv(t) {
  return !!t || t === "";
}
const oe = (t) => nt(t) ? t : t == null ? "" : le(t) || Be(t) && (t.toString === Bv || !pe(t.toString)) ? JSON.stringify(t, zv, 2) : String(t), zv = (t, e) => e && e.__v_isRef ? zv(t, e.value) : os(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (r, [n, i], s) => (r[Bc(n, s) + " =>"] = i, r),
    {}
  )
} : Uv(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((r) => Bc(r))
} : Ss(e) ? Bc(e) : Be(e) && !le(e) && !Wv(e) ? String(e) : e, Bc = (t, e = "") => {
  var r;
  return Ss(t) ? `Symbol(${(r = t.description) != null ? r : e})` : t;
};
/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xn(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let mr;
class Yv {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mr, !e && mr && (this.index = (mr.scopes || (mr.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const r = mr;
      try {
        return mr = this, e();
      } finally {
        mr = r;
      }
    } else
      process.env.NODE_ENV !== "production" && xn("cannot run an inactive effect scope.");
  }
  on() {
    mr = this;
  }
  off() {
    mr = this.parent;
  }
  stop(e) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Kv(t) {
  return new Yv(t);
}
function RS(t, e = mr) {
  e && e.active && e.effects.push(t);
}
function Xv() {
  return mr;
}
function $S(t) {
  mr ? mr.cleanups.push(t) : process.env.NODE_ENV !== "production" && xn(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let ls;
class vd {
  constructor(e, r, n, i) {
    this.fn = e, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, RS(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Jn();
      for (let e = 0; e < this._depsLength; e++) {
        const r = this.deps[e];
        if (r.computed && (FS(r.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Qn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = xi, r = ls;
    try {
      return xi = !0, ls = this, this._runnings++, zp(this), this.fn();
    } finally {
      Yp(this), this._runnings--, ls = r, xi = e;
    }
  }
  stop() {
    var e;
    this.active && (zp(this), Yp(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function FS(t) {
  return t.value;
}
function zp(t) {
  t._trackId++, t._depsLength = 0;
}
function Yp(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Zv(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Zv(t, e) {
  const r = t.get(e);
  r !== void 0 && e._trackId !== r && (t.delete(e), t.size === 0 && t.cleanup());
}
let xi = !0, oh = 0;
const Jv = [];
function Jn() {
  Jv.push(xi), xi = !1;
}
function Qn() {
  const t = Jv.pop();
  xi = t === void 0 ? !0 : t;
}
function bd() {
  oh++;
}
function _d() {
  for (oh--; !oh && lh.length; )
    lh.shift()();
}
function Qv(t, e, r) {
  var n;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && Zv(i, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((n = t.onTrack) == null || n.call(t, Qe({ effect: t }, r)));
  }
}
const lh = [];
function e0(t, e, r) {
  var n;
  bd();
  for (const i of t.keys()) {
    let s;
    i._dirtyLevel < e && (s != null ? s : s = t.get(i) === i._trackId) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (s != null ? s : s = t.get(i) === i._trackId) && (process.env.NODE_ENV !== "production" && ((n = i.onTrigger) == null || n.call(i, Qe({ effect: i }, r))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && lh.push(i.scheduler)));
  }
  _d();
}
const t0 = (t, e) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = t, r.computed = e, r;
}, pu = /* @__PURE__ */ new WeakMap(), us = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), uh = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function Dt(t, e, r) {
  if (xi && ls) {
    let n = pu.get(t);
    n || pu.set(t, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || n.set(r, i = t0(() => n.delete(r))), Qv(
      ls,
      i,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: r
      } : void 0
    );
  }
}
function yn(t, e, r, n, i, s) {
  const a = pu.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (r === "length" && le(t)) {
    const l = Number(n);
    a.forEach((u, f) => {
      (f === "length" || !Ss(f) && f >= l) && o.push(u);
    });
  } else
    switch (r !== void 0 && o.push(a.get(r)), e) {
      case "add":
        le(t) ? yd(r) && o.push(a.get("length")) : (o.push(a.get(us)), os(t) && o.push(a.get(uh)));
        break;
      case "delete":
        le(t) || (o.push(a.get(us)), os(t) && o.push(a.get(uh)));
        break;
      case "set":
        os(t) && o.push(a.get(us));
        break;
    }
  bd();
  for (const l of o)
    l && e0(
      l,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: r,
        newValue: n,
        oldValue: i,
        oldTarget: s
      } : void 0
    );
  _d();
}
function VS(t, e) {
  var r;
  return (r = pu.get(t)) == null ? void 0 : r.get(e);
}
const jS = /* @__PURE__ */ Zn("__proto__,__v_isRef,__isVue"), r0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ss)
), Kp = /* @__PURE__ */ GS();
function GS() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...r) {
      const n = be(this);
      for (let s = 0, a = this.length; s < a; s++)
        Dt(n, "get", s + "");
      const i = n[e](...r);
      return i === -1 || i === !1 ? n[e](...r.map(be)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...r) {
      Jn(), bd();
      const n = be(this)[e].apply(this, r);
      return _d(), Qn(), n;
    };
  }), t;
}
function US(t) {
  Ss(t) || (t = String(t));
  const e = be(this);
  return Dt(e, "has", t), e.hasOwnProperty(t);
}
class n0 {
  constructor(e = !1, r = !1) {
    this._isReadonly = e, this._isShallow = r;
  }
  get(e, r, n) {
    const i = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (i ? s ? c0 : u0 : s ? l0 : o0).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const a = le(e);
    if (!i) {
      if (a && Ie(Kp, r))
        return Reflect.get(Kp, r, n);
      if (r === "hasOwnProperty")
        return US;
    }
    const o = Reflect.get(e, r, n);
    return (Ss(r) ? r0.has(r) : jS(r)) || (i || Dt(e, "get", r), s) ? o : Ye(o) ? a && yd(r) ? o : o.value : Be(o) ? i ? f0(o) : hc(o) : o;
  }
}
class i0 extends n0 {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, n, i) {
    let s = e[r];
    if (!this._isShallow) {
      const l = gs(s);
      if (!cs(n) && !gs(n) && (s = be(s), n = be(n)), !le(e) && Ye(s) && !Ye(n))
        return l ? !1 : (s.value = n, !0);
    }
    const a = le(e) && yd(r) ? Number(r) < e.length : Ie(e, r), o = Reflect.set(e, r, n, i);
    return e === be(i) && (a ? Ai(n, s) && yn(e, "set", r, n, s) : yn(e, "add", r, n)), o;
  }
  deleteProperty(e, r) {
    const n = Ie(e, r), i = e[r], s = Reflect.deleteProperty(e, r);
    return s && n && yn(e, "delete", r, void 0, i), s;
  }
  has(e, r) {
    const n = Reflect.has(e, r);
    return (!Ss(r) || !r0.has(r)) && Dt(e, "has", r), n;
  }
  ownKeys(e) {
    return Dt(
      e,
      "iterate",
      le(e) ? "length" : us
    ), Reflect.ownKeys(e);
  }
}
class s0 extends n0 {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, r) {
    return process.env.NODE_ENV !== "production" && xn(
      `Set operation on key "${String(r)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, r) {
    return process.env.NODE_ENV !== "production" && xn(
      `Delete operation on key "${String(r)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const BS = /* @__PURE__ */ new i0(), WS = /* @__PURE__ */ new s0(), qS = /* @__PURE__ */ new i0(
  !0
), HS = /* @__PURE__ */ new s0(!0), Ed = (t) => t, cc = (t) => Reflect.getPrototypeOf(t);
function nl(t, e, r = !1, n = !1) {
  t = t.__v_raw;
  const i = be(t), s = be(e);
  r || (Ai(e, s) && Dt(i, "get", e), Dt(i, "get", s));
  const { has: a } = cc(i), o = n ? Ed : r ? Sd : fo;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function il(t, e = !1) {
  const r = this.__v_raw, n = be(r), i = be(t);
  return e || (Ai(t, i) && Dt(n, "has", t), Dt(n, "has", i)), t === i ? r.has(t) : r.has(t) || r.has(i);
}
function sl(t, e = !1) {
  return t = t.__v_raw, !e && Dt(be(t), "iterate", us), Reflect.get(t, "size", t);
}
function Xp(t) {
  t = be(t);
  const e = be(this);
  return cc(e).has.call(e, t) || (e.add(t), yn(e, "add", t, t)), this;
}
function Zp(t, e) {
  e = be(e);
  const r = be(this), { has: n, get: i } = cc(r);
  let s = n.call(r, t);
  s ? process.env.NODE_ENV !== "production" && a0(r, n, t) : (t = be(t), s = n.call(r, t));
  const a = i.call(r, t);
  return r.set(t, e), s ? Ai(e, a) && yn(r, "set", t, e, a) : yn(r, "add", t, e), this;
}
function Jp(t) {
  const e = be(this), { has: r, get: n } = cc(e);
  let i = r.call(e, t);
  i ? process.env.NODE_ENV !== "production" && a0(e, r, t) : (t = be(t), i = r.call(e, t));
  const s = n ? n.call(e, t) : void 0, a = e.delete(t);
  return i && yn(e, "delete", t, void 0, s), a;
}
function Qp() {
  const t = be(this), e = t.size !== 0, r = process.env.NODE_ENV !== "production" ? os(t) ? new Map(t) : new Set(t) : void 0, n = t.clear();
  return e && yn(t, "clear", void 0, void 0, r), n;
}
function al(t, e) {
  return function(n, i) {
    const s = this, a = s.__v_raw, o = be(a), l = e ? Ed : t ? Sd : fo;
    return !t && Dt(o, "iterate", us), a.forEach((u, f) => n.call(i, l(u), l(f), s));
  };
}
function ol(t, e, r) {
  return function(...n) {
    const i = this.__v_raw, s = be(i), a = os(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...n), f = r ? Ed : e ? Sd : fo;
    return !e && Dt(
      s,
      "iterate",
      l ? uh : us
    ), {
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
function ii(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const r = e[0] ? `on key "${e[0]}" ` : "";
      xn(
        `${ms(t)} operation ${r}failed: target is readonly.`,
        be(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function zS() {
  const t = {
    get(s) {
      return nl(this, s);
    },
    get size() {
      return sl(this);
    },
    has: il,
    add: Xp,
    set: Zp,
    delete: Jp,
    clear: Qp,
    forEach: al(!1, !1)
  }, e = {
    get(s) {
      return nl(this, s, !1, !0);
    },
    get size() {
      return sl(this);
    },
    has: il,
    add: Xp,
    set: Zp,
    delete: Jp,
    clear: Qp,
    forEach: al(!1, !0)
  }, r = {
    get(s) {
      return nl(this, s, !0);
    },
    get size() {
      return sl(this, !0);
    },
    has(s) {
      return il.call(this, s, !0);
    },
    add: ii("add"),
    set: ii("set"),
    delete: ii("delete"),
    clear: ii("clear"),
    forEach: al(!0, !1)
  }, n = {
    get(s) {
      return nl(this, s, !0, !0);
    },
    get size() {
      return sl(this, !0);
    },
    has(s) {
      return il.call(this, s, !0);
    },
    add: ii("add"),
    set: ii("set"),
    delete: ii("delete"),
    clear: ii("clear"),
    forEach: al(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = ol(s, !1, !1), r[s] = ol(s, !0, !1), e[s] = ol(s, !1, !0), n[s] = ol(
      s,
      !0,
      !0
    );
  }), [
    t,
    r,
    e,
    n
  ];
}
const [
  YS,
  KS,
  XS,
  ZS
] = /* @__PURE__ */ zS();
function fc(t, e) {
  const r = e ? t ? ZS : XS : t ? KS : YS;
  return (n, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? n : Reflect.get(
    Ie(r, i) && i in n ? r : n,
    i,
    s
  );
}
const JS = {
  get: /* @__PURE__ */ fc(!1, !1)
}, QS = {
  get: /* @__PURE__ */ fc(!1, !0)
}, ew = {
  get: /* @__PURE__ */ fc(!0, !1)
}, tw = {
  get: /* @__PURE__ */ fc(!0, !0)
};
function a0(t, e, r) {
  const n = be(r);
  if (n !== r && e.call(t, n)) {
    const i = gd(t);
    xn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const o0 = /* @__PURE__ */ new WeakMap(), l0 = /* @__PURE__ */ new WeakMap(), u0 = /* @__PURE__ */ new WeakMap(), c0 = /* @__PURE__ */ new WeakMap();
function rw(t) {
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
function nw(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : rw(gd(t));
}
function hc(t) {
  return gs(t) ? t : dc(
    t,
    !1,
    BS,
    JS,
    o0
  );
}
function iw(t) {
  return dc(
    t,
    !1,
    qS,
    QS,
    l0
  );
}
function f0(t) {
  return dc(
    t,
    !0,
    WS,
    ew,
    u0
  );
}
function Bn(t) {
  return dc(
    t,
    !0,
    HS,
    tw,
    c0
  );
}
function dc(t, e, r, n, i) {
  if (!Be(t))
    return process.env.NODE_ENV !== "production" && xn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = nw(t);
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? n : r
  );
  return i.set(t, o), o;
}
function vn(t) {
  return gs(t) ? vn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function gs(t) {
  return !!(t && t.__v_isReadonly);
}
function cs(t) {
  return !!(t && t.__v_isShallow);
}
function mu(t) {
  return t ? !!t.__v_raw : !1;
}
function be(t) {
  const e = t && t.__v_raw;
  return e ? be(e) : t;
}
function Si(t) {
  return Object.isExtensible(t) && qv(t, "__v_skip", !0), t;
}
const fo = (t) => Be(t) ? hc(t) : t, Sd = (t) => Be(t) ? f0(t) : t, sw = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class h0 {
  constructor(e, r, n, i) {
    this.getter = e, this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new vd(
      () => e(this._value),
      () => Gl(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n;
  }
  get value() {
    const e = be(this);
    return (!e._cacheable || e.effect.dirty) && Ai(e._value, e._value = e.effect.run()) && Gl(e, 4), d0(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && xn(sw, `

getter: `, this.getter), Gl(e, 2)), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
}
function aw(t, e, r = !1) {
  let n, i;
  const s = pe(t);
  s ? (n = t, i = process.env.NODE_ENV !== "production" ? () => {
    xn("Write operation failed: computed value is readonly");
  } : yt) : (n = t.get, i = t.set);
  const a = new h0(n, i, s || !i, r);
  return process.env.NODE_ENV !== "production" && e && !r && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
function d0(t) {
  var e;
  xi && ls && (t = be(t), Qv(
    ls,
    (e = t.dep) != null ? e : t.dep = t0(
      () => t.dep = void 0,
      t instanceof h0 ? t : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Gl(t, e = 4, r) {
  t = be(t);
  const n = t.dep;
  n && e0(
    n,
    e,
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "set",
      key: "value",
      newValue: r
    } : void 0
  );
}
function Ye(t) {
  return !!(t && t.__v_isRef === !0);
}
function we(t) {
  return p0(t, !1);
}
function tt(t) {
  return p0(t, !0);
}
function p0(t, e) {
  return Ye(t) ? t : new ow(t, e);
}
class ow {
  constructor(e, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? e : be(e), this._value = r ? e : fo(e);
  }
  get value() {
    return d0(this), this._value;
  }
  set value(e) {
    const r = this.__v_isShallow || cs(e) || gs(e);
    e = r ? e : be(e), Ai(e, this._rawValue) && (this._rawValue = e, this._value = r ? e : fo(e), Gl(this, 4, e));
  }
}
function O(t) {
  return Ye(t) ? t.value : t;
}
const lw = {
  get: (t, e, r) => O(Reflect.get(t, e, r)),
  set: (t, e, r, n) => {
    const i = t[e];
    return Ye(i) && !Ye(r) ? (i.value = r, !0) : Reflect.set(t, e, r, n);
  }
};
function m0(t) {
  return vn(t) ? t : new Proxy(t, lw);
}
function ch(t) {
  process.env.NODE_ENV !== "production" && !mu(t) && xn("toRefs() expects a reactive object but received a plain one.");
  const e = le(t) ? new Array(t.length) : {};
  for (const r in t)
    e[r] = g0(t, r);
  return e;
}
class uw {
  constructor(e, r, n) {
    this._object = e, this._key = r, this._defaultValue = n, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return VS(be(this._object), this._key);
  }
}
class cw {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ul(t, e, r) {
  return Ye(t) ? t : pe(t) ? new cw(t) : Be(t) && arguments.length > 1 ? g0(t, e, r) : we(t);
}
function g0(t, e, r) {
  const n = t[e];
  return Ye(n) ? n : new uw(t, e, r);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fs = [];
function Bl(t) {
  fs.push(t);
}
function Wl() {
  fs.pop();
}
function q(t, ...e) {
  Jn();
  const r = fs.length ? fs[fs.length - 1].component : null, n = r && r.appContext.config.warnHandler, i = fw();
  if (n)
    Wn(
      n,
      r,
      11,
      [
        t + e.map((s) => {
          var a, o;
          return (o = (a = s.toString) == null ? void 0 : a.call(s)) != null ? o : JSON.stringify(s);
        }).join(""),
        r && r.proxy,
        i.map(
          ({ vnode: s }) => `at <${bc(r, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...hw(i)), console.warn(...s);
  }
  Qn();
}
function fw() {
  let t = fs[fs.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const r = e[0];
    r && r.vnode === t ? r.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const n = t.component && t.component.parent;
    t = n && n.vnode;
  }
  return e;
}
function hw(t) {
  const e = [];
  return t.forEach((r, n) => {
    e.push(...n === 0 ? [] : [`
`], ...dw(r));
  }), e;
}
function dw({ vnode: t, recurseCount: e }) {
  const r = e > 0 ? `... (${e} recursive calls)` : "", n = t.component ? t.component.parent == null : !1, i = ` at <${bc(
    t.component,
    t.type,
    n
  )}`, s = ">" + r;
  return t.props ? [i, ...pw(t.props), s] : [i + s];
}
function pw(t) {
  const e = [], r = Object.keys(t);
  return r.slice(0, 3).forEach((n) => {
    e.push(...y0(n, t[n]));
  }), r.length > 3 && e.push(" ..."), e;
}
function y0(t, e, r) {
  return nt(e) ? (e = JSON.stringify(e), r ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? r ? e : [`${t}=${e}`] : Ye(e) ? (e = y0(t, be(e.value), !0), r ? e : [`${t}=Ref<`, e, ">"]) : pe(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = be(e), r ? e : [`${t}=`, e]);
}
function mw(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? q(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && q(`${e} is NaN - the duration expression might be incorrect.`));
}
const wd = {
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
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Wn(t, e, r, n) {
  try {
    return n ? t(...n) : t();
  } catch (i) {
    Co(i, e, r);
  }
}
function Lr(t, e, r, n) {
  if (pe(t)) {
    const i = Wn(t, e, r, n);
    return i && md(i) && i.catch((s) => {
      Co(s, e, r);
    }), i;
  }
  if (le(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++)
      i.push(Lr(t[s], e, r, n));
    return i;
  } else
    process.env.NODE_ENV !== "production" && q(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
    );
}
function Co(t, e, r, n = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? wd[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
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
      Jn(), Wn(
        l,
        null,
        10,
        [t, a, o]
      ), Qn();
      return;
    }
  }
  gw(t, r, i, n);
}
function gw(t, e, r, n = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = wd[e];
    if (r && Bl(r), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), r && Wl(), n)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let ho = !1, fh = !1;
const Bt = [];
let hn = 0;
const Js = [];
let Gn = null, hi = 0;
const v0 = /* @__PURE__ */ Promise.resolve();
let Od = null;
const yw = 100;
function gu(t) {
  const e = Od || v0;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function vw(t) {
  let e = hn + 1, r = Bt.length;
  for (; e < r; ) {
    const n = e + r >>> 1, i = Bt[n], s = po(i);
    s < t || s === t && i.pre ? e = n + 1 : r = n;
  }
  return e;
}
function pc(t) {
  (!Bt.length || !Bt.includes(
    t,
    ho && t.allowRecurse ? hn + 1 : hn
  )) && (t.id == null ? Bt.push(t) : Bt.splice(vw(t.id), 0, t), b0());
}
function b0() {
  !ho && !fh && (fh = !0, Od = v0.then(S0));
}
function bw(t) {
  const e = Bt.indexOf(t);
  e > hn && Bt.splice(e, 1);
}
function _0(t) {
  le(t) ? Js.push(...t) : (!Gn || !Gn.includes(
    t,
    t.allowRecurse ? hi + 1 : hi
  )) && Js.push(t), b0();
}
function em(t, e, r = ho ? hn + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); r < Bt.length; r++) {
    const n = Bt[r];
    if (n && n.pre) {
      if (t && n.id !== t.uid || process.env.NODE_ENV !== "production" && xd(e, n))
        continue;
      Bt.splice(r, 1), r--, n();
    }
  }
}
function E0(t) {
  if (Js.length) {
    const e = [...new Set(Js)].sort(
      (r, n) => po(r) - po(n)
    );
    if (Js.length = 0, Gn) {
      Gn.push(...e);
      return;
    }
    for (Gn = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), hi = 0; hi < Gn.length; hi++)
      process.env.NODE_ENV !== "production" && xd(t, Gn[hi]) || Gn[hi]();
    Gn = null, hi = 0;
  }
}
const po = (t) => t.id == null ? 1 / 0 : t.id, _w = (t, e) => {
  const r = po(t) - po(e);
  if (r === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return r;
};
function S0(t) {
  fh = !1, ho = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Bt.sort(_w);
  const e = process.env.NODE_ENV !== "production" ? (r) => xd(t, r) : yt;
  try {
    for (hn = 0; hn < Bt.length; hn++) {
      const r = Bt[hn];
      if (r && r.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(r))
          continue;
        Wn(r, null, 14);
      }
    }
  } finally {
    hn = 0, Bt.length = 0, E0(t), ho = !1, Od = null, (Bt.length || Js.length) && S0(t);
  }
}
function xd(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const r = t.get(e);
    if (r > yw) {
      const n = e.ownerInstance, i = n && Dd(n.type);
      return Co(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, r + 1);
  }
}
let Mi = !1;
const js = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (uc().__VUE_HMR_RUNTIME__ = {
  createRecord: Wc(w0),
  rerender: Wc(ww),
  reload: Wc(Ow)
});
const ys = /* @__PURE__ */ new Map();
function Ew(t) {
  const e = t.type.__hmrId;
  let r = ys.get(e);
  r || (w0(e, t.type), r = ys.get(e)), r.instances.add(t);
}
function Sw(t) {
  ys.get(t.type.__hmrId).instances.delete(t);
}
function w0(t, e) {
  return ys.has(t) ? !1 : (ys.set(t, {
    initialDef: Ya(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ya(t) {
  return ob(t) ? t.__vccOpts : t;
}
function ww(t, e) {
  const r = ys.get(t);
  !r || (r.initialDef.render = e, [...r.instances].forEach((n) => {
    e && (n.render = e, Ya(n.type).render = e), n.renderCache = [], Mi = !0, n.effect.dirty = !0, n.update(), Mi = !1;
  }));
}
function Ow(t, e) {
  const r = ys.get(t);
  if (!r)
    return;
  e = Ya(e), tm(r.initialDef, e);
  const n = [...r.instances];
  for (const i of n) {
    const s = Ya(i.type);
    js.has(s) || (s !== r.initialDef && tm(s, e), js.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (js.add(s), i.ceReload(e.styles), js.delete(s)) : i.parent ? (i.parent.effect.dirty = !0, pc(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  _0(() => {
    for (const i of n)
      js.delete(
        Ya(i.type)
      );
  });
}
function tm(t, e) {
  Qe(t, e);
  for (const r in t)
    r !== "__file" && !(r in e) && delete t[r];
}
function Wc(t) {
  return (e, r) => {
    try {
      return t(e, r);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Kr, Ra = [], hh = !1;
function Po(t, ...e) {
  Kr ? Kr.emit(t, ...e) : hh || Ra.push({ event: t, args: e });
}
function Md(t, e) {
  var r, n;
  Kr = t, Kr ? (Kr.enabled = !0, Ra.forEach(({ event: i, args: s }) => Kr.emit(i, ...s)), Ra = []) : typeof window < "u" && window.HTMLElement && !((n = (r = window.navigator) == null ? void 0 : r.userAgent) != null && n.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Md(s, e);
  }), setTimeout(() => {
    Kr || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, hh = !0, Ra = []);
  }, 3e3)) : (hh = !0, Ra = []);
}
function xw(t, e) {
  Po("app:init", t, e, {
    Fragment: Ge,
    Text: Ao,
    Comment: Nt,
    Static: ql
  });
}
function Mw(t) {
  Po("app:unmount", t);
}
const Tw = /* @__PURE__ */ Td(
  "component:added"
), O0 = /* @__PURE__ */ Td("component:updated"), Nw = /* @__PURE__ */ Td(
  "component:removed"
), Cw = (t) => {
  Kr && typeof Kr.cleanupBuffer == "function" && !Kr.cleanupBuffer(t) && Nw(t);
};
/*! #__NO_SIDE_EFFECTS__ */
function Td(t) {
  return (e) => {
    Po(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Pw = /* @__PURE__ */ x0(
  "perf:start"
), Lw = /* @__PURE__ */ x0(
  "perf:end"
);
function x0(t) {
  return (e, r, n) => {
    Po(t, e.appContext.app, e.uid, e, r, n);
  };
}
function Aw(t, e, r) {
  Po(
    "component:emit",
    t.appContext.app,
    t,
    e,
    r
  );
}
function Iw(t, e, ...r) {
  if (t.isUnmounted)
    return;
  const n = t.vnode.props || Xe;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [c]
    } = t;
    if (f)
      if (!(e in f))
        (!c || !(ts(e) in c)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${ts(e)}" prop.`
        );
      else {
        const h = f[e];
        pe(h) && (h(...r) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = r;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in n) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = n[f] || Xe;
    h && (i = r.map((d) => nt(d) ? d.trim() : d)), c && (i = r.map(wS));
  }
  if (process.env.NODE_ENV !== "production" && Aw(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && n[ts(f)] && q(
      `Event "${f}" is emitted in component ${bc(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${lr(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = n[o = ts(e)] || n[o = ts(vr(e))];
  !l && s && (l = n[o = ts(lr(e))]), l && Lr(
    l,
    t,
    6,
    i
  );
  const u = n[o + "Once"];
  if (u) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[o])
      return;
    t.emitted[o] = !0, Lr(
      u,
      t,
      6,
      i
    );
  }
}
function M0(t, e, r = !1) {
  const n = e.emitsCache, i = n.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!pe(t)) {
    const l = (u) => {
      const f = M0(u, e, !0);
      f && (o = !0, Qe(a, f));
    };
    !r && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Be(t) && n.set(t, null), null) : (le(s) ? s.forEach((l) => a[l] = null) : Qe(a, s), Be(t) && n.set(t, a), a);
}
function mc(t, e) {
  return !t || !No(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Ie(t, e[0].toLowerCase() + e.slice(1)) || Ie(t, lr(e)) || Ie(t, e));
}
let ht = null, T0 = null;
function yu(t) {
  const e = ht;
  return ht = t, T0 = t && t.type.__scopeId || null, e;
}
function Ti(t, e = ht, r) {
  if (!e || t._n)
    return t;
  const n = (...i) => {
    n._d && ym(-1);
    const s = yu(e);
    let a;
    try {
      a = t(...i);
    } finally {
      yu(s), n._d && ym(1);
    }
    return process.env.NODE_ENV !== "production" && O0(e), a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
let dh = !1;
function vu() {
  dh = !0;
}
function qc(t) {
  const {
    type: e,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [s],
    slots: a,
    attrs: o,
    emit: l,
    render: u,
    renderCache: f,
    props: c,
    data: h,
    setupState: d,
    ctx: p,
    inheritAttrs: m
  } = t, g = yu(t);
  let v, y;
  process.env.NODE_ENV !== "production" && (dh = !1);
  try {
    if (r.shapeFlag & 4) {
      const x = i || n, N = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(x, {
        get(M, L, D) {
          return q(
            `Property '${String(
              L
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, L, D);
        }
      }) : x;
      v = zr(
        u.call(
          N,
          x,
          f,
          process.env.NODE_ENV !== "production" ? Bn(c) : c,
          d,
          h,
          p
        )
      ), y = o;
    } else {
      const x = e;
      process.env.NODE_ENV !== "production" && o === c && vu(), v = zr(
        x.length > 1 ? x(
          process.env.NODE_ENV !== "production" ? Bn(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return vu(), o;
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : x(
          process.env.NODE_ENV !== "production" ? Bn(c) : c,
          null
        )
      ), y = e.props ? o : kw(o);
    }
  } catch (x) {
    Za.length = 0, Co(x, t, 1), v = ie(Nt);
  }
  let _ = v, E;
  if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([_, E] = N0(v)), y && m !== !1) {
    const x = Object.keys(y), { shapeFlag: N } = _;
    if (x.length) {
      if (N & 7)
        s && x.some(du) && (y = Dw(
          y,
          s
        )), _ = Mn(_, y);
      else if (process.env.NODE_ENV !== "production" && !dh && _.type !== Nt) {
        const M = Object.keys(o), L = [], D = [];
        for (let C = 0, R = M.length; C < R; C++) {
          const k = M[C];
          No(k) ? du(k) || L.push(k[2].toLowerCase() + k.slice(3)) : D.push(k);
        }
        D.length && q(
          `Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), L.length && q(
          `Extraneous non-emits event listeners (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return r.dirs && (process.env.NODE_ENV !== "production" && !rm(_) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), _ = Mn(_), _.dirs = _.dirs ? _.dirs.concat(r.dirs) : r.dirs), r.transition && (process.env.NODE_ENV !== "production" && !rm(_) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), _.transition = r.transition), process.env.NODE_ENV !== "production" && E ? E(_) : v = _, yu(g), v;
}
const N0 = (t) => {
  const e = t.children, r = t.dynamicChildren, n = Nd(e, !1);
  if (n) {
    if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048)
      return N0(n);
  } else
    return [t, void 0];
  const i = e.indexOf(n), s = r ? r.indexOf(n) : -1, a = (o) => {
    e[i] = o, r && (s > -1 ? r[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...r, o]));
  };
  return [zr(n), a];
};
function Nd(t, e = !0) {
  let r;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (ca(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (r)
          return;
        if (r = i, process.env.NODE_ENV !== "production" && e && r.patchFlag > 0 && r.patchFlag & 2048)
          return Nd(r.children);
      }
    } else
      return;
  }
  return r;
}
const kw = (t) => {
  let e;
  for (const r in t)
    (r === "class" || r === "style" || No(r)) && ((e || (e = {}))[r] = t[r]);
  return e;
}, Dw = (t, e) => {
  const r = {};
  for (const n in t)
    (!du(n) || !(n.slice(9) in e)) && (r[n] = t[n]);
  return r;
}, rm = (t) => t.shapeFlag & 7 || t.type === Nt;
function Rw(t, e, r) {
  const { props: n, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && Mi || e.dirs || e.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? nm(n, a, u) : !!a;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const h = f[c];
        if (a[h] !== n[h] && !mc(u, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : n === a ? !1 : n ? a ? nm(n, a, u) : !0 : !!a;
  return !1;
}
function nm(t, e, r) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (e[s] !== t[s] && !mc(r, s))
      return !0;
  }
  return !1;
}
function $w({ vnode: t, parent: e }, r) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
}
const ph = "components", Fw = "directives";
function Vw(t, e) {
  return C0(ph, t, !0, e) || t;
}
const jw = Symbol.for("v-ndc");
function Cd(t) {
  return C0(Fw, t);
}
function C0(t, e, r = !0, n = !1) {
  const i = ht || St;
  if (i) {
    const s = i.type;
    if (t === ph) {
      const o = Dd(
        s,
        !1
      );
      if (o && (o === e || o === vr(e) || o === ms(vr(e))))
        return s;
    }
    const a = im(i[t] || s[t], e) || im(i.appContext[t], e);
    if (!a && n)
      return s;
    if (process.env.NODE_ENV !== "production" && r && !a) {
      const o = t === ph ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      q(`Failed to resolve ${t.slice(0, -1)}: ${e}${o}`);
    }
    return a;
  } else
    process.env.NODE_ENV !== "production" && q(
      `resolve${ms(t.slice(0, -1))} can only be used in render() or setup().`
    );
}
function im(t, e) {
  return t && (t[e] || t[vr(e)] || t[ms(vr(e))]);
}
const Gw = (t) => t.__isSuspense;
function Uw(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : _0(t);
}
const Bw = Symbol.for("v-scx"), Ww = () => {
  {
    const t = ea(Bw);
    return t || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function _r(t, e) {
  return Pd(t, null, e);
}
const ll = {};
function et(t, e, r) {
  return process.env.NODE_ENV !== "production" && !pe(e) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Pd(t, e, r);
}
function Pd(t, e, {
  immediate: r,
  deep: n,
  flush: i,
  once: s,
  onTrack: a,
  onTrigger: o
} = Xe) {
  if (e && s) {
    const M = e;
    e = (...L) => {
      M(...L), N();
    };
  }
  process.env.NODE_ENV !== "production" && n !== void 0 && typeof n == "number" && q(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !e && (r !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && q(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (M) => {
    q(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = St, f = (M) => n === !0 ? M : ss(M, n === !1 ? 1 : void 0);
  let c, h = !1, d = !1;
  if (Ye(t) ? (c = () => t.value, h = cs(t)) : vn(t) ? (c = () => f(t), h = !0) : le(t) ? (d = !0, h = t.some((M) => vn(M) || cs(M)), c = () => t.map((M) => {
    if (Ye(M))
      return M.value;
    if (vn(M))
      return f(M);
    if (pe(M))
      return Wn(M, u, 2);
    process.env.NODE_ENV !== "production" && l(M);
  })) : pe(t) ? e ? c = () => Wn(t, u, 2) : c = () => (p && p(), Lr(
    t,
    u,
    3,
    [m]
  )) : (c = yt, process.env.NODE_ENV !== "production" && l(t)), e && n) {
    const M = c;
    c = () => ss(M());
  }
  let p, m = (M) => {
    p = E.onStop = () => {
      Wn(M, u, 4), p = E.onStop = void 0;
    };
  }, g;
  if (yc)
    if (m = yt, e ? r && Lr(e, u, 3, [
      c(),
      d ? [] : void 0,
      m
    ]) : c(), i === "sync") {
      const M = Ww();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return yt;
  let v = d ? new Array(t.length).fill(ll) : ll;
  const y = () => {
    if (!(!E.active || !E.dirty))
      if (e) {
        const M = E.run();
        (n || h || (d ? M.some((L, D) => Ai(L, v[D])) : Ai(M, v))) && (p && p(), Lr(e, u, 3, [
          M,
          v === ll ? void 0 : d && v[0] === ll ? [] : v,
          m
        ]), v = M);
      } else
        E.run();
  };
  y.allowRecurse = !!e;
  let _;
  i === "sync" ? _ = y : i === "post" ? _ = () => ar(y, u && u.suspense) : (y.pre = !0, u && (y.id = u.uid), _ = () => pc(y));
  const E = new vd(c, yt, _), x = Xv(), N = () => {
    E.stop(), x && pd(x.effects, E);
  };
  return process.env.NODE_ENV !== "production" && (E.onTrack = a, E.onTrigger = o), e ? r ? y() : v = E.run() : i === "post" ? ar(
    E.run.bind(E),
    u && u.suspense
  ) : E.run(), g && g.push(N), N;
}
function qw(t, e, r) {
  const n = this.proxy, i = nt(t) ? t.includes(".") ? P0(n, t) : () => n[t] : t.bind(n, n);
  let s;
  pe(e) ? s = e : (s = e.handler, r = e);
  const a = ko(this), o = Pd(i, s.bind(n), r);
  return a(), o;
}
function P0(t, e) {
  const r = e.split(".");
  return () => {
    let n = t;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
function ss(t, e, r = 0, n) {
  if (!Be(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (r >= e)
      return t;
    r++;
  }
  if (n = n || /* @__PURE__ */ new Set(), n.has(t))
    return t;
  if (n.add(t), Ye(t))
    ss(t.value, e, r, n);
  else if (le(t))
    for (let i = 0; i < t.length; i++)
      ss(t[i], e, r, n);
  else if (Uv(t) || os(t))
    t.forEach((i) => {
      ss(i, e, r, n);
    });
  else if (Wv(t))
    for (const i in t)
      ss(t[i], e, r, n);
  return t;
}
function L0(t) {
  _S(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function bu(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), t;
  const r = vc(ht) || ht.proxy, n = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Xe] = e[i];
    s && (pe(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ss(a), n.push({
      dir: s,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return t;
}
function qi(t, e, r, n) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[n];
    l && (Jn(), Lr(l, r, 8, [
      t.el,
      o,
      t,
      e
    ]), Qn());
  }
}
const di = Symbol("_leaveCb"), ul = Symbol("_enterCb");
function Hw() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Er(() => {
    t.isMounted = !0;
  }), R0(() => {
    t.isUnmounting = !0;
  }), t;
}
const wr = [Function, Array], A0 = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: wr,
  onEnter: wr,
  onAfterEnter: wr,
  onEnterCancelled: wr,
  onBeforeLeave: wr,
  onLeave: wr,
  onAfterLeave: wr,
  onLeaveCancelled: wr,
  onBeforeAppear: wr,
  onAppear: wr,
  onAfterAppear: wr,
  onAppearCancelled: wr
}, zw = {
  name: "BaseTransition",
  props: A0,
  setup(t, { slots: e }) {
    const r = Io(), n = Hw();
    return () => {
      const i = e.default && k0(e.default(), !0);
      if (!i || !i.length)
        return;
      let s = i[0];
      if (i.length > 1) {
        let h = !1;
        for (const d of i)
          if (d.type !== Nt) {
            if (process.env.NODE_ENV !== "production" && h) {
              q(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = d, h = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const a = be(t), { mode: o } = a;
      if (process.env.NODE_ENV !== "production" && o && o !== "in-out" && o !== "out-in" && o !== "default" && q(`invalid <transition> mode: ${o}`), n.isLeaving)
        return Hc(s);
      const l = sm(s);
      if (!l)
        return Hc(s);
      const u = mh(
        l,
        a,
        n,
        r
      );
      gh(l, u);
      const f = r.subTree, c = f && sm(f);
      if (c && c.type !== Nt && !is(l, c)) {
        const h = mh(
          c,
          a,
          n,
          r
        );
        if (gh(c, h), o === "out-in")
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, r.update.active !== !1 && (r.effect.dirty = !0, r.update());
          }, Hc(s);
        o === "in-out" && l.type !== Nt && (h.delayLeave = (d, p, m) => {
          const g = I0(
            n,
            c
          );
          g[String(c.key)] = c, d[di] = () => {
            p(), d[di] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = m;
        });
      }
      return s;
    };
  }
}, Yw = zw;
function I0(t, e) {
  const { leavingVNodes: r } = t;
  let n = r.get(e.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(e.type, n)), n;
}
function mh(t, e, r, n) {
  const {
    appear: i,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: o,
    onEnter: l,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: c,
    onLeave: h,
    onAfterLeave: d,
    onLeaveCancelled: p,
    onBeforeAppear: m,
    onAppear: g,
    onAfterAppear: v,
    onAppearCancelled: y
  } = e, _ = String(t.key), E = I0(r, t), x = (L, D) => {
    L && Lr(
      L,
      n,
      9,
      D
    );
  }, N = (L, D) => {
    const C = D[1];
    x(L, D), le(L) ? L.every((R) => R.length <= 1) && C() : L.length <= 1 && C();
  }, M = {
    mode: s,
    persisted: a,
    beforeEnter(L) {
      let D = o;
      if (!r.isMounted)
        if (i)
          D = m || o;
        else
          return;
      L[di] && L[di](
        !0
      );
      const C = E[_];
      C && is(t, C) && C.el[di] && C.el[di](), x(D, [L]);
    },
    enter(L) {
      let D = l, C = u, R = f;
      if (!r.isMounted)
        if (i)
          D = g || l, C = v || u, R = y || f;
        else
          return;
      let k = !1;
      const Q = L[ul] = (ve) => {
        k || (k = !0, ve ? x(R, [L]) : x(C, [L]), M.delayedLeave && M.delayedLeave(), L[ul] = void 0);
      };
      D ? N(D, [L, Q]) : Q();
    },
    leave(L, D) {
      const C = String(t.key);
      if (L[ul] && L[ul](
        !0
      ), r.isUnmounting)
        return D();
      x(c, [L]);
      let R = !1;
      const k = L[di] = (Q) => {
        R || (R = !0, D(), Q ? x(p, [L]) : x(d, [L]), L[di] = void 0, E[C] === t && delete E[C]);
      };
      E[C] = t, h ? N(h, [L, k]) : k();
    },
    clone(L) {
      return mh(L, e, r, n);
    }
  };
  return M;
}
function Hc(t) {
  if (Lo(t))
    return t = Mn(t), t.children = null, t;
}
function sm(t) {
  if (!Lo(t))
    return t;
  if (process.env.NODE_ENV !== "production" && t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: r } = t;
  if (r) {
    if (e & 16)
      return r[0];
    if (e & 32 && pe(r.default))
      return r.default();
  }
}
function gh(t, e) {
  t.shapeFlag & 6 && t.component ? gh(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function k0(t, e = !1, r) {
  let n = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = r == null ? a.key : String(r) + String(a.key != null ? a.key : s);
    a.type === Ge ? (a.patchFlag & 128 && i++, n = n.concat(
      k0(a.children, e, o)
    )) : (e || a.type !== Nt) && n.push(o != null ? Mn(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < n.length; s++)
      n[s].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
function fe(t, e) {
  return pe(t) ? /* @__PURE__ */ (() => Qe({ name: t.name }, e, { setup: t }))() : t;
}
const Ka = (t) => !!t.type.__asyncLoader, Lo = (t) => t.type.__isKeepAlive;
function Kw(t, e) {
  D0(t, "a", e);
}
function Xw(t, e) {
  D0(t, "da", e);
}
function D0(t, e, r = St) {
  const n = t.__wdc || (t.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (gc(e, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Lo(i.parent.vnode) && Zw(n, e, r, i), i = i.parent;
  }
}
function Zw(t, e, r, n) {
  const i = gc(
    e,
    t,
    n,
    !0
  );
  Fi(() => {
    pd(n[e], i);
  }, r);
}
function gc(t, e, r = St, n = !1) {
  if (r) {
    const i = r[t] || (r[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (r.isUnmounted)
        return;
      Jn();
      const o = ko(r), l = Lr(e, r, t, a);
      return o(), Qn(), l;
    });
    return n ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = ts(wd[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ei = (t) => (e, r = St) => (!yc || t === "sp") && gc(t, (...n) => e(...n), r), Jw = ei("bm"), Er = ei("m"), Qw = ei("bu"), eO = ei("u"), R0 = ei("bum"), Fi = ei("um"), tO = ei("sp"), rO = ei(
  "rtg"
), nO = ei(
  "rtc"
);
function iO(t, e = St) {
  gc("ec", t, e);
}
function kr(t, e, r, n) {
  let i;
  const s = r && r[n];
  if (le(t) || nt(t)) {
    i = new Array(t.length);
    for (let a = 0, o = t.length; a < o; a++)
      i[a] = e(t[a], a, void 0, s && s[a]);
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && q(`The v-for range expect an integer value but got ${t}.`), i = new Array(t);
    for (let a = 0; a < t; a++)
      i[a] = e(a + 1, a, void 0, s && s[a]);
  } else if (Be(t))
    if (t[Symbol.iterator])
      i = Array.from(
        t,
        (a, o) => e(a, o, void 0, s && s[o])
      );
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
  return r && (r[n] = i), i;
}
function $0(t, e, r = {}, n, i) {
  if (ht.isCE || ht.parent && Ka(ht.parent) && ht.parent.isCE)
    return e !== "default" && (r.name = e), ie("slot", r, n && n());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), A();
  const a = s && F0(s(r)), o = Ue(
    Ge,
    {
      key: r.key || a && a.key || `_${e}`
    },
    a || (n ? n() : []),
    a && t._ === 1 ? 64 : -2
  );
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function F0(t) {
  return t.some((e) => ca(e) ? !(e.type === Nt || e.type === Ge && !F0(e.children)) : !0) ? t : null;
}
const yh = (t) => t ? sb(t) ? vc(t) || t.proxy : yh(t.parent) : null, hs = /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Bn(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Bn(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Bn(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Bn(t.refs) : t.refs,
  $parent: (t) => yh(t.parent),
  $root: (t) => yh(t.root),
  $emit: (t) => t.emit,
  $options: (t) => Ad(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    t.effect.dirty = !0, pc(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = gu.bind(t.proxy)),
  $watch: (t) => qw.bind(t)
}), Ld = (t) => t === "_" || t === "$", zc = (t, e) => t !== Xe && !t.__isScriptSetup && Ie(t, e), V0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: s, accessCache: a, type: o, appContext: l } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let u;
    if (e[0] !== "$") {
      const d = a[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return n[e];
          case 2:
            return i[e];
          case 4:
            return r[e];
          case 3:
            return s[e];
        }
      else {
        if (zc(n, e))
          return a[e] = 1, n[e];
        if (i !== Xe && Ie(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && Ie(u, e))
          return a[e] = 3, s[e];
        if (r !== Xe && Ie(r, e))
          return a[e] = 4, r[e];
        vh && (a[e] = 0);
      }
    }
    const f = hs[e];
    let c, h;
    if (f)
      return e === "$attrs" ? (Dt(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && vu()) : process.env.NODE_ENV !== "production" && e === "$slots" && Dt(t, "get", e), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (r !== Xe && Ie(r, e))
      return a[e] = 4, r[e];
    if (h = l.config.globalProperties, Ie(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && ht && (!nt(e) || e.indexOf("__v") !== 0) && (i !== Xe && Ld(e[0]) && Ie(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, r) {
    const { data: n, setupState: i, ctx: s } = t;
    return zc(i, e) ? (i[e] = r, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && Ie(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : n !== Xe && Ie(n, e) ? (n[e] = r, !0) : Ie(t.props, e) ? (process.env.NODE_ENV !== "production" && q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && q(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : s[e] = r, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: r, ctx: n, appContext: i, propsOptions: s }
  }, a) {
    let o;
    return !!r[a] || t !== Xe && Ie(t, a) || zc(e, a) || (o = s[0]) && Ie(o, a) || Ie(n, a) || Ie(hs, a) || Ie(i.config.globalProperties, a);
  },
  defineProperty(t, e, r) {
    return r.get != null ? t._.accessCache[e] = 0 : Ie(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r);
  }
};
process.env.NODE_ENV !== "production" && (V0.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function sO(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(hs).forEach((r) => {
    Object.defineProperty(e, r, {
      configurable: !0,
      enumerable: !1,
      get: () => hs[r](t),
      set: yt
    });
  }), e;
}
function aO(t) {
  const {
    ctx: e,
    propsOptions: [r]
  } = t;
  r && Object.keys(r).forEach((n) => {
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[n],
      set: yt
    });
  });
}
function oO(t) {
  const { ctx: e, setupState: r } = t;
  Object.keys(be(r)).forEach((n) => {
    if (!r.__isScriptSetup) {
      if (Ld(n[0])) {
        q(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, n, {
        enumerable: !0,
        configurable: !0,
        get: () => r[n],
        set: yt
      });
    }
  });
}
function am(t) {
  return le(t) ? t.reduce(
    (e, r) => (e[r] = null, e),
    {}
  ) : t;
}
function lO() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, r) => {
    t[r] ? q(`${e} property "${r}" is already defined in ${t[r]}.`) : t[r] = e;
  };
}
let vh = !0;
function uO(t) {
  const e = Ad(t), r = t.proxy, n = t.ctx;
  vh = !1, e.beforeCreate && om(e.beforeCreate, t, "bc");
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
    updated: p,
    activated: m,
    deactivated: g,
    beforeDestroy: v,
    beforeUnmount: y,
    destroyed: _,
    unmounted: E,
    render: x,
    renderTracked: N,
    renderTriggered: M,
    errorCaptured: L,
    serverPrefetch: D,
    expose: C,
    inheritAttrs: R,
    components: k,
    directives: Q,
    filters: ve
  } = e, T = process.env.NODE_ENV !== "production" ? lO() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = t.propsOptions;
    if (z)
      for (const X in z)
        T("Props", X);
  }
  if (u && cO(u, n, T), a)
    for (const z in a) {
      const X = a[z];
      pe(X) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(n, z, {
        value: X.bind(r),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[z] = X.bind(r), process.env.NODE_ENV !== "production" && T("Methods", z)) : process.env.NODE_ENV !== "production" && q(
        `Method "${z}" has type "${typeof X}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !pe(i) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = i.call(r, r);
    if (process.env.NODE_ENV !== "production" && md(z) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(z))
      process.env.NODE_ENV !== "production" && q("data() should return an object.");
    else if (t.data = hc(z), process.env.NODE_ENV !== "production")
      for (const X in z)
        T("Data", X), Ld(X[0]) || Object.defineProperty(n, X, {
          configurable: !0,
          enumerable: !0,
          get: () => z[X],
          set: yt
        });
  }
  if (vh = !0, s)
    for (const z in s) {
      const X = s[z], Ce = pe(X) ? X.bind(r, r) : pe(X.get) ? X.get.bind(r, r) : yt;
      process.env.NODE_ENV !== "production" && Ce === yt && q(`Computed property "${z}" has no getter.`);
      const Le = !pe(X) && pe(X.set) ? X.set.bind(r) : process.env.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : yt, dt = de({
        get: Ce,
        set: Le
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (Rt) => dt.value = Rt
      }), process.env.NODE_ENV !== "production" && T("Computed", z);
    }
  if (o)
    for (const z in o)
      j0(o[z], n, r, z);
  if (l) {
    const z = pe(l) ? l.call(r) : l;
    Reflect.ownKeys(z).forEach((X) => {
      U0(X, z[X]);
    });
  }
  f && om(f, t, "c");
  function $(z, X) {
    le(X) ? X.forEach((Ce) => z(Ce.bind(r))) : X && z(X.bind(r));
  }
  if ($(Jw, c), $(Er, h), $(Qw, d), $(eO, p), $(Kw, m), $(Xw, g), $(iO, L), $(nO, N), $(rO, M), $(R0, y), $(Fi, E), $(tO, D), le(C))
    if (C.length) {
      const z = t.exposed || (t.exposed = {});
      C.forEach((X) => {
        Object.defineProperty(z, X, {
          get: () => r[X],
          set: (Ce) => r[X] = Ce
        });
      });
    } else
      t.exposed || (t.exposed = {});
  x && t.render === yt && (t.render = x), R != null && (t.inheritAttrs = R), k && (t.components = k), Q && (t.directives = Q);
}
function cO(t, e, r = yt) {
  le(t) && (t = bh(t));
  for (const n in t) {
    const i = t[n];
    let s;
    Be(i) ? "default" in i ? s = ea(
      i.from || n,
      i.default,
      !0
    ) : s = ea(i.from || n) : s = ea(i), Ye(s) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[n] = s, process.env.NODE_ENV !== "production" && r("Inject", n);
  }
}
function om(t, e, r) {
  Lr(
    le(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy),
    e,
    r
  );
}
function j0(t, e, r, n) {
  const i = n.includes(".") ? P0(r, n) : () => r[n];
  if (nt(t)) {
    const s = e[t];
    pe(s) ? et(i, s) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (pe(t))
    et(i, t.bind(r));
  else if (Be(t))
    if (le(t))
      t.forEach((s) => j0(s, e, r, n));
    else {
      const s = pe(t.handler) ? t.handler.bind(r) : e[t.handler];
      pe(s) ? et(i, s, t) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && q(`Invalid watch option: "${n}"`, t);
}
function Ad(t) {
  const e = t.type, { mixins: r, extends: n } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !r && !n ? l = e : (l = {}, i.length && i.forEach(
    (u) => _u(l, u, a, !0)
  ), _u(l, e, a)), Be(e) && s.set(e, l), l;
}
function _u(t, e, r, n = !1) {
  const { mixins: i, extends: s } = e;
  s && _u(t, s, r, !0), i && i.forEach(
    (a) => _u(t, a, r, !0)
  );
  for (const a in e)
    if (n && a === "expose")
      process.env.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = fO[a] || r && r[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const fO = {
  data: lm,
  props: um,
  emits: um,
  methods: $a,
  computed: $a,
  beforeCreate: Yt,
  created: Yt,
  beforeMount: Yt,
  mounted: Yt,
  beforeUpdate: Yt,
  updated: Yt,
  beforeDestroy: Yt,
  beforeUnmount: Yt,
  destroyed: Yt,
  unmounted: Yt,
  activated: Yt,
  deactivated: Yt,
  errorCaptured: Yt,
  serverPrefetch: Yt,
  components: $a,
  directives: $a,
  watch: dO,
  provide: lm,
  inject: hO
};
function lm(t, e) {
  return e ? t ? function() {
    return Qe(
      pe(t) ? t.call(this, this) : t,
      pe(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function hO(t, e) {
  return $a(bh(t), bh(e));
}
function bh(t) {
  if (le(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++)
      e[t[r]] = t[r];
    return e;
  }
  return t;
}
function Yt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function $a(t, e) {
  return t ? Qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function um(t, e) {
  return t ? le(t) && le(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Qe(
    /* @__PURE__ */ Object.create(null),
    am(t),
    am(e != null ? e : {})
  ) : e;
}
function dO(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const r = Qe(/* @__PURE__ */ Object.create(null), t);
  for (const n in e)
    r[n] = Yt(t[n], e[n]);
  return r;
}
function G0() {
  return {
    app: null,
    config: {
      isNativeTag: vS,
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
let pO = 0;
function mO(t, e) {
  return function(n, i = null) {
    pe(n) || (n = Qe({}, n)), i != null && !Be(i) && (process.env.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const s = G0(), a = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = s.app = {
      _uid: pO++,
      _component: n,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Em,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return a.has(u) ? process.env.NODE_ENV !== "production" && q("Plugin has already been applied to target app.") : u && pe(u.install) ? (a.add(u), u.install(l, ...f)) : pe(u) ? (a.add(u), u(l, ...f)) : process.env.NODE_ENV !== "production" && q(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && q(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), l;
      },
      component(u, f) {
        return process.env.NODE_ENV !== "production" && xh(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && q(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && L0(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && q(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
      },
      mount(u, f, c) {
        if (o)
          process.env.NODE_ENV !== "production" && q(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && q(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = ie(n, i);
          return h.appContext = s, c === !0 ? c = "svg" : c === !1 && (c = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            t(
              Mn(h),
              u,
              c
            );
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, xw(l, Em)), vc(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, Mw(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in s.provides && q(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = f, l;
      },
      runWithContext(u) {
        const f = Qs;
        Qs = l;
        try {
          return u();
        } finally {
          Qs = f;
        }
      }
    };
    return l;
  };
}
let Qs = null;
function U0(t, e) {
  if (!St)
    process.env.NODE_ENV !== "production" && q("provide() can only be used inside setup().");
  else {
    let r = St.provides;
    const n = St.parent && St.parent.provides;
    n === r && (r = St.provides = Object.create(n)), r[t] = e;
  }
}
function ea(t, e, r = !1) {
  const n = St || ht;
  if (n || Qs) {
    const i = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Qs._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return r && pe(e) ? e.call(n && n.proxy) : e;
    process.env.NODE_ENV !== "production" && q(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function gO() {
  return !!(St || ht || Qs);
}
const B0 = {}, W0 = () => Object.create(B0), q0 = (t) => Object.getPrototypeOf(t) === B0;
function yO(t, e, r, n = !1) {
  const i = {}, s = W0();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), H0(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && Y0(e || {}, i, t), r ? t.props = n ? i : iw(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function vO(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function bO(t, e, r, n) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = be(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && vO(t)) && (n || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (mc(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (Ie(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const p = vr(h);
            i[p] = _h(
              l,
              o,
              p,
              d,
              t,
              !1
            );
          }
        else
          d !== s[h] && (s[h] = d, u = !0);
      }
    }
  } else {
    H0(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !Ie(e, c) && ((f = lr(c)) === c || !Ie(e, f))) && (l ? r && (r[c] !== void 0 || r[f] !== void 0) && (i[c] = _h(
        l,
        o,
        c,
        void 0,
        t,
        !0
      )) : delete i[c]);
    if (s !== o)
      for (const c in s)
        (!e || !Ie(e, c) && !0) && (delete s[c], u = !0);
  }
  u && yn(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && Y0(e || {}, i, t);
}
function H0(t, e, r, n) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (za(l))
        continue;
      const u = e[l];
      let f;
      i && Ie(i, f = vr(l)) ? !s || !s.includes(f) ? r[f] = u : (o || (o = {}))[f] = u : mc(t.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, a = !0);
    }
  if (s) {
    const l = be(r), u = o || Xe;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      r[c] = _h(
        i,
        l,
        c,
        u[c],
        t,
        !Ie(u, c)
      );
    }
  }
  return a;
}
function _h(t, e, r, n, i, s) {
  const a = t[r];
  if (a != null) {
    const o = Ie(a, "default");
    if (o && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && pe(l)) {
        const { propsDefaults: u } = i;
        if (r in u)
          n = u[r];
        else {
          const f = ko(i);
          n = u[r] = l.call(
            null,
            e
          ), f();
        }
      } else
        n = l;
    }
    a[0] && (s && !o ? n = !1 : a[1] && (n === "" || n === lr(r)) && (n = !0));
  }
  return n;
}
function z0(t, e, r = !1) {
  const n = e.propsCache, i = n.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!pe(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = z0(c, e, !0);
      Qe(a, h), d && o.push(...d);
    };
    !r && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return Be(t) && n.set(t, Zs), Zs;
  if (le(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !nt(s[f]) && q("props must be strings when using array syntax.", s[f]);
      const c = vr(s[f]);
      cm(c) && (a[c] = Xe);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Be(s) && q("invalid props options", s);
    for (const f in s) {
      const c = vr(f);
      if (cm(c)) {
        const h = s[f], d = a[c] = le(h) || pe(h) ? { type: h } : Qe({}, h);
        if (d) {
          const p = hm(Boolean, d.type), m = hm(String, d.type);
          d[0] = p > -1, d[1] = m < 0 || p < m, (p > -1 || Ie(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return Be(t) && n.set(t, u), u;
}
function cm(t) {
  return t[0] !== "$" && !za(t) ? !0 : (process.env.NODE_ENV !== "production" && q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Eh(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function fm(t, e) {
  return Eh(t) === Eh(e);
}
function hm(t, e) {
  return le(e) ? e.findIndex((r) => fm(r, t)) : pe(e) && fm(e, t) ? 0 : -1;
}
function Y0(t, e, r) {
  const n = be(e), i = r.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && _O(
      s,
      n[s],
      a,
      process.env.NODE_ENV !== "production" ? Bn(n) : n,
      !Ie(t, s) && !Ie(t, lr(s))
    );
  }
}
function _O(t, e, r, n, i) {
  const { type: s, required: a, validator: o, skipCheck: l } = r;
  if (a && i) {
    q('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !a)) {
    if (s != null && s !== !0 && !l) {
      let u = !1;
      const f = le(s) ? s : [s], c = [];
      for (let h = 0; h < f.length && !u; h++) {
        const { valid: d, expectedType: p } = SO(e, f[h]);
        c.push(p || ""), u = d;
      }
      if (!u) {
        q(wO(t, e, c));
        return;
      }
    }
    o && !o(e, n) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const EO = /* @__PURE__ */ Zn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function SO(t, e) {
  let r;
  const n = Eh(e);
  if (EO(n)) {
    const i = typeof t;
    r = i === n.toLowerCase(), !r && i === "object" && (r = t instanceof e);
  } else
    n === "Object" ? r = Be(t) : n === "Array" ? r = le(t) : n === "null" ? r = t === null : r = t instanceof e;
  return {
    valid: r,
    expectedType: n
  };
}
function wO(t, e, r) {
  if (r.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${t}". Expected ${r.map(ms).join(" | ")}`;
  const i = r[0], s = gd(e), a = dm(e, i), o = dm(e, s);
  return r.length === 1 && pm(i) && !OO(i, s) && (n += ` with value ${a}`), n += `, got ${s} `, pm(s) && (n += `with value ${o}.`), n;
}
function dm(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function pm(t) {
  return ["string", "number", "boolean"].some((r) => t.toLowerCase() === r);
}
function OO(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const K0 = (t) => t[0] === "_" || t === "$stable", Id = (t) => le(t) ? t.map(zr) : [zr(t)], xO = (t, e, r) => {
  if (e._n)
    return e;
  const n = Ti((...i) => (process.env.NODE_ENV !== "production" && St && (!r || r.root === St.root) && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Id(e(...i))), r);
  return n._c = !1, n;
}, X0 = (t, e, r) => {
  const n = t._ctx;
  for (const i in t) {
    if (K0(i))
      continue;
    const s = t[i];
    if (pe(s))
      e[i] = xO(i, s, n);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Id(s);
      e[i] = () => a;
    }
  }
}, Z0 = (t, e) => {
  process.env.NODE_ENV !== "production" && !Lo(t.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const r = Id(e);
  t.slots.default = () => r;
}, MO = (t, e) => {
  const r = t.slots = W0();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (Qe(r, e), qv(r, "_", n)) : X0(e, r);
  } else
    e && Z0(t, e);
}, TO = (t, e, r) => {
  const { vnode: n, slots: i } = t;
  let s = !0, a = Xe;
  if (n.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && Mi ? (Qe(i, e), yn(t, "set", "$slots")) : r && o === 1 ? s = !1 : (Qe(i, e), !r && o === 1 && delete i._) : (s = !e.$stable, X0(e, i)), a = e;
  } else
    e && (Z0(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !K0(o) && a[o] == null && delete i[o];
};
function Sh(t, e, r, n, i = !1) {
  if (le(t)) {
    t.forEach(
      (h, d) => Sh(
        h,
        e && (le(e) ? e[d] : e),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Ka(n) && !i)
    return;
  const s = n.shapeFlag & 4 ? vc(n.component) || n.component.proxy : n.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, f = o.refs === Xe ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (nt(u) ? (f[u] = null, Ie(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), pe(l))
    Wn(l, o, 12, [a, f]);
  else {
    const h = nt(l), d = Ye(l);
    if (h || d) {
      const p = () => {
        if (t.f) {
          const m = h ? Ie(c, l) ? c[l] : f[l] : l.value;
          i ? le(m) && pd(m, s) : le(m) ? m.includes(s) || m.push(s) : h ? (f[l] = [s], Ie(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, Ie(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (p.id = -1, ar(p, r)) : p();
    } else
      process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let xa, vi;
function Vn(t, e) {
  t.appContext.config.performance && Eu() && vi.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && Pw(t, e, Eu() ? vi.now() : Date.now());
}
function jn(t, e) {
  if (t.appContext.config.performance && Eu()) {
    const r = `vue-${e}-${t.uid}`, n = r + ":end";
    vi.mark(n), vi.measure(
      `<${bc(t, t.type)}> ${e}`,
      r,
      n
    ), vi.clearMarks(r), vi.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" && Lw(t, e, Eu() ? vi.now() : Date.now());
}
function Eu() {
  return xa !== void 0 || (typeof window < "u" && window.performance ? (xa = !0, vi = window.performance) : xa = !1), xa;
}
function NO() {
  const t = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && t.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), uc().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ar = Uw;
function CO(t) {
  return PO(t);
}
function PO(t, e) {
  NO();
  const r = uc();
  r.__VUE__ = !0, process.env.NODE_ENV !== "production" && Md(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
  const {
    insert: n,
    remove: i,
    patchProp: s,
    createElement: a,
    createText: o,
    createComment: l,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: h,
    setScopeId: d = yt,
    insertStaticContent: p
  } = t, m = (b, S, I, V = null, j = null, W = null, Z = void 0, B = null, K = process.env.NODE_ENV !== "production" && Mi ? !1 : !!S.dynamicChildren) => {
    if (b === S)
      return;
    b && !is(b, S) && (V = tr(b), Te(b, j, W, !0), b = null), S.patchFlag === -2 && (K = !1, S.dynamicChildren = null);
    const { type: U, ref: re, shapeFlag: ue } = S;
    switch (U) {
      case Ao:
        g(b, S, I, V);
        break;
      case Nt:
        v(b, S, I, V);
        break;
      case ql:
        b == null ? y(S, I, V, Z) : process.env.NODE_ENV !== "production" && _(b, S, I, Z);
        break;
      case Ge:
        Q(
          b,
          S,
          I,
          V,
          j,
          W,
          Z,
          B,
          K
        );
        break;
      default:
        ue & 1 ? N(
          b,
          S,
          I,
          V,
          j,
          W,
          Z,
          B,
          K
        ) : ue & 6 ? ve(
          b,
          S,
          I,
          V,
          j,
          W,
          Z,
          B,
          K
        ) : ue & 64 || ue & 128 ? U.process(
          b,
          S,
          I,
          V,
          j,
          W,
          Z,
          B,
          K,
          Pt
        ) : process.env.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    re != null && j && Sh(re, b && b.ref, W, S || b, !S);
  }, g = (b, S, I, V) => {
    if (b == null)
      n(
        S.el = o(S.children),
        I,
        V
      );
    else {
      const j = S.el = b.el;
      S.children !== b.children && u(j, S.children);
    }
  }, v = (b, S, I, V) => {
    b == null ? n(
      S.el = l(S.children || ""),
      I,
      V
    ) : S.el = b.el;
  }, y = (b, S, I, V) => {
    [b.el, b.anchor] = p(
      b.children,
      S,
      I,
      V,
      b.el,
      b.anchor
    );
  }, _ = (b, S, I, V) => {
    if (S.children !== b.children) {
      const j = h(b.anchor);
      x(b), [S.el, S.anchor] = p(
        S.children,
        I,
        j,
        V
      );
    } else
      S.el = b.el, S.anchor = b.anchor;
  }, E = ({ el: b, anchor: S }, I, V) => {
    let j;
    for (; b && b !== S; )
      j = h(b), n(b, I, V), b = j;
    n(S, I, V);
  }, x = ({ el: b, anchor: S }) => {
    let I;
    for (; b && b !== S; )
      I = h(b), i(b), b = I;
    i(S);
  }, N = (b, S, I, V, j, W, Z, B, K) => {
    S.type === "svg" ? Z = "svg" : S.type === "math" && (Z = "mathml"), b == null ? M(
      S,
      I,
      V,
      j,
      W,
      Z,
      B,
      K
    ) : C(
      b,
      S,
      j,
      W,
      Z,
      B,
      K
    );
  }, M = (b, S, I, V, j, W, Z, B) => {
    let K, U;
    const { props: re, shapeFlag: ue, transition: ae, dirs: he } = b;
    if (K = b.el = a(
      b.type,
      W,
      re && re.is,
      re
    ), ue & 8 ? f(K, b.children) : ue & 16 && D(
      b.children,
      K,
      null,
      V,
      j,
      Yc(b, W),
      Z,
      B
    ), he && qi(b, null, V, "created"), L(K, b, b.scopeId, Z, V), re) {
      for (const $e in re)
        $e !== "value" && !za($e) && s(
          K,
          $e,
          null,
          re[$e],
          W,
          b.children,
          V,
          j,
          ke
        );
      "value" in re && s(K, "value", null, re.value, W), (U = re.onVnodeBeforeMount) && ln(U, V, b);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(K, "__vnode", {
      value: b,
      enumerable: !1
    }), Object.defineProperty(K, "__vueParentComponent", {
      value: V,
      enumerable: !1
    })), he && qi(b, null, V, "beforeMount");
    const Oe = LO(j, ae);
    Oe && ae.beforeEnter(K), n(K, S, I), ((U = re && re.onVnodeMounted) || Oe || he) && ar(() => {
      U && ln(U, V, b), Oe && ae.enter(K), he && qi(b, null, V, "mounted");
    }, j);
  }, L = (b, S, I, V, j) => {
    if (I && d(b, I), V)
      for (let W = 0; W < V.length; W++)
        d(b, V[W]);
    if (j) {
      let W = j.subTree;
      if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = Nd(W.children) || W), S === W) {
        const Z = j.vnode;
        L(
          b,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          j.parent
        );
      }
    }
  }, D = (b, S, I, V, j, W, Z, B, K = 0) => {
    for (let U = K; U < b.length; U++) {
      const re = b[U] = B ? pi(b[U]) : zr(b[U]);
      m(
        null,
        re,
        S,
        I,
        V,
        j,
        W,
        Z,
        B
      );
    }
  }, C = (b, S, I, V, j, W, Z) => {
    const B = S.el = b.el;
    let { patchFlag: K, dynamicChildren: U, dirs: re } = S;
    K |= b.patchFlag & 16;
    const ue = b.props || Xe, ae = S.props || Xe;
    let he;
    if (I && Hi(I, !1), (he = ae.onVnodeBeforeUpdate) && ln(he, I, S, b), re && qi(S, b, I, "beforeUpdate"), I && Hi(I, !0), process.env.NODE_ENV !== "production" && Mi && (K = 0, Z = !1, U = null), U ? (R(
      b.dynamicChildren,
      U,
      B,
      I,
      V,
      Yc(S, j),
      W
    ), process.env.NODE_ENV !== "production" && Xa(b, S)) : Z || Ce(
      b,
      S,
      B,
      null,
      I,
      V,
      Yc(S, j),
      W,
      !1
    ), K > 0) {
      if (K & 16)
        k(
          B,
          S,
          ue,
          ae,
          I,
          V,
          j
        );
      else if (K & 2 && ue.class !== ae.class && s(B, "class", null, ae.class, j), K & 4 && s(B, "style", ue.style, ae.style, j), K & 8) {
        const Oe = S.dynamicProps;
        for (let $e = 0; $e < Oe.length; $e++) {
          const Je = Oe[$e], pt = ue[Je], zt = ae[Je];
          (zt !== pt || Je === "value") && s(
            B,
            Je,
            pt,
            zt,
            j,
            b.children,
            I,
            V,
            ke
          );
        }
      }
      K & 1 && b.children !== S.children && f(B, S.children);
    } else
      !Z && U == null && k(
        B,
        S,
        ue,
        ae,
        I,
        V,
        j
      );
    ((he = ae.onVnodeUpdated) || re) && ar(() => {
      he && ln(he, I, S, b), re && qi(S, b, I, "updated");
    }, V);
  }, R = (b, S, I, V, j, W, Z) => {
    for (let B = 0; B < S.length; B++) {
      const K = b[B], U = S[B], re = K.el && (K.type === Ge || !is(K, U) || K.shapeFlag & 70) ? c(K.el) : I;
      m(
        K,
        U,
        re,
        null,
        V,
        j,
        W,
        Z,
        !0
      );
    }
  }, k = (b, S, I, V, j, W, Z) => {
    if (I !== V) {
      if (I !== Xe)
        for (const B in I)
          !za(B) && !(B in V) && s(
            b,
            B,
            I[B],
            null,
            Z,
            S.children,
            j,
            W,
            ke
          );
      for (const B in V) {
        if (za(B))
          continue;
        const K = V[B], U = I[B];
        K !== U && B !== "value" && s(
          b,
          B,
          U,
          K,
          Z,
          S.children,
          j,
          W,
          ke
        );
      }
      "value" in V && s(b, "value", I.value, V.value, Z);
    }
  }, Q = (b, S, I, V, j, W, Z, B, K) => {
    const U = S.el = b ? b.el : o(""), re = S.anchor = b ? b.anchor : o("");
    let { patchFlag: ue, dynamicChildren: ae, slotScopeIds: he } = S;
    process.env.NODE_ENV !== "production" && (Mi || ue & 2048) && (ue = 0, K = !1, ae = null), he && (B = B ? B.concat(he) : he), b == null ? (n(U, I, V), n(re, I, V), D(
      S.children || [],
      I,
      re,
      j,
      W,
      Z,
      B,
      K
    )) : ue > 0 && ue & 64 && ae && b.dynamicChildren ? (R(
      b.dynamicChildren,
      ae,
      I,
      j,
      W,
      Z,
      B
    ), process.env.NODE_ENV !== "production" ? Xa(b, S) : (S.key != null || j && S === j.subTree) && Xa(
      b,
      S,
      !0
    )) : Ce(
      b,
      S,
      I,
      re,
      j,
      W,
      Z,
      B,
      K
    );
  }, ve = (b, S, I, V, j, W, Z, B, K) => {
    S.slotScopeIds = B, b == null ? S.shapeFlag & 512 ? j.ctx.activate(
      S,
      I,
      V,
      Z,
      K
    ) : T(
      S,
      I,
      V,
      j,
      W,
      Z,
      K
    ) : $(b, S, K);
  }, T = (b, S, I, V, j, W, Z) => {
    const B = b.component = UO(
      b,
      V,
      j
    );
    if (process.env.NODE_ENV !== "production" && B.type.__hmrId && Ew(B), process.env.NODE_ENV !== "production" && (Bl(b), Vn(B, "mount")), Lo(b) && (B.ctx.renderer = Pt), process.env.NODE_ENV !== "production" && Vn(B, "init"), WO(B), process.env.NODE_ENV !== "production" && jn(B, "init"), B.asyncDep) {
      if (j && j.registerDep(B, z), !b.el) {
        const K = B.subTree = ie(Nt);
        v(null, K, S, I);
      }
    } else
      z(
        B,
        b,
        S,
        I,
        j,
        W,
        Z
      );
    process.env.NODE_ENV !== "production" && (Wl(), jn(B, "mount"));
  }, $ = (b, S, I) => {
    const V = S.component = b.component;
    if (Rw(b, S, I))
      if (V.asyncDep && !V.asyncResolved) {
        process.env.NODE_ENV !== "production" && Bl(S), X(V, S, I), process.env.NODE_ENV !== "production" && Wl();
        return;
      } else
        V.next = S, bw(V.update), V.effect.dirty = !0, V.update();
    else
      S.el = b.el, V.vnode = S;
  }, z = (b, S, I, V, j, W, Z) => {
    const B = () => {
      if (b.isMounted) {
        let { next: re, bu: ue, u: ae, parent: he, vnode: Oe } = b;
        {
          const kn = J0(b);
          if (kn) {
            re && (re.el = Oe.el, X(b, re, Z)), kn.asyncDep.then(() => {
              b.isUnmounted || B();
            });
            return;
          }
        }
        let $e = re, Je;
        process.env.NODE_ENV !== "production" && Bl(re || b.vnode), Hi(b, !1), re ? (re.el = Oe.el, X(b, re, Z)) : re = Oe, ue && Oa(ue), (Je = re.props && re.props.onVnodeBeforeUpdate) && ln(Je, he, re, Oe), Hi(b, !0), process.env.NODE_ENV !== "production" && Vn(b, "render");
        const pt = qc(b);
        process.env.NODE_ENV !== "production" && jn(b, "render");
        const zt = b.subTree;
        b.subTree = pt, process.env.NODE_ENV !== "production" && Vn(b, "patch"), m(
          zt,
          pt,
          c(zt.el),
          tr(zt),
          b,
          j,
          W
        ), process.env.NODE_ENV !== "production" && jn(b, "patch"), re.el = pt.el, $e === null && $w(b, pt.el), ae && ar(ae, j), (Je = re.props && re.props.onVnodeUpdated) && ar(
          () => ln(Je, he, re, Oe),
          j
        ), process.env.NODE_ENV !== "production" && O0(b), process.env.NODE_ENV !== "production" && Wl();
      } else {
        let re;
        const { el: ue, props: ae } = S, { bm: he, m: Oe, parent: $e } = b, Je = Ka(S);
        if (Hi(b, !1), he && Oa(he), !Je && (re = ae && ae.onVnodeBeforeMount) && ln(re, $e, S), Hi(b, !0), ue && In) {
          const pt = () => {
            process.env.NODE_ENV !== "production" && Vn(b, "render"), b.subTree = qc(b), process.env.NODE_ENV !== "production" && jn(b, "render"), process.env.NODE_ENV !== "production" && Vn(b, "hydrate"), In(
              ue,
              b.subTree,
              b,
              j,
              null
            ), process.env.NODE_ENV !== "production" && jn(b, "hydrate");
          };
          Je ? S.type.__asyncLoader().then(
            () => !b.isUnmounted && pt()
          ) : pt();
        } else {
          process.env.NODE_ENV !== "production" && Vn(b, "render");
          const pt = b.subTree = qc(b);
          process.env.NODE_ENV !== "production" && jn(b, "render"), process.env.NODE_ENV !== "production" && Vn(b, "patch"), m(
            null,
            pt,
            I,
            V,
            b,
            j,
            W
          ), process.env.NODE_ENV !== "production" && jn(b, "patch"), S.el = pt.el;
        }
        if (Oe && ar(Oe, j), !Je && (re = ae && ae.onVnodeMounted)) {
          const pt = S;
          ar(
            () => ln(re, $e, pt),
            j
          );
        }
        (S.shapeFlag & 256 || $e && Ka($e.vnode) && $e.vnode.shapeFlag & 256) && b.a && ar(b.a, j), b.isMounted = !0, process.env.NODE_ENV !== "production" && Tw(b), S = I = V = null;
      }
    }, K = b.effect = new vd(
      B,
      yt,
      () => pc(U),
      b.scope
    ), U = b.update = () => {
      K.dirty && K.run();
    };
    U.id = b.uid, Hi(b, !0), process.env.NODE_ENV !== "production" && (K.onTrack = b.rtc ? (re) => Oa(b.rtc, re) : void 0, K.onTrigger = b.rtg ? (re) => Oa(b.rtg, re) : void 0, U.ownerInstance = b), U();
  }, X = (b, S, I) => {
    S.component = b;
    const V = b.vnode.props;
    b.vnode = S, b.next = null, bO(b, S.props, V, I), TO(b, S.children, I), Jn(), em(b), Qn();
  }, Ce = (b, S, I, V, j, W, Z, B, K = !1) => {
    const U = b && b.children, re = b ? b.shapeFlag : 0, ue = S.children, { patchFlag: ae, shapeFlag: he } = S;
    if (ae > 0) {
      if (ae & 128) {
        dt(
          U,
          ue,
          I,
          V,
          j,
          W,
          Z,
          B,
          K
        );
        return;
      } else if (ae & 256) {
        Le(
          U,
          ue,
          I,
          V,
          j,
          W,
          Z,
          B,
          K
        );
        return;
      }
    }
    he & 8 ? (re & 16 && ke(U, j, W), ue !== U && f(I, ue)) : re & 16 ? he & 16 ? dt(
      U,
      ue,
      I,
      V,
      j,
      W,
      Z,
      B,
      K
    ) : ke(U, j, W, !0) : (re & 8 && f(I, ""), he & 16 && D(
      ue,
      I,
      V,
      j,
      W,
      Z,
      B,
      K
    ));
  }, Le = (b, S, I, V, j, W, Z, B, K) => {
    b = b || Zs, S = S || Zs;
    const U = b.length, re = S.length, ue = Math.min(U, re);
    let ae;
    for (ae = 0; ae < ue; ae++) {
      const he = S[ae] = K ? pi(S[ae]) : zr(S[ae]);
      m(
        b[ae],
        he,
        I,
        null,
        j,
        W,
        Z,
        B,
        K
      );
    }
    U > re ? ke(
      b,
      j,
      W,
      !0,
      !1,
      ue
    ) : D(
      S,
      I,
      V,
      j,
      W,
      Z,
      B,
      K,
      ue
    );
  }, dt = (b, S, I, V, j, W, Z, B, K) => {
    let U = 0;
    const re = S.length;
    let ue = b.length - 1, ae = re - 1;
    for (; U <= ue && U <= ae; ) {
      const he = b[U], Oe = S[U] = K ? pi(S[U]) : zr(S[U]);
      if (is(he, Oe))
        m(
          he,
          Oe,
          I,
          null,
          j,
          W,
          Z,
          B,
          K
        );
      else
        break;
      U++;
    }
    for (; U <= ue && U <= ae; ) {
      const he = b[ue], Oe = S[ae] = K ? pi(S[ae]) : zr(S[ae]);
      if (is(he, Oe))
        m(
          he,
          Oe,
          I,
          null,
          j,
          W,
          Z,
          B,
          K
        );
      else
        break;
      ue--, ae--;
    }
    if (U > ue) {
      if (U <= ae) {
        const he = ae + 1, Oe = he < re ? S[he].el : V;
        for (; U <= ae; )
          m(
            null,
            S[U] = K ? pi(S[U]) : zr(S[U]),
            I,
            Oe,
            j,
            W,
            Z,
            B,
            K
          ), U++;
      }
    } else if (U > ae)
      for (; U <= ue; )
        Te(b[U], j, W, !0), U++;
    else {
      const he = U, Oe = U, $e = /* @__PURE__ */ new Map();
      for (U = Oe; U <= ae; U++) {
        const ut = S[U] = K ? pi(S[U]) : zr(S[U]);
        ut.key != null && (process.env.NODE_ENV !== "production" && $e.has(ut.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), $e.set(ut.key, U));
      }
      let Je, pt = 0;
      const zt = ae - Oe + 1;
      let kn = !1, Bi = 0;
      const on = new Array(zt);
      for (U = 0; U < zt; U++)
        on[U] = 0;
      for (U = he; U <= ue; U++) {
        const ut = b[U];
        if (pt >= zt) {
          Te(ut, j, W, !0);
          continue;
        }
        let rr;
        if (ut.key != null)
          rr = $e.get(ut.key);
        else
          for (Je = Oe; Je <= ae; Je++)
            if (on[Je - Oe] === 0 && is(ut, S[Je])) {
              rr = Je;
              break;
            }
        rr === void 0 ? Te(ut, j, W, !0) : (on[rr - Oe] = U + 1, rr >= Bi ? Bi = rr : kn = !0, m(
          ut,
          S[rr],
          I,
          null,
          j,
          W,
          Z,
          B,
          K
        ), pt++);
      }
      const Sr = kn ? AO(on) : Zs;
      for (Je = Sr.length - 1, U = zt - 1; U >= 0; U--) {
        const ut = Oe + U, rr = S[ut], Ns = ut + 1 < re ? S[ut + 1].el : V;
        on[U] === 0 ? m(
          null,
          rr,
          I,
          Ns,
          j,
          W,
          Z,
          B,
          K
        ) : kn && (Je < 0 || U !== Sr[Je] ? Rt(rr, I, Ns, 2) : Je--);
      }
    }
  }, Rt = (b, S, I, V, j = null) => {
    const { el: W, type: Z, transition: B, children: K, shapeFlag: U } = b;
    if (U & 6) {
      Rt(b.component.subTree, S, I, V);
      return;
    }
    if (U & 128) {
      b.suspense.move(S, I, V);
      return;
    }
    if (U & 64) {
      Z.move(b, S, I, Pt);
      return;
    }
    if (Z === Ge) {
      n(W, S, I);
      for (let ue = 0; ue < K.length; ue++)
        Rt(K[ue], S, I, V);
      n(b.anchor, S, I);
      return;
    }
    if (Z === ql) {
      E(b, S, I);
      return;
    }
    if (V !== 2 && U & 1 && B)
      if (V === 0)
        B.beforeEnter(W), n(W, S, I), ar(() => B.enter(W), j);
      else {
        const { leave: ue, delayLeave: ae, afterLeave: he } = B, Oe = () => n(W, S, I), $e = () => {
          ue(W, () => {
            Oe(), he && he();
          });
        };
        ae ? ae(W, Oe, $e) : $e();
      }
    else
      n(W, S, I);
  }, Te = (b, S, I, V = !1, j = !1) => {
    const {
      type: W,
      props: Z,
      ref: B,
      children: K,
      dynamicChildren: U,
      shapeFlag: re,
      patchFlag: ue,
      dirs: ae
    } = b;
    if (B != null && Sh(B, null, I, b, !0), re & 256) {
      S.ctx.deactivate(b);
      return;
    }
    const he = re & 1 && ae, Oe = !Ka(b);
    let $e;
    if (Oe && ($e = Z && Z.onVnodeBeforeUnmount) && ln($e, S, b), re & 6)
      nn(b.component, I, V);
    else {
      if (re & 128) {
        b.suspense.unmount(I, V);
        return;
      }
      he && qi(b, null, S, "beforeUnmount"), re & 64 ? b.type.remove(
        b,
        S,
        I,
        j,
        Pt,
        V
      ) : U && (W !== Ge || ue > 0 && ue & 64) ? ke(
        U,
        S,
        I,
        !1,
        !0
      ) : (W === Ge && ue & 384 || !j && re & 16) && ke(K, S, I), V && Ct(b);
    }
    (Oe && ($e = Z && Z.onVnodeUnmounted) || he) && ar(() => {
      $e && ln($e, S, b), he && qi(b, null, S, "unmounted");
    }, I);
  }, Ct = (b) => {
    const { type: S, el: I, anchor: V, transition: j } = b;
    if (S === Ge) {
      process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && j && !j.persisted ? b.children.forEach((Z) => {
        Z.type === Nt ? i(Z.el) : Ct(Z);
      }) : it(I, V);
      return;
    }
    if (S === ql) {
      x(b);
      return;
    }
    const W = () => {
      i(I), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (b.shapeFlag & 1 && j && !j.persisted) {
      const { leave: Z, delayLeave: B } = j, K = () => Z(I, W);
      B ? B(b.el, W, K) : K();
    } else
      W();
  }, it = (b, S) => {
    let I;
    for (; b !== S; )
      I = h(b), i(b), b = I;
    i(S);
  }, nn = (b, S, I) => {
    process.env.NODE_ENV !== "production" && b.type.__hmrId && Sw(b);
    const { bum: V, scope: j, update: W, subTree: Z, um: B } = b;
    V && Oa(V), j.stop(), W && (W.active = !1, Te(Z, b, S, I)), B && ar(B, S), ar(() => {
      b.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), process.env.NODE_ENV !== "production" && Cw(b);
  }, ke = (b, S, I, V = !1, j = !1, W = 0) => {
    for (let Z = W; Z < b.length; Z++)
      Te(b[Z], S, I, V, j);
  }, tr = (b) => b.shapeFlag & 6 ? tr(b.component.subTree) : b.shapeFlag & 128 ? b.suspense.next() : h(b.anchor || b.el);
  let sn = !1;
  const An = (b, S, I) => {
    b == null ? S._vnode && Te(S._vnode, null, null, !0) : m(
      S._vnode || null,
      b,
      S,
      null,
      null,
      null,
      I
    ), sn || (sn = !0, em(), E0(), sn = !1), S._vnode = b;
  }, Pt = {
    p: m,
    um: Te,
    m: Rt,
    r: Ct,
    mt: T,
    mc: D,
    pc: Ce,
    pbc: R,
    n: tr,
    o: t
  };
  let an, In;
  return e && ([an, In] = e(
    Pt
  )), {
    render: An,
    hydrate: an,
    createApp: mO(An, an)
  };
}
function Yc({ type: t, props: e }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : r;
}
function Hi({ effect: t, update: e }, r) {
  t.allowRecurse = e.allowRecurse = r;
}
function LO(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Xa(t, e, r = !1) {
  const n = t.children, i = e.children;
  if (le(n) && le(i))
    for (let s = 0; s < n.length; s++) {
      const a = n[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = pi(i[s]), o.el = a.el), r || Xa(a, o)), o.type === Ao && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Nt && !o.el && (o.el = a.el);
    }
}
function AO(t) {
  const e = t.slice(), r = [0];
  let n, i, s, a, o;
  const l = t.length;
  for (n = 0; n < l; n++) {
    const u = t[n];
    if (u !== 0) {
      if (i = r[r.length - 1], t[i] < u) {
        e[n] = i, r.push(n);
        continue;
      }
      for (s = 0, a = r.length - 1; s < a; )
        o = s + a >> 1, t[r[o]] < u ? s = o + 1 : a = o;
      u < t[r[s]] && (s > 0 && (e[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, a = r[s - 1]; s-- > 0; )
    r[s] = a, a = e[a];
  return r;
}
function J0(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : J0(e);
}
const IO = (t) => t.__isTeleport, ta = (t) => t && (t.disabled || t.disabled === ""), mm = (t) => typeof SVGElement < "u" && t instanceof SVGElement, gm = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, wh = (t, e) => {
  const r = t && t.to;
  if (nt(r))
    if (e) {
      const n = e(r);
      return n || process.env.NODE_ENV !== "production" && q(
        `Failed to locate Teleport target with selector "${r}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), n;
    } else
      return process.env.NODE_ENV !== "production" && q(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !r && !ta(t) && q(`Invalid Teleport target: ${r}`), r;
}, kO = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, r, n, i, s, a, o, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: h,
      o: { insert: d, querySelector: p, createText: m, createComment: g }
    } = u, v = ta(e.props);
    let { shapeFlag: y, children: _, dynamicChildren: E } = e;
    if (process.env.NODE_ENV !== "production" && Mi && (l = !1, E = null), t == null) {
      const x = e.el = process.env.NODE_ENV !== "production" ? g("teleport start") : m(""), N = e.anchor = process.env.NODE_ENV !== "production" ? g("teleport end") : m("");
      d(x, r, n), d(N, r, n);
      const M = e.target = wh(e.props, p), L = e.targetAnchor = m("");
      M ? (d(L, M), a === "svg" || mm(M) ? a = "svg" : (a === "mathml" || gm(M)) && (a = "mathml")) : process.env.NODE_ENV !== "production" && !v && q("Invalid Teleport target on mount:", M, `(${typeof M})`);
      const D = (C, R) => {
        y & 16 && f(
          _,
          C,
          R,
          i,
          s,
          a,
          o,
          l
        );
      };
      v ? D(r, N) : M && D(M, L);
    } else {
      e.el = t.el;
      const x = e.anchor = t.anchor, N = e.target = t.target, M = e.targetAnchor = t.targetAnchor, L = ta(t.props), D = L ? r : N, C = L ? x : M;
      if (a === "svg" || mm(N) ? a = "svg" : (a === "mathml" || gm(N)) && (a = "mathml"), E ? (h(
        t.dynamicChildren,
        E,
        D,
        i,
        s,
        a,
        o
      ), Xa(t, e, !0)) : l || c(
        t,
        e,
        D,
        C,
        i,
        s,
        a,
        o,
        !1
      ), v)
        L ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : cl(
          e,
          r,
          x,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const R = e.target = wh(
          e.props,
          p
        );
        R ? cl(
          e,
          R,
          null,
          u,
          0
        ) : process.env.NODE_ENV !== "production" && q(
          "Invalid Teleport target on update:",
          N,
          `(${typeof N})`
        );
      } else
        L && cl(
          e,
          N,
          M,
          u,
          1
        );
    }
    eb(e);
  },
  remove(t, e, r, n, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), a && s(u), o & 16) {
      const d = a || !ta(h);
      for (let p = 0; p < l.length; p++) {
        const m = l[p];
        i(
          m,
          e,
          r,
          d,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: cl,
  hydrate: DO
};
function cl(t, e, r, { o: { insert: n }, m: i }, s = 2) {
  s === 0 && n(t.targetAnchor, e, r);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: f } = t, c = s === 2;
  if (c && n(a, e, r), (!c || ta(f)) && l & 16)
    for (let h = 0; h < u.length; h++)
      i(
        u[h],
        e,
        r,
        2
      );
  c && n(o, e, r);
}
function DO(t, e, r, n, i, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l }
}, u) {
  const f = e.target = wh(
    e.props,
    l
  );
  if (f) {
    const c = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (ta(e.props))
        e.anchor = u(
          a(t),
          e,
          o(t),
          r,
          n,
          i,
          s
        ), e.targetAnchor = c;
      else {
        e.anchor = a(t);
        let h = c;
        for (; h; )
          if (h = a(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
            e.targetAnchor = h, f._lpa = e.targetAnchor && a(e.targetAnchor);
            break;
          }
        u(
          c,
          e,
          f,
          r,
          n,
          i,
          s
        );
      }
    eb(e);
  }
  return e.anchor && a(e.anchor);
}
const Q0 = kO;
function eb(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let r = t.children[0].el;
    for (; r && r !== t.targetAnchor; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", e.uid), r = r.nextSibling;
    e.ut();
  }
}
const Ge = Symbol.for("v-fgt"), Ao = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), ql = Symbol.for("v-stc"), Za = [];
let Xr = null;
function A(t = !1) {
  Za.push(Xr = t ? null : []);
}
function RO() {
  Za.pop(), Xr = Za[Za.length - 1] || null;
}
let mo = 1;
function ym(t) {
  mo += t;
}
function tb(t) {
  return t.dynamicChildren = mo > 0 ? Xr || Zs : null, RO(), mo > 0 && Xr && Xr.push(t), t;
}
function G(t, e, r, n, i, s) {
  return tb(
    P(
      t,
      e,
      r,
      n,
      i,
      s,
      !0
    )
  );
}
function Ue(t, e, r, n, i) {
  return tb(
    ie(
      t,
      e,
      r,
      n,
      i,
      !0
    )
  );
}
function ca(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function is(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && js.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const $O = (...t) => nb(
  ...t
), rb = ({ key: t }) => t != null ? t : null, Hl = ({
  ref: t,
  ref_key: e,
  ref_for: r
}) => (typeof t == "number" && (t = "" + t), t != null ? nt(t) || Ye(t) || pe(t) ? { i: ht, r: t, k: e, f: !!r } : t : null);
function P(t, e = null, r = null, n = 0, i = null, s = t === Ge ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && rb(e),
    ref: e && Hl(e),
    scopeId: T0,
    slotScopeIds: null,
    children: r,
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
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ht
  };
  return o ? (kd(l, r), s & 128 && t.normalize(l)) : r && (l.shapeFlag |= nt(r) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), mo > 0 && !a && Xr && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Xr.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? $O : nb;
function nb(t, e = null, r = null, n = 0, i = null, s = !1) {
  if ((!t || t === jw) && (process.env.NODE_ENV !== "production" && !t && q(`Invalid vnode type when creating vnode: ${t}.`), t = Nt), ca(t)) {
    const o = Mn(
      t,
      e,
      !0
    );
    return r && kd(o, r), mo > 0 && !s && Xr && (o.shapeFlag & 6 ? Xr[Xr.indexOf(t)] = o : Xr.push(o)), o.patchFlag |= -2, o;
  }
  if (ob(t) && (t = t.__vccOpts), e) {
    e = FO(e);
    let { class: o, style: l } = e;
    o && !nt(o) && (e.class = Ae(o)), Be(l) && (mu(l) && !le(l) && (l = Qe({}, l)), e.style = $i(l));
  }
  const a = nt(t) ? 1 : Gw(t) ? 128 : IO(t) ? 64 : Be(t) ? 4 : pe(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && mu(t) && (t = be(t), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), P(
    t,
    e,
    r,
    n,
    i,
    a,
    s,
    !0
  );
}
function FO(t) {
  return t ? mu(t) || q0(t) ? Qe({}, t) : t : null;
}
function Mn(t, e, r = !1) {
  const { props: n, ref: i, patchFlag: s, children: a } = t, o = e ? VO(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && rb(o),
    ref: e && e.ref ? r && i ? le(i) ? i.concat(Hl(e)) : [i, Hl(e)] : Hl(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && le(a) ? a.map(ib) : a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Ge ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Mn(t.ssContent),
    ssFallback: t.ssFallback && Mn(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function ib(t) {
  const e = Mn(t);
  return le(t.children) && (e.children = t.children.map(ib)), e;
}
function Su(t = " ", e = 0) {
  return ie(Ao, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (A(), Ue(Nt, null, t)) : ie(Nt, null, t);
}
function zr(t) {
  return t == null || typeof t == "boolean" ? ie(Nt) : le(t) ? ie(
    Ge,
    null,
    t.slice()
  ) : typeof t == "object" ? pi(t) : ie(Ao, null, String(t));
}
function pi(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Mn(t);
}
function kd(t, e) {
  let r = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (le(e))
    r = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), kd(t, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = e._;
      !i && !q0(e) ? e._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    pe(e) ? (e = { default: e, _ctx: ht }, r = 32) : (e = String(e), n & 64 ? (r = 16, e = [Su(e)]) : r = 8);
  t.children = e, t.shapeFlag |= r;
}
function VO(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    for (const i in n)
      if (i === "class")
        e.class !== n.class && (e.class = Ae([e.class, n.class]));
      else if (i === "style")
        e.style = $i([e.style, n.style]);
      else if (No(i)) {
        const s = e[i], a = n[i];
        a && s !== a && !(le(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = n[i]);
  }
  return e;
}
function ln(t, e, r, n = null) {
  Lr(t, e, 7, [
    r,
    n
  ]);
}
const jO = G0();
let GO = 0;
function UO(t, e, r) {
  const n = t.type, i = (e ? e.appContext : t.appContext) || jO, s = {
    uid: GO++,
    vnode: t,
    type: n,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Yv(
      !0
    ),
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
    propsOptions: z0(n, i),
    emitsOptions: M0(n, i),
    emit: null,
    emitted: null,
    propsDefaults: Xe,
    inheritAttrs: n.inheritAttrs,
    ctx: Xe,
    data: Xe,
    props: Xe,
    attrs: Xe,
    slots: Xe,
    refs: Xe,
    setupState: Xe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = sO(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Iw.bind(null, s), t.ce && t.ce(s), s;
}
let St = null;
const Io = () => St || ht;
let wu, Oh;
{
  const t = uc(), e = (r, n) => {
    let i;
    return (i = t[r]) || (i = t[r] = []), i.push(n), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  wu = e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => St = r
  ), Oh = e(
    "__VUE_SSR_SETTERS__",
    (r) => yc = r
  );
}
const ko = (t) => {
  const e = St;
  return wu(t), t.scope.on(), () => {
    t.scope.off(), wu(e);
  };
}, vm = () => {
  St && St.scope.off(), wu(null);
}, BO = /* @__PURE__ */ Zn("slot,component");
function xh(t, { isNativeTag: e }) {
  (BO(t) || e(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function sb(t) {
  return t.vnode.shapeFlag & 4;
}
let yc = !1;
function WO(t, e = !1) {
  e && Oh(e);
  const { props: r, children: n } = t.vnode, i = sb(t);
  yO(t, r, i, e), MO(t, n);
  const s = i ? qO(t, e) : void 0;
  return e && Oh(!1), s;
}
function qO(t, e) {
  var r;
  const n = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && xh(n.name, t.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let a = 0; a < s.length; a++)
        xh(s[a], t.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let a = 0; a < s.length; a++)
        L0(s[a]);
    }
    n.compilerOptions && HO() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, V0), process.env.NODE_ENV !== "production" && aO(t);
  const { setup: i } = n;
  if (i) {
    const s = t.setupContext = i.length > 1 ? YO(t) : null, a = ko(t);
    Jn();
    const o = Wn(
      i,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? Bn(t.props) : t.props,
        s
      ]
    );
    if (Qn(), a(), md(o)) {
      if (o.then(vm, vm), e)
        return o.then((l) => {
          bm(t, l, e);
        }).catch((l) => {
          Co(l, t, 0);
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (r = n.name) != null ? r : "Anonymous";
        q(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      bm(t, o, e);
  } else
    ab(t, e);
}
function bm(t, e, r) {
  pe(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Be(e) ? (process.env.NODE_ENV !== "production" && ca(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = m0(e), process.env.NODE_ENV !== "production" && oO(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), ab(t, r);
}
let Mh;
const HO = () => !Mh;
function ab(t, e, r) {
  const n = t.type;
  if (!t.render) {
    if (!e && Mh && !n.render) {
      const i = n.template || Ad(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Vn(t, "compile");
        const { isCustomElement: s, compilerOptions: a } = t.appContext.config, { delimiters: o, compilerOptions: l } = n, u = Qe(
          Qe(
            {
              isCustomElement: s,
              delimiters: o
            },
            a
          ),
          l
        );
        n.render = Mh(i, u), process.env.NODE_ENV !== "production" && jn(t, "compile");
      }
    }
    t.render = n.render || yt;
  }
  {
    const i = ko(t);
    Jn();
    try {
      uO(t);
    } finally {
      Qn(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !n.render && t.render === yt && !e && (n.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const _m = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return vu(), Dt(t, "get", ""), t[e];
  },
  set() {
    return q("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return q("setupContext.attrs is readonly."), !1;
  }
} : {
  get(t, e) {
    return Dt(t, "get", ""), t[e];
  }
};
function zO(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, r) {
      return Dt(t, "get", "$slots"), e[r];
    }
  }));
}
function YO(t) {
  const e = (r) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && q("expose() should be called only once per setup()."), r != null)) {
      let n = typeof r;
      n === "object" && (le(r) ? n = "array" : Ye(r) && (n = "ref")), n !== "object" && q(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    t.exposed = r || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let r;
    return Object.freeze({
      get attrs() {
        return r || (r = new Proxy(t.attrs, _m));
      },
      get slots() {
        return zO(t);
      },
      get emit() {
        return (n, ...i) => t.emit(n, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, _m),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function vc(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(m0(Si(t.exposed)), {
      get(e, r) {
        if (r in e)
          return e[r];
        if (r in hs)
          return hs[r](t);
      },
      has(e, r) {
        return r in e || r in hs;
      }
    }));
}
const KO = /(?:^|[-_])(\w)/g, XO = (t) => t.replace(KO, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Dd(t, e = !0) {
  return pe(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function bc(t, e, r = !1) {
  let n = Dd(e);
  if (!n && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (n = i[1]);
  }
  if (!n && t && t.parent) {
    const i = (s) => {
      for (const a in s)
        if (s[a] === e)
          return a;
    };
    n = i(
      t.components || t.parent.type.components
    ) || i(t.appContext.components);
  }
  return n ? XO(n) : r ? "App" : "Anonymous";
}
function ob(t) {
  return pe(t) && "__vccOpts" in t;
}
const de = (t, e) => {
  const r = aw(t, e, yc);
  if (process.env.NODE_ENV !== "production") {
    const n = Io();
    n && n.appContext.config.warnRecursiveComputed && (r._warnRecursive = !0);
  }
  return r;
};
function lb(t, e, r) {
  const n = arguments.length;
  return n === 2 ? Be(e) && !le(e) ? ca(e) ? ie(t, null, [e]) : ie(t, e) : ie(t, null, e) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && ca(r) && (r = [r]), ie(t, e, r));
}
function ZO() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, i = {
    header(c) {
      return Be(c) ? c.__isVue ? ["div", t, "VueInstance"] : Ye(c) ? [
        "div",
        {},
        ["span", t, f(c)],
        "<",
        o(c.value),
        ">"
      ] : vn(c) ? [
        "div",
        {},
        ["span", t, cs(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${gs(c) ? " (readonly)" : ""}`
      ] : gs(c) ? [
        "div",
        {},
        ["span", t, cs(c) ? "ShallowReadonly" : "Readonly"],
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
    c.type.props && c.props && h.push(a("props", be(c.props))), c.setupState !== Xe && h.push(a("setup", c.setupState)), c.data !== Xe && h.push(a("data", be(c.data)));
    const d = l(c, "computed");
    d && h.push(a("computed", d));
    const p = l(c, "inject");
    return p && h.push(a("injected", p)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), h;
  }
  function a(c, h) {
    return h = Qe({}, h), Object.keys(h).length ? [
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
          ["span", n, d + ": "],
          o(h[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function o(c, h = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", r, JSON.stringify(c)] : typeof c == "boolean" ? ["span", n, c] : Be(c) ? ["object", { object: h ? be(c) : c }] : ["span", r, String(c)];
  }
  function l(c, h) {
    const d = c.type;
    if (pe(d))
      return;
    const p = {};
    for (const m in c.ctx)
      u(d, m, h) && (p[m] = c.ctx[m]);
    return p;
  }
  function u(c, h, d) {
    const p = c[d];
    if (le(p) && p.includes(h) || Be(p) && h in p || c.extends && u(c.extends, h, d) || c.mixins && c.mixins.some((m) => u(m, h, d)))
      return !0;
  }
  function f(c) {
    return cs(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Em = "3.4.25", Ni = process.env.NODE_ENV !== "production" ? q : yt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const JO = "http://www.w3.org/2000/svg", QO = "http://www.w3.org/1998/Math/MathML", mi = typeof document < "u" ? document : null, Sm = mi && /* @__PURE__ */ mi.createElement("template"), ex = {
  insert: (t, e, r) => {
    e.insertBefore(t, r || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, r, n) => {
    const i = e === "svg" ? mi.createElementNS(JO, t) : e === "mathml" ? mi.createElementNS(QO, t) : mi.createElement(t, r ? { is: r } : void 0);
    return t === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (t) => mi.createTextNode(t),
  createComment: (t) => mi.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => mi.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  insertStaticContent(t, e, r, n, i, s) {
    const a = r ? r.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), r), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Sm.innerHTML = n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t;
      const o = Sm.content;
      if (n === "svg" || n === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      e.insertBefore(o, r);
    }
    return [
      a ? a.nextSibling : e.firstChild,
      r ? r.previousSibling : e.lastChild
    ];
  }
}, si = "transition", Ma = "animation", go = Symbol("_vtc"), _c = (t, { slots: e }) => lb(Yw, tx(t), e);
_c.displayName = "Transition";
const ub = {
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
_c.props = /* @__PURE__ */ Qe(
  {},
  A0,
  ub
);
const zi = (t, e = []) => {
  le(t) ? t.forEach((r) => r(...e)) : t && t(...e);
}, wm = (t) => t ? le(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function tx(t) {
  const e = {};
  for (const k in t)
    k in ub || (e[k] = t[k]);
  if (t.css === !1)
    return e;
  const {
    name: r = "v",
    type: n,
    duration: i,
    enterFromClass: s = `${r}-enter-from`,
    enterActiveClass: a = `${r}-enter-active`,
    enterToClass: o = `${r}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = a,
    appearToClass: f = o,
    leaveFromClass: c = `${r}-leave-from`,
    leaveActiveClass: h = `${r}-leave-active`,
    leaveToClass: d = `${r}-leave-to`
  } = t, p = rx(i), m = p && p[0], g = p && p[1], {
    onBeforeEnter: v,
    onEnter: y,
    onEnterCancelled: _,
    onLeave: E,
    onLeaveCancelled: x,
    onBeforeAppear: N = v,
    onAppear: M = y,
    onAppearCancelled: L = _
  } = e, D = (k, Q, ve) => {
    Yi(k, Q ? f : o), Yi(k, Q ? u : a), ve && ve();
  }, C = (k, Q) => {
    k._isLeaving = !1, Yi(k, c), Yi(k, d), Yi(k, h), Q && Q();
  }, R = (k) => (Q, ve) => {
    const T = k ? M : y, $ = () => D(Q, k, ve);
    zi(T, [Q, $]), Om(() => {
      Yi(Q, k ? l : s), ai(Q, k ? f : o), wm(T) || xm(Q, n, m, $);
    });
  };
  return Qe(e, {
    onBeforeEnter(k) {
      zi(v, [k]), ai(k, s), ai(k, a);
    },
    onBeforeAppear(k) {
      zi(N, [k]), ai(k, l), ai(k, u);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(k, Q) {
      k._isLeaving = !0;
      const ve = () => C(k, Q);
      ai(k, c), ai(k, h), sx(), Om(() => {
        !k._isLeaving || (Yi(k, c), ai(k, d), wm(E) || xm(k, n, g, ve));
      }), zi(E, [k, ve]);
    },
    onEnterCancelled(k) {
      D(k, !1), zi(_, [k]);
    },
    onAppearCancelled(k) {
      D(k, !0), zi(L, [k]);
    },
    onLeaveCancelled(k) {
      C(k), zi(x, [k]);
    }
  });
}
function rx(t) {
  if (t == null)
    return null;
  if (Be(t))
    return [Kc(t.enter), Kc(t.leave)];
  {
    const e = Kc(t);
    return [e, e];
  }
}
function Kc(t) {
  const e = ah(t);
  return process.env.NODE_ENV !== "production" && mw(e, "<transition> explicit duration"), e;
}
function ai(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.add(r)), (t[go] || (t[go] = /* @__PURE__ */ new Set())).add(e);
}
function Yi(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n));
  const r = t[go];
  r && (r.delete(e), r.size || (t[go] = void 0));
}
function Om(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let nx = 0;
function xm(t, e, r, n) {
  const i = t._endId = ++nx, s = () => {
    i === t._endId && n();
  };
  if (r)
    return setTimeout(s, r);
  const { type: a, timeout: o, propCount: l } = ix(t, e);
  if (!a)
    return n();
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
function ix(t, e) {
  const r = window.getComputedStyle(t), n = (p) => (r[p] || "").split(", "), i = n(`${si}Delay`), s = n(`${si}Duration`), a = Mm(i, s), o = n(`${Ma}Delay`), l = n(`${Ma}Duration`), u = Mm(o, l);
  let f = null, c = 0, h = 0;
  e === si ? a > 0 && (f = si, c = a, h = s.length) : e === Ma ? u > 0 && (f = Ma, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? si : Ma : null, h = f ? f === si ? s.length : l.length : 0);
  const d = f === si && /\b(transform|all)(,|$)/.test(
    n(`${si}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: h,
    hasTransform: d
  };
}
function Mm(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((r, n) => Tm(r) + Tm(t[n])));
}
function Tm(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function sx() {
  return document.body.offsetHeight;
}
function ax(t, e, r) {
  const n = t[go];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e;
}
const Nm = Symbol("_vod"), ox = Symbol("_vsh");
process.env.NODE_ENV;
const lx = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ux = /(^|;)\s*display\s*:/;
function cx(t, e, r) {
  const n = t.style, i = nt(r);
  let s = !1;
  if (r && !i) {
    if (e)
      if (nt(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          r[o] == null && zl(n, o, "");
        }
      else
        for (const a in e)
          r[a] == null && zl(n, a, "");
    for (const a in r)
      a === "display" && (s = !0), zl(n, a, r[a]);
  } else if (i) {
    if (e !== r) {
      const a = n[lx];
      a && (r += ";" + a), n.cssText = r, s = ux.test(r);
    }
  } else
    e && t.removeAttribute("style");
  Nm in t && (t[Nm] = s ? n.display : "", t[ox] && (n.display = "none"));
}
const fx = /[^\\];\s*$/, Cm = /\s*!important$/;
function zl(t, e, r) {
  if (le(r))
    r.forEach((n) => zl(t, e, n));
  else if (r == null && (r = ""), process.env.NODE_ENV !== "production" && fx.test(r) && Ni(
    `Unexpected semicolon at the end of '${e}' style value: '${r}'`
  ), e.startsWith("--"))
    t.setProperty(e, r);
  else {
    const n = hx(t, e);
    Cm.test(r) ? t.setProperty(
      lr(n),
      r.replace(Cm, ""),
      "important"
    ) : t[n] = r;
  }
}
const Pm = ["Webkit", "Moz", "ms"], Xc = {};
function hx(t, e) {
  const r = Xc[e];
  if (r)
    return r;
  let n = vr(e);
  if (n !== "filter" && n in t)
    return Xc[e] = n;
  n = ms(n);
  for (let i = 0; i < Pm.length; i++) {
    const s = Pm[i] + n;
    if (s in t)
      return Xc[e] = s;
  }
  return e;
}
const Lm = "http://www.w3.org/1999/xlink";
function dx(t, e, r, n, i) {
  if (n && e.startsWith("xlink:"))
    r == null ? t.removeAttributeNS(Lm, e.slice(6, e.length)) : t.setAttributeNS(Lm, e, r);
  else {
    const s = DS(e);
    r == null || s && !Hv(r) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : r);
  }
}
function px(t, e, r, n, i, s, a) {
  if (e === "innerHTML" || e === "textContent") {
    n && a(n, i, s), t[e] = r == null ? "" : r;
    return;
  }
  const o = t.tagName;
  if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const u = o === "OPTION" ? t.getAttribute("value") || "" : t.value, f = r == null ? "" : r;
    (u !== f || !("_value" in t)) && (t.value = f), r == null && t.removeAttribute(e), t._value = r;
    return;
  }
  let l = !1;
  if (r === "" || r == null) {
    const u = typeof t[e];
    u === "boolean" ? r = Hv(r) : r == null && u === "string" ? (r = "", l = !0) : u === "number" && (r = 0, l = !0);
  }
  try {
    t[e] = r;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && Ni(
      `Failed setting prop "${e}" on <${o.toLowerCase()}>: value ${r} is invalid.`,
      u
    );
  }
  l && t.removeAttribute(e);
}
function mx(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function gx(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
const Am = Symbol("_vei");
function yx(t, e, r, n, i = null) {
  const s = t[Am] || (t[Am] = {}), a = s[e];
  if (n && a)
    a.value = process.env.NODE_ENV !== "production" ? km(n, e) : n;
  else {
    const [o, l] = vx(e);
    if (n) {
      const u = s[e] = Ex(
        process.env.NODE_ENV !== "production" ? km(n, e) : n,
        i
      );
      mx(t, o, u, l);
    } else
      a && (gx(t, o, a, l), s[e] = void 0);
  }
}
const Im = /(?:Once|Passive|Capture)$/;
function vx(t) {
  let e;
  if (Im.test(t)) {
    e = {};
    let n;
    for (; n = t.match(Im); )
      t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : lr(t.slice(2)), e];
}
let Zc = 0;
const bx = /* @__PURE__ */ Promise.resolve(), _x = () => Zc || (bx.then(() => Zc = 0), Zc = Date.now());
function Ex(t, e) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Lr(
      Sx(n, r.value),
      e,
      5,
      [n]
    );
  };
  return r.value = t, r.attached = _x(), r;
}
function km(t, e) {
  return pe(t) || le(t) ? t : (Ni(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), yt);
}
function Sx(t, e) {
  if (le(e)) {
    const r = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      r.call(t), t._stopped = !0;
    }, e.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return e;
}
const Dm = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, wx = (t, e, r, n, i, s, a, o, l) => {
  const u = i === "svg";
  e === "class" ? ax(t, n, u) : e === "style" ? cx(t, r, n) : No(e) ? du(e) || yx(t, e, r, n, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ox(t, e, n, u)) ? px(
    t,
    e,
    n,
    s,
    a,
    o,
    l
  ) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), dx(t, e, n, u));
};
function Ox(t, e, r, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Dm(e) && pe(r));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Dm(e) && nt(r) ? !1 : e in t;
}
const xx = ["ctrl", "shift", "alt", "meta"], Mx = {
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
  exact: (t, e) => xx.some((r) => t[`${r}Key`] && !e.includes(r))
}, dn = (t, e) => {
  const r = t._withMods || (t._withMods = {}), n = e.join(".");
  return r[n] || (r[n] = (i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = Mx[e[a]];
      if (o && o(i, e))
        return;
    }
    return t(i, ...s);
  });
}, Tx = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, pn = (t, e) => {
  const r = t._withKeys || (t._withKeys = {}), n = e.join(".");
  return r[n] || (r[n] = (i) => {
    if (!("key" in i))
      return;
    const s = lr(i.key);
    if (e.some((a) => a === s || Tx[a] === s))
      return t(i);
  });
}, Nx = /* @__PURE__ */ Qe({ patchProp: wx }, ex);
let Rm;
function cb() {
  return Rm || (Rm = CO(Nx));
}
const $m = (...t) => {
  cb().render(...t);
}, Cx = (...t) => {
  const e = cb().createApp(...t);
  process.env.NODE_ENV !== "production" && (Lx(e), Ax(e));
  const { mount: r } = e;
  return e.mount = (n) => {
    const i = Ix(n);
    if (!i)
      return;
    const s = e._component;
    !pe(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const a = r(i, !1, Px(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function Px(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Lx(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => LS(e) || AS(e) || IS(e),
    writable: !1
  });
}
function Ax(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        Ni(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const r = t.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return Ni(n), r;
      },
      set() {
        Ni(n);
      }
    });
  }
}
function Ix(t) {
  if (nt(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && Ni(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && Ni(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
/**
* vue v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function kx() {
  ZO();
}
process.env.NODE_ENV !== "production" && kx();
/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */
function bi(t) {
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bi(t);
}
function Th(t, e) {
  return Th = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Th(t, e);
}
function Dx() {
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
function Yl(t, e, r) {
  return Dx() ? Yl = Reflect.construct : Yl = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && Th(u, a.prototype), u;
  }, Yl.apply(null, arguments);
}
function Wr(t) {
  return Rx(t) || $x(t) || Fx(t) || Vx();
}
function Rx(t) {
  if (Array.isArray(t))
    return Nh(t);
}
function $x(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Fx(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Nh(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Nh(t, e);
  }
}
function Nh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Vx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var jx = Object.hasOwnProperty, Fm = Object.setPrototypeOf, Gx = Object.isFrozen, Ux = Object.getPrototypeOf, Bx = Object.getOwnPropertyDescriptor, er = Object.freeze, Dr = Object.seal, Wx = Object.create, fb = typeof Reflect < "u" && Reflect, Ou = fb.apply, Ch = fb.construct;
Ou || (Ou = function(e, r, n) {
  return e.apply(r, n);
});
er || (er = function(e) {
  return e;
});
Dr || (Dr = function(e) {
  return e;
});
Ch || (Ch = function(e, r) {
  return Yl(e, Wr(r));
});
var qx = Rr(Array.prototype.forEach), Vm = Rr(Array.prototype.pop), Ta = Rr(Array.prototype.push), Kl = Rr(String.prototype.toLowerCase), Jc = Rr(String.prototype.toString), jm = Rr(String.prototype.match), Vr = Rr(String.prototype.replace), Hx = Rr(String.prototype.indexOf), zx = Rr(String.prototype.trim), Ft = Rr(RegExp.prototype.test), Qc = Yx(TypeError);
function Rr(t) {
  return function(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ou(t, e, n);
  };
}
function Yx(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return Ch(t, r);
  };
}
function Pe(t, e, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Kl, Fm && Fm(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var a = r(s);
      a !== s && (Gx(e) || (e[i] = a), s = a);
    }
    t[s] = !0;
  }
  return t;
}
function Ki(t) {
  var e = Wx(null), r;
  for (r in t)
    Ou(jx, t, [r]) === !0 && (e[r] = t[r]);
  return e;
}
function fl(t, e) {
  for (; t !== null; ) {
    var r = Bx(t, e);
    if (r) {
      if (r.get)
        return Rr(r.get);
      if (typeof r.value == "function")
        return Rr(r.value);
    }
    t = Ux(t);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
var Gm = er(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ef = er(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tf = er(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Kx = er(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rf = er(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Xx = er(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Um = er(["#text"]), Bm = er(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), nf = er(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Wm = er(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hl = er(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Zx = Dr(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Jx = Dr(/<%[\w\W]*|[\w\W]*%>/gm), Qx = Dr(/\${[\w\W]*}/gm), eM = Dr(/^data-[\-\w.\u00B7-\uFFFF]/), tM = Dr(/^aria-[\-\w]+$/), rM = Dr(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), nM = Dr(/^(?:\w+script|data):/i), iM = Dr(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), sM = Dr(/^html$/i), aM = Dr(/^[a-z][.\w]*(-[.\w]+)+$/i), oM = function() {
  return typeof window > "u" ? null : window;
}, lM = function(e, r) {
  if (bi(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var n = null, i = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(i) && (n = r.currentScript.getAttribute(i));
  var s = "dompurify" + (n ? "#" + n : "");
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
function hb() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oM(), e = function(w) {
    return hb(w);
  };
  if (e.version = "2.5.0", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var r = t.document, n = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, p = o.prototype, m = fl(p, "cloneNode"), g = fl(p, "nextSibling"), v = fl(p, "childNodes"), y = fl(p, "parentNode");
  if (typeof s == "function") {
    var _ = n.createElement("template");
    _.content && _.content.ownerDocument && (n = _.content.ownerDocument);
  }
  var E = lM(d, r), x = E ? E.createHTML("") : "", N = n, M = N.implementation, L = N.createNodeIterator, D = N.createDocumentFragment, C = N.getElementsByTagName, R = r.importNode, k = {};
  try {
    k = Ki(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var Q = {};
  e.isSupported = typeof y == "function" && M && M.createHTMLDocument !== void 0 && k !== 9;
  var ve = Zx, T = Jx, $ = Qx, z = eM, X = tM, Ce = nM, Le = iM, dt = aM, Rt = rM, Te = null, Ct = Pe({}, [].concat(Wr(Gm), Wr(ef), Wr(tf), Wr(rf), Wr(Um))), it = null, nn = Pe({}, [].concat(Wr(Bm), Wr(nf), Wr(Wm), Wr(hl))), ke = Object.seal(Object.create(null, {
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
  })), tr = null, sn = null, An = !0, Pt = !0, an = !1, In = !0, b = !1, S = !0, I = !1, V = !1, j = !1, W = !1, Z = !1, B = !1, K = !0, U = !1, re = "user-content-", ue = !0, ae = !1, he = {}, Oe = null, $e = Pe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Je = null, pt = Pe({}, ["audio", "video", "img", "source", "image", "track"]), zt = null, kn = Pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bi = "http://www.w3.org/1998/Math/MathML", on = "http://www.w3.org/2000/svg", Sr = "http://www.w3.org/1999/xhtml", ut = Sr, rr = !1, Ns = null, UE = Pe({}, [Bi, on, Sr], Jc), Wi, BE = ["application/xhtml+xml", "text/html"], WE = "text/html", xt, Cs = null, qE = n.createElement("form"), Ap = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Vc = function(w) {
    Cs && Cs === w || ((!w || bi(w) !== "object") && (w = {}), w = Ki(w), Wi = BE.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Wi = WE : Wi = w.PARSER_MEDIA_TYPE, xt = Wi === "application/xhtml+xml" ? Jc : Kl, Te = "ALLOWED_TAGS" in w ? Pe({}, w.ALLOWED_TAGS, xt) : Ct, it = "ALLOWED_ATTR" in w ? Pe({}, w.ALLOWED_ATTR, xt) : nn, Ns = "ALLOWED_NAMESPACES" in w ? Pe({}, w.ALLOWED_NAMESPACES, Jc) : UE, zt = "ADD_URI_SAFE_ATTR" in w ? Pe(
      Ki(kn),
      w.ADD_URI_SAFE_ATTR,
      xt
    ) : kn, Je = "ADD_DATA_URI_TAGS" in w ? Pe(
      Ki(pt),
      w.ADD_DATA_URI_TAGS,
      xt
    ) : pt, Oe = "FORBID_CONTENTS" in w ? Pe({}, w.FORBID_CONTENTS, xt) : $e, tr = "FORBID_TAGS" in w ? Pe({}, w.FORBID_TAGS, xt) : {}, sn = "FORBID_ATTR" in w ? Pe({}, w.FORBID_ATTR, xt) : {}, he = "USE_PROFILES" in w ? w.USE_PROFILES : !1, An = w.ALLOW_ARIA_ATTR !== !1, Pt = w.ALLOW_DATA_ATTR !== !1, an = w.ALLOW_UNKNOWN_PROTOCOLS || !1, In = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, b = w.SAFE_FOR_TEMPLATES || !1, S = w.SAFE_FOR_XML !== !1, I = w.WHOLE_DOCUMENT || !1, W = w.RETURN_DOM || !1, Z = w.RETURN_DOM_FRAGMENT || !1, B = w.RETURN_TRUSTED_TYPE || !1, j = w.FORCE_BODY || !1, K = w.SANITIZE_DOM !== !1, U = w.SANITIZE_NAMED_PROPS || !1, ue = w.KEEP_CONTENT !== !1, ae = w.IN_PLACE || !1, Rt = w.ALLOWED_URI_REGEXP || Rt, ut = w.NAMESPACE || Sr, ke = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && Ap(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ke.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && Ap(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ke.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), b && (Pt = !1), Z && (W = !0), he && (Te = Pe({}, Wr(Um)), it = [], he.html === !0 && (Pe(Te, Gm), Pe(it, Bm)), he.svg === !0 && (Pe(Te, ef), Pe(it, nf), Pe(it, hl)), he.svgFilters === !0 && (Pe(Te, tf), Pe(it, nf), Pe(it, hl)), he.mathMl === !0 && (Pe(Te, rf), Pe(it, Wm), Pe(it, hl))), w.ADD_TAGS && (Te === Ct && (Te = Ki(Te)), Pe(Te, w.ADD_TAGS, xt)), w.ADD_ATTR && (it === nn && (it = Ki(it)), Pe(it, w.ADD_ATTR, xt)), w.ADD_URI_SAFE_ATTR && Pe(zt, w.ADD_URI_SAFE_ATTR, xt), w.FORBID_CONTENTS && (Oe === $e && (Oe = Ki(Oe)), Pe(Oe, w.FORBID_CONTENTS, xt)), ue && (Te["#text"] = !0), I && Pe(Te, ["html", "head", "body"]), Te.table && (Pe(Te, ["tbody"]), delete tr.tbody), er && er(w), Cs = w);
  }, Ip = Pe({}, ["mi", "mo", "mn", "ms", "mtext"]), kp = Pe({}, ["foreignobject", "desc", "title", "annotation-xml"]), HE = Pe({}, ["title", "style", "font", "a", "script"]), el = Pe({}, ef);
  Pe(el, tf), Pe(el, Kx);
  var jc = Pe({}, rf);
  Pe(jc, Xx);
  var zE = function(w) {
    var Y = y(w);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: ut,
      tagName: "template"
    });
    var ne = Kl(w.tagName), Fe = Kl(Y.tagName);
    return Ns[w.namespaceURI] ? w.namespaceURI === on ? Y.namespaceURI === Sr ? ne === "svg" : Y.namespaceURI === Bi ? ne === "svg" && (Fe === "annotation-xml" || Ip[Fe]) : Boolean(el[ne]) : w.namespaceURI === Bi ? Y.namespaceURI === Sr ? ne === "math" : Y.namespaceURI === on ? ne === "math" && kp[Fe] : Boolean(jc[ne]) : w.namespaceURI === Sr ? Y.namespaceURI === on && !kp[Fe] || Y.namespaceURI === Bi && !Ip[Fe] ? !1 : !jc[ne] && (HE[ne] || !el[ne]) : !!(Wi === "application/xhtml+xml" && Ns[w.namespaceURI]) : !1;
  }, Fr = function(w) {
    Ta(e.removed, {
      element: w
    });
    try {
      w.parentNode.removeChild(w);
    } catch {
      try {
        w.outerHTML = x;
      } catch {
        w.remove();
      }
    }
  }, Gc = function(w, Y) {
    try {
      Ta(e.removed, {
        attribute: Y.getAttributeNode(w),
        from: Y
      });
    } catch {
      Ta(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(w), w === "is" && !it[w])
      if (W || Z)
        try {
          Fr(Y);
        } catch {
        }
      else
        try {
          Y.setAttribute(w, "");
        } catch {
        }
  }, Dp = function(w) {
    var Y, ne;
    if (j)
      w = "<remove></remove>" + w;
    else {
      var Fe = jm(w, /^[\r\n\t ]+/);
      ne = Fe && Fe[0];
    }
    Wi === "application/xhtml+xml" && ut === Sr && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var nr = E ? E.createHTML(w) : w;
    if (ut === Sr)
      try {
        Y = new h().parseFromString(nr, Wi);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = M.createDocument(ut, "template", null);
      try {
        Y.documentElement.innerHTML = rr ? x : nr;
      } catch {
      }
    }
    var $t = Y.body || Y.documentElement;
    return w && ne && $t.insertBefore(n.createTextNode(ne), $t.childNodes[0] || null), ut === Sr ? C.call(Y, I ? "html" : "body")[0] : I ? Y.documentElement : $t;
  }, Rp = function(w) {
    return L.call(
      w.ownerDocument || w,
      w,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, YE = function(w) {
    return w instanceof c && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof f) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, wa = function(w) {
    return bi(a) === "object" ? w instanceof a : w && bi(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, Dn = function(w, Y, ne) {
    !Q[w] || qx(Q[w], function(Fe) {
      Fe.call(e, Y, ne, Cs);
    });
  }, $p = function(w) {
    var Y;
    if (Dn("beforeSanitizeElements", w, null), YE(w) || Ft(/[\u0080-\uFFFF]/, w.nodeName))
      return Fr(w), !0;
    var ne = xt(w.nodeName);
    if (Dn("uponSanitizeElement", w, {
      tagName: ne,
      allowedTags: Te
    }), w.hasChildNodes() && !wa(w.firstElementChild) && (!wa(w.content) || !wa(w.content.firstElementChild)) && Ft(/<[/\w]/g, w.innerHTML) && Ft(/<[/\w]/g, w.textContent) || ne === "select" && Ft(/<template/i, w.innerHTML) || w.nodeType === 7 || S && w.nodeType === 8 && Ft(/<[/\w]/g, w.data))
      return Fr(w), !0;
    if (!Te[ne] || tr[ne]) {
      if (!tr[ne] && Vp(ne) && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, ne) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(ne)))
        return !1;
      if (ue && !Oe[ne]) {
        var Fe = y(w) || w.parentNode, nr = v(w) || w.childNodes;
        if (nr && Fe)
          for (var $t = nr.length, Lt = $t - 1; Lt >= 0; --Lt)
            Fe.insertBefore(m(nr[Lt], !0), g(w));
      }
      return Fr(w), !0;
    }
    return w instanceof o && !zE(w) || (ne === "noscript" || ne === "noembed" || ne === "noframes") && Ft(/<\/no(script|embed|frames)/i, w.innerHTML) ? (Fr(w), !0) : (b && w.nodeType === 3 && (Y = w.textContent, Y = Vr(Y, ve, " "), Y = Vr(Y, T, " "), Y = Vr(Y, $, " "), w.textContent !== Y && (Ta(e.removed, {
      element: w.cloneNode()
    }), w.textContent = Y)), Dn("afterSanitizeElements", w, null), !1);
  }, Fp = function(w, Y, ne) {
    if (K && (Y === "id" || Y === "name") && (ne in n || ne in qE))
      return !1;
    if (!(Pt && !sn[Y] && Ft(z, Y))) {
      if (!(An && Ft(X, Y))) {
        if (!it[Y] || sn[Y]) {
          if (!(Vp(w) && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, w) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(w)) && (ke.attributeNameCheck instanceof RegExp && Ft(ke.attributeNameCheck, Y) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(Y)) || Y === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, ne) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(ne))))
            return !1;
        } else if (!zt[Y]) {
          if (!Ft(Rt, Vr(ne, Le, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && w !== "script" && Hx(ne, "data:") === 0 && Je[w])) {
              if (!(an && !Ft(Ce, Vr(ne, Le, "")))) {
                if (ne)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Vp = function(w) {
    return w !== "annotation-xml" && jm(w, dt);
  }, jp = function(w) {
    var Y, ne, Fe, nr;
    Dn("beforeSanitizeAttributes", w, null);
    var $t = w.attributes;
    if (!!$t) {
      var Lt = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: it
      };
      for (nr = $t.length; nr--; ) {
        Y = $t[nr];
        var tl = Y, Mt = tl.name, Uc = tl.namespaceURI;
        if (ne = Mt === "value" ? Y.value : zx(Y.value), Fe = xt(Mt), Lt.attrName = Fe, Lt.attrValue = ne, Lt.keepAttr = !0, Lt.forceKeepAttr = void 0, Dn("uponSanitizeAttribute", w, Lt), ne = Lt.attrValue, !Lt.forceKeepAttr && (Gc(Mt, w), !!Lt.keepAttr)) {
          if (!In && Ft(/\/>/i, ne)) {
            Gc(Mt, w);
            continue;
          }
          b && (ne = Vr(ne, ve, " "), ne = Vr(ne, T, " "), ne = Vr(ne, $, " "));
          var Gp = xt(w.nodeName);
          if (!!Fp(Gp, Fe, ne)) {
            if (U && (Fe === "id" || Fe === "name") && (Gc(Mt, w), ne = re + ne), E && bi(d) === "object" && typeof d.getAttributeType == "function" && !Uc)
              switch (d.getAttributeType(Gp, Fe)) {
                case "TrustedHTML": {
                  ne = E.createHTML(ne);
                  break;
                }
                case "TrustedScriptURL": {
                  ne = E.createScriptURL(ne);
                  break;
                }
              }
            try {
              Uc ? w.setAttributeNS(Uc, Mt, ne) : w.setAttribute(Mt, ne), Vm(e.removed);
            } catch {
            }
          }
        }
      }
      Dn("afterSanitizeAttributes", w, null);
    }
  }, KE = function ce(w) {
    var Y, ne = Rp(w);
    for (Dn("beforeSanitizeShadowDOM", w, null); Y = ne.nextNode(); )
      Dn("uponSanitizeShadowNode", Y, null), !$p(Y) && (Y.content instanceof i && ce(Y.content), jp(Y));
    Dn("afterSanitizeShadowDOM", w, null);
  };
  return e.sanitize = function(ce) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y, ne, Fe, nr, $t;
    if (rr = !ce, rr && (ce = "<!-->"), typeof ce != "string" && !wa(ce))
      if (typeof ce.toString == "function") {
        if (ce = ce.toString(), typeof ce != "string")
          throw Qc("dirty is not a string, aborting");
      } else
        throw Qc("toString is not a function");
    if (!e.isSupported) {
      if (bi(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (wa(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (V || Vc(w), e.removed = [], typeof ce == "string" && (ae = !1), ae) {
      if (ce.nodeName) {
        var Lt = xt(ce.nodeName);
        if (!Te[Lt] || tr[Lt])
          throw Qc("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      Y = Dp("<!---->"), ne = Y.ownerDocument.importNode(ce, !0), ne.nodeType === 1 && ne.nodeName === "BODY" || ne.nodeName === "HTML" ? Y = ne : Y.appendChild(ne);
    else {
      if (!W && !b && !I && ce.indexOf("<") === -1)
        return E && B ? E.createHTML(ce) : ce;
      if (Y = Dp(ce), !Y)
        return W ? null : B ? x : "";
    }
    Y && j && Fr(Y.firstChild);
    for (var tl = Rp(ae ? ce : Y); Fe = tl.nextNode(); )
      Fe.nodeType === 3 && Fe === nr || $p(Fe) || (Fe.content instanceof i && KE(Fe.content), jp(Fe), nr = Fe);
    if (nr = null, ae)
      return ce;
    if (W) {
      if (Z)
        for ($t = D.call(Y.ownerDocument); Y.firstChild; )
          $t.appendChild(Y.firstChild);
      else
        $t = Y;
      return (it.shadowroot || it.shadowrootmod) && ($t = R.call(r, $t, !0)), $t;
    }
    var Mt = I ? Y.outerHTML : Y.innerHTML;
    return I && Te["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Ft(sM, Y.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + Mt), b && (Mt = Vr(Mt, ve, " "), Mt = Vr(Mt, T, " "), Mt = Vr(Mt, $, " ")), E && B ? E.createHTML(Mt) : Mt;
  }, e.setConfig = function(ce) {
    Vc(ce), V = !0;
  }, e.clearConfig = function() {
    Cs = null, V = !1;
  }, e.isValidAttribute = function(ce, w, Y) {
    Cs || Vc({});
    var ne = xt(ce), Fe = xt(w);
    return Fp(ne, Fe, Y);
  }, e.addHook = function(ce, w) {
    typeof w == "function" && (Q[ce] = Q[ce] || [], Ta(Q[ce], w));
  }, e.removeHook = function(ce) {
    if (Q[ce])
      return Vm(Q[ce]);
  }, e.removeHooks = function(ce) {
    Q[ce] && (Q[ce] = []);
  }, e.removeAllHooks = function() {
    Q = {};
  }, e;
}
var uM = hb();
function cM(t, e) {
  var i;
  const r = (i = t.hooks) != null ? i : {};
  let n;
  for (n in r) {
    const s = r[n];
    s !== void 0 && e.addHook(n, s);
  }
}
function db() {
  return uM();
}
function fM(t = {}, e = db) {
  const r = e();
  cM(t, r);
  const n = function(i, s) {
    var c, h;
    const a = s.value;
    if (s.oldValue === a)
      return;
    const o = `${a}`, l = s.arg, u = t.namedConfigurations, f = (c = t.default) != null ? c : {};
    if (u && l !== void 0) {
      i.innerHTML = r.sanitize(
        o,
        (h = u[l]) != null ? h : f
      );
      return;
    }
    i.innerHTML = r.sanitize(
      o,
      f
    );
  };
  return {
    mounted: n,
    updated: n
  };
}
const hM = {
  install(t, e = {}, r = db) {
    t.directive(
      "dompurify-html",
      fM(e, r)
    );
  }
};
var Rd = !1;
function dl(t, e, r) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, r), r) : (t[e] = r, r);
}
function sf(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function dM() {
  return pb().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function pb() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const pM = typeof Proxy == "function", mM = "devtools-plugin:setup", gM = "plugin:settings:set";
let Ps, Ph;
function yM() {
  var t;
  return Ps !== void 0 || (typeof window < "u" && window.performance ? (Ps = !0, Ph = window.performance) : typeof globalThis < "u" && ((t = globalThis.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (Ps = !0, Ph = globalThis.perf_hooks.performance) : Ps = !1), Ps;
}
function vM() {
  return yM() ? Ph.now() : Date.now();
}
class bM {
  constructor(e, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = r;
    const n = {};
    if (e.settings)
      for (const a in e.settings) {
        const o = e.settings[a];
        n[a] = o.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let s = Object.assign({}, n);
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
        return vM();
      }
    }, r && r.on(gM, (a, o) => {
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
    for (const r of this.onQueue)
      this.target.on[r.method](...r.args);
    for (const r of this.targetQueue)
      r.resolve(await this.target[r.method](...r.args));
  }
}
function mb(t, e) {
  const r = t, n = pb(), i = dM(), s = pM && r.enableEarlyProxy;
  if (i && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(mM, t, e);
  else {
    const a = s ? new bM(r, i) : null;
    (n.__VUE_DEVTOOLS_PLUGINS__ = n.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: r,
      setupFn: e,
      proxy: a
    }), a && e(a.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Fa;
const yo = (t) => Fa = t, gb = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function vs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var bn;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(bn || (bn = {}));
const Ec = typeof window < "u", Ja = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Ec, qm = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function _M(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function $d(t, e, r) {
  const n = new XMLHttpRequest();
  n.open("GET", t), n.responseType = "blob", n.onload = function() {
    bb(n.response, e, r);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function yb(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Xl(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const r = document.createEvent("MouseEvents");
    r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(r);
  }
}
const Zl = typeof navigator == "object" ? navigator : { userAgent: "" }, vb = /* @__PURE__ */ (() => /Macintosh/.test(Zl.userAgent) && /AppleWebKit/.test(Zl.userAgent) && !/Safari/.test(Zl.userAgent))(), bb = Ec ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !vb ? EM : "msSaveOrOpenBlob" in Zl ? SM : wM : () => {
};
function EM(t, e = "download", r) {
  const n = document.createElement("a");
  n.download = e, n.rel = "noopener", typeof t == "string" ? (n.href = t, n.origin !== location.origin ? yb(n.href) ? $d(t, e, r) : (n.target = "_blank", Xl(n)) : Xl(n)) : (n.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(n.href);
  }, 4e4), setTimeout(function() {
    Xl(n);
  }, 0));
}
function SM(t, e = "download", r) {
  if (typeof t == "string")
    if (yb(t))
      $d(t, e, r);
    else {
      const n = document.createElement("a");
      n.href = t, n.target = "_blank", setTimeout(function() {
        Xl(n);
      });
    }
  else
    navigator.msSaveOrOpenBlob(_M(t, r), e);
}
function wM(t, e, r, n) {
  if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof t == "string")
    return $d(t, e, r);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(qm.HTMLElement)) || "safari" in qm, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || vb) && typeof FileReader < "u") {
    const o = new FileReader();
    o.onloadend = function() {
      let l = o.result;
      if (typeof l != "string")
        throw n = null, new Error("Wrong reader.result type");
      l = a ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = l : location.assign(l), n = null;
    }, o.readAsDataURL(t);
  } else {
    const o = URL.createObjectURL(t);
    n ? n.location.assign(o) : location.href = o, n = null, setTimeout(function() {
      URL.revokeObjectURL(o);
    }, 4e4);
  }
}
function Tt(t, e) {
  const r = "\u{1F34D} " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(r, e) : e === "error" ? console.error(r) : e === "warn" ? console.warn(r) : console.log(r);
}
function Fd(t) {
  return "_a" in t && "install" in t;
}
function _b() {
  if (!("clipboard" in navigator))
    return Tt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Eb(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Tt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function OM(t) {
  if (!_b())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Tt("Global state copied to clipboard.");
    } catch (e) {
      if (Eb(e))
        return;
      Tt("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function xM(t) {
  if (!_b())
    try {
      Sb(t, JSON.parse(await navigator.clipboard.readText())), Tt("Global state pasted from clipboard.");
    } catch (e) {
      if (Eb(e))
        return;
      Tt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function MM(t) {
  try {
    bb(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Tt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Rn;
function TM() {
  Rn || (Rn = document.createElement("input"), Rn.type = "file", Rn.accept = ".json");
  function t() {
    return new Promise((e, r) => {
      Rn.onchange = async () => {
        const n = Rn.files;
        if (!n)
          return e(null);
        const i = n.item(0);
        return e(i ? { text: await i.text(), file: i } : null);
      }, Rn.oncancel = () => e(null), Rn.onerror = r, Rn.click();
    });
  }
  return t;
}
async function NM(t) {
  try {
    const r = await TM()();
    if (!r)
      return;
    const { text: n, file: i } = r;
    Sb(t, JSON.parse(n)), Tt(`Global state imported from "${i.name}".`);
  } catch (e) {
    Tt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function Sb(t, e) {
  for (const r in e) {
    const n = t.state.value[r];
    n ? Object.assign(n, e[r]) : t.state.value[r] = e[r];
  }
}
function qr(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const wb = "\u{1F34D} Pinia (root)", Lh = "_root";
function CM(t) {
  return Fd(t) ? {
    id: Lh,
    label: wb
  } : {
    id: t.$id,
    label: t.$id
  };
}
function PM(t) {
  if (Fd(t)) {
    const r = Array.from(t._s.keys()), n = t._s;
    return {
      state: r.map((s) => ({
        editable: !0,
        key: s,
        value: t.state.value[s]
      })),
      getters: r.filter((s) => n.get(s)._getters).map((s) => {
        const a = n.get(s);
        return {
          editable: !1,
          key: s,
          value: a._getters.reduce((o, l) => (o[l] = a[l], o), {})
        };
      })
    };
  }
  const e = {
    state: Object.keys(t.$state).map((r) => ({
      editable: !0,
      key: r,
      value: t.$state[r]
    }))
  };
  return t._getters && t._getters.length && (e.getters = t._getters.map((r) => ({
    editable: !1,
    key: r,
    value: t[r]
  }))), t._customProperties.size && (e.customProperties = Array.from(t._customProperties).map((r) => ({
    editable: !0,
    key: r,
    value: t[r]
  }))), e;
}
function LM(t) {
  return t ? Array.isArray(t) ? t.reduce((e, r) => (e.keys.push(r.key), e.operations.push(r.type), e.oldValue[r.key] = r.oldValue, e.newValue[r.key] = r.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: qr(t.type),
    key: qr(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function AM(t) {
  switch (t) {
    case bn.direct:
      return "mutation";
    case bn.patchFunction:
      return "$patch";
    case bn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Bs = !0;
const Jl = [], rs = "pinia:mutations", Gt = "pinia", { assign: IM } = Object, xu = (t) => "\u{1F34D} " + t;
function kM(t, e) {
  mb({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Jl,
    app: t
  }, (r) => {
    typeof r.now != "function" && Tt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.addTimelineLayer({
      id: rs,
      label: "Pinia \u{1F34D}",
      color: 15064968
    }), r.addInspector({
      id: Gt,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            OM(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await xM(e), r.sendInspectorTree(Gt), r.sendInspectorState(Gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            MM(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await NM(e), r.sendInspectorTree(Gt), r.sendInspectorState(Gt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (n) => {
            const i = e._s.get(n);
            i ? typeof i.$reset != "function" ? Tt(`Cannot reset "${n}" store because it doesn't have a "$reset" method implemented.`, "warn") : (i.$reset(), Tt(`Store "${n}" reset.`)) : Tt(`Cannot reset "${n}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), r.on.inspectComponent((n, i) => {
      const s = n.componentInstance && n.componentInstance.proxy;
      if (s && s._pStores) {
        const a = n.componentInstance.proxy._pStores;
        Object.values(a).forEach((o) => {
          n.instanceData.state.push({
            type: xu(o.$id),
            key: "state",
            editable: !0,
            value: o._isOptionsAPI ? {
              _custom: {
                value: be(o.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => o.$reset()
                  }
                ]
              }
            } : Object.keys(o.$state).reduce((l, u) => (l[u] = o.$state[u], l), {})
          }), o._getters && o._getters.length && n.instanceData.state.push({
            type: xu(o.$id),
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
    }), r.on.getInspectorTree((n) => {
      if (n.app === t && n.inspectorId === Gt) {
        let i = [e];
        i = i.concat(Array.from(e._s.values())), n.rootNodes = (n.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(n.filter.toLowerCase()) : wb.toLowerCase().includes(n.filter.toLowerCase())) : i).map(CM);
      }
    }), r.on.getInspectorState((n) => {
      if (n.app === t && n.inspectorId === Gt) {
        const i = n.nodeId === Lh ? e : e._s.get(n.nodeId);
        if (!i)
          return;
        i && (n.state = PM(i));
      }
    }), r.on.editInspectorState((n, i) => {
      if (n.app === t && n.inspectorId === Gt) {
        const s = n.nodeId === Lh ? e : e._s.get(n.nodeId);
        if (!s)
          return Tt(`store "${n.nodeId}" not found`, "error");
        const { path: a } = n;
        Fd(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), Bs = !1, n.set(s, a, n.state.value), Bs = !0;
      }
    }), r.on.editComponentState((n) => {
      if (n.type.startsWith("\u{1F34D}")) {
        const i = n.type.replace(/^🍍\s*/, ""), s = e._s.get(i);
        if (!s)
          return Tt(`store "${i}" not found`, "error");
        const { path: a } = n;
        if (a[0] !== "state")
          return Tt(`Invalid path for store "${i}":
${a}
Only state can be modified.`);
        a[0] = "$state", Bs = !1, n.set(s, a, n.state.value), Bs = !0;
      }
    });
  });
}
function DM(t, e) {
  Jl.includes(xu(e.$id)) || Jl.push(xu(e.$id)), mb({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Jl,
    app: t,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
    }
  }, (r) => {
    const n = typeof r.now == "function" ? r.now.bind(r) : Date.now;
    e.$onAction(({ after: a, onError: o, name: l, args: u }) => {
      const f = Ob++;
      r.addTimelineEvent({
        layerId: rs,
        event: {
          time: n(),
          title: "\u{1F6EB} " + l,
          subtitle: "start",
          data: {
            store: qr(e.$id),
            action: qr(l),
            args: u
          },
          groupId: f
        }
      }), a((c) => {
        wi = void 0, r.addTimelineEvent({
          layerId: rs,
          event: {
            time: n(),
            title: "\u{1F6EC} " + l,
            subtitle: "end",
            data: {
              store: qr(e.$id),
              action: qr(l),
              args: u,
              result: c
            },
            groupId: f
          }
        });
      }), o((c) => {
        wi = void 0, r.addTimelineEvent({
          layerId: rs,
          event: {
            time: n(),
            logType: "error",
            title: "\u{1F4A5} " + l,
            subtitle: "end",
            data: {
              store: qr(e.$id),
              action: qr(l),
              args: u,
              error: c
            },
            groupId: f
          }
        });
      });
    }, !0), e._customProperties.forEach((a) => {
      et(() => O(e[a]), (o, l) => {
        r.notifyComponentUpdate(), r.sendInspectorState(Gt), Bs && r.addTimelineEvent({
          layerId: rs,
          event: {
            time: n(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: o,
              oldValue: l
            },
            groupId: wi
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: a, type: o }, l) => {
      if (r.notifyComponentUpdate(), r.sendInspectorState(Gt), !Bs)
        return;
      const u = {
        time: n(),
        title: AM(o),
        data: IM({ store: qr(e.$id) }, LM(a)),
        groupId: wi
      };
      o === bn.patchFunction ? u.subtitle = "\u2935\uFE0F" : o === bn.patchObject ? u.subtitle = "\u{1F9E9}" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), r.addTimelineEvent({
        layerId: rs,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = Si((a) => {
      i(a), r.addTimelineEvent({
        layerId: rs,
        event: {
          time: n(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: qr(e.$id),
            info: qr("HMR update")
          }
        }
      }), r.notifyComponentUpdate(), r.sendInspectorTree(Gt), r.sendInspectorState(Gt);
    });
    const { $dispose: s } = e;
    e.$dispose = () => {
      s(), r.notifyComponentUpdate(), r.sendInspectorTree(Gt), r.sendInspectorState(Gt), r.getSettings().logStoreChanges && Tt(`Disposed "${e.$id}" store \u{1F5D1}`);
    }, r.notifyComponentUpdate(), r.sendInspectorTree(Gt), r.sendInspectorState(Gt), r.getSettings().logStoreChanges && Tt(`"${e.$id}" store installed \u{1F195}`);
  });
}
let Ob = 0, wi;
function Hm(t, e, r) {
  const n = e.reduce((i, s) => (i[s] = be(t)[s], i), {});
  for (const i in n)
    t[i] = function() {
      const s = Ob, a = r ? new Proxy(t, {
        get(...l) {
          return wi = s, Reflect.get(...l);
        },
        set(...l) {
          return wi = s, Reflect.set(...l);
        }
      }) : t;
      wi = s;
      const o = n[i].apply(a, arguments);
      return wi = void 0, o;
    };
}
function RM({ app: t, store: e, options: r }) {
  if (e.$id.startsWith("__hot:"))
    return;
  e._isOptionsAPI = !!r.state, Hm(e, Object.keys(r.actions), e._isOptionsAPI);
  const n = e._hotUpdate;
  be(e)._hotUpdate = function(i) {
    n.apply(this, arguments), Hm(e, Object.keys(i._hmrPayload.actions), !!e._isOptionsAPI);
  }, DM(
    t,
    e
  );
}
function $M() {
  const t = Kv(!0), e = t.run(() => we({}));
  let r = [], n = [];
  const i = Si({
    install(s) {
      yo(i), i._a = s, s.provide(gb, i), s.config.globalProperties.$pinia = i, Ja && kM(s, i), n.forEach((a) => r.push(a)), n = [];
    },
    use(s) {
      return !this._a && !Rd ? n.push(s) : r.push(s), this;
    },
    _p: r,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return Ja && typeof Proxy < "u" && i.use(RM), i;
}
function xb(t, e) {
  for (const r in e) {
    const n = e[r];
    if (!(r in t))
      continue;
    const i = t[r];
    vs(i) && vs(n) && !Ye(n) && !vn(n) ? t[r] = xb(i, n) : t[r] = n;
  }
  return t;
}
const Mb = () => {
};
function zm(t, e, r, n = Mb) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), n());
  };
  return !r && Xv() && $S(i), i;
}
function Ls(t, ...e) {
  t.slice().forEach((r) => {
    r(...e);
  });
}
const FM = (t) => t();
function Ah(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((r, n) => t.set(n, r)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const r in e) {
    if (!e.hasOwnProperty(r))
      continue;
    const n = e[r], i = t[r];
    vs(i) && vs(n) && t.hasOwnProperty(r) && !Ye(n) && !vn(n) ? t[r] = Ah(i, n) : t[r] = n;
  }
  return t;
}
const VM = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function jM(t) {
  return !vs(t) || !t.hasOwnProperty(VM);
}
const { assign: xr } = Object;
function Ym(t) {
  return !!(Ye(t) && t.effect);
}
function Km(t, e, r, n) {
  const { state: i, actions: s, getters: a } = e, o = r.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !n) && (r.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && n ? ch(we(i ? i() : {}).value) : ch(r.state.value[t]);
    return xr(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = Si(de(() => {
      yo(r);
      const d = r._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = Ih(t, u, e, r, n, !0), l;
}
function Ih(t, e, r = {}, n, i, s) {
  let a;
  const o = xr({ actions: {} }, r);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !Rd && (l.onTrigger = (C) => {
    u ? d = C : u == !1 && !M._hotUpdating && (Array.isArray(d) ? d.push(C) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, c = [], h = [], d;
  const p = n.state.value[t];
  !s && !p && (process.env.NODE_ENV === "production" || !i) && (n.state.value[t] = {});
  const m = we({});
  let g;
  function v(C) {
    let R;
    u = f = !1, process.env.NODE_ENV !== "production" && (d = []), typeof C == "function" ? (C(n.state.value[t]), R = {
      type: bn.patchFunction,
      storeId: t,
      events: d
    }) : (Ah(n.state.value[t], C), R = {
      type: bn.patchObject,
      payload: C,
      storeId: t,
      events: d
    });
    const k = g = Symbol();
    gu().then(() => {
      g === k && (u = !0);
    }), f = !0, Ls(c, R, n.state.value[t]);
  }
  const y = s ? function() {
    const { state: R } = r, k = R ? R() : {};
    this.$patch((Q) => {
      xr(Q, k);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : Mb;
  function _() {
    a.stop(), c = [], h = [], n._s.delete(t);
  }
  function E(C, R) {
    return function() {
      yo(n);
      const k = Array.from(arguments), Q = [], ve = [];
      function T(X) {
        Q.push(X);
      }
      function $(X) {
        ve.push(X);
      }
      Ls(h, {
        args: k,
        name: C,
        store: M,
        after: T,
        onError: $
      });
      let z;
      try {
        z = R.apply(this && this.$id === t ? this : M, k);
      } catch (X) {
        throw Ls(ve, X), X;
      }
      return z instanceof Promise ? z.then((X) => (Ls(Q, X), X)).catch((X) => (Ls(ve, X), Promise.reject(X))) : (Ls(Q, z), z);
    };
  }
  const x = /* @__PURE__ */ Si({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), N = {
    _p: n,
    $id: t,
    $onAction: zm.bind(null, h),
    $patch: v,
    $reset: y,
    $subscribe(C, R = {}) {
      const k = zm(c, C, R.detached, () => Q()), Q = a.run(() => et(() => n.state.value[t], (ve) => {
        (R.flush === "sync" ? f : u) && C({
          storeId: t,
          type: bn.direct,
          events: d
        }, ve);
      }, xr({}, l, R)));
      return k;
    },
    $dispose: _
  }, M = hc(process.env.NODE_ENV !== "production" || Ja ? xr(
    {
      _hmrPayload: x,
      _customProperties: Si(/* @__PURE__ */ new Set())
    },
    N
  ) : N);
  n._s.set(t, M);
  const D = (n._a && n._a.runWithContext || FM)(() => n._e.run(() => (a = Kv()).run(e)));
  for (const C in D) {
    const R = D[C];
    if (Ye(R) && !Ym(R) || vn(R))
      process.env.NODE_ENV !== "production" && i ? dl(m.value, C, Ul(D, C)) : s || (p && jM(R) && (Ye(R) ? R.value = p[C] : Ah(R, p[C])), n.state.value[t][C] = R), process.env.NODE_ENV !== "production" && x.state.push(C);
    else if (typeof R == "function") {
      const k = process.env.NODE_ENV !== "production" && i ? R : E(C, R);
      D[C] = k, process.env.NODE_ENV !== "production" && (x.actions[C] = R), o.actions[C] = R;
    } else
      process.env.NODE_ENV !== "production" && Ym(R) && (x.getters[C] = s ? r.getters[C] : R, Ec && (D._getters || (D._getters = Si([]))).push(C));
  }
  if (xr(M, D), xr(be(M), D), Object.defineProperty(M, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? m.value : n.state.value[t],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      v((R) => {
        xr(R, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (M._hotUpdate = Si((C) => {
    M._hotUpdating = !0, C._hmrPayload.state.forEach((R) => {
      if (R in M.$state) {
        const k = C.$state[R], Q = M.$state[R];
        typeof k == "object" && vs(k) && vs(Q) ? xb(k, Q) : C.$state[R] = Q;
      }
      dl(M, R, Ul(C.$state, R));
    }), Object.keys(M.$state).forEach((R) => {
      R in C.$state || sf(M, R);
    }), u = !1, f = !1, n.state.value[t] = Ul(C._hmrPayload, "hotState"), f = !0, gu().then(() => {
      u = !0;
    });
    for (const R in C._hmrPayload.actions) {
      const k = C[R];
      dl(M, R, E(R, k));
    }
    for (const R in C._hmrPayload.getters) {
      const k = C._hmrPayload.getters[R], Q = s ? de(() => (yo(n), k.call(M, M))) : k;
      dl(M, R, Q);
    }
    Object.keys(M._hmrPayload.getters).forEach((R) => {
      R in C._hmrPayload.getters || sf(M, R);
    }), Object.keys(M._hmrPayload.actions).forEach((R) => {
      R in C._hmrPayload.actions || sf(M, R);
    }), M._hmrPayload = C._hmrPayload, M._getters = C._getters, M._hotUpdating = !1;
  })), Ja) {
    const C = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(M, R, xr({ value: M[R] }, C));
    });
  }
  return n._p.forEach((C) => {
    if (Ja) {
      const R = a.run(() => C({
        store: M,
        app: n._a,
        pinia: n,
        options: o
      }));
      Object.keys(R || {}).forEach((k) => M._customProperties.add(k)), xr(M, R);
    } else
      xr(M, a.run(() => C({
        store: M,
        app: n._a,
        pinia: n,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && M.$state && typeof M.$state == "object" && typeof M.$state.constructor == "function" && !M.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${M.$id}".`), p && s && r.hydrate && r.hydrate(M.$state, p), u = !0, f = !0, M;
}
function ws(t, e, r) {
  let n, i;
  const s = typeof e == "function";
  if (typeof t == "string")
    n = t, i = s ? r : e;
  else if (i = t, n = t.id, process.env.NODE_ENV !== "production" && typeof n != "string")
    throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');
  function a(o, l) {
    const u = gO();
    if (o = (process.env.NODE_ENV === "test" && Fa && Fa._testing ? null : o) || (u ? ea(gb, null) : null), o && yo(o), process.env.NODE_ENV !== "production" && !Fa)
      throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = Fa, o._s.has(n) || (s ? Ih(n, e, i, o) : Km(n, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(n);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + n, h = s ? Ih(c, e, i, o, !0) : Km(c, xr({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && Ec) {
      const c = Io();
      if (c && c.proxy && !l) {
        const h = c.proxy, d = "_pStores" in h ? h._pStores : h._pStores = {};
        d[n] = f;
      }
    }
    return f;
  }
  return a.$id = n, a;
}
function He(t) {
  if (Rd)
    return ch(t);
  {
    t = be(t);
    const e = {};
    for (const r in t) {
      const n = t[r];
      (Ye(n) || vn(n)) && (e[r] = Ul(t, r));
    }
    return e;
  }
}
function GM(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var bs = 1, _s = 2, ra = 3, UM = 4, kh = 5, Xm = 6378137, BM = 6356752314e-3, Zm = 0.0066943799901413165, Qa = 484813681109536e-20, H = Math.PI / 2, WM = 0.16666666666666666, qM = 0.04722222222222222, HM = 0.022156084656084655, te = 1e-10, It = 0.017453292519943295, mn = 57.29577951308232, We = Math.PI / 4, vo = Math.PI * 2, gt = 3.14159265359, cr = {};
cr.greenwich = 0;
cr.lisbon = -9.131906111111;
cr.paris = 2.337229166667;
cr.bogota = -74.080916666667;
cr.madrid = -3.687938888889;
cr.rome = 12.452333333333;
cr.bern = 7.439583333333;
cr.jakarta = 106.807719444444;
cr.ferro = -17.666666666667;
cr.brussels = 4.367975;
cr.stockholm = 18.058277777778;
cr.athens = 23.7163375;
cr.oslo = 10.722916666667;
const zM = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var Jm = /[\s_\-\/\(\)]/g;
function Ii(t, e) {
  if (t[e])
    return t[e];
  for (var r = Object.keys(t), n = e.toLowerCase().replace(Jm, ""), i = -1, s, a; ++i < r.length; )
    if (s = r[i], a = s.toLowerCase().replace(Jm, ""), a === n)
      return t[s];
}
function Dh(t) {
  var e = {}, r = t.split("+").map(function(o) {
    return o.trim();
  }).filter(function(o) {
    return o;
  }).reduce(function(o, l) {
    var u = l.split("=");
    return u.push(!0), o[u[0].toLowerCase()] = u[1], o;
  }, {}), n, i, s, a = {
    proj: "projName",
    datum: "datumCode",
    rf: function(o) {
      e.rf = parseFloat(o);
    },
    lat_0: function(o) {
      e.lat0 = o * It;
    },
    lat_1: function(o) {
      e.lat1 = o * It;
    },
    lat_2: function(o) {
      e.lat2 = o * It;
    },
    lat_ts: function(o) {
      e.lat_ts = o * It;
    },
    lon_0: function(o) {
      e.long0 = o * It;
    },
    lon_1: function(o) {
      e.long1 = o * It;
    },
    lon_2: function(o) {
      e.long2 = o * It;
    },
    alpha: function(o) {
      e.alpha = parseFloat(o) * It;
    },
    gamma: function(o) {
      e.rectified_grid_angle = parseFloat(o);
    },
    lonc: function(o) {
      e.longc = o * It;
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
    r: function(o) {
      e.a = e.b = parseFloat(o);
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
      var l = Ii(zM, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * It;
    },
    pm: function(o) {
      var l = Ii(cr, o);
      e.from_greenwich = (l || parseFloat(o)) * It;
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
  for (n in r)
    i = r[n], n in a ? (s = a[n], typeof s == "function" ? s(i) : e[s] = i) : e[n] = i;
  return typeof e.datumCode == "string" && e.datumCode !== "WGS84" && (e.datumCode = e.datumCode.toLowerCase()), e;
}
var bo = 1, Tb = 2, Nb = 3, Mu = 4, Cb = 5, Vd = -1, YM = /\s/, KM = /[A-Za-z]/, XM = /[A-Za-z84_]/, Sc = /[,\]]/, Pb = /[\d\.E\-\+]/;
function ti(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = bo;
}
ti.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== Mu)
    for (; YM.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case bo:
      return this.neutral(t);
    case Tb:
      return this.keyword(t);
    case Mu:
      return this.quoted(t);
    case Cb:
      return this.afterquote(t);
    case Nb:
      return this.number(t);
    case Vd:
      return;
  }
};
ti.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = Mu;
    return;
  }
  if (Sc.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
ti.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = bo;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = bo, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Vd);
    return;
  }
};
ti.prototype.number = function(t) {
  if (Pb.test(t)) {
    this.word += t;
    return;
  }
  if (Sc.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
ti.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = Cb;
    return;
  }
  this.word += t;
};
ti.prototype.keyword = function(t) {
  if (XM.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = bo;
    return;
  }
  if (Sc.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
ti.prototype.neutral = function(t) {
  if (KM.test(t)) {
    this.word = t, this.state = Tb;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = Mu;
    return;
  }
  if (Pb.test(t)) {
    this.word = t, this.state = Nb;
    return;
  }
  if (Sc.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
ti.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === Vd)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function ZM(t) {
  var e = new ti(t);
  return e.output();
}
function Qm(t, e, r) {
  Array.isArray(e) && (r.unshift(e), e = null);
  var n = e ? {} : t, i = r.reduce(function(s, a) {
    return Ws(a, s), s;
  }, n);
  e && (t[e] = i);
}
function Ws(t, e) {
  if (!Array.isArray(t)) {
    e[t] = !0;
    return;
  }
  var r = t.shift();
  if (r === "PARAMETER" && (r = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      e[r] = {}, Ws(t[0], e[r]);
      return;
    }
    e[r] = t[0];
    return;
  }
  if (!t.length) {
    e[r] = !0;
    return;
  }
  if (r === "TOWGS84") {
    e[r] = t;
    return;
  }
  if (r === "AXIS") {
    r in e || (e[r] = []), e[r].push(t);
    return;
  }
  Array.isArray(r) || (e[r] = {});
  var n;
  switch (r) {
    case "UNIT":
    case "PRIMEM":
    case "VERT_DATUM":
      e[r] = {
        name: t[0].toLowerCase(),
        convert: t[1]
      }, t.length === 3 && Ws(t[2], e[r]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      e[r] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && Ws(t[3], e[r]);
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
      t[0] = ["name", t[0]], Qm(e, r, t);
      return;
    default:
      for (n = -1; ++n < t.length; )
        if (!Array.isArray(t[n]))
          return Ws(t, e[r]);
      return Qm(e, r, t);
  }
}
var JM = 0.017453292519943295;
function QM(t, e) {
  var r = e[0], n = e[1];
  !(r in t) && n in t && (t[r] = t[n], e.length === 3 && (t[r] = e[2](t[r])));
}
function un(t) {
  return t * JM;
}
function eT(t) {
  if (t.type === "GEOGCS" ? t.projName = "longlat" : t.type === "LOCAL_CS" ? (t.projName = "identity", t.local = !0) : typeof t.PROJECTION == "object" ? t.projName = Object.keys(t.PROJECTION)[0] : t.projName = t.PROJECTION, t.AXIS) {
    for (var e = "", r = 0, n = t.AXIS.length; r < n; ++r) {
      var i = [t.AXIS[r][0].toLowerCase(), t.AXIS[r][1].toLowerCase()];
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
    return QM(t, u);
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
    ["lat0", "latitude_of_center", un],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", un],
    ["x0", "false_easting", a],
    ["y0", "false_northing", a],
    ["long0", "central_meridian", un],
    ["lat0", "latitude_of_origin", un],
    ["lat0", "standard_parallel_1", un],
    ["lat1", "standard_parallel_1", un],
    ["lat2", "standard_parallel_2", un],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", un],
    ["srsCode", "name"]
  ];
  l.forEach(o), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") ? (t.lat0 = un(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1) : !t.lat_ts && t.lat0 && t.projName === "Polar_Stereographic" && (t.lat_ts = t.lat0, t.lat0 = un(t.lat0 > 0 ? 90 : -90));
}
function Lb(t) {
  var e = ZM(t), r = e.shift(), n = e.shift();
  e.unshift(["name", n]), e.unshift(["type", r]);
  var i = {};
  return Ws(e, i), eT(i), i;
}
function Xt(t) {
  var e = this;
  if (arguments.length === 2) {
    var r = arguments[1];
    typeof r == "string" ? r.charAt(0) === "+" ? Xt[t] = Dh(arguments[1]) : Xt[t] = Lb(arguments[1]) : Xt[t] = r;
  } else if (arguments.length === 1) {
    if (Array.isArray(t))
      return t.map(function(n) {
        Array.isArray(n) ? Xt.apply(e, n) : Xt(n);
      });
    if (typeof t == "string") {
      if (t in Xt)
        return Xt[t];
    } else
      "EPSG" in t ? Xt["EPSG:" + t.EPSG] = t : "ESRI" in t ? Xt["ESRI:" + t.ESRI] = t : "IAU2000" in t ? Xt["IAU2000:" + t.IAU2000] = t : console.log(t);
    return;
  }
}
GM(Xt);
function tT(t) {
  return typeof t == "string";
}
function rT(t) {
  return t in Xt;
}
var nT = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function iT(t) {
  return nT.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var sT = ["3857", "900913", "3785", "102113"];
function aT(t) {
  var e = Ii(t, "authority");
  if (!!e) {
    var r = Ii(e, "epsg");
    return r && sT.indexOf(r) > -1;
  }
}
function oT(t) {
  var e = Ii(t, "extension");
  if (!!e)
    return Ii(e, "proj4");
}
function lT(t) {
  return t[0] === "+";
}
function uT(t) {
  if (tT(t)) {
    if (rT(t))
      return Xt[t];
    if (iT(t)) {
      var e = Lb(t);
      if (aT(e))
        return Xt["EPSG:3857"];
      var r = oT(e);
      return r ? Dh(r) : e;
    }
    if (lT(t))
      return Dh(t);
  } else
    return t;
}
function eg(t, e) {
  t = t || {};
  var r, n;
  if (!e)
    return t;
  for (n in e)
    r = e[n], r !== void 0 && (t[n] = r);
  return t;
}
function Tn(t, e, r) {
  var n = t * e;
  return r / Math.sqrt(1 - n * n);
}
function Do(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= gt ? t : t - Do(t) * vo;
}
function Qr(t, e, r) {
  var n = t * r, i = 0.5 * t;
  return n = Math.pow((1 - n) / (1 + n), i), Math.tan(0.5 * (H - e)) / n;
}
function _o(t, e) {
  for (var r = 0.5 * t, n, i, s = H - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (n = t * Math.sin(s), i = H - 2 * Math.atan(e * Math.pow((1 - n) / (1 + n), r)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function cT() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = Tn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function fT(t) {
  var e = t.x, r = t.y;
  if (r * mn > 90 && r * mn < -90 && e * mn > 180 && e * mn < -180)
    return null;
  var n, i;
  if (Math.abs(Math.abs(r) - H) <= te)
    return null;
  if (this.sphere)
    n = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(We + 0.5 * r));
  else {
    var s = Math.sin(r), a = Qr(this.e, r, s);
    n = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 - this.a * this.k0 * Math.log(a);
  }
  return t.x = n, t.y = i, t;
}
function hT(t) {
  var e = t.x - this.x0, r = t.y - this.y0, n, i;
  if (this.sphere)
    i = H - 2 * Math.atan(Math.exp(-r / (this.a * this.k0)));
  else {
    var s = Math.exp(-r / (this.a * this.k0));
    if (i = _o(this.e, s), i === -9999)
      return null;
  }
  return n = se(this.long0 + e / (this.a * this.k0)), t.x = n, t.y = i, t;
}
var dT = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const pT = {
  init: cT,
  forward: fT,
  inverse: hT,
  names: dT
};
function mT() {
}
function tg(t) {
  return t;
}
var gT = ["longlat", "identity"];
const yT = {
  init: mT,
  forward: tg,
  inverse: tg,
  names: gT
};
var vT = [pT, yT], Ql = {}, Tu = [];
function Ab(t, e) {
  var r = Tu.length;
  return t.names ? (Tu[r] = t, t.names.forEach(function(n) {
    Ql[n.toLowerCase()] = r;
  }), this) : (console.log(e), !0);
}
function bT(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof Ql[e] < "u" && Tu[Ql[e]])
    return Tu[Ql[e]];
}
function _T() {
  vT.forEach(Ab);
}
const ET = {
  start: _T,
  add: Ab,
  get: bT
};
var _e = {};
_e.MERIT = {
  a: 6378137,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
_e.SGS85 = {
  a: 6378136,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
_e.GRS80 = {
  a: 6378137,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
_e.IAU76 = {
  a: 6378140,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
_e.airy = {
  a: 6377563396e-3,
  b: 635625691e-2,
  ellipseName: "Airy 1830"
};
_e.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
_e.NWL9D = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
_e.mod_airy = {
  a: 6377340189e-3,
  b: 6356034446e-3,
  ellipseName: "Modified Airy"
};
_e.andrae = {
  a: 637710443e-2,
  rf: 300,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
_e.aust_SA = {
  a: 6378160,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
_e.GRS67 = {
  a: 6378160,
  rf: 298.247167427,
  ellipseName: "GRS 67(IUGG 1967)"
};
_e.bessel = {
  a: 6377397155e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
_e.bess_nam = {
  a: 6377483865e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
_e.clrk66 = {
  a: 63782064e-1,
  b: 63565838e-1,
  ellipseName: "Clarke 1866"
};
_e.clrk80 = {
  a: 6378249145e-3,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
_e.clrk80ign = {
  a: 63782492e-1,
  b: 6356515,
  rf: 293.4660213,
  ellipseName: "Clarke 1880 (IGN)"
};
_e.clrk58 = {
  a: 6378293645208759e-9,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
_e.CPM = {
  a: 63757387e-1,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
_e.delmbr = {
  a: 6376428,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
_e.engelis = {
  a: 637813605e-2,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
_e.evrst30 = {
  a: 6377276345e-3,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
_e.evrst48 = {
  a: 6377304063e-3,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
_e.evrst56 = {
  a: 6377301243e-3,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
_e.evrst69 = {
  a: 6377295664e-3,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
_e.evrstSS = {
  a: 6377298556e-3,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
_e.fschr60 = {
  a: 6378166,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
_e.fschr60m = {
  a: 6378155,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
_e.fschr68 = {
  a: 6378150,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
_e.helmert = {
  a: 6378200,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
_e.hough = {
  a: 6378270,
  rf: 297,
  ellipseName: "Hough"
};
_e.intl = {
  a: 6378388,
  rf: 297,
  ellipseName: "International 1909 (Hayford)"
};
_e.kaula = {
  a: 6378163,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
_e.lerch = {
  a: 6378139,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
_e.mprts = {
  a: 6397300,
  rf: 191,
  ellipseName: "Maupertius 1738"
};
_e.new_intl = {
  a: 63781575e-1,
  b: 63567722e-1,
  ellipseName: "New International 1967"
};
_e.plessis = {
  a: 6376523,
  rf: 6355863,
  ellipseName: "Plessis 1817 (France)"
};
_e.krass = {
  a: 6378245,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
_e.SEasia = {
  a: 6378155,
  b: 63567733205e-4,
  ellipseName: "Southeast Asia"
};
_e.walbeck = {
  a: 6376896,
  b: 63558348467e-4,
  ellipseName: "Walbeck"
};
_e.WGS60 = {
  a: 6378165,
  rf: 298.3,
  ellipseName: "WGS 60"
};
_e.WGS66 = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "WGS 66"
};
_e.WGS7 = {
  a: 6378135,
  rf: 298.26,
  ellipseName: "WGS 72"
};
var ST = _e.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
_e.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function wT(t, e, r, n) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  n ? (t *= 1 - a * (WM + a * (qM + a * HM)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function OT(t, e, r, n, i) {
  if (!t) {
    var s = Ii(_e, n);
    s || (s = ST), t = s.a, e = s.b, r = s.rf;
  }
  return r && !e && (e = (1 - 1 / r) * t), (r === 0 || Math.abs(t - e) < te) && (i = !0, e = t), {
    a: t,
    b: e,
    rf: r,
    sphere: i
  };
}
var Ot = {};
Ot.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
Ot.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
Ot.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
Ot.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
Ot.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
Ot.potsdam = {
  towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
Ot.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
Ot.hermannskogel = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
Ot.militargeographische_institut = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Militar-Geographische Institut"
};
Ot.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};
Ot.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
Ot.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
Ot.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
Ot.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
Ot.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: "bessel",
  datumName: "S-JTSK (Ferro)"
};
Ot.beduaram = {
  towgs84: "-106,-87,188",
  ellipse: "clrk80",
  datumName: "Beduaram"
};
Ot.gunung_segara = {
  towgs84: "-403,684,41",
  ellipse: "bessel",
  datumName: "Gunung Segara Jakarta"
};
Ot.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};
function xT(t, e, r, n, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = kh : o.datum_type = UM, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = bs), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = _s, o.datum_params[3] *= Qa, o.datum_params[4] *= Qa, o.datum_params[5] *= Qa, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = ra, o.grids = a), o.a = r, o.b = n, o.es = i, o.ep2 = s, o;
}
var Ib = {};
function MT(t, e) {
  var r = new DataView(e), n = CT(r), i = PT(r, n), s = LT(r, i, n), a = { header: i, subgrids: s };
  return Ib[t] = a, a;
}
function TT(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(NT);
}
function NT(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: Ib[t] || null,
    isNull: !1
  };
}
function qs(t) {
  return t / 3600 * Math.PI / 180;
}
function CT(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function PT(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: Rh(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function Rh(t, e, r) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, r)));
}
function LT(t, e, r) {
  for (var n = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = IT(t, n, r), o = kT(t, n, a, r), l = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), u = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    i.push({
      ll: [qs(a.lowerLongitude), qs(a.lowerLatitude)],
      del: [qs(a.longitudeInterval), qs(a.latitudeInterval)],
      lim: [l, u],
      count: a.gridNodeCount,
      cvs: AT(o)
    }), n += 176 + a.gridNodeCount * 16;
  }
  return i;
}
function AT(t) {
  return t.map(function(e) {
    return [qs(e.longitudeShift), qs(e.latitudeShift)];
  });
}
function IT(t, e, r) {
  return {
    name: Rh(t, e + 8, e + 16).trim(),
    parent: Rh(t, e + 24, e + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(e + 72, r),
    upperLatitude: t.getFloat64(e + 88, r),
    lowerLongitude: t.getFloat64(e + 104, r),
    upperLongitude: t.getFloat64(e + 120, r),
    latitudeInterval: t.getFloat64(e + 136, r),
    longitudeInterval: t.getFloat64(e + 152, r),
    gridNodeCount: t.getInt32(e + 168, r)
  };
}
function kT(t, e, r, n) {
  for (var i = e + 176, s = 16, a = [], o = 0; o < r.gridNodeCount; o++) {
    var l = {
      latitudeShift: t.getFloat32(i + o * s, n),
      longitudeShift: t.getFloat32(i + o * s + 4, n),
      latitudeAccuracy: t.getFloat32(i + o * s + 8, n),
      longitudeAccuracy: t.getFloat32(i + o * s + 12, n)
    };
    a.push(l);
  }
  return a;
}
function _n(t, e) {
  if (!(this instanceof _n))
    return new _n(t);
  e = e || function(u) {
    if (u)
      throw u;
  };
  var r = uT(t);
  if (typeof r != "object") {
    e(t);
    return;
  }
  var n = _n.projections.get(r.projName);
  if (!n) {
    e(t);
    return;
  }
  if (r.datumCode && r.datumCode !== "none") {
    var i = Ii(Ot, r.datumCode);
    i && (r.datum_params = r.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), r.ellps = i.ellipse, r.datumName = i.datumName ? i.datumName : r.datumCode);
  }
  r.k0 = r.k0 || 1, r.axis = r.axis || "enu", r.ellps = r.ellps || "wgs84", r.lat1 = r.lat1 || r.lat0;
  var s = OT(r.a, r.b, r.rf, r.ellps, r.sphere), a = wT(s.a, s.b, s.rf, r.R_A), o = TT(r.nadgrids), l = r.datum || xT(
    r.datumCode,
    r.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  eg(this, r), eg(this, n), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
_n.projections = ET;
_n.projections.start();
function DT(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === bs ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === _s ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function kb(t, e, r) {
  var n = t.x, i = t.y, s = t.z ? t.z : 0, a, o, l, u;
  if (i < -H && i > -1.001 * H)
    i = -H;
  else if (i > H && i < 1.001 * H)
    i = H;
  else {
    if (i < -H)
      return { x: -1 / 0, y: -1 / 0, z: t.z };
    if (i > H)
      return { x: 1 / 0, y: 1 / 0, z: t.z };
  }
  return n > Math.PI && (n -= 2 * Math.PI), o = Math.sin(i), u = Math.cos(i), l = o * o, a = r / Math.sqrt(1 - e * l), {
    x: (a + s) * u * Math.cos(n),
    y: (a + s) * u * Math.sin(n),
    z: (a * (1 - e) + s) * o
  };
}
function Db(t, e, r, n) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, p, m, g, v, y, _, E = t.x, x = t.y, N = t.z ? t.z : 0, M, L, D;
  if (o = Math.sqrt(E * E + x * x), l = Math.sqrt(E * E + x * x + N * N), o / r < i) {
    if (M = 0, l / r < i)
      return L = H, D = -n, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    M = Math.atan2(x, E);
  u = N / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), p = f * (1 - e) * c, m = u * c, _ = 0;
  do
    _++, d = r / Math.sqrt(1 - e * m * m), D = o * p + N * m - d * (1 - e * m * m), h = e * d / (d + D), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), g = f * (1 - h) * c, v = u * c, y = v * p - g * m, p = g, m = v;
  while (y * y > s && _ < a);
  return L = Math.atan(v / Math.abs(g)), {
    x: M,
    y: L,
    z: D
  };
}
function RT(t, e, r) {
  if (e === bs)
    return {
      x: t.x + r[0],
      y: t.y + r[1],
      z: t.z + r[2]
    };
  if (e === _s) {
    var n = r[0], i = r[1], s = r[2], a = r[3], o = r[4], l = r[5], u = r[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + n,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function $T(t, e, r) {
  if (e === bs)
    return {
      x: t.x - r[0],
      y: t.y - r[1],
      z: t.z - r[2]
    };
  if (e === _s) {
    var n = r[0], i = r[1], s = r[2], a = r[3], o = r[4], l = r[5], u = r[6], f = (t.x - n) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function pl(t) {
  return t === bs || t === _s;
}
function FT(t, e, r) {
  if (DT(t, e) || t.datum_type === kh || e.datum_type === kh)
    return r;
  var n = t.a, i = t.es;
  if (t.datum_type === ra) {
    var s = rg(t, !1, r);
    if (s !== 0)
      return;
    n = Xm, i = Zm;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === ra && (a = Xm, o = BM, l = Zm), i === l && n === a && !pl(t.datum_type) && !pl(e.datum_type))
    return r;
  if (r = kb(r, i, n), pl(t.datum_type) && (r = RT(r, t.datum_type, t.datum_params)), pl(e.datum_type) && (r = $T(r, e.datum_type, e.datum_params)), r = Db(r, l, a, o), e.datum_type === ra) {
    var u = rg(e, !0, r);
    if (u !== 0)
      return;
  }
  return r;
}
function rg(t, e, r) {
  if (t.grids === null || t.grids.length === 0)
    return console.log("Grid shift grids not found"), -1;
  var n = { x: -r.x, y: r.y }, i = { x: Number.NaN, y: Number.NaN }, s = [];
  e:
    for (var a = 0; a < t.grids.length; a++) {
      var o = t.grids[a];
      if (s.push(o.name), o.isNull) {
        i = n;
        break;
      }
      if (o.mandatory, o.grid === null) {
        if (o.mandatory)
          return console.log("Unable to find mandatory grid '" + o.name + "'"), -1;
        continue;
      }
      for (var l = o.grid.subgrids, u = 0, f = l.length; u < f; u++) {
        var c = l[u], h = (Math.abs(c.del[1]) + Math.abs(c.del[0])) / 1e4, d = c.ll[0] - h, p = c.ll[1] - h, m = c.ll[0] + (c.lim[0] - 1) * c.del[0] + h, g = c.ll[1] + (c.lim[1] - 1) * c.del[1] + h;
        if (!(p > n.y || d > n.x || g < n.y || m < n.x) && (i = VT(n, e, c), !isNaN(i.x)))
          break e;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -n.x * mn + " " + n.y * mn + " tried: '" + s + "'"), -1) : (r.x = -i.x, r.y = i.y, 0);
}
function VT(t, e, r) {
  var n = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return n;
  var i = { x: t.x, y: t.y };
  i.x -= r.ll[0], i.y -= r.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = ng(i, r);
  if (e) {
    if (isNaN(s.x))
      return n;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = ng(s, r), isNaN(u.x)) {
        console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
        break;
      }
      l = { x: i.x - (u.x + s.x), y: i.y - (u.y + s.y) }, s.x += l.x, s.y += l.y;
    } while (a-- && Math.abs(l.x) > o && Math.abs(l.y) > o);
    if (a < 0)
      return console.log("Inverse grid shift iterator failed to converge."), n;
    n.x = se(s.x + r.ll[0]), n.y = s.y + r.ll[1];
  } else
    isNaN(s.x) || (n.x = t.x + s.x, n.y = t.y + s.y);
  return n;
}
function ng(t, e) {
  var r = { x: t.x / e.del[0], y: t.y / e.del[1] }, n = { x: Math.floor(r.x), y: Math.floor(r.y) }, i = { x: r.x - 1 * n.x, y: r.y - 1 * n.y }, s = { x: Number.NaN, y: Number.NaN }, a;
  if (n.x < 0 || n.x >= e.lim[0] || n.y < 0 || n.y >= e.lim[1])
    return s;
  a = n.y * e.lim[0] + n.x;
  var o = { x: e.cvs[a][0], y: e.cvs[a][1] };
  a++;
  var l = { x: e.cvs[a][0], y: e.cvs[a][1] };
  a += e.lim[0];
  var u = { x: e.cvs[a][0], y: e.cvs[a][1] };
  a--;
  var f = { x: e.cvs[a][0], y: e.cvs[a][1] }, c = i.x * i.y, h = i.x * (1 - i.y), d = (1 - i.x) * (1 - i.y), p = (1 - i.x) * i.y;
  return s.x = d * o.x + h * l.x + p * f.x + c * u.x, s.y = d * o.y + h * l.y + p * f.y + c * u.y, s;
}
function ig(t, e, r) {
  var n = r.x, i = r.y, s = r.z || 0, a, o, l, u = {};
  for (l = 0; l < 3; l++)
    if (!(e && l === 2 && r.z === void 0))
      switch (l === 0 ? (a = n, "ew".indexOf(t.axis[l]) !== -1 ? o = "x" : o = "y") : l === 1 ? (a = i, "ns".indexOf(t.axis[l]) !== -1 ? o = "y" : o = "x") : (a = s, o = "z"), t.axis[l]) {
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
          r[o] !== void 0 && (u.z = a);
          break;
        case "d":
          r[o] !== void 0 && (u.z = -a);
          break;
        default:
          return null;
      }
  return u;
}
function Rb(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function jT(t) {
  sg(t.x), sg(t.y);
}
function sg(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function GT(t, e) {
  return (t.datum.datum_type === bs || t.datum.datum_type === _s || t.datum.datum_type === ra) && e.datumCode !== "WGS84" || (e.datum.datum_type === bs || e.datum.datum_type === _s || e.datum.datum_type === ra) && t.datumCode !== "WGS84";
}
function Nu(t, e, r, n) {
  var i;
  Array.isArray(r) ? r = Rb(r) : r = {
    x: r.x,
    y: r.y,
    z: r.z,
    m: r.m
  };
  var s = r.z !== void 0;
  if (jT(r), t.datum && e.datum && GT(t, e) && (i = new _n("WGS84"), r = Nu(t, i, r, n), t = i), n && t.axis !== "enu" && (r = ig(t, !1, r)), t.projName === "longlat")
    r = {
      x: r.x * It,
      y: r.y * It,
      z: r.z || 0
    };
  else if (t.to_meter && (r = {
    x: r.x * t.to_meter,
    y: r.y * t.to_meter,
    z: r.z || 0
  }), r = t.inverse(r), !r)
    return;
  if (t.from_greenwich && (r.x += t.from_greenwich), r = FT(t.datum, e.datum, r), !!r)
    return e.from_greenwich && (r = {
      x: r.x - e.from_greenwich,
      y: r.y,
      z: r.z || 0
    }), e.projName === "longlat" ? r = {
      x: r.x * mn,
      y: r.y * mn,
      z: r.z || 0
    } : (r = e.forward(r), e.to_meter && (r = {
      x: r.x / e.to_meter,
      y: r.y / e.to_meter,
      z: r.z || 0
    })), n && e.axis !== "enu" ? ig(e, !0, r) : (r && !s && delete r.z, r);
}
var ag = _n("WGS84");
function af(t, e, r, n) {
  var i, s, a;
  return Array.isArray(r) ? (i = Nu(t, e, r, n) || { x: NaN, y: NaN }, r.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(r.splice(3)) : [i.x, i.y, r[2]].concat(r.splice(3)) : [i.x, i.y].concat(r.splice(2)) : [i.x, i.y]) : (s = Nu(t, e, r, n), a = Object.keys(r), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = r[o];
  }), s);
}
function og(t) {
  return t instanceof _n ? t : t.oProj ? t.oProj : _n(t);
}
function qt(t, e, r) {
  t = og(t);
  var n = !1, i;
  return typeof e > "u" ? (e = t, t = ag, n = !0) : (typeof e.x < "u" || Array.isArray(e)) && (r = e, e = t, t = ag, n = !0), e = og(e), r ? af(t, e, r) : (i = {
    forward: function(s, a) {
      return af(t, e, s, a);
    },
    inverse: function(s, a) {
      return af(e, t, s, a);
    }
  }, n && (i.oProj = e), i);
}
var lg = 6, $b = "AJSAJS", Fb = "AFAFAF", Hs = 65, sr = 73, Mr = 79, Va = 86, ja = 90;
const UT = {
  forward: Vb,
  inverse: BT,
  toPoint: jb
};
function Vb(t, e) {
  return e = e || 5, HT(WT({
    lat: t[1],
    lon: t[0]
  }), e);
}
function BT(t) {
  var e = jd(Ub(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function jb(t) {
  var e = jd(Ub(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function of(t) {
  return t * (Math.PI / 180);
}
function ug(t) {
  return 180 * (t / Math.PI);
}
function WT(t) {
  var e = t.lat, r = t.lon, n = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = of(e), p = of(r), m, g;
  g = Math.floor((r + 180) / 6) + 1, r === 180 && (g = 60), e >= 56 && e < 64 && r >= 3 && r < 12 && (g = 32), e >= 72 && e < 84 && (r >= 0 && r < 9 ? g = 31 : r >= 9 && r < 21 ? g = 33 : r >= 21 && r < 33 ? g = 35 : r >= 33 && r < 42 && (g = 37)), a = (g - 1) * 6 - 180 + 3, m = of(a), o = i / (1 - i), l = n / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (p - m), h = n * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var v = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, y = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (y += 1e7), {
    northing: Math.round(y),
    easting: Math.round(v),
    zoneNumber: g,
    zoneLetter: qT(e)
  };
}
function jd(t) {
  var e = t.northing, r = t.easting, n = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, p, m, g, v, y, _ = r - 5e5, E = e;
  n < "N" && (E -= 1e7), g = (i - 1) * 6 - 180 + 3, l = o / (1 - o), m = E / s, v = m / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), y = v + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * v) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * v) + 151 * u * u * u / 96 * Math.sin(6 * v), f = a / Math.sqrt(1 - o * Math.sin(y) * Math.sin(y)), c = Math.tan(y) * Math.tan(y), h = l * Math.cos(y) * Math.cos(y), d = a * (1 - o) / Math.pow(1 - o * Math.sin(y) * Math.sin(y), 1.5), p = _ / (f * s);
  var x = y - f * Math.tan(y) / d * (p * p / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * p * p * p * p / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * p * p * p * p * p * p / 720);
  x = ug(x);
  var N = (p - (1 + 2 * c + h) * p * p * p / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * p * p * p * p * p / 120) / Math.cos(y);
  N = g + ug(N);
  var M;
  if (t.accuracy) {
    var L = jd({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    M = {
      top: L.lat,
      right: L.lon,
      bottom: x,
      left: N
    };
  } else
    M = {
      lat: x,
      lon: N
    };
  return M;
}
function qT(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function HT(t, e) {
  var r = "00000" + t.easting, n = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + zT(t.easting, t.northing, t.zoneNumber) + r.substr(r.length - 5, e) + n.substr(n.length - 5, e);
}
function zT(t, e, r) {
  var n = Gb(r), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return YT(i, s, n);
}
function Gb(t) {
  var e = t % lg;
  return e === 0 && (e = lg), e;
}
function YT(t, e, r) {
  var n = r - 1, i = $b.charCodeAt(n), s = Fb.charCodeAt(n), a = i + t - 1, o = s + e, l = !1;
  a > ja && (a = a - ja + Hs - 1, l = !0), (a === sr || i < sr && a > sr || (a > sr || i < sr) && l) && a++, (a === Mr || i < Mr && a > Mr || (a > Mr || i < Mr) && l) && (a++, a === sr && a++), a > ja && (a = a - ja + Hs - 1), o > Va ? (o = o - Va + Hs - 1, l = !0) : l = !1, (o === sr || s < sr && o > sr || (o > sr || s < sr) && l) && o++, (o === Mr || s < Mr && o > Mr || (o > Mr || s < Mr) && l) && (o++, o === sr && o++), o > Va && (o = o - Va + Hs - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function Ub(t) {
  if (t && t.length === 0)
    throw "MGRSPoint coverting from nothing";
  for (var e = t.length, r = null, n = "", i, s = 0; !/[A-Z]/.test(i = t.charAt(s)); ) {
    if (s >= 2)
      throw "MGRSPoint bad conversion from: " + t;
    n += i, s++;
  }
  var a = parseInt(n, 10);
  if (s === 0 || s + 3 > e)
    throw "MGRSPoint bad conversion from: " + t;
  var o = t.charAt(s++);
  if (o <= "A" || o === "B" || o === "Y" || o >= "Z" || o === "I" || o === "O")
    throw "MGRSPoint zone letter " + o + " not handled: " + t;
  r = t.substring(s, s += 2);
  for (var l = Gb(a), u = KT(r.charAt(0), l), f = XT(r.charAt(1), l); f < ZT(o); )
    f += 2e6;
  var c = e - s;
  if (c % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var h = c / 2, d = 0, p = 0, m, g, v, y, _;
  return h > 0 && (m = 1e5 / Math.pow(10, h), g = t.substring(s, s + h), d = parseFloat(g) * m, v = t.substring(s + h), p = parseFloat(v) * m), y = d + u, _ = p + f, {
    easting: y,
    northing: _,
    zoneLetter: o,
    zoneNumber: a,
    accuracy: m
  };
}
function KT(t, e) {
  for (var r = $b.charCodeAt(e - 1), n = 1e5, i = !1; r !== t.charCodeAt(0); ) {
    if (r++, r === sr && r++, r === Mr && r++, r > ja) {
      if (i)
        throw "Bad character: " + t;
      r = Hs, i = !0;
    }
    n += 1e5;
  }
  return n;
}
function XT(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var r = Fb.charCodeAt(e - 1), n = 0, i = !1; r !== t.charCodeAt(0); ) {
    if (r++, r === sr && r++, r === Mr && r++, r > Va) {
      if (i)
        throw "Bad character: " + t;
      r = Hs, i = !0;
    }
    n += 1e5;
  }
  return n;
}
function ZT(t) {
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
function fa(t, e, r) {
  if (!(this instanceof fa))
    return new fa(t, e, r);
  if (Array.isArray(t))
    this.x = t[0], this.y = t[1], this.z = t[2] || 0;
  else if (typeof t == "object")
    this.x = t.x, this.y = t.y, this.z = t.z || 0;
  else if (typeof t == "string" && typeof e > "u") {
    var n = t.split(",");
    this.x = parseFloat(n[0], 10), this.y = parseFloat(n[1], 10), this.z = parseFloat(n[2], 10) || 0;
  } else
    this.x = t, this.y = e, this.z = r || 0;
  console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
}
fa.fromMGRS = function(t) {
  return new fa(jb(t));
};
fa.prototype.toMGRS = function(t) {
  return Vb([this.x, this.y], t);
};
var JT = 1, QT = 0.25, cg = 0.046875, fg = 0.01953125, hg = 0.01068115234375, eN = 0.75, tN = 0.46875, rN = 0.013020833333333334, nN = 0.007120768229166667, iN = 0.3645833333333333, sN = 0.005696614583333333, aN = 0.3076171875;
function Bb(t) {
  var e = [];
  e[0] = JT - t * (QT + t * (cg + t * (fg + t * hg))), e[1] = t * (eN - t * (cg + t * (fg + t * hg)));
  var r = t * t;
  return e[2] = r * (tN - t * (rN + t * nN)), r *= t, e[3] = r * (iN - t * sN), e[4] = r * t * aN, e;
}
function wc(t, e, r, n) {
  return r *= e, e *= e, n[0] * t - r * (n[1] + e * (n[2] + e * (n[3] + e * n[4])));
}
var oN = 20;
function Wb(t, e, r) {
  for (var n = 1 / (1 - e), i = t, s = oN; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = (wc(i, a, Math.cos(i), r) - t) * (o * Math.sqrt(o)) * n, i -= o, Math.abs(o) < te)
      return i;
  }
  return i;
}
function lN() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Bb(this.es), this.ml0 = wc(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function uN(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i, s, a, o = Math.sin(r), l = Math.cos(r);
  if (this.es) {
    var f = l * n, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), p = Math.abs(l) > te ? Math.tan(r) : 0, m = Math.pow(p, 2), g = Math.pow(m, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var v = wc(r, o, l, this.en);
    s = this.a * (this.k0 * f * (1 + c / 6 * (1 - m + h + c / 20 * (5 - 18 * m + g + 14 * h - 58 * m * h + c / 42 * (61 + 179 * g - g * m - 479 * m))))) + this.x0, a = this.a * (this.k0 * (v - this.ml0 + o * n * f / 2 * (1 + c / 12 * (5 - m + 9 * h + 4 * d + c / 30 * (61 + g - 58 * m + 270 * h - 330 * m * h + c / 56 * (1385 + 543 * g - g * m - 3111 * m)))))) + this.y0;
  } else {
    var u = l * Math.sin(n);
    if (Math.abs(Math.abs(u) - 1) < te)
      return 93;
    if (s = 0.5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)) + this.x0, a = l * Math.cos(n) / Math.sqrt(1 - Math.pow(u, 2)), u = Math.abs(a), u >= 1) {
      if (u - 1 > te)
        return 93;
      a = 0;
    } else
      a = Math.acos(a);
    r < 0 && (a = -a), a = this.a * this.k0 * (a - this.lat0) + this.y0;
  }
  return t.x = s, t.y = a, t;
}
function cN(t) {
  var e, r, n, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, r = Wb(e, this.es, this.en), Math.abs(r) < H) {
      var c = Math.sin(r), h = Math.cos(r), d = Math.abs(h) > te ? Math.tan(r) : 0, p = this.ep2 * Math.pow(h, 2), m = Math.pow(p, 2), g = Math.pow(d, 2), v = Math.pow(g, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var y = s * Math.sqrt(e) / this.k0, _ = Math.pow(y, 2);
      e = e * d, n = r - e * _ / (1 - this.es) * 0.5 * (1 - _ / 12 * (5 + 3 * g - 9 * p * g + p - 4 * m - _ / 30 * (61 + 90 * g - 252 * p * g + 45 * v + 46 * p - _ / 56 * (1385 + 3633 * g + 4095 * v + 1574 * v * g)))), i = se(this.long0 + y * (1 - _ / 6 * (1 + 2 * g + p - _ / 20 * (5 + 28 * g + 24 * v + 8 * p * g + 6 * p - _ / 42 * (61 + 662 * g + 1320 * v + 720 * v * g)))) / h);
    } else
      n = H * Do(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), n = Math.asin(e), a < 0 && (n = -n), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = n, t;
}
var fN = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const eu = {
  init: lN,
  forward: uN,
  inverse: cN,
  names: fN
};
function qb(t) {
  var e = Math.exp(t);
  return e = (e - 1 / e) / 2, e;
}
function Nr(t, e) {
  t = Math.abs(t), e = Math.abs(e);
  var r = Math.max(t, e), n = Math.min(t, e) / (r || 1);
  return r * Math.sqrt(1 + Math.pow(n, 2));
}
function hN(t) {
  var e = 1 + t, r = e - 1;
  return r === 0 ? t : t * Math.log(e) / r;
}
function dN(t) {
  var e = Math.abs(t);
  return e = hN(e * (1 + e / (Nr(1, e) + 1))), t < 0 ? -e : e;
}
function Gd(t, e) {
  for (var r = 2 * Math.cos(2 * e), n = t.length - 1, i = t[n], s = 0, a; --n >= 0; )
    a = -s + r * i + t[n], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function pN(t, e) {
  for (var r = 2 * Math.cos(e), n = t.length - 1, i = t[n], s = 0, a; --n >= 0; )
    a = -s + r * i + t[n], s = i, i = a;
  return Math.sin(e) * a;
}
function mN(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function Hb(t, e, r) {
  for (var n = Math.sin(e), i = Math.cos(e), s = qb(r), a = mN(r), o = 2 * i * a, l = -2 * n * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, p, m; --u >= 0; )
    p = h, m = c, h = f, c = d, f = -p + o * h - l * c + t[u], d = -m + l * h + o * c;
  return o = n * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function gN() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (eu.init.apply(this), this.forward = eu.forward, this.inverse = eu.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), r = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), r = r * e, this.cgb[1] = r * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = r * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), r = r * e, this.cgb[2] = r * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = r * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), r = r * e, this.cgb[3] = r * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = r * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), r = r * e, this.cgb[4] = r * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = r * (-734 / 315 + e * (109598 / 31185)), r = r * e, this.cgb[5] = r * (601676 / 22275), this.cbg[5] = r * (444337 / 155925), r = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + r * (1 / 4 + r * (1 / 64 + r / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = r * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = r * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), r = r * e, this.utg[2] = r * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = r * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), r = r * e, this.utg[3] = r * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = r * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), r = r * e, this.utg[4] = r * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = r * (34729 / 80640 + e * (-3418889 / 1995840)), r = r * e, this.utg[5] = r * (-20648693 / 638668800), this.gtu[5] = r * (212378941 / 319334400);
  var n = Gd(this.cbg, this.lat0);
  this.Zb = -this.Qn * (n + pN(this.gtu, 2 * n));
}
function yN(t) {
  var e = se(t.x - this.long0), r = t.y;
  r = Gd(this.cbg, r);
  var n = Math.sin(r), i = Math.cos(r), s = Math.sin(e), a = Math.cos(e);
  r = Math.atan2(n, a * i), e = Math.atan2(s * i, Nr(n, i * a)), e = dN(Math.tan(e));
  var o = Hb(this.gtu, 2 * r, 2 * e);
  r = r + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * r + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function vN(t) {
  var e = (t.x - this.x0) * (1 / this.a), r = (t.y - this.y0) * (1 / this.a);
  r = (r - this.Zb) / this.Qn, e = e / this.Qn;
  var n, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = Hb(this.utg, 2 * r, 2 * e);
    r = r + s[0], e = e + s[1], e = Math.atan(qb(e));
    var a = Math.sin(r), o = Math.cos(r), l = Math.sin(e), u = Math.cos(e);
    r = Math.atan2(a * u, Nr(l, u * o)), e = Math.atan2(l, u * o), n = se(e + this.long0), i = Gd(this.cgb, r);
  } else
    n = 1 / 0, i = 1 / 0;
  return t.x = n, t.y = i, t;
}
var bN = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const tu = {
  init: gN,
  forward: yN,
  inverse: vN,
  names: bN
};
function _N(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var EN = "etmerc";
function SN() {
  var t = _N(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * It, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, tu.init.apply(this), this.forward = tu.forward, this.inverse = tu.inverse;
}
var wN = ["Universal Transverse Mercator System", "utm"];
const ON = {
  init: SN,
  names: wN,
  dependsOn: EN
};
function Ud(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var xN = 20;
function MN() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + We) / (Math.pow(Math.tan(0.5 * this.lat0 + We), this.C) * Ud(this.e * t, this.ratexp));
}
function TN(t) {
  var e = t.x, r = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * r + We), this.C) * Ud(this.e * Math.sin(r), this.ratexp)) - H, t.x = this.C * e, t;
}
function NN(t) {
  for (var e = 1e-14, r = t.x / this.C, n = t.y, i = Math.pow(Math.tan(0.5 * n + We) / this.K, 1 / this.C), s = xN; s > 0 && (n = 2 * Math.atan(i * Ud(this.e * Math.sin(t.y), -0.5 * this.e)) - H, !(Math.abs(n - t.y) < e)); --s)
    t.y = n;
  return s ? (t.x = r, t.y = n, t) : null;
}
var CN = ["gauss"];
const Bd = {
  init: MN,
  forward: TN,
  inverse: NN,
  names: CN
};
function PN() {
  Bd.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function LN(t) {
  var e, r, n, i;
  return t.x = se(t.x - this.long0), Bd.forward.apply(this, [t]), e = Math.sin(t.y), r = Math.cos(t.y), n = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * r * n), t.x = i * r * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * r * n), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function AN(t) {
  var e, r, n, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Nr(t.x, t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), r = Math.cos(a), i = Math.asin(r * this.sinc0 + t.y * e * this.cosc0 / s), n = Math.atan2(t.x * e, s * this.cosc0 * r - t.y * this.sinc0 * e);
  } else
    i = this.phic0, n = 0;
  return t.x = n, t.y = i, Bd.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var IN = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const kN = {
  init: PN,
  forward: LN,
  inverse: AN,
  names: IN
};
function DN(t, e, r) {
  return e *= r, Math.tan(0.5 * (H + t)) * Math.pow((1 - e) / (1 + e), 0.5 * r);
}
function RN() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && (this.k0 = 0.5 * (1 + Do(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= te && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && Math.abs(Math.cos(this.lat_ts)) > te && (this.k0 = 0.5 * this.cons * Tn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Qr(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = Tn(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - H, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function $N(t) {
  var e = t.x, r = t.y, n = Math.sin(r), i = Math.cos(r), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= te && Math.abs(r + this.lat0) <= te ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * n + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * n - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(r, n, this.e)) - H, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= te ? (u = Qr(this.e, r * this.con, this.con * n), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < te ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function FN(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, r, n, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, r = this.lat0, a <= te ? (t.x = e, t.y = r, t) : (r = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < te ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = r, t);
  } else if (Math.abs(this.coslat0) <= te) {
    if (a <= te)
      return r = this.lat0, e = this.long0, t.x = e, t.y = r, t;
    t.x *= this.con, t.y *= this.con, n = a * this.cons / (2 * this.a * this.k0), r = this.con * _o(this.e, n), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= te ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), r = -1 * _o(this.e, Math.tan(0.5 * (H + s)));
  return t.x = e, t.y = r, t;
}
var VN = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const jN = {
  init: RN,
  forward: $N,
  inverse: FN,
  names: VN,
  ssfn_: DN
};
function GN() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), r = this.a, n = this.rf, i = 1 / n, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * r * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function UN(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), r = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), n = -this.alpha * (e + r) + this.K, i = 2 * (Math.atan(Math.exp(n)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function BN(t) {
  for (var e = t.x - this.x0, r = t.y - this.y0, n = e / this.R, i = 2 * (Math.atan(Math.exp(r / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(n)), a = Math.atan(Math.sin(n) / (Math.cos(this.b0) * Math.cos(n) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var WN = ["somerc"];
const qN = {
  init: GN,
  forward: UN,
  inverse: BN,
  names: WN
};
var Gs = 1e-7;
function HN(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], r = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(r) !== -1;
}
function zN() {
  var t, e, r, n, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, p = 0, m = 0, g = 0, v = 0;
  this.no_off = HN(this), this.no_rot = "no_rot" in this;
  var y = !1;
  "alpha" in this && (y = !0);
  var _ = !1;
  if ("rectified_grid_angle" in this && (_ = !0), y && (v = this.alpha), _ && (f = this.rectified_grid_angle * It), y || _)
    h = this.longc;
  else if (d = this.long1, m = this.lat1, p = this.long2, g = this.lat2, Math.abs(m - g) <= Gs || (t = Math.abs(m)) <= Gs || Math.abs(t - H) <= Gs || Math.abs(Math.abs(this.lat0) - H) <= Gs || Math.abs(Math.abs(g) - H) <= Gs)
    throw new Error();
  var E = 1 - this.es;
  e = Math.sqrt(E), Math.abs(this.lat0) > te ? (o = Math.sin(this.lat0), r = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = r * r, this.B = Math.sqrt(1 + this.es * this.B * this.B / E), this.A = this.B * this.k0 * e / t, n = this.B * e / (r * Math.sqrt(t)), i = n * n - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += n, this.E *= Math.pow(Qr(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = n = i = 1), y || _ ? (y ? (c = Math.asin(Math.sin(v) / n), _ || (f = v)) : (c = f, v = Math.asin(n * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(Qr(this.e, m, Math.sin(m)), this.B), a = Math.pow(Qr(this.e, g, Math.sin(g)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - p, t < -Math.pi ? p -= vo : t > Math.pi && (p += vo), this.lam0 = se(0.5 * (d + p) - Math.atan(u * Math.tan(0.5 * this.B * (d - p)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = v = Math.asin(n * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(n * n - 1) / Math.cos(v))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(We - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(We + i));
}
function YN(t) {
  var e = {}, r, n, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - H) > te) {
    if (a = this.E / Math.pow(Qr(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, r = 0.5 * (a - o), n = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (r * this.singam - s * this.cosgam) / n, Math.abs(Math.abs(i) - 1) < te)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < Gs ? l = this.A * t.x : l = this.ArB * Math.atan2(r * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function KN(t) {
  var e, r, n, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (r = t.y, e = t.x) : (r = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), n = Math.exp(-this.BrA * r), i = 0.5 * (n - 1 / n), s = 0.5 * (n + 1 / n), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < te)
    l.x = 0, l.y = o < 0 ? -H : H;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = _o(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var XN = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const ZN = {
  init: zN,
  forward: YN,
  inverse: KN,
  names: XN
};
function JN() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < te)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), r = Math.cos(this.lat1), n = Tn(this.e, e, r), i = Qr(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = Tn(this.e, s, a), l = Qr(this.e, this.lat2, s), u = Qr(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > te ? this.ns = Math.log(n / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = n / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function QN(t) {
  var e = t.x, r = t.y;
  Math.abs(2 * Math.abs(r) - Math.PI) <= te && (r = Do(r) * (H - 2 * te));
  var n = Math.abs(Math.abs(r) - H), i, s;
  if (n > te)
    i = Qr(this.e, r, Math.sin(r)), s = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (n = r * this.ns, n <= 0)
      return null;
    s = 0;
  }
  var a = this.ns * se(e - this.long0);
  return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t;
}
function e2(t) {
  var e, r, n, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), r = 1) : (e = -Math.sqrt(a * a + o * o), r = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(r * a, r * o)), e !== 0 || this.ns > 0) {
    if (r = 1 / this.ns, n = Math.pow(e / (this.a * this.f0), r), i = _o(this.e, n), i === -9999)
      return null;
  } else
    i = -H;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var t2 = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const r2 = {
  init: JN,
  forward: QN,
  inverse: e2,
  names: t2
};
function n2() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function i2(t) {
  var e, r, n, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), r = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), n = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(r) + Math.sin(this.ad) * Math.cos(r) * Math.cos(n)), s = Math.asin(Math.cos(r) * Math.sin(n) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function s2(t) {
  var e, r, n, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), n = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(n) - Math.sin(this.ad) * Math.cos(n) * Math.cos(i)), r = Math.asin(Math.cos(n) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - r / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var a2 = ["Krovak", "krovak"];
const o2 = {
  init: n2,
  forward: i2,
  inverse: s2,
  names: a2
};
function Jt(t, e, r, n, i) {
  return t * i - e * Math.sin(2 * i) + r * Math.sin(4 * i) - n * Math.sin(6 * i);
}
function Ro(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function $o(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function Fo(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function Vo(t) {
  return t * t * t * (35 / 3072);
}
function ha(t, e, r) {
  var n = e * r;
  return t / Math.sqrt(1 - n * n);
}
function ga(t) {
  return Math.abs(t) < H ? t : t - Do(t) * Math.PI;
}
function Cu(t, e, r, n, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - r * Math.sin(2 * s) + n * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * r * Math.cos(2 * s) + 4 * n * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function l2() {
  this.sphere || (this.e0 = Ro(this.es), this.e1 = $o(this.es), this.e2 = Fo(this.es), this.e3 = Vo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function u2(t) {
  var e, r, n = t.x, i = t.y;
  if (n = se(n - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(n)), r = this.a * (Math.atan2(Math.tan(i), Math.cos(n)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = ha(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = n * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), r = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = r + this.y0, t;
}
function c2(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, r = t.y / this.a, n, i;
  if (this.sphere) {
    var s = r + this.lat0;
    n = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + r, o = Cu(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - H) <= te)
      return t.x = this.long0, t.y = H, r < 0 && (t.y *= -1), t;
    var l = ha(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    n = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = ga(n), t;
}
var f2 = ["Cassini", "Cassini_Soldner", "cass"];
const h2 = {
  init: l2,
  forward: u2,
  inverse: c2,
  names: f2
};
function Ci(t, e) {
  var r;
  return t > 1e-7 ? (r = t * e, (1 - t * t) * (e / (1 - r * r) - 0.5 / t * Math.log((1 - r) / (1 + r)))) : 2 * e;
}
var d2 = 1, p2 = 2, m2 = 3, g2 = 4;
function y2() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - H) < te ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < te ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = Ci(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = M2(this.es), this.mode) {
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
        this.rq = Math.sqrt(0.5 * this.qp), e = Math.sin(this.lat0), this.sinb1 = Ci(this.e, e) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * e * e) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function v2(t) {
  var e, r, n, i, s, a, o, l, u, f, c = t.x, h = t.y;
  if (c = se(c - this.long0), this.sphere) {
    if (s = Math.sin(h), f = Math.cos(h), n = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (r = this.mode === this.EQUIT ? 1 + f * n : 1 + this.sinph0 * s + this.cosph0 * f * n, r <= te)
        return null;
      r = Math.sqrt(2 / r), e = r * f * Math.sin(c), r *= this.mode === this.EQUIT ? s : this.cosph0 * s - this.sinph0 * f * n;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (n = -n), Math.abs(h + this.lat0) < te)
        return null;
      r = We - h * 0.5, r = 2 * (this.mode === this.S_POLE ? Math.cos(r) : Math.sin(r)), e = r * Math.sin(c), r *= n;
    }
  } else {
    switch (o = 0, l = 0, u = 0, n = Math.cos(c), i = Math.sin(c), s = Math.sin(h), a = Ci(this.e, s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = a / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
      case this.OBLIQ:
        u = 1 + this.sinb1 * o + this.cosb1 * l * n;
        break;
      case this.EQUIT:
        u = 1 + l * n;
        break;
      case this.N_POLE:
        u = H + h, a = this.qp - a;
        break;
      case this.S_POLE:
        u = h - H, a = this.qp + a;
        break;
    }
    if (Math.abs(u) < te)
      return null;
    switch (this.mode) {
      case this.OBLIQ:
      case this.EQUIT:
        u = Math.sqrt(2 / u), this.mode === this.OBLIQ ? r = this.ymf * u * (this.cosb1 * o - this.sinb1 * l * n) : r = (u = Math.sqrt(2 / (1 + l * n))) * o * this.ymf, e = this.xmf * u * l * i;
        break;
      case this.N_POLE:
      case this.S_POLE:
        a >= 0 ? (e = (u = Math.sqrt(a)) * i, r = n * (this.mode === this.S_POLE ? u : -u)) : e = r = 0;
        break;
    }
  }
  return t.x = this.a * e + this.x0, t.y = this.a * r + this.y0, t;
}
function b2(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, r = t.y / this.a, n, i, s, a, o, l, u;
  if (this.sphere) {
    var f = 0, c, h = 0;
    if (c = Math.sqrt(e * e + r * r), i = c * 0.5, i > 1)
      return null;
    switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (h = Math.sin(i), f = Math.cos(i)), this.mode) {
      case this.EQUIT:
        i = Math.abs(c) <= te ? 0 : Math.asin(r * h / c), e *= h, r = f * c;
        break;
      case this.OBLIQ:
        i = Math.abs(c) <= te ? this.lat0 : Math.asin(f * this.sinph0 + r * h * this.cosph0 / c), e *= h * this.cosph0, r = (f - Math.sin(i) * this.sinph0) * c;
        break;
      case this.N_POLE:
        r = -r, i = H - i;
        break;
      case this.S_POLE:
        i -= H;
        break;
    }
    n = r === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(e, r);
  } else {
    if (u = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (e /= this.dd, r *= this.dd, l = Math.sqrt(e * e + r * r), l < te)
        return t.x = this.long0, t.y = this.lat0, t;
      a = 2 * Math.asin(0.5 * l / this.rq), s = Math.cos(a), e *= a = Math.sin(a), this.mode === this.OBLIQ ? (u = s * this.sinb1 + r * a * this.cosb1 / l, o = this.qp * u, r = l * this.cosb1 * s - r * this.sinb1 * a) : (u = r * a / l, o = this.qp * u, r = l * s);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (r = -r), o = e * e + r * r, !o)
        return t.x = this.long0, t.y = this.lat0, t;
      u = 1 - o / this.qp, this.mode === this.S_POLE && (u = -u);
    }
    n = Math.atan2(e, r), i = T2(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + n), t.y = i, t;
}
var _2 = 0.3333333333333333, E2 = 0.17222222222222222, S2 = 0.10257936507936508, w2 = 0.06388888888888888, O2 = 0.0664021164021164, x2 = 0.016415012942191543;
function M2(t) {
  var e, r = [];
  return r[0] = t * _2, e = t * t, r[0] += e * E2, r[1] = e * w2, e *= t, r[0] += e * S2, r[1] += e * O2, r[2] = e * x2, r;
}
function T2(t, e) {
  var r = t + t;
  return t + e[0] * Math.sin(r) + e[1] * Math.sin(r + r) + e[2] * Math.sin(r + r + r);
}
var N2 = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const C2 = {
  init: y2,
  forward: v2,
  inverse: b2,
  names: N2,
  S_POLE: d2,
  N_POLE: p2,
  EQUIT: m2,
  OBLIQ: g2
};
function ki(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function P2() {
  Math.abs(this.lat1 + this.lat2) < te || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = Tn(this.e3, this.sin_po, this.cos_po), this.qs1 = Ci(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = Tn(this.e3, this.sin_po, this.cos_po), this.qs2 = Ci(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Ci(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > te ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function L2(t) {
  var e = t.x, r = t.y;
  this.sin_phi = Math.sin(r), this.cos_phi = Math.cos(r);
  var n = Ci(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * n) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function A2(t) {
  var e, r, n, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), n = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), n = -1), i = 0, e !== 0 && (i = Math.atan2(n * t.x, n * t.y)), n = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - n * n) / (2 * this.ns0)) : (r = (this.c - n * n) / this.ns0, a = this.phi1z(this.e3, r)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function I2(t, e) {
  var r, n, i, s, a, o = ki(0.5 * e);
  if (t < te)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (r = Math.sin(o), n = Math.cos(o), i = t * r, s = 1 - i * i, a = 0.5 * s * s / n * (e / (1 - l) - r / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var k2 = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const D2 = {
  init: P2,
  forward: L2,
  inverse: A2,
  names: k2,
  phi1z: I2
};
function R2() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function $2(t) {
  var e, r, n, i, s, a, o, l, u = t.x, f = t.y;
  return n = se(u - this.long0), e = Math.sin(f), r = Math.cos(f), i = Math.cos(n), a = this.sin_p14 * e + this.cos_p14 * r * i, s = 1, a > 0 || Math.abs(a) <= te ? (o = this.x0 + this.a * s * r * Math.sin(n) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * r * i) / a) : (o = this.x0 + this.infinity_dist * r * Math.sin(n), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * r * i)), t.x = o, t.y = l, t;
}
function F2(t) {
  var e, r, n, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), r = Math.sin(i), n = Math.cos(i), a = ki(n * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.atan2(t.x * r, e * this.cos_p14 * n - t.y * this.sin_p14 * r), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var V2 = ["gnom"];
const j2 = {
  init: R2,
  forward: $2,
  inverse: F2,
  names: V2
};
function G2(t, e) {
  var r = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(e) - r) < 1e-6)
    return e < 0 ? -1 * H : H;
  for (var n = Math.asin(0.5 * e), i, s, a, o, l = 0; l < 30; l++)
    if (s = Math.sin(n), a = Math.cos(n), o = t * s, i = Math.pow(1 - o * o, 2) / (2 * a) * (e / (1 - t * t) - s / (1 - o * o) + 0.5 / t * Math.log((1 - o) / (1 + o))), n += i, Math.abs(i) <= 1e-10)
      return n;
  return NaN;
}
function U2() {
  this.sphere || (this.k0 = Tn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function B2(t) {
  var e = t.x, r = t.y, n, i, s = se(e - this.long0);
  if (this.sphere)
    n = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(r) / Math.cos(this.lat_ts);
  else {
    var a = Ci(this.e, Math.sin(r));
    n = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = n, t.y = i, t;
}
function W2(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, r;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), r = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (r = G2(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = r, t;
}
var q2 = ["cea"];
const H2 = {
  init: U2,
  forward: B2,
  inverse: W2,
  names: q2
};
function z2() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function Y2(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i = ga(r - this.lat0);
  return t.x = this.x0 + this.a * n * this.rc, t.y = this.y0 + this.a * i, t;
}
function K2(t) {
  var e = t.x, r = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = ga(this.lat0 + (r - this.y0) / this.a), t;
}
var X2 = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const Z2 = {
  init: z2,
  forward: Y2,
  inverse: K2,
  names: X2
};
var dg = 20;
function J2() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Ro(this.es), this.e1 = $o(this.es), this.e2 = Fo(this.es), this.e3 = Vo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function Q2(t) {
  var e = t.x, r = t.y, n, i, s, a = se(e - this.long0);
  if (s = a * Math.sin(r), this.sphere)
    Math.abs(r) <= te ? (n = this.a * a, i = -1 * this.a * this.lat0) : (n = this.a * Math.sin(s) / Math.tan(r), i = this.a * (ga(r - this.lat0) + (1 - Math.cos(s)) / Math.tan(r)));
  else if (Math.abs(r) <= te)
    n = this.a * a, i = -1 * this.ml0;
  else {
    var o = ha(this.a, this.e, Math.sin(r)) / Math.tan(r);
    n = o * Math.sin(s), i = this.a * Jt(this.e0, this.e1, this.e2, this.e3, r) - this.ml0 + o * (1 - Math.cos(s));
  }
  return t.x = n + this.x0, t.y = i + this.y0, t;
}
function eC(t) {
  var e, r, n, i, s, a, o, l, u;
  if (n = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= te)
      e = se(n / this.a + this.long0), r = 0;
    else {
      a = this.lat0 + i / this.a, o = n * n / this.a / this.a + a * a, l = a;
      var f;
      for (s = dg; s; --s)
        if (f = Math.tan(l), u = -1 * (a * (l * f + 1) - l - 0.5 * (l * l + o) * f) / ((l - a) / f - 1), l += u, Math.abs(u) <= te) {
          r = l;
          break;
        }
      e = se(this.long0 + Math.asin(n * Math.tan(l) / this.a) / Math.sin(r));
    }
  else if (Math.abs(i + this.ml0) <= te)
    r = 0, e = se(this.long0 + n / this.a);
  else {
    a = (this.ml0 + i) / this.a, o = n * n / this.a / this.a + a * a, l = a;
    var c, h, d, p, m;
    for (s = dg; s; --s)
      if (m = this.e * Math.sin(l), c = Math.sqrt(1 - m * m) * Math.tan(l), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), p = h / this.a, u = (a * (c * p + 1) - p - 0.5 * c * (p * p + o)) / (this.es * Math.sin(2 * l) * (p * p + o - 2 * a * p) / (4 * c) + (a - p) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= te) {
        r = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(r), 2)) * Math.tan(r), e = se(this.long0 + Math.asin(n * c / this.a) / Math.sin(r));
  }
  return t.x = e, t.y = r, t;
}
var tC = ["Polyconic", "poly"];
const rC = {
  init: J2,
  forward: Q2,
  inverse: eC,
  names: tC
};
function nC() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function iC(t) {
  var e, r = t.x, n = t.y, i = n - this.lat0, s = r - this.long0, a = i / Qa * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, p, m, g = 0, v = 0;
  for (e = 1; e <= 6; e++)
    p = h * f - d * c, m = d * f + h * c, h = p, d = m, g = g + this.B_re[e] * h - this.B_im[e] * d, v = v + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = v * this.a + this.x0, t.y = g * this.a + this.y0, t;
}
function sC(t) {
  var e, r = t.x, n = t.y, i = r - this.x0, s = n - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var p = 0; p < this.iterations; p++) {
    var m = h, g = d, v, y, _ = a, E = o;
    for (e = 2; e <= 6; e++)
      v = m * h - g * d, y = g * h + m * d, m = v, g = y, _ = _ + (e - 1) * (this.B_re[e] * m - this.B_im[e] * g), E = E + (e - 1) * (this.B_im[e] * m + this.B_re[e] * g);
    m = 1, g = 0;
    var x = this.B_re[1], N = this.B_im[1];
    for (e = 2; e <= 6; e++)
      v = m * h - g * d, y = g * h + m * d, m = v, g = y, x = x + e * (this.B_re[e] * m - this.B_im[e] * g), N = N + e * (this.B_im[e] * m + this.B_re[e] * g);
    var M = x * x + N * N;
    h = (_ * x + E * N) / M, d = (E * x - _ * N) / M;
  }
  var L = h, D = d, C = 1, R = 0;
  for (e = 1; e <= 9; e++)
    C = C * L, R = R + this.D[e] * C;
  var k = this.lat0 + R * Qa * 1e5, Q = this.long0 + D;
  return t.x = Q, t.y = k, t;
}
var aC = ["New_Zealand_Map_Grid", "nzmg"];
const oC = {
  init: nC,
  forward: iC,
  inverse: sC,
  names: aC
};
function lC() {
}
function uC(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i = this.x0 + this.a * n, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + r / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function cC(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), r = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = r, t;
}
var fC = ["Miller_Cylindrical", "mill"];
const hC = {
  init: lC,
  forward: uC,
  inverse: cC,
  names: fC
};
var dC = 20;
function pC() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Bb(this.es);
}
function mC(t) {
  var e, r, n = t.x, i = t.y;
  if (n = se(n - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = dC; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < te)
          break;
      }
    e = this.a * this.C_x * n * (this.m + Math.cos(i)), r = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    r = this.a * wc(i, l, u, this.en), e = this.a * n * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = r, t;
}
function gC(t) {
  var e, r, n, i;
  return t.x -= this.x0, n = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, n = n / (this.C_x * (this.m + Math.cos(e))), this.m ? e = ki((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = ki(Math.sin(e) / this.n)), n = se(n + this.long0), e = ga(e)) : (e = Wb(t.y / this.a, this.es, this.en), i = Math.abs(e), i < H ? (i = Math.sin(e), r = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), n = se(r)) : i - te < H && (n = this.long0)), t.x = n, t.y = e, t;
}
var yC = ["Sinusoidal", "sinu"];
const vC = {
  init: pC,
  forward: mC,
  inverse: gC,
  names: yC
};
function bC() {
}
function _C(t) {
  for (var e = t.x, r = t.y, n = se(e - this.long0), i = r, s = Math.PI * Math.sin(r); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < te)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(r) < te && (n = 0);
  var o = 0.900316316158 * this.a * n * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function EC(t) {
  var e, r;
  t.x -= this.x0, t.y -= this.y0, r = t.y / (1.4142135623731 * this.a), Math.abs(r) > 0.999999999999 && (r = 0.999999999999), e = Math.asin(r);
  var n = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  n < -Math.PI && (n = -Math.PI), n > Math.PI && (n = Math.PI), r = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(r) > 1 && (r = 1);
  var i = Math.asin(r);
  return t.x = n, t.y = i, t;
}
var SC = ["Mollweide", "moll"];
const wC = {
  init: bC,
  forward: _C,
  inverse: EC,
  names: SC
};
function OC() {
  Math.abs(this.lat1 + this.lat2) < te || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Ro(this.es), this.e1 = $o(this.es), this.e2 = Fo(this.es), this.e3 = Vo(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = Tn(this.e, this.sinphi, this.cosphi), this.ml1 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < te ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = Tn(this.e, this.sinphi, this.cosphi), this.ml2 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function xC(t) {
  var e = t.x, r = t.y, n;
  if (this.sphere)
    n = this.a * (this.g - r);
  else {
    var i = Jt(this.e0, this.e1, this.e2, this.e3, r);
    n = this.a * (this.g - i);
  }
  var s = this.ns * se(e - this.long0), a = this.x0 + n * Math.sin(s), o = this.y0 + this.rh - n * Math.cos(s);
  return t.x = a, t.y = o, t;
}
function MC(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, r, n, i;
  this.ns >= 0 ? (r = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (r = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (r !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), n = ga(this.g - r / this.a), t.x = i, t.y = n, t;
  var a = this.g - r / this.a;
  return n = Cu(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = n, t;
}
var TC = ["Equidistant_Conic", "eqdc"];
const NC = {
  init: OC,
  forward: xC,
  inverse: MC,
  names: TC
};
function CC() {
  this.R = this.a;
}
function PC(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i, s;
  Math.abs(r) <= te && (i = this.x0 + this.R * n, s = this.y0);
  var a = ki(2 * Math.abs(r / Math.PI));
  (Math.abs(n) <= te || Math.abs(Math.abs(r) - H) <= te) && (i = this.x0, r >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / n - n / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), p = d * d, m = Math.PI * this.R * (o * (c - p) + Math.sqrt(l * (c - p) * (c - p) - (p + l) * (h - p))) / (p + l);
  n < 0 && (m = -m), i = this.x0 + m;
  var g = l + c;
  return m = Math.PI * this.R * (d * g - o * Math.sqrt((p + l) * (l + 1) - g * g)) / (p + l), r >= 0 ? s = this.y0 + m : s = this.y0 - m, t.x = i, t.y = s, t;
}
function LC(t) {
  var e, r, n, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, n = t.x / c, i = t.y / c, s = n * n + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + n * n, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? r = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : r = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(n) < te ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (n * n - i * i) + s * s)) / 2 / n), t.x = e, t.y = r, t;
}
var AC = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const IC = {
  init: CC,
  forward: PC,
  inverse: LC,
  names: AC
};
function kC() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function DC(t) {
  var e = t.x, r = t.y, n = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, p, m, g, v, y, _, E, x, N, M, L, D, C, R, k;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= te ? (t.x = this.x0 + this.a * (H - r) * Math.sin(s), t.y = this.y0 - this.a * (H - r) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (t.x = this.x0 + this.a * (H + r) * Math.sin(s), t.y = this.y0 + this.a * (H + r) * Math.cos(s), t) : (M = this.sin_p12 * n + this.cos_p12 * i * Math.cos(s), x = Math.acos(M), N = x ? x / Math.sin(x) : 1, t.x = this.x0 + this.a * N * i * Math.sin(s), t.y = this.y0 + this.a * N * (this.cos_p12 * n - this.sin_p12 * i * Math.cos(s)), t) : (a = Ro(this.es), o = $o(this.es), l = Fo(this.es), u = Vo(this.es), Math.abs(this.sin_p12 - 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, r), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, r), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = n / i, d = ha(this.a, this.e, this.sin_p12), p = ha(this.a, this.e, n), m = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (p * i)), g = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(m) - this.sin_p12 * Math.cos(s)), g === 0 ? L = Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : Math.abs(Math.abs(g) - Math.PI) <= te ? L = -Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : L = Math.asin(Math.sin(s) * Math.cos(m) / Math.sin(g)), v = this.e * this.sin_p12 / Math.sqrt(1 - this.es), y = this.e * this.cos_p12 * Math.cos(g) / Math.sqrt(1 - this.es), _ = v * y, E = y * y, D = L * L, C = D * L, R = C * L, k = R * L, x = d * L * (1 - D * E * (1 - E) / 6 + C / 8 * _ * (1 - 2 * E) + R / 120 * (E * (4 - 7 * E) - 3 * v * v * (1 - 7 * E)) - k / 48 * _), t.x = this.x0 + x * Math.sin(g), t.y = this.y0 + x * Math.cos(g), t));
}
function RC(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, r, n, i, s, a, o, l, u, f, c, h, d, p, m, g, v, y, _, E, x, N, M, L;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * H * this.a ? void 0 : (r = e / this.a, n = Math.sin(r), i = Math.cos(r), s = this.long0, Math.abs(e) <= te ? a = this.lat0 : (a = ki(i * this.sin_p12 + t.y * n * this.cos_p12 / e), o = Math.abs(this.lat0) - H, Math.abs(o) <= te ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * n, e * this.cos_p12 * i - t.y * this.sin_p12 * n))), t.x = s, t.y = a, t)) : (l = Ro(this.es), u = $o(this.es), f = Fo(this.es), c = Vo(this.es), Math.abs(this.sin_p12 - 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = Cu(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = Cu(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), g = Math.atan2(t.x, t.y), p = ha(this.a, this.e, this.sin_p12), v = Math.cos(g), y = this.e * this.cos_p12 * v, _ = -y * y / (1 - this.es), E = 3 * this.es * (1 - _) * this.sin_p12 * this.cos_p12 * v / (1 - this.es), x = e / p, N = x - _ * (1 + _) * Math.pow(x, 3) / 6 - E * (1 + 3 * _) * Math.pow(x, 4) / 24, M = 1 - _ * N * N / 2 - x * N * N * N / 6, m = Math.asin(this.sin_p12 * Math.cos(N) + this.cos_p12 * Math.sin(N) * v), s = se(this.long0 + Math.asin(Math.sin(g) * Math.sin(N) / Math.cos(m))), L = Math.sin(m), a = Math.atan2((L - this.es * M * this.sin_p12) * Math.tan(m), L * (1 - this.es)), t.x = s, t.y = a, t));
}
var $C = ["Azimuthal_Equidistant", "aeqd"];
const FC = {
  init: kC,
  forward: DC,
  inverse: RC,
  names: $C
};
function VC() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function jC(t) {
  var e, r, n, i, s, a, o, l, u = t.x, f = t.y;
  return n = se(u - this.long0), e = Math.sin(f), r = Math.cos(f), i = Math.cos(n), a = this.sin_p14 * e + this.cos_p14 * r * i, s = 1, (a > 0 || Math.abs(a) <= te) && (o = this.a * s * r * Math.sin(n), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * r * i)), t.x = o, t.y = l, t;
}
function GC(t) {
  var e, r, n, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), r = ki(e / this.a), n = Math.sin(r), i = Math.cos(r), a = this.long0, Math.abs(e) <= te ? (o = this.lat0, t.x = a, t.y = o, t) : (o = ki(i * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.abs(this.lat0) - H, Math.abs(s) <= te ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * n, e * this.cos_p14 * i - t.y * this.sin_p14 * n)), t.x = a, t.y = o, t));
}
var UC = ["ortho"];
const BC = {
  init: VC,
  forward: jC,
  inverse: GC,
  names: UC
};
var ot = {
  FRONT: 1,
  RIGHT: 2,
  BACK: 3,
  LEFT: 4,
  TOP: 5,
  BOTTOM: 6
}, qe = {
  AREA_0: 1,
  AREA_1: 2,
  AREA_2: 3,
  AREA_3: 4
};
function WC() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= H - We / 2 ? this.face = ot.TOP : this.lat0 <= -(H - We / 2) ? this.face = ot.BOTTOM : Math.abs(this.long0) <= We ? this.face = ot.FRONT : Math.abs(this.long0) <= H + We ? this.face = this.long0 > 0 ? ot.RIGHT : ot.LEFT : this.face = ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function qC(t) {
  var e = { x: 0, y: 0 }, r, n, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? r = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : r = t.y, n = t.x, this.face === ot.TOP)
    s = H - r, n >= We && n <= H + We ? (l.value = qe.AREA_0, i = n - H) : n > H + We || n <= -(H + We) ? (l.value = qe.AREA_1, i = n > 0 ? n - gt : n + gt) : n > -(H + We) && n <= -We ? (l.value = qe.AREA_2, i = n + H) : (l.value = qe.AREA_3, i = n);
  else if (this.face === ot.BOTTOM)
    s = H + r, n >= We && n <= H + We ? (l.value = qe.AREA_0, i = -n + H) : n < We && n >= -We ? (l.value = qe.AREA_1, i = -n) : n < -We && n >= -(H + We) ? (l.value = qe.AREA_2, i = -n - H) : (l.value = qe.AREA_3, i = n > 0 ? -n + gt : -n - gt);
  else {
    var u, f, c, h, d, p, m;
    this.face === ot.RIGHT ? n = na(n, +H) : this.face === ot.BACK ? n = na(n, +gt) : this.face === ot.LEFT && (n = na(n, -H)), h = Math.sin(r), d = Math.cos(r), p = Math.sin(n), m = Math.cos(n), u = d * m, f = d * p, c = h, this.face === ot.FRONT ? (s = Math.acos(u), i = ml(s, c, f, l)) : this.face === ot.RIGHT ? (s = Math.acos(f), i = ml(s, c, -u, l)) : this.face === ot.BACK ? (s = Math.acos(-u), i = ml(s, c, -f, l)) : this.face === ot.LEFT ? (s = Math.acos(-f), i = ml(s, c, u, l)) : (s = i = 0, l.value = qe.AREA_0);
  }
  return o = Math.atan(12 / gt * (i + Math.acos(Math.sin(i) * Math.cos(We)) - H)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === qe.AREA_1 ? o += H : l.value === qe.AREA_2 ? o += gt : l.value === qe.AREA_3 && (o += 1.5 * gt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function HC(t) {
  var e = { lam: 0, phi: 0 }, r, n, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, n = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), r = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = qe.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = qe.AREA_1, r -= H) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = qe.AREA_2, r = r < 0 ? r + gt : r - gt) : (c.value = qe.AREA_3, r += H), f = gt / 12 * Math.tan(r), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(r), s = Math.tan(n), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === ot.TOP)
    u = Math.acos(l), e.phi = H - u, c.value === qe.AREA_0 ? e.lam = o + H : c.value === qe.AREA_1 ? e.lam = o < 0 ? o + gt : o - gt : c.value === qe.AREA_2 ? e.lam = o - H : e.lam = o;
  else if (this.face === ot.BOTTOM)
    u = Math.acos(l), e.phi = u - H, c.value === qe.AREA_0 ? e.lam = -o + H : c.value === qe.AREA_1 ? e.lam = -o : c.value === qe.AREA_2 ? e.lam = -o - H : e.lam = o < 0 ? -o - gt : -o + gt;
  else {
    var h, d, p;
    h = l, f = h * h, f >= 1 ? p = 0 : p = Math.sqrt(1 - f) * Math.sin(o), f += p * p, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === qe.AREA_1 ? (f = d, d = -p, p = f) : c.value === qe.AREA_2 ? (d = -d, p = -p) : c.value === qe.AREA_3 && (f = d, d = p, p = -f), this.face === ot.RIGHT ? (f = h, h = -d, d = f) : this.face === ot.BACK ? (h = -h, d = -d) : this.face === ot.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-p) - H, e.lam = Math.atan2(d, h), this.face === ot.RIGHT ? e.lam = na(e.lam, -H) : this.face === ot.BACK ? e.lam = na(e.lam, -gt) : this.face === ot.LEFT && (e.lam = na(e.lam, +H));
  }
  if (this.es !== 0) {
    var m, g, v;
    m = e.phi < 0 ? 1 : 0, g = Math.tan(e.phi), v = this.b / Math.sqrt(g * g + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - v * v) / (this.one_minus_f * v)), m && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function ml(t, e, r, n) {
  var i;
  return t < te ? (n.value = qe.AREA_0, i = 0) : (i = Math.atan2(e, r), Math.abs(i) <= We ? n.value = qe.AREA_0 : i > We && i <= H + We ? (n.value = qe.AREA_1, i -= H) : i > H + We || i <= -(H + We) ? (n.value = qe.AREA_2, i = i >= 0 ? i - gt : i + gt) : (n.value = qe.AREA_3, i += H)), i;
}
function na(t, e) {
  var r = t + e;
  return r < -gt ? r += vo : r > +gt && (r -= vo), r;
}
var zC = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const YC = {
  init: WC,
  forward: qC,
  inverse: HC,
  names: zC
};
var $h = [
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
], Ga = [
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
], zb = 0.8487, Yb = 1.3523, Kb = mn / 5, KC = 1 / Kb, zs = 18, Pu = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, XC = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function ZC(t, e, r, n) {
  for (var i = e; n; --n) {
    var s = t(i);
    if (i -= s, Math.abs(s) < r)
      break;
  }
  return i;
}
function JC() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function QC(t) {
  var e = se(t.x - this.long0), r = Math.abs(t.y), n = Math.floor(r * Kb);
  n < 0 ? n = 0 : n >= zs && (n = zs - 1), r = mn * (r - KC * n);
  var i = {
    x: Pu($h[n], r) * e,
    y: Pu(Ga[n], r)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * zb + this.x0, i.y = i.y * this.a * Yb + this.y0, i;
}
function eP(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * zb),
    y: Math.abs(t.y - this.y0) / (this.a * Yb)
  };
  if (e.y >= 1)
    e.x /= $h[zs][0], e.y = t.y < 0 ? -H : H;
  else {
    var r = Math.floor(e.y * zs);
    for (r < 0 ? r = 0 : r >= zs && (r = zs - 1); ; )
      if (Ga[r][0] > e.y)
        --r;
      else if (Ga[r + 1][0] <= e.y)
        ++r;
      else
        break;
    var n = Ga[r], i = 5 * (e.y - n[0]) / (Ga[r + 1][0] - n[0]);
    i = ZC(function(s) {
      return (Pu(n, s) - e.y) / XC(n, s);
    }, i, te, 100), e.x /= Pu($h[r], i), e.y = (5 * r + i) * It, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var tP = ["Robinson", "robin"];
const rP = {
  init: JC,
  forward: QC,
  inverse: eP,
  names: tP
};
function nP() {
  this.name = "geocent";
}
function iP(t) {
  var e = kb(t, this.es, this.a);
  return e;
}
function sP(t) {
  var e = Db(t, this.es, this.a, this.b);
  return e;
}
var aP = ["Geocentric", "geocentric", "geocent", "Geocent"];
const oP = {
  init: nP,
  forward: iP,
  inverse: sP,
  names: aP
};
var Ut = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, Na = {
  h: { def: 1e5, num: !0 },
  azi: { def: 0, num: !0, degrees: !0 },
  tilt: { def: 0, num: !0, degrees: !0 },
  long0: { def: 0, num: !0 },
  lat0: { def: 0, num: !0 }
};
function lP() {
  if (Object.keys(Na).forEach(function(r) {
    if (typeof this[r] > "u")
      this[r] = Na[r].def;
    else {
      if (Na[r].num && isNaN(this[r]))
        throw new Error("Invalid parameter value, must be numeric " + r + " = " + this[r]);
      Na[r].num && (this[r] = parseFloat(this[r]));
    }
    Na[r].degrees && (this[r] = this[r] * It);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - H) < te ? this.mode = this.lat0 < 0 ? Ut.S_POLE : Ut.N_POLE : Math.abs(this.lat0) < te ? this.mode = Ut.EQUIT : (this.mode = Ut.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function uP(t) {
  t.x -= this.long0;
  var e = Math.sin(t.y), r = Math.cos(t.y), n = Math.cos(t.x), i, s;
  switch (this.mode) {
    case Ut.OBLIQ:
      s = this.sinph0 * e + this.cosph0 * r * n;
      break;
    case Ut.EQUIT:
      s = r * n;
      break;
    case Ut.S_POLE:
      s = -e;
      break;
    case Ut.N_POLE:
      s = e;
      break;
  }
  switch (s = this.pn1 / (this.p - s), i = s * r * Math.sin(t.x), this.mode) {
    case Ut.OBLIQ:
      s *= this.cosph0 * e - this.sinph0 * r * n;
      break;
    case Ut.EQUIT:
      s *= e;
      break;
    case Ut.N_POLE:
      s *= -(r * n);
      break;
    case Ut.S_POLE:
      s *= r * n;
      break;
  }
  var a, o;
  return a = s * this.cg + i * this.sg, o = 1 / (a * this.sw * this.h1 + this.cw), i = (i * this.cg - s * this.sg) * this.cw * o, s = a * o, t.x = i * this.a, t.y = s * this.a, t;
}
function cP(t) {
  t.x /= this.a, t.y /= this.a;
  var e = { x: t.x, y: t.y }, r, n, i;
  i = 1 / (this.pn1 - t.y * this.sw), r = this.pn1 * t.x * i, n = this.pn1 * t.y * this.cw * i, t.x = r * this.cg + n * this.sg, t.y = n * this.cg - r * this.sg;
  var s = Nr(t.x, t.y);
  if (Math.abs(s) < te)
    e.x = 0, e.y = t.y;
  else {
    var a, o;
    switch (o = 1 - s * s * this.pfact, o = (this.p - Math.sqrt(o)) / (this.pn1 / s + s / this.pn1), a = Math.sqrt(1 - o * o), this.mode) {
      case Ut.OBLIQ:
        e.y = Math.asin(a * this.sinph0 + t.y * o * this.cosph0 / s), t.y = (a - this.sinph0 * Math.sin(e.y)) * s, t.x *= o * this.cosph0;
        break;
      case Ut.EQUIT:
        e.y = Math.asin(t.y * o / s), t.y = a * s, t.x *= o;
        break;
      case Ut.N_POLE:
        e.y = Math.asin(a), t.y = -t.y;
        break;
      case Ut.S_POLE:
        e.y = -Math.asin(a);
        break;
    }
    e.x = Math.atan2(t.x, t.y);
  }
  return t.x = e.x + this.long0, t.y = e.y, t;
}
var fP = ["Tilted_Perspective", "tpers"];
const hP = {
  init: lP,
  forward: uP,
  inverse: cP,
  names: fP
};
function dP() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, e = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = e, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function pP(t) {
  var e = t.x, r = t.y, n, i, s, a;
  if (e = e - this.long0, this.shape === "ellipse") {
    r = Math.atan(this.radius_p2 * Math.tan(r));
    var o = this.radius_p / Nr(this.radius_p * Math.cos(r), Math.sin(r));
    if (i = o * Math.cos(e) * Math.cos(r), s = o * Math.sin(e) * Math.cos(r), a = o * Math.sin(r), (this.radius_g - i) * i - s * s - a * a * this.radius_p_inv2 < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    n = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Nr(a, n)), t.y = this.radius_g_1 * Math.atan(a / n)) : (t.x = this.radius_g_1 * Math.atan(s / n), t.y = this.radius_g_1 * Math.atan(a / Nr(s, n)));
  } else
    this.shape === "sphere" && (n = Math.cos(r), i = Math.cos(e) * n, s = Math.sin(e) * n, a = Math.sin(r), n = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Nr(a, n)), t.y = this.radius_g_1 * Math.atan(a / n)) : (t.x = this.radius_g_1 * Math.atan(s / n), t.y = this.radius_g_1 * Math.atan(a / Nr(s, n))));
  return t.x = t.x * this.a, t.y = t.y * this.a, t;
}
function mP(t) {
  var e = -1, r = 0, n = 0, i, s, a, o;
  if (t.x = t.x / this.a, t.y = t.y / this.a, this.shape === "ellipse") {
    this.flip_axis ? (n = Math.tan(t.y / this.radius_g_1), r = Math.tan(t.x / this.radius_g_1) * Nr(1, n)) : (r = Math.tan(t.x / this.radius_g_1), n = Math.tan(t.y / this.radius_g_1) * Nr(1, r));
    var l = n / this.radius_p;
    if (i = r * r + l * l + e * e, s = 2 * this.radius_g * e, a = s * s - 4 * i * this.C, a < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    o = (-s - Math.sqrt(a)) / (2 * i), e = this.radius_g + o * e, r *= o, n *= o, t.x = Math.atan2(r, e), t.y = Math.atan(n * Math.cos(t.x) / e), t.y = Math.atan(this.radius_p_inv2 * Math.tan(t.y));
  } else if (this.shape === "sphere") {
    if (this.flip_axis ? (n = Math.tan(t.y / this.radius_g_1), r = Math.tan(t.x / this.radius_g_1) * Math.sqrt(1 + n * n)) : (r = Math.tan(t.x / this.radius_g_1), n = Math.tan(t.y / this.radius_g_1) * Math.sqrt(1 + r * r)), i = r * r + n * n + e * e, s = 2 * this.radius_g * e, a = s * s - 4 * i * this.C, a < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    o = (-s - Math.sqrt(a)) / (2 * i), e = this.radius_g + o * e, r *= o, n *= o, t.x = Math.atan2(r, e), t.y = Math.atan(n * Math.cos(t.x) / e);
  }
  return t.x = t.x + this.long0, t;
}
var gP = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const yP = {
  init: dP,
  forward: pP,
  inverse: mP,
  names: gP
};
var eo = 1.340264, to = -0.081106, ro = 893e-6, no = 3796e-6, Lu = Math.sqrt(3) / 2;
function vP() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function bP(t) {
  var e = se(t.x - this.long0), r = t.y, n = Math.asin(Lu * Math.sin(r)), i = n * n, s = i * i * i;
  return t.x = e * Math.cos(n) / (Lu * (eo + 3 * to * i + s * (7 * ro + 9 * no * i))), t.y = n * (eo + to * i + s * (ro + no * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function _P(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var e = 1e-9, r = 12, n = t.y, i, s, a, o, l, u;
  for (u = 0; u < r && (i = n * n, s = i * i * i, a = n * (eo + to * i + s * (ro + no * i)) - t.y, o = eo + 3 * to * i + s * (7 * ro + 9 * no * i), n -= l = a / o, !(Math.abs(l) < e)); ++u)
    ;
  return i = n * n, s = i * i * i, t.x = Lu * t.x * (eo + 3 * to * i + s * (7 * ro + 9 * no * i)) / Math.cos(n), t.y = Math.asin(Math.sin(n) / Lu), t.x = se(t.x + this.long0), t;
}
var EP = ["eqearth", "Equal Earth", "Equal_Earth"];
const SP = {
  init: vP,
  forward: bP,
  inverse: _P,
  names: EP
};
function wP(t) {
  t.Proj.projections.add(eu), t.Proj.projections.add(tu), t.Proj.projections.add(ON), t.Proj.projections.add(kN), t.Proj.projections.add(jN), t.Proj.projections.add(qN), t.Proj.projections.add(ZN), t.Proj.projections.add(r2), t.Proj.projections.add(o2), t.Proj.projections.add(h2), t.Proj.projections.add(C2), t.Proj.projections.add(D2), t.Proj.projections.add(j2), t.Proj.projections.add(H2), t.Proj.projections.add(Z2), t.Proj.projections.add(rC), t.Proj.projections.add(oC), t.Proj.projections.add(hC), t.Proj.projections.add(vC), t.Proj.projections.add(wC), t.Proj.projections.add(NC), t.Proj.projections.add(IC), t.Proj.projections.add(FC), t.Proj.projections.add(BC), t.Proj.projections.add(YC), t.Proj.projections.add(rP), t.Proj.projections.add(oP), t.Proj.projections.add(hP), t.Proj.projections.add(yP), t.Proj.projections.add(SP);
}
qt.defaultDatum = "WGS84";
qt.Proj = _n;
qt.WGS84 = new qt.Proj("WGS84");
qt.Point = fa;
qt.toPoint = Rb;
qt.defs = Xt;
qt.nadgrid = MT;
qt.transform = Nu;
qt.mgrs = UT;
qt.version = "__VERSION__";
wP(qt);
function OP() {
  var t, e, r;
  qt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), qt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), qt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), eS(qt), (t = jl("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = jl("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (r = jl("EPSG:2169")) == null || r.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function xP(t, e, r) {
  const n = fe(t);
  class i extends Wd {
    constructor(a) {
      super(n, a, e, r);
    }
  }
  return st(i, "def", n), i;
}
const MP = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Wd extends MP {
  constructor(r, n = {}, i = {}, s) {
    super();
    st(this, "_instance", null);
    st(this, "_connected", !1);
    st(this, "_resolved", !1);
    st(this, "_numberProps", null);
    st(this, "_styles");
    st(this, "_slots");
    this._def = r, this._props = n, this._config = i, this._config = Qe(
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
    this._connected = !1, gu(() => {
      this._connected || ($m(null, this._root), this._instance = null);
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
    const r = (i, s = !1) => {
      const { props: a, styles: o } = i;
      let l;
      if (a && !le(a))
        for (const u in a) {
          const f = a[u];
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = ah(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[vr(u)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => r(i, !0)) : r(this._def);
  }
  _resolveProps(r) {
    const { props: n } = r, i = le(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(vr))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(a) {
          this._setProp(s, a);
        }
      });
  }
  _setAttr(r) {
    let n = this.getAttribute(r);
    const i = vr(r);
    this._numberProps && this._numberProps[i] && (n = ah(n)), this._setProp(i, n, !1);
  }
  _getProp(r) {
    return this._props[r];
  }
  _setProp(r, n, i = !0, s = !0) {
    n !== this._props[r] && (this._props[r] = n, s && this._instance && this._update(), i && (n === !0 ? this.setAttribute(lr(r), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(lr(r), n + "") : n || this.removeAttribute(lr(r))));
  }
  _update() {
    $m(this._createVNode(), this._root);
  }
  _createVNode() {
    const r = ie(this._def, Qe({}, this._props));
    return this._instance || (r.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const i = (a, o) => {
        this.dispatchEvent(
          new CustomEvent(a, {
            detail: o
          })
        );
      };
      n.emit = (a, ...o) => {
        i(a, o), lr(a) !== a && i(lr(a), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Wd) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), r;
  }
  _applyStyles(r) {
    r && r.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this._root.appendChild(i);
    });
  }
}
var Eo = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(Eo || {});
const TP = Eo.INFO, NP = 7e3, CP = 4e3, Au = ws(
  "alert-notifications",
  () => {
    const t = we([]);
    function e(n, i = TP, s) {
      const a = {
        message: n,
        type: i,
        duration: s != null ? s : i === Eo.WARNING ? CP : NP
      };
      t.value.push(a);
    }
    function r(n) {
      t.value.splice(n, 1);
    }
    return {
      notifications: t,
      addNotification: e,
      removeNotification: r
    };
  },
  {}
), PP = /* @__PURE__ */ fe({
  __name: "notification-item",
  props: {
    notification: { type: Object, required: !0 }
  },
  emits: ["close"],
  setup(t) {
    const e = t, r = tt(!0);
    function n(i, s) {
      setTimeout(() => {
        r.value = !1;
      }, e.notification.duration), s();
    }
    return (i, s) => {
      const a = Cd("dompurify-html");
      return A(), Ue(_c, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: n,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: Ti(() => [
          r.value ? bu((A(), G("div", {
            key: 0,
            class: Ae(["lux-alert", `lux-${e.notification.type}`]),
            role: "alert"
          }, null, 2)), [
            [a, e.notification.message]
          ]) : F("v-if", !0)
        ]),
        _: 1
      });
    };
  }
}), me = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, LP = /* @__PURE__ */ me(PP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/alert-notifications/notification-item.vue"]]), AP = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, IP = /* @__PURE__ */ fe({
  __name: "alert-notifications",
  setup(t) {
    const e = Au(), { notifications: r } = He(e);
    function n(i) {
      e.removeNotification(i);
    }
    return (i, s) => (A(), Ue(Q0, { to: "body" }, [
      O(r).length ? (A(), G("div", AP, [
        (A(!0), G(Ge, null, kr(O(r), (a, o) => (A(), Ue(LP, {
          key: o,
          notification: a,
          onClose: () => n(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : F("v-if", !0)
    ]));
  }
}), kP = /* @__PURE__ */ me(IP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/alert-notifications/alert-notifications.vue"]]), DP = { class: "lux-dropdown" }, RP = { class: "h-full" }, $P = ["aria-expanded"], FP = /* @__PURE__ */ P("span", { class: "lux-caret" }, null, -1), VP = { class: "lux-dropdown-wrapper" }, jP = ["aria-label", "data-value"], GP = /* @__PURE__ */ fe({
  __name: "dropdown-list",
  props: {
    placeholder: { type: String, required: !0 },
    options: { type: Array, required: !0, default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = tt(!1), s = tt();
    function a(f) {
      i.value = f === void 0 ? !i.value : f;
    }
    function o(f) {
      f.stopImmediatePropagation(), a();
    }
    function l(f) {
      s.value = f.target.dataset.value, n("change", s.value);
    }
    function u() {
      a(!1);
    }
    return Er(() => document.addEventListener("click", u)), Fi(() => document.removeEventListener("click", u)), (f, c) => {
      var h, d;
      return A(), G("div", DP, [
        P("div", RP, [
          P("button", {
            type: "button",
            class: Ae(["lux-btn lux-dropdown-btn", i.value ? "expanded" : ""]),
            "aria-expanded": i.value,
            "aria-haspopup": "true",
            onClick: o
          }, [
            P("span", null, oe((d = r.placeholder) != null ? d : (h = r.options[0]) == null ? void 0 : h.label), 1),
            FP
          ], 10, $P)
        ]),
        P("div", VP, [
          P("ul", {
            class: Ae(["lux-dropdown-list", i.value ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (A(!0), G(Ge, null, kr(r.options, (p) => (A(), G("li", {
              key: p.value,
              class: Ae(f.modelValue === p.value ? "selected" : "")
            }, [
              P("button", {
                class: "lux-dropdown-list-item",
                "aria-label": p.ariaLabel,
                "data-value": p.value,
                onClick: l
              }, oe(p.label), 9, jP)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), Xb = /* @__PURE__ */ me(GP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/dropdown-list.vue"]]), io = "EPSG:3857", Zb = "EPSG:4326", UP = "EPSG:2169";
let lf;
const pg = tt();
function qn() {
  function t() {
    return lf;
  }
  function e() {
    return pg.value = lf = new tS({
      view: new rS({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), lf;
  }
  function r(f, c) {
    return f.id === c.id;
  }
  function n(f, c) {
    return f === c;
  }
  function i(f, c) {
    var h;
    return (h = f.layers) == null ? void 0 : h.some((d) => r(d, c));
  }
  function s(f, c) {
    var d;
    const h = (d = f == null ? void 0 : f.layers) == null ? void 0 : d.find((p) => r(p, c));
    return !n(h, c);
  }
  function a(f, c) {
    return !(c === null || !("layers" in f) || !("layers" in c) || typeof c.layers > "u" || typeof f.layers > "u" || f.layers === c.layers);
  }
  function o(f, c) {
    return !("layers" in f) || typeof f.layers > "u" ? [] : c === null || !("layers" in c) ? f.layers.map((h, d) => ({ layer: h, position: d })) : f.layers === c.layers ? [] : f.layers.reduce(
      (h, d, p) => i(c, d) ? h : [
        ...h,
        {
          layer: d,
          position: p
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
    olMap: pg,
    getOlMap: t,
    createMap: e,
    equalsLayer: r,
    hasLayer: i,
    layerHasChanged: s,
    contextHasChanged: a,
    getAddedLayers: o,
    getRemovedLayers: l,
    getMutatedLayers: u
  };
}
const Ca = /* @__PURE__ */ new Map();
function Ar(t) {
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ar(t);
}
function Pn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function BP(t, e) {
  if (Ar(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Ar(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Jb(t) {
  var e = BP(t, "string");
  return Ar(e) == "symbol" ? e : e + "";
}
function mg(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Jb(n.key), n);
  }
}
function Ln(t, e, r) {
  return e && mg(t.prototype, e), r && mg(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Pi(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Fh(t, e) {
  return Fh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fh(t, e);
}
function Oc(t, e) {
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
  }), e && Fh(t, e);
}
function jo(t, e) {
  if (e && (Ar(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pi(t);
}
function Nn(t) {
  return Nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nn(t);
}
function Vi(t, e, r) {
  return e = Jb(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function WP(t) {
  if (Array.isArray(t))
    return t;
}
function qP(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function gg(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function HP(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return gg(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gg(t, e);
  }
}
function zP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YP(t) {
  return WP(t) || qP(t) || HP(t) || zP();
}
function yg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var KP = {
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
  output: function(e, r) {
    console && console[e] && console[e].apply(console, r);
  }
}, XP = function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Pn(this, t), this.init(e, r);
  }
  return Ln(t, [{
    key: "init",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = n.prefix || "i18next:", this.logger = r || KP, this.options = n, this.debug = n.debug;
    }
  }, {
    key: "setDebug",
    value: function(r) {
      this.debug = r;
    }
  }, {
    key: "log",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      return this.forward(n, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      return this.forward(n, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      return this.forward(n, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(r, n, i, s) {
      return s && !this.debug ? null : (typeof r[0] == "string" && (r[0] = "".concat(i).concat(this.prefix, " ").concat(r[0])), this.logger[n](r));
    }
  }, {
    key: "create",
    value: function(r) {
      return new t(this.logger, vg(vg({}, {
        prefix: "".concat(this.prefix, ":").concat(r, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(r) {
      return r = r || this.options, r.prefix = r.prefix || this.prefix, new t(this.logger, r);
    }
  }]), t;
}(), gn = new XP(), Di = function() {
  function t() {
    Pn(this, t), this.observers = {};
  }
  return Ln(t, [{
    key: "on",
    value: function(r, n) {
      var i = this;
      return r.split(" ").forEach(function(s) {
        i.observers[s] = i.observers[s] || [], i.observers[s].push(n);
      }), this;
    }
  }, {
    key: "off",
    value: function(r, n) {
      if (!!this.observers[r]) {
        if (!n) {
          delete this.observers[r];
          return;
        }
        this.observers[r] = this.observers[r].filter(function(i) {
          return i !== n;
        });
      }
    }
  }, {
    key: "emit",
    value: function(r) {
      for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
        i[s - 1] = arguments[s];
      if (this.observers[r]) {
        var a = [].concat(this.observers[r]);
        a.forEach(function(l) {
          l.apply(void 0, i);
        });
      }
      if (this.observers["*"]) {
        var o = [].concat(this.observers["*"]);
        o.forEach(function(l) {
          l.apply(l, [r].concat(i));
        });
      }
    }
  }]), t;
}();
function Pa() {
  var t, e, r = new Promise(function(n, i) {
    t = n, e = i;
  });
  return r.resolve = t, r.reject = e, r;
}
function bg(t) {
  return t == null ? "" : "" + t;
}
function ZP(t, e, r) {
  t.forEach(function(n) {
    e[n] && (r[n] = e[n]);
  });
}
function qd(t, e, r) {
  function n(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function i() {
    return !t || typeof t == "string";
  }
  for (var s = typeof e != "string" ? [].concat(e) : e.split("."); s.length > 1; ) {
    if (i())
      return {};
    var a = n(s.shift());
    !t[a] && r && (t[a] = new r()), Object.prototype.hasOwnProperty.call(t, a) ? t = t[a] : t = {};
  }
  return i() ? {} : {
    obj: t,
    k: n(s.shift())
  };
}
function _g(t, e, r) {
  var n = qd(t, e, Object), i = n.obj, s = n.k;
  i[s] = r;
}
function JP(t, e, r, n) {
  var i = qd(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], n && (s[a] = s[a].concat(r)), n || s[a].push(r);
}
function Iu(t, e) {
  var r = qd(t, e), n = r.obj, i = r.k;
  if (!!n)
    return n[i];
}
function QP(t, e, r) {
  var n = Iu(t, r);
  return n !== void 0 ? n : Iu(e, r);
}
function Qb(t, e, r) {
  for (var n in e)
    n !== "__proto__" && n !== "constructor" && (n in t ? typeof t[n] == "string" || t[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? r && (t[n] = e[n]) : Qb(t[n], e[n], r) : t[n] = e[n]);
  return t;
}
function As(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var eL = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function tL(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return eL[e];
  }) : t;
}
var xc = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, rL = [" ", ",", "?", "!", ";"];
function nL(t, e, r) {
  e = e || "", r = r || "";
  var n = rL.filter(function(o) {
    return e.indexOf(o) < 0 && r.indexOf(o) < 0;
  });
  if (n.length === 0)
    return !0;
  var i = new RegExp("(".concat(n.map(function(o) {
    return o === "?" ? "\\?" : o;
  }).join("|"), ")")), s = !i.test(t);
  if (!s) {
    var a = t.indexOf(r);
    a > 0 && !i.test(t.substring(0, a)) && (s = !0);
  }
  return s;
}
function ku(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!!t) {
    if (t[e])
      return t[e];
    for (var n = e.split(r), i = t, s = 0; s < n.length; ++s) {
      if (!i || typeof i[n[s]] == "string" && s + 1 < n.length)
        return;
      if (i[n[s]] === void 0) {
        for (var a = 2, o = n.slice(s, s + a).join(r), l = i[o]; l === void 0 && n.length > s + a; )
          a++, o = n.slice(s, s + a).join(r), l = i[o];
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
        var u = n.slice(s + a).join(r);
        return u ? ku(l, u, r) : void 0;
      }
      i = i[n[s]];
    }
    return i;
  }
}
function Eg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Eg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function iL(t) {
  var e = sL();
  return function() {
    var n = Nn(t), i;
    if (e) {
      var s = Nn(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return jo(this, i);
  };
}
function sL() {
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
var aL = function(t) {
  Oc(r, t);
  var e = iL(r);
  function r(n) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return Pn(this, r), i = e.call(this), xc && Di.call(Pi(i)), i.data = n || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return Ln(r, [{
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
      var c = Iu(this.data, f);
      return c || !u || typeof a != "string" ? c : ku(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), _g(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
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
      var c = Iu(this.data, f) || {};
      o ? Qb(c, a, l) : c = gl(gl({}, c), a), _g(this.data, f, c), u.silent || this.emit("added", i, s, a);
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
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? gl(gl({}, {}), this.getResource(i, s)) : this.getResource(i, s);
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
  }]), r;
}(Di), e_ = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, r, n, i, s) {
    var a = this;
    return e.forEach(function(o) {
      a.processors[o] && (r = a.processors[o].process(r, n, i, s));
    }), r;
  }
};
function Sg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function oL(t) {
  var e = lL();
  return function() {
    var n = Nn(t), i;
    if (e) {
      var s = Nn(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return jo(this, i);
  };
}
function lL() {
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
var wg = {}, Og = function(t) {
  Oc(r, t);
  var e = oL(r);
  function r(n) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Pn(this, r), i = e.call(this), xc && Di.call(Pi(i)), ZP(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, Pi(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = gn.create("translator"), i;
  }
  return Ln(r, [{
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
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !nL(i, a, o);
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
      if (Ar(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), Ar(s) === "object" && (s = Vt({}, s)), s || (s = {}), i == null)
        return "";
      Array.isArray(i) || (i = [String(i)]);
      var l = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, f = this.extractFromKey(i[i.length - 1], s), c = f.key, h = f.namespaces, d = h[h.length - 1], p = s.lng || this.language, m = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (p && p.toLowerCase() === "cimode") {
        if (m) {
          var g = s.nsSeparator || this.options.nsSeparator;
          return l ? {
            res: "".concat(d).concat(g).concat(c),
            usedKey: c,
            exactUsedKey: c,
            usedLng: p,
            usedNS: d
          } : "".concat(d).concat(g).concat(c);
        }
        return l ? {
          res: c,
          usedKey: c,
          exactUsedKey: c,
          usedLng: p,
          usedNS: d
        } : c;
      }
      var v = this.resolve(i, s), y = v && v.res, _ = v && v.usedKey || c, E = v && v.exactUsedKey || c, x = Object.prototype.toString.apply(y), N = ["[object Number]", "[object Function]", "[object RegExp]"], M = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, D = typeof y != "string" && typeof y != "boolean" && typeof y != "number";
      if (L && y && D && N.indexOf(x) < 0 && !(typeof M == "string" && x === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var C = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(_, y, Vt(Vt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (v.res = C, v) : C;
        }
        if (u) {
          var R = x === "[object Array]", k = R ? [] : {}, Q = R ? E : _;
          for (var ve in y)
            if (Object.prototype.hasOwnProperty.call(y, ve)) {
              var T = "".concat(Q).concat(u).concat(ve);
              k[ve] = this.translate(T, Vt(Vt({}, s), {
                joinArrays: !1,
                ns: h
              })), k[ve] === T && (k[ve] = y[ve]);
            }
          y = k;
        }
      } else if (L && typeof M == "string" && x === "[object Array]")
        y = y.join(M), y && (y = this.extendTranslation(y, i, s, a));
      else {
        var $ = !1, z = !1, X = s.count !== void 0 && typeof s.count != "string", Ce = r.hasDefaultValue(s), Le = X ? this.pluralResolver.getSuffix(p, s.count, s) : "", dt = s["defaultValue".concat(Le)] || s.defaultValue;
        !this.isValidLookup(y) && Ce && ($ = !0, y = dt), this.isValidLookup(y) || (z = !0, y = c);
        var Rt = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Te = Rt && z ? void 0 : y, Ct = Ce && dt !== y && this.options.updateMissing;
        if (z || $ || Ct) {
          if (this.logger.log(Ct ? "updateKey" : "missingKey", p, d, c, Ct ? dt : y), u) {
            var it = this.resolve(c, Vt(Vt({}, s), {}, {
              keySeparator: !1
            }));
            it && it.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var nn = [], ke = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && ke && ke[0])
            for (var tr = 0; tr < ke.length; tr++)
              nn.push(ke[tr]);
          else
            this.options.saveMissingTo === "all" ? nn = this.languageUtils.toResolveHierarchy(s.lng || this.language) : nn.push(s.lng || this.language);
          var sn = function(Pt, an, In) {
            var b = Ce && In !== y ? In : Te;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Pt, d, an, b, Ct, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Pt, d, an, b, Ct, s), o.emit("missingKey", Pt, d, an, y);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && X ? nn.forEach(function(An) {
            o.pluralResolver.getSuffixes(An, s).forEach(function(Pt) {
              sn([An], c + Pt, s["defaultValue".concat(Pt)] || dt);
            });
          }) : sn(nn, c, dt));
        }
        y = this.extendTranslation(y, i, s, v, a), z && y === c && this.options.appendNamespaceToMissingKey && (y = "".concat(d, ":").concat(c)), (z || $) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? y = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(d, ":").concat(c) : c, $ ? y : void 0) : y = this.options.parseMissingKeyHandler(y));
      }
      return l ? (v.res = y, v) : y;
    }
  }, {
    key: "extendTranslation",
    value: function(i, s, a, o, l) {
      var u = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        i = this.i18nFormat.parse(i, Vt(Vt({}, this.options.interpolation.defaultVariables), a), o.usedLng, o.usedNS, o.usedKey, {
          resolved: o
        });
      else if (!a.skipInterpolation) {
        a.interpolation && this.interpolator.init(Vt(Vt({}, a), {
          interpolation: Vt(Vt({}, this.options.interpolation), a.interpolation)
        }));
        var f = typeof i == "string" && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), c;
        if (f) {
          var h = i.match(this.interpolator.nestingRegexp);
          c = h && h.length;
        }
        var d = a.replace && typeof a.replace != "string" ? a.replace : a;
        if (this.options.interpolation.defaultVariables && (d = Vt(Vt({}, this.options.interpolation.defaultVariables), d)), i = this.interpolator.interpolate(i, d, a.lng || this.language, a), f) {
          var p = i.match(this.interpolator.nestingRegexp), m = p && p.length;
          c < m && (a.nest = !1);
        }
        !a.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (a.lng = o.usedLng), a.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var y = arguments.length, _ = new Array(y), E = 0; E < y; E++)
            _[E] = arguments[E];
          return l && l[0] === _[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(_[0], " in key: ").concat(s[0])), null) : u.translate.apply(u, _.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var g = a.postProcess || this.options.postProcess, v = typeof g == "string" ? [g] : g;
      return i != null && v && v.length && a.applyPostProcessor !== !1 && (i = e_.handle(v, i, s, this.options && this.options.postProcessPassResolved ? Vt({
        i18nResolved: o
      }, a) : a, this)), i;
    }
  }, {
    key: "resolve",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, l, u, f, c;
      return typeof i == "string" && (i = [i]), i.forEach(function(h) {
        if (!s.isValidLookup(o)) {
          var d = s.extractFromKey(h, a), p = d.key;
          l = p;
          var m = d.namespaces;
          s.options.fallbackNS && (m = m.concat(s.options.fallbackNS));
          var g = a.count !== void 0 && typeof a.count != "string", v = g && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), y = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", _ = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          m.forEach(function(E) {
            s.isValidLookup(o) || (c = E, !wg["".concat(_[0], "-").concat(E)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (wg["".concat(_[0], "-").concat(E)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(_.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach(function(x) {
              if (!s.isValidLookup(o)) {
                f = x;
                var N = [p];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(N, p, x, E, a);
                else {
                  var M;
                  g && (M = s.pluralResolver.getSuffix(x, a.count, a));
                  var L = "".concat(s.options.pluralSeparator, "zero");
                  if (g && (N.push(p + M), v && N.push(p + L)), y) {
                    var D = "".concat(p).concat(s.options.contextSeparator).concat(a.context);
                    N.push(D), g && (N.push(D + M), v && N.push(D + L));
                  }
                }
                for (var C; C = N.pop(); )
                  s.isValidLookup(o) || (u = C, o = s.getResource(x, E, C, a));
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
  }]), r;
}(Di);
function uf(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var xg = function() {
  function t(e) {
    Pn(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = gn.create("languageUtils");
  }
  return Ln(t, [{
    key: "getScriptPartFromCode",
    value: function(r) {
      if (!r || r.indexOf("-") < 0)
        return null;
      var n = r.split("-");
      return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(r) {
      if (!r || r.indexOf("-") < 0)
        return r;
      var n = r.split("-");
      return this.formatLanguageCode(n[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(r) {
      if (typeof r == "string" && r.indexOf("-") > -1) {
        var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], i = r.split("-");
        return this.options.lowerCaseLng ? i = i.map(function(s) {
          return s.toLowerCase();
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), n.indexOf(i[1].toLowerCase()) > -1 && (i[1] = uf(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), n.indexOf(i[1].toLowerCase()) > -1 && (i[1] = uf(i[1].toLowerCase())), n.indexOf(i[2].toLowerCase()) > -1 && (i[2] = uf(i[2].toLowerCase()))), i.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
    }
  }, {
    key: "isSupportedCode",
    value: function(r) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function(r) {
      var n = this;
      if (!r)
        return null;
      var i;
      return r.forEach(function(s) {
        if (!i) {
          var a = n.formatLanguageCode(s);
          (!n.options.supportedLngs || n.isSupportedCode(a)) && (i = a);
        }
      }), !i && this.options.supportedLngs && r.forEach(function(s) {
        if (!i) {
          var a = n.getLanguagePartFromCode(s);
          if (n.isSupportedCode(a))
            return i = a;
          i = n.options.supportedLngs.find(function(o) {
            if (o === a)
              return o;
            if (!(o.indexOf("-") < 0 && a.indexOf("-") < 0) && o.indexOf(a) === 0)
              return o;
          });
        }
      }), i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]), i;
    }
  }, {
    key: "getFallbackCodes",
    value: function(r, n) {
      if (!r)
        return [];
      if (typeof r == "function" && (r = r(n)), typeof r == "string" && (r = [r]), Object.prototype.toString.apply(r) === "[object Array]")
        return r;
      if (!n)
        return r.default || [];
      var i = r[n];
      return i || (i = r[this.getScriptPartFromCode(n)]), i || (i = r[this.formatLanguageCode(n)]), i || (i = r[this.getLanguagePartFromCode(n)]), i || (i = r.default), i || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(r, n) {
      var i = this, s = this.getFallbackCodes(n || this.options.fallbackLng || [], r), a = [], o = function(u) {
        !u || (i.isSupportedCode(u) ? a.push(u) : i.logger.warn("rejecting language code not found in supportedLngs: ".concat(u)));
      };
      return typeof r == "string" && r.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(r))) : typeof r == "string" && o(this.formatLanguageCode(r)), s.forEach(function(l) {
        a.indexOf(l) < 0 && o(i.formatLanguageCode(l));
      }), a;
    }
  }]), t;
}(), uL = [{
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
}], cL = {
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
}, fL = ["v1", "v2", "v3"], Mg = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function hL() {
  var t = {};
  return uL.forEach(function(e) {
    e.lngs.forEach(function(r) {
      t[r] = {
        numbers: e.nr,
        plurals: cL[e.fc]
      };
    });
  }), t;
}
var dL = function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Pn(this, t), this.languageUtils = e, this.options = r, this.logger = gn.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = hL();
  }
  return Ln(t, [{
    key: "addRule",
    value: function(r, n) {
      this.rules[r] = n;
    }
  }, {
    key: "getRule",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(r, {
            type: n.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
    }
  }, {
    key: "needsPlural",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(r, n);
      return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(r, n) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(r, i).map(function(s) {
        return "".concat(n).concat(s);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(r, i);
      return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort(function(a, o) {
        return Mg[a] - Mg[o];
      }).map(function(a) {
        return "".concat(n.options.prepend).concat(a);
      }) : s.numbers.map(function(a) {
        return n.getSuffix(r, a, i);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(r, n) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = this.getRule(r, i);
      return s ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(s.select(n)) : this.getSuffixRetroCompatible(s, n) : (this.logger.warn("no plural rule found for: ".concat(r)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(r, n) {
      var i = this, s = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n)), a = r.numbers[s];
      this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
      var o = function() {
        return i.options.prepend && a.toString() ? i.options.prepend + a.toString() : a.toString();
      };
      return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? "_plural_".concat(a.toString()) : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? o() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !fL.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function Tg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Tg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ng(t, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = QP(t, e, r);
  return !s && i && typeof r == "string" && (s = ku(t, r, n), s === void 0 && (s = ku(e, r, n))), s;
}
var pL = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pn(this, t), this.logger = gn.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(r) {
      return r;
    }, this.init(e);
  }
  return Ln(t, [{
    key: "init",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      r.interpolation || (r.interpolation = {
        escapeValue: !0
      });
      var n = r.interpolation;
      this.escape = n.escape !== void 0 ? n.escape : tL, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? As(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? As(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? As(n.nestingPrefix) : n.nestingPrefixEscaped || As("$t("), this.nestingSuffix = n.nestingSuffix ? As(n.nestingSuffix) : n.nestingSuffixEscaped || As(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function() {
      this.options && this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function() {
      var r = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(r, "g");
      var n = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(n, "g");
      var i = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(i, "g");
    }
  }, {
    key: "interpolate",
    value: function(r, n, i, s) {
      var a = this, o, l, u, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c(g) {
        return g.replace(/\$/g, "$$$$");
      }
      var h = function(v) {
        if (v.indexOf(a.formatSeparator) < 0) {
          var y = Ng(n, f, v, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(y, void 0, i, jr(jr(jr({}, s), n), {}, {
            interpolationkey: v
          })) : y;
        }
        var _ = v.split(a.formatSeparator), E = _.shift().trim(), x = _.join(a.formatSeparator).trim();
        return a.format(Ng(n, f, E, a.options.keySeparator, a.options.ignoreJSONStructure), x, i, jr(jr(jr({}, s), n), {}, {
          interpolationkey: E
        }));
      };
      this.resetRegExp();
      var d = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, p = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, m = [{
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
      return m.forEach(function(g) {
        for (u = 0; o = g.regex.exec(r); ) {
          var v = o[1].trim();
          if (l = h(v), l === void 0)
            if (typeof d == "function") {
              var y = d(r, o, s);
              l = typeof y == "string" ? y : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, v))
              l = "";
            else if (p) {
              l = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(v, " for interpolating ").concat(r)), l = "";
          else
            typeof l != "string" && !a.useRawValueToEscape && (l = bg(l));
          var _ = g.safeValue(l);
          if (r = r.replace(o[0], _), p ? (g.regex.lastIndex += l.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, u++, u >= a.maxReplaces)
            break;
        }
      }), r;
    }
  }, {
    key: "nest",
    value: function(r, n) {
      var i = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, l;
      function u(d, p) {
        var m = this.nestingOptionsSeparator;
        if (d.indexOf(m) < 0)
          return d;
        var g = d.split(new RegExp("".concat(m, "[ ]*{"))), v = "{".concat(g[1]);
        d = g[0], v = this.interpolate(v, l);
        var y = v.match(/'/g), _ = v.match(/"/g);
        (y && y.length % 2 === 0 && !_ || _.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
        try {
          l = JSON.parse(v), p && (l = jr(jr({}, p), l));
        } catch (E) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(d), E), "".concat(d).concat(m).concat(v);
        }
        return delete l.defaultValue, d;
      }
      for (; a = this.nestingRegexp.exec(r); ) {
        var f = [];
        l = jr({}, s), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
        var c = !1;
        if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
          var h = a[1].split(this.formatSeparator).map(function(d) {
            return d.trim();
          });
          a[1] = h.shift(), f = h, c = !0;
        }
        if (o = n(u.call(this, a[1].trim(), l), l), o && a[0] === r && typeof o != "string")
          return o;
        typeof o != "string" && (o = bg(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(r)), o = ""), c && (o = f.reduce(function(d, p) {
          return i.format(d, p, s.lng, jr(jr({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), r = r.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return r;
    }
  }]), t;
}();
function Cg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Cg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function mL(t) {
  var e = t.toLowerCase().trim(), r = {};
  if (t.indexOf("(") > -1) {
    var n = t.split("(");
    e = n[0].toLowerCase().trim();
    var i = n[1].substring(0, n[1].length - 1);
    if (e === "currency" && i.indexOf(":") < 0)
      r.currency || (r.currency = i.trim());
    else if (e === "relativetime" && i.indexOf(":") < 0)
      r.range || (r.range = i.trim());
    else {
      var s = i.split(";");
      s.forEach(function(a) {
        if (!!a) {
          var o = a.split(":"), l = YP(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
          r[u.trim()] || (r[u.trim()] = c), c === "false" && (r[u.trim()] = !1), c === "true" && (r[u.trim()] = !0), isNaN(c) || (r[u.trim()] = parseInt(c, 10));
        }
      });
    }
  }
  return {
    formatName: e,
    formatOptions: r
  };
}
function Is(t) {
  var e = {};
  return function(n, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = t(i, s), e[a] = o), o(n);
  };
}
var gL = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pn(this, t), this.logger = gn.create("formatter"), this.options = e, this.formats = {
      number: Is(function(r, n) {
        var i = new Intl.NumberFormat(r, $n({}, n));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: Is(function(r, n) {
        var i = new Intl.NumberFormat(r, $n($n({}, n), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: Is(function(r, n) {
        var i = new Intl.DateTimeFormat(r, $n({}, n));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: Is(function(r, n) {
        var i = new Intl.RelativeTimeFormat(r, $n({}, n));
        return function(s) {
          return i.format(s, n.range || "day");
        };
      }),
      list: Is(function(r, n) {
        var i = new Intl.ListFormat(r, $n({}, n));
        return function(s) {
          return i.format(s);
        };
      })
    }, this.init(e);
  }
  return Ln(t, [{
    key: "init",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, i = n.interpolation;
      this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(r, n) {
      this.formats[r.toLowerCase().trim()] = n;
    }
  }, {
    key: "addCached",
    value: function(r, n) {
      this.formats[r.toLowerCase().trim()] = Is(n);
    }
  }, {
    key: "format",
    value: function(r, n, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = n.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = mL(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var p = u;
          try {
            var m = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = m.locale || m.lng || a.locale || a.lng || i;
            p = s.formats[h](u, g, $n($n($n({}, d), a), m));
          } catch (v) {
            s.logger.warn(v);
          }
          return p;
        } else
          s.logger.warn("there was no format function for ".concat(h));
        return u;
      }, r);
      return l;
    }
  }]), t;
}();
function Pg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function yL(t) {
  var e = vL();
  return function() {
    var n = Nn(t), i;
    if (e) {
      var s = Nn(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return jo(this, i);
  };
}
function vL() {
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
function bL(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var _L = function(t) {
  Oc(r, t);
  var e = yL(r);
  function r(n, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return Pn(this, r), a = e.call(this), xc && Di.call(Pi(a)), a.backend = n, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = gn.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return Ln(r, [{
    key: "queueLoad",
    value: function(i, s, a, o) {
      var l = this, u = {}, f = {}, c = {}, h = {};
      return i.forEach(function(d) {
        var p = !0;
        s.forEach(function(m) {
          var g = "".concat(d, "|").concat(m);
          !a.reload && l.store.hasResourceBundle(d, m) ? l.state[g] = 2 : l.state[g] < 0 || (l.state[g] === 1 ? f[g] === void 0 && (f[g] = !0) : (l.state[g] = 1, p = !1, f[g] === void 0 && (f[g] = !0), u[g] === void 0 && (u[g] = !0), h[m] === void 0 && (h[m] = !0)));
        }), p || (c[d] = !0);
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
        JP(c.loaded, [l], u), bL(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
          f[h] || (f[h] = {});
          var d = c.loaded[h];
          d.length && d.forEach(function(p) {
            f[h][p] === void 0 && (f[h][p] = !0);
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
      var c = function(m, g) {
        if (o.readingCalls--, o.waitingReads.length > 0) {
          var v = o.waitingReads.shift();
          o.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (m && g && l < o.maxRetries) {
          setTimeout(function() {
            o.read.call(o, i, s, a, l + 1, u * 2, f);
          }, u);
          return;
        }
        f(m, g);
      }, h = this.backend[a].bind(this.backend);
      if (h.length === 2) {
        try {
          var d = h(i, s);
          d && typeof d.then == "function" ? d.then(function(p) {
            return c(null, p);
          }).catch(c) : c(null, d);
        } catch (p) {
          c(p);
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
          var c = Lg(Lg({}, u), {}, {
            isUpdate: l
          }), h = this.backend.create.bind(this.backend);
          if (h.length < 6)
            try {
              var d;
              h.length === 5 ? d = h(i, s, a, o, c) : d = h(i, s, a, o), d && typeof d.then == "function" ? d.then(function(p) {
                return f(null, p);
              }).catch(f) : f(null, d);
            } catch (p) {
              f(p);
            }
          else
            h(i, s, a, o, f, c);
        }
        !i || !i[0] || this.store.addResource(i[0], s, a, o);
      }
    }
  }]), r;
}(Di);
function Ag() {
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
      var r = {};
      if (Ar(e[1]) === "object" && (r = e[1]), typeof e[1] == "string" && (r.defaultValue = e[1]), typeof e[2] == "string" && (r.tDescription = e[2]), Ar(e[2]) === "object" || Ar(e[3]) === "object") {
        var n = e[3] || e[2];
        Object.keys(n).forEach(function(i) {
          r[i] = n[i];
        });
      }
      return r;
    },
    interpolation: {
      escapeValue: !0,
      format: function(e, r, n, i) {
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
function Ig(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function kg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kg(Object(r), !0).forEach(function(n) {
      Vi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : kg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function EL(t) {
  var e = SL();
  return function() {
    var n = Nn(t), i;
    if (e) {
      var s = Nn(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return jo(this, i);
  };
}
function SL() {
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
function yl() {
}
function wL(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(r) {
    typeof t[r] == "function" && (t[r] = t[r].bind(t));
  });
}
var Du = function(t) {
  Oc(r, t);
  var e = EL(r);
  function r() {
    var n, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (Pn(this, r), n = e.call(this), xc && Di.call(Pi(n)), n.options = Ig(i), n.services = {}, n.logger = gn, n.modules = {
      external: []
    }, wL(Pi(n)), s && !n.isInitialized && !i.isClone) {
      if (!n.options.initImmediate)
        return n.init(i, s), jo(n, Pi(n));
      setTimeout(function() {
        n.init(i, s);
      }, 0);
    }
    return n;
  }
  return Ln(r, [{
    key: "init",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
      typeof s == "function" && (a = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
      var o = Ag();
      this.options = cn(cn(cn({}, o), this.options), Ig(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = cn(cn({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(v) {
        return v ? typeof v == "function" ? new v() : v : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? gn.init(l(this.modules.logger), this.options) : gn.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = gL);
        var f = new xg(this.options);
        this.store = new aL(this.options.resources, this.options);
        var c = this.services;
        c.logger = gn, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new dL(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new pL(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new _L(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(v) {
          for (var y = arguments.length, _ = new Array(y > 1 ? y - 1 : 0), E = 1; E < y; E++)
            _[E - 1] = arguments[E];
          i.emit.apply(i, [v].concat(_));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Og(this.services, this.options), this.translator.on("*", function(v) {
          for (var y = arguments.length, _ = new Array(y > 1 ? y - 1 : 0), E = 1; E < y; E++)
            _[E - 1] = arguments[E];
          i.emit.apply(i, [v].concat(_));
        }), this.modules.external.forEach(function(v) {
          v.init && v.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = yl), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
      var p = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      p.forEach(function(v) {
        i[v] = function() {
          var y;
          return (y = i.store)[v].apply(y, arguments), i;
        };
      });
      var m = Pa(), g = function() {
        var y = function(E, x) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), m.resolve(x), a(E, x);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return y(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, y);
      };
      return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), m;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yl, o = a, l = typeof i == "string" ? i : this.language;
      if (typeof i == "function" && (o = i), !this.options.resources || this.options.partialBundledLanguages) {
        if (l && l.toLowerCase() === "cimode")
          return o();
        var u = [], f = function(d) {
          if (!!d) {
            var p = s.services.languageUtils.toResolveHierarchy(d);
            p.forEach(function(m) {
              u.indexOf(m) < 0 && u.push(m);
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
      var o = Pa();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = yl), this.services.backendConnector.reload(i, s, function(l) {
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
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && e_.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
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
      var o = Pa();
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
        d && (a.language || l(d), a.translator.language || a.translator.changeLanguage(d), a.services.languageDetector && a.services.languageDetector.cacheUserLanguage && a.services.languageDetector.cacheUserLanguage(d)), a.loadResources(d, function(p) {
          u(p, d);
        });
      };
      return !i && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(i), o;
    }
  }, {
    key: "getFixedT",
    value: function(i, s, a) {
      var o = this, l = function u(f, c) {
        var h;
        if (Ar(c) !== "object") {
          for (var d = arguments.length, p = new Array(d > 2 ? d - 2 : 0), m = 2; m < d; m++)
            p[m - 2] = arguments[m];
          h = o.options.overloadTranslationOptionHandler([f, c].concat(p));
        } else
          h = cn({}, c);
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
      var o = a.lng || this.resolvedLanguage || this.languages[0], l = this.options ? this.options.fallbackLng : !1, u = this.languages[this.languages.length - 1];
      if (o.toLowerCase() === "cimode")
        return !0;
      var f = function(d, p) {
        var m = s.services.backendConnector.state["".concat(d, "|").concat(p)];
        return m === -1 || m === 2;
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
      var a = this, o = Pa();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(l) {
        a.options.ns.indexOf(l) < 0 && a.options.ns.push(l);
      }), this.loadResources(function(l) {
        o.resolve(), s && s(l);
      }), o) : (s && s(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, s) {
      var a = Pa();
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
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new xg(Ag());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yl, o = cn(cn(cn({}, this.options), s), {
        isClone: !0
      }), l = new r(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = cn({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new Og(l.services, l.options), l.translator.on("*", function(f) {
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
  }]), r;
}(Di);
Vi(Du, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new Du(t, e);
});
var lt = Du.createInstance();
lt.createInstance = Du.createInstance;
lt.createInstance;
lt.dir;
lt.init;
lt.loadResources;
lt.reloadResources;
lt.use;
lt.changeLanguage;
lt.getFixedT;
lt.t;
lt.exists;
lt.setDefaultNamespace;
lt.hasLoadedNamespace;
lt.loadNamespaces;
lt.loadLanguages;
const OL = "/";
var t_ = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(t_ || {}), Un = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(Un || {}), ru = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(ru || {}), Vh;
function xL(t, {
  i18next: e,
  rerenderOn: r = ["languageChanged", "loaded", "added", "removed"],
  slotStart: n = "{",
  slotEnd: i = "}"
}) {
  const s = e.t.bind(e), a = we(new Date()), o = () => a.value = new Date(), l = () => a.value;
  r.forEach((h) => {
    var d;
    switch (h) {
      case "added":
      case "removed":
        (d = e.store) == null || d.on(h, o);
        break;
      default:
        e.on(h, o);
        break;
    }
  }), t.component("i18next", NL), t.mixin({
    beforeCreate() {
      var h, d;
      const p = this.$options;
      if (!p.__i18n && !p.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const m = this.$options.name, g = (Math.random() * 10 ** 8 | 0).toString(), v = [m, g].filter((M) => !!M).join("-");
      this.__bundles = [];
      const y = (M) => {
        Object.entries(M).forEach(([L, D]) => {
          e.addResourceBundle(L, v, D, !0, !1), this.__bundles.push([L, v]);
        });
      };
      (h = p.__i18n) == null || h.forEach((M) => {
        y(JSON.parse(M));
      });
      let { lng: _, ns: E, keyPrefix: x } = c(p, y);
      (d = this.__bundles) != null && d.length && (E = [v].concat(E != null ? E : []));
      const N = u(_, E);
      this.__translate = (M, L) => !x || f(M) ? N(M, L) : N(x + "." + M, L);
    },
    unmounted() {
      var h;
      (h = this.__bundles) == null || h.forEach(([d, p]) => e.removeResourceBundle(d, p));
    }
  }), t.config.globalProperties.$t = function(h, d) {
    var p;
    return l(), e.isInitialized ? ((p = this == null ? void 0 : this.__translate) != null ? p : s)(h, d) : h;
  }, t.config.globalProperties.$i18next = new Proxy(e, {
    get(h, d) {
      return l(), Reflect.get(h, d);
    }
  }), Vh = TL(n, i);
  function u(h, d) {
    return h ? e.getFixedT(h, d) : d ? e.getFixedT(null, d) : s;
  }
  function f(h) {
    const d = e.options.nsSeparator;
    return typeof d == "string" && h.includes(d);
  }
  function c(h, d) {
    let p, m, g;
    if (h.i18nOptions) {
      let v, y;
      ({
        lng: p,
        namespaces: y = e.options.defaultNS,
        keyPrefix: g,
        messages: v
      } = h.i18nOptions), v && d(v), m = typeof y == "string" ? [y] : y, m && e.loadNamespaces(m);
    }
    return { lng: p, ns: m, keyPrefix: g };
  }
}
function Ze() {
  const t = ML(), e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
function ML() {
  const t = Io();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  return t;
}
function TL(t, e) {
  const r = `${t}\\s*([a-z0-9\\-]+)\\s*${e}`;
  return new RegExp(r, "gi");
}
var NL = fe({
  props: {
    translation: {
      type: String,
      required: !0
    }
  },
  setup(t, { slots: e }) {
    return () => {
      const r = t.translation, n = [];
      let i, s = 0;
      for (; (i = Vh.exec(r)) !== null; ) {
        n.push(r.substring(s, i.index));
        const a = e[i[1]];
        a ? n.push(...a()) : n.push(i[0]), s = Vh.lastIndex;
      }
      return n.push(r.substring(s)), n;
    };
  }
});
class Os extends Error {
}
class CL extends Os {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class PL extends Os {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class LL extends Os {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Ys extends Os {
}
class r_ extends Os {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class or extends Os {
}
class oi extends Os {
  constructor() {
    super("Zone is an abstract class");
  }
}
const ee = "numeric", tn = "short", br = "long", Ru = {
  year: ee,
  month: ee,
  day: ee
}, n_ = {
  year: ee,
  month: tn,
  day: ee
}, AL = {
  year: ee,
  month: tn,
  day: ee,
  weekday: tn
}, i_ = {
  year: ee,
  month: br,
  day: ee
}, s_ = {
  year: ee,
  month: br,
  day: ee,
  weekday: br
}, a_ = {
  hour: ee,
  minute: ee
}, o_ = {
  hour: ee,
  minute: ee,
  second: ee
}, l_ = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: tn
}, u_ = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: br
}, c_ = {
  hour: ee,
  minute: ee,
  hourCycle: "h23"
}, f_ = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23"
}, h_ = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: tn
}, d_ = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: br
}, p_ = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee
}, m_ = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, g_ = {
  year: ee,
  month: tn,
  day: ee,
  hour: ee,
  minute: ee
}, y_ = {
  year: ee,
  month: tn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, IL = {
  year: ee,
  month: tn,
  day: ee,
  weekday: tn,
  hour: ee,
  minute: ee
}, v_ = {
  year: ee,
  month: br,
  day: ee,
  hour: ee,
  minute: ee,
  timeZoneName: tn
}, b_ = {
  year: ee,
  month: br,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: tn
}, __ = {
  year: ee,
  month: br,
  day: ee,
  weekday: br,
  hour: ee,
  minute: ee,
  timeZoneName: br
}, E_ = {
  year: ee,
  month: br,
  day: ee,
  weekday: br,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: br
};
class Go {
  get type() {
    throw new oi();
  }
  get name() {
    throw new oi();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new oi();
  }
  offsetName(e, r) {
    throw new oi();
  }
  formatOffset(e, r) {
    throw new oi();
  }
  offset(e) {
    throw new oi();
  }
  equals(e) {
    throw new oi();
  }
  get isValid() {
    throw new oi();
  }
}
let cf = null;
class Mc extends Go {
  static get instance() {
    return cf === null && (cf = new Mc()), cf;
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
  offsetName(e, { format: r, locale: n }) {
    return P_(e, r, n);
  }
  formatOffset(e, r) {
    return so(this.offset(e), r);
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
let nu = {};
function kL(t) {
  return nu[t] || (nu[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), nu[t];
}
const DL = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function RL(t, e) {
  const r = t.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, i, s, a, o, l, u, f] = n;
  return [a, i, s, o, l, u, f];
}
function $L(t, e) {
  const r = t.formatToParts(e), n = [];
  for (let i = 0; i < r.length; i++) {
    const { type: s, value: a } = r[i], o = DL[s];
    s === "era" ? n[o] = a : Se(o) || (n[o] = parseInt(a, 10));
  }
  return n;
}
let vl = {};
class Yn extends Go {
  static create(e) {
    return vl[e] || (vl[e] = new Yn(e)), vl[e];
  }
  static resetCache() {
    vl = {}, nu = {};
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
    super(), this.zoneName = e, this.valid = Yn.isValidZone(e);
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
  offsetName(e, { format: r, locale: n }) {
    return P_(e, r, n, this.name);
  }
  formatOffset(e, r) {
    return so(this.offset(e), r);
  }
  offset(e) {
    const r = new Date(e);
    if (isNaN(r))
      return NaN;
    const n = kL(this.name);
    let [i, s, a, o, l, u, f] = n.formatToParts ? $L(n, r) : RL(n, r);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = Nc({
      year: i,
      month: s,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: f,
      millisecond: 0
    });
    let d = +r;
    const p = d % 1e3;
    return d -= p >= 0 ? p : 1e3 + p, (h - d) / (60 * 1e3);
  }
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let Dg = {};
function FL(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Dg[r];
  return n || (n = new Intl.ListFormat(t, e), Dg[r] = n), n;
}
let jh = {};
function Gh(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = jh[r];
  return n || (n = new Intl.DateTimeFormat(t, e), jh[r] = n), n;
}
let Uh = {};
function VL(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Uh[r];
  return n || (n = new Intl.NumberFormat(t, e), Uh[r] = n), n;
}
let Bh = {};
function jL(t, e = {}) {
  const { base: r, ...n } = e, i = JSON.stringify([t, n]);
  let s = Bh[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Bh[i] = s), s;
}
let Ua = null;
function GL() {
  return Ua || (Ua = new Intl.DateTimeFormat().resolvedOptions().locale, Ua);
}
let Rg = {};
function UL(t) {
  let e = Rg[t];
  if (!e) {
    const r = new Intl.Locale(t);
    e = "getWeekInfo" in r ? r.getWeekInfo() : r.weekInfo, Rg[t] = e;
  }
  return e;
}
function BL(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const r = t.indexOf("-u-");
  if (r === -1)
    return [t];
  {
    let n, i;
    try {
      n = Gh(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, r);
      n = Gh(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = n;
    return [i, s, a];
  }
}
function WL(t, e, r) {
  return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t;
}
function qL(t) {
  const e = [];
  for (let r = 1; r <= 12; r++) {
    const n = xe.utc(2009, r, 1);
    e.push(t(n));
  }
  return e;
}
function HL(t) {
  const e = [];
  for (let r = 1; r <= 7; r++) {
    const n = xe.utc(2016, 11, 13 + r);
    e.push(t(n));
  }
  return e;
}
function bl(t, e, r, n) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? r(e) : n(e);
}
function zL(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class YL {
  constructor(e, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const { padTo: i, floor: s, ...a } = n;
    if (!r || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...n };
      n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = VL(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const r = this.floor ? Math.floor(e) : e;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(e) : Kd(e, 3);
      return _t(r, this.padTo);
    }
  }
}
class KL {
  constructor(e, r, n) {
    this.opts = n, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Yn.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = Gh(r, s);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((r) => {
      if (r.type === "timeZoneName") {
        const n = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...r,
          value: n
        };
      } else
        return r;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class XL {
  constructor(e, r, n) {
    this.opts = { style: "long", ...n }, !r && N_() && (this.rtf = jL(e, n));
  }
  format(e, r) {
    return this.rtf ? this.rtf.format(e, r) : gA(r, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, r) {
    return this.rtf ? this.rtf.formatToParts(e, r) : [];
  }
}
const ZL = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Ke {
  static fromOpts(e) {
    return Ke.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, r, n, i, s = !1) {
    const a = e || mt.defaultLocale, o = a || (s ? "en-US" : GL()), l = r || mt.defaultNumberingSystem, u = n || mt.defaultOutputCalendar, f = Wh(i) || mt.defaultWeekSettings;
    return new Ke(o, l, u, f, a);
  }
  static resetCache() {
    Ua = null, jh = {}, Uh = {}, Bh = {};
  }
  static fromObject({ locale: e, numberingSystem: r, outputCalendar: n, weekSettings: i } = {}) {
    return Ke.create(e, r, n, i);
  }
  constructor(e, r, n, i, s) {
    const [a, o, l] = BL(e);
    this.locale = a, this.numberingSystem = r || o || null, this.outputCalendar = n || l || null, this.weekSettings = i, this.intl = WL(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = zL(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && r ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Ke.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Wh(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, r = !1) {
    return bl(this, e, I_, () => {
      const n = r ? { month: e, day: "numeric" } : { month: e }, i = r ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = qL((s) => this.extract(s, n, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, r = !1) {
    return bl(this, e, R_, () => {
      const n = r ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = r ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = HL(
        (s) => this.extract(s, n, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return bl(
      this,
      void 0,
      () => $_,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [xe.utc(2016, 11, 13, 9), xe.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return bl(this, e, F_, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [xe.utc(-40, 1, 1), xe.utc(2017, 1, 1)].map(
        (n) => this.extract(n, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, r, n) {
    const i = this.dtFormatter(e, r), s = i.formatToParts(), a = s.find((o) => o.type.toLowerCase() === n);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new YL(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, r = {}) {
    return new KL(e, this.intl, r);
  }
  relFormatter(e = {}) {
    return new XL(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return FL(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : C_() ? UL(this.locale) : ZL;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let ff = null;
class Qt extends Go {
  static get utcInstance() {
    return ff === null && (ff = new Qt(0)), ff;
  }
  static instance(e) {
    return e === 0 ? Qt.utcInstance : new Qt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const r = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r)
        return new Qt(Cc(r[1], r[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${so(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${so(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, r) {
    return so(this.fixed, r);
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
class JL extends Go {
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
function _i(t, e) {
  if (Se(t) || t === null)
    return e;
  if (t instanceof Go)
    return t;
  if (tA(t)) {
    const r = t.toLowerCase();
    return r === "default" ? e : r === "local" || r === "system" ? Mc.instance : r === "utc" || r === "gmt" ? Qt.utcInstance : Qt.parseSpecifier(r) || Yn.create(t);
  } else
    return ds(t) ? Qt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new JL(t);
}
let $g = () => Date.now(), Fg = "system", Vg = null, jg = null, Gg = null, Ug = 60, Bg, Wg = null;
class mt {
  static get now() {
    return $g;
  }
  static set now(e) {
    $g = e;
  }
  static set defaultZone(e) {
    Fg = e;
  }
  static get defaultZone() {
    return _i(Fg, Mc.instance);
  }
  static get defaultLocale() {
    return Vg;
  }
  static set defaultLocale(e) {
    Vg = e;
  }
  static get defaultNumberingSystem() {
    return jg;
  }
  static set defaultNumberingSystem(e) {
    jg = e;
  }
  static get defaultOutputCalendar() {
    return Gg;
  }
  static set defaultOutputCalendar(e) {
    Gg = e;
  }
  static get defaultWeekSettings() {
    return Wg;
  }
  static set defaultWeekSettings(e) {
    Wg = Wh(e);
  }
  static get twoDigitCutoffYear() {
    return Ug;
  }
  static set twoDigitCutoffYear(e) {
    Ug = e % 100;
  }
  static get throwOnInvalid() {
    return Bg;
  }
  static set throwOnInvalid(e) {
    Bg = e;
  }
  static resetCaches() {
    Ke.resetCache(), Yn.resetCache();
  }
}
class Zr {
  constructor(e, r) {
    this.reason = e, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const S_ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], w_ = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Cr(t, e) {
  return new Zr(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Hd(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && t >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const i = n.getUTCDay();
  return i === 0 ? 7 : i;
}
function O_(t, e, r) {
  return r + (Uo(t) ? w_ : S_)[e - 1];
}
function x_(t, e) {
  const r = Uo(t) ? w_ : S_, n = r.findIndex((s) => s < e), i = e - r[n];
  return { month: n + 1, day: i };
}
function zd(t, e) {
  return (t - e + 7) % 7 + 1;
}
function $u(t, e = 4, r = 1) {
  const { year: n, month: i, day: s } = t, a = O_(n, i, s), o = zd(Hd(n, i, s), r);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = n - 1, l = So(u, e, r)) : l > So(n, e, r) ? (u = n + 1, l = 1) : u = n, { weekYear: u, weekNumber: l, weekday: o, ...Pc(t) };
}
function qg(t, e = 4, r = 1) {
  const { weekYear: n, weekNumber: i, weekday: s } = t, a = zd(Hd(n, 1, e), r), o = ia(n);
  let l = i * 7 + s - a - 7 + e, u;
  l < 1 ? (u = n - 1, l += ia(u)) : l > o ? (u = n + 1, l -= ia(n)) : u = n;
  const { month: f, day: c } = x_(u, l);
  return { year: u, month: f, day: c, ...Pc(t) };
}
function hf(t) {
  const { year: e, month: r, day: n } = t, i = O_(e, r, n);
  return { year: e, ordinal: i, ...Pc(t) };
}
function Hg(t) {
  const { year: e, ordinal: r } = t, { month: n, day: i } = x_(e, r);
  return { year: e, month: n, day: i, ...Pc(t) };
}
function zg(t, e) {
  if (!Se(t.localWeekday) || !Se(t.localWeekNumber) || !Se(t.localWeekYear)) {
    if (!Se(t.weekday) || !Se(t.weekNumber) || !Se(t.weekYear))
      throw new Ys(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return Se(t.localWeekday) || (t.weekday = t.localWeekday), Se(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), Se(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function QL(t, e = 4, r = 1) {
  const n = Tc(t.weekYear), i = Pr(
    t.weekNumber,
    1,
    So(t.weekYear, e, r)
  ), s = Pr(t.weekday, 1, 7);
  return n ? i ? s ? !1 : Cr("weekday", t.weekday) : Cr("week", t.weekNumber) : Cr("weekYear", t.weekYear);
}
function eA(t) {
  const e = Tc(t.year), r = Pr(t.ordinal, 1, ia(t.year));
  return e ? r ? !1 : Cr("ordinal", t.ordinal) : Cr("year", t.year);
}
function M_(t) {
  const e = Tc(t.year), r = Pr(t.month, 1, 12), n = Pr(t.day, 1, Fu(t.year, t.month));
  return e ? r ? n ? !1 : Cr("day", t.day) : Cr("month", t.month) : Cr("year", t.year);
}
function T_(t) {
  const { hour: e, minute: r, second: n, millisecond: i } = t, s = Pr(e, 0, 23) || e === 24 && r === 0 && n === 0 && i === 0, a = Pr(r, 0, 59), o = Pr(n, 0, 59), l = Pr(i, 0, 999);
  return s ? a ? o ? l ? !1 : Cr("millisecond", i) : Cr("second", n) : Cr("minute", r) : Cr("hour", e);
}
function Se(t) {
  return typeof t > "u";
}
function ds(t) {
  return typeof t == "number";
}
function Tc(t) {
  return typeof t == "number" && t % 1 === 0;
}
function tA(t) {
  return typeof t == "string";
}
function rA(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function N_() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function C_() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function nA(t) {
  return Array.isArray(t) ? t : [t];
}
function Yg(t, e, r) {
  if (t.length !== 0)
    return t.reduce((n, i) => {
      const s = [e(i), i];
      return n && r(n[0], s[0]) === n[0] ? n : s;
    }, null)[1];
}
function iA(t, e) {
  return e.reduce((r, n) => (r[n] = t[n], r), {});
}
function da(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Wh(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new or("Week settings must be an object");
  if (!Pr(t.firstDay, 1, 7) || !Pr(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Pr(e, 1, 7)))
    throw new or("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Pr(t, e, r) {
  return Tc(t) && t >= e && t <= r;
}
function sA(t, e) {
  return t - e * Math.floor(t / e);
}
function _t(t, e = 2) {
  const r = t < 0;
  let n;
  return r ? n = "-" + ("" + -t).padStart(e, "0") : n = ("" + t).padStart(e, "0"), n;
}
function gi(t) {
  if (!(Se(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Xi(t) {
  if (!(Se(t) || t === null || t === ""))
    return parseFloat(t);
}
function Yd(t) {
  if (!(Se(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Kd(t, e, r = !1) {
  const n = 10 ** e;
  return (r ? Math.trunc : Math.round)(t * n) / n;
}
function Uo(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function ia(t) {
  return Uo(t) ? 366 : 365;
}
function Fu(t, e) {
  const r = sA(e - 1, 12) + 1, n = t + (e - r) / 12;
  return r === 2 ? Uo(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function Nc(t) {
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
function Kg(t, e, r) {
  return -zd(Hd(t, 1, e), r) + e - 1;
}
function So(t, e = 4, r = 1) {
  const n = Kg(t, e, r), i = Kg(t + 1, e, r);
  return (ia(t) - n + i) / 7;
}
function qh(t) {
  return t > 99 ? t : t > mt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function P_(t, e, r, n = null) {
  const i = new Date(t), s = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (s.timeZone = n);
  const a = { timeZoneName: e, ...s }, o = new Intl.DateTimeFormat(r, a).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Cc(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(e, 10) || 0, i = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + i;
}
function L_(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new or(`Invalid unit value ${t}`);
  return e;
}
function Vu(t, e) {
  const r = {};
  for (const n in t)
    if (da(t, n)) {
      const i = t[n];
      if (i == null)
        continue;
      r[e(n)] = L_(i);
    }
  return r;
}
function so(t, e) {
  const r = Math.trunc(Math.abs(t / 60)), n = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${_t(r, 2)}:${_t(n, 2)}`;
    case "narrow":
      return `${i}${r}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${i}${_t(r, 2)}${_t(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Pc(t) {
  return iA(t, ["hour", "minute", "second", "millisecond"]);
}
const aA = [
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
], A_ = [
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
], oA = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function I_(t) {
  switch (t) {
    case "narrow":
      return [...oA];
    case "short":
      return [...A_];
    case "long":
      return [...aA];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const k_ = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], D_ = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], lA = ["M", "T", "W", "T", "F", "S", "S"];
function R_(t) {
  switch (t) {
    case "narrow":
      return [...lA];
    case "short":
      return [...D_];
    case "long":
      return [...k_];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const $_ = ["AM", "PM"], uA = ["Before Christ", "Anno Domini"], cA = ["BC", "AD"], fA = ["B", "A"];
function F_(t) {
  switch (t) {
    case "narrow":
      return [...fA];
    case "short":
      return [...cA];
    case "long":
      return [...uA];
    default:
      return null;
  }
}
function hA(t) {
  return $_[t.hour < 12 ? 0 : 1];
}
function dA(t, e) {
  return R_(e)[t.weekday - 1];
}
function pA(t, e) {
  return I_(e)[t.month - 1];
}
function mA(t, e) {
  return F_(e)[t.year < 0 ? 0 : 1];
}
function gA(t, e, r = "always", n = !1) {
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
  if (r === "auto" && s) {
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
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, u = i[t], f = n ? l ? u[1] : u[2] || u[1] : l ? i[t][0] : t;
  return a ? `${o} ${f} ago` : `in ${o} ${f}`;
}
function Xg(t, e) {
  let r = "";
  for (const n of t)
    n.literal ? r += n.val : r += e(n.val);
  return r;
}
const yA = {
  D: Ru,
  DD: n_,
  DDD: i_,
  DDDD: s_,
  t: a_,
  tt: o_,
  ttt: l_,
  tttt: u_,
  T: c_,
  TT: f_,
  TTT: h_,
  TTTT: d_,
  f: p_,
  ff: g_,
  fff: v_,
  ffff: __,
  F: m_,
  FF: y_,
  FFF: b_,
  FFFF: E_
};
class Wt {
  static create(e, r = {}) {
    return new Wt(e, r);
  }
  static parseFormat(e) {
    let r = null, n = "", i = !1;
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? (n.length > 0 && s.push({ literal: i || /^\s+$/.test(n), val: n }), r = null, n = "", i = !i) : i || o === r ? n += o : (n.length > 0 && s.push({ literal: /^\s+$/.test(n), val: n }), n = o, r = o);
    }
    return n.length > 0 && s.push({ literal: i || /^\s+$/.test(n), val: n }), s;
  }
  static macroTokenToFormatOpts(e) {
    return yA[e];
  }
  constructor(e, r) {
    this.opts = r, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, r) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...r }).format();
  }
  dtFormatter(e, r = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...r });
  }
  formatDateTime(e, r) {
    return this.dtFormatter(e, r).format();
  }
  formatDateTimeParts(e, r) {
    return this.dtFormatter(e, r).formatToParts();
  }
  formatInterval(e, r) {
    return this.dtFormatter(e.start, r).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, r) {
    return this.dtFormatter(e, r).resolvedOptions();
  }
  num(e, r = 0) {
    if (this.opts.forceSimple)
      return _t(e, r);
    const n = { ...this.opts };
    return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(e);
  }
  formatDateTimeFromString(e, r) {
    const n = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, p) => this.loc.extract(e, d, p), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => n ? hA(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, p) => n ? pA(e, d) : s(p ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, p) => n ? dA(e, d) : s(
      p ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const p = Wt.macroTokenToFormatOpts(d);
      return p ? this.formatWithSystemDefault(e, p) : d;
    }, c = (d) => n ? mA(e, d) : s({ era: d }, "era"), h = (d) => {
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
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
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
    return Xg(Wt.parseFormat(r), h);
  }
  formatDurationFromString(e, r) {
    const n = (l) => {
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
      const f = n(u);
      return f ? this.num(l.get(f), u.length) : u;
    }, s = Wt.parseFormat(r), a = s.reduce(
      (l, { literal: u, val: f }) => u ? l : l.concat(f),
      []
    ), o = e.shiftTo(...a.map(n).filter((l) => l));
    return Xg(s, i(o));
  }
}
const V_ = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function ya(...t) {
  const e = t.reduce((r, n) => r + n.source, "");
  return RegExp(`^${e}$`);
}
function va(...t) {
  return (e) => t.reduce(
    ([r, n, i], s) => {
      const [a, o, l] = s(e, i);
      return [{ ...r, ...a }, o || n, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ba(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [r, n] of e) {
    const i = r.exec(t);
    if (i)
      return n(i);
  }
  return [null, null];
}
function j_(...t) {
  return (e, r) => {
    const n = {};
    let i;
    for (i = 0; i < t.length; i++)
      n[t[i]] = gi(e[r + i]);
    return [n, null, r + i];
  };
}
const G_ = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, vA = `(?:${G_.source}?(?:\\[(${V_.source})\\])?)?`, Xd = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, U_ = RegExp(`${Xd.source}${vA}`), Zd = RegExp(`(?:T${U_.source})?`), bA = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, _A = /(\d{4})-?W(\d\d)(?:-?(\d))?/, EA = /(\d{4})-?(\d{3})/, SA = j_("weekYear", "weekNumber", "weekDay"), wA = j_("year", "ordinal"), OA = /(\d{4})-(\d\d)-(\d\d)/, B_ = RegExp(
  `${Xd.source} ?(?:${G_.source}|(${V_.source}))?`
), xA = RegExp(`(?: ${B_.source})?`);
function sa(t, e, r) {
  const n = t[e];
  return Se(n) ? r : gi(n);
}
function MA(t, e) {
  return [{
    year: sa(t, e),
    month: sa(t, e + 1, 1),
    day: sa(t, e + 2, 1)
  }, null, e + 3];
}
function _a(t, e) {
  return [{
    hours: sa(t, e, 0),
    minutes: sa(t, e + 1, 0),
    seconds: sa(t, e + 2, 0),
    milliseconds: Yd(t[e + 3])
  }, null, e + 4];
}
function Bo(t, e) {
  const r = !t[e] && !t[e + 1], n = Cc(t[e + 1], t[e + 2]), i = r ? null : Qt.instance(n);
  return [{}, i, e + 3];
}
function Wo(t, e) {
  const r = t[e] ? Yn.create(t[e]) : null;
  return [{}, r, e + 1];
}
const TA = RegExp(`^T?${Xd.source}$`), NA = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function CA(t) {
  const [e, r, n, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, p = !1) => d !== void 0 && (p || d && f) ? -d : d;
  return [
    {
      years: h(Xi(r)),
      months: h(Xi(n)),
      weeks: h(Xi(i)),
      days: h(Xi(s)),
      hours: h(Xi(a)),
      minutes: h(Xi(o)),
      seconds: h(Xi(l), l === "-0"),
      milliseconds: h(Yd(u), c)
    }
  ];
}
const PA = {
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
function Jd(t, e, r, n, i, s, a) {
  const o = {
    year: e.length === 2 ? qh(gi(e)) : gi(e),
    month: A_.indexOf(r) + 1,
    day: gi(n),
    hour: gi(i),
    minute: gi(s)
  };
  return a && (o.second = gi(a)), t && (o.weekday = t.length > 3 ? k_.indexOf(t) + 1 : D_.indexOf(t) + 1), o;
}
const LA = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function AA(t) {
  const [
    ,
    e,
    r,
    n,
    i,
    s,
    a,
    o,
    l,
    u,
    f,
    c
  ] = t, h = Jd(e, i, n, r, s, a, o);
  let d;
  return l ? d = PA[l] : u ? d = 0 : d = Cc(f, c), [h, new Qt(d)];
}
function IA(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const kA = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, DA = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, RA = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Zg(t) {
  const [, e, r, n, i, s, a, o] = t;
  return [Jd(e, i, n, r, s, a, o), Qt.utcInstance];
}
function $A(t) {
  const [, e, r, n, i, s, a, o] = t;
  return [Jd(e, o, r, n, i, s, a), Qt.utcInstance];
}
const FA = ya(bA, Zd), VA = ya(_A, Zd), jA = ya(EA, Zd), GA = ya(U_), W_ = va(
  MA,
  _a,
  Bo,
  Wo
), UA = va(
  SA,
  _a,
  Bo,
  Wo
), BA = va(
  wA,
  _a,
  Bo,
  Wo
), WA = va(
  _a,
  Bo,
  Wo
);
function qA(t) {
  return ba(
    t,
    [FA, W_],
    [VA, UA],
    [jA, BA],
    [GA, WA]
  );
}
function HA(t) {
  return ba(IA(t), [LA, AA]);
}
function zA(t) {
  return ba(
    t,
    [kA, Zg],
    [DA, Zg],
    [RA, $A]
  );
}
function YA(t) {
  return ba(t, [NA, CA]);
}
const KA = va(_a);
function XA(t) {
  return ba(t, [TA, KA]);
}
const ZA = ya(OA, xA), JA = ya(B_), QA = va(
  _a,
  Bo,
  Wo
);
function eI(t) {
  return ba(
    t,
    [ZA, W_],
    [JA, QA]
  );
}
const Jg = "Invalid Duration", q_ = {
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
}, tI = {
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
  ...q_
}, Or = 146097 / 400, ks = 146097 / 4800, rI = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Or / 7,
    days: Or,
    hours: Or * 24,
    minutes: Or * 24 * 60,
    seconds: Or * 24 * 60 * 60,
    milliseconds: Or * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Or / 28,
    days: Or / 4,
    hours: Or * 24 / 4,
    minutes: Or * 24 * 60 / 4,
    seconds: Or * 24 * 60 * 60 / 4,
    milliseconds: Or * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: ks / 7,
    days: ks,
    hours: ks * 24,
    minutes: ks * 24 * 60,
    seconds: ks * 24 * 60 * 60,
    milliseconds: ks * 24 * 60 * 60 * 1e3
  },
  ...q_
}, as = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], nI = as.slice(0).reverse();
function li(t, e, r = !1) {
  const n = {
    values: r ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Re(n);
}
function H_(t, e) {
  var n;
  let r = (n = e.milliseconds) != null ? n : 0;
  for (const i of nI.slice(1))
    e[i] && (r += e[i] * t[i].milliseconds);
  return r;
}
function Qg(t, e) {
  const r = H_(t, e) < 0 ? -1 : 1;
  as.reduceRight((n, i) => {
    if (Se(e[i]))
      return n;
    if (n) {
      const s = e[n] * r, a = t[i][n], o = Math.floor(s / a);
      e[i] += o * r, e[n] -= o * a * r;
    }
    return i;
  }, null), as.reduce((n, i) => {
    if (Se(e[i]))
      return n;
    if (n) {
      const s = e[n] % 1;
      e[n] -= s, e[i] += s * t[n][i];
    }
    return i;
  }, null);
}
function iI(t) {
  const e = {};
  for (const [r, n] of Object.entries(t))
    n !== 0 && (e[r] = n);
  return e;
}
class Re {
  constructor(e) {
    const r = e.conversionAccuracy === "longterm" || !1;
    let n = r ? rI : tI;
    e.matrix && (n = e.matrix), this.values = e.values, this.loc = e.loc || Ke.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n, this.isLuxonDuration = !0;
  }
  static fromMillis(e, r) {
    return Re.fromObject({ milliseconds: e }, r);
  }
  static fromObject(e, r = {}) {
    if (e == null || typeof e != "object")
      throw new or(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Re({
      values: Vu(e, Re.normalizeUnit),
      loc: Ke.fromObject(r),
      conversionAccuracy: r.conversionAccuracy,
      matrix: r.matrix
    });
  }
  static fromDurationLike(e) {
    if (ds(e))
      return Re.fromMillis(e);
    if (Re.isDuration(e))
      return e;
    if (typeof e == "object")
      return Re.fromObject(e);
    throw new or(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  static fromISO(e, r) {
    const [n] = YA(e);
    return n ? Re.fromObject(n, r) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, r) {
    const [n] = XA(e);
    return n ? Re.fromObject(n, r) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, r = null) {
    if (!e)
      throw new or("need to specify a reason the Duration is invalid");
    const n = e instanceof Zr ? e : new Zr(e, r);
    if (mt.throwOnInvalid)
      throw new LL(n);
    return new Re({ invalid: n });
  }
  static normalizeUnit(e) {
    const r = {
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
    if (!r)
      throw new r_(e);
    return r;
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
  toFormat(e, r = {}) {
    const n = {
      ...r,
      floor: r.round !== !1 && r.floor !== !1
    };
    return this.isValid ? Wt.create(this.loc, n).formatDurationFromString(this, e) : Jg;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return Jg;
    const r = as.map((n) => {
      const i = this.values[n];
      return Se(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: n.slice(0, -1) }).format(i);
    }).filter((n) => n);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(r);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Kd(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const r = this.toMillis();
    return r < 0 || r >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, xe.fromMillis(r, { zone: "UTC" }).toISOTime(e));
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  toMillis() {
    return this.isValid ? H_(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e), n = {};
    for (const i of as)
      (da(r.values, i) || da(this.values, i)) && (n[i] = r.get(i) + this.get(i));
    return li(this, { values: n }, !0);
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e);
    return this.plus(r.negate());
  }
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const r = {};
    for (const n of Object.keys(this.values))
      r[n] = L_(e(this.values[n], n));
    return li(this, { values: r }, !0);
  }
  get(e) {
    return this[Re.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const r = { ...this.values, ...Vu(e, Re.normalizeUnit) };
    return li(this, { values: r });
  }
  reconfigure({ locale: e, numberingSystem: r, conversionAccuracy: n, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: r }), matrix: i, conversionAccuracy: n };
    return li(this, a);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Qg(this.matrix, e), li(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = iI(this.normalize().shiftToAll().toObject());
    return li(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => Re.normalizeUnit(a));
    const r = {}, n = {}, i = this.toObject();
    let s;
    for (const a of as)
      if (e.indexOf(a) >= 0) {
        s = a;
        let o = 0;
        for (const u in n)
          o += this.matrix[u][a] * n[u], n[u] = 0;
        ds(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        r[a] = l, n[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        ds(i[a]) && (n[a] = i[a]);
    for (const a in n)
      n[a] !== 0 && (r[s] += a === s ? n[a] : n[a] / this.matrix[s][a]);
    return Qg(this.matrix, r), li(this, { values: r }, !0);
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
    for (const r of Object.keys(this.values))
      e[r] = this.values[r] === 0 ? 0 : -this.values[r];
    return li(this, { values: e }, !0);
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
    function r(n, i) {
      return n === void 0 || n === 0 ? i === void 0 || i === 0 : n === i;
    }
    for (const n of as)
      if (!r(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const Ds = "Invalid Interval";
function sI(t, e) {
  return !t || !t.isValid ? ft.invalid("missing or invalid start") : !e || !e.isValid ? ft.invalid("missing or invalid end") : e < t ? ft.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class ft {
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(e, r = null) {
    if (!e)
      throw new or("need to specify a reason the Interval is invalid");
    const n = e instanceof Zr ? e : new Zr(e, r);
    if (mt.throwOnInvalid)
      throw new PL(n);
    return new ft({ invalid: n });
  }
  static fromDateTimes(e, r) {
    const n = Aa(e), i = Aa(r), s = sI(n, i);
    return s == null ? new ft({
      start: n,
      end: i
    }) : s;
  }
  static after(e, r) {
    const n = Re.fromDurationLike(r), i = Aa(e);
    return ft.fromDateTimes(i, i.plus(n));
  }
  static before(e, r) {
    const n = Re.fromDurationLike(r), i = Aa(e);
    return ft.fromDateTimes(i.minus(n), i);
  }
  static fromISO(e, r) {
    const [n, i] = (e || "").split("/", 2);
    if (n && i) {
      let s, a;
      try {
        s = xe.fromISO(n, r), a = s.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = xe.fromISO(i, r), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return ft.fromDateTimes(s, o);
      if (a) {
        const u = Re.fromISO(i, r);
        if (u.isValid)
          return ft.after(s, u);
      } else if (l) {
        const u = Re.fromISO(n, r);
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
  count(e = "milliseconds", r) {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(e, r);
    let i;
    return r != null && r.useLocaleWeeks ? i = this.end.reconfigure({ locale: n.locale }) : i = this.end, i = i.startOf(e, r), Math.floor(i.diff(n, e).get(e)) + (i.valueOf() !== this.end.valueOf());
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
  set({ start: e, end: r } = {}) {
    return this.isValid ? ft.fromDateTimes(e || this.s, r || this.e) : this;
  }
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const r = e.map(Aa).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), n = [];
    let { s: i } = this, s = 0;
    for (; i < this.e; ) {
      const a = r[s] || this.e, o = +a > +this.e ? this.e : a;
      n.push(ft.fromDateTimes(i, o)), i = o, s += 1;
    }
    return n;
  }
  splitBy(e) {
    const r = Re.fromDurationLike(e);
    if (!this.isValid || !r.isValid || r.as("milliseconds") === 0)
      return [];
    let { s: n } = this, i = 1, s;
    const a = [];
    for (; n < this.e; ) {
      const o = this.start.plus(r.mapUnits((l) => l * i));
      s = +o > +this.e ? this.e : o, a.push(ft.fromDateTimes(n, s)), n = s, i += 1;
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
    const r = this.s > e.s ? this.s : e.s, n = this.e < e.e ? this.e : e.e;
    return r >= n ? null : ft.fromDateTimes(r, n);
  }
  union(e) {
    if (!this.isValid)
      return this;
    const r = this.s < e.s ? this.s : e.s, n = this.e > e.e ? this.e : e.e;
    return ft.fromDateTimes(r, n);
  }
  static merge(e) {
    const [r, n] = e.sort((i, s) => i.s - s.s).reduce(
      ([i, s], a) => s ? s.overlaps(a) || s.abutsStart(a) ? [i, s.union(a)] : [i.concat([s]), a] : [i, a],
      [[], null]
    );
    return n && r.push(n), r;
  }
  static xor(e) {
    let r = null, n = 0;
    const i = [], s = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...s), o = a.sort((l, u) => l.time - u.time);
    for (const l of o)
      n += l.type === "s" ? 1 : -1, n === 1 ? r = l.time : (r && +r != +l.time && i.push(ft.fromDateTimes(r, l.time)), r = null);
    return ft.merge(i);
  }
  difference(...e) {
    return ft.xor([this].concat(e)).map((r) => this.intersection(r)).filter((r) => r && !r.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Ds;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(e = Ru, r = {}) {
    return this.isValid ? Wt.create(this.s.loc.clone(r), e).formatInterval(this) : Ds;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Ds;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ds;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Ds;
  }
  toFormat(e, { separator: r = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : Ds;
  }
  toDuration(e, r) {
    return this.isValid ? this.e.diff(this.s, e, r) : Re.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return ft.fromDateTimes(e(this.s), e(this.e));
  }
}
class _l {
  static hasDST(e = mt.defaultZone) {
    const r = xe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && r.offset !== r.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Yn.isValidZone(e);
  }
  static normalizeZone(e) {
    return _i(e, mt.defaultZone);
  }
  static getStartOfWeek({ locale: e = null, locObj: r = null } = {}) {
    return (r || Ke.create(e)).getStartOfWeek();
  }
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: r = null } = {}) {
    return (r || Ke.create(e)).getMinDaysInFirstWeek();
  }
  static getWeekendWeekdays({ locale: e = null, locObj: r = null } = {}) {
    return (r || Ke.create(e)).getWeekendDays().slice();
  }
  static months(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Ke.create(r, n, s)).months(e);
  }
  static monthsFormat(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Ke.create(r, n, s)).months(e, !0);
  }
  static weekdays(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null } = {}) {
    return (i || Ke.create(r, n, null)).weekdays(e);
  }
  static weekdaysFormat(e = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null } = {}) {
    return (i || Ke.create(r, n, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return Ke.create(e).meridiems();
  }
  static eras(e = "short", { locale: r = null } = {}) {
    return Ke.create(r, null, "gregory").eras(e);
  }
  static features() {
    return { relative: N_(), localeWeek: C_() };
  }
}
function ey(t, e) {
  const r = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), n = r(e) - r(t);
  return Math.floor(Re.fromMillis(n).as("days"));
}
function aI(t, e, r) {
  const n = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = ey(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", ey]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of n)
    r.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function oI(t, e, r, n) {
  let [i, s, a, o] = aI(t, e, r);
  const l = e - i, u = r.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = Re.fromObject(s, n);
  return u.length > 0 ? Re.fromMillis(l, n).shiftTo(...u).plus(f) : f;
}
const Qd = {
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
}, ty = {
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
}, lI = Qd.hanidec.replace(/[\[|\]]/g, "").split("");
function uI(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let r = 0; r < t.length; r++) {
      const n = t.charCodeAt(r);
      if (t[r].search(Qd.hanidec) !== -1)
        e += lI.indexOf(t[r]);
      else
        for (const i in ty) {
          const [s, a] = ty[i];
          n >= s && n <= a && (e += n - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Gr({ numberingSystem: t }, e = "") {
  return new RegExp(`${Qd[t || "latn"]}${e}`);
}
const cI = "missing Intl.DateTimeFormat.formatToParts support";
function Ve(t, e = (r) => r) {
  return { regex: t, deser: ([r]) => e(uI(r)) };
}
const fI = String.fromCharCode(160), z_ = `[ ${fI}]`, Y_ = new RegExp(z_, "g");
function hI(t) {
  return t.replace(/\./g, "\\.?").replace(Y_, z_);
}
function ry(t) {
  return t.replace(/\./g, "").replace(Y_, " ").toLowerCase();
}
function Ur(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(hI).join("|")),
    deser: ([r]) => t.findIndex((n) => ry(r) === ry(n)) + e
  };
}
function ny(t, e) {
  return { regex: t, deser: ([, r, n]) => Cc(r, n), groups: e };
}
function El(t) {
  return { regex: t, deser: ([e]) => e };
}
function dI(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function pI(t, e) {
  const r = Gr(e), n = Gr(e, "{2}"), i = Gr(e, "{3}"), s = Gr(e, "{4}"), a = Gr(e, "{6}"), o = Gr(e, "{1,2}"), l = Gr(e, "{1,3}"), u = Gr(e, "{1,6}"), f = Gr(e, "{1,9}"), c = Gr(e, "{2,4}"), h = Gr(e, "{4,6}"), d = (g) => ({ regex: RegExp(dI(g.val)), deser: ([v]) => v, literal: !0 }), m = ((g) => {
    if (t.literal)
      return d(g);
    switch (g.val) {
      case "G":
        return Ur(e.eras("short"), 0);
      case "GG":
        return Ur(e.eras("long"), 0);
      case "y":
        return Ve(u);
      case "yy":
        return Ve(c, qh);
      case "yyyy":
        return Ve(s);
      case "yyyyy":
        return Ve(h);
      case "yyyyyy":
        return Ve(a);
      case "M":
        return Ve(o);
      case "MM":
        return Ve(n);
      case "MMM":
        return Ur(e.months("short", !0), 1);
      case "MMMM":
        return Ur(e.months("long", !0), 1);
      case "L":
        return Ve(o);
      case "LL":
        return Ve(n);
      case "LLL":
        return Ur(e.months("short", !1), 1);
      case "LLLL":
        return Ur(e.months("long", !1), 1);
      case "d":
        return Ve(o);
      case "dd":
        return Ve(n);
      case "o":
        return Ve(l);
      case "ooo":
        return Ve(i);
      case "HH":
        return Ve(n);
      case "H":
        return Ve(o);
      case "hh":
        return Ve(n);
      case "h":
        return Ve(o);
      case "mm":
        return Ve(n);
      case "m":
        return Ve(o);
      case "q":
        return Ve(o);
      case "qq":
        return Ve(n);
      case "s":
        return Ve(o);
      case "ss":
        return Ve(n);
      case "S":
        return Ve(l);
      case "SSS":
        return Ve(i);
      case "u":
        return El(f);
      case "uu":
        return El(o);
      case "uuu":
        return Ve(r);
      case "a":
        return Ur(e.meridiems(), 0);
      case "kkkk":
        return Ve(s);
      case "kk":
        return Ve(c, qh);
      case "W":
        return Ve(o);
      case "WW":
        return Ve(n);
      case "E":
      case "c":
        return Ve(r);
      case "EEE":
        return Ur(e.weekdays("short", !1), 1);
      case "EEEE":
        return Ur(e.weekdays("long", !1), 1);
      case "ccc":
        return Ur(e.weekdays("short", !0), 1);
      case "cccc":
        return Ur(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return ny(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return ny(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return El(/[a-z_+-/]{1,256}?/i);
      case " ":
        return El(/[^\S\n\r]/);
      default:
        return d(g);
    }
  })(t) || {
    invalidReason: cI
  };
  return m.token = t, m;
}
const mI = {
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
function gI(t, e, r) {
  const { type: n, value: i } = t;
  if (n === "literal") {
    const l = /^\s+$/.test(i);
    return {
      literal: !l,
      val: l ? " " : i
    };
  }
  const s = e[n];
  let a = n;
  n === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = r.hour12 ? "hour12" : "hour24");
  let o = mI[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function yI(t) {
  return [`^${t.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, t];
}
function vI(t, e, r) {
  const n = t.match(e);
  if (n) {
    const i = {};
    let s = 1;
    for (const a in r)
      if (da(r, a)) {
        const o = r[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(n.slice(s, s + l))), s += l;
      }
    return [n, i];
  } else
    return [n, {}];
}
function bI(t) {
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
  let r = null, n;
  return Se(t.z) || (r = Yn.create(t.z)), Se(t.Z) || (r || (r = new Qt(t.Z)), n = t.Z), Se(t.q) || (t.M = (t.q - 1) * 3 + 1), Se(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), Se(t.u) || (t.S = Yd(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), r, n];
}
let df = null;
function _I() {
  return df || (df = xe.fromMillis(1555555555555)), df;
}
function EI(t, e) {
  if (t.literal)
    return t;
  const r = Wt.macroTokenToFormatOpts(t.val), n = Z_(r, e);
  return n == null || n.includes(void 0) ? t : n;
}
function K_(t, e) {
  return Array.prototype.concat(...t.map((r) => EI(r, e)));
}
function X_(t, e, r) {
  const n = K_(Wt.parseFormat(r), t), i = n.map((a) => pI(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: n, invalidReason: s.invalidReason };
  {
    const [a, o] = yI(i), l = RegExp(a, "i"), [u, f] = vI(e, l, o), [c, h, d] = f ? bI(f) : [null, null, void 0];
    if (da(f, "a") && da(f, "H"))
      throw new Ys(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: n, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function SI(t, e, r) {
  const { result: n, zone: i, specificOffset: s, invalidReason: a } = X_(t, e, r);
  return [n, i, s, a];
}
function Z_(t, e) {
  if (!t)
    return null;
  const n = Wt.create(e, t).dtFormatter(_I()), i = n.formatToParts(), s = n.resolvedOptions();
  return i.map((a) => gI(a, t, s));
}
const pf = "Invalid DateTime", iy = 864e13;
function Sl(t) {
  return new Zr("unsupported zone", `the zone "${t.name}" is not supported`);
}
function mf(t) {
  return t.weekData === null && (t.weekData = $u(t.c)), t.weekData;
}
function gf(t) {
  return t.localWeekData === null && (t.localWeekData = $u(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Zi(t, e) {
  const r = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new xe({ ...r, ...e, old: r });
}
function J_(t, e, r) {
  let n = t - e * 60 * 1e3;
  const i = r.offset(n);
  if (e === i)
    return [n, e];
  n -= (i - e) * 60 * 1e3;
  const s = r.offset(n);
  return i === s ? [n, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function wl(t, e) {
  t += e * 60 * 1e3;
  const r = new Date(t);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds()
  };
}
function iu(t, e, r) {
  return J_(Nc(t), e, r);
}
function sy(t, e) {
  const r = t.o, n = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: n,
    month: i,
    day: Math.min(t.c.day, Fu(n, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = Re.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Nc(s);
  let [l, u] = J_(o, r, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function La(t, e, r, n, i, s) {
  const { setZone: a, zone: o } = r;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = xe.fromObject(t, {
      ...r,
      zone: l,
      specificOffset: s
    });
    return a ? u : u.setZone(o);
  } else
    return xe.invalid(
      new Zr("unparsable", `the input "${i}" can't be parsed as ${n}`)
    );
}
function Ol(t, e, r = !0) {
  return t.isValid ? Wt.create(Ke.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function yf(t, e) {
  const r = t.c.year > 9999 || t.c.year < 0;
  let n = "";
  return r && t.c.year >= 0 && (n += "+"), n += _t(t.c.year, r ? 6 : 4), e ? (n += "-", n += _t(t.c.month), n += "-", n += _t(t.c.day)) : (n += _t(t.c.month), n += _t(t.c.day)), n;
}
function ay(t, e, r, n, i, s) {
  let a = _t(t.c.hour);
  return e ? (a += ":", a += _t(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (a += ":")) : a += _t(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (a += _t(t.c.second), (t.c.millisecond !== 0 || !n) && (a += ".", a += _t(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += _t(Math.trunc(-t.o / 60)), a += ":", a += _t(Math.trunc(-t.o % 60))) : (a += "+", a += _t(Math.trunc(t.o / 60)), a += ":", a += _t(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const Q_ = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, wI = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, OI = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, e1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], xI = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], MI = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function TI(t) {
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
    throw new r_(t);
  return e;
}
function oy(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return TI(t);
  }
}
function ly(t, e) {
  const r = _i(e.zone, mt.defaultZone), n = Ke.fromObject(e), i = mt.now();
  let s, a;
  if (Se(t.year))
    s = i;
  else {
    for (const u of e1)
      Se(t[u]) && (t[u] = Q_[u]);
    const o = M_(t) || T_(t);
    if (o)
      return xe.invalid(o);
    const l = r.offset(i);
    [s, a] = iu(t, l, r);
  }
  return new xe({ ts: s, zone: r, loc: n, o: a });
}
function uy(t, e, r) {
  const n = Se(r.round) ? !0 : r.round, i = (a, o) => (a = Kd(a, n || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(a, o)), s = (a) => r.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (r.unit)
    return i(s(r.unit), r.unit);
  for (const a of r.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, r.units[r.units.length - 1]);
}
function cy(t) {
  let e = {}, r;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], r = Array.from(t).slice(0, t.length - 1)) : r = Array.from(t), [e, r];
}
class xe {
  constructor(e) {
    const r = e.zone || mt.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new Zr("invalid input") : null) || (r.isValid ? null : Sl(r));
    this.ts = Se(e.ts) ? mt.now() : e.ts;
    let i = null, s = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(r))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = r.offset(this.ts);
        i = wl(this.ts, o), n = Number.isNaN(i.year) ? new Zr("invalid input") : null, i = n ? null : i, s = n ? null : o;
      }
    this._zone = r, this.loc = e.loc || Ke.create(), this.invalid = n, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new xe({});
  }
  static local() {
    const [e, r] = cy(arguments), [n, i, s, a, o, l, u] = r;
    return ly({ year: n, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, r] = cy(arguments), [n, i, s, a, o, l, u] = r;
    return e.zone = Qt.utcInstance, ly({ year: n, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, r = {}) {
    const n = rA(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return xe.invalid("invalid input");
    const i = _i(r.zone, mt.defaultZone);
    return i.isValid ? new xe({
      ts: n,
      zone: i,
      loc: Ke.fromObject(r)
    }) : xe.invalid(Sl(i));
  }
  static fromMillis(e, r = {}) {
    if (ds(e))
      return e < -iy || e > iy ? xe.invalid("Timestamp out of range") : new xe({
        ts: e,
        zone: _i(r.zone, mt.defaultZone),
        loc: Ke.fromObject(r)
      });
    throw new or(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, r = {}) {
    if (ds(e))
      return new xe({
        ts: e * 1e3,
        zone: _i(r.zone, mt.defaultZone),
        loc: Ke.fromObject(r)
      });
    throw new or("fromSeconds requires a numerical input");
  }
  static fromObject(e, r = {}) {
    e = e || {};
    const n = _i(r.zone, mt.defaultZone);
    if (!n.isValid)
      return xe.invalid(Sl(n));
    const i = Ke.fromObject(r), s = Vu(e, oy), { minDaysInFirstWeek: a, startOfWeek: o } = zg(s, i), l = mt.now(), u = Se(r.specificOffset) ? n.offset(l) : r.specificOffset, f = !Se(s.ordinal), c = !Se(s.year), h = !Se(s.month) || !Se(s.day), d = c || h, p = s.weekYear || s.weekNumber;
    if ((d || f) && p)
      throw new Ys(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && f)
      throw new Ys("Can't mix ordinal dates with month/day");
    const m = p || s.weekday && !d;
    let g, v, y = wl(l, u);
    m ? (g = xI, v = wI, y = $u(y, a, o)) : f ? (g = MI, v = OI, y = hf(y)) : (g = e1, v = Q_);
    let _ = !1;
    for (const C of g) {
      const R = s[C];
      Se(R) ? _ ? s[C] = v[C] : s[C] = y[C] : _ = !0;
    }
    const E = m ? QL(s, a, o) : f ? eA(s) : M_(s), x = E || T_(s);
    if (x)
      return xe.invalid(x);
    const N = m ? qg(s, a, o) : f ? Hg(s) : s, [M, L] = iu(N, u, n), D = new xe({
      ts: M,
      zone: n,
      o: L,
      loc: i
    });
    return s.weekday && d && e.weekday !== D.weekday ? xe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${D.toISO()}`
    ) : D;
  }
  static fromISO(e, r = {}) {
    const [n, i] = qA(e);
    return La(n, i, r, "ISO 8601", e);
  }
  static fromRFC2822(e, r = {}) {
    const [n, i] = HA(e);
    return La(n, i, r, "RFC 2822", e);
  }
  static fromHTTP(e, r = {}) {
    const [n, i] = zA(e);
    return La(n, i, r, "HTTP", r);
  }
  static fromFormat(e, r, n = {}) {
    if (Se(e) || Se(r))
      throw new or("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = n, a = Ke.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = SI(a, e, r);
    return f ? xe.invalid(f) : La(o, l, n, `format ${r}`, e, u);
  }
  static fromString(e, r, n = {}) {
    return xe.fromFormat(e, r, n);
  }
  static fromSQL(e, r = {}) {
    const [n, i] = eI(e);
    return La(n, i, r, "SQL", e);
  }
  static invalid(e, r = null) {
    if (!e)
      throw new or("need to specify a reason the DateTime is invalid");
    const n = e instanceof Zr ? e : new Zr(e, r);
    if (mt.throwOnInvalid)
      throw new CL(n);
    return new xe({ invalid: n });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, r = {}) {
    const n = Z_(e, Ke.fromObject(r));
    return n ? n.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(e, r = {}) {
    return K_(Wt.parseFormat(e), Ke.fromObject(r)).map((i) => i.val).join("");
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
    return this.isValid ? mf(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? mf(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? mf(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? gf(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? gf(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? gf(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? hf(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? _l.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? _l.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? _l.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? _l.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, r = 6e4, n = Nc(this.c), i = this.zone.offset(n - e), s = this.zone.offset(n + e), a = this.zone.offset(n - i * r), o = this.zone.offset(n - s * r);
    if (a === o)
      return [this];
    const l = n - a * r, u = n - o * r, f = wl(l, a), c = wl(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Zi(this, { ts: l }), Zi(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return Uo(this.year);
  }
  get daysInMonth() {
    return Fu(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? ia(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? So(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? So(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    const { locale: r, numberingSystem: n, calendar: i } = Wt.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: r, numberingSystem: n, outputCalendar: i };
  }
  toUTC(e = 0, r = {}) {
    return this.setZone(Qt.instance(e), r);
  }
  toLocal() {
    return this.setZone(mt.defaultZone);
  }
  setZone(e, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if (e = _i(e, mt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (r || n) {
        const s = e.offset(this.ts), a = this.toObject();
        [i] = iu(a, s, e);
      }
      return Zi(this, { ts: i, zone: e });
    } else
      return xe.invalid(Sl(e));
  }
  reconfigure({ locale: e, numberingSystem: r, outputCalendar: n } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: r, outputCalendar: n });
    return Zi(this, { loc: i });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const r = Vu(e, oy), { minDaysInFirstWeek: n, startOfWeek: i } = zg(r, this.loc), s = !Se(r.weekYear) || !Se(r.weekNumber) || !Se(r.weekday), a = !Se(r.ordinal), o = !Se(r.year), l = !Se(r.month) || !Se(r.day), u = o || l, f = r.weekYear || r.weekNumber;
    if ((u || a) && f)
      throw new Ys(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Ys("Can't mix ordinal dates with month/day");
    let c;
    s ? c = qg(
      { ...$u(this.c, n, i), ...r },
      n,
      i
    ) : Se(r.ordinal) ? (c = { ...this.toObject(), ...r }, Se(r.day) && (c.day = Math.min(Fu(c.year, c.month), c.day))) : c = Hg({ ...hf(this.c), ...r });
    const [h, d] = iu(c, this.o, this.zone);
    return Zi(this, { ts: h, o: d });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e);
    return Zi(this, sy(this, r));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e).negate();
    return Zi(this, sy(this, r));
  }
  startOf(e, { useLocaleWeeks: r = !1 } = {}) {
    if (!this.isValid)
      return this;
    const n = {}, i = Re.normalizeUnit(e);
    switch (i) {
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
    if (i === "weeks")
      if (r) {
        const s = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < s && (n.weekNumber = this.weekNumber - 1), n.weekday = s;
      } else
        n.weekday = 1;
    if (i === "quarters") {
      const s = Math.ceil(this.month / 3);
      n.month = (s - 1) * 3 + 1;
    }
    return this.set(n);
  }
  endOf(e, r) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, r).minus(1) : this;
  }
  toFormat(e, r = {}) {
    return this.isValid ? Wt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : pf;
  }
  toLocaleString(e = Ru, r = {}) {
    return this.isValid ? Wt.create(this.loc.clone(r), e).formatDateTime(this) : pf;
  }
  toLocaleParts(e = {}) {
    return this.isValid ? Wt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  toISO({
    format: e = "extended",
    suppressSeconds: r = !1,
    suppressMilliseconds: n = !1,
    includeOffset: i = !0,
    extendedZone: s = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    let o = yf(this, a);
    return o += "T", o += ay(this, a, r, n, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? yf(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return Ol(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: r = !1,
    includeOffset: n = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + ay(
      this,
      a === "extended",
      r,
      e,
      n,
      s
    ) : null;
  }
  toRFC2822() {
    return Ol(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return Ol(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? yf(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: r = !1, includeOffsetSpace: n = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (r || e) && (n && (i += " "), r ? i += "z" : e && (i += "ZZ")), Ol(this, i, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : pf;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
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
    const r = { ...this.c };
    return e.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, r = "milliseconds", n = {}) {
    if (!this.isValid || !e.isValid)
      return Re.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n }, s = nA(r).map(Re.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = oI(o, l, s, i);
    return a ? u.negate() : u;
  }
  diffNow(e = "milliseconds", r = {}) {
    return this.diff(xe.now(), e, r);
  }
  until(e) {
    return this.isValid ? ft.fromDateTimes(this, e) : this;
  }
  hasSame(e, r, n) {
    if (!this.isValid)
      return !1;
    const i = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(r, n) <= i && i <= s.endOf(r, n);
  }
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const r = e.base || xe.fromObject({}, { zone: this.zone }), n = e.padding ? this < r ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), uy(r, this.plus(n), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? uy(e.base || xe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(xe.isDateTime))
      throw new or("min requires all arguments be DateTimes");
    return Yg(e, (r) => r.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(xe.isDateTime))
      throw new or("max requires all arguments be DateTimes");
    return Yg(e, (r) => r.valueOf(), Math.max);
  }
  static fromFormatExplain(e, r, n = {}) {
    const { locale: i = null, numberingSystem: s = null } = n, a = Ke.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return X_(a, e, r);
  }
  static fromStringExplain(e, r, n = {}) {
    return xe.fromFormatExplain(e, r, n);
  }
  static get DATE_SHORT() {
    return Ru;
  }
  static get DATE_MED() {
    return n_;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return AL;
  }
  static get DATE_FULL() {
    return i_;
  }
  static get DATE_HUGE() {
    return s_;
  }
  static get TIME_SIMPLE() {
    return a_;
  }
  static get TIME_WITH_SECONDS() {
    return o_;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return l_;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return u_;
  }
  static get TIME_24_SIMPLE() {
    return c_;
  }
  static get TIME_24_WITH_SECONDS() {
    return f_;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return h_;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return d_;
  }
  static get DATETIME_SHORT() {
    return p_;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return m_;
  }
  static get DATETIME_MED() {
    return g_;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return y_;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return IL;
  }
  static get DATETIME_FULL() {
    return v_;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return b_;
  }
  static get DATETIME_HUGE() {
    return __;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return E_;
  }
}
function Aa(t) {
  if (xe.isDateTime(t))
    return t;
  if (t && t.valueOf && ds(t.valueOf()))
    return xe.fromJSDate(t);
  if (t && typeof t == "object")
    return xe.fromObject(t);
  throw new or(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const t1 = [0, 1, 0, 0];
function fy(t, e = "second", r, n) {
  const { t: i } = Ze(), s = new Date(t).toISOString(), a = {
    year: i("yyyy"),
    month: i("M/yyyy"),
    day: i("M/d/yyyy"),
    second: i("M/d/yyyy HH:mm:ss")
  }, l = (r ? {
    year: "yyyy",
    month: "yyyy-MM",
    day: "yyyy-MM-dd",
    second: void 0
  } : a)[e];
  return l ? xe.fromISO(s).toFormat(
    `${n ? "UTC:" : ""}${l}`
  ) : s.replace(/\.\d{3}/, "");
}
function Hh(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function vf(t) {
  return xe.fromISO(t).toFormat("yyyy-MM-dd");
}
function NI(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? CI(t, e) : PI(t, e);
}
function CI(t, e) {
  var l;
  const r = (l = e.timeValueList) != null ? l : [];
  let n, i = 0, s = r.length - 1;
  for (; s - i > 1; )
    n = Math.floor((i + s) / 2), r[n] >= t ? s = n : i = n;
  const a = Math.abs(r[i] - t), o = Math.abs(r[s] - t);
  return r[a < o ? i : s];
}
function PI(t, e) {
  var l;
  const r = (l = e.timeInterval) != null ? l : t1, n = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
  let a = e.minValue, o = Math.abs(n - a);
  for (let u = 1; ; u++) {
    const f = new Date(i.getTime());
    if (f.setFullYear(i.getFullYear() + u * r[0]), f.setMonth(
      i.getMonth() + u * r[1],
      i.getDate() + u * r[2]
    ), f.setSeconds(i.getSeconds() + u * r[3]), f.getTime() > s)
      break;
    const c = Math.abs(n - f.getTime());
    if (c <= o)
      a = f.getTime(), o = c;
    else
      break;
  }
  return a;
}
const vt = ws("map", () => {
  const t = en(), e = we({}), r = tt([]), n = tt([]), i = we(!1), s = we(!1), a = we(void 0);
  function o(y) {
    a.value = y;
  }
  function l(...y) {
    r.value = [.../* @__PURE__ */ new Set([...r.value, ...y])];
  }
  function u(...y) {
    n.value = [.../* @__PURE__ */ new Set([...n.value, ...y])];
  }
  function f(...y) {
    r.value = r.value.filter(
      (_) => y.indexOf(_.id) === -1
    ), n.value = n.value.filter(
      (_) => y.indexOf(_.id) === -1
    );
  }
  function c() {
    r.value = [];
  }
  function h(y) {
    var _;
    return !!((_ = r.value) != null && _.find((E) => E.id === y));
  }
  function d(y, _ = !1) {
    var x;
    const E = _ ? n : r;
    E.value = [
      ...((x = E.value) == null ? void 0 : x.sort(
        (N, M) => y.indexOf(N.id) - y.indexOf(M.id)
      )) || []
    ];
  }
  function p(y, _) {
    r.value = r.value.map((E) => E.id === y ? { ...E, opacity: _, previousOpacity: E.opacity } : E);
  }
  function m(y, _, E) {
    r.value = r.value.map((x) => {
      if (x.id === y) {
        const N = {
          ...x,
          currentTimeMinValue: _ ? Hh(_) : void 0,
          currentTimeMaxValue: E ? Hh(E) : void 0
        };
        return N.type === "WMTS" && (N.name = t.getLayerCurrentLabel(N)), N;
      }
      return x;
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
    layers: r,
    layers3d: n,
    is3dActive: i,
    is3dMesh: s,
    bgLayer: a,
    addLayers: l,
    add3dLayers: u,
    removeLayers: f,
    removeAllLayers: c,
    reorderLayers: d,
    setLayerOpacity: p,
    setLayerTime: m,
    setBgLayer: o,
    setIs3dActive: g,
    setIs3dMesh: v,
    hasLayer: h
  };
}), LI = "root_3d", AI = -222, Zt = ws(
  "config",
  () => {
    const t = tt(), e = we("main"), r = de(() => {
      var l;
      return (l = t.value) == null ? void 0 : l.themes;
    }), n = de(
      () => {
        var l;
        return (l = r.value) == null ? void 0 : l.find((u) => u.name === e.value);
      }
    ), i = de(() => {
      var l;
      return ((l = t.value) == null ? void 0 : l.background_layers) || [];
    }), s = de(() => {
      var u;
      const l = (u = r.value) == null ? void 0 : u.filter(
        (f) => {
          var c;
          return ((c = f.metadata) == null ? void 0 : c.ol3d_type) !== void 0;
        }
      );
      if (!!l)
        return {
          name: LI,
          id: AI,
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
      themes: r,
      themeName: e,
      theme: n,
      bgLayers: i,
      layerTrees_3d: s,
      setTheme: o,
      setThemes: a
    };
  },
  {}
);
function ps() {
  function t(o, l) {
    return r(o, void 0, l);
  }
  function e(o, l) {
    return r(void 0, o, l);
  }
  function r(o, l, u) {
    const { theme: f } = Zt();
    if (u = u || f, o && (u == null ? void 0 : u.id) === o || l && (u == null ? void 0 : u.name) === l)
      return u;
    if (u != null && u.children)
      for (const c of u.children) {
        const h = r(o, l, c);
        if (h)
          return h;
      }
  }
  function n(o) {
    const { layerTrees_3d: l } = Zt();
    return r(o, void 0, l);
  }
  function i(o) {
    const { bgLayers: l } = Zt();
    return l.find((u) => u.id === o);
  }
  function s(o) {
    const { bgLayers: l } = Zt();
    return l.find((u) => u.name === o);
  }
  function a(o) {
    const { setTheme: l } = Zt();
    l(o);
  }
  return {
    findById: t,
    findByName: e,
    find3dLayerById: n,
    findBgLayerById: i,
    findBgLayerByName: s,
    setTheme: a
  };
}
const hy = ps();
function en() {
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
    return l.opacity = l.previousOpacity = (f = (u = l.metadata) == null ? void 0 : u.start_opacity) != null ? f : 1, r(l), l;
  }
  function r(l) {
    var f, c, h, d, p, m, g;
    l.currentTimeMinValue || (l.currentTimeMinValue = (h = (f = l.time) == null ? void 0 : f.minDefValue) != null ? h : (c = l.time) == null ? void 0 : c.minValue);
    const u = ((d = l.time) == null ? void 0 : d.mode) === Un.RANGE;
    !l.currentTimeMaxValue && u && (l.currentTimeMaxValue = (g = (p = l.time) == null ? void 0 : p.maxDefValue) != null ? g : (m = l.time) == null ? void 0 : m.maxValue);
  }
  function n(l) {
    var c, h, d;
    const u = i(l);
    let f = l.name;
    return u && (f = (d = (h = (c = l.metadata) == null ? void 0 : c.time_layers) == null ? void 0 : h[u]) != null ? d : f), f;
  }
  function i(l) {
    return [
      l.currentTimeMinValue,
      ...l.currentTimeMaxValue ? [l.currentTimeMaxValue] : []
    ].join(OL);
  }
  function s(l) {
    var h, d;
    const u = Au();
    if (!((h = l.metadata) != null && h.exclusion))
      return;
    const f = vt(), c = f.layers.filter(
      (p) => {
        var m, g;
        return t(
          (m = l == null ? void 0 : l.metadata) == null ? void 0 : m.exclusion,
          (g = p == null ? void 0 : p.metadata) == null ? void 0 : g.exclusion
        );
      }
    );
    c.length > 0 && (f.removeLayers(...c.map((p) => p.id)), u.addNotification(
      lt.t(
        "The layer <b>{{layersToRemove}}</b> has been removed because it cannot be displayed while the layer <b>{{layer}}</b> is displayed",
        {
          count: c.length,
          layersToRemove: c.map((p) => lt.t(p.name, { ns: "client" })).join(", "),
          layer: lt.t(l.name, { ns: "client" }),
          ns: "client"
        }
      ),
      Eo.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = vt(), f = Au();
    t(
      (c = l.metadata) == null ? void 0 : c.exclusion,
      (d = (h = u.bgLayer) == null ? void 0 : h.metadata) == null ? void 0 : d.exclusion
    ) && (u.setBgLayer(null), f.addNotification(
      lt.t(
        "Background has been deactivated because the layer {{layer}} cannot be displayed on top of it.",
        {
          layer: lt.t(l.name, { ns: "client" }),
          ns: "client"
        }
      ),
      Eo.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var m;
    const c = Zt(), h = vt(), d = f ? c.layerTrees_3d : c.theme, p = hy.findById(l, d);
    if (p) {
      const g = ((m = p.metadata) == null ? void 0 : m.linked_layers) || [];
      u === !1 ? h.removeLayers(p.id, ...g) : (s(p), (f ? h.add3dLayers : h.addLayers)(
        e(p),
        ...g.map(
          (y) => e(
            hy.findById(parseInt(y, 10))
          )
        )
      ));
    }
  }
  return {
    initLayer: e,
    getLayerCurrentLabel: n,
    getLayerCurrentTime: i,
    handleExclusionLayers: s,
    toggleLayer: o
  };
}
class II {
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
const xl = new II();
function dy(t, e) {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => {
      t.apply(n);
    }, e);
  };
}
function aa(t) {
  return (t == null ? void 0 : t.trim()) && !isNaN(Number(t)) ? Number(t) : void 0;
}
function kI(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (r) => r !== null && !isNaN(Number(r)) ? parseFloat(r) : void 0
  )) || [];
}
function DI(t, e) {
  return (t == null ? void 0 : t.split(e).map(ep)) || [];
}
function ep(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function r1() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function En(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
const RI = En(/firefox/i);
En(/safari/i) && !En(/chrome/i) && En(/android/i);
En(/iP(ad|od|hone)/i);
En(/chrome/i) && En(/android/i);
En(/chrome/i);
En(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
En(/Edge/i);
const qo = "ipv6", Ho = "applogin", zo = "localforage", oa = "debug", ju = "fid", Li = "lang", Gu = "layersOpen", Uu = "address", zh = "version", $I = "map_id", py = "layers", my = "bgLayer", gy = "opacities", wo = "theme", yy = "time", vy = "zoom", FI = "SRS", by = "X", _y = "Y", Bu = "serial", n1 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Yh = "lc", Kh = "sliderRatio", i1 = "bgOpacity", VI = "layers_indices", Ey = "layers_opacity", Sy = "layers_visibility";
var kt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(kt || {});
class s1 {
}
class Wu extends s1 {
  static processRules(e) {
    return Wu.ruleUseLocalStorage(e) ? kt.localStorage : kt.permalink;
  }
  static processRulesForKey(e, r) {
    if (e === wo && {}.VITE_DEPLOY_GHPAGES !== "true")
      return kt.permalinkAsPath;
    if (n1.includes(e))
      return kt.localStorage;
    if (e === Bu)
      return kt.permalink;
    if (e === Gu)
      return kt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [jI, GI, UI].reduce(
      (r, n) => r || n(e),
      !1
    );
  }
}
const jI = (t) => Object.keys(t).length === 0, GI = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(qo) || t.hasOwnProperty(Ho) || t.hasOwnProperty(zo)), UI = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(qo) && t.hasOwnProperty(Ho) && t.hasOwnProperty(zo);
class qu extends s1 {
  static processRules() {
    return kt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, r) {
    if (qu.ruleUsePermalink(e))
      return kt.permalink;
    if (e === Gu || n1.includes(e))
      return kt.localStorage;
    if (e === Bu)
      return kt.permalink;
    if (e === wo)
      return kt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      BI,
      WI,
      qI
    ].reduce(
      (r, n) => r || n(e),
      !1
    );
  }
}
const BI = (t) => t === Yh || t === Kh, WI = (t) => t === zh, qI = (t) => t === wo && {}.VITE_DEPLOY_GHPAGES === "true";
class a1 {
  constructor() {
    st(this, "snappedUrl");
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
      (e, r) => {
        const [n, i] = r.split("=");
        return { ...e, [n]: i };
      },
      {}
    );
  }
  getSnappedParams() {
    return this.getSnappedUrl().search.replace("?", "").split("&").filter((e) => e.split("=")[1]);
  }
  setItem(e, r) {
    const n = new URLSearchParams(
      new URL(window.location.toString()).search
    );
    n.set(encodeURIComponent(e), encodeURIComponent(r));
    try {
      window.history.replaceState(null, "", "?" + n.toString());
    } catch {
    }
  }
  getItem(e) {
    const r = this.getSnappedUrl().searchParams.get(e);
    return r !== null ? decodeURIComponent(r) : r;
  }
  removeItem(e) {
    const r = new URLSearchParams(
      new URL(window.location.toString()).search
    );
    r.delete(e);
    try {
      window.history.replaceState(null, "", "?" + r.toString());
    } catch {
    }
  }
  encodeQueryParam(e, r) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(r)}`;
  }
}
const bf = new a1();
class HI extends a1 {
  getItem(e) {
    const r = this.getSnappedUrl().pathname.split("/"), n = r.findIndex((i) => i === e);
    return r[n + 1];
  }
  setItem(e, r) {
    const n = new URL(window.location.toString()).search, i = `/${e}/${r}${n}`;
    try {
      window.history.replaceState(null, "", i);
    } catch {
    }
  }
}
const zI = new HI();
class YI {
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
    const r = this.getWriteStorages(e);
    r == null || r.map(
      (n) => n.removeItem(e)
    );
  }
  setItem(e, r) {
    this.setValue(e, r);
  }
  getItem(e) {
    return this.getValue(e);
  }
  get paramKeys() {
    return bf.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const r = (i = this.correspondingStorages(
      Wu.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), n = this.storageForKey(e, Wu, r);
    return n ? n.getItem(e) : null;
  }
  setValue(e, r) {
    const n = this.getWriteStorages(e);
    n == null || n.map(
      (i) => i.setItem(e, r)
    );
  }
  getWriteStorages(e) {
    const r = this.correspondingStorages(
      qu.processRules()
    ), n = this.storageForKey(e, qu);
    return n ? [n] : r;
  }
  storageForKey(e, r, n) {
    var s;
    const i = (s = this.correspondingStorages(
      r.processRulesForKey(e, this.paramKeys)
    )) == null ? void 0 : s.pop();
    return i != null ? i : n;
  }
  correspondingStorages(e) {
    if (e === kt.permalinkAndLocalStorage)
      return [bf, localStorage];
    if (e === kt.localStorage)
      return [localStorage];
    if (e === kt.permalink)
      return [bf];
    if (e === kt.permalinkAsPath)
      return [zI];
  }
}
const Ml = new YI();
function KI(t) {
  return XI(t) || ZI(t) || JI(t) || QI(t);
}
const XI = (t) => Object.keys(t).length === 0, ZI = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    qo,
    Ho,
    zo,
    ju,
    Li,
    Uu,
    oa
  ].some((r) => e.indexOf(r) !== -1);
}, JI = (t) => {
  const e = Object.keys(t), r = (i) => e.indexOf(i) !== -1, n = [
    [Ho, zo],
    [oa, ju],
    [Li, ju],
    [oa, Li],
    [oa, Uu],
    [Li, Uu]
  ];
  return Object.keys(t).length === 2 && n.reduce(
    (i, s) => i || s.every(r),
    !1
  );
}, QI = (t) => {
  const e = Object.keys(t), r = (a) => e.indexOf(a) !== -1, n = [qo, Ho, zo].every(
    r
  ), i = [oa, ju, Li].every(r), s = [oa, Uu, Li].every(r);
  return Object.keys(t).length === 3 && (n || i || s);
};
class ek {
  constructor() {
    st(this, "intialVersion");
    const e = Ml.paramKeys, r = this.getValue(zh, aa);
    this.intialVersion = r ? Math.max(2, Math.min(r, 3)) : KI(e) ? 3 : 2, this.setValue(zh, 3);
  }
  getInitialVersion() {
    return this.intialVersion;
  }
  mapToEntity(e, r) {
    return r ? r(e) : e;
  }
  mapToStorage(e, r) {
    return r ? r(e) : String(e);
  }
  getValue(e, r) {
    return this.mapToEntity(Ml.getValue(e), r);
  }
  setValue(e, r, n) {
    Ml.setValue(e, this.mapToStorage(r, n));
  }
  removeItem(e) {
    Ml.removeItem(e);
  }
}
const Ne = new ek(), tk = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], Jr = () => ({
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
function Ea() {
  function t(m) {
    const g = new URLSearchParams(document.location.search), v = g.get("embeddedserver"), y = g.get("embeddedserverprotocol") || "http";
    return (v ? `${y}://${v}` : "https://vectortiles.geoportail.lu") + `/styles/${m}/style.json`;
  }
  function e(m) {
    return `https://vectortiles.geoportail.lu/styles/${m}/{z}/{x}/{y}.png`;
  }
  function r(m) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(m);
  }
  const n = Sn();
  function i(m, g) {
    if (m == null)
      return;
    const v = /* @__PURE__ */ new Map();
    n.bgVectorSources.forEach((y, _) => {
      if (_ === m.id) {
        const E = { ...y, xyz_custom: g };
        v.set(_, E);
      } else
        v.set(_, y);
    }), n.setBgVectorSources(v);
  }
  function s(m, g, v = !1) {
    const y = "", _ = t(g), E = e(g), x = {
      label: m,
      defaultMapBoxStyle: _,
      defaultMapBoxStyleXYZ: E,
      xyz: E,
      xyz_custom: y,
      style: _
    }, N = new URLSearchParams(window.location.search).get("serial"), M = new URLSearchParams(window.location.search).get(
      "serialLayer"
    );
    if (N)
      r(N) && console.log(M);
    else if (!v)
      return Promise.resolve(x);
    return Promise.resolve(x);
  }
  function a(m) {
    const g = Jr().medium_default_styles.road;
    if (m) {
      m.colors.forEach((y, _) => {
        g[_].color = y;
      });
      const v = g.findIndex(
        (y) => y.label === "Hillshade"
      );
      g[v].visible = m.hillshade;
    }
    return g;
  }
  function o(m, g, v) {
    if (!m || !g.get(m.id))
      return;
    const y = JSON.parse(
      JSON.stringify(g.get(m.id))
    );
    if (!!y && !(!y || !y.layers))
      return v && v.forEach((_) => {
        y == null || y.layers.forEach((E, x) => {
          for (const N of tk)
            if ((_[`${N}s`] || []).includes(E.id)) {
              const L = Object.assign(
                {},
                y.layers[x].paint
              );
              _.color && (L[`${N}-color`] = _.color, L[`${N}-opacity`] = 1, y.layers[x].paint = L), y.layers[x].layout = Object.assign(
                {},
                y.layers[x].layout,
                { visibility: _.visible ? "visible" : "none" }
              );
            }
        });
      }), y;
  }
  function l(m, g) {
    if (m === null)
      return Promise.resolve();
    {
      const v = `${g.get("delete")}?id=${m}`;
      return fetch(v).catch(() => "");
    }
  }
  function u(m, g, v) {
    return l(g, v).then(() => {
      const y = new FormData(), _ = JSON.stringify(m), E = new Blob([_], { type: "application/json" });
      y.append("style", E, "style.json");
      const x = {
        method: "POST",
        body: y
      };
      return fetch(v.get("upload") || "", x).then((N) => N.json()).then((N) => N.id).catch((N) => console.warn(N));
    });
  }
  function f(m, g) {
    if (!g)
      return;
    const v = m.maplibreMap;
    !v || (v.loaded() ? v.setStyle(g) : new Promise((y) => v.once("data", y)).then(
      () => v.setStyle(g)
    ));
  }
  function c(m) {
    const g = Jr().bg_layers.find(
      (v) => v.id == (m == null ? void 0 : m.id)
    );
    return g == null ? void 0 : g.vector_id;
  }
  function h(m) {
    const g = Jr().bg_layers.find(
      (v) => v.id == (m == null ? void 0 : m.id)
    );
    return (g == null ? void 0 : g.vector_id) !== void 0;
  }
  function d(m) {
    const g = Jr().bg_layers.find(
      (v) => v.id == (m == null ? void 0 : m.id)
    );
    return {
      isEditable: (g == null ? void 0 : g.vector_id) !== void 0,
      hasSimpleStyle: (g == null ? void 0 : g.simple_style_class) !== void 0,
      hasAdvancedStyle: (g == null ? void 0 : g.medium_style_class) !== void 0,
      hasExpertStyle: (g == null ? void 0 : g.expert_style_class) !== void 0
    };
  }
  function p(m, g) {
    return g.map(
      (v) => Object.assign(v, {
        selected: v.colors.every(
          (y, _) => {
            var E;
            return ((E = m[_]) == null ? void 0 : E.color) === y;
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
    checkSelection: p,
    isLayerStyleEditable: h,
    getStyleCapabilitiesFromLayer: d
  };
}
const Sn = ws(
  "style",
  () => {
    const t = Ea(), e = tt(), r = tt(/* @__PURE__ */ new Map()), n = tt(
      /* @__PURE__ */ new Map()
    ), i = tt(!1), s = tt(null), a = tt(), o = tt(
      /* @__PURE__ */ new Map([
        ["get", "/getvtstyle"],
        ["upload", "/uploadvtstyle"],
        ["delete", "/deletevtstyle"]
      ])
    ), l = [];
    Jr().bg_layers.forEach((v) => {
      if (v.vector_id) {
        const y = t.setConfigForLayer(
          v.icon_id,
          v.vector_id
        );
        l.push(
          y.then((_) => ({ id: v.id, config: _ }))
        );
      }
    }), Promise.all(l).then((v) => {
      const y = /* @__PURE__ */ new Map();
      v.forEach((_) => y.set(_.id, _.config)), r.value = y;
    });
    function u(v, y) {
      o.value.set(v, y);
    }
    function f(v) {
      r.value = v;
    }
    function c(v) {
      const y = /* @__PURE__ */ new Map();
      n.value.forEach((_, E) => {
        E !== v && y.set(E, _);
      }), n.value = y;
    }
    function h(v, y) {
      const _ = /* @__PURE__ */ new Map();
      n.value.forEach(
        (E, x) => _.set(x, E)
      ), _.set(v, y), n.value = _;
    }
    function d(v) {
      e.value = t.getRoadStyleFromSimpleStyle(v), m();
    }
    function p(v) {
      e.value = v, m();
    }
    function m() {
      i.value = !1;
    }
    function g() {
      i.value = !0;
    }
    return {
      bgStyle: e,
      bgVectorSources: r,
      bgVectorBaseStyles: n,
      isExpertStyleActive: i,
      appliedStyle: a,
      removeBaseStyle: c,
      setBaseStyle: h,
      setBgVectorSources: f,
      setRegisterUrl: u,
      setSimpleStyle: d,
      setStyle: p,
      disableExpertStyle: m,
      enableExpertStyle: g,
      styleSerial: s,
      registerUrls: o
    };
  },
  {}
);
class rk {
  constructor() {
    st(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = Sn();
    let r, n = !1;
    r = _r(() => {
      e.bgVectorSources && (this.restoreStyle(!1), n && this.persistStyle(), n = !0, r && r());
    });
  }
  persistStyle() {
    const e = Sn(), { bgStyle: r } = He(e);
    this.styleWatcher || (this.styleWatcher = et(
      r,
      (n, i) => {
        if (i !== n) {
          const s = vt();
          s.bgLayer && (Ne.setValue(
            s.bgLayer.name,
            n || [],
            xl.styleToLocalStorage
          ), Ne.setValue(
            Bu,
            n || [],
            xl.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const r = Sn();
    r.setStyle(null);
    const i = vt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Ne.getValue(
        Bu,
        xl.styleSerialToStyle
      )), s.length === 0 && (s = Ne.getValue(
        i.name,
        xl.styleLocalStorageToStyle
      )), s && s.length > 0 && r.setStyle(s);
    }
  }
}
const o1 = new rk(), nk = "https://map.geoportail.lu/ogcproxywms", ik = "https://map.geoportail.lu/httpsproxy";
class sk {
  constructor() {
    st(this, "_wmsProxyUrl", nk);
    st(this, "_remoteProxyUrl", ik);
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
  init_v3(e, r) {
    e && (this._wmsProxyUrl = e), r && (this._remoteProxyUrl = r);
  }
}
const pa = new sk();
function l1() {
  return JE(
    [5.31, 49.38, 6.64, 50.21],
    Zb,
    io
  );
}
function u1(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && r1();
}
function ak(t, e = "https") {
  const r = t.imageType.split("/")[1], n = Ne.getValue(qo, ep) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${n}/mapproxy_4_v3/wmts/{Layer}${u1(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${r}`;
}
class ok {
  createOlLayer(e) {
    const { name: r, layers: n, imageType: i, url: s, id: a } = e, o = new $v({
      url: s || pa.wmsProxyUrl,
      hidpi: r1(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: n
      },
      ...s != null || pa.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new nS({
      properties: {
        "olcs.extent": l1(),
        label: r,
        id: a
      },
      source: o
    });
  }
  setLayerTime(e, r) {
    const n = e.getParams();
    n.TIME = r, e.updateParams(n);
  }
}
const c1 = new ok(), lk = [
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
], uk = [
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
class ck {
  createOlLayer(e) {
    const { name: r, imageType: n, id: i } = e, s = u1(e), a = jl(io), o = a.getExtent(), l = new Fv({
      url: ak(e),
      tilePixelRatio: s ? 2 : 1,
      layer: r,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: n,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new sS({
        origin: aS(o),
        extent: o,
        resolutions: lk,
        matrixIds: uk
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new iS({
      source: l,
      properties: {
        "olcs.extent": l1(),
        label: r,
        id: i
      }
    });
  }
  setLayerTime(e, r, n) {
    const i = e.get("metadata").time_layers[n], s = r.getUrls();
    if (s) {
      const a = this.transformUrls(s, i);
      r.setUrls(a), e.set("label", i), e.set("layer_name", i);
    }
  }
  transformUrls(e, r) {
    return e.map(
      (n) => n.replace(
        /[/][^/]*[/]{TileMatrixSet}/,
        `/${r}/{TileMatrixSet}`
      )
    );
  }
}
const f1 = new ck();
function fk(t, e, r) {
  return e = Hu(e), vk(t, h1() ? Reflect.construct(e, r || [], Hu(t).constructor) : e.apply(t, r));
}
function h1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (h1 = function() {
    return !!t;
  })();
}
function hk(t, e) {
  if (typeof t != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function dk(t) {
  var e = hk(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function pk(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wy(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, dk(n.key), n);
  }
}
function mk(t, e, r) {
  return e && wy(t.prototype, e), r && wy(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function gk(t, e) {
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
  }), e && Xh(t, e);
}
function Hu(t) {
  return Hu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hu(t);
}
function Xh(t, e) {
  return Xh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xh(t, e);
}
function yk(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function vk(t, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yk(t);
}
function bk(t) {
  return _k(t) || Ek(t) || Sk(t) || wk();
}
function _k(t) {
  if (Array.isArray(t))
    return Zh(t);
}
function Ek(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Sk(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Zh(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zh(t, e);
  }
}
function Zh(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function wk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fr = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, Ok = fr, tp = !Ok(function() {
  var t = function() {
  }.bind();
  return typeof t != "function" || t.hasOwnProperty("prototype");
}), d1 = tp, p1 = Function.prototype, Jh = p1.call, xk = d1 && p1.bind.bind(Jh, Jh), hr = d1 ? xk : function(t) {
  return function() {
    return Jh.apply(t, arguments);
  };
}, _f = typeof document == "object" && document.all, $r = typeof _f > "u" && _f !== void 0 ? function(t) {
  return typeof t == "function" || t === _f;
} : function(t) {
  return typeof t == "function";
}, Yo = {}, Mk = fr, ri = !Mk(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Ia = function(t) {
  return t && t.Math === Math && t;
}, rn = Ia(typeof globalThis == "object" && globalThis) || Ia(typeof window == "object" && window) || Ia(typeof self == "object" && self) || Ia(typeof ur == "object" && ur) || Ia(typeof ur == "object" && ur) || function() {
  return this;
}() || Function("return this")(), Tk = $r, xs = function(t) {
  return typeof t == "object" ? t !== null : Tk(t);
}, Nk = rn, Oy = xs, Qh = Nk.document, Ck = Oy(Qh) && Oy(Qh.createElement), m1 = function(t) {
  return Ck ? Qh.createElement(t) : {};
}, Pk = ri, Lk = fr, Ak = m1, g1 = !Pk && !Lk(function() {
  return Object.defineProperty(Ak("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Ik = ri, kk = fr, Dk = Ik && kk(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Rk = xs, $k = String, Fk = TypeError, Lc = function(t) {
  if (Rk(t))
    return t;
  throw new Fk($k(t) + " is not an object");
}, Vk = tp, Tl = Function.prototype.call, Ko = Vk ? Tl.bind(Tl) : function() {
  return Tl.apply(Tl, arguments);
}, Ef = rn, jk = $r, Gk = function(t) {
  return jk(t) ? t : void 0;
}, rp = function(t, e) {
  return arguments.length < 2 ? Gk(Ef[t]) : Ef[t] && Ef[t][e];
}, Uk = hr, y1 = Uk({}.isPrototypeOf), Bk = typeof navigator < "u" && String(navigator.userAgent) || "", v1 = rn, Sf = Bk, xy = v1.process, My = v1.Deno, Ty = xy && xy.versions || My && My.version, Ny = Ty && Ty.v8, Yr, zu;
Ny && (Yr = Ny.split("."), zu = Yr[0] > 0 && Yr[0] < 4 ? 1 : +(Yr[0] + Yr[1]));
!zu && Sf && (Yr = Sf.match(/Edge\/(\d+)/), (!Yr || Yr[1] >= 74) && (Yr = Sf.match(/Chrome\/(\d+)/), Yr && (zu = +Yr[1])));
var np = zu, Cy = np, Wk = fr, qk = rn, Hk = qk.String, b1 = !!Object.getOwnPropertySymbols && !Wk(function() {
  var t = Symbol("symbol detection");
  return !Hk(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && Cy && Cy < 41;
}), zk = b1, _1 = zk && !Symbol.sham && typeof Symbol.iterator == "symbol", Yk = rp, Kk = $r, Xk = y1, Zk = _1, Jk = Object, E1 = Zk ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  var e = Yk("Symbol");
  return Kk(e) && Xk(e.prototype, Jk(t));
}, Qk = String, eD = function(t) {
  try {
    return Qk(t);
  } catch {
    return "Object";
  }
}, tD = $r, rD = eD, nD = TypeError, S1 = function(t) {
  if (tD(t))
    return t;
  throw new nD(rD(t) + " is not a function");
}, w1 = function(t) {
  return t == null;
}, iD = S1, sD = w1, aD = function(t, e) {
  var r = t[e];
  return sD(r) ? void 0 : iD(r);
}, wf = Ko, Of = $r, xf = xs, oD = TypeError, lD = function(t, e) {
  var r, n;
  if (e === "string" && Of(r = t.toString) && !xf(n = wf(r, t)) || Of(r = t.valueOf) && !xf(n = wf(r, t)) || e !== "string" && Of(r = t.toString) && !xf(n = wf(r, t)))
    return n;
  throw new oD("Can't convert object to primitive value");
}, Ac = { exports: {} }, Py = rn, uD = Object.defineProperty, ip = function(t, e) {
  try {
    uD(Py, t, { value: e, configurable: !0, writable: !0 });
  } catch {
    Py[t] = e;
  }
  return e;
}, cD = rn, fD = ip, Ly = "__core-js_shared__", Ay = Ac.exports = cD[Ly] || fD(Ly, {});
(Ay.versions || (Ay.versions = [])).push({
  version: "3.37.1",
  mode: "global",
  copyright: "\xA9 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Iy = Ac.exports, O1 = function(t, e) {
  return Iy[t] || (Iy[t] = e || {});
}, hD = w1, dD = TypeError, x1 = function(t) {
  if (hD(t))
    throw new dD("Can't call method on " + t);
  return t;
}, pD = x1, mD = Object, Ic = function(t) {
  return mD(pD(t));
}, gD = hr, yD = Ic, vD = gD({}.hasOwnProperty), ji = Object.hasOwn || function(e, r) {
  return vD(yD(e), r);
}, bD = hr, _D = 0, ED = Math.random(), SD = bD(1 .toString), M1 = function(t) {
  return "Symbol(" + (t === void 0 ? "" : t) + ")_" + SD(++_D + ED, 36);
}, wD = rn, OD = O1, ky = ji, xD = M1, MD = b1, TD = _1, Ks = wD.Symbol, Mf = OD("wks"), ND = TD ? Ks.for || Ks : Ks && Ks.withoutSetter || xD, Sa = function(t) {
  return ky(Mf, t) || (Mf[t] = MD && ky(Ks, t) ? Ks[t] : ND("Symbol." + t)), Mf[t];
}, CD = Ko, Dy = xs, Ry = E1, PD = aD, LD = lD, AD = Sa, ID = TypeError, kD = AD("toPrimitive"), DD = function(t, e) {
  if (!Dy(t) || Ry(t))
    return t;
  var r = PD(t, kD), n;
  if (r) {
    if (e === void 0 && (e = "default"), n = CD(r, t, e), !Dy(n) || Ry(n))
      return n;
    throw new ID("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), LD(t, e);
}, RD = DD, $D = E1, T1 = function(t) {
  var e = RD(t, "string");
  return $D(e) ? e : e + "";
}, FD = ri, VD = g1, jD = Dk, Nl = Lc, $y = T1, GD = TypeError, Tf = Object.defineProperty, UD = Object.getOwnPropertyDescriptor, Nf = "enumerable", Cf = "configurable", Pf = "writable";
Yo.f = FD ? jD ? function(e, r, n) {
  if (Nl(e), r = $y(r), Nl(n), typeof e == "function" && r === "prototype" && "value" in n && Pf in n && !n[Pf]) {
    var i = UD(e, r);
    i && i[Pf] && (e[r] = n.value, n = {
      configurable: Cf in n ? n[Cf] : i[Cf],
      enumerable: Nf in n ? n[Nf] : i[Nf],
      writable: !1
    });
  }
  return Tf(e, r, n);
} : Tf : function(e, r, n) {
  if (Nl(e), r = $y(r), Nl(n), VD)
    try {
      return Tf(e, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new GD("Accessors not supported");
  return "value" in n && (e[r] = n.value), e;
};
var N1 = { exports: {} }, ed = ri, BD = ji, C1 = Function.prototype, WD = ed && Object.getOwnPropertyDescriptor, sp = BD(C1, "name"), qD = sp && function() {
}.name === "something", HD = sp && (!ed || ed && WD(C1, "name").configurable), P1 = {
  EXISTS: sp,
  PROPER: qD,
  CONFIGURABLE: HD
}, zD = hr, YD = $r, td = Ac.exports, KD = zD(Function.toString);
YD(td.inspectSource) || (td.inspectSource = function(t) {
  return KD(t);
});
var L1 = td.inspectSource, XD = rn, ZD = $r, Fy = XD.WeakMap, JD = ZD(Fy) && /native code/.test(String(Fy)), ap = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, QD = ri, e3 = Yo, t3 = ap, op = QD ? function(t, e, r) {
  return e3.f(t, e, t3(1, r));
} : function(t, e, r) {
  return t[e] = r, t;
}, r3 = O1, n3 = M1, Vy = r3("keys"), i3 = function(t) {
  return Vy[t] || (Vy[t] = n3(t));
}, A1 = {}, s3 = JD, I1 = rn, a3 = xs, o3 = op, Lf = ji, Af = Ac.exports, l3 = i3, u3 = A1, jy = "Object already initialized", rd = I1.TypeError, c3 = I1.WeakMap, Yu, Oo, Ku, f3 = function(t) {
  return Ku(t) ? Oo(t) : Yu(t, {});
}, h3 = function(t) {
  return function(e) {
    var r;
    if (!a3(e) || (r = Oo(e)).type !== t)
      throw new rd("Incompatible receiver, " + t + " required");
    return r;
  };
};
if (s3 || Af.state) {
  var fn = Af.state || (Af.state = new c3());
  fn.get = fn.get, fn.has = fn.has, fn.set = fn.set, Yu = function(t, e) {
    if (fn.has(t))
      throw new rd(jy);
    return e.facade = t, fn.set(t, e), e;
  }, Oo = function(t) {
    return fn.get(t) || {};
  }, Ku = function(t) {
    return fn.has(t);
  };
} else {
  var Rs = l3("state");
  u3[Rs] = !0, Yu = function(t, e) {
    if (Lf(t, Rs))
      throw new rd(jy);
    return e.facade = t, o3(t, Rs, e), e;
  }, Oo = function(t) {
    return Lf(t, Rs) ? t[Rs] : {};
  }, Ku = function(t) {
    return Lf(t, Rs);
  };
}
var d3 = {
  set: Yu,
  get: Oo,
  has: Ku,
  enforce: f3,
  getterFor: h3
}, lp = hr, p3 = fr, m3 = $r, Cl = ji, nd = ri, g3 = P1.CONFIGURABLE, y3 = L1, k1 = d3, v3 = k1.enforce, b3 = k1.get, Gy = String, su = Object.defineProperty, _3 = lp("".slice), E3 = lp("".replace), S3 = lp([].join), w3 = nd && !p3(function() {
  return su(function() {
  }, "length", { value: 8 }).length !== 8;
}), O3 = String(String).split("String"), x3 = N1.exports = function(t, e, r) {
  _3(Gy(e), 0, 7) === "Symbol(" && (e = "[" + E3(Gy(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!Cl(t, "name") || g3 && t.name !== e) && (nd ? su(t, "name", { value: e, configurable: !0 }) : t.name = e), w3 && r && Cl(r, "arity") && t.length !== r.arity && su(t, "length", { value: r.arity });
  try {
    r && Cl(r, "constructor") && r.constructor ? nd && su(t, "prototype", { writable: !1 }) : t.prototype && (t.prototype = void 0);
  } catch {
  }
  var n = v3(t);
  return Cl(n, "source") || (n.source = S3(O3, typeof e == "string" ? e : "")), t;
};
Function.prototype.toString = x3(function() {
  return m3(this) && b3(this).source || y3(this);
}, "toString");
var M3 = $r, T3 = Yo, N3 = N1.exports, C3 = ip, kc = function(t, e, r, n) {
  n || (n = {});
  var i = n.enumerable, s = n.name !== void 0 ? n.name : e;
  if (M3(r) && N3(r, s, n), n.global)
    i ? t[e] = r : C3(e, r);
  else {
    try {
      n.unsafe ? t[e] && (i = !0) : delete t[e];
    } catch {
    }
    i ? t[e] = r : T3.f(t, e, {
      value: r,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return t;
}, D1 = hr, P3 = kc, up = Date.prototype, Uy = "Invalid Date", R1 = "toString", L3 = D1(up[R1]), A3 = D1(up.getTime);
String(new Date(NaN)) !== Uy && P3(up, R1, function() {
  var e = A3(this);
  return e === e ? L3(this) : Uy;
});
var cp = {}, fp = {}, $1 = {}.propertyIsEnumerable, F1 = Object.getOwnPropertyDescriptor, I3 = F1 && !$1.call({ 1: 2 }, 1);
fp.f = I3 ? function(e) {
  var r = F1(this, e);
  return !!r && r.enumerable;
} : $1;
var V1 = hr, k3 = V1({}.toString), D3 = V1("".slice), Dc = function(t) {
  return D3(k3(t), 8, -1);
}, R3 = hr, $3 = fr, F3 = Dc, If = Object, V3 = R3("".split), hp = $3(function() {
  return !If("z").propertyIsEnumerable(0);
}) ? function(t) {
  return F3(t) === "String" ? V3(t, "") : If(t);
} : If, j3 = hp, G3 = x1, dp = function(t) {
  return j3(G3(t));
}, U3 = ri, B3 = Ko, W3 = fp, q3 = ap, H3 = dp, z3 = T1, Y3 = ji, K3 = g1, By = Object.getOwnPropertyDescriptor;
cp.f = U3 ? By : function(e, r) {
  if (e = H3(e), r = z3(r), K3)
    try {
      return By(e, r);
    } catch {
    }
  if (Y3(e, r))
    return q3(!B3(W3.f, e, r), e[r]);
};
var j1 = {}, X3 = Math.ceil, Z3 = Math.floor, J3 = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? Z3 : X3)(r);
}, Q3 = J3, G1 = function(t) {
  var e = +t;
  return e !== e || e === 0 ? 0 : Q3(e);
}, eR = G1, tR = Math.max, rR = Math.min, nR = function(t, e) {
  var r = eR(t);
  return r < 0 ? tR(r + e, 0) : rR(r, e);
}, iR = G1, sR = Math.min, aR = function(t) {
  var e = iR(t);
  return e > 0 ? sR(e, 9007199254740991) : 0;
}, oR = aR, pp = function(t) {
  return oR(t.length);
}, lR = dp, uR = nR, cR = pp, Wy = function(t) {
  return function(e, r, n) {
    var i = lR(e), s = cR(i);
    if (s === 0)
      return !t && -1;
    var a = uR(n, s), o;
    if (t && r !== r) {
      for (; s > a; )
        if (o = i[a++], o !== o)
          return !0;
    } else
      for (; s > a; a++)
        if ((t || a in i) && i[a] === r)
          return t || a || 0;
    return !t && -1;
  };
}, fR = {
  includes: Wy(!0),
  indexOf: Wy(!1)
}, hR = hr, kf = ji, dR = dp, pR = fR.indexOf, mR = A1, qy = hR([].push), U1 = function(t, e) {
  var r = dR(t), n = 0, i = [], s;
  for (s in r)
    !kf(mR, s) && kf(r, s) && qy(i, s);
  for (; e.length > n; )
    kf(r, s = e[n++]) && (~pR(i, s) || qy(i, s));
  return i;
}, B1 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], gR = U1, yR = B1, vR = yR.concat("length", "prototype");
j1.f = Object.getOwnPropertyNames || function(e) {
  return gR(e, vR);
};
var mp = {};
mp.f = Object.getOwnPropertySymbols;
var bR = rp, _R = hr, ER = j1, SR = mp, wR = Lc, OR = _R([].concat), xR = bR("Reflect", "ownKeys") || function(e) {
  var r = ER.f(wR(e)), n = SR.f;
  return n ? OR(r, n(e)) : r;
}, Hy = ji, MR = xR, TR = cp, NR = Yo, CR = function(t, e, r) {
  for (var n = MR(e), i = NR.f, s = TR.f, a = 0; a < n.length; a++) {
    var o = n[a];
    !Hy(t, o) && !(r && Hy(r, o)) && i(t, o, s(e, o));
  }
}, PR = fr, LR = $r, AR = /#|\.prototype\./, Xo = function(t, e) {
  var r = kR[IR(t)];
  return r === RR ? !0 : r === DR ? !1 : LR(e) ? PR(e) : !!e;
}, IR = Xo.normalize = function(t) {
  return String(t).replace(AR, ".").toLowerCase();
}, kR = Xo.data = {}, DR = Xo.NATIVE = "N", RR = Xo.POLYFILL = "P", $R = Xo, Pl = rn, FR = cp.f, VR = op, jR = kc, GR = ip, UR = CR, BR = $R, gp = function(t, e) {
  var r = t.target, n = t.global, i = t.stat, s, a, o, l, u, f;
  if (n ? a = Pl : i ? a = Pl[r] || GR(r, {}) : a = Pl[r] && Pl[r].prototype, a)
    for (o in e) {
      if (u = e[o], t.dontCallGetSet ? (f = FR(a, o), l = f && f.value) : l = a[o], s = BR(n ? o : r + (i ? "." : "#") + o, t.forced), !s && l !== void 0) {
        if (typeof u == typeof l)
          continue;
        UR(u, l);
      }
      (t.sham || l && l.sham) && VR(u, "sham", !0), jR(a, o, u, t);
    }
}, WR = U1, qR = B1, HR = Object.keys || function(e) {
  return WR(e, qR);
}, zy = ri, zR = hr, YR = Ko, KR = fr, Df = HR, XR = mp, ZR = fp, JR = Ic, QR = hp, $s = Object.assign, Yy = Object.defineProperty, e$ = zR([].concat), t$ = !$s || KR(function() {
  if (zy && $s({ b: 1 }, $s(Yy({}, "a", {
    enumerable: !0,
    get: function() {
      Yy(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1)
    return !0;
  var t = {}, e = {}, r = Symbol("assign detection"), n = "abcdefghijklmnopqrst";
  return t[r] = 7, n.split("").forEach(function(i) {
    e[i] = i;
  }), $s({}, t)[r] !== 7 || Df($s({}, e)).join("") !== n;
}) ? function(e, r) {
  for (var n = JR(e), i = arguments.length, s = 1, a = XR.f, o = ZR.f; i > s; )
    for (var l = QR(arguments[s++]), u = a ? e$(Df(l), a(l)) : Df(l), f = u.length, c = 0, h; f > c; )
      h = u[c++], (!zy || YR(o, l, h)) && (n[h] = l[h]);
  return n;
} : $s, r$ = gp, Ky = t$;
r$({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== Ky }, {
  assign: Ky
});
var n$ = Sa, i$ = n$("toStringTag"), W1 = {};
W1[i$] = "z";
var yp = String(W1) === "[object z]", s$ = yp, a$ = $r, au = Dc, o$ = Sa, l$ = o$("toStringTag"), u$ = Object, c$ = au(function() {
  return arguments;
}()) === "Arguments", f$ = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, vp = s$ ? au : function(t) {
  var e, r, n;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = f$(e = u$(t), l$)) == "string" ? r : c$ ? au(e) : (n = au(e)) === "Object" && a$(e.callee) ? "Arguments" : n;
}, h$ = yp, d$ = vp, p$ = h$ ? {}.toString : function() {
  return "[object " + d$(this) + "]";
}, m$ = yp, g$ = kc, y$ = p$;
m$ || g$(Object.prototype, "toString", y$, { unsafe: !0 });
var v$ = vp, b$ = String, _$ = function(t) {
  if (v$(t) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return b$(t);
}, E$ = Lc, S$ = function() {
  var t = E$(this), e = "";
  return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
}, w$ = Ko, O$ = ji, x$ = y1, M$ = S$, Xy = RegExp.prototype, T$ = function(t) {
  var e = t.flags;
  return e === void 0 && !("flags" in Xy) && !O$(t, "flags") && x$(Xy, t) ? w$(M$, t) : e;
}, N$ = P1.PROPER, C$ = kc, P$ = Lc, Zy = _$, L$ = fr, A$ = T$, bp = "toString", q1 = RegExp.prototype, H1 = q1[bp], I$ = L$(function() {
  return H1.call({ source: "a", flags: "b" }) !== "/a/b";
}), k$ = N$ && H1.name !== bp;
(I$ || k$) && C$(q1, bp, function() {
  var e = P$(this), r = Zy(e.source), n = Zy(A$(e));
  return "/" + r + "/" + n;
}, { unsafe: !0 });
var z1 = /* @__PURE__ */ function(t) {
  function e(r) {
    var n;
    pk(this, e);
    var i = Object.assign({}, r);
    return delete i.accessToken, delete i.style, delete i.container, delete i.xyz, n = fk(this, e, [i]), n.set("xyz", r.maplibreOptions.xyz), n.set("xyz_custom", r.maplibreOptions.xyz_custom), n.xyz_ = r.xyz, r.accessToken && (Bp.accessToken = r.accessToken), n.map_ = new Bp.Map({
      container: r.maplibreOptions.container,
      style: r.maplibreOptions.style,
      attributionControl: !1,
      interactive: !1
    }), n.maplibreMap = n.map_, n;
  }
  return gk(e, t), mk(e, [{
    key: "getMapBoxMap",
    value: function() {
      return this.map_;
    }
  }, {
    key: "getMapLibreMap",
    value: function() {
      return this.map_;
    }
  }, {
    key: "render",
    value: function(n) {
      var i = this.map_.getCanvas(), s = n.viewState;
      i.style.position = "absolute";
      var a = this.getVisible();
      i.style.display = a ? "block" : "none";
      var o = this.getOpacity().toString();
      o !== i.style.opacity && (i.style.opacity = o);
      var l = s.rotation;
      return l && this.map_.rotateTo(lS(-l), {
        animate: !1
      }), this.map_.jumpTo({
        center: uS(s.center),
        zoom: s.zoom - 1,
        animate: !1
      }), this.map_._frame && (this.map_._frame.cancel(), this.map_._frame = null), this.map_._render(), i;
    }
  }, {
    key: "setLayerVisibility",
    value: function(n, i) {
      this.map_.setLayoutProperty(n, "visibility", i ? "visible" : "none");
    }
  }, {
    key: "getStyle",
    value: function() {
      return this.map_.getStyle();
    }
  }, {
    key: "getXYZ",
    value: function() {
      return this.get("xyz");
    }
  }]);
}(oS);
class D$ {
  createOlLayer(e, r) {
    const n = qn(), { id: i, metadata: s, name: a } = e, o = r.get(i);
    if (!o)
      return;
    const l = {
      container: n.getOlMap().getTarget(),
      ...o
    }, u = new z1({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = Sn();
    return u != null && u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u == null ? void 0 : u.getMapLibreMap().getStyle()) : new Promise(
      (c) => u == null ? void 0 : u.getMapLibreMap().once("data", c)
    ).then(
      () => f.setBaseStyle(i, u == null ? void 0 : u.getMapLibreMap().getStyle())
    ), u;
  }
}
const R$ = new D$();
class $$ {
  createOlLayer(e, r) {
    let n;
    if (r && (n = R$.createOlLayer(e, r)), !n)
      switch (e.type) {
        case "WMS":
          n = c1.createOlLayer(e);
          break;
        case "WMTS":
        case "BG WMTS":
          n = f1.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return n.set("id", e.id), n.set("label", e.name), n.set("layer_name", e.name), n.set("metadata", e.metadata), n.set("queryable_id", e.id), n.set("current_time", en().getLayerCurrentTime(e)), n.set("time", e.time), n.setOpacity(e.opacity), n;
  }
}
const Jy = new $$();
class F$ {
  setLayerTime(e, r) {
    const n = e.getSource();
    n instanceof $v && c1.setLayerTime(n, r), n instanceof Fv && f1.setLayerTime(e, n, r);
  }
}
const V$ = new F$(), Ll = -200;
function Y1() {
  function t(d, p) {
    if (!p)
      return;
    const m = u(p);
    d.addLayer(m);
  }
  function e(d, p) {
    return d.getLayers().getArray().find((m) => m.get("id") === p);
  }
  function r(d, p) {
    const m = e(d, p);
    m && d.removeLayer(m);
  }
  function n(d, p) {
    const m = d.getLayers().getArray();
    p.forEach((g, v) => {
      const y = m.find(
        (_) => _.get("id") === g.id
      );
      y == null || y.setZIndex(v + 1);
    });
  }
  function i(d, p, m) {
    const g = d.getLayers().getArray().find((v) => v.get("id") === p);
    g && g.setOpacity(m);
  }
  function s(d, p) {
    const m = en(), g = e(d, p.id), v = m.getLayerCurrentTime(p);
    v && g && V$.setLayerTime(g, v);
  }
  function a(d) {
    Ca.delete(d);
  }
  function o(d) {
    return Ca.has(d.id);
  }
  function l(d, p) {
    Ca.set(d, p);
  }
  function u(d) {
    const p = d.id, m = Ca.get(p);
    if (m)
      return m;
    {
      const g = Jy.createOlLayer(d);
      return l(p, g), g;
    }
  }
  function f(d) {
    return d && Ca.get(d.id) || null;
  }
  function c(d, p) {
    const g = d.getLayers().getArray().find((v) => v.getZIndex() === Ll);
    g && p(g);
  }
  function h(d, p, m) {
    var E;
    const g = d.getLayers(), v = g.getArray().findIndex((x) => x.getZIndex() === Ll), y = (E = g.getArray()[v]) == null ? void 0 : E.get("id");
    let _;
    p && (o(p) ? _ = f(p) : (_ = Jy.createOlLayer(
      p,
      m
    ), l(p.id, _))), v >= 0 ? _ ? (_.setZIndex(Ll), g.setAt(v, _)) : g.removeAt(v) : _ && (_.setZIndex(Ll), d.addLayer(_)), y && y !== (p == null ? void 0 : p.id) && o1.restoreStyle(!0);
  }
  return {
    addLayer: t,
    findLayer: e,
    removeLayer: r,
    removeFromCache: a,
    reorderLayers: n,
    setLayerOpacity: i,
    setLayerTime: s,
    getLayerFromCache: f,
    setBgLayer: h,
    applyOnBgLayer: c
  };
}
class j$ {
  constructor(e) {
    st(this, "previousLayers");
    st(this, "previousVectorSources");
    const r = vt(), n = Sn(), i = qn(), s = Ea(), a = Y1(), { appliedStyle: o } = He(n);
    et(
      () => r.layers,
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
        c.forEach((p) => a.removeLayer(e, p.id)), h.forEach((p) => {
          a.addLayer(e, p.layer), a.setLayerTime(e, p.layer);
        }), d.forEach((p) => {
          a.setLayerOpacity(e, p.id, p.opacity), a.setLayerTime(e, p);
        }), f.layers && a.reorderLayers(e, f.layers), this.previousLayers = l;
      }
    ), et(
      () => r.bgLayer,
      (l) => l !== void 0 && a.setBgLayer(e, l, n.bgVectorSources)
    ), _r(() => {
      n.isExpertStyleActive || (o.value = s.applyDefaultStyle(
        r.bgLayer,
        n.bgVectorBaseStyles,
        n.bgStyle
      ));
    }), et(o, (l) => {
      n.bgStyle === null && !n.isExpertStyleActive ? s.unregisterStyle(n.styleSerial, n.registerUrls).then(n.styleSerial = null) : s.registerStyle(l, n.styleSerial, n.registerUrls).then((u) => {
        var c;
        n.styleSerial = u;
        const f = (c = r == null ? void 0 : r.bgLayer) == null ? void 0 : c.id;
        (r == null ? void 0 : r.bgLayer) && f !== void 0 && u !== void 0 && (a.applyOnBgLayer(e, (h) => {
          h.set(
            "xyz_custom",
            s.getDefaultMapBoxStyleXYZ(u)
          );
        }), a.setBgLayer(
          e,
          r == null ? void 0 : r.bgLayer,
          n.bgVectorSources
        ));
      }), a.applyOnBgLayer(
        e,
        (u) => s.applyConsolidatedStyle(u, l)
      );
    }), et(
      () => n.bgVectorSources,
      (l) => {
        var u;
        for (const f of l.keys())
          (!this.previousVectorSources || this.previousVectorSources.get(f) !== l.get(f)) && (a.removeFromCache(f), f === ((u = r == null ? void 0 : r.bgLayer) == null ? void 0 : u.id) && a.setBgLayer(e, r == null ? void 0 : r.bgLayer, l));
        this.previousVectorSources = l;
      }
    );
  }
}
const G$ = {
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
class U$ {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = qn().getOlMap().getView(), r = () => {
      const n = e.getZoom();
      Ne.setValue(vy, n ? Math.ceil(n) : null);
    };
    r(), Wp.listen(
      e,
      "change:resolution",
      dy(r, 300)
    );
  }
  persistXY() {
    const e = qn().getOlMap().getView(), r = () => {
      const n = e.getCenter();
      Ne.setValue(by, n ? Math.round(n[0]) : null), Ne.setValue(_y, n ? Math.round(n[1]) : null);
    };
    r(), Wp.listen(
      e,
      cS.PROPERTYCHANGE,
      dy(r, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = qn().getOlMap().getView(), r = Ne.getValue(vy, aa), n = Ne.getInitialVersion(), i = Ne.getValue(by, aa), s = Ne.getValue(_y, aa), a = Ne.getValue(FI), o = QE(
      UP,
      io
    );
    let l, u;
    r !== void 0 ? u = n === 3 ? Number(r) : G$[r] : u = 8, i != null && s != null ? n === 3 && a != null ? l = Up([i, s], a, io) : l = n === 3 ? [i, s] : o([s, i], void 0, 2) : l = Up(
      [6, 49.7],
      Zb,
      io
    ), e.setCenter(l), e.setZoom(u);
  }
}
const B$ = new U$(), W$ = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, q$ = /* @__PURE__ */ fe({
  __name: "attribution-control",
  setup(t) {
    const e = vt(), r = we("");
    return _r(() => {
      var n, i;
      r.value = ((i = (n = e.bgLayer) == null ? void 0 : n.metadata) == null ? void 0 : i.attribution) || "";
    }), (n, i) => {
      const s = Cd("dompurify-html");
      return r.value ? bu((A(), G("div", W$, null, 512)), [
        [s, r.value]
      ]) : F("v-if", !0);
    };
  }
}), H$ = /* @__PURE__ */ me(q$, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/attribution-control.vue"]]);
function Zo(t, e) {
  const r = new t(e), n = qn(), i = ea("olMap");
  return Er(() => {
    i.addControl(r), i.changed();
  }), Fi(() => {
    const s = n.getOlMap();
    s.removeControl(r), s.changed();
  }), {
    control: r
  };
}
const z$ = ["title"], Y$ = /* @__PURE__ */ fe({
  __name: "location-control",
  props: {
    className: { type: String, required: !1, default: "location-button" },
    label: { type: String, required: !1, default: "\uE800" },
    tipLabel: { type: String, required: !1, default: "Location" }
  },
  setup(t) {
    const { t: e } = Ze(), r = t, n = we(null);
    function i() {
    }
    return Er(
      () => Zo(Gv, { ...r, target: n })
    ), (s, a) => (A(), G("div", {
      ref_key: "controlElement",
      ref: n,
      class: Ae(`tracker-off ${r.className} ${O(Vv)} ${O(jv)}`)
    }, [
      P("button", {
        title: O(e)(r.tipLabel),
        onClick: i
      }, oe(r.label), 9, z$)
    ], 2));
  }
}), K$ = /* @__PURE__ */ me(Y$, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/location-control.vue"]]), X$ = ["title"], Z$ = /* @__PURE__ */ fe({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = vt(), { t: r } = Ze(), n = t, i = we(null);
    Er(
      () => Zo(Gv, { ...n, target: i })
    );
    const s = () => {
      e.setIs3dActive(!e.is3dActive);
    };
    return (a, o) => (A(), G("div", {
      ref_key: "controlElement",
      ref: i,
      class: Ae(`${n.className} ${O(Vv)} ${O(jv)} ${O(e).is3dActive ? "active" : ""}`)
    }, [
      P("button", {
        title: O(r)(n.tipLabel),
        onClick: s
      }, oe(n.label), 9, X$)
    ], 2));
  }
}), J$ = /* @__PURE__ */ me(Z$, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/map-3d.vue"]]), Q$ = /* @__PURE__ */ fe({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return Zo(fS, t), (r, n) => F("v-if", !0);
  }
}), e4 = /* @__PURE__ */ me(Q$, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/fullscreen-control.vue"]]), t4 = /* @__PURE__ */ fe({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return Zo(hS, t), (r, n) => F("v-if", !0);
  }
}), r4 = /* @__PURE__ */ me(t4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/zoom-control.vue"]]);
class n4 extends dS {
  constructor(r) {
    super(r);
    st(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const i4 = /* @__PURE__ */ fe({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: Array, required: !0 }
  },
  setup(t) {
    return Zo(n4, t), (r, n) => F("v-if", !0);
  }
}), s4 = /* @__PURE__ */ me(i4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/zoom-to-extent-control.vue"]]), a4 = /* @__PURE__ */ fe({
  __name: "map-container",
  props: {
    v4_standalone: { type: Boolean, required: !1, default: !1 }
  },
  setup(t) {
    const e = qn(), r = we(null), n = e.createMap(), i = [
      425152.9429259216,
      632446599999133e-8,
      914349.9239510496,
      6507914867875754e-9
    ];
    return Er(() => {
      r.value && (new j$(n), B$.bootstrap(), n.setTarget(r.value), window.olMap = n);
    }), U0("olMap", n), (s, a) => (A(), G("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: r,
      class: "h-full w-full bg-white relative"
    }, [
      ie(r4),
      ie(s4, { extent: i }),
      ie(e4),
      ie(H$),
      s.v4_standalone ? (A(), Ue(J$, { key: 0 })) : F("v-if", !0),
      ie(K$)
    ], 512));
  }
}), o4 = /* @__PURE__ */ me(a4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map/map-container.vue"]]), l4 = "fr", u4 = !0, c4 = !1, f4 = !1, wt = ws(
  "app",
  () => {
    const t = we(l4), e = we(u4), r = we(c4), n = we(f4), i = we(), s = we(), a = we(!1);
    function o(m) {
      t.value = m;
    }
    function l(m) {
      e.value = m, m || (n.value = !1, r.value = !1);
    }
    function u(m) {
      r.value = m, m && (n.value = !1);
    }
    function f(m) {
      n.value = m;
    }
    function c(m) {
      s.value = m;
    }
    function h(m) {
      i.value = m;
    }
    function d() {
      a.value = !0;
    }
    function p() {
      a.value = !1;
    }
    return {
      lang: t,
      layersOpen: e,
      myLayersTabOpen: r,
      themeGridOpen: n,
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
      closeStyleEditorPanel: p
    };
  },
  {}
), Xu = {
  name: "blank",
  id: 0
};
function K1() {
  const t = wt(), { mapId: e } = He(t), r = ps(), n = vt(), i = en(), s = de(() => {
    var c;
    if (!e.value) {
      const h = (c = Zt().theme) == null ? void 0 : c.name;
      if (h)
        return Jr().bg_layer_theme_defaults[h] || l();
    }
    return l();
  });
  function a(c) {
    const h = r.findBgLayerById(c);
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
      i.handleExclusionLayers(c), n.setBgLayer(i.initLayer(c));
    } else
      n.setBgLayer(null);
  }
  function l() {
    var c;
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || Xu.id;
  }
  function u() {
    return Xu.id;
  }
  function f() {
    return Jr().bg_layers;
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
const h4 = ["title"], d4 = /* @__PURE__ */ fe({
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
    const { t: e } = Ze(), r = t, n = de(() => {
      const s = e(r.bgTitle), a = r.bgTitle.length > 0, o = `${e("Background layer:")} ${e(r.bgName)}`;
      return `${s}${a ? " - " : ""}${o}`;
    }), i = de(
      () => `h-full w-full rounded-sm lux-bg-sel-icon
        lux-bg-sel-${r.bgName}
        bg-${r.bgName}_sm
        md:bg-${r.bgName}
        hd:bg-${r.bgName}_sm_hi
        hd_md:bg-${r.bgName}_hi`
    );
    return (s, a) => (A(), G("button", {
      title: n.value,
      class: Ae(i.value)
    }, null, 10, h4));
  }
}), Qy = /* @__PURE__ */ me(d4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/background-selector/background-selector-item.vue"]]), p4 = {
  key: 0,
  class: "flex flex-row-reverse"
}, m4 = /* @__PURE__ */ fe({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { t: e } = Ze(), r = K1(), n = vt(), i = Zt(), { bgLayer: s, is3dMesh: a } = He(n), l = we(t.isOpen), u = we([]), f = de(
      () => {
        var p, m;
        return (m = (p = s.value) == null ? void 0 : p.id) != null ? m : r.getNullId();
      }
    ), c = de(
      () => {
        var p, m;
        return (m = (p = u.value) == null ? void 0 : p.find((g) => g.id === f.value)) == null ? void 0 : m.name;
      }
    );
    et(
      () => i.bgLayers,
      (p) => {
        u.value = Jr().bg_layers.map(
          (m) => Object.assign(
            {
              id: m.id
            },
            p.find((g) => m.id === g.id),
            {
              name: m.icon_id
            }
          )
        );
      },
      { immediate: !0 }
    ), et(
      () => n.bgLayer,
      (p, m) => {
        const g = n.layers;
        m === void 0 && p === null && (g == null ? void 0 : g.length) === 0 && (r.setBgLayer(r.defaultSelectedBgId.value), p === null && Au().addNotification(
          e(
            "Aucune couche n'\xE9tant d\xE9finie pour cette carte, une couche de fond a automatiquement \xE9t\xE9 ajout\xE9e.",
            { ns: "client" }
          )
        ));
      }
    );
    function h(p) {
      r.setBgLayer(p.id), l.value = !1;
    }
    function d() {
      l.value = !l.value;
    }
    return (p, m) => O(a) ? F("v-if", !0) : (A(), G("div", p4, [
      P("div", {
        class: Ae(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ie(Qy, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": c.value,
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      P("div", {
        class: Ae(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (A(!0), G(Ge, null, kr(u.value, (g) => (A(), G("div", {
          key: g.id,
          class: Ae([
            "lux-bg-sel hover:bg-cyan-600",
            g.id === f.value ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ie(Qy, {
            "bg-name": g.name,
            onClick: (v) => h(g)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), g4 = /* @__PURE__ */ me(m4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/background-selector/background-selector.vue"]]), y4 = /* @__PURE__ */ P("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), v4 = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, b4 = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, _4 = { class: "text-xl" }, E4 = /* @__PURE__ */ P("span", { "aria-hidden": "true" }, "\xD7", -1), S4 = [
  E4
], w4 = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, O4 = { class: "flex flex-row justify-end" }, x4 = /* @__PURE__ */ fe({
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
    const { t: e } = Ze(), r = we();
    Er(() => {
      r.value.focus();
    });
    const n = tt(!0);
    function i() {
      n.value = !1;
    }
    return (s, a) => (A(), Ue(Q0, { to: "body" }, [
      F(" backdrop "),
      y4,
      F(" modal "),
      ie(_c, {
        appear: "",
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "transform opacity-0 -translate-y-60",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "transform opacity-0 -translate-y-60",
        onAfterLeave: a[3] || (a[3] = (o) => s.$emit("close"))
      }, {
        default: Ti(() => [
          n.value ? (A(), G("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: r,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = pn(dn((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            P("div", v4, [
              F(" header (title)"),
              P("div", b4, [
                P("h4", _4, oe(t.title), 1),
                P("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, [...S4])
              ]),
              F(" content slot "),
              P("div", {
                class: Ae(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                $0(s.$slots, "content")
              ], 2),
              F(" footer (optional)"),
              t.footer ? (A(), G("div", w4, [
                P("div", O4, [
                  P("button", {
                    type: "button",
                    class: "lux-btn",
                    "data-dismiss": "modal",
                    onClick: a[1] || (a[1] = (o) => i())
                  }, oe(O(e)("Close", { ns: "client" })), 1)
                ])
              ])) : F("v-if", !0)
            ])
          ], 544)) : F("v-if", !0)
        ]),
        _: 3
      })
    ]));
  }
}), X1 = /* @__PURE__ */ me(x4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/modal-dialog.vue"]]), _p = ws(
  "metadata",
  () => {
    const t = we();
    function e(n) {
      t.value = n;
    }
    function r() {
      t.value = void 0;
    }
    return {
      metadataId: t,
      setMetadataId: e,
      clearMetadataId: r
    };
  },
  {}
), M4 = ["aria-expanded"], T4 = { class: "leading-6" }, N4 = /* @__PURE__ */ fe({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, r) => (A(), G(Ge, null, [
      P("button", {
        onClick: r[0] || (r[0] = (n) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": e.expanded
      }, [
        P("div", {
          class: Ae(["grow", e.expanded ? "text-white" : "text-secondary"])
        }, oe(e.title), 3),
        P("div", T4, [
          P("div", {
            class: Ae(["fa fa-sharp fa-solid group-hover:text-white text-primary", e.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, M4),
      P("div", {
        class: Ae(e.expanded ? "" : "hidden")
      }, [
        $0(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), ou = /* @__PURE__ */ me(N4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/expandable-panel.vue"]]), C4 = {
  class: "mb-px",
  key: "node.id"
}, P4 = ["data-cy"], L4 = ["aria-expanded", "data-cy"], A4 = { class: "grow" }, I4 = { class: "leading-6" }, k4 = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, D4 = ["data-cy"], R4 = { class: "ml-1 hover:underline" }, $4 = /* @__PURE__ */ fe({
  __name: "layer-tree-node",
  props: {
    node: { type: Object, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const r = t, n = e, { t: i } = Ze(), { setMetadataId: s } = _p(), a = !!r.node.children, o = r.node.depth === 0, l = r.node.depth >= 10, u = de(() => i(r.node.name, { ns: "client" }));
    function f(h) {
      n("toggleLayer", h);
    }
    function c(h) {
      n("toggleParent", h);
    }
    return (h, d) => {
      const p = Vw("layer-tree-node", !0);
      return a ? (A(), G("div", C4, [
        F("    First level parents"),
        h.node.depth === 1 ? (A(), G("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${h.node.id}`
        }, [
          ie(ou, {
            title: u.value,
            expanded: h.node.expanded,
            onTogglePanel: d[0] || (d[0] = (m) => c(h.node))
          }, null, 8, ["title", "expanded"])
        ], 8, P4)) : h.node.depth > 1 && !l ? (A(), G(Ge, { key: 1 }, [
          F("    Other parents (with custom panel style)"),
          P("button", {
            class: Ae(["w-full text-left flex px-2 py-1.5 pl-2", h.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": h.node.expanded,
            onClick: d[1] || (d[1] = (m) => c(h.node)),
            "data-cy": `parentLayerLabel-${h.node.id}`
          }, [
            P("div", A4, oe(u.value), 1),
            P("div", I4, [
              P("div", {
                class: Ae(["fa-sharp fa-solid", h.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, L4)
        ], 2112)) : F("v-if", !0),
        F("    Children"),
        l ? F("v-if", !0) : (A(), G("div", {
          key: 2,
          class: Ae(["bg-secondary", [
            { "pl-2": h.node.depth > 1 },
            { "lux-collapse": !o },
            { expanded: !o && h.node.expanded }
          ]])
        }, [
          (A(!0), G(Ge, null, kr(h.node.children, (m) => (A(), Ue(p, {
            key: m.id,
            node: m,
            onToggleParent: d[2] || (d[2] = (g) => c(g)),
            onToggleLayer: d[3] || (d[3] = (g) => f(g))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (A(), G("div", k4, [
        P("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: d[4] || (d[4] = (m) => O(s)(h.node.id))
        }),
        P("button", {
          class: Ae(["w-full text-left", { "font-bold": h.node.checked }]),
          onClick: d[5] || (d[5] = (m) => f(h.node)),
          "data-cy": `layerLabel-${h.node.id}`
        }, [
          P("i", {
            class: Ae(["fa-solid", h.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          P("span", R4, oe(u.value), 1)
        ], 10, D4)
      ]));
    };
  }
}), id = /* @__PURE__ */ me($4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-tree/layer-tree-node.vue"]]);
class F4 {
  toggleNode(e, r, n) {
    var i;
    return (r == null ? void 0 : r.id) === e ? {
      ...r,
      [n]: !r[n]
    } : {
      ...r,
      children: (i = r.children) == null ? void 0 : i.map(
        (s) => this.toggleNode(e, s, n)
      )
    };
  }
  updateLayers(e, r) {
    const { id: n } = e;
    if (e.children)
      return {
        ...e,
        children: e.children.map((i) => this.updateLayers(i, r))
      };
    {
      const i = !!(r != null && r.find((s) => s.id === n));
      return {
        ...e,
        checked: i
      };
    }
  }
}
const la = new F4();
var Ir = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Ir || {});
function V4(t, e) {
  var r, n;
  return t.children && !e.children || ((r = e.children) == null ? void 0 : r.length) === 0 ? 1 : e.children && !t.children || ((n = t.children) == null ? void 0 : n.length) === 0 ? -1 : 0;
}
function Z1(t, e, r = 0) {
  const { name: n = "", type: i = Ir.WMS, children: s } = t, a = `${i}||${e}||${n}`.split("-").join("%2D"), o = vt();
  return {
    id: a,
    name: n,
    depth: r,
    children: s == null ? void 0 : s.sort(V4).map((l) => Z1(l, e, r + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function j4(t) {
  const e = decodeURIComponent(t), [r, n, i] = e.split("||");
  return J1({
    id: e,
    url: pa.getProxyfiedUrl(n),
    remoteLayer: { name: i, type: r }
  });
}
function J1({
  id: t,
  url: e,
  remoteLayer: r
}) {
  const { name: n = "", type: i = Ir.WMS } = r;
  return {
    id: t,
    name: n,
    layers: n,
    url: e,
    type: i,
    imageType: t_.PNG
  };
}
class Rf {
  constructor(e, r = 0, n = !1) {
    this.message = e, this.httpStatus = r, this.isCrossOriginRelated = n;
  }
}
let G4 = 0;
function U4() {
  return G4++;
}
function B4(t, e, r) {
  return new Promise((n, i) => {
    const s = U4(), a = {
      requestId: s,
      taskName: t,
      params: r
    };
    e === null ? window.dispatchEvent(
      new CustomEvent("ogc-client.request", {
        detail: a
      })
    ) : e.postMessage(a);
    const o = ({ detail: l, data: u }) => {
      const f = l || u;
      f.requestId === s && (e === null ? window.removeEventListener("message", o) : e.removeEventListener("message", o), "error" in f ? i(f.error) : n(f.response));
    };
    e === null ? window.addEventListener("ogc-client.response", o) : e.addEventListener("message", o);
  });
}
function Ep(t, e, r) {
  const n = typeof WorkerGlobalScope < "u", i = async ({ detail: s, data: a }) => {
    const o = s || a;
    if (o.taskName === t) {
      let l, u;
      try {
        l = await r(o.params);
      } catch (c) {
        u = c;
      }
      const f = {
        taskName: t,
        requestId: o.requestId,
        ...l && { response: l },
        ...u && { error: u }
      };
      n ? e.postMessage(f) : e.dispatchEvent(
        new CustomEvent("ogc-client.response", {
          detail: f
        })
      );
    }
  };
  n ? e.addEventListener("message", i) : e.addEventListener("ogc-client.request", i);
}
let $f;
function W4() {
  return $f || ($f = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), $f;
}
function q4(t) {
  return B4("parseWmsCapabilities", W4(), {
    url: t
  });
}
const ui = "";
class H4 {
  constructor(e) {
    this.chars = [...e], this.charCount = this.chars.length, this.charIndex = 0, this.charsToBytes = new Array(this.charCount), this.multiByteMode = !1, this.string = e;
    let { chars: r, charCount: n, charsToBytes: i } = this;
    if (n === e.length)
      for (let s = 0; s < n; ++s)
        i[s] = s;
    else {
      for (let s = 0, a = 0; a < n; ++a)
        i[a] = s, s += r[a].length;
      this.multiByteMode = !0;
    }
  }
  get isEnd() {
    return this.charIndex >= this.charCount;
  }
  _charLength(e) {
    let { length: r } = e;
    return r < 2 || !this.multiByteMode ? r : e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
  }
  advance(e = 1) {
    this.charIndex = Math.min(this.charCount, this.charIndex + e);
  }
  consume(e = 1) {
    let r = this.peek(e);
    return this.advance(e), r;
  }
  consumeMatch(e) {
    if (!e.sticky)
      throw new Error('`regex` must have a sticky flag ("y")');
    e.lastIndex = this.charsToBytes[this.charIndex];
    let r = e.exec(this.string);
    if (r === null)
      return ui;
    let n = r[0];
    return this.advance(this._charLength(n)), n;
  }
  consumeMatchFn(e) {
    let r = this.charIndex;
    for (; !this.isEnd && e(this.peek()); )
      this.advance();
    return this.charIndex > r ? this.string.slice(this.charsToBytes[r], this.charsToBytes[this.charIndex]) : ui;
  }
  consumeString(e) {
    if (this.consumeStringFast(e))
      return e;
    if (!this.multiByteMode)
      return ui;
    let { length: r } = e, n = this._charLength(e);
    return n !== r && e === this.peek(n) ? (this.advance(n), e) : ui;
  }
  consumeStringFast(e) {
    if (this.peek() === e[0]) {
      let { length: r } = e;
      if (r === 1)
        return this.advance(), e;
      if (this.peek(r) === e)
        return this.advance(r), e;
    }
    return ui;
  }
  consumeUntilMatch(e) {
    if (!e.global)
      throw new Error('`regex` must have a global flag ("g")');
    let r = this.charsToBytes[this.charIndex];
    e.lastIndex = r;
    let n = e.exec(this.string);
    if (n === null || n.index === r)
      return ui;
    let i = this.string.slice(r, n.index);
    return this.advance(this._charLength(i)), i;
  }
  consumeUntilString(e) {
    let { charIndex: r, charsToBytes: n, string: i } = this, s = n[r], a = i.indexOf(e, s);
    if (a <= 0)
      return ui;
    let o = i.slice(s, a);
    return this.advance(this._charLength(o)), o;
  }
  peek(e = 1) {
    if (this.charIndex >= this.charCount)
      return ui;
    if (e === 1)
      return this.chars[this.charIndex];
    let { charsToBytes: r, charIndex: n } = this;
    return this.string.slice(r[n], r[n + e]);
  }
  reset(e = 0) {
    this.charIndex = e >= 0 ? Math.min(this.charCount, e) : Math.max(0, this.charIndex + e);
  }
}
var z4 = H4, Gi = {};
const Y4 = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
Gi.predefinedEntities = Y4;
function Q1(t) {
  if (eE(t))
    return !0;
  let e = Rc(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
Gi.isNameChar = Q1;
function eE(t) {
  let e = Rc(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
Gi.isNameStartChar = eE;
function K4(t) {
  return !tE(t);
}
Gi.isNotXmlChar = K4;
function X4(t) {
  return t === "#" || Q1(t);
}
Gi.isReferenceChar = X4;
function Z4(t) {
  let e = Rc(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
Gi.isWhitespace = Z4;
function tE(t) {
  let e = Rc(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
Gi.isXmlChar = tE;
function Rc(t) {
  return t.codePointAt(0) || -1;
}
class Ms {
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
Ms.TYPE_CDATA = "cdata";
Ms.TYPE_COMMENT = "comment";
Ms.TYPE_DOCUMENT = "document";
Ms.TYPE_ELEMENT = "element";
Ms.TYPE_PROCESSING_INSTRUCTION = "pi";
Ms.TYPE_TEXT = "text";
var Ts = Ms;
const Ff = Ts;
class J4 extends Ff {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return Ff.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(Ff.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var Sp = J4;
const Q4 = Ts, e6 = Sp;
class t6 extends e6 {
  get type() {
    return Q4.TYPE_CDATA;
  }
}
var rE = t6;
const Vf = Ts;
class r6 extends Vf {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return Vf.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(Vf.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var nE = r6;
const jf = Ts;
class wp extends jf {
  constructor(e, r = /* @__PURE__ */ Object.create(null), n = []) {
    super(), this.name = e, this.attributes = r, this.children = n;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof wp; ) {
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
    return jf.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(jf.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var Op = wp;
const n6 = Op, Gf = Ts;
class i6 extends Gf {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof n6) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return Gf.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(Gf.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var iE = i6;
const Uf = Ts;
class s6 extends Uf {
  constructor(e, r = "") {
    super(), this.name = e, this.content = r;
  }
  get type() {
    return Uf.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(Uf.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var sE = s6;
const a6 = z4, Ji = Gi, o6 = rE, l6 = nE, u6 = iE, c6 = Op, ev = sE, tv = Sp, Bf = "";
class f6 {
  constructor(e, r = {}) {
    for (this.document = new u6(), this.currentNode = this.document, this.options = r, this.scanner = new a6(d6(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
      ;
    this.scanner.isEnd || this.error("Extra content at the end of the document");
  }
  addNode(e) {
    e.parent = this.currentNode, this.currentNode.children.push(e);
  }
  addText(e) {
    let { children: r } = this.currentNode;
    if (r.length > 0) {
      let n = r[r.length - 1];
      if (n instanceof tv) {
        n.text += e;
        return;
      }
    }
    this.addNode(new tv(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, r = e.peek();
    if (r !== '"' && r !== "'")
      return !1;
    e.advance();
    let n, i = !1, s = Bf, a = r === '"' ? /[^"&<]+/y : /[^'&<]+/y;
    e:
      for (; !e.isEnd; )
        switch (n = e.consumeMatch(a), n && (this.validateChars(n), s += n.replace(/[\t\r\n]/g, " ")), e.peek()) {
          case r:
            i = !0;
            break e;
          case "&":
            s += this.consumeReference();
            continue;
          case "<":
            this.error("Unescaped `<` is not allowed in an attribute value");
            break;
          case Bf:
            this.error("Unclosed attribute");
            break;
        }
    return i || this.error("Unclosed attribute"), e.advance(), s;
  }
  consumeCdataSection() {
    let { scanner: e } = this;
    if (!e.consumeStringFast("<![CDATA["))
      return !1;
    let r = e.consumeUntilString("]]>");
    return this.validateChars(r), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new o6(r)) : this.addText(r), !0;
  }
  consumeCharData() {
    let { scanner: e } = this, r = e.consumeUntilMatch(/<|&|]]>/g);
    return r ? (this.validateChars(r), e.peek() === "]" && e.peek(3) === "]]>" && this.error("Element content may not contain the CDATA section close delimiter `]]>`"), this.addText(r), !0) : !1;
  }
  consumeComment() {
    let { scanner: e } = this;
    if (!e.consumeStringFast("<!--"))
      return !1;
    let r = e.consumeUntilString("--");
    return this.validateChars(r), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new l6(r.trim())), !0;
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
    let { scanner: e } = this, r = e.charIndex;
    if (e.peek() !== "<")
      return !1;
    e.advance();
    let n = this.consumeName();
    if (!n)
      return e.reset(r), !1;
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
    let s = Boolean(e.consumeStringFast("/>")), a = new c6(n, i);
    if (a.parent = this.currentNode, !s) {
      for (e.consumeStringFast(">") || this.error(`Unclosed start tag for element \`${n}\``), this.currentNode = a, this.consumeCharData(); this.consumeElement() || this.consumeContentReference() || this.consumeCdataSection() || this.consumeProcessingInstruction() || this.consumeComment(); )
        this.consumeCharData();
      let o = e.charIndex, l;
      (!e.consumeStringFast("</") || !(l = this.consumeName()) || l !== n) && (e.reset(o), this.error(`Missing end tag for element ${n}`)), this.consumeWhitespace(), e.consumeStringFast(">") || this.error(`Unclosed end tag for element ${n}`), this.currentNode = a.parent;
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
    return Ji.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(Ji.isNameChar) : Bf;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, r = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let n = this.consumeName();
    if (n ? n.toLowerCase() === "xml" && (e.reset(r), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new ev(n)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new ev(n, i)), !0;
  }
  consumeProlog() {
    let { scanner: e } = this, r = e.charIndex;
    for (this.consumeXmlDeclaration(); this.consumeMisc(); )
      ;
    if (this.consumeDoctypeDeclaration())
      for (; this.consumeMisc(); )
        ;
    return r < e.charIndex;
  }
  consumeReference() {
    let { scanner: e } = this;
    if (e.peek() !== "&")
      return !1;
    e.advance();
    let r = e.consumeMatchFn(Ji.isReferenceChar);
    e.consume() !== ";" && this.error("Unterminated reference (a reference must end with `;`)");
    let n;
    if (r[0] === "#") {
      let i = r[1] === "x" ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
      isNaN(i) && this.error("Invalid character reference"), n = String.fromCodePoint(i), Ji.isXmlChar(n) || this.error("Character reference resolves to an invalid character");
    } else if (n = Ji.predefinedEntities[r], n === void 0) {
      let {
        ignoreUndefinedEntities: i,
        resolveUndefinedEntity: s
      } = this.options, a = `&${r};`;
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
    return n;
  }
  consumeSystemLiteral() {
    let { scanner: e } = this, r = e.consumeStringFast('"') || e.consumeStringFast("'");
    if (!r)
      return !1;
    let n = e.consumeUntilString(r);
    return this.validateChars(n), e.consumeStringFast(r) || this.error("Missing end quote"), n;
  }
  consumeWhitespace() {
    return Boolean(this.scanner.consumeMatchFn(Ji.isWhitespace));
  }
  consumeXmlDeclaration() {
    let { scanner: e } = this;
    if (!e.consumeStringFast("<?xml"))
      return !1;
    this.consumeWhitespace() || this.error("Invalid XML declaration");
    let r = Boolean(e.consumeStringFast("version")) && this.consumeEqual() && this.consumeSystemLiteral();
    if (r === !1 ? this.error("XML version is missing or invalid") : /^1\.[0-9]+$/.test(r) || this.error("Invalid character in version number"), this.consumeWhitespace()) {
      Boolean(e.consumeStringFast("encoding")) && this.consumeEqual() && this.consumeSystemLiteral() && this.consumeWhitespace();
      let i = Boolean(e.consumeStringFast("standalone")) && this.consumeEqual() && this.consumeSystemLiteral();
      i && (i !== "yes" && i !== "no" && this.error('Only "yes" and "no" are permitted as values of `standalone`'), this.consumeWhitespace());
    }
    return e.consumeStringFast("?>") || this.error("Invalid or unclosed XML declaration"), !0;
  }
  error(e) {
    let { charIndex: r, string: n } = this.scanner, i = 1, s = "", a = 1;
    for (let f = 0; f < r; ++f) {
      let c = n[f];
      c === `
` ? (i = 1, s = "", a += 1) : (i += 1, s += c);
    }
    let o = n.indexOf(`
`, r);
    s += o === -1 ? n.slice(r) : n.slice(r, o);
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
      pos: r
    }), u;
  }
  validateChars(e) {
    let r = 0;
    for (let n of e)
      Ji.isNotXmlChar(n) && (this.scanner.reset(-([...e].length - r)), this.error("Invalid character")), r += 1;
  }
}
var h6 = f6;
function d6(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const p6 = h6, m6 = rE, g6 = nE, y6 = iE, v6 = Op, b6 = Ts, _6 = sE, E6 = Sp;
function Ui(t, e) {
  return new p6(t, e).document;
}
Ui.XmlCdata = m6;
Ui.XmlComment = g6;
Ui.XmlDocument = y6;
Ui.XmlElement = v6;
Ui.XmlNode = b6;
Ui.XmlProcessingInstruction = _6;
Ui.XmlText = E6;
var S6 = Ui;
class w6 extends Error {
  constructor(e) {
    super(e);
  }
}
function O6(t) {
  let e = null;
  try {
    e = S6(t);
  } catch (r) {
    throw new w6(r.message);
  }
  return e;
}
function Kn(t) {
  return t.children[0];
}
function Zu(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function Ju(t) {
  return t.name || "";
}
function Ht(t, e, r) {
  const n = Zu(e);
  function i(s, a) {
    return Zu(Ju(a)) === n && s.push(a), r && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
  }
  return t && Array.isArray(t.children) ? t.children.reduce(i, []) : [];
}
function Me(t, e, r) {
  return Ht(t, e, r)[0] || null;
}
function Ba(t) {
  return t && Array.isArray(t.children) ? [...t.children.filter((e) => e.constructor.name === "XmlElement")] : [];
}
function ze(t) {
  const e = t && Array.isArray(t.children) ? t.children.find((r) => r.type === "text") : null;
  return e ? e.text : "";
}
function wn(t, e) {
  return t && t.attributes[e] || "";
}
const rv = ["utf-8", "utf-16", "iso-8859-1"], nv = "utf-8";
function x6(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function M6(t, e) {
  const r = e ? x6(e) : null, n = r ? [r, ...rv] : rv;
  for (const i of n)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${nv}.`
  ), new TextDecoder(nv).decode(t);
}
const Al = /* @__PURE__ */ new Map();
function T6(t) {
  if (Al.has(t))
    return Al.get(t);
  const e = fetch(t);
  return e.finally(() => Al.delete(t)), Al.set(t, e), e;
}
function xp(t) {
  return T6(t).catch(
    () => fetch(t, { method: "HEAD", mode: "no-cors" }).catch((e) => {
      throw new Rf(
        `Fetching the document failed either due to network errors or unreachable host, error is: ${e.message}`,
        0,
        !1
      );
    }).then(() => {
      throw new Rf(
        "The document could not be fetched due to CORS limitations",
        0,
        !0
      );
    })
  ).then(async (e) => {
    if (!e.ok) {
      const i = await e.text();
      throw new Rf(
        `Received an error with code ${e.status}: ${i}`,
        e.status,
        !1
      );
    }
    const r = await e.arrayBuffer(), n = e.headers.get("Content-Type");
    return M6(r, n);
  }).then((e) => O6(e));
}
function Mp(t, e) {
  const r = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (r) {
    const o = r[1], l = Mp(decodeURIComponent(o), e);
    return t.replace(o, encodeURIComponent(l));
  }
  const n = new URL(t), i = Object.keys(e), s = i.map((o) => o.toLowerCase()), a = [];
  for (const o of n.searchParams.keys())
    s.indexOf(o.toLowerCase()) > -1 && a.push(o);
  return a.map((o) => n.searchParams.delete(o)), i.forEach(
    (o) => n.searchParams.set(o, e[o] === !0 ? "" : e[o])
  ), n.toString();
}
let N6 = 1e3 * 60 * 60;
function C6() {
  return N6;
}
const Ri = "caches" in self ? caches.open("ogc-client") : null;
async function P6(t, ...e) {
  if (!Ri)
    return;
  const r = "https://cache/" + e.join("/");
  await (await Ri).put(
    r,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + C6()).toString(10)
      }
    })
  );
}
async function L6(...t) {
  if (!Ri)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await Ri).match(e).then((n) => !!n && parseInt(n.headers.get("x-expiry")) > Date.now());
}
async function A6(...t) {
  if (!Ri)
    return null;
  const e = "https://cache/" + t.join("/"), n = await (await Ri).match(e);
  return n ? n.clone().json() : null;
}
const Il = /* @__PURE__ */ new Map();
async function I6(t, ...e) {
  if (await k6(), await L6(...e))
    return A6(...e);
  const r = e.join("#");
  if (Il.has(r))
    return Il.get(r);
  const n = t();
  n instanceof Promise && (n.then(() => Il.delete(r)), Il.set(r, n));
  const i = await n;
  return await P6(i, ...e), i;
}
async function k6() {
  if (!Ri)
    return;
  const t = await Ri, e = await t.keys();
  for (let r of e) {
    const n = await t.match(r);
    parseInt(n.headers.get("x-expiry")) <= Date.now() && await t.delete(r);
  }
}
function D6(t, e, r, n, i, s, a, o, l, u) {
  const f = e === "2.0.0" ? "TYPENAMES" : "TYPENAME", c = e === "2.0.0" ? "COUNT" : "MAXFEATURES", h = {
    SERVICE: "WFS",
    REQUEST: "GetFeature",
    VERSION: e,
    [f]: r
  };
  if (n !== void 0 && (h.OUTPUTFORMAT = n), s !== void 0 && (h.PROPERTYNAME = s.join(",")), a ? (h.RESULTTYPE = "hits", h[c] = "1") : i !== void 0 && (h[c] = i.toString(10)), o && (h.SRSNAME = o), l) {
    const d = l.join(",");
    h.BBOX = u ? `${d},${u}` : d;
  }
  return Mp(t, h);
}
class R6 {
  constructor(e) {
    const r = Mp(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = I6(
      () => q4(r),
      "WMS",
      "CAPABILITIES",
      r
    ).then(({ info: n, layers: i, version: s }) => {
      this._info = n, this._layers = i, this._version = s;
    }), this._info = null, this._layers = null, this._version = null;
  }
  isReady() {
    return this._capabilitiesPromise.then(() => this);
  }
  getServiceInfo() {
    return this._info;
  }
  getLayers() {
    function e(r) {
      return {
        title: r.title,
        name: r.name,
        abstract: r.abstract,
        ..."children" in r && {
          children: r.children.map(e)
        }
      };
    }
    return this._layers.map(e);
  }
  getLayerByName(e) {
    let r = null;
    function n(i) {
      if (r === null) {
        if (i.name === e) {
          r = i;
          return;
        }
        "children" in i && i.children.map(n);
      }
    }
    return this._layers.map(n), r;
  }
  getVersion() {
    return this._version;
  }
}
const $6 = [
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
function F6(t) {
  return $6.indexOf(sd(t)) > -1;
}
function sd(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function aE(t) {
  return Kn(t).attributes.version;
}
function V6(t) {
  const e = aE(t), r = Me(
    Kn(t),
    "Capability"
  );
  return Ht(r, "Layer").map(
    (n) => oE(n, e)
  );
}
function j6(t) {
  const e = Me(Kn(t), "Service"), r = Ht(
    Me(e, "KeywordList"),
    "Keyword"
  ).map(ze).filter((n, i, s) => s.indexOf(n) === i);
  return {
    title: ze(Me(e, "Title")),
    name: ze(Me(e, "Name")),
    abstract: ze(Me(e, "Abstract")),
    fees: ze(Me(e, "Fees")),
    constraints: ze(Me(e, "AccessConstraints")),
    keywords: r
  };
}
function oE(t, e, r = [], n = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = Ht(t, s).map(ze), o = a.length > 0 ? a : r, l = Ht(t, "Style").map(
    G6
  ), u = l.length > 0 ? l : n;
  function f(p) {
    const m = wn(p, s);
    return (F6(m) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((v) => wn(p, v));
  }
  const c = Me(t, "Attribution"), h = c !== null ? U6(c) : i, d = Ht(t, "Layer").map(
    (p) => oE(p, e, o, u, h)
  );
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    availableCrs: o,
    styles: u,
    attribution: h,
    boundingBoxes: Ht(t, "BoundingBox").reduce(
      (p, m) => ({
        ...p,
        [wn(m, s)]: f(m)
      }),
      {}
    ),
    ...d.length && { children: d }
  };
}
function G6(t) {
  const e = wn(
    Me(Me(t, "LegendURL"), "OnlineResource"),
    "xlink:href"
  );
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    ...e && { legendUrl: e }
  };
}
function U6(t) {
  const e = wn(
    Me(
      Me(t, "LogoURL"),
      "OnlineResource"
    ),
    "xlink:href"
  ), r = wn(
    Me(t, "OnlineResource"),
    "xlink:href"
  ), n = ze(Me(t, "Title"));
  return {
    ...n && { title: n },
    ...r && { url: r },
    ...e && { logoUrl: e }
  };
}
function $c(t) {
  return Kn(t).attributes.version;
}
function lE(t) {
  const e = $c(t);
  let r;
  if (e.startsWith("1.0")) {
    const n = Me(
      Me(
        Me(Kn(t), "Capability"),
        "Request"
      ),
      "GetFeature"
    );
    r = Ba(
      Me(n, "ResultFormat")
    ).map(Ju);
  } else {
    const n = Me(
      Kn(t),
      "OperationsMetadata"
    ), i = Ht(n, "Operation").find(
      (a) => wn(a, "name") === "GetFeature"
    ), s = Ht(i, "Parameter").find(
      (a) => wn(a, "name") === "outputFormat"
    );
    r = Ht(s, "Value", !0).map(
      ze
    );
  }
  return r;
}
function B6(t) {
  const e = $c(t), r = e.startsWith("1.0") ? "Service" : "ServiceIdentification", n = e.startsWith("1.0") ? "Name" : "ServiceType", i = Me(Kn(t), r);
  let s;
  return e.startsWith("1.0") ? s = ze(Me(i, "Keywords")).split(",").map((a) => a.trim()) : s = Ht(
    Me(i, "Keywords"),
    "Keyword"
  ).map(ze), {
    title: ze(Me(i, "Title")),
    name: ze(Me(i, n)),
    abstract: ze(Me(i, "Abstract")),
    fees: ze(Me(i, "Fees")),
    constraints: ze(Me(i, "AccessConstraints")),
    keywords: s,
    outputFormats: lE(t)
  };
}
function W6(t) {
  const e = $c(t), r = lE(t), n = Me(
    Kn(t),
    "FeatureTypeList"
  );
  return Ht(n, "FeatureType").map(
    (i) => q6(i, e, r)
  );
}
function q6(t, e, r) {
  const n = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${n}`;
  function s() {
    const u = Me(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => wn(u, f)).map(parseFloat);
  }
  function a() {
    const u = Me(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => Me(u, f)).map((f) => ze(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : Ht(t, `Other${n}`).map(ze).map(sd), l = e.startsWith("1.0") ? [] : Ht(
    Me(t, "OutputFormats"),
    "Format"
  ).map(ze);
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    defaultCrs: sd(
      ze(Me(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : r,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function H6(t, e, r) {
  const n = Kn(t);
  let i;
  if (r.startsWith("2.0"))
    i = Ht(n, "member").map(
      (u) => Ba(u)[0]
    );
  else {
    const u = Me(n, "featureMembers");
    i = u ? Ba(u) : Ht(n, "featureMember").map(
      (f) => Ba(f)[0]
    );
  }
  const s = r === "1.0.0" ? "fid" : "gml:id";
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
    return Ba(u).filter((f) => a(Zu(Ju(f)))).reduce((f, c) => {
      const h = Zu(Ju(c));
      return {
        ...f,
        [h]: o(h, ze(c))
      };
    }, {});
  }
  return i.map((u) => ({
    id: wn(u, s),
    properties: l(u)
  }));
}
function z6(t) {
  return t.reduce((e, r) => {
    for (const n in r.properties) {
      const i = r.properties[n];
      n in e || (e[n] = { uniqueValues: [] });
      const s = e[n].uniqueValues.find(
        (a) => a.value === i
      );
      s ? s.count++ : e[n].uniqueValues.push({ value: i, count: 1 });
    }
    return e;
  }, {});
}
Ep(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => xp(t).then((e) => ({
    info: j6(e),
    layers: V6(e),
    version: aE(e)
  }))
);
Ep(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => xp(t).then((e) => ({
    info: B6(e),
    featureTypes: W6(e),
    version: $c(e)
  }))
);
Ep(
  "queryWfsFeatureTypeDetails",
  self,
  ({ url: t, serviceVersion: e, featureTypeFull: r }) => {
    const n = D6(
      t,
      e,
      r.name,
      void 0,
      void 0,
      Object.keys(r.properties)
    );
    return xp(n).then((i) => ({
      props: z6(
        H6(i, r, e)
      )
    }));
  }
);
const Y6 = () => [
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
class K6 {
  constructor(e) {
    st(this, "capabilitiesPromise");
    st(this, "serviceInfo");
    st(this, "layers");
    const r = new pS();
    let n = "&";
    e.indexOf("?") === -1 && (n = "?"), e.indexOf("Capabilities") === -1 && (e = e + n + "SERVICE=WMTS&REQUEST=GetCapabilities"), this.capabilitiesPromise = fetch(e).then((i) => i.text()).then((i) => {
      var a;
      const s = r.read(i);
      this.serviceInfo = this.mapServiceInfo(s.ServiceIdentification), this.layers = this.mapToRemoteLayers((a = s.Contents) == null ? void 0 : a.Layer);
    });
  }
  mapToRemoteLayers(e) {
    return [
      {
        type: Ir.WMTS,
        children: e.map(
          (r) => ({
            type: Ir.WMTS,
            abstract: r.Abstract,
            format: r.Format,
            name: r.Identifier,
            title: r.Title,
            tileMatrixSetLink: r.TileMatrixSetLink,
            wgs84BoundingBox: r.WGS84BoundingBox
          })
        )
      }
    ];
  }
  mapServiceInfo(e) {
    return {
      type: Ir.WMTS,
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
    return this.layers[0].children.filter((r) => r.name === e)[0];
  }
  getLayers() {
    return this.layers;
  }
  getServiceInfo() {
    return this.serviceInfo;
  }
}
class X6 {
  async getRemoteEndpoint(e) {
    let r;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      r = await this.getWmtsEndpoint(e).isReady();
    }) || r;
  }
  getWmsEndpoint(e) {
    return new R6(pa.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new K6(pa.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(Y6()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Ir.WMS) === 0 || e.indexOf(Ir.WMTS) === 0);
  }
}
const xo = new X6(), Z6 = { class: "relative text-center" }, J6 = ["placeholder", "value"], Q6 = {
  key: 0,
  class: "text-center"
}, eF = { class: "lux-label" }, tF = {
  key: 1,
  class: "text-center"
}, rF = { class: "lux-label" }, nF = {
  key: 2,
  class: "text-center"
}, iF = /* @__PURE__ */ P("div", { class: "fa fa-refresh fa-spin" }, null, -1), sF = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, aF = /* @__PURE__ */ fe({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Ze(), r = vt(), n = en(), i = tt([]), s = tt(), { remoteLayersOpen: a } = He(wt()), { setRemoteLayersOpen: o } = wt();
    let l = !1, u, f, c;
    _r(h);
    function h() {
      s.value = s.value ? la.updateLayers(
        s.value,
        r.layers
      ) : void 0;
    }
    xo.fetchRemoteWmsEndpoint().then((E) => {
      i.value = E.map(({ url: x, label: N }) => ({
        label: N,
        value: x
      }));
    });
    async function d(E) {
      l = !0, c = await xo.getRemoteEndpoint(E).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = E, l = !1;
    }
    async function p() {
      const E = c, x = E == null ? void 0 : E.getLayers();
      if (x && x[0]) {
        const N = Z1(
          x[0],
          f
        );
        s.value = la.updateLayers(N, r.layers);
      }
    }
    async function m(E) {
      f = u = E, await d(f), p();
    }
    function g(E) {
      u = E.target.value;
    }
    async function v() {
      await d(u), p();
    }
    function y(E) {
      s.value = la.toggleNode(
        E.id,
        s.value,
        "expanded"
      );
    }
    function _(E) {
      const { id: x, name: N } = E, M = c;
      if (E.checked === !0)
        r.removeLayers(x);
      else {
        const L = M == null ? void 0 : M.getLayerByName(N);
        if (L) {
          const D = n.initLayer(
            J1({
              id: x,
              url: pa.getProxyfiedUrl(f),
              remoteLayer: L
            })
          );
          r.addLayers(D);
        }
      }
    }
    return (E, x) => O(a) ? (A(), Ue(X1, {
      key: 0,
      title: O(e)("Add external data", { ns: "client" }),
      onClose: x[0] || (x[0] = (N) => O(o)(!1))
    }, {
      content: Ti(() => {
        var N, M;
        return [
          P("div", Z6, [
            ie(Xb, {
              class: "lux-remote-services-dropdown",
              options: i.value,
              placeholder: O(e)("Predefined wms", { ns: "client" }),
              onChange: m
            }, null, 8, ["options", "placeholder"]),
            P("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: O(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: O(f) || "",
              onChange: g
            }, null, 40, J6),
            P("button", {
              type: "button",
              class: "lux-btn",
              onClick: v
            }, oe(O(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !O(l) && O(c) ? (A(), G("div", Q6, [
            P("span", eF, oe(O(e)("Description du service :", {
              ns: "client"
            })), 1),
            Su(" " + oe((N = O(c).getServiceInfo()) == null ? void 0 : N.abstract), 1)
          ])) : F("v-if", !0),
          !O(l) && O(c) ? (A(), G("div", tF, [
            P("span", rF, oe(O(e)("Access constraints :", {
              ns: "client"
            })), 1),
            Su(" " + oe((M = O(c).getServiceInfo()) == null ? void 0 : M.constraints), 1)
          ])) : F("v-if", !0),
          O(l) ? (A(), G("div", nF, [
            iF,
            P("span", null, oe(O(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : F("v-if", !0),
          O(l) ? F("v-if", !0) : (A(), G("div", sF, [
            s.value ? (A(), Ue(id, {
              key: 0,
              class: "block p-[10px] mb-[11px]",
              node: s.value,
              onToggleParent: y,
              onToggleLayer: _
            }, null, 8, ["node"])) : F("v-if", !0)
          ]))
        ];
      }),
      _: 1
    }, 8, ["title"])) : F("v-if", !0);
  }
}), oF = /* @__PURE__ */ me(aF, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/remote-layers/remote-layers.vue"]]);
function lF(t, e = "fr-FR") {
  const r = new Date(t);
  return new Intl.DateTimeFormat(e).format(r);
}
const uF = { class: "font-bold" }, cF = { class: "col-span-2" }, fF = /* @__PURE__ */ fe({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (A(), G(Ge, null, [
      P("span", uF, oe(e.label), 1),
      P("span", cF, oe(e.value), 1)
    ], 64));
  }
}), ka = /* @__PURE__ */ me(fF, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-metadata/layer-metadata-item.vue"]]);
function hF(t) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[t.toLowerCase()];
}
function dF(t) {
  return new DOMParser().parseFromString(t, "text/html").body;
}
function pF(t) {
  const e = [];
  function r(n) {
    const i = n.split("|");
    i[3] === "WWW:LINK-1.0-http--link" && e.indexOf(i[2]) === -1 && e.push(i[2]);
  }
  return Array.isArray(t) ? t.forEach(r, t) : r(t), e;
}
function mF(t) {
  const r = (Array.isArray(t) ? t : [t]).filter((n) => n.split("|")[1] === "metadata");
  return {
    organisaton: r[0].split("|")[2],
    name: r[0].split("|")[5],
    unknown: r[0].split("|")[6],
    address: r[0].split("|")[7],
    email: r[0].split("|")[4]
  };
}
class uE {
}
class gF extends uE {
  async getMetadata(e, r, n) {
    console.assert(e === Ir.WMS);
    const i = xo.getWmsEndpoint(r);
    await i.isReady();
    const s = i == null ? void 0 : i.getServiceInfo(), a = i == null ? void 0 : i.getLayerByName(n);
    return {
      title: a.title,
      description: a.abstract,
      keywords: s.keywords,
      accessConstraints: s.constraints,
      serviceDescription: s.abstract
    };
  }
}
const yF = new gF();
class vF extends uE {
  async getMetadata(e, r, n) {
    console.assert(e === Ir.WMTS);
    const i = xo.getWmtsEndpoint(r);
    await i.isReady();
    const s = i == null ? void 0 : i.getServiceInfo(), a = i == null ? void 0 : i.getLayerByName(n);
    return {
      title: a.title,
      description: a.abstract,
      accessConstraints: s.constraints,
      serviceDescription: s.abstract
    };
  }
}
const bF = new vF();
class _F {
  async getMetadata(e, r, n) {
    if (e === Ir.WMS)
      return yF.getMetadata(e, r, n);
    if (e === Ir.WMTS)
      return bF.getMetadata(e, r, n);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const EF = new _F();
class SF {
  constructor() {
    st(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    st(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    st(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, r) {
    const n = ps(), i = n.findBgLayerById(+e) || n.findById(+e) || n.find3dLayerById(+e);
    if (i) {
      const s = i.metadata, a = s == null ? void 0 : s.metadata_id, o = a && await this.getLocalMetadata(
        this.localMetadataBaseUrl,
        a,
        r
      ), l = i.name, u = (s == null ? void 0 : s.legend_name) || "", f = i == null ? void 0 : i.id, c = u && await this.getLegendHtml(
        this.legendBaseUrl,
        u,
        f,
        r
      );
      return {
        ...o,
        title: l,
        hasLegend: !!c,
        ...c && { legendHtml: c }
      };
    } else {
      const [s, a, o] = String(e).split("%2D").join("-").split("||");
      return EF.getMetadata(
        s,
        a,
        o
      );
    }
  }
  getLocalMetadata(e, r, n) {
    return fetch(`${e}?lang=${n}&uid=${r}`).then(async (i) => {
      const s = (await i.json()).metadata;
      return {
        name: s.title,
        serviceDescription: s.serviceDescription,
        description: s.abstract,
        legalConstraints: s.legalConstraints,
        link: pF(s.link),
        revisionDate: s.revisionDate,
        keyword: s.keyword,
        responsibleParty: s.responsibleParty ? mF(s.responsibleParty) : void 0,
        metadataLink: `${this.geonetworkBaseUrl}/${hF(
          n
        )}/catalog.search#/metadata/${r}`,
        isError: !1
      };
    }).catch(() => ({ isError: !0 }));
  }
  getLegendHtml(e, r, n, i) {
    const s = {
      lang: i,
      ...r && { name: r },
      ...n && { id: n.toString() }
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
        return l ? dF(l) : void 0;
      }).catch(() => {
      });
    }
  }
}
const iv = new SF(), wF = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, OF = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, xF = { class: "font-bold" }, MF = { class: "col-span-2" }, TF = ["title"], NF = ["title"], CF = {
  key: 4,
  class: "col-span-3"
}, PF = { class: "font-bold" }, LF = { class: "col-span-2" }, AF = ["href"], IF = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, kF = { class: "font-bold" }, DF = { class: "col-span-2" }, RF = { key: 0 }, $F = { key: 1 }, FF = { key: 2 }, VF = { key: 3 }, jF = { key: 4 }, GF = ["href"], UF = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, BF = { class: "font-bold" }, WF = { class: "col-span-2" }, qF = ["href"], HF = {
  key: 9,
  class: "col-span-3"
}, zF = { key: 10 }, YF = { class: "text-xl" }, KF = {
  key: 11,
  class: "col-span-3"
}, Wf = 220, XF = /* @__PURE__ */ fe({
  __name: "layer-metadata",
  setup(t) {
    const e = _p(), { metadataId: r } = He(e), { t: n, i18next: i } = Ze(), s = we(), a = we(!0);
    et(r, async (c) => {
      var h, d;
      s.value = c ? await iv.getLayerMetadata(c, i.language) : void 0, a.value = (((d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.length) || 0) < Wf;
    }), Er(() => {
      i.on("languageChanged", async () => {
        r.value && (s.value = await iv.getLayerMetadata(
          r.value,
          i.language
        ));
      });
    });
    const o = de(
      () => {
        var c, h, d;
        return a.value ? (c = s.value) == null ? void 0 : c.description : (d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.slice(0, Wf);
      }
    );
    function l() {
      a.value = !0;
    }
    function u() {
      a.value = !1;
    }
    function f() {
      e.clearMetadataId();
    }
    return (c, h) => {
      const d = Cd("dompurify-html");
      return s.value ? (A(), Ue(X1, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: O(n)(`${s.value.title}`, { ns: "client" }),
        onClose: f
      }, {
        content: Ti(() => {
          var p, m, g, v, y, _, E, x, N, M, L, D, C, R, k;
          return [
            P("div", wF, [
              s.value.name ? (A(), Ue(ka, {
                key: 0,
                label: O(n)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.serviceDescription ? (A(), Ue(ka, {
                key: 1,
                label: O(n)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.description ? (A(), G("div", OF, [
                P("span", xF, oe(O(n)("Description")), 1),
                P("span", MF, [
                  bu(P("span", null, null, 512), [
                    [d, o.value]
                  ]),
                  a.value ? F("v-if", !0) : (A(), G("button", {
                    key: 0,
                    title: O(n)("Display full description", {
                      ns: "client"
                    }),
                    onClick: l,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, TF)),
                  a.value && (((p = o.value) == null ? void 0 : p.length) || 0) > Wf ? (A(), G("button", {
                    key: 1,
                    title: O(n)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, NF)) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.legalConstraints ? (A(), Ue(ka, {
                key: 3,
                label: O(n)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              ((m = s.value.link) == null ? void 0 : m.length) !== 0 ? (A(), G("div", CF, [
                (A(!0), G(Ge, null, kr(s.value.link, (Q) => (A(), G("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: Q
                }, [
                  P("span", PF, oe(O(n)("Url vers la resource")), 1),
                  P("span", LF, [
                    P("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: Q
                    }, oe(Q), 9, AF)
                  ])
                ]))), 128))
              ])) : F("v-if", !0),
              s.value.revisionDate ? (A(), Ue(ka, {
                key: 5,
                label: O(n)("Revision date"),
                value: O(lF)(s.value.revisionDate, O(i).language)
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.keyword ? (A(), Ue(ka, {
                key: 6,
                label: O(n)("Keywords"),
                value: (g = s.value.keyword) == null ? void 0 : g.join(",")
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.responsibleParty ? (A(), G("div", IF, [
                P("div", kF, oe(O(n)("Contact")), 1),
                P("div", DF, [
                  (v = s.value.responsibleParty) != null && v.organisaton ? (A(), G("p", RF, oe((y = s.value.responsibleParty) == null ? void 0 : y.organisaton), 1)) : F("v-if", !0),
                  (_ = s.value.responsibleParty) != null && _.name ? (A(), G("p", $F, oe((E = s.value.responsibleParty) == null ? void 0 : E.name), 1)) : F("v-if", !0),
                  (x = s.value.responsibleParty) != null && x.unknown ? (A(), G("p", FF, oe((N = s.value.responsibleParty) == null ? void 0 : N.unknown), 1)) : F("v-if", !0),
                  (M = s.value.responsibleParty) != null && M.address ? (A(), G("p", VF, oe((L = s.value.responsibleParty) == null ? void 0 : L.address), 1)) : F("v-if", !0),
                  (D = s.value.responsibleParty) != null && D.email ? (A(), G("p", jF, [
                    P("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((C = s.value.responsibleParty) == null ? void 0 : C.email)
                    }, oe((R = s.value.responsibleParty) == null ? void 0 : R.email), 9, GF)
                  ])) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.metadataLink ? (A(), G("div", UF, [
                P("span", BF, oe(O(n)("Link to the metadata")), 1),
                P("span", WF, [
                  P("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, oe(O(n)("link")), 9, qF)
                ])
              ])) : F("v-if", !0),
              s.value.isError ? (A(), G("div", HF, oe(O(n)("The metadata is right now not available")), 1)) : F("v-if", !0),
              s.value.legendHtml ? (A(), G("div", zF, [
                P("h4", YF, oe(O(n)("Legend")), 1),
                bu(P("span", null, null, 512), [
                  [d, (k = s.value.legendHtml) == null ? void 0 : k.innerHTML]
                ])
              ])) : F("v-if", !0),
              s.value.hasLegend ? F("v-if", !0) : (A(), G("div", KF, oe(O(n)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : F("v-if", !0);
    };
  }
}), ZF = /* @__PURE__ */ me(XF, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-metadata/layer-metadata.vue"]]), JF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class QF {
  bootstrap() {
    this.restore();
    let e;
    e = _r(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = wt(), { lang: r } = He(e);
    et(
      r,
      (n, i) => {
        i !== n && (Ne.setValue(Li, n), document.documentElement.setAttribute("lang", n));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(Li);
    if (e) {
      const { setLang: r } = wt(), { i18next: n } = Ze();
      n.changeLanguage(e), r(e);
    }
  }
}
const e5 = new QF(), t5 = /* @__PURE__ */ fe({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: r } = Ze(), { setLang: n } = wt(), { lang: i } = He(wt()), s = de(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: r(l),
        value: l,
        ariaLabel: r("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = r("Changer de langue");
    e5.bootstrap();
    function o(l) {
      e.changeLanguage(l), n(l);
    }
    return (l, u) => (A(), G("div", null, [
      ie(Xb, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: s.value,
        placeholder: O(a),
        modelValue: O(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => Ye(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), r5 = /* @__PURE__ */ me(t5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/nav-bars/language-selector.vue"]]);
class n5 {
  setCurrentThemeColors(e) {
    const r = document.querySelector(":root");
    ["primary", "secondary", "tertiary"].forEach((i) => {
      const s = getComputedStyle(r).getPropertyValue(
        `--${e}-${i}`
      );
      r.style.setProperty(`--color-${i}`, s);
    });
  }
}
const i5 = new n5(), s5 = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, a5 = /* @__PURE__ */ P("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ P("img", { src: JF })
], -1), o5 = /* @__PURE__ */ P("div", { class: "grow text-center" }, "search", -1), l5 = { class: "h-full flex" }, u5 = { class: "hidden lg:inline-block" }, c5 = { class: "border-l-[1px] border-stone-300 h-full" }, f5 = /* @__PURE__ */ fe({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Ze(), r = wt(), { layersOpen: n, myLayersTabOpen: i, themeGridOpen: s } = He(r), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = r, u = Zt(), { theme: f } = He(u);
    et(
      f,
      (h) => {
        h && i5.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      n.value ? n.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var p, m;
      return A(), G("header", s5, [
        a5,
        o5,
        P("div", null, [
          P("ul", l5, [
            P("li", null, [
              P("button", {
                class: Ae(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(p = O(f)) == null ? void 0 : p.name}`]),
                onClick: c
              }, [
                P("span", u5, oe(O(e)(`${(m = O(f)) == null ? void 0 : m.name}`)), 1)
              ], 2)
            ]),
            P("li", c5, [
              ie(r5, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), h5 = /* @__PURE__ */ me(f5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/header/header-bar.vue"]]), d5 = { class: "block text-[13px] sm:text-base uppercase" }, p5 = /* @__PURE__ */ fe({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (A(), G("button", {
      class: Ae(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      P("span", {
        class: Ae(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      P("span", d5, oe(e.label), 1)
    ], 2));
  }
}), Fn = /* @__PURE__ */ me(p5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/button-icon.vue"]]), m5 = ["href"], g5 = /* @__PURE__ */ fe({
  __name: "button-link",
  props: {
    label: { type: String, required: !0 },
    link: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (A(), G("a", {
      class: "h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary",
      href: `${e.link}`,
      target: "_blank"
    }, oe(r.$props.label), 9, m5));
  }
}), ci = /* @__PURE__ */ me(g5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/button-link.vue"]]), y5 = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, v5 = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, b5 = { class: "flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, _5 = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, E5 = /* @__PURE__ */ fe({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: r } = Ze(), { setLayersOpen: n } = wt(), { layersOpen: i } = He(wt());
    return (s, a) => (A(), G("footer", y5, [
      F(" left buttons "),
      P("ul", v5, [
        P("li", null, [
          ie(Fn, {
            label: O(e)("Layers", { ns: "client" }),
            icon: "layers",
            active: O(i),
            onClick: a[0] || (a[0] = () => O(n)(!O(i)))
          }, null, 8, ["label", "active"])
        ]),
        F(`TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      `),
        P("li", null, [
          ie(Fn, {
            class: "text-gray-300",
            label: O(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        P("li", null, [
          ie(Fn, {
            class: "text-gray-300",
            label: O(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        P("li", null, [
          ie(Fn, {
            class: "text-gray-300",
            label: O(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        P("li", null, [
          ie(Fn, {
            class: "text-gray-300",
            label: O(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      F(" center buttons "),
      P("div", b5, [
        ie(Fn, {
          class: "text-gray-300",
          label: O(e)("Dessin", { ns: "client" }),
          icon: "draw"
        }, null, 8, ["label"]),
        ie(Fn, {
          class: "text-gray-300 hidden sm:block",
          label: O(e)("Mesurer", { ns: "client" }),
          icon: "measure"
        }, null, 8, ["label"]),
        ie(Fn, {
          class: "text-gray-300 hidden sm:block",
          label: O(e)("Imprimer", { ns: "client" }),
          icon: "print"
        }, null, 8, ["label"]),
        ie(Fn, {
          class: "text-gray-300",
          label: O(e)("Partager", { ns: "client" }),
          icon: "share"
        }, null, 8, ["label"])
      ]),
      F(" right buttons "),
      P("div", _5, [
        ie(ci, {
          class: "hidden lg:flex text-gray-500",
          label: O(e)("What's new", { ns: "client" }),
          link: `https://geoportail.lu/${O(r).language}/questions/whats-new/`
        }, null, 8, ["label", "link"]),
        F("TODO get geonetworkBaseUrl from config"),
        ie(ci, {
          class: "hidden lg:flex text-gray-500",
          label: O(e)("Geocatalogue", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        F("TODO handle feedback links (for different portals?)"),
        ie(ci, {
          class: "hidden lg:flex text-gray-500",
          label: O(e)("Feedback", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        ie(ci, {
          class: "hidden lg:flex text-gray-500",
          label: O(e)("A Propos", { ns: "client" }),
          link: `https://www.geoportail.lu/${O(r).language}/propos/`
        }, null, 8, ["label", "link"]),
        ie(ci, {
          class: "hidden lg:flex text-gray-500",
          label: O(e)("Aide", { ns: "client" }),
          link: `https://www.geoportail.lu/${O(r).language}/documentation/`
        }, null, 8, ["label", "link"]),
        ie(ci, {
          class: "hidden lg:flex text-gray-500",
          label: O(e)("Contact", { ns: "client" }),
          link: `https://www.geoportail.lu/${O(r).language}/propos/contactez-nous/`
        }, null, 8, ["label", "link"]),
        ie(ci, {
          class: "text-gray-500",
          label: O(e)("Legalites", { ns: "client" }),
          link: `https://www.geoportail.lu/${O(r).language}/propos/mentions-legales/`
        }, null, 8, ["label", "link"]),
        ie(ci, {
          class: "text-gray-500",
          label: O(e)("ACT", { ns: "client" }),
          link: "http://www.act.public.lu/"
        }, null, 8, ["label", "link"])
      ])
    ]));
  }
}), S5 = /* @__PURE__ */ me(E5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/footer-bar.vue"]]), w5 = { class: "flex flex-row flex-wrap pl-2.5" }, O5 = ["onClick"], x5 = { class: "text-2xl absolute top-5" }, M5 = /* @__PURE__ */ fe({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const { t: e } = Ze(), r = t;
    return (n, i) => (A(), G("div", w5, [
      (A(!0), G(Ge, null, kr(r.themes, (s) => (A(), G("button", {
        class: Ae(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => n.$emit("setTheme", s.name)
      }, [
        P("div", x5, oe(O(e)(`${s.name}`)), 1),
        P("div", {
          class: Ae(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, O5))), 128))
    ]));
  }
}), T5 = /* @__PURE__ */ me(M5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/theme-selector/theme-grid.vue"]]), N5 = ["aria-expanded"], C5 = { class: "py-0.5" }, P5 = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, L5 = { class: "py-[3px]" }, A5 = { class: "flex flex-row flex-wrap ml-1 w-12" }, I5 = /* @__PURE__ */ fe({
  __name: "theme-selector-button",
  props: {
    themes: { type: Array, required: !0 },
    currentTheme: { type: Object, required: !1 },
    isOpen: { type: Boolean, required: !1 }
  },
  setup(t) {
    const { t: e } = Ze(), r = t, n = de(() => {
      var i;
      return ((i = r.themes) == null ? void 0 : i.slice(0, 8)) || [];
    });
    return (i, s) => {
      var a;
      return A(), G("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": r.isOpen
      }, [
        P("span", C5, oe(O(e)("Theme")) + ": " + oe(O(e)(`${(a = r.currentTheme) == null ? void 0 : a.name}`)), 1),
        P("span", P5, [
          P("span", L5, oe(O(e)("Changer")), 1),
          P("span", A5, [
            (A(!0), G(Ge, null, kr(n.value, (o) => (A(), G("div", {
              class: Ae(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, N5);
    };
  }
}), k5 = /* @__PURE__ */ me(I5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/theme-selector/theme-selector-button.vue"]]), D5 = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, R5 = /* @__PURE__ */ fe({
  __name: "theme-selector",
  setup(t) {
    const e = wt(), { setThemeGridOpen: r } = e, { themeGridOpen: n } = He(e), i = Zt(), s = ps(), { theme: a, themes: o } = He(i), l = de(
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
      r(!n.value);
    }
    function f(c) {
      s.setTheme(c), u();
    }
    return (c, h) => (A(), G(Ge, null, [
      ie(k5, {
        onClick: u,
        themes: l.value,
        currentTheme: O(a),
        isOpen: O(n)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      O(n) ? (A(), G("div", D5, [
        ie(T5, {
          onSetTheme: f,
          themes: l.value
        }, null, 8, ["themes"])
      ])) : F("v-if", !0)
    ], 64));
  }
}), $5 = /* @__PURE__ */ me(R5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/theme-selector/theme-selector.vue"]]);
function ad(t, e = 0) {
  const { name: r, id: n, children: i, metadata: s } = t;
  return {
    name: r,
    id: n,
    depth: e,
    children: i == null ? void 0 : i.map((a) => ad(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const F5 = {
  key: 0,
  class: "mb-7"
}, V5 = /* @__PURE__ */ fe({
  __name: "catalog-tree",
  setup(t) {
    const e = vt(), r = Zt(), n = en(), i = tt(), s = tt(), a = de(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = He(r);
    _r(l);
    function l() {
      var c;
      if (r.theme && e.layers) {
        const h = i.value && i.value.id === ((c = r.theme) == null ? void 0 : c.id) ? i.value : ad(r.theme);
        i.value = la.updateLayers(
          h,
          e.layers
        );
      }
    }
    _r(() => {
      if (o.value) {
        const c = s.value ? s.value : ad(o.value);
        s.value = la.updateLayers(
          c,
          e.layers3d
        );
      }
    });
    function u(c, h) {
      const d = h ? s : i;
      d.value = la.toggleNode(
        c.id,
        d.value,
        "expanded"
      );
    }
    function f(c, h) {
      n.toggleLayer(+c.id, !c.checked, h);
    }
    return (c, h) => (A(), G("div", null, [
      F(" 3D layers catalog, only displayed when 3D is active "),
      s.value && O(e).is3dActive ? (A(), G("div", F5, [
        (A(), Ue(id, {
          node: s.value,
          key: s.value.id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : F("v-if", !0),
      F(" Main catalog, displays by default and 3D terrain active "),
      i.value && a.value ? (A(), Ue(id, {
        node: i.value,
        key: i.value.id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : F("v-if", !0)
    ]));
  }
}), j5 = /* @__PURE__ */ me(V5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/catalog/catalog-tree.vue"]]), G5 = /* @__PURE__ */ fe({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = He(wt());
    return (r, n) => (A(), G(Ge, null, [
      ie($5),
      O(e) === !1 ? (A(), Ue(j5, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : F("v-if", !0)
    ], 64));
  }
}), U5 = /* @__PURE__ */ me(G5, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function sv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sv(Object(r), !0).forEach(function(n) {
      B5(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function lu(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lu = function(e) {
    return typeof e;
  } : lu = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, lu(t);
}
function B5(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Xn() {
  return Xn = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Xn.apply(this, arguments);
}
function W5(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function q5(t, e) {
  if (t == null)
    return {};
  var r = W5(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, n) || (r[n] = t[n]));
  }
  return r;
}
var H5 = "1.15.2";
function Hn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var ni = Hn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Jo = Hn(/Edge/i), av = Hn(/firefox/i), ao = Hn(/safari/i) && !Hn(/chrome/i) && !Hn(/android/i), cE = Hn(/iP(ad|od|hone)/i), fE = Hn(/chrome/i) && Hn(/android/i), hE = {
  capture: !1,
  passive: !1
};
function je(t, e, r) {
  t.addEventListener(e, r, !ni && hE);
}
function De(t, e, r) {
  t.removeEventListener(e, r, !ni && hE);
}
function Qu(t, e) {
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
function z5(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Hr(t, e, r, n) {
  if (t) {
    r = r || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === r && Qu(t, e) : Qu(t, e)) || n && t === r)
        return t;
      if (t === r)
        break;
    } while (t = z5(t));
  }
  return null;
}
var ov = /\s+/g;
function dr(t, e, r) {
  if (t && e)
    if (t.classList)
      t.classList[r ? "add" : "remove"](e);
    else {
      var n = (" " + t.className + " ").replace(ov, " ").replace(" " + e + " ", " ");
      t.className = (n + (r ? " " + e : "")).replace(ov, " ");
    }
}
function ye(t, e, r) {
  var n = t && t.style;
  if (n) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (r = t.currentStyle), e === void 0 ? r : r[e];
    !(e in n) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), n[e] = r + (typeof r == "string" ? "" : "px");
  }
}
function ua(t, e) {
  var r = "";
  if (typeof t == "string")
    r = t;
  else
    do {
      var n = ye(t, "transform");
      n && n !== "none" && (r = n + " " + r);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function dE(t, e, r) {
  if (t) {
    var n = t.getElementsByTagName(e), i = 0, s = n.length;
    if (r)
      for (; i < s; i++)
        r(n[i], i);
    return n;
  }
  return [];
}
function On() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Et(t, e, r, n, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var s, a, o, l, u, f, c;
    if (t !== window && t.parentNode && t !== On() ? (s = t.getBoundingClientRect(), a = s.top, o = s.left, l = s.bottom, u = s.right, f = s.height, c = s.width) : (a = 0, o = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, c = window.innerWidth), (e || r) && t !== window && (i = i || t.parentNode, !ni))
      do
        if (i && i.getBoundingClientRect && (ye(i, "transform") !== "none" || r && ye(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          a -= h.top + parseInt(ye(i, "border-top-width")), o -= h.left + parseInt(ye(i, "border-left-width")), l = a + s.height, u = o + s.width;
          break;
        }
      while (i = i.parentNode);
    if (n && t !== window) {
      var d = ua(i || t), p = d && d.a, m = d && d.d;
      d && (a /= m, o /= p, c /= p, f /= m, l = a + f, u = o + c);
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
function lv(t, e, r) {
  for (var n = Oi(t, !0), i = Et(t)[e]; n; ) {
    var s = Et(n)[r], a = void 0;
    if (r === "top" || r === "left" ? a = i >= s : a = i <= s, !a)
      return n;
    if (n === On())
      break;
    n = Oi(n, !1);
  }
  return !1;
}
function ma(t, e, r, n) {
  for (var i = 0, s = 0, a = t.children; s < a.length; ) {
    if (a[s].style.display !== "none" && a[s] !== ge.ghost && (n || a[s] !== ge.dragged) && Hr(a[s], r.draggable, t, !1)) {
      if (i === e)
        return a[s];
      i++;
    }
    s++;
  }
  return null;
}
function Tp(t, e) {
  for (var r = t.lastElementChild; r && (r === ge.ghost || ye(r, "display") === "none" || e && !Qu(r, e)); )
    r = r.previousElementSibling;
  return r || null;
}
function Tr(t, e) {
  var r = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ge.clone && (!e || Qu(t, e)) && r++;
  return r;
}
function uv(t) {
  var e = 0, r = 0, n = On();
  if (t)
    do {
      var i = ua(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, r += t.scrollTop * a;
    } while (t !== n && (t = t.parentNode));
  return [e, r];
}
function Y5(t, e) {
  for (var r in t)
    if (!!t.hasOwnProperty(r)) {
      for (var n in e)
        if (e.hasOwnProperty(n) && e[n] === t[r][n])
          return Number(r);
    }
  return -1;
}
function Oi(t, e) {
  if (!t || !t.getBoundingClientRect)
    return On();
  var r = t, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = ye(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body)
          return On();
        if (n || e)
          return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return On();
}
function K5(t, e) {
  if (t && e)
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function qf(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var oo;
function pE(t, e) {
  return function() {
    if (!oo) {
      var r = arguments, n = this;
      r.length === 1 ? t.call(n, r[0]) : t.apply(n, r), oo = setTimeout(function() {
        oo = void 0;
      }, e);
    }
  };
}
function X5() {
  clearTimeout(oo), oo = void 0;
}
function mE(t, e, r) {
  t.scrollLeft += e, t.scrollTop += r;
}
function gE(t) {
  var e = window.Polymer, r = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : r ? r(t).clone(!0)[0] : t.cloneNode(!0);
}
function yE(t, e, r) {
  var n = {};
  return Array.from(t.children).forEach(function(i) {
    var s, a, o, l;
    if (!(!Hr(i, e.draggable, t, !1) || i.animated || i === r)) {
      var u = Et(i);
      n.left = Math.min((s = n.left) !== null && s !== void 0 ? s : 1 / 0, u.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top), n.right = Math.max((o = n.right) !== null && o !== void 0 ? o : -1 / 0, u.right), n.bottom = Math.max((l = n.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var yr = "Sortable" + new Date().getTime();
function Z5() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(ye(i, "display") === "none" || i === ge.ghost)) {
            t.push({
              target: i,
              rect: Et(i)
            });
            var s = Cn({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = ua(i, !0);
              a && (s.top -= a.f, s.left -= a.e);
            }
            i.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(n) {
      t.push(n);
    },
    removeAnimationState: function(n) {
      t.splice(Y5(t, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof n == "function" && n();
        return;
      }
      var s = !1, a = 0;
      t.forEach(function(o) {
        var l = 0, u = o.target, f = u.fromRect, c = Et(u), h = u.prevFromRect, d = u.prevToRect, p = o.rect, m = ua(u, !0);
        m && (c.top -= m.f, c.left -= m.e), u.toRect = c, u.thisAnimationDuration && qf(h, c) && !qf(f, c) && (p.top - c.top) / (p.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = Q5(p, h, d, i.options)), qf(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, p, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(e), s ? e = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), t = [];
    },
    animate: function(n, i, s, a) {
      if (a) {
        ye(n, "transition", ""), ye(n, "transform", "");
        var o = ua(this.el), l = o && o.a, u = o && o.d, f = (i.left - s.left) / (l || 1), c = (i.top - s.top) / (u || 1);
        n.animatingX = !!f, n.animatingY = !!c, ye(n, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = J5(n), ye(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ye(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          ye(n, "transition", ""), ye(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function J5(t) {
  return t.offsetWidth;
}
function Q5(t, e, r, n) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - r.top, 2) + Math.pow(e.left - r.left, 2)) * n.animation;
}
var Fs = [], Hf = {
  initializeByDefault: !0
}, Qo = {
  mount: function(e) {
    for (var r in Hf)
      Hf.hasOwnProperty(r) && !(r in e) && (e[r] = Hf[r]);
    Fs.forEach(function(n) {
      if (n.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Fs.push(e);
  },
  pluginEvent: function(e, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var s = e + "Global";
    Fs.forEach(function(a) {
      !r[a.pluginName] || (r[a.pluginName][s] && r[a.pluginName][s](Cn({
        sortable: r
      }, n)), r.options[a.pluginName] && r[a.pluginName][e] && r[a.pluginName][e](Cn({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(e, r, n, i) {
    Fs.forEach(function(o) {
      var l = o.pluginName;
      if (!(!e.options[l] && !o.initializeByDefault)) {
        var u = new o(e, r, e.options);
        u.sortable = e, u.options = e.options, e[l] = u, Xn(n, u.defaults);
      }
    });
    for (var s in e.options)
      if (!!e.options.hasOwnProperty(s)) {
        var a = this.modifyOption(e, s, e.options[s]);
        typeof a < "u" && (e.options[s] = a);
      }
  },
  getEventProperties: function(e, r) {
    var n = {};
    return Fs.forEach(function(i) {
      typeof i.eventProperties == "function" && Xn(n, i.eventProperties.call(r[i.pluginName], e));
    }), n;
  },
  modifyOption: function(e, r, n) {
    var i;
    return Fs.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[r] == "function" && (i = s.optionListeners[r].call(e[s.pluginName], n));
    }), i;
  }
};
function e8(t) {
  var e = t.sortable, r = t.rootEl, n = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, p = t.extraEventProperties;
  if (e = e || r && r[yr], !!e) {
    var m, g = e.options, v = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !ni && !Jo ? m = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(n, !0, !0)), m.to = a || r, m.from = o || r, m.item = i || r, m.clone = s, m.oldIndex = l, m.newIndex = u, m.oldDraggableIndex = f, m.newDraggableIndex = c, m.originalEvent = h, m.pullMode = d ? d.lastPutMode : void 0;
    var y = Cn(Cn({}, p), Qo.getEventProperties(n, e));
    for (var _ in y)
      m[_] = y[_];
    r && r.dispatchEvent(m), g[v] && g[v].call(e, m);
  }
}
var t8 = ["evt"], ir = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, s = q5(n, t8);
  Qo.pluginEvent.bind(ge)(e, r, Cn({
    dragEl: J,
    parentEl: ct,
    ghostEl: Ee,
    rootEl: rt,
    nextEl: ns,
    lastDownEl: uu,
    cloneEl: at,
    cloneHidden: Ei,
    dragStarted: Wa,
    putSortable: At,
    activeSortable: ge.active,
    originalEvent: i,
    oldIndex: Xs,
    oldDraggableIndex: lo,
    newIndex: pr,
    newDraggableIndex: yi,
    hideGhostForTarget: EE,
    unhideGhostForTarget: SE,
    cloneNowHidden: function() {
      Ei = !0;
    },
    cloneNowShown: function() {
      Ei = !1;
    },
    dispatchSortableEvent: function(o) {
      Kt({
        sortable: r,
        name: o,
        originalEvent: i
      });
    }
  }, s));
};
function Kt(t) {
  e8(Cn({
    putSortable: At,
    cloneEl: at,
    targetEl: J,
    rootEl: rt,
    oldIndex: Xs,
    oldDraggableIndex: lo,
    newIndex: pr,
    newDraggableIndex: yi
  }, t));
}
var J, ct, Ee, rt, ns, uu, at, Ei, Xs, pr, lo, yi, kl, At, Us = !1, ec = !1, tc = [], Qi, Br, zf, Yf, cv, fv, Wa, Vs, uo, co = !1, Dl = !1, cu, jt, Kf = [], od = !1, rc = [], Fc = typeof document < "u", Rl = cE, hv = Jo || ni ? "cssFloat" : "float", r8 = Fc && !fE && !cE && "draggable" in document.createElement("div"), vE = function() {
  if (!!Fc) {
    if (ni)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), bE = function(e, r) {
  var n = ye(e), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), s = ma(e, 0, r), a = ma(e, 1, r), o = s && ye(s), l = a && ye(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Et(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && n[hv] === "none" || a && n[hv] === "none" && u + f > i) ? "vertical" : "horizontal";
}, n8 = function(e, r, n) {
  var i = n ? e.left : e.top, s = n ? e.right : e.bottom, a = n ? e.width : e.height, o = n ? r.left : r.top, l = n ? r.right : r.bottom, u = n ? r.width : r.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, i8 = function(e, r) {
  var n;
  return tc.some(function(i) {
    var s = i[yr].options.emptyInsertThreshold;
    if (!(!s || Tp(i))) {
      var a = Et(i), o = e >= a.left - s && e <= a.right + s, l = r >= a.top - s && r <= a.bottom + s;
      if (o && l)
        return n = i;
    }
  }), n;
}, _E = function(e) {
  function r(s, a) {
    return function(o, l, u, f) {
      var c = o.options.group.name && l.options.group.name && o.options.group.name === l.options.group.name;
      if (s == null && (a || c))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (a && s === "clone")
        return s;
      if (typeof s == "function")
        return r(s(o, l, u, f), a)(o, l, u, f);
      var h = (a ? o : l).options.group.name;
      return s === !0 || typeof s == "string" && s === h || s.join && s.indexOf(h) > -1;
    };
  }
  var n = {}, i = e.group;
  (!i || lu(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, e.group = n;
}, EE = function() {
  !vE && Ee && ye(Ee, "display", "none");
}, SE = function() {
  !vE && Ee && ye(Ee, "display", "");
};
Fc && !fE && document.addEventListener("click", function(t) {
  if (ec)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ec = !1, !1;
}, !0);
var es = function(e) {
  if (J) {
    e = e.touches ? e.touches[0] : e;
    var r = i8(e.clientX, e.clientY);
    if (r) {
      var n = {};
      for (var i in e)
        e.hasOwnProperty(i) && (n[i] = e[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[yr]._onDragOver(n);
    }
  }
}, s8 = function(e) {
  J && J.parentNode[yr]._isOutsideThisEl(e.target);
};
function ge(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Xn({}, e), t[yr] = this;
  var r = {
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
      return bE(t, this.options);
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
    supportPointer: ge.supportPointer !== !1 && "PointerEvent" in window && !ao,
    emptyInsertThreshold: 5
  };
  Qo.initializePlugins(this, t, r);
  for (var n in r)
    !(n in e) && (e[n] = r[n]);
  _E(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : r8, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? je(t, "pointerdown", this._onTapStart) : (je(t, "mousedown", this._onTapStart), je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (je(t, "dragover", this), je(t, "dragenter", this)), tc.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Xn(this, Z5());
}
ge.prototype = {
  constructor: ge,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Vs = null);
  },
  _getDirection: function(e, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, r, J) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var r = this, n = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (d8(n), !J && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && ao && l && l.tagName.toUpperCase() === "SELECT") && (l = Hr(l, i.draggable, n, !1), !(l && l.animated) && uu !== l)) {
        if (Xs = Tr(l), lo = Tr(l, i.draggable), typeof f == "function") {
          if (f.call(this, e, l, this)) {
            Kt({
              sortable: r,
              rootEl: u,
              name: "filter",
              targetEl: l,
              toEl: n,
              fromEl: n
            }), ir("filter", r, {
              evt: e
            }), s && e.cancelable && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(c) {
          if (c = Hr(u, c.trim(), n, !1), c)
            return Kt({
              sortable: r,
              rootEl: c,
              name: "filter",
              targetEl: l,
              fromEl: n,
              toEl: n
            }), ir("filter", r, {
              evt: e
            }), !0;
        }), f)) {
          s && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !Hr(u, i.handle, n, !1) || this._prepareDragStart(e, o, l);
      }
    }
  },
  _prepareDragStart: function(e, r, n) {
    var i = this, s = i.el, a = i.options, o = s.ownerDocument, l;
    if (n && !J && n.parentNode === s) {
      var u = Et(n);
      if (rt = s, J = n, ct = J.parentNode, ns = J.nextSibling, uu = n, kl = a.group, ge.dragged = J, Qi = {
        target: J,
        clientX: (r || e).clientX,
        clientY: (r || e).clientY
      }, cv = Qi.clientX - u.left, fv = Qi.clientY - u.top, this._lastX = (r || e).clientX, this._lastY = (r || e).clientY, J.style["will-change"] = "all", l = function() {
        if (ir("delayEnded", i, {
          evt: e
        }), ge.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !av && i.nativeDraggable && (J.draggable = !0), i._triggerDragStart(e, r), Kt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), dr(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        dE(J, f.trim(), Xf);
      }), je(o, "dragover", es), je(o, "mousemove", es), je(o, "touchmove", es), je(o, "mouseup", i._onDrop), je(o, "touchend", i._onDrop), je(o, "touchcancel", i._onDrop), av && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), ir("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || r) && (!this.nativeDraggable || !(Jo || ni))) {
        if (ge.eventCanceled) {
          this._onDrop();
          return;
        }
        je(o, "mouseup", i._disableDelayedDrag), je(o, "touchend", i._disableDelayedDrag), je(o, "touchcancel", i._disableDelayedDrag), je(o, "mousemove", i._delayedDragTouchMoveHandler), je(o, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && je(o, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var r = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    J && Xf(J), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    De(e, "mouseup", this._disableDelayedDrag), De(e, "touchend", this._disableDelayedDrag), De(e, "touchcancel", this._disableDelayedDrag), De(e, "mousemove", this._delayedDragTouchMoveHandler), De(e, "touchmove", this._delayedDragTouchMoveHandler), De(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, r) {
    r = r || e.pointerType == "touch" && e, !this.nativeDraggable || r ? this.options.supportPointer ? je(document, "pointermove", this._onTouchMove) : r ? je(document, "touchmove", this._onTouchMove) : je(document, "mousemove", this._onTouchMove) : (je(J, "dragend", this), je(rt, "dragstart", this._onDragStart));
    try {
      document.selection ? fu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, r) {
    if (Us = !1, rt && J) {
      ir("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && je(document, "dragover", s8);
      var n = this.options;
      !e && dr(J, n.dragClass, !1), dr(J, n.ghostClass, !0), ge.active = this, e && this._appendGhost(), Kt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Br) {
      this._lastX = Br.clientX, this._lastY = Br.clientY, EE();
      for (var e = document.elementFromPoint(Br.clientX, Br.clientY), r = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Br.clientX, Br.clientY), e !== r); )
        r = e;
      if (J.parentNode[yr]._isOutsideThisEl(e), r)
        do {
          if (r[yr]) {
            var n = void 0;
            if (n = r[yr]._onDragOver({
              clientX: Br.clientX,
              clientY: Br.clientY,
              target: e,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          e = r;
        } while (r = r.parentNode);
      SE();
    }
  },
  _onTouchMove: function(e) {
    if (Qi) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Ee && ua(Ee, !0), o = Ee && a && a.a, l = Ee && a && a.d, u = Rl && jt && uv(jt), f = (s.clientX - Qi.clientX + i.x) / (o || 1) + (u ? u[0] - Kf[0] : 0) / (o || 1), c = (s.clientY - Qi.clientY + i.y) / (l || 1) + (u ? u[1] - Kf[1] : 0) / (l || 1);
      if (!ge.active && !Us) {
        if (n && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < n)
          return;
        this._onDragStart(e, !0);
      }
      if (Ee) {
        a ? (a.e += f - (zf || 0), a.f += c - (Yf || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ye(Ee, "webkitTransform", h), ye(Ee, "mozTransform", h), ye(Ee, "msTransform", h), ye(Ee, "transform", h), zf = f, Yf = c, Br = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ee) {
      var e = this.options.fallbackOnBody ? document.body : rt, r = Et(J, !0, Rl, !0, e), n = this.options;
      if (Rl) {
        for (jt = e; ye(jt, "position") === "static" && ye(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = On()), r.top += jt.scrollTop, r.left += jt.scrollLeft) : jt = On(), Kf = uv(jt);
      }
      Ee = J.cloneNode(!0), dr(Ee, n.ghostClass, !1), dr(Ee, n.fallbackClass, !0), dr(Ee, n.dragClass, !0), ye(Ee, "transition", ""), ye(Ee, "transform", ""), ye(Ee, "box-sizing", "border-box"), ye(Ee, "margin", 0), ye(Ee, "top", r.top), ye(Ee, "left", r.left), ye(Ee, "width", r.width), ye(Ee, "height", r.height), ye(Ee, "opacity", "0.8"), ye(Ee, "position", Rl ? "absolute" : "fixed"), ye(Ee, "zIndex", "100000"), ye(Ee, "pointerEvents", "none"), ge.ghost = Ee, e.appendChild(Ee), ye(Ee, "transform-origin", cv / parseInt(Ee.style.width) * 100 + "% " + fv / parseInt(Ee.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, r) {
    var n = this, i = e.dataTransfer, s = n.options;
    if (ir("dragStart", this, {
      evt: e
    }), ge.eventCanceled) {
      this._onDrop();
      return;
    }
    ir("setupClone", this), ge.eventCanceled || (at = gE(J), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), dr(at, this.options.chosenClass, !1), ge.clone = at), n.cloneId = fu(function() {
      ir("clone", n), !ge.eventCanceled && (n.options.removeCloneOnHide || rt.insertBefore(at, J), n._hideClone(), Kt({
        sortable: n,
        name: "clone"
      }));
    }), !r && dr(J, s.dragClass, !0), r ? (ec = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (De(document, "mouseup", n._onDrop), De(document, "touchend", n._onDrop), De(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(n, i, J)), je(document, "drop", n), ye(J, "transform", "translateZ(0)")), Us = !0, n._dragStartId = fu(n._dragStarted.bind(n, r, e)), je(document, "selectstart", n), Wa = !0, ao && ye(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var r = this.el, n = e.target, i, s, a, o = this.options, l = o.group, u = ge.active, f = kl === l, c = o.sort, h = At || u, d, p = this, m = !1;
    if (od)
      return;
    function g(X, Ce) {
      ir(X, p, Cn({
        evt: e,
        isOwner: f,
        axis: d ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: s,
        canSort: c,
        fromSortable: h,
        target: n,
        completed: y,
        onMove: function(dt, Rt) {
          return $l(rt, r, J, i, dt, Et(dt), e, Rt);
        },
        changed: _
      }, Ce));
    }
    function v() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState();
    }
    function y(X) {
      return g("dragOverCompleted", {
        insertion: X
      }), X && (f ? u._hideClone() : u._showClone(p), p !== h && (dr(J, At ? At.options.ghostClass : u.options.ghostClass, !1), dr(J, o.ghostClass, !0)), At !== p && p !== ge.active ? At = p : p === ge.active && At && (At = null), h === p && (p._ignoreWhileAnimating = n), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (n === J && !J.animated || n === r && !n.animated) && (Vs = null), !o.dragoverBubble && !e.rootEl && n !== document && (J.parentNode[yr]._isOutsideThisEl(e.target), !X && es(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function _() {
      pr = Tr(J), yi = Tr(J, o.draggable), Kt({
        sortable: p,
        name: "change",
        toEl: r,
        newIndex: pr,
        newDraggableIndex: yi,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = Hr(n, o.draggable, r, !0), g("dragOver"), ge.eventCanceled)
      return m;
    if (J.contains(e.target) || n.animated && n.animatingX && n.animatingY || p._ignoreWhileAnimating === n)
      return y(!1);
    if (ec = !1, u && !o.disabled && (f ? c || (a = ct !== rt) : At === this || (this.lastPutMode = kl.checkPull(this, u, J, e)) && l.checkPut(this, u, J, e))) {
      if (d = this._getDirection(e, n) === "vertical", i = Et(J), g("dragOverValid"), ge.eventCanceled)
        return m;
      if (a)
        return ct = rt, v(), this._hideClone(), g("revert"), ge.eventCanceled || (ns ? rt.insertBefore(J, ns) : rt.appendChild(J)), y(!0);
      var E = Tp(r, o.draggable);
      if (!E || u8(e, d, this) && !E.animated) {
        if (E === J)
          return y(!1);
        if (E && r === e.target && (n = E), n && (s = Et(n)), $l(rt, r, J, i, n, s, e, !!n) !== !1)
          return v(), E && E.nextSibling ? r.insertBefore(J, E.nextSibling) : r.appendChild(J), ct = r, _(), y(!0);
      } else if (E && l8(e, d, this)) {
        var x = ma(r, 0, o, !0);
        if (x === J)
          return y(!1);
        if (n = x, s = Et(n), $l(rt, r, J, i, n, s, e, !1) !== !1)
          return v(), r.insertBefore(J, x), ct = r, _(), y(!0);
      } else if (n.parentNode === r) {
        s = Et(n);
        var N = 0, M, L = J.parentNode !== r, D = !n8(J.animated && J.toRect || i, n.animated && n.toRect || s, d), C = d ? "top" : "left", R = lv(n, "top", "top") || lv(J, "top", "top"), k = R ? R.scrollTop : void 0;
        Vs !== n && (M = s[C], co = !1, Dl = !D && o.invertSwap || L), N = c8(e, n, s, d, D ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, Dl, Vs === n);
        var Q;
        if (N !== 0) {
          var ve = Tr(J);
          do
            ve -= N, Q = ct.children[ve];
          while (Q && (ye(Q, "display") === "none" || Q === Ee));
        }
        if (N === 0 || Q === n)
          return y(!1);
        Vs = n, uo = N;
        var T = n.nextElementSibling, $ = !1;
        $ = N === 1;
        var z = $l(rt, r, J, i, n, s, e, $);
        if (z !== !1)
          return (z === 1 || z === -1) && ($ = z === 1), od = !0, setTimeout(o8, 30), v(), $ && !T ? r.appendChild(J) : n.parentNode.insertBefore(J, $ ? T : n), R && mE(R, 0, k - R.scrollTop), ct = J.parentNode, M !== void 0 && !Dl && (cu = Math.abs(M - Et(n)[C])), _(), y(!0);
      }
      if (r.contains(J))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    De(document, "mousemove", this._onTouchMove), De(document, "touchmove", this._onTouchMove), De(document, "pointermove", this._onTouchMove), De(document, "dragover", es), De(document, "mousemove", es), De(document, "touchmove", es);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    De(e, "mouseup", this._onDrop), De(e, "touchend", this._onDrop), De(e, "pointerup", this._onDrop), De(e, "touchcancel", this._onDrop), De(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var r = this.el, n = this.options;
    if (pr = Tr(J), yi = Tr(J, n.draggable), ir("drop", this, {
      evt: e
    }), ct = J && J.parentNode, pr = Tr(J), yi = Tr(J, n.draggable), ge.eventCanceled) {
      this._nulling();
      return;
    }
    Us = !1, Dl = !1, co = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ld(this.cloneId), ld(this._dragStartId), this.nativeDraggable && (De(document, "drop", this), De(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ao && ye(document.body, "user-select", ""), ye(J, "transform", ""), e && (Wa && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), (rt === ct || At && At.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), J && (this.nativeDraggable && De(J, "dragend", this), Xf(J), J.style["will-change"] = "", Wa && !Us && dr(J, At ? At.options.ghostClass : this.options.ghostClass, !1), dr(J, this.options.chosenClass, !1), Kt({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), rt !== ct ? (pr >= 0 && (Kt({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: rt,
      originalEvent: e
    }), Kt({
      sortable: this,
      name: "remove",
      toEl: ct,
      originalEvent: e
    }), Kt({
      rootEl: ct,
      name: "sort",
      toEl: ct,
      fromEl: rt,
      originalEvent: e
    }), Kt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), At && At.save()) : pr !== Xs && pr >= 0 && (Kt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Kt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ge.active && ((pr == null || pr === -1) && (pr = Xs, yi = lo), Kt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ir("nulling", this), rt = J = ct = Ee = ns = at = uu = Ei = Qi = Br = Wa = pr = yi = Xs = lo = Vs = uo = At = kl = ge.dragged = ge.ghost = ge.clone = ge.active = null, rc.forEach(function(e) {
      e.checked = !0;
    }), rc.length = zf = Yf = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        J && (this._onDragOver(e), a8(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], r, n = this.el.children, i = 0, s = n.length, a = this.options; i < s; i++)
      r = n[i], Hr(r, a.draggable, this.el, !1) && e.push(r.getAttribute(a.dataIdAttr) || h8(r));
    return e;
  },
  sort: function(e, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(s, a) {
      var o = i.children[a];
      Hr(o, this.options.draggable, i, !1) && (n[s] = o);
    }, this), r && this.captureAnimationState(), e.forEach(function(s) {
      n[s] && (i.removeChild(n[s]), i.appendChild(n[s]));
    }), r && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, r) {
    return Hr(e, r || this.options.draggable, this.el, !1);
  },
  option: function(e, r) {
    var n = this.options;
    if (r === void 0)
      return n[e];
    var i = Qo.modifyOption(this, e, r);
    typeof i < "u" ? n[e] = i : n[e] = r, e === "group" && _E(n);
  },
  destroy: function() {
    ir("destroy", this);
    var e = this.el;
    e[yr] = null, De(e, "mousedown", this._onTapStart), De(e, "touchstart", this._onTapStart), De(e, "pointerdown", this._onTapStart), this.nativeDraggable && (De(e, "dragover", this), De(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), tc.splice(tc.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!Ei) {
      if (ir("hideClone", this), ge.eventCanceled)
        return;
      ye(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), Ei = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ei) {
      if (ir("showClone", this), ge.eventCanceled)
        return;
      J.parentNode == rt && !this.options.group.revertClone ? rt.insertBefore(at, J) : ns ? rt.insertBefore(at, ns) : rt.appendChild(at), this.options.group.revertClone && this.animate(J, at), ye(at, "display", ""), Ei = !1;
    }
  }
};
function a8(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function $l(t, e, r, n, i, s, a, o) {
  var l, u = t[yr], f = u.options.onMove, c;
  return window.CustomEvent && !ni && !Jo ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = r, l.draggedRect = n, l.related = i || e, l.relatedRect = s || Et(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function Xf(t) {
  t.draggable = !1;
}
function o8() {
  od = !1;
}
function l8(t, e, r) {
  var n = Et(ma(r.el, 0, r.options, !0)), i = yE(r.el, r.options, Ee), s = 10;
  return e ? t.clientX < i.left - s || t.clientY < n.top && t.clientX < n.right : t.clientY < i.top - s || t.clientY < n.bottom && t.clientX < n.left;
}
function u8(t, e, r) {
  var n = Et(Tp(r.el, r.options.draggable)), i = yE(r.el, r.options, Ee), s = 10;
  return e ? t.clientX > i.right + s || t.clientY > n.bottom && t.clientX > n.left : t.clientY > i.bottom + s || t.clientX > n.right && t.clientY > n.top;
}
function c8(t, e, r, n, i, s, a, o) {
  var l = n ? t.clientY : t.clientX, u = n ? r.height : r.width, f = n ? r.top : r.left, c = n ? r.bottom : r.right, h = !1;
  if (!a) {
    if (o && cu < u * i) {
      if (!co && (uo === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (co = !0), co)
        h = !0;
      else if (uo === 1 ? l < f + cu : l > c - cu)
        return -uo;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return f8(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function f8(t) {
  return Tr(J) < Tr(t) ? 1 : -1;
}
function h8(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, r = e.length, n = 0; r--; )
    n += e.charCodeAt(r);
  return n.toString(36);
}
function d8(t) {
  rc.length = 0;
  for (var e = t.getElementsByTagName("input"), r = e.length; r--; ) {
    var n = e[r];
    n.checked && rc.push(n);
  }
}
function fu(t) {
  return setTimeout(t, 0);
}
function ld(t) {
  return clearTimeout(t);
}
Fc && je(document, "touchmove", function(t) {
  (ge.active || Us) && t.cancelable && t.preventDefault();
});
ge.utils = {
  on: je,
  off: De,
  css: ye,
  find: dE,
  is: function(e, r) {
    return !!Hr(e, r, e, !1);
  },
  extend: K5,
  throttle: pE,
  closest: Hr,
  toggleClass: dr,
  clone: gE,
  index: Tr,
  nextTick: fu,
  cancelNextTick: ld,
  detectDirection: bE,
  getChild: ma
};
ge.get = function(t) {
  return t[yr];
};
ge.mount = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (ge.utils = Cn(Cn({}, ge.utils), n.utils)), Qo.mount(n);
  });
};
ge.create = function(t, e) {
  return new ge(t, e);
};
ge.version = H5;
var bt = [], qa, ud, cd = !1, Zf, Jf, nc, Ha;
function p8() {
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
    dragStarted: function(r) {
      var n = r.originalEvent;
      this.sortable.nativeDraggable ? je(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? je(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? je(document, "touchmove", this._handleFallbackAutoScroll) : je(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? De(document, "dragover", this._handleAutoScroll) : (De(document, "pointermove", this._handleFallbackAutoScroll), De(document, "touchmove", this._handleFallbackAutoScroll), De(document, "mousemove", this._handleFallbackAutoScroll)), dv(), hu(), X5();
    },
    nulling: function() {
      nc = ud = qa = cd = Ha = Zf = Jf = null, bt.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, s = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, o = document.elementFromPoint(s, a);
      if (nc = r, n || this.options.forceAutoScrollFallback || Jo || ni || ao) {
        Qf(r, this.options, o, n);
        var l = Oi(o, !0);
        cd && (!Ha || s !== Zf || a !== Jf) && (Ha && dv(), Ha = setInterval(function() {
          var u = Oi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, hu()), Qf(r, i.options, u, n);
        }, 10), Zf = s, Jf = a);
      } else {
        if (!this.options.bubbleScroll || Oi(o, !0) === On()) {
          hu();
          return;
        }
        Qf(r, this.options, Oi(o, !1), !1);
      }
    }
  }, Xn(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function hu() {
  bt.forEach(function(t) {
    clearInterval(t.pid);
  }), bt = [];
}
function dv() {
  clearInterval(Ha);
}
var Qf = pE(function(t, e, r, n) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = On(), u = !1, f;
    ud !== r && (ud = r, hu(), qa = e.scroll, f = e.scrollFn, qa === !0 && (qa = Oi(r, !0)));
    var c = 0, h = qa;
    do {
      var d = h, p = Et(d), m = p.top, g = p.bottom, v = p.left, y = p.right, _ = p.width, E = p.height, x = void 0, N = void 0, M = d.scrollWidth, L = d.scrollHeight, D = ye(d), C = d.scrollLeft, R = d.scrollTop;
      d === l ? (x = _ < M && (D.overflowX === "auto" || D.overflowX === "scroll" || D.overflowX === "visible"), N = E < L && (D.overflowY === "auto" || D.overflowY === "scroll" || D.overflowY === "visible")) : (x = _ < M && (D.overflowX === "auto" || D.overflowX === "scroll"), N = E < L && (D.overflowY === "auto" || D.overflowY === "scroll"));
      var k = x && (Math.abs(y - i) <= a && C + _ < M) - (Math.abs(v - i) <= a && !!C), Q = N && (Math.abs(g - s) <= a && R + E < L) - (Math.abs(m - s) <= a && !!R);
      if (!bt[c])
        for (var ve = 0; ve <= c; ve++)
          bt[ve] || (bt[ve] = {});
      (bt[c].vx != k || bt[c].vy != Q || bt[c].el !== d) && (bt[c].el = d, bt[c].vx = k, bt[c].vy = Q, clearInterval(bt[c].pid), (k != 0 || Q != 0) && (u = !0, bt[c].pid = setInterval(function() {
        n && this.layer === 0 && ge.active._onTouchMove(nc);
        var T = bt[this.layer].vy ? bt[this.layer].vy * o : 0, $ = bt[this.layer].vx ? bt[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ge.dragged.parentNode[yr], $, T, t, nc, bt[this.layer].el) !== "continue" || mE(bt[this.layer].el, $, T);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = Oi(h, !1)));
    cd = u;
  }
}, 30), wE = function(e) {
  var r = e.originalEvent, n = e.putSortable, i = e.dragEl, s = e.activeSortable, a = e.dispatchSortableEvent, o = e.hideGhostForTarget, l = e.unhideGhostForTarget;
  if (!!r) {
    var u = n || s;
    o();
    var f = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, c = document.elementFromPoint(f.clientX, f.clientY);
    l(), u && !u.el.contains(c) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function Np() {
}
Np.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var r = e.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(e) {
    var r = e.dragEl, n = e.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = ma(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: wE
};
Xn(Np, {
  pluginName: "revertOnSpill"
});
function Cp() {
}
Cp.prototype = {
  onSpill: function(e) {
    var r = e.dragEl, n = e.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: wE
};
Xn(Cp, {
  pluginName: "removeOnSpill"
});
ge.mount(new p8());
ge.mount(Cp, Np);
const OE = 0.5, m8 = !1, ic = ws(
  "slider",
  () => {
    const t = vt(), e = we(OE), r = we(m8), n = de(
      () => [...t.layers].reverse()[0]
    );
    function i(a) {
      let o = a;
      a < 0.1 ? o = 0.1 : a > 0.9 && (o = 0.9), e.value = o;
    }
    function s(a) {
      r.value = a != null ? a : !r.value;
    }
    return {
      sliderActive: r,
      sliderRatio: e,
      sliderTopLayer: n,
      setRatio: i,
      toggleSlider: s
    };
  },
  {}
);
function xE(t, e) {
  const { t: r } = Ze();
  function n() {
    e == null || e.emit("clickInfo", t);
  }
  return {
    t: r,
    onClickInfo: n
  };
}
const g8 = { class: "lux-layer-manager-item mt-2.5" }, y8 = ["title"], v8 = { class: "flex-1 text-left cursor-default" }, b8 = ["aria-label", "title"], _8 = /* @__PURE__ */ fe({
  __name: "layer-item-background",
  props: {
    showEditButton: { type: Boolean, required: !0 },
    layer: { type: Object, required: !0 }
  },
  emits: ["clickEdit", "clickInfo"],
  setup(t, { emit: e }) {
    const r = t, n = e, { t: i, onClickInfo: s } = xE(r.layer, { emit: n }), a = de(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o()
      })
    );
    function o() {
      return i(r.layer.name, { ns: "client" });
    }
    return (l, u) => (A(), G("div", g8, [
      P("button", {
        class: "fa fa-info w-3",
        title: a.value,
        onClick: u[0] || (u[0] = (...f) => O(s) && O(s)(...f))
      }, null, 8, y8),
      P("span", v8, oe(o()), 1),
      l.showEditButton ? (A(), G("button", {
        key: 0,
        class: "fa fa-pencil",
        "aria-label": O(i)("Open editor panel", { ns: "client" }),
        title: O(i)("Open editor panel", { ns: "client" }),
        onClick: u[1] || (u[1] = (f) => l.$emit("clickEdit"))
      }, null, 8, b8)) : F("v-if", !0)
    ]));
  }
}), E8 = /* @__PURE__ */ me(_8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-background.vue"]]), S8 = ["id"], w8 = ["aria-checked", "title"], O8 = ["id", "value", "aria-label"], x8 = ["aria-checked", "aria-label"], M8 = /* @__PURE__ */ fe({
  __name: "layer-item-sub",
  props: {
    layer: { type: Object, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    isLayerComparatorOpen: { type: Boolean, required: !0 },
    displayLayerComparatorOpen: { type: Boolean, required: !0 }
  },
  emits: ["changeOpacity", "clickToggleLayerComparator"],
  setup(t, { emit: e }) {
    var d, p, m, g;
    const r = t, n = e, { t: i } = Ze(), s = en(), a = de(
      () => i(s.getLayerCurrentLabel(r.layer), { ns: "client" })
    ), o = tt(
      ((p = (d = r.layer) == null ? void 0 : d.opacity) != null ? p : 1) * 100
    ), l = tt(
      ((g = (m = r.layer) == null ? void 0 : m.previousOpacity) != null ? g : o.value) * 100
    );
    function u() {
      o.value === 0 ? o.value = l.value : (l.value = o.value, o.value = 0), h();
    }
    function f(v) {
      v.target && (o.value = parseInt(v.target.value), h());
    }
    function c() {
      n("clickToggleLayerComparator", r.layer);
    }
    function h() {
      n("changeOpacity", r.layer, o.value);
    }
    return (v, y) => (A(), G("div", {
      class: Ae(["lux-layer-manager-item-content", v.isOpen ? "h-6" : "h-0"]),
      id: `layer-manager-item-content-${v.layer.id}`
    }, [
      P("button", {
        class: Ae(["w-5 fa-solid", o.value === 0 ? "fa-eye-slash" : "fa-eye"]),
        role: "switch",
        "aria-checked": o.value === 0,
        title: O(i)("Toggle layer opacity for {{layerName}}", {
          layerName: a.value
        }),
        onClick: u
      }, null, 10, w8),
      P("input", {
        id: `${v.layer.id}-steps-range`,
        type: "range",
        min: "0",
        max: "100",
        value: o.value,
        step: "25",
        onChange: f,
        class: "m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer",
        "aria-label": O(i)("Change opacity for {{ layerName }}", { layerName: a.value })
      }, null, 40, O8),
      v.displayLayerComparatorOpen ? (A(), G("button", {
        key: 0,
        role: "switch",
        class: Ae(["fa ml-auto text-sm cursor-pointer", v.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": v.isLayerComparatorOpen,
        "aria-label": O(i)("Toggle layer comparator for {{ layerName }}", {
          layerName: a.value
        }),
        onClick: c
      }, null, 10, x8)) : F("v-if", !0)
    ], 10, S8));
  }
}), T8 = /* @__PURE__ */ me(M8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), N8 = ["min", "max", "value"], C8 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = de(() => vf(r.minDateAllowed)), s = de(() => vf(r.maxDateAllowed));
    function a(o) {
      n("change", o.target.value);
    }
    return (o, l) => (A(), G("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: i.value,
      max: s.value,
      value: o.dateValue ? O(vf)(o.dateValue) : "",
      onChange: a
    }, null, 40, N8));
  }
}), fd = /* @__PURE__ */ me(C8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), P8 = { class: "lux-time-slider w-full" }, L8 = ["for"], A8 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const { t: e } = Ze(), r = t, n = tt(
      r.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return A(), G("div", P8, [
        P("div", null, [
          P("label", {
            for: `${i.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(O(e)("Date:")), 9, L8),
          ie(fd, {
            id: `${i.layer.id}-time-slider-start`,
            "date-value": n.value,
            "min-date-allowed": (a = r.layer.time) == null ? void 0 : a.minValue,
            "max-date-allowed": (o = r.layer.time) == null ? void 0 : o.maxValue,
            onChange: s[0] || (s[0] = (l) => i.$emit("changeTime", l))
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), I8 = /* @__PURE__ */ me(A8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), k8 = { class: "lux-time-slider w-full" }, D8 = ["for"], R8 = ["for"], $8 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: r } = Ze(), n = t, i = e, s = tt(
      n.layer.currentTimeMinValue
    ), a = tt(
      n.layer.currentTimeMaxValue
    );
    function o(u) {
      i("changeTime", u, n.layer.currentTimeMaxValue);
    }
    function l(u) {
      i("changeTime", n.layer.currentTimeMinValue, u);
    }
    return (u, f) => {
      var c, h, d, p;
      return A(), G("div", k8, [
        F(" Date START datepicker input "),
        P("div", null, [
          P("label", {
            for: `${u.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(O(r)("From:")), 9, D8),
          ie(fd, {
            id: `${u.layer.id}-time-slider-start`,
            "date-value": s.value,
            "min-date-allowed": (c = n.layer.time) == null ? void 0 : c.minValue,
            "max-date-allowed": (h = n.layer.time) == null ? void 0 : h.maxValue,
            onChange: o
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ]),
        F(" Date END datepicker input "),
        P("div", null, [
          P("label", {
            for: `${u.layer.id}-time-slider-end`,
            class: "lux-time-slider-label"
          }, oe(O(r)("To:")), 9, R8),
          ie(fd, {
            id: `${u.layer.id}-time-slider-end`,
            "date-value": a.value,
            "min-date-allowed": (d = n.layer.time) == null ? void 0 : d.minValue,
            "max-date-allowed": (p = n.layer.time) == null ? void 0 : p.maxValue,
            onChange: l
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), F8 = /* @__PURE__ */ me($8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), V8 = ["onKeydown", "aria-label", "title"], j8 = /* @__PURE__ */ fe({
  __name: "slider-range-thumb",
  props: {
    ariaLabel: { type: String, required: !1 },
    maxLimit: { type: Number, required: !1, default: 100 },
    minLimit: { type: Number, required: !1, default: 0 },
    selectedValue: { type: Number, required: !0 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = we(!1), s = we(), a = we(), o = de(() => {
      var _;
      return ((_ = s.value) == null ? void 0 : _.offsetWidth) || 0;
    }), l = de(() => {
      var _;
      return ((_ = a.value) == null ? void 0 : _.offsetWidth) || 40;
    }), u = we(r.selectedValue), f = de(() => o.value * u.value / 100 - l.value / 2), c = de(() => ({ left: `${f.value}px` }));
    Fi(() => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", v);
    }), et(
      () => r.selectedValue,
      (_) => {
        u.value = _;
      }
    );
    function h(_) {
      u.value = Math.max(Math.min(_, 100), 0), n("change", u.value, i.value);
    }
    function d() {
      h(u.value - 1);
    }
    function p() {
      h(u.value + 1);
    }
    function m() {
      i.value = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", v);
    }
    function g(_) {
      !i.value || h(y(_));
    }
    function v(_) {
      i.value = !1, h(y(_)), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", v);
    }
    function y(_) {
      var x, N;
      const E = (x = s.value) != null && x.offsetWidth ? (_.clientX - l.value * 2) * 100 / ((N = s.value) == null ? void 0 : N.offsetWidth) : 0;
      return Math.round(Math.max(Math.min(E, r.maxLimit), r.minLimit));
    }
    return (_, E) => (A(), G("div", {
      class: "w-full",
      role: "slider",
      ref_key: "elRefTrack",
      ref: s
    }, [
      P("button", {
        class: Ae(["lux-slidebar-thumb", i.value ? "dragging" : ""]),
        ref_key: "elRefThumb",
        ref: a,
        style: $i(c.value),
        onKeydown: [
          pn(dn(p, ["stop"]), ["space"]),
          pn(dn(p, ["stop"]), ["right"]),
          pn(dn(d, ["stop"]), ["left"]),
          pn(dn(d, ["stop"]), ["delete"])
        ],
        onMousedown: m,
        onMousemove: g,
        onMouseup: v,
        "aria-label": _.ariaLabel,
        title: _.ariaLabel
      }, null, 46, V8)
    ], 512));
  }
}), pv = /* @__PURE__ */ me(j8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/slider-range/slider-range-thumb.vue"]]), G8 = /* @__PURE__ */ fe({
  __name: "slider-range-active-track",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = we(), s = we(), a = de(
      () => i.value ? Math.round(
        i.value.offsetWidth * r.selectedMinValue / 100
      ) : 0
    ), o = de(() => {
      var c, h;
      let f = 0;
      return r.selectedMaxValue !== void 0 && ((c = i.value) == null ? void 0 : c.offsetWidth) && (f = ((h = i.value) == null ? void 0 : h.offsetWidth) * r.selectedMaxValue / 100 - a.value), Math.round(f);
    }), l = de(() => ({
      left: `${a.value}px`,
      width: `${o.value}px`
    }));
    function u(f) {
      if (i.value) {
        const c = i.value.getBoundingClientRect().x, h = (f.clientX - c) * 100 / i.value.offsetWidth;
        n("change", h);
      }
    }
    return (f, c) => (A(), G("div", {
      ref_key: "elRefFullTrack",
      ref: i,
      class: "lux-slidebar-track"
    }, [
      f.selectedMaxValue !== void 0 ? (A(), G("div", {
        key: 0,
        ref_key: "elRefSelectionTrack",
        ref: s,
        class: "lux-slidebar-track-selection",
        style: $i(l.value),
        onClick: u
      }, null, 4)) : F("v-if", !0),
      P("div", {
        class: "lux-slidebar-track-full",
        onClick: u
      })
    ], 512));
  }
}), U8 = /* @__PURE__ */ me(G8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/slider-range/slider-range-active-track.vue"]]), B8 = { class: "lux-slidebar-fake" }, W8 = /* @__PURE__ */ fe({
  __name: "slider-range",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 },
    ariaLabelMin: { type: String, required: !1 },
    ariaLabelMax: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = we(r.selectedMinValue), s = we(r.selectedMaxValue);
    function a(u, f) {
      n("change", u, r.selectedMaxValue, f);
    }
    function o(u, f) {
      n("change", r.selectedMinValue, u, f);
    }
    function l(u) {
      s.value === void 0 ? i.value = u : u >= s.value ? s.value = u : u <= r.selectedMinValue ? i.value = u : Math.abs(s.value - u) < Math.abs(i.value - u) ? s.value = u : i.value = u, n("change", i.value, s.value, !1);
    }
    return (u, f) => (A(), G("div", B8, [
      F(" Draggable Max thumb button "),
      s.value !== void 0 ? (A(), Ue(pv, {
        key: 0,
        ariaLabel: u.ariaLabelMax,
        minLimit: u.selectedMinValue,
        selectedValue: s.value,
        onChange: o
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : F("v-if", !0),
      F(" Draggable Min thumb button "),
      F(" put Min value after Max value, this is just for z-index grabbing "),
      ie(pv, {
        ariaLabel: u.ariaLabelMin,
        maxLimit: u.selectedMaxValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      F(" Selection highlight "),
      ie(U8, {
        selectedMinValue: u.selectedMinValue,
        selectedMaxValue: u.selectedMaxValue,
        onChange: l
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), mv = /* @__PURE__ */ me(W8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/slider-range/slider-range.vue"]]), q8 = { class: "lux-time-slider w-full" }, H8 = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, z8 = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, Y8 = { class: "lux-time-displayed-dates" }, K8 = {
  key: 0,
  class: "lux-time-start-date grow"
}, X8 = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, Z8 = /* @__PURE__ */ fe({
  __name: "layer-time-slider",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: r } = Ze(), n = t, i = e, s = de(g), a = de(
      () => {
        var E, x;
        return (E = n.layer.time) != null && E.minValue ? new Date((x = n.layer.time) == null ? void 0 : x.minValue).getTime() : 0;
      }
    ), o = de(
      () => {
        var E, x;
        return (E = n.layer.time) != null && E.maxValue ? new Date((x = n.layer.time) == null ? void 0 : x.maxValue).getTime() : 0;
      }
    ), l = de(() => o.value - a.value), u = we(n.layer.currentTimeMaxValue), f = we(n.layer.currentTimeMinValue), c = de(
      () => f.value ? new Date(f.value).getTime() : void 0
    ), h = de(
      () => u.value ? new Date(u.value).getTime() : void 0
    ), d = de(
      () => m(c.value)
    ), p = de(
      () => m(h.value)
    );
    function m(E) {
      return E ? (E - a.value) / l.value * 100 : 0;
    }
    function g() {
      var R, k;
      const E = n.layer.time, x = [];
      if (!E)
        return;
      if (E.values)
        return E.values.map((Q) => new Date(Q).getTime());
      const N = new Date(E.minValue), M = new Date((R = E.maxValue) != null ? R : Date.now()), L = 1024, D = new Date(N.getTime()), C = (k = E.interval) != null ? k : t1;
      if (D.setFullYear(
        N.getFullYear() + L * C[0]
      ), D.setMonth(
        N.getMonth() + L * C[1],
        N.getDate() + L * C[2]
      ), D.setSeconds(N.getSeconds() + L * C[3]), D > M)
        for (let Q = 0; ; Q++) {
          const ve = new Date(N.getTime());
          if (ve.setFullYear(N.getFullYear() + Q * C[0]), ve.setMonth(
            N.getMonth() + Q * C[1],
            N.getDate() + Q * C[2]
          ), ve.setSeconds(N.getSeconds() + Q * C[3]), ve <= M)
            x.push(ve.getTime());
          else
            break;
        }
      return x;
    }
    function v(E) {
      var M;
      const x = E / 100 * (o.value - a.value) + a.value, N = NI(x, {
        minValue: a.value,
        maxValue: o.value,
        timeValueList: s.value,
        timeInterval: (M = n.layer.time) == null ? void 0 : M.interval
      });
      return Hh(N);
    }
    function y(E, x) {
      const N = v(E);
      if (f.value = N, x) {
        const M = v(x);
        u.value = M;
      }
    }
    function _(E, x, N) {
      y(E, x), N || i("changeTime", f.value, u.value);
    }
    return (E, x) => {
      var N, M, L, D, C, R, k;
      return A(), G("div", q8, [
        F(" Slider LayerTimeMode.VALUE "),
        ((N = E.layer.time) == null ? void 0 : N.mode) === O(Un).VALUE ? (A(), G("div", H8, [
          ie(mv, {
            ariaLabelMin: `${O(r)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: d.value,
            onChange: _
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : F("v-if", !0),
        F(" Slider LayerTimeMode.RANGE "),
        ((M = E.layer.time) == null ? void 0 : M.mode) === O(Un).RANGE ? (A(), G("div", z8, [
          ie(mv, {
            ariaLabelMin: `${O(r)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${O(r)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: d.value,
            selectedMaxValue: p.value,
            onChange: _
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : F("v-if", !0),
        F(" Display localized time values "),
        P("div", Y8, [
          F(" Display localized time values Min value "),
          ((L = E.layer.time) == null ? void 0 : L.mode) === O(Un).RANGE || ((D = E.layer.time) == null ? void 0 : D.mode) === O(Un).VALUE ? (A(), G("div", K8, [
            P("span", null, oe(f.value ? O(fy)(f.value, (C = E.layer.time) == null ? void 0 : C.resolution) : "-"), 1)
          ])) : F("v-if", !0),
          F(" Display localized time values Max value "),
          ((R = E.layer.time) == null ? void 0 : R.mode) === O(Un).RANGE ? (A(), G("div", X8, [
            P("span", null, oe(u.value ? O(fy)(u.value, (k = E.layer.time) == null ? void 0 : k.resolution) : "-"), 1)
          ])) : F("v-if", !0)
        ])
      ]);
    };
  }
}), J8 = /* @__PURE__ */ me(Z8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), Q8 = /* @__PURE__ */ fe({
  __name: "layer-time",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const r = e;
    function n(i, s) {
      r("changeTime", i, s);
    }
    return (i, s) => {
      var a, o, l, u, f;
      return A(), G(Ge, null, [
        F(" Layer time: slider widget "),
        ((a = i.layer.time) == null ? void 0 : a.widget) === O(ru).SLIDER ? (A(), Ue(J8, {
          key: 0,
          layer: i.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(" Layer time: datepicker VALUE (one date) widget "),
        ((o = i.layer.time) == null ? void 0 : o.widget) === O(ru).DATEPICKER && ((l = i.layer.time) == null ? void 0 : l.mode) === O(Un).VALUE ? (A(), Ue(I8, {
          key: 1,
          layer: i.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((u = i.layer.time) == null ? void 0 : u.widget) === O(ru).DATEPICKER && ((f = i.layer.time) == null ? void 0 : f.mode) === O(Un).RANGE ? (A(), Ue(F8, {
          key: 2,
          layer: i.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : F("v-if", !0)
      ], 64);
    };
  }
}), eV = /* @__PURE__ */ me(Q8, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time.vue"]]), tV = { class: "lux-layer-manager-item relative" }, rV = { class: "w-full flex flex-nowrap items-start gap-x-2" }, nV = ["title"], iV = ["aria-label", "title"], sV = ["aria-expanded", "aria-controls", "data-cy"], aV = { class: "grow" }, oV = ["title", "aria-label"], lV = /* @__PURE__ */ fe({
  __name: "layer-item",
  props: {
    is3d: { type: Boolean, required: !0 },
    layer: { type: Object, required: !0 },
    dragHandleClassName: { type: String, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    isLayerComparatorOpen: { type: Boolean, required: !0 },
    displayLayerComparatorOpen: { type: Boolean, required: !0 }
  },
  emits: ["clickInfo", "clickToggle", "clickToggleLayerComparator", "clickRemove", "changeOpacity", "changeTime"],
  setup(t, { emit: e }) {
    const r = t, n = e, { t: i, onClickInfo: s } = xE(r.layer, { emit: n }), a = en(), o = de(
      () => i(a.getLayerCurrentLabel(r.layer), { ns: "client" })
    ), l = de(
      () => i('Sort "{{layerName}}" in the list', {
        ns: "client",
        layerName: o.value
      })
    ), u = de(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o.value
      })
    ), f = de(
      () => i('Remove layer "{{layerName}}"', {
        ns: "client",
        layerName: o.value
      })
    );
    function c(h, d) {
      n("changeTime", h, d);
    }
    return (h, d) => (A(), G("div", tV, [
      P("div", rV, [
        P("button", {
          class: Ae(["fa-solid fa-bars cursor-move mt-1", h.dragHandleClassName]),
          title: l.value
        }, null, 10, nV),
        P("button", {
          class: "fa-solid fa-info mt-1",
          "aria-label": u.value,
          title: u.value,
          onClick: d[0] || (d[0] = (...p) => O(s) && O(s)(...p))
        }, null, 8, iV),
        P("button", {
          "aria-expanded": h.isOpen,
          "aria-controls": `layer-manager-item-content-${h.layer.id}`,
          "data-cy": `myLayerItemLabel-${h.layer.id}`,
          class: Ae([h.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: d[1] || (d[1] = (p) => h.$emit("clickToggle", h.layer))
        }, [
          P("span", aV, oe(o.value), 1),
          h.is3d ? F("v-if", !0) : (A(), G("span", {
            key: 0,
            class: Ae(["w-3.5 fa-solid", h.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, sV),
        P("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: f.value,
          "aria-label": f.value,
          onClick: d[2] || (d[2] = (p) => h.$emit("clickRemove", h.layer))
        }, null, 8, oV)
      ]),
      F(" Layer item sub content (opacity and toggle comparator) "),
      h.is3d ? F("v-if", !0) : (A(), Ue(T8, {
        key: 0,
        layer: h.layer,
        isOpen: h.isOpen,
        isLayerComparatorOpen: h.isLayerComparatorOpen,
        displayLayerComparatorOpen: h.displayLayerComparatorOpen,
        onClickToggleLayerComparator: d[3] || (d[3] = (p) => h.$emit("clickToggleLayerComparator", p)),
        onChangeOpacity: d[4] || (d[4] = (p, m) => h.$emit("changeOpacity", p, m))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      F(" Layer time: slider OR datepicker widgets "),
      h.layer.time ? (A(), Ue(eV, {
        key: 1,
        layer: h.layer,
        onChangeTime: c
      }, null, 8, ["layer"])) : F("v-if", !0)
    ]));
  }
}), gv = /* @__PURE__ */ me(lV, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item.vue"]]), uV = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, cV = ["id"], fV = { class: "sortable-layers" }, hV = ["id"], dV = { class: "flex flex-row justify-center space-x-1 my-2" }, eh = "drag-handle", pV = /* @__PURE__ */ fe({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: r } = Ze(), { setMetadataId: n } = _p(), i = vt(), s = wt(), a = Ea(), o = ic(), { bgLayer: l } = He(i), { sliderActive: u } = He(o), f = de(() => [...i.layers].reverse()), c = de(() => [...i.layers3d].reverse()), h = tt(), d = de(
      () => a.isLayerStyleEditable(l.value)
    ), p = e, { setRemoteLayersOpen: m } = wt();
    Er(() => {
      const L = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${eh}`,
        forceFallback: RI
      }, D = document.querySelector(".sortable-layers"), C = document.querySelector(".sortable-layers-3d");
      D && ge.create(D, {
        ...L,
        onSort: g
      }), C && ge.create(C, {
        ...L,
        onSort: v
      });
    });
    function g(L, D) {
      const C = [...L.to.children].map((R) => Number(R.id)).reverse();
      i.reorderLayers(C, D);
    }
    function v(L) {
      g(L, !0);
    }
    function y(L, D) {
      i.setLayerOpacity(L.id, D / 100);
    }
    function _(L, D, C) {
      i.setLayerTime(L.id, D, C);
    }
    function E(L) {
      i.removeLayers(L.id);
    }
    function x(L) {
      h.value = h.value !== L.id ? L.id : void 0;
    }
    function N() {
      s.openStyleEditorPanel();
    }
    function M() {
      o.toggleSlider();
    }
    return (L, D) => (A(), G("div", null, [
      c.value.length > 0 ? (A(), G("ul", uV, [
        (A(!0), G(Ge, null, kr(c.value, (C, R) => (A(), G("li", {
          key: C.id,
          id: C.id
        }, [
          ie(gv, {
            is3d: !0,
            dragHandleClassName: eh,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: O(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: x,
            onClickToggleLayerComparator: M,
            onClickInfo: (k) => O(n)(C.id),
            onChangeOpacity: y,
            onChangeTime: (k, Q) => _(C, k, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, cV))), 128))
      ])) : F("v-if", !0),
      P("ul", fV, [
        (A(!0), G(Ge, null, kr(f.value, (C, R) => (A(), G("li", {
          key: C.id,
          id: C.id
        }, [
          ie(gv, {
            is3d: !1,
            dragHandleClassName: eh,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: O(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: x,
            onClickToggleLayerComparator: M,
            onClickInfo: (k) => O(n)(C.id),
            onChangeOpacity: y,
            onChangeTime: (k, Q) => _(C, k, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, hV))), 128))
      ]),
      ie(E8, {
        layer: O(l) || O(Xu),
        showEditButton: d.value,
        onClickInfo: D[0] || (D[0] = () => O(l) && O(n)(O(l).id)),
        onClickEdit: N
      }, null, 8, ["layer", "showEditButton"]),
      P("div", dV, [
        P("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: D[1] || (D[1] = (C) => p("displayCatalog"))
        }, oe(O(r)("+ Add layers", { ns: "client" })), 1),
        P("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: D[2] || (D[2] = (C) => O(m)(!0))
        }, oe(O(r)("+ Add external Wms", { ns: "client" })), 1)
      ])
    ]));
  }
}), mV = /* @__PURE__ */ me(pV, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-manager.vue"]]), gV = { class: "flex flex-col h-full pt-1.5" }, yV = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, vV = ["aria-label"], bV = { class: "flex flex-row gap-2 h-10 text-2xl" }, _V = ["aria-expanded"], EV = { key: 0 }, SV = ["aria-expanded"], wV = { class: "relative grow p-2.5 bg-primary overflow-auto" }, OV = /* @__PURE__ */ fe({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Ze(), r = wt(), { setLayersOpen: n } = r, { myLayersTabOpen: i } = He(r), { layers: s } = He(vt());
    function a() {
      r.setMyLayersTabOpen(!0);
    }
    function o() {
      r.setMyLayersTabOpen(!1);
    }
    return (l, u) => (A(), G("div", gV, [
      F(" Panel title and close button "),
      P("div", yV, [
        P("h1", null, oe(O(e)("layers", { ns: "client" })), 1),
        P("span", null, [
          P("button", {
            onClick: u[0] || (u[0] = () => O(n)(!1)),
            "aria-label": O(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, vV)
        ])
      ]),
      F(" My Layers and Catalog tab labels "),
      P("div", bV, [
        P("button", {
          onClick: a,
          class: Ae(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", O(i) ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": O(i)
        }, [
          Su(oe(O(e)("my_layers", { ns: "client" })) + " ", 1),
          O(s).length ? (A(), G("span", EV, "(" + oe(O(s).length) + ")", 1)) : F("v-if", !0)
        ], 10, _V),
        P("button", {
          onClick: o,
          class: Ae(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", O(i) ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !O(i)
        }, oe(O(e)("Catalog", { ns: "client" })), 11, SV)
      ]),
      F(" Panel content (MyLayers and Catalog) "),
      P("div", wV, [
        O(i) ? (A(), Ue(mV, {
          key: 0,
          onDisplayCatalog: o
        })) : F("v-if", !0),
        O(i) ? F("v-if", !0) : (A(), Ue(U5, { key: 1 }))
      ])
    ]));
  }
}), xV = /* @__PURE__ */ me(OV, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-panel/layer-panel.vue"]]);
class MV {
  bootstrap() {
    let e;
    e = _r(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = ic();
    et(
      [() => e.sliderActive, () => e.sliderRatio],
      ([r, n], [i]) => {
        r !== i && Ne.setValue(Yh, r), Ne.setValue(
          Kh,
          n
        );
      }
    );
  }
  restore() {
    const e = Ne.getValue(Yh, ep), r = Ne.getValue(Kh, aa), { toggleSlider: n, setRatio: i } = ic();
    typeof e < "u" && e !== null && (n(e), typeof r !== void 0 && r !== null && i(r != null ? r : OE));
  }
}
const TV = new MV(), NV = ["onKeydown"], CV = /* @__PURE__ */ P("span", { class: "lux-slider-line" }, null, -1), PV = /* @__PURE__ */ P("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ P("span"),
  /* @__PURE__ */ P("span")
], -1), LV = {
  key: 0,
  class: "lux-slider-layer-label"
}, AV = /* @__PURE__ */ P("i", { class: "fa fa-arrow-left mr-2" }, null, -1), yv = 30, IV = /* @__PURE__ */ fe({
  __name: "splitter-element",
  props: {
    sliderActive: { type: Boolean, required: !0 },
    sliderRatio: { type: Number, required: !0 },
    sliderTopLayer: { type: Object, required: !0 },
    sliderOffset: { type: Number, required: !0 },
    containerOffset: { type: Number, required: !0 }
  },
  emits: ["moveSplitBar", "escSplitBar"],
  setup(t, { expose: e, emit: r }) {
    const n = t, i = r, { t: s } = Ze(), a = we(null), o = de(() => ({ left: `${n.sliderOffset}px` }));
    let l = !1;
    e({
      sliderElement: a
    });
    function u(g) {
      i("moveSplitBar", g + a.value.offsetWidth / 2);
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
      const g = n.containerOffset + a.value.offsetLeft;
      u(g + yv);
    }
    function p() {
      const g = n.containerOffset + a.value.offsetLeft;
      u(g - yv);
    }
    function m() {
      i("escSplitBar");
    }
    return Er(() => {
      var g;
      (g = a.value) == null || g.focus({ focusVisible: !0 });
    }), Fi(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (g, v) => (A(), G("button", {
      ref_key: "sliderElement",
      ref: a,
      onMousedown: f,
      onMousemove: c,
      onMouseup: h,
      onKeydown: [
        pn(dn(d, ["stop"]), ["space"]),
        pn(dn(d, ["stop"]), ["right"]),
        pn(dn(p, ["stop"]), ["left"]),
        pn(dn(p, ["stop"]), ["delete"]),
        pn(dn(m, ["stop"]), ["esc"])
      ],
      class: "left-[20px] absolute h-full w-[32px] block",
      style: $i(o.value),
      role: "seperator",
      "aria-controls": "map-container"
    }, [
      CV,
      PV,
      g.sliderTopLayer ? (A(), G("span", LV, [
        AV,
        P("span", null, oe(O(s)(g.sliderTopLayer.name)), 1)
      ])) : F("v-if", !0)
    ], 44, NV));
  }
}), kV = /* @__PURE__ */ me(IV, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/slider/splitter-element.vue"]]), DV = /* @__PURE__ */ fe({
  __name: "slider-comparator",
  setup(t) {
    const e = ic(), r = Y1(), n = qn().olMap, i = we(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = He(e), l = de(
      () => {
        var y, _;
        return ((_ = (y = i.value) == null ? void 0 : y.sliderElement) == null ? void 0 : _.offsetWidth) || 0;
      }
    ), u = function() {
      var _, E, x;
      let y = (x = (E = (_ = n.value) == null ? void 0 : _.getViewport()) == null ? void 0 : E.parentElement) == null ? void 0 : x.offsetLeft;
      return (y === void 0 || y === 0) && (y = d == null ? void 0 : d.offsetLeft), y !== void 0 ? y : 0;
    }, f = de(() => {
      var y, _;
      return n.value && i.value ? a.value * n.value.getSize()[0] - ((_ = (y = i.value) == null ? void 0 : y.sliderElement) == null ? void 0 : _.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    TV.bootstrap(), et([o, s], ([y, _], [E]) => {
      var x;
      y && _ ? (y !== E && m(), p()) : m(), (x = n.value) == null || x.render();
    }), et(f, () => {
      var y;
      (y = n.value) == null || y.render();
    });
    function p() {
      const y = r.getLayerFromCache(o.value);
      !y || (c = y.on(
        qp.PRERENDER,
        function(_) {
          var R;
          const E = _.context, x = (R = n.value) == null ? void 0 : R.getSize(), N = f.value + l.value / 2, M = rl(_, [0, 0]), L = rl(_, [N, 0]), D = rl(_, [0, x[1]]), C = rl(_, [N, x[0]]);
          E.save(), E.beginPath(), E.moveTo(M[0], M[1]), E.lineTo(D[0], D[1]), E.lineTo(C[0], C[1]), E.lineTo(L[0], L[1]), E.closePath(), E.clip();
        }
      ), h = y.on(
        qp.POSTRENDER,
        function(_) {
          _.context.restore();
        }
      ));
    }
    function m() {
      mS([c, h]);
    }
    function g(y) {
      var x;
      const _ = (x = n.value) == null ? void 0 : x.getSize(), E = (y - u()) / _[0];
      e.setRatio(E);
    }
    function v() {
      e.toggleSlider();
    }
    return Er(() => {
      var y, _;
      d = (_ = (y = n.value) == null ? void 0 : y.getTargetElement()) == null ? void 0 : _.closest(".map-wrapper");
    }), Fi(() => {
      m();
    }), (y, _) => O(o) && O(s) ? (A(), Ue(kV, {
      key: 0,
      ref_key: "splitterElement",
      ref: i,
      sliderActive: O(s),
      sliderRatio: O(a),
      sliderTopLayer: O(o),
      sliderOffset: f.value,
      containerOffset: u(),
      onMoveSplitBar: g,
      onEscSplitBar: v
    }, null, 8, ["sliderActive", "sliderRatio", "sliderTopLayer", "sliderOffset", "containerOffset"])) : F("v-if", !0);
  }
}), RV = /* @__PURE__ */ me(DV, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/slider/slider-comparator.vue"]]), Fl = "-", th = ",", vv = "--";
class $V {
  constructor() {
    st(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, th));
  }
  layerTimesToStrings(e) {
    return e ? e.split(vv) : [];
  }
  layerIdsToLayers(e) {
    const r = ps(), n = en();
    return (e ? e.split(Fl) : []).map((s) => {
      const a = xo.isRemoteLayer(s) ? j4(s) : r.findById(parseInt(s, 10));
      return a ? n.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const r = ps(), n = en();
    return (e ? e.split(th) : []).map((s) => {
      const a = r.findByName(s);
      return a ? n.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, r = Fl) {
    return kI(e, r);
  }
  layersVisibilitiesToBooleansV2(e) {
    return DI(e, th);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((r) => r.id).join(Fl)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((r) => {
      var n;
      return (n = r.opacity) != null ? n : 1;
    }).join(Fl)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((r) => {
      var n;
      return (n = en().getLayerCurrentTime(r)) != null ? n : "";
    }).join(vv)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const r = ps();
    return e ? r.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || Xu.name;
  }
}
const gr = new $V(), FV = "basemap_2015_global", VV = "orthogr_2013_global", jV = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class GV {
  bootstrap() {
    const e = Zt();
    let r;
    r = _r(() => {
      e.bgLayers.length > 0 && (this.restore(), this.persist(), r && r());
    });
  }
  persist() {
    const e = vt(), { bgLayer: r } = He(e);
    et(
      r,
      (n, i) => {
        i !== n && Ne.setValue(
          my,
          n,
          gr.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = K1(), r = this.getBgLayerFromStorage();
    e(r);
  }
  getBgLayerFromStorage() {
    const e = Ne.getInitialVersion(), r = Ne.getValue(my);
    return r ? e === 2 ? this.getBgLayerFromStorageV2(r) : gr.bgLayerNameToBgLayer(r) : gr.bgLayerNameToBgLayer(FV);
  }
  getBgLayerFromStorageV2(e) {
    const r = Ne.getValue(
      i1,
      aa
    );
    let n = "";
    return e ? n = jV[e] : r === 0 && (n = VV), gr.bgLayerNameToBgLayer(n);
  }
}
const UV = new GV();
class BV {
  bootstrap() {
    const e = Zt();
    let r;
    r = _r(() => {
      e.themes && (this.restore(), this.persist(), r && r());
    });
  }
  persist() {
    const e = vt(), { layers: r } = He(e);
    et(
      r,
      (n, i) => {
        i !== n && (Ne.setValue(
          py,
          n,
          gr.layersToLayerIds
        ), Ne.setValue(
          gy,
          n,
          gr.layersToLayerOpacities
        ), Ne.setValue(
          yy,
          n,
          gr.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getInitialVersion(), r = vt(), n = Ne.getValue(
      py,
      e === 2 ? gr.layerNamesToLayersV2 : gr.layerIdsToLayers
    );
    this.restoreLayersOpacities(n, e), this.restoreLayersTimes(n), e === 2 && (Ne.removeItem(i1), Ne.removeItem(VI), Ne.removeItem(Ey), Ne.removeItem(Sy)), r.addLayers(...(n == null ? void 0 : n.filter((i) => i)) || []);
  }
  restoreLayersOpacities(e, r) {
    const n = r === 2 ? this.getOpacitiesFromStorageV2() : this.getOpacitiesFromStorage();
    n.length && (e == null || e.forEach(
      (i, s) => {
        var a;
        return i && (i.opacity = (a = n[s]) != null ? a : 1);
      }
    ));
  }
  restoreLayersTimes(e) {
    const r = Ne.getValue(
      yy,
      gr.layerTimesToStrings
    );
    r.length && (e == null || e.forEach(
      (n, i) => n && r[i] && this.restoreLayerTime(n, r[i])
    ));
  }
  restoreLayerTime(e, r) {
    const n = r.split("/");
    e.currentTimeMinValue = n[0], e.currentTimeMaxValue = n[1];
  }
  getOpacitiesFromStorage() {
    return Ne.getValue(
      gy,
      gr.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Ne.getValue(
      Ey,
      gr.layersOpacitiesToNumbersV2
    ), r = Ne.getValue(
      Sy,
      gr.layersVisibilitiesToBooleansV2
    );
    return e.map((n, i) => r[i] ? n : 0);
  }
}
const WV = new BV();
class qV {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const HV = new qV();
class zV {
  bootstrap() {
    this.restore();
    let e;
    e = _r(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = Zt();
    et(
      () => e.theme,
      (r, n) => {
        n !== r && r && Ne.setValue(
          wo,
          r,
          HV.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(wo);
    if (e) {
      const { setTheme: r } = Zt();
      r(e);
    }
  }
}
const YV = new zV();
class KV {
  bootstrapLayersOpen() {
    this.restoreLayersOpen();
    let e;
    e = _r(() => {
      this.persistLayersOpen(), e && e();
    });
  }
  persistLayersOpen() {
    const e = wt(), { layersOpen: r } = He(e);
    et(
      r,
      (n, i) => {
        i !== n && Ne.setValue(Gu, n);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Ne.getValue(Gu) !== "false", { setLayersOpen: r } = wt();
    r(e);
  }
}
const XV = new KV();
class ZV {
  bootstrap() {
    this.restore();
    let e;
    e = _r(() => {
      this.persist(), e && e();
    });
  }
  persist() {
  }
  restore() {
    const e = Ne.getValue($I);
    wt().setMapId(e);
  }
}
const JV = new ZV(), QV = /* @__PURE__ */ fe({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (A(!0), G(Ge, null, kr(e.colors, (i, s) => (A(), G("span", {
      key: `${r.styleName}-${s}`,
      class: "grow m-px",
      style: $i(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), ej = /* @__PURE__ */ me(QV, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/simple-style-item.vue"]]), tj = { class: "text-white border-2 p-[10px] m-[10px]" }, rj = { class: "text-center mb-3" }, nj = ["title"], ij = { class: "text-white" }, sj = ["title", "onClick"], aj = { class: "flex" }, oj = /* @__PURE__ */ fe({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Ze(), r = Sn(), n = Ea(), { bgStyle: i } = He(r), s = Jr().simple_styles.road, a = we(s);
    et(
      i,
      (l) => a.value = n.checkSelection(
        l || [],
        s
      ),
      { immediate: !0 }
    );
    function o(l) {
      r.setSimpleStyle(l);
    }
    return (l, u) => (A(), G("div", tj, [
      F(" TODO: create clean container for simple and advanced style editors "),
      P("h5", rj, oe(O(e)("Select a style", { ns: "client" })), 1),
      (A(!0), G(Ge, null, kr(a.value, (f) => (A(), G("div", {
        key: f.unlocalized_label,
        title: O(e)(f.unlocalized_label, { ns: "client" }),
        class: Ae(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        P("span", ij, oe(O(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        P("button", {
          title: O(e)("Select style: {{styleName}}", {
            styleName: O(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          P("span", aj, [
            ie(ej, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, sj)
      ], 10, nj))), 128))
    ]));
  }
}), lj = /* @__PURE__ */ me(oj, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/simple-style-selector.vue"]]);
function uj(t) {
  const e = cj(t);
  return !e || !e.medium_style_class ? [] : Jr().medium_default_styles[e.medium_style_class];
}
function cj(t) {
  return Jr().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const fj = { class: "flex w-full items-center" }, hj = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, dj = { class: "grow" }, pj = ["value"], mj = ["checked", "aria-label"], gj = /* @__PURE__ */ fe({
  __name: "medium-style-item",
  props: {
    style: { type: Object, required: !0 },
    colorEditable: { type: Boolean, required: !0 }
  },
  emits: ["changeStyle"],
  setup(t, { emit: e }) {
    const { t: r } = Ze(), n = t, i = e;
    function s(o) {
      if (o.target) {
        const l = {
          ...n.style,
          color: o.target.value
        };
        i("changeStyle", l);
      }
    }
    function a(o) {
      if (o) {
        const l = {
          ...n.style,
          visible: o.target.checked
        };
        i("changeStyle", l);
      }
    }
    return (o, l) => (A(), G("div", fj, [
      P("label", hj, oe(O(r)(o.style.label)), 1),
      P("div", dj, [
        o.colorEditable && n.style.color ? (A(), G("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: n.style.color,
          onInput: s
        }, null, 40, pj)) : F("v-if", !0)
      ]),
      P("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: n.style.visible,
        onChange: a,
        "aria-label": O(r)("Show or hide {{ thematicName }}", {
          thematicName: n.style.label
        })
      }, null, 40, mj)
    ]));
  }
}), yj = /* @__PURE__ */ me(gj, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/medium-style-item.vue"]]), vj = { class: "text-white border-2 p-[10px] m-[10px]" }, bj = { class: "text-center mb-3" }, _j = /* @__PURE__ */ fe({
  __name: "medium-style-selector",
  props: {
    layer: { type: Object, required: !0 }
  },
  setup(t) {
    const e = ["basemap_2015_global"], r = Sn(), { bgStyle: n } = He(r), { t: i } = Ze(), s = t, a = de(
      () => e.includes(s.layer.name)
    ), o = de(
      () => n.value || uj(s.layer)
    );
    function l(u, f) {
      n.value = o.value.map(
        (c, h) => h === u ? f : c
      ), r.disableExpertStyle();
    }
    return (u, f) => (A(), G("div", vj, [
      P("h5", bj, oe(a.value ? O(i)("Select a colour for every theme") : O(i)("Activate categories")), 1),
      (A(!0), G(Ge, null, kr(o.value, (c, h) => (A(), Ue(yj, {
        key: c.label,
        style: $i(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: a.value
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), Ej = /* @__PURE__ */ me(_j, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/medium-style-selector.vue"]]);
var ME = { exports: {} };
(function(t, e) {
  (function(r, n) {
    n();
  })(ur, function() {
    function r(u, f) {
      return typeof f > "u" ? f = { autoBom: !1 } : typeof f != "object" && (console.warn("Deprecated: Expected third argument to be a object"), f = { autoBom: !f }), f.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type) ? new Blob(["\uFEFF", u], { type: u.type }) : u;
    }
    function n(u, f, c) {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof ur == "object" && ur.global === ur ? ur : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !o ? function(u, f, c) {
      var h = a.URL || a.webkitURL, d = document.createElement("a");
      f = f || u.name || "download", d.download = f, d.rel = "noopener", typeof u == "string" ? (d.href = u, d.origin === location.origin ? s(d) : i(d.href) ? n(u, f, c) : s(d, d.target = "_blank")) : (d.href = h.createObjectURL(u), setTimeout(function() {
        h.revokeObjectURL(d.href);
      }, 4e4), setTimeout(function() {
        s(d);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(u, f, c) {
      if (f = f || u.name || "download", typeof u != "string")
        navigator.msSaveOrOpenBlob(r(u, c), f);
      else if (i(u))
        n(u, f, c);
      else {
        var h = document.createElement("a");
        h.href = u, h.target = "_blank", setTimeout(function() {
          s(h);
        });
      }
    } : function(u, f, c, h) {
      if (h = h || open("", "_blank"), h && (h.document.title = h.document.body.innerText = "downloading..."), typeof u == "string")
        return n(u, f, c);
      var d = u.type === "application/octet-stream", p = /constructor/i.test(a.HTMLElement) || a.safari, m = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((m || d && p || o) && typeof FileReader < "u") {
        var g = new FileReader();
        g.onloadend = function() {
          var _ = g.result;
          _ = m ? _ : _.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = _ : location = _, h = null;
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
})(ME);
const Sj = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, wj = { class: "text-center mb-3" }, Oj = { class: "flex flex-row justify-center" }, xj = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, Mj = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, Tj = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, Nj = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, Cj = ["href"], Pj = /* @__PURE__ */ fe({
  __name: "expert-style-selector",
  setup(t) {
    const e = vt(), r = Sn(), n = Ea(), { appliedStyle: i } = He(r), { t: s } = Ze();
    function a() {
      const u = i.value, f = JSON.stringify(u), c = new Blob([f], { type: "text/plain;charset=utf-8" }), h = "styles.json";
      ME.exports.saveAs(c, h);
    }
    function o(u) {
      const f = u.target.files;
      if ((f == null ? void 0 : f.length) !== 1)
        return;
      const c = f[0];
      new File([], "./text.txt").text().then((d) => console.log(d)), c.type === "application/json" && (c.text().then((d) => {
        r.enableExpertStyle(), i.value = JSON.parse(d);
      }), u.target.value = "");
    }
    function l() {
      return r.styleSerial === null ? n.getDefaultMapBoxStyleUrl(
        n.getVectorId(e.bgLayer)
      ) : `${r.registerUrls.get("get")}?id=${r.styleSerial}`;
    }
    return (u, f) => (A(), G("div", Sj, [
      P("h5", wj, oe(O(s)("Lancer \xE9diteur externe ou importer json")), 1),
      P("div", Oj, [
        P("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          P("span", xj, oe(O(s)("Download style")), 1)
        ]),
        P("div", Mj, [
          P("label", Tj, [
            P("span", Nj, oe(O(s)("Upload style")), 1)
          ]),
          P("input", {
            class: "invisible",
            type: "file",
            name: "uploadMvtStyle",
            id: "uploadMvtStyle",
            onChange: o
          }, null, 32)
        ])
      ]),
      P("a", {
        href: `https://maputnik.github.io/editor/?style=${l()}`,
        target: "_blank",
        class: "lux-btn text-center"
      }, oe(O(s)("Open Maputnik editor")), 9, Cj)
    ]));
  }
}), Lj = /* @__PURE__ */ me(Pj, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/expert-style-selector.vue"]]), Aj = { key: 0 }, Ij = {
  key: 0,
  class: "mb-px"
}, kj = {
  key: 1,
  class: "mb-px"
}, Dj = {
  key: 2,
  class: "mb-px"
}, Rj = /* @__PURE__ */ fe({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Ze(), r = vt(), n = wt(), i = Sn(), { bgStyle: s, isExpertStyleActive: a } = He(i), { bgLayer: o } = He(r), l = Ea(), u = de(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    et(o, (h) => {
      l.isLayerStyleEditable(h) || n.closeStyleEditorPanel();
    });
    let f = we(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => u.value.isEditable ? (A(), G("div", Aj, [
      u.value.hasSimpleStyle ? (A(), G("div", Ij, [
        ie(ou, {
          title: O(e)("Simple"),
          expanded: O(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => Ye(f) ? f.value = O(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = O(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: Ti(() => [
            ie(lj)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasAdvancedStyle ? (A(), G("div", kj, [
        ie(ou, {
          title: O(e)("Medium"),
          expanded: O(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => Ye(f) ? f.value = O(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = O(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: Ti(() => [
            O(o) ? (A(), Ue(Ej, {
              key: 0,
              layer: O(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasExpertStyle ? (A(), G("div", Dj, [
        ie(ou, {
          title: O(e)("Expert (style.json)"),
          expanded: O(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => Ye(f) ? f.value = O(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = O(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: Ti(() => [
            O(o) ? (A(), Ue(Lj, {
              key: 0,
              layer: O(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      O(s) || O(a) ? (A(), G("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, oe(O(e)("Reset style", { ns: "client" })), 1)) : F("v-if", !0)
    ])) : F("v-if", !0);
  }
}), $j = /* @__PURE__ */ me(Rj, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/style-selector.vue"]]);
function hd(t) {
  return hd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hd(t);
}
function TE() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : hd(XMLHttpRequest)) === "object";
}
function Fj(t) {
  return !!t && typeof t.then == "function";
}
function Vj(t) {
  return Fj(t) ? t : Promise.resolve(t);
}
function jj(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var sc = { exports: {} }, Vl = { exports: {} }, bv;
function Gj() {
  return bv || (bv = 1, function(t, e) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof ur < "u" && ur, n = function() {
      function s() {
        this.fetch = !1, this.DOMException = r.DOMException;
      }
      return s.prototype = r, new s();
    }();
    (function(s) {
      (function(a) {
        var o = typeof s < "u" && s || typeof self < "u" && self || typeof o < "u" && o, l = {
          searchParams: "URLSearchParams" in o,
          iterable: "Symbol" in o && "iterator" in Symbol,
          blob: "FileReader" in o && "Blob" in o && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in o,
          arrayBuffer: "ArrayBuffer" in o
        };
        function u(T) {
          return T && DataView.prototype.isPrototypeOf(T);
        }
        if (l.arrayBuffer)
          var f = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], c = ArrayBuffer.isView || function(T) {
            return T && f.indexOf(Object.prototype.toString.call(T)) > -1;
          };
        function h(T) {
          if (typeof T != "string" && (T = String(T)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(T) || T === "")
            throw new TypeError('Invalid character in header field name: "' + T + '"');
          return T.toLowerCase();
        }
        function d(T) {
          return typeof T != "string" && (T = String(T)), T;
        }
        function p(T) {
          var $ = {
            next: function() {
              var z = T.shift();
              return { done: z === void 0, value: z };
            }
          };
          return l.iterable && ($[Symbol.iterator] = function() {
            return $;
          }), $;
        }
        function m(T) {
          this.map = {}, T instanceof m ? T.forEach(function($, z) {
            this.append(z, $);
          }, this) : Array.isArray(T) ? T.forEach(function($) {
            this.append($[0], $[1]);
          }, this) : T && Object.getOwnPropertyNames(T).forEach(function($) {
            this.append($, T[$]);
          }, this);
        }
        m.prototype.append = function(T, $) {
          T = h(T), $ = d($);
          var z = this.map[T];
          this.map[T] = z ? z + ", " + $ : $;
        }, m.prototype.delete = function(T) {
          delete this.map[h(T)];
        }, m.prototype.get = function(T) {
          return T = h(T), this.has(T) ? this.map[T] : null;
        }, m.prototype.has = function(T) {
          return this.map.hasOwnProperty(h(T));
        }, m.prototype.set = function(T, $) {
          this.map[h(T)] = d($);
        }, m.prototype.forEach = function(T, $) {
          for (var z in this.map)
            this.map.hasOwnProperty(z) && T.call($, this.map[z], z, this);
        }, m.prototype.keys = function() {
          var T = [];
          return this.forEach(function($, z) {
            T.push(z);
          }), p(T);
        }, m.prototype.values = function() {
          var T = [];
          return this.forEach(function($) {
            T.push($);
          }), p(T);
        }, m.prototype.entries = function() {
          var T = [];
          return this.forEach(function($, z) {
            T.push([z, $]);
          }), p(T);
        }, l.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries);
        function g(T) {
          if (T.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          T.bodyUsed = !0;
        }
        function v(T) {
          return new Promise(function($, z) {
            T.onload = function() {
              $(T.result);
            }, T.onerror = function() {
              z(T.error);
            };
          });
        }
        function y(T) {
          var $ = new FileReader(), z = v($);
          return $.readAsArrayBuffer(T), z;
        }
        function _(T) {
          var $ = new FileReader(), z = v($);
          return $.readAsText(T), z;
        }
        function E(T) {
          for (var $ = new Uint8Array(T), z = new Array($.length), X = 0; X < $.length; X++)
            z[X] = String.fromCharCode($[X]);
          return z.join("");
        }
        function x(T) {
          if (T.slice)
            return T.slice(0);
          var $ = new Uint8Array(T.byteLength);
          return $.set(new Uint8Array(T)), $.buffer;
        }
        function N() {
          return this.bodyUsed = !1, this._initBody = function(T) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = T, T ? typeof T == "string" ? this._bodyText = T : l.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : l.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : l.arrayBuffer && l.blob && u(T) ? (this._bodyArrayBuffer = x(T.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || c(T)) ? this._bodyArrayBuffer = x(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "", this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, l.blob && (this.blob = function() {
            var T = g(this);
            if (T)
              return T;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var T = g(this);
              return T || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else
              return this.blob().then(y);
          }), this.text = function() {
            var T = g(this);
            if (T)
              return T;
            if (this._bodyBlob)
              return _(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(E(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, l.formData && (this.formData = function() {
            return this.text().then(C);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var M = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function L(T) {
          var $ = T.toUpperCase();
          return M.indexOf($) > -1 ? $ : T;
        }
        function D(T, $) {
          if (!(this instanceof D))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ = $ || {};
          var z = $.body;
          if (T instanceof D) {
            if (T.bodyUsed)
              throw new TypeError("Already read");
            this.url = T.url, this.credentials = T.credentials, $.headers || (this.headers = new m(T.headers)), this.method = T.method, this.mode = T.mode, this.signal = T.signal, !z && T._bodyInit != null && (z = T._bodyInit, T.bodyUsed = !0);
          } else
            this.url = String(T);
          if (this.credentials = $.credentials || this.credentials || "same-origin", ($.headers || !this.headers) && (this.headers = new m($.headers)), this.method = L($.method || this.method || "GET"), this.mode = $.mode || this.mode || null, this.signal = $.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && z)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(z), (this.method === "GET" || this.method === "HEAD") && ($.cache === "no-store" || $.cache === "no-cache")) {
            var X = /([?&])_=[^&]*/;
            if (X.test(this.url))
              this.url = this.url.replace(X, "$1_=" + new Date().getTime());
            else {
              var Ce = /\?/;
              this.url += (Ce.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
        D.prototype.clone = function() {
          return new D(this, { body: this._bodyInit });
        };
        function C(T) {
          var $ = new FormData();
          return T.trim().split("&").forEach(function(z) {
            if (z) {
              var X = z.split("="), Ce = X.shift().replace(/\+/g, " "), Le = X.join("=").replace(/\+/g, " ");
              $.append(decodeURIComponent(Ce), decodeURIComponent(Le));
            }
          }), $;
        }
        function R(T) {
          var $ = new m(), z = T.replace(/\r?\n[\t ]+/g, " ");
          return z.split("\r").map(function(X) {
            return X.indexOf(`
`) === 0 ? X.substr(1, X.length) : X;
          }).forEach(function(X) {
            var Ce = X.split(":"), Le = Ce.shift().trim();
            if (Le) {
              var dt = Ce.join(":").trim();
              $.append(Le, dt);
            }
          }), $;
        }
        N.call(D.prototype);
        function k(T, $) {
          if (!(this instanceof k))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ || ($ = {}), this.type = "default", this.status = $.status === void 0 ? 200 : $.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = $.statusText === void 0 ? "" : "" + $.statusText, this.headers = new m($.headers), this.url = $.url || "", this._initBody(T);
        }
        N.call(k.prototype), k.prototype.clone = function() {
          return new k(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, k.error = function() {
          var T = new k(null, { status: 0, statusText: "" });
          return T.type = "error", T;
        };
        var Q = [301, 302, 303, 307, 308];
        k.redirect = function(T, $) {
          if (Q.indexOf($) === -1)
            throw new RangeError("Invalid status code");
          return new k(null, { status: $, headers: { location: T } });
        }, a.DOMException = o.DOMException;
        try {
          new a.DOMException();
        } catch {
          a.DOMException = function($, z) {
            this.message = $, this.name = z;
            var X = Error($);
            this.stack = X.stack;
          }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException;
        }
        function ve(T, $) {
          return new Promise(function(z, X) {
            var Ce = new D(T, $);
            if (Ce.signal && Ce.signal.aborted)
              return X(new a.DOMException("Aborted", "AbortError"));
            var Le = new XMLHttpRequest();
            function dt() {
              Le.abort();
            }
            Le.onload = function() {
              var Te = {
                status: Le.status,
                statusText: Le.statusText,
                headers: R(Le.getAllResponseHeaders() || "")
              };
              Te.url = "responseURL" in Le ? Le.responseURL : Te.headers.get("X-Request-URL");
              var Ct = "response" in Le ? Le.response : Le.responseText;
              setTimeout(function() {
                z(new k(Ct, Te));
              }, 0);
            }, Le.onerror = function() {
              setTimeout(function() {
                X(new TypeError("Network request failed"));
              }, 0);
            }, Le.ontimeout = function() {
              setTimeout(function() {
                X(new TypeError("Network request failed"));
              }, 0);
            }, Le.onabort = function() {
              setTimeout(function() {
                X(new a.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function Rt(Te) {
              try {
                return Te === "" && o.location.href ? o.location.href : Te;
              } catch {
                return Te;
              }
            }
            Le.open(Ce.method, Rt(Ce.url), !0), Ce.credentials === "include" ? Le.withCredentials = !0 : Ce.credentials === "omit" && (Le.withCredentials = !1), "responseType" in Le && (l.blob ? Le.responseType = "blob" : l.arrayBuffer && Ce.headers.get("Content-Type") && Ce.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (Le.responseType = "arraybuffer")), $ && typeof $.headers == "object" && !($.headers instanceof m) ? Object.getOwnPropertyNames($.headers).forEach(function(Te) {
              Le.setRequestHeader(Te, d($.headers[Te]));
            }) : Ce.headers.forEach(function(Te, Ct) {
              Le.setRequestHeader(Ct, Te);
            }), Ce.signal && (Ce.signal.addEventListener("abort", dt), Le.onreadystatechange = function() {
              Le.readyState === 4 && Ce.signal.removeEventListener("abort", dt);
            }), Le.send(typeof Ce._bodyInit > "u" ? null : Ce._bodyInit);
          });
        }
        return ve.polyfill = !0, o.fetch || (o.fetch = ve, o.Headers = m, o.Request = D, o.Response = k), a.Headers = m, a.Request = D, a.Response = k, a.fetch = ve, a;
      })({});
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = r.fetch ? r : n;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(Vl, Vl.exports)), Vl.exports;
}
(function(t, e) {
  var r;
  if (typeof fetch == "function" && (typeof ur < "u" && ur.fetch ? r = ur.fetch : typeof window < "u" && window.fetch ? r = window.fetch : r = fetch), typeof jj < "u" && typeof window > "u") {
    var n = r || Gj();
    n.default && (n = n.default), e.default = n, t.exports = e.default;
  }
})(sc, sc.exports);
const NE = sc.exports, _v = /* @__PURE__ */ yS({
  __proto__: null,
  default: NE
}, [sc.exports]);
function Ev(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ev(Object(r), !0).forEach(function(n) {
      Uj(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Uj(t, e, r) {
  return e = Bj(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Bj(t) {
  var e = Wj(t, "string");
  return Es(e) == "symbol" ? e : String(e);
}
function Wj(t, e) {
  if (Es(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Es(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Es(t) {
  return Es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Es(t);
}
var zn;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? zn = global.fetch : typeof window < "u" && window.fetch ? zn = window.fetch : zn = fetch);
var Mo;
TE() && (typeof global < "u" && global.XMLHttpRequest ? Mo = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Mo = window.XMLHttpRequest));
var ac;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? ac = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (ac = window.ActiveXObject));
!zn && _v && !Mo && !ac && (zn = NE || _v);
typeof zn != "function" && (zn = void 0);
var dd = function(e, r) {
  if (r && Es(r) === "object") {
    var n = "";
    for (var i in r)
      n += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(r[i]);
    if (!n)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + n.slice(1);
  }
  return e;
}, wv = function(e, r, n, i) {
  var s = function(l) {
    if (!l.ok)
      return n(l.statusText || "Error", {
        status: l.status
      });
    l.text().then(function(u) {
      n(null, {
        status: l.status,
        data: u
      });
    }).catch(n);
  };
  if (i) {
    var a = i(e, r);
    if (a instanceof Promise) {
      a.then(s).catch(n);
      return;
    }
  }
  typeof fetch == "function" ? fetch(e, r).then(s).catch(n) : zn(e, r).then(s).catch(n);
}, Ov = !1, qj = function(e, r, n, i) {
  e.queryStringParams && (r = dd(r, e.queryStringParams));
  var s = Sv({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), n && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(n) : e.requestOptions, o = Sv({
    method: n ? "POST" : "GET",
    body: n ? e.stringify(n) : void 0,
    headers: s
  }, Ov ? {} : a), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    wv(r, o, i, l);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(f) {
        delete o[f];
      }), wv(r, o, i, l), Ov = !0;
    } catch (f) {
      i(f);
    }
  }
}, Hj = function(e, r, n, i) {
  n && Es(n) === "object" && (n = dd("", n).slice(1)), e.queryStringParams && (r = dd(r, e.queryStringParams));
  try {
    var s;
    Mo ? s = new Mo() : s = new ac("MSXML2.XMLHTTP.3.0"), s.open(n ? "POST" : "GET", r, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, n && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
    var a = e.customHeaders;
    if (a = typeof a == "function" ? a() : a, a)
      for (var o in a)
        s.setRequestHeader(o, a[o]);
    s.onreadystatechange = function() {
      s.readyState > 3 && i(s.status >= 400 ? s.statusText : null, {
        status: s.status,
        data: s.responseText
      });
    }, s.send(n);
  } catch (l) {
    console && console.log(l);
  }
}, zj = function(e, r, n, i) {
  if (typeof n == "function" && (i = n, n = void 0), i = i || function() {
  }, zn && r.indexOf("file:") !== 0)
    return qj(e, r, n, i);
  if (TE() || typeof ActiveXObject == "function")
    return Hj(e, r, n, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function To(t) {
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, To(t);
}
function xv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xv(Object(r), !0).forEach(function(n) {
      CE(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : xv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Yj(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mv(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, PE(n.key), n);
  }
}
function Kj(t, e, r) {
  return e && Mv(t.prototype, e), r && Mv(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function CE(t, e, r) {
  return e = PE(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function PE(t) {
  var e = Xj(t, "string");
  return To(e) == "symbol" ? e : String(e);
}
function Xj(t, e) {
  if (To(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (To(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Zj = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(r) {
      return JSON.parse(r);
    },
    stringify: JSON.stringify,
    parsePayload: function(r, n, i) {
      return CE({}, n, i || "");
    },
    parseLoadPayload: function(r, n) {
    },
    request: zj,
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
}, LE = function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Yj(this, t), this.services = e, this.options = r, this.allOptions = n, this.type = "backend", this.init(e, r, n);
  }
  return Kj(t, [{
    key: "init",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = r, this.options = rh(rh(rh({}, Zj()), this.options || {}), i), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
        return n.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(r, n, i) {
      this._readAny(r, r, n, n, i);
    }
  }, {
    key: "read",
    value: function(r, n, i) {
      this._readAny([r], r, [n], n, i);
    }
  }, {
    key: "_readAny",
    value: function(r, n, i, s, a) {
      var o = this, l = this.options.loadPath;
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(r, i)), l = Vj(l), l.then(function(u) {
        if (!u)
          return a(null, {});
        var f = o.services.interpolator.interpolate(u, {
          lng: r.join("+"),
          ns: i.join("+")
        });
        o.loadUrl(f, a, n, s);
      });
    }
  }, {
    key: "loadUrl",
    value: function(r, n, i, s) {
      var a = this, o = typeof i == "string" ? [i] : i, l = typeof s == "string" ? [s] : s, u = this.options.parseLoadPayload(o, l);
      this.options.request(this.options, r, u, function(f, c) {
        if (c && (c.status >= 500 && c.status < 600 || !c.status))
          return n("failed loading " + r + "; status code: " + c.status, !0);
        if (c && c.status >= 400 && c.status < 500)
          return n("failed loading " + r + "; status code: " + c.status, !1);
        if (!c && f && f.message && f.message.indexOf("Failed to fetch") > -1)
          return n("failed loading " + r + ": " + f.message, !0);
        if (f)
          return n(f, !1);
        var h, d;
        try {
          typeof c.data == "string" ? h = a.options.parse(c.data, i, s) : h = c.data;
        } catch {
          d = "failed parsing " + r + " to json";
        }
        if (d)
          return n(d, !1);
        n(null, h);
      });
    }
  }, {
    key: "create",
    value: function(r, n, i, s, a) {
      var o = this;
      if (!!this.options.addPath) {
        typeof r == "string" && (r = [r]);
        var l = this.options.parsePayload(n, i, s), u = 0, f = [], c = [];
        r.forEach(function(h) {
          var d = o.options.addPath;
          typeof o.options.addPath == "function" && (d = o.options.addPath(h, n));
          var p = o.services.interpolator.interpolate(d, {
            lng: h,
            ns: n
          });
          o.options.request(o.options, p, l, function(m, g) {
            u += 1, f.push(m), c.push(g), u === r.length && typeof a == "function" && a(f, c);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var r = this, n = this.services, i = n.backendConnector, s = n.languageUtils, a = n.logger, o = i.language;
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
          r.allOptions.ns.forEach(function(c) {
            i.read(f, c, "read", null, null, function(h, d) {
              h && a.warn("loading namespace ".concat(c, " for language ").concat(f, " failed"), h), !h && d && a.log("loaded namespace ".concat(c, " for language ").concat(f), d), i.loaded("".concat(f, "|").concat(c), h, d);
            });
          });
        });
      }
    }
  }]), t;
}();
LE.type = "backend";
var Jj = Dc, AE = Array.isArray || function(e) {
  return Jj(e) === "Array";
}, Qj = TypeError, e7 = 9007199254740991, t7 = function(t) {
  if (t > e7)
    throw Qj("Maximum allowed index exceeded");
  return t;
}, r7 = ri, n7 = Yo, i7 = ap, s7 = function(t, e, r) {
  r7 ? n7.f(t, e, i7(0, r)) : t[e] = r;
}, a7 = hr, o7 = fr, IE = $r, l7 = vp, u7 = rp, c7 = L1, kE = function() {
}, DE = u7("Reflect", "construct"), Pp = /^\s*(?:class|function)\b/, f7 = a7(Pp.exec), h7 = !Pp.test(kE), Da = function(e) {
  if (!IE(e))
    return !1;
  try {
    return DE(kE, [], e), !0;
  } catch {
    return !1;
  }
}, RE = function(e) {
  if (!IE(e))
    return !1;
  switch (l7(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return h7 || !!f7(Pp, c7(e));
  } catch {
    return !0;
  }
};
RE.sham = !0;
var d7 = !DE || o7(function() {
  var t;
  return Da(Da.call) || !Da(Object) || !Da(function() {
    t = !0;
  }) || t;
}) ? RE : Da, Tv = AE, p7 = d7, m7 = xs, g7 = Sa, y7 = g7("species"), Nv = Array, v7 = function(t) {
  var e;
  return Tv(t) && (e = t.constructor, p7(e) && (e === Nv || Tv(e.prototype)) ? e = void 0 : m7(e) && (e = e[y7], e === null && (e = void 0))), e === void 0 ? Nv : e;
}, b7 = v7, $E = function(t, e) {
  return new (b7(t))(e === 0 ? 0 : e);
}, _7 = fr, E7 = Sa, S7 = np, w7 = E7("species"), O7 = function(t) {
  return S7 >= 51 || !_7(function() {
    var e = [], r = e.constructor = {};
    return r[w7] = function() {
      return { foo: 1 };
    }, e[t](Boolean).foo !== 1;
  });
}, x7 = gp, M7 = fr, T7 = AE, N7 = xs, C7 = Ic, P7 = pp, Cv = t7, Pv = s7, L7 = $E, A7 = O7, I7 = Sa, k7 = np, FE = I7("isConcatSpreadable"), D7 = k7 >= 51 || !M7(function() {
  var t = [];
  return t[FE] = !1, t.concat()[0] !== t;
}), R7 = function(t) {
  if (!N7(t))
    return !1;
  var e = t[FE];
  return e !== void 0 ? !!e : T7(t);
}, $7 = !D7 || !A7("concat");
x7({ target: "Array", proto: !0, arity: 1, forced: $7 }, {
  concat: function(e) {
    var r = C7(this), n = L7(r, 0), i = 0, s, a, o, l, u;
    for (s = -1, o = arguments.length; s < o; s++)
      if (u = s === -1 ? r : arguments[s], R7(u))
        for (l = P7(u), Cv(i + l), a = 0; a < l; a++, i++)
          a in u && Pv(n, i, u[a]);
      else
        Cv(i + 1), Pv(n, i++, u);
    return n.length = i, n;
  }
});
var F7 = Dc, V7 = hr, j7 = function(t) {
  if (F7(t) === "Function")
    return V7(t);
}, Lv = j7, G7 = S1, U7 = tp, B7 = Lv(Lv.bind), W7 = function(t, e) {
  return G7(t), e === void 0 ? t : U7 ? B7(t, e) : function() {
    return t.apply(e, arguments);
  };
}, q7 = W7, H7 = hr, z7 = hp, Y7 = Ic, K7 = pp, X7 = $E, Av = H7([].push), fi = function(t) {
  var e = t === 1, r = t === 2, n = t === 3, i = t === 4, s = t === 6, a = t === 7, o = t === 5 || s;
  return function(l, u, f, c) {
    for (var h = Y7(l), d = z7(h), p = K7(d), m = q7(u, f), g = 0, v = c || X7, y = e ? v(l, p) : r || a ? v(l, 0) : void 0, _, E; p > g; g++)
      if ((o || g in d) && (_ = d[g], E = m(_, g, h), t))
        if (e)
          y[g] = E;
        else if (E)
          switch (t) {
            case 3:
              return !0;
            case 5:
              return _;
            case 6:
              return g;
            case 2:
              Av(y, _);
          }
        else
          switch (t) {
            case 4:
              return !1;
            case 7:
              Av(y, _);
          }
    return s ? -1 : n || i ? i : y;
  };
}, Z7 = {
  forEach: fi(0),
  map: fi(1),
  filter: fi(2),
  some: fi(3),
  every: fi(4),
  find: fi(5),
  findIndex: fi(6),
  filterReject: fi(7)
}, J7 = fr, Q7 = function(t, e) {
  var r = [][t];
  return !!r && J7(function() {
    r.call(null, e || function() {
      return 1;
    }, 1);
  });
}, eG = Z7.forEach, tG = Q7, rG = tG("forEach"), VE = rG ? [].forEach : function(e) {
  return eG(this, e, arguments.length > 1 ? arguments[1] : void 0);
}, nG = gp, Iv = VE;
nG({ target: "Array", proto: !0, forced: [].forEach !== Iv }, {
  forEach: Iv
});
var iG = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, sG = m1, nh = sG("span").classList, kv = nh && nh.constructor && nh.constructor.prototype, aG = kv === Object.prototype ? void 0 : kv, Dv = rn, Rv = iG, oG = aG, ih = VE, lG = op, jE = function(t) {
  if (t && t.forEach !== ih)
    try {
      lG(t, "forEach", ih);
    } catch {
      t.forEach = ih;
    }
};
for (var sh in Rv)
  Rv[sh] && jE(Dv[sh] && Dv[sh].prototype);
jE(oG);
function GE(t, e, r) {
  var n = r(t, e);
  n && t instanceof gS && t.getLayers().forEach(function(i) {
    GE(i, [].concat(bk(e), [t]), r);
  });
}
const uG = { class: "h-screen flex flex-col overflow-hidden" }, cG = { class: "flex grow" }, fG = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, hG = {
  key: 1,
  class: "w-80 bg-primary"
}, dG = { class: "map-wrapper grow bg-blue-100 relative" }, pG = { class: "absolute right-1 top-16" }, mG = /* @__PURE__ */ fe({
  __name: "App",
  setup(t) {
    const e = wt();
    JV.bootstrap(), WV.bootstrap(), YV.bootstrap(), XV.bootstrapLayersOpen(), o1.bootstrapStyle(), UV.bootstrap();
    const { layersOpen: r, styleEditorOpen: n } = He(e);
    et(
      r,
      () => setTimeout(() => {
        i();
      }, 50)
    ), Er(() => window.addEventListener("resize", i)), Fi(() => window.removeEventListener("resize", i));
    function i() {
      const s = qn().getOlMap();
      s.updateSize(), GE(s.getLayerGroup(), [], (a) => (a instanceof z1 && a.getMapLibreMap().resize(), !0));
    }
    return (s, a) => (A(), G("div", uG, [
      ie(h5),
      P("main", cG, [
        F(" Layer panel "),
        O(r) ? (A(), G("div", fG, [
          ie(xV)
        ])) : F("v-if", !0),
        F(" Style editor "),
        O(n) ? (A(), G("div", hG, [
          ie($j)
        ])) : F("v-if", !0),
        F(" Map container and slider comparator "),
        P("div", dG, [
          ie(o4, { v4_standalone: !0 }),
          ie(RV, { class: "absolute top-0" }),
          ie(oF),
          ie(ZF)
        ]),
        F(" Background selector "),
        P("div", pG, [
          ie(g4)
        ])
      ]),
      ie(S5, { class: "fixed bottom-5 sm:static z-20" }),
      ie(kP)
    ]));
  }
}), gG = /* @__PURE__ */ me(mG, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/App.vue"]]);
OP();
lt.use(LE);
lt.init({
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
const Lp = Cx(gG);
Lp.use($M());
Lp.use(xL, { i18next: lt });
Lp.use(hM);
const WG = (t = {}, e = null) => xP(
  {
    setup: () => {
      const r = Io();
      Object.assign(r.appContext, e._context), Object.assign(r.provides, e._context.provides);
    },
    render: () => lb(t)
  },
  { shadowRoot: !1 }
);
export {
  kP as AlertNotifications,
  gG as App,
  g4 as BackgroundSelector,
  Xb as DropdownList,
  S5 as FooterBar,
  h5 as HeaderBar,
  xL as I18NextVue,
  ZF as LayerMetadata,
  xV as LayerPanel,
  o4 as MapContainer,
  z1 as MapLibreLayer,
  oF as RemoteLayers,
  RV as SliderComparator,
  $j as StyleSelector,
  hM as VueDOMPurifyHTML,
  Lp as app,
  LE as backend,
  WG as createElementInstance,
  $M as createPinia,
  xP as defineCustomElement,
  lt as i18next,
  pa as proxyUrlHelper,
  UV as statePersistorBgLayerService,
  XV as statePersistorLayersOpenService,
  WV as statePersistorLayersService,
  JV as statePersistorMyMapService,
  o1 as statePersistorStyleService,
  YV as statePersistorThemeService,
  He as storeToRefs,
  i5 as themeSelectorService,
  wt as useAppStore,
  K1 as useBackgroundLayer,
  en as useLayers,
  qn as useMap,
  vt as useMapStore,
  Ea as useMvtStyles,
  Y1 as useOpenLayers,
  Sn as useStyleStore,
  Zt as useThemeStore,
  ps as useThemes,
  et as watch
};
