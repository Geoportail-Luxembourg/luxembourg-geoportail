<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string
}>()
</script>
<template>
  <dt>{{ props.label }}</dt>
  <dd>{{ props.value }}</dd>
</template>
