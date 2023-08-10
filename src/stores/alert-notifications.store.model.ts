export enum AlertNotificationType {
  INFO = 'alert-info',
  WARNING = 'alert-warning',
  ERROR = 'alert-danger',
}

export interface AlertNotificationModel {
  message: string
  type?: AlertNotificationType
  duration?: number
}
