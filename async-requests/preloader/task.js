function createElement (char, value) {
  const element = document.createElement('div');
  element.className = 'item';

  const itemCode = document.createElement('div');
  itemCode.className = 'item__code';
  itemCode.textContent = char;

  const itemValue = document.createElement('div');
  itemValue.className = 'item__value';
  itemValue.textContent = value;

  const itemCurrency = document.createElement('div');
  itemCurrency.className = 'item__value';
  itemCurrency.textContent = 'руб.';
  
  element.prepend(itemCode);
  element.append(itemCurrency)
  itemCode.insertAdjacentElement('afterend', itemValue);
  
  return element;
}

const xhr = new XMLHttpRequest();
const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let responseObj = JSON.parse(xhr.response);
    let arrayСurrency = Object.values(responseObj.response.Valute);
    arrayСurrency.forEach(currency => {
      const item = createElement(currency.CharCode, currency.Value);
      items.append(item);
    })
  } else if (xhr.status != 200) {
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  }
}