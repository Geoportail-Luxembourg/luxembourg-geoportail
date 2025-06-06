<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import ProfileFeatureInfo from '../profile-feature-info.vue'
import { getMymapsPath, getQRUrlForMyMaps } from '@/services/url.utils'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useTranslation()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4>{{ feature.attributes.sentier }}</h4>
      <a
        v-if="
          feature.attributes.image && feature.attributes.image.trim() !== ''
        "
        :href="getMymapsPath(feature.attributes.image as string)"
        target="_blank"
      >
        <img
          v-if="
            feature.attributes.thumbnail &&
            feature.attributes.thumbnail.trim() !== ''
          "
          :src="getMymapsPath(feature.attributes.thumbnail as string)" /></a
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
      <img
        :src="getQRUrlForMyMaps(feature.attributes.map_id as string)"
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
