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
