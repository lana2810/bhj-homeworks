const editOutput = (number) => (number >= 10 ? ` 00:00:${number}` : ` 00:00:0${number}`);

let timer = document.getElementById('timer');
let timerNumber = Number(timer.textContent);
timer.textContent = editOutput(timerNumber);

const interval = setInterval(() => {
  if (timerNumber > 0) {
    timerNumber -= 1;
    timer.textContent = editOutput(timerNumber);
  } else { 
    alert('Вы победили в конкурсе');
    clearInterval(interval);
    // window.location = "adam.jpg";
    const a = document.getElementById('a_download');
    a.href = "adam.jpg";
    a.click();
  }
},1000)
