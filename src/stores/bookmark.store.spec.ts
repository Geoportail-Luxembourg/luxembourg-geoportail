import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useBookmarkStore } from './bookmark.store'

const first = {
  name: 'Kirchberg',
  center: [611234.1, 6543210.9] as [number, number],
  zoom: 14,
  key: '611234,6543211',
}

describe('bookmark store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a bookmark with a generated id', () => {
    const store = useBookmarkStore()

    store.addBookmark(first)

    expect(store.bookmarks).toHaveLength(1)
    expect(store.bookmarks[0].id).toBeTruthy()
    expect(store.bookmarks[0].name).toBe('Kirchberg')
  })

  it('does not add a duplicate location when a key is set', () => {
    const store = useBookmarkStore()

    store.addBookmark(first)
    store.addBookmark({ ...first, zoom: 18 })

    expect(store.bookmarks).toHaveLength(1)
  })

  it('allows keyless bookmarks (current view) multiple times', () => {
    const store = useBookmarkStore()

    store.addBookmark({ name: 'View 1', center: [0, 0], zoom: 10 })
    store.addBookmark({ name: 'View 2', center: [1, 1], zoom: 11 })

    expect(store.bookmarks).toHaveLength(2)
  })

  it('removes a bookmark by id', () => {
    const store = useBookmarkStore()
    store.addBookmark(first)
    const id = store.bookmarks[0].id

    store.removeBookmark(id)

    expect(store.bookmarks).toHaveLength(0)
  })

  it('renames a bookmark by id', () => {
    const store = useBookmarkStore()
    store.addBookmark(first)
    const id = store.bookmarks[0].id

    store.renameBookmark(id, 'Bertrix')

    expect(store.bookmarks[0].name).toBe('Bertrix')
  })

  it('finds a bookmark by location key', () => {
    const store = useBookmarkStore()
    store.addBookmark(first)

    expect(store.findByKey(first.key!)?.name).toBe('Kirchberg')
    expect(store.findByKey('1,2')).toBeUndefined()
  })
})
