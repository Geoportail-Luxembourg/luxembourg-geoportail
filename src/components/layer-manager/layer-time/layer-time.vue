<script setup lang="ts">
import { Layer, LayerTimeMode, LayerTimeWidget } from '@/stores/map.store.model'

import LayerTimeDatepickerValue from '../layer-time/layer-time-datepicker-value.vue'
import LayerTimeDatepickerRange from '../layer-time/layer-time-datepicker-range.vue'
import LayerTimeSlider from '../layer-time/layer-time-slider.vue'

defineProps<{
  layer: Layer
}>()

const emit = defineEmits<{
  (e: 'changeTime', dateStart?: string, dateEnd?: string): void
}>()

function onChangeTime(dateStart?: string, dateEnd?: string) {
  emit('changeTime', dateStart, dateEnd)
}
</script>

<template>
  <!-- Layer time: slider widget -->
  <layer-time-slider
    v-if="layer.time?.widget === LayerTimeWidget.SLIDER"
    :layer="layer"
    @changeTime="onChangeTime"
  ></layer-time-slider>

  <!-- Layer time: datepicker VALUE (one date) widget -->
  <layer-time-datepicker-value
    v-if="
      layer.time?.widget === LayerTimeWidget.DATEPICKER &&
      layer.time?.mode === LayerTimeMode.VALUE
    "
    :layer="layer"
    @changeTime="onChangeTime"
  ></layer-time-datepicker-value>

  <!-- Layer time: datepicker RANGE ("from:" date - "to:" date) widget -->
  <layer-time-datepicker-range
    v-if="
      layer.time?.widget === LayerTimeWidget.DATEPICKER &&
      layer.time?.mode === LayerTimeMode.RANGE
    "
    :layer="layer"
    @changeTime="onChangeTime"
  ></layer-time-datepicker-range>
</template>
