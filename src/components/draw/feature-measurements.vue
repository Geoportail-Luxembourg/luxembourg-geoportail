<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawFeature } from '@/stores/draw.store.model'
import FeatureMeasurementsProfile from './feature-measurements-profile.vue'

const { t } = useTranslation()

const props = defineProps<{
  feature: DrawFeature
  isEditingFeature?: boolean
}>()
const featureType = props.feature.featureType
const featLength = computed(() => props.feature.id + ' [TODO featLenght]') // TODO update condition
const featArea = computed(() => props.feature.id + ' [TODO featArea]') // TODO
const featRadius = computed(() => props.feature.id + ' [TODO featRayon]') // TODO
const featElevation = computed(() => props.feature.id) // TODO

function onClickValidateRadius() {
  alert('TODO: validate /save radius')
}
</script>

<template>
  <div class="lux-drawing-item-measurements">
    <!-- Feature length, for LineString, Circle, Polygon -->
    <div
      data-cy="featItemLength"
      v-if="['drawnLine', 'drawnCircle', 'drawnPolygon'].includes(featureType)"
    >
      <span>{{ t('Length:') }}</span> <span>{{ featLength }}</span>
    </div>

    <!-- Feature area, for Circle, Polygon -->
    <div
      data-cy="featItemArea"
      v-if="['drawnPolygon', 'drawnCircle'].includes(featureType)"
    >
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
