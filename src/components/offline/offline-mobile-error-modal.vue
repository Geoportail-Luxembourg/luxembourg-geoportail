<script setup lang="ts">
/**
 * offline-mobile-error-modal.vue
 *
 * Shown when a download error occurs (network failure, bad response from the
 * embedded server, or a package stuck in IN_PROGRESS that reverts to
 * UPDATE_AVAILABLE). Offers a Retry button.
 */
import { watch, ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import ModalDialog from '@/components/common/modal-dialog.vue'
import useMobileTile from '@/composables/offline/mobile-tile.composable'

const { t } = useTranslation()
const { tileError, updateTiles } = useMobileTile()

const visible = ref(false)

watch(tileError, hasError => {
  visible.value = hasError
})
</script>

<template>
  <ModalDialog
    v-if="visible"
    :title="t('An error occured during download')"
    :footer="false"
    @close="visible = false"
    data-cy="offlineMobileErrorModal"
  >
    <template #content>
      <p class="text-sm text-gray-700 mb-4">
        {{
          t(
            'The download of offline tile packages failed. Please check your connection and try again.'
          )
        }}
      </p>
      <button
        class="lux-btn"
        data-cy="offlineMobileRetryBtn"
        @click="
          () => {
            updateTiles()
            visible = false
          }
        "
      >
        {{ t('Retry') }}
      </button>
    </template>
  </ModalDialog>
</template>
