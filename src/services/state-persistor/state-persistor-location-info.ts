import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import {
  SP_KEY_CROSSHAIR,
  SP_KEY_X,
  SP_KEY_Y,
  StatePersistorService,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import useMap from '@/composables/map/map.composable'
import { useInfoStore } from '@/stores/info.store'

class StatePersistorLocationInfo implements StatePersistorService {
  bootstrap() {
    this.restore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persist()
      stop && stop() // test if exists, for HMR support
    })
  }

  persist() {
    const { locationInfo } = storeToRefs(useInfoStore())

    watch(
      locationInfo,
      value => {
        if (value === undefined) {
          storageHelper.removeItem(SP_KEY_CROSSHAIR)
        } else {
          storageHelper.setValue(SP_KEY_CROSSHAIR, true)
          storageHelper.setValue(SP_KEY_X, value[0])
          storageHelper.setValue(SP_KEY_Y, value[1])
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const { locationInfo } = storeToRefs(useInfoStore())
    const map = useMap().getOlMap()

    const location = storageHelper.getValue(SP_KEY_CROSSHAIR)
    // This represents the behaviour in V3, where restoring from permalink
    // always displays the info of the map center
    // This is not a very logical behaviour ??
    if (location && location !== 'false') {
      locationInfo.value = map.getView().getCenter()
    }
  }
}

export const statePersistorLocationInfo = new StatePersistorLocationInfo()
