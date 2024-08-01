import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { StyleSection } from '@/composables/mvt-styles/mvt-styles.model'

export const DEFAULT_LANG = 'fr'
export const DEFAULT_LAYER_PANEL_OPENED = true
export const DEFAULT_MY_LAYERS_TAB_OPENED = false
export const DEFAULT_THEME_GRID_OPENED = false
export const DEFAULT_MYMAPS_OPENED = false

export const useAppStore = defineStore(
  'app',
  () => {
    const embedded = ref(false)
    const lang = ref(DEFAULT_LANG)
    const layersOpen = ref(DEFAULT_LAYER_PANEL_OPENED)
    const myLayersTabOpen = ref(DEFAULT_MY_LAYERS_TAB_OPENED)
    const themeGridOpen = ref(DEFAULT_THEME_GRID_OPENED)
    const mapId: Ref<string | undefined> = ref() // => MyMaps map id
    const myMapsOpen = ref(DEFAULT_MYMAPS_OPENED)
    const remoteLayersOpen = ref()
    const styleEditorOpen = ref(false)
    const styleEditorOpenedSection: Ref<StyleSection | undefined> =
      ref(undefined)
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

      if (myLayersTabOpen.value) {
        themeGridOpen.value = false
      }
    }

    function setThemeGridOpen(open: boolean) {
      themeGridOpen.value = open
    }

    function toggleThemeGrid() {
      if (themeGridOpen.value) {
        layersOpen.value = false
        myMapsOpen.value = false
        themeGridOpen.value = false
      } else {
        themeGridOpen.value = true
        layersOpen.value = true
        myMapsOpen.value = false
        myLayersTabOpen.value && (myLayersTabOpen.value = false)
      }
    }

    function setRemoteLayersOpen(open: boolean) {
      remoteLayersOpen.value = open
    }

    function setMapId(id: string | undefined) {
      mapId.value = id
    }

    function openStyleEditorPanel() {
      styleEditorOpen.value = true
      layersOpen.value = false
    }

    function closeStyleEditorPanel() {
      styleEditorOpen.value = false
      layersOpen.value = true
    }

    function setDrawToolbarOpen(open: boolean) {
      drawToolbarOpen.value = open

      if (drawToolbarOpen.value) {
        myMapsOpen.value = true
        layersOpen.value = false
        themeGridOpen.value = false
      }
    }

    function toggleMyMapsOpen(open?: boolean) {
      myMapsOpen.value = open ?? !myMapsOpen.value

      if (myMapsOpen.value) {
        styleEditorOpen.value = false
        layersOpen.value = false
        themeGridOpen.value = false
      }
    }

    return {
      embedded,
      lang,
      layersOpen,
      myLayersTabOpen,
      themeGridOpen,
      mapId,
      myMapsOpen,
      styleEditorOpen,
      styleEditorOpenedSection,
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
      toggleMyMapsOpen,
      toggleThemeGrid,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
