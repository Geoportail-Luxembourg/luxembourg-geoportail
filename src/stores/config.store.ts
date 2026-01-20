import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref, shallowRef, ShallowRef } from 'vue'

import { ConfigModel } from '@/composables/themes/themes.model'
import { themesApiFixture } from '@/__fixtures__/themes.api.fixture'

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
      themeName.value = decodeURIComponent(name)
    }

    async function loadThemes() {
      // Build themes URL from VITE_V3_API_HOST or default to /themes
      const base = (import.meta.env.VITE_V3_API_HOST as string) || ''
      const baseNoSlash = base.replace(/\/$/, '')
      const cacheVersion = Date.now()
      const themesUrl = baseNoSlash
        ? `${baseNoSlash}/themes?interface=main&background=background&cache_version=${cacheVersion}`
        : `/themes?interface=main&background=background&cache_version=${cacheVersion}`

      try {
        const resp = await fetch(themesUrl, {
          credentials:
            (import.meta.env.VITE_CREDENTIALS_ORIGIN as RequestCredentials) ||
            'same-origin',
        })

        if (!resp.ok) throw new Error(`Failed to fetch themes: ${resp.status}`)

        const data = await resp.json()
        if (!Array.isArray(data?.themes) || data.themes.length === 0) {
          setThemes(themesApiFixture())
          return
        }

        setThemes(data)
      } catch (error) {
        // Fallback to fixture to keep behaviour stable in dev/test
        setThemes(themesApiFixture())
      }
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
      loadThemes,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
