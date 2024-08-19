import { Ref, watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import { SP_KEY_FEATURES, StatePersistorService } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageFeaturesMapper } from './state-persistor-features.mapper'
import { useDrawStore } from '@/stores/draw.store'
import { DrawFeature } from '@/stores/draw.store.model'
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
        storageHelper.setValue(
          SP_KEY_FEATURES,
          value,
          storageFeaturesMapper.featuresToUrl
        )
      },
      { immediate: true, deep: true } // deep: true is necessary for Collection in Ref
    )
  }

  restore() {
    const { setDrawnFeatures } = useDrawStore()
    const { drawFeatures } = storeToRefs(useDrawStore())

    const features = storageHelper.getValue(
      SP_KEY_FEATURES,
      storageFeaturesMapper.urlToFeatures
    )
    setDrawnFeatures(features)
    features.forEach(f => {
      const geomType = f.getGeometry()?.getType()
      const newFeature = {
        id: Math.floor(Math.random() * Date.now()),
        label: f.get('name'),
        featureType: f.get('isCircle')
          ? 'drawnCircle'
          : f.get('isLabel')
          ? 'drawnLabel'
          : `drawn${geomType?.replace('String', '')}`,
        olFeature: f,
      } as unknown as DrawFeature

      drawFeatures.value = [...drawFeatures.value, newFeature]
    })
  }
}

export const statePersistorFeaturesService = new StatePersistorFeaturesService()
