<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const { t } = useTranslation()

// TODO: app-pdsreport
</script>

<template>
  <h1 class="lux-poi-title">
    {{ t(layers.layerLabel) }}
  </h1>

  <div class="poi-feature">
    <!-- <app-pdsreport app-pagreport-staging="false"
    app-pdsreport-ids="ctrl.joinAttributes(layers.features, 'textstring', ',')"> -->
  </div>
</template>
