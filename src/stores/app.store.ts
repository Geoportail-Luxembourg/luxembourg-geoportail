import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const DEFAULT_LANG = 'fr'
export const DEFAULT_LAYER_PANEL_OPENED = true

export const useAppStore = defineStore(
  'app',
  () => {
    const lang = ref(DEFAULT_LANG)
    const layersOpen = ref(DEFAULT_LAYER_PANEL_OPENED)
    const remoteLayersOpen = ref()
    const styleEditorOpen = ref(false)
    const trackingActive = ref(false)

    function setLang(language: string) {
      lang.value = language
    }

    function setLayersOpen(open: boolean) {
      layersOpen.value = open
    }

    function setRemoteLayersOpen(open: boolean) {
      remoteLayersOpen.value = open
    }

    function toggleStyleEditorPanel() {
      styleEditorOpen.value = !styleEditorOpen.value
    }

    function closeStyleEditorPanel() {
      styleEditorOpen.value = false
    }

    function setTracking(active: boolean) {
      trackingActive.value = active
    }

    return {
      lang,
      layersOpen,
      styleEditorOpen,
      remoteLayersOpen,
      trackingActive,
      setLang,
      setLayersOpen,
      setRemoteLayersOpen,
      toggleStyleEditorPanel,
      closeStyleEditorPanel,
      setTracking
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
