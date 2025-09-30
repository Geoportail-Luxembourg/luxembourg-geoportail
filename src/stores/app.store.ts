import { Ref, ref, shallowRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { StyleSection } from '@/composables/mvt-styles/mvt-styles.model'
import { MyMap } from './app.store.model'

export const DEFAULT_LANG = 'fr'
export const DEFAULT_LAYER_PANEL_OPENED = true
export const DEFAULT_LEGENDS_PANEL_OPENED = false
export const DEFAULT_MY_LAYERS_TAB_OPENED = false
export const DEFAULT_THEME_GRID_OPENED = false
export const DEFAULT_MYMAPS_OPENED = false
export const DEFAULT_INFO_OPENED = false
export const DEFAULT_FEEDBACK_OPENED = false
export const DEFAULT_FEEDBACKANF_OPENED = false
export const DEFAULT_FEEDBACKAGE_OPENED = false
export const DEFAULT_FEEDBACKCRUES_OPENED = false
export const DEFAULT_LIDAR_OPENED = false
export const DEFAULT_SHARE_OPENED = false

export const useAppStore = defineStore(
  'app',
  () => {
    const authFormOpened = ref(false)
    const embedded = ref(false)
    const lang = ref(DEFAULT_LANG)
    const layersOpen = ref(DEFAULT_LAYER_PANEL_OPENED)
    const legendsOpen = ref(DEFAULT_LEGENDS_PANEL_OPENED)
    const myLayersTabOpen = ref(DEFAULT_MY_LAYERS_TAB_OPENED)
    const themeGridOpen = ref(DEFAULT_THEME_GRID_OPENED)
    const myMapId: Ref<string | undefined> = ref() // => MyMaps map id
    const myMap = shallowRef<MyMap | undefined>(undefined) // MyMap map object
    const myMapLayersChanged = ref(false)
    const myMapsOpen = ref(DEFAULT_MYMAPS_OPENED)
    const infoOpen = ref(DEFAULT_INFO_OPENED)
    const shareOpen = ref(DEFAULT_SHARE_OPENED)
    const lidarOpen = ref(DEFAULT_LIDAR_OPENED) // Lidar panel open state
    const feedbackOpen = ref(DEFAULT_FEEDBACK_OPENED)
    const feedbackanfOpen = ref(DEFAULT_FEEDBACKANF_OPENED)
    const feedbackageOpen = ref(DEFAULT_FEEDBACKAGE_OPENED)
    const feedbackcruesOpen = ref(DEFAULT_FEEDBACKCRUES_OPENED)
    const remoteLayersOpen = ref()
    const styleEditorOpen = ref(false)
    const styleEditorOpenedSection: Ref<StyleSection | undefined> =
      ref(undefined)
    const drawToolbarOpen = ref(false)
    const measureToolbarOpen = ref(false)
    const elevationProfileToolbarOpen = ref(false)
    const printToolbarOpen = ref(false)
    const shareToolbarOpen = ref(false)
    const isOffLine = ref(false)
    const isApp = ref(false) // Is the app displayed for Android or Ios?

    function setIsApp(value: boolean) {
      isApp.value = value
    }

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
        legendsOpen.value = false
      }
    }

    function setThemeGridOpen(open: boolean) {
      themeGridOpen.value = open

      if (themeGridOpen.value) {
        styleEditorOpen.value = false
        legendsOpen.value = false
      }
    }

    function toggleThemeGrid() {
      if (themeGridOpen.value) {
        layersOpen.value = false
        legendsOpen.value = false
        myMapsOpen.value = false
        themeGridOpen.value = false
        lidarOpen.value = false
      } else {
        themeGridOpen.value = true
        layersOpen.value = true
        legendsOpen.value = false
        myMapsOpen.value = false
        infoOpen.value = false
        lidarOpen.value = false
        styleEditorOpen.value = false
        myLayersTabOpen.value && (myLayersTabOpen.value = false)
      }
    }

    function setRemoteLayersOpen(open: boolean) {
      remoteLayersOpen.value = open
    }

    function openStyleEditorPanel() {
      styleEditorOpen.value = true
      layersOpen.value = false
    }

    function closeStyleEditorPanel() {
      styleEditorOpen.value = false
      layersOpen.value = true
    }

    function toggleAuthFormOpen(open?: boolean) {
      authFormOpened.value = open ?? !authFormOpened.value
    }

    function toggleDrawToolbarOpen(open?: boolean) {
      drawToolbarOpen.value = open ?? !drawToolbarOpen.value
    }

    function toggleMyMapsOpen(open?: boolean) {
      myMapsOpen.value = open ?? !myMapsOpen.value
    }

    function toggleLegendsOpen(open?: boolean) {
      legendsOpen.value = open ?? !legendsOpen.value
    }

    function toggleInfoOpen(open?: boolean) {
      infoOpen.value = open ?? !infoOpen.value
    }
    function toggleShareOpen(open?: boolean) {
      shareOpen.value = open ?? !shareOpen.value
    }
    function toggleLidarOpen(open?: boolean) {
      lidarOpen.value = open ?? !lidarOpen.value
    }
    function togglePrintToolbarOpen(open?: boolean) {
      printToolbarOpen.value = open ?? !printToolbarOpen.value
    }

    function toggleElevationProfileToolbarOpen(open?: boolean) {
      elevationProfileToolbarOpen.value =
        open ?? !elevationProfileToolbarOpen.value
    }

    function toggleFeedbackOpen(open?: boolean) {
      feedbackOpen.value = open ?? !feedbackOpen.value
    }
    
    function toggleShareToolbarOpen(open?: boolean) {
      shareToolbarOpen.value = open ?? !shareToolbarOpen.value

      if (shareToolbarOpen.value) {
        drawToolbarOpen.value = false
        measureToolbarOpen.value = false
        printToolbarOpen.value = false
      }
    }

    return {
      authFormOpened,
      embedded,
      lang,
      layersOpen,
      legendsOpen,
      myLayersTabOpen,
      themeGridOpen,
      myMapId,
      myMap,
      myMapLayersChanged,
      myMapsOpen,
      infoOpen,
      shareOpen,
      lidarOpen,
      feedbackOpen,
      feedbackanfOpen,
      feedbackageOpen,
      feedbackcruesOpen,
      styleEditorOpen,
      styleEditorOpenedSection,
      remoteLayersOpen,
      drawToolbarOpen,
      measureToolbarOpen,
      elevationProfileToolbarOpen,
      isOffLine,
      isApp,
      setIsApp,
      printToolbarOpen,
      shareToolbarOpen,
      setLang,
      setLayersOpen,
      setMyLayersTabOpen,
      setThemeGridOpen,
      setRemoteLayersOpen,
      openStyleEditorPanel,
      closeStyleEditorPanel,
      toggleAuthFormOpen,
      toggleDrawToolbarOpen,
      togglePrintToolbarOpen,
      toggleShareToolbarOpen,
      toggleMyMapsOpen,
      toggleInfoOpen,
      toggleShareOpen,
      toggleLidarOpen,
      toggleThemeGrid,
      toggleLegendsOpen,
      toggleElevationProfileToolbarOpen,
      toggleFeedbackOpen,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
