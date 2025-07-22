<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
import { useThemeStore } from '@/stores/config.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import AuthForm from '@/components/auth/auth-form.vue'
import DropdownContent from '@/components/common/dropdown-content.vue'
import LanguageSelector from '@/components/header-bar/language-selector.vue'
import SearchDropdown from '@/components/search/search-dropdown.vue'

const { t } = useTranslation()
const appStore = useAppStore()
const { toggleThemeGrid } = appStore
const { themeName } = storeToRefs(useThemeStore())
const { authenticated } = storeToRefs(useUserManagerStore())
const isAuthFormOpened = ref(false)
const isLangOpened = ref(false)
const isMobileSearchOpen = ref(false)

// Close auth form dropdown when authentification done
watch(
  authenticated,
  authenticated => authenticated && (isAuthFormOpened.value = false)
)

function onToggleDropdownLang(isOpen: boolean) {
  isLangOpened.value = isOpen

  if (isOpen) {
    isAuthFormOpened.value = false
  }
}

function onToggleDropdownAuth(isOpen: boolean) {
  isAuthFormOpened.value = isOpen

  if (isOpen) {
    isLangOpened.value = false
  }
}
</script>

<template>
  <header class="w-full h-14 flex bg-white shadow-header z-10 shrink-0">
    <div class="flex-2 p-[5px]">
      <img src="@/assets/images/gov-light.png" />
    </div>
    <div class="grow flex justify-center items-center">
      <search-dropdown class="hidden md:block" />
      <search-dropdown v-if="isMobileSearchOpen" class="block md:hidden" />
    </div>
    <div>
      <ul class="h-full flex">
        <!-- Theme selector -->
        <li class="hidden md:flex">
          <button
            class="flex items-center before:font-icons before:text-3xl before:w-16 text-primary uppercase h-full mr-3"
            :class="`before:content-${themeName}`"
            data-cy="selectedThemeIcon"
            @click="toggleThemeGrid"
          >
            <span class="hidden lg:inline-block">{{ t(`${themeName}`) }}</span>
          </button>
        </li>
        <!-- Search dropdown -->
        <li class="block md:hidden">
          <button
            class="lux-btn lux-dropdown-btn h-full"
            @click="isMobileSearchOpen = !isMobileSearchOpen"
          >
            <span
              class="before:font-icons before:text-3xl after:font-icons after:text-3xl"
              :class="[
                { 'lux-navbar-search-dropdown': !isMobileSearchOpen },
                { 'lux-navbar-search-close': isMobileSearchOpen },
              ]"
            >
            </span>
          </button>
        </li>
        <!-- Language selector -->
        <li class="border-l-[1px] border-stone-300 h-full">
          <language-selector
            data-cy="langSelect"
            class="flex-none h-full"
            :isOpen="isLangOpened"
            @toggleDropdown="onToggleDropdownLang"
          ></language-selector>
        </li>

        <!-- Auth -->
        <li class="border-l-[1px] border-stone-300 h-full">
          <dropdown-content
            data-cy="authFormIcon"
            class="lux-navbar-dropdown lux-navbar-dropdown-auth h-full"
            :enableClickOutside="false"
            :isOpen="isAuthFormOpened"
            @toggleDropdown="onToggleDropdownAuth"
          >
            <auth-form class="w-80" />
          </dropdown-content>
        </li>
      </ul>
    </div>
  </header>
</template>
