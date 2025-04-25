<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import ProfileFeatureInfo from '../profile-feature-info.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const getQrCodeForMymapsUrl = function (mapId: string) {
  const qrServiceUrl = import.meta.env.VITE_QR_URL

  if (mapId !== undefined) {
    return qrServiceUrl + '?url=https://map.geoportail.lu?map_id=' + mapId
  }
  return ''
}
const getMymapsPath = function (resource: string) {
  const mymapsImageUrl = import.meta.env.VITE_MYMAPS_IMAGE_URL
  if (resource) {
    if (resource.startsWith('data:image')) {
      return resource
    }
    if (resource.startsWith('/') && mymapsImageUrl.endsWith('/')) {
      resource = '.' + resource
    }
    return mymapsImageUrl + resource
  }
  return ''
}
const { t } = useTranslation()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.sentier }}</h4>
      <a
        v-if="feature.attributes.image"
        :href="getMymapsPath(feature.attributes.image)"
        target="_blank"
      >
        <img
          v-if="feature.attributes.thumbnail"
          :href="getMymapsPath(feature.attributes.thumbnail)" /></a
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

      <!--div class="query-profile" v-show="feature.attributes.showProfile.active"-->
      <ProfileFeatureInfo
        :feature="feature"
        @export="payload => $emit('export', payload)"
      />
      <img :src="getQrCodeForMymapsUrl(feature.attributes.map_id)" /><br />
      <a
        class="fid-link no-print"
        href="?map_id=feature.attributes.map_id"
        target="_blank"
        >{{ t('Lien vers la carte') }}</a
      ><br />
    </template>
  </InfoFeatureLayout>
</template>
