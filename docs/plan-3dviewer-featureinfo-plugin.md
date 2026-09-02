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

> **Revised 2026-09-02, and this is now what is implemented.** The original plan claimed
> VC Map's built-in flow "cannot express query all visible layers at a position, including
> empty-space clicks" and therefore specified a custom persistent interaction as the
> trigger. That claim is wrong, and the first implementation followed it before being
> refactored onto the provider. See "Correcting the original architecture" below.

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
- **With `responseType: 'text/html'` and no `textHTMLEvaluator`,
  `WMSFeatureProvider.getFeaturesByCoordinate()` fabricates a placeholder feature without
  making any request at all** — the URL is built later by `IframeWmsFeatureInfoView`. So
  themesync's current WMS layers cost nothing per click, but they do put a feature on the
  event. That single fact drove the ownership rule in the first implementation and the
  layer claiming in the current one.

### The three candidate designs

| | Trigger | Requests per click | Status |
| --- | --- | --- | --- |
| **A. Custom persistent interaction** | own interaction at the default chain index | 1 | Superseded. Worked, but needed an anchor-layer trick, a feature-ownership rule and mutable state on the view instance. |
| **B. One aggregating provider on a plugin-owned layer** | built-in `FeatureProviderInteraction` | 1 | **Implemented.** |
| **C. A standard `WMSFeatureProvider` per lux layer** | built-in | N | Explored in depth, rejected — see below. |

### Why candidate C was rejected

C is the minimal-custom-code ideal: no query code at all, just themesync writing
`featureInfo: { responseType: 'application/json' }` on each lux layer. N requests instead
of one was acceptable. It still does not work, and the reasons are worth recording because
they are expensive to re-derive.

What *does* work, measured against the live service:

- `wms.geoportail.lu/public_map_layers/service` advertises `application/json` for
  GetFeatureInfo, and **its response is lux-enriched, not stock**. Features carry `fid` in
  the composite `<layerId>_<featureId>` form with the backend's layer remap already applied
  (layer 262 → `359_075F00503002288`), plus `id`, a populated `alias`, and `properties`
  identical to the aggregated endpoint's `attributes` — including the nested `PF` object and
  the `measurements[]` array. Geometry comes back in EPSG:2169 regardless of the `SRS`
  parameter. 709 of 732 unique queryable lux layers are advertised queryable by that
  service.

What kills it:

- **`template` has no OGC equivalent.** It lives only in the backend table
  `lux_getfeature_definition` (alongside `query`, `additional_info_function`, `role`,
  `attributes_to_remove`) and is absent from the themes API. `getTemplateComponent()` falls
  back to the default template for unknown names, so a missing `template` does not fail —
  it silently renders all 41 templates as `default.html`, losing parcels, PAG, casipo, bus,
  solar and 34 others. `has_profile` (irrelevant here, no `profileComponent`) and `ordered`
  (cosmetic) are the other two envelope fields with no equivalent.
- **Hit tolerance diverges.** The aggregated endpoint uses a ±10 m `box1` filtered by a
  ±1 m `box2`; WMS GetFeatureInfo queries a single pixel at the map's current resolution,
  which in a 3D camera view degenerates to a sub-metre search. Measured at one identical
  point: layer 152 returned 1 feature from the aggregated endpoint and 0 from WMS.
- Three layers carry `ogc_query_layers` metadata naming a different `QUERY_LAYERS` value;
  querying layer 1813 by its own id returns `internal error`.

Worth knowing: the backend's own `_ogc_getfeatureinfo()` **is** candidate C — same
`VERSION=1.1.1`, `INFO_FORMAT=application/json`, `FEATURE_COUNT=50` — used for exactly the
layers whose `lux_getfeature_definition.engine` selects the OGC path, with `template` still
coming from the table. C becomes viable the day `template` is published as themes metadata
(the themes API serialises `Metadata` rows generically, so that is a data change, not a
code change). Until then the custom aggregated request stays.

### The implemented design

`LuxAggregatedFeatureProvider extends AbstractFeatureProvider`, attached to a single
plugin-owned, active, non-rendering `VectorLayer`. `getFeaturesByCoordinate(coordinate,
resolution, layer)` runs the one aggregated query and returns **exactly one** envelope
feature — a point at the click carrying the whole `FeatureInfoJSON[]` under a module
symbol, tagged with `featureInfoViewSymbol` so `getFeatureInfoViewForFeature()` routes it
to the lux view before any per-layer resolution happens. One feature is also what preserves
the 2D portal's stacked panel: two or more and `FeatureProviderInteraction` wraps them in a
synthetic cluster feature and VC Map opens its cluster *list* window instead.

