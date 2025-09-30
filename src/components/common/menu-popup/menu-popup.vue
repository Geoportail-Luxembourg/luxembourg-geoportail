<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  shallowRef,
  ShallowRef,
  Ref,
  ref,
  watch,
} from 'vue'

import { type MenuPopupItem } from './menu-popup.d'

const props = defineProps<{
  items: MenuPopupItem[]
  direction?: 'up' | 'down'
  ariaLabel?: string
  ariaLabelledby?: string
}>()
const isOpen: ShallowRef<boolean> = shallowRef(false)
const btnElement: Ref<HTMLElement | null> = ref(null)
const ddElement: Ref<HTMLElement | null> = ref(null)

function handleClick(event: MouseEvent) {
  event.stopPropagation()
  toggleDropdown()
}

function toggleDropdown(forceOpen?: boolean) {
  isOpen.value = forceOpen ?? !isOpen.value
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

onMounted(() => document.addEventListener('click', onClickOutsideOpenBtn))
onUnmounted(() => document.removeEventListener('click', onClickOutsideOpenBtn))

watch(isOpen, isOpen => {
  if (!isOpen) return

  const opener = btnElement.value!
  const dropdown = ddElement.value!
  const rect = opener.getBoundingClientRect()
  const top =
    props.direction === 'down' ? rect.bottom : rect.top - dropdown.offsetHeight

  dropdown.style.top = `${top}px`
  dropdown.style.left = `${rect.left + rect.width - dropdown.offsetWidth}px`
})
</script>

<template>
  <div class="lux-menu-popup">
    <button @click="handleClick" ref="btnElement">
      <slot></slot>
    </button>

    <Teleport to="body">
      <ul
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledby"
        class="lux-menu-popup-list"
        :class="isOpen ? '' : 'invisible'"
        ref="ddElement"
        role="menu"
      >
        <li
          v-for="item in props.items"
          :key="item.label"
          :class="item.separator ? 'border-b-[1px] pb-2 mb-2' : ''"
        >
          <slot v-if="item.label" :name="`item`" :item="item">
            {{ item.label }} {{ item.separator }}
          </slot>
        </li>
      </ul>
    </Teleport>
  </div>
</template>
