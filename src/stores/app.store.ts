import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const DEFAULT_SLIDER_RATIO = 0.5

export const useAppStore = defineStore(
  'app',
  () => {
    const lang = ref('fr')
    const layersOpen = ref()
    const styleEditorOpen = ref(false)
    const remoteLayersOpen = ref()
    const layerComparatorOpen = ref(false)
    const layerComparatorSliderRatio = ref<number | undefined>(undefined)

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

    function toggleLayerComparator(open?: boolean) {
      layerComparatorOpen.value = open ?? !layerComparatorOpen.value

      if (typeof layerComparatorSliderRatio.value === 'undefined') {
        layerComparatorSliderRatio.value = DEFAULT_SLIDER_RATIO
      }
    }

    function setLayerComparatorSliderRatio(value: number) {
      layerComparatorSliderRatio.value = value
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
      layerComparatorOpen,
      layerComparatorSliderRatio,
      toggleLayerComparator,
      setLayerComparatorSliderRatio,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
