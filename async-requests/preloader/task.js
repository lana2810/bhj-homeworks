function createElement (char, value) {
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
  <div class="item__code">
    ${char}
  </div>
  <div class="item__value">
    ${value}
  </div>
  <div class="item__currency">
    руб.
  </div>`;
  return element;
}

const xhr = new XMLHttpRequest();
const items = document.querySelector('#items');
const loader = document.querySelector('#loader');
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let responseObj = JSON.parse(xhr.response);
    let arrayСurrency = Object.values(responseObj.response.Valute);
    arrayСurrency.forEach(currency => {
      const item = createElement(currency.CharCode, currency.Value);
      items.append(item);
    })
  }
}) 