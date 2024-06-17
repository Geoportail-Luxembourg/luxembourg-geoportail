import { Options } from 'ol/layer/BaseTile'
import WmtsSource from 'ol/source/WMTS'
import WmtsTileGrid from 'ol/tilegrid/WMTS'

import { OffLineSerialization, OffLineSerializationWMTS } from '@/composables/offline/offline.model'

import { OlLayerTileOfflineHelper } from './ol-layer-offline-tile'

class OlLayerWmtsOfflineHelper extends OlLayerTileOfflineHelper {
  deserializeTileLayer(options: OffLineSerializationWMTS) {
    options.tileLoadFunction = this.createTileLoadFunction()
    options.source = new WmtsSource(options)

    if (options.tileGrid) {
      options.tileGrid = new WmtsTileGrid(options)
    }

    return options as Options<WmtsSource>
  }

  serializeTileLayer(options: OffLineSerialization): string {
    throw new Error('Method not implemented.')
  }
}

export const olLayerWmtsOfflineHelper = new OlLayerWmtsOfflineHelper()
export default olLayerWmtsOfflineHelper