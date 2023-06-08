import { watch, watchEffect, WatchStopHandle } from 'vue'

import {
  DEFAULT_SLIDER_RATIO,
  useSliderComparatorStore,
} from '@/stores/slider-comparator.store'
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
    const sliderStore = useSliderComparatorStore()

    watch(
      [() => sliderStore.sliderActive, () => sliderStore.sliderRatio],
      ([newSliderActive, newSliderRatio], [oldSliderActive]) => {
        if (newSliderActive !== oldSliderActive) {
          storageHelper.setValue(SP_KEY_LAYERCOMPARATOR, newSliderActive)
        }

        storageHelper.setValue(
          SP_KEY_LAYERCOMPARATOR_SLIDERRATIO,
          newSliderRatio
        )
      }
    )
  }

  restore() {
    const lc = <boolean | null | undefined>(
      storageHelper.getValue(SP_KEY_LAYERCOMPARATOR, stringToBoolean)
    )
    const sliderRatio = <number | null | undefined>(
      storageHelper.getValue(SP_KEY_LAYERCOMPARATOR_SLIDERRATIO, stringToNumber)
    )
    const { toggleSlider, setRatio } = useSliderComparatorStore()

    if (typeof lc !== 'undefined' && lc !== null) {
      toggleSlider(lc)

      if (typeof sliderRatio !== undefined && sliderRatio !== null) {
        setRatio(sliderRatio ?? DEFAULT_SLIDER_RATIO)
      }
    }
  }
}

export const statePersistorSliderComparatorService =
  new StatePersistorLayerComparatorService()
