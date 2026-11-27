<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { useLuxTranslation } from '../../i18n'
import {
  hasAttributes,
  isEmptyString,
  isLink,
  showAttributesByLang,
  sortedAttributeEntries,
} from './template-utilities'
import { injectLuxTplContext } from '../../context'
import { luxTplUrls } from '../../env'
import LuxFeatureProfile from '../../profile/feature-profile.vue'
import { vLuxHtml } from '../../sanitize-html'

defineProps<{
  layers: FeatureInfoJSON
}>()
const { t, i18next } = useLuxTranslation('tooltips')
const { geoportalUrl } = injectLuxTplContext()
const urls = luxTplUrls(geoportalUrl)
const DOWNLOAD_PDF_URL = urls.downloadPdfUrl
</script>
<template>
  <InfoFeatureLayout :layers="layers">
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
              <span v-lux-html="attributeEntry.value"></span>
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
            <span v-if="feature.attributes.has_sketch">
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
          <LuxFeatureProfile :feature="feature" />
        </div>
      </template>
      <div v-else>
        <span>{{ t('Aucune information disponible pour cette couche') }}</span>
      </div>
    </template>
  </InfoFeatureLayout>
</template>
