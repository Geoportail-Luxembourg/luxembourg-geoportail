import { watch } from 'vue'
import type OlMap from 'ol/Map'
import useOpenLayers from './ol.composable'

import { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import useMap from './map.composable'
import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

export class OlSynchronizer {
  previousLayers: Layer[]
  previousVectorSources: VectorSourceDict
  constructor(map: OlMap) {
    const mapStore = useMapStore()
    const styleStore = useStyleStore()
    const mapService = useMap()
    const styleService = useMvtStyles()
    const openLayers = useOpenLayers()

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

        removedLayers.forEach(layer => openLayers.removeLayer(map, layer.id))

        addedLayerComparisons.forEach(cmp =>
          openLayers.addLayer(map, cmp.layer)
        )
        mutatedLayerComparisons.forEach(layer => {
          openLayers.setLayerOpacity(map, layer.id, layer.opacity as number)
        })

        if (newContext.layers) {
          openLayers.reorderLayers(map, newContext.layers)
        }

        this.previousLayers = layers
      }
    )

    watch(
      () => mapStore.bgLayer,
      bgLayer =>
        bgLayer !== undefined &&
        openLayers.setBgLayer(map, bgLayer, styleStore.bgVectorSources)
    )

    watch(
      () => styleStore.bgStyle,
      newStyle =>
        openLayers.applyOnBgLayer(map, bgLayer =>
          styleService.applyStyle(bgLayer, newStyle || [])
        )
    )

    watch(
      () => styleStore.bgVectorSources,
      newVectorSources => {
        for (const id in newVectorSources) {
          if (
            !this.previousVectorSources ||
            this.previousVectorSources[id] !== newVectorSources[id]
          ) {
            openLayers.removeFromCache(id)
            if (id === mapStore?.bgLayer?.id.toString()) {
              // refresh bg layer
              openLayers.setBgLayer(map, mapStore?.bgLayer, newVectorSources)
            }
          }
        }
        this.previousVectorSources = newVectorSources
      }
    )
  }
}
