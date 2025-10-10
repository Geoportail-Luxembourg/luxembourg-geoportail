<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
const { toggleLidarOpen } = useAppStore()
import useDrawLidarInteraction from '@/composables/lidar/draw-lidar-interaction.composable'
import { useLidarStore } from '@/stores/lidar.store'
const lidarStore = useLidarStore()
const { measureActive } = storeToRefs(lidarStore)
const { t } = useTranslation()
const lidarDrawInteraction = useDrawLidarInteraction()
function exportCsv() {
  lidarDrawInteraction.exportCsv()
  // todo PIWIK
}
function exportPng() {
  lidarDrawInteraction.exportPng()
  // todo PIWIK
}
function exportLas() {
  lidarDrawInteraction.exportLas()
  // todo PIWIK
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
  lidarDrawInteraction.setMeasureActive()
}

function clearMeasure() {
  measureActive.value = false
  lidarDrawInteraction.clearMeasure()
}
</script>
<style lang="css" scoped>
.lidarprofile-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: solid 1px black;
}
.lidar-flex {
  display: flex;
  flex: 1 1 0%;
  height: 100%;
}
.lidar-legend {
  width: 15rem;
  min-width: 15rem;
  max-width: 15rem;
  height: 100%;
  /* background: #f8fafc; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
}
.lidarprofile {
  flex: 1 1 0%;
  position: relative;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div class="lidarprofile-container">
    <div class="close" @click="toggleLidarOpen(false)">&times;</div>
    <div class="lidar-flex">
      <div class="lidar-legend p-2.5 bg-primary text-white">
        <div class="export-tools">
          <div>
            <button
              class="lux-btn mt-3"
              :disabled="
                !(lidarDrawInteraction && lidarDrawInteraction.hasLineFeature())
              "
              @click="exportCsv"
            >
              {{ t('Export CSV') }}
            </button>
            <button
              class="lux-btn mt-3"
              :disabled="
                !(lidarDrawInteraction && lidarDrawInteraction.hasLineFeature())
              "
              @click="exportPng"
            >
              {{ t('Export PNG') }}
            </button>
            <button
              class="lux-btn mt-3"
              :disabled="
                !(lidarDrawInteraction && lidarDrawInteraction.hasLineFeature())
              "
              @click="exportLas"
            >
              {{ t('Export LAS') }}
            </button>
            <div>
              <p>
                <button
                  class="lux-btn mt-3"
                  :class="{ active: measureActive }"
                  :disabled="
                    !(
                      lidarDrawInteraction &&
                      lidarDrawInteraction.hasLineFeature()
                    )
                  "
                  @click="toggleMeasure"
                >
                  {{ t('Take measure') }}
                </button>
                <button
                  class="lux-btn mt-3"
                  @click="clearMeasure"
                  :disabled="
                    !(
                      lidarDrawInteraction &&
                      lidarDrawInteraction.hasLineFeature()
                    )
                  "
                >
                  <span class="fa fa-eraser"></span>
                </button>
              </p>
              <p class="lux-alert-info" v-if="measureActive">
                {{ t('Measure distances on the profile below.') }}
                <em>{{ t('(Deactivates zoom and pan on the profile!)') }}</em>
              </p>
            </div>
          </div>
        </div>
        <hr style="margin-top: 10px" />
        <div class="width-info"></div>
        <div class="lod-info"></div>
        <div class="lidar-info poi-feature"></div>
      </div>
      <div class="lidarprofile">
        <div class="lidar-error"></div>
        <canvas class="lidar-canvas"></canvas>
        <svg
          class="lidar-svg"
          style="fill: #ffff00; position: absolute; z-index: 1"
        ></svg>
      </div>
    </div>
  </div>
</template>
