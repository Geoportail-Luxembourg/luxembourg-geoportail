<script setup lang="ts">
import { storeToRefs } from 'pinia'

import ThemeSelector from '@/components/theme-selector/theme-selector.vue'
import { useAppStore } from '@/stores/app.store'

import Catalog from './catalog-tree.vue'

const { themeGridOpen } = storeToRefs(useAppStore())
</script>

<template>
  <theme-selector />
  <catalog
    data-cy="catalog"
    class="pt-5 absolute inset-x-2.5 bg-primary overflow-y-auto overflow-x-hidden"
    v-if="themeGridOpen === false"
  ></catalog>
</template>
