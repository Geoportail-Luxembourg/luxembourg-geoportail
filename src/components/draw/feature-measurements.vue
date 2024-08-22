<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawFeature } from '@/stores/draw.store.model'
import FeatureMeasurementsProfile from './feature-measurements-profile.vue'

const { t } = useTranslation()

const props = defineProps<{
  feature: DrawFeature
}>()

const featLenght = computed(() => props.feature.id + ' [TODO featLenght]') // TODO
const featArea = computed(() => props.feature.id + ' [TODO featArea]') // TODO
const featRayon = computed(() => props.feature.id + ' [TODO featRayon]') // TODO
const featElevation = computed(() => props.feature.id + ' [TODO featElevation]') // TODO
</script>

<template>
  <!-- Feature length, for LineString, Circle, Polygon -->
  <div>
    <span>{{ t('Length:') }}</span> <span>{{ featLenght }}</span>
  </div>

  <!-- Feature area, for Circle, Polygon -->
  <div>
    <span>{{ t('Area:') }}</span> <span>{{ featArea }}</span>
  </div>

  <!-- Feature radius, for Circle -->
  <div>
    <span>{{ t('Rayon:') }}</span> <span>{{ featRayon }}</span>
  </div>

  <!-- Feature elevation, for Point, LineString -->
  <div>
    <span>{{
      t('Elevation: \{\{ ctrl.featureElevation \}\}', {
        'ctrl.featureElevation': featElevation,
      })
    }}</span>
  </div>

  <!-- Feature elevation profile LineString -->
  <div>
    <FeatureMeasurementsProfile :feature="feature" />
  </div>
</template>
