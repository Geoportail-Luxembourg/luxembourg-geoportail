import { Layer } from '../../states/map/map.state.model'
import { layersService } from '../layers/layers.service'
import { themesService } from '../themes/themes.service'

const STORAGE_SEPARATOR = '-'

export function storageToLayerIds(layers: string): string[] {
  return layers.split(STORAGE_SEPARATOR)
}

export function layerToStorage(layer: Layer): any {
  return {}
}

export function getLayersFromStorage(): Layer[] {
  return [] as Layer[]
}

export function getBgLayerFromStorage(): Layer {
  return {} as Layer
}

export function layerIdsToLayersMapper(layerIdsText: string | null) {
  const layerIds = layerIdsText ? storageToLayerIds(layerIdsText) : []

  return layerIds.map(layerId =>
    layersService.initLayer(
      themesService.findById(parseInt(layerId, 10)) as unknown as Layer
    )
  )
}
