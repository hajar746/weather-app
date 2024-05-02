import "./style.css";
import { getWeatherForecast } from "./getData";

const btnSearch = document.querySelector(".btn-search");
const location = document.querySelector("#searchLocation");

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  getWeatherForecast(location.value).then((res) => {
    console.log(res.location);
  });
  location.value = "";
});
