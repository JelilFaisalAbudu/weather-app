// import domObjects from './dom';

const dom = () => {
  const cityEl = document.querySelector('.city');
  const countryEl = document.querySelector('.country');
  const tempValueEl = document.querySelector('.temperature-value');
  const tempUnitEl = document.querySelector('.temperature-unit');
  const weatherIconEl = document.querySelector('.icon');
  const weatherDescriptionEl = document.querySelector('.weather-description');

  return {
    cityEl,
    countryEl,
    tempValueEl,
    tempUnitEl,
    weatherIconEl,
    weatherDescriptionEl,
  };
};

const weatherInfoElements = dom();


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
        console.log(weatherData);
        weatherInfoElements.cityEl.textContent = weatherData.name;
        weatherInfoElements.countryEl.textContent = weatherData.sys.country;
        weatherInfoElements.tempValueEl.textContent = weatherData.main.temp;
        weatherInfoElements.weatherDescriptionEl.textContent = weatherData.weather[0].description;
        weatherInfoElements.weatherIconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
      } else {
        console.log(weatherData.message);
      }
    });
};

const convertTemperature = () => {
  
}

export default displayWeatherInfoFor;