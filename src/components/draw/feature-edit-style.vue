<script setup lang="ts">
import { computed, inject, provide, Ref, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { LineString } from 'ol/geom'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import RangeInput from '@/components/common/range-input/range-input.vue'

import FeatureEditStyleCircle from './feature-edit-style-circle.vue'
import FeatureEditStylePoint from './feature-edit-style-point.vue'
import FeatureEditStyleLine from './feature-edit-style-line.vue'
import FeatureEditStylePolygon from './feature-edit-style-polygon.vue'
import FeatureEditStyleLabel from './feature-edit-style-label.vue'
import FeatureEditStyleSymbole from './feature-edit-style-symbole.vue'

import FeatureEditLinestyleItem from './feature-edit-linestyle-item.vue'

const { t } = useTranslation()
const feature: DrawnFeature = inject('feature')!
const popupOpen: Ref<boolean> = ref(false)
provide('popupOpen', popupOpen)

const styleComponents = {
  FeatureEditStyleCircle,
  FeatureEditStyleLine,
  FeatureEditStylePoint,
  FeatureEditStylePolygon,
  FeatureEditStyleLabel,
}

const linestyles = ['plain', 'dashed', 'dotted']

const currentStyleComponent = computed(() =>
  feature?.featureType.replace('drawn', 'FeatureEditStyle')
)

function onColorSelect(colorEvent: Event) {
  feature.featureStyle = {
    ...feature.featureStyle,
    color: (colorEvent.target as HTMLInputElement).value,
  }
}

function onSizeChange(newSize: number) {
  feature.featureStyle = { ...feature.featureStyle, size: newSize }
}

function onAngleChange(newAngle: number) {
  feature.featureStyle = {
    ...feature.featureStyle,
    angle: (newAngle * Math.PI) / 180,
  }
}

function onWidthChange(newWidth: number) {
  feature.featureStyle = { ...feature.featureStyle, stroke: newWidth }
}

function onTransparencyChange(newTransparency: number) {
  feature.featureStyle = {
    ...feature.featureStyle,
    opacity: (100 - newTransparency) / 100,
  }
}

function onShowDirection(event: Event) {
  feature.featureStyle = {
    ...feature.featureStyle,
    showOrientation: (event.target as HTMLInputElement).checked,
  }
}

function onClickChangeOrientation() {
  const coordinates = (feature.getGeometry() as LineString)
    .getCoordinates()
    .reverse()
  const reversedGeometry = new LineString(coordinates)
  feature.setGeometry(reversedGeometry)
}

function onClickChangeLineStyle(style: string) {
  feature.featureStyle = { ...feature.featureStyle, linestyle: style }
}
</script>

<template>
  <template v-if="!popupOpen">
    {{ t('Style your drawing') }}
  </template>

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
            :value="feature.featureStyle.color"
            @input="onColorSelect"
            data-cy="featStyleColor"
          />
        </div>
      </div>
    </template>

    <template v-slot:size="slotProps">
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Size') }}
        </label>
        <RangeInput
          class="md:w-2/3"
          :max="slotProps.maxsize"
          :value="feature.featureStyle.size"
          data-cy="featStyleSize"
          @change="onSizeChange"
        />
      </div>
    </template>

    <template v-slot:angle>
      <div
        v-if="
          !(
            feature.featureType === 'drawnPoint' &&
            feature.featureStyle.shape === 'circle'
          )
        "
        class="flex gap-1 items-center mt-1 mb-2"
      >
        <label class="font-bold block" for="inline-full-name">
          {{ t('Angle') }}
        </label>
        <RangeInput
          class="md:w-2/3"
          :min="-180"
          :max="180"
          :value="
            ((Math.round((feature.featureStyle.angle * 180) / Math.PI) + 180) %
              360) -
            180
          "
          @change="onAngleChange"
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
          <FeatureEditLinestyleItem
            v-for="(linestyle, i) in linestyles"
            :key="i"
            :linestyle="linestyle"
            :feature="feature"
            @changeLinestyle="onClickChangeLineStyle"
          />
        </div>
      </div>
    </template>

    <template v-slot:lineWidth>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Stroke width') }}
        </label>
        <RangeInput
          data-cy="featStyleLineWidth"
          :value="feature.featureStyle.stroke"
          @change="onWidthChange"
        />
      </div>
    </template>

    <template v-slot:transparency>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="inline-full-name">
          {{ t('Transparence') }}
        </label>
        <RangeInput
          class="md:w-2/3"
          data-cy="featStyleTransparency"
          :max="100"
          :value="100 - feature.featureStyle.opacity * 100"
          @change="onTransparencyChange"
        />
      </div>
    </template>

    <template v-slot:orientation>
      <div class="flex gap-2 items-center mt-1 mb-2">
        <label class="font-bold block" for="showOrientation">
          {{ t('Show orientation') }}
        </label>
        <input
          type="checkbox"
          id="showOrientation"
          @change="onShowDirection"
          :checked="feature.featureStyle.showOrientation"
        />
      </div>

      <div class="flex gap-1 items-center mt-1 mb-2">
        <button class="lux-btn-primary" @click="onClickChangeOrientation">
          {{ t('Changer sens de la ligne') }}
        </button>
      </div>
    </template>
  </component>

  <template v-if="!popupOpen">
    <slot name="footer"></slot>
  </template>
</template>

<style></style>
