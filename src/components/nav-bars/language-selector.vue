<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import DropdownList from '@/components/common/dropdown-list.vue'

import { useAppStore } from '@/stores/app.store'
import { statePersistorLangService } from '@/services/state-persistor/state-persistor-lang.service'

const { i18next, t } = useTranslation()
const { setLang } = useAppStore()
const { lang } = storeToRefs(useAppStore())
const availableLanguages = computed(() =>
  ['en', 'de', 'fr', 'lb'].map(lang => ({
    label: t(lang),
    value: lang,
    ariaLabel: t('Change language: {{lang}}', { lang: lang }),
  }))
)
const placeholder = t('Change language')

statePersistorLangService.bootstrap()

function changeLanguages(lang: string) {
  i18next.changeLanguage(lang)
  setLang(lang)
}
</script>

<template>
  <div>
    <dropdown-list
      class="lux-navbar-dropdown lux-dropdown-inline text-white h-full"
      :options="availableLanguages"
      :placeholder="placeholder"
      v-model="lang"
      @change="changeLanguages"
    ></dropdown-list>
  </div>
</template>
