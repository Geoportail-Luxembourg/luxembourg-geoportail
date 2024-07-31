<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import DrawPanel from '@/components/draw/draw-panel.vue'

import { useAppStore } from '@/stores/app.store'

const { t } = useTranslation()
const appStore = useAppStore()

function clickOpenMap() {
  alert('TODO: clickOpenMap')
}

function clickCreateNewMap() {
  alert('TODO: clickCreateNewMap')
}
</script>

<template>
  <side-panel-layout
    :data-cy-value="'myMapsPanel'"
    :close-fn="() => appStore.toggleMyMapsOpen(false)"
  >
    <template v-slot:header>
      <h1>
        {{ t('My Maps', { ns: 'client' }) }}
      </h1>
    </template>

    <template v-slot:content>
      <div class="text-white">
        {{ t('Create, save and share your own maps.', { ns: 'client' }) }}
      </div>

      <div class="flex justify-center flex-col items-center">
        <button class="lux-btn mt-3" @click="clickOpenMap">
          {{ t('Ouvrir une carte', { ns: 'client' }) }}
        </button>
        <button class="lux-btn mt-3" @click="clickCreateNewMap">
          {{ t('Créer une nouvelle carte', { ns: 'client' }) }}
        </button>
      </div>

      <DrawPanel />
    </template>
  </side-panel-layout>
</template>
