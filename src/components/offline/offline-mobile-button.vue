<script setup lang="ts">
import { ref, computed } from 'vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import { useTranslation } from 'i18next-vue'
import useMobileTile from '@/composables/offline/mobile-tile.composable'
import { MobileTileStatus } from '@/composables/offline/mobile-tile.model'

const { t } = useTranslation()
const {
  status,
  tileError,
  hasLocalServer,
  checkTiles,
  updateTiles,
  deleteTiles,
} = useMobileTile()

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    checkTiles(true)
  }
}

function closeMenu() {
  menuOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

const statusDescription = computed(() => {
  if (status.value === MobileTileStatus.UPDATE_AVAILABLE || tileError.value) {
    return t('Update available')
  }
  if (status.value === MobileTileStatus.IN_PROGRESS) {
    return t('Downloading tiles…')
  }
  return ''
})
</script>

<template>
  <div
    v-if="hasLocalServer"
    class="offline-mobile-wrapper"
    data-cy="offlineMobileButton"
    @keydown="handleKeydown"
  >
    <div :class="['offline-mobile-button', CLASS_CONTROL]">
      <div :class="CLASS_UNSELECTABLE" class="relative">
        <button
          type="button"
          :aria-label="t('Full offline (only available on mobile)')"
          :aria-expanded="menuOpen"
          aria-haspopup="true"
          aria-controls="offline-menu"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline h-[1em] w-[1em]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
            <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path>
          </svg>
          <span
            class="absolute top-1 right-1 h-2 w-2 rounded-full"
            :class="{
              'bg-orange-500':
                status === MobileTileStatus.UPDATE_AVAILABLE || tileError,
              'bg-blue-500': status === MobileTileStatus.IN_PROGRESS,
              hidden:
                status === MobileTileStatus.UP_TO_DATE ||
                status === MobileTileStatus.UNINITIALIZED,
            }"
            :aria-label="statusDescription"
            role="status"
          ></span>
        </button>
      </div>
    </div>

    <div
      v-if="menuOpen"
      id="offline-menu"
      class="offline-mobile-menu"
      role="menu"
      :aria-label="t('Offline tile management')"
      data-cy="offlineMobileMenu"
    >
      <div class="status-text" role="status" aria-live="polite">
        <span v-if="status === MobileTileStatus.UNINITIALIZED">{{
          t('Checking tile versions…')
        }}</span>
        <span
          v-else-if="status === MobileTileStatus.IN_PROGRESS"
          class="inline-flex items-center gap-1 text-primary"
        >
          <svg
            class="animate-spin h-3 w-3 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          {{ t('Downloading tiles…') }}
        </span>
        <span v-else-if="status === MobileTileStatus.UPDATE_AVAILABLE">{{
          t('Update available')
        }}</span>
        <span v-else-if="status === MobileTileStatus.UP_TO_DATE">{{
          t('Tiles up to date')
        }}</span>
        <span v-else-if="status === MobileTileStatus.DELETED">{{
          t('Tiles deleted')
        }}</span>
      </div>
      <button
        class="menu-btn"
        role="menuitem"
        :disabled="status !== MobileTileStatus.UPDATE_AVAILABLE"
        :aria-disabled="status !== MobileTileStatus.UPDATE_AVAILABLE"
        data-cy="offlineMobileUpdateBtn"
        @click="updateTiles()"
      >
        <svg
          v-if="status === MobileTileStatus.IN_PROGRESS"
          class="animate-spin h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        {{ t('Update offline data') }}
      </button>
      <button
        class="menu-btn"
        role="menuitem"
        :disabled="status === MobileTileStatus.IN_PROGRESS"
        :aria-disabled="status === MobileTileStatus.IN_PROGRESS"
        data-cy="offlineMobileDeleteBtn"
        @click="deleteTiles()"
      >
        {{ t('Delete offline data') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.offline-mobile-menu {
  position: absolute;
  bottom: 0;
  right: calc(100% + 0.25rem);
  width: 14rem;
  background: white;
  border: 1px solid rgb(209 213 219);
  border-radius: 0.375rem;
  padding: 0.75rem;
  z-index: 50;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-text {
  font-size: 0.75rem;
  color: rgb(107 114 128);
  line-height: 1;
}

.menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-family: inherit;
  background-color: white;
  color: var(--color-primary);
  border: 1px solid var(--color-gray);
  border-radius: 0.25rem;
  cursor: pointer;
  transition:
    background-color 150ms,
    color 150ms;
}

.menu-btn:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: white;
}

.menu-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
