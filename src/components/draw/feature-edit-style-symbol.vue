<script setup lang="ts">
import { Reactive, inject } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import Circle from '@/components/common/symbol/circleSymbol.vue'
import Square from '@/components/common/symbol/squareSymbol.vue'
import Cross from '@/components/common/symbol/crossSymbol.vue'
import Triangle from '@/components/common/symbol/triangleSymbol.vue'

const SYMBOL_URL = import.meta.env.VITE_SYMBOL_URL

defineEmits<{
  (e: 'clickSymbolIcon'): void
}>()

const { t } = useTranslation()
const feature: Reactive<DrawnFeature> = inject('feature')!
const shapeComponents = {
  circle: Circle,
  square: Square,
  cross: Cross,
  triangle: Triangle,
}
</script>

<template>
  <div class="flex gap-2 items-center mt-1 mb-2">
    <label class="font-bold block">
      {{ t('Symbol') }}
    </label>

    <!-- If symbol icon selected -->
    <button
      v-if="!!feature.featureStyle.symbolId"
      class="lux-btn items-center"
      @click="$emit('clickSymbolIcon')"
      data-cy="featStyleSymbolEdit"
    >
      <img
        class="symbol-style max-h-10"
        :src="`${SYMBOL_URL}/${feature.featureStyle.symbolId}`"
      />
    </button>

    <!-- Or if basic symbol (square, circle, cross, triangle) selected -->
    <button
      v-else
      class="lux-btn items-center flex gap-2"
      @click="$emit('clickSymbolIcon')"
      data-cy="featStyleSymbolEdit"
    >
      {{ t('Symbole') }}
      <component
        v-if="feature.featureStyle.shape"
        :is="shapeComponents[feature.featureStyle.shape]"
        :fillColor="feature.featureStyle.color"
      />
    </button>
  </div>
</template>
