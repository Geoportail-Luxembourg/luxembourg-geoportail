# Guidelines

## Code

### Custom elements

For an element `catalog`,

- the name of the file is `catalog.element.ts` in kebab-case.
- the selector is prefixed by `lux-`
- the class name is `CatalogElement`

```ts
// catalog.element.ts
@customElement('lux-catalog')
export default class CatalogElement extends LitElement {}
```

### Services

For a service `catalog`,

- the name of the file is `catalog.service.ts` in kebab-case.
- the class name is `CatalogService`
  Services are mostly exposed as singletons and should be directly instancied.

```ts
// catalog.service.ts
export default class CatalogService {}
export const catalogService = new CatalogService()
```

### Organisation

Rules

- Custom elements are created under components folder
- They are organized by feature (only one level nesting) eg. `catalog`
- All smart and dumb logic belongs to the same feature folder
- For now, there is only one smart component per folder, and must have the same name.
- A model file eg. `catalog.model.ts` gathers all models for the feature
- Reused components (hopefully dumb ones) are gathered under `common` folder
- Most of the layout of the application goes in the root `app.element.ts`
- Statefull services are shared under the `states` folder as singletons. They are suffixed with `.state` eg `map.state.ts`.
- Shared Stateless services are under the `services` folder. They are suffixed with `.service` eg `map.service.ts`.

```
- components
  - common
    - dropdown
      - dropdown.element.ts
      - dropdown.model.ts
   - layer-tree
      - layer-tree.element.ts
      - layer-tree.model.ts
      - layer-tree.service.ts
  - catalog
    - catalog.element.ts
  - background-selector
  - themes-selector
    - themes-selector.model.ts
    - themes-selector.element.ts
    - theme-grid.model.ts
    - theme-grid.element.ts
    - theme-selector-button.element.ts
  - remote-layer
  app.element.ts
- services
  - map
    - ol.service.ts
    - ol.synchronizer.ts
    - map.service.ts
- state
  - map
    - map.state.model.ts
    - map.state.ts
  - themes
    - themes.state.model.ts
    - themes.state.ts
```

### Tests

All files (elements, services) must be tested.

Put the test file beside the code file with `.spec` suffix eg.

```
- catalog.service.ts
- catalog.service.spec.ts
```

### Syntax

- all `Observables` and `Subjects` must end with `$`
- private variables are not suffixed nor prefixed with `_` eg. `private item: Item`
- models are not suffixed with `Model` eg. `interface Layer { }`
