<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string
}>()
</script>
<template>
  <span class="font-bold">{{ props.label }}</span>
  <span class="col-span-2">{{ props.value }}</span>
</template>
