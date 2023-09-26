import i18next from 'i18next'

import {
  Layer,
  LayerId,
  LAYER_CURRENT_TIME_SEPARATOR,
} from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import useThemes from '@/composables/themes/themes.composable'

const themes = useThemes()

export default function useLayers() {
  function hasIntersect(exclusionA: string, exclusionB: string) {
    try {
      const concat = JSON.parse(exclusionA).concat(JSON.parse(exclusionB))

      return new Set(concat).size < concat.length
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

    if (!layer.currentTimeMaxValue) {
      layer.currentTimeMaxValue =
        layer.time?.maxDefValue ?? layer.time?.maxValue
    }
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

    if (layer.id !== mapStore.bgLayer?.id) {
      if (
        hasIntersect(
          layer.metadata?.exclusion as string,
          mapStore.bgLayer?.metadata?.exclusion as string
        )
      ) {
        mapStore.setBgLayer(null)
        alert(
          i18next.t(
            'Background has been deactivated because ' +
              'the layer {{layer}} cannot be displayed on top of it.',
            {
              layer: i18next.t(layer.name, { ns: 'client' }),
              ns: 'client',
            }
          )
        )
      }
    }
  }

  function toggleLayer(id: LayerId, show = true, is3d: boolean) {
    const themeStore = useThemeStore()
    const mapStore = useMapStore()

    // the cast from ThemeNodeModel | undefined to Layer might not be correct.
    // in the themes fixture only WMS layers correspond to the Layer definition,
    // whereas WMTS layers have "layer" property
    const store = is3d ? themeStore.layerTrees_3d : themeStore.theme
    const layer = <Layer>themes.findById(id, store)

    if (layer) {
      const linkedLayers = layer.metadata?.linked_layers || []

      if (show === false) {
        mapStore.removeLayers(layer.id as unknown as string, ...linkedLayers)
      } else {
        handleExclusionLayers(layer)

        const addLayers = is3d ? mapStore.add3dLayers : mapStore.addLayers
        addLayers(
          initLayer(layer),
          ...linkedLayers.map(layerId =>
            // TODO: not sure if the layer exclusion is working correctly for linked layers?
            // we might need somthing like the commented code below:
            // {
            //   const newLinkedLayer = themes.findById(parseInt(layerId, 10)) as unknown as Layer
            //   handleExclusionLayers(newLinkedLayer)
            //   return initLayer(newLinkedLayer)
            // }
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
    getLayerCurrentTime,
    handleExclusionLayers,
    toggleLayer,
  }
}
