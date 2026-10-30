// Tailwind config for @geoportallux/feature-info-templates only.
// Scans only this package's sources, so the emitted sheet contains exactly the
// utilities the templates use and can ship to a Tailwind-less host (the 3D
// viewer). The geoportail app does NOT consume this sheet — it compiles the
// package sources through its own Tailwind pipeline (see tailwind.config.cjs at
// the repo root), which is why nothing here may act globally.

const {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} = require('tailwindcss-scoped-preflight')

module.exports = {
  // Preflight is enabled but scoped (see `plugins`): the templates depend on
  // it — `border` utilities emit only a width and take `border-style` from it,
  // lists their padding reset, headings `font-size: inherit`.
  //
  // Selector strategy: every emitted utility is scoped under `.lux-tpl-root`,
  // so dropping the shipped stylesheet into a host document cannot restyle it.
  // Hosts render templates inside `<LuxTplRoot>` (or any element carrying the
  // class) — see the package README.
  important: '.lux-tpl-root',
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // Host custom properties with geoportail defaults as fallbacks. Not
      // declared on `.lux-tpl-root`: that would beat the host's inherited
      // `:root` values.
      colors: {
        default: 'var(--color-default, #333)',
        primary: 'var(--color-primary, #2980b9)',
        secondary: 'var(--color-secondary, #97bbd3)',
        tertiary: 'var(--color-tertiary, #1f5d87)',
        quaternary: 'var(--color-quaternary, #20638f)',
      },
      fontFamily: {
        sans: 'DINNextLTPro-Condensed, Arial, sans-serif',
        body: 'DINNextLTPro-Condensed, Arial, sans-serif',
        icons: 'geoportail-icons-wc',
        arial: 'Arial, sans-serif',
      },
      fontSize: {
        'title-xl': ['40px', '40px'],
      },
      boxShadow: {
        header: '0px 2px 6px -1px rgb(0 0 0 / 50%)',
        footer: '0px 2px 6px 1px rgb(0 0 0 / 50%)',
        modal: '0 5px 10px rgba(0 0 0 / 20%)',
      },
    },
  },
  plugins: [
    // Tailwind's own preflight, rewritten to apply only inside `.lux-tpl-root`
    // — not a hand-copied subset, so a Tailwind bump carries through.
    // `rootStyles: 'move to container'` relocates the `html`/`body` rules,
    // which would otherwise become `.lux-tpl-root html` and match nothing.
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.lux-tpl-root', {
        rootStyles: 'move to container',
      }),
    }),
  ],
}
