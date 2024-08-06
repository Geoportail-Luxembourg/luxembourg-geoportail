import { listen } from 'ol/events'
import Draw, { DrawEvent, Options } from 'ol/interaction/Draw'
import useMap from '@/composables/map/map.composable'
import useDrawnFeatures from './drawn-features.composable'
import drawTooltip from './draw-tooltip'

export default function useDrawInteraction(options: Options) {
  const drawInteraction = new Draw(options)
  drawInteraction.setActive(false)
  const map = useMap().getOlMap()
  map.addInteraction(drawInteraction)

  listen(drawInteraction, 'drawstart', event =>
    drawTooltip.add(map, event as DrawEvent)
  )
  listen(drawInteraction, 'drawend', event => {
    onDrawEnd(event as DrawEvent)
  })
  const { addFeature } = useDrawnFeatures()
  function onDrawEnd(event: DrawEvent) {
    drawTooltip.remove()
    addFeature(event.feature)
  }

  return {
    drawInteraction,
  }
}
