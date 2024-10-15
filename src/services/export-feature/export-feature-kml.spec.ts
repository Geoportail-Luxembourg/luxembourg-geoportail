import { Feature, Map } from 'ol'
import { Point } from 'ol/geom'
import { ExportFeatureKml } from './export-feature-kml'

describe('ExportFeatureKml', () => {
  let exportFeatureKml: ExportFeatureKml
  let features: Feature<Point>[]

  beforeEach(() => {
    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/test')
    global.URL.revokeObjectURL = vi.fn()

    exportFeatureKml = new ExportFeatureKml(new Map({}))
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
    it('should generate KML content from features', () => {
      const content = exportFeatureKml.generateContent(features)
      expect(content).toBe(
        '<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd"><Document><Placemark><name>Point 1</name><Point><coordinates>0,0</coordinates></Point></Placemark><Placemark><name>Point 2</name><Point><coordinates>0.000008983152841195214,0.000008983152838482056</coordinates></Point></Placemark></Document></kml>'
      )
    })
  })

  describe('#export', () => {
    it('should call download method with correct parameters', () => {
      const downloadSpy = vi.spyOn(exportFeatureKml, 'download')
      const fileName = 'testFile'

      exportFeatureKml.export(features, fileName)

      expect(downloadSpy).toHaveBeenCalledWith(
        fileName,
        expect.stringContaining('<kml'),
        'kml',
        'application/vnd.google-earth.kml+xml'
      )
    })
  })
})
