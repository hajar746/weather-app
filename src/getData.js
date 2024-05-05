// ASYNC FUNCTION TO FETCH WEATHER DATA OBJECT
export async function getWeatherForecast(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=dcbb8d1168bf4c6db0e91737242404&q=${location}&days=3&aqi=no&alerts=no`
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

// MAKE WEATHER PAGE USING FETCHED DATA
export function makePage(data, div, measurement) {
  div.insertAdjacentHTML(
    "beforeend",
    `
    <div class = 'main'>
      <div class="temp">
      <div class='temp-info'>
      <h1 class="temperature">${
        measurement === "°C" ? data.current.temp_c : data.current.temp_f
      }${measurement}</h1>
         <img src="${data.current.condition.icon}" alt="temp-icon" />
          <h3>${data.current.condition.text}</h3>
      </div>
          <div class= 'city'>
            <h3 class="city-title">${data.location.name}, ${
      data.location.country
    }</h3>
          </div>
      </div>
      </div>
      <div class='div-weather-info'>
        <div class="info">
          <h3>Feels like</h3>
          <p>${
            measurement === "°C"
              ? data.current.feelslike_c
              : data.current.feelslike_f
          }${measurement}</p>
        </div>
        <div class="info">
          <h3>Chance of rain</h3>
          <p>${data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
        </div>
        <div class="info">
          <h3>Humidity</h3>
          <p>${data.current.humidity}</p>
        </div>
        <div class="info">
          <h3>Wind</h3>
          <p>${
            measurement === "°C"
              ? data.forecast.forecastday[0].day.maxwind_kph
              : data.forecast.forecastday[0].day.maxwind_mph
          } ${measurement === "°C" ? "km/h" : "mph"}</p>
        </div>
        <div class="info">
          <h3>Highest temp</h3>
          <p>${
            measurement === "°C"
              ? data.forecast.forecastday[0].day.maxtemp_c
              : data.forecast.forecastday[0].day.maxtemp_f
          }${measurement}</p>
        </div>
        <div class="info">
          <h3>Lowest temp</h3>
          <p>${
            measurement === "°C"
              ? data.forecast.forecastday[0].day.mintemp_c
              : data.forecast.forecastday[0].day.mintemp_f
          }${measurement}</p>
        </div>
        <div class="info">
          <h3>UV index</h3>
          <p>${data.current.uv}</p>
        </div>
      </div>
      <div class="hourly">
        <h2>Hourly Forecast</h2>
        <ul class="hourly-divs">
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[7].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[7].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[8].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[8].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[9].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[9].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[10].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[10].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[11].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[11].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[12].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[12].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[13].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[13].condition.icon
            }" alt="" />
          </li>
          <li class="hourly-div">
            <p>${data.forecast.forecastday[0].hour[14].time}</p>
            <img src="${
              data.forecast.forecastday[0].hour[14].condition.icon
            }" alt="" />
          </li>
        </ul>
      </div>
    <div class="daily">
        <h2>Daily Forecast</h2>
        <ul class="daily-divs">
          <li class="daily-div">
            <h3>${data.forecast.forecastday[0].date}</h3>
            <img src="${
              data.forecast.forecastday[0].day.condition.icon
            }" alt="">
            <p>${data.forecast.forecastday[0].day.maxtemp_c}/${
      data.forecast.forecastday[0].day.maxtemp_c
    }</p>
          </li>
          <li class="daily-div">
            <h3>${data.forecast.forecastday[1].date}</h3>
            <img src="${
              data.forecast.forecastday[1].day.condition.icon
            }" alt="">
            <p>${data.forecast.forecastday[1].day.maxtemp_c}/${
      data.forecast.forecastday[1].day.maxtemp_c
    }</p>
          </li>
          <li class="daily-div">
            <h3>${data.forecast.forecastday[2].date}</h3>
            <img src="${
              data.forecast.forecastday[2].day.condition.icon
            }" alt="">
            <p>${data.forecast.forecastday[2].day.maxtemp_c}/${
      data.forecast.forecastday[2].day.maxtemp_c
    }</p>
          </li>
          
        </ul>
      </div>
`
  );
}
