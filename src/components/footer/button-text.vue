<script setup lang="ts">
const props = defineProps<{
  label: string
  active?: boolean
}>()
</script>

<template>
  <button
    class="h-16 w-16 text-white bg-tertiary hover:bg-primary"
    :class="props.active ? 'bg-primary' : 'bg-tertiary'"
  >
    <span class="block">{{ props.label }}</span>
  </button>
</template>
