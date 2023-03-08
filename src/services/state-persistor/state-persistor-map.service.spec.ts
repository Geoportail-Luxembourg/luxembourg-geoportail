import { MapBrowserEvent } from 'ol'
import ObjectEventType from 'ol/ObjectEventType'
import { ObjectEvent } from 'ol/Object'

import proj4 from 'proj4'

import { statePersistorMapService } from './state-persistor-map.service'
import useMap from '@/composables/map/map.composable'
import { storageHelper } from './storage/storage.helper'
import {
  SP_KEY_VERSION,
  SP_KEY_X,
  SP_KEY_Y,
  SP_KEY_ZOOM,
} from './state-persistor.model'
import { initProjections } from '../projection.utils'
import { register } from 'ol/proj/proj4'

let fakeStorage: { [key: string]: string } = {}

describe('StatePersistorMapService', () => {
  const map = useMap()
  map.createMap('myMap')
  const olMap = map.getOlMap()
  const view = useMap().getOlMap().getView()

  initProjections()
  proj4.defs(
    'EPSG:21781',
    '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 ' +
      '+x_0=600000 +y_0=200000 +ellps=bessel ' +
      '+towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs'
  )
  proj4.defs(
    'EPSG:4269',
    '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees'
  )
  register(proj4)

  beforeEach(() => {
    fakeStorage = {}
    vi.useFakeTimers()
    vi.spyOn(storageHelper, 'setValue')
    vi.mock('./storage/storage.helper', () => {
      return {
        storageHelper: {
          setValue: vi.fn(
            (key: string, value: any) => (fakeStorage[key] = value)
          ),
          getValue: vi.fn((key: string) => fakeStorage[key]),
          getInitialVersion: vi.fn(() => fakeStorage['version']),
        },
      }
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('#persistZoom', () => {
    it('persists the zoom value in storage, with delay', () => {
      statePersistorMapService.persistZoom()

      const nativeEvent = new MouseEvent('singleclick', {
        clientX: 0,
        clientY: 0,
      })

      olMap
        .getView()
        .dispatchEvent(
          new MapBrowserEvent('change:resolution', olMap, nativeEvent)
        )
      vi.runAllTimers()
      expect(storageHelper.setValue).toHaveBeenNthCalledWith(1, SP_KEY_ZOOM, 10)
      expect(storageHelper.setValue).toHaveBeenNthCalledWith(
        2,
        SP_KEY_VERSION,
        3
      )
    })
  })

  describe('#persistXY', () => {
    it('22persists the center coordinates of the view', () => {
      statePersistorMapService.persistXY()
      olMap
        .getView()
        .dispatchEvent(
          new ObjectEvent(
            ObjectEventType.PROPERTYCHANGE,
            'center',
            [7737829.395150623, 3747133.05296386]
          )
        )
      vi.runAllTimers()
      expect(storageHelper.setValue).toHaveBeenNthCalledWith(
        1,
        SP_KEY_X,
        682439
      )
      expect(storageHelper.setValue).toHaveBeenNthCalledWith(
        2,
        SP_KEY_Y,
        6379152
      )
      expect(storageHelper.setValue).toHaveBeenNthCalledWith(
        3,
        SP_KEY_VERSION,
        3
      ) // TODO: remove when version done, for now, force version 3
    })
  })

  describe('#persistViewport', () => {
    it('persists the zoom and the center coordinates', () => {
      vi.spyOn(statePersistorMapService, 'persistXY')
      vi.spyOn(statePersistorMapService, 'persistZoom')

      statePersistorMapService.persist()
      expect(statePersistorMapService.persistXY).toHaveBeenCalled()
      expect(statePersistorMapService.persistZoom).toHaveBeenCalled()
    })
  })

  describe('#restoreViewport', () => {
    beforeEach(() => {
      vi.spyOn(view, 'setCenter')
      vi.spyOn(view, 'setZoom')
    })

    describe('when there is not value in storage', () => {
      it('restores the view center with default value when no X,Y found in storage', () => {
        statePersistorMapService.restore()
        expect(view.setCenter).toHaveBeenCalledWith([
          667916.9447596414, 6394482.317900552,
        ])
      })

      it('restores the zoom center with default value 8', () => {
        statePersistorMapService.restore()
        expect(view.setZoom).toHaveBeenCalledWith(8)
      })
    })

    describe('when there are values in storage', () => {
      it('restores the zoom center as is for version 3', () => {
        storageHelper.setValue('version', 3)
        storageHelper.setValue('zoom', 10)
        statePersistorMapService.restore()
        expect(view.setZoom).toHaveBeenCalledWith(10)
      })

      it('restores the zoom center after conversion from v2 to v3', () => {
        storageHelper.setValue('version', 'any not 3')
        storageHelper.setValue('zoom', 10)
        statePersistorMapService.restore()
        expect(view.setZoom).toHaveBeenCalledWith(18)
      })

      it('restores the zoom center after transformation from given source proj EPSG:21781 to default dest proj for version 3', () => {
        expect(storageHelper.getValue('X')).toBe(undefined)
        storageHelper.setValue('version', 3)
        storageHelper.setValue('SRS', 'EPSG:21781')
        storageHelper.setValue('X', 565128.7200596306)
        storageHelper.setValue('Y', 6263074.645037436)
        statePersistorMapService.restore()
        expect(view.setCenter).toHaveBeenCalledWith([
          1115435.3583171312, 20441954.15514722,
        ])
      })

      it('restores the zoom center after transformation from default source proj EPSG:2169 to default dest proj for version 2', () => {
        expect(storageHelper.getValue('X')).toBe(undefined)
        storageHelper.setValue('version', 2)
        storageHelper.setValue('X', 565128.7200596306)
        storageHelper.setValue('Y', 6263074.645037436)
        statePersistorMapService.restore()
        expect(view.setCenter).toHaveBeenCalledWith([
          7633619.184187683, 3818804.664253617,
        ])
      })

      it('restores the zoom center with no transformation with version 3', () => {
        expect(storageHelper.getValue('X')).toBe(undefined)
        storageHelper.setValue('version', 3)
        storageHelper.setValue('X', 565128.7200596306)
        storageHelper.setValue('Y', 6263074.645037436)
        statePersistorMapService.restore()
        expect(view.setCenter).toHaveBeenCalledWith([
          565128.7200596306, 6263074.645037436,
        ])
      })
    })
  })
})
