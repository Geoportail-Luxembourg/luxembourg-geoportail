<script setup lang="ts">
import { Ref, inject } from 'vue'
import { useTranslation } from 'i18next-vue'

// import { DrawFeature } from '@/stores/draw.store.model' // TODO:
import Circle from '@/components/common/symbol/circleSymbol.vue'
import Rectangle from '@/components/common/symbol/rectangleSymbol.vue'
import Cross from '@/components/common/symbol/crossSymbol.vue'
import Triangle from '@/components/common/symbol/triangleSymbol.vue'

type FeatureShape = 'circle' | 'square' | 'cross' | 'triangle'

const { t } = useTranslation()
const currentEditCompKey: Ref<'FeatureEditSymbol' | undefined> | undefined =
  inject('currentEditCompKey')
// const feature: DrawFeature | undefined = inject('feature') // TODO:
const featureShape: FeatureShape = 'circle' // feature.olFeature.get('shape') // TODO: to plug when feature ok
const featureColor = 'red' // feature.olFeature.get('color') // TODO: to plug when feature ok
</script>

<template>
  <div class="flex gap-2 items-center mt-1 mb-2">
    <label class="font-bold block" for="inline-full-name">
      {{ t('Symbole') }}
    </label>
    <!-- Symbole button -->
    <button
      class="lux-btn flex gap-2 items-center"
      @click="() => (currentEditCompKey = 'FeatureEditSymbol')"
      data-cy="featStyleSymbolEdit"
    >
      {{ t('Symbole') }}
      <Circle v-if="featureShape === 'circle'" :fillColor="featureColor" />
      <Rectangle
        v-else-if="featureShape === 'square'"
        :fillColor="featureColor"
      />
      <Cross v-else-if="featureShape === 'cross'" :fillColor="featureColor" />
      <Triangle
        v-else-if="featureShape === 'triangle'"
        :fillColor="featureColor"
      />
    </button>
  </div>
</template>
