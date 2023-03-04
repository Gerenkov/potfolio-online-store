"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_stepper_js"],{

/***/ "./src/js/components/stepper.js":
/*!**************************************!*\
  !*** ./src/js/components/stepper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$stepper) {
  const $stepperInput = _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$stepper.querySelector('.stepper__input'),
    $stepperMinus = _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$stepper.querySelector('.stepper__btn--minus'),
    $stepperPlus = _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$stepper.querySelector('.stepper__btn--plus');
  $stepperInput.addEventListener('keydown', e => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value <= 1) {
      $stepperMinus.classList.add('stepper__btn--disabled');
      $stepperPlus.classList.remove('stepper__btn--disabled');
    } else {
      $stepperMinus.classList.remove('stepper__btn--disabled');
    }
    if (e.currentTarget.value > 99998) {
      $stepperMinus.classList.remove('stepper__btn--disabled');
      $stepperPlus.classList.add('stepper__btn--disabled');
    } else {
      $stepperPlus.classList.remove('stepper__btn--disabled');
    }
  });
  $stepperPlus.addEventListener('click', e => {
    let currentValue = parseInt($stepperInput.value);
    currentValue++;
    $stepperInput.value = currentValue;
    $stepperMinus.classList.remove('stepper__btn--disabled');
    if ($stepperInput.value > 99998) {
      $stepperInput.value = 99999;
      $stepperPlus.classList.add('stepper__btn--disabled');
    } else {
      $stepperPlus.classList.remove('stepper__btn--disabled');
    }
  });
  $stepperMinus.addEventListener('click', e => {
    let currentValue = parseInt($stepperInput.value);
    currentValue--;
    $stepperInput.value = currentValue;
    $stepperPlus.classList.remove('stepper__btn--disabled');
    if ($stepperInput.value <= 1) {
      $stepperInput.value = 1;
      $stepperMinus.classList.add('stepper__btn--disabled');
    } else {
      $stepperMinus.classList.remove('stepper__btn--disabled');
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_stepper_js.main.js.map