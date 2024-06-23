import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { clearLayersCache } from '@/stores/layers.cache'
import useOfflineLayers from '@/composables/offline/offline-layers.composable'
import { OfflineLayerSpec } from '@/composables/offline/offline.model'
import useMap from '../map/map.composable'

let localforage_v3: any

export default function useOffline() {
  const offlineLayers = useOfflineLayers()
  const { isOffLine } = storeToRefs(useAppStore())
  const { removeAllLayers, setBgLayer } = useMapStore()

  /**
   * Use this function in v3 to init localforage_v3 in v3
   * @param localforage
   *
   * @deprecated this function is meant to be removed when v4 is fully operational
   */
  function initLocalforage_v3(localforage: any) {
    localforage_v3 = localforage

    if (import.meta.env.MODE !== 'prod') {
      console.warn(
        'Deprecated: useOffline.initLocalforage_v3() is meant to be removed when v4 is fully operational'
      )
    }
  }

  function getIsOffline() {
    return isOffLine.value
  }

  function setIsOffline(isOffline: boolean) {
    isOffLine.value = isOffline
  }

  function doRestore(offlineLayerSpecs: OfflineLayerSpec[]) {
    clearLayersCache()
    removeAllLayers()
    setBgLayer(null)
    ;[...offlineLayerSpecs]
      .reverse()
      .forEach(spec => offlineLayers.createOfflineLayer(spec))
  }

  // TODO: migrate offline
  // ...
  // ...
  // Needs:
  // - localforage
  // - indexeddb
  // - test switch offline
  // - service worker

  // ngeoOfflineStorage/offlineStorage => for rasters
  // swdb/responses => for vectors

  // 'offline_content' => see models

  return {
    localforage_v3,
    isOffLine,
    initLocalforage_v3,
    getIsOffline,
    setIsOffline,
    doRestore,
  }
}
