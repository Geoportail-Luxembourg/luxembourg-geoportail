import { Feature } from 'ol'
import { Point, LineString, Polygon, MultiLineString } from 'ol/geom'
import { ExportFeatureGpx } from './export-feature-gpx'
import { vi } from 'vitest'

describe('ExportFeatureGpx', () => {
  let exportFeatureGpx: ExportFeatureGpx
  let features: Feature[]

  beforeEach(() => {
    const mockMap = {
      on: vi.fn(),
      getView: vi.fn(() => ({
        getProjection: vi.fn(() => 'EPSG:4326'),
      })),
      getSize: vi.fn(() => [100, 100]),
    }
    exportFeatureGpx = new ExportFeatureGpx(mockMap as any)
    features = [
      new Feature({
        geometry: new Point([0, 0]),
        name: 'Point 1',
      }),
      new Feature({
        geometry: new LineString([
          [0, 0],
          [1, 1],
        ]),
        name: 'Line 1',
      }),
      new Feature({
        geometry: new Polygon([
          [
            [0, 0],
            [1, 1],
            [1, 0],
            [0, 0],
          ],
        ]),
        name: 'Polygon 1',
      }),
    ]

    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/test')
    global.URL.revokeObjectURL = vi.fn()
  })

  describe('#export', () => {
    it('should call download with correct parameters', () => {
      const downloadSpy = vi.spyOn(exportFeatureGpx, 'download')
      const fileName = 'testFile'

      exportFeatureGpx.export(features, fileName, true)

      expect(downloadSpy).toHaveBeenCalledWith(
        fileName,
        expect.any(String),
        'gpx',
        'application/gpx'
      )
    })
  })

  describe('#prepareFeatures', () => {
    it('should prepare features correctly', () => {
      const preparedFeatures = exportFeatureGpx.prepareFeatures(features, true)

      expect(preparedFeatures.length).toBeGreaterThan(0)
    })
  })

  describe('#generateContent', () => {
    it('should generate GPX content', () => {
      const content = exportFeatureGpx.generateContent(features, 'testFile')
      expect(content).toBe(
        '<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="OpenLayers"><metadata><name>testFile</name></metadata><wpt lat="0" lon="0"><name>Point 1</name></wpt><rte><name>Line 1</name><rtept lat="0" lon="0"/><rtept lat="1" lon="1"/></rte></gpx>'
      )
    })
  })

  describe('#changePolygonToLine', () => {
    it('should convert polygon to line', () => {
      const changedFeatures = exportFeatureGpx['changePolygonToLine'](features)
      expect(changedFeatures[2].getGeometry()?.getType()).toBe('LineString')
    })
  })

  describe('#changeMultilineToLine', () => {
    it('should convert multiline to line', () => {
      const multiLineFeature = new Feature({
        geometry: new MultiLineString([
          [
            [0, 0],
            [1, 1],
          ],
          [
            [2, 2],
            [3, 3],
          ],
        ]),
        name: 'MultiLine',
      })

      const changedFeatures = exportFeatureGpx['changeMultilineToLine']([
        multiLineFeature,
      ])
      expect(changedFeatures.length).toBe(2)
      expect(changedFeatures[0].getGeometry()?.getType()).toBe('LineString')
    })
  })

  describe('#changeLineToMultiline', () => {
    it('should convert line to multiline', () => {
      const changedFeatures =
        exportFeatureGpx['changeLineToMultiline'](features)
      expect(changedFeatures[1].getGeometry()?.getType()).toBe(
        'MultiLineString'
      )
    })
  })

  describe('#orderFeaturesForGpx', () => {
    it('should order features correctly', () => {
      const orderedFeatures = exportFeatureGpx['orderFeaturesForGpx'](features)

      expect(orderedFeatures[0].getGeometry()?.getType()).toBe('Point')
      expect(orderedFeatures[1].getGeometry()?.getType()).toBe('LineString')
    })
  })
})
