import { themesService } from '../themes/themes.service'
import { mapState } from '../../states/map/map.state'
import { Layer } from '../../states/map/map.state.model'
import { bgConfig } from '../../../test/fixtures/background.config.fixture'
import { layersService } from '../layers/layers.service'

class BackgroundLayerService {
  setBgLayer(layerId: number) {
    const newBgLayer = themesService.findBgLayerById(layerId)
    this.setMapBackground(newBgLayer as unknown as Layer)
  }

  setMapBackground(bgLayer: Layer | null) {
    if (bgLayer) {
      if (!(bgLayer.type === 'WMTS' || bgLayer.type === 'BG WMTS')) {
        throw new Error(
          `Only WMTS BG layers are currently implemented (not ${bgLayer.type} for ${bgLayer.name})`
        )
      }
      bgLayer.type = 'BG WMTS'
      layersService.handleExclusionLayers(bgLayer)
      mapState.setBgLayer(layersService.initLayer(bgLayer))
    } else {
      mapState.setBgLayer(null)
    }
  }

  getDefaultSelectedId() {
    return bgConfig.bg_layers_defaultId
  }

  getBgLayersFromConfig() {
    return bgConfig.bg_layers
  }
}

export const backgroundLayerService = new BackgroundLayerService()
