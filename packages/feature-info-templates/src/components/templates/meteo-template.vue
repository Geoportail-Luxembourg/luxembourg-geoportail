<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
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
      <h3>
        {{ feature.attributes.stationsname }} {{ feature.attributes.sid }}
      </h3>
      <iframe
        title="meteo widget"
        class="-ml-3.5"
        height="150"
        width="300"
        frameborder="0"
        :src="`${urls.meteoUrl}&lid=${feature.attributes.sid}`"
      >
      </iframe>
    </template>
  </InfoFeatureLayout>
</template>
