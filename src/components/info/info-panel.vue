<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { useAppStore } from '@/stores/app.store'
import { useInfoStore } from '@/stores/info.store'
import { storeToRefs } from 'pinia'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import useMap from '@/composables/map/map.composable'
import LocationInfo from './location-info.vue'
import FeatureInfo from '@/components/info/feature-info.vue'
import { onUnmounted } from 'vue'

const { t } = useTranslation()
const appStore = useAppStore()
const { locationInfo } = storeToRefs(useInfoStore())
const { clearContent } = useFeatureInfoStore()
const { featureInfoPanelContent, isLoading } = storeToRefs(
  useFeatureInfoStore()
)

onUnmounted(() => {
  clearContent()
})
const map = ref(useMap().getOlMap())

watch(locationInfo, loc => {
  if (loc) {
    if (!map.value) {
      map.value = useMap().getOlMap()
    }
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
        <div v-show="locationInfo" class="absolute">
          <LocationInfo />
        </div>
      </template>

      <template v-if="!locationInfo">
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
