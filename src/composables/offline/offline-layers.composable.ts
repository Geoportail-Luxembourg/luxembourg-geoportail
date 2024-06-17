import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'

import { OfflineLayerSpec } from './offline.model'

export default function useOfflineLayers() {
  const layers = useLayers()
  const mapStore = useMapStore()
  
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
    const layer = layers.initLayer(
      offlineLayerToLayer(offlineLayerSpec)
    )

    mapStore.addLayers(layer)
  }

  return {
    createOfflineLayer,
    offlineLayerToLayer
  }
}
