<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useDrawStore } from '@/stores/draw.store'
import useDrawRoute from '@/composables/draw/draw-route.composable'

import ButtonText from './button-text.vue'

const { t } = useTranslation()
const drawStore = useDrawStore()
const {
  toggleDrawCircle,
  toggleDrawLabel,
  toggleDrawLine,
  toggleDrawPolygon,
  toggleDrawPoint,
  setDrawActiveState,
} = drawStore
const { drawStateActive, editStateActive, followRoads } = storeToRefs(drawStore)

// Initialize the composable - watchers inside will handle coordination
useDrawRoute()

onBeforeUnmount(() => {
  setDrawActiveState(undefined)
})
</script>

<template>
  <div data-cy="toolbarDraw">
    <ul
      class="absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400"
    >
      <li>
        <button-text
          :label="t('Draw Point', { ns: 'client' })"
          :active="
            drawStateActive === 'drawPoint' || editStateActive === 'editPoint'
          "
          @click="toggleDrawPoint"
          data-cy="drawPointButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Label', { ns: 'client' })"
          :active="
            drawStateActive === 'drawLabel' || editStateActive === 'editLabel'
          "
          @click="toggleDrawLabel"
          data-cy="drawLabelButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Line', { ns: 'client' })"
          :active="
            drawStateActive === 'drawLine' || editStateActive === 'editLine'
          "
          @click="toggleDrawLine"
          data-cy="drawLineButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Polygon', { ns: 'client' })"
          :active="
            drawStateActive === 'drawPolygon' ||
            editStateActive === 'editPolygon'
          "
          @click="toggleDrawPolygon"
          data-cy="drawPolygonButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Circle', { ns: 'client' })"
          :active="
            drawStateActive === 'drawCircle' || editStateActive === 'editCircle'
          "
          @click="toggleDrawCircle"
          data-cy="drawCircleButton"
        >
        </button-text>
      </li>
    </ul>
    <ul
      class="absolute bottom-full top-auto z-10 pl-[130px] pb-16 w-[326px]"
      v-if="drawStateActive === 'drawLine' || editStateActive === 'editLine'"
      data-cy="followRoads"
    >
      <li
        class="flex flex-row justify-center text-white bg-tertiary hover:bg-primary py-2 box-content border-y border-x border-gray-400"
      >
        <label class="cursor-pointer">
          <input
            type="checkbox"
            v-model="followRoads"
            :disabled="editStateActive === 'editLine'"
            class="mr-2 cursor-pointer"
          />
          {{ t('Suivre la route', { ns: 'client' }) }}
        </label>
      </li>
    </ul>
  </div>
</template>
