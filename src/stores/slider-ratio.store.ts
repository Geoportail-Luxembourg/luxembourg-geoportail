import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, Ref } from 'vue'

export const useSliderStore = defineStore(
  'slider',
  () => {
    const sliderRatio: Ref<number> = ref(0.5)
    const sliderOffset: Ref<number> = ref(20)
    const sliderActive: Ref<boolean> = ref(false)

    function setRatio(ratio: number) {
      sliderRatio.value = ratio
    }

    function setOffset(offset: number) {
      sliderOffset.value = offset
    }

    function setActive(isActive: boolean) {
      sliderActive.value = isActive
    }

    function incrementOffset(offset: number) {
      sliderOffset.value += offset
    }

    return {
      sliderRatio,
      sliderOffset,
      setRatio,
      setActive,
      setOffset,
      incrementOffset,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSliderStore, import.meta.hot))
}
