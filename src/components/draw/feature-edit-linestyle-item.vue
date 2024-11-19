<script setup lang="ts">
import { inject, Reactive } from 'vue'
import { useTranslation } from 'i18next-vue'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { capitalize } from '@/services/utils'

defineProps<{
  linestyle: string
}>()

const { t } = useTranslation()
const emit = defineEmits(['changeLinestyle'])
const feature: Reactive<DrawnFeature> = inject('feature')!

function onClickChangeLineStyle(linestyle: string) {
  emit('changeLinestyle', linestyle)
}
</script>

<template>
  <button
    :class="`lux-btn-grey${
      feature.featureStyle.linestyle === linestyle ? ' pressed' : ''
    }`"
    @click="onClickChangeLineStyle(linestyle)"
  >
    {{ t(capitalize(linestyle)) }}
  </button>
</template>
