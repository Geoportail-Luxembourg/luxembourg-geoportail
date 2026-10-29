<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import ExpandablePanel from '@/components/common/expandable-panel.vue'
import { useBookmarkStore, Bookmark } from '@/stores/bookmark.store'
import { coordinateName } from '@/services/search/bookmark-location'
import useMap from '@/composables/map/map.composable'

const { t } = useTranslation()
const bookmarkStore = useBookmarkStore()
const { bookmarks } = storeToRefs(bookmarkStore)

const expanded = ref(true)
const draft = ref<{ center: [number, number]; zoom: number } | null>(null)
const draftName = ref('')
const editingId = ref<string | null>(null)
const editName = ref('')
const nameInput = ref<HTMLInputElement>()

watch([draft, editingId], () => {
  if (draft.value || editingId.value) {
    nextTick(() => nameInput.value?.focus())
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
    name: name || coordinateName(draft.value.center),
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
      <div class="flex justify-end pb-1.5">
        <button
          class="inline-flex items-center gap-1.5 border border-current rounded px-2 py-0.5 text-[0.8rem] cursor-pointer"
          data-cy="bookmarkAddCurrentView"
          :title="t('Add current view', { ns: 'app' })"
          :aria-label="t('Add current view', { ns: 'app' })"
          @click="startCreate"
        >
          <i aria-hidden="true" class="fa-solid fa-plus"></i>
          {{ t('Add current view', { ns: 'app' }) }}
        </button>
      </div>

      <ul v-if="draft || bookmarks.length" class="list-none m-0 p-0">
        <li v-if="draft" class="flex items-center gap-1 py-1.5 px-1">
          <input
            ref="nameInput"
            v-model="draftName"
            class="form-control bg-secondary text-white px-3 py-[6px] focus:outline-none"
            type="text"
            data-cy="bookmarkDraftInput"
            @keydown.enter="confirmDraft"
            @keydown.esc="cancelDraft"
            @blur="confirmDraft"
          />
        </li>
        <li
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          class="flex items-center gap-1 py-1.5 px-1"
          :data-cy="`bookmarkItem-${bookmark.id}`"
        >
          <input
            v-if="editingId === bookmark.id"
            ref="nameInput"
            v-model="editName"
            class="form-control bg-secondary text-white px-3 py-[6px] focus:outline-none"
            type="text"
            :data-cy="`bookmarkRenameInput-${bookmark.id}`"
            @keydown.enter="confirmRename(bookmark.id)"
            @keydown.esc="cancelRename"
            @blur="confirmRename(bookmark.id)"
          />
          <template v-else>
            <button
              class="group flex items-center gap-1.5 flex-1 min-w-0 text-left cursor-pointer"
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
            <span class="flex gap-1">
              <button
                class="cursor-pointer p-0.5"
                :title="t('Rename bookmark', { ns: 'app' })"
                :aria-label="t('Rename bookmark', { ns: 'app' })"
                :data-cy="`bookmarkRename-${bookmark.id}`"
                @click="startRename(bookmark)"
              >
                <i aria-hidden="true" class="fa-solid fa-pencil"></i>
              </button>
              <button
                class="cursor-pointer p-0.5"
                :title="t('Delete bookmark', { ns: 'app' })"
                :aria-label="t('Delete bookmark', { ns: 'app' })"
                :data-cy="`bookmarkDelete-${bookmark.id}`"
                @click="bookmarkStore.removeBookmark(bookmark.id)"
              >
                <i aria-hidden="true" class="fa-solid fa-trash"></i>
              </button>
            </span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
