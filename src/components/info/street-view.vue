<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useInfoStore } from '@/stores/info.store'

const { t } = useTranslation()

const { isStreetviewActive, noDataAtLocation } = storeToRefs(useInfoStore())
</script>

<template>
  <div
    id="streetview-div"
    class="h-[500px]"
    v-show="isStreetviewActive && !noDataAtLocation"
  >
    Streetview Container
  </div>
  <div
    class="grid before:content-streetview before:col-start-1 before:row-start-1"
    v-show="isStreetviewActive && noDataAtLocation"
  >
    <span class="col-start-1 row-start-1 text-white py-[15px]">
      {{ t("Il n'y a pas de panorama google disponible à cet endroit") }}
    </span>
  </div>
</template>
