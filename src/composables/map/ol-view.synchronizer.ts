import { watch } from 'vue'
import type OlMap from 'ol/Map'

import { useMapStore } from '@/stores/map.store'

export class OlViewSynchronizer {
  constructor(map: OlMap) {
    const view = map.getView()
    const mapStore = useMapStore()

    watch(
      () => mapStore.minZoom,
      zoom => zoom !== undefined && view.setMinZoom(zoom)
    )

    watch(
      () => mapStore.maxZoom,
      zoom => zoom !== undefined && view.setMaxZoom(zoom)
    )
  }
}
