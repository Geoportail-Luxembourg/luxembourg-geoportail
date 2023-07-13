<script setup lang="ts">
import { ref, onMounted, watch, Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import Control from 'ol/control/Control'
import Geolocation from 'ol/Geolocation'

import useControl from '@/composables/control/control.composable'
import { useAppStore } from '@/stores/app.store'
import useMap from '@/composables/map/map.composable'

const DEFAULT_TRACKING_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  maximumAge: 60000,
  timeout: 7000
}

const { t } = useTranslation()
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
const controlElement: Ref<HTMLElement | null> = ref(null)
const geolocation: Ref<Geolocation | undefined> = ref()
const { trackingActive } = storeToRefs(useAppStore())
const { olMap } = useMap()

watch([trackingActive, olMap], ([active, olMap]) => {
  if (!olMap || !geolocation.value) {
    return
  }

  if(active) {
    geolocation.value = new Geolocation({
      projection: olMap.getView().getProjection(),
      trackingOptions: DEFAULT_TRACKING_OPTIONS
    })

    centerToLocation()
  } else {
    clearFeatureOverlay()
    geolocation.value.setTracking(false)
  }
})

function isNotHttps() {
  return location.protocol !== 'https:'
}

function centerToLocation() {
  if (isNotHttps()) {
    // showRedirect()
  }
}

function clearFeatureOverlay() {

}

function handleCenterToLocation() {
  // TODO:
  // if (this.window_.location.protocol !== 'https:') {
  //   this.scope_['mainCtrl']['showRedirect'] = true;
  //   return
  // }
  // if (this.geolocation_ === null) {
  //   this.initGeoLocation_();
  // }
  // if (!this.geolocation_.getTracking()) {
  //   this.initFeatureOverlay_();
  //   this.getMap().getView().setZoom(17);
  //   this.geolocation_.setTracking(true);
  // } else {
  //   this.clearFeatureOverlay_();
  //   this.geolocation_.setTracking(false);
  // }
}

// function initGeoLocation_() {
//   // this.geolocation_ = new olGeolocation({
//   //   projection: this.getMap().getView().getProjection(),
//   //   trackingOptions: /** @type {GeolocationPositionOptions} */ ({
//   //     enableHighAccuracy: true,
//   //     maximumAge: 60000,
//   //     timeout: 7000
//   //   })
//   // });
//   // listen(this.geolocation_,
//   //     getChangeEventType(olGeolocationProperty.TRACKING),
//   //     /**
//   //      * @param {ol.Object.Event} e Object event.
//   //      */
//   //     function(e) {
//   //       if (this.geolocation_.getTracking()) {
//   //         this.element.classList.remove('tracker-off');
//   //         this.element.classList.add('tracker-on');
//   //       } else {
//   //         this.element.classList.remove('tracker-on');
//   //         this.element.classList.add('tracker-off');
//   //       }
//   //     }, this);
//   // listen(this.geolocation_,
//   //     getChangeEventType(olGeolocationProperty.POSITION),
//   //     /**
//   //      * @param {ol.Object.Event} e Object event.
//   //      */
//   //     function(e) {
//   //       var position = /** @type {ol.Coordinate} */
//   //           (this.geolocation_.getPosition());
//   //       this.positionFeature_.setGeometry(new olGeomPoint(position));
//   //       this.getMap().getView().setCenter(position);
//   //     }, this);
//   // listen(this.geolocation_,
//   //     getChangeEventType(olGeolocationProperty.ACCURACY_GEOMETRY),
//   //     /**
//   //      * @param {ol.Object.Event} e Object event.
//   //      */
//   //     function(e) {
//   //       this.accuracyFeature_.setGeometry(
//   //           this.geolocation_.getAccuracyGeometry());
//   //     }, this);
//   // listen(this.geolocation_,
//   //     'error',
//   //     function(e) {
//   //       this.featureOverlay_.clear();
//   //       if (e.message && e.message.length > 0) {
//   //         var msg = this.gettextCatalog_.getString(
//   //             'Erreur lors de l\'acquisition de la position :');
//   //         msg = msg + e.message;
//   //         this.notify_(msg, appNotifyNotificationType.ERROR);
//   //       }
//   //     }.bind(this));
// }

function initFeatureOverlay_() {
  this.featureOverlay_.clear()
  this.accuracyFeature_.setGeometry(null)
  this.positionFeature_.setGeometry(null)
  this.featureOverlay_.addFeature(this.accuracyFeature_)
  this.featureOverlay_.addFeature(this.positionFeature_)
}

onMounted(() =>
  useControl(Control, { ...props, ...{ target: controlElement } })
)
</script>

<template>
  <div
    ref="controlElement"
    :class="`tracker-off ${props.className} ${CLASS_UNSELECTABLE} ${CLASS_CONTROL}`"
  >
    <button :title="t(props.tipLabel)" @click="handleCenterToLocation">
      {{ props.label }}
    </button>
  </div>
</template>
