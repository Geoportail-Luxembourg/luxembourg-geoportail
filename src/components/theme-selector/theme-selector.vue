<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'

import useThemes from '@/composables/themes/themes.composable'
import { useThemeStore } from '@/stores/config.store'

import ThemeGrid from './theme-grid.vue'
import ThemeSelectorButton from './theme-selector-button.vue'
import { computed } from 'vue'

const themeStore = useThemeStore()
const themesService = useThemes()
const { theme, themes: themesFromStore } = storeToRefs(themeStore)
const themes = computed(
  () =>
    themesFromStore.value?.filter(
      theme => theme.metadata?.display_in_switcher === true
    ) || []
)
const isOpen: ShallowRef<boolean> = shallowRef(false)
const emit = defineEmits<{
  (e: 'toggleThemesGrid', isOpen: boolean): void
}>()

function toggleThemesGrid() {
  emit('toggleThemesGrid', (isOpen.value = !isOpen.value))
}

function setTheme(themeName: string) {
  themesService.setTheme(themeName)
  toggleThemesGrid()
}
</script>

<template>
  <theme-selector-button
    data-cy="themeSelectorButton"
    @click="toggleThemesGrid"
    :themes="themes"
    :currentTheme="theme"
    :isOpen="isOpen"
  ></theme-selector-button>
  <div
    class="absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
    v-if="isOpen"
  >
    <theme-grid @set-theme="setTheme" :themes="themes"></theme-grid>
  </div>
</template>
