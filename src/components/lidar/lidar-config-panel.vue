<script setup lang="ts">
import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useTranslation} from 'i18next-vue'
import Style from 'ol/style/Style'
import VectorLayer from 'ol/layer/Vector'
import LineString from 'ol/geom/LineString'

import { useAppStore } from '@/stores/app.store'

import useDrawLidarInteraction from '@/composables/lidar/draw-lidar-interaction.composable'
import { useLidarStore } from '@/stores/lidar.store'


const appStore = useAppStore()
const { t, i18next } = useTranslation()
const lidarStore = useLidarStore()
const { drawLidarActive, profileWidth } = storeToRefs(lidarStore)


// Props (replace with defineProps if you want to receive from parent)
const map = ref<any>(null)
const url = ref<string | undefined>(undefined)
const config = ref<any>(lidarStore.getLidarConfig())


const measureActive = ref(false)

const classifications = ref<any[]>(config.value.serverConfig.classification_colors || [])

let coordinates: LineString | null = null

let lidarDrawInteraction: any

onMounted(() => {
  lidarDrawInteraction = useDrawLidarInteraction()
})


function exportCsv() {
 //const points = manager.utils.getFlatPointsByDistance(manager.profilePoints) || {}
 // const csvData = manager.utils.getCSVData(points)
  // todo PIWIK
  //saveCsv(csvData, { filename: 'export-lidar.csv' })
  /*if (window._paq) {
    window._paq.push(['setDocumentTitle', 'LidarExportCsv'])
    window._paq.push(['trackPageView'])
  }*/
}

function exportPng() {
  //manager.utils.downloadProfileAsImageFile(getConfig().clientConfig)
  // todo PIWIK
  /*if (window._paq) {
    window._paq.push(['setDocumentTitle', 'LidarExportPNG'])
    window._paq.push(['trackPageView'])
  }*/
}

function exportLas() {
  //manager.getProfileByLOD([], 0, true, 0, true, profileWidth.value)
  // todo PIWIK
  /*if (window._paq) {
    window._paq.push(['setDocumentTitle', 'LidarExportLAS'])
    window._paq.push(['trackPageView'])
  }*/
}

function resetPlot() {
  lidarDrawInteraction.resetPlot()
}

function toggleMeasure() {
  measureActive.value = !measureActive.value
  if (measureActive.value) {
    setMeasureActive()
  } else {
    clearMeasure()
  }
}

function setMeasureActive() {
 /* if (!manager.measure) throw new Error('Missing profile.measure')
  manager.measure.clearMeasure()
  manager.measure.setMeasureActive()*/
}

function clearMeasure() {
 /* if (!manager.measure) throw new Error('Missing profile.measure')
  measureActive.value = false
  manager.measure.clearMeasure()*/
}

function toggleClassificationCheck(classification:any) {
  classification.visible = (classification.visible + 1) % 2
 // manager.getProfileByLOD([], 0, true, config.value.serverConfig.minLOD, false, profileWidth.value)
}
</script>

<style scoped>
.btn.active {
  background: #e0e0e0;
}
.checkbox {
  margin-bottom: 0.5em;
}
</style>

<template>
  <side-panel-layout
  :data-cy-value="'lidarPanel'"
  :close-fn="() => appStore.toggleLidarOpen(false)"
>
    <template v-slot:header>
      <h1>
        {{ t('lidar', { ns: 'client' }) }}
      </h1>
    </template>
  <template v-slot:content>
  <div>
    <p>
      <button
        class="lux-btn mt-3"
        :class="{ active: drawLidarActive }"
        @click="drawLidarActive = !drawLidarActive"
      >
        {{ t('Draw a lidar profile') }}
      </button>
    </p>
    <p>
      {{ t('Profile width') }}
      <input
        type="number"
        min="0"
        max="1000"
        v-model.number="profileWidth"
        style="width: 5em"
      />
      <button class="lux-btn mt-3" @click="resetPlot">
        <span class="fa fa-refresh"></span>
      </button>
    </p>
    <p v-if="drawLidarActive" class="small">
      <em>
        {{ t('Draw a line on the map to dislay the corresponding LIDAR profile. Double clic to confirm.') }}
      </em>
    </p>
    <div v-if="coordinates">
      <div>
        <button class="lux-btn mt-3" @click="exportCsv">{{ t('Export CSV') }}</button>
        <button class="lux-btn mt-3" @click="exportPng">{{ t('Export PNG') }}</button>
        <button class="lux-btn mt-3" @click="exportLas">{{ t('Export LAS') }}</button>
      </div>
      <hr />
      <div>
        <p>
          <button
            class="lux-btn mt-3"
            :class="{ active: measureActive }"
            @click="toggleMeasure"
          >
            {{ t('Take measure') }}
          </button>
          <button class="lux-btn mt-3" @click="clearMeasure">
            <span class="fa fa-eraser"></span>
          </button>
        </p>
        <p class="small">
          {{ t('Measure distances on the profile below.') }}
          <em>{{ t('(Deactivates zoom and pan on the profile!)') }}</em>
        </p>
      </div>
    </div>
    <hr />
    <div>
      <div>{{ t('Classes') }}</div>
      <div
        v-for="classification in classifications"
        :key="classification.id"
        class="checkbox"
      >
        <label>
          <input
            type="checkbox"
            :checked="classification.visible === 1"
            @change="toggleClassificationCheck(classification)"
          />
          <span>{{ classification.name[i18next.language] }}</span>
        </label>
      </div>
    </div>
  </div>
  </template>
</side-panel-layout>
</template>