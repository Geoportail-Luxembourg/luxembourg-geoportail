<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { useAppStore } from '@/stores/app.store'
import StyleSelector from './style-selector.vue'

const { t } = useTranslation()
const appStore = useAppStore()
</script>

<template>
  <side-panel-layout
    :data-cy-value="'stylePanel'"
    :close-fn="appStore.closeStyleEditorPanel"
  >
    <template v-slot:header>
      <h1>
        {{ t('Vector tiles editor', { ns: 'client' }) }}
      </h1>
    </template>

    <template v-slot:content>
      <style-selector />
    </template>
  </side-panel-layout>
</template>
