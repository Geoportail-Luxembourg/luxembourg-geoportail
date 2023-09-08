import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'

import {
  SP_KEY_LAYERS,
  SP_KEY_TIME_SELECTIONS,
  SP_KEY_OPACITIES,
  SP_KEY_V2_BGLAYEROPACITY,
  SP_KEY_V2_LAYERSINDICIES,
  SP_KEY_V2_LAYERSOPACITIES,
  SP_KEY_V2_LAYERSVISIBILITY,
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

          storageHelper.setValue(
            SP_KEY_TIME_SELECTIONS,
            value,
            storageLayerMapper.layersToLayerTimes
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const version = storageHelper.getInitialVersion()
    const mapStore = useMapStore()
    const layers = storageHelper.getValue(
      SP_KEY_LAYERS,
      version === 2
        ? storageLayerMapper.layerNamesToLayersV2
        : storageLayerMapper.layerIdsToLayers
    )

    this.restoreLayersOpacities(layers, version)
    this.restoreLayersTimes(layers)

    if (version === 2) {
      storageHelper.removeItem(SP_KEY_V2_BGLAYEROPACITY)
      storageHelper.removeItem(SP_KEY_V2_LAYERSINDICIES)
      storageHelper.removeItem(SP_KEY_V2_LAYERSOPACITIES)
      storageHelper.removeItem(SP_KEY_V2_LAYERSVISIBILITY)
    }

    mapStore.addLayers(...((layers?.filter(layer => layer) as Layer[]) || []))
  }

  restoreLayersOpacities(layers: (Layer | undefined)[], version: number) {
    const opacities =
      version === 2
        ? this.getOpacitiesFromStorageV2()
        : this.getOpacitiesFromStorage()

    if (opacities.length) {
      layers?.forEach(
        (layer, index) => layer && (layer.opacity = opacities[index] ?? 1)
      )
    }
  }

  restoreLayersTimes(layers: (Layer | undefined)[]) {
    const times = storageHelper.getValue(
      SP_KEY_TIME_SELECTIONS,
      storageLayerMapper.layerTimesToStrings
    )

    if (times.length) {
      layers?.forEach(
        (layer, index) =>
          layer && times[index] && this.restoreLayerTime(layer, times[index])
      )
    }
  }

  restoreLayerTime(layer: Layer, time: string) {
    const defaultTimes = time.split('/')

    // Use min and max default values to restore previous state
    layer.currentTimeMinValue = defaultTimes[0]
    layer.currentTimeMaxValue = defaultTimes[1]
  }

  getOpacitiesFromStorage() {
    return storageHelper.getValue(
      SP_KEY_OPACITIES,
      storageLayerMapper.layersOpacitiesToNumbers
    )
  }

  getOpacitiesFromStorageV2() {
    const opacities = storageHelper.getValue(
      SP_KEY_V2_LAYERSOPACITIES,
      storageLayerMapper.layersOpacitiesToNumbersV2
    )

    const visibility = storageHelper.getValue(
      SP_KEY_V2_LAYERSVISIBILITY,
      storageLayerMapper.layersVisibilitiesToBooleansV2
    )

    return opacities.map((opacity, index) => (visibility[index] ? opacity : 0))
  }
}

export const statePersistorLayersService = new StatePersistorLayersService()
