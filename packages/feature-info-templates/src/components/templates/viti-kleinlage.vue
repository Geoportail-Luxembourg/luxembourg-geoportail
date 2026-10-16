<script setup lang="ts">
import { useLuxTranslation } from '../../i18n'
import type { FeatureInfoJSON } from '../../models'
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
      <span>{{ t('Nom') }}</span> : {{ feature.attributes.kleinlage }}
    </template>
  </InfoFeatureLayout>
</template>
