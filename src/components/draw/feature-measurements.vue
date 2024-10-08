<script setup lang="ts">
import { computed, inject, ref, watchEffect } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import FeatureMeasurementsProfile from './feature-measurements-profile.vue'
import {
  getFormattedArea,
  getFormattedLength,
} from '@/services/common/measurement.utils'
import { Geometry, Point, Polygon } from 'ol/geom'
import { Projection } from 'ol/proj'
import useMap from '@/composables/map/map.composable'
import {
  getDebouncedFormattedElevation,
  getFormattedElevation,
} from './feature-measurements-helper'

defineProps<{
  isEditingFeature?: boolean
}>()

const { t } = useTranslation()
const mapProjection: Projection = useMap().getOlMap().getView().getProjection()

const feature = ref<DrawnFeature | undefined>(inject('feature'))
const featureType = ref<string>(feature.value?.featureType || '')
const featureGeometry = ref<Geometry | undefined>(feature.value?.getGeometry())

const featLength = computed(() =>
  featureGeometry.value &&
  ['drawnLine', 'drawnCircle', 'drawnPolygon'].includes(featureType.value)
    ? getFormattedLength(featureGeometry.value as Geometry, mapProjection)
    : undefined
)
const featArea = computed(() =>
  featureGeometry.value &&
  ['drawnPolygon', 'drawnCircle'].includes(featureType.value)
    ? getFormattedArea(featureGeometry.value as Polygon)
    : undefined
)
// TODO: implement once circle is kept as a circle geometry,
// also adapt length and area calculation for circle then
const featRadius = feature.value?.id + ' [TODO featRayon]' // TODO

const featElevation = ref<string | undefined>()

watchEffect(async () => {
  const coordinates = (featureGeometry.value as Point).getCoordinates()
  if (featureGeometry.value && featureType.value === 'drawnPoint') {
    if (!featElevation.value) {
      featElevation.value = await getFormattedElevation(coordinates)
    } else {
      featElevation.value = await getDebouncedFormattedElevation(coordinates)
    }
  } else {
    featElevation.value = undefined
  }
})

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
    <div data-cy="featItemElevation" v-if="featElevation">
      <span>{{
        t('Elevation: \{\{ ctrl.featureElevation \}\}', {
          'ctrl.featureElevation': featElevation,
          interpolation: { escapeValue: false },
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
