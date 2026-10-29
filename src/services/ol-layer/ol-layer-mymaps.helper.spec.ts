import VectorLayer from 'ol/layer/Vector'
import { setActivePinia, createPinia } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import {
  fetchMyMap,
  fetchMyMapFeatures,
} from '@/services/api/api-mymaps.service'

import olLayerMyMapsHelper from './ol-layer-mymaps.helper'

vi.mock('@/services/api/api-mymaps.service', () => ({
  fetchMyMap: vi.fn(),
  fetchMyMapFeatures: vi.fn(),
}))

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: vi.fn(() => undefined),
  }),
  PROJECTION_LUX: 'EPSG:2169',
  PROJECTION_WEBMERCATOR: 'EPSG:3857',
}))

const uuid = 'a1b2-c3d4'
const layerId = `mymaps||${uuid}`

const mapJson = { uuid, title: 'my map title' }
const featuresJson = {
  type: 'FeatureCollection' as const,
  features: [
    {
      type: 'Feature' as const,
      geometry: { type: 'Point', coordinates: [6.1, 49.6] },
      id: 42,
      properties: { map_id: uuid, display_order: 1 },
    },
  ],
}

describe('olLayerMyMapsHelper', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.mocked(fetchMyMap).mockResolvedValue(mapJson as never)
    vi.mocked(fetchMyMapFeatures).mockResolvedValue(featuresJson as never)
  })

  it('creates a vector layer', () => {
    const layer = olLayerMyMapsHelper.createOlLayer({
      id: layerId,
      name: 'my map title',
      layers: '',
      type: 'myMaps',
      imageType: 'image/png',
    })

    expect(layer).toBeInstanceOf(VectorLayer)
  })

  it('loads the mymaps features into the source as read only', async () => {
    const layer = olLayerMyMapsHelper.createOlLayer({
      id: layerId,
      name: 'my map title',
      layers: '',
      type: 'myMaps',
      imageType: 'image/png',
    })
    const source = layer.getSource()!
    const loader = (
      source as unknown as {
        loader_: (
          extent: number[],
          resolution: number,
          projection: unknown,
          success: (features: unknown[]) => void,
          failure: () => void
        ) => Promise<void>
      }
    ).loader_

    const success = vi.fn()
    const failure = vi.fn()
    await loader([0, 0, 1, 1], 1, null, success, failure)

    expect(fetchMyMap).toHaveBeenCalledWith(uuid)
    expect(fetchMyMapFeatures).toHaveBeenCalledWith(uuid)
    const features = source.getFeatures()
    expect(features.length).toBe(1)
    expect(features[0].editable).toBe(false)
    expect(success).toHaveBeenCalledWith(features)
    expect(failure).not.toHaveBeenCalled()
  })

  it('sets the layer name from the map title when the layer has none', async () => {
    const mapStore = useMapStore()
    mapStore.addLayers({
      id: layerId,
      name: '',
      layers: '',
      type: 'myMaps',
      imageType: 'image/png',
    })

    const layer = olLayerMyMapsHelper.createOlLayer(mapStore.layers[0])
    const source = layer.getSource()!
    const loader = (
      source as unknown as {
        loader_: (
          extent: number[],
          resolution: number,
          projection: unknown,
          success: (features: unknown[]) => void,
          failure: () => void
        ) => Promise<void>
      }
    ).loader_

    await loader([0, 0, 1, 1], 1, null, vi.fn(), vi.fn())

    expect(mapStore.layers[0].name).toBe('my map title')
  })

  it('calls failure when the fetch fails', async () => {
    vi.mocked(fetchMyMap).mockRejectedValue(new Error('boom'))

    const layer = olLayerMyMapsHelper.createOlLayer({
      id: layerId,
      name: 'my map title',
      layers: '',
      type: 'myMaps',
      imageType: 'image/png',
    })
    const source = layer.getSource()!
    const loader = (
      source as unknown as {
        loader_: (
          extent: number[],
          resolution: number,
          projection: unknown,
          success: (features: unknown[]) => void,
          failure: () => void
        ) => Promise<void>
      }
    ).loader_

    const success = vi.fn()
    const failure = vi.fn()
    await loader([0, 0, 1, 1], 1, null, success, failure)

    expect(failure).toHaveBeenCalled()
    expect(success).not.toHaveBeenCalled()
    expect(source.getFeatures().length).toBe(0)
  })
})
