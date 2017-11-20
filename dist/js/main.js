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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

;
(() => {
    'use strict';

    /*variables*/
    /*BEGIN SLIDER*/
    window.onload = function () {
        autoSlider();
    }
    let slider = document.querySelectorAll('.slider');
    let dots = document.querySelectorAll('.dots');
    let count = 0;

    let timer = setInterval(autoSlider, 5000);

    function autoSlider() {
        for (let i = 0; i < slider.length; i++) {
            slider[i].classList.add('active');
        }
        count++;
        if (count > slider.length) {
            count = 1;
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slider[count - 1].classList.remove('active');
        dots[count - 1].className += " active";

    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            dotsSlider();
        });
    }

    function dotsSlider(n) {
        if (n > slider.length) {
            count = 1
        }
        if (n < 1) {
            count = slider.length
        }
        for (let i = 0; i < slider.length; i++) {
            slider[i].classList.add('active');
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slider[count - 1].classList.remove('active');
        dots[count - 1].className += " active";
    }

    /* document.addEventListener('click', function () {
        ) for (let i = 0; i < dots.length; i++ {
             count++;
             clearInterval(timer);
         }
     })*/

    /*END SLIDER*/
    /*BEGIN MOBILE MENU*/
    const btn = document.querySelector('.btn_mobile');
    const nav = document.querySelector('.mobile_nav ');

    function menuNav(btn, nav) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        })
    }

    menuNav(btn, nav);

    /*END MOBILE MENU*/
    let a = 2;
    let b = 4;
    let c;

    function doble(a, b) {

        for (let i = 0; i < arguments.length; i++) {
            arguments.length * 2;
            return arguments[i];
        }
    }

    console.log(doble(a, b));
    doble(a, b);


})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map