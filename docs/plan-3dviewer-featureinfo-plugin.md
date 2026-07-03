# Plan B — `lux-3dviewer-featureinfo` plugin (3D side)

A new VC Map plugin that reproduces the geoportail's per-position GetFeatureInfo
(click → one aggregated query over all visible queryable lux layers → templated panel),
rendering with `@geoportallux/feature-info-templates`
(see `docs/plan-feature-info-templates.md`). Themesync keeps only minimal changes.

**Why a new plugin (not themesync):** the integration is a subsystem — its own click
interaction, window, i18n setup, and a heavy dependency (templates + CSS) whose release
cadence tracks the geoportail backend, orthogonal to theme syncing. The org's precedent
(`3dviewer-plugin-auth`) is plugin-per-concern with loose coupling via
`app.plugins.getByKey` and string contracts.

**Architecture in one line:** _custom persistent interaction as trigger, registered
feature-info view class as renderer._ VC Map's built-in flow is per-feature
(`featureInfoInteraction.js:31-54` only acts on `event.feature`; features on WMS layers
only exist via per-layer `WMSFeatureProvider` requests parsed with OL formats,
`wmsFeatureProvider.ts:119`), so it cannot express "query all visible layers at a
position, including empty-space clicks with ±buffers". The registry, however, is the
right place for the rendering/lifecycle half.

---

## Phase 1 — Scaffold

Clone the `3dviewer-plugin-auth` structure: `@vcmap/plugin-cli` 4.x
(`vcmplugin build/serve`), peerDeps `@vcmap/core ^6.2.2`, `@vcmap/ui ^6.2.1`,
`vue ~3.4.38`, `vuetify ~3.7.14`, `mapVersion ^6.1`; dependency
`@geoportallux/feature-info-templates`; vitest + `vcsPluginInterface.spec.ts`.

```ts
type PluginConfig = {
  luxGetInfoUrl: string // e.g. https://map.geoportail.lu/getfeatureinfo
  luxLocalesUrl: string // e.g. https://map.geoportail.lu/assets/locales
  templatesConfig: LuxTplConfig // the ~16 URLs + solarEconomicAllowedRoleIds
  credentials?: RequestCredentials
}
```

## Phase 2 — Query service (verified request contract)

- `event.position` from a click is **EPSG:3857** in both Cesium and OL maps
  (`coordinateAtPixel.ts:80-114`). Transform to **EPSG:2169** with `@vcmap/core`'s
  `Projection` (the lux module already registers 2169).
- Build the request as the geoportail's coordinate path does
  (`feature-info.composable.ts:489-540`) with **fixed buffers** — that path proves the
  server accepts them and tolerates a synthetic pixel (it already falls back to viewport
  center, lines 521-528):
  `layers` (comma-joined lux ids), `box1`/`box2` = ±10 m / ±1 m boxes around the 2169
  point, `srs: 'EPSG:3857'`, `zoom` (derive from camera height), synthetic
  `BBOX`/`WIDTH`/`HEIGHT`/`X`/`Y` centered on the point. Plain GET, params as query string.
- Layer list: iterate `app.layers` where `properties.luxId` is set, layer active and
  queryable (`properties.luxQueryable`, see Phase 6); `layerLabel` map =
  `{ luxId: layer name }` — templates translate labels via the `layers` i18n namespace.
- Postprocess like the composable (lines 364-450): inject `layerLabel`, filter
  `features.length > 0`, parcel annotation. Support the `{fid}` query shape for later
  deep-links.

## Phase 3 — Window + rendering (wrapper component, no child app)

- `app.windowManager.add({ id: 'lux-feature-info', component: LuxFeatureInfoWindow,
slot: WindowSlot.DYNAMIC_RIGHT, state: { headerTitle: 'luxFeatureInfo.title' },
position: { width: 400 } }, name)`.
- `LuxFeatureInfoWindow` is a **plain wrapper component**: in `setup()` it
  `provide(LUX_TPL_CONTEXT, …)` and `provide(LUX_TPL_I18N, createLuxTplI18n(i18next))`,
  adds class `lux-tpl-root` on its root div, imports the package CSS, and renders the
  shared dispatcher over the `FeatureInfoJSON[]`.
- **No child-app mount needed.** Verified: the collision risk was i18next-vue's
  `install()` writing `app.config.globalProperties.$t` over VC Map's vue-i18n global
  (`vuePlugins/i18n.js:12`, `globalInjection: true`), and `useTranslation()` requiring an
  unexported Symbol injection key. Plan A removes the i18next-vue dependency from the
  templates package (lib-owned `useLuxTranslation` + exported injection key), so templates
  mount directly in the VCS component tree. The child-app mount (createApp in onMounted)
  remains the documented escalation path — it is also the prerequisite for shadow-DOM CSS
  isolation if Vuetify style bleed-in ever demands it.
- i18next instance: plugin initializes the global i18next singleton via the package's
  `createLuxTplI18next(luxLocalesUrl + '/{{ns}}.{{lng}}.json')` (exact geoportail init
  flags + tooltip-fallback hydration). Language sync: watch `app.vueI18n.locale` →
  `i18next.changeLanguage()`. Locales load from the deployed geoportail's static
  `assets/locales/{ns}.{lng}.json` (build-time Transifex artifacts) — **verify CORS on
  that path in week 1**.

## Phase 4 — Context wiring

