import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'

import BookmarkPanel from './bookmark-panel.vue'
import { useBookmarkStore } from '@/stores/bookmark.store'

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: () => ({
      getView: () => ({
        getCenter: () => [611234, 6543210],
        getZoom: () => 12,
        animate: vi.fn(),
      }),
    }),
  }),
}))

describe('BookmarkPanel', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(BookmarkPanel, { attachTo: document.body })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('focuses the input when creating a bookmark from the current view', async () => {
    await wrapper.find('[data-cy="bookmarkAddCurrentView"]').trigger('click')
    await nextTick()
    await nextTick()

    const input = document.querySelector<HTMLInputElement>(
      '[data-cy="bookmarkDraftInput"]'
    )
    expect(input).not.toBeNull()
    expect(document.activeElement).toBe(input)
  })

  it('focuses the input when renaming a bookmark', async () => {
    useBookmarkStore().addBookmark({
      name: 'Kirchberg',
      center: [611234, 6543210],
      zoom: 12,
    })
    await nextTick()

    const id = useBookmarkStore().bookmarks[0].id
    await wrapper.find(`[data-cy="bookmarkRename-${id}"]`).trigger('click')
    await nextTick()
    await nextTick()

    const input = document.querySelector<HTMLInputElement>(
      `[data-cy="bookmarkRenameInput-${id}"]`
    )
    expect(input).not.toBeNull()
    expect(document.activeElement).toBe(input)
  })
})
