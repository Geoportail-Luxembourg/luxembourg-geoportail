import { onUnmounted, Ref, ref } from 'vue'
import { unlistenByKey, EventsKey } from 'ol/events'
import useMap from '@/composables/map/map.composable'

/**
 * Composable to detect map movements
 * Emits a callback when the map finishes moving (moveend event)
 * Includes a debounce to ignore moveend events triggered shortly after panel state changes
 */
export default function useMapMoveDetection() {
  const map = useMap()
  const olMap = map.getOlMap()
  let moveendListenerId: EventsKey | undefined
  let ignoreNextMoveEnd = false
  let ignoreTimeoutId: NodeJS.Timeout | undefined

  const onMapMove: Ref<(() => void) | undefined> = ref()

  function attachMoveEndListener() {
    if (!moveendListenerId && olMap) {
      moveendListenerId = olMap.on('moveend', () => {
        // Ignore moveend events that occur immediately after panel state changes
        if (ignoreNextMoveEnd) {
          ignoreNextMoveEnd = false
          return
        }
        onMapMove.value?.()
      })
    }
  }

  function detachMoveEndListener() {
    if (moveendListenerId) {
      unlistenByKey(moveendListenerId)
      moveendListenerId = undefined
    }
  }

  function listenToMapMove(callback: () => void) {
    onMapMove.value = callback
    attachMoveEndListener()
  }

  function unlistenToMapMove() {
    onMapMove.value = undefined
    detachMoveEndListener()
  }

  /**
   * Temporarily ignore the next moveend event
   * Useful when panel state is changed to prevent immediately closing the panel
   */
  function ignoreNextMoveEndEvent(durationMs: number = 300) {
    ignoreNextMoveEnd = true

    // Clear any existing timeout
    if (ignoreTimeoutId) {
      clearTimeout(ignoreTimeoutId)
    }

    // Reset the flag after the specified duration
    ignoreTimeoutId = setTimeout(() => {
      ignoreNextMoveEnd = false
      ignoreTimeoutId = undefined
    }, durationMs)
  }

  onUnmounted(() => {
    detachMoveEndListener()
    if (ignoreTimeoutId) {
      clearTimeout(ignoreTimeoutId)
    }
  })

  return {
    listenToMapMove,
    unlistenToMapMove,
    ignoreNextMoveEndEvent,
  }
}
