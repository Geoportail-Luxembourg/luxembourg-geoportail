<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'
import { useTranslation } from 'i18next-vue'

import { Layer } from '@/stores/map.store.model'
import LayerTimeDatepicker from './layer-time-datepicker.vue'

const { t } = useTranslation()
const props = defineProps<{
  layer: Layer
}>()
defineEmits<{
  (e: 'changeTime', dateStart: string): void
}>()
const dateValue: ShallowRef<string | undefined> = shallowRef(
  props.layer.currentTimeMinValue
)
</script>

<template>
  <div class="lux-time-slider w-full">
    <div>
      <label
        :for="`${layer.id}-time-slider-start`"
        class="lux-time-slider-label"
      >
        {{ t('Date:') }}
      </label>
      <layer-time-datepicker
        :id="`${layer.id}-time-slider-start`"
        :date-value="dateValue"
        :min-date-allowed="props.layer.time?.minValue"
        :max-date-allowed="props.layer.time?.maxValue"
        @change="$emit('changeTime', $event)"
      />
    </div>
  </div>
</template>
