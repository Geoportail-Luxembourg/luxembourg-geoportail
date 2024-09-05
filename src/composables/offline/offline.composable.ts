import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { clearLayersCache } from '@/stores/layers.cache'
import useOfflineLayers from '@/composables/offline/offline-layers.composable'
import { OfflineContent } from '@/composables/offline/offline.model'

let localforage_v3: any

export default function useOffline() {
  const mapStore = useMapStore()
  const offlineLayers = useOfflineLayers()
  const { isOffLine } = storeToRefs(useAppStore())
  const { minZoom, maxZoom } = storeToRefs(mapStore)
  const { removeAllLayers, setBgLayer } = mapStore

  /**
   * Use this function in v3 to init localforage_v3 in v3
   * @param localforage
   *
   * @deprecated this function is meant to be removed when v4 is fully operational
   */
  function initLocalforage_v3(localforage: any) {
    localforage_v3 = localforage

    if (import.meta.env.MODE !== 'prod') {
      // eslint-disable-next-line no-console
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

  function doRestore(offlineContent: OfflineContent) {
    doRestoreClearAll()
    doRestoreZooms(offlineContent)
    doRestoreLayers(offlineContent)
  }

  /**
   * Clear layers on map and layers in cache
   */
  function doRestoreClearAll() {
    clearLayersCache()
    removeAllLayers()
    setBgLayer(null)
  }

  /**
   * Set min, max zooms for mapView
   * @param offlineContent
   */
  function doRestoreZooms(offlineContent: OfflineContent) {
    const { zooms } = offlineContent
    minZoom.value = zooms[0]
    maxZoom.value = zooms[zooms.length - 1]
  }

  /**
   * Recreate layers and bglayers and add to map
   * @param offlineContent
   */
  function doRestoreLayers(offlineContent: OfflineContent) {
    ;[...offlineContent.layers]
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
