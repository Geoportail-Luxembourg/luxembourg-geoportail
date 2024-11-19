<script setup lang="ts">
import { DrawnFeature } from '@/services/draw/drawn-feature'

defineProps<{
  feature: DrawnFeature
}>()
</script>

<template>
  <slot name="title"></slot>
  <slot name="color"></slot>
  <slot name="size" :maxsize="40"></slot>
  <slot name="angle"></slot>
  <slot name="footer"></slot>
</template>
