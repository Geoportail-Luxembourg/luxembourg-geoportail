import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { storageStyleMapper } from './state-persistor-bgstyle.mapper'
import { storageHelper } from './storage/storage.helper'
import { useStyleStore } from '@/stores/style.store'
import { useMapStore } from '@/stores/map.store'
import { SP_KEY_SERIAL } from './state-persistor.model'
import { StyleItem } from '@/composables/mvt-styles/mvt-styles.model'
// import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

class StatePersistorStyleService {
  styleWatcher: WatchStopHandle
  bootstrapStyle() {
    const styleStore = useStyleStore()
    let stop: WatchStopHandle
    let activatePersistance: boolean = false
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (styleStore.bgVectorSources) {
        this.restoreStyle(false)
        if (activatePersistance) this.persistStyle()
        activatePersistance = true
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persistStyle() {
    const styleStore = useStyleStore()
    const { bgStyle } = storeToRefs(styleStore)

    if (!this.styleWatcher) {
      this.styleWatcher = watch(
        bgStyle,
        (value, oldValue) => {
          if (oldValue !== value) {
            const mapStore = useMapStore()
            if (mapStore.bgLayer) {
              storageHelper.setValue(
                mapStore.bgLayer.name,
                value || [],
                storageStyleMapper.styleToLocalStorage
              )
              storageHelper.setValue(
                SP_KEY_SERIAL,
                value || [],
                storageStyleMapper.styleToSerial
              )
            }
          }
        },
        { immediate: true }
      )
    }
  }

  restoreStyle(localStorageOnly: boolean) {
    const styleStore = useStyleStore()
    styleStore.setStyle(null)
    const mapStore = useMapStore()
    const bgLayer = mapStore.bgLayer
    if (bgLayer) {
      let bgStyle: StyleItem[] = []
      if (!localStorageOnly) {
        bgStyle = storageHelper.getValue(
          SP_KEY_SERIAL,
          storageStyleMapper.styleSerialToStyle
        )
      }
      if (bgStyle.length === 0) {
        bgStyle = storageHelper.getValue(
          bgLayer.name,
          storageStyleMapper.styleLocalStorageToStyle
        )
      }
      if (bgStyle && bgStyle.length > 0) {
        styleStore.setStyle(bgStyle)
      }
    }
  }
}

export const statePersistorStyleService = new StatePersistorStyleService()
