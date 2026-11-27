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

  async function expandPanel() {
    await wrapper
      .find('[data-cy="bookmarkPanel"] button[aria-expanded]')
      .trigger('click')
    await nextTick()
  }

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(BookmarkPanel, { attachTo: document.body })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('starts collapsed when there is no bookmark', () => {
    expect(wrapper.find('[data-cy="bookmarkAddCurrentView"]').exists()).toBe(
      false
    )
  })

  it('expands when a bookmark is added while collapsed', async () => {
    useBookmarkStore().addBookmark({
      name: 'Kirchberg',
      center: [611234, 6543210],
      zoom: 12,
    })
    await nextTick()

    expect(wrapper.find('[data-cy="bookmarkAddCurrentView"]').exists()).toBe(
      true
    )
  })

  it('focuses the input when creating a bookmark from the current view', async () => {
    await expandPanel()
    await wrapper.find('[data-cy="bookmarkAddCurrentView"]').trigger('click')
    await nextTick()
    await nextTick()

    const input = document.querySelector<HTMLInputElement>(
      '[data-cy="bookmarkDraftInput"]'
    )
    expect(input).not.toBeNull()
    expect(document.activeElement).toBe(input)
  })

  it('saves the draft with the confirm button', async () => {
    await expandPanel()
    await wrapper.find('[data-cy="bookmarkAddCurrentView"]').trigger('click')
    await nextTick()

    const input = wrapper.find<HTMLInputElement>(
      '[data-cy="bookmarkDraftInput"]'
    )
    await input.setValue('Bertrix')
    await wrapper.find('[data-cy="bookmarkConfirmDraft"]').trigger('click')
    await nextTick()

    expect(useBookmarkStore().bookmarks[0].name).toBe('Bertrix')
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

  it('does not save when the input loses focus', async () => {
    useBookmarkStore().addBookmark({
      name: 'Kirchberg',
      center: [611234, 6543210],
      zoom: 12,
    })
    await nextTick()

    const id = useBookmarkStore().bookmarks[0].id
    await wrapper.find(`[data-cy="bookmarkRename-${id}"]`).trigger('click')
    await nextTick()

    const input = wrapper.find(`[data-cy="bookmarkRenameInput-${id}"]`)
    await input.setValue('Bertrix')
    await input.trigger('blur')
    await input.trigger('keydown', { key: 'Tab', shiftKey: true })
    await nextTick()

    expect(wrapper.find(`[data-cy="bookmarkRenameInput-${id}"]`).exists()).toBe(
      true
    )
    expect(useBookmarkStore().bookmarks[0].name).toBe('Kirchberg')
  })

  it('saves the renaming with the enter key', async () => {
    useBookmarkStore().addBookmark({
      name: 'Kirchberg',
      center: [611234, 6543210],
      zoom: 12,
    })
    await nextTick()

    const id = useBookmarkStore().bookmarks[0].id
    await wrapper.find(`[data-cy="bookmarkRename-${id}"]`).trigger('click')
    await nextTick()

    const input = wrapper.find(`[data-cy="bookmarkRenameInput-${id}"]`)
    await input.setValue('Bertrix')
    await input.trigger('keydown', { key: 'Enter' })

    expect(useBookmarkStore().bookmarks[0].name).toBe('Bertrix')
  })

  it('saves the renaming with the check button', async () => {
    useBookmarkStore().addBookmark({
      name: 'Kirchberg',
      center: [611234, 6543210],
      zoom: 12,
    })
    await nextTick()

    const id = useBookmarkStore().bookmarks[0].id
    await wrapper.find(`[data-cy="bookmarkRename-${id}"]`).trigger('click')
    await nextTick()

    const input = wrapper.find(`[data-cy="bookmarkRenameInput-${id}"]`)
    await input.setValue('Bertrix')
    await wrapper
      .find(`[data-cy="bookmarkConfirmRename-${id}"]`)
      .trigger('click')

    expect(useBookmarkStore().bookmarks[0].name).toBe('Bertrix')
  })
})
