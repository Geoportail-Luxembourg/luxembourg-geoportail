<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import Control from 'ol/control/Control'
import { Options } from 'ol/control/Control'

import useControl from '@/composables/control/control.composable'
import { useMapStore } from '@/stores/map.store'

const mapStore = useMapStore()
const { t } = useTranslation()
const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    tipLabel?: string
  }>(),
  {
    className: 'map-3d-button',
    label: '\ue057',
    tipLabel: '3d',
  }
)
const controlElement = ref(null)

onMounted(() =>
  useControl(Control, {
    ...props,
    ...{ target: controlElement },
  } as unknown as Options)
)

const toggle3d = () => {
  mapStore.setIs3dActive(!mapStore.is3dActive)
}
</script>

<template>
  <div
    ref="controlElement"
    :class="`${props.className} ${CLASS_UNSELECTABLE} ${CLASS_CONTROL} ${
      mapStore.is3dActive ? 'active' : ''
    }`"
  >
    <button :title="t(props.tipLabel)" @click="toggle3d">
      {{ props.label }}
    </button>
  </div>
</template>
