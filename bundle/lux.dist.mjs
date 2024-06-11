var K_ = Object.defineProperty;
var Z_ = (t, e, n) => e in t ? K_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Qe = (t, e, n) => (Z_(t, typeof e != "symbol" ? e + "" : e, n), n);
import { get as bl, transformExtent as J_, getTransform as Q_, transform as gd } from "ol/proj";
import { register as eb } from "ol/proj/proj4";
import tb from "ol/Map";
import nb from "ol/View";
import rb from "ol/layer/Image";
import Tg from "ol/source/ImageWMS";
import ib from "ol/layer/Tile";
import Ng from "ol/source/WMTS";
import sb from "ol/tilegrid/WMTS";
import { getTopLeft as ab } from "ol/extent";
import ob from "ol/layer/Layer";
import { toDegrees as lb } from "ol/math";
import { toLonLat as ub } from "ol/proj.js";
import yd from "mapbox-gl";
import * as vd from "ol/events";
import cb from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as Cg, CLASS_CONTROL as Lg } from "ol/css";
import Pg from "ol/control/Control";
import fb from "ol/control/FullScreen";
import hb from "ol/control/Zoom";
import db from "ol/control/ZoomToExtent";
import mb from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as Go } from "ol/render";
import { unByKey as pb } from "ol/Observable";
import _d from "ol/render/EventType";
import gb from "ol/layer/Group.js";
function yb(t, e) {
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
function qr(t, e) {
  const n = new Set(t.split(","));
  return e ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const Ke = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, js = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], yt = () => {
}, vb = () => !1, po = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ql = (t) => t.startsWith("onUpdate:"), et = Object.assign, lh = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, _b = Object.prototype.hasOwnProperty, ke = (t, e) => _b.call(t, e), le = Array.isArray, es = (t) => Du(t) === "[object Map]", Ag = (t) => Du(t) === "[object Set]", me = (t) => typeof t == "function", it = (t) => typeof t == "string", gs = (t) => typeof t == "symbol", Be = (t) => t !== null && typeof t == "object", uh = (t) => (Be(t) || me(t)) && me(t.then) && me(t.catch), kg = Object.prototype.toString, Du = (t) => kg.call(t), ch = (t) => Du(t).slice(8, -1), Dg = (t) => Du(t) === "[object Object]", fh = (t) => it(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Da = /* @__PURE__ */ qr(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bb = /* @__PURE__ */ qr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Iu = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Eb = /-(\w)/g, gn = Iu((t) => t.replace(Eb, (e, n) => n ? n.toUpperCase() : "")), Sb = /\B([A-Z])/g, un = Iu(
  (t) => t.replace(Sb, "-$1").toLowerCase()
), us = Iu((t) => t.charAt(0).toUpperCase() + t.slice(1)), zi = Iu((t) => t ? `on${us(t)}` : ""), xi = (t, e) => !Object.is(t, e), ha = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Ig = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, wb = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, lf = (t) => {
  const e = it(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let bd;
const Ru = () => bd || (bd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ci(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = it(r) ? Tb(r) : Ci(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (it(t) || Be(t))
    return t;
}
const xb = /;(?![^(]*\))/g, Ob = /:([^]+)/, Mb = /\/\*[^]*?\*\//g;
function Tb(t) {
  const e = {};
  return t.replace(Mb, "").split(xb).forEach((n) => {
    if (n) {
      const r = n.split(Ob);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Ae(t) {
  let e = "";
  if (it(t))
    e = t;
  else if (le(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ae(t[n]);
      r && (e += r + " ");
    }
  else if (Be(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Nb = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Cb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Lb = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Pb = /* @__PURE__ */ qr(Nb), Ab = /* @__PURE__ */ qr(Cb), kb = /* @__PURE__ */ qr(Lb), Db = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ib = /* @__PURE__ */ qr(Db);
function Rg(t) {
  return !!t || t === "";
}
const oe = (t) => it(t) ? t : t == null ? "" : le(t) || Be(t) && (t.toString === kg || !me(t.toString)) ? JSON.stringify(t, $g, 2) : String(t), $g = (t, e) => e && e.__v_isRef ? $g(t, e.value) : es(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[fc(r, s) + " =>"] = i, n),
    {}
  )
} : Ag(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => fc(n))
} : gs(e) ? fc(e) : Be(e) && !le(e) && !Dg(e) ? String(e) : e, fc = (t, e = "") => {
  var n;
  return gs(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
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
class Fg {
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
function Vg(t) {
  return new Fg(t);
}
function Rb(t, e = dn) {
  e && e.active && e.effects.push(t);
}
function Gg() {
  return dn;
}
function $b(t) {
  dn ? dn.cleanups.push(t) : process.env.NODE_ENV !== "production" && vr(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let ts;
class hh {
  constructor(e, n, r, i) {
    this.fn = e, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Rb(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Hr();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Fb(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), zr();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = yi, n = ts;
    try {
      return yi = !0, ts = this, this._runnings++, Ed(this), this.fn();
    } finally {
      Sd(this), this._runnings--, ts = n, yi = e;
    }
  }
  stop() {
    var e;
    this.active && (Ed(this), Sd(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Fb(t) {
  return t.value;
}
function Ed(t) {
  t._trackId++, t._depsLength = 0;
}
function Sd(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      jg(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function jg(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let yi = !0, uf = 0;
const Ug = [];
function Hr() {
  Ug.push(yi), yi = !1;
}
function zr() {
  const t = Ug.pop();
  yi = t === void 0 ? !0 : t;
}
function dh() {
  uf++;
}
function mh() {
  for (uf--; !uf && cf.length; )
    cf.shift()();
}
function Bg(t, e, n) {
  var r;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && jg(i, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((r = t.onTrack) == null || r.call(t, et({ effect: t }, n)));
  }
}
const cf = [];
function Wg(t, e, n) {
  var r;
  dh();
  for (const i of t.keys()) {
    let s;
    i._dirtyLevel < e && (s != null ? s : s = t.get(i) === i._trackId) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (s != null ? s : s = t.get(i) === i._trackId) && (process.env.NODE_ENV !== "production" && ((r = i.onTrigger) == null || r.call(i, et({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && cf.push(i.scheduler)));
  }
  mh();
}
const qg = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Hl = /* @__PURE__ */ new WeakMap(), ns = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ff = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function It(t, e, n) {
  if (yi && ts) {
    let r = Hl.get(t);
    r || Hl.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = qg(() => r.delete(n))), Bg(
      ts,
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
  const a = Hl.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (n === "length" && le(t)) {
    const l = Number(r);
    a.forEach((u, f) => {
      (f === "length" || !gs(f) && f >= l) && o.push(u);
    });
  } else
    switch (n !== void 0 && o.push(a.get(n)), e) {
      case "add":
        le(t) ? fh(n) && o.push(a.get("length")) : (o.push(a.get(ns)), es(t) && o.push(a.get(ff)));
        break;
      case "delete":
        le(t) || (o.push(a.get(ns)), es(t) && o.push(a.get(ff)));
        break;
      case "set":
        es(t) && o.push(a.get(ns));
        break;
    }
  dh();
  for (const l of o)
    l && Wg(
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
  mh();
}
function Vb(t, e) {
  var n;
  return (n = Hl.get(t)) == null ? void 0 : n.get(e);
}
const Gb = /* @__PURE__ */ qr("__proto__,__v_isRef,__isVue"), Hg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(gs)
), wd = /* @__PURE__ */ jb();
function jb() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = _e(this);
      for (let s = 0, a = this.length; s < a; s++)
        It(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(_e)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Hr(), dh();
      const r = _e(this)[e].apply(this, n);
      return mh(), zr(), r;
    };
  }), t;
}
function Ub(t) {
  gs(t) || (t = String(t));
  const e = _e(this);
  return It(e, "has", t), e.hasOwnProperty(t);
}
class zg {
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
      return r === (i ? s ? ey : Qg : s ? Jg : Zg).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = le(e);
    if (!i) {
      if (a && ke(wd, n))
        return Reflect.get(wd, n, r);
      if (n === "hasOwnProperty")
        return Ub;
    }
    const o = Reflect.get(e, n, r);
    return (gs(n) ? Hg.has(n) : Gb(n)) || (i || It(e, "get", n), s) ? o : Ye(o) ? a && fh(n) ? o : o.value : Be(o) ? i ? ty(o) : Vu(o) : o;
  }
}
class Yg extends zg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._isShallow) {
      const l = cs(s);
      if (!rs(r) && !cs(r) && (s = _e(s), r = _e(r)), !le(e) && Ye(s) && !Ye(r))
        return l ? !1 : (s.value = r, !0);
    }
    const a = le(e) && fh(n) ? Number(n) < e.length : ke(e, n), o = Reflect.set(e, n, r, i);
    return e === _e(i) && (a ? xi(r, s) && fr(e, "set", n, r, s) : fr(e, "add", n, r)), o;
  }
  deleteProperty(e, n) {
    const r = ke(e, n), i = e[n], s = Reflect.deleteProperty(e, n);
    return s && r && fr(e, "delete", n, void 0, i), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!gs(n) || !Hg.has(n)) && It(e, "has", n), r;
  }
  ownKeys(e) {
    return It(
      e,
      "iterate",
      le(e) ? "length" : ns
    ), Reflect.ownKeys(e);
  }
}
class Xg extends zg {
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
const Bb = /* @__PURE__ */ new Yg(), Wb = /* @__PURE__ */ new Xg(), qb = /* @__PURE__ */ new Yg(
  !0
), Hb = /* @__PURE__ */ new Xg(!0), ph = (t) => t, $u = (t) => Reflect.getPrototypeOf(t);
function jo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = _e(t), s = _e(e);
  n || (xi(e, s) && It(i, "get", e), It(i, "get", s));
  const { has: a } = $u(i), o = r ? ph : n ? gh : Ja;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function Uo(t, e = !1) {
  const n = this.__v_raw, r = _e(n), i = _e(t);
  return e || (xi(t, i) && It(r, "has", t), It(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Bo(t, e = !1) {
  return t = t.__v_raw, !e && It(_e(t), "iterate", ns), Reflect.get(t, "size", t);
}
function xd(t) {
  t = _e(t);
  const e = _e(this);
  return $u(e).has.call(e, t) || (e.add(t), fr(e, "add", t, t)), this;
}
function Od(t, e) {
  e = _e(e);
  const n = _e(this), { has: r, get: i } = $u(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && Kg(n, r, t) : (t = _e(t), s = r.call(n, t));
  const a = i.call(n, t);
  return n.set(t, e), s ? xi(e, a) && fr(n, "set", t, e, a) : fr(n, "add", t, e), this;
}
function Md(t) {
  const e = _e(this), { has: n, get: r } = $u(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && Kg(e, n, t) : (t = _e(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, a = e.delete(t);
  return i && fr(e, "delete", t, void 0, s), a;
}
function Td() {
  const t = _e(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? es(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && fr(t, "clear", void 0, void 0, n), r;
}
function Wo(t, e) {
  return function(r, i) {
    const s = this, a = s.__v_raw, o = _e(a), l = e ? ph : t ? gh : Ja;
    return !t && It(o, "iterate", ns), a.forEach((u, f) => r.call(i, l(u), l(f), s));
  };
}
function qo(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = _e(i), a = es(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...r), f = n ? ph : e ? gh : Ja;
    return !e && It(
      s,
      "iterate",
      l ? ff : ns
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
function Zr(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      vr(
        `${us(t)} operation ${n}failed: target is readonly.`,
        _e(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function zb() {
  const t = {
    get(s) {
      return jo(this, s);
    },
    get size() {
      return Bo(this);
    },
    has: Uo,
    add: xd,
    set: Od,
    delete: Md,
    clear: Td,
    forEach: Wo(!1, !1)
  }, e = {
    get(s) {
      return jo(this, s, !1, !0);
    },
    get size() {
      return Bo(this);
    },
    has: Uo,
    add: xd,
    set: Od,
    delete: Md,
    clear: Td,
    forEach: Wo(!1, !0)
  }, n = {
    get(s) {
      return jo(this, s, !0);
    },
    get size() {
      return Bo(this, !0);
    },
    has(s) {
      return Uo.call(this, s, !0);
    },
    add: Zr("add"),
    set: Zr("set"),
    delete: Zr("delete"),
    clear: Zr("clear"),
    forEach: Wo(!0, !1)
  }, r = {
    get(s) {
      return jo(this, s, !0, !0);
    },
    get size() {
      return Bo(this, !0);
    },
    has(s) {
      return Uo.call(this, s, !0);
    },
    add: Zr("add"),
    set: Zr("set"),
    delete: Zr("delete"),
    clear: Zr("clear"),
    forEach: Wo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = qo(s, !1, !1), n[s] = qo(s, !0, !1), e[s] = qo(s, !1, !0), r[s] = qo(
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
  Yb,
  Xb,
  Kb,
  Zb
] = /* @__PURE__ */ zb();
function Fu(t, e) {
  const n = e ? t ? Zb : Kb : t ? Xb : Yb;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    ke(n, i) && i in r ? n : r,
    i,
    s
  );
}
const Jb = {
  get: /* @__PURE__ */ Fu(!1, !1)
}, Qb = {
  get: /* @__PURE__ */ Fu(!1, !0)
}, e1 = {
  get: /* @__PURE__ */ Fu(!0, !1)
}, t1 = {
  get: /* @__PURE__ */ Fu(!0, !0)
};
function Kg(t, e, n) {
  const r = _e(n);
  if (r !== n && e.call(t, r)) {
    const i = ch(t);
    vr(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Zg = /* @__PURE__ */ new WeakMap(), Jg = /* @__PURE__ */ new WeakMap(), Qg = /* @__PURE__ */ new WeakMap(), ey = /* @__PURE__ */ new WeakMap();
function n1(t) {
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
function r1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : n1(ch(t));
}
function Vu(t) {
  return cs(t) ? t : Gu(
    t,
    !1,
    Bb,
    Jb,
    Zg
  );
}
function i1(t) {
  return Gu(
    t,
    !1,
    qb,
    Qb,
    Jg
  );
}
function ty(t) {
  return Gu(
    t,
    !0,
    Wb,
    e1,
    Qg
  );
}
function Rr(t) {
  return Gu(
    t,
    !0,
    Hb,
    t1,
    ey
  );
}
function Gu(t, e, n, r, i) {
  if (!Be(t))
    return process.env.NODE_ENV !== "production" && vr(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = r1(t);
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
function rs(t) {
  return !!(t && t.__v_isShallow);
}
function zl(t) {
  return t ? !!t.__v_raw : !1;
}
function _e(t) {
  const e = t && t.__v_raw;
  return e ? _e(e) : t;
}
function mi(t) {
  return Object.isExtensible(t) && Ig(t, "__v_skip", !0), t;
}
const Ja = (t) => Be(t) ? Vu(t) : t, gh = (t) => Be(t) ? ty(t) : t, s1 = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class ny {
  constructor(e, n, r, i) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new hh(
      () => e(this._value),
      () => El(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = _e(this);
    return (!e._cacheable || e.effect.dirty) && xi(e._value, e._value = e.effect.run()) && El(e, 4), ry(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && vr(s1, `

getter: `, this.getter), El(e, 2)), e._value;
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
function a1(t, e, n = !1) {
  let r, i;
  const s = me(t);
  s ? (r = t, i = process.env.NODE_ENV !== "production" ? () => {
    vr("Write operation failed: computed value is readonly");
  } : yt) : (r = t.get, i = t.set);
  const a = new ny(r, i, s || !i, n);
  return process.env.NODE_ENV !== "production" && e && !n && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
function ry(t) {
  var e;
  yi && ts && (t = _e(t), Bg(
    ts,
    (e = t.dep) != null ? e : t.dep = qg(
      () => t.dep = void 0,
      t instanceof ny ? t : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function El(t, e = 4, n) {
  t = _e(t);
  const r = t.dep;
  r && Wg(
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
function we(t) {
  return iy(t, !1);
}
function rt(t) {
  return iy(t, !0);
}
function iy(t, e) {
  return Ye(t) ? t : new o1(t, e);
}
class o1 {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : _e(e), this._value = n ? e : Ja(e);
  }
  get value() {
    return ry(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || rs(e) || cs(e);
    e = n ? e : _e(e), xi(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Ja(e), El(this, 4, e));
  }
}
function M(t) {
  return Ye(t) ? t.value : t;
}
const l1 = {
  get: (t, e, n) => M(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return Ye(i) && !Ye(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function sy(t) {
  return hr(t) ? t : new Proxy(t, l1);
}
function hf(t) {
  process.env.NODE_ENV !== "production" && !zl(t) && vr("toRefs() expects a reactive object but received a plain one.");
  const e = le(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = ay(t, n);
  return e;
}
class u1 {
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
    return Vb(_e(this._object), this._key);
  }
}
class c1 {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Sl(t, e, n) {
  return Ye(t) ? t : me(t) ? new c1(t) : Be(t) && arguments.length > 1 ? ay(t, e, n) : we(t);
}
function ay(t, e, n) {
  const r = t[e];
  return Ye(r) ? r : new u1(t, e, n);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const is = [];
function wl(t) {
  is.push(t);
}
function xl() {
  is.pop();
}
function q(t, ...e) {
  Hr();
  const n = is.length ? is[is.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = f1();
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
          ({ vnode: s }) => `at <${Hu(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...h1(i)), console.warn(...s);
  }
  zr();
}
function f1() {
  let t = is[is.length - 1];
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
function h1(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...d1(n));
  }), e;
}
function d1({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${Hu(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...m1(t.props), s] : [i + s];
}
function m1(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...oy(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function oy(t, e, n) {
  return it(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : Ye(e) ? (e = oy(t, _e(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : me(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = _e(e), n ? e : [`${t}=`, e]);
}
function p1(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? q(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && q(`${e} is NaN - the duration expression might be incorrect.`));
}
const yh = {
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
    go(i, e, n);
  }
}
function Cn(t, e, n, r) {
  if (me(t)) {
    const i = $r(t, e, n, r);
    return i && uh(i) && i.catch((s) => {
      go(s, e, n);
    }), i;
  }
  if (le(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++)
      i.push(Cn(t[s], e, n, r));
    return i;
  } else
    process.env.NODE_ENV !== "production" && q(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
    );
}
function go(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? yh[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Hr(), $r(
        l,
        null,
        10,
        [t, a, o]
      ), zr();
      return;
    }
  }
  g1(t, n, i, r);
}
function g1(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = yh[e];
    if (n && wl(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && xl(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Qa = !1, df = !1;
const Bt = [];
let sr = 0;
const Us = [];
let Dr = null, ii = 0;
const ly = /* @__PURE__ */ Promise.resolve();
let vh = null;
const y1 = 100;
function Yl(t) {
  const e = vh || ly;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function v1(t) {
  let e = sr + 1, n = Bt.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = Bt[r], s = eo(i);
    s < t || s === t && i.pre ? e = r + 1 : n = r;
  }
  return e;
}
function ju(t) {
  (!Bt.length || !Bt.includes(
    t,
    Qa && t.allowRecurse ? sr + 1 : sr
  )) && (t.id == null ? Bt.push(t) : Bt.splice(v1(t.id), 0, t), uy());
}
function uy() {
  !Qa && !df && (df = !0, vh = ly.then(hy));
}
function _1(t) {
  const e = Bt.indexOf(t);
  e > sr && Bt.splice(e, 1);
}
function cy(t) {
  le(t) ? Us.push(...t) : (!Dr || !Dr.includes(
    t,
    t.allowRecurse ? ii + 1 : ii
  )) && Us.push(t), uy();
}
function Nd(t, e, n = Qa ? sr + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); n < Bt.length; n++) {
    const r = Bt[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid || process.env.NODE_ENV !== "production" && _h(e, r))
        continue;
      Bt.splice(n, 1), n--, r();
    }
  }
}
function fy(t) {
  if (Us.length) {
    const e = [...new Set(Us)].sort(
      (n, r) => eo(n) - eo(r)
    );
    if (Us.length = 0, Dr) {
      Dr.push(...e);
      return;
    }
    for (Dr = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ii = 0; ii < Dr.length; ii++)
      process.env.NODE_ENV !== "production" && _h(t, Dr[ii]) || Dr[ii]();
    Dr = null, ii = 0;
  }
}
const eo = (t) => t.id == null ? 1 / 0 : t.id, b1 = (t, e) => {
  const n = eo(t) - eo(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function hy(t) {
  df = !1, Qa = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Bt.sort(b1);
  const e = process.env.NODE_ENV !== "production" ? (n) => _h(t, n) : yt;
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
    sr = 0, Bt.length = 0, fy(t), Qa = !1, vh = null, (Bt.length || Us.length) && hy(t);
  }
}
function _h(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > y1) {
      const r = e.ownerInstance, i = r && Ch(r.type);
      return go(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
let vi = !1;
const Ps = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ru().__VUE_HMR_RUNTIME__ = {
  createRecord: hc(dy),
  rerender: hc(w1),
  reload: hc(x1)
});
const fs = /* @__PURE__ */ new Map();
function E1(t) {
  const e = t.type.__hmrId;
  let n = fs.get(e);
  n || (dy(e, t.type), n = fs.get(e)), n.instances.add(t);
}
function S1(t) {
  fs.get(t.type.__hmrId).instances.delete(t);
}
function dy(t, e) {
  return fs.has(t) ? !1 : (fs.set(t, {
    initialDef: Ia(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ia(t) {
  return Zy(t) ? t.__vccOpts : t;
}
function w1(t, e) {
  const n = fs.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, Ia(r.type).render = e), r.renderCache = [], vi = !0, r.effect.dirty = !0, r.update(), vi = !1;
  }));
}
function x1(t, e) {
  const n = fs.get(t);
  if (!n)
    return;
  e = Ia(e), Cd(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = Ia(i.type);
    Ps.has(s) || (s !== n.initialDef && Cd(s, e), Ps.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Ps.add(s), i.ceReload(e.styles), Ps.delete(s)) : i.parent ? (i.parent.effect.dirty = !0, ju(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  cy(() => {
    for (const i of r)
      Ps.delete(
        Ia(i.type)
      );
  });
}
function Cd(t, e) {
  et(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function hc(t) {
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
let qn, Sa = [], mf = !1;
function yo(t, ...e) {
  qn ? qn.emit(t, ...e) : mf || Sa.push({ event: t, args: e });
}
function bh(t, e) {
  var n, r;
  qn = t, qn ? (qn.enabled = !0, Sa.forEach(({ event: i, args: s }) => qn.emit(i, ...s)), Sa = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    bh(s, e);
  }), setTimeout(() => {
    qn || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, mf = !0, Sa = []);
  }, 3e3)) : (mf = !0, Sa = []);
}
function O1(t, e) {
  yo("app:init", t, e, {
    Fragment: je,
    Text: _o,
    Comment: Nt,
    Static: Ol
  });
}
function M1(t) {
  yo("app:unmount", t);
}
const T1 = /* @__PURE__ */ Eh(
  "component:added"
), my = /* @__PURE__ */ Eh("component:updated"), N1 = /* @__PURE__ */ Eh(
  "component:removed"
), C1 = (t) => {
  qn && typeof qn.cleanupBuffer == "function" && !qn.cleanupBuffer(t) && N1(t);
};
/*! #__NO_SIDE_EFFECTS__ */
function Eh(t) {
  return (e) => {
    yo(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const L1 = /* @__PURE__ */ py(
  "perf:start"
), P1 = /* @__PURE__ */ py(
  "perf:end"
);
function py(t) {
  return (e, n, r) => {
    yo(t, e.appContext.app, e.uid, e, n, r);
  };
}
function A1(t, e, n) {
  yo(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function k1(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Ke;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [c]
    } = t;
    if (f)
      if (!(e in f))
        (!c || !(zi(e) in c)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${zi(e)}" prop.`
        );
      else {
        const h = f[e];
        me(h) && (h(...n) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = r[f] || Ke;
    h && (i = n.map((d) => it(d) ? d.trim() : d)), c && (i = n.map(wb));
  }
  if (process.env.NODE_ENV !== "production" && A1(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && r[zi(f)] && q(
      `Event "${f}" is emitted in component ${Hu(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${un(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = r[o = zi(e)] || r[o = zi(gn(e))];
  !l && s && (l = r[o = zi(un(e))]), l && Cn(
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
    t.emitted[o] = !0, Cn(
      u,
      t,
      6,
      i
    );
  }
}
function gy(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!me(t)) {
    const l = (u) => {
      const f = gy(u, e, !0);
      f && (o = !0, et(a, f));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Be(t) && r.set(t, null), null) : (le(s) ? s.forEach((l) => a[l] = null) : et(a, s), Be(t) && r.set(t, a), a);
}
function Uu(t, e) {
  return !t || !po(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ke(t, e[0].toLowerCase() + e.slice(1)) || ke(t, un(e)) || ke(t, e));
}
let ht = null, yy = null;
function Xl(t) {
  const e = ht;
  return ht = t, yy = t && t.type.__scopeId || null, e;
}
function _i(t, e = ht, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && qd(-1);
    const s = Xl(e);
    let a;
    try {
      a = t(...i);
    } finally {
      Xl(s), r._d && qd(1);
    }
    return process.env.NODE_ENV !== "production" && my(e), a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let pf = !1;
function Kl() {
  pf = !0;
}
function dc(t) {
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
    ctx: m,
    inheritAttrs: p
  } = t, g = Xl(t);
  let y, v;
  process.env.NODE_ENV !== "production" && (pf = !1);
  try {
    if (n.shapeFlag & 4) {
      const x = i || r, N = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(x, {
        get(O, P, k) {
          return q(
            `Property '${String(
              P
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(O, P, k);
        }
      }) : x;
      y = Wn(
        u.call(
          N,
          x,
          f,
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          d,
          h,
          m
        )
      ), v = o;
    } else {
      const x = e;
      process.env.NODE_ENV !== "production" && o === c && Kl(), y = Wn(
        x.length > 1 ? x(
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Kl(), o;
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : x(
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          null
        )
      ), v = e.props ? o : D1(o);
    }
  } catch (x) {
    Fa.length = 0, go(x, t, 1), y = ie(Nt);
  }
  let b = y, E;
  if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([b, E] = vy(y)), v && p !== !1) {
    const x = Object.keys(v), { shapeFlag: N } = b;
    if (x.length) {
      if (N & 7)
        s && x.some(ql) && (v = I1(
          v,
          s
        )), b = _r(b, v);
      else if (process.env.NODE_ENV !== "production" && !pf && b.type !== Nt) {
        const O = Object.keys(o), P = [], k = [];
        for (let C = 0, R = O.length; C < R; C++) {
          const I = O[C];
          po(I) ? ql(I) || P.push(I[2].toLowerCase() + I.slice(3)) : k.push(I);
        }
        k.length && q(
          `Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), P.length && q(
          `Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ld(b) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), b = _r(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ld(b) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), b.transition = n.transition), process.env.NODE_ENV !== "production" && E ? E(b) : y = b, Xl(g), y;
}
const vy = (t) => {
  const e = t.children, n = t.dynamicChildren, r = Sh(e, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return vy(r);
  } else
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, a = (o) => {
    e[i] = o, n && (s > -1 ? n[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...n, o]));
  };
  return [Wn(r), a];
};
function Sh(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (ea(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && e && n.patchFlag > 0 && n.patchFlag & 2048)
          return Sh(n.children);
      }
    } else
      return;
  }
  return n;
}
const D1 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || po(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, I1 = (t, e) => {
  const n = {};
  for (const r in t)
    (!ql(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Ld = (t) => t.shapeFlag & 7 || t.type === Nt;
function R1(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && vi || e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Pd(r, a, u) : !!a;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const h = f[c];
        if (a[h] !== r[h] && !Uu(u, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? Pd(r, a, u) : !0 : !!a;
  return !1;
}
function Pd(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Uu(n, s))
      return !0;
  }
  return !1;
}
function $1({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const gf = "components", F1 = "directives";
function V1(t, e) {
  return _y(gf, t, !0, e) || t;
}
const G1 = Symbol.for("v-ndc");
function wh(t) {
  return _y(F1, t);
}
function _y(t, e, n = !0, r = !1) {
  const i = ht || St;
  if (i) {
    const s = i.type;
    if (t === gf) {
      const o = Ch(
        s,
        !1
      );
      if (o && (o === e || o === gn(e) || o === us(gn(e))))
        return s;
    }
    const a = Ad(i[t] || s[t], e) || Ad(i.appContext[t], e);
    if (!a && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !a) {
      const o = t === gf ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      q(`Failed to resolve ${t.slice(0, -1)}: ${e}${o}`);
    }
    return a;
  } else
    process.env.NODE_ENV !== "production" && q(
      `resolve${us(t.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Ad(t, e) {
  return t && (t[e] || t[gn(e)] || t[us(gn(e))]);
}
const j1 = (t) => t.__isSuspense;
function U1(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : cy(t);
}
const B1 = Symbol.for("v-scx"), W1 = () => {
  {
    const t = Ws(B1);
    return t || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function vn(t, e) {
  return xh(t, null, e);
}
const Ho = {};
function tt(t, e, n) {
  return process.env.NODE_ENV !== "production" && !me(e) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xh(t, e, n);
}
function xh(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  once: s,
  onTrack: a,
  onTrigger: o
} = Ke) {
  if (e && s) {
    const O = e;
    e = (...P) => {
      O(...P), N();
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
  }, u = St, f = (O) => r === !0 ? O : Zi(O, r === !1 ? 1 : void 0);
  let c, h = !1, d = !1;
  if (Ye(t) ? (c = () => t.value, h = rs(t)) : hr(t) ? (c = () => f(t), h = !0) : le(t) ? (d = !0, h = t.some((O) => hr(O) || rs(O)), c = () => t.map((O) => {
    if (Ye(O))
      return O.value;
    if (hr(O))
      return f(O);
    if (me(O))
      return $r(O, u, 2);
    process.env.NODE_ENV !== "production" && l(O);
  })) : me(t) ? e ? c = () => $r(t, u, 2) : c = () => (m && m(), Cn(
    t,
    u,
    3,
    [p]
  )) : (c = yt, process.env.NODE_ENV !== "production" && l(t)), e && r) {
    const O = c;
    c = () => Zi(O());
  }
  let m, p = (O) => {
    m = E.onStop = () => {
      $r(O, u, 4), m = E.onStop = void 0;
    };
  }, g;
  if (Wu)
    if (p = yt, e ? n && Cn(e, u, 3, [
      c(),
      d ? [] : void 0,
      p
    ]) : c(), i === "sync") {
      const O = W1();
      g = O.__watcherHandles || (O.__watcherHandles = []);
    } else
      return yt;
  let y = d ? new Array(t.length).fill(Ho) : Ho;
  const v = () => {
    if (!(!E.active || !E.dirty))
      if (e) {
        const O = E.run();
        (r || h || (d ? O.some((P, k) => xi(P, y[k])) : xi(O, y))) && (m && m(), Cn(e, u, 3, [
          O,
          y === Ho ? void 0 : d && y[0] === Ho ? [] : y,
          p
        ]), y = O);
      } else
        E.run();
  };
  v.allowRecurse = !!e;
  let b;
  i === "sync" ? b = v : i === "post" ? b = () => on(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), b = () => ju(v));
  const E = new hh(c, yt, b), x = Gg(), N = () => {
    E.stop(), x && lh(x.effects, E);
  };
  return process.env.NODE_ENV !== "production" && (E.onTrack = a, E.onTrigger = o), e ? n ? v() : y = E.run() : i === "post" ? on(
    E.run.bind(E),
    u && u.suspense
  ) : E.run(), g && g.push(N), N;
}
function q1(t, e, n) {
  const r = this.proxy, i = it(t) ? t.includes(".") ? by(r, t) : () => r[t] : t.bind(r, r);
  let s;
  me(e) ? s = e : (s = e.handler, n = e);
  const a = Eo(this), o = xh(i, s.bind(r), n);
  return a(), o;
}
function by(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Zi(t, e, n = 0, r) {
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
    Zi(t.value, e, n, r);
  else if (le(t))
    for (let i = 0; i < t.length; i++)
      Zi(t[i], e, n, r);
  else if (Ag(t) || es(t))
    t.forEach((i) => {
      Zi(i, e, n, r);
    });
  else if (Dg(t))
    for (const i in t)
      Zi(t[i], e, n, r);
  return t;
}
function Ey(t) {
  bb(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function Zl(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), t;
  const n = qu(ht) || ht.proxy, r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Ke] = e[i];
    s && (me(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Zi(a), r.push({
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
function $i(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[r];
    l && (Hr(), Cn(l, n, 8, [
      t.el,
      o,
      t,
      e
    ]), zr());
  }
}
const si = Symbol("_leaveCb"), zo = Symbol("_enterCb");
function H1() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _n(() => {
    t.isMounted = !0;
  }), My(() => {
    t.isUnmounting = !0;
  }), t;
}
const En = [Function, Array], Sy = {
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
}, z1 = {
  name: "BaseTransition",
  props: Sy,
  setup(t, { slots: e }) {
    const n = bo(), r = H1();
    return () => {
      const i = e.default && xy(e.default(), !0);
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
      const a = _e(t), { mode: o } = a;
      if (process.env.NODE_ENV !== "production" && o && o !== "in-out" && o !== "out-in" && o !== "default" && q(`invalid <transition> mode: ${o}`), r.isLeaving)
        return mc(s);
      const l = kd(s);
      if (!l)
        return mc(s);
      const u = yf(
        l,
        a,
        r,
        n
      );
      vf(l, u);
      const f = n.subTree, c = f && kd(f);
      if (c && c.type !== Nt && !Ki(l, c)) {
        const h = yf(
          c,
          a,
          r,
          n
        );
        if (vf(c, h), o === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, mc(s);
        o === "in-out" && l.type !== Nt && (h.delayLeave = (d, m, p) => {
          const g = wy(
            r,
            c
          );
          g[String(c.key)] = c, d[si] = () => {
            m(), d[si] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = p;
        });
      }
      return s;
    };
  }
}, Y1 = z1;
function wy(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function yf(t, e, n, r) {
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
    onLeaveCancelled: m,
    onBeforeAppear: p,
    onAppear: g,
    onAfterAppear: y,
    onAppearCancelled: v
  } = e, b = String(t.key), E = wy(n, t), x = (P, k) => {
    P && Cn(
      P,
      r,
      9,
      k
    );
  }, N = (P, k) => {
    const C = k[1];
    x(P, k), le(P) ? P.every((R) => R.length <= 1) && C() : P.length <= 1 && C();
  }, O = {
    mode: s,
    persisted: a,
    beforeEnter(P) {
      let k = o;
      if (!n.isMounted)
        if (i)
          k = p || o;
        else
          return;
      P[si] && P[si](
        !0
      );
      const C = E[b];
      C && Ki(t, C) && C.el[si] && C.el[si](), x(k, [P]);
    },
    enter(P) {
      let k = l, C = u, R = f;
      if (!n.isMounted)
        if (i)
          k = g || l, C = y || u, R = v || f;
        else
          return;
      let I = !1;
      const Q = P[zo] = (ve) => {
        I || (I = !0, ve ? x(R, [P]) : x(C, [P]), O.delayedLeave && O.delayedLeave(), P[zo] = void 0);
      };
      k ? N(k, [P, Q]) : Q();
    },
    leave(P, k) {
      const C = String(t.key);
      if (P[zo] && P[zo](
        !0
      ), n.isUnmounting)
        return k();
      x(c, [P]);
      let R = !1;
      const I = P[si] = (Q) => {
        R || (R = !0, k(), Q ? x(m, [P]) : x(d, [P]), P[si] = void 0, E[C] === t && delete E[C]);
      };
      E[C] = t, h ? N(h, [P, I]) : I();
    },
    clone(P) {
      return yf(P, e, n, r);
    }
  };
  return O;
}
function mc(t) {
  if (vo(t))
    return t = _r(t), t.children = null, t;
}
function kd(t) {
  if (!vo(t))
    return t;
  if (process.env.NODE_ENV !== "production" && t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: n } = t;
  if (n) {
    if (e & 16)
      return n[0];
    if (e & 32 && me(n.default))
      return n.default();
  }
}
function vf(t, e) {
  t.shapeFlag & 6 && t.component ? vf(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function xy(t, e = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === je ? (a.patchFlag & 128 && i++, r = r.concat(
      xy(a.children, e, o)
    )) : (e || a.type !== Nt) && r.push(o != null ? _r(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function fe(t, e) {
  return me(t) ? /* @__PURE__ */ (() => et({ name: t.name }, e, { setup: t }))() : t;
}
const Ra = (t) => !!t.type.__asyncLoader, vo = (t) => t.type.__isKeepAlive;
function X1(t, e) {
  Oy(t, "a", e);
}
function K1(t, e) {
  Oy(t, "da", e);
}
function Oy(t, e, n = St) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (Bu(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      vo(i.parent.vnode) && Z1(r, e, n, i), i = i.parent;
  }
}
function Z1(t, e, n, r) {
  const i = Bu(
    e,
    t,
    r,
    !0
  );
  Li(() => {
    lh(r[e], i);
  }, n);
}
function Bu(t, e, n = St, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      Hr();
      const o = Eo(n), l = Cn(e, n, t, a);
      return o(), zr(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = zi(yh[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Yr = (t) => (e, n = St) => (!Wu || t === "sp") && Bu(t, (...r) => e(...r), n), J1 = Yr("bm"), _n = Yr("m"), Q1 = Yr("bu"), eE = Yr("u"), My = Yr("bum"), Li = Yr("um"), tE = Yr("sp"), nE = Yr(
  "rtg"
), rE = Yr(
  "rtc"
);
function iE(t, e = St) {
  Bu("ec", t, e);
}
function An(t, e, n, r) {
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
function Ty(t, e, n = {}, r, i) {
  if (ht.isCE || ht.parent && Ra(ht.parent) && ht.parent.isCE)
    return e !== "default" && (n.name = e), ie("slot", n, r && r());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), A();
  const a = s && Ny(s(n)), o = Ue(
    je,
    {
      key: n.key || a && a.key || `_${e}`
    },
    a || (r ? r() : []),
    a && t._ === 1 ? 64 : -2
  );
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function Ny(t) {
  return t.some((e) => ea(e) ? !(e.type === Nt || e.type === je && !Ny(e.children)) : !0) ? t : null;
}
const _f = (t) => t ? Xy(t) ? qu(t) || t.proxy : _f(t.parent) : null, ss = /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Rr(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Rr(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Rr(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Rr(t.refs) : t.refs,
  $parent: (t) => _f(t.parent),
  $root: (t) => _f(t.root),
  $emit: (t) => t.emit,
  $options: (t) => Mh(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    t.effect.dirty = !0, ju(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = Yl.bind(t.proxy)),
  $watch: (t) => q1.bind(t)
}), Oh = (t) => t === "_" || t === "$", pc = (t, e) => t !== Ke && !t.__isScriptSetup && ke(t, e), Cy = {
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
        if (pc(r, e))
          return a[e] = 1, r[e];
        if (i !== Ke && ke(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && ke(u, e))
          return a[e] = 3, s[e];
        if (n !== Ke && ke(n, e))
          return a[e] = 4, n[e];
        bf && (a[e] = 0);
      }
    }
    const f = ss[e];
    let c, h;
    if (f)
      return e === "$attrs" ? (It(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && Kl()) : process.env.NODE_ENV !== "production" && e === "$slots" && It(t, "get", e), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (n !== Ke && ke(n, e))
      return a[e] = 4, n[e];
    if (h = l.config.globalProperties, ke(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && ht && (!it(e) || e.indexOf("__v") !== 0) && (i !== Ke && Oh(e[0]) && ke(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return pc(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && ke(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Ke && ke(r, e) ? (r[e] = n, !0) : ke(t.props, e) ? (process.env.NODE_ENV !== "production" && q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && q(
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
    return !!n[a] || t !== Ke && ke(t, a) || pc(e, a) || (o = s[0]) && ke(o, a) || ke(r, a) || ke(ss, a) || ke(i.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ke(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Cy.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function sE(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(ss).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ss[n](t),
      set: yt
    });
  }), e;
}
function aE(t) {
  const {
    ctx: e,
    propsOptions: [n]
  } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: yt
    });
  });
}
function oE(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(_e(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Oh(r[0])) {
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
        set: yt
      });
    }
  });
}
function Dd(t) {
  return le(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function lE() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? q(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let bf = !0;
function uE(t) {
  const e = Mh(t), n = t.proxy, r = t.ctx;
  bf = !1, e.beforeCreate && Id(e.beforeCreate, t, "bc");
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
    beforeDestroy: y,
    beforeUnmount: v,
    destroyed: b,
    unmounted: E,
    render: x,
    renderTracked: N,
    renderTriggered: O,
    errorCaptured: P,
    serverPrefetch: k,
    expose: C,
    inheritAttrs: R,
    components: I,
    directives: Q,
    filters: ve
  } = e, T = process.env.NODE_ENV !== "production" ? lE() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = t.propsOptions;
    if (z)
      for (const K in z)
        T("Props", K);
  }
  if (u && cE(u, r, T), a)
    for (const z in a) {
      const K = a[z];
      me(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, z, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[z] = K.bind(n), process.env.NODE_ENV !== "production" && T("Methods", z)) : process.env.NODE_ENV !== "production" && q(
        `Method "${z}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !me(i) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && uh(z) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(z))
      process.env.NODE_ENV !== "production" && q("data() should return an object.");
    else if (t.data = Vu(z), process.env.NODE_ENV !== "production")
      for (const K in z)
        T("Data", K), Oh(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => z[K],
          set: yt
        });
  }
  if (bf = !0, s)
    for (const z in s) {
      const K = s[z], Ce = me(K) ? K.bind(n, n) : me(K.get) ? K.get.bind(n, n) : yt;
      process.env.NODE_ENV !== "production" && Ce === yt && q(`Computed property "${z}" has no getter.`);
      const Pe = !me(K) && me(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : yt, dt = de({
        get: Ce,
        set: Pe
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (Rt) => dt.value = Rt
      }), process.env.NODE_ENV !== "production" && T("Computed", z);
    }
  if (o)
    for (const z in o)
      Ly(o[z], r, n, z);
  if (l) {
    const z = me(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((K) => {
      Ay(K, z[K]);
    });
  }
  f && Id(f, t, "c");
  function $(z, K) {
    le(K) ? K.forEach((Ce) => z(Ce.bind(n))) : K && z(K.bind(n));
  }
  if ($(J1, c), $(_n, h), $(Q1, d), $(eE, m), $(X1, p), $(K1, g), $(iE, P), $(rE, N), $(nE, O), $(My, v), $(Li, E), $(tE, k), le(C))
    if (C.length) {
      const z = t.exposed || (t.exposed = {});
      C.forEach((K) => {
        Object.defineProperty(z, K, {
          get: () => n[K],
          set: (Ce) => n[K] = Ce
        });
      });
    } else
      t.exposed || (t.exposed = {});
  x && t.render === yt && (t.render = x), R != null && (t.inheritAttrs = R), I && (t.components = I), Q && (t.directives = Q);
}
function cE(t, e, n = yt) {
  le(t) && (t = Ef(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Be(i) ? "default" in i ? s = Ws(
      i.from || r,
      i.default,
      !0
    ) : s = Ws(i.from || r) : s = Ws(i), Ye(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Id(t, e, n) {
  Cn(
    le(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ly(t, e, n, r) {
  const i = r.includes(".") ? by(n, r) : () => n[r];
  if (it(t)) {
    const s = e[t];
    me(s) ? tt(i, s) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (me(t))
    tt(i, t.bind(n));
  else if (Be(t))
    if (le(t))
      t.forEach((s) => Ly(s, e, n, r));
    else {
      const s = me(t.handler) ? t.handler.bind(n) : e[t.handler];
      me(s) ? tt(i, s, t) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && q(`Invalid watch option: "${r}"`, t);
}
function Mh(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach(
    (u) => Jl(l, u, a, !0)
  ), Jl(l, e, a)), Be(e) && s.set(e, l), l;
}
function Jl(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Jl(t, s, n, !0), i && i.forEach(
    (a) => Jl(t, a, n, !0)
  );
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = fE[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const fE = {
  data: Rd,
  props: $d,
  emits: $d,
  methods: wa,
  computed: wa,
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
  components: wa,
  directives: wa,
  watch: dE,
  provide: Rd,
  inject: hE
};
function Rd(t, e) {
  return e ? t ? function() {
    return et(
      me(t) ? t.call(this, this) : t,
      me(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function hE(t, e) {
  return wa(Ef(t), Ef(e));
}
function Ef(t) {
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
function wa(t, e) {
  return t ? et(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function $d(t, e) {
  return t ? le(t) && le(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : et(
    /* @__PURE__ */ Object.create(null),
    Dd(t),
    Dd(e != null ? e : {})
  ) : e;
}
function dE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = et(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Yt(t[r], e[r]);
  return n;
}
function Py() {
  return {
    app: null,
    config: {
      isNativeTag: vb,
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
let mE = 0;
function pE(t, e) {
  return function(r, i = null) {
    me(r) || (r = et({}, r)), i != null && !Be(i) && (process.env.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const s = Py(), a = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = s.app = {
      _uid: mE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Xd,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return a.has(u) ? process.env.NODE_ENV !== "production" && q("Plugin has already been applied to target app.") : u && me(u.install) ? (a.add(u), u.install(l, ...f)) : me(u) ? (a.add(u), u(l, ...f)) : process.env.NODE_ENV !== "production" && q(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && q(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), l;
      },
      component(u, f) {
        return process.env.NODE_ENV !== "production" && Tf(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && q(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && Ey(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && q(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
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
          const h = ie(r, i);
          return h.appContext = s, c === !0 ? c = "svg" : c === !1 && (c = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            t(
              _r(h),
              u,
              c
            );
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, O1(l, Xd)), qu(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, M1(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in s.provides && q(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = f, l;
      },
      runWithContext(u) {
        const f = Bs;
        Bs = l;
        try {
          return u();
        } finally {
          Bs = f;
        }
      }
    };
    return l;
  };
}
let Bs = null;
function Ay(t, e) {
  if (!St)
    process.env.NODE_ENV !== "production" && q("provide() can only be used inside setup().");
  else {
    let n = St.provides;
    const r = St.parent && St.parent.provides;
    r === n && (n = St.provides = Object.create(r)), n[t] = e;
  }
}
function Ws(t, e, n = !1) {
  const r = St || ht;
  if (r || Bs) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Bs._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && me(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && q(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function gE() {
  return !!(St || ht || Bs);
}
const ky = {}, Dy = () => Object.create(ky), Iy = (t) => Object.getPrototypeOf(t) === ky;
function yE(t, e, n, r = !1) {
  const i = {}, s = Dy();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Ry(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && Fy(e || {}, i, t), n ? t.props = r ? i : i1(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function vE(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function _E(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = _e(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && vE(t)) && (r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (Uu(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (ke(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const m = gn(h);
            i[m] = Sf(
              l,
              o,
              m,
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
    Ry(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !ke(e, c) && ((f = un(c)) === c || !ke(e, f))) && (l ? n && (n[c] !== void 0 || n[f] !== void 0) && (i[c] = Sf(
        l,
        o,
        c,
        void 0,
        t,
        !0
      )) : delete i[c]);
    if (s !== o)
      for (const c in s)
        (!e || !ke(e, c) && !0) && (delete s[c], u = !0);
  }
  u && fr(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && Fy(e || {}, i, t);
}
function Ry(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (Da(l))
        continue;
      const u = e[l];
      let f;
      i && ke(i, f = gn(l)) ? !s || !s.includes(f) ? n[f] = u : (o || (o = {}))[f] = u : Uu(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = _e(n), u = o || Ke;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = Sf(
        i,
        l,
        c,
        u[c],
        t,
        !ke(u, c)
      );
    }
  }
  return a;
}
function Sf(t, e, n, r, i, s) {
  const a = t[n];
  if (a != null) {
    const o = ke(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && me(l)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const f = Eo(i);
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
function $y(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!me(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = $y(c, e, !0);
      et(a, h), d && o.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return Be(t) && r.set(t, js), js;
  if (le(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !it(s[f]) && q("props must be strings when using array syntax.", s[f]);
      const c = gn(s[f]);
      Fd(c) && (a[c] = Ke);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Be(s) && q("invalid props options", s);
    for (const f in s) {
      const c = gn(f);
      if (Fd(c)) {
        const h = s[f], d = a[c] = le(h) || me(h) ? { type: h } : et({}, h);
        if (d) {
          const m = Gd(Boolean, d.type), p = Gd(String, d.type);
          d[0] = m > -1, d[1] = p < 0 || m < p, (m > -1 || ke(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return Be(t) && r.set(t, u), u;
}
function Fd(t) {
  return t[0] !== "$" && !Da(t) ? !0 : (process.env.NODE_ENV !== "production" && q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function wf(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function Vd(t, e) {
  return wf(t) === wf(e);
}
function Gd(t, e) {
  return le(e) ? e.findIndex((n) => Vd(n, t)) : me(e) && Vd(e, t) ? 0 : -1;
}
function Fy(t, e, n) {
  const r = _e(e), i = n.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && bE(
      s,
      r[s],
      a,
      process.env.NODE_ENV !== "production" ? Rr(r) : r,
      !ke(t, s) && !ke(t, un(s))
    );
  }
}
function bE(t, e, n, r, i) {
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
        const { valid: d, expectedType: m } = SE(e, f[h]);
        c.push(m || ""), u = d;
      }
      if (!u) {
        q(wE(t, e, c));
        return;
      }
    }
    o && !o(e, r) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const EE = /* @__PURE__ */ qr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function SE(t, e) {
  let n;
  const r = wf(e);
  if (EE(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Be(t) : r === "Array" ? n = le(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function wE(t, e, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(us).join(" | ")}`;
  const i = n[0], s = ch(e), a = jd(e, i), o = jd(e, s);
  return n.length === 1 && Ud(i) && !xE(i, s) && (r += ` with value ${a}`), r += `, got ${s} `, Ud(s) && (r += `with value ${o}.`), r;
}
function jd(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Ud(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function xE(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Vy = (t) => t[0] === "_" || t === "$stable", Th = (t) => le(t) ? t.map(Wn) : [Wn(t)], OE = (t, e, n) => {
  if (e._n)
    return e;
  const r = _i((...i) => (process.env.NODE_ENV !== "production" && St && (!n || n.root === St.root) && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Th(e(...i))), n);
  return r._c = !1, r;
}, Gy = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Vy(i))
      continue;
    const s = t[i];
    if (me(s))
      e[i] = OE(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Th(s);
      e[i] = () => a;
    }
  }
}, jy = (t, e) => {
  process.env.NODE_ENV !== "production" && !vo(t.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Th(e);
  t.slots.default = () => n;
}, ME = (t, e) => {
  const n = t.slots = Dy();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (et(n, e), Ig(n, "_", r)) : Gy(e, n);
  } else
    e && jy(t, e);
}, TE = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, a = Ke;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && vi ? (et(i, e), fr(t, "set", "$slots")) : n && o === 1 ? s = !1 : (et(i, e), !n && o === 1 && delete i._) : (s = !e.$stable, Gy(e, i)), a = e;
  } else
    e && (jy(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !Vy(o) && a[o] == null && delete i[o];
};
function xf(t, e, n, r, i = !1) {
  if (le(t)) {
    t.forEach(
      (h, d) => xf(
        h,
        e && (le(e) ? e[d] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Ra(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? qu(r.component) || r.component.proxy : r.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, f = o.refs === Ke ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (it(u) ? (f[u] = null, ke(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), me(l))
    $r(l, o, 12, [a, f]);
  else {
    const h = it(l), d = Ye(l);
    if (h || d) {
      const m = () => {
        if (t.f) {
          const p = h ? ke(c, l) ? c[l] : f[l] : l.value;
          i ? le(p) && lh(p, s) : le(p) ? p.includes(s) || p.push(s) : h ? (f[l] = [s], ke(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, ke(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (m.id = -1, on(m, n)) : m();
    } else
      process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let da, ci;
function Ar(t, e) {
  t.appContext.config.performance && Ql() && ci.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && L1(t, e, Ql() ? ci.now() : Date.now());
}
function kr(t, e) {
  if (t.appContext.config.performance && Ql()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    ci.mark(r), ci.measure(
      `<${Hu(t, t.type)}> ${e}`,
      n,
      r
    ), ci.clearMarks(n), ci.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && P1(t, e, Ql() ? ci.now() : Date.now());
}
function Ql() {
  return da !== void 0 || (typeof window < "u" && window.performance ? (da = !0, ci = window.performance) : da = !1), da;
}
function NE() {
  const t = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && t.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Ru().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const on = U1;
function CE(t) {
  return LE(t);
}
function LE(t, e) {
  NE();
  const n = Ru();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && bh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: d = yt,
    insertStaticContent: m
  } = t, p = (_, S, D, V = null, G = null, W = null, Z = void 0, B = null, X = process.env.NODE_ENV !== "production" && vi ? !1 : !!S.dynamicChildren) => {
    if (_ === S)
      return;
    _ && !Ki(_, S) && (V = tn(_), Te(_, G, W, !0), _ = null), S.patchFlag === -2 && (X = !1, S.dynamicChildren = null);
    const { type: U, ref: ne, shapeFlag: ue } = S;
    switch (U) {
      case _o:
        g(_, S, D, V);
        break;
      case Nt:
        y(_, S, D, V);
        break;
      case Ol:
        _ == null ? v(S, D, V, Z) : process.env.NODE_ENV !== "production" && b(_, S, D, Z);
        break;
      case je:
        Q(
          _,
          S,
          D,
          V,
          G,
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
          D,
          V,
          G,
          W,
          Z,
          B,
          X
        ) : ue & 6 ? ve(
          _,
          S,
          D,
          V,
          G,
          W,
          Z,
          B,
          X
        ) : ue & 64 || ue & 128 ? U.process(
          _,
          S,
          D,
          V,
          G,
          W,
          Z,
          B,
          X,
          Lt
        ) : process.env.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    ne != null && G && xf(ne, _ && _.ref, W, S || _, !S);
  }, g = (_, S, D, V) => {
    if (_ == null)
      r(
        S.el = o(S.children),
        D,
        V
      );
    else {
      const G = S.el = _.el;
      S.children !== _.children && u(G, S.children);
    }
  }, y = (_, S, D, V) => {
    _ == null ? r(
      S.el = l(S.children || ""),
      D,
      V
    ) : S.el = _.el;
  }, v = (_, S, D, V) => {
    [_.el, _.anchor] = m(
      _.children,
      S,
      D,
      V,
      _.el,
      _.anchor
    );
  }, b = (_, S, D, V) => {
    if (S.children !== _.children) {
      const G = h(_.anchor);
      x(_), [S.el, S.anchor] = m(
        S.children,
        D,
        G,
        V
      );
    } else
      S.el = _.el, S.anchor = _.anchor;
  }, E = ({ el: _, anchor: S }, D, V) => {
    let G;
    for (; _ && _ !== S; )
      G = h(_), r(_, D, V), _ = G;
    r(S, D, V);
  }, x = ({ el: _, anchor: S }) => {
    let D;
    for (; _ && _ !== S; )
      D = h(_), i(_), _ = D;
    i(S);
  }, N = (_, S, D, V, G, W, Z, B, X) => {
    S.type === "svg" ? Z = "svg" : S.type === "math" && (Z = "mathml"), _ == null ? O(
      S,
      D,
      V,
      G,
      W,
      Z,
      B,
      X
    ) : C(
      _,
      S,
      G,
      W,
      Z,
      B,
      X
    );
  }, O = (_, S, D, V, G, W, Z, B) => {
    let X, U;
    const { props: ne, shapeFlag: ue, transition: ae, dirs: he } = _;
    if (X = _.el = a(
      _.type,
      W,
      ne && ne.is,
      ne
    ), ue & 8 ? f(X, _.children) : ue & 16 && k(
      _.children,
      X,
      null,
      V,
      G,
      gc(_, W),
      Z,
      B
    ), he && $i(_, null, V, "created"), P(X, _, _.scopeId, Z, V), ne) {
      for (const $e in ne)
        $e !== "value" && !Da($e) && s(
          X,
          $e,
          null,
          ne[$e],
          W,
          _.children,
          V,
          G,
          De
        );
      "value" in ne && s(X, "value", null, ne.value, W), (U = ne.onVnodeBeforeMount) && nr(U, V, _);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(X, "__vnode", {
      value: _,
      enumerable: !1
    }), Object.defineProperty(X, "__vueParentComponent", {
      value: V,
      enumerable: !1
    })), he && $i(_, null, V, "beforeMount");
    const xe = PE(G, ae);
    xe && ae.beforeEnter(X), r(X, S, D), ((U = ne && ne.onVnodeMounted) || xe || he) && on(() => {
      U && nr(U, V, _), xe && ae.enter(X), he && $i(_, null, V, "mounted");
    }, G);
  }, P = (_, S, D, V, G) => {
    if (D && d(_, D), V)
      for (let W = 0; W < V.length; W++)
        d(_, V[W]);
    if (G) {
      let W = G.subTree;
      if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = Sh(W.children) || W), S === W) {
        const Z = G.vnode;
        P(
          _,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          G.parent
        );
      }
    }
  }, k = (_, S, D, V, G, W, Z, B, X = 0) => {
    for (let U = X; U < _.length; U++) {
      const ne = _[U] = B ? ai(_[U]) : Wn(_[U]);
      p(
        null,
        ne,
        S,
        D,
        V,
        G,
        W,
        Z,
        B
      );
    }
  }, C = (_, S, D, V, G, W, Z) => {
    const B = S.el = _.el;
    let { patchFlag: X, dynamicChildren: U, dirs: ne } = S;
    X |= _.patchFlag & 16;
    const ue = _.props || Ke, ae = S.props || Ke;
    let he;
    if (D && Fi(D, !1), (he = ae.onVnodeBeforeUpdate) && nr(he, D, S, _), ne && $i(S, _, D, "beforeUpdate"), D && Fi(D, !0), process.env.NODE_ENV !== "production" && vi && (X = 0, Z = !1, U = null), U ? (R(
      _.dynamicChildren,
      U,
      B,
      D,
      V,
      gc(S, G),
      W
    ), process.env.NODE_ENV !== "production" && $a(_, S)) : Z || Ce(
      _,
      S,
      B,
      null,
      D,
      V,
      gc(S, G),
      W,
      !1
    ), X > 0) {
      if (X & 16)
        I(
          B,
          S,
          ue,
          ae,
          D,
          V,
          G
        );
      else if (X & 2 && ue.class !== ae.class && s(B, "class", null, ae.class, G), X & 4 && s(B, "style", ue.style, ae.style, G), X & 8) {
        const xe = S.dynamicProps;
        for (let $e = 0; $e < xe.length; $e++) {
          const Je = xe[$e], mt = ue[Je], zt = ae[Je];
          (zt !== mt || Je === "value") && s(
            B,
            Je,
            mt,
            zt,
            G,
            _.children,
            D,
            V,
            De
          );
        }
      }
      X & 1 && _.children !== S.children && f(B, S.children);
    } else
      !Z && U == null && I(
        B,
        S,
        ue,
        ae,
        D,
        V,
        G
      );
    ((he = ae.onVnodeUpdated) || ne) && on(() => {
      he && nr(he, D, S, _), ne && $i(S, _, D, "updated");
    }, V);
  }, R = (_, S, D, V, G, W, Z) => {
    for (let B = 0; B < S.length; B++) {
      const X = _[B], U = S[B], ne = X.el && (X.type === je || !Ki(X, U) || X.shapeFlag & 70) ? c(X.el) : D;
      p(
        X,
        U,
        ne,
        null,
        V,
        G,
        W,
        Z,
        !0
      );
    }
  }, I = (_, S, D, V, G, W, Z) => {
    if (D !== V) {
      if (D !== Ke)
        for (const B in D)
          !Da(B) && !(B in V) && s(
            _,
            B,
            D[B],
            null,
            Z,
            S.children,
            G,
            W,
            De
          );
      for (const B in V) {
        if (Da(B))
          continue;
        const X = V[B], U = D[B];
        X !== U && B !== "value" && s(
          _,
          B,
          U,
          X,
          Z,
          S.children,
          G,
          W,
          De
        );
      }
      "value" in V && s(_, "value", D.value, V.value, Z);
    }
  }, Q = (_, S, D, V, G, W, Z, B, X) => {
    const U = S.el = _ ? _.el : o(""), ne = S.anchor = _ ? _.anchor : o("");
    let { patchFlag: ue, dynamicChildren: ae, slotScopeIds: he } = S;
    process.env.NODE_ENV !== "production" && (vi || ue & 2048) && (ue = 0, X = !1, ae = null), he && (B = B ? B.concat(he) : he), _ == null ? (r(U, D, V), r(ne, D, V), k(
      S.children || [],
      D,
      ne,
      G,
      W,
      Z,
      B,
      X
    )) : ue > 0 && ue & 64 && ae && _.dynamicChildren ? (R(
      _.dynamicChildren,
      ae,
      D,
      G,
      W,
      Z,
      B
    ), process.env.NODE_ENV !== "production" ? $a(_, S) : (S.key != null || G && S === G.subTree) && $a(
      _,
      S,
      !0
    )) : Ce(
      _,
      S,
      D,
      ne,
      G,
      W,
      Z,
      B,
      X
    );
  }, ve = (_, S, D, V, G, W, Z, B, X) => {
    S.slotScopeIds = B, _ == null ? S.shapeFlag & 512 ? G.ctx.activate(
      S,
      D,
      V,
      Z,
      X
    ) : T(
      S,
      D,
      V,
      G,
      W,
      Z,
      X
    ) : $(_, S, X);
  }, T = (_, S, D, V, G, W, Z) => {
    const B = _.component = UE(
      _,
      V,
      G
    );
    if (process.env.NODE_ENV !== "production" && B.type.__hmrId && E1(B), process.env.NODE_ENV !== "production" && (wl(_), Ar(B, "mount")), vo(_) && (B.ctx.renderer = Lt), process.env.NODE_ENV !== "production" && Ar(B, "init"), WE(B), process.env.NODE_ENV !== "production" && kr(B, "init"), B.asyncDep) {
      if (G && G.registerDep(B, z), !_.el) {
        const X = B.subTree = ie(Nt);
        y(null, X, S, D);
      }
    } else
      z(
        B,
        _,
        S,
        D,
        G,
        W,
        Z
      );
    process.env.NODE_ENV !== "production" && (xl(), kr(B, "mount"));
  }, $ = (_, S, D) => {
    const V = S.component = _.component;
    if (R1(_, S, D))
      if (V.asyncDep && !V.asyncResolved) {
        process.env.NODE_ENV !== "production" && wl(S), K(V, S, D), process.env.NODE_ENV !== "production" && xl();
        return;
      } else
        V.next = S, _1(V.update), V.effect.dirty = !0, V.update();
    else
      S.el = _.el, V.vnode = S;
  }, z = (_, S, D, V, G, W, Z) => {
    const B = () => {
      if (_.isMounted) {
        let { next: ne, bu: ue, u: ae, parent: he, vnode: xe } = _;
        {
          const Tr = Uy(_);
          if (Tr) {
            ne && (ne.el = xe.el, K(_, ne, Z)), Tr.asyncDep.then(() => {
              _.isUnmounted || B();
            });
            return;
          }
        }
        let $e = ne, Je;
        process.env.NODE_ENV !== "production" && wl(ne || _.vnode), Fi(_, !1), ne ? (ne.el = xe.el, K(_, ne, Z)) : ne = xe, ue && ha(ue), (Je = ne.props && ne.props.onVnodeBeforeUpdate) && nr(Je, he, ne, xe), Fi(_, !0), process.env.NODE_ENV !== "production" && Ar(_, "render");
        const mt = dc(_);
        process.env.NODE_ENV !== "production" && kr(_, "render");
        const zt = _.subTree;
        _.subTree = mt, process.env.NODE_ENV !== "production" && Ar(_, "patch"), p(
          zt,
          mt,
          c(zt.el),
          tn(zt),
          _,
          G,
          W
        ), process.env.NODE_ENV !== "production" && kr(_, "patch"), ne.el = mt.el, $e === null && $1(_, mt.el), ae && on(ae, G), (Je = ne.props && ne.props.onVnodeUpdated) && on(
          () => nr(Je, he, ne, xe),
          G
        ), process.env.NODE_ENV !== "production" && my(_), process.env.NODE_ENV !== "production" && xl();
      } else {
        let ne;
        const { el: ue, props: ae } = S, { bm: he, m: xe, parent: $e } = _, Je = Ra(S);
        if (Fi(_, !1), he && ha(he), !Je && (ne = ae && ae.onVnodeBeforeMount) && nr(ne, $e, S), Fi(_, !0), ue && Mr) {
          const mt = () => {
            process.env.NODE_ENV !== "production" && Ar(_, "render"), _.subTree = dc(_), process.env.NODE_ENV !== "production" && kr(_, "render"), process.env.NODE_ENV !== "production" && Ar(_, "hydrate"), Mr(
              ue,
              _.subTree,
              _,
              G,
              null
            ), process.env.NODE_ENV !== "production" && kr(_, "hydrate");
          };
          Je ? S.type.__asyncLoader().then(
            () => !_.isUnmounted && mt()
          ) : mt();
        } else {
          process.env.NODE_ENV !== "production" && Ar(_, "render");
          const mt = _.subTree = dc(_);
          process.env.NODE_ENV !== "production" && kr(_, "render"), process.env.NODE_ENV !== "production" && Ar(_, "patch"), p(
            null,
            mt,
            D,
            V,
            _,
            G,
            W
          ), process.env.NODE_ENV !== "production" && kr(_, "patch"), S.el = mt.el;
        }
        if (xe && on(xe, G), !Je && (ne = ae && ae.onVnodeMounted)) {
          const mt = S;
          on(
            () => nr(ne, $e, mt),
            G
          );
        }
        (S.shapeFlag & 256 || $e && Ra($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && on(_.a, G), _.isMounted = !0, process.env.NODE_ENV !== "production" && T1(_), S = D = V = null;
      }
    }, X = _.effect = new hh(
      B,
      yt,
      () => ju(U),
      _.scope
    ), U = _.update = () => {
      X.dirty && X.run();
    };
    U.id = _.uid, Fi(_, !0), process.env.NODE_ENV !== "production" && (X.onTrack = _.rtc ? (ne) => ha(_.rtc, ne) : void 0, X.onTrigger = _.rtg ? (ne) => ha(_.rtg, ne) : void 0, U.ownerInstance = _), U();
  }, K = (_, S, D) => {
    S.component = _;
    const V = _.vnode.props;
    _.vnode = S, _.next = null, _E(_, S.props, V, D), TE(_, S.children, D), Hr(), Nd(_), zr();
  }, Ce = (_, S, D, V, G, W, Z, B, X = !1) => {
    const U = _ && _.children, ne = _ ? _.shapeFlag : 0, ue = S.children, { patchFlag: ae, shapeFlag: he } = S;
    if (ae > 0) {
      if (ae & 128) {
        dt(
          U,
          ue,
          D,
          V,
          G,
          W,
          Z,
          B,
          X
        );
        return;
      } else if (ae & 256) {
        Pe(
          U,
          ue,
          D,
          V,
          G,
          W,
          Z,
          B,
          X
        );
        return;
      }
    }
    he & 8 ? (ne & 16 && De(U, G, W), ue !== U && f(D, ue)) : ne & 16 ? he & 16 ? dt(
      U,
      ue,
      D,
      V,
      G,
      W,
      Z,
      B,
      X
    ) : De(U, G, W, !0) : (ne & 8 && f(D, ""), he & 16 && k(
      ue,
      D,
      V,
      G,
      W,
      Z,
      B,
      X
    ));
  }, Pe = (_, S, D, V, G, W, Z, B, X) => {
    _ = _ || js, S = S || js;
    const U = _.length, ne = S.length, ue = Math.min(U, ne);
    let ae;
    for (ae = 0; ae < ue; ae++) {
      const he = S[ae] = X ? ai(S[ae]) : Wn(S[ae]);
      p(
        _[ae],
        he,
        D,
        null,
        G,
        W,
        Z,
        B,
        X
      );
    }
    U > ne ? De(
      _,
      G,
      W,
      !0,
      !1,
      ue
    ) : k(
      S,
      D,
      V,
      G,
      W,
      Z,
      B,
      X,
      ue
    );
  }, dt = (_, S, D, V, G, W, Z, B, X) => {
    let U = 0;
    const ne = S.length;
    let ue = _.length - 1, ae = ne - 1;
    for (; U <= ue && U <= ae; ) {
      const he = _[U], xe = S[U] = X ? ai(S[U]) : Wn(S[U]);
      if (Ki(he, xe))
        p(
          he,
          xe,
          D,
          null,
          G,
          W,
          Z,
          B,
          X
        );
      else
        break;
      U++;
    }
    for (; U <= ue && U <= ae; ) {
      const he = _[ue], xe = S[ae] = X ? ai(S[ae]) : Wn(S[ae]);
      if (Ki(he, xe))
        p(
          he,
          xe,
          D,
          null,
          G,
          W,
          Z,
          B,
          X
        );
      else
        break;
      ue--, ae--;
    }
    if (U > ue) {
      if (U <= ae) {
        const he = ae + 1, xe = he < ne ? S[he].el : V;
        for (; U <= ae; )
          p(
            null,
            S[U] = X ? ai(S[U]) : Wn(S[U]),
            D,
            xe,
            G,
            W,
            Z,
            B,
            X
          ), U++;
      }
    } else if (U > ae)
      for (; U <= ue; )
        Te(_[U], G, W, !0), U++;
    else {
      const he = U, xe = U, $e = /* @__PURE__ */ new Map();
      for (U = xe; U <= ae; U++) {
        const ut = S[U] = X ? ai(S[U]) : Wn(S[U]);
        ut.key != null && (process.env.NODE_ENV !== "production" && $e.has(ut.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), $e.set(ut.key, U));
      }
      let Je, mt = 0;
      const zt = ae - xe + 1;
      let Tr = !1, Ii = 0;
      const tr = new Array(zt);
      for (U = 0; U < zt; U++)
        tr[U] = 0;
      for (U = he; U <= ue; U++) {
        const ut = _[U];
        if (mt >= zt) {
          Te(ut, G, W, !0);
          continue;
        }
        let nn;
        if (ut.key != null)
          nn = $e.get(ut.key);
        else
          for (Je = xe; Je <= ae; Je++)
            if (tr[Je - xe] === 0 && Ki(ut, S[Je])) {
              nn = Je;
              break;
            }
        nn === void 0 ? Te(ut, G, W, !0) : (tr[nn - xe] = U + 1, nn >= Ii ? Ii = nn : Tr = !0, p(
          ut,
          S[nn],
          D,
          null,
          G,
          W,
          Z,
          B,
          X
        ), mt++);
      }
      const bn = Tr ? AE(tr) : js;
      for (Je = bn.length - 1, U = zt - 1; U >= 0; U--) {
        const ut = xe + U, nn = S[ut], Es = ut + 1 < ne ? S[ut + 1].el : V;
        tr[U] === 0 ? p(
          null,
          nn,
          D,
          Es,
          G,
          W,
          Z,
          B,
          X
        ) : Tr && (Je < 0 || U !== bn[Je] ? Rt(nn, D, Es, 2) : Je--);
      }
    }
  }, Rt = (_, S, D, V, G = null) => {
    const { el: W, type: Z, transition: B, children: X, shapeFlag: U } = _;
    if (U & 6) {
      Rt(_.component.subTree, S, D, V);
      return;
    }
    if (U & 128) {
      _.suspense.move(S, D, V);
      return;
    }
    if (U & 64) {
      Z.move(_, S, D, Lt);
      return;
    }
    if (Z === je) {
      r(W, S, D);
      for (let ue = 0; ue < X.length; ue++)
        Rt(X[ue], S, D, V);
      r(_.anchor, S, D);
      return;
    }
    if (Z === Ol) {
      E(_, S, D);
      return;
    }
    if (V !== 2 && U & 1 && B)
      if (V === 0)
        B.beforeEnter(W), r(W, S, D), on(() => B.enter(W), G);
      else {
        const { leave: ue, delayLeave: ae, afterLeave: he } = B, xe = () => r(W, S, D), $e = () => {
          ue(W, () => {
            xe(), he && he();
          });
        };
        ae ? ae(W, xe, $e) : $e();
      }
    else
      r(W, S, D);
  }, Te = (_, S, D, V = !1, G = !1) => {
    const {
      type: W,
      props: Z,
      ref: B,
      children: X,
      dynamicChildren: U,
      shapeFlag: ne,
      patchFlag: ue,
      dirs: ae
    } = _;
    if (B != null && xf(B, null, D, _, !0), ne & 256) {
      S.ctx.deactivate(_);
      return;
    }
    const he = ne & 1 && ae, xe = !Ra(_);
    let $e;
    if (xe && ($e = Z && Z.onVnodeBeforeUnmount) && nr($e, S, _), ne & 6)
      Jn(_.component, D, V);
    else {
      if (ne & 128) {
        _.suspense.unmount(D, V);
        return;
      }
      he && $i(_, null, S, "beforeUnmount"), ne & 64 ? _.type.remove(
        _,
        S,
        D,
        G,
        Lt,
        V
      ) : U && (W !== je || ue > 0 && ue & 64) ? De(
        U,
        S,
        D,
        !1,
        !0
      ) : (W === je && ue & 384 || !G && ne & 16) && De(X, S, D), V && Ct(_);
    }
    (xe && ($e = Z && Z.onVnodeUnmounted) || he) && on(() => {
      $e && nr($e, S, _), he && $i(_, null, S, "unmounted");
    }, D);
  }, Ct = (_) => {
    const { type: S, el: D, anchor: V, transition: G } = _;
    if (S === je) {
      process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && G && !G.persisted ? _.children.forEach((Z) => {
        Z.type === Nt ? i(Z.el) : Ct(Z);
      }) : st(D, V);
      return;
    }
    if (S === Ol) {
      x(_);
      return;
    }
    const W = () => {
      i(D), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (_.shapeFlag & 1 && G && !G.persisted) {
      const { leave: Z, delayLeave: B } = G, X = () => Z(D, W);
      B ? B(_.el, W, X) : X();
    } else
      W();
  }, st = (_, S) => {
    let D;
    for (; _ !== S; )
      D = h(_), i(_), _ = D;
    i(S);
  }, Jn = (_, S, D) => {
    process.env.NODE_ENV !== "production" && _.type.__hmrId && S1(_);
    const { bum: V, scope: G, update: W, subTree: Z, um: B } = _;
    V && ha(V), G.stop(), W && (W.active = !1, Te(Z, _, S, D)), B && on(B, S), on(() => {
      _.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), process.env.NODE_ENV !== "production" && C1(_);
  }, De = (_, S, D, V = !1, G = !1, W = 0) => {
    for (let Z = W; Z < _.length; Z++)
      Te(_[Z], S, D, V, G);
  }, tn = (_) => _.shapeFlag & 6 ? tn(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : h(_.anchor || _.el);
  let Qn = !1;
  const Or = (_, S, D) => {
    _ == null ? S._vnode && Te(S._vnode, null, null, !0) : p(
      S._vnode || null,
      _,
      S,
      null,
      null,
      null,
      D
    ), Qn || (Qn = !0, Nd(), fy(), Qn = !1), S._vnode = _;
  }, Lt = {
    p,
    um: Te,
    m: Rt,
    r: Ct,
    mt: T,
    mc: k,
    pc: Ce,
    pbc: R,
    n: tn,
    o: t
  };
  let er, Mr;
  return e && ([er, Mr] = e(
    Lt
  )), {
    render: Or,
    hydrate: er,
    createApp: pE(Or, er)
  };
}
function gc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Fi({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function PE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function $a(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (le(r) && le(i))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = ai(i[s]), o.el = a.el), n || $a(a, o)), o.type === _o && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Nt && !o.el && (o.el = a.el);
    }
}
function AE(t) {
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
function Uy(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Uy(e);
}
const kE = (t) => t.__isTeleport, qs = (t) => t && (t.disabled || t.disabled === ""), Bd = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Wd = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Of = (t, e) => {
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
    return process.env.NODE_ENV !== "production" && !n && !qs(t) && q(`Invalid Teleport target: ${n}`), n;
}, DE = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, n, r, i, s, a, o, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: h,
      o: { insert: d, querySelector: m, createText: p, createComment: g }
    } = u, y = qs(e.props);
    let { shapeFlag: v, children: b, dynamicChildren: E } = e;
    if (process.env.NODE_ENV !== "production" && vi && (l = !1, E = null), t == null) {
      const x = e.el = process.env.NODE_ENV !== "production" ? g("teleport start") : p(""), N = e.anchor = process.env.NODE_ENV !== "production" ? g("teleport end") : p("");
      d(x, n, r), d(N, n, r);
      const O = e.target = Of(e.props, m), P = e.targetAnchor = p("");
      O ? (d(P, O), a === "svg" || Bd(O) ? a = "svg" : (a === "mathml" || Wd(O)) && (a = "mathml")) : process.env.NODE_ENV !== "production" && !y && q("Invalid Teleport target on mount:", O, `(${typeof O})`);
      const k = (C, R) => {
        v & 16 && f(
          b,
          C,
          R,
          i,
          s,
          a,
          o,
          l
        );
      };
      y ? k(n, N) : O && k(O, P);
    } else {
      e.el = t.el;
      const x = e.anchor = t.anchor, N = e.target = t.target, O = e.targetAnchor = t.targetAnchor, P = qs(t.props), k = P ? n : N, C = P ? x : O;
      if (a === "svg" || Bd(N) ? a = "svg" : (a === "mathml" || Wd(N)) && (a = "mathml"), E ? (h(
        t.dynamicChildren,
        E,
        k,
        i,
        s,
        a,
        o
      ), $a(t, e, !0)) : l || c(
        t,
        e,
        k,
        C,
        i,
        s,
        a,
        o,
        !1
      ), y)
        P ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Yo(
          e,
          n,
          x,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const R = e.target = Of(
          e.props,
          m
        );
        R ? Yo(
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
        P && Yo(
          e,
          N,
          O,
          u,
          1
        );
    }
    Wy(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), a && s(u), o & 16) {
      const d = a || !qs(h);
      for (let m = 0; m < l.length; m++) {
        const p = l[m];
        i(
          p,
          e,
          n,
          d,
          !!p.dynamicChildren
        );
      }
    }
  },
  move: Yo,
  hydrate: IE
};
function Yo(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: f } = t, c = s === 2;
  if (c && r(a, e, n), (!c || qs(f)) && l & 16)
    for (let h = 0; h < u.length; h++)
      i(
        u[h],
        e,
        n,
        2
      );
  c && r(o, e, n);
}
function IE(t, e, n, r, i, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l }
}, u) {
  const f = e.target = Of(
    e.props,
    l
  );
  if (f) {
    const c = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (qs(e.props))
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
    Wy(e);
  }
  return e.anchor && a(e.anchor);
}
const By = DE;
function Wy(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n && n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const je = Symbol.for("v-fgt"), _o = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), Ol = Symbol.for("v-stc"), Fa = [];
let Hn = null;
function A(t = !1) {
  Fa.push(Hn = t ? null : []);
}
function RE() {
  Fa.pop(), Hn = Fa[Fa.length - 1] || null;
}
let to = 1;
function qd(t) {
  to += t;
}
function qy(t) {
  return t.dynamicChildren = to > 0 ? Hn || js : null, RE(), to > 0 && Hn && Hn.push(t), t;
}
function j(t, e, n, r, i, s) {
  return qy(
    L(
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
function Ue(t, e, n, r, i) {
  return qy(
    ie(
      t,
      e,
      n,
      r,
      i,
      !0
    )
  );
}
function ea(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Ki(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && Ps.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const $E = (...t) => zy(
  ...t
), Hy = ({ key: t }) => t != null ? t : null, Ml = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? it(t) || Ye(t) || me(t) ? { i: ht, r: t, k: e, f: !!n } : t : null);
function L(t, e = null, n = null, r = 0, i = null, s = t === je ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Hy(e),
    ref: e && Ml(e),
    scopeId: yy,
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
  return o ? (Nh(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= it(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), to > 0 && !a && Hn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Hn.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? $E : zy;
function zy(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === G1) && (process.env.NODE_ENV !== "production" && !t && q(`Invalid vnode type when creating vnode: ${t}.`), t = Nt), ea(t)) {
    const o = _r(
      t,
      e,
      !0
    );
    return n && Nh(o, n), to > 0 && !s && Hn && (o.shapeFlag & 6 ? Hn[Hn.indexOf(t)] = o : Hn.push(o)), o.patchFlag |= -2, o;
  }
  if (Zy(t) && (t = t.__vccOpts), e) {
    e = FE(e);
    let { class: o, style: l } = e;
    o && !it(o) && (e.class = Ae(o)), Be(l) && (zl(l) && !le(l) && (l = et({}, l)), e.style = Ci(l));
  }
  const a = it(t) ? 1 : j1(t) ? 128 : kE(t) ? 64 : Be(t) ? 4 : me(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && zl(t) && (t = _e(t), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), L(
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
function FE(t) {
  return t ? zl(t) || Iy(t) ? et({}, t) : t : null;
}
function _r(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: a } = t, o = e ? VE(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && Hy(o),
    ref: e && e.ref ? n && i ? le(i) ? i.concat(Ml(e)) : [i, Ml(e)] : Ml(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && le(a) ? a.map(Yy) : a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== je ? s === -1 ? 16 : s | 16 : s,
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
function Yy(t) {
  const e = _r(t);
  return le(t.children) && (e.children = t.children.map(Yy)), e;
}
function eu(t = " ", e = 0) {
  return ie(_o, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (A(), Ue(Nt, null, t)) : ie(Nt, null, t);
}
function Wn(t) {
  return t == null || typeof t == "boolean" ? ie(Nt) : le(t) ? ie(
    je,
    null,
    t.slice()
  ) : typeof t == "object" ? ai(t) : ie(_o, null, String(t));
}
function ai(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : _r(t);
}
function Nh(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (le(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Nh(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !Iy(e) ? e._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    me(e) ? (e = { default: e, _ctx: ht }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [eu(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function VE(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Ae([e.class, r.class]));
      else if (i === "style")
        e.style = Ci([e.style, r.style]);
      else if (po(i)) {
        const s = e[i], a = r[i];
        a && s !== a && !(le(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function nr(t, e, n, r = null) {
  Cn(t, e, 7, [
    n,
    r
  ]);
}
const GE = Py();
let jE = 0;
function UE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || GE, s = {
    uid: jE++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Fg(
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
    propsOptions: $y(r, i),
    emitsOptions: gy(r, i),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = sE(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = k1.bind(null, s), t.ce && t.ce(s), s;
}
let St = null;
const bo = () => St || ht;
let tu, Mf;
{
  const t = Ru(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  tu = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => St = n
  ), Mf = e(
    "__VUE_SSR_SETTERS__",
    (n) => Wu = n
  );
}
const Eo = (t) => {
  const e = St;
  return tu(t), t.scope.on(), () => {
    t.scope.off(), tu(e);
  };
}, Hd = () => {
  St && St.scope.off(), tu(null);
}, BE = /* @__PURE__ */ qr("slot,component");
function Tf(t, { isNativeTag: e }) {
  (BE(t) || e(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Xy(t) {
  return t.vnode.shapeFlag & 4;
}
let Wu = !1;
function WE(t, e = !1) {
  e && Mf(e);
  const { props: n, children: r } = t.vnode, i = Xy(t);
  yE(t, n, i, e), ME(t, r);
  const s = i ? qE(t, e) : void 0;
  return e && Mf(!1), s;
}
function qE(t, e) {
  var n;
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Tf(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let a = 0; a < s.length; a++)
        Tf(s[a], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let a = 0; a < s.length; a++)
        Ey(s[a]);
    }
    r.compilerOptions && HE() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Cy), process.env.NODE_ENV !== "production" && aE(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? YE(t) : null, a = Eo(t);
    Hr();
    const o = $r(
      i,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? Rr(t.props) : t.props,
        s
      ]
    );
    if (zr(), a(), uh(o)) {
      if (o.then(Hd, Hd), e)
        return o.then((l) => {
          zd(t, l, e);
        }).catch((l) => {
          go(l, t, 0);
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      zd(t, o, e);
  } else
    Ky(t, e);
}
function zd(t, e, n) {
  me(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Be(e) ? (process.env.NODE_ENV !== "production" && ea(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = sy(e), process.env.NODE_ENV !== "production" && oE(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Ky(t, n);
}
let Nf;
const HE = () => !Nf;
function Ky(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Nf && !r.render) {
      const i = r.template || Mh(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Ar(t, "compile");
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
        r.render = Nf(i, u), process.env.NODE_ENV !== "production" && kr(t, "compile");
      }
    }
    t.render = r.render || yt;
  }
  {
    const i = Eo(t);
    Hr();
    try {
      uE(t);
    } finally {
      zr(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && t.render === yt && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const Yd = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return Kl(), It(t, "get", ""), t[e];
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
function zE(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return It(t, "get", "$slots"), e[n];
    }
  }));
}
function YE(t) {
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
        return n || (n = new Proxy(t.attrs, Yd));
      },
      get slots() {
        return zE(t);
      },
      get emit() {
        return (r, ...i) => t.emit(r, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, Yd),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function qu(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(sy(mi(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in ss)
          return ss[n](t);
      },
      has(e, n) {
        return n in e || n in ss;
      }
    }));
}
const XE = /(?:^|[-_])(\w)/g, KE = (t) => t.replace(XE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Ch(t, e = !0) {
  return me(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Hu(t, e, n = !1) {
  let r = Ch(e);
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
  return r ? KE(r) : n ? "App" : "Anonymous";
}
function Zy(t) {
  return me(t) && "__vccOpts" in t;
}
const de = (t, e) => {
  const n = a1(t, e, Wu);
  if (process.env.NODE_ENV !== "production") {
    const r = bo();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Jy(t, e, n) {
  const r = arguments.length;
  return r === 2 ? Be(e) && !le(e) ? ea(e) ? ie(t, null, [e]) : ie(t, e) : ie(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ea(n) && (n = [n]), ie(t, e, n));
}
function ZE() {
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
        ["span", t, rs(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${cs(c) ? " (readonly)" : ""}`
      ] : cs(c) ? [
        "div",
        {},
        ["span", t, rs(c) ? "ShallowReadonly" : "Readonly"],
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
    c.type.props && c.props && h.push(a("props", _e(c.props))), c.setupState !== Ke && h.push(a("setup", c.setupState)), c.data !== Ke && h.push(a("data", _e(c.data)));
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
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : Be(c) ? ["object", { object: h ? _e(c) : c }] : ["span", n, String(c)];
  }
  function l(c, h) {
    const d = c.type;
    if (me(d))
      return;
    const m = {};
    for (const p in c.ctx)
      u(d, p, h) && (m[p] = c.ctx[p]);
    return m;
  }
  function u(c, h, d) {
    const m = c[d];
    if (le(m) && m.includes(h) || Be(m) && h in m || c.extends && u(c.extends, h, d) || c.mixins && c.mixins.some((p) => u(p, h, d)))
      return !0;
  }
  function f(c) {
    return rs(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Xd = "3.4.25", bi = process.env.NODE_ENV !== "production" ? q : yt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const JE = "http://www.w3.org/2000/svg", QE = "http://www.w3.org/1998/Math/MathML", oi = typeof document < "u" ? document : null, Kd = oi && /* @__PURE__ */ oi.createElement("template"), eS = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? oi.createElementNS(JE, t) : e === "mathml" ? oi.createElementNS(QE, t) : oi.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => oi.createTextNode(t),
  createComment: (t) => oi.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => oi.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  insertStaticContent(t, e, n, r, i, s) {
    const a = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Kd.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
      const o = Kd.content;
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
}, Jr = "transition", ma = "animation", no = Symbol("_vtc"), zu = (t, { slots: e }) => Jy(Y1, tS(t), e);
zu.displayName = "Transition";
const Qy = {
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
zu.props = /* @__PURE__ */ et(
  {},
  Sy,
  Qy
);
const Vi = (t, e = []) => {
  le(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, Zd = (t) => t ? le(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function tS(t) {
  const e = {};
  for (const I in t)
    I in Qy || (e[I] = t[I]);
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
  } = t, m = nS(i), p = m && m[0], g = m && m[1], {
    onBeforeEnter: y,
    onEnter: v,
    onEnterCancelled: b,
    onLeave: E,
    onLeaveCancelled: x,
    onBeforeAppear: N = y,
    onAppear: O = v,
    onAppearCancelled: P = b
  } = e, k = (I, Q, ve) => {
    Gi(I, Q ? f : o), Gi(I, Q ? u : a), ve && ve();
  }, C = (I, Q) => {
    I._isLeaving = !1, Gi(I, c), Gi(I, d), Gi(I, h), Q && Q();
  }, R = (I) => (Q, ve) => {
    const T = I ? O : v, $ = () => k(Q, I, ve);
    Vi(T, [Q, $]), Jd(() => {
      Gi(Q, I ? l : s), Qr(Q, I ? f : o), Zd(T) || Qd(Q, r, p, $);
    });
  };
  return et(e, {
    onBeforeEnter(I) {
      Vi(y, [I]), Qr(I, s), Qr(I, a);
    },
    onBeforeAppear(I) {
      Vi(N, [I]), Qr(I, l), Qr(I, u);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(I, Q) {
      I._isLeaving = !0;
      const ve = () => C(I, Q);
      Qr(I, c), Qr(I, h), sS(), Jd(() => {
        !I._isLeaving || (Gi(I, c), Qr(I, d), Zd(E) || Qd(I, r, g, ve));
      }), Vi(E, [I, ve]);
    },
    onEnterCancelled(I) {
      k(I, !1), Vi(b, [I]);
    },
    onAppearCancelled(I) {
      k(I, !0), Vi(P, [I]);
    },
    onLeaveCancelled(I) {
      C(I), Vi(x, [I]);
    }
  });
}
function nS(t) {
  if (t == null)
    return null;
  if (Be(t))
    return [yc(t.enter), yc(t.leave)];
  {
    const e = yc(t);
    return [e, e];
  }
}
function yc(t) {
  const e = lf(t);
  return process.env.NODE_ENV !== "production" && p1(e, "<transition> explicit duration"), e;
}
function Qr(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[no] || (t[no] = /* @__PURE__ */ new Set())).add(e);
}
function Gi(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[no];
  n && (n.delete(e), n.size || (t[no] = void 0));
}
function Jd(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let rS = 0;
function Qd(t, e, n, r) {
  const i = t._endId = ++rS, s = () => {
    i === t._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: o, propCount: l } = iS(t, e);
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
function iS(t, e) {
  const n = window.getComputedStyle(t), r = (m) => (n[m] || "").split(", "), i = r(`${Jr}Delay`), s = r(`${Jr}Duration`), a = em(i, s), o = r(`${ma}Delay`), l = r(`${ma}Duration`), u = em(o, l);
  let f = null, c = 0, h = 0;
  e === Jr ? a > 0 && (f = Jr, c = a, h = s.length) : e === ma ? u > 0 && (f = ma, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? Jr : ma : null, h = f ? f === Jr ? s.length : l.length : 0);
  const d = f === Jr && /\b(transform|all)(,|$)/.test(
    r(`${Jr}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: h,
    hasTransform: d
  };
}
function em(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => tm(n) + tm(t[r])));
}
function tm(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function sS() {
  return document.body.offsetHeight;
}
function aS(t, e, n) {
  const r = t[no];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const nm = Symbol("_vod"), oS = Symbol("_vsh");
process.env.NODE_ENV;
const lS = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), uS = /(^|;)\s*display\s*:/;
function cS(t, e, n) {
  const r = t.style, i = it(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (it(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Tl(r, o, "");
        }
      else
        for (const a in e)
          n[a] == null && Tl(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), Tl(r, a, n[a]);
  } else if (i) {
    if (e !== n) {
      const a = r[lS];
      a && (n += ";" + a), r.cssText = n, s = uS.test(n);
    }
  } else
    e && t.removeAttribute("style");
  nm in t && (t[nm] = s ? r.display : "", t[oS] && (r.display = "none"));
}
const fS = /[^\\];\s*$/, rm = /\s*!important$/;
function Tl(t, e, n) {
  if (le(n))
    n.forEach((r) => Tl(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && fS.test(n) && bi(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = hS(t, e);
    rm.test(n) ? t.setProperty(
      un(r),
      n.replace(rm, ""),
      "important"
    ) : t[r] = n;
  }
}
const im = ["Webkit", "Moz", "ms"], vc = {};
function hS(t, e) {
  const n = vc[e];
  if (n)
    return n;
  let r = gn(e);
  if (r !== "filter" && r in t)
    return vc[e] = r;
  r = us(r);
  for (let i = 0; i < im.length; i++) {
    const s = im[i] + r;
    if (s in t)
      return vc[e] = s;
  }
  return e;
}
const sm = "http://www.w3.org/1999/xlink";
function dS(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(sm, e.slice(6, e.length)) : t.setAttributeNS(sm, e, n);
  else {
    const s = Ib(e);
    n == null || s && !Rg(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function mS(t, e, n, r, i, s, a) {
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
    u === "boolean" ? n = Rg(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && bi(
      `Failed setting prop "${e}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  l && t.removeAttribute(e);
}
function pS(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function gS(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const am = Symbol("_vei");
function yS(t, e, n, r, i = null) {
  const s = t[am] || (t[am] = {}), a = s[e];
  if (r && a)
    a.value = process.env.NODE_ENV !== "production" ? lm(r, e) : r;
  else {
    const [o, l] = vS(e);
    if (r) {
      const u = s[e] = ES(
        process.env.NODE_ENV !== "production" ? lm(r, e) : r,
        i
      );
      pS(t, o, u, l);
    } else
      a && (gS(t, o, a, l), s[e] = void 0);
  }
}
const om = /(?:Once|Passive|Capture)$/;
function vS(t) {
  let e;
  if (om.test(t)) {
    e = {};
    let r;
    for (; r = t.match(om); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : un(t.slice(2)), e];
}
let _c = 0;
const _S = /* @__PURE__ */ Promise.resolve(), bS = () => _c || (_S.then(() => _c = 0), _c = Date.now());
function ES(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Cn(
      SS(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = bS(), n;
}
function lm(t, e) {
  return me(t) || le(t) ? t : (bi(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), yt);
}
function SS(t, e) {
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
const um = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, wS = (t, e, n, r, i, s, a, o, l) => {
  const u = i === "svg";
  e === "class" ? aS(t, r, u) : e === "style" ? cS(t, n, r) : po(e) ? ql(e) || yS(t, e, n, r, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : xS(t, e, r, u)) ? mS(
    t,
    e,
    r,
    s,
    a,
    o,
    l
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), dS(t, e, r, u));
};
function xS(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && um(e) && me(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return um(e) && it(n) ? !1 : e in t;
}
const OS = ["ctrl", "shift", "alt", "meta"], MS = {
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
  exact: (t, e) => OS.some((n) => t[`${n}Key`] && !e.includes(n))
}, ar = (t, e) => {
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = (i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = MS[e[a]];
      if (o && o(i, e))
        return;
    }
    return t(i, ...s);
  });
}, TS = {
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
    if (e.some((a) => a === s || TS[a] === s))
      return t(i);
  });
}, NS = /* @__PURE__ */ et({ patchProp: wS }, eS);
let cm;
function ev() {
  return cm || (cm = CE(NS));
}
const fm = (...t) => {
  ev().render(...t);
}, CS = (...t) => {
  const e = ev().createApp(...t);
  process.env.NODE_ENV !== "production" && (PS(e), AS(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = kS(r);
    if (!i)
      return;
    const s = e._component;
    !me(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const a = n(i, !1, LS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function LS(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function PS(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Pb(e) || Ab(e) || kb(e),
    writable: !1
  });
}
function AS(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        bi(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return bi(r), n;
      },
      set() {
        bi(r);
      }
    });
  }
}
function kS(t) {
  if (it(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && bi(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && bi(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
/**
* vue v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function DS() {
  ZE();
}
process.env.NODE_ENV !== "production" && DS();
/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */
function fi(t) {
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fi(t);
}
function Cf(t, e) {
  return Cf = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Cf(t, e);
}
function IS() {
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
function Nl(t, e, n) {
  return IS() ? Nl = Reflect.construct : Nl = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && Cf(u, a.prototype), u;
  }, Nl.apply(null, arguments);
}
function jn(t) {
  return RS(t) || $S(t) || FS(t) || VS();
}
function RS(t) {
  if (Array.isArray(t))
    return Lf(t);
}
function $S(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function FS(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Lf(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Lf(t, e);
  }
}
function Lf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function VS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var GS = Object.hasOwnProperty, hm = Object.setPrototypeOf, jS = Object.isFrozen, US = Object.getPrototypeOf, BS = Object.getOwnPropertyDescriptor, en = Object.freeze, kn = Object.seal, WS = Object.create, tv = typeof Reflect < "u" && Reflect, nu = tv.apply, Pf = tv.construct;
nu || (nu = function(e, n, r) {
  return e.apply(n, r);
});
en || (en = function(e) {
  return e;
});
kn || (kn = function(e) {
  return e;
});
Pf || (Pf = function(e, n) {
  return Nl(e, jn(n));
});
var qS = Dn(Array.prototype.forEach), dm = Dn(Array.prototype.pop), pa = Dn(Array.prototype.push), Cl = Dn(String.prototype.toLowerCase), bc = Dn(String.prototype.toString), mm = Dn(String.prototype.match), Rn = Dn(String.prototype.replace), HS = Dn(String.prototype.indexOf), zS = Dn(String.prototype.trim), Ft = Dn(RegExp.prototype.test), Ec = YS(TypeError);
function Dn(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return nu(t, e, r);
  };
}
function YS(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return Pf(t, n);
  };
}
function Le(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Cl, hm && hm(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var a = n(s);
      a !== s && (jS(e) || (e[i] = a), s = a);
    }
    t[s] = !0;
  }
  return t;
}
function ji(t) {
  var e = WS(null), n;
  for (n in t)
    nu(GS, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function Xo(t, e) {
  for (; t !== null; ) {
    var n = BS(t, e);
    if (n) {
      if (n.get)
        return Dn(n.get);
      if (typeof n.value == "function")
        return Dn(n.value);
    }
    t = US(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var pm = en(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Sc = en(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wc = en(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), XS = en(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xc = en(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), KS = en(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), gm = en(["#text"]), ym = en(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Oc = en(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), vm = en(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ko = en(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ZS = kn(/\{\{[\w\W]*|[\w\W]*\}\}/gm), JS = kn(/<%[\w\W]*|[\w\W]*%>/gm), QS = kn(/\${[\w\W]*}/gm), ew = kn(/^data-[\-\w.\u00B7-\uFFFF]/), tw = kn(/^aria-[\-\w]+$/), nw = kn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), rw = kn(/^(?:\w+script|data):/i), iw = kn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), sw = kn(/^html$/i), aw = kn(/^[a-z][.\w]*(-[.\w]+)+$/i), ow = function() {
  return typeof window > "u" ? null : window;
}, lw = function(e, n) {
  if (fi(e) !== "object" || typeof e.createPolicy != "function")
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
function nv() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ow(), e = function(w) {
    return nv(w);
  };
  if (e.version = "2.5.0", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, m = o.prototype, p = Xo(m, "cloneNode"), g = Xo(m, "nextSibling"), y = Xo(m, "childNodes"), v = Xo(m, "parentNode");
  if (typeof s == "function") {
    var b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  var E = lw(d, n), x = E ? E.createHTML("") : "", N = r, O = N.implementation, P = N.createNodeIterator, k = N.createDocumentFragment, C = N.getElementsByTagName, R = n.importNode, I = {};
  try {
    I = ji(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var Q = {};
  e.isSupported = typeof v == "function" && O && O.createHTMLDocument !== void 0 && I !== 9;
  var ve = ZS, T = JS, $ = QS, z = ew, K = tw, Ce = rw, Pe = iw, dt = aw, Rt = nw, Te = null, Ct = Le({}, [].concat(jn(pm), jn(Sc), jn(wc), jn(xc), jn(gm))), st = null, Jn = Le({}, [].concat(jn(ym), jn(Oc), jn(vm), jn(Ko))), De = Object.seal(Object.create(null, {
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
  })), tn = null, Qn = null, Or = !0, Lt = !0, er = !1, Mr = !0, _ = !1, S = !0, D = !1, V = !1, G = !1, W = !1, Z = !1, B = !1, X = !0, U = !1, ne = "user-content-", ue = !0, ae = !1, he = {}, xe = null, $e = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Je = null, mt = Le({}, ["audio", "video", "img", "source", "image", "track"]), zt = null, Tr = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ii = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", bn = "http://www.w3.org/1999/xhtml", ut = bn, nn = !1, Es = null, U_ = Le({}, [Ii, tr, bn], bc), Ri, B_ = ["application/xhtml+xml", "text/html"], W_ = "text/html", Ot, Ss = null, q_ = r.createElement("form"), ad = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, oc = function(w) {
    Ss && Ss === w || ((!w || fi(w) !== "object") && (w = {}), w = ji(w), Ri = B_.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Ri = W_ : Ri = w.PARSER_MEDIA_TYPE, Ot = Ri === "application/xhtml+xml" ? bc : Cl, Te = "ALLOWED_TAGS" in w ? Le({}, w.ALLOWED_TAGS, Ot) : Ct, st = "ALLOWED_ATTR" in w ? Le({}, w.ALLOWED_ATTR, Ot) : Jn, Es = "ALLOWED_NAMESPACES" in w ? Le({}, w.ALLOWED_NAMESPACES, bc) : U_, zt = "ADD_URI_SAFE_ATTR" in w ? Le(
      ji(Tr),
      w.ADD_URI_SAFE_ATTR,
      Ot
    ) : Tr, Je = "ADD_DATA_URI_TAGS" in w ? Le(
      ji(mt),
      w.ADD_DATA_URI_TAGS,
      Ot
    ) : mt, xe = "FORBID_CONTENTS" in w ? Le({}, w.FORBID_CONTENTS, Ot) : $e, tn = "FORBID_TAGS" in w ? Le({}, w.FORBID_TAGS, Ot) : {}, Qn = "FORBID_ATTR" in w ? Le({}, w.FORBID_ATTR, Ot) : {}, he = "USE_PROFILES" in w ? w.USE_PROFILES : !1, Or = w.ALLOW_ARIA_ATTR !== !1, Lt = w.ALLOW_DATA_ATTR !== !1, er = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Mr = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _ = w.SAFE_FOR_TEMPLATES || !1, S = w.SAFE_FOR_XML !== !1, D = w.WHOLE_DOCUMENT || !1, W = w.RETURN_DOM || !1, Z = w.RETURN_DOM_FRAGMENT || !1, B = w.RETURN_TRUSTED_TYPE || !1, G = w.FORCE_BODY || !1, X = w.SANITIZE_DOM !== !1, U = w.SANITIZE_NAMED_PROPS || !1, ue = w.KEEP_CONTENT !== !1, ae = w.IN_PLACE || !1, Rt = w.ALLOWED_URI_REGEXP || Rt, ut = w.NAMESPACE || bn, De = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && ad(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (De.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && ad(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (De.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _ && (Lt = !1), Z && (W = !0), he && (Te = Le({}, jn(gm)), st = [], he.html === !0 && (Le(Te, pm), Le(st, ym)), he.svg === !0 && (Le(Te, Sc), Le(st, Oc), Le(st, Ko)), he.svgFilters === !0 && (Le(Te, wc), Le(st, Oc), Le(st, Ko)), he.mathMl === !0 && (Le(Te, xc), Le(st, vm), Le(st, Ko))), w.ADD_TAGS && (Te === Ct && (Te = ji(Te)), Le(Te, w.ADD_TAGS, Ot)), w.ADD_ATTR && (st === Jn && (st = ji(st)), Le(st, w.ADD_ATTR, Ot)), w.ADD_URI_SAFE_ATTR && Le(zt, w.ADD_URI_SAFE_ATTR, Ot), w.FORBID_CONTENTS && (xe === $e && (xe = ji(xe)), Le(xe, w.FORBID_CONTENTS, Ot)), ue && (Te["#text"] = !0), D && Le(Te, ["html", "head", "body"]), Te.table && (Le(Te, ["tbody"]), delete tn.tbody), en && en(w), Ss = w);
  }, od = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), ld = Le({}, ["foreignobject", "desc", "title", "annotation-xml"]), H_ = Le({}, ["title", "style", "font", "a", "script"]), Fo = Le({}, Sc);
  Le(Fo, wc), Le(Fo, XS);
  var lc = Le({}, xc);
  Le(lc, KS);
  var z_ = function(w) {
    var Y = v(w);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: ut,
      tagName: "template"
    });
    var re = Cl(w.tagName), Fe = Cl(Y.tagName);
    return Es[w.namespaceURI] ? w.namespaceURI === tr ? Y.namespaceURI === bn ? re === "svg" : Y.namespaceURI === Ii ? re === "svg" && (Fe === "annotation-xml" || od[Fe]) : Boolean(Fo[re]) : w.namespaceURI === Ii ? Y.namespaceURI === bn ? re === "math" : Y.namespaceURI === tr ? re === "math" && ld[Fe] : Boolean(lc[re]) : w.namespaceURI === bn ? Y.namespaceURI === tr && !ld[Fe] || Y.namespaceURI === Ii && !od[Fe] ? !1 : !lc[re] && (H_[re] || !Fo[re]) : !!(Ri === "application/xhtml+xml" && Es[w.namespaceURI]) : !1;
  }, In = function(w) {
    pa(e.removed, {
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
  }, uc = function(w, Y) {
    try {
      pa(e.removed, {
        attribute: Y.getAttributeNode(w),
        from: Y
      });
    } catch {
      pa(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(w), w === "is" && !st[w])
      if (W || Z)
        try {
          In(Y);
        } catch {
        }
      else
        try {
          Y.setAttribute(w, "");
        } catch {
        }
  }, ud = function(w) {
    var Y, re;
    if (G)
      w = "<remove></remove>" + w;
    else {
      var Fe = mm(w, /^[\r\n\t ]+/);
      re = Fe && Fe[0];
    }
    Ri === "application/xhtml+xml" && ut === bn && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var rn = E ? E.createHTML(w) : w;
    if (ut === bn)
      try {
        Y = new h().parseFromString(rn, Ri);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = O.createDocument(ut, "template", null);
      try {
        Y.documentElement.innerHTML = nn ? x : rn;
      } catch {
      }
    }
    var $t = Y.body || Y.documentElement;
    return w && re && $t.insertBefore(r.createTextNode(re), $t.childNodes[0] || null), ut === bn ? C.call(Y, D ? "html" : "body")[0] : D ? Y.documentElement : $t;
  }, cd = function(w) {
    return P.call(
      w.ownerDocument || w,
      w,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Y_ = function(w) {
    return w instanceof c && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof f) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, fa = function(w) {
    return fi(a) === "object" ? w instanceof a : w && fi(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, Nr = function(w, Y, re) {
    !Q[w] || qS(Q[w], function(Fe) {
      Fe.call(e, Y, re, Ss);
    });
  }, fd = function(w) {
    var Y;
    if (Nr("beforeSanitizeElements", w, null), Y_(w) || Ft(/[\u0080-\uFFFF]/, w.nodeName))
      return In(w), !0;
    var re = Ot(w.nodeName);
    if (Nr("uponSanitizeElement", w, {
      tagName: re,
      allowedTags: Te
    }), w.hasChildNodes() && !fa(w.firstElementChild) && (!fa(w.content) || !fa(w.content.firstElementChild)) && Ft(/<[/\w]/g, w.innerHTML) && Ft(/<[/\w]/g, w.textContent) || re === "select" && Ft(/<template/i, w.innerHTML) || w.nodeType === 7 || S && w.nodeType === 8 && Ft(/<[/\w]/g, w.data))
      return In(w), !0;
    if (!Te[re] || tn[re]) {
      if (!tn[re] && dd(re) && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, re) || De.tagNameCheck instanceof Function && De.tagNameCheck(re)))
        return !1;
      if (ue && !xe[re]) {
        var Fe = v(w) || w.parentNode, rn = y(w) || w.childNodes;
        if (rn && Fe)
          for (var $t = rn.length, Pt = $t - 1; Pt >= 0; --Pt)
            Fe.insertBefore(p(rn[Pt], !0), g(w));
      }
      return In(w), !0;
    }
    return w instanceof o && !z_(w) || (re === "noscript" || re === "noembed" || re === "noframes") && Ft(/<\/no(script|embed|frames)/i, w.innerHTML) ? (In(w), !0) : (_ && w.nodeType === 3 && (Y = w.textContent, Y = Rn(Y, ve, " "), Y = Rn(Y, T, " "), Y = Rn(Y, $, " "), w.textContent !== Y && (pa(e.removed, {
      element: w.cloneNode()
    }), w.textContent = Y)), Nr("afterSanitizeElements", w, null), !1);
  }, hd = function(w, Y, re) {
    if (X && (Y === "id" || Y === "name") && (re in r || re in q_))
      return !1;
    if (!(Lt && !Qn[Y] && Ft(z, Y))) {
      if (!(Or && Ft(K, Y))) {
        if (!st[Y] || Qn[Y]) {
          if (!(dd(w) && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, w) || De.tagNameCheck instanceof Function && De.tagNameCheck(w)) && (De.attributeNameCheck instanceof RegExp && Ft(De.attributeNameCheck, Y) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(Y)) || Y === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, re) || De.tagNameCheck instanceof Function && De.tagNameCheck(re))))
            return !1;
        } else if (!zt[Y]) {
          if (!Ft(Rt, Rn(re, Pe, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && w !== "script" && HS(re, "data:") === 0 && Je[w])) {
              if (!(er && !Ft(Ce, Rn(re, Pe, "")))) {
                if (re)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, dd = function(w) {
    return w !== "annotation-xml" && mm(w, dt);
  }, md = function(w) {
    var Y, re, Fe, rn;
    Nr("beforeSanitizeAttributes", w, null);
    var $t = w.attributes;
    if (!!$t) {
      var Pt = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: st
      };
      for (rn = $t.length; rn--; ) {
        Y = $t[rn];
        var Vo = Y, Mt = Vo.name, cc = Vo.namespaceURI;
        if (re = Mt === "value" ? Y.value : zS(Y.value), Fe = Ot(Mt), Pt.attrName = Fe, Pt.attrValue = re, Pt.keepAttr = !0, Pt.forceKeepAttr = void 0, Nr("uponSanitizeAttribute", w, Pt), re = Pt.attrValue, !Pt.forceKeepAttr && (uc(Mt, w), !!Pt.keepAttr)) {
          if (!Mr && Ft(/\/>/i, re)) {
            uc(Mt, w);
            continue;
          }
          _ && (re = Rn(re, ve, " "), re = Rn(re, T, " "), re = Rn(re, $, " "));
          var pd = Ot(w.nodeName);
          if (!!hd(pd, Fe, re)) {
            if (U && (Fe === "id" || Fe === "name") && (uc(Mt, w), re = ne + re), E && fi(d) === "object" && typeof d.getAttributeType == "function" && !cc)
              switch (d.getAttributeType(pd, Fe)) {
                case "TrustedHTML": {
                  re = E.createHTML(re);
                  break;
                }
                case "TrustedScriptURL": {
                  re = E.createScriptURL(re);
                  break;
                }
              }
            try {
              cc ? w.setAttributeNS(cc, Mt, re) : w.setAttribute(Mt, re), dm(e.removed);
            } catch {
            }
          }
        }
      }
      Nr("afterSanitizeAttributes", w, null);
    }
  }, X_ = function ce(w) {
    var Y, re = cd(w);
    for (Nr("beforeSanitizeShadowDOM", w, null); Y = re.nextNode(); )
      Nr("uponSanitizeShadowNode", Y, null), !fd(Y) && (Y.content instanceof i && ce(Y.content), md(Y));
    Nr("afterSanitizeShadowDOM", w, null);
  };
  return e.sanitize = function(ce) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y, re, Fe, rn, $t;
    if (nn = !ce, nn && (ce = "<!-->"), typeof ce != "string" && !fa(ce))
      if (typeof ce.toString == "function") {
        if (ce = ce.toString(), typeof ce != "string")
          throw Ec("dirty is not a string, aborting");
      } else
        throw Ec("toString is not a function");
    if (!e.isSupported) {
      if (fi(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (fa(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (V || oc(w), e.removed = [], typeof ce == "string" && (ae = !1), ae) {
      if (ce.nodeName) {
        var Pt = Ot(ce.nodeName);
        if (!Te[Pt] || tn[Pt])
          throw Ec("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      Y = ud("<!---->"), re = Y.ownerDocument.importNode(ce, !0), re.nodeType === 1 && re.nodeName === "BODY" || re.nodeName === "HTML" ? Y = re : Y.appendChild(re);
    else {
      if (!W && !_ && !D && ce.indexOf("<") === -1)
        return E && B ? E.createHTML(ce) : ce;
      if (Y = ud(ce), !Y)
        return W ? null : B ? x : "";
    }
    Y && G && In(Y.firstChild);
    for (var Vo = cd(ae ? ce : Y); Fe = Vo.nextNode(); )
      Fe.nodeType === 3 && Fe === rn || fd(Fe) || (Fe.content instanceof i && X_(Fe.content), md(Fe), rn = Fe);
    if (rn = null, ae)
      return ce;
    if (W) {
      if (Z)
        for ($t = k.call(Y.ownerDocument); Y.firstChild; )
          $t.appendChild(Y.firstChild);
      else
        $t = Y;
      return (st.shadowroot || st.shadowrootmod) && ($t = R.call(n, $t, !0)), $t;
    }
    var Mt = D ? Y.outerHTML : Y.innerHTML;
    return D && Te["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Ft(sw, Y.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + Mt), _ && (Mt = Rn(Mt, ve, " "), Mt = Rn(Mt, T, " "), Mt = Rn(Mt, $, " ")), E && B ? E.createHTML(Mt) : Mt;
  }, e.setConfig = function(ce) {
    oc(ce), V = !0;
  }, e.clearConfig = function() {
    Ss = null, V = !1;
  }, e.isValidAttribute = function(ce, w, Y) {
    Ss || oc({});
    var re = Ot(ce), Fe = Ot(w);
    return hd(re, Fe, Y);
  }, e.addHook = function(ce, w) {
    typeof w == "function" && (Q[ce] = Q[ce] || [], pa(Q[ce], w));
  }, e.removeHook = function(ce) {
    if (Q[ce])
      return dm(Q[ce]);
  }, e.removeHooks = function(ce) {
    Q[ce] && (Q[ce] = []);
  }, e.removeAllHooks = function() {
    Q = {};
  }, e;
}
var uw = nv();
function cw(t, e) {
  var i;
  const n = (i = t.hooks) != null ? i : {};
  let r;
  for (r in n) {
    const s = n[r];
    s !== void 0 && e.addHook(r, s);
  }
}
function rv() {
  return uw();
}
function fw(t = {}, e = rv) {
  const n = e();
  cw(t, n);
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
const hw = {
  install(t, e = {}, n = rv) {
    t.directive(
      "dompurify-html",
      fw(e, n)
    );
  }
};
var Lh = !1;
function Zo(t, e, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), n) : (t[e] = n, n);
}
function Mc(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function dw() {
  return iv().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function iv() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const mw = typeof Proxy == "function", pw = "devtools-plugin:setup", gw = "plugin:settings:set";
let ws, Af;
function yw() {
  var t;
  return ws !== void 0 || (typeof window < "u" && window.performance ? (ws = !0, Af = window.performance) : typeof globalThis < "u" && ((t = globalThis.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (ws = !0, Af = globalThis.perf_hooks.performance) : ws = !1), ws;
}
function vw() {
  return yw() ? Af.now() : Date.now();
}
class _w {
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
        return vw();
      }
    }, n && n.on(gw, (a, o) => {
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
function sv(t, e) {
  const n = t, r = iv(), i = dw(), s = mw && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(pw, t, e);
  else {
    const a = s ? new _w(n, i) : null;
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
let xa;
const ro = (t) => xa = t, av = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function hs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var dr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(dr || (dr = {}));
const Yu = typeof window < "u", Va = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Yu, _m = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function bw(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function Ph(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    uv(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function ov(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Ll(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const Pl = typeof navigator == "object" ? navigator : { userAgent: "" }, lv = /* @__PURE__ */ (() => /Macintosh/.test(Pl.userAgent) && /AppleWebKit/.test(Pl.userAgent) && !/Safari/.test(Pl.userAgent))(), uv = Yu ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !lv ? Ew : "msSaveOrOpenBlob" in Pl ? Sw : ww : () => {
};
function Ew(t, e = "download", n) {
  const r = document.createElement("a");
  r.download = e, r.rel = "noopener", typeof t == "string" ? (r.href = t, r.origin !== location.origin ? ov(r.href) ? Ph(t, e, n) : (r.target = "_blank", Ll(r)) : Ll(r)) : (r.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Ll(r);
  }, 0));
}
function Sw(t, e = "download", n) {
  if (typeof t == "string")
    if (ov(t))
      Ph(t, e, n);
    else {
      const r = document.createElement("a");
      r.href = t, r.target = "_blank", setTimeout(function() {
        Ll(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(bw(t, n), e);
}
function ww(t, e, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
    return Ph(t, e, n);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(_m.HTMLElement)) || "safari" in _m, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || lv) && typeof FileReader < "u") {
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
function Ah(t) {
  return "_a" in t && "install" in t;
}
function cv() {
  if (!("clipboard" in navigator))
    return Tt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function fv(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Tt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function xw(t) {
  if (!cv())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Tt("Global state copied to clipboard.");
    } catch (e) {
      if (fv(e))
        return;
      Tt("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function Ow(t) {
  if (!cv())
    try {
      hv(t, JSON.parse(await navigator.clipboard.readText())), Tt("Global state pasted from clipboard.");
    } catch (e) {
      if (fv(e))
        return;
      Tt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function Mw(t) {
  try {
    uv(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Tt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Cr;
function Tw() {
  Cr || (Cr = document.createElement("input"), Cr.type = "file", Cr.accept = ".json");
  function t() {
    return new Promise((e, n) => {
      Cr.onchange = async () => {
        const r = Cr.files;
        if (!r)
          return e(null);
        const i = r.item(0);
        return e(i ? { text: await i.text(), file: i } : null);
      }, Cr.oncancel = () => e(null), Cr.onerror = n, Cr.click();
    });
  }
  return t;
}
async function Nw(t) {
  try {
    const n = await Tw()();
    if (!n)
      return;
    const { text: r, file: i } = n;
    hv(t, JSON.parse(r)), Tt(`Global state imported from "${i.name}".`);
  } catch (e) {
    Tt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function hv(t, e) {
  for (const n in e) {
    const r = t.state.value[n];
    r ? Object.assign(r, e[n]) : t.state.value[n] = e[n];
  }
}
function Un(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const dv = "\u{1F34D} Pinia (root)", kf = "_root";
function Cw(t) {
  return Ah(t) ? {
    id: kf,
    label: dv
  } : {
    id: t.$id,
    label: t.$id
  };
}
function Lw(t) {
  if (Ah(t)) {
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
function Pw(t) {
  return t ? Array.isArray(t) ? t.reduce((e, n) => (e.keys.push(n.key), e.operations.push(n.type), e.oldValue[n.key] = n.oldValue, e.newValue[n.key] = n.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Un(t.type),
    key: Un(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function Aw(t) {
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
let Ds = !0;
const Al = [], Yi = "pinia:mutations", jt = "pinia", { assign: kw } = Object, ru = (t) => "\u{1F34D} " + t;
function Dw(t, e) {
  sv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Al,
    app: t
  }, (n) => {
    typeof n.now != "function" && Tt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Yi,
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
            xw(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Ow(e), n.sendInspectorTree(jt), n.sendInspectorState(jt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Mw(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Nw(e), n.sendInspectorTree(jt), n.sendInspectorState(jt);
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
            type: ru(o.$id),
            key: "state",
            editable: !0,
            value: o._isOptionsAPI ? {
              _custom: {
                value: _e(o.$state),
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
            type: ru(o.$id),
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
        i = i.concat(Array.from(e._s.values())), r.rootNodes = (r.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(r.filter.toLowerCase()) : dv.toLowerCase().includes(r.filter.toLowerCase())) : i).map(Cw);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === t && r.inspectorId === jt) {
        const i = r.nodeId === kf ? e : e._s.get(r.nodeId);
        if (!i)
          return;
        i && (r.state = Lw(i));
      }
    }), n.on.editInspectorState((r, i) => {
      if (r.app === t && r.inspectorId === jt) {
        const s = r.nodeId === kf ? e : e._s.get(r.nodeId);
        if (!s)
          return Tt(`store "${r.nodeId}" not found`, "error");
        const { path: a } = r;
        Ah(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), Ds = !1, r.set(s, a, r.state.value), Ds = !0;
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
        a[0] = "$state", Ds = !1, r.set(s, a, r.state.value), Ds = !0;
      }
    });
  });
}
function Iw(t, e) {
  Al.includes(ru(e.$id)) || Al.push(ru(e.$id)), sv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Al,
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
      const f = mv++;
      n.addTimelineEvent({
        layerId: Yi,
        event: {
          time: r(),
          title: "\u{1F6EB} " + l,
          subtitle: "start",
          data: {
            store: Un(e.$id),
            action: Un(l),
            args: u
          },
          groupId: f
        }
      }), a((c) => {
        pi = void 0, n.addTimelineEvent({
          layerId: Yi,
          event: {
            time: r(),
            title: "\u{1F6EC} " + l,
            subtitle: "end",
            data: {
              store: Un(e.$id),
              action: Un(l),
              args: u,
              result: c
            },
            groupId: f
          }
        });
      }), o((c) => {
        pi = void 0, n.addTimelineEvent({
          layerId: Yi,
          event: {
            time: r(),
            logType: "error",
            title: "\u{1F4A5} " + l,
            subtitle: "end",
            data: {
              store: Un(e.$id),
              action: Un(l),
              args: u,
              error: c
            },
            groupId: f
          }
        });
      });
    }, !0), e._customProperties.forEach((a) => {
      tt(() => M(e[a]), (o, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(jt), Ds && n.addTimelineEvent({
          layerId: Yi,
          event: {
            time: r(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: o,
              oldValue: l
            },
            groupId: pi
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: a, type: o }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(jt), !Ds)
        return;
      const u = {
        time: r(),
        title: Aw(o),
        data: kw({ store: Un(e.$id) }, Pw(a)),
        groupId: pi
      };
      o === dr.patchFunction ? u.subtitle = "\u2935\uFE0F" : o === dr.patchObject ? u.subtitle = "\u{1F9E9}" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: Yi,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = mi((a) => {
      i(a), n.addTimelineEvent({
        layerId: Yi,
        event: {
          time: r(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: Un(e.$id),
            info: Un("HMR update")
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
let mv = 0, pi;
function bm(t, e, n) {
  const r = e.reduce((i, s) => (i[s] = _e(t)[s], i), {});
  for (const i in r)
    t[i] = function() {
      const s = mv, a = n ? new Proxy(t, {
        get(...l) {
          return pi = s, Reflect.get(...l);
        },
        set(...l) {
          return pi = s, Reflect.set(...l);
        }
      }) : t;
      pi = s;
      const o = r[i].apply(a, arguments);
      return pi = void 0, o;
    };
}
function Rw({ app: t, store: e, options: n }) {
  if (e.$id.startsWith("__hot:"))
    return;
  e._isOptionsAPI = !!n.state, bm(e, Object.keys(n.actions), e._isOptionsAPI);
  const r = e._hotUpdate;
  _e(e)._hotUpdate = function(i) {
    r.apply(this, arguments), bm(e, Object.keys(i._hmrPayload.actions), !!e._isOptionsAPI);
  }, Iw(
    t,
    e
  );
}
function $w() {
  const t = Vg(!0), e = t.run(() => we({}));
  let n = [], r = [];
  const i = mi({
    install(s) {
      ro(i), i._a = s, s.provide(av, i), s.config.globalProperties.$pinia = i, Va && Dw(s, i), r.forEach((a) => n.push(a)), r = [];
    },
    use(s) {
      return !this._a && !Lh ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return Va && typeof Proxy < "u" && i.use(Rw), i;
}
function pv(t, e) {
  for (const n in e) {
    const r = e[n];
    if (!(n in t))
      continue;
    const i = t[n];
    hs(i) && hs(r) && !Ye(r) && !hr(r) ? t[n] = pv(i, r) : t[n] = r;
  }
  return t;
}
const gv = () => {
};
function Em(t, e, n, r = gv) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && Gg() && $b(i), i;
}
function xs(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const Fw = (t) => t();
function Df(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    hs(i) && hs(r) && t.hasOwnProperty(n) && !Ye(r) && !hr(r) ? t[n] = Df(i, r) : t[n] = r;
  }
  return t;
}
const Vw = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function Gw(t) {
  return !hs(t) || !t.hasOwnProperty(Vw);
}
const { assign: wn } = Object;
function Sm(t) {
  return !!(Ye(t) && t.effect);
}
function wm(t, e, n, r) {
  const { state: i, actions: s, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && r ? hf(we(i ? i() : {}).value) : hf(n.state.value[t]);
    return wn(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = mi(de(() => {
      ro(n);
      const d = n._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = If(t, u, e, n, r, !0), l;
}
function If(t, e, n = {}, r, i, s) {
  let a;
  const o = wn({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !Lh && (l.onTrigger = (C) => {
    u ? d = C : u == !1 && !O._hotUpdating && (Array.isArray(d) ? d.push(C) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, c = [], h = [], d;
  const m = r.state.value[t];
  !s && !m && (process.env.NODE_ENV === "production" || !i) && (r.state.value[t] = {});
  const p = we({});
  let g;
  function y(C) {
    let R;
    u = f = !1, process.env.NODE_ENV !== "production" && (d = []), typeof C == "function" ? (C(r.state.value[t]), R = {
      type: dr.patchFunction,
      storeId: t,
      events: d
    }) : (Df(r.state.value[t], C), R = {
      type: dr.patchObject,
      payload: C,
      storeId: t,
      events: d
    });
    const I = g = Symbol();
    Yl().then(() => {
      g === I && (u = !0);
    }), f = !0, xs(c, R, r.state.value[t]);
  }
  const v = s ? function() {
    const { state: R } = n, I = R ? R() : {};
    this.$patch((Q) => {
      wn(Q, I);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : gv;
  function b() {
    a.stop(), c = [], h = [], r._s.delete(t);
  }
  function E(C, R) {
    return function() {
      ro(r);
      const I = Array.from(arguments), Q = [], ve = [];
      function T(K) {
        Q.push(K);
      }
      function $(K) {
        ve.push(K);
      }
      xs(h, {
        args: I,
        name: C,
        store: O,
        after: T,
        onError: $
      });
      let z;
      try {
        z = R.apply(this && this.$id === t ? this : O, I);
      } catch (K) {
        throw xs(ve, K), K;
      }
      return z instanceof Promise ? z.then((K) => (xs(Q, K), K)).catch((K) => (xs(ve, K), Promise.reject(K))) : (xs(Q, z), z);
    };
  }
  const x = /* @__PURE__ */ mi({
    actions: {},
    getters: {},
    state: [],
    hotState: p
  }), N = {
    _p: r,
    $id: t,
    $onAction: Em.bind(null, h),
    $patch: y,
    $reset: v,
    $subscribe(C, R = {}) {
      const I = Em(c, C, R.detached, () => Q()), Q = a.run(() => tt(() => r.state.value[t], (ve) => {
        (R.flush === "sync" ? f : u) && C({
          storeId: t,
          type: dr.direct,
          events: d
        }, ve);
      }, wn({}, l, R)));
      return I;
    },
    $dispose: b
  }, O = Vu(process.env.NODE_ENV !== "production" || Va ? wn(
    {
      _hmrPayload: x,
      _customProperties: mi(/* @__PURE__ */ new Set())
    },
    N
  ) : N);
  r._s.set(t, O);
  const k = (r._a && r._a.runWithContext || Fw)(() => r._e.run(() => (a = Vg()).run(e)));
  for (const C in k) {
    const R = k[C];
    if (Ye(R) && !Sm(R) || hr(R))
      process.env.NODE_ENV !== "production" && i ? Zo(p.value, C, Sl(k, C)) : s || (m && Gw(R) && (Ye(R) ? R.value = m[C] : Df(R, m[C])), r.state.value[t][C] = R), process.env.NODE_ENV !== "production" && x.state.push(C);
    else if (typeof R == "function") {
      const I = process.env.NODE_ENV !== "production" && i ? R : E(C, R);
      k[C] = I, process.env.NODE_ENV !== "production" && (x.actions[C] = R), o.actions[C] = R;
    } else
      process.env.NODE_ENV !== "production" && Sm(R) && (x.getters[C] = s ? n.getters[C] : R, Yu && (k._getters || (k._getters = mi([]))).push(C));
  }
  if (wn(O, k), wn(_e(O), k), Object.defineProperty(O, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? p.value : r.state.value[t],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      y((R) => {
        wn(R, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (O._hotUpdate = mi((C) => {
    O._hotUpdating = !0, C._hmrPayload.state.forEach((R) => {
      if (R in O.$state) {
        const I = C.$state[R], Q = O.$state[R];
        typeof I == "object" && hs(I) && hs(Q) ? pv(I, Q) : C.$state[R] = Q;
      }
      Zo(O, R, Sl(C.$state, R));
    }), Object.keys(O.$state).forEach((R) => {
      R in C.$state || Mc(O, R);
    }), u = !1, f = !1, r.state.value[t] = Sl(C._hmrPayload, "hotState"), f = !0, Yl().then(() => {
      u = !0;
    });
    for (const R in C._hmrPayload.actions) {
      const I = C[R];
      Zo(O, R, E(R, I));
    }
    for (const R in C._hmrPayload.getters) {
      const I = C._hmrPayload.getters[R], Q = s ? de(() => (ro(r), I.call(O, O))) : I;
      Zo(O, R, Q);
    }
    Object.keys(O._hmrPayload.getters).forEach((R) => {
      R in C._hmrPayload.getters || Mc(O, R);
    }), Object.keys(O._hmrPayload.actions).forEach((R) => {
      R in C._hmrPayload.actions || Mc(O, R);
    }), O._hmrPayload = C._hmrPayload, O._getters = C._getters, O._hotUpdating = !1;
  })), Va) {
    const C = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(O, R, wn({ value: O[R] }, C));
    });
  }
  return r._p.forEach((C) => {
    if (Va) {
      const R = a.run(() => C({
        store: O,
        app: r._a,
        pinia: r,
        options: o
      }));
      Object.keys(R || {}).forEach((I) => O._customProperties.add(I)), wn(O, R);
    } else
      wn(O, a.run(() => C({
        store: O,
        app: r._a,
        pinia: r,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && O.$state && typeof O.$state == "object" && typeof O.$state.constructor == "function" && !O.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${O.$id}".`), m && s && n.hydrate && n.hydrate(O.$state, m), u = !0, f = !0, O;
}
function ys(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  if (typeof t == "string")
    r = t, i = s ? n : e;
  else if (i = t, r = t.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');
  function a(o, l) {
    const u = gE();
    if (o = (process.env.NODE_ENV === "test" && xa && xa._testing ? null : o) || (u ? Ws(av, null) : null), o && ro(o), process.env.NODE_ENV !== "production" && !xa)
      throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = xa, o._s.has(r) || (s ? If(r, e, i, o) : wm(r, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + r, h = s ? If(c, e, i, o, !0) : wm(c, wn({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && Yu) {
      const c = bo();
      if (c && c.proxy && !l) {
        const h = c.proxy, d = "_pStores" in h ? h._pStores : h._pStores = {};
        d[r] = f;
      }
    }
    return f;
  }
  return a.$id = r, a;
}
function He(t) {
  if (Lh)
    return hf(t);
  {
    t = _e(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (Ye(r) || hr(r)) && (e[n] = Sl(t, n));
    }
    return e;
  }
}
function jw(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var ds = 1, ms = 2, Hs = 3, Uw = 4, Rf = 5, xm = 6378137, Bw = 6356752314e-3, Om = 0.0066943799901413165, Ga = 484813681109536e-20, H = Math.PI / 2, Ww = 0.16666666666666666, qw = 0.04722222222222222, Hw = 0.022156084656084655, te = 1e-10, kt = 0.017453292519943295, ur = 57.29577951308232, We = Math.PI / 4, io = Math.PI * 2, gt = 3.14159265359, cn = {};
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
const zw = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var Mm = /[\s_\-\/\(\)]/g;
function Oi(t, e) {
  if (t[e])
    return t[e];
  for (var n = Object.keys(t), r = e.toLowerCase().replace(Mm, ""), i = -1, s, a; ++i < n.length; )
    if (s = n[i], a = s.toLowerCase().replace(Mm, ""), a === r)
      return t[s];
}
function $f(t) {
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
      e.lat0 = o * kt;
    },
    lat_1: function(o) {
      e.lat1 = o * kt;
    },
    lat_2: function(o) {
      e.lat2 = o * kt;
    },
    lat_ts: function(o) {
      e.lat_ts = o * kt;
    },
    lon_0: function(o) {
      e.long0 = o * kt;
    },
    lon_1: function(o) {
      e.long1 = o * kt;
    },
    lon_2: function(o) {
      e.long2 = o * kt;
    },
    alpha: function(o) {
      e.alpha = parseFloat(o) * kt;
    },
    gamma: function(o) {
      e.rectified_grid_angle = parseFloat(o);
    },
    lonc: function(o) {
      e.longc = o * kt;
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
      var l = Oi(zw, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * kt;
    },
    pm: function(o) {
      var l = Oi(cn, o);
      e.from_greenwich = (l || parseFloat(o)) * kt;
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
var so = 1, yv = 2, vv = 3, iu = 4, _v = 5, kh = -1, Yw = /\s/, Xw = /[A-Za-z]/, Kw = /[A-Za-z84_]/, Xu = /[,\]]/, bv = /[\d\.E\-\+]/;
function Xr(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = so;
}
Xr.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== iu)
    for (; Yw.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case so:
      return this.neutral(t);
    case yv:
      return this.keyword(t);
    case iu:
      return this.quoted(t);
    case _v:
      return this.afterquote(t);
    case vv:
      return this.number(t);
    case kh:
      return;
  }
};
Xr.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = iu;
    return;
  }
  if (Xu.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
Xr.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = so;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = so, this.currentObject = this.stack.pop(), this.currentObject || (this.state = kh);
    return;
  }
};
Xr.prototype.number = function(t) {
  if (bv.test(t)) {
    this.word += t;
    return;
  }
  if (Xu.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
Xr.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = _v;
    return;
  }
  this.word += t;
};
Xr.prototype.keyword = function(t) {
  if (Kw.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = so;
    return;
  }
  if (Xu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
Xr.prototype.neutral = function(t) {
  if (Xw.test(t)) {
    this.word = t, this.state = yv;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = iu;
    return;
  }
  if (bv.test(t)) {
    this.word = t, this.state = vv;
    return;
  }
  if (Xu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
Xr.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === kh)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function Zw(t) {
  var e = new Xr(t);
  return e.output();
}
function Tm(t, e, n) {
  Array.isArray(e) && (n.unshift(e), e = null);
  var r = e ? {} : t, i = n.reduce(function(s, a) {
    return Is(a, s), s;
  }, r);
  e && (t[e] = i);
}
function Is(t, e) {
  if (!Array.isArray(t)) {
    e[t] = !0;
    return;
  }
  var n = t.shift();
  if (n === "PARAMETER" && (n = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      e[n] = {}, Is(t[0], e[n]);
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
      }, t.length === 3 && Is(t[2], e[n]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      e[n] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && Is(t[3], e[n]);
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
      t[0] = ["name", t[0]], Tm(e, n, t);
      return;
    default:
      for (r = -1; ++r < t.length; )
        if (!Array.isArray(t[r]))
          return Is(t, e[n]);
      return Tm(e, n, t);
  }
}
var Jw = 0.017453292519943295;
function Qw(t, e) {
  var n = e[0], r = e[1];
  !(n in t) && r in t && (t[n] = t[r], e.length === 3 && (t[n] = e[2](t[n])));
}
function rr(t) {
  return t * Jw;
}
function ex(t) {
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
    return Qw(t, u);
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
function Ev(t) {
  var e = Zw(t), n = e.shift(), r = e.shift();
  e.unshift(["name", r]), e.unshift(["type", n]);
  var i = {};
  return Is(e, i), ex(i), i;
}
function Kt(t) {
  var e = this;
  if (arguments.length === 2) {
    var n = arguments[1];
    typeof n == "string" ? n.charAt(0) === "+" ? Kt[t] = $f(arguments[1]) : Kt[t] = Ev(arguments[1]) : Kt[t] = n;
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
jw(Kt);
function tx(t) {
  return typeof t == "string";
}
function nx(t) {
  return t in Kt;
}
var rx = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function ix(t) {
  return rx.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var sx = ["3857", "900913", "3785", "102113"];
function ax(t) {
  var e = Oi(t, "authority");
  if (!!e) {
    var n = Oi(e, "epsg");
    return n && sx.indexOf(n) > -1;
  }
}
function ox(t) {
  var e = Oi(t, "extension");
  if (!!e)
    return Oi(e, "proj4");
}
function lx(t) {
  return t[0] === "+";
}
function ux(t) {
  if (tx(t)) {
    if (nx(t))
      return Kt[t];
    if (ix(t)) {
      var e = Ev(t);
      if (ax(e))
        return Kt["EPSG:3857"];
      var n = ox(e);
      return n ? $f(n) : e;
    }
    if (lx(t))
      return $f(t);
  } else
    return t;
}
function Nm(t, e) {
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
function So(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= gt ? t : t - So(t) * io;
}
function Yn(t, e, n) {
  var r = t * n, i = 0.5 * t;
  return r = Math.pow((1 - r) / (1 + r), i), Math.tan(0.5 * (H - e)) / r;
}
function ao(t, e) {
  for (var n = 0.5 * t, r, i, s = H - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (r = t * Math.sin(s), i = H - 2 * Math.atan(e * Math.pow((1 - r) / (1 + r), n)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function cx() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function fx(t) {
  var e = t.x, n = t.y;
  if (n * ur > 90 && n * ur < -90 && e * ur > 180 && e * ur < -180)
    return null;
  var r, i;
  if (Math.abs(Math.abs(n) - H) <= te)
    return null;
  if (this.sphere)
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(We + 0.5 * n));
  else {
    var s = Math.sin(n), a = Yn(this.e, n, s);
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 - this.a * this.k0 * Math.log(a);
  }
  return t.x = r, t.y = i, t;
}
function hx(t) {
  var e = t.x - this.x0, n = t.y - this.y0, r, i;
  if (this.sphere)
    i = H - 2 * Math.atan(Math.exp(-n / (this.a * this.k0)));
  else {
    var s = Math.exp(-n / (this.a * this.k0));
    if (i = ao(this.e, s), i === -9999)
      return null;
  }
  return r = se(this.long0 + e / (this.a * this.k0)), t.x = r, t.y = i, t;
}
var dx = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const mx = {
  init: cx,
  forward: fx,
  inverse: hx,
  names: dx
};
function px() {
}
function Cm(t) {
  return t;
}
var gx = ["longlat", "identity"];
const yx = {
  init: px,
  forward: Cm,
  inverse: Cm,
  names: gx
};
var vx = [mx, yx], kl = {}, su = [];
function Sv(t, e) {
  var n = su.length;
  return t.names ? (su[n] = t, t.names.forEach(function(r) {
    kl[r.toLowerCase()] = n;
  }), this) : (console.log(e), !0);
}
function _x(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof kl[e] < "u" && su[kl[e]])
    return su[kl[e]];
}
function bx() {
  vx.forEach(Sv);
}
const Ex = {
  start: bx,
  add: Sv,
  get: _x
};
var be = {};
be.MERIT = {
  a: 6378137,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
be.SGS85 = {
  a: 6378136,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
be.GRS80 = {
  a: 6378137,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
be.IAU76 = {
  a: 6378140,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
be.airy = {
  a: 6377563396e-3,
  b: 635625691e-2,
  ellipseName: "Airy 1830"
};
be.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
be.NWL9D = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
be.mod_airy = {
  a: 6377340189e-3,
  b: 6356034446e-3,
  ellipseName: "Modified Airy"
};
be.andrae = {
  a: 637710443e-2,
  rf: 300,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
be.aust_SA = {
  a: 6378160,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
be.GRS67 = {
  a: 6378160,
  rf: 298.247167427,
  ellipseName: "GRS 67(IUGG 1967)"
};
be.bessel = {
  a: 6377397155e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
be.bess_nam = {
  a: 6377483865e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
be.clrk66 = {
  a: 63782064e-1,
  b: 63565838e-1,
  ellipseName: "Clarke 1866"
};
be.clrk80 = {
  a: 6378249145e-3,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
be.clrk80ign = {
  a: 63782492e-1,
  b: 6356515,
  rf: 293.4660213,
  ellipseName: "Clarke 1880 (IGN)"
};
be.clrk58 = {
  a: 6378293645208759e-9,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
be.CPM = {
  a: 63757387e-1,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
be.delmbr = {
  a: 6376428,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
be.engelis = {
  a: 637813605e-2,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
be.evrst30 = {
  a: 6377276345e-3,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
be.evrst48 = {
  a: 6377304063e-3,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
be.evrst56 = {
  a: 6377301243e-3,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
be.evrst69 = {
  a: 6377295664e-3,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
be.evrstSS = {
  a: 6377298556e-3,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
be.fschr60 = {
  a: 6378166,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
be.fschr60m = {
  a: 6378155,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
be.fschr68 = {
  a: 6378150,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
be.helmert = {
  a: 6378200,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
be.hough = {
  a: 6378270,
  rf: 297,
  ellipseName: "Hough"
};
be.intl = {
  a: 6378388,
  rf: 297,
  ellipseName: "International 1909 (Hayford)"
};
be.kaula = {
  a: 6378163,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
be.lerch = {
  a: 6378139,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
be.mprts = {
  a: 6397300,
  rf: 191,
  ellipseName: "Maupertius 1738"
};
be.new_intl = {
  a: 63781575e-1,
  b: 63567722e-1,
  ellipseName: "New International 1967"
};
be.plessis = {
  a: 6376523,
  rf: 6355863,
  ellipseName: "Plessis 1817 (France)"
};
be.krass = {
  a: 6378245,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
be.SEasia = {
  a: 6378155,
  b: 63567733205e-4,
  ellipseName: "Southeast Asia"
};
be.walbeck = {
  a: 6376896,
  b: 63558348467e-4,
  ellipseName: "Walbeck"
};
be.WGS60 = {
  a: 6378165,
  rf: 298.3,
  ellipseName: "WGS 60"
};
be.WGS66 = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "WGS 66"
};
be.WGS7 = {
  a: 6378135,
  rf: 298.26,
  ellipseName: "WGS 72"
};
var Sx = be.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
be.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function wx(t, e, n, r) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  r ? (t *= 1 - a * (Ww + a * (qw + a * Hw)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function xx(t, e, n, r, i) {
  if (!t) {
    var s = Oi(be, r);
    s || (s = Sx), t = s.a, e = s.b, n = s.rf;
  }
  return n && !e && (e = (1 - 1 / n) * t), (n === 0 || Math.abs(t - e) < te) && (i = !0, e = t), {
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
function Ox(t, e, n, r, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = Rf : o.datum_type = Uw, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = ds), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = ms, o.datum_params[3] *= Ga, o.datum_params[4] *= Ga, o.datum_params[5] *= Ga, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = Hs, o.grids = a), o.a = n, o.b = r, o.es = i, o.ep2 = s, o;
}
var wv = {};
function Mx(t, e) {
  var n = new DataView(e), r = Cx(n), i = Lx(n, r), s = Px(n, i, r), a = { header: i, subgrids: s };
  return wv[t] = a, a;
}
function Tx(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(Nx);
}
function Nx(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: wv[t] || null,
    isNull: !1
  };
}
function Rs(t) {
  return t / 3600 * Math.PI / 180;
}
function Cx(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function Lx(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: Ff(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function Ff(t, e, n) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, n)));
}
function Px(t, e, n) {
  for (var r = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = kx(t, r, n), o = Dx(t, r, a, n), l = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), u = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    i.push({
      ll: [Rs(a.lowerLongitude), Rs(a.lowerLatitude)],
      del: [Rs(a.longitudeInterval), Rs(a.latitudeInterval)],
      lim: [l, u],
      count: a.gridNodeCount,
      cvs: Ax(o)
    }), r += 176 + a.gridNodeCount * 16;
  }
  return i;
}
function Ax(t) {
  return t.map(function(e) {
    return [Rs(e.longitudeShift), Rs(e.latitudeShift)];
  });
}
function kx(t, e, n) {
  return {
    name: Ff(t, e + 8, e + 16).trim(),
    parent: Ff(t, e + 24, e + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(e + 72, n),
    upperLatitude: t.getFloat64(e + 88, n),
    lowerLongitude: t.getFloat64(e + 104, n),
    upperLongitude: t.getFloat64(e + 120, n),
    latitudeInterval: t.getFloat64(e + 136, n),
    longitudeInterval: t.getFloat64(e + 152, n),
    gridNodeCount: t.getInt32(e + 168, n)
  };
}
function Dx(t, e, n, r) {
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
function mr(t, e) {
  if (!(this instanceof mr))
    return new mr(t);
  e = e || function(u) {
    if (u)
      throw u;
  };
  var n = ux(t);
  if (typeof n != "object") {
    e(t);
    return;
  }
  var r = mr.projections.get(n.projName);
  if (!r) {
    e(t);
    return;
  }
  if (n.datumCode && n.datumCode !== "none") {
    var i = Oi(xt, n.datumCode);
    i && (n.datum_params = n.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), n.ellps = i.ellipse, n.datumName = i.datumName ? i.datumName : n.datumCode);
  }
  n.k0 = n.k0 || 1, n.axis = n.axis || "enu", n.ellps = n.ellps || "wgs84", n.lat1 = n.lat1 || n.lat0;
  var s = xx(n.a, n.b, n.rf, n.ellps, n.sphere), a = wx(s.a, s.b, s.rf, n.R_A), o = Tx(n.nadgrids), l = n.datum || Ox(
    n.datumCode,
    n.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  Nm(this, n), Nm(this, r), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
mr.projections = Ex;
mr.projections.start();
function Ix(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === ds ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === ms ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function xv(t, e, n) {
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
function Ov(t, e, n, r) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, m, p, g, y, v, b, E = t.x, x = t.y, N = t.z ? t.z : 0, O, P, k;
  if (o = Math.sqrt(E * E + x * x), l = Math.sqrt(E * E + x * x + N * N), o / n < i) {
    if (O = 0, l / n < i)
      return P = H, k = -r, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    O = Math.atan2(x, E);
  u = N / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), m = f * (1 - e) * c, p = u * c, b = 0;
  do
    b++, d = n / Math.sqrt(1 - e * p * p), k = o * m + N * p - d * (1 - e * p * p), h = e * d / (d + k), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), g = f * (1 - h) * c, y = u * c, v = y * m - g * p, m = g, p = y;
  while (v * v > s && b < a);
  return P = Math.atan(y / Math.abs(g)), {
    x: O,
    y: P,
    z: k
  };
}
function Rx(t, e, n) {
  if (e === ds)
    return {
      x: t.x + n[0],
      y: t.y + n[1],
      z: t.z + n[2]
    };
  if (e === ms) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + r,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function $x(t, e, n) {
  if (e === ds)
    return {
      x: t.x - n[0],
      y: t.y - n[1],
      z: t.z - n[2]
    };
  if (e === ms) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6], f = (t.x - r) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function Jo(t) {
  return t === ds || t === ms;
}
function Fx(t, e, n) {
  if (Ix(t, e) || t.datum_type === Rf || e.datum_type === Rf)
    return n;
  var r = t.a, i = t.es;
  if (t.datum_type === Hs) {
    var s = Lm(t, !1, n);
    if (s !== 0)
      return;
    r = xm, i = Om;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === Hs && (a = xm, o = Bw, l = Om), i === l && r === a && !Jo(t.datum_type) && !Jo(e.datum_type))
    return n;
  if (n = xv(n, i, r), Jo(t.datum_type) && (n = Rx(n, t.datum_type, t.datum_params)), Jo(e.datum_type) && (n = $x(n, e.datum_type, e.datum_params)), n = Ov(n, l, a, o), e.datum_type === Hs) {
    var u = Lm(e, !0, n);
    if (u !== 0)
      return;
  }
  return n;
}
function Lm(t, e, n) {
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
        var c = l[u], h = (Math.abs(c.del[1]) + Math.abs(c.del[0])) / 1e4, d = c.ll[0] - h, m = c.ll[1] - h, p = c.ll[0] + (c.lim[0] - 1) * c.del[0] + h, g = c.ll[1] + (c.lim[1] - 1) * c.del[1] + h;
        if (!(m > r.y || d > r.x || g < r.y || p < r.x) && (i = Vx(r, e, c), !isNaN(i.x)))
          break e;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -r.x * ur + " " + r.y * ur + " tried: '" + s + "'"), -1) : (n.x = -i.x, n.y = i.y, 0);
}
function Vx(t, e, n) {
  var r = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return r;
  var i = { x: t.x, y: t.y };
  i.x -= n.ll[0], i.y -= n.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = Pm(i, n);
  if (e) {
    if (isNaN(s.x))
      return r;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = Pm(s, n), isNaN(u.x)) {
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
function Pm(t, e) {
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
function Am(t, e, n) {
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
function Mv(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function Gx(t) {
  km(t.x), km(t.y);
}
function km(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function jx(t, e) {
  return (t.datum.datum_type === ds || t.datum.datum_type === ms || t.datum.datum_type === Hs) && e.datumCode !== "WGS84" || (e.datum.datum_type === ds || e.datum.datum_type === ms || e.datum.datum_type === Hs) && t.datumCode !== "WGS84";
}
function au(t, e, n, r) {
  var i;
  Array.isArray(n) ? n = Mv(n) : n = {
    x: n.x,
    y: n.y,
    z: n.z,
    m: n.m
  };
  var s = n.z !== void 0;
  if (Gx(n), t.datum && e.datum && jx(t, e) && (i = new mr("WGS84"), n = au(t, i, n, r), t = i), r && t.axis !== "enu" && (n = Am(t, !1, n)), t.projName === "longlat")
    n = {
      x: n.x * kt,
      y: n.y * kt,
      z: n.z || 0
    };
  else if (t.to_meter && (n = {
    x: n.x * t.to_meter,
    y: n.y * t.to_meter,
    z: n.z || 0
  }), n = t.inverse(n), !n)
    return;
  if (t.from_greenwich && (n.x += t.from_greenwich), n = Fx(t.datum, e.datum, n), !!n)
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
    })), r && e.axis !== "enu" ? Am(e, !0, n) : (n && !s && delete n.z, n);
}
var Dm = mr("WGS84");
function Tc(t, e, n, r) {
  var i, s, a;
  return Array.isArray(n) ? (i = au(t, e, n, r) || { x: NaN, y: NaN }, n.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(n.splice(3)) : [i.x, i.y, n[2]].concat(n.splice(3)) : [i.x, i.y].concat(n.splice(2)) : [i.x, i.y]) : (s = au(t, e, n, r), a = Object.keys(n), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = n[o];
  }), s);
}
function Im(t) {
  return t instanceof mr ? t : t.oProj ? t.oProj : mr(t);
}
function qt(t, e, n) {
  t = Im(t);
  var r = !1, i;
  return typeof e > "u" ? (e = t, t = Dm, r = !0) : (typeof e.x < "u" || Array.isArray(e)) && (n = e, e = t, t = Dm, r = !0), e = Im(e), n ? Tc(t, e, n) : (i = {
    forward: function(s, a) {
      return Tc(t, e, s, a);
    },
    inverse: function(s, a) {
      return Tc(e, t, s, a);
    }
  }, r && (i.oProj = e), i);
}
var Rm = 6, Tv = "AJSAJS", Nv = "AFAFAF", $s = 65, an = 73, xn = 79, Oa = 86, Ma = 90;
const Ux = {
  forward: Cv,
  inverse: Bx,
  toPoint: Lv
};
function Cv(t, e) {
  return e = e || 5, Hx(Wx({
    lat: t[1],
    lon: t[0]
  }), e);
}
function Bx(t) {
  var e = Dh(Av(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function Lv(t) {
  var e = Dh(Av(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function Nc(t) {
  return t * (Math.PI / 180);
}
function $m(t) {
  return 180 * (t / Math.PI);
}
function Wx(t) {
  var e = t.lat, n = t.lon, r = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = Nc(e), m = Nc(n), p, g;
  g = Math.floor((n + 180) / 6) + 1, n === 180 && (g = 60), e >= 56 && e < 64 && n >= 3 && n < 12 && (g = 32), e >= 72 && e < 84 && (n >= 0 && n < 9 ? g = 31 : n >= 9 && n < 21 ? g = 33 : n >= 21 && n < 33 ? g = 35 : n >= 33 && n < 42 && (g = 37)), a = (g - 1) * 6 - 180 + 3, p = Nc(a), o = i / (1 - i), l = r / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (m - p), h = r * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var y = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, v = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (v += 1e7), {
    northing: Math.round(v),
    easting: Math.round(y),
    zoneNumber: g,
    zoneLetter: qx(e)
  };
}
function Dh(t) {
  var e = t.northing, n = t.easting, r = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, m, p, g, y, v, b = n - 5e5, E = e;
  r < "N" && (E -= 1e7), g = (i - 1) * 6 - 180 + 3, l = o / (1 - o), p = E / s, y = p / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), v = y + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * y) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * y) + 151 * u * u * u / 96 * Math.sin(6 * y), f = a / Math.sqrt(1 - o * Math.sin(v) * Math.sin(v)), c = Math.tan(v) * Math.tan(v), h = l * Math.cos(v) * Math.cos(v), d = a * (1 - o) / Math.pow(1 - o * Math.sin(v) * Math.sin(v), 1.5), m = b / (f * s);
  var x = v - f * Math.tan(v) / d * (m * m / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * m * m * m * m / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * m * m * m * m * m * m / 720);
  x = $m(x);
  var N = (m - (1 + 2 * c + h) * m * m * m / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * m * m * m * m * m / 120) / Math.cos(v);
  N = g + $m(N);
  var O;
  if (t.accuracy) {
    var P = Dh({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    O = {
      top: P.lat,
      right: P.lon,
      bottom: x,
      left: N
    };
  } else
    O = {
      lat: x,
      lon: N
    };
  return O;
}
function qx(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function Hx(t, e) {
  var n = "00000" + t.easting, r = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + zx(t.easting, t.northing, t.zoneNumber) + n.substr(n.length - 5, e) + r.substr(r.length - 5, e);
}
function zx(t, e, n) {
  var r = Pv(n), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return Yx(i, s, r);
}
function Pv(t) {
  var e = t % Rm;
  return e === 0 && (e = Rm), e;
}
function Yx(t, e, n) {
  var r = n - 1, i = Tv.charCodeAt(r), s = Nv.charCodeAt(r), a = i + t - 1, o = s + e, l = !1;
  a > Ma && (a = a - Ma + $s - 1, l = !0), (a === an || i < an && a > an || (a > an || i < an) && l) && a++, (a === xn || i < xn && a > xn || (a > xn || i < xn) && l) && (a++, a === an && a++), a > Ma && (a = a - Ma + $s - 1), o > Oa ? (o = o - Oa + $s - 1, l = !0) : l = !1, (o === an || s < an && o > an || (o > an || s < an) && l) && o++, (o === xn || s < xn && o > xn || (o > xn || s < xn) && l) && (o++, o === an && o++), o > Oa && (o = o - Oa + $s - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function Av(t) {
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
  for (var l = Pv(a), u = Xx(n.charAt(0), l), f = Kx(n.charAt(1), l); f < Zx(o); )
    f += 2e6;
  var c = e - s;
  if (c % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var h = c / 2, d = 0, m = 0, p, g, y, v, b;
  return h > 0 && (p = 1e5 / Math.pow(10, h), g = t.substring(s, s + h), d = parseFloat(g) * p, y = t.substring(s + h), m = parseFloat(y) * p), v = d + u, b = m + f, {
    easting: v,
    northing: b,
    zoneLetter: o,
    zoneNumber: a,
    accuracy: p
  };
}
function Xx(t, e) {
  for (var n = Tv.charCodeAt(e - 1), r = 1e5, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > Ma) {
      if (i)
        throw "Bad character: " + t;
      n = $s, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function Kx(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var n = Nv.charCodeAt(e - 1), r = 0, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > Oa) {
      if (i)
        throw "Bad character: " + t;
      n = $s, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function Zx(t) {
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
function ta(t, e, n) {
  if (!(this instanceof ta))
    return new ta(t, e, n);
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
ta.fromMGRS = function(t) {
  return new ta(Lv(t));
};
ta.prototype.toMGRS = function(t) {
  return Cv([this.x, this.y], t);
};
var Jx = 1, Qx = 0.25, Fm = 0.046875, Vm = 0.01953125, Gm = 0.01068115234375, eO = 0.75, tO = 0.46875, nO = 0.013020833333333334, rO = 0.007120768229166667, iO = 0.3645833333333333, sO = 0.005696614583333333, aO = 0.3076171875;
function kv(t) {
  var e = [];
  e[0] = Jx - t * (Qx + t * (Fm + t * (Vm + t * Gm))), e[1] = t * (eO - t * (Fm + t * (Vm + t * Gm)));
  var n = t * t;
  return e[2] = n * (tO - t * (nO + t * rO)), n *= t, e[3] = n * (iO - t * sO), e[4] = n * t * aO, e;
}
function Ku(t, e, n, r) {
  return n *= e, e *= e, r[0] * t - n * (r[1] + e * (r[2] + e * (r[3] + e * r[4])));
}
var oO = 20;
function Dv(t, e, n) {
  for (var r = 1 / (1 - e), i = t, s = oO; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = (Ku(i, a, Math.cos(i), n) - t) * (o * Math.sqrt(o)) * r, i -= o, Math.abs(o) < te)
      return i;
  }
  return i;
}
function lO() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = kv(this.es), this.ml0 = Ku(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function uO(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s, a, o = Math.sin(n), l = Math.cos(n);
  if (this.es) {
    var f = l * r, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), m = Math.abs(l) > te ? Math.tan(n) : 0, p = Math.pow(m, 2), g = Math.pow(p, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var y = Ku(n, o, l, this.en);
    s = this.a * (this.k0 * f * (1 + c / 6 * (1 - p + h + c / 20 * (5 - 18 * p + g + 14 * h - 58 * p * h + c / 42 * (61 + 179 * g - g * p - 479 * p))))) + this.x0, a = this.a * (this.k0 * (y - this.ml0 + o * r * f / 2 * (1 + c / 12 * (5 - p + 9 * h + 4 * d + c / 30 * (61 + g - 58 * p + 270 * h - 330 * p * h + c / 56 * (1385 + 543 * g - g * p - 3111 * p)))))) + this.y0;
  } else {
    var u = l * Math.sin(r);
    if (Math.abs(Math.abs(u) - 1) < te)
      return 93;
    if (s = 0.5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)) + this.x0, a = l * Math.cos(r) / Math.sqrt(1 - Math.pow(u, 2)), u = Math.abs(a), u >= 1) {
      if (u - 1 > te)
        return 93;
      a = 0;
    } else
      a = Math.acos(a);
    n < 0 && (a = -a), a = this.a * this.k0 * (a - this.lat0) + this.y0;
  }
  return t.x = s, t.y = a, t;
}
function cO(t) {
  var e, n, r, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, n = Dv(e, this.es, this.en), Math.abs(n) < H) {
      var c = Math.sin(n), h = Math.cos(n), d = Math.abs(h) > te ? Math.tan(n) : 0, m = this.ep2 * Math.pow(h, 2), p = Math.pow(m, 2), g = Math.pow(d, 2), y = Math.pow(g, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var v = s * Math.sqrt(e) / this.k0, b = Math.pow(v, 2);
      e = e * d, r = n - e * b / (1 - this.es) * 0.5 * (1 - b / 12 * (5 + 3 * g - 9 * m * g + m - 4 * p - b / 30 * (61 + 90 * g - 252 * m * g + 45 * y + 46 * m - b / 56 * (1385 + 3633 * g + 4095 * y + 1574 * y * g)))), i = se(this.long0 + v * (1 - b / 6 * (1 + 2 * g + m - b / 20 * (5 + 28 * g + 24 * y + 8 * m * g + 6 * m - b / 42 * (61 + 662 * g + 1320 * y + 720 * y * g)))) / h);
    } else
      r = H * So(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), r = Math.asin(e), a < 0 && (r = -r), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = r, t;
}
var fO = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const Dl = {
  init: lO,
  forward: uO,
  inverse: cO,
  names: fO
};
function Iv(t) {
  var e = Math.exp(t);
  return e = (e - 1 / e) / 2, e;
}
function Mn(t, e) {
  t = Math.abs(t), e = Math.abs(e);
  var n = Math.max(t, e), r = Math.min(t, e) / (n || 1);
  return n * Math.sqrt(1 + Math.pow(r, 2));
}
function hO(t) {
  var e = 1 + t, n = e - 1;
  return n === 0 ? t : t * Math.log(e) / n;
}
function dO(t) {
  var e = Math.abs(t);
  return e = hO(e * (1 + e / (Mn(1, e) + 1))), t < 0 ? -e : e;
}
function Ih(t, e) {
  for (var n = 2 * Math.cos(2 * e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function mO(t, e) {
  for (var n = 2 * Math.cos(e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return Math.sin(e) * a;
}
function pO(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function Rv(t, e, n) {
  for (var r = Math.sin(e), i = Math.cos(e), s = Iv(n), a = pO(n), o = 2 * i * a, l = -2 * r * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, m, p; --u >= 0; )
    m = h, p = c, h = f, c = d, f = -m + o * h - l * c + t[u], d = -p + l * h + o * c;
  return o = r * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function gO() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (Dl.init.apply(this), this.forward = Dl.forward, this.inverse = Dl.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), n = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), n = n * e, this.cgb[1] = n * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = n * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), n = n * e, this.cgb[2] = n * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = n * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), n = n * e, this.cgb[3] = n * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = n * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), n = n * e, this.cgb[4] = n * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = n * (-734 / 315 + e * (109598 / 31185)), n = n * e, this.cgb[5] = n * (601676 / 22275), this.cbg[5] = n * (444337 / 155925), n = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + n * (1 / 4 + n * (1 / 64 + n / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = n * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = n * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), n = n * e, this.utg[2] = n * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = n * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), n = n * e, this.utg[3] = n * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = n * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), n = n * e, this.utg[4] = n * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = n * (34729 / 80640 + e * (-3418889 / 1995840)), n = n * e, this.utg[5] = n * (-20648693 / 638668800), this.gtu[5] = n * (212378941 / 319334400);
  var r = Ih(this.cbg, this.lat0);
  this.Zb = -this.Qn * (r + mO(this.gtu, 2 * r));
}
function yO(t) {
  var e = se(t.x - this.long0), n = t.y;
  n = Ih(this.cbg, n);
  var r = Math.sin(n), i = Math.cos(n), s = Math.sin(e), a = Math.cos(e);
  n = Math.atan2(r, a * i), e = Math.atan2(s * i, Mn(r, i * a)), e = dO(Math.tan(e));
  var o = Rv(this.gtu, 2 * n, 2 * e);
  n = n + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * n + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function vO(t) {
  var e = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  n = (n - this.Zb) / this.Qn, e = e / this.Qn;
  var r, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = Rv(this.utg, 2 * n, 2 * e);
    n = n + s[0], e = e + s[1], e = Math.atan(Iv(e));
    var a = Math.sin(n), o = Math.cos(n), l = Math.sin(e), u = Math.cos(e);
    n = Math.atan2(a * u, Mn(l, u * o)), e = Math.atan2(l, u * o), r = se(e + this.long0), i = Ih(this.cgb, n);
  } else
    r = 1 / 0, i = 1 / 0;
  return t.x = r, t.y = i, t;
}
var _O = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const Il = {
  init: gO,
  forward: yO,
  inverse: vO,
  names: _O
};
function bO(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var EO = "etmerc";
function SO() {
  var t = bO(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * kt, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Il.init.apply(this), this.forward = Il.forward, this.inverse = Il.inverse;
}
var wO = ["Universal Transverse Mercator System", "utm"];
const xO = {
  init: SO,
  names: wO,
  dependsOn: EO
};
function Rh(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var OO = 20;
function MO() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + We) / (Math.pow(Math.tan(0.5 * this.lat0 + We), this.C) * Rh(this.e * t, this.ratexp));
}
function TO(t) {
  var e = t.x, n = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * n + We), this.C) * Rh(this.e * Math.sin(n), this.ratexp)) - H, t.x = this.C * e, t;
}
function NO(t) {
  for (var e = 1e-14, n = t.x / this.C, r = t.y, i = Math.pow(Math.tan(0.5 * r + We) / this.K, 1 / this.C), s = OO; s > 0 && (r = 2 * Math.atan(i * Rh(this.e * Math.sin(t.y), -0.5 * this.e)) - H, !(Math.abs(r - t.y) < e)); --s)
    t.y = r;
  return s ? (t.x = n, t.y = r, t) : null;
}
var CO = ["gauss"];
const $h = {
  init: MO,
  forward: TO,
  inverse: NO,
  names: CO
};
function LO() {
  $h.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function PO(t) {
  var e, n, r, i;
  return t.x = se(t.x - this.long0), $h.forward.apply(this, [t]), e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * n * r), t.x = i * n * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * n * r), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function AO(t) {
  var e, n, r, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Mn(t.x, t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), n = Math.cos(a), i = Math.asin(n * this.sinc0 + t.y * e * this.cosc0 / s), r = Math.atan2(t.x * e, s * this.cosc0 * n - t.y * this.sinc0 * e);
  } else
    i = this.phic0, r = 0;
  return t.x = r, t.y = i, $h.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var kO = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const DO = {
  init: LO,
  forward: PO,
  inverse: AO,
  names: kO
};
function IO(t, e, n) {
  return e *= n, Math.tan(0.5 * (H + t)) * Math.pow((1 - e) / (1 + e), 0.5 * n);
}
function RO() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && (this.k0 = 0.5 * (1 + So(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= te && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && Math.abs(Math.cos(this.lat_ts)) > te && (this.k0 = 0.5 * this.cons * br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Yn(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = br(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - H, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function $O(t) {
  var e = t.x, n = t.y, r = Math.sin(n), i = Math.cos(n), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= te && Math.abs(n + this.lat0) <= te ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * r + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * r - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(n, r, this.e)) - H, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= te ? (u = Yn(this.e, n * this.con, this.con * r), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < te ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function FO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, n = this.lat0, a <= te ? (t.x = e, t.y = n, t) : (n = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < te ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = n, t);
  } else if (Math.abs(this.coslat0) <= te) {
    if (a <= te)
      return n = this.lat0, e = this.long0, t.x = e, t.y = n, t;
    t.x *= this.con, t.y *= this.con, r = a * this.cons / (2 * this.a * this.k0), n = this.con * ao(this.e, r), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= te ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), n = -1 * ao(this.e, Math.tan(0.5 * (H + s)));
  return t.x = e, t.y = n, t;
}
var VO = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const GO = {
  init: RO,
  forward: $O,
  inverse: FO,
  names: VO,
  ssfn_: IO
};
function jO() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), n = this.a, r = this.rf, i = 1 / r, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * n * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function UO(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), n = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), r = -this.alpha * (e + n) + this.K, i = 2 * (Math.atan(Math.exp(r)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function BO(t) {
  for (var e = t.x - this.x0, n = t.y - this.y0, r = e / this.R, i = 2 * (Math.atan(Math.exp(n / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(r)), a = Math.atan(Math.sin(r) / (Math.cos(this.b0) * Math.cos(r) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var WO = ["somerc"];
const qO = {
  init: jO,
  forward: UO,
  inverse: BO,
  names: WO
};
var As = 1e-7;
function HO(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], n = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(n) !== -1;
}
function zO() {
  var t, e, n, r, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, m = 0, p = 0, g = 0, y = 0;
  this.no_off = HO(this), this.no_rot = "no_rot" in this;
  var v = !1;
  "alpha" in this && (v = !0);
  var b = !1;
  if ("rectified_grid_angle" in this && (b = !0), v && (y = this.alpha), b && (f = this.rectified_grid_angle * kt), v || b)
    h = this.longc;
  else if (d = this.long1, p = this.lat1, m = this.long2, g = this.lat2, Math.abs(p - g) <= As || (t = Math.abs(p)) <= As || Math.abs(t - H) <= As || Math.abs(Math.abs(this.lat0) - H) <= As || Math.abs(Math.abs(g) - H) <= As)
    throw new Error();
  var E = 1 - this.es;
  e = Math.sqrt(E), Math.abs(this.lat0) > te ? (o = Math.sin(this.lat0), n = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = n * n, this.B = Math.sqrt(1 + this.es * this.B * this.B / E), this.A = this.B * this.k0 * e / t, r = this.B * e / (n * Math.sqrt(t)), i = r * r - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += r, this.E *= Math.pow(Yn(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = r = i = 1), v || b ? (v ? (c = Math.asin(Math.sin(y) / r), b || (f = y)) : (c = f, y = Math.asin(r * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(Yn(this.e, p, Math.sin(p)), this.B), a = Math.pow(Yn(this.e, g, Math.sin(g)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - m, t < -Math.pi ? m -= io : t > Math.pi && (m += io), this.lam0 = se(0.5 * (d + m) - Math.atan(u * Math.tan(0.5 * this.B * (d - m)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = y = Math.asin(r * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(r * r - 1) / Math.cos(y))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(We - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(We + i));
}
function YO(t) {
  var e = {}, n, r, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - H) > te) {
    if (a = this.E / Math.pow(Yn(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, n = 0.5 * (a - o), r = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (n * this.singam - s * this.cosgam) / r, Math.abs(Math.abs(i) - 1) < te)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < As ? l = this.A * t.x : l = this.ArB * Math.atan2(n * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function XO(t) {
  var e, n, r, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (n = t.y, e = t.x) : (n = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), r = Math.exp(-this.BrA * n), i = 0.5 * (r - 1 / r), s = 0.5 * (r + 1 / r), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < te)
    l.x = 0, l.y = o < 0 ? -H : H;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = ao(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var KO = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const ZO = {
  init: zO,
  forward: YO,
  inverse: XO,
  names: KO
};
function JO() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < te)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), n = Math.cos(this.lat1), r = br(this.e, e, n), i = Yn(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = br(this.e, s, a), l = Yn(this.e, this.lat2, s), u = Yn(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > te ? this.ns = Math.log(r / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = r / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function QO(t) {
  var e = t.x, n = t.y;
  Math.abs(2 * Math.abs(n) - Math.PI) <= te && (n = So(n) * (H - 2 * te));
  var r = Math.abs(Math.abs(n) - H), i, s;
  if (r > te)
    i = Yn(this.e, n, Math.sin(n)), s = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (r = n * this.ns, r <= 0)
      return null;
    s = 0;
  }
  var a = this.ns * se(e - this.long0);
  return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t;
}
function eM(t) {
  var e, n, r, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), n = 1) : (e = -Math.sqrt(a * a + o * o), n = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(n * a, n * o)), e !== 0 || this.ns > 0) {
    if (n = 1 / this.ns, r = Math.pow(e / (this.a * this.f0), n), i = ao(this.e, r), i === -9999)
      return null;
  } else
    i = -H;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var tM = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const nM = {
  init: JO,
  forward: QO,
  inverse: eM,
  names: tM
};
function rM() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function iM(t) {
  var e, n, r, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), n = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), r = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(n) + Math.sin(this.ad) * Math.cos(n) * Math.cos(r)), s = Math.asin(Math.cos(n) * Math.sin(r) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function sM(t) {
  var e, n, r, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), r = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(r) - Math.sin(this.ad) * Math.cos(r) * Math.cos(i)), n = Math.asin(Math.cos(r) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - n / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var aM = ["Krovak", "krovak"];
const oM = {
  init: rM,
  forward: iM,
  inverse: sM,
  names: aM
};
function Jt(t, e, n, r, i) {
  return t * i - e * Math.sin(2 * i) + n * Math.sin(4 * i) - r * Math.sin(6 * i);
}
function wo(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function xo(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function Oo(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function Mo(t) {
  return t * t * t * (35 / 3072);
}
function na(t, e, n) {
  var r = e * n;
  return t / Math.sqrt(1 - r * r);
}
function aa(t) {
  return Math.abs(t) < H ? t : t - So(t) * Math.PI;
}
function ou(t, e, n, r, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - n * Math.sin(2 * s) + r * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * n * Math.cos(2 * s) + 4 * r * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function lM() {
  this.sphere || (this.e0 = wo(this.es), this.e1 = xo(this.es), this.e2 = Oo(this.es), this.e3 = Mo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function uM(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(r)), n = this.a * (Math.atan2(Math.tan(i), Math.cos(r)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = na(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = r * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), n = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = n + this.y0, t;
}
function cM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i;
  if (this.sphere) {
    var s = n + this.lat0;
    r = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + n, o = ou(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - H) <= te)
      return t.x = this.long0, t.y = H, n < 0 && (t.y *= -1), t;
    var l = na(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    r = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = aa(r), t;
}
var fM = ["Cassini", "Cassini_Soldner", "cass"];
const hM = {
  init: lM,
  forward: uM,
  inverse: cM,
  names: fM
};
function Ei(t, e) {
  var n;
  return t > 1e-7 ? (n = t * e, (1 - t * t) * (e / (1 - n * n) - 0.5 / t * Math.log((1 - n) / (1 + n)))) : 2 * e;
}
var dM = 1, mM = 2, pM = 3, gM = 4;
function yM() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - H) < te ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < te ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = Ei(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = MM(this.es), this.mode) {
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
        this.rq = Math.sqrt(0.5 * this.qp), e = Math.sin(this.lat0), this.sinb1 = Ei(this.e, e) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * e * e) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function vM(t) {
  var e, n, r, i, s, a, o, l, u, f, c = t.x, h = t.y;
  if (c = se(c - this.long0), this.sphere) {
    if (s = Math.sin(h), f = Math.cos(h), r = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (n = this.mode === this.EQUIT ? 1 + f * r : 1 + this.sinph0 * s + this.cosph0 * f * r, n <= te)
        return null;
      n = Math.sqrt(2 / n), e = n * f * Math.sin(c), n *= this.mode === this.EQUIT ? s : this.cosph0 * s - this.sinph0 * f * r;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (r = -r), Math.abs(h + this.lat0) < te)
        return null;
      n = We - h * 0.5, n = 2 * (this.mode === this.S_POLE ? Math.cos(n) : Math.sin(n)), e = n * Math.sin(c), n *= r;
    }
  } else {
    switch (o = 0, l = 0, u = 0, r = Math.cos(c), i = Math.sin(c), s = Math.sin(h), a = Ei(this.e, s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = a / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
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
    if (Math.abs(u) < te)
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
function _M(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i, s, a, o, l, u;
  if (this.sphere) {
    var f = 0, c, h = 0;
    if (c = Math.sqrt(e * e + n * n), i = c * 0.5, i > 1)
      return null;
    switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (h = Math.sin(i), f = Math.cos(i)), this.mode) {
      case this.EQUIT:
        i = Math.abs(c) <= te ? 0 : Math.asin(n * h / c), e *= h, n = f * c;
        break;
      case this.OBLIQ:
        i = Math.abs(c) <= te ? this.lat0 : Math.asin(f * this.sinph0 + n * h * this.cosph0 / c), e *= h * this.cosph0, n = (f - Math.sin(i) * this.sinph0) * c;
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
      if (e /= this.dd, n *= this.dd, l = Math.sqrt(e * e + n * n), l < te)
        return t.x = this.long0, t.y = this.lat0, t;
      a = 2 * Math.asin(0.5 * l / this.rq), s = Math.cos(a), e *= a = Math.sin(a), this.mode === this.OBLIQ ? (u = s * this.sinb1 + n * a * this.cosb1 / l, o = this.qp * u, n = l * this.cosb1 * s - n * this.sinb1 * a) : (u = n * a / l, o = this.qp * u, n = l * s);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (n = -n), o = e * e + n * n, !o)
        return t.x = this.long0, t.y = this.lat0, t;
      u = 1 - o / this.qp, this.mode === this.S_POLE && (u = -u);
    }
    r = Math.atan2(e, n), i = TM(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + r), t.y = i, t;
}
var bM = 0.3333333333333333, EM = 0.17222222222222222, SM = 0.10257936507936508, wM = 0.06388888888888888, xM = 0.0664021164021164, OM = 0.016415012942191543;
function MM(t) {
  var e, n = [];
  return n[0] = t * bM, e = t * t, n[0] += e * EM, n[1] = e * wM, e *= t, n[0] += e * SM, n[1] += e * xM, n[2] = e * OM, n;
}
function TM(t, e) {
  var n = t + t;
  return t + e[0] * Math.sin(n) + e[1] * Math.sin(n + n) + e[2] * Math.sin(n + n + n);
}
var NM = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const CM = {
  init: yM,
  forward: vM,
  inverse: _M,
  names: NM,
  S_POLE: dM,
  N_POLE: mM,
  EQUIT: pM,
  OBLIQ: gM
};
function Mi(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function LM() {
  Math.abs(this.lat1 + this.lat2) < te || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = br(this.e3, this.sin_po, this.cos_po), this.qs1 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = br(this.e3, this.sin_po, this.cos_po), this.qs2 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Ei(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > te ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function PM(t) {
  var e = t.x, n = t.y;
  this.sin_phi = Math.sin(n), this.cos_phi = Math.cos(n);
  var r = Ei(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function AM(t) {
  var e, n, r, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), r = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), r = -1), i = 0, e !== 0 && (i = Math.atan2(r * t.x, r * t.y)), r = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - r * r) / (2 * this.ns0)) : (n = (this.c - r * r) / this.ns0, a = this.phi1z(this.e3, n)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function kM(t, e) {
  var n, r, i, s, a, o = Mi(0.5 * e);
  if (t < te)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (n = Math.sin(o), r = Math.cos(o), i = t * n, s = 1 - i * i, a = 0.5 * s * s / r * (e / (1 - l) - n / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var DM = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const IM = {
  init: LM,
  forward: PM,
  inverse: AM,
  names: DM,
  phi1z: kM
};
function RM() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function $M(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, a > 0 || Math.abs(a) <= te ? (o = this.x0 + this.a * s * n * Math.sin(r) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i) / a) : (o = this.x0 + this.infinity_dist * n * Math.sin(r), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function FM(t) {
  var e, n, r, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), n = Math.sin(i), r = Math.cos(i), a = Mi(r * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.atan2(t.x * n, e * this.cos_p14 * r - t.y * this.sin_p14 * n), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var VM = ["gnom"];
const GM = {
  init: RM,
  forward: $M,
  inverse: FM,
  names: VM
};
function jM(t, e) {
  var n = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(e) - n) < 1e-6)
    return e < 0 ? -1 * H : H;
  for (var r = Math.asin(0.5 * e), i, s, a, o, l = 0; l < 30; l++)
    if (s = Math.sin(r), a = Math.cos(r), o = t * s, i = Math.pow(1 - o * o, 2) / (2 * a) * (e / (1 - t * t) - s / (1 - o * o) + 0.5 / t * Math.log((1 - o) / (1 + o))), r += i, Math.abs(i) <= 1e-10)
      return r;
  return NaN;
}
function UM() {
  this.sphere || (this.k0 = br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function BM(t) {
  var e = t.x, n = t.y, r, i, s = se(e - this.long0);
  if (this.sphere)
    r = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(n) / Math.cos(this.lat_ts);
  else {
    var a = Ei(this.e, Math.sin(n));
    r = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = r, t.y = i, t;
}
function WM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), n = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (n = jM(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = n, t;
}
var qM = ["cea"];
const HM = {
  init: UM,
  forward: BM,
  inverse: WM,
  names: qM
};
function zM() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function YM(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = aa(n - this.lat0);
  return t.x = this.x0 + this.a * r * this.rc, t.y = this.y0 + this.a * i, t;
}
function XM(t) {
  var e = t.x, n = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = aa(this.lat0 + (n - this.y0) / this.a), t;
}
var KM = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const ZM = {
  init: zM,
  forward: YM,
  inverse: XM,
  names: KM
};
var jm = 20;
function JM() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = wo(this.es), this.e1 = xo(this.es), this.e2 = Oo(this.es), this.e3 = Mo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function QM(t) {
  var e = t.x, n = t.y, r, i, s, a = se(e - this.long0);
  if (s = a * Math.sin(n), this.sphere)
    Math.abs(n) <= te ? (r = this.a * a, i = -1 * this.a * this.lat0) : (r = this.a * Math.sin(s) / Math.tan(n), i = this.a * (aa(n - this.lat0) + (1 - Math.cos(s)) / Math.tan(n)));
  else if (Math.abs(n) <= te)
    r = this.a * a, i = -1 * this.ml0;
  else {
    var o = na(this.a, this.e, Math.sin(n)) / Math.tan(n);
    r = o * Math.sin(s), i = this.a * Jt(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(s));
  }
  return t.x = r + this.x0, t.y = i + this.y0, t;
}
function eT(t) {
  var e, n, r, i, s, a, o, l, u;
  if (r = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= te)
      e = se(r / this.a + this.long0), n = 0;
    else {
      a = this.lat0 + i / this.a, o = r * r / this.a / this.a + a * a, l = a;
      var f;
      for (s = jm; s; --s)
        if (f = Math.tan(l), u = -1 * (a * (l * f + 1) - l - 0.5 * (l * l + o) * f) / ((l - a) / f - 1), l += u, Math.abs(u) <= te) {
          n = l;
          break;
        }
      e = se(this.long0 + Math.asin(r * Math.tan(l) / this.a) / Math.sin(n));
    }
  else if (Math.abs(i + this.ml0) <= te)
    n = 0, e = se(this.long0 + r / this.a);
  else {
    a = (this.ml0 + i) / this.a, o = r * r / this.a / this.a + a * a, l = a;
    var c, h, d, m, p;
    for (s = jm; s; --s)
      if (p = this.e * Math.sin(l), c = Math.sqrt(1 - p * p) * Math.tan(l), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), m = h / this.a, u = (a * (c * m + 1) - m - 0.5 * c * (m * m + o)) / (this.es * Math.sin(2 * l) * (m * m + o - 2 * a * m) / (4 * c) + (a - m) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= te) {
        n = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(n), 2)) * Math.tan(n), e = se(this.long0 + Math.asin(r * c / this.a) / Math.sin(n));
  }
  return t.x = e, t.y = n, t;
}
var tT = ["Polyconic", "poly"];
const nT = {
  init: JM,
  forward: QM,
  inverse: eT,
  names: tT
};
function rT() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function iT(t) {
  var e, n = t.x, r = t.y, i = r - this.lat0, s = n - this.long0, a = i / Ga * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, m, p, g = 0, y = 0;
  for (e = 1; e <= 6; e++)
    m = h * f - d * c, p = d * f + h * c, h = m, d = p, g = g + this.B_re[e] * h - this.B_im[e] * d, y = y + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = y * this.a + this.x0, t.y = g * this.a + this.y0, t;
}
function sT(t) {
  var e, n = t.x, r = t.y, i = n - this.x0, s = r - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var m = 0; m < this.iterations; m++) {
    var p = h, g = d, y, v, b = a, E = o;
    for (e = 2; e <= 6; e++)
      y = p * h - g * d, v = g * h + p * d, p = y, g = v, b = b + (e - 1) * (this.B_re[e] * p - this.B_im[e] * g), E = E + (e - 1) * (this.B_im[e] * p + this.B_re[e] * g);
    p = 1, g = 0;
    var x = this.B_re[1], N = this.B_im[1];
    for (e = 2; e <= 6; e++)
      y = p * h - g * d, v = g * h + p * d, p = y, g = v, x = x + e * (this.B_re[e] * p - this.B_im[e] * g), N = N + e * (this.B_im[e] * p + this.B_re[e] * g);
    var O = x * x + N * N;
    h = (b * x + E * N) / O, d = (E * x - b * N) / O;
  }
  var P = h, k = d, C = 1, R = 0;
  for (e = 1; e <= 9; e++)
    C = C * P, R = R + this.D[e] * C;
  var I = this.lat0 + R * Ga * 1e5, Q = this.long0 + k;
  return t.x = Q, t.y = I, t;
}
var aT = ["New_Zealand_Map_Grid", "nzmg"];
const oT = {
  init: rT,
  forward: iT,
  inverse: sT,
  names: aT
};
function lT() {
}
function uT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = this.x0 + this.a * r, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + n / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function cT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), n = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = n, t;
}
var fT = ["Miller_Cylindrical", "mill"];
const hT = {
  init: lT,
  forward: uT,
  inverse: cT,
  names: fT
};
var dT = 20;
function mT() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = kv(this.es);
}
function pT(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = dT; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < te)
          break;
      }
    e = this.a * this.C_x * r * (this.m + Math.cos(i)), n = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    n = this.a * Ku(i, l, u, this.en), e = this.a * r * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = n, t;
}
function gT(t) {
  var e, n, r, i;
  return t.x -= this.x0, r = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, r = r / (this.C_x * (this.m + Math.cos(e))), this.m ? e = Mi((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = Mi(Math.sin(e) / this.n)), r = se(r + this.long0), e = aa(e)) : (e = Dv(t.y / this.a, this.es, this.en), i = Math.abs(e), i < H ? (i = Math.sin(e), n = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), r = se(n)) : i - te < H && (r = this.long0)), t.x = r, t.y = e, t;
}
var yT = ["Sinusoidal", "sinu"];
const vT = {
  init: mT,
  forward: pT,
  inverse: gT,
  names: yT
};
function _T() {
}
function bT(t) {
  for (var e = t.x, n = t.y, r = se(e - this.long0), i = n, s = Math.PI * Math.sin(n); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < te)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(n) < te && (r = 0);
  var o = 0.900316316158 * this.a * r * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function ET(t) {
  var e, n;
  t.x -= this.x0, t.y -= this.y0, n = t.y / (1.4142135623731 * this.a), Math.abs(n) > 0.999999999999 && (n = 0.999999999999), e = Math.asin(n);
  var r = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  r < -Math.PI && (r = -Math.PI), r > Math.PI && (r = Math.PI), n = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(n) > 1 && (n = 1);
  var i = Math.asin(n);
  return t.x = r, t.y = i, t;
}
var ST = ["Mollweide", "moll"];
const wT = {
  init: _T,
  forward: bT,
  inverse: ET,
  names: ST
};
function xT() {
  Math.abs(this.lat1 + this.lat2) < te || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = wo(this.es), this.e1 = xo(this.es), this.e2 = Oo(this.es), this.e3 = Mo(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = br(this.e, this.sinphi, this.cosphi), this.ml1 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < te ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = br(this.e, this.sinphi, this.cosphi), this.ml2 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function OT(t) {
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
function MT(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, n, r, i;
  this.ns >= 0 ? (n = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (n = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (n !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), r = aa(this.g - n / this.a), t.x = i, t.y = r, t;
  var a = this.g - n / this.a;
  return r = ou(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = r, t;
}
var TT = ["Equidistant_Conic", "eqdc"];
const NT = {
  init: xT,
  forward: OT,
  inverse: MT,
  names: TT
};
function CT() {
  this.R = this.a;
}
function LT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s;
  Math.abs(n) <= te && (i = this.x0 + this.R * r, s = this.y0);
  var a = Mi(2 * Math.abs(n / Math.PI));
  (Math.abs(r) <= te || Math.abs(Math.abs(n) - H) <= te) && (i = this.x0, n >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / r - r / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), m = d * d, p = Math.PI * this.R * (o * (c - m) + Math.sqrt(l * (c - m) * (c - m) - (m + l) * (h - m))) / (m + l);
  r < 0 && (p = -p), i = this.x0 + p;
  var g = l + c;
  return p = Math.PI * this.R * (d * g - o * Math.sqrt((m + l) * (l + 1) - g * g)) / (m + l), n >= 0 ? s = this.y0 + p : s = this.y0 - p, t.x = i, t.y = s, t;
}
function PT(t) {
  var e, n, r, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, r = t.x / c, i = t.y / c, s = r * r + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + r * r, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? n = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : n = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(r) < te ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (r * r - i * i) + s * s)) / 2 / r), t.x = e, t.y = n, t;
}
var AT = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const kT = {
  init: CT,
  forward: LT,
  inverse: PT,
  names: AT
};
function DT() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function IT(t) {
  var e = t.x, n = t.y, r = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, m, p, g, y, v, b, E, x, N, O, P, k, C, R, I;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= te ? (t.x = this.x0 + this.a * (H - n) * Math.sin(s), t.y = this.y0 - this.a * (H - n) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (t.x = this.x0 + this.a * (H + n) * Math.sin(s), t.y = this.y0 + this.a * (H + n) * Math.cos(s), t) : (O = this.sin_p12 * r + this.cos_p12 * i * Math.cos(s), x = Math.acos(O), N = x ? x / Math.sin(x) : 1, t.x = this.x0 + this.a * N * i * Math.sin(s), t.y = this.y0 + this.a * N * (this.cos_p12 * r - this.sin_p12 * i * Math.cos(s)), t) : (a = wo(this.es), o = xo(this.es), l = Oo(this.es), u = Mo(this.es), Math.abs(this.sin_p12 - 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = r / i, d = na(this.a, this.e, this.sin_p12), m = na(this.a, this.e, r), p = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (m * i)), g = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(p) - this.sin_p12 * Math.cos(s)), g === 0 ? P = Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : Math.abs(Math.abs(g) - Math.PI) <= te ? P = -Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : P = Math.asin(Math.sin(s) * Math.cos(p) / Math.sin(g)), y = this.e * this.sin_p12 / Math.sqrt(1 - this.es), v = this.e * this.cos_p12 * Math.cos(g) / Math.sqrt(1 - this.es), b = y * v, E = v * v, k = P * P, C = k * P, R = C * P, I = R * P, x = d * P * (1 - k * E * (1 - E) / 6 + C / 8 * b * (1 - 2 * E) + R / 120 * (E * (4 - 7 * E) - 3 * y * y * (1 - 7 * E)) - I / 48 * b), t.x = this.x0 + x * Math.sin(g), t.y = this.y0 + x * Math.cos(g), t));
}
function RT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a, o, l, u, f, c, h, d, m, p, g, y, v, b, E, x, N, O, P;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * H * this.a ? void 0 : (n = e / this.a, r = Math.sin(n), i = Math.cos(n), s = this.long0, Math.abs(e) <= te ? a = this.lat0 : (a = Mi(i * this.sin_p12 + t.y * r * this.cos_p12 / e), o = Math.abs(this.lat0) - H, Math.abs(o) <= te ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p12 * i - t.y * this.sin_p12 * r))), t.x = s, t.y = a, t)) : (l = wo(this.es), u = xo(this.es), f = Oo(this.es), c = Mo(this.es), Math.abs(this.sin_p12 - 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = ou(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = ou(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), g = Math.atan2(t.x, t.y), m = na(this.a, this.e, this.sin_p12), y = Math.cos(g), v = this.e * this.cos_p12 * y, b = -v * v / (1 - this.es), E = 3 * this.es * (1 - b) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), x = e / m, N = x - b * (1 + b) * Math.pow(x, 3) / 6 - E * (1 + 3 * b) * Math.pow(x, 4) / 24, O = 1 - b * N * N / 2 - x * N * N * N / 6, p = Math.asin(this.sin_p12 * Math.cos(N) + this.cos_p12 * Math.sin(N) * y), s = se(this.long0 + Math.asin(Math.sin(g) * Math.sin(N) / Math.cos(p))), P = Math.sin(p), a = Math.atan2((P - this.es * O * this.sin_p12) * Math.tan(p), P * (1 - this.es)), t.x = s, t.y = a, t));
}
var $T = ["Azimuthal_Equidistant", "aeqd"];
const FT = {
  init: DT,
  forward: IT,
  inverse: RT,
  names: $T
};
function VT() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function GT(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, (a > 0 || Math.abs(a) <= te) && (o = this.a * s * n * Math.sin(r), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function jT(t) {
  var e, n, r, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), n = Mi(e / this.a), r = Math.sin(n), i = Math.cos(n), a = this.long0, Math.abs(e) <= te ? (o = this.lat0, t.x = a, t.y = o, t) : (o = Mi(i * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.abs(this.lat0) - H, Math.abs(s) <= te ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p14 * i - t.y * this.sin_p14 * r)), t.x = a, t.y = o, t));
}
var UT = ["ortho"];
const BT = {
  init: VT,
  forward: GT,
  inverse: jT,
  names: UT
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
function WT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= H - We / 2 ? this.face = ot.TOP : this.lat0 <= -(H - We / 2) ? this.face = ot.BOTTOM : Math.abs(this.long0) <= We ? this.face = ot.FRONT : Math.abs(this.long0) <= H + We ? this.face = this.long0 > 0 ? ot.RIGHT : ot.LEFT : this.face = ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function qT(t) {
  var e = { x: 0, y: 0 }, n, r, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? n = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : n = t.y, r = t.x, this.face === ot.TOP)
    s = H - n, r >= We && r <= H + We ? (l.value = qe.AREA_0, i = r - H) : r > H + We || r <= -(H + We) ? (l.value = qe.AREA_1, i = r > 0 ? r - gt : r + gt) : r > -(H + We) && r <= -We ? (l.value = qe.AREA_2, i = r + H) : (l.value = qe.AREA_3, i = r);
  else if (this.face === ot.BOTTOM)
    s = H + n, r >= We && r <= H + We ? (l.value = qe.AREA_0, i = -r + H) : r < We && r >= -We ? (l.value = qe.AREA_1, i = -r) : r < -We && r >= -(H + We) ? (l.value = qe.AREA_2, i = -r - H) : (l.value = qe.AREA_3, i = r > 0 ? -r + gt : -r - gt);
  else {
    var u, f, c, h, d, m, p;
    this.face === ot.RIGHT ? r = zs(r, +H) : this.face === ot.BACK ? r = zs(r, +gt) : this.face === ot.LEFT && (r = zs(r, -H)), h = Math.sin(n), d = Math.cos(n), m = Math.sin(r), p = Math.cos(r), u = d * p, f = d * m, c = h, this.face === ot.FRONT ? (s = Math.acos(u), i = Qo(s, c, f, l)) : this.face === ot.RIGHT ? (s = Math.acos(f), i = Qo(s, c, -u, l)) : this.face === ot.BACK ? (s = Math.acos(-u), i = Qo(s, c, -f, l)) : this.face === ot.LEFT ? (s = Math.acos(-f), i = Qo(s, c, u, l)) : (s = i = 0, l.value = qe.AREA_0);
  }
  return o = Math.atan(12 / gt * (i + Math.acos(Math.sin(i) * Math.cos(We)) - H)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === qe.AREA_1 ? o += H : l.value === qe.AREA_2 ? o += gt : l.value === qe.AREA_3 && (o += 1.5 * gt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function HT(t) {
  var e = { lam: 0, phi: 0 }, n, r, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, r = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), n = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = qe.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = qe.AREA_1, n -= H) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = qe.AREA_2, n = n < 0 ? n + gt : n - gt) : (c.value = qe.AREA_3, n += H), f = gt / 12 * Math.tan(n), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(n), s = Math.tan(r), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === ot.TOP)
    u = Math.acos(l), e.phi = H - u, c.value === qe.AREA_0 ? e.lam = o + H : c.value === qe.AREA_1 ? e.lam = o < 0 ? o + gt : o - gt : c.value === qe.AREA_2 ? e.lam = o - H : e.lam = o;
  else if (this.face === ot.BOTTOM)
    u = Math.acos(l), e.phi = u - H, c.value === qe.AREA_0 ? e.lam = -o + H : c.value === qe.AREA_1 ? e.lam = -o : c.value === qe.AREA_2 ? e.lam = -o - H : e.lam = o < 0 ? -o - gt : -o + gt;
  else {
    var h, d, m;
    h = l, f = h * h, f >= 1 ? m = 0 : m = Math.sqrt(1 - f) * Math.sin(o), f += m * m, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === qe.AREA_1 ? (f = d, d = -m, m = f) : c.value === qe.AREA_2 ? (d = -d, m = -m) : c.value === qe.AREA_3 && (f = d, d = m, m = -f), this.face === ot.RIGHT ? (f = h, h = -d, d = f) : this.face === ot.BACK ? (h = -h, d = -d) : this.face === ot.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-m) - H, e.lam = Math.atan2(d, h), this.face === ot.RIGHT ? e.lam = zs(e.lam, -H) : this.face === ot.BACK ? e.lam = zs(e.lam, -gt) : this.face === ot.LEFT && (e.lam = zs(e.lam, +H));
  }
  if (this.es !== 0) {
    var p, g, y;
    p = e.phi < 0 ? 1 : 0, g = Math.tan(e.phi), y = this.b / Math.sqrt(g * g + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - y * y) / (this.one_minus_f * y)), p && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function Qo(t, e, n, r) {
  var i;
  return t < te ? (r.value = qe.AREA_0, i = 0) : (i = Math.atan2(e, n), Math.abs(i) <= We ? r.value = qe.AREA_0 : i > We && i <= H + We ? (r.value = qe.AREA_1, i -= H) : i > H + We || i <= -(H + We) ? (r.value = qe.AREA_2, i = i >= 0 ? i - gt : i + gt) : (r.value = qe.AREA_3, i += H)), i;
}
function zs(t, e) {
  var n = t + e;
  return n < -gt ? n += io : n > +gt && (n -= io), n;
}
var zT = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const YT = {
  init: WT,
  forward: qT,
  inverse: HT,
  names: zT
};
var Vf = [
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
], Ta = [
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
], $v = 0.8487, Fv = 1.3523, Vv = ur / 5, XT = 1 / Vv, Fs = 18, lu = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, KT = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function ZT(t, e, n, r) {
  for (var i = e; r; --r) {
    var s = t(i);
    if (i -= s, Math.abs(s) < n)
      break;
  }
  return i;
}
function JT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function QT(t) {
  var e = se(t.x - this.long0), n = Math.abs(t.y), r = Math.floor(n * Vv);
  r < 0 ? r = 0 : r >= Fs && (r = Fs - 1), n = ur * (n - XT * r);
  var i = {
    x: lu(Vf[r], n) * e,
    y: lu(Ta[r], n)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * $v + this.x0, i.y = i.y * this.a * Fv + this.y0, i;
}
function eN(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * $v),
    y: Math.abs(t.y - this.y0) / (this.a * Fv)
  };
  if (e.y >= 1)
    e.x /= Vf[Fs][0], e.y = t.y < 0 ? -H : H;
  else {
    var n = Math.floor(e.y * Fs);
    for (n < 0 ? n = 0 : n >= Fs && (n = Fs - 1); ; )
      if (Ta[n][0] > e.y)
        --n;
      else if (Ta[n + 1][0] <= e.y)
        ++n;
      else
        break;
    var r = Ta[n], i = 5 * (e.y - r[0]) / (Ta[n + 1][0] - r[0]);
    i = ZT(function(s) {
      return (lu(r, s) - e.y) / KT(r, s);
    }, i, te, 100), e.x /= lu(Vf[n], i), e.y = (5 * n + i) * kt, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var tN = ["Robinson", "robin"];
const nN = {
  init: JT,
  forward: QT,
  inverse: eN,
  names: tN
};
function rN() {
  this.name = "geocent";
}
function iN(t) {
  var e = xv(t, this.es, this.a);
  return e;
}
function sN(t) {
  var e = Ov(t, this.es, this.a, this.b);
  return e;
}
var aN = ["Geocentric", "geocentric", "geocent", "Geocent"];
const oN = {
  init: rN,
  forward: iN,
  inverse: sN,
  names: aN
};
var Ut = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, ga = {
  h: { def: 1e5, num: !0 },
  azi: { def: 0, num: !0, degrees: !0 },
  tilt: { def: 0, num: !0, degrees: !0 },
  long0: { def: 0, num: !0 },
  lat0: { def: 0, num: !0 }
};
function lN() {
  if (Object.keys(ga).forEach(function(n) {
    if (typeof this[n] > "u")
      this[n] = ga[n].def;
    else {
      if (ga[n].num && isNaN(this[n]))
        throw new Error("Invalid parameter value, must be numeric " + n + " = " + this[n]);
      ga[n].num && (this[n] = parseFloat(this[n]));
    }
    ga[n].degrees && (this[n] = this[n] * kt);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - H) < te ? this.mode = this.lat0 < 0 ? Ut.S_POLE : Ut.N_POLE : Math.abs(this.lat0) < te ? this.mode = Ut.EQUIT : (this.mode = Ut.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function uN(t) {
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
function cN(t) {
  t.x /= this.a, t.y /= this.a;
  var e = { x: t.x, y: t.y }, n, r, i;
  i = 1 / (this.pn1 - t.y * this.sw), n = this.pn1 * t.x * i, r = this.pn1 * t.y * this.cw * i, t.x = n * this.cg + r * this.sg, t.y = r * this.cg - n * this.sg;
  var s = Mn(t.x, t.y);
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
var fN = ["Tilted_Perspective", "tpers"];
const hN = {
  init: lN,
  forward: uN,
  inverse: cN,
  names: fN
};
function dN() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, e = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = e, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function mN(t) {
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
function pN(t) {
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
var gN = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const yN = {
  init: dN,
  forward: mN,
  inverse: pN,
  names: gN
};
var ja = 1.340264, Ua = -0.081106, Ba = 893e-6, Wa = 3796e-6, uu = Math.sqrt(3) / 2;
function vN() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function _N(t) {
  var e = se(t.x - this.long0), n = t.y, r = Math.asin(uu * Math.sin(n)), i = r * r, s = i * i * i;
  return t.x = e * Math.cos(r) / (uu * (ja + 3 * Ua * i + s * (7 * Ba + 9 * Wa * i))), t.y = r * (ja + Ua * i + s * (Ba + Wa * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function bN(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var e = 1e-9, n = 12, r = t.y, i, s, a, o, l, u;
  for (u = 0; u < n && (i = r * r, s = i * i * i, a = r * (ja + Ua * i + s * (Ba + Wa * i)) - t.y, o = ja + 3 * Ua * i + s * (7 * Ba + 9 * Wa * i), r -= l = a / o, !(Math.abs(l) < e)); ++u)
    ;
  return i = r * r, s = i * i * i, t.x = uu * t.x * (ja + 3 * Ua * i + s * (7 * Ba + 9 * Wa * i)) / Math.cos(r), t.y = Math.asin(Math.sin(r) / uu), t.x = se(t.x + this.long0), t;
}
var EN = ["eqearth", "Equal Earth", "Equal_Earth"];
const SN = {
  init: vN,
  forward: _N,
  inverse: bN,
  names: EN
};
function wN(t) {
  t.Proj.projections.add(Dl), t.Proj.projections.add(Il), t.Proj.projections.add(xO), t.Proj.projections.add(DO), t.Proj.projections.add(GO), t.Proj.projections.add(qO), t.Proj.projections.add(ZO), t.Proj.projections.add(nM), t.Proj.projections.add(oM), t.Proj.projections.add(hM), t.Proj.projections.add(CM), t.Proj.projections.add(IM), t.Proj.projections.add(GM), t.Proj.projections.add(HM), t.Proj.projections.add(ZM), t.Proj.projections.add(nT), t.Proj.projections.add(oT), t.Proj.projections.add(hT), t.Proj.projections.add(vT), t.Proj.projections.add(wT), t.Proj.projections.add(NT), t.Proj.projections.add(kT), t.Proj.projections.add(FT), t.Proj.projections.add(BT), t.Proj.projections.add(YT), t.Proj.projections.add(nN), t.Proj.projections.add(oN), t.Proj.projections.add(hN), t.Proj.projections.add(yN), t.Proj.projections.add(SN);
}
qt.defaultDatum = "WGS84";
qt.Proj = mr;
qt.WGS84 = new qt.Proj("WGS84");
qt.Point = ta;
qt.toPoint = Mv;
qt.defs = Kt;
qt.nadgrid = Mx;
qt.transform = au;
qt.mgrs = Ux;
qt.version = "__VERSION__";
wN(qt);
function xN() {
  var t, e, n;
  qt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), qt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), qt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), eb(qt), (t = bl("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = bl("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (n = bl("EPSG:2169")) == null || n.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function ON(t, e, n) {
  const r = fe(t);
  class i extends Fh {
    constructor(a) {
      super(r, a, e, n);
    }
  }
  return Qe(i, "def", r), i;
}
const MN = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Fh extends MN {
  constructor(n, r = {}, i = {}, s) {
    super();
    Qe(this, "_instance", null);
    Qe(this, "_connected", !1);
    Qe(this, "_resolved", !1);
    Qe(this, "_numberProps", null);
    Qe(this, "_styles");
    Qe(this, "_slots");
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
    this._connected = !1, Yl(() => {
      this._connected || (fm(null, this._root), this._instance = null);
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
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = lf(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[gn(u)] = !0);
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
    this._numberProps && this._numberProps[i] && (r = lf(r)), this._setProp(i, r, !1);
  }
  _getProp(n) {
    return this._props[n];
  }
  _setProp(n, r, i = !0, s = !0) {
    r !== this._props[n] && (this._props[n] = r, s && this._instance && this._update(), i && (r === !0 ? this.setAttribute(un(n), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(un(n), r + "") : r || this.removeAttribute(un(n))));
  }
  _update() {
    fm(this._createVNode(), this._root);
  }
  _createVNode() {
    const n = ie(this._def, et({}, this._props));
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
        if (s instanceof Fh) {
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
var oo = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(oo || {});
const TN = oo.INFO, NN = 7e3, CN = 4e3, cu = ys(
  "alert-notifications",
  () => {
    const t = we([]);
    function e(r, i = TN, s) {
      const a = {
        message: r,
        type: i,
        duration: s != null ? s : i === oo.WARNING ? CN : NN
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
), LN = /* @__PURE__ */ fe({
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
      const a = wh("dompurify-html");
      return A(), Ue(zu, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: r,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: _i(() => [
          n.value ? Zl((A(), j("div", {
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
}), pe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, PN = /* @__PURE__ */ pe(LN, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/alert-notifications/notification-item.vue"]]), AN = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, kN = /* @__PURE__ */ fe({
  __name: "alert-notifications",
  setup(t) {
    const e = cu(), { notifications: n } = He(e);
    function r(i) {
      e.removeNotification(i);
    }
    return (i, s) => (A(), Ue(By, { to: "body" }, [
      M(n).length ? (A(), j("div", AN, [
        (A(!0), j(je, null, An(M(n), (a, o) => (A(), Ue(PN, {
          key: o,
          notification: a,
          onClose: () => r(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : F("v-if", !0)
    ]));
  }
}), DN = /* @__PURE__ */ pe(kN, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/alert-notifications/alert-notifications.vue"]]), IN = { class: "lux-dropdown" }, RN = { class: "h-full" }, $N = ["aria-expanded"], FN = /* @__PURE__ */ L("span", { class: "lux-caret" }, null, -1), VN = { class: "lux-dropdown-wrapper" }, GN = ["aria-label", "data-value"], jN = /* @__PURE__ */ fe({
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
    return _n(() => document.addEventListener("click", u)), Li(() => document.removeEventListener("click", u)), (f, c) => {
      var h, d;
      return A(), j("div", IN, [
        L("div", RN, [
          L("button", {
            type: "button",
            class: Ae(["lux-btn lux-dropdown-btn", i.value ? "expanded" : ""]),
            "aria-expanded": i.value,
            "aria-haspopup": "true",
            onClick: o
          }, [
            L("span", null, oe((d = n.placeholder) != null ? d : (h = n.options[0]) == null ? void 0 : h.label), 1),
            FN
          ], 10, $N)
        ]),
        L("div", VN, [
          L("ul", {
            class: Ae(["lux-dropdown-list", i.value ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (A(!0), j(je, null, An(n.options, (m) => (A(), j("li", {
              key: m.value,
              class: Ae(f.modelValue === m.value ? "selected" : "")
            }, [
              L("button", {
                class: "lux-dropdown-list-item",
                "aria-label": m.ariaLabel,
                "data-value": m.value,
                onClick: l
              }, oe(m.label), 9, GN)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), Gv = /* @__PURE__ */ pe(jN, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/dropdown-list.vue"]]), qa = "EPSG:3857", jv = "EPSG:4326", UN = "EPSG:2169";
let Cc;
const Um = rt();
function Fr() {
  function t() {
    return Cc;
  }
  function e() {
    return Um.value = Cc = new tb({
      view: new nb({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), Cc;
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
    olMap: Um,
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
const ya = /* @__PURE__ */ new Map();
function Ln(t) {
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ln(t);
}
function wr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function BN(t, e) {
  if (Ln(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Ln(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Uv(t) {
  var e = BN(t, "string");
  return Ln(e) == "symbol" ? e : e + "";
}
function Bm(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Uv(r.key), r);
  }
}
function xr(t, e, n) {
  return e && Bm(t.prototype, e), n && Bm(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Si(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Gf(t, e) {
  return Gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Gf(t, e);
}
function Zu(t, e) {
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
  }), e && Gf(t, e);
}
function To(t, e) {
  if (e && (Ln(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Si(t);
}
function Er(t) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(t);
}
function Pi(t, e, n) {
  return e = Uv(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function WN(t) {
  if (Array.isArray(t))
    return t;
}
function qN(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Wm(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function HN(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Wm(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Wm(t, e);
  }
}
function zN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YN(t) {
  return WN(t) || qN(t) || HN(t) || zN();
}
function qm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var XN = {
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
}, KN = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wr(this, t), this.init(e, n);
  }
  return xr(t, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = n || XN, this.options = r, this.debug = r.debug;
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
      return new t(this.logger, Hm(Hm({}, {
        prefix: "".concat(this.prefix, ":").concat(n, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(n) {
      return n = n || this.options, n.prefix = n.prefix || this.prefix, new t(this.logger, n);
    }
  }]), t;
}(), cr = new KN(), Ti = function() {
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
function va() {
  var t, e, n = new Promise(function(r, i) {
    t = r, e = i;
  });
  return n.resolve = t, n.reject = e, n;
}
function zm(t) {
  return t == null ? "" : "" + t;
}
function ZN(t, e, n) {
  t.forEach(function(r) {
    e[r] && (n[r] = e[r]);
  });
}
function Vh(t, e, n) {
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
function Ym(t, e, n) {
  var r = Vh(t, e, Object), i = r.obj, s = r.k;
  i[s] = n;
}
function JN(t, e, n, r) {
  var i = Vh(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], r && (s[a] = s[a].concat(n)), r || s[a].push(n);
}
function fu(t, e) {
  var n = Vh(t, e), r = n.obj, i = n.k;
  if (!!r)
    return r[i];
}
function QN(t, e, n) {
  var r = fu(t, n);
  return r !== void 0 ? r : fu(e, n);
}
function Bv(t, e, n) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? typeof t[r] == "string" || t[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? n && (t[r] = e[r]) : Bv(t[r], e[r], n) : t[r] = e[r]);
  return t;
}
function Os(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var e2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function t2(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return e2[e];
  }) : t;
}
var Ju = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, n2 = [" ", ",", "?", "!", ";"];
function r2(t, e, n) {
  e = e || "", n = n || "";
  var r = n2.filter(function(o) {
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
function hu(t, e) {
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
        return u ? hu(l, u, n) : void 0;
      }
      i = i[r[s]];
    }
    return i;
  }
}
function Xm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function el(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function i2(t) {
  var e = s2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return To(this, i);
  };
}
function s2() {
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
var a2 = function(t) {
  Zu(n, t);
  var e = i2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return wr(this, n), i = e.call(this), Ju && Ti.call(Si(i)), i.data = r || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
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
      var c = fu(this.data, f);
      return c || !u || typeof a != "string" ? c : hu(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), Ym(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
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
      var c = fu(this.data, f) || {};
      o ? Bv(c, a, l) : c = el(el({}, c), a), Ym(this.data, f, c), u.silent || this.emit("added", i, s, a);
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
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? el(el({}, {}), this.getResource(i, s)) : this.getResource(i, s);
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
}(Ti), Wv = {
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
function Km(t, e) {
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
    e % 2 ? Km(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Km(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function o2(t) {
  var e = l2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return To(this, i);
  };
}
function l2() {
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
var Zm = {}, Jm = function(t) {
  Zu(n, t);
  var e = o2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return wr(this, n), i = e.call(this), Ju && Ti.call(Si(i)), ZN(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, Si(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = cr.create("translator"), i;
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
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !r2(i, a, o);
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
      if (Ln(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), Ln(s) === "object" && (s = Vt({}, s)), s || (s = {}), i == null)
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
      var y = this.resolve(i, s), v = y && y.res, b = y && y.usedKey || c, E = y && y.exactUsedKey || c, x = Object.prototype.toString.apply(v), N = ["[object Number]", "[object Function]", "[object RegExp]"], O = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, k = typeof v != "string" && typeof v != "boolean" && typeof v != "number";
      if (P && v && k && N.indexOf(x) < 0 && !(typeof O == "string" && x === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var C = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, v, Vt(Vt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (y.res = C, y) : C;
        }
        if (u) {
          var R = x === "[object Array]", I = R ? [] : {}, Q = R ? E : b;
          for (var ve in v)
            if (Object.prototype.hasOwnProperty.call(v, ve)) {
              var T = "".concat(Q).concat(u).concat(ve);
              I[ve] = this.translate(T, Vt(Vt({}, s), {
                joinArrays: !1,
                ns: h
              })), I[ve] === T && (I[ve] = v[ve]);
            }
          v = I;
        }
      } else if (P && typeof O == "string" && x === "[object Array]")
        v = v.join(O), v && (v = this.extendTranslation(v, i, s, a));
      else {
        var $ = !1, z = !1, K = s.count !== void 0 && typeof s.count != "string", Ce = n.hasDefaultValue(s), Pe = K ? this.pluralResolver.getSuffix(m, s.count, s) : "", dt = s["defaultValue".concat(Pe)] || s.defaultValue;
        !this.isValidLookup(v) && Ce && ($ = !0, v = dt), this.isValidLookup(v) || (z = !0, v = c);
        var Rt = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Te = Rt && z ? void 0 : v, Ct = Ce && dt !== v && this.options.updateMissing;
        if (z || $ || Ct) {
          if (this.logger.log(Ct ? "updateKey" : "missingKey", m, d, c, Ct ? dt : v), u) {
            var st = this.resolve(c, Vt(Vt({}, s), {}, {
              keySeparator: !1
            }));
            st && st.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var Jn = [], De = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && De && De[0])
            for (var tn = 0; tn < De.length; tn++)
              Jn.push(De[tn]);
          else
            this.options.saveMissingTo === "all" ? Jn = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Jn.push(s.lng || this.language);
          var Qn = function(Lt, er, Mr) {
            var _ = Ce && Mr !== v ? Mr : Te;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Lt, d, er, _, Ct, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Lt, d, er, _, Ct, s), o.emit("missingKey", Lt, d, er, v);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && K ? Jn.forEach(function(Or) {
            o.pluralResolver.getSuffixes(Or, s).forEach(function(Lt) {
              Qn([Or], c + Lt, s["defaultValue".concat(Lt)] || dt);
            });
          }) : Qn(Jn, c, dt));
        }
        v = this.extendTranslation(v, i, s, y, a), z && v === c && this.options.appendNamespaceToMissingKey && (v = "".concat(d, ":").concat(c)), (z || $) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? v = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(d, ":").concat(c) : c, $ ? v : void 0) : v = this.options.parseMissingKeyHandler(v));
      }
      return l ? (y.res = v, y) : v;
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
          var m = i.match(this.interpolator.nestingRegexp), p = m && m.length;
          c < p && (a.nest = !1);
        }
        !a.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (a.lng = o.usedLng), a.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var v = arguments.length, b = new Array(v), E = 0; E < v; E++)
            b[E] = arguments[E];
          return l && l[0] === b[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(b[0], " in key: ").concat(s[0])), null) : u.translate.apply(u, b.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var g = a.postProcess || this.options.postProcess, y = typeof g == "string" ? [g] : g;
      return i != null && y && y.length && a.applyPostProcessor !== !1 && (i = Wv.handle(y, i, s, this.options && this.options.postProcessPassResolved ? Vt({
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
          var g = a.count !== void 0 && typeof a.count != "string", y = g && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), v = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", b = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          p.forEach(function(E) {
            s.isValidLookup(o) || (c = E, !Zm["".concat(b[0], "-").concat(E)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (Zm["".concat(b[0], "-").concat(E)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(b.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach(function(x) {
              if (!s.isValidLookup(o)) {
                f = x;
                var N = [m];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(N, m, x, E, a);
                else {
                  var O;
                  g && (O = s.pluralResolver.getSuffix(x, a.count, a));
                  var P = "".concat(s.options.pluralSeparator, "zero");
                  if (g && (N.push(m + O), y && N.push(m + P)), v) {
                    var k = "".concat(m).concat(s.options.contextSeparator).concat(a.context);
                    N.push(k), g && (N.push(k + O), y && N.push(k + P));
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
  }]), n;
}(Ti);
function Lc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Qm = function() {
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
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Lc(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Lc(i[1].toLowerCase())), r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Lc(i[2].toLowerCase()))), i.join("-");
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
}(), u2 = [{
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
}], c2 = {
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
}, f2 = ["v1", "v2", "v3"], ep = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function h2() {
  var t = {};
  return u2.forEach(function(e) {
    e.lngs.forEach(function(n) {
      t[n] = {
        numbers: e.nr,
        plurals: c2[e.fc]
      };
    });
  }), t;
}
var d2 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wr(this, t), this.languageUtils = e, this.options = n, this.logger = cr.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = h2();
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
        return ep[a] - ep[o];
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
      return !f2.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function tp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function np(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = QN(t, e, n);
  return !s && i && typeof n == "string" && (s = hu(t, n, r), s === void 0 && (s = hu(e, n, r))), s;
}
var m2 = function() {
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
      this.escape = r.escape !== void 0 ? r.escape : t2, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Os(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Os(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Os(r.nestingPrefix) : r.nestingPrefixEscaped || Os("$t("), this.nestingSuffix = r.nestingSuffix ? Os(r.nestingSuffix) : r.nestingSuffixEscaped || Os(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
      var h = function(y) {
        if (y.indexOf(a.formatSeparator) < 0) {
          var v = np(r, f, y, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(v, void 0, i, $n($n($n({}, s), r), {}, {
            interpolationkey: y
          })) : v;
        }
        var b = y.split(a.formatSeparator), E = b.shift().trim(), x = b.join(a.formatSeparator).trim();
        return a.format(np(r, f, E, a.options.keySeparator, a.options.ignoreJSONStructure), x, i, $n($n($n({}, s), r), {}, {
          interpolationkey: E
        }));
      };
      this.resetRegExp();
      var d = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, m = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, p = [{
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
      return p.forEach(function(g) {
        for (u = 0; o = g.regex.exec(n); ) {
          var y = o[1].trim();
          if (l = h(y), l === void 0)
            if (typeof d == "function") {
              var v = d(n, o, s);
              l = typeof v == "string" ? v : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, y))
              l = "";
            else if (m) {
              l = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(n)), l = "";
          else
            typeof l != "string" && !a.useRawValueToEscape && (l = zm(l));
          var b = g.safeValue(l);
          if (n = n.replace(o[0], b), m ? (g.regex.lastIndex += l.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, u++, u >= a.maxReplaces)
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
        var g = d.split(new RegExp("".concat(p, "[ ]*{"))), y = "{".concat(g[1]);
        d = g[0], y = this.interpolate(y, l);
        var v = y.match(/'/g), b = y.match(/"/g);
        (v && v.length % 2 === 0 && !b || b.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          l = JSON.parse(y), m && (l = $n($n({}, m), l));
        } catch (E) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(d), E), "".concat(d).concat(p).concat(y);
        }
        return delete l.defaultValue, d;
      }
      for (; a = this.nestingRegexp.exec(n); ) {
        var f = [];
        l = $n({}, s), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
        var c = !1;
        if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
          var h = a[1].split(this.formatSeparator).map(function(d) {
            return d.trim();
          });
          a[1] = h.shift(), f = h, c = !0;
        }
        if (o = r(u.call(this, a[1].trim(), l), l), o && a[0] === n && typeof o != "string")
          return o;
        typeof o != "string" && (o = zm(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(n)), o = ""), c && (o = f.reduce(function(d, m) {
          return i.format(d, m, s.lng, $n($n({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), n = n.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return n;
    }
  }]), t;
}();
function rp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function p2(t) {
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
          var o = a.split(":"), l = YN(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
function Ms(t) {
  var e = {};
  return function(r, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = t(i, s), e[a] = o), o(r);
  };
}
var g2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(this, t), this.logger = cr.create("formatter"), this.options = e, this.formats = {
      number: Ms(function(n, r) {
        var i = new Intl.NumberFormat(n, Lr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: Ms(function(n, r) {
        var i = new Intl.NumberFormat(n, Lr(Lr({}, r), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: Ms(function(n, r) {
        var i = new Intl.DateTimeFormat(n, Lr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: Ms(function(n, r) {
        var i = new Intl.RelativeTimeFormat(n, Lr({}, r));
        return function(s) {
          return i.format(s, r.range || "day");
        };
      }),
      list: Ms(function(n, r) {
        var i = new Intl.ListFormat(n, Lr({}, r));
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
      this.formats[n.toLowerCase().trim()] = Ms(r);
    }
  }, {
    key: "format",
    value: function(n, r, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = p2(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var m = u;
          try {
            var p = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = p.locale || p.lng || a.locale || a.lng || i;
            m = s.formats[h](u, g, Lr(Lr(Lr({}, d), a), p));
          } catch (y) {
            s.logger.warn(y);
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
function ip(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ip(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ip(Object(n)).forEach(function(r) {
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
    return To(this, i);
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
function _2(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var b2 = function(t) {
  Zu(n, t);
  var e = y2(n);
  function n(r, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return wr(this, n), a = e.call(this), Ju && Ti.call(Si(a)), a.backend = r, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = cr.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return xr(n, [{
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
        JN(c.loaded, [l], u), _2(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
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
          var y = o.waitingReads.shift();
          o.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
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
          var c = sp(sp({}, u), {}, {
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
}(Ti);
function ap() {
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
      if (Ln(e[1]) === "object" && (n = e[1]), typeof e[1] == "string" && (n.defaultValue = e[1]), typeof e[2] == "string" && (n.tDescription = e[2]), Ln(e[2]) === "object" || Ln(e[3]) === "object") {
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
function op(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function lp(t, e) {
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
    e % 2 ? lp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function E2(t) {
  var e = S2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return To(this, i);
  };
}
function S2() {
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
function tl() {
}
function w2(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var du = function(t) {
  Zu(n, t);
  var e = E2(n);
  function n() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (wr(this, n), r = e.call(this), Ju && Ti.call(Si(r)), r.options = op(i), r.services = {}, r.logger = cr, r.modules = {
      external: []
    }, w2(Si(r)), s && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, s), To(r, Si(r));
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
      var o = ap();
      this.options = ir(ir(ir({}, o), this.options), op(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ir(ir({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? cr.init(l(this.modules.logger), this.options) : cr.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = g2);
        var f = new Qm(this.options);
        this.store = new a2(this.options.resources, this.options);
        var c = this.services;
        c.logger = cr, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new d2(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new m2(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new b2(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(y) {
          for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
            b[E - 1] = arguments[E];
          i.emit.apply(i, [y].concat(b));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Jm(this.services, this.options), this.translator.on("*", function(y) {
          for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
            b[E - 1] = arguments[E];
          i.emit.apply(i, [y].concat(b));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = tl), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var d = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      d.forEach(function(y) {
        i[y] = function() {
          var v;
          return (v = i.store)[y].apply(v, arguments);
        };
      });
      var m = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      m.forEach(function(y) {
        i[y] = function() {
          var v;
          return (v = i.store)[y].apply(v, arguments), i;
        };
      });
      var p = va(), g = function() {
        var v = function(E, x) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), p.resolve(x), a(E, x);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return v(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, v);
      };
      return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), p;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tl, o = a, l = typeof i == "string" ? i : this.language;
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
      var o = va();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = tl), this.services.backendConnector.reload(i, s, function(l) {
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
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && Wv.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
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
      var o = va();
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
        if (Ln(c) !== "object") {
          for (var d = arguments.length, m = new Array(d > 2 ? d - 2 : 0), p = 2; p < d; p++)
            m[p - 2] = arguments[p];
          h = o.options.overloadTranslationOptionHandler([f, c].concat(m));
        } else
          h = ir({}, c);
        h.lng = h.lng || u.lng, h.lngs = h.lngs || u.lngs, h.ns = h.ns || u.ns, h.keyPrefix = h.keyPrefix || a || u.keyPrefix;
        var g = o.options.keySeparator || ".", y;
        return h.keyPrefix && Array.isArray(f) ? y = f.map(function(v) {
          return "".concat(h.keyPrefix).concat(g).concat(v);
        }) : y = h.keyPrefix ? "".concat(h.keyPrefix).concat(g).concat(f) : f, o.t(y, h);
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
      var a = this, o = va();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(l) {
        a.options.ns.indexOf(l) < 0 && a.options.ns.push(l);
      }), this.loadResources(function(l) {
        o.resolve(), s && s(l);
      }), o) : (s && s(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, s) {
      var a = va();
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
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new Qm(ap());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tl, o = ir(ir(ir({}, this.options), s), {
        isClone: !0
      }), l = new n(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = ir({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new Jm(l.services, l.options), l.translator.on("*", function(f) {
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
}(Ti);
Pi(du, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new du(t, e);
});
var lt = du.createInstance();
lt.createInstance = du.createInstance;
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
const x2 = "/";
var qv = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(qv || {}), Ir = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(Ir || {}), Rl = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(Rl || {}), jf;
function O2(t, {
  i18next: e,
  rerenderOn: n = ["languageChanged", "loaded", "added", "removed"],
  slotStart: r = "{",
  slotEnd: i = "}"
}) {
  const s = e.t.bind(e), a = we(new Date()), o = () => a.value = new Date(), l = () => a.value;
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
  }), t.component("i18next", N2), t.mixin({
    beforeCreate() {
      var h, d;
      const m = this.$options;
      if (!m.__i18n && !m.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const p = this.$options.name, g = (Math.random() * 10 ** 8 | 0).toString(), y = [p, g].filter((O) => !!O).join("-");
      this.__bundles = [];
      const v = (O) => {
        Object.entries(O).forEach(([P, k]) => {
          e.addResourceBundle(P, y, k, !0, !1), this.__bundles.push([P, y]);
        });
      };
      (h = m.__i18n) == null || h.forEach((O) => {
        v(JSON.parse(O));
      });
      let { lng: b, ns: E, keyPrefix: x } = c(m, v);
      (d = this.__bundles) != null && d.length && (E = [y].concat(E != null ? E : []));
      const N = u(b, E);
      this.__translate = (O, P) => !x || f(O) ? N(O, P) : N(x + "." + O, P);
    },
    unmounted() {
      var h;
      (h = this.__bundles) == null || h.forEach(([d, m]) => e.removeResourceBundle(d, m));
    }
  }), t.config.globalProperties.$t = function(h, d) {
    var m;
    return l(), e.isInitialized ? ((m = this == null ? void 0 : this.__translate) != null ? m : s)(h, d) : h;
  }, t.config.globalProperties.$i18next = new Proxy(e, {
    get(h, d) {
      return l(), Reflect.get(h, d);
    }
  }), jf = T2(r, i);
  function u(h, d) {
    return h ? e.getFixedT(h, d) : d ? e.getFixedT(null, d) : s;
  }
  function f(h) {
    const d = e.options.nsSeparator;
    return typeof d == "string" && h.includes(d);
  }
  function c(h, d) {
    let m, p, g;
    if (h.i18nOptions) {
      let y, v;
      ({
        lng: m,
        namespaces: v = e.options.defaultNS,
        keyPrefix: g,
        messages: y
      } = h.i18nOptions), y && d(y), p = typeof v == "string" ? [v] : v, p && e.loadNamespaces(p);
    }
    return { lng: m, ns: p, keyPrefix: g };
  }
}
function Ze() {
  const t = M2(), e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
function M2() {
  const t = bo();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  return t;
}
function T2(t, e) {
  const n = `${t}\\s*([a-z0-9\\-]+)\\s*${e}`;
  return new RegExp(n, "gi");
}
var N2 = fe({
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
      for (; (i = jf.exec(n)) !== null; ) {
        r.push(n.substring(s, i.index));
        const a = e[i[1]];
        a ? r.push(...a()) : r.push(i[0]), s = jf.lastIndex;
      }
      return r.push(n.substring(s)), r;
    };
  }
});
class vs extends Error {
}
class C2 extends vs {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class L2 extends vs {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class P2 extends vs {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Vs extends vs {
}
class Hv extends vs {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ln extends vs {
}
class ei extends vs {
  constructor() {
    super("Zone is an abstract class");
  }
}
const ee = "numeric", Zn = "short", yn = "long", mu = {
  year: ee,
  month: ee,
  day: ee
}, zv = {
  year: ee,
  month: Zn,
  day: ee
}, A2 = {
  year: ee,
  month: Zn,
  day: ee,
  weekday: Zn
}, Yv = {
  year: ee,
  month: yn,
  day: ee
}, Xv = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn
}, Kv = {
  hour: ee,
  minute: ee
}, Zv = {
  hour: ee,
  minute: ee,
  second: ee
}, Jv = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: Zn
}, Qv = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: yn
}, e0 = {
  hour: ee,
  minute: ee,
  hourCycle: "h23"
}, t0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23"
}, n0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: Zn
}, r0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: yn
}, i0 = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee
}, s0 = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, a0 = {
  year: ee,
  month: Zn,
  day: ee,
  hour: ee,
  minute: ee
}, o0 = {
  year: ee,
  month: Zn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, k2 = {
  year: ee,
  month: Zn,
  day: ee,
  weekday: Zn,
  hour: ee,
  minute: ee
}, l0 = {
  year: ee,
  month: yn,
  day: ee,
  hour: ee,
  minute: ee,
  timeZoneName: Zn
}, u0 = {
  year: ee,
  month: yn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: Zn
}, c0 = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn,
  hour: ee,
  minute: ee,
  timeZoneName: yn
}, f0 = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: yn
};
class No {
  get type() {
    throw new ei();
  }
  get name() {
    throw new ei();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new ei();
  }
  offsetName(e, n) {
    throw new ei();
  }
  formatOffset(e, n) {
    throw new ei();
  }
  offset(e) {
    throw new ei();
  }
  equals(e) {
    throw new ei();
  }
  get isValid() {
    throw new ei();
  }
}
let Pc = null;
class Qu extends No {
  static get instance() {
    return Pc === null && (Pc = new Qu()), Pc;
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
    return b0(e, n, r);
  }
  formatOffset(e, n) {
    return Ha(this.offset(e), n);
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
let $l = {};
function D2(t) {
  return $l[t] || ($l[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), $l[t];
}
const I2 = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function R2(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, a, o, l, u, f] = r;
  return [a, i, s, o, l, u, f];
}
function $2(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: a } = n[i], o = I2[s];
    s === "era" ? r[o] = a : Se(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let nl = {};
class Ur extends No {
  static create(e) {
    return nl[e] || (nl[e] = new Ur(e)), nl[e];
  }
  static resetCache() {
    nl = {}, $l = {};
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
    super(), this.zoneName = e, this.valid = Ur.isValidZone(e);
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
    return b0(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return Ha(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = D2(this.name);
    let [i, s, a, o, l, u, f] = r.formatToParts ? $2(r, n) : R2(r, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = tc({
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
let up = {};
function F2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = up[n];
  return r || (r = new Intl.ListFormat(t, e), up[n] = r), r;
}
let Uf = {};
function Bf(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Uf[n];
  return r || (r = new Intl.DateTimeFormat(t, e), Uf[n] = r), r;
}
let Wf = {};
function V2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Wf[n];
  return r || (r = new Intl.NumberFormat(t, e), Wf[n] = r), r;
}
let qf = {};
function G2(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = qf[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), qf[i] = s), s;
}
let Na = null;
function j2() {
  return Na || (Na = new Intl.DateTimeFormat().resolvedOptions().locale, Na);
}
let cp = {};
function U2(t) {
  let e = cp[t];
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, cp[t] = e;
  }
  return e;
}
function B2(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = Bf(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      r = Bf(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = r;
    return [i, s, a];
  }
}
function W2(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function q2(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = Oe.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function H2(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = Oe.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function rl(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function z2(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class Y2 {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = V2(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Bh(e, 3);
      return bt(n, this.padTo);
    }
  }
}
class X2 {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Ur.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = Bf(n, s);
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
class K2 {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && v0() && (this.rtf = G2(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : gC(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const Z2 = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Xe {
  static fromOpts(e) {
    return Xe.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, r, i, s = !1) {
    const a = e || pt.defaultLocale, o = a || (s ? "en-US" : j2()), l = n || pt.defaultNumberingSystem, u = r || pt.defaultOutputCalendar, f = Hf(i) || pt.defaultWeekSettings;
    return new Xe(o, l, u, f, a);
  }
  static resetCache() {
    Na = null, Uf = {}, Wf = {}, qf = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r, weekSettings: i } = {}) {
    return Xe.create(e, n, r, i);
  }
  constructor(e, n, r, i, s) {
    const [a, o, l] = B2(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = r || l || null, this.weekSettings = i, this.intl = W2(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = z2(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Xe.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Hf(e.weekSettings) || this.weekSettings,
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
    return rl(this, e, w0, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = q2((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return rl(this, e, M0, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = H2(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return rl(
      this,
      void 0,
      () => T0,
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
    return rl(this, e, N0, () => {
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
    return new Y2(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new X2(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new K2(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return F2(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : _0() ? U2(this.locale) : Z2;
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
let Ac = null;
class Qt extends No {
  static get utcInstance() {
    return Ac === null && (Ac = new Qt(0)), Ac;
  }
  static instance(e) {
    return e === 0 ? Qt.utcInstance : new Qt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Qt(nc(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${Ha(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ha(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return Ha(this.fixed, n);
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
class J2 extends No {
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
function hi(t, e) {
  if (Se(t) || t === null)
    return e;
  if (t instanceof No)
    return t;
  if (tC(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Qu.instance : n === "utc" || n === "gmt" ? Qt.utcInstance : Qt.parseSpecifier(n) || Ur.create(t);
  } else
    return as(t) ? Qt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new J2(t);
}
let fp = () => Date.now(), hp = "system", dp = null, mp = null, pp = null, gp = 60, yp, vp = null;
class pt {
  static get now() {
    return fp;
  }
  static set now(e) {
    fp = e;
  }
  static set defaultZone(e) {
    hp = e;
  }
  static get defaultZone() {
    return hi(hp, Qu.instance);
  }
  static get defaultLocale() {
    return dp;
  }
  static set defaultLocale(e) {
    dp = e;
  }
  static get defaultNumberingSystem() {
    return mp;
  }
  static set defaultNumberingSystem(e) {
    mp = e;
  }
  static get defaultOutputCalendar() {
    return pp;
  }
  static set defaultOutputCalendar(e) {
    pp = e;
  }
  static get defaultWeekSettings() {
    return vp;
  }
  static set defaultWeekSettings(e) {
    vp = Hf(e);
  }
  static get twoDigitCutoffYear() {
    return gp;
  }
  static set twoDigitCutoffYear(e) {
    gp = e % 100;
  }
  static get throwOnInvalid() {
    return yp;
  }
  static set throwOnInvalid(e) {
    yp = e;
  }
  static resetCaches() {
    Xe.resetCache(), Ur.resetCache();
  }
}
class zn {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const h0 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], d0 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Tn(t, e) {
  return new zn(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Gh(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function m0(t, e, n) {
  return n + (Co(t) ? d0 : h0)[e - 1];
}
function p0(t, e) {
  const n = Co(t) ? d0 : h0, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function jh(t, e) {
  return (t - e + 7) % 7 + 1;
}
function pu(t, e = 4, n = 1) {
  const { year: r, month: i, day: s } = t, a = m0(r, i, s), o = jh(Gh(r, i, s), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = r - 1, l = lo(u, e, n)) : l > lo(r, e, n) ? (u = r + 1, l = 1) : u = r, { weekYear: u, weekNumber: l, weekday: o, ...rc(t) };
}
function _p(t, e = 4, n = 1) {
  const { weekYear: r, weekNumber: i, weekday: s } = t, a = jh(Gh(r, 1, e), n), o = Ys(r);
  let l = i * 7 + s - a - 7 + e, u;
  l < 1 ? (u = r - 1, l += Ys(u)) : l > o ? (u = r + 1, l -= Ys(r)) : u = r;
  const { month: f, day: c } = p0(u, l);
  return { year: u, month: f, day: c, ...rc(t) };
}
function kc(t) {
  const { year: e, month: n, day: r } = t, i = m0(e, n, r);
  return { year: e, ordinal: i, ...rc(t) };
}
function bp(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = p0(e, n);
  return { year: e, month: r, day: i, ...rc(t) };
}
function Ep(t, e) {
  if (!Se(t.localWeekday) || !Se(t.localWeekNumber) || !Se(t.localWeekYear)) {
    if (!Se(t.weekday) || !Se(t.weekNumber) || !Se(t.weekYear))
      throw new Vs(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return Se(t.localWeekday) || (t.weekday = t.localWeekday), Se(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), Se(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Q2(t, e = 4, n = 1) {
  const r = ec(t.weekYear), i = Nn(
    t.weekNumber,
    1,
    lo(t.weekYear, e, n)
  ), s = Nn(t.weekday, 1, 7);
  return r ? i ? s ? !1 : Tn("weekday", t.weekday) : Tn("week", t.weekNumber) : Tn("weekYear", t.weekYear);
}
function eC(t) {
  const e = ec(t.year), n = Nn(t.ordinal, 1, Ys(t.year));
  return e ? n ? !1 : Tn("ordinal", t.ordinal) : Tn("year", t.year);
}
function g0(t) {
  const e = ec(t.year), n = Nn(t.month, 1, 12), r = Nn(t.day, 1, gu(t.year, t.month));
  return e ? n ? r ? !1 : Tn("day", t.day) : Tn("month", t.month) : Tn("year", t.year);
}
function y0(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = Nn(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, a = Nn(n, 0, 59), o = Nn(r, 0, 59), l = Nn(i, 0, 999);
  return s ? a ? o ? l ? !1 : Tn("millisecond", i) : Tn("second", r) : Tn("minute", n) : Tn("hour", e);
}
function Se(t) {
  return typeof t > "u";
}
function as(t) {
  return typeof t == "number";
}
function ec(t) {
  return typeof t == "number" && t % 1 === 0;
}
function tC(t) {
  return typeof t == "string";
}
function nC(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function v0() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function _0() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function rC(t) {
  return Array.isArray(t) ? t : [t];
}
function Sp(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function iC(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function ra(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Hf(t) {
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
  return ec(t) && t >= e && t <= n;
}
function sC(t, e) {
  return t - e * Math.floor(t / e);
}
function bt(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function li(t) {
  if (!(Se(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Ui(t) {
  if (!(Se(t) || t === null || t === ""))
    return parseFloat(t);
}
function Uh(t) {
  if (!(Se(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Bh(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function Co(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ys(t) {
  return Co(t) ? 366 : 365;
}
function gu(t, e) {
  const n = sC(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? Co(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function tc(t) {
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
function wp(t, e, n) {
  return -jh(Gh(t, 1, e), n) + e - 1;
}
function lo(t, e = 4, n = 1) {
  const r = wp(t, e, n), i = wp(t + 1, e, n);
  return (Ys(t) - r + i) / 7;
}
function zf(t) {
  return t > 99 ? t : t > pt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function b0(t, e, n, r = null) {
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
function nc(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function E0(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new ln(`Invalid unit value ${t}`);
  return e;
}
function yu(t, e) {
  const n = {};
  for (const r in t)
    if (ra(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = E0(i);
    }
  return n;
}
function Ha(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${bt(n, 2)}:${bt(r, 2)}`;
    case "narrow":
      return `${i}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${i}${bt(n, 2)}${bt(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function rc(t) {
  return iC(t, ["hour", "minute", "second", "millisecond"]);
}
const aC = [
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
], S0 = [
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
], oC = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function w0(t) {
  switch (t) {
    case "narrow":
      return [...oC];
    case "short":
      return [...S0];
    case "long":
      return [...aC];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const x0 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], O0 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], lC = ["M", "T", "W", "T", "F", "S", "S"];
function M0(t) {
  switch (t) {
    case "narrow":
      return [...lC];
    case "short":
      return [...O0];
    case "long":
      return [...x0];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const T0 = ["AM", "PM"], uC = ["Before Christ", "Anno Domini"], cC = ["BC", "AD"], fC = ["B", "A"];
function N0(t) {
  switch (t) {
    case "narrow":
      return [...fC];
    case "short":
      return [...cC];
    case "long":
      return [...uC];
    default:
      return null;
  }
}
function hC(t) {
  return T0[t.hour < 12 ? 0 : 1];
}
function dC(t, e) {
  return M0(e)[t.weekday - 1];
}
function mC(t, e) {
  return w0(e)[t.month - 1];
}
function pC(t, e) {
  return N0(e)[t.year < 0 ? 0 : 1];
}
function gC(t, e, n = "always", r = !1) {
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
function xp(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const yC = {
  D: mu,
  DD: zv,
  DDD: Yv,
  DDDD: Xv,
  t: Kv,
  tt: Zv,
  ttt: Jv,
  tttt: Qv,
  T: e0,
  TT: t0,
  TTT: n0,
  TTTT: r0,
  f: i0,
  ff: a0,
  fff: l0,
  ffff: c0,
  F: s0,
  FF: o0,
  FFF: u0,
  FFFF: f0
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
    return yC[e];
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
      return bt(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, m) => this.loc.extract(e, d, m), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? hC(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, m) => r ? mC(e, d) : s(m ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, m) => r ? dC(e, d) : s(
      m ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const m = Wt.macroTokenToFormatOpts(d);
      return m ? this.formatWithSystemDefault(e, m) : d;
    }, c = (d) => r ? pC(e, d) : s({ era: d }, "era"), h = (d) => {
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
    return xp(Wt.parseFormat(n), h);
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
    return xp(s, i(o));
  }
}
const C0 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function oa(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function la(...t) {
  return (e) => t.reduce(
    ([n, r, i], s) => {
      const [a, o, l] = s(e, i);
      return [{ ...n, ...a }, o || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ua(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const i = n.exec(t);
    if (i)
      return r(i);
  }
  return [null, null];
}
function L0(...t) {
  return (e, n) => {
    const r = {};
    let i;
    for (i = 0; i < t.length; i++)
      r[t[i]] = li(e[n + i]);
    return [r, null, n + i];
  };
}
const P0 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, vC = `(?:${P0.source}?(?:\\[(${C0.source})\\])?)?`, Wh = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, A0 = RegExp(`${Wh.source}${vC}`), qh = RegExp(`(?:T${A0.source})?`), _C = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, bC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, EC = /(\d{4})-?(\d{3})/, SC = L0("weekYear", "weekNumber", "weekDay"), wC = L0("year", "ordinal"), xC = /(\d{4})-(\d\d)-(\d\d)/, k0 = RegExp(
  `${Wh.source} ?(?:${P0.source}|(${C0.source}))?`
), OC = RegExp(`(?: ${k0.source})?`);
function Xs(t, e, n) {
  const r = t[e];
  return Se(r) ? n : li(r);
}
function MC(t, e) {
  return [{
    year: Xs(t, e),
    month: Xs(t, e + 1, 1),
    day: Xs(t, e + 2, 1)
  }, null, e + 3];
}
function ca(t, e) {
  return [{
    hours: Xs(t, e, 0),
    minutes: Xs(t, e + 1, 0),
    seconds: Xs(t, e + 2, 0),
    milliseconds: Uh(t[e + 3])
  }, null, e + 4];
}
function Lo(t, e) {
  const n = !t[e] && !t[e + 1], r = nc(t[e + 1], t[e + 2]), i = n ? null : Qt.instance(r);
  return [{}, i, e + 3];
}
function Po(t, e) {
  const n = t[e] ? Ur.create(t[e]) : null;
  return [{}, n, e + 1];
}
const TC = RegExp(`^T?${Wh.source}$`), NC = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function CC(t) {
  const [e, n, r, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, m = !1) => d !== void 0 && (m || d && f) ? -d : d;
  return [
    {
      years: h(Ui(n)),
      months: h(Ui(r)),
      weeks: h(Ui(i)),
      days: h(Ui(s)),
      hours: h(Ui(a)),
      minutes: h(Ui(o)),
      seconds: h(Ui(l), l === "-0"),
      milliseconds: h(Uh(u), c)
    }
  ];
}
const LC = {
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
function Hh(t, e, n, r, i, s, a) {
  const o = {
    year: e.length === 2 ? zf(li(e)) : li(e),
    month: S0.indexOf(n) + 1,
    day: li(r),
    hour: li(i),
    minute: li(s)
  };
  return a && (o.second = li(a)), t && (o.weekday = t.length > 3 ? x0.indexOf(t) + 1 : O0.indexOf(t) + 1), o;
}
const PC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function AC(t) {
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
  ] = t, h = Hh(e, i, r, n, s, a, o);
  let d;
  return l ? d = LC[l] : u ? d = 0 : d = nc(f, c), [h, new Qt(d)];
}
function kC(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const DC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, IC = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, RC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Op(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [Hh(e, i, r, n, s, a, o), Qt.utcInstance];
}
function $C(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [Hh(e, o, n, r, i, s, a), Qt.utcInstance];
}
const FC = oa(_C, qh), VC = oa(bC, qh), GC = oa(EC, qh), jC = oa(A0), D0 = la(
  MC,
  ca,
  Lo,
  Po
), UC = la(
  SC,
  ca,
  Lo,
  Po
), BC = la(
  wC,
  ca,
  Lo,
  Po
), WC = la(
  ca,
  Lo,
  Po
);
function qC(t) {
  return ua(
    t,
    [FC, D0],
    [VC, UC],
    [GC, BC],
    [jC, WC]
  );
}
function HC(t) {
  return ua(kC(t), [PC, AC]);
}
function zC(t) {
  return ua(
    t,
    [DC, Op],
    [IC, Op],
    [RC, $C]
  );
}
function YC(t) {
  return ua(t, [NC, CC]);
}
const XC = la(ca);
function KC(t) {
  return ua(t, [TC, XC]);
}
const ZC = oa(xC, OC), JC = oa(k0), QC = la(
  ca,
  Lo,
  Po
);
function eL(t) {
  return ua(
    t,
    [ZC, D0],
    [JC, QC]
  );
}
const Mp = "Invalid Duration", I0 = {
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
}, tL = {
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
  ...I0
}, Sn = 146097 / 400, Ts = 146097 / 4800, nL = {
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
    weeks: Ts / 7,
    days: Ts,
    hours: Ts * 24,
    minutes: Ts * 24 * 60,
    seconds: Ts * 24 * 60 * 60,
    milliseconds: Ts * 24 * 60 * 60 * 1e3
  },
  ...I0
}, Ji = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], rL = Ji.slice(0).reverse();
function ti(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Re(r);
}
function R0(t, e) {
  var r;
  let n = (r = e.milliseconds) != null ? r : 0;
  for (const i of rL.slice(1))
    e[i] && (n += e[i] * t[i].milliseconds);
  return n;
}
function Tp(t, e) {
  const n = R0(t, e) < 0 ? -1 : 1;
  Ji.reduceRight((r, i) => {
    if (Se(e[i]))
      return r;
    if (r) {
      const s = e[r] * n, a = t[i][r], o = Math.floor(s / a);
      e[i] += o * n, e[r] -= o * a * n;
    }
    return i;
  }, null), Ji.reduce((r, i) => {
    if (Se(e[i]))
      return r;
    if (r) {
      const s = e[r] % 1;
      e[r] -= s, e[i] += s * t[r][i];
    }
    return i;
  }, null);
}
function iL(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class Re {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? nL : tL;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || Xe.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
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
      values: yu(e, Re.normalizeUnit),
      loc: Xe.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  static fromDurationLike(e) {
    if (as(e))
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
    const [r] = YC(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = KC(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the Duration is invalid");
    const r = e instanceof zn ? e : new zn(e, n);
    if (pt.throwOnInvalid)
      throw new P2(r);
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
      throw new Hv(e);
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
    return this.isValid ? Wt.create(this.loc, r).formatDurationFromString(this, e) : Mp;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return Mp;
    const n = Ji.map((r) => {
      const i = this.values[r];
      return Se(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(i);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Bh(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    return this.isValid ? R0(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e), r = {};
    for (const i of Ji)
      (ra(n.values, i) || ra(this.values, i)) && (r[i] = n.get(i) + this.get(i));
    return ti(this, { values: r }, !0);
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
      n[r] = E0(e(this.values[r], r));
    return ti(this, { values: n }, !0);
  }
  get(e) {
    return this[Re.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...yu(e, Re.normalizeUnit) };
    return ti(this, { values: n });
  }
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: r };
    return ti(this, a);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Tp(this.matrix, e), ti(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = iL(this.normalize().shiftToAll().toObject());
    return ti(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => Re.normalizeUnit(a));
    const n = {}, r = {}, i = this.toObject();
    let s;
    for (const a of Ji)
      if (e.indexOf(a) >= 0) {
        s = a;
        let o = 0;
        for (const u in r)
          o += this.matrix[u][a] * r[u], r[u] = 0;
        as(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        as(i[a]) && (r[a] = i[a]);
    for (const a in r)
      r[a] !== 0 && (n[s] += a === s ? r[a] : r[a] / this.matrix[s][a]);
    return Tp(this.matrix, n), ti(this, { values: n }, !0);
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
    return ti(this, { values: e }, !0);
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
    for (const r of Ji)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Ns = "Invalid Interval";
function sL(t, e) {
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
    const r = e instanceof zn ? e : new zn(e, n);
    if (pt.throwOnInvalid)
      throw new L2(r);
    return new ft({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = ba(e), i = ba(n), s = sL(r, i);
    return s == null ? new ft({
      start: r,
      end: i
    }) : s;
  }
  static after(e, n) {
    const r = Re.fromDurationLike(n), i = ba(e);
    return ft.fromDateTimes(i, i.plus(r));
  }
  static before(e, n) {
    const r = Re.fromDurationLike(n), i = ba(e);
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
    const n = e.map(ba).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), r = [];
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
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Ns;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(e = mu, n = {}) {
    return this.isValid ? Wt.create(this.s.loc.clone(n), e).formatInterval(this) : Ns;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Ns;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ns;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Ns;
  }
  toFormat(e, { separator: n = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Ns;
  }
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : Re.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return ft.fromDateTimes(e(this.s), e(this.e));
  }
}
class il {
  static hasDST(e = pt.defaultZone) {
    const n = Oe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Ur.isValidZone(e);
  }
  static normalizeZone(e) {
    return hi(e, pt.defaultZone);
  }
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Xe.create(e)).getStartOfWeek();
  }
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Xe.create(e)).getMinDaysInFirstWeek();
  }
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Xe.create(e)).getWeekendDays().slice();
  }
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Xe.create(n, r, s)).months(e);
  }
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || Xe.create(n, r, s)).months(e, !0);
  }
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Xe.create(n, r, null)).weekdays(e);
  }
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Xe.create(n, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return Xe.create(e).meridiems();
  }
  static eras(e = "short", { locale: n = null } = {}) {
    return Xe.create(n, null, "gregory").eras(e);
  }
  static features() {
    return { relative: v0(), localeWeek: _0() };
  }
}
function Np(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(Re.fromMillis(r).as("days"));
}
function aL(t, e, n) {
  const r = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = Np(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Np]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of r)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function oL(t, e, n, r) {
  let [i, s, a, o] = aL(t, e, n);
  const l = e - i, u = n.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = Re.fromObject(s, r);
  return u.length > 0 ? Re.fromMillis(l, r).shiftTo(...u).plus(f) : f;
}
const zh = {
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
}, Cp = {
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
}, lL = zh.hanidec.replace(/[\[|\]]/g, "").split("");
function uL(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(zh.hanidec) !== -1)
        e += lL.indexOf(t[n]);
      else
        for (const i in Cp) {
          const [s, a] = Cp[i];
          r >= s && r <= a && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Fn({ numberingSystem: t }, e = "") {
  return new RegExp(`${zh[t || "latn"]}${e}`);
}
const cL = "missing Intl.DateTimeFormat.formatToParts support";
function Ve(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(uL(n)) };
}
const fL = String.fromCharCode(160), $0 = `[ ${fL}]`, F0 = new RegExp($0, "g");
function hL(t) {
  return t.replace(/\./g, "\\.?").replace(F0, $0);
}
function Lp(t) {
  return t.replace(/\./g, "").replace(F0, " ").toLowerCase();
}
function Vn(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(hL).join("|")),
    deser: ([n]) => t.findIndex((r) => Lp(n) === Lp(r)) + e
  };
}
function Pp(t, e) {
  return { regex: t, deser: ([, n, r]) => nc(n, r), groups: e };
}
function sl(t) {
  return { regex: t, deser: ([e]) => e };
}
function dL(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function mL(t, e) {
  const n = Fn(e), r = Fn(e, "{2}"), i = Fn(e, "{3}"), s = Fn(e, "{4}"), a = Fn(e, "{6}"), o = Fn(e, "{1,2}"), l = Fn(e, "{1,3}"), u = Fn(e, "{1,6}"), f = Fn(e, "{1,9}"), c = Fn(e, "{2,4}"), h = Fn(e, "{4,6}"), d = (g) => ({ regex: RegExp(dL(g.val)), deser: ([y]) => y, literal: !0 }), p = ((g) => {
    if (t.literal)
      return d(g);
    switch (g.val) {
      case "G":
        return Vn(e.eras("short"), 0);
      case "GG":
        return Vn(e.eras("long"), 0);
      case "y":
        return Ve(u);
      case "yy":
        return Ve(c, zf);
      case "yyyy":
        return Ve(s);
      case "yyyyy":
        return Ve(h);
      case "yyyyyy":
        return Ve(a);
      case "M":
        return Ve(o);
      case "MM":
        return Ve(r);
      case "MMM":
        return Vn(e.months("short", !0), 1);
      case "MMMM":
        return Vn(e.months("long", !0), 1);
      case "L":
        return Ve(o);
      case "LL":
        return Ve(r);
      case "LLL":
        return Vn(e.months("short", !1), 1);
      case "LLLL":
        return Vn(e.months("long", !1), 1);
      case "d":
        return Ve(o);
      case "dd":
        return Ve(r);
      case "o":
        return Ve(l);
      case "ooo":
        return Ve(i);
      case "HH":
        return Ve(r);
      case "H":
        return Ve(o);
      case "hh":
        return Ve(r);
      case "h":
        return Ve(o);
      case "mm":
        return Ve(r);
      case "m":
        return Ve(o);
      case "q":
        return Ve(o);
      case "qq":
        return Ve(r);
      case "s":
        return Ve(o);
      case "ss":
        return Ve(r);
      case "S":
        return Ve(l);
      case "SSS":
        return Ve(i);
      case "u":
        return sl(f);
      case "uu":
        return sl(o);
      case "uuu":
        return Ve(n);
      case "a":
        return Vn(e.meridiems(), 0);
      case "kkkk":
        return Ve(s);
      case "kk":
        return Ve(c, zf);
      case "W":
        return Ve(o);
      case "WW":
        return Ve(r);
      case "E":
      case "c":
        return Ve(n);
      case "EEE":
        return Vn(e.weekdays("short", !1), 1);
      case "EEEE":
        return Vn(e.weekdays("long", !1), 1);
      case "ccc":
        return Vn(e.weekdays("short", !0), 1);
      case "cccc":
        return Vn(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return Pp(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Pp(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return sl(/[a-z_+-/]{1,256}?/i);
      case " ":
        return sl(/[^\S\n\r]/);
      default:
        return d(g);
    }
  })(t) || {
    invalidReason: cL
  };
  return p.token = t, p;
}
const pL = {
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
function gL(t, e, n) {
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
  let o = pL[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function yL(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function vL(t, e, n) {
  const r = t.match(e);
  if (r) {
    const i = {};
    let s = 1;
    for (const a in n)
      if (ra(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(r.slice(s, s + l))), s += l;
      }
    return [r, i];
  } else
    return [r, {}];
}
function _L(t) {
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
  return Se(t.z) || (n = Ur.create(t.z)), Se(t.Z) || (n || (n = new Qt(t.Z)), r = t.Z), Se(t.q) || (t.M = (t.q - 1) * 3 + 1), Se(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), Se(t.u) || (t.S = Uh(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), n, r];
}
let Dc = null;
function bL() {
  return Dc || (Dc = Oe.fromMillis(1555555555555)), Dc;
}
function EL(t, e) {
  if (t.literal)
    return t;
  const n = Wt.macroTokenToFormatOpts(t.val), r = j0(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function V0(t, e) {
  return Array.prototype.concat(...t.map((n) => EL(n, e)));
}
function G0(t, e, n) {
  const r = V0(Wt.parseFormat(n), t), i = r.map((a) => mL(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [a, o] = yL(i), l = RegExp(a, "i"), [u, f] = vL(e, l, o), [c, h, d] = f ? _L(f) : [null, null, void 0];
    if (ra(f, "a") && ra(f, "H"))
      throw new Vs(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function SL(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: a } = G0(t, e, n);
  return [r, i, s, a];
}
function j0(t, e) {
  if (!t)
    return null;
  const r = Wt.create(e, t).dtFormatter(bL()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((a) => gL(a, t, s));
}
const Ic = "Invalid DateTime", Ap = 864e13;
function al(t) {
  return new zn("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Rc(t) {
  return t.weekData === null && (t.weekData = pu(t.c)), t.weekData;
}
function $c(t) {
  return t.localWeekData === null && (t.localWeekData = pu(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Bi(t, e) {
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
function U0(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function ol(t, e) {
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
function Fl(t, e, n) {
  return U0(tc(t), e, n);
}
function kp(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, gu(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
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
  }).as("milliseconds"), o = tc(s);
  let [l, u] = U0(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function _a(t, e, n, r, i, s) {
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
      new zn("unparsable", `the input "${i}" can't be parsed as ${r}`)
    );
}
function ll(t, e, n = !0) {
  return t.isValid ? Wt.create(Xe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Fc(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += bt(t.c.year, n ? 6 : 4), e ? (r += "-", r += bt(t.c.month), r += "-", r += bt(t.c.day)) : (r += bt(t.c.month), r += bt(t.c.day)), r;
}
function Dp(t, e, n, r, i, s) {
  let a = bt(t.c.hour);
  return e ? (a += ":", a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += ":")) : a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += bt(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += bt(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += bt(Math.trunc(-t.o / 60)), a += ":", a += bt(Math.trunc(-t.o % 60))) : (a += "+", a += bt(Math.trunc(t.o / 60)), a += ":", a += bt(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const B0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, wL = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, xL = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, W0 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], OL = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], ML = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function TL(t) {
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
    throw new Hv(t);
  return e;
}
function Ip(t) {
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
      return TL(t);
  }
}
function Rp(t, e) {
  const n = hi(e.zone, pt.defaultZone), r = Xe.fromObject(e), i = pt.now();
  let s, a;
  if (Se(t.year))
    s = i;
  else {
    for (const u of W0)
      Se(t[u]) && (t[u] = B0[u]);
    const o = g0(t) || y0(t);
    if (o)
      return Oe.invalid(o);
    const l = n.offset(i);
    [s, a] = Fl(t, l, n);
  }
  return new Oe({ ts: s, zone: n, loc: r, o: a });
}
function $p(t, e, n) {
  const r = Se(n.round) ? !0 : n.round, i = (a, o) => (a = Bh(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), s = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const a of n.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function Fp(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class Oe {
  constructor(e) {
    const n = e.zone || pt.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new zn("invalid input") : null) || (n.isValid ? null : al(n));
    this.ts = Se(e.ts) ? pt.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        i = ol(this.ts, o), r = Number.isNaN(i.year) ? new zn("invalid input") : null, i = r ? null : i, s = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || Xe.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new Oe({});
  }
  static local() {
    const [e, n] = Fp(arguments), [r, i, s, a, o, l, u] = n;
    return Rp({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, n] = Fp(arguments), [r, i, s, a, o, l, u] = n;
    return e.zone = Qt.utcInstance, Rp({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = nC(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return Oe.invalid("invalid input");
    const i = hi(n.zone, pt.defaultZone);
    return i.isValid ? new Oe({
      ts: r,
      zone: i,
      loc: Xe.fromObject(n)
    }) : Oe.invalid(al(i));
  }
  static fromMillis(e, n = {}) {
    if (as(e))
      return e < -Ap || e > Ap ? Oe.invalid("Timestamp out of range") : new Oe({
        ts: e,
        zone: hi(n.zone, pt.defaultZone),
        loc: Xe.fromObject(n)
      });
    throw new ln(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (as(e))
      return new Oe({
        ts: e * 1e3,
        zone: hi(n.zone, pt.defaultZone),
        loc: Xe.fromObject(n)
      });
    throw new ln("fromSeconds requires a numerical input");
  }
  static fromObject(e, n = {}) {
    e = e || {};
    const r = hi(n.zone, pt.defaultZone);
    if (!r.isValid)
      return Oe.invalid(al(r));
    const i = Xe.fromObject(n), s = yu(e, Ip), { minDaysInFirstWeek: a, startOfWeek: o } = Ep(s, i), l = pt.now(), u = Se(n.specificOffset) ? r.offset(l) : n.specificOffset, f = !Se(s.ordinal), c = !Se(s.year), h = !Se(s.month) || !Se(s.day), d = c || h, m = s.weekYear || s.weekNumber;
    if ((d || f) && m)
      throw new Vs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && f)
      throw new Vs("Can't mix ordinal dates with month/day");
    const p = m || s.weekday && !d;
    let g, y, v = ol(l, u);
    p ? (g = OL, y = wL, v = pu(v, a, o)) : f ? (g = ML, y = xL, v = kc(v)) : (g = W0, y = B0);
    let b = !1;
    for (const C of g) {
      const R = s[C];
      Se(R) ? b ? s[C] = y[C] : s[C] = v[C] : b = !0;
    }
    const E = p ? Q2(s, a, o) : f ? eC(s) : g0(s), x = E || y0(s);
    if (x)
      return Oe.invalid(x);
    const N = p ? _p(s, a, o) : f ? bp(s) : s, [O, P] = Fl(N, u, r), k = new Oe({
      ts: O,
      zone: r,
      o: P,
      loc: i
    });
    return s.weekday && d && e.weekday !== k.weekday ? Oe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${k.toISO()}`
    ) : k;
  }
  static fromISO(e, n = {}) {
    const [r, i] = qC(e);
    return _a(r, i, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, i] = HC(e);
    return _a(r, i, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, i] = zC(e);
    return _a(r, i, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (Se(e) || Se(n))
      throw new ln("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, a = Xe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = SL(a, e, n);
    return f ? Oe.invalid(f) : _a(o, l, r, `format ${n}`, e, u);
  }
  static fromString(e, n, r = {}) {
    return Oe.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, i] = eL(e);
    return _a(r, i, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the DateTime is invalid");
    const r = e instanceof zn ? e : new zn(e, n);
    if (pt.throwOnInvalid)
      throw new C2(r);
    return new Oe({ invalid: r });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, n = {}) {
    const r = j0(e, Xe.fromObject(n));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(e, n = {}) {
    return V0(Wt.parseFormat(e), Xe.fromObject(n)).map((i) => i.val).join("");
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
    return this.isValid ? Rc(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Rc(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Rc(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? $c(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? $c(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? $c(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? kc(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? il.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? il.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? il.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? il.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, r = tc(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), a = this.zone.offset(r - i * n), o = this.zone.offset(r - s * n);
    if (a === o)
      return [this];
    const l = r - a * n, u = r - o * n, f = ol(l, a), c = ol(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Bi(this, { ts: l }), Bi(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return Co(this.year);
  }
  get daysInMonth() {
    return gu(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? Ys(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? lo(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? lo(
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
    return this.setZone(pt.defaultZone);
  }
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = hi(e, pt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || r) {
        const s = e.offset(this.ts), a = this.toObject();
        [i] = Fl(a, s, e);
      }
      return Bi(this, { ts: i, zone: e });
    } else
      return Oe.invalid(al(e));
  }
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return Bi(this, { loc: i });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = yu(e, Ip), { minDaysInFirstWeek: r, startOfWeek: i } = Ep(n, this.loc), s = !Se(n.weekYear) || !Se(n.weekNumber) || !Se(n.weekday), a = !Se(n.ordinal), o = !Se(n.year), l = !Se(n.month) || !Se(n.day), u = o || l, f = n.weekYear || n.weekNumber;
    if ((u || a) && f)
      throw new Vs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Vs("Can't mix ordinal dates with month/day");
    let c;
    s ? c = _p(
      { ...pu(this.c, r, i), ...n },
      r,
      i
    ) : Se(n.ordinal) ? (c = { ...this.toObject(), ...n }, Se(n.day) && (c.day = Math.min(gu(c.year, c.month), c.day))) : c = bp({ ...kc(this.c), ...n });
    const [h, d] = Fl(c, this.o, this.zone);
    return Bi(this, { ts: h, o: d });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e);
    return Bi(this, kp(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e).negate();
    return Bi(this, kp(this, n));
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
    return this.isValid ? Wt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ic;
  }
  toLocaleString(e = mu, n = {}) {
    return this.isValid ? Wt.create(this.loc.clone(n), e).formatDateTime(this) : Ic;
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
    let o = Fc(this, a);
    return o += "T", o += Dp(this, a, n, r, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Fc(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return ll(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + Dp(
      this,
      a === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  toRFC2822() {
    return ll(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return ll(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Fc(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), ll(this, i, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Ic;
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
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = rC(n).map(Re.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = oL(o, l, s, i);
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
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), $p(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? $p(e.base || Oe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("min requires all arguments be DateTimes");
    return Sp(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("max requires all arguments be DateTimes");
    return Sp(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, a = Xe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return G0(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return Oe.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return mu;
  }
  static get DATE_MED() {
    return zv;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return A2;
  }
  static get DATE_FULL() {
    return Yv;
  }
  static get DATE_HUGE() {
    return Xv;
  }
  static get TIME_SIMPLE() {
    return Kv;
  }
  static get TIME_WITH_SECONDS() {
    return Zv;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Jv;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return Qv;
  }
  static get TIME_24_SIMPLE() {
    return e0;
  }
  static get TIME_24_WITH_SECONDS() {
    return t0;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return n0;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return r0;
  }
  static get DATETIME_SHORT() {
    return i0;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return s0;
  }
  static get DATETIME_MED() {
    return a0;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return o0;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return k2;
  }
  static get DATETIME_FULL() {
    return l0;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return u0;
  }
  static get DATETIME_HUGE() {
    return c0;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return f0;
  }
}
function ba(t) {
  if (Oe.isDateTime(t))
    return t;
  if (t && t.valueOf && as(t.valueOf()))
    return Oe.fromJSDate(t);
  if (t && typeof t == "object")
    return Oe.fromObject(t);
  throw new ln(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const q0 = [0, 1, 0, 0];
function Vp(t, e = "second", n, r) {
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
  return l ? Oe.fromISO(s).toFormat(
    `${r ? "UTC:" : ""}${l}`
  ) : s.replace(/\.\d{3}/, "");
}
function Yf(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function Vc(t) {
  return Oe.fromISO(t).toFormat("yyyy-MM-dd");
}
function NL(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? CL(t, e) : LL(t, e);
}
function CL(t, e) {
  var l;
  const n = (l = e.timeValueList) != null ? l : [];
  let r, i = 0, s = n.length - 1;
  for (; s - i > 1; )
    r = Math.floor((i + s) / 2), n[r] >= t ? s = r : i = r;
  const a = Math.abs(n[i] - t), o = Math.abs(n[s] - t);
  return n[a < o ? i : s];
}
function LL(t, e) {
  var l;
  const n = (l = e.timeInterval) != null ? l : q0, r = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
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
const vt = ys("map", () => {
  const t = Xn(), e = we({}), n = rt([]), r = rt([]), i = we(!1), s = we(!1), a = we(void 0);
  function o(v) {
    a.value = v;
  }
  function l(...v) {
    n.value = [.../* @__PURE__ */ new Set([...n.value, ...v])];
  }
  function u(...v) {
    r.value = [.../* @__PURE__ */ new Set([...r.value, ...v])];
  }
  function f(...v) {
    n.value = n.value.filter(
      (b) => v.indexOf(b.id) === -1
    ), r.value = r.value.filter(
      (b) => v.indexOf(b.id) === -1
    );
  }
  function c() {
    n.value = [];
  }
  function h(v) {
    var b;
    return !!((b = n.value) != null && b.find((E) => E.id === v));
  }
  function d(v, b = !1) {
    var x;
    const E = b ? r : n;
    E.value = [
      ...((x = E.value) == null ? void 0 : x.sort(
        (N, O) => v.indexOf(N.id) - v.indexOf(O.id)
      )) || []
    ];
  }
  function m(v, b) {
    n.value = n.value.map((E) => E.id === v ? { ...E, opacity: b, previousOpacity: E.opacity } : E);
  }
  function p(v, b, E) {
    n.value = n.value.map((x) => {
      if (x.id === v) {
        const N = {
          ...x,
          currentTimeMinValue: b ? Yf(b) : void 0,
          currentTimeMaxValue: E ? Yf(E) : void 0
        };
        return N.type === "WMTS" && (N.name = t.getLayerCurrentLabel(N)), N;
      }
      return x;
    });
  }
  function g(v) {
    i.value = v;
  }
  function y(v) {
    s.value = v;
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
    setIs3dMesh: y,
    hasLayer: h
  };
}), Gp = "main", PL = "root_3d", AL = -222, Zt = ys(
  "config",
  () => {
    const t = rt(), e = we(Gp), n = de(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.themes;
    }), r = de(
      () => {
        var u;
        return (u = n.value) == null ? void 0 : u.find((f) => f.name === e.value);
      }
    ), i = de(() => {
      var u;
      return ((u = t.value) == null ? void 0 : u.background_layers) || [];
    }), s = de(() => {
      var f;
      const u = (f = n.value) == null ? void 0 : f.filter(
        (c) => {
          var h;
          return ((h = c.metadata) == null ? void 0 : h.ol3d_type) !== void 0;
        }
      );
      if (!!u)
        return {
          name: PL,
          id: AL,
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
      e.value = Gp;
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
function os() {
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
const jp = os();
function Xn() {
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
    const u = ((d = l.time) == null ? void 0 : d.mode) === Ir.RANGE;
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
    ].join(x2);
  }
  function s(l) {
    var h, d;
    const u = cu();
    if (!((h = l.metadata) != null && h.exclusion))
      return;
    const f = vt(), c = f.layers.filter(
      (m) => {
        var p, g;
        return t(
          (p = l == null ? void 0 : l.metadata) == null ? void 0 : p.exclusion,
          (g = m == null ? void 0 : m.metadata) == null ? void 0 : g.exclusion
        );
      }
    );
    c.length > 0 && (f.removeLayers(...c.map((m) => m.id)), u.addNotification(
      lt.t(
        "The layer <b>{{layersToRemove}}</b> has been removed because it cannot be displayed while the layer <b>{{layer}}</b> is displayed",
        {
          count: c.length,
          layersToRemove: c.map((m) => lt.t(m.name, { ns: "client" })).join(", "),
          layer: lt.t(l.name, { ns: "client" }),
          ns: "client"
        }
      ),
      oo.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = vt(), f = cu();
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
      oo.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var p;
    const c = Zt(), h = vt(), d = f ? c.layerTrees_3d : c.theme, m = jp.findById(l, d);
    if (m) {
      const g = ((p = m.metadata) == null ? void 0 : p.linked_layers) || [];
      u === !1 ? h.removeLayers(m.id, ...g) : (s(m), (f ? h.add3dLayers : h.addLayers)(
        e(m),
        ...g.map(
          (v) => e(
            jp.findById(parseInt(v, 10))
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
class kL {
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
const ul = new kL();
function Up(t, e) {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(r);
    }, e);
  };
}
function Ks(t) {
  return (t == null ? void 0 : t.trim()) && !isNaN(Number(t)) ? Number(t) : void 0;
}
function DL(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (n) => n !== null && !isNaN(Number(n)) ? parseFloat(n) : void 0
  )) || [];
}
function IL(t, e) {
  return (t == null ? void 0 : t.split(e).map(Yh)) || [];
}
function Yh(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function H0() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function pr(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
const RL = pr(/firefox/i);
pr(/safari/i) && !pr(/chrome/i) && pr(/android/i);
pr(/iP(ad|od|hone)/i);
pr(/chrome/i) && pr(/android/i);
pr(/chrome/i);
pr(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
pr(/Edge/i);
const Ao = "ipv6", vu = "address", ko = "applogin", Do = "localforage", Zs = "debug", $L = "embeddedserver", FL = "embeddedserverprotocol", _u = "fid", wi = "lang", bu = "layersOpen", Xf = "version", VL = "map_id", Bp = "layers", Wp = "bgLayer", qp = "opacities", uo = "theme", Hp = "time", zp = "zoom", GL = "SRS", Yp = "X", Xp = "Y", co = "serial", jL = "serialLayer", z0 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Kf = "lc", Zf = "sliderRatio", Y0 = "bgOpacity", UL = "layers_indices", Kp = "layers_opacity", Zp = "layers_visibility";
var Dt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(Dt || {});
class X0 {
}
class Eu extends X0 {
  static processRules(e) {
    return Eu.ruleUseLocalStorage(e) ? Dt.localStorage : Dt.permalink;
  }
  static processRulesForKey(e, n) {
    if (e === uo && {}.VITE_DEPLOY_GHPAGES !== "true")
      return Dt.permalinkAsPath;
    if (z0.includes(e))
      return Dt.localStorage;
    if (e === co)
      return Dt.permalink;
    if (e === bu)
      return Dt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [BL, WL, qL].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const BL = (t) => Object.keys(t).length === 0, WL = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(Ao) || t.hasOwnProperty(ko) || t.hasOwnProperty(Do)), qL = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(Ao) && t.hasOwnProperty(ko) && t.hasOwnProperty(Do);
class Su extends X0 {
  static processRules() {
    return Dt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, n) {
    if (Su.ruleUsePermalink(e))
      return Dt.permalink;
    if (e === bu || z0.includes(e))
      return Dt.localStorage;
    if (e === co)
      return Dt.permalink;
    if (e === uo)
      return Dt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      HL,
      zL,
      YL
    ].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const HL = (t) => t === Kf || t === Zf, zL = (t) => t === Xf, YL = (t) => t === uo && {}.VITE_DEPLOY_GHPAGES === "true";
class K0 {
  constructor() {
    Qe(this, "snappedUrl");
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
const Qi = new K0();
class XL extends K0 {
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
const KL = new XL();
class ZL {
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
    return Qi.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const n = (i = this.correspondingStorages(
      Eu.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), r = this.storageForKey(e, Eu, n);
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
      Su.processRules()
    ), r = this.storageForKey(e, Su);
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
    if (e === Dt.permalinkAndLocalStorage)
      return [Qi, localStorage];
    if (e === Dt.localStorage)
      return [localStorage];
    if (e === Dt.permalink)
      return [Qi];
    if (e === Dt.permalinkAsPath)
      return [KL];
  }
}
const cl = new ZL();
function JL(t) {
  return QL(t) || eP(t) || tP(t) || nP(t);
}
const QL = (t) => Object.keys(t).length === 0, eP = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    Ao,
    ko,
    Do,
    _u,
    wi,
    vu,
    Zs
  ].some((n) => e.indexOf(n) !== -1);
}, tP = (t) => {
  const e = Object.keys(t), n = (i) => e.indexOf(i) !== -1, r = [
    [ko, Do],
    [Zs, _u],
    [wi, _u],
    [Zs, wi],
    [Zs, vu],
    [wi, vu]
  ];
  return Object.keys(t).length === 2 && r.reduce(
    (i, s) => i || s.every(n),
    !1
  );
}, nP = (t) => {
  const e = Object.keys(t), n = (a) => e.indexOf(a) !== -1, r = [Ao, ko, Do].every(
    n
  ), i = [Zs, _u, wi].every(n), s = [Zs, vu, wi].every(n);
  return Object.keys(t).length === 3 && (r || i || s);
};
class rP {
  constructor() {
    Qe(this, "intialVersion");
    const e = cl.paramKeys, n = this.getValue(Xf, Ks);
    this.intialVersion = n ? Math.max(2, Math.min(n, 3)) : JL(e) ? 3 : 2, this.setValue(Xf, 3);
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
    return this.mapToEntity(cl.getValue(e), n);
  }
  setValue(e, n, r) {
    cl.setValue(e, this.mapToStorage(n, r));
  }
  removeItem(e) {
    cl.removeItem(e);
  }
}
const Ne = new rP(), iP = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], sP = "https://vectortiles.geoportail.lu", aP = "/getpermalinkstyle", oP = "/uploadpermalinkstyle", lP = "/deletepermalinkstyle";
class uP {
  constructor() {
    Qe(this, "_vectortilesUrl", sP);
    Qe(this, "_mvtStylesGetUrl", aP);
    Qe(this, "_mvtStylesUploadUrl", oP);
    Qe(this, "_mvtStylesDeleteUrl", lP);
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
const Ca = new uP(), Vr = () => ({
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
function Ai() {
  function t(g) {
    const y = Qi.getItem($L), v = Qi.getItem(FL) || "http";
    return (y ? `${v}://${y}` : Ca.vectortilesUrl) + `/styles/${g}/style.json`;
  }
  function e(g) {
    return `${Ca.vectortilesUrl}/styles/${g}/{z}/{x}/{y}.png`;
  }
  function n(g) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(g);
  }
  function r(g, y) {
    const v = Kn();
    if (g == null)
      return;
    const b = /* @__PURE__ */ new Map();
    v.bgVectorSources.forEach((E, x) => {
      if (x === g.id) {
        const N = { ...E, xyz_custom: y };
        b.set(x, N);
      } else
        b.set(x, E);
    }), v.setBgVectorSources(b);
  }
  function i(g, y, v = !1) {
    const b = "", E = t(y), x = e(y), N = {
      label: g,
      defaultMapBoxStyle: E,
      defaultMapBoxStyleXYZ: x,
      xyz: x,
      xyz_custom: b,
      style: E
    }, O = Qi.getItem(co), P = Qi.getItem(jL);
    if (O)
      n(O) && console.log(P);
    else if (!v)
      return Promise.resolve(N);
    return Promise.resolve(N);
  }
  function s(g) {
    const y = Vr().medium_default_styles.road;
    if (g) {
      g.colors.forEach((b, E) => {
        y[E].color = b;
      });
      const v = y.findIndex(
        (b) => b.label === "Hillshade"
      );
      y[v].visible = g.hillshade;
    }
    return y;
  }
  function a(g, y, v) {
    if (!g || !y.get(g.id))
      return;
    const b = JSON.parse(
      JSON.stringify(y.get(g.id))
    );
    if (!!b && !(!b || !b.layers))
      return v && v.forEach((E) => {
        b == null || b.layers.forEach((x, N) => {
          for (const O of iP)
            if ((E[`${O}s`] || []).includes(x.id)) {
              const k = Object.assign(
                {},
                b.layers[N].paint
              );
              E.color && (k[`${O}-color`] = E.color, k[`${O}-opacity`] = 1, b.layers[N].paint = k), b.layers[N].layout = Object.assign(
                {},
                b.layers[N].layout,
                { visibility: E.visible ? "visible" : "none" }
              );
            }
        });
      }), b;
  }
  function o(g) {
    if (g === null)
      return Promise.resolve();
    {
      const y = `${Ca.mvtStylesDeleteUrl}?id=${g}`;
      return fetch(y).catch(() => "");
    }
  }
  function l(g, y) {
    return o(y).then(() => {
      const v = new FormData(), b = JSON.stringify(g), E = new Blob([b], { type: "application/json" });
      v.append("style", E, "style.json");
      const x = {
        method: "POST",
        body: v
      };
      return fetch(Ca.mvtStylesUploadUrl, x).then((N) => N.json()).then((N) => N.id).catch((N) => console.warn(N));
    });
  }
  function u(g, y) {
    if (!y)
      return;
    const v = g.maplibreMap;
    !v || (v.loaded() ? v.setStyle(y) : new Promise((b) => v.once("data", b)).then(
      () => v.setStyle(y)
    ));
  }
  function f(g) {
    return Vr().bg_layers.find((y) => y.id == (g == null ? void 0 : g.id));
  }
  function c(g) {
    const y = f(g);
    return y == null ? void 0 : y.vector_id;
  }
  function h(g) {
    const y = f(g);
    return (y == null ? void 0 : y.vector_id) !== void 0;
  }
  function d(g) {
    const y = f(g);
    return {
      isEditable: (y == null ? void 0 : y.vector_id) !== void 0,
      hasSimpleStyle: (y == null ? void 0 : y.simple_style_class) !== void 0,
      hasAdvancedStyle: (y == null ? void 0 : y.medium_style_class) !== void 0,
      hasExpertStyle: (y == null ? void 0 : y.expert_style_class) !== void 0
    };
  }
  function m(g, y) {
    return y.map(
      (v) => Object.assign(v, {
        selected: v.colors.every(
          (b, E) => {
            var x;
            return ((x = g[E]) == null ? void 0 : x.color) === b;
          }
        )
      })
    );
  }
  function p() {
    const g = [], y = Kn();
    Vr().bg_layers.forEach((v) => {
      if (v.vector_id) {
        const b = i(v.icon_id, v.vector_id);
        g.push(b.then((E) => ({ id: v.id, config: E })));
      }
    }), Promise.all(g).then((v) => {
      const b = /* @__PURE__ */ new Map();
      v.forEach((E) => b.set(E.id, E.config)), y.setBgVectorSources(b);
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
    checkSelection: m,
    isLayerStyleEditable: h,
    getStyleCapabilitiesFromLayer: d,
    initBackgroundsConfigs: p
  };
}
const Kn = ys(
  "style",
  () => {
    const t = Ai(), e = rt(), n = rt(/* @__PURE__ */ new Map()), r = rt(
      /* @__PURE__ */ new Map()
    ), i = rt(!1), s = rt(null), a = rt();
    function o(m) {
      n.value = m;
    }
    function l(m) {
      const p = /* @__PURE__ */ new Map();
      r.value.forEach((g, y) => {
        y !== m && p.set(y, g);
      }), r.value = p;
    }
    function u(m, p) {
      const g = /* @__PURE__ */ new Map();
      r.value.forEach(
        (y, v) => g.set(v, y)
      ), g.set(m, p), r.value = g;
    }
    function f(m) {
      e.value = t.getRoadStyleFromSimpleStyle(m), h();
    }
    function c(m) {
      e.value = m, h();
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
class cP {
  constructor() {
    Qe(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = Kn();
    let n, r = !1;
    n = vn(() => {
      e.bgVectorSources && (this.restoreStyle(!1), r && this.persistStyle(), r = !0, n && n());
    });
  }
  persistStyle() {
    const e = Kn(), { bgStyle: n } = He(e);
    this.styleWatcher || (this.styleWatcher = tt(
      n,
      (r, i) => {
        if (i !== r) {
          const s = vt();
          s.bgLayer && (Ne.setValue(
            s.bgLayer.name,
            r || [],
            ul.styleToLocalStorage
          ), Ne.setValue(
            co,
            r || [],
            ul.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const n = Kn();
    n.setStyle(null);
    const i = vt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Ne.getValue(
        co,
        ul.styleSerialToStyle
      )), s.length === 0 && (s = Ne.getValue(
        i.name,
        ul.styleLocalStorageToStyle
      )), s && s.length > 0 && n.setStyle(s);
    }
  }
}
const Z0 = new cP(), fP = "id", hP = "label", dP = "layer_name", mP = "metadata", pP = "queryable_id", gP = "current_time", yP = "time", vP = "defaultMapBoxStyle", _P = "https://map.geoportail.lu/ogcproxywms", bP = "https://map.geoportail.lu/httpsproxy";
class EP {
  constructor() {
    Qe(this, "_wmsProxyUrl", _P);
    Qe(this, "_remoteProxyUrl", bP);
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
const ia = new EP();
function J0() {
  return J_(
    [5.31, 49.38, 6.64, 50.21],
    jv,
    qa
  );
}
function Q0(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && H0();
}
function SP(t, e = "https") {
  const n = t.imageType.split("/")[1], r = Ne.getValue(Ao, Yh) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${r}/mapproxy_4_v3/wmts/{Layer}${Q0(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${n}`;
}
class wP {
  createOlLayer(e) {
    const { name: n, layers: r, imageType: i, url: s, id: a } = e, o = new Tg({
      url: s || ia.wmsProxyUrl,
      hidpi: H0(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: r
      },
      ...s != null || ia.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new rb({
      properties: {
        "olcs.extent": J0(),
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
const e_ = new wP(), xP = [
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
], OP = [
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
class MP {
  createOlLayer(e) {
    const { name: n, imageType: r, id: i } = e, s = Q0(e), a = bl(qa), o = a.getExtent(), l = new Ng({
      url: SP(e),
      tilePixelRatio: s ? 2 : 1,
      layer: n,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: r,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new sb({
        origin: ab(o),
        extent: o,
        resolutions: xP,
        matrixIds: OP
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new ib({
      source: l,
      properties: {
        "olcs.extent": J0(),
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
const t_ = new MP();
class n_ extends ob {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.accessToken, delete n.style, delete n.container, delete n.xyz, super(n), this.set("xyz", e.maplibreOptions.xyz), this.set("xyz_custom", e.maplibreOptions.xyz_custom), this.xyz_ = e.xyz, e.accessToken && (yd.accessToken = e.accessToken), this.map_ = new yd.Map({
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
    return a && this.map_.rotateTo(lb(-a), {
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
class TP {
  createOlLayer(e, n) {
    const r = Fr(), { id: i, metadata: s, name: a } = e, o = n.get(i);
    if (!o)
      return;
    const l = {
      container: r.getOlMap().getTarget(),
      ...o
    }, u = new n_({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = Kn(), c = Ai();
    return u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u.getMapLibreMap().getStyle()) : new Promise(
      (h) => u.getMapLibreMap().once("data", h)
    ).then(
      () => f.setBaseStyle(i, u.getMapLibreMap().getStyle())
    ), u.set(
      vP,
      c.getDefaultMapBoxStyleUrl(c.getVectorId(e))
    ), u;
  }
}
const NP = new TP();
var ls = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WFS = "WFS", t.WMTS = "WMTS", t.BG_WMTS = "BG WMTS", t.BG_MVT = "BG MVT", t["3D"] = "3D", t))(ls || {});
class CP {
  createOlLayer(e, n) {
    let r;
    if (n && (r = NP.createOlLayer(e, n)), !r)
      switch (e.type) {
        case ls.WMS:
          r = e_.createOlLayer(e);
          break;
        case ls.WMTS:
        case ls.BG_WMTS:
          r = t_.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return r.set(fP, e.id), r.set(hP, e.name), r.set(dP, e.name), r.set(mP, e.metadata), r.set(pP, e.id), r.set(
      gP,
      Xn().getLayerCurrentTime(e)
    ), r.set(yP, e.time), r.setOpacity(e.opacity), r;
  }
}
const Jp = new CP();
class LP {
  setLayerTime(e, n) {
    const r = e.getSource();
    r instanceof Tg && e_.setLayerTime(r, n), r instanceof Ng && t_.setLayerTime(e, r, n);
  }
}
const PP = new LP(), fl = -200;
function r_() {
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
    m.forEach((g, y) => {
      const v = p.find(
        (b) => b.get("id") === g.id
      );
      v == null || v.setZIndex(y + 1);
    });
  }
  function i(d, m, p) {
    const g = d.getLayers().getArray().find((y) => y.get("id") === m);
    g && g.setOpacity(p);
  }
  function s(d, m) {
    const p = Xn(), g = e(d, m.id), y = p.getLayerCurrentTime(m);
    y && g && PP.setLayerTime(g, y);
  }
  function a(d) {
    ya.delete(d);
  }
  function o(d) {
    return ya.has(d.id);
  }
  function l(d, m) {
    ya.set(d, m);
  }
  function u(d) {
    const m = d.id, p = ya.get(m);
    if (p)
      return p;
    {
      const g = Jp.createOlLayer(d);
      return l(m, g), g;
    }
  }
  function f(d) {
    return d && ya.get(d.id) || null;
  }
  function c(d, m) {
    const g = d.getLayers().getArray().find((y) => y.getZIndex() === fl);
    g && m(g);
  }
  function h(d, m, p) {
    var E;
    const g = d.getLayers(), y = g.getArray().findIndex((x) => x.getZIndex() === fl), v = (E = g.getArray()[y]) == null ? void 0 : E.get("id");
    let b;
    m && (o(m) ? b = f(m) : (b = Jp.createOlLayer(
      m,
      p
    ), l(m.id, b))), y >= 0 ? b ? (b.setZIndex(fl), g.setAt(y, b)) : g.removeAt(y) : b && (b.setZIndex(fl), d.addLayer(b)), v && v !== (m == null ? void 0 : m.id) && Z0.restoreStyle(!0);
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
class AP {
  constructor(e) {
    Qe(this, "previousLayers");
    Qe(this, "previousVectorSources");
    const n = vt(), r = Kn(), i = Fr(), s = Ai(), a = r_(), { appliedStyle: o } = He(r);
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
        c.forEach((m) => a.removeLayer(e, m.id)), h.forEach((m) => {
          a.addLayer(e, m.layer), a.setLayerTime(e, m.layer);
        }), d.forEach((m) => {
          a.setLayerOpacity(e, m.id, m.opacity), a.setLayerTime(e, m);
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
      r.bgStyle === null && !r.isExpertStyleActive ? s.unregisterStyle(r.styleSerial).then(r.styleSerial = null) : s.registerStyle(l, r.styleSerial).then((u) => {
        var c;
        r.styleSerial = u;
        const f = (c = n == null ? void 0 : n.bgLayer) == null ? void 0 : c.id;
        (n == null ? void 0 : n.bgLayer) && f !== void 0 && u !== void 0 && a.setBgLayer(
          e,
          n == null ? void 0 : n.bgLayer,
          r.bgVectorSources
        );
      }), a.applyOnBgLayer(
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
const kP = {
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
class DP {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = Fr().getOlMap().getView(), n = () => {
      const r = e.getZoom();
      Ne.setValue(zp, r ? Math.ceil(r) : null);
    };
    n(), vd.listen(
      e,
      "change:resolution",
      Up(n, 300)
    );
  }
  persistXY() {
    const e = Fr().getOlMap().getView(), n = () => {
      const r = e.getCenter();
      Ne.setValue(Yp, r ? Math.round(r[0]) : null), Ne.setValue(Xp, r ? Math.round(r[1]) : null);
    };
    n(), vd.listen(
      e,
      cb.PROPERTYCHANGE,
      Up(n, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = Fr().getOlMap().getView(), n = Ne.getValue(zp, Ks), r = Ne.getInitialVersion(), i = Ne.getValue(Yp, Ks), s = Ne.getValue(Xp, Ks), a = Ne.getValue(GL), o = Q_(
      UN,
      qa
    );
    let l, u;
    n !== void 0 ? u = r === 3 ? Number(n) : kP[n] : u = 8, i != null && s != null ? r === 3 && a != null ? l = gd([i, s], a, qa) : l = r === 3 ? [i, s] : o([s, i], void 0, 2) : l = gd(
      [6, 49.7],
      jv,
      qa
    ), e.setCenter(l), e.setZoom(u);
  }
}
const IP = new DP(), RP = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, $P = /* @__PURE__ */ fe({
  __name: "attribution-control",
  setup(t) {
    const e = vt(), n = we("");
    return vn(() => {
      var r, i;
      n.value = ((i = (r = e.bgLayer) == null ? void 0 : r.metadata) == null ? void 0 : i.attribution) || "";
    }), (r, i) => {
      const s = wh("dompurify-html");
      return n.value ? Zl((A(), j("div", RP, null, 512)), [
        [s, n.value]
      ]) : F("v-if", !0);
    };
  }
}), FP = /* @__PURE__ */ pe($P, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/attribution-control.vue"]]);
function Io(t, e) {
  const n = new t(e), r = Fr(), i = Ws("olMap");
  return _n(() => {
    i.addControl(n), i.changed();
  }), Li(() => {
    const s = r.getOlMap();
    s.removeControl(n), s.changed();
  }), {
    control: n
  };
}
const VP = ["title"], GP = /* @__PURE__ */ fe({
  __name: "location-control",
  props: {
    className: { type: String, required: !1, default: "location-button" },
    label: { type: String, required: !1, default: "\uE800" },
    tipLabel: { type: String, required: !1, default: "Location" }
  },
  setup(t) {
    const { t: e } = Ze(), n = t, r = we(null);
    function i() {
    }
    return _n(
      () => Io(Pg, { ...n, target: r })
    ), (s, a) => (A(), j("div", {
      ref_key: "controlElement",
      ref: r,
      class: Ae(`tracker-off ${n.className} ${M(Cg)} ${M(Lg)}`)
    }, [
      L("button", {
        title: M(e)(n.tipLabel),
        onClick: i
      }, oe(n.label), 9, VP)
    ], 2));
  }
}), jP = /* @__PURE__ */ pe(GP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/location-control.vue"]]), UP = ["title"], BP = /* @__PURE__ */ fe({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = vt(), { t: n } = Ze(), r = t, i = we(null);
    _n(
      () => Io(Pg, { ...r, target: i })
    );
    const s = () => {
      e.setIs3dActive(!e.is3dActive);
    };
    return (a, o) => (A(), j("div", {
      ref_key: "controlElement",
      ref: i,
      class: Ae(`${r.className} ${M(Cg)} ${M(Lg)} ${M(e).is3dActive ? "active" : ""}`)
    }, [
      L("button", {
        title: M(n)(r.tipLabel),
        onClick: s
      }, oe(r.label), 9, UP)
    ], 2));
  }
}), WP = /* @__PURE__ */ pe(BP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/map-3d.vue"]]), qP = /* @__PURE__ */ fe({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return Io(fb, t), (n, r) => F("v-if", !0);
  }
}), HP = /* @__PURE__ */ pe(qP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/fullscreen-control.vue"]]), zP = /* @__PURE__ */ fe({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return Io(hb, t), (n, r) => F("v-if", !0);
  }
}), YP = /* @__PURE__ */ pe(zP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/zoom-control.vue"]]);
class XP extends db {
  constructor(n) {
    super(n);
    Qe(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const KP = /* @__PURE__ */ fe({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: Array, required: !0 }
  },
  setup(t) {
    return Io(XP, t), (n, r) => F("v-if", !0);
  }
}), ZP = /* @__PURE__ */ pe(KP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/zoom-to-extent-control.vue"]]), JP = /* @__PURE__ */ fe({
  __name: "map-container",
  props: {
    v4_standalone: { type: Boolean, required: !1, default: !1 }
  },
  setup(t) {
    const e = Fr(), n = we(null), r = e.createMap(), i = [
      425152.9429259216,
      632446599999133e-8,
      914349.9239510496,
      6507914867875754e-9
    ];
    return _n(() => {
      n.value && (new AP(r), IP.bootstrap(), r.setTarget(n.value), window.olMap = r);
    }), Ay("olMap", r), (s, a) => (A(), j("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: n,
      class: "h-full w-full bg-white relative"
    }, [
      ie(YP),
      ie(ZP, { extent: i }),
      ie(HP),
      ie(FP),
      s.v4_standalone ? (A(), Ue(WP, { key: 0 })) : F("v-if", !0),
      ie(jP)
    ], 512));
  }
}), QP = /* @__PURE__ */ pe(JP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map/map-container.vue"]]), eA = "fr", tA = !0, nA = !1, rA = !1, wt = ys(
  "app",
  () => {
    const t = we(eA), e = we(tA), n = we(nA), r = we(rA), i = we(), s = we(), a = we(!1);
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
), wu = {
  name: "blank",
  id: 0
};
function i_() {
  const t = wt(), { mapId: e } = He(t), n = os(), r = vt(), i = Xn(), s = de(() => {
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
      if (c.type === ls.WMTS || c.type === ls.BG_WMTS)
        c.type = "BG WMTS";
      else if (c.type === ls.BG_MVT)
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
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || wu.id;
  }
  function u() {
    return wu.id;
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
const iA = ["title"], sA = /* @__PURE__ */ fe({
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
    const { t: e } = Ze(), n = t, r = de(() => {
      const s = e(n.bgTitle), a = n.bgTitle.length > 0, o = `${e("Background layer:")} ${e(n.bgName)}`;
      return `${s}${a ? " - " : ""}${o}`;
    }), i = de(
      () => `h-full w-full rounded-sm lux-bg-sel-icon
        lux-bg-sel-${n.bgName}
        bg-${n.bgName}_sm
        md:bg-${n.bgName}
        hd:bg-${n.bgName}_sm_hi
        hd_md:bg-${n.bgName}_hi`
    );
    return (s, a) => (A(), j("button", {
      title: r.value,
      class: Ae(i.value)
    }, null, 10, iA));
  }
}), Qp = /* @__PURE__ */ pe(sA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/background-selector/background-selector-item.vue"]]), aA = {
  key: 0,
  class: "flex flex-row-reverse"
}, oA = /* @__PURE__ */ fe({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { t: e } = Ze(), n = i_(), r = vt(), i = Zt(), { bgLayer: s, is3dMesh: a } = He(r), l = we(t.isOpen), u = we([]), f = de(
      () => {
        var m, p;
        return (p = (m = s.value) == null ? void 0 : m.id) != null ? p : n.getNullId();
      }
    ), c = de(
      () => {
        var m, p;
        return (p = (m = u.value) == null ? void 0 : m.find((g) => g.id === f.value)) == null ? void 0 : p.name;
      }
    );
    tt(
      () => i.bgLayers,
      (m) => {
        u.value = Vr().bg_layers.map(
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
    ), tt(
      () => r.bgLayer,
      (m, p) => {
        const g = r.layers;
        p === void 0 && m === null && (g == null ? void 0 : g.length) === 0 && (n.setBgLayer(n.defaultSelectedBgId.value), m === null && cu().addNotification(
          e(
            "Aucune couche n'\xE9tant d\xE9finie pour cette carte, une couche de fond a automatiquement \xE9t\xE9 ajout\xE9e.",
            { ns: "client" }
          )
        ));
      }
    );
    function h(m) {
      n.setBgLayer(m.id), l.value = !1;
    }
    function d() {
      l.value = !l.value;
    }
    return (m, p) => M(a) ? F("v-if", !0) : (A(), j("div", aA, [
      L("div", {
        class: Ae(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ie(Qp, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": c.value,
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      L("div", {
        class: Ae(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (A(!0), j(je, null, An(u.value, (g) => (A(), j("div", {
          key: g.id,
          class: Ae([
            "lux-bg-sel hover:bg-cyan-600",
            g.id === f.value ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ie(Qp, {
            "bg-name": g.name,
            onClick: (y) => h(g)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), lA = /* @__PURE__ */ pe(oA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/background-selector/background-selector.vue"]]), uA = /* @__PURE__ */ L("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), cA = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, fA = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, hA = { class: "text-xl" }, dA = /* @__PURE__ */ L("span", { "aria-hidden": "true" }, "\xD7", -1), mA = [
  dA
], pA = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, gA = { class: "flex flex-row justify-end" }, yA = /* @__PURE__ */ fe({
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
    const { t: e } = Ze(), n = we();
    _n(() => {
      n.value.focus();
    });
    const r = rt(!0);
    function i() {
      r.value = !1;
    }
    return (s, a) => (A(), Ue(By, { to: "body" }, [
      F(" backdrop "),
      uA,
      F(" modal "),
      ie(zu, {
        appear: "",
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "transform opacity-0 -translate-y-60",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "transform opacity-0 -translate-y-60",
        onAfterLeave: a[3] || (a[3] = (o) => s.$emit("close"))
      }, {
        default: _i(() => [
          r.value ? (A(), j("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: n,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = or(ar((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            L("div", cA, [
              F(" header (title)"),
              L("div", fA, [
                L("h4", hA, oe(t.title), 1),
                L("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, [...mA])
              ]),
              F(" content slot "),
              L("div", {
                class: Ae(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                Ty(s.$slots, "content")
              ], 2),
              F(" footer (optional)"),
              t.footer ? (A(), j("div", pA, [
                L("div", gA, [
                  L("button", {
                    type: "button",
                    class: "lux-btn",
                    "data-dismiss": "modal",
                    onClick: a[1] || (a[1] = (o) => i())
                  }, oe(M(e)("Close", { ns: "client" })), 1)
                ])
              ])) : F("v-if", !0)
            ])
          ], 544)) : F("v-if", !0)
        ]),
        _: 3
      })
    ]));
  }
}), s_ = /* @__PURE__ */ pe(yA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/modal-dialog.vue"]]), Xh = ys(
  "metadata",
  () => {
    const t = we();
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
), vA = ["aria-expanded"], _A = { class: "leading-6" }, bA = /* @__PURE__ */ fe({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, n) => (A(), j(je, null, [
      L("button", {
        onClick: n[0] || (n[0] = (r) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": e.expanded
      }, [
        L("div", {
          class: Ae(["grow", e.expanded ? "text-white" : "text-secondary"])
        }, oe(e.title), 3),
        L("div", _A, [
          L("div", {
            class: Ae(["fa fa-sharp fa-solid group-hover:text-white text-primary", e.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, vA),
      L("div", {
        class: Ae(e.expanded ? "" : "hidden")
      }, [
        Ty(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), Vl = /* @__PURE__ */ pe(bA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/expandable-panel.vue"]]), EA = {
  class: "mb-px",
  key: "node.id"
}, SA = ["data-cy"], wA = ["aria-expanded", "data-cy"], xA = { class: "grow" }, OA = { class: "leading-6" }, MA = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, TA = ["data-cy"], NA = { class: "ml-1 hover:underline" }, CA = /* @__PURE__ */ fe({
  __name: "layer-tree-node",
  props: {
    node: { type: Object, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i } = Ze(), { setMetadataId: s } = Xh(), a = !!n.node.children, o = n.node.depth === 0, l = n.node.depth >= 10, u = de(() => i(n.node.name, { ns: "client" }));
    function f(h) {
      r("toggleLayer", h);
    }
    function c(h) {
      r("toggleParent", h);
    }
    return (h, d) => {
      const m = V1("layer-tree-node", !0);
      return a ? (A(), j("div", EA, [
        F("    First level parents"),
        h.node.depth === 1 ? (A(), j("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${h.node.id}`
        }, [
          ie(Vl, {
            title: u.value,
            expanded: h.node.expanded,
            onTogglePanel: d[0] || (d[0] = (p) => c(h.node))
          }, null, 8, ["title", "expanded"])
        ], 8, SA)) : h.node.depth > 1 && !l ? (A(), j(je, { key: 1 }, [
          F("    Other parents (with custom panel style)"),
          L("button", {
            class: Ae(["w-full text-left flex px-2 py-1.5 pl-2", h.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": h.node.expanded,
            onClick: d[1] || (d[1] = (p) => c(h.node)),
            "data-cy": `parentLayerLabel-${h.node.id}`
          }, [
            L("div", xA, oe(u.value), 1),
            L("div", OA, [
              L("div", {
                class: Ae(["fa-sharp fa-solid", h.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, wA)
        ], 2112)) : F("v-if", !0),
        F("    Children"),
        l ? F("v-if", !0) : (A(), j("div", {
          key: 2,
          class: Ae(["bg-secondary", [
            { "pl-2": h.node.depth > 1 },
            { "lux-collapse": !o },
            { expanded: !o && h.node.expanded }
          ]])
        }, [
          (A(!0), j(je, null, An(h.node.children, (p) => (A(), Ue(m, {
            key: p.id,
            node: p,
            onToggleParent: d[2] || (d[2] = (g) => c(g)),
            onToggleLayer: d[3] || (d[3] = (g) => f(g))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (A(), j("div", MA, [
        L("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: d[4] || (d[4] = (p) => M(s)(h.node.id))
        }),
        L("button", {
          class: Ae(["w-full text-left", { "font-bold": h.node.checked }]),
          onClick: d[5] || (d[5] = (p) => f(h.node)),
          "data-cy": `layerLabel-${h.node.id}`
        }, [
          L("i", {
            class: Ae(["fa-solid", h.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          L("span", NA, oe(u.value), 1)
        ], 10, TA)
      ]));
    };
  }
}), Jf = /* @__PURE__ */ pe(CA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-tree/layer-tree-node.vue"]]);
class LA {
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
const Js = new LA();
var Pn = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Pn || {});
function PA(t, e) {
  var n, r;
  return t.children && !e.children || ((n = e.children) == null ? void 0 : n.length) === 0 ? 1 : e.children && !t.children || ((r = t.children) == null ? void 0 : r.length) === 0 ? -1 : 0;
}
function a_(t, e, n = 0) {
  const { name: r = "", type: i = Pn.WMS, children: s } = t, a = `${i}||${e}||${r}`.split("-").join("%2D"), o = vt();
  return {
    id: a,
    name: r,
    depth: n,
    children: s == null ? void 0 : s.sort(PA).map((l) => a_(l, e, n + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function AA(t) {
  const e = decodeURIComponent(t), [n, r, i] = e.split("||");
  return o_({
    id: e,
    url: ia.getProxyfiedUrl(r),
    remoteLayer: { name: i, type: n }
  });
}
function o_({
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
    imageType: qv.PNG
  };
}
class Gc {
  constructor(e, n = 0, r = !1) {
    this.message = e, this.httpStatus = n, this.isCrossOriginRelated = r;
  }
}
let kA = 0;
function DA() {
  return kA++;
}
function IA(t, e, n) {
  return new Promise((r, i) => {
    const s = DA(), a = {
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
function Kh(t, e, n) {
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
let jc;
function RA() {
  return jc || (jc = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), jc;
}
function $A(t) {
  return IA("parseWmsCapabilities", RA(), {
    url: t
  });
}
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ni = "";
class FA {
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
      return ni;
    let r = n[0];
    return this.advance(this._charLength(r)), r;
  }
  consumeMatchFn(e) {
    let n = this.charIndex;
    for (; !this.isEnd && e(this.peek()); )
      this.advance();
    return this.charIndex > n ? this.string.slice(this.charsToBytes[n], this.charsToBytes[this.charIndex]) : ni;
  }
  consumeString(e) {
    if (this.consumeStringFast(e))
      return e;
    if (!this.multiByteMode)
      return ni;
    let { length: n } = e, r = this._charLength(e);
    return r !== n && e === this.peek(r) ? (this.advance(r), e) : ni;
  }
  consumeStringFast(e) {
    if (this.peek() === e[0]) {
      let { length: n } = e;
      if (n === 1)
        return this.advance(), e;
      if (this.peek(n) === e)
        return this.advance(n), e;
    }
    return ni;
  }
  consumeUntilMatch(e) {
    if (!e.global)
      throw new Error('`regex` must have a global flag ("g")');
    let n = this.charsToBytes[this.charIndex];
    e.lastIndex = n;
    let r = e.exec(this.string);
    if (r === null || r.index === n)
      return ni;
    let i = this.string.slice(n, r.index);
    return this.advance(this._charLength(i)), i;
  }
  consumeUntilString(e) {
    let { charIndex: n, charsToBytes: r, string: i } = this, s = r[n], a = i.indexOf(e, s);
    if (a <= 0)
      return ni;
    let o = i.slice(s, a);
    return this.advance(this._charLength(o)), o;
  }
  peek(e = 1) {
    if (this.charIndex >= this.charCount)
      return ni;
    if (e === 1)
      return this.chars[this.charIndex];
    let { charsToBytes: n, charIndex: r } = this;
    return this.string.slice(n[r], n[r + e]);
  }
  reset(e = 0) {
    this.charIndex = e >= 0 ? Math.min(this.charCount, e) : Math.max(0, this.charIndex + e);
  }
}
var VA = FA, ki = {};
const GA = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
ki.predefinedEntities = GA;
function l_(t) {
  if (u_(t))
    return !0;
  let e = ic(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
ki.isNameChar = l_;
function u_(t) {
  let e = ic(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
ki.isNameStartChar = u_;
function jA(t) {
  return !c_(t);
}
ki.isNotXmlChar = jA;
function UA(t) {
  return t === "#" || l_(t);
}
ki.isReferenceChar = UA;
function BA(t) {
  let e = ic(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
ki.isWhitespace = BA;
function c_(t) {
  let e = ic(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
ki.isXmlChar = c_;
function ic(t) {
  return t.codePointAt(0) || -1;
}
class _s {
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
_s.TYPE_CDATA = "cdata";
_s.TYPE_COMMENT = "comment";
_s.TYPE_DOCUMENT = "document";
_s.TYPE_ELEMENT = "element";
_s.TYPE_PROCESSING_INSTRUCTION = "pi";
_s.TYPE_TEXT = "text";
var bs = _s;
const Uc = bs;
class WA extends Uc {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return Uc.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(Uc.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var Zh = WA;
const qA = bs, HA = Zh;
class zA extends HA {
  get type() {
    return qA.TYPE_CDATA;
  }
}
var f_ = zA;
const Bc = bs;
class YA extends Bc {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return Bc.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(Bc.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var h_ = YA;
const Wc = bs;
class Jh extends Wc {
  constructor(e, n = /* @__PURE__ */ Object.create(null), r = []) {
    super(), this.name = e, this.attributes = n, this.children = r;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof Jh; ) {
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
    return Wc.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(Wc.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var Qh = Jh;
const XA = Qh, qc = bs;
class KA extends qc {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof XA) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return qc.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(qc.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var d_ = KA;
const Hc = bs;
class ZA extends Hc {
  constructor(e, n = "") {
    super(), this.name = e, this.content = n;
  }
  get type() {
    return Hc.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(Hc.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var m_ = ZA;
const JA = VA, Wi = ki, QA = f_, ek = h_, tk = d_, nk = Qh, eg = m_, tg = Zh, zc = "";
class rk {
  constructor(e, n = {}) {
    for (this.document = new tk(), this.currentNode = this.document, this.options = n, this.scanner = new JA(sk(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
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
      if (r instanceof tg) {
        r.text += e;
        return;
      }
    }
    this.addNode(new tg(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, n = e.peek();
    if (n !== '"' && n !== "'")
      return !1;
    e.advance();
    let r, i = !1, s = zc, a = n === '"' ? /[^"&<]+/y : /[^'&<]+/y;
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
          case zc:
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
    return this.validateChars(n), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new QA(n)) : this.addText(n), !0;
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
    return this.validateChars(n), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new ek(n.trim())), !0;
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
    let s = Boolean(e.consumeStringFast("/>")), a = new nk(r, i);
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
    return Wi.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(Wi.isNameChar) : zc;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, n = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let r = this.consumeName();
    if (r ? r.toLowerCase() === "xml" && (e.reset(n), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new eg(r)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new eg(r, i)), !0;
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
    let n = e.consumeMatchFn(Wi.isReferenceChar);
    e.consume() !== ";" && this.error("Unterminated reference (a reference must end with `;`)");
    let r;
    if (n[0] === "#") {
      let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
      isNaN(i) && this.error("Invalid character reference"), r = String.fromCodePoint(i), Wi.isXmlChar(r) || this.error("Character reference resolves to an invalid character");
    } else if (r = Wi.predefinedEntities[n], r === void 0) {
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
    return Boolean(this.scanner.consumeMatchFn(Wi.isWhitespace));
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
      Wi.isNotXmlChar(r) && (this.scanner.reset(-([...e].length - n)), this.error("Invalid character")), n += 1;
  }
}
var ik = rk;
function sk(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const ak = ik, ok = f_, lk = h_, uk = d_, ck = Qh, fk = bs, hk = m_, dk = Zh;
function Di(t, e) {
  return new ak(t, e).document;
}
Di.XmlCdata = ok;
Di.XmlComment = lk;
Di.XmlDocument = uk;
Di.XmlElement = ck;
Di.XmlNode = fk;
Di.XmlProcessingInstruction = hk;
Di.XmlText = dk;
var mk = Di;
class pk extends Error {
  constructor(e) {
    super(e);
  }
}
function gk(t) {
  let e = null;
  try {
    e = mk(t);
  } catch (n) {
    throw new pk(n.message);
  }
  return e;
}
function Br(t) {
  return t.children[0];
}
function xu(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function Ou(t) {
  return t.name || "";
}
function Ht(t, e, n) {
  const r = xu(e);
  function i(s, a) {
    return xu(Ou(a)) === r && s.push(a), n && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
  }
  return t && Array.isArray(t.children) ? t.children.reduce(i, []) : [];
}
function Me(t, e, n) {
  return Ht(t, e, n)[0] || null;
}
function La(t) {
  return t && Array.isArray(t.children) ? [...t.children.filter((e) => e.constructor.name === "XmlElement")] : [];
}
function ze(t) {
  const e = t && Array.isArray(t.children) ? t.children.find((n) => n.type === "text") : null;
  return e ? e.text : "";
}
function gr(t, e) {
  return t && t.attributes[e] || "";
}
const ng = ["utf-8", "utf-16", "iso-8859-1"], rg = "utf-8";
function yk(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function vk(t, e) {
  const n = e ? yk(e) : null, r = n ? [n, ...ng] : ng;
  for (const i of r)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${rg}.`
  ), new TextDecoder(rg).decode(t);
}
const hl = /* @__PURE__ */ new Map();
function _k(t) {
  if (hl.has(t))
    return hl.get(t);
  const e = fetch(t);
  return e.finally(() => hl.delete(t)), hl.set(t, e), e;
}
function ed(t) {
  return _k(t).catch(
    () => fetch(t, { method: "HEAD", mode: "no-cors" }).catch((e) => {
      throw new Gc(
        `Fetching the document failed either due to network errors or unreachable host, error is: ${e.message}`,
        0,
        !1
      );
    }).then(() => {
      throw new Gc(
        "The document could not be fetched due to CORS limitations",
        0,
        !0
      );
    })
  ).then(async (e) => {
    if (!e.ok) {
      const i = await e.text();
      throw new Gc(
        `Received an error with code ${e.status}: ${i}`,
        e.status,
        !1
      );
    }
    const n = await e.arrayBuffer(), r = e.headers.get("Content-Type");
    return vk(n, r);
  }).then((e) => gk(e));
}
function td(t, e) {
  const n = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (n) {
    const o = n[1], l = td(decodeURIComponent(o), e);
    return t.replace(o, encodeURIComponent(l));
  }
  const r = new URL(t), i = Object.keys(e), s = i.map((o) => o.toLowerCase()), a = [];
  for (const o of r.searchParams.keys())
    s.indexOf(o.toLowerCase()) > -1 && a.push(o);
  return a.map((o) => r.searchParams.delete(o)), i.forEach(
    (o) => r.searchParams.set(o, e[o] === !0 ? "" : e[o])
  ), r.toString();
}
let bk = 1e3 * 60 * 60;
function Ek() {
  return bk;
}
const Ni = "caches" in self ? caches.open("ogc-client") : null;
async function Sk(t, ...e) {
  if (!Ni)
    return;
  const n = "https://cache/" + e.join("/");
  await (await Ni).put(
    n,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + Ek()).toString(10)
      }
    })
  );
}
async function wk(...t) {
  if (!Ni)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await Ni).match(e).then((r) => !!r && parseInt(r.headers.get("x-expiry")) > Date.now());
}
async function xk(...t) {
  if (!Ni)
    return null;
  const e = "https://cache/" + t.join("/"), r = await (await Ni).match(e);
  return r ? r.clone().json() : null;
}
const dl = /* @__PURE__ */ new Map();
async function Ok(t, ...e) {
  if (await Mk(), await wk(...e))
    return xk(...e);
  const n = e.join("#");
  if (dl.has(n))
    return dl.get(n);
  const r = t();
  r instanceof Promise && (r.then(() => dl.delete(n)), dl.set(n, r));
  const i = await r;
  return await Sk(i, ...e), i;
}
async function Mk() {
  if (!Ni)
    return;
  const t = await Ni, e = await t.keys();
  for (let n of e) {
    const r = await t.match(n);
    parseInt(r.headers.get("x-expiry")) <= Date.now() && await t.delete(n);
  }
}
function Tk(t, e, n, r, i, s, a, o, l, u) {
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
  return td(t, h);
}
class Nk {
  constructor(e) {
    const n = td(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = Ok(
      () => $A(n),
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
const Ck = [
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
function Lk(t) {
  return Ck.indexOf(Qf(t)) > -1;
}
function Qf(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function p_(t) {
  return Br(t).attributes.version;
}
function Pk(t) {
  const e = p_(t), n = Me(
    Br(t),
    "Capability"
  );
  return Ht(n, "Layer").map(
    (r) => g_(r, e)
  );
}
function Ak(t) {
  const e = Me(Br(t), "Service"), n = Ht(
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
function g_(t, e, n = [], r = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = Ht(t, s).map(ze), o = a.length > 0 ? a : n, l = Ht(t, "Style").map(
    kk
  ), u = l.length > 0 ? l : r;
  function f(m) {
    const p = gr(m, s);
    return (Lk(p) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((y) => gr(m, y));
  }
  const c = Me(t, "Attribution"), h = c !== null ? Dk(c) : i, d = Ht(t, "Layer").map(
    (m) => g_(m, e, o, u, h)
  );
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    availableCrs: o,
    styles: u,
    attribution: h,
    boundingBoxes: Ht(t, "BoundingBox").reduce(
      (m, p) => ({
        ...m,
        [gr(p, s)]: f(p)
      }),
      {}
    ),
    ...d.length && { children: d }
  };
}
function kk(t) {
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
function Dk(t) {
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
function sc(t) {
  return Br(t).attributes.version;
}
function y_(t) {
  const e = sc(t);
  let n;
  if (e.startsWith("1.0")) {
    const r = Me(
      Me(
        Me(Br(t), "Capability"),
        "Request"
      ),
      "GetFeature"
    );
    n = La(
      Me(r, "ResultFormat")
    ).map(Ou);
  } else {
    const r = Me(
      Br(t),
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
function Ik(t) {
  const e = sc(t), n = e.startsWith("1.0") ? "Service" : "ServiceIdentification", r = e.startsWith("1.0") ? "Name" : "ServiceType", i = Me(Br(t), n);
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
    outputFormats: y_(t)
  };
}
function Rk(t) {
  const e = sc(t), n = y_(t), r = Me(
    Br(t),
    "FeatureTypeList"
  );
  return Ht(r, "FeatureType").map(
    (i) => $k(i, e, n)
  );
}
function $k(t, e, n) {
  const r = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${r}`;
  function s() {
    const u = Me(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => gr(u, f)).map(parseFloat);
  }
  function a() {
    const u = Me(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => Me(u, f)).map((f) => ze(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : Ht(t, `Other${r}`).map(ze).map(Qf), l = e.startsWith("1.0") ? [] : Ht(
    Me(t, "OutputFormats"),
    "Format"
  ).map(ze);
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    defaultCrs: Qf(
      ze(Me(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : n,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function Fk(t, e, n) {
  const r = Br(t);
  let i;
  if (n.startsWith("2.0"))
    i = Ht(r, "member").map(
      (u) => La(u)[0]
    );
  else {
    const u = Me(r, "featureMembers");
    i = u ? La(u) : Ht(r, "featureMember").map(
      (f) => La(f)[0]
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
    return La(u).filter((f) => a(xu(Ou(f)))).reduce((f, c) => {
      const h = xu(Ou(c));
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
function Vk(t) {
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
Kh(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => ed(t).then((e) => ({
    info: Ak(e),
    layers: Pk(e),
    version: p_(e)
  }))
);
Kh(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => ed(t).then((e) => ({
    info: Ik(e),
    featureTypes: Rk(e),
    version: sc(e)
  }))
);
Kh(
  "queryWfsFeatureTypeDetails",
  self,
  ({ url: t, serviceVersion: e, featureTypeFull: n }) => {
    const r = Tk(
      t,
      e,
      n.name,
      void 0,
      void 0,
      Object.keys(n.properties)
    );
    return ed(r).then((i) => ({
      props: Vk(
        Fk(i, n, e)
      )
    }));
  }
);
const Gk = () => [
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
class jk {
  constructor(e) {
    Qe(this, "capabilitiesPromise");
    Qe(this, "serviceInfo");
    Qe(this, "layers");
    const n = new mb();
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
class Uk {
  async getRemoteEndpoint(e) {
    let n;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      n = await this.getWmtsEndpoint(e).isReady();
    }) || n;
  }
  getWmsEndpoint(e) {
    return new Nk(ia.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new jk(ia.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(Gk()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Pn.WMS) === 0 || e.indexOf(Pn.WMTS) === 0);
  }
}
const fo = new Uk(), Bk = { class: "relative text-center" }, Wk = ["placeholder", "value"], qk = {
  key: 0,
  class: "text-center"
}, Hk = { class: "lux-label" }, zk = {
  key: 1,
  class: "text-center"
}, Yk = { class: "lux-label" }, Xk = {
  key: 2,
  class: "text-center"
}, Kk = /* @__PURE__ */ L("div", { class: "fa fa-refresh fa-spin" }, null, -1), Zk = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, Jk = /* @__PURE__ */ fe({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Ze(), n = vt(), r = Xn(), i = rt([]), s = rt(), { remoteLayersOpen: a } = He(wt()), { setRemoteLayersOpen: o } = wt();
    let l = !1, u, f, c;
    vn(h);
    function h() {
      s.value = s.value ? Js.updateLayers(
        s.value,
        n.layers
      ) : void 0;
    }
    fo.fetchRemoteWmsEndpoint().then((E) => {
      i.value = E.map(({ url: x, label: N }) => ({
        label: N,
        value: x
      }));
    });
    async function d(E) {
      l = !0, c = await fo.getRemoteEndpoint(E).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = E, l = !1;
    }
    async function m() {
      const E = c, x = E == null ? void 0 : E.getLayers();
      if (x && x[0]) {
        const N = a_(
          x[0],
          f
        );
        s.value = Js.updateLayers(N, n.layers);
      }
    }
    async function p(E) {
      f = u = E, await d(f), m();
    }
    function g(E) {
      u = E.target.value;
    }
    async function y() {
      await d(u), m();
    }
    function v(E) {
      s.value = Js.toggleNode(
        E.id,
        s.value,
        "expanded"
      );
    }
    function b(E) {
      const { id: x, name: N } = E, O = c;
      if (E.checked === !0)
        n.removeLayers(x);
      else {
        const P = O == null ? void 0 : O.getLayerByName(N);
        if (P) {
          const k = r.initLayer(
            o_({
              id: x,
              url: ia.getProxyfiedUrl(f),
              remoteLayer: P
            })
          );
          n.addLayers(k);
        }
      }
    }
    return (E, x) => M(a) ? (A(), Ue(s_, {
      key: 0,
      title: M(e)("Add external data", { ns: "client" }),
      onClose: x[0] || (x[0] = (N) => M(o)(!1))
    }, {
      content: _i(() => {
        var N, O;
        return [
          L("div", Bk, [
            ie(Gv, {
              class: "lux-remote-services-dropdown",
              options: i.value,
              placeholder: M(e)("Predefined wms", { ns: "client" }),
              onChange: p
            }, null, 8, ["options", "placeholder"]),
            L("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: M(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: M(f) || "",
              onChange: g
            }, null, 40, Wk),
            L("button", {
              type: "button",
              class: "lux-btn",
              onClick: y
            }, oe(M(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !M(l) && M(c) ? (A(), j("div", qk, [
            L("span", Hk, oe(M(e)("Description du service :", {
              ns: "client"
            })), 1),
            eu(" " + oe((N = M(c).getServiceInfo()) == null ? void 0 : N.abstract), 1)
          ])) : F("v-if", !0),
          !M(l) && M(c) ? (A(), j("div", zk, [
            L("span", Yk, oe(M(e)("Access constraints :", {
              ns: "client"
            })), 1),
            eu(" " + oe((O = M(c).getServiceInfo()) == null ? void 0 : O.constraints), 1)
          ])) : F("v-if", !0),
          M(l) ? (A(), j("div", Xk, [
            Kk,
            L("span", null, oe(M(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : F("v-if", !0),
          M(l) ? F("v-if", !0) : (A(), j("div", Zk, [
            s.value ? (A(), Ue(Jf, {
              key: 0,
              class: "block p-[10px] mb-[11px]",
              node: s.value,
              onToggleParent: v,
              onToggleLayer: b
            }, null, 8, ["node"])) : F("v-if", !0)
          ]))
        ];
      }),
      _: 1
    }, 8, ["title"])) : F("v-if", !0);
  }
}), Qk = /* @__PURE__ */ pe(Jk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/remote-layers/remote-layers.vue"]]);
function eD(t, e = "fr-FR") {
  const n = new Date(t);
  return new Intl.DateTimeFormat(e).format(n);
}
const tD = { class: "font-bold" }, nD = { class: "col-span-2" }, rD = /* @__PURE__ */ fe({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), j(je, null, [
      L("span", tD, oe(e.label), 1),
      L("span", nD, oe(e.value), 1)
    ], 64));
  }
}), Ea = /* @__PURE__ */ pe(rD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-metadata/layer-metadata-item.vue"]]);
function iD(t) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[t.toLowerCase()];
}
function sD(t) {
  return new DOMParser().parseFromString(t, "text/html").body;
}
function aD(t) {
  const e = [];
  function n(r) {
    const i = r.split("|");
    i[3] === "WWW:LINK-1.0-http--link" && e.indexOf(i[2]) === -1 && e.push(i[2]);
  }
  return Array.isArray(t) ? t.forEach(n, t) : n(t), e;
}
function oD(t) {
  const n = (Array.isArray(t) ? t : [t]).filter((r) => r.split("|")[1] === "metadata");
  return {
    organisaton: n[0].split("|")[2],
    name: n[0].split("|")[5],
    unknown: n[0].split("|")[6],
    address: n[0].split("|")[7],
    email: n[0].split("|")[4]
  };
}
class v_ {
}
class lD extends v_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMS);
    const i = fo.getWmsEndpoint(n);
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
const uD = new lD();
class cD extends v_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMTS);
    const i = fo.getWmtsEndpoint(n);
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
const fD = new cD();
class hD {
  async getMetadata(e, n, r) {
    if (e === Pn.WMS)
      return uD.getMetadata(e, n, r);
    if (e === Pn.WMTS)
      return fD.getMetadata(e, n, r);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const dD = new hD();
class mD {
  constructor() {
    Qe(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    Qe(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    Qe(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, n) {
    const r = os(), i = r.findBgLayerById(+e) || r.findById(+e) || r.find3dLayerById(+e);
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
      return dD.getMetadata(
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
        link: aD(s.link),
        revisionDate: s.revisionDate,
        keyword: s.keyword,
        responsibleParty: s.responsibleParty ? oD(s.responsibleParty) : void 0,
        metadataLink: `${this.geonetworkBaseUrl}/${iD(
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
        return l ? sD(l) : void 0;
      }).catch(() => {
      });
    }
  }
}
const ig = new mD(), pD = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, gD = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, yD = { class: "font-bold" }, vD = { class: "col-span-2" }, _D = ["title"], bD = ["title"], ED = {
  key: 4,
  class: "col-span-3"
}, SD = { class: "font-bold" }, wD = { class: "col-span-2" }, xD = ["href"], OD = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, MD = { class: "font-bold" }, TD = { class: "col-span-2" }, ND = { key: 0 }, CD = { key: 1 }, LD = { key: 2 }, PD = { key: 3 }, AD = { key: 4 }, kD = ["href"], DD = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, ID = { class: "font-bold" }, RD = { class: "col-span-2" }, $D = ["href"], FD = {
  key: 9,
  class: "col-span-3"
}, VD = { key: 10 }, GD = { class: "text-xl" }, jD = {
  key: 11,
  class: "col-span-3"
}, Yc = 220, UD = /* @__PURE__ */ fe({
  __name: "layer-metadata",
  setup(t) {
    const e = Xh(), { metadataId: n } = He(e), { t: r, i18next: i } = Ze(), s = we(), a = we(!0);
    tt(n, async (c) => {
      var h, d;
      s.value = c ? await ig.getLayerMetadata(c, i.language) : void 0, a.value = (((d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.length) || 0) < Yc;
    }), _n(() => {
      i.on("languageChanged", async () => {
        n.value && (s.value = await ig.getLayerMetadata(
          n.value,
          i.language
        ));
      });
    });
    const o = de(
      () => {
        var c, h, d;
        return a.value ? (c = s.value) == null ? void 0 : c.description : (d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.slice(0, Yc);
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
      const d = wh("dompurify-html");
      return s.value ? (A(), Ue(s_, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: M(r)(`${s.value.title}`, { ns: "client" }),
        onClose: f
      }, {
        content: _i(() => {
          var m, p, g, y, v, b, E, x, N, O, P, k, C, R, I;
          return [
            L("div", pD, [
              s.value.name ? (A(), Ue(Ea, {
                key: 0,
                label: M(r)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.serviceDescription ? (A(), Ue(Ea, {
                key: 1,
                label: M(r)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.description ? (A(), j("div", gD, [
                L("span", yD, oe(M(r)("Description")), 1),
                L("span", vD, [
                  Zl(L("span", null, null, 512), [
                    [d, o.value]
                  ]),
                  a.value ? F("v-if", !0) : (A(), j("button", {
                    key: 0,
                    title: M(r)("Display full description", {
                      ns: "client"
                    }),
                    onClick: l,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, _D)),
                  a.value && (((m = o.value) == null ? void 0 : m.length) || 0) > Yc ? (A(), j("button", {
                    key: 1,
                    title: M(r)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, bD)) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.legalConstraints ? (A(), Ue(Ea, {
                key: 3,
                label: M(r)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              ((p = s.value.link) == null ? void 0 : p.length) !== 0 ? (A(), j("div", ED, [
                (A(!0), j(je, null, An(s.value.link, (Q) => (A(), j("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: Q
                }, [
                  L("span", SD, oe(M(r)("Url vers la resource")), 1),
                  L("span", wD, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: Q
                    }, oe(Q), 9, xD)
                  ])
                ]))), 128))
              ])) : F("v-if", !0),
              s.value.revisionDate ? (A(), Ue(Ea, {
                key: 5,
                label: M(r)("Revision date"),
                value: M(eD)(s.value.revisionDate, M(i).language)
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.keyword ? (A(), Ue(Ea, {
                key: 6,
                label: M(r)("Keywords"),
                value: (g = s.value.keyword) == null ? void 0 : g.join(",")
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.responsibleParty ? (A(), j("div", OD, [
                L("div", MD, oe(M(r)("Contact")), 1),
                L("div", TD, [
                  (y = s.value.responsibleParty) != null && y.organisaton ? (A(), j("p", ND, oe((v = s.value.responsibleParty) == null ? void 0 : v.organisaton), 1)) : F("v-if", !0),
                  (b = s.value.responsibleParty) != null && b.name ? (A(), j("p", CD, oe((E = s.value.responsibleParty) == null ? void 0 : E.name), 1)) : F("v-if", !0),
                  (x = s.value.responsibleParty) != null && x.unknown ? (A(), j("p", LD, oe((N = s.value.responsibleParty) == null ? void 0 : N.unknown), 1)) : F("v-if", !0),
                  (O = s.value.responsibleParty) != null && O.address ? (A(), j("p", PD, oe((P = s.value.responsibleParty) == null ? void 0 : P.address), 1)) : F("v-if", !0),
                  (k = s.value.responsibleParty) != null && k.email ? (A(), j("p", AD, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((C = s.value.responsibleParty) == null ? void 0 : C.email)
                    }, oe((R = s.value.responsibleParty) == null ? void 0 : R.email), 9, kD)
                  ])) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.metadataLink ? (A(), j("div", DD, [
                L("span", ID, oe(M(r)("Link to the metadata")), 1),
                L("span", RD, [
                  L("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, oe(M(r)("link")), 9, $D)
                ])
              ])) : F("v-if", !0),
              s.value.isError ? (A(), j("div", FD, oe(M(r)("The metadata is right now not available")), 1)) : F("v-if", !0),
              s.value.legendHtml ? (A(), j("div", VD, [
                L("h4", GD, oe(M(r)("Legend")), 1),
                Zl(L("span", null, null, 512), [
                  [d, (I = s.value.legendHtml) == null ? void 0 : I.innerHTML]
                ])
              ])) : F("v-if", !0),
              s.value.hasLegend ? F("v-if", !0) : (A(), j("div", jD, oe(M(r)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : F("v-if", !0);
    };
  }
}), BD = /* @__PURE__ */ pe(UD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-metadata/layer-metadata.vue"]]), WD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class qD {
  bootstrap() {
    this.restore();
    let e;
    e = vn(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = wt(), { lang: n } = He(e);
    tt(
      n,
      (r, i) => {
        i !== r && (Ne.setValue(wi, r), document.documentElement.setAttribute("lang", r));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(wi);
    if (e) {
      const { setLang: n } = wt(), { i18next: r } = Ze();
      r.changeLanguage(e), n(e);
    }
  }
}
const HD = new qD(), zD = /* @__PURE__ */ fe({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: n } = Ze(), { setLang: r } = wt(), { lang: i } = He(wt()), s = de(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: n(l),
        value: l,
        ariaLabel: n("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = n("Changer de langue");
    HD.bootstrap();
    function o(l) {
      e.changeLanguage(l), r(l);
    }
    return (l, u) => (A(), j("div", null, [
      ie(Gv, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: s.value,
        placeholder: M(a),
        modelValue: M(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => Ye(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), YD = /* @__PURE__ */ pe(zD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/nav-bars/language-selector.vue"]]);
class XD {
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
const KD = new XD(), ZD = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, JD = /* @__PURE__ */ L("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ L("img", { src: WD })
], -1), QD = /* @__PURE__ */ L("div", { class: "grow text-center" }, "search", -1), eI = { class: "h-full flex" }, tI = { class: "hidden lg:inline-block" }, nI = { class: "border-l-[1px] border-stone-300 h-full" }, rI = /* @__PURE__ */ fe({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Ze(), n = wt(), { layersOpen: r, myLayersTabOpen: i, themeGridOpen: s } = He(n), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = n, u = Zt(), { theme: f } = He(u);
    tt(
      f,
      (h) => {
        h && KD.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      r.value ? r.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var m, p;
      return A(), j("header", ZD, [
        JD,
        QD,
        L("div", null, [
          L("ul", eI, [
            L("li", null, [
              L("button", {
                class: Ae(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(m = M(f)) == null ? void 0 : m.name}`]),
                onClick: c
              }, [
                L("span", tI, oe(M(e)(`${(p = M(f)) == null ? void 0 : p.name}`)), 1)
              ], 2)
            ]),
            L("li", nI, [
              ie(YD, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), iI = /* @__PURE__ */ pe(rI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/header/header-bar.vue"]]), sI = { class: "block text-[13px] sm:text-base uppercase" }, aI = /* @__PURE__ */ fe({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), j("button", {
      class: Ae(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      L("span", {
        class: Ae(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      L("span", sI, oe(e.label), 1)
    ], 2));
  }
}), Pr = /* @__PURE__ */ pe(aI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/button-icon.vue"]]), oI = ["href"], lI = /* @__PURE__ */ fe({
  __name: "button-link",
  props: {
    label: { type: String, required: !0 },
    link: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(), j("a", {
      class: "h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary",
      href: `${e.link}`,
      target: "_blank"
    }, oe(n.$props.label), 9, oI));
  }
}), ri = /* @__PURE__ */ pe(lI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/button-link.vue"]]), uI = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, cI = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, fI = { class: "flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, hI = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, dI = /* @__PURE__ */ fe({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: n } = Ze(), { setLayersOpen: r } = wt(), { layersOpen: i } = He(wt());
    return (s, a) => (A(), j("footer", uI, [
      F(" left buttons "),
      L("ul", cI, [
        L("li", null, [
          ie(Pr, {
            label: M(e)("Layers", { ns: "client" }),
            icon: "layers",
            active: M(i),
            onClick: a[0] || (a[0] = () => M(r)(!M(i)))
          }, null, 8, ["label", "active"])
        ]),
        F(`TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      `),
        L("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      F(" center buttons "),
      L("div", fI, [
        ie(Pr, {
          class: "text-gray-300",
          label: M(e)("Dessin", { ns: "client" }),
          icon: "draw"
        }, null, 8, ["label"]),
        ie(Pr, {
          class: "text-gray-300 hidden sm:block",
          label: M(e)("Mesurer", { ns: "client" }),
          icon: "measure"
        }, null, 8, ["label"]),
        ie(Pr, {
          class: "text-gray-300 hidden sm:block",
          label: M(e)("Imprimer", { ns: "client" }),
          icon: "print"
        }, null, 8, ["label"]),
        ie(Pr, {
          class: "text-gray-300",
          label: M(e)("Partager", { ns: "client" }),
          icon: "share"
        }, null, 8, ["label"])
      ]),
      F(" right buttons "),
      L("div", hI, [
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("What's new", { ns: "client" }),
          link: `https://geoportail.lu/${M(n).language}/questions/whats-new/`
        }, null, 8, ["label", "link"]),
        F("TODO get geonetworkBaseUrl from config"),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Geocatalogue", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        F("TODO handle feedback links (for different portals?)"),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Feedback", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("A Propos", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/propos/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Aide", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/documentation/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: M(e)("Contact", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/propos/contactez-nous/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "text-gray-500",
          label: M(e)("Legalites", { ns: "client" }),
          link: `https://www.geoportail.lu/${M(n).language}/propos/mentions-legales/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "text-gray-500",
          label: M(e)("ACT", { ns: "client" }),
          link: "http://www.act.public.lu/"
        }, null, 8, ["label", "link"])
      ])
    ]));
  }
}), mI = /* @__PURE__ */ pe(dI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/footer-bar.vue"]]), pI = { class: "flex flex-row flex-wrap pl-2.5" }, gI = ["onClick"], yI = { class: "text-2xl absolute top-5" }, vI = /* @__PURE__ */ fe({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const { t: e } = Ze(), n = t;
    return (r, i) => (A(), j("div", pI, [
      (A(!0), j(je, null, An(n.themes, (s) => (A(), j("button", {
        class: Ae(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => r.$emit("setTheme", s.name)
      }, [
        L("div", yI, oe(M(e)(`${s.name}`)), 1),
        L("div", {
          class: Ae(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, gI))), 128))
    ]));
  }
}), _I = /* @__PURE__ */ pe(vI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-grid.vue"]]), bI = ["aria-expanded"], EI = { class: "py-0.5" }, SI = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, wI = { class: "py-[3px]" }, xI = { class: "flex flex-row flex-wrap ml-1 w-12" }, OI = /* @__PURE__ */ fe({
  __name: "theme-selector-button",
  props: {
    themes: { type: Array, required: !0 },
    currentTheme: { type: Object, required: !1 },
    isOpen: { type: Boolean, required: !1 }
  },
  setup(t) {
    const { t: e } = Ze(), n = t, r = de(() => {
      var i;
      return ((i = n.themes) == null ? void 0 : i.slice(0, 8)) || [];
    });
    return (i, s) => {
      var a;
      return A(), j("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": n.isOpen
      }, [
        L("span", EI, oe(M(e)("Theme")) + ": " + oe(M(e)(`${(a = n.currentTheme) == null ? void 0 : a.name}`)), 1),
        L("span", SI, [
          L("span", wI, oe(M(e)("Changer")), 1),
          L("span", xI, [
            (A(!0), j(je, null, An(r.value, (o) => (A(), j("div", {
              class: Ae(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, bI);
    };
  }
}), MI = /* @__PURE__ */ pe(OI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-selector-button.vue"]]), TI = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, NI = /* @__PURE__ */ fe({
  __name: "theme-selector",
  setup(t) {
    const e = wt(), { setThemeGridOpen: n } = e, { themeGridOpen: r } = He(e), i = Zt(), s = os(), { theme: a, themes: o } = He(i), l = de(
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
    return (c, h) => (A(), j(je, null, [
      ie(MI, {
        onClick: u,
        themes: l.value,
        currentTheme: M(a),
        isOpen: M(r)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      M(r) ? (A(), j("div", TI, [
        ie(_I, {
          onSetTheme: f,
          themes: l.value
        }, null, 8, ["themes"])
      ])) : F("v-if", !0)
    ], 64));
  }
}), CI = /* @__PURE__ */ pe(NI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-selector.vue"]]);
function eh(t, e = 0) {
  const { name: n, id: r, children: i, metadata: s } = t;
  return {
    name: n,
    id: r,
    depth: e,
    children: i == null ? void 0 : i.map((a) => eh(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const LI = {
  key: 0,
  class: "mb-7"
}, PI = /* @__PURE__ */ fe({
  __name: "catalog-tree",
  setup(t) {
    const e = vt(), n = Zt(), r = Xn(), i = rt(), s = rt(), a = de(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = He(n);
    vn(l);
    function l() {
      var c;
      if (n.theme && e.layers) {
        const h = i.value && i.value.id === ((c = n.theme) == null ? void 0 : c.id) ? i.value : eh(n.theme);
        i.value = Js.updateLayers(
          h,
          e.layers
        );
      }
    }
    vn(() => {
      if (o.value) {
        const c = s.value ? s.value : eh(o.value);
        s.value = Js.updateLayers(
          c,
          e.layers3d
        );
      }
    });
    function u(c, h) {
      const d = h ? s : i;
      d.value = Js.toggleNode(
        c.id,
        d.value,
        "expanded"
      );
    }
    function f(c, h) {
      r.toggleLayer(+c.id, !c.checked, h);
    }
    return (c, h) => (A(), j("div", null, [
      F(" 3D layers catalog, only displayed when 3D is active "),
      s.value && M(e).is3dActive ? (A(), j("div", LI, [
        (A(), Ue(Jf, {
          node: s.value,
          key: s.value.id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : F("v-if", !0),
      F(" Main catalog, displays by default and 3D terrain active "),
      i.value && a.value ? (A(), Ue(Jf, {
        node: i.value,
        key: i.value.id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : F("v-if", !0)
    ]));
  }
}), AI = /* @__PURE__ */ pe(PI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/catalog/catalog-tree.vue"]]), kI = /* @__PURE__ */ fe({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = He(wt());
    return (n, r) => (A(), j(je, null, [
      ie(CI),
      M(e) === !1 ? (A(), Ue(AI, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : F("v-if", !0)
    ], 64));
  }
}), DI = /* @__PURE__ */ pe(kI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function sg(t, e) {
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
    e % 2 ? sg(Object(n), !0).forEach(function(r) {
      II(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Gl(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gl = function(e) {
    return typeof e;
  } : Gl = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gl(t);
}
function II(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Wr() {
  return Wr = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Wr.apply(this, arguments);
}
function RI(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function $I(t, e) {
  if (t == null)
    return {};
  var n = RI(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
var FI = "1.15.2";
function Gr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Kr = Gr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ro = Gr(/Edge/i), ag = Gr(/firefox/i), za = Gr(/safari/i) && !Gr(/chrome/i) && !Gr(/android/i), __ = Gr(/iP(ad|od|hone)/i), b_ = Gr(/chrome/i) && Gr(/android/i), E_ = {
  capture: !1,
  passive: !1
};
function Ge(t, e, n) {
  t.addEventListener(e, n, !Kr && E_);
}
function Ie(t, e, n) {
  t.removeEventListener(e, n, !Kr && E_);
}
function Mu(t, e) {
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
function VI(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Bn(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Mu(t, e) : Mu(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = VI(t));
  }
  return null;
}
var og = /\s+/g;
function fn(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(og, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(og, " ");
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
function Qs(t, e) {
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
function S_(t, e, n) {
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
function Et(t, e, n, r, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var s, a, o, l, u, f, c;
    if (t !== window && t.parentNode && t !== yr() ? (s = t.getBoundingClientRect(), a = s.top, o = s.left, l = s.bottom, u = s.right, f = s.height, c = s.width) : (a = 0, o = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, c = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !Kr))
      do
        if (i && i.getBoundingClientRect && (ye(i, "transform") !== "none" || n && ye(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          a -= h.top + parseInt(ye(i, "border-top-width")), o -= h.left + parseInt(ye(i, "border-left-width")), l = a + s.height, u = o + s.width;
          break;
        }
      while (i = i.parentNode);
    if (r && t !== window) {
      var d = Qs(i || t), m = d && d.a, p = d && d.d;
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
function lg(t, e, n) {
  for (var r = gi(t, !0), i = Et(t)[e]; r; ) {
    var s = Et(r)[n], a = void 0;
    if (n === "top" || n === "left" ? a = i >= s : a = i <= s, !a)
      return r;
    if (r === yr())
      break;
    r = gi(r, !1);
  }
  return !1;
}
function sa(t, e, n, r) {
  for (var i = 0, s = 0, a = t.children; s < a.length; ) {
    if (a[s].style.display !== "none" && a[s] !== ge.ghost && (r || a[s] !== ge.dragged) && Bn(a[s], n.draggable, t, !1)) {
      if (i === e)
        return a[s];
      i++;
    }
    s++;
  }
  return null;
}
function nd(t, e) {
  for (var n = t.lastElementChild; n && (n === ge.ghost || ye(n, "display") === "none" || e && !Mu(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function On(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ge.clone && (!e || Mu(t, e)) && n++;
  return n;
}
function ug(t) {
  var e = 0, n = 0, r = yr();
  if (t)
    do {
      var i = Qs(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, n += t.scrollTop * a;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function GI(t, e) {
  for (var n in t)
    if (!!t.hasOwnProperty(n)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === t[n][r])
          return Number(n);
    }
  return -1;
}
function gi(t, e) {
  if (!t || !t.getBoundingClientRect)
    return yr();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = ye(n);
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
function jI(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Xc(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Ya;
function w_(t, e) {
  return function() {
    if (!Ya) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), Ya = setTimeout(function() {
        Ya = void 0;
      }, e);
    }
  };
}
function UI() {
  clearTimeout(Ya), Ya = void 0;
}
function x_(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function O_(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function M_(t, e, n) {
  var r = {};
  return Array.from(t.children).forEach(function(i) {
    var s, a, o, l;
    if (!(!Bn(i, e.draggable, t, !1) || i.animated || i === n)) {
      var u = Et(i);
      r.left = Math.min((s = r.left) !== null && s !== void 0 ? s : 1 / 0, u.left), r.top = Math.min((a = r.top) !== null && a !== void 0 ? a : 1 / 0, u.top), r.right = Math.max((o = r.right) !== null && o !== void 0 ? o : -1 / 0, u.right), r.bottom = Math.max((l = r.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var pn = "Sortable" + new Date().getTime();
function BI() {
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
            var s = Sr({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = Qs(i, !0);
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
      t.splice(GI(t, {
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
        var l = 0, u = o.target, f = u.fromRect, c = Et(u), h = u.prevFromRect, d = u.prevToRect, m = o.rect, p = Qs(u, !0);
        p && (c.top -= p.f, c.left -= p.e), u.toRect = c, u.thisAnimationDuration && Xc(h, c) && !Xc(f, c) && (m.top - c.top) / (m.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = qI(m, h, d, i.options)), Xc(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, m, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(e), s ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, i, s, a) {
      if (a) {
        ye(r, "transition", ""), ye(r, "transform", "");
        var o = Qs(this.el), l = o && o.a, u = o && o.d, f = (i.left - s.left) / (l || 1), c = (i.top - s.top) / (u || 1);
        r.animatingX = !!f, r.animatingY = !!c, ye(r, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = WI(r), ye(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ye(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ye(r, "transition", ""), ye(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function WI(t) {
  return t.offsetWidth;
}
function qI(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var Cs = [], Kc = {
  initializeByDefault: !0
}, $o = {
  mount: function(e) {
    for (var n in Kc)
      Kc.hasOwnProperty(n) && !(n in e) && (e[n] = Kc[n]);
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
        u.sortable = e, u.options = e.options, e[l] = u, Wr(r, u.defaults);
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
      typeof i.eventProperties == "function" && Wr(r, i.eventProperties.call(n[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var i;
    return Cs.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[n] == "function" && (i = s.optionListeners[n].call(e[s.pluginName], r));
    }), i;
  }
};
function HI(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, m = t.extraEventProperties;
  if (e = e || n && n[pn], !!e) {
    var p, g = e.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Kr && !Ro ? p = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (p = document.createEvent("Event"), p.initEvent(r, !0, !0)), p.to = a || n, p.from = o || n, p.item = i || n, p.clone = s, p.oldIndex = l, p.newIndex = u, p.oldDraggableIndex = f, p.newDraggableIndex = c, p.originalEvent = h, p.pullMode = d ? d.lastPutMode : void 0;
    var v = Sr(Sr({}, m), $o.getEventProperties(r, e));
    for (var b in v)
      p[b] = v[b];
    n && n.dispatchEvent(p), g[y] && g[y].call(e, p);
  }
}
var zI = ["evt"], sn = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, s = $I(r, zI);
  $o.pluginEvent.bind(ge)(e, n, Sr({
    dragEl: J,
    parentEl: ct,
    ghostEl: Ee,
    rootEl: nt,
    nextEl: Xi,
    lastDownEl: jl,
    cloneEl: at,
    cloneHidden: di,
    dragStarted: Pa,
    putSortable: At,
    activeSortable: ge.active,
    originalEvent: i,
    oldIndex: Gs,
    oldDraggableIndex: Xa,
    newIndex: hn,
    newDraggableIndex: ui,
    hideGhostForTarget: L_,
    unhideGhostForTarget: P_,
    cloneNowHidden: function() {
      di = !0;
    },
    cloneNowShown: function() {
      di = !1;
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
  HI(Sr({
    putSortable: At,
    cloneEl: at,
    targetEl: J,
    rootEl: nt,
    oldIndex: Gs,
    oldDraggableIndex: Xa,
    newIndex: hn,
    newDraggableIndex: ui
  }, t));
}
var J, ct, Ee, nt, Xi, jl, at, di, Gs, hn, Xa, ui, ml, At, ks = !1, Tu = !1, Nu = [], qi, Gn, Zc, Jc, cg, fg, Pa, Ls, Ka, Za = !1, pl = !1, Ul, Gt, Qc = [], th = !1, Cu = [], ac = typeof document < "u", gl = __, hg = Ro || Kr ? "cssFloat" : "float", YI = ac && !b_ && !__ && "draggable" in document.createElement("div"), T_ = function() {
  if (!!ac) {
    if (Kr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), N_ = function(e, n) {
  var r = ye(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = sa(e, 0, n), a = sa(e, 1, n), o = s && ye(s), l = a && ye(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Et(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && r[hg] === "none" || a && r[hg] === "none" && u + f > i) ? "vertical" : "horizontal";
}, XI = function(e, n, r) {
  var i = r ? e.left : e.top, s = r ? e.right : e.bottom, a = r ? e.width : e.height, o = r ? n.left : n.top, l = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, KI = function(e, n) {
  var r;
  return Nu.some(function(i) {
    var s = i[pn].options.emptyInsertThreshold;
    if (!(!s || nd(i))) {
      var a = Et(i), o = e >= a.left - s && e <= a.right + s, l = n >= a.top - s && n <= a.bottom + s;
      if (o && l)
        return r = i;
    }
  }), r;
}, C_ = function(e) {
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
  (!i || Gl(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, e.group = r;
}, L_ = function() {
  !T_ && Ee && ye(Ee, "display", "none");
}, P_ = function() {
  !T_ && Ee && ye(Ee, "display", "");
};
ac && !b_ && document.addEventListener("click", function(t) {
  if (Tu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Tu = !1, !1;
}, !0);
var Hi = function(e) {
  if (J) {
    e = e.touches ? e.touches[0] : e;
    var n = KI(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[pn]._onDragOver(r);
    }
  }
}, ZI = function(e) {
  J && J.parentNode[pn]._isOutsideThisEl(e.target);
};
function ge(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Wr({}, e), t[pn] = this;
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
      return N_(t, this.options);
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
    supportPointer: ge.supportPointer !== !1 && "PointerEvent" in window && !za,
    emptyInsertThreshold: 5
  };
  $o.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  C_(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : YI, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Ge(t, "pointerdown", this._onTapStart) : (Ge(t, "mousedown", this._onTapStart), Ge(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ge(t, "dragover", this), Ge(t, "dragenter", this)), Nu.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Wr(this, BI());
}
ge.prototype = {
  constructor: ge,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Ls = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, J) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var n = this, r = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (s3(r), !J && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && za && l && l.tagName.toUpperCase() === "SELECT") && (l = Bn(l, i.draggable, r, !1), !(l && l.animated) && jl !== l)) {
        if (Gs = On(l), Xa = On(l, i.draggable), typeof f == "function") {
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
          if (c = Bn(u, c.trim(), r, !1), c)
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
        i.handle && !Bn(u, i.handle, r, !1) || this._prepareDragStart(e, o, l);
      }
    }
  },
  _prepareDragStart: function(e, n, r) {
    var i = this, s = i.el, a = i.options, o = s.ownerDocument, l;
    if (r && !J && r.parentNode === s) {
      var u = Et(r);
      if (nt = s, J = r, ct = J.parentNode, Xi = J.nextSibling, jl = r, ml = a.group, ge.dragged = J, qi = {
        target: J,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, cg = qi.clientX - u.left, fg = qi.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, J.style["will-change"] = "all", l = function() {
        if (sn("delayEnded", i, {
          evt: e
        }), ge.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !ag && i.nativeDraggable && (J.draggable = !0), i._triggerDragStart(e, n), Xt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), fn(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        S_(J, f.trim(), ef);
      }), Ge(o, "dragover", Hi), Ge(o, "mousemove", Hi), Ge(o, "touchmove", Hi), Ge(o, "mouseup", i._onDrop), Ge(o, "touchend", i._onDrop), Ge(o, "touchcancel", i._onDrop), ag && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), sn("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ro || Kr))) {
        if (ge.eventCanceled) {
          this._onDrop();
          return;
        }
        Ge(o, "mouseup", i._disableDelayedDrag), Ge(o, "touchend", i._disableDelayedDrag), Ge(o, "touchcancel", i._disableDelayedDrag), Ge(o, "mousemove", i._delayedDragTouchMoveHandler), Ge(o, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && Ge(o, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    J && ef(J), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._disableDelayedDrag), Ie(e, "touchend", this._disableDelayedDrag), Ie(e, "touchcancel", this._disableDelayedDrag), Ie(e, "mousemove", this._delayedDragTouchMoveHandler), Ie(e, "touchmove", this._delayedDragTouchMoveHandler), Ie(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Ge(document, "pointermove", this._onTouchMove) : n ? Ge(document, "touchmove", this._onTouchMove) : Ge(document, "mousemove", this._onTouchMove) : (Ge(J, "dragend", this), Ge(nt, "dragstart", this._onDragStart));
    try {
      document.selection ? Bl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (ks = !1, nt && J) {
      sn("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Ge(document, "dragover", ZI);
      var r = this.options;
      !e && fn(J, r.dragClass, !1), fn(J, r.ghostClass, !0), ge.active = this, e && this._appendGhost(), Xt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Gn) {
      this._lastX = Gn.clientX, this._lastY = Gn.clientY, L_();
      for (var e = document.elementFromPoint(Gn.clientX, Gn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Gn.clientX, Gn.clientY), e !== n); )
        n = e;
      if (J.parentNode[pn]._isOutsideThisEl(e), n)
        do {
          if (n[pn]) {
            var r = void 0;
            if (r = n[pn]._onDragOver({
              clientX: Gn.clientX,
              clientY: Gn.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      P_();
    }
  },
  _onTouchMove: function(e) {
    if (qi) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Ee && Qs(Ee, !0), o = Ee && a && a.a, l = Ee && a && a.d, u = gl && Gt && ug(Gt), f = (s.clientX - qi.clientX + i.x) / (o || 1) + (u ? u[0] - Qc[0] : 0) / (o || 1), c = (s.clientY - qi.clientY + i.y) / (l || 1) + (u ? u[1] - Qc[1] : 0) / (l || 1);
      if (!ge.active && !ks) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (Ee) {
        a ? (a.e += f - (Zc || 0), a.f += c - (Jc || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ye(Ee, "webkitTransform", h), ye(Ee, "mozTransform", h), ye(Ee, "msTransform", h), ye(Ee, "transform", h), Zc = f, Jc = c, Gn = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ee) {
      var e = this.options.fallbackOnBody ? document.body : nt, n = Et(J, !0, gl, !0, e), r = this.options;
      if (gl) {
        for (Gt = e; ye(Gt, "position") === "static" && ye(Gt, "transform") === "none" && Gt !== document; )
          Gt = Gt.parentNode;
        Gt !== document.body && Gt !== document.documentElement ? (Gt === document && (Gt = yr()), n.top += Gt.scrollTop, n.left += Gt.scrollLeft) : Gt = yr(), Qc = ug(Gt);
      }
      Ee = J.cloneNode(!0), fn(Ee, r.ghostClass, !1), fn(Ee, r.fallbackClass, !0), fn(Ee, r.dragClass, !0), ye(Ee, "transition", ""), ye(Ee, "transform", ""), ye(Ee, "box-sizing", "border-box"), ye(Ee, "margin", 0), ye(Ee, "top", n.top), ye(Ee, "left", n.left), ye(Ee, "width", n.width), ye(Ee, "height", n.height), ye(Ee, "opacity", "0.8"), ye(Ee, "position", gl ? "absolute" : "fixed"), ye(Ee, "zIndex", "100000"), ye(Ee, "pointerEvents", "none"), ge.ghost = Ee, e.appendChild(Ee), ye(Ee, "transform-origin", cg / parseInt(Ee.style.width) * 100 + "% " + fg / parseInt(Ee.style.height) * 100 + "%");
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
    sn("setupClone", this), ge.eventCanceled || (at = O_(J), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), fn(at, this.options.chosenClass, !1), ge.clone = at), r.cloneId = Bl(function() {
      sn("clone", r), !ge.eventCanceled && (r.options.removeCloneOnHide || nt.insertBefore(at, J), r._hideClone(), Xt({
        sortable: r,
        name: "clone"
      }));
    }), !n && fn(J, s.dragClass, !0), n ? (Tu = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Ie(document, "mouseup", r._onDrop), Ie(document, "touchend", r._onDrop), Ie(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(r, i, J)), Ge(document, "drop", r), ye(J, "transform", "translateZ(0)")), ks = !0, r._dragStartId = Bl(r._dragStarted.bind(r, n, e)), Ge(document, "selectstart", r), Pa = !0, za && ye(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var n = this.el, r = e.target, i, s, a, o = this.options, l = o.group, u = ge.active, f = ml === l, c = o.sort, h = At || u, d, m = this, p = !1;
    if (th)
      return;
    function g(K, Ce) {
      sn(K, m, Sr({
        evt: e,
        isOwner: f,
        axis: d ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: s,
        canSort: c,
        fromSortable: h,
        target: r,
        completed: v,
        onMove: function(dt, Rt) {
          return yl(nt, n, J, i, dt, Et(dt), e, Rt);
        },
        changed: b
      }, Ce));
    }
    function y() {
      g("dragOverAnimationCapture"), m.captureAnimationState(), m !== h && h.captureAnimationState();
    }
    function v(K) {
      return g("dragOverCompleted", {
        insertion: K
      }), K && (f ? u._hideClone() : u._showClone(m), m !== h && (fn(J, At ? At.options.ghostClass : u.options.ghostClass, !1), fn(J, o.ghostClass, !0)), At !== m && m !== ge.active ? At = m : m === ge.active && At && (At = null), h === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        g("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (r === J && !J.animated || r === n && !r.animated) && (Ls = null), !o.dragoverBubble && !e.rootEl && r !== document && (J.parentNode[pn]._isOutsideThisEl(e.target), !K && Hi(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), p = !0;
    }
    function b() {
      hn = On(J), ui = On(J, o.draggable), Xt({
        sortable: m,
        name: "change",
        toEl: n,
        newIndex: hn,
        newDraggableIndex: ui,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = Bn(r, o.draggable, n, !0), g("dragOver"), ge.eventCanceled)
      return p;
    if (J.contains(e.target) || r.animated && r.animatingX && r.animatingY || m._ignoreWhileAnimating === r)
      return v(!1);
    if (Tu = !1, u && !o.disabled && (f ? c || (a = ct !== nt) : At === this || (this.lastPutMode = ml.checkPull(this, u, J, e)) && l.checkPut(this, u, J, e))) {
      if (d = this._getDirection(e, r) === "vertical", i = Et(J), g("dragOverValid"), ge.eventCanceled)
        return p;
      if (a)
        return ct = nt, y(), this._hideClone(), g("revert"), ge.eventCanceled || (Xi ? nt.insertBefore(J, Xi) : nt.appendChild(J)), v(!0);
      var E = nd(n, o.draggable);
      if (!E || t3(e, d, this) && !E.animated) {
        if (E === J)
          return v(!1);
        if (E && n === e.target && (r = E), r && (s = Et(r)), yl(nt, n, J, i, r, s, e, !!r) !== !1)
          return y(), E && E.nextSibling ? n.insertBefore(J, E.nextSibling) : n.appendChild(J), ct = n, b(), v(!0);
      } else if (E && e3(e, d, this)) {
        var x = sa(n, 0, o, !0);
        if (x === J)
          return v(!1);
        if (r = x, s = Et(r), yl(nt, n, J, i, r, s, e, !1) !== !1)
          return y(), n.insertBefore(J, x), ct = n, b(), v(!0);
      } else if (r.parentNode === n) {
        s = Et(r);
        var N = 0, O, P = J.parentNode !== n, k = !XI(J.animated && J.toRect || i, r.animated && r.toRect || s, d), C = d ? "top" : "left", R = lg(r, "top", "top") || lg(J, "top", "top"), I = R ? R.scrollTop : void 0;
        Ls !== r && (O = s[C], Za = !1, pl = !k && o.invertSwap || P), N = n3(e, r, s, d, k ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, pl, Ls === r);
        var Q;
        if (N !== 0) {
          var ve = On(J);
          do
            ve -= N, Q = ct.children[ve];
          while (Q && (ye(Q, "display") === "none" || Q === Ee));
        }
        if (N === 0 || Q === r)
          return v(!1);
        Ls = r, Ka = N;
        var T = r.nextElementSibling, $ = !1;
        $ = N === 1;
        var z = yl(nt, n, J, i, r, s, e, $);
        if (z !== !1)
          return (z === 1 || z === -1) && ($ = z === 1), th = !0, setTimeout(QI, 30), y(), $ && !T ? n.appendChild(J) : r.parentNode.insertBefore(J, $ ? T : r), R && x_(R, 0, I - R.scrollTop), ct = J.parentNode, O !== void 0 && !pl && (Ul = Math.abs(O - Et(r)[C])), b(), v(!0);
      }
      if (n.contains(J))
        return v(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ie(document, "mousemove", this._onTouchMove), Ie(document, "touchmove", this._onTouchMove), Ie(document, "pointermove", this._onTouchMove), Ie(document, "dragover", Hi), Ie(document, "mousemove", Hi), Ie(document, "touchmove", Hi);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._onDrop), Ie(e, "touchend", this._onDrop), Ie(e, "pointerup", this._onDrop), Ie(e, "touchcancel", this._onDrop), Ie(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (hn = On(J), ui = On(J, r.draggable), sn("drop", this, {
      evt: e
    }), ct = J && J.parentNode, hn = On(J), ui = On(J, r.draggable), ge.eventCanceled) {
      this._nulling();
      return;
    }
    ks = !1, pl = !1, Za = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), nh(this.cloneId), nh(this._dragStartId), this.nativeDraggable && (Ie(document, "drop", this), Ie(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), za && ye(document.body, "user-select", ""), ye(J, "transform", ""), e && (Pa && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), (nt === ct || At && At.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), J && (this.nativeDraggable && Ie(J, "dragend", this), ef(J), J.style["will-change"] = "", Pa && !ks && fn(J, At ? At.options.ghostClass : this.options.ghostClass, !1), fn(J, this.options.chosenClass, !1), Xt({
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
    })), At && At.save()) : hn !== Gs && hn >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ge.active && ((hn == null || hn === -1) && (hn = Gs, ui = Xa), Xt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), nt = J = ct = Ee = Xi = at = jl = di = qi = Gn = Pa = hn = ui = Gs = Xa = Ls = Ka = At = ml = ge.dragged = ge.ghost = ge.clone = ge.active = null, Cu.forEach(function(e) {
      e.checked = !0;
    }), Cu.length = Zc = Jc = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        J && (this._onDragOver(e), JI(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], n, r = this.el.children, i = 0, s = r.length, a = this.options; i < s; i++)
      n = r[i], Bn(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || i3(n));
    return e;
  },
  sort: function(e, n) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(s, a) {
      var o = i.children[a];
      Bn(o, this.options.draggable, i, !1) && (r[s] = o);
    }, this), n && this.captureAnimationState(), e.forEach(function(s) {
      r[s] && (i.removeChild(r[s]), i.appendChild(r[s]));
    }), n && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, n) {
    return Bn(e, n || this.options.draggable, this.el, !1);
  },
  option: function(e, n) {
    var r = this.options;
    if (n === void 0)
      return r[e];
    var i = $o.modifyOption(this, e, n);
    typeof i < "u" ? r[e] = i : r[e] = n, e === "group" && C_(r);
  },
  destroy: function() {
    sn("destroy", this);
    var e = this.el;
    e[pn] = null, Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart), Ie(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Nu.splice(Nu.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!di) {
      if (sn("hideClone", this), ge.eventCanceled)
        return;
      ye(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), di = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (di) {
      if (sn("showClone", this), ge.eventCanceled)
        return;
      J.parentNode == nt && !this.options.group.revertClone ? nt.insertBefore(at, J) : Xi ? nt.insertBefore(at, Xi) : nt.appendChild(at), this.options.group.revertClone && this.animate(J, at), ye(at, "display", ""), di = !1;
    }
  }
};
function JI(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function yl(t, e, n, r, i, s, a, o) {
  var l, u = t[pn], f = u.options.onMove, c;
  return window.CustomEvent && !Kr && !Ro ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = i || e, l.relatedRect = s || Et(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function ef(t) {
  t.draggable = !1;
}
function QI() {
  th = !1;
}
function e3(t, e, n) {
  var r = Et(sa(n.el, 0, n.options, !0)), i = M_(n.el, n.options, Ee), s = 10;
  return e ? t.clientX < i.left - s || t.clientY < r.top && t.clientX < r.right : t.clientY < i.top - s || t.clientY < r.bottom && t.clientX < r.left;
}
function t3(t, e, n) {
  var r = Et(nd(n.el, n.options.draggable)), i = M_(n.el, n.options, Ee), s = 10;
  return e ? t.clientX > i.right + s || t.clientY > r.bottom && t.clientX > r.left : t.clientY > i.bottom + s || t.clientX > r.right && t.clientY > r.top;
}
function n3(t, e, n, r, i, s, a, o) {
  var l = r ? t.clientY : t.clientX, u = r ? n.height : n.width, f = r ? n.top : n.left, c = r ? n.bottom : n.right, h = !1;
  if (!a) {
    if (o && Ul < u * i) {
      if (!Za && (Ka === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (Za = !0), Za)
        h = !0;
      else if (Ka === 1 ? l < f + Ul : l > c - Ul)
        return -Ka;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return r3(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function r3(t) {
  return On(J) < On(t) ? 1 : -1;
}
function i3(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function s3(t) {
  Cu.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && Cu.push(r);
  }
}
function Bl(t) {
  return setTimeout(t, 0);
}
function nh(t) {
  return clearTimeout(t);
}
ac && Ge(document, "touchmove", function(t) {
  (ge.active || ks) && t.cancelable && t.preventDefault();
});
ge.utils = {
  on: Ge,
  off: Ie,
  css: ye,
  find: S_,
  is: function(e, n) {
    return !!Bn(e, n, e, !1);
  },
  extend: jI,
  throttle: w_,
  closest: Bn,
  toggleClass: fn,
  clone: O_,
  index: On,
  nextTick: Bl,
  cancelNextTick: nh,
  detectDirection: N_,
  getChild: sa
};
ge.get = function(t) {
  return t[pn];
};
ge.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ge.utils = Sr(Sr({}, ge.utils), r.utils)), $o.mount(r);
  });
};
ge.create = function(t, e) {
  return new ge(t, e);
};
ge.version = FI;
var _t = [], Aa, rh, ih = !1, tf, nf, Lu, ka;
function a3() {
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
      this.sortable.nativeDraggable ? Ge(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ge(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Ge(document, "touchmove", this._handleFallbackAutoScroll) : Ge(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : (Ie(document, "pointermove", this._handleFallbackAutoScroll), Ie(document, "touchmove", this._handleFallbackAutoScroll), Ie(document, "mousemove", this._handleFallbackAutoScroll)), dg(), Wl(), UI();
    },
    nulling: function() {
      Lu = rh = Aa = ih = ka = tf = nf = null, _t.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, s = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, o = document.elementFromPoint(s, a);
      if (Lu = n, r || this.options.forceAutoScrollFallback || Ro || Kr || za) {
        rf(n, this.options, o, r);
        var l = gi(o, !0);
        ih && (!ka || s !== tf || a !== nf) && (ka && dg(), ka = setInterval(function() {
          var u = gi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, Wl()), rf(n, i.options, u, r);
        }, 10), tf = s, nf = a);
      } else {
        if (!this.options.bubbleScroll || gi(o, !0) === yr()) {
          Wl();
          return;
        }
        rf(n, this.options, gi(o, !1), !1);
      }
    }
  }, Wr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Wl() {
  _t.forEach(function(t) {
    clearInterval(t.pid);
  }), _t = [];
}
function dg() {
  clearInterval(ka);
}
var rf = w_(function(t, e, n, r) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = yr(), u = !1, f;
    rh !== n && (rh = n, Wl(), Aa = e.scroll, f = e.scrollFn, Aa === !0 && (Aa = gi(n, !0)));
    var c = 0, h = Aa;
    do {
      var d = h, m = Et(d), p = m.top, g = m.bottom, y = m.left, v = m.right, b = m.width, E = m.height, x = void 0, N = void 0, O = d.scrollWidth, P = d.scrollHeight, k = ye(d), C = d.scrollLeft, R = d.scrollTop;
      d === l ? (x = b < O && (k.overflowX === "auto" || k.overflowX === "scroll" || k.overflowX === "visible"), N = E < P && (k.overflowY === "auto" || k.overflowY === "scroll" || k.overflowY === "visible")) : (x = b < O && (k.overflowX === "auto" || k.overflowX === "scroll"), N = E < P && (k.overflowY === "auto" || k.overflowY === "scroll"));
      var I = x && (Math.abs(v - i) <= a && C + b < O) - (Math.abs(y - i) <= a && !!C), Q = N && (Math.abs(g - s) <= a && R + E < P) - (Math.abs(p - s) <= a && !!R);
      if (!_t[c])
        for (var ve = 0; ve <= c; ve++)
          _t[ve] || (_t[ve] = {});
      (_t[c].vx != I || _t[c].vy != Q || _t[c].el !== d) && (_t[c].el = d, _t[c].vx = I, _t[c].vy = Q, clearInterval(_t[c].pid), (I != 0 || Q != 0) && (u = !0, _t[c].pid = setInterval(function() {
        r && this.layer === 0 && ge.active._onTouchMove(Lu);
        var T = _t[this.layer].vy ? _t[this.layer].vy * o : 0, $ = _t[this.layer].vx ? _t[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ge.dragged.parentNode[pn], $, T, t, Lu, _t[this.layer].el) !== "continue" || x_(_t[this.layer].el, $, T);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = gi(h, !1)));
    ih = u;
  }
}, 30), A_ = function(e) {
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
function rd() {
}
rd.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = sa(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: A_
};
Wr(rd, {
  pluginName: "revertOnSpill"
});
function id() {
}
id.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: A_
};
Wr(id, {
  pluginName: "removeOnSpill"
});
ge.mount(new a3());
ge.mount(id, rd);
const k_ = 0.5, o3 = !1, Pu = ys(
  "slider",
  () => {
    const t = vt(), e = we(k_), n = we(o3), r = de(
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
function D_(t, e) {
  const { t: n } = Ze();
  function r() {
    e == null || e.emit("clickInfo", t);
  }
  return {
    t: n,
    onClickInfo: r
  };
}
const l3 = { class: "lux-layer-manager-item mt-2.5" }, u3 = ["title"], c3 = { class: "flex-1 text-left cursor-default" }, f3 = ["aria-label", "title"], h3 = /* @__PURE__ */ fe({
  __name: "layer-item-background",
  props: {
    showEditButton: { type: Boolean, required: !0 },
    layer: { type: Object, required: !0 }
  },
  emits: ["clickEdit", "clickInfo"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i, onClickInfo: s } = D_(n.layer, { emit: r }), a = de(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o()
      })
    );
    function o() {
      return i(n.layer.name, { ns: "client" });
    }
    return (l, u) => (A(), j("div", l3, [
      L("button", {
        class: "fa fa-info w-3",
        title: a.value,
        onClick: u[0] || (u[0] = (...f) => M(s) && M(s)(...f))
      }, null, 8, u3),
      L("span", c3, oe(o()), 1),
      l.showEditButton ? (A(), j("button", {
        key: 0,
        class: "fa fa-pencil",
        "aria-label": M(i)("Open editor panel", { ns: "client" }),
        title: M(i)("Open editor panel", { ns: "client" }),
        onClick: u[1] || (u[1] = (f) => l.$emit("clickEdit"))
      }, null, 8, f3)) : F("v-if", !0)
    ]));
  }
}), d3 = /* @__PURE__ */ pe(h3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item-background.vue"]]), m3 = ["id"], p3 = ["aria-checked", "title"], g3 = ["id", "value", "aria-label"], y3 = ["aria-checked", "aria-label"], v3 = /* @__PURE__ */ fe({
  __name: "layer-item-sub",
  props: {
    layer: { type: Object, required: !0 },
    isOpen: { type: Boolean, required: !0 },
    isLayerComparatorOpen: { type: Boolean, required: !0 },
    displayLayerComparatorOpen: { type: Boolean, required: !0 }
  },
  emits: ["changeOpacity", "clickToggleLayerComparator"],
  setup(t, { emit: e }) {
    var d, m, p, g;
    const n = t, r = e, { t: i } = Ze(), s = Xn(), a = de(
      () => i(s.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), o = rt(
      ((m = (d = n.layer) == null ? void 0 : d.opacity) != null ? m : 1) * 100
    ), l = rt(
      ((g = (p = n.layer) == null ? void 0 : p.previousOpacity) != null ? g : o.value) * 100
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
    return (y, v) => (A(), j("div", {
      class: Ae(["lux-layer-manager-item-content", y.isOpen ? "h-6" : "h-0"]),
      id: `layer-manager-item-content-${y.layer.id}`
    }, [
      L("button", {
        class: Ae(["w-5 fa-solid", o.value === 0 ? "fa-eye-slash" : "fa-eye"]),
        role: "switch",
        "aria-checked": o.value === 0,
        title: M(i)("Toggle layer opacity for {{layerName}}", {
          layerName: a.value
        }),
        onClick: u
      }, null, 10, p3),
      L("input", {
        id: `${y.layer.id}-steps-range`,
        type: "range",
        min: "0",
        max: "100",
        value: o.value,
        step: "25",
        onChange: f,
        class: "m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer",
        "aria-label": M(i)("Change opacity for {{ layerName }}", { layerName: a.value })
      }, null, 40, g3),
      y.displayLayerComparatorOpen ? (A(), j("button", {
        key: 0,
        role: "switch",
        class: Ae(["fa ml-auto text-sm cursor-pointer", y.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": y.isLayerComparatorOpen,
        "aria-label": M(i)("Toggle layer comparator for {{ layerName }}", {
          layerName: a.value
        }),
        onClick: c
      }, null, 10, y3)) : F("v-if", !0)
    ], 10, m3));
  }
}), _3 = /* @__PURE__ */ pe(v3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), b3 = ["min", "max", "value"], E3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = de(() => Vc(n.minDateAllowed)), s = de(() => Vc(n.maxDateAllowed));
    function a(o) {
      r("change", o.target.value);
    }
    return (o, l) => (A(), j("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: i.value,
      max: s.value,
      value: o.dateValue ? M(Vc)(o.dateValue) : "",
      onChange: a
    }, null, 40, b3));
  }
}), sh = /* @__PURE__ */ pe(E3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), S3 = { class: "lux-time-slider w-full" }, w3 = ["for"], x3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const { t: e } = Ze(), n = t, r = rt(
      n.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return A(), j("div", S3, [
        L("div", null, [
          L("label", {
            for: `${i.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(M(e)("Date:")), 9, w3),
          ie(sh, {
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
}), O3 = /* @__PURE__ */ pe(x3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), M3 = { class: "lux-time-slider w-full" }, T3 = ["for"], N3 = ["for"], C3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e, s = rt(
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
      var c, h, d, m;
      return A(), j("div", M3, [
        F(" Date START datepicker input "),
        L("div", null, [
          L("label", {
            for: `${u.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(M(n)("From:")), 9, T3),
          ie(sh, {
            id: `${u.layer.id}-time-slider-start`,
            "date-value": s.value,
            "min-date-allowed": (c = r.layer.time) == null ? void 0 : c.minValue,
            "max-date-allowed": (h = r.layer.time) == null ? void 0 : h.maxValue,
            onChange: o
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ]),
        F(" Date END datepicker input "),
        L("div", null, [
          L("label", {
            for: `${u.layer.id}-time-slider-end`,
            class: "lux-time-slider-label"
          }, oe(M(n)("To:")), 9, N3),
          ie(sh, {
            id: `${u.layer.id}-time-slider-end`,
            "date-value": a.value,
            "min-date-allowed": (d = r.layer.time) == null ? void 0 : d.minValue,
            "max-date-allowed": (m = r.layer.time) == null ? void 0 : m.maxValue,
            onChange: l
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ])
      ]);
    };
  }
}), L3 = /* @__PURE__ */ pe(C3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), P3 = ["onKeydown", "aria-label", "title"], A3 = /* @__PURE__ */ fe({
  __name: "slider-range-thumb",
  props: {
    ariaLabel: { type: String, required: !1 },
    maxLimit: { type: Number, required: !1, default: 100 },
    minLimit: { type: Number, required: !1, default: 0 },
    selectedValue: { type: Number, required: !0 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = we(!1), s = we(), a = we(), o = de(() => {
      var b;
      return ((b = s.value) == null ? void 0 : b.offsetWidth) || 0;
    }), l = de(() => {
      var b;
      return ((b = a.value) == null ? void 0 : b.offsetWidth) || 40;
    }), u = we(n.selectedValue), f = de(() => o.value * u.value / 100 - l.value / 2), c = de(() => ({ left: `${f.value}px` }));
    Li(() => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y);
    }), tt(
      () => n.selectedValue,
      (b) => {
        u.value = b;
      }
    );
    function h(b) {
      u.value = Math.max(Math.min(b, 100), 0), r("change", u.value, i.value);
    }
    function d() {
      h(u.value - 1);
    }
    function m() {
      h(u.value + 1);
    }
    function p() {
      i.value = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", y);
    }
    function g(b) {
      !i.value || h(v(b));
    }
    function y(b) {
      i.value = !1, h(v(b)), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y);
    }
    function v(b) {
      var x, N;
      const E = (x = s.value) != null && x.offsetWidth ? (b.clientX - l.value * 2) * 100 / ((N = s.value) == null ? void 0 : N.offsetWidth) : 0;
      return Math.round(Math.max(Math.min(E, n.maxLimit), n.minLimit));
    }
    return (b, E) => (A(), j("div", {
      class: "w-full",
      role: "slider",
      ref_key: "elRefTrack",
      ref: s
    }, [
      L("button", {
        class: Ae(["lux-slidebar-thumb", i.value ? "dragging" : ""]),
        ref_key: "elRefThumb",
        ref: a,
        style: Ci(c.value),
        onKeydown: [
          or(ar(m, ["stop"]), ["space"]),
          or(ar(m, ["stop"]), ["right"]),
          or(ar(d, ["stop"]), ["left"]),
          or(ar(d, ["stop"]), ["delete"])
        ],
        onMousedown: p,
        onMousemove: g,
        onMouseup: y,
        "aria-label": b.ariaLabel,
        title: b.ariaLabel
      }, null, 46, P3)
    ], 512));
  }
}), mg = /* @__PURE__ */ pe(A3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range-thumb.vue"]]), k3 = /* @__PURE__ */ fe({
  __name: "slider-range-active-track",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = we(), s = we(), a = de(
      () => i.value ? Math.round(
        i.value.offsetWidth * n.selectedMinValue / 100
      ) : 0
    ), o = de(() => {
      var c, h;
      let f = 0;
      return n.selectedMaxValue !== void 0 && ((c = i.value) == null ? void 0 : c.offsetWidth) && (f = ((h = i.value) == null ? void 0 : h.offsetWidth) * n.selectedMaxValue / 100 - a.value), Math.round(f);
    }), l = de(() => ({
      left: `${a.value}px`,
      width: `${o.value}px`
    }));
    function u(f) {
      if (i.value) {
        const c = i.value.getBoundingClientRect().x, h = (f.clientX - c) * 100 / i.value.offsetWidth;
        r("change", h);
      }
    }
    return (f, c) => (A(), j("div", {
      ref_key: "elRefFullTrack",
      ref: i,
      class: "lux-slidebar-track"
    }, [
      f.selectedMaxValue !== void 0 ? (A(), j("div", {
        key: 0,
        ref_key: "elRefSelectionTrack",
        ref: s,
        class: "lux-slidebar-track-selection",
        style: Ci(l.value),
        onClick: u
      }, null, 4)) : F("v-if", !0),
      L("div", {
        class: "lux-slidebar-track-full",
        onClick: u
      })
    ], 512));
  }
}), D3 = /* @__PURE__ */ pe(k3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range-active-track.vue"]]), I3 = { class: "lux-slidebar-fake" }, R3 = /* @__PURE__ */ fe({
  __name: "slider-range",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 },
    ariaLabelMin: { type: String, required: !1 },
    ariaLabelMax: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = we(n.selectedMinValue), s = we(n.selectedMaxValue);
    function a(u, f) {
      r("change", u, n.selectedMaxValue, f);
    }
    function o(u, f) {
      r("change", n.selectedMinValue, u, f);
    }
    function l(u) {
      s.value === void 0 ? i.value = u : u >= s.value ? s.value = u : u <= n.selectedMinValue ? i.value = u : Math.abs(s.value - u) < Math.abs(i.value - u) ? s.value = u : i.value = u, r("change", i.value, s.value, !1);
    }
    return (u, f) => (A(), j("div", I3, [
      F(" Draggable Max thumb button "),
      s.value !== void 0 ? (A(), Ue(mg, {
        key: 0,
        ariaLabel: u.ariaLabelMax,
        minLimit: u.selectedMinValue,
        selectedValue: s.value,
        onChange: o
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : F("v-if", !0),
      F(" Draggable Min thumb button "),
      F(" put Min value after Max value, this is just for z-index grabbing "),
      ie(mg, {
        ariaLabel: u.ariaLabelMin,
        maxLimit: u.selectedMaxValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      F(" Selection highlight "),
      ie(D3, {
        selectedMinValue: u.selectedMinValue,
        selectedMaxValue: u.selectedMaxValue,
        onChange: l
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), pg = /* @__PURE__ */ pe(R3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range.vue"]]), $3 = { class: "lux-time-slider w-full" }, F3 = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, V3 = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, G3 = { class: "lux-time-displayed-dates" }, j3 = {
  key: 0,
  class: "lux-time-start-date grow"
}, U3 = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, B3 = /* @__PURE__ */ fe({
  __name: "layer-time-slider",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e, s = de(g), a = de(
      () => {
        var E, x;
        return (E = r.layer.time) != null && E.minValue ? new Date((x = r.layer.time) == null ? void 0 : x.minValue).getTime() : 0;
      }
    ), o = de(
      () => {
        var E, x;
        return (E = r.layer.time) != null && E.maxValue ? new Date((x = r.layer.time) == null ? void 0 : x.maxValue).getTime() : 0;
      }
    ), l = de(() => o.value - a.value), u = we(r.layer.currentTimeMaxValue), f = we(r.layer.currentTimeMinValue), c = de(
      () => f.value ? new Date(f.value).getTime() : void 0
    ), h = de(
      () => u.value ? new Date(u.value).getTime() : void 0
    ), d = de(
      () => p(c.value)
    ), m = de(
      () => p(h.value)
    );
    function p(E) {
      return E ? (E - a.value) / l.value * 100 : 0;
    }
    function g() {
      var R, I;
      const E = r.layer.time, x = [];
      if (!E)
        return;
      if (E.values)
        return E.values.map((Q) => new Date(Q).getTime());
      const N = new Date(E.minValue), O = new Date((R = E.maxValue) != null ? R : Date.now()), P = 1024, k = new Date(N.getTime()), C = (I = E.interval) != null ? I : q0;
      if (k.setFullYear(
        N.getFullYear() + P * C[0]
      ), k.setMonth(
        N.getMonth() + P * C[1],
        N.getDate() + P * C[2]
      ), k.setSeconds(N.getSeconds() + P * C[3]), k > O)
        for (let Q = 0; ; Q++) {
          const ve = new Date(N.getTime());
          if (ve.setFullYear(N.getFullYear() + Q * C[0]), ve.setMonth(
            N.getMonth() + Q * C[1],
            N.getDate() + Q * C[2]
          ), ve.setSeconds(N.getSeconds() + Q * C[3]), ve <= O)
            x.push(ve.getTime());
          else
            break;
        }
      return x;
    }
    function y(E) {
      var O;
      const x = E / 100 * (o.value - a.value) + a.value, N = NL(x, {
        minValue: a.value,
        maxValue: o.value,
        timeValueList: s.value,
        timeInterval: (O = r.layer.time) == null ? void 0 : O.interval
      });
      return Yf(N);
    }
    function v(E, x) {
      const N = y(E);
      if (f.value = N, x) {
        const O = y(x);
        u.value = O;
      }
    }
    function b(E, x, N) {
      v(E, x), N || i("changeTime", f.value, u.value);
    }
    return (E, x) => {
      var N, O, P, k, C, R, I;
      return A(), j("div", $3, [
        F(" Slider LayerTimeMode.VALUE "),
        ((N = E.layer.time) == null ? void 0 : N.mode) === M(Ir).VALUE ? (A(), j("div", F3, [
          ie(pg, {
            ariaLabelMin: `${M(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: d.value,
            onChange: b
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : F("v-if", !0),
        F(" Slider LayerTimeMode.RANGE "),
        ((O = E.layer.time) == null ? void 0 : O.mode) === M(Ir).RANGE ? (A(), j("div", V3, [
          ie(pg, {
            ariaLabelMin: `${M(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${M(n)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: d.value,
            selectedMaxValue: m.value,
            onChange: b
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : F("v-if", !0),
        F(" Display localized time values "),
        L("div", G3, [
          F(" Display localized time values Min value "),
          ((P = E.layer.time) == null ? void 0 : P.mode) === M(Ir).RANGE || ((k = E.layer.time) == null ? void 0 : k.mode) === M(Ir).VALUE ? (A(), j("div", j3, [
            L("span", null, oe(f.value ? M(Vp)(f.value, (C = E.layer.time) == null ? void 0 : C.resolution) : "-"), 1)
          ])) : F("v-if", !0),
          F(" Display localized time values Max value "),
          ((R = E.layer.time) == null ? void 0 : R.mode) === M(Ir).RANGE ? (A(), j("div", U3, [
            L("span", null, oe(u.value ? M(Vp)(u.value, (I = E.layer.time) == null ? void 0 : I.resolution) : "-"), 1)
          ])) : F("v-if", !0)
        ])
      ]);
    };
  }
}), W3 = /* @__PURE__ */ pe(B3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), q3 = /* @__PURE__ */ fe({
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
      return A(), j(je, null, [
        F(" Layer time: slider widget "),
        ((a = i.layer.time) == null ? void 0 : a.widget) === M(Rl).SLIDER ? (A(), Ue(W3, {
          key: 0,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(" Layer time: datepicker VALUE (one date) widget "),
        ((o = i.layer.time) == null ? void 0 : o.widget) === M(Rl).DATEPICKER && ((l = i.layer.time) == null ? void 0 : l.mode) === M(Ir).VALUE ? (A(), Ue(O3, {
          key: 1,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((u = i.layer.time) == null ? void 0 : u.widget) === M(Rl).DATEPICKER && ((f = i.layer.time) == null ? void 0 : f.mode) === M(Ir).RANGE ? (A(), Ue(L3, {
          key: 2,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0)
      ], 64);
    };
  }
}), H3 = /* @__PURE__ */ pe(q3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time.vue"]]), z3 = { class: "lux-layer-manager-item relative" }, Y3 = { class: "w-full flex flex-nowrap items-start gap-x-2" }, X3 = ["title"], K3 = ["aria-label", "title"], Z3 = ["aria-expanded", "aria-controls", "data-cy"], J3 = { class: "grow" }, Q3 = ["title", "aria-label"], eR = /* @__PURE__ */ fe({
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
    const n = t, r = e, { t: i, onClickInfo: s } = D_(n.layer, { emit: r }), a = Xn(), o = de(
      () => i(a.getLayerCurrentLabel(n.layer), { ns: "client" })
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
      r("changeTime", h, d);
    }
    return (h, d) => (A(), j("div", z3, [
      L("div", Y3, [
        L("button", {
          class: Ae(["fa-solid fa-bars cursor-move mt-1", h.dragHandleClassName]),
          title: l.value
        }, null, 10, X3),
        L("button", {
          class: "fa-solid fa-info mt-1",
          "aria-label": u.value,
          title: u.value,
          onClick: d[0] || (d[0] = (...m) => M(s) && M(s)(...m))
        }, null, 8, K3),
        L("button", {
          "aria-expanded": h.isOpen,
          "aria-controls": `layer-manager-item-content-${h.layer.id}`,
          "data-cy": `myLayerItemLabel-${h.layer.id}`,
          class: Ae([h.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: d[1] || (d[1] = (m) => h.$emit("clickToggle", h.layer))
        }, [
          L("span", J3, oe(o.value), 1),
          h.is3d ? F("v-if", !0) : (A(), j("span", {
            key: 0,
            class: Ae(["w-3.5 fa-solid", h.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, Z3),
        L("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: f.value,
          "aria-label": f.value,
          onClick: d[2] || (d[2] = (m) => h.$emit("clickRemove", h.layer))
        }, null, 8, Q3)
      ]),
      F(" Layer item sub content (opacity and toggle comparator) "),
      h.is3d ? F("v-if", !0) : (A(), Ue(_3, {
        key: 0,
        layer: h.layer,
        isOpen: h.isOpen,
        isLayerComparatorOpen: h.isLayerComparatorOpen,
        displayLayerComparatorOpen: h.displayLayerComparatorOpen,
        onClickToggleLayerComparator: d[3] || (d[3] = (m) => h.$emit("clickToggleLayerComparator", m)),
        onChangeOpacity: d[4] || (d[4] = (m, p) => h.$emit("changeOpacity", m, p))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      F(" Layer time: slider OR datepicker widgets "),
      h.layer.time ? (A(), Ue(H3, {
        key: 1,
        layer: h.layer,
        onChangeTime: c
      }, null, 8, ["layer"])) : F("v-if", !0)
    ]));
  }
}), gg = /* @__PURE__ */ pe(eR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item.vue"]]), tR = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, nR = ["id"], rR = { class: "sortable-layers" }, iR = ["id"], sR = { class: "flex flex-row justify-center space-x-1 my-2" }, sf = "drag-handle", aR = /* @__PURE__ */ fe({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), { setMetadataId: r } = Xh(), i = vt(), s = wt(), a = Ai(), o = Pu(), { bgLayer: l } = He(i), { sliderActive: u } = He(o), f = de(() => [...i.layers].reverse()), c = de(() => [...i.layers3d].reverse()), h = rt(), d = de(
      () => a.isLayerStyleEditable(l.value)
    ), m = e, { setRemoteLayersOpen: p } = wt();
    _n(() => {
      const P = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${sf}`,
        forceFallback: RL
      }, k = document.querySelector(".sortable-layers"), C = document.querySelector(".sortable-layers-3d");
      k && ge.create(k, {
        ...P,
        onSort: g
      }), C && ge.create(C, {
        ...P,
        onSort: y
      });
    });
    function g(P, k) {
      const C = [...P.to.children].map((R) => Number(R.id)).reverse();
      i.reorderLayers(C, k);
    }
    function y(P) {
      g(P, !0);
    }
    function v(P, k) {
      i.setLayerOpacity(P.id, k / 100);
    }
    function b(P, k, C) {
      i.setLayerTime(P.id, k, C);
    }
    function E(P) {
      i.removeLayers(P.id);
    }
    function x(P) {
      h.value = h.value !== P.id ? P.id : void 0;
    }
    function N() {
      s.openStyleEditorPanel();
    }
    function O() {
      o.toggleSlider();
    }
    return (P, k) => (A(), j("div", null, [
      c.value.length > 0 ? (A(), j("ul", tR, [
        (A(!0), j(je, null, An(c.value, (C, R) => (A(), j("li", {
          key: C.id,
          id: C.id
        }, [
          ie(gg, {
            is3d: !0,
            dragHandleClassName: sf,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: M(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: x,
            onClickToggleLayerComparator: O,
            onClickInfo: (I) => M(r)(C.id),
            onChangeOpacity: v,
            onChangeTime: (I, Q) => b(C, I, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, nR))), 128))
      ])) : F("v-if", !0),
      L("ul", rR, [
        (A(!0), j(je, null, An(f.value, (C, R) => (A(), j("li", {
          key: C.id,
          id: C.id
        }, [
          ie(gg, {
            is3d: !1,
            dragHandleClassName: sf,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: M(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: x,
            onClickToggleLayerComparator: O,
            onClickInfo: (I) => M(r)(C.id),
            onChangeOpacity: v,
            onChangeTime: (I, Q) => b(C, I, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, iR))), 128))
      ]),
      ie(d3, {
        layer: M(l) || M(wu),
        showEditButton: d.value,
        onClickInfo: k[0] || (k[0] = () => M(l) && M(r)(M(l).id)),
        onClickEdit: N
      }, null, 8, ["layer", "showEditButton"]),
      L("div", sR, [
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: k[1] || (k[1] = (C) => m("displayCatalog"))
        }, oe(M(n)("+ Add layers", { ns: "client" })), 1),
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: k[2] || (k[2] = (C) => M(p)(!0))
        }, oe(M(n)("+ Add external Wms", { ns: "client" })), 1)
      ])
    ]));
  }
}), oR = /* @__PURE__ */ pe(aR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-manager.vue"]]), lR = { class: "flex flex-col h-full pt-1.5" }, uR = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, cR = ["aria-label"], fR = { class: "flex flex-row gap-2 h-10 text-2xl" }, hR = ["aria-expanded"], dR = { key: 0 }, mR = ["aria-expanded"], pR = { class: "relative grow p-2.5 bg-primary overflow-auto" }, gR = /* @__PURE__ */ fe({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Ze(), n = wt(), { setLayersOpen: r } = n, { myLayersTabOpen: i } = He(n), { layers: s } = He(vt());
    function a() {
      n.setMyLayersTabOpen(!0);
    }
    function o() {
      n.setMyLayersTabOpen(!1);
    }
    return (l, u) => (A(), j("div", lR, [
      F(" Panel title and close button "),
      L("div", uR, [
        L("h1", null, oe(M(e)("layers", { ns: "client" })), 1),
        L("span", null, [
          L("button", {
            onClick: u[0] || (u[0] = () => M(r)(!1)),
            "aria-label": M(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, cR)
        ])
      ]),
      F(" My Layers and Catalog tab labels "),
      L("div", fR, [
        L("button", {
          onClick: a,
          class: Ae(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", M(i) ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": M(i)
        }, [
          eu(oe(M(e)("my_layers", { ns: "client" })) + " ", 1),
          M(s).length ? (A(), j("span", dR, "(" + oe(M(s).length) + ")", 1)) : F("v-if", !0)
        ], 10, hR),
        L("button", {
          onClick: o,
          class: Ae(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", M(i) ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !M(i)
        }, oe(M(e)("Catalog", { ns: "client" })), 11, mR)
      ]),
      F(" Panel content (MyLayers and Catalog) "),
      L("div", pR, [
        M(i) ? (A(), Ue(oR, {
          key: 0,
          onDisplayCatalog: o
        })) : F("v-if", !0),
        M(i) ? F("v-if", !0) : (A(), Ue(DI, { key: 1 }))
      ])
    ]));
  }
}), yR = /* @__PURE__ */ pe(gR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-panel/layer-panel.vue"]]);
class vR {
  bootstrap() {
    let e;
    e = vn(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = Pu();
    tt(
      [() => e.sliderActive, () => e.sliderRatio],
      ([n, r], [i]) => {
        n !== i && Ne.setValue(Kf, n), Ne.setValue(
          Zf,
          r
        );
      }
    );
  }
  restore() {
    const e = Ne.getValue(Kf, Yh), n = Ne.getValue(Zf, Ks), { toggleSlider: r, setRatio: i } = Pu();
    typeof e < "u" && e !== null && (r(e), typeof n !== void 0 && n !== null && i(n != null ? n : k_));
  }
}
const _R = new vR(), bR = ["onKeydown"], ER = /* @__PURE__ */ L("span", { class: "lux-slider-line" }, null, -1), SR = /* @__PURE__ */ L("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ L("span"),
  /* @__PURE__ */ L("span")
], -1), wR = {
  key: 0,
  class: "lux-slider-layer-label"
}, xR = /* @__PURE__ */ L("i", { class: "fa fa-arrow-left mr-2" }, null, -1), yg = 30, OR = /* @__PURE__ */ fe({
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
    const r = t, i = n, { t: s } = Ze(), a = we(null), o = de(() => ({ left: `${r.sliderOffset}px` }));
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
      const g = r.containerOffset + a.value.offsetLeft;
      u(g + yg);
    }
    function m() {
      const g = r.containerOffset + a.value.offsetLeft;
      u(g - yg);
    }
    function p() {
      i("escSplitBar");
    }
    return _n(() => {
      var g;
      (g = a.value) == null || g.focus({ focusVisible: !0 });
    }), Li(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (g, y) => (A(), j("button", {
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
      style: Ci(o.value),
      role: "seperator",
      "aria-controls": "map-container"
    }, [
      ER,
      SR,
      g.sliderTopLayer ? (A(), j("span", wR, [
        xR,
        L("span", null, oe(M(s)(g.sliderTopLayer.name)), 1)
      ])) : F("v-if", !0)
    ], 44, bR));
  }
}), MR = /* @__PURE__ */ pe(OR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/slider/splitter-element.vue"]]), TR = /* @__PURE__ */ fe({
  __name: "slider-comparator",
  setup(t) {
    const e = Pu(), n = r_(), r = Fr().olMap, i = we(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = He(e), l = de(
      () => {
        var v, b;
        return ((b = (v = i.value) == null ? void 0 : v.sliderElement) == null ? void 0 : b.offsetWidth) || 0;
      }
    ), u = function() {
      var b, E, x;
      let v = (x = (E = (b = r.value) == null ? void 0 : b.getViewport()) == null ? void 0 : E.parentElement) == null ? void 0 : x.offsetLeft;
      return (v === void 0 || v === 0) && (v = d == null ? void 0 : d.offsetLeft), v !== void 0 ? v : 0;
    }, f = de(() => {
      var v, b;
      return r.value && i.value ? a.value * r.value.getSize()[0] - ((b = (v = i.value) == null ? void 0 : v.sliderElement) == null ? void 0 : b.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    _R.bootstrap(), tt([o, s], ([v, b], [E]) => {
      var x;
      v && b ? (v !== E && p(), m()) : p(), (x = r.value) == null || x.render();
    }), tt(f, () => {
      var v;
      (v = r.value) == null || v.render();
    });
    function m() {
      const v = n.getLayerFromCache(o.value);
      !v || (c = v.on(
        _d.PRERENDER,
        function(b) {
          var R;
          const E = b.context, x = (R = r.value) == null ? void 0 : R.getSize(), N = f.value + l.value / 2, O = Go(b, [0, 0]), P = Go(b, [N, 0]), k = Go(b, [0, x[1]]), C = Go(b, [N, x[1]]);
          E.save(), E.beginPath(), E.moveTo(O[0], O[1]), E.lineTo(k[0], k[1]), E.lineTo(C[0], C[1]), E.lineTo(P[0], P[1]), E.closePath(), E.clip();
        }
      ), h = v.on(
        _d.POSTRENDER,
        function(b) {
          b.context.restore();
        }
      ));
    }
    function p() {
      pb([c, h]);
    }
    function g(v) {
      var x;
      const b = (x = r.value) == null ? void 0 : x.getSize(), E = (v - u()) / b[0];
      e.setRatio(E);
    }
    function y() {
      e.toggleSlider();
    }
    return _n(() => {
      var v, b;
      d = (b = (v = r.value) == null ? void 0 : v.getTargetElement()) == null ? void 0 : b.closest(".map-wrapper");
    }), Li(() => {
      p();
    }), (v, b) => M(o) && M(s) ? (A(), Ue(MR, {
      key: 0,
      ref_key: "splitterElement",
      ref: i,
      sliderActive: M(s),
      sliderRatio: M(a),
      sliderTopLayer: M(o),
      sliderOffset: f.value,
      containerOffset: u(),
      onMoveSplitBar: g,
      onEscSplitBar: y
    }, null, 8, ["sliderActive", "sliderRatio", "sliderTopLayer", "sliderOffset", "containerOffset"])) : F("v-if", !0);
  }
}), NR = /* @__PURE__ */ pe(TR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/slider/slider-comparator.vue"]]), vl = "-", af = ",", vg = "--";
class CR {
  constructor() {
    Qe(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, af));
  }
  layerTimesToStrings(e) {
    return e ? e.split(vg) : [];
  }
  layerIdsToLayers(e) {
    const n = os(), r = Xn();
    return (e ? e.split(vl) : []).map((s) => {
      const a = fo.isRemoteLayer(s) ? AA(s) : n.findById(parseInt(s, 10));
      return a ? r.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const n = os(), r = Xn();
    return (e ? e.split(af) : []).map((s) => {
      const a = n.findByName(s);
      return a ? r.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, n = vl) {
    return DL(e, n);
  }
  layersVisibilitiesToBooleansV2(e) {
    return IL(e, af);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((n) => n.id).join(vl)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = n.opacity) != null ? r : 1;
    }).join(vl)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = Xn().getLayerCurrentTime(n)) != null ? r : "";
    }).join(vg)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const n = os();
    return e ? n.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || wu.name;
  }
}
const mn = new CR(), LR = "basemap_2015_global", PR = "orthogr_2013_global", AR = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class kR {
  bootstrap() {
    const e = Zt();
    let n;
    n = vn(() => {
      e.bgLayers.length > 0 && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = vt(), { bgLayer: n } = He(e);
    tt(
      n,
      (r, i) => {
        i !== r && Ne.setValue(
          Wp,
          r,
          mn.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = i_(), n = this.getBgLayerFromStorage();
    e(n);
  }
  getBgLayerFromStorage() {
    const e = Ne.getInitialVersion(), n = Ne.getValue(Wp);
    return n ? e === 2 ? this.getBgLayerFromStorageV2(n) : mn.bgLayerNameToBgLayer(n) : mn.bgLayerNameToBgLayer(LR);
  }
  getBgLayerFromStorageV2(e) {
    const n = Ne.getValue(
      Y0,
      Ks
    );
    let r = "";
    return e ? r = AR[e] : n === 0 && (r = PR), mn.bgLayerNameToBgLayer(r);
  }
}
const DR = new kR();
class IR {
  bootstrap() {
    const e = Zt();
    let n;
    n = vn(() => {
      e.themes && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = vt(), { layers: n } = He(e);
    tt(
      n,
      (r, i) => {
        i !== r && (Ne.setValue(
          Bp,
          r,
          mn.layersToLayerIds
        ), Ne.setValue(
          qp,
          r,
          mn.layersToLayerOpacities
        ), Ne.setValue(
          Hp,
          r,
          mn.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getInitialVersion(), n = vt(), r = Ne.getValue(
      Bp,
      e === 2 ? mn.layerNamesToLayersV2 : mn.layerIdsToLayers
    );
    this.restoreLayersOpacities(r, e), this.restoreLayersTimes(r), e === 2 && (Ne.removeItem(Y0), Ne.removeItem(UL), Ne.removeItem(Kp), Ne.removeItem(Zp)), n.addLayers(...(r == null ? void 0 : r.filter((i) => i)) || []);
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
      Hp,
      mn.layerTimesToStrings
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
      qp,
      mn.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Ne.getValue(
      Kp,
      mn.layersOpacitiesToNumbersV2
    ), n = Ne.getValue(
      Zp,
      mn.layersVisibilitiesToBooleansV2
    );
    return e.map((r, i) => n[i] ? r : 0);
  }
}
const RR = new IR();
class $R {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const FR = new $R();
class VR {
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
          uo,
          n,
          FR.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(uo);
    if (e) {
      const { setTheme: n } = Zt();
      n(e);
    }
  }
}
const GR = new VR();
class jR {
  bootstrapLayersOpen() {
    this.restoreLayersOpen();
    let e;
    e = vn(() => {
      this.persistLayersOpen(), e && e();
    });
  }
  persistLayersOpen() {
    const e = wt(), { layersOpen: n } = He(e);
    tt(
      n,
      (r, i) => {
        i !== r && Ne.setValue(bu, r);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Ne.getValue(bu) !== "false", { setLayersOpen: n } = wt();
    n(e);
  }
}
const UR = new jR();
class BR {
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
    const e = Ne.getValue(VL);
    wt().setMapId(e);
  }
}
const WR = new BR(), qR = /* @__PURE__ */ fe({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (A(!0), j(je, null, An(e.colors, (i, s) => (A(), j("span", {
      key: `${n.styleName}-${s}`,
      class: "grow m-px",
      style: Ci(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), HR = /* @__PURE__ */ pe(qR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/simple-style-item.vue"]]), zR = { class: "text-white border-2 p-[10px] m-[10px]" }, YR = { class: "text-center mb-3" }, XR = ["title"], KR = { class: "text-white" }, ZR = ["title", "onClick"], JR = { class: "flex" }, QR = /* @__PURE__ */ fe({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Ze(), n = Kn(), r = Ai(), { bgStyle: i } = He(n), s = Vr().simple_styles.road, a = we(s);
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
    return (l, u) => (A(), j("div", zR, [
      F(" TODO: create clean container for simple and advanced style editors "),
      L("h5", YR, oe(M(e)("Select a style", { ns: "client" })), 1),
      (A(!0), j(je, null, An(a.value, (f) => (A(), j("div", {
        key: f.unlocalized_label,
        title: M(e)(f.unlocalized_label, { ns: "client" }),
        class: Ae(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        L("span", KR, oe(M(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        L("button", {
          title: M(e)("Select style: {{styleName}}", {
            styleName: M(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          L("span", JR, [
            ie(HR, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, ZR)
      ], 10, XR))), 128))
    ]));
  }
}), e4 = /* @__PURE__ */ pe(QR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/simple-style-selector.vue"]]);
function t4(t) {
  const e = n4(t);
  return !e || !e.medium_style_class ? [] : Vr().medium_default_styles[e.medium_style_class];
}
function n4(t) {
  return Vr().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const r4 = { class: "flex w-full items-center" }, i4 = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, s4 = { class: "grow" }, a4 = ["value"], o4 = ["checked", "aria-label"], l4 = /* @__PURE__ */ fe({
  __name: "medium-style-item",
  props: {
    style: { type: Object, required: !0 },
    colorEditable: { type: Boolean, required: !0 }
  },
  emits: ["changeStyle"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e;
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
    return (o, l) => (A(), j("div", r4, [
      L("label", i4, oe(M(n)(o.style.label)), 1),
      L("div", s4, [
        o.colorEditable && r.style.color ? (A(), j("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: r.style.color,
          onInput: s
        }, null, 40, a4)) : F("v-if", !0)
      ]),
      L("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: r.style.visible,
        onChange: a,
        "aria-label": M(n)("Show or hide {{ thematicName }}", {
          thematicName: r.style.label
        })
      }, null, 40, o4)
    ]));
  }
}), u4 = /* @__PURE__ */ pe(l4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/medium-style-item.vue"]]), c4 = { class: "text-white border-2 p-[10px] m-[10px]" }, f4 = { class: "text-center mb-3" }, h4 = /* @__PURE__ */ fe({
  __name: "medium-style-selector",
  props: {
    layer: { type: Object, required: !0 }
  },
  setup(t) {
    const e = ["basemap_2015_global"], n = Kn(), { bgStyle: r } = He(n), { t: i } = Ze(), s = t, a = de(
      () => e.includes(s.layer.name)
    ), o = de(
      () => r.value || t4(s.layer)
    );
    function l(u, f) {
      r.value = o.value.map(
        (c, h) => h === u ? f : c
      ), n.disableExpertStyle();
    }
    return (u, f) => (A(), j("div", c4, [
      L("h5", f4, oe(a.value ? M(i)("Select a colour for every theme") : M(i)("Activate categories")), 1),
      (A(!0), j(je, null, An(o.value, (c, h) => (A(), Ue(u4, {
        key: c.label,
        style: Ci(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: a.value
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), d4 = /* @__PURE__ */ pe(h4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/medium-style-selector.vue"]]);
var I_ = { exports: {} };
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
      var d = u.type === "application/octet-stream", m = /constructor/i.test(a.HTMLElement) || a.safari, p = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((p || d && m || o) && typeof FileReader < "u") {
        var g = new FileReader();
        g.onloadend = function() {
          var b = g.result;
          b = p ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = b : location = b, h = null;
        }, g.readAsDataURL(u);
      } else {
        var y = a.URL || a.webkitURL, v = y.createObjectURL(u);
        h ? h.location = v : location.href = v, h = null, setTimeout(function() {
          y.revokeObjectURL(v);
        }, 4e4);
      }
    });
    a.saveAs = l.saveAs = l, t.exports = l;
  });
})(I_);
const m4 = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, p4 = { class: "text-center mb-3" }, g4 = { class: "flex flex-row justify-center" }, y4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, v4 = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, _4 = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, b4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, E4 = ["href"], S4 = /* @__PURE__ */ fe({
  __name: "expert-style-selector",
  setup(t) {
    const e = vt(), n = Kn(), r = Ai(), { appliedStyle: i } = He(n), { t: s } = Ze();
    function a() {
      const u = i.value, f = JSON.stringify(u), c = new Blob([f], { type: "text/plain;charset=utf-8" }), h = "styles.json";
      I_.exports.saveAs(c, h);
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
      ) : `${Ca.mvtStylesGetUrl}?id=${n.styleSerial}`;
    }
    return (u, f) => (A(), j("div", m4, [
      L("h5", p4, oe(M(s)("Lancer \xE9diteur externe ou importer json")), 1),
      L("div", g4, [
        L("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          L("span", y4, oe(M(s)("Download style")), 1)
        ]),
        L("div", v4, [
          L("label", _4, [
            L("span", b4, oe(M(s)("Upload style")), 1)
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
      }, oe(M(s)("Open Maputnik editor")), 9, E4)
    ]));
  }
}), w4 = /* @__PURE__ */ pe(S4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/expert-style-selector.vue"]]), x4 = { key: 0 }, O4 = {
  key: 0,
  class: "mb-px"
}, M4 = {
  key: 1,
  class: "mb-px"
}, T4 = {
  key: 2,
  class: "mb-px"
}, N4 = /* @__PURE__ */ fe({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Ze(), n = vt(), r = wt(), i = Kn(), { bgStyle: s, isExpertStyleActive: a } = He(i), { bgLayer: o } = He(n), l = Ai(), u = de(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    tt(o, (h) => {
      l.isLayerStyleEditable(h) || r.closeStyleEditorPanel();
    });
    let f = we(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => u.value.isEditable ? (A(), j("div", x4, [
      u.value.hasSimpleStyle ? (A(), j("div", O4, [
        ie(Vl, {
          title: M(e)("Simple"),
          expanded: M(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => Ye(f) ? f.value = M(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = M(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: _i(() => [
            ie(e4)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasAdvancedStyle ? (A(), j("div", M4, [
        ie(Vl, {
          title: M(e)("Medium"),
          expanded: M(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => Ye(f) ? f.value = M(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = M(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: _i(() => [
            M(o) ? (A(), Ue(d4, {
              key: 0,
              layer: M(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasExpertStyle ? (A(), j("div", T4, [
        ie(Vl, {
          title: M(e)("Expert (style.json)"),
          expanded: M(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => Ye(f) ? f.value = M(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = M(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: _i(() => [
            M(o) ? (A(), Ue(w4, {
              key: 0,
              layer: M(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      M(s) || M(a) ? (A(), j("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, oe(M(e)("Reset style", { ns: "client" })), 1)) : F("v-if", !0)
    ])) : F("v-if", !0);
  }
}), C4 = /* @__PURE__ */ pe(N4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/style-selector.vue"]]);
function ah(t) {
  return ah = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ah(t);
}
function R_() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : ah(XMLHttpRequest)) === "object";
}
function L4(t) {
  return !!t && typeof t.then == "function";
}
function P4(t) {
  return L4(t) ? t : Promise.resolve(t);
}
function A4(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Au = { exports: {} }, _l = { exports: {} }, _g;
function k4() {
  return _g || (_g = 1, function(t, e) {
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
        function m(T) {
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
        function p(T) {
          this.map = {}, T instanceof p ? T.forEach(function($, z) {
            this.append(z, $);
          }, this) : Array.isArray(T) ? T.forEach(function($) {
            this.append($[0], $[1]);
          }, this) : T && Object.getOwnPropertyNames(T).forEach(function($) {
            this.append($, T[$]);
          }, this);
        }
        p.prototype.append = function(T, $) {
          T = h(T), $ = d($);
          var z = this.map[T];
          this.map[T] = z ? z + ", " + $ : $;
        }, p.prototype.delete = function(T) {
          delete this.map[h(T)];
        }, p.prototype.get = function(T) {
          return T = h(T), this.has(T) ? this.map[T] : null;
        }, p.prototype.has = function(T) {
          return this.map.hasOwnProperty(h(T));
        }, p.prototype.set = function(T, $) {
          this.map[h(T)] = d($);
        }, p.prototype.forEach = function(T, $) {
          for (var z in this.map)
            this.map.hasOwnProperty(z) && T.call($, this.map[z], z, this);
        }, p.prototype.keys = function() {
          var T = [];
          return this.forEach(function($, z) {
            T.push(z);
          }), m(T);
        }, p.prototype.values = function() {
          var T = [];
          return this.forEach(function($) {
            T.push($);
          }), m(T);
        }, p.prototype.entries = function() {
          var T = [];
          return this.forEach(function($, z) {
            T.push([z, $]);
          }), m(T);
        }, l.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
        function g(T) {
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
        function v(T) {
          var $ = new FileReader(), z = y($);
          return $.readAsArrayBuffer(T), z;
        }
        function b(T) {
          var $ = new FileReader(), z = y($);
          return $.readAsText(T), z;
        }
        function E(T) {
          for (var $ = new Uint8Array(T), z = new Array($.length), K = 0; K < $.length; K++)
            z[K] = String.fromCharCode($[K]);
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
              return this.blob().then(v);
          }), this.text = function() {
            var T = g(this);
            if (T)
              return T;
            if (this._bodyBlob)
              return b(this._bodyBlob);
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
        var O = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function P(T) {
          var $ = T.toUpperCase();
          return O.indexOf($) > -1 ? $ : T;
        }
        function k(T, $) {
          if (!(this instanceof k))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ = $ || {};
          var z = $.body;
          if (T instanceof k) {
            if (T.bodyUsed)
              throw new TypeError("Already read");
            this.url = T.url, this.credentials = T.credentials, $.headers || (this.headers = new p(T.headers)), this.method = T.method, this.mode = T.mode, this.signal = T.signal, !z && T._bodyInit != null && (z = T._bodyInit, T.bodyUsed = !0);
          } else
            this.url = String(T);
          if (this.credentials = $.credentials || this.credentials || "same-origin", ($.headers || !this.headers) && (this.headers = new p($.headers)), this.method = P($.method || this.method || "GET"), this.mode = $.mode || this.mode || null, this.signal = $.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && z)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(z), (this.method === "GET" || this.method === "HEAD") && ($.cache === "no-store" || $.cache === "no-cache")) {
            var K = /([?&])_=[^&]*/;
            if (K.test(this.url))
              this.url = this.url.replace(K, "$1_=" + new Date().getTime());
            else {
              var Ce = /\?/;
              this.url += (Ce.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
        k.prototype.clone = function() {
          return new k(this, { body: this._bodyInit });
        };
        function C(T) {
          var $ = new FormData();
          return T.trim().split("&").forEach(function(z) {
            if (z) {
              var K = z.split("="), Ce = K.shift().replace(/\+/g, " "), Pe = K.join("=").replace(/\+/g, " ");
              $.append(decodeURIComponent(Ce), decodeURIComponent(Pe));
            }
          }), $;
        }
        function R(T) {
          var $ = new p(), z = T.replace(/\r?\n[\t ]+/g, " ");
          return z.split("\r").map(function(K) {
            return K.indexOf(`
`) === 0 ? K.substr(1, K.length) : K;
          }).forEach(function(K) {
            var Ce = K.split(":"), Pe = Ce.shift().trim();
            if (Pe) {
              var dt = Ce.join(":").trim();
              $.append(Pe, dt);
            }
          }), $;
        }
        N.call(k.prototype);
        function I(T, $) {
          if (!(this instanceof I))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ || ($ = {}), this.type = "default", this.status = $.status === void 0 ? 200 : $.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = $.statusText === void 0 ? "" : "" + $.statusText, this.headers = new p($.headers), this.url = $.url || "", this._initBody(T);
        }
        N.call(I.prototype), I.prototype.clone = function() {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
          });
        }, I.error = function() {
          var T = new I(null, { status: 0, statusText: "" });
          return T.type = "error", T;
        };
        var Q = [301, 302, 303, 307, 308];
        I.redirect = function(T, $) {
          if (Q.indexOf($) === -1)
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
        function ve(T, $) {
          return new Promise(function(z, K) {
            var Ce = new k(T, $);
            if (Ce.signal && Ce.signal.aborted)
              return K(new a.DOMException("Aborted", "AbortError"));
            var Pe = new XMLHttpRequest();
            function dt() {
              Pe.abort();
            }
            Pe.onload = function() {
              var Te = {
                status: Pe.status,
                statusText: Pe.statusText,
                headers: R(Pe.getAllResponseHeaders() || "")
              };
              Te.url = "responseURL" in Pe ? Pe.responseURL : Te.headers.get("X-Request-URL");
              var Ct = "response" in Pe ? Pe.response : Pe.responseText;
              setTimeout(function() {
                z(new I(Ct, Te));
              }, 0);
            }, Pe.onerror = function() {
              setTimeout(function() {
                K(new TypeError("Network request failed"));
              }, 0);
            }, Pe.ontimeout = function() {
              setTimeout(function() {
                K(new TypeError("Network request failed"));
              }, 0);
            }, Pe.onabort = function() {
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
            Pe.open(Ce.method, Rt(Ce.url), !0), Ce.credentials === "include" ? Pe.withCredentials = !0 : Ce.credentials === "omit" && (Pe.withCredentials = !1), "responseType" in Pe && (l.blob ? Pe.responseType = "blob" : l.arrayBuffer && Ce.headers.get("Content-Type") && Ce.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (Pe.responseType = "arraybuffer")), $ && typeof $.headers == "object" && !($.headers instanceof p) ? Object.getOwnPropertyNames($.headers).forEach(function(Te) {
              Pe.setRequestHeader(Te, d($.headers[Te]));
            }) : Ce.headers.forEach(function(Te, Ct) {
              Pe.setRequestHeader(Ct, Te);
            }), Ce.signal && (Ce.signal.addEventListener("abort", dt), Pe.onreadystatechange = function() {
              Pe.readyState === 4 && Ce.signal.removeEventListener("abort", dt);
            }), Pe.send(typeof Ce._bodyInit > "u" ? null : Ce._bodyInit);
          });
        }
        return ve.polyfill = !0, o.fetch || (o.fetch = ve, o.Headers = p, o.Request = k, o.Response = I), a.Headers = p, a.Request = k, a.Response = I, a.fetch = ve, a;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = n.fetch ? n : r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(_l, _l.exports)), _l.exports;
}
(function(t, e) {
  var n;
  if (typeof fetch == "function" && (typeof lr < "u" && lr.fetch ? n = lr.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof A4 < "u" && typeof window > "u") {
    var r = n || k4();
    r.default && (r = r.default), e.default = r, t.exports = e.default;
  }
})(Au, Au.exports);
const $_ = Au.exports, bg = /* @__PURE__ */ yb({
  __proto__: null,
  default: $_
}, [Au.exports]);
function Eg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Eg(Object(n), !0).forEach(function(r) {
      D4(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Eg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function D4(t, e, n) {
  return e = I4(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function I4(t) {
  var e = R4(t, "string");
  return ps(e) == "symbol" ? e : String(e);
}
function R4(t, e) {
  if (ps(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (ps(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ps(t) {
  return ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ps(t);
}
var jr;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? jr = global.fetch : typeof window < "u" && window.fetch ? jr = window.fetch : jr = fetch);
var ho;
R_() && (typeof global < "u" && global.XMLHttpRequest ? ho = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (ho = window.XMLHttpRequest));
var ku;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? ku = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (ku = window.ActiveXObject));
!jr && bg && !ho && !ku && (jr = $_ || bg);
typeof jr != "function" && (jr = void 0);
var oh = function(e, n) {
  if (n && ps(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, wg = function(e, n, r, i) {
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
  typeof fetch == "function" ? fetch(e, n).then(s).catch(r) : jr(e, n).then(s).catch(r);
}, xg = !1, $4 = function(e, n, r, i) {
  e.queryStringParams && (n = oh(n, e.queryStringParams));
  var s = Sg({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = Sg({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: s
  }, xg ? {} : a), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    wg(n, o, i, l);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(f) {
        delete o[f];
      }), wg(n, o, i, l), xg = !0;
    } catch (f) {
      i(f);
    }
  }
}, F4 = function(e, n, r, i) {
  r && ps(r) === "object" && (r = oh("", r).slice(1)), e.queryStringParams && (n = oh(n, e.queryStringParams));
  try {
    var s;
    ho ? s = new ho() : s = new ku("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", n, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
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
}, V4 = function(e, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, jr && n.indexOf("file:") !== 0)
    return $4(e, n, r, i);
  if (R_() || typeof ActiveXObject == "function")
    return F4(e, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function mo(t) {
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mo(t);
}
function Og(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function of(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Og(Object(n), !0).forEach(function(r) {
      F_(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Og(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function G4(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, V_(r.key), r);
  }
}
function j4(t, e, n) {
  return e && Mg(t.prototype, e), n && Mg(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function F_(t, e, n) {
  return e = V_(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function V_(t) {
  var e = U4(t, "string");
  return mo(e) == "symbol" ? e : String(e);
}
function U4(t, e) {
  if (mo(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (mo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var B4 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return F_({}, r, i || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: V4,
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
}, G_ = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    G4(this, t), this.services = e, this.options = n, this.allOptions = r, this.type = "backend", this.init(e, n, r);
  }
  return j4(t, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = of(of(of({}, B4()), this.options || {}), i), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
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
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, i)), l = P4(l), l.then(function(u) {
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
G_.type = "backend";
function j_(t, e, n) {
  n(t, e) && t instanceof gb && t.getLayers().forEach((i) => {
    j_(i, [...e, t], n);
  });
}
const W4 = { class: "h-screen flex flex-col overflow-hidden" }, q4 = { class: "flex grow" }, H4 = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, z4 = {
  key: 1,
  class: "w-80 bg-primary"
}, Y4 = { class: "map-wrapper grow bg-blue-100 relative" }, X4 = { class: "absolute right-1 top-16" }, K4 = /* @__PURE__ */ fe({
  __name: "App",
  setup(t) {
    const e = wt(), n = Ai();
    WR.bootstrap(), RR.bootstrap(), GR.bootstrap(), UR.bootstrapLayersOpen(), Z0.bootstrapStyle(), DR.bootstrap(), n.initBackgroundsConfigs();
    const { layersOpen: r, styleEditorOpen: i } = He(e);
    tt(
      r,
      () => setTimeout(() => {
        s();
      }, 50)
    ), _n(() => window.addEventListener("resize", s)), Li(() => window.removeEventListener("resize", s));
    function s() {
      const a = Fr().getOlMap();
      a.updateSize(), j_(a.getLayerGroup(), [], (o) => (o instanceof n_ && o.getMapLibreMap().resize(), !0));
    }
    return (a, o) => (A(), j("div", W4, [
      ie(iI),
      L("main", q4, [
        F(" Layer panel "),
        M(r) ? (A(), j("div", H4, [
          ie(yR)
        ])) : F("v-if", !0),
        F(" Style editor "),
        M(i) ? (A(), j("div", z4, [
          ie(C4)
        ])) : F("v-if", !0),
        F(" Map container and slider comparator "),
        L("div", Y4, [
          ie(QP, { v4_standalone: !0 }),
          ie(NR, { class: "absolute top-0" }),
          ie(Qk),
          ie(BD)
        ]),
        F(" Background selector "),
        L("div", X4, [
          ie(lA)
        ])
      ]),
      ie(mI, { class: "fixed bottom-5 sm:static z-20" }),
      ie(DN)
    ]));
  }
}), Z4 = /* @__PURE__ */ pe(K4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/App.vue"]]);
xN();
lt.use(G_);
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
const sd = CS(Z4);
sd.use($w());
sd.use(O2, { i18next: lt });
sd.use(hw);
const O6 = (t = {}, e = null) => ON(
  {
    setup: () => {
      const n = bo();
      Object.assign(n.appContext, e._context), Object.assign(n.provides, e._context.provides);
    },
    render: () => Jy(t)
  },
  { shadowRoot: !1 }
);
export {
  DN as AlertNotifications,
  Z4 as App,
  lA as BackgroundSelector,
  Gv as DropdownList,
  mI as FooterBar,
  iI as HeaderBar,
  O2 as I18NextVue,
  BD as LayerMetadata,
  yR as LayerPanel,
  QP as MapContainer,
  n_ as MapLibreLayer,
  Qk as RemoteLayers,
  NR as SliderComparator,
  C4 as StyleSelector,
  hw as VueDOMPurifyHTML,
  sd as app,
  G_ as backend,
  O6 as createElementInstance,
  $w as createPinia,
  ON as defineCustomElement,
  lt as i18next,
  ia as proxyUrlHelper,
  DR as statePersistorBgLayerService,
  UR as statePersistorLayersOpenService,
  RR as statePersistorLayersService,
  WR as statePersistorMyMapService,
  Z0 as statePersistorStyleService,
  GR as statePersistorThemeService,
  He as storeToRefs,
  Ca as styleUrlHelper,
  KD as themeSelectorService,
  wt as useAppStore,
  i_ as useBackgroundLayer,
  Xn as useLayers,
  Fr as useMap,
  vt as useMapStore,
  Ai as useMvtStyles,
  r_ as useOpenLayers,
  Kn as useStyleStore,
  Zt as useThemeStore,
  os as useThemes,
  tt as watch
};
