<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { DrawnFeature } from '@/services/draw/drawn-feature'

const { t } = useTranslation()

const props = defineProps<{
  linestyle: String
  feature: DrawnFeature
}>()
const emit = defineEmits(['changeLinestyle'])

function onClickChangeLineStyle(linestyle) {
  emit('changeLinestyle', linestyle)
}
</script>

<template>
  <button
    :class="`lux-btn-grey rounded${
      props.feature.featureStyle.linestyle === props.linestyle ? ' pressed' : ''
    }`"
    @click="onClickChangeLineStyle(props.linestyle)"
  >
    {{ t(props.linestyle) }}
  </button>
</template>
