<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import {
  hasAttributes,
  hasValidFID,
  isEmptyString,
  isLink,
  sortedAttributeEntries,
} from './template-utilities'
import i18next from 'i18next'
import ProfileFeatureInfo from '@/components/info/profile-feature-info.vue'

defineProps({
  layers: {
    type: Object as () => FeatureInfoJSON,
    required: true,
  },
  currentUrl: {
    type: String,
    required: false,
  },
})
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useTranslation()
</script>
<template>
  <div class="flex flex-col">
    <div>
      <h1 class="lux-poi-title">
        {{ t(layers.layerLabel) }}
      </h1>
      <div
        v-for="feature in layers.features"
        :key="feature.id"
        class="lux-feature-info"
      >
        <h4 v-if="feature.attributes.label">
          {{ t(feature.attributes.label) }}
        </h4>
        <div data-cy="defaultTemplateAttributes" v-if="hasAttributes(feature)">
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
        </div>
        <div class="query-profile" v-if="layers.has_profile">
          <profile-feature-info :feature="feature" />
        </div>
        <div v-if="layers.has_profile">
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

        <div v-if="!hasAttributes(feature)">
          <span>{{
            t('Aucune information disponible pour cette couche')
          }}</span>
        </div>
        <div v-if="hasValidFID(feature)">
          <span
            ><a
              data-cy="defaultTemplateLink"
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
