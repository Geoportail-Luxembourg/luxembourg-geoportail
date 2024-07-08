import { listen } from 'ol/events.js'
import Draw, { DrawEvent, Options } from 'ol/interaction/Draw'
import useMap from '@/composables/map/map.composable'
import olLayerDrawHelper from '@/services/ol-layer/ol-layer-draw.helper'

export default function useDrawInteraction(options: Options) {
  const drawInteraction = new Draw(options)
  drawInteraction.setActive(false)
  const map = useMap().getOlMap()
  map.addInteraction(drawInteraction)

  //if the listens becomes too specific by geometry type, move back to draw.composable or split into multiple composables by geom type
  // listen(drawInteraction, 'drawstart', event => {
  //   // todo: implement measure tooltip (createMeasureTooltip_) per geometry type (see e.g. onDrawLineStart_)
  // })

  listen(drawInteraction, 'drawend', event => {
    onDrawEnd(event as DrawEvent)
  })
  function onDrawEnd(event: DrawEvent) {
    //todo: this.removeMeasureTooltip_();
    olLayerDrawHelper.addFeature(event.feature)
  }

  return {
    drawInteraction,
  }
}
