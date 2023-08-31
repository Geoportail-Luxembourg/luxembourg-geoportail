<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'
import { useTranslation } from 'i18next-vue'

import { Layer } from '@/stores/map.store.model'
import LayerTimeDatepicker from './layer-time-datepicker.vue'

const { t } = useTranslation()
const props = defineProps<{
  layer: Layer
}>()
const emit = defineEmits<{
  (e: 'changeTime', dateStart?: string, dateEnd?: string): void
}>()
const dateValueStart: ShallowRef<string | undefined> = shallowRef(
  props.layer.currentTimeMinValue
)
const dateValueEnd: ShallowRef<string | undefined> = shallowRef(
  props.layer.currentTimeMaxValue
)

function onChangeDateStart(dateValue: string) {
  emit('changeTime', dateValue, props.layer.currentTimeMaxValue)
}

function onChangeDateEnd(dateValue: string) {
  emit('changeTime', props.layer.currentTimeMinValue, dateValue)
}
</script>

<template>
  <div class="lux-time-slider w-full">
    <!-- Date START datepicker input -->
    <div>
      <label
        :for="`${layer.id}-time-slider-start`"
        class="lux-time-slider-label"
      >
        {{ t('From:') }}
      </label>
      <layer-time-datepicker
        :id="`${layer.id}-time-slider-start`"
        :date-value="dateValueStart"
        :min-date-allowed="props.layer.time?.minValue"
        :max-date-allowed="props.layer.time?.maxValue"
        @change="onChangeDateStart"
      />
    </div>

    <!-- Date END datepicker input -->
    <div>
      <label :for="`${layer.id}-time-slider-end`" class="lux-time-slider-label">
        {{ t('To:') }}
      </label>
      <layer-time-datepicker
        :id="`${layer.id}-time-slider-end`"
        :date-value="dateValueEnd"
        :min-date-allowed="props.layer.time?.minValue"
        :max-date-allowed="props.layer.time?.maxValue"
        @change="onChangeDateEnd"
      />
    </div>
  </div>
</template>
