<script setup lang="ts">
import type { Extent } from 'ol/extent'
import { Options } from 'ol/control/Control'

import useControl from '@/composables/control/control.composable'
import ZoomToExtent from './zoom-to-extent.model'

const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    tipLabel?: string
    extent: Extent
  }>(),
  {
    label: '\ue01b',
  }
)

useControl(ZoomToExtent, <Options>props)
</script>

<template>
  <div v-if="false"></div>
</template>
