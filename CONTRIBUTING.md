# Guidelines

## Code

### Components

For a component `catalog`,

- the name of the file is `catalog.vue` in kebab-case.
- the class name is `Catalog`

### Composables

For a composable `catalog`,

- the name of the file is `catalog.composable.ts` in kebab-case.

```ts
// catalog.composable.ts
export default function useCatalog() {
  ...
  return {
    ...
  }
}
```

### Organisation

Rules

- Components are created under the components folder
- They are organized by feature (only one level nesting) eg. `catalog`
- All smart and dumb logic belongs to the same feature folder
- For now, there is only one smart component per folder, and must have the same name.
- A model file eg. `catalog.model.ts` gathers all models for the feature
- Reused components (hopefully dumb ones) are gathered under `common` folder
- Most of the layout of the application goes in the root `App.vue`
- Stateful services are shared under the `stores` folder as singletons. They are suffixed with `.store` eg `map.store.ts`.
- Shared services are under the `services` folder. They are suffixed with `.service` eg `map.service.ts`.

> ⚠️ Services in `src/services/` were long described here as **stateless**. They are not:
> most declare a class and export a single instance, and many read stores. Treat the folder
> as app-wide injectables with methods. The genuinely pure members are `*.utils.ts` and
> `services/api/*`. A *pure* per-feature service belongs beside its component as
> `components/<feature>/<feature>.service.ts`.

The layout below is the **intent**. Two places where the real tree differs: `stores/` is flat
(`stores/map.store.ts`, not `stores/map/map.store.ts`), and a feature folder does not always
contain a component of the same name — `layer-tree/` holds a service, model and mapper used by
`catalog/`, with no `layer-tree.vue`.

```
- components
  - common
    - dropdown
      - dropdown.vue
      - dropdown.spec.ts
      - dropdown.model.ts
   - layer-tree
      - layer-tree.model.ts
      - layer-tree.mapper.ts
      - layer-tree.service.ts
      - layer-tree.service.spec.ts
  - catalog
    - catalog.vue
    - catalog.spec
  - background-selector
  - themes-selector
    - themes-selector.model.ts
    - themes-selector.vue
    - themes-selector.spec.ts
    - theme-grid.model.ts
    - theme-grid.vue
    - theme-grid.spec.ts
    - theme-selector-button.vue
    - theme-selector-button.spec.ts
  - remote-layer
  App.vue
- composables
  - map
    - ol.composable.ts
    - ol.composable.spec.ts
    - ol.synchronizer.ts
    - ol.synchronizer.spec.ts
    - map.composable.ts
    - map.composable.spec.ts
- stores
  - map.store.model.ts
  - map.store.ts
  - map.store.spec.ts
  - config.store.ts
```

### Tests

All files (elements, composables) must be tested.

Put the test file beside the code file with `.spec` suffix eg.

```
- catalog.composable.ts
- catalog.composable.spec.ts
```

Code that reads a store needs `createTestingPinia`, or mocks of the composables it pulls in.
Pure code needs neither — a spec that needs heavy setup is a signal the logic sits in the wrong
layer.

### Syntax

- private variables are not suffixed nor prefixed with `_` eg. `private item: Item`
- models are not suffixed with `Model` eg. `interface Layer { }`
