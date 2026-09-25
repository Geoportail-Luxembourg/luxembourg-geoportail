# Onboarding — Geoportail Luxembourg v4

Orientation for a developer arriving on the project: what the app is, how to run it, what to read.

> ⚠️ **Snapshot.** Sections 1, 3 and 4 describe the code as it stood when this was written — the
> feature folders, the repository layout and the files worth reading first. Treat them as a starting
> point, not a guarantee; the code is the source of truth.

## 1. What this is

The Luxembourg national geoportal — the public map viewer at `geoportail.lu`. A Vue 3 + TypeScript
SPA on **OpenLayers**, with vector-tile basemaps styled through Mapbox GL style specs.

It is the **v4 rewrite** of a legacy Angular/AngularJS app (**v3**). v3 still exists and still owns
the backend: v4 has **no backend of its own**, and every API call goes to a v3 host or to the
migration platform. That single fact explains most of the local-setup friction below.

Development today is the **standalone Vue application**. There is also a web-component / library mode
for embedding into v3, documented at length in `README.md` — it is **no longer really used**. Don't
build features for it.

Roughly one feature folder per capability:

| Area | Folders |
| --- | --- |
| Map & controls | `map`, `map-controls`, `slider` (side-by-side comparator) |
| Layers | `catalog`, `layer-tree`, `layer-panel`, `layer-manager`, `layer-metadata`, `background-selector`, `theme-selector`, `remote-layers`, `legends` |
| Drawing & user data | `draw`, `my-maps`, `export`, `share` |
| Query & analysis | `search`, `info`, `routing`, `lidar`, `feature-elevation-profile` |
| Shell & cross-cutting | `header-bar`, `footer`, `side-panel`, `alert-notifications`, `auth`, `feedback`, `offline`, `common` |

## 2. Get it running

```bash
nvm use && npm ci && npm run dev
```

That is all you need for the map to appear. Two things will confuse you early:

**What you see is a fixture, not the live API.** The themes request isn't proxied in dev, so the app
falls back to a frozen snapshot of the layer catalog. This is deliberate — it is what lets v4 run
with no backend. If a layer looks wrong, suspect the fixture before your code.

**Most other features need v3 plus a CORS browser extension.** MyMaps, authentication, MySymbols,
print, feature info and the shop links all call out to a v3 host or the migration platform. Without
an extension such as "Allow CORS" they fail with opaque network errors. Authentication additionally
needs a local v3 docker composition and env changes on both sides — `README.md` §🔒 has the steps.
Don't attempt that on day one.

**What works with no setup**: map rendering, background switching, the catalog and layer tree,
permalinks, drawing, measure tools, the style editor, unit tests. Enough to make a first real change.

Two more environment details worth knowing: unit tests read `.env.e2e` rather than
`.env.development`, and a few `VITE_*` vars are read at module scope, so changing them needs a
dev-server restart rather than just a reload.

## 3. Repo layout

```
src/
  main.ts              app entry: i18next init → mount → load themes
  App.vue              layout + most state-persistor bootstrapping
  components/<feature>/ one flat folder per feature — see §1
    common/            shared dumb components
  composables/<area>/  <name>.composable.ts
  stores/              Pinia, all shared state
  services/            app-wide behaviour, mostly exported singletons
  lib/                 hand-rolled OL/Mapbox wrappers + namespacedLogger
  __fixtures__/        themes snapshot + test fixtures
  bundle/lib.ts        legacy web-component entry — dormant
public/assets/locales/ translation JSON, fetched at runtime
cypress/e2e/           e2e specs
tools/translations/    i18n sync scripts
```

Feature folders are flat — one level, one smart component per folder, reusable dumb components in
`components/common/`.

## 4. Read these five files

About an hour, and it is the difference between guessing and knowing.

1. **`src/main.ts`** — bootstrap order. i18next resolves *before* mount; themes load after.
2. **`src/App.vue`** — the app shell, and the hand-ordered persistor bootstrapping.
3. **`src/stores/map.store.ts`** — the state model. `layers` is the single source of truth for what
   is on the map, and every mutation replaces the array rather than editing it.
4. **`src/composables/map/ol.synchronizer.ts`** — **the keystone.** It watches the store, diffs old
   against new, and translates the difference into imperative OpenLayers calls.

   ```mermaid
   graph LR
       C["component"] -->|"mutates"| S["mapStore.layers"]
       S -->|"watch + diff"| Y["OlSynchronizer"]
       Y -->|"add / remove / reorder"| O["OpenLayers map"]
   ```

   You never touch the OL map directly to show a layer. Once this clicks, most of the codebase makes
   sense.
5. **`src/components/catalog/catalog-tree.vue`** — a real feature, fully wired: stores, composables,
   a component-local service and a mapper composed in `watchEffect`. This is what a feature looks
   like here.

Be aware that the four-layer folder structure names folders; it does not describe dependency
direction. Components sit cleanly on top, but stores, services and composables import each other in
both directions.

## 5. What to distrust in the repository's documentation

The root README is accurate on scripts, `.env` files, authentication setup and the CORS advice. Its
whole library / web-component half — tags, releases, embedding into v3 — documents a workflow that
is no longer used.

Elsewhere, example folder trees tend to be idealised rather than generated, so expect the real tree
to differ in small ways.

## 6. Domain glossary

Luxembourg-geoportal vocabulary — theme, catalog, background layer, MyMaps, forage virtuel,
PAG/PDS/CASIPO and the rest — is listed in `AGENTS.md` at the repository root. It is kept there
because AI coding agents load that file automatically, and a single copy cannot drift.

## 7. First week

1. Get it running; confirm the catalog opens and a layer appears on the map.
2. Install a CORS extension; confirm feature-info on a clicked feature works.
3. Read the five files in §4.
4. Read the repository's contributing guidelines before your first commit.
5. Add a layer from the catalog, read the URL, reload. Understand what the state persistor just did.
6. Take a small ticket touching one feature folder, with `npm run type-check:dev` running alongside
   the dev server.
