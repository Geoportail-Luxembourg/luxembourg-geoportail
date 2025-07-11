<template>
  <button
    class="w-full text-left"
    @click="toggle"
    role="checkbox"
    :aria-checked="checked"
    :aria-label="label"
    tabindex="0"
  >
    <i class="fa-solid" :class="checked ? 'fa-check-square' : 'fa-square'"></i>
    <span class="ml-1 hover:underline">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  checked: boolean
}>()
const emit = defineEmits(['toggle'])

function toggle() {
  emit('toggle')
}
</script>
