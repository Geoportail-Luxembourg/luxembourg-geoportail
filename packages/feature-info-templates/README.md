# @geoportallux/feature-info-templates

The GetFeatureInfo templates of the Luxembourg geoportal, packaged so both the
2D app and the VC Map 3D viewer render feature info identically.

The package is **self-contained**: nothing under `src/` imports from outside the
package, and it registers no globals on the host app and requires none.
Everything host-specific — URLs, the logged-in user, notifications, the
elevation-profile component, theme availability — arrives through one injected
context. `npm run build` fails if that rule is broken, and ESLint flags it in
the editor.

## Install

```bash
npm i @geoportallux/feature-info-templates
```

Peers: `vue` ^3.4.36, `i18next` >=23.

### Against a local checkout

To develop a consumer against unreleased changes, point it at this directory:

```jsonc
"@geoportallux/feature-info-templates": "file:../../luxembourg-geoportail/packages/feature-info-templates"
```

⚠️ npm does **not** refresh a `file:` dependency while its version is
unchanged, so a consumer silently keeps the old `dist/`. After rebuilding the
package either bump its version, or in the consumer run:

```bash
rm -rf node_modules/@geoportallux && npm install
```

## Use

```ts
import {
  getTemplateComponent,
  provideLuxTplContext,
  createLuxTplI18n,
  LUX_TPL_I18N,
} from '@geoportallux/feature-info-templates'
import '@geoportallux/feature-info-templates/style.css' // Tailwind-less hosts only
```

