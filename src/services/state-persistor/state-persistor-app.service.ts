import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { SP_KEY_EMBEDDED, SP_KEY_LAYERS_OPEN } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'

class StatePersistorAppService {
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
    this.persistLayersOpen()
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

  restore() {
    this.restoreLayersOpen()
    this.restoreEmbeddedMode() // NB. don't persist embbeded mode, only do restore
  }

  restoreEmbeddedMode() {
    const embbeded = <boolean>(
      (storageHelper.getValue(SP_KEY_EMBEDDED) !== 'false')
    )
    const { embedded } = storeToRefs(useAppStore())
    embedded.value = embbeded
  }

  restoreLayersOpen() {
    const layersOpen = <boolean>(
      (storageHelper.getValue(SP_KEY_LAYERS_OPEN) !== 'false')
    )
    const { setLayersOpen } = useAppStore()
    setLayersOpen(layersOpen)
  }
}

export const statePersistorAppService = new StatePersistorAppService()
