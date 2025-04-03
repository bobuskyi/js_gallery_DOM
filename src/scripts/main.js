'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    mainImage.src = target.href;
  }
});
