<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { useAppStore } from '@/stores/app.store'

const { t } = useTranslation()
const appStore = useAppStore()
</script>

<template>
  <side-panel-layout
    :data-cy-value="'infoPanel'"
    :close-fn="() => appStore.toggleInfoOpen(false)"
  >
    <template v-slot:header>
      <h1>
        {{ t('infos', { ns: 'client' }) }}
      </h1>
    </template>

    <template v-slot:content>
      <div class="text-white">
        <ul class="list-disc pl-10">
          <li>
            {{ t(`A right click (tap and hold on mobile)...`, { ns: 'app' }) }}
          </li>
          <li>
            {{ t(`A short click (tap on mobile)...`, { ns: 'app' }) }}
          </li>
        </ul>
      </div>
    </template>
  </side-panel-layout>
</template>
