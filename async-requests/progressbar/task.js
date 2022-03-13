const progress = document.getElementById( 'progress' );
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);
  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total;
  }
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
  
})