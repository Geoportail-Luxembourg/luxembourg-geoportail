import { describe, expect, it } from 'vitest'
import { luxTplUrls, parseRoleIds, resolveUrl } from './env'

describe('resolveUrl', () => {
  it('resolves a relative URL against the base', () => {
    expect(resolveUrl('/casipo/report/', 'https://map.lu/')).toBe(
      'https://map.lu/casipo/report/'
    )
  })

  it('keeps a relative URL without a base', () => {
    expect(resolveUrl('/casipo/report/')).toBe('/casipo/report/')
  })

  it('keeps an absolute URL', () => {
    expect(resolveUrl('https://files.lu/a.pdf', 'https://map.lu/')).toBe(
      'https://files.lu/a.pdf'
    )
  })

  it('returns an empty string for an unset var', () => {
    expect(resolveUrl(undefined, 'https://map.lu/')).toBe('')
  })
})

describe('luxTplUrls', () => {
  it('reads the env', () => {
    expect(luxTplUrls().downloadPdfUrl).toBe(
      import.meta.env.VITE_DOWNLOAD_PDF_URL
    )
  })
})

describe('parseRoleIds', () => {
  it('parses a comma separated list and skips invalid ids', () => {
    expect(parseRoleIds('1, 1864,x,')).toEqual([1, 1864])
  })
})
