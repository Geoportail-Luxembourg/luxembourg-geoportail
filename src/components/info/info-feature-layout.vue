<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import { hasValidFID } from './templates/template-utilities'

withDefaults(
  defineProps<{
    layers: FeatureInfoJSON
    currentUrl?: string
    getDirectLink?: (feature: FeatureJSON, currentUrl?: string) => string
  }>(),
  {
    getDirectLink: (feature, currentUrl) => `${currentUrl}&fid=${feature.fid}`,
  }
)

defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()

const { t } = useTranslation()
</script>

<template>
  <!-- Layer title -->
  <h1 class="lux-poi-title">
    {{ t(layers.layerLabel) }}
  </h1>

  <!-- Loop through all layer features -->
  <div
    v-for="feature in layers.features"
    :key="feature.id"
    class="lux-feature-info"
  >
    <!-- Slot content to be replaced by template -->
    <slot name="feature-content" :feature="feature">
      {{ feature.id }}
    </slot>

    <!-- Direct link to the feature -->
    <div v-if="hasValidFID(feature)">
      <a
        class="print:hidden"
        :href="getDirectLink(feature, currentUrl)"
        target="_blank"
      >
        {{ t('Lien direct vers cet objet') }}
      </a>
    </div>
  </div>
</template>
