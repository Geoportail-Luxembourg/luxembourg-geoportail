<script setup lang="ts">
const props = defineProps<{
  label: string
  icon: string
  active?: boolean
  displayStar?: boolean
}>()
</script>

<template>
  <button
    class="h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary"
    :class="props.active ? 'bg-primary text-white' : ''"
  >
    <span
      class="block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons"
      :class="props.active ? 'lux-close-cross' : `after:content-${props.icon}`"
    ></span>
    <span class="block text-[13px] sm:text-base uppercase"
      >{{ props.label }}<span v-if="props.displayStar">(*)</span></span
    >
  </button>
</template>
