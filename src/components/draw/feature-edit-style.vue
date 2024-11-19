<script setup lang="ts">
import { computed, inject, Reactive } from 'vue'
import { useTranslation } from 'i18next-vue'

import { LineString } from 'ol/geom'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import RangeInput from '@/components/common/range-input/range-input.vue'

import FeatureEditStyleCircle from './feature-edit-style-circle.vue'
import FeatureEditStylePoint from './feature-edit-style-point.vue'
import FeatureEditStyleLine from './feature-edit-style-line.vue'
import FeatureEditStylePolygon from './feature-edit-style-polygon.vue'
import FeatureEditStyleLabel from './feature-edit-style-label.vue'
import FeatureEditLinestyleItem from './feature-edit-linestyle-item.vue'
import FeatureEditStyleSymbol from './feature-edit-style-symbol.vue'
import FeatureEditSymbolIcon from './feature-edit-symbol-icon.vue'
import { DrawnFeatureStyleShape, Symboltype } from '@/stores/draw.store.model'

const { t } = useTranslation()
const feature: Reactive<DrawnFeature> = inject('feature')!
const showAngleField = computed(() => {
  return !(
    feature.featureType === 'drawnPoint' &&
    feature.featureStyle.shape === 'circle'
  )
})
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

function onChangeSymbolShape(shape: DrawnFeatureStyleShape) {
  feature.featureStyle = {
    ...feature.featureStyle,
    shape,
    symbolId: undefined,
    symboltype: undefined,
  }
}

function onChangeSymbolIcon(symbolId: string, symboltype: Symboltype) {
  feature.featureStyle = {
    ...feature.featureStyle,
    symbolId,
    symboltype,
    size: 100,
    shape: undefined,
  }
}
</script>

<template>
  <component
    :is="styleComponents[currentStyleComponent as keyof typeof styleComponents]"
    :feature="<DrawnFeature>feature"
  >
    <template v-slot:title>
      {{ t('Style your drawing') }}
    </template>

    <template v-slot:color>
      <div class="flex gap-1 items-center">
        <label class="font-bold block" for="color">
          {{ t('Color') }}
        </label>
        <div class="md:w-2/3">
          <input
            name="color"
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
        <label class="font-bold block" for="size">
          {{ t('Size') }}
        </label>
        <RangeInput
          name="size"
          class="md:w-2/3"
          :max="slotProps.maxsize"
          :value="feature.featureStyle.size"
          data-cy="featStyleSize"
          @change="onSizeChange"
        />
      </div>
    </template>

    <template v-slot:angle>
      <div v-if="showAngleField" class="flex gap-1 items-center mt-1 mb-2">
        <label class="font-bold block" for="angle">
          {{ t('Angle') }}
        </label>
        <RangeInput
          name="angle"
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

    <!-- Style for line -->
    <template v-slot:style>
      <div
        class="flex gap-1 items-center mt-1 mb-2"
        data-cy="featStyleLineStyle"
      >
        <label class="font-bold block">
          {{ t('Style') }}
        </label>
        <div class="flex gap-1">
          <FeatureEditLinestyleItem
            v-for="(linestyle, i) in linestyles"
            :key="i"
            :linestyle="linestyle"
            @changeLinestyle="onClickChangeLineStyle"
          />
        </div>
      </div>
    </template>

    <template #styleSymbol="{ openEditIcon }">
      <FeatureEditStyleSymbol
        data-cy="featStyleSymbol"
        @clickSymbolIcon="openEditIcon"
      />
    </template>

    <template #symbolIcon="{ closeEditIcon }">
      <FeatureEditSymbolIcon
        @changeSymbolIcon="(symbolId: string, symboltype: Symboltype) => { onChangeSymbolIcon(symbolId, symboltype); closeEditIcon()}"
        @changeSymbolShape="(shape: DrawnFeatureStyleShape) => { onChangeSymbolShape(shape); closeEditIcon()}"
        @close="closeEditIcon"
      >
        <template v-slot:symbolcolor>
          <div class="flex gap-1 items-center">
            <label class="font-bold block" for="color">
              {{ t('Color') }}
            </label>
            <div class="md:w-2/3">
              <input
                name="color"
                class="cursor-pointer"
                type="color"
                :value="feature.featureStyle.color"
                @input="onColorSelect"
                data-cy="featStyleColor"
              />
            </div>
          </div>
        </template>
      </FeatureEditSymbolIcon>
    </template>

    <template v-slot:lineWidth>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="stroke">
          {{ t('Stroke width') }}
        </label>
        <RangeInput
          name="stroke"
          data-cy="featStyleLineWidth"
          :value="feature.featureStyle.stroke"
          @change="onWidthChange"
        />
      </div>
    </template>

    <template v-slot:transparency>
      <div class="flex gap-1 items-center mt-1">
        <label class="font-bold block" for="transparency">
          {{ t('Transparence') }}
        </label>
        <RangeInput
          name="transparency"
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

    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </component>
</template>
