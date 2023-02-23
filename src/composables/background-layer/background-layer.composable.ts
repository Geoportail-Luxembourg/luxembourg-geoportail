import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import useLayers from '@/composables/layers/layers.composable'
import type { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'

export default function useBackgroundLayer() {
  const theme = useThemeStore()
  const mapStore = useMapStore()
  const layers = useLayers()

  function setBgLayer(layerId: number) {
    const newBgLayer = theme.bgLayers.find(l => l.id == layerId) as Layer
    setMapBackground(newBgLayer || null)
  }

  function setMapBackground(bgLayer: Layer | null) {
    if (bgLayer) {
      if (bgLayer.type === 'WMTS' || bgLayer.type === 'BG WMTS') {
        bgLayer.type = 'BG WMTS'
      } else if (bgLayer.type === 'BG MVT') {
        console.log(`passed through MVT layer ${bgLayer.name}`)
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
    return getBgLayersFromConfig().find(l => l.is_default)?.id
  }

  function getBgLayersFromConfig() {
    return bgConfigFixture().bg_layers
  }

  return {
    setBgLayer,
    setMapBackground,
    getDefaultSelectedId,
    getBgLayersFromConfig,
  }
}
