function createElement (text) {
  const element = document.createElement('div');
  element.classList.add('tooltip', 'tooltip_active');
  element.textContent = text;
  return element;
}


const allLinks = document.querySelectorAll('.has-tooltip');

for (const link of allLinks) {
  link.onclick = () => {
    let tooltip = link.querySelector('.tooltip');
    let flag = tooltip?.classList.contains('tooltip_active');

    const allToolTips = document.querySelectorAll('.tooltip');
    allToolTips.forEach(it => it.classList.remove('tooltip_active'));

    if (tooltip) {
      if (!flag) {
        tooltip.classList.add('tooltip_active');
      }
    } else {
      tooltip = createElement(link['title']);
      link.insertAdjacentElement('beforeend', tooltip);
    }

    link.style.position = 'relative';
    tooltip.style.position = 'absolute';
    let positionTooltip = link.dataset.position;
    switch (positionTooltip) {
      case 'top':
        tooltip.style.top = `-${tooltip.offsetHeight}px`;
        tooltip.style.left = '0px';
        break;
      case 'left':
        tooltip.style.bottom = '0px';
        tooltip.style.left = `-${tooltip.offsetWidth}px`;
        break;
      case 'right':
        tooltip.style.right = `-${tooltip.offsetWidth}px`;
        tooltip.style.bottom = '0px';
        break;
      case 'bottom':
        tooltip.style.bottom = `-${tooltip.offsetHeight}px`;
        tooltip.style.left = '0px';
        break;
    }
    
    return false;
  }
}