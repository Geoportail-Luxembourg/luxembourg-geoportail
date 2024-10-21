<script setup lang="ts">
import { Ref, inject } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import Circle from '@/components/common/symbol/circleSymbol.vue'
import Square from '@/components/common/symbol/squareSymbol.vue'
import Cross from '@/components/common/symbol/crossSymbol.vue'
import Triangle from '@/components/common/symbol/triangleSymbol.vue'

const { t } = useTranslation()
const feature: DrawnFeature = inject('feature')!
const popupOpen: Ref<boolean> = inject('popupOpen')!
</script>

<template>
  <div class="flex gap-2 items-center mt-1 mb-2">
    <label class="font-bold block" for="inline-full-name">
      {{ t('Symbole') }}
    </label>
    <!-- Symbole button -->
    <button
      class="lux-btn flex gap-2 items-center"
      @click="() => (popupOpen = true)"
      data-cy="featStyleSymbolEdit"
    >
      {{ t('Symbole') }}
      <Circle
        v-if="feature.featureStyle.shape === 'circle'"
        :fillColor="feature.featureStyle.color"
      />
      <Square
        v-else-if="feature.featureStyle.shape === 'square'"
        :fillColor="feature.featureStyle.color"
      />
      <Cross
        v-else-if="feature.featureStyle.shape === 'cross'"
        :fillColor="feature.featureStyle.color"
      />
      <Triangle
        v-else-if="feature.featureStyle.shape === 'triangle'"
        :fillColor="feature.featureStyle.color"
      />
    </button>
  </div>
</template>
