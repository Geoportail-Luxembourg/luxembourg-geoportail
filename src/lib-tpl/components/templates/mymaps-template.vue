<script setup lang="ts">
import { useLuxTranslation } from '../../i18n'
import { FeatureInfoJSON, FeatureJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { getMymapsPath, getQRUrlForMyMaps } from './template-utilities'
import { useLuxTplContext } from '../../context'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useLuxTranslation('tooltips')
const { config, profileComponent } = useLuxTplContext()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.sentier }}</h4>
      <a
        v-if="
          feature.attributes.image && feature.attributes.image.trim() !== ''
        "
        :href="
          getMymapsPath(feature.attributes.image as string, config.v3ApiHost)
        "
        target="_blank"
      >
        <img
          v-if="
            feature.attributes.thumbnail &&
            feature.attributes.thumbnail.trim() !== ''
          "
          :src="
            getMymapsPath(
              feature.attributes.thumbnail as string,
              config.v3ApiHost
            )
          " /></a
      ><br />
      <span v-if="feature.attributes.sentier"
        ><span>{{ t('sentier') }}</span> : {{ feature.attributes.sentier }}<br
      /></span>
      <span v-if="feature.attributes.name"
        ><span>{{ t('Name') }}</span> : {{ feature.attributes.name }}<br
      /></span>
      <span v-if="feature.attributes.description"
        ><span>{{ t('Description') }}</span> :
        {{ feature.attributes.description }}<br
      /></span>
      <span v-if="feature.attributes.length"
        ><span>{{ t('Longeueur') }}</span> :
        {{ feature.attributes.length }} Km<br
      /></span>

      <component
        :is="profileComponent"
        v-if="profileComponent"
        :feature="feature"
        @export="
          (payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }) =>
            $emit('export', payload)
        "
      />
      <img
        :src="
          getQRUrlForMyMaps(feature.attributes.map_id as string, config.qrUrl)
        "
      /><br />
      <a
        class="fid-link no-print"
        :href="`?map_id=${feature.attributes.map_id}`"
        target="_blank"
        >{{ t('Lien vers la carte') }}</a
      >
      <br />
    </template>
  </InfoFeatureLayout>
</template>
