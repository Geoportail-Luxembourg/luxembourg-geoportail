import { defineStore } from 'pinia'
import { reactive } from 'vue'

export type DrawState = {
  drawPointActive: boolean
  drawLabelActive: boolean
  drawLineActive: boolean
  drawCircleActive: boolean
  drawPolygonActive: boolean
}

export const useDrawStore = defineStore('draw', () => {
  const drawState = reactive({
    drawPointActive: false,
    drawLabelActive: false,
    drawLineActive: false,
    drawCircleActive: false,
    drawPolygonActive: false,
  } as DrawState)

  function setDrawPointActive(active: boolean) {
    setActiveState('drawPointActive', active)
  }

  function setDrawLabelActive(active: boolean) {
    setActiveState('drawLabelActive', active)
  }

  function setDrawLineActive(active: boolean) {
    setActiveState('drawLineActive', active)
  }

  function setDrawCircleActive(active: boolean) {
    setActiveState('drawCircleActive', active)
  }

  function setDrawPolygonActive(active: boolean) {
    setActiveState('drawPolygonActive', active)
  }

  function setActiveState(activeStateKey: keyof DrawState, active: boolean) {
    if (!active) {
      drawState[activeStateKey] = false
    } else {
      Object.keys(drawState).forEach(key => {
        const stateKey = key as keyof DrawState
        if (key === activeStateKey) {
          drawState[stateKey] = active
        } else {
          drawState[stateKey] = !active
        }
      })
    }
  }

  return {
    drawState,
    setDrawPointActive,
    setDrawLabelActive,
    setDrawLineActive,
    setDrawCircleActive,
    setDrawPolygonActive,
  }
})
