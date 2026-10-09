import { setActivePinia, createPinia } from 'pinia'

import { Layer } from '@/stores/map.store.model'
import { LayerTypeValue } from '@/composables/themes/themes.model'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

import {
  MY_MAPS_LAYER_ID_PREFIX,
  myMapsLayerId,
  isMyMapsLayerId,
  uuidFromMyMapsLayerId,
  myMapsLayerIdToLayer,
  removeMyMapsLayers,
  buildMyMapsDrawnFeatures,
} from './my-maps-layer.utils'

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: vi.fn(() => undefined),
  }),
  PROJECTION_LUX: 'EPSG:2169',
  PROJECTION_WEBMERCATOR: 'EPSG:3857',
}))

const uuid = 'a1b2-c3d4'

describe('my-maps-layer.utils', () => {
  describe('#myMapsLayerId / #isMyMapsLayerId / #uuidFromMyMapsLayerId', () => {
    it('builds the layer id from the uuid', () => {
      expect(myMapsLayerId(uuid)).toBe(`mymaps||${uuid}`)
    })

    it('detects mymaps layer ids', () => {
      expect(isMyMapsLayerId(myMapsLayerId(uuid))).toBe(true)
    })

    it('does not detect numeric or remote layer ids', () => {
      expect(isMyMapsLayerId(10)).toBe(false)
      expect(isMyMapsLayerId('WMS||www.server.com')).toBe(false)
      expect(isMyMapsLayerId('regular_layer')).toBe(false)
    })

    it('extracts the uuid from the layer id', () => {
      expect(uuidFromMyMapsLayerId(myMapsLayerId(uuid))).toBe(uuid)
    })
  })

  describe('#myMapsLayerIdToLayer', () => {
    it('builds a MY_MAPS layer', () => {
      expect(myMapsLayerIdToLayer('mymaps||123', 'my title')).toStrictEqual({
        id: 'mymaps||123',
        name: 'my title',
        type: LayerTypeValue.MY_MAPS,
        layers: '',
        imageType: 'image/png',
        opacity: 1,
      })
    })

    it('defaults the name to an empty string', () => {
      expect(myMapsLayerIdToLayer('mymaps||123').name).toBe('')
    })
  })

  describe('#removeMyMapsLayers', () => {
    it('removes mymaps layers and keeps the others', () => {
      const myMapsLayer: Layer = myMapsLayerIdToLayer(myMapsLayerId(uuid))
      const numericLayer: Layer = {
        id: 10,
        name: 'layer10',
        layers: '',
        type: 'WMTS',
        imageType: '',
      }
      const remoteLayer: Layer = {
        id: 'WMS||www.server.com',
        name: '',
        layers: '',
        type: 'WMS',
        imageType: 'image/png',
      }

      expect(
        removeMyMapsLayers([myMapsLayer, numericLayer, remoteLayer])
      ).toStrictEqual([numericLayer, remoteLayer])
    })

    it('returns an empty array when only mymaps layers are present', () => {
      expect(
        removeMyMapsLayers([myMapsLayerIdToLayer(myMapsLayerId(uuid))])
      ).toStrictEqual([])
    })
  })

  describe('#buildMyMapsDrawnFeatures', () => {
    const pointFeatureJson = {
      type: 'Feature' as const,
      geometry: { type: 'Point', coordinates: [6.1, 49.6] },
      id: 42,
      properties: {
        map_id: uuid,
        display_order: 3,
      },
    }

    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('returns an empty array when features is empty', () => {
      expect(
        buildMyMapsDrawnFeatures({ type: 'FeatureCollection', features: [] })
      ).toStrictEqual([])
    })

    it('returns an empty array when features is missing', () => {
      expect(buildMyMapsDrawnFeatures({} as never)).toStrictEqual([])
    })

    it('reattributes id and fid from the backend id', () => {
      const [feature] = buildMyMapsDrawnFeatures(
        { type: 'FeatureCollection', features: [pointFeatureJson] },
        { map_id: uuid }
      )

      expect(feature.id).toBe(42)
      expect(feature.fid).toBe(42)
      expect(feature.map_id).toBe(uuid)
      expect(feature.display_order).toBe(3)
    })

    it('sets editable only when the option is passed', () => {
      const { features } = {
        type: 'FeatureCollection' as const,
        features: [pointFeatureJson],
      }

      const [readOnlyFeature] = buildMyMapsDrawnFeatures(
        { type: 'FeatureCollection', features },
        { editable: false }
      )
      const [untouchedFeature] = buildMyMapsDrawnFeatures({
        type: 'FeatureCollection',
        features,
      })

      expect(readOnlyFeature.editable).toBe(false)
      expect(untouchedFeature.editable).toBe(true)
    })

    it('runs features through the circle conversion pipeline', () => {
      vi.spyOn(DrawnFeature, 'generateFromGeoJson').mockReturnValue({
        featureType: 'drawnCircle',
        getGeometry: vi.fn(),
      } as unknown as DrawnFeature)

      const [feature] = buildMyMapsDrawnFeatures(
        { type: 'FeatureCollection', features: [pointFeatureJson] },
        { editable: false }
      )

      expect(feature.featureType).toBe('drawnCircle')
    })
  })

  describe('layer id prefix', () => {
    it('uses the mymaps|| prefix', () => {
      expect(MY_MAPS_LAYER_ID_PREFIX).toBe('mymaps||')
    })
  })
})
