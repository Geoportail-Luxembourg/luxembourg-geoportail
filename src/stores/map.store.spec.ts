import { setActivePinia, createPinia } from 'pinia'

import useBackgroundLayer from '../composables/background-layer/background-layer.composable'
import useLayers from '../composables/layers/layers.composable'
import { useMapStore } from './map.store'
import { Layer } from './map.store.model'

const layer1: Layer = {
  id: 1,
  name: 'layer1_name',
  layers: 'layer1_layers',
  type: 'WMTS',
  imageType: '',
}

const layer2: Layer = {
  id: 2,
  name: 'layer2_name',
  layers: 'layer2_layers',
  type: 'WMTS',
  imageType: '',
}

const layer3: Layer = {
  id: 3,
  name: 'layer3_name',
  layers: 'layer3_layers',
  type: 'WMTS',
  imageType: '',
  metadata: {
    exclusion: '["test_single1", "test_exclude"]',
  },
}

const layer4: Layer = {
  id: 4,
  name: 'layer4_name',
  layers: 'layer4_layers',
  type: 'WMTS',
  imageType: '',
  metadata: {
    exclusion: '["test_single2", "test_exclude"]',
  },
}

const backgroundLayer: Layer = {
  id: 'background',
  name: 'background_name',
  layers: 'background_layers',
  type: 'BG WMTS',
  imageType: '',
  metadata: {
    exclusion: '["test_single3", "test_exclude"]',
  },
}

