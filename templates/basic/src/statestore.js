import State from "./state.js";

export const UNINITIALIZED = "UNINITIALIZED";
export const LOADING = "LOADING";
export const UPDATED = "UPDATED";
export const ERROR = "ERROR";
export const ANY = undefined;

class StateStore {
  constructor() {
    this.states = new Map();
  }

  add(name, initialState, initialPayload) {
    if (this.states.has(name)) {
      throw new Error(`State with name ${name} already exists in store`);
    }

    const state = new State(initialState, initialPayload);
    this.states.set(name, state);
    return state;
  }

  get(name) {
    return this.states.get(name);
  }
}

export default new StateStore();
