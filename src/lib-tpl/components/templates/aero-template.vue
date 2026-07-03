<script setup lang="ts">
import { useLuxTranslation } from '../../i18n'
import { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useLuxTranslation('tooltips')
</script>
<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
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
    </template>
  </InfoFeatureLayout>
</template>
