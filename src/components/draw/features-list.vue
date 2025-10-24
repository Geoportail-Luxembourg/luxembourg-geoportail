<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import useSortable from '@/composables/sortable'
import useDrawUtils from '@/composables/draw/draw-utils.composable'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

import FeatureItem from './feature-item.vue'

defineProps<{
  features: DrawnFeature[]
}>()

const drawStore = useDrawStore()
const drawUtils = useDrawUtils()
const { activeFeatureId, editingFeatureId, featureEditionDocked } =
  storeToRefs(drawStore)
function onContinueLine(feature: DrawnFeature) {
  feature.fit()
  drawUtils.continueLine(feature)
}

function onToggleFeatureSub(featureId: string | number, isOpen: boolean) {
  // Only one feature details is displayed at once
  activeFeatureId.value = isOpen ? featureId : undefined
  editingFeatureId.value = undefined
}

function ontoggleEditFeature(featureId: string | number, isEditing: boolean) {
  editingFeatureId.value = isEditing ? featureId : undefined
}

function onSubmitNewConcentricCircle(payload: {
  baseFeature: DrawnFeature
  radius: number
}) {
  const { baseFeature, radius } = payload
  const newDrawnFeature = drawUtils.createConcentricCircle(baseFeature, radius)

  drawStore.addDrawnFeatureToCollection(newDrawnFeature)
  drawStore.selectDrawnFeature(newDrawnFeature)
}

function sortFunction(elements: HTMLCollection) {
  const featureIds = [...elements].map(val => val.id)
  drawStore.reorderFeatures(featureIds)
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
        @continueLine="() => onContinueLine(<DrawnFeature>feature)"
        @submitFeature="feature => drawStore.updateDrawnFeature(feature)"
        @submitNewConcentricCircle="onSubmitNewConcentricCircle"
      />
    </li>
  </ul>
</template>
