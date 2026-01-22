import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref } from 'vue'
import { SvFeature } from '@/stores/location-info.store.model'
import { Coordinate } from 'ol/coordinate'

export const useLocationInfoStore = defineStore('info', () => {
  const locationInfoCoords: Ref<Coordinate | undefined> = ref(undefined)
  const locationInfoInfos: Ref<
    | {
        shortUrl: any
        elevation: any
        address: any
        clickCoordinateLuref: Coordinate
        isInBoxOfLidar: boolean
      }
    | undefined
  > = ref(undefined)
  const hidePointer: Ref<boolean> = ref(false)
  const isStreetviewActive: Ref<boolean> = ref(false)
  const noDataAtLocation = ref(true)
  const streetViewLoading: Ref<boolean> = ref(false)
  const panoPositionChanging: Ref<boolean> = ref(false)
  const svFeature: Ref<SvFeature | undefined> = ref(undefined)

  return {
    locationInfoCoords,
    locationInfoInfos,
    hidePointer,
    isStreetviewActive,
    noDataAtLocation,
    streetViewLoading,
    panoPositionChanging,
    svFeature,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocationInfoStore, import.meta.hot))
}
