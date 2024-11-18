<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { upperCaseFirst } from '@/services/utils'

const { t } = useTranslation()

const props = defineProps<{
  linestyle: string
  feature: DrawnFeature
}>()
const emit = defineEmits(['changeLinestyle'])

function onClickChangeLineStyle(linestyle: string) {
  emit('changeLinestyle', linestyle)
}
</script>

<template>
  <button
    :class="`lux-btn-grey${
      props.feature.featureStyle.linestyle === props.linestyle ? ' pressed' : ''
    }`"
    @click="onClickChangeLineStyle(props.linestyle)"
  >
    {{ t(upperCaseFirst(props.linestyle)) }}
  </button>
</template>
