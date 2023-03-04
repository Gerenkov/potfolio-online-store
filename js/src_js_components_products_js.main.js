(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_products_js"],{

/***/ "./src/js/components/products.js":
/*!***************************************!*\
  !*** ./src/js/components/products.js ***!
  \***************************************/
/***/ (() => {

const productsGrid = document.querySelector('.grid-products');
const loadMore = document.querySelector('.main-products__more');
let quantityProducts = 5;
let dataLength = '';
if (productsGrid) {
  const fetchProducts = function () {
    let quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    fetch('/products.json').then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      dataLength = data.length;
      productsGrid.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        if (i < quantity) {
          productsGrid.innerHTML += `
          <li class="grid-products__item">
            <article class="product">
              <div class="product__image">
                <img src="${data[i].image}" alt="${data[i].title}">
              </div>
              <h3 class="product__title">
                <a href="#">
                  ${data[i].title}
                </a>
              </h3>
              <span class="product__price">$${data[i].price}</span>
            </article>
          </li>
        `;
        }
      }
    });
  };
  fetchProducts(quantityProducts);
  loadMore.addEventListener('click', e => {
    quantityProducts = quantityProducts + 5;
    console.log(quantityProducts);
    console.log(dataLength);
    fetchProducts(quantityProducts);
    if (quantityProducts == dataLength) {
      loadMore.style.display = 'none';
    } else {
      loadMore.style.display = 'inline-flex';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_products_js.main.js.map