import { computed } from 'vue'

import { bgConfig } from '@/__fixtures__/background.config.fixture'
import useLayers from '@/composables/layers/layers.composable'
import type { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import { IMvtStyle } from '@/composables/mvt-styles/mvt-styles.model'
import { useStyleStore } from '@/stores/style.store'

export default function useBackgroundLayer() {
  const style = useStyleStore()
  const layers = useLayers()
  const defaultSelectedBgId = computed(() => {
    return useThemeStore().theme?.name === 'tourisme'
      ? bgConfig.bg_layers_defaultIdTourisme
      : bgConfig.bg_layers_defaultId
  })

  function setBgLayer(layerId: number) {
    const newBgLayer = style.styledBgLayers.find(l => l.id == layerId)
    setMapBackground(newBgLayer || null)
  }

  function setMapBackground(bgLayer: Layer | null) {
    const mapStore = useMapStore()

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

  function updateMvtData(mvt_spec?: IMvtStyle) {
    console.log(mvt_spec ? `${mvt_spec.label} has spec` : 'has no spec')
    // update layer cache so that new style is taken into account for the layer id
  }

  function getBgLayersFromConfig() {
    return bgConfig.bg_layers
  }

  return {
    setBgLayer,
    setMapBackground,
    getBgLayersFromConfig,
    defaultSelectedBgId,
    updateMvtData,
  }
}
