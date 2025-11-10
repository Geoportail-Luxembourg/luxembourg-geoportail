<script setup lang="ts">
const props = defineProps<{
  label: string
  icon: string
  active?: boolean
  ariaLabel?: string
}>()
</script>

<template>
  <button
    class="h-[42px] w-full sm:h-full sm:w-16 hover:text-white hover:bg-primary"
    :class="props.active ? 'bg-primary text-white' : ''"
    :aria-label="props.ariaLabel || props.label"
    :aria-pressed="props.active !== undefined ? props.active : undefined"
  >
    <span
      class="block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons"
      :class="props.active ? 'lux-close-cross' : `after:content-${props.icon}`"
      aria-hidden="true"
    ></span>
    <span class="block text-[13px] sm:text-base uppercase">{{
      props.label
    }}</span>
  </button>
</template>
