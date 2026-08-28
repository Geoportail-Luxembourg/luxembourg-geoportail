# @geoportallux/feature-info-templates

The GetFeatureInfo templates of the Luxembourg geoportal, packaged so both the
2D app and the VC Map 3D viewer render feature info identically.

The package is **self-contained**: nothing under `src/` imports from outside the
package. Everything host-specific — URLs, the logged-in user, notifications, the
elevation-profile component, theme availability — arrives through one injected
context. `npm run build` fails if that rule is broken, and ESLint flags it in
the editor.

## Install

```bash
npm i @geoportallux/feature-info-templates
```

Peers: `vue` ^3.2, `i18next` >=23.

## Use

```ts
import {
  getTemplateComponent,
  provideLuxTplContext,
  createLuxTplI18n,
  LUX_TPL_I18N,
  LuxTplRoot,
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
<LuxTplRoot>
  <component
    v-for="(layers, i) in content"
    :key="i"
    :is="getTemplateComponent(layers.template)"
    :layers="layers"
    :currentUrl="currentUrl"
    @export="onExport"
  />
</LuxTplRoot>
```

`getTemplateComponent()` maps the backend's `template` filename onto a
component, falling back to the default template. Both hosts share it so
selection cannot drift.

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
`<LuxTplRoot>` is just a `<div>` that adds it. The shipped stylesheet scopes
every Tailwind utility under that class, so dropping it into a host document
cannot restyle the host.

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

Fonts are **not** shipped (licensing). The templates ask for
`DINNextLTPro-Condensed` and fall back to `Arial`; a host that has the licensed
face declares the `@font-face` itself.

Icons need nothing from the host: they are inline SVG, drawn at the current font
size in the current text colour. `LuxTplIcon` and the `LUX_TPL_ICON_PATHS` map
are exported if you want the same glyphs elsewhere:

```vue
<LuxTplIcon name="download" :title="t('Télécharger')" />
```

Available names: `caret-up`, `caret-down`, `download`, `grid`, `list`, `phone`,
`fax`, `at`. They are hand-drawn rather than taken from an icon set, so nothing
here carries Font Awesome's CC BY attribution requirement. Pass `title` for an
icon that carries meaning on its own; omit it for a decorative one beside a text
label and it is hidden from assistive technology.

## Consuming from this repo

The geoportail app does **not** use the built bundle. It aliases the package
name to `src/index.ts` (see `vite.config.ts`) and compiles these sources through
its own Tailwind pass, which is why `src/index.ts` carries no `@tailwind`
directives — those live in `src/lib-entry.ts`, the build-only entry.

## Scripts

| Command                | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `npm run type-check`   | `vue-tsc` with no `@/*` path mapping             |
| `npm run build`        | type-check, then bundle + emit `.d.ts` and CSS   |
| `npm run build:only`   | bundle without the type-check gate               |
