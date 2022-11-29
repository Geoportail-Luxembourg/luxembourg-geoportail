<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
const { t, i18next } = useTranslation()
import { computed } from 'vue'

const props = defineProps({
  bgTitle: {
    type: String,
    default: '',
  },
  bgName: {
    type: String,
    default: '',
  },
})

const buttonTitle = computed(() => {
  const localizedTitle = i18next.t(props.bgTitle)
  const hasTitle = props.bgTitle.length > 0
  const localizedLayerName = `${i18next.t('Background layer')}: ${i18next.t(
    props.bgName
  )}`
  return `${localizedTitle}${hasTitle ? '\n' : ''}${localizedLayerName}`
})

const buttonClasses = computed(
  () => `h-full w-full rounded-sm lux-bg-sel-icon
        lux-bg-sel-${props.bgName}
        bg-${props.bgName}_sm
        md:bg-${props.bgName}
        hd:bg-${props.bgName}_sm_hi
        hd_md:bg-${props.bgName}_hi`
)
</script>

<template>
  <button :title="buttonTitle" :class="buttonClasses" />
</template>
