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

**Architecture in one line:** _a feature provider is the trigger, a registered
feature-info view class is the renderer._ Both halves are VC Map extension points; the
plugin supplies a custom class to each and writes no interaction of its own.

> **This section was rewritten on 2026-08-29.** The original plan claimed VC Map's
> built-in flow "cannot express query all visible layers at a position, including
> empty-space clicks" and therefore specified a custom persistent interaction as the
> trigger. That claim is wrong, and the first implementation followed it. See
> "Correcting the original architecture" below.

---

## Correcting the original architecture

### What the original plan got wrong

The justification for a custom persistent interaction was that the built-in flow is
per-feature and cannot handle a click into empty space. It can. `FeatureProviderInteraction`
(`interaction/featureProviderInteraction.js`) does exactly this, and only this:

```js
async pipe(event) {
  if (!event.feature) {                     // ← precisely the empty-space case
    const layersWithProvider = [...event.map.layerCollection]
      .filter((l) => l.featureProvider instanceof AbstractFeatureProvider && l.active && …)
      .reverse();
    …
    const f = await featureProvider.getFeaturesByCoordinate(event.position, resolution, l);
```

`AbstractFeatureProvider`'s own doc comment describes the lux WMS case verbatim: *"An
abstract class providing features for Layers which cannot provide features directly, but
can provide features for a given location, e.g. WmsLayer with a getFeatureInfo
configuration."* Custom providers are a first-class, config-addressable extension point —
`featureProviderClassRegistry` (`classRegistry.js`) resolves `featureProvider: { type: … }`
on any layer config through `getProviderForOption()`.

The original plan never mentions `AbstractFeatureProvider`, `featureProviderClassRegistry`
or `FeatureProviderInteraction`, so it never weighed the framework's designated seam for
"turn a map position into features". That is the gap.

The renderer half was right and is implemented as specified: `LuxTemplateFeatureInfoView
extends AbstractFeatureInfoView`, registered in `app.featureInfoClassRegistry` during
`initialize()`.

### What is still true

- **Providers are attached per layer, and the interaction calls each one separately.** A
  provider on every lux layer means one HTTP request per visible layer; the geoportail
  endpoint takes a comma-joined `layers` list and answers all of them in one call. The
  aggregation cannot come from attaching providers to the lux layers themselves.
- **The libs' querying logic does not cover this endpoint.** `WMSFeatureProvider` builds a
  standard OGC request via `wmsSource.getFeatureInfoUrl(coords, res, projection, {
  INFO_FORMAT })` and parses it with ol formats. `/getfeatureinfo` is not OGC: it takes
  `layers`, `box1`, `box2`, `srs`, `zoom`, a synthetic `BBOX`/`WIDTH`/`HEIGHT`/`X`/`Y`, or a
  `fid`, and answers with a custom JSON array of per-layer entries each naming a template.
  Only the *plumbing* around the request is reusable — and that plumbing is the point.
- **Worth knowing:** with `responseType: 'text/html'` and no `textHTMLEvaluator`,
  `WMSFeatureProvider.getFeaturesByCoordinate()` returns a synthetic placeholder feature
  **without making any request at all** — the URL is built later by
  `IframeWmsFeatureInfoView`. So themesync's current WMS layers cost nothing per click, but
  they do put a feature on the event, which is what the plugin's ownership rule has to
  reckon with.

### The three candidate designs

| | Trigger | Requests per click | Notes |
| --- | --- | --- | --- |
| **A. Custom persistent interaction** (implemented) | own interaction at chain index 4 | 1 | Works with themesync's flag on *or* off. Needs an anchor-layer trick, a feature-ownership rule and mutable state on the view instance. |
| **B. One aggregating provider on a plugin-owned layer** | built-in `FeatureProviderInteraction` | 1 | Idiomatic. Deletes the interaction, the ownership rule and the anchor trick. Requires themesync's flag on. |
| **C. A provider per lux layer** | built-in | N | Rejected: defeats the single aggregated call, which is the whole point. |

### Design B in detail

`LuxAggregatedFeatureProvider extends AbstractFeatureProvider`, registered in
`featureProviderClassRegistry`, attached to a single plugin-owned, always-active,
non-rendering layer. `getFeaturesByCoordinate(coordinate, resolution, layer)` runs the one
aggregated query and returns a **single** feature carrying the `FeatureInfoJSON[]`, tagged
with `featureInfoViewSymbol` so `getFeatureInfoViewForFeature()` routes it to the lux view
before any per-layer resolution happens.

What that deletes, relative to A:

- the custom interaction and its registration/teardown;
- the toolbox gating code — replaced by an early `return []` in `getFeaturesByCoordinate`
  when `toolboxManager.get('featureInfo').action.active` is false (see the caveat below);
- `isForeignFeature()` — a picked feature means `FeatureProviderInteraction` never runs, so
  3D tileset clicks fall through to their balloon by construction;
