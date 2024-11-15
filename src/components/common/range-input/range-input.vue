<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    min?: number
    max?: number
    step?: number
    value?: number
  }>(),
  {
    min: 0,
    max: 10,
    step: 1,
    value: 0,
  }
)
defineEmits(['change'])
const inputValue = ref(props.value)
</script>

<template>
  <div class="flex">
    <input
      type="range"
      class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
      :min="min"
      :max="max"
      :step="step"
      v-model.number="inputValue"
      @input="$emit('change', inputValue)"
    />
    <input
      type="number"
      class="w-12"
      :min="min"
      :max="max"
      :step="step"
      v-model="inputValue"
      @change="$emit('change', inputValue)"
    />
  </div>
</template>
