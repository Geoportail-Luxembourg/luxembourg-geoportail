<script setup lang="ts">
import { useLuxTranslation } from '../../i18n'
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
}>()

const { t } = useLuxTranslation('tooltips')
</script>

<template>
  <InfoFeatureLayout :layers="layers">
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
