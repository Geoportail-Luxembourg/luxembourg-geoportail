<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

defineEmits<{
  (e: 'export'): void
}>()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      {{ feature.attributes.text1 }}
    </template>
  </InfoFeatureLayout>
</template>
