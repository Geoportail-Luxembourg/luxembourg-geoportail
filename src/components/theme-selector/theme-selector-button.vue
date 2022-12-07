<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import { ThemeNodeModel } from '../../services/themes/themes.model'

const { t } = useTranslation()
const props = defineProps<{
  themes: ThemeNodeModel[]
  currentTheme?: ThemeNodeModel
  isOpen?: boolean
}>()
const themesComputed = computed(() => {
  return props.themes?.slice(0, 8) || []
})
</script>

<template>
  <button
    class="w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary"
    :aria-expanded="props.isOpen"
  >
    <span class="py-0.5"
      >{{ t('Theme') }}: {{ t(`${props.currentTheme?.name}`) }}</span
    >
    <span
      class="px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white"
    >
      <span class="py-[3px]">{{ t('Changer') }}</span>
      <span class="flex flex-row flex-wrap ml-1 w-12">
        <div
          v-for="theme in themesComputed"
          :class="`h-2.5 w-2.5 m-px bg-${theme.name}-primary`"
          :key="theme.id"
        ></div>
      </span>
    </span>
  </button>
</template>
