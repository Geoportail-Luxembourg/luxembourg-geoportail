import { describe, it, expect } from 'vitest'
import { storageLayerTreeMapper } from './state-persistor-layer-tree.mapper'

describe('StorageLayerTreeMapper', () => {
  describe('#expandedNodesToStorage', () => {
    it('returns empty string for empty object', () => {
      expect(storageLayerTreeMapper.expandedNodesToStorage({})).toBe('')
    })

    it('encodes a single expanded entry as bare ID', () => {
      expect(
        storageLayerTreeMapper.expandedNodesToStorage({ '123': true })
      ).toBe('123')
    })

    it('encodes a single collapsed entry with - prefix', () => {
      expect(
        storageLayerTreeMapper.expandedNodesToStorage({ '456': false })
      ).toBe('-456')
    })

    it('encodes mixed entries with - for collapsed', () => {
      const result = storageLayerTreeMapper.expandedNodesToStorage({
        '123': true,
        '456': false,
        '789': true,
      })
      expect(result).toContain('-456')
      expect(result).toContain('123')
      expect(result).toContain('789')
      expect(result.split(',')).toHaveLength(3)
    })
  })

  describe('#storageToExpandedNodes', () => {
    it('returns empty object for null', () => {
      expect(storageLayerTreeMapper.storageToExpandedNodes(null)).toEqual({})
    })

    it('returns empty object for empty string', () => {
      expect(storageLayerTreeMapper.storageToExpandedNodes('')).toEqual({})
    })

    it('decodes a single expanded entry', () => {
      expect(storageLayerTreeMapper.storageToExpandedNodes('123')).toEqual({
        '123': true,
      })
    })

    it('decodes a single collapsed entry', () => {
      expect(storageLayerTreeMapper.storageToExpandedNodes('-456')).toEqual({
        '456': false,
      })
    })

    it('decodes mixed entries', () => {
      expect(
        storageLayerTreeMapper.storageToExpandedNodes('-456,123,789')
      ).toEqual({
        '456': false,
        '123': true,
        '789': true,
      })
    })

    it('handles leading and trailing commas gracefully', () => {
      expect(
        storageLayerTreeMapper.storageToExpandedNodes(',-456,123,')
      ).toEqual({
        '456': false,
        '123': true,
      })
    })
  })

  describe('round-trip', () => {
    it('encode then decode returns original object', () => {
      const original = { '123': true, '456': false, '789': true }
      const encoded = storageLayerTreeMapper.expandedNodesToStorage(original)
      const decoded = storageLayerTreeMapper.storageToExpandedNodes(encoded)
      expect(decoded).toEqual(original)
    })
  })
})
