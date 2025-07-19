<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import ModalDialog from '@/components/common/modal-dialog.vue'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

const { t } = useTranslation()
</script>

<template>
  <ModalDialog
    :title="t('Confirmation de suppression des dessins')"
    @close="emit('cancel')"
  >
    <template v-slot:content>
      <p class="text-lg">
        {{ t('Etes-vous certain de vouloir effacer tous les dessins ?') }}
      </p>
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button class="lux-btn" data-dismiss="modal" @click="emit('cancel')">
          {{ t('Annuler') }}
        </button>
        <button class="lux-btn" data-dismiss="modal" @click="emit('confirm')">
          {{ t('Effacer') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
