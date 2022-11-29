import type OlMap from 'ol/Map'
import { watch } from 'vue'
import { mapState } from '../../states/map/map.state'
import { MapSateListener } from '../../states/map/map.state.listeners'
import { Layer } from '../../states/map/map.state.model'
import { useMapStore } from '../../stores/map.store'
import { openLayersService } from './ol.service'

export class OlSynchronizer {
  previousLayers: Layer[]
  constructor(map: OlMap) {
    const mapStore = useMapStore()
    watch(
      () => mapStore.layers,
      layers => {
        console.log('watch layers')
        const oldContext = {
          layers: this.previousLayers,
        }
        const newContext = {
          layers,
        }
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

        this.previousLayers = layers
      }
    )

    mapState.bgLayer$.subscribe(bgLayer => {
      openLayersService.setBgLayer(map, bgLayer)
    })
  }
}
