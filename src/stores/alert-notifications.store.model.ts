export enum AlertNotificationType {
  INFO = 'alert-info',
  WARNING = 'alert-warning',
  ERROR = 'alert-danger',
}

export class AlertNotification {
  protected timeoutID: number | undefined

  constructor(
    public uuid: string,
    public message: string,
    public type?: AlertNotificationType,
    public duration?: number,
    protected timer?: (uuid: string) => void
  ) {
    this.start()
  }

  start() {
    if (this.timer) {
      this.timeoutID = setTimeout(
        () => this.timer!(this.uuid),
        this.duration
      ) as unknown as number
    }
  }

  cancel() {
    clearTimeout(this.timeoutID)
  }
}
