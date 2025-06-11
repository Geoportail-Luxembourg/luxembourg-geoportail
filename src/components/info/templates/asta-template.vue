<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
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
    </template>
  </InfoFeatureLayout>
</template>
