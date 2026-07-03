<script setup lang="ts">
import { AttributeEntry, FeatureInfoJSON, FeatureJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
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
import { useLuxTplContext } from '../../context'

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
const { t } = useLuxTranslation('tooltips')
const { config, user, profileComponent } = useLuxTplContext()

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

function canAccessSolarEconomicCalculator() {
  const roleId = user.value?.roleId
  return (
    roleId !== undefined &&
    (config.solarEconomicAllowedRoleIds ?? []).includes(roleId)
  )
}
</script>
<template>
  <div class="lux-tpl-flex lux-tpl-flex-col">
    <div>
      <h2 class="lux-tpl-poi-title" data-cy="defaultTemplateTitle">
        {{ t(layers.layerLabel, { ns: 'layers' }) }}
      </h2>
      <div
        v-for="feature in layers.features"
        :key="feature.id"
        class="lux-tpl-feature-info"
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
                >{{ t(attributeEntry.key, { ns: 'tooltips' }) }} :
              </label>
              <span
                v-if="!isLink(attributeEntry.value)"
                v-dompurify-html="attributeEntry.value"
              ></span>
              <a
                v-if="isNoSolarNorWaterLink(layers.layerLabel, attributeEntry)"
                :href="attributeEntry.value"
                target="_blank"
                >{{ t(attributeEntry.key, { ns: 'tooltips' }) }}</a
              >
              <a
                data-cy="defaultTemplateSolarLink"
                v-if="isSolarLink(layers.layerLabel, attributeEntry)"
                :href="`https://solar.klima-agence.lu/?lng=${i18next.language !== 'lb' ? i18next.language : 'de'}`"
                target="_blank"
              >
                <button class="lux-tpl-solarkataster-button">
                  <span>{{ t('Simulateur solaire') }}</span>
                </button></a
              >
              <a
                data-cy="defaultTemplateSolarLink"
                v-if="
                  isSolarLink(layers.layerLabel, attributeEntry) &&
                  canAccessSolarEconomicCalculator()
                "
                :href="attributeEntry.value"
                target="_blank"
              >
                <button class="lux-tpl-solarkataster-button-old">
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
        <div v-if="!hasAttributes(feature)" class="no-print">
          <span>{{
            t('Aucune information disponible pour cette couche')
          }}</span>
        </div>
        <div v-if="hasValidFID(feature)" class="no-print">
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