describe('Map Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Map Store -- Layers', () => {
    it('add layer', () => {
      const mapStore = useMapStore()
      expect(mapStore.layers.length).toBe(0)
      mapStore.addLayers(layer1)
      expect(mapStore.layers.length).toBe(1)
    })

    it('add layers', () => {
      const mapStore = useMapStore()
      expect(mapStore.layers.length).toBe(0)
      mapStore.addLayers(layer1, layer2)
      expect(mapStore.layers.length).toBe(2)
    })

    it('add layers, must return new ref to array', () => {
      const mapStore = useMapStore()
      mapStore.addLayers(layer1, layer2)
      const layers = mapStore.layers
      mapStore.addLayers(layer4)
      const layersAdded = mapStore.layers
      expect(layersAdded.length).toBe(3)
      expect(layersAdded).not.toBe(layers)
    })

    it('remove layer', () => {
      const mapStore = useMapStore()
      mapStore.addLayers(layer1)
      expect(mapStore.layers.length).toBe(1)
      mapStore.removeLayers(layer1.id)
      expect(mapStore.layers.length).toBe(0)
    })

    it('remove layers', () => {
      const mapStore = useMapStore()
      mapStore.addLayers(layer1, layer2, layer3)
      expect(mapStore.layers.length).toBe(3)
      mapStore.removeLayers(layer1.id, layer2.id)
      expect(mapStore.layers.length).toBe(1)
    })

    it('remove all layers', () => {
      const mapStore = useMapStore()
      mapStore.addLayers(layer1, layer2, layer3)
      expect(mapStore.layers.length).toBe(3)
      mapStore.removeAllLayers()
      expect(mapStore.layers.length).toBe(0)
    })

    it('reorder layers', () => {
      const mapStore = useMapStore()
      mapStore.addLayers(layer1, layer2, layer3)
      expect(mapStore.layers.length).toBe(3)
      expect(mapStore.layers[0]).toStrictEqual(layer1)
      expect(mapStore.layers[1]).toStrictEqual(layer2)
      expect(mapStore.layers[2]).toStrictEqual(layer3)
      mapStore.reorderLayers([layer2.id, layer3.id, layer1.id])
      expect(mapStore.layers.length).toBe(3)
      expect(mapStore.layers[0]).toStrictEqual(layer2)
      expect(mapStore.layers[1]).toStrictEqual(layer3)
      expect(mapStore.layers[2]).toStrictEqual(layer1)
      mapStore.reorderLayers([layer3.id, layer2.id, layer4.id])
      expect(mapStore.layers[0]).toStrictEqual(layer1)
      expect(mapStore.layers[1]).toStrictEqual(layer3)
      expect(mapStore.layers[2]).toStrictEqual(layer2)
    })

    it('reorder layers, must return new ref to array', () => {
      const mapStore = useMapStore()
      mapStore.addLayers(layer1, layer2)
      expect(mapStore.layers.length).toBe(2)
      const layers = mapStore.layers
      mapStore.reorderLayers([layer2.id, layer3.id, layer1.id])
      const layersReordered = mapStore.layers
      expect(layersReordered).not.toBe(layers)
    })

    it('has layer', () => {
      const mapStore = useMapStore()
      expect(mapStore.hasLayer(layer1.id)).toBe(false)
      expect(mapStore.hasLayer(layer2.id)).toBe(false)
      expect(mapStore.hasLayer(layer3.id)).toBe(false)
      expect(mapStore.hasLayer(layer4.id)).toBe(false)
      mapStore.addLayers(layer1, layer2, layer3)
      expect(mapStore.hasLayer(layer1.id)).toBe(true)
      expect(mapStore.hasLayer(layer2.id)).toBe(true)
      expect(mapStore.hasLayer(layer3.id)).toBe(true)
      expect(mapStore.hasLayer(layer4.id)).toBe(false)
    })

    it('change layer opacity', () => {
      const mapStore = useMapStore()
      mapStore.setLayerOpacity(layer3.id, 66)
      expect(mapStore.layers.length).toBe(0)
      mapStore.addLayers(layer1, layer2, layer3)
      mapStore.setLayerOpacity(layer2.id, 32)
      expect(mapStore.layers[0].opacity).toBe(undefined)
      expect(mapStore.layers[0].previousOpacity).toBe(undefined)
      expect(mapStore.layers[1].opacity).toBe(32)
      expect(mapStore.layers[1].previousOpacity).toBe(undefined)
      expect(mapStore.layers[2].opacity).toBe(undefined)
      expect(mapStore.layers[2].previousOpacity).toBe(undefined)
      mapStore.setLayerOpacity(layer2.id, 47)
      expect(mapStore.layers[0].opacity).toBe(undefined)
      expect(mapStore.layers[0].previousOpacity).toBe(undefined)
      expect(mapStore.layers[1].opacity).toBe(47)
      expect(mapStore.layers[1].previousOpacity).toBe(32)
      expect(mapStore.layers[2].opacity).toBe(undefined)
      expect(mapStore.layers[2].previousOpacity).toBe(undefined)
      mapStore.setLayerOpacity(layer4.id, 99)
      expect(mapStore.layers.length).toBe(3)
      expect(mapStore.layers[0].opacity).toBe(undefined)
      expect(mapStore.layers[0].previousOpacity).toBe(undefined)
      expect(mapStore.layers[1].opacity).toBe(47)
      expect(mapStore.layers[1].previousOpacity).toBe(32)
      expect(mapStore.layers[2].opacity).toBe(undefined)
    })
  })

  describe('Map Store -- Background layer', () => {
    it('set background layer', () => {
      const mapStore = useMapStore()
      expect(mapStore.bgLayer).toBe(undefined)
      mapStore.setBgLayer(backgroundLayer)
      expect(mapStore.bgLayer).toStrictEqual(backgroundLayer)
    })
    vi.mock('../composables/themes/themes.composable', () => {
      return {
        default: () => {
          return {
            findById: (id: any, node?: any): any => {
              expect(node).toBeUndefined()
              if (id === 2) return layer2
              if (id === 3) return layer3
              if (id === 4) return layer4
            },
          }
        },
      }
    })
    vi.stubGlobal('alert', vi.fn())
    it('layer exclusion', () => {
      const mapStore = useMapStore()
      expect(mapStore.bgLayer).toBe(undefined)
      mapStore.setBgLayer(backgroundLayer)
      expect(mapStore.bgLayer).toStrictEqual(backgroundLayer)
      useLayers().toggleLayer(2)
      expect(mapStore.layers.length).toBe(1)
      expect(window.alert).toHaveBeenCalledTimes(0)
      useLayers().toggleLayer(3)
      expect(window.alert).toHaveBeenCalledTimes(1)
      expect(mapStore.layers.length).toBe(2)
      expect(mapStore.bgLayer).toStrictEqual(null)
      useLayers().toggleLayer(4)
      expect(window.alert).toHaveBeenCalledTimes(2)
      expect(mapStore.layers.length).toBe(2)
      expect(mapStore.bgLayer).toStrictEqual(null)
    })
    it('bg exclusion', () => {
      const mapStore = useMapStore()
      expect(mapStore.bgLayer).toBe(undefined)
      mapStore.addLayers(layer2, layer3, layer4)
      expect(mapStore.layers.length).toBe(3)
      mapStore.setBgLayer(backgroundLayer)
      expect(mapStore.layers.length).toBe(3)
      useBackgroundLayer().setMapBackground(backgroundLayer)
      expect(mapStore.layers.length).toBe(1)
      expect(window.alert).toHaveBeenCalled()
      expect(mapStore.bgLayer).toStrictEqual(backgroundLayer)
    })
  })
  describe('Map Store -- 3D', () => {
    it('set is_3d_active', () => {
      const mapStore = useMapStore()
      expect(mapStore.is_3d_active).toBe(false)
      mapStore.setIs3dActive(true)
      expect(mapStore.is_3d_active).toStrictEqual(true)
    })
    it('set is_3d_mesh', () => {
      const mapStore = useMapStore()
      expect(mapStore.is_3d_mesh).toBe(false)
      mapStore.setIs3dMesh(true)
      expect(mapStore.is_3d_mesh).toStrictEqual(true)
    })
  })
})
