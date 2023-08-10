<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'
import { useTranslation } from 'i18next-vue'

import { Layer, LayerTimeSlider, LayerTimeMode } from '@/stores/map.store.model'

const { t } = useTranslation()
const props = defineProps<{
  layer: Layer
}>()
defineEmits<{
  (e: 'changeRange'): void
}>()
const layerTime = <LayerTimeSlider>props.layer.time
const dateValueStart: ShallowRef<string | undefined> = shallowRef(
  props.layer.currentTime
)
const dateValueEnd: ShallowRef<string | undefined> = shallowRef(
  props.layer.currentTime
)
</script>

<template>
  <span class="font-bold">{{ t('Distance:') }}</span>
  <div class="lux-time-slider w-full">
    <div>
      <label :for="`${layer.id}-time-slider-start`" class="mr-1">
        {{
          layerTime.mode === LayerTimeMode.RANGE
            ? t('From:', { nsSeparator: '|' })
            : t('Date:', { nsSeparator: '|' })
        }}
      </label>
      <input
        :id="`${layer.id}-time-slider-start`"
        class="border-[#767676] border-[1px] pl-1"
        type="date"
        v-model="dateValueStart"
        @change="$emit('changeDateStart', dateValueStart)"
      />
    </div>
    <div v-if="layerTime.mode === LayerTimeMode.RANGE">
      <label :for="`${layer.id}-time-slider-end`" class="mr-1">
        {{ t('To:', { nsSeparator: '|' }) }}
      </label>
      <input
        :id="`${layer.id}-time-slider-end`"
        class="border-[#767676] border-[1px] pl-1"
        type="date"
        v-model="dateValueEnd"
        @change="$emit('changeDateEnd', dateValueEnd)"
      />
    </div>
  </div>
</template>
