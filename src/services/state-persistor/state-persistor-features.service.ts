import { Ref, watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import { SP_KEY_FEATURES, StatePersistorService } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageFeaturesMapper } from './state-persistor-features.mapper'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import useDrawSelect from '@/composables/draw/draw-select.composable'

class StatePersistorFeaturesService implements StatePersistorService {
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
    const { drawnFeatures } = storeToRefs(useDrawStore())

    watch(
      drawnFeatures as Ref<DrawnFeature[]>,
      value => {
        storageHelper.setValue(
          SP_KEY_FEATURES,
          value,
          storageFeaturesMapper.featuresToUrl
        )
      },
      { immediate: true }
    )
  }

  restore() {
    const { drawnFeatures } = storeToRefs(useDrawStore())
    // initialise map listeners for feature selection
    useDrawSelect()

    const features = storageHelper.getValue(
      SP_KEY_FEATURES,
      storageFeaturesMapper.urlToFeatures
    )
    const newFeatures = features.filter(f => f != undefined) as DrawnFeature[]
    drawnFeatures.value = [...drawnFeatures.value, ...newFeatures]
  }
}

export const statePersistorFeaturesService = new StatePersistorFeaturesService()
