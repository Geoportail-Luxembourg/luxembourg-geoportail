import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref, shallowRef, ShallowRef } from 'vue'

import { ConfigModel } from '@/composables/themes/themes.model'
import { themeSelectorService } from '@/components/theme-selector/theme-selector.service'

const DEFAULT_CURRENT_THEME = 'main'
const ROOT_NAME_3D = 'root_3d'
const DUMMY_ID_ROOT_3D = -222

export const useThemeStore = defineStore(
  'config',
  () => {
    const config: ShallowRef<ConfigModel | undefined> = shallowRef()
    const themeName = ref(DEFAULT_CURRENT_THEME)
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
        name: ROOT_NAME_3D,
        id: DUMMY_ID_ROOT_3D,
        children: ol3d_groups.flatMap(layer =>
          layer?.children ? layer.children : layer
        ),
        metadata: {},
      }
    })

    function setThemes(themes: ConfigModel) {
      config.value = themes
    }

    function setTheme(name: string) {
      themeName.value = name
      themeSelectorService.setCurrentThemeColors(name)
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
