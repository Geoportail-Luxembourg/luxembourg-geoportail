import { watch } from 'vue'
import type OlMap from 'ol/Map'
import useOpenLayers from './ol.composable'

import { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import useMap from './map.composable'
import { IMvtStyle } from '@/composables/mvt-styles/mvt-styles.model'
import useMvtStyles from '../mvt-styles/mvt-styles.composable'

export class OlSynchronizer {
  previousLayers: Layer[]
  previousStyles: { [id: string]: IMvtStyle }
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
        openLayers.setBgLayer(map, bgLayer, styleStore.bgStyles)
    )

    watch(
      () => styleStore.bgStyle,
      newStyle =>
        openLayers.applyOnBgLayer(map, bgLayer =>
          styleService.applyStyle(bgLayer, newStyle || [])
        )
    )

    watch(
      () => styleStore.bgStyles,
      newStyles => {
        for (const id in newStyles) {
          if (
            !this.previousStyles ||
            this.previousStyles[id] != newStyles[id]
          ) {
            openLayers.removeFromCache(id)
            if (id == mapStore?.bgLayer?.id) {
              // refresh bg layer
              openLayers.setBgLayer(map, mapStore?.bgLayer, newStyles)
            }
          }
        }
        this.previousStyles = newStyles
      }
    )
  }
}
