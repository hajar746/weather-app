import "./style.css";
import { getWeatherForecast, makePage } from "./getData";

const btnSearch = document.querySelector(".btn-search");
const location = document.querySelector("#searchLocation");
const weatherDiv = document.querySelector(".weather");

getWeatherForecast("London").then((res) => {
  makePage(res, weatherDiv);
});

btnSearch.addEventListener("click", function (e) {
  weatherDiv.textContent = "";
  e.preventDefault();
  getWeatherForecast(location.value).then((res) => {
    makePage(res, weatherDiv);
  });
});
