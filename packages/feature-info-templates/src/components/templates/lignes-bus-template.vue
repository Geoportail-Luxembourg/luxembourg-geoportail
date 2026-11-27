<script setup lang="ts">
import type { FeatureInfoJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
import { injectLuxTplContext } from '../../context'
import { luxTplUrls } from '../../env'
defineProps<{
  layers: FeatureInfoJSON
}>()
const { t } = useLuxTranslation('tooltips')
const { config } = injectLuxTplContext()
const urls = luxTplUrls(config.geoportalUrl)
</script>
<template>
  <h1 class="lux-tpl-poi-title">
    {{ t(layers.layerLabel, { ns: 'layers' }) }}
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
        class="lux-tpl-feature-info"
      >
        <td v-if="feature.attributes.category_id === 404">
          <a :href="urls.mobiliteitTramUrl" target="_blank">{{
            feature.attributes.label
          }}</a>
        </td>
        <td v-if="feature.attributes.category_id === 403">
          <a :href="urls.mobiliteitTrainUrl" target="_blank">{{
            feature.attributes.label
          }}</a>
        </td>
        <td v-if="(feature.attributes.category_id ?? 0) < 403">
          <a
            :href="`${urls.mobiliteitBusUrl}${feature.attributes.label}-${
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
          <a
            :href="`${config.geoportalUrl ?? ''}?map_id=${feature.attributes.map_id}`"
            target="_blank"
            >{{ feature.attributes.map_description }}</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
