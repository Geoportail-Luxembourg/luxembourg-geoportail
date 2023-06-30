<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useMapStore } from '@/stores/map.store'
import DropdownList from '@/components/common/dropdown-list.vue'

const ZOOMS_TO_SCALES = {
  '8': "1'500'000",
  '9': "750'000",
  '10': "400'000",
  '11': "200'000",
  '12': "100'000",
  '13': "50'000",
  '14': "25'000",
  '15': "12'000",
  '16': "6'000",
  '17': "3'000",
  '18': "1'500",
  '19': '750',
  '20': '400',
  '21': '200',
} // legacy name is "origScales"

const { t } = useTranslation()
const { viewZoom } = storeToRefs(useMapStore())
const mapStore = useMapStore()
const placeholder = computed(() => getLabel(viewZoom.value))
const dropdownOptions = computed(() =>
  Object.keys(ZOOMS_TO_SCALES).map(zoom => ({
    label: getLabel(parseInt(zoom, 10)),
    value: parseInt(zoom, 10),
    ariaLabel: t(`Changer d'échelle : {{scale}}`, {
      scale: getLabel(parseInt(zoom, 10)),
    }),
  }))
)

function getLabel(scale: number) {
  return `1 : ${ZOOMS_TO_SCALES[scale]}`
}

function onChangeScale(scale: number) {
  mapStore.setViewZoom(scale)
}
</script>

<template>
  <dropdown-list
    class="lux-dropdown"
    :options="dropdownOptions"
    :placeholder="placeholder"
    @change="onChangeScale"
  ></dropdown-list>
</template>
