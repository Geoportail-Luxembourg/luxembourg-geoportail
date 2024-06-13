var Z_ = Object.defineProperty;
var J_ = (t, e, r) => e in t ? Z_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Qe = (t, e, r) => (J_(t, typeof e != "symbol" ? e + "" : e, r), r);
import { get as Sl, transformExtent as Q_, getTransform as eb, transform as yd } from "ol/proj";
import { register as tb } from "ol/proj/proj4";
import rb from "ol/Map";
import nb from "ol/View";
import ib from "ol/layer/Image";
import Ng from "ol/source/ImageWMS";
import sb from "ol/layer/Tile";
import Cg from "ol/source/WMTS";
import ab from "ol/tilegrid/WMTS";
import { getTopLeft as ob } from "ol/extent";
import lb from "ol/layer/Layer";
import { toDegrees as ub } from "ol/math";
import { toLonLat as cb } from "ol/proj.js";
import vd from "mapbox-gl";
import * as _d from "ol/events";
import fb from "ol/ObjectEventType";
import { CLASS_UNSELECTABLE as Lg, CLASS_CONTROL as Pg } from "ol/css";
import kg from "ol/control/Control";
import hb from "ol/control/FullScreen";
import db from "ol/control/Zoom";
import pb from "ol/control/ZoomToExtent";
import mb from "ol/format/WMTSCapabilities.js";
import { getRenderPixel as Uo } from "ol/render";
import { unByKey as gb } from "ol/Observable";
import bd from "ol/render/EventType";
import yb from "ol/layer/Group.js";
function vb(t, e) {
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
function qn(t, e) {
  const r = new Set(t.split(","));
  return e ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const Ze = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Gs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], yt = () => {
}, _b = () => !1, yo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), zl = (t) => t.startsWith("onUpdate:"), et = Object.assign, uh = (t, e) => {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}, bb = Object.prototype.hasOwnProperty, Ae = (t, e) => bb.call(t, e), le = Array.isArray, es = (t) => Iu(t) === "[object Map]", Ag = (t) => Iu(t) === "[object Set]", me = (t) => typeof t == "function", it = (t) => typeof t == "string", gs = (t) => typeof t == "symbol", Be = (t) => t !== null && typeof t == "object", ch = (t) => (Be(t) || me(t)) && me(t.then) && me(t.catch), Dg = Object.prototype.toString, Iu = (t) => Dg.call(t), fh = (t) => Iu(t).slice(8, -1), Ig = (t) => Iu(t) === "[object Object]", hh = (t) => it(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ia = /* @__PURE__ */ qn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Eb = /* @__PURE__ */ qn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ru = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => e[r] || (e[r] = t(r));
}, Sb = /-(\w)/g, mr = Ru((t) => t.replace(Sb, (e, r) => r ? r.toUpperCase() : "")), wb = /\B([A-Z])/g, lr = Ru(
  (t) => t.replace(wb, "-$1").toLowerCase()
), us = Ru((t) => t.charAt(0).toUpperCase() + t.slice(1)), zi = Ru((t) => t ? `on${us(t)}` : ""), xi = (t, e) => !Object.is(t, e), ha = (t, e) => {
  for (let r = 0; r < t.length; r++)
    t[r](e);
}, Rg = (t, e, r) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, xb = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, uf = (t) => {
  const e = it(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Ed;
const $u = () => Ed || (Ed = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ci(t) {
  if (le(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = it(n) ? Nb(n) : Ci(n);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (it(t) || Be(t))
    return t;
}
const Ob = /;(?![^(]*\))/g, Mb = /:([^]+)/, Tb = /\/\*[^]*?\*\//g;
function Nb(t) {
  const e = {};
  return t.replace(Tb, "").split(Ob).forEach((r) => {
    if (r) {
      const n = r.split(Mb);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function ke(t) {
  let e = "";
  if (it(t))
    e = t;
  else if (le(t))
    for (let r = 0; r < t.length; r++) {
      const n = ke(t[r]);
      n && (e += n + " ");
    }
  else if (Be(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
const Cb = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Lb = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Pb = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", kb = /* @__PURE__ */ qn(Cb), Ab = /* @__PURE__ */ qn(Lb), Db = /* @__PURE__ */ qn(Pb), Ib = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rb = /* @__PURE__ */ qn(Ib);
function $g(t) {
  return !!t || t === "";
}
const ae = (t) => it(t) ? t : t == null ? "" : le(t) || Be(t) && (t.toString === Dg || !me(t.toString)) ? JSON.stringify(t, Fg, 2) : String(t), Fg = (t, e) => e && e.__v_isRef ? Fg(t, e.value) : es(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (r, [n, i], s) => (r[hc(n, s) + " =>"] = i, r),
    {}
  )
} : Ag(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((r) => hc(r))
} : gs(e) ? hc(e) : Be(e) && !le(e) && !Ig(e) ? String(e) : e, hc = (t, e = "") => {
  var r;
  return gs(t) ? `Symbol(${(r = t.description) != null ? r : e})` : t;
};
/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let hr;
class Vg {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = hr, !e && hr && (this.index = (hr.scopes || (hr.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const r = hr;
      try {
        return hr = this, e();
      } finally {
        hr = r;
      }
    } else
      process.env.NODE_ENV !== "production" && vn("cannot run an inactive effect scope.");
  }
  on() {
    hr = this;
  }
  off() {
    hr = this.parent;
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
function jg(t) {
  return new Vg(t);
}
function $b(t, e = hr) {
  e && e.active && e.effects.push(t);
}
function Gg() {
  return hr;
}
function Fb(t) {
  hr ? hr.cleanups.push(t) : process.env.NODE_ENV !== "production" && vn(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let ts;
class dh {
  constructor(e, r, n, i) {
    this.fn = e, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, $b(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Hn();
      for (let e = 0; e < this._depsLength; e++) {
        const r = this.deps[e];
        if (r.computed && (Vb(r.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), zn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = yi, r = ts;
    try {
      return yi = !0, ts = this, this._runnings++, Sd(this), this.fn();
    } finally {
      wd(this), this._runnings--, ts = r, yi = e;
    }
  }
  stop() {
    var e;
    this.active && (Sd(this), wd(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Vb(t) {
  return t.value;
}
function Sd(t) {
  t._trackId++, t._depsLength = 0;
}
function wd(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Ug(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Ug(t, e) {
  const r = t.get(e);
  r !== void 0 && e._trackId !== r && (t.delete(e), t.size === 0 && t.cleanup());
}
let yi = !0, cf = 0;
const Bg = [];
function Hn() {
  Bg.push(yi), yi = !1;
}
function zn() {
  const t = Bg.pop();
  yi = t === void 0 ? !0 : t;
}
function ph() {
  cf++;
}
function mh() {
  for (cf--; !cf && ff.length; )
    ff.shift()();
}
function Wg(t, e, r) {
  var n;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && Ug(i, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((n = t.onTrack) == null || n.call(t, et({ effect: t }, r)));
  }
}
const ff = [];
function qg(t, e, r) {
  var n;
  ph();
  for (const i of t.keys()) {
    let s;
    i._dirtyLevel < e && (s != null ? s : s = t.get(i) === i._trackId) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (s != null ? s : s = t.get(i) === i._trackId) && (process.env.NODE_ENV !== "production" && ((n = i.onTrigger) == null || n.call(i, et({ effect: i }, r))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && ff.push(i.scheduler)));
  }
  mh();
}
const Hg = (t, e) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = t, r.computed = e, r;
}, Yl = /* @__PURE__ */ new WeakMap(), rs = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), hf = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function It(t, e, r) {
  if (yi && ts) {
    let n = Yl.get(t);
    n || Yl.set(t, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || n.set(r, i = Hg(() => n.delete(r))), Wg(
      ts,
      i,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: r
      } : void 0
    );
  }
}
function fn(t, e, r, n, i, s) {
  const a = Yl.get(t);
  if (!a)
    return;
  let o = [];
  if (e === "clear")
    o = [...a.values()];
  else if (r === "length" && le(t)) {
    const l = Number(n);
    a.forEach((u, f) => {
      (f === "length" || !gs(f) && f >= l) && o.push(u);
    });
  } else
    switch (r !== void 0 && o.push(a.get(r)), e) {
      case "add":
        le(t) ? hh(r) && o.push(a.get("length")) : (o.push(a.get(rs)), es(t) && o.push(a.get(hf)));
        break;
      case "delete":
        le(t) || (o.push(a.get(rs)), es(t) && o.push(a.get(hf)));
        break;
      case "set":
        es(t) && o.push(a.get(rs));
        break;
    }
  ph();
  for (const l of o)
    l && qg(
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
  mh();
}
function jb(t, e) {
  var r;
  return (r = Yl.get(t)) == null ? void 0 : r.get(e);
}
const Gb = /* @__PURE__ */ qn("__proto__,__v_isRef,__isVue"), zg = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(gs)
), xd = /* @__PURE__ */ Ub();
function Ub() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...r) {
      const n = _e(this);
      for (let s = 0, a = this.length; s < a; s++)
        It(n, "get", s + "");
      const i = n[e](...r);
      return i === -1 || i === !1 ? n[e](...r.map(_e)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...r) {
      Hn(), ph();
      const n = _e(this)[e].apply(this, r);
      return mh(), zn(), n;
    };
  }), t;
}
function Bb(t) {
  gs(t) || (t = String(t));
  const e = _e(this);
  return It(e, "has", t), e.hasOwnProperty(t);
}
class Yg {
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
      return n === (i ? s ? ty : ey : s ? Qg : Jg).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const a = le(e);
    if (!i) {
      if (a && Ae(xd, r))
        return Reflect.get(xd, r, n);
      if (r === "hasOwnProperty")
        return Bb;
    }
    const o = Reflect.get(e, r, n);
    return (gs(r) ? zg.has(r) : Gb(r)) || (i || It(e, "get", r), s) ? o : Ye(o) ? a && hh(r) ? o : o.value : Be(o) ? i ? ry(o) : ju(o) : o;
  }
}
class Xg extends Yg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, n, i) {
    let s = e[r];
    if (!this._isShallow) {
      const l = cs(s);
      if (!ns(n) && !cs(n) && (s = _e(s), n = _e(n)), !le(e) && Ye(s) && !Ye(n))
        return l ? !1 : (s.value = n, !0);
    }
    const a = le(e) && hh(r) ? Number(r) < e.length : Ae(e, r), o = Reflect.set(e, r, n, i);
    return e === _e(i) && (a ? xi(n, s) && fn(e, "set", r, n, s) : fn(e, "add", r, n)), o;
  }
  deleteProperty(e, r) {
    const n = Ae(e, r), i = e[r], s = Reflect.deleteProperty(e, r);
    return s && n && fn(e, "delete", r, void 0, i), s;
  }
  has(e, r) {
    const n = Reflect.has(e, r);
    return (!gs(r) || !zg.has(r)) && It(e, "has", r), n;
  }
  ownKeys(e) {
    return It(
      e,
      "iterate",
      le(e) ? "length" : rs
    ), Reflect.ownKeys(e);
  }
}
class Kg extends Yg {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, r) {
    return process.env.NODE_ENV !== "production" && vn(
      `Set operation on key "${String(r)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, r) {
    return process.env.NODE_ENV !== "production" && vn(
      `Delete operation on key "${String(r)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Wb = /* @__PURE__ */ new Xg(), qb = /* @__PURE__ */ new Kg(), Hb = /* @__PURE__ */ new Xg(
  !0
), zb = /* @__PURE__ */ new Kg(!0), gh = (t) => t, Fu = (t) => Reflect.getPrototypeOf(t);
function Bo(t, e, r = !1, n = !1) {
  t = t.__v_raw;
  const i = _e(t), s = _e(e);
  r || (xi(e, s) && It(i, "get", e), It(i, "get", s));
  const { has: a } = Fu(i), o = n ? gh : r ? yh : Qa;
  if (a.call(i, e))
    return o(t.get(e));
  if (a.call(i, s))
    return o(t.get(s));
  t !== i && t.get(e);
}
function Wo(t, e = !1) {
  const r = this.__v_raw, n = _e(r), i = _e(t);
  return e || (xi(t, i) && It(n, "has", t), It(n, "has", i)), t === i ? r.has(t) : r.has(t) || r.has(i);
}
function qo(t, e = !1) {
  return t = t.__v_raw, !e && It(_e(t), "iterate", rs), Reflect.get(t, "size", t);
}
function Od(t) {
  t = _e(t);
  const e = _e(this);
  return Fu(e).has.call(e, t) || (e.add(t), fn(e, "add", t, t)), this;
}
function Md(t, e) {
  e = _e(e);
  const r = _e(this), { has: n, get: i } = Fu(r);
  let s = n.call(r, t);
  s ? process.env.NODE_ENV !== "production" && Zg(r, n, t) : (t = _e(t), s = n.call(r, t));
  const a = i.call(r, t);
  return r.set(t, e), s ? xi(e, a) && fn(r, "set", t, e, a) : fn(r, "add", t, e), this;
}
function Td(t) {
  const e = _e(this), { has: r, get: n } = Fu(e);
  let i = r.call(e, t);
  i ? process.env.NODE_ENV !== "production" && Zg(e, r, t) : (t = _e(t), i = r.call(e, t));
  const s = n ? n.call(e, t) : void 0, a = e.delete(t);
  return i && fn(e, "delete", t, void 0, s), a;
}
function Nd() {
  const t = _e(this), e = t.size !== 0, r = process.env.NODE_ENV !== "production" ? es(t) ? new Map(t) : new Set(t) : void 0, n = t.clear();
  return e && fn(t, "clear", void 0, void 0, r), n;
}
function Ho(t, e) {
  return function(n, i) {
    const s = this, a = s.__v_raw, o = _e(a), l = e ? gh : t ? yh : Qa;
    return !t && It(o, "iterate", rs), a.forEach((u, f) => n.call(i, l(u), l(f), s));
  };
}
function zo(t, e, r) {
  return function(...n) {
    const i = this.__v_raw, s = _e(i), a = es(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...n), f = r ? gh : e ? yh : Qa;
    return !e && It(
      s,
      "iterate",
      l ? hf : rs
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
function Zn(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const r = e[0] ? `on key "${e[0]}" ` : "";
      vn(
        `${us(t)} operation ${r}failed: target is readonly.`,
        _e(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Yb() {
  const t = {
    get(s) {
      return Bo(this, s);
    },
    get size() {
      return qo(this);
    },
    has: Wo,
    add: Od,
    set: Md,
    delete: Td,
    clear: Nd,
    forEach: Ho(!1, !1)
  }, e = {
    get(s) {
      return Bo(this, s, !1, !0);
    },
    get size() {
      return qo(this);
    },
    has: Wo,
    add: Od,
    set: Md,
    delete: Td,
    clear: Nd,
    forEach: Ho(!1, !0)
  }, r = {
    get(s) {
      return Bo(this, s, !0);
    },
    get size() {
      return qo(this, !0);
    },
    has(s) {
      return Wo.call(this, s, !0);
    },
    add: Zn("add"),
    set: Zn("set"),
    delete: Zn("delete"),
    clear: Zn("clear"),
    forEach: Ho(!0, !1)
  }, n = {
    get(s) {
      return Bo(this, s, !0, !0);
    },
    get size() {
      return qo(this, !0);
    },
    has(s) {
      return Wo.call(this, s, !0);
    },
    add: Zn("add"),
    set: Zn("set"),
    delete: Zn("delete"),
    clear: Zn("clear"),
    forEach: Ho(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = zo(s, !1, !1), r[s] = zo(s, !0, !1), e[s] = zo(s, !1, !0), n[s] = zo(
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
  Xb,
  Kb,
  Zb,
  Jb
] = /* @__PURE__ */ Yb();
function Vu(t, e) {
  const r = e ? t ? Jb : Zb : t ? Kb : Xb;
  return (n, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? n : Reflect.get(
    Ae(r, i) && i in n ? r : n,
    i,
    s
  );
}
const Qb = {
  get: /* @__PURE__ */ Vu(!1, !1)
}, e1 = {
  get: /* @__PURE__ */ Vu(!1, !0)
}, t1 = {
  get: /* @__PURE__ */ Vu(!0, !1)
}, r1 = {
  get: /* @__PURE__ */ Vu(!0, !0)
};
function Zg(t, e, r) {
  const n = _e(r);
  if (n !== r && e.call(t, n)) {
    const i = fh(t);
    vn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Jg = /* @__PURE__ */ new WeakMap(), Qg = /* @__PURE__ */ new WeakMap(), ey = /* @__PURE__ */ new WeakMap(), ty = /* @__PURE__ */ new WeakMap();
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
function i1(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : n1(fh(t));
}
function ju(t) {
  return cs(t) ? t : Gu(
    t,
    !1,
    Wb,
    Qb,
    Jg
  );
}
function s1(t) {
  return Gu(
    t,
    !1,
    Hb,
    e1,
    Qg
  );
}
function ry(t) {
  return Gu(
    t,
    !0,
    qb,
    t1,
    ey
  );
}
function Rn(t) {
  return Gu(
    t,
    !0,
    zb,
    r1,
    ty
  );
}
function Gu(t, e, r, n, i) {
  if (!Be(t))
    return process.env.NODE_ENV !== "production" && vn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = i1(t);
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? n : r
  );
  return i.set(t, o), o;
}
function hn(t) {
  return cs(t) ? hn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function cs(t) {
  return !!(t && t.__v_isReadonly);
}
function ns(t) {
  return !!(t && t.__v_isShallow);
}
function Xl(t) {
  return t ? !!t.__v_raw : !1;
}
function _e(t) {
  const e = t && t.__v_raw;
  return e ? _e(e) : t;
}
function pi(t) {
  return Object.isExtensible(t) && Rg(t, "__v_skip", !0), t;
}
const Qa = (t) => Be(t) ? ju(t) : t, yh = (t) => Be(t) ? ry(t) : t, a1 = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class ny {
  constructor(e, r, n, i) {
    this.getter = e, this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new dh(
      () => e(this._value),
      () => wl(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n;
  }
  get value() {
    const e = _e(this);
    return (!e._cacheable || e.effect.dirty) && xi(e._value, e._value = e.effect.run()) && wl(e, 4), iy(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && vn(a1, `

getter: `, this.getter), wl(e, 2)), e._value;
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
function o1(t, e, r = !1) {
  let n, i;
  const s = me(t);
  s ? (n = t, i = process.env.NODE_ENV !== "production" ? () => {
    vn("Write operation failed: computed value is readonly");
  } : yt) : (n = t.get, i = t.set);
  const a = new ny(n, i, s || !i, r);
  return process.env.NODE_ENV !== "production" && e && !r && (a.effect.onTrack = e.onTrack, a.effect.onTrigger = e.onTrigger), a;
}
function iy(t) {
  var e;
  yi && ts && (t = _e(t), Wg(
    ts,
    (e = t.dep) != null ? e : t.dep = Hg(
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
function wl(t, e = 4, r) {
  t = _e(t);
  const n = t.dep;
  n && qg(
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
function be(t) {
  return sy(t, !1);
}
function nt(t) {
  return sy(t, !0);
}
function sy(t, e) {
  return Ye(t) ? t : new l1(t, e);
}
class l1 {
  constructor(e, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? e : _e(e), this._value = r ? e : Qa(e);
  }
  get value() {
    return iy(this), this._value;
  }
  set value(e) {
    const r = this.__v_isShallow || ns(e) || cs(e);
    e = r ? e : _e(e), xi(e, this._rawValue) && (this._rawValue = e, this._value = r ? e : Qa(e), wl(this, 4, e));
  }
}
function x(t) {
  return Ye(t) ? t.value : t;
}
const u1 = {
  get: (t, e, r) => x(Reflect.get(t, e, r)),
  set: (t, e, r, n) => {
    const i = t[e];
    return Ye(i) && !Ye(r) ? (i.value = r, !0) : Reflect.set(t, e, r, n);
  }
};
function ay(t) {
  return hn(t) ? t : new Proxy(t, u1);
}
function df(t) {
  process.env.NODE_ENV !== "production" && !Xl(t) && vn("toRefs() expects a reactive object but received a plain one.");
  const e = le(t) ? new Array(t.length) : {};
  for (const r in t)
    e[r] = oy(t, r);
  return e;
}
class c1 {
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
    return jb(_e(this._object), this._key);
  }
}
class f1 {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function xl(t, e, r) {
  return Ye(t) ? t : me(t) ? new f1(t) : Be(t) && arguments.length > 1 ? oy(t, e, r) : be(t);
}
function oy(t, e, r) {
  const n = t[e];
  return Ye(n) ? n : new c1(t, e, r);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const is = [];
function Ol(t) {
  is.push(t);
}
function Ml() {
  is.pop();
}
function q(t, ...e) {
  Hn();
  const r = is.length ? is[is.length - 1].component : null, n = r && r.appContext.config.warnHandler, i = h1();
  if (n)
    $n(
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
          ({ vnode: s }) => `at <${zu(r, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...d1(i)), console.warn(...s);
  }
  zn();
}
function h1() {
  let t = is[is.length - 1];
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
function d1(t) {
  const e = [];
  return t.forEach((r, n) => {
    e.push(...n === 0 ? [] : [`
`], ...p1(r));
  }), e;
}
function p1({ vnode: t, recurseCount: e }) {
  const r = e > 0 ? `... (${e} recursive calls)` : "", n = t.component ? t.component.parent == null : !1, i = ` at <${zu(
    t.component,
    t.type,
    n
  )}`, s = ">" + r;
  return t.props ? [i, ...m1(t.props), s] : [i + s];
}
function m1(t) {
  const e = [], r = Object.keys(t);
  return r.slice(0, 3).forEach((n) => {
    e.push(...ly(n, t[n]));
  }), r.length > 3 && e.push(" ..."), e;
}
function ly(t, e, r) {
  return it(e) ? (e = JSON.stringify(e), r ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? r ? e : [`${t}=${e}`] : Ye(e) ? (e = ly(t, _e(e.value), !0), r ? e : [`${t}=Ref<`, e, ">"]) : me(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = _e(e), r ? e : [`${t}=`, e]);
}
function g1(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? q(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && q(`${e} is NaN - the duration expression might be incorrect.`));
}
const vh = {
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
function $n(t, e, r, n) {
  try {
    return n ? t(...n) : t();
  } catch (i) {
    vo(i, e, r);
  }
}
function Nr(t, e, r, n) {
  if (me(t)) {
    const i = $n(t, e, r, n);
    return i && ch(i) && i.catch((s) => {
      vo(s, e, r);
    }), i;
  }
  if (le(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++)
      i.push(Nr(t[s], e, r, n));
    return i;
  } else
    process.env.NODE_ENV !== "production" && q(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
    );
}
function vo(t, e, r, n = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const a = e.proxy, o = process.env.NODE_ENV !== "production" ? vh[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
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
      Hn(), $n(
        l,
        null,
        10,
        [t, a, o]
      ), zn();
      return;
    }
  }
  y1(t, r, i, n);
}
function y1(t, e, r, n = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = vh[e];
    if (r && Ol(r), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), r && Ml(), n)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let eo = !1, pf = !1;
const Bt = [];
let sn = 0;
const Us = [];
let Dn = null, ii = 0;
const uy = /* @__PURE__ */ Promise.resolve();
let _h = null;
const v1 = 100;
function Kl(t) {
  const e = _h || uy;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function _1(t) {
  let e = sn + 1, r = Bt.length;
  for (; e < r; ) {
    const n = e + r >>> 1, i = Bt[n], s = to(i);
    s < t || s === t && i.pre ? e = n + 1 : r = n;
  }
  return e;
}
function Uu(t) {
  (!Bt.length || !Bt.includes(
    t,
    eo && t.allowRecurse ? sn + 1 : sn
  )) && (t.id == null ? Bt.push(t) : Bt.splice(_1(t.id), 0, t), cy());
}
function cy() {
  !eo && !pf && (pf = !0, _h = uy.then(dy));
}
function b1(t) {
  const e = Bt.indexOf(t);
  e > sn && Bt.splice(e, 1);
}
function fy(t) {
  le(t) ? Us.push(...t) : (!Dn || !Dn.includes(
    t,
    t.allowRecurse ? ii + 1 : ii
  )) && Us.push(t), cy();
}
function Cd(t, e, r = eo ? sn + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); r < Bt.length; r++) {
    const n = Bt[r];
    if (n && n.pre) {
      if (t && n.id !== t.uid || process.env.NODE_ENV !== "production" && bh(e, n))
        continue;
      Bt.splice(r, 1), r--, n();
    }
  }
}
function hy(t) {
  if (Us.length) {
    const e = [...new Set(Us)].sort(
      (r, n) => to(r) - to(n)
    );
    if (Us.length = 0, Dn) {
      Dn.push(...e);
      return;
    }
    for (Dn = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ii = 0; ii < Dn.length; ii++)
      process.env.NODE_ENV !== "production" && bh(t, Dn[ii]) || Dn[ii]();
    Dn = null, ii = 0;
  }
}
const to = (t) => t.id == null ? 1 / 0 : t.id, E1 = (t, e) => {
  const r = to(t) - to(e);
  if (r === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return r;
};
function dy(t) {
  pf = !1, eo = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Bt.sort(E1);
  const e = process.env.NODE_ENV !== "production" ? (r) => bh(t, r) : yt;
  try {
    for (sn = 0; sn < Bt.length; sn++) {
      const r = Bt[sn];
      if (r && r.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(r))
          continue;
        $n(r, null, 14);
      }
    }
  } finally {
    sn = 0, Bt.length = 0, hy(t), eo = !1, _h = null, (Bt.length || Us.length) && dy(t);
  }
}
function bh(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const r = t.get(e);
    if (r > v1) {
      const n = e.ownerInstance, i = n && Lh(n.type);
      return vo(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, r + 1);
  }
}
let vi = !1;
const Ps = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && ($u().__VUE_HMR_RUNTIME__ = {
  createRecord: dc(py),
  rerender: dc(x1),
  reload: dc(O1)
});
const fs = /* @__PURE__ */ new Map();
function S1(t) {
  const e = t.type.__hmrId;
  let r = fs.get(e);
  r || (py(e, t.type), r = fs.get(e)), r.instances.add(t);
}
function w1(t) {
  fs.get(t.type.__hmrId).instances.delete(t);
}
function py(t, e) {
  return fs.has(t) ? !1 : (fs.set(t, {
    initialDef: Ra(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ra(t) {
  return Jy(t) ? t.__vccOpts : t;
}
function x1(t, e) {
  const r = fs.get(t);
  !r || (r.initialDef.render = e, [...r.instances].forEach((n) => {
    e && (n.render = e, Ra(n.type).render = e), n.renderCache = [], vi = !0, n.effect.dirty = !0, n.update(), vi = !1;
  }));
}
function O1(t, e) {
  const r = fs.get(t);
  if (!r)
    return;
  e = Ra(e), Ld(r.initialDef, e);
  const n = [...r.instances];
  for (const i of n) {
    const s = Ra(i.type);
    Ps.has(s) || (s !== r.initialDef && Ld(s, e), Ps.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Ps.add(s), i.ceReload(e.styles), Ps.delete(s)) : i.parent ? (i.parent.effect.dirty = !0, Uu(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  fy(() => {
    for (const i of n)
      Ps.delete(
        Ra(i.type)
      );
  });
}
function Ld(t, e) {
  et(t, e);
  for (const r in t)
    r !== "__file" && !(r in e) && delete t[r];
}
function dc(t) {
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
let Wr, wa = [], mf = !1;
function _o(t, ...e) {
  Wr ? Wr.emit(t, ...e) : mf || wa.push({ event: t, args: e });
}
function Eh(t, e) {
  var r, n;
  Wr = t, Wr ? (Wr.enabled = !0, wa.forEach(({ event: i, args: s }) => Wr.emit(i, ...s)), wa = []) : typeof window < "u" && window.HTMLElement && !((n = (r = window.navigator) == null ? void 0 : r.userAgent) != null && n.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Eh(s, e);
  }), setTimeout(() => {
    Wr || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, mf = !0, wa = []);
  }, 3e3)) : (mf = !0, wa = []);
}
function M1(t, e) {
  _o("app:init", t, e, {
    Fragment: Ue,
    Text: Eo,
    Comment: Nt,
    Static: Tl
  });
}
function T1(t) {
  _o("app:unmount", t);
}
const N1 = /* @__PURE__ */ Sh(
  "component:added"
), my = /* @__PURE__ */ Sh("component:updated"), C1 = /* @__PURE__ */ Sh(
  "component:removed"
), L1 = (t) => {
  Wr && typeof Wr.cleanupBuffer == "function" && !Wr.cleanupBuffer(t) && C1(t);
};
/*! #__NO_SIDE_EFFECTS__ */
function Sh(t) {
  return (e) => {
    _o(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const P1 = /* @__PURE__ */ gy(
  "perf:start"
), k1 = /* @__PURE__ */ gy(
  "perf:end"
);
function gy(t) {
  return (e, r, n) => {
    _o(t, e.appContext.app, e.uid, e, r, n);
  };
}
function A1(t, e, r) {
  _o(
    "component:emit",
    t.appContext.app,
    t,
    e,
    r
  );
}
function D1(t, e, ...r) {
  if (t.isUnmounted)
    return;
  const n = t.vnode.props || Ze;
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
        me(h) && (h(...r) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = r;
  const s = e.startsWith("update:"), a = s && e.slice(7);
  if (a && a in n) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`, { number: c, trim: h } = n[f] || Ze;
    h && (i = r.map((d) => it(d) ? d.trim() : d)), c && (i = r.map(xb));
  }
  if (process.env.NODE_ENV !== "production" && A1(t, e, i), process.env.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && n[zi(f)] && q(
      `Event "${f}" is emitted in component ${zu(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${lr(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = n[o = zi(e)] || n[o = zi(mr(e))];
  !l && s && (l = n[o = zi(lr(e))]), l && Nr(
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
    t.emitted[o] = !0, Nr(
      u,
      t,
      6,
      i
    );
  }
}
function yy(t, e, r = !1) {
  const n = e.emitsCache, i = n.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!me(t)) {
    const l = (u) => {
      const f = yy(u, e, !0);
      f && (o = !0, et(a, f));
    };
    !r && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Be(t) && n.set(t, null), null) : (le(s) ? s.forEach((l) => a[l] = null) : et(a, s), Be(t) && n.set(t, a), a);
}
function Bu(t, e) {
  return !t || !yo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Ae(t, e[0].toLowerCase() + e.slice(1)) || Ae(t, lr(e)) || Ae(t, e));
}
let ht = null, vy = null;
function Zl(t) {
  const e = ht;
  return ht = t, vy = t && t.type.__scopeId || null, e;
}
function _i(t, e = ht, r) {
  if (!e || t._n)
    return t;
  const n = (...i) => {
    n._d && Hd(-1);
    const s = Zl(e);
    let a;
    try {
      a = t(...i);
    } finally {
      Zl(s), n._d && Hd(1);
    }
    return process.env.NODE_ENV !== "production" && my(e), a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
let gf = !1;
function Jl() {
  gf = !0;
}
function pc(t) {
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
  } = t, g = Zl(t);
  let y, v;
  process.env.NODE_ENV !== "production" && (gf = !1);
  try {
    if (r.shapeFlag & 4) {
      const O = i || n, N = process.env.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(O, {
        get(M, k, A) {
          return q(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, k, A);
        }
      }) : O;
      y = Br(
        u.call(
          N,
          O,
          f,
          process.env.NODE_ENV !== "production" ? Rn(c) : c,
          d,
          h,
          p
        )
      ), v = o;
    } else {
      const O = e;
      process.env.NODE_ENV !== "production" && o === c && Jl(), y = Br(
        O.length > 1 ? O(
          process.env.NODE_ENV !== "production" ? Rn(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Jl(), o;
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : O(
          process.env.NODE_ENV !== "production" ? Rn(c) : c,
          null
        )
      ), v = e.props ? o : I1(o);
    }
  } catch (O) {
    Va.length = 0, vo(O, t, 1), y = ee(Nt);
  }
  let b = y, E;
  if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([b, E] = _y(y)), v && m !== !1) {
    const O = Object.keys(v), { shapeFlag: N } = b;
    if (O.length) {
      if (N & 7)
        s && O.some(zl) && (v = R1(
          v,
          s
        )), b = _n(b, v);
      else if (process.env.NODE_ENV !== "production" && !gf && b.type !== Nt) {
        const M = Object.keys(o), k = [], A = [];
        for (let C = 0, R = M.length; C < R; C++) {
          const I = M[C];
          yo(I) ? zl(I) || k.push(I[2].toLowerCase() + I.slice(3)) : A.push(I);
        }
        A.length && q(
          `Extraneous non-props attributes (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), k.length && q(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return r.dirs && (process.env.NODE_ENV !== "production" && !Pd(b) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), b = _n(b), b.dirs = b.dirs ? b.dirs.concat(r.dirs) : r.dirs), r.transition && (process.env.NODE_ENV !== "production" && !Pd(b) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), b.transition = r.transition), process.env.NODE_ENV !== "production" && E ? E(b) : y = b, Zl(g), y;
}
const _y = (t) => {
  const e = t.children, r = t.dynamicChildren, n = wh(e, !1);
  if (n) {
    if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048)
      return _y(n);
  } else
    return [t, void 0];
  const i = e.indexOf(n), s = r ? r.indexOf(n) : -1, a = (o) => {
    e[i] = o, r && (s > -1 ? r[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...r, o]));
  };
  return [Br(n), a];
};
function wh(t, e = !0) {
  let r;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (ea(i)) {
      if (i.type !== Nt || i.children === "v-if") {
        if (r)
          return;
        if (r = i, process.env.NODE_ENV !== "production" && e && r.patchFlag > 0 && r.patchFlag & 2048)
          return wh(r.children);
      }
    } else
      return;
  }
  return r;
}
const I1 = (t) => {
  let e;
  for (const r in t)
    (r === "class" || r === "style" || yo(r)) && ((e || (e = {}))[r] = t[r]);
  return e;
}, R1 = (t, e) => {
  const r = {};
  for (const n in t)
    (!zl(n) || !(n.slice(9) in e)) && (r[n] = t[n]);
  return r;
}, Pd = (t) => t.shapeFlag & 7 || t.type === Nt;
function $1(t, e, r) {
  const { props: n, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && vi || e.dirs || e.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? kd(n, a, u) : !!a;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const h = f[c];
        if (a[h] !== n[h] && !Bu(u, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : n === a ? !1 : n ? a ? kd(n, a, u) : !0 : !!a;
  return !1;
}
function kd(t, e, r) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (e[s] !== t[s] && !Bu(r, s))
      return !0;
  }
  return !1;
}
function F1({ vnode: t, parent: e }, r) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
}
const yf = "components", V1 = "directives";
function j1(t, e) {
  return by(yf, t, !0, e) || t;
}
const G1 = Symbol.for("v-ndc");
function xh(t) {
  return by(V1, t);
}
function by(t, e, r = !0, n = !1) {
  const i = ht || St;
  if (i) {
    const s = i.type;
    if (t === yf) {
      const o = Lh(
        s,
        !1
      );
      if (o && (o === e || o === mr(e) || o === us(mr(e))))
        return s;
    }
    const a = Ad(i[t] || s[t], e) || Ad(i.appContext[t], e);
    if (!a && n)
      return s;
    if (process.env.NODE_ENV !== "production" && r && !a) {
      const o = t === yf ? `
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
  return t && (t[e] || t[mr(e)] || t[us(mr(e))]);
}
const U1 = (t) => t.__isSuspense;
function B1(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : fy(t);
}
const W1 = Symbol.for("v-scx"), q1 = () => {
  {
    const t = Ws(W1);
    return t || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function yr(t, e) {
  return Oh(t, null, e);
}
const Yo = {};
function tt(t, e, r) {
  return process.env.NODE_ENV !== "production" && !me(e) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Oh(t, e, r);
}
function Oh(t, e, {
  immediate: r,
  deep: n,
  flush: i,
  once: s,
  onTrack: a,
  onTrigger: o
} = Ze) {
  if (e && s) {
    const M = e;
    e = (...k) => {
      M(...k), N();
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
  }, u = St, f = (M) => n === !0 ? M : Zi(M, n === !1 ? 1 : void 0);
  let c, h = !1, d = !1;
  if (Ye(t) ? (c = () => t.value, h = ns(t)) : hn(t) ? (c = () => f(t), h = !0) : le(t) ? (d = !0, h = t.some((M) => hn(M) || ns(M)), c = () => t.map((M) => {
    if (Ye(M))
      return M.value;
    if (hn(M))
      return f(M);
    if (me(M))
      return $n(M, u, 2);
    process.env.NODE_ENV !== "production" && l(M);
  })) : me(t) ? e ? c = () => $n(t, u, 2) : c = () => (p && p(), Nr(
    t,
    u,
    3,
    [m]
  )) : (c = yt, process.env.NODE_ENV !== "production" && l(t)), e && n) {
    const M = c;
    c = () => Zi(M());
  }
  let p, m = (M) => {
    p = E.onStop = () => {
      $n(M, u, 4), p = E.onStop = void 0;
    };
  }, g;
  if (qu)
    if (m = yt, e ? r && Nr(e, u, 3, [
      c(),
      d ? [] : void 0,
      m
    ]) : c(), i === "sync") {
      const M = q1();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return yt;
  let y = d ? new Array(t.length).fill(Yo) : Yo;
  const v = () => {
    if (!(!E.active || !E.dirty))
      if (e) {
        const M = E.run();
        (n || h || (d ? M.some((k, A) => xi(k, y[A])) : xi(M, y))) && (p && p(), Nr(e, u, 3, [
          M,
          y === Yo ? void 0 : d && y[0] === Yo ? [] : y,
          m
        ]), y = M);
      } else
        E.run();
  };
  v.allowRecurse = !!e;
  let b;
  i === "sync" ? b = v : i === "post" ? b = () => ar(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), b = () => Uu(v));
  const E = new dh(c, yt, b), O = Gg(), N = () => {
    E.stop(), O && uh(O.effects, E);
  };
  return process.env.NODE_ENV !== "production" && (E.onTrack = a, E.onTrigger = o), e ? r ? v() : y = E.run() : i === "post" ? ar(
    E.run.bind(E),
    u && u.suspense
  ) : E.run(), g && g.push(N), N;
}
function H1(t, e, r) {
  const n = this.proxy, i = it(t) ? t.includes(".") ? Ey(n, t) : () => n[t] : t.bind(n, n);
  let s;
  me(e) ? s = e : (s = e.handler, r = e);
  const a = wo(this), o = Oh(i, s.bind(n), r);
  return a(), o;
}
function Ey(t, e) {
  const r = e.split(".");
  return () => {
    let n = t;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
function Zi(t, e, r = 0, n) {
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
    Zi(t.value, e, r, n);
  else if (le(t))
    for (let i = 0; i < t.length; i++)
      Zi(t[i], e, r, n);
  else if (Ag(t) || es(t))
    t.forEach((i) => {
      Zi(i, e, r, n);
    });
  else if (Ig(t))
    for (const i in t)
      Zi(t[i], e, r, n);
  return t;
}
function Sy(t) {
  Eb(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function Ql(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), t;
  const r = Hu(ht) || ht.proxy, n = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Ze] = e[i];
    s && (me(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Zi(a), n.push({
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
function $i(t, e, r, n) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[n];
    l && (Hn(), Nr(l, r, 8, [
      t.el,
      o,
      t,
      e
    ]), zn());
  }
}
const si = Symbol("_leaveCb"), Xo = Symbol("_enterCb");
function z1() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return vr(() => {
    t.isMounted = !0;
  }), Ty(() => {
    t.isUnmounting = !0;
  }), t;
}
const br = [Function, Array], wy = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: br,
  onEnter: br,
  onAfterEnter: br,
  onEnterCancelled: br,
  onBeforeLeave: br,
  onLeave: br,
  onAfterLeave: br,
  onLeaveCancelled: br,
  onBeforeAppear: br,
  onAppear: br,
  onAfterAppear: br,
  onAppearCancelled: br
}, Y1 = {
  name: "BaseTransition",
  props: wy,
  setup(t, { slots: e }) {
    const r = So(), n = z1();
    return () => {
      const i = e.default && Oy(e.default(), !0);
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
      if (process.env.NODE_ENV !== "production" && o && o !== "in-out" && o !== "out-in" && o !== "default" && q(`invalid <transition> mode: ${o}`), n.isLeaving)
        return mc(s);
      const l = Dd(s);
      if (!l)
        return mc(s);
      const u = vf(
        l,
        a,
        n,
        r
      );
      _f(l, u);
      const f = r.subTree, c = f && Dd(f);
      if (c && c.type !== Nt && !Ki(l, c)) {
        const h = vf(
          c,
          a,
          n,
          r
        );
        if (_f(c, h), o === "out-in")
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, r.update.active !== !1 && (r.effect.dirty = !0, r.update());
          }, mc(s);
        o === "in-out" && l.type !== Nt && (h.delayLeave = (d, p, m) => {
          const g = xy(
            n,
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
}, X1 = Y1;
function xy(t, e) {
  const { leavingVNodes: r } = t;
  let n = r.get(e.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(e.type, n)), n;
}
function vf(t, e, r, n) {
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
    onAfterAppear: y,
    onAppearCancelled: v
  } = e, b = String(t.key), E = xy(r, t), O = (k, A) => {
    k && Nr(
      k,
      n,
      9,
      A
    );
  }, N = (k, A) => {
    const C = A[1];
    O(k, A), le(k) ? k.every((R) => R.length <= 1) && C() : k.length <= 1 && C();
  }, M = {
    mode: s,
    persisted: a,
    beforeEnter(k) {
      let A = o;
      if (!r.isMounted)
        if (i)
          A = m || o;
        else
          return;
      k[si] && k[si](
        !0
      );
      const C = E[b];
      C && Ki(t, C) && C.el[si] && C.el[si](), O(A, [k]);
    },
    enter(k) {
      let A = l, C = u, R = f;
      if (!r.isMounted)
        if (i)
          A = g || l, C = y || u, R = v || f;
        else
          return;
      let I = !1;
      const Q = k[Xo] = (ve) => {
        I || (I = !0, ve ? O(R, [k]) : O(C, [k]), M.delayedLeave && M.delayedLeave(), k[Xo] = void 0);
      };
      A ? N(A, [k, Q]) : Q();
    },
    leave(k, A) {
      const C = String(t.key);
      if (k[Xo] && k[Xo](
        !0
      ), r.isUnmounting)
        return A();
      O(c, [k]);
      let R = !1;
      const I = k[si] = (Q) => {
        R || (R = !0, A(), Q ? O(p, [k]) : O(d, [k]), k[si] = void 0, E[C] === t && delete E[C]);
      };
      E[C] = t, h ? N(h, [k, I]) : I();
    },
    clone(k) {
      return vf(k, e, r, n);
    }
  };
  return M;
}
function mc(t) {
  if (bo(t))
    return t = _n(t), t.children = null, t;
}
function Dd(t) {
  if (!bo(t))
    return t;
  if (process.env.NODE_ENV !== "production" && t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: r } = t;
  if (r) {
    if (e & 16)
      return r[0];
    if (e & 32 && me(r.default))
      return r.default();
  }
}
function _f(t, e) {
  t.shapeFlag & 6 && t.component ? _f(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Oy(t, e = !1, r) {
  let n = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    const o = r == null ? a.key : String(r) + String(a.key != null ? a.key : s);
    a.type === Ue ? (a.patchFlag & 128 && i++, n = n.concat(
      Oy(a.children, e, o)
    )) : (e || a.type !== Nt) && n.push(o != null ? _n(a, { key: o }) : a);
  }
  if (i > 1)
    for (let s = 0; s < n.length; s++)
      n[s].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
function fe(t, e) {
  return me(t) ? /* @__PURE__ */ (() => et({ name: t.name }, e, { setup: t }))() : t;
}
const $a = (t) => !!t.type.__asyncLoader, bo = (t) => t.type.__isKeepAlive;
function K1(t, e) {
  My(t, "a", e);
}
function Z1(t, e) {
  My(t, "da", e);
}
function My(t, e, r = St) {
  const n = t.__wdc || (t.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (Wu(e, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      bo(i.parent.vnode) && J1(n, e, r, i), i = i.parent;
  }
}
function J1(t, e, r, n) {
  const i = Wu(
    e,
    t,
    n,
    !0
  );
  Li(() => {
    uh(n[e], i);
  }, r);
}
function Wu(t, e, r = St, n = !1) {
  if (r) {
    const i = r[t] || (r[t] = []), s = e.__weh || (e.__weh = (...a) => {
      if (r.isUnmounted)
        return;
      Hn();
      const o = wo(r), l = Nr(e, r, t, a);
      return o(), zn(), l;
    });
    return n ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = zi(vh[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Yn = (t) => (e, r = St) => (!qu || t === "sp") && Wu(t, (...n) => e(...n), r), Q1 = Yn("bm"), vr = Yn("m"), eE = Yn("bu"), tE = Yn("u"), Ty = Yn("bum"), Li = Yn("um"), rE = Yn("sp"), nE = Yn(
  "rtg"
), iE = Yn(
  "rtc"
);
function sE(t, e = St) {
  Wu("ec", t, e);
}
function Pr(t, e, r, n) {
  let i;
  const s = r && r[n];
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
  return r && (r[n] = i), i;
}
function Ny(t, e, r = {}, n, i) {
  if (ht.isCE || ht.parent && $a(ht.parent) && ht.parent.isCE)
    return e !== "default" && (r.name = e), ee("slot", r, n && n());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), P();
  const a = s && Cy(s(r)), o = Fe(
    Ue,
    {
      key: r.key || a && a.key || `_${e}`
    },
    a || (n ? n() : []),
    a && t._ === 1 ? 64 : -2
  );
  return !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), s && s._c && (s._d = !0), o;
}
function Cy(t) {
  return t.some((e) => ea(e) ? !(e.type === Nt || e.type === Ue && !Cy(e.children)) : !0) ? t : null;
}
const bf = (t) => t ? Ky(t) ? Hu(t) || t.proxy : bf(t.parent) : null, ss = /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? Rn(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? Rn(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? Rn(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? Rn(t.refs) : t.refs,
  $parent: (t) => bf(t.parent),
  $root: (t) => bf(t.root),
  $emit: (t) => t.emit,
  $options: (t) => Th(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    t.effect.dirty = !0, Uu(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = Kl.bind(t.proxy)),
  $watch: (t) => H1.bind(t)
}), Mh = (t) => t === "_" || t === "$", gc = (t, e) => t !== Ze && !t.__isScriptSetup && Ae(t, e), Ly = {
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
        if (gc(n, e))
          return a[e] = 1, n[e];
        if (i !== Ze && Ae(i, e))
          return a[e] = 2, i[e];
        if ((u = t.propsOptions[0]) && Ae(u, e))
          return a[e] = 3, s[e];
        if (r !== Ze && Ae(r, e))
          return a[e] = 4, r[e];
        Ef && (a[e] = 0);
      }
    }
    const f = ss[e];
    let c, h;
    if (f)
      return e === "$attrs" ? (It(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && Jl()) : process.env.NODE_ENV !== "production" && e === "$slots" && It(t, "get", e), f(t);
    if ((c = o.__cssModules) && (c = c[e]))
      return c;
    if (r !== Ze && Ae(r, e))
      return a[e] = 4, r[e];
    if (h = l.config.globalProperties, Ae(h, e))
      return h[e];
    process.env.NODE_ENV !== "production" && ht && (!it(e) || e.indexOf("__v") !== 0) && (i !== Ze && Mh(e[0]) && Ae(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, r) {
    const { data: n, setupState: i, ctx: s } = t;
    return gc(i, e) ? (i[e] = r, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && Ae(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : n !== Ze && Ae(n, e) ? (n[e] = r, !0) : Ae(t.props, e) ? (process.env.NODE_ENV !== "production" && q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && q(
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
    return !!r[a] || t !== Ze && Ae(t, a) || gc(e, a) || (o = s[0]) && Ae(o, a) || Ae(n, a) || Ae(ss, a) || Ae(i.config.globalProperties, a);
  },
  defineProperty(t, e, r) {
    return r.get != null ? t._.accessCache[e] = 0 : Ae(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r);
  }
};
process.env.NODE_ENV !== "production" && (Ly.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function aE(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(ss).forEach((r) => {
    Object.defineProperty(e, r, {
      configurable: !0,
      enumerable: !1,
      get: () => ss[r](t),
      set: yt
    });
  }), e;
}
function oE(t) {
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
function lE(t) {
  const { ctx: e, setupState: r } = t;
  Object.keys(_e(r)).forEach((n) => {
    if (!r.__isScriptSetup) {
      if (Mh(n[0])) {
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
function Id(t) {
  return le(t) ? t.reduce(
    (e, r) => (e[r] = null, e),
    {}
  ) : t;
}
function uE() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, r) => {
    t[r] ? q(`${e} property "${r}" is already defined in ${t[r]}.`) : t[r] = e;
  };
}
let Ef = !0;
function cE(t) {
  const e = Th(t), r = t.proxy, n = t.ctx;
  Ef = !1, e.beforeCreate && Rd(e.beforeCreate, t, "bc");
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
    beforeDestroy: y,
    beforeUnmount: v,
    destroyed: b,
    unmounted: E,
    render: O,
    renderTracked: N,
    renderTriggered: M,
    errorCaptured: k,
    serverPrefetch: A,
    expose: C,
    inheritAttrs: R,
    components: I,
    directives: Q,
    filters: ve
  } = e, T = process.env.NODE_ENV !== "production" ? uE() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = t.propsOptions;
    if (z)
      for (const K in z)
        T("Props", K);
  }
  if (u && fE(u, n, T), a)
    for (const z in a) {
      const K = a[z];
      me(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(n, z, {
        value: K.bind(r),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[z] = K.bind(r), process.env.NODE_ENV !== "production" && T("Methods", z)) : process.env.NODE_ENV !== "production" && q(
        `Method "${z}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !me(i) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = i.call(r, r);
    if (process.env.NODE_ENV !== "production" && ch(z) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(z))
      process.env.NODE_ENV !== "production" && q("data() should return an object.");
    else if (t.data = ju(z), process.env.NODE_ENV !== "production")
      for (const K in z)
        T("Data", K), Mh(K[0]) || Object.defineProperty(n, K, {
          configurable: !0,
          enumerable: !0,
          get: () => z[K],
          set: yt
        });
  }
  if (Ef = !0, s)
    for (const z in s) {
      const K = s[z], Ce = me(K) ? K.bind(r, r) : me(K.get) ? K.get.bind(r, r) : yt;
      process.env.NODE_ENV !== "production" && Ce === yt && q(`Computed property "${z}" has no getter.`);
      const Pe = !me(K) && me(K.set) ? K.set.bind(r) : process.env.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : yt, dt = pe({
        get: Ce,
        set: Pe
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
      Py(o[z], n, r, z);
  if (l) {
    const z = me(l) ? l.call(r) : l;
    Reflect.ownKeys(z).forEach((K) => {
      Ay(K, z[K]);
    });
  }
  f && Rd(f, t, "c");
  function $(z, K) {
    le(K) ? K.forEach((Ce) => z(Ce.bind(r))) : K && z(K.bind(r));
  }
  if ($(Q1, c), $(vr, h), $(eE, d), $(tE, p), $(K1, m), $(Z1, g), $(sE, k), $(iE, N), $(nE, M), $(Ty, v), $(Li, E), $(rE, A), le(C))
    if (C.length) {
      const z = t.exposed || (t.exposed = {});
      C.forEach((K) => {
        Object.defineProperty(z, K, {
          get: () => r[K],
          set: (Ce) => r[K] = Ce
        });
      });
    } else
      t.exposed || (t.exposed = {});
  O && t.render === yt && (t.render = O), R != null && (t.inheritAttrs = R), I && (t.components = I), Q && (t.directives = Q);
}
function fE(t, e, r = yt) {
  le(t) && (t = Sf(t));
  for (const n in t) {
    const i = t[n];
    let s;
    Be(i) ? "default" in i ? s = Ws(
      i.from || n,
      i.default,
      !0
    ) : s = Ws(i.from || n) : s = Ws(i), Ye(s) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[n] = s, process.env.NODE_ENV !== "production" && r("Inject", n);
  }
}
function Rd(t, e, r) {
  Nr(
    le(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy),
    e,
    r
  );
}
function Py(t, e, r, n) {
  const i = n.includes(".") ? Ey(r, n) : () => r[n];
  if (it(t)) {
    const s = e[t];
    me(s) ? tt(i, s) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (me(t))
    tt(i, t.bind(r));
  else if (Be(t))
    if (le(t))
      t.forEach((s) => Py(s, e, r, n));
    else {
      const s = me(t.handler) ? t.handler.bind(r) : e[t.handler];
      me(s) ? tt(i, s, t) : process.env.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && q(`Invalid watch option: "${n}"`, t);
}
function Th(t) {
  const e = t.type, { mixins: r, extends: n } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !r && !n ? l = e : (l = {}, i.length && i.forEach(
    (u) => eu(l, u, a, !0)
  ), eu(l, e, a)), Be(e) && s.set(e, l), l;
}
function eu(t, e, r, n = !1) {
  const { mixins: i, extends: s } = e;
  s && eu(t, s, r, !0), i && i.forEach(
    (a) => eu(t, a, r, !0)
  );
  for (const a in e)
    if (n && a === "expose")
      process.env.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = hE[a] || r && r[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const hE = {
  data: $d,
  props: Fd,
  emits: Fd,
  methods: xa,
  computed: xa,
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
  components: xa,
  directives: xa,
  watch: pE,
  provide: $d,
  inject: dE
};
function $d(t, e) {
  return e ? t ? function() {
    return et(
      me(t) ? t.call(this, this) : t,
      me(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function dE(t, e) {
  return xa(Sf(t), Sf(e));
}
function Sf(t) {
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
function xa(t, e) {
  return t ? et(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Fd(t, e) {
  return t ? le(t) && le(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : et(
    /* @__PURE__ */ Object.create(null),
    Id(t),
    Id(e != null ? e : {})
  ) : e;
}
function pE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const r = et(/* @__PURE__ */ Object.create(null), t);
  for (const n in e)
    r[n] = Yt(t[n], e[n]);
  return r;
}
function ky() {
  return {
    app: null,
    config: {
      isNativeTag: _b,
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
function gE(t, e) {
  return function(n, i = null) {
    me(n) || (n = et({}, n)), i != null && !Be(i) && (process.env.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), i = null);
    const s = ky(), a = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = s.app = {
      _uid: mE++,
      _component: n,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Kd,
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
        return process.env.NODE_ENV !== "production" && Nf(u, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[u] && q(`Component "${u}" has already been registered in target app.`), s.components[u] = f, l) : s.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && Sy(u), f ? (process.env.NODE_ENV !== "production" && s.directives[u] && q(`Directive "${u}" has already been registered in target app.`), s.directives[u] = f, l) : s.directives[u];
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
          const h = ee(n, i);
          return h.appContext = s, c === !0 ? c = "svg" : c === !1 && (c = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            t(
              _n(h),
              u,
              c
            );
          }), f && e ? e(h, u) : t(h, u, c), o = !0, l._container = u, u.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = h.component, M1(l, Kd)), Hu(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o ? (t(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, T1(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
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
    let r = St.provides;
    const n = St.parent && St.parent.provides;
    n === r && (r = St.provides = Object.create(n)), r[t] = e;
  }
}
function Ws(t, e, r = !1) {
  const n = St || ht;
  if (n || Bs) {
    const i = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Bs._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return r && me(e) ? e.call(n && n.proxy) : e;
    process.env.NODE_ENV !== "production" && q(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function yE() {
  return !!(St || ht || Bs);
}
const Dy = {}, Iy = () => Object.create(Dy), Ry = (t) => Object.getPrototypeOf(t) === Dy;
function vE(t, e, r, n = !1) {
  const i = {}, s = Iy();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), $y(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && Vy(e || {}, i, t), r ? t.props = n ? i : s1(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function _E(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function bE(t, e, r, n) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = _e(i), [l] = t.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && _E(t)) && (n || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let h = f[c];
        if (Bu(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (Ae(s, h))
            d !== s[h] && (s[h] = d, u = !0);
          else {
            const p = mr(h);
            i[p] = wf(
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
    $y(t, e, i, s) && (u = !0);
    let f;
    for (const c in o)
      (!e || !Ae(e, c) && ((f = lr(c)) === c || !Ae(e, f))) && (l ? r && (r[c] !== void 0 || r[f] !== void 0) && (i[c] = wf(
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
  u && fn(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && Vy(e || {}, i, t);
}
function $y(t, e, r, n) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (Ia(l))
        continue;
      const u = e[l];
      let f;
      i && Ae(i, f = mr(l)) ? !s || !s.includes(f) ? r[f] = u : (o || (o = {}))[f] = u : Bu(t.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, a = !0);
    }
  if (s) {
    const l = _e(r), u = o || Ze;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      r[c] = wf(
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
function wf(t, e, r, n, i, s) {
  const a = t[r];
  if (a != null) {
    const o = Ae(a, "default");
    if (o && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && me(l)) {
        const { propsDefaults: u } = i;
        if (r in u)
          n = u[r];
        else {
          const f = wo(i);
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
function Fy(t, e, r = !1) {
  const n = e.propsCache, i = n.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!me(t)) {
    const f = (c) => {
      l = !0;
      const [h, d] = Fy(c, e, !0);
      et(a, h), d && o.push(...d);
    };
    !r && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !l)
    return Be(t) && n.set(t, Gs), Gs;
  if (le(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !it(s[f]) && q("props must be strings when using array syntax.", s[f]);
      const c = mr(s[f]);
      Vd(c) && (a[c] = Ze);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Be(s) && q("invalid props options", s);
    for (const f in s) {
      const c = mr(f);
      if (Vd(c)) {
        const h = s[f], d = a[c] = le(h) || me(h) ? { type: h } : et({}, h);
        if (d) {
          const p = Gd(Boolean, d.type), m = Gd(String, d.type);
          d[0] = p > -1, d[1] = m < 0 || p < m, (p > -1 || Ae(d, "default")) && o.push(c);
        }
      }
    }
  }
  const u = [a, o];
  return Be(t) && n.set(t, u), u;
}
function Vd(t) {
  return t[0] !== "$" && !Ia(t) ? !0 : (process.env.NODE_ENV !== "production" && q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function xf(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function jd(t, e) {
  return xf(t) === xf(e);
}
function Gd(t, e) {
  return le(e) ? e.findIndex((r) => jd(r, t)) : me(e) && jd(e, t) ? 0 : -1;
}
function Vy(t, e, r) {
  const n = _e(e), i = r.propsOptions[0];
  for (const s in i) {
    let a = i[s];
    a != null && EE(
      s,
      n[s],
      a,
      process.env.NODE_ENV !== "production" ? Rn(n) : n,
      !Ae(t, s) && !Ae(t, lr(s))
    );
  }
}
function EE(t, e, r, n, i) {
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
        const { valid: d, expectedType: p } = wE(e, f[h]);
        c.push(p || ""), u = d;
      }
      if (!u) {
        q(xE(t, e, c));
        return;
      }
    }
    o && !o(e, n) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const SE = /* @__PURE__ */ qn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function wE(t, e) {
  let r;
  const n = xf(e);
  if (SE(n)) {
    const i = typeof t;
    r = i === n.toLowerCase(), !r && i === "object" && (r = t instanceof e);
  } else
    n === "Object" ? r = Be(t) : n === "Array" ? r = le(t) : n === "null" ? r = t === null : r = t instanceof e;
  return {
    valid: r,
    expectedType: n
  };
}
function xE(t, e, r) {
  if (r.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${t}". Expected ${r.map(us).join(" | ")}`;
  const i = r[0], s = fh(e), a = Ud(e, i), o = Ud(e, s);
  return r.length === 1 && Bd(i) && !OE(i, s) && (n += ` with value ${a}`), n += `, got ${s} `, Bd(s) && (n += `with value ${o}.`), n;
}
function Ud(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Bd(t) {
  return ["string", "number", "boolean"].some((r) => t.toLowerCase() === r);
}
function OE(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const jy = (t) => t[0] === "_" || t === "$stable", Nh = (t) => le(t) ? t.map(Br) : [Br(t)], ME = (t, e, r) => {
  if (e._n)
    return e;
  const n = _i((...i) => (process.env.NODE_ENV !== "production" && St && (!r || r.root === St.root) && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Nh(e(...i))), r);
  return n._c = !1, n;
}, Gy = (t, e, r) => {
  const n = t._ctx;
  for (const i in t) {
    if (jy(i))
      continue;
    const s = t[i];
    if (me(s))
      e[i] = ME(i, s, n);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Nh(s);
      e[i] = () => a;
    }
  }
}, Uy = (t, e) => {
  process.env.NODE_ENV !== "production" && !bo(t.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const r = Nh(e);
  t.slots.default = () => r;
}, TE = (t, e) => {
  const r = t.slots = Iy();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (et(r, e), Rg(r, "_", n)) : Gy(e, r);
  } else
    e && Uy(t, e);
}, NE = (t, e, r) => {
  const { vnode: n, slots: i } = t;
  let s = !0, a = Ze;
  if (n.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && vi ? (et(i, e), fn(t, "set", "$slots")) : r && o === 1 ? s = !1 : (et(i, e), !r && o === 1 && delete i._) : (s = !e.$stable, Gy(e, i)), a = e;
  } else
    e && (Uy(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !jy(o) && a[o] == null && delete i[o];
};
function Of(t, e, r, n, i = !1) {
  if (le(t)) {
    t.forEach(
      (h, d) => Of(
        h,
        e && (le(e) ? e[d] : e),
        r,
        n,
        i
      )
    );
    return;
  }
  if ($a(n) && !i)
    return;
  const s = n.shapeFlag & 4 ? Hu(n.component) || n.component.proxy : n.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, f = o.refs === Ze ? o.refs = {} : o.refs, c = o.setupState;
  if (u != null && u !== l && (it(u) ? (f[u] = null, Ae(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), me(l))
    $n(l, o, 12, [a, f]);
  else {
    const h = it(l), d = Ye(l);
    if (h || d) {
      const p = () => {
        if (t.f) {
          const m = h ? Ae(c, l) ? c[l] : f[l] : l.value;
          i ? le(m) && uh(m, s) : le(m) ? m.includes(s) || m.push(s) : h ? (f[l] = [s], Ae(c, l) && (c[l] = f[l])) : (l.value = [s], t.k && (f[t.k] = l.value));
        } else
          h ? (f[l] = a, Ae(c, l) && (c[l] = a)) : d ? (l.value = a, t.k && (f[t.k] = a)) : process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      a ? (p.id = -1, ar(p, r)) : p();
    } else
      process.env.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let da, ci;
function kn(t, e) {
  t.appContext.config.performance && tu() && ci.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && P1(t, e, tu() ? ci.now() : Date.now());
}
function An(t, e) {
  if (t.appContext.config.performance && tu()) {
    const r = `vue-${e}-${t.uid}`, n = r + ":end";
    ci.mark(n), ci.measure(
      `<${zu(t, t.type)}> ${e}`,
      r,
      n
    ), ci.clearMarks(r), ci.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" && k1(t, e, tu() ? ci.now() : Date.now());
}
function tu() {
  return da !== void 0 || (typeof window < "u" && window.performance ? (da = !0, ci = window.performance) : da = !1), da;
}
function CE() {
  const t = [];
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && t.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), $u().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ar = B1;
function LE(t) {
  return PE(t);
}
function PE(t, e) {
  CE();
  const r = $u();
  r.__VUE__ = !0, process.env.NODE_ENV !== "production" && Eh(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
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
  } = t, m = (_, S, D, j = null, G = null, W = null, Z = void 0, B = null, X = process.env.NODE_ENV !== "production" && vi ? !1 : !!S.dynamicChildren) => {
    if (_ === S)
      return;
    _ && !Ki(_, S) && (j = tr(_), Te(_, G, W, !0), _ = null), S.patchFlag === -2 && (X = !1, S.dynamicChildren = null);
    const { type: U, ref: ne, shapeFlag: ue } = S;
    switch (U) {
      case Eo:
        g(_, S, D, j);
        break;
      case Nt:
        y(_, S, D, j);
        break;
      case Tl:
        _ == null ? v(S, D, j, Z) : process.env.NODE_ENV !== "production" && b(_, S, D, Z);
        break;
      case Ue:
        Q(
          _,
          S,
          D,
          j,
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
          j,
          G,
          W,
          Z,
          B,
          X
        ) : ue & 6 ? ve(
          _,
          S,
          D,
          j,
          G,
          W,
          Z,
          B,
          X
        ) : ue & 64 || ue & 128 ? U.process(
          _,
          S,
          D,
          j,
          G,
          W,
          Z,
          B,
          X,
          Lt
        ) : process.env.NODE_ENV !== "production" && q("Invalid VNode type:", U, `(${typeof U})`);
    }
    ne != null && G && Of(ne, _ && _.ref, W, S || _, !S);
  }, g = (_, S, D, j) => {
    if (_ == null)
      n(
        S.el = o(S.children),
        D,
        j
      );
    else {
      const G = S.el = _.el;
      S.children !== _.children && u(G, S.children);
    }
  }, y = (_, S, D, j) => {
    _ == null ? n(
      S.el = l(S.children || ""),
      D,
      j
    ) : S.el = _.el;
  }, v = (_, S, D, j) => {
    [_.el, _.anchor] = p(
      _.children,
      S,
      D,
      j,
      _.el,
      _.anchor
    );
  }, b = (_, S, D, j) => {
    if (S.children !== _.children) {
      const G = h(_.anchor);
      O(_), [S.el, S.anchor] = p(
        S.children,
        D,
        G,
        j
      );
    } else
      S.el = _.el, S.anchor = _.anchor;
  }, E = ({ el: _, anchor: S }, D, j) => {
    let G;
    for (; _ && _ !== S; )
      G = h(_), n(_, D, j), _ = G;
    n(S, D, j);
  }, O = ({ el: _, anchor: S }) => {
    let D;
    for (; _ && _ !== S; )
      D = h(_), i(_), _ = D;
    i(S);
  }, N = (_, S, D, j, G, W, Z, B, X) => {
    S.type === "svg" ? Z = "svg" : S.type === "math" && (Z = "mathml"), _ == null ? M(
      S,
      D,
      j,
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
  }, M = (_, S, D, j, G, W, Z, B) => {
    let X, U;
    const { props: ne, shapeFlag: ue, transition: oe, dirs: de } = _;
    if (X = _.el = a(
      _.type,
      W,
      ne && ne.is,
      ne
    ), ue & 8 ? f(X, _.children) : ue & 16 && A(
      _.children,
      X,
      null,
      j,
      G,
      yc(_, W),
      Z,
      B
    ), de && $i(_, null, j, "created"), k(X, _, _.scopeId, Z, j), ne) {
      for (const $e in ne)
        $e !== "value" && !Ia($e) && s(
          X,
          $e,
          null,
          ne[$e],
          W,
          _.children,
          j,
          G,
          De
        );
      "value" in ne && s(X, "value", null, ne.value, W), (U = ne.onVnodeBeforeMount) && tn(U, j, _);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(X, "__vnode", {
      value: _,
      enumerable: !1
    }), Object.defineProperty(X, "__vueParentComponent", {
      value: j,
      enumerable: !1
    })), de && $i(_, null, j, "beforeMount");
    const xe = kE(G, oe);
    xe && oe.beforeEnter(X), n(X, S, D), ((U = ne && ne.onVnodeMounted) || xe || de) && ar(() => {
      U && tn(U, j, _), xe && oe.enter(X), de && $i(_, null, j, "mounted");
    }, G);
  }, k = (_, S, D, j, G) => {
    if (D && d(_, D), j)
      for (let W = 0; W < j.length; W++)
        d(_, j[W]);
    if (G) {
      let W = G.subTree;
      if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = wh(W.children) || W), S === W) {
        const Z = G.vnode;
        k(
          _,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          G.parent
        );
      }
    }
  }, A = (_, S, D, j, G, W, Z, B, X = 0) => {
    for (let U = X; U < _.length; U++) {
      const ne = _[U] = B ? ai(_[U]) : Br(_[U]);
      m(
        null,
        ne,
        S,
        D,
        j,
        G,
        W,
        Z,
        B
      );
    }
  }, C = (_, S, D, j, G, W, Z) => {
    const B = S.el = _.el;
    let { patchFlag: X, dynamicChildren: U, dirs: ne } = S;
    X |= _.patchFlag & 16;
    const ue = _.props || Ze, oe = S.props || Ze;
    let de;
    if (D && Fi(D, !1), (de = oe.onVnodeBeforeUpdate) && tn(de, D, S, _), ne && $i(S, _, D, "beforeUpdate"), D && Fi(D, !0), process.env.NODE_ENV !== "production" && vi && (X = 0, Z = !1, U = null), U ? (R(
      _.dynamicChildren,
      U,
      B,
      D,
      j,
      yc(S, G),
      W
    ), process.env.NODE_ENV !== "production" && Fa(_, S)) : Z || Ce(
      _,
      S,
      B,
      null,
      D,
      j,
      yc(S, G),
      W,
      !1
    ), X > 0) {
      if (X & 16)
        I(
          B,
          S,
          ue,
          oe,
          D,
          j,
          G
        );
      else if (X & 2 && ue.class !== oe.class && s(B, "class", null, oe.class, G), X & 4 && s(B, "style", ue.style, oe.style, G), X & 8) {
        const xe = S.dynamicProps;
        for (let $e = 0; $e < xe.length; $e++) {
          const Je = xe[$e], pt = ue[Je], zt = oe[Je];
          (zt !== pt || Je === "value") && s(
            B,
            Je,
            pt,
            zt,
            G,
            _.children,
            D,
            j,
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
        oe,
        D,
        j,
        G
      );
    ((de = oe.onVnodeUpdated) || ne) && ar(() => {
      de && tn(de, D, S, _), ne && $i(S, _, D, "updated");
    }, j);
  }, R = (_, S, D, j, G, W, Z) => {
    for (let B = 0; B < S.length; B++) {
      const X = _[B], U = S[B], ne = X.el && (X.type === Ue || !Ki(X, U) || X.shapeFlag & 70) ? c(X.el) : D;
      m(
        X,
        U,
        ne,
        null,
        j,
        G,
        W,
        Z,
        !0
      );
    }
  }, I = (_, S, D, j, G, W, Z) => {
    if (D !== j) {
      if (D !== Ze)
        for (const B in D)
          !Ia(B) && !(B in j) && s(
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
      for (const B in j) {
        if (Ia(B))
          continue;
        const X = j[B], U = D[B];
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
      "value" in j && s(_, "value", D.value, j.value, Z);
    }
  }, Q = (_, S, D, j, G, W, Z, B, X) => {
    const U = S.el = _ ? _.el : o(""), ne = S.anchor = _ ? _.anchor : o("");
    let { patchFlag: ue, dynamicChildren: oe, slotScopeIds: de } = S;
    process.env.NODE_ENV !== "production" && (vi || ue & 2048) && (ue = 0, X = !1, oe = null), de && (B = B ? B.concat(de) : de), _ == null ? (n(U, D, j), n(ne, D, j), A(
      S.children || [],
      D,
      ne,
      G,
      W,
      Z,
      B,
      X
    )) : ue > 0 && ue & 64 && oe && _.dynamicChildren ? (R(
      _.dynamicChildren,
      oe,
      D,
      G,
      W,
      Z,
      B
    ), process.env.NODE_ENV !== "production" ? Fa(_, S) : (S.key != null || G && S === G.subTree) && Fa(
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
  }, ve = (_, S, D, j, G, W, Z, B, X) => {
    S.slotScopeIds = B, _ == null ? S.shapeFlag & 512 ? G.ctx.activate(
      S,
      D,
      j,
      Z,
      X
    ) : T(
      S,
      D,
      j,
      G,
      W,
      Z,
      X
    ) : $(_, S, X);
  }, T = (_, S, D, j, G, W, Z) => {
    const B = _.component = BE(
      _,
      j,
      G
    );
    if (process.env.NODE_ENV !== "production" && B.type.__hmrId && S1(B), process.env.NODE_ENV !== "production" && (Ol(_), kn(B, "mount")), bo(_) && (B.ctx.renderer = Lt), process.env.NODE_ENV !== "production" && kn(B, "init"), qE(B), process.env.NODE_ENV !== "production" && An(B, "init"), B.asyncDep) {
      if (G && G.registerDep(B, z), !_.el) {
        const X = B.subTree = ee(Nt);
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
    process.env.NODE_ENV !== "production" && (Ml(), An(B, "mount"));
  }, $ = (_, S, D) => {
    const j = S.component = _.component;
    if ($1(_, S, D))
      if (j.asyncDep && !j.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ol(S), K(j, S, D), process.env.NODE_ENV !== "production" && Ml();
        return;
      } else
        j.next = S, b1(j.update), j.effect.dirty = !0, j.update();
    else
      S.el = _.el, j.vnode = S;
  }, z = (_, S, D, j, G, W, Z) => {
    const B = () => {
      if (_.isMounted) {
        let { next: ne, bu: ue, u: oe, parent: de, vnode: xe } = _;
        {
          const Tn = By(_);
          if (Tn) {
            ne && (ne.el = xe.el, K(_, ne, Z)), Tn.asyncDep.then(() => {
              _.isUnmounted || B();
            });
            return;
          }
        }
        let $e = ne, Je;
        process.env.NODE_ENV !== "production" && Ol(ne || _.vnode), Fi(_, !1), ne ? (ne.el = xe.el, K(_, ne, Z)) : ne = xe, ue && ha(ue), (Je = ne.props && ne.props.onVnodeBeforeUpdate) && tn(Je, de, ne, xe), Fi(_, !0), process.env.NODE_ENV !== "production" && kn(_, "render");
        const pt = pc(_);
        process.env.NODE_ENV !== "production" && An(_, "render");
        const zt = _.subTree;
        _.subTree = pt, process.env.NODE_ENV !== "production" && kn(_, "patch"), m(
          zt,
          pt,
          c(zt.el),
          tr(zt),
          _,
          G,
          W
        ), process.env.NODE_ENV !== "production" && An(_, "patch"), ne.el = pt.el, $e === null && F1(_, pt.el), oe && ar(oe, G), (Je = ne.props && ne.props.onVnodeUpdated) && ar(
          () => tn(Je, de, ne, xe),
          G
        ), process.env.NODE_ENV !== "production" && my(_), process.env.NODE_ENV !== "production" && Ml();
      } else {
        let ne;
        const { el: ue, props: oe } = S, { bm: de, m: xe, parent: $e } = _, Je = $a(S);
        if (Fi(_, !1), de && ha(de), !Je && (ne = oe && oe.onVnodeBeforeMount) && tn(ne, $e, S), Fi(_, !0), ue && Mn) {
          const pt = () => {
            process.env.NODE_ENV !== "production" && kn(_, "render"), _.subTree = pc(_), process.env.NODE_ENV !== "production" && An(_, "render"), process.env.NODE_ENV !== "production" && kn(_, "hydrate"), Mn(
              ue,
              _.subTree,
              _,
              G,
              null
            ), process.env.NODE_ENV !== "production" && An(_, "hydrate");
          };
          Je ? S.type.__asyncLoader().then(
            () => !_.isUnmounted && pt()
          ) : pt();
        } else {
          process.env.NODE_ENV !== "production" && kn(_, "render");
          const pt = _.subTree = pc(_);
          process.env.NODE_ENV !== "production" && An(_, "render"), process.env.NODE_ENV !== "production" && kn(_, "patch"), m(
            null,
            pt,
            D,
            j,
            _,
            G,
            W
          ), process.env.NODE_ENV !== "production" && An(_, "patch"), S.el = pt.el;
        }
        if (xe && ar(xe, G), !Je && (ne = oe && oe.onVnodeMounted)) {
          const pt = S;
          ar(
            () => tn(ne, $e, pt),
            G
          );
        }
        (S.shapeFlag & 256 || $e && $a($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && ar(_.a, G), _.isMounted = !0, process.env.NODE_ENV !== "production" && N1(_), S = D = j = null;
      }
    }, X = _.effect = new dh(
      B,
      yt,
      () => Uu(U),
      _.scope
    ), U = _.update = () => {
      X.dirty && X.run();
    };
    U.id = _.uid, Fi(_, !0), process.env.NODE_ENV !== "production" && (X.onTrack = _.rtc ? (ne) => ha(_.rtc, ne) : void 0, X.onTrigger = _.rtg ? (ne) => ha(_.rtg, ne) : void 0, U.ownerInstance = _), U();
  }, K = (_, S, D) => {
    S.component = _;
    const j = _.vnode.props;
    _.vnode = S, _.next = null, bE(_, S.props, j, D), NE(_, S.children, D), Hn(), Cd(_), zn();
  }, Ce = (_, S, D, j, G, W, Z, B, X = !1) => {
    const U = _ && _.children, ne = _ ? _.shapeFlag : 0, ue = S.children, { patchFlag: oe, shapeFlag: de } = S;
    if (oe > 0) {
      if (oe & 128) {
        dt(
          U,
          ue,
          D,
          j,
          G,
          W,
          Z,
          B,
          X
        );
        return;
      } else if (oe & 256) {
        Pe(
          U,
          ue,
          D,
          j,
          G,
          W,
          Z,
          B,
          X
        );
        return;
      }
    }
    de & 8 ? (ne & 16 && De(U, G, W), ue !== U && f(D, ue)) : ne & 16 ? de & 16 ? dt(
      U,
      ue,
      D,
      j,
      G,
      W,
      Z,
      B,
      X
    ) : De(U, G, W, !0) : (ne & 8 && f(D, ""), de & 16 && A(
      ue,
      D,
      j,
      G,
      W,
      Z,
      B,
      X
    ));
  }, Pe = (_, S, D, j, G, W, Z, B, X) => {
    _ = _ || Gs, S = S || Gs;
    const U = _.length, ne = S.length, ue = Math.min(U, ne);
    let oe;
    for (oe = 0; oe < ue; oe++) {
      const de = S[oe] = X ? ai(S[oe]) : Br(S[oe]);
      m(
        _[oe],
        de,
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
    ) : A(
      S,
      D,
      j,
      G,
      W,
      Z,
      B,
      X,
      ue
    );
  }, dt = (_, S, D, j, G, W, Z, B, X) => {
    let U = 0;
    const ne = S.length;
    let ue = _.length - 1, oe = ne - 1;
    for (; U <= ue && U <= oe; ) {
      const de = _[U], xe = S[U] = X ? ai(S[U]) : Br(S[U]);
      if (Ki(de, xe))
        m(
          de,
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
    for (; U <= ue && U <= oe; ) {
      const de = _[ue], xe = S[oe] = X ? ai(S[oe]) : Br(S[oe]);
      if (Ki(de, xe))
        m(
          de,
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
      ue--, oe--;
    }
    if (U > ue) {
      if (U <= oe) {
        const de = oe + 1, xe = de < ne ? S[de].el : j;
        for (; U <= oe; )
          m(
            null,
            S[U] = X ? ai(S[U]) : Br(S[U]),
            D,
            xe,
            G,
            W,
            Z,
            B,
            X
          ), U++;
      }
    } else if (U > oe)
      for (; U <= ue; )
        Te(_[U], G, W, !0), U++;
    else {
      const de = U, xe = U, $e = /* @__PURE__ */ new Map();
      for (U = xe; U <= oe; U++) {
        const ut = S[U] = X ? ai(S[U]) : Br(S[U]);
        ut.key != null && (process.env.NODE_ENV !== "production" && $e.has(ut.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), $e.set(ut.key, U));
      }
      let Je, pt = 0;
      const zt = oe - xe + 1;
      let Tn = !1, Ii = 0;
      const en = new Array(zt);
      for (U = 0; U < zt; U++)
        en[U] = 0;
      for (U = de; U <= ue; U++) {
        const ut = _[U];
        if (pt >= zt) {
          Te(ut, G, W, !0);
          continue;
        }
        let rr;
        if (ut.key != null)
          rr = $e.get(ut.key);
        else
          for (Je = xe; Je <= oe; Je++)
            if (en[Je - xe] === 0 && Ki(ut, S[Je])) {
              rr = Je;
              break;
            }
        rr === void 0 ? Te(ut, G, W, !0) : (en[rr - xe] = U + 1, rr >= Ii ? Ii = rr : Tn = !0, m(
          ut,
          S[rr],
          D,
          null,
          G,
          W,
          Z,
          B,
          X
        ), pt++);
      }
      const _r = Tn ? AE(en) : Gs;
      for (Je = _r.length - 1, U = zt - 1; U >= 0; U--) {
        const ut = xe + U, rr = S[ut], Es = ut + 1 < ne ? S[ut + 1].el : j;
        en[U] === 0 ? m(
          null,
          rr,
          D,
          Es,
          G,
          W,
          Z,
          B,
          X
        ) : Tn && (Je < 0 || U !== _r[Je] ? Rt(rr, D, Es, 2) : Je--);
      }
    }
  }, Rt = (_, S, D, j, G = null) => {
    const { el: W, type: Z, transition: B, children: X, shapeFlag: U } = _;
    if (U & 6) {
      Rt(_.component.subTree, S, D, j);
      return;
    }
    if (U & 128) {
      _.suspense.move(S, D, j);
      return;
    }
    if (U & 64) {
      Z.move(_, S, D, Lt);
      return;
    }
    if (Z === Ue) {
      n(W, S, D);
      for (let ue = 0; ue < X.length; ue++)
        Rt(X[ue], S, D, j);
      n(_.anchor, S, D);
      return;
    }
    if (Z === Tl) {
      E(_, S, D);
      return;
    }
    if (j !== 2 && U & 1 && B)
      if (j === 0)
        B.beforeEnter(W), n(W, S, D), ar(() => B.enter(W), G);
      else {
        const { leave: ue, delayLeave: oe, afterLeave: de } = B, xe = () => n(W, S, D), $e = () => {
          ue(W, () => {
            xe(), de && de();
          });
        };
        oe ? oe(W, xe, $e) : $e();
      }
    else
      n(W, S, D);
  }, Te = (_, S, D, j = !1, G = !1) => {
    const {
      type: W,
      props: Z,
      ref: B,
      children: X,
      dynamicChildren: U,
      shapeFlag: ne,
      patchFlag: ue,
      dirs: oe
    } = _;
    if (B != null && Of(B, null, D, _, !0), ne & 256) {
      S.ctx.deactivate(_);
      return;
    }
    const de = ne & 1 && oe, xe = !$a(_);
    let $e;
    if (xe && ($e = Z && Z.onVnodeBeforeUnmount) && tn($e, S, _), ne & 6)
      Zr(_.component, D, j);
    else {
      if (ne & 128) {
        _.suspense.unmount(D, j);
        return;
      }
      de && $i(_, null, S, "beforeUnmount"), ne & 64 ? _.type.remove(
        _,
        S,
        D,
        G,
        Lt,
        j
      ) : U && (W !== Ue || ue > 0 && ue & 64) ? De(
        U,
        S,
        D,
        !1,
        !0
      ) : (W === Ue && ue & 384 || !G && ne & 16) && De(X, S, D), j && Ct(_);
    }
    (xe && ($e = Z && Z.onVnodeUnmounted) || de) && ar(() => {
      $e && tn($e, S, _), de && $i(_, null, S, "unmounted");
    }, D);
  }, Ct = (_) => {
    const { type: S, el: D, anchor: j, transition: G } = _;
    if (S === Ue) {
      process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && G && !G.persisted ? _.children.forEach((Z) => {
        Z.type === Nt ? i(Z.el) : Ct(Z);
      }) : st(D, j);
      return;
    }
    if (S === Tl) {
      O(_);
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
  }, Zr = (_, S, D) => {
    process.env.NODE_ENV !== "production" && _.type.__hmrId && w1(_);
    const { bum: j, scope: G, update: W, subTree: Z, um: B } = _;
    j && ha(j), G.stop(), W && (W.active = !1, Te(Z, _, S, D)), B && ar(B, S), ar(() => {
      _.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), process.env.NODE_ENV !== "production" && L1(_);
  }, De = (_, S, D, j = !1, G = !1, W = 0) => {
    for (let Z = W; Z < _.length; Z++)
      Te(_[Z], S, D, j, G);
  }, tr = (_) => _.shapeFlag & 6 ? tr(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : h(_.anchor || _.el);
  let Jr = !1;
  const On = (_, S, D) => {
    _ == null ? S._vnode && Te(S._vnode, null, null, !0) : m(
      S._vnode || null,
      _,
      S,
      null,
      null,
      null,
      D
    ), Jr || (Jr = !0, Cd(), hy(), Jr = !1), S._vnode = _;
  }, Lt = {
    p: m,
    um: Te,
    m: Rt,
    r: Ct,
    mt: T,
    mc: A,
    pc: Ce,
    pbc: R,
    n: tr,
    o: t
  };
  let Qr, Mn;
  return e && ([Qr, Mn] = e(
    Lt
  )), {
    render: On,
    hydrate: Qr,
    createApp: gE(On, Qr)
  };
}
function yc({ type: t, props: e }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : r;
}
function Fi({ effect: t, update: e }, r) {
  t.allowRecurse = e.allowRecurse = r;
}
function kE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Fa(t, e, r = !1) {
  const n = t.children, i = e.children;
  if (le(n) && le(i))
    for (let s = 0; s < n.length; s++) {
      const a = n[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = ai(i[s]), o.el = a.el), r || Fa(a, o)), o.type === Eo && (o.el = a.el), process.env.NODE_ENV !== "production" && o.type === Nt && !o.el && (o.el = a.el);
    }
}
function AE(t) {
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
function By(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : By(e);
}
const DE = (t) => t.__isTeleport, qs = (t) => t && (t.disabled || t.disabled === ""), Wd = (t) => typeof SVGElement < "u" && t instanceof SVGElement, qd = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Mf = (t, e) => {
  const r = t && t.to;
  if (it(r))
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
    return process.env.NODE_ENV !== "production" && !r && !qs(t) && q(`Invalid Teleport target: ${r}`), r;
}, IE = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, r, n, i, s, a, o, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: h,
      o: { insert: d, querySelector: p, createText: m, createComment: g }
    } = u, y = qs(e.props);
    let { shapeFlag: v, children: b, dynamicChildren: E } = e;
    if (process.env.NODE_ENV !== "production" && vi && (l = !1, E = null), t == null) {
      const O = e.el = process.env.NODE_ENV !== "production" ? g("teleport start") : m(""), N = e.anchor = process.env.NODE_ENV !== "production" ? g("teleport end") : m("");
      d(O, r, n), d(N, r, n);
      const M = e.target = Mf(e.props, p), k = e.targetAnchor = m("");
      M ? (d(k, M), a === "svg" || Wd(M) ? a = "svg" : (a === "mathml" || qd(M)) && (a = "mathml")) : process.env.NODE_ENV !== "production" && !y && q("Invalid Teleport target on mount:", M, `(${typeof M})`);
      const A = (C, R) => {
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
      y ? A(r, N) : M && A(M, k);
    } else {
      e.el = t.el;
      const O = e.anchor = t.anchor, N = e.target = t.target, M = e.targetAnchor = t.targetAnchor, k = qs(t.props), A = k ? r : N, C = k ? O : M;
      if (a === "svg" || Wd(N) ? a = "svg" : (a === "mathml" || qd(N)) && (a = "mathml"), E ? (h(
        t.dynamicChildren,
        E,
        A,
        i,
        s,
        a,
        o
      ), Fa(t, e, !0)) : l || c(
        t,
        e,
        A,
        C,
        i,
        s,
        a,
        o,
        !1
      ), y)
        k ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Ko(
          e,
          r,
          O,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const R = e.target = Mf(
          e.props,
          p
        );
        R ? Ko(
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
        k && Ko(
          e,
          N,
          M,
          u,
          1
        );
    }
    qy(e);
  },
  remove(t, e, r, n, { um: i, o: { remove: s } }, a) {
    const { shapeFlag: o, children: l, anchor: u, targetAnchor: f, target: c, props: h } = t;
    if (c && s(f), a && s(u), o & 16) {
      const d = a || !qs(h);
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
  move: Ko,
  hydrate: RE
};
function Ko(t, e, r, { o: { insert: n }, m: i }, s = 2) {
  s === 0 && n(t.targetAnchor, e, r);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: f } = t, c = s === 2;
  if (c && n(a, e, r), (!c || qs(f)) && l & 16)
    for (let h = 0; h < u.length; h++)
      i(
        u[h],
        e,
        r,
        2
      );
  c && n(o, e, r);
}
function RE(t, e, r, n, i, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l }
}, u) {
  const f = e.target = Mf(
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
    qy(e);
  }
  return e.anchor && a(e.anchor);
}
const Wy = IE;
function qy(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let r = t.children[0].el;
    for (; r && r !== t.targetAnchor; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", e.uid), r = r.nextSibling;
    e.ut();
  }
}
const Ue = Symbol.for("v-fgt"), Eo = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), Tl = Symbol.for("v-stc"), Va = [];
let qr = null;
function P(t = !1) {
  Va.push(qr = t ? null : []);
}
function $E() {
  Va.pop(), qr = Va[Va.length - 1] || null;
}
let ro = 1;
function Hd(t) {
  ro += t;
}
function Hy(t) {
  return t.dynamicChildren = ro > 0 ? qr || Gs : null, $E(), ro > 0 && qr && qr.push(t), t;
}
function V(t, e, r, n, i, s) {
  return Hy(
    L(
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
function Fe(t, e, r, n, i) {
  return Hy(
    ee(
      t,
      e,
      r,
      n,
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
const FE = (...t) => Yy(
  ...t
), zy = ({ key: t }) => t != null ? t : null, Nl = ({
  ref: t,
  ref_key: e,
  ref_for: r
}) => (typeof t == "number" && (t = "" + t), t != null ? it(t) || Ye(t) || me(t) ? { i: ht, r: t, k: e, f: !!r } : t : null);
function L(t, e = null, r = null, n = 0, i = null, s = t === Ue ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && zy(e),
    ref: e && Nl(e),
    scopeId: vy,
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
  return o ? (Ch(l, r), s & 128 && t.normalize(l)) : r && (l.shapeFlag |= it(r) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), ro > 0 && !a && qr && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && qr.push(l), l;
}
const ee = process.env.NODE_ENV !== "production" ? FE : Yy;
function Yy(t, e = null, r = null, n = 0, i = null, s = !1) {
  if ((!t || t === G1) && (process.env.NODE_ENV !== "production" && !t && q(`Invalid vnode type when creating vnode: ${t}.`), t = Nt), ea(t)) {
    const o = _n(
      t,
      e,
      !0
    );
    return r && Ch(o, r), ro > 0 && !s && qr && (o.shapeFlag & 6 ? qr[qr.indexOf(t)] = o : qr.push(o)), o.patchFlag |= -2, o;
  }
  if (Jy(t) && (t = t.__vccOpts), e) {
    e = VE(e);
    let { class: o, style: l } = e;
    o && !it(o) && (e.class = ke(o)), Be(l) && (Xl(l) && !le(l) && (l = et({}, l)), e.style = Ci(l));
  }
  const a = it(t) ? 1 : U1(t) ? 128 : DE(t) ? 64 : Be(t) ? 4 : me(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Xl(t) && (t = _e(t), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), L(
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
function VE(t) {
  return t ? Xl(t) || Ry(t) ? et({}, t) : t : null;
}
function _n(t, e, r = !1) {
  const { props: n, ref: i, patchFlag: s, children: a } = t, o = e ? jE(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && zy(o),
    ref: e && e.ref ? r && i ? le(i) ? i.concat(Nl(e)) : [i, Nl(e)] : Nl(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && le(a) ? a.map(Xy) : a,
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
    ssContent: t.ssContent && _n(t.ssContent),
    ssFallback: t.ssFallback && _n(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Xy(t) {
  const e = _n(t);
  return le(t.children) && (e.children = t.children.map(Xy)), e;
}
function no(t = " ", e = 0) {
  return ee(Eo, null, t, e);
}
function F(t = "", e = !1) {
  return e ? (P(), Fe(Nt, null, t)) : ee(Nt, null, t);
}
function Br(t) {
  return t == null || typeof t == "boolean" ? ee(Nt) : le(t) ? ee(
    Ue,
    null,
    t.slice()
  ) : typeof t == "object" ? ai(t) : ee(Eo, null, String(t));
}
function ai(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : _n(t);
}
function Ch(t, e) {
  let r = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (le(e))
    r = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Ch(t, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = e._;
      !i && !Ry(e) ? e._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    me(e) ? (e = { default: e, _ctx: ht }, r = 32) : (e = String(e), n & 64 ? (r = 16, e = [no(e)]) : r = 8);
  t.children = e, t.shapeFlag |= r;
}
function jE(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    for (const i in n)
      if (i === "class")
        e.class !== n.class && (e.class = ke([e.class, n.class]));
      else if (i === "style")
        e.style = Ci([e.style, n.style]);
      else if (yo(i)) {
        const s = e[i], a = n[i];
        a && s !== a && !(le(s) && s.includes(a)) && (e[i] = s ? [].concat(s, a) : a);
      } else
        i !== "" && (e[i] = n[i]);
  }
  return e;
}
function tn(t, e, r, n = null) {
  Nr(t, e, 7, [
    r,
    n
  ]);
}
const GE = ky();
let UE = 0;
function BE(t, e, r) {
  const n = t.type, i = (e ? e.appContext : t.appContext) || GE, s = {
    uid: UE++,
    vnode: t,
    type: n,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Vg(
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
    propsOptions: Fy(n, i),
    emitsOptions: yy(n, i),
    emit: null,
    emitted: null,
    propsDefaults: Ze,
    inheritAttrs: n.inheritAttrs,
    ctx: Ze,
    data: Ze,
    props: Ze,
    attrs: Ze,
    slots: Ze,
    refs: Ze,
    setupState: Ze,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = aE(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = D1.bind(null, s), t.ce && t.ce(s), s;
}
let St = null;
const So = () => St || ht;
let ru, Tf;
{
  const t = $u(), e = (r, n) => {
    let i;
    return (i = t[r]) || (i = t[r] = []), i.push(n), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  ru = e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => St = r
  ), Tf = e(
    "__VUE_SSR_SETTERS__",
    (r) => qu = r
  );
}
const wo = (t) => {
  const e = St;
  return ru(t), t.scope.on(), () => {
    t.scope.off(), ru(e);
  };
}, zd = () => {
  St && St.scope.off(), ru(null);
}, WE = /* @__PURE__ */ qn("slot,component");
function Nf(t, { isNativeTag: e }) {
  (WE(t) || e(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Ky(t) {
  return t.vnode.shapeFlag & 4;
}
let qu = !1;
function qE(t, e = !1) {
  e && Tf(e);
  const { props: r, children: n } = t.vnode, i = Ky(t);
  vE(t, r, i, e), TE(t, n);
  const s = i ? HE(t, e) : void 0;
  return e && Tf(!1), s;
}
function HE(t, e) {
  var r;
  const n = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Nf(n.name, t.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let a = 0; a < s.length; a++)
        Nf(s[a], t.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let a = 0; a < s.length; a++)
        Sy(s[a]);
    }
    n.compilerOptions && zE() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Ly), process.env.NODE_ENV !== "production" && oE(t);
  const { setup: i } = n;
  if (i) {
    const s = t.setupContext = i.length > 1 ? XE(t) : null, a = wo(t);
    Hn();
    const o = $n(
      i,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? Rn(t.props) : t.props,
        s
      ]
    );
    if (zn(), a(), ch(o)) {
      if (o.then(zd, zd), e)
        return o.then((l) => {
          Yd(t, l, e);
        }).catch((l) => {
          vo(l, t, 0);
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (r = n.name) != null ? r : "Anonymous";
        q(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Yd(t, o, e);
  } else
    Zy(t, e);
}
function Yd(t, e, r) {
  me(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Be(e) ? (process.env.NODE_ENV !== "production" && ea(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = ay(e), process.env.NODE_ENV !== "production" && lE(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Zy(t, r);
}
let Cf;
const zE = () => !Cf;
function Zy(t, e, r) {
  const n = t.type;
  if (!t.render) {
    if (!e && Cf && !n.render) {
      const i = n.template || Th(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && kn(t, "compile");
        const { isCustomElement: s, compilerOptions: a } = t.appContext.config, { delimiters: o, compilerOptions: l } = n, u = et(
          et(
            {
              isCustomElement: s,
              delimiters: o
            },
            a
          ),
          l
        );
        n.render = Cf(i, u), process.env.NODE_ENV !== "production" && An(t, "compile");
      }
    }
    t.render = n.render || yt;
  }
  {
    const i = wo(t);
    Hn();
    try {
      cE(t);
    } finally {
      zn(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !n.render && t.render === yt && !e && (n.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
const Xd = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return Jl(), It(t, "get", ""), t[e];
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
function YE(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, r) {
      return It(t, "get", "$slots"), e[r];
    }
  }));
}
function XE(t) {
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
        return r || (r = new Proxy(t.attrs, Xd));
      },
      get slots() {
        return YE(t);
      },
      get emit() {
        return (n, ...i) => t.emit(n, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, Xd),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function Hu(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(ay(pi(t.exposed)), {
      get(e, r) {
        if (r in e)
          return e[r];
        if (r in ss)
          return ss[r](t);
      },
      has(e, r) {
        return r in e || r in ss;
      }
    }));
}
const KE = /(?:^|[-_])(\w)/g, ZE = (t) => t.replace(KE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Lh(t, e = !0) {
  return me(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function zu(t, e, r = !1) {
  let n = Lh(e);
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
  return n ? ZE(n) : r ? "App" : "Anonymous";
}
function Jy(t) {
  return me(t) && "__vccOpts" in t;
}
const pe = (t, e) => {
  const r = o1(t, e, qu);
  if (process.env.NODE_ENV !== "production") {
    const n = So();
    n && n.appContext.config.warnRecursiveComputed && (r._warnRecursive = !0);
  }
  return r;
};
function Qy(t, e, r) {
  const n = arguments.length;
  return n === 2 ? Be(e) && !le(e) ? ea(e) ? ee(t, null, [e]) : ee(t, e) : ee(t, null, e) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && ea(r) && (r = [r]), ee(t, e, r));
}
function JE() {
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
      ] : hn(c) ? [
        "div",
        {},
        ["span", t, ns(c) ? "ShallowReactive" : "Reactive"],
        "<",
        o(c),
        `>${cs(c) ? " (readonly)" : ""}`
      ] : cs(c) ? [
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
    c.type.props && c.props && h.push(a("props", _e(c.props))), c.setupState !== Ze && h.push(a("setup", c.setupState)), c.data !== Ze && h.push(a("data", _e(c.data)));
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
          ["span", n, d + ": "],
          o(h[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function o(c, h = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", r, JSON.stringify(c)] : typeof c == "boolean" ? ["span", n, c] : Be(c) ? ["object", { object: h ? _e(c) : c }] : ["span", r, String(c)];
  }
  function l(c, h) {
    const d = c.type;
    if (me(d))
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
const Kd = "3.4.25", bi = process.env.NODE_ENV !== "production" ? q : yt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const QE = "http://www.w3.org/2000/svg", eS = "http://www.w3.org/1998/Math/MathML", oi = typeof document < "u" ? document : null, Zd = oi && /* @__PURE__ */ oi.createElement("template"), tS = {
  insert: (t, e, r) => {
    e.insertBefore(t, r || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, r, n) => {
    const i = e === "svg" ? oi.createElementNS(QE, t) : e === "mathml" ? oi.createElementNS(eS, t) : oi.createElement(t, r ? { is: r } : void 0);
    return t === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
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
  insertStaticContent(t, e, r, n, i, s) {
    const a = r ? r.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), r), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Zd.innerHTML = n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t;
      const o = Zd.content;
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
}, Jn = "transition", pa = "animation", io = Symbol("_vtc"), Yu = (t, { slots: e }) => Qy(X1, rS(t), e);
Yu.displayName = "Transition";
const ev = {
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
Yu.props = /* @__PURE__ */ et(
  {},
  wy,
  ev
);
const Vi = (t, e = []) => {
  le(t) ? t.forEach((r) => r(...e)) : t && t(...e);
}, Jd = (t) => t ? le(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function rS(t) {
  const e = {};
  for (const I in t)
    I in ev || (e[I] = t[I]);
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
  } = t, p = nS(i), m = p && p[0], g = p && p[1], {
    onBeforeEnter: y,
    onEnter: v,
    onEnterCancelled: b,
    onLeave: E,
    onLeaveCancelled: O,
    onBeforeAppear: N = y,
    onAppear: M = v,
    onAppearCancelled: k = b
  } = e, A = (I, Q, ve) => {
    ji(I, Q ? f : o), ji(I, Q ? u : a), ve && ve();
  }, C = (I, Q) => {
    I._isLeaving = !1, ji(I, c), ji(I, d), ji(I, h), Q && Q();
  }, R = (I) => (Q, ve) => {
    const T = I ? M : v, $ = () => A(Q, I, ve);
    Vi(T, [Q, $]), Qd(() => {
      ji(Q, I ? l : s), Qn(Q, I ? f : o), Jd(T) || ep(Q, n, m, $);
    });
  };
  return et(e, {
    onBeforeEnter(I) {
      Vi(y, [I]), Qn(I, s), Qn(I, a);
    },
    onBeforeAppear(I) {
      Vi(N, [I]), Qn(I, l), Qn(I, u);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(I, Q) {
      I._isLeaving = !0;
      const ve = () => C(I, Q);
      Qn(I, c), Qn(I, h), aS(), Qd(() => {
        !I._isLeaving || (ji(I, c), Qn(I, d), Jd(E) || ep(I, n, g, ve));
      }), Vi(E, [I, ve]);
    },
    onEnterCancelled(I) {
      A(I, !1), Vi(b, [I]);
    },
    onAppearCancelled(I) {
      A(I, !0), Vi(k, [I]);
    },
    onLeaveCancelled(I) {
      C(I), Vi(O, [I]);
    }
  });
}
function nS(t) {
  if (t == null)
    return null;
  if (Be(t))
    return [vc(t.enter), vc(t.leave)];
  {
    const e = vc(t);
    return [e, e];
  }
}
function vc(t) {
  const e = uf(t);
  return process.env.NODE_ENV !== "production" && g1(e, "<transition> explicit duration"), e;
}
function Qn(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.add(r)), (t[io] || (t[io] = /* @__PURE__ */ new Set())).add(e);
}
function ji(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n));
  const r = t[io];
  r && (r.delete(e), r.size || (t[io] = void 0));
}
function Qd(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let iS = 0;
function ep(t, e, r, n) {
  const i = t._endId = ++iS, s = () => {
    i === t._endId && n();
  };
  if (r)
    return setTimeout(s, r);
  const { type: a, timeout: o, propCount: l } = sS(t, e);
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
function sS(t, e) {
  const r = window.getComputedStyle(t), n = (p) => (r[p] || "").split(", "), i = n(`${Jn}Delay`), s = n(`${Jn}Duration`), a = tp(i, s), o = n(`${pa}Delay`), l = n(`${pa}Duration`), u = tp(o, l);
  let f = null, c = 0, h = 0;
  e === Jn ? a > 0 && (f = Jn, c = a, h = s.length) : e === pa ? u > 0 && (f = pa, c = u, h = l.length) : (c = Math.max(a, u), f = c > 0 ? a > u ? Jn : pa : null, h = f ? f === Jn ? s.length : l.length : 0);
  const d = f === Jn && /\b(transform|all)(,|$)/.test(
    n(`${Jn}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: h,
    hasTransform: d
  };
}
function tp(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((r, n) => rp(r) + rp(t[n])));
}
function rp(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function aS() {
  return document.body.offsetHeight;
}
function oS(t, e, r) {
  const n = t[io];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e;
}
const np = Symbol("_vod"), lS = Symbol("_vsh");
process.env.NODE_ENV;
const uS = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), cS = /(^|;)\s*display\s*:/;
function fS(t, e, r) {
  const n = t.style, i = it(r);
  let s = !1;
  if (r && !i) {
    if (e)
      if (it(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          r[o] == null && Cl(n, o, "");
        }
      else
        for (const a in e)
          r[a] == null && Cl(n, a, "");
    for (const a in r)
      a === "display" && (s = !0), Cl(n, a, r[a]);
  } else if (i) {
    if (e !== r) {
      const a = n[uS];
      a && (r += ";" + a), n.cssText = r, s = cS.test(r);
    }
  } else
    e && t.removeAttribute("style");
  np in t && (t[np] = s ? n.display : "", t[lS] && (n.display = "none"));
}
const hS = /[^\\];\s*$/, ip = /\s*!important$/;
function Cl(t, e, r) {
  if (le(r))
    r.forEach((n) => Cl(t, e, n));
  else if (r == null && (r = ""), process.env.NODE_ENV !== "production" && hS.test(r) && bi(
    `Unexpected semicolon at the end of '${e}' style value: '${r}'`
  ), e.startsWith("--"))
    t.setProperty(e, r);
  else {
    const n = dS(t, e);
    ip.test(r) ? t.setProperty(
      lr(n),
      r.replace(ip, ""),
      "important"
    ) : t[n] = r;
  }
}
const sp = ["Webkit", "Moz", "ms"], _c = {};
function dS(t, e) {
  const r = _c[e];
  if (r)
    return r;
  let n = mr(e);
  if (n !== "filter" && n in t)
    return _c[e] = n;
  n = us(n);
  for (let i = 0; i < sp.length; i++) {
    const s = sp[i] + n;
    if (s in t)
      return _c[e] = s;
  }
  return e;
}
const ap = "http://www.w3.org/1999/xlink";
function pS(t, e, r, n, i) {
  if (n && e.startsWith("xlink:"))
    r == null ? t.removeAttributeNS(ap, e.slice(6, e.length)) : t.setAttributeNS(ap, e, r);
  else {
    const s = Rb(e);
    r == null || s && !$g(r) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : r);
  }
}
function mS(t, e, r, n, i, s, a) {
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
    u === "boolean" ? r = $g(r) : r == null && u === "string" ? (r = "", l = !0) : u === "number" && (r = 0, l = !0);
  }
  try {
    t[e] = r;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && bi(
      `Failed setting prop "${e}" on <${o.toLowerCase()}>: value ${r} is invalid.`,
      u
    );
  }
  l && t.removeAttribute(e);
}
function gS(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function yS(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
const op = Symbol("_vei");
function vS(t, e, r, n, i = null) {
  const s = t[op] || (t[op] = {}), a = s[e];
  if (n && a)
    a.value = process.env.NODE_ENV !== "production" ? up(n, e) : n;
  else {
    const [o, l] = _S(e);
    if (n) {
      const u = s[e] = SS(
        process.env.NODE_ENV !== "production" ? up(n, e) : n,
        i
      );
      gS(t, o, u, l);
    } else
      a && (yS(t, o, a, l), s[e] = void 0);
  }
}
const lp = /(?:Once|Passive|Capture)$/;
function _S(t) {
  let e;
  if (lp.test(t)) {
    e = {};
    let n;
    for (; n = t.match(lp); )
      t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : lr(t.slice(2)), e];
}
let bc = 0;
const bS = /* @__PURE__ */ Promise.resolve(), ES = () => bc || (bS.then(() => bc = 0), bc = Date.now());
function SS(t, e) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Nr(
      wS(n, r.value),
      e,
      5,
      [n]
    );
  };
  return r.value = t, r.attached = ES(), r;
}
function up(t, e) {
  return me(t) || le(t) ? t : (bi(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), yt);
}
function wS(t, e) {
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
const cp = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, xS = (t, e, r, n, i, s, a, o, l) => {
  const u = i === "svg";
  e === "class" ? oS(t, n, u) : e === "style" ? fS(t, r, n) : yo(e) ? zl(e) || vS(t, e, r, n, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : OS(t, e, n, u)) ? mS(
    t,
    e,
    n,
    s,
    a,
    o,
    l
  ) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), pS(t, e, n, u));
};
function OS(t, e, r, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && cp(e) && me(r));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return cp(e) && it(r) ? !1 : e in t;
}
const MS = ["ctrl", "shift", "alt", "meta"], TS = {
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
  exact: (t, e) => MS.some((r) => t[`${r}Key`] && !e.includes(r))
}, an = (t, e) => {
  const r = t._withMods || (t._withMods = {}), n = e.join(".");
  return r[n] || (r[n] = (i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = TS[e[a]];
      if (o && o(i, e))
        return;
    }
    return t(i, ...s);
  });
}, NS = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, on = (t, e) => {
  const r = t._withKeys || (t._withKeys = {}), n = e.join(".");
  return r[n] || (r[n] = (i) => {
    if (!("key" in i))
      return;
    const s = lr(i.key);
    if (e.some((a) => a === s || NS[a] === s))
      return t(i);
  });
}, CS = /* @__PURE__ */ et({ patchProp: xS }, tS);
let fp;
function tv() {
  return fp || (fp = LE(CS));
}
const hp = (...t) => {
  tv().render(...t);
}, LS = (...t) => {
  const e = tv().createApp(...t);
  process.env.NODE_ENV !== "production" && (kS(e), AS(e));
  const { mount: r } = e;
  return e.mount = (n) => {
    const i = DS(n);
    if (!i)
      return;
    const s = e._component;
    !me(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const a = r(i, !1, PS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function PS(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function kS(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => kb(e) || Ab(e) || Db(e),
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
    const r = t.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return bi(n), r;
      },
      set() {
        bi(n);
      }
    });
  }
}
function DS(t) {
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
function IS() {
  JE();
}
process.env.NODE_ENV !== "production" && IS();
/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */
function fi(t) {
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fi(t);
}
function Lf(t, e) {
  return Lf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Lf(t, e);
}
function RS() {
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
function Ll(t, e, r) {
  return RS() ? Ll = Reflect.construct : Ll = function(i, s, a) {
    var o = [null];
    o.push.apply(o, s);
    var l = Function.bind.apply(i, o), u = new l();
    return a && Lf(u, a.prototype), u;
  }, Ll.apply(null, arguments);
}
function jr(t) {
  return $S(t) || FS(t) || VS(t) || jS();
}
function $S(t) {
  if (Array.isArray(t))
    return Pf(t);
}
function FS(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function VS(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Pf(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pf(t, e);
  }
}
function Pf(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function jS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var GS = Object.hasOwnProperty, dp = Object.setPrototypeOf, US = Object.isFrozen, BS = Object.getPrototypeOf, WS = Object.getOwnPropertyDescriptor, er = Object.freeze, kr = Object.seal, qS = Object.create, rv = typeof Reflect < "u" && Reflect, nu = rv.apply, kf = rv.construct;
nu || (nu = function(e, r, n) {
  return e.apply(r, n);
});
er || (er = function(e) {
  return e;
});
kr || (kr = function(e) {
  return e;
});
kf || (kf = function(e, r) {
  return Ll(e, jr(r));
});
var HS = Ar(Array.prototype.forEach), pp = Ar(Array.prototype.pop), ma = Ar(Array.prototype.push), Pl = Ar(String.prototype.toLowerCase), Ec = Ar(String.prototype.toString), mp = Ar(String.prototype.match), Ir = Ar(String.prototype.replace), zS = Ar(String.prototype.indexOf), YS = Ar(String.prototype.trim), Ft = Ar(RegExp.prototype.test), Sc = XS(TypeError);
function Ar(t) {
  return function(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return nu(t, e, n);
  };
}
function XS(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return kf(t, r);
  };
}
function Le(t, e, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Pl, dp && dp(t, null);
  for (var i = e.length; i--; ) {
    var s = e[i];
    if (typeof s == "string") {
      var a = r(s);
      a !== s && (US(e) || (e[i] = a), s = a);
    }
    t[s] = !0;
  }
  return t;
}
function Gi(t) {
  var e = qS(null), r;
  for (r in t)
    nu(GS, t, [r]) === !0 && (e[r] = t[r]);
  return e;
}
function Zo(t, e) {
  for (; t !== null; ) {
    var r = WS(t, e);
    if (r) {
      if (r.get)
        return Ar(r.get);
      if (typeof r.value == "function")
        return Ar(r.value);
    }
    t = BS(t);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
var gp = er(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wc = er(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xc = er(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), KS = er(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Oc = er(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), ZS = er(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), yp = er(["#text"]), vp = er(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Mc = er(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _p = er(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Jo = er(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), JS = kr(/\{\{[\w\W]*|[\w\W]*\}\}/gm), QS = kr(/<%[\w\W]*|[\w\W]*%>/gm), ew = kr(/\${[\w\W]*}/gm), tw = kr(/^data-[\-\w.\u00B7-\uFFFF]/), rw = kr(/^aria-[\-\w]+$/), nw = kr(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), iw = kr(/^(?:\w+script|data):/i), sw = kr(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), aw = kr(/^html$/i), ow = kr(/^[a-z][.\w]*(-[.\w]+)+$/i), lw = function() {
  return typeof window > "u" ? null : window;
}, uw = function(e, r) {
  if (fi(e) !== "object" || typeof e.createPolicy != "function")
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
function nv() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lw(), e = function(w) {
    return nv(w);
  };
  if (e.version = "2.5.0", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var r = t.document, n = t.document, i = t.DocumentFragment, s = t.HTMLTemplateElement, a = t.Node, o = t.Element, l = t.NodeFilter, u = t.NamedNodeMap, f = u === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : u, c = t.HTMLFormElement, h = t.DOMParser, d = t.trustedTypes, p = o.prototype, m = Zo(p, "cloneNode"), g = Zo(p, "nextSibling"), y = Zo(p, "childNodes"), v = Zo(p, "parentNode");
  if (typeof s == "function") {
    var b = n.createElement("template");
    b.content && b.content.ownerDocument && (n = b.content.ownerDocument);
  }
  var E = uw(d, r), O = E ? E.createHTML("") : "", N = n, M = N.implementation, k = N.createNodeIterator, A = N.createDocumentFragment, C = N.getElementsByTagName, R = r.importNode, I = {};
  try {
    I = Gi(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var Q = {};
  e.isSupported = typeof v == "function" && M && M.createHTMLDocument !== void 0 && I !== 9;
  var ve = JS, T = QS, $ = ew, z = tw, K = rw, Ce = iw, Pe = sw, dt = ow, Rt = nw, Te = null, Ct = Le({}, [].concat(jr(gp), jr(wc), jr(xc), jr(Oc), jr(yp))), st = null, Zr = Le({}, [].concat(jr(vp), jr(Mc), jr(_p), jr(Jo))), De = Object.seal(Object.create(null, {
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
  })), tr = null, Jr = null, On = !0, Lt = !0, Qr = !1, Mn = !0, _ = !1, S = !0, D = !1, j = !1, G = !1, W = !1, Z = !1, B = !1, X = !0, U = !1, ne = "user-content-", ue = !0, oe = !1, de = {}, xe = null, $e = Le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Je = null, pt = Le({}, ["audio", "video", "img", "source", "image", "track"]), zt = null, Tn = Le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ii = "http://www.w3.org/1998/Math/MathML", en = "http://www.w3.org/2000/svg", _r = "http://www.w3.org/1999/xhtml", ut = _r, rr = !1, Es = null, B_ = Le({}, [Ii, en, _r], Ec), Ri, W_ = ["application/xhtml+xml", "text/html"], q_ = "text/html", Ot, Ss = null, H_ = n.createElement("form"), od = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, lc = function(w) {
    Ss && Ss === w || ((!w || fi(w) !== "object") && (w = {}), w = Gi(w), Ri = W_.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Ri = q_ : Ri = w.PARSER_MEDIA_TYPE, Ot = Ri === "application/xhtml+xml" ? Ec : Pl, Te = "ALLOWED_TAGS" in w ? Le({}, w.ALLOWED_TAGS, Ot) : Ct, st = "ALLOWED_ATTR" in w ? Le({}, w.ALLOWED_ATTR, Ot) : Zr, Es = "ALLOWED_NAMESPACES" in w ? Le({}, w.ALLOWED_NAMESPACES, Ec) : B_, zt = "ADD_URI_SAFE_ATTR" in w ? Le(
      Gi(Tn),
      w.ADD_URI_SAFE_ATTR,
      Ot
    ) : Tn, Je = "ADD_DATA_URI_TAGS" in w ? Le(
      Gi(pt),
      w.ADD_DATA_URI_TAGS,
      Ot
    ) : pt, xe = "FORBID_CONTENTS" in w ? Le({}, w.FORBID_CONTENTS, Ot) : $e, tr = "FORBID_TAGS" in w ? Le({}, w.FORBID_TAGS, Ot) : {}, Jr = "FORBID_ATTR" in w ? Le({}, w.FORBID_ATTR, Ot) : {}, de = "USE_PROFILES" in w ? w.USE_PROFILES : !1, On = w.ALLOW_ARIA_ATTR !== !1, Lt = w.ALLOW_DATA_ATTR !== !1, Qr = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Mn = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _ = w.SAFE_FOR_TEMPLATES || !1, S = w.SAFE_FOR_XML !== !1, D = w.WHOLE_DOCUMENT || !1, W = w.RETURN_DOM || !1, Z = w.RETURN_DOM_FRAGMENT || !1, B = w.RETURN_TRUSTED_TYPE || !1, G = w.FORCE_BODY || !1, X = w.SANITIZE_DOM !== !1, U = w.SANITIZE_NAMED_PROPS || !1, ue = w.KEEP_CONTENT !== !1, oe = w.IN_PLACE || !1, Rt = w.ALLOWED_URI_REGEXP || Rt, ut = w.NAMESPACE || _r, De = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && od(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (De.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && od(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (De.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _ && (Lt = !1), Z && (W = !0), de && (Te = Le({}, jr(yp)), st = [], de.html === !0 && (Le(Te, gp), Le(st, vp)), de.svg === !0 && (Le(Te, wc), Le(st, Mc), Le(st, Jo)), de.svgFilters === !0 && (Le(Te, xc), Le(st, Mc), Le(st, Jo)), de.mathMl === !0 && (Le(Te, Oc), Le(st, _p), Le(st, Jo))), w.ADD_TAGS && (Te === Ct && (Te = Gi(Te)), Le(Te, w.ADD_TAGS, Ot)), w.ADD_ATTR && (st === Zr && (st = Gi(st)), Le(st, w.ADD_ATTR, Ot)), w.ADD_URI_SAFE_ATTR && Le(zt, w.ADD_URI_SAFE_ATTR, Ot), w.FORBID_CONTENTS && (xe === $e && (xe = Gi(xe)), Le(xe, w.FORBID_CONTENTS, Ot)), ue && (Te["#text"] = !0), D && Le(Te, ["html", "head", "body"]), Te.table && (Le(Te, ["tbody"]), delete tr.tbody), er && er(w), Ss = w);
  }, ld = Le({}, ["mi", "mo", "mn", "ms", "mtext"]), ud = Le({}, ["foreignobject", "desc", "title", "annotation-xml"]), z_ = Le({}, ["title", "style", "font", "a", "script"]), jo = Le({}, wc);
  Le(jo, xc), Le(jo, KS);
  var uc = Le({}, Oc);
  Le(uc, ZS);
  var Y_ = function(w) {
    var Y = v(w);
    (!Y || !Y.tagName) && (Y = {
      namespaceURI: ut,
      tagName: "template"
    });
    var ie = Pl(w.tagName), Ve = Pl(Y.tagName);
    return Es[w.namespaceURI] ? w.namespaceURI === en ? Y.namespaceURI === _r ? ie === "svg" : Y.namespaceURI === Ii ? ie === "svg" && (Ve === "annotation-xml" || ld[Ve]) : Boolean(jo[ie]) : w.namespaceURI === Ii ? Y.namespaceURI === _r ? ie === "math" : Y.namespaceURI === en ? ie === "math" && ud[Ve] : Boolean(uc[ie]) : w.namespaceURI === _r ? Y.namespaceURI === en && !ud[Ve] || Y.namespaceURI === Ii && !ld[Ve] ? !1 : !uc[ie] && (z_[ie] || !jo[ie]) : !!(Ri === "application/xhtml+xml" && Es[w.namespaceURI]) : !1;
  }, Dr = function(w) {
    ma(e.removed, {
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
  }, cc = function(w, Y) {
    try {
      ma(e.removed, {
        attribute: Y.getAttributeNode(w),
        from: Y
      });
    } catch {
      ma(e.removed, {
        attribute: null,
        from: Y
      });
    }
    if (Y.removeAttribute(w), w === "is" && !st[w])
      if (W || Z)
        try {
          Dr(Y);
        } catch {
        }
      else
        try {
          Y.setAttribute(w, "");
        } catch {
        }
  }, cd = function(w) {
    var Y, ie;
    if (G)
      w = "<remove></remove>" + w;
    else {
      var Ve = mp(w, /^[\r\n\t ]+/);
      ie = Ve && Ve[0];
    }
    Ri === "application/xhtml+xml" && ut === _r && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var nr = E ? E.createHTML(w) : w;
    if (ut === _r)
      try {
        Y = new h().parseFromString(nr, Ri);
      } catch {
      }
    if (!Y || !Y.documentElement) {
      Y = M.createDocument(ut, "template", null);
      try {
        Y.documentElement.innerHTML = rr ? O : nr;
      } catch {
      }
    }
    var $t = Y.body || Y.documentElement;
    return w && ie && $t.insertBefore(n.createTextNode(ie), $t.childNodes[0] || null), ut === _r ? C.call(Y, D ? "html" : "body")[0] : D ? Y.documentElement : $t;
  }, fd = function(w) {
    return k.call(
      w.ownerDocument || w,
      w,
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, X_ = function(w) {
    return w instanceof c && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof f) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, fa = function(w) {
    return fi(a) === "object" ? w instanceof a : w && fi(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, Nn = function(w, Y, ie) {
    !Q[w] || HS(Q[w], function(Ve) {
      Ve.call(e, Y, ie, Ss);
    });
  }, hd = function(w) {
    var Y;
    if (Nn("beforeSanitizeElements", w, null), X_(w) || Ft(/[\u0080-\uFFFF]/, w.nodeName))
      return Dr(w), !0;
    var ie = Ot(w.nodeName);
    if (Nn("uponSanitizeElement", w, {
      tagName: ie,
      allowedTags: Te
    }), w.hasChildNodes() && !fa(w.firstElementChild) && (!fa(w.content) || !fa(w.content.firstElementChild)) && Ft(/<[/\w]/g, w.innerHTML) && Ft(/<[/\w]/g, w.textContent) || ie === "select" && Ft(/<template/i, w.innerHTML) || w.nodeType === 7 || S && w.nodeType === 8 && Ft(/<[/\w]/g, w.data))
      return Dr(w), !0;
    if (!Te[ie] || tr[ie]) {
      if (!tr[ie] && pd(ie) && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, ie) || De.tagNameCheck instanceof Function && De.tagNameCheck(ie)))
        return !1;
      if (ue && !xe[ie]) {
        var Ve = v(w) || w.parentNode, nr = y(w) || w.childNodes;
        if (nr && Ve)
          for (var $t = nr.length, Pt = $t - 1; Pt >= 0; --Pt)
            Ve.insertBefore(m(nr[Pt], !0), g(w));
      }
      return Dr(w), !0;
    }
    return w instanceof o && !Y_(w) || (ie === "noscript" || ie === "noembed" || ie === "noframes") && Ft(/<\/no(script|embed|frames)/i, w.innerHTML) ? (Dr(w), !0) : (_ && w.nodeType === 3 && (Y = w.textContent, Y = Ir(Y, ve, " "), Y = Ir(Y, T, " "), Y = Ir(Y, $, " "), w.textContent !== Y && (ma(e.removed, {
      element: w.cloneNode()
    }), w.textContent = Y)), Nn("afterSanitizeElements", w, null), !1);
  }, dd = function(w, Y, ie) {
    if (X && (Y === "id" || Y === "name") && (ie in n || ie in H_))
      return !1;
    if (!(Lt && !Jr[Y] && Ft(z, Y))) {
      if (!(On && Ft(K, Y))) {
        if (!st[Y] || Jr[Y]) {
          if (!(pd(w) && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, w) || De.tagNameCheck instanceof Function && De.tagNameCheck(w)) && (De.attributeNameCheck instanceof RegExp && Ft(De.attributeNameCheck, Y) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(Y)) || Y === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && Ft(De.tagNameCheck, ie) || De.tagNameCheck instanceof Function && De.tagNameCheck(ie))))
            return !1;
        } else if (!zt[Y]) {
          if (!Ft(Rt, Ir(ie, Pe, ""))) {
            if (!((Y === "src" || Y === "xlink:href" || Y === "href") && w !== "script" && zS(ie, "data:") === 0 && Je[w])) {
              if (!(Qr && !Ft(Ce, Ir(ie, Pe, "")))) {
                if (ie)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pd = function(w) {
    return w !== "annotation-xml" && mp(w, dt);
  }, md = function(w) {
    var Y, ie, Ve, nr;
    Nn("beforeSanitizeAttributes", w, null);
    var $t = w.attributes;
    if (!!$t) {
      var Pt = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: st
      };
      for (nr = $t.length; nr--; ) {
        Y = $t[nr];
        var Go = Y, Mt = Go.name, fc = Go.namespaceURI;
        if (ie = Mt === "value" ? Y.value : YS(Y.value), Ve = Ot(Mt), Pt.attrName = Ve, Pt.attrValue = ie, Pt.keepAttr = !0, Pt.forceKeepAttr = void 0, Nn("uponSanitizeAttribute", w, Pt), ie = Pt.attrValue, !Pt.forceKeepAttr && (cc(Mt, w), !!Pt.keepAttr)) {
          if (!Mn && Ft(/\/>/i, ie)) {
            cc(Mt, w);
            continue;
          }
          _ && (ie = Ir(ie, ve, " "), ie = Ir(ie, T, " "), ie = Ir(ie, $, " "));
          var gd = Ot(w.nodeName);
          if (!!dd(gd, Ve, ie)) {
            if (U && (Ve === "id" || Ve === "name") && (cc(Mt, w), ie = ne + ie), E && fi(d) === "object" && typeof d.getAttributeType == "function" && !fc)
              switch (d.getAttributeType(gd, Ve)) {
                case "TrustedHTML": {
                  ie = E.createHTML(ie);
                  break;
                }
                case "TrustedScriptURL": {
                  ie = E.createScriptURL(ie);
                  break;
                }
              }
            try {
              fc ? w.setAttributeNS(fc, Mt, ie) : w.setAttribute(Mt, ie), pp(e.removed);
            } catch {
            }
          }
        }
      }
      Nn("afterSanitizeAttributes", w, null);
    }
  }, K_ = function ce(w) {
    var Y, ie = fd(w);
    for (Nn("beforeSanitizeShadowDOM", w, null); Y = ie.nextNode(); )
      Nn("uponSanitizeShadowNode", Y, null), !hd(Y) && (Y.content instanceof i && ce(Y.content), md(Y));
    Nn("afterSanitizeShadowDOM", w, null);
  };
  return e.sanitize = function(ce) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y, ie, Ve, nr, $t;
    if (rr = !ce, rr && (ce = "<!-->"), typeof ce != "string" && !fa(ce))
      if (typeof ce.toString == "function") {
        if (ce = ce.toString(), typeof ce != "string")
          throw Sc("dirty is not a string, aborting");
      } else
        throw Sc("toString is not a function");
    if (!e.isSupported) {
      if (fi(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof ce == "string")
          return t.toStaticHTML(ce);
        if (fa(ce))
          return t.toStaticHTML(ce.outerHTML);
      }
      return ce;
    }
    if (j || lc(w), e.removed = [], typeof ce == "string" && (oe = !1), oe) {
      if (ce.nodeName) {
        var Pt = Ot(ce.nodeName);
        if (!Te[Pt] || tr[Pt])
          throw Sc("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ce instanceof a)
      Y = cd("<!---->"), ie = Y.ownerDocument.importNode(ce, !0), ie.nodeType === 1 && ie.nodeName === "BODY" || ie.nodeName === "HTML" ? Y = ie : Y.appendChild(ie);
    else {
      if (!W && !_ && !D && ce.indexOf("<") === -1)
        return E && B ? E.createHTML(ce) : ce;
      if (Y = cd(ce), !Y)
        return W ? null : B ? O : "";
    }
    Y && G && Dr(Y.firstChild);
    for (var Go = fd(oe ? ce : Y); Ve = Go.nextNode(); )
      Ve.nodeType === 3 && Ve === nr || hd(Ve) || (Ve.content instanceof i && K_(Ve.content), md(Ve), nr = Ve);
    if (nr = null, oe)
      return ce;
    if (W) {
      if (Z)
        for ($t = A.call(Y.ownerDocument); Y.firstChild; )
          $t.appendChild(Y.firstChild);
      else
        $t = Y;
      return (st.shadowroot || st.shadowrootmod) && ($t = R.call(r, $t, !0)), $t;
    }
    var Mt = D ? Y.outerHTML : Y.innerHTML;
    return D && Te["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Ft(aw, Y.ownerDocument.doctype.name) && (Mt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + Mt), _ && (Mt = Ir(Mt, ve, " "), Mt = Ir(Mt, T, " "), Mt = Ir(Mt, $, " ")), E && B ? E.createHTML(Mt) : Mt;
  }, e.setConfig = function(ce) {
    lc(ce), j = !0;
  }, e.clearConfig = function() {
    Ss = null, j = !1;
  }, e.isValidAttribute = function(ce, w, Y) {
    Ss || lc({});
    var ie = Ot(ce), Ve = Ot(w);
    return dd(ie, Ve, Y);
  }, e.addHook = function(ce, w) {
    typeof w == "function" && (Q[ce] = Q[ce] || [], ma(Q[ce], w));
  }, e.removeHook = function(ce) {
    if (Q[ce])
      return pp(Q[ce]);
  }, e.removeHooks = function(ce) {
    Q[ce] && (Q[ce] = []);
  }, e.removeAllHooks = function() {
    Q = {};
  }, e;
}
var cw = nv();
function fw(t, e) {
  var i;
  const r = (i = t.hooks) != null ? i : {};
  let n;
  for (n in r) {
    const s = r[n];
    s !== void 0 && e.addHook(n, s);
  }
}
function iv() {
  return cw();
}
function hw(t = {}, e = iv) {
  const r = e();
  fw(t, r);
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
const dw = {
  install(t, e = {}, r = iv) {
    t.directive(
      "dompurify-html",
      hw(e, r)
    );
  }
};
var Ph = !1;
function Qo(t, e, r) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, r), r) : (t[e] = r, r);
}
function Tc(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function pw() {
  return sv().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function sv() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const mw = typeof Proxy == "function", gw = "devtools-plugin:setup", yw = "plugin:settings:set";
let ws, Af;
function vw() {
  var t;
  return ws !== void 0 || (typeof window < "u" && window.performance ? (ws = !0, Af = window.performance) : typeof globalThis < "u" && ((t = globalThis.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (ws = !0, Af = globalThis.perf_hooks.performance) : ws = !1), ws;
}
function _w() {
  return vw() ? Af.now() : Date.now();
}
class bw {
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
        return _w();
      }
    }, r && r.on(yw, (a, o) => {
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
function av(t, e) {
  const r = t, n = sv(), i = pw(), s = mw && r.enableEarlyProxy;
  if (i && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(gw, t, e);
  else {
    const a = s ? new bw(r, i) : null;
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
let Oa;
const so = (t) => Oa = t, ov = process.env.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function hs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var dn;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(dn || (dn = {}));
const Xu = typeof window < "u", ja = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Xu, bp = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Ew(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function kh(t, e, r) {
  const n = new XMLHttpRequest();
  n.open("GET", t), n.responseType = "blob", n.onload = function() {
    cv(n.response, e, r);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function lv(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function kl(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const r = document.createEvent("MouseEvents");
    r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(r);
  }
}
const Al = typeof navigator == "object" ? navigator : { userAgent: "" }, uv = /* @__PURE__ */ (() => /Macintosh/.test(Al.userAgent) && /AppleWebKit/.test(Al.userAgent) && !/Safari/.test(Al.userAgent))(), cv = Xu ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !uv ? Sw : "msSaveOrOpenBlob" in Al ? ww : xw : () => {
};
function Sw(t, e = "download", r) {
  const n = document.createElement("a");
  n.download = e, n.rel = "noopener", typeof t == "string" ? (n.href = t, n.origin !== location.origin ? lv(n.href) ? kh(t, e, r) : (n.target = "_blank", kl(n)) : kl(n)) : (n.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(n.href);
  }, 4e4), setTimeout(function() {
    kl(n);
  }, 0));
}
function ww(t, e = "download", r) {
  if (typeof t == "string")
    if (lv(t))
      kh(t, e, r);
    else {
      const n = document.createElement("a");
      n.href = t, n.target = "_blank", setTimeout(function() {
        kl(n);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Ew(t, r), e);
}
function xw(t, e, r, n) {
  if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof t == "string")
    return kh(t, e, r);
  const i = t.type === "application/octet-stream", s = /constructor/i.test(String(bp.HTMLElement)) || "safari" in bp, a = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((a || i && s || uv) && typeof FileReader < "u") {
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
function Ah(t) {
  return "_a" in t && "install" in t;
}
function fv() {
  if (!("clipboard" in navigator))
    return Tt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function hv(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (Tt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Ow(t) {
  if (!fv())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), Tt("Global state copied to clipboard.");
    } catch (e) {
      if (hv(e))
        return;
      Tt("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function Mw(t) {
  if (!fv())
    try {
      dv(t, JSON.parse(await navigator.clipboard.readText())), Tt("Global state pasted from clipboard.");
    } catch (e) {
      if (hv(e))
        return;
      Tt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function Tw(t) {
  try {
    cv(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    Tt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Cn;
function Nw() {
  Cn || (Cn = document.createElement("input"), Cn.type = "file", Cn.accept = ".json");
  function t() {
    return new Promise((e, r) => {
      Cn.onchange = async () => {
        const n = Cn.files;
        if (!n)
          return e(null);
        const i = n.item(0);
        return e(i ? { text: await i.text(), file: i } : null);
      }, Cn.oncancel = () => e(null), Cn.onerror = r, Cn.click();
    });
  }
  return t;
}
async function Cw(t) {
  try {
    const r = await Nw()();
    if (!r)
      return;
    const { text: n, file: i } = r;
    dv(t, JSON.parse(n)), Tt(`Global state imported from "${i.name}".`);
  } catch (e) {
    Tt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function dv(t, e) {
  for (const r in e) {
    const n = t.state.value[r];
    n ? Object.assign(n, e[r]) : t.state.value[r] = e[r];
  }
}
function Gr(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const pv = "\u{1F34D} Pinia (root)", Df = "_root";
function Lw(t) {
  return Ah(t) ? {
    id: Df,
    label: pv
  } : {
    id: t.$id,
    label: t.$id
  };
}
function Pw(t) {
  if (Ah(t)) {
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
function kw(t) {
  return t ? Array.isArray(t) ? t.reduce((e, r) => (e.keys.push(r.key), e.operations.push(r.type), e.oldValue[r.key] = r.oldValue, e.newValue[r.key] = r.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Gr(t.type),
    key: Gr(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function Aw(t) {
  switch (t) {
    case dn.direct:
      return "mutation";
    case dn.patchFunction:
      return "$patch";
    case dn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ds = !0;
const Dl = [], Yi = "pinia:mutations", Gt = "pinia", { assign: Dw } = Object, iu = (t) => "\u{1F34D} " + t;
function Iw(t, e) {
  av({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Dl,
    app: t
  }, (r) => {
    typeof r.now != "function" && Tt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.addTimelineLayer({
      id: Yi,
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
            Ow(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Mw(e), r.sendInspectorTree(Gt), r.sendInspectorState(Gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Tw(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Cw(e), r.sendInspectorTree(Gt), r.sendInspectorState(Gt);
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
            type: iu(o.$id),
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
          }), o._getters && o._getters.length && n.instanceData.state.push({
            type: iu(o.$id),
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
        i = i.concat(Array.from(e._s.values())), n.rootNodes = (n.filter ? i.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(n.filter.toLowerCase()) : pv.toLowerCase().includes(n.filter.toLowerCase())) : i).map(Lw);
      }
    }), r.on.getInspectorState((n) => {
      if (n.app === t && n.inspectorId === Gt) {
        const i = n.nodeId === Df ? e : e._s.get(n.nodeId);
        if (!i)
          return;
        i && (n.state = Pw(i));
      }
    }), r.on.editInspectorState((n, i) => {
      if (n.app === t && n.inspectorId === Gt) {
        const s = n.nodeId === Df ? e : e._s.get(n.nodeId);
        if (!s)
          return Tt(`store "${n.nodeId}" not found`, "error");
        const { path: a } = n;
        Ah(s) ? a.unshift("state") : (a.length !== 1 || !s._customProperties.has(a[0]) || a[0] in s.$state) && a.unshift("$state"), Ds = !1, n.set(s, a, n.state.value), Ds = !0;
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
        a[0] = "$state", Ds = !1, n.set(s, a, n.state.value), Ds = !0;
      }
    });
  });
}
function Rw(t, e) {
  Dl.includes(iu(e.$id)) || Dl.push(iu(e.$id)), av({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Dl,
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
      const f = mv++;
      r.addTimelineEvent({
        layerId: Yi,
        event: {
          time: n(),
          title: "\u{1F6EB} " + l,
          subtitle: "start",
          data: {
            store: Gr(e.$id),
            action: Gr(l),
            args: u
          },
          groupId: f
        }
      }), a((c) => {
        mi = void 0, r.addTimelineEvent({
          layerId: Yi,
          event: {
            time: n(),
            title: "\u{1F6EC} " + l,
            subtitle: "end",
            data: {
              store: Gr(e.$id),
              action: Gr(l),
              args: u,
              result: c
            },
            groupId: f
          }
        });
      }), o((c) => {
        mi = void 0, r.addTimelineEvent({
          layerId: Yi,
          event: {
            time: n(),
            logType: "error",
            title: "\u{1F4A5} " + l,
            subtitle: "end",
            data: {
              store: Gr(e.$id),
              action: Gr(l),
              args: u,
              error: c
            },
            groupId: f
          }
        });
      });
    }, !0), e._customProperties.forEach((a) => {
      tt(() => x(e[a]), (o, l) => {
        r.notifyComponentUpdate(), r.sendInspectorState(Gt), Ds && r.addTimelineEvent({
          layerId: Yi,
          event: {
            time: n(),
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
      if (r.notifyComponentUpdate(), r.sendInspectorState(Gt), !Ds)
        return;
      const u = {
        time: n(),
        title: Aw(o),
        data: Dw({ store: Gr(e.$id) }, kw(a)),
        groupId: mi
      };
      o === dn.patchFunction ? u.subtitle = "\u2935\uFE0F" : o === dn.patchObject ? u.subtitle = "\u{1F9E9}" : a && !Array.isArray(a) && (u.subtitle = a.type), a && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: a
        }
      }), r.addTimelineEvent({
        layerId: Yi,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = pi((a) => {
      i(a), r.addTimelineEvent({
        layerId: Yi,
        event: {
          time: n(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: Gr(e.$id),
            info: Gr("HMR update")
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
let mv = 0, mi;
function Ep(t, e, r) {
  const n = e.reduce((i, s) => (i[s] = _e(t)[s], i), {});
  for (const i in n)
    t[i] = function() {
      const s = mv, a = r ? new Proxy(t, {
        get(...l) {
          return mi = s, Reflect.get(...l);
        },
        set(...l) {
          return mi = s, Reflect.set(...l);
        }
      }) : t;
      mi = s;
      const o = n[i].apply(a, arguments);
      return mi = void 0, o;
    };
}
function $w({ app: t, store: e, options: r }) {
  if (e.$id.startsWith("__hot:"))
    return;
  e._isOptionsAPI = !!r.state, Ep(e, Object.keys(r.actions), e._isOptionsAPI);
  const n = e._hotUpdate;
  _e(e)._hotUpdate = function(i) {
    n.apply(this, arguments), Ep(e, Object.keys(i._hmrPayload.actions), !!e._isOptionsAPI);
  }, Rw(
    t,
    e
  );
}
function Fw() {
  const t = jg(!0), e = t.run(() => be({}));
  let r = [], n = [];
  const i = pi({
    install(s) {
      so(i), i._a = s, s.provide(ov, i), s.config.globalProperties.$pinia = i, ja && Iw(s, i), n.forEach((a) => r.push(a)), n = [];
    },
    use(s) {
      return !this._a && !Ph ? n.push(s) : r.push(s), this;
    },
    _p: r,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return ja && typeof Proxy < "u" && i.use($w), i;
}
function gv(t, e) {
  for (const r in e) {
    const n = e[r];
    if (!(r in t))
      continue;
    const i = t[r];
    hs(i) && hs(n) && !Ye(n) && !hn(n) ? t[r] = gv(i, n) : t[r] = n;
  }
  return t;
}
const yv = () => {
};
function Sp(t, e, r, n = yv) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), n());
  };
  return !r && Gg() && Fb(i), i;
}
function xs(t, ...e) {
  t.slice().forEach((r) => {
    r(...e);
  });
}
const Vw = (t) => t();
function If(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((r, n) => t.set(n, r)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const r in e) {
    if (!e.hasOwnProperty(r))
      continue;
    const n = e[r], i = t[r];
    hs(i) && hs(n) && t.hasOwnProperty(r) && !Ye(n) && !hn(n) ? t[r] = If(i, n) : t[r] = n;
  }
  return t;
}
const jw = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function Gw(t) {
  return !hs(t) || !t.hasOwnProperty(jw);
}
const { assign: Sr } = Object;
function wp(t) {
  return !!(Ye(t) && t.effect);
}
function xp(t, e, r, n) {
  const { state: i, actions: s, getters: a } = e, o = r.state.value[t];
  let l;
  function u() {
    !o && (process.env.NODE_ENV === "production" || !n) && (r.state.value[t] = i ? i() : {});
    const f = process.env.NODE_ENV !== "production" && n ? df(be(i ? i() : {}).value) : df(r.state.value[t]);
    return Sr(f, s, Object.keys(a || {}).reduce((c, h) => (process.env.NODE_ENV !== "production" && h in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), c[h] = pi(pe(() => {
      so(r);
      const d = r._s.get(t);
      return a[h].call(d, d);
    })), c), {}));
  }
  return l = Rf(t, u, e, r, n, !0), l;
}
function Rf(t, e, r = {}, n, i, s) {
  let a;
  const o = Sr({ actions: {} }, r);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  process.env.NODE_ENV !== "production" && !Ph && (l.onTrigger = (C) => {
    u ? d = C : u == !1 && !M._hotUpdating && (Array.isArray(d) ? d.push(C) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, f, c = [], h = [], d;
  const p = n.state.value[t];
  !s && !p && (process.env.NODE_ENV === "production" || !i) && (n.state.value[t] = {});
  const m = be({});
  let g;
  function y(C) {
    let R;
    u = f = !1, process.env.NODE_ENV !== "production" && (d = []), typeof C == "function" ? (C(n.state.value[t]), R = {
      type: dn.patchFunction,
      storeId: t,
      events: d
    }) : (If(n.state.value[t], C), R = {
      type: dn.patchObject,
      payload: C,
      storeId: t,
      events: d
    });
    const I = g = Symbol();
    Kl().then(() => {
      g === I && (u = !0);
    }), f = !0, xs(c, R, n.state.value[t]);
  }
  const v = s ? function() {
    const { state: R } = r, I = R ? R() : {};
    this.$patch((Q) => {
      Sr(Q, I);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : yv;
  function b() {
    a.stop(), c = [], h = [], n._s.delete(t);
  }
  function E(C, R) {
    return function() {
      so(n);
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
        store: M,
        after: T,
        onError: $
      });
      let z;
      try {
        z = R.apply(this && this.$id === t ? this : M, I);
      } catch (K) {
        throw xs(ve, K), K;
      }
      return z instanceof Promise ? z.then((K) => (xs(Q, K), K)).catch((K) => (xs(ve, K), Promise.reject(K))) : (xs(Q, z), z);
    };
  }
  const O = /* @__PURE__ */ pi({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), N = {
    _p: n,
    $id: t,
    $onAction: Sp.bind(null, h),
    $patch: y,
    $reset: v,
    $subscribe(C, R = {}) {
      const I = Sp(c, C, R.detached, () => Q()), Q = a.run(() => tt(() => n.state.value[t], (ve) => {
        (R.flush === "sync" ? f : u) && C({
          storeId: t,
          type: dn.direct,
          events: d
        }, ve);
      }, Sr({}, l, R)));
      return I;
    },
    $dispose: b
  }, M = ju(process.env.NODE_ENV !== "production" || ja ? Sr(
    {
      _hmrPayload: O,
      _customProperties: pi(/* @__PURE__ */ new Set())
    },
    N
  ) : N);
  n._s.set(t, M);
  const A = (n._a && n._a.runWithContext || Vw)(() => n._e.run(() => (a = jg()).run(e)));
  for (const C in A) {
    const R = A[C];
    if (Ye(R) && !wp(R) || hn(R))
      process.env.NODE_ENV !== "production" && i ? Qo(m.value, C, xl(A, C)) : s || (p && Gw(R) && (Ye(R) ? R.value = p[C] : If(R, p[C])), n.state.value[t][C] = R), process.env.NODE_ENV !== "production" && O.state.push(C);
    else if (typeof R == "function") {
      const I = process.env.NODE_ENV !== "production" && i ? R : E(C, R);
      A[C] = I, process.env.NODE_ENV !== "production" && (O.actions[C] = R), o.actions[C] = R;
    } else
      process.env.NODE_ENV !== "production" && wp(R) && (O.getters[C] = s ? r.getters[C] : R, Xu && (A._getters || (A._getters = pi([]))).push(C));
  }
  if (Sr(M, A), Sr(_e(M), A), Object.defineProperty(M, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? m.value : n.state.value[t],
    set: (C) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      y((R) => {
        Sr(R, C);
      });
    }
  }), process.env.NODE_ENV !== "production" && (M._hotUpdate = pi((C) => {
    M._hotUpdating = !0, C._hmrPayload.state.forEach((R) => {
      if (R in M.$state) {
        const I = C.$state[R], Q = M.$state[R];
        typeof I == "object" && hs(I) && hs(Q) ? gv(I, Q) : C.$state[R] = Q;
      }
      Qo(M, R, xl(C.$state, R));
    }), Object.keys(M.$state).forEach((R) => {
      R in C.$state || Tc(M, R);
    }), u = !1, f = !1, n.state.value[t] = xl(C._hmrPayload, "hotState"), f = !0, Kl().then(() => {
      u = !0;
    });
    for (const R in C._hmrPayload.actions) {
      const I = C[R];
      Qo(M, R, E(R, I));
    }
    for (const R in C._hmrPayload.getters) {
      const I = C._hmrPayload.getters[R], Q = s ? pe(() => (so(n), I.call(M, M))) : I;
      Qo(M, R, Q);
    }
    Object.keys(M._hmrPayload.getters).forEach((R) => {
      R in C._hmrPayload.getters || Tc(M, R);
    }), Object.keys(M._hmrPayload.actions).forEach((R) => {
      R in C._hmrPayload.actions || Tc(M, R);
    }), M._hmrPayload = C._hmrPayload, M._getters = C._getters, M._hotUpdating = !1;
  })), ja) {
    const C = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(M, R, Sr({ value: M[R] }, C));
    });
  }
  return n._p.forEach((C) => {
    if (ja) {
      const R = a.run(() => C({
        store: M,
        app: n._a,
        pinia: n,
        options: o
      }));
      Object.keys(R || {}).forEach((I) => M._customProperties.add(I)), Sr(M, R);
    } else
      Sr(M, a.run(() => C({
        store: M,
        app: n._a,
        pinia: n,
        options: o
      })));
  }), process.env.NODE_ENV !== "production" && M.$state && typeof M.$state == "object" && typeof M.$state.constructor == "function" && !M.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${M.$id}".`), p && s && r.hydrate && r.hydrate(M.$state, p), u = !0, f = !0, M;
}
function ys(t, e, r) {
  let n, i;
  const s = typeof e == "function";
  if (typeof t == "string")
    n = t, i = s ? r : e;
  else if (i = t, n = t.id, process.env.NODE_ENV !== "production" && typeof n != "string")
    throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');
  function a(o, l) {
    const u = yE();
    if (o = (process.env.NODE_ENV === "test" && Oa && Oa._testing ? null : o) || (u ? Ws(ov, null) : null), o && so(o), process.env.NODE_ENV !== "production" && !Oa)
      throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    o = Oa, o._s.has(n) || (s ? Rf(n, e, i, o) : xp(n, i, o), process.env.NODE_ENV !== "production" && (a._pinia = o));
    const f = o._s.get(n);
    if (process.env.NODE_ENV !== "production" && l) {
      const c = "__hot:" + n, h = s ? Rf(c, e, i, o, !0) : xp(c, Sr({}, i), o, !0);
      l._hotUpdate(h), delete o.state.value[c], o._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && Xu) {
      const c = So();
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
  if (Ph)
    return df(t);
  {
    t = _e(t);
    const e = {};
    for (const r in t) {
      const n = t[r];
      (Ye(n) || hn(n)) && (e[r] = xl(t, r));
    }
    return e;
  }
}
function Uw(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var ds = 1, ps = 2, Hs = 3, Bw = 4, $f = 5, Op = 6378137, Ww = 6356752314e-3, Mp = 0.0066943799901413165, Ga = 484813681109536e-20, H = Math.PI / 2, qw = 0.16666666666666666, Hw = 0.04722222222222222, zw = 0.022156084656084655, re = 1e-10, At = 0.017453292519943295, un = 57.29577951308232, We = Math.PI / 4, ao = Math.PI * 2, gt = 3.14159265359, ur = {};
ur.greenwich = 0;
ur.lisbon = -9.131906111111;
ur.paris = 2.337229166667;
ur.bogota = -74.080916666667;
ur.madrid = -3.687938888889;
ur.rome = 12.452333333333;
ur.bern = 7.439583333333;
ur.jakarta = 106.807719444444;
ur.ferro = -17.666666666667;
ur.brussels = 4.367975;
ur.stockholm = 18.058277777778;
ur.athens = 23.7163375;
ur.oslo = 10.722916666667;
const Yw = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var Tp = /[\s_\-\/\(\)]/g;
function Oi(t, e) {
  if (t[e])
    return t[e];
  for (var r = Object.keys(t), n = e.toLowerCase().replace(Tp, ""), i = -1, s, a; ++i < r.length; )
    if (s = r[i], a = s.toLowerCase().replace(Tp, ""), a === n)
      return t[s];
}
function Ff(t) {
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
      var l = Oi(Yw, o);
      l && (e.to_meter = l.to_meter);
    },
    from_greenwich: function(o) {
      e.from_greenwich = o * At;
    },
    pm: function(o) {
      var l = Oi(ur, o);
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
  for (n in r)
    i = r[n], n in a ? (s = a[n], typeof s == "function" ? s(i) : e[s] = i) : e[n] = i;
  return typeof e.datumCode == "string" && e.datumCode !== "WGS84" && (e.datumCode = e.datumCode.toLowerCase()), e;
}
var oo = 1, vv = 2, _v = 3, su = 4, bv = 5, Dh = -1, Xw = /\s/, Kw = /[A-Za-z]/, Zw = /[A-Za-z84_]/, Ku = /[,\]]/, Ev = /[\d\.E\-\+]/;
function Xn(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = oo;
}
Xn.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== su)
    for (; Xw.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case oo:
      return this.neutral(t);
    case vv:
      return this.keyword(t);
    case su:
      return this.quoted(t);
    case bv:
      return this.afterquote(t);
    case _v:
      return this.number(t);
    case Dh:
      return;
  }
};
Xn.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = su;
    return;
  }
  if (Ku.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
Xn.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = oo;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = oo, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Dh);
    return;
  }
};
Xn.prototype.number = function(t) {
  if (Ev.test(t)) {
    this.word += t;
    return;
  }
  if (Ku.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
Xn.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = bv;
    return;
  }
  this.word += t;
};
Xn.prototype.keyword = function(t) {
  if (Zw.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var e = [];
    e.push(this.word), this.level++, this.root === null ? this.root = e : this.currentObject.push(e), this.stack.push(this.currentObject), this.currentObject = e, this.state = oo;
    return;
  }
  if (Ku.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
Xn.prototype.neutral = function(t) {
  if (Kw.test(t)) {
    this.word = t, this.state = vv;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = su;
    return;
  }
  if (Ev.test(t)) {
    this.word = t, this.state = _v;
    return;
  }
  if (Ku.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
Xn.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === Dh)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function Jw(t) {
  var e = new Xn(t);
  return e.output();
}
function Np(t, e, r) {
  Array.isArray(e) && (r.unshift(e), e = null);
  var n = e ? {} : t, i = r.reduce(function(s, a) {
    return Is(a, s), s;
  }, n);
  e && (t[e] = i);
}
function Is(t, e) {
  if (!Array.isArray(t)) {
    e[t] = !0;
    return;
  }
  var r = t.shift();
  if (r === "PARAMETER" && (r = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      e[r] = {}, Is(t[0], e[r]);
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
      }, t.length === 3 && Is(t[2], e[r]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      e[r] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && Is(t[3], e[r]);
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
      t[0] = ["name", t[0]], Np(e, r, t);
      return;
    default:
      for (n = -1; ++n < t.length; )
        if (!Array.isArray(t[n]))
          return Is(t, e[r]);
      return Np(e, r, t);
  }
}
var Qw = 0.017453292519943295;
function ex(t, e) {
  var r = e[0], n = e[1];
  !(r in t) && n in t && (t[r] = t[n], e.length === 3 && (t[r] = e[2](t[r])));
}
function rn(t) {
  return t * Qw;
}
function tx(t) {
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
    return ex(t, u);
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
    ["lat0", "latitude_of_center", rn],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", rn],
    ["x0", "false_easting", a],
    ["y0", "false_northing", a],
    ["long0", "central_meridian", rn],
    ["lat0", "latitude_of_origin", rn],
    ["lat0", "standard_parallel_1", rn],
    ["lat1", "standard_parallel_1", rn],
    ["lat2", "standard_parallel_2", rn],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", rn],
    ["srsCode", "name"]
  ];
  l.forEach(o), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") ? (t.lat0 = rn(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1) : !t.lat_ts && t.lat0 && t.projName === "Polar_Stereographic" && (t.lat_ts = t.lat0, t.lat0 = rn(t.lat0 > 0 ? 90 : -90));
}
function Sv(t) {
  var e = Jw(t), r = e.shift(), n = e.shift();
  e.unshift(["name", n]), e.unshift(["type", r]);
  var i = {};
  return Is(e, i), tx(i), i;
}
function Kt(t) {
  var e = this;
  if (arguments.length === 2) {
    var r = arguments[1];
    typeof r == "string" ? r.charAt(0) === "+" ? Kt[t] = Ff(arguments[1]) : Kt[t] = Sv(arguments[1]) : Kt[t] = r;
  } else if (arguments.length === 1) {
    if (Array.isArray(t))
      return t.map(function(n) {
        Array.isArray(n) ? Kt.apply(e, n) : Kt(n);
      });
    if (typeof t == "string") {
      if (t in Kt)
        return Kt[t];
    } else
      "EPSG" in t ? Kt["EPSG:" + t.EPSG] = t : "ESRI" in t ? Kt["ESRI:" + t.ESRI] = t : "IAU2000" in t ? Kt["IAU2000:" + t.IAU2000] = t : console.log(t);
    return;
  }
}
Uw(Kt);
function rx(t) {
  return typeof t == "string";
}
function nx(t) {
  return t in Kt;
}
var ix = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function sx(t) {
  return ix.some(function(e) {
    return t.indexOf(e) > -1;
  });
}
var ax = ["3857", "900913", "3785", "102113"];
function ox(t) {
  var e = Oi(t, "authority");
  if (!!e) {
    var r = Oi(e, "epsg");
    return r && ax.indexOf(r) > -1;
  }
}
function lx(t) {
  var e = Oi(t, "extension");
  if (!!e)
    return Oi(e, "proj4");
}
function ux(t) {
  return t[0] === "+";
}
function cx(t) {
  if (rx(t)) {
    if (nx(t))
      return Kt[t];
    if (sx(t)) {
      var e = Sv(t);
      if (ox(e))
        return Kt["EPSG:3857"];
      var r = lx(e);
      return r ? Ff(r) : e;
    }
    if (ux(t))
      return Ff(t);
  } else
    return t;
}
function Cp(t, e) {
  t = t || {};
  var r, n;
  if (!e)
    return t;
  for (n in e)
    r = e[n], r !== void 0 && (t[n] = r);
  return t;
}
function bn(t, e, r) {
  var n = t * e;
  return r / Math.sqrt(1 - n * n);
}
function xo(t) {
  return t < 0 ? -1 : 1;
}
function se(t) {
  return Math.abs(t) <= gt ? t : t - xo(t) * ao;
}
function zr(t, e, r) {
  var n = t * r, i = 0.5 * t;
  return n = Math.pow((1 - n) / (1 + n), i), Math.tan(0.5 * (H - e)) / n;
}
function lo(t, e) {
  for (var r = 0.5 * t, n, i, s = H - 2 * Math.atan(e), a = 0; a <= 15; a++)
    if (n = t * Math.sin(s), i = H - 2 * Math.atan(e * Math.pow((1 - n) / (1 + n), r)) - s, s += i, Math.abs(i) <= 1e-10)
      return s;
  return -9999;
}
function fx() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = bn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function hx(t) {
  var e = t.x, r = t.y;
  if (r * un > 90 && r * un < -90 && e * un > 180 && e * un < -180)
    return null;
  var n, i;
  if (Math.abs(Math.abs(r) - H) <= re)
    return null;
  if (this.sphere)
    n = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 + this.a * this.k0 * Math.log(Math.tan(We + 0.5 * r));
  else {
    var s = Math.sin(r), a = zr(this.e, r, s);
    n = this.x0 + this.a * this.k0 * se(e - this.long0), i = this.y0 - this.a * this.k0 * Math.log(a);
  }
  return t.x = n, t.y = i, t;
}
function dx(t) {
  var e = t.x - this.x0, r = t.y - this.y0, n, i;
  if (this.sphere)
    i = H - 2 * Math.atan(Math.exp(-r / (this.a * this.k0)));
  else {
    var s = Math.exp(-r / (this.a * this.k0));
    if (i = lo(this.e, s), i === -9999)
      return null;
  }
  return n = se(this.long0 + e / (this.a * this.k0)), t.x = n, t.y = i, t;
}
var px = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const mx = {
  init: fx,
  forward: hx,
  inverse: dx,
  names: px
};
function gx() {
}
function Lp(t) {
  return t;
}
var yx = ["longlat", "identity"];
const vx = {
  init: gx,
  forward: Lp,
  inverse: Lp,
  names: yx
};
var _x = [mx, vx], Il = {}, au = [];
function wv(t, e) {
  var r = au.length;
  return t.names ? (au[r] = t, t.names.forEach(function(n) {
    Il[n.toLowerCase()] = r;
  }), this) : (console.log(e), !0);
}
function bx(t) {
  if (!t)
    return !1;
  var e = t.toLowerCase();
  if (typeof Il[e] < "u" && au[Il[e]])
    return au[Il[e]];
}
function Ex() {
  _x.forEach(wv);
}
const Sx = {
  start: Ex,
  add: wv,
  get: bx
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
var wx = Ee.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
Ee.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function xx(t, e, r, n) {
  var i = t * t, s = e * e, a = (i - s) / i, o = 0;
  n ? (t *= 1 - a * (qw + a * (Hw + a * zw)), i = t * t, a = 0) : o = Math.sqrt(a);
  var l = (i - s) / s;
  return {
    es: a,
    e: o,
    ep2: l
  };
}
function Ox(t, e, r, n, i) {
  if (!t) {
    var s = Oi(Ee, n);
    s || (s = wx), t = s.a, e = s.b, r = s.rf;
  }
  return r && !e && (e = (1 - 1 / r) * t), (r === 0 || Math.abs(t - e) < re) && (i = !0, e = t), {
    a: t,
    b: e,
    rf: r,
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
function Mx(t, e, r, n, i, s, a) {
  var o = {};
  return t === void 0 || t === "none" ? o.datum_type = $f : o.datum_type = Bw, e && (o.datum_params = e.map(parseFloat), (o.datum_params[0] !== 0 || o.datum_params[1] !== 0 || o.datum_params[2] !== 0) && (o.datum_type = ds), o.datum_params.length > 3 && (o.datum_params[3] !== 0 || o.datum_params[4] !== 0 || o.datum_params[5] !== 0 || o.datum_params[6] !== 0) && (o.datum_type = ps, o.datum_params[3] *= Ga, o.datum_params[4] *= Ga, o.datum_params[5] *= Ga, o.datum_params[6] = o.datum_params[6] / 1e6 + 1)), a && (o.datum_type = Hs, o.grids = a), o.a = r, o.b = n, o.es = i, o.ep2 = s, o;
}
var xv = {};
function Tx(t, e) {
  var r = new DataView(e), n = Lx(r), i = Px(r, n), s = kx(r, i, n), a = { header: i, subgrids: s };
  return xv[t] = a, a;
}
function Nx(t) {
  if (t === void 0)
    return null;
  var e = t.split(",");
  return e.map(Cx);
}
function Cx(t) {
  if (t.length === 0)
    return null;
  var e = t[0] === "@";
  return e && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !e, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !e,
    grid: xv[t] || null,
    isNull: !1
  };
}
function Rs(t) {
  return t / 3600 * Math.PI / 180;
}
function Lx(t) {
  var e = t.getInt32(8, !1);
  return e === 11 ? !1 : (e = t.getInt32(8, !0), e !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function Px(t, e) {
  return {
    nFields: t.getInt32(8, e),
    nSubgridFields: t.getInt32(24, e),
    nSubgrids: t.getInt32(40, e),
    shiftType: Vf(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, e),
    fromSemiMinorAxis: t.getFloat64(136, e),
    toSemiMajorAxis: t.getFloat64(152, e),
    toSemiMinorAxis: t.getFloat64(168, e)
  };
}
function Vf(t, e, r) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(e, r)));
}
function kx(t, e, r) {
  for (var n = 176, i = [], s = 0; s < e.nSubgrids; s++) {
    var a = Dx(t, n, r), o = Ix(t, n, a, r), l = Math.round(
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
    }), n += 176 + a.gridNodeCount * 16;
  }
  return i;
}
function Ax(t) {
  return t.map(function(e) {
    return [Rs(e.longitudeShift), Rs(e.latitudeShift)];
  });
}
function Dx(t, e, r) {
  return {
    name: Vf(t, e + 8, e + 16).trim(),
    parent: Vf(t, e + 24, e + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(e + 72, r),
    upperLatitude: t.getFloat64(e + 88, r),
    lowerLongitude: t.getFloat64(e + 104, r),
    upperLongitude: t.getFloat64(e + 120, r),
    latitudeInterval: t.getFloat64(e + 136, r),
    longitudeInterval: t.getFloat64(e + 152, r),
    gridNodeCount: t.getInt32(e + 168, r)
  };
}
function Ix(t, e, r, n) {
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
function pn(t, e) {
  if (!(this instanceof pn))
    return new pn(t);
  e = e || function(u) {
    if (u)
      throw u;
  };
  var r = cx(t);
  if (typeof r != "object") {
    e(t);
    return;
  }
  var n = pn.projections.get(r.projName);
  if (!n) {
    e(t);
    return;
  }
  if (r.datumCode && r.datumCode !== "none") {
    var i = Oi(xt, r.datumCode);
    i && (r.datum_params = r.datum_params || (i.towgs84 ? i.towgs84.split(",") : null), r.ellps = i.ellipse, r.datumName = i.datumName ? i.datumName : r.datumCode);
  }
  r.k0 = r.k0 || 1, r.axis = r.axis || "enu", r.ellps = r.ellps || "wgs84", r.lat1 = r.lat1 || r.lat0;
  var s = Ox(r.a, r.b, r.rf, r.ellps, r.sphere), a = xx(s.a, s.b, s.rf, r.R_A), o = Nx(r.nadgrids), l = r.datum || Mx(
    r.datumCode,
    r.datum_params,
    s.a,
    s.b,
    a.es,
    a.ep2,
    o
  );
  Cp(this, r), Cp(this, n), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = a.es, this.e = a.e, this.ep2 = a.ep2, this.datum = l, this.init(), e(null, this);
}
pn.projections = Sx;
pn.projections.start();
function Rx(t, e) {
  return t.datum_type !== e.datum_type || t.a !== e.a || Math.abs(t.es - e.es) > 5e-11 ? !1 : t.datum_type === ds ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type === ps ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6] : !0;
}
function Ov(t, e, r) {
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
function Mv(t, e, r, n) {
  var i = 1e-12, s = i * i, a = 30, o, l, u, f, c, h, d, p, m, g, y, v, b, E = t.x, O = t.y, N = t.z ? t.z : 0, M, k, A;
  if (o = Math.sqrt(E * E + O * O), l = Math.sqrt(E * E + O * O + N * N), o / r < i) {
    if (M = 0, l / r < i)
      return k = H, A = -n, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    M = Math.atan2(O, E);
  u = N / l, f = o / l, c = 1 / Math.sqrt(1 - e * (2 - e) * f * f), p = f * (1 - e) * c, m = u * c, b = 0;
  do
    b++, d = r / Math.sqrt(1 - e * m * m), A = o * p + N * m - d * (1 - e * m * m), h = e * d / (d + A), c = 1 / Math.sqrt(1 - h * (2 - h) * f * f), g = f * (1 - h) * c, y = u * c, v = y * p - g * m, p = g, m = y;
  while (v * v > s && b < a);
  return k = Math.atan(y / Math.abs(g)), {
    x: M,
    y: k,
    z: A
  };
}
function $x(t, e, r) {
  if (e === ds)
    return {
      x: t.x + r[0],
      y: t.y + r[1],
      z: t.z + r[2]
    };
  if (e === ps) {
    var n = r[0], i = r[1], s = r[2], a = r[3], o = r[4], l = r[5], u = r[6];
    return {
      x: u * (t.x - l * t.y + o * t.z) + n,
      y: u * (l * t.x + t.y - a * t.z) + i,
      z: u * (-o * t.x + a * t.y + t.z) + s
    };
  }
}
function Fx(t, e, r) {
  if (e === ds)
    return {
      x: t.x - r[0],
      y: t.y - r[1],
      z: t.z - r[2]
    };
  if (e === ps) {
    var n = r[0], i = r[1], s = r[2], a = r[3], o = r[4], l = r[5], u = r[6], f = (t.x - n) / u, c = (t.y - i) / u, h = (t.z - s) / u;
    return {
      x: f + l * c - o * h,
      y: -l * f + c + a * h,
      z: o * f - a * c + h
    };
  }
}
function el(t) {
  return t === ds || t === ps;
}
function Vx(t, e, r) {
  if (Rx(t, e) || t.datum_type === $f || e.datum_type === $f)
    return r;
  var n = t.a, i = t.es;
  if (t.datum_type === Hs) {
    var s = Pp(t, !1, r);
    if (s !== 0)
      return;
    n = Op, i = Mp;
  }
  var a = e.a, o = e.b, l = e.es;
  if (e.datum_type === Hs && (a = Op, o = Ww, l = Mp), i === l && n === a && !el(t.datum_type) && !el(e.datum_type))
    return r;
  if (r = Ov(r, i, n), el(t.datum_type) && (r = $x(r, t.datum_type, t.datum_params)), el(e.datum_type) && (r = Fx(r, e.datum_type, e.datum_params)), r = Mv(r, l, a, o), e.datum_type === Hs) {
    var u = Pp(e, !0, r);
    if (u !== 0)
      return;
  }
  return r;
}
function Pp(t, e, r) {
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
        if (!(p > n.y || d > n.x || g < n.y || m < n.x) && (i = jx(n, e, c), !isNaN(i.x)))
          break e;
      }
    }
  return isNaN(i.x) ? (console.log("Failed to find a grid shift table for location '" + -n.x * un + " " + n.y * un + " tried: '" + s + "'"), -1) : (r.x = -i.x, r.y = i.y, 0);
}
function jx(t, e, r) {
  var n = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return n;
  var i = { x: t.x, y: t.y };
  i.x -= r.ll[0], i.y -= r.ll[1], i.x = se(i.x - Math.PI) + Math.PI;
  var s = kp(i, r);
  if (e) {
    if (isNaN(s.x))
      return n;
    s.x = i.x - s.x, s.y = i.y - s.y;
    var a = 9, o = 1e-12, l, u;
    do {
      if (u = kp(s, r), isNaN(u.x)) {
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
function kp(t, e) {
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
function Ap(t, e, r) {
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
function Tv(t) {
  var e = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (e.z = t[2]), t.length > 3 && (e.m = t[3]), e;
}
function Gx(t) {
  Dp(t.x), Dp(t.y);
}
function Dp(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function Ux(t, e) {
  return (t.datum.datum_type === ds || t.datum.datum_type === ps || t.datum.datum_type === Hs) && e.datumCode !== "WGS84" || (e.datum.datum_type === ds || e.datum.datum_type === ps || e.datum.datum_type === Hs) && t.datumCode !== "WGS84";
}
function ou(t, e, r, n) {
  var i;
  Array.isArray(r) ? r = Tv(r) : r = {
    x: r.x,
    y: r.y,
    z: r.z,
    m: r.m
  };
  var s = r.z !== void 0;
  if (Gx(r), t.datum && e.datum && Ux(t, e) && (i = new pn("WGS84"), r = ou(t, i, r, n), t = i), n && t.axis !== "enu" && (r = Ap(t, !1, r)), t.projName === "longlat")
    r = {
      x: r.x * At,
      y: r.y * At,
      z: r.z || 0
    };
  else if (t.to_meter && (r = {
    x: r.x * t.to_meter,
    y: r.y * t.to_meter,
    z: r.z || 0
  }), r = t.inverse(r), !r)
    return;
  if (t.from_greenwich && (r.x += t.from_greenwich), r = Vx(t.datum, e.datum, r), !!r)
    return e.from_greenwich && (r = {
      x: r.x - e.from_greenwich,
      y: r.y,
      z: r.z || 0
    }), e.projName === "longlat" ? r = {
      x: r.x * un,
      y: r.y * un,
      z: r.z || 0
    } : (r = e.forward(r), e.to_meter && (r = {
      x: r.x / e.to_meter,
      y: r.y / e.to_meter,
      z: r.z || 0
    })), n && e.axis !== "enu" ? Ap(e, !0, r) : (r && !s && delete r.z, r);
}
var Ip = pn("WGS84");
function Nc(t, e, r, n) {
  var i, s, a;
  return Array.isArray(r) ? (i = ou(t, e, r, n) || { x: NaN, y: NaN }, r.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent" ? typeof i.z == "number" ? [i.x, i.y, i.z].concat(r.splice(3)) : [i.x, i.y, r[2]].concat(r.splice(3)) : [i.x, i.y].concat(r.splice(2)) : [i.x, i.y]) : (s = ou(t, e, r, n), a = Object.keys(r), a.length === 2 || a.forEach(function(o) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof e.name < "u" && e.name === "geocent") {
      if (o === "x" || o === "y" || o === "z")
        return;
    } else if (o === "x" || o === "y")
      return;
    s[o] = r[o];
  }), s);
}
function Rp(t) {
  return t instanceof pn ? t : t.oProj ? t.oProj : pn(t);
}
function qt(t, e, r) {
  t = Rp(t);
  var n = !1, i;
  return typeof e > "u" ? (e = t, t = Ip, n = !0) : (typeof e.x < "u" || Array.isArray(e)) && (r = e, e = t, t = Ip, n = !0), e = Rp(e), r ? Nc(t, e, r) : (i = {
    forward: function(s, a) {
      return Nc(t, e, s, a);
    },
    inverse: function(s, a) {
      return Nc(e, t, s, a);
    }
  }, n && (i.oProj = e), i);
}
var $p = 6, Nv = "AJSAJS", Cv = "AFAFAF", $s = 65, sr = 73, wr = 79, Ma = 86, Ta = 90;
const Bx = {
  forward: Lv,
  inverse: Wx,
  toPoint: Pv
};
function Lv(t, e) {
  return e = e || 5, zx(qx({
    lat: t[1],
    lon: t[0]
  }), e);
}
function Wx(t) {
  var e = Ih(Av(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top];
}
function Pv(t) {
  var e = Ih(Av(t.toUpperCase()));
  return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2];
}
function Cc(t) {
  return t * (Math.PI / 180);
}
function Fp(t) {
  return 180 * (t / Math.PI);
}
function qx(t) {
  var e = t.lat, r = t.lon, n = 6378137, i = 669438e-8, s = 0.9996, a, o, l, u, f, c, h, d = Cc(e), p = Cc(r), m, g;
  g = Math.floor((r + 180) / 6) + 1, r === 180 && (g = 60), e >= 56 && e < 64 && r >= 3 && r < 12 && (g = 32), e >= 72 && e < 84 && (r >= 0 && r < 9 ? g = 31 : r >= 9 && r < 21 ? g = 33 : r >= 21 && r < 33 ? g = 35 : r >= 33 && r < 42 && (g = 37)), a = (g - 1) * 6 - 180 + 3, m = Cc(a), o = i / (1 - i), l = n / Math.sqrt(1 - i * Math.sin(d) * Math.sin(d)), u = Math.tan(d) * Math.tan(d), f = o * Math.cos(d) * Math.cos(d), c = Math.cos(d) * (p - m), h = n * ((1 - i / 4 - 3 * i * i / 64 - 5 * i * i * i / 256) * d - (3 * i / 8 + 3 * i * i / 32 + 45 * i * i * i / 1024) * Math.sin(2 * d) + (15 * i * i / 256 + 45 * i * i * i / 1024) * Math.sin(4 * d) - 35 * i * i * i / 3072 * Math.sin(6 * d));
  var y = s * l * (c + (1 - u + f) * c * c * c / 6 + (5 - 18 * u + u * u + 72 * f - 58 * o) * c * c * c * c * c / 120) + 5e5, v = s * (h + l * Math.tan(d) * (c * c / 2 + (5 - u + 9 * f + 4 * f * f) * c * c * c * c / 24 + (61 - 58 * u + u * u + 600 * f - 330 * o) * c * c * c * c * c * c / 720));
  return e < 0 && (v += 1e7), {
    northing: Math.round(v),
    easting: Math.round(y),
    zoneNumber: g,
    zoneLetter: Hx(e)
  };
}
function Ih(t) {
  var e = t.northing, r = t.easting, n = t.zoneLetter, i = t.zoneNumber;
  if (i < 0 || i > 60)
    return null;
  var s = 0.9996, a = 6378137, o = 669438e-8, l, u = (1 - Math.sqrt(1 - o)) / (1 + Math.sqrt(1 - o)), f, c, h, d, p, m, g, y, v, b = r - 5e5, E = e;
  n < "N" && (E -= 1e7), g = (i - 1) * 6 - 180 + 3, l = o / (1 - o), m = E / s, y = m / (a * (1 - o / 4 - 3 * o * o / 64 - 5 * o * o * o / 256)), v = y + (3 * u / 2 - 27 * u * u * u / 32) * Math.sin(2 * y) + (21 * u * u / 16 - 55 * u * u * u * u / 32) * Math.sin(4 * y) + 151 * u * u * u / 96 * Math.sin(6 * y), f = a / Math.sqrt(1 - o * Math.sin(v) * Math.sin(v)), c = Math.tan(v) * Math.tan(v), h = l * Math.cos(v) * Math.cos(v), d = a * (1 - o) / Math.pow(1 - o * Math.sin(v) * Math.sin(v), 1.5), p = b / (f * s);
  var O = v - f * Math.tan(v) / d * (p * p / 2 - (5 + 3 * c + 10 * h - 4 * h * h - 9 * l) * p * p * p * p / 24 + (61 + 90 * c + 298 * h + 45 * c * c - 252 * l - 3 * h * h) * p * p * p * p * p * p / 720);
  O = Fp(O);
  var N = (p - (1 + 2 * c + h) * p * p * p / 6 + (5 - 2 * h + 28 * c - 3 * h * h + 8 * l + 24 * c * c) * p * p * p * p * p / 120) / Math.cos(v);
  N = g + Fp(N);
  var M;
  if (t.accuracy) {
    var k = Ih({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    M = {
      top: k.lat,
      right: k.lon,
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
function Hx(t) {
  var e = "Z";
  return 84 >= t && t >= 72 ? e = "X" : 72 > t && t >= 64 ? e = "W" : 64 > t && t >= 56 ? e = "V" : 56 > t && t >= 48 ? e = "U" : 48 > t && t >= 40 ? e = "T" : 40 > t && t >= 32 ? e = "S" : 32 > t && t >= 24 ? e = "R" : 24 > t && t >= 16 ? e = "Q" : 16 > t && t >= 8 ? e = "P" : 8 > t && t >= 0 ? e = "N" : 0 > t && t >= -8 ? e = "M" : -8 > t && t >= -16 ? e = "L" : -16 > t && t >= -24 ? e = "K" : -24 > t && t >= -32 ? e = "J" : -32 > t && t >= -40 ? e = "H" : -40 > t && t >= -48 ? e = "G" : -48 > t && t >= -56 ? e = "F" : -56 > t && t >= -64 ? e = "E" : -64 > t && t >= -72 ? e = "D" : -72 > t && t >= -80 && (e = "C"), e;
}
function zx(t, e) {
  var r = "00000" + t.easting, n = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + Yx(t.easting, t.northing, t.zoneNumber) + r.substr(r.length - 5, e) + n.substr(n.length - 5, e);
}
function Yx(t, e, r) {
  var n = kv(r), i = Math.floor(t / 1e5), s = Math.floor(e / 1e5) % 20;
  return Xx(i, s, n);
}
function kv(t) {
  var e = t % $p;
  return e === 0 && (e = $p), e;
}
function Xx(t, e, r) {
  var n = r - 1, i = Nv.charCodeAt(n), s = Cv.charCodeAt(n), a = i + t - 1, o = s + e, l = !1;
  a > Ta && (a = a - Ta + $s - 1, l = !0), (a === sr || i < sr && a > sr || (a > sr || i < sr) && l) && a++, (a === wr || i < wr && a > wr || (a > wr || i < wr) && l) && (a++, a === sr && a++), a > Ta && (a = a - Ta + $s - 1), o > Ma ? (o = o - Ma + $s - 1, l = !0) : l = !1, (o === sr || s < sr && o > sr || (o > sr || s < sr) && l) && o++, (o === wr || s < wr && o > wr || (o > wr || s < wr) && l) && (o++, o === sr && o++), o > Ma && (o = o - Ma + $s - 1);
  var u = String.fromCharCode(a) + String.fromCharCode(o);
  return u;
}
function Av(t) {
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
  for (var l = kv(a), u = Kx(r.charAt(0), l), f = Zx(r.charAt(1), l); f < Jx(o); )
    f += 2e6;
  var c = e - s;
  if (c % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var h = c / 2, d = 0, p = 0, m, g, y, v, b;
  return h > 0 && (m = 1e5 / Math.pow(10, h), g = t.substring(s, s + h), d = parseFloat(g) * m, y = t.substring(s + h), p = parseFloat(y) * m), v = d + u, b = p + f, {
    easting: v,
    northing: b,
    zoneLetter: o,
    zoneNumber: a,
    accuracy: m
  };
}
function Kx(t, e) {
  for (var r = Nv.charCodeAt(e - 1), n = 1e5, i = !1; r !== t.charCodeAt(0); ) {
    if (r++, r === sr && r++, r === wr && r++, r > Ta) {
      if (i)
        throw "Bad character: " + t;
      r = $s, i = !0;
    }
    n += 1e5;
  }
  return n;
}
function Zx(t, e) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var r = Cv.charCodeAt(e - 1), n = 0, i = !1; r !== t.charCodeAt(0); ) {
    if (r++, r === sr && r++, r === wr && r++, r > Ma) {
      if (i)
        throw "Bad character: " + t;
      r = $s, i = !0;
    }
    n += 1e5;
  }
  return n;
}
function Jx(t) {
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
function ta(t, e, r) {
  if (!(this instanceof ta))
    return new ta(t, e, r);
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
ta.fromMGRS = function(t) {
  return new ta(Pv(t));
};
ta.prototype.toMGRS = function(t) {
  return Lv([this.x, this.y], t);
};
var Qx = 1, eO = 0.25, Vp = 0.046875, jp = 0.01953125, Gp = 0.01068115234375, tO = 0.75, rO = 0.46875, nO = 0.013020833333333334, iO = 0.007120768229166667, sO = 0.3645833333333333, aO = 0.005696614583333333, oO = 0.3076171875;
function Dv(t) {
  var e = [];
  e[0] = Qx - t * (eO + t * (Vp + t * (jp + t * Gp))), e[1] = t * (tO - t * (Vp + t * (jp + t * Gp)));
  var r = t * t;
  return e[2] = r * (rO - t * (nO + t * iO)), r *= t, e[3] = r * (sO - t * aO), e[4] = r * t * oO, e;
}
function Zu(t, e, r, n) {
  return r *= e, e *= e, n[0] * t - r * (n[1] + e * (n[2] + e * (n[3] + e * n[4])));
}
var lO = 20;
function Iv(t, e, r) {
  for (var n = 1 / (1 - e), i = t, s = lO; s; --s) {
    var a = Math.sin(i), o = 1 - e * a * a;
    if (o = (Zu(i, a, Math.cos(i), r) - t) * (o * Math.sqrt(o)) * n, i -= o, Math.abs(o) < re)
      return i;
  }
  return i;
}
function uO() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Dv(this.es), this.ml0 = Zu(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function cO(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i, s, a, o = Math.sin(r), l = Math.cos(r);
  if (this.es) {
    var f = l * n, c = Math.pow(f, 2), h = this.ep2 * Math.pow(l, 2), d = Math.pow(h, 2), p = Math.abs(l) > re ? Math.tan(r) : 0, m = Math.pow(p, 2), g = Math.pow(m, 2);
    i = 1 - this.es * Math.pow(o, 2), f = f / Math.sqrt(i);
    var y = Zu(r, o, l, this.en);
    s = this.a * (this.k0 * f * (1 + c / 6 * (1 - m + h + c / 20 * (5 - 18 * m + g + 14 * h - 58 * m * h + c / 42 * (61 + 179 * g - g * m - 479 * m))))) + this.x0, a = this.a * (this.k0 * (y - this.ml0 + o * n * f / 2 * (1 + c / 12 * (5 - m + 9 * h + 4 * d + c / 30 * (61 + g - 58 * m + 270 * h - 330 * m * h + c / 56 * (1385 + 543 * g - g * m - 3111 * m)))))) + this.y0;
  } else {
    var u = l * Math.sin(n);
    if (Math.abs(Math.abs(u) - 1) < re)
      return 93;
    if (s = 0.5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)) + this.x0, a = l * Math.cos(n) / Math.sqrt(1 - Math.pow(u, 2)), u = Math.abs(a), u >= 1) {
      if (u - 1 > re)
        return 93;
      a = 0;
    } else
      a = Math.acos(a);
    r < 0 && (a = -a), a = this.a * this.k0 * (a - this.lat0) + this.y0;
  }
  return t.x = s, t.y = a, t;
}
function fO(t) {
  var e, r, n, i, s = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (e = this.ml0 + a / this.k0, r = Iv(e, this.es, this.en), Math.abs(r) < H) {
      var c = Math.sin(r), h = Math.cos(r), d = Math.abs(h) > re ? Math.tan(r) : 0, p = this.ep2 * Math.pow(h, 2), m = Math.pow(p, 2), g = Math.pow(d, 2), y = Math.pow(g, 2);
      e = 1 - this.es * Math.pow(c, 2);
      var v = s * Math.sqrt(e) / this.k0, b = Math.pow(v, 2);
      e = e * d, n = r - e * b / (1 - this.es) * 0.5 * (1 - b / 12 * (5 + 3 * g - 9 * p * g + p - 4 * m - b / 30 * (61 + 90 * g - 252 * p * g + 45 * y + 46 * p - b / 56 * (1385 + 3633 * g + 4095 * y + 1574 * y * g)))), i = se(this.long0 + v * (1 - b / 6 * (1 + 2 * g + p - b / 20 * (5 + 28 * g + 24 * y + 8 * p * g + 6 * p - b / 42 * (61 + 662 * g + 1320 * y + 720 * y * g)))) / h);
    } else
      n = H * xo(a), i = 0;
  else {
    var o = Math.exp(s / this.k0), l = 0.5 * (o - 1 / o), u = this.lat0 + a / this.k0, f = Math.cos(u);
    e = Math.sqrt((1 - Math.pow(f, 2)) / (1 + Math.pow(l, 2))), n = Math.asin(e), a < 0 && (n = -n), l === 0 && f === 0 ? i = 0 : i = se(Math.atan2(l, f) + this.long0);
  }
  return t.x = i, t.y = n, t;
}
var hO = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const Rl = {
  init: uO,
  forward: cO,
  inverse: fO,
  names: hO
};
function Rv(t) {
  var e = Math.exp(t);
  return e = (e - 1 / e) / 2, e;
}
function Or(t, e) {
  t = Math.abs(t), e = Math.abs(e);
  var r = Math.max(t, e), n = Math.min(t, e) / (r || 1);
  return r * Math.sqrt(1 + Math.pow(n, 2));
}
function dO(t) {
  var e = 1 + t, r = e - 1;
  return r === 0 ? t : t * Math.log(e) / r;
}
function pO(t) {
  var e = Math.abs(t);
  return e = dO(e * (1 + e / (Or(1, e) + 1))), t < 0 ? -e : e;
}
function Rh(t, e) {
  for (var r = 2 * Math.cos(2 * e), n = t.length - 1, i = t[n], s = 0, a; --n >= 0; )
    a = -s + r * i + t[n], s = i, i = a;
  return e + a * Math.sin(2 * e);
}
function mO(t, e) {
  for (var r = 2 * Math.cos(e), n = t.length - 1, i = t[n], s = 0, a; --n >= 0; )
    a = -s + r * i + t[n], s = i, i = a;
  return Math.sin(e) * a;
}
function gO(t) {
  var e = Math.exp(t);
  return e = (e + 1 / e) / 2, e;
}
function $v(t, e, r) {
  for (var n = Math.sin(e), i = Math.cos(e), s = Rv(r), a = gO(r), o = 2 * i * a, l = -2 * n * s, u = t.length - 1, f = t[u], c = 0, h = 0, d = 0, p, m; --u >= 0; )
    p = h, m = c, h = f, c = d, f = -p + o * h - l * c + t[u], d = -m + l * h + o * c;
  return o = n * a, l = i * s, [o * f - l * d, o * d + l * f];
}
function yO() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (Rl.init.apply(this), this.forward = Rl.forward, this.inverse = Rl.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), e = t / (2 - t), r = e;
  this.cgb[0] = e * (2 + e * (-2 / 3 + e * (-2 + e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675)))))), this.cbg[0] = e * (-2 + e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725)))))), r = r * e, this.cgb[1] = r * (7 / 3 + e * (-8 / 5 + e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))))), this.cbg[1] = r * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))), r = r * e, this.cgb[2] = r * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))), this.cbg[2] = r * (-26 / 15 + e * (34 / 21 + e * (8 / 5 + e * (-12686 / 2835)))), r = r * e, this.cgb[3] = r * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))), this.cbg[3] = r * (1237 / 630 + e * (-12 / 5 + e * (-24832 / 14175))), r = r * e, this.cgb[4] = r * (4174 / 315 + e * (-144838 / 6237)), this.cbg[4] = r * (-734 / 315 + e * (109598 / 31185)), r = r * e, this.cgb[5] = r * (601676 / 22275), this.cbg[5] = r * (444337 / 155925), r = Math.pow(e, 2), this.Qn = this.k0 / (1 + e) * (1 + r * (1 / 4 + r * (1 / 64 + r / 256))), this.utg[0] = e * (-0.5 + e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800)))))), this.gtu[0] = e * (0.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))), this.utg[1] = r * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))), this.gtu[1] = r * (13 / 48 + e * (-3 / 5 + e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))))), r = r * e, this.utg[2] = r * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))), this.gtu[2] = r * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))), r = r * e, this.utg[3] = r * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))), this.gtu[3] = r * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))), r = r * e, this.utg[4] = r * (-4583 / 161280 + e * (108847 / 3991680)), this.gtu[4] = r * (34729 / 80640 + e * (-3418889 / 1995840)), r = r * e, this.utg[5] = r * (-20648693 / 638668800), this.gtu[5] = r * (212378941 / 319334400);
  var n = Rh(this.cbg, this.lat0);
  this.Zb = -this.Qn * (n + mO(this.gtu, 2 * n));
}
function vO(t) {
  var e = se(t.x - this.long0), r = t.y;
  r = Rh(this.cbg, r);
  var n = Math.sin(r), i = Math.cos(r), s = Math.sin(e), a = Math.cos(e);
  r = Math.atan2(n, a * i), e = Math.atan2(s * i, Or(n, i * a)), e = pO(Math.tan(e));
  var o = $v(this.gtu, 2 * r, 2 * e);
  r = r + o[0], e = e + o[1];
  var l, u;
  return Math.abs(e) <= 2.623395162778 ? (l = this.a * (this.Qn * e) + this.x0, u = this.a * (this.Qn * r + this.Zb) + this.y0) : (l = 1 / 0, u = 1 / 0), t.x = l, t.y = u, t;
}
function _O(t) {
  var e = (t.x - this.x0) * (1 / this.a), r = (t.y - this.y0) * (1 / this.a);
  r = (r - this.Zb) / this.Qn, e = e / this.Qn;
  var n, i;
  if (Math.abs(e) <= 2.623395162778) {
    var s = $v(this.utg, 2 * r, 2 * e);
    r = r + s[0], e = e + s[1], e = Math.atan(Rv(e));
    var a = Math.sin(r), o = Math.cos(r), l = Math.sin(e), u = Math.cos(e);
    r = Math.atan2(a * u, Or(l, u * o)), e = Math.atan2(l, u * o), n = se(e + this.long0), i = Rh(this.cgb, r);
  } else
    n = 1 / 0, i = 1 / 0;
  return t.x = n, t.y = i, t;
}
var bO = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const $l = {
  init: yO,
  forward: vO,
  inverse: _O,
  names: bO
};
function EO(t, e) {
  if (t === void 0) {
    if (t = Math.floor((se(e) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var SO = "etmerc";
function wO() {
  var t = EO(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * At, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, $l.init.apply(this), this.forward = $l.forward, this.inverse = $l.inverse;
}
var xO = ["Universal Transverse Mercator System", "utm"];
const OO = {
  init: wO,
  names: xO,
  dependsOn: SO
};
function $h(t, e) {
  return Math.pow((1 - t) / (1 + t), e);
}
var MO = 20;
function TO() {
  var t = Math.sin(this.lat0), e = Math.cos(this.lat0);
  e *= e, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + We) / (Math.pow(Math.tan(0.5 * this.lat0 + We), this.C) * $h(this.e * t, this.ratexp));
}
function NO(t) {
  var e = t.x, r = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * r + We), this.C) * $h(this.e * Math.sin(r), this.ratexp)) - H, t.x = this.C * e, t;
}
function CO(t) {
  for (var e = 1e-14, r = t.x / this.C, n = t.y, i = Math.pow(Math.tan(0.5 * n + We) / this.K, 1 / this.C), s = MO; s > 0 && (n = 2 * Math.atan(i * $h(this.e * Math.sin(t.y), -0.5 * this.e)) - H, !(Math.abs(n - t.y) < e)); --s)
    t.y = n;
  return s ? (t.x = r, t.y = n, t) : null;
}
var LO = ["gauss"];
const Fh = {
  init: TO,
  forward: NO,
  inverse: CO,
  names: LO
};
function PO() {
  Fh.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function kO(t) {
  var e, r, n, i;
  return t.x = se(t.x - this.long0), Fh.forward.apply(this, [t]), e = Math.sin(t.y), r = Math.cos(t.y), n = Math.cos(t.x), i = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * r * n), t.x = i * r * Math.sin(t.x), t.y = i * (this.cosc0 * e - this.sinc0 * r * n), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function AO(t) {
  var e, r, n, i, s;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, s = Or(t.x, t.y)) {
    var a = 2 * Math.atan2(s, this.R2);
    e = Math.sin(a), r = Math.cos(a), i = Math.asin(r * this.sinc0 + t.y * e * this.cosc0 / s), n = Math.atan2(t.x * e, s * this.cosc0 * r - t.y * this.sinc0 * e);
  } else
    i = this.phic0, n = 0;
  return t.x = n, t.y = i, Fh.inverse.apply(this, [t]), t.x = se(t.x + this.long0), t;
}
var DO = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const IO = {
  init: PO,
  forward: kO,
  inverse: AO,
  names: DO
};
function RO(t, e, r) {
  return e *= r, Math.tan(0.5 * (H + t)) * Math.pow((1 - e) / (1 + e), 0.5 * r);
}
function $O() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= re && (this.k0 = 0.5 * (1 + xo(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= re && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= re && Math.abs(Math.cos(this.lat_ts)) > re && (this.k0 = 0.5 * this.cons * bn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / zr(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = bn(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - H, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function FO(t) {
  var e = t.x, r = t.y, n = Math.sin(r), i = Math.cos(r), s, a, o, l, u, f, c = se(e - this.long0);
  return Math.abs(Math.abs(e - this.long0) - Math.PI) <= re && Math.abs(r + this.lat0) <= re ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * n + this.coslat0 * i * Math.cos(c)), t.x = this.a * s * i * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * n - this.sinlat0 * i * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(r, n, this.e)) - H, l = Math.cos(a), o = Math.sin(a), Math.abs(this.coslat0) <= re ? (u = zr(this.e, r * this.con, this.con * n), f = 2 * this.a * this.k0 * u / this.cons, t.x = this.x0 + f * Math.sin(e - this.long0), t.y = this.y0 - this.con * f * Math.cos(e - this.long0), t) : (Math.abs(this.sinlat0) < re ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(c)), t.y = s * o) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * o + this.cosX0 * l * Math.cos(c))), t.y = s * (this.cosX0 * o - this.sinX0 * l * Math.cos(c)) + this.y0), t.x = s * l * Math.sin(c) + this.x0, t));
}
function VO(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, r, n, i, s, a = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var o = 2 * Math.atan(a / (2 * this.a * this.k0));
    return e = this.long0, r = this.lat0, a <= re ? (t.x = e, t.y = r, t) : (r = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / a), Math.abs(this.coslat0) < re ? this.lat0 > 0 ? e = se(this.long0 + Math.atan2(t.x, -1 * t.y)) : e = se(this.long0 + Math.atan2(t.x, t.y)) : e = se(this.long0 + Math.atan2(t.x * Math.sin(o), a * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = e, t.y = r, t);
  } else if (Math.abs(this.coslat0) <= re) {
    if (a <= re)
      return r = this.lat0, e = this.long0, t.x = e, t.y = r, t;
    t.x *= this.con, t.y *= this.con, n = a * this.cons / (2 * this.a * this.k0), r = this.con * lo(this.e, n), e = this.con * se(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    i = 2 * Math.atan(a * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e = this.long0, a <= re ? s = this.X0 : (s = Math.asin(Math.cos(i) * this.sinX0 + t.y * Math.sin(i) * this.cosX0 / a), e = se(this.long0 + Math.atan2(t.x * Math.sin(i), a * this.cosX0 * Math.cos(i) - t.y * this.sinX0 * Math.sin(i)))), r = -1 * lo(this.e, Math.tan(0.5 * (H + s)));
  return t.x = e, t.y = r, t;
}
var jO = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)", "Polar_Stereographic"];
const GO = {
  init: $O,
  forward: FO,
  inverse: VO,
  names: jO,
  ssfn_: RO
};
function UO() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var e = Math.sin(t), r = this.a, n = this.rf, i = 1 / n, s = 2 * i - Math.pow(i, 2), a = this.e = Math.sqrt(s);
  this.R = this.k0 * r * Math.sqrt(1 - s) / (1 - s * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
  var o = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + a * e) / (1 - a * e));
  this.K = o - this.alpha * l + this.alpha * a / 2 * u;
}
function BO(t) {
  var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), r = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), n = -this.alpha * (e + r) + this.K, i = 2 * (Math.atan(Math.exp(n)) - Math.PI / 4), s = this.alpha * (t.x - this.lambda0), a = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(i) + Math.cos(this.b0) * Math.cos(s))), o = Math.asin(Math.cos(this.b0) * Math.sin(i) - Math.sin(this.b0) * Math.cos(i) * Math.cos(s));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(o)) / (1 - Math.sin(o))) + this.y0, t.x = this.R * a + this.x0, t;
}
function WO(t) {
  for (var e = t.x - this.x0, r = t.y - this.y0, n = e / this.R, i = 2 * (Math.atan(Math.exp(r / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(i) + Math.sin(this.b0) * Math.cos(i) * Math.cos(n)), a = Math.atan(Math.sin(n) / (Math.cos(this.b0) * Math.cos(n) - Math.sin(this.b0) * Math.tan(i))), o = this.lambda0 + a / this.alpha, l = 0, u = s, f = -1e3, c = 0; Math.abs(u - f) > 1e-7; ) {
    if (++c > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), f = u, u = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return t.x = o, t.y = u, t;
}
var qO = ["somerc"];
const HO = {
  init: UO,
  forward: BO,
  inverse: WO,
  names: qO
};
var ks = 1e-7;
function zO(t) {
  var e = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], r = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || e.indexOf(r) !== -1;
}
function YO() {
  var t, e, r, n, i, s, a, o, l, u, f = 0, c, h = 0, d = 0, p = 0, m = 0, g = 0, y = 0;
  this.no_off = zO(this), this.no_rot = "no_rot" in this;
  var v = !1;
  "alpha" in this && (v = !0);
  var b = !1;
  if ("rectified_grid_angle" in this && (b = !0), v && (y = this.alpha), b && (f = this.rectified_grid_angle * At), v || b)
    h = this.longc;
  else if (d = this.long1, m = this.lat1, p = this.long2, g = this.lat2, Math.abs(m - g) <= ks || (t = Math.abs(m)) <= ks || Math.abs(t - H) <= ks || Math.abs(Math.abs(this.lat0) - H) <= ks || Math.abs(Math.abs(g) - H) <= ks)
    throw new Error();
  var E = 1 - this.es;
  e = Math.sqrt(E), Math.abs(this.lat0) > re ? (o = Math.sin(this.lat0), r = Math.cos(this.lat0), t = 1 - this.es * o * o, this.B = r * r, this.B = Math.sqrt(1 + this.es * this.B * this.B / E), this.A = this.B * this.k0 * e / t, n = this.B * e / (r * Math.sqrt(t)), i = n * n - 1, i <= 0 ? i = 0 : (i = Math.sqrt(i), this.lat0 < 0 && (i = -i)), this.E = i += n, this.E *= Math.pow(zr(this.e, this.lat0, o), this.B)) : (this.B = 1 / e, this.A = this.k0, this.E = n = i = 1), v || b ? (v ? (c = Math.asin(Math.sin(y) / n), b || (f = y)) : (c = f, y = Math.asin(n * Math.sin(c))), this.lam0 = h - Math.asin(0.5 * (i - 1 / i) * Math.tan(c)) / this.B) : (s = Math.pow(zr(this.e, m, Math.sin(m)), this.B), a = Math.pow(zr(this.e, g, Math.sin(g)), this.B), i = this.E / s, l = (a - s) / (a + s), u = this.E * this.E, u = (u - a * s) / (u + a * s), t = d - p, t < -Math.pi ? p -= ao : t > Math.pi && (p += ao), this.lam0 = se(0.5 * (d + p) - Math.atan(u * Math.tan(0.5 * this.B * (d - p)) / l) / this.B), c = Math.atan(2 * Math.sin(this.B * se(d - this.lam0)) / (i - 1 / i)), f = y = Math.asin(n * Math.sin(c))), this.singam = Math.sin(c), this.cosgam = Math.cos(c), this.sinrot = Math.sin(f), this.cosrot = Math.cos(f), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(n * n - 1) / Math.cos(y))), this.lat0 < 0 && (this.u_0 = -this.u_0)), i = 0.5 * c, this.v_pole_n = this.ArB * Math.log(Math.tan(We - i)), this.v_pole_s = this.ArB * Math.log(Math.tan(We + i));
}
function XO(t) {
  var e = {}, r, n, i, s, a, o, l, u;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - H) > re) {
    if (a = this.E / Math.pow(zr(this.e, t.y, Math.sin(t.y)), this.B), o = 1 / a, r = 0.5 * (a - o), n = 0.5 * (a + o), s = Math.sin(this.B * t.x), i = (r * this.singam - s * this.cosgam) / n, Math.abs(Math.abs(i) - 1) < re)
      throw new Error();
    u = 0.5 * this.ArB * Math.log((1 - i) / (1 + i)), o = Math.cos(this.B * t.x), Math.abs(o) < ks ? l = this.A * t.x : l = this.ArB * Math.atan2(r * this.cosgam + s * this.singam, o);
  } else
    u = t.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * t.y;
  return this.no_rot ? (e.x = l, e.y = u) : (l -= this.u_0, e.x = u * this.cosrot + l * this.sinrot, e.y = l * this.cosrot - u * this.sinrot), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function KO(t) {
  var e, r, n, i, s, a, o, l = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (r = t.y, e = t.x) : (r = t.x * this.cosrot - t.y * this.sinrot, e = t.y * this.cosrot + t.x * this.sinrot + this.u_0), n = Math.exp(-this.BrA * r), i = 0.5 * (n - 1 / n), s = 0.5 * (n + 1 / n), a = Math.sin(this.BrA * e), o = (a * this.cosgam + i * this.singam) / s, Math.abs(Math.abs(o) - 1) < re)
    l.x = 0, l.y = o < 0 ? -H : H;
  else {
    if (l.y = this.E / Math.sqrt((1 + o) / (1 - o)), l.y = lo(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(i * this.cosgam - a * this.singam, Math.cos(this.BrA * e));
  }
  return l.x += this.lam0, l;
}
var ZO = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const JO = {
  init: YO,
  forward: XO,
  inverse: KO,
  names: ZO
};
function QO() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < re)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var e = Math.sin(this.lat1), r = Math.cos(this.lat1), n = bn(this.e, e, r), i = zr(this.e, this.lat1, e), s = Math.sin(this.lat2), a = Math.cos(this.lat2), o = bn(this.e, s, a), l = zr(this.e, this.lat2, s), u = zr(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > re ? this.ns = Math.log(n / o) / Math.log(i / l) : this.ns = e, isNaN(this.ns) && (this.ns = e), this.f0 = n / (this.ns * Math.pow(i, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function eM(t) {
  var e = t.x, r = t.y;
  Math.abs(2 * Math.abs(r) - Math.PI) <= re && (r = xo(r) * (H - 2 * re));
  var n = Math.abs(Math.abs(r) - H), i, s;
  if (n > re)
    i = zr(this.e, r, Math.sin(r)), s = this.a * this.f0 * Math.pow(i, this.ns);
  else {
    if (n = r * this.ns, n <= 0)
      return null;
    s = 0;
  }
  var a = this.ns * se(e - this.long0);
  return t.x = this.k0 * (s * Math.sin(a)) + this.x0, t.y = this.k0 * (this.rh - s * Math.cos(a)) + this.y0, t;
}
function tM(t) {
  var e, r, n, i, s, a = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (e = Math.sqrt(a * a + o * o), r = 1) : (e = -Math.sqrt(a * a + o * o), r = -1);
  var l = 0;
  if (e !== 0 && (l = Math.atan2(r * a, r * o)), e !== 0 || this.ns > 0) {
    if (r = 1 / this.ns, n = Math.pow(e / (this.a * this.f0), r), i = lo(this.e, n), i === -9999)
      return null;
  } else
    i = -H;
  return s = se(l / this.ns + this.long0), t.x = s, t.y = i, t;
}
var rM = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const nM = {
  init: QO,
  forward: eM,
  inverse: tM,
  names: rM
};
function iM() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function sM(t) {
  var e, r, n, i, s, a, o, l = t.x, u = t.y, f = se(l - this.long0);
  return e = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), r = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / e) - this.s45), n = -f * this.alfa, i = Math.asin(Math.cos(this.ad) * Math.sin(r) + Math.sin(this.ad) * Math.cos(r) * Math.cos(n)), s = Math.asin(Math.cos(r) * Math.sin(n) / Math.cos(i)), a = this.n * s, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(i / 2 + this.s45), this.n), t.y = o * Math.cos(a) / 1, t.x = o * Math.sin(a) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function aM(t) {
  var e, r, n, i, s, a, o, l, u = t.x;
  t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), a = Math.sqrt(t.x * t.x + t.y * t.y), s = Math.atan2(t.y, t.x), i = s / Math.sin(this.s0), n = 2 * (Math.atan(Math.pow(this.ro0 / a, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(n) - Math.sin(this.ad) * Math.cos(n) * Math.cos(i)), r = Math.asin(Math.cos(n) * Math.sin(i) / Math.cos(e)), t.x = this.long0 - r / this.alfa, o = e, l = 0;
  var f = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(o)) / (1 - this.e * Math.sin(o)), this.e / 2)) - this.s45), Math.abs(o - t.y) < 1e-10 && (l = 1), o = t.y, f += 1;
  while (l === 0 && f < 15);
  return f >= 15 ? null : t;
}
var oM = ["Krovak", "krovak"];
const lM = {
  init: iM,
  forward: sM,
  inverse: aM,
  names: oM
};
function Jt(t, e, r, n, i) {
  return t * i - e * Math.sin(2 * i) + r * Math.sin(4 * i) - n * Math.sin(6 * i);
}
function Oo(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function Mo(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function To(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function No(t) {
  return t * t * t * (35 / 3072);
}
function ra(t, e, r) {
  var n = e * r;
  return t / Math.sqrt(1 - n * n);
}
function aa(t) {
  return Math.abs(t) < H ? t : t - xo(t) * Math.PI;
}
function lu(t, e, r, n, i) {
  var s, a;
  s = t / e;
  for (var o = 0; o < 15; o++)
    if (a = (t - (e * s - r * Math.sin(2 * s) + n * Math.sin(4 * s) - i * Math.sin(6 * s))) / (e - 2 * r * Math.cos(2 * s) + 4 * n * Math.cos(4 * s) - 6 * i * Math.cos(6 * s)), s += a, Math.abs(a) <= 1e-10)
      return s;
  return NaN;
}
function uM() {
  this.sphere || (this.e0 = Oo(this.es), this.e1 = Mo(this.es), this.e2 = To(this.es), this.e3 = No(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function cM(t) {
  var e, r, n = t.x, i = t.y;
  if (n = se(n - this.long0), this.sphere)
    e = this.a * Math.asin(Math.cos(i) * Math.sin(n)), r = this.a * (Math.atan2(Math.tan(i), Math.cos(n)) - this.lat0);
  else {
    var s = Math.sin(i), a = Math.cos(i), o = ra(this.a, this.e, s), l = Math.tan(i) * Math.tan(i), u = n * Math.cos(i), f = u * u, c = this.es * a * a / (1 - this.es), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, i);
    e = o * u * (1 - f * l * (1 / 6 - (8 - l + 8 * c) * f / 120)), r = h - this.ml0 + o * s / a * f * (0.5 + (5 - l + 6 * c) * f / 24);
  }
  return t.x = e + this.x0, t.y = r + this.y0, t;
}
function fM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, r = t.y / this.a, n, i;
  if (this.sphere) {
    var s = r + this.lat0;
    n = Math.asin(Math.sin(s) * Math.cos(e)), i = Math.atan2(Math.tan(e), Math.cos(s));
  } else {
    var a = this.ml0 / this.a + r, o = lu(a, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(o) - H) <= re)
      return t.x = this.long0, t.y = H, r < 0 && (t.y *= -1), t;
    var l = ra(this.a, this.e, Math.sin(o)), u = l * l * l / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = e * this.a / l, h = c * c;
    n = o - l * Math.tan(o) / u * c * c * (0.5 - (1 + 3 * f) * c * c / 24), i = c * (1 - h * (f / 3 + (1 + 3 * f) * f * h / 15)) / Math.cos(o);
  }
  return t.x = se(i + this.long0), t.y = aa(n), t;
}
var hM = ["Cassini", "Cassini_Soldner", "cass"];
const dM = {
  init: uM,
  forward: cM,
  inverse: fM,
  names: hM
};
function Ei(t, e) {
  var r;
  return t > 1e-7 ? (r = t * e, (1 - t * t) * (e / (1 - r * r) - 0.5 / t * Math.log((1 - r) / (1 + r)))) : 2 * e;
}
var pM = 1, mM = 2, gM = 3, yM = 4;
function vM() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - H) < re ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < re ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var e;
    switch (this.qp = Ei(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = TM(this.es), this.mode) {
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
function _M(t) {
  var e, r, n, i, s, a, o, l, u, f, c = t.x, h = t.y;
  if (c = se(c - this.long0), this.sphere) {
    if (s = Math.sin(h), f = Math.cos(h), n = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (r = this.mode === this.EQUIT ? 1 + f * n : 1 + this.sinph0 * s + this.cosph0 * f * n, r <= re)
        return null;
      r = Math.sqrt(2 / r), e = r * f * Math.sin(c), r *= this.mode === this.EQUIT ? s : this.cosph0 * s - this.sinph0 * f * n;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (n = -n), Math.abs(h + this.lat0) < re)
        return null;
      r = We - h * 0.5, r = 2 * (this.mode === this.S_POLE ? Math.cos(r) : Math.sin(r)), e = r * Math.sin(c), r *= n;
    }
  } else {
    switch (o = 0, l = 0, u = 0, n = Math.cos(c), i = Math.sin(c), s = Math.sin(h), a = Ei(this.e, s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = a / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
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
    if (Math.abs(u) < re)
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
function bM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = t.x / this.a, r = t.y / this.a, n, i, s, a, o, l, u;
  if (this.sphere) {
    var f = 0, c, h = 0;
    if (c = Math.sqrt(e * e + r * r), i = c * 0.5, i > 1)
      return null;
    switch (i = 2 * Math.asin(i), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (h = Math.sin(i), f = Math.cos(i)), this.mode) {
      case this.EQUIT:
        i = Math.abs(c) <= re ? 0 : Math.asin(r * h / c), e *= h, r = f * c;
        break;
      case this.OBLIQ:
        i = Math.abs(c) <= re ? this.lat0 : Math.asin(f * this.sinph0 + r * h * this.cosph0 / c), e *= h * this.cosph0, r = (f - Math.sin(i) * this.sinph0) * c;
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
      if (e /= this.dd, r *= this.dd, l = Math.sqrt(e * e + r * r), l < re)
        return t.x = this.long0, t.y = this.lat0, t;
      a = 2 * Math.asin(0.5 * l / this.rq), s = Math.cos(a), e *= a = Math.sin(a), this.mode === this.OBLIQ ? (u = s * this.sinb1 + r * a * this.cosb1 / l, o = this.qp * u, r = l * this.cosb1 * s - r * this.sinb1 * a) : (u = r * a / l, o = this.qp * u, r = l * s);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (r = -r), o = e * e + r * r, !o)
        return t.x = this.long0, t.y = this.lat0, t;
      u = 1 - o / this.qp, this.mode === this.S_POLE && (u = -u);
    }
    n = Math.atan2(e, r), i = NM(Math.asin(u), this.apa);
  }
  return t.x = se(this.long0 + n), t.y = i, t;
}
var EM = 0.3333333333333333, SM = 0.17222222222222222, wM = 0.10257936507936508, xM = 0.06388888888888888, OM = 0.0664021164021164, MM = 0.016415012942191543;
function TM(t) {
  var e, r = [];
  return r[0] = t * EM, e = t * t, r[0] += e * SM, r[1] = e * xM, e *= t, r[0] += e * wM, r[1] += e * OM, r[2] = e * MM, r;
}
function NM(t, e) {
  var r = t + t;
  return t + e[0] * Math.sin(r) + e[1] * Math.sin(r + r) + e[2] * Math.sin(r + r + r);
}
var CM = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const LM = {
  init: vM,
  forward: _M,
  inverse: bM,
  names: CM,
  S_POLE: pM,
  N_POLE: mM,
  EQUIT: gM,
  OBLIQ: yM
};
function Mi(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function PM() {
  Math.abs(this.lat1 + this.lat2) < re || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = bn(this.e3, this.sin_po, this.cos_po), this.qs1 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = bn(this.e3, this.sin_po, this.cos_po), this.qs2 = Ei(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = Ei(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > re ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function kM(t) {
  var e = t.x, r = t.y;
  this.sin_phi = Math.sin(r), this.cos_phi = Math.cos(r);
  var n = Ei(this.e3, this.sin_phi), i = this.a * Math.sqrt(this.c - this.ns0 * n) / this.ns0, s = this.ns0 * se(e - this.long0), a = i * Math.sin(s) + this.x0, o = this.rh - i * Math.cos(s) + this.y0;
  return t.x = a, t.y = o, t;
}
function AM(t) {
  var e, r, n, i, s, a;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y), n = 1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y), n = -1), i = 0, e !== 0 && (i = Math.atan2(n * t.x, n * t.y)), n = e * this.ns0 / this.a, this.sphere ? a = Math.asin((this.c - n * n) / (2 * this.ns0)) : (r = (this.c - n * n) / this.ns0, a = this.phi1z(this.e3, r)), s = se(i / this.ns0 + this.long0), t.x = s, t.y = a, t;
}
function DM(t, e) {
  var r, n, i, s, a, o = Mi(0.5 * e);
  if (t < re)
    return o;
  for (var l = t * t, u = 1; u <= 25; u++)
    if (r = Math.sin(o), n = Math.cos(o), i = t * r, s = 1 - i * i, a = 0.5 * s * s / n * (e / (1 - l) - r / s + 0.5 / t * Math.log((1 - i) / (1 + i))), o = o + a, Math.abs(a) <= 1e-7)
      return o;
  return null;
}
var IM = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const RM = {
  init: PM,
  forward: kM,
  inverse: AM,
  names: IM,
  phi1z: DM
};
function $M() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function FM(t) {
  var e, r, n, i, s, a, o, l, u = t.x, f = t.y;
  return n = se(u - this.long0), e = Math.sin(f), r = Math.cos(f), i = Math.cos(n), a = this.sin_p14 * e + this.cos_p14 * r * i, s = 1, a > 0 || Math.abs(a) <= re ? (o = this.x0 + this.a * s * r * Math.sin(n) / a, l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * r * i) / a) : (o = this.x0 + this.infinity_dist * r * Math.sin(n), l = this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * r * i)), t.x = o, t.y = l, t;
}
function VM(t) {
  var e, r, n, i, s, a;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (i = Math.atan2(e, this.rc), r = Math.sin(i), n = Math.cos(i), a = Mi(n * this.sin_p14 + t.y * r * this.cos_p14 / e), s = Math.atan2(t.x * r, e * this.cos_p14 * n - t.y * this.sin_p14 * r), s = se(this.long0 + s)) : (a = this.phic0, s = 0), t.x = s, t.y = a, t;
}
var jM = ["gnom"];
const GM = {
  init: $M,
  forward: FM,
  inverse: VM,
  names: jM
};
function UM(t, e) {
  var r = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(e) - r) < 1e-6)
    return e < 0 ? -1 * H : H;
  for (var n = Math.asin(0.5 * e), i, s, a, o, l = 0; l < 30; l++)
    if (s = Math.sin(n), a = Math.cos(n), o = t * s, i = Math.pow(1 - o * o, 2) / (2 * a) * (e / (1 - t * t) - s / (1 - o * o) + 0.5 / t * Math.log((1 - o) / (1 + o))), n += i, Math.abs(i) <= 1e-10)
      return n;
  return NaN;
}
function BM() {
  this.sphere || (this.k0 = bn(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function WM(t) {
  var e = t.x, r = t.y, n, i, s = se(e - this.long0);
  if (this.sphere)
    n = this.x0 + this.a * s * Math.cos(this.lat_ts), i = this.y0 + this.a * Math.sin(r) / Math.cos(this.lat_ts);
  else {
    var a = Ei(this.e, Math.sin(r));
    n = this.x0 + this.a * this.k0 * s, i = this.y0 + this.a * a * 0.5 / this.k0;
  }
  return t.x = n, t.y = i, t;
}
function qM(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, r;
  return this.sphere ? (e = se(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), r = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (r = UM(this.e, 2 * t.y * this.k0 / this.a), e = se(this.long0 + t.x / (this.a * this.k0))), t.x = e, t.y = r, t;
}
var HM = ["cea"];
const zM = {
  init: BM,
  forward: WM,
  inverse: qM,
  names: HM
};
function YM() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function XM(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i = aa(r - this.lat0);
  return t.x = this.x0 + this.a * n * this.rc, t.y = this.y0 + this.a * i, t;
}
function KM(t) {
  var e = t.x, r = t.y;
  return t.x = se(this.long0 + (e - this.x0) / (this.a * this.rc)), t.y = aa(this.lat0 + (r - this.y0) / this.a), t;
}
var ZM = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const JM = {
  init: YM,
  forward: XM,
  inverse: KM,
  names: ZM
};
var Up = 20;
function QM() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Oo(this.es), this.e1 = Mo(this.es), this.e2 = To(this.es), this.e3 = No(this.es), this.ml0 = this.a * Jt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function eT(t) {
  var e = t.x, r = t.y, n, i, s, a = se(e - this.long0);
  if (s = a * Math.sin(r), this.sphere)
    Math.abs(r) <= re ? (n = this.a * a, i = -1 * this.a * this.lat0) : (n = this.a * Math.sin(s) / Math.tan(r), i = this.a * (aa(r - this.lat0) + (1 - Math.cos(s)) / Math.tan(r)));
  else if (Math.abs(r) <= re)
    n = this.a * a, i = -1 * this.ml0;
  else {
    var o = ra(this.a, this.e, Math.sin(r)) / Math.tan(r);
    n = o * Math.sin(s), i = this.a * Jt(this.e0, this.e1, this.e2, this.e3, r) - this.ml0 + o * (1 - Math.cos(s));
  }
  return t.x = n + this.x0, t.y = i + this.y0, t;
}
function tT(t) {
  var e, r, n, i, s, a, o, l, u;
  if (n = t.x - this.x0, i = t.y - this.y0, this.sphere)
    if (Math.abs(i + this.a * this.lat0) <= re)
      e = se(n / this.a + this.long0), r = 0;
    else {
      a = this.lat0 + i / this.a, o = n * n / this.a / this.a + a * a, l = a;
      var f;
      for (s = Up; s; --s)
        if (f = Math.tan(l), u = -1 * (a * (l * f + 1) - l - 0.5 * (l * l + o) * f) / ((l - a) / f - 1), l += u, Math.abs(u) <= re) {
          r = l;
          break;
        }
      e = se(this.long0 + Math.asin(n * Math.tan(l) / this.a) / Math.sin(r));
    }
  else if (Math.abs(i + this.ml0) <= re)
    r = 0, e = se(this.long0 + n / this.a);
  else {
    a = (this.ml0 + i) / this.a, o = n * n / this.a / this.a + a * a, l = a;
    var c, h, d, p, m;
    for (s = Up; s; --s)
      if (m = this.e * Math.sin(l), c = Math.sqrt(1 - m * m) * Math.tan(l), h = this.a * Jt(this.e0, this.e1, this.e2, this.e3, l), d = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), p = h / this.a, u = (a * (c * p + 1) - p - 0.5 * c * (p * p + o)) / (this.es * Math.sin(2 * l) * (p * p + o - 2 * a * p) / (4 * c) + (a - p) * (c * d - 2 / Math.sin(2 * l)) - d), l -= u, Math.abs(u) <= re) {
        r = l;
        break;
      }
    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(r), 2)) * Math.tan(r), e = se(this.long0 + Math.asin(n * c / this.a) / Math.sin(r));
  }
  return t.x = e, t.y = r, t;
}
var rT = ["Polyconic", "poly"];
const nT = {
  init: QM,
  forward: eT,
  inverse: tT,
  names: rT
};
function iT() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function sT(t) {
  var e, r = t.x, n = t.y, i = n - this.lat0, s = r - this.long0, a = i / Ga * 1e-5, o = s, l = 1, u = 0;
  for (e = 1; e <= 10; e++)
    l = l * a, u = u + this.A[e] * l;
  var f = u, c = o, h = 1, d = 0, p, m, g = 0, y = 0;
  for (e = 1; e <= 6; e++)
    p = h * f - d * c, m = d * f + h * c, h = p, d = m, g = g + this.B_re[e] * h - this.B_im[e] * d, y = y + this.B_im[e] * h + this.B_re[e] * d;
  return t.x = y * this.a + this.x0, t.y = g * this.a + this.y0, t;
}
function aT(t) {
  var e, r = t.x, n = t.y, i = r - this.x0, s = n - this.y0, a = s / this.a, o = i / this.a, l = 1, u = 0, f, c, h = 0, d = 0;
  for (e = 1; e <= 6; e++)
    f = l * a - u * o, c = u * a + l * o, l = f, u = c, h = h + this.C_re[e] * l - this.C_im[e] * u, d = d + this.C_im[e] * l + this.C_re[e] * u;
  for (var p = 0; p < this.iterations; p++) {
    var m = h, g = d, y, v, b = a, E = o;
    for (e = 2; e <= 6; e++)
      y = m * h - g * d, v = g * h + m * d, m = y, g = v, b = b + (e - 1) * (this.B_re[e] * m - this.B_im[e] * g), E = E + (e - 1) * (this.B_im[e] * m + this.B_re[e] * g);
    m = 1, g = 0;
    var O = this.B_re[1], N = this.B_im[1];
    for (e = 2; e <= 6; e++)
      y = m * h - g * d, v = g * h + m * d, m = y, g = v, O = O + e * (this.B_re[e] * m - this.B_im[e] * g), N = N + e * (this.B_im[e] * m + this.B_re[e] * g);
    var M = O * O + N * N;
    h = (b * O + E * N) / M, d = (E * O - b * N) / M;
  }
  var k = h, A = d, C = 1, R = 0;
  for (e = 1; e <= 9; e++)
    C = C * k, R = R + this.D[e] * C;
  var I = this.lat0 + R * Ga * 1e5, Q = this.long0 + A;
  return t.x = Q, t.y = I, t;
}
var oT = ["New_Zealand_Map_Grid", "nzmg"];
const lT = {
  init: iT,
  forward: sT,
  inverse: aT,
  names: oT
};
function uT() {
}
function cT(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i = this.x0 + this.a * n, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + r / 2.5)) * 1.25;
  return t.x = i, t.y = s, t;
}
function fT(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e = se(this.long0 + t.x / this.a), r = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = e, t.y = r, t;
}
var hT = ["Miller_Cylindrical", "mill"];
const dT = {
  init: uT,
  forward: cT,
  inverse: fT,
  names: hT
};
var pT = 20;
function mT() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Dv(this.es);
}
function gT(t) {
  var e, r, n = t.x, i = t.y;
  if (n = se(n - this.long0), this.sphere) {
    if (!this.m)
      i = this.n !== 1 ? Math.asin(this.n * Math.sin(i)) : i;
    else
      for (var s = this.n * Math.sin(i), a = pT; a; --a) {
        var o = (this.m * i + Math.sin(i) - s) / (this.m + Math.cos(i));
        if (i -= o, Math.abs(o) < re)
          break;
      }
    e = this.a * this.C_x * n * (this.m + Math.cos(i)), r = this.a * this.C_y * i;
  } else {
    var l = Math.sin(i), u = Math.cos(i);
    r = this.a * Zu(i, l, u, this.en), e = this.a * n * u / Math.sqrt(1 - this.es * l * l);
  }
  return t.x = e, t.y = r, t;
}
function yT(t) {
  var e, r, n, i;
  return t.x -= this.x0, n = t.x / this.a, t.y -= this.y0, e = t.y / this.a, this.sphere ? (e /= this.C_y, n = n / (this.C_x * (this.m + Math.cos(e))), this.m ? e = Mi((this.m * e + Math.sin(e)) / this.n) : this.n !== 1 && (e = Mi(Math.sin(e) / this.n)), n = se(n + this.long0), e = aa(e)) : (e = Iv(t.y / this.a, this.es, this.en), i = Math.abs(e), i < H ? (i = Math.sin(e), r = this.long0 + t.x * Math.sqrt(1 - this.es * i * i) / (this.a * Math.cos(e)), n = se(r)) : i - re < H && (n = this.long0)), t.x = n, t.y = e, t;
}
var vT = ["Sinusoidal", "sinu"];
const _T = {
  init: mT,
  forward: gT,
  inverse: yT,
  names: vT
};
function bT() {
}
function ET(t) {
  for (var e = t.x, r = t.y, n = se(e - this.long0), i = r, s = Math.PI * Math.sin(r); ; ) {
    var a = -(i + Math.sin(i) - s) / (1 + Math.cos(i));
    if (i += a, Math.abs(a) < re)
      break;
  }
  i /= 2, Math.PI / 2 - Math.abs(r) < re && (n = 0);
  var o = 0.900316316158 * this.a * n * Math.cos(i) + this.x0, l = 1.4142135623731 * this.a * Math.sin(i) + this.y0;
  return t.x = o, t.y = l, t;
}
function ST(t) {
  var e, r;
  t.x -= this.x0, t.y -= this.y0, r = t.y / (1.4142135623731 * this.a), Math.abs(r) > 0.999999999999 && (r = 0.999999999999), e = Math.asin(r);
  var n = se(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(e)));
  n < -Math.PI && (n = -Math.PI), n > Math.PI && (n = Math.PI), r = (2 * e + Math.sin(2 * e)) / Math.PI, Math.abs(r) > 1 && (r = 1);
  var i = Math.asin(r);
  return t.x = n, t.y = i, t;
}
var wT = ["Mollweide", "moll"];
const xT = {
  init: bT,
  forward: ET,
  inverse: ST,
  names: wT
};
function OT() {
  Math.abs(this.lat1 + this.lat2) < re || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Oo(this.es), this.e1 = Mo(this.es), this.e2 = To(this.es), this.e3 = No(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = bn(this.e, this.sinphi, this.cosphi), this.ml1 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < re ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = bn(this.e, this.sinphi, this.cosphi), this.ml2 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Jt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function MT(t) {
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
function TT(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var e, r, n, i;
  this.ns >= 0 ? (r = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (r = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1);
  var s = 0;
  if (r !== 0 && (s = Math.atan2(e * t.x, e * t.y)), this.sphere)
    return i = se(this.long0 + s / this.ns), n = aa(this.g - r / this.a), t.x = i, t.y = n, t;
  var a = this.g - r / this.a;
  return n = lu(a, this.e0, this.e1, this.e2, this.e3), i = se(this.long0 + s / this.ns), t.x = i, t.y = n, t;
}
var NT = ["Equidistant_Conic", "eqdc"];
const CT = {
  init: OT,
  forward: MT,
  inverse: TT,
  names: NT
};
function LT() {
  this.R = this.a;
}
function PT(t) {
  var e = t.x, r = t.y, n = se(e - this.long0), i, s;
  Math.abs(r) <= re && (i = this.x0 + this.R * n, s = this.y0);
  var a = Mi(2 * Math.abs(r / Math.PI));
  (Math.abs(n) <= re || Math.abs(Math.abs(r) - H) <= re) && (i = this.x0, r >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * a) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * a));
  var o = 0.5 * Math.abs(Math.PI / n - n / Math.PI), l = o * o, u = Math.sin(a), f = Math.cos(a), c = f / (u + f - 1), h = c * c, d = c * (2 / u - 1), p = d * d, m = Math.PI * this.R * (o * (c - p) + Math.sqrt(l * (c - p) * (c - p) - (p + l) * (h - p))) / (p + l);
  n < 0 && (m = -m), i = this.x0 + m;
  var g = l + c;
  return m = Math.PI * this.R * (d * g - o * Math.sqrt((p + l) * (l + 1) - g * g)) / (p + l), r >= 0 ? s = this.y0 + m : s = this.y0 - m, t.x = i, t.y = s, t;
}
function kT(t) {
  var e, r, n, i, s, a, o, l, u, f, c, h, d;
  return t.x -= this.x0, t.y -= this.y0, c = Math.PI * this.R, n = t.x / c, i = t.y / c, s = n * n + i * i, a = -Math.abs(i) * (1 + s), o = a - 2 * i * i + n * n, l = -2 * a + 1 + 2 * i * i + s * s, d = i * i / l + (2 * o * o * o / l / l / l - 9 * a * o / l / l) / 27, u = (a - o * o / 3 / l) / l, f = 2 * Math.sqrt(-u / 3), c = 3 * d / u / f, Math.abs(c) > 1 && (c >= 0 ? c = 1 : c = -1), h = Math.acos(c) / 3, t.y >= 0 ? r = (-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI : r = -(-f * Math.cos(h + Math.PI / 3) - o / 3 / l) * Math.PI, Math.abs(n) < re ? e = this.long0 : e = se(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (n * n - i * i) + s * s)) / 2 / n), t.x = e, t.y = r, t;
}
var AT = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const DT = {
  init: LT,
  forward: PT,
  inverse: kT,
  names: AT
};
function IT() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function RT(t) {
  var e = t.x, r = t.y, n = Math.sin(t.y), i = Math.cos(t.y), s = se(e - this.long0), a, o, l, u, f, c, h, d, p, m, g, y, v, b, E, O, N, M, k, A, C, R, I;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= re ? (t.x = this.x0 + this.a * (H - r) * Math.sin(s), t.y = this.y0 - this.a * (H - r) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= re ? (t.x = this.x0 + this.a * (H + r) * Math.sin(s), t.y = this.y0 + this.a * (H + r) * Math.cos(s), t) : (M = this.sin_p12 * n + this.cos_p12 * i * Math.cos(s), O = Math.acos(M), N = O ? O / Math.sin(O) : 1, t.x = this.x0 + this.a * N * i * Math.sin(s), t.y = this.y0 + this.a * N * (this.cos_p12 * n - this.sin_p12 * i * Math.cos(s)), t) : (a = Oo(this.es), o = Mo(this.es), l = To(this.es), u = No(this.es), Math.abs(this.sin_p12 - 1) <= re ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, r), t.x = this.x0 + (f - c) * Math.sin(s), t.y = this.y0 - (f - c) * Math.cos(s), t) : Math.abs(this.sin_p12 + 1) <= re ? (f = this.a * Jt(a, o, l, u, H), c = this.a * Jt(a, o, l, u, r), t.x = this.x0 + (f + c) * Math.sin(s), t.y = this.y0 + (f + c) * Math.cos(s), t) : (h = n / i, d = ra(this.a, this.e, this.sin_p12), p = ra(this.a, this.e, n), m = Math.atan((1 - this.es) * h + this.es * d * this.sin_p12 / (p * i)), g = Math.atan2(Math.sin(s), this.cos_p12 * Math.tan(m) - this.sin_p12 * Math.cos(s)), g === 0 ? k = Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : Math.abs(Math.abs(g) - Math.PI) <= re ? k = -Math.asin(this.cos_p12 * Math.sin(m) - this.sin_p12 * Math.cos(m)) : k = Math.asin(Math.sin(s) * Math.cos(m) / Math.sin(g)), y = this.e * this.sin_p12 / Math.sqrt(1 - this.es), v = this.e * this.cos_p12 * Math.cos(g) / Math.sqrt(1 - this.es), b = y * v, E = v * v, A = k * k, C = A * k, R = C * k, I = R * k, O = d * k * (1 - A * E * (1 - E) / 6 + C / 8 * b * (1 - 2 * E) + R / 120 * (E * (4 - 7 * E) - 3 * y * y * (1 - 7 * E)) - I / 48 * b), t.x = this.x0 + O * Math.sin(g), t.y = this.y0 + O * Math.cos(g), t));
}
function $T(t) {
  t.x -= this.x0, t.y -= this.y0;
  var e, r, n, i, s, a, o, l, u, f, c, h, d, p, m, g, y, v, b, E, O, N, M, k;
  return this.sphere ? (e = Math.sqrt(t.x * t.x + t.y * t.y), e > 2 * H * this.a ? void 0 : (r = e / this.a, n = Math.sin(r), i = Math.cos(r), s = this.long0, Math.abs(e) <= re ? a = this.lat0 : (a = Mi(i * this.sin_p12 + t.y * n * this.cos_p12 / e), o = Math.abs(this.lat0) - H, Math.abs(o) <= re ? this.lat0 >= 0 ? s = se(this.long0 + Math.atan2(t.x, -t.y)) : s = se(this.long0 - Math.atan2(-t.x, t.y)) : s = se(this.long0 + Math.atan2(t.x * n, e * this.cos_p12 * i - t.y * this.sin_p12 * n))), t.x = s, t.y = a, t)) : (l = Oo(this.es), u = Mo(this.es), f = To(this.es), c = No(this.es), Math.abs(this.sin_p12 - 1) <= re ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = h - e, a = lu(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = s, t.y = a, t) : Math.abs(this.sin_p12 + 1) <= re ? (h = this.a * Jt(l, u, f, c, H), e = Math.sqrt(t.x * t.x + t.y * t.y), d = e - h, a = lu(d / this.a, l, u, f, c), s = se(this.long0 + Math.atan2(t.x, t.y)), t.x = s, t.y = a, t) : (e = Math.sqrt(t.x * t.x + t.y * t.y), g = Math.atan2(t.x, t.y), p = ra(this.a, this.e, this.sin_p12), y = Math.cos(g), v = this.e * this.cos_p12 * y, b = -v * v / (1 - this.es), E = 3 * this.es * (1 - b) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), O = e / p, N = O - b * (1 + b) * Math.pow(O, 3) / 6 - E * (1 + 3 * b) * Math.pow(O, 4) / 24, M = 1 - b * N * N / 2 - O * N * N * N / 6, m = Math.asin(this.sin_p12 * Math.cos(N) + this.cos_p12 * Math.sin(N) * y), s = se(this.long0 + Math.asin(Math.sin(g) * Math.sin(N) / Math.cos(m))), k = Math.sin(m), a = Math.atan2((k - this.es * M * this.sin_p12) * Math.tan(m), k * (1 - this.es)), t.x = s, t.y = a, t));
}
var FT = ["Azimuthal_Equidistant", "aeqd"];
const VT = {
  init: IT,
  forward: RT,
  inverse: $T,
  names: FT
};
function jT() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function GT(t) {
  var e, r, n, i, s, a, o, l, u = t.x, f = t.y;
  return n = se(u - this.long0), e = Math.sin(f), r = Math.cos(f), i = Math.cos(n), a = this.sin_p14 * e + this.cos_p14 * r * i, s = 1, (a > 0 || Math.abs(a) <= re) && (o = this.a * s * r * Math.sin(n), l = this.y0 + this.a * s * (this.cos_p14 * e - this.sin_p14 * r * i)), t.x = o, t.y = l, t;
}
function UT(t) {
  var e, r, n, i, s, a, o;
  return t.x -= this.x0, t.y -= this.y0, e = Math.sqrt(t.x * t.x + t.y * t.y), r = Mi(e / this.a), n = Math.sin(r), i = Math.cos(r), a = this.long0, Math.abs(e) <= re ? (o = this.lat0, t.x = a, t.y = o, t) : (o = Mi(i * this.sin_p14 + t.y * n * this.cos_p14 / e), s = Math.abs(this.lat0) - H, Math.abs(s) <= re ? (this.lat0 >= 0 ? a = se(this.long0 + Math.atan2(t.x, -t.y)) : a = se(this.long0 - Math.atan2(-t.x, t.y)), t.x = a, t.y = o, t) : (a = se(this.long0 + Math.atan2(t.x * n, e * this.cos_p14 * i - t.y * this.sin_p14 * n)), t.x = a, t.y = o, t));
}
var BT = ["ortho"];
const WT = {
  init: jT,
  forward: GT,
  inverse: UT,
  names: BT
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
function qT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= H - We / 2 ? this.face = ot.TOP : this.lat0 <= -(H - We / 2) ? this.face = ot.BOTTOM : Math.abs(this.long0) <= We ? this.face = ot.FRONT : Math.abs(this.long0) <= H + We ? this.face = this.long0 > 0 ? ot.RIGHT : ot.LEFT : this.face = ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function HT(t) {
  var e = { x: 0, y: 0 }, r, n, i, s, a, o, l = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? r = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : r = t.y, n = t.x, this.face === ot.TOP)
    s = H - r, n >= We && n <= H + We ? (l.value = qe.AREA_0, i = n - H) : n > H + We || n <= -(H + We) ? (l.value = qe.AREA_1, i = n > 0 ? n - gt : n + gt) : n > -(H + We) && n <= -We ? (l.value = qe.AREA_2, i = n + H) : (l.value = qe.AREA_3, i = n);
  else if (this.face === ot.BOTTOM)
    s = H + r, n >= We && n <= H + We ? (l.value = qe.AREA_0, i = -n + H) : n < We && n >= -We ? (l.value = qe.AREA_1, i = -n) : n < -We && n >= -(H + We) ? (l.value = qe.AREA_2, i = -n - H) : (l.value = qe.AREA_3, i = n > 0 ? -n + gt : -n - gt);
  else {
    var u, f, c, h, d, p, m;
    this.face === ot.RIGHT ? n = zs(n, +H) : this.face === ot.BACK ? n = zs(n, +gt) : this.face === ot.LEFT && (n = zs(n, -H)), h = Math.sin(r), d = Math.cos(r), p = Math.sin(n), m = Math.cos(n), u = d * m, f = d * p, c = h, this.face === ot.FRONT ? (s = Math.acos(u), i = tl(s, c, f, l)) : this.face === ot.RIGHT ? (s = Math.acos(f), i = tl(s, c, -u, l)) : this.face === ot.BACK ? (s = Math.acos(-u), i = tl(s, c, -f, l)) : this.face === ot.LEFT ? (s = Math.acos(-f), i = tl(s, c, u, l)) : (s = i = 0, l.value = qe.AREA_0);
  }
  return o = Math.atan(12 / gt * (i + Math.acos(Math.sin(i) * Math.cos(We)) - H)), a = Math.sqrt((1 - Math.cos(s)) / (Math.cos(o) * Math.cos(o)) / (1 - Math.cos(Math.atan(1 / Math.cos(i))))), l.value === qe.AREA_1 ? o += H : l.value === qe.AREA_2 ? o += gt : l.value === qe.AREA_3 && (o += 1.5 * gt), e.x = a * Math.cos(o), e.y = a * Math.sin(o), e.x = e.x * this.a + this.x0, e.y = e.y * this.a + this.y0, t.x = e.x, t.y = e.y, t;
}
function zT(t) {
  var e = { lam: 0, phi: 0 }, r, n, i, s, a, o, l, u, f, c = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, n = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), r = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? c.value = qe.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (c.value = qe.AREA_1, r -= H) : t.x < 0 && -t.x >= Math.abs(t.y) ? (c.value = qe.AREA_2, r = r < 0 ? r + gt : r - gt) : (c.value = qe.AREA_3, r += H), f = gt / 12 * Math.tan(r), a = Math.sin(f) / (Math.cos(f) - 1 / Math.sqrt(2)), o = Math.atan(a), i = Math.cos(r), s = Math.tan(n), l = 1 - i * i * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(o)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === ot.TOP)
    u = Math.acos(l), e.phi = H - u, c.value === qe.AREA_0 ? e.lam = o + H : c.value === qe.AREA_1 ? e.lam = o < 0 ? o + gt : o - gt : c.value === qe.AREA_2 ? e.lam = o - H : e.lam = o;
  else if (this.face === ot.BOTTOM)
    u = Math.acos(l), e.phi = u - H, c.value === qe.AREA_0 ? e.lam = -o + H : c.value === qe.AREA_1 ? e.lam = -o : c.value === qe.AREA_2 ? e.lam = -o - H : e.lam = o < 0 ? -o - gt : -o + gt;
  else {
    var h, d, p;
    h = l, f = h * h, f >= 1 ? p = 0 : p = Math.sqrt(1 - f) * Math.sin(o), f += p * p, f >= 1 ? d = 0 : d = Math.sqrt(1 - f), c.value === qe.AREA_1 ? (f = d, d = -p, p = f) : c.value === qe.AREA_2 ? (d = -d, p = -p) : c.value === qe.AREA_3 && (f = d, d = p, p = -f), this.face === ot.RIGHT ? (f = h, h = -d, d = f) : this.face === ot.BACK ? (h = -h, d = -d) : this.face === ot.LEFT && (f = h, h = d, d = -f), e.phi = Math.acos(-p) - H, e.lam = Math.atan2(d, h), this.face === ot.RIGHT ? e.lam = zs(e.lam, -H) : this.face === ot.BACK ? e.lam = zs(e.lam, -gt) : this.face === ot.LEFT && (e.lam = zs(e.lam, +H));
  }
  if (this.es !== 0) {
    var m, g, y;
    m = e.phi < 0 ? 1 : 0, g = Math.tan(e.phi), y = this.b / Math.sqrt(g * g + this.one_minus_f_squared), e.phi = Math.atan(Math.sqrt(this.a * this.a - y * y) / (this.one_minus_f * y)), m && (e.phi = -e.phi);
  }
  return e.lam += this.long0, t.x = e.lam, t.y = e.phi, t;
}
function tl(t, e, r, n) {
  var i;
  return t < re ? (n.value = qe.AREA_0, i = 0) : (i = Math.atan2(e, r), Math.abs(i) <= We ? n.value = qe.AREA_0 : i > We && i <= H + We ? (n.value = qe.AREA_1, i -= H) : i > H + We || i <= -(H + We) ? (n.value = qe.AREA_2, i = i >= 0 ? i - gt : i + gt) : (n.value = qe.AREA_3, i += H)), i;
}
function zs(t, e) {
  var r = t + e;
  return r < -gt ? r += ao : r > +gt && (r -= ao), r;
}
var YT = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const XT = {
  init: qT,
  forward: HT,
  inverse: zT,
  names: YT
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
], Na = [
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
], Fv = 0.8487, Vv = 1.3523, jv = un / 5, KT = 1 / jv, Fs = 18, uu = function(t, e) {
  return t[0] + e * (t[1] + e * (t[2] + e * t[3]));
}, ZT = function(t, e) {
  return t[1] + e * (2 * t[2] + e * 3 * t[3]);
};
function JT(t, e, r, n) {
  for (var i = e; n; --n) {
    var s = t(i);
    if (i -= s, Math.abs(s) < r)
      break;
  }
  return i;
}
function QT() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function eN(t) {
  var e = se(t.x - this.long0), r = Math.abs(t.y), n = Math.floor(r * jv);
  n < 0 ? n = 0 : n >= Fs && (n = Fs - 1), r = un * (r - KT * n);
  var i = {
    x: uu(jf[n], r) * e,
    y: uu(Na[n], r)
  };
  return t.y < 0 && (i.y = -i.y), i.x = i.x * this.a * Fv + this.x0, i.y = i.y * this.a * Vv + this.y0, i;
}
function tN(t) {
  var e = {
    x: (t.x - this.x0) / (this.a * Fv),
    y: Math.abs(t.y - this.y0) / (this.a * Vv)
  };
  if (e.y >= 1)
    e.x /= jf[Fs][0], e.y = t.y < 0 ? -H : H;
  else {
    var r = Math.floor(e.y * Fs);
    for (r < 0 ? r = 0 : r >= Fs && (r = Fs - 1); ; )
      if (Na[r][0] > e.y)
        --r;
      else if (Na[r + 1][0] <= e.y)
        ++r;
      else
        break;
    var n = Na[r], i = 5 * (e.y - n[0]) / (Na[r + 1][0] - n[0]);
    i = JT(function(s) {
      return (uu(n, s) - e.y) / ZT(n, s);
    }, i, re, 100), e.x /= uu(jf[r], i), e.y = (5 * r + i) * At, t.y < 0 && (e.y = -e.y);
  }
  return e.x = se(e.x + this.long0), e;
}
var rN = ["Robinson", "robin"];
const nN = {
  init: QT,
  forward: eN,
  inverse: tN,
  names: rN
};
function iN() {
  this.name = "geocent";
}
function sN(t) {
  var e = Ov(t, this.es, this.a);
  return e;
}
function aN(t) {
  var e = Mv(t, this.es, this.a, this.b);
  return e;
}
var oN = ["Geocentric", "geocentric", "geocent", "Geocent"];
const lN = {
  init: iN,
  forward: sN,
  inverse: aN,
  names: oN
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
function uN() {
  if (Object.keys(ga).forEach(function(r) {
    if (typeof this[r] > "u")
      this[r] = ga[r].def;
    else {
      if (ga[r].num && isNaN(this[r]))
        throw new Error("Invalid parameter value, must be numeric " + r + " = " + this[r]);
      ga[r].num && (this[r] = parseFloat(this[r]));
    }
    ga[r].degrees && (this[r] = this[r] * At);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - H) < re ? this.mode = this.lat0 < 0 ? Ut.S_POLE : Ut.N_POLE : Math.abs(this.lat0) < re ? this.mode = Ut.EQUIT : (this.mode = Ut.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, e = this.azi;
  this.cg = Math.cos(e), this.sg = Math.sin(e), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function cN(t) {
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
function fN(t) {
  t.x /= this.a, t.y /= this.a;
  var e = { x: t.x, y: t.y }, r, n, i;
  i = 1 / (this.pn1 - t.y * this.sw), r = this.pn1 * t.x * i, n = this.pn1 * t.y * this.cw * i, t.x = r * this.cg + n * this.sg, t.y = n * this.cg - r * this.sg;
  var s = Or(t.x, t.y);
  if (Math.abs(s) < re)
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
var hN = ["Tilted_Perspective", "tpers"];
const dN = {
  init: uN,
  forward: cN,
  inverse: fN,
  names: hN
};
function pN() {
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
  var e = t.x, r = t.y, n, i, s, a;
  if (e = e - this.long0, this.shape === "ellipse") {
    r = Math.atan(this.radius_p2 * Math.tan(r));
    var o = this.radius_p / Or(this.radius_p * Math.cos(r), Math.sin(r));
    if (i = o * Math.cos(e) * Math.cos(r), s = o * Math.sin(e) * Math.cos(r), a = o * Math.sin(r), (this.radius_g - i) * i - s * s - a * a * this.radius_p_inv2 < 0)
      return t.x = Number.NaN, t.y = Number.NaN, t;
    n = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Or(a, n)), t.y = this.radius_g_1 * Math.atan(a / n)) : (t.x = this.radius_g_1 * Math.atan(s / n), t.y = this.radius_g_1 * Math.atan(a / Or(s, n)));
  } else
    this.shape === "sphere" && (n = Math.cos(r), i = Math.cos(e) * n, s = Math.sin(e) * n, a = Math.sin(r), n = this.radius_g - i, this.flip_axis ? (t.x = this.radius_g_1 * Math.atan(s / Or(a, n)), t.y = this.radius_g_1 * Math.atan(a / n)) : (t.x = this.radius_g_1 * Math.atan(s / n), t.y = this.radius_g_1 * Math.atan(a / Or(s, n))));
  return t.x = t.x * this.a, t.y = t.y * this.a, t;
}
function gN(t) {
  var e = -1, r = 0, n = 0, i, s, a, o;
  if (t.x = t.x / this.a, t.y = t.y / this.a, this.shape === "ellipse") {
    this.flip_axis ? (n = Math.tan(t.y / this.radius_g_1), r = Math.tan(t.x / this.radius_g_1) * Or(1, n)) : (r = Math.tan(t.x / this.radius_g_1), n = Math.tan(t.y / this.radius_g_1) * Or(1, r));
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
var yN = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const vN = {
  init: pN,
  forward: mN,
  inverse: gN,
  names: yN
};
var Ua = 1.340264, Ba = -0.081106, Wa = 893e-6, qa = 3796e-6, cu = Math.sqrt(3) / 2;
function _N() {
  this.es = 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function bN(t) {
  var e = se(t.x - this.long0), r = t.y, n = Math.asin(cu * Math.sin(r)), i = n * n, s = i * i * i;
  return t.x = e * Math.cos(n) / (cu * (Ua + 3 * Ba * i + s * (7 * Wa + 9 * qa * i))), t.y = n * (Ua + Ba * i + s * (Wa + qa * i)), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function EN(t) {
  t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a;
  var e = 1e-9, r = 12, n = t.y, i, s, a, o, l, u;
  for (u = 0; u < r && (i = n * n, s = i * i * i, a = n * (Ua + Ba * i + s * (Wa + qa * i)) - t.y, o = Ua + 3 * Ba * i + s * (7 * Wa + 9 * qa * i), n -= l = a / o, !(Math.abs(l) < e)); ++u)
    ;
  return i = n * n, s = i * i * i, t.x = cu * t.x * (Ua + 3 * Ba * i + s * (7 * Wa + 9 * qa * i)) / Math.cos(n), t.y = Math.asin(Math.sin(n) / cu), t.x = se(t.x + this.long0), t;
}
var SN = ["eqearth", "Equal Earth", "Equal_Earth"];
const wN = {
  init: _N,
  forward: bN,
  inverse: EN,
  names: SN
};
function xN(t) {
  t.Proj.projections.add(Rl), t.Proj.projections.add($l), t.Proj.projections.add(OO), t.Proj.projections.add(IO), t.Proj.projections.add(GO), t.Proj.projections.add(HO), t.Proj.projections.add(JO), t.Proj.projections.add(nM), t.Proj.projections.add(lM), t.Proj.projections.add(dM), t.Proj.projections.add(LM), t.Proj.projections.add(RM), t.Proj.projections.add(GM), t.Proj.projections.add(zM), t.Proj.projections.add(JM), t.Proj.projections.add(nT), t.Proj.projections.add(lT), t.Proj.projections.add(dT), t.Proj.projections.add(_T), t.Proj.projections.add(xT), t.Proj.projections.add(CT), t.Proj.projections.add(DT), t.Proj.projections.add(VT), t.Proj.projections.add(WT), t.Proj.projections.add(XT), t.Proj.projections.add(nN), t.Proj.projections.add(lN), t.Proj.projections.add(dN), t.Proj.projections.add(vN), t.Proj.projections.add(wN);
}
qt.defaultDatum = "WGS84";
qt.Proj = pn;
qt.WGS84 = new qt.Proj("WGS84");
qt.Point = ta;
qt.toPoint = Tv;
qt.defs = Kt;
qt.nadgrid = Tx;
qt.transform = ou;
qt.mgrs = Bx;
qt.version = "__VERSION__";
xN(qt);
function ON() {
  var t, e, r;
  qt.defs("EPSG:32632", "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs"), qt.defs("EPSG:32631", "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs"), qt.defs(
    "EPSG:2169",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  ), tb(qt), (t = Sl("EPSG:32632")) == null || t.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (e = Sl("EPSG:32631")) == null || e.setExtent([
    166021.44,
    0,
    833978.55,
    932900518e-2
  ]), (r = Sl("EPSG:2169")) == null || r.setExtent([
    48225.17,
    56225.6,
    105842.04,
    139616.4
  ]);
}
function MN(t, e, r) {
  const n = fe(t);
  class i extends Vh {
    constructor(a) {
      super(n, a, e, r);
    }
  }
  return Qe(i, "def", n), i;
}
const TN = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Vh extends TN {
  constructor(r, n = {}, i = {}, s) {
    super();
    Qe(this, "_instance", null);
    Qe(this, "_connected", !1);
    Qe(this, "_resolved", !1);
    Qe(this, "_numberProps", null);
    Qe(this, "_styles");
    Qe(this, "_slots");
    this._def = r, this._props = n, this._config = i, this._config = et(
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
    this._connected = !1, Kl(() => {
      this._connected || (hp(null, this._root), this._instance = null);
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
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = uf(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[mr(u)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => r(i, !0)) : r(this._def);
  }
  _resolveProps(r) {
    const { props: n } = r, i = le(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(mr))
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
    const i = mr(r);
    this._numberProps && this._numberProps[i] && (n = uf(n)), this._setProp(i, n, !1);
  }
  _getProp(r) {
    return this._props[r];
  }
  _setProp(r, n, i = !0, s = !0) {
    n !== this._props[r] && (this._props[r] = n, s && this._instance && this._update(), i && (n === !0 ? this.setAttribute(lr(r), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(lr(r), n + "") : n || this.removeAttribute(lr(r))));
  }
  _update() {
    hp(this._createVNode(), this._root);
  }
  _createVNode() {
    const r = ee(this._def, et({}, this._props));
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
        if (s instanceof Vh) {
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
var uo = /* @__PURE__ */ ((t) => (t.INFO = "alert-info", t.WARNING = "alert-warning", t.ERROR = "alert-danger", t))(uo || {});
const NN = uo.INFO, CN = 7e3, LN = 4e3, fu = ys(
  "alert-notifications",
  () => {
    const t = be([]);
    function e(n, i = NN, s) {
      const a = {
        message: n,
        type: i,
        duration: s != null ? s : i === uo.WARNING ? LN : CN
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
), PN = /* @__PURE__ */ fe({
  __name: "notification-item",
  props: {
    notification: { type: Object, required: !0 }
  },
  emits: ["close"],
  setup(t) {
    const e = t, r = nt(!0);
    function n(i, s) {
      setTimeout(() => {
        r.value = !1;
      }, e.notification.duration), s();
    }
    return (i, s) => {
      const a = xh("dompurify-html");
      return P(), Fe(Yu, {
        name: "fade-out",
        appear: "",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "transform opacity-0",
        onEnter: n,
        onAfterLeave: s[0] || (s[0] = (o) => i.$emit("close"))
      }, {
        default: _i(() => [
          r.value ? Ql((P(), V("div", {
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
}), he = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, kN = /* @__PURE__ */ he(PN, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/alert-notifications/notification-item.vue"]]), AN = {
  key: 0,
  class: "lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
}, DN = /* @__PURE__ */ fe({
  __name: "alert-notifications",
  setup(t) {
    const e = fu(), { notifications: r } = He(e);
    function n(i) {
      e.removeNotification(i);
    }
    return (i, s) => (P(), Fe(Wy, { to: "body" }, [
      x(r).length ? (P(), V("div", AN, [
        (P(!0), V(Ue, null, Pr(x(r), (a, o) => (P(), Fe(kN, {
          key: o,
          notification: a,
          onClose: () => n(o)
        }, null, 8, ["notification", "onClose"]))), 128))
      ])) : F("v-if", !0)
    ]));
  }
}), IN = /* @__PURE__ */ he(DN, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/alert-notifications/alert-notifications.vue"]]), RN = { class: "lux-dropdown" }, $N = { class: "h-full" }, FN = ["aria-expanded"], VN = /* @__PURE__ */ L("span", { class: "lux-caret" }, null, -1), jN = { class: "lux-dropdown-wrapper" }, GN = ["aria-label", "data-value"], UN = /* @__PURE__ */ fe({
  __name: "dropdown-list",
  props: {
    placeholder: { type: String, required: !0 },
    options: { type: Array, required: !0, default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = nt(!1), s = nt();
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
    return vr(() => document.addEventListener("click", u)), Li(() => document.removeEventListener("click", u)), (f, c) => {
      var h, d;
      return P(), V("div", RN, [
        L("div", $N, [
          L("button", {
            type: "button",
            class: ke(["lux-btn lux-dropdown-btn", i.value ? "expanded" : ""]),
            "aria-expanded": i.value,
            "aria-haspopup": "true",
            onClick: o
          }, [
            L("span", null, ae((d = r.placeholder) != null ? d : (h = r.options[0]) == null ? void 0 : h.label), 1),
            VN
          ], 10, FN)
        ]),
        L("div", jN, [
          L("ul", {
            class: ke(["lux-dropdown-list", i.value ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (P(!0), V(Ue, null, Pr(r.options, (p) => (P(), V("li", {
              key: p.value,
              class: ke(f.modelValue === p.value ? "selected" : "")
            }, [
              L("button", {
                class: "lux-dropdown-list-item",
                "aria-label": p.ariaLabel,
                "data-value": p.value,
                onClick: l
              }, ae(p.label), 9, GN)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
}), Gv = /* @__PURE__ */ he(UN, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/dropdown-list.vue"]]), Ha = "EPSG:3857", Uv = "EPSG:4326", BN = "EPSG:2169";
let Lc;
const Bp = nt();
function Fn() {
  function t() {
    return Lc;
  }
  function e() {
    return Bp.value = Lc = new rb({
      view: new nb({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: !0
      }),
      controls: [],
      keyboardEventTarget: document
    }), Lc;
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
    olMap: Bp,
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
const ya = /* @__PURE__ */ new Map();
function Cr(t) {
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cr(t);
}
function wn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function WN(t, e) {
  if (Cr(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Cr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Bv(t) {
  var e = WN(t, "string");
  return Cr(e) == "symbol" ? e : e + "";
}
function Wp(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Bv(n.key), n);
  }
}
function xn(t, e, r) {
  return e && Wp(t.prototype, e), r && Wp(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Si(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Gf(t, e) {
  return Gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gf(t, e);
}
function Ju(t, e) {
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
function Co(t, e) {
  if (e && (Cr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Si(t);
}
function En(t) {
  return En = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, En(t);
}
function Pi(t, e, r) {
  return e = Bv(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function qN(t) {
  if (Array.isArray(t))
    return t;
}
function HN(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function qp(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function zN(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return qp(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qp(t, e);
  }
}
function YN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XN(t) {
  return qN(t) || HN(t) || zN(t) || YN();
}
function Hp(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hp(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var KN = {
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
}, ZN = function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wn(this, t), this.init(e, r);
  }
  return xn(t, [{
    key: "init",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = n.prefix || "i18next:", this.logger = r || KN, this.options = n, this.debug = n.debug;
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
      return new t(this.logger, zp(zp({}, {
        prefix: "".concat(this.prefix, ":").concat(r, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(r) {
      return r = r || this.options, r.prefix = r.prefix || this.prefix, new t(this.logger, r);
    }
  }]), t;
}(), cn = new ZN(), Ti = function() {
  function t() {
    wn(this, t), this.observers = {};
  }
  return xn(t, [{
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
function va() {
  var t, e, r = new Promise(function(n, i) {
    t = n, e = i;
  });
  return r.resolve = t, r.reject = e, r;
}
function Yp(t) {
  return t == null ? "" : "" + t;
}
function JN(t, e, r) {
  t.forEach(function(n) {
    e[n] && (r[n] = e[n]);
  });
}
function jh(t, e, r) {
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
function Xp(t, e, r) {
  var n = jh(t, e, Object), i = n.obj, s = n.k;
  i[s] = r;
}
function QN(t, e, r, n) {
  var i = jh(t, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], n && (s[a] = s[a].concat(r)), n || s[a].push(r);
}
function hu(t, e) {
  var r = jh(t, e), n = r.obj, i = r.k;
  if (!!n)
    return n[i];
}
function e2(t, e, r) {
  var n = hu(t, r);
  return n !== void 0 ? n : hu(e, r);
}
function Wv(t, e, r) {
  for (var n in e)
    n !== "__proto__" && n !== "constructor" && (n in t ? typeof t[n] == "string" || t[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? r && (t[n] = e[n]) : Wv(t[n], e[n], r) : t[n] = e[n]);
  return t;
}
function Os(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var t2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function r2(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
    return t2[e];
  }) : t;
}
var Qu = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, n2 = [" ", ",", "?", "!", ";"];
function i2(t, e, r) {
  e = e || "", r = r || "";
  var n = n2.filter(function(o) {
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
function du(t, e) {
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
        return u ? du(l, u, r) : void 0;
      }
      i = i[n[s]];
    }
    return i;
  }
}
function Kp(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kp(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Kp(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function s2(t) {
  var e = a2();
  return function() {
    var n = En(t), i;
    if (e) {
      var s = En(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return Co(this, i);
  };
}
function a2() {
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
var o2 = function(t) {
  Ju(r, t);
  var e = s2(r);
  function r(n) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return wn(this, r), i = e.call(this), Qu && Ti.call(Si(i)), i.data = n || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return xn(r, [{
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
      var c = hu(this.data, f);
      return c || !u || typeof a != "string" ? c : du(this.data && this.data[i] && this.data[i][s], a, l);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), Xp(this.data, f, o), l.silent || this.emit("added", i, s, a, o);
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
      var c = hu(this.data, f) || {};
      o ? Wv(c, a, l) : c = rl(rl({}, c), a), Xp(this.data, f, c), u.silent || this.emit("added", i, s, a);
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
  }]), r;
}(Ti), qv = {
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
function Zp(t, e) {
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
    e % 2 ? Zp(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zp(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function l2(t) {
  var e = u2();
  return function() {
    var n = En(t), i;
    if (e) {
      var s = En(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return Co(this, i);
  };
}
function u2() {
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
var Jp = {}, Qp = function(t) {
  Ju(r, t);
  var e = l2(r);
  function r(n) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return wn(this, r), i = e.call(this), Qu && Ti.call(Si(i)), JN(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, Si(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = cn.create("translator"), i;
  }
  return xn(r, [{
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
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ns || this.options.defaultNS || [], u = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !i2(i, a, o);
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
      if (Cr(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), Cr(s) === "object" && (s = Vt({}, s)), s || (s = {}), i == null)
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
      var y = this.resolve(i, s), v = y && y.res, b = y && y.usedKey || c, E = y && y.exactUsedKey || c, O = Object.prototype.toString.apply(v), N = ["[object Number]", "[object Function]", "[object RegExp]"], M = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, k = !this.i18nFormat || this.i18nFormat.handleAsObject, A = typeof v != "string" && typeof v != "boolean" && typeof v != "number";
      if (k && v && A && N.indexOf(O) < 0 && !(typeof M == "string" && O === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var C = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, v, Vt(Vt({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return l ? (y.res = C, y) : C;
        }
        if (u) {
          var R = O === "[object Array]", I = R ? [] : {}, Q = R ? E : b;
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
      } else if (k && typeof M == "string" && O === "[object Array]")
        v = v.join(M), v && (v = this.extendTranslation(v, i, s, a));
      else {
        var $ = !1, z = !1, K = s.count !== void 0 && typeof s.count != "string", Ce = r.hasDefaultValue(s), Pe = K ? this.pluralResolver.getSuffix(p, s.count, s) : "", dt = s["defaultValue".concat(Pe)] || s.defaultValue;
        !this.isValidLookup(v) && Ce && ($ = !0, v = dt), this.isValidLookup(v) || (z = !0, v = c);
        var Rt = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Te = Rt && z ? void 0 : v, Ct = Ce && dt !== v && this.options.updateMissing;
        if (z || $ || Ct) {
          if (this.logger.log(Ct ? "updateKey" : "missingKey", p, d, c, Ct ? dt : v), u) {
            var st = this.resolve(c, Vt(Vt({}, s), {}, {
              keySeparator: !1
            }));
            st && st.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var Zr = [], De = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && De && De[0])
            for (var tr = 0; tr < De.length; tr++)
              Zr.push(De[tr]);
          else
            this.options.saveMissingTo === "all" ? Zr = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Zr.push(s.lng || this.language);
          var Jr = function(Lt, Qr, Mn) {
            var _ = Ce && Mn !== v ? Mn : Te;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Lt, d, Qr, _, Ct, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Lt, d, Qr, _, Ct, s), o.emit("missingKey", Lt, d, Qr, v);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && K ? Zr.forEach(function(On) {
            o.pluralResolver.getSuffixes(On, s).forEach(function(Lt) {
              Jr([On], c + Lt, s["defaultValue".concat(Lt)] || dt);
            });
          }) : Jr(Zr, c, dt));
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
          var p = i.match(this.interpolator.nestingRegexp), m = p && p.length;
          c < m && (a.nest = !1);
        }
        !a.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (a.lng = o.usedLng), a.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var v = arguments.length, b = new Array(v), E = 0; E < v; E++)
            b[E] = arguments[E];
          return l && l[0] === b[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(b[0], " in key: ").concat(s[0])), null) : u.translate.apply(u, b.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var g = a.postProcess || this.options.postProcess, y = typeof g == "string" ? [g] : g;
      return i != null && y && y.length && a.applyPostProcessor !== !1 && (i = qv.handle(y, i, s, this.options && this.options.postProcessPassResolved ? Vt({
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
          var g = a.count !== void 0 && typeof a.count != "string", y = g && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), v = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", b = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          m.forEach(function(E) {
            s.isValidLookup(o) || (c = E, !Jp["".concat(b[0], "-").concat(E)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (Jp["".concat(b[0], "-").concat(E)] = !0, s.logger.warn('key "'.concat(l, '" for languages "').concat(b.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach(function(O) {
              if (!s.isValidLookup(o)) {
                f = O;
                var N = [p];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(N, p, O, E, a);
                else {
                  var M;
                  g && (M = s.pluralResolver.getSuffix(O, a.count, a));
                  var k = "".concat(s.options.pluralSeparator, "zero");
                  if (g && (N.push(p + M), y && N.push(p + k)), v) {
                    var A = "".concat(p).concat(s.options.contextSeparator).concat(a.context);
                    N.push(A), g && (N.push(A + M), y && N.push(A + k));
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
  }]), r;
}(Ti);
function Pc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var em = function() {
  function t(e) {
    wn(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = cn.create("languageUtils");
  }
  return xn(t, [{
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
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), n.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Pc(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), n.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Pc(i[1].toLowerCase())), n.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Pc(i[2].toLowerCase()))), i.join("-");
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
}(), c2 = [{
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
}], f2 = {
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
}, h2 = ["v1", "v2", "v3"], tm = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function d2() {
  var t = {};
  return c2.forEach(function(e) {
    e.lngs.forEach(function(r) {
      t[r] = {
        numbers: e.nr,
        plurals: f2[e.fc]
      };
    });
  }), t;
}
var p2 = function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    wn(this, t), this.languageUtils = e, this.options = r, this.logger = cn.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = d2();
  }
  return xn(t, [{
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
        return tm[a] - tm[o];
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
      return !h2.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function rm(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rm(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function nm(t, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = e2(t, e, r);
  return !s && i && typeof r == "string" && (s = du(t, r, n), s === void 0 && (s = du(e, r, n))), s;
}
var m2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wn(this, t), this.logger = cn.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(r) {
      return r;
    }, this.init(e);
  }
  return xn(t, [{
    key: "init",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      r.interpolation || (r.interpolation = {
        escapeValue: !0
      });
      var n = r.interpolation;
      this.escape = n.escape !== void 0 ? n.escape : r2, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? Os(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? Os(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? Os(n.nestingPrefix) : n.nestingPrefixEscaped || Os("$t("), this.nestingSuffix = n.nestingSuffix ? Os(n.nestingSuffix) : n.nestingSuffixEscaped || Os(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
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
      var h = function(y) {
        if (y.indexOf(a.formatSeparator) < 0) {
          var v = nm(n, f, y, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(v, void 0, i, Rr(Rr(Rr({}, s), n), {}, {
            interpolationkey: y
          })) : v;
        }
        var b = y.split(a.formatSeparator), E = b.shift().trim(), O = b.join(a.formatSeparator).trim();
        return a.format(nm(n, f, E, a.options.keySeparator, a.options.ignoreJSONStructure), O, i, Rr(Rr(Rr({}, s), n), {}, {
          interpolationkey: E
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
      return m.forEach(function(g) {
        for (u = 0; o = g.regex.exec(r); ) {
          var y = o[1].trim();
          if (l = h(y), l === void 0)
            if (typeof d == "function") {
              var v = d(r, o, s);
              l = typeof v == "string" ? v : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, y))
              l = "";
            else if (p) {
              l = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(r)), l = "";
          else
            typeof l != "string" && !a.useRawValueToEscape && (l = Yp(l));
          var b = g.safeValue(l);
          if (r = r.replace(o[0], b), p ? (g.regex.lastIndex += l.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, u++, u >= a.maxReplaces)
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
        var g = d.split(new RegExp("".concat(m, "[ ]*{"))), y = "{".concat(g[1]);
        d = g[0], y = this.interpolate(y, l);
        var v = y.match(/'/g), b = y.match(/"/g);
        (v && v.length % 2 === 0 && !b || b.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          l = JSON.parse(y), p && (l = Rr(Rr({}, p), l));
        } catch (E) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(d), E), "".concat(d).concat(m).concat(y);
        }
        return delete l.defaultValue, d;
      }
      for (; a = this.nestingRegexp.exec(r); ) {
        var f = [];
        l = Rr({}, s), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
        var c = !1;
        if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
          var h = a[1].split(this.formatSeparator).map(function(d) {
            return d.trim();
          });
          a[1] = h.shift(), f = h, c = !0;
        }
        if (o = n(u.call(this, a[1].trim(), l), l), o && a[0] === r && typeof o != "string")
          return o;
        typeof o != "string" && (o = Yp(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(r)), o = ""), c && (o = f.reduce(function(d, p) {
          return i.format(d, p, s.lng, Rr(Rr({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), r = r.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return r;
    }
  }]), t;
}();
function im(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ln(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? im(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : im(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function g2(t) {
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
          var o = a.split(":"), l = XN(o), u = l[0], f = l.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
function Ms(t) {
  var e = {};
  return function(n, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = t(i, s), e[a] = o), o(n);
  };
}
var y2 = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wn(this, t), this.logger = cn.create("formatter"), this.options = e, this.formats = {
      number: Ms(function(r, n) {
        var i = new Intl.NumberFormat(r, Ln({}, n));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: Ms(function(r, n) {
        var i = new Intl.NumberFormat(r, Ln(Ln({}, n), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: Ms(function(r, n) {
        var i = new Intl.DateTimeFormat(r, Ln({}, n));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: Ms(function(r, n) {
        var i = new Intl.RelativeTimeFormat(r, Ln({}, n));
        return function(s) {
          return i.format(s, n.range || "day");
        };
      }),
      list: Ms(function(r, n) {
        var i = new Intl.ListFormat(r, Ln({}, n));
        return function(s) {
          return i.format(s);
        };
      })
    }, this.init(e);
  }
  return xn(t, [{
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
      this.formats[r.toLowerCase().trim()] = Ms(n);
    }
  }, {
    key: "format",
    value: function(r, n, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = n.split(this.formatSeparator), l = o.reduce(function(u, f) {
        var c = g2(f), h = c.formatName, d = c.formatOptions;
        if (s.formats[h]) {
          var p = u;
          try {
            var m = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = m.locale || m.lng || a.locale || a.lng || i;
            p = s.formats[h](u, g, Ln(Ln(Ln({}, d), a), m));
          } catch (y) {
            s.logger.warn(y);
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
function sm(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function am(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sm(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function v2(t) {
  var e = _2();
  return function() {
    var n = En(t), i;
    if (e) {
      var s = En(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return Co(this, i);
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
function b2(t, e) {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
}
var E2 = function(t) {
  Ju(r, t);
  var e = v2(r);
  function r(n, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return wn(this, r), a = e.call(this), Qu && Ti.call(Si(a)), a.backend = n, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = cn.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return xn(r, [{
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
        QN(c.loaded, [l], u), b2(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
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
          var y = o.waitingReads.shift();
          o.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
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
          var c = am(am({}, u), {}, {
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
}(Ti);
function om() {
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
      if (Cr(e[1]) === "object" && (r = e[1]), typeof e[1] == "string" && (r.defaultValue = e[1]), typeof e[2] == "string" && (r.tDescription = e[2]), Cr(e[2]) === "object" || Cr(e[3]) === "object") {
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
function lm(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function um(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? um(Object(r), !0).forEach(function(n) {
      Pi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function S2(t) {
  var e = w2();
  return function() {
    var n = En(t), i;
    if (e) {
      var s = En(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else
      i = n.apply(this, arguments);
    return Co(this, i);
  };
}
function w2() {
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
function nl() {
}
function x2(t) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  e.forEach(function(r) {
    typeof t[r] == "function" && (t[r] = t[r].bind(t));
  });
}
var pu = function(t) {
  Ju(r, t);
  var e = S2(r);
  function r() {
    var n, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (wn(this, r), n = e.call(this), Qu && Ti.call(Si(n)), n.options = lm(i), n.services = {}, n.logger = cn, n.modules = {
      external: []
    }, x2(Si(n)), s && !n.isInitialized && !i.isClone) {
      if (!n.options.initImmediate)
        return n.init(i, s), Co(n, Si(n));
      setTimeout(function() {
        n.init(i, s);
      }, 0);
    }
    return n;
  }
  return xn(r, [{
    key: "init",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
      typeof s == "function" && (a = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
      var o = om();
      this.options = nn(nn(nn({}, o), this.options), lm(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = nn(nn({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function l(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? cn.init(l(this.modules.logger), this.options) : cn.init(null, this.options);
        var u;
        this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = y2);
        var f = new em(this.options);
        this.store = new o2(this.options.resources, this.options);
        var c = this.services;
        c.logger = cn, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new p2(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new m2(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new E2(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(y) {
          for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
            b[E - 1] = arguments[E];
          i.emit.apply(i, [y].concat(b));
        }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Qp(this.services, this.options), this.translator.on("*", function(y) {
          for (var v = arguments.length, b = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
            b[E - 1] = arguments[E];
          i.emit.apply(i, [y].concat(b));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = nl), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
      var p = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      p.forEach(function(y) {
        i[y] = function() {
          var v;
          return (v = i.store)[y].apply(v, arguments), i;
        };
      });
      var m = va(), g = function() {
        var v = function(E, O) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), m.resolve(O), a(E, O);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return v(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, v);
      };
      return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), m;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl, o = a, l = typeof i == "string" ? i : this.language;
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
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = nl), this.services.backendConnector.reload(i, s, function(l) {
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
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && qv.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
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
        if (Cr(c) !== "object") {
          for (var d = arguments.length, p = new Array(d > 2 ? d - 2 : 0), m = 2; m < d; m++)
            p[m - 2] = arguments[m];
          h = o.options.overloadTranslationOptionHandler([f, c].concat(p));
        } else
          h = nn({}, c);
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
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new em(om());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl, o = nn(nn(nn({}, this.options), s), {
        isClone: !0
      }), l = new r(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (l.logger = l.logger.clone(s));
      var u = ["store", "services", "language"];
      return u.forEach(function(f) {
        l[f] = i[f];
      }), l.services = nn({}, this.services), l.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
      }, l.translator = new Qp(l.services, l.options), l.translator.on("*", function(f) {
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
}(Ti);
Pi(pu, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new pu(t, e);
});
var lt = pu.createInstance();
lt.createInstance = pu.createInstance;
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
const O2 = "/";
var Hv = /* @__PURE__ */ ((t) => (t.PNG = "image/png", t.JPG = "image/jpeg", t))(Hv || {}), In = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.RANGE = "range", t))(In || {}), Fl = /* @__PURE__ */ ((t) => (t.DATEPICKER = "datepicker", t.SLIDER = "slider", t))(Fl || {}), Uf;
function M2(t, {
  i18next: e,
  rerenderOn: r = ["languageChanged", "loaded", "added", "removed"],
  slotStart: n = "{",
  slotEnd: i = "}"
}) {
  const s = e.t.bind(e), a = be(new Date()), o = () => a.value = new Date(), l = () => a.value;
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
  }), t.component("i18next", C2), t.mixin({
    beforeCreate() {
      var h, d;
      const p = this.$options;
      if (!p.__i18n && !p.i18nOptions) {
        this.__translate = void 0;
        return;
      }
      const m = this.$options.name, g = (Math.random() * 10 ** 8 | 0).toString(), y = [m, g].filter((M) => !!M).join("-");
      this.__bundles = [];
      const v = (M) => {
        Object.entries(M).forEach(([k, A]) => {
          e.addResourceBundle(k, y, A, !0, !1), this.__bundles.push([k, y]);
        });
      };
      (h = p.__i18n) == null || h.forEach((M) => {
        v(JSON.parse(M));
      });
      let { lng: b, ns: E, keyPrefix: O } = c(p, v);
      (d = this.__bundles) != null && d.length && (E = [y].concat(E != null ? E : []));
      const N = u(b, E);
      this.__translate = (M, k) => !O || f(M) ? N(M, k) : N(O + "." + M, k);
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
  }), Uf = N2(n, i);
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
      let y, v;
      ({
        lng: p,
        namespaces: v = e.options.defaultNS,
        keyPrefix: g,
        messages: y
      } = h.i18nOptions), y && d(y), m = typeof v == "string" ? [v] : v, m && e.loadNamespaces(m);
    }
    return { lng: p, ns: m, keyPrefix: g };
  }
}
function Xe() {
  const t = T2(), e = t.appContext.config.globalProperties;
  return {
    i18next: e.$i18next,
    t: e.$t.bind(t.proxy)
  };
}
function T2() {
  const t = So();
  if (!t)
    throw new Error("i18next-vue: No Vue instance in context. Make sure to register the i18next-vue plugin using app.use(...).");
  return t;
}
function N2(t, e) {
  const r = `${t}\\s*([a-z0-9\\-]+)\\s*${e}`;
  return new RegExp(r, "gi");
}
var C2 = fe({
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
      for (; (i = Uf.exec(r)) !== null; ) {
        n.push(r.substring(s, i.index));
        const a = e[i[1]];
        a ? n.push(...a()) : n.push(i[0]), s = Uf.lastIndex;
      }
      return n.push(r.substring(s)), n;
    };
  }
});
class vs extends Error {
}
class L2 extends vs {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class P2 extends vs {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class k2 extends vs {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Vs extends vs {
}
class zv extends vs {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class or extends vs {
}
class ei extends vs {
  constructor() {
    super("Zone is an abstract class");
  }
}
const te = "numeric", Kr = "short", gr = "long", mu = {
  year: te,
  month: te,
  day: te
}, Yv = {
  year: te,
  month: Kr,
  day: te
}, A2 = {
  year: te,
  month: Kr,
  day: te,
  weekday: Kr
}, Xv = {
  year: te,
  month: gr,
  day: te
}, Kv = {
  year: te,
  month: gr,
  day: te,
  weekday: gr
}, Zv = {
  hour: te,
  minute: te
}, Jv = {
  hour: te,
  minute: te,
  second: te
}, Qv = {
  hour: te,
  minute: te,
  second: te,
  timeZoneName: Kr
}, e0 = {
  hour: te,
  minute: te,
  second: te,
  timeZoneName: gr
}, t0 = {
  hour: te,
  minute: te,
  hourCycle: "h23"
}, r0 = {
  hour: te,
  minute: te,
  second: te,
  hourCycle: "h23"
}, n0 = {
  hour: te,
  minute: te,
  second: te,
  hourCycle: "h23",
  timeZoneName: Kr
}, i0 = {
  hour: te,
  minute: te,
  second: te,
  hourCycle: "h23",
  timeZoneName: gr
}, s0 = {
  year: te,
  month: te,
  day: te,
  hour: te,
  minute: te
}, a0 = {
  year: te,
  month: te,
  day: te,
  hour: te,
  minute: te,
  second: te
}, o0 = {
  year: te,
  month: Kr,
  day: te,
  hour: te,
  minute: te
}, l0 = {
  year: te,
  month: Kr,
  day: te,
  hour: te,
  minute: te,
  second: te
}, D2 = {
  year: te,
  month: Kr,
  day: te,
  weekday: Kr,
  hour: te,
  minute: te
}, u0 = {
  year: te,
  month: gr,
  day: te,
  hour: te,
  minute: te,
  timeZoneName: Kr
}, c0 = {
  year: te,
  month: gr,
  day: te,
  hour: te,
  minute: te,
  second: te,
  timeZoneName: Kr
}, f0 = {
  year: te,
  month: gr,
  day: te,
  weekday: gr,
  hour: te,
  minute: te,
  timeZoneName: gr
}, h0 = {
  year: te,
  month: gr,
  day: te,
  weekday: gr,
  hour: te,
  minute: te,
  second: te,
  timeZoneName: gr
};
class Lo {
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
  offsetName(e, r) {
    throw new ei();
  }
  formatOffset(e, r) {
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
let kc = null;
class ec extends Lo {
  static get instance() {
    return kc === null && (kc = new ec()), kc;
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
    return E0(e, r, n);
  }
  formatOffset(e, r) {
    return za(this.offset(e), r);
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
let Vl = {};
function I2(t) {
  return Vl[t] || (Vl[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Vl[t];
}
const R2 = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function $2(t, e) {
  const r = t.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, i, s, a, o, l, u, f] = n;
  return [a, i, s, o, l, u, f];
}
function F2(t, e) {
  const r = t.formatToParts(e), n = [];
  for (let i = 0; i < r.length; i++) {
    const { type: s, value: a } = r[i], o = R2[s];
    s === "era" ? n[o] = a : we(o) || (n[o] = parseInt(a, 10));
  }
  return n;
}
let il = {};
class Un extends Lo {
  static create(e) {
    return il[e] || (il[e] = new Un(e)), il[e];
  }
  static resetCache() {
    il = {}, Vl = {};
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
    super(), this.zoneName = e, this.valid = Un.isValidZone(e);
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
    return E0(e, r, n, this.name);
  }
  formatOffset(e, r) {
    return za(this.offset(e), r);
  }
  offset(e) {
    const r = new Date(e);
    if (isNaN(r))
      return NaN;
    const n = I2(this.name);
    let [i, s, a, o, l, u, f] = n.formatToParts ? F2(n, r) : $2(n, r);
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
let cm = {};
function V2(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = cm[r];
  return n || (n = new Intl.ListFormat(t, e), cm[r] = n), n;
}
let Bf = {};
function Wf(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = Bf[r];
  return n || (n = new Intl.DateTimeFormat(t, e), Bf[r] = n), n;
}
let qf = {};
function j2(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = qf[r];
  return n || (n = new Intl.NumberFormat(t, e), qf[r] = n), n;
}
let Hf = {};
function G2(t, e = {}) {
  const { base: r, ...n } = e, i = JSON.stringify([t, n]);
  let s = Hf[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Hf[i] = s), s;
}
let Ca = null;
function U2() {
  return Ca || (Ca = new Intl.DateTimeFormat().resolvedOptions().locale, Ca);
}
let fm = {};
function B2(t) {
  let e = fm[t];
  if (!e) {
    const r = new Intl.Locale(t);
    e = "getWeekInfo" in r ? r.getWeekInfo() : r.weekInfo, fm[t] = e;
  }
  return e;
}
function W2(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const r = t.indexOf("-u-");
  if (r === -1)
    return [t];
  {
    let n, i;
    try {
      n = Wf(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, r);
      n = Wf(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: s, calendar: a } = n;
    return [i, s, a];
  }
}
function q2(t, e, r) {
  return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t;
}
function H2(t) {
  const e = [];
  for (let r = 1; r <= 12; r++) {
    const n = Oe.utc(2009, r, 1);
    e.push(t(n));
  }
  return e;
}
function z2(t) {
  const e = [];
  for (let r = 1; r <= 7; r++) {
    const n = Oe.utc(2016, 11, 13 + r);
    e.push(t(n));
  }
  return e;
}
function sl(t, e, r, n) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? r(e) : n(e);
}
function Y2(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class X2 {
  constructor(e, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const { padTo: i, floor: s, ...a } = n;
    if (!r || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...n };
      n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = j2(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const r = this.floor ? Math.floor(e) : e;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(e) : Wh(e, 3);
      return bt(r, this.padTo);
    }
  }
}
class K2 {
  constructor(e, r, n) {
    this.opts = n, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Un.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = Wf(r, s);
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
class Z2 {
  constructor(e, r, n) {
    this.opts = { style: "long", ...n }, !r && _0() && (this.rtf = G2(e, n));
  }
  format(e, r) {
    return this.rtf ? this.rtf.format(e, r) : yC(r, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, r) {
    return this.rtf ? this.rtf.formatToParts(e, r) : [];
  }
}
const J2 = {
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
    const a = e || mt.defaultLocale, o = a || (s ? "en-US" : U2()), l = r || mt.defaultNumberingSystem, u = n || mt.defaultOutputCalendar, f = zf(i) || mt.defaultWeekSettings;
    return new Ke(o, l, u, f, a);
  }
  static resetCache() {
    Ca = null, Bf = {}, qf = {}, Hf = {};
  }
  static fromObject({ locale: e, numberingSystem: r, outputCalendar: n, weekSettings: i } = {}) {
    return Ke.create(e, r, n, i);
  }
  constructor(e, r, n, i, s) {
    const [a, o, l] = W2(e);
    this.locale = a, this.numberingSystem = r || o || null, this.outputCalendar = n || l || null, this.weekSettings = i, this.intl = q2(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Y2(this)), this.fastNumbersCached;
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
      zf(e.weekSettings) || this.weekSettings,
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
    return sl(this, e, x0, () => {
      const n = r ? { month: e, day: "numeric" } : { month: e }, i = r ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = H2((s) => this.extract(s, n, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, r = !1) {
    return sl(this, e, T0, () => {
      const n = r ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = r ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = z2(
        (s) => this.extract(s, n, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return sl(
      this,
      void 0,
      () => N0,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [Oe.utc(2016, 11, 13, 9), Oe.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return sl(this, e, C0, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [Oe.utc(-40, 1, 1), Oe.utc(2017, 1, 1)].map(
        (n) => this.extract(n, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, r, n) {
    const i = this.dtFormatter(e, r), s = i.formatToParts(), a = s.find((o) => o.type.toLowerCase() === n);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new X2(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, r = {}) {
    return new K2(e, this.intl, r);
  }
  relFormatter(e = {}) {
    return new Z2(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return V2(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : b0() ? B2(this.locale) : J2;
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
class Qt extends Lo {
  static get utcInstance() {
    return Ac === null && (Ac = new Qt(0)), Ac;
  }
  static instance(e) {
    return e === 0 ? Qt.utcInstance : new Qt(e);
  }
  static parseSpecifier(e) {
    if (e) {
      const r = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r)
        return new Qt(nc(r[1], r[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${za(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${za(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, r) {
    return za(this.fixed, r);
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
class Q2 extends Lo {
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
  if (we(t) || t === null)
    return e;
  if (t instanceof Lo)
    return t;
  if (rC(t)) {
    const r = t.toLowerCase();
    return r === "default" ? e : r === "local" || r === "system" ? ec.instance : r === "utc" || r === "gmt" ? Qt.utcInstance : Qt.parseSpecifier(r) || Un.create(t);
  } else
    return as(t) ? Qt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Q2(t);
}
let hm = () => Date.now(), dm = "system", pm = null, mm = null, gm = null, ym = 60, vm, _m = null;
class mt {
  static get now() {
    return hm;
  }
  static set now(e) {
    hm = e;
  }
  static set defaultZone(e) {
    dm = e;
  }
  static get defaultZone() {
    return hi(dm, ec.instance);
  }
  static get defaultLocale() {
    return pm;
  }
  static set defaultLocale(e) {
    pm = e;
  }
  static get defaultNumberingSystem() {
    return mm;
  }
  static set defaultNumberingSystem(e) {
    mm = e;
  }
  static get defaultOutputCalendar() {
    return gm;
  }
  static set defaultOutputCalendar(e) {
    gm = e;
  }
  static get defaultWeekSettings() {
    return _m;
  }
  static set defaultWeekSettings(e) {
    _m = zf(e);
  }
  static get twoDigitCutoffYear() {
    return ym;
  }
  static set twoDigitCutoffYear(e) {
    ym = e % 100;
  }
  static get throwOnInvalid() {
    return vm;
  }
  static set throwOnInvalid(e) {
    vm = e;
  }
  static resetCaches() {
    Ke.resetCache(), Un.resetCache();
  }
}
class Hr {
  constructor(e, r) {
    this.reason = e, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const d0 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], p0 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Mr(t, e) {
  return new Hr(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Gh(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && t >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const i = n.getUTCDay();
  return i === 0 ? 7 : i;
}
function m0(t, e, r) {
  return r + (Po(t) ? p0 : d0)[e - 1];
}
function g0(t, e) {
  const r = Po(t) ? p0 : d0, n = r.findIndex((s) => s < e), i = e - r[n];
  return { month: n + 1, day: i };
}
function Uh(t, e) {
  return (t - e + 7) % 7 + 1;
}
function gu(t, e = 4, r = 1) {
  const { year: n, month: i, day: s } = t, a = m0(n, i, s), o = Uh(Gh(n, i, s), r);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = n - 1, l = co(u, e, r)) : l > co(n, e, r) ? (u = n + 1, l = 1) : u = n, { weekYear: u, weekNumber: l, weekday: o, ...ic(t) };
}
function bm(t, e = 4, r = 1) {
  const { weekYear: n, weekNumber: i, weekday: s } = t, a = Uh(Gh(n, 1, e), r), o = Ys(n);
  let l = i * 7 + s - a - 7 + e, u;
  l < 1 ? (u = n - 1, l += Ys(u)) : l > o ? (u = n + 1, l -= Ys(n)) : u = n;
  const { month: f, day: c } = g0(u, l);
  return { year: u, month: f, day: c, ...ic(t) };
}
function Dc(t) {
  const { year: e, month: r, day: n } = t, i = m0(e, r, n);
  return { year: e, ordinal: i, ...ic(t) };
}
function Em(t) {
  const { year: e, ordinal: r } = t, { month: n, day: i } = g0(e, r);
  return { year: e, month: n, day: i, ...ic(t) };
}
function Sm(t, e) {
  if (!we(t.localWeekday) || !we(t.localWeekNumber) || !we(t.localWeekYear)) {
    if (!we(t.weekday) || !we(t.weekNumber) || !we(t.weekYear))
      throw new Vs(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return we(t.localWeekday) || (t.weekday = t.localWeekday), we(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), we(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function eC(t, e = 4, r = 1) {
  const n = tc(t.weekYear), i = Tr(
    t.weekNumber,
    1,
    co(t.weekYear, e, r)
  ), s = Tr(t.weekday, 1, 7);
  return n ? i ? s ? !1 : Mr("weekday", t.weekday) : Mr("week", t.weekNumber) : Mr("weekYear", t.weekYear);
}
function tC(t) {
  const e = tc(t.year), r = Tr(t.ordinal, 1, Ys(t.year));
  return e ? r ? !1 : Mr("ordinal", t.ordinal) : Mr("year", t.year);
}
function y0(t) {
  const e = tc(t.year), r = Tr(t.month, 1, 12), n = Tr(t.day, 1, yu(t.year, t.month));
  return e ? r ? n ? !1 : Mr("day", t.day) : Mr("month", t.month) : Mr("year", t.year);
}
function v0(t) {
  const { hour: e, minute: r, second: n, millisecond: i } = t, s = Tr(e, 0, 23) || e === 24 && r === 0 && n === 0 && i === 0, a = Tr(r, 0, 59), o = Tr(n, 0, 59), l = Tr(i, 0, 999);
  return s ? a ? o ? l ? !1 : Mr("millisecond", i) : Mr("second", n) : Mr("minute", r) : Mr("hour", e);
}
function we(t) {
  return typeof t > "u";
}
function as(t) {
  return typeof t == "number";
}
function tc(t) {
  return typeof t == "number" && t % 1 === 0;
}
function rC(t) {
  return typeof t == "string";
}
function nC(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function _0() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function b0() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function iC(t) {
  return Array.isArray(t) ? t : [t];
}
function wm(t, e, r) {
  if (t.length !== 0)
    return t.reduce((n, i) => {
      const s = [e(i), i];
      return n && r(n[0], s[0]) === n[0] ? n : s;
    }, null)[1];
}
function sC(t, e) {
  return e.reduce((r, n) => (r[n] = t[n], r), {});
}
function na(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function zf(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new or("Week settings must be an object");
  if (!Tr(t.firstDay, 1, 7) || !Tr(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Tr(e, 1, 7)))
    throw new or("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Tr(t, e, r) {
  return tc(t) && t >= e && t <= r;
}
function aC(t, e) {
  return t - e * Math.floor(t / e);
}
function bt(t, e = 2) {
  const r = t < 0;
  let n;
  return r ? n = "-" + ("" + -t).padStart(e, "0") : n = ("" + t).padStart(e, "0"), n;
}
function li(t) {
  if (!(we(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Ui(t) {
  if (!(we(t) || t === null || t === ""))
    return parseFloat(t);
}
function Bh(t) {
  if (!(we(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Wh(t, e, r = !1) {
  const n = 10 ** e;
  return (r ? Math.trunc : Math.round)(t * n) / n;
}
function Po(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ys(t) {
  return Po(t) ? 366 : 365;
}
function yu(t, e) {
  const r = aC(e - 1, 12) + 1, n = t + (e - r) / 12;
  return r === 2 ? Po(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
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
function xm(t, e, r) {
  return -Uh(Gh(t, 1, e), r) + e - 1;
}
function co(t, e = 4, r = 1) {
  const n = xm(t, e, r), i = xm(t + 1, e, r);
  return (Ys(t) - n + i) / 7;
}
function Yf(t) {
  return t > 99 ? t : t > mt.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function E0(t, e, r, n = null) {
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
function nc(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(e, 10) || 0, i = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + i;
}
function S0(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new or(`Invalid unit value ${t}`);
  return e;
}
function vu(t, e) {
  const r = {};
  for (const n in t)
    if (na(t, n)) {
      const i = t[n];
      if (i == null)
        continue;
      r[e(n)] = S0(i);
    }
  return r;
}
function za(t, e) {
  const r = Math.trunc(Math.abs(t / 60)), n = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${bt(r, 2)}:${bt(n, 2)}`;
    case "narrow":
      return `${i}${r}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${i}${bt(r, 2)}${bt(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function ic(t) {
  return sC(t, ["hour", "minute", "second", "millisecond"]);
}
const oC = [
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
], w0 = [
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
], lC = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function x0(t) {
  switch (t) {
    case "narrow":
      return [...lC];
    case "short":
      return [...w0];
    case "long":
      return [...oC];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const O0 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], M0 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], uC = ["M", "T", "W", "T", "F", "S", "S"];
function T0(t) {
  switch (t) {
    case "narrow":
      return [...uC];
    case "short":
      return [...M0];
    case "long":
      return [...O0];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const N0 = ["AM", "PM"], cC = ["Before Christ", "Anno Domini"], fC = ["BC", "AD"], hC = ["B", "A"];
function C0(t) {
  switch (t) {
    case "narrow":
      return [...hC];
    case "short":
      return [...fC];
    case "long":
      return [...cC];
    default:
      return null;
  }
}
function dC(t) {
  return N0[t.hour < 12 ? 0 : 1];
}
function pC(t, e) {
  return T0(e)[t.weekday - 1];
}
function mC(t, e) {
  return x0(e)[t.month - 1];
}
function gC(t, e) {
  return C0(e)[t.year < 0 ? 0 : 1];
}
function yC(t, e, r = "always", n = !1) {
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
function Om(t, e) {
  let r = "";
  for (const n of t)
    n.literal ? r += n.val : r += e(n.val);
  return r;
}
const vC = {
  D: mu,
  DD: Yv,
  DDD: Xv,
  DDDD: Kv,
  t: Zv,
  tt: Jv,
  ttt: Qv,
  tttt: e0,
  T: t0,
  TT: r0,
  TTT: n0,
  TTTT: i0,
  f: s0,
  ff: o0,
  fff: u0,
  ffff: f0,
  F: a0,
  FF: l0,
  FFF: c0,
  FFFF: h0
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
    return vC[e];
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
      return bt(e, r);
    const n = { ...this.opts };
    return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(e);
  }
  formatDateTimeFromString(e, r) {
    const n = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (d, p) => this.loc.extract(e, d, p), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => n ? dC(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (d, p) => n ? mC(e, d) : s(p ? { month: d } : { month: d, day: "numeric" }, "month"), u = (d, p) => n ? pC(e, d) : s(
      p ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const p = Wt.macroTokenToFormatOpts(d);
      return p ? this.formatWithSystemDefault(e, p) : d;
    }, c = (d) => n ? gC(e, d) : s({ era: d }, "era"), h = (d) => {
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
    return Om(Wt.parseFormat(r), h);
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
    return Om(s, i(o));
  }
}
const L0 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function oa(...t) {
  const e = t.reduce((r, n) => r + n.source, "");
  return RegExp(`^${e}$`);
}
function la(...t) {
  return (e) => t.reduce(
    ([r, n, i], s) => {
      const [a, o, l] = s(e, i);
      return [{ ...r, ...a }, o || n, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ua(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [r, n] of e) {
    const i = r.exec(t);
    if (i)
      return n(i);
  }
  return [null, null];
}
function P0(...t) {
  return (e, r) => {
    const n = {};
    let i;
    for (i = 0; i < t.length; i++)
      n[t[i]] = li(e[r + i]);
    return [n, null, r + i];
  };
}
const k0 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, _C = `(?:${k0.source}?(?:\\[(${L0.source})\\])?)?`, qh = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, A0 = RegExp(`${qh.source}${_C}`), Hh = RegExp(`(?:T${A0.source})?`), bC = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, EC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, SC = /(\d{4})-?(\d{3})/, wC = P0("weekYear", "weekNumber", "weekDay"), xC = P0("year", "ordinal"), OC = /(\d{4})-(\d\d)-(\d\d)/, D0 = RegExp(
  `${qh.source} ?(?:${k0.source}|(${L0.source}))?`
), MC = RegExp(`(?: ${D0.source})?`);
function Xs(t, e, r) {
  const n = t[e];
  return we(n) ? r : li(n);
}
function TC(t, e) {
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
    milliseconds: Bh(t[e + 3])
  }, null, e + 4];
}
function ko(t, e) {
  const r = !t[e] && !t[e + 1], n = nc(t[e + 1], t[e + 2]), i = r ? null : Qt.instance(n);
  return [{}, i, e + 3];
}
function Ao(t, e) {
  const r = t[e] ? Un.create(t[e]) : null;
  return [{}, r, e + 1];
}
const NC = RegExp(`^T?${qh.source}$`), CC = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function LC(t) {
  const [e, r, n, i, s, a, o, l, u] = t, f = e[0] === "-", c = l && l[0] === "-", h = (d, p = !1) => d !== void 0 && (p || d && f) ? -d : d;
  return [
    {
      years: h(Ui(r)),
      months: h(Ui(n)),
      weeks: h(Ui(i)),
      days: h(Ui(s)),
      hours: h(Ui(a)),
      minutes: h(Ui(o)),
      seconds: h(Ui(l), l === "-0"),
      milliseconds: h(Bh(u), c)
    }
  ];
}
const PC = {
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
function zh(t, e, r, n, i, s, a) {
  const o = {
    year: e.length === 2 ? Yf(li(e)) : li(e),
    month: w0.indexOf(r) + 1,
    day: li(n),
    hour: li(i),
    minute: li(s)
  };
  return a && (o.second = li(a)), t && (o.weekday = t.length > 3 ? O0.indexOf(t) + 1 : M0.indexOf(t) + 1), o;
}
const kC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function AC(t) {
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
  ] = t, h = zh(e, i, n, r, s, a, o);
  let d;
  return l ? d = PC[l] : u ? d = 0 : d = nc(f, c), [h, new Qt(d)];
}
function DC(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const IC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, RC = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, $C = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Mm(t) {
  const [, e, r, n, i, s, a, o] = t;
  return [zh(e, i, n, r, s, a, o), Qt.utcInstance];
}
function FC(t) {
  const [, e, r, n, i, s, a, o] = t;
  return [zh(e, o, r, n, i, s, a), Qt.utcInstance];
}
const VC = oa(bC, Hh), jC = oa(EC, Hh), GC = oa(SC, Hh), UC = oa(A0), I0 = la(
  TC,
  ca,
  ko,
  Ao
), BC = la(
  wC,
  ca,
  ko,
  Ao
), WC = la(
  xC,
  ca,
  ko,
  Ao
), qC = la(
  ca,
  ko,
  Ao
);
function HC(t) {
  return ua(
    t,
    [VC, I0],
    [jC, BC],
    [GC, WC],
    [UC, qC]
  );
}
function zC(t) {
  return ua(DC(t), [kC, AC]);
}
function YC(t) {
  return ua(
    t,
    [IC, Mm],
    [RC, Mm],
    [$C, FC]
  );
}
function XC(t) {
  return ua(t, [CC, LC]);
}
const KC = la(ca);
function ZC(t) {
  return ua(t, [NC, KC]);
}
const JC = oa(OC, MC), QC = oa(D0), eL = la(
  ca,
  ko,
  Ao
);
function tL(t) {
  return ua(
    t,
    [JC, I0],
    [QC, eL]
  );
}
const Tm = "Invalid Duration", R0 = {
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
}, rL = {
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
  ...R0
}, Er = 146097 / 400, Ts = 146097 / 4800, nL = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Er / 7,
    days: Er,
    hours: Er * 24,
    minutes: Er * 24 * 60,
    seconds: Er * 24 * 60 * 60,
    milliseconds: Er * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Er / 28,
    days: Er / 4,
    hours: Er * 24 / 4,
    minutes: Er * 24 * 60 / 4,
    seconds: Er * 24 * 60 * 60 / 4,
    milliseconds: Er * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Ts / 7,
    days: Ts,
    hours: Ts * 24,
    minutes: Ts * 24 * 60,
    seconds: Ts * 24 * 60 * 60,
    milliseconds: Ts * 24 * 60 * 60 * 1e3
  },
  ...R0
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
], iL = Ji.slice(0).reverse();
function ti(t, e, r = !1) {
  const n = {
    values: r ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Re(n);
}
function $0(t, e) {
  var n;
  let r = (n = e.milliseconds) != null ? n : 0;
  for (const i of iL.slice(1))
    e[i] && (r += e[i] * t[i].milliseconds);
  return r;
}
function Nm(t, e) {
  const r = $0(t, e) < 0 ? -1 : 1;
  Ji.reduceRight((n, i) => {
    if (we(e[i]))
      return n;
    if (n) {
      const s = e[n] * r, a = t[i][n], o = Math.floor(s / a);
      e[i] += o * r, e[n] -= o * a * r;
    }
    return i;
  }, null), Ji.reduce((n, i) => {
    if (we(e[i]))
      return n;
    if (n) {
      const s = e[n] % 1;
      e[n] -= s, e[i] += s * t[n][i];
    }
    return i;
  }, null);
}
function sL(t) {
  const e = {};
  for (const [r, n] of Object.entries(t))
    n !== 0 && (e[r] = n);
  return e;
}
class Re {
  constructor(e) {
    const r = e.conversionAccuracy === "longterm" || !1;
    let n = r ? nL : rL;
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
      values: vu(e, Re.normalizeUnit),
      loc: Ke.fromObject(r),
      conversionAccuracy: r.conversionAccuracy,
      matrix: r.matrix
    });
  }
  static fromDurationLike(e) {
    if (as(e))
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
    const [n] = XC(e);
    return n ? Re.fromObject(n, r) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, r) {
    const [n] = ZC(e);
    return n ? Re.fromObject(n, r) : Re.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, r = null) {
    if (!e)
      throw new or("need to specify a reason the Duration is invalid");
    const n = e instanceof Hr ? e : new Hr(e, r);
    if (mt.throwOnInvalid)
      throw new k2(n);
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
      throw new zv(e);
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
    return this.isValid ? Wt.create(this.loc, n).formatDurationFromString(this, e) : Tm;
  }
  toHuman(e = {}) {
    if (!this.isValid)
      return Tm;
    const r = Ji.map((n) => {
      const i = this.values[n];
      return we(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: n.slice(0, -1) }).format(i);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Wh(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, Oe.fromMillis(r, { zone: "UTC" }).toISOTime(e));
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
    return this.isValid ? $0(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e), n = {};
    for (const i of Ji)
      (na(r.values, i) || na(this.values, i)) && (n[i] = r.get(i) + this.get(i));
    return ti(this, { values: n }, !0);
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
      r[n] = S0(e(this.values[n], n));
    return ti(this, { values: r }, !0);
  }
  get(e) {
    return this[Re.normalizeUnit(e)];
  }
  set(e) {
    if (!this.isValid)
      return this;
    const r = { ...this.values, ...vu(e, Re.normalizeUnit) };
    return ti(this, { values: r });
  }
  reconfigure({ locale: e, numberingSystem: r, conversionAccuracy: n, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: r }), matrix: i, conversionAccuracy: n };
    return ti(this, a);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Nm(this.matrix, e), ti(this, { values: e }, !0);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const e = sL(this.normalize().shiftToAll().toObject());
    return ti(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => Re.normalizeUnit(a));
    const r = {}, n = {}, i = this.toObject();
    let s;
    for (const a of Ji)
      if (e.indexOf(a) >= 0) {
        s = a;
        let o = 0;
        for (const u in n)
          o += this.matrix[u][a] * n[u], n[u] = 0;
        as(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        r[a] = l, n[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else
        as(i[a]) && (n[a] = i[a]);
    for (const a in n)
      n[a] !== 0 && (r[s] += a === s ? n[a] : n[a] / this.matrix[s][a]);
    return Nm(this.matrix, r), ti(this, { values: r }, !0);
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
    function r(n, i) {
      return n === void 0 || n === 0 ? i === void 0 || i === 0 : n === i;
    }
    for (const n of Ji)
      if (!r(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const Ns = "Invalid Interval";
function aL(t, e) {
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
    const n = e instanceof Hr ? e : new Hr(e, r);
    if (mt.throwOnInvalid)
      throw new P2(n);
    return new ft({ invalid: n });
  }
  static fromDateTimes(e, r) {
    const n = ba(e), i = ba(r), s = aL(n, i);
    return s == null ? new ft({
      start: n,
      end: i
    }) : s;
  }
  static after(e, r) {
    const n = Re.fromDurationLike(r), i = ba(e);
    return ft.fromDateTimes(i, i.plus(n));
  }
  static before(e, r) {
    const n = Re.fromDurationLike(r), i = ba(e);
    return ft.fromDateTimes(i.minus(n), i);
  }
  static fromISO(e, r) {
    const [n, i] = (e || "").split("/", 2);
    if (n && i) {
      let s, a;
      try {
        s = Oe.fromISO(n, r), a = s.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = Oe.fromISO(i, r), l = o.isValid;
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
    const r = e.map(ba).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), n = [];
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
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Ns;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(e = mu, r = {}) {
    return this.isValid ? Wt.create(this.s.loc.clone(r), e).formatInterval(this) : Ns;
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
  toFormat(e, { separator: r = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : Ns;
  }
  toDuration(e, r) {
    return this.isValid ? this.e.diff(this.s, e, r) : Re.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return ft.fromDateTimes(e(this.s), e(this.e));
  }
}
class al {
  static hasDST(e = mt.defaultZone) {
    const r = Oe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && r.offset !== r.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return Un.isValidZone(e);
  }
  static normalizeZone(e) {
    return hi(e, mt.defaultZone);
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
    return { relative: _0(), localeWeek: b0() };
  }
}
function Cm(t, e) {
  const r = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), n = r(e) - r(t);
  return Math.floor(Re.fromMillis(n).as("days"));
}
function oL(t, e, r) {
  const n = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = Cm(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Cm]
  ], i = {}, s = t;
  let a, o;
  for (const [l, u] of n)
    r.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = s.plus(i), o > e ? (i[l]--, t = s.plus(i), t > e && (o = t, i[l]--, t = s.plus(i))) : t = o);
  return [t, i, o, a];
}
function lL(t, e, r, n) {
  let [i, s, a, o] = oL(t, e, r);
  const l = e - i, u = r.filter(
    (c) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(c) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (s[o] = (s[o] || 0) + l / (a - i)));
  const f = Re.fromObject(s, n);
  return u.length > 0 ? Re.fromMillis(l, n).shiftTo(...u).plus(f) : f;
}
const Yh = {
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
}, Lm = {
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
}, uL = Yh.hanidec.replace(/[\[|\]]/g, "").split("");
function cL(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let r = 0; r < t.length; r++) {
      const n = t.charCodeAt(r);
      if (t[r].search(Yh.hanidec) !== -1)
        e += uL.indexOf(t[r]);
      else
        for (const i in Lm) {
          const [s, a] = Lm[i];
          n >= s && n <= a && (e += n - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function $r({ numberingSystem: t }, e = "") {
  return new RegExp(`${Yh[t || "latn"]}${e}`);
}
const fL = "missing Intl.DateTimeFormat.formatToParts support";
function je(t, e = (r) => r) {
  return { regex: t, deser: ([r]) => e(cL(r)) };
}
const hL = String.fromCharCode(160), F0 = `[ ${hL}]`, V0 = new RegExp(F0, "g");
function dL(t) {
  return t.replace(/\./g, "\\.?").replace(V0, F0);
}
function Pm(t) {
  return t.replace(/\./g, "").replace(V0, " ").toLowerCase();
}
function Fr(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(dL).join("|")),
    deser: ([r]) => t.findIndex((n) => Pm(r) === Pm(n)) + e
  };
}
function km(t, e) {
  return { regex: t, deser: ([, r, n]) => nc(r, n), groups: e };
}
function ol(t) {
  return { regex: t, deser: ([e]) => e };
}
function pL(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function mL(t, e) {
  const r = $r(e), n = $r(e, "{2}"), i = $r(e, "{3}"), s = $r(e, "{4}"), a = $r(e, "{6}"), o = $r(e, "{1,2}"), l = $r(e, "{1,3}"), u = $r(e, "{1,6}"), f = $r(e, "{1,9}"), c = $r(e, "{2,4}"), h = $r(e, "{4,6}"), d = (g) => ({ regex: RegExp(pL(g.val)), deser: ([y]) => y, literal: !0 }), m = ((g) => {
    if (t.literal)
      return d(g);
    switch (g.val) {
      case "G":
        return Fr(e.eras("short"), 0);
      case "GG":
        return Fr(e.eras("long"), 0);
      case "y":
        return je(u);
      case "yy":
        return je(c, Yf);
      case "yyyy":
        return je(s);
      case "yyyyy":
        return je(h);
      case "yyyyyy":
        return je(a);
      case "M":
        return je(o);
      case "MM":
        return je(n);
      case "MMM":
        return Fr(e.months("short", !0), 1);
      case "MMMM":
        return Fr(e.months("long", !0), 1);
      case "L":
        return je(o);
      case "LL":
        return je(n);
      case "LLL":
        return Fr(e.months("short", !1), 1);
      case "LLLL":
        return Fr(e.months("long", !1), 1);
      case "d":
        return je(o);
      case "dd":
        return je(n);
      case "o":
        return je(l);
      case "ooo":
        return je(i);
      case "HH":
        return je(n);
      case "H":
        return je(o);
      case "hh":
        return je(n);
      case "h":
        return je(o);
      case "mm":
        return je(n);
      case "m":
        return je(o);
      case "q":
        return je(o);
      case "qq":
        return je(n);
      case "s":
        return je(o);
      case "ss":
        return je(n);
      case "S":
        return je(l);
      case "SSS":
        return je(i);
      case "u":
        return ol(f);
      case "uu":
        return ol(o);
      case "uuu":
        return je(r);
      case "a":
        return Fr(e.meridiems(), 0);
      case "kkkk":
        return je(s);
      case "kk":
        return je(c, Yf);
      case "W":
        return je(o);
      case "WW":
        return je(n);
      case "E":
      case "c":
        return je(r);
      case "EEE":
        return Fr(e.weekdays("short", !1), 1);
      case "EEEE":
        return Fr(e.weekdays("long", !1), 1);
      case "ccc":
        return Fr(e.weekdays("short", !0), 1);
      case "cccc":
        return Fr(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return km(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return km(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return ol(/[a-z_+-/]{1,256}?/i);
      case " ":
        return ol(/[^\S\n\r]/);
      default:
        return d(g);
    }
  })(t) || {
    invalidReason: fL
  };
  return m.token = t, m;
}
const gL = {
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
function yL(t, e, r) {
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
  let o = gL[a];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function vL(t) {
  return [`^${t.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, t];
}
function _L(t, e, r) {
  const n = t.match(e);
  if (n) {
    const i = {};
    let s = 1;
    for (const a in r)
      if (na(r, a)) {
        const o = r[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(n.slice(s, s + l))), s += l;
      }
    return [n, i];
  } else
    return [n, {}];
}
function bL(t) {
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
  return we(t.z) || (r = Un.create(t.z)), we(t.Z) || (r || (r = new Qt(t.Z)), n = t.Z), we(t.q) || (t.M = (t.q - 1) * 3 + 1), we(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), we(t.u) || (t.S = Bh(t.u)), [Object.keys(t).reduce((s, a) => {
    const o = e(a);
    return o && (s[o] = t[a]), s;
  }, {}), r, n];
}
let Ic = null;
function EL() {
  return Ic || (Ic = Oe.fromMillis(1555555555555)), Ic;
}
function SL(t, e) {
  if (t.literal)
    return t;
  const r = Wt.macroTokenToFormatOpts(t.val), n = U0(r, e);
  return n == null || n.includes(void 0) ? t : n;
}
function j0(t, e) {
  return Array.prototype.concat(...t.map((r) => SL(r, e)));
}
function G0(t, e, r) {
  const n = j0(Wt.parseFormat(r), t), i = n.map((a) => mL(a, t)), s = i.find((a) => a.invalidReason);
  if (s)
    return { input: e, tokens: n, invalidReason: s.invalidReason };
  {
    const [a, o] = vL(i), l = RegExp(a, "i"), [u, f] = _L(e, l, o), [c, h, d] = f ? bL(f) : [null, null, void 0];
    if (na(f, "a") && na(f, "H"))
      throw new Vs(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: n, regex: l, rawMatches: u, matches: f, result: c, zone: h, specificOffset: d };
  }
}
function wL(t, e, r) {
  const { result: n, zone: i, specificOffset: s, invalidReason: a } = G0(t, e, r);
  return [n, i, s, a];
}
function U0(t, e) {
  if (!t)
    return null;
  const n = Wt.create(e, t).dtFormatter(EL()), i = n.formatToParts(), s = n.resolvedOptions();
  return i.map((a) => yL(a, t, s));
}
const Rc = "Invalid DateTime", Am = 864e13;
function ll(t) {
  return new Hr("unsupported zone", `the zone "${t.name}" is not supported`);
}
function $c(t) {
  return t.weekData === null && (t.weekData = gu(t.c)), t.weekData;
}
function Fc(t) {
  return t.localWeekData === null && (t.localWeekData = gu(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Bi(t, e) {
  const r = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new Oe({ ...r, ...e, old: r });
}
function B0(t, e, r) {
  let n = t - e * 60 * 1e3;
  const i = r.offset(n);
  if (e === i)
    return [n, e];
  n -= (i - e) * 60 * 1e3;
  const s = r.offset(n);
  return i === s ? [n, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function ul(t, e) {
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
function jl(t, e, r) {
  return B0(rc(t), e, r);
}
function Dm(t, e) {
  const r = t.o, n = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: n,
    month: i,
    day: Math.min(t.c.day, yu(n, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
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
  let [l, u] = B0(o, r, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function _a(t, e, r, n, i, s) {
  const { setZone: a, zone: o } = r;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = Oe.fromObject(t, {
      ...r,
      zone: l,
      specificOffset: s
    });
    return a ? u : u.setZone(o);
  } else
    return Oe.invalid(
      new Hr("unparsable", `the input "${i}" can't be parsed as ${n}`)
    );
}
function cl(t, e, r = !0) {
  return t.isValid ? Wt.create(Ke.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Vc(t, e) {
  const r = t.c.year > 9999 || t.c.year < 0;
  let n = "";
  return r && t.c.year >= 0 && (n += "+"), n += bt(t.c.year, r ? 6 : 4), e ? (n += "-", n += bt(t.c.month), n += "-", n += bt(t.c.day)) : (n += bt(t.c.month), n += bt(t.c.day)), n;
}
function Im(t, e, r, n, i, s) {
  let a = bt(t.c.hour);
  return e ? (a += ":", a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (a += ":")) : a += bt(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !r) && (a += bt(t.c.second), (t.c.millisecond !== 0 || !n) && (a += ".", a += bt(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? a += "Z" : t.o < 0 ? (a += "-", a += bt(Math.trunc(-t.o / 60)), a += ":", a += bt(Math.trunc(-t.o % 60))) : (a += "+", a += bt(Math.trunc(t.o / 60)), a += ":", a += bt(Math.trunc(t.o % 60)))), s && (a += "[" + t.zone.ianaName + "]"), a;
}
const W0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, xL = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, OL = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, q0 = ["year", "month", "day", "hour", "minute", "second", "millisecond"], ML = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], TL = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function NL(t) {
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
    throw new zv(t);
  return e;
}
function Rm(t) {
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
      return NL(t);
  }
}
function $m(t, e) {
  const r = hi(e.zone, mt.defaultZone), n = Ke.fromObject(e), i = mt.now();
  let s, a;
  if (we(t.year))
    s = i;
  else {
    for (const u of q0)
      we(t[u]) && (t[u] = W0[u]);
    const o = y0(t) || v0(t);
    if (o)
      return Oe.invalid(o);
    const l = r.offset(i);
    [s, a] = jl(t, l, r);
  }
  return new Oe({ ts: s, zone: r, loc: n, o: a });
}
function Fm(t, e, r) {
  const n = we(r.round) ? !0 : r.round, i = (a, o) => (a = Wh(a, n || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(a, o)), s = (a) => r.calendary ? e.hasSame(t, a) ? 0 : e.startOf(a).diff(t.startOf(a), a).get(a) : e.diff(t, a).get(a);
  if (r.unit)
    return i(s(r.unit), r.unit);
  for (const a of r.units) {
    const o = s(a);
    if (Math.abs(o) >= 1)
      return i(o, a);
  }
  return i(t > e ? -0 : 0, r.units[r.units.length - 1]);
}
function Vm(t) {
  let e = {}, r;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], r = Array.from(t).slice(0, t.length - 1)) : r = Array.from(t), [e, r];
}
class Oe {
  constructor(e) {
    const r = e.zone || mt.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new Hr("invalid input") : null) || (r.isValid ? null : ll(r));
    this.ts = we(e.ts) ? mt.now() : e.ts;
    let i = null, s = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(r))
        [i, s] = [e.old.c, e.old.o];
      else {
        const o = r.offset(this.ts);
        i = ul(this.ts, o), n = Number.isNaN(i.year) ? new Hr("invalid input") : null, i = n ? null : i, s = n ? null : o;
      }
    this._zone = r, this.loc = e.loc || Ke.create(), this.invalid = n, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  static now() {
    return new Oe({});
  }
  static local() {
    const [e, r] = Vm(arguments), [n, i, s, a, o, l, u] = r;
    return $m({ year: n, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static utc() {
    const [e, r] = Vm(arguments), [n, i, s, a, o, l, u] = r;
    return e.zone = Qt.utcInstance, $m({ year: n, month: i, day: s, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  static fromJSDate(e, r = {}) {
    const n = nC(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return Oe.invalid("invalid input");
    const i = hi(r.zone, mt.defaultZone);
    return i.isValid ? new Oe({
      ts: n,
      zone: i,
      loc: Ke.fromObject(r)
    }) : Oe.invalid(ll(i));
  }
  static fromMillis(e, r = {}) {
    if (as(e))
      return e < -Am || e > Am ? Oe.invalid("Timestamp out of range") : new Oe({
        ts: e,
        zone: hi(r.zone, mt.defaultZone),
        loc: Ke.fromObject(r)
      });
    throw new or(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  static fromSeconds(e, r = {}) {
    if (as(e))
      return new Oe({
        ts: e * 1e3,
        zone: hi(r.zone, mt.defaultZone),
        loc: Ke.fromObject(r)
      });
    throw new or("fromSeconds requires a numerical input");
  }
  static fromObject(e, r = {}) {
    e = e || {};
    const n = hi(r.zone, mt.defaultZone);
    if (!n.isValid)
      return Oe.invalid(ll(n));
    const i = Ke.fromObject(r), s = vu(e, Rm), { minDaysInFirstWeek: a, startOfWeek: o } = Sm(s, i), l = mt.now(), u = we(r.specificOffset) ? n.offset(l) : r.specificOffset, f = !we(s.ordinal), c = !we(s.year), h = !we(s.month) || !we(s.day), d = c || h, p = s.weekYear || s.weekNumber;
    if ((d || f) && p)
      throw new Vs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && f)
      throw new Vs("Can't mix ordinal dates with month/day");
    const m = p || s.weekday && !d;
    let g, y, v = ul(l, u);
    m ? (g = ML, y = xL, v = gu(v, a, o)) : f ? (g = TL, y = OL, v = Dc(v)) : (g = q0, y = W0);
    let b = !1;
    for (const C of g) {
      const R = s[C];
      we(R) ? b ? s[C] = y[C] : s[C] = v[C] : b = !0;
    }
    const E = m ? eC(s, a, o) : f ? tC(s) : y0(s), O = E || v0(s);
    if (O)
      return Oe.invalid(O);
    const N = m ? bm(s, a, o) : f ? Em(s) : s, [M, k] = jl(N, u, n), A = new Oe({
      ts: M,
      zone: n,
      o: k,
      loc: i
    });
    return s.weekday && d && e.weekday !== A.weekday ? Oe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${A.toISO()}`
    ) : A;
  }
  static fromISO(e, r = {}) {
    const [n, i] = HC(e);
    return _a(n, i, r, "ISO 8601", e);
  }
  static fromRFC2822(e, r = {}) {
    const [n, i] = zC(e);
    return _a(n, i, r, "RFC 2822", e);
  }
  static fromHTTP(e, r = {}) {
    const [n, i] = YC(e);
    return _a(n, i, r, "HTTP", r);
  }
  static fromFormat(e, r, n = {}) {
    if (we(e) || we(r))
      throw new or("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = n, a = Ke.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [o, l, u, f] = wL(a, e, r);
    return f ? Oe.invalid(f) : _a(o, l, n, `format ${r}`, e, u);
  }
  static fromString(e, r, n = {}) {
    return Oe.fromFormat(e, r, n);
  }
  static fromSQL(e, r = {}) {
    const [n, i] = tL(e);
    return _a(n, i, r, "SQL", e);
  }
  static invalid(e, r = null) {
    if (!e)
      throw new or("need to specify a reason the DateTime is invalid");
    const n = e instanceof Hr ? e : new Hr(e, r);
    if (mt.throwOnInvalid)
      throw new L2(n);
    return new Oe({ invalid: n });
  }
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(e, r = {}) {
    const n = U0(e, Ke.fromObject(r));
    return n ? n.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(e, r = {}) {
    return j0(Wt.parseFormat(e), Ke.fromObject(r)).map((i) => i.val).join("");
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
    return this.isValid ? $c(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? $c(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? $c(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? Fc(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? Fc(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? Fc(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? Dc(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? al.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? al.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? al.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? al.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, r = 6e4, n = rc(this.c), i = this.zone.offset(n - e), s = this.zone.offset(n + e), a = this.zone.offset(n - i * r), o = this.zone.offset(n - s * r);
    if (a === o)
      return [this];
    const l = n - a * r, u = n - o * r, f = ul(l, a), c = ul(u, o);
    return f.hour === c.hour && f.minute === c.minute && f.second === c.second && f.millisecond === c.millisecond ? [Bi(this, { ts: l }), Bi(this, { ts: u })] : [this];
  }
  get isInLeapYear() {
    return Po(this.year);
  }
  get daysInMonth() {
    return yu(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? Ys(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? co(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid ? co(
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
    if (e = hi(e, mt.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (r || n) {
        const s = e.offset(this.ts), a = this.toObject();
        [i] = jl(a, s, e);
      }
      return Bi(this, { ts: i, zone: e });
    } else
      return Oe.invalid(ll(e));
  }
  reconfigure({ locale: e, numberingSystem: r, outputCalendar: n } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: r, outputCalendar: n });
    return Bi(this, { loc: i });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid)
      return this;
    const r = vu(e, Rm), { minDaysInFirstWeek: n, startOfWeek: i } = Sm(r, this.loc), s = !we(r.weekYear) || !we(r.weekNumber) || !we(r.weekday), a = !we(r.ordinal), o = !we(r.year), l = !we(r.month) || !we(r.day), u = o || l, f = r.weekYear || r.weekNumber;
    if ((u || a) && f)
      throw new Vs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Vs("Can't mix ordinal dates with month/day");
    let c;
    s ? c = bm(
      { ...gu(this.c, n, i), ...r },
      n,
      i
    ) : we(r.ordinal) ? (c = { ...this.toObject(), ...r }, we(r.day) && (c.day = Math.min(yu(c.year, c.month), c.day))) : c = Em({ ...Dc(this.c), ...r });
    const [h, d] = jl(c, this.o, this.zone);
    return Bi(this, { ts: h, o: d });
  }
  plus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e);
    return Bi(this, Dm(this, r));
  }
  minus(e) {
    if (!this.isValid)
      return this;
    const r = Re.fromDurationLike(e).negate();
    return Bi(this, Dm(this, r));
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
    return this.isValid ? Wt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : Rc;
  }
  toLocaleString(e = mu, r = {}) {
    return this.isValid ? Wt.create(this.loc.clone(r), e).formatDateTime(this) : Rc;
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
    let o = Vc(this, a);
    return o += "T", o += Im(this, a, r, n, i, s), o;
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Vc(this, e === "extended") : null;
  }
  toISOWeekDate() {
    return cl(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: r = !1,
    includeOffset: n = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + Im(
      this,
      a === "extended",
      r,
      e,
      n,
      s
    ) : null;
  }
  toRFC2822() {
    return cl(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return cl(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Vc(this, !0) : null;
  }
  toSQLTime({ includeOffset: e = !0, includeZone: r = !1, includeOffsetSpace: n = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (r || e) && (n && (i += " "), r ? i += "z" : e && (i += "ZZ")), cl(this, i, !0);
  }
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Rc;
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
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n }, s = iC(r).map(Re.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = lL(o, l, s, i);
    return a ? u.negate() : u;
  }
  diffNow(e = "milliseconds", r = {}) {
    return this.diff(Oe.now(), e, r);
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
    const r = e.base || Oe.fromObject({}, { zone: this.zone }), n = e.padding ? this < r ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), Fm(r, this.plus(n), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  toRelativeCalendar(e = {}) {
    return this.isValid ? Fm(e.base || Oe.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...e) {
    if (!e.every(Oe.isDateTime))
      throw new or("min requires all arguments be DateTimes");
    return wm(e, (r) => r.valueOf(), Math.min);
  }
  static max(...e) {
    if (!e.every(Oe.isDateTime))
      throw new or("max requires all arguments be DateTimes");
    return wm(e, (r) => r.valueOf(), Math.max);
  }
  static fromFormatExplain(e, r, n = {}) {
    const { locale: i = null, numberingSystem: s = null } = n, a = Ke.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return G0(a, e, r);
  }
  static fromStringExplain(e, r, n = {}) {
    return Oe.fromFormatExplain(e, r, n);
  }
  static get DATE_SHORT() {
    return mu;
  }
  static get DATE_MED() {
    return Yv;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return A2;
  }
  static get DATE_FULL() {
    return Xv;
  }
  static get DATE_HUGE() {
    return Kv;
  }
  static get TIME_SIMPLE() {
    return Zv;
  }
  static get TIME_WITH_SECONDS() {
    return Jv;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Qv;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return e0;
  }
  static get TIME_24_SIMPLE() {
    return t0;
  }
  static get TIME_24_WITH_SECONDS() {
    return r0;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return n0;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return i0;
  }
  static get DATETIME_SHORT() {
    return s0;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return a0;
  }
  static get DATETIME_MED() {
    return o0;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return l0;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return D2;
  }
  static get DATETIME_FULL() {
    return u0;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return c0;
  }
  static get DATETIME_HUGE() {
    return f0;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return h0;
  }
}
function ba(t) {
  if (Oe.isDateTime(t))
    return t;
  if (t && t.valueOf && as(t.valueOf()))
    return Oe.fromJSDate(t);
  if (t && typeof t == "object")
    return Oe.fromObject(t);
  throw new or(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const H0 = [0, 1, 0, 0];
function jm(t, e = "second", r, n) {
  const { t: i } = Xe(), s = new Date(t).toISOString(), a = {
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
  return l ? Oe.fromISO(s).toFormat(
    `${n ? "UTC:" : ""}${l}`
  ) : s.replace(/\.\d{3}/, "");
}
function Xf(t) {
  return new Date(t).toISOString().split(".")[0] + "Z";
}
function jc(t) {
  return Oe.fromISO(t).toFormat("yyyy-MM-dd");
}
function CL(t, e) {
  return t <= e.minValue ? e.minValue : t >= e.maxValue ? e.maxValue : e.timeValueList ? LL(t, e) : PL(t, e);
}
function LL(t, e) {
  var l;
  const r = (l = e.timeValueList) != null ? l : [];
  let n, i = 0, s = r.length - 1;
  for (; s - i > 1; )
    n = Math.floor((i + s) / 2), r[n] >= t ? s = n : i = n;
  const a = Math.abs(r[i] - t), o = Math.abs(r[s] - t);
  return r[a < o ? i : s];
}
function PL(t, e) {
  var l;
  const r = (l = e.timeInterval) != null ? l : H0, n = new Date(t).getTime(), i = new Date(e.minValue), s = e.maxValue;
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
const vt = ys("map", () => {
  const t = Yr(), e = be({}), r = nt([]), n = nt([]), i = be(!1), s = be(!1), a = be(void 0);
  function o(v) {
    a.value = v;
  }
  function l(...v) {
    r.value = [.../* @__PURE__ */ new Set([...r.value, ...v])];
  }
  function u(...v) {
    n.value = [.../* @__PURE__ */ new Set([...n.value, ...v])];
  }
  function f(...v) {
    r.value = r.value.filter(
      (b) => v.indexOf(b.id) === -1
    ), n.value = n.value.filter(
      (b) => v.indexOf(b.id) === -1
    );
  }
  function c() {
    r.value = [];
  }
  function h(v) {
    var b;
    return !!((b = r.value) != null && b.find((E) => E.id === v));
  }
  function d(v, b = !1) {
    var O;
    const E = b ? n : r;
    E.value = [
      ...((O = E.value) == null ? void 0 : O.sort(
        (N, M) => v.indexOf(N.id) - v.indexOf(M.id)
      )) || []
    ];
  }
  function p(v, b) {
    r.value = r.value.map((E) => E.id === v ? { ...E, opacity: b, previousOpacity: E.opacity } : E);
  }
  function m(v, b, E) {
    r.value = r.value.map((O) => {
      if (O.id === v) {
        const N = {
          ...O,
          currentTimeMinValue: b ? Xf(b) : void 0,
          currentTimeMaxValue: E ? Xf(E) : void 0
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
    setIs3dMesh: y,
    hasLayer: h
  };
}), Gm = "main", kL = "root_3d", AL = -222, Zt = ys(
  "config",
  () => {
    const t = nt(), e = be(Gm), r = pe(() => {
      var u;
      return (u = t.value) == null ? void 0 : u.themes;
    }), n = pe(
      () => {
        var u;
        return (u = r.value) == null ? void 0 : u.find((f) => f.name === e.value);
      }
    ), i = pe(() => {
      var u;
      return ((u = t.value) == null ? void 0 : u.background_layers) || [];
    }), s = pe(() => {
      var f;
      const u = (f = r.value) == null ? void 0 : f.filter(
        (c) => {
          var h;
          return ((h = c.metadata) == null ? void 0 : h.ol3d_type) !== void 0;
        }
      );
      if (!!u)
        return {
          name: kL,
          id: AL,
          children: u.flatMap(
            (c) => c != null && c.children ? c.children : c
          ),
          metadata: {}
        };
    });
    function a(u) {
      t.value = u, n.value === void 0 && l();
    }
    function o(u) {
      e.value = u;
    }
    function l() {
      e.value = Gm;
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
function os() {
  function t(o, l) {
    return r(o, void 0, l);
  }
  function e(o, l) {
    return r(void 0, o, l);
  }
  function r(o, l, u) {
    const { themes: f } = Zt();
    if (u = u || (f == null ? void 0 : f.find((c) => r(o, l, c))), o && (u == null ? void 0 : u.id) === o || l && (u == null ? void 0 : u.name) === l)
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
const Um = os();
function Yr() {
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
    const u = ((d = l.time) == null ? void 0 : d.mode) === In.RANGE;
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
    ].join(O2);
  }
  function s(l) {
    var h, d;
    const u = fu();
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
      uo.WARNING
    )), l.id !== ((d = f.bgLayer) == null ? void 0 : d.id) && a(l);
  }
  function a(l) {
    var c, h, d;
    const u = vt(), f = fu();
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
      uo.WARNING
    ));
  }
  function o(l, u = !0, f) {
    var m;
    const c = Zt(), h = vt(), d = f ? c.layerTrees_3d : c.theme, p = Um.findById(l, d);
    if (p) {
      const g = ((m = p.metadata) == null ? void 0 : m.linked_layers) || [];
      u === !1 ? h.removeLayers(p.id, ...g) : (s(p), (f ? h.add3dLayers : h.addLayers)(
        e(p),
        ...g.map(
          (v) => e(
            Um.findById(parseInt(v, 10))
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
class DL {
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
const fl = new DL();
function Bm(t, e) {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => {
      t.apply(n);
    }, e);
  };
}
function Ks(t) {
  return (t == null ? void 0 : t.trim()) && !isNaN(Number(t)) ? Number(t) : void 0;
}
function IL(t, e) {
  return (t == null ? void 0 : t.split(e).map(
    (r) => r !== null && !isNaN(Number(r)) ? parseFloat(r) : void 0
  )) || [];
}
function RL(t, e) {
  return (t == null ? void 0 : t.split(e).map(Xh)) || [];
}
function Xh(t) {
  return (t == null ? void 0 : t.trim()) === "true" ? !0 : (t == null ? void 0 : t.trim()) === "false" ? !1 : void 0;
}
function z0() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  ).matches;
}
function mn(t) {
  return typeof window < "u" && window.navigator && t.test(navigator.userAgent);
}
const $L = mn(/firefox/i);
mn(/safari/i) && !mn(/chrome/i) && mn(/android/i);
mn(/iP(ad|od|hone)/i);
mn(/chrome/i) && mn(/android/i);
mn(/chrome/i);
mn(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
);
mn(/Edge/i);
const Do = "ipv6", _u = "address", Io = "applogin", Ro = "localforage", Zs = "debug", FL = "embeddedserver", VL = "embeddedserverprotocol", bu = "fid", wi = "lang", Eu = "layersOpen", Kf = "version", jL = "map_id", Wm = "layers", qm = "bgLayer", Hm = "opacities", fo = "theme", zm = "time", Ym = "zoom", GL = "SRS", Xm = "X", Km = "Y", ho = "serial", UL = "serialLayer", Y0 = [
  "basemap_2015_global",
  "topogr_global",
  "topo_bw_jpeg"
], Zf = "lc", Jf = "sliderRatio", X0 = "bgOpacity", BL = "layers_indices", Zm = "layers_opacity", Jm = "layers_visibility";
var Dt = /* @__PURE__ */ ((t) => (t[t.localStorage = 0] = "localStorage", t[t.permalink = 1] = "permalink", t[t.permalinkAsPath = 2] = "permalinkAsPath", t[t.permalinkAndLocalStorage = 3] = "permalinkAndLocalStorage", t))(Dt || {});
class K0 {
}
class Su extends K0 {
  static processRules(e) {
    return Su.ruleUseLocalStorage(e) ? Dt.localStorage : Dt.permalink;
  }
  static processRulesForKey(e, r) {
    if (e === fo && {}.VITE_DEPLOY_GHPAGES !== "true")
      return Dt.permalinkAsPath;
    if (Y0.includes(e))
      return Dt.localStorage;
    if (e === ho)
      return Dt.permalink;
    if (e === Eu)
      return Dt.localStorage;
  }
  static ruleUseLocalStorage(e) {
    return [WL, qL, HL].reduce(
      (r, n) => r || n(e),
      !1
    );
  }
}
const WL = (t) => Object.keys(t).length === 0, qL = (t) => Object.keys(t).length === 1 && (t.hasOwnProperty(Do) || t.hasOwnProperty(Io) || t.hasOwnProperty(Ro)), HL = (t) => Object.keys(t).length === 3 && t.hasOwnProperty(Do) && t.hasOwnProperty(Io) && t.hasOwnProperty(Ro);
class wu extends K0 {
  static processRules() {
    return Dt.permalinkAndLocalStorage;
  }
  static processRulesForKey(e, r) {
    if (wu.ruleUsePermalink(e))
      return Dt.permalink;
    if (e === Eu || Y0.includes(e))
      return Dt.localStorage;
    if (e === ho)
      return Dt.permalink;
    if (e === fo)
      return Dt.permalinkAsPath;
  }
  static ruleUsePermalink(e) {
    return [
      zL,
      YL,
      XL
    ].reduce(
      (r, n) => r || n(e),
      !1
    );
  }
}
const zL = (t) => t === Zf || t === Jf, YL = (t) => t === Kf, XL = (t) => t === fo && {}.VITE_DEPLOY_GHPAGES === "true";
class Z0 {
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
const Qi = new Z0();
class KL extends Z0 {
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
const ZL = new KL();
class JL {
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
    return Qi.getSnappedParamsAsObj();
  }
  getValue(e) {
    var i;
    const r = (i = this.correspondingStorages(
      Su.processRules(this.paramKeys)
    )) == null ? void 0 : i.pop(), n = this.storageForKey(e, Su, r);
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
      wu.processRules()
    ), n = this.storageForKey(e, wu);
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
    if (e === Dt.permalinkAndLocalStorage)
      return [Qi, localStorage];
    if (e === Dt.localStorage)
      return [localStorage];
    if (e === Dt.permalink)
      return [Qi];
    if (e === Dt.permalinkAsPath)
      return [ZL];
  }
}
const hl = new JL();
function QL(t) {
  return eP(t) || tP(t) || rP(t) || nP(t);
}
const eP = (t) => Object.keys(t).length === 0, tP = (t) => {
  const e = Object.keys(t);
  return Object.keys(t).length === 1 && [
    Do,
    Io,
    Ro,
    bu,
    wi,
    _u,
    Zs
  ].some((r) => e.indexOf(r) !== -1);
}, rP = (t) => {
  const e = Object.keys(t), r = (i) => e.indexOf(i) !== -1, n = [
    [Io, Ro],
    [Zs, bu],
    [wi, bu],
    [Zs, wi],
    [Zs, _u],
    [wi, _u]
  ];
  return Object.keys(t).length === 2 && n.reduce(
    (i, s) => i || s.every(r),
    !1
  );
}, nP = (t) => {
  const e = Object.keys(t), r = (a) => e.indexOf(a) !== -1, n = [Do, Io, Ro].every(
    r
  ), i = [Zs, bu, wi].every(r), s = [Zs, _u, wi].every(r);
  return Object.keys(t).length === 3 && (n || i || s);
};
class iP {
  constructor() {
    Qe(this, "intialVersion");
    const e = hl.paramKeys, r = this.getValue(Kf, Ks);
    this.intialVersion = r ? Math.max(2, Math.min(r, 3)) : QL(e) ? 3 : 2, this.setValue(Kf, 3);
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
    return this.mapToEntity(hl.getValue(e), r);
  }
  setValue(e, r, n) {
    hl.setValue(e, this.mapToStorage(r, n));
  }
  removeItem(e) {
    hl.removeItem(e);
  }
}
const Ne = new iP(), sP = [
  "line",
  "fill",
  "symbol",
  "fill-extrusion",
  "background",
  "hillshade"
], aP = "https://vectortiles.geoportail.lu", oP = "/getpermalinkstyle", lP = "/uploadpermalinkstyle", uP = "/deletepermalinkstyle";
class cP {
  constructor() {
    Qe(this, "_vectortilesUrl", aP);
    Qe(this, "_mvtStylesGetUrl", oP);
    Qe(this, "_mvtStylesUploadUrl", lP);
    Qe(this, "_mvtStylesDeleteUrl", uP);
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
const La = new cP(), Vn = () => ({
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
function ki() {
  function t(g) {
    const y = Qi.getItem(FL), v = Qi.getItem(VL) || "http";
    return (y ? `${v}://${y}` : La.vectortilesUrl) + `/styles/${g}/style.json`;
  }
  function e(g) {
    return `${La.vectortilesUrl}/styles/${g}/{z}/{x}/{y}.png`;
  }
  function r(g) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(g);
  }
  function n(g, y) {
    const v = Xr();
    if (g == null)
      return;
    const b = /* @__PURE__ */ new Map();
    v.bgVectorSources.forEach((E, O) => {
      if (O === g.id) {
        const N = { ...E, xyz_custom: y };
        b.set(O, N);
      } else
        b.set(O, E);
    }), v.setBgVectorSources(b);
  }
  function i(g, y, v = !1) {
    const b = "", E = t(y), O = e(y), N = {
      label: g,
      defaultMapBoxStyle: E,
      defaultMapBoxStyleXYZ: O,
      xyz: O,
      xyz_custom: b,
      style: E
    }, M = Qi.getItem(ho), k = Qi.getItem(UL);
    if (M)
      r(M) && console.log(k);
    else if (!v)
      return Promise.resolve(N);
    return Promise.resolve(N);
  }
  function s(g) {
    const y = Vn().medium_default_styles.road;
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
        b == null || b.layers.forEach((O, N) => {
          for (const M of sP)
            if ((E[`${M}s`] || []).includes(O.id)) {
              const A = Object.assign(
                {},
                b.layers[N].paint
              );
              E.color && (A[`${M}-color`] = E.color, A[`${M}-opacity`] = 1, b.layers[N].paint = A), b.layers[N].layout = Object.assign(
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
      const y = `${La.mvtStylesDeleteUrl}?id=${g}`;
      return fetch(y).catch(() => "");
    }
  }
  function l(g, y) {
    return o(y).then(() => {
      const v = new FormData(), b = JSON.stringify(g), E = new Blob([b], { type: "application/json" });
      v.append("style", E, "style.json");
      const O = {
        method: "POST",
        body: v
      };
      return fetch(La.mvtStylesUploadUrl, O).then((N) => N.json()).then((N) => N.id).catch((N) => console.warn(N));
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
    return Vn().bg_layers.find((y) => y.id == (g == null ? void 0 : g.id));
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
  function p(g, y) {
    return y.map(
      (v) => Object.assign(v, {
        selected: v.colors.every(
          (b, E) => {
            var O;
            return ((O = g[E]) == null ? void 0 : O.color) === b;
          }
        )
      })
    );
  }
  function m() {
    const g = [], y = Xr();
    Vn().bg_layers.forEach((v) => {
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
    setCustomStyleSerial: n,
    unregisterStyle: o,
    registerStyle: l,
    checkSelection: p,
    isLayerStyleEditable: h,
    getStyleCapabilitiesFromLayer: d,
    initBackgroundsConfigs: m
  };
}
const Xr = ys(
  "style",
  () => {
    const t = ki(), e = nt(), r = nt(/* @__PURE__ */ new Map()), n = nt(
      /* @__PURE__ */ new Map()
    ), i = nt(!1), s = nt(null), a = nt();
    function o(p) {
      r.value = p;
    }
    function l(p) {
      const m = /* @__PURE__ */ new Map();
      n.value.forEach((g, y) => {
        y !== p && m.set(y, g);
      }), n.value = m;
    }
    function u(p, m) {
      const g = /* @__PURE__ */ new Map();
      n.value.forEach(
        (y, v) => g.set(v, y)
      ), g.set(p, m), n.value = g;
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
      bgVectorSources: r,
      bgVectorBaseStyles: n,
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
class fP {
  constructor() {
    Qe(this, "styleWatcher");
  }
  bootstrapStyle() {
    const e = Xr();
    let r, n = !1;
    r = yr(() => {
      e.bgVectorSources && (this.restoreStyle(!1), n && this.persistStyle(), n = !0, r && r());
    });
  }
  persistStyle() {
    const e = Xr(), { bgStyle: r } = He(e);
    this.styleWatcher || (this.styleWatcher = tt(
      r,
      (n, i) => {
        if (i !== n) {
          const s = vt();
          s.bgLayer && (Ne.setValue(
            s.bgLayer.name,
            n || [],
            fl.styleToLocalStorage
          ), Ne.setValue(
            ho,
            n || [],
            fl.styleToSerial
          ));
        }
      },
      { immediate: !0 }
    ));
  }
  restoreStyle(e) {
    const r = Xr();
    r.setStyle(null);
    const i = vt().bgLayer;
    if (i) {
      let s = [];
      e || (s = Ne.getValue(
        ho,
        fl.styleSerialToStyle
      )), s.length === 0 && (s = Ne.getValue(
        i.name,
        fl.styleLocalStorageToStyle
      )), s && s.length > 0 && r.setStyle(s);
    }
  }
}
const J0 = new fP(), hP = "id", dP = "label", pP = "layer_name", mP = "metadata", gP = "queryable_id", yP = "current_time", vP = "time", _P = "defaultMapBoxStyle", bP = "https://map.geoportail.lu/ogcproxywms", EP = "https://map.geoportail.lu/httpsproxy";
class SP {
  constructor() {
    Qe(this, "_wmsProxyUrl", bP);
    Qe(this, "_remoteProxyUrl", EP);
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
const ia = new SP();
function Q0() {
  return Q_(
    [5.31, 49.38, 6.64, 50.21],
    Uv,
    Ha
  );
}
function e_(t) {
  var e;
  return !!((e = t == null ? void 0 : t.metadata) != null && e.hasRetina) && z0();
}
function wP(t, e = "https") {
  const r = t.imageType.split("/")[1], n = Ne.getValue(Do, Xh) ? "app.geoportail.lu" : "geoportail.lu";
  return `${e === "https" ? "//wmts{3-4}." : "//wmts{1-2}."}${n}/mapproxy_4_v3/wmts/{Layer}${e_(t) ? "_hd" : ""}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${r}`;
}
class xP {
  createOlLayer(e) {
    const { name: r, layers: n, imageType: i, url: s, id: a } = e, o = new Ng({
      url: s || ia.wmsProxyUrl,
      hidpi: z0(),
      serverType: "mapserver",
      params: {
        FORMAT: i,
        LAYERS: n
      },
      ...s != null || ia.remoteProxyUrl ? { crossOrigin: "anonymous" } : {}
    });
    return new ib({
      properties: {
        "olcs.extent": Q0(),
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
const t_ = new xP(), OP = [
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
], MP = [
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
class TP {
  createOlLayer(e) {
    const { name: r, imageType: n, id: i } = e, s = e_(e), a = Sl(Ha), o = a.getExtent(), l = new Cg({
      url: wP(e),
      tilePixelRatio: s ? 2 : 1,
      layer: r,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${s ? "_HD" : ""}`,
      format: n,
      requestEncoding: "REST",
      projection: a,
      tileGrid: new ab({
        origin: ob(o),
        extent: o,
        resolutions: OP,
        matrixIds: MP
      }),
      style: "default",
      crossOrigin: "anonymous"
    });
    return new sb({
      source: l,
      properties: {
        "olcs.extent": Q0(),
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
const r_ = new TP();
class n_ extends lb {
  constructor(e) {
    const r = Object.assign({}, e);
    delete r.accessToken, delete r.style, delete r.container, delete r.xyz, super(r), this.set("xyz", e.maplibreOptions.xyz), this.set("xyz_custom", e.maplibreOptions.xyz_custom), this.xyz_ = e.xyz, e.accessToken && (vd.accessToken = e.accessToken), this.map_ = new vd.Map({
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
    const r = this.map_.getCanvas(), n = e.viewState;
    r.style.position = "absolute";
    const i = this.getVisible();
    r.style.display = i ? "block" : "none";
    const s = this.getOpacity().toString();
    s !== r.style.opacity && (r.style.opacity = s);
    const a = n.rotation;
    return a && this.map_.rotateTo(ub(-a), {
      animate: !1
    }), this.map_.jumpTo({
      center: cb(n.center),
      zoom: n.zoom - 1,
      animate: !1
    }), this.map_._frame && (this.map_._frame.cancel(), this.map_._frame = null), this.map_._render(), r;
  }
  setLayerVisibility(e, r) {
    this.map_.setLayoutProperty(
      e,
      "visibility",
      r ? "visible" : "none"
    );
  }
  getStyle() {
    return this.map_.getStyle();
  }
  getXYZ() {
    return this.get("xyz");
  }
}
class NP {
  createOlLayer(e, r) {
    const n = Fn(), { id: i, metadata: s, name: a } = e, o = r.get(i);
    if (!o)
      return;
    const l = {
      container: n.getOlMap().getTarget(),
      ...o
    }, u = new n_({
      maplibreOptions: l,
      label: a,
      id: i,
      queryable_id: i,
      metadata: s
    }), f = Xr(), c = ki();
    return u.getMapLibreMap().loaded() ? f.setBaseStyle(i, u.getMapLibreMap().getStyle()) : new Promise(
      (h) => u.getMapLibreMap().once("data", h)
    ).then(
      () => f.setBaseStyle(i, u.getMapLibreMap().getStyle())
    ), u.set(
      _P,
      c.getDefaultMapBoxStyleUrl(c.getVectorId(e))
    ), u;
  }
}
const CP = new NP();
var ls = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WFS = "WFS", t.WMTS = "WMTS", t.BG_WMTS = "BG WMTS", t.BG_MVT = "BG MVT", t["3D"] = "3D", t))(ls || {});
class LP {
  createOlLayer(e, r) {
    let n;
    if (r && (n = CP.createOlLayer(e, r)), !n)
      switch (e.type) {
        case ls.WMS:
          n = t_.createOlLayer(e);
          break;
        case ls.WMTS:
        case ls.BG_WMTS:
          n = r_.createOlLayer(e);
          break;
        default:
          throw new Error(`Unrecognized layer type: ${e.type}`);
      }
    return n.set(hP, e.id), n.set(dP, e.name), n.set(pP, e.name), n.set(mP, e.metadata), n.set(gP, e.id), n.set(
      yP,
      Yr().getLayerCurrentTime(e)
    ), n.set(vP, e.time), n.setOpacity(e.opacity), n;
  }
}
const Qm = new LP();
class PP {
  setLayerTime(e, r) {
    const n = e.getSource();
    n instanceof Ng && t_.setLayerTime(n, r), n instanceof Cg && r_.setLayerTime(e, n, r);
  }
}
const kP = new PP(), dl = -200;
function i_() {
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
    p.forEach((g, y) => {
      const v = m.find(
        (b) => b.get("id") === g.id
      );
      v == null || v.setZIndex(y + 1);
    });
  }
  function i(d, p, m) {
    const g = d.getLayers().getArray().find((y) => y.get("id") === p);
    g && g.setOpacity(m);
  }
  function s(d, p) {
    const m = Yr(), g = e(d, p.id), y = m.getLayerCurrentTime(p);
    y && g && kP.setLayerTime(g, y);
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
      const g = Qm.createOlLayer(d);
      return l(p, g), g;
    }
  }
  function f(d) {
    return d && ya.get(d.id) || null;
  }
  function c(d, p) {
    const g = d.getLayers().getArray().find((y) => y.getZIndex() === dl);
    g && p(g);
  }
  function h(d, p, m) {
    var E;
    const g = d.getLayers(), y = g.getArray().findIndex((O) => O.getZIndex() === dl), v = (E = g.getArray()[y]) == null ? void 0 : E.get("id");
    let b;
    p && (o(p) ? b = f(p) : (b = Qm.createOlLayer(
      p,
      m
    ), l(p.id, b))), y >= 0 ? b ? (b.setZIndex(dl), g.setAt(y, b)) : g.removeAt(y) : b && (b.setZIndex(dl), d.addLayer(b)), v && v !== (p == null ? void 0 : p.id) && J0.restoreStyle(!0);
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
class AP {
  constructor(e) {
    Qe(this, "previousLayers");
    Qe(this, "previousVectorSources");
    const r = vt(), n = Xr(), i = Fn(), s = ki(), a = i_(), { appliedStyle: o } = He(n);
    tt(
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
    ), tt(
      () => r.bgLayer,
      (l) => l !== void 0 && a.setBgLayer(e, l, n.bgVectorSources)
    ), yr(() => {
      n.isExpertStyleActive || (o.value = s.applyDefaultStyle(
        r.bgLayer,
        n.bgVectorBaseStyles,
        n.bgStyle
      ));
    }), tt(o, (l) => {
      n.bgStyle === null && !n.isExpertStyleActive ? s.unregisterStyle(n.styleSerial).then(n.styleSerial = null) : s.registerStyle(l, n.styleSerial).then((u) => {
        var c;
        n.styleSerial = u;
        const f = (c = r == null ? void 0 : r.bgLayer) == null ? void 0 : c.id;
        (r == null ? void 0 : r.bgLayer) && f !== void 0 && u !== void 0 && a.setBgLayer(
          e,
          r == null ? void 0 : r.bgLayer,
          n.bgVectorSources
        );
      }), a.applyOnBgLayer(
        e,
        (u) => s.applyConsolidatedStyle(u, l)
      );
    }), tt(
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
const DP = {
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
class IP {
  bootstrap() {
    this.restore(), this.persist();
  }
  persistZoom() {
    const e = Fn().getOlMap().getView(), r = () => {
      const n = e.getZoom();
      Ne.setValue(Ym, n ? Math.ceil(n) : null);
    };
    r(), _d.listen(
      e,
      "change:resolution",
      Bm(r, 300)
    );
  }
  persistXY() {
    const e = Fn().getOlMap().getView(), r = () => {
      const n = e.getCenter();
      Ne.setValue(Xm, n ? Math.round(n[0]) : null), Ne.setValue(Km, n ? Math.round(n[1]) : null);
    };
    r(), _d.listen(
      e,
      fb.PROPERTYCHANGE,
      Bm(r, 300)
    );
  }
  persist() {
    this.persistXY(), this.persistZoom();
  }
  restore() {
    const e = Fn().getOlMap().getView(), r = Ne.getValue(Ym, Ks), n = Ne.getInitialVersion(), i = Ne.getValue(Xm, Ks), s = Ne.getValue(Km, Ks), a = Ne.getValue(GL), o = eb(
      BN,
      Ha
    );
    let l, u;
    r !== void 0 ? u = n === 3 ? Number(r) : DP[r] : u = 8, i != null && s != null ? n === 3 && a != null ? l = yd([i, s], a, Ha) : l = n === 3 ? [i, s] : o([s, i], void 0, 2) : l = yd(
      [6, 49.7],
      Uv,
      Ha
    ), e.setCenter(l), e.setZoom(u);
  }
}
const RP = new IP(), $P = {
  key: 0,
  class: "absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
}, FP = /* @__PURE__ */ fe({
  __name: "attribution-control",
  setup(t) {
    const e = vt(), r = be("");
    return yr(() => {
      var n, i;
      r.value = ((i = (n = e.bgLayer) == null ? void 0 : n.metadata) == null ? void 0 : i.attribution) || "";
    }), (n, i) => {
      const s = xh("dompurify-html");
      return r.value ? Ql((P(), V("div", $P, null, 512)), [
        [s, r.value]
      ]) : F("v-if", !0);
    };
  }
}), VP = /* @__PURE__ */ he(FP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/attribution-control.vue"]]);
function $o(t, e) {
  const r = new t(e), n = Fn(), i = Ws("olMap");
  return vr(() => {
    i.addControl(r), i.changed();
  }), Li(() => {
    const s = n.getOlMap();
    s.removeControl(r), s.changed();
  }), {
    control: r
  };
}
const jP = ["title"], GP = /* @__PURE__ */ fe({
  __name: "location-control",
  props: {
    className: { type: String, required: !1, default: "location-button" },
    label: { type: String, required: !1, default: "\uE800" },
    tipLabel: { type: String, required: !1, default: "Location" }
  },
  setup(t) {
    const { t: e } = Xe(), r = t, n = be(null);
    function i() {
    }
    return vr(
      () => $o(kg, { ...r, target: n })
    ), (s, a) => (P(), V("div", {
      ref_key: "controlElement",
      ref: n,
      class: ke(`tracker-off ${r.className} ${x(Lg)} ${x(Pg)}`)
    }, [
      L("button", {
        title: x(e)(r.tipLabel),
        onClick: i
      }, ae(r.label), 9, jP)
    ], 2));
  }
}), UP = /* @__PURE__ */ he(GP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/location-control.vue"]]), BP = ["title"], WP = /* @__PURE__ */ fe({
  __name: "map-3d",
  props: {
    className: { type: String, required: !1, default: "map-3d-button" },
    label: { type: String, required: !1, default: "\uE057" },
    tipLabel: { type: String, required: !1, default: "3d" }
  },
  setup(t) {
    const e = vt(), { t: r } = Xe(), n = t, i = be(null);
    vr(
      () => $o(kg, { ...n, target: i })
    );
    const s = () => {
      e.setIs3dActive(!e.is3dActive);
    };
    return (a, o) => (P(), V("div", {
      ref_key: "controlElement",
      ref: i,
      class: ke(`${n.className} ${x(Lg)} ${x(Pg)} ${x(e).is3dActive ? "active" : ""}`)
    }, [
      L("button", {
        title: x(r)(n.tipLabel),
        onClick: s
      }, ae(n.label), 9, BP)
    ], 2));
  }
}), qP = /* @__PURE__ */ he(WP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/map-3d.vue"]]), HP = /* @__PURE__ */ fe({
  __name: "fullscreen-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01C" },
    labelActive: { type: String, required: !1, default: "\uE02C" }
  },
  setup(t) {
    return $o(hb, t), (r, n) => F("v-if", !0);
  }
}), zP = /* @__PURE__ */ he(HP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/fullscreen-control.vue"]]), YP = /* @__PURE__ */ fe({
  __name: "zoom-control",
  props: {
    className: { type: String, required: !1 },
    zoomInLabel: { type: String, required: !1, default: "\uE032" },
    zoomOutLabel: { type: String, required: !1, default: "\uE033" }
  },
  setup(t) {
    return $o(db, t), (r, n) => F("v-if", !0);
  }
}), XP = /* @__PURE__ */ he(YP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/zoom-control.vue"]]);
class KP extends pb {
  constructor(r) {
    super(r);
    Qe(this, "ol3dm");
  }
  handleZoomToExtent() {
    this.ol3dm && this.ol3dm.luxCameraExtentInRadians && this.ol3dm.is3dEnabled() || super.handleZoomToExtent();
  }
}
const ZP = /* @__PURE__ */ fe({
  __name: "zoom-to-extent-control",
  props: {
    className: { type: String, required: !1 },
    label: { type: String, required: !1, default: "\uE01B" },
    tipLabel: { type: String, required: !1 },
    extent: { type: Array, required: !0 }
  },
  setup(t) {
    return $o(KP, t), (r, n) => F("v-if", !0);
  }
}), JP = /* @__PURE__ */ he(ZP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map-controls/zoom-to-extent-control.vue"]]), QP = /* @__PURE__ */ fe({
  __name: "map-container",
  props: {
    v4_standalone: { type: Boolean, required: !1, default: !1 }
  },
  setup(t) {
    const e = Fn(), r = be(null), n = e.createMap(), i = [
      425152.9429259216,
      632446599999133e-8,
      914349.9239510496,
      6507914867875754e-9
    ];
    return vr(() => {
      r.value && (new AP(n), RP.bootstrap(), n.setTarget(r.value), window.olMap = n);
    }), Ay("olMap", n), (s, a) => (P(), V("div", {
      id: "map-container",
      ref_key: "mapContainer",
      ref: r,
      class: "h-full w-full bg-white relative"
    }, [
      ee(XP),
      ee(JP, { extent: i }),
      ee(zP),
      ee(VP),
      s.v4_standalone ? (P(), Fe(qP, { key: 0 })) : F("v-if", !0),
      ee(UP)
    ], 512));
  }
}), ek = /* @__PURE__ */ he(QP, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/map/map-container.vue"]]), tk = "fr", rk = !0, nk = !1, ik = !1, wt = ys(
  "app",
  () => {
    const t = be(tk), e = be(rk), r = be(nk), n = be(ik), i = be(), s = be(), a = be(!1), o = be(!1);
    function l(y) {
      t.value = y;
    }
    function u(y) {
      e.value = y, y || (n.value = !1, r.value = !1);
    }
    function f(y) {
      r.value = y, y && (n.value = !1);
    }
    function c(y) {
      n.value = y;
    }
    function h(y) {
      s.value = y;
    }
    function d(y) {
      i.value = y;
    }
    function p() {
      a.value = !0;
    }
    function m() {
      a.value = !1;
    }
    function g(y) {
      o.value = y;
    }
    return {
      lang: t,
      layersOpen: e,
      myLayersTabOpen: r,
      themeGridOpen: n,
      mapId: i,
      styleEditorOpen: a,
      remoteLayersOpen: s,
      drawToolbarOpen: o,
      setLang: l,
      setLayersOpen: u,
      setMyLayersTabOpen: f,
      setThemeGridOpen: c,
      setRemoteLayersOpen: h,
      setMapId: d,
      openStyleEditorPanel: p,
      closeStyleEditorPanel: m,
      setDrawToolbarOpen: g
    };
  },
  {}
), xu = {
  name: "blank",
  id: 0
};
function s_() {
  const t = wt(), { mapId: e } = He(t), r = os(), n = vt(), i = Yr(), s = pe(() => {
    var c;
    if (!e.value) {
      const h = (c = Zt().theme) == null ? void 0 : c.name;
      if (h)
        return Vn().bg_layer_theme_defaults[h] || l();
    }
    return l();
  });
  function a(c) {
    const h = r.findBgLayerById(c);
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
      i.handleExclusionLayers(c), n.setBgLayer(i.initLayer(c));
    } else
      n.setBgLayer(null);
  }
  function l() {
    var c;
    return ((c = f().find((h) => h.is_default)) == null ? void 0 : c.id) || xu.id;
  }
  function u() {
    return xu.id;
  }
  function f() {
    return Vn().bg_layers;
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
const sk = ["title"], ak = /* @__PURE__ */ fe({
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
    const { t: e } = Xe(), r = t, n = pe(() => {
      const s = e(r.bgTitle), a = r.bgTitle.length > 0, o = `${e("Background layer:")} ${e(r.bgName)}`;
      return `${s}${a ? " - " : ""}${o}`;
    }), i = pe(
      () => `h-full w-full rounded-sm lux-bg-sel-icon
        lux-bg-sel-${r.bgName}
        bg-${r.bgName}_sm
        md:bg-${r.bgName}
        hd:bg-${r.bgName}_sm_hi
        hd_md:bg-${r.bgName}_hi`
    );
    return (s, a) => (P(), V("button", {
      title: n.value,
      class: ke(i.value)
    }, null, 10, sk));
  }
}), eg = /* @__PURE__ */ he(ak, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/background-selector/background-selector-item.vue"]]), ok = {
  key: 0,
  class: "flex flex-row-reverse"
}, lk = /* @__PURE__ */ fe({
  __name: "background-selector",
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const { t: e } = Xe(), r = s_(), n = vt(), i = Zt(), { bgLayer: s, is3dMesh: a } = He(n), l = be(t.isOpen), u = be([]), f = pe(
      () => {
        var p, m;
        return (m = (p = s.value) == null ? void 0 : p.id) != null ? m : r.getNullId();
      }
    ), c = pe(
      () => {
        var p, m;
        return (m = (p = u.value) == null ? void 0 : p.find((g) => g.id === f.value)) == null ? void 0 : m.name;
      }
    );
    tt(
      () => i.bgLayers,
      (p) => {
        u.value = Vn().bg_layers.map(
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
    ), tt(
      () => n.bgLayer,
      (p, m) => {
        const g = n.layers;
        m === void 0 && p === null && (g == null ? void 0 : g.length) === 0 && (r.setBgLayer(r.defaultSelectedBgId.value), p === null && fu().addNotification(
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
    return (p, m) => x(a) ? F("v-if", !0) : (P(), V("div", ok, [
      L("div", {
        class: ke(["lux-bg-sel border border-black", l.value === !0 ? "hidden" : "block"])
      }, [
        ee(eg, {
          "aria-expanded": l.value,
          "bg-title": "Select BG layer",
          "bg-name": c.value,
          onClick: d
        }, null, 8, ["aria-expanded", "bg-name"])
      ], 2),
      L("div", {
        class: ke(l.value === !0 ? "flex flex-col md:flex-row" : "hidden")
      }, [
        (P(!0), V(Ue, null, Pr(u.value, (g) => (P(), V("div", {
          key: g.id,
          class: ke([
            "lux-bg-sel hover:bg-cyan-600",
            g.id === f.value ? "border-red-500 border-2" : "border-black border"
          ])
        }, [
          ee(eg, {
            "bg-name": g.name,
            onClick: (y) => h(g)
          }, null, 8, ["bg-name", "onClick"])
        ], 2))), 128))
      ], 2)
    ]));
  }
}), uk = /* @__PURE__ */ he(lk, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/background-selector/background-selector.vue"]]), ck = /* @__PURE__ */ L("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1), fk = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, hk = { class: "relative flex flex-row justify-center p-4 border-b-[1px]" }, dk = { class: "text-xl" }, pk = /* @__PURE__ */ L("span", { "aria-hidden": "true" }, "\xD7", -1), mk = [
  pk
], gk = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, yk = { class: "flex flex-row justify-end" }, vk = /* @__PURE__ */ fe({
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
    const { t: e } = Xe(), r = be();
    vr(() => {
      r.value.focus();
    });
    const n = nt(!0);
    function i() {
      n.value = !1;
    }
    return (s, a) => (P(), Fe(Wy, { to: "body" }, [
      F(" backdrop "),
      ck,
      F(" modal "),
      ee(Yu, {
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
          n.value ? (P(), V("div", {
            key: 0,
            role: "dialog",
            ref_key: "modal",
            ref: r,
            tabindex: "0",
            onKeydown: a[2] || (a[2] = on(an((o) => i(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            L("div", fk, [
              F(" header (title)"),
              L("div", hk, [
                L("h4", dk, ae(t.title), 1),
                L("button", {
                  type: "button",
                  class: "absolute right-2 top-1 text-slate-400 text-[24px]",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: a[0] || (a[0] = (o) => i())
                }, [...mk])
              ]),
              F(" content slot "),
              L("div", {
                class: ke(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                Ny(s.$slots, "content")
              ], 2),
              F(" footer (optional)"),
              t.footer ? (P(), V("div", gk, [
                L("div", yk, [
                  L("button", {
                    type: "button",
                    class: "lux-btn",
                    "data-dismiss": "modal",
                    onClick: a[1] || (a[1] = (o) => i())
                  }, ae(x(e)("Close", { ns: "client" })), 1)
                ])
              ])) : F("v-if", !0)
            ])
          ], 544)) : F("v-if", !0)
        ]),
        _: 3
      })
    ]));
  }
}), a_ = /* @__PURE__ */ he(vk, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/modal-dialog.vue"]]), Kh = ys(
  "metadata",
  () => {
    const t = be();
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
), _k = ["aria-expanded"], bk = { class: "leading-6" }, Ek = /* @__PURE__ */ fe({
  __name: "expandable-panel",
  props: {
    expanded: { type: Boolean, required: !0 },
    title: { type: String, required: !0 }
  },
  emits: ["togglePanel"],
  setup(t) {
    return (e, r) => (P(), V(Ue, null, [
      L("button", {
        onClick: r[0] || (r[0] = (n) => e.$emit("togglePanel")),
        class: "group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary",
        "aria-expanded": e.expanded
      }, [
        L("div", {
          class: ke(["grow", e.expanded ? "text-white" : "text-secondary"])
        }, ae(e.title), 3),
        L("div", bk, [
          L("div", {
            class: ke(["fa fa-sharp fa-solid group-hover:text-white text-primary", e.expanded ? "fa-caret-up" : "fa-caret-down"])
          }, null, 2)
        ])
      ], 8, _k),
      L("div", {
        class: ke(e.expanded ? "" : "hidden")
      }, [
        Ny(e.$slots, "default")
      ], 2)
    ], 64));
  }
}), Gl = /* @__PURE__ */ he(Ek, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/expandable-panel.vue"]]), Sk = {
  class: "mb-px",
  key: "node.id"
}, wk = ["data-cy"], xk = ["aria-expanded", "data-cy"], Ok = { class: "grow" }, Mk = { class: "leading-6" }, Tk = {
  key: 1,
  class: "flex text-tertiary pr-2"
}, Nk = ["data-cy"], Ck = { class: "ml-1 hover:underline" }, Lk = /* @__PURE__ */ fe({
  __name: "layer-tree-node",
  props: {
    node: { type: Object, required: !0 }
  },
  emits: ["toggleLayer", "toggleParent"],
  setup(t, { emit: e }) {
    const r = t, n = e, { t: i } = Xe(), { setMetadataId: s } = Kh(), a = !!r.node.children, o = r.node.depth === 0, l = r.node.depth >= 10, u = pe(() => i(r.node.name, { ns: "client" }));
    function f(h) {
      n("toggleLayer", h);
    }
    function c(h) {
      n("toggleParent", h);
    }
    return (h, d) => {
      const p = j1("layer-tree-node", !0);
      return a ? (P(), V("div", Sk, [
        F("    First level parents"),
        h.node.depth === 1 ? (P(), V("div", {
          key: 0,
          "data-cy": `parentLayerLabel-${h.node.id}`
        }, [
          ee(Gl, {
            title: u.value,
            expanded: h.node.expanded,
            onTogglePanel: d[0] || (d[0] = (m) => c(h.node))
          }, null, 8, ["title", "expanded"])
        ], 8, wk)) : h.node.depth > 1 && !l ? (P(), V(Ue, { key: 1 }, [
          F("    Other parents (with custom panel style)"),
          L("button", {
            class: ke(["w-full text-left flex px-2 py-1.5 pl-2", h.node.expanded ? "text-tertiary" : "bg-white text-primary"]),
            "aria-expanded": h.node.expanded,
            onClick: d[1] || (d[1] = (m) => c(h.node)),
            "data-cy": `parentLayerLabel-${h.node.id}`
          }, [
            L("div", Ok, ae(u.value), 1),
            L("div", Mk, [
              L("div", {
                class: ke(["fa-sharp fa-solid", h.node.expanded ? "fa-minus" : "fa-plus"])
              }, null, 2)
            ])
          ], 10, xk)
        ], 2112)) : F("v-if", !0),
        F("    Children"),
        l ? F("v-if", !0) : (P(), V("div", {
          key: 2,
          class: ke(["bg-secondary", [
            { "pl-2": h.node.depth > 1 },
            { "lux-collapse": !o },
            { expanded: !o && h.node.expanded }
          ]])
        }, [
          (P(!0), V(Ue, null, Pr(h.node.children, (m) => (P(), Fe(p, {
            key: m.id,
            node: m,
            onToggleParent: d[2] || (d[2] = (g) => c(g)),
            onToggleLayer: d[3] || (d[3] = (g) => f(g))
          }, null, 8, ["node"]))), 128))
        ], 2))
      ])) : (P(), V("div", Tk, [
        L("button", {
          class: "self-start before:text-[.85rem] before:transform before:translate-y-[.1rem] before:inline-block before:content-['\\f129'] fa-solid fa-fw fa-fh fa-info",
          onClick: d[4] || (d[4] = (m) => x(s)(h.node.id))
        }),
        L("button", {
          class: ke(["w-full text-left", { "font-bold": h.node.checked }]),
          onClick: d[5] || (d[5] = (m) => f(h.node)),
          "data-cy": `layerLabel-${h.node.id}`
        }, [
          L("i", {
            class: ke(["fa-solid", h.node.checked ? "fa-check-square" : "fa-square"])
          }, null, 2),
          L("span", Ck, ae(u.value), 1)
        ], 10, Nk)
      ]));
    };
  }
}), Qf = /* @__PURE__ */ he(Lk, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-tree/layer-tree-node.vue"]]);
class Pk {
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
const Js = new Pk();
var Lr = /* @__PURE__ */ ((t) => (t.WMS = "WMS", t.WMTS = "WMTS", t))(Lr || {});
function kk(t, e) {
  var r, n;
  return t.children && !e.children || ((r = e.children) == null ? void 0 : r.length) === 0 ? 1 : e.children && !t.children || ((n = t.children) == null ? void 0 : n.length) === 0 ? -1 : 0;
}
function o_(t, e, r = 0) {
  const { name: n = "", type: i = Lr.WMS, children: s } = t, a = `${i}||${e}||${n}`.split("-").join("%2D"), o = vt();
  return {
    id: a,
    name: n,
    depth: r,
    children: s == null ? void 0 : s.sort(kk).map((l) => o_(l, e, r + 1)),
    checked: o.hasLayer(a),
    expanded: !1
  };
}
function Ak(t) {
  const e = decodeURIComponent(t), [r, n, i] = e.split("||");
  return l_({
    id: e,
    url: ia.getProxyfiedUrl(n),
    remoteLayer: { name: i, type: r }
  });
}
function l_({
  id: t,
  url: e,
  remoteLayer: r
}) {
  const { name: n = "", type: i = Lr.WMS } = r;
  return {
    id: t,
    name: n,
    layers: n,
    url: e,
    type: i,
    imageType: Hv.PNG
  };
}
class Gc {
  constructor(e, r = 0, n = !1) {
    this.message = e, this.httpStatus = r, this.isCrossOriginRelated = n;
  }
}
let Dk = 0;
function Ik() {
  return Dk++;
}
function Rk(t, e, r) {
  return new Promise((n, i) => {
    const s = Ik(), a = {
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
function Zh(t, e, r) {
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
let Uc;
function $k() {
  return Uc || (Uc = new Worker(URL.createObjectURL(new Blob([`function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var o={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var S={};S[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(C([])));w&&w!==r&&o.call(w,a)&&(S=w);var O=b.prototype=m.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(P.prototype),P.prototype[c]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,u,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(o);var i=o.exports;function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,e,n){var o="undefined"!=typeof WorkerGlobalScope,a=function(){var a=r(i.mark((function r(a){var u,s,f,l,h,p;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.detail,s=a.data,(f=u||s).taskName!==t){r.next=14;break}return r.prev=3,r.next=6,n(f.params);case 6:l=r.sent,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(3),h=r.t0;case 12:p=c(c({taskName:t,requestId:f.requestId},l&&{response:l}),h&&{error:h}),o?e.postMessage(p):e.dispatchEvent(new CustomEvent("ogc-client.response",{detail:p}));case 14:case"end":return r.stop()}}),r,null,[[3,9]])})));return function(t){return a.apply(this,arguments)}}();o?e.addEventListener("message",a):e.addEventListener("ogc-client.request",a)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function v(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},m.apply(null,arguments)}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},g(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),t}var E=function(){function t(e){l(this,t),this.chars=f(e),this.charCount=this.chars.length,this.charIndex=0,this.charsToBytes=new Array(this.charCount),this.multiByteMode=!1,this.string=e;var r=this.chars,n=this.charCount,o=this.charsToBytes;if(n===e.length)for(var i=0;i<n;++i)o[i]=i;else{for(var a=0,c=0;c<n;++c)o[c]=a,a+=r[c].length;this.multiByteMode=!0}}return S(t,[{key:"isEnd",get:function(){return this.charIndex>=this.charCount}},{key:"_charLength",value:function(t){var e=t.length;return e<2||!this.multiByteMode?e:t.replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g,"_").length}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.charIndex=Math.min(this.charCount,this.charIndex+t)}},{key:"consume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.peek(t);return this.advance(t),e}},{key:"consumeMatch",value:function(t){if(!t.sticky)throw new Error('\`regex\` must have a sticky flag ("y")');t.lastIndex=this.charsToBytes[this.charIndex];var e=t.exec(this.string);if(null===e)return"";var r=e[0];return this.advance(this._charLength(r)),r}},{key:"consumeMatchFn",value:function(t){for(var e=this.charIndex;!this.isEnd&&t(this.peek());)this.advance();return this.charIndex>e?this.string.slice(this.charsToBytes[e],this.charsToBytes[this.charIndex]):""}},{key:"consumeString",value:function(t){if(this.consumeStringFast(t))return t;if(!this.multiByteMode)return"";var e=t.length,r=this._charLength(t);return r!==e&&t===this.peek(r)?(this.advance(r),t):""}},{key:"consumeStringFast",value:function(t){if(this.peek()===t[0]){var e=t.length;if(1===e)return this.advance(),t;if(this.peek(e)===t)return this.advance(e),t}return""}},{key:"consumeUntilMatch",value:function(t){if(!t.global)throw new Error('\`regex\` must have a global flag ("g")');var e=this.charsToBytes[this.charIndex];t.lastIndex=e;var r=t.exec(this.string);if(null===r||r.index===e)return"";var n=this.string.slice(e,r.index);return this.advance(this._charLength(n)),n}},{key:"consumeUntilString",value:function(t){var e=this.charIndex,r=this.charsToBytes,n=this.string,o=r[e],i=n.indexOf(t,o);if(i<=0)return"";var a=n.slice(o,i);return this.advance(this._charLength(a)),a}},{key:"peek",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.charIndex>=this.charCount)return"";if(1===t)return this.chars[this.charIndex];var e=this.charsToBytes,r=this.charIndex;return this.string.slice(e[r],e[r+t])}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.charIndex=t>=0?Math.min(this.charCount,t):Math.max(0,this.charIndex+t)}}]),t}(),w=E,O={},x=Object.freeze(Object.assign(Object.create(null),{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}));function P(t){if(k(t))return!0;var e=T(t);return 45===e||46===e||e>=48&&e<=57||183===e||e>=768&&e<=879||e>=8255&&e<=8256}function k(t){var e=T(t);return 58===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function R(t){var e=T(t);return 9===e||10===e||13===e||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function T(t){return t.codePointAt(0)||-1}O.predefinedEntities=x,O.isNameChar=P,O.isNameStartChar=k,O.isNotXmlChar=function(t){return!R(t)},O.isReferenceChar=function(t){return"#"===t||P(t)},O.isWhitespace=function(t){var e=T(t);return 32===e||9===e||10===e||13===e},O.isXmlChar=R;var j=function(){function t(){l(this,t),this.parent=null}return S(t,[{key:"document",get:function(){return this.parent?this.parent.document:null}},{key:"isRootNode",get:function(){return!!this.parent&&this.parent===this.document}},{key:"preserveWhitespace",get:function(){return Boolean(this.parent&&this.parent.preserveWhitespace)}},{key:"type",get:function(){return""}},{key:"toJSON",value:function(){var t={type:this.type};return this.isRootNode&&(t.isRootNode=!0),this.preserveWhitespace&&(t.preserveWhitespace=!0),t}}]),t}();j.TYPE_CDATA="cdata",j.TYPE_COMMENT="comment",j.TYPE_DOCUMENT="document",j.TYPE_ELEMENT="element",j.TYPE_PROCESSING_INSTRUCTION="pi",j.TYPE_TEXT="text";var C=j;function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var N=C,A=function(t){p(r,N);var e=G(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).text=n,t}return S(r,[{key:"type",get:function(){return N.TYPE_TEXT}},{key:"toJSON",value:function(){return Object.assign(N.prototype.toJSON.call(this),{text:this.text})}}]),r}(),F=A;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var L=C,M=F,B=function(t){p(r,M);var e=I(r);function r(){return l(this,r),e.apply(this,arguments)}return S(r,[{key:"type",get:function(){return L.TYPE_CDATA}}]),r}(),_=B;function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var D=C,W=function(t){p(r,D);var e=U(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l(this,r),(t=e.call(this)).content=n,t}return S(r,[{key:"type",get:function(){return D.TYPE_COMMENT}},{key:"toJSON",value:function(){return Object.assign(D.prototype.toJSON.call(this),{content:this.content})}}]),r}(),X=W;function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var q=C,J=function(t){p(r,q);var e=Y(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(this,r),(n=e.call(this)).name=t,n.attributes=o,n.children=i,n}return S(r,[{key:"isEmpty",get:function(){return 0===this.children.length}},{key:"preserveWhitespace",get:function(){for(var t=this;t instanceof r;){if("xml:space"in t.attributes)return"preserve"===t.attributes["xml:space"];t=t.parent}return!1}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return q.TYPE_ELEMENT}},{key:"toJSON",value:function(){return Object.assign(q.prototype.toJSON.call(this),{name:this.name,attributes:this.attributes,children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),V=J;function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var K=V,z=C,H=function(t){p(r,z);var e=$(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l(this,r),(t=e.call(this)).children=n,t}return S(r,[{key:"document",get:function(){return this}},{key:"root",get:function(){return this.children.find((function(t){return t instanceof K}))||null}},{key:"text",get:function(){return this.children.map((function(t){return"text"in t?t.text:""})).join("")}},{key:"type",get:function(){return z.TYPE_DOCUMENT}},{key:"toJSON",value:function(){return Object.assign(z.prototype.toJSON.call(this),{children:this.children.map((function(t){return t.toJSON()}))})}}]),r}(),Q=H;function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var tt=C,et=function(t){p(r,tt);var e=Z(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l(this,r),(n=e.call(this)).name=t,n.content=o,n}return S(r,[{key:"type",get:function(){return tt.TYPE_PROCESSING_INSTRUCTION}},{key:"toJSON",value:function(){return Object.assign(tt.prototype.toJSON.call(this),{name:this.name,content:this.content})}}]),r}(),rt=et;function nt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var it=w,at=O,ct=_,ut=X,st=Q,ft=V,lt=rt,ht=F,pt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(l(this,t),this.document=new st,this.currentNode=this.document,this.options=r,this.scanner=new it(vt(e)),this.consumeProlog(),this.consumeElement()||this.error("Root element is missing or invalid");this.consumeMisc(););this.scanner.isEnd||this.error("Extra content at the end of the document")}return S(t,[{key:"addNode",value:function(t){t.parent=this.currentNode,this.currentNode.children.push(t)}},{key:"addText",value:function(t){var e=this.currentNode.children;if(e.length>0){var r=e[e.length-1];if(r instanceof ht)return void(r.text+=t)}this.addNode(new ht(t))}},{key:"consumeAttributeValue",value:function(){var t,e=this.scanner,r=e.peek();if('"'!==r&&"'"!==r)return!1;e.advance();var n=!1,o="",i='"'===r?new RegExp('[^"&<]+',"y"):new RegExp("[^'&<]+","y");t:for(;!e.isEnd;){switch((t=e.consumeMatch(i))&&(this.validateChars(t),o+=t.replace(/[\\t\\r\\n]/g," ")),e.peek()){case r:n=!0;break t;case"&":o+=this.consumeReference();continue;case"<":this.error("Unescaped \`<\` is not allowed in an attribute value");break;case"":this.error("Unclosed attribute")}}return n||this.error("Unclosed attribute"),e.advance(),o}},{key:"consumeCdataSection",value:function(){var t=this.scanner;if(!t.consumeStringFast("<![CDATA["))return!1;var e=t.consumeUntilString("]]>");return this.validateChars(e),t.consumeStringFast("]]>")||this.error("Unclosed CDATA section"),this.options.preserveCdata?this.addNode(new ct(e)):this.addText(e),!0}},{key:"consumeCharData",value:function(){var t=this.scanner,e=t.consumeUntilMatch(/<|&|]]>/g);return!!e&&(this.validateChars(e),"]"===t.peek()&&"]]>"===t.peek(3)&&this.error("Element content may not contain the CDATA section close delimiter \`]]>\`"),this.addText(e),!0)}},{key:"consumeComment",value:function(){var t=this.scanner;if(!t.consumeStringFast("\\x3c!--"))return!1;var e=t.consumeUntilString("--");return this.validateChars(e),t.consumeStringFast("--\\x3e")||("--"===t.peek(2)?this.error("The string \`--\` isn't allowed inside a comment"):this.error("Unclosed comment")),this.options.preserveComments&&this.addNode(new ut(e.trim())),!0}},{key:"consumeContentReference",value:function(){var t=this.consumeReference();return!!t&&(this.addText(t),!0)}},{key:"consumeDoctypeDeclaration",value:function(){var t=this.scanner;return!(!t.consumeStringFast("<!DOCTYPE")||!this.consumeWhitespace())&&(t.consumeMatch(new RegExp("[^[>]+","y")),t.consumeMatch(new RegExp("\\\\[[\\\\s\\\\S]+?\\\\][\\\\x20\\\\t\\\\r\\\\n]*>","y"))||t.consumeStringFast(">")||this.error("Unclosed doctype declaration"),!0)}},{key:"consumeElement",value:function(){var t=this.scanner,e=t.charIndex;if("<"!==t.peek())return!1;t.advance();var r=this.consumeName();if(!r)return t.reset(e),!1;for(var n=Object.create(null);this.consumeWhitespace();){var o=this.consumeName();if(o){var i=this.consumeEqual()&&this.consumeAttributeValue();!1===i&&this.error("Attribute value expected"),o in n&&this.error("Duplicate attribute: ".concat(o)),"xml:space"===o&&"default"!==i&&"preserve"!==i&&this.error('Value of the \`xml:space\` attribute must be "default" or "preserve"'),n[o]=i}}if(this.options.sortAttributes){for(var a=Object.keys(n).sort(),c=Object.create(null),u=0;u<a.length;++u){var s=a[u];c[s]=n[s]}n=c}var f=Boolean(t.consumeStringFast("/>")),l=new ft(r,n);if(l.parent=this.currentNode,!f){for(t.consumeStringFast(">")||this.error("Unclosed start tag for element \`".concat(r,"\`")),this.currentNode=l,this.consumeCharData();this.consumeElement()||this.consumeContentReference()||this.consumeCdataSection()||this.consumeProcessingInstruction()||this.consumeComment();)this.consumeCharData();var h,p=t.charIndex;t.consumeStringFast("</")&&(h=this.consumeName())&&h===r||(t.reset(p),this.error("Missing end tag for element ".concat(r))),this.consumeWhitespace(),t.consumeStringFast(">")||this.error("Unclosed end tag for element ".concat(r)),this.currentNode=l.parent}return this.addNode(l),!0}},{key:"consumeEqual",value:function(){return this.consumeWhitespace(),!!this.scanner.consumeStringFast("=")&&(this.consumeWhitespace(),!0)}},{key:"consumeMisc",value:function(){return this.consumeComment()||this.consumeProcessingInstruction()||this.consumeWhitespace()}},{key:"consumeName",value:function(){return at.isNameStartChar(this.scanner.peek())?this.scanner.consumeMatchFn(at.isNameChar):""}},{key:"consumeProcessingInstruction",value:function(){var t=this.scanner,e=t.charIndex;if(!t.consumeStringFast("<?"))return!1;var r=this.consumeName();if(r?"xml"===r.toLowerCase()&&(t.reset(e),this.error("XML declaration isn't allowed here")):this.error("Invalid processing instruction"),!this.consumeWhitespace()){if(t.consumeStringFast("?>"))return this.addNode(new lt(r)),!0;this.error("Whitespace is required after a processing instruction name")}var n=t.consumeUntilString("?>");return this.validateChars(n),t.consumeStringFast("?>")||this.error("Unterminated processing instruction"),this.addNode(new lt(r,n)),!0}},{key:"consumeProlog",value:function(){var t=this.scanner,e=t.charIndex;for(this.consumeXmlDeclaration();this.consumeMisc(););if(this.consumeDoctypeDeclaration())for(;this.consumeMisc(););return e<t.charIndex}},{key:"consumeReference",value:function(){var t=this.scanner;if("&"!==t.peek())return!1;t.advance();var e,r=t.consumeMatchFn(at.isReferenceChar);if(";"!==t.consume()&&this.error("Unterminated reference (a reference must end with \`;\`)"),"#"===r[0]){var o="x"===r[1]?parseInt(r.slice(2),16):parseInt(r.slice(1),10);isNaN(o)&&this.error("Invalid character reference"),e=String.fromCodePoint(o),at.isXmlChar(e)||this.error("Character reference resolves to an invalid character")}else if(void 0===(e=at.predefinedEntities[r])){var i=this.options,a=i.ignoreUndefinedEntities,c=i.resolveUndefinedEntity,u="&".concat(r,";");if(c){var s=c(u);if(null!=s){var f=n(s);if("string"!==f)throw new TypeError("\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ".concat(f));return s}}if(a)return u;t.reset(-u.length),this.error("Named entity isn't defined: ".concat(u))}return e}},{key:"consumeSystemLiteral",value:function(){var t=this.scanner,e=t.consumeStringFast('"')||t.consumeStringFast("'");if(!e)return!1;var r=t.consumeUntilString(e);return this.validateChars(r),t.consumeStringFast(e)||this.error("Missing end quote"),r}},{key:"consumeWhitespace",value:function(){return Boolean(this.scanner.consumeMatchFn(at.isWhitespace))}},{key:"consumeXmlDeclaration",value:function(){var t=this.scanner;if(!t.consumeStringFast("<?xml"))return!1;this.consumeWhitespace()||this.error("Invalid XML declaration");var e=Boolean(t.consumeStringFast("version"))&&this.consumeEqual()&&this.consumeSystemLiteral();if(!1===e?this.error("XML version is missing or invalid"):/^1\\.[0-9]+$/.test(e)||this.error("Invalid character in version number"),this.consumeWhitespace()){Boolean(t.consumeStringFast("encoding"))&&this.consumeEqual()&&this.consumeSystemLiteral()&&this.consumeWhitespace();var r=Boolean(t.consumeStringFast("standalone"))&&this.consumeEqual()&&this.consumeSystemLiteral();r&&("yes"!==r&&"no"!==r&&this.error('Only "yes" and "no" are permitted as values of \`standalone\`'),this.consumeWhitespace())}return t.consumeStringFast("?>")||this.error("Invalid or unclosed XML declaration"),!0}},{key:"error",value:function(t){for(var e=this.scanner,r=e.charIndex,n=e.string,o=1,i="",a=1,c=0;c<r;++c){var u=n[c];"\\n"===u?(o=1,i="",a+=1):(o+=1,i+=u)}var s=n.indexOf("\\n",r),f=0;(i+=-1===s?n.slice(r):n.slice(r,s)).length>50&&(o<40?i=i.slice(0,50):(f=o-20,i=i.slice(f,o+30)));var l=new Error("".concat(t," (line ").concat(a,", column ").concat(o,")\\n")+"  ".concat(i,"\\n")+" ".repeat(o-f+1)+"^\\n");throw Object.assign(l,{column:o,excerpt:i,line:a,pos:r}),l}},{key:"validateChars",value:function(t){var e,r=0,n=nt(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;at.isNotXmlChar(o)&&(this.scanner.reset(-(f(t).length-r)),this.error("Invalid character")),r+=1}}catch(t){n.e(t)}finally{n.f()}}}]),t}();function vt(t){return"\\ufeff"===t[0]&&(t=t.slice(1)),t.replace(/\\r\\n?/g,"\\n")}var dt=pt,yt=_,mt=X,gt=Q,bt=V,St=C,Et=rt,wt=F;function Ot(t,e){return new dt(t,e).document}Ot.XmlCdata=yt,Ot.XmlComment=mt,Ot.XmlDocument=gt,Ot.XmlElement=bt,Ot.XmlNode=St,Ot.XmlProcessingInstruction=Et,Ot.XmlText=wt;var xt=Ot;function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var kt=function(t){p(r,g(Error));var e=Pt(r);function r(t){return l(this,r),e.call(this,t)}return r}();function Rt(t){return t.children[0]}function Tt(t){var e=t.indexOf(":");return e>-1?t.substr(e+1):t}function jt(t){return t.name||""}function Ct(t,e,r){var n=Tt(e);return t&&Array.isArray(t.children)?t.children.reduce((function t(e,o){return Tt(jt(o))===n&&e.push(o),r&&Array.isArray(o.children)?[].concat(f(e),f(o.children.reduce(t,[]))):e}),[]):[]}function Gt(t,e,r){return Ct(t,e,r)[0]||null}function Nt(t){return t&&Array.isArray(t.children)?f(t.children.filter((function(t){return"XmlElement"===t.constructor.name}))):[]}function At(t){var e=t&&Array.isArray(t.children)?t.children.find((function(t){return"text"===t.type})):null;return e?e.text:""}function Ft(t,e){return t&&t.attributes[e]||""}var It=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(this,t),this.message=e,this.httpStatus=r,this.isCrossOriginRelated=n};function Lt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Bt=["utf-8","utf-16","iso-8859-1"];function _t(t,e){var r,n=e?function(t){var e=/charset=([^;]+)/.exec(t);return e?e[1]:null}(e):null,o=Lt(n?[n].concat(Bt):Bt);try{for(o.s();!(r=o.n()).done;){var i=r.value;try{return new TextDecoder(i,{fatal:!0}).decode(t)}catch(t){}}}catch(t){o.e(t)}finally{o.f()}return console.warn("XML document encoding could not be determined, falling back to ".concat("utf-8",".")),new TextDecoder("utf-8").decode(t)}function Ut(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return Dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Wt=new Map;function Xt(t){return function(t){if(Wt.has(t))return Wt.get(t);var e=fetch(t);return e.finally((function(){return Wt.delete(t)})),Wt.set(t,e),e}(t).catch((function(){return fetch(t,{method:"HEAD",mode:"no-cors"}).catch((function(t){throw new It("Fetching the document failed either due to network errors or unreachable host, error is: ".concat(t.message),0,!1)})).then((function(){throw new It("The document could not be fetched due to CORS limitations",0,!0)}))})).then(function(){var t=r(i.mark((function t(e){var r,n,o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=5;break}return t.next=3,e.text();case 3:throw r=t.sent,new It("Received an error with code ".concat(e.status,": ").concat(r),e.status,!1);case 5:return t.next=7,e.arrayBuffer();case 7:return n=t.sent,o=e.headers.get("Content-Type"),t.abrupt("return",_t(n,o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return function(t){var e=null;try{e=xt(t)}catch(t){throw new kt(t.message)}return e}(t)}))}function Yt(t,e){var r=t.match(/(https?%3A%2F%2F[^/]+)$/);if(r){var n=r[1],o=Yt(decodeURIComponent(n),e);return t.replace(n,encodeURIComponent(o))}var i,a=new URL(t),c=Object.keys(e),u=c.map((function(t){return t.toLowerCase()})),s=[],f=Ut(a.searchParams.keys());try{for(f.s();!(i=f.n()).done;){var l=i.value;u.indexOf(l.toLowerCase())>-1&&s.push(l)}}catch(t){f.e(t)}finally{f.f()}return s.map((function(t){return a.searchParams.delete(t)})),c.forEach((function(t){return a.searchParams.set(t,!0===e[t]?"":e[t])})),a.toString()}var qt=["EPSG:4046","EPSG:4075","EPSG:4120","EPSG:4122","EPSG:4124","EPSG:4126","EPSG:4149","EPSG:4151","EPSG:4153","EPSG:4155","EPSG:4157","EPSG:4159","EPSG:4161","EPSG:4163","EPSG:4165","EPSG:4167","EPSG:4169","EPSG:4171","EPSG:4173","EPSG:4175","EPSG:4178","EPSG:4180","EPSG:4182","EPSG:4184","EPSG:4188","EPSG:4190","EPSG:4191","EPSG:4196","EPSG:4198","EPSG:4202","EPSG:4210","EPSG:4211","EPSG:4214","EPSG:4226","EPSG:4229","EPSG:4231","EPSG:4233","EPSG:4236","EPSG:4238","EPSG:4240","EPSG:4242","EPSG:4244","EPSG:4246","EPSG:4248","EPSG:4250","EPSG:4252","EPSG:4255","EPSG:4258","EPSG:4261","EPSG:4264","EPSG:4267","EPSG:4270","EPSG:4273","EPSG:4276","EPSG:4279","EPSG:4281","EPSG:4284","EPSG:4286","EPSG:4288","EPSG:4292","EPSG:4295","EPSG:4297","EPSG:4299","EPSG:4302","EPSG:4324","EPSG:4326"];function Jt(t){return qt.indexOf(Vt(t))>-1}function Vt(t){if(/^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase())){var e=/([0-9]+)$/.exec(t)[1];return"EPSG:".concat(e)}return t}function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$t(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zt(t){return Rt(t).attributes.version}function Ht(t){var e=zt(t);return Ct(Gt(Rt(t),"Capability"),"Layer").map((function(t){return Qt(t,e)}))}function Qt(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a="1.3.0"===r?"CRS":"SRS",c=Ct(e,a).map(At),u=c.length>0?c:n,s=Ct(e,"Style").map(Zt),f=s.length>0?s:o;function l(t){return(Jt(Ft(t,a))&&"1.3.0"===r?["miny","minx","maxy","maxx"]:["minx","miny","maxx","maxy"]).map((function(e){return Ft(t,e)}))}var h=Gt(e,"Attribution"),p=null!==h?te(h):i,v=Ct(e,"Layer").map((function(t){return Qt(t,r,u,f,p)}));return Kt({name:At(Gt(e,"Name")),title:At(Gt(e,"Title")),abstract:At(Gt(e,"Abstract")),availableCrs:u,styles:f,attribution:p,boundingBoxes:Ct(e,"BoundingBox").reduce((function(e,r){return Kt(Kt({},e),{},t({},Ft(r,a),l(r)))}),{})},v.length&&{children:v})}function Zt(t){var e=Ft(Gt(Gt(t,"LegendURL"),"OnlineResource"),"xlink:href");return Kt({name:At(Gt(t,"Name")),title:At(Gt(t,"Title"))},e&&{legendUrl:e})}function te(t){var e=Ft(Gt(Gt(t,"LogoURL"),"OnlineResource"),"xlink:href"),r=Ft(Gt(t,"OnlineResource"),"xlink:href"),n=At(Gt(t,"Title"));return Kt(Kt(Kt({},n&&{title:n}),r&&{url:r}),e&&{logoUrl:e})}function ee(t){return Rt(t).attributes.version}function re(t){var e;if(ee(t).startsWith("1.0")){var r=Gt(Gt(Gt(Rt(t),"Capability"),"Request"),"GetFeature");e=Nt(Gt(r,"ResultFormat")).map(jt)}else{var n=Ct(Gt(Rt(t),"OperationsMetadata"),"Operation").find((function(t){return"GetFeature"===Ft(t,"name")})),o=Ct(n,"Parameter").find((function(t){return"outputFormat"===Ft(t,"name")}));e=Ct(o,"Value",!0).map(At)}return e}function ne(t){var e=ee(t),r=re(t);return Ct(Gt(Rt(t),"FeatureTypeList"),"FeatureType").map((function(t){return function(t,e,r){var n=e.startsWith("2.")?"CRS":"SRS",o=e.startsWith("1.0")?"SRS":"Default".concat(n);function i(){var e=Gt(t,"LatLongBoundingBox");return["minx","miny","maxx","maxy"].map((function(t){return Ft(e,t)})).map(parseFloat)}function a(){var e=Gt(t,"WGS84BoundingBox");return["LowerCorner","UpperCorner"].map((function(t){return Gt(e,t)})).map((function(t){return At(t).split(" ")})).reduce((function(t,e){return[].concat(f(t),f(e))})).map(parseFloat)}var c=e.startsWith("1.0")?[]:Ct(t,"Other".concat(n)).map(At).map(Vt),u=e.startsWith("1.0")?[]:Ct(Gt(t,"OutputFormats"),"Format").map(At);return{name:At(Gt(t,"Name")),title:At(Gt(t,"Title")),abstract:At(Gt(t,"Abstract")),defaultCrs:Vt(At(Gt(t,o))),otherCrs:c,outputFormats:u.length>0?u:r,latLonBoundingBox:e.startsWith("1.0")?i():a()}}(t,e,r)}))}function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,r,n){var o,i=Rt(e);if(n.startsWith("2.0"))o=Ct(i,"member").map((function(t){return Nt(t)[0]}));else{var a=Gt(i,"featureMembers");o=a?Nt(a):Ct(i,"featureMember").map((function(t){return Nt(t)[0]}))}var c="1.0.0"===n?"fid":"gml:id";function u(e){return Nt(e).filter((function(t){return Tt(jt(t))in r.properties})).reduce((function(e,n){var o=Tt(jt(n));return ie(ie({},e),{},t({},o,function(t,e){switch(r.properties[t]){case"integer":return parseInt(e);case"float":return parseFloat(e);case"boolean":return"true"===e;default:return e}}(o,At(n))))}),{})}return o.map((function(t){return{id:Ft(t,c),properties:u(t)}}))}function ce(e,r,n,o,i,a,c,u,s,f){var l="2.0.0"===r?"COUNT":"MAXFEATURES",h=t({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:r},"2.0.0"===r?"TYPENAMES":"TYPENAME",n);if(void 0!==o&&(h.OUTPUTFORMAT=o),void 0!==a&&(h.PROPERTYNAME=a.join(",")),c?(h.RESULTTYPE="hits",h[l]="1"):void 0!==i&&(h[l]=i.toString(10)),u&&(h.SRSNAME=u),s){var p=s.join(",");h.BBOX=f?"".concat(p,",").concat(f):p}return Yt(e,h)}u("parseWmsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,r=Gt(Rt(e),"Service"),n=Ct(Gt(r,"KeywordList"),"Keyword").map(At).filter((function(t,e,r){return r.indexOf(t)===e})),{title:At(Gt(r,"Title")),name:At(Gt(r,"Name")),abstract:At(Gt(r,"Abstract")),fees:At(Gt(r,"Fees")),constraints:At(Gt(r,"AccessConstraints")),keywords:n}),layers:Ht(t),version:zt(t)};var e,r,n}))})),u("parseWfsCapabilities",self,(function(t){return Xt(t.url).then((function(t){return{info:(e=t,n=ee(e),o=n.startsWith("1.0")?"Service":"ServiceIdentification",i=n.startsWith("1.0")?"Name":"ServiceType",a=Gt(Rt(e),o),r=n.startsWith("1.0")?At(Gt(a,"Keywords")).split(",").map((function(t){return t.trim()})):Ct(Gt(a,"Keywords"),"Keyword").map(At),{title:At(Gt(a,"Title")),name:At(Gt(a,i)),abstract:At(Gt(a,"Abstract")),fees:At(Gt(a,"Fees")),constraints:At(Gt(a,"AccessConstraints")),keywords:r,outputFormats:re(e)}),featureTypes:ne(t),version:ee(t)};var e,r,n,o,i,a}))})),u("queryWfsFeatureTypeDetails",self,(function(t){var e=t.url,r=t.serviceVersion,n=t.featureTypeFull;return Xt(ce(e,r,n.name,void 0,void 0,Object.keys(n.properties))).then((function(t){return{props:(e=ae(t,n,r),e.reduce((function(t,e){var r=function(r){var n=e.properties[r];r in t||(t[r]={uniqueValues:[]});var o=t[r].uniqueValues.find((function(t){return t.value===n}));o?o.count++:t[r].uniqueValues.push({value:n,count:1})};for(var n in e.properties)r(n);return t}),{}))};var e}))}));
`], { type: "application/javascript" })), {
    type: "module"
  })), Uc;
}
function Fk(t) {
  return Rk("parseWmsCapabilities", $k(), {
    url: t
  });
}
var ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ri = "";
class Vk {
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
      return ri;
    let n = r[0];
    return this.advance(this._charLength(n)), n;
  }
  consumeMatchFn(e) {
    let r = this.charIndex;
    for (; !this.isEnd && e(this.peek()); )
      this.advance();
    return this.charIndex > r ? this.string.slice(this.charsToBytes[r], this.charsToBytes[this.charIndex]) : ri;
  }
  consumeString(e) {
    if (this.consumeStringFast(e))
      return e;
    if (!this.multiByteMode)
      return ri;
    let { length: r } = e, n = this._charLength(e);
    return n !== r && e === this.peek(n) ? (this.advance(n), e) : ri;
  }
  consumeStringFast(e) {
    if (this.peek() === e[0]) {
      let { length: r } = e;
      if (r === 1)
        return this.advance(), e;
      if (this.peek(r) === e)
        return this.advance(r), e;
    }
    return ri;
  }
  consumeUntilMatch(e) {
    if (!e.global)
      throw new Error('`regex` must have a global flag ("g")');
    let r = this.charsToBytes[this.charIndex];
    e.lastIndex = r;
    let n = e.exec(this.string);
    if (n === null || n.index === r)
      return ri;
    let i = this.string.slice(r, n.index);
    return this.advance(this._charLength(i)), i;
  }
  consumeUntilString(e) {
    let { charIndex: r, charsToBytes: n, string: i } = this, s = n[r], a = i.indexOf(e, s);
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
    let { charsToBytes: r, charIndex: n } = this;
    return this.string.slice(r[n], r[n + e]);
  }
  reset(e = 0) {
    this.charIndex = e >= 0 ? Math.min(this.charCount, e) : Math.max(0, this.charIndex + e);
  }
}
var jk = Vk, Ai = {};
const Gk = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
}));
Ai.predefinedEntities = Gk;
function u_(t) {
  if (c_(t))
    return !0;
  let e = sc(t);
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 183 || e >= 768 && e <= 879 || e >= 8255 && e <= 8256;
}
Ai.isNameChar = u_;
function c_(t) {
  let e = sc(t);
  return e === 58 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 767 || e >= 880 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
Ai.isNameStartChar = c_;
function Uk(t) {
  return !f_(t);
}
Ai.isNotXmlChar = Uk;
function Bk(t) {
  return t === "#" || u_(t);
}
Ai.isReferenceChar = Bk;
function Wk(t) {
  let e = sc(t);
  return e === 32 || e === 9 || e === 10 || e === 13;
}
Ai.isWhitespace = Wk;
function f_(t) {
  let e = sc(t);
  return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
Ai.isXmlChar = f_;
function sc(t) {
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
const Bc = bs;
class qk extends Bc {
  constructor(e = "") {
    super(), this.text = e;
  }
  get type() {
    return Bc.TYPE_TEXT;
  }
  toJSON() {
    return Object.assign(Bc.prototype.toJSON.call(this), {
      text: this.text
    });
  }
}
var Jh = qk;
const Hk = bs, zk = Jh;
class Yk extends zk {
  get type() {
    return Hk.TYPE_CDATA;
  }
}
var h_ = Yk;
const Wc = bs;
class Xk extends Wc {
  constructor(e = "") {
    super(), this.content = e;
  }
  get type() {
    return Wc.TYPE_COMMENT;
  }
  toJSON() {
    return Object.assign(Wc.prototype.toJSON.call(this), {
      content: this.content
    });
  }
}
var d_ = Xk;
const qc = bs;
class Qh extends qc {
  constructor(e, r = /* @__PURE__ */ Object.create(null), n = []) {
    super(), this.name = e, this.attributes = r, this.children = n;
  }
  get isEmpty() {
    return this.children.length === 0;
  }
  get preserveWhitespace() {
    let e = this;
    for (; e instanceof Qh; ) {
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
    return qc.TYPE_ELEMENT;
  }
  toJSON() {
    return Object.assign(qc.prototype.toJSON.call(this), {
      name: this.name,
      attributes: this.attributes,
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var ed = Qh;
const Kk = ed, Hc = bs;
class Zk extends Hc {
  constructor(e = []) {
    super(), this.children = e;
  }
  get document() {
    return this;
  }
  get root() {
    return this.children.find((e) => e instanceof Kk) || null;
  }
  get text() {
    return this.children.map((e) => "text" in e ? e.text : "").join("");
  }
  get type() {
    return Hc.TYPE_DOCUMENT;
  }
  toJSON() {
    return Object.assign(Hc.prototype.toJSON.call(this), {
      children: this.children.map((e) => e.toJSON())
    });
  }
}
var p_ = Zk;
const zc = bs;
class Jk extends zc {
  constructor(e, r = "") {
    super(), this.name = e, this.content = r;
  }
  get type() {
    return zc.TYPE_PROCESSING_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(zc.prototype.toJSON.call(this), {
      name: this.name,
      content: this.content
    });
  }
}
var m_ = Jk;
const Qk = jk, Wi = Ai, eA = h_, tA = d_, rA = p_, nA = ed, tg = m_, rg = Jh, Yc = "";
class iA {
  constructor(e, r = {}) {
    for (this.document = new rA(), this.currentNode = this.document, this.options = r, this.scanner = new Qk(aA(e)), this.consumeProlog(), this.consumeElement() || this.error("Root element is missing or invalid"); this.consumeMisc(); )
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
      if (n instanceof rg) {
        n.text += e;
        return;
      }
    }
    this.addNode(new rg(e));
  }
  consumeAttributeValue() {
    let { scanner: e } = this, r = e.peek();
    if (r !== '"' && r !== "'")
      return !1;
    e.advance();
    let n, i = !1, s = Yc, a = r === '"' ? /[^"&<]+/y : /[^'&<]+/y;
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
          case Yc:
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
    return this.validateChars(r), e.consumeStringFast("]]>") || this.error("Unclosed CDATA section"), this.options.preserveCdata ? this.addNode(new eA(r)) : this.addText(r), !0;
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
    return this.validateChars(r), e.consumeStringFast("-->") || (e.peek(2) === "--" ? this.error("The string `--` isn't allowed inside a comment") : this.error("Unclosed comment")), this.options.preserveComments && this.addNode(new tA(r.trim())), !0;
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
    let s = Boolean(e.consumeStringFast("/>")), a = new nA(n, i);
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
    return Wi.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(Wi.isNameChar) : Yc;
  }
  consumeProcessingInstruction() {
    let { scanner: e } = this, r = e.charIndex;
    if (!e.consumeStringFast("<?"))
      return !1;
    let n = this.consumeName();
    if (n ? n.toLowerCase() === "xml" && (e.reset(r), this.error("XML declaration isn't allowed here")) : this.error("Invalid processing instruction"), !this.consumeWhitespace()) {
      if (e.consumeStringFast("?>"))
        return this.addNode(new tg(n)), !0;
      this.error("Whitespace is required after a processing instruction name");
    }
    let i = e.consumeUntilString("?>");
    return this.validateChars(i), e.consumeStringFast("?>") || this.error("Unterminated processing instruction"), this.addNode(new tg(n, i)), !0;
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
    let r = e.consumeMatchFn(Wi.isReferenceChar);
    e.consume() !== ";" && this.error("Unterminated reference (a reference must end with `;`)");
    let n;
    if (r[0] === "#") {
      let i = r[1] === "x" ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
      isNaN(i) && this.error("Invalid character reference"), n = String.fromCodePoint(i), Wi.isXmlChar(n) || this.error("Character reference resolves to an invalid character");
    } else if (n = Wi.predefinedEntities[r], n === void 0) {
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
    return Boolean(this.scanner.consumeMatchFn(Wi.isWhitespace));
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
      Wi.isNotXmlChar(n) && (this.scanner.reset(-([...e].length - r)), this.error("Invalid character")), r += 1;
  }
}
var sA = iA;
function aA(t) {
  return t[0] === "\uFEFF" && (t = t.slice(1)), t.replace(/\r\n?/g, `
`);
}
const oA = sA, lA = h_, uA = d_, cA = p_, fA = ed, hA = bs, dA = m_, pA = Jh;
function Di(t, e) {
  return new oA(t, e).document;
}
Di.XmlCdata = lA;
Di.XmlComment = uA;
Di.XmlDocument = cA;
Di.XmlElement = fA;
Di.XmlNode = hA;
Di.XmlProcessingInstruction = dA;
Di.XmlText = pA;
var mA = Di;
class gA extends Error {
  constructor(e) {
    super(e);
  }
}
function yA(t) {
  let e = null;
  try {
    e = mA(t);
  } catch (r) {
    throw new gA(r.message);
  }
  return e;
}
function Bn(t) {
  return t.children[0];
}
function Ou(t) {
  const e = t.indexOf(":");
  return e > -1 ? t.substr(e + 1) : t;
}
function Mu(t) {
  return t.name || "";
}
function Ht(t, e, r) {
  const n = Ou(e);
  function i(s, a) {
    return Ou(Mu(a)) === n && s.push(a), r && Array.isArray(a.children) ? [...s, ...a.children.reduce(i, [])] : s;
  }
  return t && Array.isArray(t.children) ? t.children.reduce(i, []) : [];
}
function Me(t, e, r) {
  return Ht(t, e, r)[0] || null;
}
function Pa(t) {
  return t && Array.isArray(t.children) ? [...t.children.filter((e) => e.constructor.name === "XmlElement")] : [];
}
function ze(t) {
  const e = t && Array.isArray(t.children) ? t.children.find((r) => r.type === "text") : null;
  return e ? e.text : "";
}
function gn(t, e) {
  return t && t.attributes[e] || "";
}
const ng = ["utf-8", "utf-16", "iso-8859-1"], ig = "utf-8";
function vA(t) {
  const e = /charset=([^;]+)/.exec(t);
  return e ? e[1] : null;
}
function _A(t, e) {
  const r = e ? vA(e) : null, n = r ? [r, ...ng] : ng;
  for (const i of n)
    try {
      return new TextDecoder(i, { fatal: !0 }).decode(t);
    } catch {
    }
  return console.warn(
    `XML document encoding could not be determined, falling back to ${ig}.`
  ), new TextDecoder(ig).decode(t);
}
const pl = /* @__PURE__ */ new Map();
function bA(t) {
  if (pl.has(t))
    return pl.get(t);
  const e = fetch(t);
  return e.finally(() => pl.delete(t)), pl.set(t, e), e;
}
function td(t) {
  return bA(t).catch(
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
    const r = await e.arrayBuffer(), n = e.headers.get("Content-Type");
    return _A(r, n);
  }).then((e) => yA(e));
}
function rd(t, e) {
  const r = t.match(/(https?%3A%2F%2F[^/]+)$/);
  if (r) {
    const o = r[1], l = rd(decodeURIComponent(o), e);
    return t.replace(o, encodeURIComponent(l));
  }
  const n = new URL(t), i = Object.keys(e), s = i.map((o) => o.toLowerCase()), a = [];
  for (const o of n.searchParams.keys())
    s.indexOf(o.toLowerCase()) > -1 && a.push(o);
  return a.map((o) => n.searchParams.delete(o)), i.forEach(
    (o) => n.searchParams.set(o, e[o] === !0 ? "" : e[o])
  ), n.toString();
}
let EA = 1e3 * 60 * 60;
function SA() {
  return EA;
}
const Ni = "caches" in self ? caches.open("ogc-client") : null;
async function wA(t, ...e) {
  if (!Ni)
    return;
  const r = "https://cache/" + e.join("/");
  await (await Ni).put(
    r,
    new Response(JSON.stringify(t), {
      headers: {
        "x-expiry": (Date.now() + SA()).toString(10)
      }
    })
  );
}
async function xA(...t) {
  if (!Ni)
    return !1;
  const e = "https://cache/" + t.join("/");
  return (await Ni).match(e).then((n) => !!n && parseInt(n.headers.get("x-expiry")) > Date.now());
}
async function OA(...t) {
  if (!Ni)
    return null;
  const e = "https://cache/" + t.join("/"), n = await (await Ni).match(e);
  return n ? n.clone().json() : null;
}
const ml = /* @__PURE__ */ new Map();
async function MA(t, ...e) {
  if (await TA(), await xA(...e))
    return OA(...e);
  const r = e.join("#");
  if (ml.has(r))
    return ml.get(r);
  const n = t();
  n instanceof Promise && (n.then(() => ml.delete(r)), ml.set(r, n));
  const i = await n;
  return await wA(i, ...e), i;
}
async function TA() {
  if (!Ni)
    return;
  const t = await Ni, e = await t.keys();
  for (let r of e) {
    const n = await t.match(r);
    parseInt(n.headers.get("x-expiry")) <= Date.now() && await t.delete(r);
  }
}
function NA(t, e, r, n, i, s, a, o, l, u) {
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
  return rd(t, h);
}
class CA {
  constructor(e) {
    const r = rd(e, {
      SERVICE: "WMS",
      REQUEST: "GetCapabilities"
    });
    this._capabilitiesPromise = MA(
      () => Fk(r),
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
const LA = [
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
function PA(t) {
  return LA.indexOf(eh(t)) > -1;
}
function eh(t) {
  return /^urn:(?:x-)?ogc:def:crs:epsg:/.test(t.toLowerCase()) ? `EPSG:${/([0-9]+)$/.exec(t)[1]}` : t;
}
function g_(t) {
  return Bn(t).attributes.version;
}
function kA(t) {
  const e = g_(t), r = Me(
    Bn(t),
    "Capability"
  );
  return Ht(r, "Layer").map(
    (n) => y_(n, e)
  );
}
function AA(t) {
  const e = Me(Bn(t), "Service"), r = Ht(
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
function y_(t, e, r = [], n = [], i = null) {
  const s = e === "1.3.0" ? "CRS" : "SRS", a = Ht(t, s).map(ze), o = a.length > 0 ? a : r, l = Ht(t, "Style").map(
    DA
  ), u = l.length > 0 ? l : n;
  function f(p) {
    const m = gn(p, s);
    return (PA(m) && e === "1.3.0" ? ["miny", "minx", "maxy", "maxx"] : ["minx", "miny", "maxx", "maxy"]).map((y) => gn(p, y));
  }
  const c = Me(t, "Attribution"), h = c !== null ? IA(c) : i, d = Ht(t, "Layer").map(
    (p) => y_(p, e, o, u, h)
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
        [gn(m, s)]: f(m)
      }),
      {}
    ),
    ...d.length && { children: d }
  };
}
function DA(t) {
  const e = gn(
    Me(Me(t, "LegendURL"), "OnlineResource"),
    "xlink:href"
  );
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    ...e && { legendUrl: e }
  };
}
function IA(t) {
  const e = gn(
    Me(
      Me(t, "LogoURL"),
      "OnlineResource"
    ),
    "xlink:href"
  ), r = gn(
    Me(t, "OnlineResource"),
    "xlink:href"
  ), n = ze(Me(t, "Title"));
  return {
    ...n && { title: n },
    ...r && { url: r },
    ...e && { logoUrl: e }
  };
}
function ac(t) {
  return Bn(t).attributes.version;
}
function v_(t) {
  const e = ac(t);
  let r;
  if (e.startsWith("1.0")) {
    const n = Me(
      Me(
        Me(Bn(t), "Capability"),
        "Request"
      ),
      "GetFeature"
    );
    r = Pa(
      Me(n, "ResultFormat")
    ).map(Mu);
  } else {
    const n = Me(
      Bn(t),
      "OperationsMetadata"
    ), i = Ht(n, "Operation").find(
      (a) => gn(a, "name") === "GetFeature"
    ), s = Ht(i, "Parameter").find(
      (a) => gn(a, "name") === "outputFormat"
    );
    r = Ht(s, "Value", !0).map(
      ze
    );
  }
  return r;
}
function RA(t) {
  const e = ac(t), r = e.startsWith("1.0") ? "Service" : "ServiceIdentification", n = e.startsWith("1.0") ? "Name" : "ServiceType", i = Me(Bn(t), r);
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
    outputFormats: v_(t)
  };
}
function $A(t) {
  const e = ac(t), r = v_(t), n = Me(
    Bn(t),
    "FeatureTypeList"
  );
  return Ht(n, "FeatureType").map(
    (i) => FA(i, e, r)
  );
}
function FA(t, e, r) {
  const n = e.startsWith("2.") ? "CRS" : "SRS", i = e.startsWith("1.0") ? "SRS" : `Default${n}`;
  function s() {
    const u = Me(t, "LatLongBoundingBox");
    return ["minx", "miny", "maxx", "maxy"].map((f) => gn(u, f)).map(parseFloat);
  }
  function a() {
    const u = Me(t, "WGS84BoundingBox");
    return ["LowerCorner", "UpperCorner"].map((f) => Me(u, f)).map((f) => ze(f).split(" ")).reduce((f, c) => [...f, ...c]).map(parseFloat);
  }
  const o = e.startsWith("1.0") ? [] : Ht(t, `Other${n}`).map(ze).map(eh), l = e.startsWith("1.0") ? [] : Ht(
    Me(t, "OutputFormats"),
    "Format"
  ).map(ze);
  return {
    name: ze(Me(t, "Name")),
    title: ze(Me(t, "Title")),
    abstract: ze(Me(t, "Abstract")),
    defaultCrs: eh(
      ze(Me(t, i))
    ),
    otherCrs: o,
    outputFormats: l.length > 0 ? l : r,
    latLonBoundingBox: e.startsWith("1.0") ? s() : a()
  };
}
function VA(t, e, r) {
  const n = Bn(t);
  let i;
  if (r.startsWith("2.0"))
    i = Ht(n, "member").map(
      (u) => Pa(u)[0]
    );
  else {
    const u = Me(n, "featureMembers");
    i = u ? Pa(u) : Ht(n, "featureMember").map(
      (f) => Pa(f)[0]
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
    return Pa(u).filter((f) => a(Ou(Mu(f)))).reduce((f, c) => {
      const h = Ou(Mu(c));
      return {
        ...f,
        [h]: o(h, ze(c))
      };
    }, {});
  }
  return i.map((u) => ({
    id: gn(u, s),
    properties: l(u)
  }));
}
function jA(t) {
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
Zh(
  "parseWmsCapabilities",
  self,
  ({ url: t }) => td(t).then((e) => ({
    info: AA(e),
    layers: kA(e),
    version: g_(e)
  }))
);
Zh(
  "parseWfsCapabilities",
  self,
  ({ url: t }) => td(t).then((e) => ({
    info: RA(e),
    featureTypes: $A(e),
    version: ac(e)
  }))
);
Zh(
  "queryWfsFeatureTypeDetails",
  self,
  ({ url: t, serviceVersion: e, featureTypeFull: r }) => {
    const n = NA(
      t,
      e,
      r.name,
      void 0,
      void 0,
      Object.keys(r.properties)
    );
    return td(n).then((i) => ({
      props: jA(
        VA(i, r, e)
      )
    }));
  }
);
const GA = () => [
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
class UA {
  constructor(e) {
    Qe(this, "capabilitiesPromise");
    Qe(this, "serviceInfo");
    Qe(this, "layers");
    const r = new mb();
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
        type: Lr.WMTS,
        children: e.map(
          (r) => ({
            type: Lr.WMTS,
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
      type: Lr.WMTS,
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
class BA {
  async getRemoteEndpoint(e) {
    let r;
    return await this.getWmsEndpoint(e).isReady().catch(async () => {
      r = await this.getWmtsEndpoint(e).isReady();
    }) || r;
  }
  getWmsEndpoint(e) {
    return new CA(ia.getProxyfiedUrl(e));
  }
  getWmtsEndpoint(e) {
    return new UA(ia.getProxyfiedUrl(e));
  }
  async fetchRemoteWmsEndpoint() {
    return new Promise((e) => e(GA()));
  }
  isRemoteLayer(e) {
    return typeof e == "string" && (e.indexOf(Lr.WMS) === 0 || e.indexOf(Lr.WMTS) === 0);
  }
}
const po = new BA(), WA = { class: "relative text-center" }, qA = ["placeholder", "value"], HA = {
  key: 0,
  class: "text-center"
}, zA = { class: "lux-label" }, YA = {
  key: 1,
  class: "text-center"
}, XA = { class: "lux-label" }, KA = {
  key: 2,
  class: "text-center"
}, ZA = /* @__PURE__ */ L("div", { class: "fa fa-refresh fa-spin" }, null, -1), JA = {
  key: 3,
  class: "overflow-auto max-h-[calc(400px-36px)]"
}, QA = /* @__PURE__ */ fe({
  __name: "remote-layers",
  setup(t) {
    const { t: e } = Xe(), r = vt(), n = Yr(), i = nt([]), s = nt(), { remoteLayersOpen: a } = He(wt()), { setRemoteLayersOpen: o } = wt();
    let l = !1, u, f, c;
    yr(h);
    function h() {
      s.value = s.value ? Js.updateLayers(
        s.value,
        r.layers
      ) : void 0;
    }
    po.fetchRemoteWmsEndpoint().then((E) => {
      i.value = E.map(({ url: O, label: N }) => ({
        label: N,
        value: O
      }));
    });
    async function d(E) {
      l = !0, c = await po.getRemoteEndpoint(E).catch(() => alert(e("Impossible de contacter ce WMS", { ns: "client" }))), f = E, l = !1;
    }
    async function p() {
      const E = c, O = E == null ? void 0 : E.getLayers();
      if (O && O[0]) {
        const N = o_(
          O[0],
          f
        );
        s.value = Js.updateLayers(N, r.layers);
      }
    }
    async function m(E) {
      f = u = E, await d(f), p();
    }
    function g(E) {
      u = E.target.value;
    }
    async function y() {
      await d(u), p();
    }
    function v(E) {
      s.value = Js.toggleNode(
        E.id,
        s.value,
        "expanded"
      );
    }
    function b(E) {
      const { id: O, name: N } = E, M = c;
      if (E.checked === !0)
        r.removeLayers(O);
      else {
        const k = M == null ? void 0 : M.getLayerByName(N);
        if (k) {
          const A = n.initLayer(
            l_({
              id: O,
              url: ia.getProxyfiedUrl(f),
              remoteLayer: k
            })
          );
          r.addLayers(A);
        }
      }
    }
    return (E, O) => x(a) ? (P(), Fe(a_, {
      key: 0,
      title: x(e)("Add external data", { ns: "client" }),
      onClose: O[0] || (O[0] = (N) => x(o)(!1))
    }, {
      content: _i(() => {
        var N, M;
        return [
          L("div", WA, [
            ee(Gv, {
              class: "lux-remote-services-dropdown",
              options: i.value,
              placeholder: x(e)("Predefined wms", { ns: "client" }),
              onChange: m
            }, null, 8, ["options", "placeholder"]),
            L("input", {
              class: "lux-input w-[300px]",
              type: "url",
              placeholder: x(e)("Choose or write a WMS url", {
                ns: "client"
              }),
              value: x(f) || "",
              onChange: g
            }, null, 40, qA),
            L("button", {
              type: "button",
              class: "lux-btn",
              onClick: y
            }, ae(x(e)("Get the layers", { ns: "client" })), 1)
          ]),
          !x(l) && x(c) ? (P(), V("div", HA, [
            L("span", zA, ae(x(e)("Description du service :", {
              ns: "client"
            })), 1),
            no(" " + ae((N = x(c).getServiceInfo()) == null ? void 0 : N.abstract), 1)
          ])) : F("v-if", !0),
          !x(l) && x(c) ? (P(), V("div", YA, [
            L("span", XA, ae(x(e)("Access constraints :", {
              ns: "client"
            })), 1),
            no(" " + ae((M = x(c).getServiceInfo()) == null ? void 0 : M.constraints), 1)
          ])) : F("v-if", !0),
          x(l) ? (P(), V("div", KA, [
            ZA,
            L("span", null, ae(x(e)("Chargement des informations", {
              ns: "client"
            })), 1)
          ])) : F("v-if", !0),
          x(l) ? F("v-if", !0) : (P(), V("div", JA, [
            s.value ? (P(), Fe(Qf, {
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
}), eD = /* @__PURE__ */ he(QA, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/remote-layers/remote-layers.vue"]]);
function tD(t, e = "fr-FR") {
  const r = new Date(t);
  return new Intl.DateTimeFormat(e).format(r);
}
const rD = { class: "font-bold" }, nD = { class: "col-span-2" }, iD = /* @__PURE__ */ fe({
  __name: "layer-metadata-item",
  props: {
    label: { type: String, required: !0 },
    value: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (P(), V(Ue, null, [
      L("span", rD, ae(e.label), 1),
      L("span", nD, ae(e.value), 1)
    ], 64));
  }
}), Ea = /* @__PURE__ */ he(iD, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-metadata/layer-metadata-item.vue"]]);
function sD(t) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[t.toLowerCase()];
}
function aD(t) {
  return new DOMParser().parseFromString(t, "text/html").body;
}
function oD(t) {
  const e = [];
  function r(n) {
    const i = n.split("|");
    i[3] === "WWW:LINK-1.0-http--link" && e.indexOf(i[2]) === -1 && e.push(i[2]);
  }
  return Array.isArray(t) ? t.forEach(r, t) : r(t), e;
}
function lD(t) {
  const r = (Array.isArray(t) ? t : [t]).filter((n) => n.split("|")[1] === "metadata");
  return {
    organisaton: r[0].split("|")[2],
    name: r[0].split("|")[5],
    unknown: r[0].split("|")[6],
    address: r[0].split("|")[7],
    email: r[0].split("|")[4]
  };
}
class __ {
}
class uD extends __ {
  async getMetadata(e, r, n) {
    console.assert(e === Lr.WMS);
    const i = po.getWmsEndpoint(r);
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
const cD = new uD();
class fD extends __ {
  async getMetadata(e, r, n) {
    console.assert(e === Lr.WMTS);
    const i = po.getWmtsEndpoint(r);
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
const hD = new fD();
class dD {
  async getMetadata(e, r, n) {
    if (e === Lr.WMS)
      return cD.getMetadata(e, r, n);
    if (e === Lr.WMTS)
      return hD.getMetadata(e, r, n);
    throw new Error(`Unsupported service type: ${e}`);
  }
}
const pD = new dD();
class mD {
  constructor() {
    Qe(this, "geonetworkBaseUrl", "https://geocatalogue.geoportail.lu/geonetwork/srv");
    Qe(this, "legendBaseUrl", "https://map.geoportail.lu/legends/get_html");
    Qe(this, "localMetadataBaseUrl", "https://map.geoportail.lu/getMetadata");
  }
  async getLayerMetadata(e, r) {
    const n = os(), i = n.findBgLayerById(+e) || n.findById(+e) || n.find3dLayerById(+e);
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
      return pD.getMetadata(
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
        link: oD(s.link),
        revisionDate: s.revisionDate,
        keyword: s.keyword,
        responsibleParty: s.responsibleParty ? lD(s.responsibleParty) : void 0,
        metadataLink: `${this.geonetworkBaseUrl}/${sD(
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
        return l ? aD(l) : void 0;
      }).catch(() => {
      });
    }
  }
}
const sg = new mD(), gD = { class: "grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words" }, yD = {
  key: 2,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, vD = { class: "font-bold" }, _D = { class: "col-span-2" }, bD = ["title"], ED = ["title"], SD = {
  key: 4,
  class: "col-span-3"
}, wD = { class: "font-bold" }, xD = { class: "col-span-2" }, OD = ["href"], MD = {
  key: 7,
  class: "col-span-3 grid gap-2 grid-cols-3"
}, TD = { class: "font-bold" }, ND = { class: "col-span-2" }, CD = { key: 0 }, LD = { key: 1 }, PD = { key: 2 }, kD = { key: 3 }, AD = { key: 4 }, DD = ["href"], ID = {
  key: 8,
  class: "grid gap-2 grid-cols-3 col-span-3"
}, RD = { class: "font-bold" }, $D = { class: "col-span-2" }, FD = ["href"], VD = {
  key: 9,
  class: "col-span-3"
}, jD = { key: 10 }, GD = { class: "text-xl" }, UD = {
  key: 11,
  class: "col-span-3"
}, Xc = 220, BD = /* @__PURE__ */ fe({
  __name: "layer-metadata",
  setup(t) {
    const e = Kh(), { metadataId: r } = He(e), { t: n, i18next: i } = Xe(), s = be(), a = be(!0);
    tt(r, async (c) => {
      var h, d;
      s.value = c ? await sg.getLayerMetadata(c, i.language) : void 0, a.value = (((d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.length) || 0) < Xc;
    }), vr(() => {
      i.on("languageChanged", async () => {
        r.value && (s.value = await sg.getLayerMetadata(
          r.value,
          i.language
        ));
      });
    });
    const o = pe(
      () => {
        var c, h, d;
        return a.value ? (c = s.value) == null ? void 0 : c.description : (d = (h = s.value) == null ? void 0 : h.description) == null ? void 0 : d.slice(0, Xc);
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
      const d = xh("dompurify-html");
      return s.value ? (P(), Fe(a_, {
        key: 0,
        footer: !1,
        "max-height": !0,
        title: x(n)(`${s.value.title}`, { ns: "client" }),
        onClose: f
      }, {
        content: _i(() => {
          var p, m, g, y, v, b, E, O, N, M, k, A, C, R, I;
          return [
            L("div", gD, [
              s.value.name ? (P(), Fe(Ea, {
                key: 0,
                label: x(n)("Name"),
                value: s.value.name
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.serviceDescription ? (P(), Fe(Ea, {
                key: 1,
                label: x(n)("Description du Service"),
                value: s.value.serviceDescription
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.description ? (P(), V("div", yD, [
                L("span", vD, ae(x(n)("Description")), 1),
                L("span", _D, [
                  Ql(L("span", null, null, 512), [
                    [d, o.value]
                  ]),
                  a.value ? F("v-if", !0) : (P(), V("button", {
                    key: 0,
                    title: x(n)("Display full description", {
                      ns: "client"
                    }),
                    onClick: l,
                    class: "text-secondary hover:underline"
                  }, " ... ", 8, bD)),
                  a.value && (((p = o.value) == null ? void 0 : p.length) || 0) > Xc ? (P(), V("button", {
                    key: 1,
                    title: x(n)("Hide full description", {
                      ns: "client"
                    }),
                    onClick: u,
                    class: "text-secondary hover:underline"
                  }, " - ", 8, ED)) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.legalConstraints ? (P(), Fe(Ea, {
                key: 3,
                label: x(n)("Contrainte d'utilisation"),
                value: s.value.legalConstraints
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              ((m = s.value.link) == null ? void 0 : m.length) !== 0 ? (P(), V("div", SD, [
                (P(!0), V(Ue, null, Pr(s.value.link, (Q) => (P(), V("div", {
                  class: "grid gap-2 grid-cols-3",
                  key: Q
                }, [
                  L("span", wD, ae(x(n)("Url vers la resource")), 1),
                  L("span", xD, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      target: "_blank",
                      href: Q
                    }, ae(Q), 9, OD)
                  ])
                ]))), 128))
              ])) : F("v-if", !0),
              s.value.revisionDate ? (P(), Fe(Ea, {
                key: 5,
                label: x(n)("Revision date"),
                value: x(tD)(s.value.revisionDate, x(i).language)
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.keyword ? (P(), Fe(Ea, {
                key: 6,
                label: x(n)("Keywords"),
                value: (g = s.value.keyword) == null ? void 0 : g.join(",")
              }, null, 8, ["label", "value"])) : F("v-if", !0),
              s.value.responsibleParty ? (P(), V("div", MD, [
                L("div", TD, ae(x(n)("Contact")), 1),
                L("div", ND, [
                  (y = s.value.responsibleParty) != null && y.organisaton ? (P(), V("p", CD, ae((v = s.value.responsibleParty) == null ? void 0 : v.organisaton), 1)) : F("v-if", !0),
                  (b = s.value.responsibleParty) != null && b.name ? (P(), V("p", LD, ae((E = s.value.responsibleParty) == null ? void 0 : E.name), 1)) : F("v-if", !0),
                  (O = s.value.responsibleParty) != null && O.unknown ? (P(), V("p", PD, ae((N = s.value.responsibleParty) == null ? void 0 : N.unknown), 1)) : F("v-if", !0),
                  (M = s.value.responsibleParty) != null && M.address ? (P(), V("p", kD, ae((k = s.value.responsibleParty) == null ? void 0 : k.address), 1)) : F("v-if", !0),
                  (A = s.value.responsibleParty) != null && A.email ? (P(), V("p", AD, [
                    L("a", {
                      class: "text-secondary hover:underline",
                      href: "mailto:" + ((C = s.value.responsibleParty) == null ? void 0 : C.email)
                    }, ae((R = s.value.responsibleParty) == null ? void 0 : R.email), 9, DD)
                  ])) : F("v-if", !0)
                ])
              ])) : F("v-if", !0),
              s.value.metadataLink ? (P(), V("div", ID, [
                L("span", RD, ae(x(n)("Link to the metadata")), 1),
                L("span", $D, [
                  L("a", {
                    class: "text-secondary hover:underline",
                    target: "_blank",
                    href: s.value.metadataLink
                  }, ae(x(n)("link")), 9, FD)
                ])
              ])) : F("v-if", !0),
              s.value.isError ? (P(), V("div", VD, ae(x(n)("The metadata is right now not available")), 1)) : F("v-if", !0),
              s.value.legendHtml ? (P(), V("div", jD, [
                L("h4", GD, ae(x(n)("Legend")), 1),
                Ql(L("span", null, null, 512), [
                  [d, (I = s.value.legendHtml) == null ? void 0 : I.innerHTML]
                ])
              ])) : F("v-if", !0),
              s.value.hasLegend ? F("v-if", !0) : (P(), V("div", UD, ae(x(n)("The legend is not available for this layer")), 1))
            ])
          ];
        }),
        _: 1
      }, 8, ["title"])) : F("v-if", !0);
    };
  }
}), WD = /* @__PURE__ */ he(BD, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-metadata/layer-metadata.vue"]]), qD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAoCAMAAABq645qAAACPVBMVEUAAABaW13////tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy7tGy5aW13tGy5DjxTaAAAAvXRSTlMAAAABAgMEBQYHCAkKCwwNDg8QERESFBUWFxkaGx0eHyAhIiInKSosMTIzNTY5Ojs8PUFCQ0RERkpMTk9QU1RVVldaXmFjZWZmamtwcXJzdXd3eHl7fX+AgYKDhIaHiIiKi4yOj5CTlJWWl5iZmZqcnZ+goaKjpKanqKqqq6ywsbK0tbW4u7u8vb6/wMHExcbHysvMzM7P0NDS1NXa29zd3t/g4eTl5ujp6uvs7e7u8PLz9PX29/j5+vv8/f5cALqzAAAEcklEQVRo3u3Z+ZPUVBAH8O63LsLKijoIgotHFI+HgiKNeGC8MCqgUUFAJYjgAQ6HKMgGEQQiqChIPFh1iciiwPIEhvv49t/mD5lBORa2tHbLTO2rmqnUTCrJZ3r65ZuEjDHGGLrMWGcKMah7mh/7NP8PzXBqbqgfzdtPb7i/fjQPvq8r5jUVXNNIY4moYeL6+XNfn9Ov6LUZ2/Z7Pxo3YaZWTp/uLPw/reXYbqLRPz/38g+qJ/oTEV396IzmgmquXHZoIRHd/sTs31T1DqIBcyqHZjQWtTbf6nQiokHLVVWn7ju4euXGjsX9LtTAGgPAGGMzOPZSOGFYtmAXsO8skFkgZovQgi2QcZKyIGAAjJQtIgAB/5vRTc2IvbqSqOWNJQdUVdfe+/zitmsu2jeQ/GWMC43HacRhxhAWcJRyEgmYBSVYgROwgJkzeGVEDGEGotqnPaih1Xp63KSvVFVVtz0wt23AvMVda5AZY2FM7OWO/N2DwBMgESBiQZyABUgYSYQkYSBjhAh7QXN3Zfey7YdyzXh6aQpdu2fIpWsD30CykKOU4XPgmBPEnNcmC1jgIT9uCx9ZkOW1kQi9oBm6aMvO3KIVomUPES19/KIaoNo34uA8cUgtB4DzmQXCFoCFhbXgMtgC8DNGKMj7xnIKtj2toeGf55X5c9+ZRpo1lWjyq5c/33Avj+5obpz25miiwd+p6q4/2jfvIrqtrYlemF5MzZObTuhHCw6cUd2y/91ftj5DRJOn0JKniqm56jPtUNXDx44u6NywvaPzPqL+G5v3jCimhhqaX/vyi6VTxtzyYkVV9dSsRvrmnVXUI5oo7GkNEV2RH/igaRVV1Y8fOdE+tEc0tlzqBU1tND+7U1W18t51F8/QAFJrkUccL4VjABFb+MwoMyznszWzBZxfDT2SIbZgm0/TzBbIpLqcr8GwScJxfF4UiliAgGEZ1gKx8VK4bmuafmpdrqr6cFdXBJBSORPkp9A0ZI8hAi4jYQY8CEN8MDML2K/FBBdwKU80kOp3eSBirq7BkJJLstK5UShw+eYhDBGUYNPQeN3WTND2rd+r6oquNUZQ00A49gCEJQg8RhJD8j0DQX6IEBZYMLMAAANZrpHa8lkNBwjOi0Ion90KRIDIQEzsdVfzlurhT1X11F2XqE3qwfNQMiYLGYIYNgAQMcTltXHV3z9w1dAD/8LapH/XJt9eycWudG4U8lGrjYeSIAtMFlaD1SU1NxAR0cA9qrpqr6ruaOmybxLPREBojLEOzoMNkAXsO4YNYRnIpNo3WS30+EByXt+kttY3AEdAyGmZ4/TcKORCDgDhEAg5D0wO7vK1mbmwhajxA9XWkXTTh8dVj6wZX9gr6ZFL9eTm1nbVhUREdOs2Vb25sJqmRTuOq+r+rwfmgGEHVYcU+H7a8KNrdP6kYTXBJ6qPFVjT2DxwzD/msbWqE+vnrvqvevSeutGMUm0dXC+ahk3asb5unt+8cvLIqOvr52nU7Dv7nq31afo0/0mzrhiavwAx1n2SsZnMdgAAAABJRU5ErkJggg==";
class HD {
  bootstrap() {
    this.restore();
    let e;
    e = yr(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = wt(), { lang: r } = He(e);
    tt(
      r,
      (n, i) => {
        i !== n && (Ne.setValue(wi, n), document.documentElement.setAttribute("lang", n));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(wi);
    if (e) {
      const { setLang: r } = wt(), { i18next: n } = Xe();
      n.changeLanguage(e), r(e);
    }
  }
}
const zD = new HD(), YD = /* @__PURE__ */ fe({
  __name: "language-selector",
  setup(t) {
    const { i18next: e, t: r } = Xe(), { setLang: n } = wt(), { lang: i } = He(wt()), s = pe(
      () => ["en", "de", "fr", "lb"].map((l) => ({
        label: r(l),
        value: l,
        ariaLabel: r("Changer de langue : {{lang}}", { lang: l })
      }))
    ), a = r("Changer de langue");
    zD.bootstrap();
    function o(l) {
      e.changeLanguage(l), n(l);
    }
    return (l, u) => (P(), V("div", null, [
      ee(Gv, {
        class: "lux-navbar-dropdown lux-dropdown-inline text-white h-full",
        options: s.value,
        placeholder: x(a),
        modelValue: x(i),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => Ye(i) ? i.value = f : null),
        onChange: o
      }, null, 8, ["options", "placeholder", "modelValue"])
    ]));
  }
}), XD = /* @__PURE__ */ he(YD, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/nav-bars/language-selector.vue"]]);
class KD {
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
const ZD = new KD(), JD = { class: "w-full h-14 flex bg-white shadow-header z-10 shrink-0" }, QD = /* @__PURE__ */ L("div", { class: "flex-2 p-[5px]" }, [
  /* @__PURE__ */ L("img", { src: qD })
], -1), eI = /* @__PURE__ */ L("div", { class: "grow text-center" }, "search", -1), tI = { class: "h-full flex" }, rI = { class: "hidden lg:inline-block" }, nI = { class: "border-l-[1px] border-stone-300 h-full" }, iI = /* @__PURE__ */ fe({
  __name: "header-bar",
  setup(t) {
    const { t: e } = Xe(), r = wt(), { layersOpen: n, myLayersTabOpen: i, themeGridOpen: s } = He(r), { setLayersOpen: a, setMyLayersTabOpen: o, setThemeGridOpen: l } = r, u = Zt(), { theme: f } = He(u);
    tt(
      f,
      (h) => {
        h && ZD.setCurrentThemeColors(h.name);
      },
      { immediate: !0 }
    );
    function c() {
      n.value ? n.value && (s.value ? a(!1) : (i.value && o(!1), l(!0))) : (a(!0), i.value && o(!1), l(!0));
    }
    return (h, d) => {
      var p, m;
      return P(), V("header", JD, [
        QD,
        eI,
        L("div", null, [
          L("ul", tI, [
            L("li", null, [
              L("button", {
                class: ke(["flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3", `before:content-${(p = x(f)) == null ? void 0 : p.name}`]),
                onClick: c
              }, [
                L("span", rI, ae(x(e)(`${(m = x(f)) == null ? void 0 : m.name}`)), 1)
              ], 2)
            ]),
            L("li", nI, [
              ee(XD, { class: "flex-none h-full" })
            ])
          ])
        ])
      ]);
    };
  }
}), sI = /* @__PURE__ */ he(iI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/header/header-bar.vue"]]), aI = { class: "block text-[13px] sm:text-base uppercase" }, oI = /* @__PURE__ */ fe({
  __name: "button-icon",
  props: {
    label: { type: String, required: !0 },
    icon: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (P(), V("button", {
      class: ke(["h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary", e.active ? "bg-primary text-white" : ""])
    }, [
      L("span", {
        class: ke(["block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons", e.active ? "lux-close-cross" : `after:content-${e.icon}`])
      }, null, 2),
      L("span", aI, ae(e.label), 1)
    ], 2));
  }
}), Pn = /* @__PURE__ */ he(oI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/button-icon.vue"]]), lI = ["href"], uI = /* @__PURE__ */ fe({
  __name: "button-link",
  props: {
    label: { type: String, required: !0 },
    link: { type: String, required: !0 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (P(), V("a", {
      class: "h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary",
      href: `${e.link}`,
      target: "_blank"
    }, ae(r.$props.label), 9, lI));
  }
}), ni = /* @__PURE__ */ he(uI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/button-link.vue"]]), cI = { class: "block" }, fI = /* @__PURE__ */ fe({
  __name: "button-text",
  props: {
    label: { type: String, required: !0 },
    active: { type: Boolean, required: !1 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (P(), V("button", {
      class: ke(["h-16 w-16 text-white bg-tertiary hover:bg-primary", e.active ? "bg-primary" : "bg-tertiary"])
    }, [
      L("span", cI, ae(e.label), 1)
    ], 2));
  }
}), Sa = /* @__PURE__ */ he(fI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/button-text.vue"]]), hI = { class: "absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400" }, dI = {
  key: 0,
  class: "absolute bottom-full top-auto z-10 pl-[130px] pb-16 w-[326px]"
}, pI = { class: "flex flex-row justify-center text-white bg-tertiary hover:bg-primary py-2 box-content border-y border-x border-gray-400" }, mI = /* @__PURE__ */ L("input", { type: "checkbox" }, null, -1), gI = /* @__PURE__ */ fe({
  __name: "toolbar-draw",
  setup(t) {
    const { t: e } = Xe(), r = be(!1);
    return (n, i) => (P(), V("div", null, [
      L("ul", hI, [
        L("li", null, [
          ee(Sa, {
            label: x(e)("Draw Point", { ns: "client" })
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Sa, {
            label: x(e)("Label", { ns: "client" })
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Sa, {
            label: x(e)("Line", { ns: "client" }),
            onClick: i[0] || (i[0] = () => r.value = !r.value)
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Sa, {
            label: x(e)("Polygon", { ns: "client" })
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Sa, {
            label: x(e)("Circle", { ns: "client" })
          }, null, 8, ["label"])
        ])
      ]),
      r.value ? (P(), V("ul", dI, [
        L("li", pI, [
          L("label", null, [
            mI,
            no(" " + ae(x(e)("Suivre la route", { ns: "client" })), 1)
          ])
        ])
      ])) : F("v-if", !0)
    ]));
  }
}), yI = /* @__PURE__ */ he(gI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/toolbar-draw.vue"]]), vI = { class: "flex flex-col w-12 justify-between bg-white z-5 shrink-0 sm:flex-row sm:w-full sm:h-14 sm:shadow-footer" }, _I = { class: "flex flex-col w-full sm:w-80 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, bI = { class: "relative flex flex-col w-12 sm:w-64 sm:flex-row justify-start text-primary divide-y sm:divide-y-0 sm:divide-x divide-gray-400 divide-solid box-content border-y sm:border-y-0 border-x border-gray-400" }, EI = { class: "w-[466px] hidden sm:flex flex-row justify-end text-gray-500 whitespace-nowrap" }, SI = /* @__PURE__ */ fe({
  __name: "footer-bar",
  setup(t) {
    const { t: e, i18next: r } = Xe(), { setLayersOpen: n, setDrawToolbarOpen: i } = wt(), { layersOpen: s, drawToolbarOpen: a } = He(wt());
    return (o, l) => (P(), V("footer", vI, [
      F(" left buttons "),
      L("ul", _I, [
        L("li", null, [
          ee(Pn, {
            label: x(e)("Layers", { ns: "client" }),
            icon: "layers",
            active: x(s),
            onClick: l[0] || (l[0] = () => x(n)(!x(s)))
          }, null, 8, ["label", "active"])
        ]),
        F(`TODOs in each button when implemented
        - remove class="text-gray-300"
        - add click handler that calls setLayersOpen(true) and opens tool (also via app store)
      `),
        L("li", null, [
          ee(Pn, {
            class: "text-gray-300",
            label: x(e)("My Maps", { ns: "client" }),
            icon: "mymaps"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Pn, {
            class: "text-gray-300",
            label: x(e)("Infos", { ns: "client" }),
            icon: "infos"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Pn, {
            class: "text-gray-300",
            label: x(e)("Legends", { ns: "client" }),
            icon: "legends"
          }, null, 8, ["label"])
        ]),
        L("li", null, [
          ee(Pn, {
            class: "text-gray-300",
            label: x(e)("Routing", { ns: "client" }),
            icon: "routing"
          }, null, 8, ["label"])
        ])
      ]),
      F(" center buttons "),
      L("div", bI, [
        x(a) ? (P(), Fe(yI, { key: 0 })) : F("v-if", !0),
        ee(Pn, {
          label: x(e)("Dessin", { ns: "client" }),
          icon: "draw",
          onClick: l[1] || (l[1] = () => x(i)(!x(a)))
        }, null, 8, ["label"]),
        ee(Pn, {
          class: "text-gray-300 hidden sm:block",
          label: x(e)("Mesurer", { ns: "client" }),
          icon: "measure"
        }, null, 8, ["label"]),
        ee(Pn, {
          class: "text-gray-300 hidden sm:block",
          label: x(e)("Imprimer", { ns: "client" }),
          icon: "print"
        }, null, 8, ["label"]),
        ee(Pn, {
          class: "text-gray-300",
          label: x(e)("Partager", { ns: "client" }),
          icon: "share"
        }, null, 8, ["label"])
      ]),
      F(" right buttons "),
      L("div", EI, [
        ee(ni, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("What's new", { ns: "client" }),
          link: `https://geoportail.lu/${x(r).language}/questions/whats-new/`
        }, null, 8, ["label", "link"]),
        F("TODO get geonetworkBaseUrl from config"),
        ee(ni, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Geocatalogue", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        F("TODO handle feedback links (for different portals?)"),
        ee(ni, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Feedback", { ns: "client" }),
          link: ""
        }, null, 8, ["label"]),
        ee(ni, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("A Propos", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(r).language}/propos/`
        }, null, 8, ["label", "link"]),
        ee(ni, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Aide", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(r).language}/documentation/`
        }, null, 8, ["label", "link"]),
        ee(ni, {
          class: "hidden lg:flex text-gray-500",
          label: x(e)("Contact", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(r).language}/propos/contactez-nous/`
        }, null, 8, ["label", "link"]),
        ee(ni, {
          class: "text-gray-500",
          label: x(e)("Legalites", { ns: "client" }),
          link: `https://www.geoportail.lu/${x(r).language}/propos/mentions-legales/`
        }, null, 8, ["label", "link"]),
        ee(ni, {
          class: "text-gray-500",
          label: x(e)("ACT", { ns: "client" }),
          link: "http://www.act.public.lu/"
        }, null, 8, ["label", "link"])
      ])
    ]));
  }
}), wI = /* @__PURE__ */ he(SI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/footer/footer-bar.vue"]]), xI = { class: "flex flex-row flex-wrap pl-2.5" }, OI = ["onClick"], MI = { class: "text-2xl absolute top-5" }, TI = /* @__PURE__ */ fe({
  __name: "theme-grid",
  props: {
    themes: { type: Array, required: !0 }
  },
  setup(t) {
    const { t: e } = Xe(), r = t;
    return (n, i) => (P(), V("div", xI, [
      (P(!0), V(Ue, null, Pr(r.themes, (s) => (P(), V("button", {
        class: ke(["relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]", `bg-${s.name}-primary hover:text-${s.name}-primary`]),
        key: s.id,
        onClick: (a) => n.$emit("setTheme", s.name)
      }, [
        L("div", MI, ae(x(e)(`${s.name}`)), 1),
        L("div", {
          class: ke(["text-6xl absolute bottom-1 after:font-icons", `after:content-${s.name}`])
        }, null, 2)
      ], 10, OI))), 128))
    ]));
  }
}), NI = /* @__PURE__ */ he(TI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/theme-selector/theme-grid.vue"]]), CI = ["aria-expanded"], LI = { class: "py-0.5" }, PI = { class: "px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white" }, kI = { class: "py-[3px]" }, AI = { class: "flex flex-row flex-wrap ml-1 w-12" }, DI = /* @__PURE__ */ fe({
  __name: "theme-selector-button",
  props: {
    themes: { type: Array, required: !0 },
    currentTheme: { type: Object, required: !1 },
    isOpen: { type: Boolean, required: !1 }
  },
  setup(t) {
    const { t: e } = Xe(), r = t, n = pe(() => {
      var i;
      return ((i = r.themes) == null ? void 0 : i.slice(0, 8)) || [];
    });
    return (i, s) => {
      var a;
      return P(), V("button", {
        class: "w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary",
        "aria-expanded": r.isOpen
      }, [
        L("span", LI, ae(x(e)("Theme")) + ": " + ae(x(e)(`${(a = r.currentTheme) == null ? void 0 : a.name}`)), 1),
        L("span", PI, [
          L("span", kI, ae(x(e)("Changer")), 1),
          L("span", AI, [
            (P(!0), V(Ue, null, Pr(n.value, (o) => (P(), V("div", {
              class: ke(`h-2.5 w-2.5 m-px bg-${o.name}-primary`),
              key: o.id
            }, null, 2))), 128))
          ])
        ])
      ], 8, CI);
    };
  }
}), II = /* @__PURE__ */ he(DI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/theme-selector/theme-selector-button.vue"]]), RI = {
  key: 0,
  class: "absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
}, $I = /* @__PURE__ */ fe({
  __name: "theme-selector",
  setup(t) {
    const e = wt(), { setThemeGridOpen: r } = e, { themeGridOpen: n } = He(e), i = Zt(), s = os(), { theme: a, themes: o } = He(i), l = pe(
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
    return (c, h) => (P(), V(Ue, null, [
      ee(II, {
        onClick: u,
        themes: l.value,
        currentTheme: x(a),
        isOpen: x(n)
      }, null, 8, ["themes", "currentTheme", "isOpen"]),
      x(n) ? (P(), V("div", RI, [
        ee(NI, {
          onSetTheme: f,
          themes: l.value
        }, null, 8, ["themes"])
      ])) : F("v-if", !0)
    ], 64));
  }
}), FI = /* @__PURE__ */ he($I, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/theme-selector/theme-selector.vue"]]);
function th(t, e = 0) {
  const { name: r, id: n, children: i, metadata: s } = t;
  return {
    name: r,
    id: n,
    depth: e,
    children: i == null ? void 0 : i.map((a) => th(a, e + 1)),
    checked: !1,
    expanded: (s == null ? void 0 : s.is_expanded) || !1
  };
}
const VI = {
  key: 0,
  class: "mb-7"
}, jI = /* @__PURE__ */ fe({
  __name: "catalog-tree",
  setup(t) {
    const e = vt(), r = Zt(), n = Yr(), i = nt(), s = nt(), a = pe(
      () => !e.is3dActive || e.is3dActive && !e.is3dMesh
    ), { layerTrees_3d: o } = He(r);
    yr(l);
    function l() {
      var c;
      if (r.theme && e.layers) {
        const h = i.value && i.value.id === ((c = r.theme) == null ? void 0 : c.id) ? i.value : th(r.theme);
        i.value = Js.updateLayers(
          h,
          e.layers
        );
      }
    }
    yr(() => {
      if (o.value) {
        const c = s.value ? s.value : th(o.value);
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
      n.toggleLayer(+c.id, !c.checked, h);
    }
    return (c, h) => (P(), V("div", null, [
      F(" 3D layers catalog, only displayed when 3D is active "),
      s.value && x(e).is3dActive ? (P(), V("div", VI, [
        (P(), Fe(Qf, {
          node: s.value,
          key: s.value.id,
          onToggleParent: h[0] || (h[0] = (d) => u(d, !0)),
          onToggleLayer: h[1] || (h[1] = (d) => f(d, !0))
        }, null, 8, ["node"]))
      ])) : F("v-if", !0),
      F(" Main catalog, displays by default and 3D terrain active "),
      i.value && a.value ? (P(), Fe(Qf, {
        node: i.value,
        key: i.value.id,
        onToggleParent: h[2] || (h[2] = (d) => u(d, !1)),
        onToggleLayer: h[3] || (h[3] = (d) => f(d, !1))
      }, null, 8, ["node"])) : F("v-if", !0)
    ]));
  }
}), GI = /* @__PURE__ */ he(jI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/catalog/catalog-tree.vue"]]), UI = /* @__PURE__ */ fe({
  __name: "catalog-tab",
  setup(t) {
    const { themeGridOpen: e } = He(wt());
    return (r, n) => (P(), V(Ue, null, [
      ee(FI),
      x(e) === !1 ? (P(), Fe(GI, {
        key: 0,
        class: "pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
      })) : F("v-if", !0)
    ], 64));
  }
}), BI = /* @__PURE__ */ he(UI, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/catalog/catalog-tab.vue"]]);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ag(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ag(Object(r), !0).forEach(function(n) {
      WI(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ag(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ul(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ul = function(e) {
    return typeof e;
  } : Ul = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ul(t);
}
function WI(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Wn() {
  return Wn = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Wn.apply(this, arguments);
}
function qI(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function HI(t, e) {
  if (t == null)
    return {};
  var r = qI(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, n) || (r[n] = t[n]));
  }
  return r;
}
var zI = "1.15.2";
function jn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Kn = jn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Fo = jn(/Edge/i), og = jn(/firefox/i), Ya = jn(/safari/i) && !jn(/chrome/i) && !jn(/android/i), b_ = jn(/iP(ad|od|hone)/i), E_ = jn(/chrome/i) && jn(/android/i), S_ = {
  capture: !1,
  passive: !1
};
function Ge(t, e, r) {
  t.addEventListener(e, r, !Kn && S_);
}
function Ie(t, e, r) {
  t.removeEventListener(e, r, !Kn && S_);
}
function Tu(t, e) {
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
function YI(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Ur(t, e, r, n) {
  if (t) {
    r = r || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === r && Tu(t, e) : Tu(t, e)) || n && t === r)
        return t;
      if (t === r)
        break;
    } while (t = YI(t));
  }
  return null;
}
var lg = /\s+/g;
function cr(t, e, r) {
  if (t && e)
    if (t.classList)
      t.classList[r ? "add" : "remove"](e);
    else {
      var n = (" " + t.className + " ").replace(lg, " ").replace(" " + e + " ", " ");
      t.className = (n + (r ? " " + e : "")).replace(lg, " ");
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
function Qs(t, e) {
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
function w_(t, e, r) {
  if (t) {
    var n = t.getElementsByTagName(e), i = 0, s = n.length;
    if (r)
      for (; i < s; i++)
        r(n[i], i);
    return n;
  }
  return [];
}
function yn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Et(t, e, r, n, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var s, a, o, l, u, f, c;
    if (t !== window && t.parentNode && t !== yn() ? (s = t.getBoundingClientRect(), a = s.top, o = s.left, l = s.bottom, u = s.right, f = s.height, c = s.width) : (a = 0, o = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, c = window.innerWidth), (e || r) && t !== window && (i = i || t.parentNode, !Kn))
      do
        if (i && i.getBoundingClientRect && (ye(i, "transform") !== "none" || r && ye(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          a -= h.top + parseInt(ye(i, "border-top-width")), o -= h.left + parseInt(ye(i, "border-left-width")), l = a + s.height, u = o + s.width;
          break;
        }
      while (i = i.parentNode);
    if (n && t !== window) {
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
function ug(t, e, r) {
  for (var n = gi(t, !0), i = Et(t)[e]; n; ) {
    var s = Et(n)[r], a = void 0;
    if (r === "top" || r === "left" ? a = i >= s : a = i <= s, !a)
      return n;
    if (n === yn())
      break;
    n = gi(n, !1);
  }
  return !1;
}
function sa(t, e, r, n) {
  for (var i = 0, s = 0, a = t.children; s < a.length; ) {
    if (a[s].style.display !== "none" && a[s] !== ge.ghost && (n || a[s] !== ge.dragged) && Ur(a[s], r.draggable, t, !1)) {
      if (i === e)
        return a[s];
      i++;
    }
    s++;
  }
  return null;
}
function nd(t, e) {
  for (var r = t.lastElementChild; r && (r === ge.ghost || ye(r, "display") === "none" || e && !Tu(r, e)); )
    r = r.previousElementSibling;
  return r || null;
}
function xr(t, e) {
  var r = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ge.clone && (!e || Tu(t, e)) && r++;
  return r;
}
function cg(t) {
  var e = 0, r = 0, n = yn();
  if (t)
    do {
      var i = Qs(t), s = i.a, a = i.d;
      e += t.scrollLeft * s, r += t.scrollTop * a;
    } while (t !== n && (t = t.parentNode));
  return [e, r];
}
function XI(t, e) {
  for (var r in t)
    if (!!t.hasOwnProperty(r)) {
      for (var n in e)
        if (e.hasOwnProperty(n) && e[n] === t[r][n])
          return Number(r);
    }
  return -1;
}
function gi(t, e) {
  if (!t || !t.getBoundingClientRect)
    return yn();
  var r = t, n = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = ye(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body)
          return yn();
        if (n || e)
          return r;
        n = !0;
      }
    }
  while (r = r.parentNode);
  return yn();
}
function KI(t, e) {
  if (t && e)
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function Kc(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Xa;
function x_(t, e) {
  return function() {
    if (!Xa) {
      var r = arguments, n = this;
      r.length === 1 ? t.call(n, r[0]) : t.apply(n, r), Xa = setTimeout(function() {
        Xa = void 0;
      }, e);
    }
  };
}
function ZI() {
  clearTimeout(Xa), Xa = void 0;
}
function O_(t, e, r) {
  t.scrollLeft += e, t.scrollTop += r;
}
function M_(t) {
  var e = window.Polymer, r = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : r ? r(t).clone(!0)[0] : t.cloneNode(!0);
}
function T_(t, e, r) {
  var n = {};
  return Array.from(t.children).forEach(function(i) {
    var s, a, o, l;
    if (!(!Ur(i, e.draggable, t, !1) || i.animated || i === r)) {
      var u = Et(i);
      n.left = Math.min((s = n.left) !== null && s !== void 0 ? s : 1 / 0, u.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top), n.right = Math.max((o = n.right) !== null && o !== void 0 ? o : -1 / 0, u.right), n.bottom = Math.max((l = n.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var pr = "Sortable" + new Date().getTime();
function JI() {
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
            var s = Sn({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = Qs(i, !0);
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
      t.splice(XI(t, {
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
        var l = 0, u = o.target, f = u.fromRect, c = Et(u), h = u.prevFromRect, d = u.prevToRect, p = o.rect, m = Qs(u, !0);
        m && (c.top -= m.f, c.left -= m.e), u.toRect = c, u.thisAnimationDuration && Kc(h, c) && !Kc(f, c) && (p.top - c.top) / (p.left - c.left) === (f.top - c.top) / (f.left - c.left) && (l = e3(p, h, d, i.options)), Kc(c, f) || (u.prevFromRect = f, u.prevToRect = c, l || (l = i.options.animation), i.animate(u, p, c, l)), l && (s = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(e), s ? e = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), t = [];
    },
    animate: function(n, i, s, a) {
      if (a) {
        ye(n, "transition", ""), ye(n, "transform", "");
        var o = Qs(this.el), l = o && o.a, u = o && o.d, f = (i.left - s.left) / (l || 1), c = (i.top - s.top) / (u || 1);
        n.animatingX = !!f, n.animatingY = !!c, ye(n, "transform", "translate3d(" + f + "px," + c + "px,0)"), this.forRepaintDummy = QI(n), ye(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ye(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          ye(n, "transition", ""), ye(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function QI(t) {
  return t.offsetWidth;
}
function e3(t, e, r, n) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - r.top, 2) + Math.pow(e.left - r.left, 2)) * n.animation;
}
var Cs = [], Zc = {
  initializeByDefault: !0
}, Vo = {
  mount: function(e) {
    for (var r in Zc)
      Zc.hasOwnProperty(r) && !(r in e) && (e[r] = Zc[r]);
    Cs.forEach(function(n) {
      if (n.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Cs.push(e);
  },
  pluginEvent: function(e, r, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var s = e + "Global";
    Cs.forEach(function(a) {
      !r[a.pluginName] || (r[a.pluginName][s] && r[a.pluginName][s](Sn({
        sortable: r
      }, n)), r.options[a.pluginName] && r[a.pluginName][e] && r[a.pluginName][e](Sn({
        sortable: r
      }, n)));
    });
  },
  initializePlugins: function(e, r, n, i) {
    Cs.forEach(function(o) {
      var l = o.pluginName;
      if (!(!e.options[l] && !o.initializeByDefault)) {
        var u = new o(e, r, e.options);
        u.sortable = e, u.options = e.options, e[l] = u, Wn(n, u.defaults);
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
    return Cs.forEach(function(i) {
      typeof i.eventProperties == "function" && Wn(n, i.eventProperties.call(r[i.pluginName], e));
    }), n;
  },
  modifyOption: function(e, r, n) {
    var i;
    return Cs.forEach(function(s) {
      !e[s.pluginName] || s.optionListeners && typeof s.optionListeners[r] == "function" && (i = s.optionListeners[r].call(e[s.pluginName], n));
    }), i;
  }
};
function t3(t) {
  var e = t.sortable, r = t.rootEl, n = t.name, i = t.targetEl, s = t.cloneEl, a = t.toEl, o = t.fromEl, l = t.oldIndex, u = t.newIndex, f = t.oldDraggableIndex, c = t.newDraggableIndex, h = t.originalEvent, d = t.putSortable, p = t.extraEventProperties;
  if (e = e || r && r[pr], !!e) {
    var m, g = e.options, y = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !Kn && !Fo ? m = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(n, !0, !0)), m.to = a || r, m.from = o || r, m.item = i || r, m.clone = s, m.oldIndex = l, m.newIndex = u, m.oldDraggableIndex = f, m.newDraggableIndex = c, m.originalEvent = h, m.pullMode = d ? d.lastPutMode : void 0;
    var v = Sn(Sn({}, p), Vo.getEventProperties(n, e));
    for (var b in v)
      m[b] = v[b];
    r && r.dispatchEvent(m), g[y] && g[y].call(e, m);
  }
}
var r3 = ["evt"], ir = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, s = HI(n, r3);
  Vo.pluginEvent.bind(ge)(e, r, Sn({
    dragEl: J,
    parentEl: ct,
    ghostEl: Se,
    rootEl: rt,
    nextEl: Xi,
    lastDownEl: Bl,
    cloneEl: at,
    cloneHidden: di,
    dragStarted: ka,
    putSortable: kt,
    activeSortable: ge.active,
    originalEvent: i,
    oldIndex: js,
    oldDraggableIndex: Ka,
    newIndex: fr,
    newDraggableIndex: ui,
    hideGhostForTarget: P_,
    unhideGhostForTarget: k_,
    cloneNowHidden: function() {
      di = !0;
    },
    cloneNowShown: function() {
      di = !1;
    },
    dispatchSortableEvent: function(o) {
      Xt({
        sortable: r,
        name: o,
        originalEvent: i
      });
    }
  }, s));
};
function Xt(t) {
  t3(Sn({
    putSortable: kt,
    cloneEl: at,
    targetEl: J,
    rootEl: rt,
    oldIndex: js,
    oldDraggableIndex: Ka,
    newIndex: fr,
    newDraggableIndex: ui
  }, t));
}
var J, ct, Se, rt, Xi, Bl, at, di, js, fr, Ka, ui, gl, kt, As = !1, Nu = !1, Cu = [], qi, Vr, Jc, Qc, fg, hg, ka, Ls, Za, Ja = !1, yl = !1, Wl, jt, ef = [], rh = !1, Lu = [], oc = typeof document < "u", vl = b_, dg = Fo || Kn ? "cssFloat" : "float", n3 = oc && !E_ && !b_ && "draggable" in document.createElement("div"), N_ = function() {
  if (!!oc) {
    if (Kn)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), C_ = function(e, r) {
  var n = ye(e), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), s = sa(e, 0, r), a = sa(e, 1, r), o = s && ye(s), l = a && ye(a), u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Et(s).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Et(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && o.float && o.float !== "none") {
    var c = o.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return s && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || u >= i && n[dg] === "none" || a && n[dg] === "none" && u + f > i) ? "vertical" : "horizontal";
}, i3 = function(e, r, n) {
  var i = n ? e.left : e.top, s = n ? e.right : e.bottom, a = n ? e.width : e.height, o = n ? r.left : r.top, l = n ? r.right : r.bottom, u = n ? r.width : r.height;
  return i === o || s === l || i + a / 2 === o + u / 2;
}, s3 = function(e, r) {
  var n;
  return Cu.some(function(i) {
    var s = i[pr].options.emptyInsertThreshold;
    if (!(!s || nd(i))) {
      var a = Et(i), o = e >= a.left - s && e <= a.right + s, l = r >= a.top - s && r <= a.bottom + s;
      if (o && l)
        return n = i;
    }
  }), n;
}, L_ = function(e) {
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
  (!i || Ul(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = r(i.pull, !0), n.checkPut = r(i.put), n.revertClone = i.revertClone, e.group = n;
}, P_ = function() {
  !N_ && Se && ye(Se, "display", "none");
}, k_ = function() {
  !N_ && Se && ye(Se, "display", "");
};
oc && !E_ && document.addEventListener("click", function(t) {
  if (Nu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Nu = !1, !1;
}, !0);
var Hi = function(e) {
  if (J) {
    e = e.touches ? e.touches[0] : e;
    var r = s3(e.clientX, e.clientY);
    if (r) {
      var n = {};
      for (var i in e)
        e.hasOwnProperty(i) && (n[i] = e[i]);
      n.target = n.rootEl = r, n.preventDefault = void 0, n.stopPropagation = void 0, r[pr]._onDragOver(n);
    }
  }
}, a3 = function(e) {
  J && J.parentNode[pr]._isOutsideThisEl(e.target);
};
function ge(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Wn({}, e), t[pr] = this;
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
      return C_(t, this.options);
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
    supportPointer: ge.supportPointer !== !1 && "PointerEvent" in window && !Ya,
    emptyInsertThreshold: 5
  };
  Vo.initializePlugins(this, t, r);
  for (var n in r)
    !(n in e) && (e[n] = r[n]);
  L_(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : n3, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Ge(t, "pointerdown", this._onTapStart) : (Ge(t, "mousedown", this._onTapStart), Ge(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ge(t, "dragover", this), Ge(t, "dragenter", this)), Cu.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Wn(this, JI());
}
ge.prototype = {
  constructor: ge,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Ls = null);
  },
  _getDirection: function(e, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, r, J) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var r = this, n = this.el, i = this.options, s = i.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (o || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = i.filter;
      if (p3(n), !J && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ya && l && l.tagName.toUpperCase() === "SELECT") && (l = Ur(l, i.draggable, n, !1), !(l && l.animated) && Bl !== l)) {
        if (js = xr(l), Ka = xr(l, i.draggable), typeof f == "function") {
          if (f.call(this, e, l, this)) {
            Xt({
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
          if (c = Ur(u, c.trim(), n, !1), c)
            return Xt({
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
        i.handle && !Ur(u, i.handle, n, !1) || this._prepareDragStart(e, o, l);
      }
    }
  },
  _prepareDragStart: function(e, r, n) {
    var i = this, s = i.el, a = i.options, o = s.ownerDocument, l;
    if (n && !J && n.parentNode === s) {
      var u = Et(n);
      if (rt = s, J = n, ct = J.parentNode, Xi = J.nextSibling, Bl = n, gl = a.group, ge.dragged = J, qi = {
        target: J,
        clientX: (r || e).clientX,
        clientY: (r || e).clientY
      }, fg = qi.clientX - u.left, hg = qi.clientY - u.top, this._lastX = (r || e).clientX, this._lastY = (r || e).clientY, J.style["will-change"] = "all", l = function() {
        if (ir("delayEnded", i, {
          evt: e
        }), ge.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !og && i.nativeDraggable && (J.draggable = !0), i._triggerDragStart(e, r), Xt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), cr(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        w_(J, f.trim(), tf);
      }), Ge(o, "dragover", Hi), Ge(o, "mousemove", Hi), Ge(o, "touchmove", Hi), Ge(o, "mouseup", i._onDrop), Ge(o, "touchend", i._onDrop), Ge(o, "touchcancel", i._onDrop), og && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), ir("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || r) && (!this.nativeDraggable || !(Fo || Kn))) {
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
    var r = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    J && tf(J), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Ie(e, "mouseup", this._disableDelayedDrag), Ie(e, "touchend", this._disableDelayedDrag), Ie(e, "touchcancel", this._disableDelayedDrag), Ie(e, "mousemove", this._delayedDragTouchMoveHandler), Ie(e, "touchmove", this._delayedDragTouchMoveHandler), Ie(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, r) {
    r = r || e.pointerType == "touch" && e, !this.nativeDraggable || r ? this.options.supportPointer ? Ge(document, "pointermove", this._onTouchMove) : r ? Ge(document, "touchmove", this._onTouchMove) : Ge(document, "mousemove", this._onTouchMove) : (Ge(J, "dragend", this), Ge(rt, "dragstart", this._onDragStart));
    try {
      document.selection ? ql(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, r) {
    if (As = !1, rt && J) {
      ir("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Ge(document, "dragover", a3);
      var n = this.options;
      !e && cr(J, n.dragClass, !1), cr(J, n.ghostClass, !0), ge.active = this, e && this._appendGhost(), Xt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Vr) {
      this._lastX = Vr.clientX, this._lastY = Vr.clientY, P_();
      for (var e = document.elementFromPoint(Vr.clientX, Vr.clientY), r = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Vr.clientX, Vr.clientY), e !== r); )
        r = e;
      if (J.parentNode[pr]._isOutsideThisEl(e), r)
        do {
          if (r[pr]) {
            var n = void 0;
            if (n = r[pr]._onDragOver({
              clientX: Vr.clientX,
              clientY: Vr.clientY,
              target: e,
              rootEl: r
            }), n && !this.options.dragoverBubble)
              break;
          }
          e = r;
        } while (r = r.parentNode);
      k_();
    }
  },
  _onTouchMove: function(e) {
    if (qi) {
      var r = this.options, n = r.fallbackTolerance, i = r.fallbackOffset, s = e.touches ? e.touches[0] : e, a = Se && Qs(Se, !0), o = Se && a && a.a, l = Se && a && a.d, u = vl && jt && cg(jt), f = (s.clientX - qi.clientX + i.x) / (o || 1) + (u ? u[0] - ef[0] : 0) / (o || 1), c = (s.clientY - qi.clientY + i.y) / (l || 1) + (u ? u[1] - ef[1] : 0) / (l || 1);
      if (!ge.active && !As) {
        if (n && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < n)
          return;
        this._onDragStart(e, !0);
      }
      if (Se) {
        a ? (a.e += f - (Jc || 0), a.f += c - (Qc || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: c
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ye(Se, "webkitTransform", h), ye(Se, "mozTransform", h), ye(Se, "msTransform", h), ye(Se, "transform", h), Jc = f, Qc = c, Vr = s;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Se) {
      var e = this.options.fallbackOnBody ? document.body : rt, r = Et(J, !0, vl, !0, e), n = this.options;
      if (vl) {
        for (jt = e; ye(jt, "position") === "static" && ye(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = yn()), r.top += jt.scrollTop, r.left += jt.scrollLeft) : jt = yn(), ef = cg(jt);
      }
      Se = J.cloneNode(!0), cr(Se, n.ghostClass, !1), cr(Se, n.fallbackClass, !0), cr(Se, n.dragClass, !0), ye(Se, "transition", ""), ye(Se, "transform", ""), ye(Se, "box-sizing", "border-box"), ye(Se, "margin", 0), ye(Se, "top", r.top), ye(Se, "left", r.left), ye(Se, "width", r.width), ye(Se, "height", r.height), ye(Se, "opacity", "0.8"), ye(Se, "position", vl ? "absolute" : "fixed"), ye(Se, "zIndex", "100000"), ye(Se, "pointerEvents", "none"), ge.ghost = Se, e.appendChild(Se), ye(Se, "transform-origin", fg / parseInt(Se.style.width) * 100 + "% " + hg / parseInt(Se.style.height) * 100 + "%");
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
    ir("setupClone", this), ge.eventCanceled || (at = M_(J), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), cr(at, this.options.chosenClass, !1), ge.clone = at), n.cloneId = ql(function() {
      ir("clone", n), !ge.eventCanceled && (n.options.removeCloneOnHide || rt.insertBefore(at, J), n._hideClone(), Xt({
        sortable: n,
        name: "clone"
      }));
    }), !r && cr(J, s.dragClass, !0), r ? (Nu = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (Ie(document, "mouseup", n._onDrop), Ie(document, "touchend", n._onDrop), Ie(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", s.setData && s.setData.call(n, i, J)), Ge(document, "drop", n), ye(J, "transform", "translateZ(0)")), As = !0, n._dragStartId = ql(n._dragStarted.bind(n, r, e)), Ge(document, "selectstart", n), ka = !0, Ya && ye(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var r = this.el, n = e.target, i, s, a, o = this.options, l = o.group, u = ge.active, f = gl === l, c = o.sort, h = kt || u, d, p = this, m = !1;
    if (rh)
      return;
    function g(K, Ce) {
      ir(K, p, Sn({
        evt: e,
        isOwner: f,
        axis: d ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: s,
        canSort: c,
        fromSortable: h,
        target: n,
        completed: v,
        onMove: function(dt, Rt) {
          return _l(rt, r, J, i, dt, Et(dt), e, Rt);
        },
        changed: b
      }, Ce));
    }
    function y() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState();
    }
    function v(K) {
      return g("dragOverCompleted", {
        insertion: K
      }), K && (f ? u._hideClone() : u._showClone(p), p !== h && (cr(J, kt ? kt.options.ghostClass : u.options.ghostClass, !1), cr(J, o.ghostClass, !0)), kt !== p && p !== ge.active ? kt = p : p === ge.active && kt && (kt = null), h === p && (p._ignoreWhileAnimating = n), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (n === J && !J.animated || n === r && !n.animated) && (Ls = null), !o.dragoverBubble && !e.rootEl && n !== document && (J.parentNode[pr]._isOutsideThisEl(e.target), !K && Hi(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function b() {
      fr = xr(J), ui = xr(J, o.draggable), Xt({
        sortable: p,
        name: "change",
        toEl: r,
        newIndex: fr,
        newDraggableIndex: ui,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = Ur(n, o.draggable, r, !0), g("dragOver"), ge.eventCanceled)
      return m;
    if (J.contains(e.target) || n.animated && n.animatingX && n.animatingY || p._ignoreWhileAnimating === n)
      return v(!1);
    if (Nu = !1, u && !o.disabled && (f ? c || (a = ct !== rt) : kt === this || (this.lastPutMode = gl.checkPull(this, u, J, e)) && l.checkPut(this, u, J, e))) {
      if (d = this._getDirection(e, n) === "vertical", i = Et(J), g("dragOverValid"), ge.eventCanceled)
        return m;
      if (a)
        return ct = rt, y(), this._hideClone(), g("revert"), ge.eventCanceled || (Xi ? rt.insertBefore(J, Xi) : rt.appendChild(J)), v(!0);
      var E = nd(r, o.draggable);
      if (!E || c3(e, d, this) && !E.animated) {
        if (E === J)
          return v(!1);
        if (E && r === e.target && (n = E), n && (s = Et(n)), _l(rt, r, J, i, n, s, e, !!n) !== !1)
          return y(), E && E.nextSibling ? r.insertBefore(J, E.nextSibling) : r.appendChild(J), ct = r, b(), v(!0);
      } else if (E && u3(e, d, this)) {
        var O = sa(r, 0, o, !0);
        if (O === J)
          return v(!1);
        if (n = O, s = Et(n), _l(rt, r, J, i, n, s, e, !1) !== !1)
          return y(), r.insertBefore(J, O), ct = r, b(), v(!0);
      } else if (n.parentNode === r) {
        s = Et(n);
        var N = 0, M, k = J.parentNode !== r, A = !i3(J.animated && J.toRect || i, n.animated && n.toRect || s, d), C = d ? "top" : "left", R = ug(n, "top", "top") || ug(J, "top", "top"), I = R ? R.scrollTop : void 0;
        Ls !== n && (M = s[C], Ja = !1, yl = !A && o.invertSwap || k), N = f3(e, n, s, d, A ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, yl, Ls === n);
        var Q;
        if (N !== 0) {
          var ve = xr(J);
          do
            ve -= N, Q = ct.children[ve];
          while (Q && (ye(Q, "display") === "none" || Q === Se));
        }
        if (N === 0 || Q === n)
          return v(!1);
        Ls = n, Za = N;
        var T = n.nextElementSibling, $ = !1;
        $ = N === 1;
        var z = _l(rt, r, J, i, n, s, e, $);
        if (z !== !1)
          return (z === 1 || z === -1) && ($ = z === 1), rh = !0, setTimeout(l3, 30), y(), $ && !T ? r.appendChild(J) : n.parentNode.insertBefore(J, $ ? T : n), R && O_(R, 0, I - R.scrollTop), ct = J.parentNode, M !== void 0 && !yl && (Wl = Math.abs(M - Et(n)[C])), b(), v(!0);
      }
      if (r.contains(J))
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
    var r = this.el, n = this.options;
    if (fr = xr(J), ui = xr(J, n.draggable), ir("drop", this, {
      evt: e
    }), ct = J && J.parentNode, fr = xr(J), ui = xr(J, n.draggable), ge.eventCanceled) {
      this._nulling();
      return;
    }
    As = !1, yl = !1, Ja = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), nh(this.cloneId), nh(this._dragStartId), this.nativeDraggable && (Ie(document, "drop", this), Ie(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ya && ye(document.body, "user-select", ""), ye(J, "transform", ""), e && (ka && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), Se && Se.parentNode && Se.parentNode.removeChild(Se), (rt === ct || kt && kt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), J && (this.nativeDraggable && Ie(J, "dragend", this), tf(J), J.style["will-change"] = "", ka && !As && cr(J, kt ? kt.options.ghostClass : this.options.ghostClass, !1), cr(J, this.options.chosenClass, !1), Xt({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), rt !== ct ? (fr >= 0 && (Xt({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: rt,
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
      fromEl: rt,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), kt && kt.save()) : fr !== js && fr >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), ge.active && ((fr == null || fr === -1) && (fr = js, ui = Ka), Xt({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ir("nulling", this), rt = J = ct = Se = Xi = at = Bl = di = qi = Vr = ka = fr = ui = js = Ka = Ls = Za = kt = gl = ge.dragged = ge.ghost = ge.clone = ge.active = null, Lu.forEach(function(e) {
      e.checked = !0;
    }), Lu.length = Jc = Qc = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        J && (this._onDragOver(e), o3(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], r, n = this.el.children, i = 0, s = n.length, a = this.options; i < s; i++)
      r = n[i], Ur(r, a.draggable, this.el, !1) && e.push(r.getAttribute(a.dataIdAttr) || d3(r));
    return e;
  },
  sort: function(e, r) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(s, a) {
      var o = i.children[a];
      Ur(o, this.options.draggable, i, !1) && (n[s] = o);
    }, this), r && this.captureAnimationState(), e.forEach(function(s) {
      n[s] && (i.removeChild(n[s]), i.appendChild(n[s]));
    }), r && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, r) {
    return Ur(e, r || this.options.draggable, this.el, !1);
  },
  option: function(e, r) {
    var n = this.options;
    if (r === void 0)
      return n[e];
    var i = Vo.modifyOption(this, e, r);
    typeof i < "u" ? n[e] = i : n[e] = r, e === "group" && L_(n);
  },
  destroy: function() {
    ir("destroy", this);
    var e = this.el;
    e[pr] = null, Ie(e, "mousedown", this._onTapStart), Ie(e, "touchstart", this._onTapStart), Ie(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Ie(e, "dragover", this), Ie(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Cu.splice(Cu.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!di) {
      if (ir("hideClone", this), ge.eventCanceled)
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
      if (ir("showClone", this), ge.eventCanceled)
        return;
      J.parentNode == rt && !this.options.group.revertClone ? rt.insertBefore(at, J) : Xi ? rt.insertBefore(at, Xi) : rt.appendChild(at), this.options.group.revertClone && this.animate(J, at), ye(at, "display", ""), di = !1;
    }
  }
};
function o3(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function _l(t, e, r, n, i, s, a, o) {
  var l, u = t[pr], f = u.options.onMove, c;
  return window.CustomEvent && !Kn && !Fo ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = r, l.draggedRect = n, l.related = i || e, l.relatedRect = s || Et(e), l.willInsertAfter = o, l.originalEvent = a, t.dispatchEvent(l), f && (c = f.call(u, l, a)), c;
}
function tf(t) {
  t.draggable = !1;
}
function l3() {
  rh = !1;
}
function u3(t, e, r) {
  var n = Et(sa(r.el, 0, r.options, !0)), i = T_(r.el, r.options, Se), s = 10;
  return e ? t.clientX < i.left - s || t.clientY < n.top && t.clientX < n.right : t.clientY < i.top - s || t.clientY < n.bottom && t.clientX < n.left;
}
function c3(t, e, r) {
  var n = Et(nd(r.el, r.options.draggable)), i = T_(r.el, r.options, Se), s = 10;
  return e ? t.clientX > i.right + s || t.clientY > n.bottom && t.clientX > n.left : t.clientY > i.bottom + s || t.clientX > n.right && t.clientY > n.top;
}
function f3(t, e, r, n, i, s, a, o) {
  var l = n ? t.clientY : t.clientX, u = n ? r.height : r.width, f = n ? r.top : r.left, c = n ? r.bottom : r.right, h = !1;
  if (!a) {
    if (o && Wl < u * i) {
      if (!Ja && (Za === 1 ? l > f + u * s / 2 : l < c - u * s / 2) && (Ja = !0), Ja)
        h = !0;
      else if (Za === 1 ? l < f + Wl : l > c - Wl)
        return -Za;
    } else if (l > f + u * (1 - i) / 2 && l < c - u * (1 - i) / 2)
      return h3(e);
  }
  return h = h || a, h && (l < f + u * s / 2 || l > c - u * s / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function h3(t) {
  return xr(J) < xr(t) ? 1 : -1;
}
function d3(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, r = e.length, n = 0; r--; )
    n += e.charCodeAt(r);
  return n.toString(36);
}
function p3(t) {
  Lu.length = 0;
  for (var e = t.getElementsByTagName("input"), r = e.length; r--; ) {
    var n = e[r];
    n.checked && Lu.push(n);
  }
}
function ql(t) {
  return setTimeout(t, 0);
}
function nh(t) {
  return clearTimeout(t);
}
oc && Ge(document, "touchmove", function(t) {
  (ge.active || As) && t.cancelable && t.preventDefault();
});
ge.utils = {
  on: Ge,
  off: Ie,
  css: ye,
  find: w_,
  is: function(e, r) {
    return !!Ur(e, r, e, !1);
  },
  extend: KI,
  throttle: x_,
  closest: Ur,
  toggleClass: cr,
  clone: M_,
  index: xr,
  nextTick: ql,
  cancelNextTick: nh,
  detectDirection: C_,
  getChild: sa
};
ge.get = function(t) {
  return t[pr];
};
ge.mount = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (ge.utils = Sn(Sn({}, ge.utils), n.utils)), Vo.mount(n);
  });
};
ge.create = function(t, e) {
  return new ge(t, e);
};
ge.version = zI;
var _t = [], Aa, ih, sh = !1, rf, nf, Pu, Da;
function m3() {
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
      this.sortable.nativeDraggable ? Ge(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ge(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? Ge(document, "touchmove", this._handleFallbackAutoScroll) : Ge(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var n = r.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : (Ie(document, "pointermove", this._handleFallbackAutoScroll), Ie(document, "touchmove", this._handleFallbackAutoScroll), Ie(document, "mousemove", this._handleFallbackAutoScroll)), pg(), Hl(), ZI();
    },
    nulling: function() {
      Pu = ih = Aa = sh = Da = rf = nf = null, _t.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, n) {
      var i = this, s = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, o = document.elementFromPoint(s, a);
      if (Pu = r, n || this.options.forceAutoScrollFallback || Fo || Kn || Ya) {
        sf(r, this.options, o, n);
        var l = gi(o, !0);
        sh && (!Da || s !== rf || a !== nf) && (Da && pg(), Da = setInterval(function() {
          var u = gi(document.elementFromPoint(s, a), !0);
          u !== l && (l = u, Hl()), sf(r, i.options, u, n);
        }, 10), rf = s, nf = a);
      } else {
        if (!this.options.bubbleScroll || gi(o, !0) === yn()) {
          Hl();
          return;
        }
        sf(r, this.options, gi(o, !1), !1);
      }
    }
  }, Wn(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Hl() {
  _t.forEach(function(t) {
    clearInterval(t.pid);
  }), _t = [];
}
function pg() {
  clearInterval(Da);
}
var sf = x_(function(t, e, r, n) {
  if (!!e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, o = e.scrollSpeed, l = yn(), u = !1, f;
    ih !== r && (ih = r, Hl(), Aa = e.scroll, f = e.scrollFn, Aa === !0 && (Aa = gi(r, !0)));
    var c = 0, h = Aa;
    do {
      var d = h, p = Et(d), m = p.top, g = p.bottom, y = p.left, v = p.right, b = p.width, E = p.height, O = void 0, N = void 0, M = d.scrollWidth, k = d.scrollHeight, A = ye(d), C = d.scrollLeft, R = d.scrollTop;
      d === l ? (O = b < M && (A.overflowX === "auto" || A.overflowX === "scroll" || A.overflowX === "visible"), N = E < k && (A.overflowY === "auto" || A.overflowY === "scroll" || A.overflowY === "visible")) : (O = b < M && (A.overflowX === "auto" || A.overflowX === "scroll"), N = E < k && (A.overflowY === "auto" || A.overflowY === "scroll"));
      var I = O && (Math.abs(v - i) <= a && C + b < M) - (Math.abs(y - i) <= a && !!C), Q = N && (Math.abs(g - s) <= a && R + E < k) - (Math.abs(m - s) <= a && !!R);
      if (!_t[c])
        for (var ve = 0; ve <= c; ve++)
          _t[ve] || (_t[ve] = {});
      (_t[c].vx != I || _t[c].vy != Q || _t[c].el !== d) && (_t[c].el = d, _t[c].vx = I, _t[c].vy = Q, clearInterval(_t[c].pid), (I != 0 || Q != 0) && (u = !0, _t[c].pid = setInterval(function() {
        n && this.layer === 0 && ge.active._onTouchMove(Pu);
        var T = _t[this.layer].vy ? _t[this.layer].vy * o : 0, $ = _t[this.layer].vx ? _t[this.layer].vx * o : 0;
        typeof f == "function" && f.call(ge.dragged.parentNode[pr], $, T, t, Pu, _t[this.layer].el) !== "continue" || O_(_t[this.layer].el, $, T);
      }.bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && h !== l && (h = gi(h, !1)));
    sh = u;
  }
}, 30), A_ = function(e) {
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
function id() {
}
id.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var r = e.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(e) {
    var r = e.dragEl, n = e.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = sa(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: A_
};
Wn(id, {
  pluginName: "revertOnSpill"
});
function sd() {
}
sd.prototype = {
  onSpill: function(e) {
    var r = e.dragEl, n = e.putSortable, i = n || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: A_
};
Wn(sd, {
  pluginName: "removeOnSpill"
});
ge.mount(new m3());
ge.mount(sd, id);
const D_ = 0.5, g3 = !1, ku = ys(
  "slider",
  () => {
    const t = vt(), e = be(D_), r = be(g3), n = pe(
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
function I_(t, e) {
  const { t: r } = Xe();
  function n() {
    e == null || e.emit("clickInfo", t);
  }
  return {
    t: r,
    onClickInfo: n
  };
}
const y3 = { class: "lux-layer-manager-item mt-2.5" }, v3 = ["title"], _3 = { class: "flex-1 text-left cursor-default" }, b3 = ["aria-label", "title"], E3 = /* @__PURE__ */ fe({
  __name: "layer-item-background",
  props: {
    showEditButton: { type: Boolean, required: !0 },
    layer: { type: Object, required: !0 }
  },
  emits: ["clickEdit", "clickInfo"],
  setup(t, { emit: e }) {
    const r = t, n = e, { t: i, onClickInfo: s } = I_(r.layer, { emit: n }), a = pe(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o()
      })
    );
    function o() {
      return i(r.layer.name, { ns: "client" });
    }
    return (l, u) => (P(), V("div", y3, [
      L("button", {
        class: "fa fa-info w-3",
        title: a.value,
        onClick: u[0] || (u[0] = (...f) => x(s) && x(s)(...f))
      }, null, 8, v3),
      L("span", _3, ae(o()), 1),
      l.showEditButton ? (P(), V("button", {
        key: 0,
        class: "fa fa-pencil",
        "aria-label": x(i)("Open editor panel", { ns: "client" }),
        title: x(i)("Open editor panel", { ns: "client" }),
        onClick: u[1] || (u[1] = (f) => l.$emit("clickEdit"))
      }, null, 8, b3)) : F("v-if", !0)
    ]));
  }
}), S3 = /* @__PURE__ */ he(E3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-background.vue"]]), w3 = ["id"], x3 = ["aria-checked", "title"], O3 = ["id", "value", "aria-label"], M3 = ["aria-checked", "aria-label"], T3 = /* @__PURE__ */ fe({
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
    const r = t, n = e, { t: i } = Xe(), s = Yr(), a = pe(
      () => i(s.getLayerCurrentLabel(r.layer), { ns: "client" })
    ), o = nt(
      ((p = (d = r.layer) == null ? void 0 : d.opacity) != null ? p : 1) * 100
    ), l = nt(
      ((g = (m = r.layer) == null ? void 0 : m.previousOpacity) != null ? g : o.value) * 100
    );
    function u() {
      o.value === 0 ? o.value = l.value : (l.value = o.value, o.value = 0), h();
    }
    function f(y) {
      y.target && (o.value = parseInt(y.target.value), h());
    }
    function c() {
      n("clickToggleLayerComparator", r.layer);
    }
    function h() {
      n("changeOpacity", r.layer, o.value);
    }
    return (y, v) => (P(), V("div", {
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
      }, null, 10, x3),
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
      }, null, 40, O3),
      y.displayLayerComparatorOpen ? (P(), V("button", {
        key: 0,
        role: "switch",
        class: ke(["fa ml-auto text-sm cursor-pointer", y.isLayerComparatorOpen ? "fa-adjust" : "fa-circle"]),
        "aria-checked": y.isLayerComparatorOpen,
        "aria-label": x(i)("Toggle layer comparator for {{ layerName }}", {
          layerName: a.value
        }),
        onClick: c
      }, null, 10, M3)) : F("v-if", !0)
    ], 10, w3));
  }
}), N3 = /* @__PURE__ */ he(T3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item-sub.vue"]]), C3 = ["min", "max", "value"], L3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker",
  props: {
    minDateAllowed: { type: String, required: !1, default: "" },
    maxDateAllowed: { type: String, required: !1, default: "" },
    dateValue: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = pe(() => jc(r.minDateAllowed)), s = pe(() => jc(r.maxDateAllowed));
    function a(o) {
      n("change", o.target.value);
    }
    return (o, l) => (P(), V("input", {
      class: "lux-time-datepicker",
      type: "date",
      min: i.value,
      max: s.value,
      value: o.dateValue ? x(jc)(o.dateValue) : "",
      onChange: a
    }, null, 40, C3));
  }
}), ah = /* @__PURE__ */ he(L3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker.vue"]]), P3 = { class: "lux-time-slider w-full" }, k3 = ["for"], A3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-value",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t) {
    const { t: e } = Xe(), r = t, n = nt(
      r.layer.currentTimeMinValue
    );
    return (i, s) => {
      var a, o;
      return P(), V("div", P3, [
        L("div", null, [
          L("label", {
            for: `${i.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, ae(x(e)("Date:")), 9, k3),
          ee(ah, {
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
}), D3 = /* @__PURE__ */ he(A3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-value.vue"]]), I3 = { class: "lux-time-slider w-full" }, R3 = ["for"], $3 = ["for"], F3 = /* @__PURE__ */ fe({
  __name: "layer-time-datepicker-range",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: r } = Xe(), n = t, i = e, s = nt(
      n.layer.currentTimeMinValue
    ), a = nt(
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
      return P(), V("div", I3, [
        F(" Date START datepicker input "),
        L("div", null, [
          L("label", {
            for: `${u.layer.id}-time-slider-start`,
            class: "lux-time-slider-label"
          }, ae(x(r)("From:")), 9, R3),
          ee(ah, {
            id: `${u.layer.id}-time-slider-start`,
            "date-value": s.value,
            "min-date-allowed": (c = n.layer.time) == null ? void 0 : c.minValue,
            "max-date-allowed": (h = n.layer.time) == null ? void 0 : h.maxValue,
            onChange: o
          }, null, 8, ["id", "date-value", "min-date-allowed", "max-date-allowed"])
        ]),
        F(" Date END datepicker input "),
        L("div", null, [
          L("label", {
            for: `${u.layer.id}-time-slider-end`,
            class: "lux-time-slider-label"
          }, ae(x(r)("To:")), 9, $3),
          ee(ah, {
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
}), V3 = /* @__PURE__ */ he(F3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-datepicker-range.vue"]]), j3 = ["onKeydown", "aria-label", "title"], G3 = /* @__PURE__ */ fe({
  __name: "slider-range-thumb",
  props: {
    ariaLabel: { type: String, required: !1 },
    maxLimit: { type: Number, required: !1, default: 100 },
    minLimit: { type: Number, required: !1, default: 0 },
    selectedValue: { type: Number, required: !0 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = be(!1), s = be(), a = be(), o = pe(() => {
      var b;
      return ((b = s.value) == null ? void 0 : b.offsetWidth) || 0;
    }), l = pe(() => {
      var b;
      return ((b = a.value) == null ? void 0 : b.offsetWidth) || 40;
    }), u = be(r.selectedValue), f = pe(() => o.value * u.value / 100 - l.value / 2), c = pe(() => ({ left: `${f.value}px` }));
    Li(() => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y);
    }), tt(
      () => r.selectedValue,
      (b) => {
        u.value = b;
      }
    );
    function h(b) {
      u.value = Math.max(Math.min(b, 100), 0), n("change", u.value, i.value);
    }
    function d() {
      h(u.value - 1);
    }
    function p() {
      h(u.value + 1);
    }
    function m() {
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
      return Math.round(Math.max(Math.min(E, r.maxLimit), r.minLimit));
    }
    return (b, E) => (P(), V("div", {
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
          on(an(p, ["stop"]), ["space"]),
          on(an(p, ["stop"]), ["right"]),
          on(an(d, ["stop"]), ["left"]),
          on(an(d, ["stop"]), ["delete"])
        ],
        onMousedown: m,
        onMousemove: g,
        onMouseup: y,
        "aria-label": b.ariaLabel,
        title: b.ariaLabel
      }, null, 46, j3)
    ], 512));
  }
}), mg = /* @__PURE__ */ he(G3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/slider-range/slider-range-thumb.vue"]]), U3 = /* @__PURE__ */ fe({
  __name: "slider-range-active-track",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = be(), s = be(), a = pe(
      () => i.value ? Math.round(
        i.value.offsetWidth * r.selectedMinValue / 100
      ) : 0
    ), o = pe(() => {
      var c, h;
      let f = 0;
      return r.selectedMaxValue !== void 0 && ((c = i.value) == null ? void 0 : c.offsetWidth) && (f = ((h = i.value) == null ? void 0 : h.offsetWidth) * r.selectedMaxValue / 100 - a.value), Math.round(f);
    }), l = pe(() => ({
      left: `${a.value}px`,
      width: `${o.value}px`
    }));
    function u(f) {
      if (i.value) {
        const c = i.value.getBoundingClientRect().x, h = (f.clientX - c) * 100 / i.value.offsetWidth;
        n("change", h);
      }
    }
    return (f, c) => (P(), V("div", {
      ref_key: "elRefFullTrack",
      ref: i,
      class: "lux-slidebar-track"
    }, [
      f.selectedMaxValue !== void 0 ? (P(), V("div", {
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
}), B3 = /* @__PURE__ */ he(U3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/slider-range/slider-range-active-track.vue"]]), W3 = { class: "lux-slidebar-fake" }, q3 = /* @__PURE__ */ fe({
  __name: "slider-range",
  props: {
    selectedMinValue: { type: Number, required: !0 },
    selectedMaxValue: { type: Number, required: !1 },
    ariaLabelMin: { type: String, required: !1 },
    ariaLabelMax: { type: String, required: !1 }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = be(r.selectedMinValue), s = be(r.selectedMaxValue);
    function a(u, f) {
      n("change", u, r.selectedMaxValue, f);
    }
    function o(u, f) {
      n("change", r.selectedMinValue, u, f);
    }
    function l(u) {
      s.value === void 0 ? i.value = u : u >= s.value ? s.value = u : u <= r.selectedMinValue ? i.value = u : Math.abs(s.value - u) < Math.abs(i.value - u) ? s.value = u : i.value = u, n("change", i.value, s.value, !1);
    }
    return (u, f) => (P(), V("div", W3, [
      F(" Draggable Max thumb button "),
      s.value !== void 0 ? (P(), Fe(mg, {
        key: 0,
        ariaLabel: u.ariaLabelMax,
        minLimit: u.selectedMinValue,
        selectedValue: s.value,
        onChange: o
      }, null, 8, ["ariaLabel", "minLimit", "selectedValue"])) : F("v-if", !0),
      F(" Draggable Min thumb button "),
      F(" put Min value after Max value, this is just for z-index grabbing "),
      ee(mg, {
        ariaLabel: u.ariaLabelMin,
        maxLimit: u.selectedMaxValue,
        selectedValue: i.value,
        onChange: a
      }, null, 8, ["ariaLabel", "maxLimit", "selectedValue"]),
      F(" Selection highlight "),
      ee(B3, {
        selectedMinValue: u.selectedMinValue,
        selectedMaxValue: u.selectedMaxValue,
        onChange: l
      }, null, 8, ["selectedMinValue", "selectedMaxValue"])
    ]));
  }
}), gg = /* @__PURE__ */ he(q3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/common/slider-range/slider-range.vue"]]), H3 = { class: "lux-time-slider w-full" }, z3 = {
  key: 0,
  class: "lux-time-slider-value mr-1.5"
}, Y3 = {
  key: 1,
  class: "lux-time-slider-range mr-1.5"
}, X3 = { class: "lux-time-displayed-dates" }, K3 = {
  key: 0,
  class: "lux-time-start-date grow"
}, Z3 = {
  key: 1,
  class: "lux-time-slider-end-date grow text-right"
}, J3 = /* @__PURE__ */ fe({
  __name: "layer-time-slider",
  props: {
    layer: { type: Object, required: !0 }
  },
  emits: ["changeTime"],
  setup(t, { emit: e }) {
    const { t: r } = Xe(), n = t, i = e, s = pe(g), a = pe(
      () => {
        var E, O;
        return (E = n.layer.time) != null && E.minValue ? new Date((O = n.layer.time) == null ? void 0 : O.minValue).getTime() : 0;
      }
    ), o = pe(
      () => {
        var E, O;
        return (E = n.layer.time) != null && E.maxValue ? new Date((O = n.layer.time) == null ? void 0 : O.maxValue).getTime() : 0;
      }
    ), l = pe(() => o.value - a.value), u = be(n.layer.currentTimeMaxValue), f = be(n.layer.currentTimeMinValue), c = pe(
      () => f.value ? new Date(f.value).getTime() : void 0
    ), h = pe(
      () => u.value ? new Date(u.value).getTime() : void 0
    ), d = pe(
      () => m(c.value)
    ), p = pe(
      () => m(h.value)
    );
    function m(E) {
      return E ? (E - a.value) / l.value * 100 : 0;
    }
    function g() {
      var R, I;
      const E = n.layer.time, O = [];
      if (!E)
        return;
      if (E.values)
        return E.values.map((Q) => new Date(Q).getTime());
      const N = new Date(E.minValue), M = new Date((R = E.maxValue) != null ? R : Date.now()), k = 1024, A = new Date(N.getTime()), C = (I = E.interval) != null ? I : H0;
      if (A.setFullYear(
        N.getFullYear() + k * C[0]
      ), A.setMonth(
        N.getMonth() + k * C[1],
        N.getDate() + k * C[2]
      ), A.setSeconds(N.getSeconds() + k * C[3]), A > M)
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
      const O = E / 100 * (o.value - a.value) + a.value, N = CL(O, {
        minValue: a.value,
        maxValue: o.value,
        timeValueList: s.value,
        timeInterval: (M = n.layer.time) == null ? void 0 : M.interval
      });
      return Xf(N);
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
      var N, M, k, A, C, R, I;
      return P(), V("div", H3, [
        F(" Slider LayerTimeMode.VALUE "),
        ((N = E.layer.time) == null ? void 0 : N.mode) === x(In).VALUE ? (P(), V("div", z3, [
          ee(gg, {
            ariaLabelMin: `${x(r)("Modifier la date de d\xE9but", { ns: "client" })}`,
            selectedMinValue: d.value,
            onChange: b
          }, null, 8, ["ariaLabelMin", "selectedMinValue"])
        ])) : F("v-if", !0),
        F(" Slider LayerTimeMode.RANGE "),
        ((M = E.layer.time) == null ? void 0 : M.mode) === x(In).RANGE ? (P(), V("div", Y3, [
          ee(gg, {
            ariaLabelMin: `${x(r)("Modifier la date de d\xE9but", { ns: "client" })}`,
            ariaLabelMax: `${x(r)("Modifier la date de fin", { ns: "client" })}`,
            selectedMinValue: d.value,
            selectedMaxValue: p.value,
            onChange: b
          }, null, 8, ["ariaLabelMin", "ariaLabelMax", "selectedMinValue", "selectedMaxValue"])
        ])) : F("v-if", !0),
        F(" Display localized time values "),
        L("div", X3, [
          F(" Display localized time values Min value "),
          ((k = E.layer.time) == null ? void 0 : k.mode) === x(In).RANGE || ((A = E.layer.time) == null ? void 0 : A.mode) === x(In).VALUE ? (P(), V("div", K3, [
            L("span", null, ae(f.value ? x(jm)(f.value, (C = E.layer.time) == null ? void 0 : C.resolution) : "-"), 1)
          ])) : F("v-if", !0),
          F(" Display localized time values Max value "),
          ((R = E.layer.time) == null ? void 0 : R.mode) === x(In).RANGE ? (P(), V("div", Z3, [
            L("span", null, ae(u.value ? x(jm)(u.value, (I = E.layer.time) == null ? void 0 : I.resolution) : "-"), 1)
          ])) : F("v-if", !0)
        ])
      ]);
    };
  }
}), Q3 = /* @__PURE__ */ he(J3, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time-slider.vue"]]), eR = /* @__PURE__ */ fe({
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
      return P(), V(Ue, null, [
        F(" Layer time: slider widget "),
        ((a = i.layer.time) == null ? void 0 : a.widget) === x(Fl).SLIDER ? (P(), Fe(Q3, {
          key: 0,
          layer: i.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(" Layer time: datepicker VALUE (one date) widget "),
        ((o = i.layer.time) == null ? void 0 : o.widget) === x(Fl).DATEPICKER && ((l = i.layer.time) == null ? void 0 : l.mode) === x(In).VALUE ? (P(), Fe(D3, {
          key: 1,
          layer: i.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : F("v-if", !0),
        F(' Layer time: datepicker RANGE ("from:" date - "to:" date) widget '),
        ((u = i.layer.time) == null ? void 0 : u.widget) === x(Fl).DATEPICKER && ((f = i.layer.time) == null ? void 0 : f.mode) === x(In).RANGE ? (P(), Fe(V3, {
          key: 2,
          layer: i.layer,
          onChangeTime: n
        }, null, 8, ["layer"])) : F("v-if", !0)
      ], 64);
    };
  }
}), tR = /* @__PURE__ */ he(eR, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-time/layer-time.vue"]]), rR = { class: "lux-layer-manager-item relative" }, nR = { class: "w-full flex flex-nowrap items-start gap-x-2" }, iR = ["title"], sR = ["aria-label", "title"], aR = ["aria-expanded", "aria-controls", "data-cy"], oR = { class: "grow" }, lR = ["title", "aria-label"], uR = /* @__PURE__ */ fe({
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
    const r = t, n = e, { t: i, onClickInfo: s } = I_(r.layer, { emit: n }), a = Yr(), o = pe(
      () => i(a.getLayerCurrentLabel(r.layer), { ns: "client" })
    ), l = pe(
      () => i('Sort "{{layerName}}" in the list', {
        ns: "client",
        layerName: o.value
      })
    ), u = pe(
      () => i('Display informations for "{{layerName}}"', {
        ns: "client",
        layerName: o.value
      })
    ), f = pe(
      () => i('Remove layer "{{layerName}}"', {
        ns: "client",
        layerName: o.value
      })
    );
    function c(h, d) {
      n("changeTime", h, d);
    }
    return (h, d) => (P(), V("div", rR, [
      L("div", nR, [
        L("button", {
          class: ke(["fa-solid fa-bars cursor-move mt-1", h.dragHandleClassName]),
          title: l.value
        }, null, 10, iR),
        L("button", {
          class: "fa-solid fa-info mt-1",
          "aria-label": u.value,
          title: u.value,
          onClick: d[0] || (d[0] = (...p) => x(s) && x(s)(...p))
        }, null, 8, sR),
        L("button", {
          "aria-expanded": h.isOpen,
          "aria-controls": `layer-manager-item-content-${h.layer.id}`,
          "data-cy": `myLayerItemLabel-${h.layer.id}`,
          class: ke([h.is3d ? "cursor-default" : "", "grow text-left break-words w-[70%] flex items-center"]),
          onClick: d[1] || (d[1] = (p) => h.$emit("clickToggle", h.layer))
        }, [
          L("span", oR, ae(o.value), 1),
          h.is3d ? F("v-if", !0) : (P(), V("span", {
            key: 0,
            class: ke(["w-3.5 fa-solid", h.isOpen ? "fa-xmark" : "fa-ellipsis"]),
            "aria-hidden": "true"
          }, null, 2))
        ], 10, aR),
        L("button", {
          class: "mt-1 fa-regular fa-trash-can",
          title: f.value,
          "aria-label": f.value,
          onClick: d[2] || (d[2] = (p) => h.$emit("clickRemove", h.layer))
        }, null, 8, lR)
      ]),
      F(" Layer item sub content (opacity and toggle comparator) "),
      h.is3d ? F("v-if", !0) : (P(), Fe(N3, {
        key: 0,
        layer: h.layer,
        isOpen: h.isOpen,
        isLayerComparatorOpen: h.isLayerComparatorOpen,
        displayLayerComparatorOpen: h.displayLayerComparatorOpen,
        onClickToggleLayerComparator: d[3] || (d[3] = (p) => h.$emit("clickToggleLayerComparator", p)),
        onChangeOpacity: d[4] || (d[4] = (p, m) => h.$emit("changeOpacity", p, m))
      }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen"])),
      F(" Layer time: slider OR datepicker widgets "),
      h.layer.time ? (P(), Fe(tR, {
        key: 1,
        layer: h.layer,
        onChangeTime: c
      }, null, 8, ["layer"])) : F("v-if", !0)
    ]));
  }
}), yg = /* @__PURE__ */ he(uR, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-item/layer-item.vue"]]), cR = {
  key: 0,
  class: "mb-4 sortable-layers-3d"
}, fR = ["id"], hR = { class: "sortable-layers" }, dR = ["id"], pR = { class: "flex flex-row justify-center space-x-1 my-2" }, af = "drag-handle", mR = /* @__PURE__ */ fe({
  __name: "layer-manager",
  emits: ["displayCatalog"],
  setup(t, { emit: e }) {
    const { t: r } = Xe(), { setMetadataId: n } = Kh(), i = vt(), s = wt(), a = ki(), o = ku(), { bgLayer: l } = He(i), { sliderActive: u } = He(o), f = pe(() => [...i.layers].reverse()), c = pe(() => [...i.layers3d].reverse()), h = nt(), d = pe(
      () => a.isLayerStyleEditable(l.value)
    ), p = e, { setRemoteLayersOpen: m } = wt();
    vr(() => {
      const k = {
        dragClass: "lux-sortable-drag",
        ghostClass: "lux-sortable-ghost",
        sort: !0,
        handle: `.${af}`,
        forceFallback: $L
      }, A = document.querySelector(".sortable-layers"), C = document.querySelector(".sortable-layers-3d");
      A && ge.create(A, {
        ...k,
        onSort: g
      }), C && ge.create(C, {
        ...k,
        onSort: y
      });
    });
    function g(k, A) {
      const C = [...k.to.children].map((R) => Number(R.id)).reverse();
      i.reorderLayers(C, A);
    }
    function y(k) {
      g(k, !0);
    }
    function v(k, A) {
      i.setLayerOpacity(k.id, A / 100);
    }
    function b(k, A, C) {
      i.setLayerTime(k.id, A, C);
    }
    function E(k) {
      i.removeLayers(k.id);
    }
    function O(k) {
      h.value = h.value !== k.id ? k.id : void 0;
    }
    function N() {
      s.openStyleEditorPanel();
    }
    function M() {
      o.toggleSlider();
    }
    return (k, A) => (P(), V("div", null, [
      c.value.length > 0 ? (P(), V("ul", cR, [
        (P(!0), V(Ue, null, Pr(c.value, (C, R) => (P(), V("li", {
          key: C.id,
          id: C.id
        }, [
          ee(yg, {
            is3d: !0,
            dragHandleClassName: af,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: x(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: O,
            onClickToggleLayerComparator: M,
            onClickInfo: (I) => x(n)(C.id),
            onChangeOpacity: v,
            onChangeTime: (I, Q) => b(C, I, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, fR))), 128))
      ])) : F("v-if", !0),
      L("ul", hR, [
        (P(!0), V(Ue, null, Pr(f.value, (C, R) => (P(), V("li", {
          key: C.id,
          id: C.id
        }, [
          ee(yg, {
            is3d: !1,
            dragHandleClassName: af,
            layer: C,
            isOpen: h.value === C.id,
            isLayerComparatorOpen: x(u),
            displayLayerComparatorOpen: R === 0,
            onClickRemove: E,
            onClickToggle: O,
            onClickToggleLayerComparator: M,
            onClickInfo: (I) => x(n)(C.id),
            onChangeOpacity: v,
            onChangeTime: (I, Q) => b(C, I, Q)
          }, null, 8, ["layer", "isOpen", "isLayerComparatorOpen", "displayLayerComparatorOpen", "onClickInfo", "onChangeTime"])
        ], 8, dR))), 128))
      ]),
      ee(S3, {
        layer: x(l) || x(xu),
        showEditButton: d.value,
        onClickInfo: A[0] || (A[0] = () => x(l) && x(n)(x(l).id)),
        onClickEdit: N
      }, null, 8, ["layer", "showEditButton"]),
      L("div", pR, [
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: A[1] || (A[1] = (C) => p("displayCatalog"))
        }, ae(x(r)("+ Add layers", { ns: "client" })), 1),
        L("button", {
          class: "bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5",
          onClick: A[2] || (A[2] = (C) => x(m)(!0))
        }, ae(x(r)("+ Add external Wms", { ns: "client" })), 1)
      ])
    ]));
  }
}), gR = /* @__PURE__ */ he(mR, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-manager/layer-manager.vue"]]), yR = { class: "flex flex-col h-full pt-1.5" }, vR = { class: "h-16 shrink-0 flex justify-between lux-panel-title" }, _R = ["aria-label"], bR = { class: "flex flex-row gap-2 h-10 text-2xl" }, ER = ["aria-expanded"], SR = { key: 0 }, wR = ["aria-expanded"], xR = { class: "relative grow p-2.5 bg-primary overflow-auto" }, OR = /* @__PURE__ */ fe({
  __name: "layer-panel",
  setup(t) {
    const { t: e } = Xe(), r = wt(), { setLayersOpen: n } = r, { myLayersTabOpen: i } = He(r), { layers: s } = He(vt());
    function a() {
      r.setMyLayersTabOpen(!0);
    }
    function o() {
      r.setMyLayersTabOpen(!1);
    }
    return (l, u) => (P(), V("div", yR, [
      F(" Panel title and close button "),
      L("div", vR, [
        L("h1", null, ae(x(e)("layers", { ns: "client" })), 1),
        L("span", null, [
          L("button", {
            onClick: u[0] || (u[0] = () => x(n)(!1)),
            "aria-label": x(e)("Close", { ns: "client" }),
            class: "fa-sharp fa-solid fa-close"
          }, null, 8, _R)
        ])
      ]),
      F(" My Layers and Catalog tab labels "),
      L("div", bR, [
        L("button", {
          onClick: a,
          class: ke(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", x(i) ? "bg-primary" : "bg-tertiary"]),
          "aria-expanded": x(i)
        }, [
          no(ae(x(e)("my_layers", { ns: "client" })) + " ", 1),
          x(s).length ? (P(), V("span", SR, "(" + ae(x(s).length) + ")", 1)) : F("v-if", !0)
        ], 10, ER),
        L("button", {
          onClick: o,
          class: ke(["text-white px-4 hover:bg-primary cursor-pointer text-center uppercase", x(i) ? "bg-tertiary" : "bg-primary"]),
          "aria-expanded": !x(i)
        }, ae(x(e)("Catalog", { ns: "client" })), 11, wR)
      ]),
      F(" Panel content (MyLayers and Catalog) "),
      L("div", xR, [
        x(i) ? (P(), Fe(gR, {
          key: 0,
          onDisplayCatalog: o
        })) : F("v-if", !0),
        x(i) ? F("v-if", !0) : (P(), Fe(BI, { key: 1 }))
      ])
    ]));
  }
}), MR = /* @__PURE__ */ he(OR, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/layer-panel/layer-panel.vue"]]);
class TR {
  bootstrap() {
    let e;
    e = yr(() => {
      this.restore(), this.persist(), e && e();
    });
  }
  persist() {
    const e = ku();
    tt(
      [() => e.sliderActive, () => e.sliderRatio],
      ([r, n], [i]) => {
        r !== i && Ne.setValue(Zf, r), Ne.setValue(
          Jf,
          n
        );
      }
    );
  }
  restore() {
    const e = Ne.getValue(Zf, Xh), r = Ne.getValue(Jf, Ks), { toggleSlider: n, setRatio: i } = ku();
    typeof e < "u" && e !== null && (n(e), typeof r !== void 0 && r !== null && i(r != null ? r : D_));
  }
}
const NR = new TR(), CR = ["onKeydown"], LR = /* @__PURE__ */ L("span", { class: "lux-slider-line" }, null, -1), PR = /* @__PURE__ */ L("span", { class: "lux-slider-arrows" }, [
  /* @__PURE__ */ L("span"),
  /* @__PURE__ */ L("span")
], -1), kR = {
  key: 0,
  class: "lux-slider-layer-label"
}, AR = /* @__PURE__ */ L("i", { class: "fa fa-arrow-left mr-2" }, null, -1), vg = 30, DR = /* @__PURE__ */ fe({
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
    const n = t, i = r, { t: s } = Xe(), a = be(null), o = pe(() => ({ left: `${n.sliderOffset}px` }));
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
      u(g + vg);
    }
    function p() {
      const g = n.containerOffset + a.value.offsetLeft;
      u(g - vg);
    }
    function m() {
      i("escSplitBar");
    }
    return vr(() => {
      var g;
      (g = a.value) == null || g.focus({ focusVisible: !0 });
    }), Li(() => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h);
    }), (g, y) => (P(), V("button", {
      ref_key: "sliderElement",
      ref: a,
      onMousedown: f,
      onMousemove: c,
      onMouseup: h,
      onKeydown: [
        on(an(d, ["stop"]), ["space"]),
        on(an(d, ["stop"]), ["right"]),
        on(an(p, ["stop"]), ["left"]),
        on(an(p, ["stop"]), ["delete"]),
        on(an(m, ["stop"]), ["esc"])
      ],
      class: "left-[20px] absolute h-full w-[32px] block",
      style: Ci(o.value),
      role: "seperator",
      "aria-controls": "map-container"
    }, [
      LR,
      PR,
      g.sliderTopLayer ? (P(), V("span", kR, [
        AR,
        L("span", null, ae(x(s)(g.sliderTopLayer.name)), 1)
      ])) : F("v-if", !0)
    ], 44, CR));
  }
}), IR = /* @__PURE__ */ he(DR, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/slider/splitter-element.vue"]]), RR = /* @__PURE__ */ fe({
  __name: "slider-comparator",
  setup(t) {
    const e = ku(), r = i_(), n = Fn().olMap, i = be(null), { sliderActive: s, sliderRatio: a, sliderTopLayer: o } = He(e), l = pe(
      () => {
        var v, b;
        return ((b = (v = i.value) == null ? void 0 : v.sliderElement) == null ? void 0 : b.offsetWidth) || 0;
      }
    ), u = function() {
      var b, E, O;
      let v = (O = (E = (b = n.value) == null ? void 0 : b.getViewport()) == null ? void 0 : E.parentElement) == null ? void 0 : O.offsetLeft;
      return (v === void 0 || v === 0) && (v = d == null ? void 0 : d.offsetLeft), v !== void 0 ? v : 0;
    }, f = pe(() => {
      var v, b;
      return n.value && i.value ? a.value * n.value.getSize()[0] - ((b = (v = i.value) == null ? void 0 : v.sliderElement) == null ? void 0 : b.offsetWidth) / 2 : 0;
    });
    let c, h, d;
    NR.bootstrap(), tt([o, s], ([v, b], [E]) => {
      var O;
      v && b ? (v !== E && m(), p()) : m(), (O = n.value) == null || O.render();
    }), tt(f, () => {
      var v;
      (v = n.value) == null || v.render();
    });
    function p() {
      const v = r.getLayerFromCache(o.value);
      !v || (c = v.on(
        bd.PRERENDER,
        function(b) {
          var R;
          const E = b.context, O = (R = n.value) == null ? void 0 : R.getSize(), N = f.value + l.value / 2, M = Uo(b, [0, 0]), k = Uo(b, [N, 0]), A = Uo(b, [0, O[1]]), C = Uo(b, [N, O[1]]);
          E.save(), E.beginPath(), E.moveTo(M[0], M[1]), E.lineTo(A[0], A[1]), E.lineTo(C[0], C[1]), E.lineTo(k[0], k[1]), E.closePath(), E.clip();
        }
      ), h = v.on(
        bd.POSTRENDER,
        function(b) {
          b.context.restore();
        }
      ));
    }
    function m() {
      gb([c, h]);
    }
    function g(v) {
      var O;
      const b = (O = n.value) == null ? void 0 : O.getSize(), E = (v - u()) / b[0];
      e.setRatio(E);
    }
    function y() {
      e.toggleSlider();
    }
    return vr(() => {
      var v, b;
      d = (b = (v = n.value) == null ? void 0 : v.getTargetElement()) == null ? void 0 : b.closest(".map-wrapper");
    }), Li(() => {
      m();
    }), (v, b) => x(o) && x(s) ? (P(), Fe(IR, {
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
}), $R = /* @__PURE__ */ he(RR, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/slider/slider-comparator.vue"]]), bl = "-", of = ",", _g = "--";
class FR {
  constructor() {
    Qe(this, "layersOpacitiesToNumbersV2", (e) => this.layersOpacitiesToNumbers(e, of));
  }
  layerTimesToStrings(e) {
    return e ? e.split(_g) : [];
  }
  layerIdsToLayers(e) {
    const r = os(), n = Yr();
    return (e ? e.split(bl) : []).map((s) => {
      const a = po.isRemoteLayer(s) ? Ak(s) : r.findById(parseInt(s, 10));
      return a ? n.initLayer(a) : void 0;
    });
  }
  layerNamesToLayersV2(e) {
    const r = os(), n = Yr();
    return (e ? e.split(of) : []).map((s) => {
      const a = r.findByName(s);
      return a ? n.initLayer(a) : void 0;
    });
  }
  layersOpacitiesToNumbers(e, r = bl) {
    return IL(e, r);
  }
  layersVisibilitiesToBooleansV2(e) {
    return RL(e, of);
  }
  layersToLayerIds(e) {
    return (e == null ? void 0 : e.map((r) => r.id).join(bl)) || "";
  }
  layersToLayerOpacities(e) {
    return (e == null ? void 0 : e.map((r) => {
      var n;
      return (n = r.opacity) != null ? n : 1;
    }).join(bl)) || "";
  }
  layersToLayerTimes(e) {
    return (e == null ? void 0 : e.map((r) => {
      var n;
      return (n = Yr().getLayerCurrentTime(r)) != null ? n : "";
    }).join(_g)) || "";
  }
  bgLayerNameToBgLayer(e) {
    const r = os();
    return e ? r.findBgLayerByName(e) : null;
  }
  bgLayerToBgLayerName(e) {
    return (e == null ? void 0 : e.name) || xu.name;
  }
}
const dr = new FR(), VR = "basemap_2015_global", jR = "orthogr_2013_global", GR = {
  webbasemap: "basemap_2015_global",
  "pixelmaps-color": "topogr_global",
  "pixelmaps-gray": "topo_bw_jpeg",
  streets: "streets_jpeg",
  voidlayer: "blank"
};
class UR {
  bootstrap() {
    const e = Zt();
    let r;
    r = yr(() => {
      e.bgLayers.length > 0 && (this.restore(), this.persist(), r && r());
    });
  }
  persist() {
    const e = vt(), { bgLayer: r } = He(e);
    tt(
      r,
      (n, i) => {
        i !== n && Ne.setValue(
          qm,
          n,
          dr.bgLayerToBgLayerName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const { setMapBackground: e } = s_(), r = this.getBgLayerFromStorage();
    e(r);
  }
  getBgLayerFromStorage() {
    const e = Ne.getInitialVersion(), r = Ne.getValue(qm);
    return r ? e === 2 ? this.getBgLayerFromStorageV2(r) : dr.bgLayerNameToBgLayer(r) : dr.bgLayerNameToBgLayer(VR);
  }
  getBgLayerFromStorageV2(e) {
    const r = Ne.getValue(
      X0,
      Ks
    );
    let n = "";
    return e ? n = GR[e] : r === 0 && (n = jR), dr.bgLayerNameToBgLayer(n);
  }
}
const BR = new UR();
class WR {
  bootstrap() {
    const e = Zt();
    let r;
    r = yr(() => {
      e.themes && (this.restore(), this.persist(), r && r());
    });
  }
  persist() {
    const e = vt(), { layers: r } = He(e);
    tt(
      r,
      (n, i) => {
        i !== n && (Ne.setValue(
          Wm,
          n,
          dr.layersToLayerIds
        ), Ne.setValue(
          Hm,
          n,
          dr.layersToLayerOpacities
        ), Ne.setValue(
          zm,
          n,
          dr.layersToLayerTimes
        ));
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getInitialVersion(), r = vt(), n = Ne.getValue(
      Wm,
      e === 2 ? dr.layerNamesToLayersV2 : dr.layerIdsToLayers
    );
    this.restoreLayersOpacities(n, e), this.restoreLayersTimes(n), e === 2 && (Ne.removeItem(X0), Ne.removeItem(BL), Ne.removeItem(Zm), Ne.removeItem(Jm)), r.addLayers(...(n == null ? void 0 : n.filter((i) => i)) || []);
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
      zm,
      dr.layerTimesToStrings
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
      Hm,
      dr.layersOpacitiesToNumbers
    );
  }
  getOpacitiesFromStorageV2() {
    const e = Ne.getValue(
      Zm,
      dr.layersOpacitiesToNumbersV2
    ), r = Ne.getValue(
      Jm,
      dr.layersVisibilitiesToBooleansV2
    );
    return e.map((n, i) => r[i] ? n : 0);
  }
}
const qR = new WR();
class HR {
  themeToThemeName(e) {
    return (e == null ? void 0 : e.name) || "";
  }
}
const zR = new HR();
class YR {
  bootstrap() {
    this.restore();
    let e;
    e = yr(() => {
      this.persist(), e && e();
    });
  }
  persist() {
    const e = Zt();
    tt(
      () => e.theme,
      (r, n) => {
        n !== r && r && Ne.setValue(
          fo,
          r,
          zR.themeToThemeName
        );
      },
      { immediate: !0 }
    );
  }
  restore() {
    const e = Ne.getValue(fo);
    if (e) {
      const { setTheme: r } = Zt();
      r(e);
    }
  }
}
const XR = new YR();
class KR {
  bootstrapLayersOpen() {
    this.restoreLayersOpen();
    let e;
    e = yr(() => {
      this.persistLayersOpen(), e && e();
    });
  }
  persistLayersOpen() {
    const e = wt(), { layersOpen: r } = He(e);
    tt(
      r,
      (n, i) => {
        i !== n && Ne.setValue(Eu, n);
      },
      { immediate: !0 }
    );
  }
  restoreLayersOpen() {
    const e = Ne.getValue(Eu) !== "false", { setLayersOpen: r } = wt();
    r(e);
  }
}
const ZR = new KR();
class JR {
  bootstrap() {
    this.restore();
    let e;
    e = yr(() => {
      this.persist(), e && e();
    });
  }
  persist() {
  }
  restore() {
    const e = Ne.getValue(jL);
    wt().setMapId(e);
  }
}
const QR = new JR(), e4 = /* @__PURE__ */ fe({
  __name: "simple-style-item",
  props: {
    styleName: { type: String, required: !0 },
    colors: { type: Array, required: !0 }
  },
  setup(t) {
    const e = t;
    return (r, n) => (P(!0), V(Ue, null, Pr(e.colors, (i, s) => (P(), V("span", {
      key: `${r.styleName}-${s}`,
      class: "grow m-px",
      style: Ci(`background-color: ${i}`)
    }, " \xA0 ", 4))), 128));
  }
}), t4 = /* @__PURE__ */ he(e4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/simple-style-item.vue"]]), r4 = { class: "text-white border-2 p-[10px] m-[10px]" }, n4 = { class: "text-center mb-3" }, i4 = ["title"], s4 = { class: "text-white" }, a4 = ["title", "onClick"], o4 = { class: "flex" }, l4 = /* @__PURE__ */ fe({
  __name: "simple-style-selector",
  setup(t) {
    const { t: e } = Xe(), r = Xr(), n = ki(), { bgStyle: i } = He(r), s = Vn().simple_styles.road, a = be(s);
    tt(
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
    return (l, u) => (P(), V("div", r4, [
      F(" TODO: create clean container for simple and advanced style editors "),
      L("h5", n4, ae(x(e)("Select a style", { ns: "client" })), 1),
      (P(!0), V(Ue, null, Pr(a.value, (f) => (P(), V("div", {
        key: f.unlocalized_label,
        title: x(e)(f.unlocalized_label, { ns: "client" }),
        class: ke(`${f.selected ? "border-dotted" : "border-hidden"} border-2 p-px`)
      }, [
        L("span", s4, ae(x(e)(f.unlocalized_label, { ns: "client" })) + " : ", 1),
        L("button", {
          title: x(e)("Select style: {{styleName}}", {
            styleName: x(e)(f.unlocalized_label)
          }),
          onClick: (c) => o(f),
          class: "w-full"
        }, [
          L("span", o4, [
            ee(t4, {
              colors: f.colors,
              "style-name": f.unlocalized_label
            }, null, 8, ["colors", "style-name"])
          ])
        ], 8, a4)
      ], 10, i4))), 128))
    ]));
  }
}), u4 = /* @__PURE__ */ he(l4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/simple-style-selector.vue"]]);
function c4(t) {
  const e = f4(t);
  return !e || !e.medium_style_class ? [] : Vn().medium_default_styles[e.medium_style_class];
}
function f4(t) {
  return Vn().bg_layers.find((e) => e.id == (t == null ? void 0 : t.id));
}
const h4 = { class: "flex w-full items-center" }, d4 = {
  for: "colorId",
  class: "w-40 m-0 font-medium"
}, p4 = { class: "grow" }, m4 = ["value"], g4 = ["checked", "aria-label"], y4 = /* @__PURE__ */ fe({
  __name: "medium-style-item",
  props: {
    style: { type: Object, required: !0 },
    colorEditable: { type: Boolean, required: !0 }
  },
  emits: ["changeStyle"],
  setup(t, { emit: e }) {
    const { t: r } = Xe(), n = t, i = e;
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
    return (o, l) => (P(), V("div", h4, [
      L("label", d4, ae(x(r)(o.style.label)), 1),
      L("div", p4, [
        o.colorEditable && n.style.color ? (P(), V("input", {
          key: 0,
          id: "colorId",
          type: "color",
          class: "w-11 h-5 py-[1px] px-[2px]",
          value: n.style.color,
          onInput: s
        }, null, 40, m4)) : F("v-if", !0)
      ]),
      L("input", {
        type: "checkbox",
        class: "flex-none mr-3",
        checked: n.style.visible,
        onChange: a,
        "aria-label": x(r)("Show or hide {{ thematicName }}", {
          thematicName: n.style.label
        })
      }, null, 40, g4)
    ]));
  }
}), v4 = /* @__PURE__ */ he(y4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/medium-style-item.vue"]]), _4 = { class: "text-white border-2 p-[10px] m-[10px]" }, b4 = { class: "text-center mb-3" }, E4 = /* @__PURE__ */ fe({
  __name: "medium-style-selector",
  props: {
    layer: { type: Object, required: !0 }
  },
  setup(t) {
    const e = ["basemap_2015_global"], r = Xr(), { bgStyle: n } = He(r), { t: i } = Xe(), s = t, a = pe(
      () => e.includes(s.layer.name)
    ), o = pe(
      () => n.value || c4(s.layer)
    );
    function l(u, f) {
      n.value = o.value.map(
        (c, h) => h === u ? f : c
      ), r.disableExpertStyle();
    }
    return (u, f) => (P(), V("div", _4, [
      L("h5", b4, ae(a.value ? x(i)("Select a colour for every theme") : x(i)("Activate categories")), 1),
      (P(!0), V(Ue, null, Pr(o.value, (c, h) => (P(), Fe(v4, {
        key: c.label,
        style: Ci(c),
        onChangeStyle: (d) => l(h, d),
        colorEditable: a.value
      }, null, 8, ["style", "onChangeStyle", "colorEditable"]))), 128))
    ]));
  }
}), S4 = /* @__PURE__ */ he(E4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/medium-style-selector.vue"]]);
var R_ = { exports: {} };
(function(t, e) {
  (function(r, n) {
    n();
  })(ln, function() {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof ln == "object" && ln.global === ln ? ln : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = a.saveAs || (typeof window != "object" || window !== a ? function() {
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
          var b = g.result;
          b = m ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = b : location = b, h = null;
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
})(R_);
const w4 = { class: "text-white border-2 p-[10px] m-[10px] flex flex-col" }, x4 = { class: "text-center mb-3" }, O4 = { class: "flex flex-row justify-center" }, M4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium text-white" }, T4 = { class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] text-sm" }, N4 = {
  class: "'block z-[5] w-full h-full cursor-pointer after:absolute after:pt-[15px] after:px-[15px] after:w-full after:text-center after:content-upload",
  for: "uploadMvtStyle"
}, C4 = { class: "absolute top-[70px] w-full text-center text-base leading-3 font-medium" }, L4 = ["href"], P4 = /* @__PURE__ */ fe({
  __name: "expert-style-selector",
  setup(t) {
    const e = vt(), r = Xr(), n = ki(), { appliedStyle: i } = He(r), { t: s } = Xe();
    function a() {
      const u = i.value, f = JSON.stringify(u), c = new Blob([f], { type: "text/plain;charset=utf-8" }), h = "styles.json";
      R_.exports.saveAs(c, h);
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
      ) : `${La.mvtStylesGetUrl}?id=${r.styleSerial}`;
    }
    return (u, f) => (P(), V("div", w4, [
      L("h5", x4, ae(x(s)("Lancer \xE9diteur externe ou importer json")), 1),
      L("div", O4, [
        L("a", {
          href: "#",
          class: "text-white border-2 relative h-[100px] w-[85px] mx-[10px] my-0 mb-[15px] z-5 text-sm after:absolute after:left-[20px] after:top-[10px] after:z-4 after:w-[3.6em] after:text-center after:content-download",
          onClick: f[0] || (f[0] = (c) => a())
        }, [
          L("span", M4, ae(x(s)("Download style")), 1)
        ]),
        L("div", T4, [
          L("label", N4, [
            L("span", C4, ae(x(s)("Upload style")), 1)
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
      }, ae(x(s)("Open Maputnik editor")), 9, L4)
    ]));
  }
}), k4 = /* @__PURE__ */ he(P4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/expert-style-selector.vue"]]), A4 = { key: 0 }, D4 = {
  key: 0,
  class: "mb-px"
}, I4 = {
  key: 1,
  class: "mb-px"
}, R4 = {
  key: 2,
  class: "mb-px"
}, $4 = /* @__PURE__ */ fe({
  __name: "style-selector",
  setup(t) {
    const { t: e } = Xe(), r = vt(), n = wt(), i = Xr(), { bgStyle: s, isExpertStyleActive: a } = He(i), { bgLayer: o } = He(r), l = ki(), u = pe(
      () => l.getStyleCapabilitiesFromLayer(o.value)
    );
    tt(o, (h) => {
      l.isLayerStyleEditable(h) || n.closeStyleEditorPanel();
    });
    let f = be(void 0);
    function c() {
      i.setStyle(null);
    }
    return (h, d) => u.value.isEditable ? (P(), V("div", A4, [
      u.value.hasSimpleStyle ? (P(), V("div", D4, [
        ee(Gl, {
          title: x(e)("Simple"),
          expanded: x(f) === "simpleStyle",
          onTogglePanel: d[0] || (d[0] = () => Ye(f) ? f.value = x(f) === "simpleStyle" ? void 0 : "simpleStyle" : f = x(f) === "simpleStyle" ? void 0 : "simpleStyle")
        }, {
          default: _i(() => [
            ee(u4)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasAdvancedStyle ? (P(), V("div", I4, [
        ee(Gl, {
          title: x(e)("Medium"),
          expanded: x(f) === "mediumStyle",
          onTogglePanel: d[1] || (d[1] = () => Ye(f) ? f.value = x(f) === "mediumStyle" ? void 0 : "mediumStyle" : f = x(f) === "mediumStyle" ? void 0 : "mediumStyle")
        }, {
          default: _i(() => [
            x(o) ? (P(), Fe(S4, {
              key: 0,
              layer: x(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      u.value.hasExpertStyle ? (P(), V("div", R4, [
        ee(Gl, {
          title: x(e)("Expert (style.json)"),
          expanded: x(f) === "advancedStyle",
          onTogglePanel: d[2] || (d[2] = () => Ye(f) ? f.value = x(f) === "advancedStyle" ? void 0 : "advancedStyle" : f = x(f) === "advancedStyle" ? void 0 : "advancedStyle")
        }, {
          default: _i(() => [
            x(o) ? (P(), Fe(k4, {
              key: 0,
              layer: x(o)
            }, null, 8, ["layer"])) : F("v-if", !0)
          ]),
          _: 1
        }, 8, ["title", "expanded"])
      ])) : F("v-if", !0),
      x(s) || x(a) ? (P(), V("button", {
        key: 3,
        onClick: c,
        class: "lux-btn my-2"
      }, ae(x(e)("Reset style", { ns: "client" })), 1)) : F("v-if", !0)
    ])) : F("v-if", !0);
  }
}), F4 = /* @__PURE__ */ he($4, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/components/style-selector/style-selector.vue"]]);
function oh(t) {
  return oh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, oh(t);
}
function $_() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : oh(XMLHttpRequest)) === "object";
}
function V4(t) {
  return !!t && typeof t.then == "function";
}
function j4(t) {
  return V4(t) ? t : Promise.resolve(t);
}
function G4(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Au = { exports: {} }, El = { exports: {} }, bg;
function U4() {
  return bg || (bg = 1, function(t, e) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof ln < "u" && ln, n = function() {
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
        function k(T) {
          var $ = T.toUpperCase();
          return M.indexOf($) > -1 ? $ : T;
        }
        function A(T, $) {
          if (!(this instanceof A))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          $ = $ || {};
          var z = $.body;
          if (T instanceof A) {
            if (T.bodyUsed)
              throw new TypeError("Already read");
            this.url = T.url, this.credentials = T.credentials, $.headers || (this.headers = new m(T.headers)), this.method = T.method, this.mode = T.mode, this.signal = T.signal, !z && T._bodyInit != null && (z = T._bodyInit, T.bodyUsed = !0);
          } else
            this.url = String(T);
          if (this.credentials = $.credentials || this.credentials || "same-origin", ($.headers || !this.headers) && (this.headers = new m($.headers)), this.method = k($.method || this.method || "GET"), this.mode = $.mode || this.mode || null, this.signal = $.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && z)
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
        A.prototype.clone = function() {
          return new A(this, { body: this._bodyInit });
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
          var $ = new m(), z = T.replace(/\r?\n[\t ]+/g, " ");
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
        N.call(A.prototype);
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
            var Ce = new A(T, $);
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
            Pe.open(Ce.method, Rt(Ce.url), !0), Ce.credentials === "include" ? Pe.withCredentials = !0 : Ce.credentials === "omit" && (Pe.withCredentials = !1), "responseType" in Pe && (l.blob ? Pe.responseType = "blob" : l.arrayBuffer && Ce.headers.get("Content-Type") && Ce.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (Pe.responseType = "arraybuffer")), $ && typeof $.headers == "object" && !($.headers instanceof m) ? Object.getOwnPropertyNames($.headers).forEach(function(Te) {
              Pe.setRequestHeader(Te, d($.headers[Te]));
            }) : Ce.headers.forEach(function(Te, Ct) {
              Pe.setRequestHeader(Ct, Te);
            }), Ce.signal && (Ce.signal.addEventListener("abort", dt), Pe.onreadystatechange = function() {
              Pe.readyState === 4 && Ce.signal.removeEventListener("abort", dt);
            }), Pe.send(typeof Ce._bodyInit > "u" ? null : Ce._bodyInit);
          });
        }
        return ve.polyfill = !0, o.fetch || (o.fetch = ve, o.Headers = m, o.Request = A, o.Response = I), a.Headers = m, a.Request = A, a.Response = I, a.fetch = ve, a;
      })({});
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = r.fetch ? r : n;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
  }(El, El.exports)), El.exports;
}
(function(t, e) {
  var r;
  if (typeof fetch == "function" && (typeof ln < "u" && ln.fetch ? r = ln.fetch : typeof window < "u" && window.fetch ? r = window.fetch : r = fetch), typeof G4 < "u" && typeof window > "u") {
    var n = r || U4();
    n.default && (n = n.default), e.default = n, t.exports = e.default;
  }
})(Au, Au.exports);
const F_ = Au.exports, Eg = /* @__PURE__ */ vb({
  __proto__: null,
  default: F_
}, [Au.exports]);
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
function wg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sg(Object(r), !0).forEach(function(n) {
      B4(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function B4(t, e, r) {
  return e = W4(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function W4(t) {
  var e = q4(t, "string");
  return ms(e) == "symbol" ? e : String(e);
}
function q4(t, e) {
  if (ms(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (ms(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ms(t) {
  return ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ms(t);
}
var Gn;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? Gn = global.fetch : typeof window < "u" && window.fetch ? Gn = window.fetch : Gn = fetch);
var mo;
$_() && (typeof global < "u" && global.XMLHttpRequest ? mo = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (mo = window.XMLHttpRequest));
var Du;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Du = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Du = window.ActiveXObject));
!Gn && Eg && !mo && !Du && (Gn = F_ || Eg);
typeof Gn != "function" && (Gn = void 0);
var lh = function(e, r) {
  if (r && ms(r) === "object") {
    var n = "";
    for (var i in r)
      n += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(r[i]);
    if (!n)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + n.slice(1);
  }
  return e;
}, xg = function(e, r, n, i) {
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
  typeof fetch == "function" ? fetch(e, r).then(s).catch(n) : Gn(e, r).then(s).catch(n);
}, Og = !1, H4 = function(e, r, n, i) {
  e.queryStringParams && (r = lh(r, e.queryStringParams));
  var s = wg({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), n && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(n) : e.requestOptions, o = wg({
    method: n ? "POST" : "GET",
    body: n ? e.stringify(n) : void 0,
    headers: s
  }, Og ? {} : a), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
  try {
    xg(r, o, i, l);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(f) {
        delete o[f];
      }), xg(r, o, i, l), Og = !0;
    } catch (f) {
      i(f);
    }
  }
}, z4 = function(e, r, n, i) {
  n && ms(n) === "object" && (n = lh("", n).slice(1)), e.queryStringParams && (r = lh(r, e.queryStringParams));
  try {
    var s;
    mo ? s = new mo() : s = new Du("MSXML2.XMLHTTP.3.0"), s.open(n ? "POST" : "GET", r, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, n && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
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
}, Y4 = function(e, r, n, i) {
  if (typeof n == "function" && (i = n, n = void 0), i = i || function() {
  }, Gn && r.indexOf("file:") !== 0)
    return H4(e, r, n, i);
  if ($_() || typeof ActiveXObject == "function")
    return z4(e, r, n, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function go(t) {
  return go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, go(t);
}
function Mg(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mg(Object(r), !0).forEach(function(n) {
      V_(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function X4(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Tg(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, j_(n.key), n);
  }
}
function K4(t, e, r) {
  return e && Tg(t.prototype, e), r && Tg(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function V_(t, e, r) {
  return e = j_(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function j_(t) {
  var e = Z4(t, "string");
  return go(e) == "symbol" ? e : String(e);
}
function Z4(t, e) {
  if (go(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (go(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var J4 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(r) {
      return JSON.parse(r);
    },
    stringify: JSON.stringify,
    parsePayload: function(r, n, i) {
      return V_({}, n, i || "");
    },
    parseLoadPayload: function(r, n) {
    },
    request: Y4,
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
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    X4(this, t), this.services = e, this.options = r, this.allOptions = n, this.type = "backend", this.init(e, r, n);
  }
  return K4(t, [{
    key: "init",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = r, this.options = lf(lf(lf({}, J4()), this.options || {}), i), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
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
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(r, i)), l = j4(l), l.then(function(u) {
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
G_.type = "backend";
function U_(t, e, r) {
  r(t, e) && t instanceof yb && t.getLayers().forEach((i) => {
    U_(i, [...e, t], r);
  });
}
const Q4 = { class: "h-screen flex flex-col overflow-hidden" }, e6 = { class: "flex grow" }, t6 = {
  key: 0,
  class: "w-full sm:w-80 bg-secondary z-10"
}, r6 = {
  key: 1,
  class: "w-80 bg-primary"
}, n6 = { class: "map-wrapper grow bg-blue-100 relative" }, i6 = { class: "absolute right-1 top-16" }, s6 = /* @__PURE__ */ fe({
  __name: "App",
  setup(t) {
    const e = wt(), r = ki();
    QR.bootstrap(), qR.bootstrap(), XR.bootstrap(), ZR.bootstrapLayersOpen(), J0.bootstrapStyle(), BR.bootstrap(), r.initBackgroundsConfigs();
    const { layersOpen: n, styleEditorOpen: i } = He(e);
    tt(
      n,
      () => setTimeout(() => {
        s();
      }, 50)
    ), vr(() => window.addEventListener("resize", s)), Li(() => window.removeEventListener("resize", s));
    function s() {
      const a = Fn().getOlMap();
      a.updateSize(), U_(a.getLayerGroup(), [], (o) => (o instanceof n_ && o.getMapLibreMap().resize(), !0));
    }
    return (a, o) => (P(), V("div", Q4, [
      ee(sI),
      L("main", e6, [
        F(" Layer panel "),
        x(n) ? (P(), V("div", t6, [
          ee(MR)
        ])) : F("v-if", !0),
        F(" Style editor "),
        x(i) ? (P(), V("div", r6, [
          ee(F4)
        ])) : F("v-if", !0),
        F(" Map container and slider comparator "),
        L("div", n6, [
          ee(ek, { v4_standalone: !0 }),
          ee($R, { class: "absolute top-0" }),
          ee(eD),
          ee(WD)
        ]),
        F(" Background selector "),
        L("div", i6, [
          ee(uk)
        ])
      ]),
      ee(wI, { class: "fixed bottom-5 sm:static z-20" }),
      ee(IN)
    ]));
  }
}), a6 = /* @__PURE__ */ he(s6, [["__file", "/home/tkohr/Projets/luxembourg/git/luxembourg-geoportail/src/App.vue"]]);
ON();
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
const ad = LS(a6);
ad.use(Fw());
ad.use(M2, { i18next: lt });
ad.use(dw);
const D6 = (t = {}, e = null) => MN(
  {
    setup: () => {
      const r = So();
      Object.assign(r.appContext, e._context), Object.assign(r.provides, e._context.provides);
    },
    render: () => Qy(t)
  },
  { shadowRoot: !1 }
);
export {
  IN as AlertNotifications,
  a6 as App,
  uk as BackgroundSelector,
  Gv as DropdownList,
  wI as FooterBar,
  sI as HeaderBar,
  M2 as I18NextVue,
  WD as LayerMetadata,
  MR as LayerPanel,
  ek as MapContainer,
  n_ as MapLibreLayer,
  eD as RemoteLayers,
  $R as SliderComparator,
  F4 as StyleSelector,
  yI as ToolbarDraw,
  dw as VueDOMPurifyHTML,
  ad as app,
  G_ as backend,
  D6 as createElementInstance,
  Fw as createPinia,
  MN as defineCustomElement,
  lt as i18next,
  ia as proxyUrlHelper,
  BR as statePersistorBgLayerService,
  ZR as statePersistorLayersOpenService,
  qR as statePersistorLayersService,
  QR as statePersistorMyMapService,
  J0 as statePersistorStyleService,
  XR as statePersistorThemeService,
  He as storeToRefs,
  La as styleUrlHelper,
  ZD as themeSelectorService,
  wt as useAppStore,
  s_ as useBackgroundLayer,
  Yr as useLayers,
  Fn as useMap,
  vt as useMapStore,
  ki as useMvtStyles,
  i_ as useOpenLayers,
  Xr as useStyleStore,
  Zt as useThemeStore,
  os as useThemes,
  tt as watch
};
