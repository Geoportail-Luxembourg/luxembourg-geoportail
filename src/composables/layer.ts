import { computed } from 'vue'
import type { SetupContext } from 'vue'

import { Layer } from '@/stores/map.store.model'
import { IBackgroundLayer } from '@/composables/background-layer/background-layer.model'
import { LayerTypeValue } from '@/composables/themes/themes.model'
import { useTranslation } from 'i18next-vue'

export function layerSupportsMetadata(layer: Layer | IBackgroundLayer) {
  return !('type' in layer) || layer.type !== LayerTypeValue.MY_MAPS
}

export function layerSupportsCatalogLocate(layer: Layer | IBackgroundLayer) {
  return !('type' in layer) || layer.type !== LayerTypeValue.MY_MAPS
}

export function useLayer(
  layer: Layer | IBackgroundLayer,
  context?: SetupContext
) {
  const { t } = useTranslation()

  const supportsMetadata = computed(() => layerSupportsMetadata(layer))
  const supportsCatalogLocate = computed(() =>
    layerSupportsCatalogLocate(layer)
  )

  function onClickInfo() {
    context?.emit('clickInfo', layer)
  }

  return {
    t,
    onClickInfo,
    supportsMetadata,
    supportsCatalogLocate,
  }
}
