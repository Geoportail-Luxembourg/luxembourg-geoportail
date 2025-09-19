<script setup lang="ts">
import { shallowRef, ShallowRef, toRef } from 'vue'

import DropdownContent from '@/components/common/dropdown-content.vue'
import { DropdownOptionModel } from './dropdown-list.model'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    options: DropdownOptionModel[]
    modelValue?: string
    direction?: 'up' | 'down'
  }>(),
  {
    options: () => [{ label: 'Default label', value: 'Default value' }],
    direction: 'down',
  }
)
const emit = defineEmits(['change'])
const selectedValue: ShallowRef<string | undefined> = shallowRef()
const direction = toRef(props.direction)

function onClickItem(event: MouseEvent) {
  event.preventDefault()
  selectedValue.value = (event.target as HTMLElement).dataset.value
  emit('change', selectedValue.value)
}

function getPlaceholder() {
  return props.modelValue !== undefined
    ? props.options.find(o => o.value === props.modelValue)?.label
    : props.placeholder
}
</script>

<template>
  <dropdown-content
    :placeholder="getPlaceholder()"
    :direction="direction"
    v-bind="$attrs"
  >
    <ul class="lux-dropdown-list" :class="direction">
      <li
        v-for="option in props.options"
        :key="option.value"
        :class="modelValue === option.value ? 'selected' : ''"
        :data-cy="`dropdownItem-${option.value}`"
      >
        <button
          class="lux-dropdown-list-item"
          :aria-label="option.ariaLabel"
          :data-value="option.value"
          @click="onClickItem"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </dropdown-content>
</template>
