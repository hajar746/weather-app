const locationTitle = document.createElement("h1");

// ASYNC FUNCTION TO FETCH WEATHER DATA OBJECT
async function getWeatherForecast(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=dcbb8d1168bf4c6db0e91737242404&q=${location}&days=3&aqi=no&alerts=no`
  );
  const json = await response.json();
  const city = json.location.name;
  locationTitle.textContent = city;
}

export function handleError(err) {
  console.log("ERROR!", err);
}

document.body.appendChild(locationTitle);
getWeatherForecast("Istanbul");
