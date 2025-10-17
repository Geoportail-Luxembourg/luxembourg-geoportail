<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTranslation } from 'i18next-vue'
import useMap from '@/composables/map/map.composable'
import { getDebouncedElevation } from '@/components/draw/feature-measurements-helper'
import type { MapBrowserEvent } from 'ol'
import { EventsKey } from 'ol/events'
import { unByKey } from 'ol/Observable'

const { t } = useTranslation()
const { getOlMap } = useMap()
const map = getOlMap()

const elevation = ref<string>('N/A')
let pointerMoveKey: EventsKey | null = null

// Format elevation value
const formatElevation = (dhm: number | null): string => {
  if (dhm === null || dhm <= 0) {
    return 'N/A'
  }
  return `${dhm.toFixed(2)} m`
}

// Handle pointer move event
const handlePointerMove = async (evt: MapBrowserEvent<UIEvent>) => {
  if (!evt.coordinate) {
    return
  }

  try {
    const dhm = await getDebouncedElevation(evt.coordinate)
    elevation.value = formatElevation(dhm)
  } catch (error) {
    elevation.value = 'N/A'
  }
}

// Initialize
onMounted(() => {
  // Listen to pointer move events
  pointerMoveKey = map.on('pointermove', handlePointerMove)
})

// Cleanup
onBeforeUnmount(() => {
  if (pointerMoveKey) {
    unByKey(pointerMoveKey)
    pointerMoveKey = null
  }
})
</script>

<template>
  <div
    class="elevation-display"
    :aria-label="t('Elevation at cursor position')"
  >
    <span class="elevation-label">{{ t('Elevation') }}:</span>
    <span class="elevation-value" role="status" aria-live="polite">
      {{ elevation }}
    </span>
  </div>
</template>

<style scoped>
.elevation-display {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--color-primary);
  white-space: nowrap;
}

.elevation-label {
  font-weight: normal;
}

.elevation-value {
  font-weight: 500;
}
</style>
