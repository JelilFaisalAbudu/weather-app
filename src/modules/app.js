import weatherInfoElements from './dom';

const LOCAL_STORAGE_WEATHER_INFO = 'weather.info';
const weatherInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_INFO)) || {};

const WEATHER_APP_API_KEY = 'a3a3c872c3aed550e72581047c492050';

async function fetchWeatherDataFor(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_APP_API_KEY}`);
    return await response.json();
  } catch (err) {
    return err.message;
  }
}

const displayWeatherInfoFor = (city) => {
  fetchWeatherDataFor(city)
    .then(weatherData => {
      if (weatherData.sys) {
        weatherInfo.cod = weatherData.cod;
        weatherInfo.city = weatherData.name;
        weatherInfo.country = weatherData.sys.country;
        weatherInfo.temp = weatherData.main.temp;
        weatherInfo.description = weatherData.weather[0].description;
        weatherInfo.icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        localStorage.setItem(LOCAL_STORAGE_WEATHER_INFO, JSON.stringify(weatherInfo));
        weatherInfoElements.cityEl.textContent = weatherInfo.city;
        weatherInfoElements.countryEl.textContent = weatherInfo.country;
        weatherInfoElements.tempValueEl.textContent = `${weatherInfo.temp}\xb0C`;
        weatherInfoElements.weatherDescriptionEl.textContent = weatherInfo.description;
        weatherInfoElements.weatherIconEl.src = weatherInfo.icon;
      } else {
        weatherInfoElements.weatherInfoContainerEl.textContent = weatherData.message;
      }
    });
};

const convertTemperature = (unit) => {
  if (unit === 'fahrenheit') {
    const value = parseFloat(weatherInfo.temp);
    const fahrenheit = ((value * 9) / 5 + 32).toFixed(2);
    weatherInfoElements.tempValueEl.innerHTML = `${fahrenheit}\xb0F`;
  } else {
    weatherInfoElements.tempValueEl.textContent = `${weatherInfo.temp}\xb0C`;
  }
};

export {
  displayWeatherInfoFor,
  convertTemperature,
};