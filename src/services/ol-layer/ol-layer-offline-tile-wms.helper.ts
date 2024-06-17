import { Options } from 'ol/layer/BaseTile'
import TileWMSSource from 'ol/source/TileWMS'

import { OffLineSerializationTile } from '@/composables/offline/offline.model'

import { OlLayerTileOfflineHelper } from './ol-layer-offline-tile'
import TileGrid from 'ol/tilegrid/TileGrid'

class OlLayerTileWmsOfflineHelper extends OlLayerTileOfflineHelper {
  deserializeTileLayer(options: OffLineSerializationTile) {
    options.tileLoadFunction = this.createTileLoadFunction()
    options.gutter = import.meta.env.VITE_GUTTER // A gutter around the tiles to download (to avoid cut symbols)
    options.source = new TileWMSSource(options)

    if (options.tileGrid) {
      options.tileGrid = new TileGrid(options)
    }

    return options as Options<TileWMSSource>
  }

  serializeTileLayer(options: OffLineSerializationTile): string {
    throw new Error('Method not implemented.')
  }
}

export const olLayerTileWmsOfflineHelper = new OlLayerTileWmsOfflineHelper()
export default olLayerTileWmsOfflineHelper