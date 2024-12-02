import { describe, it, expect, vi } from 'vitest'
import { Map } from 'ol'
import { ExportFeatureProfileCsv } from './export-feature-profile-csv'
import { DrawnFeature } from '@/services/draw/drawn-feature'

vi.mock('ol/proj', () => ({
  toLonLat: vi.fn(coords => coords.map((c: number) => c + 100)),
}))

vi.mock('@/services/utils', () => ({
  downloadFile: vi.fn(),
  sanitizeFilename: vi.fn(),
}))

const mockMap = <Map>(<unknown>{
  getView: () => ({
    getProjection: () => 'EPSG:3857',
  }),
})
const exporter = new ExportFeatureProfileCsv(mockMap)
const mockProfileData = [
  { dist: 0, values: { dhm: 100 }, x: 1000, y: 2000 },
  { dist: 10, values: { dhm: 150 }, x: 1500, y: 2500 },
]
const mockFeatureWithData = <DrawnFeature>(<unknown>{
  getProfile: vi.fn(() => Promise.resolve(mockProfileData)),
})
const expectedCsvContent =
  'dist,MNT,y,x,lon,lat\n0,100,1000,2000,1100,2100\n10,150,1500,2500,1600,2600\n'

describe('ExportFeatureProfileCsv', () => {
  describe('#export', () => {
    it('Exports a profile into a CSV file', async () => {
      const downloadSpy = vi.spyOn(exporter, 'download')

      await exporter.export(mockFeatureWithData, 'test-profile')

      expect(downloadSpy).toHaveBeenCalledWith(
        'test-profile',
        expectedCsvContent,
        'csv',
        'application/csv'
      )
    })
  })

  describe('#generateContent', () => {
    it('Generates content correctly', async () => {
      const content = await exporter.generateContent(mockFeatureWithData)

      expect(content).toBe(expectedCsvContent)
    })

    it('Generates empty content if profileData invalid', async () => {
      const mockFeatureNoData = <DrawnFeature>(<unknown>{
        getProfile: () => Promise.resolve(null),
      })
      const content = await exporter.generateContent(mockFeatureNoData)

      expect(content).toBe('')
    })
  })
})
