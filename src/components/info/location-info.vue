<script setup lang="ts">
import { computed, Ref, ref, watch, VNodeRef } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { AddressResult } from '@/stores/location-info.store.model'
import { Coordinate } from 'ol/coordinate'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import useMap from '@/composables/map/map.composable'
import useLocationInfo from '@/composables/info/location-info.composable'
import { queryInfos, INFO_PROJECTIONS } from '@/services/info/location-info'
import {
  formatElevation,
  formatLength,
  formatAddress,
  formatCoords,
} from '@/services/common/formatting.utils'
import { downloadUrl } from '@/services/utils'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'

import StreetView from '@/components/info/street-view.vue'
import { usePrintStore } from '@/stores/print.store'
import { getQRUrl } from '@/services/url.utils'

const { t } = useTranslation()
const {
  locationInfoCoords,
  locationInfoInfos,
  isStreetviewActive,
  routingFeatureTemp,
} = storeToRefs(useLocationInfoStore())
const { currentUser } = storeToRefs(useUserManagerStore())
const { addNotification } = useAlertNotificationsStore()

const map = useMap().getOlMap()

const shortUrl: Ref<string | undefined> = ref()
const qrUrl: Ref<string | undefined> = ref()
const elevation: Ref<string | undefined> = ref()
const address: Ref<AddressResult | undefined> = ref()
const clickCoordinateLuref: Ref<Coordinate | undefined> = ref()
const formattedCoordinates: Ref<{ [k: string]: string }> = ref({})
const downloadingRepport: Ref<boolean> = ref(false)
const isInBoxOfLidar: Ref<boolean> = ref(false)
const userRole: Ref<string> = ref('ACT') // or 'Tous Publics'
const userType: Ref<string> = ref('base')

// initialise map listeners for location info
useLocationInfo()
// initial load of position infos if locationInfoCoords is not initially undefined
// async function, no need to await the completion, DOM will be updated via refs
updateInfo(locationInfoCoords.value)

watch(locationInfoCoords, updateInfo)

async function updateInfo(location: Coordinate | undefined) {
  if (location) {
    locationInfoInfos.value = await queryInfos(
      location,
      map.getView().getProjection()
    )
    shortUrl.value = locationInfoInfos.value.shortUrl
    qrUrl.value = getQRUrl(locationInfoInfos.value.shortUrl)
    clickCoordinateLuref.value = locationInfoInfos.value.clickCoordinateLuref
    formattedCoordinates.value = Object.fromEntries(
      Object.entries(INFO_PROJECTIONS).map(([crs, label]) => [
        label,
        formatCoords(location, map.getView().getProjection(), crs),
      ])
    )
    elevation.value =
      locationInfoInfos.value.elevation === null
        ? 'N/A'
        : formatElevation(locationInfoInfos.value.elevation)
    address.value = locationInfoInfos.value.address
    isInBoxOfLidar.value = locationInfoInfos.value.isInBoxOfLidar
  }
}

watch(currentUser, user => {
  userRole.value = user?.role || 'anonymous'
  userType.value = user?.role || 'base'
})

// For print, save ref to element to access content in print composable
const { locationInfoPrintableRef } = storeToRefs(usePrintStore())
const setPrintableRef = (el: VNodeRef | undefined) => {
  return (locationInfoPrintableRef.value = el)
}

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
  if (!locationInfoCoords.value) {
    return
  }
  const point = new Feature(new Point(locationInfoCoords.value))
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
    addNotification(
      t('An error occurred while downloading forage.'),
      AlertNotificationType.ERROR
    )
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
  <div :ref="setPrintableRef">
    <!-- Url and QR code image -->
    <div class="flex flex-row">
      <div class="no-print grow-[2] flex flex-col justify-end content-end">
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

    <!-- Coordinates -->
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
            <td>{{ formatLength(address?.distance || null, 0) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Forage, obliques, lidar buttons -->
  <div>
    <button
      v-if="isRapportForageVirtuelAvailable"
      :disabled="downloadingRepport"
      class="lux-btn mt-1"
      @click="downloadRapportForageVirtuel()"
    >
      {{ t('Rapport forage virtuel') }}
    </button>
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

  <!-- Streetview -->
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
