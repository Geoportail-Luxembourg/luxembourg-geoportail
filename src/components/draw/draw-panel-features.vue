<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import useSortable from '@/composables/sortable'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/draw/drawn-feature'

import FeatureItem from './feature-item.vue'

const drawStore = useDrawStore()
const {
  activeFeatureId,
  editingFeatureId,
  drawnFeatures: features,
  featureEditionDocked,
} = storeToRefs(drawStore)

function onToggleFeatureSub(featureId: number, isOpen: boolean) {
  // Only one feature details is displayed at once
  activeFeatureId.value = isOpen ? featureId : undefined
  editingFeatureId.value = undefined
}

function onToggleFeatureEdit(featureId: number, isEditing: boolean) {
  editingFeatureId.value = isEditing ? featureId : undefined
  // TODO: continue...
}

// opening the last item is directly done in addDrawnFeature in draw store via activeFeatureId
/* watch(
 *   features,
 *   (newFeatures, oldFeatures) => {
 *     // Last added feature is unfold by default
 *     if (oldFeatures === undefined || newFeatures.length > oldFeatures.length) {
 *       const currentFeature =
 *         newFeatures[oldFeatures === undefined ? 0 : newFeatures.length - 1]
 *       // currentOpenedFeature.value = currentEditingFeature.value =
 *       currentFeature.id
 *     }
 *   },
 *   { immediate: true }
 * )
 * */
onMounted(() => {
  useSortable(<HTMLElement>document.querySelector('.sortable-features'))
})
</script>

<template>
  <ul class="mx-1 sortable-features" v-if="features.length">
    <li
      class="lux-drawing-item"
      v-for="(feature, index) in features"
      :key="index"
    >
      <FeatureItem
        :isDocked="featureEditionDocked"
        :isEditing="editingFeatureId === feature.ol_uid"
        :isOpen="activeFeatureId === feature.ol_uid"
        :feature="<DrawnFeature>feature"
        @toggleFeatureSub="onToggleFeatureSub"
        @toggleFeatureEdit="onToggleFeatureEdit"
        @toggleDock="() => (featureEditionDocked = !featureEditionDocked)"
        @closePopup="() => (featureEditionDocked = false)"
        @clickDelete="featureId => drawStore.removeFeature(featureId)"
      />
    </li>
  </ul>
</template>
