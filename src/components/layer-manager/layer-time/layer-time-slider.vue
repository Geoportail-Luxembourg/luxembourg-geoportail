<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import { formatTimeValue } from '@/services/time.utils'
import { Layer, LayerTimeMode } from '@/stores/map.store.model'
import SliderRange from '@/components/common/slider-range/slider-range.vue'

const { t } = useTranslation()

const props = defineProps<{
  layer: Layer
}>()
const emit = defineEmits<{
  (e: 'changeTime', dateStart?: string, dateEnd?: string): void
}>()

const selectedMinValue = computed(() =>
  props.layer.time?.values?.findIndex(
    val => val === props.layer.currentTimeMinValue
  )
)
const selectedMaxValue = computed(() =>
  props.layer.time?.values?.findIndex(
    val => val === props.layer.currentTimeMaxValue
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

function sliderValueToTimeValueMapper(selectedValue: number) {
  const selectedTimeValue = timeValues.value[selectedValue]

  return new Date(selectedTimeValue).toISOString()
}

function onChangeSingleDate(event: Event) {
  const cursorIndex = parseInt((event.target as HTMLInputElement).value)
  const newDate = sliderValueToTimeValueMapper(cursorIndex)

  emit('changeTime', newDate)
}

function onChangeRangeDate(min: number, max: number) {
  const minDate = sliderValueToTimeValueMapper(min)
  const maxDate = sliderValueToTimeValueMapper(max)

  emit('changeTime', minDate, maxDate)
}
</script>

<template>
  <div class="lux-time-slider w-full">
    <!-- Slider LayerTimeMode.VALUE -->
    <div
      class="lux-time-slider-value"
      v-if="layer.time?.mode === LayerTimeMode.VALUE"
    >
      <input
        class="lux-slidebar"
        min="0"
        type="range"
        :max="sliderNbSteps - 1"
        :value="selectedMinValue"
        @change="onChangeSingleDate"
      />
    </div>
    <!-- Slider LayerTimeMode.RANGE -->
    <div
      class="lux-time-slider-range mr-1.5"
      v-if="layer.time?.mode === LayerTimeMode.RANGE"
    >
      <slider-range
        :ariaLabelMin="`${t('Modifier la date de début', { ns: 'client' })}`"
        :ariaLabelMax="`${t('Modifier la date de fin', { ns: 'client' })}`"
        :minValue="0"
        :maxValue="sliderNbSteps - 1"
        :selectedMinValue="selectedMinValue ?? 0"
        :selectedMaxValue="selectedMaxValue ?? sliderNbSteps - 1"
        :totalSteps="sliderNbSteps"
        @change="onChangeRangeDate"
      />
    </div>

    <!-- Display localized time values -->
    <div class="lux-time-displayed-dates">
      <div
        class="lux-time-start-date grow"
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
        class="lux-time-slider-end-date grow text-right"
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
