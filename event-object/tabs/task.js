const tabNavigator = document.querySelector('.tab__navigation');
const allTab = [...document.querySelectorAll('.tab')];
const allTabContent = [...document.querySelectorAll('.tab__content')];
tabNavigator.addEventListener('click', (event) => {
  const {target} = event;
  if (target.closest('.tab__navigation')) {
    allTabContent.forEach(item => item.classList.remove('tab__content_active'));
    allTab.forEach(item => item.classList.remove('tab_active'));
    const index = allTab.indexOf(target);
    target.classList.add('tab_active');
    allTabContent[index].classList.add('tab__content_active');
  }
});