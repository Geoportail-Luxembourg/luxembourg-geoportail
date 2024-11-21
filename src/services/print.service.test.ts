import { describe, it, expect, vi } from 'vitest'
import { printService, PRINT_FORMAT, BASE_URL } from './print.service'
import { createTestingPinia } from '@pinia/testing'

global.fetch = vi.fn()

const mockFetch = (response: any) => {
  ;(fetch as MockedFunction<typeof fetch>).mockResolvedValueOnce(
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
    const mockResponse = {
      json: vi.fn().mockResolvedValue({ statusURL: '/print/status' }),
    }
    mockFetch(mockResponse as any)

    const url = await printService.print(PRINT_FORMAT.PDF)
    expect(url).toBe(`${BASE_URL}/printproxy/status`)
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
})
