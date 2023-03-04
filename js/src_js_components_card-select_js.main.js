"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_card-select_js"],{

/***/ "./src/js/components/card-select.js":
/*!******************************************!*\
  !*** ./src/js/components/card-select.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$colorSelect) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$colorSelect.addEventListener('click', e => {
    if (e.target.classList.contains('color-select__btn')) {
      document.querySelectorAll('.color-select__btn').forEach(el => el.classList.remove('color-select__btn--active'));
      let color = e.target.dataset.color;
      e.currentTarget.querySelector('.color-select__selected span').textContent = color;
      e.target.classList.add('color-select__btn--active');
    }
  });
}
if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$sizeSelect) {
  let size = '';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$sizeSelect.addEventListener('click', e => {
    if (e.target.classList.contains('size-select__btn')) {
      e.currentTarget.querySelector('.size-select__clear').style.display = 'inline-block';
      let color = e.target.dataset.color;
      e.currentTarget.querySelector('.size-select__selected span').textContent = color;
      e.target.classList.toggle('size-select__btn--active');
      if (e.target.classList.contains('size-select__btn--active')) {
        let currentSize = e.target.textContent;
        size += currentSize + ', ';
      } else {
        let currentSize = e.target.textContent + ', ';
        size = size.replace(currentSize, '');
      }
      e.currentTarget.querySelector('.size-select__selected span').textContent = size;
      if (!size) {
        e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
      }
    }
    if (e.target.classList.contains('size-select__clear')) {
      e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
      document.querySelectorAll('.size-select__btn').forEach(el => el.classList.remove('size-select__btn--active'));
      e.target.style.display = 'none';
      size = '';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_card-select_js.main.js.map