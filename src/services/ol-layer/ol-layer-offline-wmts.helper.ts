import { Options } from 'ol/layer/BaseTile'
import WmtsSource from 'ol/source/WMTS'
import WmtsTileGrid from 'ol/tilegrid/WMTS'

import { OffLineLayerOptions } from '@/composables/offline/offline.model'
import { Layer } from '@/stores/map.store.model'

import { OlLayerTileOfflineHelper } from './ol-layer-offline-tile'

class OlLayerWmtsOfflineHelper extends OlLayerTileOfflineHelper {
  deserializeTileLayer(options: OffLineLayerOptions) {
    const sourceOptions = JSON.parse(<string>options.source)

    sourceOptions.tileLoadFunction = this.createTileLoadFunction()

    if (sourceOptions.tileGrid) {
      const tileGrid = new WmtsTileGrid(JSON.parse(sourceOptions.tileGrid))
      sourceOptions.tileGrid = tileGrid
    }

    options.source = new WmtsSource(sourceOptions)

    return <Options<WmtsSource>>options
  }

  serializeTileLayer(options: Layer): string {
    throw new Error('Method not implemented.')
  }
}

export const olLayerWmtsOfflineHelper = new OlLayerWmtsOfflineHelper()
export default olLayerWmtsOfflineHelper
