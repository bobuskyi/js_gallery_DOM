'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const eventTarget = e.target.closest('a');

  if (eventTarget) {
    e.preventDefault();
    mainImage.setAttribute('src', eventTarget.href);
  }
});
