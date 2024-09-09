<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fillColor?: string
    size?: number
  }>(),
  {
    fillColor: 'red',
    size: 18,
  }
)
const top = props.size / 2
const points = `0,${props.size} ${top},0 ${props.size},${props.size}`
</script>

<template>
  <svg :height="size" :width="size">
    <polygon :points="points" :fill="fillColor"></polygon>
  </svg>
</template>
