import { inject as Rn, ref as ae, defineComponent as w, openBlock as r, createElementBlock as c, Fragment as M, createElementVNode as n, toDisplayString as l, unref as e, renderSlot as rt, renderList as J, createTextVNode as $, createCommentVNode as m, createBlock as C, withCtx as P, withDirectives as ee, resolveDirective as jn, provide as qn, resolveDynamicComponent as Le, computed as ve, vModelText as ot, vModelCheckbox as Wt, createVNode as fe, onMounted as Kn, shallowRef as Xn, Teleport as Yn, Transition as Zn, withKeys as Jn, withModifiers as Qn, normalizeClass as Ft, watch as el } from "vue";
import Q from "i18next";
const tl = /* @__PURE__ */ Symbol("lux-tpl-i18n");
function Su(t) {
  const s = ae(0), i = () => {
    s.value++;
  };
  t.on("languageChanged", i), t.on("loaded", i), t.store?.on("added", i), t.store?.on("removed", i);
  const o = () => {
    s.value;
  }, d = new Proxy(t, {
    get(a, f, _) {
      return o(), Reflect.get(a, f, _);
    }
  });
  function p(a) {
    const f = t.getFixedT(null, a ?? null);
    return new Proxy(f, {
      apply(_, g, U) {
        return o(), t.isInitialized ? Reflect.apply(_, g, U) : "";
      }
    });
  }
  return { i18next: d, getFixedT: p };
}
function I(t) {
  const s = Rn(tl, null);
  return s ? { t: s.getFixedT(t), i18next: s.i18next } : {
    t: Q.getFixedT(null, t ?? null),
    i18next: Q
  };
}
var Qe = {}, Z = {}, mn;
function nl() {
  return mn || (mn = 1, Object.defineProperty(Z, "__esModule", { value: !0 }), Z.BLANK_URL = Z.relativeFirstCharacters = Z.whitespaceEscapeCharsRegex = Z.urlSchemeRegex = Z.ctrlCharactersRegex = Z.htmlCtrlEntityRegex = Z.htmlEntitiesRegex = Z.invalidProtocolRegex = void 0, Z.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Z.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Z.htmlCtrlEntityRegex = /&(newline|tab);/gi, Z.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Z.urlSchemeRegex = /^.+(:|&colon;)/gim, Z.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Z.relativeFirstCharacters = [".", "/"], Z.BLANK_URL = "about:blank"), Z;
}
var fn;
function ll() {
  if (fn) return Qe;
  fn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.sanitizeUrl = void 0;
  var t = nl();
  function s(a) {
    return t.relativeFirstCharacters.indexOf(a[0]) > -1;
  }
  function i(a) {
    var f = a.replace(t.ctrlCharactersRegex, "");
    return f.replace(t.htmlEntitiesRegex, function(_, g) {
      return String.fromCharCode(g);
    });
  }
  function o(a) {
    return URL.canParse(a);
  }
  function d(a) {
    try {
      return decodeURIComponent(a);
    } catch {
      return a;
    }
  }
  function p(a) {
    if (!a)
      return t.BLANK_URL;
    var f, _ = d(a.trim());
    do
      _ = i(_).replace(t.htmlCtrlEntityRegex, "").replace(t.ctrlCharactersRegex, "").replace(t.whitespaceEscapeCharsRegex, "").trim(), _ = d(_), f = _.match(t.ctrlCharactersRegex) || _.match(t.htmlEntitiesRegex) || _.match(t.htmlCtrlEntityRegex) || _.match(t.whitespaceEscapeCharsRegex);
    while (f && f.length > 0);
    var g = _;
    if (!g)
      return t.BLANK_URL;
    if (s(g))
      return g;
    var U = g.trimStart(), R = U.match(t.urlSchemeRegex);
    if (!R)
      return g;
    var T = R[0].toLowerCase().trim();
    if (t.invalidProtocolRegex.test(T))
      return t.BLANK_URL;
    var b = U.replace(/\\/g, "/");
    if (T === "mailto:" || T.includes("://"))
      return b;
    if (T === "http:" || T === "https:") {
      if (!o(b))
        return t.BLANK_URL;
      var y = new URL(b);
      return y.protocol = y.protocol.toLowerCase(), y.hostname = y.hostname.toLowerCase(), y.toString();
    }
    return b;
  }
  return Qe.sanitizeUrl = p, Qe;
}
var Ee = ll();
function qe(t, s, i = "f_") {
  return Object.entries(t).filter(([o]) => o !== "showProfile").map(([o, d]) => ({ key: i + o, value: d })).sort((o, d) => s ? 0 : o.key.localeCompare(d.key));
}
function we(t) {
  return t.attributes !== void 0 && Object.keys(t.attributes).length > 0;
}
function D(t, s, i) {
  return i == null && (i = 0), t in s.attributes && ("" + s.attributes[t]).length > i;
}
function Me(t) {
  return t == null || t.length === 0;
}
function re(t) {
  const s = String(t).toLowerCase();
  return s.startsWith("http://") || s.startsWith("https://");
}
function at(t, s, i) {
  const { key: o } = t;
  let d = !1;
  return s === "2407" && (o === "f_Cl_erosion" || o === "f_Erosion_kl" || o === "f_Erosion_Cl" || o === "f_Erosioun_K") ? (i === "fr" && o === "f_Cl_erosion" || i === "de" && o === "f_Erosion_kl" || i === "en" && o === "f_Erosion_Cl" || i === "lb" && o === "f_Erosioun_K") && (d = !0) : s === "2714" && (o === "f_LABEL_eng" || o === "f_LC_class_name_fr" || o === "f_LC_class_name_de" || o === "f_LC_class_name") ? (i === "fr" && o === "f_LC_class_name_fr" || i === "de" && o === "f_LC_class_name_de" || i === "en" && o === "f_LABEL_eng" || i === "lb" && o === "f_LC_class_name") && (d = !0) : s === "2444" && (o === "f_Betriebsform" || o === "f_Forme_d_entreprise" || o === "f_Operation_Form" || o === "f_Form_vun_Geschaeft") ? (i === "fr" && o === "f_Forme_d_entreprise" || i === "de" && o === "f_Betriebsform" || i === "en" && o === "f_Operation_Form" || i === "lb" && o === "f_Form_vun_Geschaeft") && (d = !0) : o.endsWith("_FR") || o.endsWith("_DE") || o.endsWith("_EN") || o.endsWith("_LU") || o.endsWith("_LB") ? (i === "fr" && o.endsWith("_FR") || i === "de" && o.endsWith("_DE") || i === "en" && o.endsWith("_EN") || i === "lb" && (o.endsWith("_LB") || o.endsWith("_LU"))) && (d = !0) : d = !0, d;
}
function wn(t) {
  return "fid" in t && sl(t.fid);
}
function sl(t) {
  return t == null ? !1 : t.split(",").every((i) => !!i && i.split("_").length >= 2);
}
function Cn(t) {
  return Ee.sanitizeUrl(t);
}
function On(t, s, i, o) {
  const { i18next: d } = I();
  switch (d.language) {
    case "de":
      return Ee.sanitizeUrl(s ?? t);
    case "en":
      return Ee.sanitizeUrl(i ?? t);
    case "lb":
      return Ee.sanitizeUrl(o ?? t);
    case "fr":
    default:
      return Ee.sanitizeUrl(t);
  }
}
function rl(t, s, i = ",") {
  return t.map((o) => o.attributes[s]).join(i);
}
function _n(t, s) {
  if (typeof t > "u")
    return "";
  const { t: i } = I();
  return t.map((o) => i(s + "_" + o, { ns: "layers" })).join(", ");
}
function pe(t, s = "fr-FR", i = !0) {
  return t ? new Intl.DateTimeFormat(s, {
    dateStyle: "short",
    ...i ? { timeStyle: "short" } : {}
  }).format(new Date(t)) : "";
}
function hn(t, s = "") {
  if (t)
    return t.startsWith("data:image") ? t : (t.startsWith("/") && s.endsWith("/") && (t = "." + t), `${s}${t}`);
}
function ol(t, s = "") {
  return t !== void 0 ? `${s}?url=${s}?map_id=${t}` : void 0;
}
const al = {
  class: "lux-tpl-poi-title",
  "data-cy": "defaultTemplateTitle"
}, il = { key: 0 }, ul = ["href"], N = /* @__PURE__ */ w({
  __name: "info-feature-layout",
  props: {
    layers: {},
    currentUrl: {},
    getDirectLink: { type: Function, default: (t, s) => `${s}&fid=${t.fid}` }
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I();
    return (i, o) => (r(), c(M, null, [
      n("h1", al, l(e(s)(t.layers.layerLabel, { ns: "layers" })), 1),
      rt(i.$slots, "layer-content"),
      (r(!0), c(M, null, J(t.layers.features, (d) => (r(), c("div", {
        key: d.id,
        class: "lux-tpl-feature-info",
        "data-cy": "defaultTemplateAttributes"
      }, [
        rt(i.$slots, "feature-content", { feature: d }, () => [
          $(l(d.id), 1)
        ]),
        e(wn)(d) ? (r(), c("div", il, [
          n("a", {
            "data-cy": "defaultTemplateLink",
            class: "print:hidden",
            href: t.getDirectLink(d, t.currentUrl),
            target: "_blank"
          }, l(e(s)("Lien direct vers cet objet")), 9, ul)
        ])) : m("", !0)
      ]))), 128))
    ], 64));
  }
}), cl = { class: "lux-tpl-root" }, dl = /* @__PURE__ */ w({
  __name: "lux-tpl-root",
  setup(t) {
    return (s, i) => (r(), c("div", cl, [
      rt(s.$slots, "default")
    ]));
  }
});
const {
  entries: Dn,
  setPrototypeOf: gn,
  isFrozen: pl,
  getPrototypeOf: ml,
  getOwnPropertyDescriptor: fl
} = Object;
let {
  freeze: ue,
  seal: he,
  create: Ve
} = Object, {
  apply: Ht,
  construct: Bt
} = typeof Reflect < "u" && Reflect;
ue || (ue = function(s) {
  return s;
});
he || (he = function(s) {
  return s;
});
Ht || (Ht = function(s, i) {
  for (var o = arguments.length, d = new Array(o > 2 ? o - 2 : 0), p = 2; p < o; p++)
    d[p - 2] = arguments[p];
  return s.apply(i, d);
});
Bt || (Bt = function(s) {
  for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
    o[d - 1] = arguments[d];
  return new s(...o);
});
const et = K(Array.prototype.forEach), _l = K(Array.prototype.lastIndexOf), bn = K(Array.prototype.pop), tt = K(Array.prototype.push), hl = K(Array.prototype.splice), ie = Array.isArray, st = K(String.prototype.toLowerCase), Ot = K(String.prototype.toString), yn = K(String.prototype.match), Ge = K(String.prototype.replace), vn = K(String.prototype.indexOf), gl = K(String.prototype.trim), bl = K(Number.prototype.toString), yl = K(Boolean.prototype.toString), Tn = typeof BigInt > "u" ? null : K(BigInt.prototype.toString), kn = typeof Symbol > "u" ? null : K(Symbol.prototype.toString), z = K(Object.prototype.hasOwnProperty), nt = K(Object.prototype.toString), se = K(RegExp.prototype.test), ft = vl(TypeError);
function K(t) {
  return function(s) {
    s instanceof RegExp && (s.lastIndex = 0);
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
      o[d - 1] = arguments[d];
    return Ht(t, s, o);
  };
}
function vl(t) {
  return function() {
    for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
      i[o] = arguments[o];
    return Bt(t, i);
  };
}
function O(t, s) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : st;
  if (gn && gn(t, null), !ie(s))
    return t;
  let o = s.length;
  for (; o--; ) {
    let d = s[o];
    if (typeof d == "string") {
      const p = i(d);
      p !== d && (pl(s) || (s[o] = p), d = p);
    }
    t[d] = !0;
  }
  return t;
}
function Tl(t) {
  for (let s = 0; s < t.length; s++)
    z(t, s) || (t[s] = null);
  return t;
}
function me(t) {
  const s = Ve(null);
  for (const [i, o] of Dn(t))
    z(t, i) && (ie(o) ? s[i] = Tl(o) : o && typeof o == "object" && o.constructor === Object ? s[i] = me(o) : s[i] = o);
  return s;
}
function kl(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return bl(t);
    case "boolean":
      return yl(t);
    case "bigint":
      return Tn ? Tn(t) : "0";
    case "symbol":
      return kn ? kn(t) : "Symbol()";
    case "undefined":
      return nt(t);
    case "function":
    case "object": {
      if (t === null)
        return nt(t);
      const s = t, i = je(s, "toString");
      if (typeof i == "function") {
        const o = i(s);
        return typeof o == "string" ? o : nt(o);
      }
      return nt(t);
    }
    default:
      return nt(t);
  }
}
function je(t, s) {
  for (; t !== null; ) {
    const o = fl(t, s);
    if (o) {
      if (o.get)
        return K(o.get);
      if (typeof o.value == "function")
        return K(o.value);
    }
    t = ml(t);
  }
  function i() {
    return null;
  }
  return i;
}
function xl(t) {
  try {
    return se(t, ""), !0;
  } catch {
    return !1;
  }
}
const xn = ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Dt = ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Mt = ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Al = ue(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), It = ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), $l = ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), An = ue(["#text"]), $n = ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Pt = ue(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), En = ue(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _t = ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), El = he(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ll = he(/<%[\w\W]*|[\w\W]*%>/gm), Sl = he(/\$\{[\w\W]*/gm), Ul = he(/^data-[\-\w.\u00B7-\uFFFF]+$/), Rl = he(/^aria-[\-\w]+$/), Mn = he(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wl = he(/^(?:\w+script|data):/i), Cl = he(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), In = he(/^html$/i), Ol = he(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ln = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Rl,
  ATTR_WHITESPACE: Cl,
  CUSTOM_ELEMENT: Ol,
  DATA_ATTR: Ul,
  DOCTYPE_NAME: In,
  ERB_EXPR: Ll,
  IS_ALLOWED_URI: Mn,
  IS_SCRIPT_OR_DATA: wl,
  MUSTACHE_EXPR: El,
  TMPLIT_EXPR: Sl
});
const lt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Dl = function() {
  return typeof window > "u" ? null : window;
}, Ml = function(s, i) {
  if (typeof s != "object" || typeof s.createPolicy != "function")
    return null;
  let o = null;
  const d = "data-tt-policy-suffix";
  i && i.hasAttribute(d) && (o = i.getAttribute(d));
  const p = "dompurify" + (o ? "#" + o : "");
  try {
    return s.createPolicy(p, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
}, Sn = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Pn() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dl();
  const s = (S) => Pn(S);
  if (s.version = "3.4.2", s.removed = [], !t || !t.document || t.document.nodeType !== lt.document || !t.Element)
    return s.isSupported = !1, s;
  let {
    document: i
  } = t;
  const o = i, d = o.currentScript, {
    DocumentFragment: p,
    HTMLTemplateElement: a,
    Node: f,
    Element: _,
    NodeFilter: g,
    NamedNodeMap: U = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: R,
    DOMParser: T,
    trustedTypes: b
  } = t, y = _.prototype, B = je(y, "cloneNode"), Ae = je(y, "remove"), ht = je(y, "nextSibling"), it = je(y, "childNodes"), Se = je(y, "parentNode");
  if (typeof a == "function") {
    const S = i.createElement("template");
    S.content && S.content.ownerDocument && (i = S.content.ownerDocument);
  }
  let X, ce = "";
  const {
    implementation: Ke,
    createNodeIterator: gt,
    createDocumentFragment: bt,
    getElementsByTagName: Ie
  } = i, {
    importNode: Pe
  } = o;
  let j = Sn();
  s.isSupported = typeof Dn == "function" && typeof Se == "function" && Ke && Ke.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Ne,
    ERB_EXPR: L,
    TMPLIT_EXPR: k,
    DATA_ATTR: E,
    ARIA_ATTR: A,
    IS_SCRIPT_OR_DATA: F,
    ATTR_WHITESPACE: H,
    CUSTOM_ELEMENT: Ue
  } = Ln;
  let {
    IS_ALLOWED_URI: te
  } = Ln, v = null;
  const Fe = O({}, [...xn, ...Dt, ...Mt, ...It, ...An]);
  let le = null;
  const Gt = O({}, [...$n, ...Pt, ...En, ..._t]);
  let V = Object.seal(Ve(null, {
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
  })), Xe = null, ut = null;
  const Re = Object.seal(Ve(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Vt = !0, yt = !0, jt = !1, qt = !0, Ce = !1, Ye = !0, Oe = !1, vt = !1, Tt = !1, He = !1, ct = !1, dt = !1, Kt = !0, Xt = !1;
  const Yt = "user-content-";
  let kt = !0, Ze = !1, Be = {}, Te = null;
  const xt = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Zt = null;
  const Jt = O({}, ["audio", "video", "img", "source", "image", "track"]);
  let At = null;
  const Qt = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", mt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml";
  let We = ke, $t = !1, Et = null;
  const Fn = O({}, [pt, mt, ke], Ot);
  let Lt = O({}, ["mi", "mo", "mn", "ms", "mtext"]), St = O({}, ["annotation-xml"]);
  const Hn = O({}, ["title", "style", "font", "a", "script"]);
  let Je = null;
  const Bn = ["application/xhtml+xml", "text/html"], Wn = "text/html";
  let Y = null, ze = null;
  const zn = i.createElement("form"), en = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Ut = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ze && ze === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = me(u), Je = // eslint-disable-next-line unicorn/prefer-includes
    Bn.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Wn : u.PARSER_MEDIA_TYPE, Y = Je === "application/xhtml+xml" ? Ot : st, v = z(u, "ALLOWED_TAGS") && ie(u.ALLOWED_TAGS) ? O({}, u.ALLOWED_TAGS, Y) : Fe, le = z(u, "ALLOWED_ATTR") && ie(u.ALLOWED_ATTR) ? O({}, u.ALLOWED_ATTR, Y) : Gt, Et = z(u, "ALLOWED_NAMESPACES") && ie(u.ALLOWED_NAMESPACES) ? O({}, u.ALLOWED_NAMESPACES, Ot) : Fn, At = z(u, "ADD_URI_SAFE_ATTR") && ie(u.ADD_URI_SAFE_ATTR) ? O(me(Qt), u.ADD_URI_SAFE_ATTR, Y) : Qt, Zt = z(u, "ADD_DATA_URI_TAGS") && ie(u.ADD_DATA_URI_TAGS) ? O(me(Jt), u.ADD_DATA_URI_TAGS, Y) : Jt, Te = z(u, "FORBID_CONTENTS") && ie(u.FORBID_CONTENTS) ? O({}, u.FORBID_CONTENTS, Y) : xt, Xe = z(u, "FORBID_TAGS") && ie(u.FORBID_TAGS) ? O({}, u.FORBID_TAGS, Y) : me({}), ut = z(u, "FORBID_ATTR") && ie(u.FORBID_ATTR) ? O({}, u.FORBID_ATTR, Y) : me({}), Be = z(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? me(u.USE_PROFILES) : u.USE_PROFILES : !1, Vt = u.ALLOW_ARIA_ATTR !== !1, yt = u.ALLOW_DATA_ATTR !== !1, jt = u.ALLOW_UNKNOWN_PROTOCOLS || !1, qt = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ce = u.SAFE_FOR_TEMPLATES || !1, Ye = u.SAFE_FOR_XML !== !1, Oe = u.WHOLE_DOCUMENT || !1, He = u.RETURN_DOM || !1, ct = u.RETURN_DOM_FRAGMENT || !1, dt = u.RETURN_TRUSTED_TYPE || !1, Tt = u.FORCE_BODY || !1, Kt = u.SANITIZE_DOM !== !1, Xt = u.SANITIZE_NAMED_PROPS || !1, kt = u.KEEP_CONTENT !== !1, Ze = u.IN_PLACE || !1, te = xl(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : Mn, We = typeof u.NAMESPACE == "string" ? u.NAMESPACE : ke, Lt = z(u, "MATHML_TEXT_INTEGRATION_POINTS") && u.MATHML_TEXT_INTEGRATION_POINTS && typeof u.MATHML_TEXT_INTEGRATION_POINTS == "object" ? me(u.MATHML_TEXT_INTEGRATION_POINTS) : O({}, ["mi", "mo", "mn", "ms", "mtext"]), St = z(u, "HTML_INTEGRATION_POINTS") && u.HTML_INTEGRATION_POINTS && typeof u.HTML_INTEGRATION_POINTS == "object" ? me(u.HTML_INTEGRATION_POINTS) : O({}, ["annotation-xml"]);
    const h = z(u, "CUSTOM_ELEMENT_HANDLING") && u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING == "object" ? me(u.CUSTOM_ELEMENT_HANDLING) : Ve(null);
    if (V = Ve(null), z(h, "tagNameCheck") && en(h.tagNameCheck) && (V.tagNameCheck = h.tagNameCheck), z(h, "attributeNameCheck") && en(h.attributeNameCheck) && (V.attributeNameCheck = h.attributeNameCheck), z(h, "allowCustomizedBuiltInElements") && typeof h.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = h.allowCustomizedBuiltInElements), Ce && (yt = !1), ct && (He = !0), Be && (v = O({}, An), le = Ve(null), Be.html === !0 && (O(v, xn), O(le, $n)), Be.svg === !0 && (O(v, Dt), O(le, Pt), O(le, _t)), Be.svgFilters === !0 && (O(v, Mt), O(le, Pt), O(le, _t)), Be.mathMl === !0 && (O(v, It), O(le, En), O(le, _t))), Re.tagCheck = null, Re.attributeCheck = null, z(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? Re.tagCheck = u.ADD_TAGS : ie(u.ADD_TAGS) && (v === Fe && (v = me(v)), O(v, u.ADD_TAGS, Y))), z(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? Re.attributeCheck = u.ADD_ATTR : ie(u.ADD_ATTR) && (le === Gt && (le = me(le)), O(le, u.ADD_ATTR, Y))), z(u, "ADD_URI_SAFE_ATTR") && ie(u.ADD_URI_SAFE_ATTR) && O(At, u.ADD_URI_SAFE_ATTR, Y), z(u, "FORBID_CONTENTS") && ie(u.FORBID_CONTENTS) && (Te === xt && (Te = me(Te)), O(Te, u.FORBID_CONTENTS, Y)), z(u, "ADD_FORBID_CONTENTS") && ie(u.ADD_FORBID_CONTENTS) && (Te === xt && (Te = me(Te)), O(Te, u.ADD_FORBID_CONTENTS, Y)), kt && (v["#text"] = !0), Oe && O(v, ["html", "head", "body"]), v.table && (O(v, ["tbody"]), delete Xe.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ft('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ft('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      X = u.TRUSTED_TYPES_POLICY, ce = X.createHTML("");
    } else
      X === void 0 && (X = Ml(b, d)), X !== null && typeof ce == "string" && (ce = X.createHTML(""));
    ue && ue(u), ze = u;
  }, tn = O({}, [...Dt, ...Mt, ...Al]), nn = O({}, [...It, ...$l]), Gn = function(u) {
    let h = Se(u);
    (!h || !h.tagName) && (h = {
      namespaceURI: We,
      tagName: "template"
    });
    const x = st(u.tagName), W = st(h.tagName);
    return Et[u.namespaceURI] ? u.namespaceURI === mt ? h.namespaceURI === ke ? x === "svg" : h.namespaceURI === pt ? x === "svg" && (W === "annotation-xml" || Lt[W]) : !!tn[x] : u.namespaceURI === pt ? h.namespaceURI === ke ? x === "math" : h.namespaceURI === mt ? x === "math" && St[W] : !!nn[x] : u.namespaceURI === ke ? h.namespaceURI === mt && !St[W] || h.namespaceURI === pt && !Lt[W] ? !1 : !nn[x] && (Hn[x] || !tn[x]) : !!(Je === "application/xhtml+xml" && Et[u.namespaceURI]) : !1;
  }, ge = function(u) {
    tt(s.removed, {
      element: u
    });
    try {
      Se(u).removeChild(u);
    } catch {
      Ae(u);
    }
  }, De = function(u, h) {
    try {
      tt(s.removed, {
        attribute: h.getAttributeNode(u),
        from: h
      });
    } catch {
      tt(s.removed, {
        attribute: null,
        from: h
      });
    }
    if (h.removeAttribute(u), u === "is")
      if (He || ct)
        try {
          ge(h);
        } catch {
        }
      else
        try {
          h.setAttribute(u, "");
        } catch {
        }
  }, ln = function(u) {
    let h = null, x = null;
    if (Tt)
      u = "<remove></remove>" + u;
    else {
      const q = yn(u, /^[\r\n\t ]+/);
      x = q && q[0];
    }
    Je === "application/xhtml+xml" && We === ke && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const W = X ? X.createHTML(u) : u;
    if (We === ke)
      try {
        h = new T().parseFromString(W, Je);
      } catch {
      }
    if (!h || !h.documentElement) {
      h = Ke.createDocument(We, "template", null);
      try {
        h.documentElement.innerHTML = $t ? ce : W;
      } catch {
      }
    }
    const oe = h.body || h.documentElement;
    return u && x && oe.insertBefore(i.createTextNode(x), oe.childNodes[0] || null), We === ke ? Ie.call(h, Oe ? "html" : "body")[0] : Oe ? h.documentElement : oe;
  }, sn = function(u) {
    return gt.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Rt = function(u) {
    return u instanceof R && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof U) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, wt = function(u) {
    return typeof f == "function" && u instanceof f;
  };
  function $e(S, u, h) {
    et(S, (x) => {
      x.call(s, u, h, ze);
    });
  }
  const rn = function(u) {
    let h = null;
    if ($e(j.beforeSanitizeElements, u, null), Rt(u))
      return ge(u), !0;
    const x = Y(u.nodeName);
    if ($e(j.uponSanitizeElement, u, {
      tagName: x,
      allowedTags: v
    }), Ye && u.hasChildNodes() && !wt(u.firstElementChild) && se(/<[/\w!]/g, u.innerHTML) && se(/<[/\w!]/g, u.textContent) || Ye && u.namespaceURI === ke && x === "style" && wt(u.firstElementChild) || u.nodeType === lt.progressingInstruction || Ye && u.nodeType === lt.comment && se(/<[/\w]/g, u.data))
      return ge(u), !0;
    if (Xe[x] || !(Re.tagCheck instanceof Function && Re.tagCheck(x)) && !v[x]) {
      if (!Xe[x] && an(x) && (V.tagNameCheck instanceof RegExp && se(V.tagNameCheck, x) || V.tagNameCheck instanceof Function && V.tagNameCheck(x)))
        return !1;
      if (kt && !Te[x]) {
        const W = Se(u) || u.parentNode, oe = it(u) || u.childNodes;
        if (oe && W) {
          const q = oe.length;
          for (let de = q - 1; de >= 0; --de) {
            const _e = B(oe[de], !0);
            W.insertBefore(_e, ht(u));
          }
        }
      }
      return ge(u), !0;
    }
    return u instanceof _ && !Gn(u) || (x === "noscript" || x === "noembed" || x === "noframes") && se(/<\/no(script|embed|frames)/i, u.innerHTML) ? (ge(u), !0) : (Ce && u.nodeType === lt.text && (h = u.textContent, et([Ne, L, k], (W) => {
      h = Ge(h, W, " ");
    }), u.textContent !== h && (tt(s.removed, {
      element: u.cloneNode()
    }), u.textContent = h)), $e(j.afterSanitizeElements, u, null), !1);
  }, on = function(u, h, x) {
    if (ut[h] || Kt && (h === "id" || h === "name") && (x in i || x in zn))
      return !1;
    const W = le[h] || Re.attributeCheck instanceof Function && Re.attributeCheck(h, u);
    if (!(yt && !ut[h] && se(E, h))) {
      if (!(Vt && se(A, h))) {
        if (!W || ut[h]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(an(u) && (V.tagNameCheck instanceof RegExp && se(V.tagNameCheck, u) || V.tagNameCheck instanceof Function && V.tagNameCheck(u)) && (V.attributeNameCheck instanceof RegExp && se(V.attributeNameCheck, h) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(h, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            h === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && se(V.tagNameCheck, x) || V.tagNameCheck instanceof Function && V.tagNameCheck(x)))
          ) return !1;
        } else if (!At[h]) {
          if (!se(te, Ge(x, H, ""))) {
            if (!((h === "src" || h === "xlink:href" || h === "href") && u !== "script" && vn(x, "data:") === 0 && Zt[u])) {
              if (!(jt && !se(F, Ge(x, H, "")))) {
                if (x)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Vn = O({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), an = function(u) {
    return !Vn[st(u)] && se(Ue, u);
  }, un = function(u) {
    $e(j.beforeSanitizeAttributes, u, null);
    const {
      attributes: h
    } = u;
    if (!h || Rt(u))
      return;
    const x = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: le,
      forceKeepAttr: void 0
    };
    let W = h.length;
    for (; W--; ) {
      const oe = h[W], {
        name: q,
        namespaceURI: de,
        value: _e
      } = oe, be = Y(q), Ct = _e;
      let ne = q === "value" ? Ct : gl(Ct);
      if (x.attrName = be, x.attrValue = ne, x.keepAttr = !0, x.forceKeepAttr = void 0, $e(j.uponSanitizeAttribute, u, x), ne = x.attrValue, Xt && (be === "id" || be === "name") && vn(ne, Yt) !== 0 && (De(q, u), ne = Yt + ne), Ye && se(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ne)) {
        De(q, u);
        continue;
      }
      if (be === "attributename" && yn(ne, "href")) {
        De(q, u);
        continue;
      }
      if (x.forceKeepAttr)
        continue;
      if (!x.keepAttr) {
        De(q, u);
        continue;
      }
      if (!qt && se(/\/>/i, ne)) {
        De(q, u);
        continue;
      }
      Ce && et([Ne, L, k], (pn) => {
        ne = Ge(ne, pn, " ");
      });
      const dn = Y(u.nodeName);
      if (!on(dn, be, ne)) {
        De(q, u);
        continue;
      }
      if (X && typeof b == "object" && typeof b.getAttributeType == "function" && !de)
        switch (b.getAttributeType(dn, be)) {
          case "TrustedHTML": {
            ne = X.createHTML(ne);
            break;
          }
          case "TrustedScriptURL": {
            ne = X.createScriptURL(ne);
            break;
          }
        }
      if (ne !== Ct)
        try {
          de ? u.setAttributeNS(de, q, ne) : u.setAttribute(q, ne), Rt(u) ? ge(u) : bn(s.removed);
        } catch {
          De(q, u);
        }
    }
    $e(j.afterSanitizeAttributes, u, null);
  }, cn = function(u) {
    let h = null;
    const x = sn(u);
    for ($e(j.beforeSanitizeShadowDOM, u, null); h = x.nextNode(); )
      $e(j.uponSanitizeShadowNode, h, null), rn(h), un(h), h.content instanceof p && cn(h.content);
    $e(j.afterSanitizeShadowDOM, u, null);
  };
  return s.sanitize = function(S) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = null, x = null, W = null, oe = null;
    if ($t = !S, $t && (S = "<!-->"), typeof S != "string" && !wt(S) && (S = kl(S), typeof S != "string"))
      throw ft("dirty is not a string, aborting");
    if (!s.isSupported)
      return S;
    if (vt || Ut(u), s.removed = [], typeof S == "string" && (Ze = !1), Ze) {
      const _e = S.nodeName;
      if (typeof _e == "string") {
        const be = Y(_e);
        if (!v[be] || Xe[be])
          throw ft("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (S instanceof f)
      h = ln("<!---->"), x = h.ownerDocument.importNode(S, !0), x.nodeType === lt.element && x.nodeName === "BODY" || x.nodeName === "HTML" ? h = x : h.appendChild(x);
    else {
      if (!He && !Ce && !Oe && // eslint-disable-next-line unicorn/prefer-includes
      S.indexOf("<") === -1)
        return X && dt ? X.createHTML(S) : S;
      if (h = ln(S), !h)
        return He ? null : dt ? ce : "";
    }
    h && Tt && ge(h.firstChild);
    const q = sn(Ze ? S : h);
    for (; W = q.nextNode(); )
      rn(W), un(W), W.content instanceof p && cn(W.content);
    if (Ze)
      return S;
    if (He) {
      if (Ce) {
        h.normalize();
        let _e = h.innerHTML;
        et([Ne, L, k], (be) => {
          _e = Ge(_e, be, " ");
        }), h.innerHTML = _e;
      }
      if (ct)
        for (oe = bt.call(h.ownerDocument); h.firstChild; )
          oe.appendChild(h.firstChild);
      else
        oe = h;
      return (le.shadowroot || le.shadowrootmode) && (oe = Pe.call(o, oe, !0)), oe;
    }
    let de = Oe ? h.outerHTML : h.innerHTML;
    return Oe && v["!doctype"] && h.ownerDocument && h.ownerDocument.doctype && h.ownerDocument.doctype.name && se(In, h.ownerDocument.doctype.name) && (de = "<!DOCTYPE " + h.ownerDocument.doctype.name + `>
` + de), Ce && et([Ne, L, k], (_e) => {
      de = Ge(de, _e, " ");
    }), X && dt ? X.createHTML(de) : de;
  }, s.setConfig = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ut(S), vt = !0;
  }, s.clearConfig = function() {
    ze = null, vt = !1;
  }, s.isValidAttribute = function(S, u, h) {
    ze || Ut({});
    const x = Y(S), W = Y(u);
    return on(x, W, h);
  }, s.addHook = function(S, u) {
    typeof u == "function" && tt(j[S], u);
  }, s.removeHook = function(S, u) {
    if (u !== void 0) {
      const h = _l(j[S], u);
      return h === -1 ? void 0 : hl(j[S], h, 1)[0];
    }
    return bn(j[S]);
  }, s.removeHooks = function(S) {
    j[S] = [];
  }, s.removeAllHooks = function() {
    j = Sn();
  }, s;
}
var Il = Pn();
function Pl(t, s) {
  const i = t.hooks ?? {};
  let o;
  for (o in i) {
    const d = i[o];
    d !== void 0 && s.addHook(o, d);
  }
}
function Nl() {
  return Il();
}
function Fl(t = {}, s = Nl) {
  const i = s();
  Pl(t, i);
  const o = function(a) {
    const f = a.value;
    if (a.oldValue === f)
      return;
    const _ = `${f}`, g = a.arg, U = t.namedConfigurations, R = t.default ?? {};
    return U && g !== void 0 ? i.sanitize(
      _,
      U[g] ?? R
    ) : i.sanitize(_, R);
  }, d = function(a, f) {
    const _ = o(f);
    _ !== void 0 && (a.innerHTML = _);
  }, p = {
    mounted: d,
    updated: d
  };
  return t.enableSSRPropsSupport ? {
    ...p,
    getSSRProps(a) {
      return {
        innerHTML: o(a)
      };
    }
  } : p;
}
const xe = Fl(), Hl = {
  "caret-down": "M3.5 6h9L8 11.5 3.5 6Z",
  "caret-up": "M3.5 10h9L8 4.5 3.5 10Z",
  download: "M7.25 1.75h1.5v5.19l1.72-1.72 1.06 1.06L8 9.81 4.47 6.28l1.06-1.06 1.72 1.72V1.75ZM2.5 11.5H4v1.75h8V11.5h1.5v3.25h-11V11.5Z",
  grid: "M2 3h5.25v5.25H2V3Zm6.75 0H14v5.25H8.75V3ZM2 9.75h5.25V15H2V9.75Zm6.75 0H14V15H8.75V9.75Z",
  list: "M2 3.5h2v2H2v-2Zm3.5 0H14v2H5.5v-2ZM2 7h2v2H2V7Zm3.5 0H14v2H5.5V7ZM2 10.5h2v2H2v-2Zm3.5 0H14v2H5.5v-2Z",
  phone: "M4.6 1.9a1 1 0 0 0-1.35.06L2.1 3.1a2 2 0 0 0-.35 2.35 15.5 15.5 0 0 0 6.8 6.8 2 2 0 0 0 2.35-.35l1.14-1.15a1 1 0 0 0 .06-1.35l-1.9-2.2a1 1 0 0 0-1.46-.05l-.9.9a12.2 12.2 0 0 1-3.14-3.14l.9-.9a1 1 0 0 0-.05-1.46L4.6 1.9Z",
  fax: "M4.5 1h7v3.25h-7V1ZM2.75 5.25h10.5A1.25 1.25 0 0 1 14.5 6.5v3.5a1.25 1.25 0 0 1-1.25 1.25H2.75A1.25 1.25 0 0 1 1.5 10V6.5a1.25 1.25 0 0 1 1.25-1.25ZM4.5 11.5h7V15h-7v-3.5ZM12 6.9a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Z",
  at: "M8 1.5a6.5 6.5 0 1 0 3.1 12.2.75.75 0 0 0-.72-1.32A5 5 0 1 1 13 8v.55a1.1 1.1 0 0 1-2.2 0V5h-1.4v.83A3 3 0 1 0 8 11a3 3 0 0 0 2.06-.82 2.6 2.6 0 0 0 4.44-1.63V8A6.5 6.5 0 0 0 8 1.5Zm0 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
}, Bl = ["role", "aria-hidden"], Wl = { key: 0 }, zl = ["d"], Gl = /* @__PURE__ */ w({
  __name: "lux-tpl-icon",
  props: {
    name: {},
    title: {}
  },
  setup(t) {
    return (s, i) => (r(), c("svg", {
      class: "lux-tpl-icon",
      viewBox: "0 0 16 16",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      focusable: "false",
      role: t.title ? "img" : void 0,
      "aria-hidden": t.title ? void 0 : "true"
    }, [
      t.title ? (r(), c("title", Wl, l(t.title), 1)) : m("", !0),
      n("path", {
        d: e(Hl)[t.name]
      }, null, 8, zl)
    ], 8, Bl));
  }
}), Vl = (t, s) => {
  const i = t.__vccOpts || t;
  for (const [o, d] of s)
    i[o] = d;
  return i;
}, ye = /* @__PURE__ */ Vl(Gl, [["__scopeId", "data-v-077f3be2"]]), jl = /* @__PURE__ */ w({
  __name: "adresse-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const s = (i) => i?.replace(/\n/g, "<br>") ?? "";
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("h4", null, l(d.attributes.num_affaire), 1),
        ee(n("div", null, null, 512), [
          [e(xe), s(d.attributes.label)]
        ])
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), ql = ["href"], Kl = ["src"], Xl = { class: "no-print" }, Yl = /* @__PURE__ */ w({
  __name: "aero-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("h3", null, l(d.attributes.name), 1),
        n("a", {
          href: d.attributes.path,
          target: "_blank"
        }, [
          d.attributes.thumbnail_path ? (r(), c("img", {
            key: 0,
            src: d.attributes.thumbnail_path,
            alt: "thumbnail",
            width: "250"
          }, null, 8, Kl)) : m("", !0)
        ], 8, ql),
        n("span", Xl, l(e(s)("Cliquez dans l'image pour agrandir")), 1),
        o[0] || (o[0] = n("br", null, null, -1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Zl = /* @__PURE__ */ w({
  __name: "affaires-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("h4", null, l(d.attributes.num_affaire), 1),
        n("span", null, l(e(s)("Numero")), 1),
        $(" : " + l(d.attributes.num_affaire), 1),
        o[0] || (o[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Numero cadastral")), 1),
        $(" : " + l(d.attributes.label), 1),
        o[1] || (o[1] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Geometre")), 1),
        $(" : " + l(d.attributes.geometre), 1),
        o[2] || (o[2] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Region")), 1),
        $(" : " + l(d.attributes.region), 1),
        o[3] || (o[3] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Type")), 1),
        $(" : " + l(e(s)(d.attributes.type)), 1),
        o[4] || (o[4] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Statut")), 1),
        $(" : " + l(e(s)(d.attributes.statut)), 1),
        o[5] || (o[5] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Date")), 1),
        $(" : " + l(d.attributes.date), 1),
        o[6] || (o[6] = n("br", null, null, -1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Jl = { key: 0 }, Ql = { key: 1 }, es = /* @__PURE__ */ w({
  __name: "asta-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => {
      const d = jn("format-measure");
      return r(), C(N, {
        layers: t.layers,
        currentUrl: t.currentUrl
      }, {
        "feature-content": P(({ feature: p }) => [
          n("span", null, l(e(s)("Numero EFA")), 1),
          $(" : " + l(p.attributes.code_elem) + l(p.attributes.efa), 1),
          o[3] || (o[3] = n("br", null, null, -1)),
          p.attributes.surface ? (r(), c("div", Jl, [
            n("span", null, l(e(s)("Surface")), 1),
            $(" : " + l(Number(p.attributes.surface).toFixed(1)) + " a", 1),
            o[0] || (o[0] = n("br", null, null, -1))
          ])) : m("", !0),
          p.attributes.longueur ? (r(), c("div", Ql, [
            n("span", null, l(e(s)("Longueur")), 1),
            o[1] || (o[1] = $(" : ", -1)),
            ee(n("span", null, null, 512), [
              [
                d,
                p.attributes.longueur,
                "1",
                { length: !0 }
              ]
            ]),
            o[2] || (o[2] = n("br", null, null, -1))
          ])) : m("", !0)
        ]),
        _: 1
      }, 8, ["layers", "currentUrl"]);
    };
  }
}), zt = /* @__PURE__ */ Symbol("lux-tpl-context"), ts = {
  config: {},
  user: ae(null),
  notify: () => {
  }
};
function Uu(t) {
  qn(zt, t);
}
function G() {
  return Rn(zt, ts);
}
const ns = { key: 0 }, ls = { key: 0 }, ss = { key: 0 }, rs = { key: 1 }, os = ["href"], as = { key: 1 }, is = { key: 0 }, us = { key: 1 }, cs = { key: 2 }, ds = { key: 3 }, ps = { key: 4 }, ms = { key: 5 }, fs = { key: 0 }, _s = { key: 2 }, hs = /* @__PURE__ */ w({
  __name: "automatic-sols-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { profileComponent: i } = G();
    return (o, d) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: p }) => [
        p.attributes.label ? (r(), c("h4", ns, l(e(s)(p.attributes.label)), 1)) : m("", !0),
        e(we)(p) ? (r(), c(M, { key: 1 }, [
          (r(!0), c(M, null, J(e(qe)(
            p.attributes,
            t.layers.ordered
          ), (a) => (r(), c("div", {
            key: a.key
          }, [
            !e(Me)(a.value) && !a.key.startsWith("f_LC_class_name") && !a.key.startsWith("f_LABEL_") ? (r(), c("span", ls, [
              e(re)(a.value) ? m("", !0) : (r(), c("label", ss, l(e(s)(a.key)) + " : ", 1)),
              e(re)(a.value) ? m("", !0) : ee((r(), c("span", rs, null, 512)), [
                [e(xe), a.value]
              ]),
              e(re)(a.value) ? (r(), c("a", {
                key: 2,
                href: a.value,
                target: "_blank"
              }, l(e(s)(a.key)), 9, os)) : m("", !0)
            ])) : m("", !0),
            !e(Me)(a.value) && (a.key.startsWith("f_LC_class_name") || a.key.startsWith("f_LABEL_")) ? (r(), c("span", as, [
              e(Q).language == "fr" && (a.key == "f_LC_class_name_fr" || a.key == "f_LABEL_fr") ? (r(), c("label", is, l(e(s)("f_LC_class_name")) + " : ", 1)) : m("", !0),
              e(Q).language == "fr" && (a.key == "f_LC_class_name_fr" || a.key == "f_LABEL_fr") ? ee((r(), c("span", us, null, 512)), [
                [e(xe), a.value]
              ]) : m("", !0),
              (e(Q).language == "de" || e(Q).language == "lb") && (a.key == "f_LC_class_name_de" || a.key == "f_LABEL_de") ? (r(), c("label", cs, l(e(s)("f_LC_class_name")) + " : ", 1)) : m("", !0),
              (e(Q).language == "de" || e(Q).language == "lb") && (a.key == "f_LC_class_name_de" || a.key == "f_LABEL_de") ? ee((r(), c("span", ds, null, 512)), [
                [e(xe), a.value]
              ]) : m("", !0),
              e(Q).language == "en" && (a.key == "f_LC_class_name" || a.key == "f_LABEL_eng") ? (r(), c("label", ps, l(e(s)("f_LC_class_name")) + " : ", 1)) : m("", !0),
              e(Q).language == "en" && (a.key == "f_LC_class_name" || a.key == "f_LABEL_eng") ? ee((r(), c("span", ms, null, 512)), [
                [e(xe), a.value]
              ]) : m("", !0)
            ])) : m("", !0)
          ]))), 128)),
          t.layers.has_profile && e(i) ? (r(), c("div", fs, [
            (r(), C(Le(e(i)), {
              feature: p,
              onExport: d[0] || (d[0] = (a) => o.$emit("export", a))
            }, null, 40, ["feature"]))
          ])) : m("", !0)
        ], 64)) : (r(), c("div", _s, [
          n("span", null, l(e(s)("Aucune information disponible pour cette couche")), 1)
        ]))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), gs = /* @__PURE__ */ w({
  __name: "batiments-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Type")), 1),
        o[0] || (o[0] = $(" : ", -1)),
        n("span", null, l(e(s)("bat_" + d.attributes.type)), 1),
        o[1] || (o[1] = n("br", null, null, -1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), bs = ["src"], ys = /* @__PURE__ */ w({
  __name: "bus-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { config: s } = G(), i = s.busWidgetUrl;
    return (o, d) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: p }) => [
        n("h3", null, l(p.attributes.name), 1),
        n("iframe", {
          class: "-ml-3.5",
          title: "bus widget",
          height: "300",
          width: "500",
          frameborder: "0",
          src: `${e(i)}${e(On)(
            `?lang=fr&id=${p.attributes.extid}`,
            `?lang=de&id=${p.attributes.extid}`,
            `?lang=en&id=${p.attributes.extid}`,
            `?lang=fr&id=${p.attributes.extid}`
          )}`
        }, null, 8, bs)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), vs = ["src"], Ts = /* @__PURE__ */ w({
  __name: "bus-wo-title-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { config: s } = G(), i = s.busWidgetUrl;
    return (o, d) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: p }) => [
        n("h3", null, l(p.attributes.name), 1),
        n("iframe", {
          class: "-ml-3.5",
          title: "bus widget",
          height: "300",
          width: "500",
          frameborder: "0",
          src: `${e(i)}${e(On)(
            `?lang=fr&id=${p.attributes.extid}`,
            `?lang=de&id=${p.attributes.extid}`,
            `?lang=en&id=${p.attributes.extid}`,
            `?lang=fr&id=${p.attributes.extid}`
          )}`
        }, null, 8, vs)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), ks = { class: "lux-tpl-poi-title" }, xs = { class: "lux-tpl-feature-info" }, As = { class: "poi-feature" }, $s = { class: "lux-tpl-casipo-form-container" }, Es = { class: "lux-tpl-casipo-mail" }, Ls = { class: "lux-tpl-casipo-checkbox" }, Ss = ["innerHTML"], Us = /* @__PURE__ */ w({
  __name: "casipo-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const i = t.layers, { config: o, user: d, notify: p } = G(), a = ae(""), f = ve(() => d.value?.mail || "");
    a.value = f.value;
    const _ = ae(!1), { t: g } = I("tooltips"), U = o.casipoUrl;
    function R(b, y, B) {
      return b.map(function(Ae) {
        return Ae.attributes[y];
      }).join(B);
    }
    async function T() {
      if (!a.value && !/^\S+@\S+\.\S+$/.test(a.value)) {
        p(g("Veuillez saisir une adresse email valide"), "warning");
        return;
      }
      if (!_.value) {
        p(g("Veuillez accepter les termes du rapport"), "warning");
        return;
      }
      const b = new URLSearchParams({
        email: a.value,
        staging: "false"
        // Assuming staging is always false for this example
      });
      fetch(
        U + "/report/" + R(i.features, "textstring", ",") + ".pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: b
        }
      ), p(
        g(
          "Votre rapport est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
          {
            email: a.value,
            ns: "app"
          }
        ),
        "info"
      );
    }
    return (b, y) => (r(), c(M, null, [
      n("h1", ks, l(e(g)(e(i).layerLabel, { ns: "layers" })), 1),
      n("div", xs, [
        n("div", As, [
          n("label", null, l(e(g)(
            "Ici vous pouvez commander le rapport relatif aux site potentiellement contaminés"
          )), 1),
          y[3] || (y[3] = n("br", null, null, -1)),
          y[4] || (y[4] = n("br", null, null, -1)),
          n("div", $s, [
            n("div", Es, [
              n("label", null, l(e(g)("Adresse Email")), 1),
              ee(n("input", {
                type: "text",
                "onUpdate:modelValue": y[0] || (y[0] = (B) => a.value = B),
                style: { width: "165px" }
              }, null, 512), [
                [ot, a.value]
              ])
            ]),
            n("div", Ls, [
              ee(n("input", {
                type: "checkbox",
                "onUpdate:modelValue": y[1] || (y[1] = (B) => _.value = B),
                id: "terms"
              }, null, 512), [
                [Wt, _.value]
              ]),
              n("label", {
                for: "terms",
                innerHTML: e(g)(
                  "En cochant cette case, l'utilisateur déclare avoir lu, compris et accepté les <a target='_blank' rel='noopener noreferrer' href='https://files.geoportail.lu/Conditions_utilisation_CASIPO.pdf'>conditions générales d'utilisation </a>de ce site web"
                )
              }, null, 8, Ss)
            ])
          ]),
          n("button", {
            class: "lux-btn-grey",
            onClick: y[2] || (y[2] = (B) => T()),
            target: "_blank"
          }, l(e(g)("Commander rapport")), 1)
        ])
      ])
    ], 64));
  }
}), Rs = { key: 0 }, ws = { key: 0 }, Cs = { key: 0 }, Os = { key: 1 }, Ds = ["href"], Ms = { key: 1 }, Is = { key: 0 }, Ps = ["href"], Ns = { key: 0 }, Fs = { key: 2 }, Hs = /* @__PURE__ */ w({
  __name: "default-attachment-no-prefix-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { config: i, profileComponent: o } = G(), d = i.downloadPdfUrl;
    return (p, a) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: f }) => [
        f.attributes.label ? (r(), c("h4", Rs, l(e(s)(f.attributes.label)), 1)) : m("", !0),
        e(we)(f) ? (r(), c(M, { key: 1 }, [
          (r(!0), c(M, null, J(e(qe)(
            f.attributes,
            t.layers.ordered,
            ""
          ), (_) => (r(), c("div", {
            key: _.key
          }, [
            !["has_sketch", "sketches"].includes(_.key) && !e(Me)(_.value) && e(at)(
              _,
              t.layers.layer,
              e(Q).language
            ) ? (r(), c("span", ws, [
              e(re)(_.value) ? m("", !0) : (r(), c("div", Cs, [
                n("label", null, l(e(s)(_.key)) + " : ", 1),
                ee(n("span", null, null, 512), [
                  [e(xe), _.value]
                ])
              ])),
              e(re)(_.value) ? (r(), c("div", Os, [
                a[1] || (a[1] = n("label", null, null, -1)),
                n("a", {
                  href: _.value,
                  target: "_blank"
                }, l(e(s)(_.key)), 9, Ds)
              ])) : m("", !0)
            ])) : ["sketches"].includes(_.key) ? (r(), c("span", Ms, [
              n("label", null, l(e(s)("Attachment")) + " : ", 1),
              f.attributes.has_sketch ? (r(), c("span", Is, [
                n("ul", null, [
                  (r(!0), c(M, null, J(f.attributes.sketches, (g) => (r(), c("li", {
                    key: g.id
                  }, [
                    n("a", {
                      class: "no-print",
                      target: "_blank",
                      download: "",
                      href: `${e(d)}?fid=${f.fid}&sketch_id=${g.id}`
                    }, l(e(s)(g.name)), 9, Ps)
                  ]))), 128))
                ])
              ])) : m("", !0)
            ])) : m("", !0)
          ]))), 128)),
          t.layers.has_profile && e(o) ? (r(), c("div", Ns, [
            (r(), C(Le(e(o)), {
              feature: f,
              onExport: a[0] || (a[0] = (_) => p.$emit("export", _))
            }, null, 40, ["feature"]))
          ])) : m("", !0)
        ], 64)) : (r(), c("div", Fs, [
          n("span", null, l(e(s)("Aucune information disponible pour cette couche")), 1)
        ]))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Bs = { key: 0 }, Ws = { key: 0 }, zs = { key: 0 }, Gs = { key: 1 }, Vs = ["href"], js = { key: 1 }, qs = { key: 0 }, Ks = ["href"], Xs = { key: 0 }, Ys = { key: 2 }, Zs = /* @__PURE__ */ w({
  __name: "default-attachment-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { config: i, profileComponent: o } = G(), d = i.downloadPdfUrl;
    return (p, a) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: f }) => [
        f.attributes.label ? (r(), c("h4", Bs, l(e(s)(f.attributes.label)), 1)) : m("", !0),
        e(we)(f) ? (r(), c(M, { key: 1 }, [
          (r(!0), c(M, null, J(e(qe)(
            f.attributes,
            t.layers.ordered
          ), (_) => (r(), c("div", {
            key: _.key
          }, [
            !["f_has_sketch", "f_sketches"].includes(_.key) && !e(Me)(_.value) && e(at)(
              _,
              t.layers.layer,
              e(Q).language
            ) ? (r(), c("span", Ws, [
              e(re)(_.value) ? m("", !0) : (r(), c("div", zs, [
                n("label", null, l(e(s)(_.key)) + " : ", 1),
                ee(n("span", null, null, 512), [
                  [e(xe), _.value]
                ])
              ])),
              e(re)(_.value) ? (r(), c("div", Gs, [
                a[1] || (a[1] = n("label", null, null, -1)),
                n("a", {
                  href: _.value,
                  target: "_blank"
                }, l(e(s)(_.key)), 9, Vs)
              ])) : m("", !0)
            ])) : ["f_sketches"].includes(_.key) ? (r(), c("span", js, [
              n("label", null, l(e(s)("Fichier à télécharger")) + " : ", 1),
              f.attributes.has_sketch ? (r(), c("span", qs, [
                n("ul", null, [
                  (r(!0), c(M, null, J(f.attributes.sketches, (g) => (r(), c("li", {
                    key: g.id
                  }, [
                    n("a", {
                      class: "no-print",
                      target: "_blank",
                      download: "",
                      href: `${e(d)}?fid=${f.fid}&sketch_id=${g.id}`
                    }, l(e(s)(g.name)), 9, Ks)
                  ]))), 128))
                ])
              ])) : m("", !0)
            ])) : m("", !0)
          ]))), 128)),
          t.layers.has_profile && e(o) ? (r(), c("div", Xs, [
            (r(), C(Le(e(o)), {
              feature: f,
              onExport: a[0] || (a[0] = (_) => p.$emit("export", _))
            }, null, 40, ["feature"]))
          ])) : m("", !0)
        ], 64)) : (r(), c("div", Ys, [
          n("span", null, l(e(s)("Aucune information disponible pour cette couche")), 1)
        ]))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Js = { key: 0 }, Qs = { key: 0 }, er = {
  key: 0,
  class: "flex"
}, tr = { class: "w-1/3" }, nr = { class: "w-2/3" }, lr = {
  key: 1,
  class: "flex"
}, sr = ["href"], rr = { key: 0 }, or = { key: 2 }, ar = /* @__PURE__ */ w({
  __name: "default-table-no-prefix-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { profileComponent: i } = G();
    return (o, d) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: p }) => [
        p.attributes.label ? (r(), c("h4", Js, l(e(s)(p.attributes.label)), 1)) : m("", !0),
        e(we)(p) ? (r(), c(M, { key: 1 }, [
          (r(!0), c(M, null, J(e(qe)(
            p.attributes,
            t.layers.ordered,
            ""
          ), (a) => (r(), c("div", {
            key: a.key
          }, [
            !e(Me)(a.value) && e(at)(
              a,
              t.layers.layer,
              e(Q).language
            ) ? (r(), c("span", Qs, [
              e(re)(a.value) ? m("", !0) : (r(), c("div", er, [
                n("label", tr, l(e(s)(a.key)), 1),
                ee(n("span", nr, null, 512), [
                  [e(xe), a.value]
                ])
              ])),
              e(re)(a.value) ? (r(), c("div", lr, [
                d[1] || (d[1] = n("label", { class: "w-1/3" }, null, -1)),
                n("a", {
                  class: "w-2/3",
                  href: a.value,
                  target: "_blank"
                }, l(e(s)(a.key)), 9, sr)
              ])) : m("", !0)
            ])) : m("", !0)
          ]))), 128)),
          t.layers.has_profile && e(i) ? (r(), c("div", rr, [
            (r(), C(Le(e(i)), {
              feature: p,
              onExport: d[0] || (d[0] = (a) => o.$emit("export", a))
            }, null, 40, ["feature"]))
          ])) : m("", !0)
        ], 64)) : (r(), c("div", or, [
          n("span", null, l(e(s)("Aucune information disponible pour cette couche")), 1)
        ]))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), ir = { key: 0 }, ur = { key: 0 }, cr = {
  key: 0,
  class: "flex"
}, dr = { class: "w-1/3" }, pr = { class: "w-2/3" }, mr = {
  key: 1,
  class: "flex"
}, fr = ["href"], _r = { key: 0 }, hr = { key: 2 }, gr = /* @__PURE__ */ w({
  __name: "default-table-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { profileComponent: i } = G();
    return (o, d) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: p }) => [
        p.attributes.label ? (r(), c("h4", ir, l(e(s)(p.attributes.label)), 1)) : m("", !0),
        e(we)(p) ? (r(), c(M, { key: 1 }, [
          (r(!0), c(M, null, J(e(qe)(
            p.attributes,
            t.layers.ordered
          ), (a) => (r(), c("div", {
            key: a.key
          }, [
            !e(Me)(a.value) && e(at)(
              a,
              t.layers.layer,
              e(Q).language
            ) ? (r(), c("span", ur, [
              e(re)(a.value) ? m("", !0) : (r(), c("div", cr, [
                n("label", dr, l(e(s)(a.key)), 1),
                ee(n("span", pr, null, 512), [
                  [e(xe), a.value]
                ])
              ])),
              e(re)(a.value) ? (r(), c("div", mr, [
                d[1] || (d[1] = n("label", { class: "w-1/3" }, null, -1)),
                n("a", {
                  class: "w-2/3",
                  href: a.value,
                  target: "_blank"
                }, l(e(s)(a.key)), 9, fr)
              ])) : m("", !0)
            ])) : m("", !0)
          ]))), 128)),
          t.layers.has_profile && e(i) ? (r(), c("div", _r, [
            (r(), C(Le(e(i)), {
              feature: p,
              onExport: d[0] || (d[0] = (a) => o.$emit("export", a))
            }, null, 40, ["feature"]))
          ])) : m("", !0)
        ], 64)) : (r(), c("div", hr, [
          n("span", null, l(e(s)("Aucune information disponible pour cette couche")), 1)
        ]))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), br = { class: "flex flex-col" }, yr = {
  class: "lux-tpl-poi-title",
  "data-cy": "defaultTemplateTitle"
}, vr = { key: 0 }, Tr = {
  key: 1,
  "data-cy": "defaultTemplateAttributes"
}, kr = { key: 0 }, xr = { key: 0 }, Ar = { key: 1 }, $r = ["href"], Er = ["href"], Lr = { class: "lux-tpl-solarkataster-button" }, Sr = ["href"], Ur = { class: "lux-tpl-solarkataster-button-old" }, Rr = { key: 5 }, wr = {
  controls: "",
  autoplay: "",
  style: { width: "260px", height: "50px" }
}, Cr = ["src"], Or = ["src"], Dr = { key: 2 }, Mr = {
  key: 3,
  class: "no-print"
}, Ir = {
  key: 4,
  class: "no-print"
}, Pr = ["href"], Nn = /* @__PURE__ */ w({
  __name: "default-template",
  props: {
    layers: {
      type: Object,
      required: !0
    },
    currentUrl: {
      type: String,
      required: !1
    }
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { config: i, user: o, profileComponent: d } = G();
    function p(U, R) {
      return !(U.startsWith("myenergy_solarkataster_luxemburg") || U.startsWith("eau_new_Wasserstand")) && re(R.value);
    }
    function a(U, R) {
      return U.startsWith("myenergy_solarkataster_luxemburg") && re(R.value) && R.key === "f_href";
    }
    function f(U, R) {
      return U.startsWith("eau_new_Wasserstand") && re(R.value) && R.key === "f_Graph";
    }
    function _(U) {
      return re(U.value) && U.key === "f_AudioURL";
    }
    function g() {
      const U = o.value?.roleId;
      return U !== void 0 && (i.solarEconomicAllowedRoleIds ?? []).includes(U);
    }
    return (U, R) => (r(), c("div", br, [
      n("div", null, [
        n("h2", yr, l(e(s)(t.layers.layerLabel, { ns: "layers" })), 1),
        (r(!0), c(M, null, J(t.layers.features, (T) => (r(), c("div", {
          key: T.id,
          class: "lux-tpl-feature-info"
        }, [
          T.attributes.label ? (r(), c("h4", vr, l(e(s)(T.attributes.label)), 1)) : m("", !0),
          e(we)(T) ? (r(), c("div", Tr, [
            (r(!0), c(M, null, J(e(qe)(
              T.attributes,
              t.layers.ordered
            ), (b) => (r(), c("div", {
              key: b.key
            }, [
              !e(Me)(b.value) && e(at)(
                b,
                t.layers.layer,
                e(Q).language
              ) ? (r(), c("div", kr, [
                e(re)(b.value) ? m("", !0) : (r(), c("label", xr, l(e(s)(b.key, { ns: "tooltips" })) + " : ", 1)),
                e(re)(b.value) ? m("", !0) : ee((r(), c("span", Ar, null, 512)), [
                  [e(xe), b.value]
                ]),
                p(t.layers.layerLabel, b) ? (r(), c("a", {
                  key: 2,
                  href: b.value,
                  target: "_blank"
                }, l(e(s)(b.key, { ns: "tooltips" })), 9, $r)) : m("", !0),
                a(t.layers.layerLabel, b) ? (r(), c("a", {
                  key: 3,
                  "data-cy": "defaultTemplateSolarLink",
                  href: `https://solar.klima-agence.lu/?lng=${e(Q).language !== "lb" ? e(Q).language : "de"}`,
                  target: "_blank"
                }, [
                  n("button", Lr, [
                    n("span", null, l(e(s)("Simulateur solaire")), 1)
                  ])
                ], 8, Er)) : m("", !0),
                a(t.layers.layerLabel, b) && g() ? (r(), c("a", {
                  key: 4,
                  "data-cy": "defaultTemplateSolarLink",
                  href: b.value,
                  target: "_blank"
                }, [
                  n("button", Ur, [
                    n("span", null, l(e(s)("Lien direct vers le calculateur d'efficacité économique")), 1)
                  ])
                ], 8, Sr)) : m("", !0),
                _(b) ? (r(), c("span", Rr, [
                  n("audio", wr, [
                    n("source", {
                      src: b.value,
                      type: "audio/wav"
                    }, null, 8, Cr)
                  ])
                ])) : m("", !0),
                f(t.layers.layerLabel, b) ? (r(), c("iframe", {
                  key: 6,
                  width: "260px",
                  height: "560px",
                  src: e(Cn)(b.value),
                  title: "water level graph"
                }, null, 8, Or)) : m("", !0)
              ])) : m("", !0)
            ]))), 128))
          ])) : m("", !0),
          t.layers.has_profile && e(d) ? (r(), c("div", Dr, [
            (r(), C(Le(e(d)), {
              feature: T,
              onExport: R[0] || (R[0] = (b) => U.$emit("export", b))
            }, null, 40, ["feature"]))
          ])) : m("", !0),
          e(we)(T) ? m("", !0) : (r(), c("div", Mr, [
            n("span", null, l(e(s)("Aucune information disponible pour cette couche")), 1)
          ])),
          e(wn)(T) ? (r(), c("div", Ir, [
            n("span", null, [
              n("a", {
                "data-cy": "defaultTemplateLink",
                href: t.currentUrl + "&fid=" + T.fid,
                target: "_blank"
              }, l(e(s)("Lien direct vers cet objet")), 9, Pr)
            ])
          ])) : m("", !0)
        ]))), 128))
      ])
    ]));
  }
}), Nr = /* @__PURE__ */ w({
  __name: "flik-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Numero FLIK")) + " : ", 1),
        $(" " + l(d.attributes.element) + l(d.attributes.flik), 1),
        o[0] || (o[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Surface")) + " : ", 1),
        $(" " + l(d.attributes.surface) + " a", 1),
        o[1] || (o[1] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Perimetre")) + " : ", 1),
        $(" " + l(d.attributes.perimetre) + " m", 1),
        o[2] || (o[2] = n("br", null, null, -1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Fr = { class: "lux-tpl-poi-title" }, Hr = { class: "lux-tpl-feature-info" }, Br = { class: "poi-feature" }, Wr = { class: "lux-tpl-forage-virtuel-form-container" }, zr = { class: "lux-tpl-forage-virtuel-mail" }, Gr = /* @__PURE__ */ w({
  __name: "forage-virtuel-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const i = t.layers, { config: o, user: d, notify: p } = G(), a = ae(""), f = ve(() => d.value?.mail || "");
    a.value = f.value;
    const { t: _ } = I("tooltips"), g = o.forageVirtuelUrl;
    async function U() {
      if (!a.value && !/^\S+@\S+\.\S+$/.test(a.value)) {
        p(_("Veuillez saisir une adresse email valide"), "warning");
        return;
      }
      const R = new URLSearchParams({
        x: String(i.features[0].geometry.coordinates[0]),
        y: String(i.features[0].geometry.coordinates[1]),
        email: a.value,
        staging: "false"
        // Assuming staging is always false for this example
      });
      fetch(g ?? "", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: R
      }), p(
        _(
          "Votre rapport est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
          {
            email: a.value,
            ns: "app"
          }
        ),
        "info"
      );
    }
    return (R, T) => (r(), c(M, null, [
      n("h1", Fr, l(e(_)(e(i).layerLabel, { ns: "layers" })), 1),
      n("div", Hr, [
        n("div", Br, [
          n("label", null, l(e(_)("Ici vous pouvez commander le rapport relatif au forage virtuel")), 1),
          T[2] || (T[2] = n("br", null, null, -1)),
          T[3] || (T[3] = n("br", null, null, -1)),
          n("div", Wr, [
            n("div", zr, [
              n("label", null, l(e(_)("Adresse Email")), 1),
              ee(n("input", {
                type: "text",
                "onUpdate:modelValue": T[0] || (T[0] = (b) => a.value = b),
                style: { width: "165px" }
              }, null, 512), [
                [ot, a.value]
              ])
            ])
          ]),
          n("button", {
            class: "lux-btn-grey",
            onClick: T[1] || (T[1] = (b) => U()),
            target: "_blank"
          }, l(e(_)("Commander rapport")), 1)
        ])
      ])
    ], 64));
  }
}), Vr = { class: "lux-tpl-poi-title" }, jr = { key: 0 }, qr = {
  href: "https://www.mobiliteit.lu/fr/horaires-et-lignes/tram/",
  target: "_blank"
}, Kr = { key: 1 }, Xr = {
  href: "https://www.mobiliteit.lu/fr/horaires-et-lignes/trains/",
  target: "_blank"
}, Yr = { key: 2 }, Zr = ["href"], Jr = ["href"], Qr = /* @__PURE__ */ w({
  __name: "lignes-bus-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), c(M, null, [
      n("h1", Vr, l(e(s)(t.layers.layerLabel, { ns: "layers" })), 1),
      n("table", null, [
        n("thead", null, [
          n("tr", null, [
            n("th", null, l(e(s)("Num ligne")), 1),
            n("th", null, l(e(s)("Description")), 1)
          ])
        ]),
        n("tbody", null, [
          (r(!0), c(M, null, J(t.layers.features, (d) => (r(), c("tr", {
            key: d.id,
            class: "lux-tpl-feature-info"
          }, [
            d.attributes.category_id === 404 ? (r(), c("td", jr, [
              n("a", qr, l(d.attributes.label), 1)
            ])) : m("", !0),
            d.attributes.category_id === 403 ? (r(), c("td", Kr, [
              n("a", Xr, l(d.attributes.label), 1)
            ])) : m("", !0),
            (d.attributes.category_id ?? 0) < 403 ? (r(), c("td", Yr, [
              n("a", {
                href: `https://www.mobiliteit.lu/fr/ligne/bus-${d.attributes.label}-${d.attributes.category_id === 400 ? "avl" : d.attributes.category_id === 401 ? "rgtr" : "tice"}`,
                target: "_blank"
              }, l(d.attributes.label), 9, Zr)
            ])) : m("", !0),
            n("td", null, [
              n("a", {
                href: `?map_id=${d.attributes.map_id}`,
                target: "_blank"
              }, l(d.attributes.map_description), 9, Jr)
            ])
          ]))), 128))
        ])
      ])
    ], 64));
  }
}), eo = ["src"], to = /* @__PURE__ */ w({
  __name: "meteo-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    return (s, i) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: o }) => [
        n("h3", null, l(o.attributes.stationsname) + " " + l(o.attributes.sid), 1),
        n("iframe", {
          title: "meteo widget",
          class: "-ml-3.5",
          height: "150",
          width: "300",
          frameborder: "0",
          src: `https://dlr-web-daten1.aspdienste.de/cgi-bin/sinfoam.pl?c=92&nid=01&lid=${o.attributes.sid}`
        }, null, 8, eo)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), no = /* @__PURE__ */ w({
  __name: "meteolux-europe-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    return (s, i) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: o }) => [
        n("h3", null, l(o.attributes.station) + " (" + l(o.attributes.icao) + ")", 1),
        n("label", null, l(o.attributes.weather), 1),
        i[0] || (i[0] = $(" ", -1)),
        n("span", null, l(o.attributes.temperature) + "°C", 1)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), lo = /* @__PURE__ */ w({
  __name: "meteolux-gr-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    return (s, i) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: o }) => [
        n("h3", null, l(o.attributes.station) + " (" + l(o.attributes.icao) + ")", 1),
        i[0] || (i[0] = n("label", null, "TAF:", -1)),
        i[1] || (i[1] = $()),
        n("span", null, l(o.attributes.taf), 1),
        i[2] || (i[2] = n("br", null, null, -1)),
        i[3] || (i[3] = n("label", null, "Metar:", -1)),
        i[4] || (i[4] = $()),
        n("span", null, l(o.attributes.metar), 1)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), so = ["onClick"], ro = /* @__PURE__ */ w({
  __name: "mo-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { config: s, notify: i } = G(), o = s.shopUrl, d = s.shopIpv6Url, { t: p } = I("tooltips"), a = async function(f, _) {
      const R = `${location.search.includes("ipv6=true") ? d : o}/Portail/commande/webservices/orderAffaireV3.jsp?numCommune=${encodeURIComponent(
        f
      )}&numMesurage=${encodeURIComponent(_)}&ticket=`;
      try {
        const T = await fetch(R, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        });
        T.ok && (await T.text()).includes("ok") ? i(p("Fichier GML commandé."), "info") : i(p("Erreur lors de la commande du fichier."), "error");
      } catch {
        i(p("Erreur lors de la commande du fichier."), "error");
      }
    };
    return (f, _) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: g }) => [
        n("h3", null, l(g.attributes.K_MEASUREMENTID), 1),
        n("span", null, l(e(p)("Affaire")), 1),
        $(" : " + l(g.attributes.K_MEASUREMENTID), 1),
        _[0] || (_[0] = n("br", null, null, -1)),
        n("span", null, l(e(p)("Commune administrative")), 1),
        $(" : " + l(g.attributes.K_NOM_COMMUNE_ADMINISTRATIVE), 1),
        _[1] || (_[1] = n("br", null, null, -1)),
        n("span", null, l(e(p)("Commune cadastrale")), 1),
        $(" : " + l(g.attributes.K_NOM_COMMUNE_CADASTRALE), 1),
        _[2] || (_[2] = n("br", null, null, -1)),
        n("span", null, l(e(p)("Mesurage")), 1),
        $(" : " + l(g.attributes.K_MEASUREMENTNUMBER), 1),
        _[3] || (_[3] = n("br", null, null, -1)),
        n("button", {
          class: "lux-btn-grey",
          onClick: (U) => a(
            g.attributes.K_KATASTERGEMEINDE,
            g.attributes.K_MEASUREMENTNUMBER
          )
        }, l(e(p)("Commander fichier GML")), 9, so)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), oo = ["href"], ao = ["src"], io = { key: 1 }, uo = { key: 2 }, co = { key: 3 }, po = { key: 4 }, mo = ["src"], fo = ["href"], _o = /* @__PURE__ */ w({
  __name: "mymaps-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { config: i, profileComponent: o } = G();
    return (d, p) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: a }) => [
        n("h4", null, l(a.attributes.sentier), 1),
        a.attributes.image && a.attributes.image.trim() !== "" ? (r(), c("a", {
          key: 0,
          href: e(hn)(a.attributes.image, e(i).v3ApiHost),
          target: "_blank"
        }, [
          a.attributes.thumbnail && a.attributes.thumbnail.trim() !== "" ? (r(), c("img", {
            key: 0,
            src: e(hn)(
              a.attributes.thumbnail,
              e(i).v3ApiHost
            )
          }, null, 8, ao)) : m("", !0)
        ], 8, oo)) : m("", !0),
        p[5] || (p[5] = n("br", null, null, -1)),
        a.attributes.sentier ? (r(), c("span", io, [
          n("span", null, l(e(s)("sentier")), 1),
          $(" : " + l(a.attributes.sentier), 1),
          p[1] || (p[1] = n("br", null, null, -1))
        ])) : m("", !0),
        a.attributes.name ? (r(), c("span", uo, [
          n("span", null, l(e(s)("Name")), 1),
          $(" : " + l(a.attributes.name), 1),
          p[2] || (p[2] = n("br", null, null, -1))
        ])) : m("", !0),
        a.attributes.description ? (r(), c("span", co, [
          n("span", null, l(e(s)("Description")), 1),
          $(" : " + l(a.attributes.description), 1),
          p[3] || (p[3] = n("br", null, null, -1))
        ])) : m("", !0),
        a.attributes.length ? (r(), c("span", po, [
          n("span", null, l(e(s)("Longeueur")), 1),
          $(" : " + l(a.attributes.length) + " Km", 1),
          p[4] || (p[4] = n("br", null, null, -1))
        ])) : m("", !0),
        e(o) ? (r(), C(Le(e(o)), {
          key: 5,
          feature: a,
          onExport: p[0] || (p[0] = (f) => d.$emit("export", f))
        }, null, 40, ["feature"])) : m("", !0),
        n("img", {
          src: e(ol)(a.attributes.map_id, e(i).qrUrl)
        }, null, 8, mo),
        p[6] || (p[6] = n("br", null, null, -1)),
        n("a", {
          class: "fid-link no-print",
          href: `?map_id=${a.attributes.map_id}`,
          target: "_blank"
        }, l(e(s)("Lien vers la carte")), 9, fo),
        p[7] || (p[7] = n("br", null, null, -1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), ho = { key: 0 }, go = ["href"], bo = { key: 1 }, yo = /* @__PURE__ */ w({
  __name: "ng95-new-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips"), { config: i } = G(), o = i.downloadSketchUrl;
    return (d, p) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: a }) => [
        n("h4", null, l(e(s)(a.attributes.Nom)), 1),
        n("span", null, l(e(s)("Elevation")), 1),
        $(" : " + l(a.attributes["nouv. cote"]), 1),
        p[0] || (p[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Type")), 1),
        $(" : " + l(a.attributes["type rivet"]), 1),
        p[1] || (p[1] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Croquis")), 1),
        p[2] || (p[2] = $(" : ", -1)),
        a.attributes.has_sketch ? (r(), c("span", ho, [
          n("a", {
            class: "no-print",
            target: "_blank",
            download: "",
            href: `${e(o)}?id=${a.attributes.OBJECTID}&type=new`
          }, l(e(s)("Obtenir le fichier sous format pdf")), 9, go)
        ])) : m("", !0),
        a.attributes.has_sketch ? m("", !0) : (r(), c("span", bo, l(e(s)("Croquis indisponible")), 1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), vo = { key: 0 }, To = ["href"], ko = { key: 1 }, xo = /* @__PURE__ */ w({
  __name: "ng95-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips"), { config: i } = G(), o = i.downloadSketchUrl;
    return (d, p) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: a }) => [
        n("h4", null, l(e(s)(a.attributes.nom)), 1),
        n("span", null, l(e(s)("Elevation")), 1),
        $(" : " + l(a.attributes.nouv_cote), 1),
        p[0] || (p[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Type")), 1),
        $(" : " + l(a.attributes.type_rivet), 1),
        p[1] || (p[1] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Croquis")), 1),
        p[2] || (p[2] = $(" : ", -1)),
        a.attributes.has_sketch ? (r(), c("span", vo, [
          n("a", {
            class: "no-print",
            target: "_blank",
            download: "",
            href: `${e(o)}?name=${a.attributes.nom_croq}`
          }, l(e(s)("Obtenir le fichier sous format pdf")), 9, To)
        ])) : m("", !0),
        a.attributes.has_sketch ? m("", !0) : (r(), c("span", ko, l(e(s)("Croquis indisponible")), 1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Ao = {
  key: 0,
  class: "lux-tpl-npour-poi-h3"
}, $o = {
  key: 1,
  class: "lux-tpl-npour-poi-h3"
}, Eo = {
  key: 2,
  class: "lux-tpl-npour-poi-h3"
}, Lo = {
  key: 3,
  class: "lux-tpl-npour-poi-h3"
}, So = {
  key: 4,
  class: "lux-tpl-npour-poi-h3"
}, Uo = {
  key: 5,
  class: "npour-poi-h3"
}, Ro = {
  key: 6,
  class: "npour-poi-h3"
}, wo = {
  key: 7,
  class: "npour-poi-h3"
}, Co = { key: 8 }, Oo = { key: 9 }, Do = { key: 10 }, Mo = { key: 11 }, Io = { key: 12 }, Po = { key: 13 }, No = { key: 14 }, Fo = { key: 15 }, Ho = { key: 16 }, Bo = { key: 17 }, Wo = { key: 18 }, zo = ["href"], Go = { key: 19 }, Vo = ["href"], jo = { key: 20 }, qo = ["href"], Ko = { key: 21 }, Xo = ["href"], Yo = { key: 22 }, Zo = ["src"], Jo = { key: 23 }, Qo = /* @__PURE__ */ w({
  __name: "npour-poi-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { i18next: i } = I("tooltips"), { profileComponent: o } = G();
    return (d, p) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: a }) => [
        e(i).language == "de" && e(D)("title_de", a, 0) ? (r(), c("h3", Ao, l(a.attributes.title_de), 1)) : m("", !0),
        e(i).language == "en" && e(D)("title_en", a, 0) ? (r(), c("h3", $o, l(a.attributes.title_en), 1)) : m("", !0),
        e(i).language == "lb" && e(D)("title_nl", a, 0) ? (r(), c("h3", Eo, l(a.attributes.title_nl), 1)) : m("", !0),
        e(i).language == "fr" && e(D)("title_fr", a, 0) ? (r(), c("h3", Lo, l(a.attributes.title_fr), 1)) : m("", !0),
        e(i).language == "de" && e(D)("nom_de", a, 0) ? (r(), c("h3", So, l(a.attributes.nom_de), 1)) : m("", !0),
        e(i).language == "fr" && e(D)("nom_fr", a, 0) ? (r(), c("h3", Uo, l(a.attributes.nom_fr), 1)) : m("", !0),
        e(i).language == "en" && e(D)("nom_en", a, 0) ? (r(), c("h3", Ro, l(a.attributes.nom_en), 1)) : m("", !0),
        e(i).language == "lb" && e(D)("nom_lu", a, 0) ? (r(), c("h3", wo, l(a.attributes.nom_lu), 1)) : m("", !0),
        e(i).language == "de" && e(D)("descr_de", a, 0) ? (r(), c("span", Co, l(a.attributes.descr_de), 1)) : m("", !0),
        e(i).language == "fr" && e(D)("descr_fr", a, 0) ? (r(), c("span", Oo, l(a.attributes.descr_fr), 1)) : m("", !0),
        e(i).language == "en" && e(D)("descr_en", a, 0) ? (r(), c("span", Do, l(a.attributes.descr_en), 1)) : m("", !0),
        e(i).language == "lb" && e(D)("descr_nl", a, 0) ? (r(), c("span", Mo, l(a.attributes.descr_nl), 1)) : m("", !0),
        e(D)("number", a, 0) ? (r(), c("span", Io, l(a.attributes.number) + ",", 1)) : m("", !0),
        e(D)("street", a, 0) ? (r(), c("span", Po, l(a.attributes.street), 1)) : m("", !0),
        e(D)("town", a, 0) ? (r(), c("span", No, l(a.attributes.zip) + " " + l(a.attributes.town), 1)) : m("", !0),
        e(D)("phone", a, 1) ? (r(), c("span", Fo, [
          fe(ye, { name: "phone" }),
          n("span", null, l(a.attributes.phone), 1)
        ])) : m("", !0),
        e(D)("fax", a, 1) ? (r(), c("span", Ho, [
          fe(ye, { name: "fax" }),
          n("span", null, l(a.attributes.fax), 1)
        ])) : m("", !0),
        e(D)("email", a, 1) ? (r(), c("span", Bo, [
          fe(ye, { name: "at" }),
          n("span", null, l(a.attributes.email), 1)
        ])) : m("", !0),
        e(D)("website", a, 3) && a.attributes.website.startsWith("http") ? (r(), c("span", Wo, [
          n("a", {
            target: "_blank",
            href: a.attributes.website
          }, l(a.attributes.website), 9, zo)
        ])) : m("", !0),
        e(D)("website", a, 3) && !a.attributes.website.startsWith("http") ? (r(), c("span", Go, [
          n("a", {
            target: "_blank",
            href: "http://" + a.attributes.website
          }, l(a.attributes.website), 9, Vo)
        ])) : m("", !0),
        e(i).language != "fr" && e(D)("link_de", a, 3) ? (r(), c("span", jo, [
          n("a", {
            target: "_blank",
            href: a.attributes.link_de
          }, l(a.attributes.link_de), 9, qo)
        ])) : m("", !0),
        e(i).language == "fr" && e(D)("link_fr", a, 3) ? (r(), c("span", Ko, [
          n("a", {
            target: "_blank",
            href: a.attributes.link_fr
          }, l(a.attributes.link_fr), 9, Xo)
        ])) : m("", !0),
        e(D)("Bild", a, 3) ? (r(), c("span", Yo, [
          n("img", {
            src: a.attributes.Bild,
            width: "250"
          }, null, 8, Zo)
        ])) : m("", !0),
        e(D)("longueur sentier", a, 0) ? (r(), c("div", Jo, [
          n("span", null, l(e(s)("Longueur du sentier :")), 1),
          n("span", null, l(a.attributes["longueur sentier"]), 1)
        ])) : m("", !0),
        e(o) ? (r(), C(Le(e(o)), {
          key: 24,
          feature: a,
          onExport: p[0] || (p[0] = (f) => d.$emit("export", f))
        }, null, 40, ["feature"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), ea = {
  key: 0,
  class: "lux-tpl-npour-poi-h3"
}, ta = {
  key: 1,
  class: "lux-tpl-npour-poi-h3"
}, na = {
  key: 2,
  class: "lux-tpl-npour-poi-h3"
}, la = {
  key: 3,
  class: "lux-tpl-npour-poi-h3"
}, sa = {
  key: 4,
  class: "lux-tpl-npour-poi-h3"
}, ra = {
  key: 5,
  class: "lux-tpl-npour-poi-h3"
}, oa = {
  key: 6,
  class: "lux-tpl-npour-poi-h3"
}, aa = {
  key: 7,
  class: "lux-tpl-npour-poi-h3"
}, ia = { key: 8 }, ua = { key: 9 }, ca = { key: 10 }, da = { key: 11 }, pa = { key: 12 }, ma = ["href"], fa = { key: 13 }, _a = ["href"], ha = { key: 14 }, ga = ["src"], ba = { key: 15 }, ya = /* @__PURE__ */ w({
  __name: "npour-wo-address-poi-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const { t: s } = I("tooltips"), { i18next: i } = I("tooltips");
    return (o, d) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: p }) => [
        e(i).language == "de" && e(D)("title_de", p, 0) ? (r(), c("h3", ea, l(p.attributes.title_de), 1)) : m("", !0),
        e(i).language == "en" && e(D)("title_en", p, 0) ? (r(), c("h3", ta, l(p.attributes.title_en), 1)) : m("", !0),
        e(i).language == "lb" && e(D)("title_nl", p, 0) ? (r(), c("h3", na, l(p.attributes.title_nl), 1)) : m("", !0),
        e(i).language == "fr" && e(D)("title_fr", p, 0) ? (r(), c("h3", la, l(p.attributes.title_fr), 1)) : m("", !0),
        e(i).language == "de" && e(D)("nom_de", p, 0) ? (r(), c("h3", sa, l(p.attributes.nom_de), 1)) : m("", !0),
        e(i).language == "fr" && e(D)("nom_fr", p, 0) ? (r(), c("h3", ra, l(p.attributes.nom_fr), 1)) : m("", !0),
        e(i).language == "en" && e(D)("nom_en", p, 0) ? (r(), c("h3", oa, l(p.attributes.nom_en), 1)) : m("", !0),
        e(i).language == "lb" && e(D)("nom_lu", p, 0) ? (r(), c("h3", aa, l(p.attributes.nom_lu), 1)) : m("", !0),
        e(i).language == "de" && e(D)("descr_de", p, 0) ? (r(), c("span", ia, l(p.attributes.descr_de), 1)) : m("", !0),
        e(i).language == "fr" && e(D)("descr_fr", p, 0) ? (r(), c("span", ua, l(p.attributes.descr_fr), 1)) : m("", !0),
        e(i).language == "en" && e(D)("descr_en", p, 0) ? (r(), c("span", ca, l(p.attributes.descr_en), 1)) : m("", !0),
        e(i).language == "lb" && e(D)("descr_nl", p, 0) ? (r(), c("span", da, l(p.attributes.descr_nl), 1)) : m("", !0),
        e(i).language != "fr" && e(D)("link_de", p, 3) ? (r(), c("span", pa, [
          n("a", {
            target: "_blank",
            href: p.attributes.link_de
          }, l(p.attributes.link_de), 9, ma)
        ])) : m("", !0),
        e(i).language == "fr" && e(D)("link_fr", p, 3) ? (r(), c("span", fa, [
          n("a", {
            target: "_blank",
            href: p.attributes.link_fr
          }, l(p.attributes.link_fr), 9, _a)
        ])) : m("", !0),
        e(D)("Bild", p, 3) ? (r(), c("span", ha, [
          n("img", {
            src: p.attributes.Bild,
            width: "250"
          }, null, 8, ga)
        ])) : m("", !0),
        e(D)("longueur sentier", p, 0) ? (r(), c("div", ba, [
          n("span", null, l(e(s)("Longueur du sentier :")), 1),
          n("span", null, l(p.attributes["longueur sentier"]), 1)
        ])) : m("", !0)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), va = { class: "lux-tpl-poi-title" }, Ta = { class: "lux-tpl-feature-info" }, ka = { class: "poi-feature" }, xa = { class: "lux-tpl-pag-form-container" }, Aa = { class: "lux-tpl-pag-mail" }, $a = { class: "lux-tpl-pag-checkbox" }, Ea = ["innerHTML"], La = /* @__PURE__ */ w({
  __name: "pag-staging-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const i = t.layers, { config: o, user: d, notify: p } = G(), a = ae(""), f = ve(() => d.value?.mail || "");
    a.value = f.value;
    const _ = ae(!1), { t: g } = I("tooltips"), U = o.pagUrl;
    function R(b, y, B) {
      return b.map(function(Ae) {
        return Ae.attributes[y];
      }).join(B);
    }
    async function T() {
      if (!a.value && !/^\S+@\S+\.\S+$/.test(a.value)) {
        p(g("Veuillez saisir une adresse email valide"), "warning");
        return;
      }
      if (!_.value) {
        p(g("Veuillez accepter les termes du rapport"), "warning");
        return;
      }
      const b = new URLSearchParams({
        email: a.value,
        staging: "true"
      });
      fetch(
        U + "/report/" + R(i.features, "OBJECTID", ",") + ".pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: b
        }
      ), p(
        g(
          "Votre rapport est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
          {
            email: a.value,
            ns: "app"
          }
        ),
        "info"
      );
    }
    return (b, y) => (r(), c(M, null, [
      n("h1", va, l(e(g)(e(i).layerLabel, { ns: "layers" })), 1),
      n("div", Ta, [
        n("div", ka, [
          n("label", null, l(e(g)(
            "Ici vous pouvez commander le rapport relatif aux règles urbanistiques applicables au terrain séctionné"
          )), 1),
          y[3] || (y[3] = n("br", null, null, -1)),
          y[4] || (y[4] = n("br", null, null, -1)),
          n("div", xa, [
            n("div", Aa, [
              n("label", null, l(e(g)("Adresse Email")), 1),
              ee(n("input", {
                type: "text",
                "onUpdate:modelValue": y[0] || (y[0] = (B) => a.value = B),
                style: { width: "165px" }
              }, null, 512), [
                [ot, a.value]
              ])
            ]),
            n("div", $a, [
              ee(n("input", {
                type: "checkbox",
                "onUpdate:modelValue": y[1] || (y[1] = (B) => _.value = B),
                id: "terms"
              }, null, 512), [
                [Wt, _.value]
              ]),
              n("label", {
                for: "terms",
                innerHTML: e(g)(
                  "En cochant cette case, l'utilisateur déclare avoir lu, compris et accepté les <a target='_blank' rel='noopener noreferrer' href='https://files.geoportail.lu/pag/Disclaimer.pdf'>conditions générales d'utilisation </a>de ce site web"
                )
              }, null, 8, Ea)
            ])
          ]),
          n("button", {
            class: "lux-btn-grey",
            onClick: y[2] || (y[2] = (B) => T()),
            target: "_blank"
          }, l(e(g)("Commander rapport")), 1)
        ])
      ])
    ], 64));
  }
}), Sa = { class: "lux-tpl-poi-title" }, Ua = { class: "lux-tpl-feature-info" }, Ra = { class: "poi-feature" }, wa = { class: "lux-tpl-pag-form-container" }, Ca = { class: "lux-tpl-pag-mail" }, Oa = { class: "lux-tpl-pag-checkbox" }, Da = ["innerHTML"], Ma = /* @__PURE__ */ w({
  __name: "pag-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const i = t.layers, { config: o, user: d, notify: p } = G(), a = ae(""), f = ve(() => d.value?.mail || "");
    a.value = f.value;
    const _ = ae(!1), { t: g } = I("tooltips"), U = o.pagUrl;
    function R(b, y, B) {
      return b.map(function(Ae) {
        return Ae.attributes[y];
      }).join(B);
    }
    async function T() {
      if (!a.value && !/^\S+@\S+\.\S+$/.test(a.value)) {
        p(g("Veuillez saisir une adresse email valide"), "warning");
        return;
      }
      if (!_.value) {
        p(g("Veuillez accepter les termes du rapport"), "warning");
        return;
      }
      const b = new URLSearchParams({
        email: a.value,
        staging: "false"
        // Assuming staging is always false for this example
      });
      fetch(
        U + "/report/" + R(i.features, "OBJECTID", ",") + ".pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: b
        }
      ), p(
        g(
          "Votre rapport est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
          {
            email: a.value,
            ns: "app"
          }
        ),
        "info"
      );
    }
    return (b, y) => (r(), c(M, null, [
      n("h1", Sa, l(e(g)(e(i).layerLabel, { ns: "layers" })), 1),
      n("div", Ua, [
        n("div", Ra, [
          n("label", null, l(e(g)(
            "Ici vous pouvez commander le rapport relatif aux règles urbanistiques applicables au terrain séctionné"
          )), 1),
          y[3] || (y[3] = n("br", null, null, -1)),
          y[4] || (y[4] = n("br", null, null, -1)),
          n("div", wa, [
            n("div", Ca, [
              n("label", null, l(e(g)("Adresse Email")), 1),
              ee(n("input", {
                type: "text",
                "onUpdate:modelValue": y[0] || (y[0] = (B) => a.value = B),
                style: { width: "165px" }
              }, null, 512), [
                [ot, a.value]
              ])
            ]),
            n("div", Oa, [
              ee(n("input", {
                type: "checkbox",
                "onUpdate:modelValue": y[1] || (y[1] = (B) => _.value = B),
                id: "terms"
              }, null, 512), [
                [Wt, _.value]
              ]),
              n("label", {
                for: "terms",
                innerHTML: e(g)(
                  "En cochant cette case, l'utilisateur déclare avoir lu, compris et accepté les <a target='_blank' rel='noopener noreferrer' href='https://files.geoportail.lu/pag/Disclaimer.pdf'>conditions générales d'utilisation </a>de ce site web"
                )
              }, null, 8, Da)
            ])
          ]),
          n("button", {
            class: "lux-btn-grey",
            onClick: y[2] || (y[2] = (B) => T()),
            target: "_blank"
          }, l(e(g)("Commander rapport")), 1)
        ])
      ])
    ], 64));
  }
}), Ia = ["role"], Pa = { class: "bg-white shadow-modal rounded-lg overflow-hidden w-[700px]" }, Na = { class: "relative flex flex-row items-center py-2 px-4 border-b-[1px]" }, Fa = {
  key: 0,
  class: "p-[15px] border-t-[1px]"
}, Ha = { class: "flex flex-row justify-end" }, Ba = /* @__PURE__ */ w({
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
    title: String,
    role: {
      type: String,
      default: "dialog"
    }
  },
  emits: ["close"],
  setup(t) {
    const { t: s } = I(), i = `modal-title-${Math.random().toString(36).slice(2)}`, o = ae();
    Kn(() => {
      (o.value?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) ?? o.value)?.focus();
    });
    const d = Xn(!0);
    function p() {
      d.value = !1;
    }
    return (a, f) => (r(), C(Yn, { to: "body" }, [
      f[5] || (f[5] = n("div", { class: "fixed inset-0 bg-gray-900 opacity-40 z-[1050]" }, null, -1)),
      fe(Zn, {
        appear: "",
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "transform opacity-0 -translate-y-60",
        "enter-to-class": "opacity-100 translate-y-0",
        "leave-active-class": "duration-200 ease-in",
        "leave-from-class": "opacity-100 translate-y-0",
        "leave-to-class": "transform opacity-0 -translate-y-60",
        onAfterLeave: f[3] || (f[3] = (_) => a.$emit("close"))
      }, {
        default: P(() => [
          d.value ? (r(), c("div", {
            key: 0,
            role: t.role,
            "aria-labelledby": i,
            "aria-modal": !0,
            ref_key: "modal",
            ref: o,
            tabindex: "-1",
            onKeydown: f[2] || (f[2] = Jn(Qn((_) => p(), ["stop"]), ["esc"])),
            class: "fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
          }, [
            n("div", Pa, [
              n("div", Na, [
                n("h4", {
                  id: i,
                  class: "text-xl grow"
                }, l(t.title), 1),
                n("button", {
                  type: "button",
                  class: "text-slate-400 text-2xl",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  onClick: f[0] || (f[0] = (_) => p())
                }, [...f[4] || (f[4] = [
                  n("span", { "aria-hidden": "true" }, "×", -1)
                ])])
              ]),
              n("div", {
                class: Ft(["p-[15px] overflow-y-auto", t.maxHeight ? "max-h-96" : "max-h-full"])
              }, [
                rt(a.$slots, "content")
              ], 2),
              t.footer ? (r(), c("div", Fa, [
                rt(a.$slots, "footer", {}, () => [
                  n("div", Ha, [
                    n("button", {
                      class: "lux-btn",
                      "data-dismiss": "modal",
                      onClick: f[1] || (f[1] = (_) => p())
                    }, l(e(s)("Close", { ns: "app" })), 1)
                  ])
                ])
              ])) : m("", !0)
            ])
          ], 40, Ia)) : m("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Wa = {
  key: 0,
  class: "mt-2 mb-3"
}, za = ["src"], Ga = { class: "flex flex-row justify-end" }, Va = ["href"], ja = ["href"], qa = /* @__PURE__ */ w({
  __name: "info-feature-measurement-modale",
  props: {
    measurement: {}
  },
  setup(t) {
    const s = t, { config: i } = G(), o = i.downloadPreviewUrl ?? "", d = i.downloadMeasurementUrl ?? "", { t: p, i18next: a } = I(), f = ve(() => {
      const T = s.measurement.available_formats;
      return Array.isArray(T) ? T.filter(
        (b) => typeof b == "string" && b.length > 0
      ) : typeof T == "string" && T.length > 0 ? [T] : [];
    }), _ = ve(() => f.value[0]), g = ve(
      () => f.value.some(
        (T) => T.toLowerCase() === "pdf" || T.toLowerCase() === "tiff"
      )
    ), U = ve(() => !g.value && _.value ? Ee.sanitizeUrl(
      `${d}?document_id=${s.measurement.document_id}&format=${encodeURIComponent(_.value)}`
    ) : Ee.sanitizeUrl(
      o + "?document_id=" + s.measurement.document_id
    )), R = ve(() => {
      const T = `${d}?document_id=${s.measurement.document_id}`;
      return _.value ? Ee.sanitizeUrl(
        `${T}&format=${encodeURIComponent(_.value)}`
      ) : Ee.sanitizeUrl(T);
    });
    return (T, b) => t.measurement ? (r(), C(Ba, {
      key: 0,
      footer: !0,
      "max-height": !0,
      title: e(p)("Prévisualisation du mesurage"),
      onClose: b[1] || (b[1] = (y) => T.$emit("close"))
    }, {
      content: P(() => [
        t.measurement.isDownloadable ? m("", !0) : (r(), c("p", Wa, l(e(p)(
          "Pour des raisons de protection de données, nous ne pouvons pas afficher les documents de la mensuration officielle en résolution complète, par contre vous avez la possibilité de les commander de manière individuelle et traçable"
        )), 1)),
        U.value ? (r(), c("img", {
          key: 1,
          src: U.value
        }, null, 8, za)) : m("", !0)
      ]),
      footer: P(() => [
        n("div", Ga, [
          n("button", {
            type: "button",
            class: "lux-btn",
            "data-dismiss": "modal",
            onClick: b[0] || (b[0] = (y) => T.$emit("close"))
          }, l(e(p)("Annuler")), 1),
          t.measurement.is_downloadable ? (r(), c("a", {
            key: 1,
            class: "lux-btn ml-3",
            target: "_blank",
            href: R.value
          }, l(e(p)("Télécharger")), 9, ja)) : (r(), c("a", {
            key: 0,
            class: "lux-btn ml-3",
            target: "_blank",
            href: `https://commande.geoportail.lu?&camefrom=mapv3&lang=${e(a).language}&documents=MESURAGE;EXTRAIT_MIXTE&ids=['${t.measurement.parcelId}']&remark=${t.measurement.description}`
          }, l(e(p)("Commander")), 9, Va))
        ])
      ]),
      _: 1
    }, 8, ["title"])) : m("", !0);
  }
}), Ka = { key: 0 }, Xa = { class: "lux-tpl-parcels-template-h2" }, Ya = { key: 0 }, Za = { key: 1 }, Ja = { key: 2 }, Qa = ["href"], ei = { key: 3 }, ti = ["href"], ni = { class: "mt-1 mb-1" }, li = ["aria-label"], si = ["aria-pressed", "aria-label"], ri = { class: "text-xs mt-0.5" }, oi = ["aria-pressed", "aria-label"], ai = { class: "text-xs mt-0.5" }, ii = { class: "measurement-hierarchy" }, ui = ["aria-expanded", "onClick"], ci = {
  key: 0,
  class: "pl-6"
}, di = ["aria-expanded", "onClick"], pi = {
  key: 0,
  class: "list-disc pl-10 mt-0"
}, mi = ["onClick"], fi = {
  key: 1,
  class: "text-gray-700"
}, _i = ["href", "aria-label"], hi = {
  key: 1,
  class: "text-gray-500"
}, gi = {
  key: 1,
  class: "flex flex-wrap gap-2 pl-4 mt-1"
}, bi = {
  key: 0,
  class: "flex flex-col items-center"
}, yi = ["aria-label", "onClick"], vi = ["src", "alt"], Ti = {
  key: 1,
  class: "border border-gray-300 rounded overflow-hidden"
}, ki = ["src", "alt"], xi = { class: "text-xs text-gray-600 mt-0.5" }, Ai = {
  key: 1,
  class: "flex items-center"
}, $i = { class: "text-gray-500 text-sm" }, Ei = {
  key: 1,
  class: "measurement-audience-group"
}, Li = ["aria-expanded", "onClick"], Si = {
  key: 0,
  class: "pl-6"
}, Ui = ["aria-expanded", "onClick"], Ri = {
  key: 0,
  class: "list-disc pl-10 mt-0"
}, wi = ["onClick"], Ci = {
  key: 1,
  class: "text-gray-700"
}, Oi = ["href", "aria-label"], Di = {
  key: 1,
  class: "text-gray-500"
}, Mi = {
  key: 1,
  class: "flex flex-wrap gap-2 pl-4 mt-1"
}, Ii = {
  key: 0,
  class: "flex flex-col items-center"
}, Pi = ["aria-label", "onClick"], Ni = ["src", "alt"], Fi = {
  key: 1,
  class: "border border-gray-300 rounded overflow-hidden"
}, Hi = ["src", "alt"], Bi = { class: "text-xs text-gray-600 mt-0.5" }, Wi = {
  key: 1,
  class: "flex items-center"
}, zi = { class: "text-gray-500 text-sm" }, Gi = ["href"], Vi = ["href"], Nt = /* @__PURE__ */ w({
  __name: "parcels-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const s = t, { config: i, isThemeAvailable: o } = G(), d = (L) => o?.(L) ?? !1, p = i.downloadMeasurementUrl ?? "", a = i.thumbnailMeasurementUrl ?? "", { t: f } = I("tooltips");
    function _(L) {
      const k = L.available_formats;
      return Array.isArray(k) ? k.filter((E) => typeof E == "string" && E.length > 0) : typeof k == "string" && k.length > 0 ? [k] : [];
    }
    function g(L) {
      const k = `${p}?document_id=${L.document_id}`, E = _(L)[0];
      return E ? `${k}&format=${encodeURIComponent(E)}` : k;
    }
    const U = ae(), R = ae("links"), T = ae(/* @__PURE__ */ new Set()), b = ae(/* @__PURE__ */ new Map()), y = ae(/* @__PURE__ */ new Map()), B = ve(() => {
      const L = s.layers.features?.[0]?.attributes?.measurements;
      return L ? Ke(L) : {};
    });
    el(
      B,
      (L) => {
        T.value = /* @__PURE__ */ new Set(), y.value = /* @__PURE__ */ new Map(), Object.entries(L).forEach(([k, E]) => {
          E.public && (T.value.add(k), Object.keys(E.public).forEach((A) => {
            const F = `${k}_public_${A}`;
            y.value.has(k) || y.value.set(k, /* @__PURE__ */ new Set()), y.value.get(k).add(F);
          }));
        });
      },
      { immediate: !0 }
    );
    function Ae(L) {
      T.value.has(L) ? T.value.delete(L) : T.value.add(L);
    }
    function ht(L, k) {
      const E = `${L}_${k}`;
      b.value.has(L) || b.value.set(L, /* @__PURE__ */ new Set());
      const A = b.value.get(L);
      A.has(E) ? A.delete(E) : A.add(E);
    }
    function it(L, k, E) {
      const A = `${L}_${k}_${E}`;
      y.value.has(L) || y.value.set(L, /* @__PURE__ */ new Set());
      const F = y.value.get(L);
      F.has(A) ? F.delete(A) : F.add(A);
    }
    function Se(L) {
      return T.value.has(L);
    }
    function X(L, k) {
      const E = `${L}_${k}`, A = b.value.get(L);
      return A ? A.has(E) : !1;
    }
    function ce(L, k, E) {
      const A = `${L}_${k}_${E}`, F = y.value.get(L);
      return F ? F.has(A) : !1;
    }
    function Ke(L) {
      const k = {};
      return L.forEach((E) => {
        if (!E.measurementType)
          return;
        const A = String(E.measurementNumber), F = String(E.target_audience || "public"), H = String(E.description);
        k[A] || (k[A] = {}), k[A][F] || (k[A][F] = {}), k[A][F][H] || (k[A][F][H] = []), k[A][F][H].push(E);
      }), k;
    }
    function gt(L) {
      const k = ["public", "GO", "ACT"];
      return L.filter((E) => k.includes(E)).sort((E, A) => k.indexOf(E) - k.indexOf(A));
    }
    function bt(L) {
      const A = document.createElement("canvas");
      A.width = 96, A.height = 96;
      const F = A.getContext("2d");
      return F.fillStyle = "#ffffff", F.fillRect(0, 0, 96, 96), F.strokeStyle = "#cccccc", F.strokeRect(0.5, 0.5, 95, 95), F.fillStyle = "#555555", F.font = "bold 13px sans-serif", F.textAlign = "center", F.textBaseline = "middle", F.fillText(L.toUpperCase(), 96 / 2, 96 / 2), A.toDataURL("image/png");
    }
    function Ie(L) {
      const k = _(L);
      return !k.some(
        (A) => A.toLowerCase() === "pdf" || A.toLowerCase() === "tiff"
      ) && k.length > 0 ? bt(k[0]) : `${a}?document_id=${L.document_id}`;
    }
    function Pe(L) {
      return _(L).some(
        (E) => E.toLowerCase() === "pdf" || E.toLowerCase() === "tiff"
      );
    }
    function j(L) {
      U.value = L;
    }
    function Ne() {
      U.value = void 0;
    }
    return (L, k) => (r(), c(M, null, [
      U.value ? (r(), C(qa, {
        key: 0,
        measurement: U.value,
        onClose: Ne
      }, null, 8, ["measurement"])) : m("", !0),
      fe(N, {
        layers: t.layers,
        currentUrl: t.currentUrl
      }, {
        "feature-content": P(({ feature: E }) => [
          E.attributes.PF ? (r(), c(M, { key: 1 }, [
            n("h2", Xa, l(E.attributes.PF.mainNumber) + "/" + l(E.attributes.PF.additionalNumber), 1),
            n("span", null, l(e(f)("Commune")), 1),
            $(" : " + l(E.attributes.PF.townName), 1),
            k[3] || (k[3] = n("br", null, null, -1)),
            n("span", null, l(e(f)("Section")), 1),
            $(" : " + l(E.attributes.PF.sectionDesignation), 1),
            k[4] || (k[4] = n("br", null, null, -1)),
            n("span", null, l(e(f)("Numero cadastral")), 1),
            $(" : " + l(E.attributes.PF.mainNumber) + "/" + l(E.attributes.PF.additionalNumber), 1),
            k[5] || (k[5] = n("br", null, null, -1)),
            n("span", null, l(e(f)("Contenance")), 1),
            $(" : " + l(E.attributes.PF.capacity), 1),
            k[6] || (k[6] = n("br", null, null, -1)),
            n("span", null, l(e(f)("Lieudit")), 1),
            $(" : " + l(E.attributes.PF.locality), 1),
            k[7] || (k[7] = n("br", null, null, -1)),
            E.attributes.PF.farmingTypes && Object.keys(E.attributes.PF.farmingTypes).length > 0 ? (r(), c("div", Ya, [
              n("span", null, l(e(f)("Nature")), 1),
              $(" : " + l(e(_n)(
                E.attributes.PF.farmingTypes,
                "pf"
              )), 1)
            ])) : m("", !0),
            E.attributes.PF.occupations && Object.keys(E.attributes.PF.occupations).length > 0 ? (r(), c("div", Za, [
              n("span", null, l(e(f)("Occupation")), 1),
              $(" : " + l(e(_n)(
                E.attributes.PF.occupations,
                "pf"
              )), 1)
            ])) : m("", !0),
            n("div", null, [
              n("span", null, l(e(f)("Dernier mesurage")), 1),
              $(" : " + l(E.attributes.PF.measurementNumber), 1)
            ]),
            d("go") ? (r(), c("div", Ja, [
              n("a", {
                class: "lux-btn inline-block mb-1",
                href: `https://shop.geoportail.lu/Portail/express_mesurage/?ids=['${E.attributes.textstring}']&camefrom=mapv3_go&lang=${e(Q).language}`,
                target: "_blank",
                rel: "noopener noreferrer"
              }, l(e(f)("Constitution de dossier de mesurage")), 9, Qa)
            ])) : m("", !0),
            d("go") || d("prof") || d("municipalities") ? (r(), c("div", ei, [
              n("a", {
                class: "lux-btn inline-block mb-1",
                href: `https://xxpfo.intranet.etat.lu/xxpfoi/detail_parcelle.do?noParcelle=${E.attributes.textstring}`,
                target: "_blank",
                rel: "noopener noreferrer"
              }, l(e(f)("Ouvrir la PF")), 9, ti)
            ])) : m("", !0),
            n("div", ni, [
              n("span", null, l(e(f)("Lien vers les mesurages")), 1),
              k[2] || (k[2] = $(" : ", -1)),
              n("div", {
                class: "flex rounded overflow-hidden text-sm mt-1",
                role: "group",
                "aria-label": e(f)("Mode d'affichage des mesurages")
              }, [
                n("button", {
                  class: Ft([
                    "flex flex-col items-center px-3 py-1 transition-colors",
                    R.value === "links" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                  ]),
                  "aria-pressed": R.value === "links",
                  "aria-label": e(f)("Afficher les liens"),
                  onClick: k[0] || (k[0] = (A) => R.value = "links")
                }, [
                  fe(ye, { name: "list" }),
                  n("span", ri, l(e(f)("Liens")), 1)
                ], 10, si),
                n("button", {
                  class: Ft([
                    "flex flex-col items-center px-3 py-1 transition-colors border-l border-gray-300",
                    R.value === "thumbnails" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                  ]),
                  "aria-pressed": R.value === "thumbnails",
                  "aria-label": e(f)("Afficher les aperçus"),
                  onClick: k[1] || (k[1] = (A) => R.value = "thumbnails")
                }, [
                  fe(ye, { name: "grid" }),
                  n("span", ai, l(e(f)("Aperçus")), 1)
                ], 10, oi)
              ], 8, li)
            ]),
            n("div", ii, [
              (r(!0), c(M, null, J(Object.entries(
                B.value
              ).sort((A, F) => Number(F[0]) - Number(A[0])), ([A, F]) => (r(), c("div", {
                key: A,
                class: "measurement-number-group"
              }, [
                n("button", {
                  class: "measurement-number-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded",
                  "aria-expanded": Se(A),
                  onClick: (H) => Ae(A)
                }, [
                  fe(ye, {
                    class: "mr-2 text-sm",
                    name: Se(A) ? "caret-up" : "caret-down"
                  }, null, 8, ["name"]),
                  n("span", null, l(e(f)("No")) + " " + l(A), 1)
                ], 8, ui),
                Se(A) ? (r(), c("div", ci, [
                  (r(!0), c(M, null, J(gt(
                    Object.keys(F)
                  ), (H) => (r(), c(M, { key: H }, [
                    H === "public" ? (r(!0), c(M, { key: 0 }, J(F[H], (Ue, te) => (r(), c("div", {
                      key: te,
                      class: "measurement-type-group pl-0"
                    }, [
                      n("button", {
                        class: "measurement-type-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded",
                        "aria-expanded": ce(
                          A,
                          H,
                          te
                        ),
                        onClick: (v) => it(
                          A,
                          H,
                          te
                        )
                      }, [
                        fe(ye, {
                          class: "mr-2 text-sm",
                          name: ce(
                            A,
                            H,
                            te
                          ) ? "caret-up" : "caret-down"
                        }, null, 8, ["name"]),
                        n("span", null, l(e(f)("MESURAGE_" + te, { ns: "layers" })), 1)
                      ], 8, di),
                      R.value === "links" && ce(
                        A,
                        H,
                        te
                      ) ? (r(), c("ul", pi, [
                        (r(!0), c(M, null, J(Ue, (v) => (r(), c("li", {
                          key: v.document_id
                        }, [
                          v.document_id ? (r(), c(M, { key: 0 }, [
                            Pe(v) ? (r(), c("button", {
                              key: 0,
                              class: "cursor-pointer text-blue-600 hover:underline",
                              onClick: (Fe) => j(v)
                            }, l(e(pe)(
                              v.date_document,
                              "fr-FR",
                              !1
                            )), 9, mi)) : (r(), c("span", fi, [
                              $(l(e(pe)(
                                v.date_document,
                                "fr-FR",
                                !1
                              )) + " ", 1),
                              n("span", null, "(" + l(_(
                                v
                              )[0]?.toUpperCase() ?? e(f)("Pas de preview disponible")) + ")", 1)
                            ])),
                            v.is_downloadable ? (r(), c("a", {
                              key: 2,
                              class: "ml-2",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              href: g(v),
                              "aria-label": e(f)("Télécharger le mesurage du") + " " + e(pe)(
                                v.date_document,
                                "fr-FR",
                                !1
                              )
                            }, [
                              fe(ye, { name: "download" })
                            ], 8, _i)) : m("", !0)
                          ], 64)) : (r(), c("span", hi, l(e(f)("Mesurage non disponible")), 1))
                        ]))), 128))
                      ])) : m("", !0),
                      R.value === "thumbnails" && ce(
                        A,
                        H,
                        te
                      ) ? (r(), c("div", gi, [
                        (r(!0), c(M, null, J(Ue, (v) => (r(), c(M, {
                          key: v.document_id
                        }, [
                          v.document_id ? (r(), c("div", bi, [
                            Pe(v) ? (r(), c("button", {
                              key: 0,
                              class: "border border-gray-300 rounded overflow-hidden hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400",
                              "aria-label": e(f)("Prévisualiser le mesurage du") + " " + e(pe)(
                                v.date_document,
                                "fr-FR",
                                !1
                              ),
                              onClick: (Fe) => j(v)
                            }, [
                              n("img", {
                                src: Ie(v),
                                alt: e(f)("Aperçu mesurage du") + " " + e(pe)(
                                  v.date_document,
                                  "fr-FR",
                                  !1
                                ),
                                class: "w-24 h-24 object-cover",
                                loading: "lazy"
                              }, null, 8, vi)
                            ], 8, yi)) : (r(), c("div", Ti, [
                              n("img", {
                                src: Ie(v),
                                alt: e(f)("Aperçu mesurage du") + " " + e(pe)(
                                  v.date_document,
                                  "fr-FR",
                                  !1
                                ),
                                class: "w-24 h-24 object-cover",
                                loading: "lazy"
                              }, null, 8, ki)
                            ])),
                            n("span", xi, l(e(pe)(
                              v.date_document,
                              "fr-FR",
                              !1
                            )), 1)
                          ])) : (r(), c("div", Ai, [
                            n("span", $i, l(e(f)("Mesurage non disponible")), 1)
                          ]))
                        ], 64))), 128))
                      ])) : m("", !0)
                    ]))), 128)) : (r(), c("div", Ei, [
                      n("button", {
                        class: "measurement-audience-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded",
                        "aria-expanded": X(A, H),
                        onClick: (Ue) => ht(A, H)
                      }, [
                        fe(ye, {
                          class: "mr-2 text-sm",
                          name: X(A, H) ? "caret-up" : "caret-down"
                        }, null, 8, ["name"]),
                        n("span", null, l(e(f)(`target_audience_${H}`, H)), 1)
                      ], 8, Li),
                      X(A, H) ? (r(), c("div", Si, [
                        (r(!0), c(M, null, J(F[H], (Ue, te) => (r(), c("div", {
                          key: te,
                          class: "measurement-type-group"
                        }, [
                          n("button", {
                            class: "measurement-type-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded",
                            "aria-expanded": ce(
                              A,
                              H,
                              te
                            ),
                            onClick: (v) => it(
                              A,
                              H,
                              te
                            )
                          }, [
                            fe(ye, {
                              class: "mr-2 text-sm",
                              name: ce(
                                A,
                                H,
                                te
                              ) ? "caret-up" : "caret-down"
                            }, null, 8, ["name"]),
                            n("span", null, l(e(f)("MESURAGE_" + te, { ns: "layers" })), 1)
                          ], 8, Ui),
                          R.value === "links" && ce(
                            A,
                            H,
                            te
                          ) ? (r(), c("ul", Ri, [
                            (r(!0), c(M, null, J(Ue, (v) => (r(), c("li", {
                              key: v.document_id
                            }, [
                              v.document_id ? (r(), c(M, { key: 0 }, [
                                Pe(v) ? (r(), c("button", {
                                  key: 0,
                                  class: "cursor-pointer text-blue-600 hover:underline",
                                  onClick: (Fe) => j(v)
                                }, l(e(pe)(
                                  v.date_document,
                                  "fr-FR",
                                  !1
                                )), 9, wi)) : (r(), c("span", Ci, [
                                  $(l(e(pe)(
                                    v.date_document,
                                    "fr-FR",
                                    !1
                                  )) + " ", 1),
                                  n("span", null, "(" + l(_(
                                    v
                                  )[0]?.toUpperCase() ?? e(f)("Pas de preview disponible")) + ")", 1)
                                ])),
                                v.is_downloadable ? (r(), c("a", {
                                  key: 2,
                                  class: "ml-2",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: g(v),
                                  "aria-label": e(f)("Télécharger le mesurage du") + " " + e(pe)(
                                    v.date_document,
                                    "fr-FR",
                                    !1
                                  )
                                }, [
                                  fe(ye, { name: "download" })
                                ], 8, Oi)) : m("", !0)
                              ], 64)) : (r(), c("span", Di, l(e(f)("Mesurage non disponible")), 1))
                            ]))), 128))
                          ])) : m("", !0),
                          R.value === "thumbnails" && ce(
                            A,
                            H,
                            te
                          ) ? (r(), c("div", Mi, [
                            (r(!0), c(M, null, J(Ue, (v) => (r(), c(M, {
                              key: v.document_id
                            }, [
                              v.document_id ? (r(), c("div", Ii, [
                                Pe(v) ? (r(), c("button", {
                                  key: 0,
                                  class: "border border-gray-300 rounded overflow-hidden hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400",
                                  "aria-label": e(f)("Prévisualiser le mesurage du") + " " + e(pe)(
                                    v.date_document,
                                    "fr-FR",
                                    !1
                                  ),
                                  onClick: (Fe) => j(v)
                                }, [
                                  n("img", {
                                    src: Ie(v),
                                    alt: e(f)("Aperçu mesurage du") + " " + e(pe)(
                                      v.date_document,
                                      "fr-FR",
                                      !1
                                    ),
                                    class: "w-24 h-24 object-cover",
                                    loading: "lazy"
                                  }, null, 8, Ni)
                                ], 8, Pi)) : (r(), c("div", Fi, [
                                  n("img", {
                                    src: Ie(v),
                                    alt: e(f)("Aperçu mesurage du") + " " + e(pe)(
                                      v.date_document,
                                      "fr-FR",
                                      !1
                                    ),
                                    class: "w-24 h-24 object-cover",
                                    loading: "lazy"
                                  }, null, 8, Hi)
                                ])),
                                n("span", Bi, l(e(pe)(
                                  v.date_document,
                                  "fr-FR",
                                  !1
                                )), 1)
                              ])) : (r(), c("div", Wi, [
                                n("span", zi, l(e(f)("Mesurage non disponible")), 1)
                              ]))
                            ], 64))), 128))
                          ])) : m("", !0)
                        ]))), 128))
                      ])) : m("", !0)
                    ]))
                  ], 64))), 128))
                ])) : m("", !0)
              ]))), 128))
            ]),
            n("a", {
              class: "lux-btn inline-block mb-1",
              href: `https://historique.geoportail.lu/?id=${E.attributes.textstring}`,
              target: "_blank",
              rel: "noopener noreferrer"
            }, l(e(f)("Historique de la parcelle")), 9, Gi),
            n("a", {
              class: "lux-btn inline-block mb-1",
              href: `https://commande.geoportail.lu/?ids=['${E.attributes.textstring}']&camefrom=mapv3&lang=${e(Q).language}`,
              target: "_blank",
              rel: "noopener noreferrer"
            }, l(e(f)("Commander un extrait")), 9, Vi)
          ], 64)) : (r(), c("div", Ka, l(e(f)("No parcel data available")), 1))
        ]),
        _: 1
      }, 8, ["layers", "currentUrl"])
    ], 64));
  }
}), ji = ["href"], qi = { key: 1 }, Ki = ["href"], Xi = /* @__PURE__ */ w({
  __name: "pcn-pag-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { config: s } = G(), i = s.downloadPagReportUrl, { t: o } = I("tooltips");
    return (d, p) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "layer-content": P(() => [
        t.layers.features.length ? (r(), c("a", {
          key: 0,
          class: "lux-btn",
          download: "",
          href: `${e(i)}/${e(rl)(
            t.layers.features,
            "OBJECTID",
            ","
          )}.pdf`,
          target: "_blank"
        }, l(e(o)("Generer un rapport pour toutes les selections")), 9, ji)) : (r(), c("span", qi, l(e(o)("Aucune information disponible pour cette couche")), 1))
      ]),
      "feature-content": P(({ feature: a }) => [
        n("span", null, l(e(o)("Identifiant")), 1),
        $(" : " + l(a.attributes.OBJECTID), 1),
        p[0] || (p[0] = n("br", null, null, -1)),
        n("a", {
          class: "lux-btn",
          download: "",
          href: `${e(i)}/${a.attributes.OBJECTID}.pdf`,
          target: "_blank"
        }, l(e(o)("Generer Rapport (peut prendre 30 sec)")), 9, Ki)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), Yi = { class: "lux-tpl-poi-title" }, Zi = { class: "lux-tpl-feature-info" }, Ji = { class: "poi-feature" }, Qi = { class: "lux-tpl-pds-form-container" }, eu = { class: "lux-tpl-pds-mail" }, tu = /* @__PURE__ */ w({
  __name: "pds-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const i = t.layers, { config: o, user: d, notify: p } = G(), a = ae(""), f = ve(() => d.value?.mail || "");
    a.value = f.value;
    const { t: _ } = I("tooltips"), g = o.pdsUrl;
    function U(T, b, y) {
      return T.map(function(B) {
        return B.attributes[b];
      }).join(y);
    }
    async function R() {
      if (!a.value && !/^\S+@\S+\.\S+$/.test(a.value)) {
        p(_("Veuillez saisir une adresse email valide"), "warning");
        return;
      }
      const T = new URLSearchParams({
        email: a.value,
        staging: "false"
        // Assuming staging is always false for this example
      });
      fetch(
        g + "/report/" + U(i.features, "textstring", ",") + ".pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: T
        }
      ), p(
        _(
          "Votre attestation est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
          {
            email: a.value,
            ns: "app"
          }
        ),
        "info"
      );
    }
    return (T, b) => (r(), c(M, null, [
      n("h1", Yi, l(e(_)(e(i).layerLabel, { ns: "layers" })), 1),
      n("div", Zi, [
        n("div", Ji, [
          n("label", null, l(e(_)(
            `Ici vous pouvez commander l'attestation "plans directeurs sectoriels" par rapport au terrain séctionné`
          )), 1),
          b[2] || (b[2] = n("br", null, null, -1)),
          b[3] || (b[3] = n("br", null, null, -1)),
          n("div", Qi, [
            n("div", eu, [
              n("label", null, l(e(_)("Adresse Email")), 1),
              ee(n("input", {
                type: "text",
                "onUpdate:modelValue": b[0] || (b[0] = (y) => a.value = y),
                style: { width: "165px" }
              }, null, 512), [
                [ot, a.value]
              ])
            ])
          ]),
          n("button", {
            class: "lux-btn-grey",
            onClick: b[1] || (b[1] = (y) => R()),
            target: "_blank"
          }, l(e(_)("Commander rapport")), 1)
        ])
      ])
    ], 64));
  }
}), nu = ["src"], lu = /* @__PURE__ */ w({
  __name: "pegel-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    return (s, i) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: o }) => [
        n("h3", null, l(o.attributes.Nom), 1),
        n("iframe", {
          width: "300",
          height: "1500",
          frameborder: "0",
          src: e(Cn)(
            "http://geoportail.eau.etat.lu/pdf/112/" + o.attributes.Nom + ".html"
          )
        }, null, 8, nu)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), su = /* @__PURE__ */ w({
  __name: "remembrements-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Nom")), 1),
        $(" : " + l(d.attributes.K_NAME), 1),
        o[0] || (o[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Statut")), 1),
        o[1] || (o[1] = $(" : ", -1)),
        n("span", null, l(e(s)("rem_status_" + d.attributes.K_STATUS)), 1),
        o[2] || (o[2] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Type")), 1),
        o[3] || (o[3] = $(" : ", -1)),
        n("span", null, l(e(s)("rem_typ_" + d.attributes.K_TYP)), 1)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), ru = {
  key: 0,
  style: { "margin-top": "0.75rem", "margin-bottom": "0.75rem" }
}, ou = ["href"], au = { key: 1 }, iu = /* @__PURE__ */ w({
  __name: "sentier-nature-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  emits: ["export"],
  setup(t) {
    const s = t, { config: i, profileComponent: o } = G(), d = i.downloadResourceUrl, { t: p } = I("tooltips");
    function a(f) {
      return `${s.currentUrl}&fid=${s.layers.layer}_${f.attributes.id_qr}`;
    }
    return (f, _) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl,
      getDirectLink: a
    }, {
      "feature-content": P(({ feature: g }) => [
        n("h4", null, l(g.attributes.sentier), 1),
        e(we)(g) ? (r(), c(M, { key: 0 }, [
          n("div", null, [
            n("label", null, l(e(p)("Longueur du parcours")), 1),
            _[1] || (_[1] = $(" : ", -1)),
            n("span", null, l(g.attributes.formatted_length), 1),
            g.attributes.link ? (r(), c("div", ru, [
              n("a", {
                class: "lux-btn",
                style: { "padding-top": "0.5rem", "padding-bottom": "0.5rem" },
                href: `${e(d)}?fid=${t.layers.layer}_${g.attributes.objectid}&attribute=link&id_attribute=objectid`,
                target: "_blank"
              }, l(e(p)("Télécharger la brochure")), 9, ou)
            ])) : m("", !0)
          ]),
          e(o) ? (r(), C(Le(e(o)), {
            key: 0,
            feature: g,
            onExport: _[0] || (_[0] = (U) => f.$emit("export", U))
          }, null, 40, ["feature"])) : m("", !0)
        ], 64)) : (r(), c("div", au, l(e(p)("Aucune information disponible pour cette couche")), 1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), uu = { class: "lux-tpl-urplang-title" }, cu = ["href"], du = ["src"], pu = /* @__PURE__ */ w({
  __name: "urplang-template",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("h2", uu, l(d.attributes.nom_commune) + " " + l(d.attributes.section) + " " + l(d.attributes.feuille), 1),
        d.attributes.thumb ? (r(), c(M, { key: 0 }, [
          n("a", {
            href: d.attributes.path,
            target: "_blank"
          }, [
            n("img", {
              src: d.attributes.thumb,
              width: "250"
            }, null, 8, du)
          ], 8, cu),
          n("span", null, l(e(s)("Cliquez dans l'image pour agrandir")), 1)
        ], 64)) : m("", !0)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), mu = /* @__PURE__ */ w({
  __name: "viti-flik",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Numero FLIK")), 1),
        $(" : " + l(d.attributes.CODE_ELEM) + l(d.attributes.FLIK), 1),
        o[0] || (o[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Commune cadastrale")), 1),
        $(" : " + l(d.attributes.CODE_COM), 1),
        o[1] || (o[1] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Section cadastrale")), 1),
        $(" : " + l(d.attributes.CODE_SECT), 1),
        o[2] || (o[2] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Surface")), 1),
        $(" : " + l(d.attributes.F_Area_2021) + " a ", 1)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), fu = /* @__PURE__ */ w({
  __name: "viti-kleinlage",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Nom")), 1),
        $(" : " + l(d.attributes.kleinlage), 1)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), _u = /* @__PURE__ */ w({
  __name: "viti-name",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Nom")), 1),
        $(" : " + l(d.attributes.grosslage), 1)
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), hu = /* @__PURE__ */ w({
  __name: "viti-parcels",
  props: {
    layers: {},
    currentUrl: {}
  },
  setup(t) {
    const { t: s } = I("tooltips");
    return (i, o) => (r(), C(N, {
      layers: t.layers,
      currentUrl: t.currentUrl
    }, {
      "feature-content": P(({ feature: d }) => [
        n("span", null, l(e(s)("Numero")), 1),
        $(" : V" + l(d.attributes.Weinbergsn), 1),
        o[0] || (o[0] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Commune")), 1),
        $(" : " + l(d.attributes.CODE_COM), 1),
        o[1] || (o[1] = n("br", null, null, -1)),
        n("span", null, l(e(s)("Section")), 1),
        $(" : " + l(d.attributes.CODE_SECT), 1),
        o[2] || (o[2] = n("br", null, null, -1))
      ]),
      _: 1
    }, 8, ["layers", "currentUrl"]));
  }
}), gu = {
  "adresse.html": jl,
  "aero.html": Yl,
  "affaires.html": Zl,
  "asta_esp.html": es,
  "automatic_sols.html": hs,
  "batiments.html": gs,
  "bus_wo_title.html": Ts,
  "bus.html": ys,
  "casipo.html": Us,
  "default.html": Nn,
  "default_attachment.html": Zs,
  "default_attachment_no_prefix.html": Hs,
  "default_table.html": gr,
  "default_table_no_prefix.html": ar,
  "flik.html": Nr,
  "forage_virtuel.html": Gr,
  "lignes_bus.html": Qr,
  "meteo.html": to,
  "meteolux_europe.html": no,
  "meteolux_gr.html": lo,
  "mymaps.html": _o,
  "mo.html": ro,
  "ng95.html": xo,
  "ng95_new.html": yo,
  "npour_poi.html": Qo,
  "npour_poi_wo_address.html": ya,
  "parcels.html": Nt,
  "parcels_prof.html": Nt,
  "parcels_go.html": Nt,
  "pcn_pag.html": Xi,
  "pag.html": Ma,
  "pag_staging.html": La,
  "pds.html": tu,
  "pegel.html": lu,
  "remembrements.html": su,
  "sentier_nature.html": iu,
  "urplang.html": pu,
  "viti_flik.html": mu,
  "viti_kleinlage.html": fu,
  "viti_name.html": _u,
  "viti_parcels.html": hu
};
function Ru(t) {
  return gu[t] ?? Nn;
}
const Un = "tooltips", bu = "app";
function yu(t) {
  const s = t.options.supportedLngs, i = Array.isArray(s) ? s.filter((o) => o && o !== "cimode") : void 0;
  return i && i.length > 0 ? i : Object.keys(t.store.data);
}
function vu(t) {
  for (const s of yu(t)) {
    const i = t.getResourceBundle(s, bu);
    if (!i || typeof i != "object")
      continue;
    const d = {
      ...t.getResourceBundle(s, Un) ?? {}
    };
    let p = !1;
    for (const [a, f] of Object.entries(i)) {
      if (typeof f != "string")
        continue;
      const _ = d[a];
      (_ == null || _ === "" || _ === a) && (d[a] = f, p = !0);
    }
    p && t.addResourceBundle(
      s,
      Un,
      d,
      !0,
      !0
    );
  }
}
function Tu(t) {
  const s = () => vu(t);
  return s(), t.on("loaded", s), t.on("languageChanged", s), () => {
    t.off("loaded", s), t.off("languageChanged", s);
  };
}
const ku = [
  "app",
  "layers",
  "legends",
  "server",
  "tooltips"
], xu = ["de", "en", "fr", "lb"];
function Au(t) {
  return {
    lng: "fr",
    debug: !1,
    defaultNS: "app",
    fallbackNS: "app",
    returnEmptyString: !1,
    supportedLngs: [...xu],
    ns: [...ku],
    fallbackLng: "en",
    backend: { loadPath: t },
    // ! force separator off because some i18n keys have ':'
    nsSeparator: !1,
    keySeparator: !1
  };
}
async function wu(t, s, i = {}) {
  return await t.init({ ...Au(s), ...i }), Tu(t), t;
}
const $u = { InfoFeatureLayout: N, LuxTplRoot: dl }, Cu = {
  install(t, s) {
    for (const [i, o] of Object.entries($u))
      t.component(i, o);
    s && t.provide(zt, s);
  }
};
export {
  jl as AdresseTemplate,
  Yl as AeroTemplate,
  Zl as AffairesTemplate,
  es as AstaTemplate,
  hs as AutomaticSolsTemplate,
  gs as BatimentsTemplate,
  ys as BusTemplate,
  Ts as BusWoTitleTemplate,
  Us as CasipoTemplate,
  Hs as DefaultAttachmentNoPrefixTemplate,
  Zs as DefaultAttachmentTemplate,
  ar as DefaultTableNoPrefixTemplate,
  gr as DefaultTableTemplate,
  Nn as DefaultTemplate,
  Nr as FlikTemplate,
  Gr as ForageVirtuelTemplate,
  N as InfoFeatureLayout,
  zt as LUX_TPL_CONTEXT,
  tl as LUX_TPL_I18N,
  Hl as LUX_TPL_ICON_PATHS,
  xu as LUX_TPL_LANGUAGES,
  ku as LUX_TPL_NAMESPACES,
  Qr as LignesBusTemplate,
  ye as LuxTplIcon,
  dl as LuxTplRoot,
  to as MeteoTemplate,
  no as MeteoluxEuropeTemplate,
  lo as MeteoluxGrTemplate,
  ro as MoTemplate,
  _o as MymapsTemplate,
  yo as Ng95NewTemplate,
  xo as Ng95Template,
  Qo as NpOurPoiTemplate,
  ya as NpOurWoAddressPoiTemplate,
  La as PagStagingTemplate,
  Ma as PagTemplate,
  Nt as ParcelsTemplate,
  Xi as PcnPagTemplate,
  tu as PdsTemplate,
  lu as PegelTemplate,
  su as RemembrementsTemplate,
  iu as SentierNatureTemplate,
  pu as UrplangTemplate,
  mu as VitiFlikTemplate,
  fu as VitiKleinlageTemplate,
  _u as VitiNameTemplate,
  hu as VitiParcelsTemplate,
  Su as createLuxTplI18n,
  wu as createLuxTplI18next,
  Cu as default,
  pe as formatDate,
  hn as getMymapsPath,
  ol as getQRUrlForMyMaps,
  Ru as getTemplateComponent,
  Cn as getTrustedUrl,
  On as getTrustedUrlByLang,
  we as hasAttributes,
  D as hasProperty,
  wn as hasValidFID,
  vu as hydrateTooltipFallbackTranslations,
  Tu as installTooltipFallbackTranslations,
  Me as isEmptyString,
  sl as isFIDValid,
  re as isLink,
  rl as joinAttributes,
  Au as luxTplI18nextOptions,
  gu as luxTplTemplates,
  Uu as provideLuxTplContext,
  at as showAttributesByLang,
  qe as sortedAttributeEntries,
  _n as translateAndjoin,
  G as useLuxTplContext,
  I as useLuxTranslation,
  xe as vLuxHtml
};
