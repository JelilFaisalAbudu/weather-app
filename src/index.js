import { displayWeatherInfoFor, convertTemperature } from './modules/app';

displayWeatherInfoFor('Tema');
const weatherFormEl = document.getElementById('locationForm');

weatherFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = weatherFormEl.querySelector('.form-control.city-input').value;
  displayWeatherInfoFor(cityName);
  weatherFormEl.reset();
});

const elToggle = document.querySelector('.unit-toggler');
elToggle.addEventListener('click', (e) => {
  const dataUnit = e.target.dataset.target;
  convertTemperature(dataUnit);
});
