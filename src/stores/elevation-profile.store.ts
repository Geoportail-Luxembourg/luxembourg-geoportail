import { Feature } from 'ol'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Store for elevation profile feature
 * Manages state for drawing a line and displaying its elevation profile
 */
export const useElevationProfileStore = defineStore('elevation-profile', () => {
  const drawElevationProfileActive = ref<boolean>(false)
  const currentProfileFeature = ref<Feature | null>(null)

  return {
    drawElevationProfileActive,
    currentProfileFeature,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useElevationProfileStore, import.meta.hot)
  )
}
