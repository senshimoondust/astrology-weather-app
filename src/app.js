function handleSearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-weather-form");
searchForm.addEventListener("submit", handleSearch);
