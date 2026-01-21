<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotification } from '@/stores/alert-notifications.store.model'
import Notification from './notification-item.vue'

const alertNotificationsStore = useAlertNotificationsStore()
const { notifications } = storeToRefs(alertNotificationsStore)

function onClose(uuid: string) {
  alertNotificationsStore.removeNotification(uuid)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="notifications.length"
      class="lux-notifications fixed w-[calc(100%-2rem)] max-w-[500px] top-10 left-1/2 -translate-x-1/2 z-[9999] mx-4 sm:mx-0"
      data-cy="alertNotifications"
    >
      <Notification
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="<AlertNotification>notification"
        @close="() => onClose(notification.uuid)"
      />
    </div>
  </Teleport>
</template>
