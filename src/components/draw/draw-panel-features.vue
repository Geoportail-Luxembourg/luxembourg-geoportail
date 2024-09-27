<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { getUid } from 'ol/util'

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

function onToggleFeatureSub(featureId: String, isOpen: boolean) {
  // Only one feature details is displayed at once
  activeFeatureId.value = isOpen ? featureId : undefined
  editingFeatureId.value = undefined
}

function onToggleFeatureEdit(featureId: String, isEditing: boolean) {
  editingFeatureId.value = isEditing ? featureId : undefined
  // TODO: continue...
}

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
        :isEditing="editingFeatureId === getUid(feature)"
        :isOpen="activeFeatureId === getUid(feature)"
        :feature="<DrawnFeature>feature"
        @toggleFeatureSub="onToggleFeatureSub"
        @toggleFeatureEdit="onToggleFeatureEdit"
        @toggleDock="() => (featureEditionDocked = !featureEditionDocked)"
        @closePopup="() => (featureEditionDocked = false)"
        @clickDelete="featureId => drawStore.removeFeature(featureId)"
        @submitEditInfo="feature => drawStore.updateDrawnFeature(feature)"
      />
    </li>
  </ul>
</template>
