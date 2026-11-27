<script setup lang="ts">
import { useLuxTranslation } from '../../i18n'
import type { FeatureInfoJSON, FeatureJSON } from '../../models'
import { hasAttributes } from './template-utilities'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { injectLuxTplContext } from '../../context'
import { luxTplUrls } from '../../env'
import LuxFeatureProfile from '../../profile/feature-profile.vue'

const props = defineProps<{
  layers: FeatureInfoJSON
}>()

const { config } = injectLuxTplContext()
const urls = luxTplUrls(config.geoportalUrl)
const DOWNLOAD_RESOURCE_URL = urls.downloadResourceUrl
const { t } = useLuxTranslation('tooltips')

function fid(feature: FeatureJSON) {
  return `${props.layers.layer}_${feature.attributes.id_qr}`
}
</script>

<template>
  <InfoFeatureLayout :layers="layers" :fid="fid">
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.sentier }}</h4>

      <template v-if="hasAttributes(feature)">
        <div>
          <label>{{ t('Longueur du parcours') }}</label> :
          <span>{{ feature.attributes.formatted_length }}</span>
          <div
            style="margin-top: 0.75rem; margin-bottom: 0.75rem"
            v-if="feature.attributes.link"
          >
            <a
              class="lux-btn"
              style="padding-top: 0.5rem; padding-bottom: 0.5rem"
              :href="`${DOWNLOAD_RESOURCE_URL}&fid=${layers.layer}_${feature.attributes.objectid}`"
              target="_blank"
            >
              {{ t('Télécharger la brochure') }}</a
            >
          </div>
        </div>

        <LuxFeatureProfile :feature="feature" />
      </template>

      <div v-else>
        {{ t('Aucune information disponible pour cette couche') }}
      </div>
    </template>
  </InfoFeatureLayout>
</template>
