<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
}>()
</script>

<template>
  <InfoFeatureLayout :layers="layers">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.station }} ({{ feature.attributes.icao }})</h3>
      <label>TAF:</label> <span>{{ feature.attributes.taf }}</span
      ><br />
      <label>Metar:</label> <span>{{ feature.attributes.metar }}</span>
    </template>
  </InfoFeatureLayout>
</template>
