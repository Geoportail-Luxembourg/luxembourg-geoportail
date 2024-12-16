<script setup lang="ts">
import { defineProps } from 'vue'
import {
  AttributeEntry,
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import {
  hasAttributes,
  isEmptyString,
  isLink,
  showAttributesByLang,
  hasValidFID,
  getTrustedUrl,
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

function isNoSolarNorWaterLink(label: string, attributeEntry: AttributeEntry) {
  return (
    !(
      label.startsWith('myenergy_solarkataster_luxemburg') ||
      label.startsWith('eau_new_Wasserstand')
    ) && isLink(attributeEntry.value)
  )
}

function isSolarLink(label: string, attributeEntry: AttributeEntry) {
  return (
    label.startsWith('myenergy_solarkataster_luxemburg') &&
    isLink(attributeEntry.value) &&
    attributeEntry.key === 'f_href'
  )
}

function isWaterLink(label: string, attributeEntry: AttributeEntry) {
  return (
    label.startsWith('eau_new_Wasserstand') &&
    isLink(attributeEntry.value) &&
    attributeEntry.key === 'f_Graph'
  )
}

function isAudioLink(attributeEntry: AttributeEntry) {
  return isLink(attributeEntry.value) && attributeEntry.key === 'f_AudioURL'
}
</script>
<template>
  <div class="flex flex-col">
    <div>
      <h1 class="lux-poi-title" data-cy="defaultTemplateTitle">
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
            <div
              v-if="
                !isEmptyString(attributeEntry.value) &&
                showAttributesByLang(
                  attributeEntry,
                  layers.layer,
                  i18next.language
                )
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
                v-if="isNoSolarNorWaterLink(layers.layerLabel, attributeEntry)"
                :href="attributeEntry.value"
                target="_blank"
                >{{ t(attributeEntry.key) }}</a
              >
              <a
                data-cy="defaultTemplateSolarLink"
                v-if="isSolarLink(layers.layerLabel, attributeEntry)"
                :href="attributeEntry.value"
                target="_blank"
              >
                <button class="lux-solarkataster-button">
                  <span>{{
                    t("Lien direct vers le calculateur d'efficacité économique")
                  }}</span>
                </button></a
              >
              <span v-if="isAudioLink(attributeEntry)">
                <audio controls autoplay style="width: 260px; height: 50px">
                  <source :src="attributeEntry.value" type="audio/wav" />
                </audio>
              </span>
              <iframe
                width="260px"
                height="560px"
                v-if="isWaterLink(layers.layerLabel, attributeEntry)"
                :src="getTrustedUrl(attributeEntry.value)"
                title="water level graph"
              ></iframe>
            </div>
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
