"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_mobile-filter_js"],{

/***/ "./src/js/components/mobile-filter.js":
/*!********************************************!*\
  !*** ./src/js/components/mobile-filter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$mobileFiltersOpen) {
  let openFilters = false;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$mobileFiltersOpen.addEventListener('click', e => {
    if (!openFilters) {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$mobileFiltersOpen.querySelector('span').textContent = 'Close';
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogFilters.classList.add('catalog-filters--open');
      openFilters = true;
    } else {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$mobileFiltersOpen.querySelector('span').textContent = 'Filters';
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogFilters.classList.remove('catalog-filters--open');
      openFilters = false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_mobile-filter_js.main.js.map