Provide the context and the i18n surface once, from a wrapper component's
`setup()` (no `app.use()` needed — which matters in VC Map, where installing a
Vue i18n plugin would clobber the host's global `$t`):

```ts
provideLuxTplContext({
  config: {
    /* the URLs your host knows; every field is optional */
  },
  user: computed(() => currentUser.value),
  notify: (message, type) => host.notify(message, type),
  profileComponent: MyProfileChart, // omit if the host has no profiles
  isThemeAvailable: name => host.hasTheme(name),
})
provide(LUX_TPL_I18N, createLuxTplI18n(i18next))
```

Then render, wrapped in the styling boundary:

```vue
<div class="lux-tpl-root">
  <component
    v-for="(layers, i) in content"
    :key="i"
    :is="getTemplateComponent(layers.template)"
    :layers="layers"
    :currentUrl="currentUrl"
    @export="onExport"
  />
</div>
```

`getTemplateComponent()` maps the backend's `template` filename onto a
component, falling back to the default template. Both hosts share it so
selection cannot drift. The ~40 template components are internal — render
through the dispatcher rather than importing one by name.

A host with no i18next of its own can bootstrap one with the geoportail's exact
contract (namespaces, `nsSeparator: false`, tooltip fallback hydration):

```ts
import i18next from 'i18next'
import backend from 'i18next-http-backend'
import { createLuxTplI18next } from '@geoportallux/feature-info-templates'

await createLuxTplI18next(
  i18next.use(backend),
  '/assets/locales/{{ns}}.{{lng}}.json'
)
```

## Styling contract

Templates must render inside an element with the class **`.lux-tpl-root`** —
any element of yours will do. The shipped stylesheet scopes
every Tailwind utility *and* Tailwind's preflight reset under that class, so
dropping it into a host document cannot restyle the host. Preflight is scoped
rather than disabled because the templates genuinely depend on it — `border`
utilities emit only a width and take their `border-style` from it, lists take
their padding reset from it, headings their `font-size: inherit`.

**Anything that leaves the container must re-apply the class.** Scoping is a
descendant rule, so markup rendered outside `.lux-tpl-root` — a `<Teleport>`, a
portal, anything appended to `<body>` — matches none of the package's CSS and
falls back to browser defaults. The measurement preview modal teleports to
`<body>` and therefore wraps itself in `<div class="lux-tpl-root">`; without it
the modal loses `position: fixed`, its insets, its z-index and its sizing, and
renders as a static block at the foot of the document.

This is easy to miss in the geoportail, whose own Tailwind emits those utilities
globally, so teleported markup keeps working there even when the wrapper is
absent. `cypress/e2e/info/feature-info.cy.ts` asserts the modal's teleported
root *is* `body > .lux-tpl-root` rather than checking its computed position, so
the guard holds in any host.

Theme colours are read from CSS custom properties, with the geoportail palette
as the fallback. Override any of them on `.lux-tpl-root` (or above it):

| Property              | Default   | Used for                       |
| --------------------- | --------- | ------------------------------ |
| `--color-default`     | `#333`    | body text                      |
| `--color-primary`     | `#2980b9` | links, primary buttons         |
| `--color-secondary`   | `#97bbd3` | secondary accents              |
| `--color-tertiary`    | `#1f5d87` | tertiary accents               |
| `--color-quaternary`  | `#20638f` | button hover                   |
| `--color-gray`        | `#ccc`    | button borders                 |

One more token is not a colour from the palette:

| Property                     | Default | Used for                                        |
| ---------------------------- | ------- | ----------------------------------------------- |
| `--lux-tpl-white-by-default`  | `#fff`  | titles that sit on a background the host paints |

Some template titles (`parcels`, `urplang`) set a foreground colour but not the
background behind them — they assume the host's panel is dark, which the
geoportail's themed info panel is. In a host with a light panel they would be
invisible, so override this token there. It deliberately does **not** cover
elements that paint their own background, such as the solar simulator button,
whose contrast is self-contained.

### Sanitized HTML

Server-supplied HTML in attribute values is sanitized by the package itself, via
DOMPurify. There is nothing to register on the host: each template imports the
`vLuxHtml` directive and uses it locally as `v-lux-html`, so a host renders
templates without registering anything.

Two things worth knowing. DOMPurify runs with its default configuration, so
`target` is **not** in `ALLOWED_ATTR` — a `target="_blank"` inside a
server-supplied value is dropped. And the directive is deliberately *not* named
`v-dompurify-html`: that was a global the geoportail happened to install, so a
template that forgot it still worked in that one app and rendered blank
everywhere else. `v-lux-html` fails the same way in every host, and
`sanitized-html.spec.ts` mounts the affected templates with nothing registered
to keep it that way.

## Fonts and icons

Fonts are **not** shipped (licensing). The templates ask for
`DINNextLTPro-Condensed` and fall back to `Arial`; a host that has the licensed
face declares the `@font-face` itself.

Icons need nothing from the host: they are inline SVG, drawn at the current font
size in the current text colour. The set is `caret-up`, `caret-down`,
`download`, `grid`, `list`, `phone`, `fax`, `at`. They are hand-drawn rather than taken from an icon set, so nothing
here carries Font Awesome's CC BY attribution requirement.

## Consuming from this repo

The geoportail app does **not** use the built bundle. It aliases the package
name to `src/index.ts` (see `vite.config.ts`) and compiles these sources through
its own Tailwind pass, which is why `src/index.ts` carries no `@tailwind`
directives — those live in `src/lib-entry.ts`, the build-only entry.

## Contributing

The self-containment claim at the top is enforced, not aspirational:

- `tsconfig.json` has **no `paths`**, so a stray `@/...` import fails
  `npm run type-check`, which `npm run build` runs first.
- `vite.config.ts` throws on rollup's `UNRESOLVED_IMPORT` — Vite's lib mode
  would otherwise externalise an unresolved app import silently.
- ESLint `no-restricted-imports` flags `@/*`, `pinia` and `i18next-vue` in the
  editor, and `vue/no-v-html` keeps raw HTML out (three audited exceptions carry
  an inline disable).
- CI runs `npm run build:templates` (after `npm ci` and `lint`, before the
  app's own type-check and build), so the package has to compile with no
  access to `src/`. Note the job is `continue-on-error: true`, so this
  reports rather than blocks — as do all the repo's other CI checks.

Two guards exist because the geoportail cannot reproduce the failure they catch
— it provides globals (a preflight reset, a live i18next singleton, an
app-registered sanitize directive) that a bare host does not:

| Guard | Catches |
| --- | --- |
| `src/components/templates/sanitized-html.spec.ts` | a template using a directive the package does not own |
| `src/components/templates/injected-language.spec.ts` | reading `i18next.language` from the module singleton instead of the injected instance |

E2E lives in the app, at `cypress/e2e/info/feature-info.cy.ts`.

## Scripts

| Command                | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `npm run type-check`   | `vue-tsc` with no `@/*` path mapping             |
| `npm run build`        | type-check, then bundle + emit `.d.ts` and CSS   |
| `npm run build:only`   | bundle without the type-check gate               |
