"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_sliders_js"],{

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination]);
const bannerSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$bannerSlider, {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true
  }
});
const catalogSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$catalogSlider, {
  loop: true,
  slidesPerView: 1,
  containerModifierClass: 'hero-catalog',
  navigation: {
    nextEl: '.hero-next-btn',
    prevEl: '.hero-prev-btn'
  },
  pagination: {
    el: '.hero-pag',
    type: 'bullets',
    clickable: true
  }
});
const relatedSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$cardRelatedSlider, {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  clickable: true,
  pagination: {
    el: '.related-pag',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 4
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_sliders_js.main.js.map