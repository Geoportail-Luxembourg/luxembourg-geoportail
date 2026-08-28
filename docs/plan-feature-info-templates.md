# Plan A — `@geoportallux/feature-info-templates`

Extract the GetFeatureInfo templates into a self-contained, published npm package, consumed
by name in the geoportail and installable by the 3D viewer feature-info plugin
(see `docs/plan-3dviewer-featureinfo-plugin.md`).

Baseline: branch `GSLUX-812-shared-tpl` (templates moved to `src/lib-tpl/`, dedicated
vite/tailwind lib build). Verified state of that branch: 49 files under `src/lib-tpl`,
of which **23 still have out-of-directory coupling** (17 files with `@/` imports —
33 statements; 5 files with only `import.meta.env` coupling; 1 CSS file with an
app-absolute asset URL). The lib build currently bundles pinia, i18next, ol, d3, uuid and
a large slice of the app, because only `vue` + `i18next-vue` are externalized and the
`@` → `./src` alias lets lib code reach app internals.

---

## Phase 0 — Regression safety net (before touching anything)

The only e2e coverage, `cypress/e2e/info/feature-info.cy.ts`, is entirely inside
`describe.skip` (line 6). Un-skip and stabilize it first — it covers the default
template, profile/exports, iframes, solar and audio. Optionally add a run against a
permalink exercising the most-coupled templates (casipo, pag, parcels, mymaps).
Every later phase must keep this suite green. There are no vitest specs for any
template; adding a smoke spec (mount each template with fixture `FeatureInfoJSON`)
is cheap once the DI context exists (Phase 2) and is the fastest guard against
decoupling regressions.

## Phase 1 — Workspace package + enforced boundary

1. Move `src/lib-tpl` → `packages/feature-info-templates/src`; add root
   `"workspaces": ["packages/*"]` (npm 10 / lockfile v3 — supported).
2. Own `package.json`: name `@geoportallux/feature-info-templates`;
   `peerDependencies`: `vue`, `i18next`; `dependencies`: `@braintree/sanitize-url` only.
   **No pinia, no ol, no i18next-vue** (see Phase 2.4 — the i18next-vue dependency is
   removed entirely).
3. Move `vite.config.lib-tpl.ts` / `tailwind.config.lib-tpl.cjs` / `tsconfig.lib-tpl.json`
   into the package. **Delete the `@` → `./src` alias** so any residual out-of-dir import
   fails the build. Externalize `vue`, `i18next`. Delete the empty `src/lib-tpl/tsconfig.json`.
4. Revert the root package.json `exports` hack (`"." → ./dist-lux-tpl/lux-tpl.js`).
   The package gets proper `exports` for `.`, `./style.css`, and types via `vite-plugin-dts`.
5. Guards: ESLint `no-restricted-imports` forbidding `@/*` inside the package; CI job
   building the package in isolation (`npm run build -w @geoportallux/feature-info-templates`).

Rule: **nothing under the package imports from outside the package.** Everything else
arrives through props or the injected context.

## Phase 2 — Public API

1. **Models.** `models.ts` is the single source. Fix the 2 files still importing
   `@/services/info/feature-info.model` (`casipo-template.vue`, `template-utilities.ts`);
   the app copy becomes `export * from '@geoportallux/feature-info-templates'`.
2. **Context — the one injection point:**

   ```ts
   export interface LuxTplContext {
     config: LuxTplConfig // all URLs + solarEconomicAllowedRoleIds: number[]
     user: Ref<{ mail?: string; roleId?: number } | null>
     notify(message: string, type: 'info' | 'warning' | 'error'): void
     profileComponent?: Component // optional; rendered when has_profile
     isThemeAvailable?(name: string): boolean // optional; default false
   }
   export const LUX_TPL_CONTEXT: InjectionKey<LuxTplContext>
   export default {
     install(app, ctx: LuxTplContext) {
       app.provide(LUX_TPL_CONTEXT, ctx)
     },
   }
   ```

   Hosts may equally provide the context from a plain wrapper component's `setup()`
   (no app-level install required) — this is how the 3D plugin consumes it.

