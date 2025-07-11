<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useTranslation } from 'i18next-vue'
import { fetchApi } from '@/services/api/api.service'
import { storeToRefs } from 'pinia'
import { olLayerSearchService } from '@/services/ol-layer/ol-layer-search.service'
import { useMapStore } from '@/stores/map.store'
import { matchCoordinate } from '@/services/search/coordinate.service'
import { useThemeStore } from '@/stores/config.store'
import useLayers from '@/composables/layers/layers.composable'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'
import useThemes from '@/composables/themes/themes.composable'
import FilterPanel from './filter-panel.vue'
import { curFilters, esMatch } from '@/composables/search/search-filters'
import { transformExtent } from 'ol/proj.js'
import useMap from '@/composables/map/map.composable'
import { computed } from 'vue'

const filterIconColor = computed(() =>
  isFilterPanelOpen.value ? 'var(--color-tertiary)' : '#ffffff'
)

const { findThemeNamesByLayerId } = useThemes()
const { t, i18next } = useTranslation()
const { maxZoom } = storeToRefs(useMapStore())
const filterPanelRef = ref()
// Define reactive variables
const searchQuery = ref('')
const isOpenResults = ref(false)
const searchResults = ref<
  {
    header: string
    selectResult: Function
    results: {
      label: string
      layer_name: string
      entry: object
      showRoutingButton: boolean
    }[]
  }[]
>([])
const isLoading = ref(false) // Track loading state
const layerLookup: { [key: string]: string[] } = {
  Adresse: ['addresses'],
  Parcelle: ['parcels', 'parcels_labels'],
  Parcelle_go: ['parcels_go', 'parcels_labels_go'],
  Parcelle_prof: ['parcels_prof', 'parcels_labels'],
  lieu_dit: ['toponymes'],
  FLIK: ['asta_flik_parcels'],
  FLIK_Provisoire: ['asta_flik_parcels_provisoire'],
  asta_esp: ['asta_esp_esp'],
  nom_de_rue: ['roads', 'roads_labels'],
}

function addLayerFromSearch(layer_name: string) {
  const { theme } = useThemeStore()
  let cur_suggestion_layer: string = layer_name

  if (
    layer_name === 'Parcelle' &&
    typeof theme === 'string' &&
    ['go', 'prof'].includes(theme)
  ) {
    cur_suggestion_layer = cur_suggestion_layer + '_' + theme
  }

  const layers = layerLookup[cur_suggestion_layer] || []
  const { findByName } = useThemes()
  const layersService = useLayers()
  layers.forEach(function (layer) {
    const layerToAdd = findByName(layer)
    if (layerToAdd !== undefined) {
      layersService.toggleLayer(layerToAdd.id, true, false, false)
    }
  })
}

function processResultFulltextsearch(data: any, selectResult: Function) {
  searchResults.value.push({
    header: t('Addresses'),
    selectResult: selectResult,
    results: data.features.map(function (feature: any) {
      const label =
        feature.properties.label +
        (feature.properties.layer_name
          ? ` (${t(feature.properties.layer_name)})`
          : '')
      return {
        label: label,
        layer_name: feature.properties.layer_name,
        entry: feature,
        showRoutingButton: true,
      }
    }),
  })
}
function processResultFeaturesearch(data: any, selectResult: Function) {
  searchResults.value.push({
    header: t('Features'),
    selectResult: selectResult,
    results: data.features.map(function (feature: any) {
      const label =
        feature.properties.label +
        (feature.properties.layer_name
          ? ` (${t(feature.properties.layer_name)})`
          : '')
      return {
        label: label,
        layer_name: feature.properties.layer_name,
        entry: feature,
        showRoutingButton: false,
      }
    }),
  })
}

function onDropdownClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target.tagName === 'A' && target.hasAttribute('data-theme')) {
    e.preventDefault()
    switchTheme(target.getAttribute('data-theme')!)
  }
}
function switchTheme(themeName: string) {
  useThemeStore().setTheme(themeName)
  closeDropdown()
}

