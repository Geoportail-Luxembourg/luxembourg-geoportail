import { describe, it, expect, vi, MockedFunction } from 'vitest'
import { printService, BASE_URL } from './print.service'
import { createTestingPinia } from '@pinia/testing'
import { LuxEncoder } from './mapfishprint/LuxEncoder'
import { PRINT_FORMAT } from './print.model'

global.fetch = vi.fn()

const mockFetch = (response: any) => {
  ;(fetch as MockedFunction<typeof fetch>).mockResolvedValue(
    response as unknown as Response
  )
}

createTestingPinia()

describe('PrintService', () => {
  it('should return default map scales if no metadata is available', () => {
    const scales = printService.getScales()
    expect(scales).toEqual([
      1500, 2500, 5000, 10000, 15000, 20000, 25000, 50000, 80000, 100000,
      125000, 200000, 250000, 400000,
    ])
  })

  it('should return correct layouts', () => {
    const layouts = printService.getLayouts()
    expect(layouts).toEqual([
      'A4 landscape',
      'A4 portrait',
      'A3 landscape',
      'A3 portrait',
      'A2 landscape',
      'A2 portrait',
      'A1 landscape',
      'A1 portrait',
      'A0 landscape',
      'A0 portrait',
    ])
  })

  it('should return correct size for A2 landscape layout', () => {
    const size = printService.getSize('A2 landscape')
    expect(size).toEqual([1558, 985])
  })

  it('should return correct nearest scale', () => {
    const nearestScale = printService.getNearestScale(1000, 'A2 landscape', 96)
    expect(nearestScale).toBe(125000)
  })

  it('should return correct print URL', async () => {
    vi.mocked(LuxEncoder.prototype).encodeMap = vi
      .fn()
      .mockResolvedValue({ layers: [] })
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({
        downloadURL:
          '/print/report/8a58a137-bb0a-4865-8187-066dd7c1c860@addda5ca-09e5-436a-b710-ddbdacc01eb8@5e7f570d-a4e7-4d0a-b76e-0854b0b12c2b',
        statusURL:
          '/print/status/8a58a137-bb0a-4865-8187-066dd7c1c860@addda5ca-09e5-436a-b710-ddbdacc01eb8@5e7f570d-a4e7-4d0a-b76e-0854b0b12c2b.json',
      }),
    }
    mockFetch(mockResponse as any)

    const url = await printService.print(
      {
        format: PRINT_FORMAT.PDF,
        layout: 'A4 portrait',
        scale: 25000,
        lang: 'en',
        resolution: 96,
        title: 'Test Print',
        legend: true,
        framestate: null,
      },
      PRINT_FORMAT.PDF
    )
    expect(url.statusURL).toBe(
      `${BASE_URL}/printproxy/status/8a58a137-bb0a-4865-8187-066dd7c1c860@addda5ca-09e5-436a-b710-ddbdacc01eb8@5e7f570d-a4e7-4d0a-b76e-0854b0b12c2b.json`
    )
  })

  it('should return correct job status', async () => {
    const mockResponse = {
      json: vi.fn().mockResolvedValue({
        status: 'done',
        done: true,
        downloadURL: '/print/download',
      }),
    }
    mockFetch(mockResponse as any)

    const status = await printService.getJobStatus(`${BASE_URL}/print/status`)
    expect(status).toEqual({
      status: 'done',
      done: true,
      downloadURL: `${BASE_URL}/printproxy/download`,
    })
  })

  it('should return correct legends', async () => {
    const mockLayer = {
      get: vi.fn().mockImplementation((key: string) => {
        if (key === 'metadata') {
          return {
            legend_name: 'Test Legend',
            max_dpi: '300',
          }
        }
        if (key === 'queryable_id') {
          return 'test-id'
        }
        if (key === 'label') {
          return 'Test Label'
        }
      }),
    }

    const legends = await printService.getLegends([mockLayer as any], 'en')
    expect(legends).toEqual([{ name: 'Test Legend' }])
  })
})
