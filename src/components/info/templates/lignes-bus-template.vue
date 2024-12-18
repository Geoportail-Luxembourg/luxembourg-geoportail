<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export'): void
}>()
const { t } = useTranslation()
</script>
<template>
  <h1 class="lux-poi-title">
    {{ t(layers.layerLabel) }}
  </h1>
  <table>
    <thead>
      <tr>
        <th>{{ t('Num ligne') }}</th>
        <th>{{ t('Description') }}</th>
      </tr>
    </thead>

    <!-- {{
      feature.attributes.category_id
    }} -->
    <tbody>
      <tr
        v-for="feature in layers.features"
        :key="feature.id"
        class="lux-feature-info"
      >
        <td v-if="feature.attributes.category_id === 404">
          <a
            href="https://www.mobiliteit.lu/fr/horaires-et-lignes/tram/"
            target="_blank"
            >{{ feature.attributes.label }}</a
          >
        </td>
        <td v-if="feature.attributes.category_id === 403">
          <a
            href="https://www.mobiliteit.lu/fr/horaires-et-lignes/trains/"
            target="_blank"
            >{{ feature.attributes.label }}</a
          >
        </td>
        <td v-if="(feature.attributes.category_id ?? 0) < 403">
          <a
            :href="`https://www.mobiliteit.lu/fr/ligne/bus-${
              feature.attributes.label
            }-${
              feature.attributes.category_id === 400
                ? 'avl'
                : feature.attributes.category_id === 401
                ? 'rgtr'
                : 'tice'
            }`"
            target="_blank"
            >{{ feature.attributes.label }}</a
          >
        </td>
        <td>
          <!-- TODO: this link will not be interpreted by v4 yet as MyMaps has not been migrated -->
          <a :href="`?map_id=${feature.attributes.map_id}`" target="_blank">{{
            feature.attributes.map_description
          }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
