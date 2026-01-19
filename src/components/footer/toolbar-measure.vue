<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { useAppStore } from '@/stores/app.store'
import ButtonText from './button-text.vue'
import useMeasure from '@/composables/measure/measure.composable'

const { toggleLidarOpen, toggleElevationProfileToolbarOpen } = useAppStore()
const { t } = useTranslation()

const { activate, deactivate, reset, currentMode } = useMeasure()

const tools = [
  {
    label: t('Length'),
    active: () => currentMode.value === 'length',
    onClick: () =>
      currentMode.value === 'length' ? deactivate() : void activate('length'),
  },
  {
    label: t('Surface'),
    active: () => currentMode.value === 'area',
    onClick: () =>
      currentMode.value === 'area' ? deactivate() : void activate('area'),
  },
  {
    label: t('Azimut'),
    active: () => currentMode.value === 'azimuth',
    onClick: () =>
      currentMode.value === 'azimuth' ? deactivate() : void activate('azimuth'),
  },
  {
    label: t('Profile'),
    active: () => false,
    onClick: () => toggleElevationProfileToolbarOpen(true),
  },
  {
    label: t('Profil Lidar'),
    active: () => false,
    onClick: () => toggleLidarOpen(true),
  },
  { label: t('Reset'), active: () => false, onClick: () => reset() },
]
</script>
<template>
  <div data-cy="toolbarMeasure">
    <ul
      class="absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400"
    >
      <li v-for="(tool, index) in tools" :key="index">
        <button-text
          :label="tool.label"
          :active="tool.active()"
          @click="tool.onClick"
        />
      </li>
    </ul>
  </div>
</template>
