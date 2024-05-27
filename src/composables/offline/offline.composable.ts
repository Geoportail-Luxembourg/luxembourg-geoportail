import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import useOfflineLayers from '@/composables/offline/offline-layers.composable'
import { OfflineLayerSpec } from '@/composables/offline/offline.model'

export default function useOffline() {
  const { isOffLine } = storeToRefs(useAppStore())
  const { recreateOfflineLayer } = useOfflineLayers()

  function getIsOffline() {
    return isOffLine.value
  }

  function setIsOffline(isOffline: boolean) {
    isOffLine.value = isOffline
  }

  function addLayer(offlineLayerSpec: OfflineLayerSpec) {
    const layer = recreateOfflineLayer(offlineLayerSpec)
  }

  // TODO: migrate offline
  // ...
  // ...
  // Needs:
  // - localforage
  // - indexeddb
  // - test switch offline
  // - service worker

  return {
    isOffLine,
    getIsOffline,
    setIsOffline,
  }
}
