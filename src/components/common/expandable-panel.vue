<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  expanded: boolean
  title: string
}>()
defineEmits<{
  (e: 'togglePanel'): void
}>()

const panelId = computed(
  () => `expandable-panel-${props.title.replace(/\s+/g, '-').toLowerCase()}`
)
</script>

<template>
  <!-- Header -->
  <button
    @click="$emit('togglePanel')"
    class="group w-full text-left flex px-2 py-1.5 uppercase bg-tertiary"
    :aria-expanded="expanded"
    :aria-controls="panelId"
  >
    <span class="grow" :class="expanded ? 'text-white' : 'text-secondary'">
      {{ title }}
    </span>

    <span class="leading-6">
      <span
        aria-hidden="true"
        class="fa fa-sharp fa-solid group-hover:text-white text-primary"
        :class="expanded ? 'fa-caret-up' : 'fa-caret-down'"
      ></span>
    </span>
  </button>

  <!-- Dropdown content -->
  <transition name="slide">
    <div :id="panelId" v-if="expanded">
      <slot></slot>
    </div>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.5s;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
