<script setup lang="ts">
import { provide } from 'vue'
import { getUid } from 'ol/util'

import { DrawnFeature } from '@/services/draw/drawn-feature'

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
const emit = defineEmits([
  'clickDelete',
  'closePopup',
  'toggleFeatureSub',
  'toggleFeatureEdit',
  'toggleDock',
])

provide('feature', props.feature)

function onToggleFeatureSub() {
  emit('toggleFeatureSub', getUid(props.feature), !props.isOpen)
}

function onToggleEditFeature() {
  emit('toggleFeatureEdit', getUid(props.feature), !props.isEditing)

  alert('TODO: Toggle edition mode')
}

function onClickDelete() {
  emit('clickDelete', props.feature.id)
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
    <!-- TODO: create icons for label and circle -->
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
    :feature="feature"
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
        :feature="feature"
        @toggleEditFeature="onToggleEditFeature"
        @toggleDock="() => emit('toggleDock')"
        @clickDelete="onClickDelete"
      />
    </div>
  </FeatureSubWrapper>
</template>
