<script setup lang="ts">
const props = defineProps<{
  item: { label: string; action?: (event?: MouseEvent) => any }
}>()
const emit = defineEmits(['click'])

function onClick() {
  emit('click', props.item)
}
</script>

<template>
  <button class="lux-dropdown-list-item" @click="onClick">
    <slot>{{ item.label }}</slot>
  </button>
</template>
