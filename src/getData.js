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
export function makePage(data, div) {
  div.insertAdjacentHTML(
    "afterbegin",
    `
       <main class="weather">
      <form action="#" class="form-search-2">
        <input
          type="text"
          name="location"
          id="searchLocation2"
          placeholder="${data.location.name}"
          required
        />
      </form>

      <div class="temp">
        <h1 class="temperature">${data.current.temp_c}</h1>
         <img src="${data.current.condition.icon}" alt="temp-icon" />
      <p>${data.current.condition.text}</p>
      </div>
      <div class="imp-info">
        <h3 class="city">${data.location.name}, ${data.location.country}</h3>
        <p>${data.forecast.forecastday[0].date}</p>
      </div>
      <div class="other-info">
        <div class="feels-like">
          <p>Feels like</p>
          <p>${data.current.feelslike_c}</p>
        </div>
        <div class="chance">
          <p>Chance of rain</p>
          <p>${data.forecast.forecastday[0].day.daily_chance_of_rain}</p>
        </div>
        <div class="humidity">
          <p>Humidity</p>
          <p>${data.current.humidity}</p>
        </div>
        <div class="wind">
          <p>Wind</p>
          <p>${data.forecast.forecastday[0].day.maxwind_kph}</p>
        </div>
      </div>
      <div class="more-info">
        <div class="high-temp">
          <p>Highest temp</p>
          <p>${data.forecast.forecastday[0].day.maxtemp_c}</p>
        </div>
        <div class="low-temp">
          <p>Lowest temp</p>
          <p>${data.forecast.forecastday[0].day.mintemp_c}</p>
        </div>
        <div class="uv">
          <p>UV index</p>
          <p>${data.current.uv}</p>
        </div>
      </div>
    </main>
`
  );
}
