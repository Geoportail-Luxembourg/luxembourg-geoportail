<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import ModalDialog from '@/components/common/modal-dialog.vue'
import { MyMap } from '@/services/api/api-mymaps.service'

defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm', uuid: string, mode: 'clear' | 'delete'): void
}>()

const props = defineProps<{
  map: MyMap
  mode: 'clear' | 'delete'
}>()

const { t } = useTranslation()
const title =
  props.mode === 'clear'
    ? t('Confirmation de suppression des éléments de la carte')
    : t('Confirmation de suppression de la carte')
</script>

<template>
  <ModalDialog :title="title" @close="$emit('cancel')" role="alertdialog">
    <template v-slot:content>
      <template v-if="props.mode === 'clear'">
        {{
          t(
            'Etes-vous certain de vouloir effacer tous les éléments de la carte ?'
          )
        }}
      </template>
      <template v-else>
        {{ t('Etes-vous certain de vouloir effacer la carte intitulée :') }}
        <span class="font-bold">{{ map.title }}</span>
      </template>
    </template>
    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button class="lux-btn" data-dismiss="modal" @click="$emit('cancel')">
          {{ t('Annuler') }}
        </button>
        <button
          class="lux-btn"
          data-dismiss="modal"
          @click="$emit('confirm', map.uuid, mode)"
        >
          {{ t('Effacer') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
