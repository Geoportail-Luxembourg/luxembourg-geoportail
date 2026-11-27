<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { injectLuxTplContext } from '../../context'
import { luxTplUrls } from '../../env'

defineProps<{
  layers: FeatureInfoJSON
}>()
const { t } = useLuxTranslation('tooltips')
const { geoportalUrl } = injectLuxTplContext()
const urls = luxTplUrls(geoportalUrl)
const DOWNLOAD_SKETCH_NEW_URL = urls.downloadSketchNewUrl
</script>

<template>
  <InfoFeatureLayout :layers="layers">
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
          :href="`${DOWNLOAD_SKETCH_NEW_URL}&id=${feature.attributes.OBJECTID}`"
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
