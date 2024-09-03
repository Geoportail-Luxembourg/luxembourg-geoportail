<script setup lang="ts">
withDefaults(
  defineProps<{
    fillColor?: string
    height?: number
    width?: number
  }>(),
  {
    fillColor: 'red',
    height: 18,
    width: 18,
  }
)
</script>

<template>
  <svg :height="height" :width="width">
    <rect height="100%" width="100%" :fill="fillColor" />
  </svg>
</template>
