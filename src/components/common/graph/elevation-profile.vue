<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import D3GraphElevation from './d3-graph-elevation.vue'
import { ProfileData } from './elevation-profile'
import {
  formatElevation,
  formatLength,
} from '@/services/common/formatting.utils'

defineProps<{
  profileData?: ProfileData
  highlightDistance?: number
}>()

const { t } = useTranslation()
</script>

<template>
  <d3-graph-elevation
    v-if="profileData"
    :dataset="profileData"
    :highlightDistance="highlightDistance"
    :labelXFormatter="
      (factor: number) => `${t('Distance')} [${factor === 1 ? 'm' : 'km'}]`
    "
    :labelYFormatter="() => `${t('Elevation')} [m]`"
    :xFormatter="(value: number) => formatLength(value, 2)"
    :yFormatter="(value: number) => formatElevation(value, 1)"
  />

  <!-- If no data, display blured static image of a graph -->
  <div class="text-center" v-else>
    <img
      class="inline-block min-h-64 p-1"
      src="@/assets/images/profile.png"
      alt=""
    />
  </div>
</template>
