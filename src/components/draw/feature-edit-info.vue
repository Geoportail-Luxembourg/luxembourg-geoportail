<script setup lang="ts">
import { inject } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawnFeature } from '@/services/draw/drawn-feature'

const { t } = useTranslation()
const feature: DrawnFeature | undefined = inject('feature')
</script>

<template>
  {{ t('Modification des informations') }}
  <input
    data-cy="featureLabelEdit"
    type="text"
    class="form-control block mt-2 mb-4"
    v-if="feature"
    v-model="feature.label"
  />
  <textarea
    rows="3"
    class="form-control block w-full"
    v-if="feature"
    v-model="feature.description"
  ></textarea>

  <slot name="footer"></slot>
</template>
