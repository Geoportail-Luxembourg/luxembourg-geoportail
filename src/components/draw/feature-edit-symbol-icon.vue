<script setup lang="ts">
import { Ref, ref, inject, watch, Reactive, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'

import Circle from '@/components/common/symbol/circleSymbol.vue'
import Square from '@/components/common/symbol/squareSymbol.vue'
import Cross from '@/components/common/symbol/crossSymbol.vue'
import Triangle from '@/components/common/symbol/triangleSymbol.vue'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import {
  fetchPrivateSymbols,
  fetchPublicSymbols,
  uploadSymbol,
  type Symbol,
} from '@/services/api/api-symbols.service'
import { DrawnFeatureStyleShape, Symboltype } from '@/stores/draw.store.model'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'

import FeatureEditSymbolList from './feature-edit-symbol-list.vue'

defineEmits<{
  (e: 'close'): void
  (e: 'changeSymbolIcon', symbolId: string, symboltype: Symboltype): void
  (e: 'changeSymbolShape', shape: DrawnFeatureStyleShape): void
}>()

enum tabs {
  configurables = 'Configurables',
  mySymbols = 'Mes symboles',
  publics = 'Publics',
}

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const userManagerStore = useUserManagerStore()
const feature: Reactive<DrawnFeature> = inject('feature')!
const shapeComponents = {
  circle: Circle,
  square: Square,
  cross: Cross,
  triangle: Triangle,
}
const currentTab: Ref<tabs> = ref(tabs.configurables)
const fileInput: Ref<HTMLInputElement | undefined> = ref(undefined)
const symbols: Ref<Symbol[]> = ref([])

watch(currentTab, async currentTab => {
  if (currentTab === tabs.mySymbols || currentTab === tabs.publics) {
    try {
      symbols.value = await getSymbols(currentTab === tabs.mySymbols)
    } catch (e) {
      symbols.value = []
    }
  }
})

onMounted(() => {
  // Force open list of symbol icons if feature has icon
  if (feature.featureStyle.symbolId) {
    currentTab.value =
      feature.featureStyle.symboltype === 'us' ? tabs.mySymbols : tabs.publics
  }
})

async function getSymbols(privateSymbols = false, forceRefresh = false) {
  const symbols = <Symbol[]>(
    (privateSymbols
      ? await fetchPrivateSymbols(forceRefresh)
      : await fetchPublicSymbols(forceRefresh))
  )
  symbols.sort((a, b) => a.name.localeCompare(b.name))

  return symbols
}

async function onSelectMySymbol() {
  if (fileInput.value?.files && fileInput.value.files[0]) {
    const file = fileInput.value.files[0]

    try {
      await uploadSymbol(file)
      symbols.value = await getSymbols(true, true)
    } catch (e) {
      addNotification(
        t('Error while trying to upload new symbol.'),
        AlertNotificationType.ERROR
      )
    }
  }
}
</script>

<template>
  {{ t('Veuillez choisir un symbole dans une des catégories') }}

  <!-- Tabs -->
  <div class="border-b-gray-300 border-b-[1px] mb-2">
    <template v-for="(tab, index) in tabs" :key="index">
      <button
        v-if="!(index === 'mySymbols' && !userManagerStore.isAuthenticated())"
        :data-cy="`featStyleSymbolTab${
          index === 'mySymbols' ? '_private' : ''
        }`"
        @click="() => (currentTab = tab)"
        class="lux-tab"
        :class="{ active: currentTab === tab }"
      >
        {{ t(tab) }}
      </button>
    </template>
  </div>

  <!-- List of simple symbols -->
  <template v-if="currentTab === tabs.configurables">
    <div class="flex gap-1 my-2">
      <button
        v-for="shape in Object.keys(shapeComponents)"
        :key="shape"
        class="lux-btn p-2 rounded-sm border-gray-600"
        @click="() => $emit('changeSymbolShape', shape as keyof typeof shapeComponents)"
        :data-cy="`featStyleSymbol_${shape}`"
      >
        <component
          :is="shapeComponents[shape as keyof typeof shapeComponents]"
          :fillColor="feature.featureStyle.color"
        ></component>
      </button>
    </div>

    <slot name="symbolcolor"></slot>
  </template>

  <!-- List of public symbols and/or user's symbols -->
  <FeatureEditSymbolList
    :symbols="symbols"
    v-if="currentTab === tabs.publics || currentTab === tabs.mySymbols"
    class="max-h-80 overflow-y-auto"
    @change="(id: number) => $emit('changeSymbolIcon', `${id}`, currentTab === tabs.mySymbols ? 'us' : 'public')"
  />

  <div class="text-right mt-3">
    <template v-if="currentTab === tabs.mySymbols">
      <input
        accept="image/*"
        ref="fileInput"
        type="file"
        id="file"
        multiple
        hidden
        @change="onSelectMySymbol"
      />
      <button class="lux-btn mr-2" @click="() => fileInput?.click()">
        {{ t('Importer un symbole') }}
      </button>
    </template>

    <!-- Close Icon edition button -->
    <button
      class="lux-btn"
      @click="() => $emit('close')"
      data-cy="featClosePopup"
    >
      {{ t('Fermer') }}
    </button>
  </div>
</template>
