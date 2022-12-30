import { bgConfig } from '@/__fixtures__/background.config.fixture'
import useThemes from '@/composables/themes/themes.composable'
import useLayers from '@/composables/layers/layers.composable'
import type { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'

export default function useBackgroundLayer() {
  const themes = useThemes()
  const layers = useLayers()

  function setBgLayer(layerId: number) {
    const newBgLayer = themes.findBgLayerById(layerId)
    setMapBackground(newBgLayer as unknown as Layer)
  }

  function setMapBackground(bgLayer: Layer | null) {
    const mapStore = useMapStore()

    if (bgLayer) {
      if (!(bgLayer.type === 'WMTS' || bgLayer.type === 'BG WMTS')) {
        throw new Error(
          `Only WMTS BG layers are currently implemented (not ${bgLayer.type} for ${bgLayer.name})`
        )
      }
      bgLayer.type = 'BG WMTS'
      layers.handleExclusionLayers(bgLayer)
      mapStore.setBgLayer(layers.initLayer(bgLayer))
    } else {
      mapStore.setBgLayer(null)
    }
  }

  function getDefaultSelectedId() {
    return bgConfig.bg_layers_defaultId
  }

  function getBgLayersFromConfig() {
    return bgConfig.bg_layers
  }

  return {
    setBgLayer,
    setMapBackground,
    getDefaultSelectedId,
    getBgLayersFromConfig,
  }
}
