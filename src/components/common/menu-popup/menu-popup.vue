<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, ShallowRef, Ref, ref, watch } from 'vue'

const props = defineProps<{
    items: {label: string, action?: (event?: MouseEvent) => any}[]
    direction?: 'up' | 'down'
    ariaLabel?: string
    ariaLabelledby?: string
  }>()
const emit = defineEmits(['change'])
const isOpen: ShallowRef<boolean> = shallowRef(false)
const selectedValue: ShallowRef<string | undefined> = shallowRef()
const btnElement: Ref<HTMLElement | null> = ref(null)
const ddElement: Ref<HTMLElement | null> = ref(null)

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

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

onMounted(() => document.addEventListener('click', onClickOutsideOpenBtn))
onUnmounted(() => document.removeEventListener('click', onClickOutsideOpenBtn))

watch((isOpen), isOpen => {
  if (!isOpen) return

  const opener = btnElement.value!
  const dropdown = ddElement.value!
  const rect = opener.getBoundingClientRect()
  const top = props.direction === 'down' ? rect.bottom : rect.top - dropdown.offsetHeight

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
        >
          <slot :name="`item`" :item="item">
            {{ item.label }}
          </slot>
        </li>
      </ul>
    </Teleport>
  </div>
</template>
