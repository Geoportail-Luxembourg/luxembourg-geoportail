import { setActivePinia, createPinia } from 'pinia'

import { useAlertNotificationsStore } from './alert-notifications.store'

describe('AlertNotifications Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('#addNotification', () => {
    it('adds the notification to the store', () => {
      const alertNotifications = useAlertNotificationsStore()
      expect(alertNotifications.notifications.length).toBe(0)
      alertNotifications.addNotification('Adding test message')
      expect(alertNotifications.notifications.length).toBe(1)
      alertNotifications.addNotification('Adding test message 2')
      expect(alertNotifications.notifications.length).toBe(2)
    })
  })

  describe('#removeNotification', () => {
    it('removes the notification at given index', () => {
      const alertNotifications = useAlertNotificationsStore()
      alertNotifications.addNotification('Adding test message 1')
      alertNotifications.addNotification('Adding test message 2')
      alertNotifications.addNotification('Adding test message 3')
      expect(alertNotifications.notifications.length).toBe(3)
      expect(alertNotifications.notifications[1].message).toBe(
        'Adding test message 2'
      )
      alertNotifications.removeNotification(1)
      expect(alertNotifications.notifications.length).toBe(2)
      expect(alertNotifications.notifications[1].message).toBe(
        'Adding test message 3'
      )
    })
  })
})
