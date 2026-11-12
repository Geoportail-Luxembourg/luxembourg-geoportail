<script setup lang="ts">
import { computed } from 'vue'
import ElevationChart from './elevation-chart.vue'
import { formatElevation } from './profile'
import type { ProfileData, ProfileDataEntry } from './profile'
import { useLuxTranslation } from '../i18n'

const props = withDefaults(
  defineProps<{
    profileData?: ProfileData
    highlightDistance?: number
    /** Shown over the chart, e.g. while loading. */
    message?: string
    enableExportCSV?: boolean
  }>(),
  { enableExportCSV: true }
)
defineEmits<{
  (e: 'hover:profile', point: ProfileDataEntry, dist: number): void
  (e: 'out:profile'): void
  (e: 'csv'): void
}>()

const { t } = useLuxTranslation()
const last = computed(() => props.profileData?.[props.profileData.length - 1])
</script>

<template>
  <div class="lux-profile relative">
    <div class="flex justify-between w-full px-1 gap-3 whitespace-nowrap">
      <div class="grow cursor-default" data-cy="featItemProfileCumul">
        <template v-if="last">
          <span>&Delta;+{{ formatElevation(last.elevationGain) }}</span>
          <span> &Delta;{{ formatElevation(last.elevationLoss) }}</span>
          <span> &Delta;{{ formatElevation(last.cumulativeElevation) }}</span>
        </template>
      </div>
      <button
        data-cy="featItemProfileCSV"
        class="profile-export no-print text-secondary hover:underline"
        v-if="enableExportCSV && profileData"
        @click="$emit('csv')"
      >
        {{ t('Export csv') }}
      </button>
      <slot />
    </div>

    <div v-if="message" class="no-print w-full absolute mt-2 text-center">
      <span class="text-gray-700 rounded p-2 bg-[rgba(120,120,120,0.5)]">
        {{ message }}
      </span>
    </div>

    <ElevationChart
      :profileData="profileData"
      class="w-full"
      :highlightDistance="highlightDistance"
      @hover:profile="(point, dist) => $emit('hover:profile', point, dist)"
      @out:profile="$emit('out:profile')"
    />
  </div>
</template>
