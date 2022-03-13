const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
let idRequest;
let answers;
let indexAnswer;

// function request (method, url) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
// }

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = () => {
  if (xhr.readyState === xhr.DONE && xhr.status == 200) {
    let responseObj = JSON.parse(xhr.response);
    idRequest = responseObj.id;
    pollTitle.textContent = responseObj.data.title;
    answers = responseObj.data.answers;
    answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.className = 'poll__answer';
      btn.textContent = answer;
      pollAnswers.append(btn);
    })
  }
}

pollAnswers.addEventListener('click', event => {
  alert('Спасибо, ваш голос засчитан!');
  const {target} = event;
  indexAnswer = answers.indexOf(target.textContent);
  const xhr1 = new XMLHttpRequest;
  xhr1.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
  xhr1.responseType = 'json';
  xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr1.send(`vote=${idRequest}&answer=${indexAnswer}`);
  xhr1.onreadystatechange = () => {
    if (xhr1.readyState === xhr1.DONE && xhr.status == 200) {
      pollAnswers.style.visibility = 'hidden';
      const arr = xhr1.response.stat;
      const sum = arr.reduce((sum, current) => sum + current.votes, 0);
      arr.forEach(item => {
        const statHtml = document.createElement('div');
        statHtml.textContent = `${item.answer}: ${(item.votes * 100 / sum).toFixed(2)}%`;
        statHtml.style.fontWeight = 'bold';
        pollTitle.append(statHtml);
      })
    }
  }
})
