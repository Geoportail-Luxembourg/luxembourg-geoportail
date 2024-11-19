import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import {
  SP_KEY_CROSSHAIR,
  StatePersistorService,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import useLocationInfo from '@/composables/map/location-info.composable'
import useMap from '@/composables/map/map.composable'
import { useMapStore } from '@/stores/map.store'

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
    const { locationInfo } = storeToRefs(useMapStore())

    watch(
      locationInfo,
      value => {
        storageHelper.setValue(SP_KEY_CROSSHAIR, value !== undefined)
      },
      { immediate: true }
    )
  }

  restore() {
    const { locationInfo } = storeToRefs(useMapStore())
    const map = useMap().getOlMap()
    // initialise map listeners for location info
    useLocationInfo()

    const location = storageHelper.getValue(SP_KEY_CROSSHAIR)
    // This represents the behaviour in V3, where restoring from permalink
    // always displays the info of the map center
    // This is not a very logical behaviour ??
    if (location !== 'false') {
      locationInfo.value = map.getView().getCenter()
    }
  }
}

export const statePersistorLocationInfo = new StatePersistorLocationInfo()
