import type { Bookmark } from '@/stores/bookmark.store'

export class StorageBookmarkMapper {
  bookmarksToStorage(bookmarks: Bookmark[] | undefined | null): string {
    return JSON.stringify(bookmarks ?? [])
  }

  storageToBookmarks(value: string | null): Bookmark[] {
    if (!value) return []

    try {
      const parsed = JSON.parse(value)
      if (!Array.isArray(parsed)) return []
      return parsed.filter(bookmark => this.isValidBookmark(bookmark))
    } catch {
      return []
    }
  }

  private isValidBookmark(bookmark: unknown): bookmark is Bookmark {
    if (typeof bookmark !== 'object' || bookmark === null) return false
    const candidate = bookmark as Record<string, unknown>
    const center = candidate.center
    return (
      typeof candidate.id === 'string' &&
      typeof candidate.name === 'string' &&
      typeof candidate.zoom === 'number' &&
      Array.isArray(center) &&
      center.length === 2 &&
      center.every((coordinate: unknown) => typeof coordinate === 'number') &&
      (candidate.key === undefined || typeof candidate.key === 'string')
    )
  }
}

export const storageBookmarkMapper = new StorageBookmarkMapper()
