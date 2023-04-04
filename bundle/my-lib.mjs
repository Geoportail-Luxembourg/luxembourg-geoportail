import { defineComponent as f, shallowRef as v, onMounted as k, onUnmounted as w, openBlock as o, createElementBlock as s, createElementVNode as l, normalizeClass as d, unref as i, toDisplayString as _, Fragment as g, renderList as C } from "vue";
const L = { class: "lux-dropdown" }, B = { class: "h-full" }, E = ["aria-expanded"], V = /* @__PURE__ */ l("span", { class: "lux-caret" }, null, -1), y = { class: "lux-dropdown-wrapper" }, D = ["aria-label", "data-value"], z = /* @__PURE__ */ f({
  __name: "dropdown-list",
  props: {
    placeholder: null,
    options: null,
    modelValue: null
  },
  emits: ["change"],
  setup(u, { emit: h }) {
    const a = u, n = v(!1), c = v();
    function r(e) {
      n.value = e === void 0 ? !n.value : e;
    }
    function x(e) {
      e.stopImmediatePropagation(), r();
    }
    function b(e) {
      c.value = e.target.dataset.value, h("change", c.value);
    }
    function p() {
      r(!1);
    }
    return k(() => document.addEventListener("click", p)), w(() => document.removeEventListener("click", p)), (e, O) => {
      var m;
      return o(), s("div", L, [
        l("div", B, [
          l("button", {
            type: "button",
            class: d(["lux-btn lux-dropdown-btn", i(n) ? "expanded" : ""]),
            "aria-expanded": i(n),
            "aria-haspopup": "true",
            onClick: x
          }, [
            l("span", null, _((m = a.placeholder) != null ? m : a.options[0].label), 1),
            V
          ], 10, E)
        ]),
        l("div", y, [
          l("ul", {
            class: d(["lux-dropdown-list", i(n) ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (o(!0), s(g, null, C(a.options, (t) => (o(), s("li", {
              key: t.value,
              class: d(u.modelValue === t.value ? "selected" : "")
            }, [
              l("button", {
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
