<script setup lang="ts">
import { DrawnFeature } from '@/services/draw/drawn-feature'

defineProps<{
  feature: DrawnFeature
}>()
</script>

<template>
  <slot name="title"></slot>
  <slot name="color"></slot>
  <slot name="lineWidth"></slot>
  <slot name="style"></slot>
  <slot name="orientation"></slot>
  <slot name="footer"></slot>
</template>
