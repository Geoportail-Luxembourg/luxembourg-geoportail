import { Map, View } from 'ol'
import { Extent } from 'ol/extent'
import { Geometry } from 'ol/geom'

import { DrawnFeature } from './drawn-feature'
import useMap from '@/composables/map/map.composable'

const mockViewSize = [99, 100]

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: vi.fn(() => ({
      getSize: vi.fn(() => mockViewSize),
      getView: vi.fn(() => {}),
    })),
  }),
}))

describe('DrawnFeature', () => {
  let drawnFeature: DrawnFeature
  let mockMap: Map

  beforeEach(() => {
    drawnFeature = new DrawnFeature()
    mockMap = useMap().getOlMap()
    drawnFeature.map = mockMap
  })

  it('should call map.getView().fit with correct extent and size', () => {
    const mockExtent: Extent = [0, 0, 10, 10]
    const mockGeometry = {
      getExtent: vi.fn(() => mockExtent),
    } as unknown as Geometry

    vi.spyOn(drawnFeature, 'getGeometry').mockReturnValue(mockGeometry)
    vi.spyOn(drawnFeature.map, 'getView').mockReturnValue({
      fit: vi.fn(() => {}),
    } as unknown as View)

    drawnFeature.fit()

    expect(mockMap.getView().fit).toHaveBeenCalledWith(mockExtent, {
      size: mockViewSize,
    })
  })
})
