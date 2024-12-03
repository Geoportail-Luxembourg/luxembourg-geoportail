<script setup lang="ts">
import { computed } from 'vue'
import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import { FeatureJSON } from '../../services/info/feature-info.model'
import GeoJSON from 'ol/format/GeoJSON'
import useMap from '@/composables/map/map.composable'
import { DrawnFeature } from '@/services/draw/drawn-feature'

const props = defineProps<{
  feature: FeatureJSON
}>()
const map = useMap().getOlMap()
const olFeature = computed(
  () =>
    new DrawnFeature(
      new GeoJSON().readFeature(props.feature, {
        dataProjection: 'EPSG:2169',
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
</template>
