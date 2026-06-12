<script setup lang="ts">
const props = defineProps<{
  label: string
  icon: string
  active?: boolean
  ariaLabel?: string
  iconClass?: string
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
      v-if="props.active || !props.iconClass"
      class="block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3 after:font-icons after:w-8 after:max-h-4 after:inline-block"
      :class="props.active ? 'lux-close-cross' : `after:content-${props.icon}`"
      aria-hidden="true"
    ></span>
    <span
      v-else
      class="block text-[1.7rem] sm:text-[2rem] -mt-1.5 -mb-3"
      :class="props.iconClass"
      aria-hidden="true"
    ></span>
    <span
      class="block text-[13px] sm:text-base uppercase"
      :class="props.iconClass && !props.active ? 'translate-y-px' : ''"
      >{{ props.label }}</span
    >
  </button>
</template>
