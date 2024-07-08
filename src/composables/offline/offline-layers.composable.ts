import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import { LayerTypeValue } from '@/composables/themes/themes.model'

import { OfflineLayerSpec, OfflineLayerTypeValue } from './offline.model'
import useThemes from '../themes/themes.composable'

export default function useOfflineLayers() {
  const { initLayer } = useLayers()
  const { addLayers, setBgLayer } = useMapStore()
  const { findBgLayerByName } = useThemes()

  function offlineLayerToLayer(offlineLayerSpec: OfflineLayerSpec): Layer {
    if (
      offlineLayerSpec.layerType ===
      OfflineLayerTypeValue.LAYER_OFFLINE_BG_VECTOR
    ) {
      return findBgLayerByName(offlineLayerSpec.key) as Layer
    } else {
      const options = JSON.parse(offlineLayerSpec.layerSerialization)
      const { id, label: name, opacity } = options
      let type = <string>offlineLayerSpec.layerType

      if (type === LayerTypeValue.BG_WMTS) {
        type = OfflineLayerTypeValue.LAYER_OFFLINE_BG_WMTS
      }

      return {
        id,
        name,
        options,
        type,
        metadata: { start_opacity: opacity },
      } as unknown as Layer
    }
  }

  /**
   * Recreate the offline layer and add to the store (will be auto added by the ol synchronizer)
   * @param offlineLayerSpec The layer spec to recreate the layer
   * @see recreateOfflineLayer in v3
   */
  function createOfflineLayer(offlineLayerSpec: OfflineLayerSpec) {
    const validOfflineLayer = [
      OfflineLayerTypeValue.LAYER_OFFLINE_TILE,
      OfflineLayerTypeValue.LAYER_OFFLINE_BG_VECTOR,
    ]

    if (validOfflineLayer.indexOf(offlineLayerSpec.layerType) > -1) {
      try {
        const layer = initLayer(offlineLayerToLayer(offlineLayerSpec))

        if (offlineLayerSpec.backgroundLayer) {
          setBgLayer(layer)
        } else {
          addLayers(layer)
        }
      } catch (e) {
        throw new Error('Invalid offline layer specification.')
      }
    }
  }

  return {
    createOfflineLayer,
    offlineLayerToLayer,
  }
}
