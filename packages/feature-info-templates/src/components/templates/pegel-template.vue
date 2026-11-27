<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import { getTrustedUrl } from './template-utilities'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { injectLuxTplContext } from '../../context'
import { luxTplUrls } from '../../env'

defineProps<{
  layers: FeatureInfoJSON
}>()

const { config } = injectLuxTplContext()
const urls = luxTplUrls(config.geoportalUrl)
</script>

<template>
  <InfoFeatureLayout :layers="layers">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.Nom }}</h3>
      <iframe
        width="300"
        height="1500"
        frameborder="0"
        :src="getTrustedUrl(urls.pegelUrl + feature.attributes.Nom + '.html')"
      ></iframe>
    </template>
  </InfoFeatureLayout>
</template>
