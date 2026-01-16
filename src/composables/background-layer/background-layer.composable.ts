import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

import useLayers from '@/composables/layers/layers.composable'
import { useAppStore } from '@/stores/app.store'
import type { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import {
  BLANK_BACKGROUNDLAYER,
  BgLayerDefaultsType,
} from '@/composables/background-layer/background-layer.model'
import useThemes from '@/composables/themes/themes.composable'
import { LayerTypeValue } from '@/composables/themes/themes.model'

export default function useBackgroundLayer() {
  const appStore = useAppStore()
  const { myMapId } = storeToRefs(appStore)
  const theme = useThemes()
  const mapStore = useMapStore()
  const layers = useLayers()
  const defaultSelectedBgId = computed(() => {
    if (!myMapId.value) {
      const themeName = useThemeStore().theme?.name

      if (themeName) {
        const defaultBgLayers = bgConfigFixture()
          .bg_layer_theme_defaults as BgLayerDefaultsType

        return defaultBgLayers[themeName] || getDefaultSelectedId()
      }
    }

    return getDefaultSelectedId()
  })

  /**
   * Set bgLayer accordint to given bg id or bg name, if bgLayer definition not found, will set null as a background.
   * @param layerId Will try to fing the bg layer by its id and set bg to the map
   * @param layerName Will try to fing the bg layer by its name and set bg to the map
   */
  function setBgLayer(layerId?: number, layerName?: string) {
    const newBgLayer = layerName
      ? <Layer>theme.findBgLayerByName(layerName) ?? null
      : layerId
      ? <Layer>theme.findBgLayerById(layerId) ?? null
      : null
    setMapBackground(newBgLayer)
  }

  function setMapBackground(bgLayer: Layer | null) {
    if (bgLayer) {
      if (
        bgLayer.type === LayerTypeValue.WMTS ||
        bgLayer.type === LayerTypeValue.BG_WMTS
      ) {
        bgLayer.type = 'BG WMTS' // <= ????
      } else {
        throw new Error(
          `Only WMTS and MVT BG layers are currently implemented (not ${bgLayer.type} for ${bgLayer.name})`
        )
      }

      layers.handleExclusionLayers(bgLayer)
      mapStore.setBgLayer(layers.initLayer(bgLayer))
    } else {
      mapStore.setBgLayer(null)
    }
  }

  function getDefaultSelectedId() {
    return (
      getBgLayersFromConfig().find(l => l.is_default)?.id ||
      BLANK_BACKGROUNDLAYER.id
    )
  }

  function getNullId() {
    return BLANK_BACKGROUNDLAYER.id
  }

  function getBgLayersFromConfig() {
    return bgConfigFixture().bg_layers
  }

  return {
    setBgLayer,
    setMapBackground,
    getBgLayersFromConfig,
    getNullId,
    getDefaultSelectedId,
    defaultSelectedBgId,
  }
}
