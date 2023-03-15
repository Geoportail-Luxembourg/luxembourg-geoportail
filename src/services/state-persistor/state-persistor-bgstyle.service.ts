import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { storageStyleMapper } from './state-persistor-bgstyle.mapper'
import { storageHelper } from './storage/storage.helper'
import { useStyleStore } from '@/stores/style.store'
import { useMapStore } from '@/stores/map.store'
// import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

class StatePersistorStyleService {
  styleWatcher: WatchStopHandle
  bootstrapStyle() {
    const styleStore = useStyleStore()
    let stop: WatchStopHandle
    let activatePersistance: boolean = false
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (styleStore.bgVectorSources) {
        this.restoreStyle()
        if (activatePersistance) this.persistStyle()
        activatePersistance = true
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persistStyle() {
    const styleStore = useStyleStore()
    const { bgStyle } = storeToRefs(styleStore)

    console.log('persisting style')
    if (!this.styleWatcher) {
      this.styleWatcher = watch(
        bgStyle,
        (value, oldValue) => {
          if (oldValue !== value) {
            const mapStore = useMapStore()
            // const { bgLayer } = storeToRefs(mapStore)
            console.log(`style ${mapStore.bgLayer?.name} to store`)
            if (mapStore.bgLayer) {
              storageHelper.setValue(
                mapStore.bgLayer.name,
                value || [],
                storageStyleMapper.styleToSerial
              )
            }
          }
        },
        { immediate: true }
      )
    }
  }

  restoreStyle() {
    console.log('restoring style')
    const styleStore = useStyleStore()
    /*const bgLayer = storageHelper.getValue(
        SP_KEY_BGLAYER,
        storageLayerMapper.bgLayerIdToBgLayer
    )*/
    //const styleStore = useStyleStore()
    const mapStore = useMapStore()
    // const { bgLayer } = storeToRefs(mapStore)
    const bgLayer = mapStore.bgLayer
    console.log(`restoring bg style ${bgLayer?.name}`)
    /*
    if (bgLayer) {
        const bgStyle = bgConfigFixture().bg_layers.find((l) => l.id == bgLayer.id)
        const storedBgStyle = storageHelper.getValue(
            bgStyle.,
            storageLayerMapper.bgLayerIdToBgLayer
        )
    }
    */
    if (bgLayer) {
      const bgStyle = storageHelper.getValue(
        bgLayer.name,
        storageStyleMapper.styleSerialToStyle
      )
      if (bgStyle) {
        styleStore.setStyle(bgStyle)
      }
    }
  }
}

export const statePersistorStyleService = new StatePersistorStyleService()
