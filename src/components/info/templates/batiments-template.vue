<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { useTranslation } from 'i18next-vue'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useTranslation()
</script>
<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <span>{{ t('Type') }}</span> :
      <span>{{ t('bat_' + feature.attributes.type) }}</span
      ><br />
    </template>
  </InfoFeatureLayout>
</template>
