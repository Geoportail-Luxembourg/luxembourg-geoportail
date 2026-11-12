import { describe, expect, it } from 'vitest'
import { getQRUrlForMyMaps } from './template-utilities'

describe('getQRUrlForMyMaps', () => {
  it('encodes the geoportal map link', () => {
    expect(
      getQRUrlForMyMaps('abc', 'https://qr.lu/qr', 'https://map.lu/')
    ).toBe('https://qr.lu/qr?url=https%3A%2F%2Fmap.lu%2F%3Fmap_id%3Dabc')
  })
})
