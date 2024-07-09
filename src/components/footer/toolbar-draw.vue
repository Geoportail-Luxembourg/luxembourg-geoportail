<script setup lang="ts">
import ButtonText from './button-text.vue'
import { useTranslation } from 'i18next-vue'
import useDraw from '@/composables/draw/draw.composable'
import { useDrawStore } from '@/stores/draw.store'
import { storeToRefs } from 'pinia'

const { t } = useTranslation()
const { toggleActiveState } = useDrawStore()
const { drawStateActive } = storeToRefs(useDrawStore())
// keep logic in composable
useDraw()
</script>
<template>
  <div data-cy="toolbarDraw">
    <ul
      class="absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400"
    >
      <li>
        <button-text
          :label="t('Draw Point', { ns: 'client' })"
          :active="drawStateActive === 'drawPoint'"
          @click="() => toggleActiveState('drawPoint')"
          data-cy="drawPointButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Label', { ns: 'client' })"
          :active="drawStateActive === 'drawLabel'"
          @click="() => toggleActiveState('drawLabel')"
          data-cy="drawLabelButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Line', { ns: 'client' })"
          :active="drawStateActive === 'drawLine'"
          @click="() => toggleActiveState('drawLine')"
          data-cy="drawLineButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Polygon', { ns: 'client' })"
          :active="drawStateActive === 'drawPolygon'"
          @click="() => toggleActiveState('drawPolygon')"
          data-cy="drawPolygonButton"
        >
        </button-text>
      </li>
      <li>
        <button-text
          :label="t('Circle', { ns: 'client' })"
          :active="drawStateActive === 'drawCircle'"
          @click="() => toggleActiveState('drawCircle')"
          data-cy="drawCircleButton"
        >
        </button-text>
      </li>
    </ul>
    <ul
      class="absolute bottom-full top-auto z-10 pl-[130px] pb-16 w-[326px]"
      v-if="drawStateActive === 'drawLine'"
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
