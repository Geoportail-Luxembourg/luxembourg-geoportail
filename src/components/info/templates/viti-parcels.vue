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
      <span>{{ t('Numero') }}</span> : V{{ feature.attributes.Weinbergsn
      }}<br />
      <span>{{ t('Commune') }}</span> : {{ feature.attributes.CODE_COM }}<br />
      <span>{{ t('Section') }}</span> : {{ feature.attributes.CODE_SECT }}<br />
    </template>
  </InfoFeatureLayout>
</template>
