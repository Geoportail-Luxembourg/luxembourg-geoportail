<script setup lang="ts">
import { DrawFeature } from '@/stores/draw.store.model'

import FeatureSubContent from './feature-sub-content.vue'
import FeatureSubWrapper from './feature-sub-wrapper.vue'

const props = withDefaults(
  defineProps<{
    isDocked?: boolean
    isEditing?: boolean
    isOpen?: boolean
    feature: DrawFeature
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

function onToggleFeatureSub() {
  emit('toggleFeatureSub', props.feature.id, !props.isOpen)
}

function onToggleEditFeature() {
  emit('toggleFeatureEdit', props.feature.id, !props.isEditing)

  alert('TODO: Toggle edition mode')
}

function onClickDelete() {
  emit('clickDelete', props.feature.id)
}
</script>

<template>
  <!-- Drawing type and title -->
  <button
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
        point: feature.featureType === 'drawnPoint',
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