What it deleted, relative to A: the interaction and its registration/teardown; the toolbox
gating code; `isForeignFeature()` — a picked feature means `FeatureProviderInteraction`
never runs, so 3D tileset clicks reach their balloon by construction; the anchor layer and
the `view.content = …` mutation, because `getProviderFeature()` already stamps
`vcsLayerName` and `isProvidedFeature` and the payload travels on the feature, which is what
`AbstractFeatureInfoView.getProperties({ feature }, layer)` is shaped for. Also the
`queryEmptySpace` option, which became meaningless (the provider only ever runs on clicks
that picked nothing), and the KML/GPX export helper, which was unreachable dead code.

Net effect on the plugin: **−83 lines**, and the two most intricate pieces — the
interaction and the ownership rule — are gone. The saving is modest because the gate and
the layer claiming below cost about as much as the interaction they replace; what improved
is *which* code is left.

**Three things that are contract, not polish:**

1. **The provider gates itself on the `featureInfo` toolbox toggle.**
   `FeatureProviderInteraction` is constructed with `setActive()` in the `EventHandler`
   constructor and no code in core or ui ever calls
   `featureProviderInteraction.setActive(…)` — `createFeatureInfoSession()` only touches
   `featureInteraction`. So providers are asked on *every* click, tool on or off. Harmless
   for `WMSFeatureProvider` (no request, see above) but not for one that hits the backend.
2. **The plugin clears the feature providers themesync leaves on lux layers.** Otherwise
   each `text/html` placeholder joins the envelope feature, the result becomes a cluster,
   and empty-space clicks stop clearing the selection. This is also what removes design B's
   original dependency on themesync's `useLuxFeatureInfoTemplates` flag — the plugin now
   works with it on or off, which keeps `vcmplugin preview --vcm` against an unmodified
   deployment usable as the dev workflow. The provider only exists once a layer has been
   activated (`WMSLayer` builds it in `initialize()`), so this needs a `stateChanged`
   listener, not a one-off sweep.
3. **The envelope feature gets an empty `Style`.** `selectFeature()` clones a provided
   feature onto its internal scratch layer and forces `olcs_allowPicking: true`; without an
   empty style that clone would render a marker and swallow the next click at the same spot.

One deviation from the plan as written: the provider is **not** registered in
`featureProviderClassRegistry`. It needs the app, the plugin config and the view instance at
construction, none of which can come from JSON, so a registry entry would advertise a type
no config could instantiate.

### Verified

Driven over CDP against `https://3d-staging.geoportail.lu` with themesync 1.5.2 and no
config change:

| check | result |
| --- | --- |
| one active queryable layer | one request (`302`), stacked panel, no `featureInfo2d` iframe |
| four active queryable layers | **one** request (`147,698,262,302`), **one** window, no cluster list |
| click where no layer has data | panel closes |
| feature info tool toggled off | **zero** requests |
| attribute values | render, not just labels |

---

## Phase 1 — Scaffold

**Done.** Cloned the `3dviewer-plugin-auth` structure: `@vcmap/plugin-cli` 4.x
(`vcmplugin build/preview`), peerDeps `@vcmap/core ^6.3.9`, `@vcmap/ui ^6.3.11`,
`vue ~3.4.38`, `vuetify ~3.7.14`, `mapVersion ^6.3`; vitest +
`vcsPluginInterface.spec.ts`.

```ts
type PluginConfig = {
  luxGetInfoUrl: string // https://map.geoportail.lu/getfeatureinfo
  luxLocalesUrl: string // https://map.geoportail.lu/assets/locales
  templatesConfig: LuxTplConfig // the ~16 URLs + solarEconomicAllowedRoleIds
  credentials?: RequestCredentials
  bigBuffer: number // box1, metres in EPSG:2169 — 10
  smallBuffer: number // box2 — 1
}
```

