const card = document.querySelector('div.card');
const allRotator = [...card.querySelectorAll('span.rotator__case')];
let timeInterval = allRotator[0].dataset.speed;
allRotator[0].style.color = allRotator[0].dataset.color;

setInterval(() => {
  let index = allRotator.findIndex((item => item.classList.contains('rotator__case_active')));
  allRotator[index].classList.remove('rotator__case_active');
  const numberRotator = allRotator.length;
  (index === numberRotator - 1) ? index = 0 : index++;
  allRotator[index].classList.add('rotator__case_active');
  allRotator[index].style.color = allRotator[index].dataset.color;
  timeInterval = allRotator[index].dataset.speed;
}, timeInterval)
