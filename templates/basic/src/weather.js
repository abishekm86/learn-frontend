import StateStore from "./statestore.js";

export default class Weather {
  constructor() {
    this.state = StateStore.add("weather");
  }
}
