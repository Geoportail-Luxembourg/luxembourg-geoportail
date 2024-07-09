import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const DEFAULT_LANG = 'fr'
export const DEFAULT_LAYER_PANEL_OPENED = true
export const DEFAULT_MY_LAYERS_TAB_OPENED = false
export const DEFAULT_THEME_GRID_OPENED = false

export type openedPanel =
  | undefined
  | 'simpleStyle'
  | 'mediumStyle'
  | 'advancedStyle'

export const useAppStore = defineStore(
  'app',
  () => {
    const lang = ref(DEFAULT_LANG)
    const layersOpen = ref(DEFAULT_LAYER_PANEL_OPENED)
    const myLayersTabOpen = ref(DEFAULT_MY_LAYERS_TAB_OPENED)
    const themeGridOpen = ref(DEFAULT_THEME_GRID_OPENED)
    const mapId: Ref<string | undefined> = ref() // => MyMaps map id
    const remoteLayersOpen = ref()
    const styleEditorOpen = ref(false)
    const styleEditorCurrentOpenPanel: Ref<openedPanel> = ref(undefined)
    const drawToolbarOpen = ref(false)
    const isOffLine = ref(false)

    function setLang(language: string) {
      lang.value = language
    }

    function setLayersOpen(open: boolean) {
      layersOpen.value = open
    }

    function setMyLayersTabOpen(open: boolean) {
      myLayersTabOpen.value = open
    }

    function setThemeGridOpen(open: boolean) {
      themeGridOpen.value = open
    }

    function setRemoteLayersOpen(open: boolean) {
      remoteLayersOpen.value = open
    }

    function setMapId(id: string | undefined) {
      mapId.value = id
    }

    function openStyleEditorPanel() {
      styleEditorOpen.value = true
    }

    function closeStyleEditorPanel() {
      styleEditorOpen.value = false
    }

    function setDrawToolbarOpen(open: boolean) {
      drawToolbarOpen.value = open
    }

    return {
      lang,
      layersOpen,
      myLayersTabOpen,
      themeGridOpen,
      mapId,
      styleEditorOpen,
      styleEditorCurrentOpenPanel,
      remoteLayersOpen,
      drawToolbarOpen,
      setLang,
      setLayersOpen,
      setMyLayersTabOpen,
      setThemeGridOpen,
      setRemoteLayersOpen,
      setMapId,
      openStyleEditorPanel,
      closeStyleEditorPanel,
      setDrawToolbarOpen,
      isOffLine,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
