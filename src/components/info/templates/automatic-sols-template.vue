<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import {
  hasAttributes,
  isEmptyString,
  isLink,
  sortedAttributeEntries,
} from './template-utilities'
import i18next from 'i18next'
import ProfileFeatureInfo from '@/components/info/profile-feature-info.vue'
import InfoFeatureLayout from '../info-feature-layout.vue'

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
              v-dompurify-html="attributeEntry.value"
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
              >{{ t(attributeEntry.key) }} :
            </label>
            <span
              v-if="
                i18next.language == 'fr' &&
                (attributeEntry.key == 'f_LC_class_name_fr' ||
                  attributeEntry.key == 'f_LABEL_fr')
              "
              v-dompurify-html="attributeEntry.value"
            ></span>
            <label
              v-if="
                (i18next.language == 'de' || i18next.language == 'lb') &&
                (attributeEntry.key == 'f_LC_class_name_de' ||
                  attributeEntry.key == 'f_LABEL_de')
              "
              >{{ t(attributeEntry.key) }} :
            </label>
            <span
              v-if="
                (i18next.language == 'de' || i18next.language == 'lb') &&
                (attributeEntry.key == 'f_LC_class_name_de' ||
                  attributeEntry.key == 'f_LABEL_de')
              "
              v-dompurify-html="attributeEntry.value"
            ></span>
            <label
              v-if="
                i18next.language == 'en' &&
                (attributeEntry.key == 'f_LC_class_name' ||
                  attributeEntry.key == 'f_LABEL_eng')
              "
              >{{ t(attributeEntry.key) }} :
            </label>
            <span
              v-if="
                i18next.language == 'en' &&
                (attributeEntry.key == 'f_LC_class_name' ||
                  attributeEntry.key == 'f_LABEL_eng')
              "
              v-dompurify-html="attributeEntry.value"
            ></span>
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
