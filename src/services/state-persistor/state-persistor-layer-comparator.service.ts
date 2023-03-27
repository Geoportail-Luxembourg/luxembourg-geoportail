import { watch, watchEffect, WatchStopHandle } from 'vue'

import { DEFAULT_SLIDER_RATIO, useAppStore } from '@/stores/app.store'
import {
  SP_KEY_LAYERCOMPARATOR,
  SP_KEY_LAYERCOMPARATOR_SLIDERRATIO,
  StatePersistorService,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { stringToBoolean, stringToNumber } from '../utils'

class StatePersistorLayerComparatorService implements StatePersistorService {
  bootstrap() {
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.restore()
      this.persist()
      stop && stop() // test if exists, for HMR support
    })
  }

  persist() {
    const appStore = useAppStore()

    watch(
      () => appStore.layerComparatorOpen,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_LAYERCOMPARATOR, value)
        }
      }
    )

    watch(
      () => appStore.layerComparatorSliderRatio,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_LAYERCOMPARATOR_SLIDERRATIO, value)
        }
      }
    )
  }

  restore() {
    const lc = <boolean | null | undefined>(
      storageHelper.getValue(SP_KEY_LAYERCOMPARATOR, stringToBoolean)
    )
    const sliderRatio = <number | null | undefined>(
      storageHelper.getValue(SP_KEY_LAYERCOMPARATOR, stringToNumber)
    )
    const { toggleLayerComparator, setLayerComparatorSliderRatio } =
      useAppStore()

    if (typeof lc !== 'undefined' && lc !== null) {
      toggleLayerComparator(lc)

      if (typeof sliderRatio !== undefined && sliderRatio !== null) {
        setLayerComparatorSliderRatio(sliderRatio ?? DEFAULT_SLIDER_RATIO)
      }
    }
  }
}

export const statePersistorLayerComparatorService =
  new StatePersistorLayerComparatorService()
