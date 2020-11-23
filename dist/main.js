/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\n\n(0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.displayWeatherInfoFor)('Tema');\nconst weatherFormEl = document.getElementById('locationForm');\n\nweatherFormEl.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const cityName = weatherFormEl.querySelector('.form-control.city-input').value;\n  (0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.displayWeatherInfoFor)(cityName);\n  weatherFormEl.reset();\n});\n\nconst elToggle = document.querySelector('.unit-toggler');\nelToggle.addEventListener('click', (e) => {\n  const dataUnit = e.target.dataset.target;\n  (0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(dataUnit);\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! namespace exports */
/*! export convertTemperature [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayWeatherInfoFor [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayWeatherInfoFor\": () => /* binding */ displayWeatherInfoFor,\n/* harmony export */   \"convertTemperature\": () => /* binding */ convertTemperature\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\nconst LOCAL_STORAGE_WEATHER_INFO = 'weather.info';\nconst weatherInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WEATHER_INFO)) || {};\n\nconst envVariables = 'a3a3c872c3aed550e72581047c492050';\n\nasync function fetchWeatherDataFor(city) {\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${envVariables}`);\n    return await response.json();\n  } catch (err) {\n    return err.message;\n  }\n}\n\nconst displayWeatherInfoFor = (city) => {\n  fetchWeatherDataFor(city)\n    .then(weatherData => {\n      if (weatherData.sys) {\n        weatherInfo.cod = weatherData.cod;\n        weatherInfo.city = weatherData.name;\n        weatherInfo.country = weatherData.sys.country;\n        weatherInfo.temp = weatherData.main.temp;\n        weatherInfo.description = weatherData.weather[0].description;\n        weatherInfo.icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;\n        localStorage.setItem(LOCAL_STORAGE_WEATHER_INFO, JSON.stringify(weatherInfo));\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.cityEl.textContent = weatherInfo.city;\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.countryEl.textContent = weatherInfo.country;\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.tempValueEl.textContent = `${weatherInfo.temp}\\xb0C`;\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.weatherDescriptionEl.textContent = weatherInfo.description;\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.weatherIconEl.src = weatherInfo.icon;\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.searchErrorEl.textContent = '';\n      } else {\n        _dom__WEBPACK_IMPORTED_MODULE_0__.default.searchErrorEl.textContent = weatherData.message;\n      }\n    });\n};\n\nconst convertTemperature = (unit) => {\n  if (unit === 'fahrenheit') {\n    const value = parseFloat(weatherInfo.temp);\n    const fahrenheit = ((value * 9) / 5 + 32).toFixed(2);\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.tempValueEl.innerHTML = `${fahrenheit}\\xb0F`;\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.tempValueEl.textContent = `${weatherInfo.temp}\\xb0C`;\n  }\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst weatherInfoEl = () => {\n  const cityEl = document.querySelector('.city');\n  const countryEl = document.querySelector('.country');\n  const tempValueEl = document.querySelector('.temperature-value');\n  const tempUnitEl = document.querySelector('.temperature-unit');\n  const weatherIconEl = document.querySelector('.icon');\n  const weatherDescriptionEl = document.querySelector('.weather-description');\n  const searchErrorEl = document.querySelector('.error-msg');\n\n  return {\n    searchErrorEl,\n    cityEl,\n    countryEl,\n    tempValueEl,\n    tempUnitEl,\n    weatherIconEl,\n    weatherDescriptionEl,\n  };\n};\n\nconst weatherInfoElements = weatherInfoEl();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherInfoElements);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;