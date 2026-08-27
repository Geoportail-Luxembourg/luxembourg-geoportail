<script setup lang="ts">
/**
 * Styling boundary for the feature-info templates.
 *
 * The package's shipped stylesheet scopes every Tailwind utility under
 * `.lux-tpl-root` (see `tailwind.config.cjs`), so templates must render inside
 * an element carrying that class. Hosts either wrap their template output in
 * this component, or put the class on a wrapper of their own — the class is the
 * contract, this component is just the convenient way to satisfy it.
 *
 * Host theming happens here too: override `--color-primary` & friends on this
 * element (or anywhere above it) to restyle the templates.
 */
</script>

<template>
  <div class="lux-tpl-root">
    <slot />
  </div>
</template>
