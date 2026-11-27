import { describe, it, expect, vi, afterEach } from 'vitest'
import { fetchProfileJson } from './api-profile.service'

describe('Fetch Profile Service', () => {
  const PROFILE_URL = import.meta.env.VITE_PROFILE_URL
  const mockGeom =
    '{"type":"LineString","coordinates":[[102,0],[103,1],[104,0],[105,1]]}'

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('posts the line to the profile service and returns its JSON', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response('{"someKey":"someValue"}', { status: 200 })
      )
    vi.stubGlobal('fetch', fetchMock)

    const result = await fetchProfileJson(mockGeom, 123, 'dhm', 50)

    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe(PROFILE_URL)
    expect(init.method).toBe('POST')
    expect(Object.fromEntries(init.body)).toEqual({
      geom: mockGeom,
      nbPoints: '50',
      layers: 'dhm',
      id: '123',
    })
    expect(result).toEqual({ someKey: 'someValue' })
  })

  it('should throw an error when the response is not ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('boom', { status: 500 }))
    )
    vi.spyOn(console, 'error').mockImplementation(() => {})

    await expect(fetchProfileJson(mockGeom, 123)).rejects.toThrow(
      'Error while trying to get profile'
    )
  })
})
