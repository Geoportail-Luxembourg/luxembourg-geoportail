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
