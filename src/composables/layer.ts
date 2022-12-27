import { useTranslation } from 'i18next-vue'

import { Layer } from '@/stores/map.store.model'
import { IBackgroundLayer } from '@/services/background-layer/background-layer.model'

export function useLayer(layer: Layer | IBackgroundLayer, context?: any) {
  const { t } = useTranslation()

  function getLabel() {
    return t(layer.name, { ns: 'client' })
  }

  function onClickInfo() {
    context?.emit('clickInfo')
  }

  return {
    t,
    getLabel,
    onClickInfo,
  }
}
