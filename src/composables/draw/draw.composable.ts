import { useDrawStore } from '@/stores/draw.store'
import { watch } from 'vue'
import Draw from 'ol/interaction/Draw'
import { listen } from 'ol/events.js'
import useMap from '../map/map.composable'
import useDrawnFeatures from './drawn-features.composable'

export default function useDraw() {
  const { setDrawPointActive, setDrawLineActive, drawState } = useDrawStore()
  const drawPoint = new Draw({ type: 'Point' })
  drawPoint.setActive(false)

  const drawLine = new Draw({ type: 'LineString' })
  drawLine.setActive(false)

  const map = useMap().getOlMap()
  map.addInteraction(drawPoint)
  map.addInteraction(drawLine)

  const { addFeature } = useDrawnFeatures()

  listen(drawPoint, 'drawend', event => {
    onDrawEnd(event)
  })

  listen(drawLine, 'drawend', event => {
    onDrawEnd(event)
  })

  watch(
    () => drawState.drawPointActive,
    active => {
      drawPoint.setActive(active)
      if (active) {
        console.log('Draw point is active')
      } else {
        console.log('Draw point is not active')
      }
    }
  )

  watch(
    () => drawState.drawLineActive,
    active => {
      drawLine.setActive(active)
      if (active) {
        console.log('Draw line is active')
      } else {
        console.log('Draw line is not active')
      }
    }
  )

  function toggleDrawPoint() {
    setDrawPointActive(!drawState.drawPointActive)
  }

  function toggleDrawLine() {
    setDrawLineActive(!drawState.drawLineActive)
  }

  function onDrawEnd(event) {
    addFeature(event.feature)
  }

  return {
    toggleDrawPoint,
    toggleDrawLine,
  }
}
