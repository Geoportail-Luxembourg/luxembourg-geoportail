<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { computed } from 'vue'

const props = defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const formattedLabel = computed(() => (label: string) => {
  return label.replace(/\n/g, '<br>')
})
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.num_affaire }}</h4>
      <div v-html="formattedLabel(feature.attributes.label)"></div>
    </template>
  </InfoFeatureLayout>
</template>
