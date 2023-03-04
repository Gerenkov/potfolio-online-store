"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_catalog-props_js"],{

/***/ "./src/js/components/catalog-props.js":
/*!********************************************!*\
  !*** ./src/js/components/catalog-props.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (document.querySelector('.catalog')) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogColumns.addEventListener('click', e => {
    if (e.target.classList.contains('catalog-columns__btn') || e.target.closest('.catalog-columns__item')) {
      let columns = e.target.dataset.columns;
      let $columnsBtn = document.querySelectorAll('.catalog-columns__btn');
      $columnsBtn.forEach(el => {
        el.classList.remove('catalog-columns__btn--current');
      });
      e.target.classList.add('catalog-columns__btn--current');
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogGridContent.dataset.gridColumns = columns;
    }
  });
}
if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$customSelect) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$customSelect.forEach(el => {
    el.addEventListener('click', e => {
      e.currentTarget.classList.toggle('custom-select--open');
      if (e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;
        e.currentTarget.querySelector('.custom-select__top').textContent = text;
      }
    });
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_catalog-props_js.main.js.map