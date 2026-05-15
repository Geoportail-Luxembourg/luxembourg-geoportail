<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import ExportPanelItem from './export-panel-item.vue'
import { transform } from 'ol/proj'
import useMap, { PROJECTION_WGS84 } from '@/composables/map/map.composable'

const { t } = useTranslation()
const map = useMap().getOlMap()

const obliqueUrl = computed(() => {
  const center = map.getView().getCenter()
  if (!center) return 'https://3d.geoportail.lu'

  const center4326 = transform(
    center,
    map.getView().getProjection(),
    PROJECTION_WGS84
  )
  const lon = center4326[0]
  const lat = center4326[1]

  const cameraAltitude = 692
  const targetHeight = 292
  const distance = 400
  const heading = 0
  const pitch = -90
  const roll = 0

  const modules = [
    'LuxConfig',
    '8bbdc4b3-691e-466e-9e91-2b0d57a9a53e',
    'c627c247-8017-483a-a32e-1ff0ad5f0536',
    '0fa7c853-d866-486c-8c2d-3470f401d44c',
    '1f9cb759-c3dc-44ba-9253-7299701499a3',
    'f7791a73-5132-4282-b3c4-1adb1abce06a',
    'catalogConfig',
  ]

  const plugins = [
    ['@geoportallux/lux-3dviewer-themesync', { prop: '*' }],
    ['@geoportallux/lux-3dviewer-plugin-back-to-2d-portal', { prop: '*' }],
  ]

  const state = [
    [
      [lon, lat, cameraAltitude],
      [lon, lat, targetHeight],
      distance,
      heading,
      pitch,
      roll,
    ],
    'Oblique Map',
    modules,
    [],
    [],
    plugins,
    'ACT2023_ImagesObliques_all',
    [],
  ]

  return (
    `${import.meta.env.VITE_OBLIQUE_URL}?state=` +
    encodeURIComponent(JSON.stringify(state))
  )
})
</script>

<template>
  <ExportPanelItem
    :href="obliqueUrl"
    :label="t('Vue Oblique', { ns: 'app' })"
    :description="t('Vue Oblique desc', { ns: 'app' })"
    target="_geoportal_ext_obliques"
  >
    <i class="fa-solid fa-street-view w-5 text-lg shrink-0 text-center"></i>
  </ExportPanelItem>
</template>
