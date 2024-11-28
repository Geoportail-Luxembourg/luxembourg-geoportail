import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

/**
 * State of position for profile.
 * Can be set by the profile graph component or by the 'pointermove' event on the map in composable.
 *
 * NB.  Stored as 'PROJECTION_WGS84' x, y values
 */
export const useProfilePositionStore = defineStore(
  'profile-position',
  () => {
    const x: Ref<number | undefined> = ref(undefined)
    const y: Ref<number | undefined> = ref(undefined)

    function setPosition(xPos?: number, yPos?: number) {
      x.value = xPos
      y.value = yPos
    }

    return {
      x,
      y,
      setPosition,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useProfilePositionStore, import.meta.hot)
  )
}
