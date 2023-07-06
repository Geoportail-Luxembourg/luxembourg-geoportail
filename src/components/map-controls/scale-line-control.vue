<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ScaleLine from 'ol/control/ScaleLine'

import useControl from '@/composables/control/control.composable'

const controlElement = ref(null)
const props = withDefaults(
  defineProps<{
    className?: string
  }>(),
  {
    className: 'lux-scale-line', // Default from ol:'ol-scale-line'
  }
)

onMounted(() => {
  if (controlElement.value) {
    const scaleLineControl = useControl(ScaleLine, {
      className: props.className,
      ...{ target: controlElement.value },
    })
    scaleLineControl.addControlToMap()
  }
})
</script>

<template>
  <div ref="controlElement"></div>
</template>
