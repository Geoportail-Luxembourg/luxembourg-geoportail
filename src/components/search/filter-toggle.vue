<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  label: string
  checked: boolean
}>()
const emit = defineEmits(['toggle'])

function toggle() {
  emit('toggle')
}
</script>

<template>
  <button class="w-full text-left" @click="toggle">
    <i class="fa-solid" :class="checked ? 'fa-check-square' : 'fa-square'"></i>
    <span class="ml-1 hover:underline">{{ label }}</span>
  </button>
</template>
