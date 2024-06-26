/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherForecast: () => (/* binding */ getWeatherForecast),\n/* harmony export */   makePage: () => (/* binding */ makePage)\n/* harmony export */ });\nlet days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n\n// ASYNC FUNCTION TO FETCH WEATHER DATA OBJECT\nasync function getWeatherForecast(location) {\n  try {\n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dcbb8d1168bf4c6db0e91737242404&q=${location}&days=3&aqi=no&alerts=no`);\n    const json = await response.json();\n    return json;\n  } catch (err) {\n    console.log(err);\n  }\n}\n\n// MAKE WEATHER PAGE USING FETCHED DATA\nfunction makePage(data, div, measurement) {\n  div.insertAdjacentHTML(\"beforeend\", `\n    <div class = 'main'>\n      <div class=\"temp\">\n      <div class='temp-info'>\n      <h1 class=\"temperature\">${measurement === \"°C\" ? data.current.temp_c : data.current.temp_f}${measurement}</h1>\n         <img src=\"${data.current.condition.icon}\" alt=\"temp-icon\" class='main-icon'/>\n          <h3>${data.current.condition.text}</h3>\n      </div>\n          <div class= 'city'>\n            <h3 class=\"city-title\">${data.location.name}, ${data.location.country}</h3>\n          </div>\n      </div>\n      </div>\n      <div class='div-weather-info'>\n        <div class=\"info\">\n          <h3>Feels like</h3>\n          <p>${measurement === \"°C\" ? data.current.feelslike_c : data.current.feelslike_f}${measurement}</p>\n        </div>\n        <div class=\"info\">\n          <h3>Chance of rain</h3>\n          <p>${data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>\n        </div>\n        <div class=\"info\">\n          <h3>Humidity</h3>\n          <p>${data.current.humidity}</p>\n        </div>\n        <div class=\"info\">\n          <h3>Wind</h3>\n          <p>${measurement === \"°C\" ? data.forecast.forecastday[0].day.maxwind_kph : data.forecast.forecastday[0].day.maxwind_mph} ${measurement === \"°C\" ? \"km/h\" : \"mph\"}</p>\n        </div>\n        <div class=\"info\">\n          <h3>Highest temp</h3>\n          <p>${measurement === \"°C\" ? data.forecast.forecastday[0].day.maxtemp_c : data.forecast.forecastday[0].day.maxtemp_f}${measurement}</p>\n        </div>\n        <div class=\"info\">\n          <h3>Lowest temp</h3>\n          <p>${measurement === \"°C\" ? data.forecast.forecastday[0].day.mintemp_c : data.forecast.forecastday[0].day.mintemp_f}${measurement}</p>\n        </div>\n        <div class=\"info\">\n          <h3>UV index</h3>\n          <p>${data.current.uv}</p>\n        </div>\n      </div>\n      <div class=\"hourly\">\n        <h2>Hourly Forecast</h2>\n        <ul class=\"hourly-divs\">\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[7].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[7].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[8].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[8].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[9].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[9].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[10].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[10].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[11].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[11].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[12].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[12].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[13].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[13].condition.icon}\" alt=\"\" />\n          </li>\n          <li class=\"hourly-div\">\n            <p>${data.forecast.forecastday[0].hour[14].time.substring(10)}</p>\n            <img src=\"${data.forecast.forecastday[0].hour[14].condition.icon}\" alt=\"\" />\n          </li>\n        </ul>\n      </div>\n    <div class=\"daily\">\n        <h2>Daily Forecast</h2>\n        <ul class=\"daily-divs\">\n          <li class=\"daily-div\">\n            <h3>${days[new Date(data.forecast.forecastday[0].date).getDay()]}</h3>\n            <img src=\"${data.forecast.forecastday[0].day.condition.icon}\" alt=\"\">\n            <p>${measurement === \"°C\" ? data.forecast.forecastday[0].day.maxtemp_c : data.forecast.forecastday[0].day.maxtemp_f}${measurement} / ${measurement === \"°C\" ? data.forecast.forecastday[0].day.mintemp_c : data.forecast.forecastday[0].day.mintemp_f}${measurement}</p>\n          </li>\n          <li class=\"daily-div\">\n            <h3>${days[new Date(data.forecast.forecastday[1].date).getDay()]}</h3>\n            <img src=\"${data.forecast.forecastday[1].day.condition.icon}\" alt=\"\">\n            <p>${measurement === \"°C\" ? data.forecast.forecastday[1].day.maxtemp_c : data.forecast.forecastday[1].day.maxtemp_f}${measurement} / ${measurement === \"°C\" ? data.forecast.forecastday[1].day.mintemp_c : data.forecast.forecastday[1].day.mintemp_f}${measurement}</p>\n          </li>\n          <li class=\"daily-div\">\n            <h3>${days[new Date(data.forecast.forecastday[2].date).getDay()]}</h3>\n            <img src=\"${data.forecast.forecastday[2].day.condition.icon}\" alt=\"\">\n            <p>${measurement === \"°C\" ? data.forecast.forecastday[2].day.maxtemp_c : data.forecast.forecastday[2].day.maxtemp_f}${measurement} / ${measurement === \"°C\" ? data.forecast.forecastday[2].day.mintemp_c : data.forecast.forecastday[2].day.mintemp_f}${measurement}</p>\n          </li>\n          \n        </ul>\n      </div>\n`);\n}\n\n//# sourceURL=webpack://template/./src/getData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n\n\nconst btnSearch = document.querySelector(\".btn-search\");\nconst location = document.querySelector(\"#searchLocation\");\nconst weatherDiv = document.querySelector(\".weather\");\nconst degree = document.querySelector(\"input[id='degree']\");\nconst form = document.querySelector(\".form-search\");\nlet measurement = \"°C\";\n\n// PAGE LOADERR\nwindow.addEventListener(\"load\", function () {\n  const loader = this.document.querySelector(\".loader\");\n  loader.classList.add(\"loader-hidden\");\n  if (weatherDiv !== \"\") {\n    loader.remove();\n  }\n});\n\n// DEFAULT WEATHER\n(0,_getData__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecast)(\"London\").then(res => {\n  (0,_getData__WEBPACK_IMPORTED_MODULE_1__.makePage)(res, weatherDiv, measurement);\n});\n\n// SWITCH TO F/C\ndegree.addEventListener(\"change\", function () {\n  weather();\n});\n\n// SEARCH FOR A CITY\nbtnSearch.addEventListener(\"click\", function (e) {\n  if (!form.checkValidity()) return;\n  e.preventDefault();\n  weather();\n});\nconst weather = function () {\n  weatherDiv.textContent = \"\";\n  (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecast)(location.value || \"London\").then(res => {\n    (0,_getData__WEBPACK_IMPORTED_MODULE_1__.makePage)(res, weatherDiv, `${degree.checked ? \"°F\" : \"°C\"}`);\n  });\n};\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Work Sans\", sans-serif;\r\n}\r\n\r\n/* HEADER */\r\n.app-name {\r\n  font-weight: 400;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.brand {\r\n  display: flex;\r\n}\r\n\r\n.logo {\r\n  height: 70px;\r\n  width: 70px;\r\n}\r\n\r\n.homepage {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  max-height: 100%;\r\n}\r\n\r\n.form-search {\r\n  justify-content: center;\r\n  align-self: center;\r\n}\r\n\r\n.form-search {\r\n  margin: 1.2rem;\r\n  padding: 0.5rem;\r\n  width: 700px;\r\n  align-items: center;\r\n  display: flex;\r\n  border-radius: 60px;\r\n  background-color: rgba(193, 203, 209, 0.4);\r\n}\r\n\r\n.form-search input {\r\n  background: none;\r\n  flex: 1;\r\n  border: 0;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.form-search button img {\r\n  width: 2rem;\r\n}\r\n\r\n.form-search button {\r\n  border: 0;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.form-search button img:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n::placeholder {\r\n  color: #000;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n}\r\n\r\n#degree {\r\n  -webkit-appearance: none;\r\n  position: relative;\r\n  max-width: 65px;\r\n  height: 35px;\r\n  border-radius: 25px;\r\n  background-color: #ccc;\r\n  transition: background-color 0.3s;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n#degree::after {\r\n  content: \"°C\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 30%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 50%;\r\n  height: 1.4rem;\r\n  width: 1.4rem;\r\n  background-color: #fff;\r\n  transition: left 0.3s;\r\n  padding: 2.5px;\r\n}\r\n\r\n#degree:checked {\r\n  background-color: #aedaf3;\r\n}\r\n\r\n#degree:checked::after {\r\n  content: \"°F\";\r\n  left: 70%;\r\n}\r\n\r\n/* WEATHER DIV */\r\n\r\n.main {\r\n  display: flex;\r\n  width: 80%;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  padding: 2rem 4rem;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.info p,\r\n.info h3 {\r\n  margin: 0;\r\n}\r\n\r\n.info h3,\r\n.temp-info h3 {\r\n  font-weight: 600;\r\n}\r\n\r\n.temp {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.temp-info {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.temp-info h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n}\r\n\r\n.temp-info h3 {\r\n  align-self: flex-end;\r\n}\r\n\r\n.div-weather-info {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  column-gap: 2rem;\r\n  width: fit-content;\r\n  background-color: #aedaf3;\r\n  margin: 1rem 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n/* HOURLY AND DAILY FORECAST */\r\n.hourly,\r\n.daily {\r\n  padding: 2rem;\r\n}\r\n\r\n.hourly-divs li,\r\n.daily-divs li {\r\n  list-style: none;\r\n  background-color: rgba(193, 203, 209, 0.4);\r\n  border-radius: 20px;\r\n  text-align: center;\r\n}\r\n.hourly-divs {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  column-gap: 1rem;\r\n  padding: 0;\r\n}\r\n\r\n.daily-divs {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  column-gap: 1rem;\r\n  padding: 0;\r\n}\r\n\r\n.daily-div p {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/* PAGE LOADER */\r\n.loader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  transition: opacity 0.75s, visibility 0.75s;\r\n}\r\n\r\n.loader-hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.loader::after {\r\n  content: \"\";\r\n  width: 75px;\r\n  height: 75px;\r\n  border: 15px solid #dddd;\r\n  border-top-color: #aedaf3;\r\n  border-radius: 50%;\r\n  animation: loading 0.75s ease infinite;\r\n}\r\n\r\n@keyframes loading {\r\n  from {\r\n    transform: rotate(0turn);\r\n  }\r\n  to {\r\n    transform: rotate(1turn);\r\n  }\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (max-width: 500px) {\r\n  .form-search,\r\n  .form-search-2 {\r\n    width: 300px;\r\n  }\r\n  .hourly-divs,\r\n  .div-weather-info {\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: 1rem;\r\n  }\r\n  .homepage {\r\n    flex-direction: column;\r\n  }\r\n  .div-weather-info {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  #degree {\r\n    min-width: 38px;\r\n    height: 28px;\r\n    font-size: 1rem;\r\n  }\r\n  #degree::after {\r\n    height: 1.2rem;\r\n    width: 1.2rem;\r\n    padding: 2px;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;