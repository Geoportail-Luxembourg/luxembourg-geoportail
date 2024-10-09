import { Feature, Map } from 'ol'
import { Point } from 'ol/geom'
import { ExportFeatureShapefile } from './export-feature-shapefile'

describe('ExportFeatureShapefile', () => {
  let exportFeatureShapefile: ExportFeatureShapefile
  let features: Feature[]

  beforeEach(() => {
    exportFeatureShapefile = new ExportFeatureShapefile(new Map({}))
    features = [
      new Feature({
        geometry: new Point([0, 0]),
        name: 'Point 1',
      }),
    ]

    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/test')
    global.URL.revokeObjectURL = vi.fn()
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      blob: vi
        .fn()
        .mockResolvedValue(new Blob(['test'], { type: 'application/zip' })),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('#export', () => {
    it('should send a POST request and download the shapefile', async () => {
      const downloadSpy = vi.spyOn(exportFeatureShapefile, 'download')
      const fileName = 'testFile'

      await exportFeatureShapefile.export(features, fileName)

      expect(fetch).toHaveBeenCalledWith(
        import.meta.env.VITE_URL_MYMAPS_EXPORT_FILE,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: expect.stringContaining(
            'format=shape&name=testFile&doc=%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%7B%22type%22%3A%22Feature%22%2C%22geometry%22%3A%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B0%2C0%5D%7D%2C%22properties%22%3A%7B%22name%22%3A%22Point+1%22%7D%7D%5D%7D'
          ),
        }
      )

      expect(downloadSpy).toHaveBeenCalledWith(
        fileName,
        expect.any(Blob),
        'zip',
        'application/octet-stream'
      )
    })

    it('should throw an error if the response is not ok', async () => {
      ;(global.fetch as vi.Mock).mockResolvedValueOnce({
        ok: false,
        blob: vi.fn(),
      })

      await expect(
        exportFeatureShapefile.export(features, 'testFile')
      ).rejects.toThrow('Error while requesting shapefile')
    })
  })

  describe('#generateContent', () => {
    it('should generate GeoJSON content from features', () => {
      const content = exportFeatureShapefile.generateContent(features)
      expect(content).toBe(
        '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[0,0]},"properties":{"name":"Point 1"}}]}'
      )
    })
  })

  describe('#fetchFileContent', () => {
    it('should send a POST request to fetch file content', async () => {
      const content = '{"type":"FeatureCollection"}'
      const fileName = 'testFile'

      const blob = await exportFeatureShapefile.fetchFileContent(
        content,
        fileName
      )

      expect(fetch).toHaveBeenCalledWith('mymaps/exportgpxkml', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          doc: content,
          format: 'shape',
          name: fileName,
        }),
      })

      expect(blob).toBeInstanceOf(Blob)
    })
  })
})
