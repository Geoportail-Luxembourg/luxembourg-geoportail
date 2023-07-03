<script setup lang="ts">
import { useSlots } from 'vue'
const slots = useSlots()
defineProps({
  backdrop: {
    type: Boolean,
    default: true,
  },
  title: String,
})
defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <!-- backdrop -->
    <div
      v-if="backdrop"
      class="fixed inset-0 bg-gray-900 opacity-40 z-[1050]"
    ></div>
    <!-- modal -->
    <div
      class="fixed inset-x-0 inset-y-8 flex items-start justify-center z-[1100] shadow-lg"
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
            @click="$emit('close')"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <!-- content slot -->
        <div class="p-[15px] max-h-96 overflow-y-auto">
          <slot name="content"></slot>
        </div>
        <!-- footer slot -->
        <div v-if="slots.footer" class="p-[15px] border-t-[1px]">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
