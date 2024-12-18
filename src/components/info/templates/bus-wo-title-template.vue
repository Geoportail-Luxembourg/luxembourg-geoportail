<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { getTrustedUrlByLang } from './template-utilities'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const BUS_WIDGET_URL = import.meta.env.VITE_BUS_WIDGET_URL
</script>
<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.name }}</h3>
      <iframe
        class="-ml-3.5"
        title="bus widget"
        height="300"
        width="500"
        frameborder="0"
        :src="`${BUS_WIDGET_URL}${getTrustedUrlByLang(
          `?lang=fr&id=${feature.attributes.extid}`,
          `?lang=de&id=${feature.attributes.extid}`,
          `?lang=en&id=${feature.attributes.extid}`,
          `?lang=fr&id=${feature.attributes.extid}`
        )}`"
      ></iframe>
    </template>
  </InfoFeatureLayout>
</template>
