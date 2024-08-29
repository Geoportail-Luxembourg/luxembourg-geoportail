<script setup lang="ts">
import FullScreen from 'ol/control/FullScreen'
import { Options } from 'ol/control/Control'

import useControl from '@/composables/control/control.composable'

const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    labelActive?: string
  }>(),
  {
    label: '\ue01c',
    labelActive: '\ue02c',
  }
)

useControl(FullScreen, <Options>props)
</script>

<template>
  <div v-if="false"></div>
</template>
