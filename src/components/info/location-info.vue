<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useInfoStore } from '@/stores/info.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { AddressResult } from '@/stores/info.store.model'
import { Coordinate } from 'ol/coordinate'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import useMap from '@/composables/map/map.composable'
import useLocationInfo from '@/composables/map/location-info.composable'
import {
  getQRUrl,
  queryInfos,
  INFO_PROJECTIONS,
} from '@/services/info/location-info'
import {
  formatElevation,
  formatLength,
  formatAddress,
  formatCoords,
} from '@/services/common/formatting.utils'
import { downloadUrl } from '@/services/utils'

import StreetView from '@/components/info/street-view.vue'

const { t } = useTranslation()
const { locationInfo, isStreetviewActive, routingFeatureTemp } = storeToRefs(
  useInfoStore()
)
const { currentUser } = storeToRefs(useUserManagerStore())

const map = useMap().getOlMap()

const shortUrl: Ref<string | undefined> = ref()
const qrUrl: Ref<string | undefined> = ref()
const elevation: Ref<string | undefined> = ref()
const address: Ref<AddressResult | undefined> = ref()
const clickCoordinateLuref: Ref<Coordinate | undefined> = ref()
const formattedCoordinates: Ref<{ [k: string]: string }> = ref({})
const downloadingRepport: Ref<boolean> = ref(false)
const isInBoxOfLidar: Ref<boolean> = ref(false)
const userRole: Ref<string> = ref('Tous Publics')
const userType: Ref<string> = ref('base')

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
    formattedCoordinates.value = Object.fromEntries(
      Object.entries(INFO_PROJECTIONS).map(([crs, label]) => [
        label,
        formatCoords(location, map.getView().getProjection(), crs),
      ])
    )
    elevation.value =
      infos.elevation === null ? 'N/A' : formatElevation(infos.elevation)
    address.value = infos.address
    isInBoxOfLidar.value = infos.isInBoxOfLidar
  }
}

watch(currentUser, user => {
  userRole.value = user?.role || 'anonymous'
  userType.value = user?.role || 'base'
})

const isRapportForageVirtuelAvailable = computed(() => userRole.value === 'ACT')
const isCyclomediaAvailable = computed(
  () =>
    userType.value === 'etat' ||
    userType.value === 'commune' ||
    userRole.value === 'MinTour'
)
const isImagesObliquesAvailable = computed(() => true)

const lidarUrl = computed(() =>
  clickCoordinateLuref.value
    ? `${import.meta.env.VITE_LIDAR_URL}?COORD_X=${
        clickCoordinateLuref.value[0]
      }&COORD_Y=${clickCoordinateLuref.value[1]}&COORD_Z=${parseInt(
        elevation.value || '0'
      )}`
    : ''
)
const forageUrl = computed(() =>
  clickCoordinateLuref.value
    ? `${import.meta.env.VITE_FORAGE_URL}?x=${
        clickCoordinateLuref.value[0]
      }&y=${clickCoordinateLuref.value[1]}`
    : ''
)
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

function addRoutePoint() {
  if (!locationInfo.value) {
    return
  }
  const point = new Feature(new Point(locationInfo.value))
  if (address.value && address.value.distance <= 100) {
    point.set('label', formatAddress(address.value))
  } else {
    point.set('label', formattedCoordinates.value['Luref'])
  }
  routingFeatureTemp.value = point
}

function toggleStreetview() {
  isStreetviewActive.value = !isStreetviewActive.value
}

async function downloadRapportForageVirtuel() {
  downloadingRepport.value = true
  try {
    await downloadUrl(forageUrl.value, '')
  } catch {
    // TODO harmonize error
    alert('Error downloading forage')
  } finally {
    downloadingRepport.value = false
  }
}

watch(downloadingRepport, downloadingRepport => {
  if (downloadingRepport) {
    map.getViewport().style.cursor = 'wait'
  } else {
    map.getViewport().style.cursor = ''
  }
})
</script>

<template>
  <div class="flex flex-row">
    <div class="grow-[2] flex flex-col content-end">
      <div class="grow"></div>
      <h3 id="short_url_title" class="text-3xl text-white">
        {{ t('Short Url', { ns: 'client' }) }}
      </h3>
      <input
        aria-labelledby="short_url_title"
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
    <h3 class="mt-5 text-3xl text-white">
      {{ t('Location Coordinates', { ns: 'client' }) }}
    </h3>
    <table>
      <tbody class="lux-info-table">
        <tr v-for="(coords, label) in formattedCoordinates" :key="label">
          <th>{{ t(label as string) }}</th>
          <td>{{ coords }}</td>
        </tr>
        <tr>
          <th>{{ t('Elevation') }}</th>
          <td>{{ elevation }}</td>
        </tr>
        <tr>
          <th style="text-align: left">{{ t('Adresse la plus proche') }}</th>
          <td>{{ formatAddress(address) }}</td>
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
        :disabled="downloadingRepport"
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
        :href="lidarUrl"
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
      <button
        data-cy="streetviewOff"
        class="lux-btn mt-3"
        @click="toggleStreetview()"
      >
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
        v-if="!isStreetviewActive"
      >
        <button
          data-cy="streetviewOn"
          class="lux-btn mt-3 no-print"
          @click="toggleStreetview()"
        >
          {{ t('Activer Google Streetview') }}
        </button>
      </div>
    </div>
  </div>
</template>
