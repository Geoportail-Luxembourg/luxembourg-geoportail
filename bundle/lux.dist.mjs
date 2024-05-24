var z_ = Object.defineProperty;
var Y_ = (t, e, n) => e in t ? z_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var st = (t, e, n) => (Y_(t, typeof e != "symbol" ? e + "" : e, n), n);
import { get as gl, transformExtent as X_, getTransform as K_, transform as md } from "ol/proj";
import { register as Z_ } from "ol/proj/proj4";
import J_ from "ol/Map";
import Q_ from "ol/View";
import eb from "ol/layer/Image";
import xg from "ol/source/ImageWMS";
import tb from "ol/layer/Tile";
import Og from "ol/source/WMTS";
import nb from "ol/tilegrid/WMTS";
import { getTopLeft as rb } from "ol/extent";
import ib from "ol/layer/Layer";
import { toDegrees as sb } from "ol/math";
import { toLonLat as ab } from "ol/proj.js";
import pd from "mapbox-gl";
import * as gd from "ol/events";
import ob from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as Mg, CLASS_CONTROL as Tg } from "ol/css";
import Ng from "ol/control/Control";
import lb from "ol/control/FullScreen";
import ub from "ol/control/Zoom";
import cb from "ol/control/ZoomToExtent";
import fb from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as Ro } from "ol/render";
import { unByKey as hb } from "ol/Observable";
import yd from "ol/render/EventType";
import db from "ol/layer/Group.js";
function mb(t, e) {
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
const Ke = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Fs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], yt = () => {
}, pb = () => !1, co = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Gl = (t) => t.startsWith("onUpdate:"), Qe = Object.assign, ah = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, gb = Object.prototype.hasOwnProperty, Ae = (t, e) => gb.call(t, e), le = Array.isArray, Ji = (t) => Pu(t) === "[object Map]", Cg = (t) => Pu(t) === "[object Set]", me = (t) => typeof t == "function", rt = (t) => typeof t == "string", ds = (t) => typeof t == "symbol", Be = (t) => t !== null && typeof t == "object", oh = (t) => (Be(t) || me(t)) && me(t.then) && me(t.catch), Lg = Object.prototype.toString, Pu = (t) => Lg.call(t), lh = (t) => Pu(t).slice(8, -1), Pg = (t) => Pu(t) === "[object Object]", uh = (t) => rt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Pa = /* @__PURE__ */ qr(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), yb = /* @__PURE__ */ qr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ku = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, vb = /-(\w)/g, gn = ku((t) => t.replace(vb, (e, n) => n ? n.toUpperCase() : "")), _b = /\B([A-Z])/g, un = ku(
  (t) => t.replace(_b, "-$1").toLowerCase()
), as = ku((t) => t.charAt(0).toUpperCase() + t.slice(1)), Hi = ku((t) => t ? `on${as(t)}` : ""), xi = (t, e) => !Object.is(t, e), ca = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, kg = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, bb = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, af = (t) => {
  const e = rt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let vd;
const Au = () => vd || (vd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ci(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = rt(r) ? xb(r) : Ci(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (rt(t) || Be(t))
    return t;
}
const Eb = /;(?![^(]*\))/g, Sb = /:([^]+)/, wb = /\/\*[^]*?\*\//g;
function xb(t) {
  const e = {};
  return t.replace(wb, "").split(Eb).forEach((n) => {
    if (n) {
      const r = n.split(Sb);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function ke(t) {
  let e = "";
  if (rt(t))
    e = t;
  else if (le(t))
    for (let n = 0; n < t.length; n++) {
      const r = ke(t[n]);
      r && (e += r + " ");
    }
  else if (Be(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Ob = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Mb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Tb = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Nb = /* @__PURE__ */ qr(Ob), Cb = /* @__PURE__ */ qr(Mb), Lb = /* @__PURE__ */ qr(Tb), Pb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", kb = /* @__PURE__ */ qr(Pb);
function Ag(t) {
  return !!t || t === "";
}
const oe = (t) => rt(t) ? t : t == null ? "" : le(t) || Be(t) && (t.toString === Lg || !me(t.toString)) ? JSON.stringify(t, Dg, 2) : String(t), Dg = (t, e) => e && e.__v_isRef ? Dg(t, e.value) : Ji(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[lc(r, s) + " =>"] = i, n),
    {}
  )
} : Cg(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => lc(n))
} : ds(e) ? lc(e) : Be(e) && !le(e) && !Pg(e) ? String(e) : e, lc = (t, e = "") => {
  var n;
  return ds(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function _r(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let dn;
class Ig {
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
      process.env.NODE_ENV !== "production" && _r("cannot run an inactive effect scope.");
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
function Rg(t) {
  return new Ig(t);
}
function Ab(t, e = dn) {
  e && e.active && e.effects.push(t);
}
function $g() {
  return dn;
}
function Db(t) {
  dn ? dn.cleanups.push(t) : process.env.NODE_ENV !== "production" && _r(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Qi;
class ch {
  constructor(e, n, r, i) {
    this.fn = e, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ab(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Hr();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Ib(n.computed), this._dirtyLevel >= 4))
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
    let e = yi, n = Qi;
    try {
      return yi = !0, Qi = this, this._runnings++, _d(this), this.fn();
    } finally {
      bd(this), this._runnings--, Qi = n, yi = e;
    }
  }
  stop() {
    var e;
    this.active && (_d(this), bd(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Ib(t) {
  return t.value;
}
function _d(t) {
  t._trackId++, t._depsLength = 0;
}
function bd(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Fg(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Fg(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let yi = !0, of = 0;
const Vg = [];
function Hr() {
  Vg.push(yi), yi = !1;
}
function zr() {
  const t = Vg.pop();
  yi = t === void 0 ? !0 : t;
}
function fh() {
  of++;
}
function hh() {
  for (of--; !of && lf.length; )
    lf.shift()();
}
function jg(t, e, n) {
  var r;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && Fg(i, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((r = t.onTrack) == null || r.call(t, Qe({ effect: t }, n)));
  }
}
const lf = [];
function Gg(t, e, n) {
  var r;
  fh();
  for (const i of t.keys()) {
    let s;
    i._dirtyLevel < e && (s != null ? s : s = t.get(i) === i._trackId) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (s != null ? s : s = t.get(i) === i._trackId) && (process.env.NODE_ENV !== "production" && ((r = i.onTrigger) == null || r.call(i, Qe({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && lf.push(i.scheduler)));
  }
  hh();
}
const Ug = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Ul = /* @__PURE__ */ new WeakMap(), es = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), uf = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function It(t, e, n) {
  if (yi && Qi) {
    let r = Ul.get(t);
    r || Ul.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Ug(() => r.delete(n))), jg(
      Qi,
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
  const a = Ul.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (n === "length" && le(t)) {
    const l = Number(r);
    a.forEach((u, f) => {
      (f === "length" || !ds(f) && f >= l) && o.push(u);
    });
  } else
    switch (n !== void 0 && o.push(a.get(n)), e) {
      case "add":
        le(t) ? uh(n) && o.push(a.get("length")) : (o.push(a.get(es)), Ji(t) && o.push(a.get(uf)));
        break;
      case "delete":
        le(t) || (o.push(a.get(es)), Ji(t) && o.push(a.get(uf)));
        break;
      case "set":
        Ji(t) && o.push(a.get(es));
        break;
    }
  fh();
  for (const l of o)
    l && Gg(
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
  hh();
}
function Rb(t, e) {
  var n;
  return (n = Ul.get(t)) == null ? void 0 : n.get(e);
}
const $b = /* @__PURE__ */ qr("__proto__,__v_isRef,__isVue"), Bg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ds)
), Ed = /* @__PURE__ */ Fb();
function Fb() {
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
      Hr(), fh();
      const r = _e(this)[e].apply(this, n);
      return hh(), zr(), r;
    };
  }), t;
}
function Vb(t) {
  ds(t) || (t = String(t));
  const e = _e(this);
  return It(e, "has", t), e.hasOwnProperty(t);
}
class Wg {
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
      return r === (i ? s ? Zg : Kg : s ? Xg : Yg).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = le(e);
    if (!i) {
      if (a && Ae(Ed, n))
        return Reflect.get(Ed, n, r);
      if (n === "hasOwnProperty")
        return Vb;
    }
    const o = Reflect.get(e, n, r);
    return (ds(n) ? Bg.has(n) : $b(n)) || (i || It(e, "get", n), s) ? o : Ye(o) ? a && uh(n) ? o : o.value : Be(o) ? i ? Jg(o) : Ru(o) : o;
  }
}
class qg extends Wg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._isShallow) {
      const l = os(s);
      if (!ts(r) && !os(r) && (s = _e(s), r = _e(r)), !le(e) && Ye(s) && !Ye(r))
        return l ? !1 : (s.value = r, !0);
    }
    const a = le(e) && uh(n) ? Number(n) < e.length : Ae(e, n), o = Reflect.set(e, n, r, i);
    return e === _e(i) && (a ? xi(r, s) && fr(e, "set", n, r, s) : fr(e, "add", n, r)), o;
  }
  deleteProperty(e, n) {
    const r = Ae(e, n), i = e[n], s = Reflect.deleteProperty(e, n);
    return s && r && fr(e, "delete", n, void 0, i), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!ds(n) || !Bg.has(n)) && It(e, "has", n), r;
  }
  ownKeys(e) {
    return It(
      e,
      "iterate",
      le(e) ? "length" : es
    ), Reflect.ownKeys(e);
  }
}
class Hg extends Wg {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && _r(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && _r(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const jb = /* @__PURE__ */ new qg(), Gb = /* @__PURE__ */ new Hg(), Ub = /* @__PURE__ */ new qg(
  !0
), Bb = /* @__PURE__ */ new Hg(!0), dh = (t) => t, Du = (t) => Reflect.getPrototypeOf(t);
function $o(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = _e(t), s = _e(e);
  n || (xi(e, s) && It(i, "get", e), It(i, "get", s));
  const { has: a } = Du(i), o = r ? dh : n ? mh : Xa;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function Fo(t, e = !1) {
  const n = this.__v_raw, r = _e(n), i = _e(t);
  return e || (xi(t, i) && It(r, "has", t), It(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Vo(t, e = !1) {
  return t = t.__v_raw, !e && It(_e(t), "iterate", es), Reflect.get(t, "size", t);
}
function Sd(t) {
  t = _e(t);
  const e = _e(this);
  return Du(e).has.call(e, t) || (e.add(t), fr(e, "add", t, t)), this;
}
function wd(t, e) {
  e = _e(e);
  const n = _e(this), { has: r, get: i } = Du(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && zg(n, r, t) : (t = _e(t), s = r.call(n, t));
  const a = i.call(n, t);
  return n.set(t, e), s ? xi(e, a) && fr(n, "set", t, e, a) : fr(n, "add", t, e), this;
}
function xd(t) {
  const e = _e(this), { has: n, get: r } = Du(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && zg(e, n, t) : (t = _e(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, a = e.delete(t);
  return i && fr(e, "delete", t, void 0, s), a;
}
function Od() {
  const t = _e(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? Ji(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && fr(t, "clear", void 0, void 0, n), r;
}
function jo(t, e) {
  return function(r, i) {
    const s = this, a = s.__v_raw, o = _e(a), l = e ? dh : t ? mh : Xa;
    return !t && It(o, "iterate", es), a.forEach((u, f) => r.call(i, l(u), l(f), s));
  };
}
function Go(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = _e(i), a = Ji(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...r), f = n ? dh : e ? mh : Xa;
    return !e && It(
      s,
      "iterate",
      l ? uf : es
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
      _r(
        `${as(t)} operation ${n}failed: target is readonly.`,
        _e(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Wb() {
  const t = {
    get(s) {
      return $o(this, s);
    },
    get size() {
      return Vo(this);
    },
    has: Fo,
    add: Sd,
    set: wd,
    delete: xd,
    clear: Od,
    forEach: jo(!1, !1)
  }, e = {
    get(s) {
      return $o(this, s, !1, !0);
    },
    get size() {
      return Vo(this);
    },
    has: Fo,
    add: Sd,
    set: wd,
    delete: xd,
    clear: Od,
    forEach: jo(!1, !0)
  }, n = {
    get(s) {
      return $o(this, s, !0);
    },
    get size() {
      return Vo(this, !0);
    },
    has(s) {
      return Fo.call(this, s, !0);
    },
    add: Zr("add"),
    set: Zr("set"),
    delete: Zr("delete"),
    clear: Zr("clear"),
    forEach: jo(!0, !1)
  }, r = {
    get(s) {
      return $o(this, s, !0, !0);
    },
    get size() {
      return Vo(this, !0);
    },
    has(s) {
      return Fo.call(this, s, !0);
    },
    add: Zr("add"),
    set: Zr("set"),
    delete: Zr("delete"),
    clear: Zr("clear"),
    forEach: jo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = Go(s, !1, !1), n[s] = Go(s, !0, !1), e[s] = Go(s, !1, !0), r[s] = Go(
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
  qb,
  Hb,
  zb,
  Yb
] = /* @__PURE__ */ Wb();
function Iu(t, e) {
  const n = e ? t ? Yb : zb : t ? Hb : qb;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    Ae(n, i) && i in r ? n : r,
    i,
    s
  );
}
const Xb = {
  get: /* @__PURE__ */ Iu(!1, !1)
}, Kb = {
  get: /* @__PURE__ */ Iu(!1, !0)
}, Zb = {
  get: /* @__PURE__ */ Iu(!0, !1)
}, Jb = {
  get: /* @__PURE__ */ Iu(!0, !0)
};
function zg(t, e, n) {
  const r = _e(n);
  if (r !== n && e.call(t, r)) {
    const i = lh(t);
    _r(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Yg = /* @__PURE__ */ new WeakMap(), Xg = /* @__PURE__ */ new WeakMap(), Kg = /* @__PURE__ */ new WeakMap(), Zg = /* @__PURE__ */ new WeakMap();
function Qb(t) {
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
function e1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Qb(lh(t));
}
function Ru(t) {
  return os(t) ? t : $u(
    t,
    !1,
    jb,
    Xb,
    Yg
  );
}
function t1(t) {
  return $u(
    t,
    !1,
    Ub,
    Kb,
    Xg
  );
}
function Jg(t) {
  return $u(
    t,
    !0,
    Gb,
    Zb,
    Kg
  );
}
function $r(t) {
  return $u(
    t,
    !0,
    Bb,
    Jb,
    Zg
  );
}
function $u(t, e, n, r, i) {
  if (!Be(t))
    return process.env.NODE_ENV !== "production" && _r(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = e1(t);
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? r : n
  );
  return i.set(t, o), o;
}
function hr(t) {
  return os(t) ? hr(t.__v_raw) : !!(t && t.__v_isReactive);
}
function os(t) {
  return !!(t && t.__v_isReadonly);
}
function ts(t) {
  return !!(t && t.__v_isShallow);
}
function Bl(t) {
  return t ? !!t.__v_raw : !1;
}
function _e(t) {
  const e = t && t.__v_raw;
  return e ? _e(e) : t;
}
function mi(t) {
  return Object.isExtensible(t) && kg(t, "__v_skip", !0), t;
}
const Xa = (t) => Be(t) ? Ru(t) : t, mh = (t) => Be(t) ? Jg(t) : t, n1 = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Qg {
  constructor(e, n, r, i) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ch(
      () => e(this._value),
      () => yl(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = _e(this);
    return (!e._cacheable || e.effect.dirty) && xi(e._value, e._value = e.effect.run()) && yl(e, 4), ey(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && _r(n1, `

getter: `, this.getter), yl(e, 2)), e._value;
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
function r1(t, e, n = !1) {
  let r, i;
  const s = me(t);
  s ? (r = t, i = process.env.NODE_ENV !== "production" ? () => {
    _r("Write operation failed: computed value is readonly");
  } : yt) : (r = t.get, i = t.set);
  const a = new Qg(r, i, s || !i, n);
  return process.env.NODE_ENV !== "production" && e && !n && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
function ey(t) {
  var e;
  yi && Qi && (t = _e(t), jg(
    Qi,
    (e = t.dep) != null ? e : t.dep = Ug(
      () => t.dep = void 0,
      t instanceof Qg ? t : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function yl(t, e = 4, n) {
  t = _e(t);
  const r = t.dep;
  r && Gg(
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
  return ty(t, !1);
}
function tt(t) {
  return ty(t, !0);
}
function ty(t, e) {
  return Ye(t) ? t : new i1(t, e);
}
class i1 {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : _e(e), this._value = n ? e : Xa(e);
  }
  get value() {
    return ey(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || ts(e) || os(e);
    e = n ? e : _e(e), xi(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Xa(e), yl(this, 4, e));
  }
}
function x(t) {
  return Ye(t) ? t.value : t;
}
const s1 = {
  get: (t, e, n) => x(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return Ye(i) && !Ye(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function ny(t) {
  return hr(t) ? t : new Proxy(t, s1);
}
function cf(t) {
  process.env.NODE_ENV !== "production" && !Bl(t) && _r("toRefs() expects a reactive object but received a plain one.");
  const e = le(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = ry(t, n);
  return e;
}
class a1 {
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
    return Rb(_e(this._object), this._key);
  }
}
class o1 {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function vl(t, e, n) {
  return Ye(t) ? t : me(t) ? new o1(t) : Be(t) && arguments.length > 1 ? ry(t, e, n) : we(t);
}
function ry(t, e, n) {
  const r = t[e];
  return Ye(r) ? r : new a1(t, e, n);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ns = [];
function _l(t) {
  ns.push(t);
}
function bl() {
  ns.pop();
}
function q(t, ...e) {
  Hr();
  const n = ns.length ? ns[ns.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = l1();
  if (r)
    Fr(
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
          ({ vnode: s }) => `at <${Bu(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...u1(i)), console.warn(...s);
  }
  zr();
}
function l1() {
  let t = ns[ns.length - 1];
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
function u1(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...c1(n));
  }), e;
}
function c1({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${Bu(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...f1(t.props), s] : [i + s];
}
function f1(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...iy(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function iy(t, e, n) {
  return rt(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : Ye(e) ? (e = iy(t, _e(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : me(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = _e(e), n ? e : [`${t}=`, e]);
}
function h1(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? q(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && q(`${e} is NaN - the duration expression might be incorrect.`));
}
const ph = {
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
function Fr(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (i) {
    fo(i, e, n);
  }
}
function Cn(t, e, n, r) {
  if (me(t)) {
    const i = Fr(t, e, n, r);
    return i && oh(i) && i.catch((s) => {
      fo(s, e, n);
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
function fo(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? ph[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Hr(), Fr(
        l,
        null,
        10,
        [t, a, o]
      ), zr();
      return;
    }
  }
  d1(t, n, i, r);
}
function d1(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = ph[e];
    if (n && _l(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && bl(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Ka = !1, ff = !1;
const Bt = [];
let sr = 0;
const Vs = [];
let Ir = null, ii = 0;
const sy = /* @__PURE__ */ Promise.resolve();
let gh = null;
const m1 = 100;
function Wl(t) {
  const e = gh || sy;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function p1(t) {
  let e = sr + 1, n = Bt.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = Bt[r], s = Za(i);
    s < t || s === t && i.pre ? e = r + 1 : n = r;
  }
  return e;
}
function Fu(t) {
  (!Bt.length || !Bt.includes(
    t,
    Ka && t.allowRecurse ? sr + 1 : sr
  )) && (t.id == null ? Bt.push(t) : Bt.splice(p1(t.id), 0, t), ay());
}
function ay() {
  !Ka && !ff && (ff = !0, gh = sy.then(uy));
}
function g1(t) {
  const e = Bt.indexOf(t);
  e > sr && Bt.splice(e, 1);
}
function oy(t) {
  le(t) ? Vs.push(...t) : (!Ir || !Ir.includes(
    t,
    t.allowRecurse ? ii + 1 : ii
  )) && Vs.push(t), ay();
}
function Md(t, e, n = Ka ? sr + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); n < Bt.length; n++) {
    const r = Bt[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid || process.env.NODE_ENV !== "production" && yh(e, r))
        continue;
      Bt.splice(n, 1), n--, r();
    }
  }
}
function ly(t) {
  if (Vs.length) {
    const e = [...new Set(Vs)].sort(
      (n, r) => Za(n) - Za(r)
    );
    if (Vs.length = 0, Ir) {
      Ir.push(...e);
      return;
    }
    for (Ir = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ii = 0; ii < Ir.length; ii++)
      process.env.NODE_ENV !== "production" && yh(t, Ir[ii]) || Ir[ii]();
    Ir = null, ii = 0;
  }
}
const Za = (t) => t.id == null ? 1 / 0 : t.id, y1 = (t, e) => {
  const n = Za(t) - Za(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function uy(t) {
  ff = !1, Ka = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Bt.sort(y1);
  const e = process.env.NODE_ENV !== "production" ? (n) => yh(t, n) : yt;
  try {
    for (sr = 0; sr < Bt.length; sr++) {
      const n = Bt[sr];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        Fr(n, null, 14);
      }
    }
  } finally {
    sr = 0, Bt.length = 0, ly(t), Ka = !1, gh = null, (Bt.length || Vs.length) && uy(t);
  }
}
function yh(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > m1) {
      const r = e.ownerInstance, i = r && Th(r.type);
      return fo(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
let vi = !1;
const Ns = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Au().__VUE_HMR_RUNTIME__ = {
  createRecord: uc(cy),
  rerender: uc(b1),
  reload: uc(E1)
});
const ls = /* @__PURE__ */ new Map();
function v1(t) {
  const e = t.type.__hmrId;
  let n = ls.get(e);
  n || (cy(e, t.type), n = ls.get(e)), n.instances.add(t);
}
function _1(t) {
  ls.get(t.type.__hmrId).instances.delete(t);
}
function cy(t, e) {
  return ls.has(t) ? !1 : (ls.set(t, {
    initialDef: ka(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ka(t) {
  return Yy(t) ? t.__vccOpts : t;
}
function b1(t, e) {
  const n = ls.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, ka(r.type).render = e), r.renderCache = [], vi = !0, r.effect.dirty = !0, r.update(), vi = !1;
  }));
}
function E1(t, e) {
  const n = ls.get(t);
  if (!n)
    return;
  e = ka(e), Td(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = ka(i.type);
    Ns.has(s) || (s !== n.initialDef && Td(s, e), Ns.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Ns.add(s), i.ceReload(e.styles), Ns.delete(s)) : i.parent ? (i.parent.effect.dirty = !0, Fu(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  oy(() => {
    for (const i of r)
      Ns.delete(
        ka(i.type)
      );
  });
}
function Td(t, e) {
  Qe(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function uc(t) {
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
let qn, ba = [], hf = !1;
function ho(t, ...e) {
  qn ? qn.emit(t, ...e) : hf || ba.push({ event: t, args: e });
}
function vh(t, e) {
  var n, r;
  qn = t, qn ? (qn.enabled = !0, ba.forEach(({ event: i, args: s }) => qn.emit(i, ...s)), ba = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    vh(s, e);
  }), setTimeout(() => {
    qn || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, hf = !0, ba = []);
  }, 3e3)) : (hf = !0, ba = []);
}
function S1(t, e) {
  ho("app:init", t, e, {
    Fragment: Ge,
    Text: po,
    Comment: Nt,
    Static: El
  });
}
function w1(t) {
  ho("app:unmount", t);
}
const x1 = /* @__PURE__ */ _h(
  "component:added"
), fy = /* @__PURE__ */ _h("component:updated"), O1 = /* @__PURE__ */ _h(
  "component:removed"
), M1 = (t) => {
  qn && typeof qn.cleanupBuffer == "function" && !qn.cleanupBuffer(t) && O1(t);
};
/*! #__NO_SIDE_EFFECTS__ */
function _h(t) {
  return (e) => {
    ho(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const T1 = /* @__PURE__ */ hy(
  "perf:start"
), N1 = /* @__PURE__ */ hy(
  "perf:end"
);
function hy(t) {
  return (e, n, r) => {
    ho(t, e.appContext.app, e.uid, e, n, r);
  };
}
function C1(t, e, n) {
  ho(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function L1(t, e, ...n) {
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
        me(h) && (h(...n) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = r[f] || Ke;
    h && (i = n.map((d) => rt(d) ? d.trim() : d)), c && (i = n.map(bb));
  }
  if (process.env.NODE_ENV !== "production" && C1(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && r[Hi(f)] && q(
      `Event "${f}" is emitted in component ${Bu(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${un(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = r[o = Hi(e)] || r[o = Hi(gn(e))];
  !l && s && (l = r[o = Hi(un(e))]), l && Cn(
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
function dy(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!me(t)) {
    const l = (u) => {
      const f = dy(u, e, !0);
      f && (o = !0, Qe(a, f));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Be(t) && r.set(t, null), null) : (le(s) ? s.forEach((l) => a[l] = null) : Qe(a, s), Be(t) && r.set(t, a), a);
}
function Vu(t, e) {
  return !t || !co(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Ae(t, e[0].toLowerCase() + e.slice(1)) || Ae(t, un(e)) || Ae(t, e));
}
let ht = null, my = null;
function ql(t) {
  const e = ht;
  return ht = t, my = t && t.type.__scopeId || null, e;
}
function _i(t, e = ht, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && Bd(-1);
    const s = ql(e);
    let a;
    try {
      a = t(...i);
    } finally {
      ql(s), r._d && Bd(1);
    }
    return process.env.NODE_ENV !== "production" && fy(e), a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let df = !1;
function Hl() {
  df = !0;
}
function cc(t) {
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
  } = t, g = ql(t);
  let y, v;
  process.env.NODE_ENV !== "production" && (df = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = i || r, N = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(O, {
        get(M, P, I) {
          return q(
            `Property '${String(
              P
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, P, I);
        }
      }) : O;
      y = Wn(
        u.call(
          N,
          O,
          f,
          process.env.NODE_ENV !== "production" ? $r(c) : c,
          d,
          h,
          m
        )
      ), v = o;
    } else {
      const O = e;
      process.env.NODE_ENV !== "production" && o === c && Hl(), y = Wn(
        O.length > 1 ? O(
          process.env.NODE_ENV !== "production" ? $r(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Hl(), o;
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : O(
          process.env.NODE_ENV !== "production" ? $r(c) : c,
          null
        )
      ), v = e.props ? o : P1(o);
    }
  } catch (O) {
    Ia.length = 0, fo(O, t, 1), y = ie(Nt);
  }
  let b = y, E;
  if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([b, E] = py(y)), v && p !== !1) {
    const O = Object.keys(v), { shapeFlag: N } = b;
    if (O.length) {
      if (N & 7)
        s && O.some(Gl) && (v = k1(
          v,
          s
        )), b = br(b, v);
      else if (process.env.NODE_ENV !== "production" && !df && b.type !== Nt) {
        const M = Object.keys(o), P = [], I = [];
        for (let C = 0, R = M.length; C < R; C++) {
          const D = M[C];
          co(D) ? Gl(D) || P.push(D[2].toLowerCase() + D.slice(3)) : I.push(D);
        }
        I.length && q(
          `Extraneous non-props attributes (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), P.length && q(
          `Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Nd(b) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), b = br(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Nd(b) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), b.transition = n.transition), process.env.NODE_ENV !== "production" && E ? E(b) : y = b, ql(g), y;
}
const py = (t) => {
  const e = t.children, n = t.dynamicChildren, r = bh(e, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return py(r);
  } else
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, a = (o) => {
    e[i] = o, n && (s > -1 ? n[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...n, o]));
  };
  return [Wn(r), a];
};
function bh(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (Zs(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && e && n.patchFlag > 0 && n.patchFlag & 2048)
          return bh(n.children);
      }
    } else
      return;
  }
  return n;
}
const P1 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || co(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, k1 = (t, e) => {
  const n = {};
  for (const r in t)
    (!Gl(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Nd = (t) => t.shapeFlag & 7 || t.type === Nt;
function A1(t, e, n) {
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
        if (a[h] !== r[h] && !Vu(u, h))
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
    if (e[s] !== t[s] && !Vu(n, s))
      return !0;
  }
  return !1;
}
function D1({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const mf = "components", I1 = "directives";
function R1(t, e) {
  return gy(mf, t, !0, e) || t;
}
const $1 = Symbol.for("v-ndc");
function Eh(t) {
  return gy(I1, t);
}
function gy(t, e, n = !0, r = !1) {
  const i = ht || St;
  if (i) {
    const s = i.type;
    if (t === mf) {
      const o = Th(
        s,
        !1
      );
      if (o && (o === e || o === gn(e) || o === as(gn(e))))
        return s;
    }
    const a = Ld(i[t] || s[t], e) || Ld(i.appContext[t], e);
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
      `resolve${as(t.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Ld(t, e) {
  return t && (t[e] || t[gn(e)] || t[as(gn(e))]);
}
const F1 = (t) => t.__isSuspense;
function V1(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : oy(t);
}
const j1 = Symbol.for("v-scx"), G1 = () => {
  {
    const t = Gs(j1);
    return t || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function vn(t, e) {
  return Sh(t, null, e);
}
const Uo = {};
function et(t, e, n) {
  return process.env.NODE_ENV !== "production" && !me(e) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Sh(t, e, n);
}
function Sh(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  once: s,
  onTrack: a,
  onTrigger: o
} = Ke) {
  if (e && s) {
    const M = e;
    e = (...P) => {
      M(...P), N();
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
  const l = (M) => {
    q(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = St, f = (M) => r === !0 ? M : Ki(M, r === !1 ? 1 : void 0);
  let c, h = !1, d = !1;
  if (Ye(t) ? (c = () => t.value, h = ts(t)) : hr(t) ? (c = () => f(t), h = !0) : le(t) ? (d = !0, h = t.some((M) => hr(M) || ts(M)), c = () => t.map((M) => {
    if (Ye(M))
      return M.value;
    if (hr(M))
      return f(M);
    if (me(M))
      return Fr(M, u, 2);
    process.env.NODE_ENV !== "production" && l(M);
  })) : me(t) ? e ? c = () => Fr(t, u, 2) : c = () => (m && m(), Cn(
    t,
    u,
    3,
    [p]
  )) : (c = yt, process.env.NODE_ENV !== "production" && l(t)), e && r) {
    const M = c;
    c = () => Ki(M());
  }
  let m, p = (M) => {
    m = E.onStop = () => {
      Fr(M, u, 4), m = E.onStop = void 0;
    };
  }, g;
  if (Gu)
    if (p = yt, e ? n && Cn(e, u, 3, [
      c(),
      d ? [] : void 0,
      p
    ]) : c(), i === "sync") {
      const M = G1();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return yt;
  let y = d ? new Array(t.length).fill(Uo) : Uo;
  const v = () => {
    if (!(!E.active || !E.dirty))
      if (e) {
        const M = E.run();
        (r || h || (d ? M.some((P, I) => xi(P, y[I])) : xi(M, y))) && (m && m(), Cn(e, u, 3, [
          M,
          y === Uo ? void 0 : d && y[0] === Uo ? [] : y,
          p
        ]), y = M);
      } else
        E.run();
  };
  v.allowRecurse = !!e;
  let b;
  i === "sync" ? b = v : i === "post" ? b = () => on(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), b = () => Fu(v));
  const E = new ch(c, yt, b), O = $g(), N = () => {
    E.stop(), O && ah(O.effects, E);
  };
  return process.env.NODE_ENV !== "production" && (E.onTrack = a, E.onTrigger = o), e ? n ? v() : y = E.run() : i === "post" ? on(
    E.run.bind(E),
    u && u.suspense
  ) : E.run(), g && g.push(N), N;
}
function U1(t, e, n) {
  const r = this.proxy, i = rt(t) ? t.includes(".") ? yy(r, t) : () => r[t] : t.bind(r, r);
  let s;
  me(e) ? s = e : (s = e.handler, n = e);
  const a = yo(this), o = Sh(i, s.bind(r), n);
  return a(), o;
}
function yy(t, e) {
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
  else if (Cg(t) || Ji(t))
    t.forEach((i) => {
      Ki(i, e, n, r);
    });
  else if (Pg(t))
    for (const i in t)
      Ki(t[i], e, n, r);
  return t;
}
function vy(t) {
  yb(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function zl(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), t;
  const n = Uu(ht) || ht.proxy, r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Ke] = e[i];
    s && (me(s) && (s = {
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
    l && (Hr(), Cn(l, n, 8, [
      t.el,
      o,
      t,
      e
    ]), zr());
  }
}
const si = Symbol("_leaveCb"), Bo = Symbol("_enterCb");
function B1() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _n(() => {
    t.isMounted = !0;
  }), wy(() => {
    t.isUnmounting = !0;
  }), t;
}
const En = [Function, Array], _y = {
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
}, W1 = {
  name: "BaseTransition",
  props: _y,
  setup(t, { slots: e }) {
    const n = go(), r = B1();
    return () => {
      const i = e.default && Ey(e.default(), !0);
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
        return fc(s);
      const l = Pd(s);
      if (!l)
        return fc(s);
      const u = pf(
        l,
        a,
        r,
        n
      );
      gf(l, u);
      const f = n.subTree, c = f && Pd(f);
      if (c && c.type !== Nt && !Xi(l, c)) {
        const h = pf(
          c,
          a,
          r,
          n
        );
        if (gf(c, h), o === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, fc(s);
        o === "in-out" && l.type !== Nt && (h.delayLeave = (d, m, p) => {
          const g = by(
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
}, q1 = W1;
function by(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function pf(t, e, n, r) {
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
  } = e, b = String(t.key), E = by(n, t), O = (P, I) => {
    P && Cn(
      P,
      r,
      9,
      I
    );
  }, N = (P, I) => {
    const C = I[1];
    O(P, I), le(P) ? P.every((R) => R.length <= 1) && C() : P.length <= 1 && C();
  }, M = {
    mode: s,
    persisted: a,
    beforeEnter(P) {
      let I = o;
      if (!n.isMounted)
        if (i)
          I = p || o;
        else
          return;
      P[si] && P[si](
        !0
      );
      const C = E[b];
      C && Xi(t, C) && C.el[si] && C.el[si](), O(I, [P]);
    },
    enter(P) {
      let I = l, C = u, R = f;
      if (!n.isMounted)
        if (i)
          I = g || l, C = y || u, R = v || f;
        else
          return;
      let D = !1;
      const Q = P[Bo] = (ve) => {
        D || (D = !0, ve ? O(R, [P]) : O(C, [P]), M.delayedLeave && M.delayedLeave(), P[Bo] = void 0);
      };
      I ? N(I, [P, Q]) : Q();
    },
    leave(P, I) {
      const C = String(t.key);
      if (P[Bo] && P[Bo](
        !0
      ), n.isUnmounting)
        return I();
      O(c, [P]);
      let R = !1;
      const D = P[si] = (Q) => {
        R || (R = !0, I(), Q ? O(m, [P]) : O(d, [P]), P[si] = void 0, E[C] === t && delete E[C]);
      };
      E[C] = t, h ? N(h, [P, D]) : D();
    },
    clone(P) {
      return pf(P, e, n, r);
    }
  };
  return M;
}
function fc(t) {
  if (mo(t))
    return t = br(t), t.children = null, t;
}
function Pd(t) {
  if (!mo(t))
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
function gf(t, e) {
  t.shapeFlag & 6 && t.component ? gf(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ey(t, e = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
    a.type === Ge ? (a.patchFlag & 128 && i++, r = r.concat(
      Ey(a.children, e, o)
    )) : (e || a.type !== Nt) && r.push(o != null ? br(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function fe(t, e) {
  return me(t) ? /* @__PURE__ */ (() => Qe({ name: t.name }, e, { setup: t }))() : t;
}
const Aa = (t) => !!t.type.__asyncLoader, mo = (t) => t.type.__isKeepAlive;
function H1(t, e) {
  Sy(t, "a", e);
}
function z1(t, e) {
  Sy(t, "da", e);
}
function Sy(t, e, n = St) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (ju(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      mo(i.parent.vnode) && Y1(r, e, n, i), i = i.parent;
  }
}
function Y1(t, e, n, r) {
  const i = ju(
    e,
    t,
    r,
    !0
  );
  Li(() => {
    ah(r[e], i);
  }, n);
}
function ju(t, e, n = St, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      Hr();
      const o = yo(n), l = Cn(e, n, t, a);
      return o(), zr(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Hi(ph[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Yr = (t) => (e, n = St) => (!Gu || t === "sp") && ju(t, (...r) => e(...r), n), X1 = Yr("bm"), _n = Yr("m"), K1 = Yr("bu"), Z1 = Yr("u"), wy = Yr("bum"), Li = Yr("um"), J1 = Yr("sp"), Q1 = Yr(
  "rtg"
), eE = Yr(
  "rtc"
);
function tE(t, e = St) {
  ju("ec", t, e);
}
function kn(t, e, n, r) {
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
function xy(t, e, n = {}, r, i) {
  if (ht.isCE || ht.parent && Aa(ht.parent) && ht.parent.isCE)
    return e !== "default" && (n.name = e), ie("slot", n, r && r());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), k();
  const a = s && Oy(s(n)), o = Ue(
    Ge,
    {
      key: n.key || a && a.key || `_${e}`
    },
    a || (r ? r() : []),
    a && t._ === 1 ? 64 : -2
  );
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function Oy(t) {
  return t.some((e) => Zs(e) ? !(e.type === Nt || e.type === Ge && !Oy(e.children)) : !0) ? t : null;
}
const yf = (t) => t ? Hy(t) ? Uu(t) || t.proxy : yf(t.parent) : null, rs = /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? $r(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? $r(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? $r(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? $r(t.refs) : t.refs,
  $parent: (t) => yf(t.parent),
  $root: (t) => yf(t.root),
  $emit: (t) => t.emit,
  $options: (t) => xh(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    t.effect.dirty = !0, Fu(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = Wl.bind(t.proxy)),
  $watch: (t) => U1.bind(t)
}), wh = (t) => t === "_" || t === "$", hc = (t, e) => t !== Ke && !t.__isScriptSetup && Ae(t, e), My = {
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
        if (hc(r, e))
          return a[e] = 1, r[e];
        if (i !== Ke && Ae(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && Ae(u, e))
          return a[e] = 3, s[e];
        if (n !== Ke && Ae(n, e))
          return a[e] = 4, n[e];
        vf && (a[e] = 0);
      }
    }
    const f = rs[e];
    let c, h;
    if (f)
      return e === "$attrs" ? (It(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && Hl()) : process.env.NODE_ENV !== "production" && e === "$slots" && It(t, "get", e), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (n !== Ke && Ae(n, e))
      return a[e] = 4, n[e];
    if (h = l.config.globalProperties, Ae(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && ht && (!rt(e) || e.indexOf("__v") !== 0) && (i !== Ke && wh(e[0]) && Ae(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return hc(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && Ae(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Ke && Ae(r, e) ? (r[e] = n, !0) : Ae(t.props, e) ? (process.env.NODE_ENV !== "production" && q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && q(
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
    return !!n[a] || t !== Ke && Ae(t, a) || hc(e, a) || (o = s[0]) && Ae(o, a) || Ae(r, a) || Ae(rs, a) || Ae(i.config.globalProperties, a);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Ae(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (My.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function nE(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(rs).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => rs[n](t),
      set: yt
    });
  }), e;
}
function rE(t) {
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
function iE(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(_e(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (wh(r[0])) {
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
function kd(t) {
  return le(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function sE() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? q(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let vf = !0;
function aE(t) {
  const e = xh(t), n = t.proxy, r = t.ctx;
  vf = !1, e.beforeCreate && Ad(e.beforeCreate, t, "bc");
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
    render: O,
    renderTracked: N,
    renderTriggered: M,
    errorCaptured: P,
    serverPrefetch: I,
    expose: C,
    inheritAttrs: R,
    components: D,
    directives: Q,
    filters: ve
  } = e, T = process.env.NODE_ENV !== "production" ? sE() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = t.propsOptions;
    if (z)
      for (const K in z)
        T("Props", K);
  }
  if (u && oE(u, r, T), a)
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
    if (process.env.NODE_ENV !== "production" && oh(z) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(z))
      process.env.NODE_ENV !== "production" && q("data() should return an object.");
    else if (t.data = Ru(z), process.env.NODE_ENV !== "production")
      for (const K in z)
        T("Data", K), wh(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => z[K],
          set: yt
        });
  }
  if (vf = !0, s)
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
      Ty(o[z], r, n, z);
  if (l) {
    const z = me(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((K) => {
      Cy(K, z[K]);
    });
  }
  f && Ad(f, t, "c");
  function $(z, K) {
    le(K) ? K.forEach((Ce) => z(Ce.bind(n))) : K && z(K.bind(n));
  }
  if ($(X1, c), $(_n, h), $(K1, d), $(Z1, m), $(H1, p), $(z1, g), $(tE, P), $(eE, N), $(Q1, M), $(wy, v), $(Li, E), $(J1, I), le(C))
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
  O && t.render === yt && (t.render = O), R != null && (t.inheritAttrs = R), D && (t.components = D), Q && (t.directives = Q);
}
function oE(t, e, n = yt) {
  le(t) && (t = _f(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Be(i) ? "default" in i ? s = Gs(
      i.from || r,
      i.default,
      !0
    ) : s = Gs(i.from || r) : s = Gs(i), Ye(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ad(t, e, n) {
  Cn(
    le(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ty(t, e, n, r) {
  const i = r.includes(".") ? yy(n, r) : () => n[r];
  if (rt(t)) {
    const s = e[t];
    me(s) ? et(i, s) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (me(t))
    et(i, t.bind(n));
  else if (Be(t))
    if (le(t))
      t.forEach((s) => Ty(s, e, n, r));
    else {
      const s = me(t.handler) ? t.handler.bind(n) : e[t.handler];
      me(s) ? et(i, s, t) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && q(`Invalid watch option: "${r}"`, t);
}
function xh(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach(
    (u) => Yl(l, u, a, !0)
  ), Yl(l, e, a)), Be(e) && s.set(e, l), l;
}
function Yl(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Yl(t, s, n, !0), i && i.forEach(
    (a) => Yl(t, a, n, !0)
  );
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = lE[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const lE = {
  data: Dd,
  props: Id,
  emits: Id,
  methods: Ea,
  computed: Ea,
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
  components: Ea,
  directives: Ea,
  watch: cE,
  provide: Dd,
  inject: uE
};
function Dd(t, e) {
  return e ? t ? function() {
    return Qe(
      me(t) ? t.call(this, this) : t,
      me(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function uE(t, e) {
  return Ea(_f(t), _f(e));
}
function _f(t) {
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
function Ea(t, e) {
  return t ? Qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Id(t, e) {
  return t ? le(t) && le(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Qe(
    /* @__PURE__ */ Object.create(null),
    kd(t),
    kd(e != null ? e : {})
  ) : e;
}
function cE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Qe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Yt(t[r], e[r]);
  return n;
}
function Ny() {
  return {
    app: null,
    config: {
      isNativeTag: pb,
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
let fE = 0;
function hE(t, e) {
  return function(r, i = null) {
    me(r) || (r = Qe({}, r)), i != null && !Be(i) && (process.env.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const s = Ny(), a = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = s.app = {
      _uid: fE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: zd,
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
        return process.env.NODE_ENV !== "production" && Of(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && q(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && vy(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && q(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
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
              br(h),
              u,
              c
            );
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, S1(l, zd)), Uu(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, w1(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in s.provides && q(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = f, l;
      },
      runWithContext(u) {
        const f = js;
        js = l;
        try {
          return u();
        } finally {
          js = f;
        }
      }
    };
    return l;
  };
}
let js = null;
function Cy(t, e) {
  if (!St)
    process.env.NODE_ENV !== "production" && q("provide() can only be used inside setup().");
  else {
    let n = St.provides;
    const r = St.parent && St.parent.provides;
    r === n && (n = St.provides = Object.create(r)), n[t] = e;
  }
}
function Gs(t, e, n = !1) {
  const r = St || ht;
  if (r || js) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : js._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && me(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && q(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function dE() {
  return !!(St || ht || js);
}
const Ly = {}, Py = () => Object.create(Ly), ky = (t) => Object.getPrototypeOf(t) === Ly;
function mE(t, e, n, r = !1) {
  const i = {}, s = Py();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Ay(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && Iy(e || {}, i, t), n ? t.props = r ? i : t1(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function pE(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function gE(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = _e(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && pE(t)) && (r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (Vu(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (Ae(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const m = gn(h);
            i[m] = bf(
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
    Ay(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !Ae(e, c) && ((f = un(c)) === c || !Ae(e, f))) && (l ? n && (n[c] !== void 0 || n[f] !== void 0) && (i[c] = bf(
        l,
        o,
        c,
        void 0,
        t,
        !0
      )) : delete i[c]);
    if (s !== o)
      for (const c in s)
        (!e || !Ae(e, c) && !0) && (delete s[c], u = !0);
  }
  u && fr(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && Iy(e || {}, i, t);
}
function Ay(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (Pa(l))
        continue;
      const u = e[l];
      let f;
      i && Ae(i, f = gn(l)) ? !s || !s.includes(f) ? n[f] = u : (o || (o = {}))[f] = u : Vu(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = _e(n), u = o || Ke;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = bf(
        i,
        l,
        c,
        u[c],
        t,
        !Ae(u, c)
      );
    }
  }
  return a;
}
function bf(t, e, n, r, i, s) {
  const a = t[n];
  if (a != null) {
    const o = Ae(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && me(l)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const f = yo(i);
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
function Dy(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!me(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = Dy(c, e, !0);
      Qe(a, h), d && o.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return Be(t) && r.set(t, Fs), Fs;
  if (le(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !rt(s[f]) && q("props must be strings when using array syntax.", s[f]);
      const c = gn(s[f]);
      Rd(c) && (a[c] = Ke);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Be(s) && q("invalid props options", s);
    for (const f in s) {
      const c = gn(f);
      if (Rd(c)) {
        const h = s[f], d = a[c] = le(h) || me(h) ? { type: h } : Qe({}, h);
        if (d) {
          const m = Fd(Boolean, d.type), p = Fd(String, d.type);
          d[0] = m > -1, d[1] = p < 0 || m < p, (m > -1 || Ae(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return Be(t) && r.set(t, u), u;
}
function Rd(t) {
  return t[0] !== "$" && !Pa(t) ? !0 : (process.env.NODE_ENV !== "production" && q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Ef(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function $d(t, e) {
  return Ef(t) === Ef(e);
}
function Fd(t, e) {
  return le(e) ? e.findIndex((n) => $d(n, t)) : me(e) && $d(e, t) ? 0 : -1;
}
function Iy(t, e, n) {
  const r = _e(e), i = n.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && yE(
      s,
      r[s],
      a,
      process.env.NODE_ENV !== "production" ? $r(r) : r,
      !Ae(t, s) && !Ae(t, un(s))
    );
  }
}
function yE(t, e, n, r, i) {
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
        const { valid: d, expectedType: m } = _E(e, f[h]);
        c.push(m || ""), u = d;
      }
      if (!u) {
        q(bE(t, e, c));
        return;
      }
    }
    o && !o(e, r) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const vE = /* @__PURE__ */ qr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function _E(t, e) {
  let n;
  const r = Ef(e);
  if (vE(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Be(t) : r === "Array" ? n = le(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function bE(t, e, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(as).join(" | ")}`;
  const i = n[0], s = lh(e), a = Vd(e, i), o = Vd(e, s);
  return n.length === 1 && jd(i) && !EE(i, s) && (r += ` with value ${a}`), r += `, got ${s} `, jd(s) && (r += `with value ${o}.`), r;
}
function Vd(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function jd(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function EE(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Ry = (t) => t[0] === "_" || t === "$stable", Oh = (t) => le(t) ? t.map(Wn) : [Wn(t)], SE = (t, e, n) => {
  if (e._n)
    return e;
  const r = _i((...i) => (process.env.NODE_ENV !== "production" && St && (!n || n.root === St.root) && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Oh(e(...i))), n);
  return r._c = !1, r;
}, $y = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Ry(i))
      continue;
    const s = t[i];
    if (me(s))
      e[i] = SE(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Oh(s);
      e[i] = () => a;
    }
  }
}, Fy = (t, e) => {
  process.env.NODE_ENV !== "production" && !mo(t.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Oh(e);
  t.slots.default = () => n;
}, wE = (t, e) => {
  const n = t.slots = Py();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (Qe(n, e), kg(n, "_", r)) : $y(e, n);
  } else
    e && Fy(t, e);
}, xE = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, a = Ke;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && vi ? (Qe(i, e), fr(t, "set", "$slots")) : n && o === 1 ? s = !1 : (Qe(i, e), !n && o === 1 && delete i._) : (s = !e.$stable, $y(e, i)), a = e;
  } else
    e && (Fy(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !Ry(o) && a[o] == null && delete i[o];
};
function Sf(t, e, n, r, i = !1) {
  if (le(t)) {
    t.forEach(
      (h, d) => Sf(
        h,
        e && (le(e) ? e[d] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Aa(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Uu(r.component) || r.component.proxy : r.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, f = o.refs === Ke ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (rt(u) ? (f[u] = null, Ae(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), me(l))
    Fr(l, o, 12, [a, f]);
  else {
    const h = rt(l), d = Ye(l);
    if (h || d) {
      const m = () => {
        if (t.f) {
          const p = h ? Ae(c, l) ? c[l] : f[l] : l.value;
          i ? le(p) && ah(p, s) : le(p) ? p.includes(s) || p.push(s) : h ? (f[l] = [s], Ae(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, Ae(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (m.id = -1, on(m, n)) : m();
    } else
      process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let fa, ci;
function Ar(t, e) {
  t.appContext.config.performance && Xl() && ci.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && T1(t, e, Xl() ? ci.now() : Date.now());
}
function Dr(t, e) {
  if (t.appContext.config.performance && Xl()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    ci.mark(r), ci.measure(
      `<${Bu(t, t.type)}> ${e}`,
      n,
      r
    ), ci.clearMarks(n), ci.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && N1(t, e, Xl() ? ci.now() : Date.now());
}
function Xl() {
  return fa !== void 0 || (typeof window < "u" && window.performance ? (fa = !0, ci = window.performance) : fa = !1), fa;
}
function OE() {
  const t = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && t.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Au().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const on = V1;
function ME(t) {
  return TE(t);
}
function TE(t, e) {
  OE();
  const n = Au();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && vh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = t, p = (_, S, A, V = null, j = null, W = null, Z = void 0, B = null, X = process.env.NODE_ENV !== "production" && vi ? !1 : !!S.dynamicChildren) => {
    if (_ === S)
      return;
    _ && !Xi(_, S) && (V = tn(_), Te(_, j, W, !0), _ = null), S.patchFlag === -2 && (X = !1, S.dynamicChildren = null);
    const { type: U, ref: ne, shapeFlag: ue } = S;
    switch (U) {
      case po:
        g(_, S, A, V);
        break;
      case Nt:
        y(_, S, A, V);
        break;
      case El:
        _ == null ? v(S, A, V, Z) : process.env.NODE_ENV !== "production" && b(_, S, A, Z);
        break;
      case Ge:
        Q(
          _,
          S,
          A,
          V,
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
          A,
          V,
          j,
          W,
          Z,
          B,
          X
        ) : ue & 6 ? ve(
          _,
          S,
          A,
          V,
          j,
          W,
          Z,
          B,
          X
        ) : ue & 64 || ue & 128 ? U.process(
          _,
          S,
          A,
          V,
          j,
          W,
          Z,
          B,
          X,
          Lt
        ) : process.env.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    ne != null && j && Sf(ne, _ && _.ref, W, S || _, !S);
  }, g = (_, S, A, V) => {
    if (_ == null)
      r(
        S.el = o(S.children),
        A,
        V
      );
    else {
      const j = S.el = _.el;
      S.children !== _.children && u(j, S.children);
    }
  }, y = (_, S, A, V) => {
    _ == null ? r(
      S.el = l(S.children || ""),
      A,
      V
    ) : S.el = _.el;
  }, v = (_, S, A, V) => {
    [_.el, _.anchor] = m(
      _.children,
      S,
      A,
      V,
      _.el,
      _.anchor
    );
  }, b = (_, S, A, V) => {
    if (S.children !== _.children) {
      const j = h(_.anchor);
      O(_), [S.el, S.anchor] = m(
        S.children,
        A,
        j,
        V
      );
    } else
      S.el = _.el, S.anchor = _.anchor;
  }, E = ({ el: _, anchor: S }, A, V) => {
    let j;
    for (; _ && _ !== S; )
      j = h(_), r(_, A, V), _ = j;
    r(S, A, V);
  }, O = ({ el: _, anchor: S }) => {
    let A;
    for (; _ && _ !== S; )
      A = h(_), i(_), _ = A;
    i(S);
  }, N = (_, S, A, V, j, W, Z, B, X) => {
    S.type === "svg" ? Z = "svg" : S.type === "math" && (Z = "mathml"), _ == null ? M(
      S,
      A,
      V,
      j,
      W,
      Z,
      B,
      X
    ) : C(
      _,
      S,
      j,
      W,
      Z,
      B,
      X
    );
  }, M = (_, S, A, V, j, W, Z, B) => {
    let X, U;
    const { props: ne, shapeFlag: ue, transition: ae, dirs: he } = _;
    if (X = _.el = a(
      _.type,
      W,
      ne && ne.is,
      ne
    ), ue & 8 ? f(X, _.children) : ue & 16 && I(
      _.children,
      X,
      null,
      V,
      j,
      dc(_, W),
      Z,
      B
    ), he && Ri(_, null, V, "created"), P(X, _, _.scopeId, Z, V), ne) {
      for (const $e in ne)
        $e !== "value" && !Pa($e) && s(
          X,
          $e,
          null,
          ne[$e],
          W,
          _.children,
          V,
          j,
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
    })), he && Ri(_, null, V, "beforeMount");
    const xe = NE(j, ae);
    xe && ae.beforeEnter(X), r(X, S, A), ((U = ne && ne.onVnodeMounted) || xe || he) && on(() => {
      U && nr(U, V, _), xe && ae.enter(X), he && Ri(_, null, V, "mounted");
    }, j);
  }, P = (_, S, A, V, j) => {
    if (A && d(_, A), V)
      for (let W = 0; W < V.length; W++)
        d(_, V[W]);
    if (j) {
      let W = j.subTree;
      if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = bh(W.children) || W), S === W) {
        const Z = j.vnode;
        P(
          _,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          j.parent
        );
      }
    }
  }, I = (_, S, A, V, j, W, Z, B, X = 0) => {
    for (let U = X; U < _.length; U++) {
      const ne = _[U] = B ? ai(_[U]) : Wn(_[U]);
      p(
        null,
        ne,
        S,
        A,
        V,
        j,
        W,
        Z,
        B
      );
    }
  }, C = (_, S, A, V, j, W, Z) => {
    const B = S.el = _.el;
    let { patchFlag: X, dynamicChildren: U, dirs: ne } = S;
    X |= _.patchFlag & 16;
    const ue = _.props || Ke, ae = S.props || Ke;
    let he;
    if (A && $i(A, !1), (he = ae.onVnodeBeforeUpdate) && nr(he, A, S, _), ne && Ri(S, _, A, "beforeUpdate"), A && $i(A, !0), process.env.NODE_ENV !== "production" && vi && (X = 0, Z = !1, U = null), U ? (R(
      _.dynamicChildren,
      U,
      B,
      A,
      V,
      dc(S, j),
      W
    ), process.env.NODE_ENV !== "production" && Da(_, S)) : Z || Ce(
      _,
      S,
      B,
      null,
      A,
      V,
      dc(S, j),
      W,
      !1
    ), X > 0) {
      if (X & 16)
        D(
          B,
          S,
          ue,
          ae,
          A,
          V,
          j
        );
      else if (X & 2 && ue.class !== ae.class && s(B, "class", null, ae.class, j), X & 4 && s(B, "style", ue.style, ae.style, j), X & 8) {
        const xe = S.dynamicProps;
        for (let $e = 0; $e < xe.length; $e++) {
          const Je = xe[$e], mt = ue[Je], zt = ae[Je];
          (zt !== mt || Je === "value") && s(
            B,
            Je,
            mt,
            zt,
            j,
            _.children,
            A,
            V,
            De
          );
        }
      }
      X & 1 && _.children !== S.children && f(B, S.children);
    } else
      !Z && U == null && D(
        B,
        S,
        ue,
        ae,
        A,
        V,
        j
      );
    ((he = ae.onVnodeUpdated) || ne) && on(() => {
      he && nr(he, A, S, _), ne && Ri(S, _, A, "updated");
    }, V);
  }, R = (_, S, A, V, j, W, Z) => {
    for (let B = 0; B < S.length; B++) {
      const X = _[B], U = S[B], ne = X.el && (X.type === Ge || !Xi(X, U) || X.shapeFlag & 70) ? c(X.el) : A;
      p(
        X,
        U,
        ne,
        null,
        V,
        j,
        W,
        Z,
        !0
      );
    }
  }, D = (_, S, A, V, j, W, Z) => {
    if (A !== V) {
      if (A !== Ke)
        for (const B in A)
          !Pa(B) && !(B in V) && s(
            _,
            B,
            A[B],
            null,
            Z,
            S.children,
            j,
            W,
            De
          );
      for (const B in V) {
        if (Pa(B))
          continue;
        const X = V[B], U = A[B];
        X !== U && B !== "value" && s(
          _,
          B,
          U,
          X,
          Z,
          S.children,
          j,
          W,
          De
        );
      }
      "value" in V && s(_, "value", A.value, V.value, Z);
    }
  }, Q = (_, S, A, V, j, W, Z, B, X) => {
    const U = S.el = _ ? _.el : o(""), ne = S.anchor = _ ? _.anchor : o("");
    let { patchFlag: ue, dynamicChildren: ae, slotScopeIds: he } = S;
    process.env.NODE_ENV !== "production" && (vi || ue & 2048) && (ue = 0, X = !1, ae = null), he && (B = B ? B.concat(he) : he), _ == null ? (r(U, A, V), r(ne, A, V), I(
      S.children || [],
      A,
      ne,
      j,
      W,
      Z,
      B,
      X
    )) : ue > 0 && ue & 64 && ae && _.dynamicChildren ? (R(
      _.dynamicChildren,
      ae,
      A,
      j,
      W,
      Z,
      B
    ), process.env.NODE_ENV !== "production" ? Da(_, S) : (S.key != null || j && S === j.subTree) && Da(
      _,
      S,
      !0
    )) : Ce(
      _,
      S,
      A,
      ne,
      j,
      W,
      Z,
      B,
      X
    );
  }, ve = (_, S, A, V, j, W, Z, B, X) => {
    S.slotScopeIds = B, _ == null ? S.shapeFlag & 512 ? j.ctx.activate(
      S,
      A,
      V,
      Z,
      X
    ) : T(
      S,
      A,
      V,
      j,
      W,
      Z,
      X
    ) : $(_, S, X);
  }, T = (_, S, A, V, j, W, Z) => {
    const B = _.component = VE(
      _,
      V,
      j
    );
    if (process.env.NODE_ENV !== "production" && B.type.__hmrId && v1(B), process.env.NODE_ENV !== "production" && (_l(_), Ar(B, "mount")), mo(_) && (B.ctx.renderer = Lt), process.env.NODE_ENV !== "production" && Ar(B, "init"), GE(B), process.env.NODE_ENV !== "production" && Dr(B, "init"), B.asyncDep) {
      if (j && j.registerDep(B, z), !_.el) {
        const X = B.subTree = ie(Nt);
        y(null, X, S, A);
      }
    } else
      z(
        B,
        _,
        S,
        A,
        j,
        W,
        Z
      );
    process.env.NODE_ENV !== "production" && (bl(), Dr(B, "mount"));
  }, $ = (_, S, A) => {
    const V = S.component = _.component;
    if (A1(_, S, A))
      if (V.asyncDep && !V.asyncResolved) {
        process.env.NODE_ENV !== "production" && _l(S), K(V, S, A), process.env.NODE_ENV !== "production" && bl();
        return;
      } else
        V.next = S, g1(V.update), V.effect.dirty = !0, V.update();
    else
      S.el = _.el, V.vnode = S;
  }, z = (_, S, A, V, j, W, Z) => {
    const B = () => {
      if (_.isMounted) {
        let { next: ne, bu: ue, u: ae, parent: he, vnode: xe } = _;
        {
          const Nr = Vy(_);
          if (Nr) {
            ne && (ne.el = xe.el, K(_, ne, Z)), Nr.asyncDep.then(() => {
              _.isUnmounted || B();
            });
            return;
          }
        }
        let $e = ne, Je;
        process.env.NODE_ENV !== "production" && _l(ne || _.vnode), $i(_, !1), ne ? (ne.el = xe.el, K(_, ne, Z)) : ne = xe, ue && ca(ue), (Je = ne.props && ne.props.onVnodeBeforeUpdate) && nr(Je, he, ne, xe), $i(_, !0), process.env.NODE_ENV !== "production" && Ar(_, "render");
        const mt = cc(_);
        process.env.NODE_ENV !== "production" && Dr(_, "render");
        const zt = _.subTree;
        _.subTree = mt, process.env.NODE_ENV !== "production" && Ar(_, "patch"), p(
          zt,
          mt,
          c(zt.el),
          tn(zt),
          _,
          j,
          W
        ), process.env.NODE_ENV !== "production" && Dr(_, "patch"), ne.el = mt.el, $e === null && D1(_, mt.el), ae && on(ae, j), (Je = ne.props && ne.props.onVnodeUpdated) && on(
          () => nr(Je, he, ne, xe),
          j
        ), process.env.NODE_ENV !== "production" && fy(_), process.env.NODE_ENV !== "production" && bl();
      } else {
        let ne;
        const { el: ue, props: ae } = S, { bm: he, m: xe, parent: $e } = _, Je = Aa(S);
        if ($i(_, !1), he && ca(he), !Je && (ne = ae && ae.onVnodeBeforeMount) && nr(ne, $e, S), $i(_, !0), ue && Tr) {
          const mt = () => {
            process.env.NODE_ENV !== "production" && Ar(_, "render"), _.subTree = cc(_), process.env.NODE_ENV !== "production" && Dr(_, "render"), process.env.NODE_ENV !== "production" && Ar(_, "hydrate"), Tr(
              ue,
              _.subTree,
              _,
              j,
              null
            ), process.env.NODE_ENV !== "production" && Dr(_, "hydrate");
          };
          Je ? S.type.__asyncLoader().then(
            () => !_.isUnmounted && mt()
          ) : mt();
        } else {
          process.env.NODE_ENV !== "production" && Ar(_, "render");
          const mt = _.subTree = cc(_);
          process.env.NODE_ENV !== "production" && Dr(_, "render"), process.env.NODE_ENV !== "production" && Ar(_, "patch"), p(
            null,
            mt,
            A,
            V,
            _,
            j,
            W
          ), process.env.NODE_ENV !== "production" && Dr(_, "patch"), S.el = mt.el;
        }
        if (xe && on(xe, j), !Je && (ne = ae && ae.onVnodeMounted)) {
          const mt = S;
          on(
            () => nr(ne, $e, mt),
            j
          );
        }
        (S.shapeFlag & 256 || $e && Aa($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && on(_.a, j), _.isMounted = !0, process.env.NODE_ENV !== "production" && x1(_), S = A = V = null;
      }
    }, X = _.effect = new ch(
      B,
      yt,
      () => Fu(U),
      _.scope
    ), U = _.update = () => {
      X.dirty && X.run();
    };
    U.id = _.uid, $i(_, !0), process.env.NODE_ENV !== "production" && (X.onTrack = _.rtc ? (ne) => ca(_.rtc, ne) : void 0, X.onTrigger = _.rtg ? (ne) => ca(_.rtg, ne) : void 0, U.ownerInstance = _), U();
  }, K = (_, S, A) => {
    S.component = _;
    const V = _.vnode.props;
    _.vnode = S, _.next = null, gE(_, S.props, V, A), xE(_, S.children, A), Hr(), Md(_), zr();
  }, Ce = (_, S, A, V, j, W, Z, B, X = !1) => {
    const U = _ && _.children, ne = _ ? _.shapeFlag : 0, ue = S.children, { patchFlag: ae, shapeFlag: he } = S;
    if (ae > 0) {
      if (ae & 128) {
        dt(
          U,
          ue,
          A,
          V,
          j,
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
          A,
          V,
          j,
          W,
          Z,
          B,
          X
        );
        return;
      }
    }
    he & 8 ? (ne & 16 && De(U, j, W), ue !== U && f(A, ue)) : ne & 16 ? he & 16 ? dt(
      U,
      ue,
      A,
      V,
      j,
      W,
      Z,
      B,
      X
    ) : De(U, j, W, !0) : (ne & 8 && f(A, ""), he & 16 && I(
      ue,
      A,
      V,
      j,
      W,
      Z,
      B,
      X
    ));
  }, Pe = (_, S, A, V, j, W, Z, B, X) => {
    _ = _ || Fs, S = S || Fs;
    const U = _.length, ne = S.length, ue = Math.min(U, ne);
    let ae;
    for (ae = 0; ae < ue; ae++) {
      const he = S[ae] = X ? ai(S[ae]) : Wn(S[ae]);
      p(
        _[ae],
        he,
        A,
        null,
        j,
        W,
        Z,
        B,
        X
      );
    }
    U > ne ? De(
      _,
      j,
      W,
      !0,
      !1,
      ue
    ) : I(
      S,
      A,
      V,
      j,
      W,
      Z,
      B,
      X,
      ue
    );
  }, dt = (_, S, A, V, j, W, Z, B, X) => {
    let U = 0;
    const ne = S.length;
    let ue = _.length - 1, ae = ne - 1;
    for (; U <= ue && U <= ae; ) {
      const he = _[U], xe = S[U] = X ? ai(S[U]) : Wn(S[U]);
      if (Xi(he, xe))
        p(
          he,
          xe,
          A,
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
    for (; U <= ue && U <= ae; ) {
      const he = _[ue], xe = S[ae] = X ? ai(S[ae]) : Wn(S[ae]);
      if (Xi(he, xe))
        p(
          he,
          xe,
          A,
          null,
          j,
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
            A,
            xe,
            j,
            W,
            Z,
            B,
            X
          ), U++;
      }
    } else if (U > ae)
      for (; U <= ue; )
        Te(_[U], j, W, !0), U++;
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
      let Nr = !1, Di = 0;
      const tr = new Array(zt);
      for (U = 0; U < zt; U++)
        tr[U] = 0;
      for (U = he; U <= ue; U++) {
        const ut = _[U];
        if (mt >= zt) {
          Te(ut, j, W, !0);
          continue;
        }
        let nn;
        if (ut.key != null)
          nn = $e.get(ut.key);
        else
          for (Je = xe; Je <= ae; Je++)
            if (tr[Je - xe] === 0 && Xi(ut, S[Je])) {
              nn = Je;
              break;
            }
        nn === void 0 ? Te(ut, j, W, !0) : (tr[nn - xe] = U + 1, nn >= Di ? Di = nn : Nr = !0, p(
          ut,
          S[nn],
          A,
          null,
          j,
          W,
          Z,
          B,
          X
        ), mt++);
      }
      const bn = Nr ? CE(tr) : Fs;
      for (Je = bn.length - 1, U = zt - 1; U >= 0; U--) {
        const ut = xe + U, nn = S[ut], vs = ut + 1 < ne ? S[ut + 1].el : V;
        tr[U] === 0 ? p(
          null,
          nn,
          A,
          vs,
          j,
          W,
          Z,
          B,
          X
        ) : Nr && (Je < 0 || U !== bn[Je] ? Rt(nn, A, vs, 2) : Je--);
      }
    }
  }, Rt = (_, S, A, V, j = null) => {
    const { el: W, type: Z, transition: B, children: X, shapeFlag: U } = _;
    if (U & 6) {
      Rt(_.component.subTree, S, A, V);
      return;
    }
    if (U & 128) {
      _.suspense.move(S, A, V);
      return;
    }
    if (U & 64) {
      Z.move(_, S, A, Lt);
      return;
    }
    if (Z === Ge) {
      r(W, S, A);
      for (let ue = 0; ue < X.length; ue++)
        Rt(X[ue], S, A, V);
      r(_.anchor, S, A);
      return;
    }
    if (Z === El) {
      E(_, S, A);
      return;
    }
    if (V !== 2 && U & 1 && B)
      if (V === 0)
        B.beforeEnter(W), r(W, S, A), on(() => B.enter(W), j);
      else {
        const { leave: ue, delayLeave: ae, afterLeave: he } = B, xe = () => r(W, S, A), $e = () => {
          ue(W, () => {
            xe(), he && he();
          });
        };
        ae ? ae(W, xe, $e) : $e();
      }
    else
      r(W, S, A);
  }, Te = (_, S, A, V = !1, j = !1) => {
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
    if (B != null && Sf(B, null, A, _, !0), ne & 256) {
      S.ctx.deactivate(_);
      return;
    }
    const he = ne & 1 && ae, xe = !Aa(_);
    let $e;
    if (xe && ($e = Z && Z.onVnodeBeforeUnmount) && nr($e, S, _), ne & 6)
      Jn(_.component, A, V);
    else {
      if (ne & 128) {
        _.suspense.unmount(A, V);
        return;
      }
      he && Ri(_, null, S, "beforeUnmount"), ne & 64 ? _.type.remove(
        _,
        S,
        A,
        j,
        Lt,
        V
      ) : U && (W !== Ge || ue > 0 && ue & 64) ? De(
        U,
        S,
        A,
        !1,
        !0
      ) : (W === Ge && ue & 384 || !j && ne & 16) && De(X, S, A), V && Ct(_);
    }
    (xe && ($e = Z && Z.onVnodeUnmounted) || he) && on(() => {
      $e && nr($e, S, _), he && Ri(_, null, S, "unmounted");
    }, A);
  }, Ct = (_) => {
    const { type: S, el: A, anchor: V, transition: j } = _;
    if (S === Ge) {
      process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && j && !j.persisted ? _.children.forEach((Z) => {
        Z.type === Nt ? i(Z.el) : Ct(Z);
      }) : it(A, V);
      return;
    }
    if (S === El) {
      O(_);
      return;
    }
    const W = () => {
      i(A), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (_.shapeFlag & 1 && j && !j.persisted) {
      const { leave: Z, delayLeave: B } = j, X = () => Z(A, W);
      B ? B(_.el, W, X) : X();
    } else
      W();
  }, it = (_, S) => {
    let A;
    for (; _ !== S; )
      A = h(_), i(_), _ = A;
    i(S);
  }, Jn = (_, S, A) => {
    process.env.NODE_ENV !== "production" && _.type.__hmrId && _1(_);
    const { bum: V, scope: j, update: W, subTree: Z, um: B } = _;
    V && ca(V), j.stop(), W && (W.active = !1, Te(Z, _, S, A)), B && on(B, S), on(() => {
      _.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), process.env.NODE_ENV !== "production" && M1(_);
  }, De = (_, S, A, V = !1, j = !1, W = 0) => {
    for (let Z = W; Z < _.length; Z++)
      Te(_[Z], S, A, V, j);
  }, tn = (_) => _.shapeFlag & 6 ? tn(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : h(_.anchor || _.el);
  let Qn = !1;
  const Mr = (_, S, A) => {
    _ == null ? S._vnode && Te(S._vnode, null, null, !0) : p(
      S._vnode || null,
      _,
      S,
      null,
      null,
      null,
      A
    ), Qn || (Qn = !0, Md(), ly(), Qn = !1), S._vnode = _;
  }, Lt = {
    p,
    um: Te,
    m: Rt,
    r: Ct,
    mt: T,
    mc: I,
    pc: Ce,
    pbc: R,
    n: tn,
    o: t
  };
  let er, Tr;
  return e && ([er, Tr] = e(
    Lt
  )), {
    render: Mr,
    hydrate: er,
    createApp: hE(Mr, er)
  };
}
function dc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function $i({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function NE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Da(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (le(r) && le(i))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = ai(i[s]), o.el = a.el), n || Da(a, o)), o.type === po && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Nt && !o.el && (o.el = a.el);
    }
}
function CE(t) {
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
function Vy(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Vy(e);
}
const LE = (t) => t.__isTeleport, Us = (t) => t && (t.disabled || t.disabled === ""), Gd = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Ud = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, wf = (t, e) => {
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
    return process.env.NODE_ENV !== "production" && !n && !Us(t) && q(`Invalid Teleport target: ${n}`), n;
}, PE = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, n, r, i, s, a, o, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: h,
      o: { insert: d, querySelector: m, createText: p, createComment: g }
    } = u, y = Us(e.props);
    let { shapeFlag: v, children: b, dynamicChildren: E } = e;
    if (process.env.NODE_ENV !== "production" && vi && (l = !1, E = null), t == null) {
      const O = e.el = process.env.NODE_ENV !== "production" ? g("teleport start") : p(""), N = e.anchor = process.env.NODE_ENV !== "production" ? g("teleport end") : p("");
      d(O, n, r), d(N, n, r);
      const M = e.target = wf(e.props, m), P = e.targetAnchor = p("");
      M ? (d(P, M), a === "svg" || Gd(M) ? a = "svg" : (a === "mathml" || Ud(M)) && (a = "mathml")) : process.env.NODE_ENV !== "production" && !y && q("Invalid Teleport target on mount:", M, `(${typeof M})`);
      const I = (C, R) => {
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
      y ? I(n, N) : M && I(M, P);
    } else {
      e.el = t.el;
      const O = e.anchor = t.anchor, N = e.target = t.target, M = e.targetAnchor = t.targetAnchor, P = Us(t.props), I = P ? n : N, C = P ? O : M;
      if (a === "svg" || Gd(N) ? a = "svg" : (a === "mathml" || Ud(N)) && (a = "mathml"), E ? (h(
        t.dynamicChildren,
        E,
        I,
        i,
        s,
        a,
        o
      ), Da(t, e, !0)) : l || c(
        t,
        e,
        I,
        C,
        i,
        s,
        a,
        o,
        !1
      ), y)
        P ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Wo(
          e,
          n,
          O,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const R = e.target = wf(
          e.props,
          m
        );
        R ? Wo(
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
        P && Wo(
          e,
          N,
          M,
          u,
          1
        );
    }
    Gy(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), a && s(u), o & 16) {
      const d = a || !Us(h);
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
  move: Wo,
  hydrate: kE
};
function Wo(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: f } = t, c = s === 2;
  if (c && r(a, e, n), (!c || Us(f)) && l & 16)
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
  const f = e.target = wf(
    e.props,
    l
  );
  if (f) {
    const c = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (Us(e.props))
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
    Gy(e);
  }
  return e.anchor && a(e.anchor);
}
const jy = PE;
function Gy(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n && n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const Ge = Symbol.for("v-fgt"), po = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), El = Symbol.for("v-stc"), Ia = [];
let Hn = null;
function k(t = !1) {
  Ia.push(Hn = t ? null : []);
}
function AE() {
  Ia.pop(), Hn = Ia[Ia.length - 1] || null;
}
let Ja = 1;
function Bd(t) {
  Ja += t;
}
function Uy(t) {
  return t.dynamicChildren = Ja > 0 ? Hn || Fs : null, AE(), Ja > 0 && Hn && Hn.push(t), t;
}
function G(t, e, n, r, i, s) {
  return Uy(
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
  return Uy(
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
function Zs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Xi(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && Ns.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const DE = (...t) => Wy(
  ...t
), By = ({ key: t }) => t != null ? t : null, Sl = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? rt(t) || Ye(t) || me(t) ? { i: ht, r: t, k: e, f: !!n } : t : null);
function L(t, e = null, n = null, r = 0, i = null, s = t === Ge ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && By(e),
    ref: e && Sl(e),
    scopeId: my,
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
  return o ? (Mh(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= rt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), Ja > 0 && !a && Hn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Hn.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? DE : Wy;
function Wy(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === $1) && (process.env.NODE_ENV !== "production" && !t && q(`Invalid vnode type when creating vnode: ${t}.`), t = Nt), Zs(t)) {
    const o = br(
      t,
      e,
      !0
    );
    return n && Mh(o, n), Ja > 0 && !s && Hn && (o.shapeFlag & 6 ? Hn[Hn.indexOf(t)] = o : Hn.push(o)), o.patchFlag |= -2, o;
  }
  if (Yy(t) && (t = t.__vccOpts), e) {
    e = IE(e);
    let { class: o, style: l } = e;
    o && !rt(o) && (e.class = ke(o)), Be(l) && (Bl(l) && !le(l) && (l = Qe({}, l)), e.style = Ci(l));
  }
  const a = rt(t) ? 1 : F1(t) ? 128 : LE(t) ? 64 : Be(t) ? 4 : me(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Bl(t) && (t = _e(t), q(
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
function IE(t) {
  return t ? Bl(t) || ky(t) ? Qe({}, t) : t : null;
}
function br(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: a } = t, o = e ? RE(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && By(o),
    ref: e && e.ref ? n && i ? le(i) ? i.concat(Sl(e)) : [i, Sl(e)] : Sl(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && le(a) ? a.map(qy) : a,
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
    ssContent: t.ssContent && br(t.ssContent),
    ssFallback: t.ssFallback && br(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function qy(t) {
  const e = br(t);
  return le(t.children) && (e.children = t.children.map(qy)), e;
}
function Kl(t = " ", e = 0) {
  return ie(po, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (k(), Ue(Nt, null, t)) : ie(Nt, null, t);
}
function Wn(t) {
  return t == null || typeof t == "boolean" ? ie(Nt) : le(t) ? ie(
    Ge,
    null,
    t.slice()
  ) : typeof t == "object" ? ai(t) : ie(po, null, String(t));
}
function ai(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : br(t);
}
function Mh(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (le(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Mh(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !ky(e) ? e._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    me(e) ? (e = { default: e, _ctx: ht }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Kl(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function RE(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = ke([e.class, r.class]));
      else if (i === "style")
        e.style = Ci([e.style, r.style]);
      else if (co(i)) {
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
const $E = Ny();
let FE = 0;
function VE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || $E, s = {
    uid: FE++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ig(
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
    propsOptions: Dy(r, i),
    emitsOptions: dy(r, i),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = nE(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = L1.bind(null, s), t.ce && t.ce(s), s;
}
let St = null;
const go = () => St || ht;
let Zl, xf;
{
  const t = Au(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  Zl = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => St = n
  ), xf = e(
    "__VUE_SSR_SETTERS__",
    (n) => Gu = n
  );
}
const yo = (t) => {
  const e = St;
  return Zl(t), t.scope.on(), () => {
    t.scope.off(), Zl(e);
  };
}, Wd = () => {
  St && St.scope.off(), Zl(null);
}, jE = /* @__PURE__ */ qr("slot,component");
function Of(t, { isNativeTag: e }) {
  (jE(t) || e(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Hy(t) {
  return t.vnode.shapeFlag & 4;
}
let Gu = !1;
function GE(t, e = !1) {
  e && xf(e);
  const { props: n, children: r } = t.vnode, i = Hy(t);
  mE(t, n, i, e), wE(t, r);
  const s = i ? UE(t, e) : void 0;
  return e && xf(!1), s;
}
function UE(t, e) {
  var n;
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Of(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let a = 0; a < s.length; a++)
        Of(s[a], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let a = 0; a < s.length; a++)
        vy(s[a]);
    }
    r.compilerOptions && BE() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, My), process.env.NODE_ENV !== "production" && rE(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? qE(t) : null, a = yo(t);
    Hr();
    const o = Fr(
      i,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? $r(t.props) : t.props,
        s
      ]
    );
    if (zr(), a(), oh(o)) {
      if (o.then(Wd, Wd), e)
        return o.then((l) => {
          qd(t, l, e);
        }).catch((l) => {
          fo(l, t, 0);
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      qd(t, o, e);
  } else
    zy(t, e);
}
function qd(t, e, n) {
  me(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Be(e) ? (process.env.NODE_ENV !== "production" && Zs(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = ny(e), process.env.NODE_ENV !== "production" && iE(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), zy(t, n);
}
let Mf;
const BE = () => !Mf;
function zy(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Mf && !r.render) {
      const i = r.template || xh(t).template;
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
        r.render = Mf(i, u), process.env.NODE_ENV !== "production" && Dr(t, "compile");
      }
    }
    t.render = r.render || yt;
  }
  {
    const i = yo(t);
    Hr();
    try {
      aE(t);
    } finally {
      zr(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && t.render === yt && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const Hd = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return Hl(), It(t, "get", ""), t[e];
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
function WE(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return It(t, "get", "$slots"), e[n];
    }
  }));
}
function qE(t) {
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
        return n || (n = new Proxy(t.attrs, Hd));
      },
      get slots() {
        return WE(t);
      },
      get emit() {
        return (r, ...i) => t.emit(r, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, Hd),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function Uu(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(ny(mi(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in rs)
          return rs[n](t);
      },
      has(e, n) {
        return n in e || n in rs;
      }
    }));
}
const HE = /(?:^|[-_])(\w)/g, zE = (t) => t.replace(HE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Th(t, e = !0) {
  return me(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Bu(t, e, n = !1) {
  let r = Th(e);
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
  return r ? zE(r) : n ? "App" : "Anonymous";
}
function Yy(t) {
  return me(t) && "__vccOpts" in t;
}
const de = (t, e) => {
  const n = r1(t, e, Gu);
  if (process.env.NODE_ENV !== "production") {
    const r = go();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Xy(t, e, n) {
  const r = arguments.length;
  return r === 2 ? Be(e) && !le(e) ? Zs(e) ? ie(t, null, [e]) : ie(t, e) : ie(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Zs(n) && (n = [n]), ie(t, e, n));
}
function YE() {
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
        ["span", t, ts(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${os(c) ? " (readonly)" : ""}`
      ] : os(c) ? [
        "div",
        {},
        ["span", t, ts(c) ? "ShallowReadonly" : "Readonly"],
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
    return ts(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const zd = "3.4.25", bi = process.env.NODE_ENV !== "production" ? q : yt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const XE = "http://www.w3.org/2000/svg", KE = "http://www.w3.org/1998/Math/MathML", oi = typeof document < "u" ? document : null, Yd = oi && /* @__PURE__ */ oi.createElement("template"), ZE = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? oi.createElementNS(XE, t) : e === "mathml" ? oi.createElementNS(KE, t) : oi.createElement(t, n ? { is: n } : void 0);
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
      Yd.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
      const o = Yd.content;
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
}, Jr = "transition", ha = "animation", Qa = Symbol("_vtc"), Wu = (t, { slots: e }) => Xy(q1, JE(t), e);
Wu.displayName = "Transition";
const Ky = {
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
Wu.props = /* @__PURE__ */ Qe(
  {},
  _y,
  Ky
);
const Fi = (t, e = []) => {
  le(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, Xd = (t) => t ? le(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function JE(t) {
  const e = {};
  for (const D in t)
    D in Ky || (e[D] = t[D]);
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
  } = t, m = QE(i), p = m && m[0], g = m && m[1], {
    onBeforeEnter: y,
    onEnter: v,
    onEnterCancelled: b,
    onLeave: E,
    onLeaveCancelled: O,
    onBeforeAppear: N = y,
    onAppear: M = v,
    onAppearCancelled: P = b
  } = e, I = (D, Q, ve) => {
    Vi(D, Q ? f : o), Vi(D, Q ? u : a), ve && ve();
  }, C = (D, Q) => {
    D._isLeaving = !1, Vi(D, c), Vi(D, d), Vi(D, h), Q && Q();
  }, R = (D) => (Q, ve) => {
    const T = D ? M : v, $ = () => I(Q, D, ve);
    Fi(T, [Q, $]), Kd(() => {
      Vi(Q, D ? l : s), Qr(Q, D ? f : o), Xd(T) || Zd(Q, r, p, $);
    });
  };
  return Qe(e, {
    onBeforeEnter(D) {
      Fi(y, [D]), Qr(D, s), Qr(D, a);
    },
    onBeforeAppear(D) {
      Fi(N, [D]), Qr(D, l), Qr(D, u);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(D, Q) {
      D._isLeaving = !0;
      const ve = () => C(D, Q);
      Qr(D, c), Qr(D, h), nS(), Kd(() => {
        !D._isLeaving || (Vi(D, c), Qr(D, d), Xd(E) || Zd(D, r, g, ve));
      }), Fi(E, [D, ve]);
    },
    onEnterCancelled(D) {
      I(D, !1), Fi(b, [D]);
    },
    onAppearCancelled(D) {
      I(D, !0), Fi(P, [D]);
    },
    onLeaveCancelled(D) {
      C(D), Fi(O, [D]);
    }
  });
}
function QE(t) {
  if (t == null)
    return null;
  if (Be(t))
    return [mc(t.enter), mc(t.leave)];
  {
    const e = mc(t);
    return [e, e];
  }
}
function mc(t) {
  const e = af(t);
  return process.env.NODE_ENV !== "production" && h1(e, "<transition> explicit duration"), e;
}
function Qr(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[Qa] || (t[Qa] = /* @__PURE__ */ new Set())).add(e);
}
function Vi(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[Qa];
  n && (n.delete(e), n.size || (t[Qa] = void 0));
}
function Kd(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let eS = 0;
function Zd(t, e, n, r) {
  const i = t._endId = ++eS, s = () => {
    i === t._endId && r();
  };
  if (n)
    return setTimeout(s, n);
  const { type: a, timeout: o, propCount: l } = tS(t, e);
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
function tS(t, e) {
  const n = window.getComputedStyle(t), r = (m) => (n[m] || "").split(", "), i = r(`${Jr}Delay`), s = r(`${Jr}Duration`), a = Jd(i, s), o = r(`${ha}Delay`), l = r(`${ha}Duration`), u = Jd(o, l);
  let f = null, c = 0, h = 0;
  e === Jr ? a > 0 && (f = Jr, c = a, h = s.length) : e === ha ? u > 0 && (f = ha, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? Jr : ha : null, h = f ? f === Jr ? s.length : l.length : 0);
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
function Jd(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => Qd(n) + Qd(t[r])));
}
function Qd(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function nS() {
  return document.body.offsetHeight;
}
function rS(t, e, n) {
  const r = t[Qa];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const em = Symbol("_vod"), iS = Symbol("_vsh");
process.env.NODE_ENV;
const sS = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), aS = /(^|;)\s*display\s*:/;
function oS(t, e, n) {
  const r = t.style, i = rt(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (rt(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && wl(r, o, "");
        }
      else
        for (const a in e)
          n[a] == null && wl(r, a, "");
    for (const a in n)
      a === "display" && (s = !0), wl(r, a, n[a]);
  } else if (i) {
    if (e !== n) {
      const a = r[sS];
      a && (n += ";" + a), r.cssText = n, s = aS.test(n);
    }
  } else
    e && t.removeAttribute("style");
  em in t && (t[em] = s ? r.display : "", t[iS] && (r.display = "none"));
}
const lS = /[^\\];\s*$/, tm = /\s*!important$/;
function wl(t, e, n) {
  if (le(n))
    n.forEach((r) => wl(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && lS.test(n) && bi(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = uS(t, e);
    tm.test(n) ? t.setProperty(
      un(r),
      n.replace(tm, ""),
      "important"
    ) : t[r] = n;
  }
}
const nm = ["Webkit", "Moz", "ms"], pc = {};
function uS(t, e) {
  const n = pc[e];
  if (n)
    return n;
  let r = gn(e);
  if (r !== "filter" && r in t)
    return pc[e] = r;
  r = as(r);
  for (let i = 0; i < nm.length; i++) {
    const s = nm[i] + r;
    if (s in t)
      return pc[e] = s;
  }
  return e;
}
const rm = "http://www.w3.org/1999/xlink";
function cS(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(rm, e.slice(6, e.length)) : t.setAttributeNS(rm, e, n);
  else {
    const s = kb(e);
    n == null || s && !Ag(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function fS(t, e, n, r, i, s, a) {
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
    u === "boolean" ? n = Ag(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
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
function hS(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function dS(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const im = Symbol("_vei");
function mS(t, e, n, r, i = null) {
  const s = t[im] || (t[im] = {}), a = s[e];
  if (r && a)
    a.value = process.env.NODE_ENV !== "production" ? am(r, e) : r;
  else {
    const [o, l] = pS(e);
    if (r) {
      const u = s[e] = vS(
        process.env.NODE_ENV !== "production" ? am(r, e) : r,
        i
      );
      hS(t, o, u, l);
    } else
      a && (dS(t, o, a, l), s[e] = void 0);
  }
}
const sm = /(?:Once|Passive|Capture)$/;
function pS(t) {
  let e;
  if (sm.test(t)) {
    e = {};
    let r;
    for (; r = t.match(sm); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : un(t.slice(2)), e];
}
let gc = 0;
const gS = /* @__PURE__ */ Promise.resolve(), yS = () => gc || (gS.then(() => gc = 0), gc = Date.now());
function vS(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Cn(
      _S(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = yS(), n;
}
function am(t, e) {
  return me(t) || le(t) ? t : (bi(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), yt);
}
function _S(t, e) {
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
const om = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, bS = (t, e, n, r, i, s, a, o, l) => {
  const u = i === "svg";
  e === "class" ? rS(t, r, u) : e === "style" ? oS(t, n, r) : co(e) ? Gl(e) || mS(t, e, n, r, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : ES(t, e, r, u)) ? fS(
    t,
    e,
    r,
    s,
    a,
    o,
    l
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), cS(t, e, r, u));
};
function ES(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && om(e) && me(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return om(e) && rt(n) ? !1 : e in t;
}
const SS = ["ctrl", "shift", "alt", "meta"], wS = {
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
  exact: (t, e) => SS.some((n) => t[`${n}Key`] && !e.includes(n))
}, ar = (t, e) => {
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = (i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = wS[e[a]];
      if (o && o(i, e))
        return;
    }
    return t(i, ...s);
  });
}, xS = {
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
    if (e.some((a) => a === s || xS[a] === s))
      return t(i);
  });
}, OS = /* @__PURE__ */ Qe({ patchProp: bS }, ZE);
let lm;
function Zy() {
  return lm || (lm = ME(OS));
}
const um = (...t) => {
  Zy().render(...t);
}, MS = (...t) => {
  const e = Zy().createApp(...t);
  process.env.NODE_ENV !== "production" && (NS(e), CS(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = LS(r);
    if (!i)
      return;
    const s = e._component;
    !me(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const a = n(i, !1, TS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function TS(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function NS(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Nb(e) || Cb(e) || Lb(e),
    writable: !1
  });
}
function CS(t) {
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
function LS(t) {
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
function PS() {
  YE();
}
process.env.NODE_ENV !== "production" && PS();
/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */
function fi(t) {
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fi(t);
}
function Tf(t, e) {
  return Tf = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Tf(t, e);
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
function xl(t, e, n) {
  return kS() ? xl = Reflect.construct : xl = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && Tf(u, a.prototype), u;
  }, xl.apply(null, arguments);
}
function Gn(t) {
  return AS(t) || DS(t) || IS(t) || RS();
}
function AS(t) {
  if (Array.isArray(t))
    return Nf(t);
}
function DS(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function IS(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Nf(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Nf(t, e);
  }
}
function Nf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function RS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var $S = Object.hasOwnProperty, cm = Object.setPrototypeOf, FS = Object.isFrozen, VS = Object.getPrototypeOf, jS = Object.getOwnPropertyDescriptor, en = Object.freeze, An = Object.seal, GS = Object.create, Jy = typeof Reflect < "u" && Reflect, Jl = Jy.apply, Cf = Jy.construct;
Jl || (Jl = function(e, n, r) {
  return e.apply(n, r);
});
en || (en = function(e) {
  return e;
});
An || (An = function(e) {
  return e;
});
Cf || (Cf = function(e, n) {
  return xl(e, Gn(n));
});
var US = Dn(Array.prototype.forEach), fm = Dn(Array.prototype.pop), da = Dn(Array.prototype.push), Ol = Dn(String.prototype.toLowerCase), yc = Dn(String.prototype.toString), hm = Dn(String.prototype.match), Rn = Dn(String.prototype.replace), BS = Dn(String.prototype.indexOf), WS = Dn(String.prototype.trim), Ft = Dn(RegExp.prototype.test), vc = qS(TypeError);
function Dn(t) {
  return function(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Jl(t, e, r);
  };
}
function qS(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return Cf(t, n);
  };
}
function Le(t, e, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Ol, cm && cm(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var a = n(s);
      a !== s && (FS(e) || (e[i] = a), s = a);
    }
    t[s] = !0;
  }
  return t;
}
function ji(t) {
  var e = GS(null), n;
  for (n in t)
    Jl($S, t, [n]) === !0 && (e[n] = t[n]);
  return e;
}
function qo(t, e) {
  for (; t !== null; ) {
    var n = jS(t, e);
    if (n) {
      if (n.get)
        return Dn(n.get);
      if (typeof n.value == "function")
        return Dn(n.value);
    }
    t = VS(t);
  }
  function r(i) {
    return console.warn("fallback value for", i), null;
  }
  return r;
}
var dm = en(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _c = en(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bc = en(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), HS = en(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ec = en(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), zS = en(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mm = en(["#text"]), pm = en(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Sc = en(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gm = en(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ho = en(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), YS = An(/\{\{[\w\W]*|[\w\W]*\}\}/gm), XS = An(/<%[\w\W]*|[\w\W]*%>/gm), KS = An(/\${[\w\W]*}/gm), ZS = An(/^data-[\-\w.\u00B7-\uFFFF]/), JS = An(/^aria-[\-\w]+$/), QS = An(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), ew = An(/^(?:\w+script|data):/i), tw = An(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), nw = An(/^html$/i), rw = An(/^[a-z][.\w]*(-[.\w]+)+$/i), iw = function() {
  return typeof window > "u" ? null : window;
}, sw = function(e, n) {
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
function Qy() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iw(), e = function(w) {
    return Qy(w);
  };
  if (e.version = "2.5.0", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var n = t.document, r = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, m = o.prototype, p = qo(m, "cloneNode"), g = qo(m, "nextSibling"), y = qo(m, "childNodes"), v = qo(m, "parentNode");
  if (typeof s == "function") {
    var b = r.createElement("template");
    b.content && b.content.ownerDocument && (r = b.content.ownerDocument);
  }
  var E = sw(d, n), O = E ? E.createHTML("") : "", N = r, M = N.implementation, P = N.createNodeIterator, I = N.createDocumentFragment, C = N.getElementsByTagName, R = n.importNode, D = {};
  try {
    D = ji(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var Q = {};
  e.isSupported = typeof v == "function" && M && M.createHTMLDocument !== void 0 && D !== 9;
  var ve = YS, T = XS, $ = KS, z = ZS, K = JS, Ce = ew, Pe = tw, dt = rw, Rt = QS, Te = null, Ct = Le({}, [].concat(Gn(dm), Gn(_c), Gn(bc), Gn(Ec), Gn(mm))), it = null, Jn = Le({}, [].concat(Gn(pm), Gn(Sc), Gn(gm), Gn(Ho))), De = Object.seal(Object.create(null, {
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
  })), tn = null, Qn = null, Mr = !0, Lt = !0, er = !1, Tr = !0, _ = !1, S = !0, A = !1, V = !1, j = !1, W = !1, Z = !1, B = !1, X = !0, U = !1, ne = "user-content-", ue = !0, ae = !1, he = {}, xe = null, $e = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Je = null, mt = Le({}, ["audio", "video", "img", "source", "image", "track"]), zt = null, Nr = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Di = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", bn = "http://www.w3.org/1999/xhtml", ut = bn, nn = !1, vs = null, V_ = Le({}, [Di, tr, bn], yc), Ii, j_ = ["application/xhtml+xml", "text/html"], G_ = "text/html", Ot, _s = null, U_ = r.createElement("form"), id = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, ic = function(w) {
    _s && _s === w || ((!w || fi(w) !== "object") && (w = {}), w = ji(w), Ii = j_.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Ii = G_ : Ii = w.PARSER_MEDIA_TYPE, Ot = Ii === "application/xhtml+xml" ? yc : Ol, Te = "ALLOWED_TAGS" in w ? Le({}, w.ALLOWED_TAGS, Ot) : Ct, it = "ALLOWED_ATTR" in w ? Le({}, w.ALLOWED_ATTR, Ot) : Jn, vs = "ALLOWED_NAMESPACES" in w ? Le({}, w.ALLOWED_NAMESPACES, yc) : V_, zt = "ADD_URI_SAFE_ATTR" in w ? Le(
      ji(Nr),
      w.ADD_URI_SAFE_ATTR,
      Ot
    ) : Nr, Je = "ADD_DATA_URI_TAGS" in w ? Le(
      ji(mt),
      w.ADD_DATA_URI_TAGS,
      Ot
    ) : mt, xe = "FORBID_CONTENTS" in w ? Le({}, w.FORBID_CONTENTS, Ot) : $e, tn = "FORBID_TAGS" in w ? Le({}, w.FORBID_TAGS, Ot) : {}, Qn = "FORBID_ATTR" in w ? Le({}, w.FORBID_ATTR, Ot) : {}, he = "USE_PROFILES" in w ? w.USE_PROFILES : !1, Mr = w.ALLOW_ARIA_ATTR !== !1, Lt = w.ALLOW_DATA_ATTR !== !1, er = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Tr = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _ = w.SAFE_FOR_TEMPLATES || !1, S = w.SAFE_FOR_XML !== !1, A = w.WHOLE_DOCUMENT || !1, W = w.RETURN_DOM || !1, Z = w.RETURN_DOM_FRAGMENT || !1, B = w.RETURN_TRUSTED_TYPE || !1, j = w.FORCE_BODY || !1, X = w.SANITIZE_DOM !== !1, U = w.SANITIZE_NAMED_PROPS || !1, ue = w.KEEP_CONTENT !== !1, ae = w.IN_PLACE || !1, Rt = w.ALLOWED_URI_REGEXP || Rt, ut = w.NAMESPACE || bn, De = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && id(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (De.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && id(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (De.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _ && (Lt = !1), Z && (W = !0), he && (Te = Le({}, Gn(mm)), it = [], he.html === !0 && (Le(Te, dm), Le(it, pm)), he.svg === !0 && (Le(Te, _c), Le(it, Sc), Le(it, Ho)), he.svgFilters === !0 && (Le(Te, bc), Le(it, Sc), Le(it, Ho)), he.mathMl === !0 && (Le(Te, Ec), Le(it, gm), Le(it, Ho))), w.ADD_TAGS && (Te === Ct && (Te = ji(Te)), Le(Te, w.ADD_TAGS, Ot)), w.ADD_ATTR && (it === Jn && (it = ji(it)), Le(it, w.ADD_ATTR, Ot)), w.ADD_URI_SAFE_ATTR && Le(zt, w.ADD_URI_SAFE_ATTR, Ot), w.FORBID_CONTENTS && (xe === $e && (xe = ji(xe)), Le(xe, w.FORBID_CONTENTS, Ot)), ue && (Te["#text"] = !0), A && Le(Te, ["html", "head", "body"]), Te.table && (Le(Te, ["tbody"]), delete tn.tbody), en && en(w), _s = w);
  }, sd = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), ad = Le({}, ["foreignobject", "desc", "title", "annotation-xml"]), B_ = Le({}, ["title", "style", "font", "a", "script"]), Do = Le({}, _c);
  Le(Do, bc), Le(Do, HS);
  var sc = Le({}, Ec);
  Le(sc, zS);
  var W_ = function(w) {
    var Y = v(w);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: ut,
      tagName: "template"
    });
    var re = Ol(w.tagName), Fe = Ol(Y.tagName);
    return vs[w.namespaceURI] ? w.namespaceURI === tr ? Y.namespaceURI === bn ? re === "svg" : Y.namespaceURI === Di ? re === "svg" && (Fe === "annotation-xml" || sd[Fe]) : Boolean(Do[re]) : w.namespaceURI === Di ? Y.namespaceURI === bn ? re === "math" : Y.namespaceURI === tr ? re === "math" && ad[Fe] : Boolean(sc[re]) : w.namespaceURI === bn ? Y.namespaceURI === tr && !ad[Fe] || Y.namespaceURI === Di && !sd[Fe] ? !1 : !sc[re] && (B_[re] || !Do[re]) : !!(Ii === "application/xhtml+xml" && vs[w.namespaceURI]) : !1;
  }, In = function(w) {
    da(e.removed, {
      element: w
    });
    try {
      w.parentNode.removeChild(w);
    } catch {
      try {
        w.outerHTML = O;
      } catch {
        w.remove();
      }
    }
  }, ac = function(w, Y) {
    try {
      da(e.removed, {
        attribute: Y.getAttributeNode(w),
        from: Y
      });
    } catch {
      da(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(w), w === "is" && !it[w])
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
  }, od = function(w) {
    var Y, re;
    if (j)
      w = "<remove></remove>" + w;
    else {
      var Fe = hm(w, /^[\r\n\t ]+/);
      re = Fe && Fe[0];
    }
    Ii === "application/xhtml+xml" && ut === bn && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var rn = E ? E.createHTML(w) : w;
    if (ut === bn)
      try {
        Y = new h().parseFromString(rn, Ii);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = M.createDocument(ut, "template", null);
      try {
        Y.documentElement.innerHTML = nn ? O : rn;
      } catch {
      }
    }
    var $t = Y.body || Y.documentElement;
    return w && re && $t.insertBefore(r.createTextNode(re), $t.childNodes[0] || null), ut === bn ? C.call(Y, A ? "html" : "body")[0] : A ? Y.documentElement : $t;
  }, ld = function(w) {
    return P.call(
      w.ownerDocument || w,
      w,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, q_ = function(w) {
    return w instanceof c && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof f) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, ua = function(w) {
    return fi(a) === "object" ? w instanceof a : w && fi(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, Cr = function(w, Y, re) {
    !Q[w] || US(Q[w], function(Fe) {
      Fe.call(e, Y, re, _s);
    });
  }, ud = function(w) {
    var Y;
    if (Cr("beforeSanitizeElements", w, null), q_(w) || Ft(/[\u0080-\uFFFF]/, w.nodeName))
      return In(w), !0;
    var re = Ot(w.nodeName);
    if (Cr("uponSanitizeElement", w, {
      tagName: re,
      allowedTags: Te
    }), w.hasChildNodes() && !ua(w.firstElementChild) && (!ua(w.content) || !ua(w.content.firstElementChild)) && Ft(/<[/\w]/g, w.innerHTML) && Ft(/<[/\w]/g, w.textContent) || re === "select" && Ft(/<template/i, w.innerHTML) || w.nodeType === 7 || S && w.nodeType === 8 && Ft(/<[/\w]/g, w.data))
      return In(w), !0;
    if (!Te[re] || tn[re]) {
      if (!tn[re] && fd(re) && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, re) || De.tagNameCheck instanceof Function && De.tagNameCheck(re)))
        return !1;
      if (ue && !xe[re]) {
        var Fe = v(w) || w.parentNode, rn = y(w) || w.childNodes;
        if (rn && Fe)
          for (var $t = rn.length, Pt = $t - 1; Pt >= 0; --Pt)
            Fe.insertBefore(p(rn[Pt], !0), g(w));
      }
      return In(w), !0;
    }
    return w instanceof o && !W_(w) || (re === "noscript" || re === "noembed" || re === "noframes") && Ft(/<\/no(script|embed|frames)/i, w.innerHTML) ? (In(w), !0) : (_ && w.nodeType === 3 && (Y = w.textContent, Y = Rn(Y, ve, " "), Y = Rn(Y, T, " "), Y = Rn(Y, $, " "), w.textContent !== Y && (da(e.removed, {
      element: w.cloneNode()
    }), w.textContent = Y)), Cr("afterSanitizeElements", w, null), !1);
  }, cd = function(w, Y, re) {
    if (X && (Y === "id" || Y === "name") && (re in r || re in U_))
      return !1;
    if (!(Lt && !Qn[Y] && Ft(z, Y))) {
      if (!(Mr && Ft(K, Y))) {
        if (!it[Y] || Qn[Y]) {
          if (!(fd(w) && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, w) || De.tagNameCheck instanceof Function && De.tagNameCheck(w)) && (De.attributeNameCheck instanceof RegExp && Ft(De.attributeNameCheck, Y) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(Y)) || Y === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, re) || De.tagNameCheck instanceof Function && De.tagNameCheck(re))))
            return !1;
        } else if (!zt[Y]) {
          if (!Ft(Rt, Rn(re, Pe, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && w !== "script" && BS(re, "data:") === 0 && Je[w])) {
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
  }, fd = function(w) {
    return w !== "annotation-xml" && hm(w, dt);
  }, hd = function(w) {
    var Y, re, Fe, rn;
    Cr("beforeSanitizeAttributes", w, null);
    var $t = w.attributes;
    if (!!$t) {
      var Pt = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: it
      };
      for (rn = $t.length; rn--; ) {
        Y = $t[rn];
        var Io = Y, Mt = Io.name, oc = Io.namespaceURI;
        if (re = Mt === "value" ? Y.value : WS(Y.value), Fe = Ot(Mt), Pt.attrName = Fe, Pt.attrValue = re, Pt.keepAttr = !0, Pt.forceKeepAttr = void 0, Cr("uponSanitizeAttribute", w, Pt), re = Pt.attrValue, !Pt.forceKeepAttr && (ac(Mt, w), !!Pt.keepAttr)) {
          if (!Tr && Ft(/\/>/i, re)) {
            ac(Mt, w);
            continue;
          }
          _ && (re = Rn(re, ve, " "), re = Rn(re, T, " "), re = Rn(re, $, " "));
          var dd = Ot(w.nodeName);
          if (!!cd(dd, Fe, re)) {
            if (U && (Fe === "id" || Fe === "name") && (ac(Mt, w), re = ne + re), E && fi(d) === "object" && typeof d.getAttributeType == "function" && !oc)
              switch (d.getAttributeType(dd, Fe)) {
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
              oc ? w.setAttributeNS(oc, Mt, re) : w.setAttribute(Mt, re), fm(e.removed);
            } catch {
            }
          }
        }
      }
      Cr("afterSanitizeAttributes", w, null);
    }
  }, H_ = function ce(w) {
    var Y, re = ld(w);
    for (Cr("beforeSanitizeShadowDOM", w, null); Y = re.nextNode(); )
      Cr("uponSanitizeShadowNode", Y, null), !ud(Y) && (Y.content instanceof i && ce(Y.content), hd(Y));
    Cr("afterSanitizeShadowDOM", w, null);
  };
  return e.sanitize = function(ce) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y, re, Fe, rn, $t;
    if (nn = !ce, nn && (ce = "<!-->"), typeof ce != "string" && !ua(ce))
      if (typeof ce.toString == "function") {
        if (ce = ce.toString(), typeof ce != "string")
          throw vc("dirty is not a string, aborting");
      } else
        throw vc("toString is not a function");
    if (!e.isSupported) {
      if (fi(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (ua(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (V || ic(w), e.removed = [], typeof ce == "string" && (ae = !1), ae) {
      if (ce.nodeName) {
        var Pt = Ot(ce.nodeName);
        if (!Te[Pt] || tn[Pt])
          throw vc("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      Y = od("<!---->"), re = Y.ownerDocument.importNode(ce, !0), re.nodeType === 1 && re.nodeName === "BODY" || re.nodeName === "HTML" ? Y = re : Y.appendChild(re);
    else {
      if (!W && !_ && !A && ce.indexOf("<") === -1)
        return E && B ? E.createHTML(ce) : ce;
      if (Y = od(ce), !Y)
        return W ? null : B ? O : "";
    }
    Y && j && In(Y.firstChild);
    for (var Io = ld(ae ? ce : Y); Fe = Io.nextNode(); )
      Fe.nodeType === 3 && Fe === rn || ud(Fe) || (Fe.content instanceof i && H_(Fe.content), hd(Fe), rn = Fe);
    if (rn = null, ae)
      return ce;
    if (W) {
      if (Z)
        for ($t = I.call(Y.ownerDocument); Y.firstChild; )
          $t.appendChild(Y.firstChild);
      else
        $t = Y;
      return (it.shadowroot || it.shadowrootmod) && ($t = R.call(n, $t, !0)), $t;
    }
    var Mt = A ? Y.outerHTML : Y.innerHTML;
    return A && Te["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Ft(nw, Y.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + Mt), _ && (Mt = Rn(Mt, ve, " "), Mt = Rn(Mt, T, " "), Mt = Rn(Mt, $, " ")), E && B ? E.createHTML(Mt) : Mt;
  }, e.setConfig = function(ce) {
    ic(ce), V = !0;
  }, e.clearConfig = function() {
    _s = null, V = !1;
  }, e.isValidAttribute = function(ce, w, Y) {
    _s || ic({});
    var re = Ot(ce), Fe = Ot(w);
    return cd(re, Fe, Y);
  }, e.addHook = function(ce, w) {
    typeof w == "function" && (Q[ce] = Q[ce] || [], da(Q[ce], w));
  }, e.removeHook = function(ce) {
    if (Q[ce])
      return fm(Q[ce]);
  }, e.removeHooks = function(ce) {
    Q[ce] && (Q[ce] = []);
  }, e.removeAllHooks = function() {
    Q = {};
  }, e;
}
var aw = Qy();
function ow(t, e) {
  var i;
  const n = (i = t.hooks) != null ? i : {};
  let r;
  for (r in n) {
    const s = n[r];
    s !== void 0 && e.addHook(r, s);
  }
}
function ev() {
  return aw();
}
function lw(t = {}, e = ev) {
  const n = e();
  ow(t, n);
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
const uw = {
  install(t, e = {}, n = ev) {
    t.directive(
      "dompurify-html",
      lw(e, n)
    );
  }
};
var Nh = !1;
function zo(t, e, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), n) : (t[e] = n, n);
}
function wc(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function cw() {
  return tv().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function tv() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const fw = typeof Proxy == "function", hw = "devtools-plugin:setup", dw = "plugin:settings:set";
let bs, Lf;
function mw() {
  var t;
  return bs !== void 0 || (typeof window < "u" && window.performance ? (bs = !0, Lf = window.performance) : typeof globalThis < "u" && ((t = globalThis.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (bs = !0, Lf = globalThis.perf_hooks.performance) : bs = !1), bs;
}
function pw() {
  return mw() ? Lf.now() : Date.now();
}
class gw {
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
        return pw();
      }
    }, n && n.on(dw, (a, o) => {
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
function nv(t, e) {
  const n = t, r = tv(), i = cw(), s = fw && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(hw, t, e);
  else {
    const a = s ? new gw(n, i) : null;
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
let Sa;
const eo = (t) => Sa = t, rv = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function us(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var dr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(dr || (dr = {}));
const qu = typeof window < "u", Ra = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && qu, ym = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function yw(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function Ch(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    av(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function iv(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Ml(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const Tl = typeof navigator == "object" ? navigator : { userAgent: "" }, sv = /* @__PURE__ */ (() => /Macintosh/.test(Tl.userAgent) && /AppleWebKit/.test(Tl.userAgent) && !/Safari/.test(Tl.userAgent))(), av = qu ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !sv ? vw : "msSaveOrOpenBlob" in Tl ? _w : bw : () => {
};
function vw(t, e = "download", n) {
  const r = document.createElement("a");
  r.download = e, r.rel = "noopener", typeof t == "string" ? (r.href = t, r.origin !== location.origin ? iv(r.href) ? Ch(t, e, n) : (r.target = "_blank", Ml(r)) : Ml(r)) : (r.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Ml(r);
  }, 0));
}
function _w(t, e = "download", n) {
  if (typeof t == "string")
    if (iv(t))
      Ch(t, e, n);
    else {
      const r = document.createElement("a");
      r.href = t, r.target = "_blank", setTimeout(function() {
        Ml(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(yw(t, n), e);
}
function bw(t, e, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
    return Ch(t, e, n);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(ym.HTMLElement)) || "safari" in ym, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || sv) && typeof FileReader < "u") {
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
function Lh(t) {
  return "_a" in t && "install" in t;
}
function ov() {
  if (!("clipboard" in navigator))
    return Tt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function lv(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Tt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Ew(t) {
  if (!ov())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Tt("Global state copied to clipboard.");
    } catch (e) {
      if (lv(e))
        return;
      Tt("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function Sw(t) {
  if (!ov())
    try {
      uv(t, JSON.parse(await navigator.clipboard.readText())), Tt("Global state pasted from clipboard.");
    } catch (e) {
      if (lv(e))
        return;
      Tt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function ww(t) {
  try {
    av(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Tt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Lr;
function xw() {
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
async function Ow(t) {
  try {
    const n = await xw()();
    if (!n)
      return;
    const { text: r, file: i } = n;
    uv(t, JSON.parse(r)), Tt(`Global state imported from "${i.name}".`);
  } catch (e) {
    Tt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function uv(t, e) {
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
const cv = "\u{1F34D} Pinia (root)", Pf = "_root";
function Mw(t) {
  return Lh(t) ? {
    id: Pf,
    label: cv
  } : {
    id: t.$id,
    label: t.$id
  };
}
function Tw(t) {
  if (Lh(t)) {
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
function Nw(t) {
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
function Cw(t) {
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
let Ps = !0;
const Nl = [], zi = "pinia:mutations", Gt = "pinia", { assign: Lw } = Object, Ql = (t) => "\u{1F34D} " + t;
function Pw(t, e) {
  nv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Nl,
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
            Ew(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Sw(e), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            ww(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Ow(e), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
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
            type: Ql(o.$id),
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
            type: Ql(o.$id),
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
        i = i.concat(Array.from(e._s.values())), r.rootNodes = (r.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(r.filter.toLowerCase()) : cv.toLowerCase().includes(r.filter.toLowerCase())) : i).map(Mw);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === t && r.inspectorId === Gt) {
        const i = r.nodeId === Pf ? e : e._s.get(r.nodeId);
        if (!i)
          return;
        i && (r.state = Tw(i));
      }
    }), n.on.editInspectorState((r, i) => {
      if (r.app === t && r.inspectorId === Gt) {
        const s = r.nodeId === Pf ? e : e._s.get(r.nodeId);
        if (!s)
          return Tt(`store "${r.nodeId}" not found`, "error");
        const { path: a } = r;
        Lh(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), Ps = !1, r.set(s, a, r.state.value), Ps = !0;
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
        a[0] = "$state", Ps = !1, r.set(s, a, r.state.value), Ps = !0;
      }
    });
  });
}
function kw(t, e) {
  Nl.includes(Ql(e.$id)) || Nl.push(Ql(e.$id)), nv({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Nl,
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
      const f = fv++;
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
        pi = void 0, n.addTimelineEvent({
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
        pi = void 0, n.addTimelineEvent({
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
      et(() => x(e[a]), (o, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Gt), Ps && n.addTimelineEvent({
          layerId: zi,
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
      if (n.notifyComponentUpdate(), n.sendInspectorState(Gt), !Ps)
        return;
      const u = {
        time: r(),
        title: Cw(o),
        data: Lw({ store: Un(e.$id) }, Nw(a)),
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
        layerId: zi,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = mi((a) => {
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
let fv = 0, pi;
function vm(t, e, n) {
  const r = e.reduce((i, s) => (i[s] = _e(t)[s], i), {});
  for (const i in r)
    t[i] = function() {
      const s = fv, a = n ? new Proxy(t, {
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
function Aw({ app: t, store: e, options: n }) {
  if (e.$id.startsWith("__hot:"))
    return;
  e._isOptionsAPI = !!n.state, vm(e, Object.keys(n.actions), e._isOptionsAPI);
  const r = e._hotUpdate;
  _e(e)._hotUpdate = function(i) {
    r.apply(this, arguments), vm(e, Object.keys(i._hmrPayload.actions), !!e._isOptionsAPI);
  }, kw(
    t,
    e
  );
}
function Dw() {
  const t = Rg(!0), e = t.run(() => we({}));
  let n = [], r = [];
  const i = mi({
    install(s) {
      eo(i), i._a = s, s.provide(rv, i), s.config.globalProperties.$pinia = i, Ra && Pw(s, i), r.forEach((a) => n.push(a)), r = [];
    },
    use(s) {
      return !this._a && !Nh ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return Ra && typeof Proxy < "u" && i.use(Aw), i;
}
function hv(t, e) {
  for (const n in e) {
    const r = e[n];
    if (!(n in t))
      continue;
    const i = t[n];
    us(i) && us(r) && !Ye(r) && !hr(r) ? t[n] = hv(i, r) : t[n] = r;
  }
  return t;
}
const dv = () => {
};
function _m(t, e, n, r = dv) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && $g() && Db(i), i;
}
function Es(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const Iw = (t) => t();
function kf(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    us(i) && us(r) && t.hasOwnProperty(n) && !Ye(r) && !hr(r) ? t[n] = kf(i, r) : t[n] = r;
  }
  return t;
}
const Rw = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function $w(t) {
  return !us(t) || !t.hasOwnProperty(Rw);
}
const { assign: wn } = Object;
function bm(t) {
  return !!(Ye(t) && t.effect);
}
function Em(t, e, n, r) {
  const { state: i, actions: s, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && r ? cf(we(i ? i() : {}).value) : cf(n.state.value[t]);
    return wn(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = mi(de(() => {
      eo(n);
      const d = n._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = Af(t, u, e, n, r, !0), l;
}
function Af(t, e, n = {}, r, i, s) {
  let a;
  const o = wn({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !Nh && (l.onTrigger = (C) => {
    u ? d = C : u == !1 && !M._hotUpdating && (Array.isArray(d) ? d.push(C) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
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
    }) : (kf(r.state.value[t], C), R = {
      type: dr.patchObject,
      payload: C,
      storeId: t,
      events: d
    });
    const D = g = Symbol();
    Wl().then(() => {
      g === D && (u = !0);
    }), f = !0, Es(c, R, r.state.value[t]);
  }
  const v = s ? function() {
    const { state: R } = n, D = R ? R() : {};
    this.$patch((Q) => {
      wn(Q, D);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : dv;
  function b() {
    a.stop(), c = [], h = [], r._s.delete(t);
  }
  function E(C, R) {
    return function() {
      eo(r);
      const D = Array.from(arguments), Q = [], ve = [];
      function T(K) {
        Q.push(K);
      }
      function $(K) {
        ve.push(K);
      }
      Es(h, {
        args: D,
        name: C,
        store: M,
        after: T,
        onError: $
      });
      let z;
      try {
        z = R.apply(this && this.$id === t ? this : M, D);
      } catch (K) {
        throw Es(ve, K), K;
      }
      return z instanceof Promise ? z.then((K) => (Es(Q, K), K)).catch((K) => (Es(ve, K), Promise.reject(K))) : (Es(Q, z), z);
    };
  }
  const O = /* @__PURE__ */ mi({
    actions: {},
    getters: {},
    state: [],
    hotState: p
  }), N = {
    _p: r,
    $id: t,
    $onAction: _m.bind(null, h),
    $patch: y,
    $reset: v,
    $subscribe(C, R = {}) {
      const D = _m(c, C, R.detached, () => Q()), Q = a.run(() => et(() => r.state.value[t], (ve) => {
        (R.flush === "sync" ? f : u) && C({
          storeId: t,
          type: dr.direct,
          events: d
        }, ve);
      }, wn({}, l, R)));
      return D;
    },
    $dispose: b
  }, M = Ru(process.env.NODE_ENV !== "production" || Ra ? wn(
    {
      _hmrPayload: O,
      _customProperties: mi(/* @__PURE__ */ new Set())
    },
    N
  ) : N);
  r._s.set(t, M);
  const I = (r._a && r._a.runWithContext || Iw)(() => r._e.run(() => (a = Rg()).run(e)));
  for (const C in I) {
    const R = I[C];
    if (Ye(R) && !bm(R) || hr(R))
      process.env.NODE_ENV !== "production" && i ? zo(p.value, C, vl(I, C)) : s || (m && $w(R) && (Ye(R) ? R.value = m[C] : kf(R, m[C])), r.state.value[t][C] = R), process.env.NODE_ENV !== "production" && O.state.push(C);
    else if (typeof R == "function") {
      const D = process.env.NODE_ENV !== "production" && i ? R : E(C, R);
      I[C] = D, process.env.NODE_ENV !== "production" && (O.actions[C] = R), o.actions[C] = R;
    } else
      process.env.NODE_ENV !== "production" && bm(R) && (O.getters[C] = s ? n.getters[C] : R, qu && (I._getters || (I._getters = mi([]))).push(C));
  }
  if (wn(M, I), wn(_e(M), I), Object.defineProperty(M, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? p.value : r.state.value[t],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      y((R) => {
        wn(R, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (M._hotUpdate = mi((C) => {
    M._hotUpdating = !0, C._hmrPayload.state.forEach((R) => {
      if (R in M.$state) {
        const D = C.$state[R], Q = M.$state[R];
        typeof D == "object" && us(D) && us(Q) ? hv(D, Q) : C.$state[R] = Q;
      }
      zo(M, R, vl(C.$state, R));
    }), Object.keys(M.$state).forEach((R) => {
      R in C.$state || wc(M, R);
    }), u = !1, f = !1, r.state.value[t] = vl(C._hmrPayload, "hotState"), f = !0, Wl().then(() => {
      u = !0;
    });
    for (const R in C._hmrPayload.actions) {
      const D = C[R];
      zo(M, R, E(R, D));
    }
    for (const R in C._hmrPayload.getters) {
      const D = C._hmrPayload.getters[R], Q = s ? de(() => (eo(r), D.call(M, M))) : D;
      zo(M, R, Q);
    }
    Object.keys(M._hmrPayload.getters).forEach((R) => {
      R in C._hmrPayload.getters || wc(M, R);
    }), Object.keys(M._hmrPayload.actions).forEach((R) => {
      R in C._hmrPayload.actions || wc(M, R);
    }), M._hmrPayload = C._hmrPayload, M._getters = C._getters, M._hotUpdating = !1;
  })), Ra) {
    const C = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(M, R, wn({ value: M[R] }, C));
    });
  }
  return r._p.forEach((C) => {
    if (Ra) {
      const R = a.run(() => C({
        store: M,
        app: r._a,
        pinia: r,
        options: o
      }));
      Object.keys(R || {}).forEach((D) => M._customProperties.add(D)), wn(M, R);
    } else
      wn(M, a.run(() => C({
        store: M,
        app: r._a,
        pinia: r,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && M.$state && typeof M.$state == "object" && typeof M.$state.constructor == "function" && !M.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${M.$id}".`), m && s && n.hydrate && n.hydrate(M.$state, m), u = !0, f = !0, M;
}
function ms(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  if (typeof t == "string")
    r = t, i = s ? n : e;
  else if (i = t, r = t.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');
  function a(o, l) {
    const u = dE();
    if (o = (process.env.NODE_ENV === "test" && Sa && Sa._testing ? null : o) || (u ? Gs(rv, null) : null), o && eo(o), process.env.NODE_ENV !== "production" && !Sa)
      throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = Sa, o._s.has(r) || (s ? Af(r, e, i, o) : Em(r, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + r, h = s ? Af(c, e, i, o, !0) : Em(c, wn({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && qu) {
      const c = go();
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
  if (Nh)
    return cf(t);
  {
    t = _e(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (Ye(r) || hr(r)) && (e[n] = vl(t, n));
    }
    return e;
  }
}
function Fw(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var cs = 1, fs = 2, Bs = 3, Vw = 4, Df = 5, Sm = 6378137, jw = 6356752314e-3, wm = 0.0066943799901413165, $a = 484813681109536e-20, H = Math.PI / 2, Gw = 0.16666666666666666, Uw = 0.04722222222222222, Bw = 0.022156084656084655, te = 1e-10, At = 0.017453292519943295, ur = 57.29577951308232, We = Math.PI / 4, to = Math.PI * 2, gt = 3.14159265359, cn = {};
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
const Ww = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var xm = /[\s_\-\/\(\)]/g;
function Oi(t, e) {
  if (t[e])
    return t[e];
  for (var n = Object.keys(t), r = e.toLowerCase().replace(xm, ""), i = -1, s, a; ++i < n.length; )
    if (s = n[i], a = s.toLowerCase().replace(xm, ""), a === r)
      return t[s];
}
function If(t) {
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
      e.lat0 = o * At;
    },
    lat_1: function(o) {
      e.lat1 = o * At;
    },
    lat_2: function(o) {
      e.lat2 = o * At;
    },
    lat_ts: function(o) {
      e.lat_ts = o * At;
    },
    lon_0: function(o) {
      e.long0 = o * At;
    },
    lon_1: function(o) {
      e.long1 = o * At;
    },
    lon_2: function(o) {
      e.long2 = o * At;
    },
    alpha: function(o) {
      e.alpha = parseFloat(o) * At;
    },
    gamma: function(o) {
      e.rectified_grid_angle = parseFloat(o);
    },
    lonc: function(o) {
      e.longc = o * At;
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
      var l = Oi(Ww, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * At;
    },
    pm: function(o) {
      var l = Oi(cn, o);
      e.from_greenwich = (l || parseFloat(o)) * At;
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
var no = 1, mv = 2, pv = 3, eu = 4, gv = 5, Ph = -1, qw = /\s/, Hw = /[A-Za-z]/, zw = /[A-Za-z84_]/, Hu = /[,\]]/, yv = /[\d\.E\-\+]/;
function Xr(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = no;
}
Xr.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== eu)
    for (; qw.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case no:
      return this.neutral(t);
    case mv:
      return this.keyword(t);
    case eu:
      return this.quoted(t);
    case gv:
      return this.afterquote(t);
    case pv:
      return this.number(t);
    case Ph:
      return;
  }
};
Xr.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = eu;
    return;
  }
  if (Hu.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
Xr.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = no;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = no, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Ph);
    return;
  }
};
Xr.prototype.number = function(t) {
  if (yv.test(t)) {
    this.word += t;
    return;
  }
  if (Hu.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
Xr.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = gv;
    return;
  }
  this.word += t;
};
Xr.prototype.keyword = function(t) {
  if (zw.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = no;
    return;
  }
  if (Hu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
Xr.prototype.neutral = function(t) {
  if (Hw.test(t)) {
    this.word = t, this.state = mv;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = eu;
    return;
  }
  if (yv.test(t)) {
    this.word = t, this.state = pv;
    return;
  }
  if (Hu.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
Xr.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === Ph)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function Yw(t) {
  var e = new Xr(t);
  return e.output();
}
function Om(t, e, n) {
  Array.isArray(e) && (n.unshift(e), e = null);
  var r = e ? {} : t, i = n.reduce(function(s, a) {
    return ks(a, s), s;
  }, r);
  e && (t[e] = i);
}
function ks(t, e) {
  if (!Array.isArray(t)) {
    e[t] = !0;
    return;
  }
  var n = t.shift();
  if (n === "PARAMETER" && (n = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      e[n] = {}, ks(t[0], e[n]);
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
      }, t.length === 3 && ks(t[2], e[n]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      e[n] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && ks(t[3], e[n]);
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
      t[0] = ["name", t[0]], Om(e, n, t);
      return;
    default:
      for (r = -1; ++r < t.length; )
        if (!Array.isArray(t[r]))
          return ks(t, e[n]);
      return Om(e, n, t);
  }
}
var Xw = 0.017453292519943295;
function Kw(t, e) {
  var n = e[0], r = e[1];
  !(n in t) && r in t && (t[n] = t[r], e.length === 3 && (t[n] = e[2](t[n])));
}
function rr(t) {
  return t * Xw;
}
function Zw(t) {
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
    return Kw(t, u);
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
function vv(t) {
  var e = Yw(t), n = e.shift(), r = e.shift();
  e.unshift(["name", r]), e.unshift(["type", n]);
  var i = {};
  return ks(e, i), Zw(i), i;
}
function Kt(t) {
  var e = this;
  if (arguments.length === 2) {
    var n = arguments[1];
    typeof n == "string" ? n.charAt(0) === "+" ? Kt[t] = If(arguments[1]) : Kt[t] = vv(arguments[1]) : Kt[t] = n;
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
Fw(Kt);
function Jw(t) {
  return typeof t == "string";
}
function Qw(t) {
  return t in Kt;
}
var ex = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function tx(t) {
  return ex.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var nx = ["3857", "900913", "3785", "102113"];
function rx(t) {
  var e = Oi(t, "authority");
  if (!!e) {
    var n = Oi(e, "epsg");
    return n && nx.indexOf(n) > -1;
  }
}
function ix(t) {
  var e = Oi(t, "extension");
  if (!!e)
    return Oi(e, "proj4");
}
function sx(t) {
  return t[0] === "+";
}
function ax(t) {
  if (Jw(t)) {
    if (Qw(t))
      return Kt[t];
    if (tx(t)) {
      var e = vv(t);
      if (rx(e))
        return Kt["EPSG:3857"];
      var n = ix(e);
      return n ? If(n) : e;
    }
    if (sx(t))
      return If(t);
  } else
    return t;
}
function Mm(t, e) {
  t = t || {};
  var n, r;
  if (!e)
    return t;
  for (r in e)
    n = e[r], n !== void 0 && (t[r] = n);
  return t;
}
function Er(t, e, n) {
  var r = t * e;
  return n / Math.sqrt(1 - r * r);
}
function vo(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= gt ? t : t - vo(t) * to;
}
function Xn(t, e, n) {
  var r = t * n, i = 0.5 * t;
  return r = Math.pow((1 - r) / (1 + r), i), Math.tan(0.5 * (H - e)) / r;
}
function ro(t, e) {
  for (var n = 0.5 * t, r, i, s = H - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (r = t * Math.sin(s), i = H - 2 * Math.atan(e * Math.pow((1 - r) / (1 + r), n)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function ox() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = Er(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function lx(t) {
  var e = t.x, n = t.y;
  if (n * ur > 90 && n * ur < -90 && e * ur > 180 && e * ur < -180)
    return null;
  var r, i;
  if (Math.abs(Math.abs(n) - H) <= te)
    return null;
  if (this.sphere)
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(We + 0.5 * n));
  else {
    var s = Math.sin(n), a = Xn(this.e, n, s);
    r = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 - this.a * this.k0 * Math.log(a);
  }
  return t.x = r, t.y = i, t;
}
function ux(t) {
  var e = t.x - this.x0, n = t.y - this.y0, r, i;
  if (this.sphere)
    i = H - 2 * Math.atan(Math.exp(-n / (this.a * this.k0)));
  else {
    var s = Math.exp(-n / (this.a * this.k0));
    if (i = ro(this.e, s), i === -9999)
      return null;
  }
  return r = se(this.long0 + e / (this.a * this.k0)), t.x = r, t.y = i, t;
}
var cx = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const fx = {
  init: ox,
  forward: lx,
  inverse: ux,
  names: cx
};
function hx() {
}
function Tm(t) {
  return t;
}
var dx = ["longlat", "identity"];
const mx = {
  init: hx,
  forward: Tm,
  inverse: Tm,
  names: dx
};
var px = [fx, mx], Cl = {}, tu = [];
function _v(t, e) {
  var n = tu.length;
  return t.names ? (tu[n] = t, t.names.forEach(function(r) {
    Cl[r.toLowerCase()] = n;
  }), this) : (console.log(e), !0);
}
function gx(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof Cl[e] < "u" && tu[Cl[e]])
    return tu[Cl[e]];
}
function yx() {
  px.forEach(_v);
}
const vx = {
  start: yx,
  add: _v,
  get: gx
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
var _x = be.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
be.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function bx(t, e, n, r) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  r ? (t *= 1 - a * (Gw + a * (Uw + a * Bw)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function Ex(t, e, n, r, i) {
  if (!t) {
    var s = Oi(be, r);
    s || (s = _x), t = s.a, e = s.b, n = s.rf;
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
function Sx(t, e, n, r, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = Df : o.datum_type = Vw, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = cs), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = fs, o.datum_params[3] *= $a, o.datum_params[4] *= $a, o.datum_params[5] *= $a, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = Bs, o.grids = a), o.a = n, o.b = r, o.es = i, o.ep2 = s, o;
}
var bv = {};
function wx(t, e) {
  var n = new DataView(e), r = Mx(n), i = Tx(n, r), s = Nx(n, i, r), a = { header: i, subgrids: s };
  return bv[t] = a, a;
}
function xx(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(Ox);
}
function Ox(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: bv[t] || null,
    isNull: !1
  };
}
function As(t) {
  return t / 3600 * Math.PI / 180;
}
function Mx(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function Tx(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: Rf(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function Rf(t, e, n) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, n)));
}
function Nx(t, e, n) {
  for (var r = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = Lx(t, r, n), o = Px(t, r, a, n), l = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), u = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    i.push({
      ll: [As(a.lowerLongitude), As(a.lowerLatitude)],
      del: [As(a.longitudeInterval), As(a.latitudeInterval)],
      lim: [l, u],
      count: a.gridNodeCount,
      cvs: Cx(o)
    }), r += 176 + a.gridNodeCount * 16;
  }
  return i;
}
function Cx(t) {
  return t.map(function(e) {
    return [As(e.longitudeShift), As(e.latitudeShift)];
  });
}
function Lx(t, e, n) {
  return {
    name: Rf(t, e + 8, e + 16).trim(),
    parent: Rf(t, e + 24, e + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(e + 72, n),
    upperLatitude: t.getFloat64(e + 88, n),
    lowerLongitude: t.getFloat64(e + 104, n),
    upperLongitude: t.getFloat64(e + 120, n),
    latitudeInterval: t.getFloat64(e + 136, n),
    longitudeInterval: t.getFloat64(e + 152, n),
    gridNodeCount: t.getInt32(e + 168, n)
  };
}
function Px(t, e, n, r) {
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
  var n = ax(t);
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
  var s = Ex(n.a, n.b, n.rf, n.ellps, n.sphere), a = bx(s.a, s.b, s.rf, n.R_A), o = xx(n.nadgrids), l = n.datum || Sx(
    n.datumCode,
    n.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  Mm(this, n), Mm(this, r), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
mr.projections = vx;
mr.projections.start();
function kx(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === cs ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === fs ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function Ev(t, e, n) {
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
function Sv(t, e, n, r) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, m, p, g, y, v, b, E = t.x, O = t.y, N = t.z ? t.z : 0, M, P, I;
  if (o = Math.sqrt(E * E + O * O), l = Math.sqrt(E * E + O * O + N * N), o / n < i) {
    if (M = 0, l / n < i)
      return P = H, I = -r, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    M = Math.atan2(O, E);
  u = N / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), m = f * (1 - e) * c, p = u * c, b = 0;
  do
    b++, d = n / Math.sqrt(1 - e * p * p), I = o * m + N * p - d * (1 - e * p * p), h = e * d / (d + I), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), g = f * (1 - h) * c, y = u * c, v = y * m - g * p, m = g, p = y;
  while (v * v > s && b < a);
  return P = Math.atan(y / Math.abs(g)), {
    x: M,
    y: P,
    z: I
  };
}
function Ax(t, e, n) {
  if (e === cs)
    return {
      x: t.x + n[0],
      y: t.y + n[1],
      z: t.z + n[2]
    };
  if (e === fs) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + r,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function Dx(t, e, n) {
  if (e === cs)
    return {
      x: t.x - n[0],
      y: t.y - n[1],
      z: t.z - n[2]
    };
  if (e === fs) {
    var r = n[0], i = n[1], s = n[2], a = n[3], o = n[4], l = n[5], u = n[6], f = (t.x - r) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function Yo(t) {
  return t === cs || t === fs;
}
function Ix(t, e, n) {
  if (kx(t, e) || t.datum_type === Df || e.datum_type === Df)
    return n;
  var r = t.a, i = t.es;
  if (t.datum_type === Bs) {
    var s = Nm(t, !1, n);
    if (s !== 0)
      return;
    r = Sm, i = wm;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === Bs && (a = Sm, o = jw, l = wm), i === l && r === a && !Yo(t.datum_type) && !Yo(e.datum_type))
    return n;
  if (n = Ev(n, i, r), Yo(t.datum_type) && (n = Ax(n, t.datum_type, t.datum_params)), Yo(e.datum_type) && (n = Dx(n, e.datum_type, e.datum_params)), n = Sv(n, l, a, o), e.datum_type === Bs) {
    var u = Nm(e, !0, n);
    if (u !== 0)
      return;
  }
  return n;
}
function Nm(t, e, n) {
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
        if (!(m > r.y || d > r.x || g < r.y || p < r.x) && (i = Rx(r, e, c), !isNaN(i.x)))
          break e;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -r.x * ur + " " + r.y * ur + " tried: '" + s + "'"), -1) : (n.x = -i.x, n.y = i.y, 0);
}
function Rx(t, e, n) {
  var r = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return r;
  var i = { x: t.x, y: t.y };
  i.x -= n.ll[0], i.y -= n.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = Cm(i, n);
  if (e) {
    if (isNaN(s.x))
      return r;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = Cm(s, n), isNaN(u.x)) {
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
function Cm(t, e) {
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
function Lm(t, e, n) {
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
function wv(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function $x(t) {
  Pm(t.x), Pm(t.y);
}
function Pm(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function Fx(t, e) {
  return (t.datum.datum_type === cs || t.datum.datum_type === fs || t.datum.datum_type === Bs) && e.datumCode !== "WGS84" || (e.datum.datum_type === cs || e.datum.datum_type === fs || e.datum.datum_type === Bs) && t.datumCode !== "WGS84";
}
function nu(t, e, n, r) {
  var i;
  Array.isArray(n) ? n = wv(n) : n = {
    x: n.x,
    y: n.y,
    z: n.z,
    m: n.m
  };
  var s = n.z !== void 0;
  if ($x(n), t.datum && e.datum && Fx(t, e) && (i = new mr("WGS84"), n = nu(t, i, n, r), t = i), r && t.axis !== "enu" && (n = Lm(t, !1, n)), t.projName === "longlat")
    n = {
      x: n.x * At,
      y: n.y * At,
      z: n.z || 0
    };
  else if (t.to_meter && (n = {
    x: n.x * t.to_meter,
    y: n.y * t.to_meter,
    z: n.z || 0
  }), n = t.inverse(n), !n)
    return;
  if (t.from_greenwich && (n.x += t.from_greenwich), n = Ix(t.datum, e.datum, n), !!n)
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
    })), r && e.axis !== "enu" ? Lm(e, !0, n) : (n && !s && delete n.z, n);
}
var km = mr("WGS84");
function xc(t, e, n, r) {
  var i, s, a;
  return Array.isArray(n) ? (i = nu(t, e, n, r) || { x: NaN, y: NaN }, n.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(n.splice(3)) : [i.x, i.y, n[2]].concat(n.splice(3)) : [i.x, i.y].concat(n.splice(2)) : [i.x, i.y]) : (s = nu(t, e, n, r), a = Object.keys(n), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = n[o];
  }), s);
}
function Am(t) {
  return t instanceof mr ? t : t.oProj ? t.oProj : mr(t);
}
function qt(t, e, n) {
  t = Am(t);
  var r = !1, i;
  return typeof e > "u" ? (e = t, t = km, r = !0) : (typeof e.x < "u" || Array.isArray(e)) && (n = e, e = t, t = km, r = !0), e = Am(e), n ? xc(t, e, n) : (i = {
    forward: function(s, a) {
      return xc(t, e, s, a);
    },
    inverse: function(s, a) {
      return xc(e, t, s, a);
    }
  }, r && (i.oProj = e), i);
}
var Dm = 6, xv = "AJSAJS", Ov = "AFAFAF", Ds = 65, an = 73, xn = 79, wa = 86, xa = 90;
const Vx = {
  forward: Mv,
  inverse: jx,
  toPoint: Tv
};
function Mv(t, e) {
  return e = e || 5, Bx(Gx({
    lat: t[1],
    lon: t[0]
  }), e);
}
function jx(t) {
  var e = kh(Cv(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function Tv(t) {
  var e = kh(Cv(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function Oc(t) {
  return t * (Math.PI / 180);
}
function Im(t) {
  return 180 * (t / Math.PI);
}
function Gx(t) {
  var e = t.lat, n = t.lon, r = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = Oc(e), m = Oc(n), p, g;
  g = Math.floor((n + 180) / 6) + 1, n === 180 && (g = 60), e >= 56 && e < 64 && n >= 3 && n < 12 && (g = 32), e >= 72 && e < 84 && (n >= 0 && n < 9 ? g = 31 : n >= 9 && n < 21 ? g = 33 : n >= 21 && n < 33 ? g = 35 : n >= 33 && n < 42 && (g = 37)), a = (g - 1) * 6 - 180 + 3, p = Oc(a), o = i / (1 - i), l = r / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (m - p), h = r * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var y = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, v = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (v += 1e7), {
    northing: Math.round(v),
    easting: Math.round(y),
    zoneNumber: g,
    zoneLetter: Ux(e)
  };
}
function kh(t) {
  var e = t.northing, n = t.easting, r = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, m, p, g, y, v, b = n - 5e5, E = e;
  r < "N" && (E -= 1e7), g = (i - 1) * 6 - 180 + 3, l = o / (1 - o), p = E / s, y = p / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), v = y + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * y) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * y) + 151 * u * u * u / 96 * Math.sin(6 * y), f = a / Math.sqrt(1 - o * Math.sin(v) * Math.sin(v)), c = Math.tan(v) * Math.tan(v), h = l * Math.cos(v) * Math.cos(v), d = a * (1 - o) / Math.pow(1 - o * Math.sin(v) * Math.sin(v), 1.5), m = b / (f * s);
  var O = v - f * Math.tan(v) / d * (m * m / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * m * m * m * m / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * m * m * m * m * m * m / 720);
  O = Im(O);
  var N = (m - (1 + 2 * c + h) * m * m * m / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * m * m * m * m * m / 120) / Math.cos(v);
  N = g + Im(N);
  var M;
  if (t.accuracy) {
    var P = kh({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    M = {
      top: P.lat,
      right: P.lon,
      bottom: O,
      left: N
    };
  } else
    M = {
      lat: O,
      lon: N
    };
  return M;
}
function Ux(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function Bx(t, e) {
  var n = "00000" + t.easting, r = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + Wx(t.easting, t.northing, t.zoneNumber) + n.substr(n.length - 5, e) + r.substr(r.length - 5, e);
}
function Wx(t, e, n) {
  var r = Nv(n), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return qx(i, s, r);
}
function Nv(t) {
  var e = t % Dm;
  return e === 0 && (e = Dm), e;
}
function qx(t, e, n) {
  var r = n - 1, i = xv.charCodeAt(r), s = Ov.charCodeAt(r), a = i + t - 1, o = s + e, l = !1;
  a > xa && (a = a - xa + Ds - 1, l = !0), (a === an || i < an && a > an || (a > an || i < an) && l) && a++, (a === xn || i < xn && a > xn || (a > xn || i < xn) && l) && (a++, a === an && a++), a > xa && (a = a - xa + Ds - 1), o > wa ? (o = o - wa + Ds - 1, l = !0) : l = !1, (o === an || s < an && o > an || (o > an || s < an) && l) && o++, (o === xn || s < xn && o > xn || (o > xn || s < xn) && l) && (o++, o === an && o++), o > wa && (o = o - wa + Ds - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function Cv(t) {
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
  for (var l = Nv(a), u = Hx(n.charAt(0), l), f = zx(n.charAt(1), l); f < Yx(o); )
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
function Hx(t, e) {
  for (var n = xv.charCodeAt(e - 1), r = 1e5, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > xa) {
      if (i)
        throw "Bad character: " + t;
      n = Ds, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function zx(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var n = Ov.charCodeAt(e - 1), r = 0, i = !1; n !== t.charCodeAt(0); ) {
    if (n++, n === an && n++, n === xn && n++, n > wa) {
      if (i)
        throw "Bad character: " + t;
      n = Ds, i = !0;
    }
    r += 1e5;
  }
  return r;
}
function Yx(t) {
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
function Js(t, e, n) {
  if (!(this instanceof Js))
    return new Js(t, e, n);
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
Js.fromMGRS = function(t) {
  return new Js(Tv(t));
};
Js.prototype.toMGRS = function(t) {
  return Mv([this.x, this.y], t);
};
var Xx = 1, Kx = 0.25, Rm = 0.046875, $m = 0.01953125, Fm = 0.01068115234375, Zx = 0.75, Jx = 0.46875, Qx = 0.013020833333333334, eO = 0.007120768229166667, tO = 0.3645833333333333, nO = 0.005696614583333333, rO = 0.3076171875;
function Lv(t) {
  var e = [];
  e[0] = Xx - t * (Kx + t * (Rm + t * ($m + t * Fm))), e[1] = t * (Zx - t * (Rm + t * ($m + t * Fm)));
  var n = t * t;
  return e[2] = n * (Jx - t * (Qx + t * eO)), n *= t, e[3] = n * (tO - t * nO), e[4] = n * t * rO, e;
}
function zu(t, e, n, r) {
  return n *= e, e *= e, r[0] * t - n * (r[1] + e * (r[2] + e * (r[3] + e * r[4])));
}
var iO = 20;
function Pv(t, e, n) {
  for (var r = 1 / (1 - e), i = t, s = iO; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = (zu(i, a, Math.cos(i), n) - t) * (o * Math.sqrt(o)) * r, i -= o, Math.abs(o) < te)
      return i;
  }
  return i;
}
function sO() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Lv(this.es), this.ml0 = zu(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function aO(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s, a, o = Math.sin(n), l = Math.cos(n);
  if (this.es) {
    var f = l * r, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), m = Math.abs(l) > te ? Math.tan(n) : 0, p = Math.pow(m, 2), g = Math.pow(p, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var y = zu(n, o, l, this.en);
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
function oO(t) {
  var e, n, r, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, n = Pv(e, this.es, this.en), Math.abs(n) < H) {
      var c = Math.sin(n), h = Math.cos(n), d = Math.abs(h) > te ? Math.tan(n) : 0, m = this.ep2 * Math.pow(h, 2), p = Math.pow(m, 2), g = Math.pow(d, 2), y = Math.pow(g, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var v = s * Math.sqrt(e) / this.k0, b = Math.pow(v, 2);
      e = e * d, r = n - e * b / (1 - this.es) * 0.5 * (1 - b / 12 * (5 + 3 * g - 9 * m * g + m - 4 * p - b / 30 * (61 + 90 * g - 252 * m * g + 45 * y + 46 * m - b / 56 * (1385 + 3633 * g + 4095 * y + 1574 * y * g)))), i = se(this.long0 + v * (1 - b / 6 * (1 + 2 * g + m - b / 20 * (5 + 28 * g + 24 * y + 8 * m * g + 6 * m - b / 42 * (61 + 662 * g + 1320 * y + 720 * y * g)))) / h);
    } else
      r = H * vo(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), r = Math.asin(e), a < 0 && (r = -r), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = r, t;
}
var lO = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const Ll = {
  init: sO,
  forward: aO,
  inverse: oO,
  names: lO
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
function uO(t) {
  var e = 1 + t, n = e - 1;
  return n === 0 ? t : t * Math.log(e) / n;
}
function cO(t) {
  var e = Math.abs(t);
  return e = uO(e * (1 + e / (Mn(1, e) + 1))), t < 0 ? -e : e;
}
function Ah(t, e) {
  for (var n = 2 * Math.cos(2 * e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function fO(t, e) {
  for (var n = 2 * Math.cos(e), r = t.length - 1, i = t[r], s = 0, a; --r >= 0; )
    a = -s + n * i + t[r], s = i, i = a;
  return Math.sin(e) * a;
}
function hO(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function Av(t, e, n) {
  for (var r = Math.sin(e), i = Math.cos(e), s = kv(n), a = hO(n), o = 2 * i * a, l = -2 * r * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, m, p; --u >= 0; )
    m = h, p = c, h = f, c = d, f = -m + o * h - l * c + t[u], d = -p + l * h + o * c;
  return o = r * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function dO() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (Ll.init.apply(this), this.forward = Ll.forward, this.inverse = Ll.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), n = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), n = n * e, this.cgb[1] = n * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = n * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), n = n * e, this.cgb[2] = n * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = n * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), n = n * e, this.cgb[3] = n * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = n * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), n = n * e, this.cgb[4] = n * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = n * (-734 / 315 + e * (109598 / 31185)), n = n * e, this.cgb[5] = n * (601676 / 22275), this.cbg[5] = n * (444337 / 155925), n = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + n * (1 / 4 + n * (1 / 64 + n / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = n * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = n * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), n = n * e, this.utg[2] = n * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = n * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), n = n * e, this.utg[3] = n * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = n * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), n = n * e, this.utg[4] = n * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = n * (34729 / 80640 + e * (-3418889 / 1995840)), n = n * e, this.utg[5] = n * (-20648693 / 638668800), this.gtu[5] = n * (212378941 / 319334400);
  var r = Ah(this.cbg, this.lat0);
  this.Zb = -this.Qn * (r + fO(this.gtu, 2 * r));
}
function mO(t) {
  var e = se(t.x - this.long0), n = t.y;
  n = Ah(this.cbg, n);
  var r = Math.sin(n), i = Math.cos(n), s = Math.sin(e), a = Math.cos(e);
  n = Math.atan2(r, a * i), e = Math.atan2(s * i, Mn(r, i * a)), e = cO(Math.tan(e));
  var o = Av(this.gtu, 2 * n, 2 * e);
  n = n + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * n + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function pO(t) {
  var e = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  n = (n - this.Zb) / this.Qn, e = e / this.Qn;
  var r, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = Av(this.utg, 2 * n, 2 * e);
    n = n + s[0], e = e + s[1], e = Math.atan(kv(e));
    var a = Math.sin(n), o = Math.cos(n), l = Math.sin(e), u = Math.cos(e);
    n = Math.atan2(a * u, Mn(l, u * o)), e = Math.atan2(l, u * o), r = se(e + this.long0), i = Ah(this.cgb, n);
  } else
    r = 1 / 0, i = 1 / 0;
  return t.x = r, t.y = i, t;
}
var gO = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const Pl = {
  init: dO,
  forward: mO,
  inverse: pO,
  names: gO
};
function yO(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var vO = "etmerc";
function _O() {
  var t = yO(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * At, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Pl.init.apply(this), this.forward = Pl.forward, this.inverse = Pl.inverse;
}
var bO = ["Universal Transverse Mercator System", "utm"];
const EO = {
  init: _O,
  names: bO,
  dependsOn: vO
};
function Dh(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var SO = 20;
function wO() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + We) / (Math.pow(Math.tan(0.5 * this.lat0 + We), this.C) * Dh(this.e * t, this.ratexp));
}
function xO(t) {
  var e = t.x, n = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * n + We), this.C) * Dh(this.e * Math.sin(n), this.ratexp)) - H, t.x = this.C * e, t;
}
function OO(t) {
  for (var e = 1e-14, n = t.x / this.C, r = t.y, i = Math.pow(Math.tan(0.5 * r + We) / this.K, 1 / this.C), s = SO; s > 0 && (r = 2 * Math.atan(i * Dh(this.e * Math.sin(t.y), -0.5 * this.e)) - H, !(Math.abs(r - t.y) < e)); --s)
    t.y = r;
  return s ? (t.x = n, t.y = r, t) : null;
}
var MO = ["gauss"];
const Ih = {
  init: wO,
  forward: xO,
  inverse: OO,
  names: MO
};
function TO() {
  Ih.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function NO(t) {
  var e, n, r, i;
  return t.x = se(t.x - this.long0), Ih.forward.apply(this, [t]), e = Math.sin(t.y), n = Math.cos(t.y), r = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * n * r), t.x = i * n * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * n * r), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function CO(t) {
  var e, n, r, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Mn(t.x, t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), n = Math.cos(a), i = Math.asin(n * this.sinc0 + t.y * e * this.cosc0 / s), r = Math.atan2(t.x * e, s * this.cosc0 * n - t.y * this.sinc0 * e);
  } else
    i = this.phic0, r = 0;
  return t.x = r, t.y = i, Ih.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var LO = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const PO = {
  init: TO,
  forward: NO,
  inverse: CO,
  names: LO
};
function kO(t, e, n) {
  return e *= n, Math.tan(0.5 * (H + t)) * Math.pow((1 - e) / (1 + e), 0.5 * n);
}
function AO() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && (this.k0 = 0.5 * (1 + vo(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= te && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= te && Math.abs(Math.cos(this.lat_ts)) > te && (this.k0 = 0.5 * this.cons * Er(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Xn(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = Er(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - H, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function DO(t) {
  var e = t.x, n = t.y, r = Math.sin(n), i = Math.cos(n), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= te && Math.abs(n + this.lat0) <= te ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * r + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * r - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(n, r, this.e)) - H, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= te ? (u = Xn(this.e, n * this.con, this.con * r), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < te ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function IO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, n = this.lat0, a <= te ? (t.x = e, t.y = n, t) : (n = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < te ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = n, t);
  } else if (Math.abs(this.coslat0) <= te) {
    if (a <= te)
      return n = this.lat0, e = this.long0, t.x = e, t.y = n, t;
    t.x *= this.con, t.y *= this.con, r = a * this.cons / (2 * this.a * this.k0), n = this.con * ro(this.e, r), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= te ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), n = -1 * ro(this.e, Math.tan(0.5 * (H + s)));
  return t.x = e, t.y = n, t;
}
var RO = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const $O = {
  init: AO,
  forward: DO,
  inverse: IO,
  names: RO,
  ssfn_: kO
};
function FO() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), n = this.a, r = this.rf, i = 1 / r, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * n * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function VO(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), n = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), r = -this.alpha * (e + n) + this.K, i = 2 * (Math.atan(Math.exp(r)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function jO(t) {
  for (var e = t.x - this.x0, n = t.y - this.y0, r = e / this.R, i = 2 * (Math.atan(Math.exp(n / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(r)), a = Math.atan(Math.sin(r) / (Math.cos(this.b0) * Math.cos(r) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var GO = ["somerc"];
const UO = {
  init: FO,
  forward: VO,
  inverse: jO,
  names: GO
};
var Cs = 1e-7;
function BO(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], n = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(n) !== -1;
}
function WO() {
  var t, e, n, r, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, m = 0, p = 0, g = 0, y = 0;
  this.no_off = BO(this), this.no_rot = "no_rot" in this;
  var v = !1;
  "alpha" in this && (v = !0);
  var b = !1;
  if ("rectified_grid_angle" in this && (b = !0), v && (y = this.alpha), b && (f = this.rectified_grid_angle * At), v || b)
    h = this.longc;
  else if (d = this.long1, p = this.lat1, m = this.long2, g = this.lat2, Math.abs(p - g) <= Cs || (t = Math.abs(p)) <= Cs || Math.abs(t - H) <= Cs || Math.abs(Math.abs(this.lat0) - H) <= Cs || Math.abs(Math.abs(g) - H) <= Cs)
    throw new Error();
  var E = 1 - this.es;
  e = Math.sqrt(E), Math.abs(this.lat0) > te ? (o = Math.sin(this.lat0), n = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = n * n, this.B = Math.sqrt(1 + this.es * this.B * this.B / E), this.A = this.B * this.k0 * e / t, r = this.B * e / (n * Math.sqrt(t)), i = r * r - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += r, this.E *= Math.pow(Xn(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = r = i = 1), v || b ? (v ? (c = Math.asin(Math.sin(y) / r), b || (f = y)) : (c = f, y = Math.asin(r * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(Xn(this.e, p, Math.sin(p)), this.B), a = Math.pow(Xn(this.e, g, Math.sin(g)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - m, t < -Math.pi ? m -= to : t > Math.pi && (m += to), this.lam0 = se(0.5 * (d + m) - Math.atan(u * Math.tan(0.5 * this.B * (d - m)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = y = Math.asin(r * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(r * r - 1) / Math.cos(y))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(We - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(We + i));
}
function qO(t) {
  var e = {}, n, r, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - H) > te) {
    if (a = this.E / Math.pow(Xn(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, n = 0.5 * (a - o), r = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (n * this.singam - s * this.cosgam) / r, Math.abs(Math.abs(i) - 1) < te)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < Cs ? l = this.A * t.x : l = this.ArB * Math.atan2(n * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function HO(t) {
  var e, n, r, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (n = t.y, e = t.x) : (n = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), r = Math.exp(-this.BrA * n), i = 0.5 * (r - 1 / r), s = 0.5 * (r + 1 / r), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < te)
    l.x = 0, l.y = o < 0 ? -H : H;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = ro(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var zO = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const YO = {
  init: WO,
  forward: qO,
  inverse: HO,
  names: zO
};
function XO() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < te)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), n = Math.cos(this.lat1), r = Er(this.e, e, n), i = Xn(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = Er(this.e, s, a), l = Xn(this.e, this.lat2, s), u = Xn(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > te ? this.ns = Math.log(r / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = r / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function KO(t) {
  var e = t.x, n = t.y;
  Math.abs(2 * Math.abs(n) - Math.PI) <= te && (n = vo(n) * (H - 2 * te));
  var r = Math.abs(Math.abs(n) - H), i, s;
  if (r > te)
    i = Xn(this.e, n, Math.sin(n)), s = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (r = n * this.ns, r <= 0)
      return null;
    s = 0;
  }
  var a = this.ns * se(e - this.long0);
  return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t;
}
function ZO(t) {
  var e, n, r, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), n = 1) : (e = -Math.sqrt(a * a + o * o), n = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(n * a, n * o)), e !== 0 || this.ns > 0) {
    if (n = 1 / this.ns, r = Math.pow(e / (this.a * this.f0), n), i = ro(this.e, r), i === -9999)
      return null;
  } else
    i = -H;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var JO = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const QO = {
  init: XO,
  forward: KO,
  inverse: ZO,
  names: JO
};
function eM() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function tM(t) {
  var e, n, r, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), n = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), r = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(n) + Math.sin(this.ad) * Math.cos(n) * Math.cos(r)), s = Math.asin(Math.cos(n) * Math.sin(r) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function nM(t) {
  var e, n, r, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), r = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(r) - Math.sin(this.ad) * Math.cos(r) * Math.cos(i)), n = Math.asin(Math.cos(r) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - n / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var rM = ["Krovak", "krovak"];
const iM = {
  init: eM,
  forward: tM,
  inverse: nM,
  names: rM
};
function Jt(t, e, n, r, i) {
  return t * i - e * Math.sin(2 * i) + n * Math.sin(4 * i) - r * Math.sin(6 * i);
}
function _o(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function bo(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function Eo(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function So(t) {
  return t * t * t * (35 / 3072);
}
function Qs(t, e, n) {
  var r = e * n;
  return t / Math.sqrt(1 - r * r);
}
function ra(t) {
  return Math.abs(t) < H ? t : t - vo(t) * Math.PI;
}
function ru(t, e, n, r, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - n * Math.sin(2 * s) + r * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * n * Math.cos(2 * s) + 4 * r * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function sM() {
  this.sphere || (this.e0 = _o(this.es), this.e1 = bo(this.es), this.e2 = Eo(this.es), this.e3 = So(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function aM(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(r)), n = this.a * (Math.atan2(Math.tan(i), Math.cos(r)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = Qs(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = r * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), n = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = n + this.y0, t;
}
function oM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, n = t.y / this.a, r, i;
  if (this.sphere) {
    var s = n + this.lat0;
    r = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + n, o = ru(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - H) <= te)
      return t.x = this.long0, t.y = H, n < 0 && (t.y *= -1), t;
    var l = Qs(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    r = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = ra(r), t;
}
var lM = ["Cassini", "Cassini_Soldner", "cass"];
const uM = {
  init: sM,
  forward: aM,
  inverse: oM,
  names: lM
};
function Ei(t, e) {
  var n;
  return t > 1e-7 ? (n = t * e, (1 - t * t) * (e / (1 - n * n) - 0.5 / t * Math.log((1 - n) / (1 + n)))) : 2 * e;
}
var cM = 1, fM = 2, hM = 3, dM = 4;
function mM() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - H) < te ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < te ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = Ei(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = wM(this.es), this.mode) {
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
function pM(t) {
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
function gM(t) {
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
    r = Math.atan2(e, n), i = xM(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + r), t.y = i, t;
}
var yM = 0.3333333333333333, vM = 0.17222222222222222, _M = 0.10257936507936508, bM = 0.06388888888888888, EM = 0.0664021164021164, SM = 0.016415012942191543;
function wM(t) {
  var e, n = [];
  return n[0] = t * yM, e = t * t, n[0] += e * vM, n[1] = e * bM, e *= t, n[0] += e * _M, n[1] += e * EM, n[2] = e * SM, n;
}
function xM(t, e) {
  var n = t + t;
  return t + e[0] * Math.sin(n) + e[1] * Math.sin(n + n) + e[2] * Math.sin(n + n + n);
}
var OM = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const MM = {
  init: mM,
  forward: pM,
  inverse: gM,
  names: OM,
  S_POLE: cM,
  N_POLE: fM,
  EQUIT: hM,
  OBLIQ: dM
};
function Mi(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function TM() {
  Math.abs(this.lat1 + this.lat2) < te || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = Er(this.e3, this.sin_po, this.cos_po), this.qs1 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = Er(this.e3, this.sin_po, this.cos_po), this.qs2 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Ei(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > te ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function NM(t) {
  var e = t.x, n = t.y;
  this.sin_phi = Math.sin(n), this.cos_phi = Math.cos(n);
  var r = Ei(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function CM(t) {
  var e, n, r, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), r = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), r = -1), i = 0, e !== 0 && (i = Math.atan2(r * t.x, r * t.y)), r = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - r * r) / (2 * this.ns0)) : (n = (this.c - r * r) / this.ns0, a = this.phi1z(this.e3, n)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function LM(t, e) {
  var n, r, i, s, a, o = Mi(0.5 * e);
  if (t < te)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (n = Math.sin(o), r = Math.cos(o), i = t * n, s = 1 - i * i, a = 0.5 * s * s / r * (e / (1 - l) - n / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var PM = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const kM = {
  init: TM,
  forward: NM,
  inverse: CM,
  names: PM,
  phi1z: LM
};
function AM() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function DM(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, a > 0 || Math.abs(a) <= te ? (o = this.x0 + this.a * s * n * Math.sin(r) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i) / a) : (o = this.x0 + this.infinity_dist * n * Math.sin(r), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function IM(t) {
  var e, n, r, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), n = Math.sin(i), r = Math.cos(i), a = Mi(r * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.atan2(t.x * n, e * this.cos_p14 * r - t.y * this.sin_p14 * n), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var RM = ["gnom"];
const $M = {
  init: AM,
  forward: DM,
  inverse: IM,
  names: RM
};
function FM(t, e) {
  var n = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(e) - n) < 1e-6)
    return e < 0 ? -1 * H : H;
  for (var r = Math.asin(0.5 * e), i, s, a, o, l = 0; l < 30; l++)
    if (s = Math.sin(r), a = Math.cos(r), o = t * s, i = Math.pow(1 - o * o, 2) / (2 * a) * (e / (1 - t * t) - s / (1 - o * o) + 0.5 / t * Math.log((1 - o) / (1 + o))), r += i, Math.abs(i) <= 1e-10)
      return r;
  return NaN;
}
function VM() {
  this.sphere || (this.k0 = Er(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function jM(t) {
  var e = t.x, n = t.y, r, i, s = se(e - this.long0);
  if (this.sphere)
    r = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(n) / Math.cos(this.lat_ts);
  else {
    var a = Ei(this.e, Math.sin(n));
    r = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = r, t.y = i, t;
}
function GM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), n = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (n = FM(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = n, t;
}
var UM = ["cea"];
const BM = {
  init: VM,
  forward: jM,
  inverse: GM,
  names: UM
};
function WM() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function qM(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = ra(n - this.lat0);
  return t.x = this.x0 + this.a * r * this.rc, t.y = this.y0 + this.a * i, t;
}
function HM(t) {
  var e = t.x, n = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = ra(this.lat0 + (n - this.y0) / this.a), t;
}
var zM = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const YM = {
  init: WM,
  forward: qM,
  inverse: HM,
  names: zM
};
var Vm = 20;
function XM() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = _o(this.es), this.e1 = bo(this.es), this.e2 = Eo(this.es), this.e3 = So(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function KM(t) {
  var e = t.x, n = t.y, r, i, s, a = se(e - this.long0);
  if (s = a * Math.sin(n), this.sphere)
    Math.abs(n) <= te ? (r = this.a * a, i = -1 * this.a * this.lat0) : (r = this.a * Math.sin(s) / Math.tan(n), i = this.a * (ra(n - this.lat0) + (1 - Math.cos(s)) / Math.tan(n)));
  else if (Math.abs(n) <= te)
    r = this.a * a, i = -1 * this.ml0;
  else {
    var o = Qs(this.a, this.e, Math.sin(n)) / Math.tan(n);
    r = o * Math.sin(s), i = this.a * Jt(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(s));
  }
  return t.x = r + this.x0, t.y = i + this.y0, t;
}
function ZM(t) {
  var e, n, r, i, s, a, o, l, u;
  if (r = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= te)
      e = se(r / this.a + this.long0), n = 0;
    else {
      a = this.lat0 + i / this.a, o = r * r / this.a / this.a + a * a, l = a;
      var f;
      for (s = Vm; s; --s)
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
    for (s = Vm; s; --s)
      if (p = this.e * Math.sin(l), c = Math.sqrt(1 - p * p) * Math.tan(l), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), m = h / this.a, u = (a * (c * m + 1) - m - 0.5 * c * (m * m + o)) / (this.es * Math.sin(2 * l) * (m * m + o - 2 * a * m) / (4 * c) + (a - m) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= te) {
        n = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(n), 2)) * Math.tan(n), e = se(this.long0 + Math.asin(r * c / this.a) / Math.sin(n));
  }
  return t.x = e, t.y = n, t;
}
var JM = ["Polyconic", "poly"];
const QM = {
  init: XM,
  forward: KM,
  inverse: ZM,
  names: JM
};
function eT() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function tT(t) {
  var e, n = t.x, r = t.y, i = r - this.lat0, s = n - this.long0, a = i / $a * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, m, p, g = 0, y = 0;
  for (e = 1; e <= 6; e++)
    m = h * f - d * c, p = d * f + h * c, h = m, d = p, g = g + this.B_re[e] * h - this.B_im[e] * d, y = y + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = y * this.a + this.x0, t.y = g * this.a + this.y0, t;
}
function nT(t) {
  var e, n = t.x, r = t.y, i = n - this.x0, s = r - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var m = 0; m < this.iterations; m++) {
    var p = h, g = d, y, v, b = a, E = o;
    for (e = 2; e <= 6; e++)
      y = p * h - g * d, v = g * h + p * d, p = y, g = v, b = b + (e - 1) * (this.B_re[e] * p - this.B_im[e] * g), E = E + (e - 1) * (this.B_im[e] * p + this.B_re[e] * g);
    p = 1, g = 0;
    var O = this.B_re[1], N = this.B_im[1];
    for (e = 2; e <= 6; e++)
      y = p * h - g * d, v = g * h + p * d, p = y, g = v, O = O + e * (this.B_re[e] * p - this.B_im[e] * g), N = N + e * (this.B_im[e] * p + this.B_re[e] * g);
    var M = O * O + N * N;
    h = (b * O + E * N) / M, d = (E * O - b * N) / M;
  }
  var P = h, I = d, C = 1, R = 0;
  for (e = 1; e <= 9; e++)
    C = C * P, R = R + this.D[e] * C;
  var D = this.lat0 + R * $a * 1e5, Q = this.long0 + I;
  return t.x = Q, t.y = D, t;
}
var rT = ["New_Zealand_Map_Grid", "nzmg"];
const iT = {
  init: eT,
  forward: tT,
  inverse: nT,
  names: rT
};
function sT() {
}
function aT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i = this.x0 + this.a * r, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + n / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function oT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), n = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = n, t;
}
var lT = ["Miller_Cylindrical", "mill"];
const uT = {
  init: sT,
  forward: aT,
  inverse: oT,
  names: lT
};
var cT = 20;
function fT() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Lv(this.es);
}
function hT(t) {
  var e, n, r = t.x, i = t.y;
  if (r = se(r - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = cT; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < te)
          break;
      }
    e = this.a * this.C_x * r * (this.m + Math.cos(i)), n = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    n = this.a * zu(i, l, u, this.en), e = this.a * r * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = n, t;
}
function dT(t) {
  var e, n, r, i;
  return t.x -= this.x0, r = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, r = r / (this.C_x * (this.m + Math.cos(e))), this.m ? e = Mi((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = Mi(Math.sin(e) / this.n)), r = se(r + this.long0), e = ra(e)) : (e = Pv(t.y / this.a, this.es, this.en), i = Math.abs(e), i < H ? (i = Math.sin(e), n = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), r = se(n)) : i - te < H && (r = this.long0)), t.x = r, t.y = e, t;
}
var mT = ["Sinusoidal", "sinu"];
const pT = {
  init: fT,
  forward: hT,
  inverse: dT,
  names: mT
};
function gT() {
}
function yT(t) {
  for (var e = t.x, n = t.y, r = se(e - this.long0), i = n, s = Math.PI * Math.sin(n); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < te)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(n) < te && (r = 0);
  var o = 0.900316316158 * this.a * r * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function vT(t) {
  var e, n;
  t.x -= this.x0, t.y -= this.y0, n = t.y / (1.4142135623731 * this.a), Math.abs(n) > 0.999999999999 && (n = 0.999999999999), e = Math.asin(n);
  var r = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  r < -Math.PI && (r = -Math.PI), r > Math.PI && (r = Math.PI), n = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(n) > 1 && (n = 1);
  var i = Math.asin(n);
  return t.x = r, t.y = i, t;
}
var _T = ["Mollweide", "moll"];
const bT = {
  init: gT,
  forward: yT,
  inverse: vT,
  names: _T
};
function ET() {
  Math.abs(this.lat1 + this.lat2) < te || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = _o(this.es), this.e1 = bo(this.es), this.e2 = Eo(this.es), this.e3 = So(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = Er(this.e, this.sinphi, this.cosphi), this.ml1 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < te ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = Er(this.e, this.sinphi, this.cosphi), this.ml2 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function ST(t) {
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
function wT(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, n, r, i;
  this.ns >= 0 ? (n = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (n = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (n !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), r = ra(this.g - n / this.a), t.x = i, t.y = r, t;
  var a = this.g - n / this.a;
  return r = ru(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = r, t;
}
var xT = ["Equidistant_Conic", "eqdc"];
const OT = {
  init: ET,
  forward: ST,
  inverse: wT,
  names: xT
};
function MT() {
  this.R = this.a;
}
function TT(t) {
  var e = t.x, n = t.y, r = se(e - this.long0), i, s;
  Math.abs(n) <= te && (i = this.x0 + this.R * r, s = this.y0);
  var a = Mi(2 * Math.abs(n / Math.PI));
  (Math.abs(r) <= te || Math.abs(Math.abs(n) - H) <= te) && (i = this.x0, n >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / r - r / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), m = d * d, p = Math.PI * this.R * (o * (c - m) + Math.sqrt(l * (c - m) * (c - m) - (m + l) * (h - m))) / (m + l);
  r < 0 && (p = -p), i = this.x0 + p;
  var g = l + c;
  return p = Math.PI * this.R * (d * g - o * Math.sqrt((m + l) * (l + 1) - g * g)) / (m + l), n >= 0 ? s = this.y0 + p : s = this.y0 - p, t.x = i, t.y = s, t;
}
function NT(t) {
  var e, n, r, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, r = t.x / c, i = t.y / c, s = r * r + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + r * r, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? n = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : n = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(r) < te ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (r * r - i * i) + s * s)) / 2 / r), t.x = e, t.y = n, t;
}
var CT = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const LT = {
  init: MT,
  forward: TT,
  inverse: NT,
  names: CT
};
function PT() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function kT(t) {
  var e = t.x, n = t.y, r = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, m, p, g, y, v, b, E, O, N, M, P, I, C, R, D;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= te ? (t.x = this.x0 + this.a * (H - n) * Math.sin(s), t.y = this.y0 - this.a * (H - n) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (t.x = this.x0 + this.a * (H + n) * Math.sin(s), t.y = this.y0 + this.a * (H + n) * Math.cos(s), t) : (M = this.sin_p12 * r + this.cos_p12 * i * Math.cos(s), O = Math.acos(M), N = O ? O / Math.sin(O) : 1, t.x = this.x0 + this.a * N * i * Math.sin(s), t.y = this.y0 + this.a * N * (this.cos_p12 * r - this.sin_p12 * i * Math.cos(s)), t) : (a = _o(this.es), o = bo(this.es), l = Eo(this.es), u = So(this.es), Math.abs(this.sin_p12 - 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= te ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, n), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = r / i, d = Qs(this.a, this.e, this.sin_p12), m = Qs(this.a, this.e, r), p = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (m * i)), g = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(p) - this.sin_p12 * Math.cos(s)), g === 0 ? P = Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : Math.abs(Math.abs(g) - Math.PI) <= te ? P = -Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : P = Math.asin(Math.sin(s) * Math.cos(p) / Math.sin(g)), y = this.e * this.sin_p12 / Math.sqrt(1 - this.es), v = this.e * this.cos_p12 * Math.cos(g) / Math.sqrt(1 - this.es), b = y * v, E = v * v, I = P * P, C = I * P, R = C * P, D = R * P, O = d * P * (1 - I * E * (1 - E) / 6 + C / 8 * b * (1 - 2 * E) + R / 120 * (E * (4 - 7 * E) - 3 * y * y * (1 - 7 * E)) - D / 48 * b), t.x = this.x0 + O * Math.sin(g), t.y = this.y0 + O * Math.cos(g), t));
}
function AT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, n, r, i, s, a, o, l, u, f, c, h, d, m, p, g, y, v, b, E, O, N, M, P;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * H * this.a ? void 0 : (n = e / this.a, r = Math.sin(n), i = Math.cos(n), s = this.long0, Math.abs(e) <= te ? a = this.lat0 : (a = Mi(i * this.sin_p12 + t.y * r * this.cos_p12 / e), o = Math.abs(this.lat0) - H, Math.abs(o) <= te ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p12 * i - t.y * this.sin_p12 * r))), t.x = s, t.y = a, t)) : (l = _o(this.es), u = bo(this.es), f = Eo(this.es), c = So(this.es), Math.abs(this.sin_p12 - 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = ru(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= te ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = ru(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), g = Math.atan2(t.x, t.y), m = Qs(this.a, this.e, this.sin_p12), y = Math.cos(g), v = this.e * this.cos_p12 * y, b = -v * v / (1 - this.es), E = 3 * this.es * (1 - b) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), O = e / m, N = O - b * (1 + b) * Math.pow(O, 3) / 6 - E * (1 + 3 * b) * Math.pow(O, 4) / 24, M = 1 - b * N * N / 2 - O * N * N * N / 6, p = Math.asin(this.sin_p12 * Math.cos(N) + this.cos_p12 * Math.sin(N) * y), s = se(this.long0 + Math.asin(Math.sin(g) * Math.sin(N) / Math.cos(p))), P = Math.sin(p), a = Math.atan2((P - this.es * M * this.sin_p12) * Math.tan(p), P * (1 - this.es)), t.x = s, t.y = a, t));
}
var DT = ["Azimuthal_Equidistant", "aeqd"];
const IT = {
  init: PT,
  forward: kT,
  inverse: AT,
  names: DT
};
function RT() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function $T(t) {
  var e, n, r, i, s, a, o, l, u = t.x, f = t.y;
  return r = se(u - this.long0), e = Math.sin(f), n = Math.cos(f), i = Math.cos(r), a = this.sin_p14 * e + this.cos_p14 * n * i, s = 1, (a > 0 || Math.abs(a) <= te) && (o = this.a * s * n * Math.sin(r), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * n * i)), t.x = o, t.y = l, t;
}
function FT(t) {
  var e, n, r, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), n = Mi(e / this.a), r = Math.sin(n), i = Math.cos(n), a = this.long0, Math.abs(e) <= te ? (o = this.lat0, t.x = a, t.y = o, t) : (o = Mi(i * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.abs(this.lat0) - H, Math.abs(s) <= te ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * r, e * this.cos_p14 * i - t.y * this.sin_p14 * r)), t.x = a, t.y = o, t));
}
var VT = ["ortho"];
const jT = {
  init: RT,
  forward: $T,
  inverse: FT,
  names: VT
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
function GT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= H - We / 2 ? this.face = ot.TOP : this.lat0 <= -(H - We / 2) ? this.face = ot.BOTTOM : Math.abs(this.long0) <= We ? this.face = ot.FRONT : Math.abs(this.long0) <= H + We ? this.face = this.long0 > 0 ? ot.RIGHT : ot.LEFT : this.face = ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function UT(t) {
  var e = { x: 0, y: 0 }, n, r, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? n = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : n = t.y, r = t.x, this.face === ot.TOP)
    s = H - n, r >= We && r <= H + We ? (l.value = qe.AREA_0, i = r - H) : r > H + We || r <= -(H + We) ? (l.value = qe.AREA_1, i = r > 0 ? r - gt : r + gt) : r > -(H + We) && r <= -We ? (l.value = qe.AREA_2, i = r + H) : (l.value = qe.AREA_3, i = r);
  else if (this.face === ot.BOTTOM)
    s = H + n, r >= We && r <= H + We ? (l.value = qe.AREA_0, i = -r + H) : r < We && r >= -We ? (l.value = qe.AREA_1, i = -r) : r < -We && r >= -(H + We) ? (l.value = qe.AREA_2, i = -r - H) : (l.value = qe.AREA_3, i = r > 0 ? -r + gt : -r - gt);
  else {
    var u, f, c, h, d, m, p;
    this.face === ot.RIGHT ? r = Ws(r, +H) : this.face === ot.BACK ? r = Ws(r, +gt) : this.face === ot.LEFT && (r = Ws(r, -H)), h = Math.sin(n), d = Math.cos(n), m = Math.sin(r), p = Math.cos(r), u = d * p, f = d * m, c = h, this.face === ot.FRONT ? (s = Math.acos(u), i = Xo(s, c, f, l)) : this.face === ot.RIGHT ? (s = Math.acos(f), i = Xo(s, c, -u, l)) : this.face === ot.BACK ? (s = Math.acos(-u), i = Xo(s, c, -f, l)) : this.face === ot.LEFT ? (s = Math.acos(-f), i = Xo(s, c, u, l)) : (s = i = 0, l.value = qe.AREA_0);
  }
  return o = Math.atan(12 / gt * (i + Math.acos(Math.sin(i) * Math.cos(We)) - H)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === qe.AREA_1 ? o += H : l.value === qe.AREA_2 ? o += gt : l.value === qe.AREA_3 && (o += 1.5 * gt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function BT(t) {
  var e = { lam: 0, phi: 0 }, n, r, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, r = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), n = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = qe.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = qe.AREA_1, n -= H) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = qe.AREA_2, n = n < 0 ? n + gt : n - gt) : (c.value = qe.AREA_3, n += H), f = gt / 12 * Math.tan(n), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(n), s = Math.tan(r), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === ot.TOP)
    u = Math.acos(l), e.phi = H - u, c.value === qe.AREA_0 ? e.lam = o + H : c.value === qe.AREA_1 ? e.lam = o < 0 ? o + gt : o - gt : c.value === qe.AREA_2 ? e.lam = o - H : e.lam = o;
  else if (this.face === ot.BOTTOM)
    u = Math.acos(l), e.phi = u - H, c.value === qe.AREA_0 ? e.lam = -o + H : c.value === qe.AREA_1 ? e.lam = -o : c.value === qe.AREA_2 ? e.lam = -o - H : e.lam = o < 0 ? -o - gt : -o + gt;
  else {
    var h, d, m;
    h = l, f = h * h, f >= 1 ? m = 0 : m = Math.sqrt(1 - f) * Math.sin(o), f += m * m, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === qe.AREA_1 ? (f = d, d = -m, m = f) : c.value === qe.AREA_2 ? (d = -d, m = -m) : c.value === qe.AREA_3 && (f = d, d = m, m = -f), this.face === ot.RIGHT ? (f = h, h = -d, d = f) : this.face === ot.BACK ? (h = -h, d = -d) : this.face === ot.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-m) - H, e.lam = Math.atan2(d, h), this.face === ot.RIGHT ? e.lam = Ws(e.lam, -H) : this.face === ot.BACK ? e.lam = Ws(e.lam, -gt) : this.face === ot.LEFT && (e.lam = Ws(e.lam, +H));
  }
  if (this.es !== 0) {
    var p, g, y;
    p = e.phi < 0 ? 1 : 0, g = Math.tan(e.phi), y = this.b / Math.sqrt(g * g + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - y * y) / (this.one_minus_f * y)), p && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function Xo(t, e, n, r) {
  var i;
  return t < te ? (r.value = qe.AREA_0, i = 0) : (i = Math.atan2(e, n), Math.abs(i) <= We ? r.value = qe.AREA_0 : i > We && i <= H + We ? (r.value = qe.AREA_1, i -= H) : i > H + We || i <= -(H + We) ? (r.value = qe.AREA_2, i = i >= 0 ? i - gt : i + gt) : (r.value = qe.AREA_3, i += H)), i;
}
function Ws(t, e) {
  var n = t + e;
  return n < -gt ? n += to : n > +gt && (n -= to), n;
}
var WT = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const qT = {
  init: GT,
  forward: UT,
  inverse: BT,
  names: WT
};
var $f = [
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
], Oa = [
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
], Dv = 0.8487, Iv = 1.3523, Rv = ur / 5, HT = 1 / Rv, Is = 18, iu = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, zT = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function YT(t, e, n, r) {
  for (var i = e; r; --r) {
    var s = t(i);
    if (i -= s, Math.abs(s) < n)
      break;
  }
  return i;
}
function XT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function KT(t) {
  var e = se(t.x - this.long0), n = Math.abs(t.y), r = Math.floor(n * Rv);
  r < 0 ? r = 0 : r >= Is && (r = Is - 1), n = ur * (n - HT * r);
  var i = {
    x: iu($f[r], n) * e,
    y: iu(Oa[r], n)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Dv + this.x0, i.y = i.y * this.a * Iv + this.y0, i;
}
function ZT(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * Dv),
    y: Math.abs(t.y - this.y0) / (this.a * Iv)
  };
  if (e.y >= 1)
    e.x /= $f[Is][0], e.y = t.y < 0 ? -H : H;
  else {
    var n = Math.floor(e.y * Is);
    for (n < 0 ? n = 0 : n >= Is && (n = Is - 1); ; )
      if (Oa[n][0] > e.y)
        --n;
      else if (Oa[n + 1][0] <= e.y)
        ++n;
      else
        break;
    var r = Oa[n], i = 5 * (e.y - r[0]) / (Oa[n + 1][0] - r[0]);
    i = YT(function(s) {
      return (iu(r, s) - e.y) / zT(r, s);
    }, i, te, 100), e.x /= iu($f[n], i), e.y = (5 * n + i) * At, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var JT = ["Robinson", "robin"];
const QT = {
  init: XT,
  forward: KT,
  inverse: ZT,
  names: JT
};
function eN() {
  this.name = "geocent";
}
function tN(t) {
  var e = Ev(t, this.es, this.a);
  return e;
}
function nN(t) {
  var e = Sv(t, this.es, this.a, this.b);
  return e;
}
var rN = ["Geocentric", "geocentric", "geocent", "Geocent"];
const iN = {
  init: eN,
  forward: tN,
  inverse: nN,
  names: rN
};
var Ut = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, ma = {
  h: { def: 1e5, num: !0 },
  azi: { def: 0, num: !0, degrees: !0 },
  tilt: { def: 0, num: !0, degrees: !0 },
  long0: { def: 0, num: !0 },
  lat0: { def: 0, num: !0 }
};
function sN() {
  if (Object.keys(ma).forEach(function(n) {
    if (typeof this[n] > "u")
      this[n] = ma[n].def;
    else {
      if (ma[n].num && isNaN(this[n]))
        throw new Error("Invalid parameter value, must be numeric " + n + " = " + this[n]);
      ma[n].num && (this[n] = parseFloat(this[n]));
    }
    ma[n].degrees && (this[n] = this[n] * At);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - H) < te ? this.mode = this.lat0 < 0 ? Ut.S_POLE : Ut.N_POLE : Math.abs(this.lat0) < te ? this.mode = Ut.EQUIT : (this.mode = Ut.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function aN(t) {
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
function oN(t) {
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
var lN = ["Tilted_Perspective", "tpers"];
const uN = {
  init: sN,
  forward: aN,
  inverse: oN,
  names: lN
};
function cN() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var t = 1 - this.es, e = 1 / t;
    this.radius_p = Math.sqrt(t), this.radius_p2 = t, this.radius_p_inv2 = e, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function fN(t) {
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
function hN(t) {
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
var dN = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const mN = {
  init: cN,
  forward: fN,
  inverse: hN,
  names: dN
};
var Fa = 1.340264, Va = -0.081106, ja = 893e-6, Ga = 3796e-6, su = Math.sqrt(3) / 2;
function pN() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function gN(t) {
  var e = se(t.x - this.long0), n = t.y, r = Math.asin(su * Math.sin(n)), i = r * r, s = i * i * i;
  return t.x = e * Math.cos(r) / (su * (Fa + 3 * Va * i + s * (7 * ja + 9 * Ga * i))), t.y = r * (Fa + Va * i + s * (ja + Ga * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function yN(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var e = 1e-9, n = 12, r = t.y, i, s, a, o, l, u;
  for (u = 0; u < n && (i = r * r, s = i * i * i, a = r * (Fa + Va * i + s * (ja + Ga * i)) - t.y, o = Fa + 3 * Va * i + s * (7 * ja + 9 * Ga * i), r -= l = a / o, !(Math.abs(l) < e)); ++u)
    ;
  return i = r * r, s = i * i * i, t.x = su * t.x * (Fa + 3 * Va * i + s * (7 * ja + 9 * Ga * i)) / Math.cos(r), t.y = Math.asin(Math.sin(r) / su), t.x = se(t.x + this.long0), t;
}
var vN = ["eqearth", "Equal Earth", "Equal_Earth"];
const _N = {
  init: pN,
  forward: gN,
  inverse: yN,
  names: vN
};
function bN(t) {
  t.Proj.projections.add(Ll), t.Proj.projections.add(Pl), t.Proj.projections.add(EO), t.Proj.projections.add(PO), t.Proj.projections.add($O), t.Proj.projections.add(UO), t.Proj.projections.add(YO), t.Proj.projections.add(QO), t.Proj.projections.add(iM), t.Proj.projections.add(uM), t.Proj.projections.add(MM), t.Proj.projections.add(kM), t.Proj.projections.add($M), t.Proj.projections.add(BM), t.Proj.projections.add(YM), t.Proj.projections.add(QM), t.Proj.projections.add(iT), t.Proj.projections.add(uT), t.Proj.projections.add(pT), t.Proj.projections.add(bT), t.Proj.projections.add(OT), t.Proj.projections.add(LT), t.Proj.projections.add(IT), t.Proj.projections.add(jT), t.Proj.projections.add(qT), t.Proj.projections.add(QT), t.Proj.projections.add(iN), t.Proj.projections.add(uN), t.Proj.projections.add(mN), t.Proj.projections.add(_N);
}
qt.defaultDatum = "WGS84";
qt.Proj = mr;
qt.WGS84 = new qt.Proj("WGS84");
qt.Point = Js;
qt.toPoint = wv;
qt.defs = Kt;
qt.nadgrid = wx;
qt.transform = nu;
qt.mgrs = Vx;
qt.version = "__VERSION__";
bN(qt);
function EN() {
  var t, e, n;
  qt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), qt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), qt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), Z_(qt), (t = gl("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = gl("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (n = gl("EPSG:2169")) == null || n.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function SN(t, e, n) {
  const r = fe(t);
  class i extends Rh {
    constructor(a) {
      super(r, a, e, n);
    }
  }
  return st(i, "def", r), i;
}
const wN = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Rh extends wN {
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
    this._connected = !1, Wl(() => {
      this._connected || (um(null, this._root), this._instance = null);
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
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = af(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[gn(u)] = !0);
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
    this._numberProps && this._numberProps[i] && (r = af(r)), this._setProp(i, r, !1);
  }
  _getProp(n) {
    return this._props[n];
  }
  _setProp(n, r, i = !0, s = !0) {
    r !== this._props[n] && (this._props[n] = r, s && this._instance && this._update(), i && (r === !0 ? this.setAttribute(un(n), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(un(n), r + "") : r || this.removeAttribute(un(n))));
  }
  _update() {
    um(this._createVNode(), this._root);
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
        if (s instanceof Rh) {
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
var io = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(io || {});
const xN = io.INFO, ON = 7e3, MN = 4e3, au = ms(
  "alert-notifications",
  () => {
    const t = we([]);
    function e(r, i = xN, s) {
      const a = {
        message: r,
        type: i,
        duration: s != null ? s : i === io.WARNING ? MN : ON
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
), TN = /* @__PURE__ */ fe({
  __name: "notification-item",
  props: {
    notification: { type: Object, required: !0 }
  },
  emits: ["close"],
  setup(t) {
    const e = t, n = tt(!0);
    function r(i, s) {
      setTimeout(() => {
        n.value = !1;
      }, e.notification.duration), s();
    }
    return (i, s) => {
      const a = Eh("dompurify-html");
      return k(), Ue(Wu, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: r,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: _i(() => [
          n.value ? zl((k(), G("div", {
            key: 0,
            class: ke(["lux-alert", `lux-${e.notification.type}`]),
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
}, NN = /* @__PURE__ */ pe(TN, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/alert-notifications/notification-item.vue"]]), CN = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, LN = /* @__PURE__ */ fe({
  __name: "alert-notifications",
  setup(t) {
    const e = au(), { notifications: n } = He(e);
    function r(i) {
      e.removeNotification(i);
    }
    return (i, s) => (k(), Ue(jy, { to: "body" }, [
      x(n).length ? (k(), G("div", CN, [
        (k(!0), G(Ge, null, kn(x(n), (a, o) => (k(), Ue(NN, {
          key: o,
          notification: a,
          onClose: () => r(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : F("v-if", !0)
    ]));
  }
}), PN = /* @__PURE__ */ pe(LN, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/alert-notifications/alert-notifications.vue"]]), kN = { class: "lux-dropdown" }, AN = { class: "h-full" }, DN = ["aria-expanded"], IN = /* @__PURE__ */ L("span", { class: "lux-caret" }, null, -1), RN = { class: "lux-dropdown-wrapper" }, $N = ["aria-label", "data-value"], FN = /* @__PURE__ */ fe({
  __name: "dropdown-list",
  props: {
    placeholder: { type: String, required: !0 },
    options: { type: Array, required: !0, default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = tt(!1), s = tt();
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
      return k(), G("div", kN, [
        L("div", AN, [
          L("button", {
            type: "button",
            class: ke(["lux-btn lux-dropdown-btn", i.value ? "expanded" : ""]),
            "aria-expanded": i.value,
            "aria-haspopup": "true",
            onClick: o
          }, [
            L("span", null, oe((d = n.placeholder) != null ? d : (h = n.options[0]) == null ? void 0 : h.label), 1),
            IN
          ], 10, DN)
        ]),
        L("div", RN, [
          L("ul", {
            class: ke(["lux-dropdown-list", i.value ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (k(!0), G(Ge, null, kn(n.options, (m) => (k(), G("li", {
              key: m.value,
              class: ke(f.modelValue === m.value ? "selected" : "")
            }, [
              L("button", {
                class: "lux-dropdown-list-item",
                "aria-label": m.ariaLabel,
                "data-value": m.value,
                onClick: l
              }, oe(m.label), 9, $N)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), $v = /* @__PURE__ */ pe(FN, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/dropdown-list.vue"]]), Ua = "EPSG:3857", Fv = "EPSG:4326", VN = "EPSG:2169";
let Mc;
const jm = tt();
function Vr() {
  function t() {
    return Mc;
  }
  function e() {
    return jm.value = Mc = new J_({
      view: new Q_({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), Mc;
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
    olMap: jm,
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
const pa = /* @__PURE__ */ new Map();
function Ln(t) {
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ln(t);
}
function xr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jN(t, e) {
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
function Vv(t) {
  var e = jN(t, "string");
  return Ln(e) == "symbol" ? e : e + "";
}
function Gm(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Vv(r.key), r);
  }
}
function Or(t, e, n) {
  return e && Gm(t.prototype, e), n && Gm(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Si(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ff(t, e) {
  return Ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Ff(t, e);
}
function Yu(t, e) {
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
  }), e && Ff(t, e);
}
function wo(t, e) {
  if (e && (Ln(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Si(t);
}
function Sr(t) {
  return Sr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sr(t);
}
function Pi(t, e, n) {
  return e = Vv(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function GN(t) {
  if (Array.isArray(t))
    return t;
}
function UN(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Um(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function BN(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Um(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Um(t, e);
  }
}
function WN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qN(t) {
  return GN(t) || UN(t) || BN(t) || WN();
}
function Bm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Wm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var HN = {
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
}, zN = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    xr(this, t), this.init(e, n);
  }
  return Or(t, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = n || HN, this.options = r, this.debug = r.debug;
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
      return new t(this.logger, Wm(Wm({}, {
        prefix: "".concat(this.prefix, ":").concat(n, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(n) {
      return n = n || this.options, n.prefix = n.prefix || this.prefix, new t(this.logger, n);
    }
  }]), t;
}(), cr = new zN(), Ti = function() {
  function t() {
    xr(this, t), this.observers = {};
  }
  return Or(t, [{
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
function ga() {
  var t, e, n = new Promise(function(r, i) {
    t = r, e = i;
  });
  return n.resolve = t, n.reject = e, n;
}
function qm(t) {
  return t == null ? "" : "" + t;
}
function YN(t, e, n) {
  t.forEach(function(r) {
    e[r] && (n[r] = e[r]);
  });
}
function $h(t, e, n) {
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
function Hm(t, e, n) {
  var r = $h(t, e, Object), i = r.obj, s = r.k;
  i[s] = n;
}
function XN(t, e, n, r) {
  var i = $h(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], r && (s[a] = s[a].concat(n)), r || s[a].push(n);
}
function ou(t, e) {
  var n = $h(t, e), r = n.obj, i = n.k;
  if (!!r)
    return r[i];
}
function KN(t, e, n) {
  var r = ou(t, n);
  return r !== void 0 ? r : ou(e, n);
}
function jv(t, e, n) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? typeof t[r] == "string" || t[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? n && (t[r] = e[r]) : jv(t[r], e[r], n) : t[r] = e[r]);
  return t;
}
function Ss(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var ZN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function JN(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return ZN[e];
  }) : t;
}
var Xu = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, QN = [" ", ",", "?", "!", ";"];
function e2(t, e, n) {
  e = e || "", n = n || "";
  var r = QN.filter(function(o) {
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
function lu(t, e) {
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
        return u ? lu(l, u, n) : void 0;
      }
      i = i[r[s]];
    }
    return i;
  }
}
function zm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ko(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function t2(t) {
  var e = n2();
  return function() {
    var r = Sr(t), i;
    if (e) {
      var s = Sr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return wo(this, i);
  };
}
function n2() {
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
var r2 = function(t) {
  Yu(n, t);
  var e = t2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return xr(this, n), i = e.call(this), Xu && Ti.call(Si(i)), i.data = r || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return Or(n, [{
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
      var c = ou(this.data, f);
      return c || !u || typeof a != "string" ? c : lu(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), Hm(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
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
      var c = ou(this.data, f) || {};
      o ? jv(c, a, l) : c = Ko(Ko({}, c), a), Hm(this.data, f, c), u.silent || this.emit("added", i, s, a);
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
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Ko(Ko({}, {}), this.getResource(i, s)) : this.getResource(i, s);
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
}(Ti), Gv = {
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
function Ym(t, e) {
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
    e % 2 ? Ym(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ym(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function i2(t) {
  var e = s2();
  return function() {
    var r = Sr(t), i;
    if (e) {
      var s = Sr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return wo(this, i);
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
var Xm = {}, Km = function(t) {
  Yu(n, t);
  var e = i2(n);
  function n(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return xr(this, n), i = e.call(this), Xu && Ti.call(Si(i)), YN(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, Si(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = cr.create("translator"), i;
  }
  return Or(n, [{
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
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !e2(i, a, o);
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
      var y = this.resolve(i, s), v = y && y.res, b = y && y.usedKey || c, E = y && y.exactUsedKey || c, O = Object.prototype.toString.apply(v), N = ["[object Number]", "[object Function]", "[object RegExp]"], M = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, I = typeof v != "string" && typeof v != "boolean" && typeof v != "number";
      if (P && v && I && N.indexOf(O) < 0 && !(typeof M == "string" && O === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var C = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, v, Vt(Vt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (y.res = C, y) : C;
        }
        if (u) {
          var R = O === "[object Array]", D = R ? [] : {}, Q = R ? E : b;
          for (var ve in v)
            if (Object.prototype.hasOwnProperty.call(v, ve)) {
              var T = "".concat(Q).concat(u).concat(ve);
              D[ve] = this.translate(T, Vt(Vt({}, s), {
                joinArrays: !1,
                ns: h
              })), D[ve] === T && (D[ve] = v[ve]);
            }
          v = D;
        }
      } else if (P && typeof M == "string" && O === "[object Array]")
        v = v.join(M), v && (v = this.extendTranslation(v, i, s, a));
      else {
        var $ = !1, z = !1, K = s.count !== void 0 && typeof s.count != "string", Ce = n.hasDefaultValue(s), Pe = K ? this.pluralResolver.getSuffix(m, s.count, s) : "", dt = s["defaultValue".concat(Pe)] || s.defaultValue;
        !this.isValidLookup(v) && Ce && ($ = !0, v = dt), this.isValidLookup(v) || (z = !0, v = c);
        var Rt = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Te = Rt && z ? void 0 : v, Ct = Ce && dt !== v && this.options.updateMissing;
        if (z || $ || Ct) {
          if (this.logger.log(Ct ? "updateKey" : "missingKey", m, d, c, Ct ? dt : v), u) {
            var it = this.resolve(c, Vt(Vt({}, s), {}, {
              keySeparator: !1
            }));
            it && it.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var Jn = [], De = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && De && De[0])
            for (var tn = 0; tn < De.length; tn++)
              Jn.push(De[tn]);
          else
            this.options.saveMissingTo === "all" ? Jn = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Jn.push(s.lng || this.language);
          var Qn = function(Lt, er, Tr) {
            var _ = Ce && Tr !== v ? Tr : Te;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Lt, d, er, _, Ct, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Lt, d, er, _, Ct, s), o.emit("missingKey", Lt, d, er, v);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && K ? Jn.forEach(function(Mr) {
            o.pluralResolver.getSuffixes(Mr, s).forEach(function(Lt) {
              Qn([Mr], c + Lt, s["defaultValue".concat(Lt)] || dt);
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
      return i != null && y && y.length && a.applyPostProcessor !== !1 && (i = Gv.handle(y, i, s, this.options && this.options.postProcessPassResolved ? Vt({
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
            s.isValidLookup(o) || (c = E, !Xm["".concat(b[0], "-").concat(E)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (Xm["".concat(b[0], "-").concat(E)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(b.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach(function(O) {
              if (!s.isValidLookup(o)) {
                f = O;
                var N = [m];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(N, m, O, E, a);
                else {
                  var M;
                  g && (M = s.pluralResolver.getSuffix(O, a.count, a));
                  var P = "".concat(s.options.pluralSeparator, "zero");
                  if (g && (N.push(m + M), y && N.push(m + P)), v) {
                    var I = "".concat(m).concat(s.options.contextSeparator).concat(a.context);
                    N.push(I), g && (N.push(I + M), y && N.push(I + P));
                  }
                }
                for (var C; C = N.pop(); )
                  s.isValidLookup(o) || (u = C, o = s.getResource(O, E, C, a));
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
function Tc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Zm = function() {
  function t(e) {
    xr(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = cr.create("languageUtils");
  }
  return Or(t, [{
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
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Tc(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Tc(i[1].toLowerCase())), r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Tc(i[2].toLowerCase()))), i.join("-");
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
}(), a2 = [{
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
}], o2 = {
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
}, l2 = ["v1", "v2", "v3"], Jm = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function u2() {
  var t = {};
  return a2.forEach(function(e) {
    e.lngs.forEach(function(n) {
      t[n] = {
        numbers: e.nr,
        plurals: o2[e.fc]
      };
    });
  }), t;
}
var c2 = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    xr(this, t), this.languageUtils = e, this.options = n, this.logger = cr.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = u2();
  }
  return Or(t, [{
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
        return Jm[a] - Jm[o];
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
      return !l2.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function Qm(t, e) {
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
    e % 2 ? Qm(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qm(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ep(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = KN(t, e, n);
  return !s && i && typeof n == "string" && (s = lu(t, n, r), s === void 0 && (s = lu(e, n, r))), s;
}
var f2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xr(this, t), this.logger = cr.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(n) {
      return n;
    }, this.init(e);
  }
  return Or(t, [{
    key: "init",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      n.interpolation || (n.interpolation = {
        escapeValue: !0
      });
      var r = n.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : JN, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Ss(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Ss(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Ss(r.nestingPrefix) : r.nestingPrefixEscaped || Ss("$t("), this.nestingSuffix = r.nestingSuffix ? Ss(r.nestingSuffix) : r.nestingSuffixEscaped || Ss(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
          var v = ep(r, f, y, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(v, void 0, i, $n($n($n({}, s), r), {}, {
            interpolationkey: y
          })) : v;
        }
        var b = y.split(a.formatSeparator), E = b.shift().trim(), O = b.join(a.formatSeparator).trim();
        return a.format(ep(r, f, E, a.options.keySeparator, a.options.ignoreJSONStructure), O, i, $n($n($n({}, s), r), {}, {
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
            typeof l != "string" && !a.useRawValueToEscape && (l = qm(l));
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
        typeof o != "string" && (o = qm(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(n)), o = ""), c && (o = f.reduce(function(d, m) {
          return i.format(d, m, s.lng, $n($n({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), n = n.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return n;
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
function Pr(t) {
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
function h2(t) {
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
          var o = a.split(":"), l = qN(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
function ws(t) {
  var e = {};
  return function(r, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = t(i, s), e[a] = o), o(r);
  };
}
var d2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xr(this, t), this.logger = cr.create("formatter"), this.options = e, this.formats = {
      number: ws(function(n, r) {
        var i = new Intl.NumberFormat(n, Pr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: ws(function(n, r) {
        var i = new Intl.NumberFormat(n, Pr(Pr({}, r), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: ws(function(n, r) {
        var i = new Intl.DateTimeFormat(n, Pr({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: ws(function(n, r) {
        var i = new Intl.RelativeTimeFormat(n, Pr({}, r));
        return function(s) {
          return i.format(s, r.range || "day");
        };
      }),
      list: ws(function(n, r) {
        var i = new Intl.ListFormat(n, Pr({}, r));
        return function(s) {
          return i.format(s);
        };
      })
    }, this.init(e);
  }
  return Or(t, [{
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
      this.formats[n.toLowerCase().trim()] = ws(r);
    }
  }, {
    key: "format",
    value: function(n, r, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = h2(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var m = u;
          try {
            var p = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = p.locale || p.lng || a.locale || a.lng || i;
            m = s.formats[h](u, g, Pr(Pr(Pr({}, d), a), p));
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
function np(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? np(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : np(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function m2(t) {
  var e = p2();
  return function() {
    var r = Sr(t), i;
    if (e) {
      var s = Sr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return wo(this, i);
  };
}
function p2() {
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
function g2(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var y2 = function(t) {
  Yu(n, t);
  var e = m2(n);
  function n(r, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return xr(this, n), a = e.call(this), Xu && Ti.call(Si(a)), a.backend = r, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = cr.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return Or(n, [{
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
        XN(c.loaded, [l], u), g2(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
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
          var c = rp(rp({}, u), {}, {
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
function ip() {
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
function sp(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function ap(t, e) {
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
    e % 2 ? ap(Object(n), !0).forEach(function(r) {
      Pi(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ap(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function v2(t) {
  var e = _2();
  return function() {
    var r = Sr(t), i;
    if (e) {
      var s = Sr(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return wo(this, i);
  };
}
function _2() {
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
function Zo() {
}
function b2(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var uu = function(t) {
  Yu(n, t);
  var e = v2(n);
  function n() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (xr(this, n), r = e.call(this), Xu && Ti.call(Si(r)), r.options = sp(i), r.services = {}, r.logger = cr, r.modules = {
      external: []
    }, b2(Si(r)), s && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, s), wo(r, Si(r));
      setTimeout(function() {
        r.init(i, s);
      }, 0);
    }
    return r;
  }
  return Or(n, [{
    key: "init",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
      typeof s == "function" && (a = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
      var o = ip();
      this.options = ir(ir(ir({}, o), this.options), sp(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ir(ir({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? cr.init(l(this.modules.logger), this.options) : cr.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = d2);
        var f = new Zm(this.options);
        this.store = new r2(this.options.resources, this.options);
        var c = this.services;
        c.logger = cr, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new c2(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new f2(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new y2(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(y) {
          for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
            b[E - 1] = arguments[E];
          i.emit.apply(i, [y].concat(b));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Km(this.services, this.options), this.translator.on("*", function(y) {
          for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
            b[E - 1] = arguments[E];
          i.emit.apply(i, [y].concat(b));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = Zo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
      var p = ga(), g = function() {
        var v = function(E, O) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), p.resolve(O), a(E, O);
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
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zo, o = a, l = typeof i == "string" ? i : this.language;
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
      var o = ga();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = Zo), this.services.backendConnector.reload(i, s, function(l) {
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
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && Gv.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
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
      var o = ga();
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
      var a = this, o = ga();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(l) {
        a.options.ns.indexOf(l) < 0 && a.options.ns.push(l);
      }), this.loadResources(function(l) {
        o.resolve(), s && s(l);
      }), o) : (s && s(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, s) {
      var a = ga();
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
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new Zm(ip());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zo, o = ir(ir(ir({}, this.options), s), {
        isClone: !0
      }), l = new n(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = ir({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new Km(l.services, l.options), l.translator.on("*", function(f) {
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
Pi(uu, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new uu(t, e);
});
var lt = uu.createInstance();
lt.createInstance = uu.createInstance;
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
const E2 = "/";
var Uv = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(Uv || {}), Rr = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(Rr || {}), kl = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(kl || {}), Vf;
function S2(t, {
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
  }), t.component("i18next", O2), t.mixin({
    beforeCreate() {
      var h, d;
      const m = this.$options;
      if (!m.__i18n && !m.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const p = this.$options.name, g = (Math.random() * 10 ** 8 | 0).toString(), y = [p, g].filter((M) => !!M).join("-");
      this.__bundles = [];
      const v = (M) => {
        Object.entries(M).forEach(([P, I]) => {
          e.addResourceBundle(P, y, I, !0, !1), this.__bundles.push([P, y]);
        });
      };
      (h = m.__i18n) == null || h.forEach((M) => {
        v(JSON.parse(M));
      });
      let { lng: b, ns: E, keyPrefix: O } = c(m, v);
      (d = this.__bundles) != null && d.length && (E = [y].concat(E != null ? E : []));
      const N = u(b, E);
      this.__translate = (M, P) => !O || f(M) ? N(M, P) : N(O + "." + M, P);
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
  }), Vf = x2(r, i);
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
  const t = w2(), e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
function w2() {
  const t = go();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  return t;
}
function x2(t, e) {
  const n = `${t}\\s*([a-z0-9\\-]+)\\s*${e}`;
  return new RegExp(n, "gi");
}
var O2 = fe({
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
      for (; (i = Vf.exec(n)) !== null; ) {
        r.push(n.substring(s, i.index));
        const a = e[i[1]];
        a ? r.push(...a()) : r.push(i[0]), s = Vf.lastIndex;
      }
      return r.push(n.substring(s)), r;
    };
  }
});
class ps extends Error {
}
class M2 extends ps {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class T2 extends ps {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class N2 extends ps {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Rs extends ps {
}
class Bv extends ps {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ln extends ps {
}
class ei extends ps {
  constructor() {
    super("Zone is an abstract class");
  }
}
const ee = "numeric", Zn = "short", yn = "long", cu = {
  year: ee,
  month: ee,
  day: ee
}, Wv = {
  year: ee,
  month: Zn,
  day: ee
}, C2 = {
  year: ee,
  month: Zn,
  day: ee,
  weekday: Zn
}, qv = {
  year: ee,
  month: yn,
  day: ee
}, Hv = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn
}, zv = {
  hour: ee,
  minute: ee
}, Yv = {
  hour: ee,
  minute: ee,
  second: ee
}, Xv = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: Zn
}, Kv = {
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: yn
}, Zv = {
  hour: ee,
  minute: ee,
  hourCycle: "h23"
}, Jv = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23"
}, Qv = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: Zn
}, e0 = {
  hour: ee,
  minute: ee,
  second: ee,
  hourCycle: "h23",
  timeZoneName: yn
}, t0 = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee
}, n0 = {
  year: ee,
  month: ee,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, r0 = {
  year: ee,
  month: Zn,
  day: ee,
  hour: ee,
  minute: ee
}, i0 = {
  year: ee,
  month: Zn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee
}, L2 = {
  year: ee,
  month: Zn,
  day: ee,
  weekday: Zn,
  hour: ee,
  minute: ee
}, s0 = {
  year: ee,
  month: yn,
  day: ee,
  hour: ee,
  minute: ee,
  timeZoneName: Zn
}, a0 = {
  year: ee,
  month: yn,
  day: ee,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: Zn
}, o0 = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn,
  hour: ee,
  minute: ee,
  timeZoneName: yn
}, l0 = {
  year: ee,
  month: yn,
  day: ee,
  weekday: yn,
  hour: ee,
  minute: ee,
  second: ee,
  timeZoneName: yn
};
class xo {
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
let Nc = null;
class Ku extends xo {
  static get instance() {
    return Nc === null && (Nc = new Ku()), Nc;
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
    return y0(e, n, r);
  }
  formatOffset(e, n) {
    return Ba(this.offset(e), n);
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
let Al = {};
function P2(t) {
  return Al[t] || (Al[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Al[t];
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
function A2(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, a, o, l, u, f] = r;
  return [a, i, s, o, l, u, f];
}
function D2(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: a } = n[i], o = k2[s];
    s === "era" ? r[o] = a : Se(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let Jo = {};
class Ur extends xo {
  static create(e) {
    return Jo[e] || (Jo[e] = new Ur(e)), Jo[e];
  }
  static resetCache() {
    Jo = {}, Al = {};
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
    return y0(e, n, r, this.name);
  }
  formatOffset(e, n) {
    return Ba(this.offset(e), n);
  }
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = P2(this.name);
    let [i, s, a, o, l, u, f] = r.formatToParts ? D2(r, n) : A2(r, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const h = Ju({
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
let op = {};
function I2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = op[n];
  return r || (r = new Intl.ListFormat(t, e), op[n] = r), r;
}
let jf = {};
function Gf(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = jf[n];
  return r || (r = new Intl.DateTimeFormat(t, e), jf[n] = r), r;
}
let Uf = {};
function R2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Uf[n];
  return r || (r = new Intl.NumberFormat(t, e), Uf[n] = r), r;
}
let Bf = {};
function $2(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = Bf[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Bf[i] = s), s;
}
let Ma = null;
function F2() {
  return Ma || (Ma = new Intl.DateTimeFormat().resolvedOptions().locale, Ma);
}
let lp = {};
function V2(t) {
  let e = lp[t];
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, lp[t] = e;
  }
  return e;
}
function j2(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = Gf(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      r = Gf(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = r;
    return [i, s, a];
  }
}
function G2(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function U2(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = Oe.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function B2(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = Oe.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function Qo(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function W2(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class q2 {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...a } = r;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = R2(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Gh(e, 3);
      return bt(n, this.padTo);
    }
  }
}
class H2 {
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
    s.timeZone = s.timeZone || i, this.dtf = Gf(n, s);
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
class z2 {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && p0() && (this.rtf = $2(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : dC(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const Y2 = {
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
    const a = e || pt.defaultLocale, o = a || (s ? "en-US" : F2()), l = n || pt.defaultNumberingSystem, u = r || pt.defaultOutputCalendar, f = Wf(i) || pt.defaultWeekSettings;
    return new Xe(o, l, u, f, a);
  }
  static resetCache() {
    Ma = null, jf = {}, Uf = {}, Bf = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r, weekSettings: i } = {}) {
    return Xe.create(e, n, r, i);
  }
  constructor(e, n, r, i, s) {
    const [a, o, l] = j2(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = r || l || null, this.weekSettings = i, this.intl = G2(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = W2(this)), this.fastNumbersCached;
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
      Wf(e.weekSettings) || this.weekSettings,
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
    return Qo(this, e, b0, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = U2((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return Qo(this, e, w0, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = B2(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Qo(
      this,
      void 0,
      () => x0,
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
    return Qo(this, e, O0, () => {
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
    return new q2(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new H2(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new z2(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return I2(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : g0() ? V2(this.locale) : Y2;
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
let Cc = null;
class Qt extends xo {
  static get utcInstance() {
    return Cc === null && (Cc = new Qt(0)), Cc;
  }
  static instance(e) {
    return e === 0 ? Qt.utcInstance : new Qt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Qt(Qu(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${Ba(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ba(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, n) {
    return Ba(this.fixed, n);
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
class X2 extends xo {
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
  if (t instanceof xo)
    return t;
  if (J2(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Ku.instance : n === "utc" || n === "gmt" ? Qt.utcInstance : Qt.parseSpecifier(n) || Ur.create(t);
  } else
    return is(t) ? Qt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new X2(t);
}
let up = () => Date.now(), cp = "system", fp = null, hp = null, dp = null, mp = 60, pp, gp = null;
class pt {
  static get now() {
    return up;
  }
  static set now(e) {
    up = e;
  }
  static set defaultZone(e) {
    cp = e;
  }
  static get defaultZone() {
    return hi(cp, Ku.instance);
  }
  static get defaultLocale() {
    return fp;
  }
  static set defaultLocale(e) {
    fp = e;
  }
  static get defaultNumberingSystem() {
    return hp;
  }
  static set defaultNumberingSystem(e) {
    hp = e;
  }
  static get defaultOutputCalendar() {
    return dp;
  }
  static set defaultOutputCalendar(e) {
    dp = e;
  }
  static get defaultWeekSettings() {
    return gp;
  }
  static set defaultWeekSettings(e) {
    gp = Wf(e);
  }
  static get twoDigitCutoffYear() {
    return mp;
  }
  static set twoDigitCutoffYear(e) {
    mp = e % 100;
  }
  static get throwOnInvalid() {
    return pp;
  }
  static set throwOnInvalid(e) {
    pp = e;
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
const u0 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], c0 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Tn(t, e) {
  return new zn(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Fh(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function f0(t, e, n) {
  return n + (Oo(t) ? c0 : u0)[e - 1];
}
function h0(t, e) {
  const n = Oo(t) ? c0 : u0, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function Vh(t, e) {
  return (t - e + 7) % 7 + 1;
}
function fu(t, e = 4, n = 1) {
  const { year: r, month: i, day: s } = t, a = f0(r, i, s), o = Vh(Fh(r, i, s), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = r - 1, l = so(u, e, n)) : l > so(r, e, n) ? (u = r + 1, l = 1) : u = r, { weekYear: u, weekNumber: l, weekday: o, ...ec(t) };
}
function yp(t, e = 4, n = 1) {
  const { weekYear: r, weekNumber: i, weekday: s } = t, a = Vh(Fh(r, 1, e), n), o = qs(r);
  let l = i * 7 + s - a - 7 + e, u;
  l < 1 ? (u = r - 1, l += qs(u)) : l > o ? (u = r + 1, l -= qs(r)) : u = r;
  const { month: f, day: c } = h0(u, l);
  return { year: u, month: f, day: c, ...ec(t) };
}
function Lc(t) {
  const { year: e, month: n, day: r } = t, i = f0(e, n, r);
  return { year: e, ordinal: i, ...ec(t) };
}
function vp(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = h0(e, n);
  return { year: e, month: r, day: i, ...ec(t) };
}
function _p(t, e) {
  if (!Se(t.localWeekday) || !Se(t.localWeekNumber) || !Se(t.localWeekYear)) {
    if (!Se(t.weekday) || !Se(t.weekNumber) || !Se(t.weekYear))
      throw new Rs(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return Se(t.localWeekday) || (t.weekday = t.localWeekday), Se(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), Se(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function K2(t, e = 4, n = 1) {
  const r = Zu(t.weekYear), i = Nn(
    t.weekNumber,
    1,
    so(t.weekYear, e, n)
  ), s = Nn(t.weekday, 1, 7);
  return r ? i ? s ? !1 : Tn("weekday", t.weekday) : Tn("week", t.weekNumber) : Tn("weekYear", t.weekYear);
}
function Z2(t) {
  const e = Zu(t.year), n = Nn(t.ordinal, 1, qs(t.year));
  return e ? n ? !1 : Tn("ordinal", t.ordinal) : Tn("year", t.year);
}
function d0(t) {
  const e = Zu(t.year), n = Nn(t.month, 1, 12), r = Nn(t.day, 1, hu(t.year, t.month));
  return e ? n ? r ? !1 : Tn("day", t.day) : Tn("month", t.month) : Tn("year", t.year);
}
function m0(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = Nn(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, a = Nn(n, 0, 59), o = Nn(r, 0, 59), l = Nn(i, 0, 999);
  return s ? a ? o ? l ? !1 : Tn("millisecond", i) : Tn("second", r) : Tn("minute", n) : Tn("hour", e);
}
function Se(t) {
  return typeof t > "u";
}
function is(t) {
  return typeof t == "number";
}
function Zu(t) {
  return typeof t == "number" && t % 1 === 0;
}
function J2(t) {
  return typeof t == "string";
}
function Q2(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function p0() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function g0() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function eC(t) {
  return Array.isArray(t) ? t : [t];
}
function bp(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function tC(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function ea(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Wf(t) {
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
  return Zu(t) && t >= e && t <= n;
}
function nC(t, e) {
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
function jh(t) {
  if (!(Se(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Gh(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function Oo(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function qs(t) {
  return Oo(t) ? 366 : 365;
}
function hu(t, e) {
  const n = nC(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? Oo(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Ju(t) {
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
function Ep(t, e, n) {
  return -Vh(Fh(t, 1, e), n) + e - 1;
}
function so(t, e = 4, n = 1) {
  const r = Ep(t, e, n), i = Ep(t + 1, e, n);
  return (qs(t) - r + i) / 7;
}
function qf(t) {
  return t > 99 ? t : t > pt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function y0(t, e, n, r = null) {
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
function Qu(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function v0(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new ln(`Invalid unit value ${t}`);
  return e;
}
function du(t, e) {
  const n = {};
  for (const r in t)
    if (ea(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = v0(i);
    }
  return n;
}
function Ba(t, e) {
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
function ec(t) {
  return tC(t, ["hour", "minute", "second", "millisecond"]);
}
const rC = [
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
], _0 = [
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
], iC = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function b0(t) {
  switch (t) {
    case "narrow":
      return [...iC];
    case "short":
      return [..._0];
    case "long":
      return [...rC];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const E0 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], S0 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], sC = ["M", "T", "W", "T", "F", "S", "S"];
function w0(t) {
  switch (t) {
    case "narrow":
      return [...sC];
    case "short":
      return [...S0];
    case "long":
      return [...E0];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const x0 = ["AM", "PM"], aC = ["Before Christ", "Anno Domini"], oC = ["BC", "AD"], lC = ["B", "A"];
function O0(t) {
  switch (t) {
    case "narrow":
      return [...lC];
    case "short":
      return [...oC];
    case "long":
      return [...aC];
    default:
      return null;
  }
}
function uC(t) {
  return x0[t.hour < 12 ? 0 : 1];
}
function cC(t, e) {
  return w0(e)[t.weekday - 1];
}
function fC(t, e) {
  return b0(e)[t.month - 1];
}
function hC(t, e) {
  return O0(e)[t.year < 0 ? 0 : 1];
}
function dC(t, e, n = "always", r = !1) {
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
function Sp(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const mC = {
  D: cu,
  DD: Wv,
  DDD: qv,
  DDDD: Hv,
  t: zv,
  tt: Yv,
  ttt: Xv,
  tttt: Kv,
  T: Zv,
  TT: Jv,
  TTT: Qv,
  TTTT: e0,
  f: t0,
  ff: r0,
  fff: s0,
  ffff: o0,
  F: n0,
  FF: i0,
  FFF: a0,
  FFFF: l0
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
    return mC[e];
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
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, m) => this.loc.extract(e, d, m), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? uC(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, m) => r ? fC(e, d) : s(m ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, m) => r ? cC(e, d) : s(
      m ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const m = Wt.macroTokenToFormatOpts(d);
      return m ? this.formatWithSystemDefault(e, m) : d;
    }, c = (d) => r ? hC(e, d) : s({ era: d }, "era"), h = (d) => {
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
    return Sp(Wt.parseFormat(n), h);
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
    return Sp(s, i(o));
  }
}
const M0 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function ia(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function sa(...t) {
  return (e) => t.reduce(
    ([n, r, i], s) => {
      const [a, o, l] = s(e, i);
      return [{ ...n, ...a }, o || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function aa(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const i = n.exec(t);
    if (i)
      return r(i);
  }
  return [null, null];
}
function T0(...t) {
  return (e, n) => {
    const r = {};
    let i;
    for (i = 0; i < t.length; i++)
      r[t[i]] = li(e[n + i]);
    return [r, null, n + i];
  };
}
const N0 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, pC = `(?:${N0.source}?(?:\\[(${M0.source})\\])?)?`, Uh = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, C0 = RegExp(`${Uh.source}${pC}`), Bh = RegExp(`(?:T${C0.source})?`), gC = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, yC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, vC = /(\d{4})-?(\d{3})/, _C = T0("weekYear", "weekNumber", "weekDay"), bC = T0("year", "ordinal"), EC = /(\d{4})-(\d\d)-(\d\d)/, L0 = RegExp(
  `${Uh.source} ?(?:${N0.source}|(${M0.source}))?`
), SC = RegExp(`(?: ${L0.source})?`);
function Hs(t, e, n) {
  const r = t[e];
  return Se(r) ? n : li(r);
}
function wC(t, e) {
  return [{
    year: Hs(t, e),
    month: Hs(t, e + 1, 1),
    day: Hs(t, e + 2, 1)
  }, null, e + 3];
}
function oa(t, e) {
  return [{
    hours: Hs(t, e, 0),
    minutes: Hs(t, e + 1, 0),
    seconds: Hs(t, e + 2, 0),
    milliseconds: jh(t[e + 3])
  }, null, e + 4];
}
function Mo(t, e) {
  const n = !t[e] && !t[e + 1], r = Qu(t[e + 1], t[e + 2]), i = n ? null : Qt.instance(r);
  return [{}, i, e + 3];
}
function To(t, e) {
  const n = t[e] ? Ur.create(t[e]) : null;
  return [{}, n, e + 1];
}
const xC = RegExp(`^T?${Uh.source}$`), OC = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function MC(t) {
  const [e, n, r, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, m = !1) => d !== void 0 && (m || d && f) ? -d : d;
  return [
    {
      years: h(Gi(n)),
      months: h(Gi(r)),
      weeks: h(Gi(i)),
      days: h(Gi(s)),
      hours: h(Gi(a)),
      minutes: h(Gi(o)),
      seconds: h(Gi(l), l === "-0"),
      milliseconds: h(jh(u), c)
    }
  ];
}
const TC = {
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
function Wh(t, e, n, r, i, s, a) {
  const o = {
    year: e.length === 2 ? qf(li(e)) : li(e),
    month: _0.indexOf(n) + 1,
    day: li(r),
    hour: li(i),
    minute: li(s)
  };
  return a && (o.second = li(a)), t && (o.weekday = t.length > 3 ? E0.indexOf(t) + 1 : S0.indexOf(t) + 1), o;
}
const NC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function CC(t) {
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
  ] = t, h = Wh(e, i, r, n, s, a, o);
  let d;
  return l ? d = TC[l] : u ? d = 0 : d = Qu(f, c), [h, new Qt(d)];
}
function LC(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const PC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, kC = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, AC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function wp(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [Wh(e, i, r, n, s, a, o), Qt.utcInstance];
}
function DC(t) {
  const [, e, n, r, i, s, a, o] = t;
  return [Wh(e, o, n, r, i, s, a), Qt.utcInstance];
}
const IC = ia(gC, Bh), RC = ia(yC, Bh), $C = ia(vC, Bh), FC = ia(C0), P0 = sa(
  wC,
  oa,
  Mo,
  To
), VC = sa(
  _C,
  oa,
  Mo,
  To
), jC = sa(
  bC,
  oa,
  Mo,
  To
), GC = sa(
  oa,
  Mo,
  To
);
function UC(t) {
  return aa(
    t,
    [IC, P0],
    [RC, VC],
    [$C, jC],
    [FC, GC]
  );
}
function BC(t) {
  return aa(LC(t), [NC, CC]);
}
function WC(t) {
  return aa(
    t,
    [PC, wp],
    [kC, wp],
    [AC, DC]
  );
}
function qC(t) {
  return aa(t, [OC, MC]);
}
const HC = sa(oa);
function zC(t) {
  return aa(t, [xC, HC]);
}
const YC = ia(EC, SC), XC = ia(L0), KC = sa(
  oa,
  Mo,
  To
);
function ZC(t) {
  return aa(
    t,
    [YC, P0],
    [XC, KC]
  );
}
const xp = "Invalid Duration", k0 = {
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
}, JC = {
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
}, Sn = 146097 / 400, xs = 146097 / 4800, QC = {
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
    weeks: xs / 7,
    days: xs,
    hours: xs * 24,
    minutes: xs * 24 * 60,
    seconds: xs * 24 * 60 * 60,
    milliseconds: xs * 24 * 60 * 60 * 1e3
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
], eL = Zi.slice(0).reverse();
function ti(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Re(r);
}
function A0(t, e) {
  var r;
  let n = (r = e.milliseconds) != null ? r : 0;
  for (const i of eL.slice(1))
    e[i] && (n += e[i] * t[i].milliseconds);
  return n;
}
function Op(t, e) {
  const n = A0(t, e) < 0 ? -1 : 1;
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
function tL(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class Re {
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? QC : JC;
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
      values: du(e, Re.normalizeUnit),
      loc: Xe.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  static fromDurationLike(e) {
    if (is(e))
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
    const [r] = qC(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, n) {
    const [r] = zC(e);
    return r ? Re.fromObject(r, n) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the Duration is invalid");
    const r = e instanceof zn ? e : new zn(e, n);
    if (pt.throwOnInvalid)
      throw new N2(r);
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
      throw new Bv(e);
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
    return this.isValid ? Wt.create(this.loc, r).formatDurationFromString(this, e) : xp;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return xp;
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Gh(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    return this.isValid ? A0(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e), r = {};
    for (const i of Zi)
      (ea(n.values, i) || ea(this.values, i)) && (r[i] = n.get(i) + this.get(i));
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
      n[r] = v0(e(this.values[r], r));
    return ti(this, { values: n }, !0);
  }
  get(e) {
    return this[Re.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...du(e, Re.normalizeUnit) };
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
    return Op(this.matrix, e), ti(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = tL(this.normalize().shiftToAll().toObject());
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
        is(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, r[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        is(i[a]) && (r[a] = i[a]);
    for (const a in r)
      r[a] !== 0 && (n[s] += a === s ? r[a] : r[a] / this.matrix[s][a]);
    return Op(this.matrix, n), ti(this, { values: n }, !0);
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
const Os = "Invalid Interval";
function nL(t, e) {
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
      throw new T2(r);
    return new ft({ invalid: r });
  }
  static fromDateTimes(e, n) {
    const r = va(e), i = va(n), s = nL(r, i);
    return s == null ? new ft({
      start: r,
      end: i
    }) : s;
  }
  static after(e, n) {
    const r = Re.fromDurationLike(n), i = va(e);
    return ft.fromDateTimes(i, i.plus(r));
  }
  static before(e, n) {
    const r = Re.fromDurationLike(n), i = va(e);
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
    const n = e.map(va).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), r = [];
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
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Os;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(e = cu, n = {}) {
    return this.isValid ? Wt.create(this.s.loc.clone(n), e).formatInterval(this) : Os;
  }
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Os;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Os;
  }
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Os;
  }
  toFormat(e, { separator: n = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Os;
  }
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : Re.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return ft.fromDateTimes(e(this.s), e(this.e));
  }
}
class el {
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
    return { relative: p0(), localeWeek: g0() };
  }
}
function Mp(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(Re.fromMillis(r).as("days"));
}
function rL(t, e, n) {
  const r = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = Mp(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Mp]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of r)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function iL(t, e, n, r) {
  let [i, s, a, o] = rL(t, e, n);
  const l = e - i, u = n.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = Re.fromObject(s, r);
  return u.length > 0 ? Re.fromMillis(l, r).shiftTo(...u).plus(f) : f;
}
const qh = {
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
}, Tp = {
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
}, sL = qh.hanidec.replace(/[\[|\]]/g, "").split("");
function aL(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(qh.hanidec) !== -1)
        e += sL.indexOf(t[n]);
      else
        for (const i in Tp) {
          const [s, a] = Tp[i];
          r >= s && r <= a && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function Fn({ numberingSystem: t }, e = "") {
  return new RegExp(`${qh[t || "latn"]}${e}`);
}
const oL = "missing Intl.DateTimeFormat.formatToParts support";
function Ve(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(aL(n)) };
}
const lL = String.fromCharCode(160), D0 = `[ ${lL}]`, I0 = new RegExp(D0, "g");
function uL(t) {
  return t.replace(/\./g, "\\.?").replace(I0, D0);
}
function Np(t) {
  return t.replace(/\./g, "").replace(I0, " ").toLowerCase();
}
function Vn(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(uL).join("|")),
    deser: ([n]) => t.findIndex((r) => Np(n) === Np(r)) + e
  };
}
function Cp(t, e) {
  return { regex: t, deser: ([, n, r]) => Qu(n, r), groups: e };
}
function tl(t) {
  return { regex: t, deser: ([e]) => e };
}
function cL(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function fL(t, e) {
  const n = Fn(e), r = Fn(e, "{2}"), i = Fn(e, "{3}"), s = Fn(e, "{4}"), a = Fn(e, "{6}"), o = Fn(e, "{1,2}"), l = Fn(e, "{1,3}"), u = Fn(e, "{1,6}"), f = Fn(e, "{1,9}"), c = Fn(e, "{2,4}"), h = Fn(e, "{4,6}"), d = (g) => ({ regex: RegExp(cL(g.val)), deser: ([y]) => y, literal: !0 }), p = ((g) => {
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
        return Ve(c, qf);
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
        return tl(f);
      case "uu":
        return tl(o);
      case "uuu":
        return Ve(n);
      case "a":
        return Vn(e.meridiems(), 0);
      case "kkkk":
        return Ve(s);
      case "kk":
        return Ve(c, qf);
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
        return Cp(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Cp(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      case "z":
        return tl(/[a-z_+-/]{1,256}?/i);
      case " ":
        return tl(/[^\S\n\r]/);
      default:
        return d(g);
    }
  })(t) || {
    invalidReason: oL
  };
  return p.token = t, p;
}
const hL = {
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
function dL(t, e, n) {
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
  let o = hL[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function mL(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function pL(t, e, n) {
  const r = t.match(e);
  if (r) {
    const i = {};
    let s = 1;
    for (const a in n)
      if (ea(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(r.slice(s, s + l))), s += l;
      }
    return [r, i];
  } else
    return [r, {}];
}
function gL(t) {
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
  return Se(t.z) || (n = Ur.create(t.z)), Se(t.Z) || (n || (n = new Qt(t.Z)), r = t.Z), Se(t.q) || (t.M = (t.q - 1) * 3 + 1), Se(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), Se(t.u) || (t.S = jh(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), n, r];
}
let Pc = null;
function yL() {
  return Pc || (Pc = Oe.fromMillis(1555555555555)), Pc;
}
function vL(t, e) {
  if (t.literal)
    return t;
  const n = Wt.macroTokenToFormatOpts(t.val), r = F0(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function R0(t, e) {
  return Array.prototype.concat(...t.map((n) => vL(n, e)));
}
function $0(t, e, n) {
  const r = R0(Wt.parseFormat(n), t), i = r.map((a) => fL(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [a, o] = mL(i), l = RegExp(a, "i"), [u, f] = pL(e, l, o), [c, h, d] = f ? gL(f) : [null, null, void 0];
    if (ea(f, "a") && ea(f, "H"))
      throw new Rs(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function _L(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: a } = $0(t, e, n);
  return [r, i, s, a];
}
function F0(t, e) {
  if (!t)
    return null;
  const r = Wt.create(e, t).dtFormatter(yL()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((a) => dL(a, t, s));
}
const kc = "Invalid DateTime", Lp = 864e13;
function nl(t) {
  return new zn("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Ac(t) {
  return t.weekData === null && (t.weekData = fu(t.c)), t.weekData;
}
function Dc(t) {
  return t.localWeekData === null && (t.localWeekData = fu(
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
function V0(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function rl(t, e) {
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
function Dl(t, e, n) {
  return V0(Ju(t), e, n);
}
function Pp(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, hu(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
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
  }).as("milliseconds"), o = Ju(s);
  let [l, u] = V0(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function ya(t, e, n, r, i, s) {
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
function il(t, e, n = !0) {
  return t.isValid ? Wt.create(Xe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Ic(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += bt(t.c.year, n ? 6 : 4), e ? (r += "-", r += bt(t.c.month), r += "-", r += bt(t.c.day)) : (r += bt(t.c.month), r += bt(t.c.day)), r;
}
function kp(t, e, n, r, i, s) {
  let a = bt(t.c.hour);
  return e ? (a += ":", a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += ":")) : a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (a += bt(t.c.second), (t.c.millisecond !== 0 || !r) && (a += ".", a += bt(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += bt(Math.trunc(-t.o / 60)), a += ":", a += bt(Math.trunc(-t.o % 60))) : (a += "+", a += bt(Math.trunc(t.o / 60)), a += ":", a += bt(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const j0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, bL = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, EL = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, G0 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], SL = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], wL = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function xL(t) {
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
    throw new Bv(t);
  return e;
}
function Ap(t) {
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
      return xL(t);
  }
}
function Dp(t, e) {
  const n = hi(e.zone, pt.defaultZone), r = Xe.fromObject(e), i = pt.now();
  let s, a;
  if (Se(t.year))
    s = i;
  else {
    for (const u of G0)
      Se(t[u]) && (t[u] = j0[u]);
    const o = d0(t) || m0(t);
    if (o)
      return Oe.invalid(o);
    const l = n.offset(i);
    [s, a] = Dl(t, l, n);
  }
  return new Oe({ ts: s, zone: n, loc: r, o: a });
}
function Ip(t, e, n) {
  const r = Se(n.round) ? !0 : n.round, i = (a, o) => (a = Gh(a, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(a, o)), s = (a) => n.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const a of n.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function Rp(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class Oe {
  constructor(e) {
    const n = e.zone || pt.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new zn("invalid input") : null) || (n.isValid ? null : nl(n));
    this.ts = Se(e.ts) ? pt.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = n.offset(this.ts);
        i = rl(this.ts, o), r = Number.isNaN(i.year) ? new zn("invalid input") : null, i = r ? null : i, s = r ? null : o;
      }
    this._zone = n, this.loc = e.loc || Xe.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new Oe({});
  }
  static local() {
    const [e, n] = Rp(arguments), [r, i, s, a, o, l, u] = n;
    return Dp({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, n] = Rp(arguments), [r, i, s, a, o, l, u] = n;
    return e.zone = Qt.utcInstance, Dp({ year: r, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, n = {}) {
    const r = Q2(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return Oe.invalid("invalid input");
    const i = hi(n.zone, pt.defaultZone);
    return i.isValid ? new Oe({
      ts: r,
      zone: i,
      loc: Xe.fromObject(n)
    }) : Oe.invalid(nl(i));
  }
  static fromMillis(e, n = {}) {
    if (is(e))
      return e < -Lp || e > Lp ? Oe.invalid("Timestamp out of range") : new Oe({
        ts: e,
        zone: hi(n.zone, pt.defaultZone),
        loc: Xe.fromObject(n)
      });
    throw new ln(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, n = {}) {
    if (is(e))
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
      return Oe.invalid(nl(r));
    const i = Xe.fromObject(n), s = du(e, Ap), { minDaysInFirstWeek: a, startOfWeek: o } = _p(s, i), l = pt.now(), u = Se(n.specificOffset) ? r.offset(l) : n.specificOffset, f = !Se(s.ordinal), c = !Se(s.year), h = !Se(s.month) || !Se(s.day), d = c || h, m = s.weekYear || s.weekNumber;
    if ((d || f) && m)
      throw new Rs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && f)
      throw new Rs("Can't mix ordinal dates with month/day");
    const p = m || s.weekday && !d;
    let g, y, v = rl(l, u);
    p ? (g = SL, y = bL, v = fu(v, a, o)) : f ? (g = wL, y = EL, v = Lc(v)) : (g = G0, y = j0);
    let b = !1;
    for (const C of g) {
      const R = s[C];
      Se(R) ? b ? s[C] = y[C] : s[C] = v[C] : b = !0;
    }
    const E = p ? K2(s, a, o) : f ? Z2(s) : d0(s), O = E || m0(s);
    if (O)
      return Oe.invalid(O);
    const N = p ? yp(s, a, o) : f ? vp(s) : s, [M, P] = Dl(N, u, r), I = new Oe({
      ts: M,
      zone: r,
      o: P,
      loc: i
    });
    return s.weekday && d && e.weekday !== I.weekday ? Oe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${I.toISO()}`
    ) : I;
  }
  static fromISO(e, n = {}) {
    const [r, i] = UC(e);
    return ya(r, i, n, "ISO 8601", e);
  }
  static fromRFC2822(e, n = {}) {
    const [r, i] = BC(e);
    return ya(r, i, n, "RFC 2822", e);
  }
  static fromHTTP(e, n = {}) {
    const [r, i] = WC(e);
    return ya(r, i, n, "HTTP", n);
  }
  static fromFormat(e, n, r = {}) {
    if (Se(e) || Se(n))
      throw new ln("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, a = Xe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = _L(a, e, n);
    return f ? Oe.invalid(f) : ya(o, l, r, `format ${n}`, e, u);
  }
  static fromString(e, n, r = {}) {
    return Oe.fromFormat(e, n, r);
  }
  static fromSQL(e, n = {}) {
    const [r, i] = ZC(e);
    return ya(r, i, n, "SQL", e);
  }
  static invalid(e, n = null) {
    if (!e)
      throw new ln("need to specify a reason the DateTime is invalid");
    const r = e instanceof zn ? e : new zn(e, n);
    if (pt.throwOnInvalid)
      throw new M2(r);
    return new Oe({ invalid: r });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, n = {}) {
    const r = F0(e, Xe.fromObject(n));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(e, n = {}) {
    return R0(Wt.parseFormat(e), Xe.fromObject(n)).map((i) => i.val).join("");
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
    return this.isValid ? Ac(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Ac(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Ac(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? Dc(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? Dc(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? Dc(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? Lc(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? el.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? el.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? el.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? el.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, r = Ju(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), a = this.zone.offset(r - i * n), o = this.zone.offset(r - s * n);
    if (a === o)
      return [this];
    const l = r - a * n, u = r - o * n, f = rl(l, a), c = rl(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Ui(this, { ts: l }), Ui(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return Oo(this.year);
  }
  get daysInMonth() {
    return hu(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? qs(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? so(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? so(
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
        [i] = Dl(a, s, e);
      }
      return Ui(this, { ts: i, zone: e });
    } else
      return Oe.invalid(nl(e));
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
    const n = du(e, Ap), { minDaysInFirstWeek: r, startOfWeek: i } = _p(n, this.loc), s = !Se(n.weekYear) || !Se(n.weekNumber) || !Se(n.weekday), a = !Se(n.ordinal), o = !Se(n.year), l = !Se(n.month) || !Se(n.day), u = o || l, f = n.weekYear || n.weekNumber;
    if ((u || a) && f)
      throw new Rs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Rs("Can't mix ordinal dates with month/day");
    let c;
    s ? c = yp(
      { ...fu(this.c, r, i), ...n },
      r,
      i
    ) : Se(n.ordinal) ? (c = { ...this.toObject(), ...n }, Se(n.day) && (c.day = Math.min(hu(c.year, c.month), c.day))) : c = vp({ ...Lc(this.c), ...n });
    const [h, d] = Dl(c, this.o, this.zone);
    return Ui(this, { ts: h, o: d });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e);
    return Ui(this, Pp(this, n));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const n = Re.fromDurationLike(e).negate();
    return Ui(this, Pp(this, n));
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
  toLocaleString(e = cu, n = {}) {
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
    let o = Ic(this, a);
    return o += "T", o += kp(this, a, n, r, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Ic(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return il(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + kp(
      this,
      a === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  toRFC2822() {
    return il(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return il(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Ic(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), il(this, i, !0);
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
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = eC(n).map(Re.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = iL(o, l, s, i);
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
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), Ip(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? Ip(e.base || Oe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("min requires all arguments be DateTimes");
    return bp(e, (n) => n.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(Oe.isDateTime))
      throw new ln("max requires all arguments be DateTimes");
    return bp(e, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, a = Xe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return $0(a, e, n);
  }
  static fromStringExplain(e, n, r = {}) {
    return Oe.fromFormatExplain(e, n, r);
  }
  static get DATE_SHORT() {
    return cu;
  }
  static get DATE_MED() {
    return Wv;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return C2;
  }
  static get DATE_FULL() {
    return qv;
  }
  static get DATE_HUGE() {
    return Hv;
  }
  static get TIME_SIMPLE() {
    return zv;
  }
  static get TIME_WITH_SECONDS() {
    return Yv;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Xv;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return Kv;
  }
  static get TIME_24_SIMPLE() {
    return Zv;
  }
  static get TIME_24_WITH_SECONDS() {
    return Jv;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Qv;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return e0;
  }
  static get DATETIME_SHORT() {
    return t0;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return n0;
  }
  static get DATETIME_MED() {
    return r0;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return i0;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return L2;
  }
  static get DATETIME_FULL() {
    return s0;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return a0;
  }
  static get DATETIME_HUGE() {
    return o0;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return l0;
  }
}
function va(t) {
  if (Oe.isDateTime(t))
    return t;
  if (t && t.valueOf && is(t.valueOf()))
    return Oe.fromJSDate(t);
  if (t && typeof t == "object")
    return Oe.fromObject(t);
  throw new ln(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const U0 = [0, 1, 0, 0];
function $p(t, e = "second", n, r) {
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
function Hf(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function Rc(t) {
  return Oe.fromISO(t).toFormat("yyyy-MM-dd");
}
function OL(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? ML(t, e) : TL(t, e);
}
function ML(t, e) {
  var l;
  const n = (l = e.timeValueList) != null ? l : [];
  let r, i = 0, s = n.length - 1;
  for (; s - i > 1; )
    r = Math.floor((i + s) / 2), n[r] >= t ? s = r : i = r;
  const a = Math.abs(n[i] - t), o = Math.abs(n[s] - t);
  return n[a < o ? i : s];
}
function TL(t, e) {
  var l;
  const n = (l = e.timeInterval) != null ? l : U0, r = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
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
const vt = ms("map", () => {
  const t = Kn(), e = we({}), n = tt([]), r = tt([]), i = we(!1), s = we(!1), a = we(void 0);
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
    var O;
    const E = b ? r : n;
    E.value = [
      ...((O = E.value) == null ? void 0 : O.sort(
        (N, M) => v.indexOf(N.id) - v.indexOf(M.id)
      )) || []
    ];
  }
  function m(v, b) {
    n.value = n.value.map((E) => E.id === v ? { ...E, opacity: b, previousOpacity: E.opacity } : E);
  }
  function p(v, b, E) {
    n.value = n.value.map((O) => {
      if (O.id === v) {
        const N = {
          ...O,
          currentTimeMinValue: b ? Hf(b) : void 0,
          currentTimeMaxValue: E ? Hf(E) : void 0
        };
        return N.type === "WMTS" && (N.name = t.getLayerCurrentLabel(N)), N;
      }
      return O;
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
}), NL = "root_3d", CL = -222, Zt = ms(
  "config",
  () => {
    const t = tt(), e = we("main"), n = de(() => {
      var l;
      return (l = t.value) == null ? void 0 : l.themes;
    }), r = de(
      () => {
        var l;
        return (l = n.value) == null ? void 0 : l.find((u) => u.name === e.value);
      }
    ), i = de(() => {
      var l;
      return ((l = t.value) == null ? void 0 : l.background_layers) || [];
    }), s = de(() => {
      var u;
      const l = (u = n.value) == null ? void 0 : u.filter(
        (f) => {
          var c;
          return ((c = f.metadata) == null ? void 0 : c.ol3d_type) !== void 0;
        }
      );
      if (!!l)
        return {
          name: NL,
          id: CL,
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
function ss() {
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
const Fp = ss();
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
    const u = ((d = l.time) == null ? void 0 : d.mode) === Rr.RANGE;
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
    ].join(E2);
  }
  function s(l) {
    var h, d;
    const u = au();
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
      io.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = vt(), f = au();
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
      io.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var p;
    const c = Zt(), h = vt(), d = f ? c.layerTrees_3d : c.theme, m = Fp.findById(l, d);
    if (m) {
      const g = ((p = m.metadata) == null ? void 0 : p.linked_layers) || [];
      u === !1 ? h.removeLayers(m.id, ...g) : (s(m), (f ? h.add3dLayers : h.addLayers)(
        e(m),
        ...g.map(
          (v) => e(
            Fp.findById(parseInt(v, 10))
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
class LL {
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
const sl = new LL();
function Vp(t, e) {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(r);
    }, e);
  };
}
function zs(t) {
  return (t == null ? void 0 : t.trim()) && !isNaN(Number(t)) ? Number(t) : void 0;
}
function PL(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (n) => n !== null && !isNaN(Number(n)) ? parseFloat(n) : void 0
  )) || [];
}
function kL(t, e) {
  return (t == null ? void 0 : t.split(e).map(Hh)) || [];
}
function Hh(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function B0() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function pr(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
const AL = pr(/firefox/i);
pr(/safari/i) && !pr(/chrome/i) && pr(/android/i);
pr(/iP(ad|od|hone)/i);
pr(/chrome/i) && pr(/android/i);
pr(/chrome/i);
pr(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
pr(/Edge/i);
const No = "ipv6", Co = "applogin", Lo = "localforage", Ys = "debug", mu = "fid", wi = "lang", pu = "layersOpen", gu = "address", zf = "version", DL = "map_id", jp = "layers", Gp = "bgLayer", Up = "opacities", ao = "theme", Bp = "time", Wp = "zoom", IL = "SRS", qp = "X", Hp = "Y", yu = "serial", W0 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Yf = "lc", Xf = "sliderRatio", q0 = "bgOpacity", RL = "layers_indices", zp = "layers_opacity", Yp = "layers_visibility";
var Dt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(Dt || {});
class H0 {
}
class vu extends H0 {
  static processRules(e) {
    return vu.ruleUseLocalStorage(e) ? Dt.localStorage : Dt.permalink;
  }
  static processRulesForKey(e, n) {
    if (e === ao && {}.VITE_DEPLOY_GHPAGES !== "true")
      return Dt.permalinkAsPath;
    if (W0.includes(e))
      return Dt.localStorage;
    if (e === yu)
      return Dt.permalink;
    if (e === pu)
      return Dt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [$L, FL, VL].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const $L = (t) => Object.keys(t).length === 0, FL = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(No) || t.hasOwnProperty(Co) || t.hasOwnProperty(Lo)), VL = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(No) && t.hasOwnProperty(Co) && t.hasOwnProperty(Lo);
class _u extends H0 {
  static processRules() {
    return Dt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, n) {
    if (_u.ruleUsePermalink(e))
      return Dt.permalink;
    if (e === pu || W0.includes(e))
      return Dt.localStorage;
    if (e === yu)
      return Dt.permalink;
    if (e === ao)
      return Dt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      jL,
      GL,
      UL
    ].reduce(
      (n, r) => n || r(e),
      !1
    );
  }
}
const jL = (t) => t === Yf || t === Xf, GL = (t) => t === zf, UL = (t) => t === ao && {}.VITE_DEPLOY_GHPAGES === "true";
class z0 {
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
const $c = new z0();
class BL extends z0 {
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
const WL = new BL();
class qL {
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
    return $c.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const n = (i = this.correspondingStorages(
      vu.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), r = this.storageForKey(e, vu, n);
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
      _u.processRules()
    ), r = this.storageForKey(e, _u);
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
      return [$c, localStorage];
    if (e === Dt.localStorage)
      return [localStorage];
    if (e === Dt.permalink)
      return [$c];
    if (e === Dt.permalinkAsPath)
      return [WL];
  }
}
const al = new qL();
function HL(t) {
  return zL(t) || YL(t) || XL(t) || KL(t);
}
const zL = (t) => Object.keys(t).length === 0, YL = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    No,
    Co,
    Lo,
    mu,
    wi,
    gu,
    Ys
  ].some((n) => e.indexOf(n) !== -1);
}, XL = (t) => {
  const e = Object.keys(t), n = (i) => e.indexOf(i) !== -1, r = [
    [Co, Lo],
    [Ys, mu],
    [wi, mu],
    [Ys, wi],
    [Ys, gu],
    [wi, gu]
  ];
  return Object.keys(t).length === 2 && r.reduce(
    (i, s) => i || s.every(n),
    !1
  );
}, KL = (t) => {
  const e = Object.keys(t), n = (a) => e.indexOf(a) !== -1, r = [No, Co, Lo].every(
    n
  ), i = [Ys, mu, wi].every(n), s = [Ys, gu, wi].every(n);
  return Object.keys(t).length === 3 && (r || i || s);
};
class ZL {
  constructor() {
    st(this, "intialVersion");
    const e = al.paramKeys, n = this.getValue(zf, zs);
    this.intialVersion = n ? Math.max(2, Math.min(n, 3)) : HL(e) ? 3 : 2, this.setValue(zf, 3);
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
    return this.mapToEntity(al.getValue(e), n);
  }
  setValue(e, n, r) {
    al.setValue(e, this.mapToStorage(n, r));
  }
  removeItem(e) {
    al.removeItem(e);
  }
}
const Ne = new ZL(), JL = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], Yn = () => ({
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
function la() {
  function t(p) {
    const g = new URLSearchParams(document.location.search), y = g.get("embeddedserver"), v = g.get("embeddedserverprotocol") || "http";
    return (y ? `${v}://${y}` : "https://vectortiles.geoportail.lu") + `/styles/${p}/style.json`;
  }
  function e(p) {
    return `https://vectortiles.geoportail.lu/styles/${p}/{z}/{x}/{y}.png`;
  }
  function n(p) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(p);
  }
  const r = gr();
  function i(p, g) {
    if (p == null)
      return;
    const y = /* @__PURE__ */ new Map();
    r.bgVectorSources.forEach((v, b) => {
      if (b === p.id) {
        const E = { ...v, xyz_custom: g };
        y.set(b, E);
      } else
        y.set(b, v);
    }), r.setBgVectorSources(y);
  }
  function s(p, g, y = !1) {
    const v = "", b = t(g), E = e(g), O = {
      label: p,
      defaultMapBoxStyle: b,
      defaultMapBoxStyleXYZ: E,
      xyz: E,
      xyz_custom: v,
      style: b
    }, N = new URLSearchParams(window.location.search).get("serial"), M = new URLSearchParams(window.location.search).get(
      "serialLayer"
    );
    if (N)
      n(N) && console.log(M);
    else if (!y)
      return Promise.resolve(O);
    return Promise.resolve(O);
  }
  function a(p) {
    const g = Yn().medium_default_styles.road;
    if (p) {
      p.colors.forEach((v, b) => {
        g[b].color = v;
      });
      const y = g.findIndex(
        (v) => v.label === "Hillshade"
      );
      g[y].visible = p.hillshade;
    }
    return g;
  }
  function o(p, g, y) {
    if (!p || !g.get(p.id))
      return;
    const v = JSON.parse(
      JSON.stringify(g.get(p.id))
    );
    if (!!v && !(!v || !v.layers))
      return y && y.forEach((b) => {
        v == null || v.layers.forEach((E, O) => {
          for (const N of JL)
            if ((b[`${N}s`] || []).includes(E.id)) {
              const P = Object.assign(
                {},
                v.layers[O].paint
              );
              b.color && (P[`${N}-color`] = b.color, P[`${N}-opacity`] = 1, v.layers[O].paint = P), v.layers[O].layout = Object.assign(
                {},
                v.layers[O].layout,
                { visibility: b.visible ? "visible" : "none" }
              );
            }
        });
      }), v;
  }
  function l(p, g) {
    if (p === null)
      return Promise.resolve();
    {
      const y = `${g.get("delete")}?id=${p}`;
      return fetch(y).catch(() => "");
    }
  }
  function u(p, g, y) {
    return l(g, y).then(() => {
      const v = new FormData(), b = JSON.stringify(p), E = new Blob([b], { type: "application/json" });
      v.append("style", E, "style.json");
      const O = {
        method: "POST",
        body: v
      };
      return fetch(y.get("upload") || "", O).then((N) => N.json()).then((N) => N.id).catch((N) => console.warn(N));
    });
  }
  function f(p, g) {
    if (!g)
      return;
    const y = p.maplibreMap;
    !y || (y.loaded() ? y.setStyle(g) : new Promise((v) => y.once("data", v)).then(
      () => y.setStyle(g)
    ));
  }
  function c(p) {
    const g = Yn().bg_layers.find(
      (y) => y.id == (p == null ? void 0 : p.id)
    );
    return g == null ? void 0 : g.vector_id;
  }
  function h(p) {
    const g = Yn().bg_layers.find(
      (y) => y.id == (p == null ? void 0 : p.id)
    );
    return (g == null ? void 0 : g.vector_id) !== void 0;
  }
  function d(p) {
    const g = Yn().bg_layers.find(
      (y) => y.id == (p == null ? void 0 : p.id)
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
      (y) => Object.assign(y, {
        selected: y.colors.every(
          (v, b) => {
            var E;
            return ((E = p[b]) == null ? void 0 : E.color) === v;
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
const gr = ms(
  "style",
  () => {
    const t = la(), e = tt(), n = tt(/* @__PURE__ */ new Map()), r = tt(
      /* @__PURE__ */ new Map()
    ), i = tt(!1), s = tt(null), a = tt(), o = tt(
      /* @__PURE__ */ new Map([
        ["get", "/getvtstyle"],
        ["upload", "/uploadvtstyle"],
        ["delete", "/deletevtstyle"]
      ])
    ), l = [];
    Yn().bg_layers.forEach((y) => {
      if (y.vector_id) {
        const v = t.setConfigForLayer(
          y.icon_id,
          y.vector_id
        );
        l.push(
          v.then((b) => ({ id: y.id, config: b }))
        );
      }
    }), Promise.all(l).then((y) => {
      const v = /* @__PURE__ */ new Map();
      y.forEach((b) => v.set(b.id, b.config)), n.value = v;
    });
    function u(y, v) {
      o.value.set(y, v);
    }
    function f(y) {
      n.value = y;
    }
    function c(y) {
      const v = /* @__PURE__ */ new Map();
      r.value.forEach((b, E) => {
        E !== y && v.set(E, b);
      }), r.value = v;
    }
    function h(y, v) {
      const b = /* @__PURE__ */ new Map();
      r.value.forEach(
        (E, O) => b.set(O, E)
      ), b.set(y, v), r.value = b;
    }
    function d(y) {
      e.value = t.getRoadStyleFromSimpleStyle(y), p();
    }
    function m(y) {
      e.value = y, p();
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
class QL {
  constructor() {
    st(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = gr();
    let n, r = !1;
    n = vn(() => {
      e.bgVectorSources && (this.restoreStyle(!1), r && this.persistStyle(), r = !0, n && n());
    });
  }
  persistStyle() {
    const e = gr(), { bgStyle: n } = He(e);
    this.styleWatcher || (this.styleWatcher = et(
      n,
      (r, i) => {
        if (i !== r) {
          const s = vt();
          s.bgLayer && (Ne.setValue(
            s.bgLayer.name,
            r || [],
            sl.styleToLocalStorage
          ), Ne.setValue(
            yu,
            r || [],
            sl.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const n = gr();
    n.setStyle(null);
    const i = vt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Ne.getValue(
        yu,
        sl.styleSerialToStyle
      )), s.length === 0 && (s = Ne.getValue(
        i.name,
        sl.styleLocalStorageToStyle
      )), s && s.length > 0 && n.setStyle(s);
    }
  }
}
const Y0 = new QL(), eP = "https://map.geoportail.lu/ogcproxywms", tP = "https://map.geoportail.lu/httpsproxy";
class nP {
  constructor() {
    st(this, "_wmsProxyUrl", eP);
    st(this, "_remoteProxyUrl", tP);
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
const ta = new nP();
function X0() {
  return X_(
    [5.31, 49.38, 6.64, 50.21],
    Fv,
    Ua
  );
}
function K0(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && B0();
}
function rP(t, e = "https") {
  const n = t.imageType.split("/")[1], r = Ne.getValue(No, Hh) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${r}/mapproxy_4_v3/wmts/{Layer}${K0(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${n}`;
}
class iP {
  createOlLayer(e) {
    const { name: n, layers: r, imageType: i, url: s, id: a } = e, o = new xg({
      url: s || ta.wmsProxyUrl,
      hidpi: B0(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: r
      },
      ...s != null || ta.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new eb({
      properties: {
        "olcs.extent": X0(),
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
const Z0 = new iP(), sP = [
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
], aP = [
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
class oP {
  createOlLayer(e) {
    const { name: n, imageType: r, id: i } = e, s = K0(e), a = gl(Ua), o = a.getExtent(), l = new Og({
      url: rP(e),
      tilePixelRatio: s ? 2 : 1,
      layer: n,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: r,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new nb({
        origin: rb(o),
        extent: o,
        resolutions: sP,
        matrixIds: aP
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new tb({
      source: l,
      properties: {
        "olcs.extent": X0(),
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
const J0 = new oP();
class Q0 extends ib {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.accessToken, delete n.style, delete n.container, delete n.xyz, super(n), this.set("xyz", e.maplibreOptions.xyz), this.set("xyz_custom", e.maplibreOptions.xyz_custom), this.xyz_ = e.xyz, e.accessToken && (pd.accessToken = e.accessToken), this.map_ = new pd.Map({
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
    return a && this.map_.rotateTo(sb(-a), {
      animate: !1
    }), this.map_.jumpTo({
      center: ab(r.center),
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
class lP {
  createOlLayer(e, n) {
    const r = Vr(), { id: i, metadata: s, name: a } = e, o = n.get(i);
    if (!o)
      return;
    const l = {
      container: r.getOlMap().getTarget(),
      ...o
    }, u = new Q0({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = gr();
    return u != null && u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u == null ? void 0 : u.getMapLibreMap().getStyle()) : new Promise(
      (c) => u == null ? void 0 : u.getMapLibreMap().once("data", c)
    ).then(
      () => f.setBaseStyle(i, u == null ? void 0 : u.getMapLibreMap().getStyle())
    ), u;
  }
}
const uP = new lP();
class cP {
  createOlLayer(e, n) {
    let r;
    if (n && (r = uP.createOlLayer(e, n)), !r)
      switch (e.type) {
        case "WMS":
          r = Z0.createOlLayer(e);
          break;
        case "WMTS":
        case "BG WMTS":
          r = J0.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return r.set("id", e.id), r.set("label", e.name), r.set("layer_name", e.name), r.set("metadata", e.metadata), r.set("queryable_id", e.id), r.set("current_time", Kn().getLayerCurrentTime(e)), r.set("time", e.time), r.setOpacity(e.opacity), r;
  }
}
const Xp = new cP();
class fP {
  setLayerTime(e, n) {
    const r = e.getSource();
    r instanceof xg && Z0.setLayerTime(r, n), r instanceof Og && J0.setLayerTime(e, r, n);
  }
}
const hP = new fP(), ol = -200;
function e_() {
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
    const p = Kn(), g = e(d, m.id), y = p.getLayerCurrentTime(m);
    y && g && hP.setLayerTime(g, y);
  }
  function a(d) {
    pa.delete(d);
  }
  function o(d) {
    return pa.has(d.id);
  }
  function l(d, m) {
    pa.set(d, m);
  }
  function u(d) {
    const m = d.id, p = pa.get(m);
    if (p)
      return p;
    {
      const g = Xp.createOlLayer(d);
      return l(m, g), g;
    }
  }
  function f(d) {
    return d && pa.get(d.id) || null;
  }
  function c(d, m) {
    const g = d.getLayers().getArray().find((y) => y.getZIndex() === ol);
    g && m(g);
  }
  function h(d, m, p) {
    var E;
    const g = d.getLayers(), y = g.getArray().findIndex((O) => O.getZIndex() === ol), v = (E = g.getArray()[y]) == null ? void 0 : E.get("id");
    let b;
    m && (o(m) ? b = f(m) : (b = Xp.createOlLayer(
      m,
      p
    ), l(m.id, b))), y >= 0 ? b ? (b.setZIndex(ol), g.setAt(y, b)) : g.removeAt(y) : b && (b.setZIndex(ol), d.addLayer(b)), v && v !== (m == null ? void 0 : m.id) && Y0.restoreStyle(!0);
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
class dP {
  constructor(e) {
    st(this, "previousLayers");
    st(this, "previousVectorSources");
    const n = vt(), r = gr(), i = Vr(), s = la(), a = e_(), { appliedStyle: o } = He(r);
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
        c.forEach((m) => a.removeLayer(e, m.id)), h.forEach((m) => {
          a.addLayer(e, m.layer), a.setLayerTime(e, m.layer);
        }), d.forEach((m) => {
          a.setLayerOpacity(e, m.id, m.opacity), a.setLayerTime(e, m);
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
const mP = {
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
class pP {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = Vr().getOlMap().getView(), n = () => {
      const r = e.getZoom();
      Ne.setValue(Wp, r ? Math.ceil(r) : null);
    };
    n(), gd.listen(
      e,
      "change:resolution",
      Vp(n, 300)
    );
  }
  persistXY() {
    const e = Vr().getOlMap().getView(), n = () => {
      const r = e.getCenter();
      Ne.setValue(qp, r ? Math.round(r[0]) : null), Ne.setValue(Hp, r ? Math.round(r[1]) : null);
    };
    n(), gd.listen(
      e,
      ob.PROPERTYCHANGE,
      Vp(n, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = Vr().getOlMap().getView(), n = Ne.getValue(Wp, zs), r = Ne.getInitialVersion(), i = Ne.getValue(qp, zs), s = Ne.getValue(Hp, zs), a = Ne.getValue(IL), o = K_(
      VN,
      Ua
    );
    let l, u;
    n !== void 0 ? u = r === 3 ? Number(n) : mP[n] : u = 8, i != null && s != null ? r === 3 && a != null ? l = md([i, s], a, Ua) : l = r === 3 ? [i, s] : o([s, i], void 0, 2) : l = md(
      [6, 49.7],
      Fv,
      Ua
    ), e.setCenter(l), e.setZoom(u);
  }
}
const gP = new pP(), yP = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, vP = /* @__PURE__ */ fe({
  __name: "attribution-control",
  setup(t) {
    const e = vt(), n = we("");
    return vn(() => {
      var r, i;
      n.value = ((i = (r = e.bgLayer) == null ? void 0 : r.metadata) == null ? void 0 : i.attribution) || "";
    }), (r, i) => {
      const s = Eh("dompurify-html");
      return n.value ? zl((k(), G("div", yP, null, 512)), [
        [s, n.value]
      ]) : F("v-if", !0);
    };
  }
}), _P = /* @__PURE__ */ pe(vP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/attribution-control.vue"]]);
function Po(t, e) {
  const n = new t(e), r = Vr(), i = Gs("olMap");
  return _n(() => {
    i.addControl(n), i.changed();
  }), Li(() => {
    const s = r.getOlMap();
    s.removeControl(n), s.changed();
  }), {
    control: n
  };
}
const bP = ["title"], EP = /* @__PURE__ */ fe({
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
      () => Po(Ng, { ...n, target: r })
    ), (s, a) => (k(), G("div", {
      ref_key: "controlElement",
      ref: r,
      class: ke(`tracker-off ${n.className} ${x(Mg)} ${x(Tg)}`)
    }, [
      L("button", {
        title: x(e)(n.tipLabel),
        onClick: i
      }, oe(n.label), 9, bP)
    ], 2));
  }
}), SP = /* @__PURE__ */ pe(EP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/location-control.vue"]]), wP = ["title"], xP = /* @__PURE__ */ fe({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = vt(), { t: n } = Ze(), r = t, i = we(null);
    _n(
      () => Po(Ng, { ...r, target: i })
    );
    const s = () => {
      e.setIs3dActive(!e.is3dActive);
    };
    return (a, o) => (k(), G("div", {
      ref_key: "controlElement",
      ref: i,
      class: ke(`${r.className} ${x(Mg)} ${x(Tg)} ${x(e).is3dActive ? "active" : ""}`)
    }, [
      L("button", {
        title: x(n)(r.tipLabel),
        onClick: s
      }, oe(r.label), 9, wP)
    ], 2));
  }
}), OP = /* @__PURE__ */ pe(xP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/map-3d.vue"]]), MP = /* @__PURE__ */ fe({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return Po(lb, t), (n, r) => F("v-if", !0);
  }
}), TP = /* @__PURE__ */ pe(MP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/fullscreen-control.vue"]]), NP = /* @__PURE__ */ fe({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return Po(ub, t), (n, r) => F("v-if", !0);
  }
}), CP = /* @__PURE__ */ pe(NP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/zoom-control.vue"]]);
class LP extends cb {
  constructor(n) {
    super(n);
    st(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const PP = /* @__PURE__ */ fe({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: Array, required: !0 }
  },
  setup(t) {
    return Po(LP, t), (n, r) => F("v-if", !0);
  }
}), kP = /* @__PURE__ */ pe(PP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map-controls/zoom-to-extent-control.vue"]]), AP = /* @__PURE__ */ fe({
  __name: "map-container",
  props: {
    v4_standalone: { type: Boolean, required: !1, default: !1 }
  },
  setup(t) {
    const e = Vr(), n = we(null), r = e.createMap(), i = [
      425152.9429259216,
      632446599999133e-8,
      914349.9239510496,
      6507914867875754e-9
    ];
    return _n(() => {
      n.value && (new dP(r), gP.bootstrap(), r.setTarget(n.value), window.olMap = r);
    }), Cy("olMap", r), (s, a) => (k(), G("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: n,
      class: "h-full w-full bg-white relative"
    }, [
      ie(CP),
      ie(kP, { extent: i }),
      ie(TP),
      ie(_P),
      s.v4_standalone ? (k(), Ue(OP, { key: 0 })) : F("v-if", !0),
      ie(SP)
    ], 512));
  }
}), DP = /* @__PURE__ */ pe(AP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/map/map-container.vue"]]), IP = "fr", RP = !0, $P = !1, FP = !1, wt = ms(
  "app",
  () => {
    const t = we(IP), e = we(RP), n = we($P), r = we(FP), i = we(), s = we(), a = we(!1);
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
), bu = {
  name: "blank",
  id: 0
};
function t_() {
  const t = wt(), { mapId: e } = He(t), n = ss(), r = vt(), i = Kn(), s = de(() => {
    var c;
    if (!e.value) {
      const h = (c = Zt().theme) == null ? void 0 : c.name;
      if (h)
        return Yn().bg_layer_theme_defaults[h] || l();
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
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || bu.id;
  }
  function u() {
    return bu.id;
  }
  function f() {
    return Yn().bg_layers;
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
const VP = ["title"], jP = /* @__PURE__ */ fe({
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
    return (s, a) => (k(), G("button", {
      title: r.value,
      class: ke(i.value)
    }, null, 10, VP));
  }
}), Kp = /* @__PURE__ */ pe(jP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/background-selector/background-selector-item.vue"]]), GP = {
  key: 0,
  class: "flex flex-row-reverse"
}, UP = /* @__PURE__ */ fe({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { t: e } = Ze(), n = t_(), r = vt(), i = Zt(), { bgLayer: s, is3dMesh: a } = He(r), l = we(t.isOpen), u = we([]), f = de(
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
    et(
      () => i.bgLayers,
      (m) => {
        u.value = Yn().bg_layers.map(
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
    ), et(
      () => r.bgLayer,
      (m, p) => {
        const g = r.layers;
        p === void 0 && m === null && (g == null ? void 0 : g.length) === 0 && (n.setBgLayer(n.defaultSelectedBgId.value), m === null && au().addNotification(
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
    return (m, p) => x(a) ? F("v-if", !0) : (k(), G("div", GP, [
      L("div", {
        class: ke(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ie(Kp, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": c.value,
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      L("div", {
        class: ke(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (k(!0), G(Ge, null, kn(u.value, (g) => (k(), G("div", {
          key: g.id,
          class: ke([
            "lux-bg-sel hover:bg-cyan-600",
            g.id === f.value ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ie(Kp, {
            "bg-name": g.name,
            onClick: (y) => h(g)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), BP = /* @__PURE__ */ pe(UP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/background-selector/background-selector.vue"]]), WP = /* @__PURE__ */ L("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), qP = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, HP = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, zP = { class: "text-xl" }, YP = /* @__PURE__ */ L("span", { "aria-hidden": "true" }, "\xD7", -1), XP = [
  YP
], KP = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, ZP = { class: "flex flex-row justify-end" }, JP = /* @__PURE__ */ fe({
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
    const r = tt(!0);
    function i() {
      r.value = !1;
    }
    return (s, a) => (k(), Ue(jy, { to: "body" }, [
      F(" backdrop "),
      WP,
      F(" modal "),
      ie(Wu, {
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
          r.value ? (k(), G("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: n,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = or(ar((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            L("div", qP, [
              F(" header (title)"),
              L("div", HP, [
                L("h4", zP, oe(t.title), 1),
                L("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, [...XP])
              ]),
              F(" content slot "),
              L("div", {
                class: ke(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                xy(s.$slots, "content")
              ], 2),
              F(" footer (optional)"),
              t.footer ? (k(), G("div", KP, [
                L("div", ZP, [
                  L("button", {
                    type: "button",
                    class: "lux-btn",
                    "data-dismiss": "modal",
                    onClick: a[1] || (a[1] = (o) => i())
                  }, oe(x(e)("Close", { ns: "client" })), 1)
                ])
              ])) : F("v-if", !0)
            ])
          ], 544)) : F("v-if", !0)
        ]),
        _: 3
      })
    ]));
  }
}), n_ = /* @__PURE__ */ pe(JP, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/modal-dialog.vue"]]), zh = ms(
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
), QP = ["aria-expanded"], ek = { class: "leading-6" }, tk = /* @__PURE__ */ fe({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, n) => (k(), G(Ge, null, [
      L("button", {
        onClick: n[0] || (n[0] = (r) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": e.expanded
      }, [
        L("div", {
          class: ke(["grow", e.expanded ? "text-white" : "text-secondary"])
        }, oe(e.title), 3),
        L("div", ek, [
          L("div", {
            class: ke(["fa fa-sharp fa-solid group-hover:text-white text-primary", e.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, QP),
      L("div", {
        class: ke(e.expanded ? "" : "hidden")
      }, [
        xy(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), Il = /* @__PURE__ */ pe(tk, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/expandable-panel.vue"]]), nk = {
  class: "mb-px",
  key: "node.id"
}, rk = ["data-cy"], ik = ["aria-expanded", "data-cy"], sk = { class: "grow" }, ak = { class: "leading-6" }, ok = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, lk = ["data-cy"], uk = { class: "ml-1 hover:underline" }, ck = /* @__PURE__ */ fe({
  __name: "layer-tree-node",
  props: {
    node: { type: Object, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i } = Ze(), { setMetadataId: s } = zh(), a = !!n.node.children, o = n.node.depth === 0, l = n.node.depth >= 10, u = de(() => i(n.node.name, { ns: "client" }));
    function f(h) {
      r("toggleLayer", h);
    }
    function c(h) {
      r("toggleParent", h);
    }
    return (h, d) => {
      const m = R1("layer-tree-node", !0);
      return a ? (k(), G("div", nk, [
        F("    First level parents"),
        h.node.depth === 1 ? (k(), G("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${h.node.id}`
        }, [
          ie(Il, {
            title: u.value,
            expanded: h.node.expanded,
            onTogglePanel: d[0] || (d[0] = (p) => c(h.node))
          }, null, 8, ["title", "expanded"])
        ], 8, rk)) : h.node.depth > 1 && !l ? (k(), G(Ge, { key: 1 }, [
          F("    Other parents (with custom panel style)"),
          L("button", {
            class: ke(["w-full text-left flex px-2 py-1.5 pl-2", h.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": h.node.expanded,
            onClick: d[1] || (d[1] = (p) => c(h.node)),
            "data-cy": `parentLayerLabel-${h.node.id}`
          }, [
            L("div", sk, oe(u.value), 1),
            L("div", ak, [
              L("div", {
                class: ke(["fa-sharp fa-solid", h.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, ik)
        ], 2112)) : F("v-if", !0),
        F("    Children"),
        l ? F("v-if", !0) : (k(), G("div", {
          key: 2,
          class: ke(["bg-secondary", [
            { "pl-2": h.node.depth > 1 },
            { "lux-collapse": !o },
            { expanded: !o && h.node.expanded }
          ]])
        }, [
          (k(!0), G(Ge, null, kn(h.node.children, (p) => (k(), Ue(m, {
            key: p.id,
            node: p,
            onToggleParent: d[2] || (d[2] = (g) => c(g)),
            onToggleLayer: d[3] || (d[3] = (g) => f(g))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (k(), G("div", ok, [
        L("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: d[4] || (d[4] = (p) => x(s)(h.node.id))
        }),
        L("button", {
          class: ke(["w-full text-left", { "font-bold": h.node.checked }]),
          onClick: d[5] || (d[5] = (p) => f(h.node)),
          "data-cy": `layerLabel-${h.node.id}`
        }, [
          L("i", {
            class: ke(["fa-solid", h.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          L("span", uk, oe(u.value), 1)
        ], 10, lk)
      ]));
    };
  }
}), Kf = /* @__PURE__ */ pe(ck, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-tree/layer-tree-node.vue"]]);
class fk {
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
const Xs = new fk();
var Pn = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Pn || {});
function hk(t, e) {
  var n, r;
  return t.children && !e.children || ((n = e.children) == null ? void 0 : n.length) === 0 ? 1 : e.children && !t.children || ((r = t.children) == null ? void 0 : r.length) === 0 ? -1 : 0;
}
function r_(t, e, n = 0) {
  const { name: r = "", type: i = Pn.WMS, children: s } = t, a = `${i}||${e}||${r}`.split("-").join("%2D"), o = vt();
  return {
    id: a,
    name: r,
    depth: n,
    children: s == null ? void 0 : s.sort(hk).map((l) => r_(l, e, n + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function dk(t) {
  const e = decodeURIComponent(t), [n, r, i] = e.split("||");
  return i_({
    id: e,
    url: ta.getProxyfiedUrl(r),
    remoteLayer: { name: i, type: n }
  });
}
function i_({
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
    imageType: Uv.PNG
  };
}
class Fc {
  constructor(e, n = 0, r = !1) {
    this.message = e, this.httpStatus = n, this.isCrossOriginRelated = r;
  }
}
let mk = 0;
function pk() {
  return mk++;
}
function gk(t, e, n) {
  return new Promise((r, i) => {
    const s = pk(), a = {
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
function Yh(t, e, n) {
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
let Vc;
function yk() {
  return Vc || (Vc = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), Vc;
}
function vk(t) {
  return gk("parseWmsCapabilities", yk(), {
    url: t
  });
}
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ni = "";
class _k {
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
var bk = _k, ki = {};
const Ek = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
ki.predefinedEntities = Ek;
function s_(t) {
  if (a_(t))
    return !0;
  let e = tc(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
ki.isNameChar = s_;
function a_(t) {
  let e = tc(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
ki.isNameStartChar = a_;
function Sk(t) {
  return !o_(t);
}
ki.isNotXmlChar = Sk;
function wk(t) {
  return t === "#" || s_(t);
}
ki.isReferenceChar = wk;
function xk(t) {
  let e = tc(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
ki.isWhitespace = xk;
function o_(t) {
  let e = tc(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
ki.isXmlChar = o_;
function tc(t) {
  return t.codePointAt(0) || -1;
}
class gs {
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
gs.TYPE_CDATA = "cdata";
gs.TYPE_COMMENT = "comment";
gs.TYPE_DOCUMENT = "document";
gs.TYPE_ELEMENT = "element";
gs.TYPE_PROCESSING_INSTRUCTION = "pi";
gs.TYPE_TEXT = "text";
var ys = gs;
const jc = ys;
class Ok extends jc {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return jc.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(jc.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var Xh = Ok;
const Mk = ys, Tk = Xh;
class Nk extends Tk {
  get type() {
    return Mk.TYPE_CDATA;
  }
}
var l_ = Nk;
const Gc = ys;
class Ck extends Gc {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return Gc.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(Gc.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var u_ = Ck;
const Uc = ys;
class Kh extends Uc {
  constructor(e, n = /* @__PURE__ */ Object.create(null), r = []) {
    super(), this.name = e, this.attributes = n, this.children = r;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof Kh; ) {
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
    return Uc.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(Uc.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var Zh = Kh;
const Lk = Zh, Bc = ys;
class Pk extends Bc {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof Lk) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return Bc.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(Bc.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var c_ = Pk;
const Wc = ys;
class kk extends Wc {
  constructor(e, n = "") {
    super(), this.name = e, this.content = n;
  }
  get type() {
    return Wc.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(Wc.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var f_ = kk;
const Ak = bk, Bi = ki, Dk = l_, Ik = u_, Rk = c_, $k = Zh, Zp = f_, Jp = Xh, qc = "";
class Fk {
  constructor(e, n = {}) {
    for (this.document = new Rk(), this.currentNode = this.document, this.options = n, this.scanner = new Ak(jk(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
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
      if (r instanceof Jp) {
        r.text += e;
        return;
      }
    }
    this.addNode(new Jp(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, n = e.peek();
    if (n !== '"' && n !== "'")
      return !1;
    e.advance();
    let r, i = !1, s = qc, a = n === '"' ? /[^"&<]+/y : /[^'&<]+/y;
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
          case qc:
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
    return this.validateChars(n), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new Dk(n)) : this.addText(n), !0;
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
    return this.validateChars(n), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new Ik(n.trim())), !0;
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
    let s = Boolean(e.consumeStringFast("/>")), a = new $k(r, i);
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
    return Bi.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(Bi.isNameChar) : qc;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, n = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let r = this.consumeName();
    if (r ? r.toLowerCase() === "xml" && (e.reset(n), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new Zp(r)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new Zp(r, i)), !0;
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
var Vk = Fk;
function jk(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const Gk = Vk, Uk = l_, Bk = u_, Wk = c_, qk = Zh, Hk = ys, zk = f_, Yk = Xh;
function Ai(t, e) {
  return new Gk(t, e).document;
}
Ai.XmlCdata = Uk;
Ai.XmlComment = Bk;
Ai.XmlDocument = Wk;
Ai.XmlElement = qk;
Ai.XmlNode = Hk;
Ai.XmlProcessingInstruction = zk;
Ai.XmlText = Yk;
var Xk = Ai;
class Kk extends Error {
  constructor(e) {
    super(e);
  }
}
function Zk(t) {
  let e = null;
  try {
    e = Xk(t);
  } catch (n) {
    throw new Kk(n.message);
  }
  return e;
}
function Br(t) {
  return t.children[0];
}
function Eu(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function Su(t) {
  return t.name || "";
}
function Ht(t, e, n) {
  const r = Eu(e);
  function i(s, a) {
    return Eu(Su(a)) === r && s.push(a), n && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
  }
  return t && Array.isArray(t.children) ? t.children.reduce(i, []) : [];
}
function Me(t, e, n) {
  return Ht(t, e, n)[0] || null;
}
function Ta(t) {
  return t && Array.isArray(t.children) ? [...t.children.filter((e) => e.constructor.name === "XmlElement")] : [];
}
function ze(t) {
  const e = t && Array.isArray(t.children) ? t.children.find((n) => n.type === "text") : null;
  return e ? e.text : "";
}
function yr(t, e) {
  return t && t.attributes[e] || "";
}
const Qp = ["utf-8", "utf-16", "iso-8859-1"], eg = "utf-8";
function Jk(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function Qk(t, e) {
  const n = e ? Jk(e) : null, r = n ? [n, ...Qp] : Qp;
  for (const i of r)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${eg}.`
  ), new TextDecoder(eg).decode(t);
}
const ll = /* @__PURE__ */ new Map();
function eA(t) {
  if (ll.has(t))
    return ll.get(t);
  const e = fetch(t);
  return e.finally(() => ll.delete(t)), ll.set(t, e), e;
}
function Jh(t) {
  return eA(t).catch(
    () => fetch(t, { method: "HEAD", mode: "no-cors" }).catch((e) => {
      throw new Fc(
        `Fetching the document failed either due to network errors or unreachable host, error is: ${e.message}`,
        0,
        !1
      );
    }).then(() => {
      throw new Fc(
        "The document could not be fetched due to CORS limitations",
        0,
        !0
      );
    })
  ).then(async (e) => {
    if (!e.ok) {
      const i = await e.text();
      throw new Fc(
        `Received an error with code ${e.status}: ${i}`,
        e.status,
        !1
      );
    }
    const n = await e.arrayBuffer(), r = e.headers.get("Content-Type");
    return Qk(n, r);
  }).then((e) => Zk(e));
}
function Qh(t, e) {
  const n = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (n) {
    const o = n[1], l = Qh(decodeURIComponent(o), e);
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
const Ni = "caches" in self ? caches.open("ogc-client") : null;
async function rA(t, ...e) {
  if (!Ni)
    return;
  const n = "https://cache/" + e.join("/");
  await (await Ni).put(
    n,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + nA()).toString(10)
      }
    })
  );
}
async function iA(...t) {
  if (!Ni)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await Ni).match(e).then((r) => !!r && parseInt(r.headers.get("x-expiry")) > Date.now());
}
async function sA(...t) {
  if (!Ni)
    return null;
  const e = "https://cache/" + t.join("/"), r = await (await Ni).match(e);
  return r ? r.clone().json() : null;
}
const ul = /* @__PURE__ */ new Map();
async function aA(t, ...e) {
  if (await oA(), await iA(...e))
    return sA(...e);
  const n = e.join("#");
  if (ul.has(n))
    return ul.get(n);
  const r = t();
  r instanceof Promise && (r.then(() => ul.delete(n)), ul.set(n, r));
  const i = await r;
  return await rA(i, ...e), i;
}
async function oA() {
  if (!Ni)
    return;
  const t = await Ni, e = await t.keys();
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
  return Qh(t, h);
}
class uA {
  constructor(e) {
    const n = Qh(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = aA(
      () => vk(n),
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
  return cA.indexOf(Zf(t)) > -1;
}
function Zf(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function h_(t) {
  return Br(t).attributes.version;
}
function hA(t) {
  const e = h_(t), n = Me(
    Br(t),
    "Capability"
  );
  return Ht(n, "Layer").map(
    (r) => d_(r, e)
  );
}
function dA(t) {
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
function d_(t, e, n = [], r = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = Ht(t, s).map(ze), o = a.length > 0 ? a : n, l = Ht(t, "Style").map(
    mA
  ), u = l.length > 0 ? l : r;
  function f(m) {
    const p = yr(m, s);
    return (fA(p) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((y) => yr(m, y));
  }
  const c = Me(t, "Attribution"), h = c !== null ? pA(c) : i, d = Ht(t, "Layer").map(
    (m) => d_(m, e, o, u, h)
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
        [yr(p, s)]: f(p)
      }),
      {}
    ),
    ...d.length && { children: d }
  };
}
function mA(t) {
  const e = yr(
    Me(Me(t, "LegendURL"), "OnlineResource"),
    "xlink:href"
  );
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    ...e && { legendUrl: e }
  };
}
function pA(t) {
  const e = yr(
    Me(
      Me(t, "LogoURL"),
      "OnlineResource"
    ),
    "xlink:href"
  ), n = yr(
    Me(t, "OnlineResource"),
    "xlink:href"
  ), r = ze(Me(t, "Title"));
  return {
    ...r && { title: r },
    ...n && { url: n },
    ...e && { logoUrl: e }
  };
}
function nc(t) {
  return Br(t).attributes.version;
}
function m_(t) {
  const e = nc(t);
  let n;
  if (e.startsWith("1.0")) {
    const r = Me(
      Me(
        Me(Br(t), "Capability"),
        "Request"
      ),
      "GetFeature"
    );
    n = Ta(
      Me(r, "ResultFormat")
    ).map(Su);
  } else {
    const r = Me(
      Br(t),
      "OperationsMetadata"
    ), i = Ht(r, "Operation").find(
      (a) => yr(a, "name") === "GetFeature"
    ), s = Ht(i, "Parameter").find(
      (a) => yr(a, "name") === "outputFormat"
    );
    n = Ht(s, "Value", !0).map(
      ze
    );
  }
  return n;
}
function gA(t) {
  const e = nc(t), n = e.startsWith("1.0") ? "Service" : "ServiceIdentification", r = e.startsWith("1.0") ? "Name" : "ServiceType", i = Me(Br(t), n);
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
    outputFormats: m_(t)
  };
}
function yA(t) {
  const e = nc(t), n = m_(t), r = Me(
    Br(t),
    "FeatureTypeList"
  );
  return Ht(r, "FeatureType").map(
    (i) => vA(i, e, n)
  );
}
function vA(t, e, n) {
  const r = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${r}`;
  function s() {
    const u = Me(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => yr(u, f)).map(parseFloat);
  }
  function a() {
    const u = Me(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => Me(u, f)).map((f) => ze(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : Ht(t, `Other${r}`).map(ze).map(Zf), l = e.startsWith("1.0") ? [] : Ht(
    Me(t, "OutputFormats"),
    "Format"
  ).map(ze);
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    defaultCrs: Zf(
      ze(Me(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : n,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function _A(t, e, n) {
  const r = Br(t);
  let i;
  if (n.startsWith("2.0"))
    i = Ht(r, "member").map(
      (u) => Ta(u)[0]
    );
  else {
    const u = Me(r, "featureMembers");
    i = u ? Ta(u) : Ht(r, "featureMember").map(
      (f) => Ta(f)[0]
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
    return Ta(u).filter((f) => a(Eu(Su(f)))).reduce((f, c) => {
      const h = Eu(Su(c));
      return {
        ...f,
        [h]: o(h, ze(c))
      };
    }, {});
  }
  return i.map((u) => ({
    id: yr(u, s),
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
Yh(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => Jh(t).then((e) => ({
    info: dA(e),
    layers: hA(e),
    version: h_(e)
  }))
);
Yh(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => Jh(t).then((e) => ({
    info: gA(e),
    featureTypes: yA(e),
    version: nc(e)
  }))
);
Yh(
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
    return Jh(r).then((i) => ({
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
class SA {
  constructor(e) {
    st(this, "capabilitiesPromise");
    st(this, "serviceInfo");
    st(this, "layers");
    const n = new fb();
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
class wA {
  async getRemoteEndpoint(e) {
    let n;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      n = await this.getWmtsEndpoint(e).isReady();
    }) || n;
  }
  getWmsEndpoint(e) {
    return new uA(ta.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new SA(ta.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(EA()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Pn.WMS) === 0 || e.indexOf(Pn.WMTS) === 0);
  }
}
const oo = new wA(), xA = { class: "relative text-center" }, OA = ["placeholder", "value"], MA = {
  key: 0,
  class: "text-center"
}, TA = { class: "lux-label" }, NA = {
  key: 1,
  class: "text-center"
}, CA = { class: "lux-label" }, LA = {
  key: 2,
  class: "text-center"
}, PA = /* @__PURE__ */ L("div", { class: "fa fa-refresh fa-spin" }, null, -1), kA = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, AA = /* @__PURE__ */ fe({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Ze(), n = vt(), r = Kn(), i = tt([]), s = tt(), { remoteLayersOpen: a } = He(wt()), { setRemoteLayersOpen: o } = wt();
    let l = !1, u, f, c;
    vn(h);
    function h() {
      s.value = s.value ? Xs.updateLayers(
        s.value,
        n.layers
      ) : void 0;
    }
    oo.fetchRemoteWmsEndpoint().then((E) => {
      i.value = E.map(({ url: O, label: N }) => ({
        label: N,
        value: O
      }));
    });
    async function d(E) {
      l = !0, c = await oo.getRemoteEndpoint(E).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = E, l = !1;
    }
    async function m() {
      const E = c, O = E == null ? void 0 : E.getLayers();
      if (O && O[0]) {
        const N = r_(
          O[0],
          f
        );
        s.value = Xs.updateLayers(N, n.layers);
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
      s.value = Xs.toggleNode(
        E.id,
        s.value,
        "expanded"
      );
    }
    function b(E) {
      const { id: O, name: N } = E, M = c;
      if (E.checked === !0)
        n.removeLayers(O);
      else {
        const P = M == null ? void 0 : M.getLayerByName(N);
        if (P) {
          const I = r.initLayer(
            i_({
              id: O,
              url: ta.getProxyfiedUrl(f),
              remoteLayer: P
            })
          );
          n.addLayers(I);
        }
      }
    }
    return (E, O) => x(a) ? (k(), Ue(n_, {
      key: 0,
      title: x(e)("Add external data", { ns: "client" }),
      onClose: O[0] || (O[0] = (N) => x(o)(!1))
    }, {
      content: _i(() => {
        var N, M;
        return [
          L("div", xA, [
            ie($v, {
              class: "lux-remote-services-dropdown",
              options: i.value,
              placeholder: x(e)("Predefined wms", { ns: "client" }),
              onChange: p
            }, null, 8, ["options", "placeholder"]),
            L("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: x(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: x(f) || "",
              onChange: g
            }, null, 40, OA),
            L("button", {
              type: "button",
              class: "lux-btn",
              onClick: y
            }, oe(x(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !x(l) && x(c) ? (k(), G("div", MA, [
            L("span", TA, oe(x(e)("Description du service :", {
              ns: "client"
            })), 1),
            Kl(" " + oe((N = x(c).getServiceInfo()) == null ? void 0 : N.abstract), 1)
          ])) : F("v-if", !0),
          !x(l) && x(c) ? (k(), G("div", NA, [
            L("span", CA, oe(x(e)("Access constraints :", {
              ns: "client"
            })), 1),
            Kl(" " + oe((M = x(c).getServiceInfo()) == null ? void 0 : M.constraints), 1)
          ])) : F("v-if", !0),
          x(l) ? (k(), G("div", LA, [
            PA,
            L("span", null, oe(x(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : F("v-if", !0),
          x(l) ? F("v-if", !0) : (k(), G("div", kA, [
            s.value ? (k(), Ue(Kf, {
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
}), DA = /* @__PURE__ */ pe(AA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/remote-layers/remote-layers.vue"]]);
function IA(t, e = "fr-FR") {
  const n = new Date(t);
  return new Intl.DateTimeFormat(e).format(n);
}
const RA = { class: "font-bold" }, $A = { class: "col-span-2" }, FA = /* @__PURE__ */ fe({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (k(), G(Ge, null, [
      L("span", RA, oe(e.label), 1),
      L("span", $A, oe(e.value), 1)
    ], 64));
  }
}), _a = /* @__PURE__ */ pe(FA, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-metadata/layer-metadata-item.vue"]]);
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
class p_ {
}
class BA extends p_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMS);
    const i = oo.getWmsEndpoint(n);
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
const WA = new BA();
class qA extends p_ {
  async getMetadata(e, n, r) {
    console.assert(e === Pn.WMTS);
    const i = oo.getWmtsEndpoint(n);
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
const HA = new qA();
class zA {
  async getMetadata(e, n, r) {
    if (e === Pn.WMS)
      return WA.getMetadata(e, n, r);
    if (e === Pn.WMTS)
      return HA.getMetadata(e, n, r);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const YA = new zA();
class XA {
  constructor() {
    st(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    st(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    st(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, n) {
    const r = ss(), i = r.findBgLayerById(+e) || r.findById(+e) || r.find3dLayerById(+e);
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
const tg = new XA(), KA = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, ZA = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, JA = { class: "font-bold" }, QA = { class: "col-span-2" }, eD = ["title"], tD = ["title"], nD = {
  key: 4,
  class: "col-span-3"
}, rD = { class: "font-bold" }, iD = { class: "col-span-2" }, sD = ["href"], aD = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, oD = { class: "font-bold" }, lD = { class: "col-span-2" }, uD = { key: 0 }, cD = { key: 1 }, fD = { key: 2 }, hD = { key: 3 }, dD = { key: 4 }, mD = ["href"], pD = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, gD = { class: "font-bold" }, yD = { class: "col-span-2" }, vD = ["href"], _D = {
  key: 9,
  class: "col-span-3"
}, bD = { key: 10 }, ED = { class: "text-xl" }, SD = {
  key: 11,
  class: "col-span-3"
}, Hc = 220, wD = /* @__PURE__ */ fe({
  __name: "layer-metadata",
  setup(t) {
    const e = zh(), { metadataId: n } = He(e), { t: r, i18next: i } = Ze(), s = we(), a = we(!0);
    et(n, async (c) => {
      var h, d;
      s.value = c ? await tg.getLayerMetadata(c, i.language) : void 0, a.value = (((d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.length) || 0) < Hc;
    }), _n(() => {
      i.on("languageChanged", async () => {
        n.value && (s.value = await tg.getLayerMetadata(
          n.value,
          i.language
        ));
      });
    });
    const o = de(
      () => {
        var c, h, d;
        return a.value ? (c = s.value) == null ? void 0 : c.description : (d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.slice(0, Hc);
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
      const d = Eh("dompurify-html");
      return s.value ? (k(), Ue(n_, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: x(r)(`${s.value.title}`, { ns: "client" }),
        onClose: f
      }, {
        content: _i(() => {
          var m, p, g, y, v, b, E, O, N, M, P, I, C, R, D;
          return [
            L("div", KA, [
              s.value.name ? (k(), Ue(_a, {
                key: 0,
                label: x(r)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.serviceDescription ? (k(), Ue(_a, {
                key: 1,
                label: x(r)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.description ? (k(), G("div", ZA, [
                L("span", JA, oe(x(r)("Description")), 1),
                L("span", QA, [
                  zl(L("span", null, null, 512), [
                    [d, o.value]
                  ]),
                  a.value ? F("v-if", !0) : (k(), G("button", {
                    key: 0,
                    title: x(r)("Display full description", {
                      ns: "client"
                    }),
                    onClick: l,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, eD)),
                  a.value && (((m = o.value) == null ? void 0 : m.length) || 0) > Hc ? (k(), G("button", {
                    key: 1,
                    title: x(r)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, tD)) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.legalConstraints ? (k(), Ue(_a, {
                key: 3,
                label: x(r)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              ((p = s.value.link) == null ? void 0 : p.length) !== 0 ? (k(), G("div", nD, [
                (k(!0), G(Ge, null, kn(s.value.link, (Q) => (k(), G("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: Q
                }, [
                  L("span", rD, oe(x(r)("Url vers la resource")), 1),
                  L("span", iD, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: Q
                    }, oe(Q), 9, sD)
                  ])
                ]))), 128))
              ])) : F("v-if", !0),
              s.value.revisionDate ? (k(), Ue(_a, {
                key: 5,
                label: x(r)("Revision date"),
                value: x(IA)(s.value.revisionDate, x(i).language)
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.keyword ? (k(), Ue(_a, {
                key: 6,
                label: x(r)("Keywords"),
                value: (g = s.value.keyword) == null ? void 0 : g.join(",")
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.responsibleParty ? (k(), G("div", aD, [
                L("div", oD, oe(x(r)("Contact")), 1),
                L("div", lD, [
                  (y = s.value.responsibleParty) != null && y.organisaton ? (k(), G("p", uD, oe((v = s.value.responsibleParty) == null ? void 0 : v.organisaton), 1)) : F("v-if", !0),
                  (b = s.value.responsibleParty) != null && b.name ? (k(), G("p", cD, oe((E = s.value.responsibleParty) == null ? void 0 : E.name), 1)) : F("v-if", !0),
                  (O = s.value.responsibleParty) != null && O.unknown ? (k(), G("p", fD, oe((N = s.value.responsibleParty) == null ? void 0 : N.unknown), 1)) : F("v-if", !0),
                  (M = s.value.responsibleParty) != null && M.address ? (k(), G("p", hD, oe((P = s.value.responsibleParty) == null ? void 0 : P.address), 1)) : F("v-if", !0),
                  (I = s.value.responsibleParty) != null && I.email ? (k(), G("p", dD, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((C = s.value.responsibleParty) == null ? void 0 : C.email)
                    }, oe((R = s.value.responsibleParty) == null ? void 0 : R.email), 9, mD)
                  ])) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.metadataLink ? (k(), G("div", pD, [
                L("span", gD, oe(x(r)("Link to the metadata")), 1),
                L("span", yD, [
                  L("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, oe(x(r)("link")), 9, vD)
                ])
              ])) : F("v-if", !0),
              s.value.isError ? (k(), G("div", _D, oe(x(r)("The metadata is right now not available")), 1)) : F("v-if", !0),
              s.value.legendHtml ? (k(), G("div", bD, [
                L("h4", ED, oe(x(r)("Legend")), 1),
                zl(L("span", null, null, 512), [
                  [d, (D = s.value.legendHtml) == null ? void 0 : D.innerHTML]
                ])
              ])) : F("v-if", !0),
              s.value.hasLegend ? F("v-if", !0) : (k(), G("div", SD, oe(x(r)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : F("v-if", !0);
    };
  }
}), xD = /* @__PURE__ */ pe(wD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-metadata/layer-metadata.vue"]]), OD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class MD {
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
const TD = new MD(), ND = /* @__PURE__ */ fe({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: n } = Ze(), { setLang: r } = wt(), { lang: i } = He(wt()), s = de(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: n(l),
        value: l,
        ariaLabel: n("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = n("Changer de langue");
    TD.bootstrap();
    function o(l) {
      e.changeLanguage(l), r(l);
    }
    return (l, u) => (k(), G("div", null, [
      ie($v, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: s.value,
        placeholder: x(a),
        modelValue: x(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => Ye(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), CD = /* @__PURE__ */ pe(ND, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/nav-bars/language-selector.vue"]]);
class LD {
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
const PD = new LD(), kD = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, AD = /* @__PURE__ */ L("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ L("img", { src: OD })
], -1), DD = /* @__PURE__ */ L("div", { class: "grow text-center" }, "search", -1), ID = { class: "h-full flex" }, RD = { class: "hidden lg:inline-block" }, $D = { class: "border-l-[1px] border-stone-300 h-full" }, FD = /* @__PURE__ */ fe({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Ze(), n = wt(), { layersOpen: r, myLayersTabOpen: i, themeGridOpen: s } = He(n), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = n, u = Zt(), { theme: f } = He(u);
    et(
      f,
      (h) => {
        h && PD.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      r.value ? r.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var m, p;
      return k(), G("header", kD, [
        AD,
        DD,
        L("div", null, [
          L("ul", ID, [
            L("li", null, [
              L("button", {
                class: ke(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(m = x(f)) == null ? void 0 : m.name}`]),
                onClick: c
              }, [
                L("span", RD, oe(x(e)(`${(p = x(f)) == null ? void 0 : p.name}`)), 1)
              ], 2)
            ]),
            L("li", $D, [
              ie(CD, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), VD = /* @__PURE__ */ pe(FD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/header/header-bar.vue"]]), jD = { class: "block text-[13px] sm:text-base uppercase" }, GD = /* @__PURE__ */ fe({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (k(), G("button", {
      class: ke(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      L("span", {
        class: ke(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      L("span", jD, oe(e.label), 1)
    ], 2));
  }
}), kr = /* @__PURE__ */ pe(GD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/button-icon.vue"]]), UD = ["href"], BD = /* @__PURE__ */ fe({
  __name: "button-link",
  props: {
    label: { type: String, required: !0 },
    link: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (k(), G("a", {
      class: "h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary",
      href: `${e.link}`,
      target: "_blank"
    }, oe(n.$props.label), 9, UD));
  }
}), ri = /* @__PURE__ */ pe(BD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/button-link.vue"]]), WD = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, qD = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, HD = { class: "flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, zD = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, YD = /* @__PURE__ */ fe({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: n } = Ze(), { setLayersOpen: r } = wt(), { layersOpen: i } = He(wt());
    return (s, a) => (k(), G("footer", WD, [
      F(" left buttons "),
      L("ul", qD, [
        L("li", null, [
          ie(kr, {
            label: x(e)("Layers", { ns: "client" }),
            icon: "layers",
            active: x(i),
            onClick: a[0] || (a[0] = () => x(r)(!x(i)))
          }, null, 8, ["label", "active"])
        ]),
        F(`TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      `),
        L("li", null, [
          ie(kr, {
            class: "text-gray-300",
            label: x(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ie(kr, {
            class: "text-gray-300",
            label: x(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ie(kr, {
            class: "text-gray-300",
            label: x(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ie(kr, {
            class: "text-gray-300",
            label: x(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      F(" center buttons "),
      L("div", HD, [
        ie(kr, {
          class: "text-gray-300",
          label: x(e)("Dessin", { ns: "client" }),
          icon: "draw"
        }, null, 8, ["label"]),
        ie(kr, {
          class: "text-gray-300 hidden sm:block",
          label: x(e)("Mesurer", { ns: "client" }),
          icon: "measure"
        }, null, 8, ["label"]),
        ie(kr, {
          class: "text-gray-300 hidden sm:block",
          label: x(e)("Imprimer", { ns: "client" }),
          icon: "print"
        }, null, 8, ["label"]),
        ie(kr, {
          class: "text-gray-300",
          label: x(e)("Partager", { ns: "client" }),
          icon: "share"
        }, null, 8, ["label"])
      ]),
      F(" right buttons "),
      L("div", zD, [
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("What's new", { ns: "client" }),
          link: `https://geoportail.lu/${x(n).language}/questions/whats-new/`
        }, null, 8, ["label", "link"]),
        F("TODO get geonetworkBaseUrl from config"),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Geocatalogue", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        F("TODO handle feedback links (for different portals?)"),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Feedback", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("A Propos", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(n).language}/propos/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Aide", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(n).language}/documentation/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Contact", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(n).language}/propos/contactez-nous/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "text-gray-500",
          label: x(e)("Legalites", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(n).language}/propos/mentions-legales/`
        }, null, 8, ["label", "link"]),
        ie(ri, {
          class: "text-gray-500",
          label: x(e)("ACT", { ns: "client" }),
          link: "http://www.act.public.lu/"
        }, null, 8, ["label", "link"])
      ])
    ]));
  }
}), XD = /* @__PURE__ */ pe(YD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/footer/footer-bar.vue"]]), KD = { class: "flex flex-row flex-wrap pl-2.5" }, ZD = ["onClick"], JD = { class: "text-2xl absolute top-5" }, QD = /* @__PURE__ */ fe({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const { t: e } = Ze(), n = t;
    return (r, i) => (k(), G("div", KD, [
      (k(!0), G(Ge, null, kn(n.themes, (s) => (k(), G("button", {
        class: ke(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => r.$emit("setTheme", s.name)
      }, [
        L("div", JD, oe(x(e)(`${s.name}`)), 1),
        L("div", {
          class: ke(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, ZD))), 128))
    ]));
  }
}), eI = /* @__PURE__ */ pe(QD, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-grid.vue"]]), tI = ["aria-expanded"], nI = { class: "py-0.5" }, rI = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, iI = { class: "py-[3px]" }, sI = { class: "flex flex-row flex-wrap ml-1 w-12" }, aI = /* @__PURE__ */ fe({
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
      return k(), G("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": n.isOpen
      }, [
        L("span", nI, oe(x(e)("Theme")) + ": " + oe(x(e)(`${(a = n.currentTheme) == null ? void 0 : a.name}`)), 1),
        L("span", rI, [
          L("span", iI, oe(x(e)("Changer")), 1),
          L("span", sI, [
            (k(!0), G(Ge, null, kn(r.value, (o) => (k(), G("div", {
              class: ke(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, tI);
    };
  }
}), oI = /* @__PURE__ */ pe(aI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-selector-button.vue"]]), lI = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, uI = /* @__PURE__ */ fe({
  __name: "theme-selector",
  setup(t) {
    const e = wt(), { setThemeGridOpen: n } = e, { themeGridOpen: r } = He(e), i = Zt(), s = ss(), { theme: a, themes: o } = He(i), l = de(
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
    return (c, h) => (k(), G(Ge, null, [
      ie(oI, {
        onClick: u,
        themes: l.value,
        currentTheme: x(a),
        isOpen: x(r)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      x(r) ? (k(), G("div", lI, [
        ie(eI, {
          onSetTheme: f,
          themes: l.value
        }, null, 8, ["themes"])
      ])) : F("v-if", !0)
    ], 64));
  }
}), cI = /* @__PURE__ */ pe(uI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/theme-selector/theme-selector.vue"]]);
function Jf(t, e = 0) {
  const { name: n, id: r, children: i, metadata: s } = t;
  return {
    name: n,
    id: r,
    depth: e,
    children: i == null ? void 0 : i.map((a) => Jf(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const fI = {
  key: 0,
  class: "mb-7"
}, hI = /* @__PURE__ */ fe({
  __name: "catalog-tree",
  setup(t) {
    const e = vt(), n = Zt(), r = Kn(), i = tt(), s = tt(), a = de(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = He(n);
    vn(l);
    function l() {
      var c;
      if (n.theme && e.layers) {
        const h = i.value && i.value.id === ((c = n.theme) == null ? void 0 : c.id) ? i.value : Jf(n.theme);
        i.value = Xs.updateLayers(
          h,
          e.layers
        );
      }
    }
    vn(() => {
      if (o.value) {
        const c = s.value ? s.value : Jf(o.value);
        s.value = Xs.updateLayers(
          c,
          e.layers3d
        );
      }
    });
    function u(c, h) {
      const d = h ? s : i;
      d.value = Xs.toggleNode(
        c.id,
        d.value,
        "expanded"
      );
    }
    function f(c, h) {
      r.toggleLayer(+c.id, !c.checked, h);
    }
    return (c, h) => (k(), G("div", null, [
      F(" 3D layers catalog, only displayed when 3D is active "),
      s.value && x(e).is3dActive ? (k(), G("div", fI, [
        (k(), Ue(Kf, {
          node: s.value,
          key: s.value.id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : F("v-if", !0),
      F(" Main catalog, displays by default and 3D terrain active "),
      i.value && a.value ? (k(), Ue(Kf, {
        node: i.value,
        key: i.value.id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : F("v-if", !0)
    ]));
  }
}), dI = /* @__PURE__ */ pe(hI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/catalog/catalog-tree.vue"]]), mI = /* @__PURE__ */ fe({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = He(wt());
    return (n, r) => (k(), G(Ge, null, [
      ie(cI),
      x(e) === !1 ? (k(), Ue(dI, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : F("v-if", !0)
    ], 64));
  }
}), pI = /* @__PURE__ */ pe(mI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ng(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ng(Object(n), !0).forEach(function(r) {
      gI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ng(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Rl(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rl = function(e) {
    return typeof e;
  } : Rl = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rl(t);
}
function gI(t, e, n) {
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
function yI(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function vI(t, e) {
  if (t == null)
    return {};
  var n = yI(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
var _I = "1.15.2";
function jr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Kr = jr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ko = jr(/Edge/i), rg = jr(/firefox/i), Wa = jr(/safari/i) && !jr(/chrome/i) && !jr(/android/i), g_ = jr(/iP(ad|od|hone)/i), y_ = jr(/chrome/i) && jr(/android/i), v_ = {
  capture: !1,
  passive: !1
};
function je(t, e, n) {
  t.addEventListener(e, n, !Kr && v_);
}
function Ie(t, e, n) {
  t.removeEventListener(e, n, !Kr && v_);
}
function wu(t, e) {
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
function bI(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Bn(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && wu(t, e) : wu(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = bI(t));
  }
  return null;
}
var ig = /\s+/g;
function fn(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(ig, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(ig, " ");
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
function Ks(t, e) {
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
function __(t, e, n) {
  if (t) {
    var r = t.getElementsByTagName(e), i = 0, s = r.length;
    if (n)
      for (; i < s; i++)
        n(r[i], i);
    return r;
  }
  return [];
}
function vr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Et(t, e, n, r, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var s, a, o, l, u, f, c;
    if (t !== window && t.parentNode && t !== vr() ? (s = t.getBoundingClientRect(), a = s.top, o = s.left, l = s.bottom, u = s.right, f = s.height, c = s.width) : (a = 0, o = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, c = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !Kr))
      do
        if (i && i.getBoundingClientRect && (ye(i, "transform") !== "none" || n && ye(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          a -= h.top + parseInt(ye(i, "border-top-width")), o -= h.left + parseInt(ye(i, "border-left-width")), l = a + s.height, u = o + s.width;
          break;
        }
      while (i = i.parentNode);
    if (r && t !== window) {
      var d = Ks(i || t), m = d && d.a, p = d && d.d;
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
function sg(t, e, n) {
  for (var r = gi(t, !0), i = Et(t)[e]; r; ) {
    var s = Et(r)[n], a = void 0;
    if (n === "top" || n === "left" ? a = i >= s : a = i <= s, !a)
      return r;
    if (r === vr())
      break;
    r = gi(r, !1);
  }
  return !1;
}
function na(t, e, n, r) {
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
function ed(t, e) {
  for (var n = t.lastElementChild; n && (n === ge.ghost || ye(n, "display") === "none" || e && !wu(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function On(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ge.clone && (!e || wu(t, e)) && n++;
  return n;
}
function ag(t) {
  var e = 0, n = 0, r = vr();
  if (t)
    do {
      var i = Ks(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, n += t.scrollTop * a;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function EI(t, e) {
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
    return vr();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = ye(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return vr();
        if (r || e)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return vr();
}
function SI(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function zc(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var qa;
function b_(t, e) {
  return function() {
    if (!qa) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), qa = setTimeout(function() {
        qa = void 0;
      }, e);
    }
  };
}
function wI() {
  clearTimeout(qa), qa = void 0;
}
function E_(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function S_(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function w_(t, e, n) {
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
function xI() {
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
            var s = wr({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = Ks(i, !0);
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
      t.splice(EI(t, {
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
        var l = 0, u = o.target, f = u.fromRect, c = Et(u), h = u.prevFromRect, d = u.prevToRect, m = o.rect, p = Ks(u, !0);
        p && (c.top -= p.f, c.left -= p.e), u.toRect = c, u.thisAnimationDuration && zc(h, c) && !zc(f, c) && (m.top - c.top) / (m.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = MI(m, h, d, i.options)), zc(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, m, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(e), s ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, a) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, i, s, a) {
      if (a) {
        ye(r, "transition", ""), ye(r, "transform", "");
        var o = Ks(this.el), l = o && o.a, u = o && o.d, f = (i.left - s.left) / (l || 1), c = (i.top - s.top) / (u || 1);
        r.animatingX = !!f, r.animatingY = !!c, ye(r, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = OI(r), ye(r, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ye(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          ye(r, "transition", ""), ye(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, a);
      }
    }
  };
}
function OI(t) {
  return t.offsetWidth;
}
function MI(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var Ms = [], Yc = {
  initializeByDefault: !0
}, Ao = {
  mount: function(e) {
    for (var n in Yc)
      Yc.hasOwnProperty(n) && !(n in e) && (e[n] = Yc[n]);
    Ms.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Ms.push(e);
  },
  pluginEvent: function(e, n, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var s = e + "Global";
    Ms.forEach(function(a) {
      !n[a.pluginName] || (n[a.pluginName][s] && n[a.pluginName][s](wr({
        sortable: n
      }, r)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](wr({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, i) {
    Ms.forEach(function(o) {
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
    return Ms.forEach(function(i) {
      typeof i.eventProperties == "function" && Wr(r, i.eventProperties.call(n[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var i;
    return Ms.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[n] == "function" && (i = s.optionListeners[n].call(e[s.pluginName], r));
    }), i;
  }
};
function TI(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, m = t.extraEventProperties;
  if (e = e || n && n[pn], !!e) {
    var p, g = e.options, y = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Kr && !ko ? p = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (p = document.createEvent("Event"), p.initEvent(r, !0, !0)), p.to = a || n, p.from = o || n, p.item = i || n, p.clone = s, p.oldIndex = l, p.newIndex = u, p.oldDraggableIndex = f, p.newDraggableIndex = c, p.originalEvent = h, p.pullMode = d ? d.lastPutMode : void 0;
    var v = wr(wr({}, m), Ao.getEventProperties(r, e));
    for (var b in v)
      p[b] = v[b];
    n && n.dispatchEvent(p), g[y] && g[y].call(e, p);
  }
}
var NI = ["evt"], sn = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, s = vI(r, NI);
  Ao.pluginEvent.bind(ge)(e, n, wr({
    dragEl: J,
    parentEl: ct,
    ghostEl: Ee,
    rootEl: nt,
    nextEl: Yi,
    lastDownEl: $l,
    cloneEl: at,
    cloneHidden: di,
    dragStarted: Na,
    putSortable: kt,
    activeSortable: ge.active,
    originalEvent: i,
    oldIndex: $s,
    oldDraggableIndex: Ha,
    newIndex: hn,
    newDraggableIndex: ui,
    hideGhostForTarget: T_,
    unhideGhostForTarget: N_,
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
  TI(wr({
    putSortable: kt,
    cloneEl: at,
    targetEl: J,
    rootEl: nt,
    oldIndex: $s,
    oldDraggableIndex: Ha,
    newIndex: hn,
    newDraggableIndex: ui
  }, t));
}
var J, ct, Ee, nt, Yi, $l, at, di, $s, hn, Ha, ui, cl, kt, Ls = !1, xu = !1, Ou = [], Wi, jn, Xc, Kc, og, lg, Na, Ts, za, Ya = !1, fl = !1, Fl, jt, Zc = [], Qf = !1, Mu = [], rc = typeof document < "u", hl = g_, ug = ko || Kr ? "cssFloat" : "float", CI = rc && !y_ && !g_ && "draggable" in document.createElement("div"), x_ = function() {
  if (!!rc) {
    if (Kr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), O_ = function(e, n) {
  var r = ye(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = na(e, 0, n), a = na(e, 1, n), o = s && ye(s), l = a && ye(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Et(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(a).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && r[ug] === "none" || a && r[ug] === "none" && u + f > i) ? "vertical" : "horizontal";
}, LI = function(e, n, r) {
  var i = r ? e.left : e.top, s = r ? e.right : e.bottom, a = r ? e.width : e.height, o = r ? n.left : n.top, l = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, PI = function(e, n) {
  var r;
  return Ou.some(function(i) {
    var s = i[pn].options.emptyInsertThreshold;
    if (!(!s || ed(i))) {
      var a = Et(i), o = e >= a.left - s && e <= a.right + s, l = n >= a.top - s && n <= a.bottom + s;
      if (o && l)
        return r = i;
    }
  }), r;
}, M_ = function(e) {
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
  (!i || Rl(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = n(i.pull, !0), r.checkPut = n(i.put), r.revertClone = i.revertClone, e.group = r;
}, T_ = function() {
  !x_ && Ee && ye(Ee, "display", "none");
}, N_ = function() {
  !x_ && Ee && ye(Ee, "display", "");
};
rc && !y_ && document.addEventListener("click", function(t) {
  if (xu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), xu = !1, !1;
}, !0);
var qi = function(e) {
  if (J) {
    e = e.touches ? e.touches[0] : e;
    var n = PI(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[pn]._onDragOver(r);
    }
  }
}, kI = function(e) {
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
      return O_(t, this.options);
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
    supportPointer: ge.supportPointer !== !1 && "PointerEvent" in window && !Wa,
    emptyInsertThreshold: 5
  };
  Ao.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  M_(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : CI, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? je(t, "pointerdown", this._onTapStart) : (je(t, "mousedown", this._onTapStart), je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (je(t, "dragover", this), je(t, "dragenter", this)), Ou.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Wr(this, xI());
}
ge.prototype = {
  constructor: ge,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Ts = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, J) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var n = this, r = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (jI(r), !J && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Wa && l && l.tagName.toUpperCase() === "SELECT") && (l = Bn(l, i.draggable, r, !1), !(l && l.animated) && $l !== l)) {
        if ($s = On(l), Ha = On(l, i.draggable), typeof f == "function") {
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
      if (nt = s, J = r, ct = J.parentNode, Yi = J.nextSibling, $l = r, cl = a.group, ge.dragged = J, Wi = {
        target: J,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, og = Wi.clientX - u.left, lg = Wi.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, J.style["will-change"] = "all", l = function() {
        if (sn("delayEnded", i, {
          evt: e
        }), ge.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !rg && i.nativeDraggable && (J.draggable = !0), i._triggerDragStart(e, n), Xt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), fn(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        __(J, f.trim(), Jc);
      }), je(o, "dragover", qi), je(o, "mousemove", qi), je(o, "touchmove", qi), je(o, "mouseup", i._onDrop), je(o, "touchend", i._onDrop), je(o, "touchcancel", i._onDrop), rg && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), sn("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ko || Kr))) {
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
    J && Jc(J), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._disableDelayedDrag), Ie(e, "touchend", this._disableDelayedDrag), Ie(e, "touchcancel", this._disableDelayedDrag), Ie(e, "mousemove", this._delayedDragTouchMoveHandler), Ie(e, "touchmove", this._delayedDragTouchMoveHandler), Ie(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? je(document, "pointermove", this._onTouchMove) : n ? je(document, "touchmove", this._onTouchMove) : je(document, "mousemove", this._onTouchMove) : (je(J, "dragend", this), je(nt, "dragstart", this._onDragStart));
    try {
      document.selection ? Vl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Ls = !1, nt && J) {
      sn("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && je(document, "dragover", kI);
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
    if (jn) {
      this._lastX = jn.clientX, this._lastY = jn.clientY, T_();
      for (var e = document.elementFromPoint(jn.clientX, jn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(jn.clientX, jn.clientY), e !== n); )
        n = e;
      if (J.parentNode[pn]._isOutsideThisEl(e), n)
        do {
          if (n[pn]) {
            var r = void 0;
            if (r = n[pn]._onDragOver({
              clientX: jn.clientX,
              clientY: jn.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      N_();
    }
  },
  _onTouchMove: function(e) {
    if (Wi) {
      var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Ee && Ks(Ee, !0), o = Ee && a && a.a, l = Ee && a && a.d, u = hl && jt && ag(jt), f = (s.clientX - Wi.clientX + i.x) / (o || 1) + (u ? u[0] - Zc[0] : 0) / (o || 1), c = (s.clientY - Wi.clientY + i.y) / (l || 1) + (u ? u[1] - Zc[1] : 0) / (l || 1);
      if (!ge.active && !Ls) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (Ee) {
        a ? (a.e += f - (Xc || 0), a.f += c - (Kc || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ye(Ee, "webkitTransform", h), ye(Ee, "mozTransform", h), ye(Ee, "msTransform", h), ye(Ee, "transform", h), Xc = f, Kc = c, jn = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ee) {
      var e = this.options.fallbackOnBody ? document.body : nt, n = Et(J, !0, hl, !0, e), r = this.options;
      if (hl) {
        for (jt = e; ye(jt, "position") === "static" && ye(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = vr()), n.top += jt.scrollTop, n.left += jt.scrollLeft) : jt = vr(), Zc = ag(jt);
      }
      Ee = J.cloneNode(!0), fn(Ee, r.ghostClass, !1), fn(Ee, r.fallbackClass, !0), fn(Ee, r.dragClass, !0), ye(Ee, "transition", ""), ye(Ee, "transform", ""), ye(Ee, "box-sizing", "border-box"), ye(Ee, "margin", 0), ye(Ee, "top", n.top), ye(Ee, "left", n.left), ye(Ee, "width", n.width), ye(Ee, "height", n.height), ye(Ee, "opacity", "0.8"), ye(Ee, "position", hl ? "absolute" : "fixed"), ye(Ee, "zIndex", "100000"), ye(Ee, "pointerEvents", "none"), ge.ghost = Ee, e.appendChild(Ee), ye(Ee, "transform-origin", og / parseInt(Ee.style.width) * 100 + "% " + lg / parseInt(Ee.style.height) * 100 + "%");
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
    sn("setupClone", this), ge.eventCanceled || (at = S_(J), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), fn(at, this.options.chosenClass, !1), ge.clone = at), r.cloneId = Vl(function() {
      sn("clone", r), !ge.eventCanceled && (r.options.removeCloneOnHide || nt.insertBefore(at, J), r._hideClone(), Xt({
        sortable: r,
        name: "clone"
      }));
    }), !n && fn(J, s.dragClass, !0), n ? (xu = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (Ie(document, "mouseup", r._onDrop), Ie(document, "touchend", r._onDrop), Ie(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(r, i, J)), je(document, "drop", r), ye(J, "transform", "translateZ(0)")), Ls = !0, r._dragStartId = Vl(r._dragStarted.bind(r, n, e)), je(document, "selectstart", r), Na = !0, Wa && ye(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var n = this.el, r = e.target, i, s, a, o = this.options, l = o.group, u = ge.active, f = cl === l, c = o.sort, h = kt || u, d, m = this, p = !1;
    if (Qf)
      return;
    function g(K, Ce) {
      sn(K, m, wr({
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
          return dl(nt, n, J, i, dt, Et(dt), e, Rt);
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
      }), K && (f ? u._hideClone() : u._showClone(m), m !== h && (fn(J, kt ? kt.options.ghostClass : u.options.ghostClass, !1), fn(J, o.ghostClass, !0)), kt !== m && m !== ge.active ? kt = m : m === ge.active && kt && (kt = null), h === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        g("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (r === J && !J.animated || r === n && !r.animated) && (Ts = null), !o.dragoverBubble && !e.rootEl && r !== document && (J.parentNode[pn]._isOutsideThisEl(e.target), !K && qi(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), p = !0;
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
    if (xu = !1, u && !o.disabled && (f ? c || (a = ct !== nt) : kt === this || (this.lastPutMode = cl.checkPull(this, u, J, e)) && l.checkPut(this, u, J, e))) {
      if (d = this._getDirection(e, r) === "vertical", i = Et(J), g("dragOverValid"), ge.eventCanceled)
        return p;
      if (a)
        return ct = nt, y(), this._hideClone(), g("revert"), ge.eventCanceled || (Yi ? nt.insertBefore(J, Yi) : nt.appendChild(J)), v(!0);
      var E = ed(n, o.draggable);
      if (!E || RI(e, d, this) && !E.animated) {
        if (E === J)
          return v(!1);
        if (E && n === e.target && (r = E), r && (s = Et(r)), dl(nt, n, J, i, r, s, e, !!r) !== !1)
          return y(), E && E.nextSibling ? n.insertBefore(J, E.nextSibling) : n.appendChild(J), ct = n, b(), v(!0);
      } else if (E && II(e, d, this)) {
        var O = na(n, 0, o, !0);
        if (O === J)
          return v(!1);
        if (r = O, s = Et(r), dl(nt, n, J, i, r, s, e, !1) !== !1)
          return y(), n.insertBefore(J, O), ct = n, b(), v(!0);
      } else if (r.parentNode === n) {
        s = Et(r);
        var N = 0, M, P = J.parentNode !== n, I = !LI(J.animated && J.toRect || i, r.animated && r.toRect || s, d), C = d ? "top" : "left", R = sg(r, "top", "top") || sg(J, "top", "top"), D = R ? R.scrollTop : void 0;
        Ts !== r && (M = s[C], Ya = !1, fl = !I && o.invertSwap || P), N = $I(e, r, s, d, I ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, fl, Ts === r);
        var Q;
        if (N !== 0) {
          var ve = On(J);
          do
            ve -= N, Q = ct.children[ve];
          while (Q && (ye(Q, "display") === "none" || Q === Ee));
        }
        if (N === 0 || Q === r)
          return v(!1);
        Ts = r, za = N;
        var T = r.nextElementSibling, $ = !1;
        $ = N === 1;
        var z = dl(nt, n, J, i, r, s, e, $);
        if (z !== !1)
          return (z === 1 || z === -1) && ($ = z === 1), Qf = !0, setTimeout(DI, 30), y(), $ && !T ? n.appendChild(J) : r.parentNode.insertBefore(J, $ ? T : r), R && E_(R, 0, D - R.scrollTop), ct = J.parentNode, M !== void 0 && !fl && (Fl = Math.abs(M - Et(r)[C])), b(), v(!0);
      }
      if (n.contains(J))
        return v(!1);
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
    if (hn = On(J), ui = On(J, r.draggable), sn("drop", this, {
      evt: e
    }), ct = J && J.parentNode, hn = On(J), ui = On(J, r.draggable), ge.eventCanceled) {
      this._nulling();
      return;
    }
    Ls = !1, fl = !1, Ya = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), eh(this.cloneId), eh(this._dragStartId), this.nativeDraggable && (Ie(document, "drop", this), Ie(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Wa && ye(document.body, "user-select", ""), ye(J, "transform", ""), e && (Na && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), (nt === ct || kt && kt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), J && (this.nativeDraggable && Ie(J, "dragend", this), Jc(J), J.style["will-change"] = "", Na && !Ls && fn(J, kt ? kt.options.ghostClass : this.options.ghostClass, !1), fn(J, this.options.chosenClass, !1), Xt({
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
    })), kt && kt.save()) : hn !== $s && hn >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ge.active && ((hn == null || hn === -1) && (hn = $s, ui = Ha), Xt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), nt = J = ct = Ee = Yi = at = $l = di = Wi = jn = Na = hn = ui = $s = Ha = Ts = za = kt = cl = ge.dragged = ge.ghost = ge.clone = ge.active = null, Mu.forEach(function(e) {
      e.checked = !0;
    }), Mu.length = Xc = Kc = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        J && (this._onDragOver(e), AI(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], n, r = this.el.children, i = 0, s = r.length, a = this.options; i < s; i++)
      n = r[i], Bn(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || VI(n));
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
    var i = Ao.modifyOption(this, e, n);
    typeof i < "u" ? r[e] = i : r[e] = n, e === "group" && M_(r);
  },
  destroy: function() {
    sn("destroy", this);
    var e = this.el;
    e[pn] = null, Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart), Ie(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ou.splice(Ou.indexOf(this.el), 1), this.el = e = null;
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
      J.parentNode == nt && !this.options.group.revertClone ? nt.insertBefore(at, J) : Yi ? nt.insertBefore(at, Yi) : nt.appendChild(at), this.options.group.revertClone && this.animate(J, at), ye(at, "display", ""), di = !1;
    }
  }
};
function AI(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function dl(t, e, n, r, i, s, a, o) {
  var l, u = t[pn], f = u.options.onMove, c;
  return window.CustomEvent && !Kr && !ko ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = i || e, l.relatedRect = s || Et(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function Jc(t) {
  t.draggable = !1;
}
function DI() {
  Qf = !1;
}
function II(t, e, n) {
  var r = Et(na(n.el, 0, n.options, !0)), i = w_(n.el, n.options, Ee), s = 10;
  return e ? t.clientX < i.left - s || t.clientY < r.top && t.clientX < r.right : t.clientY < i.top - s || t.clientY < r.bottom && t.clientX < r.left;
}
function RI(t, e, n) {
  var r = Et(ed(n.el, n.options.draggable)), i = w_(n.el, n.options, Ee), s = 10;
  return e ? t.clientX > i.right + s || t.clientY > r.bottom && t.clientX > r.left : t.clientY > i.bottom + s || t.clientX > r.right && t.clientY > r.top;
}
function $I(t, e, n, r, i, s, a, o) {
  var l = r ? t.clientY : t.clientX, u = r ? n.height : n.width, f = r ? n.top : n.left, c = r ? n.bottom : n.right, h = !1;
  if (!a) {
    if (o && Fl < u * i) {
      if (!Ya && (za === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (Ya = !0), Ya)
        h = !0;
      else if (za === 1 ? l < f + Fl : l > c - Fl)
        return -za;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return FI(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function FI(t) {
  return On(J) < On(t) ? 1 : -1;
}
function VI(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function jI(t) {
  Mu.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && Mu.push(r);
  }
}
function Vl(t) {
  return setTimeout(t, 0);
}
function eh(t) {
  return clearTimeout(t);
}
rc && je(document, "touchmove", function(t) {
  (ge.active || Ls) && t.cancelable && t.preventDefault();
});
ge.utils = {
  on: je,
  off: Ie,
  css: ye,
  find: __,
  is: function(e, n) {
    return !!Bn(e, n, e, !1);
  },
  extend: SI,
  throttle: b_,
  closest: Bn,
  toggleClass: fn,
  clone: S_,
  index: On,
  nextTick: Vl,
  cancelNextTick: eh,
  detectDirection: O_,
  getChild: na
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
    r.utils && (ge.utils = wr(wr({}, ge.utils), r.utils)), Ao.mount(r);
  });
};
ge.create = function(t, e) {
  return new ge(t, e);
};
ge.version = _I;
var _t = [], Ca, th, nh = !1, Qc, ef, Tu, La;
function GI() {
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
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : (Ie(document, "pointermove", this._handleFallbackAutoScroll), Ie(document, "touchmove", this._handleFallbackAutoScroll), Ie(document, "mousemove", this._handleFallbackAutoScroll)), cg(), jl(), wI();
    },
    nulling: function() {
      Tu = th = Ca = nh = La = Qc = ef = null, _t.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var i = this, s = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, o = document.elementFromPoint(s, a);
      if (Tu = n, r || this.options.forceAutoScrollFallback || ko || Kr || Wa) {
        tf(n, this.options, o, r);
        var l = gi(o, !0);
        nh && (!La || s !== Qc || a !== ef) && (La && cg(), La = setInterval(function() {
          var u = gi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, jl()), tf(n, i.options, u, r);
        }, 10), Qc = s, ef = a);
      } else {
        if (!this.options.bubbleScroll || gi(o, !0) === vr()) {
          jl();
          return;
        }
        tf(n, this.options, gi(o, !1), !1);
      }
    }
  }, Wr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function jl() {
  _t.forEach(function(t) {
    clearInterval(t.pid);
  }), _t = [];
}
function cg() {
  clearInterval(La);
}
var tf = b_(function(t, e, n, r) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = vr(), u = !1, f;
    th !== n && (th = n, jl(), Ca = e.scroll, f = e.scrollFn, Ca === !0 && (Ca = gi(n, !0)));
    var c = 0, h = Ca;
    do {
      var d = h, m = Et(d), p = m.top, g = m.bottom, y = m.left, v = m.right, b = m.width, E = m.height, O = void 0, N = void 0, M = d.scrollWidth, P = d.scrollHeight, I = ye(d), C = d.scrollLeft, R = d.scrollTop;
      d === l ? (O = b < M && (I.overflowX === "auto" || I.overflowX === "scroll" || I.overflowX === "visible"), N = E < P && (I.overflowY === "auto" || I.overflowY === "scroll" || I.overflowY === "visible")) : (O = b < M && (I.overflowX === "auto" || I.overflowX === "scroll"), N = E < P && (I.overflowY === "auto" || I.overflowY === "scroll"));
      var D = O && (Math.abs(v - i) <= a && C + b < M) - (Math.abs(y - i) <= a && !!C), Q = N && (Math.abs(g - s) <= a && R + E < P) - (Math.abs(p - s) <= a && !!R);
      if (!_t[c])
        for (var ve = 0; ve <= c; ve++)
          _t[ve] || (_t[ve] = {});
      (_t[c].vx != D || _t[c].vy != Q || _t[c].el !== d) && (_t[c].el = d, _t[c].vx = D, _t[c].vy = Q, clearInterval(_t[c].pid), (D != 0 || Q != 0) && (u = !0, _t[c].pid = setInterval(function() {
        r && this.layer === 0 && ge.active._onTouchMove(Tu);
        var T = _t[this.layer].vy ? _t[this.layer].vy * o : 0, $ = _t[this.layer].vx ? _t[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ge.dragged.parentNode[pn], $, T, t, Tu, _t[this.layer].el) !== "continue" || E_(_t[this.layer].el, $, T);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = gi(h, !1)));
    nh = u;
  }
}, 30), C_ = function(e) {
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
function td() {
}
td.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = na(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: C_
};
Wr(td, {
  pluginName: "revertOnSpill"
});
function nd() {
}
nd.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: C_
};
Wr(nd, {
  pluginName: "removeOnSpill"
});
ge.mount(new GI());
ge.mount(nd, td);
const L_ = 0.5, UI = !1, Nu = ms(
  "slider",
  () => {
    const t = vt(), e = we(L_), n = we(UI), r = de(
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
function P_(t, e) {
  const { t: n } = Ze();
  function r() {
    e == null || e.emit("clickInfo", t);
  }
  return {
    t: n,
    onClickInfo: r
  };
}
const BI = { class: "lux-layer-manager-item mt-2.5" }, WI = ["title"], qI = { class: "flex-1 text-left cursor-default" }, HI = ["aria-label", "title"], zI = /* @__PURE__ */ fe({
  __name: "layer-item-background",
  props: {
    showEditButton: { type: Boolean, required: !0 },
    layer: { type: Object, required: !0 }
  },
  emits: ["clickEdit", "clickInfo"],
  setup(t, { emit: e }) {
    const n = t, r = e, { t: i, onClickInfo: s } = P_(n.layer, { emit: r }), a = de(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o()
      })
    );
    function o() {
      return i(n.layer.name, { ns: "client" });
    }
    return (l, u) => (k(), G("div", BI, [
      L("button", {
        class: "fa fa-info w-3",
        title: a.value,
        onClick: u[0] || (u[0] = (...f) => x(s) && x(s)(...f))
      }, null, 8, WI),
      L("span", qI, oe(o()), 1),
      l.showEditButton ? (k(), G("button", {
        key: 0,
        class: "fa fa-pencil",
        "aria-label": x(i)("Open editor panel", { ns: "client" }),
        title: x(i)("Open editor panel", { ns: "client" }),
        onClick: u[1] || (u[1] = (f) => l.$emit("clickEdit"))
      }, null, 8, HI)) : F("v-if", !0)
    ]));
  }
}), YI = /* @__PURE__ */ pe(zI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item-background.vue"]]), XI = ["id"], KI = ["aria-checked", "title"], ZI = ["id", "value", "aria-label"], JI = ["aria-checked", "aria-label"], QI = /* @__PURE__ */ fe({
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
    const n = t, r = e, { t: i } = Ze(), s = Kn(), a = de(
      () => i(s.getLayerCurrentLabel(n.layer), { ns: "client" })
    ), o = tt(
      ((m = (d = n.layer) == null ? void 0 : d.opacity) != null ? m : 1) * 100
    ), l = tt(
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
    return (y, v) => (k(), G("div", {
      class: ke(["lux-layer-manager-item-content", y.isOpen ? "h-6" : "h-0"]),
      id: `layer-manager-item-content-${y.layer.id}`
    }, [
      L("button", {
        class: ke(["w-5 fa-solid", o.value === 0 ? "fa-eye-slash" : "fa-eye"]),
        role: "switch",
        "aria-checked": o.value === 0,
        title: x(i)("Toggle layer opacity for {{layerName}}", {
          layerName: a.value
        }),
        onClick: u
      }, null, 10, KI),
      L("input", {
        id: `${y.layer.id}-steps-range`,
        type: "range",
        min: "0",
        max: "100",
        value: o.value,
        step: "25",
        onChange: f,
        class: "m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer",
        "aria-label": x(i)("Change opacity for {{ layerName }}", { layerName: a.value })
      }, null, 40, ZI),
      y.displayLayerComparatorOpen ? (k(), G("button", {
        key: 0,
        role: "switch",
        class: ke(["fa ml-auto text-sm cursor-pointer", y.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": y.isLayerComparatorOpen,
        "aria-label": x(i)("Toggle layer comparator for {{ layerName }}", {
          layerName: a.value
        }),
        onClick: c
      }, null, 10, JI)) : F("v-if", !0)
    ], 10, XI));
  }
}), e3 = /* @__PURE__ */ pe(QI, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), t3 = ["min", "max", "value"], n3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = de(() => Rc(n.minDateAllowed)), s = de(() => Rc(n.maxDateAllowed));
    function a(o) {
      r("change", o.target.value);
    }
    return (o, l) => (k(), G("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: i.value,
      max: s.value,
      value: o.dateValue ? x(Rc)(o.dateValue) : "",
      onChange: a
    }, null, 40, t3));
  }
}), rh = /* @__PURE__ */ pe(n3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), r3 = { class: "lux-time-slider w-full" }, i3 = ["for"], s3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const { t: e } = Ze(), n = t, r = tt(
      n.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return k(), G("div", r3, [
        L("div", null, [
          L("label", {
            for: `${i.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(x(e)("Date:")), 9, i3),
          ie(rh, {
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
}), a3 = /* @__PURE__ */ pe(s3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), o3 = { class: "lux-time-slider w-full" }, l3 = ["for"], u3 = ["for"], c3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e, s = tt(
      r.layer.currentTimeMinValue
    ), a = tt(
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
      return k(), G("div", o3, [
        F(" Date START datepicker input "),
        L("div", null, [
          L("label", {
            for: `${u.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, oe(x(n)("From:")), 9, l3),
          ie(rh, {
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
          }, oe(x(n)("To:")), 9, u3),
          ie(rh, {
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
}), f3 = /* @__PURE__ */ pe(c3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), h3 = ["onKeydown", "aria-label", "title"], d3 = /* @__PURE__ */ fe({
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
    }), et(
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
      var O, N;
      const E = (O = s.value) != null && O.offsetWidth ? (b.clientX - l.value * 2) * 100 / ((N = s.value) == null ? void 0 : N.offsetWidth) : 0;
      return Math.round(Math.max(Math.min(E, n.maxLimit), n.minLimit));
    }
    return (b, E) => (k(), G("div", {
      class: "w-full",
      role: "slider",
      ref_key: "elRefTrack",
      ref: s
    }, [
      L("button", {
        class: ke(["lux-slidebar-thumb", i.value ? "dragging" : ""]),
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
      }, null, 46, h3)
    ], 512));
  }
}), fg = /* @__PURE__ */ pe(d3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range-thumb.vue"]]), m3 = /* @__PURE__ */ fe({
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
    return (f, c) => (k(), G("div", {
      ref_key: "elRefFullTrack",
      ref: i,
      class: "lux-slidebar-track"
    }, [
      f.selectedMaxValue !== void 0 ? (k(), G("div", {
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
}), p3 = /* @__PURE__ */ pe(m3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range-active-track.vue"]]), g3 = { class: "lux-slidebar-fake" }, y3 = /* @__PURE__ */ fe({
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
    return (u, f) => (k(), G("div", g3, [
      F(" Draggable Max thumb button "),
      s.value !== void 0 ? (k(), Ue(fg, {
        key: 0,
        ariaLabel: u.ariaLabelMax,
        minLimit: u.selectedMinValue,
        selectedValue: s.value,
        onChange: o
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : F("v-if", !0),
      F(" Draggable Min thumb button "),
      F(" put Min value after Max value, this is just for z-index grabbing "),
      ie(fg, {
        ariaLabel: u.ariaLabelMin,
        maxLimit: u.selectedMaxValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      F(" Selection highlight "),
      ie(p3, {
        selectedMinValue: u.selectedMinValue,
        selectedMaxValue: u.selectedMaxValue,
        onChange: l
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), hg = /* @__PURE__ */ pe(y3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/common/slider-range/slider-range.vue"]]), v3 = { class: "lux-time-slider w-full" }, _3 = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, b3 = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, E3 = { class: "lux-time-displayed-dates" }, S3 = {
  key: 0,
  class: "lux-time-start-date grow"
}, w3 = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, x3 = /* @__PURE__ */ fe({
  __name: "layer-time-slider",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), r = t, i = e, s = de(g), a = de(
      () => {
        var E, O;
        return (E = r.layer.time) != null && E.minValue ? new Date((O = r.layer.time) == null ? void 0 : O.minValue).getTime() : 0;
      }
    ), o = de(
      () => {
        var E, O;
        return (E = r.layer.time) != null && E.maxValue ? new Date((O = r.layer.time) == null ? void 0 : O.maxValue).getTime() : 0;
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
      var R, D;
      const E = r.layer.time, O = [];
      if (!E)
        return;
      if (E.values)
        return E.values.map((Q) => new Date(Q).getTime());
      const N = new Date(E.minValue), M = new Date((R = E.maxValue) != null ? R : Date.now()), P = 1024, I = new Date(N.getTime()), C = (D = E.interval) != null ? D : U0;
      if (I.setFullYear(
        N.getFullYear() + P * C[0]
      ), I.setMonth(
        N.getMonth() + P * C[1],
        N.getDate() + P * C[2]
      ), I.setSeconds(N.getSeconds() + P * C[3]), I > M)
        for (let Q = 0; ; Q++) {
          const ve = new Date(N.getTime());
          if (ve.setFullYear(N.getFullYear() + Q * C[0]), ve.setMonth(
            N.getMonth() + Q * C[1],
            N.getDate() + Q * C[2]
          ), ve.setSeconds(N.getSeconds() + Q * C[3]), ve <= M)
            O.push(ve.getTime());
          else
            break;
        }
      return O;
    }
    function y(E) {
      var M;
      const O = E / 100 * (o.value - a.value) + a.value, N = OL(O, {
        minValue: a.value,
        maxValue: o.value,
        timeValueList: s.value,
        timeInterval: (M = r.layer.time) == null ? void 0 : M.interval
      });
      return Hf(N);
    }
    function v(E, O) {
      const N = y(E);
      if (f.value = N, O) {
        const M = y(O);
        u.value = M;
      }
    }
    function b(E, O, N) {
      v(E, O), N || i("changeTime", f.value, u.value);
    }
    return (E, O) => {
      var N, M, P, I, C, R, D;
      return k(), G("div", v3, [
        F(" Slider LayerTimeMode.VALUE "),
        ((N = E.layer.time) == null ? void 0 : N.mode) === x(Rr).VALUE ? (k(), G("div", _3, [
          ie(hg, {
            ariaLabelMin: `${x(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: d.value,
            onChange: b
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : F("v-if", !0),
        F(" Slider LayerTimeMode.RANGE "),
        ((M = E.layer.time) == null ? void 0 : M.mode) === x(Rr).RANGE ? (k(), G("div", b3, [
          ie(hg, {
            ariaLabelMin: `${x(n)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${x(n)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: d.value,
            selectedMaxValue: m.value,
            onChange: b
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : F("v-if", !0),
        F(" Display localized time values "),
        L("div", E3, [
          F(" Display localized time values Min value "),
          ((P = E.layer.time) == null ? void 0 : P.mode) === x(Rr).RANGE || ((I = E.layer.time) == null ? void 0 : I.mode) === x(Rr).VALUE ? (k(), G("div", S3, [
            L("span", null, oe(f.value ? x($p)(f.value, (C = E.layer.time) == null ? void 0 : C.resolution) : "-"), 1)
          ])) : F("v-if", !0),
          F(" Display localized time values Max value "),
          ((R = E.layer.time) == null ? void 0 : R.mode) === x(Rr).RANGE ? (k(), G("div", w3, [
            L("span", null, oe(u.value ? x($p)(u.value, (D = E.layer.time) == null ? void 0 : D.resolution) : "-"), 1)
          ])) : F("v-if", !0)
        ])
      ]);
    };
  }
}), O3 = /* @__PURE__ */ pe(x3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), M3 = /* @__PURE__ */ fe({
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
      return k(), G(Ge, null, [
        F(" Layer time: slider widget "),
        ((a = i.layer.time) == null ? void 0 : a.widget) === x(kl).SLIDER ? (k(), Ue(O3, {
          key: 0,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(" Layer time: datepicker VALUE (one date) widget "),
        ((o = i.layer.time) == null ? void 0 : o.widget) === x(kl).DATEPICKER && ((l = i.layer.time) == null ? void 0 : l.mode) === x(Rr).VALUE ? (k(), Ue(a3, {
          key: 1,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((u = i.layer.time) == null ? void 0 : u.widget) === x(kl).DATEPICKER && ((f = i.layer.time) == null ? void 0 : f.mode) === x(Rr).RANGE ? (k(), Ue(f3, {
          key: 2,
          layer: i.layer,
          onChangeTime: r
        }, null, 8, ["layer"])) : F("v-if", !0)
      ], 64);
    };
  }
}), T3 = /* @__PURE__ */ pe(M3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-time/layer-time.vue"]]), N3 = { class: "lux-layer-manager-item relative" }, C3 = { class: "w-full flex flex-nowrap items-start gap-x-2" }, L3 = ["title"], P3 = ["aria-label", "title"], k3 = ["aria-expanded", "aria-controls", "data-cy"], A3 = { class: "grow" }, D3 = ["title", "aria-label"], I3 = /* @__PURE__ */ fe({
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
    const n = t, r = e, { t: i, onClickInfo: s } = P_(n.layer, { emit: r }), a = Kn(), o = de(
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
    return (h, d) => (k(), G("div", N3, [
      L("div", C3, [
        L("button", {
          class: ke(["fa-solid fa-bars cursor-move mt-1", h.dragHandleClassName]),
          title: l.value
        }, null, 10, L3),
        L("button", {
          class: "fa-solid fa-info mt-1",
          "aria-label": u.value,
          title: u.value,
          onClick: d[0] || (d[0] = (...m) => x(s) && x(s)(...m))
        }, null, 8, P3),
        L("button", {
          "aria-expanded": h.isOpen,
          "aria-controls": `layer-manager-item-content-${h.layer.id}`,
          "data-cy": `myLayerItemLabel-${h.layer.id}`,
          class: ke([h.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: d[1] || (d[1] = (m) => h.$emit("clickToggle", h.layer))
        }, [
          L("span", A3, oe(o.value), 1),
          h.is3d ? F("v-if", !0) : (k(), G("span", {
            key: 0,
            class: ke(["w-3.5 fa-solid", h.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, k3),
        L("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: f.value,
          "aria-label": f.value,
          onClick: d[2] || (d[2] = (m) => h.$emit("clickRemove", h.layer))
        }, null, 8, D3)
      ]),
      F(" Layer item sub content (opacity and toggle comparator) "),
      h.is3d ? F("v-if", !0) : (k(), Ue(e3, {
        key: 0,
        layer: h.layer,
        isOpen: h.isOpen,
        isLayerComparatorOpen: h.isLayerComparatorOpen,
        displayLayerComparatorOpen: h.displayLayerComparatorOpen,
        onClickToggleLayerComparator: d[3] || (d[3] = (m) => h.$emit("clickToggleLayerComparator", m)),
        onChangeOpacity: d[4] || (d[4] = (m, p) => h.$emit("changeOpacity", m, p))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      F(" Layer time: slider OR datepicker widgets "),
      h.layer.time ? (k(), Ue(T3, {
        key: 1,
        layer: h.layer,
        onChangeTime: c
      }, null, 8, ["layer"])) : F("v-if", !0)
    ]));
  }
}), dg = /* @__PURE__ */ pe(I3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-item/layer-item.vue"]]), R3 = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, $3 = ["id"], F3 = { class: "sortable-layers" }, V3 = ["id"], j3 = { class: "flex flex-row justify-center space-x-1 my-2" }, nf = "drag-handle", G3 = /* @__PURE__ */ fe({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: n } = Ze(), { setMetadataId: r } = zh(), i = vt(), s = wt(), a = la(), o = Nu(), { bgLayer: l } = He(i), { sliderActive: u } = He(o), f = de(() => [...i.layers].reverse()), c = de(() => [...i.layers3d].reverse()), h = tt(), d = de(
      () => a.isLayerStyleEditable(l.value)
    ), m = e, { setRemoteLayersOpen: p } = wt();
    _n(() => {
      const P = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${nf}`,
        forceFallback: AL
      }, I = document.querySelector(".sortable-layers"), C = document.querySelector(".sortable-layers-3d");
      I && ge.create(I, {
        ...P,
        onSort: g
      }), C && ge.create(C, {
        ...P,
        onSort: y
      });
    });
    function g(P, I) {
      const C = [...P.to.children].map((R) => Number(R.id)).reverse();
      i.reorderLayers(C, I);
    }
    function y(P) {
      g(P, !0);
    }
    function v(P, I) {
      i.setLayerOpacity(P.id, I / 100);
    }
    function b(P, I, C) {
      i.setLayerTime(P.id, I, C);
    }
    function E(P) {
      i.removeLayers(P.id);
    }
    function O(P) {
      h.value = h.value !== P.id ? P.id : void 0;
    }
    function N() {
      s.openStyleEditorPanel();
    }
    function M() {
      o.toggleSlider();
    }
    return (P, I) => (k(), G("div", null, [
      c.value.length > 0 ? (k(), G("ul", R3, [
        (k(!0), G(Ge, null, kn(c.value, (C, R) => (k(), G("li", {
          key: C.id,
          id: C.id
        }, [
          ie(dg, {
            is3d: !0,
            dragHandleClassName: nf,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: x(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: O,
            onClickToggleLayerComparator: M,
            onClickInfo: (D) => x(r)(C.id),
            onChangeOpacity: v,
            onChangeTime: (D, Q) => b(C, D, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, $3))), 128))
      ])) : F("v-if", !0),
      L("ul", F3, [
        (k(!0), G(Ge, null, kn(f.value, (C, R) => (k(), G("li", {
          key: C.id,
          id: C.id
        }, [
          ie(dg, {
            is3d: !1,
            dragHandleClassName: nf,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: x(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: O,
            onClickToggleLayerComparator: M,
            onClickInfo: (D) => x(r)(C.id),
            onChangeOpacity: v,
            onChangeTime: (D, Q) => b(C, D, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, V3))), 128))
      ]),
      ie(YI, {
        layer: x(l) || x(bu),
        showEditButton: d.value,
        onClickInfo: I[0] || (I[0] = () => x(l) && x(r)(x(l).id)),
        onClickEdit: N
      }, null, 8, ["layer", "showEditButton"]),
      L("div", j3, [
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: I[1] || (I[1] = (C) => m("displayCatalog"))
        }, oe(x(n)("+ Add layers", { ns: "client" })), 1),
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: I[2] || (I[2] = (C) => x(p)(!0))
        }, oe(x(n)("+ Add external Wms", { ns: "client" })), 1)
      ])
    ]));
  }
}), U3 = /* @__PURE__ */ pe(G3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-manager/layer-manager.vue"]]), B3 = { class: "flex flex-col h-full pt-1.5" }, W3 = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, q3 = ["aria-label"], H3 = { class: "flex flex-row gap-2 h-10 text-2xl" }, z3 = ["aria-expanded"], Y3 = { key: 0 }, X3 = ["aria-expanded"], K3 = { class: "relative grow p-2.5 bg-primary overflow-auto" }, Z3 = /* @__PURE__ */ fe({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Ze(), n = wt(), { setLayersOpen: r } = n, { myLayersTabOpen: i } = He(n), { layers: s } = He(vt());
    function a() {
      n.setMyLayersTabOpen(!0);
    }
    function o() {
      n.setMyLayersTabOpen(!1);
    }
    return (l, u) => (k(), G("div", B3, [
      F(" Panel title and close button "),
      L("div", W3, [
        L("h1", null, oe(x(e)("layers", { ns: "client" })), 1),
        L("span", null, [
          L("button", {
            onClick: u[0] || (u[0] = () => x(r)(!1)),
            "aria-label": x(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, q3)
        ])
      ]),
      F(" My Layers and Catalog tab labels "),
      L("div", H3, [
        L("button", {
          onClick: a,
          class: ke(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", x(i) ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": x(i)
        }, [
          Kl(oe(x(e)("my_layers", { ns: "client" })) + " ", 1),
          x(s).length ? (k(), G("span", Y3, "(" + oe(x(s).length) + ")", 1)) : F("v-if", !0)
        ], 10, z3),
        L("button", {
          onClick: o,
          class: ke(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", x(i) ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !x(i)
        }, oe(x(e)("Catalog", { ns: "client" })), 11, X3)
      ]),
      F(" Panel content (MyLayers and Catalog) "),
      L("div", K3, [
        x(i) ? (k(), Ue(U3, {
          key: 0,
          onDisplayCatalog: o
        })) : F("v-if", !0),
        x(i) ? F("v-if", !0) : (k(), Ue(pI, { key: 1 }))
      ])
    ]));
  }
}), J3 = /* @__PURE__ */ pe(Z3, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/layer-panel/layer-panel.vue"]]);
class Q3 {
  bootstrap() {
    let e;
    e = vn(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = Nu();
    et(
      [() => e.sliderActive, () => e.sliderRatio],
      ([n, r], [i]) => {
        n !== i && Ne.setValue(Yf, n), Ne.setValue(
          Xf,
          r
        );
      }
    );
  }
  restore() {
    const e = Ne.getValue(Yf, Hh), n = Ne.getValue(Xf, zs), { toggleSlider: r, setRatio: i } = Nu();
    typeof e < "u" && e !== null && (r(e), typeof n !== void 0 && n !== null && i(n != null ? n : L_));
  }
}
const eR = new Q3(), tR = ["onKeydown"], nR = /* @__PURE__ */ L("span", { class: "lux-slider-line" }, null, -1), rR = /* @__PURE__ */ L("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ L("span"),
  /* @__PURE__ */ L("span")
], -1), iR = {
  key: 0,
  class: "lux-slider-layer-label"
}, sR = /* @__PURE__ */ L("i", { class: "fa fa-arrow-left mr-2" }, null, -1), mg = 30, aR = /* @__PURE__ */ fe({
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
      u(g + mg);
    }
    function m() {
      const g = r.containerOffset + a.value.offsetLeft;
      u(g - mg);
    }
    function p() {
      i("escSplitBar");
    }
    return _n(() => {
      var g;
      (g = a.value) == null || g.focus({ focusVisible: !0 });
    }), Li(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (g, y) => (k(), G("button", {
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
      nR,
      rR,
      g.sliderTopLayer ? (k(), G("span", iR, [
        sR,
        L("span", null, oe(x(s)(g.sliderTopLayer.name)), 1)
      ])) : F("v-if", !0)
    ], 44, tR));
  }
}), oR = /* @__PURE__ */ pe(aR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/slider/splitter-element.vue"]]), lR = /* @__PURE__ */ fe({
  __name: "slider-comparator",
  setup(t) {
    const e = Nu(), n = e_(), r = Vr().olMap, i = we(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = He(e), l = de(
      () => {
        var v, b;
        return ((b = (v = i.value) == null ? void 0 : v.sliderElement) == null ? void 0 : b.offsetWidth) || 0;
      }
    ), u = function() {
      var b, E, O;
      let v = (O = (E = (b = r.value) == null ? void 0 : b.getViewport()) == null ? void 0 : E.parentElement) == null ? void 0 : O.offsetLeft;
      return (v === void 0 || v === 0) && (v = d == null ? void 0 : d.offsetLeft), v !== void 0 ? v : 0;
    }, f = de(() => {
      var v, b;
      return r.value && i.value ? a.value * r.value.getSize()[0] - ((b = (v = i.value) == null ? void 0 : v.sliderElement) == null ? void 0 : b.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    eR.bootstrap(), et([o, s], ([v, b], [E]) => {
      var O;
      v && b ? (v !== E && p(), m()) : p(), (O = r.value) == null || O.render();
    }), et(f, () => {
      var v;
      (v = r.value) == null || v.render();
    });
    function m() {
      const v = n.getLayerFromCache(o.value);
      !v || (c = v.on(
        yd.PRERENDER,
        function(b) {
          var R;
          const E = b.context, O = (R = r.value) == null ? void 0 : R.getSize(), N = f.value + l.value / 2, M = Ro(b, [0, 0]), P = Ro(b, [N, 0]), I = Ro(b, [0, O[1]]), C = Ro(b, [N, O[0]]);
          E.save(), E.beginPath(), E.moveTo(M[0], M[1]), E.lineTo(I[0], I[1]), E.lineTo(C[0], C[1]), E.lineTo(P[0], P[1]), E.closePath(), E.clip();
        }
      ), h = v.on(
        yd.POSTRENDER,
        function(b) {
          b.context.restore();
        }
      ));
    }
    function p() {
      hb([c, h]);
    }
    function g(v) {
      var O;
      const b = (O = r.value) == null ? void 0 : O.getSize(), E = (v - u()) / b[0];
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
    }), (v, b) => x(o) && x(s) ? (k(), Ue(oR, {
      key: 0,
      ref_key: "splitterElement",
      ref: i,
      sliderActive: x(s),
      sliderRatio: x(a),
      sliderTopLayer: x(o),
      sliderOffset: f.value,
      containerOffset: u(),
      onMoveSplitBar: g,
      onEscSplitBar: y
    }, null, 8, ["sliderActive", "sliderRatio", "sliderTopLayer", "sliderOffset", "containerOffset"])) : F("v-if", !0);
  }
}), uR = /* @__PURE__ */ pe(lR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/slider/slider-comparator.vue"]]), ml = "-", rf = ",", pg = "--";
class cR {
  constructor() {
    st(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, rf));
  }
  layerTimesToStrings(e) {
    return e ? e.split(pg) : [];
  }
  layerIdsToLayers(e) {
    const n = ss(), r = Kn();
    return (e ? e.split(ml) : []).map((s) => {
      const a = oo.isRemoteLayer(s) ? dk(s) : n.findById(parseInt(s, 10));
      return a ? r.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const n = ss(), r = Kn();
    return (e ? e.split(rf) : []).map((s) => {
      const a = n.findByName(s);
      return a ? r.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, n = ml) {
    return PL(e, n);
  }
  layersVisibilitiesToBooleansV2(e) {
    return kL(e, rf);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((n) => n.id).join(ml)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = n.opacity) != null ? r : 1;
    }).join(ml)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((n) => {
      var r;
      return (r = Kn().getLayerCurrentTime(n)) != null ? r : "";
    }).join(pg)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const n = ss();
    return e ? n.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || bu.name;
  }
}
const mn = new cR(), fR = "basemap_2015_global", hR = "orthogr_2013_global", dR = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class mR {
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
          Gp,
          r,
          mn.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = t_(), n = this.getBgLayerFromStorage();
    e(n);
  }
  getBgLayerFromStorage() {
    const e = Ne.getInitialVersion(), n = Ne.getValue(Gp);
    return n ? e === 2 ? this.getBgLayerFromStorageV2(n) : mn.bgLayerNameToBgLayer(n) : mn.bgLayerNameToBgLayer(fR);
  }
  getBgLayerFromStorageV2(e) {
    const n = Ne.getValue(
      q0,
      zs
    );
    let r = "";
    return e ? r = dR[e] : n === 0 && (r = hR), mn.bgLayerNameToBgLayer(r);
  }
}
const pR = new mR();
class gR {
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
          jp,
          r,
          mn.layersToLayerIds
        ), Ne.setValue(
          Up,
          r,
          mn.layersToLayerOpacities
        ), Ne.setValue(
          Bp,
          r,
          mn.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getInitialVersion(), n = vt(), r = Ne.getValue(
      jp,
      e === 2 ? mn.layerNamesToLayersV2 : mn.layerIdsToLayers
    );
    this.restoreLayersOpacities(r, e), this.restoreLayersTimes(r), e === 2 && (Ne.removeItem(q0), Ne.removeItem(RL), Ne.removeItem(zp), Ne.removeItem(Yp)), n.addLayers(...(r == null ? void 0 : r.filter((i) => i)) || []);
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
      Bp,
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
      Up,
      mn.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Ne.getValue(
      zp,
      mn.layersOpacitiesToNumbersV2
    ), n = Ne.getValue(
      Yp,
      mn.layersVisibilitiesToBooleansV2
    );
    return e.map((r, i) => n[i] ? r : 0);
  }
}
const yR = new gR();
class vR {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const _R = new vR();
class bR {
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
          ao,
          n,
          _R.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(ao);
    if (e) {
      const { setTheme: n } = Zt();
      n(e);
    }
  }
}
const ER = new bR();
class SR {
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
        i !== r && Ne.setValue(pu, r);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Ne.getValue(pu) !== "false", { setLayersOpen: n } = wt();
    n(e);
  }
}
const wR = new SR();
class xR {
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
    const e = Ne.getValue(DL);
    wt().setMapId(e);
  }
}
const OR = new xR(), MR = /* @__PURE__ */ fe({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (n, r) => (k(!0), G(Ge, null, kn(e.colors, (i, s) => (k(), G("span", {
      key: `${n.styleName}-${s}`,
      class: "grow m-px",
      style: Ci(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), TR = /* @__PURE__ */ pe(MR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/simple-style-item.vue"]]), NR = { class: "text-white border-2 p-[10px] m-[10px]" }, CR = { class: "text-center mb-3" }, LR = ["title"], PR = { class: "text-white" }, kR = ["title", "onClick"], AR = { class: "flex" }, DR = /* @__PURE__ */ fe({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Ze(), n = gr(), r = la(), { bgStyle: i } = He(n), s = Yn().simple_styles.road, a = we(s);
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
    return (l, u) => (k(), G("div", NR, [
      F(" TODO: create clean container for simple and advanced style editors "),
      L("h5", CR, oe(x(e)("Select a style", { ns: "client" })), 1),
      (k(!0), G(Ge, null, kn(a.value, (f) => (k(), G("div", {
        key: f.unlocalized_label,
        title: x(e)(f.unlocalized_label, { ns: "client" }),
        class: ke(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        L("span", PR, oe(x(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        L("button", {
          title: x(e)("Select style: {{styleName}}", {
            styleName: x(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          L("span", AR, [
            ie(TR, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, kR)
      ], 10, LR))), 128))
    ]));
  }
}), IR = /* @__PURE__ */ pe(DR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/simple-style-selector.vue"]]);
function RR(t) {
  const e = $R(t);
  return !e || !e.medium_style_class ? [] : Yn().medium_default_styles[e.medium_style_class];
}
function $R(t) {
  return Yn().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const FR = { class: "flex w-full items-center" }, VR = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, jR = { class: "grow" }, GR = ["value"], UR = ["checked", "aria-label"], BR = /* @__PURE__ */ fe({
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
    return (o, l) => (k(), G("div", FR, [
      L("label", VR, oe(x(n)(o.style.label)), 1),
      L("div", jR, [
        o.colorEditable && r.style.color ? (k(), G("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: r.style.color,
          onInput: s
        }, null, 40, GR)) : F("v-if", !0)
      ]),
      L("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: r.style.visible,
        onChange: a,
        "aria-label": x(n)("Show or hide {{ thematicName }}", {
          thematicName: r.style.label
        })
      }, null, 40, UR)
    ]));
  }
}), WR = /* @__PURE__ */ pe(BR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/medium-style-item.vue"]]), qR = { class: "text-white border-2 p-[10px] m-[10px]" }, HR = { class: "text-center mb-3" }, zR = /* @__PURE__ */ fe({
  __name: "medium-style-selector",
  props: {
    layer: { type: Object, required: !0 }
  },
  setup(t) {
    const e = ["basemap_2015_global"], n = gr(), { bgStyle: r } = He(n), { t: i } = Ze(), s = t, a = de(
      () => e.includes(s.layer.name)
    ), o = de(
      () => r.value || RR(s.layer)
    );
    function l(u, f) {
      r.value = o.value.map(
        (c, h) => h === u ? f : c
      ), n.disableExpertStyle();
    }
    return (u, f) => (k(), G("div", qR, [
      L("h5", HR, oe(a.value ? x(i)("Select a colour for every theme") : x(i)("Activate categories")), 1),
      (k(!0), G(Ge, null, kn(o.value, (c, h) => (k(), Ue(WR, {
        key: c.label,
        style: Ci(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: a.value
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), YR = /* @__PURE__ */ pe(zR, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/medium-style-selector.vue"]]);
var k_ = { exports: {} };
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
})(k_);
const XR = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, KR = { class: "text-center mb-3" }, ZR = { class: "flex flex-row justify-center" }, JR = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, QR = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, e4 = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, t4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, n4 = ["href"], r4 = /* @__PURE__ */ fe({
  __name: "expert-style-selector",
  setup(t) {
    const e = vt(), n = gr(), r = la(), { appliedStyle: i } = He(n), { t: s } = Ze();
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
      ) : `${n.registerUrls.get("get")}?id=${n.styleSerial}`;
    }
    return (u, f) => (k(), G("div", XR, [
      L("h5", KR, oe(x(s)("Lancer \xE9diteur externe ou importer json")), 1),
      L("div", ZR, [
        L("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          L("span", JR, oe(x(s)("Download style")), 1)
        ]),
        L("div", QR, [
          L("label", e4, [
            L("span", t4, oe(x(s)("Upload style")), 1)
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
      }, oe(x(s)("Open Maputnik editor")), 9, n4)
    ]));
  }
}), i4 = /* @__PURE__ */ pe(r4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/expert-style-selector.vue"]]), s4 = { key: 0 }, a4 = {
  key: 0,
  class: "mb-px"
}, o4 = {
  key: 1,
  class: "mb-px"
}, l4 = {
  key: 2,
  class: "mb-px"
}, u4 = /* @__PURE__ */ fe({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Ze(), n = vt(), r = wt(), i = gr(), { bgStyle: s, isExpertStyleActive: a } = He(i), { bgLayer: o } = He(n), l = la(), u = de(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    et(o, (h) => {
      l.isLayerStyleEditable(h) || r.closeStyleEditorPanel();
    });
    let f = we(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => u.value.isEditable ? (k(), G("div", s4, [
      u.value.hasSimpleStyle ? (k(), G("div", a4, [
        ie(Il, {
          title: x(e)("Simple"),
          expanded: x(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => Ye(f) ? f.value = x(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = x(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: _i(() => [
            ie(IR)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasAdvancedStyle ? (k(), G("div", o4, [
        ie(Il, {
          title: x(e)("Medium"),
          expanded: x(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => Ye(f) ? f.value = x(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = x(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: _i(() => [
            x(o) ? (k(), Ue(YR, {
              key: 0,
              layer: x(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasExpertStyle ? (k(), G("div", l4, [
        ie(Il, {
          title: x(e)("Expert (style.json)"),
          expanded: x(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => Ye(f) ? f.value = x(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = x(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: _i(() => [
            x(o) ? (k(), Ue(i4, {
              key: 0,
              layer: x(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      x(s) || x(a) ? (k(), G("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, oe(x(e)("Reset style", { ns: "client" })), 1)) : F("v-if", !0)
    ])) : F("v-if", !0);
  }
}), c4 = /* @__PURE__ */ pe(u4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/components/style-selector/style-selector.vue"]]);
function ih(t) {
  return ih = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ih(t);
}
function A_() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : ih(XMLHttpRequest)) === "object";
}
function f4(t) {
  return !!t && typeof t.then == "function";
}
function h4(t) {
  return f4(t) ? t : Promise.resolve(t);
}
function d4(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Cu = { exports: {} }, pl = { exports: {} }, gg;
function m4() {
  return gg || (gg = 1, function(t, e) {
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
        function O(T) {
          if (T.slice)
            return T.slice(0);
          var $ = new Uint8Array(T.byteLength);
          return $.set(new Uint8Array(T)), $.buffer;
        }
        function N() {
          return this.bodyUsed = !1, this._initBody = function(T) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = T, T ? typeof T == "string" ? this._bodyText = T : l.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : l.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : l.arrayBuffer && l.blob && u(T) ? (this._bodyArrayBuffer = O(T.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || c(T)) ? this._bodyArrayBuffer = O(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "", this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
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
        var M = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function P(T) {
          var $ = T.toUpperCase();
          return M.indexOf($) > -1 ? $ : T;
        }
        function I(T, $) {
          if (!(this instanceof I))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ = $ || {};
          var z = $.body;
          if (T instanceof I) {
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
        I.prototype.clone = function() {
          return new I(this, { body: this._bodyInit });
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
        N.call(I.prototype);
        function D(T, $) {
          if (!(this instanceof D))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ || ($ = {}), this.type = "default", this.status = $.status === void 0 ? 200 : $.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = $.statusText === void 0 ? "" : "" + $.statusText, this.headers = new p($.headers), this.url = $.url || "", this._initBody(T);
        }
        N.call(D.prototype), D.prototype.clone = function() {
          return new D(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
          });
        }, D.error = function() {
          var T = new D(null, { status: 0, statusText: "" });
          return T.type = "error", T;
        };
        var Q = [301, 302, 303, 307, 308];
        D.redirect = function(T, $) {
          if (Q.indexOf($) === -1)
            throw new RangeError("Invalid status code");
          return new D(null, { status: $, headers: { location: T } });
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
            var Ce = new I(T, $);
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
                z(new D(Ct, Te));
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
        return ve.polyfill = !0, o.fetch || (o.fetch = ve, o.Headers = p, o.Request = I, o.Response = D), a.Headers = p, a.Request = I, a.Response = D, a.fetch = ve, a;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = n.fetch ? n : r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(pl, pl.exports)), pl.exports;
}
(function(t, e) {
  var n;
  if (typeof fetch == "function" && (typeof lr < "u" && lr.fetch ? n = lr.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof d4 < "u" && typeof window > "u") {
    var r = n || m4();
    r.default && (r = r.default), e.default = r, t.exports = e.default;
  }
})(Cu, Cu.exports);
const D_ = Cu.exports, yg = /* @__PURE__ */ mb({
  __proto__: null,
  default: D_
}, [Cu.exports]);
function vg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _g(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vg(Object(n), !0).forEach(function(r) {
      p4(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function p4(t, e, n) {
  return e = g4(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function g4(t) {
  var e = y4(t, "string");
  return hs(e) == "symbol" ? e : String(e);
}
function y4(t, e) {
  if (hs(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (hs(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function hs(t) {
  return hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hs(t);
}
var Gr;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? Gr = global.fetch : typeof window < "u" && window.fetch ? Gr = window.fetch : Gr = fetch);
var lo;
A_() && (typeof global < "u" && global.XMLHttpRequest ? lo = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (lo = window.XMLHttpRequest));
var Lu;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Lu = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Lu = window.ActiveXObject));
!Gr && yg && !lo && !Lu && (Gr = D_ || yg);
typeof Gr != "function" && (Gr = void 0);
var sh = function(e, n) {
  if (n && hs(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, bg = function(e, n, r, i) {
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
  typeof fetch == "function" ? fetch(e, n).then(s).catch(r) : Gr(e, n).then(s).catch(r);
}, Eg = !1, v4 = function(e, n, r, i) {
  e.queryStringParams && (n = sh(n, e.queryStringParams));
  var s = _g({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = _g({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: s
  }, Eg ? {} : a), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    bg(n, o, i, l);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(f) {
        delete o[f];
      }), bg(n, o, i, l), Eg = !0;
    } catch (f) {
      i(f);
    }
  }
}, _4 = function(e, n, r, i) {
  r && hs(r) === "object" && (r = sh("", r).slice(1)), e.queryStringParams && (n = sh(n, e.queryStringParams));
  try {
    var s;
    lo ? s = new lo() : s = new Lu("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", n, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
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
}, b4 = function(e, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, Gr && n.indexOf("file:") !== 0)
    return v4(e, n, r, i);
  if (A_() || typeof ActiveXObject == "function")
    return _4(e, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function uo(t) {
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uo(t);
}
function Sg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sg(Object(n), !0).forEach(function(r) {
      I_(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sg(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function E4(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, R_(r.key), r);
  }
}
function S4(t, e, n) {
  return e && wg(t.prototype, e), n && wg(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function I_(t, e, n) {
  return e = R_(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function R_(t) {
  var e = w4(t, "string");
  return uo(e) == "symbol" ? e : String(e);
}
function w4(t, e) {
  if (uo(t) != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (uo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var x4 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return I_({}, r, i || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: b4,
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
}, $_ = function() {
  function t(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    E4(this, t), this.services = e, this.options = n, this.allOptions = r, this.type = "backend", this.init(e, n, r);
  }
  return S4(t, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = sf(sf(sf({}, x4()), this.options || {}), i), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
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
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, i)), l = h4(l), l.then(function(u) {
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
$_.type = "backend";
function F_(t, e, n) {
  n(t, e) && t instanceof db && t.getLayers().forEach((i) => {
    F_(i, [...e, t], n);
  });
}
const O4 = { class: "h-screen flex flex-col overflow-hidden" }, M4 = { class: "flex grow" }, T4 = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, N4 = {
  key: 1,
  class: "w-80 bg-primary"
}, C4 = { class: "map-wrapper grow bg-blue-100 relative" }, L4 = { class: "absolute right-1 top-16" }, P4 = /* @__PURE__ */ fe({
  __name: "App",
  setup(t) {
    const e = wt();
    OR.bootstrap(), yR.bootstrap(), ER.bootstrap(), wR.bootstrapLayersOpen(), Y0.bootstrapStyle(), pR.bootstrap();
    const { layersOpen: n, styleEditorOpen: r } = He(e);
    et(
      n,
      () => setTimeout(() => {
        i();
      }, 50)
    ), _n(() => window.addEventListener("resize", i)), Li(() => window.removeEventListener("resize", i));
    function i() {
      const s = Vr().getOlMap();
      s.updateSize(), F_(s.getLayerGroup(), [], (a) => (a instanceof Q0 && a.getMapLibreMap().resize(), !0));
    }
    return (s, a) => (k(), G("div", O4, [
      ie(VD),
      L("main", M4, [
        F(" Layer panel "),
        x(n) ? (k(), G("div", T4, [
          ie(J3)
        ])) : F("v-if", !0),
        F(" Style editor "),
        x(r) ? (k(), G("div", N4, [
          ie(c4)
        ])) : F("v-if", !0),
        F(" Map container and slider comparator "),
        L("div", C4, [
          ie(DP, { v4_standalone: !0 }),
          ie(uR, { class: "absolute top-0" }),
          ie(DA),
          ie(xD)
        ]),
        F(" Background selector "),
        L("div", L4, [
          ie(BP)
        ])
      ]),
      ie(XD, { class: "fixed bottom-5 sm:static z-20" }),
      ie(PN)
    ]));
  }
}), k4 = /* @__PURE__ */ pe(P4, [["__file", "/home/mkirmse/devel/gmf/luxembourg-geoportail_2024/src/App.vue"]]);
EN();
lt.use($_);
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
const rd = MS(k4);
rd.use(Dw());
rd.use(S2, { i18next: lt });
rd.use(uw);
const a6 = (t = {}, e = null) => SN(
  {
    setup: () => {
      const n = go();
      Object.assign(n.appContext, e._context), Object.assign(n.provides, e._context.provides);
    },
    render: () => Xy(t)
  },
  { shadowRoot: !1 }
);
export {
  PN as AlertNotifications,
  k4 as App,
  BP as BackgroundSelector,
  $v as DropdownList,
  XD as FooterBar,
  VD as HeaderBar,
  S2 as I18NextVue,
  xD as LayerMetadata,
  J3 as LayerPanel,
  DP as MapContainer,
  Q0 as MapLibreLayer,
  DA as RemoteLayers,
  uR as SliderComparator,
  c4 as StyleSelector,
  uw as VueDOMPurifyHTML,
  rd as app,
  $_ as backend,
  a6 as createElementInstance,
  Dw as createPinia,
  SN as defineCustomElement,
  lt as i18next,
  ta as proxyUrlHelper,
  pR as statePersistorBgLayerService,
  wR as statePersistorLayersOpenService,
  yR as statePersistorLayersService,
  OR as statePersistorMyMapService,
  Y0 as statePersistorStyleService,
  ER as statePersistorThemeService,
  He as storeToRefs,
  PD as themeSelectorService,
  wt as useAppStore,
  t_ as useBackgroundLayer,
  Kn as useLayers,
  Vr as useMap,
  vt as useMapStore,
  la as useMvtStyles,
  e_ as useOpenLayers,
  gr as useStyleStore,
  Zt as useThemeStore,
  ss as useThemes,
  et as watch
};
