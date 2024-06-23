import { Options } from 'ol/layer/BaseTile'
import TileWMS from 'ol/source/TileWMS'
import TileGrid from 'ol/tilegrid/TileGrid'

import { OffLineLayerOptions } from '@/composables/offline/offline.model'
import { Layer } from '@/stores/map.store.model'

import { OlLayerTileOfflineHelper } from './ol-layer-offline-tile'

class OlLayerTileWmsOfflineHelper extends OlLayerTileOfflineHelper {
  deserializeTileLayer(options: OffLineLayerOptions) {
    const sourceOptions = JSON.parse(<string>options.source)

    sourceOptions.tileLoadFunction = this.createTileLoadFunction()
    sourceOptions.gutter = parseInt(import.meta.env.VITE_OFFLINE_GUTTER, 10) // A gutter around the tiles to download (to avoid cut symbols)

    if (sourceOptions.tileGrid) {
      const tileGrid = new TileGrid(JSON.parse(sourceOptions.tileGrid))
      sourceOptions.tileGrid = tileGrid
    }

    options.source = new TileWMS(sourceOptions)

    return <Options<TileWMS>>options
  }

  serializeTileLayer(options: Layer): string {
    throw new Error('Method not implemented.')
  }
}

export const olLayerTileWmsOfflineHelper = new OlLayerTileWmsOfflineHelper()
export default olLayerTileWmsOfflineHelper
