<template>
  <side-panel-layout
    data-cy-value="routingPanel"
    :close-fn="() => appStore.toggleRoutingOpen(false)"
  >
    <template v-slot:header>
      <h1>{{ t('itineraire', { ns: 'client' }) }}</h1>
    </template>

    <template v-slot:content>
      <!-- Mode Selection -->
      <div class="routing-modes mb-4">
        <div class="flex gap-2 mb-3">
          <!-- Transport modes -->
          <button
            :class="[
              'mode-btn',
              { 'mode-btn-active': routingState.transportMode === 3 },
            ]"
            @click="setMode(3)"
            :title="t('Car mode')"
            :aria-label="t('Mode voiture')"
            :aria-pressed="routingState.transportMode === 3"
          >
            <span class="fa fa-car" aria-hidden="true"></span>
          </button>
          <button
            :class="[
              'mode-btn',
              { 'mode-btn-active': routingState.transportMode === 1 },
            ]"
            @click="setMode(1)"
            :title="t('Pedestrian mode')"
            :aria-label="t('Mode piéton')"
            :aria-pressed="routingState.transportMode === 1"
          >
            <span class="fa fa-male" aria-hidden="true"></span>
          </button>
          <button
            :class="[
              'mode-btn',
              { 'mode-btn-active': routingState.transportMode === 2 },
            ]"
            @click="setMode(2)"
            :title="t('Bicycle mode')"
            :aria-label="t('Mode vélo')"
            :aria-pressed="routingState.transportMode === 2"
          >
            <span class="fa fa-bicycle" aria-hidden="true"></span>
          </button>

          <!-- Action buttons -->
          <button
            v-if="isRoute"
            class="mode-btn"
            @click="createMapFromRoute"
            :title="t('Save to my maps')"
            :aria-label="t('Sauvegarder la route dans Mes cartes')"
          >
            <span class="fa fa-save" aria-hidden="true"></span>
          </button>
          <button
            class="mode-btn"
            @click="clearRoutes()"
            :title="t('Clear all')"
            :aria-label="t('Effacer tous les points de route')"
          >
            <span class="fa fa-trash" aria-hidden="true"></span>
          </button>
          <button
            class="mode-btn"
            @click="exchangeRoutes()"
            :title="t('Swap start and end')"
            :aria-label="t('Échanger départ et arrivée')"
          >
            <span class="fa fa-exchange" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <!-- Route inputs -->

      <!-- Route inputs -->
      <div class="routing-routes mb-4" ref="sortableRoutes">
        <div
          v-for="(route, key) in routingState.routes"
          :key="routeIds[key]"
          class="routing-route-container mb-2"
          :data-route-id="routeIds[key]"
        >
          <div class="route-number drag-handle">{{ key + 1 }}</div>

          <div class="route-input-wrapper flex-1">
            <input
              v-model="routingState.routes[key]"
              type="text"
              autocorrect="off"
              autocapitalize="none"
              class="lux-input w-full"
              :placeholder="$t('Indiquez une adresse, un lieu')"
              :route-number="key + 1"
              :aria-expanded="
                activeSearchIndex === key && addressResults.length > 0
              "
              :aria-haspopup="
                activeSearchIndex === key && addressResults.length > 0
                  ? 'listbox'
                  : undefined
              "
              :aria-activedescendant="
                activeSearchIndex === key && highlightedIndex >= 0
                  ? `address-${key}-${highlightedIndex}`
                  : undefined
              "
              :aria-describedby="
                activeSearchIndex === key && addressResults.length > 0
                  ? `address-help-${key}`
                  : undefined
              "
              role="combobox"
              aria-autocomplete="list"
              @input="onRouteInputChange(key)"
              @blur="handleRouteInputBlur(key)"
              @focus="handleRouteInputFocus(key)"
              @keydown="handleRouteInputKeydown($event, key)"
            />

            <!-- Address dropdown -->
            <div
              v-if="activeSearchIndex === key && addressResults.length > 0"
              class="address-dropdown"
              role="listbox"
              :aria-label="$t('Résultats de recherche d\'adresse')"
            >
              <div id="address-help-{{ key }}" class="sr-only">
                {{
                  $t(
                    'Utilisez les flèches pour naviguer, Entrée pour sélectionner, Échap pour fermer'
                  )
                }}
              </div>
              <ul>
                <li
                  v-for="(result, idx) in addressResults"
                  :key="idx"
                  :id="`address-${key}-${idx}`"
                  :class="[
                    'address-item',
                    { 'address-item-highlighted': highlightedIndex === idx },
                  ]"
                  role="option"
                  :aria-selected="highlightedIndex === idx"
                  @click="selectAddress(key, result)"
                  @mouseenter="setHighlightedIndex(idx)"
                >
                  {{ result.label }}
                </li>
              </ul>
            </div>
          </div>

          <div class="tooltip-container">
            <button
              v-if="routingState.routes[key].length === 0"
              class="mode-btn"
              @click="whereAmI(key)"
              :title="t('Use my location')"
              :aria-label="
                $t('Utiliser ma position actuelle pour le point {number}', {
                  number: key + 1,
                })
              "
            >
              <span class="fa fa-crosshairs" aria-hidden="true"></span>
            </button>
            <button
              v-else
              class="mode-btn"
              @click="clearRoute(key)"
              :aria-label="
                $t('Effacer le point de route {number}', { number: key + 1 })
              "
            >
              <span class="fa fa-trash" aria-hidden="true"></span>
            </button>

            <div class="tooltip routing-tooltip">
              {{ $t('Insérez rapidement') }}
              <span class="current-location">{{
                $t('votre position actuelle')
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Route Options -->
      <div class="flex gap-2 mb-4">
        <button class="lux-btn flex-1" @click="addRoute()">
          {{ $t('Ajouter une étape') }}
        </button>
        <div class="relative">
          <button
            class="lux-btn whitespace-nowrap"
            @click="toggleCriteriaDropdown()"
          >
            {{
              routingState.criteria === 0
                ? $t('Le plus rapide')
                : $t('Le plus court')
            }}
            <span class="fa fa-chevron-down ml-2"></span>
          </button>
          <ul v-if="criteriaDropdownOpen" class="lux-dropdown-list" role="menu">
            <li class="lux-dropdown-list-item" @click="selectCriteria(0)">
              {{ $t('Le plus rapide') }}
            </li>
            <li class="lux-dropdown-list-item" @click="selectCriteria(1)">
              {{ $t('Le plus court') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Route Info -->
      <div v-if="isRoute" class="route-info-wrapper">
        <!-- General info -->
        <div class="mb-4">
          <div class="flex gap-4">
            <div>
              <div class="text-xs text-tertiary uppercase">
                {{ $t('Distance') }}
              </div>
              <div class="text-lg font-bold text-white">
                {{ formatDistance(distance) }}
              </div>
            </div>
            <div>
              <div class="text-xs text-tertiary uppercase">
                {{ $t('Temps') }}
              </div>
              <div class="text-lg font-bold text-white">
                {{ secondsToHHmmss(time) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Elevation Profile -->
        <div v-if="profileData.length > 0" class="mb-4">
          <h3 class="text-white mb-2">
            {{ $t('Dénivelé lors de votre trajet') }}
          </h3>
          <elevation-profile />
        </div>

        <!-- Route Details -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-white">{{ $t('Détail de votre trajet') }}</h3>
            <button
              class="text-secondary hover:text-white text-sm"
              @click="exportGpx()"
              :title="t('Download GPX')"
            >
              <span class="fa fa-download mr-1"></span>
              {{ $t('Télécharger') }}
            </button>
          </div>

          <div class="route-details-scroll">
            <div
              v-for="(step, key) in routeDesc"
              :key="key"
              class="route-details-step"
              @mouseleave="clearHighlight()"
              @mouseover="
                highlightPosition(step.lon, step.lat, step.description)
              "
              @click="center(step.lon, step.lat)"
            >
              <div class="route-instruction">
                <span
                  :class="[
                    'icon-Direction',
                    getIconDirectionClass(step.direction),
                  ]"
                ></span>
                {{ step.description }}
              </div>
              <div class="route-instruction-data">
                {{ formatDistance(step.cumulativeDistance || 0) }} •
                {{ secondsToHHmmss(step.cumulativeTime || 0) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div v-if="!isRoute" class="lux-alert lux-alert-info mb-3">
        <strong>{{ $t('Petite astuce!') }}</strong>
        <p class="mt-1">
          {{
            $t(
              'Cliquez droit (ou appui long sur mobile) à un endroit sur la carte pour ajouter rapidement une adresse.'
            )
          }}
        </p>
      </div>

      <!-- HTTPS Redirect Warning -->
      <div v-if="showRedirect" class="lux-alert lux-alert-warning">
        {{
          $t(
            'Pour utiliser la géolocalisation, veuillez utiliser une connexion sécurisée (HTTPS)'
          )
        }}
      </div>
    </template>
  </side-panel-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, useTemplateRef, nextTick } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import GeoJSON from 'ol/format/GeoJSON'
import Point from 'ol/geom/Point'
import { transform } from 'ol/proj'
import Feature from 'ol/Feature'
import type Geometry from 'ol/geom/Geometry'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import useRouting from '@/composables/routing/routing.composable'
import useSortable from '@/composables/sortable'
import ElevationProfile from '@/components/common/graph/elevation-profile.vue'
import { useRoutingStore } from '@/stores/routing.store'
import { useAppStore } from '@/stores/app.store'
import useAddressSearch from '@/composables/address-search/address-search.composable'
import { exportFeatureService } from '@/services/export-feature/export-feature.service'
import {
  createMyMap,
  saveMyMapFeature,
} from '@/services/api/api-mymaps.service'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import useMap from '@/composables/map/map.composable'

const { i18next, t } = useTranslation()
const appStore = useAppStore()
const userManagerStore = useUserManagerStore()
const { addNotification } = useAlertNotificationsStore()
const { getOlMap } = useMap()
const routingApiUrl =
  import.meta.env.VITE_ROUTER_URL || 'https://map.geoportail.lu/router/getroute'

const props = defineProps<{
  maxExtent: [number, number, number, number]
  poiSearchServiceUrl: string
}>()

const routingStore = useRoutingStore()
const { startCoordinate, startLabel, targetRouteIndex } =
  storeToRefs(routingStore)

// Template refs for sortable
const sortableRoutesRef = useTemplateRef<HTMLDivElement>('sortableRoutes')

// Generate stable IDs for routes to track them across reorders
const routeIds = ref<number[]>([0, 1])

const {
  routingState,
  distance,
  time,
  routeDesc,
  profileData,
  isRoute,
  showRedirect,
  init,
  whereAmI,
  clearRoutes,
  clearRoute,
  addRoute,
  exchangeRoutes,
  center,
  highlightPosition,
  clearHighlight,
  getIconDirectionClass,
  setMode,
  setCriteria,
  setRoutePoint,
  recalculateRoute,
} = useRouting(
  props.maxExtent,
  props.poiSearchServiceUrl,
  async state => {
    if (!state.map) return

    const projection = state.map.getView().getProjection()
    const waypoints: string[] = []

    state.features.forEach(feature => {
      const geom = feature.getGeometry()
      if (geom && geom instanceof Point) {
        const coord4326 = transform(
          geom.getFirstCoordinate(),
          projection,
          'EPSG:4326'
        )
        waypoints.push(`${coord4326[1]},${coord4326[0]}`)
      }
    })

    if (waypoints.length < 2) return

    const params = new URLSearchParams({
      avoid: '',
      criteria: String(state.criteria ?? 0),
      lang: i18next.language || 'fr',
      transportMode: String(mapTransportMode(state.transportMode)),
      waypoints: waypoints.join(','),
    })

    try {
      const response = await fetch(`${routingApiUrl}?${params.toString()}`)
      if (!response.ok) return

      const data = await response.json()

      const parser = new GeoJSON()
      const parsedFeatures = parser.readFeatures(data, {
        dataProjection: 'EPSG:4326',
        featureProjection: projection,
      })

      state.routeFeatures.clear()
      state.stepFeatures.clear()

      parsedFeatures.forEach(feature => {
        state.routeFeatures.push(feature)
      })
    } catch (err) {
      // Log routing errors for debugging
      // eslint-disable-next-line no-console
      console.error('[Routing] Error fetching route:', err)
    }
  },
  async geometry => {
    void geometry
    return { count: 0, results: [] }
  }
)

const criteriaDropdownOpen = ref(false)
const { searchAddresses, searchResults: addressResults } = useAddressSearch()
const activeSearchIndex = ref<number | null>(null)
const highlightedIndex = ref(-1)
const searchDebounceTimer = ref<number | null>(null)

function mapTransportMode(mode: number): number {
  // API expects 0: car, 1: pedestrian, 2: bike
  if (mode === 3) return 0
  if (mode === 1) return 1
  if (mode === 2) return 2
  return 0
}

watch(
  [startCoordinate, startLabel, targetRouteIndex],
  ([newCoord, newLabel, index]) => {
    if (newCoord && newLabel) {
      setRoutePoint(index || 0, newCoord, newLabel)
      // Clear after using to avoid re-triggering
      nextTick(() => {
        routingStore.startCoordinate = null
        routingStore.startLabel = ''
      })
    }
  }
)

// Check on mount if there are pending coordinates
onMounted(() => {
  if (startCoordinate.value && startLabel.value) {
    setRoutePoint(
      targetRouteIndex.value || 0,
      startCoordinate.value,
      startLabel.value
    )
    nextTick(() => {
      routingStore.startCoordinate = null
      routingStore.startLabel = ''
    })
  }
})

// Watch for address results changes to reset highlight
watch(addressResults, newResults => {
  if (newResults.length > 0 && activeSearchIndex.value !== null) {
    highlightedIndex.value = 0
    nextTick(() => scrollToHighlightedItem(activeSearchIndex.value!))
  } else {
    highlightedIndex.value = -1
  }
})

function onRouteInputChange(key: number) {
  if (searchDebounceTimer.value) {
    clearTimeout(searchDebounceTimer.value)
  }

  searchDebounceTimer.value = window.setTimeout(() => {
    const query = routingState.value.routes[key]
    if (query && query.length >= 2) {
      activeSearchIndex.value = key
      searchAddresses(query)
    } else {
      activeSearchIndex.value = null
    }
  }, 300)
}

function selectAddress(key: number, result: any) {
  routingState.value.routes[key] = result.label
  activeSearchIndex.value = null
  highlightedIndex.value = -1

  if (result.coordinates) {
    setRoutePoint(key, result.coordinates, result.label)
  }
}

function handleRouteInputFocus(key: number) {
  activeSearchIndex.value = key
  // Initialize highlight to first item if results exist
  if (addressResults.value.length > 0) {
    highlightedIndex.value = 0
    scrollToHighlightedItem(key)
  } else {
    highlightedIndex.value = -1
  }
}

function handleRouteInputBlur(key: number) {
  // Delay hiding dropdown to allow for clicks on options
  setTimeout(() => {
    if (activeSearchIndex.value === key) {
      activeSearchIndex.value = null
      highlightedIndex.value = -1
    }
  }, 150)
}

function handleRouteInputKeydown(event: KeyboardEvent, key: number) {
  if (activeSearchIndex.value !== key || addressResults.value.length === 0) {
    return
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      highlightedIndex.value = Math.min(
        highlightedIndex.value + 1,
        addressResults.value.length - 1
      )
      scrollToHighlightedItem(key)
      break
    case 'ArrowUp':
      event.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      scrollToHighlightedItem(key)
      break
    case 'Enter':
      event.preventDefault()
      if (
        highlightedIndex.value >= 0 &&
        highlightedIndex.value < addressResults.value.length
      ) {
        selectAddress(key, addressResults.value[highlightedIndex.value])
      }
      break
    case 'Escape':
      event.preventDefault()
      activeSearchIndex.value = null
      highlightedIndex.value = -1
      break
  }
}

function scrollToHighlightedItem(key: number) {
  nextTick(() => {
    const highlightedElement = document.getElementById(
      `address-${key}-${highlightedIndex.value}`
    )
    if (highlightedElement) {
      highlightedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  })
}

function setHighlightedIndex(index: number) {
  highlightedIndex.value = index
  if (activeSearchIndex.value !== null) {
    scrollToHighlightedItem(activeSearchIndex.value)
  }
}

function formatDistance(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(2)} km`
  }
  return `${Math.round(meters)} m`
}

function secondsToHHmmss(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  const secs = Math.floor(seconds - hours * 3600 - minutes * 60)

  const pad = (n: number) => (n < 10 ? '0' + n : n.toString())

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
}

function toggleCriteriaDropdown() {
  criteriaDropdownOpen.value = !criteriaDropdownOpen.value
}

function selectCriteria(value: number) {
  setCriteria(value)
  criteriaDropdownOpen.value = false
}

function exportGpx() {
  // Export only LineString features (not Points)
  const features = routingStore.routeFeatures
    .getArray()
    .filter(feature => feature.getGeometry()?.getType() === 'LineString')

  if (features.length === 0) {
    addNotification(t('Aucune route à exporter'), AlertNotificationType.WARNING)
    return
  }

  const map = getOlMap()
  if (!map) return

  // Use isTrack=true for routing exports (creates GPX tracks instead of routes)
  exportFeatureService.export(map, 'gpx', features as any, 'Route', true)
}

async function createMapFromRoute() {
  // Check authentication
  if (!userManagerStore.isAuthenticated()) {
    addNotification(
      t("Veuillez vous identifier afin d'accéder à vos cartes"),
      AlertNotificationType.INFO
    )
    appStore.toggleAuthFormOpen(true)
    return
  }

  // Create map title and description
  const mapTitle =
    t('Route du', { ns: 'client' }) +
    ' ' +
    new Date().toLocaleDateString(i18next.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  const mapDescription =
    routingState.value.routes[0] +
    ' - ' +
    routingState.value.routes[routingState.value.routes.length - 1]

  try {
    // Create the map
    const response = await createMyMap(mapTitle, mapDescription, 999, false) // category_id=999, public=false

    if (!response.success || !response.uuid) {
      addNotification(
        t('Erreur lors de la création de la carte'),
        AlertNotificationType.ERROR
      )
      return
    }

    const mapId = response.uuid
    appStore.myMapId = mapId

    // Save all route features (routes + steps)
    const allFeatures = [
      ...routingStore.routeFeatures.getArray(),
      ...routingStore.stepFeatures.getArray(),
    ]

    await Promise.all(
      allFeatures.map(async feature => {
        const geoJSON = new GeoJSON().writeFeatureObject(feature, {
          dataProjection: 'EPSG:2169',
          featureProjection: getOlMap()?.getView().getProjection(),
        })

        await saveMyMapFeature(mapId, JSON.stringify(geoJSON))
      })
    )

    addNotification(
      t('Une copie de votre route a été enregistrée dans Mymaps.', {
        ns: 'client',
      }),
      AlertNotificationType.INFO
    )

    // Open MyMaps panel
    appStore.toggleMyMapsOpen(true)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[Routing] Error creating map from route:', error)
    addNotification(
      t('Erreur lors de la sauvegarde de la route'),
      AlertNotificationType.ERROR
    )
  }
}

onMounted(() => {
  init()
  // Initialize sortable for route reordering
  if (sortableRoutesRef.value) {
    useSortable(sortableRoutesRef.value, {
      onSort: () => {
        // Reorder based on new DOM order
        const container = sortableRoutesRef.value
        if (!container) return

        const newRouteIds: number[] = []
        const newRoutes: string[] = []
        const newFeatures: Feature<Geometry>[] = []

        // Read new order from DOM
        for (const child of container.children) {
          if (child.classList.contains('routing-route-container')) {
            const routeId = parseInt(
              (child as HTMLElement).getAttribute('data-route-id') || '0',
              10
            )
            newRouteIds.push(routeId)

            // Find original index by ID
            const originalIndex = routeIds.value.indexOf(routeId)
            if (originalIndex >= 0) {
              newRoutes.push(routingState.value.routes[originalIndex] || '')
              const feature =
                routingState.value.features.getArray()[originalIndex]
              if (feature) {
                newFeatures.push(feature)
              }
            }
          }
        }

        // Check if order changed
        const orderChanged = newRouteIds.some(
          (id, i) => id !== routeIds.value[i]
        )
        if (!orderChanged) return

        // Update all arrays
        routeIds.value.splice(0, routeIds.value.length, ...newRouteIds)
        routingState.value.routes.splice(
          0,
          routingState.value.routes.length,
          ...newRoutes
        )
        routingState.value.features.clear()
        newFeatures.forEach(feature =>
          routingState.value.features.push(feature)
        )

        // Trigger recalculation
        recalculateRoute()
      },
    })
  }
})
</script>

<style scoped>
/* Mode buttons - consistent with app theme */
.mode-btn {
  @apply w-10 h-10 flex items-center justify-center rounded text-white bg-secondary hover:bg-tertiary transition-colors cursor-pointer border-none;
  font-size: 18px;
}

.mode-btn-active {
  @apply bg-tertiary;
}

/* Route input styling */
.routing-routes {
  @apply flex flex-col gap-2;
}

.routing-route-container {
  @apply flex gap-2 items-start;
}

.route-number {
  @apply min-w-10 h-10 flex items-center justify-center font-bold rounded bg-secondary text-white cursor-grab flex-shrink-0;
}

.route-number:active {
  @apply cursor-grabbing;
}

.route-input-wrapper {
  @apply flex-1 relative;
}

.address-dropdown {
  @apply absolute top-full left-0 right-0 bg-white border border-tertiary rounded shadow-lg z-50 max-h-48 overflow-y-auto mt-1;
}

.address-dropdown ul {
  @apply list-none m-0 p-0;
}

.address-item {
  @apply px-3 py-2 hover:bg-secondary hover:text-white cursor-pointer border-b border-tertiary last:border-b-0 text-sm;
}

.address-item-highlighted {
  @apply bg-secondary text-white;
}

.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
}

.tooltip-container {
  @apply relative;
}

.tooltip {
  @apply absolute bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none hidden z-50;
}

.routing-tooltip {
  @apply -top-9 left-0;
}

.tooltip-container:hover .routing-tooltip {
  @apply block;
}

/* Route info wrapper */
.route-info-wrapper {
  @apply mt-4 pt-3 border-t border-tertiary;
}

/* Route details scroll */
.route-details-scroll {
  @apply bg-secondary rounded;
}

.route-details-step {
  @apply p-2 border-l-4 border-quaternary hover:bg-tertiary cursor-pointer transition-colors text-white text-sm;
}

.route-instruction {
  @apply font-semibold mb-1;
}

.route-instruction-data {
  @apply text-xs text-tertiary;
}

/* Icon direction - using simple unicode for now */
.icon-Direction {
  @apply mr-2 inline-block;
}
</style>
