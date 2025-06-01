<script setup lang="ts">
import { provide } from 'vue'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { DrawnFeatureStyle } from '@/stores/draw.store.model'

import FeatureSubContent from './feature-sub-content.vue'
import FeatureSubWrapper from './feature-sub-wrapper.vue'

const props = withDefaults(
  defineProps<{
    isDocked?: boolean
    isEditing?: boolean
    isOpen?: boolean
    feature: DrawnFeature
  }>(),
  {
    isDocked: false,
    isEditing: false,
    isOpen: false,
  }
)

const localFeature = props.feature

const emit = defineEmits([
  'clickDelete',
  'closePopup',
  'toggleFeatureSub',
  'toggleEditFeature',
  'toggleDock',
  'submitFeature',
  'submitNewConcentricCircle',
])

provide('feature', localFeature)

function onToggleFeatureSub() {
  emit('toggleFeatureSub', localFeature.id, !props.isOpen)
}

function onToggleEditFeature() {
  emit('toggleEditFeature', localFeature.id, !props.isEditing)
}

function onClickDelete() {
  emit('clickDelete', localFeature.id)
}

function onResetInfo(prevLabel: string, prevDescription: string) {
  localFeature.label = prevLabel
  localFeature.description = prevDescription
}

function onResetStyle(prevStyle: DrawnFeatureStyle) {
  localFeature.featureStyle = { ...prevStyle }
}

function onSubmitEditFeature() {
  emit('submitFeature', localFeature)
}

function onSubmitNewConcentricCircle(
  radius: number,
  baseFeature: DrawnFeature
) {
  emit('submitNewConcentricCircle', radius, baseFeature)
}
</script>

<template>
  <!-- Drawing type and title -->
  <button
    data-cy="featItemName"
    class="lux-drawing-item-label flex items-center gap-1"
    :aria-expanded="isOpen"
    :aria-controls="`drawing-item-content-${localFeature.id}`"
    @click="onToggleFeatureSub"
  >
    <!-- Dragging button -->
    <span
      class="sortable-handle drag-handle fa fa-reorder ui-sortable-handle cursor-move"
    ></span>
    <!-- Type of feat. icon -->
    <span
      class="lux-icon"
      :class="{
        point:
          localFeature.featureType === 'drawnPoint' ||
          localFeature.featureType === 'drawnLabel',
        line: localFeature.featureType === 'drawnLine',
        polygon:
          localFeature.featureType === 'drawnPolygon' ||
          localFeature.featureType === 'drawnCircle',
      }"
    ></span>
    <!-- Feature label -->
    <span :class="{ selected: isOpen }">
      {{ localFeature.label }}
    </span>
  </button>

  <!-- Drawing details -->
  <FeatureSubWrapper
    v-if="isOpen"
    :isDocked="isDocked"
    @closePopup="() => emit('toggleDock')"
  >
    <div
      class="lux-drawing-item-content"
      :id="`drawing-item-content-${localFeature.id}`"
    >
      <FeatureSubContent
        :isDocked="isDocked"
        :isEditingFeature="isEditing"
        @toggleEditFeature="onToggleEditFeature"
        @toggleDock="() => emit('toggleDock')"
        @clickDelete="onClickDelete"
        @resetInfo="onResetInfo"
        @resetStyle="onResetStyle"
        @submitEditFeature="onSubmitEditFeature"
        @submitNewConcentricCircle="onSubmitNewConcentricCircle"
      />
    </div>
  </FeatureSubWrapper>
</template>
