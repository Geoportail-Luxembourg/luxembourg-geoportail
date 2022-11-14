import OlMap from 'ol/Map'
import { pairwise } from 'rxjs'
import { MapSateListener } from '../../state/map/map.state.listeners'
import { mapState } from '../../state/map/map.state'
import { Openlayers } from './ol.service'

export class OlSynchronizer {
  constructor(map: OlMap) {
    mapState.map$.pipe(pairwise()).subscribe(([oldContext, newContext]) => {
      const removedLayers = MapSateListener.getRemovedLayers(
        newContext,
        oldContext
      )

      const addedLayerComparisons = MapSateListener.getAddedLayers(
        newContext,
        oldContext
      )

      const mutatedLayerComparisons = MapSateListener.getMutatedLayers(
        newContext,
        oldContext
      )

      removedLayers.forEach(layer => Openlayers.removeLayer(map, layer.id as string))

      addedLayerComparisons.forEach(cmp => Openlayers.addLayer(map, cmp.layer))

      mutatedLayerComparisons.forEach(layer => {
        Openlayers.setLayerOpacity(map, layer.id, layer.opacity)
      })

      if (newContext.layers) {
        Openlayers.reorderLayers(map, [...(newContext.layers ?? [])].reverse())
      }
      console.log('state change', newContext)
    })
  }
}
