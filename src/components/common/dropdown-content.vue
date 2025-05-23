<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, ShallowRef, watch, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    enableClickOutside?: boolean
    isOpen?: boolean
    direction?: 'up' | 'down'
  }>(),
  {
    enableClickOutside: true,
    isOpen: false,
  }
)
const emit = defineEmits(['toggleDropdown'])
const localIsOpen: ShallowRef<boolean> = shallowRef(props.isOpen)

watch(
  () => props.isOpen,
  isOpen => {
    localIsOpen.value = isOpen
  }
)

function toggleDropdown(forceOpen?: boolean) {
  localIsOpen.value = forceOpen === void 0 ? !localIsOpen.value : forceOpen

  emit('toggleDropdown', localIsOpen.value)
}

function onClickOpenBtn(event: MouseEvent) {
  event.stopImmediatePropagation()
  toggleDropdown()
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

const root = ref<HTMLElement | null>(null)
const className = ref<string>('')

onMounted(() => {
  props.enableClickOutside &&
    document.addEventListener('click', onClickOutsideOpenBtn)
  className.value = root.value
    ? 'lux-btn-' +
      getComputedStyle(root.value).getPropertyValue('--button-theme')
    : ''
})
onUnmounted(
  () =>
    props.enableClickOutside &&
    document.removeEventListener('click', onClickOutsideOpenBtn)
)
</script>

<template>
  <div class="lux-dropdown" v-bind="$attrs" ref="root">
    <div class="h-full w-full">
      <button
        type="button"
        class="lux-btn lux-dropdown-btn"
        :class="[localIsOpen ? 'expanded' : '', className]"
        :aria-expanded="localIsOpen"
        aria-haspopup="true"
        @click="onClickOpenBtn"
      >
        <span>{{ props.placeholder }}</span
        ><span
          class="lux-caret ml-1"
          :class="{ up: direction === 'up' }"
        ></span>
      </button>
    </div>
    <div class="lux-dropdown-wrapper">
      <div
        class="lux-dropdown-content"
        :class="localIsOpen ? '' : 'hidden'"
        tabindex="-1"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.up {
  transform: rotate(180deg);
}
</style>
