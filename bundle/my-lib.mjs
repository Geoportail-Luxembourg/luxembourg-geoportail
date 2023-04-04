import { defineComponent as f, shallowRef as v, onMounted as k, onUnmounted as w, openBlock as o, createElementBlock as s, createElementVNode as n, normalizeClass as d, unref as i, toDisplayString as _, Fragment as g, renderList as C } from "vue";
const L = { class: "lux-dropdown" }, B = { class: "h-full" }, E = ["aria-expanded"], V = /* @__PURE__ */ n("span", { class: "lux-caret" }, null, -1), y = { class: "lux-dropdown-wrapper" }, D = ["aria-label", "data-value"], z = /* @__PURE__ */ f({
  __name: "dropdown-list",
  props: {
    placeholder: null,
    options: null,
    modelValue: null
  },
  emits: ["change"],
  setup(c, { emit: h }) {
    const a = c, l = v(!1), u = v();
    function r(e) {
      l.value = e === void 0 ? !l.value : e;
    }
    function x(e) {
      e.stopImmediatePropagation(), r();
    }
    function b(e) {
      u.value = e.target.dataset.value, h("change", u.value);
    }
    function p() {
      r(!1);
    }
    return k(() => document.addEventListener("click", p)), w(() => document.removeEventListener("click", p)), (e, O) => {
      var m;
      return o(), s("div", L, [
        n("div", B, [
          n("button", {
            type: "button",
            class: d(["lux-btn lux-dropdown-btn", i(l) ? "expanded" : ""]),
            "aria-expanded": i(l),
            "aria-haspopup": "true",
            onClick: x
          }, [
            n("span", null, _((m = a.placeholder) != null ? m : a.options[0].label), 1),
            V
          ], 10, E)
        ]),
        n("div", y, [
          n("ul", {
            class: d(["lux-dropdown-list", i(l) ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (o(!0), s(g, null, C(a.options, (t) => (o(), s("li", {
              key: t.value,
              class: d(c.modelValue === t.value ? "selected" : "")
            }, [
              n("button", {
                class: "lux-dropdown-list-item",
                "aria-label": t.ariaLabel,
                "data-value": t.value,
                onClick: b
              }, _(t.label), 9, D)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
});
export {
  z as DropdownList
};
