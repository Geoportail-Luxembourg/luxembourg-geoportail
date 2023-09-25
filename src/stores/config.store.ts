import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref, shallowRef, ShallowRef } from 'vue'

import { ConfigModel } from '@/composables/themes/themes.model'

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
    const layerTrees_3d = computed(() => {
      const ol3d_groups = themes.value?.filter(
        theme => theme.metadata?.ol3d_type !== undefined
      )
      if (!ol3d_groups) return undefined
      return {
        name: 'root_3d',
        id: -222,
        children: ol3d_groups.map(layer => layer.children[0]),
        metadata: {},
      }
    })

    function setThemes(themes: ConfigModel) {
      config.value = themes
    }

    function setTheme(name: string) {
      themeName.value = name
    }

    return {
      config,
      themes,
      themeName,
      theme,
      bgLayers,
      layerTrees_3d,
      setTheme,
      setThemes,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
