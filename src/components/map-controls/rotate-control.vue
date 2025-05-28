<script setup lang="ts">
import Rotate from 'ol/control/Rotate'
import { Options } from 'ol/control/Control'
import useControl from '@/composables/control/control.composable'

const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
  }>(),
  {}
)

useControl(Rotate, <Options>props)
</script>

<template>
  <div v-if="false"></div>
</template>
