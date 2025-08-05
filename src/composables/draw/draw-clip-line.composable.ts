import { storeToRefs } from 'pinia'
import { nextTick, onMounted, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { useDrawStore } from '@/stores/draw.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import OlInteractionClipLine from '@/services/ol-interaction/ol-interaction-clipline'
import useMap from '../map/map.composable'

export default function useClipLine() {
  const { t } = useTranslation()
  const drawStore = useDrawStore()
  const map = useMap().getOlMap()
  const { addNotification } = useAlertNotificationsStore()
  const { clipLineActive, queueAddedDrawnFeatures } = storeToRefs(drawStore)
  const clipLineInteraction = new OlInteractionClipLine()

  onMounted(() => {
    map.addLayer(clipLineInteraction.overlay)
  })

  watch(clipLineActive, active => {
    clipLineInteraction.setActive(active)

    if (active) {
      addNotification(
        t(
          'Vous êtes en mode découpage.<br> Veuillez cliquer sur une ligne pour la couper en deux.'
        )
      )
    }
  })

  watch(queueAddedDrawnFeatures, drawFeatures => {
    if (drawFeatures.length === 0) return

    // TODO: utiliser draw select à la place queueAddedDrawnFeatures

    nextTick(() => {
      console.log('handleFeatureChanged =', drawFeatures)
      drawFeatures.forEach(f => clipLineInteraction.handleFeatureChanged(f))
      queueAddedDrawnFeatures.value = []
    })
  })

  function toggle(active?: boolean) {
    clipLineActive.value = active ?? !clipLineActive.value
  }

  return {
    toggle,
  }
}
