<script setup lang="ts">
import { ShallowRef, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { themesService } from '../../services/themes/themes.service'
import { themeSelectorService } from './theme-selector.service'
import { useThemeStore } from '../../stores/config.store'
import ThemeGrid from './theme-grid.vue'
import ThemeSelectorButton from './theme-selector-button.vue'

const themeStore = useThemeStore()
const { theme, themes } = storeToRefs(themeStore)
const themesRef: ShallowRef<ThemeNodeModel[]> = shallowRef([])
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

watch(
  themes,
  themes => {
    if (themes) {
      themesRef.value = themes.filter(
        theme => theme.metadata?.display_in_switcher === true
      )
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
    @click="toggleThemesGrid"
    :themes="themesRef"
    :currentTheme="theme"
    :isOpen="isOpenRef"
  ></theme-selector-button>
  <div
    class="absolute inset-x-0 top-14 bottom-0 mt-1 bg-primary overflow-y-auto overflow-x-hidden"
    v-if="isOpenRef"
  >
    <theme-grid @set-theme="setTheme" :themes="themesRef"></theme-grid>
  </div>
</template>
