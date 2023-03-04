"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_card-slider_js"],{

/***/ "./src/js/components/card-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/card-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$cardSliderThumbs) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$cardSliderThumbs.addEventListener('click', e => {
    if (e.target.classList.contains('card-slider__thumb')) {
      let src = e.target.querySelector('img').getAttribute('src');
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$sliderImg.setAttribute('src', src);
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_card-slider_js.main.js.map