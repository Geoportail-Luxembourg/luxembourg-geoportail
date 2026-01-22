import { ref, computed, onUnmounted } from 'vue'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Style from 'ol/style/Style'
import Circle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Text from 'ol/style/Text'
import Select from 'ol/interaction/Select'
import Modify from 'ol/interaction/Modify'
import Overlay from 'ol/Overlay'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import Collection from 'ol/Collection'
import Geolocation from 'ol/Geolocation'
import { listen } from 'ol/events'
import { click, pointerMove } from 'ol/events/condition'
import { transform } from 'ol/proj'
import Map from 'ol/Map'
import type Geometry from 'ol/geom/Geometry'
import type SimpleGeometry from 'ol/geom/SimpleGeometry'

import useMap from '@/composables/map/map.composable'
import { useRoutingStore } from '@/stores/routing.store'

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

interface RoutingState {
  routes: string[]
  routesOrder: number[]
  features: Collection<Feature<Geometry>>
  routeFeatures: Collection<Feature<Geometry>>
  stepFeatures: Collection<Feature<Geometry>>
  transportMode: number // 1: Pedestrian, 2: Bike, 3: Car
  criteria: number // 0: fastest, 1: shortest
  map: Map | null
}

/**
 * Composable for managing routing functionality
 * Converts v3 Angular routing to Vue 3 composition API
 */
