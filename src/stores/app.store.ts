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

    return {
      lang,
      layersOpen,
      styleEditorOpen,
      remoteLayersOpen,
      setLang,
      setLayersOpen,
      setRemoteLayersOpen,
      toggleStyleEditorPanel,
      closeStyleEditorPanel,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
