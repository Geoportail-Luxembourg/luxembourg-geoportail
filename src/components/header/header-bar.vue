<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { watch } from 'vue'
import LanguageSelector from '@/components/nav-bars/language-selector.vue'
import { useAppStore } from '@/stores/app.store'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/config.store'
import { themeSelectorService } from '../theme-selector/theme-selector.service'

const { t } = useTranslation()
const appStore = useAppStore()
const { layersOpen } = storeToRefs(appStore)
const { setLayersOpen } = appStore
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

watch(
  theme,
  theme => {
    if (theme) {
      themeSelectorService.setCurrentThemeColors(theme.name)
    }
  },
  { immediate: true }
)
</script>

<template>
  <header class="w-full h-14 flex bg-white shadow-header z-10 shrink-0">
    <div class="flex-2 p-[5px]">
      <img src="./../../assets/header/gov-light.8b5db4.png" />
    </div>
    <div class="grow text-center">search</div>
    <div>
      <ul class="h-full flex">
        <li>
          <button
            class="flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3"
            :class="`before:content-${theme?.name}`"
            data-cy="selectedThemeIcon"
            @click="() => setLayersOpen(!layersOpen)"
          >
            <span class="hidden lg:inline-block">{{
              t(`${theme?.name}`)
            }}</span>
          </button>
        </li>
        <li class="border-l-[1px] border-stone-300 h-full">
          <language-selector
            data-cy="langSelect"
            class="flex-none h-full"
          ></language-selector>
        </li>
      </ul>
    </div>
  </header>
</template>
