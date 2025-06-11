<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { fetchApi } from '@/services/api/api.service'

const { t } = useTranslation()

// Define reactive variables
const searchQuery = ref('')
const isOpen = ref(false)
const searchResults = ref<{ label: string; entry: object }[]>([]) // Store results fetched from the API
const isLoading = ref(false) // Track loading state
const dataSources = {
  fulltextsearch: 'https://map.geoportail.lu/fulltextsearch',
  layersearch: 'https://map.geoportail.lu/layersearch',
  cmssearch: 'https://map.geoportail.lu/cmssearch',
}

// Watch searchQuery and fetch results from the API
watch(searchQuery, async newQuery => {
  if (!newQuery) {
    searchResults.value = []
    isOpen.value = false
    return
  }
  isLoading.value = true // Set loading state
  try {
    const params = { query: newQuery, limit: 8 }
    const response = await fetchApi(
      dataSources['fulltextsearch'],
      params,
      'GET'
    )
    const data = await response.json()

    searchResults.value = data.features.map((feature: any) => ({
      label: feature.properties.label,
      entry: feature,
    }))

    isOpen.value = true // Open dropdown
  } catch (error) {
    //console.error('Error fetching search results:', error)
    searchResults.value = []
  } finally {
    isLoading.value = false // Reset loading state
  }
})

function selectResult(result: { label: string; entry: object }) {
  //console.log('Selected entry:', result.entry) // Log the selected entry
  searchQuery.value = result.label // Set the selected label as the query
  isOpen.value = false // Close the dropdown
}

function clearSearch() {
  searchQuery.value = '' // Reset the search query
  searchResults.value = [] // Clear the search results
  isOpen.value = false // Close the dropdown
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
      />
      <button
        v-if="searchQuery.length"
        @click="clearSearch"
        class="clear-button"
      >
        ✕
      </button>
    </div>
    <!-- Dropdown -->
    <div v-if="isOpen && searchResults.length" class="dropdown">
      <ul>
        <li
          v-for="(result, index) in searchResults"
          :key="index"
          @click="selectResult(result)"
          class="dropdown-item"
        >
          {{ result.label }}
        </li>
      </ul>
    </div>

    <!-- Loading Indicator -->
    <div v-if="isLoading" class="loading-indicator">
      {{ t('Loading...') }}
    </div>
  </div>
</template>

<style scoped>
.search-input {
  padding-left: 30px;
}
.search-dropdown {
  position: relative;
  width: 300px;
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
  font-size: 16px;
  color: #ffffff; /* Icon color */
}
.clear-button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
}

.clear-button:hover {
  color: #333;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
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
</style>
