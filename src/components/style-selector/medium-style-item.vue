<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { StyleItem } from '@/composables/mvt-styles/mvt-styles.model'

const { t } = useTranslation()
const props = defineProps<{
  style: StyleItem
  colorEditable: boolean
}>()
</script>

<template>
  <div class="flex w-full items-center">
    <label for="colorId" class="w-40">{{ t(style.label) }}</label>
    <div class="grow">
      <input
        v-if="colorEditable && props.style.color"
        id="colorId"
        type="color"
        class="w-11 h-5 py-[1px] px-[2px]"
        :value="props.style.color"
      />
    </div>
    <input
      type="checkbox"
      class="flex-none mr-3"
      :checked="props.style.visible"
      :aria-label="
        t('Show or hide {{ thematicName }}', {
          thematicName: props.thematicName,
        })
      "
    />
  </div>
</template>
