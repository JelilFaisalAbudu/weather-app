const weatherInfoEl = () => {
  const cityEl = document.querySelector('.city');
  const countryEl = document.querySelector('.country');
  const tempValueEl = document.querySelector('.temperature-value');
  const tempUnitEl = document.querySelector('.temperature-unit');
  const weatherIconEl = document.querySelector('.icon');
  const weatherDescriptionEl = document.querySelector('.weather-description');
  const searchErrorEl = document.querySelector('.error-msg');

  return {
    searchErrorEl,
    cityEl,
    countryEl,
    tempValueEl,
    tempUnitEl,
    weatherIconEl,
    weatherDescriptionEl,
  };
};

const weatherInfoElements = weatherInfoEl();

export default weatherInfoElements;
