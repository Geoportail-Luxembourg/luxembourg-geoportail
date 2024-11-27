import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref } from 'vue'
import { SvFeature } from '@/stores/info.store.model'
import { Coordinate } from 'ol/coordinate'

export const useInfoStore = defineStore('info', () => {
  const locationInfo: Ref<Coordinate | undefined> = ref(undefined)
  const hidePointer: Ref<boolean> = ref(false)
  const isStreetviewActive: Ref<boolean> = ref(false)
  const noDataAtLocation = ref(true)
  const panoPositionChanging: Ref<boolean> = ref(false)
  const svFeature: Ref<SvFeature | undefined> = ref(undefined)

  return {
    locationInfo,
    hidePointer,
    isStreetviewActive,
    noDataAtLocation,
    panoPositionChanging,
    svFeature,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useInfoStore, import.meta.hot))
}
