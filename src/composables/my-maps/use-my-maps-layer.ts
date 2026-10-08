import { nextTick } from 'vue'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import useOpenLayers from '@/composables/map/ol.composable'
import { fitToView, getFeaturesExtent } from '@/composables/map/map.utils'
import {
  myMapsLayerId,
  myMapsLayerIdToLayer,
} from '@/services/my-maps/my-maps-layer.utils'

/**
 * Read-only MyMaps as a regular map layer.
 * Editable MyMap session lives in my-maps.composable.ts.
 */
export default function useMyMapsLayer() {
  const appStore = useAppStore()
  const mapStore = useMapStore()
  const openLayers = useOpenLayers()

  function openMyMapsLayer(uuid: string, title: string) {
    const layerId = myMapsLayerId(uuid)
    if (mapStore.hasLayer(layerId)) {
      return
    }

    mapStore.addLayers(myMapsLayerIdToLayer(layerId, title))
    appStore.setLayersOpen(true)
    appStore.setMyLayersTabOpen(true)

    // Fit view once features load
    nextTick(() => {
      const source = openLayers.getLayerFromCache(layerId)?.getSource()
      if (!source) return
      if (source.getFeatures().length > 0) {
        fitToView(getFeaturesExtent(source.getFeatures()))
      } else {
        source.once('featuresloadend', () => {
          fitToView(getFeaturesExtent(source.getFeatures()))
        })
      }
    })
  }

  return {
    openMyMapsLayer,
  }
}
