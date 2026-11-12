<script setup lang="ts">
import { ref, nextTick, watch, useTemplateRef } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import ExpandablePanel from '@/components/common/expandable-panel.vue'
import { useBookmarkStore, Bookmark } from '@/stores/bookmark.store'
import { getCoordinateName } from '@/services/search/bookmark-location'
import useMap from '@/composables/map/map.composable'

const { t } = useTranslation()
const bookmarkStore = useBookmarkStore()
const { bookmarks } = storeToRefs(bookmarkStore)

const expanded = ref(bookmarks.value.length > 0)
const draft = ref<{ center: [number, number]; zoom: number } | null>(null)
const draftName = ref('')
const editingId = ref<string | null>(null)
const editName = ref('')
const draftInput = useTemplateRef<HTMLInputElement>('draftInput')
let renameInputEl: HTMLInputElement | null = null

function bindRenameInput(el: Element | ComponentPublicInstance | null) {
  renameInputEl = (el as HTMLInputElement | null) ?? null
}

watch(
  () => bookmarks.value.length,
  (count, previous) => {
    if (count > previous) expanded.value = true
  }
)

watch([draft, editingId], async () => {
  await nextTick()
  if (editingId.value) {
    renameInputEl?.focus()
  } else if (draft.value) {
    draftInput.value?.focus()
  }
})

function goTo(bookmark: Bookmark) {
  if (editingId.value === bookmark.id) return
  useMap()
    .getOlMap()
    .getView()
    .animate({ center: bookmark.center, zoom: bookmark.zoom, duration: 500 })
}

function startCreate() {
  if (draft.value) return
  const view = useMap().getOlMap().getView()
  const center = view.getCenter()
  if (!center) return
  draft.value = {
    center: [center[0], center[1]],
    zoom: view.getZoom() ?? 10,
  }
  draftName.value = ''
}

function confirmDraft() {
  if (!draft.value) return
  const name = draftName.value.trim()
  bookmarkStore.addBookmark({
    name: name || getCoordinateName(draft.value.center),
    center: draft.value.center,
    zoom: draft.value.zoom,
  })
  draft.value = null
  draftName.value = ''
}

function cancelDraft() {
  draft.value = null
  draftName.value = ''
}

function startRename(bookmark: Bookmark) {
  editingId.value = bookmark.id
  editName.value = bookmark.name
}

function confirmRename(id: string) {
  if (editingId.value !== id) return
  const name = editName.value.trim()
  if (name) {
    bookmarkStore.renameBookmark(id, name)
  }
  editingId.value = null
}

function cancelRename() {
  editingId.value = null
}
</script>

<template>
  <div class="mb-2" data-cy="bookmarkPanel">
    <expandable-panel
      :title="t('My bookmarks', { ns: 'app' })"
      :expanded="expanded"
      @toggle-panel="expanded = !expanded"
    />

    <div v-if="expanded" class="bg-secondary text-tertiary px-2 py-1.5">
      <div class="flex items-center gap-1 pb-1.5">
        <template v-if="draft">
          <input
            ref="draftInput"
            v-model="draftName"
            class="form-control h-7 min-w-0 flex-1 rounded bg-white/50 px-2 py-0 text-[0.8rem] text-inherit"
            type="text"
            :placeholder="t('Bookmark name', { ns: 'app' })"
            data-cy="bookmarkDraftInput"
            @keydown.enter="confirmDraft"
            @keydown.esc="cancelDraft"
          />
          <button
            class="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded border border-current"
            :title="t('Save bookmark', { ns: 'app' })"
            :aria-label="t('Save bookmark', { ns: 'app' })"
            data-cy="bookmarkConfirmDraft"
            @click="confirmDraft"
          >
            <i aria-hidden="true" class="fa-solid fa-check text-[0.8rem]"></i>
          </button>
        </template>
        <button
          v-else
          class="inline-flex h-7 items-center gap-1.5 rounded border border-current px-2 text-[0.8rem] cursor-pointer"
          data-cy="bookmarkAddCurrentView"
          :title="t('Add current view', { ns: 'app' })"
          :aria-label="t('Add current view', { ns: 'app' })"
          @click="startCreate"
        >
          <i
            aria-hidden="true"
            class="fa-solid fa-plus text-[0.7em] leading-none"
          ></i>
          {{ t('Add current view', { ns: 'app' }) }}
        </button>
      </div>

      <ul v-if="bookmarks.length" class="list-none m-0 p-0">
        <li
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          class="flex min-h-7 items-center gap-1"
          :data-cy="`bookmarkItem-${bookmark.id}`"
        >
          <template v-if="editingId === bookmark.id">
            <input
              :ref="bindRenameInput"
              v-model="editName"
              class="form-control h-7 min-w-0 flex-1 rounded bg-white/50 px-2 py-0 text-[0.8rem] text-inherit"
              type="text"
              :data-cy="`bookmarkRenameInput-${bookmark.id}`"
              @keydown.enter="confirmRename(bookmark.id)"
              @keydown.esc="cancelRename"
            />
            <button
              class="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded border border-current"
              :title="t('Save bookmark', { ns: 'app' })"
              :aria-label="t('Save bookmark', { ns: 'app' })"
              :data-cy="`bookmarkConfirmRename-${bookmark.id}`"
              @click="confirmRename(bookmark.id)"
            >
              <i aria-hidden="true" class="fa-solid fa-check text-[0.8rem]"></i>
            </button>
          </template>
          <template v-else>
            <button
              class="group flex h-7 min-w-0 flex-1 items-center gap-1.5 text-left cursor-pointer"
              :title="bookmark.name"
              @click="goTo(bookmark)"
            >
              <i aria-hidden="true" class="fa-solid fa-location-dot"></i>
              <span
                class="overflow-hidden text-ellipsis whitespace-nowrap group-hover:underline"
              >
                {{ bookmark.name }}
              </span>
            </button>
            <button
              class="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center"
              :title="t('Rename bookmark', { ns: 'app' })"
              :aria-label="t('Rename bookmark', { ns: 'app' })"
              :data-cy="`bookmarkRename-${bookmark.id}`"
              @click="startRename(bookmark)"
            >
              <i aria-hidden="true" class="fa-solid fa-pencil"></i>
            </button>
            <button
              class="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center"
              :title="t('Delete bookmark', { ns: 'app' })"
              :aria-label="t('Delete bookmark', { ns: 'app' })"
              :data-cy="`bookmarkDelete-${bookmark.id}`"
              @click="bookmarkStore.removeBookmark(bookmark.id)"
            >
              <i aria-hidden="true" class="fa-solid fa-trash"></i>
            </button>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
