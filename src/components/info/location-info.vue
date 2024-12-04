<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useInfoStore } from '@/stores/info.store'
import { AddressResult } from '@/stores/info.store.model'
import { Coordinate } from 'ol/coordinate'
import useMap from '@/composables/map/map.composable'
import useLocationInfo from '@/composables/map/location-info.composable'
import { getQRUrl, queryInfos } from '@/services/info/location-info'
import { formatLength } from '@/services/common/formatting.utils'

import StreetView from '@/components/info/street-view.vue'

const { t } = useTranslation()
const { locationInfo, isStreetviewActive } = storeToRefs(useInfoStore())

const map = useMap().getOlMap()

const shortUrl: Ref<string | undefined> = ref()
const qrUrl: Ref<string | undefined> = ref()
const elevation: Ref<number | undefined> = ref()
const address: Ref<AddressResult | undefined> = ref()
const clickCoordinateLuref: Ref<Coordinate | undefined> = ref()
const formattedCoordinates: Ref<{ [k: string]: string }> = ref({})

// initialise map listeners for location info
useLocationInfo()
// initial load of position infos if locationInfo is not initially undefined
// async function, no need to await the completion, DOM will be updated via refs
updateInfo(locationInfo.value)

watch(locationInfo, updateInfo)

async function updateInfo(location: Coordinate | undefined) {
  if (location) {
    const infos = await queryInfos(location, map.getView().getProjection())
    shortUrl.value = infos.shortUrl
    qrUrl.value = getQRUrl(infos.shortUrl)
    clickCoordinateLuref.value = infos.clickCoordinateLuref
    formattedCoordinates.value = infos.formattedCoordinates
    elevation.value = infos.elevation
    address.value = infos.address
  }
}

// TODO implement logics from user data
const isRapportForageVirtuelAvailable = computed(() => {
  const userRole = 'ACT'
  return userRole === 'ACT'
})
const downloadingRepport = ref(false)
const isInBoxOfLidar = computed(() => true)
const isCyclomediaAvailable = computed(() => true)
const isImagesObliquesAvailable = computed(() => true)

const getLidarUrl = () => 'bla'
const cyclomediaUrl = computed(() =>
  clickCoordinateLuref.value
    ? `${import.meta.env.VITE_CYCLOMEDIA_URL}?q=${
        clickCoordinateLuref.value[0]
      };${clickCoordinateLuref.value[1]}`
    : ''
)
const imagesObliquesUrl = computed(() =>
  clickCoordinateLuref.value
    ? `${import.meta.env.VITE_OBLIQUE_URL}?x=${
        clickCoordinateLuref.value[0]
      }&y=${clickCoordinateLuref.value[1]}&crs=2169`
    : ''
)

const addRoutePoint = () => '// TODO: add point to route'

const open = ref(true)
function toggleStreetview() {
  isStreetviewActive.value = !isStreetviewActive.value
}

function downloadRapportForageVirtuel() {
  downloadingRepport.value = true
  setTimeout(() => (downloadingRepport.value = false), 2000)
}
</script>

<template>
  <div class="flex flex-row">
    <div class="grow-[2] flex flex-col content-end">
      <div class="grow"></div>
      <h3 class="text-3xl text-white">
        {{ t('Short Url', { ns: 'client' }) }}
      </h3>
      <input
        onclick="this.select();"
        class="lux-input"
        type="text"
        :value="shortUrl"
        readonly="true"
      />
    </div>
    <img class="mx-5 mt-5" v-if="qrUrl" :src="qrUrl" />
  </div>
  <div>
    <div class="mt-5">
      <h3 class="text-3xl text-white">
        {{ t('Location Coordinates', { ns: 'client' }) }}
      </h3>
    </div>
    <table>
      <tbody class="lux-info-table">
        <tr v-for="(coords, label) in formattedCoordinates" :key="label">
          <th>{{ t(label as string) }}</th>
          <td>{{ coords }}</td>
        </tr>
        <tr>
          <th style="text-align: left">{{ t('Elevation') }}</th>
          <td>{{ formatLength(elevation || null) }}</td>
        </tr>
        <tr>
          <th style="text-align: left">{{ t('Adresse la plus proche') }}</th>
          <td>{{ address?.formattedAddress }}</td>
        </tr>
        <tr>
          <th style="text-align: left">{{ t('Distance approximative') }}</th>
          <td>{{ formatLength(address?.distance || null) }}</td>
        </tr>
      </tbody>
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
        :href="cyclomediaUrl"
        target="_geoportal_ext_cyclomedia"
      >
        {{ t('Lien vers Cyclomédia') }}
      </a>
      <a
        v-if="isImagesObliquesAvailable"
        class="lux-btn whitespace-nowrap"
        :href="imagesObliquesUrl"
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
    <StreetView v-show="isStreetviewActive" />
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
