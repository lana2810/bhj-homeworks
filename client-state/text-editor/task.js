const textArea = document.querySelector('#editor');
const btn = document.querySelector('.button');
const contentText = localStorage.getItem('text');

if (contentText) {
  textArea.value = contentText;
} else {
  textArea.addEventListener('change', () => {
    localStorage.setItem('text', textArea.value);
  })
}
btn.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
})