function processResultLayersearch(data: any, selectResult: Function) {
  searchResults.value.push({
    header: t('Layers'),
    selectResult: selectResult,
    results: data.map(function (item: {
      language: string
      name: string
      layer_id: number
    }) {
      const themeLinks = getThemeLinks(item.layer_id)
      return {
        label: t(item.name) + themeLinks,
        layer_id: item.layer_id,
        name: item.name,
        language: item.language,
        showRoutingButton: false,
      }
    }),
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onRoutingClick(result: {
  label: string
  layer_name: string
  entry: object
}) {
  // TODO: Implement routing logic
}
function processResultCmssearch(data: any, selectResult: Function) {
  searchResults.value.push({
    header: t('Website Pages'),
    selectResult: selectResult,
    results: data.map(
      (item: {
        url: string
        title: string
        text: string
        language: string
      }) => ({
        label: t(item.title),
        url: item.url,
        text: item.text,
        language: item.language,
        showRoutingButton: false,
      })
    ),
  })
}

function selectResultFeatureSearch(result: {
  label: string
  layer_name: string
  entry: object
}) {
  searchQuery.value = result.label // Set the selected label as the
  olLayerSearchService.highlightFeatures(
    [result.entry],
    true,
    maxZoom.value,
    useMap().getOlMap().getView().getProjection().getCode()
  )
}

function selectResultFullTextSearch(result: {
  label: string
  layer_name: string
  entry: object
}) {
  searchQuery.value = result.label // Set the selected label as the
  addLayerFromSearch(result.layer_name)
  switch (result.layer_name) {
    case 'Parcelle':
      olLayerSearchService.highlightFeatures(
        [result.entry],
        true,
        maxZoom.value
      )
      break
    case 'Adresse':
      olLayerSearchService.highlightFeatures(
        [result.entry],
        true,
        maxZoom.value
      )
      break
    default:
      olLayerSearchService.clearFeatures()
      olLayerSearchService.fitFeatures([result.entry], maxZoom.value)
  }
  closeDropdown()
}
function selectResultBackgroundLayerSearch(result: {
  label: string
  layer_id: number
  name: string
}) {
  const backgroundLayer = useBackgroundLayer()
  backgroundLayer.setBgLayer(result.layer_id)
  closeDropdown()
}
function selectResulLayerSearch(result: {
  label: string
  layer_id: string
  text: string
}) {
  useLayers().toggleLayer(result.layer_id, true, false, false)
  closeDropdown()
}
function selectResultCmsSearch(result: {
  label: string
  url: string
  text: string
  language: string
}) {
  // Open the URL in a new tab
  window.open('https://www.geoportail.lu' + result.url, '_blank')
  closeDropdown()
  searchQuery.value = result.label // Set the selected label as the query
}

function selectResultCoordinateSearch(result: {
  label: string
  entry: object
}) {
  searchQuery.value = result.label // Set the selected label as the
  olLayerSearchService.highlightFeatures([result.entry], true, maxZoom.value)
  closeDropdown()
}
function processResultBackgroundsearch(data: any, selectResult: Function) {
  searchResults.value.push({
    header: t('Background Layers'),
    selectResult: selectResult,
    results: data.map((item: { name: string; id: number }) => ({
      label: t(item.name), // Use the `name` property as the label
      layer_id: item.id, // Include the layer ID
      name: item.name, // Include the name
      showRoutingButton: false,
    })),
  })
}
async function getData(
  url: string,
  parameters: { [key: string]: any }
): Promise<any> {
  const response = await fetchApi(url, parameters, 'GET')
  return await response.json()
}

async function getDataFeatureSearch(newQuery: string) {
  if (!curFilters.value['activeLayers']) return false

  let params: { [key: string]: any } = {
    query: newQuery,
    limit: 8,
    language: i18next.language,
  }

  let selected_layers = useMap()
    .getOlMap()
    .getLayers()
    .getArray()
    .map(layer => layer.get('queryable_id'))
    .filter(el => el !== undefined)
  params['layers'] = selected_layers.join(',')

  if (curFilters.value['extent']) {
    let extent = transformExtent(
      useMap().getOlMap().getView().calculateExtent(),
      'EPSG:3857',
      'EPSG:4326'
    )
    params['extent'] = extent.join(',')
  }

  const data = await getData(
    import.meta.env.VITE_V3_API_HOST + 'featuresearch',
    params
  )
  processResultFeaturesearch(data, selectResultFeatureSearch)
}

async function getDataFulltextSearch(newQuery: string) {
  let params: { [key: string]: any } = { query: newQuery, limit: 8 }

  let layers = Object.keys(esMatch)
    .filter(k => curFilters.value[k])
    .map(k => esMatch[k])
    .flat()
  if (layers.length > 0) {
    params['layer'] = layers.join(',')
  }

  if (curFilters.value['extent']) {
    let extent = transformExtent(
      useMap().getOlMap().getView().calculateExtent(),
      'EPSG:3857',
      'EPSG:4326'
    )
    params['extent'] = extent.join(',')
  }

  const data = await getData(
    import.meta.env.VITE_V3_API_HOST + 'fulltextsearch',
    params
  )
  processResultFulltextsearch(data, selectResultFullTextSearch)
}
async function getDataLayerSearch(newQuery: string) {
  let params: { [key: string]: any } = { query: newQuery, limit: 8 }
  const data = await getData(
    import.meta.env.VITE_V3_API_HOST + 'layersearch',
    params
  )
  processResultLayersearch(data, selectResulLayerSearch)
}
async function getDataCmsSearch(newQuery: string) {
  let params: { [key: string]: any } = { query: newQuery, limit: 8 }
  const data = await getData(
    import.meta.env.VITE_V3_API_HOST + 'cmssearch',
    params
  )
  processResultCmssearch(data, selectResultCmsSearch)
}

function getDataBackgroundSearch(newQuery: string) {
  const { bgLayers } = useThemeStore()
  if (newQuery.length === 0) {
    return
  }

  const data = bgLayers.filter(bgLayer => {
    return t(bgLayer.name).toLowerCase().includes(newQuery.toLowerCase())
  })
  processResultBackgroundsearch(data, selectResultBackgroundLayerSearch)
}

const dataSources = {
  backgroundsearch: {
    getData: getDataBackgroundSearch,
  },
  fulltextsearch: {
    getData: getDataFulltextSearch,
  },
  layersearch: {
    getData: getDataLayerSearch,
  },
  cmssearch: {
    getData: getDataCmsSearch,
  },
  featuresearch: {
    getData: getDataFeatureSearch,
  },
  coordinate: {
    getData: getDataCoordinates,
  },
}

function getDataCoordinates(newQuery: string) {
  const searchString = newQuery
  const mapEpsgCode = olLayerSearchService.map
    .getView()
    .getProjection()
    .getCode()
  const features = matchCoordinate(searchString, mapEpsgCode)
  searchResults.value.push({
    header: t('Coordinates'),
    selectResult: selectResultCoordinateSearch,
    results: features.map(function (feature: any) {
      const label = feature.get('label') + ' (' + feature.get('epsgLabel') + ')'
      return {
        label: label,
        layer_name: 'Coordinates',
        entry: feature,
        showRoutingButton: false,
      }
    }),
  })
}
async function handleDataSources(newQuery: string) {
  searchResults.value = []
  isLoading.value = true
  closeFilterPanel()
  Object.entries(dataSources).map(async ([, source]) => {
    if ('getData' in source && typeof source.getData === 'function') {
      source.getData(newQuery)
    }
    isLoading.value = false
    isOpenResults.value = true
  })
}

watch(searchQuery, async newQuery => {
  handleDataSources(newQuery)
})

function clearSearch() {
  olLayerSearchService.clearFeatures()
  searchQuery.value = '' // Reset the search query
  searchResults.value = [] // Clear the search results
  closeDropdown()
}

const isFilterPanelOpen = ref(false)
watch(isFilterPanelOpen, open => {
  if (open) {
    nextTick(() => {
      if (filterPanelRef.value) {
        filterPanelRef.value.focusedIndex = 0
        filterPanelRef.value.focusItem(0)
      }
    })
  }
})

function openOrCloseFilterPanel() {
  if (isFilterPanelOpen.value) {
    closeFilterPanel()
    return
  }
  closeDropdown()
  openFilterPanel()
}

function openFilterPanel() {
  isFilterPanelOpen.value = true
}

function closeFilterPanel() {
  isFilterPanelOpen.value = false
}

function closeDropdown() {
  isOpenResults.value = false
}

// Focus management for dropdown results
const focusedIndex = ref<number | null>(null)

// Helper to focus a result item
function focusItem(index: number) {
  const el = document.querySelectorAll('.dropdown-item')[index] as HTMLElement
  if (el) el.focus()
}

// Handle keydown on the dropdown list
function onDropdownKeydown(e: KeyboardEvent) {
  e.stopPropagation()
  if (isFilterPanelOpen.value) return
  if (!searchResults.value.length) return
  const flatResults = searchResults.value.flatMap(g => g.results)
  if (focusedIndex.value === null) focusedIndex.value = 0

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (focusedIndex.value! < flatResults.length - 1) {
      focusedIndex.value!++
      focusItem(focusedIndex.value!)
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (focusedIndex.value! > 0) {
      focusedIndex.value!--
      focusItem(focusedIndex.value!)
    }
  } else if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
    e.preventDefault()
    // Find which group/result this index belongs to
    let idx = focusedIndex.value!
    for (const group of searchResults.value) {
      if (idx < group.results.length) {
        group.selectResult(group.results[idx])
        break
      }
      idx -= group.results.length
    }
  }
}

// Helper to check if a result is focused
function isFocused(groupIndex: number, resultIndex: number) {
  // Flatten all results to get the global index
  let idx = 0
  for (let g = 0; g < groupIndex; g++) {
    idx += searchResults.value[g].results.length
  }
  idx += resultIndex
  return focusedIndex.value === idx
}

const dropdownRef = ref<HTMLElement | null>(null)

function onSearchInputKeydown(e: KeyboardEvent) {
  if (
    (e.key === 'ArrowDown' || e.key === 'ArrowUp') &&
    isOpenResults.value &&
    searchResults.value.length
  ) {
    e.preventDefault()
    if (isOpenResults.value) {
      focusedIndex.value = 0
      // Focus the dropdown container
      nextTick(() => {
        dropdownRef.value?.focus()
      })
    }
  }
}
function getThemeLinks(layerId: number): string {
  const themeNames = findThemeNamesByLayerId(layerId)
  const { themeName } = storeToRefs(useThemeStore())
  return themeNames
    .map(curThemeName =>
      themeName.value !== curThemeName
        ? `<br><a href="#" data-theme="${curThemeName}">(${t(
            'open in theme'
          )} ${t(curThemeName)})</a>`
        : ''
    )
    .join('')
}
</script>

<template>
  <div class="search-dropdown">
    <!-- Search Input -->
    <div class="search-input-wrapper">
      <input
        type="text"
        :placeholder="t('Recherche adresse, parcelles, couches ...')"
        v-model="searchQuery"
        class="w-full lux-input search-input"
        @keydown="onSearchInputKeydown"
      />
      <button
        v-if="searchQuery.length"
        @click="clearSearch"
        class="clear-button"
      >
        ✕
      </button>
      <button class="filter-button" @click="openOrCloseFilterPanel">
        <span class="filter-icon" :style="{ color: filterIconColor }"></span>
      </button>
    </div>

    <!-- Dropdown -->
    <div
      v-if="isOpenResults && searchResults.length"
      class="dropdown"
      @keydown="onDropdownKeydown"
      @click="onDropdownClick"
      tabindex="0"
      ref="dropdownRef"
    >
      <ul role="listbox">
        <li v-for="(group, groupIndex) in searchResults" :key="groupIndex">
          <!-- Data Source Title -->
          <div v-if="group.results.length > 0" class="dropdown-title">
            {{ t(group.header) }}
          </div>
          <!-- Results -->
          <ul>
            <li
              v-for="(result, resultIndex) in group.results"
              :key="resultIndex"
              @click="group.selectResult(result)"
              class="dropdown-item"
              tabindex="0"
              :class="{ focused: isFocused(groupIndex, resultIndex) }"
              @keydown.enter="group.selectResult(result)"
              role="option"
              :aria-selected="isFocused(groupIndex, resultIndex)"
            >
              <span v-html="result.label"></span>
              <span
                v-if="result.showRoutingButton"
                class="search-result-routing"
              >
                <button
                  class="lux-btn-primary routing-button"
                  @click.stop="onRoutingClick(result)"
                >
                  <span class="routing-icon"></span>
                </button>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Loading Indicator -->
    <div v-if="isLoading" class="loading-indicator">
      {{ t('Loading...') }}
    </div>

    <FilterPanel
      ref="filterPanelRef"
      v-if="isFilterPanelOpen"
      @close="closeFilterPanel"
    />
  </div>
</template>

<style scoped>
.filter-button {
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px; /* Adjust as needed to avoid overlap with clear button */
  transform: translateY(-50%);
  padding: 0;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-icon {
  font-family: 'FontAwesome';
  content: '\f0b0';
  font-size: 16px;
  display: inline-block;
}

.filter-icon::before {
  content: '\f0b0';
  font-family: 'FontAwesome';
}

:deep(.routing-button) {
  padding: 0;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  border-radius: 2px;
  border: 0;
}

:deep(.routing-icon:after) {
  content: '\e062';
  color: #fff;
  font-family: 'geoportail-icons-wc' !important;
  position: static;
  font-size: 0.8em;
  transform: rotate(-45deg) translateY(-15px);
  width: 25px;
  height: 20px;
}
.search-input {
  padding-left: 30px;
}
.search-dropdown {
  position: relative;
  width: 370px;
}
.search-input-wrapper {
  position: relative;
}
.search-input-wrapper::before {
  content: '\F002'; /* FontAwesome search icon */
  font-family: 'FontAwesome'; /* Specify FontAwesome font */
  position: absolute;
  top: 50%;
  left: 10px; /* Position the icon inside the input wrapper */
  transform: translateY(-50%);
  font-size: 14px;
  color: #ffffff; /* Icon color */
}
.clear-button {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
}

.clear-button:hover {
  color: #333;
}
.dropdown {
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-title {
  font-weight: bold;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  word-break: break-word;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.loading-indicator {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.search-result-routing {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.dropdown-item.focused {
  background-color: #e0e0e0;
}
</style>
