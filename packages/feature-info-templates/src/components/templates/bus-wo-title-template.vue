<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { getTrustedUrlByLang } from './template-utilities'
import { useLuxTplContext } from '../../context'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { config } = useLuxTplContext()
const BUS_WIDGET_URL = config.busWidgetUrl
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
