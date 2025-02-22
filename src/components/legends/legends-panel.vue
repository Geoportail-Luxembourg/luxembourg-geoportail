<script setup lang="ts">
import { computed, onUnmounted, onActivated, Ref, ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import useLayers from '@/composables/layers/layers.composable'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { LayerId } from '@/stores/map.store.model'

import LegendItem from './legend-item.vue'

const { t } = useTranslation()
const appStore = useAppStore()
const mapStore = useMapStore()
const layersService = useLayers()
const { layers, bgLayer } = storeToRefs(mapStore)
const layersReversed = computed(() => [...layers.value].reverse()) // copy layers for inversion in UI, otherwise will modify current array
const layersLegendsStatus: Ref<Map<LayerId, boolean>> = ref(new Map())
const someLegendExists = ref(false)

watchEffect(
  () =>
    (someLegendExists.value = [...layersLegendsStatus.value].some(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([layerId, hasLegend]) => hasLegend
    ))
)

onUnmounted(() => layersLegendsStatus.value.clear())
onActivated(() => layersLegendsStatus.value.clear())
</script>

<template>
  <side-panel-layout
    :data-cy-value="'legendsPanel'"
    :close-fn="() => appStore.toggleLegendsOpen(false)"
  >
    <template v-slot:header>
      <h1>
        {{ t('Legends') }}
      </h1>
    </template>

    <template v-slot:content>
      <div class="lux-legends absolute">
        <!-- When no legend exist for layers -->
        <div v-if="!someLegendExists" class="text-white">
          {{
            t("Aucune légende n'est disponible pour les couches sélectionnées.")
          }}
        </div>

        <!-- When some of the layers have legend -->
        <legend-item
          v-for="layer in layersReversed"
          data-cy="legendLayer"
          class="pt-10"
          :key="layer.id"
          :layer="layer"
          @has-legend="
            (hasLegend: boolean) => layersLegendsStatus.set(layer.id, hasLegend)
          "
          @removed-legend="() => layersLegendsStatus.delete(layer.id)"
        >
          <template #title>
            <h1 class="pb-5">
              {{ t(layersService.getLayerCurrentLabel(layer)) }}
            </h1>
          </template>
        </legend-item>

        <!-- Legend for background layer if any -->
        <legend-item
          v-if="bgLayer"
          data-cy="legendBgLayer"
          class="pt-10"
          :key="bgLayer.id"
          :layer="bgLayer"
        >
          <template #title>
            <h1 class="pb-5">
              {{ t(layersService.getLayerCurrentLabel(bgLayer)) }}
            </h1>
          </template>
        </legend-item>
      </div>
    </template>
  </side-panel-layout>
</template>
