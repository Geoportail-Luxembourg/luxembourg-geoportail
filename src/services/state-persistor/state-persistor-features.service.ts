import { Ref, watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import { SP_KEY_FEATURES, StatePersistorService } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageFeaturesMapper } from './state-persistor-features.mapper'
import { useDrawStore } from '@/stores/draw.store'
import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'

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
      drawnFeatures as Ref<Collection<Feature<Geometry>>>,
      value => {
        console.log('persist', value)
        storageHelper.setValue(
          SP_KEY_FEATURES,
          value,
          storageFeaturesMapper.featuresToUrl
        )
      },
      { immediate: true, deep: true }
    )
  }

  restore() {
    const { setDrawnFeatures } = useDrawStore()

    const features = storageHelper.getValue(
      SP_KEY_FEATURES,
      storageFeaturesMapper.urlToFeatures
    )
    console.log('restore', features)
    setDrawnFeatures(features)
  }
}

export const statePersistorFeaturesService = new StatePersistorFeaturesService()
