const dropdownValue = document.querySelector('div.dropdown__value');
const dropdownList = document.querySelector('ul.dropdown__list');
dropdownValue.addEventListener('click', (event) => {
  dropdownList.classList.toggle('dropdown__list_active');
});
dropdownList.addEventListener('click', (event) => {
  event.preventDefault();
  const {target} = event;
  const isDropdowmLink = target.closest('a.dropdown__link');
  if (isDropdowmLink) {
    dropdownValue.textContent = target.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  }
})  