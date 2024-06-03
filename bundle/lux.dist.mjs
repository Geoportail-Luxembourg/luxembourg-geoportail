var X_ = Object.defineProperty;
var K_ = (t, e, n) => e in t ? X_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var st = (t, e, n) => (K_(t, typeof e != "symbol" ? e + "" : e, n), n);
import { get as _l, transformExtent as Z_, getTransform as J_, transform as md } from "ol/proj";
import { register as Q_ } from "ol/proj/proj4";
import eb from "ol/Map";
import tb from "ol/View";
import nb from "ol/layer/Image";
import Mg from "ol/source/ImageWMS";
import rb from "ol/layer/Tile";
import Tg from "ol/source/WMTS";
import ib from "ol/tilegrid/WMTS";
import { getTopLeft as sb } from "ol/extent";
import ab from "ol/layer/Layer";
import { toDegrees as ob } from "ol/math";
import { toLonLat as lb } from "ol/proj.js";
import gd from "mapbox-gl";
import * as yd from "ol/events";
import ub from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as Ng, CLASS_CONTROL as Lg } from "ol/css";
import Cg from "ol/control/Control";
import cb from "ol/control/FullScreen";
import fb from "ol/control/Zoom";
import hb from "ol/control/ZoomToExtent";
import db from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as Vo } from "ol/render";
import { unByKey as pb } from "ol/Observable";
import vd from "ol/render/EventType";
import mb from "ol/layer/Group.js";
function gb(t, e) {
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
const Ke = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Gs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], yt = () => {
}, yb = () => !1, po = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Wl = (t) => t.startsWith("onUpdate:"), Qe = Object.assign, oh = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, vb = Object.prototype.hasOwnProperty, De = (t, e) => vb.call(t, e), le = Array.isArray, Qi = (t) => Du(t) === "[object Map]", Pg = (t) => Du(t) === "[object Set]", pe = (t) => typeof t == "function", rt = (t) => typeof t == "string", ms = (t) => typeof t == "symbol", Be = (t) => t !== null && typeof t == "object", lh = (t) => (Be(t) || pe(t)) && pe(t.then) && pe(t.catch), Ag = Object.prototype.toString, Du = (t) => Ag.call(t), uh = (t) => Du(t).slice(8, -1), Dg = (t) => Du(t) === "[object Object]", ch = (t) => rt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Da = /* @__PURE__ */ qr(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _b = /* @__PURE__ */ qr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ku = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, bb = /-(\w)/g, gn = ku((t) => t.replace(bb, (e, n) => n ? n.toUpperCase() : "")), Eb = /\B([A-Z])/g, un = ku(
  (t) => t.replace(Eb, "-$1").toLowerCase()
), ls = ku((t) => t.charAt(0).toUpperCase() + t.slice(1)), Hi = ku((t) => t ? `on${ls(t)}` : ""), xi = (t, e) => !Object.is(t, e), ha = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, kg = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Sb = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, of = (t) => {
  const e = rt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let _d;
const Iu = () => _d || (_d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Li(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = rt(r) ? Mb(r) : Li(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (rt(t) || Be(t))
    return t;
}
const wb = /;(?![^(]*\))/g, xb = /:([^]+)/, Ob = /\/\*[^]*?\*\//g;
function Mb(t) {
  const e = {};
  return t.replace(Ob, "").split(wb).forEach((n) => {
    if (n) {
      const r = n.split(xb);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Ae(t) {
  let e = "";
  if (rt(t))
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
const Tb = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Nb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Lb = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Cb = /* @__PURE__ */ qr(Tb), Pb = /* @__PURE__ */ qr(Nb), Ab = /* @__PURE__ */ qr(Lb), Db = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", kb = /* @__PURE__ */ qr(Db);
function Ig(t) {
  return !!t || t === "";
}
const oe = (t) => rt(t) ? t : t == null ? "" : le(t) || Be(t) && (t.toString === Ag || !pe(t.toString)) ? JSON.stringify(t, Rg, 2) : String(t), Rg = (t, e) => e && e.__v_isRef ? Rg(t, e.value) : Qi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[cc(r, s) + " =>"] = i, n),
    {}
  )
} : Pg(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => cc(n))
} : ms(e) ? cc(e) : Be(e) && !le(e) && !Dg(e) ? String(e) : e, cc = (t, e = "") => {
  var n;
  return ms(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
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
class $g {
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
function Fg(t) {
  return new $g(t);
}
function Ib(t, e = dn) {
  e && e.active && e.effects.push(t);
}
function Vg() {
  return dn;
}
function Rb(t) {
  dn ? dn.cleanups.push(t) : process.env.NODE_ENV !== "production" && vr(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let es;
class fh {
  constructor(e, n, r, i) {
    this.fn = e, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ib(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Hr();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && ($b(n.computed), this._dirtyLevel >= 4))
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
    let e = yi, n = es;
    try {
      return yi = !0, es = this, this._runnings++, bd(this), this.fn();
    } finally {
      Ed(this), this._runnings--, es = n, yi = e;
    }
  }
  stop() {
    var e;
    this.active && (bd(this), Ed(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function $b(t) {
  return t.value;
}
function bd(t) {
  t._trackId++, t._depsLength = 0;
}
function Ed(t) {
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
let yi = !0, lf = 0;
const Gg = [];
function Hr() {
  Gg.push(yi), yi = !1;
}
function zr() {
  const t = Gg.pop();
  yi = t === void 0 ? !0 : t;
}
function hh() {
  lf++;
}
function dh() {
  for (lf--; !lf && uf.length; )
    uf.shift()();
}
function Ug(t, e, n) {
  var r;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && jg(i, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((r = t.onTrack) == null || r.call(t, Qe({ effect: t }, n)));
  }
}
const uf = [];
function Bg(t, e, n) {
  var r;
  hh();
  for (const i of t.keys()) {
    let s;
    i._dirtyLevel < e && (s != null ? s : s = t.get(i) === i._trackId) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (s != null ? s : s = t.get(i) === i._trackId) && (process.env.NODE_ENV !== "production" && ((r = i.onTrigger) == null || r.call(i, Qe({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && uf.push(i.scheduler)));
  }
  dh();
}
const Wg = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, ql = /* @__PURE__ */ new WeakMap(), ts = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), cf = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function It(t, e, n) {
  if (yi && es) {
    let r = ql.get(t);
    r || ql.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Wg(() => r.delete(n))), Ug(
      es,
      i,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: n
      } : void 0
    );
  }
}
function cr(t, e, n, r, i, s) {
  const a = ql.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (n === "length" && le(t)) {
    const l = Number(r);
    a.forEach((u, f) => {
      (f === "length" || !ms(f) && f >= l) && o.push(u);
    });
  } else
    switch (n !== void 0 && o.push(a.get(n)), e) {
      case "add":
        le(t) ? ch(n) && o.push(a.get("length")) : (o.push(a.get(ts)), Qi(t) && o.push(a.get(cf)));
        break;
      case "delete":
        le(t) || (o.push(a.get(ts)), Qi(t) && o.push(a.get(cf)));
        break;
      case "set":
        Qi(t) && o.push(a.get(ts));
        break;
    }
  hh();
  for (const l of o)
    l && Bg(
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
  dh();
}
function Fb(t, e) {
  var n;
  return (n = ql.get(t)) == null ? void 0 : n.get(e);
}
const Vb = /* @__PURE__ */ qr("__proto__,__v_isRef,__isVue"), qg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ms)
), Sd = /* @__PURE__ */ jb();
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
      Hr(), hh();
      const r = _e(this)[e].apply(this, n);
      return dh(), zr(), r;
    };
  }), t;
}
function Gb(t) {
  ms(t) || (t = String(t));
  const e = _e(this);
  return It(e, "has", t), e.hasOwnProperty(t);
}
class Hg {
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
      return r === (i ? s ? Qg : Jg : s ? Zg : Kg).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = le(e);
    if (!i) {
      if (a && De(Sd, n))
        return Reflect.get(Sd, n, r);
      if (n === "hasOwnProperty")
        return Gb;
    }
    const o = Reflect.get(e, n, r);
    return (ms(n) ? qg.has(n) : Vb(n)) || (i || It(e, "get", n), s) ? o : Ye(o) ? a && ch(n) ? o : o.value : Be(o) ? i ? ey(o) : Fu(o) : o;
  }
}
class zg extends Hg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._isShallow) {
      const l = us(s);
      if (!ns(r) && !us(r) && (s = _e(s), r = _e(r)), !le(e) && Ye(s) && !Ye(r))
        return l ? !1 : (s.value = r, !0);
    }
    const a = le(e) && ch(n) ? Number(n) < e.length : De(e, n), o = Reflect.set(e, n, r, i);
    return e === _e(i) && (a ? xi(r, s) && cr(e, "set", n, r, s) : cr(e, "add", n, r)), o;
  }
  deleteProperty(e, n) {
    const r = De(e, n), i = e[n], s = Reflect.deleteProperty(e, n);
    return s && r && cr(e, "delete", n, void 0, i), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!ms(n) || !qg.has(n)) && It(e, "has", n), r;
  }
  ownKeys(e) {
    return It(
      e,
      "iterate",
      le(e) ? "length" : ts
    ), Reflect.ownKeys(e);
  }
}
class Yg extends Hg {
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
const Ub = /* @__PURE__ */ new zg(), Bb = /* @__PURE__ */ new Yg(), Wb = /* @__PURE__ */ new zg(
  !0
), qb = /* @__PURE__ */ new Yg(!0), ph = (t) => t, Ru = (t) => Reflect.getPrototypeOf(t);
function jo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = _e(t), s = _e(e);
  n || (xi(e, s) && It(i, "get", e), It(i, "get", s));
  const { has: a } = Ru(i), o = r ? ph : n ? mh : Za;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function Go(t, e = !1) {
  const n = this.__v_raw, r = _e(n), i = _e(t);
  return e || (xi(t, i) && It(r, "has", t), It(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Uo(t, e = !1) {
  return t = t.__v_raw, !e && It(_e(t), "iterate", ts), Reflect.get(t, "size", t);
}
function wd(t) {
  t = _e(t);
  const e = _e(this);
  return Ru(e).has.call(e, t) || (e.add(t), cr(e, "add", t, t)), this;
}
function xd(t, e) {
  e = _e(e);
  const n = _e(this), { has: r, get: i } = Ru(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && Xg(n, r, t) : (t = _e(t), s = r.call(n, t));
  const a = i.call(n, t);
  return n.set(t, e), s ? xi(e, a) && cr(n, "set", t, e, a) : cr(n, "add", t, e), this;
}
function Od(t) {
  const e = _e(this), { has: n, get: r } = Ru(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && Xg(e, n, t) : (t = _e(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, a = e.delete(t);
  return i && cr(e, "delete", t, void 0, s), a;
}
function Md() {
  const t = _e(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? Qi(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && cr(t, "clear", void 0, void 0, n), r;
}
function Bo(t, e) {
  return function(r, i) {
    const s = this, a = s.__v_raw, o = _e(a), l = e ? ph : t ? mh : Za;
    return !t && It(o, "iterate", ts), a.forEach((u, f) => r.call(i, l(u), l(f), s));
  };
}
function Wo(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = _e(i), a = Qi(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...r), f = n ? ph : e ? mh : Za;
    return !e && It(
      s,
      "iterate",
      l ? cf : ts
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
        `${ls(t)} operation ${n}failed: target is readonly.`,
        _e(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Hb() {
  const t = {
    get(s) {
      return jo(this, s);
    },
    get size() {
      return Uo(this);
    },
    has: Go,
    add: wd,
    set: xd,
    delete: Od,
    clear: Md,
    forEach: Bo(!1, !1)
  }, e = {
    get(s) {
      return jo(this, s, !1, !0);
    },
    get size() {
      return Uo(this);
    },
    has: Go,
    add: wd,
    set: xd,
    delete: Od,
    clear: Md,
    forEach: Bo(!1, !0)
  }, n = {
    get(s) {
      return jo(this, s, !0);
    },
    get size() {
      return Uo(this, !0);
    },
    has(s) {
      return Go.call(this, s, !0);
    },
    add: Zr("add"),
    set: Zr("set"),
    delete: Zr("delete"),
    clear: Zr("clear"),
    forEach: Bo(!0, !1)
  }, r = {
    get(s) {
      return jo(this, s, !0, !0);
    },
    get size() {
      return Uo(this, !0);
    },
    has(s) {
      return Go.call(this, s, !0);
    },
    add: Zr("add"),
    set: Zr("set"),
    delete: Zr("delete"),
    clear: Zr("clear"),
    forEach: Bo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = Wo(s, !1, !1), n[s] = Wo(s, !0, !1), e[s] = Wo(s, !1, !0), r[s] = Wo(
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
  zb,
  Yb,
  Xb,
  Kb
] = /* @__PURE__ */ Hb();
function $u(t, e) {
  const n = e ? t ? Kb : Xb : t ? Yb : zb;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    De(n, i) && i in r ? n : r,
    i,
    s
  );
}
const Zb = {
  get: /* @__PURE__ */ $u(!1, !1)
}, Jb = {
  get: /* @__PURE__ */ $u(!1, !0)
}, Qb = {
  get: /* @__PURE__ */ $u(!0, !1)
}, e1 = {
  get: /* @__PURE__ */ $u(!0, !0)
};
function Xg(t, e, n) {
  const r = _e(n);
  if (r !== n && e.call(t, r)) {
    const i = uh(t);
    vr(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Kg = /* @__PURE__ */ new WeakMap(), Zg = /* @__PURE__ */ new WeakMap(), Jg = /* @__PURE__ */ new WeakMap(), Qg = /* @__PURE__ */ new WeakMap();
function t1(t) {
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
function n1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : t1(uh(t));
}
function Fu(t) {
  return us(t) ? t : Vu(
    t,
    !1,
    Ub,
    Zb,
    Kg
  );
}
function r1(t) {
  return Vu(
    t,
    !1,
    Wb,
    Jb,
    Zg
  );
}
function ey(t) {
  return Vu(
    t,
    !0,
    Bb,
    Qb,
    Jg
  );
}
function Rr(t) {
  return Vu(
    t,
    !0,
    qb,
    e1,
    Qg
  );
}
function Vu(t, e, n, r, i) {
  if (!Be(t))
    return process.env.NODE_ENV !== "production" && vr(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = n1(t);
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? r : n
  );
  return i.set(t, o), o;
}
function fr(t) {
  return us(t) ? fr(t.__v_raw) : !!(t && t.__v_isReactive);
}
function us(t) {
  return !!(t && t.__v_isReadonly);
}
function ns(t) {
  return !!(t && t.__v_isShallow);
}
function Hl(t) {
  return t ? !!t.__v_raw : !1;
}
function _e(t) {
  const e = t && t.__v_raw;
  return e ? _e(e) : t;
}
function pi(t) {
  return Object.isExtensible(t) && kg(t, "__v_skip", !0), t;
}
const Za = (t) => Be(t) ? Fu(t) : t, mh = (t) => Be(t) ? ey(t) : t, i1 = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class ty {
  constructor(e, n, r, i) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new fh(
      () => e(this._value),
      () => bl(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = _e(this);
    return (!e._cacheable || e.effect.dirty) && xi(e._value, e._value = e.effect.run()) && bl(e, 4), ny(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && vr(i1, `

getter: `, this.getter), bl(e, 2)), e._value;
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
function s1(t, e, n = !1) {
  let r, i;
  const s = pe(t);
  s ? (r = t, i = process.env.NODE_ENV !== "production" ? () => {
    vr("Write operation failed: computed value is readonly");
  } : yt) : (r = t.get, i = t.set);
  const a = new ty(r, i, s || !i, n);
  return process.env.NODE_ENV !== "production" && e && !n && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
function ny(t) {
  var e;
  yi && es && (t = _e(t), Ug(
    es,
    (e = t.dep) != null ? e : t.dep = Wg(
      () => t.dep = void 0,
      t instanceof ty ? t : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function bl(t, e = 4, n) {
  t = _e(t);
  const r = t.dep;
  r && Bg(
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
  return ry(t, !1);
}
function nt(t) {
  return ry(t, !0);
}
function ry(t, e) {
  return Ye(t) ? t : new a1(t, e);
}
class a1 {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : _e(e), this._value = n ? e : Za(e);
  }
  get value() {
    return ny(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || ns(e) || us(e);
    e = n ? e : _e(e), xi(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Za(e), bl(this, 4, e));
  }
}
function M(t) {
  return Ye(t) ? t.value : t;
}
const o1 = {
  get: (t, e, n) => M(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return Ye(i) && !Ye(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function iy(t) {
  return fr(t) ? t : new Proxy(t, o1);
}
function ff(t) {
  process.env.NODE_ENV !== "production" && !Hl(t) && vr("toRefs() expects a reactive object but received a plain one.");
  const e = le(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = sy(t, n);
  return e;
}
class l1 {
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
    return Fb(_e(this._object), this._key);
  }
}
class u1 {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function El(t, e, n) {
  return Ye(t) ? t : pe(t) ? new u1(t) : Be(t) && arguments.length > 1 ? sy(t, e, n) : we(t);
}
function sy(t, e, n) {
  const r = t[e];
  return Ye(r) ? r : new l1(t, e, n);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const rs = [];
function Sl(t) {
  rs.push(t);
}
function wl() {
  rs.pop();
}
function q(t, ...e) {
  Hr();
  const n = rs.length ? rs[rs.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = c1();
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
          ({ vnode: s }) => `at <${qu(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...f1(i)), console.warn(...s);
  }
  zr();
}
function c1() {
  let t = rs[rs.length - 1];
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
function f1(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...h1(n));
  }), e;
}
function h1({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${qu(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...d1(t.props), s] : [i + s];
}
function d1(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...ay(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function ay(t, e, n) {
  return rt(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : Ye(e) ? (e = ay(t, _e(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : pe(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = _e(e), n ? e : [`${t}=`, e]);
}
function p1(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? q(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && q(`${e} is NaN - the duration expression might be incorrect.`));
}
const gh = {
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
    mo(i, e, n);
  }
}
function Ln(t, e, n, r) {
  if (pe(t)) {
    const i = $r(t, e, n, r);
    return i && lh(i) && i.catch((s) => {
      mo(s, e, n);
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
function mo(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? gh[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  m1(t, n, i, r);
}
function m1(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = gh[e];
    if (n && Sl(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && wl(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Ja = !1, hf = !1;
const Bt = [];
let ir = 0;
const Us = [];
let kr = null, ii = 0;
const oy = /* @__PURE__ */ Promise.resolve();
let yh = null;
const g1 = 100;
function zl(t) {
  const e = yh || oy;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function y1(t) {
  let e = ir + 1, n = Bt.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = Bt[r], s = Qa(i);
    s < t || s === t && i.pre ? e = r + 1 : n = r;
  }
  return e;
}
function ju(t) {
  (!Bt.length || !Bt.includes(
    t,
    Ja && t.allowRecurse ? ir + 1 : ir
  )) && (t.id == null ? Bt.push(t) : Bt.splice(y1(t.id), 0, t), ly());
}
function ly() {
  !Ja && !hf && (hf = !0, yh = oy.then(fy));
}
function v1(t) {
  const e = Bt.indexOf(t);
  e > ir && Bt.splice(e, 1);
}
function uy(t) {
  le(t) ? Us.push(...t) : (!kr || !kr.includes(
    t,
    t.allowRecurse ? ii + 1 : ii
  )) && Us.push(t), ly();
}
function Td(t, e, n = Ja ? ir + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); n < Bt.length; n++) {
    const r = Bt[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid || process.env.NODE_ENV !== "production" && vh(e, r))
        continue;
      Bt.splice(n, 1), n--, r();
    }
  }
}
function cy(t) {
  if (Us.length) {
    const e = [...new Set(Us)].sort(
      (n, r) => Qa(n) - Qa(r)
    );
    if (Us.length = 0, kr) {
      kr.push(...e);
      return;
    }
    for (kr = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ii = 0; ii < kr.length; ii++)
      process.env.NODE_ENV !== "production" && vh(t, kr[ii]) || kr[ii]();
    kr = null, ii = 0;
  }
}
const Qa = (t) => t.id == null ? 1 / 0 : t.id, _1 = (t, e) => {
  const n = Qa(t) - Qa(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function fy(t) {
  hf = !1, Ja = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Bt.sort(_1);
  const e = process.env.NODE_ENV !== "production" ? (n) => vh(t, n) : yt;
  try {
    for (ir = 0; ir < Bt.length; ir++) {
      const n = Bt[ir];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        $r(n, null, 14);
      }
    }
  } finally {
    ir = 0, Bt.length = 0, cy(t), Ja = !1, yh = null, (Bt.length || Us.length) && fy(t);
  }
}
function vh(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > g1) {
      const r = e.ownerInstance, i = r && Nh(r.type);
      return mo(
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
process.env.NODE_ENV !== "production" && (Iu().__VUE_HMR_RUNTIME__ = {
  createRecord: fc(hy),
  rerender: fc(S1),
  reload: fc(w1)
});
const cs = /* @__PURE__ */ new Map();
function b1(t) {
  const e = t.type.__hmrId;
  let n = cs.get(e);
  n || (hy(e, t.type), n = cs.get(e)), n.instances.add(t);
}
function E1(t) {
  cs.get(t.type.__hmrId).instances.delete(t);
}
function hy(t, e) {
  return cs.has(t) ? !1 : (cs.set(t, {
    initialDef: ka(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ka(t) {
  return Ky(t) ? t.__vccOpts : t;
}
function S1(t, e) {
  const n = cs.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, ka(r.type).render = e), r.renderCache = [], vi = !0, r.effect.dirty = !0, r.update(), vi = !1;
  }));
}
function w1(t, e) {
  const n = cs.get(t);
  if (!n)
    return;
  e = ka(e), Nd(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = ka(i.type);
    Ps.has(s) || (s !== n.initialDef && Nd(s, e), Ps.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Ps.add(s), i.ceReload(e.styles), Ps.delete(s)) : i.parent ? (i.parent.effect.dirty = !0, ju(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  uy(() => {
    for (const i of r)
      Ps.delete(
        ka(i.type)
      );
  });
}
function Nd(t, e) {
  Qe(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function fc(t) {
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
let qn, Sa = [], df = !1;
function go(t, ...e) {
  qn ? qn.emit(t, ...e) : df || Sa.push({ event: t, args: e });
}
function _h(t, e) {
  var n, r;
  qn = t, qn ? (qn.enabled = !0, Sa.forEach(({ event: i, args: s }) => qn.emit(i, ...s)), Sa = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    _h(s, e);
  }), setTimeout(() => {
    qn || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, df = !0, Sa = []);
  }, 3e3)) : (df = !0, Sa = []);
}
function x1(t, e) {
  go("app:init", t, e, {
    Fragment: Ge,
    Text: vo,
    Comment: Nt,
    Static: xl
  });
}
function O1(t) {
  go("app:unmount", t);
}
const M1 = /* @__PURE__ */ bh(
  "component:added"
), dy = /* @__PURE__ */ bh("component:updated"), T1 = /* @__PURE__ */ bh(
  "component:removed"
), N1 = (t) => {
  qn && typeof qn.cleanupBuffer == "function" && !qn.cleanupBuffer(t) && T1(t);
};
/*! #__NO_SIDE_EFFECTS__ */
function bh(t) {
  return (e) => {
    go(
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
), C1 = /* @__PURE__ */ py(
  "perf:end"
);
function py(t) {
  return (e, n, r) => {
    go(t, e.appContext.app, e.uid, e, n, r);
  };
}
function P1(t, e, n) {
  go(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function A1(t, e, ...n) {
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
        (!c || !(Hi(e) in c)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Hi(e)}" prop.`
        );
      else {
        const h = f[e];
        pe(h) && (h(...n) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = r[f] || Ke;
    h && (i = n.map((d) => rt(d) ? d.trim() : d)), c && (i = n.map(Sb));
  }
  if (process.env.NODE_ENV !== "production" && P1(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && r[Hi(f)] && q(
      `Event "${f}" is emitted in component ${qu(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${un(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = r[o = Hi(e)] || r[o = Hi(gn(e))];
  !l && s && (l = r[o = Hi(un(e))]), l && Ln(
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
function my(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!pe(t)) {
    const l = (u) => {
      const f = my(u, e, !0);
      f && (o = !0, Qe(a, f));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Be(t) && r.set(t, null), null) : (le(s) ? s.forEach((l) => a[l] = null) : Qe(a, s), Be(t) && r.set(t, a), a);
}
function Gu(t, e) {
  return !t || !po(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), De(t, e[0].toLowerCase() + e.slice(1)) || De(t, un(e)) || De(t, e));
}
let ht = null, gy = null;
function Yl(t) {
  const e = ht;
  return ht = t, gy = t && t.type.__scopeId || null, e;
}
function _i(t, e = ht, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && Wd(-1);
    const s = Yl(e);
    let a;
    try {
      a = t(...i);
    } finally {
      Yl(s), r._d && Wd(1);
    }
    return process.env.NODE_ENV !== "production" && dy(e), a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let pf = !1;
function Xl() {
  pf = !0;
}
function hc(t) {
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
  } = t, g = Yl(t);
  let b, _;
  process.env.NODE_ENV !== "production" && (pf = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = i || r, N = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(E, {
        get(w, C, A) {
          return q(
            `Property '${String(
              C
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(w, C, A);
        }
      }) : E;
      b = Wn(
        u.call(
          N,
          E,
          f,
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          d,
          h,
          p
        )
      ), _ = o;
    } else {
      const E = e;
      process.env.NODE_ENV !== "production" && o === c && Xl(), b = Wn(
        E.length > 1 ? E(
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Xl(), o;
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : E(
          process.env.NODE_ENV !== "production" ? Rr(c) : c,
          null
        )
      ), _ = e.props ? o : D1(o);
    }
  } catch (E) {
    $a.length = 0, mo(E, t, 1), b = ie(Nt);
  }
  let S = b, y;
  if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && ([S, y] = yy(b)), _ && m !== !1) {
    const E = Object.keys(_), { shapeFlag: N } = S;
    if (E.length) {
      if (N & 7)
        s && E.some(Wl) && (_ = k1(
          _,
          s
        )), S = _r(S, _);
      else if (process.env.NODE_ENV !== "production" && !pf && S.type !== Nt) {
        const w = Object.keys(o), C = [], A = [];
        for (let T = 0, k = w.length; T < k; T++) {
          const I = w[T];
          po(I) ? Wl(I) || C.push(I[2].toLowerCase() + I.slice(3)) : A.push(I);
        }
        A.length && q(
          `Extraneous non-props attributes (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), C.length && q(
          `Extraneous non-emits event listeners (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ld(S) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), S = _r(S), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ld(S) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), S.transition = n.transition), process.env.NODE_ENV !== "production" && y ? y(S) : b = S, Yl(g), b;
}
const yy = (t) => {
  const e = t.children, n = t.dynamicChildren, r = Eh(e, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return yy(r);
  } else
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, a = (o) => {
    e[i] = o, n && (s > -1 ? n[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...n, o]));
  };
  return [Wn(r), a];
};
function Eh(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (ea(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && e && n.patchFlag > 0 && n.patchFlag & 2048)
          return Eh(n.children);
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
}, k1 = (t, e) => {
  const n = {};
  for (const r in t)
    (!Wl(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Ld = (t) => t.shapeFlag & 7 || t.type === Nt;
function I1(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && vi || e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Cd(r, a, u) : !!a;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const h = f[c];
        if (a[h] !== r[h] && !Gu(u, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? Cd(r, a, u) : !0 : !!a;
  return !1;
}
function Cd(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Gu(n, s))
      return !0;
  }
  return !1;
}
function R1({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const mf = "components", $1 = "directives";
function F1(t, e) {
  return vy(mf, t, !0, e) || t;
}
const V1 = Symbol.for("v-ndc");
function Sh(t) {
  return vy($1, t);
}
function vy(t, e, n = !0, r = !1) {
  const i = ht || St;
  if (i) {
    const s = i.type;
    if (t === mf) {
      const o = Nh(
        s,
        !1
      );
      if (o && (o === e || o === gn(e) || o === ls(gn(e))))
        return s;
    }
    const a = Pd(i[t] || s[t], e) || Pd(i.appContext[t], e);
    if (!a && r)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !a) {
      const o = t === mf ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      q(`Failed to resolve ${t.slice(0, -1)}: ${e}${o}`);
    }
    return a;
  } else
    process.env.NODE_ENV !== "production" && q(
      `resolve${ls(t.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Pd(t, e) {
  return t && (t[e] || t[gn(e)] || t[ls(gn(e))]);
}
const j1 = (t) => t.__isSuspense;
function G1(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : uy(t);
}
const U1 = Symbol.for("v-scx"), B1 = () => {
  {
    const t = Ws(U1);
    return t || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function vn(t, e) {
  return wh(t, null, e);
}
const qo = {};
function et(t, e, n) {
  return process.env.NODE_ENV !== "production" && !pe(e) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), wh(t, e, n);
}
function wh(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  once: s,
  onTrack: a,
  onTrigger: o
} = Ke) {
  if (e && s) {
    const w = e;
    e = (...C) => {
      w(...C), N();
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
  const l = (w) => {
    q(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = St, f = (w) => r === !0 ? w : Ki(w, r === !1 ? 1 : void 0);
  let c, h = !1, d = !1;
  if (Ye(t) ? (c = () => t.value, h = ns(t)) : fr(t) ? (c = () => f(t), h = !0) : le(t) ? (d = !0, h = t.some((w) => fr(w) || ns(w)), c = () => t.map((w) => {
    if (Ye(w))
      return w.value;
    if (fr(w))
      return f(w);
    if (pe(w))
      return $r(w, u, 2);
    process.env.NODE_ENV !== "production" && l(w);
  })) : pe(t) ? e ? c = () => $r(t, u, 2) : c = () => (p && p(), Ln(
    t,
    u,
    3,
    [m]
  )) : (c = yt, process.env.NODE_ENV !== "production" && l(t)), e && r) {
    const w = c;
    c = () => Ki(w());
  }
  let p, m = (w) => {
    p = y.onStop = () => {
      $r(w, u, 4), p = y.onStop = void 0;
    };
  }, g;
  if (Bu)
    if (m = yt, e ? n && Ln(e, u, 3, [
      c(),
      d ? [] : void 0,
      m
    ]) : c(), i === "sync") {
      const w = B1();
      g = w.__watcherHandles || (w.__watcherHandles = []);
    } else
      return yt;
  let b = d ? new Array(t.length).fill(qo) : qo;
  const _ = () => {
    if (!(!y.active || !y.dirty))
      if (e) {
        const w = y.run();
        (r || h || (d ? w.some((C, A) => xi(C, b[A])) : xi(w, b))) && (p && p(), Ln(e, u, 3, [
          w,
          b === qo ? void 0 : d && b[0] === qo ? [] : b,
          m
        ]), b = w);
      } else
        y.run();
  };
  _.allowRecurse = !!e;
  let S;
  i === "sync" ? S = _ : i === "post" ? S = () => on(_, u && u.suspense) : (_.pre = !0, u && (_.id = u.uid), S = () => ju(_));
  const y = new fh(c, yt, S), E = Vg(), N = () => {
    y.stop(), E && oh(E.effects, y);
  };
  return process.env.NODE_ENV !== "production" && (y.onTrack = a, y.onTrigger = o), e ? n ? _() : b = y.run() : i === "post" ? on(
    y.run.bind(y),
    u && u.suspense
  ) : y.run(), g && g.push(N), N;
}
function W1(t, e, n) {
  const r = this.proxy, i = rt(t) ? t.includes(".") ? _y(r, t) : () => r[t] : t.bind(r, r);
  let s;
  pe(e) ? s = e : (s = e.handler, n = e);
  const a = bo(this), o = wh(i, s.bind(r), n);
  return a(), o;
}
function _y(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Ki(t, e, n = 0, r) {
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
    Ki(t.value, e, n, r);
  else if (le(t))
    for (let i = 0; i < t.length; i++)
      Ki(t[i], e, n, r);
  else if (Pg(t) || Qi(t))
    t.forEach((i) => {
      Ki(i, e, n, r);
    });
  else if (Dg(t))
    for (const i in t)
      Ki(t[i], e, n, r);
  return t;
}
function by(t) {
  _b(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function Kl(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), t;
  const n = Wu(ht) || ht.proxy, r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Ke] = e[i];
    s && (pe(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ki(a), r.push({
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
function Ri(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[r];
    l && (Hr(), Ln(l, n, 8, [
      t.el,
      o,
      t,
      e
    ]), zr());
  }
}
const si = Symbol("_leaveCb"), Ho = Symbol("_enterCb");
function q1() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _n(() => {
    t.isMounted = !0;
  }), Oy(() => {
    t.isUnmounting = !0;
  }), t;
}
const En = [Function, Array], Ey = {
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
}, H1 = {
  name: "BaseTransition",
  props: Ey,
  setup(t, { slots: e }) {
    const n = _o(), r = q1();
    return () => {
      const i = e.default && wy(e.default(), !0);
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
        return dc(s);
      const l = Ad(s);
      if (!l)
        return dc(s);
      const u = gf(
        l,
        a,
        r,
        n
      );
      yf(l, u);
      const f = n.subTree, c = f && Ad(f);
      if (c && c.type !== Nt && !Xi(l, c)) {
        const h = gf(
          c,
          a,
          r,
          n
        );
        if (yf(c, h), o === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, dc(s);
        o === "in-out" && l.type !== Nt && (h.delayLeave = (d, p, m) => {
          const g = Sy(
            r,
            c
          );
          g[String(c.key)] = c, d[si] = () => {
            p(), d[si] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = m;
        });
      }
      return s;
    };
  }
}, z1 = H1;
function Sy(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function gf(t, e, n, r) {
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
    onAfterAppear: b,
    onAppearCancelled: _
  } = e, S = String(t.key), y = Sy(n, t), E = (C, A) => {
    C && Ln(
      C,
      r,
      9,
      A
    );
  }, N = (C, A) => {
    const T = A[1];
    E(C, A), le(C) ? C.every((k) => k.length <= 1) && T() : C.length <= 1 && T();
  }, w = {
    mode: s,
    persisted: a,
    beforeEnter(C) {
      let A = o;
      if (!n.isMounted)
        if (i)
          A = m || o;
        else
          return;
      C[si] && C[si](
        !0
      );
      const T = y[S];
      T && Xi(t, T) && T.el[si] && T.el[si](), E(A, [C]);
    },
    enter(C) {
      let A = l, T = u, k = f;
      if (!n.isMounted)
        if (i)
          A = g || l, T = b || u, k = _ || f;
        else
          return;
      let I = !1;
      const K = C[Ho] = (ve) => {
        I || (I = !0, ve ? E(k, [C]) : E(T, [C]), w.delayedLeave && w.delayedLeave(), C[Ho] = void 0);
      };
      A ? N(A, [C, K]) : K();
    },
    leave(C, A) {
      const T = String(t.key);
      if (C[Ho] && C[Ho](
        !0
      ), n.isUnmounting)
        return A();
      E(c, [C]);
      let k = !1;
      const I = C[si] = (K) => {
        k || (k = !0, A(), K ? E(p, [C]) : E(d, [C]), C[si] = void 0, y[T] === t && delete y[T]);
      };
      y[T] = t, h ? N(h, [C, I]) : I();
    },
    clone(C) {
      return gf(C, e, n, r);
    }
  };
  return w;
}
function dc(t) {
  if (yo(t))
    return t = _r(t), t.children = null, t;
}
function Ad(t) {
  if (!yo(t))
    return t;
  if (process.env.NODE_ENV !== "production" && t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: n } = t;
  if (n) {
    if (e & 16)
      return n[0];
    if (e & 32 && pe(n.default))
      return n.default();
  }
}
function yf(t, e) {
  t.shapeFlag & 6 && t.component ? yf(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function wy(t, e = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === Ge ? (a.patchFlag & 128 && i++, r = r.concat(
      wy(a.children, e, o)
    )) : (e || a.type !== Nt) && r.push(o != null ? _r(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function fe(t, e) {
  return pe(t) ? /* @__PURE__ */ (() => Qe({ name: t.name }, e, { setup: t }))() : t;
}
const Ia = (t) => !!t.type.__asyncLoader, yo = (t) => t.type.__isKeepAlive;
function Y1(t, e) {
  xy(t, "a", e);
}
function X1(t, e) {
  xy(t, "da", e);
}
function xy(t, e, n = St) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (Uu(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      yo(i.parent.vnode) && K1(r, e, n, i), i = i.parent;
  }
}
function K1(t, e, n, r) {
  const i = Uu(
    e,
    t,
    r,
    !0
  );
  Ci(() => {
    oh(r[e], i);
  }, n);
}
function Uu(t, e, n = St, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      Hr();
      const o = bo(n), l = Ln(e, n, t, a);
      return o(), zr(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Hi(gh[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Yr = (t) => (e, n = St) => (!Bu || t === "sp") && Uu(t, (...r) => e(...r), n), Z1 = Yr("bm"), _n = Yr("m"), J1 = Yr("bu"), Q1 = Yr("u"), Oy = Yr("bum"), Ci = Yr("um"), eE = Yr("sp"), tE = Yr(
  "rtg"
), nE = Yr(
  "rtc"
);
function rE(t, e = St) {
  Uu("ec", t, e);
}
function An(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (le(t) || rt(t)) {
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
function My(t, e, n = {}, r, i) {
  if (ht.isCE || ht.parent && Ia(ht.parent) && ht.parent.isCE)
    return e !== "default" && (n.name = e), ie("slot", n, r && r());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), D();
  const a = s && Ty(s(n)), o = Ue(
    Ge,
    {
      key: n.key || a && a.key || `_${e}`
    },
    a || (r ? r() : []),
    a && t._ === 1 ? 64 : -2
  );
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function Ty(t) {
  return t.some((e) => ea(e) ? !(e.type === Nt || e.type === Ge && !Ty(e.children)) : !0) ? t : null;
}
const vf = (t) => t ? Yy(t) ? Wu(t) || t.proxy : vf(t.parent) : null, is = /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Rr(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Rr(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Rr(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Rr(t.refs) : t.refs,
  $parent: (t) => vf(t.parent),
  $root: (t) => vf(t.root),
  $emit: (t) => t.emit,
  $options: (t) => Oh(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    t.effect.dirty = !0, ju(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = zl.bind(t.proxy)),
  $watch: (t) => W1.bind(t)
}), xh = (t) => t === "_" || t === "$", pc = (t, e) => t !== Ke && !t.__isScriptSetup && De(t, e), Ny = {
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
        if (i !== Ke && De(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && De(u, e))
          return a[e] = 3, s[e];
        if (n !== Ke && De(n, e))
          return a[e] = 4, n[e];
        _f && (a[e] = 0);
      }
    }
    const f = is[e];
    let c, h;
    if (f)
      return e === "$attrs" ? (It(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && Xl()) : process.env.NODE_ENV !== "production" && e === "$slots" && It(t, "get", e), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (n !== Ke && De(n, e))
      return a[e] = 4, n[e];
    if (h = l.config.globalProperties, De(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && ht && (!rt(e) || e.indexOf("__v") !== 0) && (i !== Ke && xh(e[0]) && De(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return pc(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && De(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Ke && De(r, e) ? (r[e] = n, !0) : De(t.props, e) ? (process.env.NODE_ENV !== "production" && q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && q(
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
    return !!n[a] || t !== Ke && De(t, a) || pc(e, a) || (o = s[0]) && De(o, a) || De(r, a) || De(is, a) || De(i.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : De(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Ny.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function iE(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(is).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => is[n](t),
      set: yt
    });
  }), e;
}
function sE(t) {
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
function aE(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(_e(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (xh(r[0])) {
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
function oE() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? q(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let _f = !0;
function lE(t) {
  const e = Oh(t), n = t.proxy, r = t.ctx;
  _f = !1, e.beforeCreate && kd(e.beforeCreate, t, "bc");
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
    beforeDestroy: b,
    beforeUnmount: _,
    destroyed: S,
    unmounted: y,
    render: E,
    renderTracked: N,
    renderTriggered: w,
    errorCaptured: C,
    serverPrefetch: A,
    expose: T,
    inheritAttrs: k,
    components: I,
    directives: K,
    filters: ve
  } = e, L = process.env.NODE_ENV !== "production" ? oE() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = t.propsOptions;
    if (z)
      for (const Z in z)
        L("Props", Z);
  }
  if (u && uE(u, r, L), a)
    for (const z in a) {
      const Z = a[z];
      pe(Z) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, z, {
        value: Z.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[z] = Z.bind(n), process.env.NODE_ENV !== "production" && L("Methods", z)) : process.env.NODE_ENV !== "production" && q(
        `Method "${z}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !pe(i) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && lh(z) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(z))
      process.env.NODE_ENV !== "production" && q("data() should return an object.");
    else if (t.data = Fu(z), process.env.NODE_ENV !== "production")
      for (const Z in z)
        L("Data", Z), xh(Z[0]) || Object.defineProperty(r, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => z[Z],
          set: yt
        });
  }
  if (_f = !0, s)
    for (const z in s) {
      const Z = s[z], Le = pe(Z) ? Z.bind(n, n) : pe(Z.get) ? Z.get.bind(n, n) : yt;
      process.env.NODE_ENV !== "production" && Le === yt && q(`Computed property "${z}" has no getter.`);
      const Pe = !pe(Z) && pe(Z.set) ? Z.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : yt, dt = de({
        get: Le,
        set: Pe
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (Rt) => dt.value = Rt
      }), process.env.NODE_ENV !== "production" && L("Computed", z);
    }
  if (o)
    for (const z in o)
      Ly(o[z], r, n, z);
  if (l) {
    const z = pe(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((Z) => {
      Py(Z, z[Z]);
    });
  }
  f && kd(f, t, "c");
  function $(z, Z) {
    le(Z) ? Z.forEach((Le) => z(Le.bind(n))) : Z && z(Z.bind(n));
  }
  if ($(Z1, c), $(_n, h), $(J1, d), $(Q1, p), $(Y1, m), $(X1, g), $(rE, C), $(nE, N), $(tE, w), $(Oy, _), $(Ci, y), $(eE, A), le(T))
    if (T.length) {
      const z = t.exposed || (t.exposed = {});
      T.forEach((Z) => {
        Object.defineProperty(z, Z, {
          get: () => n[Z],
          set: (Le) => n[Z] = Le
        });
      });
    } else
      t.exposed || (t.exposed = {});
  E && t.render === yt && (t.render = E), k != null && (t.inheritAttrs = k), I && (t.components = I), K && (t.directives = K);
}
function uE(t, e, n = yt) {
  le(t) && (t = bf(t));
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
function kd(t, e, n) {
  Ln(
    le(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ly(t, e, n, r) {
  const i = r.includes(".") ? _y(n, r) : () => n[r];
  if (rt(t)) {
    const s = e[t];
    pe(s) ? et(i, s) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (pe(t))
    et(i, t.bind(n));
  else if (Be(t))
    if (le(t))
      t.forEach((s) => Ly(s, e, n, r));
    else {
      const s = pe(t.handler) ? t.handler.bind(n) : e[t.handler];
      pe(s) ? et(i, s, t) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && q(`Invalid watch option: "${r}"`, t);
}
function Oh(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach(
    (u) => Zl(l, u, a, !0)
  ), Zl(l, e, a)), Be(e) && s.set(e, l), l;
}
function Zl(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Zl(t, s, n, !0), i && i.forEach(
    (a) => Zl(t, a, n, !0)
  );
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = cE[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const cE = {
  data: Id,
  props: Rd,
  emits: Rd,
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
  watch: hE,
  provide: Id,
  inject: fE
};
function Id(t, e) {
  return e ? t ? function() {
    return Qe(
      pe(t) ? t.call(this, this) : t,
      pe(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function fE(t, e) {
  return wa(bf(t), bf(e));
}
function bf(t) {
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
  return t ? Qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Rd(t, e) {
  return t ? le(t) && le(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Qe(
    /* @__PURE__ */ Object.create(null),
    Dd(t),
    Dd(e != null ? e : {})
  ) : e;
}
function hE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Qe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Yt(t[r], e[r]);
  return n;
}
function Cy() {
  return {
    app: null,
    config: {
      isNativeTag: yb,
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
let dE = 0;
function pE(t, e) {
  return function(r, i = null) {
    pe(r) || (r = Qe({}, r)), i != null && !Be(i) && (process.env.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const s = Cy(), a = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = s.app = {
      _uid: dE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Yd,
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
        return process.env.NODE_ENV !== "production" && Mf(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && q(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && by(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && q(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
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
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, x1(l, Yd)), Wu(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, O1(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
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
function Py(t, e) {
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
      return n && pe(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && q(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function mE() {
  return !!(St || ht || Bs);
}
const Ay = {}, Dy = () => Object.create(Ay), ky = (t) => Object.getPrototypeOf(t) === Ay;
function gE(t, e, n, r = !1) {
  const i = {}, s = Dy();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Iy(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && $y(e || {}, i, t), n ? t.props = r ? i : r1(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function yE(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function vE(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = _e(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && yE(t)) && (r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (Gu(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (De(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const p = gn(h);
            i[p] = Ef(
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
    Iy(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !De(e, c) && ((f = un(c)) === c || !De(e, f))) && (l ? n && (n[c] !== void 0 || n[f] !== void 0) && (i[c] = Ef(
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
  u && cr(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && $y(e || {}, i, t);
}
function Iy(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (Da(l))
        continue;
      const u = e[l];
      let f;
      i && De(i, f = gn(l)) ? !s || !s.includes(f) ? n[f] = u : (o || (o = {}))[f] = u : Gu(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = _e(n), u = o || Ke;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = Ef(
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
function Ef(t, e, n, r, i, s) {
  const a = t[n];
  if (a != null) {
    const o = De(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && pe(l)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const f = bo(i);
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
function Ry(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!pe(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = Ry(c, e, !0);
      Qe(a, h), d && o.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return Be(t) && r.set(t, Gs), Gs;
  if (le(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !rt(s[f]) && q("props must be strings when using array syntax.", s[f]);
      const c = gn(s[f]);
      $d(c) && (a[c] = Ke);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Be(s) && q("invalid props options", s);
    for (const f in s) {
      const c = gn(f);
      if ($d(c)) {
        const h = s[f], d = a[c] = le(h) || pe(h) ? { type: h } : Qe({}, h);
        if (d) {
          const p = Vd(Boolean, d.type), m = Vd(String, d.type);
          d[0] = p > -1, d[1] = m < 0 || p < m, (p > -1 || De(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return Be(t) && r.set(t, u), u;
}
function $d(t) {
  return t[0] !== "$" && !Da(t) ? !0 : (process.env.NODE_ENV !== "production" && q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Sf(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function Fd(t, e) {
  return Sf(t) === Sf(e);
}
function Vd(t, e) {
  return le(e) ? e.findIndex((n) => Fd(n, t)) : pe(e) && Fd(e, t) ? 0 : -1;
}
function $y(t, e, n) {
  const r = _e(e), i = n.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && _E(
      s,
      r[s],
      a,
      process.env.NODE_ENV !== "production" ? Rr(r) : r,
      !De(t, s) && !De(t, un(s))
    );
  }
}
function _E(t, e, n, r, i) {
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
        const { valid: d, expectedType: p } = EE(e, f[h]);
        c.push(p || ""), u = d;
      }
      if (!u) {
        q(SE(t, e, c));
        return;
      }
    }
    o && !o(e, r) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const bE = /* @__PURE__ */ qr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function EE(t, e) {
  let n;
  const r = Sf(e);
  if (bE(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Be(t) : r === "Array" ? n = le(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function SE(t, e, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(ls).join(" | ")}`;
  const i = n[0], s = uh(e), a = jd(e, i), o = jd(e, s);
  return n.length === 1 && Gd(i) && !wE(i, s) && (r += ` with value ${a}`), r += `, got ${s} `, Gd(s) && (r += `with value ${o}.`), r;
}
function jd(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Gd(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function wE(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Fy = (t) => t[0] === "_" || t === "$stable", Mh = (t) => le(t) ? t.map(Wn) : [Wn(t)], xE = (t, e, n) => {
  if (e._n)
    return e;
  const r = _i((...i) => (process.env.NODE_ENV !== "production" && St && (!n || n.root === St.root) && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Mh(e(...i))), n);
  return r._c = !1, r;
}, Vy = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Fy(i))
      continue;
    const s = t[i];
    if (pe(s))
      e[i] = xE(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Mh(s);
      e[i] = () => a;
    }
  }
}, jy = (t, e) => {
  process.env.NODE_ENV !== "production" && !yo(t.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Mh(e);
  t.slots.default = () => n;
}, OE = (t, e) => {
  const n = t.slots = Dy();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (Qe(n, e), kg(n, "_", r)) : Vy(e, n);
  } else
    e && jy(t, e);
}, ME = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, a = Ke;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && vi ? (Qe(i, e), cr(t, "set", "$slots")) : n && o === 1 ? s = !1 : (Qe(i, e), !n && o === 1 && delete i._) : (s = !e.$stable, Vy(e, i)), a = e;
  } else
    e && (jy(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !Fy(o) && a[o] == null && delete i[o];
};
function wf(t, e, n, r, i = !1) {
  if (le(t)) {
    t.forEach(
      (h, d) => wf(
        h,
        e && (le(e) ? e[d] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Ia(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Wu(r.component) || r.component.proxy : r.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, f = o.refs === Ke ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (rt(u) ? (f[u] = null, De(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), pe(l))
    $r(l, o, 12, [a, f]);
  else {
    const h = rt(l), d = Ye(l);
    if (h || d) {
      const p = () => {
        if (t.f) {
          const m = h ? De(c, l) ? c[l] : f[l] : l.value;
          i ? le(m) && oh(m, s) : le(m) ? m.includes(s) || m.push(s) : h ? (f[l] = [s], De(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, De(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (p.id = -1, on(p, n)) : p();
    } else
      process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let da, ci;
function Ar(t, e) {
  t.appContext.config.performance && Jl() && ci.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && L1(t, e, Jl() ? ci.now() : Date.now());
}
function Dr(t, e) {
  if (t.appContext.config.performance && Jl()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    ci.mark(r), ci.measure(
      `<${qu(t, t.type)}> ${e}`,
      n,
      r
    ), ci.clearMarks(n), ci.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && C1(t, e, Jl() ? ci.now() : Date.now());
}
function Jl() {
  return da !== void 0 || (typeof window < "u" && window.performance ? (da = !0, ci = window.performance) : da = !1), da;
}
function TE() {
  const t = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && t.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Iu().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const on = G1;
function NE(t) {
  return LE(t);
}
function LE(t, e) {
  TE();
  const n = Iu();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && _h(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    insertStaticContent: p
  } = t, m = (v, x, R, V = null, j = null, W = null, J = void 0, B = null, X = process.env.NODE_ENV !== "production" && vi ? !1 : !!x.dynamicChildren) => {
    if (v === x)
      return;
    v && !Xi(v, x) && (V = tn(v), Te(v, j, W, !0), v = null), x.patchFlag === -2 && (X = !1, x.dynamicChildren = null);
    const { type: U, ref: ne, shapeFlag: ue } = x;
    switch (U) {
      case vo:
        g(v, x, R, V);
        break;
      case Nt:
        b(v, x, R, V);
        break;
      case xl:
        v == null ? _(x, R, V, J) : process.env.NODE_ENV !== "production" && S(v, x, R, J);
        break;
      case Ge:
        K(
          v,
          x,
          R,
          V,
          j,
          W,
          J,
          B,
          X
        );
        break;
      default:
        ue & 1 ? N(
          v,
          x,
          R,
          V,
          j,
          W,
          J,
          B,
          X
        ) : ue & 6 ? ve(
          v,
          x,
          R,
          V,
          j,
          W,
          J,
          B,
          X
        ) : ue & 64 || ue & 128 ? U.process(
          v,
          x,
          R,
          V,
          j,
          W,
          J,
          B,
          X,
          Ct
        ) : process.env.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    ne != null && j && wf(ne, v && v.ref, W, x || v, !x);
  }, g = (v, x, R, V) => {
    if (v == null)
      r(
        x.el = o(x.children),
        R,
        V
      );
    else {
      const j = x.el = v.el;
      x.children !== v.children && u(j, x.children);
    }
  }, b = (v, x, R, V) => {
    v == null ? r(
      x.el = l(x.children || ""),
      R,
      V
    ) : x.el = v.el;
  }, _ = (v, x, R, V) => {
    [v.el, v.anchor] = p(
      v.children,
      x,
      R,
      V,
      v.el,
      v.anchor
    );
  }, S = (v, x, R, V) => {
    if (x.children !== v.children) {
      const j = h(v.anchor);
      E(v), [x.el, x.anchor] = p(
        x.children,
        R,
        j,
        V
      );
    } else
      x.el = v.el, x.anchor = v.anchor;
  }, y = ({ el: v, anchor: x }, R, V) => {
    let j;
    for (; v && v !== x; )
      j = h(v), r(v, R, V), v = j;
    r(x, R, V);
  }, E = ({ el: v, anchor: x }) => {
    let R;
    for (; v && v !== x; )
      R = h(v), i(v), v = R;
    i(x);
  }, N = (v, x, R, V, j, W, J, B, X) => {
    x.type === "svg" ? J = "svg" : x.type === "math" && (J = "mathml"), v == null ? w(
      x,
      R,
      V,
      j,
      W,
      J,
      B,
      X
    ) : T(
      v,
      x,
      j,
      W,
      J,
      B,
      X
    );
  }, w = (v, x, R, V, j, W, J, B) => {
    let X, U;
    const { props: ne, shapeFlag: ue, transition: ae, dirs: he } = v;
    if (X = v.el = a(
      v.type,
      W,
      ne && ne.is,
      ne
    ), ue & 8 ? f(X, v.children) : ue & 16 && A(
      v.children,
      X,
      null,
      V,
      j,
      mc(v, W),
      J,
      B
    ), he && Ri(v, null, V, "created"), C(X, v, v.scopeId, J, V), ne) {
      for (const $e in ne)
        $e !== "value" && !Da($e) && s(
          X,
          $e,
          null,
          ne[$e],
          W,
          v.children,
          V,
          j,
          ke
        );
      "value" in ne && s(X, "value", null, ne.value, W), (U = ne.onVnodeBeforeMount) && tr(U, V, v);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(X, "__vnode", {
      value: v,
      enumerable: !1
    }), Object.defineProperty(X, "__vueParentComponent", {
      value: V,
      enumerable: !1
    })), he && Ri(v, null, V, "beforeMount");
    const xe = CE(j, ae);
    xe && ae.beforeEnter(X), r(X, x, R), ((U = ne && ne.onVnodeMounted) || xe || he) && on(() => {
      U && tr(U, V, v), xe && ae.enter(X), he && Ri(v, null, V, "mounted");
    }, j);
  }, C = (v, x, R, V, j) => {
    if (R && d(v, R), V)
      for (let W = 0; W < V.length; W++)
        d(v, V[W]);
    if (j) {
      let W = j.subTree;
      if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = Eh(W.children) || W), x === W) {
        const J = j.vnode;
        C(
          v,
          J,
          J.scopeId,
          J.slotScopeIds,
          j.parent
        );
      }
    }
  }, A = (v, x, R, V, j, W, J, B, X = 0) => {
    for (let U = X; U < v.length; U++) {
      const ne = v[U] = B ? ai(v[U]) : Wn(v[U]);
      m(
        null,
        ne,
        x,
        R,
        V,
        j,
        W,
        J,
        B
      );
    }
  }, T = (v, x, R, V, j, W, J) => {
    const B = x.el = v.el;
    let { patchFlag: X, dynamicChildren: U, dirs: ne } = x;
    X |= v.patchFlag & 16;
    const ue = v.props || Ke, ae = x.props || Ke;
    let he;
    if (R && $i(R, !1), (he = ae.onVnodeBeforeUpdate) && tr(he, R, x, v), ne && Ri(x, v, R, "beforeUpdate"), R && $i(R, !0), process.env.NODE_ENV !== "production" && vi && (X = 0, J = !1, U = null), U ? (k(
      v.dynamicChildren,
      U,
      B,
      R,
      V,
      mc(x, j),
      W
    ), process.env.NODE_ENV !== "production" && Ra(v, x)) : J || Le(
      v,
      x,
      B,
      null,
      R,
      V,
      mc(x, j),
      W,
      !1
    ), X > 0) {
      if (X & 16)
        I(
          B,
          x,
          ue,
          ae,
          R,
          V,
          j
        );
      else if (X & 2 && ue.class !== ae.class && s(B, "class", null, ae.class, j), X & 4 && s(B, "style", ue.style, ae.style, j), X & 8) {
        const xe = x.dynamicProps;
        for (let $e = 0; $e < xe.length; $e++) {
          const Je = xe[$e], pt = ue[Je], zt = ae[Je];
          (zt !== pt || Je === "value") && s(
            B,
            Je,
            pt,
            zt,
            j,
            v.children,
            R,
            V,
            ke
          );
        }
      }
      X & 1 && v.children !== x.children && f(B, x.children);
    } else
      !J && U == null && I(
        B,
        x,
        ue,
        ae,
        R,
        V,
        j
      );
    ((he = ae.onVnodeUpdated) || ne) && on(() => {
      he && tr(he, R, x, v), ne && Ri(x, v, R, "updated");
    }, V);
  }, k = (v, x, R, V, j, W, J) => {
    for (let B = 0; B < x.length; B++) {
      const X = v[B], U = x[B], ne = X.el && (X.type === Ge || !Xi(X, U) || X.shapeFlag & 70) ? c(X.el) : R;
      m(
        X,
        U,
        ne,
        null,
        V,
        j,
        W,
        J,
        !0
      );
    }
  }, I = (v, x, R, V, j, W, J) => {
    if (R !== V) {
      if (R !== Ke)
        for (const B in R)
          !Da(B) && !(B in V) && s(
            v,
            B,
            R[B],
            null,
            J,
            x.children,
            j,
            W,
            ke
          );
      for (const B in V) {
        if (Da(B))
          continue;
        const X = V[B], U = R[B];
        X !== U && B !== "value" && s(
          v,
          B,
          U,
          X,
          J,
          x.children,
          j,
          W,
          ke
        );
      }
      "value" in V && s(v, "value", R.value, V.value, J);
    }
  }, K = (v, x, R, V, j, W, J, B, X) => {
    const U = x.el = v ? v.el : o(""), ne = x.anchor = v ? v.anchor : o("");
    let { patchFlag: ue, dynamicChildren: ae, slotScopeIds: he } = x;
    process.env.NODE_ENV !== "production" && (vi || ue & 2048) && (ue = 0, X = !1, ae = null), he && (B = B ? B.concat(he) : he), v == null ? (r(U, R, V), r(ne, R, V), A(
      x.children || [],
      R,
      ne,
      j,
      W,
      J,
      B,
      X
    )) : ue > 0 && ue & 64 && ae && v.dynamicChildren ? (k(
      v.dynamicChildren,
      ae,
      R,
      j,
      W,
      J,
      B
    ), process.env.NODE_ENV !== "production" ? Ra(v, x) : (x.key != null || j && x === j.subTree) && Ra(
      v,
      x,
      !0
    )) : Le(
      v,
      x,
      R,
      ne,
      j,
      W,
      J,
      B,
      X
    );
  }, ve = (v, x, R, V, j, W, J, B, X) => {
    x.slotScopeIds = B, v == null ? x.shapeFlag & 512 ? j.ctx.activate(
      x,
      R,
      V,
      J,
      X
    ) : L(
      x,
      R,
      V,
      j,
      W,
      J,
      X
    ) : $(v, x, X);
  }, L = (v, x, R, V, j, W, J) => {
    const B = v.component = GE(
      v,
      V,
      j
    );
    if (process.env.NODE_ENV !== "production" && B.type.__hmrId && b1(B), process.env.NODE_ENV !== "production" && (Sl(v), Ar(B, "mount")), yo(v) && (B.ctx.renderer = Ct), process.env.NODE_ENV !== "production" && Ar(B, "init"), BE(B), process.env.NODE_ENV !== "production" && Dr(B, "init"), B.asyncDep) {
      if (j && j.registerDep(B, z), !v.el) {
        const X = B.subTree = ie(Nt);
        b(null, X, x, R);
      }
    } else
      z(
        B,
        v,
        x,
        R,
        j,
        W,
        J
      );
    process.env.NODE_ENV !== "production" && (wl(), Dr(B, "mount"));
  }, $ = (v, x, R) => {
    const V = x.component = v.component;
    if (I1(v, x, R))
      if (V.asyncDep && !V.asyncResolved) {
        process.env.NODE_ENV !== "production" && Sl(x), Z(V, x, R), process.env.NODE_ENV !== "production" && wl();
        return;
      } else
        V.next = x, v1(V.update), V.effect.dirty = !0, V.update();
    else
      x.el = v.el, V.vnode = x;
  }, z = (v, x, R, V, j, W, J) => {
    const B = () => {
      if (v.isMounted) {
        let { next: ne, bu: ue, u: ae, parent: he, vnode: xe } = v;
        {
          const Tr = Gy(v);
          if (Tr) {
            ne && (ne.el = xe.el, Z(v, ne, J)), Tr.asyncDep.then(() => {
              v.isUnmounted || B();
            });
            return;
          }
        }
        let $e = ne, Je;
        process.env.NODE_ENV !== "production" && Sl(ne || v.vnode), $i(v, !1), ne ? (ne.el = xe.el, Z(v, ne, J)) : ne = xe, ue && ha(ue), (Je = ne.props && ne.props.onVnodeBeforeUpdate) && tr(Je, he, ne, xe), $i(v, !0), process.env.NODE_ENV !== "production" && Ar(v, "render");
        const pt = hc(v);
        process.env.NODE_ENV !== "production" && Dr(v, "render");
        const zt = v.subTree;
        v.subTree = pt, process.env.NODE_ENV !== "production" && Ar(v, "patch"), m(
          zt,
          pt,
          c(zt.el),
          tn(zt),
          v,
          j,
          W
        ), process.env.NODE_ENV !== "production" && Dr(v, "patch"), ne.el = pt.el, $e === null && R1(v, pt.el), ae && on(ae, j), (Je = ne.props && ne.props.onVnodeUpdated) && on(
          () => tr(Je, he, ne, xe),
          j
        ), process.env.NODE_ENV !== "production" && dy(v), process.env.NODE_ENV !== "production" && wl();
      } else {
        let ne;
        const { el: ue, props: ae } = x, { bm: he, m: xe, parent: $e } = v, Je = Ia(x);
        if ($i(v, !1), he && ha(he), !Je && (ne = ae && ae.onVnodeBeforeMount) && tr(ne, $e, x), $i(v, !0), ue && Mr) {
          const pt = () => {
            process.env.NODE_ENV !== "production" && Ar(v, "render"), v.subTree = hc(v), process.env.NODE_ENV !== "production" && Dr(v, "render"), process.env.NODE_ENV !== "production" && Ar(v, "hydrate"), Mr(
              ue,
              v.subTree,
              v,
              j,
              null
            ), process.env.NODE_ENV !== "production" && Dr(v, "hydrate");
          };
          Je ? x.type.__asyncLoader().then(
            () => !v.isUnmounted && pt()
          ) : pt();
        } else {
          process.env.NODE_ENV !== "production" && Ar(v, "render");
          const pt = v.subTree = hc(v);
          process.env.NODE_ENV !== "production" && Dr(v, "render"), process.env.NODE_ENV !== "production" && Ar(v, "patch"), m(
            null,
            pt,
            R,
            V,
            v,
            j,
            W
          ), process.env.NODE_ENV !== "production" && Dr(v, "patch"), x.el = pt.el;
        }
        if (xe && on(xe, j), !Je && (ne = ae && ae.onVnodeMounted)) {
          const pt = x;
          on(
            () => tr(ne, $e, pt),
            j
          );
        }
        (x.shapeFlag & 256 || $e && Ia($e.vnode) && $e.vnode.shapeFlag & 256) && v.a && on(v.a, j), v.isMounted = !0, process.env.NODE_ENV !== "production" && M1(v), x = R = V = null;
      }
    }, X = v.effect = new fh(
      B,
      yt,
      () => ju(U),
      v.scope
    ), U = v.update = () => {
      X.dirty && X.run();
    };
    U.id = v.uid, $i(v, !0), process.env.NODE_ENV !== "production" && (X.onTrack = v.rtc ? (ne) => ha(v.rtc, ne) : void 0, X.onTrigger = v.rtg ? (ne) => ha(v.rtg, ne) : void 0, U.ownerInstance = v), U();
  }, Z = (v, x, R) => {
    x.component = v;
    const V = v.vnode.props;
    v.vnode = x, v.next = null, vE(v, x.props, V, R), ME(v, x.children, R), Hr(), Td(v), zr();
  }, Le = (v, x, R, V, j, W, J, B, X = !1) => {
    const U = v && v.children, ne = v ? v.shapeFlag : 0, ue = x.children, { patchFlag: ae, shapeFlag: he } = x;
    if (ae > 0) {
      if (ae & 128) {
        dt(
          U,
          ue,
          R,
          V,
          j,
          W,
          J,
          B,
          X
        );
        return;
      } else if (ae & 256) {
        Pe(
          U,
          ue,
          R,
          V,
          j,
          W,
          J,
          B,
          X
        );
        return;
      }
    }
    he & 8 ? (ne & 16 && ke(U, j, W), ue !== U && f(R, ue)) : ne & 16 ? he & 16 ? dt(
      U,
      ue,
      R,
      V,
      j,
      W,
      J,
      B,
      X
    ) : ke(U, j, W, !0) : (ne & 8 && f(R, ""), he & 16 && A(
      ue,
      R,
      V,
      j,
      W,
      J,
      B,
      X
    ));
  }, Pe = (v, x, R, V, j, W, J, B, X) => {
    v = v || Gs, x = x || Gs;
    const U = v.length, ne = x.length, ue = Math.min(U, ne);
    let ae;
    for (ae = 0; ae < ue; ae++) {
      const he = x[ae] = X ? ai(x[ae]) : Wn(x[ae]);
      m(
        v[ae],
        he,
        R,
        null,
        j,
        W,
        J,
        B,
        X
      );
    }
    U > ne ? ke(
      v,
      j,
      W,
      !0,
      !1,
      ue
    ) : A(
      x,
      R,
      V,
      j,
      W,
      J,
      B,
      X,
      ue
    );
  }, dt = (v, x, R, V, j, W, J, B, X) => {
    let U = 0;
    const ne = x.length;
    let ue = v.length - 1, ae = ne - 1;
    for (; U <= ue && U <= ae; ) {
      const he = v[U], xe = x[U] = X ? ai(x[U]) : Wn(x[U]);
      if (Xi(he, xe))
        m(
          he,
          xe,
          R,
          null,
          j,
          W,
          J,
          B,
          X
        );
      else
        break;
      U++;
    }
    for (; U <= ue && U <= ae; ) {
      const he = v[ue], xe = x[ae] = X ? ai(x[ae]) : Wn(x[ae]);
      if (Xi(he, xe))
        m(
          he,
          xe,
          R,
          null,
          j,
          W,
          J,
          B,
          X
        );
      else
        break;
      ue--, ae--;
    }
    if (U > ue) {
      if (U <= ae) {
        const he = ae + 1, xe = he < ne ? x[he].el : V;
        for (; U <= ae; )
          m(
            null,
            x[U] = X ? ai(x[U]) : Wn(x[U]),
            R,
            xe,
            j,
            W,
            J,
            B,
            X
          ), U++;
      }
    } else if (U > ae)
      for (; U <= ue; )
        Te(v[U], j, W, !0), U++;
    else {
      const he = U, xe = U, $e = /* @__PURE__ */ new Map();
      for (U = xe; U <= ae; U++) {
        const ut = x[U] = X ? ai(x[U]) : Wn(x[U]);
        ut.key != null && (process.env.NODE_ENV !== "production" && $e.has(ut.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), $e.set(ut.key, U));
      }
      let Je, pt = 0;
      const zt = ae - xe + 1;
      let Tr = !1, ki = 0;
      const er = new Array(zt);
      for (U = 0; U < zt; U++)
        er[U] = 0;
      for (U = he; U <= ue; U++) {
        const ut = v[U];
        if (pt >= zt) {
          Te(ut, j, W, !0);
          continue;
        }
        let nn;
        if (ut.key != null)
          nn = $e.get(ut.key);
        else
          for (Je = xe; Je <= ae; Je++)
            if (er[Je - xe] === 0 && Xi(ut, x[Je])) {
              nn = Je;
              break;
            }
        nn === void 0 ? Te(ut, j, W, !0) : (er[nn - xe] = U + 1, nn >= ki ? ki = nn : Tr = !0, m(
          ut,
          x[nn],
          R,
          null,
          j,
          W,
          J,
          B,
          X
        ), pt++);
      }
      const bn = Tr ? PE(er) : Gs;
      for (Je = bn.length - 1, U = zt - 1; U >= 0; U--) {
        const ut = xe + U, nn = x[ut], Es = ut + 1 < ne ? x[ut + 1].el : V;
        er[U] === 0 ? m(
          null,
          nn,
          R,
          Es,
          j,
          W,
          J,
          B,
          X
        ) : Tr && (Je < 0 || U !== bn[Je] ? Rt(nn, R, Es, 2) : Je--);
      }
    }
  }, Rt = (v, x, R, V, j = null) => {
    const { el: W, type: J, transition: B, children: X, shapeFlag: U } = v;
    if (U & 6) {
      Rt(v.component.subTree, x, R, V);
      return;
    }
    if (U & 128) {
      v.suspense.move(x, R, V);
      return;
    }
    if (U & 64) {
      J.move(v, x, R, Ct);
      return;
    }
    if (J === Ge) {
      r(W, x, R);
      for (let ue = 0; ue < X.length; ue++)
        Rt(X[ue], x, R, V);
      r(v.anchor, x, R);
      return;
    }
    if (J === xl) {
      y(v, x, R);
      return;
    }
    if (V !== 2 && U & 1 && B)
      if (V === 0)
        B.beforeEnter(W), r(W, x, R), on(() => B.enter(W), j);
      else {
        const { leave: ue, delayLeave: ae, afterLeave: he } = B, xe = () => r(W, x, R), $e = () => {
          ue(W, () => {
            xe(), he && he();
          });
        };
        ae ? ae(W, xe, $e) : $e();
      }
    else
      r(W, x, R);
  }, Te = (v, x, R, V = !1, j = !1) => {
    const {
      type: W,
      props: J,
      ref: B,
      children: X,
      dynamicChildren: U,
      shapeFlag: ne,
      patchFlag: ue,
      dirs: ae
    } = v;
    if (B != null && wf(B, null, R, v, !0), ne & 256) {
      x.ctx.deactivate(v);
      return;
    }
    const he = ne & 1 && ae, xe = !Ia(v);
    let $e;
    if (xe && ($e = J && J.onVnodeBeforeUnmount) && tr($e, x, v), ne & 6)
      Zn(v.component, R, V);
    else {
      if (ne & 128) {
        v.suspense.unmount(R, V);
        return;
      }
      he && Ri(v, null, x, "beforeUnmount"), ne & 64 ? v.type.remove(
        v,
        x,
        R,
        j,
        Ct,
        V
      ) : U && (W !== Ge || ue > 0 && ue & 64) ? ke(
        U,
        x,
        R,
        !1,
        !0
      ) : (W === Ge && ue & 384 || !j && ne & 16) && ke(X, x, R), V && Lt(v);
    }
    (xe && ($e = J && J.onVnodeUnmounted) || he) && on(() => {
      $e && tr($e, x, v), he && Ri(v, null, x, "unmounted");
    }, R);
  }, Lt = (v) => {
    const { type: x, el: R, anchor: V, transition: j } = v;
    if (x === Ge) {
      process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && j && !j.persisted ? v.children.forEach((J) => {
        J.type === Nt ? i(J.el) : Lt(J);
      }) : it(R, V);
      return;
    }
    if (x === xl) {
      E(v);
      return;
    }
    const W = () => {
      i(R), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (v.shapeFlag & 1 && j && !j.persisted) {
      const { leave: J, delayLeave: B } = j, X = () => J(R, W);
      B ? B(v.el, W, X) : X();
    } else
      W();
  }, it = (v, x) => {
    let R;
    for (; v !== x; )
      R = h(v), i(v), v = R;
    i(x);
  }, Zn = (v, x, R) => {
    process.env.NODE_ENV !== "production" && v.type.__hmrId && E1(v);
    const { bum: V, scope: j, update: W, subTree: J, um: B } = v;
    V && ha(V), j.stop(), W && (W.active = !1, Te(J, v, x, R)), B && on(B, x), on(() => {
      v.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve()), process.env.NODE_ENV !== "production" && N1(v);
  }, ke = (v, x, R, V = !1, j = !1, W = 0) => {
    for (let J = W; J < v.length; J++)
      Te(v[J], x, R, V, j);
  }, tn = (v) => v.shapeFlag & 6 ? tn(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : h(v.anchor || v.el);
  let Jn = !1;
  const Or = (v, x, R) => {
    v == null ? x._vnode && Te(x._vnode, null, null, !0) : m(
      x._vnode || null,
      v,
      x,
      null,
      null,
      null,
      R
    ), Jn || (Jn = !0, Td(), cy(), Jn = !1), x._vnode = v;
  }, Ct = {
    p: m,
    um: Te,
    m: Rt,
    r: Lt,
    mt: L,
    mc: A,
    pc: Le,
    pbc: k,
    n: tn,
    o: t
  };
  let Qn, Mr;
  return e && ([Qn, Mr] = e(
    Ct
  )), {
    render: Or,
    hydrate: Qn,
    createApp: pE(Or, Qn)
  };
}
function mc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function $i({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function CE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Ra(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (le(r) && le(i))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = ai(i[s]), o.el = a.el), n || Ra(a, o)), o.type === vo && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Nt && !o.el && (o.el = a.el);
    }
}
function PE(t) {
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
function Gy(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Gy(e);
}
const AE = (t) => t.__isTeleport, qs = (t) => t && (t.disabled || t.disabled === ""), Ud = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Bd = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, xf = (t, e) => {
  const n = t && t.to;
  if (rt(n))
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
      o: { insert: d, querySelector: p, createText: m, createComment: g }
    } = u, b = qs(e.props);
    let { shapeFlag: _, children: S, dynamicChildren: y } = e;
    if (process.env.NODE_ENV !== "production" && vi && (l = !1, y = null), t == null) {
      const E = e.el = process.env.NODE_ENV !== "production" ? g("teleport start") : m(""), N = e.anchor = process.env.NODE_ENV !== "production" ? g("teleport end") : m("");
      d(E, n, r), d(N, n, r);
      const w = e.target = xf(e.props, p), C = e.targetAnchor = m("");
      w ? (d(C, w), a === "svg" || Ud(w) ? a = "svg" : (a === "mathml" || Bd(w)) && (a = "mathml")) : process.env.NODE_ENV !== "production" && !b && q("Invalid Teleport target on mount:", w, `(${typeof w})`);
      const A = (T, k) => {
        _ & 16 && f(
          S,
          T,
          k,
          i,
          s,
          a,
          o,
          l
        );
      };
      b ? A(n, N) : w && A(w, C);
    } else {
      e.el = t.el;
      const E = e.anchor = t.anchor, N = e.target = t.target, w = e.targetAnchor = t.targetAnchor, C = qs(t.props), A = C ? n : N, T = C ? E : w;
      if (a === "svg" || Ud(N) ? a = "svg" : (a === "mathml" || Bd(N)) && (a = "mathml"), y ? (h(
        t.dynamicChildren,
        y,
        A,
        i,
        s,
        a,
        o
      ), Ra(t, e, !0)) : l || c(
        t,
        e,
        A,
        T,
        i,
        s,
        a,
        o,
        !1
      ), b)
        C ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : zo(
          e,
          n,
          E,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const k = e.target = xf(
          e.props,
          p
        );
        k ? zo(
          e,
          k,
          null,
          u,
          0
        ) : process.env.NODE_ENV !== "production" && q(
          "Invalid Teleport target on update:",
          N,
          `(${typeof N})`
        );
      } else
        C && zo(
          e,
          N,
          w,
          u,
          1
        );
    }
    By(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), a && s(u), o & 16) {
      const d = a || !qs(h);
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
  move: zo,
  hydrate: kE
};
function zo(t, e, n, { o: { insert: r }, m: i }, s = 2) {
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
function kE(t, e, n, r, i, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l }
}, u) {
  const f = e.target = xf(
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
    By(e);
  }
  return e.anchor && a(e.anchor);
}
const Uy = DE;
function By(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n && n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const Ge = Symbol.for("v-fgt"), vo = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), xl = Symbol.for("v-stc"), $a = [];
let Hn = null;
function D(t = !1) {
  $a.push(Hn = t ? null : []);
}
function IE() {
  $a.pop(), Hn = $a[$a.length - 1] || null;
}
let eo = 1;
function Wd(t) {
  eo += t;
}
function Wy(t) {
  return t.dynamicChildren = eo > 0 ? Hn || Gs : null, IE(), eo > 0 && Hn && Hn.push(t), t;
}
function G(t, e, n, r, i, s) {
  return Wy(
    P(
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
  return Wy(
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
function Xi(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && Ps.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const RE = (...t) => Hy(
  ...t
), qy = ({ key: t }) => t != null ? t : null, Ol = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? rt(t) || Ye(t) || pe(t) ? { i: ht, r: t, k: e, f: !!n } : t : null);
function P(t, e = null, n = null, r = 0, i = null, s = t === Ge ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && qy(e),
    ref: e && Ol(e),
    scopeId: gy,
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
  return o ? (Th(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= rt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), eo > 0 && !a && Hn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Hn.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? RE : Hy;
function Hy(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === V1) && (process.env.NODE_ENV !== "production" && !t && q(`Invalid vnode type when creating vnode: ${t}.`), t = Nt), ea(t)) {
    const o = _r(
      t,
      e,
      !0
    );
    return n && Th(o, n), eo > 0 && !s && Hn && (o.shapeFlag & 6 ? Hn[Hn.indexOf(t)] = o : Hn.push(o)), o.patchFlag |= -2, o;
  }
  if (Ky(t) && (t = t.__vccOpts), e) {
    e = $E(e);
    let { class: o, style: l } = e;
    o && !rt(o) && (e.class = Ae(o)), Be(l) && (Hl(l) && !le(l) && (l = Qe({}, l)), e.style = Li(l));
  }
  const a = rt(t) ? 1 : j1(t) ? 128 : AE(t) ? 64 : Be(t) ? 4 : pe(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Hl(t) && (t = _e(t), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), P(
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
function $E(t) {
  return t ? Hl(t) || ky(t) ? Qe({}, t) : t : null;
}
function _r(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: a } = t, o = e ? FE(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && qy(o),
    ref: e && e.ref ? n && i ? le(i) ? i.concat(Ol(e)) : [i, Ol(e)] : Ol(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && le(a) ? a.map(zy) : a,
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
    ssContent: t.ssContent && _r(t.ssContent),
    ssFallback: t.ssFallback && _r(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function zy(t) {
  const e = _r(t);
  return le(t.children) && (e.children = t.children.map(zy)), e;
}
function Ql(t = " ", e = 0) {
  return ie(vo, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (D(), Ue(Nt, null, t)) : ie(Nt, null, t);
}
function Wn(t) {
  return t == null || typeof t == "boolean" ? ie(Nt) : le(t) ? ie(
    Ge,
    null,
    t.slice()
  ) : typeof t == "object" ? ai(t) : ie(vo, null, String(t));
}
function ai(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : _r(t);
}
function Th(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (le(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Th(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !ky(e) ? e._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    pe(e) ? (e = { default: e, _ctx: ht }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Ql(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function FE(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Ae([e.class, r.class]));
      else if (i === "style")
        e.style = Li([e.style, r.style]);
      else if (po(i)) {
        const s = e[i], a = r[i];
        a && s !== a && !(le(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function tr(t, e, n, r = null) {
  Ln(t, e, 7, [
    n,
    r
  ]);
}
const VE = Cy();
let jE = 0;
function GE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || VE, s = {
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
    scope: new $g(
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
    propsOptions: Ry(r, i),
    emitsOptions: my(r, i),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = iE(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = A1.bind(null, s), t.ce && t.ce(s), s;
}
let St = null;
const _o = () => St || ht;
let eu, Of;
{
  const t = Iu(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  eu = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => St = n
  ), Of = e(
    "__VUE_SSR_SETTERS__",
    (n) => Bu = n
  );
}
const bo = (t) => {
  const e = St;
  return eu(t), t.scope.on(), () => {
    t.scope.off(), eu(e);
  };
}, qd = () => {
  St && St.scope.off(), eu(null);
}, UE = /* @__PURE__ */ qr("slot,component");
function Mf(t, { isNativeTag: e }) {
  (UE(t) || e(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Yy(t) {
  return t.vnode.shapeFlag & 4;
}
let Bu = !1;
function BE(t, e = !1) {
  e && Of(e);
  const { props: n, children: r } = t.vnode, i = Yy(t);
  gE(t, n, i, e), OE(t, r);
  const s = i ? WE(t, e) : void 0;
  return e && Of(!1), s;
}
function WE(t, e) {
  var n;
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Mf(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let a = 0; a < s.length; a++)
        Mf(s[a], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let a = 0; a < s.length; a++)
        by(s[a]);
    }
    r.compilerOptions && qE() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Ny), process.env.NODE_ENV !== "production" && sE(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? zE(t) : null, a = bo(t);
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
    if (zr(), a(), lh(o)) {
      if (o.then(qd, qd), e)
        return o.then((l) => {
          Hd(t, l, e);
        }).catch((l) => {
          mo(l, t, 0);
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Hd(t, o, e);
  } else
    Xy(t, e);
}
function Hd(t, e, n) {
  pe(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Be(e) ? (process.env.NODE_ENV !== "production" && ea(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = iy(e), process.env.NODE_ENV !== "production" && aE(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Xy(t, n);
}
let Tf;
const qE = () => !Tf;
function Xy(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Tf && !r.render) {
      const i = r.template || Oh(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Ar(t, "compile");
        const { isCustomElement: s, compilerOptions: a } = t.appContext.config, { delimiters: o, compilerOptions: l } = r, u = Qe(
          Qe(
            {
              isCustomElement: s,
              delimiters: o
            },
            a
          ),
          l
        );
        r.render = Tf(i, u), process.env.NODE_ENV !== "production" && Dr(t, "compile");
      }
    }
    t.render = r.render || yt;
  }
  {
    const i = bo(t);
    Hr();
    try {
      lE(t);
    } finally {
      zr(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && t.render === yt && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const zd = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return Xl(), It(t, "get", ""), t[e];
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
function HE(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return It(t, "get", "$slots"), e[n];
    }
  }));
}
function zE(t) {
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
        return n || (n = new Proxy(t.attrs, zd));
      },
      get slots() {
        return HE(t);
      },
      get emit() {
        return (r, ...i) => t.emit(r, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, zd),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function Wu(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(iy(pi(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in is)
          return is[n](t);
      },
      has(e, n) {
        return n in e || n in is;
      }
    }));
}
const YE = /(?:^|[-_])(\w)/g, XE = (t) => t.replace(YE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Nh(t, e = !0) {
  return pe(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function qu(t, e, n = !1) {
  let r = Nh(e);
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
  return r ? XE(r) : n ? "App" : "Anonymous";
}
function Ky(t) {
  return pe(t) && "__vccOpts" in t;
}
const de = (t, e) => {
  const n = s1(t, e, Bu);
  if (process.env.NODE_ENV !== "production") {
    const r = _o();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Zy(t, e, n) {
  const r = arguments.length;
  return r === 2 ? Be(e) && !le(e) ? ea(e) ? ie(t, null, [e]) : ie(t, e) : ie(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ea(n) && (n = [n]), ie(t, e, n));
}
function KE() {
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
      ] : fr(c) ? [
        "div",
        {},
        ["span", t, ns(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${us(c) ? " (readonly)" : ""}`
      ] : us(c) ? [
        "div",
        {},
        ["span", t, ns(c) ? "ShallowReadonly" : "Readonly"],
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
    return ns(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Yd = "3.4.25", bi = process.env.NODE_ENV !== "production" ? q : yt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ZE = "http://www.w3.org/2000/svg", JE = "http://www.w3.org/1998/Math/MathML", oi = typeof document < "u" ? document : null, Xd = oi && /* @__PURE__ */ oi.createElement("template"), QE = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? oi.createElementNS(ZE, t) : e === "mathml" ? oi.createElementNS(JE, t) : oi.createElement(t, n ? { is: n } : void 0);
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
      Xd.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
      const o = Xd.content;
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
}, Jr = "transition", pa = "animation", to = Symbol("_vtc"), Hu = (t, { slots: e }) => Zy(z1, eS(t), e);
Hu.displayName = "Transition";
const Jy = {
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
Hu.props = /* @__PURE__ */ Qe(
  {},
  Ey,
  Jy
);
const Fi = (t, e = []) => {
  le(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, Kd = (t) => t ? le(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function eS(t) {
  const e = {};
  for (const I in t)
    I in Jy || (e[I] = t[I]);
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
  } = t, p = tS(i), m = p && p[0], g = p && p[1], {
    onBeforeEnter: b,
    onEnter: _,
    onEnterCancelled: S,
    onLeave: y,
    onLeaveCancelled: E,
    onBeforeAppear: N = b,
    onAppear: w = _,
    onAppearCancelled: C = S
  } = e, A = (I, K, ve) => {
    Vi(I, K ? f : o), Vi(I, K ? u : a), ve && ve();
  }, T = (I, K) => {
    I._isLeaving = !1, Vi(I, c), Vi(I, d), Vi(I, h), K && K();
  }, k = (I) => (K, ve) => {
    const L = I ? w : _, $ = () => A(K, I, ve);
    Fi(L, [K, $]), Zd(() => {
      Vi(K, I ? l : s), Qr(K, I ? f : o), Kd(L) || Jd(K, r, m, $);
    });
  };
  return Qe(e, {
    onBeforeEnter(I) {
      Fi(b, [I]), Qr(I, s), Qr(I, a);
    },
    onBeforeAppear(I) {
      Fi(N, [I]), Qr(I, l), Qr(I, u);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(I, K) {
      I._isLeaving = !0;
      const ve = () => T(I, K);
      Qr(I, c), Qr(I, h), iS(), Zd(() => {
        !I._isLeaving || (Vi(I, c), Qr(I, d), Kd(y) || Jd(I, r, g, ve));
      }), Fi(y, [I, ve]);
    },
    onEnterCancelled(I) {
      A(I, !1), Fi(S, [I]);
    },
    onAppearCancelled(I) {
      A(I, !0), Fi(C, [I]);
    },
    onLeaveCancelled(I) {
      T(I), Fi(E, [I]);
    }
  });
}
function tS(t) {
  if (t == null)
    return null;
  if (Be(t))
    return [gc(t.enter), gc(t.leave)];
  {
    const e = gc(t);
    return [e, e];
  }
}
function gc(t) {
  const e = of(t);
  return process.env.NODE_ENV !== "production" && p1(e, "<transition> explicit duration"), e;
}
function Qr(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[to] || (t[to] = /* @__PURE__ */ new Set())).add(e);
}
function Vi(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[to];
  n && (n.delete(e), n.size || (t[to] = void 0));
}
function Zd(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let nS = 0;
function Jd(t, e, n, r) {
  const i = t._endId = ++nS, s = () => {
    i === t._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: o, propCount: l } = rS(t, e);
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
function rS(t, e) {
  const n = window.getComputedStyle(t), r = (p) => (n[p] || "").split(", "), i = r(`${Jr}Delay`), s = r(`${Jr}Duration`), a = Qd(i, s), o = r(`${pa}Delay`), l = r(`${pa}Duration`), u = Qd(o, l);
  let f = null, c = 0, h = 0;
  e === Jr ? a > 0 && (f = Jr, c = a, h = s.length) : e === pa ? u > 0 && (f = pa, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? Jr : pa : null, h = f ? f === Jr ? s.length : l.length : 0);
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
function Qd(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => ep(n) + ep(t[r])));
}
function ep(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function iS() {
  return document.body.offsetHeight;
}
function sS(t, e, n) {
  const r = t[to];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const tp = Symbol("_vod"), aS = Symbol("_vsh");
process.env.NODE_ENV;
const oS = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), lS = /(^|;)\s*display\s*:/;
function uS(t, e, n) {
  const r = t.style, i = rt(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (rt(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Ml(r, o, "");
        }
      else
        for (const a in e)
          n[a] == null && Ml(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), Ml(r, a, n[a]);
  } else if (i) {
    if (e !== n) {
      const a = r[oS];
      a && (n += ";" + a), r.cssText = n, s = lS.test(n);
    }
  } else
    e && t.removeAttribute("style");
  tp in t && (t[tp] = s ? r.display : "", t[aS] && (r.display = "none"));
}
const cS = /[^\\];\s*$/, np = /\s*!important$/;
function Ml(t, e, n) {
  if (le(n))
    n.forEach((r) => Ml(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && cS.test(n) && bi(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = fS(t, e);
    np.test(n) ? t.setProperty(
      un(r),
      n.replace(np, ""),
      "important"
    ) : t[r] = n;
  }
}
const rp = ["Webkit", "Moz", "ms"], yc = {};
function fS(t, e) {
  const n = yc[e];
  if (n)
    return n;
  let r = gn(e);
  if (r !== "filter" && r in t)
    return yc[e] = r;
  r = ls(r);
  for (let i = 0; i < rp.length; i++) {
    const s = rp[i] + r;
    if (s in t)
      return yc[e] = s;
  }
  return e;
}
const ip = "http://www.w3.org/1999/xlink";
function hS(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(ip, e.slice(6, e.length)) : t.setAttributeNS(ip, e, n);
  else {
    const s = kb(e);
    n == null || s && !Ig(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function dS(t, e, n, r, i, s, a) {
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
    u === "boolean" ? n = Ig(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
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
function mS(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const sp = Symbol("_vei");
function gS(t, e, n, r, i = null) {
  const s = t[sp] || (t[sp] = {}), a = s[e];
  if (r && a)
    a.value = process.env.NODE_ENV !== "production" ? op(r, e) : r;
  else {
    const [o, l] = yS(e);
    if (r) {
      const u = s[e] = bS(
        process.env.NODE_ENV !== "production" ? op(r, e) : r,
        i
      );
      pS(t, o, u, l);
    } else
      a && (mS(t, o, a, l), s[e] = void 0);
  }
}
const ap = /(?:Once|Passive|Capture)$/;
function yS(t) {
  let e;
  if (ap.test(t)) {
    e = {};
    let r;
    for (; r = t.match(ap); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : un(t.slice(2)), e];
}
let vc = 0;
const vS = /* @__PURE__ */ Promise.resolve(), _S = () => vc || (vS.then(() => vc = 0), vc = Date.now());
function bS(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ln(
      ES(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = _S(), n;
}
function op(t, e) {
  return pe(t) || le(t) ? t : (bi(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), yt);
}
function ES(t, e) {
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
const lp = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, SS = (t, e, n, r, i, s, a, o, l) => {
  const u = i === "svg";
  e === "class" ? sS(t, r, u) : e === "style" ? uS(t, n, r) : po(e) ? Wl(e) || gS(t, e, n, r, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : wS(t, e, r, u)) ? dS(
    t,
    e,
    r,
    s,
    a,
    o,
    l
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), hS(t, e, r, u));
};
function wS(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && lp(e) && pe(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return lp(e) && rt(n) ? !1 : e in t;
}
const xS = ["ctrl", "shift", "alt", "meta"], OS = {
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
  exact: (t, e) => xS.some((n) => t[`${n}Key`] && !e.includes(n))
}, sr = (t, e) => {
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = (i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = OS[e[a]];
      if (o && o(i, e))
        return;
    }
    return t(i, ...s);
  });
}, MS = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ar = (t, e) => {
  const n = t._withKeys || (t._withKeys = {}), r = e.join(".");
  return n[r] || (n[r] = (i) => {
    if (!("key" in i))
      return;
    const s = un(i.key);
    if (e.some((a) => a === s || MS[a] === s))
      return t(i);
  });
}, TS = /* @__PURE__ */ Qe({ patchProp: SS }, QE);
let up;
function Qy() {
  return up || (up = NE(TS));
}
const cp = (...t) => {
  Qy().render(...t);
}, NS = (...t) => {
  const e = Qy().createApp(...t);
  process.env.NODE_ENV !== "production" && (CS(e), PS(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = AS(r);
    if (!i)
      return;
    const s = e._component;
    !pe(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
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
function CS(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Cb(e) || Pb(e) || Ab(e),
    writable: !1
  });
}
function PS(t) {
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
function AS(t) {
  if (rt(t)) {
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
  KE();
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
function Nf(t, e) {
  return Nf = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Nf(t, e);
}
function kS() {
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
function Tl(t, e, n) {
  return kS() ? Tl = Reflect.construct : Tl = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && Nf(u, a.prototype), u;
  }, Tl.apply(null, arguments);
}
function Gn(t) {
  return IS(t) || RS(t) || $S(t) || FS();
}
function IS(t) {
  if (Array.isArray(t))
    return Lf(t);
}
function RS(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function $S(t, e) {
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
function FS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var VS = Object.hasOwnProperty, fp = Object.setPrototypeOf, jS = Object.isFrozen, GS = Object.getPrototypeOf, US = Object.getOwnPropertyDescriptor, en = Object.freeze, Dn = Object.seal, BS = Object.create, ev = typeof Reflect < "u" && Reflect, tu = ev.apply, Cf = ev.construct;
tu || (tu = function(e, n, r) {
  return e.apply(n, r);
});
en || (en = function(e) {
  return e;
});
Dn || (Dn = function(e) {
  return e;
});
Cf || (Cf = function(e, n) {
  return Tl(e, Gn(n));
});
var WS = kn(Array.prototype.forEach), hp = kn(Array.prototype.pop), ma = kn(Array.prototype.push), Nl = kn(String.prototype.toLowerCase), _c = kn(String.prototype.toString), dp = kn(String.prototype.match), Rn = kn(String.prototype.replace), qS = kn(String.prototype.indexOf), HS = kn(String.prototype.trim), Ft = kn(RegExp.prototype.test), bc = zS(TypeError);
function kn(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return tu(t, e, r);
  };
}
function zS(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return Cf(t, n);
  };
}
function Ce(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Nl, fp && fp(t, null);
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
  var e = BS(null), n;
  for (n in t)
    tu(VS, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function Yo(t, e) {
  for (; t !== null; ) {
    var n = US(t, e);
    if (n) {
      if (n.get)
        return kn(n.get);
      if (typeof n.value == "function")
        return kn(n.value);
    }
    t = GS(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var pp = en(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ec = en(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sc = en(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), YS = en(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), wc = en(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), XS = en(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mp = en(["#text"]), gp = en(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), xc = en(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), yp = en(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xo = en(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), KS = Dn(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ZS = Dn(/<%[\w\W]*|[\w\W]*%>/gm), JS = Dn(/\${[\w\W]*}/gm), QS = Dn(/^data-[\-\w.\u00B7-\uFFFF]/), ew = Dn(/^aria-[\-\w]+$/), tw = Dn(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), nw = Dn(/^(?:\w+script|data):/i), rw = Dn(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), iw = Dn(/^html$/i), sw = Dn(/^[a-z][.\w]*(-[.\w]+)+$/i), aw = function() {
  return typeof window > "u" ? null : window;
}, ow = function(e, n) {
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
function tv() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : aw(), e = function(O) {
    return tv(O);
  };
  if (e.version = "2.5.0", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, p = o.prototype, m = Yo(p, "cloneNode"), g = Yo(p, "nextSibling"), b = Yo(p, "childNodes"), _ = Yo(p, "parentNode");
  if (typeof s == "function") {
    var S = r.createElement("template");
    S.content && S.content.ownerDocument && (r = S.content.ownerDocument);
  }
  var y = ow(d, n), E = y ? y.createHTML("") : "", N = r, w = N.implementation, C = N.createNodeIterator, A = N.createDocumentFragment, T = N.getElementsByTagName, k = n.importNode, I = {};
  try {
    I = ji(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var K = {};
  e.isSupported = typeof _ == "function" && w && w.createHTMLDocument !== void 0 && I !== 9;
  var ve = KS, L = ZS, $ = JS, z = QS, Z = ew, Le = nw, Pe = rw, dt = sw, Rt = tw, Te = null, Lt = Ce({}, [].concat(Gn(pp), Gn(Ec), Gn(Sc), Gn(wc), Gn(mp))), it = null, Zn = Ce({}, [].concat(Gn(gp), Gn(xc), Gn(yp), Gn(Xo))), ke = Object.seal(Object.create(null, {
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
  })), tn = null, Jn = null, Or = !0, Ct = !0, Qn = !1, Mr = !0, v = !1, x = !0, R = !1, V = !1, j = !1, W = !1, J = !1, B = !1, X = !0, U = !1, ne = "user-content-", ue = !0, ae = !1, he = {}, xe = null, $e = Ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Je = null, pt = Ce({}, ["audio", "video", "img", "source", "image", "track"]), zt = null, Tr = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ki = "http://www.w3.org/1998/Math/MathML", er = "http://www.w3.org/2000/svg", bn = "http://www.w3.org/1999/xhtml", ut = bn, nn = !1, Es = null, G_ = Ce({}, [ki, er, bn], _c), Ii, U_ = ["application/xhtml+xml", "text/html"], B_ = "text/html", Ot, Ss = null, W_ = r.createElement("form"), sd = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, ac = function(O) {
    Ss && Ss === O || ((!O || fi(O) !== "object") && (O = {}), O = ji(O), Ii = U_.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? Ii = B_ : Ii = O.PARSER_MEDIA_TYPE, Ot = Ii === "application/xhtml+xml" ? _c : Nl, Te = "ALLOWED_TAGS" in O ? Ce({}, O.ALLOWED_TAGS, Ot) : Lt, it = "ALLOWED_ATTR" in O ? Ce({}, O.ALLOWED_ATTR, Ot) : Zn, Es = "ALLOWED_NAMESPACES" in O ? Ce({}, O.ALLOWED_NAMESPACES, _c) : G_, zt = "ADD_URI_SAFE_ATTR" in O ? Ce(
      ji(Tr),
      O.ADD_URI_SAFE_ATTR,
      Ot
    ) : Tr, Je = "ADD_DATA_URI_TAGS" in O ? Ce(
      ji(pt),
      O.ADD_DATA_URI_TAGS,
      Ot
    ) : pt, xe = "FORBID_CONTENTS" in O ? Ce({}, O.FORBID_CONTENTS, Ot) : $e, tn = "FORBID_TAGS" in O ? Ce({}, O.FORBID_TAGS, Ot) : {}, Jn = "FORBID_ATTR" in O ? Ce({}, O.FORBID_ATTR, Ot) : {}, he = "USE_PROFILES" in O ? O.USE_PROFILES : !1, Or = O.ALLOW_ARIA_ATTR !== !1, Ct = O.ALLOW_DATA_ATTR !== !1, Qn = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Mr = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, v = O.SAFE_FOR_TEMPLATES || !1, x = O.SAFE_FOR_XML !== !1, R = O.WHOLE_DOCUMENT || !1, W = O.RETURN_DOM || !1, J = O.RETURN_DOM_FRAGMENT || !1, B = O.RETURN_TRUSTED_TYPE || !1, j = O.FORCE_BODY || !1, X = O.SANITIZE_DOM !== !1, U = O.SANITIZE_NAMED_PROPS || !1, ue = O.KEEP_CONTENT !== !1, ae = O.IN_PLACE || !1, Rt = O.ALLOWED_URI_REGEXP || Rt, ut = O.NAMESPACE || bn, ke = O.CUSTOM_ELEMENT_HANDLING || {}, O.CUSTOM_ELEMENT_HANDLING && sd(O.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ke.tagNameCheck = O.CUSTOM_ELEMENT_HANDLING.tagNameCheck), O.CUSTOM_ELEMENT_HANDLING && sd(O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ke.attributeNameCheck = O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), O.CUSTOM_ELEMENT_HANDLING && typeof O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ke.allowCustomizedBuiltInElements = O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), v && (Ct = !1), J && (W = !0), he && (Te = Ce({}, Gn(mp)), it = [], he.html === !0 && (Ce(Te, pp), Ce(it, gp)), he.svg === !0 && (Ce(Te, Ec), Ce(it, xc), Ce(it, Xo)), he.svgFilters === !0 && (Ce(Te, Sc), Ce(it, xc), Ce(it, Xo)), he.mathMl === !0 && (Ce(Te, wc), Ce(it, yp), Ce(it, Xo))), O.ADD_TAGS && (Te === Lt && (Te = ji(Te)), Ce(Te, O.ADD_TAGS, Ot)), O.ADD_ATTR && (it === Zn && (it = ji(it)), Ce(it, O.ADD_ATTR, Ot)), O.ADD_URI_SAFE_ATTR && Ce(zt, O.ADD_URI_SAFE_ATTR, Ot), O.FORBID_CONTENTS && (xe === $e && (xe = ji(xe)), Ce(xe, O.FORBID_CONTENTS, Ot)), ue && (Te["#text"] = !0), R && Ce(Te, ["html", "head", "body"]), Te.table && (Ce(Te, ["tbody"]), delete tn.tbody), en && en(O), Ss = O);
  }, ad = Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), od = Ce({}, ["foreignobject", "desc", "title", "annotation-xml"]), q_ = Ce({}, ["title", "style", "font", "a", "script"]), $o = Ce({}, Ec);
  Ce($o, Sc), Ce($o, YS);
  var oc = Ce({}, wc);
  Ce(oc, XS);
  var H_ = function(O) {
    var Y = _(O);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: ut,
      tagName: "template"
    });
    var re = Nl(O.tagName), Fe = Nl(Y.tagName);
    return Es[O.namespaceURI] ? O.namespaceURI === er ? Y.namespaceURI === bn ? re === "svg" : Y.namespaceURI === ki ? re === "svg" && (Fe === "annotation-xml" || ad[Fe]) : Boolean($o[re]) : O.namespaceURI === ki ? Y.namespaceURI === bn ? re === "math" : Y.namespaceURI === er ? re === "math" && od[Fe] : Boolean(oc[re]) : O.namespaceURI === bn ? Y.namespaceURI === er && !od[Fe] || Y.namespaceURI === ki && !ad[Fe] ? !1 : !oc[re] && (q_[re] || !$o[re]) : !!(Ii === "application/xhtml+xml" && Es[O.namespaceURI]) : !1;
  }, In = function(O) {
    ma(e.removed, {
      element: O
    });
    try {
      O.parentNode.removeChild(O);
    } catch {
      try {
        O.outerHTML = E;
      } catch {
        O.remove();
      }
    }
  }, lc = function(O, Y) {
    try {
      ma(e.removed, {
        attribute: Y.getAttributeNode(O),
        from: Y
      });
    } catch {
      ma(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(O), O === "is" && !it[O])
      if (W || J)
        try {
          In(Y);
        } catch {
        }
      else
        try {
          Y.setAttribute(O, "");
        } catch {
        }
  }, ld = function(O) {
    var Y, re;
    if (j)
      O = "<remove></remove>" + O;
    else {
      var Fe = dp(O, /^[\r\n\t ]+/);
      re = Fe && Fe[0];
    }
    Ii === "application/xhtml+xml" && ut === bn && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    var rn = y ? y.createHTML(O) : O;
    if (ut === bn)
      try {
        Y = new h().parseFromString(rn, Ii);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = w.createDocument(ut, "template", null);
      try {
        Y.documentElement.innerHTML = nn ? E : rn;
      } catch {
      }
    }
    var $t = Y.body || Y.documentElement;
    return O && re && $t.insertBefore(r.createTextNode(re), $t.childNodes[0] || null), ut === bn ? T.call(Y, R ? "html" : "body")[0] : R ? Y.documentElement : $t;
  }, ud = function(O) {
    return C.call(
      O.ownerDocument || O,
      O,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, z_ = function(O) {
    return O instanceof c && (typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || !(O.attributes instanceof f) || typeof O.removeAttribute != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function");
  }, fa = function(O) {
    return fi(a) === "object" ? O instanceof a : O && fi(O) === "object" && typeof O.nodeType == "number" && typeof O.nodeName == "string";
  }, Nr = function(O, Y, re) {
    !K[O] || WS(K[O], function(Fe) {
      Fe.call(e, Y, re, Ss);
    });
  }, cd = function(O) {
    var Y;
    if (Nr("beforeSanitizeElements", O, null), z_(O) || Ft(/[\u0080-\uFFFF]/, O.nodeName))
      return In(O), !0;
    var re = Ot(O.nodeName);
    if (Nr("uponSanitizeElement", O, {
      tagName: re,
      allowedTags: Te
    }), O.hasChildNodes() && !fa(O.firstElementChild) && (!fa(O.content) || !fa(O.content.firstElementChild)) && Ft(/<[/\w]/g, O.innerHTML) && Ft(/<[/\w]/g, O.textContent) || re === "select" && Ft(/<template/i, O.innerHTML) || O.nodeType === 7 || x && O.nodeType === 8 && Ft(/<[/\w]/g, O.data))
      return In(O), !0;
    if (!Te[re] || tn[re]) {
      if (!tn[re] && hd(re) && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, re) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(re)))
        return !1;
      if (ue && !xe[re]) {
        var Fe = _(O) || O.parentNode, rn = b(O) || O.childNodes;
        if (rn && Fe)
          for (var $t = rn.length, Pt = $t - 1; Pt >= 0; --Pt)
            Fe.insertBefore(m(rn[Pt], !0), g(O));
      }
      return In(O), !0;
    }
    return O instanceof o && !H_(O) || (re === "noscript" || re === "noembed" || re === "noframes") && Ft(/<\/no(script|embed|frames)/i, O.innerHTML) ? (In(O), !0) : (v && O.nodeType === 3 && (Y = O.textContent, Y = Rn(Y, ve, " "), Y = Rn(Y, L, " "), Y = Rn(Y, $, " "), O.textContent !== Y && (ma(e.removed, {
      element: O.cloneNode()
    }), O.textContent = Y)), Nr("afterSanitizeElements", O, null), !1);
  }, fd = function(O, Y, re) {
    if (X && (Y === "id" || Y === "name") && (re in r || re in W_))
      return !1;
    if (!(Ct && !Jn[Y] && Ft(z, Y))) {
      if (!(Or && Ft(Z, Y))) {
        if (!it[Y] || Jn[Y]) {
          if (!(hd(O) && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, O) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(O)) && (ke.attributeNameCheck instanceof RegExp && Ft(ke.attributeNameCheck, Y) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(Y)) || Y === "is" && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && Ft(ke.tagNameCheck, re) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(re))))
            return !1;
        } else if (!zt[Y]) {
          if (!Ft(Rt, Rn(re, Pe, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && O !== "script" && qS(re, "data:") === 0 && Je[O])) {
              if (!(Qn && !Ft(Le, Rn(re, Pe, "")))) {
                if (re)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, hd = function(O) {
    return O !== "annotation-xml" && dp(O, dt);
  }, dd = function(O) {
    var Y, re, Fe, rn;
    Nr("beforeSanitizeAttributes", O, null);
    var $t = O.attributes;
    if (!!$t) {
      var Pt = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: it
      };
      for (rn = $t.length; rn--; ) {
        Y = $t[rn];
        var Fo = Y, Mt = Fo.name, uc = Fo.namespaceURI;
        if (re = Mt === "value" ? Y.value : HS(Y.value), Fe = Ot(Mt), Pt.attrName = Fe, Pt.attrValue = re, Pt.keepAttr = !0, Pt.forceKeepAttr = void 0, Nr("uponSanitizeAttribute", O, Pt), re = Pt.attrValue, !Pt.forceKeepAttr && (lc(Mt, O), !!Pt.keepAttr)) {
          if (!Mr && Ft(/\/>/i, re)) {
            lc(Mt, O);
            continue;
          }
          v && (re = Rn(re, ve, " "), re = Rn(re, L, " "), re = Rn(re, $, " "));
          var pd = Ot(O.nodeName);
          if (!!fd(pd, Fe, re)) {
            if (U && (Fe === "id" || Fe === "name") && (lc(Mt, O), re = ne + re), y && fi(d) === "object" && typeof d.getAttributeType == "function" && !uc)
              switch (d.getAttributeType(pd, Fe)) {
                case "TrustedHTML": {
                  re = y.createHTML(re);
                  break;
                }
                case "TrustedScriptURL": {
                  re = y.createScriptURL(re);
                  break;
                }
              }
            try {
              uc ? O.setAttributeNS(uc, Mt, re) : O.setAttribute(Mt, re), hp(e.removed);
            } catch {
            }
          }
        }
      }
      Nr("afterSanitizeAttributes", O, null);
    }
  }, Y_ = function ce(O) {
    var Y, re = ud(O);
    for (Nr("beforeSanitizeShadowDOM", O, null); Y = re.nextNode(); )
      Nr("uponSanitizeShadowNode", Y, null), !cd(Y) && (Y.content instanceof i && ce(Y.content), dd(Y));
    Nr("afterSanitizeShadowDOM", O, null);
  };
  return e.sanitize = function(ce) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y, re, Fe, rn, $t;
    if (nn = !ce, nn && (ce = "<!-->"), typeof ce != "string" && !fa(ce))
      if (typeof ce.toString == "function") {
        if (ce = ce.toString(), typeof ce != "string")
          throw bc("dirty is not a string, aborting");
      } else
        throw bc("toString is not a function");
    if (!e.isSupported) {
      if (fi(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (fa(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (V || ac(O), e.removed = [], typeof ce == "string" && (ae = !1), ae) {
      if (ce.nodeName) {
        var Pt = Ot(ce.nodeName);
        if (!Te[Pt] || tn[Pt])
          throw bc("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      Y = ld("<!---->"), re = Y.ownerDocument.importNode(ce, !0), re.nodeType === 1 && re.nodeName === "BODY" || re.nodeName === "HTML" ? Y = re : Y.appendChild(re);
    else {
      if (!W && !v && !R && ce.indexOf("<") === -1)
        return y && B ? y.createHTML(ce) : ce;
      if (Y = ld(ce), !Y)
        return W ? null : B ? E : "";
    }
    Y && j && In(Y.firstChild);
    for (var Fo = ud(ae ? ce : Y); Fe = Fo.nextNode(); )
      Fe.nodeType === 3 && Fe === rn || cd(Fe) || (Fe.content instanceof i && Y_(Fe.content), dd(Fe), rn = Fe);
    if (rn = null, ae)
      return ce;
    if (W) {
      if (J)
        for ($t = A.call(Y.ownerDocument); Y.firstChild; )
          $t.appendChild(Y.firstChild);
      else
        $t = Y;
      return (it.shadowroot || it.shadowrootmod) && ($t = k.call(n, $t, !0)), $t;
    }
    var Mt = R ? Y.outerHTML : Y.innerHTML;
    return R && Te["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Ft(iw, Y.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + Mt), v && (Mt = Rn(Mt, ve, " "), Mt = Rn(Mt, L, " "), Mt = Rn(Mt, $, " ")), y && B ? y.createHTML(Mt) : Mt;
  }, e.setConfig = function(ce) {
    ac(ce), V = !0;
  }, e.clearConfig = function() {
    Ss = null, V = !1;
  }, e.isValidAttribute = function(ce, O, Y) {
    Ss || ac({});
    var re = Ot(ce), Fe = Ot(O);
    return fd(re, Fe, Y);
  }, e.addHook = function(ce, O) {
    typeof O == "function" && (K[ce] = K[ce] || [], ma(K[ce], O));
  }, e.removeHook = function(ce) {
    if (K[ce])
      return hp(K[ce]);
  }, e.removeHooks = function(ce) {
    K[ce] && (K[ce] = []);
  }, e.removeAllHooks = function() {
    K = {};
  }, e;
}
var lw = tv();
function uw(t, e) {
  var i;
  const n = (i = t.hooks) != null ? i : {};
  let r;
  for (r in n) {
    const s = n[r];
    s !== void 0 && e.addHook(r, s);
  }
}
function nv() {
  return lw();
}
function cw(t = {}, e = nv) {
  const n = e();
  uw(t, n);
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
const fw = {
  install(t, e = {}, n = nv) {
    t.directive(
      "dompurify-html",
      cw(e, n)
    );
  }
};
var Lh = !1;
function Ko(t, e, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), n) : (t[e] = n, n);
}
function Oc(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function hw() {
  return rv().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function rv() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const dw = typeof Proxy == "function", pw = "devtools-plugin:setup", mw = "plugin:settings:set";
let ws, Pf;
function gw() {
  var t;
  return ws !== void 0 || (typeof window < "u" && window.performance ? (ws = !0, Pf = window.performance) : typeof globalThis < "u" && ((t = globalThis.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (ws = !0, Pf = globalThis.perf_hooks.performance) : ws = !1), ws;
}
function yw() {
  return gw() ? Pf.now() : Date.now();
}
class vw {
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
        return yw();
      }
    }, n && n.on(mw, (a, o) => {
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
function iv(t, e) {
  const n = t, r = rv(), i = hw(), s = dw && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(pw, t, e);
  else {
    const a = s ? new vw(n, i) : null;
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
const no = (t) => xa = t, sv = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function fs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var hr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(hr || (hr = {}));
const zu = typeof window < "u", Fa = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && zu, vp = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function _w(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function Ch(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    lv(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function av(t) {
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
const Cl = typeof navigator == "object" ? navigator : { userAgent: "" }, ov = /* @__PURE__ */ (() => /Macintosh/.test(Cl.userAgent) && /AppleWebKit/.test(Cl.userAgent) && !/Safari/.test(Cl.userAgent))(), lv = zu ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ov ? bw : "msSaveOrOpenBlob" in Cl ? Ew : Sw : () => {
};
function bw(t, e = "download", n) {
  const r = document.createElement("a");
  r.download = e, r.rel = "noopener", typeof t == "string" ? (r.href = t, r.origin !== location.origin ? av(r.href) ? Ch(t, e, n) : (r.target = "_blank", Ll(r)) : Ll(r)) : (r.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Ll(r);
  }, 0));
}
function Ew(t, e = "download", n) {
  if (typeof t == "string")
    if (av(t))
      Ch(t, e, n);
    else {
      const r = document.createElement("a");
      r.href = t, r.target = "_blank", setTimeout(function() {
        Ll(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(_w(t, n), e);
}
function Sw(t, e, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
    return Ch(t, e, n);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(vp.HTMLElement)) || "safari" in vp, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || ov) && typeof FileReader < "u") {
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
function Ph(t) {
  return "_a" in t && "install" in t;
}
function uv() {
  if (!("clipboard" in navigator))
    return Tt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function cv(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Tt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function ww(t) {
  if (!uv())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Tt("Global state copied to clipboard.");
    } catch (e) {
      if (cv(e))
        return;
      Tt("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function xw(t) {
  if (!uv())
    try {
      fv(t, JSON.parse(await navigator.clipboard.readText())), Tt("Global state pasted from clipboard.");
    } catch (e) {
      if (cv(e))
        return;
      Tt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function Ow(t) {
  try {
    lv(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Tt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Lr;
function Mw() {
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
async function Tw(t) {
  try {
    const n = await Mw()();
    if (!n)
      return;
    const { text: r, file: i } = n;
    fv(t, JSON.parse(r)), Tt(`Global state imported from "${i.name}".`);
  } catch (e) {
    Tt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function fv(t, e) {
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
const hv = "\u{1F34D} Pinia (root)", Af = "_root";
function Nw(t) {
  return Ph(t) ? {
    id: Af,
    label: hv
  } : {
    id: t.$id,
    label: t.$id
  };
}
function Lw(t) {
  if (Ph(t)) {
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
function Cw(t) {
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
function Pw(t) {
  switch (t) {
    case hr.direct:
      return "mutation";
    case hr.patchFunction:
      return "$patch";
    case hr.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let ks = !0;
const Pl = [], zi = "pinia:mutations", Gt = "pinia", { assign: Aw } = Object, nu = (t) => "\u{1F34D} " + t;
function Dw(t, e) {
  iv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Pl,
    app: t
  }, (n) => {
    typeof n.now != "function" && Tt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: zi,
      label: "Pinia \u{1F34D}",
      color: 15064968
    }), n.addInspector({
      id: Gt,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            ww(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await xw(e), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Ow(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Tw(e), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
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
            type: nu(o.$id),
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
            type: nu(o.$id),
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
      if (r.app === t && r.inspectorId === Gt) {
        let i = [e];
        i = i.concat(Array.from(e._s.values())), r.rootNodes = (r.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(r.filter.toLowerCase()) : hv.toLowerCase().includes(r.filter.toLowerCase())) : i).map(Nw);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === t && r.inspectorId === Gt) {
        const i = r.nodeId === Af ? e : e._s.get(r.nodeId);
        if (!i)
          return;
        i && (r.state = Lw(i));
      }
    }), n.on.editInspectorState((r, i) => {
      if (r.app === t && r.inspectorId === Gt) {
        const s = r.nodeId === Af ? e : e._s.get(r.nodeId);
        if (!s)
          return Tt(`store "${r.nodeId}" not found`, "error");
        const { path: a } = r;
        Ph(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), ks = !1, r.set(s, a, r.state.value), ks = !0;
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
        a[0] = "$state", ks = !1, r.set(s, a, r.state.value), ks = !0;
      }
    });
  });
}
function kw(t, e) {
  Pl.includes(nu(e.$id)) || Pl.push(nu(e.$id)), iv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Pl,
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
      const f = dv++;
      n.addTimelineEvent({
        layerId: zi,
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
        mi = void 0, n.addTimelineEvent({
          layerId: zi,
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
        mi = void 0, n.addTimelineEvent({
          layerId: zi,
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
      et(() => M(e[a]), (o, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Gt), ks && n.addTimelineEvent({
          layerId: zi,
          event: {
            time: r(),
            title: "Change",
            subtitle: a,
            data: {
              newValue: o,
              oldValue: l
            },
            groupId: mi
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: a, type: o }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Gt), !ks)
        return;
      const u = {
        time: r(),
        title: Pw(o),
        data: Aw({ store: Un(e.$id) }, Cw(a)),
        groupId: mi
      };
      o === hr.patchFunction ? u.subtitle = "\u2935\uFE0F" : o === hr.patchObject ? u.subtitle = "\u{1F9E9}" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), n.addTimelineEvent({
        layerId: zi,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = pi((a) => {
      i(a), n.addTimelineEvent({
        layerId: zi,
        event: {
          time: r(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: Un(e.$id),
            info: Un("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
    });
    const { $dispose: s } = e;
    e.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(Gt), n.sendInspectorState(Gt), n.getSettings().logStoreChanges && Tt(`Disposed "${e.$id}" store \u{1F5D1}`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Gt), n.sendInspectorState(Gt), n.getSettings().logStoreChanges && Tt(`"${e.$id}" store installed \u{1F195}`);
  });
}
let dv = 0, mi;
function _p(t, e, n) {
  const r = e.reduce((i, s) => (i[s] = _e(t)[s], i), {});
  for (const i in r)
    t[i] = function() {
      const s = dv, a = n ? new Proxy(t, {
        get(...l) {
          return mi = s, Reflect.get(...l);
        },
        set(...l) {
          return mi = s, Reflect.set(...l);
        }
      }) : t;
      mi = s;
      const o = r[i].apply(a, arguments);
      return mi = void 0, o;
    };
}
function Iw({ app: t, store: e, options: n }) {
  if (e.$id.startsWith("__hot:"))
    return;
  e._isOptionsAPI = !!n.state, _p(e, Object.keys(n.actions), e._isOptionsAPI);
  const r = e._hotUpdate;
  _e(e)._hotUpdate = function(i) {
    r.apply(this, arguments), _p(e, Object.keys(i._hmrPayload.actions), !!e._isOptionsAPI);
  }, kw(
    t,
    e
  );
}
function Rw() {
  const t = Fg(!0), e = t.run(() => we({}));
  let n = [], r = [];
  const i = pi({
    install(s) {
      no(i), i._a = s, s.provide(sv, i), s.config.globalProperties.$pinia = i, Fa && Dw(s, i), r.forEach((a) => n.push(a)), r = [];
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
  return Fa && typeof Proxy < "u" && i.use(Iw), i;
}
function pv(t, e) {
  for (const n in e) {
    const r = e[n];
    if (!(n in t))
      continue;
    const i = t[n];
    fs(i) && fs(r) && !Ye(r) && !fr(r) ? t[n] = pv(i, r) : t[n] = r;
  }
  return t;
}
const mv = () => {
};
function bp(t, e, n, r = mv) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && Vg() && Rb(i), i;
}
function xs(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const $w = (t) => t();
function Df(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    fs(i) && fs(r) && t.hasOwnProperty(n) && !Ye(r) && !fr(r) ? t[n] = Df(i, r) : t[n] = r;
  }
  return t;
}
const Fw = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function Vw(t) {
  return !fs(t) || !t.hasOwnProperty(Fw);
}
const { assign: wn } = Object;
function Ep(t) {
  return !!(Ye(t) && t.effect);
}
function Sp(t, e, n, r) {
  const { state: i, actions: s, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && r ? ff(we(i ? i() : {}).value) : ff(n.state.value[t]);
    return wn(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = pi(de(() => {
      no(n);
      const d = n._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = kf(t, u, e, n, r, !0), l;
}
function kf(t, e, n = {}, r, i, s) {
  let a;
  const o = wn({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !Lh && (l.onTrigger = (T) => {
    u ? d = T : u == !1 && !w._hotUpdating && (Array.isArray(d) ? d.push(T) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, c = [], h = [], d;
  const p = r.state.value[t];
  !s && !p && (process.env.NODE_ENV === "production" || !i) && (r.state.value[t] = {});
  const m = we({});
  let g;
  function b(T) {
    let k;
    u = f = !1, process.env.NODE_ENV !== "production" && (d = []), typeof T == "function" ? (T(r.state.value[t]), k = {
      type: hr.patchFunction,
      storeId: t,
      events: d
    }) : (Df(r.state.value[t], T), k = {
      type: hr.patchObject,
      payload: T,
      storeId: t,
      events: d
    });
    const I = g = Symbol();
    zl().then(() => {
      g === I && (u = !0);
    }), f = !0, xs(c, k, r.state.value[t]);
  }
  const _ = s ? function() {
    const { state: k } = n, I = k ? k() : {};
    this.$patch((K) => {
      wn(K, I);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : mv;
  function S() {
    a.stop(), c = [], h = [], r._s.delete(t);
  }
  function y(T, k) {
    return function() {
      no(r);
      const I = Array.from(arguments), K = [], ve = [];
      function L(Z) {
        K.push(Z);
      }
      function $(Z) {
        ve.push(Z);
      }
      xs(h, {
        args: I,
        name: T,
        store: w,
        after: L,
        onError: $
      });
      let z;
      try {
        z = k.apply(this && this.$id === t ? this : w, I);
      } catch (Z) {
        throw xs(ve, Z), Z;
      }
      return z instanceof Promise ? z.then((Z) => (xs(K, Z), Z)).catch((Z) => (xs(ve, Z), Promise.reject(Z))) : (xs(K, z), z);
    };
  }
  const E = /* @__PURE__ */ pi({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), N = {
    _p: r,
    $id: t,
    $onAction: bp.bind(null, h),
    $patch: b,
    $reset: _,
    $subscribe(T, k = {}) {
      const I = bp(c, T, k.detached, () => K()), K = a.run(() => et(() => r.state.value[t], (ve) => {
        (k.flush === "sync" ? f : u) && T({
          storeId: t,
          type: hr.direct,
          events: d
        }, ve);
      }, wn({}, l, k)));
      return I;
    },
    $dispose: S
  }, w = Fu(process.env.NODE_ENV !== "production" || Fa ? wn(
    {
      _hmrPayload: E,
      _customProperties: pi(/* @__PURE__ */ new Set())
    },
    N
  ) : N);
  r._s.set(t, w);
  const A = (r._a && r._a.runWithContext || $w)(() => r._e.run(() => (a = Fg()).run(e)));
  for (const T in A) {
    const k = A[T];
    if (Ye(k) && !Ep(k) || fr(k))
      process.env.NODE_ENV !== "production" && i ? Ko(m.value, T, El(A, T)) : s || (p && Vw(k) && (Ye(k) ? k.value = p[T] : Df(k, p[T])), r.state.value[t][T] = k), process.env.NODE_ENV !== "production" && E.state.push(T);
    else if (typeof k == "function") {
      const I = process.env.NODE_ENV !== "production" && i ? k : y(T, k);
      A[T] = I, process.env.NODE_ENV !== "production" && (E.actions[T] = k), o.actions[T] = k;
    } else
      process.env.NODE_ENV !== "production" && Ep(k) && (E.getters[T] = s ? n.getters[T] : k, zu && (A._getters || (A._getters = pi([]))).push(T));
  }
  if (wn(w, A), wn(_e(w), A), Object.defineProperty(w, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? m.value : r.state.value[t],
    set: (T) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      b((k) => {
        wn(k, T);
      });
    }
  }), process.env.NODE_ENV !== "production" && (w._hotUpdate = pi((T) => {
    w._hotUpdating = !0, T._hmrPayload.state.forEach((k) => {
      if (k in w.$state) {
        const I = T.$state[k], K = w.$state[k];
        typeof I == "object" && fs(I) && fs(K) ? pv(I, K) : T.$state[k] = K;
      }
      Ko(w, k, El(T.$state, k));
    }), Object.keys(w.$state).forEach((k) => {
      k in T.$state || Oc(w, k);
    }), u = !1, f = !1, r.state.value[t] = El(T._hmrPayload, "hotState"), f = !0, zl().then(() => {
      u = !0;
    });
    for (const k in T._hmrPayload.actions) {
      const I = T[k];
      Ko(w, k, y(k, I));
    }
    for (const k in T._hmrPayload.getters) {
      const I = T._hmrPayload.getters[k], K = s ? de(() => (no(r), I.call(w, w))) : I;
      Ko(w, k, K);
    }
    Object.keys(w._hmrPayload.getters).forEach((k) => {
      k in T._hmrPayload.getters || Oc(w, k);
    }), Object.keys(w._hmrPayload.actions).forEach((k) => {
      k in T._hmrPayload.actions || Oc(w, k);
    }), w._hmrPayload = T._hmrPayload, w._getters = T._getters, w._hotUpdating = !1;
  })), Fa) {
    const T = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((k) => {
      Object.defineProperty(w, k, wn({ value: w[k] }, T));
    });
  }
  return r._p.forEach((T) => {
    if (Fa) {
      const k = a.run(() => T({
        store: w,
        app: r._a,
        pinia: r,
        options: o
      }));
      Object.keys(k || {}).forEach((I) => w._customProperties.add(I)), wn(w, k);
    } else
      wn(w, a.run(() => T({
        store: w,
        app: r._a,
        pinia: r,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && w.$state && typeof w.$state == "object" && typeof w.$state.constructor == "function" && !w.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${w.$id}".`), p && s && n.hydrate && n.hydrate(w.$state, p), u = !0, f = !0, w;
}
function gs(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  if (typeof t == "string")
    r = t, i = s ? n : e;
  else if (i = t, r = t.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');
  function a(o, l) {
    const u = mE();
    if (o = (process.env.NODE_ENV === "test" && xa && xa._testing ? null : o) || (u ? Ws(sv, null) : null), o && no(o), process.env.NODE_ENV !== "production" && !xa)
      throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = xa, o._s.has(r) || (s ? kf(r, e, i, o) : Sp(r, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + r, h = s ? kf(c, e, i, o, !0) : Sp(c, wn({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && zu) {
      const c = _o();
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
    return ff(t);
  {
    t = _e(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (Ye(r) || fr(r)) && (e[n] = El(t, n));
    }
    return e;
  }
}
function jw(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var hs = 1, ds = 2, Hs = 3, Gw = 4, If = 5, wp = 6378137, Uw = 6356752314e-3, xp = 0.0066943799901413165, Va = 484813681109536e-20, H = Math.PI / 2, Bw = 0.16666666666666666, Ww = 0.04722222222222222, qw = 0.022156084656084655, te = 1e-10, Dt = 0.017453292519943295, lr = 57.29577951308232, We = Math.PI / 4, ro = Math.PI * 2, gt = 3.14159265359, cn = {};
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
const Hw = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var Op = /[\s_\-\/\(\)]/g;
function Oi(t, e) {
  if (t[e])
    return t[e];
  for (var n = Object.keys(t), r = e.toLowerCase().replace(Op, ""), i = -1, s, a; ++i < n.length; )
    if (s = n[i], a = s.toLowerCase().replace(Op, ""), a === r)
      return t[s];
}
function Rf(t) {
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
      var l = Oi(Hw, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * Dt;
    },
    pm: function(o) {
      var l = Oi(cn, o);
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
var io = 1, gv = 2, yv = 3, ru = 4, vv = 5, Ah = -1, zw = /\s/, Yw = /[A-Za-z]/, Xw = /[A-Za-z84_]/, Yu = /[,\]]/, _v = /[\d\.E\-\+]/;
function Xr(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = io;
}
Xr.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== ru)
    for (; zw.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case io:
      return this.neutral(t);
    case gv:
      return this.keyword(t);
    case ru:
      return this.quoted(t);
    case vv:
      return this.afterquote(t);
    case yv:
      return this.number(t);
    case Ah:
      return;
  }
};
Xr.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = ru;
    return;
  }
  if (Yu.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
Xr.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = io;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = io, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Ah);
    return;
  }
};
Xr.prototype.number = function(t) {
  if (_v.test(t)) {
    this.word += t;
    return;
  }
  if (Yu.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
Xr.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = vv;
    return;
  }
  this.word += t;
};
Xr.prototype.keyword = function(t) {
  if (Xw.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = io;
    return;
  }
  if (Yu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
Xr.prototype.neutral = function(t) {
  if (Yw.test(t)) {
    this.word = t, this.state = gv;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = ru;
    return;
  }
  if (_v.test(t)) {
    this.word = t, this.state = yv;
    return;
  }
  if (Yu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
Xr.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === Ah)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function Kw(t) {
  var e = new Xr(t);
  return e.output();
}
function Mp(t, e, n) {
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
      t[0] = ["name", t[0]], Mp(e, n, t);
      return;
    default:
      for (r = -1; ++r < t.length; )
        if (!Array.isArray(t[r]))
          return Is(t, e[n]);
      return Mp(e, n, t);
  }
}
var Zw = 0.017453292519943295;
function Jw(t, e) {
  var n = e[0], r = e[1];
  !(n in t) && r in t && (t[n] = t[r], e.length === 3 && (t[n] = e[2](t[n])));
}
function nr(t) {
  return t * Zw;
}
function Qw(t) {
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
    return Jw(t, u);
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
    ["lat0", "latitude_of_center", nr],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", nr],
    ["x0", "false_easting", a],
    ["y0", "false_northing", a],
    ["long0", "central_meridian", nr],
    ["lat0", "latitude_of_origin", nr],
    ["lat0", "standard_parallel_1", nr],
    ["lat1", "standard_parallel_1", nr],
    ["lat2", "standard_parallel_2", nr],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", nr],
    ["srsCode", "name"]
  ];
  l.forEach(o), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") ? (t.lat0 = nr(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1) : !t.lat_ts && t.lat0 && t.projName === "Polar_Stereographic" && (t.lat_ts = t.lat0, t.lat0 = nr(t.lat0 > 0 ? 90 : -90));
}
function bv(t) {
  var e = Kw(t), n = e.shift(), r = e.shift();
  e.unshift(["name", r]), e.unshift(["type", n]);
  var i = {};
  return Is(e, i), Qw(i), i;
}
function Kt(t) {
  var e = this;
  if (arguments.length === 2) {
    var n = arguments[1];
    typeof n == "string" ? n.charAt(0) === "+" ? Kt[t] = Rf(arguments[1]) : Kt[t] = bv(arguments[1]) : Kt[t] = n;
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
function ex(t) {
  return typeof t == "string";
}
function tx(t) {
  return t in Kt;
}
var nx = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function rx(t) {
  return nx.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var ix = ["3857", "900913", "3785", "102113"];
function sx(t) {
  var e = Oi(t, "authority");
  if (!!e) {
    var n = Oi(e, "epsg");
    return n && ix.indexOf(n) > -1;
  }
}
function ax(t) {
  var e = Oi(t, "extension");
  if (!!e)
    return Oi(e, "proj4");
}
function ox(t) {
  return t[0] === "+";
}
function lx(t) {
  if (ex(t)) {
    if (tx(t))
      return Kt[t];
    if (rx(t)) {
      var e = bv(t);
      if (sx(e))
        return Kt["EPSG:3857"];
      var n = ax(e);
      return n ? Rf(n) : e;
    }
    if (ox(t))
      return Rf(t);
  } else
    return t;
}
function Tp(t, e) {
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
function Eo(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= gt ? t : t - Eo(t) * ro;
}
function Yn(t, e, n) {
  var r = t * n, i = 0.5 * t;
  return r = Math.pow((1 - r) / (1 + r), i), Math.tan(0.5 * (H - e)) / r;
}
function so(t, e) {
  for (var n = 0.5 * t, r, i, s = H - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (r = t * Math.sin(s), i = H - 2 * Math.atan(e * Math.pow((1 - r) / (1 + r), n)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function ux() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function cx(t) {
  var e = t.x, n = t.y;
  if (n * lr > 90 && n * lr < -90 && e * lr > 180 && e * lr < -180)
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
function fx(t) {
  var e = t.x - this.x0, n = t.y - this.y0, r, i;
  if (this.sphere)
    i = H - 2 * Math.atan(Math.exp(-n / (this.a * this.k0)));
  else {
    var s = Math.exp(-n / (this.a * this.k0));
    if (i = so(this.e, s), i === -9999)
      return null;
  }
  return r = se(this.long0 + e / (this.a * this.k0)), t.x = r, t.y = i, t;
}
var hx = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const dx = {
  init: ux,
  forward: cx,
  inverse: fx,
  names: hx
};
function px() {
}
function Np(t) {
  return t;
}
var mx = ["longlat", "identity"];
const gx = {
  init: px,
  forward: Np,
  inverse: Np,
  names: mx
};
var yx = [dx, gx], Al = {}, iu = [];
function Ev(t, e) {
  var n = iu.length;
  return t.names ? (iu[n] = t, t.names.forEach(function(r) {
    Al[r.toLowerCase()] = n;
  }), this) : (console.log(e), !0);
}
function vx(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof Al[e] < "u" && iu[Al[e]])
    return iu[Al[e]];
}
function _x() {
  yx.forEach(Ev);
}
const bx = {
  start: _x,
  add: Ev,
  get: vx
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
var Ex = be.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
be.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function Sx(t, e, n, r) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  r ? (t *= 1 - a * (Bw + a * (Ww + a * qw)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function wx(t, e, n, r, i) {
  if (!t) {
    var s = Oi(be, r);
    s || (s = Ex), t = s.a, e = s.b, n = s.rf;
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
function xx(t, e, n, r, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = If : o.datum_type = Gw, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = hs), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = ds, o.datum_params[3] *= Va, o.datum_params[4] *= Va, o.datum_params[5] *= Va, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = Hs, o.grids = a), o.a = n, o.b = r, o.es = i, o.ep2 = s, o;
}
var Sv = {};
function Ox(t, e) {
  var n = new DataView(e), r = Nx(n), i = Lx(n, r), s = Cx(n, i, r), a = { header: i, subgrids: s };
  return Sv[t] = a, a;
}
function Mx(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(Tx);
}
function Tx(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: Sv[t] || null,
    isNull: !1
  };
}
function Rs(t) {
  return t / 3600 * Math.PI / 180;
}
function Nx(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function Lx(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: $f(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function $f(t, e, n) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, n)));
}
function Cx(t, e, n) {
  for (var r = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = Ax(t, r, n), o = Dx(t, r, a, n), l = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), u = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    i.push({
      ll: [Rs(a.lowerLongitude), Rs(a.lowerLatitude)],
      del: [Rs(a.longitudeInterval), Rs(a.latitudeInterval)],
      lim: [l, u],
      count: a.gridNodeCount,
      cvs: Px(o)
    }), r += 176 + a.gridNodeCount * 16;
  }
  return i;
}
function Px(t) {
  return t.map(function(e) {
    return [Rs(e.longitudeShift), Rs(e.latitudeShift)];
  });
}
function Ax(t, e, n) {
  return {
    name: $f(t, e + 8, e + 16).trim(),
    parent: $f(t, e + 24, e + 24 + 8).trim(),
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
function dr(t, e) {
  if (!(this instanceof dr))
    return new dr(t);
  e = e || function(u) {
    if (u)
      throw u;
  };
  var n = lx(t);
  if (typeof n != "object") {
    e(t);
    return;
  }
  var r = dr.projections.get(n.projName);
  if (!r) {
    e(t);
    return;
  }
  if (n.datumCode && n.datumCode !== "none") {
    var i = Oi(xt, n.datumCode);
    i && (n.datum_params = n.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), n.ellps = i.ellipse, n.datumName = i.datumName ? i.datumName : n.datumCode);
  }
  n.k0 = n.k0 || 1, n.axis = n.axis || "enu", n.ellps = n.ellps || "wgs84", n.lat1 = n.lat1 || n.lat0;
  var s = wx(n.a, n.b, n.rf, n.ellps, n.sphere), a = Sx(s.a, s.b, s.rf, n.R_A), o = Mx(n.nadgrids), l = n.datum || xx(
    n.datumCode,
    n.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  Tp(this, n), Tp(this, r), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
dr.projections = bx;
dr.projections.start();
function kx(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === hs ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === ds ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function wv(t, e, n) {
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
function xv(t, e, n, r) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, p, m, g, b, _, S, y = t.x, E = t.y, N = t.z ? t.z : 0, w, C, A;
  if (o = Math.sqrt(y * y + E * E), l = Math.sqrt(y * y + E * E + N * N), o / n < i) {
    if (w = 0, l / n < i)
      return C = H, A = -r, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    w = Math.atan2(E, y);
  u = N / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), p = f * (1 - e) * c, m = u * c, S = 0;
  do
    S++, d = n / Math.sqrt(1 - e * m * m), A = o * p + N * m - d * (1 - e * m * m), h = e * d / (d + A), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), g = f * (1 - h) * c, b = u * c, _ = b * p - g * m, p = g, m = b;
  while (_ * _ > s && S < a);
  return C = Math.atan(b / Math.abs(g)), {
    x: w,
    y: C,
    z: A
  };
}
function Ix(t, e, n) {
  if (e === hs)
    return {
      x: t.x + n[0],
      y: t.y + n[1],
      z: t.z + n[2]
    };
  if (e === ds) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + r,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function Rx(t, e, n) {
  if (e === hs)
    return {
      x: t.x - n[0],
      y: t.y - n[1],
      z: t.z - n[2]
    };
  if (e === ds) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6], f = (t.x - r) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function Zo(t) {
  return t === hs || t === ds;
}
function $x(t, e, n) {
  if (kx(t, e) || t.datum_type === If || e.datum_type === If)
    return n;
  var r = t.a, i = t.es;
  if (t.datum_type === Hs) {
    var s = Lp(t, !1, n);
    if (s !== 0)
      return;
    r = wp, i = xp;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === Hs && (a = wp, o = Uw, l = xp), i === l && r === a && !Zo(t.datum_type) && !Zo(e.datum_type))
    return n;
  if (n = wv(n, i, r), Zo(t.datum_type) && (n = Ix(n, t.datum_type, t.datum_params)), Zo(e.datum_type) && (n = Rx(n, e.datum_type, e.datum_params)), n = xv(n, l, a, o), e.datum_type === Hs) {
    var u = Lp(e, !0, n);
    if (u !== 0)
      return;
  }
  return n;
}
function Lp(t, e, n) {
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
        var c = l[u], h = (Math.abs(c.del[1]) + Math.abs(c.del[0])) / 1e4, d = c.ll[0] - h, p = c.ll[1] - h, m = c.ll[0] + (c.lim[0] - 1) * c.del[0] + h, g = c.ll[1] + (c.lim[1] - 1) * c.del[1] + h;
        if (!(p > r.y || d > r.x || g < r.y || m < r.x) && (i = Fx(r, e, c), !isNaN(i.x)))
          break e;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -r.x * lr + " " + r.y * lr + " tried: '" + s + "'"), -1) : (n.x = -i.x, n.y = i.y, 0);
}
function Fx(t, e, n) {
  var r = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return r;
  var i = { x: t.x, y: t.y };
  i.x -= n.ll[0], i.y -= n.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = Cp(i, n);
  if (e) {
    if (isNaN(s.x))
      return r;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = Cp(s, n), isNaN(u.x)) {
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
function Cp(t, e) {
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
function Pp(t, e, n) {
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
function Ov(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function Vx(t) {
  Ap(t.x), Ap(t.y);
}
function Ap(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function jx(t, e) {
  return (t.datum.datum_type === hs || t.datum.datum_type === ds || t.datum.datum_type === Hs) && e.datumCode !== "WGS84" || (e.datum.datum_type === hs || e.datum.datum_type === ds || e.datum.datum_type === Hs) && t.datumCode !== "WGS84";
}
function su(t, e, n, r) {
  var i;
  Array.isArray(n) ? n = Ov(n) : n = {
    x: n.x,
    y: n.y,
    z: n.z,
    m: n.m
  };
  var s = n.z !== void 0;
  if (Vx(n), t.datum && e.datum && jx(t, e) && (i = new dr("WGS84"), n = su(t, i, n, r), t = i), r && t.axis !== "enu" && (n = Pp(t, !1, n)), t.projName === "longlat")
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
  if (t.from_greenwich && (n.x += t.from_greenwich), n = $x(t.datum, e.datum, n), !!n)
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
    })), r && e.axis !== "enu" ? Pp(e, !0, n) : (n && !s && delete n.z, n);
}
var Dp = dr("WGS84");
function Mc(t, e, n, r) {
  var i, s, a;
  return Array.isArray(n) ? (i = su(t, e, n, r) || { x: NaN, y: NaN }, n.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(n.splice(3)) : [i.x, i.y, n[2]].concat(n.splice(3)) : [i.x, i.y].concat(n.splice(2)) : [i.x, i.y]) : (s = su(t, e, n, r), a = Object.keys(n), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = n[o];
  }), s);
}
function kp(t) {
  return t instanceof dr ? t : t.oProj ? t.oProj : dr(t);
}
function qt(t, e, n) {
  t = kp(t);
  var r = !1, i;
  return typeof e > "u" ? (e = t, t = Dp, r = !0) : (typeof e.x < "u" || Array.isArray(e)) && (n = e, e = t, t = Dp, r = !0), e = kp(e), n ? Mc(t, e, n) : (i = {
    forward: function(s, a) {
      return Mc(t, e, s, a);
    },
    inverse: function(s, a) {
      return Mc(e, t, s, a);
    }
  }, r && (i.oProj = e), i);
}
var Ip = 6, Mv = "AJSAJS", Tv = "AFAFAF", $s = 65, an = 73, xn = 79, Oa = 86, Ma = 90;
const Gx = {
  forward: Nv,
  inverse: Ux,
  toPoint: Lv
};
function Nv(t, e) {
  return e = e || 5, qx(Bx({
    lat: t[1],
    lon: t[0]
  }), e);
}
function Ux(t) {
  var e = Dh(Pv(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function Lv(t) {
  var e = Dh(Pv(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function Tc(t) {
  return t * (Math.PI / 180);
}
function Rp(t) {
  return 180 * (t / Math.PI);
}
function Bx(t) {
  var e = t.lat, n = t.lon, r = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = Tc(e), p = Tc(n), m, g;
  g = Math.floor((n + 180) / 6) + 1, n === 180 && (g = 60), e >= 56 && e < 64 && n >= 3 && n < 12 && (g = 32), e >= 72 && e < 84 && (n >= 0 && n < 9 ? g = 31 : n >= 9 && n < 21 ? g = 33 : n >= 21 && n < 33 ? g = 35 : n >= 33 && n < 42 && (g = 37)), a = (g - 1) * 6 - 180 + 3, m = Tc(a), o = i / (1 - i), l = r / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (p - m), h = r * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var b = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, _ = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (_ += 1e7), {
    northing: Math.round(_),
    easting: Math.round(b),
    zoneNumber: g,
    zoneLetter: Wx(e)
  };
}
function Dh(t) {
  var e = t.northing, n = t.easting, r = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, p, m, g, b, _, S = n - 5e5, y = e;
  r < "N" && (y -= 1e7), g = (i - 1) * 6 - 180 + 3, l = o / (1 - o), m = y / s, b = m / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), _ = b + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * b) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * b) + 151 * u * u * u / 96 * Math.sin(6 * b), f = a / Math.sqrt(1 - o * Math.sin(_) * Math.sin(_)), c = Math.tan(_) * Math.tan(_), h = l * Math.cos(_) * Math.cos(_), d = a * (1 - o) / Math.pow(1 - o * Math.sin(_) * Math.sin(_), 1.5), p = S / (f * s);
  var E = _ - f * Math.tan(_) / d * (p * p / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * p * p * p * p / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * p * p * p * p * p * p / 720);
  E = Rp(E);
  var N = (p - (1 + 2 * c + h) * p * p * p / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * p * p * p * p * p / 120) / Math.cos(_);
  N = g + Rp(N);
  var w;
  if (t.accuracy) {
    var C = Dh({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    w = {
      top: C.lat,
      right: C.lon,
      bottom: E,
      left: N
    };
  } else
    w = {
      lat: E,
      lon: N
    };
  return w;
}
function Wx(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function qx(t, e) {
  var n = "00000" + t.easting, r = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + Hx(t.easting, t.northing, t.zoneNumber) + n.substr(n.length - 5, e) + r.substr(r.length - 5, e);
}
function Hx(t, e, n) {
  var r = Cv(n), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return zx(i, s, r);
}
function Cv(t) {
  var e = t % Ip;
  return e === 0 && (e = Ip), e;
}
function zx(t, e, n) {
  var r = n - 1, i = Mv.charCodeAt(r), s = Tv.charCodeAt(r), a = i + t - 1, o = s + e, l = !1;
  a > Ma && (a = a - Ma + $s - 1, l = !0), (a === an || i < an && a > an || (a > an || i < an) && l) && a++, (a === xn || i < xn && a > xn || (a > xn || i < xn) && l) && (a++, a === an && a++), a > Ma && (a = a - Ma + $s - 1), o > Oa ? (o = o - Oa + $s - 1, l = !0) : l = !1, (o === an || s < an && o > an || (o > an || s < an) && l) && o++, (o === xn || s < xn && o > xn || (o > xn || s < xn) && l) && (o++, o === an && o++), o > Oa && (o = o - Oa + $s - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function Pv(t) {
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
  for (var l = Cv(a), u = Yx(n.charAt(0), l), f = Xx(n.charAt(1), l); f < Kx(o); )
    f += 2e6;
  var c = e - s;
  if (c % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var h = c / 2, d = 0, p = 0, m, g, b, _, S;
  return h > 0 && (m = 1e5 / Math.pow(10, h), g = t.substring(s, s + h), d = parseFloat(g) * m, b = t.substring(s + h), p = parseFloat(b) * m), _ = d + u, S = p + f, {
    easting: _,
    northing: S,
    zoneLetter: o,
    zoneNumber: a,
    accuracy: m
  };
}
function Yx(t, e) {
  for (var n = Mv.charCodeAt(e - 1), r = 1e5, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > Ma) {
      if (i)
        throw "Bad character: " + t;
      n = $s, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function Xx(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var n = Tv.charCodeAt(e - 1), r = 0, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > Oa) {
      if (i)
        throw "Bad character: " + t;
      n = $s, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function Kx(t) {
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
  return Nv([this.x, this.y], t);
};
var Zx = 1, Jx = 0.25, $p = 0.046875, Fp = 0.01953125, Vp = 0.01068115234375, Qx = 0.75, eO = 0.46875, tO = 0.013020833333333334, nO = 0.007120768229166667, rO = 0.3645833333333333, iO = 0.005696614583333333, sO = 0.3076171875;
function Av(t) {
  var e = [];
  e[0] = Zx - t * (Jx + t * ($p + t * (Fp + t * Vp))), e[1] = t * (Qx - t * ($p + t * (Fp + t * Vp)));
  var n = t * t;
  return e[2] = n * (eO - t * (tO + t * nO)), n *= t, e[3] = n * (rO - t * iO), e[4] = n * t * sO, e;
}
function Xu(t, e, n, r) {
  return n *= e, e *= e, r[0] * t - n * (r[1] + e * (r[2] + e * (r[3] + e * r[4])));
}
var aO = 20;
function Dv(t, e, n) {
  for (var r = 1 / (1 - e), i = t, s = aO; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = (Xu(i, a, Math.cos(i), n) - t) * (o * Math.sqrt(o)) * r, i -= o, Math.abs(o) < te)
      return i;
  }
  return i;
}
function oO() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Av(this.es), this.ml0 = Xu(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function lO(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s, a, o = Math.sin(n), l = Math.cos(n);
  if (this.es) {
    var f = l * r, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), p = Math.abs(l) > te ? Math.tan(n) : 0, m = Math.pow(p, 2), g = Math.pow(m, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var b = Xu(n, o, l, this.en);
    s = this.a * (this.k0 * f * (1 + c / 6 * (1 - m + h + c / 20 * (5 - 18 * m + g + 14 * h - 58 * m * h + c / 42 * (61 + 179 * g - g * m - 479 * m))))) + this.x0, a = this.a * (this.k0 * (b - this.ml0 + o * r * f / 2 * (1 + c / 12 * (5 - m + 9 * h + 4 * d + c / 30 * (61 + g - 58 * m + 270 * h - 330 * m * h + c / 56 * (1385 + 543 * g - g * m - 3111 * m)))))) + this.y0;
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
function uO(t) {
  var e, n, r, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, n = Dv(e, this.es, this.en), Math.abs(n) < H) {
      var c = Math.sin(n), h = Math.cos(n), d = Math.abs(h) > te ? Math.tan(n) : 0, p = this.ep2 * Math.pow(h, 2), m = Math.pow(p, 2), g = Math.pow(d, 2), b = Math.pow(g, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var _ = s * Math.sqrt(e) / this.k0, S = Math.pow(_, 2);
      e = e * d, r = n - e * S / (1 - this.es) * 0.5 * (1 - S / 12 * (5 + 3 * g - 9 * p * g + p - 4 * m - S / 30 * (61 + 90 * g - 252 * p * g + 45 * b + 46 * p - S / 56 * (1385 + 3633 * g + 4095 * b + 1574 * b * g)))), i = se(this.long0 + _ * (1 - S / 6 * (1 + 2 * g + p - S / 20 * (5 + 28 * g + 24 * b + 8 * p * g + 6 * p - S / 42 * (61 + 662 * g + 1320 * b + 720 * b * g)))) / h);
    } else
      r = H * Eo(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), r = Math.asin(e), a < 0 && (r = -r), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = r, t;
}
var cO = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const Dl = {
  init: oO,
  forward: lO,
  inverse: uO,
  names: cO
};
function kv(t) {
  var e = Math.exp(t);
  return e = (e - 1 / e) / 2, e;
}
function Mn(t, e) {
  t = Math.abs(t), e = Math.abs(e);
  var n = Math.max(t, e), r = Math.min(t, e) / (n || 1);
  return n * Math.sqrt(1 + Math.pow(r, 2));
}
function fO(t) {
  var e = 1 + t, n = e - 1;
  return n === 0 ? t : t * Math.log(e) / n;
}
function hO(t) {
  var e = Math.abs(t);
  return e = fO(e * (1 + e / (Mn(1, e) + 1))), t < 0 ? -e : e;
}
function kh(t, e) {
  for (var n = 2 * Math.cos(2 * e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function dO(t, e) {
  for (var n = 2 * Math.cos(e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return Math.sin(e) * a;
}
function pO(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function Iv(t, e, n) {
  for (var r = Math.sin(e), i = Math.cos(e), s = kv(n), a = pO(n), o = 2 * i * a, l = -2 * r * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, p, m; --u >= 0; )
    p = h, m = c, h = f, c = d, f = -p + o * h - l * c + t[u], d = -m + l * h + o * c;
  return o = r * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function mO() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (Dl.init.apply(this), this.forward = Dl.forward, this.inverse = Dl.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), n = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), n = n * e, this.cgb[1] = n * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = n * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), n = n * e, this.cgb[2] = n * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = n * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), n = n * e, this.cgb[3] = n * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = n * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), n = n * e, this.cgb[4] = n * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = n * (-734 / 315 + e * (109598 / 31185)), n = n * e, this.cgb[5] = n * (601676 / 22275), this.cbg[5] = n * (444337 / 155925), n = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + n * (1 / 4 + n * (1 / 64 + n / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = n * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = n * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), n = n * e, this.utg[2] = n * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = n * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), n = n * e, this.utg[3] = n * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = n * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), n = n * e, this.utg[4] = n * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = n * (34729 / 80640 + e * (-3418889 / 1995840)), n = n * e, this.utg[5] = n * (-20648693 / 638668800), this.gtu[5] = n * (212378941 / 319334400);
  var r = kh(this.cbg, this.lat0);
  this.Zb = -this.Qn * (r + dO(this.gtu, 2 * r));
}
function gO(t) {
  var e = se(t.x - this.long0), n = t.y;
  n = kh(this.cbg, n);
  var r = Math.sin(n), i = Math.cos(n), s = Math.sin(e), a = Math.cos(e);
  n = Math.atan2(r, a * i), e = Math.atan2(s * i, Mn(r, i * a)), e = hO(Math.tan(e));
  var o = Iv(this.gtu, 2 * n, 2 * e);
  n = n + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * n + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function yO(t) {
  var e = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  n = (n - this.Zb) / this.Qn, e = e / this.Qn;
  var r, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = Iv(this.utg, 2 * n, 2 * e);
    n = n + s[0], e = e + s[1], e = Math.atan(kv(e));
    var a = Math.sin(n), o = Math.cos(n), l = Math.sin(e), u = Math.cos(e);
    n = Math.atan2(a * u, Mn(l, u * o)), e = Math.atan2(l, u * o), r = se(e + this.long0), i = kh(this.cgb, n);
  } else
    r = 1 / 0, i = 1 / 0;
  return t.x = r, t.y = i, t;
}
var vO = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const kl = {
  init: mO,
  forward: gO,
  inverse: yO,
  names: vO
};
function _O(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var bO = "etmerc";
function EO() {
  var t = _O(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * Dt, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, kl.init.apply(this), this.forward = kl.forward, this.inverse = kl.inverse;
}
var SO = ["Universal Transverse Mercator System", "utm"];
const wO = {
  init: EO,
  names: SO,
  dependsOn: bO
};
function Ih(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var xO = 20;
function OO() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + We) / (Math.pow(Math.tan(0.5 * this.lat0 + We), this.C) * Ih(this.e * t, this.ratexp));
}
function MO(t) {
  var e = t.x, n = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * n + We), this.C) * Ih(this.e * Math.sin(n), this.ratexp)) - H, t.x = this.C * e, t;
}
function TO(t) {
  for (var e = 1e-14, n = t.x / this.C, r = t.y, i = Math.pow(Math.tan(0.5 * r + We) / this.K, 1 / this.C), s = xO; s > 0 && (r = 2 * Math.atan(i * Ih(this.e * Math.sin(t.y), -0.5 * this.e)) - H, !(Math.abs(r - t.y) < e)); --s)
    t.y = r;
  return s ? (t.x = n, t.y = r, t) : null;
}
var NO = ["gauss"];
const Rh = {
  init: OO,
  forward: MO,
  inverse: TO,
  names: NO
};
function LO() {
  Rh.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function CO(t) {
  var e, n, r, i;
  return t.x = se(t.x - this.long0), Rh.forward.apply(this, [t]), e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * n * r), t.x = i * n * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * n * r), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function PO(t) {
  var e, n, r, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Mn(t.x, t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), n = Math.cos(a), i = Math.asin(n * this.sinc0 + t.y * e * this.cosc0 / s), r = Math.atan2(t.x * e, s * this.cosc0 * n - t.y * this.sinc0 * e);
  } else
    i = this.phic0, r = 0;
  return t.x = r, t.y = i, Rh.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var AO = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const DO = {
  init: LO,
  forward: CO,
  inverse: PO,
  names: AO
};
function kO(t, e, n) {
  return e *= n, Math.tan(0.5 * (H + t)) * Math.pow((1 - e) / (1 + e), 0.5 * n);
}
function IO() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && (this.k0 = 0.5 * (1 + Eo(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= te && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && Math.abs(Math.cos(this.lat_ts)) > te && (this.k0 = 0.5 * this.cons * br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Yn(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = br(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - H, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function RO(t) {
  var e = t.x, n = t.y, r = Math.sin(n), i = Math.cos(n), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= te && Math.abs(n + this.lat0) <= te ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * r + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * r - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(n, r, this.e)) - H, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= te ? (u = Yn(this.e, n * this.con, this.con * r), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < te ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function $O(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, n = this.lat0, a <= te ? (t.x = e, t.y = n, t) : (n = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < te ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = n, t);
  } else if (Math.abs(this.coslat0) <= te) {
    if (a <= te)
      return n = this.lat0, e = this.long0, t.x = e, t.y = n, t;
    t.x *= this.con, t.y *= this.con, r = a * this.cons / (2 * this.a * this.k0), n = this.con * so(this.e, r), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= te ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), n = -1 * so(this.e, Math.tan(0.5 * (H + s)));
  return t.x = e, t.y = n, t;
}
var FO = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const VO = {
  init: IO,
  forward: RO,
  inverse: $O,
  names: FO,
  ssfn_: kO
};
function jO() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), n = this.a, r = this.rf, i = 1 / r, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * n * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function GO(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), n = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), r = -this.alpha * (e + n) + this.K, i = 2 * (Math.atan(Math.exp(r)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function UO(t) {
  for (var e = t.x - this.x0, n = t.y - this.y0, r = e / this.R, i = 2 * (Math.atan(Math.exp(n / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(r)), a = Math.atan(Math.sin(r) / (Math.cos(this.b0) * Math.cos(r) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var BO = ["somerc"];
const WO = {
  init: jO,
  forward: GO,
  inverse: UO,
  names: BO
};
var As = 1e-7;
function qO(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], n = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(n) !== -1;
}
function HO() {
  var t, e, n, r, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, p = 0, m = 0, g = 0, b = 0;
  this.no_off = qO(this), this.no_rot = "no_rot" in this;
  var _ = !1;
  "alpha" in this && (_ = !0);
  var S = !1;
  if ("rectified_grid_angle" in this && (S = !0), _ && (b = this.alpha), S && (f = this.rectified_grid_angle * Dt), _ || S)
    h = this.longc;
  else if (d = this.long1, m = this.lat1, p = this.long2, g = this.lat2, Math.abs(m - g) <= As || (t = Math.abs(m)) <= As || Math.abs(t - H) <= As || Math.abs(Math.abs(this.lat0) - H) <= As || Math.abs(Math.abs(g) - H) <= As)
    throw new Error();
  var y = 1 - this.es;
  e = Math.sqrt(y), Math.abs(this.lat0) > te ? (o = Math.sin(this.lat0), n = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = n * n, this.B = Math.sqrt(1 + this.es * this.B * this.B / y), this.A = this.B * this.k0 * e / t, r = this.B * e / (n * Math.sqrt(t)), i = r * r - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += r, this.E *= Math.pow(Yn(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = r = i = 1), _ || S ? (_ ? (c = Math.asin(Math.sin(b) / r), S || (f = b)) : (c = f, b = Math.asin(r * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(Yn(this.e, m, Math.sin(m)), this.B), a = Math.pow(Yn(this.e, g, Math.sin(g)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - p, t < -Math.pi ? p -= ro : t > Math.pi && (p += ro), this.lam0 = se(0.5 * (d + p) - Math.atan(u * Math.tan(0.5 * this.B * (d - p)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = b = Math.asin(r * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(r * r - 1) / Math.cos(b))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(We - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(We + i));
}
function zO(t) {
  var e = {}, n, r, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - H) > te) {
    if (a = this.E / Math.pow(Yn(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, n = 0.5 * (a - o), r = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (n * this.singam - s * this.cosgam) / r, Math.abs(Math.abs(i) - 1) < te)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < As ? l = this.A * t.x : l = this.ArB * Math.atan2(n * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function YO(t) {
  var e, n, r, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (n = t.y, e = t.x) : (n = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), r = Math.exp(-this.BrA * n), i = 0.5 * (r - 1 / r), s = 0.5 * (r + 1 / r), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < te)
    l.x = 0, l.y = o < 0 ? -H : H;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = so(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var XO = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const KO = {
  init: HO,
  forward: zO,
  inverse: YO,
  names: XO
};
function ZO() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < te)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), n = Math.cos(this.lat1), r = br(this.e, e, n), i = Yn(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = br(this.e, s, a), l = Yn(this.e, this.lat2, s), u = Yn(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > te ? this.ns = Math.log(r / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = r / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function JO(t) {
  var e = t.x, n = t.y;
  Math.abs(2 * Math.abs(n) - Math.PI) <= te && (n = Eo(n) * (H - 2 * te));
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
function QO(t) {
  var e, n, r, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), n = 1) : (e = -Math.sqrt(a * a + o * o), n = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(n * a, n * o)), e !== 0 || this.ns > 0) {
    if (n = 1 / this.ns, r = Math.pow(e / (this.a * this.f0), n), i = so(this.e, r), i === -9999)
      return null;
  } else
    i = -H;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var eM = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const tM = {
  init: ZO,
  forward: JO,
  inverse: QO,
  names: eM
};
function nM() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function rM(t) {
  var e, n, r, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), n = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), r = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(n) + Math.sin(this.ad) * Math.cos(n) * Math.cos(r)), s = Math.asin(Math.cos(n) * Math.sin(r) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function iM(t) {
  var e, n, r, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), r = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(r) - Math.sin(this.ad) * Math.cos(r) * Math.cos(i)), n = Math.asin(Math.cos(r) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - n / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var sM = ["Krovak", "krovak"];
const aM = {
  init: nM,
  forward: rM,
  inverse: iM,
  names: sM
};
function Jt(t, e, n, r, i) {
  return t * i - e * Math.sin(2 * i) + n * Math.sin(4 * i) - r * Math.sin(6 * i);
}
function So(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function wo(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function xo(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function Oo(t) {
  return t * t * t * (35 / 3072);
}
function na(t, e, n) {
  var r = e * n;
  return t / Math.sqrt(1 - r * r);
}
function aa(t) {
  return Math.abs(t) < H ? t : t - Eo(t) * Math.PI;
}
function au(t, e, n, r, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - n * Math.sin(2 * s) + r * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * n * Math.cos(2 * s) + 4 * r * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function oM() {
  this.sphere || (this.e0 = So(this.es), this.e1 = wo(this.es), this.e2 = xo(this.es), this.e3 = Oo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function lM(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(r)), n = this.a * (Math.atan2(Math.tan(i), Math.cos(r)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = na(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = r * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), n = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = n + this.y0, t;
}
function uM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i;
  if (this.sphere) {
    var s = n + this.lat0;
    r = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + n, o = au(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - H) <= te)
      return t.x = this.long0, t.y = H, n < 0 && (t.y *= -1), t;
    var l = na(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    r = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = aa(r), t;
}
var cM = ["Cassini", "Cassini_Soldner", "cass"];
const fM = {
  init: oM,
  forward: lM,
  inverse: uM,
  names: cM
};
function Ei(t, e) {
  var n;
  return t > 1e-7 ? (n = t * e, (1 - t * t) * (e / (1 - n * n) - 0.5 / t * Math.log((1 - n) / (1 + n)))) : 2 * e;
}
var hM = 1, dM = 2, pM = 3, mM = 4;
function gM() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - H) < te ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < te ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = Ei(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = OM(this.es), this.mode) {
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
function yM(t) {
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
function vM(t) {
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
    r = Math.atan2(e, n), i = MM(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + r), t.y = i, t;
}
var _M = 0.3333333333333333, bM = 0.17222222222222222, EM = 0.10257936507936508, SM = 0.06388888888888888, wM = 0.0664021164021164, xM = 0.016415012942191543;
function OM(t) {
  var e, n = [];
  return n[0] = t * _M, e = t * t, n[0] += e * bM, n[1] = e * SM, e *= t, n[0] += e * EM, n[1] += e * wM, n[2] = e * xM, n;
}
function MM(t, e) {
  var n = t + t;
  return t + e[0] * Math.sin(n) + e[1] * Math.sin(n + n) + e[2] * Math.sin(n + n + n);
}
var TM = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const NM = {
  init: gM,
  forward: yM,
  inverse: vM,
  names: TM,
  S_POLE: hM,
  N_POLE: dM,
  EQUIT: pM,
  OBLIQ: mM
};
function Mi(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function LM() {
  Math.abs(this.lat1 + this.lat2) < te || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = br(this.e3, this.sin_po, this.cos_po), this.qs1 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = br(this.e3, this.sin_po, this.cos_po), this.qs2 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Ei(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > te ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function CM(t) {
  var e = t.x, n = t.y;
  this.sin_phi = Math.sin(n), this.cos_phi = Math.cos(n);
  var r = Ei(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function PM(t) {
  var e, n, r, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), r = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), r = -1), i = 0, e !== 0 && (i = Math.atan2(r * t.x, r * t.y)), r = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - r * r) / (2 * this.ns0)) : (n = (this.c - r * r) / this.ns0, a = this.phi1z(this.e3, n)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function AM(t, e) {
  var n, r, i, s, a, o = Mi(0.5 * e);
  if (t < te)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (n = Math.sin(o), r = Math.cos(o), i = t * n, s = 1 - i * i, a = 0.5 * s * s / r * (e / (1 - l) - n / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var DM = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const kM = {
  init: LM,
  forward: CM,
  inverse: PM,
  names: DM,
  phi1z: AM
};
function IM() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function RM(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, a > 0 || Math.abs(a) <= te ? (o = this.x0 + this.a * s * n * Math.sin(r) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i) / a) : (o = this.x0 + this.infinity_dist * n * Math.sin(r), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function $M(t) {
  var e, n, r, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), n = Math.sin(i), r = Math.cos(i), a = Mi(r * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.atan2(t.x * n, e * this.cos_p14 * r - t.y * this.sin_p14 * n), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var FM = ["gnom"];
const VM = {
  init: IM,
  forward: RM,
  inverse: $M,
  names: FM
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
function GM() {
  this.sphere || (this.k0 = br(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function UM(t) {
  var e = t.x, n = t.y, r, i, s = se(e - this.long0);
  if (this.sphere)
    r = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(n) / Math.cos(this.lat_ts);
  else {
    var a = Ei(this.e, Math.sin(n));
    r = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = r, t.y = i, t;
}
function BM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), n = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (n = jM(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = n, t;
}
var WM = ["cea"];
const qM = {
  init: GM,
  forward: UM,
  inverse: BM,
  names: WM
};
function HM() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function zM(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = aa(n - this.lat0);
  return t.x = this.x0 + this.a * r * this.rc, t.y = this.y0 + this.a * i, t;
}
function YM(t) {
  var e = t.x, n = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = aa(this.lat0 + (n - this.y0) / this.a), t;
}
var XM = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const KM = {
  init: HM,
  forward: zM,
  inverse: YM,
  names: XM
};
var jp = 20;
function ZM() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = So(this.es), this.e1 = wo(this.es), this.e2 = xo(this.es), this.e3 = Oo(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function JM(t) {
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
function QM(t) {
  var e, n, r, i, s, a, o, l, u;
  if (r = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= te)
      e = se(r / this.a + this.long0), n = 0;
    else {
      a = this.lat0 + i / this.a, o = r * r / this.a / this.a + a * a, l = a;
      var f;
      for (s = jp; s; --s)
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
    var c, h, d, p, m;
    for (s = jp; s; --s)
      if (m = this.e * Math.sin(l), c = Math.sqrt(1 - m * m) * Math.tan(l), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), p = h / this.a, u = (a * (c * p + 1) - p - 0.5 * c * (p * p + o)) / (this.es * Math.sin(2 * l) * (p * p + o - 2 * a * p) / (4 * c) + (a - p) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= te) {
        n = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(n), 2)) * Math.tan(n), e = se(this.long0 + Math.asin(r * c / this.a) / Math.sin(n));
  }
  return t.x = e, t.y = n, t;
}
var eT = ["Polyconic", "poly"];
const tT = {
  init: ZM,
  forward: JM,
  inverse: QM,
  names: eT
};
function nT() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function rT(t) {
  var e, n = t.x, r = t.y, i = r - this.lat0, s = n - this.long0, a = i / Va * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, p, m, g = 0, b = 0;
  for (e = 1; e <= 6; e++)
    p = h * f - d * c, m = d * f + h * c, h = p, d = m, g = g + this.B_re[e] * h - this.B_im[e] * d, b = b + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = b * this.a + this.x0, t.y = g * this.a + this.y0, t;
}
function iT(t) {
  var e, n = t.x, r = t.y, i = n - this.x0, s = r - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var p = 0; p < this.iterations; p++) {
    var m = h, g = d, b, _, S = a, y = o;
    for (e = 2; e <= 6; e++)
      b = m * h - g * d, _ = g * h + m * d, m = b, g = _, S = S + (e - 1) * (this.B_re[e] * m - this.B_im[e] * g), y = y + (e - 1) * (this.B_im[e] * m + this.B_re[e] * g);
    m = 1, g = 0;
    var E = this.B_re[1], N = this.B_im[1];
    for (e = 2; e <= 6; e++)
      b = m * h - g * d, _ = g * h + m * d, m = b, g = _, E = E + e * (this.B_re[e] * m - this.B_im[e] * g), N = N + e * (this.B_im[e] * m + this.B_re[e] * g);
    var w = E * E + N * N;
    h = (S * E + y * N) / w, d = (y * E - S * N) / w;
  }
  var C = h, A = d, T = 1, k = 0;
  for (e = 1; e <= 9; e++)
    T = T * C, k = k + this.D[e] * T;
  var I = this.lat0 + k * Va * 1e5, K = this.long0 + A;
  return t.x = K, t.y = I, t;
}
var sT = ["New_Zealand_Map_Grid", "nzmg"];
const aT = {
  init: nT,
  forward: rT,
  inverse: iT,
  names: sT
};
function oT() {
}
function lT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = this.x0 + this.a * r, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + n / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function uT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), n = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = n, t;
}
var cT = ["Miller_Cylindrical", "mill"];
const fT = {
  init: oT,
  forward: lT,
  inverse: uT,
  names: cT
};
var hT = 20;
function dT() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Av(this.es);
}
function pT(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = hT; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < te)
          break;
      }
    e = this.a * this.C_x * r * (this.m + Math.cos(i)), n = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    n = this.a * Xu(i, l, u, this.en), e = this.a * r * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = n, t;
}
function mT(t) {
  var e, n, r, i;
  return t.x -= this.x0, r = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, r = r / (this.C_x * (this.m + Math.cos(e))), this.m ? e = Mi((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = Mi(Math.sin(e) / this.n)), r = se(r + this.long0), e = aa(e)) : (e = Dv(t.y / this.a, this.es, this.en), i = Math.abs(e), i < H ? (i = Math.sin(e), n = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), r = se(n)) : i - te < H && (r = this.long0)), t.x = r, t.y = e, t;
}
var gT = ["Sinusoidal", "sinu"];
const yT = {
  init: dT,
  forward: pT,
  inverse: mT,
  names: gT
};
function vT() {
}
function _T(t) {
  for (var e = t.x, n = t.y, r = se(e - this.long0), i = n, s = Math.PI * Math.sin(n); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < te)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(n) < te && (r = 0);
  var o = 0.900316316158 * this.a * r * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function bT(t) {
  var e, n;
  t.x -= this.x0, t.y -= this.y0, n = t.y / (1.4142135623731 * this.a), Math.abs(n) > 0.999999999999 && (n = 0.999999999999), e = Math.asin(n);
  var r = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  r < -Math.PI && (r = -Math.PI), r > Math.PI && (r = Math.PI), n = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(n) > 1 && (n = 1);
  var i = Math.asin(n);
  return t.x = r, t.y = i, t;
}
var ET = ["Mollweide", "moll"];
const ST = {
  init: vT,
  forward: _T,
  inverse: bT,
  names: ET
};
function wT() {
  Math.abs(this.lat1 + this.lat2) < te || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = So(this.es), this.e1 = wo(this.es), this.e2 = xo(this.es), this.e3 = Oo(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = br(this.e, this.sinphi, this.cosphi), this.ml1 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < te ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = br(this.e, this.sinphi, this.cosphi), this.ml2 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function xT(t) {
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
function OT(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, n, r, i;
  this.ns >= 0 ? (n = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (n = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (n !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), r = aa(this.g - n / this.a), t.x = i, t.y = r, t;
  var a = this.g - n / this.a;
  return r = au(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = r, t;
}
var MT = ["Equidistant_Conic", "eqdc"];
const TT = {
  init: wT,
  forward: xT,
  inverse: OT,
  names: MT
};
function NT() {
  this.R = this.a;
}
function LT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s;
  Math.abs(n) <= te && (i = this.x0 + this.R * r, s = this.y0);
  var a = Mi(2 * Math.abs(n / Math.PI));
  (Math.abs(r) <= te || Math.abs(Math.abs(n) - H) <= te) && (i = this.x0, n >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / r - r / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), p = d * d, m = Math.PI * this.R * (o * (c - p) + Math.sqrt(l * (c - p) * (c - p) - (p + l) * (h - p))) / (p + l);
  r < 0 && (m = -m), i = this.x0 + m;
  var g = l + c;
  return m = Math.PI * this.R * (d * g - o * Math.sqrt((p + l) * (l + 1) - g * g)) / (p + l), n >= 0 ? s = this.y0 + m : s = this.y0 - m, t.x = i, t.y = s, t;
}
function CT(t) {
  var e, n, r, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, r = t.x / c, i = t.y / c, s = r * r + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + r * r, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? n = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : n = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(r) < te ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (r * r - i * i) + s * s)) / 2 / r), t.x = e, t.y = n, t;
}
var PT = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const AT = {
  init: NT,
  forward: LT,
  inverse: CT,
  names: PT
};
function DT() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function kT(t) {
  var e = t.x, n = t.y, r = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, p, m, g, b, _, S, y, E, N, w, C, A, T, k, I;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= te ? (t.x = this.x0 + this.a * (H - n) * Math.sin(s), t.y = this.y0 - this.a * (H - n) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (t.x = this.x0 + this.a * (H + n) * Math.sin(s), t.y = this.y0 + this.a * (H + n) * Math.cos(s), t) : (w = this.sin_p12 * r + this.cos_p12 * i * Math.cos(s), E = Math.acos(w), N = E ? E / Math.sin(E) : 1, t.x = this.x0 + this.a * N * i * Math.sin(s), t.y = this.y0 + this.a * N * (this.cos_p12 * r - this.sin_p12 * i * Math.cos(s)), t) : (a = So(this.es), o = wo(this.es), l = xo(this.es), u = Oo(this.es), Math.abs(this.sin_p12 - 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = r / i, d = na(this.a, this.e, this.sin_p12), p = na(this.a, this.e, r), m = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (p * i)), g = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(m) - this.sin_p12 * Math.cos(s)), g === 0 ? C = Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : Math.abs(Math.abs(g) - Math.PI) <= te ? C = -Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : C = Math.asin(Math.sin(s) * Math.cos(m) / Math.sin(g)), b = this.e * this.sin_p12 / Math.sqrt(1 - this.es), _ = this.e * this.cos_p12 * Math.cos(g) / Math.sqrt(1 - this.es), S = b * _, y = _ * _, A = C * C, T = A * C, k = T * C, I = k * C, E = d * C * (1 - A * y * (1 - y) / 6 + T / 8 * S * (1 - 2 * y) + k / 120 * (y * (4 - 7 * y) - 3 * b * b * (1 - 7 * y)) - I / 48 * S), t.x = this.x0 + E * Math.sin(g), t.y = this.y0 + E * Math.cos(g), t));
}
function IT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a, o, l, u, f, c, h, d, p, m, g, b, _, S, y, E, N, w, C;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * H * this.a ? void 0 : (n = e / this.a, r = Math.sin(n), i = Math.cos(n), s = this.long0, Math.abs(e) <= te ? a = this.lat0 : (a = Mi(i * this.sin_p12 + t.y * r * this.cos_p12 / e), o = Math.abs(this.lat0) - H, Math.abs(o) <= te ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p12 * i - t.y * this.sin_p12 * r))), t.x = s, t.y = a, t)) : (l = So(this.es), u = wo(this.es), f = xo(this.es), c = Oo(this.es), Math.abs(this.sin_p12 - 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = au(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = au(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), g = Math.atan2(t.x, t.y), p = na(this.a, this.e, this.sin_p12), b = Math.cos(g), _ = this.e * this.cos_p12 * b, S = -_ * _ / (1 - this.es), y = 3 * this.es * (1 - S) * this.sin_p12 * this.cos_p12 * b / (1 - this.es), E = e / p, N = E - S * (1 + S) * Math.pow(E, 3) / 6 - y * (1 + 3 * S) * Math.pow(E, 4) / 24, w = 1 - S * N * N / 2 - E * N * N * N / 6, m = Math.asin(this.sin_p12 * Math.cos(N) + this.cos_p12 * Math.sin(N) * b), s = se(this.long0 + Math.asin(Math.sin(g) * Math.sin(N) / Math.cos(m))), C = Math.sin(m), a = Math.atan2((C - this.es * w * this.sin_p12) * Math.tan(m), C * (1 - this.es)), t.x = s, t.y = a, t));
}
var RT = ["Azimuthal_Equidistant", "aeqd"];
const $T = {
  init: DT,
  forward: kT,
  inverse: IT,
  names: RT
};
function FT() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function VT(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, (a > 0 || Math.abs(a) <= te) && (o = this.a * s * n * Math.sin(r), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function jT(t) {
  var e, n, r, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), n = Mi(e / this.a), r = Math.sin(n), i = Math.cos(n), a = this.long0, Math.abs(e) <= te ? (o = this.lat0, t.x = a, t.y = o, t) : (o = Mi(i * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.abs(this.lat0) - H, Math.abs(s) <= te ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p14 * i - t.y * this.sin_p14 * r)), t.x = a, t.y = o, t));
}
var GT = ["ortho"];
const UT = {
  init: FT,
  forward: VT,
  inverse: jT,
  names: GT
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
function BT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= H - We / 2 ? this.face = ot.TOP : this.lat0 <= -(H - We / 2) ? this.face = ot.BOTTOM : Math.abs(this.long0) <= We ? this.face = ot.FRONT : Math.abs(this.long0) <= H + We ? this.face = this.long0 > 0 ? ot.RIGHT : ot.LEFT : this.face = ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function WT(t) {
  var e = { x: 0, y: 0 }, n, r, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? n = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : n = t.y, r = t.x, this.face === ot.TOP)
    s = H - n, r >= We && r <= H + We ? (l.value = qe.AREA_0, i = r - H) : r > H + We || r <= -(H + We) ? (l.value = qe.AREA_1, i = r > 0 ? r - gt : r + gt) : r > -(H + We) && r <= -We ? (l.value = qe.AREA_2, i = r + H) : (l.value = qe.AREA_3, i = r);
  else if (this.face === ot.BOTTOM)
    s = H + n, r >= We && r <= H + We ? (l.value = qe.AREA_0, i = -r + H) : r < We && r >= -We ? (l.value = qe.AREA_1, i = -r) : r < -We && r >= -(H + We) ? (l.value = qe.AREA_2, i = -r - H) : (l.value = qe.AREA_3, i = r > 0 ? -r + gt : -r - gt);
  else {
    var u, f, c, h, d, p, m;
    this.face === ot.RIGHT ? r = zs(r, +H) : this.face === ot.BACK ? r = zs(r, +gt) : this.face === ot.LEFT && (r = zs(r, -H)), h = Math.sin(n), d = Math.cos(n), p = Math.sin(r), m = Math.cos(r), u = d * m, f = d * p, c = h, this.face === ot.FRONT ? (s = Math.acos(u), i = Jo(s, c, f, l)) : this.face === ot.RIGHT ? (s = Math.acos(f), i = Jo(s, c, -u, l)) : this.face === ot.BACK ? (s = Math.acos(-u), i = Jo(s, c, -f, l)) : this.face === ot.LEFT ? (s = Math.acos(-f), i = Jo(s, c, u, l)) : (s = i = 0, l.value = qe.AREA_0);
  }
  return o = Math.atan(12 / gt * (i + Math.acos(Math.sin(i) * Math.cos(We)) - H)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === qe.AREA_1 ? o += H : l.value === qe.AREA_2 ? o += gt : l.value === qe.AREA_3 && (o += 1.5 * gt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function qT(t) {
  var e = { lam: 0, phi: 0 }, n, r, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, r = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), n = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = qe.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = qe.AREA_1, n -= H) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = qe.AREA_2, n = n < 0 ? n + gt : n - gt) : (c.value = qe.AREA_3, n += H), f = gt / 12 * Math.tan(n), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(n), s = Math.tan(r), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === ot.TOP)
    u = Math.acos(l), e.phi = H - u, c.value === qe.AREA_0 ? e.lam = o + H : c.value === qe.AREA_1 ? e.lam = o < 0 ? o + gt : o - gt : c.value === qe.AREA_2 ? e.lam = o - H : e.lam = o;
  else if (this.face === ot.BOTTOM)
    u = Math.acos(l), e.phi = u - H, c.value === qe.AREA_0 ? e.lam = -o + H : c.value === qe.AREA_1 ? e.lam = -o : c.value === qe.AREA_2 ? e.lam = -o - H : e.lam = o < 0 ? -o - gt : -o + gt;
  else {
    var h, d, p;
    h = l, f = h * h, f >= 1 ? p = 0 : p = Math.sqrt(1 - f) * Math.sin(o), f += p * p, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === qe.AREA_1 ? (f = d, d = -p, p = f) : c.value === qe.AREA_2 ? (d = -d, p = -p) : c.value === qe.AREA_3 && (f = d, d = p, p = -f), this.face === ot.RIGHT ? (f = h, h = -d, d = f) : this.face === ot.BACK ? (h = -h, d = -d) : this.face === ot.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-p) - H, e.lam = Math.atan2(d, h), this.face === ot.RIGHT ? e.lam = zs(e.lam, -H) : this.face === ot.BACK ? e.lam = zs(e.lam, -gt) : this.face === ot.LEFT && (e.lam = zs(e.lam, +H));
  }
  if (this.es !== 0) {
    var m, g, b;
    m = e.phi < 0 ? 1 : 0, g = Math.tan(e.phi), b = this.b / Math.sqrt(g * g + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - b * b) / (this.one_minus_f * b)), m && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function Jo(t, e, n, r) {
  var i;
  return t < te ? (r.value = qe.AREA_0, i = 0) : (i = Math.atan2(e, n), Math.abs(i) <= We ? r.value = qe.AREA_0 : i > We && i <= H + We ? (r.value = qe.AREA_1, i -= H) : i > H + We || i <= -(H + We) ? (r.value = qe.AREA_2, i = i >= 0 ? i - gt : i + gt) : (r.value = qe.AREA_3, i += H)), i;
}
function zs(t, e) {
  var n = t + e;
  return n < -gt ? n += ro : n > +gt && (n -= ro), n;
}
var HT = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const zT = {
  init: BT,
  forward: WT,
  inverse: qT,
  names: HT
};
var Ff = [
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
], Rv = 0.8487, $v = 1.3523, Fv = lr / 5, YT = 1 / Fv, Fs = 18, ou = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, XT = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function KT(t, e, n, r) {
  for (var i = e; r; --r) {
    var s = t(i);
    if (i -= s, Math.abs(s) < n)
      break;
  }
  return i;
}
function ZT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function JT(t) {
  var e = se(t.x - this.long0), n = Math.abs(t.y), r = Math.floor(n * Fv);
  r < 0 ? r = 0 : r >= Fs && (r = Fs - 1), n = lr * (n - YT * r);
  var i = {
    x: ou(Ff[r], n) * e,
    y: ou(Ta[r], n)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Rv + this.x0, i.y = i.y * this.a * $v + this.y0, i;
}
function QT(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * Rv),
    y: Math.abs(t.y - this.y0) / (this.a * $v)
  };
  if (e.y >= 1)
    e.x /= Ff[Fs][0], e.y = t.y < 0 ? -H : H;
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
    i = KT(function(s) {
      return (ou(r, s) - e.y) / XT(r, s);
    }, i, te, 100), e.x /= ou(Ff[n], i), e.y = (5 * n + i) * Dt, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var eN = ["Robinson", "robin"];
const tN = {
  init: ZT,
  forward: JT,
  inverse: QT,
  names: eN
};
function nN() {
  this.name = "geocent";
}
function rN(t) {
  var e = wv(t, this.es, this.a);
  return e;
}
function iN(t) {
  var e = xv(t, this.es, this.a, this.b);
  return e;
}
var sN = ["Geocentric", "geocentric", "geocent", "Geocent"];
const aN = {
  init: nN,
  forward: rN,
  inverse: iN,
  names: sN
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
function oN() {
  if (Object.keys(ga).forEach(function(n) {
    if (typeof this[n] > "u")
      this[n] = ga[n].def;
    else {
      if (ga[n].num && isNaN(this[n]))
        throw new Error("Invalid parameter value, must be numeric " + n + " = " + this[n]);
      ga[n].num && (this[n] = parseFloat(this[n]));
    }
    ga[n].degrees && (this[n] = this[n] * Dt);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - H) < te ? this.mode = this.lat0 < 0 ? Ut.S_POLE : Ut.N_POLE : Math.abs(this.lat0) < te ? this.mode = Ut.EQUIT : (this.mode = Ut.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function lN(t) {
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
function uN(t) {
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
var cN = ["Tilted_Perspective", "tpers"];
const fN = {
  init: oN,
  forward: lN,
  inverse: uN,
  names: cN
};
function hN() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, e = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = e, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function dN(t) {
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
var mN = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const gN = {
  init: hN,
  forward: dN,
  inverse: pN,
  names: mN
};
var ja = 1.340264, Ga = -0.081106, Ua = 893e-6, Ba = 3796e-6, lu = Math.sqrt(3) / 2;
function yN() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function vN(t) {
  var e = se(t.x - this.long0), n = t.y, r = Math.asin(lu * Math.sin(n)), i = r * r, s = i * i * i;
  return t.x = e * Math.cos(r) / (lu * (ja + 3 * Ga * i + s * (7 * Ua + 9 * Ba * i))), t.y = r * (ja + Ga * i + s * (Ua + Ba * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function _N(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var e = 1e-9, n = 12, r = t.y, i, s, a, o, l, u;
  for (u = 0; u < n && (i = r * r, s = i * i * i, a = r * (ja + Ga * i + s * (Ua + Ba * i)) - t.y, o = ja + 3 * Ga * i + s * (7 * Ua + 9 * Ba * i), r -= l = a / o, !(Math.abs(l) < e)); ++u)
    ;
  return i = r * r, s = i * i * i, t.x = lu * t.x * (ja + 3 * Ga * i + s * (7 * Ua + 9 * Ba * i)) / Math.cos(r), t.y = Math.asin(Math.sin(r) / lu), t.x = se(t.x + this.long0), t;
}
var bN = ["eqearth", "Equal Earth", "Equal_Earth"];
const EN = {
  init: yN,
  forward: vN,
  inverse: _N,
  names: bN
};
function SN(t) {
  t.Proj.projections.add(Dl), t.Proj.projections.add(kl), t.Proj.projections.add(wO), t.Proj.projections.add(DO), t.Proj.projections.add(VO), t.Proj.projections.add(WO), t.Proj.projections.add(KO), t.Proj.projections.add(tM), t.Proj.projections.add(aM), t.Proj.projections.add(fM), t.Proj.projections.add(NM), t.Proj.projections.add(kM), t.Proj.projections.add(VM), t.Proj.projections.add(qM), t.Proj.projections.add(KM), t.Proj.projections.add(tT), t.Proj.projections.add(aT), t.Proj.projections.add(fT), t.Proj.projections.add(yT), t.Proj.projections.add(ST), t.Proj.projections.add(TT), t.Proj.projections.add(AT), t.Proj.projections.add($T), t.Proj.projections.add(UT), t.Proj.projections.add(zT), t.Proj.projections.add(tN), t.Proj.projections.add(aN), t.Proj.projections.add(fN), t.Proj.projections.add(gN), t.Proj.projections.add(EN);
}
qt.defaultDatum = "WGS84";
qt.Proj = dr;
qt.WGS84 = new qt.Proj("WGS84");
qt.Point = ta;
qt.toPoint = Ov;
qt.defs = Kt;
qt.nadgrid = Ox;
qt.transform = su;
qt.mgrs = Gx;
qt.version = "__VERSION__";
SN(qt);
function wN() {
  var t, e, n;
  qt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), qt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), qt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), Q_(qt), (t = _l("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = _l("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (n = _l("EPSG:2169")) == null || n.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function xN(t, e, n) {
  const r = fe(t);
  class i extends $h {
    constructor(a) {
      super(r, a, e, n);
    }
  }
  return st(i, "def", r), i;
}
const ON = typeof HTMLElement < "u" ? HTMLElement : class {
};
class $h extends ON {
  constructor(n, r = {}, i = {}, s) {
    super();
    st(this, "_instance", null);
    st(this, "_connected", !1);
    st(this, "_resolved", !1);
    st(this, "_numberProps", null);
    st(this, "_styles");
    st(this, "_slots");
    this._def = n, this._props = r, this._config = i, this._config = Qe(
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
    this._connected = !1, zl(() => {
      this._connected || (cp(null, this._root), this._instance = null);
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
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = of(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[gn(u)] = !0);
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
    this._numberProps && this._numberProps[i] && (r = of(r)), this._setProp(i, r, !1);
  }
  _getProp(n) {
    return this._props[n];
  }
  _setProp(n, r, i = !0, s = !0) {
    r !== this._props[n] && (this._props[n] = r, s && this._instance && this._update(), i && (r === !0 ? this.setAttribute(un(n), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(un(n), r + "") : r || this.removeAttribute(un(n))));
  }
  _update() {
    cp(this._createVNode(), this._root);
  }
  _createVNode() {
    const n = ie(this._def, Qe({}, this._props));
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
        if (s instanceof $h) {
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
var ao = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(ao || {});
const MN = ao.INFO, TN = 7e3, NN = 4e3, uu = gs(
  "alert-notifications",
  () => {
    const t = we([]);
    function e(r, i = MN, s) {
      const a = {
        message: r,
        type: i,
        duration: s != null ? s : i === ao.WARNING ? NN : TN
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
    const e = t, n = nt(!0);
    function r(i, s) {
      setTimeout(() => {
        n.value = !1;
      }, e.notification.duration), s();
    }
    return (i, s) => {
      const a = Sh("dompurify-html");
      return D(), Ue(Hu, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: r,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: _i(() => [
          n.value ? Kl((D(), G("div", {
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
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, CN = /* @__PURE__ */ me(LN, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/alert-notifications/notification-item.vue"]]), PN = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, AN = /* @__PURE__ */ fe({
  __name: "alert-notifications",
  setup(t) {
    const e = uu(), { notifications: n } = He(e);
    function r(i) {
      e.removeNotification(i);
    }
    return (i, s) => (D(), Ue(Uy, { to: "body" }, [
      M(n).length ? (D(), G("div", PN, [
        (D(!0), G(Ge, null, An(M(n), (a, o) => (D(), Ue(CN, {
          key: o,
          notification: a,
          onClose: () => r(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : F("v-if", !0)
    ]));
  }
}), DN = /* @__PURE__ */ me(AN, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/alert-notifications/alert-notifications.vue"]]), kN = { class: "lux-dropdown" }, IN = { class: "h-full" }, RN = ["aria-expanded"], $N = /* @__PURE__ */ P("span", { class: "lux-caret" }, null, -1), FN = { class: "lux-dropdown-wrapper" }, VN = ["aria-label", "data-value"], jN = /* @__PURE__ */ fe({
  __name: "dropdown-list",
  props: {
    placeholder: { type: String, required: !0 },
    options: { type: Array, required: !0, default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = nt(!1), s = nt();
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
    return _n(() => document.addEventListener("click", u)), Ci(() => document.removeEventListener("click", u)), (f, c) => {
      var h, d;
      return D(), G("div", kN, [
        P("div", IN, [
          P("button", {
            type: "button",
            class: Ae(["lux-btn lux-dropdown-btn", i.value ? "expanded" : ""]),
            "aria-expanded": i.value,
            "aria-haspopup": "true",
            onClick: o
          }, [
            P("span", null, oe((d = n.placeholder) != null ? d : (h = n.options[0]) == null ? void 0 : h.label), 1),
            $N
          ], 10, RN)
        ]),
        P("div", FN, [
          P("ul", {
            class: Ae(["lux-dropdown-list", i.value ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (D(!0), G(Ge, null, An(n.options, (p) => (D(), G("li", {
              key: p.value,
              class: Ae(f.modelValue === p.value ? "selected" : "")
            }, [
              P("button", {
                class: "lux-dropdown-list-item",
                "aria-label": p.ariaLabel,
                "data-value": p.value,
                onClick: l
              }, oe(p.label), 9, VN)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), Vv = /* @__PURE__ */ me(jN, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/dropdown-list.vue"]]), Wa = "EPSG:3857", jv = "EPSG:4326", GN = "EPSG:2169";
let Nc;
const Gp = nt();
function Fr() {
  function t() {
    return Nc;
  }
  function e() {
    return Gp.value = Nc = new eb({
      view: new tb({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), Nc;
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
    olMap: Gp,
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
function UN(t, e) {
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
function Gv(t) {
  var e = UN(t, "string");
  return Cn(e) == "symbol" ? e : e + "";
}
function Up(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Gv(r.key), r);
  }
}
function xr(t, e, n) {
  return e && Up(t.prototype, e), n && Up(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Si(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Vf(t, e) {
  return Vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Vf(t, e);
}
function Ku(t, e) {
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
  }), e && Vf(t, e);
}
function Mo(t, e) {
  if (e && (Cn(e) === "object" || typeof e == "function"))
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
  return e = Gv(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function BN(t) {
  if (Array.isArray(t))
    return t;
}
function WN(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Bp(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function qN(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Bp(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Bp(t, e);
  }
}
function HN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zN(t) {
  return BN(t) || WN(t) || qN(t) || HN();
}
function Wp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Wp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var YN = {
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
}, XN = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wr(this, t), this.init(e, n);
  }
  return xr(t, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = n || YN, this.options = r, this.debug = r.debug;
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
      return new t(this.logger, qp(qp({}, {
        prefix: "".concat(this.prefix, ":").concat(n, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(n) {
      return n = n || this.options, n.prefix = n.prefix || this.prefix, new t(this.logger, n);
    }
  }]), t;
}(), ur = new XN(), Ti = function() {
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
function Hp(t) {
  return t == null ? "" : "" + t;
}
function KN(t, e, n) {
  t.forEach(function(r) {
    e[r] && (n[r] = e[r]);
  });
}
function Fh(t, e, n) {
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
function zp(t, e, n) {
  var r = Fh(t, e, Object), i = r.obj, s = r.k;
  i[s] = n;
}
function ZN(t, e, n, r) {
  var i = Fh(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], r && (s[a] = s[a].concat(n)), r || s[a].push(n);
}
function cu(t, e) {
  var n = Fh(t, e), r = n.obj, i = n.k;
  if (!!r)
    return r[i];
}
function JN(t, e, n) {
  var r = cu(t, n);
  return r !== void 0 ? r : cu(e, n);
}
function Uv(t, e, n) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? typeof t[r] == "string" || t[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? n && (t[r] = e[r]) : Uv(t[r], e[r], n) : t[r] = e[r]);
  return t;
}
function Os(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var QN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function e2(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return QN[e];
  }) : t;
}
var Zu = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, t2 = [" ", ",", "?", "!", ";"];
function n2(t, e, n) {
  e = e || "", n = n || "";
  var r = t2.filter(function(o) {
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
function fu(t, e) {
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
        return u ? fu(l, u, n) : void 0;
      }
      i = i[r[s]];
    }
    return i;
  }
}
function Yp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yp(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Yp(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function r2(t) {
  var e = i2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function i2() {
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
var s2 = function(t) {
  Ku(n, t);
  var e = r2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return wr(this, n), i = e.call(this), Zu && Ti.call(Si(i)), i.data = r || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
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
      var c = cu(this.data, f);
      return c || !u || typeof a != "string" ? c : fu(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), zp(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
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
      var c = cu(this.data, f) || {};
      o ? Uv(c, a, l) : c = Qo(Qo({}, c), a), zp(this.data, f, c), u.silent || this.emit("added", i, s, a);
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
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Qo(Qo({}, {}), this.getResource(i, s)) : this.getResource(i, s);
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
}(Ti), Bv = {
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
function Vt(t) {
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
function a2(t) {
  var e = o2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function o2() {
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
var Kp = {}, Zp = function(t) {
  Ku(n, t);
  var e = a2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return wr(this, n), i = e.call(this), Zu && Ti.call(Si(i)), KN(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, Si(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = ur.create("translator"), i;
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
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !n2(i, a, o);
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
      var b = this.resolve(i, s), _ = b && b.res, S = b && b.usedKey || c, y = b && b.exactUsedKey || c, E = Object.prototype.toString.apply(_), N = ["[object Number]", "[object Function]", "[object RegExp]"], w = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, A = typeof _ != "string" && typeof _ != "boolean" && typeof _ != "number";
      if (C && _ && A && N.indexOf(E) < 0 && !(typeof w == "string" && E === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var T = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, _, Vt(Vt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (b.res = T, b) : T;
        }
        if (u) {
          var k = E === "[object Array]", I = k ? [] : {}, K = k ? y : S;
          for (var ve in _)
            if (Object.prototype.hasOwnProperty.call(_, ve)) {
              var L = "".concat(K).concat(u).concat(ve);
              I[ve] = this.translate(L, Vt(Vt({}, s), {
                joinArrays: !1,
                ns: h
              })), I[ve] === L && (I[ve] = _[ve]);
            }
          _ = I;
        }
      } else if (C && typeof w == "string" && E === "[object Array]")
        _ = _.join(w), _ && (_ = this.extendTranslation(_, i, s, a));
      else {
        var $ = !1, z = !1, Z = s.count !== void 0 && typeof s.count != "string", Le = n.hasDefaultValue(s), Pe = Z ? this.pluralResolver.getSuffix(p, s.count, s) : "", dt = s["defaultValue".concat(Pe)] || s.defaultValue;
        !this.isValidLookup(_) && Le && ($ = !0, _ = dt), this.isValidLookup(_) || (z = !0, _ = c);
        var Rt = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Te = Rt && z ? void 0 : _, Lt = Le && dt !== _ && this.options.updateMissing;
        if (z || $ || Lt) {
          if (this.logger.log(Lt ? "updateKey" : "missingKey", p, d, c, Lt ? dt : _), u) {
            var it = this.resolve(c, Vt(Vt({}, s), {}, {
              keySeparator: !1
            }));
            it && it.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var Zn = [], ke = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && ke && ke[0])
            for (var tn = 0; tn < ke.length; tn++)
              Zn.push(ke[tn]);
          else
            this.options.saveMissingTo === "all" ? Zn = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Zn.push(s.lng || this.language);
          var Jn = function(Ct, Qn, Mr) {
            var v = Le && Mr !== _ ? Mr : Te;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Ct, d, Qn, v, Lt, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Ct, d, Qn, v, Lt, s), o.emit("missingKey", Ct, d, Qn, _);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && Z ? Zn.forEach(function(Or) {
            o.pluralResolver.getSuffixes(Or, s).forEach(function(Ct) {
              Jn([Or], c + Ct, s["defaultValue".concat(Ct)] || dt);
            });
          }) : Jn(Zn, c, dt));
        }
        _ = this.extendTranslation(_, i, s, b, a), z && _ === c && this.options.appendNamespaceToMissingKey && (_ = "".concat(d, ":").concat(c)), (z || $) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? _ = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(d, ":").concat(c) : c, $ ? _ : void 0) : _ = this.options.parseMissingKeyHandler(_));
      }
      return l ? (b.res = _, b) : _;
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
          for (var _ = arguments.length, S = new Array(_), y = 0; y < _; y++)
            S[y] = arguments[y];
          return l && l[0] === S[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(S[0], " in key: ").concat(s[0])), null) : u.translate.apply(u, S.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var g = a.postProcess || this.options.postProcess, b = typeof g == "string" ? [g] : g;
      return i != null && b && b.length && a.applyPostProcessor !== !1 && (i = Bv.handle(b, i, s, this.options && this.options.postProcessPassResolved ? Vt({
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
          var g = a.count !== void 0 && typeof a.count != "string", b = g && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), _ = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", S = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          m.forEach(function(y) {
            s.isValidLookup(o) || (c = y, !Kp["".concat(S[0], "-").concat(y)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (Kp["".concat(S[0], "-").concat(y)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(S.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), S.forEach(function(E) {
              if (!s.isValidLookup(o)) {
                f = E;
                var N = [p];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(N, p, E, y, a);
                else {
                  var w;
                  g && (w = s.pluralResolver.getSuffix(E, a.count, a));
                  var C = "".concat(s.options.pluralSeparator, "zero");
                  if (g && (N.push(p + w), b && N.push(p + C)), _) {
                    var A = "".concat(p).concat(s.options.contextSeparator).concat(a.context);
                    N.push(A), g && (N.push(A + w), b && N.push(A + C));
                  }
                }
                for (var T; T = N.pop(); )
                  s.isValidLookup(o) || (u = T, o = s.getResource(E, y, T, a));
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
var Jp = function() {
  function t(e) {
    wr(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ur.create("languageUtils");
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
}(), l2 = [{
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
}], u2 = {
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
}, c2 = ["v1", "v2", "v3"], Qp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function f2() {
  var t = {};
  return l2.forEach(function(e) {
    e.lngs.forEach(function(n) {
      t[n] = {
        numbers: e.nr,
        plurals: u2[e.fc]
      };
    });
  }), t;
}
var h2 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wr(this, t), this.languageUtils = e, this.options = n, this.logger = ur.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = f2();
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
        return Qp[a] - Qp[o];
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
      return !c2.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
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
function $n(t) {
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
function tm(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = JN(t, e, n);
  return !s && i && typeof n == "string" && (s = fu(t, n, r), s === void 0 && (s = fu(e, n, r))), s;
}
var d2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(this, t), this.logger = ur.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(n) {
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
      this.escape = r.escape !== void 0 ? r.escape : e2, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Os(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Os(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Os(r.nestingPrefix) : r.nestingPrefixEscaped || Os("$t("), this.nestingSuffix = r.nestingSuffix ? Os(r.nestingSuffix) : r.nestingSuffixEscaped || Os(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
      var h = function(b) {
        if (b.indexOf(a.formatSeparator) < 0) {
          var _ = tm(r, f, b, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(_, void 0, i, $n($n($n({}, s), r), {}, {
            interpolationkey: b
          })) : _;
        }
        var S = b.split(a.formatSeparator), y = S.shift().trim(), E = S.join(a.formatSeparator).trim();
        return a.format(tm(r, f, y, a.options.keySeparator, a.options.ignoreJSONStructure), E, i, $n($n($n({}, s), r), {}, {
          interpolationkey: y
        }));
      };
      this.resetRegExp();
      var d = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, p = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, m = [{
        regex: this.regexpUnescape,
        safeValue: function(b) {
          return c(b);
        }
      }, {
        regex: this.regexp,
        safeValue: function(b) {
          return a.escapeValue ? c(a.escape(b)) : c(b);
        }
      }];
      return m.forEach(function(g) {
        for (u = 0; o = g.regex.exec(n); ) {
          var b = o[1].trim();
          if (l = h(b), l === void 0)
            if (typeof d == "function") {
              var _ = d(n, o, s);
              l = typeof _ == "string" ? _ : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, b))
              l = "";
            else if (p) {
              l = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(b, " for interpolating ").concat(n)), l = "";
          else
            typeof l != "string" && !a.useRawValueToEscape && (l = Hp(l));
          var S = g.safeValue(l);
          if (n = n.replace(o[0], S), p ? (g.regex.lastIndex += l.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, u++, u >= a.maxReplaces)
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
        var g = d.split(new RegExp("".concat(m, "[ ]*{"))), b = "{".concat(g[1]);
        d = g[0], b = this.interpolate(b, l);
        var _ = b.match(/'/g), S = b.match(/"/g);
        (_ && _.length % 2 === 0 && !S || S.length % 2 !== 0) && (b = b.replace(/'/g, '"'));
        try {
          l = JSON.parse(b), p && (l = $n($n({}, p), l));
        } catch (y) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(d), y), "".concat(d).concat(m).concat(b);
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
        typeof o != "string" && (o = Hp(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(n)), o = ""), c && (o = f.reduce(function(d, p) {
          return i.format(d, p, s.lng, $n($n({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), n = n.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return n;
    }
  }]), t;
}();
function nm(t, e) {
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
    e % 2 ? nm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach(function(r) {
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
          var o = a.split(":"), l = zN(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
var m2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(this, t), this.logger = ur.create("formatter"), this.options = e, this.formats = {
      number: Ms(function(n, r) {
        var i = new Intl.NumberFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: Ms(function(n, r) {
        var i = new Intl.NumberFormat(n, Cr(Cr({}, r), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: Ms(function(n, r) {
        var i = new Intl.DateTimeFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: Ms(function(n, r) {
        var i = new Intl.RelativeTimeFormat(n, Cr({}, r));
        return function(s) {
          return i.format(s, r.range || "day");
        };
      }),
      list: Ms(function(n, r) {
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
      this.formats[n.toLowerCase().trim()] = Ms(r);
    }
  }, {
    key: "format",
    value: function(n, r, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = p2(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var p = u;
          try {
            var m = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = m.locale || m.lng || a.locale || a.lng || i;
            p = s.formats[h](u, g, Cr(Cr(Cr({}, d), a), m));
          } catch (b) {
            s.logger.warn(b);
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
function rm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function im(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function g2(t) {
  var e = y2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function y2() {
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
function v2(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var _2 = function(t) {
  Ku(n, t);
  var e = g2(n);
  function n(r, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return wr(this, n), a = e.call(this), Zu && Ti.call(Si(a)), a.backend = r, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = ur.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return xr(n, [{
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
        ZN(c.loaded, [l], u), v2(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
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
          var b = o.waitingReads.shift();
          o.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback);
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
          var c = im(im({}, u), {}, {
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
}(Ti);
function sm() {
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
function am(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
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
function rr(t) {
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
function b2(t) {
  var e = E2();
  return function() {
    var r = Er(t), i;
    if (e) {
      var s = Er(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function E2() {
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
function el() {
}
function S2(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var hu = function(t) {
  Ku(n, t);
  var e = b2(n);
  function n() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (wr(this, n), r = e.call(this), Zu && Ti.call(Si(r)), r.options = am(i), r.services = {}, r.logger = ur, r.modules = {
      external: []
    }, S2(Si(r)), s && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, s), Mo(r, Si(r));
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
      var o = sm();
      this.options = rr(rr(rr({}, o), this.options), am(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = rr(rr({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(b) {
        return b ? typeof b == "function" ? new b() : b : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? ur.init(l(this.modules.logger), this.options) : ur.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = m2);
        var f = new Jp(this.options);
        this.store = new s2(this.options.resources, this.options);
        var c = this.services;
        c.logger = ur, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new h2(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new d2(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new _2(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(b) {
          for (var _ = arguments.length, S = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
            S[y - 1] = arguments[y];
          i.emit.apply(i, [b].concat(S));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Zp(this.services, this.options), this.translator.on("*", function(b) {
          for (var _ = arguments.length, S = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
            S[y - 1] = arguments[y];
          i.emit.apply(i, [b].concat(S));
        }), this.modules.external.forEach(function(b) {
          b.init && b.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = el), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var d = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      d.forEach(function(b) {
        i[b] = function() {
          var _;
          return (_ = i.store)[b].apply(_, arguments);
        };
      });
      var p = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      p.forEach(function(b) {
        i[b] = function() {
          var _;
          return (_ = i.store)[b].apply(_, arguments), i;
        };
      });
      var m = va(), g = function() {
        var _ = function(y, E) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), m.resolve(E), a(y, E);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return _(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, _);
      };
      return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), m;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : el, o = a, l = typeof i == "string" ? i : this.language;
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
      var o = va();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = el), this.services.backendConnector.reload(i, s, function(l) {
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
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && Bv.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
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
          h = rr({}, c);
        h.lng = h.lng || u.lng, h.lngs = h.lngs || u.lngs, h.ns = h.ns || u.ns, h.keyPrefix = h.keyPrefix || a || u.keyPrefix;
        var g = o.options.keySeparator || ".", b;
        return h.keyPrefix && Array.isArray(f) ? b = f.map(function(_) {
          return "".concat(h.keyPrefix).concat(g).concat(_);
        }) : b = h.keyPrefix ? "".concat(h.keyPrefix).concat(g).concat(f) : f, o.t(b, h);
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
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new Jp(sm());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : el, o = rr(rr(rr({}, this.options), s), {
        isClone: !0
      }), l = new n(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = rr({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new Zp(l.services, l.options), l.translator.on("*", function(f) {
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
Pi(hu, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new hu(t, e);
});
var lt = hu.createInstance();
lt.createInstance = hu.createInstance;
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
const w2 = "/";
var Wv = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(Wv || {}), Ir = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(Ir || {}), Il = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(Il || {}), jf;
function x2(t, {
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
  }), t.component("i18next", T2), t.mixin({
    beforeCreate() {
      var h, d;
      const p = this.$options;
      if (!p.__i18n && !p.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const m = this.$options.name, g = (Math.random() * 10 ** 8 | 0).toString(), b = [m, g].filter((w) => !!w).join("-");
      this.__bundles = [];
      const _ = (w) => {
        Object.entries(w).forEach(([C, A]) => {
          e.addResourceBundle(C, b, A, !0, !1), this.__bundles.push([C, b]);
        });
      };
      (h = p.__i18n) == null || h.forEach((w) => {
        _(JSON.parse(w));
      });
      let { lng: S, ns: y, keyPrefix: E } = c(p, _);
      (d = this.__bundles) != null && d.length && (y = [b].concat(y != null ? y : []));
      const N = u(S, y);
      this.__translate = (w, C) => !E || f(w) ? N(w, C) : N(E + "." + w, C);
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
  }), jf = M2(r, i);
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
      let b, _;
      ({
        lng: p,
        namespaces: _ = e.options.defaultNS,
        keyPrefix: g,
        messages: b
      } = h.i18nOptions), b && d(b), m = typeof _ == "string" ? [_] : _, m && e.loadNamespaces(m);
    }
    return { lng: p, ns: m, keyPrefix: g };
  }
}
function Ze() {
  const t = O2(), e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
function O2() {
  const t = _o();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  return t;
}
function M2(t, e) {
  const n = `${t}\\s*([a-z0-9\\-]+)\\s*${e}`;
  return new RegExp(n, "gi");
}
var T2 = fe({
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
class ys extends Error {
}
class N2 extends ys {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class L2 extends ys {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class C2 extends ys {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Vs extends ys {
}
class qv extends ys {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ln extends ys {
}
class ei extends ys {
  constructor() {
    super("Zone is an abstract class");
  }
}
const ee = "numeric", Kn = "short", yn = "long", du = {
  year: ee,
  month: ee,
  day: ee
}, Hv = {
  year: ee,
  month: Kn,
  day: ee
}, P2 = {
  year: ee,
  month: Kn,
  day: ee,
  weekday: Kn
}, zv = {
  year: ee,
  month: yn,
  day: ee
}, Yv = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn
}, Xv = {
  hour: ee,
  minute: ee
}, Kv = {
  hour: ee,
  minute: ee,
  second: ee
}, Zv = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: Kn
}, Jv = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: yn
}, Qv = {
  hour: ee,
  minute: ee,
  hourCycle: "h23"
}, e0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23"
}, t0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: Kn
}, n0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: yn
}, r0 = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee
}, i0 = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, s0 = {
  year: ee,
  month: Kn,
  day: ee,
  hour: ee,
  minute: ee
}, a0 = {
  year: ee,
  month: Kn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, A2 = {
  year: ee,
  month: Kn,
  day: ee,
  weekday: Kn,
  hour: ee,
  minute: ee
}, o0 = {
  year: ee,
  month: yn,
  day: ee,
  hour: ee,
  minute: ee,
  timeZoneName: Kn
}, l0 = {
  year: ee,
  month: yn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: Kn
}, u0 = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn,
  hour: ee,
  minute: ee,
  timeZoneName: yn
}, c0 = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: yn
};
class To {
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
let Cc = null;
class Ju extends To {
  static get instance() {
    return Cc === null && (Cc = new Ju()), Cc;
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
    return _0(e, n, r);
  }
  formatOffset(e, n) {
    return qa(this.offset(e), n);
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
let Rl = {};
function D2(t) {
  return Rl[t] || (Rl[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Rl[t];
}
const k2 = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function I2(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, a, o, l, u, f] = r;
  return [a, i, s, o, l, u, f];
}
function R2(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: a } = n[i], o = k2[s];
    s === "era" ? r[o] = a : Se(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let tl = {};
class Gr extends To {
  static create(e) {
    return tl[e] || (tl[e] = new Gr(e)), tl[e];
  }
  static resetCache() {
    tl = {}, Rl = {};
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
    super(), this.zoneName = e, this.valid = Gr.isValidZone(e);
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
    return _0(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return qa(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = D2(this.name);
    let [i, s, a, o, l, u, f] = r.formatToParts ? R2(r, n) : I2(r, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = ec({
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
let lm = {};
function $2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = lm[n];
  return r || (r = new Intl.ListFormat(t, e), lm[n] = r), r;
}
let Gf = {};
function Uf(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Gf[n];
  return r || (r = new Intl.DateTimeFormat(t, e), Gf[n] = r), r;
}
let Bf = {};
function F2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Bf[n];
  return r || (r = new Intl.NumberFormat(t, e), Bf[n] = r), r;
}
let Wf = {};
function V2(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = Wf[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Wf[i] = s), s;
}
let Na = null;
function j2() {
  return Na || (Na = new Intl.DateTimeFormat().resolvedOptions().locale, Na);
}
let um = {};
function G2(t) {
  let e = um[t];
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, um[t] = e;
  }
  return e;
}
function U2(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = Uf(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      r = Uf(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = r;
    return [i, s, a];
  }
}
function B2(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function W2(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = Oe.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function q2(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = Oe.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function nl(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function H2(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class z2 {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = F2(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Uh(e, 3);
      return bt(n, this.padTo);
    }
  }
}
class Y2 {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Gr.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = Uf(n, s);
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
class X2 {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && y0() && (this.rtf = V2(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : mL(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const K2 = {
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
    const a = e || mt.defaultLocale, o = a || (s ? "en-US" : j2()), l = n || mt.defaultNumberingSystem, u = r || mt.defaultOutputCalendar, f = qf(i) || mt.defaultWeekSettings;
    return new Xe(o, l, u, f, a);
  }
  static resetCache() {
    Na = null, Gf = {}, Bf = {}, Wf = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r, weekSettings: i } = {}) {
    return Xe.create(e, n, r, i);
  }
  constructor(e, n, r, i, s) {
    const [a, o, l] = U2(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = r || l || null, this.weekSettings = i, this.intl = B2(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = H2(this)), this.fastNumbersCached;
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
      qf(e.weekSettings) || this.weekSettings,
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
    return nl(this, e, S0, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = W2((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return nl(this, e, O0, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = q2(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return nl(
      this,
      void 0,
      () => M0,
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
    return nl(this, e, T0, () => {
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
    return new z2(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new Y2(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new X2(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return $2(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : v0() ? G2(this.locale) : K2;
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
let Pc = null;
class Qt extends To {
  static get utcInstance() {
    return Pc === null && (Pc = new Qt(0)), Pc;
  }
  static instance(e) {
    return e === 0 ? Qt.utcInstance : new Qt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Qt(tc(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${qa(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${qa(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return qa(this.fixed, n);
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
class Z2 extends To {
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
  if (t instanceof To)
    return t;
  if (eL(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Ju.instance : n === "utc" || n === "gmt" ? Qt.utcInstance : Qt.parseSpecifier(n) || Gr.create(t);
  } else
    return ss(t) ? Qt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Z2(t);
}
let cm = () => Date.now(), fm = "system", hm = null, dm = null, pm = null, mm = 60, gm, ym = null;
class mt {
  static get now() {
    return cm;
  }
  static set now(e) {
    cm = e;
  }
  static set defaultZone(e) {
    fm = e;
  }
  static get defaultZone() {
    return hi(fm, Ju.instance);
  }
  static get defaultLocale() {
    return hm;
  }
  static set defaultLocale(e) {
    hm = e;
  }
  static get defaultNumberingSystem() {
    return dm;
  }
  static set defaultNumberingSystem(e) {
    dm = e;
  }
  static get defaultOutputCalendar() {
    return pm;
  }
  static set defaultOutputCalendar(e) {
    pm = e;
  }
  static get defaultWeekSettings() {
    return ym;
  }
  static set defaultWeekSettings(e) {
    ym = qf(e);
  }
  static get twoDigitCutoffYear() {
    return mm;
  }
  static set twoDigitCutoffYear(e) {
    mm = e % 100;
  }
  static get throwOnInvalid() {
    return gm;
  }
  static set throwOnInvalid(e) {
    gm = e;
  }
  static resetCaches() {
    Xe.resetCache(), Gr.resetCache();
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
const f0 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], h0 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Tn(t, e) {
  return new zn(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Vh(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function d0(t, e, n) {
  return n + (No(t) ? h0 : f0)[e - 1];
}
function p0(t, e) {
  const n = No(t) ? h0 : f0, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function jh(t, e) {
  return (t - e + 7) % 7 + 1;
}
function pu(t, e = 4, n = 1) {
  const { year: r, month: i, day: s } = t, a = d0(r, i, s), o = jh(Vh(r, i, s), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = r - 1, l = oo(u, e, n)) : l > oo(r, e, n) ? (u = r + 1, l = 1) : u = r, { weekYear: u, weekNumber: l, weekday: o, ...nc(t) };
}
function vm(t, e = 4, n = 1) {
  const { weekYear: r, weekNumber: i, weekday: s } = t, a = jh(Vh(r, 1, e), n), o = Ys(r);
  let l = i * 7 + s - a - 7 + e, u;
  l < 1 ? (u = r - 1, l += Ys(u)) : l > o ? (u = r + 1, l -= Ys(r)) : u = r;
  const { month: f, day: c } = p0(u, l);
  return { year: u, month: f, day: c, ...nc(t) };
}
function Ac(t) {
  const { year: e, month: n, day: r } = t, i = d0(e, n, r);
  return { year: e, ordinal: i, ...nc(t) };
}
function _m(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = p0(e, n);
  return { year: e, month: r, day: i, ...nc(t) };
}
function bm(t, e) {
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
function J2(t, e = 4, n = 1) {
  const r = Qu(t.weekYear), i = Nn(
    t.weekNumber,
    1,
    oo(t.weekYear, e, n)
  ), s = Nn(t.weekday, 1, 7);
  return r ? i ? s ? !1 : Tn("weekday", t.weekday) : Tn("week", t.weekNumber) : Tn("weekYear", t.weekYear);
}
function Q2(t) {
  const e = Qu(t.year), n = Nn(t.ordinal, 1, Ys(t.year));
  return e ? n ? !1 : Tn("ordinal", t.ordinal) : Tn("year", t.year);
}
function m0(t) {
  const e = Qu(t.year), n = Nn(t.month, 1, 12), r = Nn(t.day, 1, mu(t.year, t.month));
  return e ? n ? r ? !1 : Tn("day", t.day) : Tn("month", t.month) : Tn("year", t.year);
}
function g0(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = Nn(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, a = Nn(n, 0, 59), o = Nn(r, 0, 59), l = Nn(i, 0, 999);
  return s ? a ? o ? l ? !1 : Tn("millisecond", i) : Tn("second", r) : Tn("minute", n) : Tn("hour", e);
}
function Se(t) {
  return typeof t > "u";
}
function ss(t) {
  return typeof t == "number";
}
function Qu(t) {
  return typeof t == "number" && t % 1 === 0;
}
function eL(t) {
  return typeof t == "string";
}
function tL(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function y0() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function v0() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function nL(t) {
  return Array.isArray(t) ? t : [t];
}
function Em(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function rL(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function ra(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function qf(t) {
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
  return Qu(t) && t >= e && t <= n;
}
function iL(t, e) {
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
function Gi(t) {
  if (!(Se(t) || t === null || t === ""))
    return parseFloat(t);
}
function Gh(t) {
  if (!(Se(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Uh(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function No(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ys(t) {
  return No(t) ? 366 : 365;
}
function mu(t, e) {
  const n = iL(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? No(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function ec(t) {
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
function Sm(t, e, n) {
  return -jh(Vh(t, 1, e), n) + e - 1;
}
function oo(t, e = 4, n = 1) {
  const r = Sm(t, e, n), i = Sm(t + 1, e, n);
  return (Ys(t) - r + i) / 7;
}
function Hf(t) {
  return t > 99 ? t : t > mt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function _0(t, e, n, r = null) {
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
function tc(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function b0(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new ln(`Invalid unit value ${t}`);
  return e;
}
function gu(t, e) {
  const n = {};
  for (const r in t)
    if (ra(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = b0(i);
    }
  return n;
}
function qa(t, e) {
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
function nc(t) {
  return rL(t, ["hour", "minute", "second", "millisecond"]);
}
const sL = [
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
], E0 = [
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
], aL = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function S0(t) {
  switch (t) {
    case "narrow":
      return [...aL];
    case "short":
      return [...E0];
    case "long":
      return [...sL];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const w0 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], x0 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], oL = ["M", "T", "W", "T", "F", "S", "S"];
function O0(t) {
  switch (t) {
    case "narrow":
      return [...oL];
    case "short":
      return [...x0];
    case "long":
      return [...w0];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const M0 = ["AM", "PM"], lL = ["Before Christ", "Anno Domini"], uL = ["BC", "AD"], cL = ["B", "A"];
function T0(t) {
  switch (t) {
    case "narrow":
      return [...cL];
    case "short":
      return [...uL];
    case "long":
      return [...lL];
    default:
      return null;
  }
}
function fL(t) {
  return M0[t.hour < 12 ? 0 : 1];
}
function hL(t, e) {
  return O0(e)[t.weekday - 1];
}
function dL(t, e) {
  return S0(e)[t.month - 1];
}
function pL(t, e) {
  return T0(e)[t.year < 0 ? 0 : 1];
}
function mL(t, e, n = "always", r = !1) {
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
function wm(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const gL = {
  D: du,
  DD: Hv,
  DDD: zv,
  DDDD: Yv,
  t: Xv,
  tt: Kv,
  ttt: Zv,
  tttt: Jv,
  T: Qv,
  TT: e0,
  TTT: t0,
  TTTT: n0,
  f: r0,
  ff: s0,
  fff: o0,
  ffff: u0,
  F: i0,
  FF: a0,
  FFF: l0,
  FFFF: c0
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
    return gL[e];
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
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, p) => this.loc.extract(e, d, p), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? fL(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, p) => r ? dL(e, d) : s(p ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, p) => r ? hL(e, d) : s(
      p ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const p = Wt.macroTokenToFormatOpts(d);
      return p ? this.formatWithSystemDefault(e, p) : d;
    }, c = (d) => r ? pL(e, d) : s({ era: d }, "era"), h = (d) => {
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
    return wm(Wt.parseFormat(n), h);
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
    return wm(s, i(o));
  }
}
const N0 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
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
const C0 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, yL = `(?:${C0.source}?(?:\\[(${N0.source})\\])?)?`, Bh = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, P0 = RegExp(`${Bh.source}${yL}`), Wh = RegExp(`(?:T${P0.source})?`), vL = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, _L = /(\d{4})-?W(\d\d)(?:-?(\d))?/, bL = /(\d{4})-?(\d{3})/, EL = L0("weekYear", "weekNumber", "weekDay"), SL = L0("year", "ordinal"), wL = /(\d{4})-(\d\d)-(\d\d)/, A0 = RegExp(
  `${Bh.source} ?(?:${C0.source}|(${N0.source}))?`
), xL = RegExp(`(?: ${A0.source})?`);
function Xs(t, e, n) {
  const r = t[e];
  return Se(r) ? n : li(r);
}
function OL(t, e) {
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
    milliseconds: Gh(t[e + 3])
  }, null, e + 4];
}
function Lo(t, e) {
  const n = !t[e] && !t[e + 1], r = tc(t[e + 1], t[e + 2]), i = n ? null : Qt.instance(r);
  return [{}, i, e + 3];
}
function Co(t, e) {
  const n = t[e] ? Gr.create(t[e]) : null;
  return [{}, n, e + 1];
}
const ML = RegExp(`^T?${Bh.source}$`), TL = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function NL(t) {
  const [e, n, r, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, p = !1) => d !== void 0 && (p || d && f) ? -d : d;
  return [
    {
      years: h(Gi(n)),
      months: h(Gi(r)),
      weeks: h(Gi(i)),
      days: h(Gi(s)),
      hours: h(Gi(a)),
      minutes: h(Gi(o)),
      seconds: h(Gi(l), l === "-0"),
      milliseconds: h(Gh(u), c)
    }
  ];
}
const LL = {
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
function qh(t, e, n, r, i, s, a) {
  const o = {
    year: e.length === 2 ? Hf(li(e)) : li(e),
    month: E0.indexOf(n) + 1,
    day: li(r),
    hour: li(i),
    minute: li(s)
  };
  return a && (o.second = li(a)), t && (o.weekday = t.length > 3 ? w0.indexOf(t) + 1 : x0.indexOf(t) + 1), o;
}
const CL = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function PL(t) {
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
  ] = t, h = qh(e, i, r, n, s, a, o);
  let d;
  return l ? d = LL[l] : u ? d = 0 : d = tc(f, c), [h, new Qt(d)];
}
function AL(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const DL = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, kL = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, IL = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function xm(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [qh(e, i, r, n, s, a, o), Qt.utcInstance];
}
function RL(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [qh(e, o, n, r, i, s, a), Qt.utcInstance];
}
const $L = oa(vL, Wh), FL = oa(_L, Wh), VL = oa(bL, Wh), jL = oa(P0), D0 = la(
  OL,
  ca,
  Lo,
  Co
), GL = la(
  EL,
  ca,
  Lo,
  Co
), UL = la(
  SL,
  ca,
  Lo,
  Co
), BL = la(
  ca,
  Lo,
  Co
);
function WL(t) {
  return ua(
    t,
    [$L, D0],
    [FL, GL],
    [VL, UL],
    [jL, BL]
  );
}
function qL(t) {
  return ua(AL(t), [CL, PL]);
}
function HL(t) {
  return ua(
    t,
    [DL, xm],
    [kL, xm],
    [IL, RL]
  );
}
function zL(t) {
  return ua(t, [TL, NL]);
}
const YL = la(ca);
function XL(t) {
  return ua(t, [ML, YL]);
}
const KL = oa(wL, xL), ZL = oa(A0), JL = la(
  ca,
  Lo,
  Co
);
function QL(t) {
  return ua(
    t,
    [KL, D0],
    [ZL, JL]
  );
}
const Om = "Invalid Duration", k0 = {
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
}, eC = {
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
  ...k0
}, Sn = 146097 / 400, Ts = 146097 / 4800, tC = {
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
  ...k0
}, Zi = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], nC = Zi.slice(0).reverse();
function ti(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Re(r);
}
function I0(t, e) {
  var r;
  let n = (r = e.milliseconds) != null ? r : 0;
  for (const i of nC.slice(1))
    e[i] && (n += e[i] * t[i].milliseconds);
  return n;
}
function Mm(t, e) {
  const n = I0(t, e) < 0 ? -1 : 1;
  Zi.reduceRight((r, i) => {
    if (Se(e[i]))
      return r;
    if (r) {
      const s = e[r] * n, a = t[i][r], o = Math.floor(s / a);
      e[i] += o * n, e[r] -= o * a * n;
    }
    return i;
  }, null), Zi.reduce((r, i) => {
    if (Se(e[i]))
      return r;
    if (r) {
      const s = e[r] % 1;
      e[r] -= s, e[i] += s * t[r][i];
    }
    return i;
  }, null);
}
function rC(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class Re {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? tC : eC;
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
      values: gu(e, Re.normalizeUnit),
      loc: Xe.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  static fromDurationLike(e) {
    if (ss(e))
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
    const [r] = zL(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = XL(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the Duration is invalid");
    const r = e instanceof zn ? e : new zn(e, n);
    if (mt.throwOnInvalid)
      throw new C2(r);
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
      throw new qv(e);
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
    return this.isValid ? Wt.create(this.loc, r).formatDurationFromString(this, e) : Om;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return Om;
    const n = Zi.map((r) => {
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Uh(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    return this.isValid ? I0(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e), r = {};
    for (const i of Zi)
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
      n[r] = b0(e(this.values[r], r));
    return ti(this, { values: n }, !0);
  }
  get(e) {
    return this[Re.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...gu(e, Re.normalizeUnit) };
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
    return Mm(this.matrix, e), ti(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = rC(this.normalize().shiftToAll().toObject());
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
    for (const a of Zi)
      if (e.indexOf(a) >= 0) {
        s = a;
        let o = 0;
        for (const u in r)
          o += this.matrix[u][a] * r[u], r[u] = 0;
        ss(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        ss(i[a]) && (r[a] = i[a]);
    for (const a in r)
      r[a] !== 0 && (n[s] += a === s ? r[a] : r[a] / this.matrix[s][a]);
    return Mm(this.matrix, n), ti(this, { values: n }, !0);
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
    for (const r of Zi)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Ns = "Invalid Interval";
function iC(t, e) {
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
    if (mt.throwOnInvalid)
      throw new L2(r);
    return new ft({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = ba(e), i = ba(n), s = iC(r, i);
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
  toLocaleString(e = du, n = {}) {
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
class rl {
  static hasDST(e = mt.defaultZone) {
    const n = Oe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Gr.isValidZone(e);
  }
  static normalizeZone(e) {
    return hi(e, mt.defaultZone);
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
    return { relative: y0(), localeWeek: v0() };
  }
}
function Tm(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(Re.fromMillis(r).as("days"));
}
function sC(t, e, n) {
  const r = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = Tm(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Tm]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of r)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function aC(t, e, n, r) {
  let [i, s, a, o] = sC(t, e, n);
  const l = e - i, u = n.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = Re.fromObject(s, r);
  return u.length > 0 ? Re.fromMillis(l, r).shiftTo(...u).plus(f) : f;
}
const Hh = {
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
}, Nm = {
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
}, oC = Hh.hanidec.replace(/[\[|\]]/g, "").split("");
function lC(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(Hh.hanidec) !== -1)
        e += oC.indexOf(t[n]);
      else
        for (const i in Nm) {
          const [s, a] = Nm[i];
          r >= s && r <= a && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Fn({ numberingSystem: t }, e = "") {
  return new RegExp(`${Hh[t || "latn"]}${e}`);
}
const uC = "missing Intl.DateTimeFormat.formatToParts support";
function Ve(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(lC(n)) };
}
const cC = String.fromCharCode(160), R0 = `[ ${cC}]`, $0 = new RegExp(R0, "g");
function fC(t) {
  return t.replace(/\./g, "\\.?").replace($0, R0);
}
function Lm(t) {
  return t.replace(/\./g, "").replace($0, " ").toLowerCase();
}
function Vn(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(fC).join("|")),
    deser: ([n]) => t.findIndex((r) => Lm(n) === Lm(r)) + e
  };
}
function Cm(t, e) {
  return { regex: t, deser: ([, n, r]) => tc(n, r), groups: e };
}
function il(t) {
  return { regex: t, deser: ([e]) => e };
}
function hC(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function dC(t, e) {
  const n = Fn(e), r = Fn(e, "{2}"), i = Fn(e, "{3}"), s = Fn(e, "{4}"), a = Fn(e, "{6}"), o = Fn(e, "{1,2}"), l = Fn(e, "{1,3}"), u = Fn(e, "{1,6}"), f = Fn(e, "{1,9}"), c = Fn(e, "{2,4}"), h = Fn(e, "{4,6}"), d = (g) => ({ regex: RegExp(hC(g.val)), deser: ([b]) => b, literal: !0 }), m = ((g) => {
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
        return Ve(c, Hf);
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
        return il(f);
      case "uu":
        return il(o);
      case "uuu":
        return Ve(n);
      case "a":
        return Vn(e.meridiems(), 0);
      case "kkkk":
        return Ve(s);
      case "kk":
        return Ve(c, Hf);
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
        return Cm(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Cm(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return il(/[a-z_+-/]{1,256}?/i);
      case " ":
        return il(/[^\S\n\r]/);
      default:
        return d(g);
    }
  })(t) || {
    invalidReason: uC
  };
  return m.token = t, m;
}
const pC = {
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
function mC(t, e, n) {
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
  let o = pC[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function gC(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function yC(t, e, n) {
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
function vC(t) {
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
  return Se(t.z) || (n = Gr.create(t.z)), Se(t.Z) || (n || (n = new Qt(t.Z)), r = t.Z), Se(t.q) || (t.M = (t.q - 1) * 3 + 1), Se(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), Se(t.u) || (t.S = Gh(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), n, r];
}
let Dc = null;
function _C() {
  return Dc || (Dc = Oe.fromMillis(1555555555555)), Dc;
}
function bC(t, e) {
  if (t.literal)
    return t;
  const n = Wt.macroTokenToFormatOpts(t.val), r = j0(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function F0(t, e) {
  return Array.prototype.concat(...t.map((n) => bC(n, e)));
}
function V0(t, e, n) {
  const r = F0(Wt.parseFormat(n), t), i = r.map((a) => dC(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [a, o] = gC(i), l = RegExp(a, "i"), [u, f] = yC(e, l, o), [c, h, d] = f ? vC(f) : [null, null, void 0];
    if (ra(f, "a") && ra(f, "H"))
      throw new Vs(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function EC(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: a } = V0(t, e, n);
  return [r, i, s, a];
}
function j0(t, e) {
  if (!t)
    return null;
  const r = Wt.create(e, t).dtFormatter(_C()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((a) => mC(a, t, s));
}
const kc = "Invalid DateTime", Pm = 864e13;
function sl(t) {
  return new zn("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Ic(t) {
  return t.weekData === null && (t.weekData = pu(t.c)), t.weekData;
}
function Rc(t) {
  return t.localWeekData === null && (t.localWeekData = pu(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Ui(t, e) {
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
function G0(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function al(t, e) {
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
function $l(t, e, n) {
  return G0(ec(t), e, n);
}
function Am(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, mu(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
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
  }).as("milliseconds"), o = ec(s);
  let [l, u] = G0(o, n, t.zone);
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
function ol(t, e, n = !0) {
  return t.isValid ? Wt.create(Xe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function $c(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += bt(t.c.year, n ? 6 : 4), e ? (r += "-", r += bt(t.c.month), r += "-", r += bt(t.c.day)) : (r += bt(t.c.month), r += bt(t.c.day)), r;
}
function Dm(t, e, n, r, i, s) {
  let a = bt(t.c.hour);
  return e ? (a += ":", a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += ":")) : a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += bt(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += bt(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += bt(Math.trunc(-t.o / 60)), a += ":", a += bt(Math.trunc(-t.o % 60))) : (a += "+", a += bt(Math.trunc(t.o / 60)), a += ":", a += bt(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const U0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, SC = {
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
}, B0 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], xC = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], OC = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function MC(t) {
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
    throw new qv(t);
  return e;
}
function km(t) {
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
      return MC(t);
  }
}
function Im(t, e) {
  const n = hi(e.zone, mt.defaultZone), r = Xe.fromObject(e), i = mt.now();
  let s, a;
  if (Se(t.year))
    s = i;
  else {
    for (const u of B0)
      Se(t[u]) && (t[u] = U0[u]);
    const o = m0(t) || g0(t);
    if (o)
      return Oe.invalid(o);
    const l = n.offset(i);
    [s, a] = $l(t, l, n);
  }
  return new Oe({ ts: s, zone: n, loc: r, o: a });
}
function Rm(t, e, n) {
  const r = Se(n.round) ? !0 : n.round, i = (a, o) => (a = Uh(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), s = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const a of n.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function $m(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class Oe {
  constructor(e) {
    const n = e.zone || mt.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new zn("invalid input") : null) || (n.isValid ? null : sl(n));
    this.ts = Se(e.ts) ? mt.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        i = al(this.ts, o), r = Number.isNaN(i.year) ? new zn("invalid input") : null, i = r ? null : i, s = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || Xe.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new Oe({});
  }
  static local() {
    const [e, n] = $m(arguments), [r, i, s, a, o, l, u] = n;
    return Im({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, n] = $m(arguments), [r, i, s, a, o, l, u] = n;
    return e.zone = Qt.utcInstance, Im({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = tL(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return Oe.invalid("invalid input");
    const i = hi(n.zone, mt.defaultZone);
    return i.isValid ? new Oe({
      ts: r,
      zone: i,
      loc: Xe.fromObject(n)
    }) : Oe.invalid(sl(i));
  }
  static fromMillis(e, n = {}) {
    if (ss(e))
      return e < -Pm || e > Pm ? Oe.invalid("Timestamp out of range") : new Oe({
        ts: e,
        zone: hi(n.zone, mt.defaultZone),
        loc: Xe.fromObject(n)
      });
    throw new ln(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (ss(e))
      return new Oe({
        ts: e * 1e3,
        zone: hi(n.zone, mt.defaultZone),
        loc: Xe.fromObject(n)
      });
    throw new ln("fromSeconds requires a numerical input");
  }
  static fromObject(e, n = {}) {
    e = e || {};
    const r = hi(n.zone, mt.defaultZone);
    if (!r.isValid)
      return Oe.invalid(sl(r));
    const i = Xe.fromObject(n), s = gu(e, km), { minDaysInFirstWeek: a, startOfWeek: o } = bm(s, i), l = mt.now(), u = Se(n.specificOffset) ? r.offset(l) : n.specificOffset, f = !Se(s.ordinal), c = !Se(s.year), h = !Se(s.month) || !Se(s.day), d = c || h, p = s.weekYear || s.weekNumber;
    if ((d || f) && p)
      throw new Vs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && f)
      throw new Vs("Can't mix ordinal dates with month/day");
    const m = p || s.weekday && !d;
    let g, b, _ = al(l, u);
    m ? (g = xC, b = SC, _ = pu(_, a, o)) : f ? (g = OC, b = wC, _ = Ac(_)) : (g = B0, b = U0);
    let S = !1;
    for (const T of g) {
      const k = s[T];
      Se(k) ? S ? s[T] = b[T] : s[T] = _[T] : S = !0;
    }
    const y = m ? J2(s, a, o) : f ? Q2(s) : m0(s), E = y || g0(s);
    if (E)
      return Oe.invalid(E);
    const N = m ? vm(s, a, o) : f ? _m(s) : s, [w, C] = $l(N, u, r), A = new Oe({
      ts: w,
      zone: r,
      o: C,
      loc: i
    });
    return s.weekday && d && e.weekday !== A.weekday ? Oe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${A.toISO()}`
    ) : A;
  }
  static fromISO(e, n = {}) {
    const [r, i] = WL(e);
    return _a(r, i, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, i] = qL(e);
    return _a(r, i, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, i] = HL(e);
    return _a(r, i, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (Se(e) || Se(n))
      throw new ln("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, a = Xe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = EC(a, e, n);
    return f ? Oe.invalid(f) : _a(o, l, r, `format ${n}`, e, u);
  }
  static fromString(e, n, r = {}) {
    return Oe.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, i] = QL(e);
    return _a(r, i, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the DateTime is invalid");
    const r = e instanceof zn ? e : new zn(e, n);
    if (mt.throwOnInvalid)
      throw new N2(r);
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
    return F0(Wt.parseFormat(e), Xe.fromObject(n)).map((i) => i.val).join("");
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
    return this.isValid ? Ic(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Ic(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Ic(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? Rc(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? Rc(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? Rc(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? Ac(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? rl.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? rl.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? rl.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? rl.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, r = ec(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), a = this.zone.offset(r - i * n), o = this.zone.offset(r - s * n);
    if (a === o)
      return [this];
    const l = r - a * n, u = r - o * n, f = al(l, a), c = al(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Ui(this, { ts: l }), Ui(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return No(this.year);
  }
  get daysInMonth() {
    return mu(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? Ys(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? oo(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? oo(
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
    return this.setZone(mt.defaultZone);
  }
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = hi(e, mt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || r) {
        const s = e.offset(this.ts), a = this.toObject();
        [i] = $l(a, s, e);
      }
      return Ui(this, { ts: i, zone: e });
    } else
      return Oe.invalid(sl(e));
  }
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return Ui(this, { loc: i });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = gu(e, km), { minDaysInFirstWeek: r, startOfWeek: i } = bm(n, this.loc), s = !Se(n.weekYear) || !Se(n.weekNumber) || !Se(n.weekday), a = !Se(n.ordinal), o = !Se(n.year), l = !Se(n.month) || !Se(n.day), u = o || l, f = n.weekYear || n.weekNumber;
    if ((u || a) && f)
      throw new Vs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Vs("Can't mix ordinal dates with month/day");
    let c;
    s ? c = vm(
      { ...pu(this.c, r, i), ...n },
      r,
      i
    ) : Se(n.ordinal) ? (c = { ...this.toObject(), ...n }, Se(n.day) && (c.day = Math.min(mu(c.year, c.month), c.day))) : c = _m({ ...Ac(this.c), ...n });
    const [h, d] = $l(c, this.o, this.zone);
    return Ui(this, { ts: h, o: d });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e);
    return Ui(this, Am(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e).negate();
    return Ui(this, Am(this, n));
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
    return this.isValid ? Wt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : kc;
  }
  toLocaleString(e = du, n = {}) {
    return this.isValid ? Wt.create(this.loc.clone(n), e).formatDateTime(this) : kc;
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
    let o = $c(this, a);
    return o += "T", o += Dm(this, a, n, r, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? $c(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return ol(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + Dm(
      this,
      a === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  toRFC2822() {
    return ol(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return ol(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? $c(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), ol(this, i, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : kc;
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
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = nL(n).map(Re.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = aC(o, l, s, i);
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
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), Rm(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? Rm(e.base || Oe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("min requires all arguments be DateTimes");
    return Em(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("max requires all arguments be DateTimes");
    return Em(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, a = Xe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return V0(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return Oe.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return du;
  }
  static get DATE_MED() {
    return Hv;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return P2;
  }
  static get DATE_FULL() {
    return zv;
  }
  static get DATE_HUGE() {
    return Yv;
  }
  static get TIME_SIMPLE() {
    return Xv;
  }
  static get TIME_WITH_SECONDS() {
    return Kv;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Zv;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return Jv;
  }
  static get TIME_24_SIMPLE() {
    return Qv;
  }
  static get TIME_24_WITH_SECONDS() {
    return e0;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return t0;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return n0;
  }
  static get DATETIME_SHORT() {
    return r0;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return i0;
  }
  static get DATETIME_MED() {
    return s0;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return a0;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return A2;
  }
  static get DATETIME_FULL() {
    return o0;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return l0;
  }
  static get DATETIME_HUGE() {
    return u0;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return c0;
  }
}
function ba(t) {
  if (Oe.isDateTime(t))
    return t;
  if (t && t.valueOf && ss(t.valueOf()))
    return Oe.fromJSDate(t);
  if (t && typeof t == "object")
    return Oe.fromObject(t);
  throw new ln(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const W0 = [0, 1, 0, 0];
function Fm(t, e = "second", n, r) {
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
function zf(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function Fc(t) {
  return Oe.fromISO(t).toFormat("yyyy-MM-dd");
}
function TC(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? NC(t, e) : LC(t, e);
}
function NC(t, e) {
  var l;
  const n = (l = e.timeValueList) != null ? l : [];
  let r, i = 0, s = n.length - 1;
  for (; s - i > 1; )
    r = Math.floor((i + s) / 2), n[r] >= t ? s = r : i = r;
  const a = Math.abs(n[i] - t), o = Math.abs(n[s] - t);
  return n[a < o ? i : s];
}
function LC(t, e) {
  var l;
  const n = (l = e.timeInterval) != null ? l : W0, r = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
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
const vt = gs("map", () => {
  const t = Xn(), e = we({}), n = nt([]), r = nt([]), i = we(!1), s = we(!1), a = we(void 0);
  function o(_) {
    a.value = _;
  }
  function l(..._) {
    n.value = [.../* @__PURE__ */ new Set([...n.value, ..._])];
  }
  function u(..._) {
    r.value = [.../* @__PURE__ */ new Set([...r.value, ..._])];
  }
  function f(..._) {
    n.value = n.value.filter(
      (S) => _.indexOf(S.id) === -1
    ), r.value = r.value.filter(
      (S) => _.indexOf(S.id) === -1
    );
  }
  function c() {
    n.value = [];
  }
  function h(_) {
    var S;
    return !!((S = n.value) != null && S.find((y) => y.id === _));
  }
  function d(_, S = !1) {
    var E;
    const y = S ? r : n;
    y.value = [
      ...((E = y.value) == null ? void 0 : E.sort(
        (N, w) => _.indexOf(N.id) - _.indexOf(w.id)
      )) || []
    ];
  }
  function p(_, S) {
    n.value = n.value.map((y) => y.id === _ ? { ...y, opacity: S, previousOpacity: y.opacity } : y);
  }
  function m(_, S, y) {
    n.value = n.value.map((E) => {
      if (E.id === _) {
        const N = {
          ...E,
          currentTimeMinValue: S ? zf(S) : void 0,
          currentTimeMaxValue: y ? zf(y) : void 0
        };
        return N.type === "WMTS" && (N.name = t.getLayerCurrentLabel(N)), N;
      }
      return E;
    });
  }
  function g(_) {
    i.value = _;
  }
  function b(_) {
    s.value = _;
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
    setIs3dActive: g,
    setIs3dMesh: b,
    hasLayer: h
  };
}), Vm = "main", CC = "root_3d", PC = -222, Zt = gs(
  "config",
  () => {
    const t = nt(), e = we(Vm), n = de(() => {
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
          name: CC,
          id: PC,
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
      e.value = Vm;
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
function as() {
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
const jm = as();
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
    var f, c, h, d, p, m, g;
    l.currentTimeMinValue || (l.currentTimeMinValue = (h = (f = l.time) == null ? void 0 : f.minDefValue) != null ? h : (c = l.time) == null ? void 0 : c.minValue);
    const u = ((d = l.time) == null ? void 0 : d.mode) === Ir.RANGE;
    !l.currentTimeMaxValue && u && (l.currentTimeMaxValue = (g = (p = l.time) == null ? void 0 : p.maxDefValue) != null ? g : (m = l.time) == null ? void 0 : m.maxValue);
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
    ].join(w2);
  }
  function s(l) {
    var h, d;
    const u = uu();
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
      ao.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = vt(), f = uu();
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
      ao.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var m;
    const c = Zt(), h = vt(), d = f ? c.layerTrees_3d : c.theme, p = jm.findById(l, d);
    if (p) {
      const g = ((m = p.metadata) == null ? void 0 : m.linked_layers) || [];
      u === !1 ? h.removeLayers(p.id, ...g) : (s(p), (f ? h.add3dLayers : h.addLayers)(
        e(p),
        ...g.map(
          (_) => e(
            jm.findById(parseInt(_, 10))
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
class AC {
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
const ll = new AC();
function Gm(t, e) {
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
function DC(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (n) => n !== null && !isNaN(Number(n)) ? parseFloat(n) : void 0
  )) || [];
}
function kC(t, e) {
  return (t == null ? void 0 : t.split(e).map(zh)) || [];
}
function zh(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function q0() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function pr(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
const IC = pr(/firefox/i);
pr(/safari/i) && !pr(/chrome/i) && pr(/android/i);
pr(/iP(ad|od|hone)/i);
pr(/chrome/i) && pr(/android/i);
pr(/chrome/i);
pr(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
pr(/Edge/i);
const Po = "ipv6", yu = "address", Ao = "applogin", Do = "localforage", Zs = "debug", RC = "embeddedserver", $C = "embeddedserverprotocol", vu = "fid", wi = "lang", _u = "layersOpen", Yf = "version", FC = "map_id", Um = "layers", Bm = "bgLayer", Wm = "opacities", lo = "theme", qm = "time", Hm = "zoom", VC = "SRS", zm = "X", Ym = "Y", uo = "serial", jC = "serialLayer", H0 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Xf = "lc", Kf = "sliderRatio", z0 = "bgOpacity", GC = "layers_indices", Xm = "layers_opacity", Km = "layers_visibility";
var kt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(kt || {});
class Y0 {
}
class bu extends Y0 {
  static processRules(e) {
    return bu.ruleUseLocalStorage(e) ? kt.localStorage : kt.permalink;
  }
  static processRulesForKey(e, n) {
    if (e === lo && {}.VITE_DEPLOY_GHPAGES !== "true")
      return kt.permalinkAsPath;
    if (H0.includes(e))
      return kt.localStorage;
    if (e === uo)
      return kt.permalink;
    if (e === _u)
      return kt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [UC, BC, WC].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const UC = (t) => Object.keys(t).length === 0, BC = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(Po) || t.hasOwnProperty(Ao) || t.hasOwnProperty(Do)), WC = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(Po) && t.hasOwnProperty(Ao) && t.hasOwnProperty(Do);
class Eu extends Y0 {
  static processRules() {
    return kt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, n) {
    if (Eu.ruleUsePermalink(e))
      return kt.permalink;
    if (e === _u || H0.includes(e))
      return kt.localStorage;
    if (e === uo)
      return kt.permalink;
    if (e === lo)
      return kt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      qC,
      HC,
      zC
    ].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const qC = (t) => t === Xf || t === Kf, HC = (t) => t === Yf, zC = (t) => t === lo && {}.VITE_DEPLOY_GHPAGES === "true";
class X0 {
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
const Ji = new X0();
class YC extends X0 {
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
const XC = new YC();
class KC {
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
    return Ji.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const n = (i = this.correspondingStorages(
      bu.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), r = this.storageForKey(e, bu, n);
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
      Eu.processRules()
    ), r = this.storageForKey(e, Eu);
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
      return [Ji, localStorage];
    if (e === kt.localStorage)
      return [localStorage];
    if (e === kt.permalink)
      return [Ji];
    if (e === kt.permalinkAsPath)
      return [XC];
  }
}
const ul = new KC();
function ZC(t) {
  return JC(t) || QC(t) || eP(t) || tP(t);
}
const JC = (t) => Object.keys(t).length === 0, QC = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    Po,
    Ao,
    Do,
    vu,
    wi,
    yu,
    Zs
  ].some((n) => e.indexOf(n) !== -1);
}, eP = (t) => {
  const e = Object.keys(t), n = (i) => e.indexOf(i) !== -1, r = [
    [Ao, Do],
    [Zs, vu],
    [wi, vu],
    [Zs, wi],
    [Zs, yu],
    [wi, yu]
  ];
  return Object.keys(t).length === 2 && r.reduce(
    (i, s) => i || s.every(n),
    !1
  );
}, tP = (t) => {
  const e = Object.keys(t), n = (a) => e.indexOf(a) !== -1, r = [Po, Ao, Do].every(
    n
  ), i = [Zs, vu, wi].every(n), s = [Zs, yu, wi].every(n);
  return Object.keys(t).length === 3 && (r || i || s);
};
class nP {
  constructor() {
    st(this, "intialVersion");
    const e = ul.paramKeys, n = this.getValue(Yf, Ks);
    this.intialVersion = n ? Math.max(2, Math.min(n, 3)) : ZC(e) ? 3 : 2, this.setValue(Yf, 3);
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
    return this.mapToEntity(ul.getValue(e), n);
  }
  setValue(e, n, r) {
    ul.setValue(e, this.mapToStorage(n, r));
  }
  removeItem(e) {
    ul.removeItem(e);
  }
}
const Ne = new nP(), rP = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], Ur = () => ({
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
function vs() {
  let t = "https://vectortiles.geoportail.lu", e = "/getvtstyle", n = "/uploadvtstyle", r = "/deletevtstyle";
  function i(y) {
    y.get && (e = y.get), y.upload && (n = y.upload), y.delete && (r = y.delete), y.vectortiles && (t = y.vectortiles);
  }
  function s(y) {
    const E = Ji.getItem(RC), N = Ji.getItem($C) || "http";
    return (E ? `${N}://${E}` : t) + `/styles/${y}/style.json`;
  }
  function a(y) {
    return `${t}/styles/${y}/{z}/{x}/{y}.png`;
  }
  function o(y) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(y);
  }
  function l(y, E) {
    const N = mr();
    if (y == null)
      return;
    const w = /* @__PURE__ */ new Map();
    N.bgVectorSources.forEach((C, A) => {
      if (A === y.id) {
        const T = { ...C, xyz_custom: E };
        w.set(A, T);
      } else
        w.set(A, C);
    }), N.setBgVectorSources(w);
  }
  function u(y, E, N = !1) {
    const w = "", C = s(E), A = a(E), T = {
      label: y,
      defaultMapBoxStyle: C,
      defaultMapBoxStyleXYZ: A,
      xyz: A,
      xyz_custom: w,
      style: C
    }, k = Ji.getItem(uo), I = Ji.getItem(jC);
    if (k)
      o(k) && console.log(I);
    else if (!N)
      return Promise.resolve(T);
    return Promise.resolve(T);
  }
  function f(y) {
    const E = Ur().medium_default_styles.road;
    if (y) {
      y.colors.forEach((w, C) => {
        E[C].color = w;
      });
      const N = E.findIndex(
        (w) => w.label === "Hillshade"
      );
      E[N].visible = y.hillshade;
    }
    return E;
  }
  function c(y, E, N) {
    if (!y || !E.get(y.id))
      return;
    const w = JSON.parse(
      JSON.stringify(E.get(y.id))
    );
    if (!!w && !(!w || !w.layers))
      return N && N.forEach((C) => {
        w == null || w.layers.forEach((A, T) => {
          for (const k of rP)
            if ((C[`${k}s`] || []).includes(A.id)) {
              const K = Object.assign(
                {},
                w.layers[T].paint
              );
              C.color && (K[`${k}-color`] = C.color, K[`${k}-opacity`] = 1, w.layers[T].paint = K), w.layers[T].layout = Object.assign(
                {},
                w.layers[T].layout,
                { visibility: C.visible ? "visible" : "none" }
              );
            }
        });
      }), w;
  }
  function h(y) {
    if (y === null)
      return Promise.resolve();
    {
      const E = `${r}?id=${y}`;
      return fetch(E).catch(() => "");
    }
  }
  function d(y, E) {
    return h(E).then(() => {
      const N = new FormData(), w = JSON.stringify(y), C = new Blob([w], { type: "application/json" });
      return N.append("style", C, "style.json"), fetch(n, {
        method: "POST",
        body: N
      }).then((T) => T.json()).then((T) => T.id).catch((T) => console.warn(T));
    });
  }
  function p(y, E) {
    if (!E)
      return;
    const N = y.maplibreMap;
    !N || (N.loaded() ? N.setStyle(E) : new Promise((w) => N.once("data", w)).then(
      () => N.setStyle(E)
    ));
  }
  function m(y) {
    return Ur().bg_layers.find((E) => E.id == (y == null ? void 0 : y.id));
  }
  function g(y) {
    const E = m(y);
    return E == null ? void 0 : E.vector_id;
  }
  function b(y) {
    const E = m(y);
    return (E == null ? void 0 : E.vector_id) !== void 0;
  }
  function _(y) {
    const E = m(y);
    return {
      isEditable: (E == null ? void 0 : E.vector_id) !== void 0,
      hasSimpleStyle: (E == null ? void 0 : E.simple_style_class) !== void 0,
      hasAdvancedStyle: (E == null ? void 0 : E.medium_style_class) !== void 0,
      hasExpertStyle: (E == null ? void 0 : E.expert_style_class) !== void 0
    };
  }
  function S(y, E) {
    return E.map(
      (N) => Object.assign(N, {
        selected: N.colors.every(
          (w, C) => {
            var A;
            return ((A = y[C]) == null ? void 0 : A.color) === w;
          }
        )
      })
    );
  }
  return {
    MVTSTYLES_PATH_GET: e,
    MVTSTYLES_PATH_UPLOAD: n,
    MVTSTYLES_PATH_DELETE: r,
    setRegisterUrl_v3: i,
    getDefaultMapBoxStyleUrl: s,
    getDefaultMapBoxStyleXYZ: a,
    setConfigForLayer: u,
    getRoadStyleFromSimpleStyle: f,
    applyDefaultStyle: c,
    applyConsolidatedStyle: p,
    getVectorId: g,
    setCustomStyleSerial: l,
    unregisterStyle: h,
    registerStyle: d,
    checkSelection: S,
    isLayerStyleEditable: b,
    getStyleCapabilitiesFromLayer: _
  };
}
const mr = gs(
  "style",
  () => {
    const t = vs(), e = nt(), n = nt(/* @__PURE__ */ new Map()), r = nt(
      /* @__PURE__ */ new Map()
    ), i = nt(!1), s = nt(null), a = nt(), o = [];
    Ur().bg_layers.forEach((m) => {
      if (m.vector_id) {
        const g = t.setConfigForLayer(
          m.icon_id,
          m.vector_id
        );
        o.push(
          g.then((b) => ({ id: m.id, config: b }))
        );
      }
    }), Promise.all(o).then((m) => {
      const g = /* @__PURE__ */ new Map();
      m.forEach((b) => g.set(b.id, b.config)), n.value = g;
    });
    function l(m) {
      n.value = m;
    }
    function u(m) {
      const g = /* @__PURE__ */ new Map();
      r.value.forEach((b, _) => {
        _ !== m && g.set(_, b);
      }), r.value = g;
    }
    function f(m, g) {
      const b = /* @__PURE__ */ new Map();
      r.value.forEach(
        (_, S) => b.set(S, _)
      ), b.set(m, g), r.value = b;
    }
    function c(m) {
      e.value = t.getRoadStyleFromSimpleStyle(m), d();
    }
    function h(m) {
      e.value = m, d();
    }
    function d() {
      i.value = !1;
    }
    function p() {
      i.value = !0;
    }
    return {
      bgStyle: e,
      bgVectorSources: n,
      bgVectorBaseStyles: r,
      isExpertStyleActive: i,
      appliedStyle: a,
      removeBaseStyle: u,
      setBaseStyle: f,
      setBgVectorSources: l,
      setSimpleStyle: c,
      setStyle: h,
      disableExpertStyle: d,
      enableExpertStyle: p,
      styleSerial: s
    };
  },
  {}
);
class iP {
  constructor() {
    st(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = mr();
    let n, r = !1;
    n = vn(() => {
      e.bgVectorSources && (this.restoreStyle(!1), r && this.persistStyle(), r = !0, n && n());
    });
  }
  persistStyle() {
    const e = mr(), { bgStyle: n } = He(e);
    this.styleWatcher || (this.styleWatcher = et(
      n,
      (r, i) => {
        if (i !== r) {
          const s = vt();
          s.bgLayer && (Ne.setValue(
            s.bgLayer.name,
            r || [],
            ll.styleToLocalStorage
          ), Ne.setValue(
            uo,
            r || [],
            ll.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const n = mr();
    n.setStyle(null);
    const i = vt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Ne.getValue(
        uo,
        ll.styleSerialToStyle
      )), s.length === 0 && (s = Ne.getValue(
        i.name,
        ll.styleLocalStorageToStyle
      )), s && s.length > 0 && n.setStyle(s);
    }
  }
}
const K0 = new iP(), sP = "id", aP = "label", oP = "layer_name", lP = "metadata", uP = "queryable_id", cP = "current_time", fP = "time", hP = "defaultMapBoxStyle", dP = "https://map.geoportail.lu/ogcproxywms", pP = "https://map.geoportail.lu/httpsproxy";
class mP {
  constructor() {
    st(this, "_wmsProxyUrl", dP);
    st(this, "_remoteProxyUrl", pP);
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
const ia = new mP();
function Z0() {
  return Z_(
    [5.31, 49.38, 6.64, 50.21],
    jv,
    Wa
  );
}
function J0(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && q0();
}
function gP(t, e = "https") {
  const n = t.imageType.split("/")[1], r = Ne.getValue(Po, zh) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${r}/mapproxy_4_v3/wmts/{Layer}${J0(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${n}`;
}
class yP {
  createOlLayer(e) {
    const { name: n, layers: r, imageType: i, url: s, id: a } = e, o = new Mg({
      url: s || ia.wmsProxyUrl,
      hidpi: q0(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: r
      },
      ...s != null || ia.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new nb({
      properties: {
        "olcs.extent": Z0(),
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
const Q0 = new yP(), vP = [
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
], _P = [
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
class bP {
  createOlLayer(e) {
    const { name: n, imageType: r, id: i } = e, s = J0(e), a = _l(Wa), o = a.getExtent(), l = new Tg({
      url: gP(e),
      tilePixelRatio: s ? 2 : 1,
      layer: n,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: r,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new ib({
        origin: sb(o),
        extent: o,
        resolutions: vP,
        matrixIds: _P
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new rb({
      source: l,
      properties: {
        "olcs.extent": Z0(),
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
const e_ = new bP();
class t_ extends ab {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.accessToken, delete n.style, delete n.container, delete n.xyz, super(n), this.set("xyz", e.maplibreOptions.xyz), this.set("xyz_custom", e.maplibreOptions.xyz_custom), this.xyz_ = e.xyz, e.accessToken && (gd.accessToken = e.accessToken), this.map_ = new gd.Map({
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
    return a && this.map_.rotateTo(ob(-a), {
      animate: !1
    }), this.map_.jumpTo({
      center: lb(r.center),
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
class EP {
  createOlLayer(e, n) {
    const r = Fr(), { id: i, metadata: s, name: a } = e, o = n.get(i);
    if (!o)
      return;
    const l = {
      container: r.getOlMap().getTarget(),
      ...o
    }, u = new t_({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = mr(), c = vs();
    return u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u.getMapLibreMap().getStyle()) : new Promise(
      (h) => u.getMapLibreMap().once("data", h)
    ).then(
      () => f.setBaseStyle(i, u.getMapLibreMap().getStyle())
    ), u.set(
      hP,
      c.getDefaultMapBoxStyleUrl(c.getVectorId(e))
    ), u;
  }
}
const SP = new EP();
var os = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WFS = "WFS", t.WMTS = "WMTS", t.BG_WMTS = "BG WMTS", t.BG_MVT = "BG MVT", t["3D"] = "3D", t))(os || {});
class wP {
  createOlLayer(e, n) {
    let r;
    if (n && (r = SP.createOlLayer(e, n)), !r)
      switch (e.type) {
        case os.WMS:
          r = Q0.createOlLayer(e);
          break;
        case os.WMTS:
        case os.BG_WMTS:
          r = e_.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return r.set(sP, e.id), r.set(aP, e.name), r.set(oP, e.name), r.set(lP, e.metadata), r.set(uP, e.id), r.set(
      cP,
      Xn().getLayerCurrentTime(e)
    ), r.set(fP, e.time), r.setOpacity(e.opacity), r;
  }
}
const Zm = new wP();
class xP {
  setLayerTime(e, n) {
    const r = e.getSource();
    r instanceof Mg && Q0.setLayerTime(r, n), r instanceof Tg && e_.setLayerTime(e, r, n);
  }
}
const OP = new xP(), cl = -200;
function n_() {
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
    p.forEach((g, b) => {
      const _ = m.find(
        (S) => S.get("id") === g.id
      );
      _ == null || _.setZIndex(b + 1);
    });
  }
  function i(d, p, m) {
    const g = d.getLayers().getArray().find((b) => b.get("id") === p);
    g && g.setOpacity(m);
  }
  function s(d, p) {
    const m = Xn(), g = e(d, p.id), b = m.getLayerCurrentTime(p);
    b && g && OP.setLayerTime(g, b);
  }
  function a(d) {
    ya.delete(d);
  }
  function o(d) {
    return ya.has(d.id);
  }
  function l(d, p) {
    ya.set(d, p);
  }
  function u(d) {
    const p = d.id, m = ya.get(p);
    if (m)
      return m;
    {
      const g = Zm.createOlLayer(d);
      return l(p, g), g;
    }
  }
  function f(d) {
    return d && ya.get(d.id) || null;
  }
  function c(d, p) {
    const g = d.getLayers().getArray().find((b) => b.getZIndex() === cl);
    g && p(g);
  }
  function h(d, p, m) {
    var y;
    const g = d.getLayers(), b = g.getArray().findIndex((E) => E.getZIndex() === cl), _ = (y = g.getArray()[b]) == null ? void 0 : y.get("id");
    let S;
    p && (o(p) ? S = f(p) : (S = Zm.createOlLayer(
      p,
      m
    ), l(p.id, S))), b >= 0 ? S ? (S.setZIndex(cl), g.setAt(b, S)) : g.removeAt(b) : S && (S.setZIndex(cl), d.addLayer(S)), _ && _ !== (p == null ? void 0 : p.id) && K0.restoreStyle(!0);
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
class MP {
  constructor(e) {
    st(this, "previousLayers");
    st(this, "previousVectorSources");
    const n = vt(), r = mr(), i = Fr(), s = vs(), a = n_(), { appliedStyle: o } = He(r);
    et(
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
    ), et(
      () => n.bgLayer,
      (l) => l !== void 0 && a.setBgLayer(e, l, r.bgVectorSources)
    ), vn(() => {
      r.isExpertStyleActive || (o.value = s.applyDefaultStyle(
        n.bgLayer,
        r.bgVectorBaseStyles,
        r.bgStyle
      ));
    }), et(o, (l) => {
      r.bgStyle === null && !r.isExpertStyleActive ? s.unregisterStyle(r.styleSerial).then(r.styleSerial = null) : s.registerStyle(l, r.styleSerial).then((u) => {
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
    }), et(
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
const TP = {
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
class NP {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = Fr().getOlMap().getView(), n = () => {
      const r = e.getZoom();
      Ne.setValue(Hm, r ? Math.ceil(r) : null);
    };
    n(), yd.listen(
      e,
      "change:resolution",
      Gm(n, 300)
    );
  }
  persistXY() {
    const e = Fr().getOlMap().getView(), n = () => {
      const r = e.getCenter();
      Ne.setValue(zm, r ? Math.round(r[0]) : null), Ne.setValue(Ym, r ? Math.round(r[1]) : null);
    };
    n(), yd.listen(
      e,
      ub.PROPERTYCHANGE,
      Gm(n, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = Fr().getOlMap().getView(), n = Ne.getValue(Hm, Ks), r = Ne.getInitialVersion(), i = Ne.getValue(zm, Ks), s = Ne.getValue(Ym, Ks), a = Ne.getValue(VC), o = J_(
      GN,
      Wa
    );
    let l, u;
    n !== void 0 ? u = r === 3 ? Number(n) : TP[n] : u = 8, i != null && s != null ? r === 3 && a != null ? l = md([i, s], a, Wa) : l = r === 3 ? [i, s] : o([s, i], void 0, 2) : l = md(
      [6, 49.7],
      jv,
      Wa
    ), e.setCenter(l), e.setZoom(u);
  }
}
const LP = new NP(), CP = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, PP = /* @__PURE__ */ fe({
  __name: "attribution-control",
  setup(t) {
    const e = vt(), n = we("");
    return vn(() => {
      var r, i;
      n.value = ((i = (r = e.bgLayer) == null ? void 0 : r.metadata) == null ? void 0 : i.attribution) || "";
    }), (r, i) => {
      const s = Sh("dompurify-html");
      return n.value ? Kl((D(), G("div", CP, null, 512)), [
        [s, n.value]
      ]) : F("v-if", !0);
    };
  }
}), AP = /* @__PURE__ */ me(PP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/attribution-control.vue"]]);
function ko(t, e) {
  const n = new t(e), r = Fr(), i = Ws("olMap");
  return _n(() => {
    i.addControl(n), i.changed();
  }), Ci(() => {
    const s = r.getOlMap();
    s.removeControl(n), s.changed();
  }), {
    control: n
  };
}
const DP = ["title"], kP = /* @__PURE__ */ fe({
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
      () => ko(Cg, { ...n, target: r })
    ), (s, a) => (D(), G("div", {
      ref_key: "controlElement",
      ref: r,
      class: Ae(`tracker-off ${n.className} ${M(Ng)} ${M(Lg)}`)
    }, [
      P("button", {
        title: M(e)(n.tipLabel),
        onClick: i
      }, oe(n.label), 9, DP)
    ], 2));
  }
}), IP = /* @__PURE__ */ me(kP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/location-control.vue"]]), RP = ["title"], $P = /* @__PURE__ */ fe({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = vt(), { t: n } = Ze(), r = t, i = we(null);
    _n(
      () => ko(Cg, { ...r, target: i })
    );
    const s = () => {
      e.setIs3dActive(!e.is3dActive);
    };
    return (a, o) => (D(), G("div", {
      ref_key: "controlElement",
      ref: i,
      class: Ae(`${r.className} ${M(Ng)} ${M(Lg)} ${M(e).is3dActive ? "active" : ""}`)
    }, [
      P("button", {
        title: M(n)(r.tipLabel),
        onClick: s
      }, oe(r.label), 9, RP)
    ], 2));
  }
}), FP = /* @__PURE__ */ me($P, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/map-3d.vue"]]), VP = /* @__PURE__ */ fe({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return ko(cb, t), (n, r) => F("v-if", !0);
  }
}), jP = /* @__PURE__ */ me(VP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/fullscreen-control.vue"]]), GP = /* @__PURE__ */ fe({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return ko(fb, t), (n, r) => F("v-if", !0);
  }
}), UP = /* @__PURE__ */ me(GP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/zoom-control.vue"]]);
class BP extends hb {
  constructor(n) {
    super(n);
    st(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const WP = /* @__PURE__ */ fe({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: Array, required: !0 }
  },
  setup(t) {
    return ko(BP, t), (n, r) => F("v-if", !0);
  }
}), qP = /* @__PURE__ */ me(WP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map-controls/zoom-to-extent-control.vue"]]), HP = /* @__PURE__ */ fe({
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
      n.value && (new MP(r), LP.bootstrap(), r.setTarget(n.value), window.olMap = r);
    }), Py("olMap", r), (s, a) => (D(), G("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: n,
      class: "h-full w-full bg-white relative"
    }, [
      ie(UP),
      ie(qP, { extent: i }),
      ie(jP),
      ie(AP),
      s.v4_standalone ? (D(), Ue(FP, { key: 0 })) : F("v-if", !0),
      ie(IP)
    ], 512));
  }
}), zP = /* @__PURE__ */ me(HP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/map/map-container.vue"]]), YP = "fr", XP = !0, KP = !1, ZP = !1, wt = gs(
  "app",
  () => {
    const t = we(YP), e = we(XP), n = we(KP), r = we(ZP), i = we(), s = we(), a = we(!1);
    function o(m) {
      t.value = m;
    }
    function l(m) {
      e.value = m, m || (r.value = !1, n.value = !1);
    }
    function u(m) {
      n.value = m, m && (r.value = !1);
    }
    function f(m) {
      r.value = m;
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
      closeStyleEditorPanel: p
    };
  },
  {}
), Su = {
  name: "blank",
  id: 0
};
function r_() {
  const t = wt(), { mapId: e } = He(t), n = as(), r = vt(), i = Xn(), s = de(() => {
    var c;
    if (!e.value) {
      const h = (c = Zt().theme) == null ? void 0 : c.name;
      if (h)
        return Ur().bg_layer_theme_defaults[h] || l();
    }
    return l();
  });
  function a(c) {
    const h = n.findBgLayerById(c);
    o(h || null);
  }
  function o(c) {
    if (c) {
      if (c.type === os.WMTS || c.type === os.BG_WMTS)
        c.type = "BG WMTS";
      else if (c.type === os.BG_MVT)
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
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || Su.id;
  }
  function u() {
    return Su.id;
  }
  function f() {
    return Ur().bg_layers;
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
const JP = ["title"], QP = /* @__PURE__ */ fe({
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
    return (s, a) => (D(), G("button", {
      title: r.value,
      class: Ae(i.value)
    }, null, 10, JP));
  }
}), Jm = /* @__PURE__ */ me(QP, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/background-selector/background-selector-item.vue"]]), eA = {
  key: 0,
  class: "flex flex-row-reverse"
}, tA = /* @__PURE__ */ fe({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { t: e } = Ze(), n = r_(), r = vt(), i = Zt(), { bgLayer: s, is3dMesh: a } = He(r), l = we(t.isOpen), u = we([]), f = de(
      () => {
        var p, m;
        return (m = (p = s.value) == null ? void 0 : p.id) != null ? m : n.getNullId();
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
        u.value = Ur().bg_layers.map(
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
      () => r.bgLayer,
      (p, m) => {
        const g = r.layers;
        m === void 0 && p === null && (g == null ? void 0 : g.length) === 0 && (n.setBgLayer(n.defaultSelectedBgId.value), p === null && uu().addNotification(
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
    return (p, m) => M(a) ? F("v-if", !0) : (D(), G("div", eA, [
      P("div", {
        class: Ae(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ie(Jm, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": c.value,
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      P("div", {
        class: Ae(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (D(!0), G(Ge, null, An(u.value, (g) => (D(), G("div", {
          key: g.id,
          class: Ae([
            "lux-bg-sel hover:bg-cyan-600",
            g.id === f.value ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ie(Jm, {
            "bg-name": g.name,
            onClick: (b) => h(g)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), nA = /* @__PURE__ */ me(tA, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/background-selector/background-selector.vue"]]), rA = /* @__PURE__ */ P("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), iA = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, sA = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, aA = { class: "text-xl" }, oA = /* @__PURE__ */ P("span", { "aria-hidden": "true" }, "\xD7", -1), lA = [
  oA
], uA = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, cA = { class: "flex flex-row justify-end" }, fA = /* @__PURE__ */ fe({
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
    const r = nt(!0);
    function i() {
      r.value = !1;
    }
    return (s, a) => (D(), Ue(Uy, { to: "body" }, [
      F(" backdrop "),
      rA,
      F(" modal "),
      ie(Hu, {
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
          r.value ? (D(), G("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: n,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = ar(sr((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            P("div", iA, [
              F(" header (title)"),
              P("div", sA, [
                P("h4", aA, oe(t.title), 1),
                P("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, [...lA])
              ]),
              F(" content slot "),
              P("div", {
                class: Ae(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                My(s.$slots, "content")
              ], 2),
              F(" footer (optional)"),
              t.footer ? (D(), G("div", uA, [
                P("div", cA, [
                  P("button", {
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
}), i_ = /* @__PURE__ */ me(fA, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/modal-dialog.vue"]]), Yh = gs(
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
), hA = ["aria-expanded"], dA = { class: "leading-6" }, pA = /* @__PURE__ */ fe({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, n) => (D(), G(Ge, null, [
      P("button", {
        onClick: n[0] || (n[0] = (r) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": e.expanded
      }, [
        P("div", {
          class: Ae(["grow", e.expanded ? "text-white" : "text-secondary"])
        }, oe(e.title), 3),
        P("div", dA, [
          P("div", {
            class: Ae(["fa fa-sharp fa-solid group-hover:text-white text-primary", e.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, hA),
      P("div", {
        class: Ae(e.expanded ? "" : "hidden")
      }, [
        My(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), Fl = /* @__PURE__ */ me(pA, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/expandable-panel.vue"]]), mA = {
  class: "mb-px",
  key: "node.id"
}, gA = ["data-cy"], yA = ["aria-expanded", "data-cy"], vA = { class: "grow" }, _A = { class: "leading-6" }, bA = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, EA = ["data-cy"], SA = { class: "ml-1 hover:underline" }, wA = /* @__PURE__ */ fe({
  __name: "layer-tree-node",
  props: {
    node: { type: Object, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i } = Ze(), { setMetadataId: s } = Yh(), a = !!n.node.children, o = n.node.depth === 0, l = n.node.depth >= 10, u = de(() => i(n.node.name, { ns: "client" }));
    function f(h) {
      r("toggleLayer", h);
    }
    function c(h) {
      r("toggleParent", h);
    }
    return (h, d) => {
      const p = F1("layer-tree-node", !0);
      return a ? (D(), G("div", mA, [
        F("    First level parents"),
        h.node.depth === 1 ? (D(), G("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${h.node.id}`
        }, [
          ie(Fl, {
            title: u.value,
            expanded: h.node.expanded,
            onTogglePanel: d[0] || (d[0] = (m) => c(h.node))
          }, null, 8, ["title", "expanded"])
        ], 8, gA)) : h.node.depth > 1 && !l ? (D(), G(Ge, { key: 1 }, [
          F("    Other parents (with custom panel style)"),
          P("button", {
            class: Ae(["w-full text-left flex px-2 py-1.5 pl-2", h.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": h.node.expanded,
            onClick: d[1] || (d[1] = (m) => c(h.node)),
            "data-cy": `parentLayerLabel-${h.node.id}`
          }, [
            P("div", vA, oe(u.value), 1),
            P("div", _A, [
              P("div", {
                class: Ae(["fa-sharp fa-solid", h.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, yA)
        ], 2112)) : F("v-if", !0),
        F("    Children"),
        l ? F("v-if", !0) : (D(), G("div", {
          key: 2,
          class: Ae(["bg-secondary", [
            { "pl-2": h.node.depth > 1 },
            { "lux-collapse": !o },
            { expanded: !o && h.node.expanded }
          ]])
        }, [
          (D(!0), G(Ge, null, An(h.node.children, (m) => (D(), Ue(p, {
            key: m.id,
            node: m,
            onToggleParent: d[2] || (d[2] = (g) => c(g)),
            onToggleLayer: d[3] || (d[3] = (g) => f(g))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (D(), G("div", bA, [
        P("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: d[4] || (d[4] = (m) => M(s)(h.node.id))
        }),
        P("button", {
          class: Ae(["w-full text-left", { "font-bold": h.node.checked }]),
          onClick: d[5] || (d[5] = (m) => f(h.node)),
          "data-cy": `layerLabel-${h.node.id}`
        }, [
          P("i", {
            class: Ae(["fa-solid", h.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          P("span", SA, oe(u.value), 1)
        ], 10, EA)
      ]));
    };
  }
}), Zf = /* @__PURE__ */ me(wA, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-tree/layer-tree-node.vue"]]);
class xA {
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
const Js = new xA();
var Pn = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Pn || {});
function OA(t, e) {
  var n, r;
  return t.children && !e.children || ((n = e.children) == null ? void 0 : n.length) === 0 ? 1 : e.children && !t.children || ((r = t.children) == null ? void 0 : r.length) === 0 ? -1 : 0;
}
function s_(t, e, n = 0) {
  const { name: r = "", type: i = Pn.WMS, children: s } = t, a = `${i}||${e}||${r}`.split("-").join("%2D"), o = vt();
  return {
    id: a,
    name: r,
    depth: n,
    children: s == null ? void 0 : s.sort(OA).map((l) => s_(l, e, n + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function MA(t) {
  const e = decodeURIComponent(t), [n, r, i] = e.split("||");
  return a_({
    id: e,
    url: ia.getProxyfiedUrl(r),
    remoteLayer: { name: i, type: n }
  });
}
function a_({
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
    imageType: Wv.PNG
  };
}
class Vc {
  constructor(e, n = 0, r = !1) {
    this.message = e, this.httpStatus = n, this.isCrossOriginRelated = r;
  }
}
let TA = 0;
function NA() {
  return TA++;
}
function LA(t, e, n) {
  return new Promise((r, i) => {
    const s = NA(), a = {
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
function Xh(t, e, n) {
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
function CA() {
  return jc || (jc = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), jc;
}
function PA(t) {
  return LA("parseWmsCapabilities", CA(), {
    url: t
  });
}
var or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ni = "";
class AA {
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
var DA = AA, Ai = {};
const kA = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
Ai.predefinedEntities = kA;
function o_(t) {
  if (l_(t))
    return !0;
  let e = rc(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
Ai.isNameChar = o_;
function l_(t) {
  let e = rc(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
Ai.isNameStartChar = l_;
function IA(t) {
  return !u_(t);
}
Ai.isNotXmlChar = IA;
function RA(t) {
  return t === "#" || o_(t);
}
Ai.isReferenceChar = RA;
function $A(t) {
  let e = rc(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
Ai.isWhitespace = $A;
function u_(t) {
  let e = rc(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
Ai.isXmlChar = u_;
function rc(t) {
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
const Gc = bs;
class FA extends Gc {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return Gc.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(Gc.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var Kh = FA;
const VA = bs, jA = Kh;
class GA extends jA {
  get type() {
    return VA.TYPE_CDATA;
  }
}
var c_ = GA;
const Uc = bs;
class UA extends Uc {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return Uc.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(Uc.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var f_ = UA;
const Bc = bs;
class Zh extends Bc {
  constructor(e, n = /* @__PURE__ */ Object.create(null), r = []) {
    super(), this.name = e, this.attributes = n, this.children = r;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof Zh; ) {
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
    return Bc.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(Bc.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var Jh = Zh;
const BA = Jh, Wc = bs;
class WA extends Wc {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof BA) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return Wc.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(Wc.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var h_ = WA;
const qc = bs;
class qA extends qc {
  constructor(e, n = "") {
    super(), this.name = e, this.content = n;
  }
  get type() {
    return qc.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(qc.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var d_ = qA;
const HA = DA, Bi = Ai, zA = c_, YA = f_, XA = h_, KA = Jh, Qm = d_, eg = Kh, Hc = "";
class ZA {
  constructor(e, n = {}) {
    for (this.document = new XA(), this.currentNode = this.document, this.options = n, this.scanner = new HA(QA(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
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
      if (r instanceof eg) {
        r.text += e;
        return;
      }
    }
    this.addNode(new eg(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, n = e.peek();
    if (n !== '"' && n !== "'")
      return !1;
    e.advance();
    let r, i = !1, s = Hc, a = n === '"' ? /[^"&<]+/y : /[^'&<]+/y;
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
          case Hc:
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
    return this.validateChars(n), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new zA(n)) : this.addText(n), !0;
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
    return this.validateChars(n), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new YA(n.trim())), !0;
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
    let s = Boolean(e.consumeStringFast("/>")), a = new KA(r, i);
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
    return Bi.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(Bi.isNameChar) : Hc;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, n = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let r = this.consumeName();
    if (r ? r.toLowerCase() === "xml" && (e.reset(n), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new Qm(r)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new Qm(r, i)), !0;
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
    let n = e.consumeMatchFn(Bi.isReferenceChar);
    e.consume() !== ";" && this.error("Unterminated reference (a reference must end with `;`)");
    let r;
    if (n[0] === "#") {
      let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
      isNaN(i) && this.error("Invalid character reference"), r = String.fromCodePoint(i), Bi.isXmlChar(r) || this.error("Character reference resolves to an invalid character");
    } else if (r = Bi.predefinedEntities[n], r === void 0) {
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
    return Boolean(this.scanner.consumeMatchFn(Bi.isWhitespace));
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
      Bi.isNotXmlChar(r) && (this.scanner.reset(-([...e].length - n)), this.error("Invalid character")), n += 1;
  }
}
var JA = ZA;
function QA(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const eD = JA, tD = c_, nD = f_, rD = h_, iD = Jh, sD = bs, aD = d_, oD = Kh;
function Di(t, e) {
  return new eD(t, e).document;
}
Di.XmlCdata = tD;
Di.XmlComment = nD;
Di.XmlDocument = rD;
Di.XmlElement = iD;
Di.XmlNode = sD;
Di.XmlProcessingInstruction = aD;
Di.XmlText = oD;
var lD = Di;
class uD extends Error {
  constructor(e) {
    super(e);
  }
}
function cD(t) {
  let e = null;
  try {
    e = lD(t);
  } catch (n) {
    throw new uD(n.message);
  }
  return e;
}
function Br(t) {
  return t.children[0];
}
function wu(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function xu(t) {
  return t.name || "";
}
function Ht(t, e, n) {
  const r = wu(e);
  function i(s, a) {
    return wu(xu(a)) === r && s.push(a), n && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
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
const tg = ["utf-8", "utf-16", "iso-8859-1"], ng = "utf-8";
function fD(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function hD(t, e) {
  const n = e ? fD(e) : null, r = n ? [n, ...tg] : tg;
  for (const i of r)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${ng}.`
  ), new TextDecoder(ng).decode(t);
}
const fl = /* @__PURE__ */ new Map();
function dD(t) {
  if (fl.has(t))
    return fl.get(t);
  const e = fetch(t);
  return e.finally(() => fl.delete(t)), fl.set(t, e), e;
}
function Qh(t) {
  return dD(t).catch(
    () => fetch(t, { method: "HEAD", mode: "no-cors" }).catch((e) => {
      throw new Vc(
        `Fetching the document failed either due to network errors or unreachable host, error is: ${e.message}`,
        0,
        !1
      );
    }).then(() => {
      throw new Vc(
        "The document could not be fetched due to CORS limitations",
        0,
        !0
      );
    })
  ).then(async (e) => {
    if (!e.ok) {
      const i = await e.text();
      throw new Vc(
        `Received an error with code ${e.status}: ${i}`,
        e.status,
        !1
      );
    }
    const n = await e.arrayBuffer(), r = e.headers.get("Content-Type");
    return hD(n, r);
  }).then((e) => cD(e));
}
function ed(t, e) {
  const n = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (n) {
    const o = n[1], l = ed(decodeURIComponent(o), e);
    return t.replace(o, encodeURIComponent(l));
  }
  const r = new URL(t), i = Object.keys(e), s = i.map((o) => o.toLowerCase()), a = [];
  for (const o of r.searchParams.keys())
    s.indexOf(o.toLowerCase()) > -1 && a.push(o);
  return a.map((o) => r.searchParams.delete(o)), i.forEach(
    (o) => r.searchParams.set(o, e[o] === !0 ? "" : e[o])
  ), r.toString();
}
let pD = 1e3 * 60 * 60;
function mD() {
  return pD;
}
const Ni = "caches" in self ? caches.open("ogc-client") : null;
async function gD(t, ...e) {
  if (!Ni)
    return;
  const n = "https://cache/" + e.join("/");
  await (await Ni).put(
    n,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + mD()).toString(10)
      }
    })
  );
}
async function yD(...t) {
  if (!Ni)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await Ni).match(e).then((r) => !!r && parseInt(r.headers.get("x-expiry")) > Date.now());
}
async function vD(...t) {
  if (!Ni)
    return null;
  const e = "https://cache/" + t.join("/"), r = await (await Ni).match(e);
  return r ? r.clone().json() : null;
}
const hl = /* @__PURE__ */ new Map();
async function _D(t, ...e) {
  if (await bD(), await yD(...e))
    return vD(...e);
  const n = e.join("#");
  if (hl.has(n))
    return hl.get(n);
  const r = t();
  r instanceof Promise && (r.then(() => hl.delete(n)), hl.set(n, r));
  const i = await r;
  return await gD(i, ...e), i;
}
async function bD() {
  if (!Ni)
    return;
  const t = await Ni, e = await t.keys();
  for (let n of e) {
    const r = await t.match(n);
    parseInt(r.headers.get("x-expiry")) <= Date.now() && await t.delete(n);
  }
}
function ED(t, e, n, r, i, s, a, o, l, u) {
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
  return ed(t, h);
}
class SD {
  constructor(e) {
    const n = ed(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = _D(
      () => PA(n),
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
const wD = [
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
function xD(t) {
  return wD.indexOf(Jf(t)) > -1;
}
function Jf(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function p_(t) {
  return Br(t).attributes.version;
}
function OD(t) {
  const e = p_(t), n = Me(
    Br(t),
    "Capability"
  );
  return Ht(n, "Layer").map(
    (r) => m_(r, e)
  );
}
function MD(t) {
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
function m_(t, e, n = [], r = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = Ht(t, s).map(ze), o = a.length > 0 ? a : n, l = Ht(t, "Style").map(
    TD
  ), u = l.length > 0 ? l : r;
  function f(p) {
    const m = gr(p, s);
    return (xD(m) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((b) => gr(p, b));
  }
  const c = Me(t, "Attribution"), h = c !== null ? ND(c) : i, d = Ht(t, "Layer").map(
    (p) => m_(p, e, o, u, h)
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
function TD(t) {
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
function ND(t) {
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
function ic(t) {
  return Br(t).attributes.version;
}
function g_(t) {
  const e = ic(t);
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
    ).map(xu);
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
function LD(t) {
  const e = ic(t), n = e.startsWith("1.0") ? "Service" : "ServiceIdentification", r = e.startsWith("1.0") ? "Name" : "ServiceType", i = Me(Br(t), n);
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
    outputFormats: g_(t)
  };
}
function CD(t) {
  const e = ic(t), n = g_(t), r = Me(
    Br(t),
    "FeatureTypeList"
  );
  return Ht(r, "FeatureType").map(
    (i) => PD(i, e, n)
  );
}
function PD(t, e, n) {
  const r = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${r}`;
  function s() {
    const u = Me(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => gr(u, f)).map(parseFloat);
  }
  function a() {
    const u = Me(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => Me(u, f)).map((f) => ze(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : Ht(t, `Other${r}`).map(ze).map(Jf), l = e.startsWith("1.0") ? [] : Ht(
    Me(t, "OutputFormats"),
    "Format"
  ).map(ze);
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    defaultCrs: Jf(
      ze(Me(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : n,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function AD(t, e, n) {
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
    return La(u).filter((f) => a(wu(xu(f)))).reduce((f, c) => {
      const h = wu(xu(c));
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
function DD(t) {
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
Xh(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => Qh(t).then((e) => ({
    info: MD(e),
    layers: OD(e),
    version: p_(e)
  }))
);
Xh(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => Qh(t).then((e) => ({
    info: LD(e),
    featureTypes: CD(e),
    version: ic(e)
  }))
);
Xh(
  "queryWfsFeatureTypeDetails",
  self,
  ({ url: t, serviceVersion: e, featureTypeFull: n }) => {
    const r = ED(
      t,
      e,
      n.name,
      void 0,
      void 0,
      Object.keys(n.properties)
    );
    return Qh(r).then((i) => ({
      props: DD(
        AD(i, n, e)
      )
    }));
  }
);
const kD = () => [
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
class ID {
  constructor(e) {
    st(this, "capabilitiesPromise");
    st(this, "serviceInfo");
    st(this, "layers");
    const n = new db();
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
class RD {
  async getRemoteEndpoint(e) {
    let n;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      n = await this.getWmtsEndpoint(e).isReady();
    }) || n;
  }
  getWmsEndpoint(e) {
    return new SD(ia.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new ID(ia.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(kD()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Pn.WMS) === 0 || e.indexOf(Pn.WMTS) === 0);
  }
}
const co = new RD(), $D = { class: "relative text-center" }, FD = ["placeholder", "value"], VD = {
  key: 0,
  class: "text-center"
}, jD = { class: "lux-label" }, GD = {
  key: 1,
  class: "text-center"
}, UD = { class: "lux-label" }, BD = {
  key: 2,
  class: "text-center"
}, WD = /* @__PURE__ */ P("div", { class: "fa fa-refresh fa-spin" }, null, -1), qD = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, HD = /* @__PURE__ */ fe({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Ze(), n = vt(), r = Xn(), i = nt([]), s = nt(), { remoteLayersOpen: a } = He(wt()), { setRemoteLayersOpen: o } = wt();
    let l = !1, u, f, c;
    vn(h);
    function h() {
      s.value = s.value ? Js.updateLayers(
        s.value,
        n.layers
      ) : void 0;
    }
    co.fetchRemoteWmsEndpoint().then((y) => {
      i.value = y.map(({ url: E, label: N }) => ({
        label: N,
        value: E
      }));
    });
    async function d(y) {
      l = !0, c = await co.getRemoteEndpoint(y).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = y, l = !1;
    }
    async function p() {
      const y = c, E = y == null ? void 0 : y.getLayers();
      if (E && E[0]) {
        const N = s_(
          E[0],
          f
        );
        s.value = Js.updateLayers(N, n.layers);
      }
    }
    async function m(y) {
      f = u = y, await d(f), p();
    }
    function g(y) {
      u = y.target.value;
    }
    async function b() {
      await d(u), p();
    }
    function _(y) {
      s.value = Js.toggleNode(
        y.id,
        s.value,
        "expanded"
      );
    }
    function S(y) {
      const { id: E, name: N } = y, w = c;
      if (y.checked === !0)
        n.removeLayers(E);
      else {
        const C = w == null ? void 0 : w.getLayerByName(N);
        if (C) {
          const A = r.initLayer(
            a_({
              id: E,
              url: ia.getProxyfiedUrl(f),
              remoteLayer: C
            })
          );
          n.addLayers(A);
        }
      }
    }
    return (y, E) => M(a) ? (D(), Ue(i_, {
      key: 0,
      title: M(e)("Add external data", { ns: "client" }),
      onClose: E[0] || (E[0] = (N) => M(o)(!1))
    }, {
      content: _i(() => {
        var N, w;
        return [
          P("div", $D, [
            ie(Vv, {
              class: "lux-remote-services-dropdown",
              options: i.value,
              placeholder: M(e)("Predefined wms", { ns: "client" }),
              onChange: m
            }, null, 8, ["options", "placeholder"]),
            P("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: M(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: M(f) || "",
              onChange: g
            }, null, 40, FD),
            P("button", {
              type: "button",
              class: "lux-btn",
              onClick: b
            }, oe(M(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !M(l) && M(c) ? (D(), G("div", VD, [
            P("span", jD, oe(M(e)("Description du service :", {
              ns: "client"
            })), 1),
            Ql(" " + oe((N = M(c).getServiceInfo()) == null ? void 0 : N.abstract), 1)
          ])) : F("v-if", !0),
          !M(l) && M(c) ? (D(), G("div", GD, [
            P("span", UD, oe(M(e)("Access constraints :", {
              ns: "client"
            })), 1),
            Ql(" " + oe((w = M(c).getServiceInfo()) == null ? void 0 : w.constraints), 1)
          ])) : F("v-if", !0),
          M(l) ? (D(), G("div", BD, [
            WD,
            P("span", null, oe(M(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : F("v-if", !0),
          M(l) ? F("v-if", !0) : (D(), G("div", qD, [
            s.value ? (D(), Ue(Zf, {
              key: 0,
              class: "block p-[10px] mb-[11px]",
              node: s.value,
              onToggleParent: _,
              onToggleLayer: S
            }, null, 8, ["node"])) : F("v-if", !0)
          ]))
        ];
      }),
      _: 1
    }, 8, ["title"])) : F("v-if", !0);
  }
}), zD = /* @__PURE__ */ me(HD, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/remote-layers/remote-layers.vue"]]);
function YD(t, e = "fr-FR") {
  const n = new Date(t);
  return new Intl.DateTimeFormat(e).format(n);
}
const XD = { class: "font-bold" }, KD = { class: "col-span-2" }, ZD = /* @__PURE__ */ fe({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (D(), G(Ge, null, [
      P("span", XD, oe(e.label), 1),
      P("span", KD, oe(e.value), 1)
    ], 64));
  }
}), Ea = /* @__PURE__ */ me(ZD, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-metadata/layer-metadata-item.vue"]]);
function JD(t) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[t.toLowerCase()];
}
function QD(t) {
  return new DOMParser().parseFromString(t, "text/html").body;
}
function ek(t) {
  const e = [];
  function n(r) {
    const i = r.split("|");
    i[3] === "WWW:LINK-1.0-http--link" && e.indexOf(i[2]) === -1 && e.push(i[2]);
  }
  return Array.isArray(t) ? t.forEach(n, t) : n(t), e;
}
function tk(t) {
  const n = (Array.isArray(t) ? t : [t]).filter((r) => r.split("|")[1] === "metadata");
  return {
    organisaton: n[0].split("|")[2],
    name: n[0].split("|")[5],
    unknown: n[0].split("|")[6],
    address: n[0].split("|")[7],
    email: n[0].split("|")[4]
  };
}
class y_ {
}
class nk extends y_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMS);
    const i = co.getWmsEndpoint(n);
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
const rk = new nk();
class ik extends y_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMTS);
    const i = co.getWmtsEndpoint(n);
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
const sk = new ik();
class ak {
  async getMetadata(e, n, r) {
    if (e === Pn.WMS)
      return rk.getMetadata(e, n, r);
    if (e === Pn.WMTS)
      return sk.getMetadata(e, n, r);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const ok = new ak();
class lk {
  constructor() {
    st(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    st(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    st(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, n) {
    const r = as(), i = r.findBgLayerById(+e) || r.findById(+e) || r.find3dLayerById(+e);
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
      return ok.getMetadata(
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
        link: ek(s.link),
        revisionDate: s.revisionDate,
        keyword: s.keyword,
        responsibleParty: s.responsibleParty ? tk(s.responsibleParty) : void 0,
        metadataLink: `${this.geonetworkBaseUrl}/${JD(
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
        return l ? QD(l) : void 0;
      }).catch(() => {
      });
    }
  }
}
const rg = new lk(), uk = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, ck = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, fk = { class: "font-bold" }, hk = { class: "col-span-2" }, dk = ["title"], pk = ["title"], mk = {
  key: 4,
  class: "col-span-3"
}, gk = { class: "font-bold" }, yk = { class: "col-span-2" }, vk = ["href"], _k = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, bk = { class: "font-bold" }, Ek = { class: "col-span-2" }, Sk = { key: 0 }, wk = { key: 1 }, xk = { key: 2 }, Ok = { key: 3 }, Mk = { key: 4 }, Tk = ["href"], Nk = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, Lk = { class: "font-bold" }, Ck = { class: "col-span-2" }, Pk = ["href"], Ak = {
  key: 9,
  class: "col-span-3"
}, Dk = { key: 10 }, kk = { class: "text-xl" }, Ik = {
  key: 11,
  class: "col-span-3"
}, zc = 220, Rk = /* @__PURE__ */ fe({
  __name: "layer-metadata",
  setup(t) {
    const e = Yh(), { metadataId: n } = He(e), { t: r, i18next: i } = Ze(), s = we(), a = we(!0);
    et(n, async (c) => {
      var h, d;
      s.value = c ? await rg.getLayerMetadata(c, i.language) : void 0, a.value = (((d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.length) || 0) < zc;
    }), _n(() => {
      i.on("languageChanged", async () => {
        n.value && (s.value = await rg.getLayerMetadata(
          n.value,
          i.language
        ));
      });
    });
    const o = de(
      () => {
        var c, h, d;
        return a.value ? (c = s.value) == null ? void 0 : c.description : (d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.slice(0, zc);
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
      const d = Sh("dompurify-html");
      return s.value ? (D(), Ue(i_, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: M(r)(`${s.value.title}`, { ns: "client" }),
        onClose: f
      }, {
        content: _i(() => {
          var p, m, g, b, _, S, y, E, N, w, C, A, T, k, I;
          return [
            P("div", uk, [
              s.value.name ? (D(), Ue(Ea, {
                key: 0,
                label: M(r)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.serviceDescription ? (D(), Ue(Ea, {
                key: 1,
                label: M(r)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.description ? (D(), G("div", ck, [
                P("span", fk, oe(M(r)("Description")), 1),
                P("span", hk, [
                  Kl(P("span", null, null, 512), [
                    [d, o.value]
                  ]),
                  a.value ? F("v-if", !0) : (D(), G("button", {
                    key: 0,
                    title: M(r)("Display full description", {
                      ns: "client"
                    }),
                    onClick: l,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, dk)),
                  a.value && (((p = o.value) == null ? void 0 : p.length) || 0) > zc ? (D(), G("button", {
                    key: 1,
                    title: M(r)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, pk)) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.legalConstraints ? (D(), Ue(Ea, {
                key: 3,
                label: M(r)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              ((m = s.value.link) == null ? void 0 : m.length) !== 0 ? (D(), G("div", mk, [
                (D(!0), G(Ge, null, An(s.value.link, (K) => (D(), G("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: K
                }, [
                  P("span", gk, oe(M(r)("Url vers la resource")), 1),
                  P("span", yk, [
                    P("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: K
                    }, oe(K), 9, vk)
                  ])
                ]))), 128))
              ])) : F("v-if", !0),
              s.value.revisionDate ? (D(), Ue(Ea, {
                key: 5,
                label: M(r)("Revision date"),
                value: M(YD)(s.value.revisionDate, M(i).language)
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.keyword ? (D(), Ue(Ea, {
                key: 6,
                label: M(r)("Keywords"),
                value: (g = s.value.keyword) == null ? void 0 : g.join(",")
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.responsibleParty ? (D(), G("div", _k, [
                P("div", bk, oe(M(r)("Contact")), 1),
                P("div", Ek, [
                  (b = s.value.responsibleParty) != null && b.organisaton ? (D(), G("p", Sk, oe((_ = s.value.responsibleParty) == null ? void 0 : _.organisaton), 1)) : F("v-if", !0),
                  (S = s.value.responsibleParty) != null && S.name ? (D(), G("p", wk, oe((y = s.value.responsibleParty) == null ? void 0 : y.name), 1)) : F("v-if", !0),
                  (E = s.value.responsibleParty) != null && E.unknown ? (D(), G("p", xk, oe((N = s.value.responsibleParty) == null ? void 0 : N.unknown), 1)) : F("v-if", !0),
                  (w = s.value.responsibleParty) != null && w.address ? (D(), G("p", Ok, oe((C = s.value.responsibleParty) == null ? void 0 : C.address), 1)) : F("v-if", !0),
                  (A = s.value.responsibleParty) != null && A.email ? (D(), G("p", Mk, [
                    P("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((T = s.value.responsibleParty) == null ? void 0 : T.email)
                    }, oe((k = s.value.responsibleParty) == null ? void 0 : k.email), 9, Tk)
                  ])) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.metadataLink ? (D(), G("div", Nk, [
                P("span", Lk, oe(M(r)("Link to the metadata")), 1),
                P("span", Ck, [
                  P("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, oe(M(r)("link")), 9, Pk)
                ])
              ])) : F("v-if", !0),
              s.value.isError ? (D(), G("div", Ak, oe(M(r)("The metadata is right now not available")), 1)) : F("v-if", !0),
              s.value.legendHtml ? (D(), G("div", Dk, [
                P("h4", kk, oe(M(r)("Legend")), 1),
                Kl(P("span", null, null, 512), [
                  [d, (I = s.value.legendHtml) == null ? void 0 : I.innerHTML]
                ])
              ])) : F("v-if", !0),
              s.value.hasLegend ? F("v-if", !0) : (D(), G("div", Ik, oe(M(r)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : F("v-if", !0);
    };
  }
}), $k = /* @__PURE__ */ me(Rk, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-metadata/layer-metadata.vue"]]), Fk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class Vk {
  bootstrap() {
    this.restore();
    let e;
    e = vn(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = wt(), { lang: n } = He(e);
    et(
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
const jk = new Vk(), Gk = /* @__PURE__ */ fe({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: n } = Ze(), { setLang: r } = wt(), { lang: i } = He(wt()), s = de(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: n(l),
        value: l,
        ariaLabel: n("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = n("Changer de langue");
    jk.bootstrap();
    function o(l) {
      e.changeLanguage(l), r(l);
    }
    return (l, u) => (D(), G("div", null, [
      ie(Vv, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: s.value,
        placeholder: M(a),
        modelValue: M(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => Ye(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), Uk = /* @__PURE__ */ me(Gk, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/nav-bars/language-selector.vue"]]);
class Bk {
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
const Wk = new Bk(), qk = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, Hk = /* @__PURE__ */ P("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ P("img", { src: Fk })
], -1), zk = /* @__PURE__ */ P("div", { class: "grow text-center" }, "search", -1), Yk = { class: "h-full flex" }, Xk = { class: "hidden lg:inline-block" }, Kk = { class: "border-l-[1px] border-stone-300 h-full" }, Zk = /* @__PURE__ */ fe({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Ze(), n = wt(), { layersOpen: r, myLayersTabOpen: i, themeGridOpen: s } = He(n), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = n, u = Zt(), { theme: f } = He(u);
    et(
      f,
      (h) => {
        h && Wk.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      r.value ? r.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var p, m;
      return D(), G("header", qk, [
        Hk,
        zk,
        P("div", null, [
          P("ul", Yk, [
            P("li", null, [
              P("button", {
                class: Ae(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(p = M(f)) == null ? void 0 : p.name}`]),
                onClick: c
              }, [
                P("span", Xk, oe(M(e)(`${(m = M(f)) == null ? void 0 : m.name}`)), 1)
              ], 2)
            ]),
            P("li", Kk, [
              ie(Uk, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), Jk = /* @__PURE__ */ me(Zk, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/header/header-bar.vue"]]), Qk = { class: "block text-[13px] sm:text-base uppercase" }, eI = /* @__PURE__ */ fe({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (D(), G("button", {
      class: Ae(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      P("span", {
        class: Ae(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      P("span", Qk, oe(e.label), 1)
    ], 2));
  }
}), Pr = /* @__PURE__ */ me(eI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/button-icon.vue"]]), tI = ["href"], nI = /* @__PURE__ */ fe({
  __name: "button-link",
  props: {
    label: { type: String, required: !0 },
    link: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (D(), G("a", {
      class: "h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary",
      href: `${e.link}`,
      target: "_blank"
    }, oe(n.$props.label), 9, tI));
  }
}), ri = /* @__PURE__ */ me(nI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/button-link.vue"]]), rI = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, iI = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, sI = { class: "flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, aI = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, oI = /* @__PURE__ */ fe({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: n } = Ze(), { setLayersOpen: r } = wt(), { layersOpen: i } = He(wt());
    return (s, a) => (D(), G("footer", rI, [
      F(" left buttons "),
      P("ul", iI, [
        P("li", null, [
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
        P("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        P("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        P("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        P("li", null, [
          ie(Pr, {
            class: "text-gray-300",
            label: M(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      F(" center buttons "),
      P("div", sI, [
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
      P("div", aI, [
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
}), lI = /* @__PURE__ */ me(oI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/footer/footer-bar.vue"]]), uI = { class: "flex flex-row flex-wrap pl-2.5" }, cI = ["onClick"], fI = { class: "text-2xl absolute top-5" }, hI = /* @__PURE__ */ fe({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const { t: e } = Ze(), n = t;
    return (r, i) => (D(), G("div", uI, [
      (D(!0), G(Ge, null, An(n.themes, (s) => (D(), G("button", {
        class: Ae(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => r.$emit("setTheme", s.name)
      }, [
        P("div", fI, oe(M(e)(`${s.name}`)), 1),
        P("div", {
          class: Ae(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, cI))), 128))
    ]));
  }
}), dI = /* @__PURE__ */ me(hI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/theme-selector/theme-grid.vue"]]), pI = ["aria-expanded"], mI = { class: "py-0.5" }, gI = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, yI = { class: "py-[3px]" }, vI = { class: "flex flex-row flex-wrap ml-1 w-12" }, _I = /* @__PURE__ */ fe({
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
      return D(), G("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": n.isOpen
      }, [
        P("span", mI, oe(M(e)("Theme")) + ": " + oe(M(e)(`${(a = n.currentTheme) == null ? void 0 : a.name}`)), 1),
        P("span", gI, [
          P("span", yI, oe(M(e)("Changer")), 1),
          P("span", vI, [
            (D(!0), G(Ge, null, An(r.value, (o) => (D(), G("div", {
              class: Ae(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, pI);
    };
  }
}), bI = /* @__PURE__ */ me(_I, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/theme-selector/theme-selector-button.vue"]]), EI = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, SI = /* @__PURE__ */ fe({
  __name: "theme-selector",
  setup(t) {
    const e = wt(), { setThemeGridOpen: n } = e, { themeGridOpen: r } = He(e), i = Zt(), s = as(), { theme: a, themes: o } = He(i), l = de(
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
    return (c, h) => (D(), G(Ge, null, [
      ie(bI, {
        onClick: u,
        themes: l.value,
        currentTheme: M(a),
        isOpen: M(r)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      M(r) ? (D(), G("div", EI, [
        ie(dI, {
          onSetTheme: f,
          themes: l.value
        }, null, 8, ["themes"])
      ])) : F("v-if", !0)
    ], 64));
  }
}), wI = /* @__PURE__ */ me(SI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/theme-selector/theme-selector.vue"]]);
function Qf(t, e = 0) {
  const { name: n, id: r, children: i, metadata: s } = t;
  return {
    name: n,
    id: r,
    depth: e,
    children: i == null ? void 0 : i.map((a) => Qf(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const xI = {
  key: 0,
  class: "mb-7"
}, OI = /* @__PURE__ */ fe({
  __name: "catalog-tree",
  setup(t) {
    const e = vt(), n = Zt(), r = Xn(), i = nt(), s = nt(), a = de(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = He(n);
    vn(l);
    function l() {
      var c;
      if (n.theme && e.layers) {
        const h = i.value && i.value.id === ((c = n.theme) == null ? void 0 : c.id) ? i.value : Qf(n.theme);
        i.value = Js.updateLayers(
          h,
          e.layers
        );
      }
    }
    vn(() => {
      if (o.value) {
        const c = s.value ? s.value : Qf(o.value);
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
    return (c, h) => (D(), G("div", null, [
      F(" 3D layers catalog, only displayed when 3D is active "),
      s.value && M(e).is3dActive ? (D(), G("div", xI, [
        (D(), Ue(Zf, {
          node: s.value,
          key: s.value.id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : F("v-if", !0),
      F(" Main catalog, displays by default and 3D terrain active "),
      i.value && a.value ? (D(), Ue(Zf, {
        node: i.value,
        key: i.value.id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : F("v-if", !0)
    ]));
  }
}), MI = /* @__PURE__ */ me(OI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/catalog/catalog-tree.vue"]]), TI = /* @__PURE__ */ fe({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = He(wt());
    return (n, r) => (D(), G(Ge, null, [
      ie(wI),
      M(e) === !1 ? (D(), Ue(MI, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : F("v-if", !0)
    ], 64));
  }
}), NI = /* @__PURE__ */ me(TI, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ig(t, e) {
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
    e % 2 ? ig(Object(n), !0).forEach(function(r) {
      LI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ig(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Vl(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vl = function(e) {
    return typeof e;
  } : Vl = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Vl(t);
}
function LI(t, e, n) {
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
function CI(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function PI(t, e) {
  if (t == null)
    return {};
  var n = CI(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
var AI = "1.15.2";
function Vr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Kr = Vr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Io = Vr(/Edge/i), sg = Vr(/firefox/i), Ha = Vr(/safari/i) && !Vr(/chrome/i) && !Vr(/android/i), v_ = Vr(/iP(ad|od|hone)/i), __ = Vr(/chrome/i) && Vr(/android/i), b_ = {
  capture: !1,
  passive: !1
};
function je(t, e, n) {
  t.addEventListener(e, n, !Kr && b_);
}
function Ie(t, e, n) {
  t.removeEventListener(e, n, !Kr && b_);
}
function Ou(t, e) {
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
function DI(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Bn(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Ou(t, e) : Ou(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = DI(t));
  }
  return null;
}
var ag = /\s+/g;
function fn(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(ag, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(ag, " ");
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
function E_(t, e, n) {
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
      var d = Qs(i || t), p = d && d.a, m = d && d.d;
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
function og(t, e, n) {
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
function td(t, e) {
  for (var n = t.lastElementChild; n && (n === ge.ghost || ye(n, "display") === "none" || e && !Ou(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function On(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ge.clone && (!e || Ou(t, e)) && n++;
  return n;
}
function lg(t) {
  var e = 0, n = 0, r = yr();
  if (t)
    do {
      var i = Qs(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, n += t.scrollTop * a;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function kI(t, e) {
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
function II(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Yc(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var za;
function S_(t, e) {
  return function() {
    if (!za) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), za = setTimeout(function() {
        za = void 0;
      }, e);
    }
  };
}
function RI() {
  clearTimeout(za), za = void 0;
}
function w_(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function x_(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function O_(t, e, n) {
  var r = {};
  return Array.from(t.children).forEach(function(i) {
    var s, a, o, l;
    if (!(!Bn(i, e.draggable, t, !1) || i.animated || i === n)) {
      var u = Et(i);
      r.left = Math.min((s = r.left) !== null && s !== void 0 ? s : 1 / 0, u.left), r.top = Math.min((a = r.top) !== null && a !== void 0 ? a : 1 / 0, u.top), r.right = Math.max((o = r.right) !== null && o !== void 0 ? o : -1 / 0, u.right), r.bottom = Math.max((l = r.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var mn = "Sortable" + new Date().getTime();
function $I() {
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
      t.splice(kI(t, {
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
        var l = 0, u = o.target, f = u.fromRect, c = Et(u), h = u.prevFromRect, d = u.prevToRect, p = o.rect, m = Qs(u, !0);
        m && (c.top -= m.f, c.left -= m.e), u.toRect = c, u.thisAnimationDuration && Yc(h, c) && !Yc(f, c) && (p.top - c.top) / (p.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = VI(p, h, d, i.options)), Yc(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, p, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
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
        r.animatingX = !!f, r.animatingY = !!c, ye(r, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = FI(r), ye(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ye(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ye(r, "transition", ""), ye(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function FI(t) {
  return t.offsetWidth;
}
function VI(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var Ls = [], Xc = {
  initializeByDefault: !0
}, Ro = {
  mount: function(e) {
    for (var n in Xc)
      Xc.hasOwnProperty(n) && !(n in e) && (e[n] = Xc[n]);
    Ls.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Ls.push(e);
  },
  pluginEvent: function(e, n, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var s = e + "Global";
    Ls.forEach(function(a) {
      !n[a.pluginName] || (n[a.pluginName][s] && n[a.pluginName][s](Sr({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](Sr({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, i) {
    Ls.forEach(function(o) {
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
    return Ls.forEach(function(i) {
      typeof i.eventProperties == "function" && Wr(r, i.eventProperties.call(n[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var i;
    return Ls.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[n] == "function" && (i = s.optionListeners[n].call(e[s.pluginName], r));
    }), i;
  }
};
function jI(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, p = t.extraEventProperties;
  if (e = e || n && n[mn], !!e) {
    var m, g = e.options, b = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Kr && !Io ? m = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(r, !0, !0)), m.to = a || n, m.from = o || n, m.item = i || n, m.clone = s, m.oldIndex = l, m.newIndex = u, m.oldDraggableIndex = f, m.newDraggableIndex = c, m.originalEvent = h, m.pullMode = d ? d.lastPutMode : void 0;
    var _ = Sr(Sr({}, p), Ro.getEventProperties(r, e));
    for (var S in _)
      m[S] = _[S];
    n && n.dispatchEvent(m), g[b] && g[b].call(e, m);
  }
}
var GI = ["evt"], sn = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, s = PI(r, GI);
  Ro.pluginEvent.bind(ge)(e, n, Sr({
    dragEl: Q,
    parentEl: ct,
    ghostEl: Ee,
    rootEl: tt,
    nextEl: Yi,
    lastDownEl: jl,
    cloneEl: at,
    cloneHidden: di,
    dragStarted: Ca,
    putSortable: At,
    activeSortable: ge.active,
    originalEvent: i,
    oldIndex: js,
    oldDraggableIndex: Ya,
    newIndex: hn,
    newDraggableIndex: ui,
    hideGhostForTarget: L_,
    unhideGhostForTarget: C_,
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
  jI(Sr({
    putSortable: At,
    cloneEl: at,
    targetEl: Q,
    rootEl: tt,
    oldIndex: js,
    oldDraggableIndex: Ya,
    newIndex: hn,
    newDraggableIndex: ui
  }, t));
}
var Q, ct, Ee, tt, Yi, jl, at, di, js, hn, Ya, ui, dl, At, Ds = !1, Mu = !1, Tu = [], Wi, jn, Kc, Zc, ug, cg, Ca, Cs, Xa, Ka = !1, pl = !1, Gl, jt, Jc = [], eh = !1, Nu = [], sc = typeof document < "u", ml = v_, fg = Io || Kr ? "cssFloat" : "float", UI = sc && !__ && !v_ && "draggable" in document.createElement("div"), M_ = function() {
  if (!!sc) {
    if (Kr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), T_ = function(e, n) {
  var r = ye(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = sa(e, 0, n), a = sa(e, 1, n), o = s && ye(s), l = a && ye(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Et(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && r[fg] === "none" || a && r[fg] === "none" && u + f > i) ? "vertical" : "horizontal";
}, BI = function(e, n, r) {
  var i = r ? e.left : e.top, s = r ? e.right : e.bottom, a = r ? e.width : e.height, o = r ? n.left : n.top, l = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, WI = function(e, n) {
  var r;
  return Tu.some(function(i) {
    var s = i[mn].options.emptyInsertThreshold;
    if (!(!s || td(i))) {
      var a = Et(i), o = e >= a.left - s && e <= a.right + s, l = n >= a.top - s && n <= a.bottom + s;
      if (o && l)
        return r = i;
    }
  }), r;
}, N_ = function(e) {
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
  (!i || Vl(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, e.group = r;
}, L_ = function() {
  !M_ && Ee && ye(Ee, "display", "none");
}, C_ = function() {
  !M_ && Ee && ye(Ee, "display", "");
};
sc && !__ && document.addEventListener("click", function(t) {
  if (Mu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Mu = !1, !1;
}, !0);
var qi = function(e) {
  if (Q) {
    e = e.touches ? e.touches[0] : e;
    var n = WI(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[mn]._onDragOver(r);
    }
  }
}, qI = function(e) {
  Q && Q.parentNode[mn]._isOutsideThisEl(e.target);
};
function ge(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Wr({}, e), t[mn] = this;
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
      return T_(t, this.options);
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
    supportPointer: ge.supportPointer !== !1 && "PointerEvent" in window && !Ha,
    emptyInsertThreshold: 5
  };
  Ro.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  N_(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : UI, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? je(t, "pointerdown", this._onTapStart) : (je(t, "mousedown", this._onTapStart), je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (je(t, "dragover", this), je(t, "dragenter", this)), Tu.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Wr(this, $I());
}
ge.prototype = {
  constructor: ge,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Cs = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Q) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var n = this, r = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (QI(r), !Q && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ha && l && l.tagName.toUpperCase() === "SELECT") && (l = Bn(l, i.draggable, r, !1), !(l && l.animated) && jl !== l)) {
        if (js = On(l), Ya = On(l, i.draggable), typeof f == "function") {
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
    if (r && !Q && r.parentNode === s) {
      var u = Et(r);
      if (tt = s, Q = r, ct = Q.parentNode, Yi = Q.nextSibling, jl = r, dl = a.group, ge.dragged = Q, Wi = {
        target: Q,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, ug = Wi.clientX - u.left, cg = Wi.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Q.style["will-change"] = "all", l = function() {
        if (sn("delayEnded", i, {
          evt: e
        }), ge.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !sg && i.nativeDraggable && (Q.draggable = !0), i._triggerDragStart(e, n), Xt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), fn(Q, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        E_(Q, f.trim(), Qc);
      }), je(o, "dragover", qi), je(o, "mousemove", qi), je(o, "touchmove", qi), je(o, "mouseup", i._onDrop), je(o, "touchend", i._onDrop), je(o, "touchcancel", i._onDrop), sg && this.nativeDraggable && (this.options.touchStartThreshold = 4, Q.draggable = !0), sn("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Io || Kr))) {
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
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Q && Qc(Q), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._disableDelayedDrag), Ie(e, "touchend", this._disableDelayedDrag), Ie(e, "touchcancel", this._disableDelayedDrag), Ie(e, "mousemove", this._delayedDragTouchMoveHandler), Ie(e, "touchmove", this._delayedDragTouchMoveHandler), Ie(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? je(document, "pointermove", this._onTouchMove) : n ? je(document, "touchmove", this._onTouchMove) : je(document, "mousemove", this._onTouchMove) : (je(Q, "dragend", this), je(tt, "dragstart", this._onDragStart));
    try {
      document.selection ? Ul(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Ds = !1, tt && Q) {
      sn("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && je(document, "dragover", qI);
      var r = this.options;
      !e && fn(Q, r.dragClass, !1), fn(Q, r.ghostClass, !0), ge.active = this, e && this._appendGhost(), Xt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (jn) {
      this._lastX = jn.clientX, this._lastY = jn.clientY, L_();
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
      C_();
    }
  },
  _onTouchMove: function(e) {
    if (Wi) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Ee && Qs(Ee, !0), o = Ee && a && a.a, l = Ee && a && a.d, u = ml && jt && lg(jt), f = (s.clientX - Wi.clientX + i.x) / (o || 1) + (u ? u[0] - Jc[0] : 0) / (o || 1), c = (s.clientY - Wi.clientY + i.y) / (l || 1) + (u ? u[1] - Jc[1] : 0) / (l || 1);
      if (!ge.active && !Ds) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (Ee) {
        a ? (a.e += f - (Kc || 0), a.f += c - (Zc || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ye(Ee, "webkitTransform", h), ye(Ee, "mozTransform", h), ye(Ee, "msTransform", h), ye(Ee, "transform", h), Kc = f, Zc = c, jn = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ee) {
      var e = this.options.fallbackOnBody ? document.body : tt, n = Et(Q, !0, ml, !0, e), r = this.options;
      if (ml) {
        for (jt = e; ye(jt, "position") === "static" && ye(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = yr()), n.top += jt.scrollTop, n.left += jt.scrollLeft) : jt = yr(), Jc = lg(jt);
      }
      Ee = Q.cloneNode(!0), fn(Ee, r.ghostClass, !1), fn(Ee, r.fallbackClass, !0), fn(Ee, r.dragClass, !0), ye(Ee, "transition", ""), ye(Ee, "transform", ""), ye(Ee, "box-sizing", "border-box"), ye(Ee, "margin", 0), ye(Ee, "top", n.top), ye(Ee, "left", n.left), ye(Ee, "width", n.width), ye(Ee, "height", n.height), ye(Ee, "opacity", "0.8"), ye(Ee, "position", ml ? "absolute" : "fixed"), ye(Ee, "zIndex", "100000"), ye(Ee, "pointerEvents", "none"), ge.ghost = Ee, e.appendChild(Ee), ye(Ee, "transform-origin", ug / parseInt(Ee.style.width) * 100 + "% " + cg / parseInt(Ee.style.height) * 100 + "%");
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
    sn("setupClone", this), ge.eventCanceled || (at = x_(Q), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), fn(at, this.options.chosenClass, !1), ge.clone = at), r.cloneId = Ul(function() {
      sn("clone", r), !ge.eventCanceled && (r.options.removeCloneOnHide || tt.insertBefore(at, Q), r._hideClone(), Xt({
        sortable: r,
        name: "clone"
      }));
    }), !n && fn(Q, s.dragClass, !0), n ? (Mu = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Ie(document, "mouseup", r._onDrop), Ie(document, "touchend", r._onDrop), Ie(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(r, i, Q)), je(document, "drop", r), ye(Q, "transform", "translateZ(0)")), Ds = !0, r._dragStartId = Ul(r._dragStarted.bind(r, n, e)), je(document, "selectstart", r), Ca = !0, Ha && ye(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var n = this.el, r = e.target, i, s, a, o = this.options, l = o.group, u = ge.active, f = dl === l, c = o.sort, h = At || u, d, p = this, m = !1;
    if (eh)
      return;
    function g(Z, Le) {
      sn(Z, p, Sr({
        evt: e,
        isOwner: f,
        axis: d ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: s,
        canSort: c,
        fromSortable: h,
        target: r,
        completed: _,
        onMove: function(dt, Rt) {
          return gl(tt, n, Q, i, dt, Et(dt), e, Rt);
        },
        changed: S
      }, Le));
    }
    function b() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState();
    }
    function _(Z) {
      return g("dragOverCompleted", {
        insertion: Z
      }), Z && (f ? u._hideClone() : u._showClone(p), p !== h && (fn(Q, At ? At.options.ghostClass : u.options.ghostClass, !1), fn(Q, o.ghostClass, !0)), At !== p && p !== ge.active ? At = p : p === ge.active && At && (At = null), h === p && (p._ignoreWhileAnimating = r), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (r === Q && !Q.animated || r === n && !r.animated) && (Cs = null), !o.dragoverBubble && !e.rootEl && r !== document && (Q.parentNode[mn]._isOutsideThisEl(e.target), !Z && qi(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function S() {
      hn = On(Q), ui = On(Q, o.draggable), Xt({
        sortable: p,
        name: "change",
        toEl: n,
        newIndex: hn,
        newDraggableIndex: ui,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = Bn(r, o.draggable, n, !0), g("dragOver"), ge.eventCanceled)
      return m;
    if (Q.contains(e.target) || r.animated && r.animatingX && r.animatingY || p._ignoreWhileAnimating === r)
      return _(!1);
    if (Mu = !1, u && !o.disabled && (f ? c || (a = ct !== tt) : At === this || (this.lastPutMode = dl.checkPull(this, u, Q, e)) && l.checkPut(this, u, Q, e))) {
      if (d = this._getDirection(e, r) === "vertical", i = Et(Q), g("dragOverValid"), ge.eventCanceled)
        return m;
      if (a)
        return ct = tt, b(), this._hideClone(), g("revert"), ge.eventCanceled || (Yi ? tt.insertBefore(Q, Yi) : tt.appendChild(Q)), _(!0);
      var y = td(n, o.draggable);
      if (!y || XI(e, d, this) && !y.animated) {
        if (y === Q)
          return _(!1);
        if (y && n === e.target && (r = y), r && (s = Et(r)), gl(tt, n, Q, i, r, s, e, !!r) !== !1)
          return b(), y && y.nextSibling ? n.insertBefore(Q, y.nextSibling) : n.appendChild(Q), ct = n, S(), _(!0);
      } else if (y && YI(e, d, this)) {
        var E = sa(n, 0, o, !0);
        if (E === Q)
          return _(!1);
        if (r = E, s = Et(r), gl(tt, n, Q, i, r, s, e, !1) !== !1)
          return b(), n.insertBefore(Q, E), ct = n, S(), _(!0);
      } else if (r.parentNode === n) {
        s = Et(r);
        var N = 0, w, C = Q.parentNode !== n, A = !BI(Q.animated && Q.toRect || i, r.animated && r.toRect || s, d), T = d ? "top" : "left", k = og(r, "top", "top") || og(Q, "top", "top"), I = k ? k.scrollTop : void 0;
        Cs !== r && (w = s[T], Ka = !1, pl = !A && o.invertSwap || C), N = KI(e, r, s, d, A ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, pl, Cs === r);
        var K;
        if (N !== 0) {
          var ve = On(Q);
          do
            ve -= N, K = ct.children[ve];
          while (K && (ye(K, "display") === "none" || K === Ee));
        }
        if (N === 0 || K === r)
          return _(!1);
        Cs = r, Xa = N;
        var L = r.nextElementSibling, $ = !1;
        $ = N === 1;
        var z = gl(tt, n, Q, i, r, s, e, $);
        if (z !== !1)
          return (z === 1 || z === -1) && ($ = z === 1), eh = !0, setTimeout(zI, 30), b(), $ && !L ? n.appendChild(Q) : r.parentNode.insertBefore(Q, $ ? L : r), k && w_(k, 0, I - k.scrollTop), ct = Q.parentNode, w !== void 0 && !pl && (Gl = Math.abs(w - Et(r)[T])), S(), _(!0);
      }
      if (n.contains(Q))
        return _(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ie(document, "mousemove", this._onTouchMove), Ie(document, "touchmove", this._onTouchMove), Ie(document, "pointermove", this._onTouchMove), Ie(document, "dragover", qi), Ie(document, "mousemove", qi), Ie(document, "touchmove", qi);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._onDrop), Ie(e, "touchend", this._onDrop), Ie(e, "pointerup", this._onDrop), Ie(e, "touchcancel", this._onDrop), Ie(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (hn = On(Q), ui = On(Q, r.draggable), sn("drop", this, {
      evt: e
    }), ct = Q && Q.parentNode, hn = On(Q), ui = On(Q, r.draggable), ge.eventCanceled) {
      this._nulling();
      return;
    }
    Ds = !1, pl = !1, Ka = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), th(this.cloneId), th(this._dragStartId), this.nativeDraggable && (Ie(document, "drop", this), Ie(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ha && ye(document.body, "user-select", ""), ye(Q, "transform", ""), e && (Ca && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), (tt === ct || At && At.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), Q && (this.nativeDraggable && Ie(Q, "dragend", this), Qc(Q), Q.style["will-change"] = "", Ca && !Ds && fn(Q, At ? At.options.ghostClass : this.options.ghostClass, !1), fn(Q, this.options.chosenClass, !1), Xt({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), tt !== ct ? (hn >= 0 && (Xt({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: tt,
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
      fromEl: tt,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), At && At.save()) : hn !== js && hn >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ge.active && ((hn == null || hn === -1) && (hn = js, ui = Ya), Xt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), tt = Q = ct = Ee = Yi = at = jl = di = Wi = jn = Ca = hn = ui = js = Ya = Cs = Xa = At = dl = ge.dragged = ge.ghost = ge.clone = ge.active = null, Nu.forEach(function(e) {
      e.checked = !0;
    }), Nu.length = Kc = Zc = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        Q && (this._onDragOver(e), HI(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], n, r = this.el.children, i = 0, s = r.length, a = this.options; i < s; i++)
      n = r[i], Bn(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || JI(n));
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
    var i = Ro.modifyOption(this, e, n);
    typeof i < "u" ? r[e] = i : r[e] = n, e === "group" && N_(r);
  },
  destroy: function() {
    sn("destroy", this);
    var e = this.el;
    e[mn] = null, Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart), Ie(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Tu.splice(Tu.indexOf(this.el), 1), this.el = e = null;
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
      Q.parentNode == tt && !this.options.group.revertClone ? tt.insertBefore(at, Q) : Yi ? tt.insertBefore(at, Yi) : tt.appendChild(at), this.options.group.revertClone && this.animate(Q, at), ye(at, "display", ""), di = !1;
    }
  }
};
function HI(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function gl(t, e, n, r, i, s, a, o) {
  var l, u = t[mn], f = u.options.onMove, c;
  return window.CustomEvent && !Kr && !Io ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = i || e, l.relatedRect = s || Et(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function Qc(t) {
  t.draggable = !1;
}
function zI() {
  eh = !1;
}
function YI(t, e, n) {
  var r = Et(sa(n.el, 0, n.options, !0)), i = O_(n.el, n.options, Ee), s = 10;
  return e ? t.clientX < i.left - s || t.clientY < r.top && t.clientX < r.right : t.clientY < i.top - s || t.clientY < r.bottom && t.clientX < r.left;
}
function XI(t, e, n) {
  var r = Et(td(n.el, n.options.draggable)), i = O_(n.el, n.options, Ee), s = 10;
  return e ? t.clientX > i.right + s || t.clientY > r.bottom && t.clientX > r.left : t.clientY > i.bottom + s || t.clientX > r.right && t.clientY > r.top;
}
function KI(t, e, n, r, i, s, a, o) {
  var l = r ? t.clientY : t.clientX, u = r ? n.height : n.width, f = r ? n.top : n.left, c = r ? n.bottom : n.right, h = !1;
  if (!a) {
    if (o && Gl < u * i) {
      if (!Ka && (Xa === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (Ka = !0), Ka)
        h = !0;
      else if (Xa === 1 ? l < f + Gl : l > c - Gl)
        return -Xa;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return ZI(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function ZI(t) {
  return On(Q) < On(t) ? 1 : -1;
}
function JI(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function QI(t) {
  Nu.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && Nu.push(r);
  }
}
function Ul(t) {
  return setTimeout(t, 0);
}
function th(t) {
  return clearTimeout(t);
}
sc && je(document, "touchmove", function(t) {
  (ge.active || Ds) && t.cancelable && t.preventDefault();
});
ge.utils = {
  on: je,
  off: Ie,
  css: ye,
  find: E_,
  is: function(e, n) {
    return !!Bn(e, n, e, !1);
  },
  extend: II,
  throttle: S_,
  closest: Bn,
  toggleClass: fn,
  clone: x_,
  index: On,
  nextTick: Ul,
  cancelNextTick: th,
  detectDirection: T_,
  getChild: sa
};
ge.get = function(t) {
  return t[mn];
};
ge.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ge.utils = Sr(Sr({}, ge.utils), r.utils)), Ro.mount(r);
  });
};
ge.create = function(t, e) {
  return new ge(t, e);
};
ge.version = AI;
var _t = [], Pa, nh, rh = !1, ef, tf, Lu, Aa;
function e3() {
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
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : (Ie(document, "pointermove", this._handleFallbackAutoScroll), Ie(document, "touchmove", this._handleFallbackAutoScroll), Ie(document, "mousemove", this._handleFallbackAutoScroll)), hg(), Bl(), RI();
    },
    nulling: function() {
      Lu = nh = Pa = rh = Aa = ef = tf = null, _t.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, s = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, o = document.elementFromPoint(s, a);
      if (Lu = n, r || this.options.forceAutoScrollFallback || Io || Kr || Ha) {
        nf(n, this.options, o, r);
        var l = gi(o, !0);
        rh && (!Aa || s !== ef || a !== tf) && (Aa && hg(), Aa = setInterval(function() {
          var u = gi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, Bl()), nf(n, i.options, u, r);
        }, 10), ef = s, tf = a);
      } else {
        if (!this.options.bubbleScroll || gi(o, !0) === yr()) {
          Bl();
          return;
        }
        nf(n, this.options, gi(o, !1), !1);
      }
    }
  }, Wr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Bl() {
  _t.forEach(function(t) {
    clearInterval(t.pid);
  }), _t = [];
}
function hg() {
  clearInterval(Aa);
}
var nf = S_(function(t, e, n, r) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = yr(), u = !1, f;
    nh !== n && (nh = n, Bl(), Pa = e.scroll, f = e.scrollFn, Pa === !0 && (Pa = gi(n, !0)));
    var c = 0, h = Pa;
    do {
      var d = h, p = Et(d), m = p.top, g = p.bottom, b = p.left, _ = p.right, S = p.width, y = p.height, E = void 0, N = void 0, w = d.scrollWidth, C = d.scrollHeight, A = ye(d), T = d.scrollLeft, k = d.scrollTop;
      d === l ? (E = S < w && (A.overflowX === "auto" || A.overflowX === "scroll" || A.overflowX === "visible"), N = y < C && (A.overflowY === "auto" || A.overflowY === "scroll" || A.overflowY === "visible")) : (E = S < w && (A.overflowX === "auto" || A.overflowX === "scroll"), N = y < C && (A.overflowY === "auto" || A.overflowY === "scroll"));
      var I = E && (Math.abs(_ - i) <= a && T + S < w) - (Math.abs(b - i) <= a && !!T), K = N && (Math.abs(g - s) <= a && k + y < C) - (Math.abs(m - s) <= a && !!k);
      if (!_t[c])
        for (var ve = 0; ve <= c; ve++)
          _t[ve] || (_t[ve] = {});
      (_t[c].vx != I || _t[c].vy != K || _t[c].el !== d) && (_t[c].el = d, _t[c].vx = I, _t[c].vy = K, clearInterval(_t[c].pid), (I != 0 || K != 0) && (u = !0, _t[c].pid = setInterval(function() {
        r && this.layer === 0 && ge.active._onTouchMove(Lu);
        var L = _t[this.layer].vy ? _t[this.layer].vy * o : 0, $ = _t[this.layer].vx ? _t[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ge.dragged.parentNode[mn], $, L, t, Lu, _t[this.layer].el) !== "continue" || w_(_t[this.layer].el, $, L);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = gi(h, !1)));
    rh = u;
  }
}, 30), P_ = function(e) {
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
function nd() {
}
nd.prototype = {
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
  drop: P_
};
Wr(nd, {
  pluginName: "revertOnSpill"
});
function rd() {
}
rd.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: P_
};
Wr(rd, {
  pluginName: "removeOnSpill"
});
ge.mount(new e3());
ge.mount(rd, nd);
const A_ = 0.5, t3 = !1, Cu = gs(
  "slider",
  () => {
    const t = vt(), e = we(A_), n = we(t3), r = de(
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
const n3 = { class: "lux-layer-manager-item mt-2.5" }, r3 = ["title"], i3 = { class: "flex-1 text-left cursor-default" }, s3 = ["aria-label", "title"], a3 = /* @__PURE__ */ fe({
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
    return (l, u) => (D(), G("div", n3, [
      P("button", {
        class: "fa fa-info w-3",
        title: a.value,
        onClick: u[0] || (u[0] = (...f) => M(s) && M(s)(...f))
      }, null, 8, r3),
      P("span", i3, oe(o()), 1),
      l.showEditButton ? (D(), G("button", {
        key: 0,
        class: "fa fa-pencil",
        "aria-label": M(i)("Open editor panel", { ns: "client" }),
        title: M(i)("Open editor panel", { ns: "client" }),
        onClick: u[1] || (u[1] = (f) => l.$emit("clickEdit"))
      }, null, 8, s3)) : F("v-if", !0)
    ]));
  }
}), o3 = /* @__PURE__ */ me(a3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-background.vue"]]), l3 = ["id"], u3 = ["aria-checked", "title"], c3 = ["id", "value", "aria-label"], f3 = ["aria-checked", "aria-label"], h3 = /* @__PURE__ */ fe({
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
    const n = t, r = e, { t: i } = Ze(), s = Xn(), a = de(
      () => i(s.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), o = nt(
      ((p = (d = n.layer) == null ? void 0 : d.opacity) != null ? p : 1) * 100
    ), l = nt(
      ((g = (m = n.layer) == null ? void 0 : m.previousOpacity) != null ? g : o.value) * 100
    );
    function u() {
      o.value === 0 ? o.value = l.value : (l.value = o.value, o.value = 0), h();
    }
    function f(b) {
      b.target && (o.value = parseInt(b.target.value), h());
    }
    function c() {
      r("clickToggleLayerComparator", n.layer);
    }
    function h() {
      r("changeOpacity", n.layer, o.value);
    }
    return (b, _) => (D(), G("div", {
      class: Ae(["lux-layer-manager-item-content", b.isOpen ? "h-6" : "h-0"]),
      id: `layer-manager-item-content-${b.layer.id}`
    }, [
      P("button", {
        class: Ae(["w-5 fa-solid", o.value === 0 ? "fa-eye-slash" : "fa-eye"]),
        role: "switch",
        "aria-checked": o.value === 0,
        title: M(i)("Toggle layer opacity for {{layerName}}", {
          layerName: a.value
        }),
        onClick: u
      }, null, 10, u3),
      P("input", {
        id: `${b.layer.id}-steps-range`,
        type: "range",
        min: "0",
        max: "100",
        value: o.value,
        step: "25",
        onChange: f,
        class: "m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer",
        "aria-label": M(i)("Change opacity for {{ layerName }}", { layerName: a.value })
      }, null, 40, c3),
      b.displayLayerComparatorOpen ? (D(), G("button", {
        key: 0,
        role: "switch",
        class: Ae(["fa ml-auto text-sm cursor-pointer", b.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": b.isLayerComparatorOpen,
        "aria-label": M(i)("Toggle layer comparator for {{ layerName }}", {
          layerName: a.value
        }),
        onClick: c
      }, null, 10, f3)) : F("v-if", !0)
    ], 10, l3));
  }
}), d3 = /* @__PURE__ */ me(h3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), p3 = ["min", "max", "value"], m3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = de(() => Fc(n.minDateAllowed)), s = de(() => Fc(n.maxDateAllowed));
    function a(o) {
      r("change", o.target.value);
    }
    return (o, l) => (D(), G("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: i.value,
      max: s.value,
      value: o.dateValue ? M(Fc)(o.dateValue) : "",
      onChange: a
    }, null, 40, p3));
  }
}), ih = /* @__PURE__ */ me(m3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), g3 = { class: "lux-time-slider w-full" }, y3 = ["for"], v3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const { t: e } = Ze(), n = t, r = nt(
      n.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return D(), G("div", g3, [
        P("div", null, [
          P("label", {
            for: `${i.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(M(e)("Date:")), 9, y3),
          ie(ih, {
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
}), _3 = /* @__PURE__ */ me(v3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), b3 = { class: "lux-time-slider w-full" }, E3 = ["for"], S3 = ["for"], w3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e, s = nt(
      r.layer.currentTimeMinValue
    ), a = nt(
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
      return D(), G("div", b3, [
        F(" Date START datepicker input "),
        P("div", null, [
          P("label", {
            for: `${u.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(M(n)("From:")), 9, E3),
          ie(ih, {
            id: `${u.layer.id}-time-slider-start`,
            "date-value": s.value,
            "min-date-allowed": (c = r.layer.time) == null ? void 0 : c.minValue,
            "max-date-allowed": (h = r.layer.time) == null ? void 0 : h.maxValue,
            onChange: o
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ]),
        F(" Date END datepicker input "),
        P("div", null, [
          P("label", {
            for: `${u.layer.id}-time-slider-end`,
            class: "lux-time-slider-label"
          }, oe(M(n)("To:")), 9, S3),
          ie(ih, {
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
}), x3 = /* @__PURE__ */ me(w3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), O3 = ["onKeydown", "aria-label", "title"], M3 = /* @__PURE__ */ fe({
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
      var S;
      return ((S = s.value) == null ? void 0 : S.offsetWidth) || 0;
    }), l = de(() => {
      var S;
      return ((S = a.value) == null ? void 0 : S.offsetWidth) || 40;
    }), u = we(n.selectedValue), f = de(() => o.value * u.value / 100 - l.value / 2), c = de(() => ({ left: `${f.value}px` }));
    Ci(() => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", b);
    }), et(
      () => n.selectedValue,
      (S) => {
        u.value = S;
      }
    );
    function h(S) {
      u.value = Math.max(Math.min(S, 100), 0), r("change", u.value, i.value);
    }
    function d() {
      h(u.value - 1);
    }
    function p() {
      h(u.value + 1);
    }
    function m() {
      i.value = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", b);
    }
    function g(S) {
      !i.value || h(_(S));
    }
    function b(S) {
      i.value = !1, h(_(S)), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", b);
    }
    function _(S) {
      var E, N;
      const y = (E = s.value) != null && E.offsetWidth ? (S.clientX - l.value * 2) * 100 / ((N = s.value) == null ? void 0 : N.offsetWidth) : 0;
      return Math.round(Math.max(Math.min(y, n.maxLimit), n.minLimit));
    }
    return (S, y) => (D(), G("div", {
      class: "w-full",
      role: "slider",
      ref_key: "elRefTrack",
      ref: s
    }, [
      P("button", {
        class: Ae(["lux-slidebar-thumb", i.value ? "dragging" : ""]),
        ref_key: "elRefThumb",
        ref: a,
        style: Li(c.value),
        onKeydown: [
          ar(sr(p, ["stop"]), ["space"]),
          ar(sr(p, ["stop"]), ["right"]),
          ar(sr(d, ["stop"]), ["left"]),
          ar(sr(d, ["stop"]), ["delete"])
        ],
        onMousedown: m,
        onMousemove: g,
        onMouseup: b,
        "aria-label": S.ariaLabel,
        title: S.ariaLabel
      }, null, 46, O3)
    ], 512));
  }
}), dg = /* @__PURE__ */ me(M3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/slider-range/slider-range-thumb.vue"]]), T3 = /* @__PURE__ */ fe({
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
    return (f, c) => (D(), G("div", {
      ref_key: "elRefFullTrack",
      ref: i,
      class: "lux-slidebar-track"
    }, [
      f.selectedMaxValue !== void 0 ? (D(), G("div", {
        key: 0,
        ref_key: "elRefSelectionTrack",
        ref: s,
        class: "lux-slidebar-track-selection",
        style: Li(l.value),
        onClick: u
      }, null, 4)) : F("v-if", !0),
      P("div", {
        class: "lux-slidebar-track-full",
        onClick: u
      })
    ], 512));
  }
}), N3 = /* @__PURE__ */ me(T3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/slider-range/slider-range-active-track.vue"]]), L3 = { class: "lux-slidebar-fake" }, C3 = /* @__PURE__ */ fe({
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
    return (u, f) => (D(), G("div", L3, [
      F(" Draggable Max thumb button "),
      s.value !== void 0 ? (D(), Ue(dg, {
        key: 0,
        ariaLabel: u.ariaLabelMax,
        minLimit: u.selectedMinValue,
        selectedValue: s.value,
        onChange: o
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : F("v-if", !0),
      F(" Draggable Min thumb button "),
      F(" put Min value after Max value, this is just for z-index grabbing "),
      ie(dg, {
        ariaLabel: u.ariaLabelMin,
        maxLimit: u.selectedMaxValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      F(" Selection highlight "),
      ie(N3, {
        selectedMinValue: u.selectedMinValue,
        selectedMaxValue: u.selectedMaxValue,
        onChange: l
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), pg = /* @__PURE__ */ me(C3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/common/slider-range/slider-range.vue"]]), P3 = { class: "lux-time-slider w-full" }, A3 = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, D3 = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, k3 = { class: "lux-time-displayed-dates" }, I3 = {
  key: 0,
  class: "lux-time-start-date grow"
}, R3 = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, $3 = /* @__PURE__ */ fe({
  __name: "layer-time-slider",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e, s = de(g), a = de(
      () => {
        var y, E;
        return (y = r.layer.time) != null && y.minValue ? new Date((E = r.layer.time) == null ? void 0 : E.minValue).getTime() : 0;
      }
    ), o = de(
      () => {
        var y, E;
        return (y = r.layer.time) != null && y.maxValue ? new Date((E = r.layer.time) == null ? void 0 : E.maxValue).getTime() : 0;
      }
    ), l = de(() => o.value - a.value), u = we(r.layer.currentTimeMaxValue), f = we(r.layer.currentTimeMinValue), c = de(
      () => f.value ? new Date(f.value).getTime() : void 0
    ), h = de(
      () => u.value ? new Date(u.value).getTime() : void 0
    ), d = de(
      () => m(c.value)
    ), p = de(
      () => m(h.value)
    );
    function m(y) {
      return y ? (y - a.value) / l.value * 100 : 0;
    }
    function g() {
      var k, I;
      const y = r.layer.time, E = [];
      if (!y)
        return;
      if (y.values)
        return y.values.map((K) => new Date(K).getTime());
      const N = new Date(y.minValue), w = new Date((k = y.maxValue) != null ? k : Date.now()), C = 1024, A = new Date(N.getTime()), T = (I = y.interval) != null ? I : W0;
      if (A.setFullYear(
        N.getFullYear() + C * T[0]
      ), A.setMonth(
        N.getMonth() + C * T[1],
        N.getDate() + C * T[2]
      ), A.setSeconds(N.getSeconds() + C * T[3]), A > w)
        for (let K = 0; ; K++) {
          const ve = new Date(N.getTime());
          if (ve.setFullYear(N.getFullYear() + K * T[0]), ve.setMonth(
            N.getMonth() + K * T[1],
            N.getDate() + K * T[2]
          ), ve.setSeconds(N.getSeconds() + K * T[3]), ve <= w)
            E.push(ve.getTime());
          else
            break;
        }
      return E;
    }
    function b(y) {
      var w;
      const E = y / 100 * (o.value - a.value) + a.value, N = TC(E, {
        minValue: a.value,
        maxValue: o.value,
        timeValueList: s.value,
        timeInterval: (w = r.layer.time) == null ? void 0 : w.interval
      });
      return zf(N);
    }
    function _(y, E) {
      const N = b(y);
      if (f.value = N, E) {
        const w = b(E);
        u.value = w;
      }
    }
    function S(y, E, N) {
      _(y, E), N || i("changeTime", f.value, u.value);
    }
    return (y, E) => {
      var N, w, C, A, T, k, I;
      return D(), G("div", P3, [
        F(" Slider LayerTimeMode.VALUE "),
        ((N = y.layer.time) == null ? void 0 : N.mode) === M(Ir).VALUE ? (D(), G("div", A3, [
          ie(pg, {
            ariaLabelMin: `${M(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: d.value,
            onChange: S
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : F("v-if", !0),
        F(" Slider LayerTimeMode.RANGE "),
        ((w = y.layer.time) == null ? void 0 : w.mode) === M(Ir).RANGE ? (D(), G("div", D3, [
          ie(pg, {
            ariaLabelMin: `${M(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${M(n)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: d.value,
            selectedMaxValue: p.value,
            onChange: S
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : F("v-if", !0),
        F(" Display localized time values "),
        P("div", k3, [
          F(" Display localized time values Min value "),
          ((C = y.layer.time) == null ? void 0 : C.mode) === M(Ir).RANGE || ((A = y.layer.time) == null ? void 0 : A.mode) === M(Ir).VALUE ? (D(), G("div", I3, [
            P("span", null, oe(f.value ? M(Fm)(f.value, (T = y.layer.time) == null ? void 0 : T.resolution) : "-"), 1)
          ])) : F("v-if", !0),
          F(" Display localized time values Max value "),
          ((k = y.layer.time) == null ? void 0 : k.mode) === M(Ir).RANGE ? (D(), G("div", R3, [
            P("span", null, oe(u.value ? M(Fm)(u.value, (I = y.layer.time) == null ? void 0 : I.resolution) : "-"), 1)
          ])) : F("v-if", !0)
        ])
      ]);
    };
  }
}), F3 = /* @__PURE__ */ me($3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), V3 = /* @__PURE__ */ fe({
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
      return D(), G(Ge, null, [
        F(" Layer time: slider widget "),
        ((a = i.layer.time) == null ? void 0 : a.widget) === M(Il).SLIDER ? (D(), Ue(F3, {
          key: 0,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(" Layer time: datepicker VALUE (one date) widget "),
        ((o = i.layer.time) == null ? void 0 : o.widget) === M(Il).DATEPICKER && ((l = i.layer.time) == null ? void 0 : l.mode) === M(Ir).VALUE ? (D(), Ue(_3, {
          key: 1,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((u = i.layer.time) == null ? void 0 : u.widget) === M(Il).DATEPICKER && ((f = i.layer.time) == null ? void 0 : f.mode) === M(Ir).RANGE ? (D(), Ue(x3, {
          key: 2,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0)
      ], 64);
    };
  }
}), j3 = /* @__PURE__ */ me(V3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time.vue"]]), G3 = { class: "lux-layer-manager-item relative" }, U3 = { class: "w-full flex flex-nowrap items-start gap-x-2" }, B3 = ["title"], W3 = ["aria-label", "title"], q3 = ["aria-expanded", "aria-controls", "data-cy"], H3 = { class: "grow" }, z3 = ["title", "aria-label"], Y3 = /* @__PURE__ */ fe({
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
    return (h, d) => (D(), G("div", G3, [
      P("div", U3, [
        P("button", {
          class: Ae(["fa-solid fa-bars cursor-move mt-1", h.dragHandleClassName]),
          title: l.value
        }, null, 10, B3),
        P("button", {
          class: "fa-solid fa-info mt-1",
          "aria-label": u.value,
          title: u.value,
          onClick: d[0] || (d[0] = (...p) => M(s) && M(s)(...p))
        }, null, 8, W3),
        P("button", {
          "aria-expanded": h.isOpen,
          "aria-controls": `layer-manager-item-content-${h.layer.id}`,
          "data-cy": `myLayerItemLabel-${h.layer.id}`,
          class: Ae([h.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: d[1] || (d[1] = (p) => h.$emit("clickToggle", h.layer))
        }, [
          P("span", H3, oe(o.value), 1),
          h.is3d ? F("v-if", !0) : (D(), G("span", {
            key: 0,
            class: Ae(["w-3.5 fa-solid", h.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, q3),
        P("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: f.value,
          "aria-label": f.value,
          onClick: d[2] || (d[2] = (p) => h.$emit("clickRemove", h.layer))
        }, null, 8, z3)
      ]),
      F(" Layer item sub content (opacity and toggle comparator) "),
      h.is3d ? F("v-if", !0) : (D(), Ue(d3, {
        key: 0,
        layer: h.layer,
        isOpen: h.isOpen,
        isLayerComparatorOpen: h.isLayerComparatorOpen,
        displayLayerComparatorOpen: h.displayLayerComparatorOpen,
        onClickToggleLayerComparator: d[3] || (d[3] = (p) => h.$emit("clickToggleLayerComparator", p)),
        onChangeOpacity: d[4] || (d[4] = (p, m) => h.$emit("changeOpacity", p, m))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      F(" Layer time: slider OR datepicker widgets "),
      h.layer.time ? (D(), Ue(j3, {
        key: 1,
        layer: h.layer,
        onChangeTime: c
      }, null, 8, ["layer"])) : F("v-if", !0)
    ]));
  }
}), mg = /* @__PURE__ */ me(Y3, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item.vue"]]), X3 = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, K3 = ["id"], Z3 = { class: "sortable-layers" }, J3 = ["id"], Q3 = { class: "flex flex-row justify-center space-x-1 my-2" }, rf = "drag-handle", eR = /* @__PURE__ */ fe({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), { setMetadataId: r } = Yh(), i = vt(), s = wt(), a = vs(), o = Cu(), { bgLayer: l } = He(i), { sliderActive: u } = He(o), f = de(() => [...i.layers].reverse()), c = de(() => [...i.layers3d].reverse()), h = nt(), d = de(
      () => a.isLayerStyleEditable(l.value)
    ), p = e, { setRemoteLayersOpen: m } = wt();
    _n(() => {
      const C = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${rf}`,
        forceFallback: IC
      }, A = document.querySelector(".sortable-layers"), T = document.querySelector(".sortable-layers-3d");
      A && ge.create(A, {
        ...C,
        onSort: g
      }), T && ge.create(T, {
        ...C,
        onSort: b
      });
    });
    function g(C, A) {
      const T = [...C.to.children].map((k) => Number(k.id)).reverse();
      i.reorderLayers(T, A);
    }
    function b(C) {
      g(C, !0);
    }
    function _(C, A) {
      i.setLayerOpacity(C.id, A / 100);
    }
    function S(C, A, T) {
      i.setLayerTime(C.id, A, T);
    }
    function y(C) {
      i.removeLayers(C.id);
    }
    function E(C) {
      h.value = h.value !== C.id ? C.id : void 0;
    }
    function N() {
      s.openStyleEditorPanel();
    }
    function w() {
      o.toggleSlider();
    }
    return (C, A) => (D(), G("div", null, [
      c.value.length > 0 ? (D(), G("ul", X3, [
        (D(!0), G(Ge, null, An(c.value, (T, k) => (D(), G("li", {
          key: T.id,
          id: T.id
        }, [
          ie(mg, {
            is3d: !0,
            dragHandleClassName: rf,
            layer: T,
            isOpen: h.value === T.id,
            isLayerComparatorOpen: M(u),
            displayLayerComparatorOpen: k === 0,
            onClickRemove: y,
            onClickToggle: E,
            onClickToggleLayerComparator: w,
            onClickInfo: (I) => M(r)(T.id),
            onChangeOpacity: _,
            onChangeTime: (I, K) => S(T, I, K)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, K3))), 128))
      ])) : F("v-if", !0),
      P("ul", Z3, [
        (D(!0), G(Ge, null, An(f.value, (T, k) => (D(), G("li", {
          key: T.id,
          id: T.id
        }, [
          ie(mg, {
            is3d: !1,
            dragHandleClassName: rf,
            layer: T,
            isOpen: h.value === T.id,
            isLayerComparatorOpen: M(u),
            displayLayerComparatorOpen: k === 0,
            onClickRemove: y,
            onClickToggle: E,
            onClickToggleLayerComparator: w,
            onClickInfo: (I) => M(r)(T.id),
            onChangeOpacity: _,
            onChangeTime: (I, K) => S(T, I, K)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, J3))), 128))
      ]),
      ie(o3, {
        layer: M(l) || M(Su),
        showEditButton: d.value,
        onClickInfo: A[0] || (A[0] = () => M(l) && M(r)(M(l).id)),
        onClickEdit: N
      }, null, 8, ["layer", "showEditButton"]),
      P("div", Q3, [
        P("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: A[1] || (A[1] = (T) => p("displayCatalog"))
        }, oe(M(n)("+ Add layers", { ns: "client" })), 1),
        P("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: A[2] || (A[2] = (T) => M(m)(!0))
        }, oe(M(n)("+ Add external Wms", { ns: "client" })), 1)
      ])
    ]));
  }
}), tR = /* @__PURE__ */ me(eR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-manager/layer-manager.vue"]]), nR = { class: "flex flex-col h-full pt-1.5" }, rR = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, iR = ["aria-label"], sR = { class: "flex flex-row gap-2 h-10 text-2xl" }, aR = ["aria-expanded"], oR = { key: 0 }, lR = ["aria-expanded"], uR = { class: "relative grow p-2.5 bg-primary overflow-auto" }, cR = /* @__PURE__ */ fe({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Ze(), n = wt(), { setLayersOpen: r } = n, { myLayersTabOpen: i } = He(n), { layers: s } = He(vt());
    function a() {
      n.setMyLayersTabOpen(!0);
    }
    function o() {
      n.setMyLayersTabOpen(!1);
    }
    return (l, u) => (D(), G("div", nR, [
      F(" Panel title and close button "),
      P("div", rR, [
        P("h1", null, oe(M(e)("layers", { ns: "client" })), 1),
        P("span", null, [
          P("button", {
            onClick: u[0] || (u[0] = () => M(r)(!1)),
            "aria-label": M(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, iR)
        ])
      ]),
      F(" My Layers and Catalog tab labels "),
      P("div", sR, [
        P("button", {
          onClick: a,
          class: Ae(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", M(i) ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": M(i)
        }, [
          Ql(oe(M(e)("my_layers", { ns: "client" })) + " ", 1),
          M(s).length ? (D(), G("span", oR, "(" + oe(M(s).length) + ")", 1)) : F("v-if", !0)
        ], 10, aR),
        P("button", {
          onClick: o,
          class: Ae(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", M(i) ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !M(i)
        }, oe(M(e)("Catalog", { ns: "client" })), 11, lR)
      ]),
      F(" Panel content (MyLayers and Catalog) "),
      P("div", uR, [
        M(i) ? (D(), Ue(tR, {
          key: 0,
          onDisplayCatalog: o
        })) : F("v-if", !0),
        M(i) ? F("v-if", !0) : (D(), Ue(NI, { key: 1 }))
      ])
    ]));
  }
}), fR = /* @__PURE__ */ me(cR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/layer-panel/layer-panel.vue"]]);
class hR {
  bootstrap() {
    let e;
    e = vn(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = Cu();
    et(
      [() => e.sliderActive, () => e.sliderRatio],
      ([n, r], [i]) => {
        n !== i && Ne.setValue(Xf, n), Ne.setValue(
          Kf,
          r
        );
      }
    );
  }
  restore() {
    const e = Ne.getValue(Xf, zh), n = Ne.getValue(Kf, Ks), { toggleSlider: r, setRatio: i } = Cu();
    typeof e < "u" && e !== null && (r(e), typeof n !== void 0 && n !== null && i(n != null ? n : A_));
  }
}
const dR = new hR(), pR = ["onKeydown"], mR = /* @__PURE__ */ P("span", { class: "lux-slider-line" }, null, -1), gR = /* @__PURE__ */ P("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ P("span"),
  /* @__PURE__ */ P("span")
], -1), yR = {
  key: 0,
  class: "lux-slider-layer-label"
}, vR = /* @__PURE__ */ P("i", { class: "fa fa-arrow-left mr-2" }, null, -1), gg = 30, _R = /* @__PURE__ */ fe({
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
      u(g + gg);
    }
    function p() {
      const g = r.containerOffset + a.value.offsetLeft;
      u(g - gg);
    }
    function m() {
      i("escSplitBar");
    }
    return _n(() => {
      var g;
      (g = a.value) == null || g.focus({ focusVisible: !0 });
    }), Ci(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (g, b) => (D(), G("button", {
      ref_key: "sliderElement",
      ref: a,
      onMousedown: f,
      onMousemove: c,
      onMouseup: h,
      onKeydown: [
        ar(sr(d, ["stop"]), ["space"]),
        ar(sr(d, ["stop"]), ["right"]),
        ar(sr(p, ["stop"]), ["left"]),
        ar(sr(p, ["stop"]), ["delete"]),
        ar(sr(m, ["stop"]), ["esc"])
      ],
      class: "left-[20px] absolute h-full w-[32px] block",
      style: Li(o.value),
      role: "seperator",
      "aria-controls": "map-container"
    }, [
      mR,
      gR,
      g.sliderTopLayer ? (D(), G("span", yR, [
        vR,
        P("span", null, oe(M(s)(g.sliderTopLayer.name)), 1)
      ])) : F("v-if", !0)
    ], 44, pR));
  }
}), bR = /* @__PURE__ */ me(_R, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/slider/splitter-element.vue"]]), ER = /* @__PURE__ */ fe({
  __name: "slider-comparator",
  setup(t) {
    const e = Cu(), n = n_(), r = Fr().olMap, i = we(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = He(e), l = de(
      () => {
        var _, S;
        return ((S = (_ = i.value) == null ? void 0 : _.sliderElement) == null ? void 0 : S.offsetWidth) || 0;
      }
    ), u = function() {
      var S, y, E;
      let _ = (E = (y = (S = r.value) == null ? void 0 : S.getViewport()) == null ? void 0 : y.parentElement) == null ? void 0 : E.offsetLeft;
      return (_ === void 0 || _ === 0) && (_ = d == null ? void 0 : d.offsetLeft), _ !== void 0 ? _ : 0;
    }, f = de(() => {
      var _, S;
      return r.value && i.value ? a.value * r.value.getSize()[0] - ((S = (_ = i.value) == null ? void 0 : _.sliderElement) == null ? void 0 : S.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    dR.bootstrap(), et([o, s], ([_, S], [y]) => {
      var E;
      _ && S ? (_ !== y && m(), p()) : m(), (E = r.value) == null || E.render();
    }), et(f, () => {
      var _;
      (_ = r.value) == null || _.render();
    });
    function p() {
      const _ = n.getLayerFromCache(o.value);
      !_ || (c = _.on(
        vd.PRERENDER,
        function(S) {
          var k;
          const y = S.context, E = (k = r.value) == null ? void 0 : k.getSize(), N = f.value + l.value / 2, w = Vo(S, [0, 0]), C = Vo(S, [N, 0]), A = Vo(S, [0, E[1]]), T = Vo(S, [N, E[1]]);
          y.save(), y.beginPath(), y.moveTo(w[0], w[1]), y.lineTo(A[0], A[1]), y.lineTo(T[0], T[1]), y.lineTo(C[0], C[1]), y.closePath(), y.clip();
        }
      ), h = _.on(
        vd.POSTRENDER,
        function(S) {
          S.context.restore();
        }
      ));
    }
    function m() {
      pb([c, h]);
    }
    function g(_) {
      var E;
      const S = (E = r.value) == null ? void 0 : E.getSize(), y = (_ - u()) / S[0];
      e.setRatio(y);
    }
    function b() {
      e.toggleSlider();
    }
    return _n(() => {
      var _, S;
      d = (S = (_ = r.value) == null ? void 0 : _.getTargetElement()) == null ? void 0 : S.closest(".map-wrapper");
    }), Ci(() => {
      m();
    }), (_, S) => M(o) && M(s) ? (D(), Ue(bR, {
      key: 0,
      ref_key: "splitterElement",
      ref: i,
      sliderActive: M(s),
      sliderRatio: M(a),
      sliderTopLayer: M(o),
      sliderOffset: f.value,
      containerOffset: u(),
      onMoveSplitBar: g,
      onEscSplitBar: b
    }, null, 8, ["sliderActive", "sliderRatio", "sliderTopLayer", "sliderOffset", "containerOffset"])) : F("v-if", !0);
  }
}), SR = /* @__PURE__ */ me(ER, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/slider/slider-comparator.vue"]]), yl = "-", sf = ",", yg = "--";
class wR {
  constructor() {
    st(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, sf));
  }
  layerTimesToStrings(e) {
    return e ? e.split(yg) : [];
  }
  layerIdsToLayers(e) {
    const n = as(), r = Xn();
    return (e ? e.split(yl) : []).map((s) => {
      const a = co.isRemoteLayer(s) ? MA(s) : n.findById(parseInt(s, 10));
      return a ? r.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const n = as(), r = Xn();
    return (e ? e.split(sf) : []).map((s) => {
      const a = n.findByName(s);
      return a ? r.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, n = yl) {
    return DC(e, n);
  }
  layersVisibilitiesToBooleansV2(e) {
    return kC(e, sf);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((n) => n.id).join(yl)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = n.opacity) != null ? r : 1;
    }).join(yl)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = Xn().getLayerCurrentTime(n)) != null ? r : "";
    }).join(yg)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const n = as();
    return e ? n.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || Su.name;
  }
}
const pn = new wR(), xR = "basemap_2015_global", OR = "orthogr_2013_global", MR = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class TR {
  bootstrap() {
    const e = Zt();
    let n;
    n = vn(() => {
      e.bgLayers.length > 0 && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = vt(), { bgLayer: n } = He(e);
    et(
      n,
      (r, i) => {
        i !== r && Ne.setValue(
          Bm,
          r,
          pn.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = r_(), n = this.getBgLayerFromStorage();
    e(n);
  }
  getBgLayerFromStorage() {
    const e = Ne.getInitialVersion(), n = Ne.getValue(Bm);
    return n ? e === 2 ? this.getBgLayerFromStorageV2(n) : pn.bgLayerNameToBgLayer(n) : pn.bgLayerNameToBgLayer(xR);
  }
  getBgLayerFromStorageV2(e) {
    const n = Ne.getValue(
      z0,
      Ks
    );
    let r = "";
    return e ? r = MR[e] : n === 0 && (r = OR), pn.bgLayerNameToBgLayer(r);
  }
}
const NR = new TR();
class LR {
  bootstrap() {
    const e = Zt();
    let n;
    n = vn(() => {
      e.themes && (this.restore(), this.persist(), n && n());
    });
  }
  persist() {
    const e = vt(), { layers: n } = He(e);
    et(
      n,
      (r, i) => {
        i !== r && (Ne.setValue(
          Um,
          r,
          pn.layersToLayerIds
        ), Ne.setValue(
          Wm,
          r,
          pn.layersToLayerOpacities
        ), Ne.setValue(
          qm,
          r,
          pn.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getInitialVersion(), n = vt(), r = Ne.getValue(
      Um,
      e === 2 ? pn.layerNamesToLayersV2 : pn.layerIdsToLayers
    );
    this.restoreLayersOpacities(r, e), this.restoreLayersTimes(r), e === 2 && (Ne.removeItem(z0), Ne.removeItem(GC), Ne.removeItem(Xm), Ne.removeItem(Km)), n.addLayers(...(r == null ? void 0 : r.filter((i) => i)) || []);
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
      qm,
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
      Wm,
      pn.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Ne.getValue(
      Xm,
      pn.layersOpacitiesToNumbersV2
    ), n = Ne.getValue(
      Km,
      pn.layersVisibilitiesToBooleansV2
    );
    return e.map((r, i) => n[i] ? r : 0);
  }
}
const CR = new LR();
class PR {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const AR = new PR();
class DR {
  bootstrap() {
    this.restore();
    let e;
    e = vn(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = Zt();
    et(
      () => e.theme,
      (n, r) => {
        r !== n && n && Ne.setValue(
          lo,
          n,
          AR.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(lo);
    if (e) {
      const { setTheme: n } = Zt();
      n(e);
    }
  }
}
const kR = new DR();
class IR {
  bootstrapLayersOpen() {
    this.restoreLayersOpen();
    let e;
    e = vn(() => {
      this.persistLayersOpen(), e && e();
    });
  }
  persistLayersOpen() {
    const e = wt(), { layersOpen: n } = He(e);
    et(
      n,
      (r, i) => {
        i !== r && Ne.setValue(_u, r);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Ne.getValue(_u) !== "false", { setLayersOpen: n } = wt();
    n(e);
  }
}
const RR = new IR();
class $R {
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
    const e = Ne.getValue(FC);
    wt().setMapId(e);
  }
}
const FR = new $R(), VR = /* @__PURE__ */ fe({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (D(!0), G(Ge, null, An(e.colors, (i, s) => (D(), G("span", {
      key: `${n.styleName}-${s}`,
      class: "grow m-px",
      style: Li(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), jR = /* @__PURE__ */ me(VR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/simple-style-item.vue"]]), GR = { class: "text-white border-2 p-[10px] m-[10px]" }, UR = { class: "text-center mb-3" }, BR = ["title"], WR = { class: "text-white" }, qR = ["title", "onClick"], HR = { class: "flex" }, zR = /* @__PURE__ */ fe({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Ze(), n = mr(), r = vs(), { bgStyle: i } = He(n), s = Ur().simple_styles.road, a = we(s);
    et(
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
    return (l, u) => (D(), G("div", GR, [
      F(" TODO: create clean container for simple and advanced style editors "),
      P("h5", UR, oe(M(e)("Select a style", { ns: "client" })), 1),
      (D(!0), G(Ge, null, An(a.value, (f) => (D(), G("div", {
        key: f.unlocalized_label,
        title: M(e)(f.unlocalized_label, { ns: "client" }),
        class: Ae(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        P("span", WR, oe(M(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        P("button", {
          title: M(e)("Select style: {{styleName}}", {
            styleName: M(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          P("span", HR, [
            ie(jR, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, qR)
      ], 10, BR))), 128))
    ]));
  }
}), YR = /* @__PURE__ */ me(zR, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/simple-style-selector.vue"]]);
function XR(t) {
  const e = KR(t);
  return !e || !e.medium_style_class ? [] : Ur().medium_default_styles[e.medium_style_class];
}
function KR(t) {
  return Ur().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const ZR = { class: "flex w-full items-center" }, JR = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, QR = { class: "grow" }, e4 = ["value"], t4 = ["checked", "aria-label"], n4 = /* @__PURE__ */ fe({
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
    return (o, l) => (D(), G("div", ZR, [
      P("label", JR, oe(M(n)(o.style.label)), 1),
      P("div", QR, [
        o.colorEditable && r.style.color ? (D(), G("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: r.style.color,
          onInput: s
        }, null, 40, e4)) : F("v-if", !0)
      ]),
      P("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: r.style.visible,
        onChange: a,
        "aria-label": M(n)("Show or hide {{ thematicName }}", {
          thematicName: r.style.label
        })
      }, null, 40, t4)
    ]));
  }
}), r4 = /* @__PURE__ */ me(n4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/medium-style-item.vue"]]), i4 = { class: "text-white border-2 p-[10px] m-[10px]" }, s4 = { class: "text-center mb-3" }, a4 = /* @__PURE__ */ fe({
  __name: "medium-style-selector",
  props: {
    layer: { type: Object, required: !0 }
  },
  setup(t) {
    const e = ["basemap_2015_global"], n = mr(), { bgStyle: r } = He(n), { t: i } = Ze(), s = t, a = de(
      () => e.includes(s.layer.name)
    ), o = de(
      () => r.value || XR(s.layer)
    );
    function l(u, f) {
      r.value = o.value.map(
        (c, h) => h === u ? f : c
      ), n.disableExpertStyle();
    }
    return (u, f) => (D(), G("div", i4, [
      P("h5", s4, oe(a.value ? M(i)("Select a colour for every theme") : M(i)("Activate categories")), 1),
      (D(!0), G(Ge, null, An(o.value, (c, h) => (D(), Ue(r4, {
        key: c.label,
        style: Li(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: a.value
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), o4 = /* @__PURE__ */ me(a4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/medium-style-selector.vue"]]);
var k_ = { exports: {} };
(function(t, e) {
  (function(n, r) {
    r();
  })(or, function() {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof or == "object" && or.global === or ? or : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = a.saveAs || (typeof window != "object" || window !== a ? function() {
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
        var g = new FileReader();
        g.onloadend = function() {
          var S = g.result;
          S = m ? S : S.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = S : location = S, h = null;
        }, g.readAsDataURL(u);
      } else {
        var b = a.URL || a.webkitURL, _ = b.createObjectURL(u);
        h ? h.location = _ : location.href = _, h = null, setTimeout(function() {
          b.revokeObjectURL(_);
        }, 4e4);
      }
    });
    a.saveAs = l.saveAs = l, t.exports = l;
  });
})(k_);
const l4 = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, u4 = { class: "text-center mb-3" }, c4 = { class: "flex flex-row justify-center" }, f4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, h4 = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, d4 = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, p4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, m4 = ["href"], g4 = /* @__PURE__ */ fe({
  __name: "expert-style-selector",
  setup(t) {
    const e = vt(), n = mr(), r = vs(), { appliedStyle: i } = He(n), { t: s } = Ze();
    function a() {
      const u = i.value, f = JSON.stringify(u), c = new Blob([f], { type: "text/plain;charset=utf-8" }), h = "styles.json";
      k_.exports.saveAs(c, h);
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
      ) : `${r.MVTSTYLES_PATH_GET}?id=${n.styleSerial}`;
    }
    return (u, f) => (D(), G("div", l4, [
      P("h5", u4, oe(M(s)("Lancer \xE9diteur externe ou importer json")), 1),
      P("div", c4, [
        P("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          P("span", f4, oe(M(s)("Download style")), 1)
        ]),
        P("div", h4, [
          P("label", d4, [
            P("span", p4, oe(M(s)("Upload style")), 1)
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
      }, oe(M(s)("Open Maputnik editor")), 9, m4)
    ]));
  }
}), y4 = /* @__PURE__ */ me(g4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/expert-style-selector.vue"]]), v4 = { key: 0 }, _4 = {
  key: 0,
  class: "mb-px"
}, b4 = {
  key: 1,
  class: "mb-px"
}, E4 = {
  key: 2,
  class: "mb-px"
}, S4 = /* @__PURE__ */ fe({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Ze(), n = vt(), r = wt(), i = mr(), { bgStyle: s, isExpertStyleActive: a } = He(i), { bgLayer: o } = He(n), l = vs(), u = de(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    et(o, (h) => {
      l.isLayerStyleEditable(h) || r.closeStyleEditorPanel();
    });
    let f = we(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => u.value.isEditable ? (D(), G("div", v4, [
      u.value.hasSimpleStyle ? (D(), G("div", _4, [
        ie(Fl, {
          title: M(e)("Simple"),
          expanded: M(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => Ye(f) ? f.value = M(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = M(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: _i(() => [
            ie(YR)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasAdvancedStyle ? (D(), G("div", b4, [
        ie(Fl, {
          title: M(e)("Medium"),
          expanded: M(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => Ye(f) ? f.value = M(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = M(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: _i(() => [
            M(o) ? (D(), Ue(o4, {
              key: 0,
              layer: M(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasExpertStyle ? (D(), G("div", E4, [
        ie(Fl, {
          title: M(e)("Expert (style.json)"),
          expanded: M(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => Ye(f) ? f.value = M(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = M(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: _i(() => [
            M(o) ? (D(), Ue(y4, {
              key: 0,
              layer: M(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      M(s) || M(a) ? (D(), G("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, oe(M(e)("Reset style", { ns: "client" })), 1)) : F("v-if", !0)
    ])) : F("v-if", !0);
  }
}), w4 = /* @__PURE__ */ me(S4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/components/style-selector/style-selector.vue"]]);
function sh(t) {
  return sh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, sh(t);
}
function I_() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : sh(XMLHttpRequest)) === "object";
}
function x4(t) {
  return !!t && typeof t.then == "function";
}
function O4(t) {
  return x4(t) ? t : Promise.resolve(t);
}
function M4(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pu = { exports: {} }, vl = { exports: {} }, vg;
function T4() {
  return vg || (vg = 1, function(t, e) {
    var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof or < "u" && or, r = function() {
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
        function u(L) {
          return L && DataView.prototype.isPrototypeOf(L);
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
          ], c = ArrayBuffer.isView || function(L) {
            return L && f.indexOf(Object.prototype.toString.call(L)) > -1;
          };
        function h(L) {
          if (typeof L != "string" && (L = String(L)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(L) || L === "")
            throw new TypeError('Invalid character in header field name: "' + L + '"');
          return L.toLowerCase();
        }
        function d(L) {
          return typeof L != "string" && (L = String(L)), L;
        }
        function p(L) {
          var $ = {
            next: function() {
              var z = L.shift();
              return { done: z === void 0, value: z };
            }
          };
          return l.iterable && ($[Symbol.iterator] = function() {
            return $;
          }), $;
        }
        function m(L) {
          this.map = {}, L instanceof m ? L.forEach(function($, z) {
            this.append(z, $);
          }, this) : Array.isArray(L) ? L.forEach(function($) {
            this.append($[0], $[1]);
          }, this) : L && Object.getOwnPropertyNames(L).forEach(function($) {
            this.append($, L[$]);
          }, this);
        }
        m.prototype.append = function(L, $) {
          L = h(L), $ = d($);
          var z = this.map[L];
          this.map[L] = z ? z + ", " + $ : $;
        }, m.prototype.delete = function(L) {
          delete this.map[h(L)];
        }, m.prototype.get = function(L) {
          return L = h(L), this.has(L) ? this.map[L] : null;
        }, m.prototype.has = function(L) {
          return this.map.hasOwnProperty(h(L));
        }, m.prototype.set = function(L, $) {
          this.map[h(L)] = d($);
        }, m.prototype.forEach = function(L, $) {
          for (var z in this.map)
            this.map.hasOwnProperty(z) && L.call($, this.map[z], z, this);
        }, m.prototype.keys = function() {
          var L = [];
          return this.forEach(function($, z) {
            L.push(z);
          }), p(L);
        }, m.prototype.values = function() {
          var L = [];
          return this.forEach(function($) {
            L.push($);
          }), p(L);
        }, m.prototype.entries = function() {
          var L = [];
          return this.forEach(function($, z) {
            L.push([z, $]);
          }), p(L);
        }, l.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries);
        function g(L) {
          if (L.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          L.bodyUsed = !0;
        }
        function b(L) {
          return new Promise(function($, z) {
            L.onload = function() {
              $(L.result);
            }, L.onerror = function() {
              z(L.error);
            };
          });
        }
        function _(L) {
          var $ = new FileReader(), z = b($);
          return $.readAsArrayBuffer(L), z;
        }
        function S(L) {
          var $ = new FileReader(), z = b($);
          return $.readAsText(L), z;
        }
        function y(L) {
          for (var $ = new Uint8Array(L), z = new Array($.length), Z = 0; Z < $.length; Z++)
            z[Z] = String.fromCharCode($[Z]);
          return z.join("");
        }
        function E(L) {
          if (L.slice)
            return L.slice(0);
          var $ = new Uint8Array(L.byteLength);
          return $.set(new Uint8Array(L)), $.buffer;
        }
        function N() {
          return this.bodyUsed = !1, this._initBody = function(L) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = L, L ? typeof L == "string" ? this._bodyText = L : l.blob && Blob.prototype.isPrototypeOf(L) ? this._bodyBlob = L : l.formData && FormData.prototype.isPrototypeOf(L) ? this._bodyFormData = L : l.searchParams && URLSearchParams.prototype.isPrototypeOf(L) ? this._bodyText = L.toString() : l.arrayBuffer && l.blob && u(L) ? (this._bodyArrayBuffer = E(L.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(L) || c(L)) ? this._bodyArrayBuffer = E(L) : this._bodyText = L = Object.prototype.toString.call(L) : this._bodyText = "", this.headers.get("content-type") || (typeof L == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(L) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, l.blob && (this.blob = function() {
            var L = g(this);
            if (L)
              return L;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var L = g(this);
              return L || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else
              return this.blob().then(_);
          }), this.text = function() {
            var L = g(this);
            if (L)
              return L;
            if (this._bodyBlob)
              return S(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(y(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, l.formData && (this.formData = function() {
            return this.text().then(T);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function C(L) {
          var $ = L.toUpperCase();
          return w.indexOf($) > -1 ? $ : L;
        }
        function A(L, $) {
          if (!(this instanceof A))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ = $ || {};
          var z = $.body;
          if (L instanceof A) {
            if (L.bodyUsed)
              throw new TypeError("Already read");
            this.url = L.url, this.credentials = L.credentials, $.headers || (this.headers = new m(L.headers)), this.method = L.method, this.mode = L.mode, this.signal = L.signal, !z && L._bodyInit != null && (z = L._bodyInit, L.bodyUsed = !0);
          } else
            this.url = String(L);
          if (this.credentials = $.credentials || this.credentials || "same-origin", ($.headers || !this.headers) && (this.headers = new m($.headers)), this.method = C($.method || this.method || "GET"), this.mode = $.mode || this.mode || null, this.signal = $.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && z)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(z), (this.method === "GET" || this.method === "HEAD") && ($.cache === "no-store" || $.cache === "no-cache")) {
            var Z = /([?&])_=[^&]*/;
            if (Z.test(this.url))
              this.url = this.url.replace(Z, "$1_=" + new Date().getTime());
            else {
              var Le = /\?/;
              this.url += (Le.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
        A.prototype.clone = function() {
          return new A(this, { body: this._bodyInit });
        };
        function T(L) {
          var $ = new FormData();
          return L.trim().split("&").forEach(function(z) {
            if (z) {
              var Z = z.split("="), Le = Z.shift().replace(/\+/g, " "), Pe = Z.join("=").replace(/\+/g, " ");
              $.append(decodeURIComponent(Le), decodeURIComponent(Pe));
            }
          }), $;
        }
        function k(L) {
          var $ = new m(), z = L.replace(/\r?\n[\t ]+/g, " ");
          return z.split("\r").map(function(Z) {
            return Z.indexOf(`
`) === 0 ? Z.substr(1, Z.length) : Z;
          }).forEach(function(Z) {
            var Le = Z.split(":"), Pe = Le.shift().trim();
            if (Pe) {
              var dt = Le.join(":").trim();
              $.append(Pe, dt);
            }
          }), $;
        }
        N.call(A.prototype);
        function I(L, $) {
          if (!(this instanceof I))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ || ($ = {}), this.type = "default", this.status = $.status === void 0 ? 200 : $.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = $.statusText === void 0 ? "" : "" + $.statusText, this.headers = new m($.headers), this.url = $.url || "", this._initBody(L);
        }
        N.call(I.prototype), I.prototype.clone = function() {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, I.error = function() {
          var L = new I(null, { status: 0, statusText: "" });
          return L.type = "error", L;
        };
        var K = [301, 302, 303, 307, 308];
        I.redirect = function(L, $) {
          if (K.indexOf($) === -1)
            throw new RangeError("Invalid status code");
          return new I(null, { status: $, headers: { location: L } });
        }, a.DOMException = o.DOMException;
        try {
          new a.DOMException();
        } catch {
          a.DOMException = function($, z) {
            this.message = $, this.name = z;
            var Z = Error($);
            this.stack = Z.stack;
          }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException;
        }
        function ve(L, $) {
          return new Promise(function(z, Z) {
            var Le = new A(L, $);
            if (Le.signal && Le.signal.aborted)
              return Z(new a.DOMException("Aborted", "AbortError"));
            var Pe = new XMLHttpRequest();
            function dt() {
              Pe.abort();
            }
            Pe.onload = function() {
              var Te = {
                status: Pe.status,
                statusText: Pe.statusText,
                headers: k(Pe.getAllResponseHeaders() || "")
              };
              Te.url = "responseURL" in Pe ? Pe.responseURL : Te.headers.get("X-Request-URL");
              var Lt = "response" in Pe ? Pe.response : Pe.responseText;
              setTimeout(function() {
                z(new I(Lt, Te));
              }, 0);
            }, Pe.onerror = function() {
              setTimeout(function() {
                Z(new TypeError("Network request failed"));
              }, 0);
            }, Pe.ontimeout = function() {
              setTimeout(function() {
                Z(new TypeError("Network request failed"));
              }, 0);
            }, Pe.onabort = function() {
              setTimeout(function() {
                Z(new a.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function Rt(Te) {
              try {
                return Te === "" && o.location.href ? o.location.href : Te;
              } catch {
                return Te;
              }
            }
            Pe.open(Le.method, Rt(Le.url), !0), Le.credentials === "include" ? Pe.withCredentials = !0 : Le.credentials === "omit" && (Pe.withCredentials = !1), "responseType" in Pe && (l.blob ? Pe.responseType = "blob" : l.arrayBuffer && Le.headers.get("Content-Type") && Le.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (Pe.responseType = "arraybuffer")), $ && typeof $.headers == "object" && !($.headers instanceof m) ? Object.getOwnPropertyNames($.headers).forEach(function(Te) {
              Pe.setRequestHeader(Te, d($.headers[Te]));
            }) : Le.headers.forEach(function(Te, Lt) {
              Pe.setRequestHeader(Lt, Te);
            }), Le.signal && (Le.signal.addEventListener("abort", dt), Pe.onreadystatechange = function() {
              Pe.readyState === 4 && Le.signal.removeEventListener("abort", dt);
            }), Pe.send(typeof Le._bodyInit > "u" ? null : Le._bodyInit);
          });
        }
        return ve.polyfill = !0, o.fetch || (o.fetch = ve, o.Headers = m, o.Request = A, o.Response = I), a.Headers = m, a.Request = A, a.Response = I, a.fetch = ve, a;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = n.fetch ? n : r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(vl, vl.exports)), vl.exports;
}
(function(t, e) {
  var n;
  if (typeof fetch == "function" && (typeof or < "u" && or.fetch ? n = or.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof M4 < "u" && typeof window > "u") {
    var r = n || T4();
    r.default && (r = r.default), e.default = r, t.exports = e.default;
  }
})(Pu, Pu.exports);
const R_ = Pu.exports, _g = /* @__PURE__ */ gb({
  __proto__: null,
  default: R_
}, [Pu.exports]);
function bg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Eg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bg(Object(n), !0).forEach(function(r) {
      N4(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function N4(t, e, n) {
  return e = L4(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function L4(t) {
  var e = C4(t, "string");
  return ps(e) == "symbol" ? e : String(e);
}
function C4(t, e) {
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
var fo;
I_() && (typeof global < "u" && global.XMLHttpRequest ? fo = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (fo = window.XMLHttpRequest));
var Au;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Au = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Au = window.ActiveXObject));
!jr && _g && !fo && !Au && (jr = R_ || _g);
typeof jr != "function" && (jr = void 0);
var ah = function(e, n) {
  if (n && ps(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, Sg = function(e, n, r, i) {
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
}, wg = !1, P4 = function(e, n, r, i) {
  e.queryStringParams && (n = ah(n, e.queryStringParams));
  var s = Eg({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = Eg({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: s
  }, wg ? {} : a), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    Sg(n, o, i, l);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(f) {
        delete o[f];
      }), Sg(n, o, i, l), wg = !0;
    } catch (f) {
      i(f);
    }
  }
}, A4 = function(e, n, r, i) {
  r && ps(r) === "object" && (r = ah("", r).slice(1)), e.queryStringParams && (n = ah(n, e.queryStringParams));
  try {
    var s;
    fo ? s = new fo() : s = new Au("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", n, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
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
}, D4 = function(e, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, jr && n.indexOf("file:") !== 0)
    return P4(e, n, r, i);
  if (I_() || typeof ActiveXObject == "function")
    return A4(e, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function ho(t) {
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ho(t);
}
function xg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function af(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xg(Object(n), !0).forEach(function(r) {
      $_(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function k4(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Og(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, F_(r.key), r);
  }
}
function I4(t, e, n) {
  return e && Og(t.prototype, e), n && Og(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function $_(t, e, n) {
  return e = F_(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function F_(t) {
  var e = R4(t, "string");
  return ho(e) == "symbol" ? e : String(e);
}
function R4(t, e) {
  if (ho(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (ho(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var $4 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return $_({}, r, i || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: D4,
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
}, V_ = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    k4(this, t), this.services = e, this.options = n, this.allOptions = r, this.type = "backend", this.init(e, n, r);
  }
  return I4(t, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = af(af(af({}, $4()), this.options || {}), i), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
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
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, i)), l = O4(l), l.then(function(u) {
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
          o.options.request(o.options, p, l, function(m, g) {
            u += 1, f.push(m), c.push(g), u === n.length && typeof a == "function" && a(f, c);
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
V_.type = "backend";
function j_(t, e, n) {
  n(t, e) && t instanceof mb && t.getLayers().forEach((i) => {
    j_(i, [...e, t], n);
  });
}
const F4 = { class: "h-screen flex flex-col overflow-hidden" }, V4 = { class: "flex grow" }, j4 = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, G4 = {
  key: 1,
  class: "w-80 bg-primary"
}, U4 = { class: "map-wrapper grow bg-blue-100 relative" }, B4 = { class: "absolute right-1 top-16" }, W4 = /* @__PURE__ */ fe({
  __name: "App",
  setup(t) {
    const e = wt();
    FR.bootstrap(), CR.bootstrap(), kR.bootstrap(), RR.bootstrapLayersOpen(), K0.bootstrapStyle(), NR.bootstrap();
    const { layersOpen: n, styleEditorOpen: r } = He(e);
    et(
      n,
      () => setTimeout(() => {
        i();
      }, 50)
    ), _n(() => window.addEventListener("resize", i)), Ci(() => window.removeEventListener("resize", i));
    function i() {
      const s = Fr().getOlMap();
      s.updateSize(), j_(s.getLayerGroup(), [], (a) => (a instanceof t_ && a.getMapLibreMap().resize(), !0));
    }
    return (s, a) => (D(), G("div", F4, [
      ie(Jk),
      P("main", V4, [
        F(" Layer panel "),
        M(n) ? (D(), G("div", j4, [
          ie(fR)
        ])) : F("v-if", !0),
        F(" Style editor "),
        M(r) ? (D(), G("div", G4, [
          ie(w4)
        ])) : F("v-if", !0),
        F(" Map container and slider comparator "),
        P("div", U4, [
          ie(zP, { v4_standalone: !0 }),
          ie(SR, { class: "absolute top-0" }),
          ie(zD),
          ie($k)
        ]),
        F(" Background selector "),
        P("div", B4, [
          ie(nA)
        ])
      ]),
      ie(lI, { class: "fixed bottom-5 sm:static z-20" }),
      ie(DN)
    ]));
  }
}), q4 = /* @__PURE__ */ me(W4, [["__file", "/home/abernachot/Dev/Lux/luxembourg-geoportail/src/App.vue"]]);
wN();
lt.use(V_);
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
const id = NS(q4);
id.use(Rw());
id.use(x2, { i18next: lt });
id.use(fw);
const _6 = (t = {}, e = null) => xN(
  {
    setup: () => {
      const n = _o();
      Object.assign(n.appContext, e._context), Object.assign(n.provides, e._context.provides);
    },
    render: () => Zy(t)
  },
  { shadowRoot: !1 }
);
export {
  DN as AlertNotifications,
  q4 as App,
  nA as BackgroundSelector,
  Vv as DropdownList,
  lI as FooterBar,
  Jk as HeaderBar,
  x2 as I18NextVue,
  $k as LayerMetadata,
  fR as LayerPanel,
  zP as MapContainer,
  t_ as MapLibreLayer,
  zD as RemoteLayers,
  SR as SliderComparator,
  w4 as StyleSelector,
  fw as VueDOMPurifyHTML,
  id as app,
  V_ as backend,
  _6 as createElementInstance,
  Rw as createPinia,
  xN as defineCustomElement,
  lt as i18next,
  ia as proxyUrlHelper,
  NR as statePersistorBgLayerService,
  RR as statePersistorLayersOpenService,
  CR as statePersistorLayersService,
  FR as statePersistorMyMapService,
  K0 as statePersistorStyleService,
  kR as statePersistorThemeService,
  He as storeToRefs,
  Wk as themeSelectorService,
  wt as useAppStore,
  r_ as useBackgroundLayer,
  Xn as useLayers,
  Fr as useMap,
  vt as useMapStore,
  vs as useMvtStyles,
  n_ as useOpenLayers,
  mr as useStyleStore,
  Zt as useThemeStore,
  as as useThemes,
  et as watch
};
