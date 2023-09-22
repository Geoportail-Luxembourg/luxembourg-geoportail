<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { dateToISOString, formatTimeValue } from '@/services/time.utils'
import { Layer, LayerTimeMode } from '@/stores/map.store.model'
import SliderRange from '@/components/common/slider-range/slider-range.vue'

const { t } = useTranslation()

const props = defineProps<{
  layer: Layer
}>()
const emit = defineEmits<{
  (e: 'changeTime', dateStart?: string, dateEnd?: string): void
}>()
const timeValues = computed(computeTimeValues)
const sliderNbSteps = computed(() => timeValues.value?.length)
const currentTimeMaxValue = ref(props.layer.currentTimeMaxValue)
const currentTimeMinValue = ref(props.layer.currentTimeMinValue)
const selectedMinValue = computed(() =>
  props.layer.time?.values?.findIndex(val => val === currentTimeMinValue.value)
)
const selectedMaxValue = computed(() =>
  props.layer.time?.values?.findIndex(val => val === currentTimeMaxValue.value)
)

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

  return dateToISOString(selectedTimeValue) // Always use custom dateToISOString()
}

function onDraggingDates(min: number, max?: number) {
  const minDate = sliderValueToTimeValueMapper(min)
  const maxDate =
    max !== undefined ? sliderValueToTimeValueMapper(max) : undefined

  currentTimeMinValue.value = minDate
  currentTimeMaxValue.value = maxDate
}

function onChangeDates(min: number, max?: number, dragging?: boolean) {
  onDraggingDates(min, max)

  if (!dragging) {
    emit('changeTime', currentTimeMinValue.value, currentTimeMaxValue.value)
  }
}
</script>

<template>
  <div class="lux-time-slider w-full">
    <!-- Slider LayerTimeMode.VALUE -->
    <div
      class="lux-time-slider-value mr-1.5"
      v-if="layer.time?.mode === LayerTimeMode.VALUE"
    >
      <slider-range
        :ariaLabelMin="`${t('Modifier la date de début', { ns: 'client' })}`"
        :minValue="0"
        :maxValue="sliderNbSteps - 1"
        :selectedMinValue="selectedMinValue ?? 0"
        :totalSteps="sliderNbSteps"
        @change="onChangeDates"
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
        @change="onChangeDates"
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
          currentTimeMinValue
            ? formatTimeValue(currentTimeMinValue, layer.time?.resolution)
            : '-'
        }}</span>
      </div>

      <div
        class="lux-time-slider-end-date grow text-right"
        v-if="layer.time?.mode === LayerTimeMode.RANGE"
      >
        <span>{{
          currentTimeMaxValue
            ? formatTimeValue(currentTimeMaxValue, layer.time?.resolution)
            : '-'
        }}</span>
      </div>
    </div>
  </div>
</template>
