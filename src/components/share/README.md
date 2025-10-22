# Share Components

This directory contains the share functionality split into separate, focused components.

## Components

### `share-panel.vue`

The main container component that displays the share toolbar. It imports and renders the two sub-components:

- `share-url.vue` - URL shortener functionality
- `share-embed.vue` - Iframe embed/integration functionality

### `share-url.vue`

Handles URL shortening and sharing:

- Displays short URL by default (via API)
- Toggle to show long URL
- "Share only Mymaps" option (when MyMaps is active)
- Monitors URL changes and updates short URL accordingly
- Integrates with `urlStorage` service and app store

**Key Features:**

- Automatic URL shortening via `VITE_SHORT_URL` API
- MyMaps-only mode filters URL to `?map_id=<value>`
- Polling mechanism (500ms) to detect URL changes
- Click-to-select input fields

### `share-embed.vue`

Handles iframe embed code generation and preview:

- Generates iframe embed code with current URL
- Preview button opens modal dialog
- Size selector: small (400x300), medium (600x450), large (800x600), custom
- Live iframe preview
- Copy iframe code to clipboard

**Key Features:**

- Modal width adapts to selected iframe size
- Custom size inputs for width/height
- Iframe preview (hidden in custom mode)
- Adds `?embedded=true` parameter to URL
- Responsive modal with `maxWidth: 90vw`

## Architecture

The components follow the project's patterns:

- Vue 3 Composition API with `<script setup>`
- Pinia stores for state management
- i18next for translations
- TailwindCSS for styling
- `data-cy` attributes for E2E testing

## Usage

```vue
<template>
  <share-panel v-if="shareOpen" />
</template>
```

The panel is controlled by the `shareOpen` state in `app.store.ts` and toggled via the footer share button.
