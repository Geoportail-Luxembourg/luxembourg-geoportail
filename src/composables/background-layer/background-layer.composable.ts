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
import { LayerTypeValue } from '../themes/themes.model'

export default function useBackgroundLayer() {
  const appStore = useAppStore()
  const { mapId } = storeToRefs(appStore)
  const theme = useThemes()
  const mapStore = useMapStore()
  const layers = useLayers()
  const defaultSelectedBgId = computed(() => {
    if (!mapId.value) {
      const themeName = useThemeStore().theme?.name

      if (themeName) {
        const defaultBgLayers = bgConfigFixture()
          .bg_layer_theme_defaults as BgLayerDefaultsType

        return defaultBgLayers[themeName] || getDefaultSelectedId()
      }
    }

    return getDefaultSelectedId()
  })

  function setBgLayer(layerId: number) {
    const newBgLayer = theme.findBgLayerById(layerId) as Layer
    setMapBackground(newBgLayer || null)
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
