import { themesService } from '../themes/themes.service'
import { mapState } from '../../state/map/map.state'
import { Layer } from '../../state/map/map.state.model'
import { LuxBgLayer } from './background-layer.model'

import { bgConfig } from '../../../test/fixtures/background.config.fixture'

export function bgLayersFromThemes() {
  return bgConfig.bg_layers.map(bgLayer => {
    const themeBgLayer = themesService.findBgLayerById(bgLayer.id)
    if (themeBgLayer) {
      return LuxBgLayer.fromThemeNodeModel(themeBgLayer)
    } else {
      return new LuxBgLayer(bgLayer.name, bgLayer.id)
    }
  })
}

export function createDefaultBgLayer() {
  return new LuxBgLayer('white', 0)
}

export function setBgLayer(bgLayer: LuxBgLayer) {
  const newBgLayer = themesService.findBgLayerById(bgLayer.id)
  setMapBackground(newBgLayer as unknown as Layer)
}

export function setMapBackground(bgLayer: Layer | null) {
  if (bgLayer) {
    if (!(bgLayer.type === 'WMTS' || bgLayer.type === 'BG WMTS')) {
      throw new Error(
        `Only WMTS BG layers are currently implemented (not ${bgLayer.type} for ${bgLayer.name})`
      )
    }
    bgLayer.type = 'BG WMTS'
    mapState.setBgLayer(bgLayer)
  } else {
    mapState.setBgLayer(null)
  }
}
