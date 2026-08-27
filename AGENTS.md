# AGENTS.md

This file provides guidance to AI coding agents (Claude Code and others) when working with code in
this repository.

Companion docs: [`ARCHITECTURE_ANALYSIS.md`](./ARCHITECTURE_ANALYSIS.md) (how the layers really depend on each other)
and [`ONBOARDING.md`](./ONBOARDING.md) (setup, domain glossary, what's stale in the docs).

## Commands

```bash
npm run dev              # Start dev server (Vite, HMR)
npm run build            # Type-check + build
npm run type-check       # Run vue-tsc (one-shot)
npm run type-check:dev   # Run vue-tsc in watch mode
npm run lint             # ESLint + Prettier check
npm run format           # Prettier write + ESLint fix
npm run test             # Unit tests (Vitest, watch mode)
npm run test:unit:ci     # Unit tests with coverage (CI)
npm run test:e2e:dev     # E2E tests with Cypress UI (dev server)
npm run test:e2e:ci      # E2E tests headless (CI)
```

Run a single test file:

```bash
dotenv -e .env.e2e -- vitest --environment jsdom --root . src/path/to/file.spec.ts
```

Node version is pinned in `.nvmrc`. `src/bundle/` and `src/__fixtures__/` are excluded from lint
and type-check.

## Architecture

The **Luxembourg Geoportal v4** — a Vue 3 + TypeScript SPA on OpenLayers, rewriting the legacy
Angular/AngularJS **geoportal v3**. v3 still owns the backend: v4 has **no backend of its own** and
calls v3 hosts or the migration platform.

### App mode is current; lib mode is dormant

- **Standalone app (current)**: entry `src/main.ts` → `src/App.vue`, `.env.development`. Assume this
  mode for all work.
- **Library / custom elements (legacy)**: entry `src/bundle/lib.ts`, built with
  `vite-dist.config.ts` (`npm run build:lib:*`). **No longer really used** — do not build features
  for it. It is not deleted and it duplicates `App.vue`'s bootstrapping, so if you change bootstrap
  order in `App.vue`, check `bundle/lib.ts` too.

Much of `README.md` documents lib mode, tags and releases. Treat that half as historical.

### Key layers

| Layer          | Location                     | Pattern                                                           |
| -------------- | ---------------------------- | ----------------------------------------------------------------- |
| Components     | `src/components/<feature>/`  | `<feature>.vue` + optional `.service.ts`, `.model.ts`, `.spec.ts` |
| Composables    | `src/composables/<feature>/` | `<name>.composable.ts`                                            |
| Stores (Pinia) | `src/stores/`                | `<name>.store.ts` — singletons, stateful                          |
| Services       | `src/services/`              | `<name>.service.ts` — app-wide singletons (see below)             |
| Lib wrappers   | `src/lib/`                   | Custom OL/Mapbox wrappers (`ol-mapbox-layer`, `ol-mask-layer`)    |

Each feature folder is flat (no deep nesting). Shared/dumb components go under
`src/components/common/`.

How they actually relate (details and evidence in `ARCHITECTURE_ANALYSIS.md`):

- Components layer cleanly. **Everything below components is mutually cyclic** — stores import
  composables and services, services import composables and stores. Don't assume a strict
  hierarchy, and don't untangle it as a side quest.
- **Services are not stateless.** Most export a class instance as a singleton and many read stores.
  Read `src/services/` as "app-wide injectables with methods". The pure ones are `*.utils.ts` and
  `services/api/*`.
- **Some composables are not composables** — a few use no Vue reactivity and are just function
  namespaces; a few hold module-level state and are de facto singletons (notably `useMap()`, a
  global OpenLayers registry).
- A component-local `components/<feature>/<feature>.service.ts` holds **pure** logic only.
  `components/layer-tree/layer-tree.service.ts` is the template worth copying.

### Rules that matter

1. **Never call `useXStore()` at module top level** in a service or composable — resolve it inside
   the function that needs it. This is what keeps the cyclic import graph resolvable and Pinia from
   being touched before `createPinia()`.
2. **Never touch the OpenLayers map directly to add/remove/reorder a layer.** Mutate
   `mapStore.layers`; `composables/map/ol.synchronizer.ts` diffs it and applies the change. The
   synchronizers are instantiated once, in `components/map/map-container.vue`.
3. **Components mutate stores directly** — there is no action/command layer, don't invent one for a
   single feature. Read with `storeToRefs`.
4. **Types live in `*.model.ts`** beside their owner and cross every layer freely.
5. **Placement**: shared state → store; needs Vue reactivity or a lifecycle → composable; app-wide
   behaviour → `src/services/`; pure feature logic → component-local `.service.ts`.

### State management

Pinia stores own all shared state. `config.store.ts` (exported as `useThemeStore`) is the root — it
loads the themes API on startup.

`mapStore.layers` is the **single source of truth for what is on the map**. Mutations replace the
array rather than editing in place; that immutability is what lets `ol.synchronizer.ts` diff.

⚠️ **Layer IDs are `number | string`** — internal layers use numbers, remote WMS/WMTS layers use
strings (`"WMS||url||name"`). This union is why `as number` casts are scattered around; don't clean
them up without handling remote layers.

### State persistor (the URL is the app state)

`src/services/state-persistor/` serialises state to the URL / `localStorage` and restores it.
Permalinks are a product feature, so this subsystem is load-bearing. Each persistor implements the
same triple, one-way — the service knows the store, the store has no idea it is persisted:

```
bootstrap() → restore()  storage → mapper → write into store
            → persist()  watch(store, deep) → mapper → write to storage
```

- `*.mapper.ts` files are pure and the easiest things here to test. For new persisted state, copy an
  existing service + mapper pair and register the key in `state-persistor.model.ts`.
- ⚠️ **`bootstrap()` calls are scattered across several files**, not just `App.vue` — also
  `map-container.vue`, `language-selector.vue` and `slider-comparator.vue`. The last two only run if
  their component mounts. If a URL param is ignored, find its `bootstrap()` call site first.
- ⚠️ The `App.vue` order is load-bearing but only documented by a `// Important, keep order!`
  comment; nothing declares or enforces the dependencies.
- `storage/storage.helper.ts` **writes to the URL from its constructor**, i.e. at import time.

### Map stack

OpenLayers (`ol`) is the primary map library. `src/composables/map/` holds the OL lifecycle
composables and the two synchronizers. Vector tile styling uses Mapbox GL style specs via
`src/lib/ol-mapbox-layer.js` and `src/composables/mvt-styles/` (see its own `README.md`).

### Dev environment gotchas

- **`/themes` is not proxied** by `vite.config.ts`, so in dev the themes fetch fails and
  `config.store.ts` falls back to `src/__fixtures__/themes.api.fixture.ts`. The catalog you develop
  against is a frozen snapshot — check the fixture before blaming code. Fallback only happens in
  `DEV`/`e2e` mode.
- **Unit tests read `.env.e2e`**, not `.env.development`. `.env` and `.env.staging` are for lib
  builds (legacy).
- Some env vars are read at **module scope**, so changing them needs a dev-server restart (e.g.
  `VITE_EXCLUDED_PARENT_LAYER_IDS`, `VITE_DEFAULT_MAX_EXTENT`).
- MyMaps, auth, MySymbols, print and feature-info need a v3 host **and** a CORS-disabling browser
  extension in dev.

### i18n

Namespaces `app`, `layers`, `legends`, `server`, `tooltips`; languages `fr` (default), `de`, `en`,
`lb` with `en` fallback. Files live in **`public/assets/locales/<ns>.<lng>.json`**, fetched at
runtime by the i18next HTTP backend. i18next resolves **before** `app.mount()` — deliberate, to
avoid a Firefox render race.

- `nsSeparator: false` and `keySeparator: false` — some keys contain `:`, and keys are literal
  strings rather than dotted paths.
- Managed in Transifex via the `npm run i18n:*` scripts in `tools/translations/`; rarely hand-edited.
- The `layers-<lng>.json` files (dash, not dot) are dead — the load path uses `<ns>.<lng>.json`.
  `client.<lng>.json` files are empty despite what `README.md` says.

### Testing

- **Unit tests**: Vitest + `@vue/test-utils` + `@pinia/testing`. Co-located `*.spec.ts`. Globals
  enabled, jsdom, setup in `vitest.setup.ts`.
- **E2E tests**: Cypress in `cypress/e2e/`. Coverage via Istanbul when `INSTRUMENT_COVERAGE=true`.
  `chromeWebSecurity: false` bypasses CORS. `data-cy` attributes are stripped in production builds.
- Because services read stores, service specs usually need `createTestingPinia` or `vi.mock` of a
  composable. **Pure units need no setup** — the practical argument for keeping new logic pure.

## Code conventions (from CONTRIBUTING.md)

- Component files: `kebab-case.vue`, class name `PascalCase`
- Composable files: `name.composable.ts`, function `useName()`
- Stores: `name.store.ts`, services: `name.service.ts`, models: `name.model.ts`
- No `_` prefix/suffix for private variables
- Model interfaces are not suffixed with `Model` (e.g. `interface Layer {}`)
- `no-console` is an ESLint error — use `src/lib/logging/namespacedLogger` instead
- `no-only-tests` is enforced — never commit `.only` in tests
- Husky + lint-staged run `eslint --fix` + `prettier --write` on staged `.ts`/`.vue`

`CONTRIBUTING.md`'s example folder tree is idealised: `stores/` is flat (not `stores/map/`), and
`layer-tree/` has no `layer-tree.vue`.

## Git workflow

- Branches `GSLUX-<ticket>-<slug>`; commits on a branch prefixed `GSLUX-<ticket>: <what>`.
- PRs target `main` and are **squash-merged**.
- CI runs `lint`, `type-check`, a build, then unit and e2e tests.
