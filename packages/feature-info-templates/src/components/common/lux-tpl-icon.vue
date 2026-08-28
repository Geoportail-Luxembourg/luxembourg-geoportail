<script setup lang="ts">
import { LUX_TPL_ICON_PATHS, type LuxTplIconName } from './icons'

/**
 * Renders one of the package's inline SVG icons at the current font size and
 * in the current text colour, so it behaves like the `<i class="fa …">` element
 * it replaced.
 *
 * Pass `title` for an icon that carries meaning on its own; leave it off for a
 * decorative one sitting next to a text label, and it is hidden from assistive
 * technology.
 */
defineProps<{
  name: LuxTplIconName
  title?: string
}>()
</script>

<template>
  <svg
    class="lux-tpl-icon"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    focusable="false"
    :role="title ? 'img' : undefined"
    :aria-hidden="title ? undefined : 'true'"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="LUX_TPL_ICON_PATHS[name]" />
  </svg>
</template>

<style scoped>
.lux-tpl-icon {
  display: inline-block;
  vertical-align: -0.125em;
}
</style>
