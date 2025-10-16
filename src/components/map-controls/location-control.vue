<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import Control from 'ol/control/Control'
import { Options } from 'ol/control/Control'
import Geolocation from 'ol/Geolocation'
import { Point } from 'ol/geom'
import Feature from 'ol/Feature'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import type Map from 'ol/Map'

import useControl from '@/composables/control/control.composable'
import useMap from '@/composables/map/map.composable'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    tipLabel?: string
  }>(),
  {
    className: 'location-button',
    label: '\ue800',
    tipLabel: 'Location',
  }
)

const controlElement = ref<HTMLElement | null>(null)
const isTracking = ref(false)

let geolocation: Geolocation | null = null
let positionFeature: Feature<Point> | null = null
let accuracyFeature: Feature | null = null
let featureOverlay: VectorLayer<VectorSource> | null = null
let map: Map | null = null

function handleCenterToLocation() {
  // Check for HTTPS protocol (disabled for localhost testing)
  if (
    window.location.protocol !== 'https:' &&
    window.location.hostname !== 'localhost'
  ) {
    addNotification(
      t(
        "La geolocalisation n'est disponible que dans la version sécurisée du Geoportail (https). Voulez-vous être automatiquement redirigé?",
        { ns: 'client' }
      ),
      AlertNotificationType.WARNING
    )
    return
  }

  if (geolocation === null) {
    initGeoLocation()
  }

  if (!geolocation?.getTracking()) {
    initFeatureOverlay()
    map?.getView().setZoom(17)
    geolocation?.setTracking(true)
  } else {
    clearFeatureOverlay()
    geolocation?.setTracking(false)
  }
}

function initGeoLocation() {
  if (!map) return

  geolocation = new Geolocation({
    projection: map.getView().getProjection(),
    trackingOptions: {
      enableHighAccuracy: true,
      maximumAge: 60000,
      timeout: 7000,
    },
  })

  // Listen to tracking changes
  geolocation.on('change:tracking', () => {
    isTracking.value = geolocation?.getTracking() ?? false
  })

  // Listen to position changes
  geolocation.on('change:position', () => {
    const position = geolocation?.getPosition()
    if (position && positionFeature) {
      positionFeature.setGeometry(new Point(position))
      map?.getView().setCenter(position)
    }
  })

  // Listen to accuracy changes
  geolocation.on('change:accuracyGeometry', () => {
    const accuracyGeometry = geolocation?.getAccuracyGeometry()
    if (accuracyGeometry && accuracyFeature) {
      accuracyFeature.setGeometry(accuracyGeometry)
    }
  })

  // Listen to errors
  geolocation.on('error', (error: any) => {
    clearFeatureOverlay()
    if (error.message && error.message.length > 0) {
      const msg =
        t("Erreur lors de l'acquisition de la position :", { ns: 'client' }) +
        ' ' +
        error.message
      addNotification(msg, AlertNotificationType.ERROR)
    }
  })
}

function initFeatureOverlay() {
  if (!map) return

  if (!featureOverlay) {
    // Create features for position and accuracy
    positionFeature = new Feature()
    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: '#3399CC',
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2,
          }),
        }),
      })
    )

    accuracyFeature = new Feature()
    accuracyFeature.setStyle(
      new Style({
        fill: new Fill({
          color: 'rgba(51, 153, 204, 0.2)',
        }),
        stroke: new Stroke({
          color: '#3399CC',
          width: 2,
        }),
      })
    )

    // Create overlay layer
    featureOverlay = new VectorLayer({
      source: new VectorSource({
        features: [],
      }),
      zIndex: 1000,
    })

    map.addLayer(featureOverlay)
  }

  // Clear and re-add features
  featureOverlay.getSource()?.clear()
  accuracyFeature?.setGeometry(undefined)
  positionFeature?.setGeometry(undefined)

  if (accuracyFeature && positionFeature) {
    featureOverlay.getSource()?.addFeature(accuracyFeature)
    featureOverlay.getSource()?.addFeature(positionFeature)
  }
}

function clearFeatureOverlay() {
  featureOverlay?.getSource()?.clear()
}

onMounted(() => {
  map = useMap().getOlMap()
  useControl(Control, {
    ...props,
    ...{ target: controlElement },
  } as unknown as Options)
})

onUnmounted(() => {
  // Clean up
  if (geolocation) {
    geolocation.setTracking(false)
  }
  if (featureOverlay && map) {
    map.removeLayer(featureOverlay)
  }
})
</script>

<template>
  <div
    ref="controlElement"
    :class="[
      { 'tracker-on': isTracking, 'tracker-off': !isTracking },
      props.className,
      CLASS_UNSELECTABLE,
      CLASS_CONTROL,
    ]"
  >
    <button :title="t(props.tipLabel)" @click="handleCenterToLocation">
      {{ props.label }}
    </button>
  </div>
</template>

<style scoped>
.tracker-on button {
  background-color: var(--color-primary) !important;
  color: white !important;
}
</style>
