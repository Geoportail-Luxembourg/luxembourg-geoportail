import type { Layer } from '../../stores/map.store.model'
import { useMapStore } from '../../stores/map.store'
import { useThemeStore } from '../../stores/config.store'
import { themesService } from '../themes/themes.service'
import i18next from 'i18next'

export class LayersService {
  private hasIntersect(exclusionA: string, exclusionB: string) {
    try {
      const concat: number[] = JSON.parse(exclusionA)
        .concat(JSON.parse(exclusionB))
        .sort((a: number, b: number) => a - b)

      return concat.some(
        (element, index, array) => index && element === array[index - 1]
      )
    } catch (e) {
      return false
    }
  }

  initLayer(layer: Layer) {
    layer.opacity = layer.previousOpacity = layer.metadata?.start_opacity ?? 1
    return layer
  }

  handleExclusionLayers(layer: Layer) {
    if (!layer.metadata?.exclusion) {
      return
    }

    const mapStore = useMapStore()
    const excludedLayers = mapStore.layers.filter(_layer =>
      this.hasIntersect(
        layer?.metadata?.exclusion as string,
        _layer?.metadata?.exclusion as string
      )
    )

    if (excludedLayers.length > 0) {
      mapStore.removeLayers(...excludedLayers.map(_layer => _layer.id))

      alert(
        i18next.t(
          'The layer <b>{{layersToRemove}}</b> has been removed because it cannot be displayed while the layer <b>{{layer}}</b> is displayed',
          {
            count: excludedLayers.length,
            layersToRemove: excludedLayers
              .map(_layer => i18next.t(_layer.name, { ns: 'client' }))
              .join(', '),
            layer: i18next.t(layer.name, { ns: 'client' }),
            ns: 'client',
          }
        )
      )
    }
  }

  toggleLayer(id: number, show = true) {
    const themeStore = useThemeStore()
    const mapStore = useMapStore()

    const layer = <Layer>themesService.findById(id, themeStore.theme)

    if (layer) {
      const linkedLayers = layer.metadata?.linked_layers || []

      if (show === false) {
        mapStore.removeLayers(layer.id as unknown as string, ...linkedLayers)
      } else {
        this.handleExclusionLayers(layer)

        mapStore.addLayers(
          this.initLayer(layer),
          ...linkedLayers.map(layerId =>
            this.initLayer(
              themesService.findById(parseInt(layerId, 10)) as unknown as Layer
            )
          )
        )
      }
    }
  }
}

export const layersService = new LayersService()
