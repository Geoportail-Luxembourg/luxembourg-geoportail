<script setup lang="ts">
import { ShallowRef, ref, shallowRef, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import Control from 'ol/control/Control'

import useControl from '@/composables/control/control.composable'
import ElevationElement from '@/components/infobar-content/elevation-element.vue'
import MouseCoordinatesControl from '@/components/map-controls/mouse-coordinates-control.vue'
import ProjectionSelector from '@/components/infobar-content/projection-selector.vue'
import ScaleSelector from '@/components/infobar-content/scale-selector.vue'
import ScaleLineControl from '@/components/map-controls/scale-line-control.vue'

const { t } = useTranslation()
const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    tipLabel?: string
  }>(),
  {
    className: 'infobar-button',
    label: '\ue600',
    tipLabel: 'Info',
  }
)
const controlElement = ref(null)
const isOpen: ShallowRef<boolean> = shallowRef(false)

onMounted(() =>
  useControl(Control, { ...props, ...{ target: controlElement } })
)

function toggleDropdown(forceOpen?: boolean) {
  isOpen.value = forceOpen === void 0 ? !isOpen.value : forceOpen
}

function onClickOpenBtn(event: MouseEvent) {
  event.stopImmediatePropagation()
  toggleDropdown()
}
</script>

<template>
  <div
    class="flex flex-row-reverse lux-infobar-wrapper"
    :class="`${CLASS_UNSELECTABLE} ${CLASS_CONTROL}`"
  >
    <div ref="controlElement" :class="`${props.className}`">
      <button
        :title="t(props.tipLabel)"
        @click="onClickOpenBtn"
        class="ol-control-button"
      >
        {{ props.label }}
      </button>
    </div>

    <div class="lux-infobar-content pl-[2px] pr-3" v-show="isOpen">
      <scale-selector class="scale-select hidden-3d w-28" />
      <scale-line-control class="hidden-3d px-1" />
      <projection-selector class="w-28 relative" />
      <mouse-coordinates-control class="w-44" />
      <elevation-element />
    </div>
  </div>
</template>
