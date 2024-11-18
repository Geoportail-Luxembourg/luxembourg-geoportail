<script setup lang="ts">
import { defineProps } from 'vue'
import { FeatureInfo } from '../feature-info.model'
import { useTranslation } from 'i18next-vue'
import {
  hasAttributes,
  isEmpty,
  isLink,
  showAttributesByLang,
  hasValidFID,
  prefixKeys,
} from './template-utilities'
import i18next from 'i18next'
defineProps({
  layers: {
    type: Object as () => FeatureInfo,
    required: true,
  },
})
const { t } = useTranslation()
</script>
<template>
  <div class="flex flex-col">
    <div>
      <h1 class="lux-poi-title">{{ t(`${layers.layerLabel}`) }}</h1>
      <div
        v-for="feature in layers.features"
        :key="feature.id"
        class="lux-poi-feature"
      >
        <h4 v-if="feature.attributes.label">
          {{ t(`${feature.attributes.label}`) }}
        </h4>
        <div v-if="hasAttributes(feature)">
          <div
            v-for="entry in prefixKeys(feature.attributes, 'f_')"
            :key="entry.key"
          >
            <!-- | orderBy: (layers.ordered ? '' : 'key') -->
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
              <!-- <a
                ng-if="!(layers.layerLabel.startsWith('myenergy_solarkataster_luxemburg') || layers.layerLabel.startsWith('eau_new_Wasserstand'))&& ctrl.isLink(entry['value'])"
                ng-href="{{entry['value']}}"
                target="_blank"
                >{{ t(`${entry['key']}`) }}</a
              >
              <a
                ng-if="layers.layerLabel.startsWith('myenergy_solarkataster_luxemburg') && ctrl.isLink(entry['value']) && entry['key'] == 'f_href'"
                ng-href="{{entry['value']}}"
                target="_blank"
              >
                <button class="solarkatasterbutton">
                  <span>{{
                    t("Lien direct vers le calculateur d'efficacité économique")
                  }}</span>
                </button></a
              >
              <span
                ng-if="ctrl.isLink(entry['value']) && entry['key'] == 'f_AudioURL'"
              >
                <audio controls autoplay style="width: 260px; height: 50px">
                  <source src="{{entry['value']}}" type="audio/wav" />
                </audio>
              </span> -->
              <!-- <iframe
                width="260px"
                height="560px"
                ng-if="layers.layerLabel.startsWith('eau_new_Wasserstand') && ctrl.isLink(entry['value']) && entry['key'] == 'f_Graph'"
                ng-src="{{ctrl.getTrustedUrl(entry['value'])}}"
              ></iframe> -->
            </span>
          </div>
        </div>

        <!-- <div
          class="query-profile"
          ng-show="feature.attributes.showProfile.active"
        >
          <app-profile
            app-profile-data="feature.attributes.profile"
            app-profile-map="::ctrl.map"
            app-profile-interaction="feature.attributes.showProfile"
          />
        </div>
        <div class="no-print" ng-show="feature.attributes.showProfile.active">
          <a
            class="btn btn-default"
            ng-click="ctrl.exportKml(feature, feature.attributes.name)"
            >{{ t('Exporter KMl') }}</a
          >
          &nbsp;<a
            class="btn btn-default"
            ng-click="ctrl.exportGpx(feature, feature.attributes.name, true)"
            >{{ t('Exporter GPX') }}</a
          >
        </div> -->
        <div v-if="!hasAttributes(feature)">
          <span>{{
            t('Aucune information disponible pour cette couche')
          }}</span>
        </div>
        <!-- TODO: implement intepreting the URL (getFeatureInfoById)-->
        <div v-if="hasValidFID(feature)">
          <span
            ><a :href="`?fid=${feature.fid}`" target="_blank">{{
              t('Lien direct vers cet objet')
            }}</a></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