Defaults live in `src/defaultOptions.ts`, **not** in an imported `config.json`: the dev
server reserves `/config*` for module configs, so `import '../config.json'` 404s and the
whole plugin fails to load in dev while working fine in the build, which inlines it. A
deployed VC Map reads a plugin's config from the app config only, never from its shipped
`config.json`.

Extra dependencies beyond the plan: `i18next` + `i18next-http-backend` (the templates
package leaves the backend plugin to the host), `@vcsuite/logger`, and
`vue-dompurify-html` for the directive gap in Phase 3.
`@geoportallux/feature-info-templates` is consumed through a `file:` dependency on the
sibling checkout with `install-links=true` in `.npmrc`, because it is not published yet —
a symlink whose realpath is outside the project root trips Vite's dev-server `fs.allow`.

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

**Done**, in `luxQueryService.ts`, and it is the one part that stays custom — see "Why
candidate C was rejected". Two things the plan did not anticipate: eligible layers fall
back to `allowPicking` on 2D layers when `properties.luxQueryable` is absent, so the plugin
also works against a themesync older than 1.6; and `zoom` is derived from
`map.getCurrentResolution(position)` rather than from camera height directly, which works
in both map types. `buildFidParams()` exists but nothing calls it — the `fid` deep link is
Phase 7.

## Phase 3 — Window + rendering (wrapper component, no child app)

- ~~`app.windowManager.add(…)`~~ — **not** how it ended up: the window is opened by
  `featureInfo.selectFeature()` from the options `LuxTemplateFeatureInfoView`'s
  `getWindowComponentOptions()` returns, which is what buys the built-in
  window/selection/toolbox lifecycle. The plugin never touches the window manager.
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
- i18next instance: **a dedicated instance, not the singleton** —
  `i18next.createInstance().use(HttpBackend)` passed to
  `createLuxTplI18next(instance, loadPath)`. The plugin shares its Vue app with VC Map and
  every other plugin, and the templates read their instance through the injected
  `LUX_TPL_I18N`, so a global buys nothing. Language sync is `app.localeChanged`, not a
  watcher on `app.vueI18n.locale`. The load is wrapped in try/catch: VC Map does not await
  `initialize()`, so a rejection would surface as an unhandled rejection and cost the
  provider registration. CORS on the locale path is verified — see Risks.
- **Undocumented host requirement found in implementation:** six templates, `default`
  among them, render attribute *values* through a `v-dompurify-html` directive that the
  package neither ships nor declares (the geoportail registers it app-wide in `main.ts`).
  `LuxFeatureInfoWindow.vue` registers it on the shared Vue app as a stopgap. Tracked as
  work item 10 in `plan-feature-info-templates.md`.

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
- ~~`export` emit: implement KML/GPX via `ol/format`~~ — **dropped.** It was implemented,
  then deleted as dead code: the templates only ever forward `export` from
  `profileComponent`, and that is unset, so no template can emit it. It comes back with the
  3D profile component, not before.

**Done**, in `luxTplRuntime.ts`. The auth-plugin `UserInfo` fixes are done too.

## Phase 5 — Trigger & lifecycle

**Done.** `LuxAggregatedFeatureProvider` on a plugin-owned, active, non-rendering
`VectorLayer` is the trigger; `LuxTemplateFeatureInfoView`, registered in
`app.featureInfoClassRegistry` during `initialize()`, is the renderer, selected through
`featureInfoViewSymbol` on the envelope feature rather than through the explicit
`selectFeature(…, view)` parameter. Details, caveats and the verification record are under
"The implemented design" above. The plugin also claims the lux layers by clearing their
per-layer feature providers.

Registration happens in `initialize()`; plugins parse before a module's `featureInfo` items
and initialize serially in config order, so **list this plugin before themesync** in the
plugins array — documented in both READMEs.

Bonus (Phase 7): the registered view is reusable per-feature for 3D tilesets (replacing
`BalloonFeatureInfoView` with lux-template rendering) — pure registry usage. Note this is
now structural rather than incidental: `FeatureProviderInteraction` never runs once a
feature was picked, so a 3D building click cannot reach the aggregated query without a
different mechanism.

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

Status: 1 and 2 are implemented in themesync (version bumped to 1.6.0). 3 is **not** done
and should not be until both packages are published — `config/lux.config.json` installs
plugins from npm, so pointing it at an unpublished plugin while turning the flag on would
leave the WMS layers referencing a view that does not exist. The exact config block is in
the plugin's README.

