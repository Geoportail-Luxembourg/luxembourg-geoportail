# Guidelines

## Code

### Custom elements

For an element `catalog`,

- the name of the file is `catalog.vue` in kebab-case.
- the class name is `Catalog`

### Composables

For a composable `catalog`,

- the name of the file is `catalog.composable.ts` in kebab-case.
  Services are mostly exposed as singletons and should be directly instancied.

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

- Custom elements are created under components folder
- They are organized by feature (only one level nesting) eg. `catalog`
- All smart and dumb logic belongs to the same feature folder
- For now, there is only one smart component per folder, and must have the same name.
- A model file eg. `catalog.model.ts` gathers all models for the feature
- Reused components (hopefully dumb ones) are gathered under `common` folder
- Most of the layout of the application goes in the root `App.vue`
- Statefull services are shared under the `stores` folder as singletons. They are suffixed with `.store` eg `map.store.ts`.
- Shared Stateless services are under the `services` folder. They are suffixed with `.service` eg `map.service.ts`.

```
- components
  - common
    - dropdown
      - dropdown.vue
      - dropdown.spec.ts
      - dropdown.model.ts
   - layer-tree
      - layer-tree.vue
      - layer-tree.spec.ts
      - layer-tree.model.ts
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
  - map
    - map.state.model.ts
    - map.store.ts
    - map.store.spec.ts
  - themes
    - themes.store.model.ts
    - themes.store.ts
    - themes.store.spec.ts
```

### Tests

All files (elements, composables) must be tested.

Put the test file beside the code file with `.spec` suffix eg.

```
- catalog.composable.ts
- catalog.composable.spec.ts
```

### Syntax

- private variables are not suffixed nor prefixed with `_` eg. `private item: Item`
- models are not suffixed with `Model` eg. `interface Layer { }`
