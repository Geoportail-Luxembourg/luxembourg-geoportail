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
      <h3>
        {{ feature.attributes.stationsname }} {{ feature.attributes.sid }}
      </h3>
      <iframe
        title="meteo widget"
        class="-ml-3.5"
        height="150"
        width="300"
        frameborder="0"
        :src="`https://dlr-web-daten1.aspdienste.de/cgi-bin/sinfoam.pl?c=92&nid=01&lid=${feature.attributes.sid}`"
      >
      </iframe>
    </template>
  </InfoFeatureLayout>
</template>
