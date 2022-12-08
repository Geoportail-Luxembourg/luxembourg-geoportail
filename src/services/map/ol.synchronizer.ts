import type OlMap from 'ol/Map'
import { watch } from 'vue'
import { Layer } from '../../stores/map.store.model'
import { useMapStore } from '../../stores/map.store'
import { openLayersService } from './ol.service'
import { mapService } from './map.service'

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
        const removedLayers = mapService.getRemovedLayers(
          newContext,
          oldContext
        )

        const addedLayerComparisons = mapService.getAddedLayers(
          newContext,
          oldContext
        )

        const mutatedLayerComparisons = mapService.getMutatedLayers(
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

    watch(
      () => mapStore.bgLayer,
      bgLayer => openLayersService.setBgLayer(map, bgLayer)
    )
  }
}
