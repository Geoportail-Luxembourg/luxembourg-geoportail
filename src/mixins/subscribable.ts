import { LitElement } from 'lit'
import { Observable, Subscription } from 'rxjs'

type Constructor<LitElement> = new (...args: any[]) => LitElement

export const SubscribableMixin = <TBase extends Constructor<LitElement>>(
  Base: TBase
) => {
  return class Subscribable extends Base {
    subscription = new Subscription()

    subscribe<Key extends keyof this>(
      propertyName: Key,
      stream$: Observable<any>
    ) {
      const teardown = stream$.subscribe(value => {
        this[propertyName] = value
      })

      this.subscription.add(teardown)

      return stream$
    }

    disconnectedCallback() {
      this.subscription.unsubscribe()
      super.disconnectedCallback()
    }
  }
}
