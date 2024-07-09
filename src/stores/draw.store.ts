import { defineStore } from 'pinia'
import { ref } from 'vue'

export type DrawStateActive =
  | undefined
  | 'drawPoint'
  | 'drawLabel'
  | 'drawLine'
  | 'drawCircle'
  | 'drawPolygon'

export const useDrawStore = defineStore('draw', () => {
  const drawStateActive = ref<DrawStateActive>(undefined)

  function toggleActiveState(newState: DrawStateActive) {
    if (drawStateActive.value === newState) {
      drawStateActive.value = undefined
    } else {
      drawStateActive.value = newState
    }
  }

  return {
    drawStateActive,
    toggleActiveState,
  }
})