3. **Barrel + dispatcher.** `index.ts` currently exports only `InfoFeatureLayout` + types.
   Export all 42 templates, the `template-utilities` functions, **and the
   `template-filename → component` map + `getTemplateComponent()`** (moved out of
   `feature-info.vue`) so both apps share selection logic.
4. **i18n — lib-owned composable, no i18next-vue dependency.**
   Verified against `i18next-vue@5.2.0` source: its `install()` sets
   `app.config.globalProperties.$t`/`$i18next` (collides with vue-i18n's global `$t` in
   VC Map), and `useTranslation()` depends on an **unexported module-private Symbol**
   injection key — it cannot be satisfied without `app.use()`. Therefore the package
   implements the ~50 lines itself:

   ```ts
   export const LUX_TPL_I18N: InjectionKey<LuxTplI18n>
   export function createLuxTplI18n(i18next: i18n): LuxTplI18n
   // ref invalidated on languageChanged/loaded + getFixedT(null, ns) behind a
   // proxy that touches the ref (same reactivity trick as i18next-vue)
   export function useLuxTranslation(ns = 'tooltips'): { t: TFunction }
   ```

   Templates switch `import { useTranslation } from 'i18next-vue'` →
   `useLuxTranslation` (mechanical, ~40 files). The geoportail keeps i18next-vue for its
   own components and passes the same global i18next singleton to `createLuxTplI18n`.

5. **i18next init helper.** Export `createLuxTplI18next(loadPath)` encapsulating the exact
   geoportail init contract (verified in `src/main.ts:27-43`): ns
   `['app','layers','legends','server','tooltips']`, `nsSeparator:false`,
   `keySeparator:false`, `defaultNS/fallbackNS:'app'`, `fallbackLng:'en'`,
   `supportedLngs:['de','en','fr','lb']`, `returnEmptyString:false` — **plus the
   tooltip-fallback hydration** (`src/services/translations/tooltip-fallback.ts` moves into
   the package). The geoportail keeps its own init; the 3D plugin uses this helper.

## Phase 3 — Decoupling work items (verified inventory)

| #   | Work item                                                                                      | Files                                                                                                                            | Replacement                                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `useUserManagerStore` (email prefill, `roleId` solar gating)                                   | casipo, forage-virtuel, pag, pag-staging, pds, default (6)                                                                       | `ctx.user`                                                                                                                                  |
| 2   | `useAlertNotificationsStore` + `AlertNotificationType`                                         | casipo, forage-virtuel, pag, pag-staging, pds, mo (6)                                                                            | `ctx.notify`; enum moves into lib                                                                                                           |
| 3   | `ProfileFeatureInfo` import                                                                    | 9 templates: automatic-sols, default, default-table ±no-prefix, default-attachment ±no-prefix, mymaps, npour-poi, sentier-nature | render `ctx.profileComponent` via `<component :is>` behind `has_profile`; keep the `export` emit contract                                   |
| 4   | `InfoFeatureMeasurementModale`                                                                 | parcels                                                                                                                          | copy a self-contained modal into the lib (deps: `ModalDialog` + `VITE_DOWNLOAD_PREVIEW_URL`/`VITE_DOWNLOAD_MEASUREMENT_URL` → `ctx.config`) |
| 5   | 14 `VITE_*` vars (+ hidden `VITE_QR_URL` via url.utils, `VITE_DOWNLOAD_PREVIEW_URL` via modal) | 16 files                                                                                                                         | `ctx.config` fields                                                                                                                         |
| 6   | `formatDate` (`formatting.utils`), `getMymapsPath`/`getQRUrlForMyMaps` (`url.utils`)           | parcels, mymaps                                                                                                                  | extract pure functions into lib; URL bases from `ctx.config`                                                                                |
| 7   | `useThemeStore` in `isThemeAvailable`                                                          | template-utilities (consumer: parcels)                                                                                           | `ctx.isThemeAvailable`                                                                                                                      |
| 8   | model import normalization                                                                     | casipo, template-utilities                                                                                                       | `../../models`                                                                                                                              |
| 9   | `.js`-extension import inconsistency                                                           | bus, npour-poi                                                                                                                   | normalize                                                                                                                                   |
| 10  | `v-dompurify-html` directive, registered app-wide by the geoportail's `main.ts`                | default, default-table ±no-prefix, default-attachment ±no-prefix, automatic-sols (6)                                             | lib-owned directive or component; see "Work item 10" under Status                                                                          |

