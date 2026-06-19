<script setup lang="ts">
defineProps<{
  href: string
  label: string
  description: string
  target?: string
}>()
</script>

<template>
  <a
    :href="href"
    :target="target ?? '_blank'"
    rel="noopener noreferrer"
    class="flex items-center gap-3 px-4 py-1.5 text-white hover:bg-white/10 transition-colors"
  >
    <slot />
    <span class="flex flex-col">
      <span class="font-medium">{{ label }}</span>
      <span class="text-xs text-white/70">{{ description }}</span>
    </span>
  </a>
</template>
