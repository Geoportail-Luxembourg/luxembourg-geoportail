<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { useTranslation } from 'i18next-vue'
import {
  hasAttributes,
  isEmptyString,
  isLink,
  showAttributesByLang,
  sortedAttributeEntries,
} from './template-utilities'
import i18next from 'i18next'
import ProfileFeatureInfo from '../profile-feature-info.vue'
const DOWNLOAD_PDF_URL = import.meta.env.VITE_DOWNLOAD_PDF_URL

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useTranslation()
</script>
<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h4 v-if="feature.attributes.label">
        {{ t(feature.attributes.label) }}
      </h4>
      <template v-if="hasAttributes(feature)">
        <div
          v-for="attributeEntry in sortedAttributeEntries(
            feature.attributes,
            layers.ordered,
            ''
          )"
          :key="attributeEntry.key"
        >
          <span
            v-if="
              !['has_sketch', 'sketches'].includes(attributeEntry.key) &&
              !isEmptyString(attributeEntry.value) &&
              showAttributesByLang(
                attributeEntry,
                layers.layer,
                i18next.language
              )
            "
          >
            <div v-if="!isLink(attributeEntry.value)">
              <label>{{ t(attributeEntry.key) }} : </label>
              <span v-dompurify-html="attributeEntry.value"></span>
            </div>
            <div v-if="isLink(attributeEntry.value)">
              <label></label>
              <a :href="attributeEntry.value" target="_blank">{{
                t(attributeEntry.key)
              }}</a>
            </div>
          </span>
          <span v-else-if="['sketches'].includes(attributeEntry.key)">
            <label>{{ t('Attachment') }} : </label>
            <span v-if="feature.attributes.has_sketch" class="ng-hide">
              <ul>
                <li
                  v-for="sketch in feature.attributes.sketches"
                  :key="sketch.id"
                >
                  <a
                    class="no-print"
                    target="_blank"
                    download
                    :href="`${DOWNLOAD_PDF_URL}?fid=${feature.fid}&sketch_id=${sketch.id}`"
                    >{{ t(sketch.name) }}</a
                  >
                </li>
              </ul>
            </span>
          </span>
        </div>

        <div v-if="layers.has_profile">
          <ProfileFeatureInfo
            :feature="feature"
            @export="payload => $emit('export', payload)"
          />
        </div>
      </template>
      <div v-else>
        <span>{{ t('Aucune information disponible pour cette couche') }}</span>
      </div>
    </template>
  </InfoFeatureLayout>
</template>
