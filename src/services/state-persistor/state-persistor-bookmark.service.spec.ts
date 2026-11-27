import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useBookmarkStore } from '@/stores/bookmark.store'
import { statePersistorBookmarkService } from './state-persistor-bookmark.service'
import { storageHelper } from './storage/storage.helper'

const flush = () => new Promise(resolve => setTimeout(resolve, 50))

describe('bookmark persistence (debug)', () => {
  beforeEach(() => {
    localStorage.clear()
    setActivePinia(createPinia())
  })

  it('writes added bookmarks to localStorage', async () => {
    statePersistorBookmarkService.bootstrap()

    const store = useBookmarkStore()
    store.addBookmark({ name: 'x', center: [1, 2], zoom: 3 })
    await flush()

    expect(localStorage.getItem('bookmarks')).toBeTruthy()
  })

  it('restores bookmarks from localStorage', async () => {
    storageHelper.setValue(
      'bookmarks',
      [
        {
          id: 'abc',
          name: 'restored',
          center: [1, 2],
          zoom: 3,
        },
      ],
      items => JSON.stringify(items)
    )

    statePersistorBookmarkService.bootstrap()
    await flush()

    expect(useBookmarkStore().bookmarks).toHaveLength(1)
  })

  it('survives a full reload cycle', async () => {
    statePersistorBookmarkService.bootstrap()
    useBookmarkStore().addBookmark({
      name: 'x',
      center: [1, 2],
      zoom: 3,
      key: '1,2',
    })
    await flush()

    setActivePinia(createPinia())
    statePersistorBookmarkService.bootstrap()
    await flush()

    const store = useBookmarkStore()
    expect(store.bookmarks).toHaveLength(1)
    expect(store.bookmarks[0].key).toBe('1,2')
    expect(store.bookmarks[0].name).toBe('x')
  })

  it('persists and restores when the url has params', async () => {
    window.history.replaceState({}, '', '/?layers=1-2&lang=fr')

    statePersistorBookmarkService.bootstrap()
    useBookmarkStore().addBookmark({
      name: 'with params',
      center: [3, 4],
      zoom: 5,
    })
    await flush()

    setActivePinia(createPinia())
    statePersistorBookmarkService.bootstrap()
    await flush()

    expect(useBookmarkStore().bookmarks).toHaveLength(1)
    expect(useBookmarkStore().bookmarks[0].name).toBe('with params')

    window.history.replaceState({}, '', '/')
  })
})
