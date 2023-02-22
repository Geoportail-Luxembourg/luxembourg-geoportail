import { RemoteLayer } from './remote-layers.model'
import {
  sortLayerTreeNoChildrenFirst,
  remoteLayersToLayerTreeMapper,
  remoteLayerIdtoLayer,
} from './remote-layers.mapper'
import { createPinia, setActivePinia } from 'pinia'
import { LayerImageType } from '@/stores/map.store.model'
import { remoteLayersService } from './remote-layers.service'

describe('sortLayerTreeNoChildrenFirst', () => {
  const layers: RemoteLayer[] = [
    { name: 'Layer1', children: [{ name: 'Layer1-1' }] },
    { name: 'Layer2' },
    { name: 'Layer3', children: [] },
  ]
  const sortedLayers = layers.sort(sortLayerTreeNoChildrenFirst)
  it('should sort layer tree by putting nodes with no children first', () => {
    expect(sortedLayers[0].name).toBe('Layer2')
    expect(sortedLayers[1].name).toBe('Layer3')
    expect(sortedLayers[2].name).toBe('Layer1')
  })
})

describe('remoteLayersToLayerTreeMapper', () => {
  describe('map WMS layers to tree', () => {
    let layerTree
    const remoteWmsLayers: RemoteLayer[] = [
      {
        name: 'Layer1',
        type: 'WMS',
        children: [
          {
            name: 'Layer1-1',
            type: 'WMS',
          },
          {
            name: 'Layer1-2',
            type: 'WMS',
          },
        ],
      },
    ]

    const url = 'http://example.com'
    const depth = 0

    const expectedLayerWmsTree = {
      id: 'WMS||http://example.com||Layer1',
      name: 'Layer1',
      depth: 0,
      children: [
        {
          id: 'WMS||http://example.com||Layer1%2D1',
          name: 'Layer1-1',
          depth: 1,
          children: undefined,
          checked: false,
          expanded: false,
        },
        {
          id: 'WMS||http://example.com||Layer1%2D2',
          name: 'Layer1-2',
          depth: 1,
          children: undefined,
          checked: false,
          expanded: false,
        },
      ],
      checked: false,
      expanded: false,
    }
    beforeEach(() => {
      setActivePinia(createPinia())
      layerTree = remoteLayersToLayerTreeMapper(remoteWmsLayers[0], url, depth)
    })
    it('should convert remote layers to a layer tree', () => {
      expect(layerTree).toEqual(expectedLayerWmsTree)
    })
  })

  describe('map WMTS layers to tree', () => {
    let layerTree
    const remoteWmtsLayers: RemoteLayer[] = [
      {
        type: 'WMTS',
        children: [
          {
            name: 'Layer1-1',
            type: 'WMTS',
          },
          {
            name: 'Layer1-2',
            type: 'WMTS',
          },
        ],
      },
    ]

    const url = 'http://example.com'
    const depth = 0

    const expectedLayerWmtsTree = {
      id: 'WMTS||http://example.com||',
      name: '',
      depth: 0,
      children: [
        {
          id: 'WMTS||http://example.com||Layer1%2D1',
          name: 'Layer1-1',
          depth: 1,
          children: undefined,
          checked: false,
          expanded: false,
        },
        {
          id: 'WMTS||http://example.com||Layer1%2D2',
          name: 'Layer1-2',
          depth: 1,
          children: undefined,
          checked: false,
          expanded: false,
        },
      ],
      checked: false,
      expanded: false,
    }
    beforeEach(() => {
      setActivePinia(createPinia())
      layerTree = remoteLayersToLayerTreeMapper(remoteWmtsLayers[0], url, depth)
    })
    it('should convert remote layers to a layer tree', () => {
      expect(layerTree).toEqual(expectedLayerWmtsTree)
    })
  })
})

describe('remoteLayerIdtoLayer', () => {
  let layer
  const remoteLayerId = 'WMS||http://example.com||Layer1'
  const expectedLayer = {
    id: 'WMS||http://example.com||Layer1',
    name: 'Layer1',
    layers: 'Layer1',
    url: 'myproxifiedurl=http://example.com',
    type: 'WMS',
    imageType: LayerImageType.PNG,
  }
  beforeEach(() => {
    vi.spyOn(remoteLayersService, 'getProxyfiedUrl').mockImplementation(
      url => `myproxifiedurl=${url}`
    )
    layer = remoteLayerIdtoLayer(remoteLayerId)
  })

  it('should convert a remote layer id to a layer object', () => {
    expect(layer).toEqual(expectedLayer)
  })
})
