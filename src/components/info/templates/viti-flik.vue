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
      <span>{{ t('Numero FLIK') }}</span> : {{ feature.attributes.CODE_ELEM
      }}{{ feature.attributes.FLIK }}<br />
      <span>{{ t('Commune cadastrale') }}</span> :
      {{ feature.attributes.CODE_COM }}<br />
      <span>{{ t('Section cadastrale') }}</span> :
      {{ feature.attributes.CODE_SECT }}<br />
      <span>{{ t('Surface') }}</span> : {{ feature.attributes.F_Area_2021 }} a
    </template>
  </InfoFeatureLayout>
</template>
