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
  <catalog
    data-cy="catalog"
    class="pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
    v-if="themeGridIsOpen === false"
  ></catalog>
</template>
