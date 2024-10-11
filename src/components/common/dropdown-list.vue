<script setup lang="ts">
import { shallowRef, ShallowRef } from 'vue'

import DropdownContent from '@/components/common/dropdown-content.vue'
import { DropdownOptionModel } from './dropdown-list.model'

const props = withDefaults(
  defineProps<{
    placeholder: string
    options: DropdownOptionModel[]
    modelValue?: string
  }>(),
  {
    options: () => [{ label: 'Default label', value: 'Default value' }],
  }
)
const emit = defineEmits(['change'])
const selectedValue: ShallowRef<string | undefined> = shallowRef()

function onClickItem(event: MouseEvent) {
  selectedValue.value = (event.target as HTMLElement).dataset.value
  emit('change', selectedValue.value)
}
</script>

<template>
  <dropdown-content :placeholder="props.placeholder ?? props.options[0]?.label">
    <ul class="lux-dropdown-list">
      <li
        v-for="option in props.options"
        :key="option.value"
        :class="modelValue === option.value ? 'selected' : ''"
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
