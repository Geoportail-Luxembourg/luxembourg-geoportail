import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'

import {
  SP_KEY_LAYERS,
  SP_KEY_OPACITIES,
  StatePersistorService,
} from './state-persistor.model'
import { storageLayerMapper } from './state-persistor-layer.mapper'
import { storageHelper } from './storage/storage.helper'

class StatePersistorLayersService implements StatePersistorService {
  bootstrap() {
    const themeStore = useThemeStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.themes) {
        this.restore()
        this.persist()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persist() {
    const mapStore = useMapStore()
    const { layers } = storeToRefs(mapStore)

    watch(
      layers,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(
            SP_KEY_LAYERS,
            value,
            storageLayerMapper.layersToLayerIds
          )

          storageHelper.setValue(
            SP_KEY_OPACITIES,
            value,
            storageLayerMapper.layersToLayerOpacities
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const mapStore = useMapStore()
    const layers = storageHelper.getValue(
      SP_KEY_LAYERS,
      storageLayerMapper.layerIdsToLayers
    )
    const opacities = storageHelper.getValue(
      SP_KEY_OPACITIES,
      storageLayerMapper.layerOpacitiesToNumbers
    )

    if (opacities) {
      layers?.forEach((layer, index) => {
        if (layer) {
          layer.opacity = opacities[index] ?? 1
        }
      })
    }

    mapStore.addLayers(...((layers?.filter(layer => layer) as Layer[]) || []))
  }
}

export const statePersistorLayersService = new StatePersistorLayersService()
