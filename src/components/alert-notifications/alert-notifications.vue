<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
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
      class="lux-notifications fixed w-[500px] top-10 left-1/2 ml-[-250px] z-50"
      data-cy="alertNotifications"
    >
      <Notification
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
        @close="() => onClose(notification.uuid)"
      />
    </div>
  </Teleport>
</template>
