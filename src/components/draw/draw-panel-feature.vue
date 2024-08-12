<script setup lang="ts">
import { ref } from 'vue'

import DrawPanelFeatureSub from './draw-panel-feature-sub.vue'

const props = withDefaults(
  defineProps<{
    open?: boolean
    featureId: number
    feature: string
  }>(),
  {
    open: true,
  }
)

const isOpen = ref(props.open)
const emit = defineEmits(['closeFeatureItemSub'])

function onClick() {
  isOpen.value = !isOpen.value
  emit('closeFeatureItemSub', !isOpen.value)
}
</script>

<template>
  <!-- Drawing type and title -->
  <button
    class="lux-drawing-item-label flex items-center gap-1"
    :aria-expanded="isOpen"
    :aria-controls="`drawing-item-content-${featureId}`"
    @click="onClick"
  >
    <!-- Dragging button -->
    <span
      class="sortable-handle drag-handle fa fa-reorder ui-sortable-handle cursor-move"
    ></span>
    <!-- Type of feat. icon -->
    <span
      class="lux-icon"
      :class="{
        point: feature === 'Point',
        line: feature === 'LineString',
        polygon: feature === 'Polygon' || feature === 'Circle',
      }"
    ></span>
    <!-- Feature label -->
    <span :class="{ selected: isOpen }">
      {{ feature }}
    </span>
  </button>

  <!-- Drawing details -->
  <div
    v-if="isOpen"
    class="lux-drawing-item-content"
    :id="`drawing-item-content-${featureId}`"
  >
    <DrawPanelFeatureSub :is-editing="false" :feature="feature" />
  </div>
</template>
