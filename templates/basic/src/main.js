import Clock from "./clock.js";
import Location from "./location.js";
import { ERROR, LOADING, UNINITIALIZED, UPDATED } from "./state.js";
import { sleep } from "./utils.js";
import Weather from "./weather.js";

const clock = new Clock();
const location = new Location();
const weather = new Weather();

const pTime = document.createElement("p");
const pWeather = document.createElement("p");
const btnLocation = document.createElement("button");

btnLocation.onclick = location.geolocate;
document.body.appendChild(pTime);
document.body.appendChild(pWeather);
document.body.appendChild(btnLocation);

clock.state.when(
  UPDATED,
  s => (pTime.innerText = `The time is ${new Date(s.payload).toLocaleTimeString()}.`),
);

location.state.when(UNINITIALIZED, () => (pWeather.innerText = `Click to fetch weather`));
location.state.when(UNINITIALIZED, () => (btnLocation.innerText = `Locate me`));
location.state.when(LOADING, () => (btnLocation.innerText = `Finding your location`));
location.state.when(UPDATED, s => {
  if (s.payload.location) {
    const loc = s.payload.location.components;
    btnLocation.innerText = loc.city ? `${loc.city}, ${loc.state}` : loc.state;
  } else {
    btnLocation.innerText = "Location found";
  }
});
location.state.when(ERROR, async () => {
  btnLocation.innerText = `Unable to find your location`;
  await sleep(2000);
  location.state.changeTo(UNINITIALIZED);
});

weather.state.when(LOADING, () => (pWeather.innerText = `Getting your weather`));
weather.state.when(
  UPDATED,
  s =>
    (pWeather.innerText = `It is now ${Math.round(s.payload.main.temp - 273.1)}C and ${
      s.payload.weather[0].description
    }.`),
);
weather.state.when(ERROR, () => (pWeather.innerText = `Unable to fetch weather for your location`));
