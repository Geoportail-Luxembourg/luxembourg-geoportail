<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDrawStore } from '@/stores/draw.store'
import FeaturesList from './features-list.vue'

const drawStore = useDrawStore()
const { drawnFeaturesExceptMyMaps: features } = storeToRefs(drawStore)
</script>

<template>
  <FeaturesList :features="features" />
</template>
