import { Mock } from 'vitest'
import {
  fetchPublicSymbols,
  fetchPrivateSymbols,
  uploadSymbol,
  clearCache,
  SYMBOLS_URL,
  SYMBOL_UPLOAD_URL,
} from './api-symbols.service'
import { fetchApi } from './api.service'

vi.mock('./api.service', () => ({
  fetchApi: vi.fn(),
}))

describe('Fetch Symbols Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    clearCache()
  })

  it('should fetch public symbols and cache them', async () => {
    const mockResponse = {
      results: [
        {
          id: 1,
          name: 'Public Symbol 1',
          url: 'http://example.com/1',
          symboltype: 'public',
        },
        {
          id: 2,
          name: 'Public Symbol 2',
          url: 'http://example.com/2',
          symboltype: 'public',
        },
      ],
    }

    ;(<Mock>fetchApi).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    })

    const symbols = await fetchPublicSymbols()
    expect(fetchApi).toHaveBeenCalledWith(
      SYMBOLS_URL,
      { symboltype: 'public' },
      'GET'
    )
    expect(symbols).toEqual(mockResponse.results)
    await fetchPublicSymbols()
    expect(fetchApi).toHaveBeenCalledTimes(1)
  })

  it('should fetch private symbols and cache them', async () => {
    const mockResponse = {
      results: [
        {
          id: 3,
          name: 'Private Symbol 1',
          url: 'http://example.com/private-1',
          symboltype: 'private',
        },
        {
          id: 4,
          name: 'Private Symbol 2',
          url: 'http://example.com/private-2',
          symboltype: 'private',
        },
      ],
    }

    ;(<Mock>fetchApi).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    })

    const symbols = await fetchPrivateSymbols()
    expect(fetchApi).toHaveBeenCalledWith(
      SYMBOLS_URL,
      { symboltype: 'us' },
      'GET'
    )
    expect(symbols).toEqual(mockResponse.results)
    await fetchPrivateSymbols()
    expect(fetchApi).toHaveBeenCalledTimes(1)
  })

  it('should force refresh public symbols when forceRefresh is true', async () => {
    const mockResponse = {
      results: [
        {
          id: 5,
          name: 'Public Symbol 3',
          url: 'http://example.com/5',
          symboltype: 'public',
        },
      ],
    }

    ;(<Mock>fetchApi).mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    })

    await fetchPublicSymbols()
    await fetchPublicSymbols(true)
    expect(fetchApi).toHaveBeenCalledTimes(2)
  })

  it('should upload a symbol file', async () => {
    const mockResponse = { success: true }

    ;(<Mock>fetchApi).mockResolvedValue(mockResponse)

    const file = new File(['dummy content'], 'symbol.png', {
      type: 'image/png',
    })
    const response = await uploadSymbol(file)

    expect(fetchApi).toHaveBeenCalledWith(
      SYMBOL_UPLOAD_URL,
      expect.any(FormData),
      'POST'
    )
    expect(response).toEqual({ success: true })
  })

  it('should clear the cache', async () => {
    ;(<Mock>fetchApi).mockResolvedValue({
      json: () => vi.fn(),
    })

    await fetchPublicSymbols()
    clearCache()
    await fetchPublicSymbols()

    expect(fetchApi).toHaveBeenCalledTimes(2)
  })
})
