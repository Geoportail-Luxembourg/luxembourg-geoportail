import { watch } from 'vue'
import type OlMap from 'ol/Map'

import { useMapStore } from '@/stores/map.store'
import { DEFAULT_VIEW_ZOOM_MAX, DEFAULT_VIEW_ZOOM_MIN } from './map.model'

export class OlViewSynchronizer {
  constructor(map: OlMap) {
    const view = map.getView()
    const mapStore = useMapStore()

    view.setMaxZoom(DEFAULT_VIEW_ZOOM_MAX)
    view.setMinZoom(DEFAULT_VIEW_ZOOM_MIN)
    view.setConstrainResolution(true) // No intermediate zooms

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
