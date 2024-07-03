import { listen } from 'ol/events.js'
import Draw from 'ol/interaction/Draw'
import useMap from '@/composables/map/map.composable'
import useDrawnFeatures from './drawn-features.composable'

export default function useDrawInteraction(options: any) {
  const drawInteraction = new Draw(options)
  drawInteraction.setActive(false)
  const map = useMap().getOlMap()
  map.addInteraction(drawInteraction)

  //if the listens becomes too specific by geometry type, move back to draw.composable or split into multiple composables by geom type
  // listen(drawInteraction, 'drawstart', event => {
  //   // todo: implement measure tooltip (createMeasureTooltip_) per geometry type (see e.g. onDrawLineStart_)
  // })

  listen(drawInteraction, 'drawend', event => {
    onDrawEnd(event)
  })
  const { addFeature } = useDrawnFeatures()
  function onDrawEnd(event) {
    //todo: this.removeMeasureTooltip_();
    addFeature(event.feature)
  }

  return {
    drawInteraction,
  }
}
