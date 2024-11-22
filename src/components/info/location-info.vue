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

import StreetView from '@/components/info/street-view.vue'

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

const isRapportForageVirtuelAvailable = computed(() => {
  const userRole = 'ACT'
  return userRole === 'ACT'
})
const downloadingRepport = ref(false)
const isInBoxOfLidar = computed(() => true)
const isCyclomediaAvailable = computed(() => true)
const isImagesObliquesAvailable = computed(() => true)

const getLidarUrl = () => 'bla'
const getCyclomediaUrl = () => 'bla'
const getImagesObliquesUrl = () => 'bla'

const addRoutePoint = () => 'bla'

const open = ref(true)
const isStreetviewActive = ref(false)
const toggleStreetview = () => {
  isStreetviewActive.value = !isStreetviewActive.value
}

function downloadRapportForageVirtuel() {
  downloadingRepport.value = true
  setTimeout(() => (downloadingRepport.value = false), 2000)
}

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
  <div>
    <div v-if="isRapportForageVirtuelAvailable">
      <button
        v-if="!downloadingRepport"
        class="lux-btn mt-1"
        @click="downloadRapportForageVirtuel()"
      >
        {{ t('Rapport forage virtuel') }}
      </button>
    </div>
    <div class="flex flex-wrap mt-1 gap-x-1">
      <a
        v-if="isInBoxOfLidar"
        class="lux-btn whitespace-nowrap"
        :href="getLidarUrl()"
        target="_geoportal_ext_lidar"
      >
        {{ t('Lien vers la démo lidar') }}
      </a>
      <a
        v-if="isCyclomediaAvailable"
        class="lux-btn whitespace-nowrap"
        :href="getCyclomediaUrl()"
        target="_geoportal_ext_cyclomedia"
      >
        {{ t('Lien vers Cyclomédia') }}
      </a>
      <a
        v-if="isImagesObliquesAvailable"
        class="lux-btn whitespace-nowrap"
        :href="getImagesObliquesUrl()"
        target="_geoportal_ext_obliques"
      >
        {{ t('Images obliques') }}
      </a>
    </div>
    <div>
      <button class="lux-btn mt-1" @click="addRoutePoint()">
        <span class="create-itinerary-text">
          {{ t('Ajouter étape à mon itinéraire') }}
        </span>
      </button>
    </div>
    <div v-if="isStreetviewActive">
      <button class="lux-btn mt-3" @click="toggleStreetview()">
        <span class="create-itinerary-text">
          {{ t('Désactiver Google Streetview') }}
        </span>
      </button>
    </div>
  </div>
  <div>
    <StreetView v-if="isStreetviewActive" />
    <div
      v-if="!isStreetviewActive"
      class="grid before:content-streetview before:col-start-1 before:row-start-1"
    >
      <div
        class="col-start-1 row-start-1 text-center"
        v-if="!(open && isStreetviewActive)"
      >
        <button class="lux-btn mt-3 no-print" @click="toggleStreetview()">
          {{ t('Activer Google Streetview') }}
        </button>
      </div>
    </div>
  </div>
</template>
