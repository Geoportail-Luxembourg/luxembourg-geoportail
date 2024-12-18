<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { getTrustedUrl } from './template-utilities'
import InfoFeatureLayout from '../info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.Nom }}</h3>
      <iframe
        width="300"
        height="1500"
        frameborder="0"
        :src="
          getTrustedUrl(
            'http://geoportail.eau.etat.lu/pdf/112/' +
              feature.attributes.Nom +
              '.html'
          )
        "
      ></iframe>
    </template>
  </InfoFeatureLayout>
</template>
