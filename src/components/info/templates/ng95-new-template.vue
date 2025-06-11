<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import InfoFeatureLayout from '../info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useTranslation()
const DOWNLOAD_SKETCH_URL = import.meta.env.VITE_DOWNLOAD_SKETCH_URL
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4>{{ t(feature.attributes.Nom as string) }}</h4>
      <span>{{ t('Elevation') }}</span> : {{ feature.attributes['nouv. cote']
      }}<br />
      <span>{{ t('Type') }}</span> : {{ feature.attributes['type rivet']
      }}<br />
      <span>{{ t('Croquis') }}</span> :
      <span v-if="feature.attributes.has_sketch">
        <a
          class="no-print"
          target="_blank"
          download
          :href="`${DOWNLOAD_SKETCH_URL}?id=${feature.attributes.OBJECTID}&type=new`"
        >
          {{ t('Obtenir le fichier sous format pdf') }}
        </a>
      </span>
      <span v-if="!feature.attributes.has_sketch">{{
        t('Croquis indisponible')
      }}</span>
    </template>
  </InfoFeatureLayout>
</template>
