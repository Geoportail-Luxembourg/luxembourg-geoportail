import { watch, watchEffect } from 'vue'
import type OlMap from 'ol/Map'
import useOpenLayers from './ol.composable'
import { storeToRefs } from 'pinia'

import { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import { StyleSpecification } from '@/composables/mvt-styles/mvt-styles.model'
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
    const { appliedStyle } = storeToRefs(styleStore)

    watch(
      () => mapStore.layers,
      layers => {
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

        addedLayerComparisons.forEach(cmp => {
          openLayers.addLayer(map, cmp.layer)
          openLayers.setLayerTime(map, cmp.layer)
        })
        mutatedLayerComparisons.forEach(layer => {
          openLayers.setLayerOpacity(map, layer.id, layer.opacity as number)
          openLayers.setLayerTime(map, layer)
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

    watchEffect(() => {
      if (!styleStore.isExpertStyleActive) {
        // must ignore typing error (too deep)
        // @ts-ignore
        appliedStyle.value = styleService.applyDefaultStyle(
          mapStore.bgLayer,
          styleStore.bgVectorBaseStyles,
          styleStore.bgStyle
        )
      }
    })

    // must ignore typing error (too deep)
    // @ts-ignore
    watch(appliedStyle, (style: StyleSpecification) => {
      if (styleStore.bgStyle === null && !styleStore.isExpertStyleActive) {
        styleService
          .unregisterStyle(styleStore.styleSerial, styleStore.registerUrls)
          .then((styleStore.styleSerial = null))
      } else {
        styleService
          .registerStyle(style, styleStore.styleSerial, styleStore.registerUrls)
          .then(serial => {
            styleStore.styleSerial = serial
            const id = mapStore?.bgLayer?.id
            if (mapStore?.bgLayer && id !== undefined && serial !== undefined) {
              openLayers.applyOnBgLayer(map, bgLayer => {
                bgLayer.set(
                  'xyz_custom',
                  styleService.getDefaultMapBoxStyleXYZ(serial)
                )
              })
              openLayers.setBgLayer(
                map,
                mapStore?.bgLayer,
                styleStore.bgVectorSources
              )
            }
          })
      }
      openLayers.applyOnBgLayer(map, bgLayer =>
        styleService.applyConsolidatedStyle(bgLayer, style)
      )
    })

    watch(
      () => styleStore.bgVectorSources,
      newVectorSources => {
        for (const id of newVectorSources.keys()) {
          if (
            !this.previousVectorSources ||
            this.previousVectorSources.get(id) !== newVectorSources.get(id)
          ) {
            openLayers.removeFromCache(id)
            if (id === mapStore?.bgLayer?.id) {
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
