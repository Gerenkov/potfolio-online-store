"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_marketing_js"],{

/***/ "./src/js/components/marketing.js":
/*!****************************************!*\
  !*** ./src/js/components/marketing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing) {
  // закрытие по клику
  const closeMarketing = () => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing.classList.remove('marketing--visible');
  };
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing.addEventListener('click', e => {
    if (e.target.classList.contains('marketing__close')) {
      closeMarketing();
    }
  });

  // показ баннера через определённое время
  let counter = 0;
  let delay = 8000;
  const data = [{
    title: 'Title of product 1',
    where: 'Moskow, Russia'
  }, {
    title: 'Title of product 2',
    where: 'Kiev, Ukraine'
  }, {
    title: 'Title of product 3',
    where: 'Rome, Italy'
  }];
  const changeMarketingData = () => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing.classList.remove('marketing--visible');
    setTimeout(() => {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing.classList.add('marketing--visible');
    }, delay - 4000);
    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing.querySelector('.marketing__title').textContent = stringTitle;
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$marketing.querySelector('.marketing__when-from').textContent = stringWhere;
    counter++;
    if (counter === data.length) {
      counter = 0;
    }
  };
  changeMarketingData();
  setInterval(changeMarketingData, delay);
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_marketing_js.main.js.map