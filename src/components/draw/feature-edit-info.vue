<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawFeature } from '@/stores/draw.store.model'

const { t } = useTranslation()
const props = defineProps<{
  feature: DrawFeature
}>()
const feat = ref(props.feature)
</script>

<template>
  {{ t('Modification des informations') }}
  <input
    type="text"
    class="form-control block mt-2 mb-4"
    v-model="feat.label"
  />
  <textarea
    rows="3"
    class="form-control block w-full"
    v-model="feat.description"
  ></textarea>

  <slot name="footer"></slot>
</template>
