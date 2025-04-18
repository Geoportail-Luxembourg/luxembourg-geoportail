import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePrintStore = defineStore(
  'print',
  () => {
    const featureInfoPrintableRef: Ref<HTMLElement | null> = ref(null)
    const locationInfoPrintableRef: Ref<HTMLElement | null> = ref(null)

    return {
      featureInfoPrintableRef,
      locationInfoPrintableRef,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePrintStore, import.meta.hot))
}
