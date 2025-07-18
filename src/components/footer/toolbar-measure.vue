<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { useAppStore } from '@/stores/app.store'
import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import ButtonText from './button-text.vue'
const { toggleLidarOpen } = useAppStore()
const { t } = useTranslation()

const showProfil = ref(false)

const tools = [
  { label: t('Length'), active: false, onClick: () => alert('TODO Length') },
  { label: t('Surface'), active: false, onClick: () => alert('TODO Surface') },
  { label: t('Azimut'), active: false, onClick: () => alert('TODO Azimut') },
  {
    label: t('Profile'),
    active: false,
    onClick: () => (showProfil.value = true),
  },
  {
    label: t('Profil Lidar'),
    active: false,
    onClick: () => toggleLidarOpen(true),
  },
  { label: t('Reset'), active: false, onClick: () => alert('TODO Reset') },
]

function onCloseProfile() {
  showProfil.value = false
}
</script>
<template>
  <div data-cy="toolbarMeasure">
    <div
      v-if="showProfil"
      class="absolute bottom-full top-auto z-20 flex flex-row justify-start"
    >
      <!-- NB. Elevation profile for Measure tools is not yet fully functional: waiting for measures tools to be implemented first -->
      <feature-elevation-profile
        class="w-[450px]"
        @close="onCloseProfile"
        :feature="undefined"
      />
    </div>

    <ul
      v-else
      class="absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400"
    >
      <li v-for="(tool, index) in tools" :key="index">
        <button-text
          :label="tool.label"
          :active="tool.active"
          @click="tool.onClick"
        />
      </li>
    </ul>
  </div>
</template>
