<script setup lang="ts">
import { computed, inject } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import RangeInput from '@/components/common/range-input/range-input.vue'

import FeatureEditStyleCircle from './feature-edit-style-circle.vue'
import FeatureEditStylePoint from './feature-edit-style-point.vue'
import FeatureEditStyleLine from './feature-edit-style-line.vue'
import FeatureEditStylePolygon from './feature-edit-style-polygon.vue'
import FeatureEditStyleLabel from './feature-edit-style-label.vue'
import FeatureEditStyleSymbole from './feature-edit-style-symbole.vue'

const { t } = useTranslation()
const feature: DrawnFeature | undefined = inject('feature')

const styleComponents = {
  FeatureEditStyleCircle,
  FeatureEditStyleLine,
  FeatureEditStylePoint,
  FeatureEditStylePolygon,
  FeatureEditStyleLabel,
}

const currentStyleComponent = computed(() =>
  feature?.featureType.replace('drawn', 'FeatureEditStyle')
)

function onClickChangeOrientation() {
  alert('onClickChangeOrientation TODO') // TODO:
}

function onClickChangeLineStyle(style: string) {
  alert('onClickChangeOrientation TODO' + style) // TODO:
}
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
          <input
            class="cursor-pointer"
            type="color"
            value=""
            data-cy="featStyleColor"
          />
        </div>
      </div>
    </template>

    <template v-slot:size>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Size') }}
        </label>
        <RangeInput class="md:w-2/3" :max="900" data-cy="featStyleSize" />
      </div>
    </template>

    <template v-slot:angle>
      <div class="flex gap-1 items-center mt-1 mb-2">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Angle') }}
        </label>
        <RangeInput
          class="md:w-2/3"
          :min="-180"
          :max="180"
          data-cy="featStyleAngle"
        />
      </div>
    </template>

    <!-- Symbole for Point -->
    <template v-slot:symbole>
      <FeatureEditStyleSymbole :feature="feature" data-cy="featStyleSymbol" />
    </template>

    <!-- Style for line -->
    <template v-slot:style>
      <div
        class="flex gap-1 items-center mt-1 mb-2"
        data-cy="featStyleLineStyle"
      >
        <label class="font-bold block" for="inline-full-name">
          {{ t('Style') }}
        </label>
        <div class="flex gap-1">
          <button class="lux-btn-grey" @click="onClickChangeLineStyle('plain')">
            {{ t('Plain') }}
          </button>
          <button
            class="lux-btn-grey"
            @click="onClickChangeLineStyle('dashed')"
          >
            {{ t('Dashed') }}
          </button>
          <button
            class="lux-btn-grey"
            @click="onClickChangeLineStyle('dotted')"
          >
            {{ t('Dotted') }}
          </button>
        </div>
      </div>
    </template>

    <template v-slot:lineWidth>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Stroke width') }}
        </label>
        <RangeInput data-cy="featStyleLineWidth" />
      </div>
    </template>

    <template v-slot:transparency>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Transparence') }}
        </label>
        <RangeInput :max="100" />
      </div>
    </template>

    <template v-slot:orientation>
      <div class="flex gap-2 items-center mt-1 mb-2">
        <label class="font-bold block" for="showOrientation">
          {{ t('Show orientation') }}
        </label>
        <input type="checkbox" id="showOrientation" />
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
