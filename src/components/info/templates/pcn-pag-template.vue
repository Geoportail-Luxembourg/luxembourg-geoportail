<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { joinAttributes } from './template-utilities'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const DOWNLOAD_PAGREPORT_URL = import.meta.env.VITE_DOWNLOAD_PAGREPORT_URL
const { t } = useTranslation()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #layer-content>
      <a
        v-if="layers.features.length"
        class="lux-btn"
        download
        :href="`${DOWNLOAD_PAGREPORT_URL}/${joinAttributes(
          layers.features,
          'OBJECTID',
          ','
        )}.pdf`"
        target="_blank"
        >{{ t('Generer un rapport pour toutes les selections') }}</a
      >
      <span v-else>{{
        t('Aucune information disponible pour cette couche')
      }}</span>
    </template>

    <template #feature-content="{ feature }">
      <span>{{ t('Identifiant') }}</span> : {{ feature.attributes.OBJECTID
      }}<br />
      <a
        class="lux-btn"
        download
        :href="`${DOWNLOAD_PAGREPORT_URL}/${feature.attributes.OBJECTID}.pdf`"
        target="_blank"
        >{{ t('Generer Rapport (peut prendre 30 sec)') }}</a
      >
    </template>
  </InfoFeatureLayout>
</template>
