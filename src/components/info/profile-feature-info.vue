<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import { FeatureJSON } from '@/services/info/feature-info.model'
import GeoJSON from 'ol/format/GeoJSON'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import { DrawnFeature } from '@/services/draw/drawn-feature'

defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()

const props = defineProps<{
  feature: FeatureJSON
}>()
const { t } = useTranslation()
const map = useMap().getOlMap()
const olFeature = computed(
  () =>
    new DrawnFeature(
      new GeoJSON().readFeature(props.feature, {
        dataProjection: PROJECTION_LUX,
        featureProjection: map.getView().getProjection(),
      }) as DrawnFeature
    )
)

/**
 * This component is a wrapper to transform the feature info's FeatureJSON into a DrawnFeature to query profile data
 */
</script>

<template>
  <feature-elevation-profile :feature="olFeature" />

  <div>
    <button
      class="lux-feature-info-export"
      @click="$emit('export', { feature, format: 'kml' })"
    >
      {{ t('Exporter KMl') }}
    </button>
    <button
      class="lux-feature-info-export"
      @click="$emit('export', { feature, format: 'gpx' })"
    >
      {{ t('Exporter GPX') }}
    </button>
  </div>
</template>
