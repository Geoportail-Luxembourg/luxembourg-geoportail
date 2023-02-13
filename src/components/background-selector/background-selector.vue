<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed, Ref, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import {
  BLANK_BACKGROUNDLAYER,
  IBackgroundLayer,
} from '@/composables/background-layer/background-layer.model'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'
import { useThemeStore } from '@/stores/config.store'
import { useStyleStore } from '@/stores/style.store'
import { useMapStore } from '@/stores/map.store'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import BackgroundSelectorItem from './background-selector-item.vue'
import { bgConfig } from '@/__fixtures__/background.config.fixture'
import { ThemeNodeModel } from '@/composables/themes/themes.model'

const { t } = useTranslation()
const backgroundLayer = useBackgroundLayer()
const mapStore = useMapStore()
const themeStore = useThemeStore()
const styleStore = useStyleStore()
const { bgLayer: bgLayerContext } = storeToRefs(mapStore)

statePersistorLayersService.bootstrapBgLayer()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const isOpen = ref(props.isOpen)
const bgLayers: Ref<IBackgroundLayer[]> = ref([])
const activeLayerId = computed(
  () => (bgLayerContext.value?.id as number) ?? BLANK_BACKGROUNDLAYER.id
)
const activeLayerName = computed(
  () => bgLayers.value?.find(layer => layer.id === activeLayerId.value)?.name
)

watch(
  () => themeStore.bgLayers,
  bgLayersContext => {
    bgLayers.value = (
      bgLayersContext.length > 0
        ? bgLayersContext.map((l: ThemeNodeModel) =>
            Object.assign(Object.assign({}, l), {
              name: bgConfig.bg_layers.find(bgl => bgl.id == l.id)?.name,
            })
          )
        : []
    ).concat([BLANK_BACKGROUNDLAYER])
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
      backgroundLayer.setBgLayer(backgroundLayer.getDefaultSelectedId())

      if (bgLayerContext === null) {
        // TODO: implement alert message
        console.log(
          t(
            "Aucune couche n'étant définie pour cette carte, une couche de fond a automatiquement été ajoutée.",
            { ns: 'client' }
          )
        )
      }
    }
  }
)

watch(
  () => styleStore.styledBgLayers,
  styles => {
    styles?.forEach(config => {
      backgroundLayer.updateMvtData(config.mvtData)
    })
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
  <div class="flex flex-row-reverse">
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
