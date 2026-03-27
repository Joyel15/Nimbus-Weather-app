 // const apiKey = "YOUR_API_KEY_HERE";
 const apiKey = config.apiKey;
 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");


const iconMap = {
  "Clear": "icons/clear.png",
  "Clouds": "icons/clouds.png",
  "Rain": "icons/Rain.png",
  "Snow": "icons/snow.png",
  "Thunderstorm": "icons/thunderstorm.png",
  "Drizzle": "icons/drizzle.png",
  "Mist": "icons/mist.png",
  "Haze": "icons/mist.png",  
  "Fog": "icons/mist.png",       
  "Dust": "icons/dust.png",
  "Sand": "icons/dust.png",       
  "Smoke": "icons/smoke.png",
}

// Weather function code
async function checkWeather(city) {
if(!city){
  alert("Invalid input! Enter a City name");
}

try {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  if(!response.ok){
    throw new Error("Api Failed")
  }

  let data = await response.json();
document.getElementById("city").innerHTML=data.name;
document.getElementById("condition").innerHTML=data.weather[0].main;
document.getElementById("weather-icon").src = iconMap[data.weather[0].main];
document.getElementById("temp").innerHTML=Math.round(data.main.temp) + "°C";
document.getElementById("feels-like").innerHTML=Math.round(data.main.feels_like) + "°C";
document.getElementById("humidity").innerHTML=data.main.humidity + "%";
document.getElementById("wind").innerHTML=Math.round(data.wind.speed) + " km/h";  
document.getElementById("pressure").innerHTML=data.main.pressure + " hPa";  
document.getElementById("visibility").innerHTML=Math.round(data.visibility/1000) + " km";  

} catch(error){
 console.log("Error occured:",error)
} 
}

// Search button code
searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
  searchInput.value=""
})
