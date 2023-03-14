<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
const props = defineProps<{
  color?: string
  thematicName: string
}>()
</script>

<template>
  <div class="flex w-full items-center">
    <label for="colorId" class="w-40">{{ t(props.thematicName) }}</label>
    <div class="grow">
      <input
        v-if="color"
        id="colorId"
        type="color"
        class="w-11 h-5 py-[1px] px-[2px]"
        :value="props.color"
      />
    </div>
    <input
      type="checkbox"
      class="flex-none mr-3"
      :aria-label="
        t('Show or hide {{ thematicName }}', {
          thematicName: props.thematicName,
        })
      "
    />
  </div>
</template>