The flag is no longer load-bearing for the plugin: it claims the lux layers itself, so it
works with the flag on or off. What the flag still buys is dropping themesync's per-layer
`featureInfo: { responseType }` config in the first place, which is tidier than having the
plugin clear the providers afterwards.

## Phase 7 — Enhancements (independently shippable)

None of these are implemented.

- Highlight clicked features (geometries arrive in EPSG:2169; style ≈ geoportail's
  yellow/orange highlight). Cheaper than the plan assumed: `selectFeature()` already clones
  a provided feature onto its internal scratch layer and highlights it, so putting the real
  geometries on the envelope feature — instead of the click point with an empty style — gets
  most of this for free. The constraint is that it must stay **one** feature, or the result
  becomes a cluster list.
- Route 3D-building clicks (BUILDINGID) through the lux query / lux templates, replacing
  the balloon. Now needs a different mechanism: `FeatureProviderInteraction` never runs once
  a feature was picked, so the provider cannot see those clicks at all.
- `fid` deep-links shared with the 2D permalink format. `buildFidParams()` is in place;
  the URL handling is not. Note the templates build their "direct link" from `currentUrl`,
  which the window component sets to the 3D viewer's `window.location.href` — a URL with no
  query string and no `fid` handling, so that link is currently broken. Passing a configured
  2D-portal base URL instead would fix it with a config string.
- Elevation profile in 3D (needs a Cesium-side profile component — explicitly out of v1).
  This also unblocks the KML/GPX export, which the templates only emit from that component.

## Open decisions

Settled during implementation:

- Empty-space clicks: **query anyway** (geoportail parity), behind `queryEmptySpace`.
- `shiftKey` accumulate/toggle: **dropped**, for free via `ModificationKeyType.NONE`.
- Locale source: **the deployed geoportail assets**, via `luxLocalesUrl`.

Also settled:

- Trigger: **the feature provider** (design B). The flag coupling that made it look costly
  was removed by claiming the lux layers, so it works with
  `useLuxFeatureInfoTemplates` on or off.
- Per-layer standard WMS requests (design C): **rejected**, see above. Revisit if
  `template` is ever published as themes metadata.

Open:

- Whether the provider should return the real geometries instead of a single envelope
  feature. It would get phase 7 highlighting almost for free through `selectFeature()`'s
  `isProvidedFeature` scratch-layer branch — but more than one feature turns the result
  into VC Map's cluster list, so it needs the response's geometries merged onto one feature
  rather than returned as many.
- Publishing `template`/`ordered` (and `is_ogc_queryable`, `ogc_query_layers`) as a single
  JSON themes-metadata field, which would unlock design C and delete the query service.

## Risks

Retired:

- ~~CORS on `/getfeatureinfo` and `/assets/locales`~~ — verified: both echo
  `https://3d.geoportail.lu` with `Access-Control-Allow-Credentials: true`. No proxy or
  `TrustedServers` needed. From `localhost` they answer `*` + credentials instead, which
  browsers reject, so local development needs a CORS-bypassing browser extension.
- ~~Child-app mount for i18n~~ — templates mount directly in the VC Map component tree.
- ~~The trigger has to be a custom interaction~~ — see above; it is a feature provider.

Introduced by the provider design, and mitigated in it:

- `FeatureProviderInteraction` is never gated, so a provider is asked on every click →
  the provider gates itself on the toolbox toggle.
- A provided feature's highlight clone is pickable → the envelope feature carries an empty
  `Style`.
- themesync's `text/html` providers fabricate placeholder features → the plugin clears the
  providers on lux layers.
- A `WMSLayer` rebuilds its provider in `reload()`/`setLayers()` without firing
  `stateChanged`, so a themesync reload can resurrect one. Not handled; it disappears once
  `useLuxFeatureInfoTemplates` is on.

Still open:

- `zoom` param semantics from camera height — the backend accepts the derived value, but
  nothing confirms it is interpreted as the 2D portal intends.
- Vuetify style bleed _into_ the templates — never observed, but only `default.html` and
  `parcels.html` have been exercised in 3D.
- The templates need a `v-dompurify-html` directive the package neither ships nor declares;
  the plugin registers it on the shared Vue app as a stopgap. See work item 10 in
  `plan-feature-info-templates.md`.
