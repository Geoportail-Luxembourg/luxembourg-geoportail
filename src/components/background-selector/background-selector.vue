<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed, Ref, ref, watch } from 'vue'
import {
  BLANK_BACKGROUNDLAYER,
  IBackgroundLayer,
} from '../../services/background-layer/background-layer.model'
import { backgroundLayerService } from '../../services/background-layer/background-layer.service'
import BackgroundSelectorItem from './background-selector-item.vue'
import { useThemeStore } from '../../stores/config.store'
import { useMapStore } from '../../stores/map.store'

const { i18next } = useTranslation()
const mapStore = useMapStore()
const themeStore = useThemeStore()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },

  activeLayerId: {
    type: Number,
  },
})

const isOpen = ref(props.isOpen)
const bgLayers: Ref<IBackgroundLayer[]> = ref([])
const activeLayerId = ref(props.activeLayerId)
const activeLayerName = computed(
  () => bgLayers.value.find((layer) => layer.id === activeLayerId.value)?.name
)

watch(
  [() => themeStore.bgLayers, () => mapStore.layers],
  ([bgLayersContext, layersContext]) => {
    if (props.activeLayerId === void 0) {
      backgroundLayerService.setBgLayer(
        backgroundLayerService.getDefaultSelectedId()
      )

      if (layersContext.length === 0) {
        // TODO: implement alert message
        console.log(
          i18next.t(
            "Aucune couche n'étant définie pour cette carte, une couche de fond a automatiquement été ajoutée.",
            { ns: 'client' }
          )
        )
      }
    }

    bgLayers.value =
      bgLayersContext.length > 0
        ? backgroundLayerService.getBgLayersFromConfig()
        : [BLANK_BACKGROUNDLAYER]
  }
)

watch(
  [() => mapStore.bgLayer, () => themeStore.bgLayers],
  ([bgLayerContext]) =>
    (activeLayerId.value =
      (bgLayerContext?.id as number) ?? BLANK_BACKGROUNDLAYER.id)
)

function setBackgroundLayer(layer: IBackgroundLayer) {
  backgroundLayerService.setBgLayer(layer.id)
  isOpen.value = false
}

function toggleSelector() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="flex flex-row-reverse">
    <div
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
    <div :class="isOpen === true ? 'flex flex-col md:flex-row' : 'hidden'">
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
