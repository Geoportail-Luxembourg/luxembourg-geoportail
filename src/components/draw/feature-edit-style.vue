<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawFeature } from '@/stores/draw.store.model'

import FeatureEditStyleCircle from './feature-edit-style-circle.vue'
import FeatureEditStylePoint from './feature-edit-style-point.vue'
import FeatureEditStyleLine from './feature-edit-style-line.vue'
import FeatureEditStylePolygon from './feature-edit-style-polygon.vue'

const { t } = useTranslation()
const props = defineProps<{
  feature: DrawFeature
}>()

const styleComponents = {
  FeatureEditStyleCircle,
  FeatureEditStyleLine,
  FeatureEditStylePoint,
  FeatureEditStylePolygon,
}
// const currentStyleComponent: Ref<keyof typeof styleComponents | undefined> =
//   ref(undefined)

const currentStyleComponent = computed(() => {
  const featureType = props.feature.featureType
  if (featureType === 'drawnPoint') {
    return 'FeatureEditStylePoint'
  }

  if (featureType === 'drawnCircle') {
    return 'FeatureEditStyleCircle'
  }

  if (featureType === 'drawnLine') {
    return 'FeatureEditStyleLine'
  }

  if (featureType === 'drawnPolygon') {
    return 'FeatureEditStylePolygon'
  }

  return undefined
})

function onClickChangeOrientation() {}
</script>

<template>
  {{ t('Style your drawing') }}

  <component
    :is="styleComponents[currentStyleComponent as keyof typeof styleComponents]"
    :feature="feature"
  >
    <template v-slot:color>
      <div class="flex gap-1 items-center">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Color') }}
        </label>
        <div class="md:w-2/3">
          <input class="cursor-pointer" type="color" value="" />
        </div>
      </div>
    </template>

    <template v-slot:size>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Size') }}
        </label>
        <div class="md:w-2/3">
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
          />
          <input class="w-[50px]" type="number" min="0" max="40" step="1" />
        </div>
      </div>
    </template>

    <template v-slot:angle>
      <div class="flex gap-1 items-center mt-1 mb-2">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Angle') }}
        </label>
        <div class="md:w-2/3">
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
          />
          <input class="w-[50px]" type="number" min="0" max="40" step="1" />
        </div>
      </div>
    </template>

    <!-- Symbole for Point -->
    <template v-slot:symbole>
      <div class="flex gap-1 items-center mt-1 mb-2">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Style') }}
        </label>
        <div>
          <span>label style todo</span>
        </div>
      </div>
    </template>

    <!-- Style for line -->
    <template v-slot:style>
      <div class="flex gap-1 items-center mt-1 mb-2">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Style') }}
        </label>
        <div>
          <span>label style todo</span>
        </div>
      </div>
    </template>

    <template v-slot:lineWidth>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Stroke width') }}
        </label>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
          />
          <input type="number" min="0" max="40" step="1" />
        </div>
      </div>
    </template>

    <template v-slot:transparency>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Transparence') }}
        </label>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
          />
          <input type="number" min="0" max="40" step="1" />
        </div>
      </div>
    </template>

    <template v-slot:orientation>
      <div class="flex gap-1 items-center mt-1 mb-2">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Show orientation') }}
        </label>
        <div>
          <input type="checkbox" />
        </div>
      </div>

      <div class="flex gap-1 items-center mt-1 mb-2">
        <button class="lux-btn-primary" @click="onClickChangeOrientation">
          {{ t('Changer sens de la ligne') }}
        </button>
      </div>
    </template>
  </component>

  <slot name="footer"></slot>
</template>

<style></style>
