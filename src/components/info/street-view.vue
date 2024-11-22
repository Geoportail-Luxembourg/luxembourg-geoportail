<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()

const isActive = ref(true)
const noDataAtLocation = ref(true)
</script>

<template>
  <div
    id="streetview-div"
    class="streetview"
    v-if="isActive && !noDataAtLocation"
  >
    bla
  </div>
  <div
    class="grid before:content-streetview before:col-start-1 before:row-start-1"
    v-if="isActive && noDataAtLocation"
  >
    <span class="col-start-1 row-start-1 text-white py-[15px]">
      {{ t("Il n'y a pas de panorama google disponible à cet endroit") }}
    </span>
  </div>
</template>
