const apiKey = 'e289fad8b0dcf2916512a609cdc457a9';
const apiCountryUrl = 'https://countriflagapi.com/png/';

const cityInput = document.querySelector('#city__input');
const cityElement = document.querySelector('#city');
const countryElement = document.querySelector('#country');
const temperatureElement = document.querySelector('#temperature span');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');
const weatherElement = document.querySelector('#weather-data p');
const weatherIcon = document.querySelector('#weather-icon');
const pressureElement = document.querySelector('#pressure span');
const searchBtn = document.querySelector('#search');

//Função para buscar os dados da cidade

const fetchWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(res => res.json())
        .then(jsonBody => {
            const { name, sys: { country }, main: { temp, humidity, pressure }, wind: { speed }, weather: [{ main, icon }] } = jsonBody;

            cityElement.textContent = name;
            console.log(name);
            countryElement.textContent = country;
            console.log(country);
            temperatureElement.textContent = temp;
            console.log(temp);
            humidityElement.textContent = humidity;
            console.log(humidity);
            windElement.textContent = speed;
            console.log(speed);
            pressureElement.textContent = pressure;
            console.log(pressure);
            weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
            console.log(icon);
        })
}

const showDataWather = (city) => {
    const data = fetchWeatherData(city);
}

//Evento para buscar a cidade
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showDataWather(city);

});