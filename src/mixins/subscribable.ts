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

export const subscribe =
  (stream: Observable<any>) =>
  <K extends SubscribableMixin>(targetPrototype: K, propertyKey: keyof K) => {
    if (!stream) throw new Error('Invalid stream!')

    const initial = targetPrototype.connectedCallback
    targetPrototype.connectedCallback = function () {
      initial?.call(this)
      this.subscribe(propertyKey, stream)
    }
  }
