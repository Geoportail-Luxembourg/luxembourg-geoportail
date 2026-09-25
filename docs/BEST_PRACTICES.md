# Best practices

How to write code in this repo.

> These rules are durable, but the files named as examples reflect the code as it stood when this
> was written. Check a referenced file still exists and still does what is claimed before copying
> it.

## Where new code goes

| What you have | Where it belongs |
| --- | --- |
| State more than one component needs | Pinia store, `src/stores/` |
| Logic needing Vue reactivity or a component lifecycle | composable, `src/composables/` |
| Behaviour the whole app uses (API calls, OL layer building, persistence) | service, `src/services/` |
| Pure logic for one feature (transforms, tree walks, formatting) | `components/<feature>/<feature>.service.ts` |
| An interface or type | `*.model.ts` beside its owner |

Prefer the **last two** when you have a choice: pure code needs no test setup and cannot create a
new import cycle. `components/layer-tree/layer-tree.service.ts` is the reference — recursive
transforms, type-only imports, no store access, no reactivity.

## Stores

- Setup syntax (`defineStore('x', () => {…})`), one store per domain concern.
- **Replace, don't mutate.** Assign a new array or object instead of pushing or splicing — the map
  synchronizer detects change by diffing, so in-place edits are invisible to it.
- Keep stores thin: state plus small mutators. Cross-cutting behaviour belongs in a composable or
  service that the component calls.
- Avoid new store → composable and store → service imports. Each one adds an import cycle.

## Composables

- `useName()` returning an object of functions and refs. One concern each.
- If it needs no Vue reactivity, it isn't really a composable — consider a service.
- Don't introduce module-level mutable state. A few composables have it and are de facto singletons;
  that is a trap, not a precedent.
- Lifecycle hooks mean the composable **must** be called from a component's setup. Say so in a
  comment if that isn't obvious from the name.

## Services

- Class plus one exported singleton: `export const xService = new XService()`.
- **No work in the constructor** — no fetches, no storage writes, no store reads. Constructors run
  at import time, before Pinia and before mount. Put initialisation in an explicit `init()` or
  `bootstrap()` that the caller invokes.
- Keep `*.utils.ts` and `services/api/*` pure. That is where reusable helpers belong.

## Never resolve a store at module scope

In every service and composable:

```ts
// ✗ latent Pinia-ordering bug; also breaks the circular imports
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
- Tag testable elements with `data-cy`.

## The map

**Never call OpenLayers directly to add, remove, reorder or restyle a layer.** Mutate
`mapStore.layers` and let the synchronizer apply it. The synchronizers are already instantiated in
`components/map/map-container.vue` — don't create more.

Reach for `useMap().getOlMap()` only for genuinely imperative work (interactions, overlays,
measurements) that has no store representation.

## Persisted state

Any state a user would expect to survive a reload or a shared link belongs in
`services/state-persistor/`:

1. A service implementing `bootstrap()` → `restore()` + `persist()`, copied from an existing one.
2. A pure `*.mapper.ts` for the storage ↔ typed-state conversion.
3. A key registered in `state-persistor.model.ts`.
4. A `bootstrap()` call in the right place — ordering in `App.vue` is load-bearing and unenforced,
   and bootstrapping from a component means it only runs when that component mounts.

Keep the direction one-way: the service knows the store, the store never knows it is persisted.

## Types

- Interfaces in `*.model.ts` next to their owner; importable from anywhere.
- No `Model` suffix on the interface itself (`interface Layer {}`).
- Prefer `import type` — it keeps type-only edges out of the runtime graph.
- Fix the type rather than reaching for `as`. Where a cast is unavoidable, comment why.

## Tests

- Co-locate `*.spec.ts` and write them as you go.
- Pure units need no setup — write code so it stays that way. A spec needing `createTestingPinia`
  plus several `vi.mock` calls is a signal the logic is in the wrong layer.
- Cover the persistor round trip: state → storage → restore → same state.
- Never commit `.only` (lint enforces it).

## Before you push

```bash
npm run format && npm run type-check && npm run test
```

- Use `src/lib/logging/namespacedLogger`, never `console` (lint error).
- If you touched `App.vue` bootstrapping, check whether `src/bundle/lib.ts` needs the same change.
