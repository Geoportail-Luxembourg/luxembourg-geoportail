<script setup lang="ts">
import { ref } from 'vue'
import ButtonText from './button-text.vue'
import { useTranslation } from 'i18next-vue'
import useDraw from '@/composables/draw/draw.composable'

const { t } = useTranslation()
const drawLineActive = ref(false)
const draw = useDraw()
</script>
<template>
  <div data-cy="toolbarDraw">
    <ul
      class="absolute bottom-full top-auto z-20 flex flex-row justify-start divide-y-0 divide-x divide-gray-400 divide-solid box-content border-y-0 border-x border-gray-400"
    >
      <li>
        <button-text
          :label="t('Draw Point', { ns: 'client' })"
          @click="() => draw.toggleDrawPoint()"
        >
        </button-text>
      </li>
      <li>
        <button-text :label="t('Label', { ns: 'client' })"> </button-text>
      </li>
      <li>
        <button-text
          :label="t('Line', { ns: 'client' })"
          @click="() => (drawLineActive = !drawLineActive)"
          data-cy="drawLineButton"
        >
        </button-text>
      </li>
      <li>
        <button-text :label="t('Polygon', { ns: 'client' })"> </button-text>
      </li>
      <li>
        <button-text :label="t('Circle', { ns: 'client' })"> </button-text>
      </li>
    </ul>
    <ul
      class="absolute bottom-full top-auto z-10 pl-[130px] pb-16 w-[326px]"
      v-if="drawLineActive"
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
