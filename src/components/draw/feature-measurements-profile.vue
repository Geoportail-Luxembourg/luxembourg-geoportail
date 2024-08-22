<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawFeature } from '@/stores/draw.store.model'
// import D3GraphElevation from '@/components/common/graph/d3-graph-elevation.vue'

const { t } = useTranslation()

defineProps<{
  feature: DrawFeature
}>()
const isLoading = computed(() => false) // TODO
const profileData = computed(() => true) // TODO
const elevationGain = computed(() => 42) // TODO
const elevationLoss = computed(() => 42) // TODO
const cumulativeElevation = computed(() => 42) // TODO

function exportCSV() {
  alert('TODO exportCSV')
}
</script>

<template>
  <div class="lux-profile">
    <div class="flex justify-between">
      <div>
        <label>&Delta; +</label><span>{{ elevationGain }}</span
        >&nbsp;&nbsp; <label>&Delta; -</label><span>{{ elevationLoss }}</span
        >&nbsp;&nbsp; <label>&Delta;</label
        ><span>{{ cumulativeElevation }}</span>
      </div>
      <button
        class="profile-export no-print text-secondary hover:underline"
        v-if="profileData"
        @click="() => exportCSV()"
      >
        {{ t('Export csv') }}
      </button>
    </div>
    <div class="rounded p-2 bg-[rgba(120,120,120,0.5)]">
      {{
        isLoading
          ? t('Please wait, the profile is loading.')
          : t('Draw a line on the map to display an elevation profile.')
      }}
    </div>
    <!-- <D3GraphElevation /> -->
  </div>
</template>
