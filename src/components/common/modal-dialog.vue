<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ShallowRef, shallowRef } from 'vue'
const { t } = useTranslation()
defineProps({
  backdrop: {
    type: Boolean,
    default: true,
  },
  footer: {
    type: Boolean,
    default: true,
  },
  title: String,
})
defineEmits<{
  (e: 'close'): void
}>()
const displayModal: ShallowRef<boolean> = shallowRef(true)
function close() {
  displayModal.value = false
}
</script>

<template>
  <Teleport to="body">
    <!-- backdrop -->
    <div
      v-if="backdrop"
      class="fixed inset-0 bg-gray-900 opacity-40 z-[1050]"
    ></div>
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
        class="fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100]"
      >
        <div class="bg-white shadow-modal rounded-lg overflow-hidden max-w-2xl">
          <!-- header (title)-->
          <div class="relative flex flex-row justify-center p-4 border-b-[1px]">
            <h4 class="text-xl">{{ title }}</h4>
            <button
              type="button"
              class="absolute right-2 top-1 text-slate-400 text-[24px]"
              data-dismiss="modal"
              aria-label="Close"
              @click="close()"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <!-- content slot -->
          <div class="p-[15px] max-h-96 overflow-y-auto">
            <slot name="content"></slot>
          </div>
          <!-- footer (optional)-->
          <div v-if="footer" class="p-[15px] border-t-[1px]">
            <div class="flex flex-row justify-end">
              <button
                type="button"
                class="lux-btn"
                data-dismiss="modal"
                @click="close()"
              >
                {{ t('Close', { ns: 'client' }) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
