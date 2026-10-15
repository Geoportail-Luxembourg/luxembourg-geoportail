import {
  encodeLayerIdForStorage,
  decodeLayerIdFromStorage,
} from './layer-id-storage'

describe('layer-id-storage', () => {
  describe('#encodeLayerIdForStorage', () => {
    it('encodes dashes as %2D', () => {
      expect(encodeLayerIdForStorage('mymaps||a1b2-c3d4')).toBe(
        'mymaps||a1b2%2Dc3d4'
      )
    })

    it('keeps numeric ids unchanged', () => {
      expect(encodeLayerIdForStorage(10)).toBe('10')
    })

    it('keeps ids without dashes unchanged', () => {
      expect(encodeLayerIdForStorage('AnyId')).toBe('AnyId')
    })

    it('encodes every dash', () => {
      expect(encodeLayerIdForStorage('a-b-c')).toBe('a%2Db%2Dc')
    })
  })

  describe('#decodeLayerIdFromStorage', () => {
    it('decodes %2D back to dashes', () => {
      expect(decodeLayerIdFromStorage('mymaps||a1b2%2Dc3d4')).toBe(
        'mymaps||a1b2-c3d4'
      )
    })

    it('decodes every %2D', () => {
      expect(decodeLayerIdFromStorage('a%2Db%2Dc')).toBe('a-b-c')
    })

    it('keeps strings without %2D unchanged', () => {
      expect(decodeLayerIdFromStorage('AnyId')).toBe('AnyId')
    })
  })

  describe('round trip', () => {
    it('preserves dashes through encode/decode', () => {
      const id = 'mymaps||a1b2-c3d4-e5f6'
      expect(decodeLayerIdFromStorage(encodeLayerIdForStorage(id))).toBe(id)
    })

    it('preserves remote layer ids through encode/decode', () => {
      const id = 'WMS||www.mysuperserver.com/my-tiles'
      expect(decodeLayerIdFromStorage(encodeLayerIdForStorage(id))).toBe(id)
    })
  })
})
