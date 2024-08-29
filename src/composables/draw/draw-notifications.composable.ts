import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { useDrawStore } from '@/stores/draw.store'
import { DrawStateActive } from '@/stores/draw.store.model'

export default function useDrawNotifications() {
  const { t } = useTranslation()
  const { addNotification } = useAlertNotificationsStore()
  const { drawStateActive } = storeToRefs(useDrawStore())

  watch(drawStateActive, notify)

  function notify(drawStateActive: DrawStateActive) {
    let notification: string | undefined

    switch (drawStateActive) {
      case 'drawPoint':
        notification = t('Click to draw the point')
        break
      case 'drawLine':
        notification = t(
          'Click to start drawing line<br>Double-click to finish'
        )
        break
      case 'drawPolygon':
        notification = t(
          'Click to start drawing polygon<br>Double-click or click last point to finish'
        )
        break
      case 'drawCircle':
        notification = t('Click to start drawing circle')
        break
      case 'drawLabel':
        notification = t('Click to place the label')
        break
    }

    if (notification) {
      addNotification(notification)
    }
  }

  return {}
}
