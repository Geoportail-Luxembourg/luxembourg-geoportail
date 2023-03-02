import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'

import { SP_KEY_BGLAYER, StatePersistorService } from './state-persistor.model'
import { storageLayerMapper } from './state-persistor-layer.mapper'
import { storageHelper } from './storage/storage.helper'

class StatePersistorBgLayerService implements StatePersistorService {
  bootstrap() {
    const themeStore = useThemeStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.bgLayers.length > 0) {
        this.restore()
        this.persist()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persist() {
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

  restore() {
    const { setMapBackground } = useBackgroundLayer()
    const bgLayer = storageHelper.getValue(
      SP_KEY_BGLAYER,
      storageLayerMapper.bgLayerIdToBgLayer
    )

    setMapBackground(bgLayer)
  }
}

export const statePersistorBgLayerService = new StatePersistorBgLayerService()
