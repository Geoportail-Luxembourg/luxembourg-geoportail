<script setup lang="ts">
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

defineProps<{
  feature: DrawnFeature
}>()
</script>

<template>
  <slot name="title"></slot>
  <slot name="color"></slot>
  <slot name="lineWidth"></slot>
  <slot name="transparency"></slot>
  <slot name="footer"></slot>
</template>
