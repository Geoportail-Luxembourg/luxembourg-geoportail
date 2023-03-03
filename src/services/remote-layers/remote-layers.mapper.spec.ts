import { RemoteLayer } from './remote-layers.model'
import {
  remoteLayersToLayerTreeMapper,
  remoteLayerIdtoLayer,
} from './remote-layers.mapper'
import { createPinia, setActivePinia } from 'pinia'
import { LayerImageType } from '@/stores/map.store.model'
import { remoteLayersService } from './remote-layers.service'

describe('remoteLayersToLayerTreeMapper', () => {
  describe('map WMS layers to tree (including sort)', () => {
    let layerTree
    const remoteWmsLayers: RemoteLayer[] = [
      {
        name: 'RootLayer',
        type: 'WMS',
        children: [
          {
            name: 'Layer1',
            type: 'WMS',
            children: [
              { name: 'Layer1-1', type: 'WMS' },
              {
                name: 'Layer1-2',
                type: 'WMS',
              },
            ],
          },
          { name: 'Layer2', type: 'WMS' },
          { name: 'Layer3', type: 'WMS', children: [] },
        ],
      },
    ]
    const url = 'http://example.com'
    const depth = 0

    const expectedLayerWmsTree = {
      id: 'WMS||http://example.com||RootLayer',
      name: 'RootLayer',
      depth: 0,
      children: [
        {
          id: 'WMS||http://example.com||Layer2',
          name: 'Layer2',
          depth: 1,
          children: undefined,
          checked: false,
          expanded: false,
        },
        {
          id: 'WMS||http://example.com||Layer3',
          name: 'Layer3',
          depth: 1,
          children: [],
          checked: false,
          expanded: false,
        },
        {
          id: 'WMS||http://example.com||Layer1',
          name: 'Layer1',
          depth: 1,
          children: [
            {
              id: 'WMS||http://example.com||Layer1%2D1',
              name: 'Layer1-1',
              depth: 2,
              children: undefined,
              checked: false,
              expanded: false,
            },
            {
              id: 'WMS||http://example.com||Layer1%2D2',
              name: 'Layer1-2',
              depth: 2,
              children: undefined,
              checked: false,
              expanded: false,
            },
          ],
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

describe('#remoteLayerIdtoLayer using #remoteLayerToLayer', () => {
  vi.spyOn(remoteLayersService, 'getProxyfiedUrl').mockImplementation(
    url => `myproxifiedurl=${url}`
  )
  describe('WMS', () => {
    const wmsLayer = remoteLayerIdtoLayer('WMS||http://example.com||Layer1')
    it('should convert a remote WMS layer id to a layer object', () => {
      expect(wmsLayer).toEqual({
        id: 'WMS||http://example.com||Layer1',
        name: 'Layer1',
        layers: 'Layer1',
        url: 'myproxifiedurl=http://example.com',
        type: 'WMS',
        imageType: LayerImageType.PNG,
      })
    })
  })
  describe('WMTS', () => {
    const wmtsLayer = remoteLayerIdtoLayer('WMTS||http://example.com||Layer1')
    it('should convert a remote WMTS layer id to a layer object', () => {
      expect(wmtsLayer).toEqual({
        id: 'WMTS||http://example.com||Layer1',
        name: 'Layer1',
        layers: 'Layer1',
        url: 'myproxifiedurl=http://example.com',
        type: 'WMTS',
        imageType: LayerImageType.PNG,
      })
    })
  })
})
