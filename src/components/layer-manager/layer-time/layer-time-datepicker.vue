<script setup lang="ts">
import { computed } from 'vue'
import { formatDateForInput } from '@/services/time.utils'

const props = withDefaults(
  defineProps<{
    minDateAllowed?: string
    maxDateAllowed?: string
    dateValue?: string
  }>(),
  {
    minDateAllowed: '',
    maxDateAllowed: '',
  }
)

const emit = defineEmits<{
  (e: 'change', dateValue: string): void
}>()

const minValue = computed(() => formatDateForInput(props.minDateAllowed))
const maxValue = computed(() => formatDateForInput(props.maxDateAllowed))

function onChange(event: Event) {
  emit('change', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    class="lux-time-datepicker"
    type="date"
    :min="minValue"
    :max="maxValue"
    :value="dateValue ? formatDateForInput(dateValue) : ''"
    @change="onChange"
  />
</template>
