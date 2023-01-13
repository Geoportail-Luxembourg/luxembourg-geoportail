<script setup lang="ts">
import { ShallowRef, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'

import useThemes from '@/composables/themes/themes.composable'
import { useThemeStore } from '@/stores/config.store'

import ThemeGrid from './theme-grid.vue'
import ThemeSelectorButton from './theme-selector-button.vue'
import { themeSelectorService } from './theme-selector.service'
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
const isOpenRef: ShallowRef<boolean> = shallowRef(false)
const emit = defineEmits(['toggleThemesGrid'])

watch(
  theme,
  theme => {
    if (theme) {
      themeSelectorService.setCurrentThemeColors(theme)
    }
  },
  { immediate: true }
)

function toggleThemesGrid() {
  emit('toggleThemesGrid', (isOpenRef.value = !isOpenRef.value))
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
    :isOpen="isOpenRef"
  ></theme-selector-button>
  <div
    class="absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
    v-if="isOpenRef"
  >
    <theme-grid @set-theme="setTheme" :themes="themes"></theme-grid>
  </div>
</template>
