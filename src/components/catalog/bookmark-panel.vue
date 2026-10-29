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
  <div class="bookmark-panel" data-cy="bookmarkPanel">
    <expandable-panel
      :title="t('My bookmarks', { ns: 'app' })"
      :expanded="expanded"
      @toggle-panel="expanded = !expanded"
    />

    <div v-if="expanded" class="bookmark-body bg-secondary text-tertiary">
      <div class="bookmark-add-row">
        <button
          class="bookmark-add"
          data-cy="bookmarkAddCurrentView"
          :title="t('Add current view', { ns: 'app' })"
          :aria-label="t('Add current view', { ns: 'app' })"
          @click="startCreate"
        >
          <i aria-hidden="true" class="fa-solid fa-plus"></i>
          {{ t('Add current view', { ns: 'app' }) }}
        </button>
      </div>

      <ul v-if="draft || bookmarks.length" class="bookmark-list">
        <li v-if="draft" class="bookmark-item">
          <input
            ref="nameInput"
            v-model="draftName"
            class="bookmark-input"
            type="text"
            :placeholder="t('Bookmark name', { ns: 'app' })"
            data-cy="bookmarkDraftInput"
            @keydown.enter="confirmDraft"
            @keydown.esc="cancelDraft"
            @blur="confirmDraft"
          />
        </li>
        <li
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          class="bookmark-item"
          :data-cy="`bookmarkItem-${bookmark.id}`"
        >
          <input
            v-if="editingId === bookmark.id"
            ref="nameInput"
            v-model="editName"
            class="bookmark-input"
            type="text"
            :data-cy="`bookmarkRenameInput-${bookmark.id}`"
            @keydown.enter="confirmRename(bookmark.id)"
            @keydown.esc="cancelRename"
            @blur="confirmRename(bookmark.id)"
          />
          <template v-else>
            <button
              class="bookmark-name"
              :title="bookmark.name"
              @click="goTo(bookmark)"
            >
              <i aria-hidden="true" class="fa-solid fa-location-dot"></i>
              <span class="bookmark-name-label">{{ bookmark.name }}</span>
            </button>
            <span class="bookmark-actions">
              <button
                class="bookmark-action"
                :title="t('Rename bookmark', { ns: 'app' })"
                :aria-label="t('Rename bookmark', { ns: 'app' })"
                :data-cy="`bookmarkRename-${bookmark.id}`"
                @click="startRename(bookmark)"
              >
                <i aria-hidden="true" class="fa-solid fa-pencil"></i>
              </button>
              <button
                class="bookmark-action"
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

<style scoped>
.bookmark-panel {
  margin-bottom: 0.5rem;
}

.bookmark-body {
  padding: 0.375rem 0.5rem;
}

.bookmark-add-row {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.375rem;
}

.bookmark-add {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: transparent;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0.125rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
}

.bookmark-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bookmark-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.25rem;
}

.bookmark-name {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex: 1;
  min-width: 0;
  text-align: left;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.bookmark-name-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bookmark-name:hover .bookmark-name-label {
  text-decoration: underline;
}

.bookmark-actions {
  display: flex;
  gap: 0.25rem;
}

.bookmark-action {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.125rem;
}

.bookmark-input {
  flex: 1;
  min-width: 0;
  padding: 0.125rem 0.25rem;
  color: inherit;
  background: transparent;
}
</style>
