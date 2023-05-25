
import { inject, onMounted, onUnmounted } from 'vue'

import Control from 'ol/control/Control'
import OlMap from 'ol/Map'

import useMap from '@/composables/map/map.composable'

export default function useControl(ControlClass: typeof Control, options: any) {
  const control = new ControlClass(options)
  const map = useMap()
  const olMap = inject("olMap") as OlMap

  onMounted(() => {
    olMap.addControl(control)
    olMap.changed()
  })

  onUnmounted(() => {
    const olMap = map.getOlMap()
    olMap.removeControl(control)
    olMap.changed()
  })

  return {
    control
  }
}
