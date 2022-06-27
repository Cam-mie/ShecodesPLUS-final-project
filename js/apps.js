let now = new Date();
let h5 = document.querySelector("h5");

let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h5.innerHTML = `${day}, ${hours}:${minutes}`;

// Enter a city
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  searchCity(searchInput.value);
}

function searchCity(city) {
  let apikey = "cafbd7974d35bf96f37717d1116fdc4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// Temperature of city researched
function showTemp(response) {
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°C`;
}
