import { describe, it, expect } from 'vitest'
import View from 'ol/View'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { transform } from 'ol/proj'
import {
  entryExtent,
  entryLocationKey,
  bookmarkLocation,
  entryName,
  coordinateName,
} from './bookmark-location'

const LUX_POINT = [6.13, 49.61]

function geoJsonPoint(): object {
  return {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: LUX_POINT },
    properties: { label: 'Luxembourg City' },
  }
}

function geoJsonBigSquare(): object {
  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [6.0, 49.5],
          [6.3, 49.5],
          [6.3, 49.8],
          [6.0, 49.8],
          [6.0, 49.5],
        ],
      ],
    },
    properties: {},
  }
}

describe('bookmark-location', () => {
  describe('#entryExtent', () => {
    it('projects GeoJSON coordinates from EPSG:4326 to the map projection', () => {
      const extent = entryExtent(geoJsonPoint(), 'EPSG:3857')

      expect(extent).not.toBeNull()
      const [lon, lat] = extent!
      const back = transform([lon, lat], 'EPSG:3857', 'EPSG:4326') as [
        number,
        number,
      ]
      expect(back[0]).toBeCloseTo(LUX_POINT[0], 4)
      expect(back[1]).toBeCloseTo(LUX_POINT[1], 4)
    })

    it('passes OL feature extents through unchanged', () => {
      const feature = new Feature(new Point([1000, 2000]))

      expect(entryExtent(feature, 'EPSG:3857')).toEqual([
        1000, 2000, 1000, 2000,
      ])
    })

    it('returns null without geometry', () => {
      expect(entryExtent({ type: 'Feature' }, 'EPSG:3857')).toBeNull()
    })
  })

  describe('#entryLocationKey', () => {
    it('is stable for the same location', () => {
      expect(entryLocationKey(geoJsonPoint(), 'EPSG:3857')).toBe(
        entryLocationKey(geoJsonPoint(), 'EPSG:3857')
      )
    })

    it('differs for different locations', () => {
      const other = {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [6.5, 49.9] },
      }
      expect(entryLocationKey(geoJsonPoint(), 'EPSG:3857')).not.toBe(
        entryLocationKey(other, 'EPSG:3857')
      )
    })

    it('returns undefined without geometry', () => {
      expect(entryLocationKey({}, 'EPSG:3857')).toBeUndefined()
    })
  })

  describe('#bookmarkLocation', () => {
    it('keeps the current zoom for point results', () => {
      const view = new View({ center: [0, 0], zoom: 5 })

      const location = bookmarkLocation(geoJsonPoint(), view, [1000, 800])

      expect(location).toBeDefined()
      expect(location!.zoom).toBe(5)
    })

    it('fits area results and clamps the zoom', () => {
      const view = new View({ center: [0, 0], zoom: 5 })

      const location = bookmarkLocation(geoJsonBigSquare(), view, [1000, 800])

      expect(location).toBeDefined()
      expect(location!.zoom).toBeLessThanOrEqual(17)
    })

    it('returns undefined without geometry', () => {
      const view = new View({ center: [0, 0], zoom: 5 })

      expect(bookmarkLocation({}, view, [1000, 800])).toBeUndefined()
    })
  })

  describe('#entryName', () => {
    it('uses the GeoJSON properties label', () => {
      expect(entryName(geoJsonPoint(), 'fallback')).toBe('Luxembourg City')
    })

    it('uses the OL feature label', () => {
      const feature = new Feature(new Point([0, 0]))
      feature.set('label', 'Some place')
      expect(entryName(feature, 'fallback')).toBe('Some place')
    })

    it('falls back to the given label', () => {
      expect(entryName({}, 'fallback')).toBe('fallback')
    })
  })

  describe('#coordinateName', () => {
    it('formats a lon/lat string with 5 decimals', () => {
      const center = transform(LUX_POINT, 'EPSG:4326', 'EPSG:3857') as [
        number,
        number,
      ]
      expect(coordinateName(center)).toBe('6.13000, 49.61000')
    })
  })
})
