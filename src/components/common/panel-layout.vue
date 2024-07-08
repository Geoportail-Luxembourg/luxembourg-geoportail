<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

defineProps<{
  dataCyValue: string
  closeFn: () => void
}>()
const { t } = useTranslation()
</script>

<template>
  <div :data-cy="dataCyValue" class="flex flex-col h-full pt-1.5">
    <!-- Panel title and close button -->
    <div
      v-if="$slots.header"
      class="h-16 shrink-0 flex justify-between lux-panel-title"
    >
      <slot name="header"></slot>
      <span
        ><button
          data-cy="panelClose"
          @click="() => closeFn()"
          :aria-label="t('Close', { ns: 'client' })"
          class="fa-sharp fa-solid fa-close"
        ></button
      ></span>
    </div>

    <!-- Tabs -->
    <div v-if="$slots.tabs" class="flex flex-row gap-2 h-10 text-2xl">
      <slot name="tabs"></slot>
    </div>

    <!-- Panel content -->
    <div class="relative grow p-2.5 bg-primary overflow-auto">
      <slot name="content" />
    </div>
  </div>
</template>
