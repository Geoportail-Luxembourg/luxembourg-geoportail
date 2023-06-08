import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

import { DEFAULT_SLIDER_RATIO } from './slider-comparator.store'

export const DEFAULT_LANG = 'fr'
export const DEFAULT_LAYER_PANEL_OPENED = true
export const DEFAULT_COMPARATOR_OPENED = false

export const useAppStore = defineStore(
  'app',
  () => {
    const lang = ref(DEFAULT_LANG)
    const layersOpen = ref(DEFAULT_LAYER_PANEL_OPENED)
    const layerComparatorOpen = ref(false)
    const layerComparatorSliderRatio = ref<number | undefined>(undefined)
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
