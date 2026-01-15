<script setup lang="ts">
const props = defineProps<{
  item: { label: string; action?: (event?: MouseEvent) => void }
  index?: number
  isFocused?: boolean
}>()
const emit = defineEmits(['click'])

function onClick() {
  emit('click', props.item)
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    event.stopPropagation()
    onClick()
  } else {
    // Empêcher la propagation de tous les événements clavier pour ne pas déplacer la carte
    event.stopPropagation()
  }
}
</script>

<template>
  <button
    class="lux-dropdown-list-item"
    @click="onClick"
    @keydown.stop="onKeyDown"
    role="menuitem"
    tabindex="-1"
  >
    <slot>{{ item.label }}</slot>
  </button>
</template>
