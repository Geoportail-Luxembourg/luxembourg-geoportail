import { listen } from 'ol/events'
import Draw, { DrawEvent, Options } from 'ol/interaction/Draw'
import useMap from '@/composables/map/map.composable'
import useDrawnFeatures from './drawn-features.composable'
import drawTooltip from './draw-tooltip'

export default function useDrawInteraction(options: Options) {
  const { addFeature } = useDrawnFeatures()
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
  listen(document, 'keyup', event => {
    onKeyUp(event as KeyboardEvent)
  })

  function onDrawEnd(event: DrawEvent) {
    drawTooltip.remove()
    addFeature(event.feature)
    event.stopPropagation()
  }

  /**
   * Deactivate this interaction if the ESC key is pressed.
   * @param event
   */
  function onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      drawTooltip.remove()
      drawInteraction.finishDrawing()
      drawInteraction.setActive(false)
    }
  }

  return {
    drawInteraction,
  }
}
