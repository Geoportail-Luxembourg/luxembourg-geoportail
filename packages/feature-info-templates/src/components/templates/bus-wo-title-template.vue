<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { getTrustedUrlByLang } from './template-utilities'
import { injectLuxTplContext } from '../../context'
import { luxTplUrls } from '../../env'
defineProps<{
  layers: FeatureInfoJSON
}>()
const { config } = injectLuxTplContext()
const urls = luxTplUrls(config.geoportalUrl)
const BUS_WIDGET_URL = urls.busWidgetUrl
</script>
<template>
  <InfoFeatureLayout :layers="layers">
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
