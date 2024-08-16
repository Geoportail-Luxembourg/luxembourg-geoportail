<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import useSortable from '@/composables/sortable'
import { useDrawStore } from '@/stores/draw.store'
import { DrawFeature } from '@/stores/draw.store.model'

import FeatureItem from './feature-item.vue'

const drawStore = useDrawStore()
const { drawFeatures: features, featureEditionDocked } = storeToRefs(drawStore)
const currentOpenedFeature: Ref<number | undefined> = ref(undefined)
const currentEditingFeature: Ref<number | undefined> = ref(undefined)

function onToggleFeatureSub(featureId: number, isOpen: boolean) {
  // Only one feature details is displayed at once
  currentOpenedFeature.value = isOpen ? featureId : undefined
  currentEditingFeature.value = undefined
}

function onToggleFeatureEdit(featureId: number, isEditing: boolean) {
  currentEditingFeature.value = isEditing ? featureId : undefined
  // TODO: continue...
}

watch(
  features,
  (newFeatures, oldFeatures) => {
    // Last added feature is unfold by default
    if (oldFeatures === undefined || newFeatures.length > oldFeatures.length) {
      const currentFeature =
        newFeatures[oldFeatures === undefined ? 0 : newFeatures.length - 1]
      currentOpenedFeature.value = currentEditingFeature.value =
        currentFeature.id
    }
  },
  { immediate: true }
)

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
        :isEditing="currentEditingFeature === feature.id"
        :isOpen="currentOpenedFeature === feature.id"
        :feature="<DrawFeature>feature"
        @toggleFeatureSub="onToggleFeatureSub"
        @toggleFeatureEdit="onToggleFeatureEdit"
        @toggleDock="() => (featureEditionDocked = !featureEditionDocked)"
        @closePopup="() => (featureEditionDocked = false)"
        @clickDelete="featureId => drawStore.removeFeature(featureId)"
      />
    </li>
  </ul>
</template>
