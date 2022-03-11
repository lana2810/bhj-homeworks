const allDecInc = document.querySelectorAll('.product__quantity-control');
const allProductAdd = document.querySelectorAll('.product__add');


allDecInc.forEach((decInc) => {
  decInc.onclick = function() {
    const value = decInc.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if (decInc.classList.contains('product__quantity-control_dec') && +value.textContent === 1) {
      value.textContent = 1;
    } else {
      value.textContent = decInc.classList.contains('product__quantity-control_dec') ? (+value.textContent - 1) : (+value.textContent + 1);
    }
  }
})

allProductAdd.forEach((productAdd) => {
  productAdd.onclick = function() {
  const id  = productAdd.closest('.product').dataset.id;
  const imgSrc = productAdd.closest('.product').querySelector('.product__image').src;
  const count = productAdd.closest('.product').querySelector('.product__quantity-value').textContent;
  createCartProduct(id, imgSrc, +count);
  }
})

function createCartProduct(id, imgSrc,count) {
  const cartProducts = document.querySelector('.cart__products');
  const element = cartProducts.querySelector(`[data-id='${id}']`);
  if (element) {
    element.querySelector('.cart__product-count').textContent = +element.querySelector('.cart__product-count').textContent + count;
  } else { 
    const div = document.createElement('div');
    div.className = 'cart__product';
    div.setAttribute('data-id', id);
  
    div.innerHTML = `
      <img class="cart__product-image" src=${imgSrc}>
      <div class="cart__product-count">${count}</div>`;
    cartProducts.append(div);
  }
  
}



