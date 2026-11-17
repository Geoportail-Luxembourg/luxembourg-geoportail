<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
}>()
</script>

<template>
  <InfoFeatureLayout :layers="layers">
    <template #feature-content="{ feature }">
      {{ feature.attributes.text1 }}
    </template>
  </InfoFeatureLayout>
</template>
