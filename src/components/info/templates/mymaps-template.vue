<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import { hasAttributes, hasValidFID } from './template-utilities'
import ProfileFeatureInfo from '@/components/info/profile-feature-info.vue'
import { getMymapsPath, getQRUrlForMyMaps } from '@/services/url.utils'

defineProps({
  layers: {
    type: Object as () => FeatureInfoJSON,
    required: true,
  },
})
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useTranslation()
const currentUrl = window.location.href
</script>
<template>
  <div class="flex flex-col">
    <div data-cy="mymapsTemplate">
      <h2 class="lux-poi-title" data-cy="mymapsTemplateTitle">
        {{ t(layers.layerLabel) }}
      </h2>
      <div
        v-for="feature in layers.features"
        :key="feature.id"
        class="lux-feature-info"
      >
        <h4 v-if="feature.attributes.sentier">
          {{ t(feature.attributes.sentier) }}
        </h4>

        <a
          v-if="feature.attributes.image && feature.attributes.thumbnail"
          :href="getMymapsPath(feature.attributes.image)"
          target="_blank"
        >
          <img :src="getMymapsPath(feature.attributes.thumbnail)"
        /></a>

        <div v-if="feature.attributes.sentier">
          <label>{{ t('sentier') }}</label>
          <span v-dompurify-html="feature.attributes.sentier"></span>
        </div>

        <div v-if="feature.attributes.name">
          <label>{{ t('name') }}: </label>
          <span v-dompurify-html="feature.attributes.name"></span>
        </div>

        <div v-if="feature.attributes.description">
          <label>{{ t('description') }}: </label>
          <span v-dompurify-html="feature.attributes.description"></span>
        </div>

        <div v-if="feature.attributes.length">
          <label>{{ t('length') }}: </label>
          <span v-dompurify-html="feature.attributes.length"> Km</span>
          <!-- TODO use formatter -->
        </div>

        <!-- Profile -->
        <div class="query-profile" v-if="layers.has_profile">
          <profile-feature-info :feature="feature" />
        </div>
        <div v-if="layers.has_profile" class="no-print">
          <button
            class="lux-feature-info-export"
            @click="$emit('export', { feature, format: 'kml' })"
          >
            {{ t('Exporter KMl') }}
          </button>
          <button
            class="lux-feature-info-export"
            @click="$emit('export', { feature, format: 'gpx' })"
          >
            {{ t('Exporter GPX') }}
          </button>
        </div>

        <div v-if="!hasAttributes(feature)" class="no-print">
          <span>{{
            t('Aucune information disponible pour cette couche')
          }}</span>
        </div>

        <br />
        <img
          :src="getQRUrlForMyMaps(feature.attributes.map_id)"
          alt="QR code"
        />

        <!-- Links section -->
        <div v-if="feature.attributes.map_id" class="no-print">
          <span
            ><a
              data-cy="mymapsTemplateLinkMap"
              :href="currentUrl + '&map_id=' + feature.attributes.map_id"
              target="_blank"
              >{{ t('Lien vers la carte') }}</a
            ></span
          >
        </div>
        <div v-if="hasValidFID(feature)" class="no-print">
          <span
            ><a
              data-cy="mymapsTemplateLink"
              :href="currentUrl + '&fid=' + feature.fid"
              target="_blank"
              >{{ t('Lien direct vers cet objet') }}</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
