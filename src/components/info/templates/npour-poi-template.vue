<script setup lang="ts">
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { useTranslation } from 'i18next-vue'
import { hasProperty } from './template-utilities'
import ProfileFeatureInfo from '../profile-feature-info.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const { t } = useTranslation()
const { i18next } = useTranslation()
</script>
<style scoped>
h3,
.h3 {
  font-size: 28px;
}
</style>
<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h3
        v-if="i18next.language == 'de' && hasProperty('title_de', feature, 0)"
      >
        {{ feature.attributes.title_de }}
      </h3>
      <h3
        v-if="i18next.language == 'en' && hasProperty('title_en', feature, 0)"
      >
        {{ feature.attributes.title_en }}
      </h3>
      <h3
        v-if="i18next.language == 'lb' && hasProperty('title_nl', feature, 0)"
      >
        {{ feature.attributes.title_nl }}
      </h3>
      <h3
        v-if="i18next.language == 'fr' && hasProperty('title_fr', feature, 0)"
      >
        {{ feature.attributes.title_fr }}
      </h3>
      <h3 v-if="i18next.language == 'de' && hasProperty('nom_de', feature, 0)">
        {{ feature.attributes.nom_de }}
      </h3>
      <h3 v-if="i18next.language == 'fr' && hasProperty('nom_fr', feature, 0)">
        {{ feature.attributes.nom_fr }}
      </h3>
      <h3 v-if="i18next.language == 'en' && hasProperty('nom_en', feature, 0)">
        {{ feature.attributes.nom_en }}
      </h3>
      <h3 v-if="i18next.language == 'lb' && hasProperty('nom_lu', feature, 0)">
        {{ feature.attributes.nom_lu }}
      </h3>

      <span
        v-if="i18next.language == 'de' && hasProperty('descr_de', feature, 0)"
        >{{ feature.attributes.descr_de }}</span
      >
      <span
        v-if="i18next.language == 'fr' && hasProperty('descr_fr', feature, 0)"
        >{{ feature.attributes.descr_fr }}</span
      >
      <span
        v-if="i18next.language == 'en' && hasProperty('descr_en', feature, 0)"
        >{{ feature.attributes.descr_en }}</span
      >
      <span
        v-if="i18next.language == 'lb' && hasProperty('descr_nl', feature, 0)"
        >{{ feature.attributes.descr_nl }}</span
      >

      <span v-if="hasProperty('number', feature, 0)"
        >{{ feature.attributes.number }},</span
      >
      <span v-if="hasProperty('street', feature, 0)">{{
        feature.attributes.street
      }}</span>
      <span v-if="hasProperty('town', feature, 0)"
        >{{ feature.attributes.zip }} {{ feature.attributes.town }}</span
      >
      <span v-if="hasProperty('phone', feature, 1)"
        ><i class="fa fa-phone" aria-hidden="true"></i>
        <span>{{ feature.attributes.phone }}</span></span
      >
      <span v-if="hasProperty('fax', feature, 1)"
        ><i class="fa fa-fax" aria-hidden="true"></i>
        <span>{{ feature.attributes.fax }}</span></span
      >
      <span v-if="hasProperty('email', feature, 1)"
        ><i class="fa fa-at" aria-hidden="true"></i>
        <span>{{ feature.attributes.email }}</span></span
      >

      <span
        v-if="hasProperty('website', feature, 3) && (feature.attributes.website as string).startsWith('http')"
        ><a target="_blank" :href="feature.attributes.website as string">{{
          feature.attributes.website
        }}</a></span
      >
      <span
        v-if="hasProperty('website', feature, 3) && !(feature.attributes.website as string).startsWith('http')"
        ><a
          target="_blank"
          :href="'http://'+(feature.attributes.website as string)"
          >{{ feature.attributes.website }}</a
        ></span
      >

      <span
        v-if="i18next.language != 'fr' && hasProperty('link_de', feature, 3)"
        ><a target="_blank" :href="feature.attributes.link_de as string">{{
          feature.attributes.link_de
        }}</a></span
      >
      <span
        v-if="i18next.language == 'fr' && hasProperty('link_fr', feature, 3)"
        ><a target="_blank" :href="feature.attributes.link_fr as string">{{
          feature.attributes.link_fr
        }}</a></span
      >
      <span v-if="hasProperty('Bild', feature, 3)">
        <img :src="feature.attributes.Bild as string" width="250"
      /></span>
      <div v-if="hasProperty('longueur sentier', feature, 0)">
        <span>{{ t('Longueur du sentier :') }}</span>
        <span>{{ feature.attributes['longueur sentier'] }}</span>
      </div>

      <ProfileFeatureInfo
        :feature="feature"
        @export="payload => $emit('export', payload)"
      />
    </template>
  </InfoFeatureLayout>
</template>
