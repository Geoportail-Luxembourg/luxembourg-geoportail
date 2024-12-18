<script setup lang="ts">
import i18next from 'i18next'
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const { t } = useTranslation()
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h2>{{ feature.attributes['title_' + i18next.language] }}</h2>
      <div v-if="feature.attributes.media_filename_0">
        <a :href="<string>feature.attributes.media_filename_0" target="_blank">
          <img :src="<string>feature.attributes.media_filename_0" width="250" />
        </a>
      </div>
      <div>
        <span>{{ feature.attributes.contactname }}</span>
      </div>
      <div>
        <span
          >{{ feature.attributes.address_streetno }}
          {{ feature.attributes.address_street }}</span
        >
      </div>
      <div>
        <span
          >{{ feature.attributes.address_zipcode }}
          {{ feature.attributes.address_city }}</span
        >
      </div>
      <div v-if="feature.attributes.address_phone1">
        <span>tel : {{ feature.attributes.address_phone1 }}</span>
      </div>
      <div>
        <a :href="`mailto: ${feature.attributes.address_email}`">{{
          feature.attributes.address_email
        }}</a>
      </div>
      <div>
        <a
          :href="<string>(feature.attributes['address_homepage_'+ i18next.language])"
          >{{ t('Homepage') }}</a
        >
      </div>
    </template>
  </InfoFeatureLayout>
</template>
