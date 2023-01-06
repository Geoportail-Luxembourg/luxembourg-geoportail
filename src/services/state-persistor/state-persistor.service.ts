import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'

import { SP_KEY_BGLAYER, SP_KEY_LAYERS } from './state-persistor.model'
import { storageLayerMapper } from './state-persistor-layer.mapper'
import { storageHelper } from './storage/storage.helper'

class StatePersistorService {
  bootstrapLayers() {
    const themeStore = useThemeStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.themes) {
        this.restoreLayers()
        this.persistLayers()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persistLayers() {
    const mapStore = useMapStore()
    const { layers } = storeToRefs(mapStore)

    watch(
      layers,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(
            SP_KEY_LAYERS,
            value,
            storageLayerMapper.layersToLayerIds
          )
        }
      },
      { immediate: true }
    )
  }

  restoreLayers() {
    const mapStore = useMapStore()
    const layers = storageHelper
      .getValue(SP_KEY_LAYERS, storageLayerMapper.layerIdsToLayers)
      ?.filter(layer => layer) as Layer[]

    mapStore.addLayers(...layers)
  }

  bootstrapBgLayer() {
    const themeStore = useThemeStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.bgLayers.length > 0) {
        this.restoreBgLayer()
        this.persistBgLayer()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persistBgLayer() {
    const mapStore = useMapStore()
    const { bgLayer } = storeToRefs(mapStore)

    watch(
      bgLayer,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(
            SP_KEY_BGLAYER,
            value as Layer,
            storageLayerMapper.bgLayerTobgLayerId
          )
        }
      },
      { immediate: true }
    )
  }

  restoreBgLayer() {
    const { setMapBackground } = useBackgroundLayer()
    const bgLayer = storageHelper.getValue(
      SP_KEY_BGLAYER,
      storageLayerMapper.bgLayerIdToBgLayer
    )

    setMapBackground(bgLayer)
  }
}

export const statePersistorService = new StatePersistorService()
