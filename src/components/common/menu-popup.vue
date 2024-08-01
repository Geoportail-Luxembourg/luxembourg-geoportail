<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, ShallowRef } from 'vue'

const props = defineProps<{
    options: string[]
    direction?: 'up' | 'down'
  }>()
const emit = defineEmits(['change'])
const isOpen: ShallowRef<boolean> = shallowRef(false)
const selectedValue: ShallowRef<string | undefined> = shallowRef()

function handleClick(event: MouseEvent) {
  event.stopPropagation()
  toggleDropdown()
}

function toggleDropdown(forceOpen?: boolean) {
  isOpen.value = forceOpen ?? !isOpen.value
}

function onClickOpenBtn(event: MouseEvent) {
  event.stopImmediatePropagation()
  toggleDropdown()
}

function onClickItem(event: MouseEvent) {
  selectedValue.value = (event.target as HTMLElement).dataset.value
  emit('change', selectedValue.value)
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

onMounted(() => document.addEventListener('click', onClickOutsideOpenBtn))
onUnmounted(() => document.removeEventListener('click', onClickOutsideOpenBtn))
</script>

<template>
  <div class="lux-menu-popup">
    <button class="float-right" @click="handleClick">
      <i class="fa-solid fa-square-caret-down"></i>
    </button>

    <ul
        class="lux-menu-popup-list absolute"
        :class="isOpen ? '' : 'hidden'"
        tabindex="-1"
      >
        <li
          v-for="option in props.options"
          :key="option"
        >
          <button
            class="lux-dropdown-list-item"
            :aria-label="option"
            :data-value="option"
            @click="onClickItem"
          >
            {{ option }}
          </button>
        </li>
      </ul>
  </div>
</template>
