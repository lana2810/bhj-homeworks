const textArea = document.querySelector('#editor');
const btn = document.querySelector('.button');

textArea.value = localStorage.getItem('text');

textArea.addEventListener('input', () => {
  localStorage.setItem('text', textArea.value);
});

btn.addEventListener('click', () => {
  localStorage.removeItem('text');
  textArea.value = '';
});
