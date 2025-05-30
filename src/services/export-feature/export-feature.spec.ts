import { Feature, Map } from 'ol'
import {
  Geometry,
  GeometryCollection,
  MultiLineString,
  Point,
  Circle,
  LineString,
} from 'ol/geom'

import { PROJECTION_WGS84 } from '@/composables/map/map.composable'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { convertCircleFeatureToPolygon } from '@/composables/draw/draw-utils'
import { ExportFeature } from './export-feature'

vi.mock('@/composables/draw/draw-utils', () => ({
  convertCircleFeatureToPolygon: vi.fn(),
}))

vi.mock('@/services/utils', () => ({
  downloadFile: vi.fn(),
  sanitizeFilename: vi.fn((filename: string) => filename),
}))

describe('ExportFeature', () => {
  let exportFeature: ExportFeature<Feature<Geometry>>
  const mapMock = {
    getView: vi.fn(() => ({
      getProjection: vi.fn(() => mockProjection),
    })),
  } as unknown as Map
  const mockProjection = {
    getCode: vi.fn().mockReturnValue('EPSG:3857'),
  }

  beforeEach(() => {
    exportFeature = new (class extends ExportFeature<Feature<Geometry>> {
      export() {}
      generateContent() {}
    })(mapMock)
  })

  it('should initialize encodeOptions with correct projections', () => {
    expect(exportFeature.encodeOptions.dataProjection).toBe(PROJECTION_WGS84)
    expect(exportFeature.encodeOptions.featureProjection).toBe(mockProjection)
  })

  it('should explode features with GeometryCollection', () => {
    const geom1 = new Point([0, 0])
    const geom2 = new Point([1, 1])
    const geometryCollection = new GeometryCollection([geom1, geom2])

    const feature = new Feature<Geometry>(geometryCollection)
    const exploded = exportFeature.exploseFeatures(feature)

    expect(exploded.length).toBe(2)
    expect(exploded[0].getGeometry()).toEqual(geom1)
    expect(exploded[1].getGeometry()).toEqual(geom2)
  })

  it('should explode features with MultiLineString', () => {
    const line1 = new LineString([
      [0, 0],
      [1, 1],
    ])
    const line2 = new LineString([
      [78.65, -32.65],
      [-98.65, 12.65],
    ])
    const multiLineString = new MultiLineString([
      line1.getCoordinates(),
      line2.getCoordinates(),
    ])

    const feature = new Feature<Geometry>(multiLineString)
    const exploded = exportFeature.exploseFeatures(feature)

    expect(exploded.length).toBe(2)
    expect((<LineString>exploded[0].getGeometry())?.getCoordinates()).toEqual(
      line1.getCoordinates()
    )
    expect((<LineString>exploded[1].getGeometry())?.getCoordinates()).toEqual(
      line2.getCoordinates()
    )
  })

  it('should convert Circle to Polygon when exploding features', () => {
    const circle = new Circle([0, 0], 5)
    const feature = new Feature<Geometry>(circle)
    const polygonFeatureMock = new Feature()

    ;(<any>convertCircleFeatureToPolygon).mockReturnValue(polygonFeatureMock)

    const exploded = exportFeature.exploseFeatures(feature)

    expect(convertCircleFeatureToPolygon).toHaveBeenCalledWith(
      expect.any(DrawnFeature)
    )
    expect(exploded[0]).toBe(polygonFeatureMock)
  })

  it('should clone features with new geometry', () => {
    const originalGeometry = new Point([0, 0])
    const newGeometry = new Point([1, 1])
    const feature = new Feature(originalGeometry)

    const clonedFeature = exportFeature.cloneFeatureWithGeom(
      feature,
      newGeometry
    )

    expect(clonedFeature).not.toBe(feature)
    expect(clonedFeature.getGeometry()).toBe(newGeometry)
  })
})
