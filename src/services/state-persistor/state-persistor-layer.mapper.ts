import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import useThemes from '@/composables/themes/themes.composable'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'
import { remoteLayerIdtoLayer } from '@/services/remote-layers/remote-layers.mapper'
import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { stringToBooleans, stringToNumbers } from '../utils'

const STORAGE_SEPARATOR = '-'
const STORAGE_SEPARATOR_V2 = ','

class StorageLayerMapper {
  layerIdsToLayers(layerIdsText: string | null) {
    const themes = useThemes()
    const layers = useLayers()
    const layerIds = layerIdsText ? layerIdsText.split(STORAGE_SEPARATOR) : []

    return layerIds.map(layerId => {
      const layer = remoteLayersService.isRemoteLayer(layerId)
        ? remoteLayerIdtoLayer(layerId)
        : (themes.findById(parseInt(layerId, 10)) as unknown as Layer)

      return layer ? layers.initLayer(layer) : void 0
    })
  }

  layerNamesToLayersV2(layersNamesText: string | null) {
    const themes = useThemes()
    const layers = useLayers()
    const layersNames = layersNamesText
      ? layersNamesText.split(STORAGE_SEPARATOR_V2)
      : []

    return layersNames.map(layerName => {
      const layer = themes.findByName(layerName)
      return layer ? layers.initLayer(layer as unknown as Layer) : void 0
    })
  }

  layersOpacitiesToNumbers(
    opacitiesText: string | null,
    separator = STORAGE_SEPARATOR
  ) {
    return stringToNumbers(opacitiesText, separator)
  }

  /**
   * Transform opacities in param as array of opacity values, for version 2 only.
   * Eg. with param '/?&layers_opacity=1,1,1' => from "1,1,1" to [1,1,1]
   */
  layersOpacitiesToNumbersV2 = (opacitiesText: string | null) => {
    return this.layersOpacitiesToNumbers(opacitiesText, STORAGE_SEPARATOR_V2)
  }

  /**
   * Transform visibilities in param as array of visibility values, for version 2 only.
   * Eg. with param '/?&layers_visibility=true,true,false' => from "true,true,false" to [true,true,false]
   */
  layersVisibilitiesToBooleansV2(visibilitiesText: string | null) {
    return stringToBooleans(visibilitiesText, STORAGE_SEPARATOR_V2)
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
}

export const storageLayerMapper = new StorageLayerMapper()
