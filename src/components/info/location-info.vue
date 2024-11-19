<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useMapStore } from '@/stores/map.store'
import useMap from '@/composables/map/map.composable'
import {
  create_short_url,
  getQRUrl,
  getElevation,
  getNearestAddress,
  formatCoords,
  INFO_PROJECTIONS,
} from '@/services/info/location-info'
import { transform } from 'ol/proj'

const { t } = useTranslation()
const { locationInfo } = storeToRefs(useMapStore())

const map = useMap().getOlMap()

const shortUrl = ref()
const elevation = ref()
const address = ref()
const clickCoordinateLuref = ref()

// const shortUrl = computed(async () => await create_short_url(locationInfo))

watch(locationInfo, async () => {
  if (!locationInfo) {
    return
  }
  shortUrl.value = await create_short_url(locationInfo.value)
  clickCoordinateLuref.value = transform(
    locationInfo.value!,
    map.getView().getProjection(),
    'EPSG:2169'
  )
})

/* const clickCoordinateLuref = computed(() => locationInfo.value && transform(
 *   locationInfo.value, map.getView().getProjection(), 'EPSG:2169')
 * )
 * */
const qrUrl = computed(() => getQRUrl(shortUrl.value))

watch(clickCoordinateLuref, async () => {
  elevation.value = await getElevation(clickCoordinateLuref.value!)
})
watch(clickCoordinateLuref, async () => {
  address.value = await getNearestAddress(clickCoordinateLuref.value!)
})

const formatted_coordinates = computed(() =>
  Object.fromEntries(
    Object.entries(INFO_PROJECTIONS).map(([crs, label]) => [
      label,
      formatCoords(locationInfo.value, map.getView().getProjection(), crs),
    ])
  )
)
</script>

<template>
  <div>
    <div>
      <h3>{{ t('Short Url', { ns: 'client' }) }}</h3>
    </div>
    <div>
      <input
        onclick="this.select();"
        type="text"
        :value="shortUrl"
        readonly="true"
      />
    </div>
    <div>
      <img
        class="img-responsive"
        style="margin-top: 22px"
        v-if="qrUrl"
        :src="qrUrl"
      />
    </div>
  </div>
  <div>
    <div>
      <h3>{{ t('Location Coordinates', { ns: 'client' }) }}</h3>
    </div>
    <table>
      <tr v-for="(coords, label) in formatted_coordinates" :key="label">
        <th style="text-align: left">{{ t(label as string) }}</th>
        <td>{{ coords }}</td>
      </tr>
      <tr>
        <th style="text-align: left">{{ t('Elevation') }}</th>
        <td>{{ elevation }}</td>
      </tr>
      <tr>
        <th style="text-align: left">{{ t('Adresse la plus proche') }}</th>
        <td>{{ address?.formattedAddress }}</td>
      </tr>
      <tr>
        <th style="text-align: left">{{ t('Distance approximative') }}</th>
        <td>{{ address?.distance }}</td>
      </tr>
    </table>
  </div>
</template>
