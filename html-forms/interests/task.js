const interests = document.querySelectorAll('.interest__check');

interests.forEach(interest => {

  interest.addEventListener('change', (event) => {
    const {target} = event;
    const childrenInterest = target.closest('.interest').querySelectorAll('.interest__check');
    childrenInterest.forEach(it => it.checked = target.checked);
  })
})