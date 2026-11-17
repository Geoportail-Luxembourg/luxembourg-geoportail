<script setup lang="ts">
import '../../templates-styles.css'
import type { FeatureInfoJSON, FeatureJSON } from '../../models'
import { useLuxTranslation } from '../../i18n'
import { hasValidFID } from '../templates/template-utilities'
import { injectLuxTplContext } from '../../context'

withDefaults(
  defineProps<{
    layers: FeatureInfoJSON
    fid?: (feature: FeatureJSON) => string
  }>(),
  { fid: (feature: FeatureJSON) => feature.fid }
)

const { featureLink } = injectLuxTplContext()

const { t } = useLuxTranslation()
</script>

<template>
  <!-- Layer title -->
  <h1 class="lux-tpl-poi-title" data-cy="defaultTemplateTitle">
    {{ t(layers.layerLabel, { ns: 'layers' }) }}
  </h1>

  <!-- Slot content for feature to be replaced by template -->
  <slot name="layer-content"></slot>

  <!-- Loop through all layer features -->
  <div
    v-for="feature in layers.features"
    :key="feature.id"
    class="lux-tpl-feature-info"
    data-cy="defaultTemplateAttributes"
  >
    <!-- Slot content for feature to be replaced by template -->
    <slot name="feature-content" :feature="feature">
      {{ feature.id }}
    </slot>

    <!-- Direct link to the feature -->
    <div v-if="featureLink && hasValidFID(feature)">
      <a
        data-cy="defaultTemplateLink"
        class="print:hidden"
        :href="featureLink(fid(feature))"
        target="_blank"
      >
        {{ t('Lien direct vers cet objet') }}
      </a>
    </div>
  </div>
</template>
