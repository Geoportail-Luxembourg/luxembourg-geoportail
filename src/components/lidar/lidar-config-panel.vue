<script setup lang="ts">
import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { useAppStore } from '@/stores/app.store'

import useDrawLidarInteraction from '@/composables/lidar/draw-lidar-interaction.composable'
import { useLidarStore } from '@/stores/lidar.store'

type LangKey = 'fr' | 'en' | 'de' | 'lb'

const appStore = useAppStore()
const { t, i18next } = useTranslation()
const lidarStore = useLidarStore()
const { drawLidarActive, profileWidth, measureActive } = storeToRefs(lidarStore)

// Helper to safely access classification name
function getClassificationName(
  name: Record<LangKey, string>,
  lang: string
): string {
  if (['fr', 'en', 'de', 'lb'].includes(lang)) {
    return name[lang as LangKey]
  }
  return name['en']
}

const classifications =
  lidarStore.lidarConfig.serverConfig.classification_colors

let lidarDrawInteraction: any = useDrawLidarInteraction()

onMounted(() => {
  lidarDrawInteraction.init()
})

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
  lidarDrawInteraction.setMeasureActive()
}

function clearMeasure() {
  measureActive.value = false
  lidarDrawInteraction.clearMeasure()
}

function toggleClassificationCheck(classification: any) {
  classification.visible = (classification.visible + 1) % 2
  lidarDrawInteraction.updateData()
}
</script>

<style scoped>
.btn.active {
  background: #e0e0e0;
}
.checkbox {
  margin-bottom: 0.5em;
}
input[type='number'] {
  background: #fff;
  border: 1px solid #ccc;
  color: #222;
  border-radius: 4px;
  padding: 2px 6px;
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
      <div class="text-white">
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
            style="width: 5em; margin-right: 1em"
          />
          <button class="lux-btn mt-3" @click="resetPlot">
            <span class="fa fa-refresh"></span>
          </button>
        </p>
        <p v-if="drawLidarActive" class="small">
          <em>
            {{
              t(
                'Draw a line on the map to display the corresponding LIDAR profile. Double clic to confirm.'
              )
            }}
          </em>
        </p>
        <!-- TODO : To remove when we are sure we don't want it here-->
        <div
          v-if="
            false &&
            lidarDrawInteraction &&
            lidarDrawInteraction.hasLineFeature()
          "
        >
          <div>
            <button class="lux-btn mt-3" @click="exportCsv">
              {{ t('Export CSV') }}
            </button>
            <button class="lux-btn mt-3" @click="exportPng">
              {{ t('Export PNG') }}
            </button>
            <button class="lux-btn mt-3" @click="exportLas">
              {{ t('Export LAS') }}
            </button>
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
            v-for="(classification, id) in classifications"
            :key="id"
            class="checkbox"
          >
            <label>
              <input
                type="checkbox"
                :checked="classification.visible === 1"
                @change="toggleClassificationCheck(classification)"
              />
              <span>{{
                getClassificationName(classification.name, i18next.language)
              }}</span>
            </label>
          </div>
        </div>
      </div>
    </template>
  </side-panel-layout>
</template>
