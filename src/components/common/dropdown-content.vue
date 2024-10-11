<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, ShallowRef } from 'vue'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    enableClickOutside?: boolean
  }>(),
  {
    enableClickOutside: true,
  }
)
const isOpen: ShallowRef<boolean> = shallowRef(false)

function toggleDropdown(forceOpen?: boolean) {
  isOpen.value = forceOpen === void 0 ? !isOpen.value : forceOpen
}

function onClickOpenBtn(event: MouseEvent) {
  event.stopImmediatePropagation()
  toggleDropdown()
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

onMounted(
  () =>
    props.enableClickOutside &&
    document.addEventListener('click', onClickOutsideOpenBtn)
)
onUnmounted(
  () =>
    props.enableClickOutside &&
    document.removeEventListener('click', onClickOutsideOpenBtn)
)
</script>

<template>
  <div class="lux-dropdown">
    <div class="h-full">
      <button
        type="button"
        class="lux-btn lux-dropdown-btn"
        :class="isOpen ? 'expanded' : ''"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        @click="onClickOpenBtn"
      >
        <span>{{ props.placeholder }}</span
        ><span class="lux-caret"></span>
      </button>
    </div>
    <div class="lux-dropdown-wrapper">
      <div
        class="lux-dropdown-content"
        :class="isOpen ? '' : 'hidden'"
        tabindex="-1"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
