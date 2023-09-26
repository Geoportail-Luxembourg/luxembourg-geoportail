<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'

import Control from 'ol/control/Control'
import useControl from '@/composables/control/control.composable'
import { onMounted } from 'vue'

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
  useControl(Control, { ...props, ...{ target: controlElement } })
)

const toggle3d = () => {
  mapStore.is_3d_active = !mapStore.is_3d_active
}
</script>

<template>
  <div
    ref="controlElement"
    :class="`tracker-off ${
      props.className
    } ${CLASS_UNSELECTABLE} ${CLASS_CONTROL} ${
      mapStore.is_3d_active ? 'map-3d-selected' : ''
    }`"
  >
    <button :title="t(props.tipLabel)" @click="toggle3d">
      {{ props.label }}
    </button>
  </div>
</template>
