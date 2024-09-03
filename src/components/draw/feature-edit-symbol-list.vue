<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { SYMBOL_ICONS_URL, type Symbol } from '@/services/draw/draw.helper'

const props = defineProps<{
  symbols: Symbol[]
}>()

const emit = defineEmits(['change'])
const { t } = useTranslation()
const symbolFilter: Ref<string> = ref('')
const filteredPublicSymbols = computed(() =>
  symbolFilter.value
    ? props.symbols.filter(symbol => symbol.name.includes(symbolFilter.value))
    : props.symbols
)

function onClickSymbol(id: number) {
  emit('change', id)
}
</script>

<template>
  <div>
    <!-- Search symbol box -->
    <input
      data-cy="featStyleSymbolFilterList"
      class="text-white w-full placeholder-white border-[1px] border-gray-300 mb-2"
      type="text"
      :placeholder="t('Rechercher un symbole')"
      v-model.trim="symbolFilter"
    />

    <!-- List Title -->
    {{ t('Symbole') }}

    <!-- List of retrieved symbols -->
    <ul v-if="filteredPublicSymbols.length > 0">
      <li
        v-for="symbol in filteredPublicSymbols"
        :key="symbol.id"
        class="border-b-[1px] border-b-gray-300"
      >
        <button
          :id="symbol.id.toString()"
          class="leading-5 p-1 items-center flex hover:bg-slate-100 w-full text-left"
          :title="symbol.name"
          @click="() => onClickSymbol(symbol.id)"
          data-cy="featStyleSymbolIcon"
        >
          <!-- Display the icon -->
          <span class="w-12">
            <img class="max-h-10" :src="`${SYMBOL_ICONS_URL}${symbol.url}`" />
          </span>
          <!-- Display the symbol name -->
          <span class="break-all">
            {{ symbol.name }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>
