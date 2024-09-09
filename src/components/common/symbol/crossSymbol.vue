<script setup lang="ts">
withDefaults(
  defineProps<{
    fillColor?: string
    fontSize?: number
    height?: number
    width?: number
  }>(),
  {
    fillColor: 'red',
    fontSize: 42,
    height: 18,
    width: 18,
  }
)
</script>

<template>
  <svg :height="height" :width="width">
    <text x="1" :y="height + 2" :font-size="fontSize" :fill="fillColor">+</text>
  </svg>
</template>
