<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import FilterToggle from './filter-toggle.vue'
import {
  initialFilters,
  curFilters,
  esLabels,
} from '@/composables/search/search-filters'

const filtersCount = Object.keys(initialFilters).length
const { t } = useTranslation()

function toggleFilter(entry: string) {
  curFilters.value[entry] = !curFilters.value[entry]
}

function saveSearch() {
  localStorage.setItem('searchFacets', JSON.stringify(curFilters.value))
}

function resetSearch() {
  curFilters.value = Object.assign({}, initialFilters)
}

const focusedIndex = ref<number | null>(null)

function focusItem(index: number) {
  const el = document.querySelectorAll('.filter-toggle-btn')[
    index
  ] as HTMLElement
  if (el) el.focus()
}

function onPanelKeydown(e: KeyboardEvent) {
  e.stopPropagation()
  if (focusedIndex.value === null) focusedIndex.value = -1
  if (e.key === 'Tab' && e.shiftKey && focusedIndex.value! <= 0) {
    focusedIndex.value = -1
    return
  }
  if (
    e.key === 'Tab' &&
    !e.shiftKey &&
    focusedIndex.value! >= filtersCount - 1
  ) {
    focusedIndex.value = -1
    return
  }
  if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
    e.preventDefault()
    if (focusedIndex.value! < filtersCount - 1) {
      focusedIndex.value!++
      focusItem(focusedIndex.value!)
    }
  } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
    e.preventDefault()
    if (focusedIndex.value! > 0) {
      focusedIndex.value!--
      focusItem(focusedIndex.value!)
    }
  } else if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
    e.preventDefault()
    const filterKeys = Object.keys(initialFilters)
    toggleFilter(filterKeys[focusedIndex.value!])
  }
}
// Expose to parent
defineExpose({
  focusedIndex,
  focusItem,
})
</script>

<template>
  <div class="filter-panel bg-secondary text-tertiary">
    <h3>{{ t('Paramètres de recherche') }}</h3>
    <button class="close-panel" @click="$emit('close')">&times;</button>
    <div @keydown="onPanelKeydown">
      <h4>{{ t('Inclure') }}</h4>
      <FilterToggle
        :label="t('Pages du site')"
        :checked="curFilters.cms"
        @toggle="toggleFilter('cms')"
      />
      <FilterToggle
        :label="t('Couches')"
        :checked="curFilters.layers"
        @toggle="toggleFilter('layers')"
      />
      <hr />
      <h4>{{ t('Limiter la recherche à') }}</h4>
      <FilterToggle
        v-for="(label, key) in esLabels"
        :key="key"
        :label="t(label)"
        :checked="curFilters[key]"
        @toggle="toggleFilter(key)"
      />
      <hr />
      <h4>{{ t('Étendue') }}</h4>
      <FilterToggle
        :label="t('Uniquement dans la partie actuellement visible de la carte')"
        :checked="curFilters.extent"
        @toggle="toggleFilter('extent')"
      />
      <hr />
      <h4>{{ t('Avancée') }}</h4>
      <FilterToggle
        :label="t('Chercher dans les couches actives')"
        :checked="curFilters.activeLayers"
        @toggle="toggleFilter('activeLayers')"
      />
      <hr />
    </div>
    <div class="flex">
      <button class="lux-btn mr-auto" @click="resetSearch()">
        {{ t('Réinitialiser') }}
      </button>
      <button class="lux-btn ml-auto" @click="saveSearch()">
        {{ t('Sauvegarder la recherche') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.filter-panel {
  position: absolute;
  width: 370px;
  background: #fff;
  border: 1px solid #ccc;
  z-index: 999;
  padding: 5px 5px;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.filter-panel h3 {
  text-transform: uppercase;
  margin-top: 11px;
  font-size: 28px;
  line-height: 1.2;
}
.filter-panel h4 {
  text-transform: uppercase;
  font-size: 16px;
}
.filter-panel .close-panel {
  position: absolute;
  right: 6px;
  top: 10px;
  border: none;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: none;
  font-size: 36px;
  padding: 2px;
  line-height: 1.2;
}
</style>
