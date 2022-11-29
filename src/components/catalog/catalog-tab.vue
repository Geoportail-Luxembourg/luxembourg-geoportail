<script setup lang="ts">
import Catalog from './catalog-tree.vue'

defineProps({
  themeGridIsOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex flex-col">
    <theme-selector @toggleThemesGrid="toggleThemesGrid"> </theme-selector>
    <catalog v-if="themeGridIsOpen === false" class="pt-5"></catalog>
  </div>
</template>
