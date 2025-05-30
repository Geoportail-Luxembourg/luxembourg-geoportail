<script setup lang="ts">
import { provide } from 'vue'
import { getUid } from 'ol/util'

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
  'toggleFeatureEdit',
  'toggleDock',
  'submitFeature',
])

provide('feature', props.feature)

function onToggleFeatureSub() {
  emit('toggleFeatureSub', getUid(props.feature), !props.isOpen)
}

function onToggleEditFeature() {
  emit('toggleFeatureEdit', getUid(props.feature), !props.isEditing)
}

function onClickDelete() {
  emit('clickDelete', getUid(props.feature))
}

function onResetInfo(prevLabel: string, prevDescription: string) {
  localFeature.label = prevLabel
  localFeature.description = prevDescription
}

function onResetStyle(prevStyle: DrawnFeatureStyle) {
  localFeature.featureStyle = { ...prevStyle }
}

function onSubmitEditFeature() {
  emit('submitFeature', props.feature)
}
</script>

<template>
  <!-- Drawing type and title -->
  <button
    data-cy="featItemName"
    class="lux-drawing-item-label flex items-center gap-1"
    :aria-expanded="isOpen"
    :aria-controls="`drawing-item-content-${feature.id}`"
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
          feature.featureType === 'drawnPoint' ||
          feature.featureType === 'drawnLabel',
        line: feature.featureType === 'drawnLine',
        polygon:
          feature.featureType === 'drawnPolygon' ||
          feature.featureType === 'drawnCircle',
      }"
    ></span>
    <!-- Feature label -->
    <span :class="{ selected: isOpen }">
      {{ feature.label }}
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
      :id="`drawing-item-content-${feature.id}`"
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
      />
    </div>
  </FeatureSubWrapper>
</template>
