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
      <label>{{ feature.attributes.weather }}</label
      >&nbsp;<span>{{ feature.attributes.temperature }}°C</span>
    </template>
  </InfoFeatureLayout>
</template>
