import * as olEvents from 'ol/events.js'
import { getTransform, ProjectionLike, transform } from 'ol/proj'

import useMap from '@/composables/map/map.composable'
import {
  SP_KEY_ZOOM,
  SP_KEY_VERSION,
  SP_KEY_X,
  SP_KEY_Y,
  SP_KEY_SRS,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import {
  KeyZoomV2ToV3,
  V2_ZOOM_TO_V3_ZOOM_,
} from './state-persistor-map.mapper'
import { debounce } from '@/services/utils'

class StatePersistorMapService {
  persistZoom() {
    const view = useMap().getOlMap().getView()

    olEvents.listen(
      view,
      'change:resolution',
      debounce(() => {
        const zoom = view.getZoom()
        storageHelper.setValue(SP_KEY_ZOOM, zoom ? Math.ceil(zoom) : null)
        storageHelper.setValue(SP_KEY_VERSION, 3) // TODO: remove when version done, for now, force version 3
      }, 300)
    )
  }

  persistXY() {
    const view = useMap().getOlMap().getView()

    olEvents.listen(
      view,
      'propertychange',
      debounce(() => {
        const center = view.getCenter()
        storageHelper.setValue(SP_KEY_X, center ? Math.round(center[0]) : null)
        storageHelper.setValue(SP_KEY_Y, center ? Math.round(center[1]) : null)
        storageHelper.setValue(SP_KEY_VERSION, 3) // TODO: remove when version done, for now, force version 3
      }, 300)
    )
  }

  persistViewport() {
    this.persistXY()
    this.persistZoom()
  }

  /**
   * Restore zoom, x, y.
   * Legacy in MapController
   * if zoom exists in storage and version 3, set zoom, else get exports.V2_ZOOM_TO_V3_ZOOM_[zoom]
   * if zoom doesn't exist set zoom to 8
   */
  restoreViewport() {
    const view = useMap().getOlMap().getView()
    const zoom = storageHelper.getValue(SP_KEY_ZOOM)
    const version: string = storageHelper.getValue(SP_KEY_VERSION)
    const x = storageHelper.getValue(SP_KEY_X)
    const y = storageHelper.getValue(SP_KEY_Y)
    const srs = storageHelper.getValue(SP_KEY_SRS) as ProjectionLike
    const lurefToWebMercatorFn = getTransform('EPSG:2169', 'EPSG:3857')

    // TODO: delete params as in legacy?
    // this.appStateManager_.deleteParam('SRS');

    let viewCenter

    if (x != null && y != null) {
      // keep "!=" for not null AND not undefined
      if (version === '3' && srs != null) {
        viewCenter = transform([+x, +y], srs, 'EPSG:3857')
      } else {
        viewCenter =
          version === '3'
            ? [+x, +y]
            : lurefToWebMercatorFn([+y, +x], undefined, 2)
      }
    } else {
      viewCenter = transform([6, 49.7], 'EPSG:4326', 'EPSG:3857')
    }

    view.setCenter(viewCenter)

    if (zoom != null && !isNaN(Number(zoom))) {
      // keep "!=" for not null AND not undefined
      const viewZoom =
        version === '3'
          ? +Number(zoom)
          : V2_ZOOM_TO_V3_ZOOM_[zoom as KeyZoomV2ToV3]

      view.setZoom(viewZoom)
    }
  }
}

export const statePersistorMapService = new StatePersistorMapService()