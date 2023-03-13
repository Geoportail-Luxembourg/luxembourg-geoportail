<script setup lang="ts">
const props = defineProps<{
  styleName: string
  colors: string[]
}>()
</script>

<template>
  <span
    v-for="(color, i) in props.colors"
    :key="`${styleName}-${i}`"
    class="grow m-px"
    :style="`background-color: ${color}`"
  >
    &nbsp;
  </span>
</template>
