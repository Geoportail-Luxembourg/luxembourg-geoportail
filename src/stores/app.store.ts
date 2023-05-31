import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    const lang = ref('fr')
    const layersOpen = ref()
    const styleEditorOpen = ref(false)

    const remoteLayersOpen = ref()
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
