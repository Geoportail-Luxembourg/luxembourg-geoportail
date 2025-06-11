<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { useTranslation } from 'i18next-vue'
import { hasProperty } from './template-utilities'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useTranslation()
const { i18next } = useTranslation()
</script>
<style scoped>
h3,
.h3 {
  font-size: 28px;
}
</style>
<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h3
        v-if="i18next.language == 'de' && hasProperty('title_de', feature, 0)"
      >
        {{ feature.attributes.title_de }}
      </h3>
      <h3
        v-if="i18next.language == 'en' && hasProperty('title_en', feature, 0)"
      >
        {{ feature.attributes.title_en }}
      </h3>
      <h3
        v-if="i18next.language == 'lb' && hasProperty('title_nl', feature, 0)"
      >
        {{ feature.attributes.title_nl }}
      </h3>
      <h3
        v-if="i18next.language == 'fr' && hasProperty('title_fr', feature, 0)"
      >
        {{ feature.attributes.title_fr }}
      </h3>
      <h3 v-if="i18next.language == 'de' && hasProperty('nom_de', feature, 0)">
        {{ feature.attributes.nom_de }}
      </h3>
      <h3 v-if="i18next.language == 'fr' && hasProperty('nom_fr', feature, 0)">
        {{ feature.attributes.nom_fr }}
      </h3>
      <h3 v-if="i18next.language == 'en' && hasProperty('nom_en', feature, 0)">
        {{ feature.attributes.nom_en }}
      </h3>
      <h3 v-if="i18next.language == 'lb' && hasProperty('nom_lu', feature, 0)">
        {{ feature.attributes.nom_lu }}
      </h3>

      <span
        v-if="i18next.language == 'de' && hasProperty('descr_de', feature, 0)"
        >{{ feature.attributes.descr_de }}</span
      >
      <span
        v-if="i18next.language == 'fr' && hasProperty('descr_fr', feature, 0)"
        >{{ feature.attributes.descr_fr }}</span
      >
      <span
        v-if="i18next.language == 'en' && hasProperty('descr_en', feature, 0)"
        >{{ feature.attributes.descr_en }}</span
      >
      <span
        v-if="i18next.language == 'lb' && hasProperty('descr_nl', feature, 0)"
        >{{ feature.attributes.descr_nl }}</span
      >

      <span
        v-if="i18next.language != 'fr' && hasProperty('link_de', feature, 3)"
        ><a target="_blank" :href="feature.attributes.link_de as string">{{
          feature.attributes.link_de
        }}</a></span
      >
      <span
        v-if="i18next.language == 'fr' && hasProperty('link_fr', feature, 3)"
        ><a target="_blank" :href="feature.attributes.link_fr as string">{{
          feature.attributes.link_fr
        }}</a></span
      >
      <span v-if="hasProperty('Bild', feature, 3)">
        <img :src="feature.attributes.Bild as string" width="250"
      /></span>
      <div v-if="hasProperty('longueur sentier', feature, 0)">
        <span>{{ t('Longueur du sentier :') }}</span>
        <span>{{ feature.attributes['longueur sentier'] }}</span>
      </div>
    </template>
  </InfoFeatureLayout>
</template>
