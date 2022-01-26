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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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

"use strict";


var amountInput = document.getElementById('amount-input');
var interestRateInput = document.getElementById('interest-rate-input');
var lengthOfLoanInput = document.getElementById('length-of-loan-input');
var calculateBtn = document.getElementById('calculate-btn');
var motgageFinalResult = document.getElementById('motgage-final-result');

var errorMessage = 'There is an error in the form, please check it! 😥';
var successMessage = '🧮 Your monthly mortgage payment will be: ';

calculateBtn.addEventListener('click', function (e) {
    if (amountInput.validity.valid && interestRateInput.validity.valid && lengthOfLoanInput.validity.valid) {
        calculateMortgagePayment();
        // console.log('Tenemos contenido, y es ' + amountInput.value)
    } else {
        motgageFinalResult.textContent = errorMessage;
    }
});
function calculateMortgagePayment() {
    var dineroPrestado = amountInput.value;
    var tiempoHipoteca = lengthOfLoanInput.value * 12;
    var interes = interestRateInput.value; // Interés en bruto, sin preparar
    var interesCalculado = interes / 100; // Lo dividimos por 100
    var interesPreparado = interesCalculado / 12; // Y lo dividimos por 12 para prepararlo

    var porcentaje = interesPreparado; // 0.065 / 12 = 6.5% / 12
    var porcentajeMasUno = interesPreparado + 1;
    var elevado = Math.pow(porcentajeMasUno, tiempoHipoteca);
    var primerDividendo = porcentaje * elevado;
    var segundoDividendo = elevado - 1;
    var division = primerDividendo / segundoDividendo;
    var hipoteca = dineroPrestado;
    var letra = hipoteca * division;

    console.log('Parte de arriba de la división: ' + primerDividendo);
    console.log('Parte de abajo de la división: ' + segundoDividendo);
    console.log('División: ' + division);
    console.log('A pagar: ' + letra);

    motgageFinalResult.textContent = successMessage + letra.toFixed(2);
}

/***/ })
/******/ ]);