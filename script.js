"use strict";
//selectors
const button = document.querySelector("button");
const inputBox = document.querySelector("#input");
const weatherImg = document.querySelector(".weather-icon");
const temprature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

//fetching api
const apiKey = "8f8884f915104fbd992203445232112";

async function getData(city) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    let data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error", error);
  }
}
//event listener click & enter
button.addEventListener("click", () => {
  getInputValue();
});
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getInputValue();
  }
});
//get input value
const getInputValue = function () {
  if (inputBox.value === "") {
    alert("Add a City");
  } else {
    getData(inputBox.value);
  }
  inputBox.value = "";
};
//functions
const displayData = function (data) {
  const location = data.location;
  const current = data.current;

  temprature.innerHTML = `${Math.round(current.temp_c)}°c`;
  cityName.innerHTML = `${location.name}°c`;
  humidity.innerHTML = `${current.humidity}%`;
  wind.innerHTML = `${current.wind_kph}km/h`;

  switch (current.condition.code) {
    case 1000:
      weatherImg.src = "images/clear.png";
      break;
    case 1003:
    case 1030:
      weatherImg.src = "images/mist.png";
      break;
    case 1006:
    case 1009:
      weatherImg.src = "images/clouds.png";
      break;
    case 1063:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
    case 1240:
    case 1243:
    case 1246:
    case 1273:
    case 1276:
      weatherImg.src = "images/drizzle.png";
      break;
    case 1066:
    case 1114:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1258:
    case 1279:
    case 1282:
      weatherImg.src = "images/snow.png";
      break;
  }
  document.querySelector(".weather").style.display = "block";
};
