<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'
import { AlertNotification } from '@/stores/alert-notifications.store.model'

defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps<{
  notification: AlertNotification
}>()
const show: ShallowRef<boolean> = shallowRef(true)

function onEnter(el: Element, done: () => void) {
  setTimeout(() => {
    show.value = false
  }, props.notification.duration)

  done()
}
</script>

<template>
  <Transition
    name="fade-out"
    appear
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
    @enter="onEnter"
    @after-leave="$emit('close')"
  >
    <div
      data-cy="notification"
      v-if="show"
      v-dompurify-html="props.notification.message"
      class="lux-alert"
      :class="`lux-${props.notification.type}`"
      role="alert"
    ></div>
  </Transition>
</template>
