import { useDrawStore } from '@/stores/draw.store'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import Draw from 'ol/interaction/Draw'
import { listen } from 'ol/events.js'
import useMap from '../map/map.composable'
import useDrawnFeatures from './drawn-features.composable'

export default function useDraw() {
  const { setDrawPointActive } = useDrawStore()
  const { drawPointActive } = storeToRefs(useDrawStore())
  const drawPoint = new Draw({ type: 'Point' })
  drawPoint.setActive(false)

  const map = useMap().getOlMap()
  map.addInteraction(drawPoint)

  const { addFeature } = useDrawnFeatures()

  listen(drawPoint, 'drawend', event => {
    onDrawEnd(event)
  })

  watch(drawPointActive, active => {
    drawPoint.setActive(active)
    if (active) {
      console.log('Draw point is active')
    } else {
      console.log('Draw point is not active')
    }
  })

  function toggleDrawPoint() {
    setDrawPointActive(!drawPointActive.value)
  }

  function onDrawEnd(event) {
    addFeature(event.feature)
  }

  return {
    toggleDrawPoint,
  }
}
