import ApiKeys from "./apiKeys.js";
import { ERROR, LOADING, UPDATED } from "./state.js";
import StateStore from "./statestore.js";
import { tryFetchJSON } from "./utils.js";

export default class Location {
  constructor() {
    this.state = StateStore.add("location");

    this.state.when(UPDATED, async (s, p) => {
      const oldCoords = p && p.payload && p.payload.coords;
      const newCoords = s && s.payload && s.payload.coords;
      if (
        newCoords &&
        oldCoords &&
        newCoords.latitude === oldCoords.latitude &&
        newCoords.longitude === oldCoords.longitude
      ) {
        return;
      }
      const weatherState = StateStore.get("weather");
      weatherState.changeTo(LOADING);
      const req = new Request(
        `https://api.openweathermap.org/data/2.5/weather?lat=${newCoords.latitude}&lon=${
          newCoords.longitude
        }&appid=${ApiKeys.openWeatherMap}`,
      );
      tryFetchJSON(
        req,
        json => weatherState.changeTo(UPDATED, json),
        error => weatherState.changeTo(ERROR, error),
      );
    });

    this.geolocate = this.geolocate.bind(this);
  }

  geolocate() {
    this.state.changeTo(LOADING);
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.state.changeTo(UPDATED, { coords: pos.coords });
        const req = new Request(
          `https://api.opencagedata.com/geocode/v1/json?key=${ApiKeys.openCageData}&q=${
            pos.coords.latitude
          }%2C+${pos.coords.longitude}&pretty=1&no_annotations=1`,
        );
        tryFetchJSON(
          req,
          json =>
            json.results[0] &&
            this.state.changeTo(UPDATED, { coords: pos.coords, location: json.results[0] }),
          error => {},
        );
      },
      error => {
        this.state.changeTo(ERROR, error);
      },
      {
        timeout: 5000,
        enableHighAccuracy: true,
      },
    );
  }
}
