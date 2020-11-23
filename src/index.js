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
  const switchBtns = elToggle.querySelectorAll('.switch-active');
  switchBtns.forEach(btn => {
    btn.classList.remove('switch-active');
  });
  e.target.classList.add('switch-active');
  const dataUnit = e.target.dataset.switch;
  convertTemperature(dataUnit);
});
