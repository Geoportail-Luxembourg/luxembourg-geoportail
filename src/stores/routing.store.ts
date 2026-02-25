import { ref, shallowRef, markRaw } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import Collection from 'ol/Collection'
import Feature from 'ol/Feature'
import type Geometry from 'ol/geom/Geometry'

interface RouteDescription {
  description: string
  direction: number
  distance: number
  time: number
  lon: number
  lat: number
  cumulativeDistance?: number
  cumulativeTime?: number
}

/**
 * Store pour gérer le routing panel et les coordonnées
 * Permet de partager les données entre le search et le routing panel
 * ET de persister l'état quand on change de panel
 */
export const useRoutingStore = defineStore('routing', () => {
  // Coordonnées de départ (définies par la recherche)
  const startCoordinate = ref<[number, number] | null>(null)
  const startLabel = ref<string>('')
  const targetRouteIndex = ref<number>(0)

  // État du panel
  const isOpen = ref(false)

  // État du routing persisté (survit aux changements de panel)
  const routes = ref<string[]>(['', ''])
  const routesOrder = ref<number[]>([0, 1])
  const features = shallowRef(markRaw(new Collection<Feature<Geometry>>()))
  const routeFeatures = shallowRef(markRaw(new Collection<Feature<Geometry>>()))
  const stepFeatures = shallowRef(markRaw(new Collection<Feature<Geometry>>()))
  const waypointFeatures = shallowRef(
    markRaw(new Collection<Feature<Geometry>>())
  )
  const transportMode = ref(3) // Car by default
  const criteria = ref(0) // Fastest by default

  // Résultats du routing
  const distance = ref(0)
  const time = ref(0)
  const elevationGain = ref(0)
  const elevationLoss = ref(0)
  const routeDesc = ref<RouteDescription[]>([])
  const profileData = ref<any[]>([])
  const hasResult = ref(false)

  /**
   * Définir le point de départ et ouvrir le panel
   */
  function setStartPoint(
    coords: [number, number],
    label: string,
    index?: number
  ) {
    startCoordinate.value = coords
    startLabel.value = label
    targetRouteIndex.value = index ?? 0
    isOpen.value = true
  }

  /**
   * Fermer le panel
   */
  function closePanel() {
    isOpen.value = false
  }

  /**
   * Ouvrir le panel
   */
  function openPanel() {
    isOpen.value = true
  }

  /**
   * Réinitialiser le store (clear route)
   */
  function reset() {
    startCoordinate.value = null
    startLabel.value = ''
    routes.value = ['', '']
    routesOrder.value = [0, 1]
    features.value.clear()
    routeFeatures.value.clear()
    stepFeatures.value.clear()
    waypointFeatures.value.clear()
    transportMode.value = 3
    criteria.value = 0
    distance.value = 0
    time.value = 0
    elevationGain.value = 0
    elevationLoss.value = 0
    routeDesc.value = []
    profileData.value = []
    hasResult.value = false
  }

  /**
   * Réinitialiser seulement les résultats (garder les routes)
   */
  function clearResults() {
    routeFeatures.value.clear()
    stepFeatures.value.clear()
    waypointFeatures.value.clear()
    distance.value = 0
    time.value = 0
    elevationGain.value = 0
    elevationLoss.value = 0
    routeDesc.value = []
    profileData.value = []
    hasResult.value = false
  }

  return {
    // Coordonnées de départ
    startCoordinate,
    startLabel,
    targetRouteIndex,
    isOpen,

    // État du routing
    routes,
    routesOrder,
    features,
    routeFeatures,
    stepFeatures,
    waypointFeatures,
    transportMode,
    criteria,

    // Résultats
    distance,
    time,
    elevationGain,
    elevationLoss,
    routeDesc,
    profileData,
    hasResult,

    // Actions
    setStartPoint,
    closePanel,
    openPanel,
    reset,
    clearResults,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoutingStore, import.meta.hot))
}
