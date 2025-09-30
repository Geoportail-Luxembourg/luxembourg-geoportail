import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { SP_KEY_MAPID } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import useMyMaps from '@/composables/my-maps/my-maps.composable'

class StatePersistorMyMapService {
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
    const appStore = useAppStore()
    const { myMapId } = storeToRefs(appStore)

    watch(
      myMapId,
      (value, oldValue) => {
        if (oldValue !== value) {
          if (value) {
            storageHelper.setValue(SP_KEY_MAPID, value)
          } else {
            storageHelper.removeItem(SP_KEY_MAPID)
          }
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const myMapUuid = <string | undefined>storageHelper.getValue(SP_KEY_MAPID)

    if (myMapUuid) {
      useMyMaps().openMyMap(myMapUuid)
    }
  }
}

export const statePersistorMyMapService = new StatePersistorMyMapService()
