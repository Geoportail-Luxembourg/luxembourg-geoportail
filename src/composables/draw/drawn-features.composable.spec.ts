import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { Feature } from 'ol'
import { Point, LineString, Polygon, Circle } from 'ol/geom'

import { useDrawStore } from '@/stores/draw.store'
import useDrawnFeatures from './drawn-features.composable'

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: vi.fn().mockReturnValue({
      addLayer: vi.fn(),
    }),
  }),
}))

describe('useDrawnFeatures', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should add a feature to the collection and store', () => {
    const { addFeature } = useDrawnFeatures()
    const feature = new Feature(new Point([0, 0]))
    addFeature(feature)

    const drawStore = useDrawStore()
    expect(drawStore.drawnFeatures.length).toBe(1)
    expect(drawStore.drawnFeatures[0].getGeometry()?.getType()).toBe('Point')
  })

  it('should correctly get coordinates of Point geometry', () => {
    const { getFeatCoordinates } = useDrawnFeatures()
    const pointFeature = new Feature(new Point([1, 2]))
    const coords = getFeatCoordinates(pointFeature)
    expect(coords).toEqual([1, 2])
  })

  it('should correctly get midpoint of LineString geometry', () => {
    const { getFeatCoordinates } = useDrawnFeatures()
    const lineFeature = new Feature(
      new LineString([
        [0, 0],
        [2, 2],
      ])
    )
    const coords = getFeatCoordinates(lineFeature)
    expect(coords).toEqual([1, 1])
  })

  it('should correctly get interior point of Polygon geometry', () => {
    const { getFeatCoordinates } = useDrawnFeatures()
    const polygonFeature = new Feature(
      new Polygon([
        [
          [0, 0],
          [2, 2],
          [4, 0],
          [0, 0],
        ],
      ])
    )
    const coords = getFeatCoordinates(polygonFeature)
    expect(coords).toEqual([2, 1, 2])
  })

  it('should correctly get center of Circle geometry', () => {
    const { getFeatCoordinates } = useDrawnFeatures()
    const circleFeature = new Feature(new Circle([5, 5], 10))
    const coords = getFeatCoordinates(circleFeature)
    expect(coords).toEqual([5, 5])
  })
})
