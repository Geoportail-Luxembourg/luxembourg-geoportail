<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import { LayerMetadataModel } from '@/services/layer-metadata/layer-metadata.model'
import { layerMetadataService } from '@/services/layer-metadata/layer-metadata.service'
import { useTranslateParser } from '@/composables/translateParser'

const { t, i18next } = useTranslation()
const { translate } = useTranslateParser()
const layersService = useLayers()
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
}>()

onMounted(async () => {
  layerMetadata.value = await layerMetadataService.getLayerMetadata(
    props.layer.id,
    i18next.language
  )

  emit('hasLegend', !!layerMetadata.value?.hasLegend)
})
</script>

<template>
  <!-- Has legend -->
  <div
    class="lux-legend"
    v-if="layerMetadata && layerMetadata.legendHtml?.innerHTML"
  >
    <h1 class="pb-5">
      {{ t(layersService.getLayerCurrentLabel(layer)) }}
    </h1>
    <div
      v-dompurify-html="translate(layerMetadata.legendHtml?.innerHTML)"
    ></div>
  </div>
  <!-- No legend, display error message if asked -->
  <div v-else-if="!layerMetadata?.hasLegend && displayEmptyLegend">
    {{ t('The legend is not available for this layer') }}
  </div>
</template>
