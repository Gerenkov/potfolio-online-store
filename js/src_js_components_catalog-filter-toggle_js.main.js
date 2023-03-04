"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_catalog-filter-toggle_js"],{

/***/ "./src/js/components/catalog-filter-toggle.js":
/*!****************************************************!*\
  !*** ./src/js/components/catalog-filter-toggle.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (document.querySelector('.catalog')) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogFilterTop.forEach(el => {
    el.addEventListener('click', e => {
      e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
    });
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$hideFilters.addEventListener('click', e => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogFilterTop.forEach(el => {
      el.closest('.catalog-filter').classList.remove('catalog-filter--open');
    });
  });
  const createChoiceItem = text => {
    return `
        <button class="catalog-choice__item btn-reset" data-choice-text="${text}">
          ${text}
          <svg aria-hidden="true">
            <use xlink:href="img/sprite.svg#close"></use>
          </svg>
        </button>
      `;
  };
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogFilterItems.forEach(el => {
    el.querySelector('input').addEventListener('change', e => {
      let checked = el.querySelector('input').checked;
      if (checked) {
        el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
        let text = el.querySelector('.custom-checkbox__text').textContent;
        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));
      } else {
        el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        let text = el.querySelector('.custom-checkbox').dataset.text;
        document.querySelector(`[data-choice-text="${text}"]`).remove();
      }
      el.closest('.catalog-filter').querySelector('.catalog-filter__quantity').textContent = el.closest('.catalog-filter__items').querySelectorAll('.custom-checkbox--active').length;
      let activeCheckboxes = document.querySelectorAll('.custom-checkbox--active');
      if (activeCheckboxes.length > 0) {
        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogChoice.style.display = 'block';
      } else {
        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogChoice.style.display = 'none';
      }
    });
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogChoice.addEventListener('click', e => {
    if (e.target.classList.contains('catalog-choice__item')) {
      e.target.remove();
      let text = e.target.textContent.trimLeft().trimRight();
      document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
      document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
    }
    if (e.target.classList.contains('catalog-choice__clear')) {
      Array.from(e.currentTarget.children).forEach(el => {
        if (!el.classList.contains('catalog-choice__clear')) {
          el.remove();
        }
        document.querySelectorAll('.catalog-filter__quantity').forEach(el => el.textContent = 0);
        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogFilterItems.forEach(el => {
          el.querySelector('input').checked = false;
          el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        });
      });
      e.currentTarget.style.display = 'none';
    }
    if (e.currentTarget.children.length === 1) {
      e.currentTarget.style.display = 'none';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_catalog-filter-toggle_js.main.js.map