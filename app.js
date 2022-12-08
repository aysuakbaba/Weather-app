const API = "4fa9b0e9512728d49ad3d46921025dba";

const celsius = document.querySelector("#celsius");
const cityName = document.querySelector("#city-name");
const weatherStat = document.querySelector("#weather-stat");
const feelsLikeTemp = document.querySelector("#feels-like-temp");
const percent = document.querySelector("#percent");
const pressure = document.querySelector("#pressure");
const minTemp = document.querySelector("#min-temp");
const maxTemp = document.querySelector("#max-temp");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");

const getResults = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`,{mode:"cors"});
    return response.json();
}

cityInput.addEventListener("keypress", async (e)=>{
    if(e.keyCode === 13){
        const weather = await getResults(cityInput.value); 
        cityInput.value="";
        cityName.innerText = weather.name;
        celsius.innerText = Math.round(weather.main.temp) + " ℃";
        weatherStat.innerText = weather.weather[0].main;
        feelsLikeTemp.innerText = weather.main.feels_like;
        percent.innerText = weather.main.humidity;
        pressure.innerText = weather.main.pressure;
        minTemp.innerText = weather.main.temp_min;
        maxTemp.innerText = weather.main.temp_max;
        card.style.display = "flex";

    }

})
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}