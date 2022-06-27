//set-up API integration for changing data

function showTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = "cafbd7974d35bf96f37717d1116fdc4b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${apikey}&units=metric`;

axios.get(apiUrl).then(showTemp);
