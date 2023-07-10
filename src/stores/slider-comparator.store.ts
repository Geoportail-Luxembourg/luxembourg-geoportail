import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref, ComputedRef, Ref } from 'vue'

import { useMapStore } from '@/stores/map.store'
import { Layer } from './map.store.model'

export const DEFAULT_SLIDER_RATIO = 0.5
export const DEFAULT_SLIDER_OPENED = false

export const useSliderComparatorStore = defineStore(
  'slider',
  () => {
    const mapStore = useMapStore()

    const sliderRatio: Ref<number> = ref(DEFAULT_SLIDER_RATIO)
    const sliderActive: Ref<boolean> = ref(DEFAULT_SLIDER_OPENED)
    const sliderTopLayer: ComputedRef<Layer> = computed(
      () => [...mapStore.layers].reverse()[0]
    )

    function setRatio(ratio: number) {
      let newRatio = ratio

      if (ratio < 0.1) {
        newRatio = 0.1
      } else if (ratio > 0.9) {
        newRatio = 0.9
      }

      sliderRatio.value = newRatio
    }

    function toggleSlider(open?: boolean) {
      sliderActive.value = open ?? !sliderActive.value
    }

    return {
      sliderActive,
      sliderRatio,
      sliderTopLayer,
      setRatio,
      toggleSlider,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useSliderComparatorStore, import.meta.hot)
  )
}