export default function useRouting(
  maxExtent: [number, number, number, number],
  poiSearchServiceUrl: string,
  onGetRoute: (state: RoutingState) => Promise<void>,
  onReverseGeocode: (geometry: [number, number]) => Promise<any>
) {
  const map = useMap().getOlMap()
  const routingStore = useRoutingStore()

  // Use store state - create a reactive wrapper that points to store refs
  const routingState = computed<RoutingState>({
    get: () => ({
      routes: routingStore.routes,
      routesOrder: routingStore.routesOrder,
      features: routingStore.features,
      routeFeatures: routingStore.routeFeatures,
      stepFeatures: routingStore.stepFeatures,
      transportMode: routingStore.transportMode,
      criteria: routingStore.criteria,
      map: map,
    }),
    set: val => {
      routingStore.routes = val.routes
      routingStore.routesOrder = val.routesOrder
      // features are already reactive Collections
      routingStore.transportMode = val.transportMode
      routingStore.criteria = val.criteria
    },
  })

  // Use store refs directly for these
  const distance = computed({
    get: () => routingStore.distance,
    set: val => {
      routingStore.distance = val
    },
  })
  const time = computed({
    get: () => routingStore.time,
    set: val => {
      routingStore.time = val
    },
  })
  const elevationGain = computed({
    get: () => routingStore.elevationGain,
    set: val => {
      routingStore.elevationGain = val
    },
  })
  const elevationLoss = computed({
    get: () => routingStore.elevationLoss,
    set: val => {
      routingStore.elevationLoss = val
    },
  })
  const routeDesc = computed({
    get: () => routingStore.routeDesc,
    set: val => {
      routingStore.routeDesc = val
    },
  })
  const profileData = computed({
    get: () => routingStore.profileData,
    set: val => {
      routingStore.profileData = val
    },
  })
  const hasResult = computed({
    get: () => routingStore.hasResult,
    set: val => {
      routingStore.hasResult = val
    },
  })

  const showRedirect = ref(false)

  // Computed
  const isRoute = computed(() => routingStore.routeDesc.length > 0)

  // Interactions
  let selectInteraction: Select | null = null
  let selectInteractionPM: Select | null = null
  let modifyInteraction: Modify | null = null
  let geolocation: Geolocation | null = null

  // Overlays
  let tooltipElement: HTMLElement | null = null
  let tooltipOverlay: Overlay | null = null

  // Feature collections
  const modifyFeaturesCollection = new Collection<Feature<Geometry>>()
  let highlightOverlay: VectorLayer | null = null
  let source: VectorSource | null = null
  let routeLayer: VectorLayer<VectorSource> | null = null
  let stepsLayer: VectorLayer<VectorSource> | null = null
  let waypointLayer: VectorLayer<VectorSource> | null = null

  function ensureRouteSize(index: number) {
    // Grow routes array to fit the requested index
    while (routingState.value.routes.length <= index) {
      routingState.value.routes.push('')
      routingState.value.routesOrder.push(routingState.value.routesOrder.length)
    }

    // Grow features collection with blank placeholders to preserve ordering
    while (routingState.value.features.getLength() <= index) {
      const blankFeature = new Feature()
      blankFeature.set(
        'name',
        '' + (routingState.value.features.getLength() + 1)
      )
      routingState.value.features.push(blankFeature)
    }
  }

  function triggerGetRouteIfReady() {
    const filledPoints = routingState.value.features
      .getArray()
      .filter(feature => feature.getGeometry() instanceof Point).length

    if (filledPoints >= 2) {
      onGetRoute(routingState.value)
    }
  }

  /**
   * Initialize routing interactions and overlays
   */
  function init() {
    if (!map) return

    // Initialize highlight overlay
    highlightOverlay = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({ color: '#ff0000' }),
        }),
      }),
    })
    map.addLayer(highlightOverlay)

    // Layer for route geometry - use Collection from store as source
    source = new VectorSource({
      features: routingStore.routeFeatures,
    })
    routeLayer = new VectorLayer({
      source: source,
      style: new Style({
        stroke: new Stroke({
          color: [255, 0, 0, 0.8],
          width: 5,
        }),
      }),
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      zIndex: 2000,
    })
    map.addLayer(routeLayer)

    // Layer for steps (points) - use Collection from store as source
    stepsLayer = new VectorLayer({
      source: new VectorSource({
        features: routingStore.stepFeatures,
      }),
      style: new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({ color: '#2980b9' }),
          stroke: new Stroke({ color: '#ffffff', width: 2 }),
        }),
      }),
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      zIndex: 2001,
    })
    map.addLayer(stepsLayer)

    // Layer for waypoints (start/intermediate/end with numbers) - use Collection from store
    waypointLayer = new VectorLayer({
      source: new VectorSource({
        features: routingStore.waypointFeatures,
      }),
      style: feature => {
        const label = feature.get('name') || ''
        return new Style({
          image: new Circle({
            radius: 10,
            fill: new Fill({ color: '#ffffff' }),
            stroke: new Stroke({ color: '#2980b9', width: 3 }),
          }),
          text: new Text({
            text: String(label),
            font: 'bold 12px sans-serif',
            fill: new Fill({ color: '#2980b9' }),
            stroke: new Stroke({ color: '#ffffff', width: 2 }),
          }),
          zIndex: 2100,
        })
      },
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      zIndex: 2100,
    })
    map.addLayer(waypointLayer)

    // Select interaction (click)
    selectInteraction = new Select({
      features: modifyFeaturesCollection,
      condition: click,
      filter: (feature: Feature) => {
        return (
          routingState.value.stepFeatures.getArray().indexOf(feature) !== -1
        )
      },
    })
    map.addInteraction(selectInteraction)
    selectInteraction.setActive(false)

    // Select interaction (pointer move)
    selectInteractionPM = new Select({
      condition: pointerMove,
      filter: (feature: Feature) => {
        return (
          routingState.value.stepFeatures.getArray().indexOf(feature) !== -1
        )
      },
    })
    map.addInteraction(selectInteractionPM)
    selectInteractionPM.setActive(false)
    listen(selectInteractionPM, 'select', handleShowHideTooltip)

    // Modify interaction
    modifyInteraction = new Modify({
      features: modifyFeaturesCollection,
    })
    map.addInteraction(modifyInteraction)
    modifyInteraction.setActive(true)
    listen(modifyInteraction, 'modifyend', handleModifyEndStepFeature)

    // Listen to routing features
    routingState.value.routeFeatures.on('add', handleShowRoute)
    routingState.value.routeFeatures.on('remove', handleRemoveRoute)

    // Initialize geolocation
    geolocation = new Geolocation({
      projection: map.getView().getProjection(),
      trackingOptions: {
        enableHighAccuracy: true,
        maximumAge: 60000,
        timeout: 7000,
      },
    })

    // Get source from map
    const layers = map.getLayers().getArray()
    for (const layer of layers) {
      if ((layer as any).get('id') === 'featureOverlay') {
        source = (layer as VectorLayer<VectorSource>).getSource() || null
        break
      }
    }
  }

  /**
   * Handle tooltip on pointer move
   */
  function handleShowHideTooltip(e: any) {
    if (highlightOverlay && highlightOverlay.getSource()) {
      highlightOverlay.getSource()!.clear()
    }

    const selectedFeatures = e.target.getFeatures()
    if (selectedFeatures.getLength() > 0) {
      const feature = selectedFeatures.getArray()[0]
      const geometry = feature.getGeometry().getFirstCoordinate()
      const newFeature = new Feature({
        geometry: new Point(geometry),
      })

      if (highlightOverlay) {
        highlightOverlay.getSource()!.addFeature(newFeature)
      }

      createTooltip(geometry, feature.get('name'))
    } else {
      removeTooltip()
    }
  }

  /**
   * Create tooltip overlay
   */
  function createTooltip(position: any, text: string) {
    removeTooltip()
    tooltipElement = document.createElement('div')
    tooltipElement.classList.add('lux-tooltip')
    tooltipElement.innerHTML = text

    tooltipOverlay = new Overlay({
      element: tooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
    })

    map.addOverlay(tooltipOverlay)
    tooltipOverlay.setPosition(position)
  }

  /**
   * Remove tooltip overlay
   */
  function removeTooltip() {
    if (tooltipOverlay && map) {
      map.removeOverlay(tooltipOverlay)
    }
    if (tooltipElement && tooltipElement.parentNode) {
      tooltipElement.parentNode.removeChild(tooltipElement)
    }
    tooltipElement = null
    tooltipOverlay = null
  }

  /**
   * Insert or replace a feature at a given (0-based) index
   */
  function insertFeatureAt(index: number, feature: Feature) {
    ensureRouteSize(index)
    routingState.value.features.setAt(index, feature)
    setPositionText()
  }

  /**
   * Set a waypoint using lon/lat coordinates (EPSG:4326)
   */
  function setRoutePoint(
    index: number,
    lonLat: [number, number],
    label: string
  ) {
    if (!map) return

    const projected = transform(
      lonLat,
      'EPSG:4326',
      map.getView().getProjection()
    )

    const feature = new Feature({
      geometry: new Point(projected),
    })

    feature.set('label', label)
    feature.set('name', '' + (index + 1))
    insertFeatureAt(index, feature)

    routingState.value.routes[index] = label
    triggerGetRouteIfReady()
  }

  /**
   * Handle modify end event
   */
  function handleModifyEndStepFeature() {
    const lastIdx = routingState.value.features.getLength() - 1
    const lastFeature = routingState.value.features.removeAt(lastIdx)
    const lastLabel = routingState.value.routes[lastIdx]

    const feature = modifyFeaturesCollection.getArray()[0]
    if (!feature) return

    const geometry = feature.getGeometry()
    if (!geometry || !(geometry instanceof Point)) return

    const clonedFeature = feature.clone()
    const coords = geometry.getFirstCoordinate() as [number, number]

    onReverseGeocode(coords).then(resp => {
      if (resp['count'] > 0) {
        const address = resp['results'][0]
        const formattedAddress =
          address['number'] +
          ',' +
          address['street'] +
          ',' +
          address['postal_code'] +
          ' ' +
          address['locality']
        let label = formattedAddress

        if (!(label.length > 0 && Math.round(address['distance']) <= 100)) {
          label = coords.toString()
        }

        clonedFeature.set('label', label)
        routingState.value.routes[lastIdx] = label
      }
    })

    insertFeatureAt(lastIdx + 1, clonedFeature)

    if (lastFeature !== undefined && lastFeature !== null) {
      addRoute(lastLabel)
      insertFeatureAt(lastIdx + 2, lastFeature)
    }

    onGetRoute(routingState.value)
  }

  /**
   * Handle route display
   */
  function handleShowRoute() {
    const routeArray = routingState.value.routeFeatures.getArray()
    if (routeArray.length === 0) {
      handleRemoveRoute()
      return
    }

    const feature = routeArray[0]
    const curView = map.getView()

    // Features are already in routeFeatures Collection which is bound to routeLayer source
    // No need to manually add them to the source

    // Set source attribution
    if (source) {
      source.setAttributions(feature.get('attribution'))
    }

    // Get profile data (if available)
    if (profileData.value.length > 0) {
      elevationGain.value =
        profileData.value[profileData.value.length - 1]['elevationGain']
      elevationLoss.value =
        profileData.value[profileData.value.length - 1]['elevationLoss']
    }

    // Process route description
    routeDesc.value = feature.get('desc') || []
    let cumulativeDistance = 0
    let cumulativeTime = 0

    routeDesc.value.forEach((description: RouteDescription) => {
      const coordinate = [description.lon, description.lat]
      const geometry = transform(
        coordinate,
        'EPSG:4326',
        curView.getProjection()
      )
      const stepFeature = new Feature({
        geometry: new Point(geometry),
      })

      cumulativeDistance += description.distance
      cumulativeTime += description.time
      description.cumulativeDistance = cumulativeDistance
      description.cumulativeTime = cumulativeTime

      stepFeature.set('name', description.description)
      // Add to Collection - it's bound to stepsLayer source, no need to add manually
      routingState.value.stepFeatures.push(stepFeature)
    })

    distance.value = feature.get('dist') || 0
    time.value = feature.get('time') || 0

    if (selectInteraction) selectInteraction.setActive(true)
    if (selectInteractionPM) selectInteractionPM.setActive(true)

    hasResult.value = true

    // Fit view
    const viewSize = map.getSize()
    const geom = feature.getGeometry() as SimpleGeometry | null
    if (!geom) return

    curView.fit(geom, {
      size: viewSize,
    })
  }

  /**
   * Handle route removal
   */
  function handleRemoveRoute() {
    routingState.value.stepFeatures.clear()
    if (selectInteraction) selectInteraction.setActive(false)
    if (selectInteractionPM) selectInteractionPM.setActive(false)
    hasResult.value = false

    if (source) {
      source.setAttributions(undefined)
    }

    // Collections are bound to layer sources, no need to clear manually

    // Recalculate waypoints instead of clearing them
    setPositionText()
  }

  /**
   * Geolocate to current position
   */
  function whereAmI(step: number) {
    if (window.location.protocol !== 'https:') {
      showRedirect.value = true
    } else if (geolocation) {
      const positionListener = () => {
        geolocation!.setTracking(false)
        const position = geolocation!.getPosition()
        if (!position) return
        const feature = new Feature({
          geometry: new Point(position),
        })

        const label = position.toString()
        feature.set('label', label)
        insertFeatureAt(step + 1, feature)
        routingState.value.routes[step] = label
        onGetRoute(routingState.value)
      }

      listen(geolocation, 'change:position', positionListener)
      geolocation.setTracking(true)
    }
  }

  /**
   * Clear all routes
   */
  function clearRoutes() {
    // Use store's reset() to ensure all state is properly cleared
    routingStore.reset()
    modifyFeaturesCollection.clear()

    if (source) {
      source.setAttributions(undefined)
    }
  }

  /**
   * Clear specific route
   */
  function clearRoute(routeIdx: number) {
    if (
      routeIdx > 0 &&
      routeIdx < routingState.value.features.getArray().length - 1
    ) {
      routingState.value.features.removeAt(routeIdx)
      routingState.value.routes.splice(routeIdx, 1)
      routingState.value.routesOrder.splice(routeIdx, 1)
    } else {
      routingState.value.routes[routeIdx] = ''
      const blankFeature = new Feature()
      blankFeature.set('name', '' + (routeIdx + 1))
      routingState.value.features.setAt(routeIdx, blankFeature)
    }

    routingState.value.routeFeatures.clear()
    routingState.value.stepFeatures.clear()
    modifyFeaturesCollection.clear()
    routeDesc.value = []

    if (source) {
      source.setAttributions(undefined)
    }

    // Collections are bound to layer sources, no need to clear manually

    // Recalculate waypoints instead of clearing them
    setPositionText()

    onGetRoute(routingState.value)
  }

  /**
   * Add new route
   */
  function addRoute(routeName?: string) {
    routingState.value.routes.push(routeName || '')
    routingState.value.routesOrder.push(routingState.value.routesOrder.length)
    // No need to trigger reactivity - store handles it
  }

  /**
   * Exchange first and last routes
   */
  function exchangeRoutes() {
    const lastFeature = routingState.value.features.removeAt(
      routingState.value.features.getLength() - 1
    )
    const firstFeature = routingState.value.features.removeAt(0)

    if (
      firstFeature !== null &&
      firstFeature !== undefined &&
      lastFeature !== null &&
      lastFeature !== undefined
    ) {
      routingState.value.features.insertAt(0, lastFeature)
      routingState.value.features.push(firstFeature)
    }

    const temp = routingState.value.routes[routingState.value.routes.length - 1]
    routingState.value.routes[routingState.value.routes.length - 1] =
      routingState.value.routes[0]
    routingState.value.routes[0] = temp

    setPositionText()
    onGetRoute(routingState.value)
  }

  /**
   * Set position text for features
   */
  function setPositionText() {
    // Sync waypoint features with numbered markers
    routingStore.waypointFeatures.clear()

    let pos = 0
    routingState.value.features.forEach((feature: Feature) => {
      pos++
      if (feature !== undefined && feature !== null) {
        feature.set('name', '' + pos)
        // Add to waypoint collection if it's a Point geometry
        if (feature.getGeometry() instanceof Point) {
          routingStore.waypointFeatures.push(feature)
        }
      }
    })
  }

  /**
   * Center map on coordinate
   */
  function center(lon: number, lat: number) {
    const curView = map.getView()
    const coordinate = transform(
      [lon, lat],
      'EPSG:4326',
      curView.getProjection()
    )
    curView.setCenter(coordinate)
  }

  /**
   * Highlight position with tooltip
   */
  function highlightPosition(lon: number, lat: number, text: string) {
    const coordinate = [lon, lat]
    const curView = map.getView()
    const geometry = transform(coordinate, 'EPSG:4326', curView.getProjection())
    createTooltip(geometry, text)
  }

  /**
   * Clear highlight
   */
  function clearHighlight() {
    if (highlightOverlay && highlightOverlay.getSource()) {
      highlightOverlay.getSource()!.clear()
    }
    removeTooltip()
  }

  /**
   * Get direction icon class
   */
  function getIconDirectionClass(direction: number): string {
    switch (direction) {
      case 0:
        return 'north'
      case 1:
      case 2:
      case 3:
        return 'west'
      case 4:
        return 'south'
      case 5:
      case 6:
      case 7:
        return 'east'
      default:
        return 'north'
    }
  }

  // Cleanup
  onUnmounted(() => {
    if (selectInteraction && map) {
      map.removeInteraction(selectInteraction)
    }
    if (selectInteractionPM && map) {
      map.removeInteraction(selectInteractionPM)
    }
    if (modifyInteraction && map) {
      map.removeInteraction(modifyInteraction)
    }
    if (highlightOverlay && map) {
      map.removeLayer(highlightOverlay)
    }
    if (routeLayer && map) {
      map.removeLayer(routeLayer)
    }
    if (stepsLayer && map) {
      map.removeLayer(stepsLayer)
    }
    if (waypointLayer && map) {
      map.removeLayer(waypointLayer)
    }
    removeTooltip()
  })

  return {
    // State
    routingState,
    distance,
    time,
    elevationGain,
    elevationLoss,
    routeDesc,
    profileData,
    hasResult,
    showRedirect,

    // Computed
    isRoute,

    // Methods
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
    setRoutePoint,
    recalculateRoute: () => {
      setPositionText()
      onGetRoute(routingState.value)
    },
    getDistance: () => distance.value,
    getTime: () => time.value,
    getElevationGain: () => elevationGain.value,
    getElevationLoss: () => elevationLoss.value,
    getRoutes: () => routingState.value.routes,
    getMode: () => routingState.value.transportMode,
    setMode: (mode: number) => {
      routingState.value.transportMode = mode
      onGetRoute(routingState.value)
    },
    getCriteria: () => routingState.value.criteria,
    setCriteria: (criteria: number) => {
      routingState.value.criteria = criteria
      onGetRoute(routingState.value)
    },
  }
}
