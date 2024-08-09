<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
defineProps<{
  feature: string
}>()
</script>

<template>
  {{ t('Style your drawing') }}

  <template v-if="feature === 'Point'">
    <div class="flex items-center">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Color') }}
      </label>
      <div class="md:w-2/3">
        <input
          class="leading-tight"
          id="inline-full-name"
          type="color"
          value=""
        />
      </div>
    </div>

    <div class="flex items-center mt-1">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Size') }}
      </label>
      <div class="md:w-2/3">
        <span>Slider</span>
        <input type="number" min="0" max="40" step="1" />
      </div>
    </div>

    <div class="flex items-center mt-1 mb-2">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Angle') }}
      </label>
      <div class="md:w-2/3">
        <span>Slider</span>
        <input type="number" min="0" max="40" step="1" />
      </div>
    </div>
  </template>

  <template v-if="feature === 'LineString'">
    <div class="flex items-center">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Color') }}
      </label>
      <div class="md:w-2/3">
        <input
          class="leading-tight"
          id="inline-full-name"
          type="color"
          value=""
        />
      </div>
    </div>

    <div class="flex items-center mt-1">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Stroke width') }}
      </label>
      <div class="md:w-2/3">
        <span>Slider</span>
        <input type="number" min="0" max="40" step="1" />
      </div>
    </div>

    <div class="flex items-center mt-1 mb-2">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Style') }}
      </label>
      <div class="md:w-2/3">
        <span>label style todo</span>
      </div>
    </div>

    <div class="flex items-center mt-1 mb-2">
      <label class="font-bold w-1/3 block" for="inline-full-name">
        {{ t('Show orientation') }}
      </label>
      <div class="md:w-2/3">
        <input type="checkbox" />
      </div>
    </div>

    <div class="flex items-center mt-1 mb-2">
      <button class="lux-btn-primary">
        {{ t('Changer sens de la ligne') }}
      </button>
    </div>
  </template>
</template>
