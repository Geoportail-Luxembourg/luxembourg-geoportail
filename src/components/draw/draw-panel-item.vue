<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import DrawPanelItemSub from './draw-panel-item-sub.vue'

const { t } = useTranslation()
defineProps<{
  isOpen: boolean
  drawingId: number
  feature: string
}>()
</script>

<template>
  <!-- Drawing type and title -->
  <button
    class="lux-drawing-item-label flex items-center gap-1"
    :aria-expanded="isOpen"
    :aria-controls="`drawing-item-content-${drawingId}`"
    @click="$emit('closeFeatureItemSub', !isOpen)"
  >
    <span
      class="sortable-handle drag-handle fa fa-reorder ui-sortable-handle cursor-move"
    ></span>
    <span class="lux-icon point" v-if="feature === 'Point'"></span>
    <span class="lux-icon line" v-if="feature === 'LineString'"></span>
    <span class="lux-icon polygon" v-if="feature === 'Polygon'"></span>
    <span>{{ t('desfese') }}</span>
  </button>

  <!-- Drawing details -->
  <div
    v-if="isOpen"
    class="lux-drawing-item-content"
    :id="`drawing-item-content-${drawingId}`"
  >
    <DrawPanelItemSub :is-editing="false" :feature="feature" />
  </div>
</template>
