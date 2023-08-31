<script setup lang="ts">
import { computed } from 'vue'

import { formatTimeValue } from '@/services/time.utils'
import { Layer, LayerTimeMode } from '@/stores/map.store.model'

const props = defineProps<{
  layer: Layer
}>()
const emit = defineEmits<{
  (e: 'changeTime', dateStart: string): void
}>()

const sliderValue = computed(() =>
  props.layer.time?.values?.findIndex(
    val => val === props.layer.currentTimeMinValue
  )
)
const timeValues = computed(computeTimeValues)
const sliderNbSteps = computed(() => timeValues.value?.length)

function computeTimeValues() {
  // Copy from legacy function in v3: timeSliderComponent getTimeValueList_()
  const layerTime = props.layer.time
  const timeValueList: number[] = []

  if (!layerTime) {
    return timeValueList
  }

  if (layerTime.values) {
    return layerTime.values
  }

  // maxValue == null means the UI shall use the current date
  const minDate = new Date(layerTime.minValue)
  const maxDate = new Date(layerTime.maxValue ?? Date.now())
  const maxNbValues = 1024
  const endDate = new Date(minDate.getTime())
  const layerTimeInterval = layerTime.interval ?? [0, 1, 0, 0]

  endDate.setFullYear(
    minDate.getFullYear() + maxNbValues * layerTimeInterval[0]
  )
  endDate.setMonth(
    minDate.getMonth() + maxNbValues * layerTimeInterval[1],
    minDate.getDate() + maxNbValues * layerTimeInterval[2]
  )
  endDate.setSeconds(minDate.getSeconds() + maxNbValues * layerTimeInterval[3])

  if (endDate > maxDate) {
    // Transform interval to a list of values when the number
    // of values is below a threshold (maxNbValues)
    for (let i = 0; ; i++) {
      const nextDate = new Date(minDate.getTime())
      nextDate.setFullYear(minDate.getFullYear() + i * layerTimeInterval[0])
      nextDate.setMonth(
        minDate.getMonth() + i * layerTimeInterval[1],
        minDate.getDate() + i * layerTimeInterval[2]
      )
      nextDate.setSeconds(minDate.getSeconds() + i * layerTimeInterval[3])

      if (nextDate <= maxDate) {
        timeValueList.push(nextDate.getTime())
      } else {
        break
      }
    }
  }

  return timeValueList
}

function onChange(event: Event) {
  const cursorIndex = parseInt((event.target as HTMLInputElement).value)
  const selectedTimeValue = timeValues.value[cursorIndex]

  emit('changeTime', new Date(selectedTimeValue).toISOString())
}
</script>

<template>
  <div class="lux-time-slider w-full">
    <!-- Slider -->
    <div>
      <input
        class="lux-time-slider-slidebar"
        min="0"
        type="range"
        :max="sliderNbSteps - 1"
        :value="sliderValue"
        @change="onChange"
      />
    </div>

    <!-- Display localized time values -->
    <div class="lux-time-slider-displayed-dates">
      <div
        class="lux-time-slider-start-date"
        v-if="
          layer.time?.mode === LayerTimeMode.RANGE ||
          layer.time?.mode === LayerTimeMode.VALUE
        "
      >
        <span>{{
          layer.currentTimeMinValue
            ? formatTimeValue(layer.currentTimeMinValue, layer.time?.resolution)
            : '-'
        }}</span>
      </div>

      <div
        class="lux-time-slider-end-date"
        v-if="layer.time?.mode === LayerTimeMode.RANGE"
      >
        <span>{{
          layer.currentTimeMaxValue
            ? formatTimeValue(layer.currentTimeMaxValue, layer.time?.resolution)
            : '-'
        }}</span>
      </div>
    </div>
  </div>
</template>
