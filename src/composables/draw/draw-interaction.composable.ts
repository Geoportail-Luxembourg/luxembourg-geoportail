import { listen } from 'ol/events.js'
import Draw from 'ol/interaction/Draw'
import useMap from '@/composables/map/map.composable'
import useDrawnFeatures from './drawn-features.composable'

export default function useDrawInteraction(options: any) {
  const drawInteraction = new Draw(options)
  drawInteraction.setActive(false)
  const map = useMap().getOlMap()
  map.addInteraction(drawInteraction)

  //if this become too specific by gemetry type, move back to draw.composable
  listen(drawInteraction, 'drawend', event => {
    onDrawEnd(event)
  })
  const { addFeature } = useDrawnFeatures()
  function onDrawEnd(event) {
    addFeature(event.feature)
  }

  return {
    drawInteraction,
  }
}
