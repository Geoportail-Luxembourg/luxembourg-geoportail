import { watchEffect, WatchStopHandle } from 'vue'

import { useAppStore } from '@/stores/app.store'
import { SP_KEY_MAPID } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'

// TODO: handle "My Map" functionality in v4
// for now, only mapId x Permalink is implemented (for bg selection, use case when there is a mapId in the permalink)
// see legacy LayerPermalinkManager l. 609

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
    // TODO: activate persist if needed when implementing "My Map"
    // const appStore = useAppStore()
    // const { mapId } = storeToRefs(appStore)
    // watch(
    //   mapId,
    //   (value, oldValue) => {
    //     if (oldValue !== value) {
    //       storageHelper.setValue(SP_KEY_MAPID, value)
    //     }
    //   },
    //   { immediate: true }
    // )
  }

  restore() {
    const mapId = <string | undefined>storageHelper.getValue(SP_KEY_MAPID)
    useAppStore().setMapId(mapId)
  }
}

export const statePersistorMyMapService = new StatePersistorMyMapService()
