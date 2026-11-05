<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { vLuxHtml } from '../../sanitize-html'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const formatLabel = (label: string) => label?.replace(/\n/g, '<br>') ?? ''
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.num_affaire }}</h4>
      <div v-lux-html="formatLabel(feature.attributes.label)"></div>
    </template>
  </InfoFeatureLayout>
</template>
