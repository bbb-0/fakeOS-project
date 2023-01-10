const text = [...document.querySelectorAll('.modal-notes')];

const notePopup = document.querySelector('.note-popup');

const noteCloseBtn = document.querySelector('.note-close-btn');

text.forEach((item, i) => {
  item.addEventListener('click', () => {
      notePopup.classList.toggle('active');
  })
});

noteCloseBtn.addEventListener('click', () => {
  notePopup.classList.toggle('active');
})