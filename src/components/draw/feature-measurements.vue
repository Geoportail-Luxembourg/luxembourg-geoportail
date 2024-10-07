<script setup lang="ts">
import { computed, inject } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import FeatureMeasurementsProfile from './feature-measurements-profile.vue'
import {
  getFormattedArea,
  getFormattedLength,
} from '@/services/common/measurement.utils'
import { Polygon } from 'ol/geom'
import { Projection } from 'ol/proj'
import useMap from '@/composables/map/map.composable'

defineProps<{
  isEditingFeature?: boolean
}>()

const { t } = useTranslation()
const mapProjection: Projection = useMap().getOlMap().getView().getProjection()

const feature: DrawnFeature | undefined = inject('feature')
const featureType = feature?.featureType || ''
const featureGeometry = feature?.getGeometry()

const featLength = computed(() =>
  featureGeometry &&
  ['drawnLine', 'drawnCircle', 'drawnPolygon'].includes(featureType)
    ? getFormattedLength(featureGeometry, mapProjection)
    : undefined
)
const featArea = computed(() =>
  featureGeometry && ['drawnPolygon', 'drawnCircle'].includes(featureType)
    ? getFormattedArea(featureGeometry as Polygon)
    : undefined
)
// TODO: implement once circle is kept as a circle geometry,
// also adapt length and area calculation for circle then
const featRadius = feature?.id + ' [TODO featRayon]' // TODO
const featElevation = feature?.id // TODO

function onClickValidateRadius() {
  alert('TODO: validate /save radius')
}
</script>

<template>
  <div class="lux-drawing-item-measurements">
    <!-- Feature length, for LineString, Circle, Polygon -->
    <div data-cy="featItemLength" v-if="featLength">
      <span>{{ t('Length:') }}</span> <span>{{ featLength }}</span>
    </div>

    <!-- Feature area, for Circle, Polygon -->
    <div data-cy="featItemArea" v-if="featArea">
      <span>{{ t('Area:') }}</span> <span>{{ featArea }}</span>
    </div>

    <!-- Feature radius, for Circle -->
    <div
      data-cy="featItemRadius"
      v-if="featureType === 'drawnCircle'"
      class="flex items-center"
    >
      <span>{{ t('Rayon:') }}</span>
      <span v-if="!isEditingFeature">{{ featRadius }}</span>
      <!-- Radius is editable when edition mode is on -->
      <div v-else class="flex">
        <input class="form-control block" type="text" />
        <button class="lux-btn-primary" @click="onClickValidateRadius">
          {{ t('Valider') }}
        </button>
      </div>
    </div>

    <!-- Feature elevation, for Point -->
    <div data-cy="featItemElevation" v-if="featureType === 'drawnPoint'">
      <span>{{
        t('Elevation: \{\{ ctrl.featureElevation \}\}', {
          'ctrl.featureElevation': featElevation,
        })
      }}</span>
    </div>

    <!-- Feature elevation profile LineString -->
    <FeatureMeasurementsProfile
      v-if="featureType === 'drawnLine'"
      :feature="feature"
    />
  </div>
</template>
