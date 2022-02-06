const allSliderItems = [...document.querySelectorAll('.slider__item')];
const arrows = document.querySelectorAll('div.slider__arrow');
const allDots = [...document.querySelectorAll('div.slider__dot')];

function sliderPosition(currentIndex, nextIndex) {
  allSliderItems[currentIndex].classList.remove('slider__item_active');
  allSliderItems[nextIndex].classList.add('slider__item_active');
  allDots[currentIndex].classList.remove('slider__dot_active');
  allDots[nextIndex].classList.add('slider__dot_active');
}

for (const arrow of arrows) {
  arrow.onclick = () => {
    let currentIndex = allSliderItems.findIndex((item => item.classList.contains('slider__item_active')));
    let nextIndex;

    if (arrow.classList.contains('slider__arrow_next')) {
      nextIndex = (currentIndex === (allSliderItems.length - 1) ? 0 : currentIndex + 1);
    } else {
      nextIndex = (currentIndex === 0 ? allSliderItems.length - 1 : currentIndex - 1);
    } 
    sliderPosition(currentIndex, nextIndex);
  }
}
allDots.forEach((dot, index) => {
  dot.onclick = () => {
    let currentIndex = allDots.findIndex((item => item.classList.contains('slider__dot_active')));
    if (currentIndex === -1) {
      currentIndex = 0;
    }
    let nextIndex = index;
    sliderPosition(currentIndex, nextIndex);
  } 
})


