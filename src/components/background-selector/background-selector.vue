<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed, Ref, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { IBackgroundLayer } from '@/composables/background-layer/background-layer.model'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'

import BackgroundSelectorItem from './background-selector-item.vue'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'
import { ThemeNodeModel } from '@/composables/themes/themes.model'

const { t, i18next } = useTranslation()
const backgroundLayer = useBackgroundLayer()
const mapStore = useMapStore()
const themeStore = useThemeStore()
const { bgLayer: bgLayerContext, is3dMesh } = storeToRefs(mapStore)

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const isOpen = ref(props.isOpen)
const autoBgLayerSet = ref(false)
const bgLayers: Ref<IBackgroundLayer[]> = ref([])
const activeLayerId = computed(
  () => (bgLayerContext.value?.id as number) ?? backgroundLayer.getNullId()
)
const activeLayerName = computed(
  () => bgLayers.value?.find(layer => layer.id === activeLayerId.value)?.name
)

watch(
  () => themeStore.bgLayers,
  bgLayersContext => {
    bgLayers.value = bgConfigFixture().bg_layers.map(bgl =>
      Object.assign(
        {
          id: bgl.id,
        },
        bgLayersContext.find((l: ThemeNodeModel) => bgl.id === l.id),
        {
          name: bgl.icon_id,
        }
      )
    )
  },
  { immediate: true }
)

watch(
  () => mapStore.bgLayer,
  (bgLayerContext, bgLayerContextOld) => {
    const layersContext = mapStore.layers

    if (
      bgLayerContextOld === undefined &&
      bgLayerContext === null &&
      layersContext?.length === 0
    ) {
      backgroundLayer.setBgLayer(backgroundLayer.defaultSelectedBgId.value)

      if (bgLayerContext === null) {
        autoBgLayerSet.value = true
      }
    }
  }
)

// Fix: after migration to i18next-vue v5.0.0, otherwise, i18next-vue returns empty string as it takes time to init
watch(
  [autoBgLayerSet, () => i18next.isInitialized],
  ([autoBgLayerSet, isInitialized]) => {
    if (autoBgLayerSet && isInitialized) {
      useAlertNotificationsStore().addNotification(
        t(
          "Aucune couche n'étant définie pour cette carte, une couche de fond a automatiquement été ajoutée."
        )
      )
    }
  }
)

function setBackgroundLayer(layer: IBackgroundLayer) {
  backgroundLayer.setBgLayer(layer.id)
  isOpen.value = false
}

function toggleSelector() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div v-if="!is3dMesh" class="flex flex-row-reverse">
    <div
      data-cy="selectedBg"
      class="lux-bg-sel border border-black"
      :class="isOpen === true ? 'hidden' : 'block'"
    >
      <background-selector-item
        :aria-expanded="isOpen"
        bg-title="Select BG layer"
        :bg-name="activeLayerName"
        @click="toggleSelector"
      >
      </background-selector-item>
    </div>
    <div
      data-cy="available-bgs"
      :class="isOpen === true ? 'flex flex-col md:flex-row' : 'hidden'"
    >
      <div
        v-for="layer in bgLayers"
        :key="layer.id"
        class="lux-bg-sel hover:bg-cyan-600"
        :class="
          layer.id === activeLayerId
            ? 'border-red-500 border-2'
            : 'border-black border'
        "
      >
        <background-selector-item
          :bg-name="layer.name"
          @click="setBackgroundLayer(layer)"
        >
        </background-selector-item>
      </div>
    </div>
  </div>
</template>
