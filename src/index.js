import "./style.css";
import { getWeatherForecast, makePage } from "./getData";

const btnSearch = document.querySelector(".btn-search");
const location = document.querySelector("#searchLocation");
const homePage = document.querySelector(".homepage");

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  getWeatherForecast(location.value).then((res) => {
    makePage(res, document.body);
  });
  location.value = "";
  homePage.classList.toggle("hide");
});