20 templates + `info-feature-layout.vue` are already clean.

## Phase 4 — CSS, assets, fonts

1. **Scoped styles stay scoped; customization via design tokens.** Scoped SFC styles
   compile fine into the package's shipped `style.css` — being a library does not require
   globalizing them. Revert the extraction of per-component scoped styles into global
   `.lux-tpl-*` classes where the motivation was host customization; instead express the
   variable bits as custom properties with defaults
   (`font-size: var(--lux-tpl-title-size, 40px)`), overridable by the host on
   `.lux-tpl-root` (custom properties inherit through the scoped boundary). Keep a small
   global layer only for patterns genuinely shared across templates
   (e.g. `.lux-tpl-feature-info`); criterion: shared across templates → shared layer file,
   single component → scoped + tokens. Document the token list — it is the styling contract.
2. **Tailwind utilities stay in the markup; the lib generates its own sheet.** Revert the
   utility→pure-CSS conversions (e.g. `-ml-3.5` → `.lux-tpl-iframe-offset`). The lib
   Tailwind config already scans only package sources, so the generated sheet contains
   exactly the used utilities and ships with the module — that is what makes the templates
   usable in a Tailwind-less host like the 3D viewer. Conditions:
   - `important: '.lux-tpl-root'` (selector strategy) in the **lib config only**, so shipped
     utilities are scoped and don't act globally in the host document;
   - geoportail keeps consuming package _sources_ through its own Tailwind pipeline
     (extend the app `content` glob to `packages/feature-info-templates/src/**`) and does
     **not** import the package's built CSS → no duplicate emission;
   - self-sufficiency: every utility used by templates must resolve from the lib config
     alone. Known gaps vs the app config: `hd`/`hd_md` screens, `solarkataster`
     backgroundImage, icon-font `content` glyph map. Copy the needed extensions or keep
     those few app-asset cases as pure CSS. CI guard: build the lib CSS, grep templates
     for classes that didn't get emitted.
   - keep `preflight:false`.
3. **Assets.** `templates-styles.css:14` references
   `url('/src/assets/images/featureinfo/solarkataster_1.png')` (app-absolute — breaks in
   the package). Move the image into the package and reference it relatively.
4. **Theme variables.** Ship defaults for `--color-default/primary/secondary/tertiary/quaternary`
   under `.lux-tpl-root`; hosts override.
5. **Icons/fonts.** Templates use a small Font Awesome subset (`fa-caret-up/down`,
   `fa-download`, `fa-th-large`, `fa-phone`, `fa-fax`, `fa-at`, `fa-list`,
   `fa-sharp fa-solid`) served today from `public/assets/font-awesome-6.2.0.all.min.css`
   (not an npm dep). Replace these ~8 glyphs with inline SVGs (preferred) or ship a trimmed
   icon sheet. Don't ship DINNextLTPro (licensing); keep `Arial` fallback and document the
   host-provided `@font-face` names (`DINNextLTPro-Condensed`, `geoportail-icons-wc`).

## Phase 5 — Geoportail consumes the package

`feature-info.vue` drops its ~39 relative deep-imports in favor of the exported dispatcher
map; `main.ts` installs the lib plugin with a context built from the existing stores
(`useUserManagerStore`, `useAlertNotificationsStore`, `useThemeStore`, `import.meta.env`)
and passes `ProfileFeatureInfo` as `profileComponent`. Run the Phase 0 suite + a manual
visual pass.

