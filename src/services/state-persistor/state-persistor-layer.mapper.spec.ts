import { storageLayerMapper } from './state-persistor-layer.mapper'
import { Layer } from '@/stores/map.store.model'

const layer1: Layer = {
  id: 10,
  name: 'layer1_name',
  layers: 'layer1_layers',
  type: 'WMTS',
  imageType: '',
  opacity: 0.1,
}

const layerAnyId: Layer = {
  id: 'AnyId',
  name: 'layerAnyId_name',
  layers: 'layerAnyId_layers',
  type: 'WMTS',
  imageType: '',
  opacity: 0.5,
}

const layer58: Layer = {
  id: 58,
  name: 'layer58_name',
  layers: 'layer58_layers',
  type: 'WMTS',
  imageType: '',
  opacity: 0.75,
}

const layer360: Layer = {
  id: 360,
  name: 'layer360_name',
  layers: 'layer360_layers',
  type: 'WMTS',
  imageType: '',
  opacity: 1,
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
  beforeEach(() => {
    vi.mock('@/services/proxyurl/proxyurl.helper', () => {
      return {
        proxyUrlHelper: {
          getProxyfiedUrl: (url: string) => `myproxifiedurl=${url}`,
        },
      }
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('#layerIdsToLayers', () => {
    it('returns the layers corresponding to the given ids', () => {
      expect(storageLayerMapper.layerIdsToLayers('360-10')).toStrictEqual([
        {
          id: 10,
          name: 'layer1_name',
          layers: 'layer1_layers',
          type: 'WMTS',
          imageType: '',
          opacity: 1,
          previousOpacity: 1,
          currentTimeMinValue: undefined,
        },
        {
          id: 360,
          name: 'layer360_name',
          layers: 'layer360_layers',
          type: 'WMTS',
          imageType: '',
          opacity: 1,
          previousOpacity: 1,
          currentTimeMinValue: undefined,
        },
      ])
    })

    it('returns undefined in place of layer not found to keep the order', () => {
      expect(storageLayerMapper.layerIdsToLayers('360-89754-10')).toStrictEqual(
        [
          {
            id: 10,
            name: 'layer1_name',
            layers: 'layer1_layers',
            type: 'WMTS',
            imageType: '',
            opacity: 1,
            previousOpacity: 1,
            currentTimeMinValue: undefined,
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
            currentTimeMinValue: undefined,
          },
        ]
      )
    })

    it('cannot read layer with string ids', () => {
      expect(storageLayerMapper.layerIdsToLayers('AnyId-10')).toStrictEqual([
        {
          id: 10,
          name: 'layer1_name',
          layers: 'layer1_layers',
          type: 'WMTS',
          imageType: '',
          opacity: 1,
          previousOpacity: 1,
          currentTimeMinValue: undefined,
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
          url: 'myproxifiedurl=www.mysuperserver.com/mytiles',
          currentTimeMinValue: undefined,
        },
      ])
    })
  })

  describe('#layersOpacitiesToNumbers', () => {
    it('returns the opacities as floats', () => {
      expect(
        storageLayerMapper.layersOpacitiesToNumbers('0-1-0.25-0.6-1')
      ).toStrictEqual([1, 0.6, 0.25, 1, 0])
    })
    it('returns undefined for an invalid opactiy value', () => {
      expect(
        storageLayerMapper.layersOpacitiesToNumbers('1-opa-0')
      ).toStrictEqual([0, undefined, 1])
    })
  })

  describe('#layersToLayerIds', () => {
    it('converts the given layers into ids', () => {
      expect(storageLayerMapper.layersToLayerIds([layer360, layerAnyId])).toBe(
        'AnyId-360'
      )
    })
  })

  describe('#layersToLayerOpacities', () => {
    it('extracts the opacities of each layer and convert into a string for storage', () => {
      expect(
        storageLayerMapper.layersToLayerOpacities([
          layer58,
          layer360,
          layerAnyId,
        ])
      ).toBe('0.5-1-0.75')
    })
  })

  describe('#bgLayerNameToBgLayer', () => {
    it('returns the corresponding bg layer', () => {
      expect(
        storageLayerMapper.bgLayerNameToBgLayer('road_map32')
      ).toStrictEqual({
        id: 'road_map32',
        name: 'road_map32',
        layers: '',
        type: 'WMTS',
        imageType: '',
      })
    })
  })

  describe('#bgLayerToBgLayerName', () => {
    it('returns the formatted bg layer id', () => {
      expect(storageLayerMapper.bgLayerToBgLayerName(bgLayer0)).toStrictEqual(
        'earth_red'
      )
    })

    it('returns blank as bg layer id', () => {
      expect(storageLayerMapper.bgLayerToBgLayerName(undefined)).toStrictEqual(
        'blank'
      )
    })
  })
})
