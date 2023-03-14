<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed } from 'vue'

import { getDefaultMediumStyling } from '@/services/styles/styles.service'
import MediumStyleItem from './medium-style-item.vue'
import { Layer } from '@/stores/map.store.model'

const { t } = useTranslation()
const props = defineProps<{
  layer: Layer
}>()
const styles = getDefaultMediumStyling(props.layer.name)
const isColorVisible = computed(
  () => props.layer.name === 'basemap_2015_global'
)
</script>

<template>
  <div class="text-white border-2 p-[10px] m-[10px]">
    <h5 class="text-center mb-3">
      {{
        isColorVisible
          ? t('Select a colour for every theme')
          : t('Activate categories')
      }}
    </h5>
    <medium-style-item
      v-for="item in styles"
      :key="item.unlocalized_label"
      :color="item.color"
      :thematicName="item.unlocalized_label"
    />
  </div>
</template>
