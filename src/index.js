import "./style.css";
import { getWeatherForecast, makePage } from "./getData";

const btnSearch = document.querySelector(".btn-search");
const location = document.querySelector("#searchLocation");
const weatherDiv = document.querySelector(".weather");
const degree = document.querySelector("input[id='degree']");
const form = document.querySelector(".form-search");
let measurement = "°C";

getWeatherForecast("London").then((res) => {
  makePage(res, weatherDiv, measurement);
});

btnSearch.addEventListener("click", function (e) {
  if (!form.checkValidity()) return;
  weatherDiv.textContent = "";
  e.preventDefault();
  getWeatherForecast(location.value).then((res) => {
    if (degree.checked) {
      measurement = "°F";
    } else {
      measurement = "°C";
    }
    makePage(res, weatherDiv, measurement);
  });
});
