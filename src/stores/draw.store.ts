import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawStore = defineStore('draw', () => {
  const drawPointActive = ref(false)
  const drawLabelActive = ref(false)
  const drawLineActive = ref(false)
  const drawCircleActive = ref(false)
  const drawPolygonActive = ref(false)

  function setDrawPointActive(active: boolean) {
    drawPointActive.value = active
  }

  function setDrawLabelActive(active: boolean) {
    drawLabelActive.value = active
  }

  function setDrawLineActive(active: boolean) {
    drawLineActive.value = active
  }

  function setDrawCircleActive(active: boolean) {
    drawCircleActive.value = active
  }

  function setDrawPolygonActive(active: boolean) {
    drawPolygonActive.value = active
  }

  return {
    drawPointActive,
    drawLabelActive,
    drawLineActive,
    drawCircleActive,
    drawPolygonActive,
    setDrawPointActive,
    setDrawLabelActive,
    setDrawLineActive,
    setDrawCircleActive,
    setDrawPolygonActive,
  }
})
