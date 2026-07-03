<script setup lang="ts">
import { FeatureInfoJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { useLuxTplContext } from '../../context'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useLuxTranslation('tooltips')
const { config } = useLuxTplContext()
const DOWNLOAD_SKETCH_URL = config.downloadSketchUrl
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
