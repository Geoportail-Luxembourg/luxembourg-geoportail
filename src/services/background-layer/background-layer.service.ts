import { bgConfig } from '../../__fixtures__/background.config.fixture'
import { themesService } from '../themes/themes.service'
import type { Layer } from '../../stores/map.store.model'
import { layersService } from '../layers/layers.service'
import { useMapStore } from '../../stores/map.store'

class BackgroundLayerService {
  setBgLayer(layerId: number) {
    const newBgLayer = themesService.findBgLayerById(layerId)
    this.setMapBackground(newBgLayer as unknown as Layer)
  }

  setMapBackground(bgLayer: Layer | null) {
    const mapStore = useMapStore()

    if (bgLayer) {
      if (!(bgLayer.type === 'WMTS' || bgLayer.type === 'BG WMTS')) {
        throw new Error(
          `Only WMTS BG layers are currently implemented (not ${bgLayer.type} for ${bgLayer.name})`
        )
      }
      bgLayer.type = 'BG WMTS'
      layersService.handleExclusionLayers(bgLayer)
      mapStore.setBgLayer(layersService.initLayer(bgLayer))

    } else {
      mapStore.setBgLayer(null)
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
