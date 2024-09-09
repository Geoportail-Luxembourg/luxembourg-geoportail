<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    radius?: number
    fillColor?: string
  }>(),
  {
    radius: 9,
    fillColor: 'red',
  }
)
const size = props.radius * 2
</script>

<template>
  <svg :height="size" :width="size">
    <circle :cx="radius" :cy="radius" :r="radius" :fill="fillColor" />
  </svg>
</template>