- the anchor layer and `view.content = …` — `getProviderFeature()` already stamps
  `vcsLayerName` and `isProvidedFeature`, and the payload travels on the feature, which is
  what `AbstractFeatureInfoView.getProperties({ feature }, layer)` is shaped for.

What it gains: `selectFeature()`'s `isProvidedFeature` branch clones the feature onto the
internal scratch layer and highlights it there — so returning real geometries gets phase 7
highlighting largely for free, instead of the never-activated anchor layer.

**Two caveats, both real:**

1. **Nothing gates `FeatureProviderInteraction`.** It is constructed with `setActive()` in
   the `EventHandler` constructor and no code in core or ui ever calls
   `featureProviderInteraction.setActive(…)` — `createFeatureInfoSession()` only touches
   `featureInteraction`. So a provider is asked on *every* click, tool on or off. Harmless
   for `WMSFeatureProvider` (no request, see above) but not for an aggregating provider that
   hits the backend. The early `return []` above closes this, and must not be forgotten.
2. **It requires themesync's `useLuxFeatureInfoTemplates` flag to be on.** With the flag
   off, every lux WMS layer still carries its own `WMSFeatureProvider`, each returning a
   placeholder feature. Ours would be one of many, `FeatureProviderInteraction` would wrap
   them in a synthetic cluster feature and VC Map would open its cluster *list* window
   rather than the lux panel. Design A tolerates the flag being off; design B does not.
   That matters for developing against an unmodified deployment (`vcmplugin preview --vcm`),
   which is the plugin's dev workflow.

### Recommendation

**Design B**, with the gating `return []` treated as part of the contract and the flag
coupling accepted and documented. It replaces three pieces of bespoke machinery with the
seam the framework provides for this exact problem, and it puts the response on the feature
where the view class expects it.

Design A is what currently ships and is verified end to end, so this is a refactor with a
behavioural cost (dev against a flag-off deployment), not a bug fix. Sequence it as its own
phase, after the flag lands in a deployed themesync — otherwise the plugin becomes
untestable against staging in the interim.

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

## Phase 5 — Trigger & lifecycle

**As implemented (design A, shipping today).** A persistent interaction at the default index
(`eventHandler.addPersistentInteraction`) — after `CoordinateAtPixel`/`FeatureAtPixel`/
`EnsurePosition`/`FeatureProvider` and before the exclusive `FeatureInfoInteraction` — gated
on the `featureInfo` toolbox toggle. It owns a feature-ownership rule: a picked feature is
foreign only if it is a Cesium3DTile feature, carries `featureInfoViewSymbol`, or sits on a
layer the aggregated query does not cover. Results are anchored on a throwaway point in a
never-activated, non-pickable `VectorLayer`, because `selectFeature()` requires a feature
belonging to a layer of this app.

**Target (design B).** Replace the interaction with `LuxAggregatedFeatureProvider` on a
plugin-owned layer, per "Design B in detail" above. Keep the renderer half unchanged:
`LuxTemplateFeatureInfoView` stays registered in `app.featureInfoClassRegistry` and gets
selected through `featureInfoViewSymbol` instead of the explicit `selectFeature(…, view)`
parameter.

Common to both: registration happens in `initialize()`; plugins parse before a module's
`featureInfo` items and initialize serially in config order, so **list this plugin before
themesync** in the plugins array and document the constraint in both READMEs.

Bonus (Phase 7): the registered view is reusable per-feature for 3D tilesets (replacing
`BalloonFeatureInfoView` with lux-template rendering) — pure registry usage.

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

Settled during implementation:

- Empty-space clicks: **query anyway** (geoportail parity), behind `queryEmptySpace`.
- `shiftKey` accumulate/toggle: **dropped**, for free via `ModificationKeyType.NONE`.
- Locale source: **the deployed geoportail assets**, via `luxLocalesUrl`.

Open:

- Migrate to design B, and when — it is gated on a deployed themesync with
  `useLuxFeatureInfoTemplates` on, or dev against staging regresses.
- Whether design B should return the real geometries (phase 7 highlighting for free through
  the scratch layer) or keep a single envelope feature carrying the response.

## Risks

Retired:

- ~~CORS on `/getfeatureinfo` and `/assets/locales`~~ — verified: both echo
  `https://3d.geoportail.lu` with `Access-Control-Allow-Credentials: true`. No proxy or
  `TrustedServers` needed. From `localhost` they answer `*` + credentials instead, which
  browsers reject, so local development needs a CORS-bypassing browser extension.
- ~~Child-app mount for i18n~~ — templates mount directly in the VC Map component tree.

Still open:

- `zoom` param semantics from camera height — the backend accepts the derived value, but
  nothing confirms it is interpreted as the 2D portal intends.
- Vuetify style bleed _into_ the templates — never observed, but only `default.html` and
  `parcels.html` have been exercised in 3D.
- The templates need a `v-dompurify-html` directive the package neither ships nor declares;
  the plugin registers it on the shared Vue app as a stopgap. See work item 10 in
  `plan-feature-info-templates.md`.
