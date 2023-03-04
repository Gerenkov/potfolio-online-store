"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_free-delivery_js"],{

/***/ "./src/js/components/free-delivery.js":
/*!********************************************!*\
  !*** ./src/js/components/free-delivery.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (document.querySelector('.catalog')) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$freeDeliveryBtn.addEventListener('click', e => {
    e.currentTarget.closest('.free-delivery').style.display = 'none';
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$headerPadding.classList.remove('header-padding');
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_free-delivery_js.main.js.map