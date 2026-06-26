<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const { t } = useTranslation('tooltips')
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h2 class="lux-tpl-urplang-title">
        {{ feature.attributes.nom_commune }} {{ feature.attributes.section }}
        {{ feature.attributes.feuille }}
      </h2>

      <template v-if="feature.attributes.thumb">
        <a :href="feature.attributes.path" target="_blank">
          <img :src="feature.attributes.thumb" width="250" />
        </a>
        <span>{{ t("Cliquez dans l'image pour agrandir") }}</span>
      </template>
    </template>
  </InfoFeatureLayout>
</template>
