"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_burger_js"],{

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$burger) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$burger.addEventListener('click', () => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$nav.classList.add('nav--visible');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$pageBody.classList.add('body--visible');
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$navClose.addEventListener('click', () => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$nav.classList.remove('nav--visible');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$pageBody.classList.remove('body--visible');
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$nav.addEventListener('click', e => {
    if (e.target.classList.contains('nav__link')) {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$nav.classList.remove('nav--visible');
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_burger_js.main.js.map