import { describe, it, expect } from 'vitest'
import { storageBookmarkMapper } from './state-persistor-bookmark.mapper'
import type { Bookmark } from '@/stores/bookmark.store'

const bookmark: Bookmark = {
  id: 'abc-123',
  name: 'Kirchberg',
  center: [611234.1, 6543210.9],
  zoom: 14,
  key: '611234,6543211',
}

describe('storageBookmarkMapper', () => {
  describe('#bookmarksToStorage', () => {
    it('serialises bookmarks to JSON', () => {
      expect(storageBookmarkMapper.bookmarksToStorage([bookmark])).toBe(
        '[{"id":"abc-123","name":"Kirchberg","center":[611234.1,6543210.9],"zoom":14,"key":"611234,6543211"}]'
      )
    })

    it('serialises empty and nullish values', () => {
      expect(storageBookmarkMapper.bookmarksToStorage([])).toBe('[]')
      expect(storageBookmarkMapper.bookmarksToStorage(null)).toBe('[]')
      expect(storageBookmarkMapper.bookmarksToStorage(undefined)).toBe('[]')
    })
  })

  describe('#storageToBookmarks', () => {
    it('round-trips bookmarks', () => {
      const value = storageBookmarkMapper.bookmarksToStorage([bookmark])
      expect(storageBookmarkMapper.storageToBookmarks(value)).toEqual([
        bookmark,
      ])
    })

    it('returns an empty array for null or empty values', () => {
      expect(storageBookmarkMapper.storageToBookmarks(null)).toEqual([])
      expect(storageBookmarkMapper.storageToBookmarks('')).toEqual([])
    })

    it('returns an empty array for malformed JSON', () => {
      expect(storageBookmarkMapper.storageToBookmarks('nope')).toEqual([])
    })

    it('returns an empty array for non-array JSON', () => {
      expect(storageBookmarkMapper.storageToBookmarks('{"a":1}')).toEqual([])
    })

    it('filters out invalid entries', () => {
      const value = JSON.stringify([
        bookmark,
        { id: 'x', name: 'broken', center: 'nope', zoom: 1 },
        null,
        42,
      ])
      expect(storageBookmarkMapper.storageToBookmarks(value)).toEqual([
        bookmark,
      ])
    })
  })
})
