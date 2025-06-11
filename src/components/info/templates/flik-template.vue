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
      <span>{{ t('Numero FLIK') }} : </span> {{ feature.attributes.element
      }}{{ feature.attributes.flik }}<br />
      <span>{{ t('Surface') }} : </span>
      {{ feature.attributes.surface }} a<br />
      <span>{{ t('Perimetre') }} : </span>
      {{ feature.attributes.perimetre }} m<br />
    </template>
  </InfoFeatureLayout>
</template>
