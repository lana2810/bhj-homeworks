const img = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let lastClick = Date.now();
let flag = true;

img.onclick = () => {
  speed.textContent = (1 / (Date.now() - lastClick) * 1000).toFixed(2);
  counter.textContent = Number(counter.textContent) + 1;
  if (flag) {
    img.width += 30;
    img.heigth += 30;
    flag = false;
  } else {
    img.width -= 30;
    img.heigth -= 30;
    flag = true;
  }
  lastClick = Date.now();
}