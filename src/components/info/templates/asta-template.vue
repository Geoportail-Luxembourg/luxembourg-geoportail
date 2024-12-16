<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
defineProps({
  layers: {
    type: Object as () => FeatureInfoJSON,
    required: true,
  },
  currentUrl: {
    type: String,
    required: false,
  },
})
defineEmits<{
  (e: 'export'): void
}>()
const { t } = useTranslation()
</script>
<template>
  <h1 class="lux-poi-title">{{ t(layers.layerLabel) }}</h1>
  <div
    v-for="feature in layers.features"
    :key="feature.id"
    class="lux-feature-info"
  >
    <span>{{ t('Numero EFA') }}</span> : {{ feature.attributes.code_elem
    }}{{ feature.attributes.efa }}<br />
    <div v-if="feature.attributes.surface">
      <span>{{ t('Surface') }}</span> :
      {{ Number(feature.attributes.surface).toFixed(1) }} a<br />
    </div>
    <div v-if="feature.attributes.longueur">
      <span>{{ t('Longueur') }}</span> :
      <span v-format-measure:1.length="feature.attributes.longueur"></span>
      <br />
    </div>
    <a
      class="fid-link no-print"
      :href="currentUrl + '&fid=' + feature.fid"
      target="_blank"
    >
      {{ t('Lien direct vers cet objet') }}</a
    ><br />
  </div>
</template>
