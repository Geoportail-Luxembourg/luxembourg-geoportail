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
      <div v-html="formattedLabel(feature.attributes.label)"></div>
    </template>
    
    <script>
    export default {
      computed: {
        formattedLabel() {
          return (label) => label.replace(/\n/g, '<br>');
        }
      }
    }
    </script>
  </InfoFeatureLayout>
</template>
