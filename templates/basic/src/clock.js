import { UPDATED } from "./state.js";
import StateStore from "./statestore.js";
import { createClock } from "./utils.js";

export default class Clock {
  constructor() {
    this.state = StateStore.add("clock");
    createClock(() => this.state.changeTo(UPDATED, Date.now()));
  }
}
