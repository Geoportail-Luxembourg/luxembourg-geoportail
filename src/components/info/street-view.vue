<script setup lang="ts">
import { watch, ref, Ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useLocationInfoStore } from '@/stores/location-info.store'
import useMap from '@/composables/map/map.composable'
import useStreetView from '@/composables/info/street-view.composable'

const { t } = useTranslation()

const { isStreetviewActive, streetViewLoading, noDataAtLocation } = storeToRefs(
  useLocationInfoStore()
)

const streetviewDiv: Ref<HTMLElement | null> = ref(null)

// launch streetView listeners
useStreetView(streetviewDiv)

const map = useMap().getOlMap()
watch(streetViewLoading, streetViewLoading => {
  if (streetViewLoading) {
    map.getViewport().style.cursor = 'wait'
  } else {
    map.getViewport().style.cursor = ''
  }
})
</script>

<template>
  <div class="grid">
    <div
      class="grid col-start-1 row-start-1 before:content-streetview before:col-start-1 before:row-start-1"
      v-show="isStreetviewActive && noDataAtLocation"
      data-cy="streetviewNoData"
    >
      <span class="col-start-1 row-start-1 text-white py-[15px]">
        {{ t("Il n'y a pas de panorama google disponible à cet endroit") }}
      </span>
    </div>
    <div
      data-cy="streetviewLoading"
      v-show="streetViewLoading"
      class="col-start-1 row-start-1 lux-loader"
    ></div>
    <div
      ref="streetviewDiv"
      class="h-[500px] col-start-1 row-start-1"
      v-show="isStreetviewActive && !noDataAtLocation"
    >
      <!-- Streetview Container -->
    </div>
  </div>
</template>
