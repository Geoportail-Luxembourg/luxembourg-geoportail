<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
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
      <h4>{{ feature.attributes.num_affaire }}</h4>
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
