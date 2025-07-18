import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { Feature } from 'ol'
import { Point, LineString, Polygon, Circle } from 'ol/geom'

import { getFeatCoordinates } from './ol-feature.utils'

describe('ol feature utils', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should correctly get coordinates of Point geometry', () => {
    const pointFeature = new Feature(new Point([1, 2]))
    const coords = getFeatCoordinates(pointFeature)
    expect(coords).toEqual([1, 2])
  })

  it('should correctly get midpoint of LineString geometry', () => {
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
    const circleFeature = new Feature(new Circle([5, 5], 10))
    const coords = getFeatCoordinates(circleFeature)
    expect(coords).toEqual([5, 5])
  })
})
