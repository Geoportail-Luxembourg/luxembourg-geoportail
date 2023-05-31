import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    const lang = ref('fr')
    const layersOpen = ref()
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

    return {
      lang,
      layersOpen,
      remoteLayersOpen,
      setLang,
      setLayersOpen,
      setRemoteLayersOpen,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
