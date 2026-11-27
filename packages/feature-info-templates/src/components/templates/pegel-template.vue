<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import { getTrustedUrl } from './template-utilities'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { injectLuxTplContext } from '../../context'

defineProps<{
  layers: FeatureInfoJSON
}>()

const { config } = injectLuxTplContext()
</script>

<template>
  <InfoFeatureLayout :layers="layers">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.Nom }}</h3>
      <iframe
        width="300"
        height="1500"
        frameborder="0"
        :src="
          getTrustedUrl(
            `${config.pegelUrl ?? ''}/` + feature.attributes.Nom + '.html'
          )
        "
      ></iframe>
    </template>
  </InfoFeatureLayout>
</template>
