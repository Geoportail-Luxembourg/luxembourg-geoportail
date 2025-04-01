<script setup lang="ts">
import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'

import useThemes from '@/composables/themes/themes.composable'
import { useThemeStore } from '@/stores/config.store'
import { useAppStore } from '@/stores/app.store'

import ThemeGrid from './theme-grid.vue'
import ThemeSelectorButton from './theme-selector-button.vue'
import { themeSelectorService } from '@/components/theme-selector/theme-selector.service'

const appStore = useAppStore()
const { setThemeGridOpen } = appStore
const { themeGridOpen } = storeToRefs(appStore)
const themeStore = useThemeStore()
const themesService = useThemes()
const { theme, themes: themesFromStore, themeName } = storeToRefs(themeStore)
const themes = computed(
  () =>
    themesFromStore.value?.filter(
      theme => theme.metadata?.display_in_switcher === true
    ) || []
)

watch(
  themeName,
  themeName => {
    if (themeName) {
      themeSelectorService.setCurrentThemeColors(themeName)
    }
  },
  { immediate: true }
)

function toggleThemesGrid() {
  setThemeGridOpen(!themeGridOpen.value)
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
    :themeName="themeName"
    :isOpen="themeGridOpen"
  ></theme-selector-button>
  <div
    class="absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
    v-if="themeGridOpen"
  >
    <theme-grid @set-theme="setTheme" :themes="themes"></theme-grid>
  </div>
</template>
