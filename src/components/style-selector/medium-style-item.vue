<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { StyleItem } from '@/composables/mvt-styles/mvt-styles.model'

const { t } = useTranslation()
const props = defineProps<{
  style: StyleItem
  colorEditable: boolean
}>()
const emit = defineEmits<{
  (e: 'changeStyle', style: StyleItem): void
}>()

function updateColor(colorChangeEvent: Event) {
  if (colorChangeEvent.target) {
    const newStyle = {
      ...props.style,
      color: (colorChangeEvent.target as HTMLInputElement).value,
    }
    emit('changeStyle', newStyle)
  }
}
function updateVisibility(visibilityChangeEvent: Event) {
  if (visibilityChangeEvent) {
    const newStyle = {
      ...props.style,
      visible: (visibilityChangeEvent.target as HTMLInputElement).checked,
    }
    emit('changeStyle', newStyle)
  }
}
</script>

<template>
  <div class="flex w-full items-center">
    <label for="colorId" class="w-40 m-0 font-medium">{{
      t(style.label)
    }}</label>
    <div class="grow">
      <input
        v-if="colorEditable && props.style.color"
        id="colorId"
        type="color"
        class="w-11 h-5 py-[1px] px-[2px]"
        :value="props.style.color"
        @input="updateColor"
      />
    </div>
    <input
      type="checkbox"
      class="flex-none mr-3"
      :checked="props.style.visible"
      @change="updateVisibility"
      :aria-label="
        t('Show or hide {{thematicName}}', {
          ns: 'app',
          thematicName: props.style.label,
        })
      "
    />
  </div>
</template>
