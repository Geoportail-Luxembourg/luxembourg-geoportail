<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { useAppStore } from '@/stores/app.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { storeToRefs } from 'pinia'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import useMap from '@/composables/map/map.composable'
import LocationInfo from './location-info.vue'
import FeatureInfo from '@/components/info/feature-info.vue'
import { watch } from 'vue'

const { t } = useTranslation()
const appStore = useAppStore()
const { locationInfoCoords } = storeToRefs(useLocationInfoStore())
const map = useMap().olMap
const { infoOpen } = storeToRefs(appStore)
const { clearContent } = useFeatureInfoStore()
const { featureInfoPanelContent, isLoading } = storeToRefs(
  useFeatureInfoStore()
)

watch(infoOpen, isOpen => {
  if (!isOpen) {
    clearContent()
  }
})
</script>

<template>
  <side-panel-layout
    :data-cy-value="'infoPanel'"
    :close-fn="() => appStore.toggleInfoOpen(false)"
  >
    <template v-slot:header>
      <h1>
        {{ t('infos', { ns: 'client' }) }}
      </h1>
    </template>

    <template v-slot:content>
      <template v-if="map">
        <div
          data-cy="locationInfo"
          v-show="locationInfoCoords"
          class="absolute"
        >
          <LocationInfo />
        </div>
      </template>

      <template v-if="!locationInfoCoords && !featureInfoPanelContent">
        <div class="text-white absolute">
          <ul class="list-disc pl-10">
            <li>
              {{
                t(`A right click (tap and hold on mobile)...`, { ns: 'app' })
              }}
            </li>
            <li>
              {{ t(`A short click (tap on mobile)...`, { ns: 'app' }) }}
            </li>
          </ul>
        </div>
      </template>
      <feature-info
        v-if="featureInfoPanelContent && !isLoading"
        :content="featureInfoPanelContent"
      />
    </template>
  </side-panel-layout>
</template>
