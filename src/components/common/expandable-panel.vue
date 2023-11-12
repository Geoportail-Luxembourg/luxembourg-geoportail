<script lang="ts" setup>
defineProps<{
  expanded: boolean
  title: string
}>()
defineEmits<{
  (e: 'togglePanel'): void
}>()
</script>

<template>
  <button
    @click="$emit('togglePanel')"
    class="group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
    :aria-expanded="expanded"
  >
    <div class="grow" :class="expanded ? 'text-white' : 'text-secondary'">
      {{ title }}
    </div>
    <div class="leading-6">
      <div
        class="fa fa-sharp fa-solid group-hover:text-white text-primary"
        :class="expanded ? 'fa-caret-up' : 'fa-caret-down'"
      ></div>
    </div>
  </button>
  <div :class="expanded ? '' : 'hidden'">
    <slot></slot>
  </div>
</template>
