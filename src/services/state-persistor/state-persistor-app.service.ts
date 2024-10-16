import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import {
  SP_KEY_APPLOGIN,
  SP_KEY_EMBEDDED,
  SP_KEY_LAYERS_OPEN,
  SP_KEY_LOCALFORAGE,
} from './state-persistor.model'
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
    this.restoreIsAppMode()
  }

  restoreEmbeddedMode() {
    const embbededStorage = storageHelper.getValue(SP_KEY_EMBEDDED)
    const embbededEnabled = <boolean>(
      (embbededStorage !== null && embbededStorage !== 'false')
    )
    const { embedded } = storeToRefs(useAppStore())
    embedded.value = embbededEnabled
  }

  restoreLayersOpen() {
    const layersOpen = <boolean>(
      (storageHelper.getValue(SP_KEY_LAYERS_OPEN) !== 'false')
    )
    const { setLayersOpen } = useAppStore()
    setLayersOpen(layersOpen)
  }

  restoreIsAppMode() {
    const { setIsApp } = useAppStore()
    const isApp =
      storageHelper.getValue(SP_KEY_LOCALFORAGE) === 'android' ||
      storageHelper.getValue(SP_KEY_LOCALFORAGE) === 'ios' ||
      storageHelper.getValue(SP_KEY_APPLOGIN) === 'yes'

    setIsApp(isApp)
  }
}

export const statePersistorAppService = new StatePersistorAppService()
