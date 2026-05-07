import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { Feature } from 'ol'
import { Circle, LineString, Point, Polygon } from 'ol/geom'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { useDrawStore } from '@/stores/draw.store'
import useDrawnFeatures from './drawn-features.composable'

vi.mock('i18next', () => ({
  t: vi.fn(key => key),
}))

vi.mock('@/composables/my-maps/my-maps.composable', () => ({
  default: () => ({
    isMyMapEditable: { value: undefined },
  }),
}))

describe('useDrawnFeatures', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('generates a drawn point feature with a default label', () => {
    const { generateDrawnFeature } = useDrawnFeatures()

    const drawnFeature = generateDrawnFeature(new Feature(new Point([0, 0])))

    expect(drawnFeature.featureType).toBe('drawnPoint')
    expect(drawnFeature.label).toBe('Point 1')
    expect(drawnFeature.display_order).toBe(0)
    expect(drawnFeature.editable).toBe(true)
  })

  it('uses the current drawn feature count when building the default label', () => {
    const drawStore = useDrawStore()
    drawStore.setDrawnFeatures([{ id: 'existing-feature' } as DrawnFeature])

    const { generateDrawnFeature } = useDrawnFeatures()
    const drawnFeature = generateDrawnFeature(new Feature(new Point([0, 0])))

    expect(drawnFeature.label).toBe('Point 2')
    expect(drawnFeature.display_order).toBe(1)
  })

  it('preserves an explicit feature name as label', () => {
    const { generateDrawnFeature } = useDrawnFeatures()
    const feature = new Feature(
      new LineString([
        [0, 0],
        [2, 2],
      ])
    )
    feature.set('name', 'Custom line')

    const drawnFeature = generateDrawnFeature(feature)

    expect(drawnFeature.featureType).toBe('drawnLine')
    expect(drawnFeature.label).toBe('Custom line')
  })

  it('maps polygon geometries to drawn polygons', () => {
    const { generateDrawnFeature } = useDrawnFeatures()
    const feature = new Feature(
      new Polygon([
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ])
    )

    const drawnFeature = generateDrawnFeature(feature)

    expect(drawnFeature.featureType).toBe('drawnPolygon')
  })

  it('maps circles to drawn circles when circle draw mode is active', () => {
    const drawStore = useDrawStore()
    drawStore.setDrawActiveState('drawCircle')

    const { generateDrawnFeature } = useDrawnFeatures()
    const drawnFeature = generateDrawnFeature(
      new Feature(new Circle([5, 5], 10))
    )

    expect(drawnFeature.featureType).toBe('drawnCircle')
  })
})
