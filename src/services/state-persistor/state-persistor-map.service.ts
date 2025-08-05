import * as olEvents from 'ol/events'
import { getTransform, ProjectionLike, transform } from 'ol/proj'
import { Coordinate } from 'ol/coordinate'
import ObjectEventType from 'ol/ObjectEventType'

import { useMapStore } from '@/stores/map.store'
import useMap, {
  PROJECTION_WEBMERCATOR,
  PROJECTION_LUX,
  PROJECTION_WGS84,
} from '@/composables/map/map.composable'
import {
  SP_KEY_ZOOM,
  SP_KEY_ROTATION,
  SP_KEY_X,
  SP_KEY_Y,
  SP_KEY_SRS,
  StatePersistorService,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import {
  KeyZoomV2ToV3,
  V2_ZOOM_TO_V3_ZOOM_,
} from './state-persistor-map.mapper'
import { debounce, stringToNumber } from '@/services/utils'
import { storeToRefs } from 'pinia'

class StatePersistorMapService implements StatePersistorService {
  bootstrap(): void {
    this.restore()
    this.persist()
  }

  persistZoom() {
    const mapStore = useMapStore()
    const { zoom } = storeToRefs(mapStore)
    const view = useMap().getOlMap().getView()

    const fnPersistValueZoom = () => {
      const z = view.getZoom()
      const pz = z ? Math.ceil(z) : null

      storageHelper.setValue(SP_KEY_ZOOM, pz)

      zoom.value = pz
    }

    fnPersistValueZoom()

    olEvents.listen(
      view,
      'change:resolution',
      debounce(fnPersistValueZoom, 300)
    )
  }

  persistRotation() {
    const view = useMap().getOlMap().getView()
    const fnStorageSetValueRotation = () => {
      const rotation = view.getRotation()
      storageHelper.setValue(SP_KEY_ROTATION, rotation || 0)
    }

    fnStorageSetValueRotation()

    olEvents.listen(
      view,
      'change:rotation',
      debounce(fnStorageSetValueRotation, 300)
    )
  }

  persistXY() {
    const mapStore = useMapStore()
    const { x, y } = storeToRefs(mapStore)
    const view = useMap().getOlMap().getView()

    const fnPersistValueXY = () => {
      const center = view.getCenter()
      const px = center ? Math.round(center[0]) : null
      const py = center ? Math.round(center[1]) : null

      storageHelper.setValue(SP_KEY_X, px)
      storageHelper.setValue(SP_KEY_Y, py)

      x.value = px
      y.value = py
    }

    fnPersistValueXY()

    olEvents.listen(
      view,
      ObjectEventType.PROPERTYCHANGE,
      debounce(fnPersistValueXY, 300)
    )
  }

  persist() {
    this.persistXY()
    this.persistZoom()
    this.persistRotation()
  }

  /**
   * Restore viewport: zoom, x, y.
   * Legacy in MapController
   * if zoom exists in storage and version 3, set zoom, else get exports.V2_ZOOM_TO_V3_ZOOM_[zoom]
   * if zoom doesn't exist set zoom to 8
   */
  restore() {
    const view = useMap().getOlMap().getView()
    const zoom = storageHelper.getValue(SP_KEY_ZOOM, stringToNumber)
    const rotation = storageHelper.getValue(SP_KEY_ROTATION, stringToNumber)
    const version = storageHelper.getInitialVersion()
    const x = storageHelper.getValue(SP_KEY_X, stringToNumber)
    const y = storageHelper.getValue(SP_KEY_Y, stringToNumber)
    const srs = storageHelper.getValue(SP_KEY_SRS) as ProjectionLike
    const lurefToWebMercatorFn = getTransform(
      PROJECTION_LUX,
      PROJECTION_WEBMERCATOR
    )

    // TODO: delete params as in legacy?
    // this.appStateManager_.deleteParam('SRS');

    let viewCenter: Coordinate
    let viewZoom: number

    if (zoom !== undefined) {
      viewZoom =
        version === 3
          ? Number(zoom)
          : V2_ZOOM_TO_V3_ZOOM_[zoom as KeyZoomV2ToV3]
    } else {
      viewZoom = parseInt(import.meta.env.VITE_DEFAULT_VIEW_ZOOM, 10)
    }

    if (x != null && y != null) {
      // keep "!=" for not null AND not undefined
      if (version === 3 && srs != null) {
        viewCenter = transform([x, y], srs, PROJECTION_WEBMERCATOR)
      } else {
        viewCenter =
          version === 3 ? [x, y] : lurefToWebMercatorFn([y, x], undefined, 2)
      }
    } else {
      viewCenter = transform(
        [6, 49.7],
        PROJECTION_WGS84,
        PROJECTION_WEBMERCATOR
      )
    }

    view.setCenter(viewCenter)
    view.setZoom(viewZoom)
    view.setRotation(rotation || 0)
  }
}

export const statePersistorMapService = new StatePersistorMapService()
