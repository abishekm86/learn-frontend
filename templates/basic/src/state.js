export const UNINITIALIZED = "UNINITIALIZED";
export const LOADING = "LOADING";
export const UPDATED = "UPDATED";
export const ERROR = "ERROR";
export const ANY = undefined;

export default class State {
  constructor(initialState, initialPayload) {
    this.payload = initialPayload;
    this.state = initialState || UNINITIALIZED;
    this.subscribers = new Map();
  }

  when(state, f) {
    if (this.subscribers.has(state)) {
      this.subscribers.get(state).push(f);
    } else {
      this.subscribers.set(state, [f]);
    }
    if (this.state === state) {
      f({ state: this.state, payload: this.payload });
    }
  }

  changeTo(newState, newPayload) {
    const prevPayload = this.payload;
    const prevState = this.state;
    this.payload = newPayload;
    this.state = newState;

    const subscribersToNotify = [
      ...(this.subscribers.get(newState) || []),
      ...(this.subscribers.get(undefined) || []),
    ];
    for (let i = 0; i < subscribersToNotify.length; i++) {
      if (typeof subscribersToNotify[i] === "function") {
        try {
          subscribersToNotify[i](
            { state: newState, payload: newPayload },
            { state: prevState, payload: prevPayload },
          );
        } catch (_) {
          // swallow errors
        }
      }
    }
  }
}
