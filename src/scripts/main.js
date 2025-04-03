'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbnails = [...document.querySelectorAll('.list-item__link')];

thumbnails.map((thumbnail) => {
  thumbnail.addEventListener('click', (e) => {
    e.preventDefault();

    const pageUrl = document.URL.substring(0, document.URL.length - 1);
    const newUrl = pageUrl + thumbnail.getAttribute('href');

    mainImage.setAttribute('src', newUrl);
  });
});
