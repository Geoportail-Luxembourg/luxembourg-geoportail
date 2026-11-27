<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { useLuxTranslation } from '../../i18n'
defineProps<{
  layers: FeatureInfoJSON
}>()
const { t } = useLuxTranslation('tooltips')
</script>
<template>
  <InfoFeatureLayout :layers="layers">
    <template #feature-content="{ feature }">
      <span>{{ t('Type') }}</span> :
      <span>{{ t('bat_' + feature.attributes.type) }}</span
      ><br />
    </template>
  </InfoFeatureLayout>
</template>
