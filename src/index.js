import "./style.css";
import { getWeatherForecast, makePage } from "./getData";

const btnSearch = document.querySelector(".btn-search");
const location = document.querySelector("#searchLocation");
const weatherDiv = document.querySelector(".weather");
const degree = document.querySelector("input[id='degree']");
const form = document.querySelector(".form-search");
let measurement = "°C";

// PAGE LOADERR
window.addEventListener("load", function () {
  const loader = this.document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  if (weatherDiv !== "") {
    loader.remove();
  }
});

// DEFAULT WEATHER
getWeatherForecast("London").then((res) => {
  makePage(res, weatherDiv, measurement);
});

// SWITCH TO F/C
degree.addEventListener("change", function () {
  weather();
});

// SEARCH FOR A CITY
btnSearch.addEventListener("click", function (e) {
  if (!form.checkValidity()) return;
  e.preventDefault();
  weather();
});

const weather = function () {
  weatherDiv.textContent = "";
  getWeatherForecast(location.value || "London").then((res) => {
    makePage(res, weatherDiv, `${degree.checked ? "°F" : "°C"}`);
  });
};
