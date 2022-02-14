const allReveal = [...document.querySelectorAll('.reveal')];

window.addEventListener('scroll', (event) => {
  let positionScroll = (window.scrollY / document.body.scrollHeight * window.innerHeight).toFixed(2);
  allReveal.forEach((item) => {
    const { top, bottom } = item.getBoundingClientRect();
    if (+positionScroll > top && +positionScroll < bottom) {
      item.classList.add('reveal_active');
     } else {
      item.classList.remove('reveal_active');
     }
  })
})
