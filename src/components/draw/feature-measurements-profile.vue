<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

// import { DrawnFeature } from '@/services/draw/drawn-feature' // TODO:
import ElevationProfile from '@/components/common/graph/elevation-profile.vue'

const { t } = useTranslation()

// const feature: DrawnFeature | undefined = inject('feature') // TODO:
const isLoading = computed(() => false) // TODO:
const isDrawing = computed(() => false) // TODO:
const profileData = computed(() => true) // TODO:
const elevationGain = computed(() => 42 + 'm') // TODO:
const elevationLoss = computed(() => 42 + 'm') // TODO:
const cumulativeElevation = computed(() => 42 + 'm') // TODO:

function exportCSV() {
  alert('TODO exportCSV')
}
</script>

<template>
  <div data-cy="featItemProfile" class="lux-profile relative mb-2">
    <div class="flex justify-between">
      <div>
        <label>&Delta; +</label><span>{{ elevationGain }}</span
        >&nbsp;&nbsp; <label>&Delta; -</label><span>{{ elevationLoss }}</span
        >&nbsp;&nbsp; <label>&Delta;</label
        ><span>{{ cumulativeElevation }}</span>
      </div>
      <button
        data-cy="featItemProfileCSV"
        class="profile-export no-print text-secondary hover:underline"
        v-if="profileData"
        @click="() => exportCSV()"
      >
        {{ t('Export csv') }}
      </button>
    </div>
    <div
      v-if="isLoading || isDrawing"
      class="rounded p-2 bg-[rgba(120,120,120,0.5)] absolute mr-1"
    >
      {{
        isLoading
          ? t('Please wait, the profile is loading.')
          : isDrawing
          ? t('Draw a line on the map to display an elevation profile.')
          : ''
      }}
    </div>
    <ElevationProfile />
  </div>
</template>
