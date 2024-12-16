<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import ProfileFeatureInfo from '@/components/info/profile-feature-info.vue'
import { hasAttributes } from './template-utilities'
import InfoFeatureLayout from '../info-feature-layout.vue'

const props = defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()

const DOWNLOAD_RESOURCE_URL = import.meta.env.VITE_DOWNLOAD_RESOURCE_URL
const { t } = useTranslation()

function getDirectLink(feature: FeatureJSON) {
  return `${props.currentUrl}&fid=${props.layers.layer}_${feature.attributes.id_qr}`
}
</script>

<template>
  <InfoFeatureLayout
    :layers="layers"
    :currentUrl="currentUrl"
    :getDirectLink="getDirectLink"
  >
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.sentier }}</h4>

      <template v-if="hasAttributes(feature)">
        <div>
          <label>{{ t('Longueur du parcours') }}</label> :
          <span>{{ feature.attributes.formatted_length }}</span>
          <div class="my-3" v-if="feature.attributes.link">
            <a
              class="lux-btn py-2"
              :href="`${DOWNLOAD_RESOURCE_URL}?fid=${layers.layer}_${feature.attributes.objectid}&attribute=link&id_attribute=objectid`"
              target="_blank"
            >
              {{ t('Télécharger la brochure') }}</a
            >
          </div>
        </div>

        <ProfileFeatureInfo
          :feature="feature"
          @export="payload => $emit('export', payload)"
        />
      </template>

      <div v-else>
        {{ t('Aucune information disponible pour cette couche') }}
      </div>
    </template>
  </InfoFeatureLayout>
</template>
