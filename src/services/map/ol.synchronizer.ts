import OlMap from 'ol/Map'
import { pairwise } from 'rxjs'
import { MapSateListener } from '../../states/map/map.state.listeners'
import { mapState } from '../../states/map/map.state'
import { openLayersService } from './ol.service'

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

      removedLayers.forEach(layer =>
        openLayersService.removeLayer(map, layer.id)
      )

      addedLayerComparisons.forEach(cmp =>
        openLayersService.addLayer(map, cmp.layer)
      )

      mutatedLayerComparisons.forEach(layer => {
        openLayersService.setLayerOpacity(
          map,
          layer.id,
          layer.opacity as number
        )
      })

      if (newContext.layers) {
        openLayersService.reorderLayers(map, newContext.layers)
      }

      console.log('state change', newContext)
    })

    mapState.bgLayer$.subscribe(bgLayer => {
      openLayersService.setBgLayer(map, bgLayer)
    })
  }
}
