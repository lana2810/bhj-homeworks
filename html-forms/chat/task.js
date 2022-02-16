function getTime() {
  const now = new Date();
  let hours = now.getHours();
  let min = now.getMinutes();
  hours = hours < 10 ? `0${hours}` : hours;
  min = min < 10 ? `0${min}` : min;
  return `${hours}:${min}`
  
}
function answerRobot() {
  const messageRobot = [
    'Здравствуйте',
    'До свидания',
    'Извините',
    'Пожалуйста',
    'Подождите минутку',
    'Извините не понял вопрос',
    'Уточните вопрос',
    'Добрый вечер!',
  ]
  return messageRobot[Math.floor(Math.random() * messageRobot.length)]
}

const input = document.getElementById('chat-widget__input');
const sideText = document.querySelector('div.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
let timerBegin, timerEnd;

sideText.addEventListener('click', (event) => {
  chatWidget.classList.add('chat-widget_active');
  timerBegin = Date.now();
})

setInterval(() => {
  timerEnd = Date.now();
  if ((timerEnd - timerBegin) > 5000) {
    const message = document.querySelector( '.chat-widget__messages' );
    message.innerHTML += `
        <div class="message">
          <div class="message__time">${getTime()}</div>
          <div class="message__text">${answerRobot()}</div>
        </div>`;
    timerBegin = Date.now();
  }
}, 1000)

input.addEventListener('keydown', (event) => {
  if (event.code === "Enter") {
    dataMessageClient = input.value.trim();
    if (dataMessageClient) {
      const message = document.querySelector( '.chat-widget__messages' );
      message.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${dataMessageClient}</div>
          </div>
          <div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${answerRobot()}</div>
          </div>`;
      input.value = '';
    }
    const container = document.querySelector('.chat-widget__messages-container');
    container.scrollTop = container.scrollHeight;
  }
})
