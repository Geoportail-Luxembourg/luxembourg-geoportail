<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.station }} ({{ feature.attributes.icao }})</h3>
      <label>TAF:</label> <span>{{ feature.attributes.taf }}</span
      ><br />
      <label>Metar:</label> <span>{{ feature.attributes.metar }}</span>
    </template>
  </InfoFeatureLayout>
</template>
