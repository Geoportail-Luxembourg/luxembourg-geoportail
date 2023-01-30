import * as olEvents from 'ol/events.js'

import useMap from '@/composables/map/map.composable'
import { SP_KEY_ZOOM, SP_KEY_VERSION } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import {
  KeyZoomV2ToV3,
  V2_ZOOM_TO_V3_ZOOM_,
} from './state-persistor-map.mapper'

class StatePersistorMapService {
  persistZoom() {
    const map = useMap()
    const view = map.getOlMap().getView()
    olEvents.listen(view, 'change:resolution', () => {
      const zoom = view.getZoom()
      storageHelper.setValue(SP_KEY_ZOOM, zoom ? Math.ceil(zoom) : null)

      // TODO: remove when version done, for now, force version 3
      storageHelper.setValue(SP_KEY_VERSION, 3)
    })
  }

  /**
   * Restore zoom, legacy in MapController
   * if zoom exists in storage and version 3, set zoom, else get exports.V2_ZOOM_TO_V3_ZOOM_[zoom]
   * if zoom doesn't exist set zoom to 8
   */
  restoreZoom() {
    const map = useMap()
    const zoom: string = storageHelper.getValue(SP_KEY_ZOOM)
    const version: string = storageHelper.getValue(SP_KEY_VERSION)

    if (zoom !== null && !isNaN(Number(zoom))) {
      const viewZoom =
        version === '3'
          ? +Number(zoom)
          : V2_ZOOM_TO_V3_ZOOM_[zoom as KeyZoomV2ToV3]
      map.getOlMap().getView().setZoom(viewZoom)
    }
  }
}

export const statePersistorMapService = new StatePersistorMapService()
