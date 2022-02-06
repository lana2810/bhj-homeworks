const menusSub = document.querySelectorAll('ul.menu_sub');
let linkMenuSub = [];
for (const menuSub of menusSub) {
  linkMenuSub.push((menuSub.closest('li')).querySelector('a.menu__link'));
}

for (const link of linkMenuSub) {
  link.onclick = () => {
    
    let currentLineMenuSub = link.closest('.menu_main').querySelectorAll('ul.menu_sub');
    let currentItemMenuSub = link.closest('li').querySelector('ul.menu_sub');
  
    if (currentItemMenuSub.classList.contains('menu_active')) {
      currentItemMenuSub.classList.remove('menu_active');
    } else {
      currentLineMenuSub.forEach(it => it.classList.remove('menu_active'));
      currentItemMenuSub.classList.add('menu_active');
    }
    return false;
  }
}
