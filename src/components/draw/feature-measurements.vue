<script setup lang="ts">
import { computed, inject, ref, watchEffect } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import FeatureMeasurementsProfile from './feature-measurements-profile.vue'
import {
  getArea,
  getCircleArea,
  getCircleLength,
  getLength,
} from '@/services/common/measurement.utils'
import { Circle, Geometry, Point, Polygon } from 'ol/geom'
import { Projection } from 'ol/proj'
import useMap from '@/composables/map/map.composable'
import {
  getDebouncedElevation,
  getElevation,
} from './feature-measurements-helper'
import useEdit from '@/composables/draw/edit.composable'

defineProps<{
  isEditingFeature?: boolean
}>()

const { t } = useTranslation()
const mapProjection: Projection = useMap().getOlMap().getView().getProjection()

const feature = ref<DrawnFeature | undefined>(inject('feature'))
const featureType = ref<string>(feature.value?.featureType || '')
const featureGeometry = ref<Geometry | undefined>(feature.value?.getGeometry())

const featLength = computed(() => {
  if (featureGeometry.value) {
    if (['drawnLine', 'drawnPolygon'].includes(featureType.value)) {
      return getLength(featureGeometry.value as Geometry, mapProjection)
    } else if (featureType.value === 'drawnCircle') {
      return getCircleLength(featureGeometry.value as Circle)
    } else {
      return undefined
    }
  }
  return undefined
})
const featArea = computed(() => {
  if (featureGeometry.value) {
    if (featureType.value === 'drawnPolygon') {
      return getArea(featureGeometry.value as Polygon)
    } else if (featureType.value === 'drawnCircle') {
      return getCircleArea(featureGeometry.value as Circle)
    } else {
      return undefined
    }
  }
  return undefined
})
const featRadius = computed(() =>
  featureGeometry.value && featureType.value === 'drawnCircle'
    ? (featureGeometry.value as Circle).getRadius()
    : // ? getCircleRadius(featureGeometry.value as Circle, mapProjection)
      undefined
)
const inputRadius = ref<string>(featRadius.value?.toString() || '')

const featElevation = ref<number | undefined>()

watchEffect(async () => {
  const coordinates = (featureGeometry.value as Point).getCoordinates()
  if (featureGeometry.value && featureType.value === 'drawnPoint') {
    if (!featElevation.value) {
      featElevation.value = await getElevation(coordinates)
    } else {
      featElevation.value = await getDebouncedElevation(coordinates)
    }
  } else {
    featElevation.value = undefined
  }
})

watchEffect(() => {
  inputRadius.value =
    featureType.value === 'drawnCircle'
      ? (featureGeometry.value as Circle).getRadius().toFixed(2)
      : ''
  // inputRadius.value = getCircleRadius(
  //   featureGeometry.value as Circle,
  //   mapProjection
  // )
})

function onClickValidateRadius(radius: string) {
  if (feature.value) {
    useEdit().setRadius(feature.value as DrawnFeature, Number(radius))
  }
}
</script>

<template>
  <div class="lux-drawing-item-measurements">
    <!-- Feature length, for LineString, Circle, Polygon -->
    <div data-cy="featItemLength" v-if="featLength">
      <span>{{ t('Length:') }}</span> <span v-format-length="featLength"></span>
    </div>

    <!-- Feature area, for Circle, Polygon -->
    <div data-cy="featItemArea" v-if="featArea">
      <span>{{ t('Area:') }}</span> <span v-format-area="featArea"></span>
    </div>

    <!-- Feature radius, for Circle -->
    <div
      data-cy="featItemRadius"
      v-if="featureType === 'drawnCircle'"
      class="flex items-center"
    >
      <span>{{ t('Rayon:') }} </span>
      <span v-if="!isEditingFeature" v-format-length="featRadius"></span>
      <!-- Radius is editable when edition mode is on -->
      <div v-else class="flex">
        <input
          class="form-control block"
          type="text"
          v-model="inputRadius"
          @keyup.enter="onClickValidateRadius(inputRadius)"
        />
        <button
          class="lux-btn-primary"
          @click="onClickValidateRadius(inputRadius)"
        >
          {{ t('Valider') }}
        </button>
      </div>
    </div>

    <!-- Feature elevation, for Point -->
    <div v-if="featureType === 'drawnPoint'">
      <span>{{ t('Elevation') }}: </span>
      <span data-cy="featItemElevation" v-format-length="featElevation"></span>
    </div>

    <!-- Feature elevation profile LineString -->
    <FeatureMeasurementsProfile
      v-if="featureType === 'drawnLine'"
      :feature="feature"
    />
  </div>
</template>
