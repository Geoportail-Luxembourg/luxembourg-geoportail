import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'

import { OfflineLayerSpec, OfflineLayerTypeValue } from './offline.model'

export default function useOfflineLayers() {
  const { initLayer } = useLayers()
  const { addLayers } = useMapStore()

  function offlineLayerToLayer(offlineLayerSpec: OfflineLayerSpec): Layer {
    const options = JSON.parse(offlineLayerSpec.layerSerialization)
    const { id, label: name } = options

    return {
      id,
      name,
      options,
      type: offlineLayerSpec.layerType,
    } as unknown as Layer
  }

  /**
   * Recreate the offline layer
   * @param offlineLayerSpec The layer spec to recreate the layer
   * @see recreateOfflineLayer in v3
   */
  function createOfflineLayer(offlineLayerSpec: OfflineLayerSpec) {
    if (
      offlineLayerSpec.layerType === OfflineLayerTypeValue.LAYER_OFFLINE_TILE
    ) {
      // v3 cond. don't know why?
      const layer = initLayer(offlineLayerToLayer(offlineLayerSpec))

      addLayers(layer)
    }
  }

  return {
    createOfflineLayer,
    offlineLayerToLayer,
  }
}
