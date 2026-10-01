<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
import i18next from 'i18next'
defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useTranslation('tooltips')
</script>
<template>
  <h1 class="lux-poi-title">
    {{ t(layers.layerLabel, { ns: 'layers' }) }}
  </h1>
  <div class="lux-feature-info">
    <div class="poi-feature">
      <p v-if="i18next.language === 'fr'">
        Suite à une maintenance dans notre infrastructure, ce service est
        actuellement indisponible. Veuillez nous en excuser.
      </p>
      <p v-if="i18next.language === 'lb'">
        Wéinst enger Maintenance an iser Infrastruktur ass dëse Service momentan
        net disponibel. Mir bieden Iech an dësem Kontext em Entschëllegung.
      </p>
      <p v-if="i18next.language === 'en'">
        Due to maintenance in our infrastructure, this service is currently
        unavailable. We apologize for the inconvenience.
      </p>
      <p v-if="i18next.language === 'de'">
        Aufgrund von Wartungsarbeiten an unserer Infrastruktur ist dieser Dienst
        derzeit nicht verfügbar. Wir entschuldigen uns für die
        Unannehmlichkeiten.
      </p>
    </div>
  </div>
</template>
