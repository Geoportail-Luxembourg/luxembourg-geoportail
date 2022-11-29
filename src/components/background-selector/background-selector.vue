<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
const { t, i18next } = useTranslation()
import { combineLatest, map } from 'rxjs'
import { computed, Ref, ref } from 'vue'
import {
  BLANK_BACKGROUNDLAYER,
  IBackgroundLayer,
} from '../../services/background-layer/background-layer.model'
import { backgroundLayerService } from '../../services/background-layer/background-layer.service'
import { themesService } from '../../services/themes/themes.service'
import { mapState } from '../../states/map/map.state'
import BackgroundSelectorItem from './background-selector-item.vue'

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

let bgLayers: Ref<IBackgroundLayer[]> = ref([])

combineLatest([themesService.bgLayers$, mapState.layers$])
  .pipe(
    map(([bgLayers, layers]) => {
      if (props.activeLayerId === void 0) {
        backgroundLayerService.setBgLayer(
          backgroundLayerService.getDefaultSelectedId()
        )

        if (layers.length === 0) {
          // TODO: implement alert message
          console.log(
            i18next.t(
              "Aucune couche n'étant définie pour cette carte, une couche de fond a automatiquement été ajoutée.",
              { ns: 'client' }
            )
          )
        }
      }

      return bgLayers.length > 0
        ? backgroundLayerService.getBgLayersFromConfig()
        : [BLANK_BACKGROUNDLAYER]
    })
  )
  .subscribe((layers) => (bgLayers.value = layers))

function setBackgroundLayer(layer: IBackgroundLayer) {
  backgroundLayerService.setBgLayer(layer.id)
  isOpen.value = false
}

function toggleSelector() {
  isOpen.value = !isOpen.value
}

let activeLayerId = ref(props.activeLayerId)

combineLatest([mapState.bgLayer$, themesService.bgLayers$])
  .pipe(map(([layer]) => (layer?.id as number) ?? BLANK_BACKGROUNDLAYER.id))
  .subscribe((id) => (activeLayerId.value = id))

const activeLayerName = computed(
  () => bgLayers.value.find((layer) => layer.id === activeLayerId.value)?.name
)
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
