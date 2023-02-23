<script setup lang="ts">
const props = defineProps<{
  colors: string[]
}>()
</script>

<template>
  <div
    v-for="color in props.colors"
    :key="color"
    class="grow m-px"
    :style="`background-color: ${color}`"
  >
    &nbsp;&nbsp;&nbsp;&nbsp;
  </div>
</template>
