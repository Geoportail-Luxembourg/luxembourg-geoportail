import { Feature } from 'ol'
import { Point, Polygon } from 'ol/geom'

import useMap from '@/composables/map/map.composable'

import { getFeaturesExtent, fitToView } from './map.utils'

vi.mock('@/composables/map/map.composable', () => ({
  default: vi.fn(),
}))

function pointFeature(x: number, y: number) {
  return new Feature({ geometry: new Point([x, y]) })
}

describe('map.utils', () => {
  describe('#getFeaturesExtent', () => {
    it('returns null for an empty feature list', () => {
      expect(getFeaturesExtent([])).toBeNull()
    })

    it('returns null for a single point (degenerate extent)', () => {
      const extent = getFeaturesExtent([pointFeature(6.1, 49.6)])
      expect(extent).toBeNull()
    })

    it('extends the extent with every feature geometry', () => {
      const extent = getFeaturesExtent([
        pointFeature(6.1, 49.6),
        pointFeature(6.5, 49.8),
      ])
      expect(extent).toStrictEqual([6.1, 49.6, 6.5, 49.8])
    })

    it('skips features without geometry', () => {
      const withoutGeometry = new Feature()
      const extent = getFeaturesExtent([
        withoutGeometry,
        pointFeature(6.1, 49.6),
        pointFeature(6.5, 49.8),
      ])
      expect(extent).toStrictEqual([6.1, 49.6, 6.5, 49.8])
    })

    it('returns null when no feature has a geometry', () => {
      expect(getFeaturesExtent([new Feature(), new Feature()])).toBeNull()
    })

    it('handles polygon geometries', () => {
      const polygon = new Feature({
        geometry: new Polygon([
          [
            [6.1, 49.6],
            [6.5, 49.6],
            [6.5, 49.8],
            [6.1, 49.8],
            [6.1, 49.6],
          ],
        ]),
      })
      const extent = getFeaturesExtent([polygon])
      expect(extent).toStrictEqual([6.1, 49.6, 6.5, 49.8])
    })
  })

  describe('#fitToView', () => {
    const fit = vi.fn()
    const getSize = vi.fn(() => [800, 600])

    beforeEach(() => {
      vi.mocked(useMap).mockReturnValue({
        getOlMap: () => ({
          getView: () => ({ fit }),
          getSize,
        }),
      } as never)
    })

    it('fits the view to the given extent', () => {
      const extent = [6.1, 49.6, 6.5, 49.8] as [number, number, number, number]
      fitToView(extent)
      expect(fit).toHaveBeenCalledWith(extent, { size: [800, 600] })
    })

    it('does nothing for a null extent', () => {
      fitToView(null)
      expect(fit).not.toHaveBeenCalled()
    })

    it('does nothing for an undefined extent', () => {
      fitToView(undefined)
      expect(fit).not.toHaveBeenCalled()
    })

    it('does nothing when the map is not available', () => {
      vi.mocked(useMap).mockReturnValue({
        getOlMap: () => undefined,
      } as never)
      fitToView([6.1, 49.6, 6.5, 49.8])
      expect(fit).not.toHaveBeenCalled()
    })
  })
})
