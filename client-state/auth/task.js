const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const btnIn = document.querySelector('#signin__btn');
const btnOut = document.querySelector('#signout__btn');
const welcome = document.querySelector('#welcome');
const spanUserId = document.querySelector('#user_id');

function greeting(id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  spanUserId.textContent = id;
}
if (localStorage.id) {
  greeting(localStorage.id);
}

btnIn.addEventListener('click', (event) => {
  event.preventDefault()
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
        form.reset();
      }
    }
  }
})

btnOut.addEventListener('click', event => {
  event.preventDefault();
  localStorage.clear();
  window.location.reload();
})
