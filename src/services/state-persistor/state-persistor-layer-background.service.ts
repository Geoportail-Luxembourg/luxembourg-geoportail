import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'

import {
  SP_KEY_BGLAYER,
  SP_KEY_V2_BGLAYEROPACITY,
  StatePersistorService,
} from './state-persistor.model'
import { storageLayerMapper } from './state-persistor-layer.mapper'
import { storageHelper } from './storage/storage.helper'
import { stringToNumber } from '../utils'

const DEFAULT_BGLAYER_NAME = 'basemap_2015_global'
const DEFAULT_BGLAYER_NAME_V2 = 'orthogr_2013_global'
const V2_BGLAYER_TO_V3_: { [key: string]: string } = {
  webbasemap: 'basemap_2015_global',
  'pixelmaps-color': 'topogr_global',
  'pixelmaps-gray': 'topo_bw_jpeg',
  streets: 'streets_jpeg',
  voidlayer: 'blank',
}

class StatePersistorBgLayerService implements StatePersistorService {
  bootstrap() {
    const themeStore = useThemeStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.bgLayers.length > 0) {
        this.restore()
        this.persist()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persist() {
    const mapStore = useMapStore()
    const { bgLayer } = storeToRefs(mapStore)

    watch(
      bgLayer,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(
            SP_KEY_BGLAYER,
            value as Layer,
            storageLayerMapper.bgLayerTobgLayerName
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const { setMapBackground } = useBackgroundLayer()
    const bgLayer = this.getBgLayerFromStorage()

    setMapBackground(bgLayer)
  }

  getBgLayerFromStorage() {
    const version = storageHelper.getInitialVersion()
    const bgLayerName = storageHelper.getValue<string | null>(SP_KEY_BGLAYER)
    const bgLayer = !bgLayerName
      ? storageLayerMapper.bgLayerNameToBgLayer(DEFAULT_BGLAYER_NAME)
      : version === 2
      ? this.getBgLayerFromStorageV2(bgLayerName)
      : storageLayerMapper.bgLayerNameToBgLayer(bgLayerName)

    return bgLayer
  }

  getBgLayerFromStorageV2(bgLayerNameFromStorage: string | null) {
    const bgLayerOpacity = storageHelper.getValue(
      SP_KEY_V2_BGLAYEROPACITY,
      stringToNumber
    )
    let bgLayerName = ''

    if (bgLayerNameFromStorage) {
      bgLayerName = V2_BGLAYER_TO_V3_[bgLayerNameFromStorage]
    } else if (bgLayerOpacity === 0) {
      bgLayerName = DEFAULT_BGLAYER_NAME_V2
    }

    return storageLayerMapper.bgLayerNameToBgLayer(bgLayerName)
  }
}

export const statePersistorBgLayerService = new StatePersistorBgLayerService()
