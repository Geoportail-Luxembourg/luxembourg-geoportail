<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'

import { Layer } from '@/stores/map.store.model'
import { LayerMetadataModel } from '@/services/layer-metadata/layer-metadata.model'
import { layerMetadataService } from '@/services/layer-metadata/layer-metadata.service'
import { useTranslateParser } from '@/composables/translateParser'

const { t, i18next } = useTranslation()
const { translate } = useTranslateParser()
const layerMetadata: Ref<LayerMetadataModel | undefined> = ref()

const props = withDefaults(
  defineProps<{
    layer: Layer
    displayEmptyLegend?: boolean
  }>(),
  {
    displayEmptyLegend: false,
  }
)
const emit = defineEmits<{
  (e: 'hasLegend', hasLegend: boolean): void
  (e: 'removedLegend'): void
}>()

watch(
  () => i18next.language,
  () => getLayerLegend()
)
onMounted(() => getLayerLegend())
onUnmounted(() => emit('removedLegend'))

async function getLayerLegend() {
  layerMetadata.value = await layerMetadataService.getLayerMetadata(
    props.layer.id,
    i18next.language
  )

  emit('hasLegend', !!layerMetadata.value?.hasLegend)
}
</script>

<template>
  <!-- Has legend -->
  <div
    class="lux-legend"
    v-if="layerMetadata && layerMetadata.legendHtml?.innerHTML"
  >
    <slot name="title" />
    <div
      v-dompurify-html="translate(layerMetadata.legendHtml?.innerHTML)"
    ></div>
  </div>
  <!-- No legend, display error message if asked -->
  <div v-else-if="!layerMetadata?.hasLegend && displayEmptyLegend">
    {{ t('The legend is not available for this layer') }}
  </div>
</template>
