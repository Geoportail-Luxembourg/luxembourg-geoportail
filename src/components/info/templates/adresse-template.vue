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
    <h4>{{ feature.attributes.num_affaire }}</h4>
    {{ feature.attributes.numero }}, {{ feature.attributes.rue }}<br />
    L-{{ feature.attributes.code_postal }} {{ feature.attributes.localite
    }}<br />
    <a
      class="fid-link no-print"
      :href="currentUrl + '&fid=' + feature.fid"
      target="_blank"
    >
      {{ t('Lien direct vers cet objet') }}</a
    ><br />
  </div>
</template>
