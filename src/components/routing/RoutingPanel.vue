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
      <div class="routing-component">
        <div class="routing-icon-container container-fluid">
          <!-- Transport modes -->
          <span
            :class="[
              'routing-icon',
              { selected: routingState.transportMode === 3 },
            ]"
            @click="setMode(3)"
            :title="t('Car mode')"
            :aria-label="t('Mode voiture')"
            role="button"
            :aria-pressed="routingState.transportMode === 3"
          >
            <span class="icon-Car" aria-hidden="true"></span>
          </span>
          <span
            :class="[
              'routing-icon',
              { selected: routingState.transportMode === 1 },
            ]"
            @click="setMode(1)"
            :title="t('Pedestrian mode')"
            :aria-label="t('Mode piéton')"
            role="button"
            :aria-pressed="routingState.transportMode === 1"
          >
            <span class="icon-Pedestrian" aria-hidden="true"></span>
          </span>
          <span
            :class="[
              'routing-icon',
              { selected: routingState.transportMode === 2 },
            ]"
            @click="setMode(2)"
            :title="t('Bicycle mode')"
            :aria-label="t('Mode vélo')"
            role="button"
            :aria-pressed="routingState.transportMode === 2"
          >
            <span class="icon-Bike" aria-hidden="true"></span>
          </span>

          <!-- Action buttons (positioned right via CSS like v3) -->
          <span class="routing-icon">
            <span
              v-if="isRoute"
              class="fa fa-floppy-o icon-Trash"
              @click="createMapFromRoute"
              @keydown.enter.space.prevent="createMapFromRoute"
              :title="t('Save to my maps')"
              :aria-label="t('Sauvegarder la route dans Mes cartes')"
              role="button"
              tabindex="0"
            ></span>
            <span
              class="fa fa-trash icon-Trash"
              @click="clearRoutes()"
              @keydown.enter.space.prevent="clearRoutes()"
              :title="t('Clear all')"
              :aria-label="t('Effacer tous les points de route')"
              role="button"
              tabindex="0"
            ></span>
            <span
              class="icon-Switch"
              @click="exchangeRoutes()"
              @keydown.enter.space.prevent="exchangeRoutes()"
              :title="t('Swap start and end')"
              :aria-label="t('Échanger départ et arrivée')"
              role="button"
              tabindex="0"
            ></span>
          </span>
        </div>
      </div>
      <!-- end .routing-component -->

      <!-- Route inputs -->
      <div
        v-if="isLoading"
        class="flex justify-center py-4"
        role="status"
        :aria-label="$t('Calcul de l\'itinéraire en cours')"
      >
        <span
          class="fa fa-spinner fa-spin text-white"
          aria-hidden="true"
        ></span>
      </div>
      <div v-else class="routing-routes mb-4" ref="sortableRoutes">
        <div
          v-for="(route, key) in routingState.routes"
          :key="key"
          class="routing-route-container mb-2"
          :data-route-id="key"
        >
          <div
            class="route-number drag-handle"
            :aria-label="
              $t('Point {number}, glisser pour réordonner', { number: key + 1 })
            "
            :title="$t('Glisser pour réordonner')"
          >
            {{ key + 1 }}
          </div>

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
              <div :id="`address-help-${key}`" class="sr-only">
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
            :aria-expanded="criteriaDropdownOpen"
            aria-haspopup="listbox"
            aria-controls="criteria-dropdown"
          >
            {{
              routingState.criteria === 0
                ? $t('Le plus rapide')
                : $t('Le plus court')
            }}
            <span class="fa fa-chevron-down ml-2" aria-hidden="true"></span>
          </button>
          <ul
            v-if="criteriaDropdownOpen"
            id="criteria-dropdown"
            class="lux-dropdown-list"
            role="listbox"
            :aria-label="$t('Critère de calcul')"
          >
            <li
              class="lux-dropdown-list-item"
              @click="selectCriteria(0)"
              role="option"
              :aria-selected="routingState.criteria === 0"
              tabindex="0"
              @keydown.enter.space.prevent="selectCriteria(0)"
            >
              {{ $t('Le plus rapide') }}
            </li>
            <li
              class="lux-dropdown-list-item"
              @click="selectCriteria(1)"
              role="option"
              :aria-selected="routingState.criteria === 1"
              tabindex="0"
              @keydown.enter.space.prevent="selectCriteria(1)"
            >
              {{ $t('Le plus court') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Route Info -->
      <div class="route-info-wrapper printable">
        <div class="route-info" v-if="isRoute">
          <!-- General info -->
          <div
            class="route-general route-info-container"
            role="region"
            :aria-label="$t('Résumé de l\'itinéraire')"
          >
            <dl class="route-general-info-container">
              <div class="route-single-info">
                <dt class="route-info-title">{{ $t('Distance') }}</dt>
                <dd class="route-info-data route-info-general-data">
                  {{ formatDistance(distance) }}
                </dd>
              </div>
              <div class="route-single-info">
                <dt class="route-info-title">{{ $t('Temps') }}</dt>
                <dd class="route-info-data route-info-general-data">
                  {{ secondsToHHmmss(time) }}
                </dd>
              </div>
            </dl>
          </div>

          <!-- Elevation Profile -->
          <div
            v-if="profileData.length > 0"
            class="route-graphic-container route-info-container"
            role="region"
            :aria-label="$t('Dénivelé lors de votre trajet')"
          >
            <h3 class="route-info-title" style="margin-bottom: 10px">
              {{ $t('Dénivelé lors de votre trajet') }}
            </h3>
            <dl
              class="elevation-summary"
              :aria-label="$t('Valeurs de dénivelé')"
            >
              <div class="elevation-entry">
                <dt class="elevation-label" :title="$t('Dénivelé positif')">
                  Δ+
                </dt>
                <dd>{{ Math.round(elevationGain) }} m</dd>
              </div>
              <div class="elevation-entry">
                <dt class="elevation-label" :title="$t('Dénivelé négatif')">
                  Δ−
                </dt>
                <dd>{{ Math.round(elevationLoss) }} m</dd>
              </div>
              <div class="elevation-entry">
                <dt class="elevation-label" :title="$t('Dénivelé net')">Δ</dt>
                <dd>
                  {{ Math.round(elevationGain - elevationLoss) >= 0 ? '+' : ''
                  }}{{ Math.round(elevationGain - elevationLoss) }} m
                </dd>
              </div>
            </dl>
            <elevation-profile
              :profile-data="profileData"
              @hover:profile="(_, dist) => highlightProfilePoint(dist)"
              @out:profile="clearHighlight()"
            />
          </div>

          <!-- Route Details -->
          <div class="route-details route-info-container">
            <h3 class="route-info-title">
              <span>{{ $t('Détail de votre trajet') }}</span>
              <div
                class="no-print route-details-download"
                role="button"
                tabindex="0"
                @click="exportGpx()"
                @keydown.enter.space.prevent="exportGpx()"
                :aria-label="t('Télécharger le fichier GPX')"
                :title="t('Download GPX')"
              >
                <small>{{ $t('Télécharger') }}</small>
                <span class="icon-Download" aria-hidden="true"></span>
              </div>
            </h3>

            <div
              v-for="(step, key) in routeDesc"
              :key="key"
              class="route-details-step"
              role="button"
              tabindex="0"
              :aria-label="`${step.description} — ${formatDistance(step.cumulativeDistance || 0)} — ${secondsToHHmmss(step.cumulativeTime || 0)}`"
              @mouseleave="clearHighlight()"
              @mouseover="
                highlightPosition(step.lon, step.lat, step.description)
              "
              @focus="highlightPosition(step.lon, step.lat, step.description)"
              @blur="clearHighlight()"
              @click="center(step.lon, step.lat)"
              @keydown.enter.space.prevent="center(step.lon, step.lat)"
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
              <div class="route-info-data route-instruction-data">
                {{ formatDistance(step.cumulativeDistance || 0) }}
              </div>
              <div class="route-info-data route-instruction-data">
                {{ secondsToHHmmss(step.cumulativeTime || 0) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div v-if="!isRoute" class="routes-tip">
        <h3>{{ $t('Petite astuce!') }}</h3>
        <p>
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
// const routeIds = ref<number[]>([0, 1])

const isLoading = ref(false)

let sortableInstance: ReturnType<typeof useSortable> | null = null

function initSortable() {
  if (sortableInstance) {
    sortableInstance.destroy()
  }
  if (sortableRoutesRef.value) {
    sortableInstance = useSortable(sortableRoutesRef.value, {
      onSort: () => {
        // Clear existing route before reordering
        routingState.value.routeFeatures.clear()
        routingState.value.stepFeatures.clear()

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

            newRoutes.push(routingState.value.routes[routeId] || '')
            const feature = routingState.value.features.getArray()[routeId]
            if (feature) {
              newFeatures.push(feature.clone())
            }
          }
        }

        // Update all arrays
        routingState.value.routes.splice(
          0,
          routingState.value.routes.length,
          ...newRoutes
        )
        routingState.value.features.clear()
        newFeatures.forEach(feature =>
          routingState.value.features.push(feature)
        )

        // Clear route features again after updating input features
        routingState.value.routeFeatures.clear()
        routingState.value.stepFeatures.clear()

        // Trigger recalculation
        recalculateRoute()
      },
    })
  }
}

const {
  routingState,
  distance,
  time,
  routeDesc,
  profileData,
  elevationGain,
  elevationLoss,
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
  highlightProfilePoint,
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
        if (!isNaN(coord4326[0]) && !isNaN(coord4326[1])) {
          const waypoint = `${coord4326[1]},${coord4326[0]}`
          if (
            waypoints.length === 0 ||
            waypoints[waypoints.length - 1] !== waypoint
          ) {
            waypoints.push(waypoint)
          }
        } else {
          // eslint-disable-next-line no-console
          console.error('[Routing] Skipping invalid waypoint:', coord4326)
        }
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
      isLoading.value = true
      const response = await fetch(`${routingApiUrl}?${params.toString()}`)
      if (!response.ok) {
        // eslint-disable-next-line no-console
        console.error(
          '[Routing] Route calculation failed:',
          response.status,
          response.statusText,
          await response.text()
        )
        addNotification(
          t('Erreur lors du calcul de la route'),
          AlertNotificationType.ERROR
        )
        return
      }

      const data = await response.json()

      if ('success' in data && !data.success && !data.geometry) {
        // eslint-disable-next-line no-console
        console.error('[Routing] API returned error:', data.errorMessages, data)
        addNotification(
          t('Erreur lors du calcul de la route: ') +
            (data.errorMessages?.join(', ') || t('Erreur inconnue')),
          AlertNotificationType.ERROR
        )
        return
      }

      let parsedFeatures: Feature[]
      try {
        const parser = new GeoJSON()
        let geoJsonData
        if (data.type === 'FeatureCollection') {
          geoJsonData = data
        } else if (data.geometry) {
          geoJsonData = data.geometry
        } else {
          throw new Error('No GeoJSON data found in response')
        }
        parsedFeatures = parser.readFeatures(geoJsonData, {
          dataProjection: 'EPSG:4326',
          featureProjection: projection,
        })
      } catch (parseErr) {
        // eslint-disable-next-line no-console
        console.error('[Routing] Error parsing GeoJSON:', parseErr, data)
        addNotification(
          t("Erreur lors de l'analyse de la réponse du serveur"),
          AlertNotificationType.ERROR
        )
        return
      }

      state.routeFeatures.clear()
      state.stepFeatures.clear()

      parsedFeatures.forEach(feature => {
        state.routeFeatures.push(feature)
      })
    } catch (err) {
      // Log routing errors for debugging
      // eslint-disable-next-line no-console
      console.error('[Routing] Error fetching route:', err)
      addNotification(
        t('Erreur lors du calcul de la route'),
        AlertNotificationType.ERROR
      )
    } finally {
      isLoading.value = false
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

// Watch loading to reinitialize sortable after DOM update
watch(isLoading, (newVal, oldVal) => {
  if (oldVal && !newVal) {
    nextTick(() => initSortable())
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

  if (
    result.coordinates &&
    Array.isArray(result.coordinates) &&
    result.coordinates.length === 2 &&
    !isNaN(result.coordinates[0]) &&
    !isNaN(result.coordinates[1])
  ) {
    setRoutePoint(key, result.coordinates, result.label)
  } else {
    // eslint-disable-next-line no-console
    console.error('[Routing] Invalid coordinates from search result:', result)
    addNotification(
      t('Coordonnées invalides pour cette adresse'),
      AlertNotificationType.WARNING
    )
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
  initSortable()
})
</script>

<style scoped lang="postcss">
@font-face {
  font-family: 'apart-geoportail';
  src: url('/src/assets/fonts/apart-geoportail.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* =============================================
   Routing component - inspired by v3 styling
   ============================================= */

.routing-component {
  margin: 20px 0 0 0;
}

/* Icon container */
.routing-component .routing-icon-container {
  margin: 0 0 20px 0;
  position: relative;
  font-family: 'apart-geoportail' !important;
}

/* Transport mode icons */
.routing-component .routing-icon {
  display: inline-block;
  opacity: 0.5;
  transition: opacity 0.15s linear;
  cursor: pointer;
}

.routing-component .routing-icon + .routing-icon {
  margin: 0 0 0 20px;
}

.routing-component .routing-icon [class^='icon-']::before {
  font-size: 19px;
}

.routing-component .routing-icon.selected {
  opacity: 1;
}

.routing-component .routing-icon:hover {
  opacity: 1;
}

/* Last icon group (actions: save, clear, switch) - right aligned */
.routing-component .routing-icon:last-of-type {
  position: absolute;
  top: 0;
  right: 10px;
  opacity: 1;
}

/* apart-geoportail icon definitions */
.icon-Download::before {
  content: '\e900';
  color: #fff;
  font-family: 'apart-geoportail' !important;
}

.icon-Bike::before {
  content: '\e901';
  color: #fff;
  font-family: 'apart-geoportail' !important;
}

.icon-Car::before {
  content: '\e902';
  color: #fff;
  font-family: 'apart-geoportail' !important;
}

.icon-Direction::before {
  font-family: 'apart-geoportail' !important;
  content: '\e903';
  color: #000;
  font-size: 6px;
}

.icon-Pedestrian::before {
  content: '\e904';
  color: #fff;
  font-family: 'apart-geoportail' !important;
}

.icon-Route::before {
  content: '\e905';
  color: #fff;
  font-family: 'apart-geoportail' !important;
}

.icon-Switch::before {
  content: '\e906';
  color: #fff;
  font-family: 'apart-geoportail' !important;
}

.icon-Target::before {
  content: '\e907';
  color: #fff;
  font-family: 'apart-geoportail' !important;
  font-size: 19px;
}

.icon-Trash::before {
  color: #fff;
  font-size: 19px;
}

.icon-Switch {
  margin-left: 12px;
}

/* Direction icon rotations */
.icon-Direction.s-e {
  transform: rotate(45deg);
}
.icon-Direction.south {
  transform: rotate(90deg);
}
.icon-Direction.north {
  transform: rotate(270deg);
}
.icon-Direction.west {
  transform: rotate(180deg);
}
.icon-Direction.east {
  transform: rotate(0deg);
}
.icon-Direction.n-e {
  transform: rotate(315deg);
}
.icon-Direction.n-w {
  transform: rotate(225deg);
}
.icon-Direction.s-w {
  transform: rotate(135deg);
}

/* =============================================
   Route inputs list (original v4 style)
   ============================================= */

/* Mode buttons */
.mode-btn {
  @apply w-10 h-10 flex items-center justify-center rounded text-white bg-secondary hover:bg-tertiary transition-colors cursor-pointer border-none;
  font-size: 18px;
}

.mode-btn-active {
  @apply bg-tertiary;
}

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
  color: #333;
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

/* =============================================
   Route info section
   ============================================= */

.route-info-wrapper {
  overflow: auto;
}

@media screen and (max-width: 767px) {
  .route-info-wrapper {
    overflow: visible;
  }
  .route-info {
    padding-bottom: 50px;
  }
}

.route-info-container {
  padding: 20px 12px 25px 10px;
}

.route-info-container:not(:last-of-type) {
  border-bottom: 1px solid #8394a0;
}

.route-general {
  background-color: #e6eaec;
  padding: 20px 12px 25px 12px;
}

@media screen and (max-width: 767px) {
  .route-general {
    padding: 0;
  }
}

.route-general-info-container {
  display: table;
  width: 100%;
}

.route-single-info {
  display: table-cell;
  width: auto;
}

@media screen and (max-width: 767px) {
  .route-single-info {
    width: 33.33333%;
    padding: 12px;
  }
  .route-single-info:not(:last-of-type) {
    border-right: 1px solid;
  }
}

.route-info-title {
  font-size: 18px;
  line-height: 19px;
  font-weight: bold;
  color: #fff;
}

.route-info-title-sm {
  font-size: 14px;
  font-weight: bold;
  color: #666;
}

/* Reset dl/dt/dd to match previous div layout */
dl.route-general-info-container,
dl.elevation-summary {
  margin: 0;
  padding: 0;
}

dt,
dd {
  display: block;
  margin: 0;
  padding: 0;
}

.elevation-summary {
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
}

.elevation-summary .elevation-entry {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 16px;
  line-height: 20px;
  color: #333;
}

.elevation-label {
  font-weight: bold;
  color: #8394a0;
}

/* Override text color for light bg sections */
.route-general .route-info-title,
.route-graphic-container .route-info-title {
  color: #333;
}

.route-info-data {
  color: #8394a0;
}

.route-info-data.route-info-general-data {
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  padding-top: 10px;
  color: #333;
}

/* Route details section */
.route-details {
  background-color: #fff;
}

.route-details .route-info-title {
  position: relative;
  color: #333;
}

.route-details-download {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}

.route-details-download small {
  font-size: 11px;
  line-height: 10px;
  color: #8394a0;
  margin-right: 3px;
}

.route-details-step {
  font-size: 16px;
  line-height: 20px;
  border-bottom: 1px solid #8394a0;
  padding: 10px 10px 10px 30px;
  margin: 0 -12px 0 0;
  position: relative;
  cursor: pointer;
}

.route-details-step:hover::before {
  content: '';
  width: 4px;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 0;
  margin: 0 0 0 -12px;
  background-color: var(--color-secondary);
}

.route-details-step .route-instruction {
  margin-bottom: 10px;
  position: relative;
  color: #333;
}

.route-details-step .icon-Direction {
  position: absolute;
  top: 0;
  right: 100%;
  margin-right: 6px;
}

.route-details-step .route-instruction-data {
  font-size: 16px;
  line-height: 19px;
  display: inline-block;
  margin: 0 10px 0 0;
  color: #8394a0;
}

/* Elevation profile container */
.route-graphic-container {
  background-color: #fff;
}

/* =============================================
   Tips section
   ============================================= */

.routes-tip {
  padding: 30px 20px;
  text-align: center;
  background-color: #fff;
  margin-top: 10px;
}

.routes-tip h3 {
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #333;
}

.routes-tip p {
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
</style>
