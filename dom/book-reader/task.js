const book = document.querySelector('#book');
const allLinkFontSize = document.querySelectorAll('a.font-size');
const blockallLinkFontSize = document.querySelector('.book__control_font-size');

blockallLinkFontSize.addEventListener('click', (event) => {
  event.preventDefault();
  book.classList.remove('book_fs-small', 'book_fs-big');
  const {target} = event;
  const isLink = target.closest('.font-size');
  if (isLink) {
    allLinkFontSize.forEach(item => item.classList.remove('font-size_active'));
    target.classList.add('font-size_active');
    const dataSizeBook = target.dataset.size;
    if (dataSizeBook) {
      book.classList.add(`book_fs-${dataSizeBook}`);
    }
  }
})

const blockAllLinkColorText = document.querySelector('.book__control_color');
const allLinkColorText = blockAllLinkColorText.querySelectorAll('a.color');
blockAllLinkColorText.addEventListener('click', (event) => {
  event.preventDefault();
  book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
  const {target} = event;
  const isLink = target.closest('a.color');
  if (isLink) {
    allLinkColorText.forEach(item => item.classList.remove('color_active'));
    target.classList.add('color_active');
    const dataColorText = target.dataset.textColor;
    book.classList.add(`book_color-${dataColorText}`);
  }
})

const blockAllLinkBackground = document.querySelector('.book__control_background');
const allLinkBackground = blockAllLinkBackground.querySelectorAll('a.color');
blockAllLinkBackground.addEventListener('click', (event) => {
  event.preventDefault();
  book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
  const {target} = event;
  const isLink = target.closest('a.color');
  if (isLink) {
    allLinkBackground.forEach(item => item.classList.remove('color_active'));
    target.classList.add('color_active');
    const dataBackground = target.dataset.bgColor;
    book.classList.add(`book_bg-${dataBackground}`);
  }
})