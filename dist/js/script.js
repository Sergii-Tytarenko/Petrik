/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  /* Tabs
  ---------------------------------------------------------------*/

  const tabContent = document.querySelectorAll('.tabcontent'),
        tabItems = document.querySelectorAll('.tabheader__item'),
        tabItemsContainer = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabContent.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show', 'fade');
    });
    tabItems.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    hideTabContent();
    tabItems[i].classList.add('tabheader__item_active');
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
  }

  tabItemsContainer.addEventListener('click', event => {
    let target = event.target;

    if (target && target.matches('div.tabheader__item')) {
      tabItems.forEach((item, i) => {
        if (target == item) {
          showTabContent(i);
        }
      });
    }
  });
  showTabContent();
  /* Timer
  ---------------------------------------------------------------*/

  const deadline = '2021-04-12';
  let timer = document.querySelector('.timer');
  timerInit(deadline, timer);

  function timerInit(timeToEnd, timer) {
    let days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(setTimer, 1000);
    setTimer();

    function setTimer() {
      let currentDate = calcDate(timeToEnd);

      if (currentDate.total < 0) {
        clearInterval(timeInterval);
      } else {
        days.innerHTML = shiftZero(currentDate.days);
        hours.innerHTML = shiftZero(currentDate.hours);
        minutes.innerHTML = shiftZero(currentDate.minutes);
        seconds.innerHTML = shiftZero(currentDate.seconds);
      }
    }
  }

  function calcDate(time) {
    let t = new Date(time) - new Date();
    return {
      'total': t,
      'days': Math.floor(t / 1000 / 60 / 60 / 24),
      'hours': Math.floor(t / 1000 / 60 / 60 % 24),
      'minutes': Math.floor(t / 1000 / 60 % 60),
      'seconds': Math.floor(t / 1000 % 60)
    };
  }

  function shiftZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  console.log(new Date(deadline));
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map