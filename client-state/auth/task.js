const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const btnIn = document.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');
const spanUserId = document.querySelector('#user_id');

const btnOut = document.createElement('button');
btnOut.className = 'btn';
btnOut.textContent = 'Сброс';
btnOut.style.display = 'block';
btnOut.style.marginTop = '1em';

function greeting(id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  spanUserId.textContent = id;
  welcome.append(btnOut);
}
if (localStorage.id) {
  greeting(localStorage.id);
}

btnIn.addEventListener('click', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';
  xhr.send(formData);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {
      if (xhr.response.success) {
        localStorage.setItem('id', xhr.response.user_id);
        greeting(localStorage.id);
      } else {
        alert('Неверный логин/пароль');
      }
      form.reset();
    }
  };
});

btnOut.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.removeItem('id');
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
});
