import { storeToRefs } from 'pinia'
import { listen } from 'ol/events'
import Draw, { DrawEvent, Options } from 'ol/interaction/Draw'

import useMap from '@/composables/map/map.composable'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

import useDrawnFeatures from './drawn-features.composable'
import drawTooltip from './draw-tooltip'

export default function useDrawInteraction() {
  const drawStore = useDrawStore()
  const { generateDrawnFeature } = useDrawnFeatures()
  const { addDrawnFeatureToCollection } = drawStore
  const { activeFeatureId, drawnFeatures } = storeToRefs(drawStore)
  const map = useMap().getOlMap()

  function onDrawEnd(event: DrawEvent, type: 'new' | 'update' = 'new') {
    let currentDrawnFeature

    drawTooltip.remove()
    event.stopPropagation()

    if (type === 'new') {
      currentDrawnFeature = generateDrawnFeature(event.feature)
      addDrawnFeatureToCollection(currentDrawnFeature)
    } else {
      currentDrawnFeature = <DrawnFeature>(
        drawnFeatures.value.find(f => f.id === activeFeatureId.value)
      )
    }

    currentDrawnFeature.resetProfileData()
    drawStore.selectDrawnFeature(currentDrawnFeature)
  }

  /**
   * Deactivate this interaction if the ESC key is pressed.
   * @param event
   */
  function onKeyUp(drawInteraction: Draw, event: KeyboardEvent) {
    if (event.key === 'Escape') {
      drawTooltip.remove()
      drawInteraction.finishDrawing()
    }
  }

  function createDrawInteraction(
    options: Options,
    type: 'new' | 'update' = 'new'
  ) {
    const drawInteraction = new Draw(options)
    drawInteraction.setActive(false)

    listen(drawInteraction, 'drawstart', event =>
      drawTooltip.add(map, <DrawEvent>event)
    )
    listen(drawInteraction, 'drawend', event =>
      onDrawEnd(<DrawEvent>event, type)
    )
    listen(document, 'keyup', event =>
      onKeyUp(drawInteraction, <KeyboardEvent>event)
    )
    
    map.addInteraction(drawInteraction)

    return drawInteraction
  }

  return {
    createDrawInteraction,
  }
}
