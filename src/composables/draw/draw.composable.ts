import { DrawState, useDrawStore } from '@/stores/draw.store'
import { watch } from 'vue'
import useDrawInteraction from './draw-interaction.composable'
import Draw from 'ol/interaction/Draw'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

export default function useDraw() {
  const {
    setDrawPointActive,
    setDrawLabelActive,
    setDrawLineActive,
    setDrawPolygonActive,
    setDrawCircleActive,
    drawState,
  } = useDrawStore()
  const drawInteractions = {
    drawPoint: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLabel: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLine: useDrawInteraction({ type: 'LineString' }).drawInteraction,
    drawCircle: useDrawInteraction({ type: 'Circle' }).drawInteraction,
    drawPolygon: useDrawInteraction({ type: 'Polygon' }).drawInteraction,
  } as DrawInteractions

  watch(
    () => drawState,
    state => {
      Object.keys(drawInteractions).forEach(key => {
        const stateKey = `${key}Active` as keyof DrawState
        const isActive = state[stateKey]
        drawInteractions[key as keyof DrawInteractions].setActive(isActive)
      })
      // todo: set messages from DrawController.onChangeActive_ here and implement modal to display them
    },
    { deep: true }
  )

  function toggleDrawPoint() {
    setDrawPointActive(!drawState.drawPointActive)
  }

  function toggleDrawLabel() {
    setDrawLabelActive(!drawState.drawLabelActive)
  }

  function toggleDrawLine() {
    setDrawLineActive(!drawState.drawLineActive)
  }

  function toggleDrawCircle() {
    setDrawCircleActive(!drawState.drawCircleActive)
  }

  function toggleDrawPolygon() {
    setDrawPolygonActive(!drawState.drawPolygonActive)
  }

  return {
    toggleDrawPoint,
    toggleDrawLabel,
    toggleDrawLine,
    toggleDrawCircle,
    toggleDrawPolygon,
  }
}
