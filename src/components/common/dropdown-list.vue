<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, ShallowRef } from 'vue'
import { DropdownOptionModel } from './dropdown-list.model'

export interface Props {
  placeholder: string
  options: DropdownOptionModel[]
}
const props = defineProps<Props>()
const isOpen: ShallowRef<boolean> = shallowRef(false)
const selectedValue: ShallowRef<string | undefined> = shallowRef()

function toggleDropdown(forceOpen?: boolean) {
  isOpen.value = forceOpen === void 0 ? !isOpen.value : forceOpen
}

function onClickOpenBtn(event: MouseEvent) {
  event.stopImmediatePropagation()
  toggleDropdown()
}

function onClickItem(event: MouseEvent) {
  selectedValue.value = (event.target as HTMLElement).dataset.value
  const customEvent = new CustomEvent('change', {
    detail: {
      value: selectedValue.value,
    },
  })

  dispatchEvent(customEvent)
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

onMounted(() => {
  document.addEventListener('click', onClickOutsideOpenBtn)
})

onUnmounted(() => document.removeEventListener('click', onClickOutsideOpenBtn))
</script>

<template>
  <div class="lux-dropdown">
    <div>
      <button
        type="button"
        class="lux-btn"
        id="menu-button"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        @click="onClickOpenBtn"
      >
        <span>{{ props.placeholder ?? props.options[0].label }}</span
        ><span class="lux-caret"></span>
      </button>
    </div>
    <ul class="lux-dropdown-list" :class="isOpen ? '' : 'hidden'" tabindex="-1">
      <li v-for="option in props.options" :key="option.value">
        <button
          class="lux-dropdown-list-item"
          :data-value="option.value"
          @click="onClickItem"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
