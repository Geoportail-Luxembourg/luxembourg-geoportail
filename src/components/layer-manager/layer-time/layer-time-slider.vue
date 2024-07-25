<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import {
  dateToISOString,
  formatTimeValue,
  getClosestValue,
  DEFAULT_TIME_INTERVAL,
} from '@/services/time.utils'
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
const minLimit = computed(() =>
  props.layer.time?.minValue
    ? new Date(props.layer.time?.minValue).getTime()
    : 0
)
const maxLimit = computed(() =>
  props.layer.time?.maxValue
    ? new Date(props.layer.time?.maxValue).getTime()
    : 0
)
const sliderNbSteps = computed(() => maxLimit.value - minLimit.value)
const currentTimeMaxValue = ref(props.layer.currentTimeMaxValue)
const currentTimeMinValue = ref(props.layer.currentTimeMinValue)
const selectedMinValue = computed(() =>
  currentTimeMinValue.value
    ? new Date(currentTimeMinValue.value).getTime()
    : undefined
)
const selectedMaxValue = computed(() =>
  currentTimeMaxValue.value
    ? new Date(currentTimeMaxValue.value).getTime()
    : undefined
)
const selectedMinValueConverted = computed(() =>
  convertTimestampToPercent(selectedMinValue.value)
)
const selectedMaxValueConverted = computed(() =>
  convertTimestampToPercent(selectedMaxValue.value)
)

function convertTimestampToPercent(timestamp?: number) {
  return timestamp
    ? ((timestamp - minLimit.value) / sliderNbSteps.value) * 100
    : 0
}

function computeTimeValues() {
  // Copy from legacy function in v3: timeSliderComponent getTimeValueList_()
  const layerTime = props.layer.time
  const timeValueList: number[] = []

  if (!layerTime) {
    return undefined
  }

  if (layerTime.values) {
    return layerTime.values.map(time => new Date(time).getTime())
  }

  // NB. maxValue == null means the UI shall use the current date
  const minDate = new Date(layerTime.minValue)
  const maxDate = new Date(layerTime.maxValue ?? Date.now())
  const maxNbValues = 1024
  const endDate = new Date(minDate.getTime())
  const layerTimeInterval = layerTime.interval ?? DEFAULT_TIME_INTERVAL

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

/**
 * Compute the closest available layer date from the selected timestamp
 * legacy v3: timeSliderComponent.getClosestValue_()
 * @param timestamp The selected date (timestamp formatted)
 */
function sliderValueToTimeValueMapper(value: number) {
  const timestamp =
    (value / 100) * (maxLimit.value - minLimit.value) + minLimit.value
  const selectedTimeValue = getClosestValue(timestamp, {
    minValue: minLimit.value,
    maxValue: maxLimit.value,
    timeValueList: timeValues.value,
    timeInterval: props.layer.time?.interval,
  })

  return dateToISOString(selectedTimeValue) // Always use custom dateToISOString()
}

function onDraggingDates(min: number, max?: number) {
  const minDate = sliderValueToTimeValueMapper(min)
  currentTimeMinValue.value = minDate

  if (max) {
    const maxDate = sliderValueToTimeValueMapper(max)
    currentTimeMaxValue.value = maxDate
  }
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
        :ariaLabelMin="`${t('Edit the start date', { ns: 'client' })}`"
        :selectedMinValue="selectedMinValueConverted"
        @change="onChangeDates"
      />
    </div>
    <!-- Slider LayerTimeMode.RANGE -->
    <div
      class="lux-time-slider-range mr-1.5"
      v-if="layer.time?.mode === LayerTimeMode.RANGE"
    >
      <slider-range
        :ariaLabelMin="`${t('Edit the start date', { ns: 'client' })}`"
        :ariaLabelMax="`${t('Edit the end date', { ns: 'client' })}`"
        :selectedMinValue="selectedMinValueConverted"
        :selectedMaxValue="selectedMaxValueConverted"
        @change="onChangeDates"
      />
    </div>

    <!-- Display localized time values -->
    <div class="lux-time-displayed-dates">
      <!-- Display localized time values Min value -->
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
      <!-- Display localized time values Max value -->
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
