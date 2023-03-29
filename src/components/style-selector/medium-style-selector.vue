<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { getDefaultMediumStyling } from '@/services/styles/styles.service'
import MediumStyleItem from './medium-style-item.vue'
import { StyleItem } from '@/composables/mvt-styles/mvt-styles.model'
import { Layer } from '@/stores/map.store.model'
import { useStyleStore } from '@/stores/style.store'

const COLOR_EDITABLE_LAYERS = ['basemap_2015_global']

const styleStore = useStyleStore()
const { bgStyle } = storeToRefs(styleStore)

const { t } = useTranslation()
const props = defineProps<{
  layer: Layer
}>()
const isColorVisible = computed(() =>
  COLOR_EDITABLE_LAYERS.includes(props.layer.name)
)
const styles = computed(
  () => bgStyle.value || getDefaultMediumStyling(props.layer)
)

function changeStyle(i: number, newStyle: StyleItem) {
  bgStyle.value = styles.value.map((item, index) =>
    index === i ? newStyle : item
  )
}
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
      v-for="(item, i) in styles"
      :key="item.label"
      :style="item"
      @changeStyle="changeStyle(i, $event)"
      :colorEditable="isColorVisible"
    />
  </div>
</template>
