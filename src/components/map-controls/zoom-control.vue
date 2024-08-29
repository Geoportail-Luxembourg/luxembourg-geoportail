<script setup lang="ts">
import Zoom from 'ol/control/Zoom'
import { Options } from 'ol/control/Control'
import useControl from '@/composables/control/control.composable'

const props = withDefaults(
  defineProps<{
    className?: string
    zoomInLabel?: string
    zoomOutLabel?: string
  }>(),
  {
    zoomInLabel: '\ue032',
    zoomOutLabel: '\ue033',
  }
)

useControl(Zoom, <Options>props)
</script>

<template>
  <div v-if="false"></div>
</template>
