<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import ModalDialog from '@/components/common/modal-dialog.vue'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useDrawStore } from '@/stores/draw.store'
import { mergeGeometryLines } from '@/composables/draw/draw-utils.composable'

const { addNotification } = useAlertNotificationsStore()
const { t } = useTranslation()
const drawStore = useDrawStore()
const { showModalMergeLines } = storeToRefs(drawStore)

const newMergedLineName = ref(t('Nouvelle ligne'))
const newMergedLineDescription = ref('')
const selectedFeatureIds = ref<(number | string)[]>([])

watch(showModalMergeLines, show => {
  if (show) {
    const drawFeaturesLines = drawStore.getDrawnFeaturesOfTypes([
      'LineString',
      'MultiLineString',
    ])

    if (drawFeaturesLines.length <= 1) {
      addNotification(
        t('Il faut au moins 2 lignes disponibles pour pouvoir les fusionner.'),
        AlertNotificationType.WARNING
      )

      drawStore.toggleDrawMergeLinesModal(false)
    }
  }
})

function onClickMerge() {
  const lines = drawStore.getDrawnFeaturesWithIds(selectedFeatureIds.value)
  const feature = mergeGeometryLines(lines)

  if (feature) {
    feature.label = newMergedLineName.value
    feature.description = newMergedLineDescription.value
  }

  // TODO: deselect and reselect the right feature + refresh profile

  drawStore.toggleDrawMergeLinesModal(false)
}
</script>

<template>
  <ModalDialog
    v-if="showModalMergeLines"
    :title="t('Fusionner des lignes')"
    @close="drawStore.toggleDrawMergeLinesModal(false)"
  >
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

        <ul class="list-unstyled ml-2">
          <li
            v-for="feature in drawStore.getDrawnFeaturesOfTypes([
              'LineString',
              'MultiLineString',
            ])"
            :key="feature.id"
          >
            <input
              :id="`featureLine-${feature.id}`"
              type="checkbox"
              class="hidden"
              :value="feature.id"
              v-model="selectedFeatureIds"
            />
            <label :for="`featureLine-${feature.id}`">
              <i
                class="fa fa-solid mr-2"
                :class="`${
                  selectedFeatureIds.find(f => f === feature.id)
                    ? 'fa-check-square'
                    : 'fa-square'
                }`"
              ></i>
              {{ feature.label }}
            </label>
          </li>
        </ul>
      </form>
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button
          class="lux-btn"
          data-dismiss="modal"
          @click="drawStore.toggleDrawMergeLinesModal(false)"
        >
          {{ t('Annuler') }}
        </button>
        <button
          class="lux-btn"
          data-dismiss="modal"
          @click="onClickMerge"
          :disabled="selectedFeatureIds.length < 2"
        >
          {{ t('Fusionner') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
