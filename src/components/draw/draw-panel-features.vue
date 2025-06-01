<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import useSortable from '@/composables/sortable'
import useDraw from '@/composables/draw/draw.composable'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

import FeatureItem from './feature-item.vue'

const drawStore = useDrawStore()
const {
  activeFeatureId,
  editingFeatureId,
  drawnFeatures: features,
  featureEditionDocked,
} = storeToRefs(drawStore)

function onToggleFeatureSub(featureId: string | number, isOpen: boolean) {
  // Only one feature details is displayed at once
  activeFeatureId.value = isOpen ? featureId : undefined
  editingFeatureId.value = undefined
}

function ontoggleEditFeature(featureId: string | number, isEditing: boolean) {
  editingFeatureId.value = isEditing ? featureId : undefined
}

function sortFunction(elements: HTMLCollection) {
  const featureIds = [...elements].map(val => val.id)
  drawStore.reorderFeatures(featureIds)
}

function onSubmitNewConcentricCircle(payload: {
  radius: number
  baseFeature: DrawnFeature
}) {
  const newDrawnFeature = useDraw().createConcentricCircle(
    payload.baseFeature,
    payload.radius
  )

  drawStore.addDrawnFeature(newDrawnFeature)
}

onMounted(() => {
  useSortable(<HTMLElement>document.querySelector('.sortable-features'), {
    onSort: sortFunction,
  })
})
</script>

<template>
  <ul class="mx-1 sortable-features" v-if="features.length">
    <li
      class="lux-drawing-item"
      v-for="feature in features"
      :id="`f-${feature.id}`"
      :key="feature.id"
    >
      <FeatureItem
        :isDocked="featureEditionDocked"
        :isEditing="editingFeatureId === feature.id"
        :isOpen="activeFeatureId === feature.id"
        :feature="<DrawnFeature>feature"
        @toggleFeatureSub="onToggleFeatureSub"
        @toggleEditFeature="ontoggleEditFeature"
        @toggleDock="() => (featureEditionDocked = !featureEditionDocked)"
        @closePopup="() => (featureEditionDocked = false)"
        @clickDelete="featureId => drawStore.removeFeature(featureId)"
        @submitFeature="feature => drawStore.updateDrawnFeature(feature)"
        @submitNewConcentricCircle="onSubmitNewConcentricCircle"
      />
    </li>
  </ul>
</template>
