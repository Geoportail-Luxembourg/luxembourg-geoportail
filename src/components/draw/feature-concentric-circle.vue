<script setup lang="ts">
import { ref, inject, Reactive } from 'vue'
import { useTranslation } from 'i18next-vue'
import { Circle } from 'ol/geom'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { getCircleRadius } from '@/services/common/measurement.utils'
import useMap from '@/composables/map/map.composable'

const emit = defineEmits(['cancel', 'validate'])

const { t } = useTranslation()
const map = useMap().getOlMap()
const feature: Reactive<DrawnFeature> = inject('feature')!
const radius = ref(
  parseFloat(
    getCircleRadius(
      <Circle>feature.getGeometry(), // TODO: create utility to get rid of ol import maximum
      map.getView().getProjection()
    ).toFixed(2)
  )
)
</script>

<template>
  {{ t('Veuillez entrer les caractéristiques de votre nouveau cercle') }}

  <div class="flex gap-2 items-center">
    <span>{{ t('Rayon:') }}</span>
    <div class="flex items-center">
      <input
        class="form-control block bg-secondary border !border-gray-300 mr-1"
        type="number"
        v-model.number="radius"
      />
      <span>{{ t('mètres') }}</span>
    </div>
  </div>
  <div class="mt-3 text-right">
    <button
      data-cy="featureEditCancel"
      class="lux-btn mr-2"
      @click="emit('cancel')"
    >
      {{ t('Cancel') }}
    </button>

    <button
      data-cy="featureEditValidate"
      class="lux-btn-primary"
      @click="emit('validate', { radius, baseFeature: feature })"
    >
      {{ t('Validate') }}
    </button>
  </div>
</template>
