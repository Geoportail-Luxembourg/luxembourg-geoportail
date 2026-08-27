# Best practices

How to write code in this repo. Prescriptive and short — the reasoning is in
[`ARCHITECTURE_ANALYSIS.md`](./ARCHITECTURE_ANALYSIS.md), the setup in [`ONBOARDING.md`](./ONBOARDING.md).

Assume **standalone app mode**. Don't build for the web-component / lib mode; it is dormant.

## Where new code goes

| What you have | Where it belongs |
| --- | --- |
| State more than one component needs | Pinia store, `src/stores/` |
| Logic needing Vue reactivity or a component lifecycle | composable, `src/composables/` |
| Behaviour the whole app uses (API calls, OL layer building, persistence) | service, `src/services/` |
| Pure logic for one feature (transforms, tree walks, formatting) | `components/<feature>/<feature>.service.ts` |
| An interface or type | `*.model.ts` beside its owner |

Prefer the **last two** when you have a choice. Pure code needs no test setup and can't create a
new cycle. `components/layer-tree/layer-tree.service.ts` is the reference: recursive transforms,
type-only imports, no store access, no reactivity.

Feature folders stay flat — one level, one smart component per folder, shared dumb components in
`components/common/`.

## Stores

- One store per domain concern. Setup syntax (`defineStore('x', () => {…})`), like the existing ones.
- **Replace, don't mutate.** Assign a new array or object rather than pushing/splicing. The map
  synchronizer detects changes by diffing, and in-place edits are invisible to it.
- Keep stores thin: state plus small mutators. Cross-cutting behaviour belongs in a composable or
  service that the component calls.
- Avoid new store → composable / store → service imports. They exist, they're the inverted edges in
  the dependency graph, and each one adds a cycle.

## Composables

- `useName()` returning an object of functions and refs. One concern per composable.
- If it needs no Vue reactivity, it is not really a composable — consider a service instead.
- Don't add module-level mutable state. A couple of composables have it and are de facto singletons;
  that pattern is a trap, not a precedent.
- Lifecycle hooks (`onMounted`/`onUnmounted`) mean the composable **must** be called from a
  component's setup. Say so in a comment if it isn't obvious.

## Services

- Class plus one exported singleton instance: `export const xService = new XService()`.
- **No work in the constructor.** No fetches, no storage writes, no store reads — constructors run
  at import time, before Pinia and before mount. Put initialisation in an explicit `init()` or
  `bootstrap()` the caller invokes.
- Keep `*.utils.ts` and `services/api/*` pure. That's where reusable helpers belong.

## Never resolve a store at module scope

The rule that keeps the cyclic import graph working, in every service and composable:

```ts
// ✗ latent Pinia-ordering bug; also breaks circular imports
const mapStore = useMapStore()
export function addThing(l: Layer) { mapStore.addLayers(l) }

// ✓
export function addThing(l: Layer) {
  const mapStore = useMapStore()
  mapStore.addLayers(l)
}
```

Same for `storeToRefs`. Pattern to copy: `composables/themes/themes.composable.ts`.

## Components

- `<script setup lang="ts">`. Read state with `storeToRefs`, call store mutators directly — there is
  no action layer, don't add one for a single feature.
- Push logic out of the template and out of the component: a computed, a composable, or a
  `<feature>.service.ts`. Components should wire, not compute.
- Nothing below the component layer may import a component. Keep it that way.
- Tag testable elements with `data-cy` — it is stripped from production builds automatically.

## The map

**Never call OpenLayers directly to add, remove, reorder or restyle a layer.** Mutate
`mapStore.layers`; `composables/map/ol.synchronizer.ts` diffs the store and applies the change.
`OlViewSynchronizer` does the same for centre / zoom / rotation. Both are already instantiated in
`components/map/map-container.vue` — don't create more.

Reach for `useMap().getOlMap()` only for genuinely imperative work (interactions, overlays,
measurements) that has no store representation.

Layer IDs are `number | string` — internal layers are numeric, remote WMS/WMTS layers are strings.
Handle both; don't "simplify" an `as number` cast away without checking remote layers.

## Persisted state (the URL is app state)

Permalinks are a product feature. Any state a user would expect to survive a reload or a shared link
belongs in `services/state-persistor/`:

1. A service implementing `bootstrap()` → `restore()` + `persist()`, copied from an existing one.
2. A pure `*.mapper.ts` for the storage ↔ typed-state conversion.
3. A key registered in `state-persistor.model.ts`.
4. A `bootstrap()` call at the right place — and be deliberate: ordering in `App.vue` is
   load-bearing and unenforced. If you bootstrap from a component instead, remember it only runs
   when that component mounts.

Keep the direction one-way: the service knows the store, the store never knows it is persisted.

## Types

- Interfaces live in `*.model.ts` next to their owner and may be imported from anywhere.
- No `Model` suffix on the interface itself (`interface Layer {}`).
- Prefer `import type` for type-only imports — it keeps type edges out of the runtime graph.
- Fix the type rather than reaching for `as`. Where a cast is unavoidable, comment why.

## Tests

- Co-locate `*.spec.ts`. Test new logic as you write it, not afterwards.
- Pure units (component-local services, mappers, utils) need no setup — write them so they stay that
  way. If a spec needs `createTestingPinia` plus several `vi.mock` calls, that is a signal the code
  is in the wrong layer.
- Cover the persistor round trip: state → storage → restore → same state.
- Never commit `.only` (lint enforces it).

## Before you push

```bash
npm run format      # prettier + eslint --fix
npm run type-check
npm run test
```

- Branch `GSLUX-<ticket>-<slug>`, commits prefixed `GSLUX-<ticket>:`, PR onto `main` (squash-merged).
- Use `src/lib/logging/namespacedLogger`, never `console` (lint error).
- If you touched `App.vue` bootstrapping, check whether `src/bundle/lib.ts` needs the same change.
- If you changed how the layers depend on each other, update `ARCHITECTURE_ANALYSIS.md`.
