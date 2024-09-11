<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useDrawStore } from '@/stores/draw.store'

import ButtonText from './button-text.vue'
import { onBeforeUnmount } from 'vue'

const { t } = useTranslation()
const drawStore = useDrawStore()
const { toggleActiveState, setActiveState } = drawStore
const { drawStateActive } = storeToRefs(drawStore)

onBeforeUnmount(() => {
  setActiveState(undefined)
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
            drawStateActive === 'drawPoint' || drawStateActive === 'editPoint'
          "
          @click="() => toggleActiveState('drawPoint')"
          data-cy="drawPointButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Label', { ns: 'client' })"
          :active="
            drawStateActive === 'drawLabel' || drawStateActive === 'editLabel'
          "
          @click="() => toggleActiveState('drawLabel')"
          data-cy="drawLabelButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Line', { ns: 'client' })"
          :active="
            drawStateActive === 'drawLine' || drawStateActive === 'editLine'
          "
          @click="() => toggleActiveState('drawLine')"
          data-cy="drawLineButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Polygon', { ns: 'client' })"
          :active="
            drawStateActive === 'drawPolygon' ||
            drawStateActive === 'editPolygon'
          "
          @click="() => toggleActiveState('drawPolygon')"
          data-cy="drawPolygonButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Circle', { ns: 'client' })"
          :active="
            drawStateActive === 'drawCircle' || drawStateActive === 'editCircle'
          "
          @click="() => toggleActiveState('drawCircle')"
          data-cy="drawCircleButton"
        >
        </button-text>
      </li>
    </ul>
    <ul
      class="absolute bottom-full top-auto z-10 pl-[130px] pb-16 w-[326px]"
      v-if="drawStateActive === 'drawLine' || drawStateActive === 'editLine'"
      data-cy="followRoads"
    >
      <li
        class="flex flex-row justify-center text-white bg-tertiary hover:bg-primary py-2 box-content border-y border-x border-gray-400"
      >
        <label>
          <input type="checkbox" />
          {{ t('Suivre la route', { ns: 'client' }) }}
        </label>
      </li>
    </ul>
  </div>
</template>
