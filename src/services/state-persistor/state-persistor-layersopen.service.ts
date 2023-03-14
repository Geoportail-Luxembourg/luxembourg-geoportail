import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { SP_KEY_LAYERS_OPEN } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'

class StatePersistorLayersOpenService {
  bootstrapLayersOpen() {
    this.restoreLayersOpen()

    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persistLayersOpen()
      stop && stop() // test if exists, for HMR support
    })
  }

  persistLayersOpen() {
    const appStore = useAppStore()
    const { layersOpen } = storeToRefs(appStore)

    watch(
      layersOpen,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_LAYERS_OPEN, value)
        }
      },
      { immediate: true }
    )
  }

  restoreLayersOpen() {
    const layersOpen = <boolean>(
      (storageHelper.getValue(SP_KEY_LAYERS_OPEN) !== 'false')
    )
    const { setLayersOpen } = useAppStore()
    setLayersOpen(layersOpen)
  }
}

export const statePersistorLayersOpenService =
  new StatePersistorLayersOpenService()
