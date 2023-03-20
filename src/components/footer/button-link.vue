<script setup lang="ts">
const props = defineProps<{
  label: string
  link: string
}>()
</script>

<template>
  <span
    class="h-full flex flex-col justify-center px-[7px] uppercase hover:text-white hover:bg-primary"
  >
    <a :href="`${props.link}`" target="_blank">{{ $props.label }}</a>
  </span>
</template>
