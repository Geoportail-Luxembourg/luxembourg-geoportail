import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import { LayerTypeValue } from '@/composables/themes/themes.model'

import { OfflineLayerSpec } from './offline.model'

export default function useOfflineLayers() {
  const layers = useLayers()
  const mapStore = useMapStore()
  
  function offlineLayerToLayer(offlineLayerSpec: OfflineLayerSpec): Layer {
    const options = JSON.parse(offlineLayerSpec.layerSerialization)

    return {
      options,
      type: LayerTypeValue.LAYER_OFFLINE
    } as unknown as Layer
  }

  /**
   * Recreate the offline layer
   * @param offlineLayerSpec The layer spec to recreate the layer
   * @see recreateOfflineLayer in v3
   */
  function createOfflineLayer(offlineLayerSpec: OfflineLayerSpec) {
    // v3
    // let layer
    // if (offlineLayer.layerType === 'tile') {
    //   const serialization = offlineLayer.layerSerialization;
    //   const tileLoadFunction = this.createTileLoadFunction_(offlineLayer);
    //   const layer = this.serDes_.deserializeTileLayer(serialization, tileLoadFunction);
    // }
    // return layer
    // end v3

    const layer = layers.initLayer(
      offlineLayerToLayer(offlineLayerSpec)
    )

    console.log('createOfflineLayer layer:', layer)

    mapStore.addLayers(layer)
  }

  return {
    createOfflineLayer,
    offlineLayerToLayer
  }
}
