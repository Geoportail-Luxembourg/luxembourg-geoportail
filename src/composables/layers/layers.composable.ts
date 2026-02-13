import i18next from 'i18next'

import {
  Layer,
  LayerId,
  LAYER_CURRENT_TIME_SEPARATOR,
  LayerTimeMode,
  LayerTimeWidget,
} from '@/stores/map.store.model'
import { TimeResolution } from '@/services/time.utils'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import useThemes from '@/composables/themes/themes.composable'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { olLayerSearchService } from '@/services/ol-layer/ol-layer-search.service'
import { featureInfoLayerService } from '@/services/info/feature-info-layer.service'
import { useMatomo } from '@/composables/matomo/matomo.composable'

// Whitelist of layer identifiers / names that should be considered "parcel" layers
const PARCEL_LAYER_WHITELIST = [
  'parcels',
  'parcels_labels',
  'parcels_go',
  'parcels_prof',
  'parcels_labels_go',
  'parcels_labels_prof',
  'cadastre',
]

function isParcelLayerIdent(value?: string | number | null): boolean {
  if (value === undefined || value === null) return false
  const v = String(value).toLowerCase()
  return PARCEL_LAYER_WHITELIST.some(s => v.includes(s))
}

export { isParcelLayerIdent }

export default function useLayers() {
  const themes = useThemes()

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
    initLayerTimeConfig(layer)
    initLayerCurrentTime(layer)

    return layer
  }

  /**
   * Parse time_config from metadata and initialize time and time_layers properties
   * @param layer The layer spec, will be modified
   */
  function initLayerTimeConfig(layer: Layer) {
    if (!layer.metadata?.time_config) return

    try {
      const timeConfig = JSON.parse(layer.metadata.time_config)

      // Handle time_links -> time_layers (WMTS case)
      if (timeConfig.time_links && typeof timeConfig.time_links === 'object') {
        layer.metadata.time_layers = timeConfig.time_links

        // Create time config for WMTS layers
        const timeKeys = Object.keys(timeConfig.time_links)
        if (timeKeys.length > 0) {
          // Sort keys to get min/max
          timeKeys.sort()
          layer.time = {
            minValue: timeKeys[0],
            maxValue: timeKeys[timeKeys.length - 1],
            mode: LayerTimeMode.VALUE,
            resolution: TimeResolution.YEAR, // Default for WMTS time links
            widget: LayerTimeWidget.DATEPICKER,
          }
        }
      }

      // Handle time_override with timepositions (WMS-T case)
      if (timeConfig.time_override?.timepositions) {
        const timepositions = timeConfig.time_override.timepositions
        if (Array.isArray(timepositions) && timepositions.length > 0) {
          // Parse ISO8601 interval like "2014-08-31T12:43:47.000Z/2020-12-31T23:59:59.000Z/P1M"
          const interval = timepositions[0]
          const [start, end] = interval.split('/')
          if (start && end) {
            layer.time = {
              minValue: start,
              maxValue: end,
              mode: LayerTimeMode.RANGE,
              resolution: TimeResolution.MONTH, // Assuming monthly based on P1M
              widget: LayerTimeWidget.SLIDER,
            }
          }
        }
      }

      // Handle time_override.override_end_date
      if (timeConfig.time_override?.override_end_date === 'now' && layer.time) {
        // Replace maxValue with current date if it's null or invalid
        if (!layer.time.maxValue || layer.time.maxValue === 'null') {
          layer.time.maxValue = new Date().toISOString()
        }
      }

      // Handle default_time
      if (timeConfig.default_time && layer.time) {
        layer.time.minDefValue = timeConfig.default_time
        layer.time.maxDefValue = timeConfig.default_time
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to parse time_config for layer', layer.id, error)
    }
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
    const notificationsStore = useAlertNotificationsStore()

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

      // If a parcel layer has been removed, also clear parcel highlights
      const removedIsParcel = excludedLayers.some(
        _layer =>
          isParcelLayerIdent(_layer.layers) || isParcelLayerIdent(_layer.name)
      )
      if (removedIsParcel) {
        try {
          olLayerSearchService.clearParcelHighlights()
          featureInfoLayerService.clearParcelHighlights()
        } catch (e) {
          // ignore errors — best effort
        }
      }

      notificationsStore.addNotification(
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
        ),
        AlertNotificationType.WARNING
      )
    }

    if (layer.id !== mapStore.bgLayer?.id) {
      handleExclusionWithBg(layer)
    }
  }

  function handleExclusionWithBg(layer: Layer) {
    const mapStore = useMapStore()
    const notificationsStore = useAlertNotificationsStore()

    if (
      hasIntersect(
        layer.metadata?.exclusion as string,
        mapStore.bgLayer?.metadata?.exclusion as string
      )
    ) {
      mapStore.setBgLayer(null)

      notificationsStore.addNotification(
        i18next.t(
          'Background has been deactivated because ' +
            'the layer {{layer}} cannot be displayed on top of it.',
          {
            layer: i18next.t(layer.name, { ns: 'client' }),
            ns: 'client',
          }
        ),
        AlertNotificationType.WARNING
      )
      // If the layer that caused the bg deactivation is a parcel layer,
      // remove parcel highlights as they cannot be displayed anymore.
      if (isParcelLayerIdent(layer.layers) || isParcelLayerIdent(layer.name)) {
        try {
          olLayerSearchService.clearParcelHighlights()
          featureInfoLayerService.clearParcelHighlights()
        } catch (e) {
          // ignore
        }
      }
    }
  }

  function toggleLayer(
    id: LayerId,
    show = true,
    is3d: boolean,
    fromCurrentTheme: boolean
  ) {
    const themeStore = useThemeStore()
    const mapStore = useMapStore()
    // the cast from ThemeNodeModel | undefined to Layer might not be correct.
    // in the themes fixture only WMS layers correspond to the Layer definition,
    // whereas WMTS layers have "layer" property
    const store = is3d ? themeStore.layerTrees_3d : themeStore.theme
    const layer = <Layer>(
      themes.findById(id, fromCurrentTheme ? store : undefined)
    )

    if (layer) {
      const linkedLayers = layer.metadata?.linked_layers || []

      if (show === false) {
        mapStore.removeLayers(layer.id as unknown as string, ...linkedLayers)
      } else {
        handleExclusionLayers(layer)

        const addLayers = is3d ? mapStore.add3dLayers : mapStore.addLayers
        const layersToAdd = [
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
          ),
        ]

        addLayers(...layersToAdd)

        // Track layer addition in Matomo
        const matomo = useMatomo()
        layersToAdd.forEach(layer => {
          matomo.trackLayerAdd(layer.name)
        })
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
