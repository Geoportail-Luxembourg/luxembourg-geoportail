<script setup lang="ts">
import { defineProps } from 'vue'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import {
  hasAttributes,
  isEmpty,
  isLink,
  showAttributesByLang,
  hasValidFID,
  prefixKeys,
  getTrustedUrl,
} from './template-utilities'
import i18next from 'i18next'
import ProfileFeatureInfo from '@/components/info/profile-feature-info.vue'

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
    <div>
      <h1 class="lux-poi-title" data-cy="defaultTemplateTitle">
        {{ t(`${layers.layerLabel}`) }}
      </h1>
      <div
        v-for="feature in layers.features"
        :key="feature.id"
        class="lux-poi-feature"
      >
        <h4 v-if="feature.attributes.label">
          {{ t(`${feature.attributes.label}`) }}
        </h4>
        <div data-cy="defaultTemplateAttributes" v-if="hasAttributes(feature)">
          <div
            v-for="entry in prefixKeys(feature.attributes, 'f_').sort(
              (a, b) => {
                return layers.ordered ? 0 : a.key.localeCompare(b.key)
              }
            )"
            :key="entry.key"
          >
            <span
              v-if="
                !isEmpty(entry['value']) &&
                showAttributesByLang(entry, layers.layer, i18next.language)
              "
            >
              <label v-if="!isLink(entry['value'])"
                >{{ t(`${entry['key']}`) }} :
              </label>
              <span
                v-if="!isLink(entry['value'])"
                v-dompurify-html="entry['value']"
              ></span>
              <a
                v-if="
                  !(
                    layers.layerLabel.startsWith(
                      'myenergy_solarkataster_luxemburg'
                    ) || layers.layerLabel.startsWith('eau_new_Wasserstand')
                  ) && isLink(entry['value'])
                "
                :href="`${entry['value']}`"
                target="_blank"
                >{{ t(`${entry['key']}`) }}</a
              >
              <a
                data-cy="defaultTemplateSolarLink"
                v-if="
                  layers.layerLabel.startsWith(
                    'myenergy_solarkataster_luxemburg'
                  ) &&
                  isLink(entry['value']) &&
                  entry['key'] == 'f_href'
                "
                :href="`${entry['value']}`"
                target="_blank"
              >
                <button class="lux-solarkataster-button">
                  <span>{{
                    t("Lien direct vers le calculateur d'efficacité économique")
                  }}</span>
                </button></a
              >
              <span
                v-if="isLink(entry['value']) && entry['key'] == 'f_AudioURL'"
              >
                <audio controls autoplay style="width: 260px; height: 50px">
                  <source :src="`${entry['value']}`" type="audio/wav" />
                </audio>
              </span>
              <iframe
                width="260px"
                height="560px"
                v-if="
                  layers.layerLabel.startsWith('eau_new_Wasserstand') &&
                  isLink(entry['value']) &&
                  entry['key'] == 'f_Graph'
                "
                :src="`${getTrustedUrl(entry['value'])}`"
                title="water level graph"
              ></iframe>
            </span>
          </div>
        </div>
        <div class="query-profile" v-if="layers.has_profile">
          <profile-feature-info :feature="feature" />
        </div>
        <div v-if="layers.has_profile">
          <a
            class="lux-btn"
            @click="$emit('export', { feature, format: 'kml' })"
            >{{ t('Exporter KMl') }}</a
          >
          &nbsp;<a
            class="lux-btn"
            @click="$emit('export', { feature, format: 'gpx' })"
            >{{ t('Exporter GPX') }}</a
          >
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
              :href="`${currentUrl}&fid=${feature.fid}`"
              target="_blank"
              >{{ t('Lien direct vers cet objet') }}</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
