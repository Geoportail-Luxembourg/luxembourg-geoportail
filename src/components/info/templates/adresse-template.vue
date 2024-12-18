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
      <h4>{{ feature.attributes.num_affaire }}</h4>
      {{ feature.attributes.numero }}, {{ feature.attributes.rue }}<br />
      L-{{ feature.attributes.code_postal }} {{ feature.attributes.localite
      }}<br />
    </template>
  </InfoFeatureLayout>
</template>
