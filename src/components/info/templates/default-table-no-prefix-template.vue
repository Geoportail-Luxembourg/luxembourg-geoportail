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
              !isEmptyString(attributeEntry.value) &&
              showAttributesByLang(
                attributeEntry,
                layers.layer,
                i18next.language
              )
            "
          >
            <div v-if="!isLink(attributeEntry.value)" class="flex">
              <label class="w-1/3">{{ t(attributeEntry.key) }}</label>
              <span
                class="w-2/3"
                v-dompurify-html="attributeEntry.value"
              ></span>
            </div>
            <div v-if="isLink(attributeEntry.value)" class="flex">
              <label class="w-1/3"></label>
              <a class="w-2/3" :href="attributeEntry.value" target="_blank">{{
                t(attributeEntry.key)
              }}</a>
            </div>
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
