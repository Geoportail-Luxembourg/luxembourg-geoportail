<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { onMounted, ref } from 'vue'

import ModalDialog from '@/components/common/modal-dialog.vue'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

const { addNotification } = useAlertNotificationsStore()
const { t } = useTranslation()
const newMergedLineName = ref(t('Nouvelle ligne'))
const newMergedLineDescription = ref('')

onMounted(() => {
  addNotification(
    t('Il faut au moins 2 lignes disponibles pour pouvoir les fusionner.'),
    AlertNotificationType.WARNING
  )
})
</script>

<template>
  <ModalDialog :title="t('Fusionner des lignes')" @close="emit('cancel')">
    <template v-slot:content>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col">
          <label for="mergedLineName" class="lux-label">{{
            t('Nouveau nom')
          }}</label>
          <input
            id="mergedLineName"
            class="lux-input"
            type="text"
            v-model="newMergedLineName"
          />
        </div>
        <div class="flex flex-col">
          <label for="mergedLineDescription" class="lux-label">{{
            t('Nouvelle description')
          }}</label>
          <textarea
            id="mergedLineDescription"
            class="lux-input"
            rows="3"
            v-model="newMergedLineDescription"
          ></textarea>
        </div>
        <ul class="features list-unstyled">
          <li
            ng-repeat="(key, feature) in ctrl.getMymapsLinestringFeatures()"
            class="feature"
          >
            <i
              class="fa fa-square"
              ng-click="ctrl.toggleLinestring(feature)"
              ng-class="(ctrl.selectedLineString.indexOf(feature)>=0) ? 'fa-check-square' : 'fa-square'"
            ></i>
            feature.get('name')
          </li>
        </ul>
      </form>
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button class="lux-btn" data-dismiss="modal" @click="emit('cancel')">
          {{ t('Annuler') }}
        </button>
        <button class="lux-btn" data-dismiss="modal" @click="emit('confirm')">
          {{ t('Fusionner') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
