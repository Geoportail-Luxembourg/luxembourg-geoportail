<script setup lang="ts">
import { Ref, ref, inject, watch } from 'vue'
import { useTranslation } from 'i18next-vue'

import Circle from '@/components/common/symbol/circleSymbol.vue'
import Rectangle from '@/components/common/symbol/rectangleSymbol.vue'
import Cross from '@/components/common/symbol/crossSymbol.vue'
import Triangle from '@/components/common/symbol/triangleSymbol.vue'
import { getPublicSymbols, type Symbol } from '@/services/draw/draw.helper'

import FeatureEditSymbolList from './feature-edit-symbol-list.vue'

const { t } = useTranslation()
const currentEditCompKey: Ref<'FeatureEditStyle' | undefined> | undefined =
  inject('currentEditCompKey')

enum tabs {
  configurables = 'Configurables',
  mySymbols = 'Mes symboles',
  publics = 'Publics',
}
const symbolComponents = {
  Circle,
  Rectangle,
  Cross,
  Triangle,
} as const
const currentSymbolTab: Ref<tabs> = ref(tabs.configurables)
const featureColor = 'red' // feature.olFeature.get('color') // TODO: to plug when feature ok
const fileInput: Ref<HTMLInputElement | undefined> = ref(undefined)
const symbols: Ref<Symbol[]> = ref([])

watch(currentSymbolTab, async currentTab => {
  if (currentTab === tabs.mySymbols || currentTab === tabs.publics) {
    symbols.value = await getSymbols(currentTab === tabs.mySymbols)
  }
})

async function getSymbols(mySymbolsOnly = false) {
  const symbols = <Symbol[]>await getPublicSymbols(mySymbolsOnly)
  symbols.sort((a, b) => a.name.localeCompare(b.name))

  return symbols
}

function onClickSymbol(
  component: (typeof symbolComponents)[keyof typeof symbolComponents]
) {
  if (component === symbolComponents.Circle) {
    alert('Choose Circle TODO') // TODO:
  } else if (component === symbolComponents.Rectangle) {
    alert('Choose Rectangle TODO') // TODO:
  } else if (component === symbolComponents.Cross) {
    alert('Choose Cross TODO') // TODO:
  } else if (component === symbolComponents.Triangle) {
    alert('Choose Triangle TODO') // TODO:
  }

  backNavigation()
}

function backNavigation() {
  // Back to Style edition menu in great grand parent component
  if (currentEditCompKey) {
    currentEditCompKey.value = 'FeatureEditStyle'
  }
}

function onChangeSymbol(id: number) {
  alert('onChangeSymbol TODO' + id) // TODO:
  backNavigation()
}

function onImportMySymbol() {
  alert('onImportMySymbol TODO') // TODO:

  fileInput.value?.click()

  // open dialog file
  // then submit
  // TODO: POST file to
  // https://map.geoportail.lu/mymaps/upload_symbol
  // refresh list
}
</script>

<template>
  {{ t('Veuillez choisir un symbole dans une des catégories') }}

  <!-- Tabs -->
  <div class="border-b-gray-300 border-b-[1px] mb-2">
    <template v-for="(tab, index) in tabs">
      <!-- TODO: mySymbols is currently deactivated (needs login implementation) -->
      <button
        data-cy="featStyleSymbolTab"
        v-if="tab !== tabs.mySymbols"
        :key="index"
        @click="() => (currentSymbolTab = tab)"
        class="lux-tab"
        :class="{ active: currentSymbolTab === tab }"
      >
        {{ t(tab) }}
      </button>
    </template>
  </div>

  <!-- List of simple symbols -->
  <template v-if="currentSymbolTab === tabs.configurables">
    <div class="flex gap-1 my-2">
      <button
        v-for="(symbolComponent, index) in Object.values(symbolComponents)"
        :key="index"
        class="lux-btn p-2 rounded-sm border-gray-600"
        @click="() => onClickSymbol(symbolComponent)"
        data-cy="featStyleSymbol"
      >
        <component :is="symbolComponent" :fillColor="featureColor"></component>
      </button>
    </div>

    <div class="flex gap-1 items-center">
      <label class="font-bold block" for="inline-full-name">
        {{ t('Color') }}
      </label>
      <div class="md:w-2/3">
        <input
          class="cursor-pointer"
          type="color"
          value=""
          data-cy="featStyleColor"
        />
      </div>
    </div>
  </template>

  <!-- List of public symbols and/or user's symbols -->
  <FeatureEditSymbolList
    :symbols="symbols"
    v-if="
      currentSymbolTab === tabs.publics || currentSymbolTab === tabs.mySymbols
    "
    class="max-h-80 overflow-y-auto"
    @change="onChangeSymbol"
  />

  <!-- Back navigation button -->
  <div class="text-right mt-3">
    <template v-if="currentSymbolTab === tabs.mySymbols">
      <input ref="fileInput" type="file" id="input" multiple hidden />
      <button class="lux-btn mr-2" @click="onImportMySymbol">
        {{ t('Importer un symbole') }}
      </button>
    </template>

    <button
      class="lux-btn"
      @click="backNavigation()"
      data-cy="featStyleNavBack"
    >
      {{ t('Fermer') }}
    </button>
  </div>
</template>
