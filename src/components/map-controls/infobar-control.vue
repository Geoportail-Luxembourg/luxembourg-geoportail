<script setup lang="ts">
import { ShallowRef, ref, shallowRef, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import Control from 'ol/control/Control'

import useControl from '@/composables/control/control.composable'
import ScaleSelector from '@/components/infobar-content/scale-selector.vue'

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
      <button :title="t(props.tipLabel)" @click="onClickOpenBtn">
        {{ props.label }}
      </button>
    </div>

    <div class="lux-infobar-content" :class="isOpen ? '' : 'hidden'">
      <div class="scale-select hidden-3d w-auto">
        <scale-selector />
      </div>
      <div class="scaleline-select hidden-3d">
        <!-- <app-scaleline app-scaleline-map="::ctrl.map"></app-scaleline> -->
      </div>
      <!-- <app-projectionselector app-projectionselector-map="::ctrl.map"></app-projectionselector> -->
      <!-- <div ng-if="!ctrl.ngeoNetworkStatus.isDisconnected()" class="elevation-service hidden-xs hidden-sm">
          <app-elevation app-elevation-map="::ctrl.map" app-elevation-active="ctrl.infobarOpen"></app-elevation>
        </div> -->
    </div>
  </div>
</template>
