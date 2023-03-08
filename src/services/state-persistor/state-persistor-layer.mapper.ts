import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import useThemes from '@/composables/themes/themes.composable'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'
import { remoteLayerIdtoLayer } from '@/services/remote-layers/remote-layers.mapper'
import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'

const STORAGE_SEPARATOR = '-'

class StorageLayerMapper {
  layerIdsToLayers(layerIdsText: string | null) {
    const themes = useThemes()
    const layers = useLayers()
    const layerIds = layerIdsText
      ? StorageLayerMapper.storageToLayerIds(layerIdsText)
      : []

    return layerIds.map(layerId => {
      const layer = remoteLayersService.isRemoteLayer(layerId)
        ? remoteLayerIdtoLayer(layerId)
        : (themes.findById(parseInt(layerId, 10)) as unknown as Layer)

      return layer ? layers.initLayer(layer) : void 0
    })
  }

  layerOpacitiesToNumbers(opacitiesText: string | null) {
    return (
      opacitiesText
        ?.split(STORAGE_SEPARATOR)
        .map(opacity =>
          opacity !== null && !isNaN(opacity as any)
            ? parseFloat(opacity)
            : undefined
        ) || []
    )
  }

  layersToLayerIds(layers: Layer[] | null): string {
    return layers?.map(layer => layer.id).join(STORAGE_SEPARATOR) || ''
  }

  layersToLayerOpacities(layers: Layer[] | null): string {
    return (
      layers?.map(layer => layer.opacity ?? 1).join(STORAGE_SEPARATOR) || ''
    )
  }

  bgLayerNameToBgLayer(bgLayerName: string | null): Layer | null {
    const themes = useThemes()
    return bgLayerName ? (themes.findBgLayerByName(bgLayerName) as Layer) : null
  }

  bgLayerTobgLayerName(layer: Layer | undefined) {
    return layer?.name || BLANK_BACKGROUNDLAYER.name
  }

  static storageToLayerIds(layers: string): string[] {
    return layers.split(STORAGE_SEPARATOR)
  }
}

export const storageLayerMapper = new StorageLayerMapper()
