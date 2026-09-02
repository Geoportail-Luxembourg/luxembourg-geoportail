<script setup lang="ts">
import type { FeatureInfoJSON, FeatureJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
import {
  hasAttributes,
  isEmptyString,
  isLink,
  sortedAttributeEntries,
} from './template-utilities'
import i18next from 'i18next'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { useLuxTplContext } from '../../context'
import { vLuxHtml } from '../../sanitize-html'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useLuxTranslation('tooltips')
const { profileComponent } = useLuxTplContext()
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
            layers.ordered
          )"
          :key="attributeEntry.key"
        >
          <span
            v-if="
              !isEmptyString(attributeEntry.value) &&
              !attributeEntry.key.startsWith('f_LC_class_name') &&
              !attributeEntry.key.startsWith('f_LABEL_')
            "
          >
            <label v-if="!isLink(attributeEntry.value)"
              >{{ t(attributeEntry.key) }} :
            </label>
            <span
              v-if="!isLink(attributeEntry.value)"
              v-lux-html="attributeEntry.value"
            ></span>
            <a
              v-if="isLink(attributeEntry.value)"
              :href="attributeEntry.value"
              target="_blank"
              >{{ t(attributeEntry.key) }}</a
            >
          </span>
          <span
            v-if="
              !isEmptyString(attributeEntry.value) &&
              (attributeEntry.key.startsWith('f_LC_class_name') ||
                attributeEntry.key.startsWith('f_LABEL_'))
            "
          >
            <label
              v-if="
                i18next.language == 'fr' &&
                (attributeEntry.key == 'f_LC_class_name_fr' ||
                  attributeEntry.key == 'f_LABEL_fr')
              "
              >{{ t('f_LC_class_name') }} :
            </label>
            <span
              v-if="
                i18next.language == 'fr' &&
                (attributeEntry.key == 'f_LC_class_name_fr' ||
                  attributeEntry.key == 'f_LABEL_fr')
              "
              v-lux-html="attributeEntry.value"
            ></span>
            <label
              v-if="
                (i18next.language == 'de' || i18next.language == 'lb') &&
                (attributeEntry.key == 'f_LC_class_name_de' ||
                  attributeEntry.key == 'f_LABEL_de')
              "
              >{{ t('f_LC_class_name') }} :
            </label>
            <span
              v-if="
                (i18next.language == 'de' || i18next.language == 'lb') &&
                (attributeEntry.key == 'f_LC_class_name_de' ||
                  attributeEntry.key == 'f_LABEL_de')
              "
              v-lux-html="attributeEntry.value"
            ></span>
            <label
              v-if="
                i18next.language == 'en' &&
                (attributeEntry.key == 'f_LC_class_name' ||
                  attributeEntry.key == 'f_LABEL_eng')
              "
              >{{ t('f_LC_class_name') }} :
            </label>
            <span
              v-if="
                i18next.language == 'en' &&
                (attributeEntry.key == 'f_LC_class_name' ||
                  attributeEntry.key == 'f_LABEL_eng')
              "
              v-lux-html="attributeEntry.value"
            ></span>
          </span>
        </div>
        <div v-if="layers.has_profile && profileComponent">
          <component
            :is="profileComponent"
            :feature="feature"
            @export="
              (payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }) =>
                $emit('export', payload)
            "
          />
        </div>
      </template>
      <div v-else>
        <span>{{ t('Aucune information disponible pour cette couche') }}</span>
      </div>
    </template>
  </InfoFeatureLayout>
</template>