## Phase 6 — Publish

CI publishes the package (GitHub Packages or npm) on tag; semver with a documented
`FeatureInfoJSON`/context compatibility policy. Repo split stays optional later —
`git filter-repo` on `packages/feature-info-templates` if a forcing function appears
(different owning team, third consumer, divergent release cadence).

---

## Status (updated 2026-08-27)

| Phase                              | State                                                                            |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| 0 — Regression safety net          | **Done.** `cypress/e2e/info/feature-info.cy.ts` un-skipped and stubbed; 17/17 green, incl. the coupled templates. |
| 1 — Workspace package + boundary    | **Done.**                                                                        |
| 2 — Public API                      | **Done.**                                                                        |
| 3 — Decoupling work items           | **Done** (2026-07-03) for items 1-9. Item 10 (`v-dompurify-html`) found 2026-08-28 and still open — see below. |
| 4 — CSS, assets, fonts              | **Done**, 4.5 included — icons are inline SVG, no icon font needed.               |
| 5 — Geoportail consumes the package | **Done**, via a source alias rather than the built bundle (see below).            |
| 6 — Publish                         | Not started.                                                                     |

### What Phase 1 actually looks like

`packages/feature-info-templates/`, an npm workspace declared in the root
`package.json`. The `@` → `./src` alias is gone from the package's Vite config
**and** its tsconfig has no `paths`, so a stray `@/...` import fails
`npm run type-check`, which `npm run build` runs first — verified by
reintroducing one deliberately (build exits 2). Rollup additionally throws on
`UNRESOLVED_IMPORT`, because Vite's lib mode would otherwise externalise an
unresolved app import silently. ESLint `no-restricted-imports` flags the same
thing in the editor, and CI builds the package before anything else
(`.github/workflows/lint-build-test.yml`). The root `exports` hack is reverted.

### Deviations from the plan worth knowing

- **Two entries, not one.** `src/index.ts` is the public API and carries no
  `@tailwind` directives; `src/lib-entry.ts` adds them and is what the package
  build compiles. This is what lets the app consume package *sources* through
  its own Tailwind pass without emitting the utility layer twice — verified:
  the app bundle contains exactly one Tailwind variables layer and none of the
  package's `.lux-tpl-root`-scoped utilities.
- **Theme tokens are fallbacks, not defaults** (Phase 4.4). Shipping
  `--color-primary: …` on `.lux-tpl-root` would have *beaten* the host's
  inherited `:root` value — a direct declaration wins over inheritance
  regardless of specificity. They are expressed as `var(--color-primary,
  #2980b9)` in the package's Tailwind config instead.
- **`.lux-btn` moved into the package.** Not in the plan's inventory: the
  templates use `.lux-btn`/`.lux-btn-grey` 18 times and both were defined in the
  app's `src/assets/main.css`. The package now ships its own copy, hand-scoped
  under `.lux-tpl-root` because the `important` selector strategy scopes only
  utilities, not the components layer.
- **The Phase 4.2 "known gaps" were smaller than feared.** `hd`/`hd_md` screens,
  the `solarkataster` `backgroundImage` and the icon-font `content` map are all
  unused by the templates; only `shadow-modal` was needed, and the lib config
  already had it.
- **~50 type-only imports were written as value imports.** They produced 111
  `vite-plugin-dts` errors and ~50 Rollup warnings on the pre-existing lib
  build, i.e. the shipped `.d.ts` was incomplete. Converted to `import type`
  across 45 files; the package now builds with zero errors and zero warnings.
- **Phase 5 consumes sources, not the bundle.** `feature-info.vue` dropped its
  41 deep imports for the shared dispatcher and the app imports
  `@geoportallux/feature-info-templates` by name, but the name is aliased to
  `src/index.ts` in `vite.config.ts` / `vite-dist.config.ts` / `tsconfig.app.json`.
  The published bundle is what the 3D viewer will consume.

