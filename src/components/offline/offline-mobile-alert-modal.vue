<script setup lang="ts">
/**
 * offline-mobile-alert-modal.vue
 *
 * Shown automatically at startup when the local server reports that a newer
 * version of tile packages is available (UPDATE_AVAILABLE), and no error
 * occurred. Lets the user trigger the download immediately.
 */
import { watch, ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import ModalDialog from '@/components/common/modal-dialog.vue'
import useMobileTile from '@/composables/offline/mobile-tile.composable'
import { MobileTileStatus } from '@/composables/offline/mobile-tile.model'

const { t } = useTranslation()
const { status, tileError, updateTiles } = useMobileTile()

const visible = ref(false)
let shownOnce = false

watch(
  [status, tileError],
  ([newStatus, hasError]) => {
    // Show the modal on the first UPDATE_AVAILABLE without error.
    // Uses immediate:true so it fires even if status was already set before
    // this component was mounted.
    if (
      !hasError &&
      newStatus === MobileTileStatus.UPDATE_AVAILABLE &&
      !shownOnce
    ) {
      visible.value = true
      shownOnce = true
    }

    // Auto-close once tiles are up to date
    if (newStatus === MobileTileStatus.UP_TO_DATE) {
      visible.value = false
    }
  },
  { immediate: true }
)

function handleUpdate() {
  if (status.value === MobileTileStatus.UPDATE_AVAILABLE) {
    updateTiles()
  }
}
</script>

<template>
  <ModalDialog
    v-if="visible"
    :title="t('New offline data available')"
    :footer="false"
    @close="visible = false"
    data-cy="offlineMobileAlertModal"
  >
    <template #content>
      <p class="text-sm text-gray-700 mb-4">
        {{
          t(
            'A new version of the offline tile packages is available. Update now to keep your offline maps current.'
          )
        }}
      </p>
      <button
        class="lux-btn"
        :disabled="status !== MobileTileStatus.UPDATE_AVAILABLE"
        data-cy="offlineMobileAlertUpdateBtn"
        @click="handleUpdate"
      >
        <svg
          v-if="status === MobileTileStatus.IN_PROGRESS"
          class="animate-spin h-4 w-4 inline-block mr-1"
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
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
        {{ t('Update offline data') }}
      </button>
    </template>
  </ModalDialog>
</template>
