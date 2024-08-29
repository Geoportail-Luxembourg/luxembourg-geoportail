import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import {
  AlertNotification,
  AlertNotificationType,
} from './alert-notifications.store.model'

const DEFAULT_NOTIFICATION_TYPE = AlertNotificationType.INFO
const DEFAULT_NOTIFICATION_DURATION = 7000
const DEFAULT_NOTIFICATION_DURATION_WARNING = 4000

export const useAlertNotificationsStore = defineStore(
  'alert-notifications',
  () => {
    const notifications: Ref<AlertNotification[]> = ref([])

    /**
     * Add a new notification message to the store. This will create a notification object with its own uniq uuid.
     *
     *
     * @param message The message to display as a notification
     * @param type By default, simple info (blue theme), or can also be warning or error
     * @param duration Duration in ms
     * @see AlertNotificationType
     */
    function addNotification(
      message: string,
      type = DEFAULT_NOTIFICATION_TYPE,
      duration?: number
    ) {
      duration =
        duration ??
        (type === AlertNotificationType.WARNING
          ? DEFAULT_NOTIFICATION_DURATION_WARNING
          : DEFAULT_NOTIFICATION_DURATION)

      const notification = new AlertNotification(
        uuidv4(),
        message,
        type,
        duration,
        uuid => removeNotification(uuid)
      )

      notifications.value.push(notification)

      return notification.uuid
    }

    /**
     * Remove a notification according to its uuid
     * @param uuid The uuid of the notification to be removed from the store
     */
    function removeNotification(uuid: string) {
      notifications.value = notifications.value.filter(notif => {
        if (notif.uuid === uuid) {
          notif.cancel()
        }

        return notif.uuid !== uuid
      })
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
