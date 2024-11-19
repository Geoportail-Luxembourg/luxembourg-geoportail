import { describe, it, expect, vi, beforeEach, MockedFunction } from 'vitest'
import { fetchProfileJson } from './api-profile.service'
import { fetchApi } from './api.service'

vi.mock('./api.service', () => ({
  fetchApi: vi.fn(),
}))

describe('Fetch Profile Service', () => {
  const mockFetchApi = fetchApi as MockedFunction<typeof fetchApi>
  const PROFILE_URL = import.meta.env.VITE_PROFILE_URL

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return the JSON response when fetchApi resolves successfully', async () => {
    const mockId = 123
    const mockGeom =
      '{"type":"LineString","coordinates":[[102,0],[103,1],[104,0],[105,1]]}'
    const mockResponse = <Response>{
      ok: true,
      json: async () => ({
        someKey: 'someValue',
      }),
    }
    mockFetchApi.mockResolvedValueOnce(mockResponse)

    const result = await fetchProfileJson(mockGeom, mockId, 'dhm', 50)
    expect(mockFetchApi).toHaveBeenCalledWith(
      PROFILE_URL,
      {
        geom: mockGeom,
        nbPoints: '50',
        layers: 'dhm',
        id: mockId + '',
      },
      'POST'
    )
    expect(result).toEqual({ someKey: 'someValue' })
  })

  it('should throw an error when the response is not ok', async () => {
    const mockId = 123
    const mockGeom =
      '{"type":"LineString","coordinates":[[102,0],[103,1],[104,0],[105,1]]}'
    const mockResponse = <Response>{
      ok: false,
      json: async () => ({}),
    }

    mockFetchApi.mockResolvedValueOnce(mockResponse)
    await expect(fetchProfileJson(mockGeom, mockId)).rejects.toThrow(
      'Error while trying to get profile'
    )
  })
})
