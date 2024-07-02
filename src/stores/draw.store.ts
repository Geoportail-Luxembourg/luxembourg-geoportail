import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useDrawStore = defineStore('draw', () => {
  const drawState = reactive({
    drawPointActive: false,
    drawLabelActive: false,
    drawLineActive: false,
    drawCircleActive: false,
    drawPolygonActive: false,
  })

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

  function setActiveState(activeStateKey: string, active: boolean) {
    if (!active) {
      drawState[activeStateKey] = false
    } else {
      Object.keys(drawState).forEach(key => {
        if (key === activeStateKey) {
          drawState[key] = active
        } else {
          drawState[key] = !active
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
