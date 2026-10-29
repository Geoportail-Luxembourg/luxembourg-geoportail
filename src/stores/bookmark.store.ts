import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export interface Bookmark {
  id: string
  name: string
  center: [number, number]
  zoom: number
  key?: string
}

export const useBookmarkStore = defineStore('bookmark', () => {
  const bookmarks: Ref<Bookmark[]> = ref([])

  function addBookmark(bookmark: Omit<Bookmark, 'id'>) {
    if (
      bookmark.key &&
      bookmarks.value.some(existing => existing.key === bookmark.key)
    ) {
      return
    }
    bookmarks.value = [
      ...bookmarks.value,
      { ...bookmark, id: crypto.randomUUID() },
    ]
  }

  function removeBookmark(id: string) {
    bookmarks.value = bookmarks.value.filter(bookmark => bookmark.id !== id)
  }

  function renameBookmark(id: string, name: string) {
    bookmarks.value = bookmarks.value.map(bookmark =>
      bookmark.id === id ? { ...bookmark, name } : bookmark
    )
  }

  function findByKey(key: string): Bookmark | undefined {
    return bookmarks.value.find(bookmark => bookmark.key === key)
  }

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    renameBookmark,
    findByKey,
  }
})
