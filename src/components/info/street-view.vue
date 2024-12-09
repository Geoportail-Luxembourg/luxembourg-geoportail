<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useInfoStore } from '@/stores/info.store'
import useStreetView from '@/composables/map/street-view.composable'

const { t } = useTranslation()

const { isStreetviewActive, noDataAtLocation } = storeToRefs(useInfoStore())

const streetviewDiv: Ref<HTMLElement | null> = ref(null)

// launch streetView listeners
useStreetView(streetviewDiv)
</script>

<template>
  <div
    class="grid before:content-streetview before:col-start-1 before:row-start-1"
    v-show="isStreetviewActive && noDataAtLocation"
    data-cy="streetviewNoData"
  >
    <span class="col-start-1 row-start-1 text-white py-[15px]">
      {{ t("Il n'y a pas de panorama google disponible à cet endroit") }}
    </span>
  </div>
  <div
    ref="streetviewDiv"
    class="h-[500px]"
    v-show="isStreetviewActive && !noDataAtLocation"
  >
    Streetview Container
  </div>
</template>
