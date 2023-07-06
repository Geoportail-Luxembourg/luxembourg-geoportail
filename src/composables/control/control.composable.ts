import { inject, onMounted, onUnmounted } from 'vue'

import Control from 'ol/control/Control'
import OlMap from 'ol/Map'

import useMap from '@/composables/map/map.composable'

export default function useControl(ControlClass: typeof Control, options: any) {
  const control = new ControlClass(options)
  const map = useMap()
  const olMap = inject('olMap') as OlMap

  onMounted(() => addControlToMap())
  onUnmounted(() => removeControlFromMap())

  function addControlToMap() {
    olMap.addControl(control)
    olMap.changed()
  }

  function removeControlFromMap() {
    const olMap = map.getOlMap()
    olMap.removeControl(control)
    olMap.changed()
  }

  return {
    control,
    addControlToMap,
    removeControlFromMap,
  }
}
