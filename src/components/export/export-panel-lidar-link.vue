<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import ExportPanelItem from './export-panel-item.vue'
import { transform } from 'ol/proj'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'

const { t } = useTranslation()
const map = useMap().getOlMap()

const lidarUrl = computed(() => {
  const center = map.getView().getCenter()
  if (!center) return import.meta.env.VITE_LIDAR_URL

  const centerLuref = transform(
    center,
    map.getView().getProjection(),
    PROJECTION_LUX
  )

  return `${import.meta.env.VITE_LIDAR_URL}?COORD_X=${centerLuref[0]}&COORD_Y=${centerLuref[1]}&COORD_Z=0`
})
</script>

<template>
  <ExportPanelItem
    :href="lidarUrl"
    :label="t('Lidar', { ns: 'app' })"
    :description="t('Lidar desc', { ns: 'app' })"
  >
    <i class="fa-solid fa-mountain w-5 text-lg shrink-0 text-center"></i>
  </ExportPanelItem>
</template>
