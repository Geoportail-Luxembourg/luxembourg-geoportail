<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import useDrawElevationProfileInteraction from '@/composables/elevation-profile/draw-elevation-profile-interaction.composable'
import { useElevationProfileStore } from '@/stores/elevation-profile.store'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import useMap from '@/composables/map/map.composable'

const { t } = useTranslation()
const elevationProfileStore = useElevationProfileStore()
const { currentProfileFeature } = storeToRefs(elevationProfileStore)

const drawElevationProfile = useDrawElevationProfileInteraction()
const map = useMap().getOlMap()

// Convert OL Feature to DrawnFeature for compatibility with feature-elevation-profile component
const drawnFeature = computed(() => {
  if (!currentProfileFeature.value) {
    return undefined
  }

  const feature = new DrawnFeature()
  feature.setGeometry(currentProfileFeature.value.getGeometry())
  feature.map = map
  feature.id = Date.now()
  feature.label = t('Elevation Profile')
  feature.featureType = 'drawnLine'

  return feature
})

onMounted(() => {
  drawElevationProfile.init()
})

onUnmounted(() => {
  drawElevationProfile.clearFeature()
})

function onRedraw() {
  drawElevationProfile.clearFeature()
  drawElevationProfile.drawElevationProfileActive.value = true
}
</script>

<template>
  <div data-cy="toolbarElevationProfile" class="relative">
    <div
      class="absolute bottom-full top-auto z-20 flex flex-col gap-2 bg-white border border-gray-400 p-2 rounded shadow-lg"
    >
      <!-- Control buttons -->
      <div class="flex gap-2">
        <button
          data-cy="elevationProfileRedraw"
          class="px-3 py-1 bg-primary text-white rounded hover:bg-secondary"
          @click="onRedraw"
        >
          {{ t('Draw new line') }}
        </button>
        <button
          v-if="currentProfileFeature"
          data-cy="elevationProfileClear"
          class="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          @click="drawElevationProfile.clearFeature"
        >
          {{ t('Clear') }}
        </button>
      </div>

      <!-- Elevation Profile Component -->
      <feature-elevation-profile
        class="w-[450px]"
        :feature="drawnFeature"
        :enable-export-c-s-v="true"
        :activate-positioning="true"
      />
    </div>
  </div>
</template>
