import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref, shallowRef, ShallowRef } from 'vue'

import useThemes from '@/composables/themes/themes.composable'
import { ConfigModel } from '@/composables/themes/themes.model'

export const useThemeStore = defineStore(
  'config',
  () => {
    const themesService = useThemes()
    const config: ShallowRef<ConfigModel | undefined> = shallowRef()
    const themeName = ref('main')
    const themes = computed(() => config.value?.themes)
    const theme = computed(() =>
      themes.value?.find(theme => theme.name === themeName.value)
    )
    const bgLayers = computed(() => config.value?.background_layers || [])

    themesService.fetchThemes().then(response => (config.value = response))

    function setTheme(name: string) {
      themeName.value = name
    }

    return { config, themes, themeName, theme, bgLayers, setTheme }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
