<script setup lang="ts">
import { ShallowRef, shallowRef, computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import useLayers from '@/composables/layers/layers.composable'
import { Layer } from '@/stores/map.store.model'

const props = defineProps<{
  layer: Layer
  isOpen: boolean
  isLayerComparatorOpen: boolean
  displayLayerComparatorOpen: boolean
}>()
const emit = defineEmits(['changeOpacity', 'clickToggleLayerComparator'])
const { t } = useTranslation()
const layersService = useLayers()
const layerLabel = computed(() =>
  t(layersService.getLayerCurrentLabel(props.layer), { ns: 'client' })
)

const opacity: ShallowRef<number | undefined> = shallowRef(
  (props.layer?.opacity ?? 1) * 100
)
const prevOpacity: ShallowRef<number | undefined> = shallowRef(
  ((props.layer?.previousOpacity ?? opacity.value) as number) * 100
)

function onToggleVisibility() {
  if (opacity.value === 0) {
    opacity.value = prevOpacity.value
  } else {
    prevOpacity.value = opacity.value
    opacity.value = 0
  }

  dispatchChangeOpacity()
}

function onChangeOpacity(event: Event) {
  if (event.target) {
    opacity.value = parseInt((event.target as HTMLInputElement).value)

    dispatchChangeOpacity()
  }
}

function onToggleLayerComparator() {
  emit('clickToggleLayerComparator', props.layer)
}

function dispatchChangeOpacity() {
  emit('changeOpacity', props.layer, opacity.value)
}
</script>

<template>
  <div
    class="lux-layer-manager-item-content"
    :class="isOpen ? 'h-6' : 'h-0'"
    :id="`layer-manager-item-content-${layer.id}`"
  >
    <button
      class="w-5 fa-solid"
      role="switch"
      :aria-checked="opacity === 0"
      :class="opacity === 0 ? 'fa-eye-slash' : 'fa-eye'"
      :title="
        t('Toggle layer opacity for {{layerName}}', {
          ns: 'app',
          layerName: layerLabel,
        })
      "
      @click="onToggleVisibility"
    ></button>
    <input
      :id="`${layer.id}-steps-range`"
      type="range"
      min="0"
      max="100"
      :value="opacity"
      step="25"
      @change="onChangeOpacity"
      class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
      :aria-label="
        t('Change opacity for {{layerName}}', {
          ns: 'app',
          layerName: layerLabel,
        })
      "
    />
    <button
      v-if="displayLayerComparatorOpen"
      role="switch"
      class="fa ml-auto text-sm cursor-pointer"
      :class="isLayerComparatorOpen ? 'fa-adjust' : 'fa-circle'"
      :aria-checked="isLayerComparatorOpen"
      :aria-label="
        t('Toggle layer comparator for {{ layerName }}', {
          ns: 'app',
          layerName: layerLabel,
        })
      "
      @click="onToggleLayerComparator"
    ></button>
  </div>
</template>
