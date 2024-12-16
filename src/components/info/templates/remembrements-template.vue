<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const { t } = useTranslation()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <span>{{ t('Nom') }}</span> : {{ feature.attributes.K_NAME }}<br />
      <span>{{ t('Statut') }}</span> :
      <span>{{ t('rem_status_' + feature.attributes.K_STATUS) }}</span
      ><br />
      <span>{{ t('Type') }}</span> :
      <span>{{ t('rem_typ_' + feature.attributes.K_TYP) }}</span>
    </template>
  </InfoFeatureLayout>
</template>
