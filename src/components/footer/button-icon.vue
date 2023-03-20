<script setup lang="ts">
const props = defineProps<{
  label: string
  icon: string
}>()
</script>

<template>
  <button class="h-full w-16 hover:text-white hover:bg-primary">
    <div
      class="text-[2rem] -mt-1.5 -mb-3 after:font-icons"
      :class="`after:content-${props.icon}`"
    ></div>
    <div class="uppercase">{{ props.label }}</div>
  </button>
</template>
