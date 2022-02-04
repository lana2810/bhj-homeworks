const menuLink = document.querySelectorAll('a.menu__link');
const allMenuSub = document.querySelectorAll('ul.menu_sub');

for (const link of menuLink) {
  link.onclick = () => {
    allMenuSub.forEach((it) => {
      it.classList.remove('menu_active');
    });
    
    let currentMenuSub = [...link.closest('li').querySelectorAll('ul.menu_sub')];
    if (currentMenuSub.length > 0) {
      // (...currentMenuSub).classList.add('menu_active');
      currentMenuSub[0].classList.add('menu_active');
      return false;
    } 
  }
}

