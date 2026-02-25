<script setup lang="ts">
/**
 * offline-mobile-reload-modal.vue
 *
 * Shown after a successful update (UP_TO_DATE) or a deletion (DELETED).
 * The new tiles are only picked up after a full page reload, so we prompt
 * the user to restart the app.
 */
import { watch, ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import ModalDialog from '@/components/common/modal-dialog.vue'
import useMobileTile from '@/composables/offline/mobile-tile.composable'
import { MobileTileStatus } from '@/composables/offline/mobile-tile.model'

const { t } = useTranslation()
const { status, tileError } = useMobileTile()

const visible = ref(false)
let prevStatus: MobileTileStatus = MobileTileStatus.UNINITIALIZED

watch([status, tileError], ([newStatus, hasError]) => {
  // Show the modal when transitioning to UP_TO_DATE or DELETED without error,
  // but only if we came from a meaningful previous state (not first init).
  if (
    !hasError &&
    (newStatus === MobileTileStatus.UP_TO_DATE ||
      newStatus === MobileTileStatus.DELETED) &&
    prevStatus !== MobileTileStatus.UNINITIALIZED &&
    prevStatus !== newStatus
  ) {
    visible.value = true
  }

  prevStatus = newStatus
})

function reloadApp() {
  visible.value = false
  location.reload()
}
</script>

<template>
  <ModalDialog
    v-if="visible"
    :title="t('App reload needed: Offline data updated successfully')"
    :footer="false"
    @close="visible = false"
    data-cy="offlineMobileReloadModal"
  >
    <template #content>
      <p class="text-sm text-gray-700 mb-4">
        {{
          t(
            'The offline tile packages have been updated. Restart the app to apply the changes.'
          )
        }}
      </p>
      <button
        class="lux-btn"
        data-cy="offlineMobileRestartBtn"
        @click="reloadApp"
      >
        {{ t('Restart app') }}
      </button>
    </template>
  </ModalDialog>
</template>
