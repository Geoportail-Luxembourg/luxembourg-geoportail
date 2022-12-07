import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ShallowRef } from 'vue'
import { computed, ref, shallowRef } from 'vue'
import { themesApi } from '../services/themes/themes.api'
import { ConfigModel } from '../services/themes/themes.model'

export const useThemeStore = defineStore(
  'config',
  () => {
    const config: ShallowRef<ConfigModel | undefined> = shallowRef()
    const themeName = ref('main')
    const themes = computed(() => config.value?.themes)
    const theme = computed(() =>
      themes.value?.find(theme => theme.name === themeName.value)
    )
    const bgLayers = computed(() => config.value?.background_layers || [])

    themesApi.fetchThemes().then(response => (config.value = response))

    function setTheme(name: string) {
      themeName.value = name
    }

    return { config, themes, themeName, theme, bgLayers, setTheme }
  },
  {}
)
