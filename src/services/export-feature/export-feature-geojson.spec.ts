import { Feature, Map } from 'ol'
import { Point } from 'ol/geom'

import { ExportFeatureGeojson } from './export-feature-geojson'

describe('ExportFeatureGeojson', () => {
  let exportFeatureGeojson: ExportFeatureGeojson
  let features: Feature<Point>[]

  beforeEach(() => {
    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/test')
    global.URL.revokeObjectURL = vi.fn()

    const mapStub = {
      getView: () => ({
        getProjection: () => 'EPSG:3857',
      }),
    } as unknown as Map

    exportFeatureGeojson = new ExportFeatureGeojson(mapStub)
    features = [
      new Feature({
        geometry: new Point([0, 0]),
        name: 'Point 1',
      }),
      new Feature({
        geometry: new Point([1, 1]),
        name: 'Point 2',
      }),
    ]
  })

  describe('#generateContent', () => {
    it('should generate GeoJSON content from features', () => {
      const content = exportFeatureGeojson.generateContent(features)
      expect(content).toBe(
        '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[0,0]},"properties":{"name":"Point 1"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[0.000008983152841195214,0.000008983152838482056]},"properties":{"name":"Point 2"}}]}'
      )
    })
  })

  describe('#export', () => {
    it('should call download method with correct parameters', () => {
      const downloadSpy = vi.spyOn(exportFeatureGeojson, 'download')
      const fileName = 'testFile'

      exportFeatureGeojson.export(features, fileName)

      expect(downloadSpy).toHaveBeenCalledWith(
        fileName,
        expect.stringContaining('"type":"FeatureCollection"'),
        'geojson',
        'application/geo+json'
      )
    })
  })
})
