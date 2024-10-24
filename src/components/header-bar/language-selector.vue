<script setup lang="ts">
import { computed, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import DropdownList from '@/components/common/dropdown-list.vue'

import { useAppStore } from '@/stores/app.store'
import { layerMetadataService } from '@/services/layer-metadata/layer-metadata.service'
import { statePersistorLangService } from '@/services/state-persistor/state-persistor-lang.service'

const { i18next, t } = useTranslation()
const { setLang } = useAppStore()
const { lang } = storeToRefs(useAppStore())
const availableLanguages = computed(() =>
  ['en', 'de', 'fr', 'lb'].map(lang => ({
    label: t(lang),
    value: lang,
    ariaLabel: t('Change language: {{lang}}', { ns: 'app', lang }),
  }))
)
const placeholder = t('Change language', { ns: 'app' })

statePersistorLangService.bootstrap()

watch(
  () => i18next.language,
  () => {
    // Clear layers metadata cache, need to perform a new request to get metadata in the right language
    layerMetadataService.clearCache()
  }
)

function changeLanguages(lang: string) {
  i18next.changeLanguage(lang)
  setLang(lang)
}
</script>

<template>
  <dropdown-list
    class="lux-navbar-dropdown lux-dropdown-inline text-white h-full"
    :options="availableLanguages"
    :placeholder="placeholder"
    v-model="lang"
    @change="changeLanguages"
  ></dropdown-list>
</template>
