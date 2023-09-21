import i18next from 'i18next'

import {
  Layer,
  LayerId,
  LAYER_CURRENT_TIME_SEPARATOR,
  LayerTimeMode,
} from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import useThemes from '@/composables/themes/themes.composable'

const themes = useThemes()

export default function useLayers() {
  function hasIntersect(exclusionA: string, exclusionB: string) {
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

  /**
   * Initialize the layer's opacity and time
   *
   * @param layer The layer spec, will be modified
   * @returns The layer that have been modified
   */
  function initLayer(layer: Layer) {
    layer.opacity = layer.previousOpacity = layer.metadata?.start_opacity ?? 1
    initLayerCurrentTime(layer)

    return layer
  }

  /**
   * Initialize layer's currentTimeMinValue and currentTimeMaxValue.
   * Code legacy can be found in: ngeo.Time.getOptions()
   *
   * - currentTimeMinValue and currentTimeMaxValue comming from permalink if any (untouched here)
   * - if not, retrieve from time options (from spec/fixtures)
   * @param layer The layer spec, will be modified
   */
  function initLayerCurrentTime(layer: Layer) {
    if (!layer.currentTimeMinValue) {
      layer.currentTimeMinValue =
        layer.time?.minDefValue ?? layer.time?.minValue
    }

    const isRange = layer.time?.mode === LayerTimeMode.RANGE

    if (!layer.currentTimeMaxValue && isRange) {
      layer.currentTimeMaxValue =
        layer.time?.maxDefValue ?? layer.time?.maxValue
    }
  }

  /**
   * Get layer's current label, by default: layer.name
   * But for layer time of type 'WMTS', layer label may change according to selected min max date values
   * @param layer
   * @returns Layer name by default, may be adapted if WMTS layer time
   */
  function getLayerCurrentLabel(layer: Layer) {
    const time = getLayerCurrentTime(layer)
    let label = layer.name

    if (time) {
      label = layer.metadata?.time_layers?.[time] ?? label
    }

    return label
  }

  function getLayerCurrentTime(layer: Layer) {
    return [
      layer.currentTimeMinValue,
      ...(layer.currentTimeMaxValue ? [layer.currentTimeMaxValue] : []),
    ].join(LAYER_CURRENT_TIME_SEPARATOR)
  }

  function handleExclusionLayers(layer: Layer) {
    if (!layer.metadata?.exclusion) {
      return
    }

    const mapStore = useMapStore()
    const excludedLayers = mapStore.layers.filter(_layer =>
      hasIntersect(
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

  function toggleLayer(id: LayerId, show = true) {
    const themeStore = useThemeStore()
    const mapStore = useMapStore()

    const layer = <Layer>themes.findById(id, themeStore.theme)

    if (layer) {
      const linkedLayers = layer.metadata?.linked_layers || []

      if (show === false) {
        mapStore.removeLayers(layer.id as unknown as string, ...linkedLayers)
      } else {
        handleExclusionLayers(layer)

        mapStore.addLayers(
          initLayer(layer),
          ...linkedLayers.map(layerId =>
            initLayer(
              themes.findById(parseInt(layerId, 10)) as unknown as Layer
            )
          )
        )
      }
    }
  }

  return {
    initLayer,
    getLayerCurrentLabel,
    getLayerCurrentTime,
    handleExclusionLayers,
    toggleLayer,
  }
}
