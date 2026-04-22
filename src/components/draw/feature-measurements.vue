<script setup lang="ts">
import { computed, inject, ref, watchEffect } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import {
  getArea,
  getCircleArea,
  getCircleLength,
  getCircleRadius,
  getLength,
} from '@/services/common/measurement.utils'
import { Circle, Geometry, Point, Polygon } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import useMap from '@/composables/map/map.composable'
import {
  getDebouncedElevation,
  getElevation,
} from './feature-measurements-helper'
import useDrawUtils from '@/composables/draw/draw-utils.composable'

const props = withDefaults(
  defineProps<{
    isEditingFeature?: boolean
  }>(),
  {
    isEditingFeature: false,
  }
)

const { t } = useTranslation()
const map = useMap().getOlMap()
const mapProjection = map.getView().getProjection()
const { updateCircleRadius } = useDrawUtils()

const feature = ref<DrawnFeature | undefined>(
  inject('feature') as DrawnFeature | undefined
)
const featureType = ref<string>(feature.value?.featureType || '')
const featureGeometry = computed(() => {
  // If editing, try to get geometry from the edit layer clone for real-time updates
  if (props.isEditingFeature && feature.value) {
    const layers = map.getLayers().getArray()
    const editLayer = layers.find(layer => {
      const zIndex = (layer as VectorLayer).getZIndex()
      return (
        layer.get('cyLayerType') === 'interactionDrawLayer' &&
        zIndex &&
        zIndex > 1000 &&
        ((layer as VectorLayer).getSource() as any)
          ?.getFeatures()
          .some((f: any) => f.getId() === feature.value!.id)
      )
    }) as VectorLayer | undefined
    if (editLayer) {
      const editSource = editLayer.getSource()
      if (editSource) {
        const editFeatures = editSource.getFeatures()
        const editFeature = editFeatures.find(
          f => f.getId() === feature.value!.id
        )
        if (editFeature) {
          return editFeature.getGeometry()
        }
      }
    }
  }
  // Otherwise use the original feature geometry
  return feature.value?.getGeometry()
})

const featLength = computed(() => {
  if (featureGeometry.value) {
    if (['drawnLine', 'drawnPolygon'].includes(featureType.value)) {
      return getLength(featureGeometry.value as Geometry, mapProjection)
    } else if (featureType.value === 'drawnCircle') {
      return getCircleLength(featureGeometry.value as Circle, mapProjection)
    }
  }
  return undefined
})
const featArea = computed(() => {
  if (featureGeometry.value) {
    if (featureType.value === 'drawnPolygon') {
      return getArea(featureGeometry.value as Polygon, mapProjection)
    } else if (featureType.value === 'drawnCircle') {
      return getCircleArea(featureGeometry.value as Circle, mapProjection)
    }
  }
  return undefined
})
const featRadius = computed(() =>
  featureGeometry.value && featureType.value === 'drawnCircle'
    ? getCircleRadius(featureGeometry.value as Circle, mapProjection)
    : undefined
)
const inputRadius = ref<number>(featRadius.value || 0)
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
      ? parseFloat(
          getCircleRadius(
            featureGeometry.value as Circle,
            mapProjection
          ).toFixed(2)
        )
      : 0
})

function onClickValidateRadius(radius: number) {
  if (feature.value) {
    updateCircleRadius(feature.value as DrawnFeature, radius)
  }
}
</script>

<template>
  <div class="lux-drawing-item-measurements">
    <!-- Migration mymaps thumbnail (Angular -> Vue) -->
    <a
      v-if="feature?.get('thumbnail')"
      :href="feature.get('image')"
      target="_blank"
    >
      <img
        class="mymaps-thumbnail"
        :src="feature.get('thumbnail')"
        alt="thumbnail"
      />
    </a>
    <!-- Feature length, for LineString, Circle, Polygon -->
    <div data-cy="featItemLength" v-if="featLength">
      <span>{{ t('Length:') }}&nbsp;</span>
      <span v-format-measure.length="featLength"></span>
    </div>

    <!-- Feature area, for Circle, Polygon -->
    <div data-cy="featItemArea" v-if="featArea">
      <span>{{ t('Area:') }}&nbsp;</span>
      <span v-format-measure.area="featArea"></span>
    </div>

    <!-- Feature radius, for Circle -->
    <div
      data-cy="featItemRadius"
      v-if="featureType === 'drawnCircle'"
      class="flex items-center"
    >
      <span>{{ t('Rayon:') }}&nbsp;</span>
      <span
        v-if="!isEditingFeature"
        v-format-measure.length="featRadius"
      ></span>
      <!-- Radius is editable when edition mode is on -->
      <div v-else class="flex">
        <input
          data-cy="featItemInputRadius"
          class="form-control block bg-secondary border !border-gray-300"
          type="number"
          v-model.number="inputRadius"
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
      <span>{{ t('Elevation') }}:&nbsp;</span>
      <span
        data-cy="featItemElevation"
        v-format-measure:2.elevation="featElevation"
      ></span>
    </div>

    <!-- Feature elevation profile LineString -->
    <feature-elevation-profile
      class="mb-2"
      v-if="featureType === 'drawnLine'"
      :feature="<DrawnFeature>feature"
    />
  </div>
</template>
