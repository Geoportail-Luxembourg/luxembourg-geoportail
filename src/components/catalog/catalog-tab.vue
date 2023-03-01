<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'

import Catalog from './catalog-tree.vue'
import ThemeSelector from '@/components/theme-selector/theme-selector.vue'

const themeGridIsOpen: ShallowRef<boolean> = shallowRef(false)

function toggleThemesGrid(isOpen: boolean) {
  themeGridIsOpen.value = isOpen
}
</script>

<template>
  <theme-selector @toggleThemesGrid="toggleThemesGrid"></theme-selector>
  <div class="pt-5">
    <catalog
      data-cy="catalog"
      class="pt-5"
      v-if="themeGridIsOpen === false"
    ></catalog>
  </div>
</template>
