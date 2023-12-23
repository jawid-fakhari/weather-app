/*
0. connect to api
1. enter city name to search
2. if input placeholder is doesn't have any name error
3. if the name of city does not exist error
4. get the information from api after click button and reset the input placeholder
5. print the information on screen with first caracter in Capital
6. change the icon image of weather
*/
const button = document.querySelector("button");
const inputBox = document.querySelector("#input");
//fetching api
const apiKey = "8f8884f915104fbd992203445232112";

async function getData(city) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  );
  let data = await response.json();
  return data;
}
//event listener
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
    console.log(getData(inputBox.value));
  }
  inputBox.value = "";
};
