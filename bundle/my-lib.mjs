import { defineComponent as k, shallowRef as _, onMounted as w, onUnmounted as g, openBlock as o, createElementBlock as s, createElementVNode as l, normalizeClass as d, unref as u, toDisplayString as h, Fragment as C, renderList as D } from "vue";
const L = { class: "lux-dropdown" }, B = { class: "h-full" }, E = ["aria-expanded"], V = /* @__PURE__ */ l("span", { class: "lux-caret" }, null, -1), y = { class: "lux-dropdown-wrapper" }, O = ["aria-label", "data-value"], F = /* @__PURE__ */ k({
  __name: "dropdown-list",
  props: {
    placeholder: null,
    options: { default: () => [{ label: "Default label", value: "Default value" }] },
    modelValue: null
  },
  emits: ["change"],
  setup(i, { emit: f }) {
    const t = i, a = _(!1), c = _();
    function r(e) {
      a.value = e === void 0 ? !a.value : e;
    }
    function b(e) {
      e.stopImmediatePropagation(), r();
    }
    function x(e) {
      c.value = e.target.dataset.value, f("change", c.value);
    }
    function p() {
      r(!1);
    }
    return w(() => document.addEventListener("click", p)), g(() => document.removeEventListener("click", p)), (e, I) => {
      var m, v;
      return o(), s("div", L, [
        l("div", B, [
          l("button", {
            type: "button",
            class: d(["lux-btn lux-dropdown-btn", u(a) ? "expanded" : ""]),
            "aria-expanded": u(a),
            "aria-haspopup": "true",
            onClick: b
          }, [
            l("span", null, h((v = t.placeholder) != null ? v : (m = t.options[0]) == null ? void 0 : m.label), 1),
            V
          ], 10, E)
        ]),
        l("div", y, [
          l("ul", {
            class: d(["lux-dropdown-list", u(a) ? "" : "hidden"]),
            tabindex: "-1"
          }, [
            (o(!0), s(C, null, D(t.options, (n) => (o(), s("li", {
              key: n.value,
              class: d(i.modelValue === n.value ? "selected" : "")
            }, [
              l("button", {
                class: "lux-dropdown-list-item",
                "aria-label": n.ariaLabel,
                "data-value": n.value,
                onClick: x
              }, h(n.label), 9, O)
            ], 2))), 128))
          ], 2)
        ])
      ]);
    };
  }
});
export {
  F as DropdownList
};
