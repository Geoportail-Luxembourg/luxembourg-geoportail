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
      <h4>{{ feature.attributes.num_affaire }}</h4>
      {{ feature.attributes.numero }}, {{ feature.attributes.rue }}<br />
      L-{{ feature.attributes.code_postal }} {{ feature.attributes.localite
      }}<br />
      <span> {{ t('Numero') }}</span> : {{ feature.attributes.num_affaire
      }}<br />
      <span> {{ t('Numero cadastral') }} </span> : {{ feature.attributes.label
      }}<br />
      <span>{{ t('Geometre') }}</span> : {{ feature.attributes.geometre }}<br />
      <span>{{ t('Region') }}</span> : {{ feature.attributes.region }}<br />
      <span>{{ t('Type') }}</span> : {{ t(feature.attributes.type as string)
      }}<br />
      <span>{{ t('Statut') }}</span> :
      {{ t(feature.attributes.statut as string) }}<br />
      <span>{{ t('Date') }}</span> : {{ feature.attributes.date }}<br />
    </template>
  </InfoFeatureLayout>
</template>
