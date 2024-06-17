var ab = Object.defineProperty;
var ob = (t, e, n) => e in t ? ab(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ke = (t, e, n) => (ob(t, typeof e != "symbol" ? e + "" : e, n), n);
import { get as wl, transformExtent as lb, toLonLat as ub, getTransform as cb, transform as bd } from "ol/proj";
import { register as fb } from "ol/proj/proj4";
import hb from "ol/Map";
import db from "ol/View";
import pb from "ol/layer/Image";
import Pg from "ol/source/ImageWMS";
import Dg from "ol/layer/Tile";
import fh from "ol/source/WMTS";
import kg from "ol/tilegrid/WMTS";
import { getTopLeft as mb } from "ol/extent";
import gb from "ol/layer/Layer";
import { toDegrees as yb } from "ol/math";
import Ed from "mapbox-gl";
import vb from "ol/source/TileWMS";
import _b from "ol/tilegrid/TileGrid";
import * as Sd from "ol/events";
import bb from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as Ig, CLASS_CONTROL as Rg } from "ol/css";
import $g from "ol/control/Control";
import Eb from "ol/control/FullScreen";
import Sb from "ol/control/Zoom";
import wb from "ol/control/ZoomToExtent";
import xb from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as Bo } from "ol/render";
import { unByKey as Ob } from "ol/Observable";
import wd from "ol/render/EventType";
import Mb from "ol/layer/Group.js";
function Tb(t, e) {
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
/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Hr(t, e) {
  const n = new Set(t.split(","));
  return e ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const Je = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], vt = () => {
}, Nb = () => !1, vo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Yl = (t) => t.startsWith("onUpdate:"), et = Object.assign, hh = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Lb = Object.prototype.hasOwnProperty, De = (t, e) => Lb.call(t, e), le = Array.isArray, ts = (t) => Ru(t) === "[object Map]", Fg = (t) => Ru(t) === "[object Set]", ge = (t) => typeof t == "function", it = (t) => typeof t == "string", ys = (t) => typeof t == "symbol", Be = (t) => t !== null && typeof t == "object", dh = (t) => (Be(t) || ge(t)) && ge(t.then) && ge(t.catch), Vg = Object.prototype.toString, Ru = (t) => Vg.call(t), ph = (t) => Ru(t).slice(8, -1), Gg = (t) => Ru(t) === "[object Object]", mh = (t) => it(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ra = /* @__PURE__ */ Hr(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cb = /* @__PURE__ */ Hr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), $u = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Ab = /-(\w)/g, gn = $u((t) => t.replace(Ab, (e, n) => n ? n.toUpperCase() : "")), Pb = /\B([A-Z])/g, un = $u(
  (t) => t.replace(Pb, "-$1").toLowerCase()
), us = $u((t) => t.charAt(0).toUpperCase() + t.slice(1)), Yi = $u((t) => t ? `on${us(t)}` : ""), Oi = (t, e) => !Object.is(t, e), pa = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, jg = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Db = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, cf = (t) => {
  const e = it(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let xd;
const Fu = () => xd || (xd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ci(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = it(r) ? $b(r) : Ci(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (it(t) || Be(t))
    return t;
}
const kb = /;(?![^(]*\))/g, Ib = /:([^]+)/, Rb = /\/\*[^]*?\*\//g;
function $b(t) {
  const e = {};
  return t.replace(Rb, "").split(kb).forEach((n) => {
    if (n) {
      const r = n.split(Ib);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Pe(t) {
  let e = "";
  if (it(t))
    e = t;
  else if (le(t))
    for (let n = 0; n < t.length; n++) {
      const r = Pe(t[n]);
      r && (e += r + " ");
    }
  else if (Be(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Fb = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Vb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Gb = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", jb = /* @__PURE__ */ Hr(Fb), Ub = /* @__PURE__ */ Hr(Vb), Bb = /* @__PURE__ */ Hr(Gb), Wb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qb = /* @__PURE__ */ Hr(Wb);
function Ug(t) {
  return !!t || t === "";
}
const ae = (t) => it(t) ? t : t == null ? "" : le(t) || Be(t) && (t.toString === Vg || !ge(t.toString)) ? JSON.stringify(t, Bg, 2) : String(t), Bg = (t, e) => e && e.__v_isRef ? Bg(t, e.value) : ts(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[dc(r, s) + " =>"] = i, n),
    {}
  )
} : Fg(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => dc(n))
} : ys(e) ? dc(e) : Be(e) && !le(e) && !Gg(e) ? String(e) : e, dc = (t, e = "") => {
  var n;
  return ys(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vr(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let dn;
class Wg {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = dn, !e && dn && (this.index = (dn.scopes || (dn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = dn;
      try {
        return dn = this, e();
      } finally {
        dn = n;
      }
    } else
      process.env.NODE_ENV !== "production" && vr("cannot run an inactive effect scope.");
  }
  on() {
    dn = this;
  }
  off() {
    dn = this.parent;
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
function qg(t) {
  return new Wg(t);
}
function Hb(t, e = dn) {
  e && e.active && e.effects.push(t);
}
function Hg() {
  return dn;
}
function zb(t) {
  dn ? dn.cleanups.push(t) : process.env.NODE_ENV !== "production" && vr(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let ns;
class gh {
  constructor(e, n, r, i) {
    this.fn = e, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Hb(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, zr();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Yb(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Yr();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = vi, n = ns;
    try {
      return vi = !0, ns = this, this._runnings++, Od(this), this.fn();
    } finally {
      Md(this), this._runnings--, ns = n, vi = e;
    }
  }
  stop() {
    var e;
    this.active && (Od(this), Md(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Yb(t) {
  return t.value;
}
function Od(t) {
  t._trackId++, t._depsLength = 0;
}
function Md(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      zg(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function zg(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let vi = !0, ff = 0;
const Yg = [];
function zr() {
  Yg.push(vi), vi = !1;
}
function Yr() {
  const t = Yg.pop();
  vi = t === void 0 ? !0 : t;
}
function yh() {
  ff++;
}
function vh() {
  for (ff--; !ff && hf.length; )
    hf.shift()();
}
function Xg(t, e, n) {
  var r;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && zg(i, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((r = t.onTrack) == null || r.call(t, et({ effect: t }, n)));
  }
}
const hf = [];
function Kg(t, e, n) {
  var r;
  yh();
  for (const i of t.keys()) {
    let s;
    i._dirtyLevel < e && (s != null ? s : s = t.get(i) === i._trackId) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (s != null ? s : s = t.get(i) === i._trackId) && (process.env.NODE_ENV !== "production" && ((r = i.onTrigger) == null || r.call(i, et({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && hf.push(i.scheduler)));
  }
  vh();
}
const Zg = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Xl = /* @__PURE__ */ new WeakMap(), rs = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), df = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function It(t, e, n) {
  if (vi && ns) {
    let r = Xl.get(t);
    r || Xl.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Zg(() => r.delete(n))), Xg(
      ns,
      i,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: n
      } : void 0
    );
  }
}
function fr(t, e, n, r, i, s) {
  const a = Xl.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (n === "length" && le(t)) {
    const l = Number(r);
    a.forEach((u, f) => {
      (f === "length" || !ys(f) && f >= l) && o.push(u);
    });
  } else
    switch (n !== void 0 && o.push(a.get(n)), e) {
      case "add":
        le(t) ? mh(n) && o.push(a.get("length")) : (o.push(a.get(rs)), ts(t) && o.push(a.get(df)));
        break;
      case "delete":
        le(t) || (o.push(a.get(rs)), ts(t) && o.push(a.get(df)));
        break;
      case "set":
        ts(t) && o.push(a.get(rs));
        break;
    }
  yh();
  for (const l of o)
    l && Kg(
      l,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: n,
        newValue: r,
        oldValue: i,
        oldTarget: s
      } : void 0
    );
  vh();
}
function Xb(t, e) {
  var n;
  return (n = Xl.get(t)) == null ? void 0 : n.get(e);
}
const Kb = /* @__PURE__ */ Hr("__proto__,__v_isRef,__isVue"), Jg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ys)
), Td = /* @__PURE__ */ Zb();
function Zb() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = be(this);
      for (let s = 0, a = this.length; s < a; s++)
        It(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(be)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      zr(), yh();
      const r = be(this)[e].apply(this, n);
      return vh(), Yr(), r;
    };
  }), t;
}
function Jb(t) {
  ys(t) || (t = String(t));
  const e = be(this);
  return It(e, "has", t), e.hasOwnProperty(t);
}
class Qg {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, r) {
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? ay : sy : s ? iy : ry).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = le(e);
    if (!i) {
      if (a && De(Td, n))
        return Reflect.get(Td, n, r);
      if (n === "hasOwnProperty")
        return Jb;
    }
    const o = Reflect.get(e, n, r);
    return (ys(n) ? Jg.has(n) : Kb(n)) || (i || It(e, "get", n), s) ? o : Ye(o) ? a && mh(n) ? o : o.value : Be(o) ? i ? oy(o) : ju(o) : o;
  }
}
class ey extends Qg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._isShallow) {
      const l = cs(s);
      if (!is(r) && !cs(r) && (s = be(s), r = be(r)), !le(e) && Ye(s) && !Ye(r))
        return l ? !1 : (s.value = r, !0);
    }
    const a = le(e) && mh(n) ? Number(n) < e.length : De(e, n), o = Reflect.set(e, n, r, i);
    return e === be(i) && (a ? Oi(r, s) && fr(e, "set", n, r, s) : fr(e, "add", n, r)), o;
  }
  deleteProperty(e, n) {
    const r = De(e, n), i = e[n], s = Reflect.deleteProperty(e, n);
    return s && r && fr(e, "delete", n, void 0, i), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!ys(n) || !Jg.has(n)) && It(e, "has", n), r;
  }
  ownKeys(e) {
    return It(
      e,
      "iterate",
      le(e) ? "length" : rs
    ), Reflect.ownKeys(e);
  }
}
class ty extends Qg {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && vr(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && vr(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Qb = /* @__PURE__ */ new ey(), e1 = /* @__PURE__ */ new ty(), t1 = /* @__PURE__ */ new ey(
  !0
), n1 = /* @__PURE__ */ new ty(!0), _h = (t) => t, Vu = (t) => Reflect.getPrototypeOf(t);
function Wo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = be(t), s = be(e);
  n || (Oi(e, s) && It(i, "get", e), It(i, "get", s));
  const { has: a } = Vu(i), o = r ? _h : n ? bh : eo;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function qo(t, e = !1) {
  const n = this.__v_raw, r = be(n), i = be(t);
  return e || (Oi(t, i) && It(r, "has", t), It(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Ho(t, e = !1) {
  return t = t.__v_raw, !e && It(be(t), "iterate", rs), Reflect.get(t, "size", t);
}
function Nd(t) {
  t = be(t);
  const e = be(this);
  return Vu(e).has.call(e, t) || (e.add(t), fr(e, "add", t, t)), this;
}
function Ld(t, e) {
  e = be(e);
  const n = be(this), { has: r, get: i } = Vu(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && ny(n, r, t) : (t = be(t), s = r.call(n, t));
  const a = i.call(n, t);
  return n.set(t, e), s ? Oi(e, a) && fr(n, "set", t, e, a) : fr(n, "add", t, e), this;
}
function Cd(t) {
  const e = be(this), { has: n, get: r } = Vu(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && ny(e, n, t) : (t = be(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, a = e.delete(t);
  return i && fr(e, "delete", t, void 0, s), a;
}
function Ad() {
  const t = be(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? ts(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && fr(t, "clear", void 0, void 0, n), r;
}
function zo(t, e) {
  return function(r, i) {
    const s = this, a = s.__v_raw, o = be(a), l = e ? _h : t ? bh : eo;
    return !t && It(o, "iterate", rs), a.forEach((u, f) => r.call(i, l(u), l(f), s));
  };
}
function Yo(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = be(i), a = ts(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...r), f = n ? _h : e ? bh : eo;
    return !e && It(
      s,
      "iterate",
      l ? df : rs
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
function Jr(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      vr(
        `${us(t)} operation ${n}failed: target is readonly.`,
        be(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function r1() {
  const t = {
    get(s) {
      return Wo(this, s);
    },
    get size() {
      return Ho(this);
    },
    has: qo,
    add: Nd,
    set: Ld,
    delete: Cd,
    clear: Ad,
    forEach: zo(!1, !1)
  }, e = {
    get(s) {
      return Wo(this, s, !1, !0);
    },
    get size() {
      return Ho(this);
    },
    has: qo,
    add: Nd,
    set: Ld,
    delete: Cd,
    clear: Ad,
    forEach: zo(!1, !0)
  }, n = {
    get(s) {
      return Wo(this, s, !0);
    },
    get size() {
      return Ho(this, !0);
    },
    has(s) {
      return qo.call(this, s, !0);
    },
    add: Jr("add"),
    set: Jr("set"),
    delete: Jr("delete"),
    clear: Jr("clear"),
    forEach: zo(!0, !1)
  }, r = {
    get(s) {
      return Wo(this, s, !0, !0);
    },
    get size() {
      return Ho(this, !0);
    },
    has(s) {
      return qo.call(this, s, !0);
    },
    add: Jr("add"),
    set: Jr("set"),
    delete: Jr("delete"),
    clear: Jr("clear"),
    forEach: zo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = Yo(s, !1, !1), n[s] = Yo(s, !0, !1), e[s] = Yo(s, !1, !0), r[s] = Yo(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    r
  ];
}
const [
  i1,
  s1,
  a1,
  o1
] = /* @__PURE__ */ r1();
function Gu(t, e) {
  const n = e ? t ? o1 : a1 : t ? s1 : i1;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    De(n, i) && i in r ? n : r,
    i,
    s
  );
}
const l1 = {
  get: /* @__PURE__ */ Gu(!1, !1)
}, u1 = {
  get: /* @__PURE__ */ Gu(!1, !0)
}, c1 = {
  get: /* @__PURE__ */ Gu(!0, !1)
}, f1 = {
  get: /* @__PURE__ */ Gu(!0, !0)
};
function ny(t, e, n) {
  const r = be(n);
  if (r !== n && e.call(t, r)) {
    const i = ph(t);
    vr(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ry = /* @__PURE__ */ new WeakMap(), iy = /* @__PURE__ */ new WeakMap(), sy = /* @__PURE__ */ new WeakMap(), ay = /* @__PURE__ */ new WeakMap();
function h1(t) {
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
function d1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : h1(ph(t));
}
function ju(t) {
  return cs(t) ? t : Uu(
    t,
    !1,
    Qb,
    l1,
    ry
  );
}
function p1(t) {
  return Uu(
    t,
    !1,
    t1,
    u1,
    iy
  );
}
function oy(t) {
  return Uu(
    t,
    !0,
    e1,
    c1,
    sy
  );
}
function Rr(t) {
  return Uu(
    t,
    !0,
    n1,
    f1,
    ay
  );
}
function Uu(t, e, n, r, i) {
  if (!Be(t))
    return process.env.NODE_ENV !== "production" && vr(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = d1(t);
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? r : n
  );
  return i.set(t, o), o;
}
function hr(t) {
  return cs(t) ? hr(t.__v_raw) : !!(t && t.__v_isReactive);
}
function cs(t) {
  return !!(t && t.__v_isReadonly);
}
function is(t) {
  return !!(t && t.__v_isShallow);
}
function Kl(t) {
  return t ? !!t.__v_raw : !1;
}
function be(t) {
  const e = t && t.__v_raw;
  return e ? be(e) : t;
}
function mi(t) {
  return Object.isExtensible(t) && jg(t, "__v_skip", !0), t;
}
const eo = (t) => Be(t) ? ju(t) : t, bh = (t) => Be(t) ? oy(t) : t, m1 = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class ly {
  constructor(e, n, r, i) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new gh(
      () => e(this._value),
      () => xl(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = be(this);
    return (!e._cacheable || e.effect.dirty) && Oi(e._value, e._value = e.effect.run()) && xl(e, 4), uy(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && vr(m1, `

getter: `, this.getter), xl(e, 2)), e._value;
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
function g1(t, e, n = !1) {
  let r, i;
  const s = ge(t);
  s ? (r = t, i = process.env.NODE_ENV !== "production" ? () => {
    vr("Write operation failed: computed value is readonly");
  } : vt) : (r = t.get, i = t.set);
  const a = new ly(r, i, s || !i, n);
  return process.env.NODE_ENV !== "production" && e && !n && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
function uy(t) {
  var e;
  vi && ns && (t = be(t), Xg(
    ns,
    (e = t.dep) != null ? e : t.dep = Zg(
      () => t.dep = void 0,
      t instanceof ly ? t : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function xl(t, e = 4, n) {
  t = be(t);
  const r = t.dep;
  r && Kg(
    r,
    e,
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Ye(t) {
  return !!(t && t.__v_isRef === !0);
}
function _e(t) {
  return cy(t, !1);
}
function rt(t) {
  return cy(t, !0);
}
function cy(t, e) {
  return Ye(t) ? t : new y1(t, e);
}
class y1 {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : be(e), this._value = n ? e : eo(e);
  }
  get value() {
    return uy(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || is(e) || cs(e);
    e = n ? e : be(e), Oi(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : eo(e), xl(this, 4, e));
  }
}
function M(t) {
  return Ye(t) ? t.value : t;
}
const v1 = {
  get: (t, e, n) => M(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return Ye(i) && !Ye(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function fy(t) {
  return hr(t) ? t : new Proxy(t, v1);
}
function pf(t) {
  process.env.NODE_ENV !== "production" && !Kl(t) && vr("toRefs() expects a reactive object but received a plain one.");
  const e = le(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = hy(t, n);
  return e;
}
class _1 {
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
    return Xb(be(this._object), this._key);
  }
}
class b1 {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ol(t, e, n) {
  return Ye(t) ? t : ge(t) ? new b1(t) : Be(t) && arguments.length > 1 ? hy(t, e, n) : _e(t);
}
function hy(t, e, n) {
  const r = t[e];
  return Ye(r) ? r : new _1(t, e, n);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ss = [];
function Ml(t) {
  ss.push(t);
}
function Tl() {
  ss.pop();
}
function q(t, ...e) {
  zr();
  const n = ss.length ? ss[ss.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = E1();
  if (r)
    $r(
      r,
      n,
      11,
      [
        t + e.map((s) => {
          var a, o;
          return (o = (a = s.toString) == null ? void 0 : a.call(s)) != null ? o : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${Yu(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...S1(i)), console.warn(...s);
  }
  Yr();
}
function E1() {
  let t = ss[ss.length - 1];
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
function S1(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...w1(n));
  }), e;
}
function w1({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${Yu(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...x1(t.props), s] : [i + s];
}
function x1(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...dy(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function dy(t, e, n) {
  return it(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : Ye(e) ? (e = dy(t, be(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : ge(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = be(e), n ? e : [`${t}=`, e]);
}
function O1(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? q(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && q(`${e} is NaN - the duration expression might be incorrect.`));
}
const Eh = {
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
function $r(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (i) {
    _o(i, e, n);
  }
}
function Ln(t, e, n, r) {
  if (ge(t)) {
    const i = $r(t, e, n, r);
    return i && dh(i) && i.catch((s) => {
      _o(s, e, n);
    }), i;
  }
  if (le(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++)
      i.push(Ln(t[s], e, n, r));
    return i;
  } else
    process.env.NODE_ENV !== "production" && q(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
    );
}
function _o(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? Eh[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      zr(), $r(
        l,
        null,
        10,
        [t, a, o]
      ), Yr();
      return;
    }
  }
  M1(t, n, i, r);
}
function M1(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = Eh[e];
    if (n && Ml(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Tl(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let to = !1, mf = !1;
const Bt = [];
let sr = 0;
const Ws = [];
let kr = null, si = 0;
const py = /* @__PURE__ */ Promise.resolve();
let Sh = null;
const T1 = 100;
function Zl(t) {
  const e = Sh || py;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function N1(t) {
  let e = sr + 1, n = Bt.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = Bt[r], s = no(i);
    s < t || s === t && i.pre ? e = r + 1 : n = r;
  }
  return e;
}
function Bu(t) {
  (!Bt.length || !Bt.includes(
    t,
    to && t.allowRecurse ? sr + 1 : sr
  )) && (t.id == null ? Bt.push(t) : Bt.splice(N1(t.id), 0, t), my());
}
function my() {
  !to && !mf && (mf = !0, Sh = py.then(vy));
}
function L1(t) {
  const e = Bt.indexOf(t);
  e > sr && Bt.splice(e, 1);
}
function gy(t) {
  le(t) ? Ws.push(...t) : (!kr || !kr.includes(
    t,
    t.allowRecurse ? si + 1 : si
  )) && Ws.push(t), my();
}
function Pd(t, e, n = to ? sr + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); n < Bt.length; n++) {
    const r = Bt[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid || process.env.NODE_ENV !== "production" && wh(e, r))
        continue;
      Bt.splice(n, 1), n--, r();
    }
  }
}
function yy(t) {
  if (Ws.length) {
    const e = [...new Set(Ws)].sort(
      (n, r) => no(n) - no(r)
    );
    if (Ws.length = 0, kr) {
      kr.push(...e);
      return;
    }
    for (kr = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), si = 0; si < kr.length; si++)
      process.env.NODE_ENV !== "production" && wh(t, kr[si]) || kr[si]();
    kr = null, si = 0;
  }
}
const no = (t) => t.id == null ? 1 / 0 : t.id, C1 = (t, e) => {
  const n = no(t) - no(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function vy(t) {
  mf = !1, to = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Bt.sort(C1);
  const e = process.env.NODE_ENV !== "production" ? (n) => wh(t, n) : vt;
  try {
    for (sr = 0; sr < Bt.length; sr++) {
      const n = Bt[sr];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        $r(n, null, 14);
      }
    }
  } finally {
    sr = 0, Bt.length = 0, yy(t), to = !1, Sh = null, (Bt.length || Ws.length) && vy(t);
  }
}
function wh(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > T1) {
      const r = e.ownerInstance, i = r && Dh(r.type);
      return _o(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
let _i = !1;
const Ps = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Fu().__VUE_HMR_RUNTIME__ = {
  createRecord: pc(_y),
  rerender: pc(D1),
  reload: pc(k1)
});
const fs = /* @__PURE__ */ new Map();
function A1(t) {
  const e = t.type.__hmrId;
  let n = fs.get(e);
  n || (_y(e, t.type), n = fs.get(e)), n.instances.add(t);
}
function P1(t) {
  fs.get(t.type.__hmrId).instances.delete(t);
}
function _y(t, e) {
  return fs.has(t) ? !1 : (fs.set(t, {
    initialDef: $a(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $a(t) {
  return rv(t) ? t.__vccOpts : t;
}
function D1(t, e) {
  const n = fs.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, $a(r.type).render = e), r.renderCache = [], _i = !0, r.effect.dirty = !0, r.update(), _i = !1;
  }));
}
function k1(t, e) {
  const n = fs.get(t);
  if (!n)
    return;
  e = $a(e), Dd(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = $a(i.type);
    Ps.has(s) || (s !== n.initialDef && Dd(s, e), Ps.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Ps.add(s), i.ceReload(e.styles), Ps.delete(s)) : i.parent ? (i.parent.effect.dirty = !0, Bu(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  gy(() => {
    for (const i of r)
      Ps.delete(
        $a(i.type)
      );
  });
}
function Dd(t, e) {
  et(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function pc(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Hn, xa = [], gf = !1;
function bo(t, ...e) {
  Hn ? Hn.emit(t, ...e) : gf || xa.push({ event: t, args: e });
}
function xh(t, e) {
  var n, r;
  Hn = t, Hn ? (Hn.enabled = !0, xa.forEach(({ event: i, args: s }) => Hn.emit(i, ...s)), xa = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    xh(s, e);
  }), setTimeout(() => {
    Hn || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, gf = !0, xa = []);
  }, 3e3)) : (gf = !0, xa = []);
}
function I1(t, e) {
  bo("app:init", t, e, {
    Fragment: Ue,
    Text: So,
    Comment: Nt,
    Static: Nl
  });
}
function R1(t) {
  bo("app:unmount", t);
}
const $1 = /* @__PURE__ */ Oh(
  "component:added"
), by = /* @__PURE__ */ Oh("component:updated"), F1 = /* @__PURE__ */ Oh(
  "component:removed"
), V1 = (t) => {
  Hn && typeof Hn.cleanupBuffer == "function" && !Hn.cleanupBuffer(t) && F1(t);
};
/*! #__NO_SIDE_EFFECTS__ */
function Oh(t) {
  return (e) => {
    bo(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const G1 = /* @__PURE__ */ Ey(
  "perf:start"
), j1 = /* @__PURE__ */ Ey(
  "perf:end"
);
function Ey(t) {
  return (e, n, r) => {
    bo(t, e.appContext.app, e.uid, e, n, r);
  };
}
function U1(t, e, n) {
  bo(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function B1(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Je;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [c]
    } = t;
    if (f)
      if (!(e in f))
        (!c || !(Yi(e) in c)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Yi(e)}" prop.`
        );
      else {
        const h = f[e];
        ge(h) && (h(...n) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = r[f] || Je;
    h && (i = n.map((d) => it(d) ? d.trim() : d)), c && (i = n.map(Db));
  }
  if (process.env.NODE_ENV !== "production" && U1(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && r[Yi(f)] && q(
      `Event "${f}" is emitted in component ${Yu(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${un(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = r[o = Yi(e)] || r[o = Yi(gn(e))];
  !l && s && (l = r[o = Yi(un(e))]), l && Ln(
    l,
    t,
    6,
    i
  );
  const u = r[o + "Once"];
  if (u) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[o])
      return;
    t.emitted[o] = !0, Ln(
      u,
      t,
      6,
      i
    );
  }
}
function Sy(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!ge(t)) {
    const l = (u) => {
      const f = Sy(u, e, !0);
      f && (o = !0, et(a, f));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Be(t) && r.set(t, null), null) : (le(s) ? s.forEach((l) => a[l] = null) : et(a, s), Be(t) && r.set(t, a), a);
}
function Wu(t, e) {
  return !t || !vo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), De(t, e[0].toLowerCase() + e.slice(1)) || De(t, un(e)) || De(t, e));
}
let ht = null, wy = null;
function Jl(t) {
  const e = ht;
  return ht = t, wy = t && t.type.__scopeId || null, e;
}
function bi(t, e = ht, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && Xd(-1);
    const s = Jl(e);
    let a;
    try {
      a = t(...i);
    } finally {
      Jl(s), r._d && Xd(1);
    }
    return process.env.NODE_ENV !== "production" && by(e), a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let yf = !1;
function Ql() {
  yf = !0;
}
function mc(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
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
  } = t, v = Jl(t);
  let y, g;
  process.env.NODE_ENV !== "production" && (yf = !1);
  try {
    if (n.shapeFlag & 4) {
      const w = i || r, N = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(w, {
        get(O, R, D) {
          return q(
            `Property '${String(
              R
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(O, R, D);
        }
      }) : w;
      y = qn(
        u.call(
          N,
          w,
          f,
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          d,
          h,
          p
        )
      ), g = o;
    } else {
      const w = e;
      process.env.NODE_ENV !== "production" && o === c && Ql(), y = qn(
        w.length > 1 ? w(
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Ql(), o;
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : w(
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          null
        )
      ), g = e.props ? o : W1(o);
    }
  } catch (w) {
    Ga.length = 0, _o(w, t, 1), y = ee(Nt);
  }
  let E = y, b;
  if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([E, b] = xy(y)), g && m !== !1) {
    const w = Object.keys(g), { shapeFlag: N } = E;
    if (w.length) {
      if (N & 7)
        s && w.some(Yl) && (g = q1(
          g,
          s
        )), E = _r(E, g);
      else if (process.env.NODE_ENV !== "production" && !yf && E.type !== Nt) {
        const O = Object.keys(o), R = [], D = [];
        for (let L = 0, P = O.length; L < P; L++) {
          const I = O[L];
          vo(I) ? Yl(I) || R.push(I[2].toLowerCase() + I.slice(3)) : D.push(I);
        }
        D.length && q(
          `Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), R.length && q(
          `Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !kd(E) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), E = _r(E), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !kd(E) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), E.transition = n.transition), process.env.NODE_ENV !== "production" && b ? b(E) : y = E, Jl(v), y;
}
const xy = (t) => {
  const e = t.children, n = t.dynamicChildren, r = Mh(e, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return xy(r);
  } else
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, a = (o) => {
    e[i] = o, n && (s > -1 ? n[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...n, o]));
  };
  return [qn(r), a];
};
function Mh(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (na(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && e && n.patchFlag > 0 && n.patchFlag & 2048)
          return Mh(n.children);
      }
    } else
      return;
  }
  return n;
}
const W1 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || vo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, q1 = (t, e) => {
  const n = {};
  for (const r in t)
    (!Yl(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, kd = (t) => t.shapeFlag & 7 || t.type === Nt;
function H1(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && _i || e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Id(r, a, u) : !!a;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const h = f[c];
        if (a[h] !== r[h] && !Wu(u, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? Id(r, a, u) : !0 : !!a;
  return !1;
}
function Id(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Wu(n, s))
      return !0;
  }
  return !1;
}
function z1({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const vf = "components", Y1 = "directives";
function X1(t, e) {
  return Oy(vf, t, !0, e) || t;
}
const K1 = Symbol.for("v-ndc");
function Th(t) {
  return Oy(Y1, t);
}
function Oy(t, e, n = !0, r = !1) {
  const i = ht || wt;
  if (i) {
    const s = i.type;
    if (t === vf) {
      const o = Dh(
        s,
        !1
      );
      if (o && (o === e || o === gn(e) || o === us(gn(e))))
        return s;
    }
    const a = Rd(i[t] || s[t], e) || Rd(i.appContext[t], e);
    if (!a && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !a) {
      const o = t === vf ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      q(`Failed to resolve ${t.slice(0, -1)}: ${e}${o}`);
    }
    return a;
  } else
    process.env.NODE_ENV !== "production" && q(
      `resolve${us(t.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Rd(t, e) {
  return t && (t[e] || t[gn(e)] || t[us(gn(e))]);
}
const Z1 = (t) => t.__isSuspense;
function J1(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : gy(t);
}
const Q1 = Symbol.for("v-scx"), eE = () => {
  {
    const t = Hs(Q1);
    return t || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function vn(t, e) {
  return Nh(t, null, e);
}
const Xo = {};
function tt(t, e, n) {
  return process.env.NODE_ENV !== "production" && !ge(e) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Nh(t, e, n);
}
function Nh(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  once: s,
  onTrack: a,
  onTrigger: o
} = Je) {
  if (e && s) {
    const O = e;
    e = (...R) => {
      O(...R), N();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && q(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !e && (n !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && q(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (O) => {
    q(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = wt, f = (O) => r === !0 ? O : Ji(O, r === !1 ? 1 : void 0);
  let c, h = !1, d = !1;
  if (Ye(t) ? (c = () => t.value, h = is(t)) : hr(t) ? (c = () => f(t), h = !0) : le(t) ? (d = !0, h = t.some((O) => hr(O) || is(O)), c = () => t.map((O) => {
    if (Ye(O))
      return O.value;
    if (hr(O))
      return f(O);
    if (ge(O))
      return $r(O, u, 2);
    process.env.NODE_ENV !== "production" && l(O);
  })) : ge(t) ? e ? c = () => $r(t, u, 2) : c = () => (p && p(), Ln(
    t,
    u,
    3,
    [m]
  )) : (c = vt, process.env.NODE_ENV !== "production" && l(t)), e && r) {
    const O = c;
    c = () => Ji(O());
  }
  let p, m = (O) => {
    p = b.onStop = () => {
      $r(O, u, 4), p = b.onStop = void 0;
    };
  }, v;
  if (Hu)
    if (m = vt, e ? n && Ln(e, u, 3, [
      c(),
      d ? [] : void 0,
      m
    ]) : c(), i === "sync") {
      const O = eE();
      v = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return vt;
  let y = d ? new Array(t.length).fill(Xo) : Xo;
  const g = () => {
    if (!(!b.active || !b.dirty))
      if (e) {
        const O = b.run();
        (r || h || (d ? O.some((R, D) => Oi(R, y[D])) : Oi(O, y))) && (p && p(), Ln(e, u, 3, [
          O,
          y === Xo ? void 0 : d && y[0] === Xo ? [] : y,
          m
        ]), y = O);
      } else
        b.run();
  };
  g.allowRecurse = !!e;
  let E;
  i === "sync" ? E = g : i === "post" ? E = () => on(g, u && u.suspense) : (g.pre = !0, u && (g.id = u.uid), E = () => Bu(g));
  const b = new gh(c, vt, E), w = Hg(), N = () => {
    b.stop(), w && hh(w.effects, b);
  };
  return process.env.NODE_ENV !== "production" && (b.onTrack = a, b.onTrigger = o), e ? n ? g() : y = b.run() : i === "post" ? on(
    b.run.bind(b),
    u && u.suspense
  ) : b.run(), v && v.push(N), N;
}
function tE(t, e, n) {
  const r = this.proxy, i = it(t) ? t.includes(".") ? My(r, t) : () => r[t] : t.bind(r, r);
  let s;
  ge(e) ? s = e : (s = e.handler, n = e);
  const a = xo(this), o = Nh(i, s.bind(r), n);
  return a(), o;
}
function My(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Ji(t, e, n = 0, r) {
  if (!Be(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(t))
    return t;
  if (r.add(t), Ye(t))
    Ji(t.value, e, n, r);
  else if (le(t))
    for (let i = 0; i < t.length; i++)
      Ji(t[i], e, n, r);
  else if (Fg(t) || ts(t))
    t.forEach((i) => {
      Ji(i, e, n, r);
    });
  else if (Gg(t))
    for (const i in t)
      Ji(t[i], e, n, r);
  return t;
}
function Ty(t) {
  Cb(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function eu(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), t;
  const n = zu(ht) || ht.proxy, r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Je] = e[i];
    s && (ge(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ji(a), r.push({
      dir: s,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return t;
}
function Fi(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[r];
    l && (zr(), Ln(l, n, 8, [
      t.el,
      o,
      t,
      e
    ]), Yr());
  }
}
const ai = Symbol("_leaveCb"), Ko = Symbol("_enterCb");
function nE() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _n(() => {
    t.isMounted = !0;
  }), Py(() => {
    t.isUnmounting = !0;
  }), t;
}
const En = [Function, Array], Ny = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: En,
  onEnter: En,
  onAfterEnter: En,
  onEnterCancelled: En,
  onBeforeLeave: En,
  onLeave: En,
  onAfterLeave: En,
  onLeaveCancelled: En,
  onBeforeAppear: En,
  onAppear: En,
  onAfterAppear: En,
  onAppearCancelled: En
}, rE = {
  name: "BaseTransition",
  props: Ny,
  setup(t, { slots: e }) {
    const n = wo(), r = nE();
    return () => {
      const i = e.default && Cy(e.default(), !0);
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
      if (process.env.NODE_ENV !== "production" && o && o !== "in-out" && o !== "out-in" && o !== "default" && q(`invalid <transition> mode: ${o}`), r.isLeaving)
        return gc(s);
      const l = $d(s);
      if (!l)
        return gc(s);
      const u = _f(
        l,
        a,
        r,
        n
      );
      bf(l, u);
      const f = n.subTree, c = f && $d(f);
      if (c && c.type !== Nt && !Zi(l, c)) {
        const h = _f(
          c,
          a,
          r,
          n
        );
        if (bf(c, h), o === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, gc(s);
        o === "in-out" && l.type !== Nt && (h.delayLeave = (d, p, m) => {
          const v = Ly(
            r,
            c
          );
          v[String(c.key)] = c, d[ai] = () => {
            p(), d[ai] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = m;
        });
      }
      return s;
    };
  }
}, iE = rE;
function Ly(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function _f(t, e, n, r) {
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
    onAppear: v,
    onAfterAppear: y,
    onAppearCancelled: g
  } = e, E = String(t.key), b = Ly(n, t), w = (R, D) => {
    R && Ln(
      R,
      r,
      9,
      D
    );
  }, N = (R, D) => {
    const L = D[1];
    w(R, D), le(R) ? R.every((P) => P.length <= 1) && L() : R.length <= 1 && L();
  }, O = {
    mode: s,
    persisted: a,
    beforeEnter(R) {
      let D = o;
      if (!n.isMounted)
        if (i)
          D = m || o;
        else
          return;
      R[ai] && R[ai](
        !0
      );
      const L = b[E];
      L && Zi(t, L) && L.el[ai] && L.el[ai](), w(D, [R]);
    },
    enter(R) {
      let D = l, L = u, P = f;
      if (!n.isMounted)
        if (i)
          D = v || l, L = y || u, P = g || f;
        else
          return;
      let I = !1;
      const J = R[Ko] = (pe) => {
        I || (I = !0, pe ? w(P, [R]) : w(L, [R]), O.delayedLeave && O.delayedLeave(), R[Ko] = void 0);
      };
      D ? N(D, [R, J]) : J();
    },
    leave(R, D) {
      const L = String(t.key);
      if (R[Ko] && R[Ko](
        !0
      ), n.isUnmounting)
        return D();
      w(c, [R]);
      let P = !1;
      const I = R[ai] = (J) => {
        P || (P = !0, D(), J ? w(p, [R]) : w(d, [R]), R[ai] = void 0, b[L] === t && delete b[L]);
      };
      b[L] = t, h ? N(h, [R, I]) : I();
    },
    clone(R) {
      return _f(R, e, n, r);
    }
  };
  return O;
}
function gc(t) {
  if (Eo(t))
    return t = _r(t), t.children = null, t;
}
function $d(t) {
  if (!Eo(t))
    return t;
  if (process.env.NODE_ENV !== "production" && t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: n } = t;
  if (n) {
    if (e & 16)
      return n[0];
    if (e & 32 && ge(n.default))
      return n.default();
  }
}
function bf(t, e) {
  t.shapeFlag & 6 && t.component ? bf(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Cy(t, e = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === Ue ? (a.patchFlag & 128 && i++, r = r.concat(
      Cy(a.children, e, o)
    )) : (e || a.type !== Nt) && r.push(o != null ? _r(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function he(t, e) {
  return ge(t) ? /* @__PURE__ */ (() => et({ name: t.name }, e, { setup: t }))() : t;
}
const Fa = (t) => !!t.type.__asyncLoader, Eo = (t) => t.type.__isKeepAlive;
function sE(t, e) {
  Ay(t, "a", e);
}
function aE(t, e) {
  Ay(t, "da", e);
}
function Ay(t, e, n = wt) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (qu(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Eo(i.parent.vnode) && oE(r, e, n, i), i = i.parent;
  }
}
function oE(t, e, n, r) {
  const i = qu(
    e,
    t,
    r,
    !0
  );
  Ai(() => {
    hh(r[e], i);
  }, n);
}
function qu(t, e, n = wt, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      zr();
      const o = xo(n), l = Ln(e, n, t, a);
      return o(), Yr(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Yi(Eh[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xr = (t) => (e, n = wt) => (!Hu || t === "sp") && qu(t, (...r) => e(...r), n), lE = Xr("bm"), _n = Xr("m"), uE = Xr("bu"), cE = Xr("u"), Py = Xr("bum"), Ai = Xr("um"), fE = Xr("sp"), hE = Xr(
  "rtg"
), dE = Xr(
  "rtc"
);
function pE(t, e = wt) {
  qu("ec", t, e);
}
function Dn(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (le(t) || it(t)) {
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
  return n && (n[r] = i), i;
}
function Dy(t, e, n = {}, r, i) {
  if (ht.isCE || ht.parent && Fa(ht.parent) && ht.parent.isCE)
    return e !== "default" && (n.name = e), ee("slot", n, r && r());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), A();
  const a = s && ky(s(n)), o = Fe(
    Ue,
    {
      key: n.key || a && a.key || `_${e}`
    },
    a || (r ? r() : []),
    a && t._ === 1 ? 64 : -2
  );
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function ky(t) {
  return t.some((e) => na(e) ? !(e.type === Nt || e.type === Ue && !ky(e.children)) : !0) ? t : null;
}
const Ef = (t) => t ? tv(t) ? zu(t) || t.proxy : Ef(t.parent) : null, as = /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Rr(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Rr(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Rr(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Rr(t.refs) : t.refs,
  $parent: (t) => Ef(t.parent),
  $root: (t) => Ef(t.root),
  $emit: (t) => t.emit,
  $options: (t) => Ch(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    t.effect.dirty = !0, Bu(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = Zl.bind(t.proxy)),
  $watch: (t) => tE.bind(t)
}), Lh = (t) => t === "_" || t === "$", yc = (t, e) => t !== Je && !t.__isScriptSetup && De(t, e), Iy = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
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
        if (yc(r, e))
          return a[e] = 1, r[e];
        if (i !== Je && De(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && De(u, e))
          return a[e] = 3, s[e];
        if (n !== Je && De(n, e))
          return a[e] = 4, n[e];
        Sf && (a[e] = 0);
      }
    }
    const f = as[e];
    let c, h;
    if (f)
      return e === "$attrs" ? (It(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && Ql()) : process.env.NODE_ENV !== "production" && e === "$slots" && It(t, "get", e), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (n !== Je && De(n, e))
      return a[e] = 4, n[e];
    if (h = l.config.globalProperties, De(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && ht && (!it(e) || e.indexOf("__v") !== 0) && (i !== Je && Lh(e[0]) && De(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return yc(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && De(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Je && De(r, e) ? (r[e] = n, !0) : De(t.props, e) ? (process.env.NODE_ENV !== "production" && q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && q(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s }
  }, a) {
    let o;
    return !!n[a] || t !== Je && De(t, a) || yc(e, a) || (o = s[0]) && De(o, a) || De(r, a) || De(as, a) || De(i.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : De(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Iy.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function mE(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(as).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => as[n](t),
      set: vt
    });
  }), e;
}
function gE(t) {
  const {
    ctx: e,
    propsOptions: [n]
  } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: vt
    });
  });
}
function yE(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(be(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Lh(r[0])) {
        q(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: vt
      });
    }
  });
}
function Fd(t) {
  return le(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function vE() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? q(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let Sf = !0;
function _E(t) {
  const e = Ch(t), n = t.proxy, r = t.ctx;
  Sf = !1, e.beforeCreate && Vd(e.beforeCreate, t, "bc");
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
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: g,
    destroyed: E,
    unmounted: b,
    render: w,
    renderTracked: N,
    renderTriggered: O,
    errorCaptured: R,
    serverPrefetch: D,
    expose: L,
    inheritAttrs: P,
    components: I,
    directives: J,
    filters: pe
  } = e, T = process.env.NODE_ENV !== "production" ? vE() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = t.propsOptions;
    if (z)
      for (const K in z)
        T("Props", K);
  }
  if (u && bE(u, r, T), a)
    for (const z in a) {
      const K = a[z];
      ge(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, z, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[z] = K.bind(n), process.env.NODE_ENV !== "production" && T("Methods", z)) : process.env.NODE_ENV !== "production" && q(
        `Method "${z}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !ge(i) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && dh(z) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(z))
      process.env.NODE_ENV !== "production" && q("data() should return an object.");
    else if (t.data = ju(z), process.env.NODE_ENV !== "production")
      for (const K in z)
        T("Data", K), Lh(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => z[K],
          set: vt
        });
  }
  if (Sf = !0, s)
    for (const z in s) {
      const K = s[z], Le = ge(K) ? K.bind(n, n) : ge(K.get) ? K.get.bind(n, n) : vt;
      process.env.NODE_ENV !== "production" && Le === vt && q(`Computed property "${z}" has no getter.`);
      const Ae = !ge(K) && ge(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : vt, pt = fe({
        get: Le,
        set: Ae
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (Rt) => pt.value = Rt
      }), process.env.NODE_ENV !== "production" && T("Computed", z);
    }
  if (o)
    for (const z in o)
      Ry(o[z], r, n, z);
  if (l) {
    const z = ge(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((K) => {
      Fy(K, z[K]);
    });
  }
  f && Vd(f, t, "c");
  function $(z, K) {
    le(K) ? K.forEach((Le) => z(Le.bind(n))) : K && z(K.bind(n));
  }
  if ($(lE, c), $(_n, h), $(uE, d), $(cE, p), $(sE, m), $(aE, v), $(pE, R), $(dE, N), $(hE, O), $(Py, g), $(Ai, b), $(fE, D), le(L))
    if (L.length) {
      const z = t.exposed || (t.exposed = {});
      L.forEach((K) => {
        Object.defineProperty(z, K, {
          get: () => n[K],
          set: (Le) => n[K] = Le
        });
      });
    } else
      t.exposed || (t.exposed = {});
  w && t.render === vt && (t.render = w), P != null && (t.inheritAttrs = P), I && (t.components = I), J && (t.directives = J);
}
function bE(t, e, n = vt) {
  le(t) && (t = wf(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Be(i) ? "default" in i ? s = Hs(
      i.from || r,
      i.default,
      !0
    ) : s = Hs(i.from || r) : s = Hs(i), Ye(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Vd(t, e, n) {
  Ln(
    le(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ry(t, e, n, r) {
  const i = r.includes(".") ? My(n, r) : () => n[r];
  if (it(t)) {
    const s = e[t];
    ge(s) ? tt(i, s) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (ge(t))
    tt(i, t.bind(n));
  else if (Be(t))
    if (le(t))
      t.forEach((s) => Ry(s, e, n, r));
    else {
      const s = ge(t.handler) ? t.handler.bind(n) : e[t.handler];
      ge(s) ? tt(i, s, t) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && q(`Invalid watch option: "${r}"`, t);
}
function Ch(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach(
    (u) => tu(l, u, a, !0)
  ), tu(l, e, a)), Be(e) && s.set(e, l), l;
}
function tu(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && tu(t, s, n, !0), i && i.forEach(
    (a) => tu(t, a, n, !0)
  );
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = EE[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const EE = {
  data: Gd,
  props: jd,
  emits: jd,
  methods: Oa,
  computed: Oa,
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
  components: Oa,
  directives: Oa,
  watch: wE,
  provide: Gd,
  inject: SE
};
function Gd(t, e) {
  return e ? t ? function() {
    return et(
      ge(t) ? t.call(this, this) : t,
      ge(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function SE(t, e) {
  return Oa(wf(t), wf(e));
}
function wf(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Yt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Oa(t, e) {
  return t ? et(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function jd(t, e) {
  return t ? le(t) && le(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : et(
    /* @__PURE__ */ Object.create(null),
    Fd(t),
    Fd(e != null ? e : {})
  ) : e;
}
function wE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = et(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Yt(t[r], e[r]);
  return n;
}
function $y() {
  return {
    app: null,
    config: {
      isNativeTag: Nb,
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
let xE = 0;
function OE(t, e) {
  return function(r, i = null) {
    ge(r) || (r = et({}, r)), i != null && !Be(i) && (process.env.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const s = $y(), a = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = s.app = {
      _uid: xE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Qd,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return a.has(u) ? process.env.NODE_ENV !== "production" && q("Plugin has already been applied to target app.") : u && ge(u.install) ? (a.add(u), u.install(l, ...f)) : ge(u) ? (a.add(u), u(l, ...f)) : process.env.NODE_ENV !== "production" && q(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && q(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), l;
      },
      component(u, f) {
        return process.env.NODE_ENV !== "production" && Lf(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && q(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && Ty(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && q(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
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
          const h = ee(r, i);
          return h.appContext = s, c === !0 ? c = "svg" : c === !1 && (c = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            t(
              _r(h),
              u,
              c
            );
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, I1(l, Qd)), zu(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, R1(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in s.provides && q(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = f, l;
      },
      runWithContext(u) {
        const f = qs;
        qs = l;
        try {
          return u();
        } finally {
          qs = f;
        }
      }
    };
    return l;
  };
}
let qs = null;
function Fy(t, e) {
  if (!wt)
    process.env.NODE_ENV !== "production" && q("provide() can only be used inside setup().");
  else {
    let n = wt.provides;
    const r = wt.parent && wt.parent.provides;
    r === n && (n = wt.provides = Object.create(r)), n[t] = e;
  }
}
function Hs(t, e, n = !1) {
  const r = wt || ht;
  if (r || qs) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : qs._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && ge(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && q(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function ME() {
  return !!(wt || ht || qs);
}
const Vy = {}, Gy = () => Object.create(Vy), jy = (t) => Object.getPrototypeOf(t) === Vy;
function TE(t, e, n, r = !1) {
  const i = {}, s = Gy();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Uy(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && Wy(e || {}, i, t), n ? t.props = r ? i : p1(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function NE(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function LE(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = be(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && NE(t)) && (r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (Wu(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (De(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const p = gn(h);
            i[p] = xf(
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
    Uy(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !De(e, c) && ((f = un(c)) === c || !De(e, f))) && (l ? n && (n[c] !== void 0 || n[f] !== void 0) && (i[c] = xf(
        l,
        o,
        c,
        void 0,
        t,
        !0
      )) : delete i[c]);
    if (s !== o)
      for (const c in s)
        (!e || !De(e, c) && !0) && (delete s[c], u = !0);
  }
  u && fr(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && Wy(e || {}, i, t);
}
function Uy(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (Ra(l))
        continue;
      const u = e[l];
      let f;
      i && De(i, f = gn(l)) ? !s || !s.includes(f) ? n[f] = u : (o || (o = {}))[f] = u : Wu(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = be(n), u = o || Je;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = xf(
        i,
        l,
        c,
        u[c],
        t,
        !De(u, c)
      );
    }
  }
  return a;
}
function xf(t, e, n, r, i, s) {
  const a = t[n];
  if (a != null) {
    const o = De(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ge(l)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const f = xo(i);
          r = u[n] = l.call(
            null,
            e
          ), f();
        }
      } else
        r = l;
    }
    a[0] && (s && !o ? r = !1 : a[1] && (r === "" || r === un(n)) && (r = !0));
  }
  return r;
}
function By(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!ge(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = By(c, e, !0);
      et(a, h), d && o.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return Be(t) && r.set(t, Bs), Bs;
  if (le(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !it(s[f]) && q("props must be strings when using array syntax.", s[f]);
      const c = gn(s[f]);
      Ud(c) && (a[c] = Je);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Be(s) && q("invalid props options", s);
    for (const f in s) {
      const c = gn(f);
      if (Ud(c)) {
        const h = s[f], d = a[c] = le(h) || ge(h) ? { type: h } : et({}, h);
        if (d) {
          const p = Wd(Boolean, d.type), m = Wd(String, d.type);
          d[0] = p > -1, d[1] = m < 0 || p < m, (p > -1 || De(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return Be(t) && r.set(t, u), u;
}
function Ud(t) {
  return t[0] !== "$" && !Ra(t) ? !0 : (process.env.NODE_ENV !== "production" && q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Of(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function Bd(t, e) {
  return Of(t) === Of(e);
}
function Wd(t, e) {
  return le(e) ? e.findIndex((n) => Bd(n, t)) : ge(e) && Bd(e, t) ? 0 : -1;
}
function Wy(t, e, n) {
  const r = be(e), i = n.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && CE(
      s,
      r[s],
      a,
      process.env.NODE_ENV !== "production" ? Rr(r) : r,
      !De(t, s) && !De(t, un(s))
    );
  }
}
function CE(t, e, n, r, i) {
  const { type: s, required: a, validator: o, skipCheck: l } = n;
  if (a && i) {
    q('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !a)) {
    if (s != null && s !== !0 && !l) {
      let u = !1;
      const f = le(s) ? s : [s], c = [];
      for (let h = 0; h < f.length && !u; h++) {
        const { valid: d, expectedType: p } = PE(e, f[h]);
        c.push(p || ""), u = d;
      }
      if (!u) {
        q(DE(t, e, c));
        return;
      }
    }
    o && !o(e, r) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const AE = /* @__PURE__ */ Hr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function PE(t, e) {
  let n;
  const r = Of(e);
  if (AE(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Be(t) : r === "Array" ? n = le(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function DE(t, e, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(us).join(" | ")}`;
  const i = n[0], s = ph(e), a = qd(e, i), o = qd(e, s);
  return n.length === 1 && Hd(i) && !kE(i, s) && (r += ` with value ${a}`), r += `, got ${s} `, Hd(s) && (r += `with value ${o}.`), r;
}
function qd(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Hd(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function kE(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const qy = (t) => t[0] === "_" || t === "$stable", Ah = (t) => le(t) ? t.map(qn) : [qn(t)], IE = (t, e, n) => {
  if (e._n)
    return e;
  const r = bi((...i) => (process.env.NODE_ENV !== "production" && wt && (!n || n.root === wt.root) && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ah(e(...i))), n);
  return r._c = !1, r;
}, Hy = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (qy(i))
      continue;
    const s = t[i];
    if (ge(s))
      e[i] = IE(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Ah(s);
      e[i] = () => a;
    }
  }
}, zy = (t, e) => {
  process.env.NODE_ENV !== "production" && !Eo(t.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ah(e);
  t.slots.default = () => n;
}, RE = (t, e) => {
  const n = t.slots = Gy();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (et(n, e), jg(n, "_", r)) : Hy(e, n);
  } else
    e && zy(t, e);
}, $E = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, a = Je;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && _i ? (et(i, e), fr(t, "set", "$slots")) : n && o === 1 ? s = !1 : (et(i, e), !n && o === 1 && delete i._) : (s = !e.$stable, Hy(e, i)), a = e;
  } else
    e && (zy(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !qy(o) && a[o] == null && delete i[o];
};
function Mf(t, e, n, r, i = !1) {
  if (le(t)) {
    t.forEach(
      (h, d) => Mf(
        h,
        e && (le(e) ? e[d] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Fa(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? zu(r.component) || r.component.proxy : r.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, f = o.refs === Je ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (it(u) ? (f[u] = null, De(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), ge(l))
    $r(l, o, 12, [a, f]);
  else {
    const h = it(l), d = Ye(l);
    if (h || d) {
      const p = () => {
        if (t.f) {
          const m = h ? De(c, l) ? c[l] : f[l] : l.value;
          i ? le(m) && hh(m, s) : le(m) ? m.includes(s) || m.push(s) : h ? (f[l] = [s], De(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, De(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (p.id = -1, on(p, n)) : p();
    } else
      process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let ma, fi;
function Pr(t, e) {
  t.appContext.config.performance && nu() && fi.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && G1(t, e, nu() ? fi.now() : Date.now());
}
function Dr(t, e) {
  if (t.appContext.config.performance && nu()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    fi.mark(r), fi.measure(
      `<${Yu(t, t.type)}> ${e}`,
      n,
      r
    ), fi.clearMarks(n), fi.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && j1(t, e, nu() ? fi.now() : Date.now());
}
function nu() {
  return ma !== void 0 || (typeof window < "u" && window.performance ? (ma = !0, fi = window.performance) : ma = !1), ma;
}
function FE() {
  const t = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && t.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Fu().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const on = J1;
function VE(t) {
  return GE(t);
}
function GE(t, e) {
  FE();
  const n = Fu();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && xh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: a,
    createText: o,
    createComment: l,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: h,
    setScopeId: d = vt,
    insertStaticContent: p
  } = t, m = (_, S, k, G = null, j = null, W = null, Z = void 0, B = null, X = process.env.NODE_ENV !== "production" && _i ? !1 : !!S.dynamicChildren) => {
    if (_ === S)
      return;
    _ && !Zi(_, S) && (G = tn(_), Te(_, j, W, !0), _ = null), S.patchFlag === -2 && (X = !1, S.dynamicChildren = null);
    const { type: U, ref: re, shapeFlag: ue } = S;
    switch (U) {
      case So:
        v(_, S, k, G);
        break;
      case Nt:
        y(_, S, k, G);
        break;
      case Nl:
        _ == null ? g(S, k, G, Z) : process.env.NODE_ENV !== "production" && E(_, S, k, Z);
        break;
      case Ue:
        J(
          _,
          S,
          k,
          G,
          j,
          W,
          Z,
          B,
          X
        );
        break;
      default:
        ue & 1 ? N(
          _,
          S,
          k,
          G,
          j,
          W,
          Z,
          B,
          X
        ) : ue & 6 ? pe(
          _,
          S,
          k,
          G,
          j,
          W,
          Z,
          B,
          X
        ) : ue & 64 || ue & 128 ? U.process(
          _,
          S,
          k,
          G,
          j,
          W,
          Z,
          B,
          X,
          Ct
        ) : process.env.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    re != null && j && Mf(re, _ && _.ref, W, S || _, !S);
  }, v = (_, S, k, G) => {
    if (_ == null)
      r(
        S.el = o(S.children),
        k,
        G
      );
    else {
      const j = S.el = _.el;
      S.children !== _.children && u(j, S.children);
    }
  }, y = (_, S, k, G) => {
    _ == null ? r(
      S.el = l(S.children || ""),
      k,
      G
    ) : S.el = _.el;
  }, g = (_, S, k, G) => {
    [_.el, _.anchor] = p(
      _.children,
      S,
      k,
      G,
      _.el,
      _.anchor
    );
  }, E = (_, S, k, G) => {
    if (S.children !== _.children) {
      const j = h(_.anchor);
      w(_), [S.el, S.anchor] = p(
        S.children,
        k,
        j,
        G
      );
    } else
      S.el = _.el, S.anchor = _.anchor;
  }, b = ({ el: _, anchor: S }, k, G) => {
    let j;
    for (; _ && _ !== S; )
      j = h(_), r(_, k, G), _ = j;
    r(S, k, G);
  }, w = ({ el: _, anchor: S }) => {
    let k;
    for (; _ && _ !== S; )
      k = h(_), i(_), _ = k;
    i(S);
  }, N = (_, S, k, G, j, W, Z, B, X) => {
    S.type === "svg" ? Z = "svg" : S.type === "math" && (Z = "mathml"), _ == null ? O(
      S,
      k,
      G,
      j,
      W,
      Z,
      B,
      X
    ) : L(
      _,
      S,
      j,
      W,
      Z,
      B,
      X
    );
  }, O = (_, S, k, G, j, W, Z, B) => {
    let X, U;
    const { props: re, shapeFlag: ue, transition: oe, dirs: me } = _;
    if (X = _.el = a(
      _.type,
      W,
      re && re.is,
      re
    ), ue & 8 ? f(X, _.children) : ue & 16 && D(
      _.children,
      X,
      null,
      G,
      j,
      vc(_, W),
      Z,
      B
    ), me && Fi(_, null, G, "created"), R(X, _, _.scopeId, Z, G), re) {
      for (const $e in re)
        $e !== "value" && !Ra($e) && s(
          X,
          $e,
          null,
          re[$e],
          W,
          _.children,
          G,
          j,
          ke
        );
      "value" in re && s(X, "value", null, re.value, W), (U = re.onVnodeBeforeMount) && nr(U, G, _);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(X, "__vnode", {
      value: _,
      enumerable: !1
    }), Object.defineProperty(X, "__vueParentComponent", {
      value: G,
      enumerable: !1
    })), me && Fi(_, null, G, "beforeMount");
    const xe = jE(j, oe);
    xe && oe.beforeEnter(X), r(X, S, k), ((U = re && re.onVnodeMounted) || xe || me) && on(() => {
      U && nr(U, G, _), xe && oe.enter(X), me && Fi(_, null, G, "mounted");
    }, j);
  }, R = (_, S, k, G, j) => {
    if (k && d(_, k), G)
      for (let W = 0; W < G.length; W++)
        d(_, G[W]);
    if (j) {
      let W = j.subTree;
      if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = Mh(W.children) || W), S === W) {
        const Z = j.vnode;
        R(
          _,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          j.parent
        );
      }
    }
  }, D = (_, S, k, G, j, W, Z, B, X = 0) => {
    for (let U = X; U < _.length; U++) {
      const re = _[U] = B ? oi(_[U]) : qn(_[U]);
      m(
        null,
        re,
        S,
        k,
        G,
        j,
        W,
        Z,
        B
      );
    }
  }, L = (_, S, k, G, j, W, Z) => {
    const B = S.el = _.el;
    let { patchFlag: X, dynamicChildren: U, dirs: re } = S;
    X |= _.patchFlag & 16;
    const ue = _.props || Je, oe = S.props || Je;
    let me;
    if (k && Vi(k, !1), (me = oe.onVnodeBeforeUpdate) && nr(me, k, S, _), re && Fi(S, _, k, "beforeUpdate"), k && Vi(k, !0), process.env.NODE_ENV !== "production" && _i && (X = 0, Z = !1, U = null), U ? (P(
      _.dynamicChildren,
      U,
      B,
      k,
      G,
      vc(S, j),
      W
    ), process.env.NODE_ENV !== "production" && Va(_, S)) : Z || Le(
      _,
      S,
      B,
      null,
      k,
      G,
      vc(S, j),
      W,
      !1
    ), X > 0) {
      if (X & 16)
        I(
          B,
          S,
          ue,
          oe,
          k,
          G,
          j
        );
      else if (X & 2 && ue.class !== oe.class && s(B, "class", null, oe.class, j), X & 4 && s(B, "style", ue.style, oe.style, j), X & 8) {
        const xe = S.dynamicProps;
        for (let $e = 0; $e < xe.length; $e++) {
          const Qe = xe[$e], mt = ue[Qe], zt = oe[Qe];
          (zt !== mt || Qe === "value") && s(
            B,
            Qe,
            mt,
            zt,
            j,
            _.children,
            k,
            G,
            ke
          );
        }
      }
      X & 1 && _.children !== S.children && f(B, S.children);
    } else
      !Z && U == null && I(
        B,
        S,
        ue,
        oe,
        k,
        G,
        j
      );
    ((me = oe.onVnodeUpdated) || re) && on(() => {
      me && nr(me, k, S, _), re && Fi(S, _, k, "updated");
    }, G);
  }, P = (_, S, k, G, j, W, Z) => {
    for (let B = 0; B < S.length; B++) {
      const X = _[B], U = S[B], re = X.el && (X.type === Ue || !Zi(X, U) || X.shapeFlag & 70) ? c(X.el) : k;
      m(
        X,
        U,
        re,
        null,
        G,
        j,
        W,
        Z,
        !0
      );
    }
  }, I = (_, S, k, G, j, W, Z) => {
    if (k !== G) {
      if (k !== Je)
        for (const B in k)
          !Ra(B) && !(B in G) && s(
            _,
            B,
            k[B],
            null,
            Z,
            S.children,
            j,
            W,
            ke
          );
      for (const B in G) {
        if (Ra(B))
          continue;
        const X = G[B], U = k[B];
        X !== U && B !== "value" && s(
          _,
          B,
          U,
          X,
          Z,
          S.children,
          j,
          W,
          ke
        );
      }
      "value" in G && s(_, "value", k.value, G.value, Z);
    }
  }, J = (_, S, k, G, j, W, Z, B, X) => {
    const U = S.el = _ ? _.el : o(""), re = S.anchor = _ ? _.anchor : o("");
    let { patchFlag: ue, dynamicChildren: oe, slotScopeIds: me } = S;
    process.env.NODE_ENV !== "production" && (_i || ue & 2048) && (ue = 0, X = !1, oe = null), me && (B = B ? B.concat(me) : me), _ == null ? (r(U, k, G), r(re, k, G), D(
      S.children || [],
      k,
      re,
      j,
      W,
      Z,
      B,
      X
    )) : ue > 0 && ue & 64 && oe && _.dynamicChildren ? (P(
      _.dynamicChildren,
      oe,
      k,
      j,
      W,
      Z,
      B
    ), process.env.NODE_ENV !== "production" ? Va(_, S) : (S.key != null || j && S === j.subTree) && Va(
      _,
      S,
      !0
    )) : Le(
      _,
      S,
      k,
      re,
      j,
      W,
      Z,
      B,
      X
    );
  }, pe = (_, S, k, G, j, W, Z, B, X) => {
    S.slotScopeIds = B, _ == null ? S.shapeFlag & 512 ? j.ctx.activate(
      S,
      k,
      G,
      Z,
      X
    ) : T(
      S,
      k,
      G,
      j,
      W,
      Z,
      X
    ) : $(_, S, X);
  }, T = (_, S, k, G, j, W, Z) => {
    const B = _.component = JE(
      _,
      G,
      j
    );
    if (process.env.NODE_ENV !== "production" && B.type.__hmrId && A1(B), process.env.NODE_ENV !== "production" && (Ml(_), Pr(B, "mount")), Eo(_) && (B.ctx.renderer = Ct), process.env.NODE_ENV !== "production" && Pr(B, "init"), eS(B), process.env.NODE_ENV !== "production" && Dr(B, "init"), B.asyncDep) {
      if (j && j.registerDep(B, z), !_.el) {
        const X = B.subTree = ee(Nt);
        y(null, X, S, k);
      }
    } else
      z(
        B,
        _,
        S,
        k,
        j,
        W,
        Z
      );
    process.env.NODE_ENV !== "production" && (Tl(), Dr(B, "mount"));
  }, $ = (_, S, k) => {
    const G = S.component = _.component;
    if (H1(_, S, k))
      if (G.asyncDep && !G.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ml(S), K(G, S, k), process.env.NODE_ENV !== "production" && Tl();
        return;
      } else
        G.next = S, L1(G.update), G.effect.dirty = !0, G.update();
    else
      S.el = _.el, G.vnode = S;
  }, z = (_, S, k, G, j, W, Z) => {
    const B = () => {
      if (_.isMounted) {
        let { next: re, bu: ue, u: oe, parent: me, vnode: xe } = _;
        {
          const Tr = Yy(_);
          if (Tr) {
            re && (re.el = xe.el, K(_, re, Z)), Tr.asyncDep.then(() => {
              _.isUnmounted || B();
            });
            return;
          }
        }
        let $e = re, Qe;
        process.env.NODE_ENV !== "production" && Ml(re || _.vnode), Vi(_, !1), re ? (re.el = xe.el, K(_, re, Z)) : re = xe, ue && pa(ue), (Qe = re.props && re.props.onVnodeBeforeUpdate) && nr(Qe, me, re, xe), Vi(_, !0), process.env.NODE_ENV !== "production" && Pr(_, "render");
        const mt = mc(_);
        process.env.NODE_ENV !== "production" && Dr(_, "render");
        const zt = _.subTree;
        _.subTree = mt, process.env.NODE_ENV !== "production" && Pr(_, "patch"), m(
          zt,
          mt,
          c(zt.el),
          tn(zt),
          _,
          j,
          W
        ), process.env.NODE_ENV !== "production" && Dr(_, "patch"), re.el = mt.el, $e === null && z1(_, mt.el), oe && on(oe, j), (Qe = re.props && re.props.onVnodeUpdated) && on(
          () => nr(Qe, me, re, xe),
          j
        ), process.env.NODE_ENV !== "production" && by(_), process.env.NODE_ENV !== "production" && Tl();
      } else {
        let re;
        const { el: ue, props: oe } = S, { bm: me, m: xe, parent: $e } = _, Qe = Fa(S);
        if (Vi(_, !1), me && pa(me), !Qe && (re = oe && oe.onVnodeBeforeMount) && nr(re, $e, S), Vi(_, !0), ue && Mr) {
          const mt = () => {
            process.env.NODE_ENV !== "production" && Pr(_, "render"), _.subTree = mc(_), process.env.NODE_ENV !== "production" && Dr(_, "render"), process.env.NODE_ENV !== "production" && Pr(_, "hydrate"), Mr(
              ue,
              _.subTree,
              _,
              j,
              null
            ), process.env.NODE_ENV !== "production" && Dr(_, "hydrate");
          };
          Qe ? S.type.__asyncLoader().then(
            () => !_.isUnmounted && mt()
          ) : mt();
        } else {
          process.env.NODE_ENV !== "production" && Pr(_, "render");
          const mt = _.subTree = mc(_);
          process.env.NODE_ENV !== "production" && Dr(_, "render"), process.env.NODE_ENV !== "production" && Pr(_, "patch"), m(
            null,
            mt,
            k,
            G,
            _,
            j,
            W
          ), process.env.NODE_ENV !== "production" && Dr(_, "patch"), S.el = mt.el;
        }
        if (xe && on(xe, j), !Qe && (re = oe && oe.onVnodeMounted)) {
          const mt = S;
          on(
            () => nr(re, $e, mt),
            j
          );
        }
        (S.shapeFlag & 256 || $e && Fa($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && on(_.a, j), _.isMounted = !0, process.env.NODE_ENV !== "production" && $1(_), S = k = G = null;
      }
    }, X = _.effect = new gh(
      B,
      vt,
      () => Bu(U),
      _.scope
    ), U = _.update = () => {
      X.dirty && X.run();
    };
    U.id = _.uid, Vi(_, !0), process.env.NODE_ENV !== "production" && (X.onTrack = _.rtc ? (re) => pa(_.rtc, re) : void 0, X.onTrigger = _.rtg ? (re) => pa(_.rtg, re) : void 0, U.ownerInstance = _), U();
  }, K = (_, S, k) => {
    S.component = _;
    const G = _.vnode.props;
    _.vnode = S, _.next = null, LE(_, S.props, G, k), $E(_, S.children, k), zr(), Pd(_), Yr();
  }, Le = (_, S, k, G, j, W, Z, B, X = !1) => {
    const U = _ && _.children, re = _ ? _.shapeFlag : 0, ue = S.children, { patchFlag: oe, shapeFlag: me } = S;
    if (oe > 0) {
      if (oe & 128) {
        pt(
          U,
          ue,
          k,
          G,
          j,
          W,
          Z,
          B,
          X
        );
        return;
      } else if (oe & 256) {
        Ae(
          U,
          ue,
          k,
          G,
          j,
          W,
          Z,
          B,
          X
        );
        return;
      }
    }
    me & 8 ? (re & 16 && ke(U, j, W), ue !== U && f(k, ue)) : re & 16 ? me & 16 ? pt(
      U,
      ue,
      k,
      G,
      j,
      W,
      Z,
      B,
      X
    ) : ke(U, j, W, !0) : (re & 8 && f(k, ""), me & 16 && D(
      ue,
      k,
      G,
      j,
      W,
      Z,
      B,
      X
    ));
  }, Ae = (_, S, k, G, j, W, Z, B, X) => {
    _ = _ || Bs, S = S || Bs;
    const U = _.length, re = S.length, ue = Math.min(U, re);
    let oe;
    for (oe = 0; oe < ue; oe++) {
      const me = S[oe] = X ? oi(S[oe]) : qn(S[oe]);
      m(
        _[oe],
        me,
        k,
        null,
        j,
        W,
        Z,
        B,
        X
      );
    }
    U > re ? ke(
      _,
      j,
      W,
      !0,
      !1,
      ue
    ) : D(
      S,
      k,
      G,
      j,
      W,
      Z,
      B,
      X,
      ue
    );
  }, pt = (_, S, k, G, j, W, Z, B, X) => {
    let U = 0;
    const re = S.length;
    let ue = _.length - 1, oe = re - 1;
    for (; U <= ue && U <= oe; ) {
      const me = _[U], xe = S[U] = X ? oi(S[U]) : qn(S[U]);
      if (Zi(me, xe))
        m(
          me,
          xe,
          k,
          null,
          j,
          W,
          Z,
          B,
          X
        );
      else
        break;
      U++;
    }
    for (; U <= ue && U <= oe; ) {
      const me = _[ue], xe = S[oe] = X ? oi(S[oe]) : qn(S[oe]);
      if (Zi(me, xe))
        m(
          me,
          xe,
          k,
          null,
          j,
          W,
          Z,
          B,
          X
        );
      else
        break;
      ue--, oe--;
    }
    if (U > ue) {
      if (U <= oe) {
        const me = oe + 1, xe = me < re ? S[me].el : G;
        for (; U <= oe; )
          m(
            null,
            S[U] = X ? oi(S[U]) : qn(S[U]),
            k,
            xe,
            j,
            W,
            Z,
            B,
            X
          ), U++;
      }
    } else if (U > oe)
      for (; U <= ue; )
        Te(_[U], j, W, !0), U++;
    else {
      const me = U, xe = U, $e = /* @__PURE__ */ new Map();
      for (U = xe; U <= oe; U++) {
        const ut = S[U] = X ? oi(S[U]) : qn(S[U]);
        ut.key != null && (process.env.NODE_ENV !== "production" && $e.has(ut.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), $e.set(ut.key, U));
      }
      let Qe, mt = 0;
      const zt = oe - xe + 1;
      let Tr = !1, Ri = 0;
      const tr = new Array(zt);
      for (U = 0; U < zt; U++)
        tr[U] = 0;
      for (U = me; U <= ue; U++) {
        const ut = _[U];
        if (mt >= zt) {
          Te(ut, j, W, !0);
          continue;
        }
        let nn;
        if (ut.key != null)
          nn = $e.get(ut.key);
        else
          for (Qe = xe; Qe <= oe; Qe++)
            if (tr[Qe - xe] === 0 && Zi(ut, S[Qe])) {
              nn = Qe;
              break;
            }
        nn === void 0 ? Te(ut, j, W, !0) : (tr[nn - xe] = U + 1, nn >= Ri ? Ri = nn : Tr = !0, m(
          ut,
          S[nn],
          k,
          null,
          j,
          W,
          Z,
          B,
          X
        ), mt++);
      }
      const bn = Tr ? UE(tr) : Bs;
      for (Qe = bn.length - 1, U = zt - 1; U >= 0; U--) {
        const ut = xe + U, nn = S[ut], Ss = ut + 1 < re ? S[ut + 1].el : G;
        tr[U] === 0 ? m(
          null,
          nn,
          k,
          Ss,
          j,
          W,
          Z,
          B,
          X
        ) : Tr && (Qe < 0 || U !== bn[Qe] ? Rt(nn, k, Ss, 2) : Qe--);
      }
    }
  }, Rt = (_, S, k, G, j = null) => {
    const { el: W, type: Z, transition: B, children: X, shapeFlag: U } = _;
    if (U & 6) {
      Rt(_.component.subTree, S, k, G);
      return;
    }
    if (U & 128) {
      _.suspense.move(S, k, G);
      return;
    }
    if (U & 64) {
      Z.move(_, S, k, Ct);
      return;
    }
    if (Z === Ue) {
      r(W, S, k);
      for (let ue = 0; ue < X.length; ue++)
        Rt(X[ue], S, k, G);
      r(_.anchor, S, k);
      return;
    }
    if (Z === Nl) {
      b(_, S, k);
      return;
    }
    if (G !== 2 && U & 1 && B)
      if (G === 0)
        B.beforeEnter(W), r(W, S, k), on(() => B.enter(W), j);
      else {
        const { leave: ue, delayLeave: oe, afterLeave: me } = B, xe = () => r(W, S, k), $e = () => {
          ue(W, () => {
            xe(), me && me();
          });
        };
        oe ? oe(W, xe, $e) : $e();
      }
    else
      r(W, S, k);
  }, Te = (_, S, k, G = !1, j = !1) => {
    const {
      type: W,
      props: Z,
      ref: B,
      children: X,
      dynamicChildren: U,
      shapeFlag: re,
      patchFlag: ue,
      dirs: oe
    } = _;
    if (B != null && Mf(B, null, k, _, !0), re & 256) {
      S.ctx.deactivate(_);
      return;
    }
    const me = re & 1 && oe, xe = !Fa(_);
    let $e;
    if (xe && ($e = Z && Z.onVnodeBeforeUnmount) && nr($e, S, _), re & 6)
      Jn(_.component, k, G);
    else {
      if (re & 128) {
        _.suspense.unmount(k, G);
        return;
      }
      me && Fi(_, null, S, "beforeUnmount"), re & 64 ? _.type.remove(
        _,
        S,
        k,
        j,
        Ct,
        G
      ) : U && (W !== Ue || ue > 0 && ue & 64) ? ke(
        U,
        S,
        k,
        !1,
        !0
      ) : (W === Ue && ue & 384 || !j && re & 16) && ke(X, S, k), G && Lt(_);
    }
    (xe && ($e = Z && Z.onVnodeUnmounted) || me) && on(() => {
      $e && nr($e, S, _), me && Fi(_, null, S, "unmounted");
    }, k);
  }, Lt = (_) => {
    const { type: S, el: k, anchor: G, transition: j } = _;
    if (S === Ue) {
      process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && j && !j.persisted ? _.children.forEach((Z) => {
        Z.type === Nt ? i(Z.el) : Lt(Z);
      }) : st(k, G);
      return;
    }
    if (S === Nl) {
      w(_);
      return;
    }
    const W = () => {
      i(k), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (_.shapeFlag & 1 && j && !j.persisted) {
      const { leave: Z, delayLeave: B } = j, X = () => Z(k, W);
      B ? B(_.el, W, X) : X();
    } else
      W();
  }, st = (_, S) => {
    let k;
    for (; _ !== S; )
      k = h(_), i(_), _ = k;
    i(S);
  }, Jn = (_, S, k) => {
    process.env.NODE_ENV !== "production" && _.type.__hmrId && P1(_);
    const { bum: G, scope: j, update: W, subTree: Z, um: B } = _;
    G && pa(G), j.stop(), W && (W.active = !1, Te(Z, _, S, k)), B && on(B, S), on(() => {
      _.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), process.env.NODE_ENV !== "production" && V1(_);
  }, ke = (_, S, k, G = !1, j = !1, W = 0) => {
    for (let Z = W; Z < _.length; Z++)
      Te(_[Z], S, k, G, j);
  }, tn = (_) => _.shapeFlag & 6 ? tn(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : h(_.anchor || _.el);
  let Qn = !1;
  const Or = (_, S, k) => {
    _ == null ? S._vnode && Te(S._vnode, null, null, !0) : m(
      S._vnode || null,
      _,
      S,
      null,
      null,
      null,
      k
    ), Qn || (Qn = !0, Pd(), yy(), Qn = !1), S._vnode = _;
  }, Ct = {
    p: m,
    um: Te,
    m: Rt,
    r: Lt,
    mt: T,
    mc: D,
    pc: Le,
    pbc: P,
    n: tn,
    o: t
  };
  let er, Mr;
  return e && ([er, Mr] = e(
    Ct
  )), {
    render: Or,
    hydrate: er,
    createApp: OE(Or, er)
  };
}
function vc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Vi({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function jE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Va(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (le(r) && le(i))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = oi(i[s]), o.el = a.el), n || Va(a, o)), o.type === So && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Nt && !o.el && (o.el = a.el);
    }
}
function UE(t) {
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
function Yy(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Yy(e);
}
const BE = (t) => t.__isTeleport, zs = (t) => t && (t.disabled || t.disabled === ""), zd = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Yd = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Tf = (t, e) => {
  const n = t && t.to;
  if (it(n))
    if (e) {
      const r = e(n);
      return r || process.env.NODE_ENV !== "production" && q(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return process.env.NODE_ENV !== "production" && q(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !zs(t) && q(`Invalid Teleport target: ${n}`), n;
}, WE = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, n, r, i, s, a, o, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: h,
      o: { insert: d, querySelector: p, createText: m, createComment: v }
    } = u, y = zs(e.props);
    let { shapeFlag: g, children: E, dynamicChildren: b } = e;
    if (process.env.NODE_ENV !== "production" && _i && (l = !1, b = null), t == null) {
      const w = e.el = process.env.NODE_ENV !== "production" ? v("teleport start") : m(""), N = e.anchor = process.env.NODE_ENV !== "production" ? v("teleport end") : m("");
      d(w, n, r), d(N, n, r);
      const O = e.target = Tf(e.props, p), R = e.targetAnchor = m("");
      O ? (d(R, O), a === "svg" || zd(O) ? a = "svg" : (a === "mathml" || Yd(O)) && (a = "mathml")) : process.env.NODE_ENV !== "production" && !y && q("Invalid Teleport target on mount:", O, `(${typeof O})`);
      const D = (L, P) => {
        g & 16 && f(
          E,
          L,
          P,
          i,
          s,
          a,
          o,
          l
        );
      };
      y ? D(n, N) : O && D(O, R);
    } else {
      e.el = t.el;
      const w = e.anchor = t.anchor, N = e.target = t.target, O = e.targetAnchor = t.targetAnchor, R = zs(t.props), D = R ? n : N, L = R ? w : O;
      if (a === "svg" || zd(N) ? a = "svg" : (a === "mathml" || Yd(N)) && (a = "mathml"), b ? (h(
        t.dynamicChildren,
        b,
        D,
        i,
        s,
        a,
        o
      ), Va(t, e, !0)) : l || c(
        t,
        e,
        D,
        L,
        i,
        s,
        a,
        o,
        !1
      ), y)
        R ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Zo(
          e,
          n,
          w,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const P = e.target = Tf(
          e.props,
          p
        );
        P ? Zo(
          e,
          P,
          null,
          u,
          0
        ) : process.env.NODE_ENV !== "production" && q(
          "Invalid Teleport target on update:",
          N,
          `(${typeof N})`
        );
      } else
        R && Zo(
          e,
          N,
          O,
          u,
          1
        );
    }
    Ky(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), a && s(u), o & 16) {
      const d = a || !zs(h);
      for (let p = 0; p < l.length; p++) {
        const m = l[p];
        i(
          m,
          e,
          n,
          d,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: Zo,
  hydrate: qE
};
function Zo(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: f } = t, c = s === 2;
  if (c && r(a, e, n), (!c || zs(f)) && l & 16)
    for (let h = 0; h < u.length; h++)
      i(
        u[h],
        e,
        n,
        2
      );
  c && r(o, e, n);
}
function qE(t, e, n, r, i, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l }
}, u) {
  const f = e.target = Tf(
    e.props,
    l
  );
  if (f) {
    const c = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (zs(e.props))
        e.anchor = u(
          a(t),
          e,
          o(t),
          n,
          r,
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
          n,
          r,
          i,
          s
        );
      }
    Ky(e);
  }
  return e.anchor && a(e.anchor);
}
const Xy = WE;
function Ky(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n && n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const Ue = Symbol.for("v-fgt"), So = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), Nl = Symbol.for("v-stc"), Ga = [];
let zn = null;
function A(t = !1) {
  Ga.push(zn = t ? null : []);
}
function HE() {
  Ga.pop(), zn = Ga[Ga.length - 1] || null;
}
let ro = 1;
function Xd(t) {
  ro += t;
}
function Zy(t) {
  return t.dynamicChildren = ro > 0 ? zn || Bs : null, HE(), ro > 0 && zn && zn.push(t), t;
}
function V(t, e, n, r, i, s) {
  return Zy(
    C(
      t,
      e,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function Fe(t, e, n, r, i) {
  return Zy(
    ee(
      t,
      e,
      n,
      r,
      i,
      !0
    )
  );
}
function na(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Zi(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && Ps.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const zE = (...t) => Qy(
  ...t
), Jy = ({ key: t }) => t != null ? t : null, Ll = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? it(t) || Ye(t) || ge(t) ? { i: ht, r: t, k: e, f: !!n } : t : null);
function C(t, e = null, n = null, r = 0, i = null, s = t === Ue ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Jy(e),
    ref: e && Ll(e),
    scopeId: wy,
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
    ctx: ht
  };
  return o ? (Ph(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= it(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), ro > 0 && !a && zn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && zn.push(l), l;
}
const ee = process.env.NODE_ENV !== "production" ? zE : Qy;
function Qy(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === K1) && (process.env.NODE_ENV !== "production" && !t && q(`Invalid vnode type when creating vnode: ${t}.`), t = Nt), na(t)) {
    const o = _r(
      t,
      e,
      !0
    );
    return n && Ph(o, n), ro > 0 && !s && zn && (o.shapeFlag & 6 ? zn[zn.indexOf(t)] = o : zn.push(o)), o.patchFlag |= -2, o;
  }
  if (rv(t) && (t = t.__vccOpts), e) {
    e = YE(e);
    let { class: o, style: l } = e;
    o && !it(o) && (e.class = Pe(o)), Be(l) && (Kl(l) && !le(l) && (l = et({}, l)), e.style = Ci(l));
  }
  const a = it(t) ? 1 : Z1(t) ? 128 : BE(t) ? 64 : Be(t) ? 4 : ge(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Kl(t) && (t = be(t), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), C(
    t,
    e,
    n,
    r,
    i,
    a,
    s,
    !0
  );
}
function YE(t) {
  return t ? Kl(t) || jy(t) ? et({}, t) : t : null;
}
function _r(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: a } = t, o = e ? XE(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && Jy(o),
    ref: e && e.ref ? n && i ? le(i) ? i.concat(Ll(e)) : [i, Ll(e)] : Ll(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && le(a) ? a.map(ev) : a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Ue ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && _r(t.ssContent),
    ssFallback: t.ssFallback && _r(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function ev(t) {
  const e = _r(t);
  return le(t.children) && (e.children = t.children.map(ev)), e;
}
function io(t = " ", e = 0) {
  return ee(So, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (A(), Fe(Nt, null, t)) : ee(Nt, null, t);
}
function qn(t) {
  return t == null || typeof t == "boolean" ? ee(Nt) : le(t) ? ee(
    Ue,
    null,
    t.slice()
  ) : typeof t == "object" ? oi(t) : ee(So, null, String(t));
}
function oi(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : _r(t);
}
function Ph(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (le(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Ph(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !jy(e) ? e._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    ge(e) ? (e = { default: e, _ctx: ht }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [io(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function XE(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Pe([e.class, r.class]));
      else if (i === "style")
        e.style = Ci([e.style, r.style]);
      else if (vo(i)) {
        const s = e[i], a = r[i];
        a && s !== a && !(le(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function nr(t, e, n, r = null) {
  Ln(t, e, 7, [
    n,
    r
  ]);
}
const KE = $y();
let ZE = 0;
function JE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || KE, s = {
    uid: ZE++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Wg(
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
    propsOptions: By(r, i),
    emitsOptions: Sy(r, i),
    emit: null,
    emitted: null,
    propsDefaults: Je,
    inheritAttrs: r.inheritAttrs,
    ctx: Je,
    data: Je,
    props: Je,
    attrs: Je,
    slots: Je,
    refs: Je,
    setupState: Je,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = mE(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = B1.bind(null, s), t.ce && t.ce(s), s;
}
let wt = null;
const wo = () => wt || ht;
let ru, Nf;
{
  const t = Fu(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  ru = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Nf = e(
    "__VUE_SSR_SETTERS__",
    (n) => Hu = n
  );
}
const xo = (t) => {
  const e = wt;
  return ru(t), t.scope.on(), () => {
    t.scope.off(), ru(e);
  };
}, Kd = () => {
  wt && wt.scope.off(), ru(null);
}, QE = /* @__PURE__ */ Hr("slot,component");
function Lf(t, { isNativeTag: e }) {
  (QE(t) || e(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function tv(t) {
  return t.vnode.shapeFlag & 4;
}
let Hu = !1;
function eS(t, e = !1) {
  e && Nf(e);
  const { props: n, children: r } = t.vnode, i = tv(t);
  TE(t, n, i, e), RE(t, r);
  const s = i ? tS(t, e) : void 0;
  return e && Nf(!1), s;
}
function tS(t, e) {
  var n;
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Lf(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let a = 0; a < s.length; a++)
        Lf(s[a], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let a = 0; a < s.length; a++)
        Ty(s[a]);
    }
    r.compilerOptions && nS() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Iy), process.env.NODE_ENV !== "production" && gE(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? iS(t) : null, a = xo(t);
    zr();
    const o = $r(
      i,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? Rr(t.props) : t.props,
        s
      ]
    );
    if (Yr(), a(), dh(o)) {
      if (o.then(Kd, Kd), e)
        return o.then((l) => {
          Zd(t, l, e);
        }).catch((l) => {
          _o(l, t, 0);
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Zd(t, o, e);
  } else
    nv(t, e);
}
function Zd(t, e, n) {
  ge(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Be(e) ? (process.env.NODE_ENV !== "production" && na(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = fy(e), process.env.NODE_ENV !== "production" && yE(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), nv(t, n);
}
let Cf;
const nS = () => !Cf;
function nv(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Cf && !r.render) {
      const i = r.template || Ch(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Pr(t, "compile");
        const { isCustomElement: s, compilerOptions: a } = t.appContext.config, { delimiters: o, compilerOptions: l } = r, u = et(
          et(
            {
              isCustomElement: s,
              delimiters: o
            },
            a
          ),
          l
        );
        r.render = Cf(i, u), process.env.NODE_ENV !== "production" && Dr(t, "compile");
      }
    }
    t.render = r.render || vt;
  }
  {
    const i = xo(t);
    zr();
    try {
      _E(t);
    } finally {
      Yr(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && t.render === vt && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const Jd = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return Ql(), It(t, "get", ""), t[e];
  },
  set() {
    return q("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return q("setupContext.attrs is readonly."), !1;
  }
} : {
  get(t, e) {
    return It(t, "get", ""), t[e];
  }
};
function rS(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return It(t, "get", "$slots"), e[n];
    }
  }));
}
function iS(t) {
  const e = (n) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && q("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (le(n) ? r = "array" : Ye(n) && (r = "ref")), r !== "object" && q(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    t.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(t.attrs, Jd));
      },
      get slots() {
        return rS(t);
      },
      get emit() {
        return (r, ...i) => t.emit(r, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, Jd),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function zu(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(fy(mi(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in as)
          return as[n](t);
      },
      has(e, n) {
        return n in e || n in as;
      }
    }));
}
const sS = /(?:^|[-_])(\w)/g, aS = (t) => t.replace(sS, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Dh(t, e = !0) {
  return ge(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Yu(t, e, n = !1) {
  let r = Dh(e);
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
    r = i(
      t.components || t.parent.type.components
    ) || i(t.appContext.components);
  }
  return r ? aS(r) : n ? "App" : "Anonymous";
}
function rv(t) {
  return ge(t) && "__vccOpts" in t;
}
const fe = (t, e) => {
  const n = g1(t, e, Hu);
  if (process.env.NODE_ENV !== "production") {
    const r = wo();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function iv(t, e, n) {
  const r = arguments.length;
  return r === 2 ? Be(e) && !le(e) ? na(e) ? ee(t, null, [e]) : ee(t, e) : ee(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && na(n) && (n = [n]), ee(t, e, n));
}
function oS() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
    header(c) {
      return Be(c) ? c.__isVue ? ["div", t, "VueInstance"] : Ye(c) ? [
        "div",
        {},
        ["span", t, f(c)],
        "<",
        o(c.value),
        ">"
      ] : hr(c) ? [
        "div",
        {},
        ["span", t, is(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${cs(c) ? " (readonly)" : ""}`
      ] : cs(c) ? [
        "div",
        {},
        ["span", t, is(c) ? "ShallowReadonly" : "Readonly"],
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
    c.type.props && c.props && h.push(a("props", be(c.props))), c.setupState !== Je && h.push(a("setup", c.setupState)), c.data !== Je && h.push(a("data", be(c.data)));
    const d = l(c, "computed");
    d && h.push(a("computed", d));
    const p = l(c, "inject");
    return p && h.push(a("injected", p)), h.push([
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
    return h = et({}, h), Object.keys(h).length ? [
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
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : Be(c) ? ["object", { object: h ? be(c) : c }] : ["span", n, String(c)];
  }
  function l(c, h) {
    const d = c.type;
    if (ge(d))
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
    return is(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Qd = "3.4.25", Ei = process.env.NODE_ENV !== "production" ? q : vt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const lS = "http://www.w3.org/2000/svg", uS = "http://www.w3.org/1998/Math/MathML", li = typeof document < "u" ? document : null, ep = li && /* @__PURE__ */ li.createElement("template"), cS = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? li.createElementNS(lS, t) : e === "mathml" ? li.createElementNS(uS, t) : li.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => li.createTextNode(t),
  createComment: (t) => li.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => li.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  insertStaticContent(t, e, n, r, i, s) {
    const a = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      ep.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
      const o = ep.content;
      if (r === "svg" || r === "mathml") {
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
}, Qr = "transition", ga = "animation", so = Symbol("_vtc"), Xu = (t, { slots: e }) => iv(iE, fS(t), e);
Xu.displayName = "Transition";
const sv = {
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
Xu.props = /* @__PURE__ */ et(
  {},
  Ny,
  sv
);
const Gi = (t, e = []) => {
  le(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, tp = (t) => t ? le(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function fS(t) {
  const e = {};
  for (const I in t)
    I in sv || (e[I] = t[I]);
  if (t.css === !1)
    return e;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: o = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = a,
    appearToClass: f = o,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = t, p = hS(i), m = p && p[0], v = p && p[1], {
    onBeforeEnter: y,
    onEnter: g,
    onEnterCancelled: E,
    onLeave: b,
    onLeaveCancelled: w,
    onBeforeAppear: N = y,
    onAppear: O = g,
    onAppearCancelled: R = E
  } = e, D = (I, J, pe) => {
    ji(I, J ? f : o), ji(I, J ? u : a), pe && pe();
  }, L = (I, J) => {
    I._isLeaving = !1, ji(I, c), ji(I, d), ji(I, h), J && J();
  }, P = (I) => (J, pe) => {
    const T = I ? O : g, $ = () => D(J, I, pe);
    Gi(T, [J, $]), np(() => {
      ji(J, I ? l : s), ei(J, I ? f : o), tp(T) || rp(J, r, m, $);
    });
  };
  return et(e, {
    onBeforeEnter(I) {
      Gi(y, [I]), ei(I, s), ei(I, a);
    },
    onBeforeAppear(I) {
      Gi(N, [I]), ei(I, l), ei(I, u);
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(I, J) {
      I._isLeaving = !0;
      const pe = () => L(I, J);
      ei(I, c), ei(I, h), mS(), np(() => {
        !I._isLeaving || (ji(I, c), ei(I, d), tp(b) || rp(I, r, v, pe));
      }), Gi(b, [I, pe]);
    },
    onEnterCancelled(I) {
      D(I, !1), Gi(E, [I]);
    },
    onAppearCancelled(I) {
      D(I, !0), Gi(R, [I]);
    },
    onLeaveCancelled(I) {
      L(I), Gi(w, [I]);
    }
  });
}
function hS(t) {
  if (t == null)
    return null;
  if (Be(t))
    return [_c(t.enter), _c(t.leave)];
  {
    const e = _c(t);
    return [e, e];
  }
}
function _c(t) {
  const e = cf(t);
  return process.env.NODE_ENV !== "production" && O1(e, "<transition> explicit duration"), e;
}
function ei(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[so] || (t[so] = /* @__PURE__ */ new Set())).add(e);
}
function ji(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[so];
  n && (n.delete(e), n.size || (t[so] = void 0));
}
function np(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let dS = 0;
function rp(t, e, n, r) {
  const i = t._endId = ++dS, s = () => {
    i === t._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: o, propCount: l } = pS(t, e);
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
function pS(t, e) {
  const n = window.getComputedStyle(t), r = (p) => (n[p] || "").split(", "), i = r(`${Qr}Delay`), s = r(`${Qr}Duration`), a = ip(i, s), o = r(`${ga}Delay`), l = r(`${ga}Duration`), u = ip(o, l);
  let f = null, c = 0, h = 0;
  e === Qr ? a > 0 && (f = Qr, c = a, h = s.length) : e === ga ? u > 0 && (f = ga, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? Qr : ga : null, h = f ? f === Qr ? s.length : l.length : 0);
  const d = f === Qr && /\b(transform|all)(,|$)/.test(
    r(`${Qr}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: h,
    hasTransform: d
  };
}
function ip(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => sp(n) + sp(t[r])));
}
function sp(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function mS() {
  return document.body.offsetHeight;
}
function gS(t, e, n) {
  const r = t[so];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const ap = Symbol("_vod"), yS = Symbol("_vsh");
process.env.NODE_ENV;
const vS = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), _S = /(^|;)\s*display\s*:/;
function bS(t, e, n) {
  const r = t.style, i = it(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (it(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Cl(r, o, "");
        }
      else
        for (const a in e)
          n[a] == null && Cl(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), Cl(r, a, n[a]);
  } else if (i) {
    if (e !== n) {
      const a = r[vS];
      a && (n += ";" + a), r.cssText = n, s = _S.test(n);
    }
  } else
    e && t.removeAttribute("style");
  ap in t && (t[ap] = s ? r.display : "", t[yS] && (r.display = "none"));
}
const ES = /[^\\];\s*$/, op = /\s*!important$/;
function Cl(t, e, n) {
  if (le(n))
    n.forEach((r) => Cl(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && ES.test(n) && Ei(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = SS(t, e);
    op.test(n) ? t.setProperty(
      un(r),
      n.replace(op, ""),
      "important"
    ) : t[r] = n;
  }
}
const lp = ["Webkit", "Moz", "ms"], bc = {};
function SS(t, e) {
  const n = bc[e];
  if (n)
    return n;
  let r = gn(e);
  if (r !== "filter" && r in t)
    return bc[e] = r;
  r = us(r);
  for (let i = 0; i < lp.length; i++) {
    const s = lp[i] + r;
    if (s in t)
      return bc[e] = s;
  }
  return e;
}
const up = "http://www.w3.org/1999/xlink";
function wS(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(up, e.slice(6, e.length)) : t.setAttributeNS(up, e, n);
  else {
    const s = qb(e);
    n == null || s && !Ug(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function xS(t, e, n, r, i, s, a) {
  if (e === "innerHTML" || e === "textContent") {
    r && a(r, i, s), t[e] = n == null ? "" : n;
    return;
  }
  const o = t.tagName;
  if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const u = o === "OPTION" ? t.getAttribute("value") || "" : t.value, f = n == null ? "" : n;
    (u !== f || !("_value" in t)) && (t.value = f), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof t[e];
    u === "boolean" ? n = Ug(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && Ei(
      `Failed setting prop "${e}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  l && t.removeAttribute(e);
}
function OS(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function MS(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const cp = Symbol("_vei");
function TS(t, e, n, r, i = null) {
  const s = t[cp] || (t[cp] = {}), a = s[e];
  if (r && a)
    a.value = process.env.NODE_ENV !== "production" ? hp(r, e) : r;
  else {
    const [o, l] = NS(e);
    if (r) {
      const u = s[e] = AS(
        process.env.NODE_ENV !== "production" ? hp(r, e) : r,
        i
      );
      OS(t, o, u, l);
    } else
      a && (MS(t, o, a, l), s[e] = void 0);
  }
}
const fp = /(?:Once|Passive|Capture)$/;
function NS(t) {
  let e;
  if (fp.test(t)) {
    e = {};
    let r;
    for (; r = t.match(fp); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : un(t.slice(2)), e];
}
let Ec = 0;
const LS = /* @__PURE__ */ Promise.resolve(), CS = () => Ec || (LS.then(() => Ec = 0), Ec = Date.now());
function AS(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ln(
      PS(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = CS(), n;
}
function hp(t, e) {
  return ge(t) || le(t) ? t : (Ei(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), vt);
}
function PS(t, e) {
  if (le(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return e;
}
const dp = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, DS = (t, e, n, r, i, s, a, o, l) => {
  const u = i === "svg";
  e === "class" ? gS(t, r, u) : e === "style" ? bS(t, n, r) : vo(e) ? Yl(e) || TS(t, e, n, r, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : kS(t, e, r, u)) ? xS(
    t,
    e,
    r,
    s,
    a,
    o,
    l
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), wS(t, e, r, u));
};
function kS(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && dp(e) && ge(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return dp(e) && it(n) ? !1 : e in t;
}
const IS = ["ctrl", "shift", "alt", "meta"], RS = {
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
  exact: (t, e) => IS.some((n) => t[`${n}Key`] && !e.includes(n))
}, ar = (t, e) => {
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = (i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = RS[e[a]];
      if (o && o(i, e))
        return;
    }
    return t(i, ...s);
  });
}, $S = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, or = (t, e) => {
  const n = t._withKeys || (t._withKeys = {}), r = e.join(".");
  return n[r] || (n[r] = (i) => {
    if (!("key" in i))
      return;
    const s = un(i.key);
    if (e.some((a) => a === s || $S[a] === s))
      return t(i);
  });
}, FS = /* @__PURE__ */ et({ patchProp: DS }, cS);
let pp;
function av() {
  return pp || (pp = VE(FS));
}
const mp = (...t) => {
  av().render(...t);
}, VS = (...t) => {
  const e = av().createApp(...t);
  process.env.NODE_ENV !== "production" && (jS(e), US(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = BS(r);
    if (!i)
      return;
    const s = e._component;
    !ge(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const a = n(i, !1, GS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function GS(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function jS(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => jb(e) || Ub(e) || Bb(e),
    writable: !1
  });
}
function US(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        Ei(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return Ei(r), n;
      },
      set() {
        Ei(r);
      }
    });
  }
}
function BS(t) {
  if (it(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && Ei(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && Ei(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
/**
* vue v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function WS() {
  oS();
}
process.env.NODE_ENV !== "production" && WS();
/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */
function hi(t) {
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hi(t);
}
function Af(t, e) {
  return Af = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Af(t, e);
}
function qS() {
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
function Al(t, e, n) {
  return qS() ? Al = Reflect.construct : Al = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && Af(u, a.prototype), u;
  }, Al.apply(null, arguments);
}
function Un(t) {
  return HS(t) || zS(t) || YS(t) || XS();
}
function HS(t) {
  if (Array.isArray(t))
    return Pf(t);
}
function zS(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function YS(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Pf(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Pf(t, e);
  }
}
function Pf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function XS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var KS = Object.hasOwnProperty, gp = Object.setPrototypeOf, ZS = Object.isFrozen, JS = Object.getPrototypeOf, QS = Object.getOwnPropertyDescriptor, en = Object.freeze, kn = Object.seal, ew = Object.create, ov = typeof Reflect < "u" && Reflect, iu = ov.apply, Df = ov.construct;
iu || (iu = function(e, n, r) {
  return e.apply(n, r);
});
en || (en = function(e) {
  return e;
});
kn || (kn = function(e) {
  return e;
});
Df || (Df = function(e, n) {
  return Al(e, Un(n));
});
var tw = In(Array.prototype.forEach), yp = In(Array.prototype.pop), ya = In(Array.prototype.push), Pl = In(String.prototype.toLowerCase), Sc = In(String.prototype.toString), vp = In(String.prototype.match), $n = In(String.prototype.replace), nw = In(String.prototype.indexOf), rw = In(String.prototype.trim), Ft = In(RegExp.prototype.test), wc = iw(TypeError);
function In(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return iu(t, e, r);
  };
}
function iw(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return Df(t, n);
  };
}
function Ce(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Pl, gp && gp(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var a = n(s);
      a !== s && (ZS(e) || (e[i] = a), s = a);
    }
    t[s] = !0;
  }
  return t;
}
function Ui(t) {
  var e = ew(null), n;
  for (n in t)
    iu(KS, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function Jo(t, e) {
  for (; t !== null; ) {
    var n = QS(t, e);
    if (n) {
      if (n.get)
        return In(n.get);
      if (typeof n.value == "function")
        return In(n.value);
    }
    t = JS(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var _p = en(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xc = en(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Oc = en(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sw = en(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Mc = en(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), aw = en(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bp = en(["#text"]), Ep = en(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Tc = en(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sp = en(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qo = en(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ow = kn(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lw = kn(/<%[\w\W]*|[\w\W]*%>/gm), uw = kn(/\${[\w\W]*}/gm), cw = kn(/^data-[\-\w.\u00B7-\uFFFF]/), fw = kn(/^aria-[\-\w]+$/), hw = kn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), dw = kn(/^(?:\w+script|data):/i), pw = kn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), mw = kn(/^html$/i), gw = kn(/^[a-z][.\w]*(-[.\w]+)+$/i), yw = function() {
  return typeof window > "u" ? null : window;
}, vw = function(e, n) {
  if (hi(e) !== "object" || typeof e.createPolicy != "function")
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
function lv() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yw(), e = function(x) {
    return lv(x);
  };
  if (e.version = "2.5.0", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, p = o.prototype, m = Jo(p, "cloneNode"), v = Jo(p, "nextSibling"), y = Jo(p, "childNodes"), g = Jo(p, "parentNode");
  if (typeof s == "function") {
    var E = r.createElement("template");
    E.content && E.content.ownerDocument && (r = E.content.ownerDocument);
  }
  var b = vw(d, n), w = b ? b.createHTML("") : "", N = r, O = N.implementation, R = N.createNodeIterator, D = N.createDocumentFragment, L = N.getElementsByTagName, P = n.importNode, I = {};
  try {
    I = Ui(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var J = {};
  e.isSupported = typeof g == "function" && O && O.createHTMLDocument !== void 0 && I !== 9;
  var pe = ow, T = lw, $ = uw, z = cw, K = fw, Le = dw, Ae = pw, pt = gw, Rt = hw, Te = null, Lt = Ce({}, [].concat(Un(_p), Un(xc), Un(Oc), Un(Mc), Un(bp))), st = null, Jn = Ce({}, [].concat(Un(Ep), Un(Tc), Un(Sp), Un(Qo))), ke = Object.seal(Object.create(null, {
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
  })), tn = null, Qn = null, Or = !0, Ct = !0, er = !1, Mr = !0, _ = !1, S = !0, k = !1, G = !1, j = !1, W = !1, Z = !1, B = !1, X = !0, U = !1, re = "user-content-", ue = !0, oe = !1, me = {}, xe = null, $e = Ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Qe = null, mt = Ce({}, ["audio", "video", "img", "source", "image", "track"]), zt = null, Tr = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ri = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", bn = "http://www.w3.org/1999/xhtml", ut = bn, nn = !1, Ss = null, J_ = Ce({}, [Ri, tr, bn], Sc), $i, Q_ = ["application/xhtml+xml", "text/html"], eb = "text/html", Ot, ws = null, tb = r.createElement("form"), cd = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, uc = function(x) {
    ws && ws === x || ((!x || hi(x) !== "object") && (x = {}), x = Ui(x), $i = Q_.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? $i = eb : $i = x.PARSER_MEDIA_TYPE, Ot = $i === "application/xhtml+xml" ? Sc : Pl, Te = "ALLOWED_TAGS" in x ? Ce({}, x.ALLOWED_TAGS, Ot) : Lt, st = "ALLOWED_ATTR" in x ? Ce({}, x.ALLOWED_ATTR, Ot) : Jn, Ss = "ALLOWED_NAMESPACES" in x ? Ce({}, x.ALLOWED_NAMESPACES, Sc) : J_, zt = "ADD_URI_SAFE_ATTR" in x ? Ce(
      Ui(Tr),
      x.ADD_URI_SAFE_ATTR,
      Ot
    ) : Tr, Qe = "ADD_DATA_URI_TAGS" in x ? Ce(
      Ui(mt),
      x.ADD_DATA_URI_TAGS,
      Ot
    ) : mt, xe = "FORBID_CONTENTS" in x ? Ce({}, x.FORBID_CONTENTS, Ot) : $e, tn = "FORBID_TAGS" in x ? Ce({}, x.FORBID_TAGS, Ot) : {}, Qn = "FORBID_ATTR" in x ? Ce({}, x.FORBID_ATTR, Ot) : {}, me = "USE_PROFILES" in x ? x.USE_PROFILES : !1, Or = x.ALLOW_ARIA_ATTR !== !1, Ct = x.ALLOW_DATA_ATTR !== !1, er = x.ALLOW_UNKNOWN_PROTOCOLS || !1, Mr = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _ = x.SAFE_FOR_TEMPLATES || !1, S = x.SAFE_FOR_XML !== !1, k = x.WHOLE_DOCUMENT || !1, W = x.RETURN_DOM || !1, Z = x.RETURN_DOM_FRAGMENT || !1, B = x.RETURN_TRUSTED_TYPE || !1, j = x.FORCE_BODY || !1, X = x.SANITIZE_DOM !== !1, U = x.SANITIZE_NAMED_PROPS || !1, ue = x.KEEP_CONTENT !== !1, oe = x.IN_PLACE || !1, Rt = x.ALLOWED_URI_REGEXP || Rt, ut = x.NAMESPACE || bn, ke = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && cd(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ke.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && cd(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ke.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _ && (Ct = !1), Z && (W = !0), me && (Te = Ce({}, Un(bp)), st = [], me.html === !0 && (Ce(Te, _p), Ce(st, Ep)), me.svg === !0 && (Ce(Te, xc), Ce(st, Tc), Ce(st, Qo)), me.svgFilters === !0 && (Ce(Te, Oc), Ce(st, Tc), Ce(st, Qo)), me.mathMl === !0 && (Ce(Te, Mc), Ce(st, Sp), Ce(st, Qo))), x.ADD_TAGS && (Te === Lt && (Te = Ui(Te)), Ce(Te, x.ADD_TAGS, Ot)), x.ADD_ATTR && (st === Jn && (st = Ui(st)), Ce(st, x.ADD_ATTR, Ot)), x.ADD_URI_SAFE_ATTR && Ce(zt, x.ADD_URI_SAFE_ATTR, Ot), x.FORBID_CONTENTS && (xe === $e && (xe = Ui(xe)), Ce(xe, x.FORBID_CONTENTS, Ot)), ue && (Te["#text"] = !0), k && Ce(Te, ["html", "head", "body"]), Te.table && (Ce(Te, ["tbody"]), delete tn.tbody), en && en(x), ws = x);
  }, fd = Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), hd = Ce({}, ["foreignobject", "desc", "title", "annotation-xml"]), nb = Ce({}, ["title", "style", "font", "a", "script"]), jo = Ce({}, xc);
  Ce(jo, Oc), Ce(jo, sw);
  var cc = Ce({}, Mc);
  Ce(cc, aw);
  var rb = function(x) {
    var Y = g(x);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: ut,
      tagName: "template"
    });
    var ie = Pl(x.tagName), Ve = Pl(Y.tagName);
    return Ss[x.namespaceURI] ? x.namespaceURI === tr ? Y.namespaceURI === bn ? ie === "svg" : Y.namespaceURI === Ri ? ie === "svg" && (Ve === "annotation-xml" || fd[Ve]) : Boolean(jo[ie]) : x.namespaceURI === Ri ? Y.namespaceURI === bn ? ie === "math" : Y.namespaceURI === tr ? ie === "math" && hd[Ve] : Boolean(cc[ie]) : x.namespaceURI === bn ? Y.namespaceURI === tr && !hd[Ve] || Y.namespaceURI === Ri && !fd[Ve] ? !1 : !cc[ie] && (nb[ie] || !jo[ie]) : !!($i === "application/xhtml+xml" && Ss[x.namespaceURI]) : !1;
  }, Rn = function(x) {
    ya(e.removed, {
      element: x
    });
    try {
      x.parentNode.removeChild(x);
    } catch {
      try {
        x.outerHTML = w;
      } catch {
        x.remove();
      }
    }
  }, fc = function(x, Y) {
    try {
      ya(e.removed, {
        attribute: Y.getAttributeNode(x),
        from: Y
      });
    } catch {
      ya(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(x), x === "is" && !st[x])
      if (W || Z)
        try {
          Rn(Y);
        } catch {
        }
      else
        try {
          Y.setAttribute(x, "");
        } catch {
        }
  }, dd = function(x) {
    var Y, ie;
    if (j)
      x = "<remove></remove>" + x;
    else {
      var Ve = vp(x, /^[\r\n\t ]+/);
      ie = Ve && Ve[0];
    }
    $i === "application/xhtml+xml" && ut === bn && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    var rn = b ? b.createHTML(x) : x;
    if (ut === bn)
      try {
        Y = new h().parseFromString(rn, $i);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = O.createDocument(ut, "template", null);
      try {
        Y.documentElement.innerHTML = nn ? w : rn;
      } catch {
      }
    }
    var $t = Y.body || Y.documentElement;
    return x && ie && $t.insertBefore(r.createTextNode(ie), $t.childNodes[0] || null), ut === bn ? L.call(Y, k ? "html" : "body")[0] : k ? Y.documentElement : $t;
  }, pd = function(x) {
    return R.call(
      x.ownerDocument || x,
      x,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ib = function(x) {
    return x instanceof c && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof f) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, da = function(x) {
    return hi(a) === "object" ? x instanceof a : x && hi(x) === "object" && typeof x.nodeType == "number" && typeof x.nodeName == "string";
  }, Nr = function(x, Y, ie) {
    !J[x] || tw(J[x], function(Ve) {
      Ve.call(e, Y, ie, ws);
    });
  }, md = function(x) {
    var Y;
    if (Nr("beforeSanitizeElements", x, null), ib(x) || Ft(/[\u0080-\uFFFF]/, x.nodeName))
      return Rn(x), !0;
    var ie = Ot(x.nodeName);
    if (Nr("uponSanitizeElement", x, {
      tagName: ie,
      allowedTags: Te
    }), x.hasChildNodes() && !da(x.firstElementChild) && (!da(x.content) || !da(x.content.firstElementChild)) && Ft(/<[/\w]/g, x.innerHTML) && Ft(/<[/\w]/g, x.textContent) || ie === "select" && Ft(/<template/i, x.innerHTML) || x.nodeType === 7 || S && x.nodeType === 8 && Ft(/<[/\w]/g, x.data))
      return Rn(x), !0;
    if (!Te[ie] || tn[ie]) {
      if (!tn[ie] && yd(ie) && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, ie) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(ie)))
        return !1;
      if (ue && !xe[ie]) {
        var Ve = g(x) || x.parentNode, rn = y(x) || x.childNodes;
        if (rn && Ve)
          for (var $t = rn.length, At = $t - 1; At >= 0; --At)
            Ve.insertBefore(m(rn[At], !0), v(x));
      }
      return Rn(x), !0;
    }
    return x instanceof o && !rb(x) || (ie === "noscript" || ie === "noembed" || ie === "noframes") && Ft(/<\/no(script|embed|frames)/i, x.innerHTML) ? (Rn(x), !0) : (_ && x.nodeType === 3 && (Y = x.textContent, Y = $n(Y, pe, " "), Y = $n(Y, T, " "), Y = $n(Y, $, " "), x.textContent !== Y && (ya(e.removed, {
      element: x.cloneNode()
    }), x.textContent = Y)), Nr("afterSanitizeElements", x, null), !1);
  }, gd = function(x, Y, ie) {
    if (X && (Y === "id" || Y === "name") && (ie in r || ie in tb))
      return !1;
    if (!(Ct && !Qn[Y] && Ft(z, Y))) {
      if (!(Or && Ft(K, Y))) {
        if (!st[Y] || Qn[Y]) {
          if (!(yd(x) && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, x) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(x)) && (ke.attributeNameCheck instanceof RegExp && Ft(ke.attributeNameCheck, Y) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(Y)) || Y === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, ie) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(ie))))
            return !1;
        } else if (!zt[Y]) {
          if (!Ft(Rt, $n(ie, Ae, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && x !== "script" && nw(ie, "data:") === 0 && Qe[x])) {
              if (!(er && !Ft(Le, $n(ie, Ae, "")))) {
                if (ie)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, yd = function(x) {
    return x !== "annotation-xml" && vp(x, pt);
  }, vd = function(x) {
    var Y, ie, Ve, rn;
    Nr("beforeSanitizeAttributes", x, null);
    var $t = x.attributes;
    if (!!$t) {
      var At = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: st
      };
      for (rn = $t.length; rn--; ) {
        Y = $t[rn];
        var Uo = Y, Mt = Uo.name, hc = Uo.namespaceURI;
        if (ie = Mt === "value" ? Y.value : rw(Y.value), Ve = Ot(Mt), At.attrName = Ve, At.attrValue = ie, At.keepAttr = !0, At.forceKeepAttr = void 0, Nr("uponSanitizeAttribute", x, At), ie = At.attrValue, !At.forceKeepAttr && (fc(Mt, x), !!At.keepAttr)) {
          if (!Mr && Ft(/\/>/i, ie)) {
            fc(Mt, x);
            continue;
          }
          _ && (ie = $n(ie, pe, " "), ie = $n(ie, T, " "), ie = $n(ie, $, " "));
          var _d = Ot(x.nodeName);
          if (!!gd(_d, Ve, ie)) {
            if (U && (Ve === "id" || Ve === "name") && (fc(Mt, x), ie = re + ie), b && hi(d) === "object" && typeof d.getAttributeType == "function" && !hc)
              switch (d.getAttributeType(_d, Ve)) {
                case "TrustedHTML": {
                  ie = b.createHTML(ie);
                  break;
                }
                case "TrustedScriptURL": {
                  ie = b.createScriptURL(ie);
                  break;
                }
              }
            try {
              hc ? x.setAttributeNS(hc, Mt, ie) : x.setAttribute(Mt, ie), yp(e.removed);
            } catch {
            }
          }
        }
      }
      Nr("afterSanitizeAttributes", x, null);
    }
  }, sb = function ce(x) {
    var Y, ie = pd(x);
    for (Nr("beforeSanitizeShadowDOM", x, null); Y = ie.nextNode(); )
      Nr("uponSanitizeShadowNode", Y, null), !md(Y) && (Y.content instanceof i && ce(Y.content), vd(Y));
    Nr("afterSanitizeShadowDOM", x, null);
  };
  return e.sanitize = function(ce) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y, ie, Ve, rn, $t;
    if (nn = !ce, nn && (ce = "<!-->"), typeof ce != "string" && !da(ce))
      if (typeof ce.toString == "function") {
        if (ce = ce.toString(), typeof ce != "string")
          throw wc("dirty is not a string, aborting");
      } else
        throw wc("toString is not a function");
    if (!e.isSupported) {
      if (hi(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (da(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (G || uc(x), e.removed = [], typeof ce == "string" && (oe = !1), oe) {
      if (ce.nodeName) {
        var At = Ot(ce.nodeName);
        if (!Te[At] || tn[At])
          throw wc("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      Y = dd("<!---->"), ie = Y.ownerDocument.importNode(ce, !0), ie.nodeType === 1 && ie.nodeName === "BODY" || ie.nodeName === "HTML" ? Y = ie : Y.appendChild(ie);
    else {
      if (!W && !_ && !k && ce.indexOf("<") === -1)
        return b && B ? b.createHTML(ce) : ce;
      if (Y = dd(ce), !Y)
        return W ? null : B ? w : "";
    }
    Y && j && Rn(Y.firstChild);
    for (var Uo = pd(oe ? ce : Y); Ve = Uo.nextNode(); )
      Ve.nodeType === 3 && Ve === rn || md(Ve) || (Ve.content instanceof i && sb(Ve.content), vd(Ve), rn = Ve);
    if (rn = null, oe)
      return ce;
    if (W) {
      if (Z)
        for ($t = D.call(Y.ownerDocument); Y.firstChild; )
          $t.appendChild(Y.firstChild);
      else
        $t = Y;
      return (st.shadowroot || st.shadowrootmod) && ($t = P.call(n, $t, !0)), $t;
    }
    var Mt = k ? Y.outerHTML : Y.innerHTML;
    return k && Te["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Ft(mw, Y.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + Mt), _ && (Mt = $n(Mt, pe, " "), Mt = $n(Mt, T, " "), Mt = $n(Mt, $, " ")), b && B ? b.createHTML(Mt) : Mt;
  }, e.setConfig = function(ce) {
    uc(ce), G = !0;
  }, e.clearConfig = function() {
    ws = null, G = !1;
  }, e.isValidAttribute = function(ce, x, Y) {
    ws || uc({});
    var ie = Ot(ce), Ve = Ot(x);
    return gd(ie, Ve, Y);
  }, e.addHook = function(ce, x) {
    typeof x == "function" && (J[ce] = J[ce] || [], ya(J[ce], x));
  }, e.removeHook = function(ce) {
    if (J[ce])
      return yp(J[ce]);
  }, e.removeHooks = function(ce) {
    J[ce] && (J[ce] = []);
  }, e.removeAllHooks = function() {
    J = {};
  }, e;
}
var _w = lv();
function bw(t, e) {
  var i;
  const n = (i = t.hooks) != null ? i : {};
  let r;
  for (r in n) {
    const s = n[r];
    s !== void 0 && e.addHook(r, s);
  }
}
function uv() {
  return _w();
}
function Ew(t = {}, e = uv) {
  const n = e();
  bw(t, n);
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
const Sw = {
  install(t, e = {}, n = uv) {
    t.directive(
      "dompurify-html",
      Ew(e, n)
    );
  }
};
var kh = !1;
function el(t, e, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), n) : (t[e] = n, n);
}
function Nc(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function ww() {
  return cv().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function cv() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const xw = typeof Proxy == "function", Ow = "devtools-plugin:setup", Mw = "plugin:settings:set";
let xs, kf;
function Tw() {
  var t;
  return xs !== void 0 || (typeof window < "u" && window.performance ? (xs = !0, kf = window.performance) : typeof globalThis < "u" && ((t = globalThis.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (xs = !0, kf = globalThis.perf_hooks.performance) : xs = !1), xs;
}
function Nw() {
  return Tw() ? kf.now() : Date.now();
}
class Lw {
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
        return Nw();
      }
    }, n && n.on(Mw, (a, o) => {
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
function fv(t, e) {
  const n = t, r = cv(), i = ww(), s = xw && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(Ow, t, e);
  else {
    const a = s ? new Lw(n, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
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
let Ma;
const ao = (t) => Ma = t, hv = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function hs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var dr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(dr || (dr = {}));
const Ku = typeof window < "u", ja = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Ku, wp = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Cw(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function Ih(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    mv(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function dv(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Dl(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const kl = typeof navigator == "object" ? navigator : { userAgent: "" }, pv = /* @__PURE__ */ (() => /Macintosh/.test(kl.userAgent) && /AppleWebKit/.test(kl.userAgent) && !/Safari/.test(kl.userAgent))(), mv = Ku ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !pv ? Aw : "msSaveOrOpenBlob" in kl ? Pw : Dw : () => {
};
function Aw(t, e = "download", n) {
  const r = document.createElement("a");
  r.download = e, r.rel = "noopener", typeof t == "string" ? (r.href = t, r.origin !== location.origin ? dv(r.href) ? Ih(t, e, n) : (r.target = "_blank", Dl(r)) : Dl(r)) : (r.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Dl(r);
  }, 0));
}
function Pw(t, e = "download", n) {
  if (typeof t == "string")
    if (dv(t))
      Ih(t, e, n);
    else {
      const r = document.createElement("a");
      r.href = t, r.target = "_blank", setTimeout(function() {
        Dl(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Cw(t, n), e);
}
function Dw(t, e, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
    return Ih(t, e, n);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(wp.HTMLElement)) || "safari" in wp, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || pv) && typeof FileReader < "u") {
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
function Tt(t, e) {
  const n = "\u{1F34D} " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, e) : e === "error" ? console.error(n) : e === "warn" ? console.warn(n) : console.log(n);
}
function Rh(t) {
  return "_a" in t && "install" in t;
}
function gv() {
  if (!("clipboard" in navigator))
    return Tt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function yv(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Tt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function kw(t) {
  if (!gv())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Tt("Global state copied to clipboard.");
    } catch (e) {
      if (yv(e))
        return;
      Tt("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function Iw(t) {
  if (!gv())
    try {
      vv(t, JSON.parse(await navigator.clipboard.readText())), Tt("Global state pasted from clipboard.");
    } catch (e) {
      if (yv(e))
        return;
      Tt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function Rw(t) {
  try {
    mv(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Tt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Lr;
function $w() {
  Lr || (Lr = document.createElement("input"), Lr.type = "file", Lr.accept = ".json");
  function t() {
    return new Promise((e, n) => {
      Lr.onchange = async () => {
        const r = Lr.files;
        if (!r)
          return e(null);
        const i = r.item(0);
        return e(i ? { text: await i.text(), file: i } : null);
      }, Lr.oncancel = () => e(null), Lr.onerror = n, Lr.click();
    });
  }
  return t;
}
async function Fw(t) {
  try {
    const n = await $w()();
    if (!n)
      return;
    const { text: r, file: i } = n;
    vv(t, JSON.parse(r)), Tt(`Global state imported from "${i.name}".`);
  } catch (e) {
    Tt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function vv(t, e) {
  for (const n in e) {
    const r = t.state.value[n];
    r ? Object.assign(r, e[n]) : t.state.value[n] = e[n];
  }
}
function Bn(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const _v = "\u{1F34D} Pinia (root)", If = "_root";
function Vw(t) {
  return Rh(t) ? {
    id: If,
    label: _v
  } : {
    id: t.$id,
    label: t.$id
  };
}
function Gw(t) {
  if (Rh(t)) {
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
function jw(t) {
  return t ? Array.isArray(t) ? t.reduce((e, n) => (e.keys.push(n.key), e.operations.push(n.type), e.oldValue[n.key] = n.oldValue, e.newValue[n.key] = n.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Bn(t.type),
    key: Bn(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function Uw(t) {
  switch (t) {
    case dr.direct:
      return "mutation";
    case dr.patchFunction:
      return "$patch";
    case dr.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Rs = !0;
const Il = [], Xi = "pinia:mutations", jt = "pinia", { assign: Bw } = Object, su = (t) => "\u{1F34D} " + t;
function Ww(t, e) {
  fv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Il,
    app: t
  }, (n) => {
    typeof n.now != "function" && Tt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Xi,
      label: "Pinia \u{1F34D}",
      color: 15064968
    }), n.addInspector({
      id: jt,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            kw(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Iw(e), n.sendInspectorTree(jt), n.sendInspectorState(jt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Rw(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Fw(e), n.sendInspectorTree(jt), n.sendInspectorState(jt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const i = e._s.get(r);
            i ? typeof i.$reset != "function" ? Tt(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (i.$reset(), Tt(`Store "${r}" reset.`)) : Tt(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, i) => {
      const s = r.componentInstance && r.componentInstance.proxy;
      if (s && s._pStores) {
        const a = r.componentInstance.proxy._pStores;
        Object.values(a).forEach((o) => {
          r.instanceData.state.push({
            type: su(o.$id),
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
          }), o._getters && o._getters.length && r.instanceData.state.push({
            type: su(o.$id),
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
      if (r.app === t && r.inspectorId === jt) {
        let i = [e];
        i = i.concat(Array.from(e._s.values())), r.rootNodes = (r.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(r.filter.toLowerCase()) : _v.toLowerCase().includes(r.filter.toLowerCase())) : i).map(Vw);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === t && r.inspectorId === jt) {
        const i = r.nodeId === If ? e : e._s.get(r.nodeId);
        if (!i)
          return;
        i && (r.state = Gw(i));
      }
    }), n.on.editInspectorState((r, i) => {
      if (r.app === t && r.inspectorId === jt) {
        const s = r.nodeId === If ? e : e._s.get(r.nodeId);
        if (!s)
          return Tt(`store "${r.nodeId}" not found`, "error");
        const { path: a } = r;
        Rh(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), Rs = !1, r.set(s, a, r.state.value), Rs = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("\u{1F34D}")) {
        const i = r.type.replace(/^🍍\s*/, ""), s = e._s.get(i);
        if (!s)
          return Tt(`store "${i}" not found`, "error");
        const { path: a } = r;
        if (a[0] !== "state")
          return Tt(`Invalid path for store "${i}":
${a}
Only state can be modified.`);
        a[0] = "$state", Rs = !1, r.set(s, a, r.state.value), Rs = !0;
      }
    });
  });
}
function qw(t, e) {
  Il.includes(su(e.$id)) || Il.push(su(e.$id)), fv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Il,
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
      const f = bv++;
      n.addTimelineEvent({
        layerId: Xi,
        event: {
          time: r(),
          title: "\u{1F6EB} " + l,
          subtitle: "start",
          data: {
            store: Bn(e.$id),
            action: Bn(l),
            args: u
          },
          groupId: f
        }
      }), a((c) => {
        gi = void 0, n.addTimelineEvent({
          layerId: Xi,
          event: {
            time: r(),
            title: "\u{1F6EC} " + l,
            subtitle: "end",
            data: {
              store: Bn(e.$id),
              action: Bn(l),
              args: u,
              result: c
            },
            groupId: f
          }
        });
      }), o((c) => {
        gi = void 0, n.addTimelineEvent({
          layerId: Xi,
          event: {
            time: r(),
            logType: "error",
            title: "\u{1F4A5} " + l,
            subtitle: "end",
            data: {
              store: Bn(e.$id),
              action: Bn(l),
              args: u,
              error: c
            },
            groupId: f
          }
        });
      });
    }, !0), e._customProperties.forEach((a) => {
      tt(() => M(e[a]), (o, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(jt), Rs && n.addTimelineEvent({
          layerId: Xi,
          event: {
            time: r(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: o,
              oldValue: l
            },
            groupId: gi
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: a, type: o }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(jt), !Rs)
        return;
      const u = {
        time: r(),
        title: Uw(o),
        data: Bw({ store: Bn(e.$id) }, jw(a)),
        groupId: gi
      };
      o === dr.patchFunction ? u.subtitle = "\u2935\uFE0F" : o === dr.patchObject ? u.subtitle = "\u{1F9E9}" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Xi,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = mi((a) => {
      i(a), n.addTimelineEvent({
        layerId: Xi,
        event: {
          time: r(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: Bn(e.$id),
            info: Bn("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(jt), n.sendInspectorState(jt);
    });
    const { $dispose: s } = e;
    e.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(jt), n.sendInspectorState(jt), n.getSettings().logStoreChanges && Tt(`Disposed "${e.$id}" store \u{1F5D1}`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(jt), n.sendInspectorState(jt), n.getSettings().logStoreChanges && Tt(`"${e.$id}" store installed \u{1F195}`);
  });
}
let bv = 0, gi;
function xp(t, e, n) {
  const r = e.reduce((i, s) => (i[s] = be(t)[s], i), {});
  for (const i in r)
    t[i] = function() {
      const s = bv, a = n ? new Proxy(t, {
        get(...l) {
          return gi = s, Reflect.get(...l);
        },
        set(...l) {
          return gi = s, Reflect.set(...l);
        }
      }) : t;
      gi = s;
      const o = r[i].apply(a, arguments);
      return gi = void 0, o;
    };
}
function Hw({ app: t, store: e, options: n }) {
  if (e.$id.startsWith("__hot:"))
    return;
  e._isOptionsAPI = !!n.state, xp(e, Object.keys(n.actions), e._isOptionsAPI);
  const r = e._hotUpdate;
  be(e)._hotUpdate = function(i) {
    r.apply(this, arguments), xp(e, Object.keys(i._hmrPayload.actions), !!e._isOptionsAPI);
  }, qw(
    t,
    e
  );
}
function zw() {
  const t = qg(!0), e = t.run(() => _e({}));
  let n = [], r = [];
  const i = mi({
    install(s) {
      ao(i), i._a = s, s.provide(hv, i), s.config.globalProperties.$pinia = i, ja && Ww(s, i), r.forEach((a) => n.push(a)), r = [];
    },
    use(s) {
      return !this._a && !kh ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return ja && typeof Proxy < "u" && i.use(Hw), i;
}
function Ev(t, e) {
  for (const n in e) {
    const r = e[n];
    if (!(n in t))
      continue;
    const i = t[n];
    hs(i) && hs(r) && !Ye(r) && !hr(r) ? t[n] = Ev(i, r) : t[n] = r;
  }
  return t;
}
const Sv = () => {
};
function Op(t, e, n, r = Sv) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && Hg() && zb(i), i;
}
function Os(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const Yw = (t) => t();
function Rf(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    hs(i) && hs(r) && t.hasOwnProperty(n) && !Ye(r) && !hr(r) ? t[n] = Rf(i, r) : t[n] = r;
  }
  return t;
}
const Xw = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function Kw(t) {
  return !hs(t) || !t.hasOwnProperty(Xw);
}
const { assign: wn } = Object;
function Mp(t) {
  return !!(Ye(t) && t.effect);
}
function Tp(t, e, n, r) {
  const { state: i, actions: s, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && r ? pf(_e(i ? i() : {}).value) : pf(n.state.value[t]);
    return wn(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = mi(fe(() => {
      ao(n);
      const d = n._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = $f(t, u, e, n, r, !0), l;
}
function $f(t, e, n = {}, r, i, s) {
  let a;
  const o = wn({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !kh && (l.onTrigger = (L) => {
    u ? d = L : u == !1 && !O._hotUpdating && (Array.isArray(d) ? d.push(L) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, c = [], h = [], d;
  const p = r.state.value[t];
  !s && !p && (process.env.NODE_ENV === "production" || !i) && (r.state.value[t] = {});
  const m = _e({});
  let v;
  function y(L) {
    let P;
    u = f = !1, process.env.NODE_ENV !== "production" && (d = []), typeof L == "function" ? (L(r.state.value[t]), P = {
      type: dr.patchFunction,
      storeId: t,
      events: d
    }) : (Rf(r.state.value[t], L), P = {
      type: dr.patchObject,
      payload: L,
      storeId: t,
      events: d
    });
    const I = v = Symbol();
    Zl().then(() => {
      v === I && (u = !0);
    }), f = !0, Os(c, P, r.state.value[t]);
  }
  const g = s ? function() {
    const { state: P } = n, I = P ? P() : {};
    this.$patch((J) => {
      wn(J, I);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : Sv;
  function E() {
    a.stop(), c = [], h = [], r._s.delete(t);
  }
  function b(L, P) {
    return function() {
      ao(r);
      const I = Array.from(arguments), J = [], pe = [];
      function T(K) {
        J.push(K);
      }
      function $(K) {
        pe.push(K);
      }
      Os(h, {
        args: I,
        name: L,
        store: O,
        after: T,
        onError: $
      });
      let z;
      try {
        z = P.apply(this && this.$id === t ? this : O, I);
      } catch (K) {
        throw Os(pe, K), K;
      }
      return z instanceof Promise ? z.then((K) => (Os(J, K), K)).catch((K) => (Os(pe, K), Promise.reject(K))) : (Os(J, z), z);
    };
  }
  const w = /* @__PURE__ */ mi({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), N = {
    _p: r,
    $id: t,
    $onAction: Op.bind(null, h),
    $patch: y,
    $reset: g,
    $subscribe(L, P = {}) {
      const I = Op(c, L, P.detached, () => J()), J = a.run(() => tt(() => r.state.value[t], (pe) => {
        (P.flush === "sync" ? f : u) && L({
          storeId: t,
          type: dr.direct,
          events: d
        }, pe);
      }, wn({}, l, P)));
      return I;
    },
    $dispose: E
  }, O = ju(process.env.NODE_ENV !== "production" || ja ? wn(
    {
      _hmrPayload: w,
      _customProperties: mi(/* @__PURE__ */ new Set())
    },
    N
  ) : N);
  r._s.set(t, O);
  const D = (r._a && r._a.runWithContext || Yw)(() => r._e.run(() => (a = qg()).run(e)));
  for (const L in D) {
    const P = D[L];
    if (Ye(P) && !Mp(P) || hr(P))
      process.env.NODE_ENV !== "production" && i ? el(m.value, L, Ol(D, L)) : s || (p && Kw(P) && (Ye(P) ? P.value = p[L] : Rf(P, p[L])), r.state.value[t][L] = P), process.env.NODE_ENV !== "production" && w.state.push(L);
    else if (typeof P == "function") {
      const I = process.env.NODE_ENV !== "production" && i ? P : b(L, P);
      D[L] = I, process.env.NODE_ENV !== "production" && (w.actions[L] = P), o.actions[L] = P;
    } else
      process.env.NODE_ENV !== "production" && Mp(P) && (w.getters[L] = s ? n.getters[L] : P, Ku && (D._getters || (D._getters = mi([]))).push(L));
  }
  if (wn(O, D), wn(be(O), D), Object.defineProperty(O, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? m.value : r.state.value[t],
    set: (L) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      y((P) => {
        wn(P, L);
      });
    }
  }), process.env.NODE_ENV !== "production" && (O._hotUpdate = mi((L) => {
    O._hotUpdating = !0, L._hmrPayload.state.forEach((P) => {
      if (P in O.$state) {
        const I = L.$state[P], J = O.$state[P];
        typeof I == "object" && hs(I) && hs(J) ? Ev(I, J) : L.$state[P] = J;
      }
      el(O, P, Ol(L.$state, P));
    }), Object.keys(O.$state).forEach((P) => {
      P in L.$state || Nc(O, P);
    }), u = !1, f = !1, r.state.value[t] = Ol(L._hmrPayload, "hotState"), f = !0, Zl().then(() => {
      u = !0;
    });
    for (const P in L._hmrPayload.actions) {
      const I = L[P];
      el(O, P, b(P, I));
    }
    for (const P in L._hmrPayload.getters) {
      const I = L._hmrPayload.getters[P], J = s ? fe(() => (ao(r), I.call(O, O))) : I;
      el(O, P, J);
    }
    Object.keys(O._hmrPayload.getters).forEach((P) => {
      P in L._hmrPayload.getters || Nc(O, P);
    }), Object.keys(O._hmrPayload.actions).forEach((P) => {
      P in L._hmrPayload.actions || Nc(O, P);
    }), O._hmrPayload = L._hmrPayload, O._getters = L._getters, O._hotUpdating = !1;
  })), ja) {
    const L = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((P) => {
      Object.defineProperty(O, P, wn({ value: O[P] }, L));
    });
  }
  return r._p.forEach((L) => {
    if (ja) {
      const P = a.run(() => L({
        store: O,
        app: r._a,
        pinia: r,
        options: o
      }));
      Object.keys(P || {}).forEach((I) => O._customProperties.add(I)), wn(O, P);
    } else
      wn(O, a.run(() => L({
        store: O,
        app: r._a,
        pinia: r,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && O.$state && typeof O.$state == "object" && typeof O.$state.constructor == "function" && !O.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${O.$id}".`), p && s && n.hydrate && n.hydrate(O.$state, p), u = !0, f = !0, O;
}
function vs(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  if (typeof t == "string")
    r = t, i = s ? n : e;
  else if (i = t, r = t.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');
  function a(o, l) {
    const u = ME();
    if (o = (process.env.NODE_ENV === "test" && Ma && Ma._testing ? null : o) || (u ? Hs(hv, null) : null), o && ao(o), process.env.NODE_ENV !== "production" && !Ma)
      throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = Ma, o._s.has(r) || (s ? $f(r, e, i, o) : Tp(r, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + r, h = s ? $f(c, e, i, o, !0) : Tp(c, wn({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && Ku) {
      const c = wo();
      if (c && c.proxy && !l) {
        const h = c.proxy, d = "_pStores" in h ? h._pStores : h._pStores = {};
        d[r] = f;
      }
    }
    return f;
  }
  return a.$id = r, a;
}
function We(t) {
  if (kh)
    return pf(t);
  {
    t = be(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (Ye(r) || hr(r)) && (e[n] = Ol(t, n));
    }
    return e;
  }
}
function Zw(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var ds = 1, ps = 2, Ys = 3, Jw = 4, Ff = 5, Np = 6378137, Qw = 6356752314e-3, Lp = 0.0066943799901413165, Ua = 484813681109536e-20, H = Math.PI / 2, ex = 0.16666666666666666, tx = 0.04722222222222222, nx = 0.022156084656084655, ne = 1e-10, Dt = 0.017453292519943295, ur = 57.29577951308232, qe = Math.PI / 4, oo = Math.PI * 2, yt = 3.14159265359, cn = {};
cn.greenwich = 0;
cn.lisbon = -9.131906111111;
cn.paris = 2.337229166667;
cn.bogota = -74.080916666667;
cn.madrid = -3.687938888889;
cn.rome = 12.452333333333;
cn.bern = 7.439583333333;
cn.jakarta = 106.807719444444;
cn.ferro = -17.666666666667;
cn.brussels = 4.367975;
cn.stockholm = 18.058277777778;
cn.athens = 23.7163375;
cn.oslo = 10.722916666667;
const rx = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var Cp = /[\s_\-\/\(\)]/g;
function Mi(t, e) {
  if (t[e])
    return t[e];
  for (var n = Object.keys(t), r = e.toLowerCase().replace(Cp, ""), i = -1, s, a; ++i < n.length; )
    if (s = n[i], a = s.toLowerCase().replace(Cp, ""), a === r)
      return t[s];
}
function Vf(t) {
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
      e.lat0 = o * Dt;
    },
    lat_1: function(o) {
      e.lat1 = o * Dt;
    },
    lat_2: function(o) {
      e.lat2 = o * Dt;
    },
    lat_ts: function(o) {
      e.lat_ts = o * Dt;
    },
    lon_0: function(o) {
      e.long0 = o * Dt;
    },
    lon_1: function(o) {
      e.long1 = o * Dt;
    },
    lon_2: function(o) {
      e.long2 = o * Dt;
    },
    alpha: function(o) {
      e.alpha = parseFloat(o) * Dt;
    },
    gamma: function(o) {
      e.rectified_grid_angle = parseFloat(o);
    },
    lonc: function(o) {
      e.longc = o * Dt;
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
      var l = Mi(rx, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * Dt;
    },
    pm: function(o) {
      var l = Mi(cn, o);
      e.from_greenwich = (l || parseFloat(o)) * Dt;
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
var lo = 1, wv = 2, xv = 3, au = 4, Ov = 5, $h = -1, ix = /\s/, sx = /[A-Za-z]/, ax = /[A-Za-z84_]/, Zu = /[,\]]/, Mv = /[\d\.E\-\+]/;
function Kr(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = lo;
}
Kr.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== au)
    for (; ix.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case lo:
      return this.neutral(t);
    case wv:
      return this.keyword(t);
    case au:
      return this.quoted(t);
    case Ov:
      return this.afterquote(t);
    case xv:
      return this.number(t);
    case $h:
      return;
  }
};
Kr.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = au;
    return;
  }
  if (Zu.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
Kr.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = lo;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = lo, this.currentObject = this.stack.pop(), this.currentObject || (this.state = $h);
    return;
  }
};
Kr.prototype.number = function(t) {
  if (Mv.test(t)) {
    this.word += t;
    return;
  }
  if (Zu.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
Kr.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = Ov;
    return;
  }
  this.word += t;
};
Kr.prototype.keyword = function(t) {
  if (ax.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = lo;
    return;
  }
  if (Zu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
Kr.prototype.neutral = function(t) {
  if (sx.test(t)) {
    this.word = t, this.state = wv;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = au;
    return;
  }
  if (Mv.test(t)) {
    this.word = t, this.state = xv;
    return;
  }
  if (Zu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
Kr.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === $h)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function ox(t) {
  var e = new Kr(t);
  return e.output();
}
function Ap(t, e, n) {
  Array.isArray(e) && (n.unshift(e), e = null);
  var r = e ? {} : t, i = n.reduce(function(s, a) {
    return $s(a, s), s;
  }, r);
  e && (t[e] = i);
}
function $s(t, e) {
  if (!Array.isArray(t)) {
    e[t] = !0;
    return;
  }
  var n = t.shift();
  if (n === "PARAMETER" && (n = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      e[n] = {}, $s(t[0], e[n]);
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
      }, t.length === 3 && $s(t[2], e[n]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      e[n] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && $s(t[3], e[n]);
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
      t[0] = ["name", t[0]], Ap(e, n, t);
      return;
    default:
      for (r = -1; ++r < t.length; )
        if (!Array.isArray(t[r]))
          return $s(t, e[n]);
      return Ap(e, n, t);
  }
}
var lx = 0.017453292519943295;
function ux(t, e) {
  var n = e[0], r = e[1];
  !(n in t) && r in t && (t[n] = t[r], e.length === 3 && (t[n] = e[2](t[n])));
}
function rr(t) {
  return t * lx;
}
function cx(t) {
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
    return ux(t, u);
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
    ["lat0", "latitude_of_center", rr],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", rr],
    ["x0", "false_easting", a],
    ["y0", "false_northing", a],
    ["long0", "central_meridian", rr],
    ["lat0", "latitude_of_origin", rr],
    ["lat0", "standard_parallel_1", rr],
    ["lat1", "standard_parallel_1", rr],
    ["lat2", "standard_parallel_2", rr],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", rr],
    ["srsCode", "name"]
  ];
  l.forEach(o), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") ? (t.lat0 = rr(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1) : !t.lat_ts && t.lat0 && t.projName === "Polar_Stereographic" && (t.lat_ts = t.lat0, t.lat0 = rr(t.lat0 > 0 ? 90 : -90));
}
function Tv(t) {
  var e = ox(t), n = e.shift(), r = e.shift();
  e.unshift(["name", r]), e.unshift(["type", n]);
  var i = {};
  return $s(e, i), cx(i), i;
}
function Kt(t) {
  var e = this;
  if (arguments.length === 2) {
    var n = arguments[1];
    typeof n == "string" ? n.charAt(0) === "+" ? Kt[t] = Vf(arguments[1]) : Kt[t] = Tv(arguments[1]) : Kt[t] = n;
  } else if (arguments.length === 1) {
    if (Array.isArray(t))
      return t.map(function(r) {
        Array.isArray(r) ? Kt.apply(e, r) : Kt(r);
      });
    if (typeof t == "string") {
      if (t in Kt)
        return Kt[t];
    } else
      "EPSG" in t ? Kt["EPSG:" + t.EPSG] = t : "ESRI" in t ? Kt["ESRI:" + t.ESRI] = t : "IAU2000" in t ? Kt["IAU2000:" + t.IAU2000] = t : console.log(t);
    return;
  }
}
Zw(Kt);
function fx(t) {
  return typeof t == "string";
}
function hx(t) {
  return t in Kt;
}
var dx = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function px(t) {
  return dx.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var mx = ["3857", "900913", "3785", "102113"];
function gx(t) {
  var e = Mi(t, "authority");
  if (!!e) {
    var n = Mi(e, "epsg");
    return n && mx.indexOf(n) > -1;
  }
}
function yx(t) {
  var e = Mi(t, "extension");
  if (!!e)
    return Mi(e, "proj4");
}
function vx(t) {
  return t[0] === "+";
}
function _x(t) {
  if (fx(t)) {
    if (hx(t))
      return Kt[t];
    if (px(t)) {
      var e = Tv(t);
      if (gx(e))
        return Kt["EPSG:3857"];
      var n = yx(e);
      return n ? Vf(n) : e;
    }
    if (vx(t))
      return Vf(t);
  } else
    return t;
}
function Pp(t, e) {
  t = t || {};
  var n, r;
  if (!e)
    return t;
  for (r in e)
    n = e[r], n !== void 0 && (t[r] = n);
  return t;
}
function br(t, e, n) {
  var r = t * e;
  return n / Math.sqrt(1 - r * r);
}
function Oo(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= yt ? t : t - Oo(t) * oo;
}
function Xn(t, e, n) {
  var r = t * n, i = 0.5 * t;
  return r = Math.pow((1 - r) / (1 + r), i), Math.tan(0.5 * (H - e)) / r;
}
function uo(t, e) {
  for (var n = 0.5 * t, r, i, s = H - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (r = t * Math.sin(s), i = H - 2 * Math.atan(e * Math.pow((1 - r) / (1 + r), n)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function bx() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function Ex(t) {
  var e = t.x, n = t.y;
  if (n * ur > 90 && n * ur < -90 && e * ur > 180 && e * ur < -180)
    return null;
  var r, i;
  if (Math.abs(Math.abs(n) - H) <= ne)
    return null;
  if (this.sphere)
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(qe + 0.5 * n));
  else {
    var s = Math.sin(n), a = Xn(this.e, n, s);
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 - this.a * this.k0 * Math.log(a);
  }
  return t.x = r, t.y = i, t;
}
function Sx(t) {
  var e = t.x - this.x0, n = t.y - this.y0, r, i;
  if (this.sphere)
    i = H - 2 * Math.atan(Math.exp(-n / (this.a * this.k0)));
  else {
    var s = Math.exp(-n / (this.a * this.k0));
    if (i = uo(this.e, s), i === -9999)
      return null;
  }
  return r = se(this.long0 + e / (this.a * this.k0)), t.x = r, t.y = i, t;
}
var wx = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const xx = {
  init: bx,
  forward: Ex,
  inverse: Sx,
  names: wx
};
function Ox() {
}
function Dp(t) {
  return t;
}
var Mx = ["longlat", "identity"];
const Tx = {
  init: Ox,
  forward: Dp,
  inverse: Dp,
  names: Mx
};
var Nx = [xx, Tx], Rl = {}, ou = [];
function Nv(t, e) {
  var n = ou.length;
  return t.names ? (ou[n] = t, t.names.forEach(function(r) {
    Rl[r.toLowerCase()] = n;
  }), this) : (console.log(e), !0);
}
function Lx(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof Rl[e] < "u" && ou[Rl[e]])
    return ou[Rl[e]];
}
function Cx() {
  Nx.forEach(Nv);
}
const Ax = {
  start: Cx,
  add: Nv,
  get: Lx
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
Ee.clrk80ign = {
  a: 63782492e-1,
  b: 6356515,
  rf: 293.4660213,
  ellipseName: "Clarke 1880 (IGN)"
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
var Px = Ee.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
Ee.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function Dx(t, e, n, r) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  r ? (t *= 1 - a * (ex + a * (tx + a * nx)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function kx(t, e, n, r, i) {
  if (!t) {
    var s = Mi(Ee, r);
    s || (s = Px), t = s.a, e = s.b, n = s.rf;
  }
  return n && !e && (e = (1 - 1 / n) * t), (n === 0 || Math.abs(t - e) < ne) && (i = !0, e = t), {
    a: t,
    b: e,
    rf: n,
    sphere: i
  };
}
var xt = {};
xt.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
xt.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
xt.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
xt.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
xt.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
xt.potsdam = {
  towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
xt.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
xt.hermannskogel = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
xt.militargeographische_institut = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Militar-Geographische Institut"
};
xt.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};
xt.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
xt.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
xt.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
xt.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
xt.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: "bessel",
  datumName: "S-JTSK (Ferro)"
};
xt.beduaram = {
  towgs84: "-106,-87,188",
  ellipse: "clrk80",
  datumName: "Beduaram"
};
xt.gunung_segara = {
  towgs84: "-403,684,41",
  ellipse: "bessel",
  datumName: "Gunung Segara Jakarta"
};
xt.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};
function Ix(t, e, n, r, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = Ff : o.datum_type = Jw, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = ds), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = ps, o.datum_params[3] *= Ua, o.datum_params[4] *= Ua, o.datum_params[5] *= Ua, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = Ys, o.grids = a), o.a = n, o.b = r, o.es = i, o.ep2 = s, o;
}
var Lv = {};
function Rx(t, e) {
  var n = new DataView(e), r = Vx(n), i = Gx(n, r), s = jx(n, i, r), a = { header: i, subgrids: s };
  return Lv[t] = a, a;
}
function $x(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(Fx);
}
function Fx(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: Lv[t] || null,
    isNull: !1
  };
}
function Fs(t) {
  return t / 3600 * Math.PI / 180;
}
function Vx(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function Gx(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: Gf(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function Gf(t, e, n) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, n)));
}
function jx(t, e, n) {
  for (var r = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = Bx(t, r, n), o = Wx(t, r, a, n), l = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), u = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    i.push({
      ll: [Fs(a.lowerLongitude), Fs(a.lowerLatitude)],
      del: [Fs(a.longitudeInterval), Fs(a.latitudeInterval)],
      lim: [l, u],
      count: a.gridNodeCount,
      cvs: Ux(o)
    }), r += 176 + a.gridNodeCount * 16;
  }
  return i;
}
function Ux(t) {
  return t.map(function(e) {
    return [Fs(e.longitudeShift), Fs(e.latitudeShift)];
  });
}
function Bx(t, e, n) {
  return {
    name: Gf(t, e + 8, e + 16).trim(),
    parent: Gf(t, e + 24, e + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(e + 72, n),
    upperLatitude: t.getFloat64(e + 88, n),
    lowerLongitude: t.getFloat64(e + 104, n),
    upperLongitude: t.getFloat64(e + 120, n),
    latitudeInterval: t.getFloat64(e + 136, n),
    longitudeInterval: t.getFloat64(e + 152, n),
    gridNodeCount: t.getInt32(e + 168, n)
  };
}
function Wx(t, e, n, r) {
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
function pr(t, e) {
  if (!(this instanceof pr))
    return new pr(t);
  e = e || function(u) {
    if (u)
      throw u;
  };
  var n = _x(t);
  if (typeof n != "object") {
    e(t);
    return;
  }
  var r = pr.projections.get(n.projName);
  if (!r) {
    e(t);
    return;
  }
  if (n.datumCode && n.datumCode !== "none") {
    var i = Mi(xt, n.datumCode);
    i && (n.datum_params = n.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), n.ellps = i.ellipse, n.datumName = i.datumName ? i.datumName : n.datumCode);
  }
  n.k0 = n.k0 || 1, n.axis = n.axis || "enu", n.ellps = n.ellps || "wgs84", n.lat1 = n.lat1 || n.lat0;
  var s = kx(n.a, n.b, n.rf, n.ellps, n.sphere), a = Dx(s.a, s.b, s.rf, n.R_A), o = $x(n.nadgrids), l = n.datum || Ix(
    n.datumCode,
    n.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  Pp(this, n), Pp(this, r), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
pr.projections = Ax;
pr.projections.start();
function qx(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === ds ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === ps ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function Cv(t, e, n) {
  var r = t.x, i = t.y, s = t.z ? t.z : 0, a, o, l, u;
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
  return r > Math.PI && (r -= 2 * Math.PI), o = Math.sin(i), u = Math.cos(i), l = o * o, a = n / Math.sqrt(1 - e * l), {
    x: (a + s) * u * Math.cos(r),
    y: (a + s) * u * Math.sin(r),
    z: (a * (1 - e) + s) * o
  };
}
function Av(t, e, n, r) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, p, m, v, y, g, E, b = t.x, w = t.y, N = t.z ? t.z : 0, O, R, D;
  if (o = Math.sqrt(b * b + w * w), l = Math.sqrt(b * b + w * w + N * N), o / n < i) {
    if (O = 0, l / n < i)
      return R = H, D = -r, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    O = Math.atan2(w, b);
  u = N / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), p = f * (1 - e) * c, m = u * c, E = 0;
  do
    E++, d = n / Math.sqrt(1 - e * m * m), D = o * p + N * m - d * (1 - e * m * m), h = e * d / (d + D), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), v = f * (1 - h) * c, y = u * c, g = y * p - v * m, p = v, m = y;
  while (g * g > s && E < a);
  return R = Math.atan(y / Math.abs(v)), {
    x: O,
    y: R,
    z: D
  };
}
function Hx(t, e, n) {
  if (e === ds)
    return {
      x: t.x + n[0],
      y: t.y + n[1],
      z: t.z + n[2]
    };
  if (e === ps) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + r,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function zx(t, e, n) {
  if (e === ds)
    return {
      x: t.x - n[0],
      y: t.y - n[1],
      z: t.z - n[2]
    };
  if (e === ps) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6], f = (t.x - r) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function tl(t) {
  return t === ds || t === ps;
}
function Yx(t, e, n) {
  if (qx(t, e) || t.datum_type === Ff || e.datum_type === Ff)
    return n;
  var r = t.a, i = t.es;
  if (t.datum_type === Ys) {
    var s = kp(t, !1, n);
    if (s !== 0)
      return;
    r = Np, i = Lp;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === Ys && (a = Np, o = Qw, l = Lp), i === l && r === a && !tl(t.datum_type) && !tl(e.datum_type))
    return n;
  if (n = Cv(n, i, r), tl(t.datum_type) && (n = Hx(n, t.datum_type, t.datum_params)), tl(e.datum_type) && (n = zx(n, e.datum_type, e.datum_params)), n = Av(n, l, a, o), e.datum_type === Ys) {
    var u = kp(e, !0, n);
    if (u !== 0)
      return;
  }
  return n;
}
function kp(t, e, n) {
  if (t.grids === null || t.grids.length === 0)
    return console.log("Grid shift grids not found"), -1;
  var r = { x: -n.x, y: n.y }, i = { x: Number.NaN, y: Number.NaN }, s = [];
  e:
    for (var a = 0; a < t.grids.length; a++) {
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
      for (var l = o.grid.subgrids, u = 0, f = l.length; u < f; u++) {
        var c = l[u], h = (Math.abs(c.del[1]) + Math.abs(c.del[0])) / 1e4, d = c.ll[0] - h, p = c.ll[1] - h, m = c.ll[0] + (c.lim[0] - 1) * c.del[0] + h, v = c.ll[1] + (c.lim[1] - 1) * c.del[1] + h;
        if (!(p > r.y || d > r.x || v < r.y || m < r.x) && (i = Xx(r, e, c), !isNaN(i.x)))
          break e;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -r.x * ur + " " + r.y * ur + " tried: '" + s + "'"), -1) : (n.x = -i.x, n.y = i.y, 0);
}
function Xx(t, e, n) {
  var r = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return r;
  var i = { x: t.x, y: t.y };
  i.x -= n.ll[0], i.y -= n.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = Ip(i, n);
  if (e) {
    if (isNaN(s.x))
      return r;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = Ip(s, n), isNaN(u.x)) {
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
function Ip(t, e) {
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
  var f = { x: e.cvs[a][0], y: e.cvs[a][1] }, c = i.x * i.y, h = i.x * (1 - i.y), d = (1 - i.x) * (1 - i.y), p = (1 - i.x) * i.y;
  return s.x = d * o.x + h * l.x + p * f.x + c * u.x, s.y = d * o.y + h * l.y + p * f.y + c * u.y, s;
}
function Rp(t, e, n) {
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
function Pv(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function Kx(t) {
  $p(t.x), $p(t.y);
}
function $p(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function Zx(t, e) {
  return (t.datum.datum_type === ds || t.datum.datum_type === ps || t.datum.datum_type === Ys) && e.datumCode !== "WGS84" || (e.datum.datum_type === ds || e.datum.datum_type === ps || e.datum.datum_type === Ys) && t.datumCode !== "WGS84";
}
function lu(t, e, n, r) {
  var i;
  Array.isArray(n) ? n = Pv(n) : n = {
    x: n.x,
    y: n.y,
    z: n.z,
    m: n.m
  };
  var s = n.z !== void 0;
  if (Kx(n), t.datum && e.datum && Zx(t, e) && (i = new pr("WGS84"), n = lu(t, i, n, r), t = i), r && t.axis !== "enu" && (n = Rp(t, !1, n)), t.projName === "longlat")
    n = {
      x: n.x * Dt,
      y: n.y * Dt,
      z: n.z || 0
    };
  else if (t.to_meter && (n = {
    x: n.x * t.to_meter,
    y: n.y * t.to_meter,
    z: n.z || 0
  }), n = t.inverse(n), !n)
    return;
  if (t.from_greenwich && (n.x += t.from_greenwich), n = Yx(t.datum, e.datum, n), !!n)
    return e.from_greenwich && (n = {
      x: n.x - e.from_greenwich,
      y: n.y,
      z: n.z || 0
    }), e.projName === "longlat" ? n = {
      x: n.x * ur,
      y: n.y * ur,
      z: n.z || 0
    } : (n = e.forward(n), e.to_meter && (n = {
      x: n.x / e.to_meter,
      y: n.y / e.to_meter,
      z: n.z || 0
    })), r && e.axis !== "enu" ? Rp(e, !0, n) : (n && !s && delete n.z, n);
}
var Fp = pr("WGS84");
function Lc(t, e, n, r) {
  var i, s, a;
  return Array.isArray(n) ? (i = lu(t, e, n, r) || { x: NaN, y: NaN }, n.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(n.splice(3)) : [i.x, i.y, n[2]].concat(n.splice(3)) : [i.x, i.y].concat(n.splice(2)) : [i.x, i.y]) : (s = lu(t, e, n, r), a = Object.keys(n), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = n[o];
  }), s);
}
function Vp(t) {
  return t instanceof pr ? t : t.oProj ? t.oProj : pr(t);
}
function qt(t, e, n) {
  t = Vp(t);
  var r = !1, i;
  return typeof e > "u" ? (e = t, t = Fp, r = !0) : (typeof e.x < "u" || Array.isArray(e)) && (n = e, e = t, t = Fp, r = !0), e = Vp(e), n ? Lc(t, e, n) : (i = {
    forward: function(s, a) {
      return Lc(t, e, s, a);
    },
    inverse: function(s, a) {
      return Lc(e, t, s, a);
    }
  }, r && (i.oProj = e), i);
}
var Gp = 6, Dv = "AJSAJS", kv = "AFAFAF", Vs = 65, an = 73, xn = 79, Ta = 86, Na = 90;
const Jx = {
  forward: Iv,
  inverse: Qx,
  toPoint: Rv
};
function Iv(t, e) {
  return e = e || 5, nO(eO({
    lat: t[1],
    lon: t[0]
  }), e);
}
function Qx(t) {
  var e = Fh(Fv(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function Rv(t) {
  var e = Fh(Fv(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function Cc(t) {
  return t * (Math.PI / 180);
}
function jp(t) {
  return 180 * (t / Math.PI);
}
function eO(t) {
  var e = t.lat, n = t.lon, r = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = Cc(e), p = Cc(n), m, v;
  v = Math.floor((n + 180) / 6) + 1, n === 180 && (v = 60), e >= 56 && e < 64 && n >= 3 && n < 12 && (v = 32), e >= 72 && e < 84 && (n >= 0 && n < 9 ? v = 31 : n >= 9 && n < 21 ? v = 33 : n >= 21 && n < 33 ? v = 35 : n >= 33 && n < 42 && (v = 37)), a = (v - 1) * 6 - 180 + 3, m = Cc(a), o = i / (1 - i), l = r / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (p - m), h = r * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var y = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, g = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (g += 1e7), {
    northing: Math.round(g),
    easting: Math.round(y),
    zoneNumber: v,
    zoneLetter: tO(e)
  };
}
function Fh(t) {
  var e = t.northing, n = t.easting, r = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, p, m, v, y, g, E = n - 5e5, b = e;
  r < "N" && (b -= 1e7), v = (i - 1) * 6 - 180 + 3, l = o / (1 - o), m = b / s, y = m / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), g = y + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * y) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * y) + 151 * u * u * u / 96 * Math.sin(6 * y), f = a / Math.sqrt(1 - o * Math.sin(g) * Math.sin(g)), c = Math.tan(g) * Math.tan(g), h = l * Math.cos(g) * Math.cos(g), d = a * (1 - o) / Math.pow(1 - o * Math.sin(g) * Math.sin(g), 1.5), p = E / (f * s);
  var w = g - f * Math.tan(g) / d * (p * p / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * p * p * p * p / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * p * p * p * p * p * p / 720);
  w = jp(w);
  var N = (p - (1 + 2 * c + h) * p * p * p / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * p * p * p * p * p / 120) / Math.cos(g);
  N = v + jp(N);
  var O;
  if (t.accuracy) {
    var R = Fh({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    O = {
      top: R.lat,
      right: R.lon,
      bottom: w,
      left: N
    };
  } else
    O = {
      lat: w,
      lon: N
    };
  return O;
}
function tO(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function nO(t, e) {
  var n = "00000" + t.easting, r = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + rO(t.easting, t.northing, t.zoneNumber) + n.substr(n.length - 5, e) + r.substr(r.length - 5, e);
}
function rO(t, e, n) {
  var r = $v(n), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return iO(i, s, r);
}
function $v(t) {
  var e = t % Gp;
  return e === 0 && (e = Gp), e;
}
function iO(t, e, n) {
  var r = n - 1, i = Dv.charCodeAt(r), s = kv.charCodeAt(r), a = i + t - 1, o = s + e, l = !1;
  a > Na && (a = a - Na + Vs - 1, l = !0), (a === an || i < an && a > an || (a > an || i < an) && l) && a++, (a === xn || i < xn && a > xn || (a > xn || i < xn) && l) && (a++, a === an && a++), a > Na && (a = a - Na + Vs - 1), o > Ta ? (o = o - Ta + Vs - 1, l = !0) : l = !1, (o === an || s < an && o > an || (o > an || s < an) && l) && o++, (o === xn || s < xn && o > xn || (o > xn || s < xn) && l) && (o++, o === an && o++), o > Ta && (o = o - Ta + Vs - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function Fv(t) {
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
  for (var l = $v(a), u = sO(n.charAt(0), l), f = aO(n.charAt(1), l); f < oO(o); )
    f += 2e6;
  var c = e - s;
  if (c % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var h = c / 2, d = 0, p = 0, m, v, y, g, E;
  return h > 0 && (m = 1e5 / Math.pow(10, h), v = t.substring(s, s + h), d = parseFloat(v) * m, y = t.substring(s + h), p = parseFloat(y) * m), g = d + u, E = p + f, {
    easting: g,
    northing: E,
    zoneLetter: o,
    zoneNumber: a,
    accuracy: m
  };
}
function sO(t, e) {
  for (var n = Dv.charCodeAt(e - 1), r = 1e5, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > Na) {
      if (i)
        throw "Bad character: " + t;
      n = Vs, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function aO(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var n = kv.charCodeAt(e - 1), r = 0, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > Ta) {
      if (i)
        throw "Bad character: " + t;
      n = Vs, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function oO(t) {
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
function ra(t, e, n) {
  if (!(this instanceof ra))
    return new ra(t, e, n);
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
ra.fromMGRS = function(t) {
  return new ra(Rv(t));
};
ra.prototype.toMGRS = function(t) {
  return Iv([this.x, this.y], t);
};
var lO = 1, uO = 0.25, Up = 0.046875, Bp = 0.01953125, Wp = 0.01068115234375, cO = 0.75, fO = 0.46875, hO = 0.013020833333333334, dO = 0.007120768229166667, pO = 0.3645833333333333, mO = 0.005696614583333333, gO = 0.3076171875;
function Vv(t) {
  var e = [];
  e[0] = lO - t * (uO + t * (Up + t * (Bp + t * Wp))), e[1] = t * (cO - t * (Up + t * (Bp + t * Wp)));
  var n = t * t;
  return e[2] = n * (fO - t * (hO + t * dO)), n *= t, e[3] = n * (pO - t * mO), e[4] = n * t * gO, e;
}
function Ju(t, e, n, r) {
  return n *= e, e *= e, r[0] * t - n * (r[1] + e * (r[2] + e * (r[3] + e * r[4])));
}
var yO = 20;
function Gv(t, e, n) {
  for (var r = 1 / (1 - e), i = t, s = yO; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = (Ju(i, a, Math.cos(i), n) - t) * (o * Math.sqrt(o)) * r, i -= o, Math.abs(o) < ne)
      return i;
  }
  return i;
}
function vO() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Vv(this.es), this.ml0 = Ju(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function _O(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s, a, o = Math.sin(n), l = Math.cos(n);
  if (this.es) {
    var f = l * r, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), p = Math.abs(l) > ne ? Math.tan(n) : 0, m = Math.pow(p, 2), v = Math.pow(m, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var y = Ju(n, o, l, this.en);
    s = this.a * (this.k0 * f * (1 + c / 6 * (1 - m + h + c / 20 * (5 - 18 * m + v + 14 * h - 58 * m * h + c / 42 * (61 + 179 * v - v * m - 479 * m))))) + this.x0, a = this.a * (this.k0 * (y - this.ml0 + o * r * f / 2 * (1 + c / 12 * (5 - m + 9 * h + 4 * d + c / 30 * (61 + v - 58 * m + 270 * h - 330 * m * h + c / 56 * (1385 + 543 * v - v * m - 3111 * m)))))) + this.y0;
  } else {
    var u = l * Math.sin(r);
    if (Math.abs(Math.abs(u) - 1) < ne)
      return 93;
    if (s = 0.5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)) + this.x0, a = l * Math.cos(r) / Math.sqrt(1 - Math.pow(u, 2)), u = Math.abs(a), u >= 1) {
      if (u - 1 > ne)
        return 93;
      a = 0;
    } else
      a = Math.acos(a);
    n < 0 && (a = -a), a = this.a * this.k0 * (a - this.lat0) + this.y0;
  }
  return t.x = s, t.y = a, t;
}
function bO(t) {
  var e, n, r, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, n = Gv(e, this.es, this.en), Math.abs(n) < H) {
      var c = Math.sin(n), h = Math.cos(n), d = Math.abs(h) > ne ? Math.tan(n) : 0, p = this.ep2 * Math.pow(h, 2), m = Math.pow(p, 2), v = Math.pow(d, 2), y = Math.pow(v, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var g = s * Math.sqrt(e) / this.k0, E = Math.pow(g, 2);
      e = e * d, r = n - e * E / (1 - this.es) * 0.5 * (1 - E / 12 * (5 + 3 * v - 9 * p * v + p - 4 * m - E / 30 * (61 + 90 * v - 252 * p * v + 45 * y + 46 * p - E / 56 * (1385 + 3633 * v + 4095 * y + 1574 * y * v)))), i = se(this.long0 + g * (1 - E / 6 * (1 + 2 * v + p - E / 20 * (5 + 28 * v + 24 * y + 8 * p * v + 6 * p - E / 42 * (61 + 662 * v + 1320 * y + 720 * y * v)))) / h);
    } else
      r = H * Oo(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), r = Math.asin(e), a < 0 && (r = -r), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = r, t;
}
var EO = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const $l = {
  init: vO,
  forward: _O,
  inverse: bO,
  names: EO
};
function jv(t) {
  var e = Math.exp(t);
  return e = (e - 1 / e) / 2, e;
}
function Mn(t, e) {
  t = Math.abs(t), e = Math.abs(e);
  var n = Math.max(t, e), r = Math.min(t, e) / (n || 1);
  return n * Math.sqrt(1 + Math.pow(r, 2));
}
function SO(t) {
  var e = 1 + t, n = e - 1;
  return n === 0 ? t : t * Math.log(e) / n;
}
function wO(t) {
  var e = Math.abs(t);
  return e = SO(e * (1 + e / (Mn(1, e) + 1))), t < 0 ? -e : e;
}
function Vh(t, e) {
  for (var n = 2 * Math.cos(2 * e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function xO(t, e) {
  for (var n = 2 * Math.cos(e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return Math.sin(e) * a;
}
function OO(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function Uv(t, e, n) {
  for (var r = Math.sin(e), i = Math.cos(e), s = jv(n), a = OO(n), o = 2 * i * a, l = -2 * r * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, p, m; --u >= 0; )
    p = h, m = c, h = f, c = d, f = -p + o * h - l * c + t[u], d = -m + l * h + o * c;
  return o = r * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function MO() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && ($l.init.apply(this), this.forward = $l.forward, this.inverse = $l.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), n = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), n = n * e, this.cgb[1] = n * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = n * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), n = n * e, this.cgb[2] = n * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = n * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), n = n * e, this.cgb[3] = n * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = n * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), n = n * e, this.cgb[4] = n * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = n * (-734 / 315 + e * (109598 / 31185)), n = n * e, this.cgb[5] = n * (601676 / 22275), this.cbg[5] = n * (444337 / 155925), n = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + n * (1 / 4 + n * (1 / 64 + n / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = n * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = n * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), n = n * e, this.utg[2] = n * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = n * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), n = n * e, this.utg[3] = n * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = n * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), n = n * e, this.utg[4] = n * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = n * (34729 / 80640 + e * (-3418889 / 1995840)), n = n * e, this.utg[5] = n * (-20648693 / 638668800), this.gtu[5] = n * (212378941 / 319334400);
  var r = Vh(this.cbg, this.lat0);
  this.Zb = -this.Qn * (r + xO(this.gtu, 2 * r));
}
function TO(t) {
  var e = se(t.x - this.long0), n = t.y;
  n = Vh(this.cbg, n);
  var r = Math.sin(n), i = Math.cos(n), s = Math.sin(e), a = Math.cos(e);
  n = Math.atan2(r, a * i), e = Math.atan2(s * i, Mn(r, i * a)), e = wO(Math.tan(e));
  var o = Uv(this.gtu, 2 * n, 2 * e);
  n = n + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * n + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function NO(t) {
  var e = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  n = (n - this.Zb) / this.Qn, e = e / this.Qn;
  var r, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = Uv(this.utg, 2 * n, 2 * e);
    n = n + s[0], e = e + s[1], e = Math.atan(jv(e));
    var a = Math.sin(n), o = Math.cos(n), l = Math.sin(e), u = Math.cos(e);
    n = Math.atan2(a * u, Mn(l, u * o)), e = Math.atan2(l, u * o), r = se(e + this.long0), i = Vh(this.cgb, n);
  } else
    r = 1 / 0, i = 1 / 0;
  return t.x = r, t.y = i, t;
}
var LO = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const Fl = {
  init: MO,
  forward: TO,
  inverse: NO,
  names: LO
};
function CO(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var AO = "etmerc";
function PO() {
  var t = CO(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * Dt, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Fl.init.apply(this), this.forward = Fl.forward, this.inverse = Fl.inverse;
}
var DO = ["Universal Transverse Mercator System", "utm"];
const kO = {
  init: PO,
  names: DO,
  dependsOn: AO
};
function Gh(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var IO = 20;
function RO() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + qe) / (Math.pow(Math.tan(0.5 * this.lat0 + qe), this.C) * Gh(this.e * t, this.ratexp));
}
function $O(t) {
  var e = t.x, n = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * n + qe), this.C) * Gh(this.e * Math.sin(n), this.ratexp)) - H, t.x = this.C * e, t;
}
function FO(t) {
  for (var e = 1e-14, n = t.x / this.C, r = t.y, i = Math.pow(Math.tan(0.5 * r + qe) / this.K, 1 / this.C), s = IO; s > 0 && (r = 2 * Math.atan(i * Gh(this.e * Math.sin(t.y), -0.5 * this.e)) - H, !(Math.abs(r - t.y) < e)); --s)
    t.y = r;
  return s ? (t.x = n, t.y = r, t) : null;
}
var VO = ["gauss"];
const jh = {
  init: RO,
  forward: $O,
  inverse: FO,
  names: VO
};
function GO() {
  jh.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function jO(t) {
  var e, n, r, i;
  return t.x = se(t.x - this.long0), jh.forward.apply(this, [t]), e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * n * r), t.x = i * n * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * n * r), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function UO(t) {
  var e, n, r, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Mn(t.x, t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), n = Math.cos(a), i = Math.asin(n * this.sinc0 + t.y * e * this.cosc0 / s), r = Math.atan2(t.x * e, s * this.cosc0 * n - t.y * this.sinc0 * e);
  } else
    i = this.phic0, r = 0;
  return t.x = r, t.y = i, jh.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var BO = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const WO = {
  init: GO,
  forward: jO,
  inverse: UO,
  names: BO
};
function qO(t, e, n) {
  return e *= n, Math.tan(0.5 * (H + t)) * Math.pow((1 - e) / (1 + e), 0.5 * n);
}
function HO() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= ne && (this.k0 = 0.5 * (1 + Oo(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= ne && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= ne && Math.abs(Math.cos(this.lat_ts)) > ne && (this.k0 = 0.5 * this.cons * br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Xn(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = br(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - H, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function zO(t) {
  var e = t.x, n = t.y, r = Math.sin(n), i = Math.cos(n), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= ne && Math.abs(n + this.lat0) <= ne ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * r + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * r - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(n, r, this.e)) - H, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= ne ? (u = Xn(this.e, n * this.con, this.con * r), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < ne ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function YO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, n = this.lat0, a <= ne ? (t.x = e, t.y = n, t) : (n = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < ne ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = n, t);
  } else if (Math.abs(this.coslat0) <= ne) {
    if (a <= ne)
      return n = this.lat0, e = this.long0, t.x = e, t.y = n, t;
    t.x *= this.con, t.y *= this.con, r = a * this.cons / (2 * this.a * this.k0), n = this.con * uo(this.e, r), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= ne ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), n = -1 * uo(this.e, Math.tan(0.5 * (H + s)));
  return t.x = e, t.y = n, t;
}
var XO = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const KO = {
  init: HO,
  forward: zO,
  inverse: YO,
  names: XO,
  ssfn_: qO
};
function ZO() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), n = this.a, r = this.rf, i = 1 / r, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * n * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function JO(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), n = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), r = -this.alpha * (e + n) + this.K, i = 2 * (Math.atan(Math.exp(r)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function QO(t) {
  for (var e = t.x - this.x0, n = t.y - this.y0, r = e / this.R, i = 2 * (Math.atan(Math.exp(n / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(r)), a = Math.atan(Math.sin(r) / (Math.cos(this.b0) * Math.cos(r) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var eM = ["somerc"];
const tM = {
  init: ZO,
  forward: JO,
  inverse: QO,
  names: eM
};
var Ds = 1e-7;
function nM(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], n = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(n) !== -1;
}
function rM() {
  var t, e, n, r, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, p = 0, m = 0, v = 0, y = 0;
  this.no_off = nM(this), this.no_rot = "no_rot" in this;
  var g = !1;
  "alpha" in this && (g = !0);
  var E = !1;
  if ("rectified_grid_angle" in this && (E = !0), g && (y = this.alpha), E && (f = this.rectified_grid_angle * Dt), g || E)
    h = this.longc;
  else if (d = this.long1, m = this.lat1, p = this.long2, v = this.lat2, Math.abs(m - v) <= Ds || (t = Math.abs(m)) <= Ds || Math.abs(t - H) <= Ds || Math.abs(Math.abs(this.lat0) - H) <= Ds || Math.abs(Math.abs(v) - H) <= Ds)
    throw new Error();
  var b = 1 - this.es;
  e = Math.sqrt(b), Math.abs(this.lat0) > ne ? (o = Math.sin(this.lat0), n = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = n * n, this.B = Math.sqrt(1 + this.es * this.B * this.B / b), this.A = this.B * this.k0 * e / t, r = this.B * e / (n * Math.sqrt(t)), i = r * r - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += r, this.E *= Math.pow(Xn(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = r = i = 1), g || E ? (g ? (c = Math.asin(Math.sin(y) / r), E || (f = y)) : (c = f, y = Math.asin(r * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(Xn(this.e, m, Math.sin(m)), this.B), a = Math.pow(Xn(this.e, v, Math.sin(v)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - p, t < -Math.pi ? p -= oo : t > Math.pi && (p += oo), this.lam0 = se(0.5 * (d + p) - Math.atan(u * Math.tan(0.5 * this.B * (d - p)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = y = Math.asin(r * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(r * r - 1) / Math.cos(y))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(qe - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(qe + i));
}
function iM(t) {
  var e = {}, n, r, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - H) > ne) {
    if (a = this.E / Math.pow(Xn(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, n = 0.5 * (a - o), r = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (n * this.singam - s * this.cosgam) / r, Math.abs(Math.abs(i) - 1) < ne)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < Ds ? l = this.A * t.x : l = this.ArB * Math.atan2(n * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function sM(t) {
  var e, n, r, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (n = t.y, e = t.x) : (n = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), r = Math.exp(-this.BrA * n), i = 0.5 * (r - 1 / r), s = 0.5 * (r + 1 / r), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < ne)
    l.x = 0, l.y = o < 0 ? -H : H;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = uo(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var aM = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const oM = {
  init: rM,
  forward: iM,
  inverse: sM,
  names: aM
};
function lM() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < ne)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), n = Math.cos(this.lat1), r = br(this.e, e, n), i = Xn(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = br(this.e, s, a), l = Xn(this.e, this.lat2, s), u = Xn(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > ne ? this.ns = Math.log(r / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = r / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function uM(t) {
  var e = t.x, n = t.y;
  Math.abs(2 * Math.abs(n) - Math.PI) <= ne && (n = Oo(n) * (H - 2 * ne));
  var r = Math.abs(Math.abs(n) - H), i, s;
  if (r > ne)
    i = Xn(this.e, n, Math.sin(n)), s = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (r = n * this.ns, r <= 0)
      return null;
    s = 0;
  }
  var a = this.ns * se(e - this.long0);
  return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t;
}
function cM(t) {
  var e, n, r, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), n = 1) : (e = -Math.sqrt(a * a + o * o), n = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(n * a, n * o)), e !== 0 || this.ns > 0) {
    if (n = 1 / this.ns, r = Math.pow(e / (this.a * this.f0), n), i = uo(this.e, r), i === -9999)
      return null;
  } else
    i = -H;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var fM = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const hM = {
  init: lM,
  forward: uM,
  inverse: cM,
  names: fM
};
function dM() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function pM(t) {
  var e, n, r, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), n = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), r = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(n) + Math.sin(this.ad) * Math.cos(n) * Math.cos(r)), s = Math.asin(Math.cos(n) * Math.sin(r) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function mM(t) {
  var e, n, r, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), r = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(r) - Math.sin(this.ad) * Math.cos(r) * Math.cos(i)), n = Math.asin(Math.cos(r) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - n / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var gM = ["Krovak", "krovak"];
const yM = {
  init: dM,
  forward: pM,
  inverse: mM,
  names: gM
};
function Jt(t, e, n, r, i) {
  return t * i - e * Math.sin(2 * i) + n * Math.sin(4 * i) - r * Math.sin(6 * i);
}
function Mo(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function To(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function No(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function Lo(t) {
  return t * t * t * (35 / 3072);
}
function ia(t, e, n) {
  var r = e * n;
  return t / Math.sqrt(1 - r * r);
}
function la(t) {
  return Math.abs(t) < H ? t : t - Oo(t) * Math.PI;
}
function uu(t, e, n, r, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - n * Math.sin(2 * s) + r * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * n * Math.cos(2 * s) + 4 * r * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function vM() {
  this.sphere || (this.e0 = Mo(this.es), this.e1 = To(this.es), this.e2 = No(this.es), this.e3 = Lo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function _M(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(r)), n = this.a * (Math.atan2(Math.tan(i), Math.cos(r)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = ia(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = r * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), n = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = n + this.y0, t;
}
function bM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i;
  if (this.sphere) {
    var s = n + this.lat0;
    r = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + n, o = uu(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - H) <= ne)
      return t.x = this.long0, t.y = H, n < 0 && (t.y *= -1), t;
    var l = ia(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    r = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = la(r), t;
}
var EM = ["Cassini", "Cassini_Soldner", "cass"];
const SM = {
  init: vM,
  forward: _M,
  inverse: bM,
  names: EM
};
function Si(t, e) {
  var n;
  return t > 1e-7 ? (n = t * e, (1 - t * t) * (e / (1 - n * n) - 0.5 / t * Math.log((1 - n) / (1 + n)))) : 2 * e;
}
var wM = 1, xM = 2, OM = 3, MM = 4;
function TM() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - H) < ne ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < ne ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = Si(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = RM(this.es), this.mode) {
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
        this.rq = Math.sqrt(0.5 * this.qp), e = Math.sin(this.lat0), this.sinb1 = Si(this.e, e) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * e * e) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function NM(t) {
  var e, n, r, i, s, a, o, l, u, f, c = t.x, h = t.y;
  if (c = se(c - this.long0), this.sphere) {
    if (s = Math.sin(h), f = Math.cos(h), r = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (n = this.mode === this.EQUIT ? 1 + f * r : 1 + this.sinph0 * s + this.cosph0 * f * r, n <= ne)
        return null;
      n = Math.sqrt(2 / n), e = n * f * Math.sin(c), n *= this.mode === this.EQUIT ? s : this.cosph0 * s - this.sinph0 * f * r;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (r = -r), Math.abs(h + this.lat0) < ne)
        return null;
      n = qe - h * 0.5, n = 2 * (this.mode === this.S_POLE ? Math.cos(n) : Math.sin(n)), e = n * Math.sin(c), n *= r;
    }
  } else {
    switch (o = 0, l = 0, u = 0, r = Math.cos(c), i = Math.sin(c), s = Math.sin(h), a = Si(this.e, s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = a / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
      case this.OBLIQ:
        u = 1 + this.sinb1 * o + this.cosb1 * l * r;
        break;
      case this.EQUIT:
        u = 1 + l * r;
        break;
      case this.N_POLE:
        u = H + h, a = this.qp - a;
        break;
      case this.S_POLE:
        u = h - H, a = this.qp + a;
        break;
    }
    if (Math.abs(u) < ne)
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
function LM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i, s, a, o, l, u;
  if (this.sphere) {
    var f = 0, c, h = 0;
    if (c = Math.sqrt(e * e + n * n), i = c * 0.5, i > 1)
      return null;
    switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (h = Math.sin(i), f = Math.cos(i)), this.mode) {
      case this.EQUIT:
        i = Math.abs(c) <= ne ? 0 : Math.asin(n * h / c), e *= h, n = f * c;
        break;
      case this.OBLIQ:
        i = Math.abs(c) <= ne ? this.lat0 : Math.asin(f * this.sinph0 + n * h * this.cosph0 / c), e *= h * this.cosph0, n = (f - Math.sin(i) * this.sinph0) * c;
        break;
      case this.N_POLE:
        n = -n, i = H - i;
        break;
      case this.S_POLE:
        i -= H;
        break;
    }
    r = n === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(e, n);
  } else {
    if (u = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (e /= this.dd, n *= this.dd, l = Math.sqrt(e * e + n * n), l < ne)
        return t.x = this.long0, t.y = this.lat0, t;
      a = 2 * Math.asin(0.5 * l / this.rq), s = Math.cos(a), e *= a = Math.sin(a), this.mode === this.OBLIQ ? (u = s * this.sinb1 + n * a * this.cosb1 / l, o = this.qp * u, n = l * this.cosb1 * s - n * this.sinb1 * a) : (u = n * a / l, o = this.qp * u, n = l * s);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (n = -n), o = e * e + n * n, !o)
        return t.x = this.long0, t.y = this.lat0, t;
      u = 1 - o / this.qp, this.mode === this.S_POLE && (u = -u);
    }
    r = Math.atan2(e, n), i = $M(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + r), t.y = i, t;
}
var CM = 0.3333333333333333, AM = 0.17222222222222222, PM = 0.10257936507936508, DM = 0.06388888888888888, kM = 0.0664021164021164, IM = 0.016415012942191543;
function RM(t) {
  var e, n = [];
  return n[0] = t * CM, e = t * t, n[0] += e * AM, n[1] = e * DM, e *= t, n[0] += e * PM, n[1] += e * kM, n[2] = e * IM, n;
}
function $M(t, e) {
  var n = t + t;
  return t + e[0] * Math.sin(n) + e[1] * Math.sin(n + n) + e[2] * Math.sin(n + n + n);
}
var FM = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const VM = {
  init: TM,
  forward: NM,
  inverse: LM,
  names: FM,
  S_POLE: wM,
  N_POLE: xM,
  EQUIT: OM,
  OBLIQ: MM
};
function Ti(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function GM() {
  Math.abs(this.lat1 + this.lat2) < ne || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = br(this.e3, this.sin_po, this.cos_po), this.qs1 = Si(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = br(this.e3, this.sin_po, this.cos_po), this.qs2 = Si(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Si(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > ne ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function jM(t) {
  var e = t.x, n = t.y;
  this.sin_phi = Math.sin(n), this.cos_phi = Math.cos(n);
  var r = Si(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function UM(t) {
  var e, n, r, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), r = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), r = -1), i = 0, e !== 0 && (i = Math.atan2(r * t.x, r * t.y)), r = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - r * r) / (2 * this.ns0)) : (n = (this.c - r * r) / this.ns0, a = this.phi1z(this.e3, n)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function BM(t, e) {
  var n, r, i, s, a, o = Ti(0.5 * e);
  if (t < ne)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (n = Math.sin(o), r = Math.cos(o), i = t * n, s = 1 - i * i, a = 0.5 * s * s / r * (e / (1 - l) - n / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var WM = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const qM = {
  init: GM,
  forward: jM,
  inverse: UM,
  names: WM,
  phi1z: BM
};
function HM() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function zM(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, a > 0 || Math.abs(a) <= ne ? (o = this.x0 + this.a * s * n * Math.sin(r) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i) / a) : (o = this.x0 + this.infinity_dist * n * Math.sin(r), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function YM(t) {
  var e, n, r, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), n = Math.sin(i), r = Math.cos(i), a = Ti(r * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.atan2(t.x * n, e * this.cos_p14 * r - t.y * this.sin_p14 * n), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var XM = ["gnom"];
const KM = {
  init: HM,
  forward: zM,
  inverse: YM,
  names: XM
};
function ZM(t, e) {
  var n = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(e) - n) < 1e-6)
    return e < 0 ? -1 * H : H;
  for (var r = Math.asin(0.5 * e), i, s, a, o, l = 0; l < 30; l++)
    if (s = Math.sin(r), a = Math.cos(r), o = t * s, i = Math.pow(1 - o * o, 2) / (2 * a) * (e / (1 - t * t) - s / (1 - o * o) + 0.5 / t * Math.log((1 - o) / (1 + o))), r += i, Math.abs(i) <= 1e-10)
      return r;
  return NaN;
}
function JM() {
  this.sphere || (this.k0 = br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function QM(t) {
  var e = t.x, n = t.y, r, i, s = se(e - this.long0);
  if (this.sphere)
    r = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(n) / Math.cos(this.lat_ts);
  else {
    var a = Si(this.e, Math.sin(n));
    r = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = r, t.y = i, t;
}
function eT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), n = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (n = ZM(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = n, t;
}
var tT = ["cea"];
const nT = {
  init: JM,
  forward: QM,
  inverse: eT,
  names: tT
};
function rT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function iT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = la(n - this.lat0);
  return t.x = this.x0 + this.a * r * this.rc, t.y = this.y0 + this.a * i, t;
}
function sT(t) {
  var e = t.x, n = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = la(this.lat0 + (n - this.y0) / this.a), t;
}
var aT = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const oT = {
  init: rT,
  forward: iT,
  inverse: sT,
  names: aT
};
var qp = 20;
function lT() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Mo(this.es), this.e1 = To(this.es), this.e2 = No(this.es), this.e3 = Lo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function uT(t) {
  var e = t.x, n = t.y, r, i, s, a = se(e - this.long0);
  if (s = a * Math.sin(n), this.sphere)
    Math.abs(n) <= ne ? (r = this.a * a, i = -1 * this.a * this.lat0) : (r = this.a * Math.sin(s) / Math.tan(n), i = this.a * (la(n - this.lat0) + (1 - Math.cos(s)) / Math.tan(n)));
  else if (Math.abs(n) <= ne)
    r = this.a * a, i = -1 * this.ml0;
  else {
    var o = ia(this.a, this.e, Math.sin(n)) / Math.tan(n);
    r = o * Math.sin(s), i = this.a * Jt(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(s));
  }
  return t.x = r + this.x0, t.y = i + this.y0, t;
}
function cT(t) {
  var e, n, r, i, s, a, o, l, u;
  if (r = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= ne)
      e = se(r / this.a + this.long0), n = 0;
    else {
      a = this.lat0 + i / this.a, o = r * r / this.a / this.a + a * a, l = a;
      var f;
      for (s = qp; s; --s)
        if (f = Math.tan(l), u = -1 * (a * (l * f + 1) - l - 0.5 * (l * l + o) * f) / ((l - a) / f - 1), l += u, Math.abs(u) <= ne) {
          n = l;
          break;
        }
      e = se(this.long0 + Math.asin(r * Math.tan(l) / this.a) / Math.sin(n));
    }
  else if (Math.abs(i + this.ml0) <= ne)
    n = 0, e = se(this.long0 + r / this.a);
  else {
    a = (this.ml0 + i) / this.a, o = r * r / this.a / this.a + a * a, l = a;
    var c, h, d, p, m;
    for (s = qp; s; --s)
      if (m = this.e * Math.sin(l), c = Math.sqrt(1 - m * m) * Math.tan(l), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), p = h / this.a, u = (a * (c * p + 1) - p - 0.5 * c * (p * p + o)) / (this.es * Math.sin(2 * l) * (p * p + o - 2 * a * p) / (4 * c) + (a - p) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= ne) {
        n = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(n), 2)) * Math.tan(n), e = se(this.long0 + Math.asin(r * c / this.a) / Math.sin(n));
  }
  return t.x = e, t.y = n, t;
}
var fT = ["Polyconic", "poly"];
const hT = {
  init: lT,
  forward: uT,
  inverse: cT,
  names: fT
};
function dT() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function pT(t) {
  var e, n = t.x, r = t.y, i = r - this.lat0, s = n - this.long0, a = i / Ua * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, p, m, v = 0, y = 0;
  for (e = 1; e <= 6; e++)
    p = h * f - d * c, m = d * f + h * c, h = p, d = m, v = v + this.B_re[e] * h - this.B_im[e] * d, y = y + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = y * this.a + this.x0, t.y = v * this.a + this.y0, t;
}
function mT(t) {
  var e, n = t.x, r = t.y, i = n - this.x0, s = r - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var p = 0; p < this.iterations; p++) {
    var m = h, v = d, y, g, E = a, b = o;
    for (e = 2; e <= 6; e++)
      y = m * h - v * d, g = v * h + m * d, m = y, v = g, E = E + (e - 1) * (this.B_re[e] * m - this.B_im[e] * v), b = b + (e - 1) * (this.B_im[e] * m + this.B_re[e] * v);
    m = 1, v = 0;
    var w = this.B_re[1], N = this.B_im[1];
    for (e = 2; e <= 6; e++)
      y = m * h - v * d, g = v * h + m * d, m = y, v = g, w = w + e * (this.B_re[e] * m - this.B_im[e] * v), N = N + e * (this.B_im[e] * m + this.B_re[e] * v);
    var O = w * w + N * N;
    h = (E * w + b * N) / O, d = (b * w - E * N) / O;
  }
  var R = h, D = d, L = 1, P = 0;
  for (e = 1; e <= 9; e++)
    L = L * R, P = P + this.D[e] * L;
  var I = this.lat0 + P * Ua * 1e5, J = this.long0 + D;
  return t.x = J, t.y = I, t;
}
var gT = ["New_Zealand_Map_Grid", "nzmg"];
const yT = {
  init: dT,
  forward: pT,
  inverse: mT,
  names: gT
};
function vT() {
}
function _T(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = this.x0 + this.a * r, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + n / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function bT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), n = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = n, t;
}
var ET = ["Miller_Cylindrical", "mill"];
const ST = {
  init: vT,
  forward: _T,
  inverse: bT,
  names: ET
};
var wT = 20;
function xT() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Vv(this.es);
}
function OT(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = wT; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < ne)
          break;
      }
    e = this.a * this.C_x * r * (this.m + Math.cos(i)), n = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    n = this.a * Ju(i, l, u, this.en), e = this.a * r * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = n, t;
}
function MT(t) {
  var e, n, r, i;
  return t.x -= this.x0, r = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, r = r / (this.C_x * (this.m + Math.cos(e))), this.m ? e = Ti((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = Ti(Math.sin(e) / this.n)), r = se(r + this.long0), e = la(e)) : (e = Gv(t.y / this.a, this.es, this.en), i = Math.abs(e), i < H ? (i = Math.sin(e), n = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), r = se(n)) : i - ne < H && (r = this.long0)), t.x = r, t.y = e, t;
}
var TT = ["Sinusoidal", "sinu"];
const NT = {
  init: xT,
  forward: OT,
  inverse: MT,
  names: TT
};
function LT() {
}
function CT(t) {
  for (var e = t.x, n = t.y, r = se(e - this.long0), i = n, s = Math.PI * Math.sin(n); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < ne)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(n) < ne && (r = 0);
  var o = 0.900316316158 * this.a * r * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function AT(t) {
  var e, n;
  t.x -= this.x0, t.y -= this.y0, n = t.y / (1.4142135623731 * this.a), Math.abs(n) > 0.999999999999 && (n = 0.999999999999), e = Math.asin(n);
  var r = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  r < -Math.PI && (r = -Math.PI), r > Math.PI && (r = Math.PI), n = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(n) > 1 && (n = 1);
  var i = Math.asin(n);
  return t.x = r, t.y = i, t;
}
var PT = ["Mollweide", "moll"];
const DT = {
  init: LT,
  forward: CT,
  inverse: AT,
  names: PT
};
function kT() {
  Math.abs(this.lat1 + this.lat2) < ne || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Mo(this.es), this.e1 = To(this.es), this.e2 = No(this.es), this.e3 = Lo(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = br(this.e, this.sinphi, this.cosphi), this.ml1 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < ne ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = br(this.e, this.sinphi, this.cosphi), this.ml2 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function IT(t) {
  var e = t.x, n = t.y, r;
  if (this.sphere)
    r = this.a * (this.g - n);
  else {
    var i = Jt(this.e0, this.e1, this.e2, this.e3, n);
    r = this.a * (this.g - i);
  }
  var s = this.ns * se(e - this.long0), a = this.x0 + r * Math.sin(s), o = this.y0 + this.rh - r * Math.cos(s);
  return t.x = a, t.y = o, t;
}
function RT(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, n, r, i;
  this.ns >= 0 ? (n = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (n = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (n !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), r = la(this.g - n / this.a), t.x = i, t.y = r, t;
  var a = this.g - n / this.a;
  return r = uu(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = r, t;
}
var $T = ["Equidistant_Conic", "eqdc"];
const FT = {
  init: kT,
  forward: IT,
  inverse: RT,
  names: $T
};
function VT() {
  this.R = this.a;
}
function GT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s;
  Math.abs(n) <= ne && (i = this.x0 + this.R * r, s = this.y0);
  var a = Ti(2 * Math.abs(n / Math.PI));
  (Math.abs(r) <= ne || Math.abs(Math.abs(n) - H) <= ne) && (i = this.x0, n >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / r - r / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), p = d * d, m = Math.PI * this.R * (o * (c - p) + Math.sqrt(l * (c - p) * (c - p) - (p + l) * (h - p))) / (p + l);
  r < 0 && (m = -m), i = this.x0 + m;
  var v = l + c;
  return m = Math.PI * this.R * (d * v - o * Math.sqrt((p + l) * (l + 1) - v * v)) / (p + l), n >= 0 ? s = this.y0 + m : s = this.y0 - m, t.x = i, t.y = s, t;
}
function jT(t) {
  var e, n, r, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, r = t.x / c, i = t.y / c, s = r * r + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + r * r, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? n = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : n = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(r) < ne ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (r * r - i * i) + s * s)) / 2 / r), t.x = e, t.y = n, t;
}
var UT = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const BT = {
  init: VT,
  forward: GT,
  inverse: jT,
  names: UT
};
function WT() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function qT(t) {
  var e = t.x, n = t.y, r = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, p, m, v, y, g, E, b, w, N, O, R, D, L, P, I;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= ne ? (t.x = this.x0 + this.a * (H - n) * Math.sin(s), t.y = this.y0 - this.a * (H - n) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= ne ? (t.x = this.x0 + this.a * (H + n) * Math.sin(s), t.y = this.y0 + this.a * (H + n) * Math.cos(s), t) : (O = this.sin_p12 * r + this.cos_p12 * i * Math.cos(s), w = Math.acos(O), N = w ? w / Math.sin(w) : 1, t.x = this.x0 + this.a * N * i * Math.sin(s), t.y = this.y0 + this.a * N * (this.cos_p12 * r - this.sin_p12 * i * Math.cos(s)), t) : (a = Mo(this.es), o = To(this.es), l = No(this.es), u = Lo(this.es), Math.abs(this.sin_p12 - 1) <= ne ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= ne ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = r / i, d = ia(this.a, this.e, this.sin_p12), p = ia(this.a, this.e, r), m = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (p * i)), v = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(m) - this.sin_p12 * Math.cos(s)), v === 0 ? R = Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : Math.abs(Math.abs(v) - Math.PI) <= ne ? R = -Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : R = Math.asin(Math.sin(s) * Math.cos(m) / Math.sin(v)), y = this.e * this.sin_p12 / Math.sqrt(1 - this.es), g = this.e * this.cos_p12 * Math.cos(v) / Math.sqrt(1 - this.es), E = y * g, b = g * g, D = R * R, L = D * R, P = L * R, I = P * R, w = d * R * (1 - D * b * (1 - b) / 6 + L / 8 * E * (1 - 2 * b) + P / 120 * (b * (4 - 7 * b) - 3 * y * y * (1 - 7 * b)) - I / 48 * E), t.x = this.x0 + w * Math.sin(v), t.y = this.y0 + w * Math.cos(v), t));
}
function HT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a, o, l, u, f, c, h, d, p, m, v, y, g, E, b, w, N, O, R;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * H * this.a ? void 0 : (n = e / this.a, r = Math.sin(n), i = Math.cos(n), s = this.long0, Math.abs(e) <= ne ? a = this.lat0 : (a = Ti(i * this.sin_p12 + t.y * r * this.cos_p12 / e), o = Math.abs(this.lat0) - H, Math.abs(o) <= ne ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p12 * i - t.y * this.sin_p12 * r))), t.x = s, t.y = a, t)) : (l = Mo(this.es), u = To(this.es), f = No(this.es), c = Lo(this.es), Math.abs(this.sin_p12 - 1) <= ne ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = uu(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= ne ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = uu(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), v = Math.atan2(t.x, t.y), p = ia(this.a, this.e, this.sin_p12), y = Math.cos(v), g = this.e * this.cos_p12 * y, E = -g * g / (1 - this.es), b = 3 * this.es * (1 - E) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), w = e / p, N = w - E * (1 + E) * Math.pow(w, 3) / 6 - b * (1 + 3 * E) * Math.pow(w, 4) / 24, O = 1 - E * N * N / 2 - w * N * N * N / 6, m = Math.asin(this.sin_p12 * Math.cos(N) + this.cos_p12 * Math.sin(N) * y), s = se(this.long0 + Math.asin(Math.sin(v) * Math.sin(N) / Math.cos(m))), R = Math.sin(m), a = Math.atan2((R - this.es * O * this.sin_p12) * Math.tan(m), R * (1 - this.es)), t.x = s, t.y = a, t));
}
var zT = ["Azimuthal_Equidistant", "aeqd"];
const YT = {
  init: WT,
  forward: qT,
  inverse: HT,
  names: zT
};
function XT() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function KT(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, (a > 0 || Math.abs(a) <= ne) && (o = this.a * s * n * Math.sin(r), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function ZT(t) {
  var e, n, r, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), n = Ti(e / this.a), r = Math.sin(n), i = Math.cos(n), a = this.long0, Math.abs(e) <= ne ? (o = this.lat0, t.x = a, t.y = o, t) : (o = Ti(i * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.abs(this.lat0) - H, Math.abs(s) <= ne ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p14 * i - t.y * this.sin_p14 * r)), t.x = a, t.y = o, t));
}
var JT = ["ortho"];
const QT = {
  init: XT,
  forward: KT,
  inverse: ZT,
  names: JT
};
var ot = {
  FRONT: 1,
  RIGHT: 2,
  BACK: 3,
  LEFT: 4,
  TOP: 5,
  BOTTOM: 6
}, He = {
  AREA_0: 1,
  AREA_1: 2,
  AREA_2: 3,
  AREA_3: 4
};
function eN() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= H - qe / 2 ? this.face = ot.TOP : this.lat0 <= -(H - qe / 2) ? this.face = ot.BOTTOM : Math.abs(this.long0) <= qe ? this.face = ot.FRONT : Math.abs(this.long0) <= H + qe ? this.face = this.long0 > 0 ? ot.RIGHT : ot.LEFT : this.face = ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function tN(t) {
  var e = { x: 0, y: 0 }, n, r, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? n = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : n = t.y, r = t.x, this.face === ot.TOP)
    s = H - n, r >= qe && r <= H + qe ? (l.value = He.AREA_0, i = r - H) : r > H + qe || r <= -(H + qe) ? (l.value = He.AREA_1, i = r > 0 ? r - yt : r + yt) : r > -(H + qe) && r <= -qe ? (l.value = He.AREA_2, i = r + H) : (l.value = He.AREA_3, i = r);
  else if (this.face === ot.BOTTOM)
    s = H + n, r >= qe && r <= H + qe ? (l.value = He.AREA_0, i = -r + H) : r < qe && r >= -qe ? (l.value = He.AREA_1, i = -r) : r < -qe && r >= -(H + qe) ? (l.value = He.AREA_2, i = -r - H) : (l.value = He.AREA_3, i = r > 0 ? -r + yt : -r - yt);
  else {
    var u, f, c, h, d, p, m;
    this.face === ot.RIGHT ? r = Xs(r, +H) : this.face === ot.BACK ? r = Xs(r, +yt) : this.face === ot.LEFT && (r = Xs(r, -H)), h = Math.sin(n), d = Math.cos(n), p = Math.sin(r), m = Math.cos(r), u = d * m, f = d * p, c = h, this.face === ot.FRONT ? (s = Math.acos(u), i = nl(s, c, f, l)) : this.face === ot.RIGHT ? (s = Math.acos(f), i = nl(s, c, -u, l)) : this.face === ot.BACK ? (s = Math.acos(-u), i = nl(s, c, -f, l)) : this.face === ot.LEFT ? (s = Math.acos(-f), i = nl(s, c, u, l)) : (s = i = 0, l.value = He.AREA_0);
  }
  return o = Math.atan(12 / yt * (i + Math.acos(Math.sin(i) * Math.cos(qe)) - H)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === He.AREA_1 ? o += H : l.value === He.AREA_2 ? o += yt : l.value === He.AREA_3 && (o += 1.5 * yt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function nN(t) {
  var e = { lam: 0, phi: 0 }, n, r, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, r = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), n = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = He.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = He.AREA_1, n -= H) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = He.AREA_2, n = n < 0 ? n + yt : n - yt) : (c.value = He.AREA_3, n += H), f = yt / 12 * Math.tan(n), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(n), s = Math.tan(r), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === ot.TOP)
    u = Math.acos(l), e.phi = H - u, c.value === He.AREA_0 ? e.lam = o + H : c.value === He.AREA_1 ? e.lam = o < 0 ? o + yt : o - yt : c.value === He.AREA_2 ? e.lam = o - H : e.lam = o;
  else if (this.face === ot.BOTTOM)
    u = Math.acos(l), e.phi = u - H, c.value === He.AREA_0 ? e.lam = -o + H : c.value === He.AREA_1 ? e.lam = -o : c.value === He.AREA_2 ? e.lam = -o - H : e.lam = o < 0 ? -o - yt : -o + yt;
  else {
    var h, d, p;
    h = l, f = h * h, f >= 1 ? p = 0 : p = Math.sqrt(1 - f) * Math.sin(o), f += p * p, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === He.AREA_1 ? (f = d, d = -p, p = f) : c.value === He.AREA_2 ? (d = -d, p = -p) : c.value === He.AREA_3 && (f = d, d = p, p = -f), this.face === ot.RIGHT ? (f = h, h = -d, d = f) : this.face === ot.BACK ? (h = -h, d = -d) : this.face === ot.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-p) - H, e.lam = Math.atan2(d, h), this.face === ot.RIGHT ? e.lam = Xs(e.lam, -H) : this.face === ot.BACK ? e.lam = Xs(e.lam, -yt) : this.face === ot.LEFT && (e.lam = Xs(e.lam, +H));
  }
  if (this.es !== 0) {
    var m, v, y;
    m = e.phi < 0 ? 1 : 0, v = Math.tan(e.phi), y = this.b / Math.sqrt(v * v + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - y * y) / (this.one_minus_f * y)), m && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function nl(t, e, n, r) {
  var i;
  return t < ne ? (r.value = He.AREA_0, i = 0) : (i = Math.atan2(e, n), Math.abs(i) <= qe ? r.value = He.AREA_0 : i > qe && i <= H + qe ? (r.value = He.AREA_1, i -= H) : i > H + qe || i <= -(H + qe) ? (r.value = He.AREA_2, i = i >= 0 ? i - yt : i + yt) : (r.value = He.AREA_3, i += H)), i;
}
function Xs(t, e) {
  var n = t + e;
  return n < -yt ? n += oo : n > +yt && (n -= oo), n;
}
var rN = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const iN = {
  init: eN,
  forward: tN,
  inverse: nN,
  names: rN
};
var jf = [
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
], La = [
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
], Bv = 0.8487, Wv = 1.3523, qv = ur / 5, sN = 1 / qv, Gs = 18, cu = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, aN = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function oN(t, e, n, r) {
  for (var i = e; r; --r) {
    var s = t(i);
    if (i -= s, Math.abs(s) < n)
      break;
  }
  return i;
}
function lN() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function uN(t) {
  var e = se(t.x - this.long0), n = Math.abs(t.y), r = Math.floor(n * qv);
  r < 0 ? r = 0 : r >= Gs && (r = Gs - 1), n = ur * (n - sN * r);
  var i = {
    x: cu(jf[r], n) * e,
    y: cu(La[r], n)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Bv + this.x0, i.y = i.y * this.a * Wv + this.y0, i;
}
function cN(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * Bv),
    y: Math.abs(t.y - this.y0) / (this.a * Wv)
  };
  if (e.y >= 1)
    e.x /= jf[Gs][0], e.y = t.y < 0 ? -H : H;
  else {
    var n = Math.floor(e.y * Gs);
    for (n < 0 ? n = 0 : n >= Gs && (n = Gs - 1); ; )
      if (La[n][0] > e.y)
        --n;
      else if (La[n + 1][0] <= e.y)
        ++n;
      else
        break;
    var r = La[n], i = 5 * (e.y - r[0]) / (La[n + 1][0] - r[0]);
    i = oN(function(s) {
      return (cu(r, s) - e.y) / aN(r, s);
    }, i, ne, 100), e.x /= cu(jf[n], i), e.y = (5 * n + i) * Dt, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var fN = ["Robinson", "robin"];
const hN = {
  init: lN,
  forward: uN,
  inverse: cN,
  names: fN
};
function dN() {
  this.name = "geocent";
}
function pN(t) {
  var e = Cv(t, this.es, this.a);
  return e;
}
function mN(t) {
  var e = Av(t, this.es, this.a, this.b);
  return e;
}
var gN = ["Geocentric", "geocentric", "geocent", "Geocent"];
const yN = {
  init: dN,
  forward: pN,
  inverse: mN,
  names: gN
};
var Ut = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, va = {
  h: { def: 1e5, num: !0 },
  azi: { def: 0, num: !0, degrees: !0 },
  tilt: { def: 0, num: !0, degrees: !0 },
  long0: { def: 0, num: !0 },
  lat0: { def: 0, num: !0 }
};
function vN() {
  if (Object.keys(va).forEach(function(n) {
    if (typeof this[n] > "u")
      this[n] = va[n].def;
    else {
      if (va[n].num && isNaN(this[n]))
        throw new Error("Invalid parameter value, must be numeric " + n + " = " + this[n]);
      va[n].num && (this[n] = parseFloat(this[n]));
    }
    va[n].degrees && (this[n] = this[n] * Dt);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - H) < ne ? this.mode = this.lat0 < 0 ? Ut.S_POLE : Ut.N_POLE : Math.abs(this.lat0) < ne ? this.mode = Ut.EQUIT : (this.mode = Ut.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function _N(t) {
  t.x -= this.long0;
  var e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i, s;
  switch (this.mode) {
    case Ut.OBLIQ:
      s = this.sinph0 * e + this.cosph0 * n * r;
      break;
    case Ut.EQUIT:
      s = n * r;
      break;
    case Ut.S_POLE:
      s = -e;
      break;
    case Ut.N_POLE:
      s = e;
      break;
  }
  switch (s = this.pn1 / (this.p - s), i = s * n * Math.sin(t.x), this.mode) {
    case Ut.OBLIQ:
      s *= this.cosph0 * e - this.sinph0 * n * r;
      break;
    case Ut.EQUIT:
      s *= e;
      break;
    case Ut.N_POLE:
      s *= -(n * r);
      break;
    case Ut.S_POLE:
      s *= n * r;
      break;
  }
  var a, o;
  return a = s * this.cg + i * this.sg, o = 1 / (a * this.sw * this.h1 + this.cw), i = (i * this.cg - s * this.sg) * this.cw * o, s = a * o, t.x = i * this.a, t.y = s * this.a, t;
}
function bN(t) {
  t.x /= this.a, t.y /= this.a;
  var e = { x: t.x, y: t.y }, n, r, i;
  i = 1 / (this.pn1 - t.y * this.sw), n = this.pn1 * t.x * i, r = this.pn1 * t.y * this.cw * i, t.x = n * this.cg + r * this.sg, t.y = r * this.cg - n * this.sg;
  var s = Mn(t.x, t.y);
  if (Math.abs(s) < ne)
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
var EN = ["Tilted_Perspective", "tpers"];
const SN = {
  init: vN,
  forward: _N,
  inverse: bN,
  names: EN
};
function wN() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, e = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = e, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function xN(t) {
  var e = t.x, n = t.y, r, i, s, a;
  if (e = e - this.long0, this.shape === "ellipse") {
    n = Math.atan(this.radius_p2 * Math.tan(n));
    var o = this.radius_p / Mn(this.radius_p * Math.cos(n), Math.sin(n));
    if (i = o * Math.cos(e) * Math.cos(n), s = o * Math.sin(e) * Math.cos(n), a = o * Math.sin(n), (this.radius_g - i) * i - s * s - a * a * this.radius_p_inv2 < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    r = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Mn(a, r)), t.y = this.radius_g_1 * Math.atan(a / r)) : (t.x = this.radius_g_1 * Math.atan(s / r), t.y = this.radius_g_1 * Math.atan(a / Mn(s, r)));
  } else
    this.shape === "sphere" && (r = Math.cos(n), i = Math.cos(e) * r, s = Math.sin(e) * r, a = Math.sin(n), r = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Mn(a, r)), t.y = this.radius_g_1 * Math.atan(a / r)) : (t.x = this.radius_g_1 * Math.atan(s / r), t.y = this.radius_g_1 * Math.atan(a / Mn(s, r))));
  return t.x = t.x * this.a, t.y = t.y * this.a, t;
}
function ON(t) {
  var e = -1, n = 0, r = 0, i, s, a, o;
  if (t.x = t.x / this.a, t.y = t.y / this.a, this.shape === "ellipse") {
    this.flip_axis ? (r = Math.tan(t.y / this.radius_g_1), n = Math.tan(t.x / this.radius_g_1) * Mn(1, r)) : (n = Math.tan(t.x / this.radius_g_1), r = Math.tan(t.y / this.radius_g_1) * Mn(1, n));
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
var MN = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const TN = {
  init: wN,
  forward: xN,
  inverse: ON,
  names: MN
};
var Ba = 1.340264, Wa = -0.081106, qa = 893e-6, Ha = 3796e-6, fu = Math.sqrt(3) / 2;
function NN() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function LN(t) {
  var e = se(t.x - this.long0), n = t.y, r = Math.asin(fu * Math.sin(n)), i = r * r, s = i * i * i;
  return t.x = e * Math.cos(r) / (fu * (Ba + 3 * Wa * i + s * (7 * qa + 9 * Ha * i))), t.y = r * (Ba + Wa * i + s * (qa + Ha * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function CN(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var e = 1e-9, n = 12, r = t.y, i, s, a, o, l, u;
  for (u = 0; u < n && (i = r * r, s = i * i * i, a = r * (Ba + Wa * i + s * (qa + Ha * i)) - t.y, o = Ba + 3 * Wa * i + s * (7 * qa + 9 * Ha * i), r -= l = a / o, !(Math.abs(l) < e)); ++u)
    ;
  return i = r * r, s = i * i * i, t.x = fu * t.x * (Ba + 3 * Wa * i + s * (7 * qa + 9 * Ha * i)) / Math.cos(r), t.y = Math.asin(Math.sin(r) / fu), t.x = se(t.x + this.long0), t;
}
var AN = ["eqearth", "Equal Earth", "Equal_Earth"];
const PN = {
  init: NN,
  forward: LN,
  inverse: CN,
  names: AN
};
function DN(t) {
  t.Proj.projections.add($l), t.Proj.projections.add(Fl), t.Proj.projections.add(kO), t.Proj.projections.add(WO), t.Proj.projections.add(KO), t.Proj.projections.add(tM), t.Proj.projections.add(oM), t.Proj.projections.add(hM), t.Proj.projections.add(yM), t.Proj.projections.add(SM), t.Proj.projections.add(VM), t.Proj.projections.add(qM), t.Proj.projections.add(KM), t.Proj.projections.add(nT), t.Proj.projections.add(oT), t.Proj.projections.add(hT), t.Proj.projections.add(yT), t.Proj.projections.add(ST), t.Proj.projections.add(NT), t.Proj.projections.add(DT), t.Proj.projections.add(FT), t.Proj.projections.add(BT), t.Proj.projections.add(YT), t.Proj.projections.add(QT), t.Proj.projections.add(iN), t.Proj.projections.add(hN), t.Proj.projections.add(yN), t.Proj.projections.add(SN), t.Proj.projections.add(TN), t.Proj.projections.add(PN);
}
qt.defaultDatum = "WGS84";
qt.Proj = pr;
qt.WGS84 = new qt.Proj("WGS84");
qt.Point = ra;
qt.toPoint = Pv;
qt.defs = Kt;
qt.nadgrid = Rx;
qt.transform = lu;
qt.mgrs = Jx;
qt.version = "__VERSION__";
DN(qt);
function kN() {
  var t, e, n;
  qt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), qt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), qt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), fb(qt), (t = wl("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = wl("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (n = wl("EPSG:2169")) == null || n.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function IN(t, e, n) {
  const r = he(t);
  class i extends Uh {
    constructor(a) {
      super(r, a, e, n);
    }
  }
  return Ke(i, "def", r), i;
}
const RN = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Uh extends RN {
  constructor(n, r = {}, i = {}, s) {
    super();
    Ke(this, "_instance", null);
    Ke(this, "_connected", !1);
    Ke(this, "_resolved", !1);
    Ke(this, "_numberProps", null);
    Ke(this, "_styles");
    Ke(this, "_slots");
    this._def = n, this._props = r, this._config = i, this._config = et(
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
    this._connected = !1, Zl(() => {
      this._connected || (mp(null, this._root), this._instance = null);
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
      if (a && !le(a))
        for (const u in a) {
          const f = a[u];
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = cf(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[gn(u)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((i) => n(i, !0)) : n(this._def);
  }
  _resolveProps(n) {
    const { props: r } = n, i = le(r) ? r : Object.keys(r || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(gn))
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
    const i = gn(n);
    this._numberProps && this._numberProps[i] && (r = cf(r)), this._setProp(i, r, !1);
  }
  _getProp(n) {
    return this._props[n];
  }
  _setProp(n, r, i = !0, s = !0) {
    r !== this._props[n] && (this._props[n] = r, s && this._instance && this._update(), i && (r === !0 ? this.setAttribute(un(n), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(un(n), r + "") : r || this.removeAttribute(un(n))));
  }
  _update() {
    mp(this._createVNode(), this._root);
  }
  _createVNode() {
    const n = ee(this._def, et({}, this._props));
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
        i(a, o), un(a) !== a && i(un(a), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Uh) {
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
var co = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(co || {});
const $N = co.INFO, FN = 7e3, VN = 4e3, hu = vs(
  "alert-notifications",
  () => {
    const t = _e([]);
    function e(r, i = $N, s) {
      const a = {
        message: r,
        type: i,
        duration: s != null ? s : i === co.WARNING ? VN : FN
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
), GN = /* @__PURE__ */ he({
  __name: "notification-item",
  props: {
    notification: { type: Object, required: !0 }
  },
  emits: ["close"],
  setup(t) {
    const e = t, n = rt(!0);
    function r(i, s) {
      setTimeout(() => {
        n.value = !1;
      }, e.notification.duration), s();
    }
    return (i, s) => {
      const a = Th("dompurify-html");
      return A(), Fe(Xu, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: r,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: bi(() => [
          n.value ? eu((A(), V("div", {
            key: 0,
            class: Pe(["lux-alert", `lux-${e.notification.type}`]),
            role: "alert"
          }, null, 2)), [
            [a, e.notification.message]
          ]) : F("v-if", !0)
        ]),
        _: 1
      });
    };
  }
}), de = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, jN = /* @__PURE__ */ de(GN, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/alert-notifications/notification-item.vue"]]), UN = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, BN = /* @__PURE__ */ he({
  __name: "alert-notifications",
  setup(t) {
    const e = hu(), { notifications: n } = We(e);
    function r(i) {
      e.removeNotification(i);
    }
    return (i, s) => (A(), Fe(Xy, { to: "body" }, [
      M(n).length ? (A(), V("div", UN, [
        (A(!0), V(Ue, null, Dn(M(n), (a, o) => (A(), Fe(jN, {
          key: o,
          notification: a,
          onClose: () => r(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : F("v-if", !0)
    ]));
  }
}), WN = /* @__PURE__ */ de(BN, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/alert-notifications/alert-notifications.vue"]]), qN = { class: "lux-dropdown" }, HN = { class: "h-full" }, zN = ["aria-expanded"], YN = /* @__PURE__ */ C("span", { class: "lux-caret" }, null, -1), XN = { class: "lux-dropdown-wrapper" }, KN = ["aria-label", "data-value"], ZN = /* @__PURE__ */ he({
  __name: "dropdown-list",
  props: {
    placeholder: { type: String, required: !0 },
    options: { type: Array, required: !0, default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = rt(!1), s = rt();
    function a(f) {
      i.value = f === void 0 ? !i.value : f;
    }
    function o(f) {
      f.stopImmediatePropagation(), a();
    }
    function l(f) {
      s.value = f.target.dataset.value, r("change", s.value);
    }
    function u() {
      a(!1);
    }
    return _n(() => document.addEventListener("click", u)), Ai(() => document.removeEventListener("click", u)), (f, c) => {
      var h, d;
      return A(), V("div", qN, [
        C("div", HN, [
          C("button", {
            type: "button",
            class: Pe(["lux-btn lux-dropdown-btn", i.value ? "expanded" : ""]),
            "aria-expanded": i.value,
            "aria-haspopup": "true",
            onClick: o
          }, [
            C("span", null, ae((d = n.placeholder) != null ? d : (h = n.options[0]) == null ? void 0 : h.label), 1),
            YN
          ], 10, zN)
        ]),
        C("div", XN, [
          C("ul", {
            class: Pe(["lux-dropdown-list", i.value ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (A(!0), V(Ue, null, Dn(n.options, (p) => (A(), V("li", {
              key: p.value,
              class: Pe(f.modelValue === p.value ? "selected" : "")
            }, [
              C("button", {
                class: "lux-dropdown-list-item",
                "aria-label": p.ariaLabel,
                "data-value": p.value,
                onClick: l
              }, ae(p.label), 9, KN)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), Hv = /* @__PURE__ */ de(ZN, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/dropdown-list.vue"]]), za = "EPSG:3857", zv = "EPSG:4326", JN = "EPSG:2169";
let Ac;
const Hp = rt();
function Fr() {
  function t() {
    return Ac;
  }
  function e() {
    return Hp.value = Ac = new hb({
      view: new db({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), Ac;
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
    const h = (d = f == null ? void 0 : f.layers) == null ? void 0 : d.find((p) => n(p, c));
    return !r(h, c);
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
    olMap: Hp,
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
const ks = /* @__PURE__ */ new Map();
function Y6() {
  ks.clear();
}
function Cn(t) {
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cn(t);
}
function wr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function QN(t, e) {
  if (Cn(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Cn(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Yv(t) {
  var e = QN(t, "string");
  return Cn(e) == "symbol" ? e : e + "";
}
function zp(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Yv(r.key), r);
  }
}
function xr(t, e, n) {
  return e && zp(t.prototype, e), n && zp(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function wi(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Uf(t, e) {
  return Uf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Uf(t, e);
}
function Qu(t, e) {
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
  }), e && Uf(t, e);
}
function Co(t, e) {
  if (e && (Cn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wi(t);
}
function Er(t) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(t);
}
function Pi(t, e, n) {
  return e = Yv(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function e2(t) {
  if (Array.isArray(t))
    return t;
}
function t2(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Yp(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function n2(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Yp(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Yp(t, e);
  }
}
function r2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i2(t) {
  return e2(t) || t2(t) || n2(t) || r2();
}
function Xp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var s2 = {
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
}, a2 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wr(this, t), this.init(e, n);
  }
  return xr(t, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = n || s2, this.options = r, this.debug = r.debug;
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
      return new t(this.logger, Kp(Kp({}, {
        prefix: "".concat(this.prefix, ":").concat(n, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(n) {
      return n = n || this.options, n.prefix = n.prefix || this.prefix, new t(this.logger, n);
    }
  }]), t;
}(), cr = new a2(), Ni = function() {
  function t() {
    wr(this, t), this.observers = {};
  }
  return xr(t, [{
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
function _a() {
  var t, e, n = new Promise(function(r, i) {
    t = r, e = i;
  });
  return n.resolve = t, n.reject = e, n;
}
function Zp(t) {
  return t == null ? "" : "" + t;
}
function o2(t, e, n) {
  t.forEach(function(r) {
    e[r] && (n[r] = e[r]);
  });
}
function Bh(t, e, n) {
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
function Jp(t, e, n) {
  var r = Bh(t, e, Object), i = r.obj, s = r.k;
  i[s] = n;
}
function l2(t, e, n, r) {
  var i = Bh(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], r && (s[a] = s[a].concat(n)), r || s[a].push(n);
}
function du(t, e) {
  var n = Bh(t, e), r = n.obj, i = n.k;
  if (!!r)
    return r[i];
}
function u2(t, e, n) {
  var r = du(t, n);
  return r !== void 0 ? r : du(e, n);
}
function Xv(t, e, n) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? typeof t[r] == "string" || t[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? n && (t[r] = e[r]) : Xv(t[r], e[r], n) : t[r] = e[r]);
  return t;
}
function Ms(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var c2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function f2(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return c2[e];
  }) : t;
}
var ec = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, h2 = [" ", ",", "?", "!", ";"];
function d2(t, e, n) {
  e = e || "", n = n || "";
  var r = h2.filter(function(o) {
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
function pu(t, e) {
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
        return u ? pu(l, u, n) : void 0;
      }
      i = i[r[s]];
    }
    return i;
  }
}
function Qp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function p2(t) {
  var e = m2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Co(this, i);
  };
}
function m2() {
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
var g2 = function(t) {
  Qu(n, t);
  var e = p2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return wr(this, n), i = e.call(this), ec && Ni.call(wi(i)), i.data = r || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return xr(n, [{
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
      var c = du(this.data, f);
      return c || !u || typeof a != "string" ? c : pu(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), Jp(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
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
      var c = du(this.data, f) || {};
      o ? Xv(c, a, l) : c = rl(rl({}, c), a), Jp(this.data, f, c), u.silent || this.emit("added", i, s, a);
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
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? rl(rl({}, {}), this.getResource(i, s)) : this.getResource(i, s);
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
}(Ni), Kv = {
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
function em(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? em(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : em(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function y2(t) {
  var e = v2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Co(this, i);
  };
}
function v2() {
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
var tm = {}, nm = function(t) {
  Qu(n, t);
  var e = y2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return wr(this, n), i = e.call(this), ec && Ni.call(wi(i)), o2(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, wi(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = cr.create("translator"), i;
  }
  return xr(n, [{
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
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !d2(i, a, o);
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
      if (Cn(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), Cn(s) === "object" && (s = Vt({}, s)), s || (s = {}), i == null)
        return "";
      Array.isArray(i) || (i = [String(i)]);
      var l = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, f = this.extractFromKey(i[i.length - 1], s), c = f.key, h = f.namespaces, d = h[h.length - 1], p = s.lng || this.language, m = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (p && p.toLowerCase() === "cimode") {
        if (m) {
          var v = s.nsSeparator || this.options.nsSeparator;
          return l ? {
            res: "".concat(d).concat(v).concat(c),
            usedKey: c,
            exactUsedKey: c,
            usedLng: p,
            usedNS: d
          } : "".concat(d).concat(v).concat(c);
        }
        return l ? {
          res: c,
          usedKey: c,
          exactUsedKey: c,
          usedLng: p,
          usedNS: d
        } : c;
      }
      var y = this.resolve(i, s), g = y && y.res, E = y && y.usedKey || c, b = y && y.exactUsedKey || c, w = Object.prototype.toString.apply(g), N = ["[object Number]", "[object Function]", "[object RegExp]"], O = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, R = !this.i18nFormat || this.i18nFormat.handleAsObject, D = typeof g != "string" && typeof g != "boolean" && typeof g != "number";
      if (R && g && D && N.indexOf(w) < 0 && !(typeof O == "string" && w === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, g, Vt(Vt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (y.res = L, y) : L;
        }
        if (u) {
          var P = w === "[object Array]", I = P ? [] : {}, J = P ? b : E;
          for (var pe in g)
            if (Object.prototype.hasOwnProperty.call(g, pe)) {
              var T = "".concat(J).concat(u).concat(pe);
              I[pe] = this.translate(T, Vt(Vt({}, s), {
                joinArrays: !1,
                ns: h
              })), I[pe] === T && (I[pe] = g[pe]);
            }
          g = I;
        }
      } else if (R && typeof O == "string" && w === "[object Array]")
        g = g.join(O), g && (g = this.extendTranslation(g, i, s, a));
      else {
        var $ = !1, z = !1, K = s.count !== void 0 && typeof s.count != "string", Le = n.hasDefaultValue(s), Ae = K ? this.pluralResolver.getSuffix(p, s.count, s) : "", pt = s["defaultValue".concat(Ae)] || s.defaultValue;
        !this.isValidLookup(g) && Le && ($ = !0, g = pt), this.isValidLookup(g) || (z = !0, g = c);
        var Rt = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Te = Rt && z ? void 0 : g, Lt = Le && pt !== g && this.options.updateMissing;
        if (z || $ || Lt) {
          if (this.logger.log(Lt ? "updateKey" : "missingKey", p, d, c, Lt ? pt : g), u) {
            var st = this.resolve(c, Vt(Vt({}, s), {}, {
              keySeparator: !1
            }));
            st && st.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var Jn = [], ke = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && ke && ke[0])
            for (var tn = 0; tn < ke.length; tn++)
              Jn.push(ke[tn]);
          else
            this.options.saveMissingTo === "all" ? Jn = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Jn.push(s.lng || this.language);
          var Qn = function(Ct, er, Mr) {
            var _ = Le && Mr !== g ? Mr : Te;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Ct, d, er, _, Lt, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Ct, d, er, _, Lt, s), o.emit("missingKey", Ct, d, er, g);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && K ? Jn.forEach(function(Or) {
            o.pluralResolver.getSuffixes(Or, s).forEach(function(Ct) {
              Qn([Or], c + Ct, s["defaultValue".concat(Ct)] || pt);
            });
          }) : Qn(Jn, c, pt));
        }
        g = this.extendTranslation(g, i, s, y, a), z && g === c && this.options.appendNamespaceToMissingKey && (g = "".concat(d, ":").concat(c)), (z || $) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(d, ":").concat(c) : c, $ ? g : void 0) : g = this.options.parseMissingKeyHandler(g));
      }
      return l ? (y.res = g, y) : g;
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
          for (var g = arguments.length, E = new Array(g), b = 0; b < g; b++)
            E[b] = arguments[b];
          return l && l[0] === E[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(E[0], " in key: ").concat(s[0])), null) : u.translate.apply(u, E.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var v = a.postProcess || this.options.postProcess, y = typeof v == "string" ? [v] : v;
      return i != null && y && y.length && a.applyPostProcessor !== !1 && (i = Kv.handle(y, i, s, this.options && this.options.postProcessPassResolved ? Vt({
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
          var v = a.count !== void 0 && typeof a.count != "string", y = v && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), g = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", E = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          m.forEach(function(b) {
            s.isValidLookup(o) || (c = b, !tm["".concat(E[0], "-").concat(b)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (tm["".concat(E[0], "-").concat(b)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(E.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach(function(w) {
              if (!s.isValidLookup(o)) {
                f = w;
                var N = [p];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(N, p, w, b, a);
                else {
                  var O;
                  v && (O = s.pluralResolver.getSuffix(w, a.count, a));
                  var R = "".concat(s.options.pluralSeparator, "zero");
                  if (v && (N.push(p + O), y && N.push(p + R)), g) {
                    var D = "".concat(p).concat(s.options.contextSeparator).concat(a.context);
                    N.push(D), v && (N.push(D + O), y && N.push(D + R));
                  }
                }
                for (var L; L = N.pop(); )
                  s.isValidLookup(o) || (u = L, o = s.getResource(w, b, L, a));
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
}(Ni);
function Pc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var rm = function() {
  function t(e) {
    wr(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = cr.create("languageUtils");
  }
  return xr(t, [{
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
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Pc(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Pc(i[1].toLowerCase())), r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Pc(i[2].toLowerCase()))), i.join("-");
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
}(), _2 = [{
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
}], b2 = {
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
}, E2 = ["v1", "v2", "v3"], im = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function S2() {
  var t = {};
  return _2.forEach(function(e) {
    e.lngs.forEach(function(n) {
      t[n] = {
        numbers: e.nr,
        plurals: b2[e.fc]
      };
    });
  }), t;
}
var w2 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wr(this, t), this.languageUtils = e, this.options = n, this.logger = cr.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = S2();
  }
  return xr(t, [{
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
        return im[a] - im[o];
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
      return !E2.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function sm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function am(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = u2(t, e, n);
  return !s && i && typeof n == "string" && (s = pu(t, n, r), s === void 0 && (s = pu(e, n, r))), s;
}
var x2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(this, t), this.logger = cr.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(n) {
      return n;
    }, this.init(e);
  }
  return xr(t, [{
    key: "init",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      n.interpolation || (n.interpolation = {
        escapeValue: !0
      });
      var r = n.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : f2, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Ms(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Ms(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Ms(r.nestingPrefix) : r.nestingPrefixEscaped || Ms("$t("), this.nestingSuffix = r.nestingSuffix ? Ms(r.nestingSuffix) : r.nestingSuffixEscaped || Ms(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
      function c(v) {
        return v.replace(/\$/g, "$$$$");
      }
      var h = function(y) {
        if (y.indexOf(a.formatSeparator) < 0) {
          var g = am(r, f, y, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(g, void 0, i, Fn(Fn(Fn({}, s), r), {}, {
            interpolationkey: y
          })) : g;
        }
        var E = y.split(a.formatSeparator), b = E.shift().trim(), w = E.join(a.formatSeparator).trim();
        return a.format(am(r, f, b, a.options.keySeparator, a.options.ignoreJSONStructure), w, i, Fn(Fn(Fn({}, s), r), {}, {
          interpolationkey: b
        }));
      };
      this.resetRegExp();
      var d = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, p = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, m = [{
        regex: this.regexpUnescape,
        safeValue: function(y) {
          return c(y);
        }
      }, {
        regex: this.regexp,
        safeValue: function(y) {
          return a.escapeValue ? c(a.escape(y)) : c(y);
        }
      }];
      return m.forEach(function(v) {
        for (u = 0; o = v.regex.exec(n); ) {
          var y = o[1].trim();
          if (l = h(y), l === void 0)
            if (typeof d == "function") {
              var g = d(n, o, s);
              l = typeof g == "string" ? g : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, y))
              l = "";
            else if (p) {
              l = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(n)), l = "";
          else
            typeof l != "string" && !a.useRawValueToEscape && (l = Zp(l));
          var E = v.safeValue(l);
          if (n = n.replace(o[0], E), p ? (v.regex.lastIndex += l.length, v.regex.lastIndex -= o[0].length) : v.regex.lastIndex = 0, u++, u >= a.maxReplaces)
            break;
        }
      }), n;
    }
  }, {
    key: "nest",
    value: function(n, r) {
      var i = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, l;
      function u(d, p) {
        var m = this.nestingOptionsSeparator;
        if (d.indexOf(m) < 0)
          return d;
        var v = d.split(new RegExp("".concat(m, "[ ]*{"))), y = "{".concat(v[1]);
        d = v[0], y = this.interpolate(y, l);
        var g = y.match(/'/g), E = y.match(/"/g);
        (g && g.length % 2 === 0 && !E || E.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          l = JSON.parse(y), p && (l = Fn(Fn({}, p), l));
        } catch (b) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(d), b), "".concat(d).concat(m).concat(y);
        }
        return delete l.defaultValue, d;
      }
      for (; a = this.nestingRegexp.exec(n); ) {
        var f = [];
        l = Fn({}, s), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
        var c = !1;
        if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
          var h = a[1].split(this.formatSeparator).map(function(d) {
            return d.trim();
          });
          a[1] = h.shift(), f = h, c = !0;
        }
        if (o = r(u.call(this, a[1].trim(), l), l), o && a[0] === n && typeof o != "string")
          return o;
        typeof o != "string" && (o = Zp(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(n)), o = ""), c && (o = f.reduce(function(d, p) {
          return i.format(d, p, s.lng, Fn(Fn({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), n = n.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return n;
    }
  }]), t;
}();
function om(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Cr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? om(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : om(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function O2(t) {
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
          var o = a.split(":"), l = i2(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
function Ts(t) {
  var e = {};
  return function(r, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = t(i, s), e[a] = o), o(r);
  };
}
var M2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(this, t), this.logger = cr.create("formatter"), this.options = e, this.formats = {
      number: Ts(function(n, r) {
        var i = new Intl.NumberFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: Ts(function(n, r) {
        var i = new Intl.NumberFormat(n, Cr(Cr({}, r), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: Ts(function(n, r) {
        var i = new Intl.DateTimeFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: Ts(function(n, r) {
        var i = new Intl.RelativeTimeFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s, r.range || "day");
        };
      }),
      list: Ts(function(n, r) {
        var i = new Intl.ListFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s);
        };
      })
    }, this.init(e);
  }
  return xr(t, [{
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
      this.formats[n.toLowerCase().trim()] = Ts(r);
    }
  }, {
    key: "format",
    value: function(n, r, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = O2(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var p = u;
          try {
            var m = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, v = m.locale || m.lng || a.locale || a.lng || i;
            p = s.formats[h](u, v, Cr(Cr(Cr({}, d), a), m));
          } catch (y) {
            s.logger.warn(y);
          }
          return p;
        } else
          s.logger.warn("there was no format function for ".concat(h));
        return u;
      }, n);
      return l;
    }
  }]), t;
}();
function lm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function um(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function T2(t) {
  var e = N2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Co(this, i);
  };
}
function N2() {
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
function L2(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var C2 = function(t) {
  Qu(n, t);
  var e = T2(n);
  function n(r, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return wr(this, n), a = e.call(this), ec && Ni.call(wi(a)), a.backend = r, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = cr.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return xr(n, [{
    key: "queueLoad",
    value: function(i, s, a, o) {
      var l = this, u = {}, f = {}, c = {}, h = {};
      return i.forEach(function(d) {
        var p = !0;
        s.forEach(function(m) {
          var v = "".concat(d, "|").concat(m);
          !a.reload && l.store.hasResourceBundle(d, m) ? l.state[v] = 2 : l.state[v] < 0 || (l.state[v] === 1 ? f[v] === void 0 && (f[v] = !0) : (l.state[v] = 1, p = !1, f[v] === void 0 && (f[v] = !0), u[v] === void 0 && (u[v] = !0), h[m] === void 0 && (h[m] = !0)));
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
        l2(c.loaded, [l], u), L2(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
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
      var c = function(m, v) {
        if (o.readingCalls--, o.waitingReads.length > 0) {
          var y = o.waitingReads.shift();
          o.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
        }
        if (m && v && l < o.maxRetries) {
          setTimeout(function() {
            o.read.call(o, i, s, a, l + 1, u * 2, f);
          }, u);
          return;
        }
        f(m, v);
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
          var c = um(um({}, u), {}, {
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
  }]), n;
}(Ni);
function cm() {
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
      if (Cn(e[1]) === "object" && (n = e[1]), typeof e[1] == "string" && (n.defaultValue = e[1]), typeof e[2] == "string" && (n.tDescription = e[2]), Cn(e[2]) === "object" || Cn(e[3]) === "object") {
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
function fm(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function hm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ir(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function A2(t) {
  var e = P2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Co(this, i);
  };
}
function P2() {
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
function il() {
}
function D2(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var mu = function(t) {
  Qu(n, t);
  var e = A2(n);
  function n() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (wr(this, n), r = e.call(this), ec && Ni.call(wi(r)), r.options = fm(i), r.services = {}, r.logger = cr, r.modules = {
      external: []
    }, D2(wi(r)), s && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, s), Co(r, wi(r));
      setTimeout(function() {
        r.init(i, s);
      }, 0);
    }
    return r;
  }
  return xr(n, [{
    key: "init",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
      typeof s == "function" && (a = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
      var o = cm();
      this.options = ir(ir(ir({}, o), this.options), fm(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ir(ir({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? cr.init(l(this.modules.logger), this.options) : cr.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = M2);
        var f = new rm(this.options);
        this.store = new g2(this.options.resources, this.options);
        var c = this.services;
        c.logger = cr, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new w2(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new x2(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new C2(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(y) {
          for (var g = arguments.length, E = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
            E[b - 1] = arguments[b];
          i.emit.apply(i, [y].concat(E));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new nm(this.services, this.options), this.translator.on("*", function(y) {
          for (var g = arguments.length, E = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
            E[b - 1] = arguments[b];
          i.emit.apply(i, [y].concat(E));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = il), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var d = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      d.forEach(function(y) {
        i[y] = function() {
          var g;
          return (g = i.store)[y].apply(g, arguments);
        };
      });
      var p = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      p.forEach(function(y) {
        i[y] = function() {
          var g;
          return (g = i.store)[y].apply(g, arguments), i;
        };
      });
      var m = _a(), v = function() {
        var g = function(b, w) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), m.resolve(w), a(b, w);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return g(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, g);
      };
      return this.options.resources || !this.options.initImmediate ? v() : setTimeout(v, 0), m;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : il, o = a, l = typeof i == "string" ? i : this.language;
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
      var o = _a();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = il), this.services.backendConnector.reload(i, s, function(l) {
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
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && Kv.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
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
      var o = _a();
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
        if (Cn(c) !== "object") {
          for (var d = arguments.length, p = new Array(d > 2 ? d - 2 : 0), m = 2; m < d; m++)
            p[m - 2] = arguments[m];
          h = o.options.overloadTranslationOptionHandler([f, c].concat(p));
        } else
          h = ir({}, c);
        h.lng = h.lng || u.lng, h.lngs = h.lngs || u.lngs, h.ns = h.ns || u.ns, h.keyPrefix = h.keyPrefix || a || u.keyPrefix;
        var v = o.options.keySeparator || ".", y;
        return h.keyPrefix && Array.isArray(f) ? y = f.map(function(g) {
          return "".concat(h.keyPrefix).concat(v).concat(g);
        }) : y = h.keyPrefix ? "".concat(h.keyPrefix).concat(v).concat(f) : f, o.t(y, h);
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
      var a = this, o = _a();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(l) {
        a.options.ns.indexOf(l) < 0 && a.options.ns.push(l);
      }), this.loadResources(function(l) {
        o.resolve(), s && s(l);
      }), o) : (s && s(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, s) {
      var a = _a();
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
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new rm(cm());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : il, o = ir(ir(ir({}, this.options), s), {
        isClone: !0
      }), l = new n(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = ir({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new nm(l.services, l.options), l.translator.on("*", function(f) {
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
}(Ni);
Pi(mu, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new mu(t, e);
});
var lt = mu.createInstance();
lt.createInstance = mu.createInstance;
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
const k2 = "/";
var Zv = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(Zv || {}), Ir = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(Ir || {}), Vl = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(Vl || {}), Bf;
function I2(t, {
  i18next: e,
  rerenderOn: n = ["languageChanged", "loaded", "added", "removed"],
  slotStart: r = "{",
  slotEnd: i = "}"
}) {
  const s = e.t.bind(e), a = _e(new Date()), o = () => a.value = new Date(), l = () => a.value;
  n.forEach((h) => {
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
  }), t.component("i18next", F2), t.mixin({
    beforeCreate() {
      var h, d;
      const p = this.$options;
      if (!p.__i18n && !p.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const m = this.$options.name, v = (Math.random() * 10 ** 8 | 0).toString(), y = [m, v].filter((O) => !!O).join("-");
      this.__bundles = [];
      const g = (O) => {
        Object.entries(O).forEach(([R, D]) => {
          e.addResourceBundle(R, y, D, !0, !1), this.__bundles.push([R, y]);
        });
      };
      (h = p.__i18n) == null || h.forEach((O) => {
        g(JSON.parse(O));
      });
      let { lng: E, ns: b, keyPrefix: w } = c(p, g);
      (d = this.__bundles) != null && d.length && (b = [y].concat(b != null ? b : []));
      const N = u(E, b);
      this.__translate = (O, R) => !w || f(O) ? N(O, R) : N(w + "." + O, R);
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
  }), Bf = $2(r, i);
  function u(h, d) {
    return h ? e.getFixedT(h, d) : d ? e.getFixedT(null, d) : s;
  }
  function f(h) {
    const d = e.options.nsSeparator;
    return typeof d == "string" && h.includes(d);
  }
  function c(h, d) {
    let p, m, v;
    if (h.i18nOptions) {
      let y, g;
      ({
        lng: p,
        namespaces: g = e.options.defaultNS,
        keyPrefix: v,
        messages: y
      } = h.i18nOptions), y && d(y), m = typeof g == "string" ? [g] : g, m && e.loadNamespaces(m);
    }
    return { lng: p, ns: m, keyPrefix: v };
  }
}
function Xe() {
  const t = R2(), e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
function R2() {
  const t = wo();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  return t;
}
function $2(t, e) {
  const n = `${t}\\s*([a-z0-9\\-]+)\\s*${e}`;
  return new RegExp(n, "gi");
}
var F2 = he({
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
      for (; (i = Bf.exec(n)) !== null; ) {
        r.push(n.substring(s, i.index));
        const a = e[i[1]];
        a ? r.push(...a()) : r.push(i[0]), s = Bf.lastIndex;
      }
      return r.push(n.substring(s)), r;
    };
  }
});
class _s extends Error {
}
class V2 extends _s {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class G2 extends _s {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class j2 extends _s {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class js extends _s {
}
class Jv extends _s {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ln extends _s {
}
class ti extends _s {
  constructor() {
    super("Zone is an abstract class");
  }
}
const te = "numeric", Zn = "short", yn = "long", gu = {
  year: te,
  month: te,
  day: te
}, Qv = {
  year: te,
  month: Zn,
  day: te
}, U2 = {
  year: te,
  month: Zn,
  day: te,
  weekday: Zn
}, e0 = {
  year: te,
  month: yn,
  day: te
}, t0 = {
  year: te,
  month: yn,
  day: te,
  weekday: yn
}, n0 = {
  hour: te,
  minute: te
}, r0 = {
  hour: te,
  minute: te,
  second: te
}, i0 = {
  hour: te,
  minute: te,
  second: te,
  timeZoneName: Zn
}, s0 = {
  hour: te,
  minute: te,
  second: te,
  timeZoneName: yn
}, a0 = {
  hour: te,
  minute: te,
  hourCycle: "h23"
}, o0 = {
  hour: te,
  minute: te,
  second: te,
  hourCycle: "h23"
}, l0 = {
  hour: te,
  minute: te,
  second: te,
  hourCycle: "h23",
  timeZoneName: Zn
}, u0 = {
  hour: te,
  minute: te,
  second: te,
  hourCycle: "h23",
  timeZoneName: yn
}, c0 = {
  year: te,
  month: te,
  day: te,
  hour: te,
  minute: te
}, f0 = {
  year: te,
  month: te,
  day: te,
  hour: te,
  minute: te,
  second: te
}, h0 = {
  year: te,
  month: Zn,
  day: te,
  hour: te,
  minute: te
}, d0 = {
  year: te,
  month: Zn,
  day: te,
  hour: te,
  minute: te,
  second: te
}, B2 = {
  year: te,
  month: Zn,
  day: te,
  weekday: Zn,
  hour: te,
  minute: te
}, p0 = {
  year: te,
  month: yn,
  day: te,
  hour: te,
  minute: te,
  timeZoneName: Zn
}, m0 = {
  year: te,
  month: yn,
  day: te,
  hour: te,
  minute: te,
  second: te,
  timeZoneName: Zn
}, g0 = {
  year: te,
  month: yn,
  day: te,
  weekday: yn,
  hour: te,
  minute: te,
  timeZoneName: yn
}, y0 = {
  year: te,
  month: yn,
  day: te,
  weekday: yn,
  hour: te,
  minute: te,
  second: te,
  timeZoneName: yn
};
class Ao {
  get type() {
    throw new ti();
  }
  get name() {
    throw new ti();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new ti();
  }
  offsetName(e, n) {
    throw new ti();
  }
  formatOffset(e, n) {
    throw new ti();
  }
  offset(e) {
    throw new ti();
  }
  equals(e) {
    throw new ti();
  }
  get isValid() {
    throw new ti();
  }
}
let Dc = null;
class tc extends Ao {
  static get instance() {
    return Dc === null && (Dc = new tc()), Dc;
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
    return M0(e, n, r);
  }
  formatOffset(e, n) {
    return Ya(this.offset(e), n);
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
let Gl = {};
function W2(t) {
  return Gl[t] || (Gl[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Gl[t];
}
const q2 = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function H2(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, a, o, l, u, f] = r;
  return [a, i, s, o, l, u, f];
}
function z2(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: a } = n[i], o = q2[s];
    s === "era" ? r[o] = a : we(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let sl = {};
class Br extends Ao {
  static create(e) {
    return sl[e] || (sl[e] = new Br(e)), sl[e];
  }
  static resetCache() {
    sl = {}, Gl = {};
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
    super(), this.zoneName = e, this.valid = Br.isValidZone(e);
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
    return M0(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return Ya(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = W2(this.name);
    let [i, s, a, o, l, u, f] = r.formatToParts ? z2(r, n) : H2(r, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = rc({
      year: i,
      month: s,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: f,
      millisecond: 0
    });
    let d = +n;
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
let dm = {};
function Y2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = dm[n];
  return r || (r = new Intl.ListFormat(t, e), dm[n] = r), r;
}
let Wf = {};
function qf(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Wf[n];
  return r || (r = new Intl.DateTimeFormat(t, e), Wf[n] = r), r;
}
let Hf = {};
function X2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Hf[n];
  return r || (r = new Intl.NumberFormat(t, e), Hf[n] = r), r;
}
let zf = {};
function K2(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = zf[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), zf[i] = s), s;
}
let Ca = null;
function Z2() {
  return Ca || (Ca = new Intl.DateTimeFormat().resolvedOptions().locale, Ca);
}
let pm = {};
function J2(t) {
  let e = pm[t];
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, pm[t] = e;
  }
  return e;
}
function Q2(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = qf(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      r = qf(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = r;
    return [i, s, a];
  }
}
function eL(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function tL(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = Oe.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function nL(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = Oe.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function al(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function rL(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class iL {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = X2(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : zh(e, 3);
      return Et(n, this.padTo);
    }
  }
}
class sL {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Br.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = qf(n, s);
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
class aL {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && x0() && (this.rtf = K2(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : ML(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const oL = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Ze {
  static fromOpts(e) {
    return Ze.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, r, i, s = !1) {
    const a = e || gt.defaultLocale, o = a || (s ? "en-US" : Z2()), l = n || gt.defaultNumberingSystem, u = r || gt.defaultOutputCalendar, f = Yf(i) || gt.defaultWeekSettings;
    return new Ze(o, l, u, f, a);
  }
  static resetCache() {
    Ca = null, Wf = {}, Hf = {}, zf = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r, weekSettings: i } = {}) {
    return Ze.create(e, n, r, i);
  }
  constructor(e, n, r, i, s) {
    const [a, o, l] = Q2(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = r || l || null, this.weekSettings = i, this.intl = eL(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = rL(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Ze.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Yf(e.weekSettings) || this.weekSettings,
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
    return al(this, e, L0, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = tL((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return al(this, e, P0, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = nL(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return al(
      this,
      void 0,
      () => D0,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [Oe.utc(2016, 11, 13, 9), Oe.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return al(this, e, k0, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [Oe.utc(-40, 1, 1), Oe.utc(2017, 1, 1)].map(
        (r) => this.extract(r, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, r) {
    const i = this.dtFormatter(e, n), s = i.formatToParts(), a = s.find((o) => o.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new iL(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new sL(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new aL(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Y2(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : O0() ? J2(this.locale) : oL;
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
let kc = null;
class Qt extends Ao {
  static get utcInstance() {
    return kc === null && (kc = new Qt(0)), kc;
  }
  static instance(e) {
    return e === 0 ? Qt.utcInstance : new Qt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Qt(ic(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${Ya(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ya(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return Ya(this.fixed, n);
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
class lL extends Ao {
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
function di(t, e) {
  if (we(t) || t === null)
    return e;
  if (t instanceof Ao)
    return t;
  if (fL(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? tc.instance : n === "utc" || n === "gmt" ? Qt.utcInstance : Qt.parseSpecifier(n) || Br.create(t);
  } else
    return os(t) ? Qt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new lL(t);
}
let mm = () => Date.now(), gm = "system", ym = null, vm = null, _m = null, bm = 60, Em, Sm = null;
class gt {
  static get now() {
    return mm;
  }
  static set now(e) {
    mm = e;
  }
  static set defaultZone(e) {
    gm = e;
  }
  static get defaultZone() {
    return di(gm, tc.instance);
  }
  static get defaultLocale() {
    return ym;
  }
  static set defaultLocale(e) {
    ym = e;
  }
  static get defaultNumberingSystem() {
    return vm;
  }
  static set defaultNumberingSystem(e) {
    vm = e;
  }
  static get defaultOutputCalendar() {
    return _m;
  }
  static set defaultOutputCalendar(e) {
    _m = e;
  }
  static get defaultWeekSettings() {
    return Sm;
  }
  static set defaultWeekSettings(e) {
    Sm = Yf(e);
  }
  static get twoDigitCutoffYear() {
    return bm;
  }
  static set twoDigitCutoffYear(e) {
    bm = e % 100;
  }
  static get throwOnInvalid() {
    return Em;
  }
  static set throwOnInvalid(e) {
    Em = e;
  }
  static resetCaches() {
    Ze.resetCache(), Br.resetCache();
  }
}
class Yn {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const v0 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], _0 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Tn(t, e) {
  return new Yn(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Wh(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function b0(t, e, n) {
  return n + (Po(t) ? _0 : v0)[e - 1];
}
function E0(t, e) {
  const n = Po(t) ? _0 : v0, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function qh(t, e) {
  return (t - e + 7) % 7 + 1;
}
function yu(t, e = 4, n = 1) {
  const { year: r, month: i, day: s } = t, a = b0(r, i, s), o = qh(Wh(r, i, s), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = r - 1, l = fo(u, e, n)) : l > fo(r, e, n) ? (u = r + 1, l = 1) : u = r, { weekYear: u, weekNumber: l, weekday: o, ...sc(t) };
}
function wm(t, e = 4, n = 1) {
  const { weekYear: r, weekNumber: i, weekday: s } = t, a = qh(Wh(r, 1, e), n), o = Ks(r);
  let l = i * 7 + s - a - 7 + e, u;
  l < 1 ? (u = r - 1, l += Ks(u)) : l > o ? (u = r + 1, l -= Ks(r)) : u = r;
  const { month: f, day: c } = E0(u, l);
  return { year: u, month: f, day: c, ...sc(t) };
}
function Ic(t) {
  const { year: e, month: n, day: r } = t, i = b0(e, n, r);
  return { year: e, ordinal: i, ...sc(t) };
}
function xm(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = E0(e, n);
  return { year: e, month: r, day: i, ...sc(t) };
}
function Om(t, e) {
  if (!we(t.localWeekday) || !we(t.localWeekNumber) || !we(t.localWeekYear)) {
    if (!we(t.weekday) || !we(t.weekNumber) || !we(t.weekYear))
      throw new js(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return we(t.localWeekday) || (t.weekday = t.localWeekday), we(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), we(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function uL(t, e = 4, n = 1) {
  const r = nc(t.weekYear), i = Nn(
    t.weekNumber,
    1,
    fo(t.weekYear, e, n)
  ), s = Nn(t.weekday, 1, 7);
  return r ? i ? s ? !1 : Tn("weekday", t.weekday) : Tn("week", t.weekNumber) : Tn("weekYear", t.weekYear);
}
function cL(t) {
  const e = nc(t.year), n = Nn(t.ordinal, 1, Ks(t.year));
  return e ? n ? !1 : Tn("ordinal", t.ordinal) : Tn("year", t.year);
}
function S0(t) {
  const e = nc(t.year), n = Nn(t.month, 1, 12), r = Nn(t.day, 1, vu(t.year, t.month));
  return e ? n ? r ? !1 : Tn("day", t.day) : Tn("month", t.month) : Tn("year", t.year);
}
function w0(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = Nn(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, a = Nn(n, 0, 59), o = Nn(r, 0, 59), l = Nn(i, 0, 999);
  return s ? a ? o ? l ? !1 : Tn("millisecond", i) : Tn("second", r) : Tn("minute", n) : Tn("hour", e);
}
function we(t) {
  return typeof t > "u";
}
function os(t) {
  return typeof t == "number";
}
function nc(t) {
  return typeof t == "number" && t % 1 === 0;
}
function fL(t) {
  return typeof t == "string";
}
function hL(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function x0() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function O0() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function dL(t) {
  return Array.isArray(t) ? t : [t];
}
function Mm(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function pL(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function sa(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Yf(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new ln("Week settings must be an object");
  if (!Nn(t.firstDay, 1, 7) || !Nn(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Nn(e, 1, 7)))
    throw new ln("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Nn(t, e, n) {
  return nc(t) && t >= e && t <= n;
}
function mL(t, e) {
  return t - e * Math.floor(t / e);
}
function Et(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function ui(t) {
  if (!(we(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Bi(t) {
  if (!(we(t) || t === null || t === ""))
    return parseFloat(t);
}
function Hh(t) {
  if (!(we(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function zh(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function Po(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ks(t) {
  return Po(t) ? 366 : 365;
}
function vu(t, e) {
  const n = mL(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? Po(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function rc(t) {
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
function Tm(t, e, n) {
  return -qh(Wh(t, 1, e), n) + e - 1;
}
function fo(t, e = 4, n = 1) {
  const r = Tm(t, e, n), i = Tm(t + 1, e, n);
  return (Ks(t) - r + i) / 7;
}
function Xf(t) {
  return t > 99 ? t : t > gt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function M0(t, e, n, r = null) {
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
function ic(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function T0(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new ln(`Invalid unit value ${t}`);
  return e;
}
function _u(t, e) {
  const n = {};
  for (const r in t)
    if (sa(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = T0(i);
    }
  return n;
}
function Ya(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${Et(n, 2)}:${Et(r, 2)}`;
    case "narrow":
      return `${i}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${i}${Et(n, 2)}${Et(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function sc(t) {
  return pL(t, ["hour", "minute", "second", "millisecond"]);
}
const gL = [
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
], N0 = [
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
], yL = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function L0(t) {
  switch (t) {
    case "narrow":
      return [...yL];
    case "short":
      return [...N0];
    case "long":
      return [...gL];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const C0 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], A0 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], vL = ["M", "T", "W", "T", "F", "S", "S"];
function P0(t) {
  switch (t) {
    case "narrow":
      return [...vL];
    case "short":
      return [...A0];
    case "long":
      return [...C0];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const D0 = ["AM", "PM"], _L = ["Before Christ", "Anno Domini"], bL = ["BC", "AD"], EL = ["B", "A"];
function k0(t) {
  switch (t) {
    case "narrow":
      return [...EL];
    case "short":
      return [...bL];
    case "long":
      return [..._L];
    default:
      return null;
  }
}
function SL(t) {
  return D0[t.hour < 12 ? 0 : 1];
}
function wL(t, e) {
  return P0(e)[t.weekday - 1];
}
function xL(t, e) {
  return L0(e)[t.month - 1];
}
function OL(t, e) {
  return k0(e)[t.year < 0 ? 0 : 1];
}
function ML(t, e, n = "always", r = !1) {
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
function Nm(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const TL = {
  D: gu,
  DD: Qv,
  DDD: e0,
  DDDD: t0,
  t: n0,
  tt: r0,
  ttt: i0,
  tttt: s0,
  T: a0,
  TT: o0,
  TTT: l0,
  TTTT: u0,
  f: c0,
  ff: h0,
  fff: p0,
  ffff: g0,
  F: f0,
  FF: d0,
  FFF: m0,
  FFFF: y0
};
class Wt {
  static create(e, n = {}) {
    return new Wt(e, n);
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
    return TL[e];
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
      return Et(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, p) => this.loc.extract(e, d, p), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? SL(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, p) => r ? xL(e, d) : s(p ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, p) => r ? wL(e, d) : s(
      p ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const p = Wt.macroTokenToFormatOpts(d);
      return p ? this.formatWithSystemDefault(e, p) : d;
    }, c = (d) => r ? OL(e, d) : s({ era: d }, "era"), h = (d) => {
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
    return Nm(Wt.parseFormat(n), h);
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
    }, s = Wt.parseFormat(n), a = s.reduce(
      (l, { literal: u, val: f }) => u ? l : l.concat(f),
      []
    ), o = e.shiftTo(...a.map(r).filter((l) => l));
    return Nm(s, i(o));
  }
}
const I0 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function ua(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function ca(...t) {
  return (e) => t.reduce(
    ([n, r, i], s) => {
      const [a, o, l] = s(e, i);
      return [{ ...n, ...a }, o || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function fa(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const i = n.exec(t);
    if (i)
      return r(i);
  }
  return [null, null];
}
function R0(...t) {
  return (e, n) => {
    const r = {};
    let i;
    for (i = 0; i < t.length; i++)
      r[t[i]] = ui(e[n + i]);
    return [r, null, n + i];
  };
}
const $0 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, NL = `(?:${$0.source}?(?:\\[(${I0.source})\\])?)?`, Yh = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, F0 = RegExp(`${Yh.source}${NL}`), Xh = RegExp(`(?:T${F0.source})?`), LL = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, CL = /(\d{4})-?W(\d\d)(?:-?(\d))?/, AL = /(\d{4})-?(\d{3})/, PL = R0("weekYear", "weekNumber", "weekDay"), DL = R0("year", "ordinal"), kL = /(\d{4})-(\d\d)-(\d\d)/, V0 = RegExp(
  `${Yh.source} ?(?:${$0.source}|(${I0.source}))?`
), IL = RegExp(`(?: ${V0.source})?`);
function Zs(t, e, n) {
  const r = t[e];
  return we(r) ? n : ui(r);
}
function RL(t, e) {
  return [{
    year: Zs(t, e),
    month: Zs(t, e + 1, 1),
    day: Zs(t, e + 2, 1)
  }, null, e + 3];
}
function ha(t, e) {
  return [{
    hours: Zs(t, e, 0),
    minutes: Zs(t, e + 1, 0),
    seconds: Zs(t, e + 2, 0),
    milliseconds: Hh(t[e + 3])
  }, null, e + 4];
}
function Do(t, e) {
  const n = !t[e] && !t[e + 1], r = ic(t[e + 1], t[e + 2]), i = n ? null : Qt.instance(r);
  return [{}, i, e + 3];
}
function ko(t, e) {
  const n = t[e] ? Br.create(t[e]) : null;
  return [{}, n, e + 1];
}
const $L = RegExp(`^T?${Yh.source}$`), FL = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function VL(t) {
  const [e, n, r, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, p = !1) => d !== void 0 && (p || d && f) ? -d : d;
  return [
    {
      years: h(Bi(n)),
      months: h(Bi(r)),
      weeks: h(Bi(i)),
      days: h(Bi(s)),
      hours: h(Bi(a)),
      minutes: h(Bi(o)),
      seconds: h(Bi(l), l === "-0"),
      milliseconds: h(Hh(u), c)
    }
  ];
}
const GL = {
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
function Kh(t, e, n, r, i, s, a) {
  const o = {
    year: e.length === 2 ? Xf(ui(e)) : ui(e),
    month: N0.indexOf(n) + 1,
    day: ui(r),
    hour: ui(i),
    minute: ui(s)
  };
  return a && (o.second = ui(a)), t && (o.weekday = t.length > 3 ? C0.indexOf(t) + 1 : A0.indexOf(t) + 1), o;
}
const jL = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function UL(t) {
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
  ] = t, h = Kh(e, i, r, n, s, a, o);
  let d;
  return l ? d = GL[l] : u ? d = 0 : d = ic(f, c), [h, new Qt(d)];
}
function BL(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const WL = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, qL = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, HL = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Lm(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [Kh(e, i, r, n, s, a, o), Qt.utcInstance];
}
function zL(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [Kh(e, o, n, r, i, s, a), Qt.utcInstance];
}
const YL = ua(LL, Xh), XL = ua(CL, Xh), KL = ua(AL, Xh), ZL = ua(F0), G0 = ca(
  RL,
  ha,
  Do,
  ko
), JL = ca(
  PL,
  ha,
  Do,
  ko
), QL = ca(
  DL,
  ha,
  Do,
  ko
), eC = ca(
  ha,
  Do,
  ko
);
function tC(t) {
  return fa(
    t,
    [YL, G0],
    [XL, JL],
    [KL, QL],
    [ZL, eC]
  );
}
function nC(t) {
  return fa(BL(t), [jL, UL]);
}
function rC(t) {
  return fa(
    t,
    [WL, Lm],
    [qL, Lm],
    [HL, zL]
  );
}
function iC(t) {
  return fa(t, [FL, VL]);
}
const sC = ca(ha);
function aC(t) {
  return fa(t, [$L, sC]);
}
const oC = ua(kL, IL), lC = ua(V0), uC = ca(
  ha,
  Do,
  ko
);
function cC(t) {
  return fa(
    t,
    [oC, G0],
    [lC, uC]
  );
}
const Cm = "Invalid Duration", j0 = {
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
}, fC = {
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
  ...j0
}, Sn = 146097 / 400, Ns = 146097 / 4800, hC = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Sn / 7,
    days: Sn,
    hours: Sn * 24,
    minutes: Sn * 24 * 60,
    seconds: Sn * 24 * 60 * 60,
    milliseconds: Sn * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Sn / 28,
    days: Sn / 4,
    hours: Sn * 24 / 4,
    minutes: Sn * 24 * 60 / 4,
    seconds: Sn * 24 * 60 * 60 / 4,
    milliseconds: Sn * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Ns / 7,
    days: Ns,
    hours: Ns * 24,
    minutes: Ns * 24 * 60,
    seconds: Ns * 24 * 60 * 60,
    milliseconds: Ns * 24 * 60 * 60 * 1e3
  },
  ...j0
}, Qi = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], dC = Qi.slice(0).reverse();
function ni(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Re(r);
}
function U0(t, e) {
  var r;
  let n = (r = e.milliseconds) != null ? r : 0;
  for (const i of dC.slice(1))
    e[i] && (n += e[i] * t[i].milliseconds);
  return n;
}
function Am(t, e) {
  const n = U0(t, e) < 0 ? -1 : 1;
  Qi.reduceRight((r, i) => {
    if (we(e[i]))
      return r;
    if (r) {
      const s = e[r] * n, a = t[i][r], o = Math.floor(s / a);
      e[i] += o * n, e[r] -= o * a * n;
    }
    return i;
  }, null), Qi.reduce((r, i) => {
    if (we(e[i]))
      return r;
    if (r) {
      const s = e[r] % 1;
      e[r] -= s, e[i] += s * t[r][i];
    }
    return i;
  }, null);
}
function pC(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class Re {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? hC : fC;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || Ze.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  static fromMillis(e, n) {
    return Re.fromObject({ milliseconds: e }, n);
  }
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new ln(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Re({
      values: _u(e, Re.normalizeUnit),
      loc: Ze.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  static fromDurationLike(e) {
    if (os(e))
      return Re.fromMillis(e);
    if (Re.isDuration(e))
      return e;
    if (typeof e == "object")
      return Re.fromObject(e);
    throw new ln(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  static fromISO(e, n) {
    const [r] = iC(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = aC(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the Duration is invalid");
    const r = e instanceof Yn ? e : new Yn(e, n);
    if (gt.throwOnInvalid)
      throw new j2(r);
    return new Re({ invalid: r });
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
      throw new Jv(e);
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
    return this.isValid ? Wt.create(this.loc, r).formatDurationFromString(this, e) : Cm;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return Cm;
    const n = Qi.map((r) => {
      const i = this.values[r];
      return we(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(i);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += zh(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, Oe.fromMillis(n, { zone: "UTC" }).toISOTime(e));
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
    return this.isValid ? U0(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e), r = {};
    for (const i of Qi)
      (sa(n.values, i) || sa(this.values, i)) && (r[i] = n.get(i) + this.get(i));
    return ni(this, { values: r }, !0);
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e);
    return this.plus(n.negate());
  }
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const r of Object.keys(this.values))
      n[r] = T0(e(this.values[r], r));
    return ni(this, { values: n }, !0);
  }
  get(e) {
    return this[Re.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ..._u(e, Re.normalizeUnit) };
    return ni(this, { values: n });
  }
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: r };
    return ni(this, a);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Am(this.matrix, e), ni(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = pC(this.normalize().shiftToAll().toObject());
    return ni(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => Re.normalizeUnit(a));
    const n = {}, r = {}, i = this.toObject();
    let s;
    for (const a of Qi)
      if (e.indexOf(a) >= 0) {
        s = a;
        let o = 0;
        for (const u in r)
          o += this.matrix[u][a] * r[u], r[u] = 0;
        os(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        os(i[a]) && (r[a] = i[a]);
    for (const a in r)
      r[a] !== 0 && (n[s] += a === s ? r[a] : r[a] / this.matrix[s][a]);
    return Am(this.matrix, n), ni(this, { values: n }, !0);
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
    return ni(this, { values: e }, !0);
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
    for (const r of Qi)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Ls = "Invalid Interval";
function mC(t, e) {
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
      throw new ln("need to specify a reason the Interval is invalid");
    const r = e instanceof Yn ? e : new Yn(e, n);
    if (gt.throwOnInvalid)
      throw new G2(r);
    return new ft({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = Ea(e), i = Ea(n), s = mC(r, i);
    return s == null ? new ft({
      start: r,
      end: i
    }) : s;
  }
  static after(e, n) {
    const r = Re.fromDurationLike(n), i = Ea(e);
    return ft.fromDateTimes(i, i.plus(r));
  }
  static before(e, n) {
    const r = Re.fromDurationLike(n), i = Ea(e);
    return ft.fromDateTimes(i.minus(r), i);
  }
  static fromISO(e, n) {
    const [r, i] = (e || "").split("/", 2);
    if (r && i) {
      let s, a;
      try {
        s = Oe.fromISO(r, n), a = s.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = Oe.fromISO(i, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return ft.fromDateTimes(s, o);
      if (a) {
        const u = Re.fromISO(i, n);
        if (u.isValid)
          return ft.after(s, u);
      } else if (l) {
        const u = Re.fromISO(r, n);
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
  count(e = "milliseconds", n) {
    if (!this.isValid)
      return NaN;
    const r = this.start.startOf(e, n);
    let i;
    return n != null && n.useLocaleWeeks ? i = this.end.reconfigure({ locale: r.locale }) : i = this.end, i = i.startOf(e, n), Math.floor(i.diff(r, e).get(e)) + (i.valueOf() !== this.end.valueOf());
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
    const n = e.map(Ea).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), r = [];
    let { s: i } = this, s = 0;
    for (; i < this.e; ) {
      const a = n[s] || this.e, o = +a > +this.e ? this.e : a;
      r.push(ft.fromDateTimes(i, o)), i = o, s += 1;
    }
    return r;
  }
  splitBy(e) {
    const n = Re.fromDurationLike(e);
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
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Ls;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(e = gu, n = {}) {
    return this.isValid ? Wt.create(this.s.loc.clone(n), e).formatInterval(this) : Ls;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Ls;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ls;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Ls;
  }
  toFormat(e, { separator: n = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Ls;
  }
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : Re.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return ft.fromDateTimes(e(this.s), e(this.e));
  }
}
class ol {
  static hasDST(e = gt.defaultZone) {
    const n = Oe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Br.isValidZone(e);
  }
  static normalizeZone(e) {
    return di(e, gt.defaultZone);
  }
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ze.create(e)).getStartOfWeek();
  }
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ze.create(e)).getMinDaysInFirstWeek();
  }
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ze.create(e)).getWeekendDays().slice();
  }
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Ze.create(n, r, s)).months(e);
  }
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Ze.create(n, r, s)).months(e, !0);
  }
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Ze.create(n, r, null)).weekdays(e);
  }
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Ze.create(n, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return Ze.create(e).meridiems();
  }
  static eras(e = "short", { locale: n = null } = {}) {
    return Ze.create(n, null, "gregory").eras(e);
  }
  static features() {
    return { relative: x0(), localeWeek: O0() };
  }
}
function Pm(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(Re.fromMillis(r).as("days"));
}
function gC(t, e, n) {
  const r = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = Pm(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Pm]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of r)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function yC(t, e, n, r) {
  let [i, s, a, o] = gC(t, e, n);
  const l = e - i, u = n.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = Re.fromObject(s, r);
  return u.length > 0 ? Re.fromMillis(l, r).shiftTo(...u).plus(f) : f;
}
const Zh = {
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
}, Dm = {
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
}, vC = Zh.hanidec.replace(/[\[|\]]/g, "").split("");
function _C(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(Zh.hanidec) !== -1)
        e += vC.indexOf(t[n]);
      else
        for (const i in Dm) {
          const [s, a] = Dm[i];
          r >= s && r <= a && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Vn({ numberingSystem: t }, e = "") {
  return new RegExp(`${Zh[t || "latn"]}${e}`);
}
const bC = "missing Intl.DateTimeFormat.formatToParts support";
function Ge(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(_C(n)) };
}
const EC = String.fromCharCode(160), B0 = `[ ${EC}]`, W0 = new RegExp(B0, "g");
function SC(t) {
  return t.replace(/\./g, "\\.?").replace(W0, B0);
}
function km(t) {
  return t.replace(/\./g, "").replace(W0, " ").toLowerCase();
}
function Gn(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(SC).join("|")),
    deser: ([n]) => t.findIndex((r) => km(n) === km(r)) + e
  };
}
function Im(t, e) {
  return { regex: t, deser: ([, n, r]) => ic(n, r), groups: e };
}
function ll(t) {
  return { regex: t, deser: ([e]) => e };
}
function wC(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function xC(t, e) {
  const n = Vn(e), r = Vn(e, "{2}"), i = Vn(e, "{3}"), s = Vn(e, "{4}"), a = Vn(e, "{6}"), o = Vn(e, "{1,2}"), l = Vn(e, "{1,3}"), u = Vn(e, "{1,6}"), f = Vn(e, "{1,9}"), c = Vn(e, "{2,4}"), h = Vn(e, "{4,6}"), d = (v) => ({ regex: RegExp(wC(v.val)), deser: ([y]) => y, literal: !0 }), m = ((v) => {
    if (t.literal)
      return d(v);
    switch (v.val) {
      case "G":
        return Gn(e.eras("short"), 0);
      case "GG":
        return Gn(e.eras("long"), 0);
      case "y":
        return Ge(u);
      case "yy":
        return Ge(c, Xf);
      case "yyyy":
        return Ge(s);
      case "yyyyy":
        return Ge(h);
      case "yyyyyy":
        return Ge(a);
      case "M":
        return Ge(o);
      case "MM":
        return Ge(r);
      case "MMM":
        return Gn(e.months("short", !0), 1);
      case "MMMM":
        return Gn(e.months("long", !0), 1);
      case "L":
        return Ge(o);
      case "LL":
        return Ge(r);
      case "LLL":
        return Gn(e.months("short", !1), 1);
      case "LLLL":
        return Gn(e.months("long", !1), 1);
      case "d":
        return Ge(o);
      case "dd":
        return Ge(r);
      case "o":
        return Ge(l);
      case "ooo":
        return Ge(i);
      case "HH":
        return Ge(r);
      case "H":
        return Ge(o);
      case "hh":
        return Ge(r);
      case "h":
        return Ge(o);
      case "mm":
        return Ge(r);
      case "m":
        return Ge(o);
      case "q":
        return Ge(o);
      case "qq":
        return Ge(r);
      case "s":
        return Ge(o);
      case "ss":
        return Ge(r);
      case "S":
        return Ge(l);
      case "SSS":
        return Ge(i);
      case "u":
        return ll(f);
      case "uu":
        return ll(o);
      case "uuu":
        return Ge(n);
      case "a":
        return Gn(e.meridiems(), 0);
      case "kkkk":
        return Ge(s);
      case "kk":
        return Ge(c, Xf);
      case "W":
        return Ge(o);
      case "WW":
        return Ge(r);
      case "E":
      case "c":
        return Ge(n);
      case "EEE":
        return Gn(e.weekdays("short", !1), 1);
      case "EEEE":
        return Gn(e.weekdays("long", !1), 1);
      case "ccc":
        return Gn(e.weekdays("short", !0), 1);
      case "cccc":
        return Gn(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return Im(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Im(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return ll(/[a-z_+-/]{1,256}?/i);
      case " ":
        return ll(/[^\S\n\r]/);
      default:
        return d(v);
    }
  })(t) || {
    invalidReason: bC
  };
  return m.token = t, m;
}
const OC = {
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
function MC(t, e, n) {
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
  let o = OC[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function TC(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function NC(t, e, n) {
  const r = t.match(e);
  if (r) {
    const i = {};
    let s = 1;
    for (const a in n)
      if (sa(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(r.slice(s, s + l))), s += l;
      }
    return [r, i];
  } else
    return [r, {}];
}
function LC(t) {
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
  return we(t.z) || (n = Br.create(t.z)), we(t.Z) || (n || (n = new Qt(t.Z)), r = t.Z), we(t.q) || (t.M = (t.q - 1) * 3 + 1), we(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), we(t.u) || (t.S = Hh(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), n, r];
}
let Rc = null;
function CC() {
  return Rc || (Rc = Oe.fromMillis(1555555555555)), Rc;
}
function AC(t, e) {
  if (t.literal)
    return t;
  const n = Wt.macroTokenToFormatOpts(t.val), r = z0(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function q0(t, e) {
  return Array.prototype.concat(...t.map((n) => AC(n, e)));
}
function H0(t, e, n) {
  const r = q0(Wt.parseFormat(n), t), i = r.map((a) => xC(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [a, o] = TC(i), l = RegExp(a, "i"), [u, f] = NC(e, l, o), [c, h, d] = f ? LC(f) : [null, null, void 0];
    if (sa(f, "a") && sa(f, "H"))
      throw new js(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function PC(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: a } = H0(t, e, n);
  return [r, i, s, a];
}
function z0(t, e) {
  if (!t)
    return null;
  const r = Wt.create(e, t).dtFormatter(CC()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((a) => MC(a, t, s));
}
const $c = "Invalid DateTime", Rm = 864e13;
function ul(t) {
  return new Yn("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Fc(t) {
  return t.weekData === null && (t.weekData = yu(t.c)), t.weekData;
}
function Vc(t) {
  return t.localWeekData === null && (t.localWeekData = yu(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Wi(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new Oe({ ...n, ...e, old: n });
}
function Y0(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function cl(t, e) {
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
function jl(t, e, n) {
  return Y0(rc(t), e, n);
}
function $m(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, vu(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
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
  }).as("milliseconds"), o = rc(s);
  let [l, u] = Y0(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function ba(t, e, n, r, i, s) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = Oe.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: s
    });
    return a ? u : u.setZone(o);
  } else
    return Oe.invalid(
      new Yn("unparsable", `the input "${i}" can't be parsed as ${r}`)
    );
}
function fl(t, e, n = !0) {
  return t.isValid ? Wt.create(Ze.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Gc(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += Et(t.c.year, n ? 6 : 4), e ? (r += "-", r += Et(t.c.month), r += "-", r += Et(t.c.day)) : (r += Et(t.c.month), r += Et(t.c.day)), r;
}
function Fm(t, e, n, r, i, s) {
  let a = Et(t.c.hour);
  return e ? (a += ":", a += Et(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += ":")) : a += Et(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += Et(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += Et(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += Et(Math.trunc(-t.o / 60)), a += ":", a += Et(Math.trunc(-t.o % 60))) : (a += "+", a += Et(Math.trunc(t.o / 60)), a += ":", a += Et(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const X0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, DC = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, kC = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, K0 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], IC = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], RC = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function $C(t) {
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
    throw new Jv(t);
  return e;
}
function Vm(t) {
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
      return $C(t);
  }
}
function Gm(t, e) {
  const n = di(e.zone, gt.defaultZone), r = Ze.fromObject(e), i = gt.now();
  let s, a;
  if (we(t.year))
    s = i;
  else {
    for (const u of K0)
      we(t[u]) && (t[u] = X0[u]);
    const o = S0(t) || w0(t);
    if (o)
      return Oe.invalid(o);
    const l = n.offset(i);
    [s, a] = jl(t, l, n);
  }
  return new Oe({ ts: s, zone: n, loc: r, o: a });
}
function jm(t, e, n) {
  const r = we(n.round) ? !0 : n.round, i = (a, o) => (a = zh(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), s = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const a of n.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function Um(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class Oe {
  constructor(e) {
    const n = e.zone || gt.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new Yn("invalid input") : null) || (n.isValid ? null : ul(n));
    this.ts = we(e.ts) ? gt.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        i = cl(this.ts, o), r = Number.isNaN(i.year) ? new Yn("invalid input") : null, i = r ? null : i, s = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || Ze.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new Oe({});
  }
  static local() {
    const [e, n] = Um(arguments), [r, i, s, a, o, l, u] = n;
    return Gm({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, n] = Um(arguments), [r, i, s, a, o, l, u] = n;
    return e.zone = Qt.utcInstance, Gm({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = hL(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return Oe.invalid("invalid input");
    const i = di(n.zone, gt.defaultZone);
    return i.isValid ? new Oe({
      ts: r,
      zone: i,
      loc: Ze.fromObject(n)
    }) : Oe.invalid(ul(i));
  }
  static fromMillis(e, n = {}) {
    if (os(e))
      return e < -Rm || e > Rm ? Oe.invalid("Timestamp out of range") : new Oe({
        ts: e,
        zone: di(n.zone, gt.defaultZone),
        loc: Ze.fromObject(n)
      });
    throw new ln(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (os(e))
      return new Oe({
        ts: e * 1e3,
        zone: di(n.zone, gt.defaultZone),
        loc: Ze.fromObject(n)
      });
    throw new ln("fromSeconds requires a numerical input");
  }
  static fromObject(e, n = {}) {
    e = e || {};
    const r = di(n.zone, gt.defaultZone);
    if (!r.isValid)
      return Oe.invalid(ul(r));
    const i = Ze.fromObject(n), s = _u(e, Vm), { minDaysInFirstWeek: a, startOfWeek: o } = Om(s, i), l = gt.now(), u = we(n.specificOffset) ? r.offset(l) : n.specificOffset, f = !we(s.ordinal), c = !we(s.year), h = !we(s.month) || !we(s.day), d = c || h, p = s.weekYear || s.weekNumber;
    if ((d || f) && p)
      throw new js(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && f)
      throw new js("Can't mix ordinal dates with month/day");
    const m = p || s.weekday && !d;
    let v, y, g = cl(l, u);
    m ? (v = IC, y = DC, g = yu(g, a, o)) : f ? (v = RC, y = kC, g = Ic(g)) : (v = K0, y = X0);
    let E = !1;
    for (const L of v) {
      const P = s[L];
      we(P) ? E ? s[L] = y[L] : s[L] = g[L] : E = !0;
    }
    const b = m ? uL(s, a, o) : f ? cL(s) : S0(s), w = b || w0(s);
    if (w)
      return Oe.invalid(w);
    const N = m ? wm(s, a, o) : f ? xm(s) : s, [O, R] = jl(N, u, r), D = new Oe({
      ts: O,
      zone: r,
      o: R,
      loc: i
    });
    return s.weekday && d && e.weekday !== D.weekday ? Oe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${D.toISO()}`
    ) : D;
  }
  static fromISO(e, n = {}) {
    const [r, i] = tC(e);
    return ba(r, i, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, i] = nC(e);
    return ba(r, i, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, i] = rC(e);
    return ba(r, i, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (we(e) || we(n))
      throw new ln("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, a = Ze.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = PC(a, e, n);
    return f ? Oe.invalid(f) : ba(o, l, r, `format ${n}`, e, u);
  }
  static fromString(e, n, r = {}) {
    return Oe.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, i] = cC(e);
    return ba(r, i, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the DateTime is invalid");
    const r = e instanceof Yn ? e : new Yn(e, n);
    if (gt.throwOnInvalid)
      throw new V2(r);
    return new Oe({ invalid: r });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, n = {}) {
    const r = z0(e, Ze.fromObject(n));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(e, n = {}) {
    return q0(Wt.parseFormat(e), Ze.fromObject(n)).map((i) => i.val).join("");
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
    return this.isValid ? Fc(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Fc(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Fc(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? Vc(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? Vc(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? Vc(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? Ic(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? ol.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? ol.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? ol.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? ol.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, r = rc(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), a = this.zone.offset(r - i * n), o = this.zone.offset(r - s * n);
    if (a === o)
      return [this];
    const l = r - a * n, u = r - o * n, f = cl(l, a), c = cl(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Wi(this, { ts: l }), Wi(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return Po(this.year);
  }
  get daysInMonth() {
    return vu(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? Ks(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? fo(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? fo(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: r, calendar: i } = Wt.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: i };
  }
  toUTC(e = 0, n = {}) {
    return this.setZone(Qt.instance(e), n);
  }
  toLocal() {
    return this.setZone(gt.defaultZone);
  }
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = di(e, gt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || r) {
        const s = e.offset(this.ts), a = this.toObject();
        [i] = jl(a, s, e);
      }
      return Wi(this, { ts: i, zone: e });
    } else
      return Oe.invalid(ul(e));
  }
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return Wi(this, { loc: i });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = _u(e, Vm), { minDaysInFirstWeek: r, startOfWeek: i } = Om(n, this.loc), s = !we(n.weekYear) || !we(n.weekNumber) || !we(n.weekday), a = !we(n.ordinal), o = !we(n.year), l = !we(n.month) || !we(n.day), u = o || l, f = n.weekYear || n.weekNumber;
    if ((u || a) && f)
      throw new js(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new js("Can't mix ordinal dates with month/day");
    let c;
    s ? c = wm(
      { ...yu(this.c, r, i), ...n },
      r,
      i
    ) : we(n.ordinal) ? (c = { ...this.toObject(), ...n }, we(n.day) && (c.day = Math.min(vu(c.year, c.month), c.day))) : c = xm({ ...Ic(this.c), ...n });
    const [h, d] = jl(c, this.o, this.zone);
    return Wi(this, { ts: h, o: d });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e);
    return Wi(this, $m(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e).negate();
    return Wi(this, $m(this, n));
  }
  startOf(e, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid)
      return this;
    const r = {}, i = Re.normalizeUnit(e);
    switch (i) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (n) {
        const s = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < s && (r.weekNumber = this.weekNumber - 1), r.weekday = s;
      } else
        r.weekday = 1;
    if (i === "quarters") {
      const s = Math.ceil(this.month / 3);
      r.month = (s - 1) * 3 + 1;
    }
    return this.set(r);
  }
  endOf(e, n) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, n).minus(1) : this;
  }
  toFormat(e, n = {}) {
    return this.isValid ? Wt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : $c;
  }
  toLocaleString(e = gu, n = {}) {
    return this.isValid ? Wt.create(this.loc.clone(n), e).formatDateTime(this) : $c;
  }
  toLocaleParts(e = {}) {
    return this.isValid ? Wt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    let o = Gc(this, a);
    return o += "T", o += Fm(this, a, n, r, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Gc(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return fl(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + Fm(
      this,
      a === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  toRFC2822() {
    return fl(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return fl(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Gc(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), fl(this, i, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : $c;
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
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, n = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return Re.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = dL(n).map(Re.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = yC(o, l, s, i);
    return a ? u.negate() : u;
  }
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(Oe.now(), e, n);
  }
  until(e) {
    return this.isValid ? ft.fromDateTimes(this, e) : this;
  }
  hasSame(e, n, r) {
    if (!this.isValid)
      return !1;
    const i = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(n, r) <= i && i <= s.endOf(n, r);
  }
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const n = e.base || Oe.fromObject({}, { zone: this.zone }), r = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), jm(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? jm(e.base || Oe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("min requires all arguments be DateTimes");
    return Mm(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("max requires all arguments be DateTimes");
    return Mm(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, a = Ze.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return H0(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return Oe.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return gu;
  }
  static get DATE_MED() {
    return Qv;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return U2;
  }
  static get DATE_FULL() {
    return e0;
  }
  static get DATE_HUGE() {
    return t0;
  }
  static get TIME_SIMPLE() {
    return n0;
  }
  static get TIME_WITH_SECONDS() {
    return r0;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return i0;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return s0;
  }
  static get TIME_24_SIMPLE() {
    return a0;
  }
  static get TIME_24_WITH_SECONDS() {
    return o0;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return l0;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return u0;
  }
  static get DATETIME_SHORT() {
    return c0;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return f0;
  }
  static get DATETIME_MED() {
    return h0;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return d0;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return B2;
  }
  static get DATETIME_FULL() {
    return p0;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return m0;
  }
  static get DATETIME_HUGE() {
    return g0;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return y0;
  }
}
function Ea(t) {
  if (Oe.isDateTime(t))
    return t;
  if (t && t.valueOf && os(t.valueOf()))
    return Oe.fromJSDate(t);
  if (t && typeof t == "object")
    return Oe.fromObject(t);
  throw new ln(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const Z0 = [0, 1, 0, 0];
function Bm(t, e = "second", n, r) {
  const { t: i } = Xe(), s = new Date(t).toISOString(), a = {
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
  return l ? Oe.fromISO(s).toFormat(
    `${r ? "UTC:" : ""}${l}`
  ) : s.replace(/\.\d{3}/, "");
}
function Kf(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function jc(t) {
  return Oe.fromISO(t).toFormat("yyyy-MM-dd");
}
function FC(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? VC(t, e) : GC(t, e);
}
function VC(t, e) {
  var l;
  const n = (l = e.timeValueList) != null ? l : [];
  let r, i = 0, s = n.length - 1;
  for (; s - i > 1; )
    r = Math.floor((i + s) / 2), n[r] >= t ? s = r : i = r;
  const a = Math.abs(n[i] - t), o = Math.abs(n[s] - t);
  return n[a < o ? i : s];
}
function GC(t, e) {
  var l;
  const n = (l = e.timeInterval) != null ? l : Z0, r = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
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
const dt = vs("map", () => {
  const t = An(), e = _e({}), n = rt([]), r = rt([]), i = _e(!1), s = _e(!1), a = _e(void 0);
  function o(g) {
    a.value = g;
  }
  function l(...g) {
    n.value = [.../* @__PURE__ */ new Set([...n.value, ...g])];
  }
  function u(...g) {
    r.value = [.../* @__PURE__ */ new Set([...r.value, ...g])];
  }
  function f(...g) {
    n.value = n.value.filter(
      (E) => g.indexOf(E.id) === -1
    ), r.value = r.value.filter(
      (E) => g.indexOf(E.id) === -1
    );
  }
  function c() {
    n.value = [];
  }
  function h(g) {
    var E;
    return !!((E = n.value) != null && E.find((b) => b.id === g));
  }
  function d(g, E = !1) {
    var w;
    const b = E ? r : n;
    b.value = [
      ...((w = b.value) == null ? void 0 : w.sort(
        (N, O) => g.indexOf(N.id) - g.indexOf(O.id)
      )) || []
    ];
  }
  function p(g, E) {
    n.value = n.value.map((b) => b.id === g ? { ...b, opacity: E, previousOpacity: b.opacity } : b);
  }
  function m(g, E, b) {
    n.value = n.value.map((w) => {
      if (w.id === g) {
        const N = {
          ...w,
          currentTimeMinValue: E ? Kf(E) : void 0,
          currentTimeMaxValue: b ? Kf(b) : void 0
        };
        return N.type === "WMTS" && (N.name = t.getLayerCurrentLabel(N)), N;
      }
      return w;
    });
  }
  function v(g) {
    i.value = g;
  }
  function y(g) {
    s.value = g;
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
    setLayerOpacity: p,
    setLayerTime: m,
    setBgLayer: o,
    setIs3dActive: v,
    setIs3dMesh: y,
    hasLayer: h
  };
}), Wm = "main", jC = "root_3d", UC = -222, Zt = vs(
  "config",
  () => {
    const t = rt(), e = _e(Wm), n = fe(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.themes;
    }), r = fe(
      () => {
        var u;
        return (u = n.value) == null ? void 0 : u.find((f) => f.name === e.value);
      }
    ), i = fe(() => {
      var u;
      return ((u = t.value) == null ? void 0 : u.background_layers) || [];
    }), s = fe(() => {
      var f;
      const u = (f = n.value) == null ? void 0 : f.filter(
        (c) => {
          var h;
          return ((h = c.metadata) == null ? void 0 : h.ol3d_type) !== void 0;
        }
      );
      if (!!u)
        return {
          name: jC,
          id: UC,
          children: u.flatMap(
            (c) => c != null && c.children ? c.children : c
          ),
          metadata: {}
        };
    });
    function a(u) {
      t.value = u, r.value === void 0 && l();
    }
    function o(u) {
      e.value = u;
    }
    function l() {
      e.value = Wm;
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
function ls() {
  function t(o, l) {
    return n(o, void 0, l);
  }
  function e(o, l) {
    return n(void 0, o, l);
  }
  function n(o, l, u) {
    const { themes: f } = Zt();
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
    const { layerTrees_3d: l } = Zt();
    return n(o, void 0, l);
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
    find3dLayerById: r,
    findBgLayerById: i,
    findBgLayerByName: s,
    setTheme: a
  };
}
const qm = ls();
function An() {
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
    var f, c, h, d, p, m, v;
    l.currentTimeMinValue || (l.currentTimeMinValue = (h = (f = l.time) == null ? void 0 : f.minDefValue) != null ? h : (c = l.time) == null ? void 0 : c.minValue);
    const u = ((d = l.time) == null ? void 0 : d.mode) === Ir.RANGE;
    !l.currentTimeMaxValue && u && (l.currentTimeMaxValue = (v = (p = l.time) == null ? void 0 : p.maxDefValue) != null ? v : (m = l.time) == null ? void 0 : m.maxValue);
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
    ].join(k2);
  }
  function s(l) {
    var h, d;
    const u = hu();
    if (!((h = l.metadata) != null && h.exclusion))
      return;
    const f = dt(), c = f.layers.filter(
      (p) => {
        var m, v;
        return t(
          (m = l == null ? void 0 : l.metadata) == null ? void 0 : m.exclusion,
          (v = p == null ? void 0 : p.metadata) == null ? void 0 : v.exclusion
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
      co.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = dt(), f = hu();
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
      co.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var m;
    const c = Zt(), h = dt(), d = f ? c.layerTrees_3d : c.theme, p = qm.findById(l, d);
    if (p) {
      const v = ((m = p.metadata) == null ? void 0 : m.linked_layers) || [];
      u === !1 ? h.removeLayers(p.id, ...v) : (s(p), (f ? h.add3dLayers : h.addLayers)(
        e(p),
        ...v.map(
          (g) => e(
            qm.findById(parseInt(g, 10))
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
class BC {
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
const hl = new BC();
function Hm(t, e) {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(r);
    }, e);
  };
}
function Js(t) {
  return (t == null ? void 0 : t.trim()) && !isNaN(Number(t)) ? Number(t) : void 0;
}
function WC(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (n) => n !== null && !isNaN(Number(n)) ? parseFloat(n) : void 0
  )) || [];
}
function qC(t, e) {
  return (t == null ? void 0 : t.split(e).map(Jh)) || [];
}
function Jh(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function J0() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function mr(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
function HC(t) {
  const e = new RegExp("[^/]*//[^/]+/(.*)"), n = t.match(e);
  return n ? n[1] : null;
}
const zC = mr(/firefox/i);
mr(/safari/i) && !mr(/chrome/i) && mr(/android/i);
mr(/iP(ad|od|hone)/i);
mr(/chrome/i) && mr(/android/i);
mr(/chrome/i);
mr(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
mr(/Edge/i);
const Io = "ipv6", bu = "address", Ro = "applogin", $o = "localforage", Qs = "debug", YC = "embeddedserver", XC = "embeddedserverprotocol", Eu = "fid", xi = "lang", Su = "layersOpen", Zf = "version", KC = "map_id", zm = "layers", Ym = "bgLayer", Xm = "opacities", ho = "theme", Km = "time", Zm = "zoom", ZC = "SRS", Jm = "X", Qm = "Y", po = "serial", JC = "serialLayer", Q0 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Jf = "lc", Qf = "sliderRatio", e_ = "bgOpacity", QC = "layers_indices", eg = "layers_opacity", tg = "layers_visibility";
var kt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(kt || {});
class t_ {
}
class wu extends t_ {
  static processRules(e) {
    return wu.ruleUseLocalStorage(e) ? kt.localStorage : kt.permalink;
  }
  static processRulesForKey(e, n) {
    if (e === ho && {}.VITE_DEPLOY_GHPAGES !== "true")
      return kt.permalinkAsPath;
    if (Q0.includes(e))
      return kt.localStorage;
    if (e === po)
      return kt.permalink;
    if (e === Su)
      return kt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [eA, tA, nA].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const eA = (t) => Object.keys(t).length === 0, tA = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(Io) || t.hasOwnProperty(Ro) || t.hasOwnProperty($o)), nA = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(Io) && t.hasOwnProperty(Ro) && t.hasOwnProperty($o);
class xu extends t_ {
  static processRules() {
    return kt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, n) {
    if (xu.ruleUsePermalink(e))
      return kt.permalink;
    if (e === Su || Q0.includes(e))
      return kt.localStorage;
    if (e === po)
      return kt.permalink;
    if (e === ho)
      return kt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      rA,
      iA,
      sA
    ].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const rA = (t) => t === Jf || t === Qf, iA = (t) => t === Zf, sA = (t) => t === ho && {}.VITE_DEPLOY_GHPAGES === "true";
class n_ {
  constructor() {
    Ke(this, "snappedUrl");
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
const es = new n_();
class aA extends n_ {
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
const oA = new aA();
class lA {
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
    return es.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const n = (i = this.correspondingStorages(
      wu.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), r = this.storageForKey(e, wu, n);
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
      xu.processRules()
    ), r = this.storageForKey(e, xu);
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
    if (e === kt.permalinkAndLocalStorage)
      return [es, localStorage];
    if (e === kt.localStorage)
      return [localStorage];
    if (e === kt.permalink)
      return [es];
    if (e === kt.permalinkAsPath)
      return [oA];
  }
}
const dl = new lA();
function uA(t) {
  return cA(t) || fA(t) || hA(t) || dA(t);
}
const cA = (t) => Object.keys(t).length === 0, fA = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    Io,
    Ro,
    $o,
    Eu,
    xi,
    bu,
    Qs
  ].some((n) => e.indexOf(n) !== -1);
}, hA = (t) => {
  const e = Object.keys(t), n = (i) => e.indexOf(i) !== -1, r = [
    [Ro, $o],
    [Qs, Eu],
    [xi, Eu],
    [Qs, xi],
    [Qs, bu],
    [xi, bu]
  ];
  return Object.keys(t).length === 2 && r.reduce(
    (i, s) => i || s.every(n),
    !1
  );
}, dA = (t) => {
  const e = Object.keys(t), n = (a) => e.indexOf(a) !== -1, r = [Io, Ro, $o].every(
    n
  ), i = [Qs, Eu, xi].every(n), s = [Qs, bu, xi].every(n);
  return Object.keys(t).length === 3 && (r || i || s);
};
class pA {
  constructor() {
    Ke(this, "intialVersion");
    const e = dl.paramKeys, n = this.getValue(Zf, Js);
    this.intialVersion = n ? Math.max(2, Math.min(n, 3)) : uA(e) ? 3 : 2, this.setValue(Zf, 3);
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
    return this.mapToEntity(dl.getValue(e), n);
  }
  setValue(e, n, r) {
    dl.setValue(e, this.mapToStorage(n, r));
  }
  removeItem(e) {
    dl.removeItem(e);
  }
}
const Ne = new pA(), mA = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], gA = "https://vectortiles.geoportail.lu", yA = "/getpermalinkstyle", vA = "/uploadpermalinkstyle", _A = "/deletepermalinkstyle";
class bA {
  constructor() {
    Ke(this, "_vectortilesUrl", gA);
    Ke(this, "_mvtStylesGetUrl", yA);
    Ke(this, "_mvtStylesUploadUrl", vA);
    Ke(this, "_mvtStylesDeleteUrl", _A);
  }
  get vectortilesUrl() {
    return this._vectortilesUrl === void 0 && console.warn("Warning: vectortilesUrl is not set."), this._vectortilesUrl;
  }
  get mvtStylesGetUrl() {
    return this._mvtStylesGetUrl === void 0 && console.warn("Warning: mvtStylesGetUrl is not set."), this._mvtStylesGetUrl;
  }
  get mvtStylesUploadUrl() {
    return this._mvtStylesUploadUrl === void 0 && console.warn("Warning: mvtStylesUploadUrl is not set."), this._mvtStylesUploadUrl;
  }
  get mvtStylesDeleteUrl() {
    return this._mvtStylesDeleteUrl === void 0 && console.warn("Warning: mvtStylesDeleteUrl is not set."), this._mvtStylesDeleteUrl;
  }
  setRegisterUrl_v3(e) {
    e.get && (this._mvtStylesGetUrl = e.get), e.upload && (this._mvtStylesUploadUrl = e.upload), e.delete && (this._mvtStylesDeleteUrl = e.delete), e.vectortiles && (this._vectortilesUrl = e.vectortiles);
  }
}
const Aa = new bA(), Vr = () => ({
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
function Di() {
  function t(y) {
    const g = es.getItem(YC), E = es.getItem(XC) || "http";
    return (g ? `${E}://${g}` : Aa.vectortilesUrl) + `/styles/${y}/style.json`;
  }
  function e(y) {
    return `${Aa.vectortilesUrl}/styles/${y}/{z}/{x}/{y}.png`;
  }
  function n(y) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(y);
  }
  function r(y, g) {
    const E = Kn();
    if (y == null)
      return;
    const b = /* @__PURE__ */ new Map();
    E.bgVectorSources.forEach((w, N) => {
      if (N === y.id) {
        const O = { ...w, xyz_custom: g };
        b.set(N, O);
      } else
        b.set(N, w);
    }), E.setBgVectorSources(b);
  }
  function i(y, g, E = !1) {
    const b = "", w = t(g), N = e(g), O = {
      label: y,
      defaultMapBoxStyle: w,
      defaultMapBoxStyleXYZ: N,
      xyz: N,
      xyz_custom: b,
      style: w
    }, R = es.getItem(po), D = es.getItem(JC);
    if (R)
      n(R) && console.log(D);
    else if (!E)
      return Promise.resolve(O);
    return Promise.resolve(O);
  }
  function s(y) {
    const g = Vr().medium_default_styles.road;
    if (y) {
      y.colors.forEach((b, w) => {
        g[w].color = b;
      });
      const E = g.findIndex(
        (b) => b.label === "Hillshade"
      );
      g[E].visible = y.hillshade;
    }
    return g;
  }
  function a(y, g, E) {
    if (!y || !g.get(y.id))
      return;
    const b = JSON.parse(
      JSON.stringify(g.get(y.id))
    );
    if (!!b && !(!b || !b.layers))
      return E && E.forEach((w) => {
        b == null || b.layers.forEach((N, O) => {
          for (const R of mA)
            if ((w[`${R}s`] || []).includes(N.id)) {
              const L = Object.assign(
                {},
                b.layers[O].paint
              );
              w.color && (L[`${R}-color`] = w.color, L[`${R}-opacity`] = 1, b.layers[O].paint = L), b.layers[O].layout = Object.assign(
                {},
                b.layers[O].layout,
                { visibility: w.visible ? "visible" : "none" }
              );
            }
        });
      }), b;
  }
  function o(y) {
    return y ? fetch(`${Aa.mvtStylesDeleteUrl}?id=${y}`).catch(console.warn) : Promise.resolve();
  }
  async function l(y, g) {
    await o(g);
    const E = new FormData(), b = JSON.stringify(y), w = new Blob([b], { type: "application/json" });
    E.append("style", w, "style.json");
    const N = {
      method: "POST",
      body: E
    };
    return fetch(Aa.mvtStylesUploadUrl, N).then((O) => O.json()).then((O) => O.id).catch(console.warn);
  }
  function u(y, g) {
    if (!g)
      return;
    const E = y.maplibreMap;
    !E || (E.loaded() ? E.setStyle(g) : new Promise((b) => E.once("data", b)).then(
      () => E.setStyle(g)
    ));
  }
  function f(y) {
    return Vr().bg_layers.find((g) => g.id == (y == null ? void 0 : y.id));
  }
  function c(y) {
    const g = f(y);
    return g == null ? void 0 : g.vector_id;
  }
  function h(y) {
    const g = f(y);
    return (g == null ? void 0 : g.vector_id) !== void 0;
  }
  function d(y) {
    const g = f(y);
    return {
      isEditable: (g == null ? void 0 : g.vector_id) !== void 0,
      hasSimpleStyle: (g == null ? void 0 : g.simple_style_class) !== void 0,
      hasAdvancedStyle: (g == null ? void 0 : g.medium_style_class) !== void 0,
      hasExpertStyle: (g == null ? void 0 : g.expert_style_class) !== void 0
    };
  }
  function p(y, g) {
    return g.map(
      (E) => Object.assign(E, {
        selected: E.colors.every(
          (b, w) => {
            var N;
            return ((N = y[w]) == null ? void 0 : N.color) === b;
          }
        )
      })
    );
  }
  function m() {
  }
  function v() {
    const y = [], g = Kn();
    Vr().bg_layers.forEach((E) => {
      if (E.vector_id) {
        const b = i(E.icon_id, E.vector_id);
        y.push(b.then((w) => ({ id: E.id, config: w })));
      }
    }), Promise.all(y).then((E) => {
      const b = /* @__PURE__ */ new Map();
      E.forEach((w) => b.set(w.id, w.config)), g.setBgVectorSources(b);
    });
  }
  return {
    getDefaultMapBoxStyleUrl: t,
    getDefaultMapBoxStyleXYZ: e,
    setConfigForLayer: i,
    getRoadStyleFromSimpleStyle: s,
    applyDefaultStyle: a,
    applyConsolidatedStyle: u,
    getVectorId: c,
    setCustomStyleSerial: r,
    unregisterStyle: o,
    registerStyle: l,
    checkSelection: p,
    isLayerStyleEditable: h,
    getStyleCapabilitiesFromLayer: d,
    initBackgroundsConfigs: v,
    onApplyStyle: m
  };
}
const Kn = vs(
  "style",
  () => {
    const t = Di(), e = rt(), n = rt(/* @__PURE__ */ new Map()), r = rt(
      /* @__PURE__ */ new Map()
    ), i = rt(!1), s = rt(null), a = rt();
    function o(p) {
      n.value = p;
    }
    function l(p) {
      const m = /* @__PURE__ */ new Map();
      r.value.forEach((v, y) => {
        y !== p && m.set(y, v);
      }), r.value = m;
    }
    function u(p, m) {
      const v = /* @__PURE__ */ new Map();
      r.value.forEach(
        (y, g) => v.set(g, y)
      ), v.set(p, m), r.value = v;
    }
    function f(p) {
      e.value = t.getRoadStyleFromSimpleStyle(p), h();
    }
    function c(p) {
      e.value = p, h();
    }
    function h() {
      i.value = !1;
    }
    function d() {
      i.value = !0;
    }
    return {
      bgStyle: e,
      bgVectorSources: n,
      bgVectorBaseStyles: r,
      isExpertStyleActive: i,
      appliedStyle: a,
      removeBaseStyle: l,
      setBaseStyle: u,
      setBgVectorSources: o,
      setSimpleStyle: f,
      setStyle: c,
      disableExpertStyle: h,
      enableExpertStyle: d,
      styleSerial: s
    };
  },
  {}
);
class EA {
  constructor() {
    Ke(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = Kn();
    let n, r = !1;
    n = vn(() => {
      e.bgVectorSources && (this.restoreStyle(!1), r && this.persistStyle(), r = !0, n && n());
    });
  }
  persistStyle() {
    const e = Kn(), { bgStyle: n } = We(e);
    this.styleWatcher || (this.styleWatcher = tt(
      n,
      (r, i) => {
        if (i !== r) {
          const s = dt();
          s.bgLayer && (Ne.setValue(
            s.bgLayer.name,
            r || [],
            hl.styleToLocalStorage
          ), Ne.setValue(
            po,
            r || [],
            hl.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const n = Kn();
    n.setStyle(null);
    const i = dt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Ne.getValue(
        po,
        hl.styleSerialToStyle
      )), s.length === 0 && (s = Ne.getValue(
        i.name,
        hl.styleLocalStorageToStyle
      )), s && s.length > 0 && n.setStyle(s);
    }
  }
}
const r_ = new EA();
var eh = /* @__PURE__ */ ((t) => (t.LAYER_OFFLINE_TILE = "tile", t.LAYER_OFFLINE_VECTOR = "vector", t))(eh || {}), Gr = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WFS = "WFS", t.WMTS = "WMTS", t.BG_WMTS = "BG WMTS", t.BG_MVT = "BG MVT", t["3D"] = "3D", t.TILE_WMS = "tileWMS", t))(Gr || {});
const SA = "id", i_ = "label", s_ = "layer_name", a_ = "metadata", wA = "queryable_id", xA = "current_time", OA = "time", MA = "defaultMapBoxStyle", TA = "https://map.geoportail.lu/ogcproxywms", NA = "https://map.geoportail.lu/httpsproxy";
class LA {
  constructor() {
    Ke(this, "_wmsProxyUrl", TA);
    Ke(this, "_remoteProxyUrl", NA);
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
const aa = new LA();
function o_() {
  return lb(
    [5.31, 49.38, 6.64, 50.21],
    zv,
    za
  );
}
function l_(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && J0();
}
function CA(t, e = "https") {
  const n = t.imageType.split("/")[1], r = Ne.getValue(Io, Jh) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${r}/mapproxy_4_v3/wmts/{Layer}${l_(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${n}`;
}
class AA {
  createOlLayer(e) {
    const { name: n, layers: r, imageType: i, url: s, id: a } = e, o = new Pg({
      url: s || aa.wmsProxyUrl,
      hidpi: J0(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: r
      },
      ...s != null || aa.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new pb({
      properties: {
        "olcs.extent": o_(),
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
const u_ = new AA(), PA = [
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
], DA = [
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
class kA {
  createOlLayer(e) {
    const { name: n, imageType: r, id: i } = e, s = l_(e), a = wl(za), o = a.getExtent(), l = new fh({
      url: CA(e),
      tilePixelRatio: s ? 2 : 1,
      layer: n,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: r,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new kg({
        origin: mb(o),
        extent: o,
        resolutions: PA,
        matrixIds: DA
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new Dg({
      source: l,
      properties: {
        "olcs.extent": o_(),
        label: n,
        id: i
      }
    });
  }
  setLayerTime(e, n, r) {
    const i = e.get(a_).time_layers[r], s = n.getUrls();
    if (s) {
      const a = this.transformUrls(s, i);
      n.setUrls(a), e.set(i_, i), e.set(s_, i);
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
const c_ = new kA();
class f_ extends gb {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.accessToken, delete n.style, delete n.container, delete n.xyz, super(n), this.set("xyz", e.maplibreOptions.xyz), this.set("xyz_custom", e.maplibreOptions.xyz_custom), this.xyz_ = e.xyz, e.accessToken && (Ed.accessToken = e.accessToken), this.map_ = new Ed.Map({
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
    return a && this.map_.rotateTo(yb(-a), {
      animate: !1
    }), this.map_.jumpTo({
      center: ub(r.center),
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
class IA {
  createOlLayer(e, n) {
    const r = Fr(), { id: i, metadata: s, name: a } = e, o = n.get(i);
    if (!o)
      return;
    const l = {
      container: r.getOlMap().getTarget(),
      ...o
    }, u = new f_({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = Kn(), c = Di();
    return u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u.getMapLibreMap().getStyle()) : new Promise(
      (h) => u.getMapLibreMap().once("data", h)
    ).then(
      () => f.setBaseStyle(i, u.getMapLibreMap().getStyle())
    ), u.set(
      MA,
      c.getDefaultMapBoxStyleUrl(c.getVectorId(e))
    ), u;
  }
}
const RA = new IA(), $A = "fr", FA = !0, VA = !1, GA = !1, _t = vs(
  "app",
  () => {
    const t = _e($A), e = _e(FA), n = _e(VA), r = _e(GA), i = _e(), s = _e(), a = _e(!1), o = _e(!1), l = _e(!1);
    function u(g) {
      t.value = g;
    }
    function f(g) {
      e.value = g, g || (r.value = !1, n.value = !1);
    }
    function c(g) {
      n.value = g, g && (r.value = !1);
    }
    function h(g) {
      r.value = g;
    }
    function d(g) {
      s.value = g;
    }
    function p(g) {
      i.value = g;
    }
    function m() {
      a.value = !0;
    }
    function v() {
      a.value = !1;
    }
    function y(g) {
      o.value = g;
    }
    return {
      lang: t,
      layersOpen: e,
      myLayersTabOpen: n,
      themeGridOpen: r,
      mapId: i,
      styleEditorOpen: a,
      remoteLayersOpen: s,
      drawToolbarOpen: o,
      setLang: u,
      setLayersOpen: f,
      setMyLayersTabOpen: c,
      setThemeGridOpen: h,
      setRemoteLayersOpen: d,
      setMapId: p,
      openStyleEditorPanel: m,
      closeStyleEditorPanel: v,
      setDrawToolbarOpen: y,
      isOffLine: l
    };
  },
  {}
);
let ng;
function ms() {
  const { isOffLine: t } = We(_t());
  function e(i) {
    ng = i;
  }
  function n() {
    return t.value;
  }
  function r(i) {
    t.value = i;
  }
  return {
    localforage_v3: ng,
    isOffLine: t,
    initLocalforage_v3: e,
    getIsOffline: n,
    setIsOffline: r
  };
}
class h_ {
  createOlLayer(e) {
    const n = this.deserializeTileLayer(e.options);
    return new Dg(n);
  }
  createTileLoadFunction() {
    const e = ms().localforage_v3;
    return (r, i) => {
      const s = HC(i);
      e.getItem(s).then((a) => {
        r.getImage().src = a || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
      });
    };
  }
}
class jA extends h_ {
  deserializeTileLayer(e) {
    return e.tileLoadFunction = this.createTileLoadFunction(), e.gutter = {}.VITE_GUTTER, e.source = new vb(e), e.tileGrid && (e.tileGrid = new _b(e)), e;
  }
  serializeTileLayer(e) {
    throw new Error("Method not implemented.");
  }
}
const UA = new jA();
class BA extends h_ {
  deserializeTileLayer(e) {
    return e.tileLoadFunction = this.createTileLoadFunction(), e.source = new fh(e), e.tileGrid && (e.tileGrid = new kg(e)), e;
  }
  serializeTileLayer(e) {
    throw new Error("Method not implemented.");
  }
}
const WA = new BA();
class qA {
  createOlLayer(e) {
    let n;
    switch (this.getOfflineLayerSourceType(e)) {
      case Gr.WMTS:
        n = WA.createOlLayer(e);
        break;
      case Gr.TILE_WMS:
        n = UA.createOlLayer(e);
        break;
      default:
        throw new Error(`Unrecognized offline layer type: ${e.type}`);
    }
    return n;
  }
  getOfflineLayerSourceType(e) {
    return e.options.sourceType;
  }
}
const HA = new qA();
class zA {
  createOlLayer(e, n) {
    let r;
    if (n && (r = RA.createOlLayer(e, n)), !r)
      switch (e.type) {
        case Gr.WMS:
          r = u_.createOlLayer(e);
          break;
        case Gr.WMTS:
        case Gr.BG_WMTS:
          r = c_.createOlLayer(e);
          break;
        case eh.LAYER_OFFLINE_TILE:
        case eh.LAYER_OFFLINE_VECTOR:
          r = HA.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return r.set(SA, e.id), r.set(i_, e.name), r.set(s_, e.name), r.set(a_, e.metadata), r.set(wA, e.id), r.set(
      xA,
      An().getLayerCurrentTime(e)
    ), r.set(OA, e.time), r.setOpacity(e.opacity), r;
  }
}
const rg = new zA();
class YA {
  setLayerTime(e, n) {
    const r = e.getSource();
    r instanceof Pg && u_.setLayerTime(r, n), r instanceof fh && c_.setLayerTime(e, r, n);
  }
}
const XA = new YA(), pl = -200;
function d_() {
  function t(d, p) {
    if (!p)
      return;
    const m = u(p);
    d.addLayer(m);
  }
  function e(d, p) {
    return d.getLayers().getArray().find((m) => m.get("id") === p);
  }
  function n(d, p) {
    const m = e(d, p);
    m && d.removeLayer(m);
  }
  function r(d, p) {
    const m = d.getLayers().getArray();
    p.forEach((v, y) => {
      const g = m.find(
        (E) => E.get("id") === v.id
      );
      g == null || g.setZIndex(y + 1);
    });
  }
  function i(d, p, m) {
    const v = d.getLayers().getArray().find((y) => y.get("id") === p);
    v && v.setOpacity(m);
  }
  function s(d, p) {
    const m = An(), v = e(d, p.id), y = m.getLayerCurrentTime(p);
    y && v && XA.setLayerTime(v, y);
  }
  function a(d) {
    ks.delete(d);
  }
  function o(d) {
    return ks.has(d.id);
  }
  function l(d, p) {
    ks.set(d, p);
  }
  function u(d) {
    const p = d.id, m = ks.get(p);
    if (m)
      return m;
    {
      const v = rg.createOlLayer(d);
      return l(p, v), v;
    }
  }
  function f(d) {
    return d && ks.get(d.id) || null;
  }
  function c(d, p) {
    const v = d.getLayers().getArray().find((y) => y.getZIndex() === pl);
    v && p(v);
  }
  function h(d, p, m) {
    var b;
    const v = d.getLayers(), y = v.getArray().findIndex((w) => w.getZIndex() === pl), g = (b = v.getArray()[y]) == null ? void 0 : b.get("id");
    let E;
    p && (o(p) ? E = f(p) : (E = rg.createOlLayer(
      p,
      m
    ), l(p.id, E))), y >= 0 ? E ? (E.setZIndex(pl), v.setAt(y, E)) : v.removeAt(y) : E && (E.setZIndex(pl), d.addLayer(E)), g && g !== (p == null ? void 0 : p.id) && r_.restoreStyle(!0);
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
class KA {
  constructor(e) {
    Ke(this, "previousLayers");
    Ke(this, "previousVectorSources");
    Ke(this, "timeoutID");
    const n = dt(), r = Kn(), i = Fr(), s = Di(), a = d_();
    ms();
    const { appliedStyle: o } = We(r);
    tt(
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
        c.forEach((p) => a.removeLayer(e, p.id)), h.forEach((p) => {
          a.addLayer(e, p.layer), a.setLayerTime(e, p.layer);
        }), d.forEach((p) => {
          a.setLayerOpacity(e, p.id, p.opacity), a.setLayerTime(e, p);
        }), f.layers && a.reorderLayers(e, f.layers), this.previousLayers = l;
      }
    ), tt(
      () => n.bgLayer,
      (l) => l !== void 0 && a.setBgLayer(e, l, r.bgVectorSources)
    ), vn(() => {
      r.isExpertStyleActive || (o.value = s.applyDefaultStyle(
        n.bgLayer,
        r.bgVectorBaseStyles,
        r.bgStyle
      ));
    }), tt(o, (l) => {
      r.bgStyle === null && !r.isExpertStyleActive ? s.unregisterStyle(r.styleSerial).then(r.styleSerial = null) : (clearTimeout(this.timeoutID), this.timeoutID = setTimeout(() => {
        s.registerStyle(l, r.styleSerial).then((u) => {
          var c;
          r.styleSerial = u;
          const f = (c = n == null ? void 0 : n.bgLayer) == null ? void 0 : c.id;
          (n == null ? void 0 : n.bgLayer) && f !== void 0 && u !== void 0 && a.setBgLayer(
            e,
            n == null ? void 0 : n.bgLayer,
            r.bgVectorSources
          );
        });
      }, 2e3)), a.applyOnBgLayer(
        e,
        (u) => s.applyConsolidatedStyle(u, l)
      );
    }), tt(
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
const ZA = {
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
class JA {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = Fr().getOlMap().getView(), n = () => {
      const r = e.getZoom();
      Ne.setValue(Zm, r ? Math.ceil(r) : null);
    };
    n(), Sd.listen(
      e,
      "change:resolution",
      Hm(n, 300)
    );
  }
  persistXY() {
    const e = Fr().getOlMap().getView(), n = () => {
      const r = e.getCenter();
      Ne.setValue(Jm, r ? Math.round(r[0]) : null), Ne.setValue(Qm, r ? Math.round(r[1]) : null);
    };
    n(), Sd.listen(
      e,
      bb.PROPERTYCHANGE,
      Hm(n, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = Fr().getOlMap().getView(), n = Ne.getValue(Zm, Js), r = Ne.getInitialVersion(), i = Ne.getValue(Jm, Js), s = Ne.getValue(Qm, Js), a = Ne.getValue(ZC), o = cb(
      JN,
      za
    );
    let l, u;
    n !== void 0 ? u = r === 3 ? Number(n) : ZA[n] : u = 8, i != null && s != null ? r === 3 && a != null ? l = bd([i, s], a, za) : l = r === 3 ? [i, s] : o([s, i], void 0, 2) : l = bd(
      [6, 49.7],
      zv,
      za
    ), e.setCenter(l), e.setZoom(u);
  }
}
const QA = new JA(), eP = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, tP = /* @__PURE__ */ he({
  __name: "attribution-control",
  setup(t) {
    const e = dt(), n = _e("");
    return vn(() => {
      var r, i;
      n.value = ((i = (r = e.bgLayer) == null ? void 0 : r.metadata) == null ? void 0 : i.attribution) || "";
    }), (r, i) => {
      const s = Th("dompurify-html");
      return n.value ? eu((A(), V("div", eP, null, 512)), [
        [s, n.value]
      ]) : F("v-if", !0);
    };
  }
}), nP = /* @__PURE__ */ de(tP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/attribution-control.vue"]]);
function Fo(t, e) {
  const n = new t(e), r = Fr(), i = Hs("olMap");
  return _n(() => {
    i.addControl(n), i.changed();
  }), Ai(() => {
    const s = r.getOlMap();
    s.removeControl(n), s.changed();
  }), {
    control: n
  };
}
const rP = ["title"], iP = /* @__PURE__ */ he({
  __name: "location-control",
  props: {
    className: { type: String, required: !1, default: "location-button" },
    label: { type: String, required: !1, default: "\uE800" },
    tipLabel: { type: String, required: !1, default: "Location" }
  },
  setup(t) {
    const { t: e } = Xe(), n = t, r = _e(null);
    function i() {
    }
    return _n(
      () => Fo($g, { ...n, target: r })
    ), (s, a) => (A(), V("div", {
      ref_key: "controlElement",
      ref: r,
      class: Pe(`tracker-off ${n.className} ${M(Ig)} ${M(Rg)}`)
    }, [
      C("button", {
        title: M(e)(n.tipLabel),
        onClick: i
      }, ae(n.label), 9, rP)
    ], 2));
  }
}), sP = /* @__PURE__ */ de(iP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/location-control.vue"]]), aP = ["title"], oP = /* @__PURE__ */ he({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = dt(), { t: n } = Xe(), r = t, i = _e(null);
    _n(
      () => Fo($g, { ...r, target: i })
    );
    const s = () => {
      e.setIs3dActive(!e.is3dActive);
    };
    return (a, o) => (A(), V("div", {
      ref_key: "controlElement",
      ref: i,
      class: Pe(`${r.className} ${M(Ig)} ${M(Rg)} ${M(e).is3dActive ? "active" : ""}`)
    }, [
      C("button", {
        title: M(n)(r.tipLabel),
        onClick: s
      }, ae(r.label), 9, aP)
    ], 2));
  }
}), lP = /* @__PURE__ */ de(oP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/map-3d.vue"]]), uP = /* @__PURE__ */ he({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return Fo(Eb, t), (n, r) => F("v-if", !0);
  }
}), cP = /* @__PURE__ */ de(uP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/fullscreen-control.vue"]]), fP = /* @__PURE__ */ he({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return Fo(Sb, t), (n, r) => F("v-if", !0);
  }
}), hP = /* @__PURE__ */ de(fP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/zoom-control.vue"]]);
class dP extends wb {
  constructor(n) {
    super(n);
    Ke(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const pP = /* @__PURE__ */ he({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: Array, required: !0 }
  },
  setup(t) {
    return Fo(dP, t), (n, r) => F("v-if", !0);
  }
}), mP = /* @__PURE__ */ de(pP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/zoom-to-extent-control.vue"]]), gP = /* @__PURE__ */ he({
  __name: "map-container",
  props: {
    v4_standalone: { type: Boolean, required: !1, default: !1 }
  },
  setup(t) {
    const e = Fr(), n = _e(null), r = e.createMap(), i = [
      425152.9429259216,
      632446599999133e-8,
      914349.9239510496,
      6507914867875754e-9
    ];
    return _n(() => {
      n.value && (new KA(r), QA.bootstrap(), r.setTarget(n.value), window.olMap = r);
    }), Fy("olMap", r), (s, a) => (A(), V("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: n,
      class: "h-full w-full bg-white relative"
    }, [
      ee(hP),
      ee(mP, { extent: i }),
      ee(cP),
      ee(nP),
      s.v4_standalone ? (A(), Fe(lP, { key: 0 })) : F("v-if", !0),
      ee(sP)
    ], 512));
  }
}), yP = /* @__PURE__ */ de(gP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map/map-container.vue"]]), Ou = {
  name: "blank",
  id: 0
};
function p_() {
  const t = _t(), { mapId: e } = We(t), n = ls(), r = dt(), i = An(), s = fe(() => {
    var c;
    if (!e.value) {
      const h = (c = Zt().theme) == null ? void 0 : c.name;
      if (h)
        return Vr().bg_layer_theme_defaults[h] || l();
    }
    return l();
  });
  function a(c) {
    const h = n.findBgLayerById(c);
    o(h || null);
  }
  function o(c) {
    if (c) {
      if (c.type === Gr.WMTS || c.type === Gr.BG_WMTS)
        c.type = "BG WMTS";
      else if (c.type === Gr.BG_MVT)
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
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || Ou.id;
  }
  function u() {
    return Ou.id;
  }
  function f() {
    return Vr().bg_layers;
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
const vP = ["title"], _P = /* @__PURE__ */ he({
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
    const { t: e } = Xe(), n = t, r = fe(() => {
      const s = e(n.bgTitle), a = n.bgTitle.length > 0, o = `${e("Background layer:")} ${e(n.bgName)}`;
      return `${s}${a ? " - " : ""}${o}`;
    }), i = fe(
      () => `h-full w-full rounded-sm lux-bg-sel-icon
        lux-bg-sel-${n.bgName}
        bg-${n.bgName}_sm
        md:bg-${n.bgName}
        hd:bg-${n.bgName}_sm_hi
        hd_md:bg-${n.bgName}_hi`
    );
    return (s, a) => (A(), V("button", {
      title: r.value,
      class: Pe(i.value)
    }, null, 10, vP));
  }
}), ig = /* @__PURE__ */ de(_P, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/background-selector/background-selector-item.vue"]]), bP = {
  key: 0,
  class: "flex flex-row-reverse"
}, EP = /* @__PURE__ */ he({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { t: e } = Xe(), n = p_(), r = dt(), i = Zt(), { bgLayer: s, is3dMesh: a } = We(r), l = _e(t.isOpen), u = _e([]), f = fe(
      () => {
        var p, m;
        return (m = (p = s.value) == null ? void 0 : p.id) != null ? m : n.getNullId();
      }
    ), c = fe(
      () => {
        var p, m;
        return (m = (p = u.value) == null ? void 0 : p.find((v) => v.id === f.value)) == null ? void 0 : m.name;
      }
    );
    tt(
      () => i.bgLayers,
      (p) => {
        u.value = Vr().bg_layers.map(
          (m) => Object.assign(
            {
              id: m.id
            },
            p.find((v) => m.id === v.id),
            {
              name: m.icon_id
            }
          )
        );
      },
      { immediate: !0 }
    ), tt(
      () => r.bgLayer,
      (p, m) => {
        const v = r.layers;
        m === void 0 && p === null && (v == null ? void 0 : v.length) === 0 && (n.setBgLayer(n.defaultSelectedBgId.value), p === null && hu().addNotification(
          e(
            "Aucune couche n'\xE9tant d\xE9finie pour cette carte, une couche de fond a automatiquement \xE9t\xE9 ajout\xE9e.",
            { ns: "client" }
          )
        ));
      }
    );
    function h(p) {
      n.setBgLayer(p.id), l.value = !1;
    }
    function d() {
      l.value = !l.value;
    }
    return (p, m) => M(a) ? F("v-if", !0) : (A(), V("div", bP, [
      C("div", {
        class: Pe(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ee(ig, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": c.value,
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      C("div", {
        class: Pe(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (A(!0), V(Ue, null, Dn(u.value, (v) => (A(), V("div", {
          key: v.id,
          class: Pe([
            "lux-bg-sel hover:bg-cyan-600",
            v.id === f.value ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ee(ig, {
            "bg-name": v.name,
            onClick: (y) => h(v)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), SP = /* @__PURE__ */ de(EP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/background-selector/background-selector.vue"]]), wP = /* @__PURE__ */ C("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), xP = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, OP = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, MP = { class: "text-xl" }, TP = /* @__PURE__ */ C("span", { "aria-hidden": "true" }, "\xD7", -1), NP = [
  TP
], LP = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, CP = { class: "flex flex-row justify-end" }, AP = /* @__PURE__ */ he({
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
    const { t: e } = Xe(), n = _e();
    _n(() => {
      n.value.focus();
    });
    const r = rt(!0);
    function i() {
      r.value = !1;
    }
    return (s, a) => (A(), Fe(Xy, { to: "body" }, [
      F(" backdrop "),
      wP,
      F(" modal "),
      ee(Xu, {
        appear: "",
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "transform opacity-0 -translate-y-60",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "transform opacity-0 -translate-y-60",
        onAfterLeave: a[3] || (a[3] = (o) => s.$emit("close"))
      }, {
        default: bi(() => [
          r.value ? (A(), V("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: n,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = or(ar((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            C("div", xP, [
              F(" header (title)"),
              C("div", OP, [
                C("h4", MP, ae(t.title), 1),
                C("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, [...NP])
              ]),
              F(" content slot "),
              C("div", {
                class: Pe(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                Dy(s.$slots, "content")
              ], 2),
              F(" footer (optional)"),
              t.footer ? (A(), V("div", LP, [
                C("div", CP, [
                  C("button", {
                    type: "button",
                    class: "lux-btn",
                    "data-dismiss": "modal",
                    onClick: a[1] || (a[1] = (o) => i())
                  }, ae(M(e)("Close", { ns: "client" })), 1)
                ])
              ])) : F("v-if", !0)
            ])
          ], 544)) : F("v-if", !0)
        ]),
        _: 3
      })
    ]));
  }
}), m_ = /* @__PURE__ */ de(AP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/modal-dialog.vue"]]), Qh = vs(
  "metadata",
  () => {
    const t = _e();
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
), PP = ["aria-expanded"], DP = { class: "leading-6" }, kP = /* @__PURE__ */ he({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, n) => (A(), V(Ue, null, [
      C("button", {
        onClick: n[0] || (n[0] = (r) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": e.expanded
      }, [
        C("div", {
          class: Pe(["grow", e.expanded ? "text-white" : "text-secondary"])
        }, ae(e.title), 3),
        C("div", DP, [
          C("div", {
            class: Pe(["fa fa-sharp fa-solid group-hover:text-white text-primary", e.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, PP),
      C("div", {
        class: Pe(e.expanded ? "" : "hidden")
      }, [
        Dy(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), Ul = /* @__PURE__ */ de(kP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/expandable-panel.vue"]]), IP = {
  class: "mb-px",
  key: "node.id"
}, RP = ["data-cy"], $P = ["aria-expanded", "data-cy"], FP = { class: "grow" }, VP = { class: "leading-6" }, GP = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, jP = ["data-cy"], UP = { class: "ml-1 hover:underline" }, BP = /* @__PURE__ */ he({
  __name: "layer-tree-node",
  props: {
    node: { type: Object, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i } = Xe(), { setMetadataId: s } = Qh(), a = !!n.node.children, o = n.node.depth === 0, l = n.node.depth >= 10, u = fe(() => i(n.node.name, { ns: "client" }));
    function f(h) {
      r("toggleLayer", h);
    }
    function c(h) {
      r("toggleParent", h);
    }
    return (h, d) => {
      const p = X1("layer-tree-node", !0);
      return a ? (A(), V("div", IP, [
        F("    First level parents"),
        h.node.depth === 1 ? (A(), V("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${h.node.id}`
        }, [
          ee(Ul, {
            title: u.value,
            expanded: h.node.expanded,
            onTogglePanel: d[0] || (d[0] = (m) => c(h.node))
          }, null, 8, ["title", "expanded"])
        ], 8, RP)) : h.node.depth > 1 && !l ? (A(), V(Ue, { key: 1 }, [
          F("    Other parents (with custom panel style)"),
          C("button", {
            class: Pe(["w-full text-left flex px-2 py-1.5 pl-2", h.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": h.node.expanded,
            onClick: d[1] || (d[1] = (m) => c(h.node)),
            "data-cy": `parentLayerLabel-${h.node.id}`
          }, [
            C("div", FP, ae(u.value), 1),
            C("div", VP, [
              C("div", {
                class: Pe(["fa-sharp fa-solid", h.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, $P)
        ], 2112)) : F("v-if", !0),
        F("    Children"),
        l ? F("v-if", !0) : (A(), V("div", {
          key: 2,
          class: Pe(["bg-secondary", [
            { "pl-2": h.node.depth > 1 },
            { "lux-collapse": !o },
            { expanded: !o && h.node.expanded }
          ]])
        }, [
          (A(!0), V(Ue, null, Dn(h.node.children, (m) => (A(), Fe(p, {
            key: m.id,
            node: m,
            onToggleParent: d[2] || (d[2] = (v) => c(v)),
            onToggleLayer: d[3] || (d[3] = (v) => f(v))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (A(), V("div", GP, [
        C("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: d[4] || (d[4] = (m) => M(s)(h.node.id))
        }),
        C("button", {
          class: Pe(["w-full text-left", { "font-bold": h.node.checked }]),
          onClick: d[5] || (d[5] = (m) => f(h.node)),
          "data-cy": `layerLabel-${h.node.id}`
        }, [
          C("i", {
            class: Pe(["fa-solid", h.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          C("span", UP, ae(u.value), 1)
        ], 10, jP)
      ]));
    };
  }
}), th = /* @__PURE__ */ de(BP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-tree/layer-tree-node.vue"]]);
class WP {
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
const ea = new WP();
var Pn = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Pn || {});
function qP(t, e) {
  var n, r;
  return t.children && !e.children || ((n = e.children) == null ? void 0 : n.length) === 0 ? 1 : e.children && !t.children || ((r = t.children) == null ? void 0 : r.length) === 0 ? -1 : 0;
}
function g_(t, e, n = 0) {
  const { name: r = "", type: i = Pn.WMS, children: s } = t, a = `${i}||${e}||${r}`.split("-").join("%2D"), o = dt();
  return {
    id: a,
    name: r,
    depth: n,
    children: s == null ? void 0 : s.sort(qP).map((l) => g_(l, e, n + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function HP(t) {
  const e = decodeURIComponent(t), [n, r, i] = e.split("||");
  return y_({
    id: e,
    url: aa.getProxyfiedUrl(r),
    remoteLayer: { name: i, type: n }
  });
}
function y_({
  id: t,
  url: e,
  remoteLayer: n
}) {
  const { name: r = "", type: i = Pn.WMS } = n;
  return {
    id: t,
    name: r,
    layers: r,
    url: e,
    type: i,
    imageType: Zv.PNG
  };
}
class Uc {
  constructor(e, n = 0, r = !1) {
    this.message = e, this.httpStatus = n, this.isCrossOriginRelated = r;
  }
}
let zP = 0;
function YP() {
  return zP++;
}
function XP(t, e, n) {
  return new Promise((r, i) => {
    const s = YP(), a = {
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
function ed(t, e, n) {
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
let Bc;
function KP() {
  return Bc || (Bc = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), Bc;
}
function ZP(t) {
  return XP("parseWmsCapabilities", KP(), {
    url: t
  });
}
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ri = "";
class JP {
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
      return ri;
    let r = n[0];
    return this.advance(this._charLength(r)), r;
  }
  consumeMatchFn(e) {
    let n = this.charIndex;
    for (; !this.isEnd && e(this.peek()); )
      this.advance();
    return this.charIndex > n ? this.string.slice(this.charsToBytes[n], this.charsToBytes[this.charIndex]) : ri;
  }
  consumeString(e) {
    if (this.consumeStringFast(e))
      return e;
    if (!this.multiByteMode)
      return ri;
    let { length: n } = e, r = this._charLength(e);
    return r !== n && e === this.peek(r) ? (this.advance(r), e) : ri;
  }
  consumeStringFast(e) {
    if (this.peek() === e[0]) {
      let { length: n } = e;
      if (n === 1)
        return this.advance(), e;
      if (this.peek(n) === e)
        return this.advance(n), e;
    }
    return ri;
  }
  consumeUntilMatch(e) {
    if (!e.global)
      throw new Error('`regex` must have a global flag ("g")');
    let n = this.charsToBytes[this.charIndex];
    e.lastIndex = n;
    let r = e.exec(this.string);
    if (r === null || r.index === n)
      return ri;
    let i = this.string.slice(n, r.index);
    return this.advance(this._charLength(i)), i;
  }
  consumeUntilString(e) {
    let { charIndex: n, charsToBytes: r, string: i } = this, s = r[n], a = i.indexOf(e, s);
    if (a <= 0)
      return ri;
    let o = i.slice(s, a);
    return this.advance(this._charLength(o)), o;
  }
  peek(e = 1) {
    if (this.charIndex >= this.charCount)
      return ri;
    if (e === 1)
      return this.chars[this.charIndex];
    let { charsToBytes: n, charIndex: r } = this;
    return this.string.slice(n[r], n[r + e]);
  }
  reset(e = 0) {
    this.charIndex = e >= 0 ? Math.min(this.charCount, e) : Math.max(0, this.charIndex + e);
  }
}
var QP = JP, ki = {};
const eD = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
ki.predefinedEntities = eD;
function v_(t) {
  if (__(t))
    return !0;
  let e = ac(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
ki.isNameChar = v_;
function __(t) {
  let e = ac(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
ki.isNameStartChar = __;
function tD(t) {
  return !b_(t);
}
ki.isNotXmlChar = tD;
function nD(t) {
  return t === "#" || v_(t);
}
ki.isReferenceChar = nD;
function rD(t) {
  let e = ac(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
ki.isWhitespace = rD;
function b_(t) {
  let e = ac(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
ki.isXmlChar = b_;
function ac(t) {
  return t.codePointAt(0) || -1;
}
class bs {
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
bs.TYPE_CDATA = "cdata";
bs.TYPE_COMMENT = "comment";
bs.TYPE_DOCUMENT = "document";
bs.TYPE_ELEMENT = "element";
bs.TYPE_PROCESSING_INSTRUCTION = "pi";
bs.TYPE_TEXT = "text";
var Es = bs;
const Wc = Es;
class iD extends Wc {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return Wc.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(Wc.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var td = iD;
const sD = Es, aD = td;
class oD extends aD {
  get type() {
    return sD.TYPE_CDATA;
  }
}
var E_ = oD;
const qc = Es;
class lD extends qc {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return qc.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(qc.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var S_ = lD;
const Hc = Es;
class nd extends Hc {
  constructor(e, n = /* @__PURE__ */ Object.create(null), r = []) {
    super(), this.name = e, this.attributes = n, this.children = r;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof nd; ) {
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
    return Hc.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(Hc.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var rd = nd;
const uD = rd, zc = Es;
class cD extends zc {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof uD) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return zc.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(zc.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var w_ = cD;
const Yc = Es;
class fD extends Yc {
  constructor(e, n = "") {
    super(), this.name = e, this.content = n;
  }
  get type() {
    return Yc.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(Yc.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var x_ = fD;
const hD = QP, qi = ki, dD = E_, pD = S_, mD = w_, gD = rd, sg = x_, ag = td, Xc = "";
class yD {
  constructor(e, n = {}) {
    for (this.document = new mD(), this.currentNode = this.document, this.options = n, this.scanner = new hD(_D(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
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
      if (r instanceof ag) {
        r.text += e;
        return;
      }
    }
    this.addNode(new ag(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, n = e.peek();
    if (n !== '"' && n !== "'")
      return !1;
    e.advance();
    let r, i = !1, s = Xc, a = n === '"' ? /[^"&<]+/y : /[^'&<]+/y;
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
          case Xc:
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
    return this.validateChars(n), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new dD(n)) : this.addText(n), !0;
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
    return this.validateChars(n), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new pD(n.trim())), !0;
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
    let s = Boolean(e.consumeStringFast("/>")), a = new gD(r, i);
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
    return qi.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(qi.isNameChar) : Xc;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, n = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let r = this.consumeName();
    if (r ? r.toLowerCase() === "xml" && (e.reset(n), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new sg(r)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new sg(r, i)), !0;
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
    let n = e.consumeMatchFn(qi.isReferenceChar);
    e.consume() !== ";" && this.error("Unterminated reference (a reference must end with `;`)");
    let r;
    if (n[0] === "#") {
      let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
      isNaN(i) && this.error("Invalid character reference"), r = String.fromCodePoint(i), qi.isXmlChar(r) || this.error("Character reference resolves to an invalid character");
    } else if (r = qi.predefinedEntities[n], r === void 0) {
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
    return Boolean(this.scanner.consumeMatchFn(qi.isWhitespace));
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
      qi.isNotXmlChar(r) && (this.scanner.reset(-([...e].length - n)), this.error("Invalid character")), n += 1;
  }
}
var vD = yD;
function _D(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const bD = vD, ED = E_, SD = S_, wD = w_, xD = rd, OD = Es, MD = x_, TD = td;
function Ii(t, e) {
  return new bD(t, e).document;
}
Ii.XmlCdata = ED;
Ii.XmlComment = SD;
Ii.XmlDocument = wD;
Ii.XmlElement = xD;
Ii.XmlNode = OD;
Ii.XmlProcessingInstruction = MD;
Ii.XmlText = TD;
var ND = Ii;
class LD extends Error {
  constructor(e) {
    super(e);
  }
}
function CD(t) {
  let e = null;
  try {
    e = ND(t);
  } catch (n) {
    throw new LD(n.message);
  }
  return e;
}
function Wr(t) {
  return t.children[0];
}
function Mu(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function Tu(t) {
  return t.name || "";
}
function Ht(t, e, n) {
  const r = Mu(e);
  function i(s, a) {
    return Mu(Tu(a)) === r && s.push(a), n && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
  }
  return t && Array.isArray(t.children) ? t.children.reduce(i, []) : [];
}
function Me(t, e, n) {
  return Ht(t, e, n)[0] || null;
}
function Pa(t) {
  return t && Array.isArray(t.children) ? [...t.children.filter((e) => e.constructor.name === "XmlElement")] : [];
}
function ze(t) {
  const e = t && Array.isArray(t.children) ? t.children.find((n) => n.type === "text") : null;
  return e ? e.text : "";
}
function gr(t, e) {
  return t && t.attributes[e] || "";
}
const og = ["utf-8", "utf-16", "iso-8859-1"], lg = "utf-8";
function AD(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function PD(t, e) {
  const n = e ? AD(e) : null, r = n ? [n, ...og] : og;
  for (const i of r)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${lg}.`
  ), new TextDecoder(lg).decode(t);
}
const ml = /* @__PURE__ */ new Map();
function DD(t) {
  if (ml.has(t))
    return ml.get(t);
  const e = fetch(t);
  return e.finally(() => ml.delete(t)), ml.set(t, e), e;
}
function id(t) {
  return DD(t).catch(
    () => fetch(t, { method: "HEAD", mode: "no-cors" }).catch((e) => {
      throw new Uc(
        `Fetching the document failed either due to network errors or unreachable host, error is: ${e.message}`,
        0,
        !1
      );
    }).then(() => {
      throw new Uc(
        "The document could not be fetched due to CORS limitations",
        0,
        !0
      );
    })
  ).then(async (e) => {
    if (!e.ok) {
      const i = await e.text();
      throw new Uc(
        `Received an error with code ${e.status}: ${i}`,
        e.status,
        !1
      );
    }
    const n = await e.arrayBuffer(), r = e.headers.get("Content-Type");
    return PD(n, r);
  }).then((e) => CD(e));
}
function sd(t, e) {
  const n = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (n) {
    const o = n[1], l = sd(decodeURIComponent(o), e);
    return t.replace(o, encodeURIComponent(l));
  }
  const r = new URL(t), i = Object.keys(e), s = i.map((o) => o.toLowerCase()), a = [];
  for (const o of r.searchParams.keys())
    s.indexOf(o.toLowerCase()) > -1 && a.push(o);
  return a.map((o) => r.searchParams.delete(o)), i.forEach(
    (o) => r.searchParams.set(o, e[o] === !0 ? "" : e[o])
  ), r.toString();
}
let kD = 1e3 * 60 * 60;
function ID() {
  return kD;
}
const Li = "caches" in self ? caches.open("ogc-client") : null;
async function RD(t, ...e) {
  if (!Li)
    return;
  const n = "https://cache/" + e.join("/");
  await (await Li).put(
    n,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + ID()).toString(10)
      }
    })
  );
}
async function $D(...t) {
  if (!Li)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await Li).match(e).then((r) => !!r && parseInt(r.headers.get("x-expiry")) > Date.now());
}
async function FD(...t) {
  if (!Li)
    return null;
  const e = "https://cache/" + t.join("/"), r = await (await Li).match(e);
  return r ? r.clone().json() : null;
}
const gl = /* @__PURE__ */ new Map();
async function VD(t, ...e) {
  if (await GD(), await $D(...e))
    return FD(...e);
  const n = e.join("#");
  if (gl.has(n))
    return gl.get(n);
  const r = t();
  r instanceof Promise && (r.then(() => gl.delete(n)), gl.set(n, r));
  const i = await r;
  return await RD(i, ...e), i;
}
async function GD() {
  if (!Li)
    return;
  const t = await Li, e = await t.keys();
  for (let n of e) {
    const r = await t.match(n);
    parseInt(r.headers.get("x-expiry")) <= Date.now() && await t.delete(n);
  }
}
function jD(t, e, n, r, i, s, a, o, l, u) {
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
  return sd(t, h);
}
class UD {
  constructor(e) {
    const n = sd(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = VD(
      () => ZP(n),
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
const BD = [
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
function WD(t) {
  return BD.indexOf(nh(t)) > -1;
}
function nh(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function O_(t) {
  return Wr(t).attributes.version;
}
function qD(t) {
  const e = O_(t), n = Me(
    Wr(t),
    "Capability"
  );
  return Ht(n, "Layer").map(
    (r) => M_(r, e)
  );
}
function HD(t) {
  const e = Me(Wr(t), "Service"), n = Ht(
    Me(e, "KeywordList"),
    "Keyword"
  ).map(ze).filter((r, i, s) => s.indexOf(r) === i);
  return {
    title: ze(Me(e, "Title")),
    name: ze(Me(e, "Name")),
    abstract: ze(Me(e, "Abstract")),
    fees: ze(Me(e, "Fees")),
    constraints: ze(Me(e, "AccessConstraints")),
    keywords: n
  };
}
function M_(t, e, n = [], r = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = Ht(t, s).map(ze), o = a.length > 0 ? a : n, l = Ht(t, "Style").map(
    zD
  ), u = l.length > 0 ? l : r;
  function f(p) {
    const m = gr(p, s);
    return (WD(m) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((y) => gr(p, y));
  }
  const c = Me(t, "Attribution"), h = c !== null ? YD(c) : i, d = Ht(t, "Layer").map(
    (p) => M_(p, e, o, u, h)
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
        [gr(m, s)]: f(m)
      }),
      {}
    ),
    ...d.length && { children: d }
  };
}
function zD(t) {
  const e = gr(
    Me(Me(t, "LegendURL"), "OnlineResource"),
    "xlink:href"
  );
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    ...e && { legendUrl: e }
  };
}
function YD(t) {
  const e = gr(
    Me(
      Me(t, "LogoURL"),
      "OnlineResource"
    ),
    "xlink:href"
  ), n = gr(
    Me(t, "OnlineResource"),
    "xlink:href"
  ), r = ze(Me(t, "Title"));
  return {
    ...r && { title: r },
    ...n && { url: n },
    ...e && { logoUrl: e }
  };
}
function oc(t) {
  return Wr(t).attributes.version;
}
function T_(t) {
  const e = oc(t);
  let n;
  if (e.startsWith("1.0")) {
    const r = Me(
      Me(
        Me(Wr(t), "Capability"),
        "Request"
      ),
      "GetFeature"
    );
    n = Pa(
      Me(r, "ResultFormat")
    ).map(Tu);
  } else {
    const r = Me(
      Wr(t),
      "OperationsMetadata"
    ), i = Ht(r, "Operation").find(
      (a) => gr(a, "name") === "GetFeature"
    ), s = Ht(i, "Parameter").find(
      (a) => gr(a, "name") === "outputFormat"
    );
    n = Ht(s, "Value", !0).map(
      ze
    );
  }
  return n;
}
function XD(t) {
  const e = oc(t), n = e.startsWith("1.0") ? "Service" : "ServiceIdentification", r = e.startsWith("1.0") ? "Name" : "ServiceType", i = Me(Wr(t), n);
  let s;
  return e.startsWith("1.0") ? s = ze(Me(i, "Keywords")).split(",").map((a) => a.trim()) : s = Ht(
    Me(i, "Keywords"),
    "Keyword"
  ).map(ze), {
    title: ze(Me(i, "Title")),
    name: ze(Me(i, r)),
    abstract: ze(Me(i, "Abstract")),
    fees: ze(Me(i, "Fees")),
    constraints: ze(Me(i, "AccessConstraints")),
    keywords: s,
    outputFormats: T_(t)
  };
}
function KD(t) {
  const e = oc(t), n = T_(t), r = Me(
    Wr(t),
    "FeatureTypeList"
  );
  return Ht(r, "FeatureType").map(
    (i) => ZD(i, e, n)
  );
}
function ZD(t, e, n) {
  const r = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${r}`;
  function s() {
    const u = Me(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => gr(u, f)).map(parseFloat);
  }
  function a() {
    const u = Me(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => Me(u, f)).map((f) => ze(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : Ht(t, `Other${r}`).map(ze).map(nh), l = e.startsWith("1.0") ? [] : Ht(
    Me(t, "OutputFormats"),
    "Format"
  ).map(ze);
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    defaultCrs: nh(
      ze(Me(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : n,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function JD(t, e, n) {
  const r = Wr(t);
  let i;
  if (n.startsWith("2.0"))
    i = Ht(r, "member").map(
      (u) => Pa(u)[0]
    );
  else {
    const u = Me(r, "featureMembers");
    i = u ? Pa(u) : Ht(r, "featureMember").map(
      (f) => Pa(f)[0]
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
    return Pa(u).filter((f) => a(Mu(Tu(f)))).reduce((f, c) => {
      const h = Mu(Tu(c));
      return {
        ...f,
        [h]: o(h, ze(c))
      };
    }, {});
  }
  return i.map((u) => ({
    id: gr(u, s),
    properties: l(u)
  }));
}
function QD(t) {
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
ed(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => id(t).then((e) => ({
    info: HD(e),
    layers: qD(e),
    version: O_(e)
  }))
);
ed(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => id(t).then((e) => ({
    info: XD(e),
    featureTypes: KD(e),
    version: oc(e)
  }))
);
ed(
  "queryWfsFeatureTypeDetails",
  self,
  ({ url: t, serviceVersion: e, featureTypeFull: n }) => {
    const r = jD(
      t,
      e,
      n.name,
      void 0,
      void 0,
      Object.keys(n.properties)
    );
    return id(r).then((i) => ({
      props: QD(
        JD(i, n, e)
      )
    }));
  }
);
const ek = () => [
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
class tk {
  constructor(e) {
    Ke(this, "capabilitiesPromise");
    Ke(this, "serviceInfo");
    Ke(this, "layers");
    const n = new xb();
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
        type: Pn.WMTS,
        children: e.map(
          (n) => ({
            type: Pn.WMTS,
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
      type: Pn.WMTS,
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
class nk {
  async getRemoteEndpoint(e) {
    let n;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      n = await this.getWmtsEndpoint(e).isReady();
    }) || n;
  }
  getWmsEndpoint(e) {
    return new UD(aa.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new tk(aa.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(ek()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Pn.WMS) === 0 || e.indexOf(Pn.WMTS) === 0);
  }
}
const mo = new nk(), rk = { class: "relative text-center" }, ik = ["placeholder", "value"], sk = {
  key: 0,
  class: "text-center"
}, ak = { class: "lux-label" }, ok = {
  key: 1,
  class: "text-center"
}, lk = { class: "lux-label" }, uk = {
  key: 2,
  class: "text-center"
}, ck = /* @__PURE__ */ C("div", { class: "fa fa-refresh fa-spin" }, null, -1), fk = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, hk = /* @__PURE__ */ he({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Xe(), n = dt(), r = An(), i = rt([]), s = rt(), { remoteLayersOpen: a } = We(_t()), { setRemoteLayersOpen: o } = _t();
    let l = !1, u, f, c;
    vn(h);
    function h() {
      s.value = s.value ? ea.updateLayers(
        s.value,
        n.layers
      ) : void 0;
    }
    mo.fetchRemoteWmsEndpoint().then((b) => {
      i.value = b.map(({ url: w, label: N }) => ({
        label: N,
        value: w
      }));
    });
    async function d(b) {
      l = !0, c = await mo.getRemoteEndpoint(b).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = b, l = !1;
    }
    async function p() {
      const b = c, w = b == null ? void 0 : b.getLayers();
      if (w && w[0]) {
        const N = g_(
          w[0],
          f
        );
        s.value = ea.updateLayers(N, n.layers);
      }
    }
    async function m(b) {
      f = u = b, await d(f), p();
    }
    function v(b) {
      u = b.target.value;
    }
    async function y() {
      await d(u), p();
    }
    function g(b) {
      s.value = ea.toggleNode(
        b.id,
        s.value,
        "expanded"
      );
    }
    function E(b) {
      const { id: w, name: N } = b, O = c;
      if (b.checked === !0)
        n.removeLayers(w);
      else {
        const R = O == null ? void 0 : O.getLayerByName(N);
        if (R) {
          const D = r.initLayer(
            y_({
              id: w,
              url: aa.getProxyfiedUrl(f),
              remoteLayer: R
            })
          );
          n.addLayers(D);
        }
      }
    }
    return (b, w) => M(a) ? (A(), Fe(m_, {
      key: 0,
      title: M(e)("Add external data", { ns: "client" }),
      onClose: w[0] || (w[0] = (N) => M(o)(!1))
    }, {
      content: bi(() => {
        var N, O;
        return [
          C("div", rk, [
            ee(Hv, {
              class: "lux-remote-services-dropdown",
              options: i.value,
              placeholder: M(e)("Predefined wms", { ns: "client" }),
              onChange: m
            }, null, 8, ["options", "placeholder"]),
            C("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: M(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: M(f) || "",
              onChange: v
            }, null, 40, ik),
            C("button", {
              type: "button",
              class: "lux-btn",
              onClick: y
            }, ae(M(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !M(l) && M(c) ? (A(), V("div", sk, [
            C("span", ak, ae(M(e)("Description du service :", {
              ns: "client"
            })), 1),
            io(" " + ae((N = M(c).getServiceInfo()) == null ? void 0 : N.abstract), 1)
          ])) : F("v-if", !0),
          !M(l) && M(c) ? (A(), V("div", ok, [
            C("span", lk, ae(M(e)("Access constraints :", {
              ns: "client"
            })), 1),
            io(" " + ae((O = M(c).getServiceInfo()) == null ? void 0 : O.constraints), 1)
          ])) : F("v-if", !0),
          M(l) ? (A(), V("div", uk, [
            ck,
            C("span", null, ae(M(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : F("v-if", !0),
          M(l) ? F("v-if", !0) : (A(), V("div", fk, [
            s.value ? (A(), Fe(th, {
              key: 0,
              class: "block p-[10px] mb-[11px]",
              node: s.value,
              onToggleParent: g,
              onToggleLayer: E
            }, null, 8, ["node"])) : F("v-if", !0)
          ]))
        ];
      }),
      _: 1
    }, 8, ["title"])) : F("v-if", !0);
  }
}), dk = /* @__PURE__ */ de(hk, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/remote-layers/remote-layers.vue"]]);
function pk(t, e = "fr-FR") {
  const n = new Date(t);
  return new Intl.DateTimeFormat(e).format(n);
}
const mk = { class: "font-bold" }, gk = { class: "col-span-2" }, yk = /* @__PURE__ */ he({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), V(Ue, null, [
      C("span", mk, ae(e.label), 1),
      C("span", gk, ae(e.value), 1)
    ], 64));
  }
}), Sa = /* @__PURE__ */ de(yk, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-metadata/layer-metadata-item.vue"]]);
function vk(t) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[t.toLowerCase()];
}
function _k(t) {
  return new DOMParser().parseFromString(t, "text/html").body;
}
function bk(t) {
  const e = [];
  function n(r) {
    const i = r.split("|");
    i[3] === "WWW:LINK-1.0-http--link" && e.indexOf(i[2]) === -1 && e.push(i[2]);
  }
  return Array.isArray(t) ? t.forEach(n, t) : n(t), e;
}
function Ek(t) {
  const n = (Array.isArray(t) ? t : [t]).filter((r) => r.split("|")[1] === "metadata");
  return {
    organisaton: n[0].split("|")[2],
    name: n[0].split("|")[5],
    unknown: n[0].split("|")[6],
    address: n[0].split("|")[7],
    email: n[0].split("|")[4]
  };
}
class N_ {
}
class Sk extends N_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMS);
    const i = mo.getWmsEndpoint(n);
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
const wk = new Sk();
class xk extends N_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMTS);
    const i = mo.getWmtsEndpoint(n);
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
const Ok = new xk();
class Mk {
  async getMetadata(e, n, r) {
    if (e === Pn.WMS)
      return wk.getMetadata(e, n, r);
    if (e === Pn.WMTS)
      return Ok.getMetadata(e, n, r);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const Tk = new Mk();
class Nk {
  constructor() {
    Ke(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    Ke(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    Ke(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, n) {
    const r = ls(), i = r.findBgLayerById(+e) || r.findById(+e) || r.find3dLayerById(+e);
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
      return Tk.getMetadata(
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
        link: bk(s.link),
        revisionDate: s.revisionDate,
        keyword: s.keyword,
        responsibleParty: s.responsibleParty ? Ek(s.responsibleParty) : void 0,
        metadataLink: `${this.geonetworkBaseUrl}/${vk(
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
        return l ? _k(l) : void 0;
      }).catch(() => {
      });
    }
  }
}
const ug = new Nk(), Lk = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, Ck = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, Ak = { class: "font-bold" }, Pk = { class: "col-span-2" }, Dk = ["title"], kk = ["title"], Ik = {
  key: 4,
  class: "col-span-3"
}, Rk = { class: "font-bold" }, $k = { class: "col-span-2" }, Fk = ["href"], Vk = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, Gk = { class: "font-bold" }, jk = { class: "col-span-2" }, Uk = { key: 0 }, Bk = { key: 1 }, Wk = { key: 2 }, qk = { key: 3 }, Hk = { key: 4 }, zk = ["href"], Yk = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, Xk = { class: "font-bold" }, Kk = { class: "col-span-2" }, Zk = ["href"], Jk = {
  key: 9,
  class: "col-span-3"
}, Qk = { key: 10 }, eI = { class: "text-xl" }, tI = {
  key: 11,
  class: "col-span-3"
}, Kc = 220, nI = /* @__PURE__ */ he({
  __name: "layer-metadata",
  setup(t) {
    const e = Qh(), { metadataId: n } = We(e), { t: r, i18next: i } = Xe(), s = _e(), a = _e(!0);
    tt(n, async (c) => {
      var h, d;
      s.value = c ? await ug.getLayerMetadata(c, i.language) : void 0, a.value = (((d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.length) || 0) < Kc;
    }), _n(() => {
      i.on("languageChanged", async () => {
        n.value && (s.value = await ug.getLayerMetadata(
          n.value,
          i.language
        ));
      });
    });
    const o = fe(
      () => {
        var c, h, d;
        return a.value ? (c = s.value) == null ? void 0 : c.description : (d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.slice(0, Kc);
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
      const d = Th("dompurify-html");
      return s.value ? (A(), Fe(m_, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: M(r)(`${s.value.title}`, { ns: "client" }),
        onClose: f
      }, {
        content: bi(() => {
          var p, m, v, y, g, E, b, w, N, O, R, D, L, P, I;
          return [
            C("div", Lk, [
              s.value.name ? (A(), Fe(Sa, {
                key: 0,
                label: M(r)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.serviceDescription ? (A(), Fe(Sa, {
                key: 1,
                label: M(r)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.description ? (A(), V("div", Ck, [
                C("span", Ak, ae(M(r)("Description")), 1),
                C("span", Pk, [
                  eu(C("span", null, null, 512), [
                    [d, o.value]
                  ]),
                  a.value ? F("v-if", !0) : (A(), V("button", {
                    key: 0,
                    title: M(r)("Display full description", {
                      ns: "client"
                    }),
                    onClick: l,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, Dk)),
                  a.value && (((p = o.value) == null ? void 0 : p.length) || 0) > Kc ? (A(), V("button", {
                    key: 1,
                    title: M(r)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, kk)) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.legalConstraints ? (A(), Fe(Sa, {
                key: 3,
                label: M(r)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              ((m = s.value.link) == null ? void 0 : m.length) !== 0 ? (A(), V("div", Ik, [
                (A(!0), V(Ue, null, Dn(s.value.link, (J) => (A(), V("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: J
                }, [
                  C("span", Rk, ae(M(r)("Url vers la resource")), 1),
                  C("span", $k, [
                    C("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: J
                    }, ae(J), 9, Fk)
                  ])
                ]))), 128))
              ])) : F("v-if", !0),
              s.value.revisionDate ? (A(), Fe(Sa, {
                key: 5,
                label: M(r)("Revision date"),
                value: M(pk)(s.value.revisionDate, M(i).language)
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.keyword ? (A(), Fe(Sa, {
                key: 6,
                label: M(r)("Keywords"),
                value: (v = s.value.keyword) == null ? void 0 : v.join(",")
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.responsibleParty ? (A(), V("div", Vk, [
                C("div", Gk, ae(M(r)("Contact")), 1),
                C("div", jk, [
                  (y = s.value.responsibleParty) != null && y.organisaton ? (A(), V("p", Uk, ae((g = s.value.responsibleParty) == null ? void 0 : g.organisaton), 1)) : F("v-if", !0),
                  (E = s.value.responsibleParty) != null && E.name ? (A(), V("p", Bk, ae((b = s.value.responsibleParty) == null ? void 0 : b.name), 1)) : F("v-if", !0),
                  (w = s.value.responsibleParty) != null && w.unknown ? (A(), V("p", Wk, ae((N = s.value.responsibleParty) == null ? void 0 : N.unknown), 1)) : F("v-if", !0),
                  (O = s.value.responsibleParty) != null && O.address ? (A(), V("p", qk, ae((R = s.value.responsibleParty) == null ? void 0 : R.address), 1)) : F("v-if", !0),
                  (D = s.value.responsibleParty) != null && D.email ? (A(), V("p", Hk, [
                    C("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((L = s.value.responsibleParty) == null ? void 0 : L.email)
                    }, ae((P = s.value.responsibleParty) == null ? void 0 : P.email), 9, zk)
                  ])) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.metadataLink ? (A(), V("div", Yk, [
                C("span", Xk, ae(M(r)("Link to the metadata")), 1),
                C("span", Kk, [
                  C("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, ae(M(r)("link")), 9, Zk)
                ])
              ])) : F("v-if", !0),
              s.value.isError ? (A(), V("div", Jk, ae(M(r)("The metadata is right now not available")), 1)) : F("v-if", !0),
              s.value.legendHtml ? (A(), V("div", Qk, [
                C("h4", eI, ae(M(r)("Legend")), 1),
                eu(C("span", null, null, 512), [
                  [d, (I = s.value.legendHtml) == null ? void 0 : I.innerHTML]
                ])
              ])) : F("v-if", !0),
              s.value.hasLegend ? F("v-if", !0) : (A(), V("div", tI, ae(M(r)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : F("v-if", !0);
    };
  }
}), rI = /* @__PURE__ */ de(nI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-metadata/layer-metadata.vue"]]), iI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class sI {
  bootstrap() {
    this.restore();
    let e;
    e = vn(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = _t(), { lang: n } = We(e);
    tt(
      n,
      (r, i) => {
        i !== r && (Ne.setValue(xi, r), document.documentElement.setAttribute("lang", r));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(xi);
    if (e) {
      const { setLang: n } = _t(), { i18next: r } = Xe();
      r.changeLanguage(e), n(e);
    }
  }
}
const aI = new sI(), oI = /* @__PURE__ */ he({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: n } = Xe(), { setLang: r } = _t(), { lang: i } = We(_t()), s = fe(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: n(l),
        value: l,
        ariaLabel: n("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = n("Changer de langue");
    aI.bootstrap();
    function o(l) {
      e.changeLanguage(l), r(l);
    }
    return (l, u) => (A(), V("div", null, [
      ee(Hv, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: s.value,
        placeholder: M(a),
        modelValue: M(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => Ye(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), lI = /* @__PURE__ */ de(oI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/nav-bars/language-selector.vue"]]);
class uI {
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
const cI = new uI(), fI = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, hI = /* @__PURE__ */ C("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ C("img", { src: iI })
], -1), dI = /* @__PURE__ */ C("div", { class: "grow text-center" }, "search", -1), pI = { class: "h-full flex" }, mI = { class: "hidden lg:inline-block" }, gI = { class: "border-l-[1px] border-stone-300 h-full" }, yI = /* @__PURE__ */ he({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Xe(), n = _t(), { layersOpen: r, myLayersTabOpen: i, themeGridOpen: s } = We(n), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = n, u = Zt(), { theme: f } = We(u);
    tt(
      f,
      (h) => {
        h && cI.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      r.value ? r.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var p, m;
      return A(), V("header", fI, [
        hI,
        dI,
        C("div", null, [
          C("ul", pI, [
            C("li", null, [
              C("button", {
                class: Pe(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(p = M(f)) == null ? void 0 : p.name}`]),
                onClick: c
              }, [
                C("span", mI, ae(M(e)(`${(m = M(f)) == null ? void 0 : m.name}`)), 1)
              ], 2)
            ]),
            C("li", gI, [
              ee(lI, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), vI = /* @__PURE__ */ de(yI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/header/header-bar.vue"]]), _I = { class: "block text-[13px] sm:text-base uppercase" }, bI = /* @__PURE__ */ he({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), V("button", {
      class: Pe(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      C("span", {
        class: Pe(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      C("span", _I, ae(e.label), 1)
    ], 2));
  }
}), Ar = /* @__PURE__ */ de(bI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/button-icon.vue"]]), EI = ["href"], SI = /* @__PURE__ */ he({
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
    }, ae(n.$props.label), 9, EI));
  }
}), ii = /* @__PURE__ */ de(SI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/button-link.vue"]]), wI = { class: "block" }, xI = /* @__PURE__ */ he({
  __name: "button-text",
  props: {
    label: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), V("button", {
      class: Pe(["h-16 w-16 text-white bg-tertiary hover:bg-primary", e.active ? "bg-primary" : "bg-tertiary"])
    }, [
      C("span", wI, ae(e.label), 1)
    ], 2));
  }
}), wa = /* @__PURE__ */ de(xI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/button-text.vue"]]), OI = { class: "absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400" }, MI = {
  key: 0,
  class: "absolute bottom-full top-auto z-10 pl-[130px] pb-16 w-[326px]"
}, TI = { class: "flex flex-row justify-center text-white bg-tertiary hover:bg-primary py-2 box-content border-y border-x border-gray-400" }, NI = /* @__PURE__ */ C("input", { type: "checkbox" }, null, -1), LI = /* @__PURE__ */ he({
  __name: "toolbar-draw",
  setup(t) {
    const { t: e } = Xe(), n = _e(!1);
    return (r, i) => (A(), V("div", null, [
      C("ul", OI, [
        C("li", null, [
          ee(wa, {
            label: M(e)("Draw Point", { ns: "client" })
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(wa, {
            label: M(e)("Label", { ns: "client" })
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(wa, {
            label: M(e)("Line", { ns: "client" }),
            onClick: i[0] || (i[0] = () => n.value = !n.value)
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(wa, {
            label: M(e)("Polygon", { ns: "client" })
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(wa, {
            label: M(e)("Circle", { ns: "client" })
          }, null, 8, ["label"])
        ])
      ]),
      n.value ? (A(), V("ul", MI, [
        C("li", TI, [
          C("label", null, [
            NI,
            io(" " + ae(M(e)("Suivre la route", { ns: "client" })), 1)
          ])
        ])
      ])) : F("v-if", !0)
    ]));
  }
}), CI = /* @__PURE__ */ de(LI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/toolbar-draw.vue"]]), AI = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, PI = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, DI = { class: "relative flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, kI = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, II = /* @__PURE__ */ he({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: n } = Xe(), { setLayersOpen: r, setDrawToolbarOpen: i } = _t(), { layersOpen: s, drawToolbarOpen: a } = We(_t());
    return (o, l) => (A(), V("footer", AI, [
      F(" left buttons "),
      C("ul", PI, [
        C("li", null, [
          ee(Ar, {
            label: M(e)("Layers", { ns: "client" }),
            icon: "layers",
            active: M(s),
            onClick: l[0] || (l[0] = () => M(r)(!M(s)))
          }, null, 8, ["label", "active"])
        ]),
        F(`TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      `),
        C("li", null, [
          ee(Ar, {
            class: "text-gray-300",
            label: M(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(Ar, {
            class: "text-gray-300",
            label: M(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(Ar, {
            class: "text-gray-300",
            label: M(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        C("li", null, [
          ee(Ar, {
            class: "text-gray-300",
            label: M(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      F(" center buttons "),
      C("div", DI, [
        M(a) ? (A(), Fe(CI, { key: 0 })) : F("v-if", !0),
        ee(Ar, {
          label: M(e)("Dessin", { ns: "client" }),
          icon: "draw",
          onClick: l[1] || (l[1] = () => M(i)(!M(a)))
        }, null, 8, ["label"]),
        ee(Ar, {
          class: "text-gray-300 hidden sm:block",
          label: M(e)("Mesurer", { ns: "client" }),
          icon: "measure"
        }, null, 8, ["label"]),
        ee(Ar, {
          class: "text-gray-300 hidden sm:block",
          label: M(e)("Imprimer", { ns: "client" }),
          icon: "print"
        }, null, 8, ["label"]),
        ee(Ar, {
          class: "text-gray-300",
          label: M(e)("Partager", { ns: "client" }),
          icon: "share"
        }, null, 8, ["label"])
      ]),
      F(" right buttons "),
      C("div", kI, [
        ee(ii, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("What's new", { ns: "client" }),
          link: `https://geoportail.lu/${M(n).language}/questions/whats-new/`
        }, null, 8, ["label", "link"]),
        F("TODO get geonetworkBaseUrl from config"),
        ee(ii, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Geocatalogue", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        F("TODO handle feedback links (for different portals?)"),
        ee(ii, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Feedback", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        ee(ii, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("A Propos", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/propos/`
        }, null, 8, ["label", "link"]),
        ee(ii, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Aide", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/documentation/`
        }, null, 8, ["label", "link"]),
        ee(ii, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Contact", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/propos/contactez-nous/`
        }, null, 8, ["label", "link"]),
        ee(ii, {
          class: "text-gray-500",
          label: M(e)("Legalites", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/propos/mentions-legales/`
        }, null, 8, ["label", "link"]),
        ee(ii, {
          class: "text-gray-500",
          label: M(e)("ACT", { ns: "client" }),
          link: "http://www.act.public.lu/"
        }, null, 8, ["label", "link"])
      ])
    ]));
  }
}), RI = /* @__PURE__ */ de(II, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/footer-bar.vue"]]), $I = { class: "flex flex-row flex-wrap pl-2.5" }, FI = ["onClick"], VI = { class: "text-2xl absolute top-5" }, GI = /* @__PURE__ */ he({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const { t: e } = Xe(), n = t;
    return (r, i) => (A(), V("div", $I, [
      (A(!0), V(Ue, null, Dn(n.themes, (s) => (A(), V("button", {
        class: Pe(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => r.$emit("setTheme", s.name)
      }, [
        C("div", VI, ae(M(e)(`${s.name}`)), 1),
        C("div", {
          class: Pe(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, FI))), 128))
    ]));
  }
}), jI = /* @__PURE__ */ de(GI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/theme-selector/theme-grid.vue"]]), UI = ["aria-expanded"], BI = { class: "py-0.5" }, WI = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, qI = { class: "py-[3px]" }, HI = { class: "flex flex-row flex-wrap ml-1 w-12" }, zI = /* @__PURE__ */ he({
  __name: "theme-selector-button",
  props: {
    themes: { type: Array, required: !0 },
    currentTheme: { type: Object, required: !1 },
    isOpen: { type: Boolean, required: !1 }
  },
  setup(t) {
    const { t: e } = Xe(), n = t, r = fe(() => {
      var i;
      return ((i = n.themes) == null ? void 0 : i.slice(0, 8)) || [];
    });
    return (i, s) => {
      var a;
      return A(), V("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": n.isOpen
      }, [
        C("span", BI, ae(M(e)("Theme")) + ": " + ae(M(e)(`${(a = n.currentTheme) == null ? void 0 : a.name}`)), 1),
        C("span", WI, [
          C("span", qI, ae(M(e)("Changer")), 1),
          C("span", HI, [
            (A(!0), V(Ue, null, Dn(r.value, (o) => (A(), V("div", {
              class: Pe(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, UI);
    };
  }
}), YI = /* @__PURE__ */ de(zI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/theme-selector/theme-selector-button.vue"]]), XI = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, KI = /* @__PURE__ */ he({
  __name: "theme-selector",
  setup(t) {
    const e = _t(), { setThemeGridOpen: n } = e, { themeGridOpen: r } = We(e), i = Zt(), s = ls(), { theme: a, themes: o } = We(i), l = fe(
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
    return (c, h) => (A(), V(Ue, null, [
      ee(YI, {
        onClick: u,
        themes: l.value,
        currentTheme: M(a),
        isOpen: M(r)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      M(r) ? (A(), V("div", XI, [
        ee(jI, {
          onSetTheme: f,
          themes: l.value
        }, null, 8, ["themes"])
      ])) : F("v-if", !0)
    ], 64));
  }
}), ZI = /* @__PURE__ */ de(KI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/theme-selector/theme-selector.vue"]]);
function rh(t, e = 0) {
  const { name: n, id: r, children: i, metadata: s } = t;
  return {
    name: n,
    id: r,
    depth: e,
    children: i == null ? void 0 : i.map((a) => rh(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const JI = {
  key: 0,
  class: "mb-7"
}, QI = /* @__PURE__ */ he({
  __name: "catalog-tree",
  setup(t) {
    const e = dt(), n = Zt(), r = An(), i = rt(), s = rt(), a = fe(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = We(n);
    vn(l);
    function l() {
      var c;
      if (n.theme && e.layers) {
        const h = i.value && i.value.id === ((c = n.theme) == null ? void 0 : c.id) ? i.value : rh(n.theme);
        i.value = ea.updateLayers(
          h,
          e.layers
        );
      }
    }
    vn(() => {
      if (o.value) {
        const c = s.value ? s.value : rh(o.value);
        s.value = ea.updateLayers(
          c,
          e.layers3d
        );
      }
    });
    function u(c, h) {
      const d = h ? s : i;
      d.value = ea.toggleNode(
        c.id,
        d.value,
        "expanded"
      );
    }
    function f(c, h) {
      r.toggleLayer(+c.id, !c.checked, h);
    }
    return (c, h) => (A(), V("div", null, [
      F(" 3D layers catalog, only displayed when 3D is active "),
      s.value && M(e).is3dActive ? (A(), V("div", JI, [
        (A(), Fe(th, {
          node: s.value,
          key: s.value.id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : F("v-if", !0),
      F(" Main catalog, displays by default and 3D terrain active "),
      i.value && a.value ? (A(), Fe(th, {
        node: i.value,
        key: i.value.id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : F("v-if", !0)
    ]));
  }
}), e3 = /* @__PURE__ */ de(QI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/catalog/catalog-tree.vue"]]), t3 = /* @__PURE__ */ he({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = We(_t());
    return (n, r) => (A(), V(Ue, null, [
      ee(ZI),
      M(e) === !1 ? (A(), Fe(e3, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : F("v-if", !0)
    ], 64));
  }
}), n3 = /* @__PURE__ */ de(t3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function cg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? cg(Object(n), !0).forEach(function(r) {
      r3(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Bl(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bl = function(e) {
    return typeof e;
  } : Bl = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bl(t);
}
function r3(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function qr() {
  return qr = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, qr.apply(this, arguments);
}
function i3(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function s3(t, e) {
  if (t == null)
    return {};
  var n = i3(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
var a3 = "1.15.2";
function jr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Zr = jr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Vo = jr(/Edge/i), fg = jr(/firefox/i), Xa = jr(/safari/i) && !jr(/chrome/i) && !jr(/android/i), L_ = jr(/iP(ad|od|hone)/i), C_ = jr(/chrome/i) && jr(/android/i), A_ = {
  capture: !1,
  passive: !1
};
function je(t, e, n) {
  t.addEventListener(e, n, !Zr && A_);
}
function Ie(t, e, n) {
  t.removeEventListener(e, n, !Zr && A_);
}
function Nu(t, e) {
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
function o3(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Wn(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Nu(t, e) : Nu(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = o3(t));
  }
  return null;
}
var hg = /\s+/g;
function fn(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(hg, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(hg, " ");
    }
}
function ve(t, e, n) {
  var r = t && t.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function ta(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var r = ve(t, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function P_(t, e, n) {
  if (t) {
    var r = t.getElementsByTagName(e), i = 0, s = r.length;
    if (n)
      for (; i < s; i++)
        n(r[i], i);
    return r;
  }
  return [];
}
function yr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function St(t, e, n, r, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var s, a, o, l, u, f, c;
    if (t !== window && t.parentNode && t !== yr() ? (s = t.getBoundingClientRect(), a = s.top, o = s.left, l = s.bottom, u = s.right, f = s.height, c = s.width) : (a = 0, o = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, c = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !Zr))
      do
        if (i && i.getBoundingClientRect && (ve(i, "transform") !== "none" || n && ve(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          a -= h.top + parseInt(ve(i, "border-top-width")), o -= h.left + parseInt(ve(i, "border-left-width")), l = a + s.height, u = o + s.width;
          break;
        }
      while (i = i.parentNode);
    if (r && t !== window) {
      var d = ta(i || t), p = d && d.a, m = d && d.d;
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
function dg(t, e, n) {
  for (var r = yi(t, !0), i = St(t)[e]; r; ) {
    var s = St(r)[n], a = void 0;
    if (n === "top" || n === "left" ? a = i >= s : a = i <= s, !a)
      return r;
    if (r === yr())
      break;
    r = yi(r, !1);
  }
  return !1;
}
function oa(t, e, n, r) {
  for (var i = 0, s = 0, a = t.children; s < a.length; ) {
    if (a[s].style.display !== "none" && a[s] !== ye.ghost && (r || a[s] !== ye.dragged) && Wn(a[s], n.draggable, t, !1)) {
      if (i === e)
        return a[s];
      i++;
    }
    s++;
  }
  return null;
}
function ad(t, e) {
  for (var n = t.lastElementChild; n && (n === ye.ghost || ve(n, "display") === "none" || e && !Nu(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function On(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ye.clone && (!e || Nu(t, e)) && n++;
  return n;
}
function pg(t) {
  var e = 0, n = 0, r = yr();
  if (t)
    do {
      var i = ta(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, n += t.scrollTop * a;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function l3(t, e) {
  for (var n in t)
    if (!!t.hasOwnProperty(n)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === t[n][r])
          return Number(n);
    }
  return -1;
}
function yi(t, e) {
  if (!t || !t.getBoundingClientRect)
    return yr();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = ve(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return yr();
        if (r || e)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return yr();
}
function u3(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Zc(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Ka;
function D_(t, e) {
  return function() {
    if (!Ka) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), Ka = setTimeout(function() {
        Ka = void 0;
      }, e);
    }
  };
}
function c3() {
  clearTimeout(Ka), Ka = void 0;
}
function k_(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function I_(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function R_(t, e, n) {
  var r = {};
  return Array.from(t.children).forEach(function(i) {
    var s, a, o, l;
    if (!(!Wn(i, e.draggable, t, !1) || i.animated || i === n)) {
      var u = St(i);
      r.left = Math.min((s = r.left) !== null && s !== void 0 ? s : 1 / 0, u.left), r.top = Math.min((a = r.top) !== null && a !== void 0 ? a : 1 / 0, u.top), r.right = Math.max((o = r.right) !== null && o !== void 0 ? o : -1 / 0, u.right), r.bottom = Math.max((l = r.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var mn = "Sortable" + new Date().getTime();
function f3() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(ve(i, "display") === "none" || i === ye.ghost)) {
            t.push({
              target: i,
              rect: St(i)
            });
            var s = Sr({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = ta(i, !0);
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
      t.splice(l3(t, {
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
        var l = 0, u = o.target, f = u.fromRect, c = St(u), h = u.prevFromRect, d = u.prevToRect, p = o.rect, m = ta(u, !0);
        m && (c.top -= m.f, c.left -= m.e), u.toRect = c, u.thisAnimationDuration && Zc(h, c) && !Zc(f, c) && (p.top - c.top) / (p.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = d3(p, h, d, i.options)), Zc(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, p, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(e), s ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, i, s, a) {
      if (a) {
        ve(r, "transition", ""), ve(r, "transform", "");
        var o = ta(this.el), l = o && o.a, u = o && o.d, f = (i.left - s.left) / (l || 1), c = (i.top - s.top) / (u || 1);
        r.animatingX = !!f, r.animatingY = !!c, ve(r, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = h3(r), ve(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ve(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ve(r, "transition", ""), ve(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function h3(t) {
  return t.offsetWidth;
}
function d3(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var Cs = [], Jc = {
  initializeByDefault: !0
}, Go = {
  mount: function(e) {
    for (var n in Jc)
      Jc.hasOwnProperty(n) && !(n in e) && (e[n] = Jc[n]);
    Cs.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Cs.push(e);
  },
  pluginEvent: function(e, n, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var s = e + "Global";
    Cs.forEach(function(a) {
      !n[a.pluginName] || (n[a.pluginName][s] && n[a.pluginName][s](Sr({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](Sr({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, i) {
    Cs.forEach(function(o) {
      var l = o.pluginName;
      if (!(!e.options[l] && !o.initializeByDefault)) {
        var u = new o(e, n, e.options);
        u.sortable = e, u.options = e.options, e[l] = u, qr(r, u.defaults);
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
    return Cs.forEach(function(i) {
      typeof i.eventProperties == "function" && qr(r, i.eventProperties.call(n[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var i;
    return Cs.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[n] == "function" && (i = s.optionListeners[n].call(e[s.pluginName], r));
    }), i;
  }
};
function p3(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, p = t.extraEventProperties;
  if (e = e || n && n[mn], !!e) {
    var m, v = e.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Zr && !Vo ? m = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(r, !0, !0)), m.to = a || n, m.from = o || n, m.item = i || n, m.clone = s, m.oldIndex = l, m.newIndex = u, m.oldDraggableIndex = f, m.newDraggableIndex = c, m.originalEvent = h, m.pullMode = d ? d.lastPutMode : void 0;
    var g = Sr(Sr({}, p), Go.getEventProperties(r, e));
    for (var E in g)
      m[E] = g[E];
    n && n.dispatchEvent(m), v[y] && v[y].call(e, m);
  }
}
var m3 = ["evt"], sn = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, s = s3(r, m3);
  Go.pluginEvent.bind(ye)(e, n, Sr({
    dragEl: Q,
    parentEl: ct,
    ghostEl: Se,
    rootEl: nt,
    nextEl: Ki,
    lastDownEl: Wl,
    cloneEl: at,
    cloneHidden: pi,
    dragStarted: Da,
    putSortable: Pt,
    activeSortable: ye.active,
    originalEvent: i,
    oldIndex: Us,
    oldDraggableIndex: Za,
    newIndex: hn,
    newDraggableIndex: ci,
    hideGhostForTarget: G_,
    unhideGhostForTarget: j_,
    cloneNowHidden: function() {
      pi = !0;
    },
    cloneNowShown: function() {
      pi = !1;
    },
    dispatchSortableEvent: function(o) {
      Xt({
        sortable: n,
        name: o,
        originalEvent: i
      });
    }
  }, s));
};
function Xt(t) {
  p3(Sr({
    putSortable: Pt,
    cloneEl: at,
    targetEl: Q,
    rootEl: nt,
    oldIndex: Us,
    oldDraggableIndex: Za,
    newIndex: hn,
    newDraggableIndex: ci
  }, t));
}
var Q, ct, Se, nt, Ki, Wl, at, pi, Us, hn, Za, ci, yl, Pt, Is = !1, Lu = !1, Cu = [], Hi, jn, Qc, ef, mg, gg, Da, As, Ja, Qa = !1, vl = !1, ql, Gt, tf = [], ih = !1, Au = [], lc = typeof document < "u", _l = L_, yg = Vo || Zr ? "cssFloat" : "float", g3 = lc && !C_ && !L_ && "draggable" in document.createElement("div"), $_ = function() {
  if (!!lc) {
    if (Zr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), F_ = function(e, n) {
  var r = ve(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = oa(e, 0, n), a = oa(e, 1, n), o = s && ve(s), l = a && ve(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + St(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + St(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && r[yg] === "none" || a && r[yg] === "none" && u + f > i) ? "vertical" : "horizontal";
}, y3 = function(e, n, r) {
  var i = r ? e.left : e.top, s = r ? e.right : e.bottom, a = r ? e.width : e.height, o = r ? n.left : n.top, l = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, v3 = function(e, n) {
  var r;
  return Cu.some(function(i) {
    var s = i[mn].options.emptyInsertThreshold;
    if (!(!s || ad(i))) {
      var a = St(i), o = e >= a.left - s && e <= a.right + s, l = n >= a.top - s && n <= a.bottom + s;
      if (o && l)
        return r = i;
    }
  }), r;
}, V_ = function(e) {
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
  (!i || Bl(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, e.group = r;
}, G_ = function() {
  !$_ && Se && ve(Se, "display", "none");
}, j_ = function() {
  !$_ && Se && ve(Se, "display", "");
};
lc && !C_ && document.addEventListener("click", function(t) {
  if (Lu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Lu = !1, !1;
}, !0);
var zi = function(e) {
  if (Q) {
    e = e.touches ? e.touches[0] : e;
    var n = v3(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[mn]._onDragOver(r);
    }
  }
}, _3 = function(e) {
  Q && Q.parentNode[mn]._isOutsideThisEl(e.target);
};
function ye(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = qr({}, e), t[mn] = this;
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
      return F_(t, this.options);
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
    supportPointer: ye.supportPointer !== !1 && "PointerEvent" in window && !Xa,
    emptyInsertThreshold: 5
  };
  Go.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  V_(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : g3, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? je(t, "pointerdown", this._onTapStart) : (je(t, "mousedown", this._onTapStart), je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (je(t, "dragover", this), je(t, "dragenter", this)), Cu.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), qr(this, f3());
}
ye.prototype = {
  constructor: ye,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (As = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Q) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var n = this, r = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (T3(r), !Q && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Xa && l && l.tagName.toUpperCase() === "SELECT") && (l = Wn(l, i.draggable, r, !1), !(l && l.animated) && Wl !== l)) {
        if (Us = On(l), Za = On(l, i.draggable), typeof f == "function") {
          if (f.call(this, e, l, this)) {
            Xt({
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
          if (c = Wn(u, c.trim(), r, !1), c)
            return Xt({
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
        i.handle && !Wn(u, i.handle, r, !1) || this._prepareDragStart(e, o, l);
      }
    }
  },
  _prepareDragStart: function(e, n, r) {
    var i = this, s = i.el, a = i.options, o = s.ownerDocument, l;
    if (r && !Q && r.parentNode === s) {
      var u = St(r);
      if (nt = s, Q = r, ct = Q.parentNode, Ki = Q.nextSibling, Wl = r, yl = a.group, ye.dragged = Q, Hi = {
        target: Q,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, mg = Hi.clientX - u.left, gg = Hi.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Q.style["will-change"] = "all", l = function() {
        if (sn("delayEnded", i, {
          evt: e
        }), ye.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !fg && i.nativeDraggable && (Q.draggable = !0), i._triggerDragStart(e, n), Xt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), fn(Q, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        P_(Q, f.trim(), nf);
      }), je(o, "dragover", zi), je(o, "mousemove", zi), je(o, "touchmove", zi), je(o, "mouseup", i._onDrop), je(o, "touchend", i._onDrop), je(o, "touchcancel", i._onDrop), fg && this.nativeDraggable && (this.options.touchStartThreshold = 4, Q.draggable = !0), sn("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Vo || Zr))) {
        if (ye.eventCanceled) {
          this._onDrop();
          return;
        }
        je(o, "mouseup", i._disableDelayedDrag), je(o, "touchend", i._disableDelayedDrag), je(o, "touchcancel", i._disableDelayedDrag), je(o, "mousemove", i._delayedDragTouchMoveHandler), je(o, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && je(o, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Q && nf(Q), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._disableDelayedDrag), Ie(e, "touchend", this._disableDelayedDrag), Ie(e, "touchcancel", this._disableDelayedDrag), Ie(e, "mousemove", this._delayedDragTouchMoveHandler), Ie(e, "touchmove", this._delayedDragTouchMoveHandler), Ie(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? je(document, "pointermove", this._onTouchMove) : n ? je(document, "touchmove", this._onTouchMove) : je(document, "mousemove", this._onTouchMove) : (je(Q, "dragend", this), je(nt, "dragstart", this._onDragStart));
    try {
      document.selection ? Hl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Is = !1, nt && Q) {
      sn("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && je(document, "dragover", _3);
      var r = this.options;
      !e && fn(Q, r.dragClass, !1), fn(Q, r.ghostClass, !0), ye.active = this, e && this._appendGhost(), Xt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (jn) {
      this._lastX = jn.clientX, this._lastY = jn.clientY, G_();
      for (var e = document.elementFromPoint(jn.clientX, jn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(jn.clientX, jn.clientY), e !== n); )
        n = e;
      if (Q.parentNode[mn]._isOutsideThisEl(e), n)
        do {
          if (n[mn]) {
            var r = void 0;
            if (r = n[mn]._onDragOver({
              clientX: jn.clientX,
              clientY: jn.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      j_();
    }
  },
  _onTouchMove: function(e) {
    if (Hi) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Se && ta(Se, !0), o = Se && a && a.a, l = Se && a && a.d, u = _l && Gt && pg(Gt), f = (s.clientX - Hi.clientX + i.x) / (o || 1) + (u ? u[0] - tf[0] : 0) / (o || 1), c = (s.clientY - Hi.clientY + i.y) / (l || 1) + (u ? u[1] - tf[1] : 0) / (l || 1);
      if (!ye.active && !Is) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (Se) {
        a ? (a.e += f - (Qc || 0), a.f += c - (ef || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ve(Se, "webkitTransform", h), ve(Se, "mozTransform", h), ve(Se, "msTransform", h), ve(Se, "transform", h), Qc = f, ef = c, jn = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Se) {
      var e = this.options.fallbackOnBody ? document.body : nt, n = St(Q, !0, _l, !0, e), r = this.options;
      if (_l) {
        for (Gt = e; ve(Gt, "position") === "static" && ve(Gt, "transform") === "none" && Gt !== document; )
          Gt = Gt.parentNode;
        Gt !== document.body && Gt !== document.documentElement ? (Gt === document && (Gt = yr()), n.top += Gt.scrollTop, n.left += Gt.scrollLeft) : Gt = yr(), tf = pg(Gt);
      }
      Se = Q.cloneNode(!0), fn(Se, r.ghostClass, !1), fn(Se, r.fallbackClass, !0), fn(Se, r.dragClass, !0), ve(Se, "transition", ""), ve(Se, "transform", ""), ve(Se, "box-sizing", "border-box"), ve(Se, "margin", 0), ve(Se, "top", n.top), ve(Se, "left", n.left), ve(Se, "width", n.width), ve(Se, "height", n.height), ve(Se, "opacity", "0.8"), ve(Se, "position", _l ? "absolute" : "fixed"), ve(Se, "zIndex", "100000"), ve(Se, "pointerEvents", "none"), ye.ghost = Se, e.appendChild(Se), ve(Se, "transform-origin", mg / parseInt(Se.style.width) * 100 + "% " + gg / parseInt(Se.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var r = this, i = e.dataTransfer, s = r.options;
    if (sn("dragStart", this, {
      evt: e
    }), ye.eventCanceled) {
      this._onDrop();
      return;
    }
    sn("setupClone", this), ye.eventCanceled || (at = I_(Q), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), fn(at, this.options.chosenClass, !1), ye.clone = at), r.cloneId = Hl(function() {
      sn("clone", r), !ye.eventCanceled && (r.options.removeCloneOnHide || nt.insertBefore(at, Q), r._hideClone(), Xt({
        sortable: r,
        name: "clone"
      }));
    }), !n && fn(Q, s.dragClass, !0), n ? (Lu = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Ie(document, "mouseup", r._onDrop), Ie(document, "touchend", r._onDrop), Ie(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(r, i, Q)), je(document, "drop", r), ve(Q, "transform", "translateZ(0)")), Is = !0, r._dragStartId = Hl(r._dragStarted.bind(r, n, e)), je(document, "selectstart", r), Da = !0, Xa && ve(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var n = this.el, r = e.target, i, s, a, o = this.options, l = o.group, u = ye.active, f = yl === l, c = o.sort, h = Pt || u, d, p = this, m = !1;
    if (ih)
      return;
    function v(K, Le) {
      sn(K, p, Sr({
        evt: e,
        isOwner: f,
        axis: d ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: s,
        canSort: c,
        fromSortable: h,
        target: r,
        completed: g,
        onMove: function(pt, Rt) {
          return bl(nt, n, Q, i, pt, St(pt), e, Rt);
        },
        changed: E
      }, Le));
    }
    function y() {
      v("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState();
    }
    function g(K) {
      return v("dragOverCompleted", {
        insertion: K
      }), K && (f ? u._hideClone() : u._showClone(p), p !== h && (fn(Q, Pt ? Pt.options.ghostClass : u.options.ghostClass, !1), fn(Q, o.ghostClass, !0)), Pt !== p && p !== ye.active ? Pt = p : p === ye.active && Pt && (Pt = null), h === p && (p._ignoreWhileAnimating = r), p.animateAll(function() {
        v("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (r === Q && !Q.animated || r === n && !r.animated) && (As = null), !o.dragoverBubble && !e.rootEl && r !== document && (Q.parentNode[mn]._isOutsideThisEl(e.target), !K && zi(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function E() {
      hn = On(Q), ci = On(Q, o.draggable), Xt({
        sortable: p,
        name: "change",
        toEl: n,
        newIndex: hn,
        newDraggableIndex: ci,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = Wn(r, o.draggable, n, !0), v("dragOver"), ye.eventCanceled)
      return m;
    if (Q.contains(e.target) || r.animated && r.animatingX && r.animatingY || p._ignoreWhileAnimating === r)
      return g(!1);
    if (Lu = !1, u && !o.disabled && (f ? c || (a = ct !== nt) : Pt === this || (this.lastPutMode = yl.checkPull(this, u, Q, e)) && l.checkPut(this, u, Q, e))) {
      if (d = this._getDirection(e, r) === "vertical", i = St(Q), v("dragOverValid"), ye.eventCanceled)
        return m;
      if (a)
        return ct = nt, y(), this._hideClone(), v("revert"), ye.eventCanceled || (Ki ? nt.insertBefore(Q, Ki) : nt.appendChild(Q)), g(!0);
      var b = ad(n, o.draggable);
      if (!b || w3(e, d, this) && !b.animated) {
        if (b === Q)
          return g(!1);
        if (b && n === e.target && (r = b), r && (s = St(r)), bl(nt, n, Q, i, r, s, e, !!r) !== !1)
          return y(), b && b.nextSibling ? n.insertBefore(Q, b.nextSibling) : n.appendChild(Q), ct = n, E(), g(!0);
      } else if (b && S3(e, d, this)) {
        var w = oa(n, 0, o, !0);
        if (w === Q)
          return g(!1);
        if (r = w, s = St(r), bl(nt, n, Q, i, r, s, e, !1) !== !1)
          return y(), n.insertBefore(Q, w), ct = n, E(), g(!0);
      } else if (r.parentNode === n) {
        s = St(r);
        var N = 0, O, R = Q.parentNode !== n, D = !y3(Q.animated && Q.toRect || i, r.animated && r.toRect || s, d), L = d ? "top" : "left", P = dg(r, "top", "top") || dg(Q, "top", "top"), I = P ? P.scrollTop : void 0;
        As !== r && (O = s[L], Qa = !1, vl = !D && o.invertSwap || R), N = x3(e, r, s, d, D ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, vl, As === r);
        var J;
        if (N !== 0) {
          var pe = On(Q);
          do
            pe -= N, J = ct.children[pe];
          while (J && (ve(J, "display") === "none" || J === Se));
        }
        if (N === 0 || J === r)
          return g(!1);
        As = r, Ja = N;
        var T = r.nextElementSibling, $ = !1;
        $ = N === 1;
        var z = bl(nt, n, Q, i, r, s, e, $);
        if (z !== !1)
          return (z === 1 || z === -1) && ($ = z === 1), ih = !0, setTimeout(E3, 30), y(), $ && !T ? n.appendChild(Q) : r.parentNode.insertBefore(Q, $ ? T : r), P && k_(P, 0, I - P.scrollTop), ct = Q.parentNode, O !== void 0 && !vl && (ql = Math.abs(O - St(r)[L])), E(), g(!0);
      }
      if (n.contains(Q))
        return g(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ie(document, "mousemove", this._onTouchMove), Ie(document, "touchmove", this._onTouchMove), Ie(document, "pointermove", this._onTouchMove), Ie(document, "dragover", zi), Ie(document, "mousemove", zi), Ie(document, "touchmove", zi);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._onDrop), Ie(e, "touchend", this._onDrop), Ie(e, "pointerup", this._onDrop), Ie(e, "touchcancel", this._onDrop), Ie(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (hn = On(Q), ci = On(Q, r.draggable), sn("drop", this, {
      evt: e
    }), ct = Q && Q.parentNode, hn = On(Q), ci = On(Q, r.draggable), ye.eventCanceled) {
      this._nulling();
      return;
    }
    Is = !1, vl = !1, Qa = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), sh(this.cloneId), sh(this._dragStartId), this.nativeDraggable && (Ie(document, "drop", this), Ie(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Xa && ve(document.body, "user-select", ""), ve(Q, "transform", ""), e && (Da && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), Se && Se.parentNode && Se.parentNode.removeChild(Se), (nt === ct || Pt && Pt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), Q && (this.nativeDraggable && Ie(Q, "dragend", this), nf(Q), Q.style["will-change"] = "", Da && !Is && fn(Q, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), fn(Q, this.options.chosenClass, !1), Xt({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), nt !== ct ? (hn >= 0 && (Xt({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: nt,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "remove",
      toEl: ct,
      originalEvent: e
    }), Xt({
      rootEl: ct,
      name: "sort",
      toEl: ct,
      fromEl: nt,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), Pt && Pt.save()) : hn !== Us && hn >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ye.active && ((hn == null || hn === -1) && (hn = Us, ci = Za), Xt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), nt = Q = ct = Se = Ki = at = Wl = pi = Hi = jn = Da = hn = ci = Us = Za = As = Ja = Pt = yl = ye.dragged = ye.ghost = ye.clone = ye.active = null, Au.forEach(function(e) {
      e.checked = !0;
    }), Au.length = Qc = ef = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        Q && (this._onDragOver(e), b3(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], n, r = this.el.children, i = 0, s = r.length, a = this.options; i < s; i++)
      n = r[i], Wn(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || M3(n));
    return e;
  },
  sort: function(e, n) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(s, a) {
      var o = i.children[a];
      Wn(o, this.options.draggable, i, !1) && (r[s] = o);
    }, this), n && this.captureAnimationState(), e.forEach(function(s) {
      r[s] && (i.removeChild(r[s]), i.appendChild(r[s]));
    }), n && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, n) {
    return Wn(e, n || this.options.draggable, this.el, !1);
  },
  option: function(e, n) {
    var r = this.options;
    if (n === void 0)
      return r[e];
    var i = Go.modifyOption(this, e, n);
    typeof i < "u" ? r[e] = i : r[e] = n, e === "group" && V_(r);
  },
  destroy: function() {
    sn("destroy", this);
    var e = this.el;
    e[mn] = null, Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart), Ie(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Cu.splice(Cu.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!pi) {
      if (sn("hideClone", this), ye.eventCanceled)
        return;
      ve(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), pi = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (pi) {
      if (sn("showClone", this), ye.eventCanceled)
        return;
      Q.parentNode == nt && !this.options.group.revertClone ? nt.insertBefore(at, Q) : Ki ? nt.insertBefore(at, Ki) : nt.appendChild(at), this.options.group.revertClone && this.animate(Q, at), ve(at, "display", ""), pi = !1;
    }
  }
};
function b3(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function bl(t, e, n, r, i, s, a, o) {
  var l, u = t[mn], f = u.options.onMove, c;
  return window.CustomEvent && !Zr && !Vo ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = i || e, l.relatedRect = s || St(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function nf(t) {
  t.draggable = !1;
}
function E3() {
  ih = !1;
}
function S3(t, e, n) {
  var r = St(oa(n.el, 0, n.options, !0)), i = R_(n.el, n.options, Se), s = 10;
  return e ? t.clientX < i.left - s || t.clientY < r.top && t.clientX < r.right : t.clientY < i.top - s || t.clientY < r.bottom && t.clientX < r.left;
}
function w3(t, e, n) {
  var r = St(ad(n.el, n.options.draggable)), i = R_(n.el, n.options, Se), s = 10;
  return e ? t.clientX > i.right + s || t.clientY > r.bottom && t.clientX > r.left : t.clientY > i.bottom + s || t.clientX > r.right && t.clientY > r.top;
}
function x3(t, e, n, r, i, s, a, o) {
  var l = r ? t.clientY : t.clientX, u = r ? n.height : n.width, f = r ? n.top : n.left, c = r ? n.bottom : n.right, h = !1;
  if (!a) {
    if (o && ql < u * i) {
      if (!Qa && (Ja === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (Qa = !0), Qa)
        h = !0;
      else if (Ja === 1 ? l < f + ql : l > c - ql)
        return -Ja;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return O3(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function O3(t) {
  return On(Q) < On(t) ? 1 : -1;
}
function M3(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function T3(t) {
  Au.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && Au.push(r);
  }
}
function Hl(t) {
  return setTimeout(t, 0);
}
function sh(t) {
  return clearTimeout(t);
}
lc && je(document, "touchmove", function(t) {
  (ye.active || Is) && t.cancelable && t.preventDefault();
});
ye.utils = {
  on: je,
  off: Ie,
  css: ve,
  find: P_,
  is: function(e, n) {
    return !!Wn(e, n, e, !1);
  },
  extend: u3,
  throttle: D_,
  closest: Wn,
  toggleClass: fn,
  clone: I_,
  index: On,
  nextTick: Hl,
  cancelNextTick: sh,
  detectDirection: F_,
  getChild: oa
};
ye.get = function(t) {
  return t[mn];
};
ye.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ye.utils = Sr(Sr({}, ye.utils), r.utils)), Go.mount(r);
  });
};
ye.create = function(t, e) {
  return new ye(t, e);
};
ye.version = a3;
var bt = [], ka, ah, oh = !1, rf, sf, Pu, Ia;
function N3() {
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
      this.sortable.nativeDraggable ? je(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? je(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? je(document, "touchmove", this._handleFallbackAutoScroll) : je(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : (Ie(document, "pointermove", this._handleFallbackAutoScroll), Ie(document, "touchmove", this._handleFallbackAutoScroll), Ie(document, "mousemove", this._handleFallbackAutoScroll)), vg(), zl(), c3();
    },
    nulling: function() {
      Pu = ah = ka = oh = Ia = rf = sf = null, bt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, s = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, o = document.elementFromPoint(s, a);
      if (Pu = n, r || this.options.forceAutoScrollFallback || Vo || Zr || Xa) {
        af(n, this.options, o, r);
        var l = yi(o, !0);
        oh && (!Ia || s !== rf || a !== sf) && (Ia && vg(), Ia = setInterval(function() {
          var u = yi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, zl()), af(n, i.options, u, r);
        }, 10), rf = s, sf = a);
      } else {
        if (!this.options.bubbleScroll || yi(o, !0) === yr()) {
          zl();
          return;
        }
        af(n, this.options, yi(o, !1), !1);
      }
    }
  }, qr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function zl() {
  bt.forEach(function(t) {
    clearInterval(t.pid);
  }), bt = [];
}
function vg() {
  clearInterval(Ia);
}
var af = D_(function(t, e, n, r) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = yr(), u = !1, f;
    ah !== n && (ah = n, zl(), ka = e.scroll, f = e.scrollFn, ka === !0 && (ka = yi(n, !0)));
    var c = 0, h = ka;
    do {
      var d = h, p = St(d), m = p.top, v = p.bottom, y = p.left, g = p.right, E = p.width, b = p.height, w = void 0, N = void 0, O = d.scrollWidth, R = d.scrollHeight, D = ve(d), L = d.scrollLeft, P = d.scrollTop;
      d === l ? (w = E < O && (D.overflowX === "auto" || D.overflowX === "scroll" || D.overflowX === "visible"), N = b < R && (D.overflowY === "auto" || D.overflowY === "scroll" || D.overflowY === "visible")) : (w = E < O && (D.overflowX === "auto" || D.overflowX === "scroll"), N = b < R && (D.overflowY === "auto" || D.overflowY === "scroll"));
      var I = w && (Math.abs(g - i) <= a && L + E < O) - (Math.abs(y - i) <= a && !!L), J = N && (Math.abs(v - s) <= a && P + b < R) - (Math.abs(m - s) <= a && !!P);
      if (!bt[c])
        for (var pe = 0; pe <= c; pe++)
          bt[pe] || (bt[pe] = {});
      (bt[c].vx != I || bt[c].vy != J || bt[c].el !== d) && (bt[c].el = d, bt[c].vx = I, bt[c].vy = J, clearInterval(bt[c].pid), (I != 0 || J != 0) && (u = !0, bt[c].pid = setInterval(function() {
        r && this.layer === 0 && ye.active._onTouchMove(Pu);
        var T = bt[this.layer].vy ? bt[this.layer].vy * o : 0, $ = bt[this.layer].vx ? bt[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ye.dragged.parentNode[mn], $, T, t, Pu, bt[this.layer].el) !== "continue" || k_(bt[this.layer].el, $, T);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = yi(h, !1)));
    oh = u;
  }
}, 30), U_ = function(e) {
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
function od() {
}
od.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = oa(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: U_
};
qr(od, {
  pluginName: "revertOnSpill"
});
function ld() {
}
ld.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: U_
};
qr(ld, {
  pluginName: "removeOnSpill"
});
ye.mount(new N3());
ye.mount(ld, od);
const B_ = 0.5, L3 = !1, Du = vs(
  "slider",
  () => {
    const t = dt(), e = _e(B_), n = _e(L3), r = fe(
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
function W_(t, e) {
  const { t: n } = Xe();
  function r() {
    e == null || e.emit("clickInfo", t);
  }
  return {
    t: n,
    onClickInfo: r
  };
}
const C3 = { class: "lux-layer-manager-item mt-2.5" }, A3 = ["title"], P3 = { class: "flex-1 text-left cursor-default" }, D3 = ["aria-label", "title"], k3 = /* @__PURE__ */ he({
  __name: "layer-item-background",
  props: {
    showEditButton: { type: Boolean, required: !0 },
    layer: { type: Object, required: !0 }
  },
  emits: ["clickEdit", "clickInfo"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i, onClickInfo: s } = W_(n.layer, { emit: r }), a = fe(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: l()
      })
    ), o = fe(() => !ms().isOffLine.value);
    function l() {
      return i(n.layer.name, { ns: "client" });
    }
    return (u, f) => (A(), V("div", C3, [
      o.value ? (A(), V("button", {
        key: 0,
        class: "fa fa-info w-3",
        title: a.value,
        onClick: f[0] || (f[0] = (...c) => M(s) && M(s)(...c))
      }, null, 8, A3)) : F("v-if", !0),
      C("span", P3, ae(l()), 1),
      u.showEditButton ? (A(), V("button", {
        key: 1,
        class: "fa fa-pencil",
        "aria-label": M(i)("Open editor panel", { ns: "client" }),
        title: M(i)("Open editor panel", { ns: "client" }),
        onClick: f[1] || (f[1] = (c) => u.$emit("clickEdit"))
      }, null, 8, D3)) : F("v-if", !0)
    ]));
  }
}), I3 = /* @__PURE__ */ de(k3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-background.vue"]]), R3 = ["id"], $3 = ["aria-checked", "title"], F3 = ["id", "value", "aria-label"], V3 = ["aria-checked", "aria-label"], G3 = /* @__PURE__ */ he({
  __name: "layer-item-sub",
  props: {
    layer: { type: Object, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    isLayerComparatorOpen: { type: Boolean, required: !0 },
    displayLayerComparatorOpen: { type: Boolean, required: !0 }
  },
  emits: ["changeOpacity", "clickToggleLayerComparator"],
  setup(t, { emit: e }) {
    var d, p, m, v;
    const n = t, r = e, { t: i } = Xe(), s = An(), a = fe(
      () => i(s.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), o = rt(
      ((p = (d = n.layer) == null ? void 0 : d.opacity) != null ? p : 1) * 100
    ), l = rt(
      ((v = (m = n.layer) == null ? void 0 : m.previousOpacity) != null ? v : o.value) * 100
    );
    function u() {
      o.value === 0 ? o.value = l.value : (l.value = o.value, o.value = 0), h();
    }
    function f(y) {
      y.target && (o.value = parseInt(y.target.value), h());
    }
    function c() {
      r("clickToggleLayerComparator", n.layer);
    }
    function h() {
      r("changeOpacity", n.layer, o.value);
    }
    return (y, g) => (A(), V("div", {
      class: Pe(["lux-layer-manager-item-content", y.isOpen ? "h-6" : "h-0"]),
      id: `layer-manager-item-content-${y.layer.id}`
    }, [
      C("button", {
        class: Pe(["w-5 fa-solid", o.value === 0 ? "fa-eye-slash" : "fa-eye"]),
        role: "switch",
        "aria-checked": o.value === 0,
        title: M(i)("Toggle layer opacity for {{layerName}}", {
          layerName: a.value
        }),
        onClick: u
      }, null, 10, $3),
      C("input", {
        id: `${y.layer.id}-steps-range`,
        type: "range",
        min: "0",
        max: "100",
        value: o.value,
        step: "25",
        onChange: f,
        class: "m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer",
        "aria-label": M(i)("Change opacity for {{ layerName }}", { layerName: a.value })
      }, null, 40, F3),
      y.displayLayerComparatorOpen ? (A(), V("button", {
        key: 0,
        role: "switch",
        class: Pe(["fa ml-auto text-sm cursor-pointer", y.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": y.isLayerComparatorOpen,
        "aria-label": M(i)("Toggle layer comparator for {{ layerName }}", {
          layerName: a.value
        }),
        onClick: c
      }, null, 10, V3)) : F("v-if", !0)
    ], 10, R3));
  }
}), j3 = /* @__PURE__ */ de(G3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), U3 = ["min", "max", "value"], B3 = /* @__PURE__ */ he({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = fe(() => jc(n.minDateAllowed)), s = fe(() => jc(n.maxDateAllowed));
    function a(o) {
      r("change", o.target.value);
    }
    return (o, l) => (A(), V("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: i.value,
      max: s.value,
      value: o.dateValue ? M(jc)(o.dateValue) : "",
      onChange: a
    }, null, 40, U3));
  }
}), lh = /* @__PURE__ */ de(B3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), W3 = { class: "lux-time-slider w-full" }, q3 = ["for"], H3 = /* @__PURE__ */ he({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const { t: e } = Xe(), n = t, r = rt(
      n.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return A(), V("div", W3, [
        C("div", null, [
          C("label", {
            for: `${i.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, ae(M(e)("Date:")), 9, q3),
          ee(lh, {
            id: `${i.layer.id}-time-slider-start`,
            "date-value": r.value,
            "min-date-allowed": (a = n.layer.time) == null ? void 0 : a.minValue,
            "max-date-allowed": (o = n.layer.time) == null ? void 0 : o.maxValue,
            onChange: s[0] || (s[0] = (l) => i.$emit("changeTime", l))
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), z3 = /* @__PURE__ */ de(H3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), Y3 = { class: "lux-time-slider w-full" }, X3 = ["for"], K3 = ["for"], Z3 = /* @__PURE__ */ he({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Xe(), r = t, i = e, s = rt(
      r.layer.currentTimeMinValue
    ), a = rt(
      r.layer.currentTimeMaxValue
    );
    function o(u) {
      i("changeTime", u, r.layer.currentTimeMaxValue);
    }
    function l(u) {
      i("changeTime", r.layer.currentTimeMinValue, u);
    }
    return (u, f) => {
      var c, h, d, p;
      return A(), V("div", Y3, [
        F(" Date START datepicker input "),
        C("div", null, [
          C("label", {
            for: `${u.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, ae(M(n)("From:")), 9, X3),
          ee(lh, {
            id: `${u.layer.id}-time-slider-start`,
            "date-value": s.value,
            "min-date-allowed": (c = r.layer.time) == null ? void 0 : c.minValue,
            "max-date-allowed": (h = r.layer.time) == null ? void 0 : h.maxValue,
            onChange: o
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ]),
        F(" Date END datepicker input "),
        C("div", null, [
          C("label", {
            for: `${u.layer.id}-time-slider-end`,
            class: "lux-time-slider-label"
          }, ae(M(n)("To:")), 9, K3),
          ee(lh, {
            id: `${u.layer.id}-time-slider-end`,
            "date-value": a.value,
            "min-date-allowed": (d = r.layer.time) == null ? void 0 : d.minValue,
            "max-date-allowed": (p = r.layer.time) == null ? void 0 : p.maxValue,
            onChange: l
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), J3 = /* @__PURE__ */ de(Z3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), Q3 = ["onKeydown", "aria-label", "title"], eR = /* @__PURE__ */ he({
  __name: "slider-range-thumb",
  props: {
    ariaLabel: { type: String, required: !1 },
    maxLimit: { type: Number, required: !1, default: 100 },
    minLimit: { type: Number, required: !1, default: 0 },
    selectedValue: { type: Number, required: !0 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = _e(!1), s = _e(), a = _e(), o = fe(() => {
      var E;
      return ((E = s.value) == null ? void 0 : E.offsetWidth) || 0;
    }), l = fe(() => {
      var E;
      return ((E = a.value) == null ? void 0 : E.offsetWidth) || 40;
    }), u = _e(n.selectedValue), f = fe(() => o.value * u.value / 100 - l.value / 2), c = fe(() => ({ left: `${f.value}px` }));
    Ai(() => {
      document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y);
    }), tt(
      () => n.selectedValue,
      (E) => {
        u.value = E;
      }
    );
    function h(E) {
      u.value = Math.max(Math.min(E, 100), 0), r("change", u.value, i.value);
    }
    function d() {
      h(u.value - 1);
    }
    function p() {
      h(u.value + 1);
    }
    function m() {
      i.value = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", y);
    }
    function v(E) {
      !i.value || h(g(E));
    }
    function y(E) {
      i.value = !1, h(g(E)), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y);
    }
    function g(E) {
      var w, N;
      const b = (w = s.value) != null && w.offsetWidth ? (E.clientX - l.value * 2) * 100 / ((N = s.value) == null ? void 0 : N.offsetWidth) : 0;
      return Math.round(Math.max(Math.min(b, n.maxLimit), n.minLimit));
    }
    return (E, b) => (A(), V("div", {
      class: "w-full",
      role: "slider",
      ref_key: "elRefTrack",
      ref: s
    }, [
      C("button", {
        class: Pe(["lux-slidebar-thumb", i.value ? "dragging" : ""]),
        ref_key: "elRefThumb",
        ref: a,
        style: Ci(c.value),
        onKeydown: [
          or(ar(p, ["stop"]), ["space"]),
          or(ar(p, ["stop"]), ["right"]),
          or(ar(d, ["stop"]), ["left"]),
          or(ar(d, ["stop"]), ["delete"])
        ],
        onMousedown: m,
        onMousemove: v,
        onMouseup: y,
        "aria-label": E.ariaLabel,
        title: E.ariaLabel
      }, null, 46, Q3)
    ], 512));
  }
}), _g = /* @__PURE__ */ de(eR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/slider-range/slider-range-thumb.vue"]]), tR = /* @__PURE__ */ he({
  __name: "slider-range-active-track",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = _e(), s = _e(), a = fe(
      () => i.value ? Math.round(
        i.value.offsetWidth * n.selectedMinValue / 100
      ) : 0
    ), o = fe(() => {
      var c, h;
      let f = 0;
      return n.selectedMaxValue !== void 0 && ((c = i.value) == null ? void 0 : c.offsetWidth) && (f = ((h = i.value) == null ? void 0 : h.offsetWidth) * n.selectedMaxValue / 100 - a.value), Math.round(f);
    }), l = fe(() => ({
      left: `${a.value}px`,
      width: `${o.value}px`
    }));
    function u(f) {
      if (i.value) {
        const c = i.value.getBoundingClientRect().x, h = (f.clientX - c) * 100 / i.value.offsetWidth;
        r("change", h);
      }
    }
    return (f, c) => (A(), V("div", {
      ref_key: "elRefFullTrack",
      ref: i,
      class: "lux-slidebar-track"
    }, [
      f.selectedMaxValue !== void 0 ? (A(), V("div", {
        key: 0,
        ref_key: "elRefSelectionTrack",
        ref: s,
        class: "lux-slidebar-track-selection",
        style: Ci(l.value),
        onClick: u
      }, null, 4)) : F("v-if", !0),
      C("div", {
        class: "lux-slidebar-track-full",
        onClick: u
      })
    ], 512));
  }
}), nR = /* @__PURE__ */ de(tR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/slider-range/slider-range-active-track.vue"]]), rR = { class: "lux-slidebar-fake" }, iR = /* @__PURE__ */ he({
  __name: "slider-range",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 },
    ariaLabelMin: { type: String, required: !1 },
    ariaLabelMax: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = _e(n.selectedMinValue), s = _e(n.selectedMaxValue);
    function a(u, f) {
      r("change", u, n.selectedMaxValue, f);
    }
    function o(u, f) {
      r("change", n.selectedMinValue, u, f);
    }
    function l(u) {
      s.value === void 0 ? i.value = u : u >= s.value ? s.value = u : u <= n.selectedMinValue ? i.value = u : Math.abs(s.value - u) < Math.abs(i.value - u) ? s.value = u : i.value = u, r("change", i.value, s.value, !1);
    }
    return (u, f) => (A(), V("div", rR, [
      F(" Draggable Max thumb button "),
      s.value !== void 0 ? (A(), Fe(_g, {
        key: 0,
        ariaLabel: u.ariaLabelMax,
        minLimit: u.selectedMinValue,
        selectedValue: s.value,
        onChange: o
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : F("v-if", !0),
      F(" Draggable Min thumb button "),
      F(" put Min value after Max value, this is just for z-index grabbing "),
      ee(_g, {
        ariaLabel: u.ariaLabelMin,
        maxLimit: u.selectedMaxValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      F(" Selection highlight "),
      ee(nR, {
        selectedMinValue: u.selectedMinValue,
        selectedMaxValue: u.selectedMaxValue,
        onChange: l
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), bg = /* @__PURE__ */ de(iR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/slider-range/slider-range.vue"]]), sR = { class: "lux-time-slider w-full" }, aR = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, oR = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, lR = { class: "lux-time-displayed-dates" }, uR = {
  key: 0,
  class: "lux-time-start-date grow"
}, cR = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, fR = /* @__PURE__ */ he({
  __name: "layer-time-slider",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Xe(), r = t, i = e, s = fe(v), a = fe(
      () => {
        var b, w;
        return (b = r.layer.time) != null && b.minValue ? new Date((w = r.layer.time) == null ? void 0 : w.minValue).getTime() : 0;
      }
    ), o = fe(
      () => {
        var b, w;
        return (b = r.layer.time) != null && b.maxValue ? new Date((w = r.layer.time) == null ? void 0 : w.maxValue).getTime() : 0;
      }
    ), l = fe(() => o.value - a.value), u = _e(r.layer.currentTimeMaxValue), f = _e(r.layer.currentTimeMinValue), c = fe(
      () => f.value ? new Date(f.value).getTime() : void 0
    ), h = fe(
      () => u.value ? new Date(u.value).getTime() : void 0
    ), d = fe(
      () => m(c.value)
    ), p = fe(
      () => m(h.value)
    );
    function m(b) {
      return b ? (b - a.value) / l.value * 100 : 0;
    }
    function v() {
      var P, I;
      const b = r.layer.time, w = [];
      if (!b)
        return;
      if (b.values)
        return b.values.map((J) => new Date(J).getTime());
      const N = new Date(b.minValue), O = new Date((P = b.maxValue) != null ? P : Date.now()), R = 1024, D = new Date(N.getTime()), L = (I = b.interval) != null ? I : Z0;
      if (D.setFullYear(
        N.getFullYear() + R * L[0]
      ), D.setMonth(
        N.getMonth() + R * L[1],
        N.getDate() + R * L[2]
      ), D.setSeconds(N.getSeconds() + R * L[3]), D > O)
        for (let J = 0; ; J++) {
          const pe = new Date(N.getTime());
          if (pe.setFullYear(N.getFullYear() + J * L[0]), pe.setMonth(
            N.getMonth() + J * L[1],
            N.getDate() + J * L[2]
          ), pe.setSeconds(N.getSeconds() + J * L[3]), pe <= O)
            w.push(pe.getTime());
          else
            break;
        }
      return w;
    }
    function y(b) {
      var O;
      const w = b / 100 * (o.value - a.value) + a.value, N = FC(w, {
        minValue: a.value,
        maxValue: o.value,
        timeValueList: s.value,
        timeInterval: (O = r.layer.time) == null ? void 0 : O.interval
      });
      return Kf(N);
    }
    function g(b, w) {
      const N = y(b);
      if (f.value = N, w) {
        const O = y(w);
        u.value = O;
      }
    }
    function E(b, w, N) {
      g(b, w), N || i("changeTime", f.value, u.value);
    }
    return (b, w) => {
      var N, O, R, D, L, P, I;
      return A(), V("div", sR, [
        F(" Slider LayerTimeMode.VALUE "),
        ((N = b.layer.time) == null ? void 0 : N.mode) === M(Ir).VALUE ? (A(), V("div", aR, [
          ee(bg, {
            ariaLabelMin: `${M(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: d.value,
            onChange: E
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : F("v-if", !0),
        F(" Slider LayerTimeMode.RANGE "),
        ((O = b.layer.time) == null ? void 0 : O.mode) === M(Ir).RANGE ? (A(), V("div", oR, [
          ee(bg, {
            ariaLabelMin: `${M(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${M(n)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: d.value,
            selectedMaxValue: p.value,
            onChange: E
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : F("v-if", !0),
        F(" Display localized time values "),
        C("div", lR, [
          F(" Display localized time values Min value "),
          ((R = b.layer.time) == null ? void 0 : R.mode) === M(Ir).RANGE || ((D = b.layer.time) == null ? void 0 : D.mode) === M(Ir).VALUE ? (A(), V("div", uR, [
            C("span", null, ae(f.value ? M(Bm)(f.value, (L = b.layer.time) == null ? void 0 : L.resolution) : "-"), 1)
          ])) : F("v-if", !0),
          F(" Display localized time values Max value "),
          ((P = b.layer.time) == null ? void 0 : P.mode) === M(Ir).RANGE ? (A(), V("div", cR, [
            C("span", null, ae(u.value ? M(Bm)(u.value, (I = b.layer.time) == null ? void 0 : I.resolution) : "-"), 1)
          ])) : F("v-if", !0)
        ])
      ]);
    };
  }
}), hR = /* @__PURE__ */ de(fR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), dR = /* @__PURE__ */ he({
  __name: "layer-time",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const n = e;
    function r(i, s) {
      n("changeTime", i, s);
    }
    return (i, s) => {
      var a, o, l, u, f;
      return A(), V(Ue, null, [
        F(" Layer time: slider widget "),
        ((a = i.layer.time) == null ? void 0 : a.widget) === M(Vl).SLIDER ? (A(), Fe(hR, {
          key: 0,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(" Layer time: datepicker VALUE (one date) widget "),
        ((o = i.layer.time) == null ? void 0 : o.widget) === M(Vl).DATEPICKER && ((l = i.layer.time) == null ? void 0 : l.mode) === M(Ir).VALUE ? (A(), Fe(z3, {
          key: 1,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((u = i.layer.time) == null ? void 0 : u.widget) === M(Vl).DATEPICKER && ((f = i.layer.time) == null ? void 0 : f.mode) === M(Ir).RANGE ? (A(), Fe(J3, {
          key: 2,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0)
      ], 64);
    };
  }
}), pR = /* @__PURE__ */ de(dR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time.vue"]]), mR = { class: "lux-layer-manager-item relative" }, gR = { class: "w-full flex flex-nowrap items-start gap-x-2" }, yR = ["title"], vR = ["aria-label", "title"], _R = ["aria-expanded", "aria-controls", "data-cy"], bR = { class: "grow" }, ER = ["title", "aria-label"], SR = /* @__PURE__ */ he({
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
    const n = t, r = e, { t: i, onClickInfo: s } = W_(n.layer, { emit: r }), a = An(), o = fe(
      () => i(a.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), l = fe(() => !ms().isOffLine.value), u = fe(
      () => i('Sort "{{layerName}}" in the list', {
        ns: "client",
        layerName: o.value
      })
    ), f = fe(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o.value
      })
    ), c = fe(
      () => i('Remove layer "{{layerName}}"', {
        ns: "client",
        layerName: o.value
      })
    );
    function h(d, p) {
      r("changeTime", d, p);
    }
    return (d, p) => (A(), V("div", mR, [
      C("div", gR, [
        C("button", {
          class: Pe(["fa-solid fa-bars cursor-move mt-1", d.dragHandleClassName]),
          title: u.value
        }, null, 10, yR),
        l.value ? (A(), V("button", {
          key: 0,
          class: "fa-solid fa-info mt-1",
          "aria-label": f.value,
          title: f.value,
          onClick: p[0] || (p[0] = (...m) => M(s) && M(s)(...m))
        }, null, 8, vR)) : F("v-if", !0),
        C("button", {
          "aria-expanded": d.isOpen,
          "aria-controls": `layer-manager-item-content-${d.layer.id}`,
          "data-cy": `myLayerItemLabel-${d.layer.id}`,
          class: Pe([d.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: p[1] || (p[1] = (m) => d.$emit("clickToggle", d.layer))
        }, [
          C("span", bR, ae(o.value), 1),
          d.is3d ? F("v-if", !0) : (A(), V("span", {
            key: 0,
            class: Pe(["w-3.5 fa-solid", d.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, _R),
        C("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: c.value,
          "aria-label": c.value,
          onClick: p[2] || (p[2] = (m) => d.$emit("clickRemove", d.layer))
        }, null, 8, ER)
      ]),
      F(" Layer item sub content (opacity and toggle comparator) "),
      d.is3d ? F("v-if", !0) : (A(), Fe(j3, {
        key: 0,
        layer: d.layer,
        isOpen: d.isOpen,
        isLayerComparatorOpen: d.isLayerComparatorOpen,
        displayLayerComparatorOpen: d.displayLayerComparatorOpen,
        onClickToggleLayerComparator: p[3] || (p[3] = (m) => d.$emit("clickToggleLayerComparator", m)),
        onChangeOpacity: p[4] || (p[4] = (m, v) => d.$emit("changeOpacity", m, v))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      F(" Layer time: slider OR datepicker widgets "),
      d.layer.time ? (A(), Fe(pR, {
        key: 1,
        layer: d.layer,
        onChangeTime: h
      }, null, 8, ["layer"])) : F("v-if", !0)
    ]));
  }
}), Eg = /* @__PURE__ */ de(SR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item.vue"]]), wR = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, xR = ["id"], OR = { class: "sortable-layers" }, MR = ["id"], TR = {
  key: 1,
  class: "flex flex-row justify-center space-x-1 my-2"
}, of = "drag-handle", NR = /* @__PURE__ */ he({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: n } = Xe(), { setMetadataId: r } = Qh(), i = dt(), s = _t(), a = Di(), o = Du(), { bgLayer: l } = We(i), { sliderActive: u } = We(o), f = fe(() => [...i.layers].reverse()), c = fe(() => [...i.layers3d].reverse()), h = rt(), d = fe(
      () => a.isLayerStyleEditable(l.value)
    ), p = fe(() => !ms().isOffLine.value), m = e, { setRemoteLayersOpen: v } = _t();
    _n(() => {
      const D = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${of}`,
        forceFallback: zC
      }, L = document.querySelector(".sortable-layers"), P = document.querySelector(".sortable-layers-3d");
      L && ye.create(L, {
        ...D,
        onSort: y
      }), P && ye.create(P, {
        ...D,
        onSort: g
      });
    });
    function y(D, L) {
      const P = [...D.to.children].map((I) => Number(I.id)).reverse();
      i.reorderLayers(P, L);
    }
    function g(D) {
      y(D, !0);
    }
    function E(D, L) {
      i.setLayerOpacity(D.id, L / 100);
    }
    function b(D, L, P) {
      i.setLayerTime(D.id, L, P);
    }
    function w(D) {
      i.removeLayers(D.id);
    }
    function N(D) {
      h.value = h.value !== D.id ? D.id : void 0;
    }
    function O() {
      s.openStyleEditorPanel();
    }
    function R() {
      o.toggleSlider();
    }
    return (D, L) => (A(), V("div", null, [
      c.value.length > 0 ? (A(), V("ul", wR, [
        (A(!0), V(Ue, null, Dn(c.value, (P, I) => (A(), V("li", {
          key: P.id,
          id: P.id
        }, [
          ee(Eg, {
            is3d: !0,
            dragHandleClassName: of,
            layer: P,
            isOpen: h.value === P.id,
            isLayerComparatorOpen: M(u),
            displayLayerComparatorOpen: I === 0,
            onClickRemove: w,
            onClickToggle: N,
            onClickToggleLayerComparator: R,
            onClickInfo: (J) => M(r)(P.id),
            onChangeOpacity: E,
            onChangeTime: (J, pe) => b(P, J, pe)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, xR))), 128))
      ])) : F("v-if", !0),
      C("ul", OR, [
        (A(!0), V(Ue, null, Dn(f.value, (P, I) => (A(), V("li", {
          key: P.id,
          id: P.id
        }, [
          ee(Eg, {
            is3d: !1,
            dragHandleClassName: of,
            layer: P,
            isOpen: h.value === P.id,
            isLayerComparatorOpen: M(u),
            displayLayerComparatorOpen: I === 0,
            onClickRemove: w,
            onClickToggle: N,
            onClickToggleLayerComparator: R,
            onClickInfo: (J) => M(r)(P.id),
            onChangeOpacity: E,
            onChangeTime: (J, pe) => b(P, J, pe)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, MR))), 128))
      ]),
      ee(I3, {
        layer: M(l) || M(Ou),
        showEditButton: d.value,
        onClickInfo: L[0] || (L[0] = () => M(l) && M(r)(M(l).id)),
        onClickEdit: O
      }, null, 8, ["layer", "showEditButton"]),
      p.value ? (A(), V("div", TR, [
        C("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: L[1] || (L[1] = (P) => m("displayCatalog"))
        }, ae(M(n)("+ Add layers", { ns: "client" })), 1),
        C("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: L[2] || (L[2] = (P) => M(v)(!0))
        }, ae(M(n)("+ Add external Wms", { ns: "client" })), 1)
      ])) : F("v-if", !0)
    ]));
  }
}), LR = /* @__PURE__ */ de(NR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-manager.vue"]]), CR = { class: "flex flex-col h-full pt-1.5" }, AR = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, PR = ["aria-label"], DR = { class: "flex flex-row gap-2 h-10 text-2xl" }, kR = ["aria-expanded"], IR = { key: 0 }, RR = ["aria-expanded"], $R = { class: "relative grow p-2.5 bg-primary overflow-auto" }, FR = /* @__PURE__ */ he({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Xe(), n = _t(), { setLayersOpen: r } = n, { myLayersTabOpen: i } = We(n), { layers: s } = We(dt()), a = fe(() => !ms().isOffLine.value), o = fe(() => i.value || ms().isOffLine.value);
    function l() {
      n.setMyLayersTabOpen(!0);
    }
    function u() {
      n.setMyLayersTabOpen(!1);
    }
    return (f, c) => (A(), V("div", CR, [
      F(" Panel title and close button "),
      C("div", AR, [
        C("h1", null, ae(M(e)("layers", { ns: "client" })), 1),
        C("span", null, [
          C("button", {
            onClick: c[0] || (c[0] = () => M(r)(!1)),
            "aria-label": M(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, PR)
        ])
      ]),
      F(" My Layers and Catalog tab labels "),
      C("div", DR, [
        C("button", {
          onClick: l,
          class: Pe(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", o.value ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": o.value
        }, [
          io(ae(M(e)("my_layers", { ns: "client" })) + " ", 1),
          M(s).length ? (A(), V("span", IR, "(" + ae(M(s).length) + ")", 1)) : F("v-if", !0)
        ], 10, kR),
        a.value ? (A(), V("button", {
          key: 0,
          onClick: u,
          class: Pe(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", o.value ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !o.value
        }, ae(M(e)("Catalog", { ns: "client" })), 11, RR)) : F("v-if", !0)
      ]),
      F(" Panel content (MyLayers and Catalog) "),
      C("div", $R, [
        o.value ? (A(), Fe(LR, {
          key: 0,
          onDisplayCatalog: u
        })) : F("v-if", !0),
        o.value ? F("v-if", !0) : (A(), Fe(n3, { key: 1 }))
      ])
    ]));
  }
}), VR = /* @__PURE__ */ de(FR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-panel/layer-panel.vue"]]);
class GR {
  bootstrap() {
    let e;
    e = vn(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = Du();
    tt(
      [() => e.sliderActive, () => e.sliderRatio],
      ([n, r], [i]) => {
        n !== i && Ne.setValue(Jf, n), Ne.setValue(
          Qf,
          r
        );
      }
    );
  }
  restore() {
    const e = Ne.getValue(Jf, Jh), n = Ne.getValue(Qf, Js), { toggleSlider: r, setRatio: i } = Du();
    typeof e < "u" && e !== null && (r(e), typeof n !== void 0 && n !== null && i(n != null ? n : B_));
  }
}
const jR = new GR(), UR = ["onKeydown"], BR = /* @__PURE__ */ C("span", { class: "lux-slider-line" }, null, -1), WR = /* @__PURE__ */ C("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ C("span"),
  /* @__PURE__ */ C("span")
], -1), qR = {
  key: 0,
  class: "lux-slider-layer-label"
}, HR = /* @__PURE__ */ C("i", { class: "fa fa-arrow-left mr-2" }, null, -1), Sg = 30, zR = /* @__PURE__ */ he({
  __name: "splitter-element",
  props: {
    sliderActive: { type: Boolean, required: !0 },
    sliderRatio: { type: Number, required: !0 },
    sliderTopLayer: { type: Object, required: !0 },
    sliderOffset: { type: Number, required: !0 },
    containerOffset: { type: Number, required: !0 }
  },
  emits: ["moveSplitBar", "escSplitBar"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = n, { t: s } = Xe(), a = _e(null), o = fe(() => ({ left: `${r.sliderOffset}px` }));
    let l = !1;
    e({
      sliderElement: a
    });
    function u(v) {
      i("moveSplitBar", v + a.value.offsetWidth / 2);
    }
    function f() {
      l = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", h);
    }
    function c(v) {
      !l || u(v.clientX);
    }
    function h() {
      l = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }
    function d() {
      const v = r.containerOffset + a.value.offsetLeft;
      u(v + Sg);
    }
    function p() {
      const v = r.containerOffset + a.value.offsetLeft;
      u(v - Sg);
    }
    function m() {
      i("escSplitBar");
    }
    return _n(() => {
      var v;
      (v = a.value) == null || v.focus({ focusVisible: !0 });
    }), Ai(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (v, y) => (A(), V("button", {
      ref_key: "sliderElement",
      ref: a,
      onMousedown: f,
      onMousemove: c,
      onMouseup: h,
      onKeydown: [
        or(ar(d, ["stop"]), ["space"]),
        or(ar(d, ["stop"]), ["right"]),
        or(ar(p, ["stop"]), ["left"]),
        or(ar(p, ["stop"]), ["delete"]),
        or(ar(m, ["stop"]), ["esc"])
      ],
      class: "left-[20px] absolute h-full w-[32px] block",
      style: Ci(o.value),
      role: "seperator",
      "aria-controls": "map-container"
    }, [
      BR,
      WR,
      v.sliderTopLayer ? (A(), V("span", qR, [
        HR,
        C("span", null, ae(M(s)(v.sliderTopLayer.name)), 1)
      ])) : F("v-if", !0)
    ], 44, UR));
  }
}), YR = /* @__PURE__ */ de(zR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/slider/splitter-element.vue"]]), XR = /* @__PURE__ */ he({
  __name: "slider-comparator",
  setup(t) {
    const e = Du(), n = d_(), r = Fr().olMap, i = _e(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = We(e), l = fe(
      () => {
        var g, E;
        return ((E = (g = i.value) == null ? void 0 : g.sliderElement) == null ? void 0 : E.offsetWidth) || 0;
      }
    ), u = function() {
      var E, b, w;
      let g = (w = (b = (E = r.value) == null ? void 0 : E.getViewport()) == null ? void 0 : b.parentElement) == null ? void 0 : w.offsetLeft;
      return (g === void 0 || g === 0) && (g = d == null ? void 0 : d.offsetLeft), g !== void 0 ? g : 0;
    }, f = fe(() => {
      var g, E;
      return r.value && i.value ? a.value * r.value.getSize()[0] - ((E = (g = i.value) == null ? void 0 : g.sliderElement) == null ? void 0 : E.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    jR.bootstrap(), tt([o, s], ([g, E], [b]) => {
      var w;
      g && E ? (g !== b && m(), p()) : m(), (w = r.value) == null || w.render();
    }), tt(f, () => {
      var g;
      (g = r.value) == null || g.render();
    });
    function p() {
      const g = n.getLayerFromCache(o.value);
      !g || (c = g.on(
        wd.PRERENDER,
        function(E) {
          var P;
          const b = E.context, w = (P = r.value) == null ? void 0 : P.getSize(), N = f.value + l.value / 2, O = Bo(E, [0, 0]), R = Bo(E, [N, 0]), D = Bo(E, [0, w[1]]), L = Bo(E, [N, w[1]]);
          b.save(), b.beginPath(), b.moveTo(O[0], O[1]), b.lineTo(D[0], D[1]), b.lineTo(L[0], L[1]), b.lineTo(R[0], R[1]), b.closePath(), b.clip();
        }
      ), h = g.on(
        wd.POSTRENDER,
        function(E) {
          E.context.restore();
        }
      ));
    }
    function m() {
      Ob([c, h]);
    }
    function v(g) {
      var w;
      const E = (w = r.value) == null ? void 0 : w.getSize(), b = (g - u()) / E[0];
      e.setRatio(b);
    }
    function y() {
      e.toggleSlider();
    }
    return _n(() => {
      var g, E;
      d = (E = (g = r.value) == null ? void 0 : g.getTargetElement()) == null ? void 0 : E.closest(".map-wrapper");
    }), Ai(() => {
      m();
    }), (g, E) => M(o) && M(s) ? (A(), Fe(YR, {
      key: 0,
      ref_key: "splitterElement",
      ref: i,
      sliderActive: M(s),
      sliderRatio: M(a),
      sliderTopLayer: M(o),
      sliderOffset: f.value,
      containerOffset: u(),
      onMoveSplitBar: v,
      onEscSplitBar: y
    }, null, 8, ["sliderActive", "sliderRatio", "sliderTopLayer", "sliderOffset", "containerOffset"])) : F("v-if", !0);
  }
}), KR = /* @__PURE__ */ de(XR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/slider/slider-comparator.vue"]]);
function X6() {
  const t = An(), e = dt();
  function n(i) {
    const s = JSON.parse(i.layerSerialization), { id: a, label: o } = s;
    return {
      id: a,
      name: o,
      options: s,
      type: i.layerType
    };
  }
  function r(i) {
    const s = t.initLayer(
      n(i)
    );
    e.addLayers(s);
  }
  return {
    createOfflineLayer: r,
    offlineLayerToLayer: n
  };
}
const El = "-", lf = ",", wg = "--";
class ZR {
  constructor() {
    Ke(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, lf));
  }
  layerTimesToStrings(e) {
    return e ? e.split(wg) : [];
  }
  layerIdsToLayers(e) {
    const n = ls(), r = An();
    return (e ? e.split(El) : []).map((s) => {
      const a = mo.isRemoteLayer(s) ? HP(s) : n.findById(parseInt(s, 10));
      return a ? r.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const n = ls(), r = An();
    return (e ? e.split(lf) : []).map((s) => {
      const a = n.findByName(s);
      return a ? r.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, n = El) {
    return WC(e, n);
  }
  layersVisibilitiesToBooleansV2(e) {
    return qC(e, lf);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((n) => n.id).join(El)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = n.opacity) != null ? r : 1;
    }).join(El)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = An().getLayerCurrentTime(n)) != null ? r : "";
    }).join(wg)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const n = ls();
    return e ? n.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || Ou.name;
  }
}
const pn = new ZR(), JR = "basemap_2015_global", QR = "orthogr_2013_global", e4 = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class t4 {
  bootstrap() {
    const e = Zt();
    let n;
    n = vn(() => {
      e.bgLayers.length > 0 && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = dt(), { bgLayer: n } = We(e);
    tt(
      n,
      (r, i) => {
        i !== r && Ne.setValue(
          Ym,
          r,
          pn.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = p_(), n = this.getBgLayerFromStorage();
    e(n);
  }
  getBgLayerFromStorage() {
    const e = Ne.getInitialVersion(), n = Ne.getValue(Ym);
    return n ? e === 2 ? this.getBgLayerFromStorageV2(n) : pn.bgLayerNameToBgLayer(n) : pn.bgLayerNameToBgLayer(JR);
  }
  getBgLayerFromStorageV2(e) {
    const n = Ne.getValue(
      e_,
      Js
    );
    let r = "";
    return e ? r = e4[e] : n === 0 && (r = QR), pn.bgLayerNameToBgLayer(r);
  }
}
const n4 = new t4();
class r4 {
  bootstrap() {
    const e = Zt();
    let n;
    n = vn(() => {
      e.themes && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = dt(), { layers: n } = We(e);
    tt(
      n,
      (r, i) => {
        i !== r && (Ne.setValue(
          zm,
          r,
          pn.layersToLayerIds
        ), Ne.setValue(
          Xm,
          r,
          pn.layersToLayerOpacities
        ), Ne.setValue(
          Km,
          r,
          pn.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getInitialVersion(), n = dt(), r = Ne.getValue(
      zm,
      e === 2 ? pn.layerNamesToLayersV2 : pn.layerIdsToLayers
    );
    this.restoreLayersOpacities(r, e), this.restoreLayersTimes(r), e === 2 && (Ne.removeItem(e_), Ne.removeItem(QC), Ne.removeItem(eg), Ne.removeItem(tg)), n.addLayers(...(r == null ? void 0 : r.filter((i) => i)) || []);
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
    const n = Ne.getValue(
      Km,
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
    return Ne.getValue(
      Xm,
      pn.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Ne.getValue(
      eg,
      pn.layersOpacitiesToNumbersV2
    ), n = Ne.getValue(
      tg,
      pn.layersVisibilitiesToBooleansV2
    );
    return e.map((r, i) => n[i] ? r : 0);
  }
}
const i4 = new r4();
class s4 {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const a4 = new s4();
class o4 {
  bootstrap() {
    this.restore();
    let e;
    e = vn(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = Zt();
    tt(
      () => e.theme,
      (n, r) => {
        r !== n && n && Ne.setValue(
          ho,
          n,
          a4.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(ho);
    if (e) {
      const { setTheme: n } = Zt();
      n(e);
    }
  }
}
const l4 = new o4();
class u4 {
  bootstrapLayersOpen() {
    this.restoreLayersOpen();
    let e;
    e = vn(() => {
      this.persistLayersOpen(), e && e();
    });
  }
  persistLayersOpen() {
    const e = _t(), { layersOpen: n } = We(e);
    tt(
      n,
      (r, i) => {
        i !== r && Ne.setValue(Su, r);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Ne.getValue(Su) !== "false", { setLayersOpen: n } = _t();
    n(e);
  }
}
const c4 = new u4();
class f4 {
  bootstrap() {
    this.restore();
    let e;
    e = vn(() => {
      this.persist(), e && e();
    });
  }
  persist() {
  }
  restore() {
    const e = Ne.getValue(KC);
    _t().setMapId(e);
  }
}
const h4 = new f4(), d4 = /* @__PURE__ */ he({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(!0), V(Ue, null, Dn(e.colors, (i, s) => (A(), V("span", {
      key: `${n.styleName}-${s}`,
      class: "grow m-px",
      style: Ci(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), p4 = /* @__PURE__ */ de(d4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/simple-style-item.vue"]]), m4 = { class: "text-white border-2 p-[10px] m-[10px]" }, g4 = { class: "text-center mb-3" }, y4 = ["title"], v4 = { class: "text-white" }, _4 = ["title", "onClick"], b4 = { class: "flex" }, E4 = /* @__PURE__ */ he({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Xe(), n = Kn(), r = Di(), { bgStyle: i } = We(n), s = Vr().simple_styles.road, a = _e(s);
    tt(
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
    return (l, u) => (A(), V("div", m4, [
      F(" TODO: create clean container for simple and advanced style editors "),
      C("h5", g4, ae(M(e)("Select a style", { ns: "client" })), 1),
      (A(!0), V(Ue, null, Dn(a.value, (f) => (A(), V("div", {
        key: f.unlocalized_label,
        title: M(e)(f.unlocalized_label, { ns: "client" }),
        class: Pe(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        C("span", v4, ae(M(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        C("button", {
          title: M(e)("Select style: {{styleName}}", {
            styleName: M(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          C("span", b4, [
            ee(p4, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, _4)
      ], 10, y4))), 128))
    ]));
  }
}), S4 = /* @__PURE__ */ de(E4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/simple-style-selector.vue"]]);
function w4(t) {
  const e = x4(t);
  return !e || !e.medium_style_class ? [] : Vr().medium_default_styles[e.medium_style_class];
}
function x4(t) {
  return Vr().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const O4 = { class: "flex w-full items-center" }, M4 = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, T4 = { class: "grow" }, N4 = ["value"], L4 = ["checked", "aria-label"], C4 = /* @__PURE__ */ he({
  __name: "medium-style-item",
  props: {
    style: { type: Object, required: !0 },
    colorEditable: { type: Boolean, required: !0 }
  },
  emits: ["changeStyle"],
  setup(t, { emit: e }) {
    const { t: n } = Xe(), r = t, i = e;
    function s(o) {
      if (o.target) {
        const l = {
          ...r.style,
          color: o.target.value
        };
        i("changeStyle", l);
      }
    }
    function a(o) {
      if (o) {
        const l = {
          ...r.style,
          visible: o.target.checked
        };
        i("changeStyle", l);
      }
    }
    return (o, l) => (A(), V("div", O4, [
      C("label", M4, ae(M(n)(o.style.label)), 1),
      C("div", T4, [
        o.colorEditable && r.style.color ? (A(), V("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: r.style.color,
          onInput: s
        }, null, 40, N4)) : F("v-if", !0)
      ]),
      C("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: r.style.visible,
        onChange: a,
        "aria-label": M(n)("Show or hide {{ thematicName }}", {
          thematicName: r.style.label
        })
      }, null, 40, L4)
    ]));
  }
}), A4 = /* @__PURE__ */ de(C4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/medium-style-item.vue"]]), P4 = { class: "text-white border-2 p-[10px] m-[10px]" }, D4 = { class: "text-center mb-3" }, k4 = /* @__PURE__ */ he({
  __name: "medium-style-selector",
  props: {
    layer: { type: Object, required: !0 }
  },
  setup(t) {
    const e = ["basemap_2015_global"], n = Kn(), { bgStyle: r } = We(n), { t: i } = Xe(), s = t, a = fe(
      () => e.includes(s.layer.name)
    ), o = fe(
      () => r.value || w4(s.layer)
    );
    function l(u, f) {
      r.value = o.value.map(
        (c, h) => h === u ? f : c
      ), n.disableExpertStyle();
    }
    return (u, f) => (A(), V("div", P4, [
      C("h5", D4, ae(a.value ? M(i)("Select a colour for every theme") : M(i)("Activate categories")), 1),
      (A(!0), V(Ue, null, Dn(o.value, (c, h) => (A(), Fe(A4, {
        key: c.label,
        style: Ci(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: a.value
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), I4 = /* @__PURE__ */ de(k4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/medium-style-selector.vue"]]);
var q_ = { exports: {} };
(function(t, e) {
  (function(n, r) {
    r();
  })(lr, function() {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof lr == "object" && lr.global === lr ? lr : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = a.saveAs || (typeof window != "object" || window !== a ? function() {
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
      var d = u.type === "application/octet-stream", p = /constructor/i.test(a.HTMLElement) || a.safari, m = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((m || d && p || o) && typeof FileReader < "u") {
        var v = new FileReader();
        v.onloadend = function() {
          var E = v.result;
          E = m ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = E : location = E, h = null;
        }, v.readAsDataURL(u);
      } else {
        var y = a.URL || a.webkitURL, g = y.createObjectURL(u);
        h ? h.location = g : location.href = g, h = null, setTimeout(function() {
          y.revokeObjectURL(g);
        }, 4e4);
      }
    });
    a.saveAs = l.saveAs = l, t.exports = l;
  });
})(q_);
const R4 = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, $4 = { class: "text-center mb-3" }, F4 = { class: "flex flex-row justify-center" }, V4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, G4 = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, j4 = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, U4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, B4 = ["href"], W4 = /* @__PURE__ */ he({
  __name: "expert-style-selector",
  setup(t) {
    const e = dt(), n = Kn(), r = Di(), { appliedStyle: i } = We(n), { t: s } = Xe();
    function a() {
      const u = i.value, f = JSON.stringify(u), c = new Blob([f], { type: "text/plain;charset=utf-8" }), h = "styles.json";
      q_.exports.saveAs(c, h);
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
      ) : `${Aa.mvtStylesGetUrl}?id=${n.styleSerial}`;
    }
    return (u, f) => (A(), V("div", R4, [
      C("h5", $4, ae(M(s)("Lancer \xE9diteur externe ou importer json")), 1),
      C("div", F4, [
        C("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          C("span", V4, ae(M(s)("Download style")), 1)
        ]),
        C("div", G4, [
          C("label", j4, [
            C("span", U4, ae(M(s)("Upload style")), 1)
          ]),
          C("input", {
            class: "invisible",
            type: "file",
            name: "uploadMvtStyle",
            id: "uploadMvtStyle",
            onChange: o
          }, null, 32)
        ])
      ]),
      C("a", {
        href: `https://maputnik.github.io/editor/?style=${l()}`,
        target: "_blank",
        class: "lux-btn text-center"
      }, ae(M(s)("Open Maputnik editor")), 9, B4)
    ]));
  }
}), q4 = /* @__PURE__ */ de(W4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/expert-style-selector.vue"]]), H4 = { key: 0 }, z4 = {
  key: 0,
  class: "mb-px"
}, Y4 = {
  key: 1,
  class: "mb-px"
}, X4 = {
  key: 2,
  class: "mb-px"
}, K4 = /* @__PURE__ */ he({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Xe(), n = dt(), r = _t(), i = Kn(), { bgStyle: s, isExpertStyleActive: a } = We(i), { bgLayer: o } = We(n), l = Di(), u = fe(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    tt(o, (h) => {
      l.isLayerStyleEditable(h) || r.closeStyleEditorPanel();
    });
    let f = _e(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => u.value.isEditable ? (A(), V("div", H4, [
      u.value.hasSimpleStyle ? (A(), V("div", z4, [
        ee(Ul, {
          title: M(e)("Simple"),
          expanded: M(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => Ye(f) ? f.value = M(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = M(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: bi(() => [
            ee(S4)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasAdvancedStyle ? (A(), V("div", Y4, [
        ee(Ul, {
          title: M(e)("Medium"),
          expanded: M(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => Ye(f) ? f.value = M(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = M(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: bi(() => [
            M(o) ? (A(), Fe(I4, {
              key: 0,
              layer: M(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasExpertStyle ? (A(), V("div", X4, [
        ee(Ul, {
          title: M(e)("Expert (style.json)"),
          expanded: M(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => Ye(f) ? f.value = M(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = M(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: bi(() => [
            M(o) ? (A(), Fe(q4, {
              key: 0,
              layer: M(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      M(s) || M(a) ? (A(), V("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, ae(M(e)("Reset style", { ns: "client" })), 1)) : F("v-if", !0)
    ])) : F("v-if", !0);
  }
}), Z4 = /* @__PURE__ */ de(K4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/style-selector.vue"]]);
function uh(t) {
  return uh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uh(t);
}
function H_() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : uh(XMLHttpRequest)) === "object";
}
function J4(t) {
  return !!t && typeof t.then == "function";
}
function Q4(t) {
  return J4(t) ? t : Promise.resolve(t);
}
function e6(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ku = { exports: {} }, Sl = { exports: {} }, xg;
function t6() {
  return xg || (xg = 1, function(t, e) {
    var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof lr < "u" && lr, r = function() {
      function s() {
        this.fetch = !1, this.DOMException = n.DOMException;
      }
      return s.prototype = n, new s();
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
        function v(T) {
          if (T.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          T.bodyUsed = !0;
        }
        function y(T) {
          return new Promise(function($, z) {
            T.onload = function() {
              $(T.result);
            }, T.onerror = function() {
              z(T.error);
            };
          });
        }
        function g(T) {
          var $ = new FileReader(), z = y($);
          return $.readAsArrayBuffer(T), z;
        }
        function E(T) {
          var $ = new FileReader(), z = y($);
          return $.readAsText(T), z;
        }
        function b(T) {
          for (var $ = new Uint8Array(T), z = new Array($.length), K = 0; K < $.length; K++)
            z[K] = String.fromCharCode($[K]);
          return z.join("");
        }
        function w(T) {
          if (T.slice)
            return T.slice(0);
          var $ = new Uint8Array(T.byteLength);
          return $.set(new Uint8Array(T)), $.buffer;
        }
        function N() {
          return this.bodyUsed = !1, this._initBody = function(T) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = T, T ? typeof T == "string" ? this._bodyText = T : l.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : l.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : l.arrayBuffer && l.blob && u(T) ? (this._bodyArrayBuffer = w(T.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || c(T)) ? this._bodyArrayBuffer = w(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "", this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, l.blob && (this.blob = function() {
            var T = v(this);
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
              var T = v(this);
              return T || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else
              return this.blob().then(g);
          }), this.text = function() {
            var T = v(this);
            if (T)
              return T;
            if (this._bodyBlob)
              return E(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(b(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, l.formData && (this.formData = function() {
            return this.text().then(L);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var O = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function R(T) {
          var $ = T.toUpperCase();
          return O.indexOf($) > -1 ? $ : T;
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
          if (this.credentials = $.credentials || this.credentials || "same-origin", ($.headers || !this.headers) && (this.headers = new m($.headers)), this.method = R($.method || this.method || "GET"), this.mode = $.mode || this.mode || null, this.signal = $.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && z)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(z), (this.method === "GET" || this.method === "HEAD") && ($.cache === "no-store" || $.cache === "no-cache")) {
            var K = /([?&])_=[^&]*/;
            if (K.test(this.url))
              this.url = this.url.replace(K, "$1_=" + new Date().getTime());
            else {
              var Le = /\?/;
              this.url += (Le.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
        D.prototype.clone = function() {
          return new D(this, { body: this._bodyInit });
        };
        function L(T) {
          var $ = new FormData();
          return T.trim().split("&").forEach(function(z) {
            if (z) {
              var K = z.split("="), Le = K.shift().replace(/\+/g, " "), Ae = K.join("=").replace(/\+/g, " ");
              $.append(decodeURIComponent(Le), decodeURIComponent(Ae));
            }
          }), $;
        }
        function P(T) {
          var $ = new m(), z = T.replace(/\r?\n[\t ]+/g, " ");
          return z.split("\r").map(function(K) {
            return K.indexOf(`
`) === 0 ? K.substr(1, K.length) : K;
          }).forEach(function(K) {
            var Le = K.split(":"), Ae = Le.shift().trim();
            if (Ae) {
              var pt = Le.join(":").trim();
              $.append(Ae, pt);
            }
          }), $;
        }
        N.call(D.prototype);
        function I(T, $) {
          if (!(this instanceof I))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ || ($ = {}), this.type = "default", this.status = $.status === void 0 ? 200 : $.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = $.statusText === void 0 ? "" : "" + $.statusText, this.headers = new m($.headers), this.url = $.url || "", this._initBody(T);
        }
        N.call(I.prototype), I.prototype.clone = function() {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, I.error = function() {
          var T = new I(null, { status: 0, statusText: "" });
          return T.type = "error", T;
        };
        var J = [301, 302, 303, 307, 308];
        I.redirect = function(T, $) {
          if (J.indexOf($) === -1)
            throw new RangeError("Invalid status code");
          return new I(null, { status: $, headers: { location: T } });
        }, a.DOMException = o.DOMException;
        try {
          new a.DOMException();
        } catch {
          a.DOMException = function($, z) {
            this.message = $, this.name = z;
            var K = Error($);
            this.stack = K.stack;
          }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException;
        }
        function pe(T, $) {
          return new Promise(function(z, K) {
            var Le = new D(T, $);
            if (Le.signal && Le.signal.aborted)
              return K(new a.DOMException("Aborted", "AbortError"));
            var Ae = new XMLHttpRequest();
            function pt() {
              Ae.abort();
            }
            Ae.onload = function() {
              var Te = {
                status: Ae.status,
                statusText: Ae.statusText,
                headers: P(Ae.getAllResponseHeaders() || "")
              };
              Te.url = "responseURL" in Ae ? Ae.responseURL : Te.headers.get("X-Request-URL");
              var Lt = "response" in Ae ? Ae.response : Ae.responseText;
              setTimeout(function() {
                z(new I(Lt, Te));
              }, 0);
            }, Ae.onerror = function() {
              setTimeout(function() {
                K(new TypeError("Network request failed"));
              }, 0);
            }, Ae.ontimeout = function() {
              setTimeout(function() {
                K(new TypeError("Network request failed"));
              }, 0);
            }, Ae.onabort = function() {
              setTimeout(function() {
                K(new a.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function Rt(Te) {
              try {
                return Te === "" && o.location.href ? o.location.href : Te;
              } catch {
                return Te;
              }
            }
            Ae.open(Le.method, Rt(Le.url), !0), Le.credentials === "include" ? Ae.withCredentials = !0 : Le.credentials === "omit" && (Ae.withCredentials = !1), "responseType" in Ae && (l.blob ? Ae.responseType = "blob" : l.arrayBuffer && Le.headers.get("Content-Type") && Le.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (Ae.responseType = "arraybuffer")), $ && typeof $.headers == "object" && !($.headers instanceof m) ? Object.getOwnPropertyNames($.headers).forEach(function(Te) {
              Ae.setRequestHeader(Te, d($.headers[Te]));
            }) : Le.headers.forEach(function(Te, Lt) {
              Ae.setRequestHeader(Lt, Te);
            }), Le.signal && (Le.signal.addEventListener("abort", pt), Ae.onreadystatechange = function() {
              Ae.readyState === 4 && Le.signal.removeEventListener("abort", pt);
            }), Ae.send(typeof Le._bodyInit > "u" ? null : Le._bodyInit);
          });
        }
        return pe.polyfill = !0, o.fetch || (o.fetch = pe, o.Headers = m, o.Request = D, o.Response = I), a.Headers = m, a.Request = D, a.Response = I, a.fetch = pe, a;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = n.fetch ? n : r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(Sl, Sl.exports)), Sl.exports;
}
(function(t, e) {
  var n;
  if (typeof fetch == "function" && (typeof lr < "u" && lr.fetch ? n = lr.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof e6 < "u" && typeof window > "u") {
    var r = n || t6();
    r.default && (r = r.default), e.default = r, t.exports = e.default;
  }
})(ku, ku.exports);
const z_ = ku.exports, Og = /* @__PURE__ */ Tb({
  __proto__: null,
  default: z_
}, [ku.exports]);
function Mg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mg(Object(n), !0).forEach(function(r) {
      n6(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function n6(t, e, n) {
  return e = r6(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function r6(t) {
  var e = i6(t, "string");
  return gs(e) == "symbol" ? e : String(e);
}
function i6(t, e) {
  if (gs(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (gs(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function gs(t) {
  return gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gs(t);
}
var Ur;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? Ur = global.fetch : typeof window < "u" && window.fetch ? Ur = window.fetch : Ur = fetch);
var go;
H_() && (typeof global < "u" && global.XMLHttpRequest ? go = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (go = window.XMLHttpRequest));
var Iu;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Iu = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Iu = window.ActiveXObject));
!Ur && Og && !go && !Iu && (Ur = z_ || Og);
typeof Ur != "function" && (Ur = void 0);
var ch = function(e, n) {
  if (n && gs(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, Ng = function(e, n, r, i) {
  var s = function(l) {
    if (!l.ok)
      return r(l.statusText || "Error", {
        status: l.status
      });
    l.text().then(function(u) {
      r(null, {
        status: l.status,
        data: u
      });
    }).catch(r);
  };
  if (i) {
    var a = i(e, n);
    if (a instanceof Promise) {
      a.then(s).catch(r);
      return;
    }
  }
  typeof fetch == "function" ? fetch(e, n).then(s).catch(r) : Ur(e, n).then(s).catch(r);
}, Lg = !1, s6 = function(e, n, r, i) {
  e.queryStringParams && (n = ch(n, e.queryStringParams));
  var s = Tg({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = Tg({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: s
  }, Lg ? {} : a), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    Ng(n, o, i, l);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(f) {
        delete o[f];
      }), Ng(n, o, i, l), Lg = !0;
    } catch (f) {
      i(f);
    }
  }
}, a6 = function(e, n, r, i) {
  r && gs(r) === "object" && (r = ch("", r).slice(1)), e.queryStringParams && (n = ch(n, e.queryStringParams));
  try {
    var s;
    go ? s = new go() : s = new Iu("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", n, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
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
}, o6 = function(e, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, Ur && n.indexOf("file:") !== 0)
    return s6(e, n, r, i);
  if (H_() || typeof ActiveXObject == "function")
    return a6(e, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function yo(t) {
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yo(t);
}
function Cg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function uf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Cg(Object(n), !0).forEach(function(r) {
      Y_(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Cg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function l6(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ag(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, X_(r.key), r);
  }
}
function u6(t, e, n) {
  return e && Ag(t.prototype, e), n && Ag(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Y_(t, e, n) {
  return e = X_(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function X_(t) {
  var e = c6(t, "string");
  return yo(e) == "symbol" ? e : String(e);
}
function c6(t, e) {
  if (yo(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (yo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var f6 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return Y_({}, r, i || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: o6,
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
}, K_ = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    l6(this, t), this.services = e, this.options = n, this.allOptions = r, this.type = "backend", this.init(e, n, r);
  }
  return u6(t, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = uf(uf(uf({}, f6()), this.options || {}), i), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
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
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, i)), l = Q4(l), l.then(function(u) {
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
      var a = this, o = typeof i == "string" ? [i] : i, l = typeof s == "string" ? [s] : s, u = this.options.parseLoadPayload(o, l);
      this.options.request(this.options, n, u, function(f, c) {
        if (c && (c.status >= 500 && c.status < 600 || !c.status))
          return r("failed loading " + n + "; status code: " + c.status, !0);
        if (c && c.status >= 400 && c.status < 500)
          return r("failed loading " + n + "; status code: " + c.status, !1);
        if (!c && f && f.message && f.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + n + ": " + f.message, !0);
        if (f)
          return r(f, !1);
        var h, d;
        try {
          typeof c.data == "string" ? h = a.options.parse(c.data, i, s) : h = c.data;
        } catch {
          d = "failed parsing " + n + " to json";
        }
        if (d)
          return r(d, !1);
        r(null, h);
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
          var p = o.services.interpolator.interpolate(d, {
            lng: h,
            ns: r
          });
          o.options.request(o.options, p, l, function(m, v) {
            u += 1, f.push(m), c.push(v), u === n.length && typeof a == "function" && a(f, c);
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
K_.type = "backend";
function Z_(t, e, n) {
  n(t, e) && t instanceof Mb && t.getLayers().forEach((i) => {
    Z_(i, [...e, t], n);
  });
}
const h6 = { class: "h-screen flex flex-col overflow-hidden" }, d6 = { class: "flex grow" }, p6 = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, m6 = {
  key: 1,
  class: "w-80 bg-primary"
}, g6 = { class: "map-wrapper grow bg-blue-100 relative" }, y6 = { class: "absolute right-1 top-16" }, v6 = /* @__PURE__ */ he({
  __name: "App",
  setup(t) {
    const e = _t(), n = Di();
    h4.bootstrap(), i4.bootstrap(), l4.bootstrap(), c4.bootstrapLayersOpen(), r_.bootstrapStyle(), n4.bootstrap(), n.initBackgroundsConfigs();
    const { layersOpen: r, styleEditorOpen: i } = We(e);
    tt(
      r,
      () => setTimeout(() => {
        s();
      }, 50)
    ), _n(() => window.addEventListener("resize", s)), Ai(() => window.removeEventListener("resize", s));
    function s() {
      const a = Fr().getOlMap();
      a.updateSize(), Z_(a.getLayerGroup(), [], (o) => (o instanceof f_ && o.getMapLibreMap().resize(), !0));
    }
    return (a, o) => (A(), V("div", h6, [
      ee(vI),
      C("main", d6, [
        F(" Layer panel "),
        M(r) ? (A(), V("div", p6, [
          ee(VR)
        ])) : F("v-if", !0),
        F(" Style editor "),
        M(i) ? (A(), V("div", m6, [
          ee(Z4)
        ])) : F("v-if", !0),
        F(" Map container and slider comparator "),
        C("div", g6, [
          ee(yP, { v4_standalone: !0 }),
          ee(KR, { class: "absolute top-0" }),
          ee(dk),
          ee(rI)
        ]),
        F(" Background selector "),
        C("div", y6, [
          ee(SP)
        ])
      ]),
      ee(RI, { class: "fixed bottom-5 sm:static z-20" }),
      ee(WN)
    ]));
  }
}), _6 = /* @__PURE__ */ de(v6, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/App.vue"]]);
kN();
lt.use(K_);
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
const ud = VS(_6);
ud.use(zw());
ud.use(I2, { i18next: lt });
ud.use(Sw);
const K6 = (t = {}, e = null) => IN(
  {
    setup: () => {
      const n = wo();
      Object.assign(n.appContext, e._context), Object.assign(n.provides, e._context.provides);
    },
    render: () => iv(t)
  },
  { shadowRoot: !1 }
);
export {
  WN as AlertNotifications,
  _6 as App,
  SP as BackgroundSelector,
  Hv as DropdownList,
  RI as FooterBar,
  vI as HeaderBar,
  I2 as I18NextVue,
  rI as LayerMetadata,
  VR as LayerPanel,
  yP as MapContainer,
  f_ as MapLibreLayer,
  dk as RemoteLayers,
  KR as SliderComparator,
  Z4 as StyleSelector,
  CI as ToolbarDraw,
  Sw as VueDOMPurifyHTML,
  ud as app,
  K_ as backend,
  Y6 as clearLayersCache,
  K6 as createElementInstance,
  zw as createPinia,
  IN as defineCustomElement,
  lt as i18next,
  aa as proxyUrlHelper,
  n4 as statePersistorBgLayerService,
  c4 as statePersistorLayersOpenService,
  i4 as statePersistorLayersService,
  h4 as statePersistorMyMapService,
  r_ as statePersistorStyleService,
  l4 as statePersistorThemeService,
  We as storeToRefs,
  Aa as styleUrlHelper,
  cI as themeSelectorService,
  _t as useAppStore,
  p_ as useBackgroundLayer,
  An as useLayers,
  Fr as useMap,
  dt as useMapStore,
  Di as useMvtStyles,
  ms as useOffline,
  X6 as useOfflineLayers,
  d_ as useOpenLayers,
  Kn as useStyleStore,
  Zt as useThemeStore,
  ls as useThemes,
  tt as watch
};
