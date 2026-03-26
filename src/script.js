const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");


const iconMap = {
  "Clear": "icons/clear.png",
  "Clouds": "icons/clouds.png",
  "Rain": "icons/rain.png",
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

