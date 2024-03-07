type SuperObserverListener<T> = (args: T) => void

export class SuperObserver<TDispatchData = unknown> {
  constructor() {}

  listeners: Set<SuperObserverListener<TDispatchData>> = new Set()

  subscribe(callback: SuperObserverListener<TDispatchData>) {
    this.listeners.add(callback)
    return () => this.unsubscribe(callback)
  }

  dispatch(args: TDispatchData) {
    this.listeners.forEach((listener) => listener(args))
  }

  unsubscribe(callback: SuperObserverListener<TDispatchData>) {
    this.listeners.delete(callback)
  }
}
