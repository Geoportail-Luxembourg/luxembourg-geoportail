import { LayerTypeValue } from '@/composables/themes/themes.model'
import { OffLineLayer } from '@/composables/offline/offline.model'
import { Layer } from '@/stores/map.store.model'

import { OlLayer } from './ol-layer.model'
import olLayerTileWmsOfflineHelper from './ol-layer-offline-tile-wms.helper'
import olLayerWmtsOfflineHelper from './ol-layer-offline-wmts.helper'

class OlLayerOfflineFactoryService {
  createOlLayer(layer: Layer): OlLayer {
    let olLayer: OlLayer | undefined
    const offlineLayerType = this.getOfflineLayerSourceType(<OffLineLayer>layer)

    switch (offlineLayerType) {
      case LayerTypeValue.WMTS:
        olLayer = olLayerWmtsOfflineHelper.createOlLayer(<OffLineLayer>layer)
        break
      case LayerTypeValue.TILE_WMS:
        olLayer = olLayerTileWmsOfflineHelper.createOlLayer(<OffLineLayer>layer)
        break
      default:
        throw new Error(`Unrecognized offline layer type: ${layer.type}`)
    }

    return olLayer
  }

  getOfflineLayerSourceType(layer: OffLineLayer) {
    return layer.options.sourceType
  }
}

export const olLayerOfflineFactoryService = new OlLayerOfflineFactoryService()
export default olLayerOfflineFactoryService
