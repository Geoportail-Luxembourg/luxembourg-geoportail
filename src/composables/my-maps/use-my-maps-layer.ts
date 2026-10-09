import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import {
  myMapsLayerId,
  myMapsLayerIdToLayer,
} from '@/services/my-maps/my-maps-layer.utils'

/**
 * Read-only MyMaps as a regular map layer.
 * Editable MyMap session lives in my-maps.composable.ts.
 */
export default function useMyMapsLayer() {
  const appStore = useAppStore()
  const mapStore = useMapStore()

  function toggleMyMapsLayer(uuid: string, title: string) {
    const layerId = myMapsLayerId(uuid)
    if (mapStore.hasLayer(layerId)) {
      mapStore.removeLayers(layerId)
      return
    }

    const layer = myMapsLayerIdToLayer(layerId, title)
    mapStore.addLayers(layer)
    appStore.setMyLayersTabOpen(true)
  }

  return {
    toggleMyMapsLayer,
  }
}
