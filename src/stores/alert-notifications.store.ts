import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import {
  AlertNotificationModel,
  AlertNotificationType,
} from './alert-notifications.store.model'

const DEFAULT_NOTIFICATION_TYPE = AlertNotificationType.INFO
const DEFAULT_NOTIFICATION_DURATION = 7000
const DEFAULT_NOTIFICATION_DURATION_WARNING = 4000

export const useAlertNotificationsStore = defineStore(
  'alert-notifications',
  () => {
    const notifications: Ref<AlertNotificationModel[]> = ref([])

    function addNotification(
      message: string,
      type = DEFAULT_NOTIFICATION_TYPE,
      duration?: number
    ) {
      const notification = {
        message,
        type,
        duration:
          duration ??
          (type === AlertNotificationType.WARNING
            ? DEFAULT_NOTIFICATION_DURATION_WARNING
            : DEFAULT_NOTIFICATION_DURATION),
      }
      notifications.value.push(notification)
    }

    function removeNotification(index: number) {
      notifications.value.splice(index, 1)
    }

    return {
      notifications,
      addNotification,
      removeNotification,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useAlertNotificationsStore, import.meta.hot)
  )
}
