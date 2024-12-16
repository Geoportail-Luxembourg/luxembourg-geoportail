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
    <h3>{{ feature.attributes.name }}</h3>
    <a :href="feature.attributes.path as string" target="_blank">
      <img
        v-if="feature.attributes.thumbnail_path"
        :src="feature.attributes.thumbnail_path as string"
        alt="thumbnail"
        width="250"
      />
    </a>
    <span class="no-print">{{ t("Cliquez dans l'image pour agrandir") }}</span
    ><br />
    <a
      class="fid-link no-print"
      :href="currentUrl + '&fid=' + feature.fid"
      target="_blank"
    >
      {{ t('Lien direct vers cet objet') }}</a
    ><br />
  </div>
</template>
