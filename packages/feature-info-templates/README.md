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

### Where template styles live

Template styles take one of two forms, each with one job:

- **Tailwind utilities in the markup** — the default, as in the rest of the
  geoportail. A one-off value is a utility too (`text-[28px]`), not a new class.
- **`src/templates-styles.css`** — plain global `lux-tpl-*` classes for what
  utilities express poorly: descendant rules (`.lux-tpl-feature-info label`),
  groups shared across templates (the `.lux-tpl-order-*` report form of casipo,
  forage-virtuel, pag, pag-staging and pds) and the solar simulator image
  button.

Templates carry no `<style scoped>`: Vue suffixes scoped selectors with a
build-hashed `[data-v-…]` attribute that a host cannot target. The plain classes
stay overridable by any host rule loaded after the package's styles, on top of
the custom properties above.

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

## Translations

The package ships no translation strings and installs no Vue i18n plugin. The
host owns the i18next instance and its resources; the package only reads from
it.

- **Wiring.** The host wraps its instance with `createLuxTplI18n()` and provides
  it under `LUX_TPL_I18N` (see [Use](#use)). `createLuxTplI18n()` registers
  i18next listeners, so call it once per instance, not per mount. Templates read
  through `useLuxTranslation(ns)`, which re-renders on language change and when
  resources load. Without a provider it falls back to the i18next singleton,
  non-reactively — enough for unit tests, not for a host.
- **Contract.** Templates translate from the `tooltips`, `app` and `layers`
  namespaces, with `nsSeparator` and `keySeparator` off: keys are literal
  strings, some containing `:`. `installTooltipFallbackTranslations(instance)`
  copies `app` translations into `tooltips` where a key is missing there, and repeats on every load and
  language change.
- **Geoportail.** Keeps its own init in `src/main.ts` (and `src/bundle/lib.ts`)
  with that contract and installs the tooltip fallback there.
  `src/components/info/feature-info.vue` provides the memoised wrapper from
  `src/composables/info/lux-tpl-context.composable.ts`.
- **External host.** Either passes its own instance, configured to the same
  contract, or bootstraps one with `createLuxTplI18next()`, which applies the
  contract and installs the fallback. Either way the host serves the
  geoportail's translation files, e.g. at the `loadPath` it passes.

## How the geoportail and an external host consume the package

The geoportail compiles the package **sources** as part of the app; an external
host (e.g. the 3D viewer) installs the **built bundle**. The two entries differ
only by the Tailwind sheet: `src/index.ts` is the public API plus
`templates-styles.css`, and `src/lib-entry.ts`, the build entry, adds
`src/tailwind.css` on top.

|                          | Geoportail (this repo)                                                                                                             | External host                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Code                     | `src/index.ts`, via the alias in `vite.config.ts` and `vite-dist.config.ts`; no package build, HMR on edit                         | `dist/lux-tpl.js`, through `package.json` `exports`                                |
| Types                    | `src/`, via `paths` in `tsconfig.app.json`                                                                                         | `dist/index.d.ts`                                                                  |
| Tailwind utilities       | the app's own Tailwind pass (the root `tailwind.config.cjs` scans this package's `src/`), emitted globally                        | prebuilt in `dist/style.css`, scoped under `.lux-tpl-root`                         |
| Preflight reset          | the app's, global                                                                                                                  | Tailwind's, scoped to `.lux-tpl-root`                                              |
| `templates-styles.css`   | imported by `src/index.ts`, processed by the app's Vite                                                                            | bundled into `dist/style.css`                                                      |
| `.lux-btn`, `.lux-btn-grey` | the app's `src/assets/main.css`                                                                                                 | the copy in `src/tailwind.css`                                                     |
| Theme colours            | the app's `:root` custom properties                                                                                                | the same properties if the host sets them, else the geoportail fallbacks          |
| Stylesheet import        | **none** — importing `style.css` would emit the utilities twice                                                                    | `import '@geoportallux/feature-info-templates/style.css'`                          |

Because the geoportail provides the utilities, the reset and the buttons
globally, it hides styling gaps an external host hits: markup outside
`.lux-tpl-root` (see the styling contract), a utility or button style missing
from the package's own Tailwind config. Check style changes against the built
`dist/style.css`, not only in the app.

One asset difference: Vite's library mode inlines every asset, so
`dist/style.css` embeds `solarkataster_1.png` as base64 (~119 KB), whereas the
geoportail serves it as a separate file.

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

## Publishing

`.github/workflows/publish-templates.yml` publishes on a `templates-v*` tag, via
npm trusted publishing (OIDC — no token). Bump the version, merge, then tag the
merge commit.

Bump from the repo root:

```bash
npm version 0.2.0 -w @geoportallux/feature-info-templates --no-git-tag-version
```

or from this directory, where `-w` is not needed:

```bash
cd packages/feature-info-templates
npm version 0.2.0 --no-git-tag-version
```

The root form also updates the version this package is recorded under in the
root `package-lock.json`; the `cd` form may not, so check `git status` for a
stale lockfile before committing. Then, once merged:

```bash
git tag templates-v0.2.0 && git push origin templates-v0.2.0   # from anywhere in the repo
```

`--no-git-tag-version` matters: `npm version` would otherwise create a `v0.2.0`
tag, which is the wrong format and triggers the two workflows listening on
`tags: '*'`. The workflow fails if the tag and `package.json` disagree, and
`dist/` is gitignored so the tarball is always built in CI. Tags are not
branch-bound, so a prerelease can be published from a feature branch before it
merges — note it still takes the `latest` dist-tag unless you move it
afterwards with `npm dist-tag`.
