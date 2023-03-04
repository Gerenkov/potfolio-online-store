"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_card-bottom-tabs_js"],{

/***/ "./src/js/components/card-bottom-tabs.js":
/*!***********************************************!*\
  !*** ./src/js/components/card-bottom-tabs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$cardDescrLink.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');
    console.log(target);
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$cardDescrLink.forEach(el => el.classList.remove('card-description__link--active'));
    document.querySelectorAll('.card-description__content').forEach(el => el.classList.remove('card-description__content--active'));
    e.currentTarget.classList.add('card-description__link--active');
    document.querySelector(`[data-target="${target}"]`).classList.add('card-description__content--active');
  });
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_card-bottom-tabs_js.main.js.map