### Verified after the change

`npm run build:templates` (isolated) ✓ · `npm run lint` ✓ · `vite build` ✓ ·
`npm run test:unit:ci` 68 files / 371 tests ✓ · `npm run type-check` 673 errors
vs **694 at the previous commit**, none of them in `packages/` and no file
regressed. Those errors are pre-existing and environmental: `node_modules/ol`
(10.7.0) ships 1 `.d.ts` for 370 `.js` files and declares no `types` field, so
almost every `ol` import raises TS7016. Unrelated to this work.

### Phase 0 — how the suite was stabilized

The suite needs neither a local v3 nor a CORS-disabling browser: `.env.e2e`
points at public hosts and `cypress.config.ts` already sets
`chromeWebSecurity: false`. Un-skipped as-is it ran 2/7 — the same 2/7 as at the
previous commit, so the refactor had broken nothing; the tests had simply rotted
against live data (attribute counts, elevation deltas, a role-gated button).

`getfeatureinfo` and `profile.json` are now stubbed from real captured responses
in `cypress/fixtures/featureinfo/`, and every assertion is pinned to that fixture
data — e.g. the profile's `Δ+31 m Δ-75 m Δ-44 m` is the cumulative +30.9/-74.9,
net -44.1 over the fixture's 39 sampled points. Layer titles stay deterministic
without stubbing because they come from the themes fixture plus
`public/assets/locales/layers.fr.json`, both in-repo.

Two substantive changes beyond re-pinning:

- The solar test asserted the economic-calculator button, which is gated on the
  user's `roleId` being in `solarEconomicAllowedRoleIds`. E2E runs anonymously,
  so it can never render. Split into two tests: the public "Simulateur solaire"
  link renders, and the economic one is absent for an anonymous user.
- The suite's "No request ever occurred" flakiness was real, not incidental: the
  app issues no query at all until a visible queryable layer is on the map
  (`feature-info.composable.ts`, `layersList.length > 0`), and the permalink's
  layers land after the map does. `clickMapForFeatureInfo()` now gates on that
  same predicate via `window.olMap`. 8/8 green across 5 consecutive runs.

Unrelated: `export-panel.cy.ts` and `draw/draw-feat-point.cy.ts` are flaky at
this commit *and* at the previous one (5 failures in 6 spec-runs at baseline,
2 in 4 here) — both hinge on the live elevation service. Not touched.

### Phase 4.5 — icons

The eight glyphs (`caret-up/down`, `download`, `grid`, `list`, `phone`, `fax`,
`at`) are now inline SVG behind a `LuxTplIcon` component, sized at `1em` and
filled with `currentColor` so they behave like the `<i class="fa …">` elements
they replaced. `LuxTplIcon` and `LUX_TPL_ICON_PATHS` are exported.

Resolves the "inline-SVG vs trimmed-sheet" open decision in favour of inline
SVG. They are **hand-drawn, not lifted from an icon set**: Font Awesome Free's
icons are CC BY 4.0, which would push an attribution obligation onto every
downstream consumer of this package. Each was rendered and visually checked at
64px and at 1em before being committed.

While converting the two templates that used them, a botched utility→CSS
extraction from the July session surfaced: `lux-tpl-flex` had been concatenated
with the class following it, producing `lux-tpl-flexrounded`,
`lux-tpl-flexflex-col`, `lux-tpl-flexflex-wrap` and `lux-tpl-flexitems-center` —
selectors matching nothing, so the parcels measurement toggle had lost its
`display:flex`. Fixed, and per phase 4.2 the five remaining extracted utilities
(`lux-tpl-flex`, `-flex-col`, `-w-1-3`, `-w-2-3`, `-iframe-offset`) went back to
being Tailwind utilities in the markup. Nine extracted-but-unreferenced
`.lux-tpl-parcels-*` rules were dropped as dead weight.

### Optional extra — the most-coupled templates

`casipo`, `pag`, `parcels` and `mymaps` now have e2e coverage, from real
captured responses. They exercise the context wiring the extraction introduced:

