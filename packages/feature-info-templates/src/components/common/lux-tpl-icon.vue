<script setup lang="ts">
import { LUX_TPL_ICON_PATHS, type LuxTplIconName } from './icons'

/** Inline SVG icon at the current font size and colour. Pass `title` when the
 * icon carries meaning on its own; without it, it is aria-hidden. */
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
/* Size as CSS, not only as width/height attributes: attributes lose to any
   host rule on `svg`, and an unsized <svg> with a viewBox falls back to
   300x150. */
.lux-tpl-icon {
  display: inline-block;
  vertical-align: -0.125em;
  width: 1em;
  height: 1em;
  flex: none;
}
</style>
