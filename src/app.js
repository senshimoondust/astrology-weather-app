function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "ft0bd9991o3a946c2e19c0d8328ea357";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form");

  searchCity(cityInput.value);
}

let searchForm = document.querySelector("#search-weather-form");
searchForm.addEventListener("submit", handleSearch);

searchCity("New York");
