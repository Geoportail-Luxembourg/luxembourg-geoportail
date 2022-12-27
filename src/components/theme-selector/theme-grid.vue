<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import { ThemeNodeModel } from '@/services/themes/themes.model'

const { t } = useTranslation()
const props = defineProps<{
  themes: ThemeNodeModel[]
}>()
</script>

<template>
  <div class="flex flex-row flex-wrap pl-2.5">
    <button
      class="relative shrink-0 h-[150px] w-1/2 px-2.5 text-start text-gray-100/40 uppercase hover:bg-[#ccc]"
      v-for="theme in props.themes"
      :key="theme.id"
      :class="`bg-${theme.name}-primary hover:text-${theme.name}-primary`"
      @click="$emit('setTheme', theme.name)"
    >
      <div class="text-2xl absolute top-5">{{ t(`${theme.name}`) }}</div>
      <div
        class="text-6xl absolute bottom-1 after:font-icons"
        :class="`after:content-${theme.name}`"
      ></div>
    </button>
  </div>
</template>
