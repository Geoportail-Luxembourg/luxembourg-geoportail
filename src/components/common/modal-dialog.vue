<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ShallowRef, shallowRef, onMounted, ref } from 'vue'
const { t } = useTranslation()
defineProps({
  footer: {
    type: Boolean,
    default: true,
  },
  maxHeight: {
    type: Boolean,
    default: false,
  },
  title: String,
  role: {
    type: String,
    default: 'dialog',
  },
})
defineEmits<{
  (e: 'close'): void
}>()
// focus for esc key
const modal = ref()
onMounted(() => {
  modal.value.focus()
})
const displayModal: ShallowRef<boolean> = shallowRef(true)
function close() {
  displayModal.value = false
}
</script>

<template>
  <Teleport to="body">
    <!-- backdrop -->
    <div class="fixed inset-0 bg-gray-900 opacity-40 z-[1050]"></div>
    <!-- modal -->
    <Transition
      appear
      enter-active-class="duration-200 ease-out"
      enter-from-class="transform opacity-0 -translate-y-60"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-60"
      @after-leave="$emit('close')"
    >
      <div
        v-if="displayModal"
        :role="role"
        ref="modal"
        tabindex="0"
        @keydown.esc.stop="close()"
        class="fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] outline-none"
      >
        <div class="bg-white shadow-modal rounded-lg overflow-hidden w-[700px]">
          <!-- header (title)-->
          <div
            class="relative flex flex-row items-center py-2 px-4 border-b-[1px]"
          >
            <h4 class="text-xl grow">{{ title }}</h4>
            <button
              type="button"
              class="text-slate-400 text-2xl"
              data-dismiss="modal"
              aria-label="Close"
              @click="close()"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <!-- content slot -->
          <div
            class="p-[15px] overflow-y-auto"
            :class="maxHeight ? 'max-h-96' : 'max-h-full'"
          >
            <slot name="content"></slot>
          </div>
          <!-- footer (optional)-->
          <div v-if="footer" class="p-[15px] border-t-[1px]">
            <slot name="footer">
              <div class="flex flex-row justify-end">
                <button class="lux-btn" data-dismiss="modal" @click="close()">
                  {{ t('Close', { ns: 'client' }) }}
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
