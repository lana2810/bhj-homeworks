const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; index < 10; index++) {
  const getHole = (index) => document.getElementById(`hole${index}`);

  getHole(index).onclick = () => {
    if (lost.textContent === '5') {
      alert('Поражение!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if (dead.textContent === '10') {
      alert('Победа!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if (getHole(index).className.includes('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }
  }
}



