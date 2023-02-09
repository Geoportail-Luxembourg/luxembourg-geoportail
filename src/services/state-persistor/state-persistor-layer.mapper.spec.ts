import { storageLayerMapper } from './state-persistor-layer.mapper'
import { Layer } from '@/stores/map.store.model'

const layer1: Layer = {
  id: 10,
  name: 'layer1_name',
  layers: 'layer1_layers',
  type: 'WMTS',
  imageType: '',
}

const layerAnyId: Layer = {
  id: 'AnyId',
  name: 'layerAnyId_name',
  layers: 'layerAnyId_layers',
  type: 'WMTS',
  imageType: '',
}

const layer58: Layer = {
  id: 58,
  name: 'layer58_name',
  layers: 'layer58_layers',
  type: 'WMTS',
  imageType: '',
}

const layer360: Layer = {
  id: 360,
  name: 'layer360_name',
  layers: 'layer360_layers',
  type: 'WMTS',
  imageType: '',
}

const bgLayer32: Layer = {
  id: 'road_map32',
  name: 'road_map32',
  layers: '',
  type: 'WMTS',
  imageType: '',
}

const bgLayer0: Layer = {
  id: 'earth_red',
  name: 'earth_red',
  layers: '',
  type: 'WMTS',
  imageType: '',
}

const layersFakeConfig = [layer1, layerAnyId, layer58, layer360]
const bgLayersFakeConfig = [bgLayer32, bgLayer0]

vi.mock('@/composables/themes/themes.composable', () => ({
  default: vi.fn(() => ({
    findBgLayerByName: (layerId: string) =>
      bgLayersFakeConfig.find(layer => layer.id === layerId),
    findById: (layerId: string) =>
      layersFakeConfig.find(layer => layer.id === layerId),
  })),
}))

describe('StorageLayerMapper', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('#layerIdsToLayers', () => {
    it('returns the layers corresponding to the given ids', () => {
      expect(storageLayerMapper.layerIdsToLayers('10-360')).toStrictEqual([
        {
          id: 10,
          name: 'layer1_name',
          layers: 'layer1_layers',
          type: 'WMTS',
          imageType: '',
          opacity: 1,
          previousOpacity: 1,
        },
        {
          id: 360,
          name: 'layer360_name',
          layers: 'layer360_layers',
          type: 'WMTS',
          imageType: '',
          opacity: 1,
          previousOpacity: 1,
        },
      ])
    })

    it('returns undefined in place of layer not found to keep the order', () => {
      expect(storageLayerMapper.layerIdsToLayers('10-89754-360')).toStrictEqual(
        [
          {
            id: 10,
            name: 'layer1_name',
            layers: 'layer1_layers',
            type: 'WMTS',
            imageType: '',
            opacity: 1,
            previousOpacity: 1,
          },
          undefined,
          {
            id: 360,
            name: 'layer360_name',
            layers: 'layer360_layers',
            type: 'WMTS',
            imageType: '',
            opacity: 1,
            previousOpacity: 1,
          },
        ]
      )
    })

    it('cannot read layer with string ids', () => {
      expect(storageLayerMapper.layerIdsToLayers('10-AnyId')).toStrictEqual([
        {
          id: 10,
          name: 'layer1_name',
          layers: 'layer1_layers',
          type: 'WMTS',
          imageType: '',
          opacity: 1,
          previousOpacity: 1,
        },
        undefined,
      ])
    })

    it('returns a remote layer', () => {
      expect(
        storageLayerMapper.layerIdsToLayers(
          'WMS||www.mysuperserver.com/mytiles'
        )
      ).toStrictEqual([
        {
          id: 'WMS||www.mysuperserver.com/mytiles',
          name: '',
          layers: '',
          type: 'WMS',
          imageType: 'image/png',
          opacity: 1,
          previousOpacity: 1,
          url: 'https://map.geoportail.lu/httpsproxy?url=www.mysuperserver.com%2Fmytiles',
        },
      ])
    })
  })

  describe('#layersToLayerIds', () => {
    it('converts the given layers into ids', () => {
      expect(storageLayerMapper.layersToLayerIds([layer360, layerAnyId])).toBe(
        '360-AnyId'
      )
    })
  })

  describe('#bgLayerIdToBgLayer', () => {
    it('returns the corresponding bg layer', () => {
      expect(storageLayerMapper.bgLayerIdToBgLayer('road_map32')).toStrictEqual(
        {
          id: 'road_map32',
          name: 'road_map32',
          layers: '',
          type: 'WMTS',
          imageType: '',
        }
      )
    })
  })

  describe('#bgLayerTobgLayerId', () => {
    it('returns the formatted bg layer id', () => {
      expect(storageLayerMapper.bgLayerTobgLayerId(bgLayer0)).toStrictEqual(
        'earth_red'
      )
    })

    it('returns blank as bg layer id', () => {
      expect(storageLayerMapper.bgLayerTobgLayerId(undefined)).toStrictEqual(
        'blank'
      )
    })
  })
})