- `config`: from `PluginConfig.templatesConfig`.
- `notify`: `(msg, type) => app.notifier.add({ message: msg, type: NotificationType[type] })`.
- `user`: `computed(() => auth?.userState.user
? { mail: u.mail, roleId: u.role_id } : null)` with
  `auth = app.plugins.getByKey('<auth plugin name>')` — optional dependency, anonymous
  fallback. `userState` is reactive on the auth plugin, so login/logout propagates into
  open windows; the auth plugin already triggers `themesync.reloadThemes()` on both.
  (While there: fix the `typeUtisilisateur` typo and `mymaps_role: string` → `number` in
  the auth plugin's `UserInfo` — the raw API shape matches the geoportail's `UserApi`.)
- `profileComponent`: unset (no elevation profile in 3D v1); `isThemeAvailable`: `() => false`.
- `export` emit: implement KML/GPX via `ol/format` (already in the dependency tree via core).

## Phase 5 — Interaction & lifecycle (trigger + registry renderer)

- **Trigger:** persistent interaction at default index 3
  (`eventHandler.addPersistentInteraction`, `eventHandler.ts:249-266`) — runs after
  `CoordinateAtPixel`/`FeatureAtPixel`/`FeatureProvider` and before the exclusive
  `FeatureInfoInteraction`, receiving both `position` and any picked `feature`.
- `pipe(event)` policy (v1): if `event.feature` is a Cesium3DTile feature → pass through
  (the existing `featureInfo3d` balloon keeps working); otherwise run the lux aggregated
  query and `stopPropagation = true` on hit.
- Gate on the standard **featureInfo toolbox toggle** (button id `featureInfo`,
  `featureInfo.js:305-311`): only pipe while active. This inherits VC Map's tool
  semantics — when draw/measure take the exclusive slot, the toggle deactivates and lux
  queries stop too.
- **Renderer:** register `LuxTemplateFeatureInfoView` in `app.featureInfoClassRegistry`
  and define an instance in config. `getWindowComponentOptions(app,
{ feature, position, windowPosition }, layer)` receives the click **position**
  (`featureInfo.js:83-85`) — enough for its component to carry the aggregated result. The
  interaction calls `app.featureInfo.selectFeature(feature, position, windowPosition,
luxView)` — the explicit-view parameter bypasses per-layer resolution — buying the
  built-in lifecycle for free: window position caching by className, selection/highlight
  clearing, toolbox session semantics, cluster handling.
- Empty-space clicks (no `event.feature` at all): `selectFeature` needs a feature —
  either open the window via `windowManager` directly in that case, or synthesize a point
  feature at the click. Decide during implementation.
- Ordering: registration happens in the plugin's `initialize()`; plugins parse before a
  module's `featureInfo` items (`vcsUiApp.js:643-654`) and initialize serially in config
  order — **list this plugin before themesync** in the plugins array and document the
  constraint in both READMEs.
- Bonus (Phase 7): the registered view is reusable per-feature for 3D tilesets
  (replacing `BalloonFeatureInfoView` with lux-template rendering) — pure registry usage,
  no interaction changes.

## Phase 6 — Themesync changes (small, backward-compatible)

1. Write `properties.luxQueryable = !!themeItem.metadata?.is_queryable` next to the
   existing `luxId` (`utils.ts:105`) — today queryability survives only as `allowPicking`.
2. Config flag `useLuxFeatureInfoTemplates: boolean` (default `false`): when true,
   assign `properties.featureInfo = 'luxFeatureInfo'` to WMS/WMTS layers (keeps the
   featureInfo toolbox button alive — it only exists when some layer has
   `properties.featureInfo`, `featureInfo.js:314-319`) and **drop the WMSLayer
   `featureInfo: { responseType }` config** so no per-layer `WMSFeatureProvider` fires
   duplicate WMS requests. When false, everything behaves as today (`featureInfo2d`
   iframe). Absence of the new plugin = current behavior.
3. Deployment: add the plugin to `config/lux.config.json`'s `plugins` array in the
   3dviewer repo (deployed as `plugins/@geoportallux/lux-3dviewer-featureinfo/index.js`,
   next to themesync / back-to-2d / create-link / auth), **before** themesync.

## Phase 7 — Enhancements (independently shippable)

- Highlight clicked features via a plugin-owned `VectorLayer` (geometries arrive in
  EPSG:2169; style ≈ geoportail's yellow/orange highlight).
- Route 3D-building clicks (BUILDINGID) through the lux query / lux templates, replacing
  the balloon.
- `fid` deep-links shared with the 2D permalink format.
- Elevation profile in 3D (needs a Cesium-side profile component — explicitly out of v1).

## Open decisions

- Empty-space clicks: query anyway (geoportail parity — recommended) vs only on
  feature/globe hit.
- `shiftKey` accumulate/toggle semantics: port or drop in v1 (recommend drop).
- Locale source: deployed geoportail assets (recommended) vs bundling locales into the
  templates package.

## Risks

- CORS on `/getfeatureinfo` and `/assets/locales` from the 3D origin — test in week 1;
  themesync's `TrustedServers`/proxy pattern is the fallback.
- `zoom` param semantics from camera height — validate against backend behavior.
- Vuetify style bleed _into_ the templates — mitigated by scoped utilities +
  `.lux-tpl-root` token defaults; child-app + shadow-root mount is the documented
  escalation.
