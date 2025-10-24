<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import FeaturesList from './features-list.vue'

const drawStore = useDrawStore()
const { drawnFeaturesExceptMyMaps: features } = storeToRefs(drawStore)
</script>

<template>
  <FeaturesList :features="features" />
</template>
