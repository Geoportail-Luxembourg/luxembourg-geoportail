import { Ref, ref, VNodeRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePrintStore = defineStore(
  'print',
  () => {
    const featureInfoPrintableRef: Ref<VNodeRef | undefined> = ref(undefined)
    const locationInfoPrintableRef: Ref<VNodeRef | undefined> = ref(undefined)

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
