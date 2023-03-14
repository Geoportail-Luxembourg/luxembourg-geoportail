import isV3 from './storage-rules-version.helper'

describe('Storage rules version V3', () => {
  describe('When params list is empty in (url) storage', () => {
    it('is a V3 version', () => {
      expect(isV3({})).toBe(true)
    })
  })

  describe('When there is only one param in (url) storage', () => {
    it('is has only one (specific) param', () => {
      expect(isV3({ lang: '' })).toBe(true)
      expect(isV3({ param1: '' })).toBe(false)
      expect(isV3({ param1: '', param2: '' })).toBe(false)
    })

    it('is a V3 version for specific given params', () => {
      expect(isV3({ ipv6: '' })).toBe(true)
      expect(isV3({ applogin: '' })).toBe(true)
      expect(isV3({ localforage: '' })).toBe(true)
      expect(isV3({ fid: '' })).toBe(true)
      expect(isV3({ lang: '' })).toBe(true)
      expect(isV3({ address: '' })).toBe(true)
      expect(isV3({ debug: '' })).toBe(true)
    })
  })

  describe('When there is only two params in (url) storage', () => {
    it('is has only two (specific) params', () => {
      expect(isV3({ applogin: '123', localforage: 'test' })).toBe(true)
      expect(isV3({ param1: '', param2: '' })).toBe(false)
    })

    it('is a V3 version for specific given params', () => {
      expect(isV3({ applogin: '', localforage: '' })).toBe(true)
      expect(isV3({ debug: '', fid: '' })).toBe(true)
      expect(isV3({ lang: '', fid: '' })).toBe(true)
      expect(isV3({ debug: '', lang: '' })).toBe(true)
      expect(isV3({ debug: '', address: '' })).toBe(true)
      expect(isV3({ lang: '', address: '' })).toBe(true)
      expect(isV3({ lang: '', param1: '' })).toBe(false)
    })
  })

  describe('When there is only three params in (url) storage', () => {
    it('is has only two (specific) params', () => {
      expect(
        isV3({ ipv6: 'testvalue', applogin: 'test', localforage: 'test' })
      ).toBe(true)
      expect(isV3({ param1: '', param2: '', param3: '' })).toBe(false)
    })

    it('is a V3 version for specific given params', () => {
      expect(isV3({ ipv6: '', applogin: '', localforage: '' })).toBe(true)
      expect(isV3({ debug: '', fid: '', lang: '' })).toBe(true)
      expect(isV3({ debug: '', address: '', lang: '' })).toBe(true)
      expect(isV3({ debug: '', address: '', lang123: '' })).toBe(false)
    })
  })
})
