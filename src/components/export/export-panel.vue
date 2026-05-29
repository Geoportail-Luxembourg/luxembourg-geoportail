<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'
import ExportPanelItem from './export-panel-item.vue'
import useMap from '@/composables/map/map.composable'
import useExportUrl from '@/composables/export-url/export-url.composable'
import { useLocationInfoStore } from '@/stores/location-info.store'

const { t } = useTranslation()
const map = useMap().getOlMap()
const { resolvedHrefs, links } = useExportUrl(map)
const { locationInfoCoords } = storeToRefs(useLocationInfoStore())
</script>

<template>
  <div data-cy="exportPanel">
    <div
      class="absolute bottom-full right-0 top-auto z-20 flex flex-col text-white box-content border border-gray-400 bg-primary md:w-60 overflow-hidden shadow-lg"
    >
      <ul class="divide-y divide-gray-400/50">
        <li v-for="link in links" :key="link.labelKey">
          <ExportPanelItem
            :href="resolvedHrefs[link.labelKey] || ''"
            :label="t(link.labelKey, { ns: 'app' })"
            :description="t(link.labelKey + ' desc', { ns: 'app' })"
            :target="link.target"
          >
            <span class="relative">
              <i
                :class="`fa-solid ${link.icon} w-5 text-lg shrink-0 text-center`"
              ></i>
              <span
                v-if="link.useLocationInfoCoords && locationInfoCoords"
                :title="
                  t('Using selected location info coordinates', { ns: 'app' })
                "
                class="absolute -bottom-0.5 -left-0.5 block size-2.5 rounded-full bg-yellow-400 -translate-x-1/2 ring-2 ring-orange-500"
              ></span>
            </span>
          </ExportPanelItem>
        </li>
      </ul>
    </div>
  </div>
</template>
