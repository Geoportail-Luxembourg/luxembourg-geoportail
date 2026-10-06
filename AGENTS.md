# AGENTS.md

Working reference for AI coding agents in this repository. Conventions and coding rules are imported
at the bottom of this file — follow them as if written here.

## Commands

```bash
npm run dev              # Dev server (Vite, HMR)
npm run build            # Type-check + build
npm run type-check       # vue-tsc (add :dev for watch mode)
npm run lint             # ESLint + Prettier check
npm run format           # Prettier write + ESLint fix
npm run test             # Unit tests (Vitest, watch)
npm run test:unit:ci     # Unit tests with coverage
npm run test:e2e:ci      # E2E headless
```

Single test file:

```bash
dotenv -e .env.e2e -- vitest --environment jsdom --root . src/path/to/file.spec.ts
```

Node version is pinned in `.nvmrc`. `src/bundle/`, `src/__fixtures__/` and all `*.md` are excluded
from lint and type-check.

## Context

Luxembourg Geoportal v4 — Vue 3 + TypeScript SPA on OpenLayers, rewriting the legacy
Angular/AngularJS geoportal v3. v3 still owns the backend; v4 has **no backend of its own** and
calls v3 hosts or the migration platform.

Assume **standalone app mode** — entry `src/main.ts` → `src/App.vue`. The web-component / library
mode (`src/bundle/lib.ts`, `vite-dist.config.ts`, `npm run build:lib:*`) is dormant: don't build
features for it. It is not deleted and it duplicates `App.vue`'s bootstrapping, so if you change
bootstrap order in `App.vue`, check `bundle/lib.ts` too.

## Facts that are easy to get wrong

**Layer IDs are `number | string`** — internal layers numeric, remote WMS/WMTS layers strings
(`"WMS||url||name"`). This is why `as number` casts exist; don't remove them without handling
remote layers.

**The URL is application state.** `src/services/state-persistor/` serialises to URL / `localStorage`:

```
bootstrap() → restore()  storage → mapper → write into store
            → persist()  watch(store, deep) → mapper → write to storage
```

One-way: the service knows the store, the store doesn't know it's persisted. `bootstrap()` calls are
scattered across several files, not just `App.vue` — also `map-container.vue`,
`language-selector.vue`, `slider-comparator.vue`; the last two only run if their component mounts.
If a URL param is ignored, find its `bootstrap()` call site first. The `App.vue` order is
load-bearing but recorded only as a `// Important, keep order!` comment.
`state-persistor/storage/storage.helper.ts` writes to the URL from its constructor, at import time.

**Dev runs on a fixture, not the API.** `/themes` is not proxied by `vite.config.ts`, so the fetch
fails and `config.store.ts` falls back to `src/__fixtures__/themes.api.fixture.ts`. The catalog you
develop against is a frozen snapshot — check the fixture before blaming code.

**Unit tests read `.env.e2e`**, not `.env.development`.

**Some env vars are read at module scope** (e.g. `VITE_EXCLUDED_PARENT_LAYER_IDS`,
`VITE_DEFAULT_MAX_EXTENT`) — changing them needs a dev-server restart.

**i18n resolves before mount** (deliberate, avoids a Firefox render race). Files at
`public/assets/locales/<ns>.<lng>.json`; namespaces `app`, `layers`, `legends`, `server`, `tooltips`.
Both `nsSeparator` and `keySeparator` are `false` — keys contain `:` and are literal strings, not
dotted paths. Managed in Transifex via `npm run i18n:*`; rarely hand-edited.

## Test setup

Vitest + `@vue/test-utils` + `@pinia/testing`, jsdom, globals on, setup in `vitest.setup.ts`.
Cypress specs in `cypress/e2e/`; `chromeWebSecurity: false` bypasses CORS, `data-cy` attributes are
stripped in production builds.

## Domain glossary

Vocabulary that appears in code and tickets with no explanation:

| Term | Meaning |
| --- | --- |
| **Theme** | A top-level thematic grouping of layers (`main`, `tourism`, …). Selecting one swaps the whole catalog tree and the app accent colour. The themes API is the app's root config. |
| **Catalog / layer tree** | The browsable hierarchy of *available* layers, built from the themes API. |
| **Layer manager** | The list of layers *currently on the map*, reorderable — distinct from the catalog. |
| **Background layer (bg layer)** | The basemap. Mutually exclusive, vector-tile styled, with its own exclusion rules against overlay layers. |
| **MVT style / style editor** | Vector-tile basemap styling via Mapbox GL style specs. |
| **MyMaps** | User-authored maps: saved drawings, annotations, shared links. Needs auth + v3. |
| **MySymbols** | User-uploaded marker icons used by MyMaps drawings. |
| **Remote layers** | External WMS/WMTS services a user adds by URL. |
| **Slider comparator** | Split-screen widget comparing two layer sets side by side. |
| **LiDAR profile** | Elevation / point-cloud cross-section along a drawn line. |
| **Forage virtuel** | "Virtual borehole" — a subsurface geology report for a clicked point. |
| **PAG / PDS / CASIPO** | Luxembourg urban-planning report services (*plan d'aménagement général*, *plan directeur sectoriel*, cadastral/parcel reports), reached as external URLs. |
| **v3 / migration platform** | The legacy app and its backend. The migration platform is the staging backend v4 talks to when no local v3 is running. |

## Git

Branches `GSLUX-<ticket>-<slug>`; commits on a branch prefixed `GSLUX-<ticket>: <what>`. PRs target
`main`, squash-merged. CI runs lint, type-check, build, unit and e2e tests.

## Conventions and coding rules

@CONTRIBUTING.md

@docs/BEST_PRACTICES.md
