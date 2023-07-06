<script setup lang="ts">
import { computed } from 'vue'
// import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { PROJECTIONS } from '@/services/projection.utils'
// import { useMapStore } from '@/stores/map.store'
import DropdownList from '@/components/common/dropdown-list.vue'

const PROJECTIONS_OPTIONS = {
  LUREF: PROJECTIONS.LUREF,
  'Lon/Lat WGS84': PROJECTIONS.WGS84,
  'Lon/Lat WGS84 DMS': PROJECTIONS.WGS84DMS,
  'Lon/Lat WGS84 DM': PROJECTIONS.WGS84DM,
  'WGS84 UTM 32|31': PROJECTIONS.WGS84UTM3231,
} // legacy name is "projectionOptions"

const { t } = useTranslation()
// const { viewZoom } = storeToRefs(useMapStore())
// const mapStore = useMapStore()
const placeholder = computed(() => 'LUREF')
const dropdownOptions = computed(() =>
  Object.keys(PROJECTIONS_OPTIONS).map(projectionLabel => ({
    label: projectionLabel,
    value: PROJECTIONS_OPTIONS[projectionLabel],
    ariaLabel: t(`Changer de projection : {{proj}}`, {
      scale: PROJECTIONS_OPTIONS[projectionLabel],
    }),
  }))
)

function onChangeScale(/*scale: number*/) {
  // mapStore.setViewZoom(scale)
}
</script>

<template>
  <dropdown-list
    class="lux-dropdown-up"
    :options="dropdownOptions"
    :placeholder="placeholder"
    @change="onChangeScale"
  ></dropdown-list>
</template>