- casipo/pag: the email field prefilled from `ctx.user` (empty when anonymous),
  and clicking "order" with no email routing a warning through `ctx.notify` to
  the app's alert-notifications store.
- casipo: the button label resolves only via the tooltip-namespace fallback
  hydration that moved into the package, so it guards that too.
- parcels: the cadastral number from the fixture, plus an assertion that icons
  render as `svg.lux-tpl-icon` and that no `i.fa` remains — the phase 4.5 guard.
- mymaps: `has_profile` driving the host-injected `ctx.profileComponent`.

17/17 green across three consecutive runs.

### Work item 10 — the `v-dompurify-html` directive (open, blocks publish)

Found on 2026-08-28 by the Plan B prototype, running the real templates inside a
VC Map window. The package has a **second host dependency besides the injected
context**: six templates render attribute *values* through `v-dompurify-html`,
a global directive the geoportail installs app-wide in `src/main.ts` via
`vue-dompurify-html`. The package neither declares it, ships it, nor documents
it, so in the geoportail it silently works and anywhere else the affected
templates render their labels with every value blank — no error, no warning
beyond Vue's dev-only "Failed to resolve directive".

Affected: `default-template.vue` (1 use), `default-table-template.vue` (1),
`default-table-no-prefix-template.vue` (1), `default-attachment-template.vue`
(1), `default-attachment-no-prefix-template.vue` (1), `automatic-sols-template.vue`
(4). `default-template.vue` is the backend's fallback for every unknown
`template` filename, so this hits the common path.

This contradicts the Phase 1 rule as stated ("everything else arrives through
props or the injected context") and it cannot be fixed by a consumer cleanly: a
directive used inside child components cannot be registered locally on a
wrapper, so every host must reach into the shared Vue app and register a global.
The 3D plugin does exactly that today, as a stopgap
(`LuxFeatureInfoWindow.vue`).

Options, in preference order:

1. **Lib-owned directive.** Take `vue-dompurify-html` (or `dompurify` directly)
   as a package dependency and export the directive, registered locally in each
   template that uses it via `<script setup>`'s `vXxx` convention. Fully
   self-contained, no host action, no global. Adds ~20 kB (`dompurify`), which
   VC Map already ships anyway.
2. **A `LuxTplHtml` component** wrapping the sanitize + `v-html`, replacing the
   directive at the 9 call sites. Same self-containment, no directive semantics
   to preserve.
3. **Declare it.** Keep the directive, add `vue-dompurify-html` to
   `peerDependencies` and document the registration in the README. Cheapest, but
   leaves every host with a global registration and the same silent-failure mode
   for anyone who misses it.

Whichever is chosen, the smoke spec from Phase 0 should mount the affected
templates with a value containing markup and assert it renders — that is the
guard this gap slipped past.

### Next

Work item 10, then Phase 6 (publish) — the two are coupled: publishing with an
undeclared host requirement is what makes the failure silent for the next
consumer.

The Plan B prototype is done (see `plan-3dviewer-featureinfo-plugin.md`): the
templates render inside a VC Map window with the lib-owned i18n composable, the
injected context, real backend data and no child-app mount, which validates the
context design end-to-end — and surfaced work item 10.

## Open decisions

- Publish target: npm public vs GitHub Packages.
- Inline-SVG vs trimmed-sheet for the FA subset.
- Scope of currently-commented-out templates (`poi`, `poi-eat`, `viti-*` in the dispatcher).

## Ordering

Phases 1–2 first (boundary + API), Phase 3 per-file in parallel afterwards, Phase 4.2
(utility scoping) before any 3D consumption. Phases 0–5 are pure geoportail refactors with
no functional change and independently shippable. The single riskiest cross-plan
integration — rendering one simple template (e.g. `bus-template`) inside a VC Map window
with the lib-owned i18n composable — should be prototyped before finishing Phase 3, as it
validates the context design end-to-end (see Plan B).
