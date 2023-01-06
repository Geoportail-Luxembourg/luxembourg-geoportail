import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import useThemes from '@/composables/themes/themes.composable'

const STORAGE_SEPARATOR = '-'

export default function useLayerMapper() {
  const themes = useThemes()
  const layers = useLayers()
  
  function layerIdsToLayersMapper(layerIdsText: string | null) {
    const layerIds = layerIdsText ? storageToLayerIds(layerIdsText) : []
  
    return layerIds
      .map(layerId => {
        const layer = themes.findById(parseInt(layerId, 10)) as unknown as Layer
        return layer ? layers.initLayer(layer) : void 0
      })
      .filter(layer => layer)
  }

  function layersToStorage(layers: Layer[] | null): any {
    return layers?.map(layer => layer.id).join(STORAGE_SEPARATOR)
  }

  function bgLayerIdToBgLayerMapper(bgLayerIdText: string | null): Layer | null {
    return bgLayerIdText ? themes.findBgLayerByName(bgLayerIdText) as Layer : null
  }
  
  function bgLayerToStorage(layer: Layer): any {
    return layer.name
  }
  
  function storageToLayerIds(layers: string): string[] {
    return layers.split(STORAGE_SEPARATOR)
  }

  return {
    layerIdsToLayersMapper,
    layersToStorage,
    bgLayerIdToBgLayerMapper,
    bgLayerToStorage,
  }
}
