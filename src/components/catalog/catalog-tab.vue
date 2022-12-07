<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'
import Catalog from './catalog-tree.vue'
import ThemeSelector from '../theme-selector/theme-selector.vue'

const themeGridIsOpen: ShallowRef<boolean> = shallowRef(false)

function toggleThemesGrid(isOpen: boolean) {
  themeGridIsOpen.value = isOpen
}
</script>

<template>
  <theme-selector @toggleThemesGrid="toggleThemesGrid"></theme-selector>
  <catalog class="pt-5" v-if="themeGridIsOpen === false"></catalog>
</template>
